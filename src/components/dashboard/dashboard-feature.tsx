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
    "3oPWrmjz5Dccp6fAV2NayMQMoSvZ7TTiupjHQ9wLFrjXxSbVSbWudUeWsWhf9p4dkXhVLTK1yTWmgbqEhXtGkFEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31a9EASUjL97uKPvFS7qYofThFibvSJWrD6JTyUnnJrnBunCXxujmmAe3veountPYtoG8qAMcdJziZ95SGC3gEx7",
  "key1": "5danhBQugKFg1DAcE68VggXgni9v2h1zxptYwBgNeyEKJ69u1jQHRuA9edbgpippNrWo2ep2Kn9Xv4Hz6QxrSyZT",
  "key2": "5TJ8WxkywwtX3ebF7E4tDUZQF8jXtBKBQUYxyKRQgS5SeHdipiN5WHw6zqXCHossddFezFKUAiwNDDbkBKVYrnQq",
  "key3": "4YEWqbQ8LUgUbK5LtiA2DqXRRsTKq681eaaNEcqgUnXXGMDowGkvrMk2Cg8T5fnTFVTiF3CJqQrP5sANoVEHbFWa",
  "key4": "3jocMYTmBMs3dtbKWDydykN35Km1fhkMZyRus4DrvHHWoYtVXZZ7S47bgwdgTTbMvDxpjwhcNGBLFRxUwS33xbtS",
  "key5": "5XP19fjX9AkvK7yzgiBXqbrgHgbGnxof1ic92ofXBKagEVJxuW6bBabqGnrGkPRYaFXNoccRWkdzpaeKq9tRek2x",
  "key6": "5qBfU4q8nW6D6vnSPdFB5LbBEHtRYHHYpEXdpsGbszR7NhWVaXG5r6NLqxHEEH1TCCb1puxtR39dcDUHbLcbcGTi",
  "key7": "2Su85LjLK21AJnAKqDMm7u9fneSXBLiNp4syzGs9SeJ1DJ4nc5fb4jr6ykZUcSRtkEjcunK4SapKunPzArU3p5Xj",
  "key8": "2SmRhB7SvnGB4ZhnFbHa2MgCQ4oqEw1gyh6iEhyFMu5rq58S1CvHsG1EpFjwGnXh7t2dPdYSVp7EsfWdJJrrZXUS",
  "key9": "2R9rHsrZyCtgpF2SAQugUXxc1vvrxzYpPpt35yWkpjEXKDnMeE9EnU9teG2ShNvEfiVxSFBbbkyQFxhSXxGq8bvJ",
  "key10": "3PYgNTASjU7Gt5zn97gjRQFRXZwxz3N1EGrq9gMFgPxk6Vf3T146HXTsTrvXqgzia8SPPLXNLTsDpSkGzzHXpZnd",
  "key11": "oDJGBmGBYeuracc7EDQ6sHHqqBK1tqGwQr4aLo2hi9eFB8fDQygT66XHih1F3WRCVb7Nvddr1TnTRw7vgSb8VPj",
  "key12": "4rDiFEej8nTLFpvDUWKLy3kVcAnhzpdhbKeFZf6gimb2KzoqzRuT68pqLtEusVbKwoF6QaXuBcjSPW12N1ZJLP3s",
  "key13": "3zZvLsKHvpUMGm2Z292i2wiTtwHMAHXsvcKRFxR5Yy9HRL3UJXTjZ5KBDKhy1fovdGdXHQoyah5RFe5noPqkXeoy",
  "key14": "L6zN6VADRZG8DWY2JPaaVEMMLzLwv6F5qwZEwr1nhV88YHXh1iaeZrzLdpj2u2CLeUnnaLtUeW6gkpwNyeF9Xrp",
  "key15": "5YhDqiNc8Aqwip2SeLYcv5PM2vyQvVxozF31PLtdrZ8Zc16Ly8TuctBD9jN9nPTjnEjoKkrPSCVdXuVa72hoPEsw",
  "key16": "BFyWj14CaMLEbGA2ZgtfgWKJvjyJ2Z86wcNkNGbpBXxyyn8mWMxq52J8q138Td7K8UNTy4qdZds6gTkfiZW1eod",
  "key17": "53sYaKZQcGhoRqddX5qEh4vWhBysNxbTU5V1oLmNt3aSeJ5HRBabYATLba8jYWp5q6sThmPAMQXb4Yo9yaahQB57",
  "key18": "5YvJ4Ws6docFhhGp7KicX4DSW8DEwhcbuJGDTE5kFwQj328NyKPXSgcARdnFwCu9udcQK16uTnjxT8oQyToxPrnM",
  "key19": "3jAAbYNKpHvBfqoSvuU8SV7tpegsqBxkvh2jJCi5qTv2XmFLvqZCqqscKasMoJBwgofQzPQbAediKXh8QUmGdgVK",
  "key20": "Zb8pbCMJWJBSPDJAVMAoivMx2asTjQ7b7TudVbuE5ckyfP1qRRDx3kCSuTkt2mUygRJ4rJYqCMCHh5VTw6ytu6e",
  "key21": "24ZbdL8GQpq32akT9dUcoW8AgUDiVQ5jbKZJo4r43FXR41sWHa3vVE9DBmAJ1Kp9UsdnbJnXiXJWBuumRd3sFv3P",
  "key22": "5KwwZpiVaLcw8Ed5XEhtYzZ11fmgmorsd5AuKcBgsBuQy4brRsuYAsYYqLuujNN1Bpj75WHXn2jsmjm92yqTtUuB",
  "key23": "4Qn8BezBMMCKhf6riN55HnGfojp62pTx8rkCSpMLGU2ETWqqnqo3U5Kh4WQhSjCEHWj527xPmLtXoSGXF83sG5PX",
  "key24": "U6nRt1GjmHbTvA8MeS8nj5Y8WjPtYMg32eZxW2Hiowy3oS8rnGpawU6WJwEy8pYhaW7xswMrgUALvMViunVQyhK",
  "key25": "32PYWrLyzJem1M3ZF5Qpo1d4ohguQ4U25VinKKYkkVTzX1nAjo6ptkR95BFkEJeuEg7thz4eG3tszYcAHVLbQr1h",
  "key26": "4TNbjdQ7xYPJ264jriUsgxMgw33cMSoXvxKmpwP19Ht5myja2XBNa8tnCsQWFd4dcrxhxEZuSXPfy3PT9krajp3C",
  "key27": "4gNE6VpEhUMcxohSnvAR5DdVcZRV8iGuLnPXPwUJWXAwbCePGVNgktJqS837FbbQcDBtKwXnzNuofXoTSsaDGqw7"
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
