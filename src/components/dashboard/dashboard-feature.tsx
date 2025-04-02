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
    "2otSeEPp1UEtagxB15nNCcBfLpK51Pc54Zeh367adyzTT6mNfTAXEs8mkiNLi1ddJgjZotA3jvrbgckugcQDDrXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9F4ZTMwgTrHuEBAm6Qkzcrece2aYdMK21DdUHb5krUbhSMwo3dBrdzJznVnUMThKcnXx83zXWKMUgZKZDbDZW1",
  "key1": "5aFKd5vCJUgAGFQP8eKVJ3pgga94HzuR8RVvULSDKSFbK4s1ceAWc6MyC3F9jnDZTfawYXhVTKpZZ5gMmMD2iRtq",
  "key2": "3Cs5TqZsC5dHFqPjnNHs5gtLKtTTsL3Eez3LczxXc3q5Wfm42DpT1pQqB7MfPomA8nrBpS1svfKGruTdyAnkm87e",
  "key3": "EVkH4XsEhnht5RqRLwJ9zAvnPxSN6oY2ugAGXDXAAHMnPdwvTRSxHR7zgLhVdCYWCnduCn1DRZRm9fcUzRYVs5o",
  "key4": "nm9PBAt1h4MNfH1KsrkJfoLDqUDPK1xWxgfV7DQjhVzMv7xoj6djoTwoD9LAx78BGzmp3bZbhMUQujqbXL7p3cP",
  "key5": "aENBM7Txcb9n1BhUArHxz8qTdwbjeAsoPXR2v1a9c8omEMNvC8ZsR36TscUHTWWi7inksWYcjBbDQtWoEzEFayN",
  "key6": "QTJAp2iGY9wabH1X8RXUuugFyM9XbXGUwknXFbeH1LRDgpHKKkdTD8JH3T1y2Az9y6niLiNx5A6ZzwzbdN6ZDYy",
  "key7": "4h2w5CmQRnvr5vYrKznrF5biRwdcni8gqwPndkoc3pVMe1MFVErGzGJXGzPVSmdAQoECYC8ZkwYEocr8WTGTzKGj",
  "key8": "jAZLadMvqpmGAEG12pF5kECQqmCLU2avssF33djr4tRBi3BiVXMjetGvvz6uY3BwJjZaJD2VwZr5YgbKGKWVL3c",
  "key9": "5QvU4ympSqovesfRvKxSHbrnkzGZ9UAMGCLKiJm332pti5j2sey6oKvbvPKEtteSWnZyycrrcdQuK15j5FtWfhsB",
  "key10": "4ay8TGysWivehaYfdnNMTEiwfUQ96LiQZUXhPShDJtrNgtUA8i7qLoJ6zdD74m4em99gKjdHamP8QmfHZTusAHpT",
  "key11": "5r4hXYzYRbdsWiK7LPWfXvUG5Qhn6L3tyvo2izk6izeoCvyF69pPGcwQHrYXrYigBsgEsPQoiPWCEgXxZcww5qwg",
  "key12": "2Nfr5xhoMuHCoS2GVjLGTdJQTzTSR4A2kA36HxPGYvV1sH2mnsTYqc6GGnYhj9V3arzy33aZoEtYPppXk9mvXb4m",
  "key13": "oyVUvynjWMVWKHnL9aj2G2zeZ1EZBnDBHA57hJ8RnDtTVgQDUWfVS55mmHWjo2Y42YhHvC45TJY3aMJXTjBpd23",
  "key14": "35aQRpc4qCjrHAWqWD444dnzSGicHxZkYGDmAteHBMuPmpC3mxKtW3gqd7PsivamvUMRMTPr4NwdeyaYxMZftmH5",
  "key15": "3QyU9t7KqALk99RSFkmULXPP787E2kbgiiCVJEG98FCEAzqibJ3pjbFYu1hwJkTixU8XWHHGWtet2anAfy1eFbBL",
  "key16": "2S9w8WMGPkXRAKXEJjhAMMxjX7SRh8VJ4KLP3hQRAYtNZcvaQaVLesKPWzsg3UiiSZNCP73hZW8P1vF77WFxfNc2",
  "key17": "58Q5dcv6KuDv3PAzgeDLjzdYyYRwYFy6uKQ1Xqq2jXhDv5DKURo4PypRwhF4sopcHgjfPU1FnL3QjBVBKwtnnG8K",
  "key18": "5G2GwwLohvapZFpUb8mM3wf64dN3L4PcgusMYi3n6ZWuDqn46f2oNdRFrzqDzdNf4vJzdVF2bjiUe9F5pMpMnKud",
  "key19": "632i3oEEJX1E2rneYeAvZDUt885GRnn8PkCwdmYfhqa6KJMzE45o6XeeXTnoszKNk3HoeZhmK3qfnmJ7tbGv9Cix",
  "key20": "3i1XEzKjnY1QfjUG1ZDMFrBU4Fmm2VrupveNHTE2Kbr35TuWVSGVLccsZ4DdZFm8UEvtdkxmzyzgnmbJnuM3TMjq",
  "key21": "4ry3byt2bdUvsXsDx3SjWVkXcg8w4zsYpzCM59zYL7zyjt7nZKDdCv7f2CW3vu5dZW62qdXP5H7i1FB5idDNnPtp",
  "key22": "3g7Yrq6MCqgwcNw2zEsbQAvknyrRtZKoGFSEyWk95HRTu4qFgzJ2dBC7Yg5GqD8inArvDvh3Fz5CqgjrAquKZBY3",
  "key23": "2mGijY67oUmAsRzhzirxDrCTJ4LFyvvW3GfJRH3MUDyvLhENr2kXUrVWqXNJpDikXaznGNDTjuL3k4TLfdkYfFsj",
  "key24": "4YReQJyJ1C42WWLVwc3t5r4enxHihNyHuBddyHzPLgFKwnxEhw2fCYnQARJYdYfFkb2JfLa8qnLBPx7RxfvjkuZ",
  "key25": "5qoYzKnSitKXaEZ3WTpTDVgiyjTx2CrLeWckxDrni4STjVkk9eocKv7Bk8VnAs2fij9a9a81ww3QTG7Yh5kwN2gQ",
  "key26": "3gpckDbiL8Nvoc2rWpSigk9HQeMFZ5tThSDxLnCaYLSQ1qEnskGAe6hPX7TLrUysZtN1CZFZWB76H46SWLDKaYMy",
  "key27": "Wq3GMAgs658gftunBvvN9bKoxzoMZKUzfceDxvF3TPx215wH6FjSuPvqvNzuxYKSFXvT7rKodqxMsvRTPiJCvoZ",
  "key28": "2JbXAQvorUsKtJtkvLgzpgv555tqrHceWyQuuE3ZxDruTQr3hiqwmVMbDnnrahu9aHCSkN6X7r72dJvDRFny4uG3",
  "key29": "mi6qhEJw5myCreb8eXWVN1v1sj73FRegGi8FMfghp184VZy1AgxwZHaRr4DPEH1gSoz8W1WJE4nBrNLSkEnLs8j",
  "key30": "4wUZ9j1RdCrkWFeMAoMd2SNLjwQdcLgruTZUbMeBAgqMLM7w1SQwuJSKP5vREEt7rmAj2q9rUSLrrEdB9ieJzAoH"
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
