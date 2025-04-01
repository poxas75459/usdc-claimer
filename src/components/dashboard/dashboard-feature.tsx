/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2mLswcG6ffS8j9c7oisNn17AbdWBbrcGcRDN1MDbiroJEY5imYFLWXdVe7uhAXsyBmkEV7A3WXVbpRWcNFeVBpod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrx9tGi5gqRdZZQVgtMVfksqqi2WwT7TuDL5LQq9FSVosA5aXRBmrLCUS6FMhmefgGhZEhhKj1xAkXhLA6wZ8Vh",
  "key1": "4JFZBhPdfxpMLfaVdcntFPMhk8HZdjKDfB11FPBH71Uj3M1Zu1Ky4xsp5x35b9jSQGtGnYyHsADk7rLDwMakuzps",
  "key2": "iHmdC1ZQaBs26HQ5i6sBC37bDmrmYCoy9ZFTr9ujHzLRND3s2iubVfXfnmiQ4DH5XzqSjY6yYNH8DV8p3vumBkm",
  "key3": "5kFoZYkutVYzmi9jdZnTAWca417xByDohwD3Z8h7Vw1GqZ96o5JMJBo9o1akznnGUoKN5rAauX1ph1jWg2Fd1o2T",
  "key4": "3Cwf76ZFcu1SczyYLa8UhwJKQjrJAdFxXUfm6UJBesE54argeXKbmXPZMAPNwGbzAAmFBJHPVak1J6tjAmhwQeA1",
  "key5": "5FfPtr3aTutHFxpoEvkBajASFgyQcUj1CK5vQaaGSrJZafYHDMe4EV9PDN7PPYJqFrDppWeyKkzsFWe3pL7aeLGL",
  "key6": "26ZVgKDJJj9htePgdM4U5craho1L6Q7au3Hm4HgAc2m4BEPsRqoAjPU4b3Y6RwW83ERvr1uXCgH1SCLhtH7Rajjo",
  "key7": "2FijoUWsM6DSZjozuN2sM65N68yjqCvAvSiDjhDrWCdjq65Q7bc4sFaEE8g4aaBMspgkq4NfmaCWmUBdJKrieMSo",
  "key8": "kitcgXCainARU3WdZXP7aVG4rJSKrh6pzP3r4zkxXGvWJiSh7oMEoi41gfxVe92VYEoxjgf4BDR6TDcXULJdWKN",
  "key9": "j85bSgooHKxM5kwMvg76HA2Ad6AD9WND9RHsgXVr9h1wMYwEtjTpMpz83YgNB8bdiPbLtGgzxB3KeiSGiPAeavB",
  "key10": "rrJMspVcn7a8A3GGYh44HirrxETfrawoyeyz6MWpdLXvoTfTEjbCMguuCe5KKSt9DftWL8va7v4gP6yRwF7F4nw",
  "key11": "ZdiwJg4BQGXLAgS6DpojeyUL5FVqae1pGCWCrF9Js5BmRHhUVSpWcdFeY32tQ9MJ6e5Mrd6jhVMTQEtYLghcKNv",
  "key12": "5fi1KN8MrKTrkgMjegPQ15p58QZQWAf6oB7RtLsdsQ1qERkcsw2rAw6SthMJFZpyUZg32PtqVTgoDJ5TcohzyDVE",
  "key13": "4sSzCbZ9thFtP284SvdMMzXjxiayLJoExtpdiqWXFmxwCLmH85YCDJyHKC6sDvFchsARV7GZRkUXxtyUkuj9gH3Q",
  "key14": "3DT6vu13EHGvKRRE1JwmGQPJHefoqry75BwQ2voBxRp6DdppUQDSg4SbKf26Pf2cwRn2tN71CqAzyqpR6sGJpFT3",
  "key15": "3PxwczMbRxeXvaa3i2JG6LH5UEZ8Ka4ZGjQJR7dZqepHTCWmUVrX6s5X4nqYW2VKGfHLJCQ5c2qtd3fALg59ET8",
  "key16": "4y1334cyiUKWaZnSwk68yZQQgYm8AwsE3fsWQ99MXgxgkZYyamo8vuaw1zRHuZTA9NwKtPadx8ZLfZdqS7eXiwUQ",
  "key17": "274QHaEaob43zuosXSzLf1PsVAWBdjL1DYA4epRrWWJEErLyy3JT3tEHss9a8G94kvZYRQHuUqJenFXH1FqLKxwN",
  "key18": "26urJnqwSeBDDASLL4DMMeDqUqPS8mckuwJjdMoaCn72vjhCu7Z19JeJS85Pfa5mxNbkySoJ5ygEvLNK2r6bpERq",
  "key19": "5HLbHRykqFPrDwqpLo56bHHMoDRnoTyuHd8kT9WQHUArEJ7EBa29sdihGEkwjTbF6TvuvzLAesfYXScRVW6jH5r9",
  "key20": "3YD77BZNCr1CCZoMyXv3e6KLHUfzTNn8C9oUiZB5g6N5vgofLgocTxs4oVmJu6xn1mKuGStTGSjkxYPG26XwxF5c",
  "key21": "3cd3PQbjVk7saZhRGGz2Hkhb4BETDj8b6LjTQBAtSMBLWRh5ruDhJ4Xfs7HfjafhDSkDerXVXzNAYxcv11t4aSDn",
  "key22": "3ScbwXsEotUpPkyKigGh1FTzc3rbKWm1gfjPsFdRcefQAusYsHEhuBcY22P37UTJ5yC5GQTTq1kkmvhuFo1LghAa",
  "key23": "3pZFPydNwYB1BgUDqV52iC8ADmZbU4LHFjG9taDyAZSkxr1fBnbHuCYJuN1LhyXEVyNE1HALkfXsb4ex99L9mpyQ",
  "key24": "4adryaimzfTnG7szDhWYakW59v1XBkzYex2hZtPPobBMgHFjbWw6s6FNWwGox7VZX9RrTdqkkUUv1mAtaGU5x1qn",
  "key25": "3EGhD6AwMhabTvf7gGgJUohTz5BYidSTbBnSth5F4uZ2VtHqT33uXBSBx78SZ7LF77iSH8oJn3BUg6ftXbhrG3o9",
  "key26": "5JwLF396Vi89urE1Drb1rzMVCFRwJP5FyJ7PfDqbobA825jXFwyzzAja6TpN39xcFAugriHVUNufAB9mK9zq3ZYN",
  "key27": "25FEEYoTRF74WAX4zbg1TSuU62FiCsVbGmJyfTpEHh2VJ4qAQFMP6QrX1nqYp1rsPcyqLQ7nU67mwLfpisFrmXw8",
  "key28": "36DR2JrAnQ2mbwjSC9UCjo4SV2HdQdwoncwGidcrAwEJJ6o3rnG8WzWJEa4AEyMnLzRdVRY7tBF7CwvMS8CY9nqv",
  "key29": "pfnQYVNxQhYcJdb2XnwY4stbTv9vigQdig2W74m2XAAJTvuLnc4GTJKMFMoN6DKscPaJxPhGnLEnuf1dBCnoDXU",
  "key30": "5XVtNLHHen831gjrDwq6iUz4foR5H1u8vrpG67ptfg78bRTHY2eeDzpn7KNrFfquVPomV9qshRiCMDEsgjqFzcF8",
  "key31": "38VPcEdAb9ptAiog2z829CQz7sdmT64Jexo3jTjqg3sTZfTSzxMxxoyoeWu62i8kpcS7AUkJp2Pn5MoKkQdJJfwy",
  "key32": "x9JtpDipaVMMiQSswwtx5EqPieprQitycU8FEfwTgTSVA5b8r3Ec75uwuseaK6JLmM7za22qV553JvyG9Azc2Jf",
  "key33": "3fhuLC8GcofzucphCeaAtcxxBBa75Pc91Po1NkscN7qBSJaJkLmB5VwmQ7HRBCn83rGEHuvkHJe3ZiP96en6JJ51",
  "key34": "CYGuyQqHmYBEdNkqiiwRoVj9bqUgjTr6MRow25YVTup3HhnyvbX9neR8pb4gfP3p8Exc1Y5dCKMkj8qnrsaoe9N",
  "key35": "3bVq1opDtL4eeYA372UVLezfEn6J9n9qPRYWEG2VCqRwp7npmnEsguMtgUQdNyFnxQ16i6F6DGYi7W7WBNLarpCp",
  "key36": "3VU7JgmoVQVme4B8DorzDnNruTqVanTroyrx7Xo1C1DMk586oxvM4hdfPu8i4BVKtXT692fyuGwguLwJXvULXn5W"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
