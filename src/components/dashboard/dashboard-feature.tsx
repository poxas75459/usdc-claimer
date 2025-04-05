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
    "4KomuEBtWMwBMnfw6hfDnvvg1kZ91PZQnBjxGHfTgHQjxMdgZqdZuUxVBosbD3iBz24mhAvH9P17u3srXZJMMyBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiQAZbELGowask8thSF5ePjoSeaywX5hVfM5qmpmkYUTvQePfrFQQzaz2Dsn3j4rZAitvQY9a3Bg3wqMT4o42Fr",
  "key1": "5DSwFVYwPVe1mUuMTRxLKhkFGqDP91hRPPteLXJHgtqL531Rzw7gw5zdpzDGn5KoSxWZR7BEWoLAm4f26nrpESaQ",
  "key2": "2TdXy9H4inUm8gqLLzkQfpTPZEe4j1NkHp6qWWTbmuu73MvdEcr7jNYpjuu38yS6YS5DuwGGHhC9QS5UGqWdjYEk",
  "key3": "3yUsFwxidnGzMMLjnx7f4TYMbt9ZBPKykb9i3qFWHstHA36VTukUELsemxmndbqV7GsB5VJtRJBYpwmeWGJ542hM",
  "key4": "3VAoZtFxPcTUTVMNtTSnkeBmFppSDsWfgBMWUgw1YaLjaiLeCiidLBG3KuBEAvLYUsvsX5n1HS8EWAxBPRjck77p",
  "key5": "q4FpvVfVcu1UM2GUtEHNCK7DDSwgi3WjP4HuAypNRiSCuCqQozK4wpKP6sLoS4dN5ykwYBJgcF3PWgH6kzqdhVF",
  "key6": "5B3iDNXa6xp67oAixUMg6ziRLd2m85V3v84xjHLfebQeq4m7gDsNWcXMVicmCYhSWSSkxBmiCG5So6ZD3suEDj3b",
  "key7": "3wugSwScmdHPCqMoAonfxAwpniYqYedYQtrhJ5oDVKRjiAdDGmv6QSS4mbTUw5JQhpFJZDMrS2YccJ9AJWg3RP8b",
  "key8": "5TTSqTtjTFz5iJtatWJqdcc3sHJdDxQXYRfhX66cMWQze6z7j7H1ySbCV2615yb4oGt28o81G1vYEC6TxPhV55im",
  "key9": "rsdF4e361SHm5pTVrspMS68N4KFicJWj9uT9sq7yg7j6XxAJfmyR5mp5P48xrcFMPoZLuTBzmMTZRNyJwP7Mas5",
  "key10": "2XKcasooNAF5SmdG9WqdjXBtCUqEQmctdAmhGYuvZ6ktcHxdEYT9v7FxTuFPKbRxH7dHNMjbNnqEGrV9ho1VHrkf",
  "key11": "5MDzbqKE6nSVVxFJtoBTGUa6D6u6iUvrk2mQcEZtvJWG6HSykAy7WCfyBEXdW5gFmXUumcMZppA8gBBR8dQ28Wc8",
  "key12": "4xvYZARoeLLPMemVpnH8UrvqoFxTWyMffJ1wjmnmWvnkbjLNpxpLCLtR8NSXfTWn7CbAQGiZbGaSYnpB7vwkx4tM",
  "key13": "5DV3GckxrXkpskoPS7idVgs7ZV8v7wgkKi2XQCfM6nC9qxcCVgnvxhE6HVTB2Z5ufef4LX7kjqK2AKThSGY5qykD",
  "key14": "rUQ8qtTGJWy61Jd4SB7AxxmEJrX4bfwrTTvaVbcz41TwWNSF5HPxuAwb3hjbhhbnG7mi6wreMjTMtx4iA2PtAvN",
  "key15": "2ogcyeFkunnc9Pntk683Q6Befkk15M1p21tzamiqq6rGi5pxos5KQx4JjmQkDeCoLw3d1tbTv2d4zVdhrkEKiTFk",
  "key16": "5mf45CjSTVADQBSNcuRr4wDJ5SyGps3NgaSjHsLjybnUf148AsE6mCssDwL53DrseyhX2oJApnvGAUY58pQU3xXJ",
  "key17": "3a8S5UmnB8KX5Gtf1Q26nDqgYGKK51x8bEsVPJXFSpaotjKKsbVK9QNmd5AjwkqLRjyuoytPt57MNTFDYKWz6JMV",
  "key18": "7aVzJNxbpLGh3atvCB7KdsCqzurGnZnfg84o67pFj5oN8ux4UYs5y9xraiB7VUE2knp8xeLwRxvmvYRQsK5DiX2",
  "key19": "yNazpmT4NY4ehmsz9DrsECNsXLvP9xS8Y92rPaQd48YgkEWf3af9UnDPpij3fCksz3hPdkWTh7s2ko19VFPWq88",
  "key20": "2yteLcrKj5664vHEkKCPhQPUbtdXmEvSUAKueM2FxgDppQhi9xX1RH6YxdqoJLXDc6enRCmtheVy3hjVuZo1X4m6",
  "key21": "2WY5cGdcnV4oPC8fJvBFLzetPLs27n5jCmTmXjmKaJaGU4AT9HbhuNL5TQ6FRWcJ6fdfpzHBiJY5sNTBjLuXumE3",
  "key22": "5fDFf3PiD7tjk9WsTmNF3VuqCLZwawijStSGtZVskuLwP2XuXminvyz6R7HhFUCnbwWssQAUXieB9EuGCucWf6Wo",
  "key23": "4dSVC7vg6M86WvmZuPUsedxUqDzEF6AodA1oetEyNux1tsRKu77LfsA2SeDfdGws2dUyCUPYYVm8SxePybxQxCny",
  "key24": "5A9wRJvBWnkzASTGGQS212UkchsAGxWyVZ8NGwje5bVEMrbrTNZdrzMoT61wHdgs9jZQfLskeW84wSdDoTB6MxFi",
  "key25": "41xe3XV172ceUVhy8uGhEbH2e5hSVke9S6JcQTqJ134QD1oYRjXqQtAK3k2knZmA78ZFRzacsCPQaFAPvz9roAgH",
  "key26": "qrq2K1FNWQU1sMhgTr6ED5ZUDwQQCraK4Ko4Nr1rN8BKRTLaNiYX3FetK7J287AXFrYGtWjeJPSVCVDprMnZJuZ",
  "key27": "Kq98eFbW6iY3FfREpHSSfbo7LNyaPTZj22u4aCTHuK9BhKD3jaa5hCfJsDoCuybweLM3RuhnSnCuCz4TbBrU663",
  "key28": "5D6csAC28bsqb3v9JD6KJQduoDu56n5Ngi69Vjc4LL8PAhEVBNrZK3oxdAcYksxu8F5i8PVHonxpxjwAMrj8oaV2",
  "key29": "3fpLXPNeTjc5w1F6QAmRkJ1opD89mZmaMWHgYCVyTtQGun6TnwTgibqAzaKQa2e8DXMGw8kHbDphpA52dUh5nGF9",
  "key30": "3EN3tPkZkH7fSpCv88MzpULtTWjdQ2vx9cesX9AMnyCnA7JpcFPweeEBgoV2prq9DxPmSLYc6VvoHxVL1N4S69ag",
  "key31": "5DxLAAECrCy3PuXYiPuCZBjTte3syqwPbBnQcSZBwbCrR8wys7gdacKw11wC5iDPEoTBFHK3mSriZ8sidDS1VpTP",
  "key32": "5WxuvbVa6seXLMK6K8hn5gNUqAtew4ydDRFiRgibsM9qo4vtxKF1UCbAu2oMCzSnjdRshzJrPZ2kXa31M7i3yWBj",
  "key33": "vzr7tNXgUNHchYAy7PNKgBk82E38Do7vwVB8akywxgCM4MkpNuD5bK4tHiLSGYDGTseoSQBt6fSKtdd3PRD9AnB",
  "key34": "3eXUTJGwiez94Jk1BJ4bKMj9ormuFWErjxmJ6mQdi6VbeUbXsqeWkFcbSz6admn1noYgrLKRboZdNfLMaugnxPES",
  "key35": "45jHTaYNTjnYL1QDuyLHtuj4pH5xJqFNjGinTW22NEfxcj28EZviMuUbQEen5yps6DcQEBqJaFronRSXtm1yW3Ev",
  "key36": "562ZrPGFBHBau17di6n7oLTsMA9U5TVUQqrG5YZ6hDM12YRqCDwGyy5DTTTx93tX2vrcN7aKzFpdZ5GCwsgqJWQm",
  "key37": "3P2c98zZ9ZxFDboG2GBEzsYcqZgdSEuLrMcGyJJV1aP7cnMFVKXKmpYqbursPch5BWv1uH19MhPFD4F2usSfUrrk",
  "key38": "5jsnRAgJkxhQmau5wEXbxYJ3USCseGj63ZaF4Kc84UiwfEQF2q9vo2tic6E5WtGASad7zGgpBX6NCPEqyLyUhJGm"
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
