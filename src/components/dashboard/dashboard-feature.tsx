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
    "5owerTSXLg2nmr35mxFFqhEB2LdDvLKR4QpkhpndL1vUDpkqdJfgMX7zoWA9GvGbMbkMXGLNEdVVChs6dr5MqNCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RV6kTuABDJKEW7jeJKr1ZVvugUFLMnZULkcvQx8fn5zrL5PJQhzmAM2fdQPbajguTvWpM2CWErWWHvC4K6kse6",
  "key1": "3oW1rGmjMF6uYz1HRmHgrYpYMo4FfBhm8kbuNsqzjLDfk16vL3jiUHuE1PF1jydzw9RS1dSipB7vCveyYR39LYH7",
  "key2": "4SYmqmn6JLckRV5MyDfgD8CtSGaoRZ2V2pe8QXxaGDQyodAyaWJgFEE1kMcvWgZPdnsuQxZFe9L5vv5Dz9UxfU4",
  "key3": "5WcX1BjtQevw9H8A7ifkZ1FdQdJtbEUi7sar1EHsGNJ5PQQWan3ytKqcJxL4yJXz83Y8qePoitHuohpnTVjBACDC",
  "key4": "yeBfx1c78ReumhDp4WBuCaS7CeMbLuHkbqzsPiASP7Au79mQ3YiS8eL4NSh4UDkcHQyrE7EVMpkSXWTxXdzT6RM",
  "key5": "2deLB9C6McP74Ay1YVAohr6FvwHqASefFsjWVLdQbQDQYd9S3MEFhjeNWZdPcyqP7tD1Z1VX4uE23N6vePwpYJtG",
  "key6": "Fq143h4J27mfWm1vdx9hKmsk6rfAFnGWXR2Sp79wDTmoggK4P74UbtVHcFaK762xjAFuRDC5aiFriJuSzySPgvg",
  "key7": "4fbAhd4mPnc8uZzXkaXXb7KMEjWCQUqpZXdtfxZQd3Zg2suoqsDq5A7ENNEjocgSrmjoBvYpL3bL25cgUgp1Vqkc",
  "key8": "56QnsvAoYGA3QQEWrz9Yvc5VckCa8PJDqsmDVczZnvGMZ2VyXBvLYuVtFEZiK6zN25mvjTEj7C3W9Sn6JyWEMvBw",
  "key9": "3TKMrtkagAMYJLE1aK89bdM3fFd4W2hDHapXfYcEkWvfvd9MjDMjFfJko83pKe1qAjPUwhrW9DanMQeSrFMuQZaP",
  "key10": "4pwFkFxsA5xuruwzYTwsTZBWzFGpWeKVuvRJ81V2majkLCvvp7wvE4P27DQqTmL7sjfp4iT6CYgRuC4ZhMu6nNfp",
  "key11": "5nB6f3dCutMSmxbBf3XcoWAkUU8PxCC3Gwk7zjBPrdtaFXCGqNYi3mRzLM4VNNzH6QgzVKcuGtkgbTEU2SVbTRkT",
  "key12": "3r7dVvPdBkBwMy5TV3fgJH3yZ4wRJdwzBq5A6uH1Tgzd3wN34w4qoPdXEMa34hv2EZvtxanszDpvjErrhkaeXsYQ",
  "key13": "3oMfcJsQx3ME5sEwKm5M7b11bRtFXoVzJ5DjQSRHogua8dSoCAT8uaVEzoMXq9orjFUvfkRFkdsqRcy3hGwMUcuM",
  "key14": "kMPfhx2hfT48wZ2EDstu4guZwrb9cvcznqY52HkqJyQUbnAf5HAfFauWinJ9yYAA5a54ktSwLd4VTsVvgakPYHq",
  "key15": "2h1D9z1SLLFaEPj99T9YG8Bn5FF3d3tSF9dA1A5VJmss9fsHJNzK4m6DLZTTdkYa7s6X1BRjAoAew9dk1dy9AReC",
  "key16": "4aXMkueZcHhVASbz2NdePQGPwqdmQtSnshrz9zFCNnnapBep2TyNdnaAT4haP569b8HbsJP23efYXNnXv6UWFQaD",
  "key17": "55Z8ZD4zC2V33eYcAnTgouefNgrj4UQ6imwcELzEF1LqE8hFiERtxurFZryc6JY3Rgob4xhaoBd61etiY1Xi5r7X",
  "key18": "3y8vEvEps7iRLLyEy833UWy69fDLmCFoFCumfdPvKFqCFVuey5ZGvHD3i1umi6Cj2FYJSRyZ6Fqi1Gir2mH2xRkj",
  "key19": "3KbRnbXyudYVxaxi9WeZ7nhZvqzm7W3wweX6Cg1CStK6tiwmeRQQYRR69Hiejwb7Vn6NRNfkRDYaP8WuyxPR5LTi",
  "key20": "3xUCAMFGjJjsbqRdcJL1Y3u4cgnUPxbHimnHvrL4tcyyrKbMDZLFCB9Juv3Dp41AKmxvx1yCAeQyUBHqg8v44AZX",
  "key21": "5YpLjb9x862KosUoZkd3dgjZNydTkz1pmt2PF9grsy9M2BKxNmpzunhrwEJ35gKhFNPQLgMqhpqXDSp8DfUdpaM4",
  "key22": "jwhwDk34WtuvFoD1NqwbsoJQd1kBVeJqvhzodiaQQuawm3DQu4PM2uKoCFe7jMH7v68zw8pLCn5yu8iGRHUZ4Xo",
  "key23": "3dUs4mnoNGdq1jwR7QeL2x87EUKzTeHhvM9vSsqFt2RCSuQnfHfnHhXghHboXV3xtoAVF2fCeeGa4inhhPqG5uAA",
  "key24": "4qGBbfAbsbuswv2S4UnfaeUpxat98kLvgy7WrAnMgzfSYzTvtVidWiEeKjnM4tEX46ouD9mZnnKDMiPTu8R3kpXG",
  "key25": "4F9Ma9Pdr94A4NqDYU5tGpa4Hsq4hSYmT8hy9UdTo6k9JkPYUfuQRoK6rDXBcTeEnHFAtHGMdVgaWyU9LqEMRz6w",
  "key26": "2ydWqNXejaaGxMz2Pjy4nHYL4eTtntsXCAB8i7ADRbzsjMYFxS89yNdtJqeAeTZnh2kCQFbjaRfjaXRebZuAQdCw",
  "key27": "5YGLiuF1u8p8Y4cb4bTqVrJhsLWDrqSbAYweT3A3mYHxUuXS17QzKgdTeUtZQsqRKtAghq5zkdggxCnRdqqCd6Rw",
  "key28": "32rELEZ5MjmMCvnmGTpYdfwUrtGerB4HPGMEPFUfgqiVtNv1PmFriEYyFeoGJvw5ZF81AcEeWcFmFq8EAtaUQ46J",
  "key29": "5a5W7H2Ly9rigNHmgSm8UkFySjGECiTuPr96oxcdfiRCe7Hnmj6wz8R6ri4JGpYUTatVTdxaAcp8Bj1Y4E7sECT2",
  "key30": "3g2ta6pyjUZsh48CfFZANFxrhHJ9FxBmNtJBc3BFw5Yr1noMfCrwqXRcqWYnhZcrTq4RuYYAo7JWLBRSvzDW8nvQ",
  "key31": "3bKyBnJxwj3rBtfxwDuiZGatujoBy5wwEjytsBawawrmM8eyzhMuf8iBRDKDPVzfmnQWtbaDpLCqcDPVL5aNsvZ5",
  "key32": "2Q9NEKGu2Y3PCixeaYeu1M4BuR3VJN4C879URifD5DmjQzVVj3SbsBwXfhwEseb55uS6wUtAGhTiQsX3RuWzQRgb",
  "key33": "3vn9EqWnMt2mYV4rTqDiEQdsQB3k9TkZeXAh99hedazohr68KeJetKM2jAMHwGBgPESC4cmFWGrqvN36ADar8Wqx",
  "key34": "3wScW98y4VBq6WzqeeSPivVHZKuJuz28WbDTamp1MxouG8EpHFXWRJQzhFRzxmuzib2peN16vgvwSBQBpakHqLhm",
  "key35": "3PaFAnMS66gmwkEYgUG8KR5rvd1DmKPce5ACLaFJ7pEHDLexMHMuYAWgayFYa294WqWxLs8CSrhkAoko2QUPh83Z",
  "key36": "3KFxcLDDm4uRWNp3Pyo1KEELBjCtx3b58ciaHNT8ZMKd9uuBSRciu4QaDBqqnGAzSHwM6Av7Kn9BY7PE5kgPsD7U",
  "key37": "4DqxJJSHgez43QoPsgvwQyYEvfdXta47gSU2Zf3YMYEMqoNusNDDwezZKTC81uWU21MEniorCMsQ1QfFC8sqthqm",
  "key38": "45Df4r8XDivcUMnCTWGRk3bsdnGiiTQoP7PBbfgsMRC9bd6ELfjdahyqCoqPnEu54e4wJhWUo8xCKfY8ubnDG2Ze",
  "key39": "5W4Y63nGjDcemR7awP1U16JhXpBb93RZRJLhRUPDgi2iGxE9rdTwGdzhxvy71PFfmxNc7Qs2stTiCBBxwC39jZzq",
  "key40": "5MmYApStyNWoJMsAFyUiPH9FhaADA5Jp8oKaY5RhFPzZjan5Sa2LjjCkne5qkVB6WAPxkRhrYdhGFX9NGFMA8apF",
  "key41": "TPpeE2tmroJnkzGUKtqefyZkcUDB3LxJaLsPDjCPWHHS4ViqoCh1zF8rWQidu4QqHnXzc44SufLmwrkQDfd4uV1",
  "key42": "5oKYVDHxksmmDHy4kyZAhMfRzdLUWeGgv4Yak6McMEkYXSwoB9kAR5Zk9F58cC48nTEBEooWdYeSzmWsLCV6nMFf",
  "key43": "3QHZSac7SSSmaqTsDpUsUMDgQwnZ9jrMeqaPuhE1LKqepNg1evM4CLVMVpGs1pmTZZYgVpNETY6F8MZMptdQuh1U",
  "key44": "nuMSP6DhsfAr1H2y5riTFvVDtjYEXfkgRxBz1Zs4857CotGf56ZVWXDjbUzz6mbfbJe7XiVAGYRViDJQ8YZikua",
  "key45": "3TkVShRtATkrN3ezKZn1NT879uE5wQxiy1opTyMbrkpuHfXpD6wjBrpUfj4YZy1yAKDdd3Upny5svFG8YUTD1Cqw"
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
