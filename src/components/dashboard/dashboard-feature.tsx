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
    "4TpUyWL9vdXU55HiGNCFy2p41tnhgXFkXXw8Ttb8i8Fcu6eNotCBHUqXLV8CMKB7XudZt3JdVYJCdGPqcjeMcMZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ke9YLPetwM7yvcJtUz5WaamT4gMU9MPTpnxYMYt9NuDVu7aVWxjLpCYs3d9zRkie5wYaMKhhoHuUm6JiNxzrQ1",
  "key1": "WYx621WDujFKMTNKB4hK8HGRvC8PjApNgzVdKrPdAmat5Jp1qy8H4EBuVPNJA79CkF3FwnTsp2SvFhZJBZwmL8Y",
  "key2": "2afdcEjvvjGhUaUixBtsqNMkusRrxTwbhYKPGys8fCdYwyNQ1rDtXB2PzWwVPZboawLqLFizyiCnvLubRZPje1BS",
  "key3": "8hGXM2UPuJX7T2iXCN1AAvM2SuFJQccuD78USwewzdZEBD5FVMvdMZxLoW1x4XLcugHUhvXqJBiCMkZeYFfvmxi",
  "key4": "5Qw8et6DLYHxmFLb9ZpSC5Bvus6oXetChjVz6AMG7736vfsbWbSUmrj9vvWPMn698GuPwBskaPSfSgPaphxEUABg",
  "key5": "4ySzS5za2HtP6yPPdMpVWCCKmcbgtsjYdWKwT89RnKLyR1mMSgQzdKgztM39WuA3nPqVhM35aaWUPZTQH3u5dxVp",
  "key6": "66s2Aw8n3FcYFG1pGCZJhTcvvPc9RiweMUZVkHK61k6EpBxBprPAXFzKbtaEZRgpAM558nAL9ebBQKevtxKQH2Xz",
  "key7": "va3n2AbEvCNBUPzVFhKCLsv748gX1eMUDfKE9QeRE2D3VykN2kzjND4a6bPvTvaCWR4nGqwwBNLvMxb4A8x6NYz",
  "key8": "26EGt1b7WLGsaQoVVVZjrmVnah3bBC9bJUqP6eR5STXZnNRPnxVQw6DhPqjGM8TvygwSJZyggzi7WPB1GPbSpP9R",
  "key9": "5Z3yrf8JGcouy9KwcxxeRxbnHBH6HzAox6tZwyQ7HCG4PePKFBHvgykCBknmSyhWEkXukmHgDz93EHUwvaL6TraK",
  "key10": "3qFJrbAWWKqUyATH742ghEwYcgTRGpaTHpVPXpTP5oD14EKeWidYm8TKA5Vc5GVn57b9EYn2qC4cAS2jXSxmKUtV",
  "key11": "32Z7BwjJXcsxMPAWynh3YpSHrH3XevyeqNPmYiUsEGeedMG794zk45TnhmzZt7SDRTJK4gbEbJtTLXb6RSBTN2FL",
  "key12": "3bhFXurjRV8fZseMNFcnDTHmDAZe5Un7vLWpQJdQRf4RQczhVFYXAEVj1xLPfHATM2b66EM8RCL9m8ojvDk2waGH",
  "key13": "CvNrQRcEgwNT9cVpTKbqTNybFor4M55n3xhAqN5nWrzwEX1WZ5h1nEBjJsQ2R2F4GfNnDaqP8Yh2FMHVNEfomKk",
  "key14": "4qC7yNXDjJJEworQ8P5JoXjgxzQcm9nFz9ba67gBHtAmrPvN5SW24drckT4HA4BUK3hNw1xSMK91psoiLnQQjWCg",
  "key15": "4a9N8HimUKWhXHMpsE7TuUmK4HFtK3ABWZzSjdqyUAanFUwKMoarvssRwYQF3AQ16Zf58ECPRcNkCUDSVoossaPU",
  "key16": "3KuKprGdsiVwqxnioyGUnPVo4CHcSJoZFNATowHxT9w9fgQbzypkhgCZTHF3EoWpwHbLYsy3buAZm1kWq6XJJsqj",
  "key17": "3HgEebGyVHWBnkXRzeWMoUGeND9QtXDCPwz9tUmDupaT4ukwhBCV45ZEuXwMEG57AXi7wyxj3Tcr2TjZaqh6eU8u",
  "key18": "2k8caEBnmqesFocRoZrWhDHbGdbofh9oQWux8wCgmiqy9C9DXhzoHuhGtB3ZoGfLUb5fnmF4nEhSQMWTHnUMsR1w",
  "key19": "3B4z3XynS7By7Rj6nReb7UydHNVMP9qG59Tb3NahVDGV44ysP5QD4UXZzZ1mX2qBZoi5rqwm67yqXDaicrFFipS7",
  "key20": "3cc3Vhz5fb8mQ5ZPMPQ4u4TRMt5qPnoucQFTnXeq7WptydPutVsQzJUB79PwXJxW3LfBnrQvndTEWMAasyEGge1m",
  "key21": "YVN2EDkVrX6hhTe3LTNPFTreJMEsojeqZ9UQezHWQrfbSFqpqG5EMTeAknFggNQurDSHJYokhWK1CygXNHb69Tm",
  "key22": "3ht95SchvWtC4qeJ1oXLkHe7LRKbrj8nFLwvbCgpVarLuGbmBTRPazmw7CrvgxuxCnoWXxPSXj5AZeV5YWg1t2YZ",
  "key23": "3TqgAu6XHy1Vzp282AHnppbvtBZ6ADtT87ymEzPs5NXkgdhPcbePvihkbZJNZUqFySNpRwqzpq5WSqPVwwhDcNkG",
  "key24": "2WoR7FEUgNyU2jMiYUQCo6fat8EGHDr1uZihZQ7xB29NV7uBdPg7Gpz3c2AJYxjqfpgCj4Kb6gXcsvTEQEpbzhjk",
  "key25": "XXPLyLCT44ciu8jE2gL27xGK5nBrRxcTqhxga6x5Htr7m4rFX9nvPBFvt3vvc1HeQpUrDVYmFZcC7jPH6QPrtVR",
  "key26": "5QYoSFkosDW9X38pYsjUtfjoG3hWkYNNr8UKwCpELC1DfoZivGbzneAVXCMVrhvsr9DPnsPpHucBdnrKi78tGrSV",
  "key27": "64JZRyVgVSkHZ87uRK4cZUNLJ3C63rsR7bvzEhZzvUKeCd8Hpdyc4mfzhnY67Cv75NvAfvXAPc8wZJb1vBftHGpx",
  "key28": "CFGYrMYhgzV58mVRyo3i2YNPeBY7587ieWfD81RZjPWQcwCnS59axLzWNM4895CcZVs4widU6434rYjsY6byvt1",
  "key29": "VyGKHMJ8MfaANeRnMqhiseWNPHw7qVMPiBdCY1uiFtKHFXJsHyUvnX87DxbRbovRPyk6fqhZjMJjeGZdde4rAAS",
  "key30": "5bQrmCdJyT26oFm9kdyE1S1jHmm58YpNBhdvDGsUKeya5DsuFa64Q4xvWoTZvza9BizToHf7jxKXv9LQmvP4WRSk"
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
