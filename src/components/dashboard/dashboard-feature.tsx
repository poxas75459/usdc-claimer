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
    "Zz6sPiwJoYx9apKayHE32qak5US1QZp8w5X5xgGAjRf4oawK5sNxNkQHApSbvQhSoGkFP3pxF6oTwqVaTF7pdnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7LbgnDTGbYuJF65qzgDTf2DNvkdY6hsSqwPwW777VdQKZQewxbm2Ss2iYPUZs46wsaHZ6xA4svfJ2QYhsG1Lue",
  "key1": "5XbpJhEh1W5SaF2HERiFVuH93zcNULeN7GcrJ4gKDy8UiaYeVjKQggaes9moLS8Q64Z1uNXqWKuzncwP18SvjoMp",
  "key2": "4bAtpEcgMJQxgBCwQnc65xkf2QvPF3nYdDJKfqJreRR1f73CSYVp8mTgHC8QUzEE7D6hqDrAxn6sNHE3U4HjJw9A",
  "key3": "5MMVrhtiHJQErWcffa6kmaqxwxKxXByzRUatkiFcHgnvUFGEamP4pHGdh7Xh3Av2ubZSXJnQtd8pKjTxJQdzD8fz",
  "key4": "LMey3Z5rn5H8CHPGXXoDzWwMe6aBrtyPxYV2KAqJdpBy14nn7gnooHwFdNp3E44cFfwrXw6Jt1wZbVMtdfjNoRy",
  "key5": "gtkLUC24F86Kq57oHc7E3xgsEMDJHkn5VJEujudCYKa3iFFgEpV4RngoLweuXawzgpKGGxhXFqNDTg9onCEmDsc",
  "key6": "2k35AScqRPXAVioWWyDL2wUWSgzAr2canxxGVFaGDvJCx4zPhzo6Z4ESce69r6KUiHeGqkKZA2rXe7J3ZVBvSqn6",
  "key7": "2unSzJLYjzdQLFPtzJ6p2JWTi7hzBzz3ymbXf9GhqWqCPbsdzfNvKiNaLL6YU8FZWNFFPgGNraBpwE7w6ug7FCRu",
  "key8": "3UxJHRVNFLjsKv86crLZWWw9We6QZyhaVTWVQ6GgCc8iNfkDSQnyXbBuTqXhcrTzX2btj1gKvhdg7pw7mUkiTzxk",
  "key9": "2rvqhRV3JAxRA4FBGRRFyNpDg1puC8xKGr9DNuUE4Qb81morBjH54QRyWwv91FkRfCgcfoHNCqpPvt11gTjwX6Un",
  "key10": "4KhrPboF69KjkjUNXBDqYCbojCYSG9u7kupPDMvHUpS1npMESzVFGM9NxMdnMMW1XJuDatNrt776SFG53BRTJM9D",
  "key11": "2KReyVmX6D5qBkbGKrwabR2GXK9DBDPyyiKo2z8BfJiDtmLr6Jf9SzMniWuk6SwoxNuMX2vVY9jwPQsdFjKru4hW",
  "key12": "2jYzdi2GWWuqXQis1vMNP9eZCAjegR9ss18z2Vb5AFjdKFwYpxF1Uo9BtKRxSjPxEXe9W6juJeWMdCVgZCfSo8or",
  "key13": "5w3yxNcobPRNPK6ooUtZxKqPejwt5RWEfSZLTLMgrMRMfYQEurXFoAajfcJmcwfPFwd68RGkmNeLYhKrK29XFcdL",
  "key14": "2rKaQTiUxcgCiCUouEto7VmhZ2uyGpPUQn4Tpwtb3YnTHk63SHYSWpbpVbwR5TNCSeskyV13kXVrA9M1CzpjNP3S",
  "key15": "aSfwomRYZBrsarHDfbzw845xpTzfLBn7Ma9Ge2A9RxxZTcrNQqQSGCaYvve6X3o6hzbcD4CydCY9RdrQ3C9pk3p",
  "key16": "2L3pQGLau6Bv9pKenCn4nSzHFfzPmYVyYT8tBgQpsDUFrNazWxMAJ1hToYWcSjqcGjeyA3xn3wGZSapvRHHqaUix",
  "key17": "TB4R5KT3HhFmrryvMvY9BYvR526W3xFMT544MPSYTooxdA769WH2Thtj3XsWVEw3vRatfwpNiGPVsNWbjCrdaGM",
  "key18": "61yUKZargpQW6SLt6jGe11XbvtnJZrzwtaWpADZapkU7BZQJ1G7JubGeami9LCJBZEwofSkfP1FfLC8UabUQUTHM",
  "key19": "BRD6834crPLUMPVreoZZwqZXwKNHL1FH4ZEjNk8BwCWJNAid9Zt51NtJ7fBYLoS2X245XdDaaey44sL7eZrvedk",
  "key20": "2N5Ty7nw9QUEjy8tKS4LoR3uoqbxDhoehNDoKBFiwfw8qeCgBfMmFjLWzdHdbkZ2Y3bxZLAAgL7DUyKWaVKgWZkZ",
  "key21": "3T3AdnJc8k7tz5Ca7GjeLwvs8jpV2XQWhuf87rSB7RsEb7H3qFDuVMwCR3EdpYHfvheWR7ptj6KUB4wKFGYgg8Vd",
  "key22": "4E231nqwUBQttH7QhHPq6r5jYLGUDmsFYG69VehPJKk7aui5Vc7nVcqGxM5SfsqVHA6FDFFqzP1uVKEdKTHyepiD",
  "key23": "2b2SDsb9gerfjZRVspNEtixKRRziS6yDVtuA2NPPPu8f98Rxmf7BcRdNPikiMNGjkMLMK8GPZmrPaa9FNxPzVCSW",
  "key24": "4uPK8QDetThUZ5uzJnLHRc3MwZh85cD8FhPZzq2CppPieQwFU2WYeNyAtTgvPfgBN9WDs7HhW9NRuggpyUSpL5Kt",
  "key25": "3jcDzVx7V2fz83cKdhNxdeNfPhUDqdJ4Vzo2koDdr9iSdm596dpS1UUwGbE3EQywBS6btEp2AHEfWdi87K2mijp2",
  "key26": "4KnrUGzGxx9xDc21qBjEqDZdbB9QZcrSGdfswt6rb7BXjWCpQkLr9u9hrccwPuhDgvXFQ5XWCtPZondizBxBf7aC",
  "key27": "2wZtXZayWxiDvZQH9gPrWuLhNbUZivHKoxjFnX7tTeH76ommNcV2cY3yCt6yvspmF6955gjBLLSiLCFrGnhfPhfq",
  "key28": "2KUfK18s1qc1HbpmNrqNENf4hK42NLMB6fQ1XViTqEHLpgYHUDfV7aWWVLxQ13kYL7Gwkm8RNDreRYG7UskAumDR",
  "key29": "s7GKqpgwCXSJWw46UgppB8Jb4Z726f5x9JmQqNtF3EVK9ciVBBH9Shj2aDdjcW3nBJXdmh9RU3obCrvotcjWoRT",
  "key30": "LgkFzGSVvufmKMB1L6sSidcy3yPYfnxxdBB2EhrKgBnv5WjbGLQsPvwSaBByWthtvAjScZ179SkPKNJ3zFZcjEV",
  "key31": "vX1Uc4y8PQ18qGPTyHy49VF8B2SqnR6uXvWzD8tpnVidWtcdgP2rk8rsweswZvTLfZNQf8q3jJLWeAj3hmrXWaf",
  "key32": "29VQcLUkEBcR8wMUSym4DvcnDY5hV7ZxN9fE2JHYAqFeW3UYCPpYBDD4fa17xDb6RUgsH2anrvJRS6hh9QKi21dH",
  "key33": "x7i3urY5BgekqBWz6bTsgXq9KKR6L4ckPAmZnPJgS89Bj7bv2Ftwokp2WAuAvvSxtxjwsGAD7pWCV5W55BxcVvn",
  "key34": "2ru1L9GxPAg55vZfpsCJedSqvGHYig7JsJ2hHdHt6t74jeZSdhfipR9juvCbft7AJFDvYbMm4cK5mCPKDNwiZ7a6",
  "key35": "PcFG11VfAG9AqFy1Q3UVK4jduJ1WefYXGpDygdLKVHkqoJuoYkFy9aM2zgtTuc3H1umPGSrir4jFTfSKq6LXMbz",
  "key36": "2BreoBCYAixYcdG5VF26iYg3mBCPnDb3bEe7tTZJmZM2kWvcDNXD2b5Drwu2PjkKoRFSE22obPw2GaRu9VKAEg1Y",
  "key37": "3ekBzDS2tpuQwQfKxTdcT5Yi5gvRXqMqVAcE3sqiBrTZAzdurdbCCv4p94SJeGGkXqgJg7cunjvUdcdhyu714xSe",
  "key38": "5Wpfq24GwZcRFD9Ceczk9WEFXTtCzAzyRLm7MVztPgecX1eNzAW21nSKio368iFuX19Fdkbn2vY2ZfpKuApajJuz"
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
