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
    "21rUGbxnXLNcMGz71WGYLZ1KhDmeg3fwKoVY78EK8N9eJG8Yjd7ntQ94fyv6M3EVKhtSFPauabGx9EVEvUTfgw3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23t3Ez4NEhLHQbSNfZeDa7rUj1qbHNjHUBrGGHs4pG2nb9Z4bxm2UYhwBF4myXMNnChBMCXdYMa2CvWvv85S6yp9",
  "key1": "4BQ4JkSQeR4rTrDnN4KWuet4KiKuRcvHZt6CToK27baycQv7i5XcwMT9gewR43Hw9Q43kB56YbeEUFX11Pezn8X1",
  "key2": "35yy5qXterbyFo6tHYt624xo8x8UAuH5mWDh3peBMWfpkatuzdkGhaMoEkovZbLFepwxpWiNVahjVvgHrXXVBpNG",
  "key3": "4pS2k7Kymy26YuiuprHQbD4BgbpDsFyLGthYHNbFXswqwe41FNpGPPNomP6vDQJCRSn3tugtEd4mZD8VrrY2gy2w",
  "key4": "5cyXSiyKyezWLY9peuG6xeLSq14EfAWEuESXGKaLxPvLy6AGsrHE18R9LdYHDY3LApZZgnHu2mju5ghSJeoAu4mt",
  "key5": "2GLmWe4wy92J599eAY6QSdEy3jhCzortRhKcCa6xynus3KXithRGGb1XeD7KjwxFgLB2YPEK7t4MNYx2N8N4Mpm8",
  "key6": "CTPLJZJmus7SoUUMxbqkgXjv1FjZJ9vuo16FGrERSrFG7ajG4v4SW8nssJyrAmPinwLxbEk9vrE9V6g8u4M3Vbe",
  "key7": "5dXuGUFS8WGodFhzJQv4B29q7SLqCvk56SQad3sW8XkHXvmGRs1eBByzho1ob9wTxLnYMPpkd9BpF91EEkZkAX8q",
  "key8": "2E1zynnj6HLxHbWX51qhPjnLkVBjvae3CyN81zdEspN1CBGV1FjfiSkH244xyBeya2pCqciThAQbVjaET9S2nTwH",
  "key9": "QGMuFe8tifgeotqmeUPp8c4t4YCRfRTKruB3skhPWzznfzVAVWYB3Ai1a7iYneDrk9Qh2ctdyfT2Q7TJkbi8itt",
  "key10": "MBtLHNe3DpfLbs5C53aaQsWv4c3VBvsSRHSibepCLhPBAP7rKQYeYU2b36ypjsEsVch8akaq3P6SCxzXa41vfae",
  "key11": "Ei5jJ4UGrdyL4eiupWLMxvZUuTzpJwLgatwiNZuBisJYkhVseVYubJDSJCKh9R348NrGk9o3WsxwramykWihz5B",
  "key12": "65Sz3t3MkQu5LLyxvpexs89GRpTciZygyJuJqXgnVfwZQoS9BNpj2X3w7cAFVh2gpVCQdCxxAGvmBXmN6f7iAd7v",
  "key13": "5ifonAu88PdU6d5aKFTRNQjzZEKcGVXNhtDzbSe8zBorHtrsRkz2pXEw9Lbu3GqCMTG9L57raVsJZz6i8amdL8Sb",
  "key14": "2piaFxikLYZSuhKggK2drFuqfw42gAGT1fkSg9ZpDJHM89rkbPcpiJZZne2FWhKsVskDwiPbvjxoLPa72CfHf3fH",
  "key15": "4Pd9BHc4NMC43xB1BW642zmAa7f5jByProBvsFYhsdznywv9r3DgD9kVQL19iwkPkTCoyd2NVH6mBMxE8mS2PRmn",
  "key16": "4NFbi5zHnWszMUBkHjEZ8Jd1B9ARKBNZgZvUfBHvyxZhn5qQp3KPvce8dGCpNda4e2ws8MFeNf3MdwTk7UU45jEe",
  "key17": "1qQDgUyJHUHbJAu7VSpMf4L2iJ3XfbFXQmrWPVYLaPC5SfwQNF6JMo5gj88EEHTBVgYJ7gjgzvS3ar8LowX7Lot",
  "key18": "3khdVao8ZYjZbwG7ECe3ZBe6ywVEw6Tw3qkB1Abn4azaQAH73mchDBrM8c2vJYWam1x13QCqB1n9u6Ebh48AAdH9",
  "key19": "26VuDzfRTFQNgJpXFBtrbk4qwXNySN2UTfe1V6G8cx99vGbPYRy92V3PMLvx5BD8sA15L47TshR4UKXwGmg7RH3b",
  "key20": "5F8dNt5rKS4wkL271ZKB5zTUFWwQ5KhFJJdydvxEkqnK4y1WipfJJJj1gqHfxtzBe9QS3PjD6qjATYxoiSaHY1Rx",
  "key21": "39mSToqKC7Xg8oSydYJTkd3YBMfDb151zrvC3bRXNFRivb33RzfhTf64ydgd1sRLrsBBWApyoSD3DguN1NGN6B7L",
  "key22": "83yxrr7JxthuK1snnsRSf9d852VhpdUW7jqMAskDktaS7Q9KtEwwdrJzWArmqa7YuUZzV9jnknbk7TXdjuoevjQ",
  "key23": "6xMUrjht3gxPPVqDMwA2mHePGbThxJrZuaAT4Pc4FWzv65YxzmquQn6o7wcyQjmgyBesLrgfmtTBZoo7ir8sncd",
  "key24": "3evtRLs36pk4bcyqSboNkj4HvSoMKA6oxo58o18NC15Qwf9yh3ZDYdgayWTJpZv4w16rAwRUZBJGwvimVcKMQjiU",
  "key25": "3kxdRYqD6GKWLMKF8Y8tjbo39GHt3tBWFmmfBSRf8cJHW59An4M1SfnBFmUDevBeCsQ4o4LCCNBNnChwu7b6yfrb"
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
