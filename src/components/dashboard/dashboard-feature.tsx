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
    "3UN3zpw2mJFGWeuVQxBwShTRzPZ8RNqhgtLj4MfC7Xdx6EPnwgLs7WpouemG5mBRxY55VL5AKwYxCrhHCkDRpzUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTYkPtiFGTW7Cj2noDLkPJGQtdr3jognuweo7hmLDUhkaqMRL8ZnfFyoBzeTdpTdXzv8H9WJTRMH7iWmytyFYWr",
  "key1": "3d3LM3DP1n4Ze96UwRSxpA7Q7V4jAzUnLPN74rZT5xr2cC9AYQGAHbtJ7TXusysarkJHQrzADqkTvSzysyK8Wuw3",
  "key2": "2JZT6gcEqvCipruanN8RzQs9nzacax9ZRy2QSQxM8vVbEwiFC2wF9wP3fEVbrw94WUcUDLrMS5uoPeYvmaCFM8eZ",
  "key3": "3Ab4py8WTTGRMixs1nvdZc5KdeGywVssWi73fSxJSfBXWh3mbUQdBJWwVGnWPNDd2dQW78VM2voQiUvi2jxFxGcu",
  "key4": "NK6ktSoe2zH9YJrG1P3dh1ppjQK2RND3Xj33imQfTKUFQLewrM4RWaksLpfAnk6evLbz3TJPMiLZHUAFXmbBich",
  "key5": "5z8LnssmfkFVt84Piv8nGs7LzTmZ4vVL3VXz2bRs1kkgQz9QzvhXCS8WLQPRTtR7H4Skqiatx5ZK8F7YCCwNQ2ZS",
  "key6": "4SmbAVEETqmgX53GcpYBeHNmSxrdHaKdCLaXJ1S5NNQpdHmXZZn7bauSsEsQ96dwVy54udLRAdVsv5GugzShraK9",
  "key7": "9mARWVVTJjKzn79RjkK8jyAyUccYfcJHcZPVbw931pwW2A5kMLg2rziqCevtoeGpF47BtWC65JqMQF53y1D9wRN",
  "key8": "9b2qpY5jhByyqATnKhGwWJh1hi93ijyB9PDRR28wAyoj2iXUxLav7XMho9PJUdP78dNRnb4Qrr5Y3JNtsWjqSDn",
  "key9": "5n184WjpvLewnWZXnLwmQ2WSugHKQbhjQfDrrSTs9E9a7AwunWf9wUKMC9ukZwnZYg4acshcYpuKB8pKsCdYF4sS",
  "key10": "2X6VWPbx2bi2Ra8TRJFG2oyE6cHnBFox1T8meVmrQzbpsdBgEvCgdBXhGRDu2eBdz3Tam1RgAyzGgt1TTA1CFsvZ",
  "key11": "5fSpLHJhAap5tteEmgraQ7YDCCgCicJ5JynKUTVJa2fg5RAmgqgJcrHYbGEsCjiJbruvVZrxr1CxKgaJLTfH5woy",
  "key12": "yRirCR9KrSX1JNnjXaf47LGj2LojV8nSNmXvFXMbiJHXoHMkzKKMyWJB5pXtLYt1D5q5CwgiYzwvGYKpH9yizCh",
  "key13": "2Ca9nV3ofULcKB54Bu6un2uQS96JDCNHbGDfDmFp72WEQ8dPB4oEcPjMb7ACxPGATJMqA3c2QTWgSt62uqyFUaBb",
  "key14": "4HqrcbixvGqbibeAcqZBCikEpRmWNEUU1i8nv95nyM9BCuXrVVwYYuKKQwgyr7QJ8Jo5f5TRMDqZJ8eDJoYhSP4N",
  "key15": "3imstxCJHcZ2W7yQuhc3vunmeNeY4hpC7yp8Xz3SGRijmEjs9J2DZvhuqGrp7AsstYsrhVCbrJmiLDGv97wSWXBe",
  "key16": "5T3m41NqmVXnmMWJeaV1VLS4Ua8E5fHD383qDYzsLvJK5GiMZSrb8m3vBwW2P9kEEN4Ar2ZfYaPRyvLBZTAMwsTv",
  "key17": "5cBGByoReNBDRqNDjVVB4fKTkqYiixrHjLVwF2qdmKMm6ar5Rnr53gPVNPKqo79DsE9dnw3jUcvuZHDgfATMggUx",
  "key18": "5d7QnjniSLeBkmspemYQbM5ZVDZJKRNo22Enyi94dd2betCeMz8YQJLS5aTyhJZLqBbBh8FqQnAbD3b45MFCcY3",
  "key19": "39fsyQJwUt7aEtwPiTeA2k4LEW9FoGHHKYeSNRtEFZTs78rUBrjXTMhra9h3rfokZ7Gs8SMqwrauNNi1m6jPUHJj",
  "key20": "35w7sMD3f6RQpg9mtw3Gre83CVE3rwR1sTGA1bVUDmMA1MPzXLG6DgSgDPcZGK858aEJBWsex3c74SzTnHaiCAs9",
  "key21": "2eH2z9kVVzEZhyuYPBCG9fUqumBhS8icSKw8ohrPPM8p3tMhirCpnWKVdGRncdiRAGMZQYVGdNide9Lb7uXEWf3H",
  "key22": "wR6bKeHAYTkzMxSdMfVKnFejfhqvSZfJxEBUK6ApW4vt8akWGxUD6dKd5RZHw2y9Liq2CWHB7PKjDmSPkuJPmgs",
  "key23": "3ttQrj9ysu4gLHSf2wAvhcVm2kaXsVJJg4JCFM1vfMvj9ZJ1sgmwz1hFvbJzwXTMQv5Ru8eP8cFKCYTWMzkVY6aC",
  "key24": "5VDdZJmPiXew8Wizo9Zrm8zK6hZpJZky3DXqbT26tWXMCjYeikE5etUW4DsKDBuF3CZPB1pKJyNJvc3GY68LR3Be",
  "key25": "6qjprSY14iL6mJQuzYKA5W8Bd3HkNfrJqxPx8yobuHNWWZWQbbzuua2ufypuBy36NWwtd3rxB7CZHu1mvXE79rj",
  "key26": "5GSS5yeseBya78tfdD9pyowgFPGaKV7qx35Nqcm8Ln3rWPZmenRbu8P2vXDRh8xsm4HpBC5Wf2xfmqvo38SvUBsw",
  "key27": "Bg8RSpqZvKXTbPeCYocKwMLAcZJX7CqCAdK3tH5QAexvdhywxv8su3yxjPuQtxNZ54uk4jf8jpn9V8YXNEHCiJM",
  "key28": "2N9rfUYbALbSYQ3Ku19EAQzpebQH6QDPMYZEQn6hSELtkSZnoDVsBZ2QB13R1Ty2ab1KwmhaBUkxU4CGEN6NtUfV",
  "key29": "2TUAgYNrAKRmm3MiHYquF3sjxGesVGamcVadrR4E5q9fFz9ioP12BaVetnSNXBp1xSiTcbVKXr3KbqK4wU97Vd6V",
  "key30": "5PBiQ1VKyc1DRZR5qa6AW773c2uJC4yprMqcvGwbneKXAAntW4GmfRRJkPArYy1ZoLA9Go8HBJRGjeEGU5WxQhSp",
  "key31": "54b7rXgrhwM9Ez8VGdBcsbbundisiRgc4eUXRtftPe91qVK7xHkU2Ffx6AY7pSTYN3VUNqibA77HiEo92wVRCAP3",
  "key32": "N7eU4HzRcBqP5BhVw4L762WsUqSueJhGRFACZkxmumZZMVwPNRNN9tVAzKGnkBhdnsE86sNeGbWpf4Ysk58fGXk",
  "key33": "36XCs9HxYsNRXyeVegHLSCpUdtffhQWX6X1QaqmSwLdnDoAFEWZupK2rKeofyjJM72rVZH6LyCkErkhHt4zYsrEW",
  "key34": "2JSpaxhjcjwSvXpgM7STzYMtyaxsjtpuYzyL7wGUyZKhSgCN8SdpBSxyeT2PerTcpJF9x51y32vwjKcykaLBcscL",
  "key35": "4b9VZueWLdHocNP9RzKdEggnEh6VwpMrZPKDQtc16ZMJ9yLAYgiRtZDTnjncVgnyiJbVJ7zZsUu8Ch8KwLXVZYmp",
  "key36": "3ZuSXyMGSM4KzVXe6Ft2T1hxFTHQs6pCrn9kQXcHinWW9wjuvrn3HzZDCXCDHTHLAQbx9HH3QsjKCbA3rH2cAuUj",
  "key37": "2giToRFpC675zJFxfSuUQZwuwX2th3VrjbNPBuGmdySvSuFgARZNLj6rejZHvGXgEmGZ2WMu1R1dg6SebGNWDdDR",
  "key38": "2xP5N5pwsHDSrWodrT7b4wMGa3wY7sRxKsWPRQ6Mu3EKeNVYg7nvD7hbB7KazNeeXekJubboWHp79qTMxPszfM7n",
  "key39": "5mdBPfnxqwFrYVTzjfVvmbV4xKZsL3gBR4dpvyNWManMFXkJvw2R3kuKku77THTi3N9CdKUjvoyXuoh48r8u33tQ",
  "key40": "5KcxufK3Xr1gDqDbGREy1TxYETFNQvVx6aVVrPJf9tVBqmoksh7epYZFWLQFebLdDcd1r16DjM5y4tcWpK5fQvox",
  "key41": "kYYFEp6i7dj85ziNRLUGufy83y63tU7cg1sNDAyZbcdefaVUwbZoqiCJhdr6FqU9dYTTR3BgKSQfa1E43uCJ4Z9",
  "key42": "bAkHMhfPh5TzDLKT9Geno7sm1k7JH4BK8Jz69wfAYmFuYV9sA8Et6vUYn1mqnF28GSyDVuoZBGhAPGi9RsxsbZq",
  "key43": "1hGh9YCY7JumrW1TooaAfLSavWrYg3htFwAHh3zWxZs5VCnpyzjf1vRxzynuiYdqeGriDeASm2Cb97kBwpxqHHj",
  "key44": "zCN2C6vUFZySppXPRYpDA4JgbabkLDNyxo9D8MuqA5Q33PkgcETrw9zUJ8RbzsBqvxaHfh55S5MEtm9iebuK7Qt",
  "key45": "5tS6TUwkwSCmt5KCuJzmcVmd3mdN36dVwGceZ8X3T7G6V2ioxzabCgyW2SWdsgjgGG4e3Y1jDJfnTaBdGQyzK7TP",
  "key46": "4VNUGYinRYpenbpvYVYcGpmxkZUa2XoD1sJu86L3NCVyqW6SP7TTbTLm1xahSLDjMpuA65MyWj3798gKoDAjajx8",
  "key47": "49RUEu2B6TTcJu3kvsmNBPgLLtEvDkDgpyyRQ6DvDMupkhPWMrr9Z789LgKUoS7XU2uNQdej6ZsiodEBS4BmYiXd",
  "key48": "59YES8V4A3P5yp7Nsr4thYGxHqeCBJ7e53gXLpXdaJfJ7WtH4NkZ3v3TWAifyYMh5SP1zdDSYmKS5k1aeX4ZuFDR",
  "key49": "5fTmchQqZ3pDKD8VNH6safs9bTzWGgRNPbrmMxe5thh2ADhgpJ8khXmAUofCvtaqpGBoXxpjmiL9Nj4N7BbBLPc"
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
