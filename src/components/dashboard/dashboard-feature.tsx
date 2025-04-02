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
    "S7G33MxqFGqATxiEEacyZcsWtJXs2oE9Nj1jgoEWD3zzjxYcAr9arBMCMDRRNJDS76AgBcq1WKdRjvdAWy2vahR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P22fktfWQr8dSsN8RRW7BVPLEbzssG9f2wyAXXRBP4z9Ca893UkPoBnCkceLdbGrrUyerMcANqnwLM97exXikJ4",
  "key1": "2QsQWyXBJTXLxsyR8wyvp6bE5qjkHSajnw3BJqEw6jkxHS3mHJJrrHDhtVrNDrWSAgDBNEZmVHCg8HZWmsmuk4GD",
  "key2": "2gtMRRVBdXs3jLRJUY3FQz6ntNCAqnaNjyoMS3BzBujGqy7gaeWRjt9voTHKU5Csu8p13SbHrqBD2oJq9HzTEyNB",
  "key3": "3QhCdXDQsFNsC6qnBuYBxZQtnWcVwdG1jn4sJKvd4szxaXyzsEnGT4tZRoJuTNN1Dsynyjxdk8E7zpn6dQzUf7iC",
  "key4": "4G2i3xqjqaLU7rUWFHfi6R3bzHazWZBnaNuW8uX2BYKfdaNiwGc175zqGLkdFTW6aqpDpwyAfjRYDKijVRzJBPpq",
  "key5": "3jwDbWvRBctqV9yCyYZFLuBWErXbtrutLQiQGTtjKWmEXmTNY1ZgX6ukXMMkYp4yHwukhposPy7cuR81ERM2rfb",
  "key6": "2Qg8GQkR1M1KpUdrVBU8LiNaHpnZC5ZB3QMhq6LVXYkJAmUqsEJjNvkJxKw3ec5ySw6ERYg34HAaxD7nMcXMo9ZK",
  "key7": "4ysYsM5ZxyJhLncGvXUk8oK8fweshVqixm3yYnagT1pPTXPHHrUkxfpi61HzRjWPZMBvH8jKYNPufQP6eJN7qTwf",
  "key8": "Fcu4ztUjsay5pG8ezzKmbjUWg7kmy6jDrLHZQFVPobUKRz6Dbznm7FHFN7E1yHVwSaHPNtF8Wz9X8zXNVqY2vQB",
  "key9": "aKqnSDscsKcsJ8YgnPxbuiEUdQ4bwX5pAGXkK42V3BEMMUB3eiMDz7Tpnb3J9HEfGeZD7NHAogbdJsse1zcUfaZ",
  "key10": "8PHLNsHTc7Kp4jyRbQ2YDeCf6qqbRTGrFMz4CE8sdENdZCCEpY2JqBkusgBrmPmLnH1uZWrsiwcPA3RcXF6SjyH",
  "key11": "2vaPAUo7bbHsyy9DWa1Uoa6Z7xKk9aUiTp7szSCj4h3gXSCobm6r3xRmah1nbsLtDJSFSJZEysWEkXPJWbmrVs9s",
  "key12": "3rsz7CdVLtvtrD7FZqcehrCcqSTm8a6qygSP7oN2Wr2xJHvMk9B5y5PB99CKYZbnbkfLpMHf5r3uYQtSxrYqHwQ3",
  "key13": "wtMnhcyogGLsFbvNUpbGHtRvrCssBVVRc91zLiUYg17PrvWLZjpL9pPBmYVLHMRj5j3imFAYUpTpmE353uEVAT9",
  "key14": "5ZTJXqZfsHzFqqfGGy37Hpr2P5LCzaXemmzXhtspmzmm4r17rK4HxY62J27bvQ8J2uJFoKLjBErJXQrn52VX4Cjs",
  "key15": "tkct5u9mk2MgAx5fY6GXV64p35QgwRhnRaZP8bPaXyPqZ1KnDrSiec3icv5WXnHP2Bo6EZzRfDDAvV5EvTpp8o6",
  "key16": "5XWL4LpZihhbXMXkqsZR19V6vLQcuZrMdmLG7DkyjkCEeDuRsoZpzDFYebkaXzKyvo7yvje73JiQyYv7oq2NxFyK",
  "key17": "4oAjhYM9dV6nwmH32sZ61DZiQUy6So3QzmjQGiLxC8BQSMWwMNQPrizuSuGKTH1S2ukAimitPauvYrWdZk6WfcCP",
  "key18": "4g9kAPi9eThTUhUJpDieyxoKBMw2ryoudgogwrcWUhJTPRm2vYfeQyFMp2LxmJrtGSpG5PUKAakmwXHekkB5WERq",
  "key19": "531B1MgDMhCG1LAdakxDZVS1BUPenZLNQUpRywsyxBNjZwehXyUVkJqgwtVs9KjFYTVWJqy2dw7VfAFh6nh8vTRj",
  "key20": "597yWsd1qQMPjs4M95UTG5FEXHjvNavWaoE1BPfpN25knxYS3GuR8ggYy39FTtq3Mviea5oGEgb7b3WV9rywv8yr",
  "key21": "pwFhcJeX62p5VDC4x2t1oNZrFvxxR9RWRKnuVvWkCHzoKVxfBYit3XwoY3Ycd4WTYMpmvCduTZVJPaEdawguGYW",
  "key22": "kEuL3LDQnv4uJkZKMwfjDPqfWq4EXqtpYAGvyXgBXo8F86sJYX5RVLjFdB7vxEDq8wtam3YxvrLuwgYNP1vS39k",
  "key23": "4NWHrkPHL65ED8JoGGxARhzfAxVV9SCHQmASCuVFPkpn6Nmhf49yhEAyjPzadwjV7LnfES7HHBPgv8AT2VfkcSha",
  "key24": "2PmiYVSfMgquQYxEV75TtPrifBcKkSEAswaNoQ11z5nJby49m5qGzM9iKUTwaH9Ua4vEc3PowgGeUqsgGCw8Aj7c",
  "key25": "28zTJj3EDy4jayvVfrFiebqaVHLdYgL3VzvdEUqaXsMSBi7jTVSn2V5qdJDwFYBuzRGfryYWaaF4m8jTfa9kDo4a",
  "key26": "2sCxtBNCXNdqNPDKCbAbtQKWQZxixXPj4fpNh7CQztodsH8g2TSaZBsXBq4m8DDDzVSo4vUKwcpnQ4a7h2Y69Fti",
  "key27": "4hrpLfaXUTEhopVD1Yn3hoFWfFMHqFJYVAQ8kxkDUS89yZeJcsjvB4GbFe6A5DdS7uB1P27TTfjZH6w5PHCyuUAD",
  "key28": "3SxYNs7TWUPGe854itU5SzXC66RC7YGaK4DcjtP3tyUXqQ4dsHTuskW58PTCP9EkeHWmfjw8SysuLZeX8r5DzXd5",
  "key29": "5qDvXnHDfxgeWYFXMXJJToU4cb6RcsK9P9RV3XKSiucsNjzVhTKnhjFPqKHcvfVPFizCaC1RWv1svGKSR2wLcFrA",
  "key30": "95g3WJcaZCBKVziyLeaqHxkUCfg8YRbqHRAGiQWUZaUeT1kBErje9mUmuCKzNQNLFcu4ULtpWiYyZsPnznvHdww",
  "key31": "4sunmwGksSvAqpoZpCMaixr3kqhbXjWXQUtFX6VKc6CDWFfzAkNVyUWLYQdd8KX1xRZg99C1t16BGEDqcgNizKGV",
  "key32": "GcGjamWkV43RjPu5p7vXgF3ij2THVBHUuAe2tpx4mr8jmFWQ5XGfncwQbBnStynUrpnGJpnYqMg9qo4xUp3DmZJ",
  "key33": "z2JqAHsoP5V1hPPvFJtpdM24V1pWZetvm5Depbmh94ZGg9NcomNzDrmkJW6BUHtdDe2iCmR4WDKMDg31WNQsdoL",
  "key34": "3DiHAhZayqw49YbHParDYiUpZfjfGVYanW4PGLhsuTMTBTV2DCz8rJBiCztLMxkLwctAqGXRDMDhTna76mSL69E5",
  "key35": "2DedyoYX4P6bPiowLxXMKpVCYpKwa9PQf8dkgDJK9cAQKVDQbeBvrtQyrErgBgRUvB5N58bu6D2HU4mXCzEwRRkH",
  "key36": "3BrP2wm9muhdzSNKRXTUBAuTFfysV4vK1UzccuZuiooJqzqhpbgFrJSwX18PsfHJzhyxP7yspru8fecwgyycnZ8M",
  "key37": "4vSaUwpMEkX386JUBzYwrZz73dsH2mXYyRhQwGnwwPCLyHrADftz58ZecgkuZH744efNYchadT4ai4WzUzvkDde9"
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
