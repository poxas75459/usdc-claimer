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
    "7egdvM7BtpSNuDLrUxYcNb6MSx9Ah5abtB6rncf8rwsdt5Tye5iu3phNtqw9yrH7LbtLN4PxXS1fU1fFhaFTTfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUsgRcbqj3uqSsG97xUnx75HCE792SgKLgjHFZWRhqaJe6bjsbGWN7EPiMypvE3WLMJD2XhmcZGgJUBfuzHcttS",
  "key1": "3iHs1BorbPjH9qneA7rq75B5sc3Nb92cbMKN4cga1nokqVbfCNR56jGus4ch5yVWqDP6SvezSnKVdxesHTcjKoff",
  "key2": "3ytQcenKKQuNY6GSgdCqNHc1Wy2FmpvW6fuV8A5PwHx4uja1hEu1GBfcHAtZKNC2bdy2cBBi1o7gopAJHFNTKKSY",
  "key3": "64Kf8oaooZZGfpMX8wPCRosDPEUdDanrMPWpDq762y2WiqM1MXcQyrTshuT6iM1qbbzj1E9KPy1eXG1PS7qzFn9g",
  "key4": "2bqvryd62ntrwHDpQsQ1TiNNPvRA4itLYGUBnne6fZtWoon5VpTnPZKSihCtBk6PSNXL7i25GhUH9dkaAnsaxsMH",
  "key5": "5t8ZjdcRmN6JjDMUm5H3WviyZQrBzk1j31hgDtLyA5YXVz7pFeKcUy6eXd3BkpFAV2A3e8kmTku3bFEFZZXGAGGD",
  "key6": "2jLJDmKiQQVRSWJv22msReM98PDLoMoxsjm5m1cwG7xfsS3LDhhBNgPPGXuZ2tuk2rEChCATj4Cg3zPC5NSLnNhx",
  "key7": "3kmoWq4qEm95FEhSP1LzAyZY8LcWHr4szQuhoFfGBuvtLtiFvxLu8bzX7ovN513ckxqr8bwPghu6F79xjKEbRBHx",
  "key8": "33ZSSFnNZxHVVrwpkmnib1qM5tvfYyPfdfFmBDwDK48AjmYoscdP3G3mws6oYDvCKtBCHFNwpC7ZLJ92zBEAjqn8",
  "key9": "42saWmKuexXjiZVoumVvrxF2RyYV7BrPTAg6oFb8e7aLySFVRn6JwDke8JnvCHeCp2zfEFb52exPiezyBg9wQuNX",
  "key10": "c2o7SwjRdC7nCw4QE9hnCu7S31jV1m9CpXBJJ5VGR89NEoToJE57YGwCTLwoZKXBktEUMFw93z9DrDbqjhGDWxU",
  "key11": "5ZmLzWVr2824E6M9rR5MbL9c7n1m7vz1pRjo68s8AmMivJf74bpg5zTWjvATCpTEHzdQL1rrUoRfmVDC7D76MnMv",
  "key12": "qfQEUBKHWKEtFbnRuBu6NkNMfConufypdwZbNbrxSzYAQmhJ6euVwjJ43qYYHfyTSAq9mnNCW4jrNU8MaDuxHWt",
  "key13": "2uTE1FMn5ANkeHKQMnNAktjNHnyqdt4gwSeAAQizKVUSBfcuCPxn8nr4bjDGumgS2qiFG41KCaTWTk3pnpPqx1fg",
  "key14": "5ha47xdATfWjdqRAQq5bpVJz14vEhRc3x5B7Z9mbaQn3yyxAxsdpCZ1AZWjpBzugXQbKcfBVUS3ZFpjNYVoDQLo",
  "key15": "3oidh4TPwEYucuRfrz7F18yaHP2XuSq3pRCTny5J6t9f67PjEgL2SMTxAKs9pv527Wj5HpLf4ewZt4xPXkXJryGJ",
  "key16": "reHa9BsELrtMxSqUVBDVVd5qBzuNyy4pCAu1Va4Ywkb8UNXEHEM8CMM49tgXanhnWSYiCBcnhjsAWXDsinwontp",
  "key17": "SCcxXkk3WZ2LgQWbSiroMWb8QGXU5th6GYQ7pEMK1Y8mjakHzaRJNkHp5biMMidRQzhCT518wscWzgn1ktEhWeg",
  "key18": "22GSTXCmZKcSHcdyN4gzu1Lcj2UZvkKUwRPxnykmWZVzbobymAv8oSsNVvQ55c9uBk5rZSX1dWvaBEf7SEy26vtf",
  "key19": "FrYbpSDRi3dvV6DWv68CofJjWbbDLNh6fzbK6Wwhuwvss6jGfoLLsj3dTjqzufA7hMSDBG98tMiT2tRBwBKkgrJ",
  "key20": "4BtV9TCYitzSUFQiMKSvSo57uzYrYHwcFdazwAepgcU9kTFhVwNNtkS3uWHTqe8Bz9vw4FbZHAcoTcq8jo5U83vv",
  "key21": "5xBUGXVFhK5XSGzHqkXAGKjkaVAKTKYxRg48mfZtZogwtimyxPdkB4Fk3SkiBhS8kRcw3HQaBZUoNHED6Hu6cukY",
  "key22": "3wFhUCiu8kfrVRnU9zpoYqcEqvYB2EG4osHcjDmtGFujWfqvNEx5gDqF2KdMCFGatftDD2YyMKiG3XG8NBfmtFtA",
  "key23": "2XhA2uoQuZHMkEdFU5KGnL62s3LpaFQR9c9T6PSPqjcw2bhfkoypE6miwUkAQbfonTtQ9S6bPkeE116LXpqwuUik",
  "key24": "5n3vdkRCYR1AQqsta285DFu3KekXUfGCGxvm8SGqANLCnuTeDGT9aNUBVrjQtq9Wd5rybJGNSCVJpp2iMi92DKLc",
  "key25": "3qTf7r4ZBXaiNaM2ERsdbxSvvfdggNfHUfgUZZicJ16CShWMvaqDV2xu2Lmwva8nysi7pjaXu6buxaej2NFXM94X",
  "key26": "ewmKg9oPqBUpDaoLeLjG3sZaRqB1RYHX8hF2oNc3nk8B8ytwFUe5BERyDF9CXBuZ4gv27hNBmroVpin6kAjzdRi",
  "key27": "2d8FDA8Rd4vK191Et5ZGjEDMsRK7FEcLi9jZukMYAqyUGjweE9fvFWzbJjGKDmSxmVTvJmqYvfgePdYa4wRzDC8P",
  "key28": "8LRt9MLL8zzNA5E6cefaHdqnNyzGUvnwqBCqzqp56Q9fmBF1pd2ndR3bbymmrjrcaEYLVA8RXSt4Cewh48mvhcQ",
  "key29": "vGFuySzGxXjFAN9pQz3ej2bnGXN1rYXjFjhKpysc1ebtX4zQp771iY7EDrcwu8rfZuxx4EFbWhC8WmCFKBVPwF8",
  "key30": "4r4NasyZMW2fe7uvFvZecaRW1S2zXFMJKvXwkZdctPn6GczCcTwxWMP92is8Jz7pwewMW5VcZzAxTZ55s4kwypVx",
  "key31": "5ttxLCGYo3J7gBmZvQkPdaiEo9nafwN9Xi62x2Zd7nVKPR8UwNrnbhsTqCPTxHddhEqDbaFCWmRCfaJt9RRN449D",
  "key32": "3wKrdeKbKW2eJXQUEBg1bJTfVCFKuiP5Lt86U4Ng2815epJqC1sSDCHQ8aXdBCLeSnwHi7p3AgunDiW6Tj8xFENQ",
  "key33": "4gnxqg9QV7DMwbySUrfrrRjptLoYaoCGthnFWZhxnEtqVPCS4CCoJ3T19eGjyTDKXqUUTiWbaKC7zuuLLGrXN1fm",
  "key34": "7v73fkbeUqCMY16eAB97fTLqezSNTb3Y8qdNUY8jE1E434XLPt34THZdqRCC9mjWKNbB3FE7mkocGraaBTBPM2p",
  "key35": "bV1uMPpGrJ3YHDmbXQ4UJAqFB1pUyMziYN3nbTkqRubvRnbydigKvGAJcwRKbrpMVTy76mhC7giYZyGD1HQ8mnY",
  "key36": "26izLRmYwd3UQ6LDsvRc3nDLLRx65tfnTegegmaeZ1YTbSZNDj26TB1J2pXagf5TwSePLGBb2S2cmCd17GZ7NUnH",
  "key37": "3BucjEG4qShA7NXTBsb1phBMxstw86JM1ME8RmVe7tjnmNegWY9kVfDi8YaCT6W69Er8kj1Uim7zjMPqDaPb5RTG",
  "key38": "2Wvpywp3Jege8DsAQhi46kCsCe6CN6ZSTEwn7jiCETNmgi8tkJFFVP2fsa6zxuFpoJfu6X1EVBqwbTPUNidVBXkU",
  "key39": "3ytVoPodxXJV5FMCRT2b5MmBM6hTwLTXRN74uepQTpfo1FWpxYgvSHFzkFc47pTVEytGtGpDGJhcsm3b9nKuSbHV",
  "key40": "2N5ZstVAHiGGX3F4zF9wPJkDP6Js2uouxz71SvzHtuBQnKFSVbCu6yS6WAUX3owyX3JVgfjj5yjkD1HGcohLhtdW",
  "key41": "2fQbbARUues5dUoxyW4YPbb3dDRTUAMb233JKwoAxQfGLXePLUoaB7T6FX36rDsVMDovpWR8s8WyxNj9GChSC46R",
  "key42": "3iP1HsMF7hVifWoR7KdP9Eh18hoJbD12ACD5VBK4Bt6Rggm3spKQP1vqG5YrMmdKCHXrFxxfdQzJUF1KfWzAU18J",
  "key43": "4jNT5P9scnTA9jdio8u8tpARe7jkS6zBwen3cYGN8AL5vDbeBwyaFukmV2QfV1Uj4mkb4nrQFdkCJHDmUSVzuSY",
  "key44": "59os26jodyFusjhkQJXAe2tpdPjErdn9eKTLrSHguvnxGV4FAaowRHjhVYiMyMDAGJiqj7SiFGEbzFPG4cemov2",
  "key45": "2BY9Dg2wVmueN7noHHK4TfR7HPaqukNKBSPMs5rKdZJsD3xBk2ANJTQJgstu186LFHaTAQdQMJcHLeJ8BQyvgaHY",
  "key46": "493MpJyGR9XCY5r1x8wcQXfQxBeRh31mTVhbv84KqU8hzEqGMpHZFXupQkv3N2GmJ25ozLGv8DyPD7Mdh8qvwMBe",
  "key47": "5uRvq7pn3a6YT1JJNWMEcmVKnDRPi8asGbkPXGKzJRqkYhp8UExtPDpF9fHc8ZwBNZJrzn8Y5Aot3QfEjmWTbqAs"
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
