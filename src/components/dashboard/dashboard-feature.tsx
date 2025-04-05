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
    "5dLDwojf6DMKCLJQohhJp71wm7Cz3M5ZaSq1BaXEfTn4Lj3qqsQt3FWTQ31qxj4rxkfxVGvXwRdSpx6MbYs3Fybm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obQVZHC7AsCvYn5t7g415Uke5QaEirjd3B7uayXxpub3FdjBxHAduwSfTfP5Zqmt45pjKFoAXoAP9TXbCqAMK3d",
  "key1": "37AaezD19mvECTcBmCMqUjaYbtGFyTz7nFaZ3aGP3iq4ArzFAFeTrXg1FBDqH1eAjCDJ5UU4dUYoW6iEn94YsYQE",
  "key2": "AeDSiPTUYxbV66qebybJy7cAfZFSVveR1pwpbESDmKJc3YhVrcK37RfN3v2jsLEQVYz57H33juffTWh3npzaoZd",
  "key3": "23FEkJHYdrkiXz8GMBkZYSK4iWqFuohJEcf1NYGjwnAx6uQtaf4niUyQggA2vLb4dfqBD89Qm9KCejLWxWmm1oFK",
  "key4": "57JqJ1WwLVa6QaPaEhMfbmjQFV5thZL6S5jhvyMzEJZ5wMiTXA71txXxCDsMjuyiLhH2PBb5Y98KMrTqV2TnTR38",
  "key5": "32kb3USDnk7zfdsFbMDtywA7P35vVEcAuF5Vn7pLV4pYdP4qHb9GyvEuPUwTzGhwAAwQMyrWVkbdvSkBAuQJmxz6",
  "key6": "2vjw5wKZmJtom7JyuqJaKccfTNrGH1ioG3gxWmCD2FNdguniCFwHK4w64iQWmWGBxQdQmG5S2grnzLgSdMFGnmfG",
  "key7": "3b2M8khc7QkntmNQqzLLMGfxESQGXoxNDYCzgTuCSafuHWURsuDcHatUSzXm93NNFaR77pKF4XUjWZHRKBgr3fb7",
  "key8": "ktUkmePqAm9J5PN4ajrFb93a6rvFwAU5ENTd3ShcvE3BTFBf7sT57qnFfNmmRnZ47iPDcfhGzm1CrXL2ANJCsQF",
  "key9": "64q3oBCC5LjPzurQi1V26txF3eaXtenwz2HoJReXpADdAEP7QdP16BtJ3r29yVxwceR3EmdpSZrtoth8R1Nhm4rV",
  "key10": "3Ebx5wHkPz1LQJydfpHodYmfig4nqgkTKReoFxZp2HmifVP4hjuBf1hoib21NK5W2EFXkyx8dBDAgVVCJGhKSCt4",
  "key11": "2dSBhjdvbY4T9BrjUPYr8jN7tZ7muLf7zbrU646Ge4sqbYptceR1bZASBrAve3tgHvr4i7BdqbjbRjuzfjxRKw2X",
  "key12": "2ywvYms8rKmZCDE1R5U8LYSbXXoQ526Q463LnoqdmQG1mW82FfVP6F7XKieQStWUYt9M8bPFLhckU7EDaxKDCtX6",
  "key13": "2NZ5fTArBwiFed6FxjRpxSoosHMiy4io5rrpvaCCA6nUjhW5dQ3JzV54RH8PRxe81PX5yDxusxdZpA7CaRASSkrw",
  "key14": "4HdUZ7h3eAY4caNcbNYdMQKh9tpc4whaVAD7K8XasL518ZJRxevYurEDDY8agyEtxrQzGxdEuQPZMtoJS8bBquKM",
  "key15": "46qda5Fa41DCPDifboNcsvRMDtHNUhnHaFGAHjXzg4oAi9PmCtUoowYuEKTSPaAXyHT5TRDgvMoxRsy9utfdSiAR",
  "key16": "3LK76y9GCapzMEpTMJaF1SwphkKKxbJ7azdGnP3xcEMDPDqgWDSkbA8cs7ZC8skuTJB5P7bKSs6C6MsS8T9zcvR8",
  "key17": "3kRTmt4eiBZjNWu6wmnUYhsZuL6XrggVTuwAfg7NKMRZApLGwo2kjxJ7KfuYQGB28M129doE5wDJ1o5oCqwd5ejY",
  "key18": "Q4Q3wMa3SPACTyPr1mWAg6WMCsEXhAzazv2kFyMar9rKqzZGah5jahfYWYYXoN4unURrEGogapJCHsUu3kvivS8",
  "key19": "674Gn9YhKG7bvbNefbf8fHpryaKgejYqRPehRvERuk7Smd42eNvmPp5pS3FSNZjUJhBSxfWTa7BReLLr53BnGnEA",
  "key20": "4VVnTtGDFCF2KqTnRxv99Q1SAVRT8ZSpcDsHFbHCZoth3N9urhAxDfZGGf3cQoRJW2ry323yYv9TP9r71cZ5heNk",
  "key21": "5tgX1wSewtsAxbg58fNnzCDXFXdnshwbco6Ng2jx6MLyCEBFsWb8xQfX9acwkG5iEYPhRe8zjrfdpBgpPg83cbXc",
  "key22": "5tHxcCScArtfmFoj7GSDfE416gabWkBqrMFTLR5NQEAYP8p9hemgtw7gk6g6GVVCMgjft9qJroyx82UoucpH1uev",
  "key23": "2HvJja2H6ohEtB1kdPBQuKYJQrHLsBKwDhXs4PP3qX9563C8kwDe96wDhUQNmk8krJMftvthcp4NwtDrWkJQwDRG",
  "key24": "E52Lyqes8Pzd5MFdiXgRpJqg3HeWkjNjscTb3eAtBiWRH1YYz1xykM2eRcmJ7GdyD9em6ct3bakdAXQgoKvJbsT",
  "key25": "5JwC2zbrHnp2zJGjFu6wn7RAqT8nnHNP33aKFEaAvymAZCohBtx8gULTUaR71TBTwYbszXL3K2CojrT6H3Sj3f4J"
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
