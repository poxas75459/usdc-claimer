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
    "5uYRtjqNUgVAiSiyXuPMPGYMmQBgUCtao7yLrFELkNwwEr7qnG25nthyhg9nprx4HZY3HXTuQN6MWmGddc8ATuJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LvjFttZ9rbCqXo8DPVZoLaxSv4PP6u8EzCbWjuyqQSpGVLViimD18pqNTUVV5npofZrhRGkhgNyR9bNgnEWx8E",
  "key1": "2MyUDX4oAP12pe4thowCviFHjCYQbmxpNNPLjzoCxzRteiRFoa3y5QXsKD8PvvDfjvEcL2P4B4utzihLGnqDHcHb",
  "key2": "45uN5f1foRTzGiNdWwxM5n2UzbEpGBNkXRMnTv5Mv6gWGJhNGSvSfZvJXVJWiiLK7boVjhqipfo19rKTmXaSNFHD",
  "key3": "5asf9ASPtUBhqhqRyedJP5khnfrjzfDqbu7SdEZ4WsMKJopgsQmQ44ktBWpTSrxp32EFW34hC8AKj9fES349tWHJ",
  "key4": "2ZMsToMRtjXsb4wC2YsahMxMSTdZPxzMx3LuegZCUm4W7EYWaaqZ9TRt45T9RZjvn35eSu9CJbdtZ58H18x6di7N",
  "key5": "24AoKbjUPLGgDmE8j8SpGQLMTQ4RR2ihK2v86grf5qwXDdGKtxyNLbdDRdZRuudmjdUp3NeFAf1Uk4h5kTWd7X9v",
  "key6": "5pUW9rUbufuGBwK2dRtKQJXwT5Y773KBP15HmeLrnXFFhTf4WmjitrVz8uCReyJbfPtj3oLW26gcYa8oU5aoHsk",
  "key7": "3Vk4JwTWQeKcV1vuYrsFV4oZtwc3pS9hJcniLkAxvHXLT9b62Qzw1wzRzjWbsyKZC2KF29SgGQX3wCFuDCYbSDuf",
  "key8": "2czwsXCzCq97W8uQy53Xp9MUedVpZZkDZ63LzNGicabJKAYdJhfEM2ofECLPiuadJEhwZFUxM2kZUGJLk5oH4aLR",
  "key9": "5zTtVN2baXVqEYb83UouWTpRHcbDHc2bnwT93DYCzWrW5E2y5DdZcKzhLYhBkw9mks1cuBPJpVVNUePcP1V5xwUy",
  "key10": "5K6zhY1KtkRUy82QL9zbtdAFTiufmzBJ2vkdBWaNqPJJHLiSDydHex6LVdtj6pyjd6MvU4iveFnuTmfFLNvH4WUk",
  "key11": "2HTkYG6RreXELfNViJ8btMcNSXhNhWhMpWAaohh16tYxBAV6NYeNj2Up916pXoxLh3AeFGgrqbQRwXX8Tf5bAgby",
  "key12": "5A6z3AiDhkaGKqzd3Vy9yK6tRwUpa4Hbgcb2jnx6Df3uMqUqDGhW9G4tkJ2RuEMxXE6xWft6LKryqqny1gS6jzfJ",
  "key13": "55qHK2Mbv2LJjFg4fNP7R1GqgjTiuVPr4F2ekqqW5K25hQjNLjLtMC6P95SGnThV45BTh7R54vevfDVnN8fsAp9D",
  "key14": "3eN9hpizYHWueb3KTukNDdeTnWNvdvgrk3gMubUGdgnzPwQp4eKYTTtfSqE1CBFVFngcuB79KPasD3sbP3SfgaDg",
  "key15": "SJATZ6SkexxyiVr88hGGJ5fVvgxDDee3N3FkYnwenSX13LK98ncny8ea9ZtZQA6mef5Xc2dKq4EWGv5njqrXBVP",
  "key16": "YdrGKCZYxPzXEK5gxrd3Pvbu2sMynFfMXpmBRT9m7A4aRsUUxQ7LAxvFmyTKJ9mA4H11DGvP89ZsoE6DWQ6cNko",
  "key17": "4gXfSQ994vw32ng7p2arai37PLZz2mjCFL29y4VKowHbLo3YM8Wn5yD2fb3HE7BWQJ4kGJ4iUF9x5Ukui2LX6GTA",
  "key18": "Ktsi3XG5fqpEMorik97a3Zm2XP87shWaqABKcSp312zCLqBtQmQiqZPad2LQkEw2vHwP1foxuQNrTaBpkf9eHA4",
  "key19": "5p6EFfJe8nZDRD4J44ddbsEkjv6HPirq6ScheAF65maQKSi1dMZud5Xxux9tbREreEthmv2KQd3n82ekKjCUxNoY",
  "key20": "5Crx5fyEhkqBTieom6Xok2mDMPs3ZuWHCa5nzuDP1s5TLyY4zdZf56kEUFKd5JZSECXzwWNKMxJiZi3wKrfaHZUn",
  "key21": "3yGB48inVpcsmFSDLm1c5ibSdqVNz8C3sUHW287ZLYhxwzsW9bqxs7VXHm5YXdPTkH6xJdwhBHozsfkyP1UMcPfY",
  "key22": "VqBLnpgPdGx8FUF7FVA8bn5SV47MhRhZwtbbEd7VGarRiHMgC5NV32bz7v6k8hXpPAGMjojq3TeE2r6EY4kxj3f",
  "key23": "3iMzFQPud32yg7NYreC6F5zArcULZBWuqVv1LcjqrC16NGZ1DwRVnv4sCtwojWTd3b7puynJWVxQz3GjEbhWdFtd",
  "key24": "3xzz2NmBzQGdtMxUbi8QKsatRpKC1oNVTnQvSAaUnjRBWygthZ8EDjRzsiVddcr2MmireVeMQRYx5R1PxRfwv6VK",
  "key25": "2vBjEu7LE5eGpUA7YEEGHYPCWYxzMCU1EZSbTcTqP7cGkv5WyKvsfspj335qduUSKh6RVhqqXBJ1GPMpaYHrFPHN",
  "key26": "5RDXFZfDcMgxs5vvt9aeYMPrZLchXHBbwPYbgEsQiPkeoW4WDANbMnUJtbqyswcJihwKMRjSNynLCeF3TLL67ptA",
  "key27": "3g33a4ataY44FsEZusFSacfzhmBYmTTr9sybnUvQEcGDJyuatmiQ2QLUU4Xf8ADuAWhyQFLHkdrW2GRsMba472Lv",
  "key28": "2j4VTKJJZcErJpzmULrdeakAhyf34vwc1b1gRUNEkVr8zkfvjuh97h2GA561SrLnFKkjjtpDKn4MaYWT6mHate6X",
  "key29": "26jqzgUM3PRJGdQS1KiJnew2xhnrRs857VS68NFTUFR8U62iftVCFxkKZsrhbMEHftfasCLN8aoWb3HU1Gi45Ln2",
  "key30": "3UuESrgjBi25hM4uGwtRHrztzict7yxCn75XwqZYJrkPVLhnyt2FYyvryQAMp9LkwcWwbmzBMqpjiUHRPGuCbzjk",
  "key31": "5TDpyfe4WdJ9rSXhZa7FWRc3PLZtBjF9aDvdNxwo4R3jYqg1Vmc72yHU9cdoT9c89NMzAzkJmHamtes8io8Pc444"
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
