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
    "ESTNy4wyupnp59UfwMjsc6t4MNdoScfLhef3CaxrUU892ZzQ9ppi51Z6eYNAVe7gkc4TYXC7NHHQQQAzGcRJTsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyi44i1xPohjgx7TkCUmtAZtNqLAfDuFhrGesfPAhx4UG67U6TBeqXwmJMN3oyjWpJA5gbXw3DxxA428gB7Dotc",
  "key1": "52qg56vme3F6Ursn8LnKamJQDfEe168tJi6tVXVkVAhi18uvDa8MYe56ccALPNDvvsLbAWZW9xqqkvGJD85oB2oH",
  "key2": "3T66gK8jo5isxaDNdBropPadk3yfpiUUXvahqeLBFwpQvCEBdWzEYZCv7oktY8gze5zcfLW1RAxqi2X4syYXktQ",
  "key3": "4wqczssUEeKnNkP9AfQ5sSDoHaFJ3jpt7J6rwLfFhrVayeZPGzBM5Xq5TNftMN4Cyscsz64NENTpgW4SmC5GwKLw",
  "key4": "4tJXBNWJMa1CZSPkVTwfLmv2P3qp7ggYGSas5PyiTWhJHs48RqgrVMpJoVB4fgvg5WzJWBez3VnFys2gqkgFoYKR",
  "key5": "5i2N9m6D3mxJATgJTXqVUeSvhHk4YRfzJMw2CQ9unvh12LBLpknmfTUq6FoNyx5sQbhh9mxMBKgYMEkura7YUecL",
  "key6": "4PpY4FYKfV9Sg36pDF5JLuF7oAAhbVgocNkTbS7RwHyy4Gkhs2sphPqA2krmZofDfMKHA3VDsLFzha81ApCoZFLg",
  "key7": "39RznqjTBsDPiF8ziUP4rKUJ1FAQSUycrdu5cmpovUzXwDjQhNqektCftFdXKDPUJWcvACCk1VS7X1UF2w99aV1",
  "key8": "5HfQztYxZt2JgCwRYdYoSMRRVFtTyRc362hrWTYWGZeJjNNErezVSox8z1ps7nyfbjHeEP8hhUVw3wQw8En1cnpy",
  "key9": "4s9zWnN7qn58qGVQiSipCMGpgQqLLLJP29nT3oXvoCcquY5gKHUGK8aHbsDchdp5wCYAcMhCnU7sYb3gitqAmxrc",
  "key10": "3Jd14NutwC3xdV7bvJNwd6Ljwa6p4mg4SoERYdbeVBDBacsDHxEoqqRWB7oSWmVzvrqu6efJguXfg9owjethrHhG",
  "key11": "5MErrb32FaJptYgVqYszaqfookXk4682Y7cu46USwX9DXu8aeCkewZw3L6KdHSFCnCJnam2KNrMiRqbxR2krdYJe",
  "key12": "4WzViEW75ynCaDNe6KtERKV3QgSQUg1AiuRkitM4BcTmXDU6js9FSLeqkio4zjyyPnHUsxxCezNHrEFVkCrmnra9",
  "key13": "2Tr85ttwQbenK3BGCZQ3gnv4FpcoHrpgdBMA5R4yGB267VxSEPY8o65wAxfWNkkYnLdpjK8TtWtGHQ8aCrc1wKWQ",
  "key14": "4Vn3J9MPNZR5CjYTiQY4LYJy39prdxncLLnhaN8JcP9AL6uyGBmSie9VG8B1tRD13dNL7kFCRQ2KnBqbJBeazf6D",
  "key15": "2bc7Ca6XvPEhHhjsDucGAvH9MTKerxCqSCxQc242Gbv1moEiTPy8HRwkUxFtGrPYGiDZdcuZnQESg5f5dM9c5dpz",
  "key16": "2XLZG47i32mDK1evxccHK5Qn9bKXYLk8MptCW5wnmDKdjJiGwDZo72ENGScKkzUGEepPTwGdigV5GbhXBoevrSCX",
  "key17": "2rL78YWPqEw68AcUTdTRrG1RP4pquZx47DtmaDB4BSetR6BNUr8L1dsSkYTerUE5ZqJAHFNmgTogBv3Ptqvqgv47",
  "key18": "3KKznkJqUJFyxpmqVohAzJ8qLoWWZJgW5cZY1owP9YXRW4AVn6qbZ3o18B1RDcSLA7e1LC5iLFVfbsJFu2jFKyNy",
  "key19": "a35uSmCdoYwDLrELyYTXAU8R7bryEctPHWPM4c1oZF4jZBYLH3FNnL8mrWUipVqVkRqrJq1hwkzfH3A7JtzLnMQ",
  "key20": "3E4BdSV2iZMBchgZZPmDdbjiKG4Bzfsfmxkj3a6ZSQnQFBMcoV4t49d5Ynr6gxhXvo2HtaxRGhPvkcbGMFVzKSrU",
  "key21": "37fYzXnvtWMU6c5CLSsmZxjdNZe4AT1EhuZS3kx5DXo23Nse7asz9YqrtgAz9cyWER6bVLkH9SihKxMMjH2yDE19",
  "key22": "5kWsMXwckenEmJifzyfBG193RekhoMvRC2MyWn4Npi2yuwFvczcRo9UkpiApSSphaW6t1ecuHV4AYvQWv2aHuFZ2",
  "key23": "2EYvKjLSVXzchS9th4cnGQFZgH8kozGsMb99QbeSzN79XDc4g18ZUfw52NKQkwgZAZqhoq4kaFxWqxMofuYTUeMo",
  "key24": "5mQhdtEMwu1PrtyPPZQrkzgMaycixDTv6MS4SNn4oQA3i2S8KXV5RzKb5j8X1G6Drt3D5kTuZfPpaSxUN18pMjUL",
  "key25": "2gDTvCAGX8ttDCJL7afGPkPVJsgkFEPWixpXuHBEkMknNpRFYJtmBmprsaWNTQ6J63ofRrCT1n6F9DrNcWvSXCBL",
  "key26": "Ynear13n7iN5JRceEv6dJ3tG4fWaqq7qkJvFJXEWwUhS6PfK3kPVfjRv7rJkbxjyhUZLrkv3MShYkVfVeDrUTU5",
  "key27": "5wJXhLQCg2j5Lj7zHsUJN5SPTnKgtAKRW138wcL34S633HFFu9opbKfGGLJBMcca9N4W9zdYQ4r4BPDEXydmRMut",
  "key28": "3JenVTuLK2nNVv4vtJ7bDkLmmP4VPmwYNbDb8UfKALv2XcChR7QoKJfD5hG657nhPNSiktxkp4XGUNvUxCEdvnmo",
  "key29": "2xe5KQmwv4WoxS9bAKXimWpZy58fbMsaYVTkQ8vdH5kesC3XveqXEQxyavHTTCzkXAYmRzQHHDSzMWxk9Ajhaf6x",
  "key30": "kXxLG9SgVYZaBYUf8ZStqvEsdTY1QeqrUooRo4sa7mHUjbJirBSxPi5ubg32onxHv7DSuhJR1h84x2CuUBvpKWG",
  "key31": "3Yuh9j7gfVcLs7i3CCQaMnekY1bjPivPvd2XZWLnuL9u4KXdndhEtvcTkSWvJVcRp53Nhr3aBaBKpphaJMbdw65S",
  "key32": "3pJBr1bw3zsfuW4HDsw7ZrCo1dKCV4r1J9bom1RVfj3D7reLqPnFYLbjyeu3M9UhtFecL4xpNJsN8QKKG9VR7n4X",
  "key33": "5P84WCEYBes5z4bY9FRMneCDY2pdrgTw49hKTvaA7iERtxrEdCTQS6tBHzC4WmWSgEXK9S7FE3nHdTGYxcSWwcfg",
  "key34": "316gP1EK63xCy95Y1yEBQ1nLWdGHvxp8deKo5Aq2HwiJkuJ3q6VuoA9A7RLAAiHNH3zL7wg85DXw5rCWYr3uqiXu",
  "key35": "44wfUYQS8uTBZuvtyFvvXYCeC1BBCbsZdp63ZUdakPQAL9W9Zc54y5N9nRBX6Nj2aKo32fcBNBD6PUPmTZfJqy8e",
  "key36": "zmsD2bhRMDMCCiLgNNJspAcCbE8Mp9qvsYqz5Kibk5xeFk4K8Dik8H1aj6D1mVhTu91T9EvDozBEJVPHiM6Ar4g",
  "key37": "2xTGxHNNuid9xQuta9qbLPMBHry4ftHLHxB3fP4KwKAKMBBYiXqctHiaBjf4BkPCG2dzFvmAk48ER9qMRGKsMb2E",
  "key38": "zWEGBZX8jvtmSHmhMygM6BfrByYnemDydtQWXSTDnm53YLrZaj96XBobFJ2ktYFRgMzxZzyNXMU3LPNanB4hyEW",
  "key39": "2F8pEGjXRbe4sEa61Zmd5mZ7DupbCvgPycZmAtMu1j8nUJp4axZbj6kAb8jfgK7m88vRDw83d2Txgja1S2DUnXpM",
  "key40": "DyejKFXDuSsAghs9bGymdFkshZgLGjppZ7C2snMXKpXzdQw6YCX5iLJM4akAjTX6UHHCcCYA4JeyEfMizSD71ir",
  "key41": "3L3stye12AzmQ7Ghe6ZHfMHjE2VWgiUDwVcTtETYhUzNXrhDHoPUcsvgzfZ2XqWzbo547og1bGvbz4t6W5mDhtAT",
  "key42": "4g6A2S5XBms8ZrSVKKWcdU2v4WKd9MVf8A8JxRdocrxhsBfQGMXq3qcCHu3bK8VoSEqE1s6FiTHq8Brh8jnn6t5m",
  "key43": "4qVxDLNPopFuCgy2W4zzot3BS1WpPeyq95sEmEvZcKJpsMywkvozsQwDAC3523negF6A8sbNWEpT8cKBhnHkd8U3"
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
