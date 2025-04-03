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
    "235pDY4EL7o2n4XLfSTR9sKjAgSvJD8V4Peb1E9BWTofoNVe5WaiYLPns2tv5K3o2h9qVgU5Q1tYLjy35knWmKnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BoEZrSDguGjCyDiz1MqPmQ2NiAmqWga3XJTdDy7KLneenry3UJ2ho2RbxcG2oFTTwYzsFP1csnFd57M1fNh2pV",
  "key1": "5FkVeezh95vEyKfDiEbzwZbs2uzbLCY1xZigavfttXpBaEgswRJVog3aFZcNrGQgZKzPgyvF4ffwGzxDNYDemhyn",
  "key2": "TXUQCxeYmeEG1vGheXc9U3qUph4xug1qJojeSZvBtu1QnEfCm4YBJTjEWAJNc5cRFR8C4dRjU34ss2Mp1gGb34o",
  "key3": "3y7F73MJFv4cQE1KCHBND6g8oXXhSQLawswnAwxX2CYrq3JiNsrxotZpfjoexLBcgxe7zvroMbdzodw9vTVXutHx",
  "key4": "2iGJDcGBUCLHtqZr5ULVgwuK6jByFyFLyzT5FYKcvzJDSXYyQANzrdaQRCbipWDgozFxgFxFEGGrYoayqzayHkZV",
  "key5": "4HiKHyKrdmk1g8caV9q6878bhMhEEhiVJF67cCCMKHLbz3LL6TrhbbrJihgPnbUP87mdmSzPFtJvtbjbYfBPBzhr",
  "key6": "AVj2RgojUeCpWFNdFxFLoumYX2H2DzNzgZFxg9cbmFdApRQizAG14rc6DiEjKFx31KEwd3D2vASA2NN1k891iSD",
  "key7": "3CwwmfWPzSzdRJrN8sME4XmFviiLBbcDwtxX2U3Ev6TuoW4mzfKLk1K94bRd8g7md5DPQBWMZBqGvkkvc8n6jxRH",
  "key8": "2fLsABYo1qh1EoKRZCyfxPXzNxqrgPrxGYuGG3fU3kDjeNCrcuDjW2K9t1bttqFiTVjpgP5MSpkx83LmL711a3o9",
  "key9": "6dGEPuRXmJMWYXycNQghSF8HL53PSSN9jNe4mXRV28oV6dajrQt4eCe6LwRh9t2LMDWm4qHGZ6J3hdtED5GdtKi",
  "key10": "2UDXmL9RyVpYZxFb9mQzjGSfdX4BDCEvh85LgcENoakCRVeSvUs4AjhKsSTvVqun2gzM4fimFNGhRUVYM8UPfZuB",
  "key11": "5CbFRmovVrKT6UpgXdhuXh5gyNg8KdwaZ7preJRUtTWn2a8oMMFPSMsvjKFBxz478b6JH5bgz78YhovKy4YXpTxx",
  "key12": "2MHmxLGLX9Zfjksny42GiDvWVMqHhoaQ3EgS4NHRceoJLDmDufko5PXDsraxer1ucKwykn5A3iEK3BfFSAVs7f4A",
  "key13": "4aBm44u9uVnvDkETTriX9sZkintaxuPYvZo44A1tq4SCu45NruZ6SQ5hf5z9wvoCNC5M8my3QnDKRoHZU4jW2gMK",
  "key14": "5ij7TiVaErycaHwoike8LoT63kALLiHK4LcffjheedjFxmKvMcKLmVxBr1ChTnpWi8gN5PMy6rAHSeWiRPNBcDKd",
  "key15": "4UUf1sZgvXQz3XtHFbCwjF1RHBbKiexz93GRj9vLDc6RBtknWvmaQ24AiqNaQpongnWDRGawuLcBwX3Ae5rreaTq",
  "key16": "27EWErW3Gc5zkEDmmQLFnb8d2NmJaMdojm8r6GX1kxrLYbPApiUsvD2RT36LryxrDPwTgCs87FmyKetGk98NZwBH",
  "key17": "3FRhYc9NRygSNibQ5p1PsR7GAqXoZzLSnzaDEzgSKhaYua4ChLbWEtdJktiwsd1Yfvho724ESTiXu5n8C6wci9Su",
  "key18": "3MU5mujJQzuzDEvSTCoxQp7Rksxq7oCQMJXKVc8YFaE9M6ZJojyfL8pfGmo4zJtEGcbySK9eSVJs7zdSoJMPeT5k",
  "key19": "3rCBHbNE8uidzx5gJhbkvKL1zr8PQXoQxa9hNW3Hqb4brAPfsQZEnaMWXhY4BwwWC3ondcDxNpkfCZFmSLj8cBAb",
  "key20": "2auiqX9pcm7RnkQNbm6oWT3sUaGLZw9yBEfKqEFdUyHcJLhMjAfbcM3nqgAcQcT4TJTxmwSJwTRbhEDWb9RHMnp9",
  "key21": "3QJp9gXEp68xe3QPTpXofHDkfkhReB9WSLDiaS9ur29YzSJV8MeKPfksg98Dzngs7KguTeJodFfiouS61wQ8pW7h",
  "key22": "JzvcEVhJE5BnsnBu98gm4JbonUxP5WPPZPJa7ZNDoWHFQKBiTp2vHgspe7PVLRsmWhgiw8smFWpV7Vv1ygBf2P4",
  "key23": "2g97X2wNCFqmwdkxJ4jPHH3wUaiXJAVMnpdPUCkobL6ytj1veF9SAYrnr4DrpMN7Akuv2zRa9uHzi8wHtSQ1tUsj",
  "key24": "5M7v9nP9WZtmYZB9FZpGoNFJjfgKfEcTLH3DHLsbtEpQjaSEvddUi6J1tQJ7RRDrHZknW4ia2Tj86vnM44Z3VdGF",
  "key25": "3mVzQnjjYy29wyBmUBnfApHPBhNaC2mXfB5WQ1de9mFxfeP7s25iB5vxAHWkSsqzfqi14QCNHycrwPhK8YFGu1PB",
  "key26": "2P1aS5sETHnb2zFoUeBdrbbpfv7xqpph3W8XDXx2ycsnjGkYz4N8VdLy6d5jPNmTHc2LwRwCwZpBAgbDq2pjFBdy",
  "key27": "QADsr8uM8HARgfDwoyzGBY8tn8QFjmmGFZcuvWqcRUfNFYycf8VEWBNecE4KgjGPGmjuiaJAhpYD6oqvTpTuZaR",
  "key28": "4qwSXKLGhubYVBKgdc3a52ysw9EwZipDrFe6QEcpVRp26RLLaahzVBBq4NyYdevRpPFvisqVraojo3M2Q3YZ5s3S",
  "key29": "M5MfasyR8K9XkX7cNxMUtaNM4EUidJKcFkcw3bw1HVRiubUja5PCmv98W7LdibyhDRmJcdnRwE7ww9DNRvTmo2a",
  "key30": "38SNaYo6d2XLsSY4VfZvL9rgkgfUWpeoM84Ni8buFAXWVViLJAu2HZQNtrkFWZcR7Vq8X6Nan7ZeW8UeVd2coh2Y",
  "key31": "5Mc9dX4XNQLL8UC59sTNW7oneMAci9p5RGksWMyvmXHpqMDN7sC8GRnLpqyiayy2jySHq1BSpmjLqt4Hh9K9kEgU"
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
