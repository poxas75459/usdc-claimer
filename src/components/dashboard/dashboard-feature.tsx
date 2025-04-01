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
    "5V81MCjfeWASKiEiUCLwfXvhs8F9vGGiSpz15tv95sPhMGH2o1a4HsCB5Sr4NTUWzQeczax5uaoU4gWfcWN8eeGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfYs47qom8Tb28PfaAHsfdq8pMkuY76gnDnMHtgYYqPL2PBrZ5Xpc3Ykhc3f6FmaY4tWbgzitqxps5347pahGu7",
  "key1": "4mN7hzNNGDpwLCptNdcCgP7qs3uembmaSmzV57pBJMDqSXEdJUb1uamPCed6EeYaGsknreUiFHhYGKQLUwTAoYjv",
  "key2": "4dJCTTCBHHUQKMxnLjTTSBpH9XBwZ5BZRhD9zgxypzYbRjWT9deqMaJgAfHVWFbJuia1bSNszkLBxDurCmiwD9Db",
  "key3": "5eAzqjspuAbdpBpvbAU1DcdoYcoNnafKdpPoSCG79PqhdG3tPH6mGiUx7uGS5qdW1FKi4SrnRR2qrtqMqiLzJsBz",
  "key4": "2Ljf1uBhnRbNTorXxYhJY8pb9DhR7is6zbkGpj3mQszYKGpPmMam4KQuZ9CFCecK4gQFNLdd6cEjvVWtGvCK9emi",
  "key5": "HzgPT6ySbjModP9oQaBm1XW8192CqGfDgxm6DFEFsbgvgqjz8VKFQRDnYWKVrhMBBzWtqK8eXh1sLc7Z47UXGw1",
  "key6": "CW9ELSXrtsZPqw5jj2Nk5MtC1xiwECeDmGbKeMbcYTAHypnzViTqb3ordrsaseU1AF3eg1K3gmRiRUyzBBiwce1",
  "key7": "126bgm4hk7Hiei8oG6d6WBL4AcLcayUzm3ic1zDv9MQZpx3xhqy9wtqYZrUBbSVXvS8Tnmf3J794rcp7JxjCiiYb",
  "key8": "4Z3BD5pmW565E5dJ3FpyuHnSNPzwb8Boe6hb8koSsfcMsLHyHrx3meLJcDg2vrTwCwnVo6Wei1iBMsFq7NpLgreg",
  "key9": "2dWN3tatRY9K65SYNw6sQsdQeUuBvQGHJrA48NWTRYwuhbQZYkqCWpwfnZKMDweujo9VWL8nGmvxbdSvgxZmHLJG",
  "key10": "643DNbAwUhLuQpFT879X9nETpkuDYrzBeJbCLvmHj4igRiX7JTgFMSfKnZ56ojwvXCsUEbttcXgLZYr6X7nYP2d6",
  "key11": "5WwsZeoUSZ7DczinDxF1cAzi8xJdZJ5iumY19kCf8813i3CRh1eznr74deTuxGfPdpyqYBk9qTmZZJU5LPJmi9ra",
  "key12": "3r4vo1miLitb6kZsn3a22dasc39nNQ6jbbVZT7YgEfjcMWBuKVyQJQh9nRBVjDqXpcwc9cvCdby3fx7zUfTyedBd",
  "key13": "4ptVV6KvisomEzFbfhHvSUWjQDt3L582ME28LTd7r399tnJaUJGKxoc1BLvBzfuFrQindEHQLw42aqpwRi5eZvSb",
  "key14": "5mTxoRxSC4Au5YqeEvT7kCK6SGsxUzPrpvgZCAjgfC6fMgJteqDD8h3zefyyDcC9cRwHcPr2WZjXMWjv2axfrKxA",
  "key15": "2kxaLaMwkGMPW5s97YZtsRbgSDVmdqDmELqJuRXgE5x1WQEZ9drzhNUPJ2EfMinPCu8w2pwJ29Vs1s986b1T3qck",
  "key16": "4aE2aXPRUsh5rg8srLBnP3P5yECfUnUoi3emWVbNLeRCxywX6NtDjy1jS9wrCXjs67PRAUdENF5z3vg8tYPXzjXc",
  "key17": "VmSntMn4Q7FTfoMQJYDMEAHVGnm4NacTfZB5gZJy2HjMkPrPo5AapdVmEhgsVqw1cNpK2kLeCeg8UceyfbneWSr",
  "key18": "5VT7QJRYTxPdkq33LTywixAKB3G2RwxWZcrs6VpgrjKPYQb9gtSCy9dyZQcuJZKpB1tdoydVEZsHyifWQ2iMjSMk",
  "key19": "VJBLymBUHkeNseDudrpKLiWM9Sa5JMxi7fLHC67B2MXp8FGmNjF757ZicT4ia1B7gAaervLXpsVZVCTEhcRaLC3",
  "key20": "5UV9YLb2xe6uxzBn6fwntdpG71uYb3EYLccgQM8u93onbC1L9B1cbFcH4h3JQiakKMN7D8nzNaURyEAN8K94wwmP",
  "key21": "66stDsa5Pp2DKWRefXxG2F5V2tZXZ2UF2utjgn1ZiG9Pumh9mu8wATta5STZJbGeQRPGwPLbxgfig4n6KxzKButU",
  "key22": "4LWtUYqWghDJm4UKBtmxgz1sc4ViXMqdxmMkcx2hPSJG9XojFtAaH1Lbj2w5Mrue7qKDaJJ6HcUG8QH1rQVXaEDw",
  "key23": "3WEZr4TQKwwh2mQAvv3eNbWEjk2iLrCSrPdaiEXfdYAxntkZ5NYmzLc2Md6mFZYFtAQEsdpWGnxYGv4JbqD7PwtG",
  "key24": "5J7vkSY7GLzUeRG9EyhgKvkd7w74SnvL4KSvYeNUMxPjQE6YK8DFyctxFam1Mxynh81ovT59FBTUd5n2KKSDY5oi",
  "key25": "4VxUdhLqp6Sd1XiENbm378GdEaofSvXritrsqF5XwZwCGRAFERfBYfvcDFRzbhG9ZwRiUmfgLhro43PSCrJxwiWm"
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
