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
    "2pHnrpmpcwF8koDY1zaZNUJV6Z3m8iBq4eSU75TaBMpm3vZMZtcwk632PTUVa5wHiJHSq1uMgBuKhsUKNJffxbKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AosdaJTJ1RmAiLZxqcLGfatjNCXYsyU5qHxiYbJ597Kw2xeWyo8fV9PJeXp8cY2e4CV3n4zRYcmuQ7u1XiPw8ZY",
  "key1": "4ZTiJNx4WvpXi5EsFKeJy3Ak29V1XJrETiH3quTivFeW9gG6ndnB5oti9rxScSQTpmPVtDhWKFoTY1PrCUwAXNrf",
  "key2": "3D57tL9cUDEB3AnLi7sL2iXVDxevgUigi1PiwbEW9UN3P9KrRyAny4KR3xtyF4YdRQ1rTxM9pEQkqZPA2hskdbjX",
  "key3": "2LPc6twT9NNA71B9aKrYmtar7kx4KPwLBCB28ZJUaAu6nvTZxCS54EJcmuPGMrDzyG6G3ihUvG2qbpN1D76GuFu6",
  "key4": "3bgiBGX1nSiJS5GSF9QWPTFbQ1kuMFqd4sXhDwAbu1hLmNJC4egEk7W1UnymeHnjBZecdgdF8CHCraAH6HwHs6FU",
  "key5": "4pjDR5SNyVcyjSWMagJz5EpWuYS6Ay4BHzR5ngaNvPEYtW5Uj1gWPvPzLpQaz9JHC3kvoT5L4uTriDkWyZvqATtV",
  "key6": "311JCHcmGCF5uq2L3y5vjtPRB8RwsBmfCjToCUi5pS8JXZqGtxFWhb2MHoC9HNUXMAEutStKAkH3PyJVg2Q6p7Eb",
  "key7": "26RDVjTQ3ByyVdDSrJyoCkwuKdXAf4JvP7H5KCWFeD1DPoJXbY6uRLquojw3sLEfh2dizUyM3GFX3p4nA5dMAwC6",
  "key8": "59wt2AjAT37jsNYyRKgXRMaWjiMnVtcqckLpfa5FWHs7bxMcbB1o9CJjfeNp89bRVRvGAgR38QfB56ybrAE6m3oY",
  "key9": "3oYgCps5arNutWsxp5H6B8stZUkETmRr7CvbRGCiEGXTt9f6sd9PDyuDMJMomS9TSwKuekEamx25LMV3AUEXoWFc",
  "key10": "4DNtArShBdCVr69het5UabMUiuXQsp37mt6fQFoDqhPfEcRgnpejhGGzPMJz8ioy36Hg8JZfCAc3SPKwGMkyyWiD",
  "key11": "3Ws767qyx5xgurBoJRELKh9pm51i3tnmaP3SGuYnzjgo27Lzs1wVEpDV8fpiHFuyCKYWnY2R591ZtuwK1SrbcCCR",
  "key12": "59hpqyqRLuGWNCkkkrqLYnQ36f9vLSVSUgxACR85hEn3KH1Nkywv3RFWLqqZhNUuKnP8UAvzkQfV2CefJzZYcVhi",
  "key13": "3meqhPfsxndYsQKPC3VL4cdrHZa66ZDSsF9cFo1ewDFwEA63XazJEbHfGwWuKkt7y7TbgGevV2Rwvr94j746nCCB",
  "key14": "2zHJAWW1YoWcJwh1FV6PwaYbnzw744sjGGf2j1hUstQKv4mKWdvUmDusLbqNqWT7GnFYDtdtCd9hDxc8KWdJoE2j",
  "key15": "3ZWgDAc4cVB9PJVDVfVvUaaV7YSZkXb6yg9orbTHKTCHszCo1Yen5FKgt4TudScRuXyzvaX8qqkgnN2Eov8S8PLy",
  "key16": "5B8QwyHsWWZBYCfs64eJgZ5kUVxRj67JLYw1vEdEetUwudE8ziRFLtzpUEva7fCf3HPFemc9xhVBm6Hm6G8RuFaG",
  "key17": "uqmXygrMozQ1zeSXyUYSuj69nWVLJBfTvf2UfNqDUyy2vTJQXXzzFdN1HdE6Gjs7tn1wLcgVcFy7tqJmC59oHAx",
  "key18": "2yDoeaav2cAVKT1rLhUpfSQ9Q4HkqdTe7DFQWtSWmkD5RCF35v7grXEghiwiBooyZ9fijzSGE8f9gxLCoXh1nXi5",
  "key19": "GWNyJDSBrKJtpE8K4GSchVbHHiWHpkG9BQhacc6pvnAUycKiaxqbVQjb4hkPkqyW1jcRCwHHAQuLuoFvJcbbpw9",
  "key20": "29LNF5k2bdLju2Q1W2cd7Yk6HgGxY9PEHBZzv5okdjaezmcGNaK8X5eHkKRHriy16dftdyGg1zuoWQep4BPVrDuL",
  "key21": "3E58X5fWrhw4U96HaMWWgQ4dTm9vTGMeMxN7QC9gix42hhiyXtx9wunkpnbqx3aXUudPmMMPi2NjEXJVZ9z6uUd5",
  "key22": "5PfbqSZAgiBkzZwQoahHosBcGHnm34nuVuvMXYNyie8cA1bjJfvQyq9Fpi3aB5VYCYSmHpkSfgB9L3hKHCFE29GA",
  "key23": "2hMt6CSmHmo2ndig7cyC1xMo9TFaSZyLTQ6ALY73CpQf6oNGQkzSQSpNiVcdUQAjDGPXFGjY3ozj2epxdDoTztL5",
  "key24": "3eUSatmbRT2jNtRGk5XNFBWcQrtr4nx7Atog1TNpo2mrCnfu7fyyEkmQPiJoBCVXHGfrRaRryEdKeM6eBUtNQxth",
  "key25": "PRraZ1c5qwhsXAQtHHgPABWA9Am2hMtsSLAdiZuNGq5WYrvSS8gKre5Qa7YeixuD1RaZbrwnAgmgwwMhTfw3ZvT",
  "key26": "4rdoDLdbkbt9HMXku281v1AdrTwqNrd2VEabzSzwabNofQkFbLFQBxFuudB4mh8rfG7MTMtUEDXkat2ZfLnzHpb7",
  "key27": "3Qr8gtvNasaH1H821XfRoDqJCgEWEnk9TWdtHw8tYZudYx6uKtNGGjT9sUhQSRQPcJ6Kt9rsLd8SVaHCWa6GCHdB",
  "key28": "3291nBFFpyfW942TY96AoKrPAFXoVVT744gZj4ZQSJWWBqEiQ527KpGBr7yVRXhq3n1rjuKeZWrjmyE8MQfNww42",
  "key29": "4W1G5ructktk8N56C2AateXJYMgSk2FPkoB1rtyVwvFzjnD8xsKAVr4Had2KXhxKXCAzn5vhFJ6Rwbdkpgxnoas6",
  "key30": "5GRqHzSVQAJGA9mTSiVsdhU3N9ELerfCy5nPSy4tGEV7Judq1YeY3dFYzweQDTh28pZeyz8QdwS3aRz997EfXTxL",
  "key31": "5Tq7Pyva43g4BrDd6UtQbdqtUeLxorsyRHDzjatLdamgHX89kjnQj2pZDfESqPf6nRn4gz5DM7KNsCPixHjXW5HX",
  "key32": "3Hh5cNNtEhqHQ4Z1yxPtxUACSbuaCWSRPBsTdUwH4Eazx3tZMSZkKoZ3wKTEBHeGJbN5cTpbChCj6qwhcfoWuiot",
  "key33": "KZdxxua1ZYcdChHu9PVYs7j8aqpBBdQN2ZMfNuann2q5LK1DsnkNFUD4URuKPxm62av9vc1N79kJYLN7LzCyBhq",
  "key34": "4JoUJmgDLPD9mKNLqBbhim7W1na3fGxkVkCkvwryBstAp2cNtEHZ7jMTy3XmSr7sPUhkmzK74QLUGVBeMnz4CkEL",
  "key35": "3rDcwTv3MeUUr9HTwpCHeNNN1p2GxajYmb4MKrtKZ2cUGoBTDtSgSegiz9N8K3E3HrbvK45UdoYz1ZJKpMNCvJRL",
  "key36": "4wZmKbabuavHcfnNPmnXcqf3GiSkLyaHUmN1tTYvy1vb2RLc6PvZrLDc3msiUbfg9WUCB3aABNWiQMyYWk9ahzXE",
  "key37": "3ZhUbL1hC79Js4nQ2NbjmTBdNJzvJMGWk884S48Lbxa9mWDUNLi6izDRimYUniKJd7c1q4abDG7KGdqKoSnXZBJg",
  "key38": "4e634vXps26U3LNyNrqtU7rPZwCgceqCoeHAGi7S2xSW2gvqbFFRKCrxbTws2KX5DitnZMcfjvcXcnfAB9NUwG7J",
  "key39": "8daBfNPdBRVZs7pgmJ9oh7fMf3tzfja2mf219eULaWSnfyQhan9EVPBNuoU8h2RaNmUUCg82JpwZh3bAV72ksd4",
  "key40": "3saNYgGpkFEpAnv8TxqHtx1jrkn1VvRm1gMjkLSb5XPsP3aSNEeZp84aGQeNpXoTiphWVc3fTqpt1Y36sJYVxynX",
  "key41": "569GHY5XffAqwKLJtZwhdseM4237FGxhvruVvqZQMZHRHCDWAkGQVzErz4bVtqZYruwhtwFFLgvGiGHnUk3adqUS",
  "key42": "4jn2swCCDHMYUvH6njqRLm4ws6jRS4CQLHPfKhdBKppueX29vnWpLJaMqqhaDui1qnnLPoPHrKvBhkfM6KQ6RtiV",
  "key43": "46pyfE3bkSHkDgSugZhYZeVxmVmXhXWTnBUHNK9T8f72oi6cZZAoBYTePg7aqKqrAt4ijjrgUCfCSxxokDWECZFD",
  "key44": "T9V3XuGFwdk2uABqkY68oGjBFyeMDM3xjQerfoyuZqRAsGpZGZtKWx3KagSk9zRyG6x64TnJHR9UbaorhUCf2E1"
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
