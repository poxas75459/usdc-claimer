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
    "5B1t1sYd5u76cn2PADFeqCBZYSTCT2exChCmAoe5zaHbUKox3nGk8ke5AvsXWbfwBkTnNMT8ZFhVMxxnYnKoxLDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPgdGFtnwMn4V1dUmUf4MepX6i5XzR5yqdHNHE4GHm41BN1smzqDN5oaR61KUajkvpGjSYH8WLTuKukBkdhpdR3",
  "key1": "3uzi6ZvHX4hB2BCzSuogsRQDJ15C5rop1w9mZoBnfht2oYMJ9WR2FdYZUTH46gcBH1oXxmyHfHYjQgxAFzgzd2jP",
  "key2": "MSicrBJX6p1MnRrLhrjmFXvJtW7N2kRtH6F15oBrNVto6bJM3HBADofcT1vdXkJXrt1Xx5cCwdQCkFkNSxfLceW",
  "key3": "dXx31qzRVSqHaVfG2F6A4S9auGitde2jm6CMyJp3Vn1HAaVzhZp15ruU2vUPbVbejHEvLwyeU8CzuSoRmbAnvbK",
  "key4": "4FQutQrz6B8Lvy8PptT6Txb3kLEW3rKMNFgHw4rCnEb1aFRJovod2Jf5NTUFmFLrWj9enYQ4ZfeK7ui7mD3VoW8u",
  "key5": "8TJevEemr9y8Wc93G3NhYM9KH2TFEKzmxJ6Mw6Lm38HXxuGSaFTxF7RtVxaRCySTxkQbyDHVriRjDx7rtF9qvuE",
  "key6": "4rusuDg6hZeAYJg7cpdGo55qvcqj3G3VZC5YAdRymm61dEH4dcGo871u2n7pC2qTYAzM54ZXuz14PLAVAUFk4Rxg",
  "key7": "44AWSEfBkr5hcHcbRSV2srep8WXroqRduWQiVMiJzXNCLSn6wMAN3PEnTxe8k3X9Ej5dTLkahtGUFJ8Z6GXCFgpg",
  "key8": "5c7eD9hGk29zsVi6iLBucdhzQrQ8PB1wP8mG25W7JdzTpgcDdSEP4jPB6BbTkHb4gdyNrE97FsH5bMjzNVS6UEP3",
  "key9": "4juvf9fxJSbTZAeySESqyMP8dgii9X1uQEADim3ET33oGm48FZq3G4HaU4bGgsEDfcZPKQQ6eMn51HqiNJ7vsKMF",
  "key10": "3ahEb5HE579RrG5YVvp5HivA5LUpbmSYrgnCvYi61dwxetNNnTaHrLkjcrgf6UKHXdxubvFAgVggnWgvVXm4kM5z",
  "key11": "4d7g4pMHPbk6c7KwDVKL7Kamd47ZrqMCDTWoxN1zQWPzH81MGRagvRu6UbKK5345NM4T5gGBCeY6fZ99ivo34Qae",
  "key12": "5As6fFwg3fAhCBK2ApmbzAguCfKn5oFkLEvkw378dzjEnNVJ2i5RSecw8CMPT7fKA6qjNy8Tbphs9cmL8TfgHFhm",
  "key13": "5oMWpUZnRPozQuC3yS4xSMuWFqq6kMQGkjpFNmRUYpWVYbLvnLiDUezmfDm2626cdTAsuaEUQTKHMYMrV4X9U82F",
  "key14": "66MumiHUdMmeVUs989MTBAgV9fezZCccx1ASBLaNJ5pcnW7puniwQ6BwFQdGZbwn41hWFxNNszNWge1mTtWXbkr4",
  "key15": "53SZyidEm6a57VL4RELLXGdGYU56x8GTWMMgrraPakARXEuM5K1aTSpxMPedGP17qf6PwacJoKAxaVXRdTQXgjQL",
  "key16": "2TJgyWNNhaDgUA2mM5j3WxZ5S4Btqs2nvK1Y2n9PPUCu2ta5baX9QEvehoNGbSFZfsa3qdWmfsU3mUacxz6ZGbuf",
  "key17": "5YA2tdj58not97njBsmuuyaqcUg6P8jVrUU3m4jUUoMdeg8YtcA6oWfr7zk6sMchrotjtN9K8PpWWQDU1mzrttzq",
  "key18": "FEcMn8sWWJwC88d8D4hdffYH6H6TNNnYPV6WoXWSPSJchx4n8ET4LKPaSJpuGFwKuc1HzRxb9sJWp5CVPorFNnQ",
  "key19": "26d9YjzjV3AgRTginhjhNeu9dkSwHGUinvrM16gLnTbGXsrQgTcSgyUqCpjAeVAKicbo5jAS9hn6Ge8FgyCC6vV9",
  "key20": "3U8Z2R1fWyzbFVXF4nGHRpSHbouPWjCTynQF3iFbomZibc8jU5omNaWKkCRpNavRnMiPiESoDU5jFWHxxfU5MMAt",
  "key21": "3412TcVvThhhsq4M3sTjJtfHNh29PxWN2arvWTzvCK2nDdYog1mHjfzBEGo862iF6n3ZvJc5aKUqF2ygkmrx3rv8",
  "key22": "QKXBedLArRTUCgQXgrEYdW41LkZknXzXbL92dX9yfWg1Bs5LSuPChL8LxmCuc752aGepfojLmjiZwhqmJ2X2gAp",
  "key23": "4CajtpejdiGL8y9wSZK8jVFXZmr9tobrtMtNv9iyxRohPraZdPPUkQgcQ2GXCZcVgncw63rk9wngueXhKw6uAieM",
  "key24": "3tec7LDpmCU5HAXhoedsdtrVrwDTXDsoDk47v6DygBKvt1EyKKpQxUDZVy9Vtve6RLaQZJReBjSGQC3coAy8NKfc",
  "key25": "2SphAzMgbs3FqwdbLsuuxbiCrA83QJyYA2EcHaRQs1qrSSJu5MV3jCTnRxyrFzM2fL821vyqHgtLDBZj9RGhVBnm",
  "key26": "DkmfWZJdhigXKwdCVk2nM27cVk4WERXtFn52xFGiTsyVpDcbYKcVErMHitRuMQjQ2qNmg9AWmtd9QejpBY5AgJJ",
  "key27": "4x8qMvHpSJ2Acx7GwjDTG1RJLyucxK7b4exSxV6bh5fcjqPmtdhMfNHqYyewLM9BD3hfsHJmhV4GUvXXkaiqULHJ",
  "key28": "4DyqrjxGGbEoD9GnkDaARuWaFiPCkifRxvhXjbQoE1Gh3RZotvXgY9Cybk76QG68grHeqB7xVPLGzuJFcwDn1bZZ",
  "key29": "2BmW2VG8tdg38LXgMEavgsiHwWx5KZXz5UDacvHvokbuuyiu3Z6GQMowYjirJVQKiAHonWDzGKwGvhDMbCr9HCFW",
  "key30": "5rzdcd8YMRGCbx78f5scbspTUFKknvDTGuuHZi5menLMScR8cASXyRQ1o8J9kBf7w2nwzShg979WAemjXdoVvujE",
  "key31": "457CfudQ3JpHPfLqzumQFgGEkGYoCDSUXAQ19FxgY47nNgxyiwPkf92CKThmzbfnVAosZCg7uvTxbun65CiW4WqT",
  "key32": "5SasRmLKJacuDzukQQrvJjoBjs1VrJfHysWDAk8ZKgRnHqJCAZFCdkJ5TSXoSVfyzcN1VCwyhnajvK4pGrpRXNpJ",
  "key33": "55WovLcHD2QZV8mQ14vJ2N8NC5c6JMTM6jtGApTmSHeYTTewysL8Jxrtzu1EDayMyWoCSd8GpYTkP2J1t7eYbecj",
  "key34": "5a7n8nYS68G1knKnbMt8tPMSav4xsVZsLy17aUt95tMqURuyicVf81udkptnvZ5u7WQCYtBYUwebisBkMDzKKAzS",
  "key35": "54Aq9dBKrYrhNmkKMeNmBtFpfZ97T5QwBwgrWN4UxdcFD1PLzPyLfvxyyigSofGBXkacJVb424TZDD7351NLsxA",
  "key36": "5NQZEnWb1WNs2MoM2yHdKdsP7yQ4wjsbmCsDBqX7f5YtK7ZtEGWXtJHb5Nko3HwHtS6DN8E2R9TZQNkPbT1CLR6T",
  "key37": "63QadScdavbK613koSZAYsPz5AYWo5QnnZdvY8iwMkE5EMsNnfoZNyTtgEibUfc4CqPa9BnLV76zbX4rh7kEoQwF",
  "key38": "2drDzySXiZrEHghQerJk2mZz4QN13HfpCkUxRbtrVARiTUcKvimCp9V4yyKEwyKcshLKewhjJEtk4SzLVwpJeQec",
  "key39": "3fsojyi1BhNpCmLzFEesgfhrTVop3TtdN91pvhqKa1Czzxgo1aQNCzHF4UUZxThG2S9kmFubsYe3k5ZBS7CiaMiz"
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
