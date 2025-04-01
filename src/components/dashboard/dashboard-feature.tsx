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
    "2Dts5zdTLJmamwbKkHSnpSe8rsER21nrpVdDozmLNrqWVR81eJnLyzu8gxK4LjE5E2cG2sdgGWHVz3RpAoLPEFB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kf1EBCNqnTpYwj7CoFKDVEFQ1TDbc3nsRBc1VzWPxBrLWy6tpmcUzgYmKjRqQvXUUmXdhLRgRS2JiandsyCkFJD",
  "key1": "np51e8CEWtURcoJi1xtiFBJuFoFcQVYbxU66UBHrDJwLNcK6hAdB9tmxe7VJ4SSfa1uwzYSzoHfEYTpd3kyccK1",
  "key2": "45QeZ3Tc6ZVahhWbpnsvQs2AZHepGriTbALaSDsjxU8YA3iBCXEoHNBajLsUyiEKducqfGc4PF5jGsoXzD9xgzEh",
  "key3": "5BEZEr5PFKz4RHB2iRzjri3tXY6YmVx9zoy3XYUvhbZBnkKkakCbwtRuTKDiEiwwTAAYw4FR6AYSFr86cpFdA2VD",
  "key4": "4KddpLDT38kEGas23zZzroJozzTzTuPRfjsgzy3TGU3jYAPLF3pgiqm9UWKDPsdZdKBKjW2fQY5CtNLKNuW616ns",
  "key5": "5Gqg4DTS4aQrrnpPVNHhWGB4jttbngVjxqxD2RW1jGD6RBMtoAg3gAXTj3Y7wjULukNbdsu3H3q3hrsXWt1numfQ",
  "key6": "VaYHJjkPzAfQvk8bDhAYahgHKmDmyhQ3m5aomE9hyhxCDATN9Pn7WpE683BfAXK2Pa6ENPChqyt7ftmnVqPBzq7",
  "key7": "2KH7LE1zkLPrVLGt5sPpZE5UmRnFukTAjsBSU92nUXi8EUAMKrQPueUY83JerBU9d1RbYAVanRCuFMSn7ZYRS66c",
  "key8": "4cQHHvoJ9v5KsmxMnjHFUs4xouPcNuC5BBMWRAHRrTG19qud27b4nwjoi2zxks4VZpvk21yVmFUrTQ72o8Sf9YU",
  "key9": "4NdDkw7WMYTweU77qKu2oWHApiEfiRHtwkkmZDLArhmhkX3Eq2xfqUdo1yE5Pj8CgiGn6yhZAYZTrRG476fmmqxh",
  "key10": "2zwyDgWradn7L4MVqN4C3nEWhwCYXemvGT6kTbBvsgGeAL6Pe5yNtufUakAbMMjp5Mbjv9SA7Au8husiBDzezRaF",
  "key11": "4cVX7P35gePfx1V9BrLWsWAMULLhJ3EJy4arcdbiCo2J63KW3VL2FVoM84jhpDGCNuoxRr5GfhY6dbbDhVkryZ4A",
  "key12": "4r2HRtZENyrJg9swTQufYvCSJT6vcfTvhecW6H4CrmfzP2DpAQ8fMZ55vtmwyGQeLCS3U7d1H6vS2zpzrKDKXTrb",
  "key13": "2NPYvWsC4j5YdG6FdQRtzZYWK2w2ar8CRcFW2MKyqD2iDsghv5SV1TXyWC88rFU6G37tdgmw5nZT3KVShTe95QxP",
  "key14": "eo8DCWRqXsoSuYLzp59jDD7E9G9gdCxbVHNQo1pjnmwtMnQqxPQWWmSeBbwJFej32hfRx6kYs8gGgmNcsvmWLgh",
  "key15": "5bbdFo2k75LeAJvH4K7U88Y9RESVDXrHen7GULx1LUibQpeouAfRsX7gyor9q3ZMWrLJoSuJUu27ZccEcgVyFB9N",
  "key16": "2ZT4B41tWEtnruL4RdnDMFmMhzbXiyY2SYkNkkY36351WY4rs4ECg8tgjq9HMvB3yB9SBKGuzaZjvUR9GZrutRQt",
  "key17": "65GmdQFkgqNCcVB1raxoQkJtf4B5TpjdQ1dPk8Gz1jRxuB4DucKqYNoEFQausbXe2vT1sLBk97fEyYxmQn3AqdR7",
  "key18": "gt9cmWS144nnCYAjdPheikHFB5geD2uY159FuSt43mAzC5Mn3wQkyQ97MQZjEBjx4ms5WNfhYpGhcpMjRq5LQK8",
  "key19": "3CLpvVRnsePQio7sLNG5PM54pBiLFKbe1Z4BXq1Yr4n6xQr6Kte9HFb6dLShseL6YpoQs1NyTdJvCH3q4PDfhHGc",
  "key20": "4fvaCX8TqzEeckxaz2Y8NzRCpVBRuwEDHcBrmbuyznwEwdWf6Vc418zhruoZt3Jej72KWh8yexi7WUsi6n2vfahU",
  "key21": "2EEgVhVW4ejtRqkJgPkLRVM7VhZswGjKN8bMENmdRrYWFtnBNjipsxW2NZsHEKDQ32uMRypNp3kSoQhFqaGP1Ypm",
  "key22": "21ryyJAsykvJVbvMjcNc34eBQKLSRtYxtkHnApmQsqn1zAfGuyjTUjaeCKG8aNF4qBBFAH5K6bGm26b6SSJVSq86",
  "key23": "3oDgunA9NCo1p8XNnSKNa29uYH6uuz64v9LcvBqJFgRF7uW5HfRWSMP7Z8uqkGH2Jz9vLuBwh9znyse7MbDhRpa7",
  "key24": "57e7N442SwiHA82EqHRvAuWnQcoUXEXWP4eWmQkFCf71oEn5KrArHpw7PzVCCQqjDmSuexfQNncDTrgi8vdUr7Ut",
  "key25": "5vdrRtKJT2yKb12njyxCPtHeSo7ViUWYNYn39zLceQtwf7GbfY13WnVwEQ3nxj7Fjq7FpSkz9mu5qkcuDdnVQ8jk",
  "key26": "4fSq5uGTWLmRdvzgBKtq42M43vp1M2DsNEj1AU95PzV51L76ekrgqvQJciFTpaesir7hTCmzKW3QDy3i4rC6mQMj",
  "key27": "2rPXaHdhBJLVqGAmsz4KoTjhyDcHNEcDVQVH6Z3kLPWG9DLsM51yrUimzdS6H4FYnWFo4Jn27Dt5EGP9iuhnbrdT",
  "key28": "36wWdbAwjWEP3ePxpHsDXiJAyDaYkXspghAobXgUB4oLnJGSfE9f6vscuusiBeGzMBxLKhTxXCmo4TTCLLgL3dKL",
  "key29": "4dWAAX5V4RABWr5Zp8PMt7SSesYgCLujxrsrQ99E3AQt5iiYksEzv2DQGUUUCRwyLCDkBLq4jfe7g2KPB7KJSyju",
  "key30": "3sX51Aoow6zC2ZZyvcxurJ1C25BQuZydtLDKzaY3XduTtbS6DqMSsmvSTrmNLd2bQPrVArQT7MADhdLAiJqZmV9K",
  "key31": "1qWKq5ifKQSnA317UkjbxGtyw9q2Z4mwcDTpFEVdB98Rav3ZA9XV2vy3wV5L3hz4nPStBugFB4bnXSBQJMoxApC",
  "key32": "5TbzSZzVDuNppz2v54UAKTgLQvWBRhv8Fb5RJ7eEjLyhi23N5TX1dSo7WQKhWtQrBzDEYu7z1SW5o1VcSpoGxruW",
  "key33": "dt74cJDWoJky3QixC3mwY79fZhLwyXc1mCGZ2hhmARrhVZ9xAuSfrSFeDELLyrQDQ8afSAUXavoZtDjJDzYozT1",
  "key34": "586cEWdAMHX51PAYiFiSANRwPNErovQKqd4BHDZV17wb53Egbq4doSHbfoPegwY8mCMDouGiLNJmv7ziwhCTfZS8",
  "key35": "5UhizLs95RgCjZz9sYaVUVf4kDZHwMkrCc3yUJKExkaVyCdhvMXsVEkLHnrdPrLcusKoAQkDoD6NE7JqQJvdnWLa"
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
