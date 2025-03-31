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
    "2pz3Lts9wNSZLJsoGye37tdwZjNdc6tNFF7DwVwtbBSBTGkDbfrfyhsAXWfcFZSbVs8SLj8eJtLVuiJkWKvrqZov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQNZasfksYVF49271rHF3xBx9Rov4WrYmoTUokNeUVzWM9u2EXzwbKAj5fxFwKU91WwKfmg7eiSTso8XsVNU89c",
  "key1": "dw3yd6tTgyqY6XbksTYu64u26vwDLj7YrnFVMbhKQY9ypiyNVCierbcsRtqYfwR7yz3RzhKb47johipGx1sQ1oW",
  "key2": "3Yz4HMZmXGw7cAPFzfBvYx4Hkwv8krUtRr1E4DhP5eZ7WJaKq8B2kSv6QQ4MET9EnYJLXKYMD7oFRQ1WWwFKvcXu",
  "key3": "Mmhgzrhr1m1rrvAWxQYvfricJEBym5bTn2iZDquQy1Th7EKUdEDog58dZMPfkFGBFAJWAnfDL6G72r4ycs5XANX",
  "key4": "4GZxq99Q9Yu9vtzPeCAvboC6fHcxfF3o38wBHdRHSod7jVkvzcKDUJJx5wAHhVZHQuxg1CQwNZTsNfBT1811DCmu",
  "key5": "5CFdzeHycdLn2bXaMHeMeiYL8fvHNj4cwHHnuWjJdZVvgMfEAvxKMR9iLE2vLTG32e8ZgDsXfGXhgvV5zTYbfEpZ",
  "key6": "5R9bBZZESzU6javTV9QiL2EtCa6Y6GTr97qiPxJLes7bimGFqzoeD9Di5fRqoWcz2HUA12txHtvpNXYyx3vgm9FM",
  "key7": "nrUXQkBSD8oPe7y6P5x7MzYZ93DxC1epqBk54x5nXwSYPFXnfThq26kS3hAzGKr6eNNzUj1UFj7GhajZ5dEhLQT",
  "key8": "5CcxzVZvoeZqzs6qstR4e4VJXtUvqgxXupf6q21WMXaNLdsedErtv8gHgEymCr4PGzHTLobDwSP4RW8sWgpidmdj",
  "key9": "2UjMqedegxLYq9m6TA19BcNRzx2wGaADEnva5cWcW1RGRHKqHafHB5Ap34pbo1679wSoKo2jx82psf6eznFuYUdR",
  "key10": "5i6p2GD7nST1wN4J2Q3p5d8j8XaJP8yJUUCfXfPFkUVehRUvJXChyaSuffFy9USxpy87M617mjr6U1Px5S5ysJfd",
  "key11": "2RRogW7uXPrsCcpZF9bAyvjQSUBUayT8jrbf5NiBfdkTKnZNLNzzhPTrRBUhUZa2E41pL47y6BdVMVp29G3Kvtvx",
  "key12": "2DuauQdiKpjhGEuSTy5nJ2chxCkaRz6mknzzF7o3q4UPkQZ2Cjsipxf7GG71NuvaBSqPEeLZB3QEqeaeavwqxHz7",
  "key13": "2rDb5HeimoQ4rdXxyjqfNhdeSngAzW5jtEqt3GknYjHmvf7iKHxMxEsu9RSbqaymZMLcSqvX5kdEHsm49hKPVGkb",
  "key14": "2pdkcs3UwiMwDnY2zzwP8fH82wFxqsrobRhVnkbQmDaHbgoqwe5cxuEqnHMyLSQ92hzHKTPUjq4zcGe6kJQVTuXK",
  "key15": "4LCjyUAKdgEBCVy4VMCbPB6BKKB2uUZrV4UdsMyUaAs7VRkSzVFkDVqquJscntRFPRFyE4DaNZ8JmTnzgJiY8HVz",
  "key16": "4wpdeZ1H6kcar6aMM7NtCFLA93fQZMfvgtve2bkCG4jEYDuw1ogSqjNbGDYjYKJsfcE5m9jHaiA5BmdaDJjv67L5",
  "key17": "2C9eHxn9zwKguFTBY3PPHTZ29L1Zsr4BEVoELba5GRjPK31hq5zNDdWWWczrR2RKXLPNRgKCnqPh6DyfLC9a4n9d",
  "key18": "3kGRpWASwq8mR6wghzoCyr8f6KeMEj7uZF6L9T576H1L45wJTLaNPjQb4vgyXU8FpLHXoAWpzdeL9m9oozh13hE4",
  "key19": "spxYdXTYn9eAcpX3cXSyxgPzW99jy3ocyW9bFzt9GpfwV9jSB2iFuADiF7HcZP75tF8ZPxMMm3JKtZDa9SSRd88",
  "key20": "4M7isYEaukkfuE9L8kXYpm3b6j846nvR5qVEq8udaJknJW3nPhMcCQjy6kWRvqAmmS1CH7RUQZXG6bxnvernytfD",
  "key21": "3EWxw1PEksAmK1PVfem3cK1W8NStMbwJpdbo8nR7uRhFzkxzE5hFPkK6yQM7fPRZyKqgDjgiRhWDsv6ZP2imgTEd",
  "key22": "289BdHC43akgCMJj9DGzLhGQNTmrLrSwsE3CA1V82bJpzdKCsixkyCLyDhq241dHj6RmUB4uiK3oxGEQS67hkCUm",
  "key23": "T3527LdbLLY5WeEE2YHMoCD1JZK3LKSHBA7euzVVFJoZxPWEn1eNmuqbqujREqFCDreYKRyH3eaUmQa44rXcQ3J",
  "key24": "4E4zxLALyzeEtuQuq6sBFkB7ZtJjWrzQ6JSUUwFTTzzgK1AoyMorRfX4xrv9zExS3C1624Srwyqb88bdnSWmP9N3",
  "key25": "5BpPD5pUdbWo4khy9jVQkfb7c3LTKVtu4dZGZ255WkPf9AQnnTuTGgodzoei3xyjMFvtcgyzF83t59xZtRpZ3pk2",
  "key26": "5D2pZFhXWNXG73EcpioByANU2tmYcm6J86yvF3ds9u2xzGPLFpBhTiVSxDxzUikFmZ9JbQn7MtvS7sBu8WmzqoZs",
  "key27": "2vfm6FAiKFyW46h4pqmaT8LTQ1vtRXcn7t1ekzJ9d1JUpcL2jn99yFbGZAgKea4EQPUeKer7tCjbxzqE397XSztk",
  "key28": "65jvL9jZiQmEjeY6aJWtmSt3a4D7kDNUKUpqzHZSd2CCDLjkiFZSKdfWaGbeJW8wJo7sF4jSqRgJbRnAvDLQ5nRG",
  "key29": "3bRqjBmTjgbvx3QGruWmMinKZ1NeuWugtASKmnLuYSSnmzQJRz2EBrCHv8yHD4PowBDkMbjjAtRgCBavRJZgbx41",
  "key30": "mQuDDH9D6kiMuP2UFVCaHDNQdHxeWk5wDpPm7oyFP3wBDFmnp81ndTRSdfcpYfMJ8pUM6cmSUA6Nn5E1qPFiEaJ",
  "key31": "5nRoPyiVB3TnUxZ5oq4Bo95pGg4xQna8LoJxeHK4VUdCbm19PaLe15CpoEVqYpzLrC7kzaV1LYeiNUH5AJTZqKxF",
  "key32": "6r3VuXXpsWFCNBEx69gdERQRu9nNXGSJQAuoWCLnNztE3PBtAq22eh3HucxjzqaEYdxrsBNwzv1VMNtAN8S5Bgc",
  "key33": "5sqCTaL1H3Bnc587bS9TjyE346CzdxD21uuLCzhgUgcq9Rnv4xhugrQ5ECqFFBMtCdg7Ed1sgd1HULVh9d3FXB3V",
  "key34": "41pXUCrES3AruXb96Z1oyiUUG6h6wkGwghpAzKZoqJ43TjfFvMktJoCvnopnFpJu7TF2YdRWEX1ckFAvTq68c5qe",
  "key35": "3DVHd2ouSCfxmGeBY2vwCtd8VTBADWzPZZtx7F7CL1BrFEBzA86XQHeGXYjSQzrXM3U4CVcge3sS5TzzPBLLJ98W",
  "key36": "58sWWmnSKQqVpNL3WrpfowEzGFhYFgBs8ZFX6NCWwALtb4wjAfGK7rKHtCys1wVmf2VUSyc7TQW5pj2ZxA5XypVu",
  "key37": "WFpApXhUQ16YesYezj9NPtMrY1y36BPwATo7pT1SY6qQnbqDToqbTwRh9tA3azn6N76mmhjJ7VJKqXSyYFaEM3a",
  "key38": "4dCAeGknoNUPwehDcT2iMcxZVjHbno3cLPnWYBhVojq5qYr4GETi9iDfmP5vhhucxggCyEk9nb8WUdhRfUYzFqbb",
  "key39": "2H6G2Z8KRTmo4yPYGitz8m9LjSor8CBmNb2oZyC693Xqzj2XZW8q3w788DHXWSwqtgVsS5vMC53SrQHjkBSVNs1P"
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
