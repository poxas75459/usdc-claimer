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
    "CJd6R7Pn9jB93d2HKNzYfnePNaY1UzVhn5hWj1yVCojwCv18JHwfNuiZDeykLsSEGoxMic284Cefn1SaHmjN4Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8Mp349QPi6VvhHqGh2dk4xhf3u19h1zYZKCVjWUMnk2FsUkW3cctG62pYgGJM8jMCpaVtr64ijCh7x28CaywmD",
  "key1": "FYpruwdpWzhSM3oRLvDrBFZRWTKbmpDnzRXPSo2Fdn8GyCvHRcRuoDMgr3PYW29wGZTVHCZAPMJTWKLpS8472Lw",
  "key2": "abrjyn9qgXRyGL3YAfZbGEKsKkEvZW9DXSBheUNvnNnNncnbMLG5yu7rc8kPQT9F79pGM7yBeMDKkr7z7KcQpNk",
  "key3": "4bvnkS5dDozyZurr7DiMtwaJgBr112oV4xXwxuRmXAWXkt8mDoWVrLXEmBGZ15PQ3wy7ccE8dNSuE9zQCFx2EgeM",
  "key4": "anjRgTPpUWA1jbLnbJvZH6oVXMtFwuRZED37y4jFQ8VvH44RvbDqMkvxpPt1PURicbmUeB2YAvATKuWpC9ETHVG",
  "key5": "2D4gP6quuuCYmu9v42TCy8FVzGJiKMLPvwHakABG9ReyhapPrGwh9i8VgCaEbJ3Fp9wKPmaKgxegeBDkot9FB17B",
  "key6": "5NWRd6io1PyXUAqcRAEcDePfVc8dcdMtHx7G2j4LLvamX1PpXD36mn7kYigHXNAACtXFbc1ZHRgEXczmt76Lg9aP",
  "key7": "4XXR5gFgJrjStRLyxqhY4PUmJhqrQ94MJBGvoxM5zSBsVkXyPAHKXiDr8qwoLFLZ438YETFPexCRw5Lek24XLjXT",
  "key8": "25bd9QgFBiuovPVHDUpTf3FRgaBcaSMdansC18JVAMUErmFHSHsf4JMfAG1B1SXo5bJezJPRCG5b4PfN8QJgL71q",
  "key9": "2BqAeKCGvq43sXSkQffoyyeYdQsZ78puis4FPTyqpkchcpau781Y7NA2yh8o1bk7qSsXN62JD65waarrwqc6Aqxf",
  "key10": "5WWUYkUjdJEG5d1xxKqzNrYTZKuyVgzmjrfC6Ea4Ag7dgG1HQrJU4HhPoKMsDxZ2i2A6fmywZmfowHPa43anTRGG",
  "key11": "kHUtEtF1UVYUzVRgUuw9PLmZcs6Dqciz9oRfrggo81Ax79W2m1Jw5ERBnfdyZHQTgmW47sub1d5UYiwRrtnKYtv",
  "key12": "2yf3VvqtcYk71aRe7z97bQeJVR8u2wVj8vcGyMvCGmR8FPfBLZAi8LrwVuyEzfsHZuYWKTVgfjF55eUFrSyCo2t1",
  "key13": "34iMAfbvT9PFbAm5QKjT9mhxuTFNpQ2nUTom1yXQJ8sXRsDdjYsXPuHPHQv8vMUMU611c9EKkH3CU1sWtZk1zAKH",
  "key14": "3WopruPyvHSCr1w5vCxjAGibgY19VVM685aczTjDY2bWaJinXSz1KwpqBckduahaRKye7psiP11V7VAsBJzm6u3s",
  "key15": "4tXoo2iaJ6eFYY3t1sDWiHVzSx46tJmHGEaHkhMMiejKD2hkDxqiTbgZdZXw1sF3EeWVSEQ9Co3cCUzg4Q5XMfwi",
  "key16": "366VaYbhw1abMZqt2j7mp19nCAJsDajR8fZjtWg3uZ6wKN9Mf9BrApAdyMHmGeBv9WVCfDoZj32zLN74wCLvAdgf",
  "key17": "5gFqHBQyVnk5EsjLp8JwPxJF7DQJDW6hLkqfggY5NN4sfune2ZiJg4FpV4NfEb2vh7S2K2B1aDXpHf31VScN4ZtN",
  "key18": "2JqWw2pwAUSp4de5TAMt5VE8MWjFJrjwG6dxE8gD1CcpnJwzMLtQeAixESWBB3E2mZTKYdTC2z226BPUx3ToiVHo",
  "key19": "5LaCz9p8KbKaxKPzhaKPBFVPMgKiE3XJBw8AFffuXQ5C5n8q8Fgy69KUtUqJKJQjZF8ziufG5m6KznwJ6rkTy9Kz",
  "key20": "5rq8tWCfffZtgfFUfgXBQteY5qrdBq4CXbWf9M29FWaegi7HhsCx5p8ZjpB1z5xkCPwk7wEtoMabowY8WZBaoi9r",
  "key21": "WBpLkgmhm7npwrCVHmoCw5bAgJQj3mutxwcj4v5YyX7H9CPNQBd8EhfAR3J4u1BRPNbf1UFN5SVixtW1xusFjF6",
  "key22": "4t1aCjAB9iiCfjgUnwWimot43U8DeuyYVbSAhgyNkSuHuh2CPthozQrhEGTMg2XQ8rwtMVBa8DCrk4hkkB8vjXTY",
  "key23": "4GSuoFSrfstbMieMPntue5QeTwYmeF5VfujPz16uC5fK3DKdZBVDJUWp48PLPFwy1N8a2XmHsDxsxXzSsJuG2xrQ",
  "key24": "63Ft8GZrqoywN7hejgaZUQtjN9VXmrGtHk2xZWy9KrnLw4M36YoS3ck57E2rDJC1zAnnXkgoRg46o8uMYxF88asB",
  "key25": "2YHbhFJEwrbwuNbwgEJrp9kR51Mm7fHwb1hV4MoqH1jRcQubnxqnJDLhW3eM1sUZDmNP6SqdpcJWZU3o8FT51hKt",
  "key26": "5V1NMMUMHHBSmRF2TWQAARtF4RmCWWE1DiwKnMPWsAYXv6qMjMAe5tbGiieNLM68EznKZmAxgFMqhPB6AsZHUQ8a",
  "key27": "2K4FdH1wF4AugXepd8ZSL6S22WZGfTMicnqX6s73VpngjVMPTGZZvRvty8pGAaZSzjgRk3bH3jRTmxcfdSB619J8"
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
