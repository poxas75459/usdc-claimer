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
    "2v9FpE51S4M73sLGqsTQpxK6jgSQ4CeQtnjcr8y2xGfhGYTLKsP7x9fGdNwufYue5miyActBQ5dGrnpDwLqJ31DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HL22pM4XW94Z9Lo1JeMd5rGPQMWFvezvicaHg7SdSi24WvN846cJRxNcq3ySrk9ARVwntKfj4cAJURGyXu1zUY1",
  "key1": "2jBX75uwdvFdVVix4MoMkB9GBPTGAcstaE3nRjfYArYt274KPLbwnesXw3ZhD8ABSvKxqZdwh3n2shJeEsQi3ZkS",
  "key2": "5kh1DGgJy2Bkimiq58hq3Jh7ZjAzrAWKNP5ndn462XwEa3rNSRNhdquiecUeAVJuLr3CmSMZsdqctYBUFKsNPJS6",
  "key3": "GNDCX1R8zkRS7TWSvV696ZXVAHQvdwdPKrb7n3x6AWFCgbS4upD6mBBLematnzb9LyiEVtxSSehCTssCbvmtaBo",
  "key4": "5wwvNfVYZj8to7SYPXfXdQaf6qf45BZDGSakDzVXdnrC3u88Y8D6yWTXDxqZ9MLUfR7yGZvK2HweDN9vyuiy6VjX",
  "key5": "2f98P5i3Gb3y1GgLKE4xcQUGeuGMUQvNqNz8TeoaHvUumUR5wFvRA57fYTdQ37K8HS7c1mKH9uEfe6oHFDkReMT8",
  "key6": "x2a8LFvrzw1U9Q3dxBTC3ioFsYdS2vkLjdP6wXGgPR8XF5VQCEzVah91fhTWRFadoS4Y5tVZ9wbrmVykaRKZHxm",
  "key7": "35w3vGAEqEbnXyVUeNpRG8KRri7cNrTzTYDZ89RMsmnvRkheP8iUWQKfTSE44t8tMn87aptYCcg3oszx2V3ZEeN",
  "key8": "3TTL4R1fEqDotKSKL4LX9wLPzBGH2bbo9kgzRUP4m63Rs6ZFB3hJSaZuMhzEGyqWbjxkRdmvq4hcH4SYRXLnNF3f",
  "key9": "4w8QCAk14PTmi554t4ukwwFkSWTLZhgLsPVpznvSrcgqy9r4voJodinx6JDCfRgZW8xy8NigiaBGqx9V2FbiRiKn",
  "key10": "4WEVPag3rqEvt31kdJSTxvGTAKrJGqMStuLZXDaXKBuEj7tS7y2Gt8LYXkxMdwbyBquLxp1FQbyy7dmaYhviRttG",
  "key11": "5cuWn92ZWesMu8QH7HjaLxbQgJGjBkaDGSx8kWJhEKXJomCj2mXNzyp4AxxeiYQcahXpB9AfwmBHK1ruJjK37rCz",
  "key12": "39Gfw99kFj5eJm8LHvTYuXy8v9utY1si8TLCrLMhUYq7xxeye1pHHLTtxmb8AdhLvNyVaU41A64zFvFbopxrJys3",
  "key13": "3TKkKxowPnCQrEZX7GEguSRLqeCfFrxeG9BWom6bHzgEVCfzMGYUvkbyo6856mQo2iWZbffoFWWSt9M15uxtQAyf",
  "key14": "2GV1ZMH1Eh4YLnGAaKe4SR1oHZHYZ3GSwTLW4VVK32ZRcZ9VwxSSHMwxjpe5yJxUq9dvWo76JBy3VskHdrnveThK",
  "key15": "3Btcdpf3GhcxwgAK5198itmkmGB3iXQFtamKEEQKDWRT4CVUzT7v6Fgwda9HEWjj3KkfH71PKDYEt4S6dFMftTSA",
  "key16": "5kAM6cCjqJ9Ft242vm1jxpET2A1fMtp9RyyroRNLLhK3LS6Gg1mioqWAfHCuJy7xUonutMB5aJYwxT1EPT5165VK",
  "key17": "3gXLZwqDfuyeLie6NKQiXmkfYsRYT74rmHF2pRHi2QMZEsML7NyTGpfNBbR6pEmgtUHn96ZVUWJqFyKx5NA94BJP",
  "key18": "5nyqqZD6TEUFWkEZk1rDC7ekfKfun26E4JsNHTQcASExnrKqs4XRwB8pqvPZF1TkJqesgfHKHvp6T4Nc2M8dVR9v",
  "key19": "5VVFkWby4szoyFssgSBmc6WJo3Jy6MGq8SFQmJb4s4Aw8Ebppif9d4pZCzbtHTbbqRrUtiChe6WyNWuV31Ej6mDZ",
  "key20": "2bArY381uVmSpWA8PBBiitGnt7ctdiHY67CjYr98d8zSyfL7QAy3SrQADMxRyAuhTE2Di89ZqvhzZLeCPu9b1ukd",
  "key21": "4rbvB8xVNpuWL8rNzRtoWAzrxwjdUvGeybTGEXtrXLX4ReoULHw1ePkM7wSrLMVdJXppcsfVyJExybWo3N3B4QmZ",
  "key22": "479TwdEqH6wU6GqD99tHwSWF2wstfE6uPCdA2618qGeW5iFvVt6NNTbz8zmdD5o8aYTrLum1bnBwqehSpGoc38EZ",
  "key23": "5SA7oYgaiYdYRgQQzmAuvaHjpAMM8Ry3ZGMD5EgLLQMREptU6LiQpZ9ruWasyTbEFcLriBQJP2N2t2tuhyULbPjC",
  "key24": "95KYNDqm957CqygUyweAhokihKSMvttYDQhimr815z1F49Te87Fu5Hor8K6yH8u4Gx8KueJ7187RA853VGcHVu5",
  "key25": "5Ez1LupXCYUiqqxFgZoJY2CQAHQCELTq8qrSps8bHBCKKUqrkq8vM14TM5h8K6Ey2SXUwrzmwKhSCUyooDMHA6ZG",
  "key26": "2k33v4Q5DXbhyjARGxAdoHq8iRWcErk3tcYoYog1khT4Gu2oYQvWqv6uF7CXFVNp81pXdvxsXBrmuWuq3iwx2oLe",
  "key27": "2ts2jgDR5x1MbjworWSdP8hZcst4hkBnYbhD9mMcSEoTjtsx3a1gNscNiSURhTZXZTDqi8m1TFoCfbS8e2o3BYpN",
  "key28": "569S8qcrcoUiHstzhjbp3NBQF5wqo1Px8hZMKdx6MaqxvLd786tV5zzx9HcVrjcd6fr1h7WBopRs5n3DSnqDvj1a",
  "key29": "24x8Q2EsteJgdFHRAwcghNdQog7TfyJSN69BB1vWN7wcomaayqSqaWtv8cdGmNx9Q7yVbUQr1efraTK7ERMFQyao",
  "key30": "4vJ8XvbinArik8qLHGTS4A1DQdUMtJDCRhKvpg5Q3ifnTREkYQUJNoXJTkm1csVmKYQNTf8pUiPDj8qsKjfpurbc",
  "key31": "22aSXvAwv9a1ng6MRUi6QR55bhd7teQRKGjPZiyvG14BDzmt8KMLpG7qmYkMXRZeoSwcKWLzxVe6EDRkFEdxXf11",
  "key32": "43bELMrCBehvUrQaE4e2QKikEW4MoRB3dTUsjnTrTYrAhRhsjsTRonEFD1ZERMUjoDPMTok3J2HWL5wSFQ48Bq5J",
  "key33": "2jb7wKkFyPEKkrRy3MdEZucN1hzyAoCroCBALNY1LwZaTsy74f7BYh43i5jKnbLxggYLxSuRcXj7q9kE9wtBq9Fk",
  "key34": "YdZt5zG9cv3WifvkZBHx1YLMKz48Sb2gCA485SX7KogndtbXkQs4fqQs4wFxuRVVcvwHH7p4dzEfpuVwVVusTV6",
  "key35": "2xSXkZb3mX2Me3b5q6T99CUjJdAzLLTbJUBHedPLVEWBp1uWMgme2qhQh4GMfakoziVtoLoAeE2uhbEKcb6LPdjB",
  "key36": "5ZTQkqWfikUH6e1ZKzEnsZW4GKYGknqf19tjQiusgrQ7RL5HJyewnaNRVT9HncPR3hrb9AwrbGLaCmuKDrcYAjyB",
  "key37": "3Zn1amxVtTnq9zJetomWauobAbhtDeJD1yS6t95ihBGujqX9LsJkD1YA5fVSEEP42hokJuQshqMp1FbYDg64caN1",
  "key38": "371Lg6BmbEgNpvXFFTpeF5U1D7L8qQkGB44YWUVeC5w3YgTC8N3Mn2DexgmD6Ph561T34SKG3JLZJpaMNcPfuctb",
  "key39": "5us1YA1oJSaMXR1Hd5p2pFoKigsbJGih2v6vsDQbpUBfxpdVaC6KW9hQFoP8wiGHwNajV3Ct6jrZpRxc6WH6UrNY",
  "key40": "322rA4BJ7Aq3t6Eifm1Q4qCocqmg5TKCVxqR9uGgmcqYq13sQD6NNMxkBufNhuAKyU5Pf3C3YDWGdV32fsT1F6vm",
  "key41": "5QTKsijn1Dp51ufg6LmFtiKTYz3QxPAfNcH2BdNtDvpew7sZ8o9QJxNEk9nzgqXpVo3keF67XbsZ7iXft8v91XXQ"
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
