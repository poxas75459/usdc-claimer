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
    "5JNTSNCLcui2bvmaGNfZMkNVH57d7eRVMaY4ay8LuLVUaJiCcoKH2W7vQnA7pjtDv52LhmAh57PSEKrUDgAeGWSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bb5FDCWpGk38nhiXkj5xftcymfctZLbVHzrW9VCTa7nyC1hBwMpBW1DcEVjEoAWZoXpVrhxWt7LaMsgNxbpjE7h",
  "key1": "ZyoJ27VprQhyEWQHrWt2DEpTdQ2RDGShf6EWfiJUwDkNAbrbcMZRcQLosVEft1YhMAfWBbAL1xwjhe8bUdRFBdM",
  "key2": "3X5stmBqg4LJQxApsrQuajHTWcLz9esQiD21j4qnQqyLpVGBfhhJDTeXxT3dioHVPWQM3Y3ETjvkvtGp2SZN6VKG",
  "key3": "4AahirMMStLqor8hrtXCrHWJ7HNtZ6tJESesux2jhpdeEd8GifFPHR7Tg54er9potahEYa2YDfb3x1QHYijwdCBU",
  "key4": "5Qvhs6zPCtn92zuVhy86nEqQnzV82EUc1EoMHMpQsiEtCYXFeqT4skeAJW3MtjcLQoR6HpuiPM2U7GeaKcaqzMpD",
  "key5": "QrzEDzNuaEJoqAwpUdPjiwszTfmJhwBxD2Vx7Qw712HVvHR2oKxsxzBKRuvzpqwk5hhwV3tijh2zcGbtbRHP8FJ",
  "key6": "4gbhPnquhjGM5MoVCNHeCpMUpxEJvv6g3us8N2pgHK4wNAnzJWSDkGwrxVyGsZe34Er42N756ouG7vg1UHRDWoLT",
  "key7": "4o9etm25xe3aNumeUXW9uuUQJkv7zHDsiV1ySw92RpyWV2u1kZj7h1hHs3TcS2RRrukZVt54bf8NTNhibraooCJV",
  "key8": "5LLbDaudyEv9AvR1DWBPQYDfxM4xNWVaUAHDhAHDuU15vVrpB9W7zQLehda11Um2BpyoodqSKSYsuYCouQHEoY3k",
  "key9": "EEk1n29H2v2A4zHZnA2LoagJ3P49jaa2xDahNM1eL5YGMVb5audAEZFDs1vrwsErPzfs37S6Y72FWttgpXCT3Ju",
  "key10": "5yYXdBSpXYHu8qAJNu7EBEPHHj81WxQgNbTR6KVtvGgeL5i8LRLTehFi8J3ebQ8xT2R5phbZj6kZnvGo2PJPtkBA",
  "key11": "4i8pw6uiKjNcpaxF2QU9tUtb193NBHVdsUoU8NkpK3eGbrpKrZ8VggSxBtt76Co8Wtm9Y4eXGKfdmvHszqhnqMk2",
  "key12": "3TwdeHYYSvVB2sk9LvtZ4fzvF1HFUACsZuKDB1bvUQfyandumvWFbKjjmzpjTuF8NEtjFuzkwLCH5iRomPdJRZva",
  "key13": "46ZpnSsyXv5XBtYcVKjbzMFX7fJpnPAbVArq7VfHappyw4w6ZQ1fLGL8ShjRn3zvEUFD9qJZ1VUhgce4htLzekB3",
  "key14": "8eUtxT6oDkEedY5JWbMjXYABXg7rzQ46Ld4XBVToJKJNq5GduU5irNBWPp665KTjy5fP75okEJWF17TbdRwx6tg",
  "key15": "4149wquTS2q65xpzVGxyNofk4xB2iF2U1GXkfwCNtLhCMPuq5ta5XS5WDiiWwwCR4vFjrWrzB3RNMHG6PYmtzyNW",
  "key16": "wTSR45GPRF4oVDyHrFSVZ4ucajrF9g9EwnWeSMeec1mpGvZUexkDDuHrTMBKWrURAEgeJq4xbnuTuwWSUY7afNt",
  "key17": "2fMojNXzQKiKo5ov4HSQsxAkBS39eRppyptdgg1M3oTc1tJB8a3VdNYyYNTHPTt232LYWZkD7iei9ycCWR6HbGgQ",
  "key18": "5rhteiz81qKHAVksWCYm6wYfA3hDu7ohBKzvCnp16mQfYUJv11MSuXvLKEk7S21tfEpAhZQnpVDJ3exK9ym9fj9Y",
  "key19": "66zcNjZpWWkKb52HkU4yJQ7CmYatY7e3QnmjzLhmf2yACDnEXFZQ7z3rLCmBPTrbSXArJ93LnQb3AJHQd7ZZsqMz",
  "key20": "2Ap5TAGHg7B1bzvsBx4tbRfrqpP7enkpxcjc9HvMWN5JUSpW82ZWmKyk3s5wdpNYTd3B6S6hff6eEmkKXtPWRLwp",
  "key21": "3XN8CsjBfn5V9RVwkcdeJqpSHvcpeuwxvJBcbXRcZJrU7rVY56PGVYaMJi5jLRLAGcFDtqNE9ZzMXnJ4GJDG7Vrm",
  "key22": "H67VXxjQuUvtBKHixA9YqHAA3qNjEeQh1btZG6qDPghkzMcx3jmq4h9KGr3EjKr172ia8Vxvx5tEEqfjDEekyGq",
  "key23": "4xVUbYJH6XGsHCDHkmqh9uc3WApQRoS9J4YNCH1iHzUR6mShbUErwYF5bN1Y7FJnxdtduGrpqR3ZijvnPVFnKYQL",
  "key24": "4fAFyb4RFKzTvazekFGPRtw537obtbUoKUDDjZLNZczNcUsFewyt3YfCKcqmYc6SQCdx6yDG9i8pm8nvQoR1oF46",
  "key25": "AByUYMJjQyoqwLN6KTtYv6KULBkfDAfcHLPaEGs8gMWWzSsBVc7GNGDrtpvv8cC5SfWWyNKGNzLGjGaqyb6KUsc",
  "key26": "Gq5SKNs2FEH1uSFEtw4zZ5AAYiCLphX7yd9E5NAg5h54SC9zr7QW4Q6vLCNGF5iiyTQXy12tdxeExMeEKvumUrA"
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
