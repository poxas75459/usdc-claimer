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
    "5nh5TYCNtiFhECwiszp5nuEQ3v9naGi7xL8de4tGv18oVPiBosXopWXNEHzAo67i1psLKgrhnU87Saszaw7UtgE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cftNbTi7sUcdoAqw6bQSSUYvzABSF957GUJ3RDUt1N62MthZbGn8HnE1WLx6BkE24ZP7g6F8Q2K5wmWjgv8Yq6z",
  "key1": "4mepsmNFvyaLLqU6rvMmZKQu4FubvP1MreHbbEe9DebLpTec2xPjUnN6xBXqTN1VfUsrxWCY1w17DxjpSvnLEDF5",
  "key2": "4b8XboTFmHNTEcQC2qXRmp8wzkTt3d7XRmeo6uZ7SZnuBPmntiBU7a5gLbbs15iiwgXgyybQ3QCXYuB3cfQhxYRp",
  "key3": "5RLTY3UuYCmF9pnVccBAbUooQpMaqL98yQ2E5WtGTVuPdYc5BxqKkYGaoxudzyBvyMwtzqphfT3RtniVvE9FnUZG",
  "key4": "2B6ip7cPdMyEuak1hBKSQFHhXLartB9m3JTnevrM9RJaqvKDb5rmZJdG1foEaY6B385AiGSXoYBL14s76pU4wg8g",
  "key5": "34DXCdi7NNRa92CGeb2PqZHTtqihh2xpr2vVx7QDi2AW4QrEuXKGU9oAcxCX2hSNRBDftGScAu6Ex7HkCxv7VWJ4",
  "key6": "5ChQVgzevpqBw74nZNKbArbwCvAmcpfNdz3rYYMeiyDj5nH2qGevrhf5EMmkCYwRVTdkqA8JE7g3HPLMvjxgxrwD",
  "key7": "57PPdyormABEpGENxraepzmet9GnVSSeefRNMg9KbVpuM5xdeBdFMcducSE6rvxASoUcwrmnspKZQTwVAMyPaP7w",
  "key8": "NpVFgHTnrqoaQYTyxr3cCZkM1xAfzmPveBR6LyMB6cAS1GW7TTUUdtjK8jfMp3k5yh4Ed1JTXXVmqjEfynsLRtW",
  "key9": "4qckQBs8Wmv78kJ1sdm9cQCD7yN4U1Qdh2oL1RsQLuNt4oY6Ua18YVgKCWJXUmbgUyHytq56Yz2uEMZfoTQQ8gwo",
  "key10": "38KXAJD8fZ3Qnfg8GqviEFGRqNMc6yakjBqNSxbQEZ2M2xx75HV14XfdWRbKK4uv84MH63aB6RJAKJpF7gKDXWpb",
  "key11": "ZsdrAwBWq8pPSTF9oAhfWCvZvnaNoSyEsgBksHDF4Cwup2PwUEvAPf6Dsqf7t3yiVjRy6o3RTci78rawb29gJho",
  "key12": "2CEQPC5hqgBF65NobJSRcsUhxWshAXGXPhyiCMxMTkXEoj3HyzS44WvWixrqGNG3dDVSqxXs5ZKtSgKM3XQ5niUd",
  "key13": "4cfz4Psem2oTF65VPBhnpcKRvMa5RFvtaZRytRaJbUUE6nfjjwbMvRZydn8U4KU1wbYCzG4rmvmn4AiebrEao8TW",
  "key14": "29iPGA7sZFgD9bcogEkpCRNFAPG5kJPWR5gQAZWt6tMnyFvu1RvcxMJXDZ4K2GkVhoL3wKMFGxN1zwScEVqeH9f4",
  "key15": "59zUjJhMXRSZtVSWg811maRRHG7RANkZGHmQ5zV15X8LjKSZQ5PYRw5xCZPw3D1uYeMkV6Y5CTB17KayMvqumLG6",
  "key16": "4FVSjRttByEbL2SZnjxHH3EocNxojthPG4gFHibPLD17xWu7chwoaGrVQKr9DL6W94NM8gW7GXpnazdgWUKUpAyD",
  "key17": "2o8Bb7MrSrtna5TpXTZ2d3APz5CRVo4kSFC5NqgKrE18mCQzGgbn15gJUYQhKPVWg7tdncwzMubyuY8e1hois8nu",
  "key18": "286xp93ZyE5FyER8VTom3DZNiJZrDDgeykmmVrf7bWbWS9HWmW8m6AJ2Tz2xyUqnrjmQqbGwye9T3JRHxwuA4XLT",
  "key19": "3qdSnCwwxawA5ybqMMhCHskCdW6fUQKAtrD6eenHwKER2G7HJxgCRaFY7Fufxu74Qswdgy1ePKyvTg2ryEVdy57G",
  "key20": "3qrCEEbBPH4ojmjpTwL7T5EYY8LMtyscATZgNBSr83TdsqAqeMaZDsCMz2ZJjQBT3noiezRKdzSQDr9ebtZfDAMo",
  "key21": "4EYvYVhKdb9BRyRFb5KToN5bMZtekMnppUBDP7CgEP6wVizTBKFj963WoWwAuHwGJgxCfPffT4HujGPitcvQHBSC",
  "key22": "48uP2xEtJCLPigDREz2kPBS5XEjRR4ZY5YqdNAUvhrACbEzi8sn4ZA5YfUx37eWG7qnSoaFmbuc1zJw8PGxZSnWs",
  "key23": "5sEkWBad8iUB1zNevg5JTwxRShqYonFKxoMjExmArVK1dkvLxZk8NpcsSahu7VGVXjJT7QLqavRiZCZoRgp4RRN7",
  "key24": "4ibbCnzS9tnaYufEnbPA75JyA5xUGg2FWziBuf7cKs32xbPjXULMyW11NAJBDTqnZrMjfbGr6Cx97GVmNVtER3Ne",
  "key25": "3HveVKGMaNBqaFwZab6YZUTEPxH2M9gRUTUB4V9Ua4XhhpBcZ9qziP8gZ3rqBZdvioWMCHCwke6xL5MauZbKqrVh",
  "key26": "5tSwm4nJveyuogoru87335MnVvMBEGc811Nkt1K5a1gBznXMq9TBFjDuPWQ17PLUef6xGHWTeuBoiMvpULTvYTvN",
  "key27": "3sWTUCxRhh1bopt33xM34PykSW7XosAM89FimRFFCHXXRHSmVg2buDSy3TFBF4BZ2tjmhXwLQ5kQubvhE4ABWGfs",
  "key28": "4GkszqPWzEk5gXmXBZ4f8pbyGoiBMZwKPi3mPZUZTpUaoso38TVfVzAUuteMVkZ3N2m12B6RQTbrZ63PWB2A5B45",
  "key29": "47SHGADgRr8t49hi4CnJ9XbM56QbDaNVSKwG9xtMjtcEDDTPEF5xDPvpzbPBByLEhkBLp2mGcggyhShYQ6x21S5R",
  "key30": "5E8HkLMDtra3KMh4GD22MZDrPNvxQ83tCBRWEXmQrPcrrqQG3tRsywzwuvbeaZDikU7vmJny86g83yaYioxh3Jg8",
  "key31": "4EpkxJiVcPk46jYdxDJcc4tnNHErGDUch6EvT8FfUzuSuLPeaZ4SWUSxvQ8LdcrMCRWhdrPxTUUcWJrNeX4ZKFme",
  "key32": "2PEbMQNw9eNRzNofRjFtqasbnnkK6SHnjhw4xK6ngnSvjRn2UvVqVw9hBnudtMxiZ5ky6dHdHCdHTMJLg5CnjEeM",
  "key33": "Qn7cU2ZGfvi3u6mZvGZ3x21uLxUNUh26asVxEGnQKi6FwTuTJTNUp61DPcz1yHZ9QZSYaiLNERta8bRn1BZk1bC",
  "key34": "5gRbegQcdyTy3n7Di1igCNkaXizk9sZbuWM5vCPUeWnpU6Mjd9KFzBabVgvMy31fk6WJWwZ7Z9ne34ixrvJWAt18",
  "key35": "3EJYvYSr4XePaf8T1S3vPXfYHp5J3NyZdvZ9zqaSjfANLBMUpJYqdmWXMhJ4DZfTVnsTHaRVJw87Mi76YdMo1YNf",
  "key36": "29ihnL6Hdtcf2Kuy6y5a9Rg4Do7GcH41aoBuvsPSgoNtk7UEQDu2ThW6omJj2VjyfLGDmafxCExKhYohg1BjWaFh",
  "key37": "47gE5ZcbBL2JAsSAa7u9KhMCVdqEMGQ7HXw1R65VBSkBavgHeTZLP27hFN2EXkgruoXfDuPuq7pKv7UtYys6CvMo",
  "key38": "5YpcKxoXiHS7LaHyZJMKUKysmNxLvpBVgMAwVUD6HeTv4DHVp7L4hNSrgZLKvuEnRmFZBpsdChbA7MN6jd8UBjMH",
  "key39": "39czKhX4CRkpFpHs3K5vEHoDisXjny5rxCoQkTK4rbQx5Mszb1hjzRXBFBoUBK67J8teG1bn1r2Lvnkgtx6MpH9i",
  "key40": "2ef2hcZUUyCNG4ykGnWcQsU9pf9j5cZfwSqnE9jEv9MA38yyoPt5tUJ95GNeBYwmHzb6t2b8eQfm8tRSSErko3o4",
  "key41": "2aFj7iEWhgoawSBtvuMunD4bLrTegDmsugpnUp7DUH1UcGgD2LJUnHX39WbqbwZpfFUCbtEeLcsjPnoFvGQJYaT4"
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
