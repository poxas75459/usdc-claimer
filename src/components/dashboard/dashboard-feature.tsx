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
    "43Wnkviczi9PHoSr5hRByghh7d83w51TDYgtQyQGp5e9MFXyTyf1go8JVa2gzyhg52TBQCqfmjJhcBwQfT1dVKdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tf4bUKHKuaX6Rm66RmJ94jDDdxBHk2ZqfU8FP3b4HnFcNVjag1edrVz4SW56ze3aiN9TVdtJpMtRR3KvX2nATDz",
  "key1": "3ACPrsqpFqSyA9EteCBP3diwWaUSgz3Egey3RjgZ5zDJvMAnaKBtzGcZHbxZF2rpwBF4zqR7aC4GxnekUnUVea12",
  "key2": "3yVKPqc1iaYkZBhnKfuUZjBwNgpocZd83azpwQPTgQ16KHBV9pD4bVATbEBt7DdBideufRCYmM2VLgee8zknGuV5",
  "key3": "uJprMsQ3U9nW64Gt7M4Kjd97Yb2SZyfvffToBfxjRLnviuyASYyHcMsDHnEudiHM9pkNzLPqk5oTLub6gfT2kfp",
  "key4": "4fXYavNbXtkT7ucZ7BQenhkFVxVv3PV4xyxvr2EKafAwtbVLNkG1TUJknzw1KyHV1HgZyHaYYX3kZHfxYQyRfHbi",
  "key5": "3fBSw5ZdLpPjdH75DDWHSiHWMNfnh788QVgELqndEfaeNfNJr8x75Pw5jBmApBsBxC5fgdKyud42V33petkfDFto",
  "key6": "iPSaKNvdnX9c5j5D5TS13cNALjZRnkFoCwEQpYwe48ZVWqBaVRMCTpB6sJup6ZKwRma9gsm85WGa212pKAhafL1",
  "key7": "4KLu6H9Zxn2mVrkL7fAg9d81xyMhaRveQ6aSd1TBZczMyngn4pXfwe7LMVQhHt2Bt4jAp8x74NktddVyFVU9ejwm",
  "key8": "2mRi4CLXTuZ2Jpc79BP24GsD81ZcCbJjR2akNLV4mNMy1CL44P1or7F63grcSWDzDJzH3TCPmmNDfSyKXXkjRbj9",
  "key9": "4gjB9XzyzXjtNkdcjHggEAvVvw2zLAMmqJf9tUbzDCahhVLK2m3vam4Ymv8B1GWVzXkrVGkQ7ae9SkYjMeWGZ1GE",
  "key10": "HLsYnDMAsYSRctPNm2q3nGcazk5P9vCCj63Ym8mSyDZkV1F3YL5WBFn4Mdq4MdzTcqLAXHhbShp2rsSVefZmHq7",
  "key11": "3rfZWZjS7tFaHcNoW91P6aZbU3bQhpMsnsKXfAoTtW512yvLWpu1q1QA2vamaPRZCc41Z3f2WwBLMEkcnUyRiYsJ",
  "key12": "1RNspdriTxZqV55LX8NiujBkadT1RWAGemCbrh3jzK1MZtUtQKJGnt63PfExPwjd3e8jHuNhey4fhCLkg4MXbpc",
  "key13": "52QveiufcVwPaXmRw8cWEKzHLcfG6Tyw588tJ2oCsRk7TuTRvFfSsJXByL3VRjBZSgKbVowso9x8GwgEtLFy4Wet",
  "key14": "2Hx2Aj6MDREopNJsiDzwcaF7WxQ2sf69eAy4Z4iVo6BZcJZ4YMfDvEv65ke4CeioEcfHV2pEgkvN5Qv2xE5kjTm7",
  "key15": "7R1fmuurcKQzCQr4KPjjsaw5FYWoySS2fDpsW4cMPc9EvqmmSLVQHKbmVAq31mSCrPVtCAZDDQ9aKuhjCYsRAZi",
  "key16": "35yXsJUudFp6jmhXPgiZrN3dVEEWGNC2GkGE1yYCppjVSEycHDMavG3vYuUVWg4FjRAnTasmSKRiZC4uwBz34EuZ",
  "key17": "sAnhWF2Y6x5FN7hBhDMNkKjp9LqMu3D7ct1uKr6wMMarcpzDrDDfW7oZwuiYYrA3XLiXnz3oi5SRKX97d2byj32",
  "key18": "3UNPzt3ToNL5GE9C14GAazaNg8dGhqVkfqJ1fta437iDdm8w7My4MfZTw7He4Muo8MUQJ6jaoAXPotEYkEqeX3AD",
  "key19": "3WkU8iWK6PJhSwiKACCZBgReVtSz9jU7phTuCp8VkeSRLNJDYxrej4WUSucTcNtRy42aAzwMChJsHnfXEUUYyTjN",
  "key20": "f9BxVW5Uk1ZHusGFFB4DisqZfu2EBotfhR46UQQUX5Z5rbZp9ysQ1dompX27X1WmpaajzGMetNsh75rdcqahRWu",
  "key21": "m84y5wMsctNwRwBZQ4RjRWmFXRvjX2Qs1oB192Fqtrqq8oQfsa2fGUgmEM2vf9JpMwNHuMrypvEQspbNjUtP4Vb",
  "key22": "G4RbxGWG4WTasroqTv5vwaDcHjsasBL3P4u1ipwHcvvD4Dg3r9SQmmLRjh9JuaV26maQkxL38ZpGAs1G3NSR9nG",
  "key23": "4UmPHdYm611LCS31nmoehpGYT3tzPQrSz3SvAcQ2J4sXLK3RAaoX4RPXMdcGXuLeHMMi1aCHMJzSVU9wdsBtTGBj",
  "key24": "G275jPyry1TEc8YNciD1bfhJ3mrPzeDPrya9LTezUGb6db8mBwDoSKYqtJaoxCsFDoPvH7JVLACqzK1Hs1QkmBH",
  "key25": "59jCaeSjw4LS5XR7Z9d6kCqWHxzKbTDnbPBtbZMBcoW2cWU2fy6Mb6gP17mEwAFuNeBzHf9opv4Jx352ku3GKU7U",
  "key26": "4e1fKNdgKrZK81epWh3gZv3nkVCf2TP2tU9J1BeDMSJHYAvbEeLbCQugDvEPhDxXZcHYCfvbZ1f836uuqAtGbCTQ",
  "key27": "4HzqmvVnLRAp7EdVQhn2bawNTywALGTjXd4LiZejy5P5KyxKAL6BAznFRDWrrBc5e7cUw4yB8M7qF5R1fZw81DAs",
  "key28": "vTsYDihF2bSZzqYRQUHveTojyVXdaMKNs2cn4aQoLJ7NC4QW7ZuGqKkKCaJkL61KX6Y3hNJ8QY7zxUf9AdEW9zh",
  "key29": "2h1wXbJQ6AYh6uGLXZDtTAF1RphE3dTYGkNG3LjXtcDNHNHmEYUFiXDCaF9ZfwxPuZbMhJBCtTfZ5wsc1Qo69ypg",
  "key30": "615tRtp7zpcZDUtuRPjHn862n44ajk3EB7dQxSZafx63edqAU3cG94NHURfBatQqkeWuqgi7iBYAbCBaMZ2UefNN",
  "key31": "5G3yfCCB2EDtX3voHLUxkdPKXJs6KaqGTEQcwQhbjisaKbEKNtrkejj9TBjg8a32c878itRWvopTr7Jos5E7GMNk",
  "key32": "3jeSvdjbimhBUKwgbD1reCRJxvog2JGb1zyEdmAeBGx9bthjcSX1QRXh7RkDWZaLs22X3bTSoJCyEh6XBiEVsnDf",
  "key33": "3ykRLMjvAmdN6QuW69EoS7hkbqLEjeYwyFj85yLN16t3HXVL4mgTjSCFPmYsyLNYZS5gfHoJf7EivtorH99ccjAv",
  "key34": "3TR8V9bhKTcLgPbXBQ6cKmYkEQoyhZ4V5g9CLS8nhuRYxVo2thf4UxZnBWbr5FCqhtxEMB9cxmCTKck87hoJAYxt",
  "key35": "3ETSrebssHf3SnjZYZfCytN4n1sXG2F12UjAsca7L3HEUDyCTvWP6ydNwK24d3RHvjXe61DKANMu2AV8ovpPreh6",
  "key36": "54KDaJVJskY3xmDygUzdRXQ8g8pWZRNBuEXhJXs7Sq4qPzhQGxG2nZ8j2EzeRdHNzjfYAxSCoUmUfUfo8GnmxA86",
  "key37": "5kRa5C8pVDiJ8smDMZtyy93uDPx8toAWUsgtpeJJX33KHssstQcQjBTnVr2payAELK6cMkkxq2Aweqrg3zqBb2ck",
  "key38": "3QVKZaZfVUUrfBdoKPgRnm8WKHwuaEeK4pbqdC1nA6PzA78VthvzAKD5dDtFbtT6MaZX4hps96KM4DiFxzozaZS4",
  "key39": "5QXU1rrCUiyL5pvnxNuU2cv37hYBAPuxXRNgUAH7fGdqdg3fBhkJwBMfvYXcMvVW9HvdiMhqiGMSSxotR7vQL922",
  "key40": "HUPdjGwk1G1GPHt2KHCNNUgPFAbMCywRY1WG3LfQFCVZPV6YmiAH14SMkcvZwoEunJGVyopf7geZyxxt6DrpqFn",
  "key41": "24WPv3SFTVByyqJ39q5r7AEEa3mBXPJx7vtx4tQGja5EhdXb6o3rDBgzinNAJTWaRjDq5B7gmpcaMLWQFzumcQ8H",
  "key42": "xZFEWkCsfjPK9ABDkT4Yg1ZrdD87KLjEHN1ZXgcFsPgkPZs4LzRTe4WTqjn8igfDmJ9pq4ZV63SnYJpn2FLjYgY",
  "key43": "54LArfCMUaR9oFMqj883MNhxsY9NVQWNiQ7NbofxC1in9BVWsFoSqAdtAfuHF7HfjYWeJHYE1E9YaNX1mdJdDzjS",
  "key44": "585zDriopCPg5z8Z9aRzjH64twWi6d4LMrX3jbFiPDbdi9YvM94Y8KZUN59k9GdW8Z7kek7AgoRDS8YjzjsEPEVJ",
  "key45": "c3rf1jbgyay6UdY67uZapwgbaoCJA7rz2uj8FqRp6fRtFTb3cwzV6psmqrE4ZHw7SDFoTQ4x2awcNGuMEvksC1X",
  "key46": "62xygXqti3kLXCXZ9EDVNB3ssvKSLtkiFhLoNpbDvbvJqmExQw6tNJbgQqH61yisM1KdwusTR4MQSVbWvqkbkSim",
  "key47": "2ChCReFJfWNhHkmHt2XK9pkhkDqtm3NucJ3sk2YV7qihS4KZjipb6FMqN47T6max35pE6KSkAk6PVMkXvxsNxQam",
  "key48": "35sxS3cCuYatamUiMUDjNBUMHZFqgrmaEdqY1jUoyYdXUCjQRM2BTqU1eAvT729WfPFdujPku174ieuopqrk3EdH"
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
