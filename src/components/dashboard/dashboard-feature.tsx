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
    "5L3T9ikQ73P4gNbrYesyrBCEwpV337cmTJqyaNFgjnLURTkY1HUSiNmr656VXUC8YWsDDn2fNuz1mZq15vphnVMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iaSg9GbL6oUxYdYE889DU6DuZVo18QKUXpu1JUHde65yJ1qenZigxXrJBtAEQpbVa7FqCqoHGu31jQL1VZV4RV2",
  "key1": "5iCNbhnkNxoRHVarB9CTj6VYyzjXR7wwXR96hKUjFbs2bwn81PFhbr7AZqyReaeE3kmVhX8oEe3CCftRZSLpmCyz",
  "key2": "4FqSZDEP5yg7uVpjFPwf3h44NPdYrouUDvGQJLCWTBCmweu1fH96teLA5KwqfZ1Erjcd3ZqRnDrTfFuv8LtKGBSB",
  "key3": "enzMpCdTGxetuJEvytwnFHNqof9gKNGHRA2pWnpn6s5o9CXns1waqumFA3e3UNkaLXb3oVbjtQ23umnzXKAirrk",
  "key4": "2UZc3KXapmgbWDKjxkiCXuq6PrkMqwxz2ioYS56Y27WWD67typB6KbK6zD1WJa2KtE2vvLvW4qQRQYFpe9NxkLZH",
  "key5": "3U9cufGLNPf89XNNiitKvTXcWU11HktcsAF7NAVe2zNrMCMdvE32Qs76rP8uk1dR7CwQsAc8pVXxK2XmBPzLy1vC",
  "key6": "5mxmad3FyMBpWUdfpynakrhiQ3rUX8zpi6qeNqj2mGQubCbNqedZpRszhSy1jauWY1v7JZPzoonuKdiZnKFr2Pb9",
  "key7": "47sdM4CbfJeo2gY61iQKputesw3BfVnUHPqxe36SHj8eRAZs7Aoj7ww4ChdTtQXKz4QLz9Bimxjc2SSfPS8esyTr",
  "key8": "4nNtrM745Mg4xinTMXGiChaQK85B8a1WL2kA5WNKorrKdLiPSDo9UWfdDEnM93dHxKTFm4FbjXHKeG9F8irhpPiD",
  "key9": "5GcBCEYWdYUHLbtMsZDxVJnWAvpnuRkUns88Mj8i9SNLLnMxwqwL7mp1LvSYnPngkWf6jqnAmRBNxJVSddvER18d",
  "key10": "2j7XrX7239fKGpX4oBzJtZ9Gw6jypQXAp5jDoJHYxyyRcoFQCtbrceVFctGFor4Skyd78uUe5vgzJAMfY7JJ49Ht",
  "key11": "YcgqtWnCgBuwQTJFL26N9mBmDxvB2gR3U99DGazrcc1Say8MKd2wEzM8x2vqBLrXEZf9R247WSeK3UKwbaiFdeA",
  "key12": "2d6UfJmXaZXSRREvii2P89mrnsbsG64mHC5eggeyRwxw2ZiPwAj83xrpycDx3kiwH5WK1FkXaYvpG2uMPTgh2oqU",
  "key13": "VzRRJhCBKGpPhpq6kaxJ2A2Qsj3xioaTaN2V22rVP1XAYwZWS8CYoPw5MWTYuW4x4V8JAxE5oq5uFKANoGGQcDB",
  "key14": "5ADDn16bmhp33axzwQH7oyagcPoHb89VfndVmV29p7nECU1FanhF3L3aiEQomqvjwZtT36YcqnHSJeFFTMaEkYAX",
  "key15": "2fvstvtjGgJFkiexxFKkGvU2rjKo4WQBt7WXVAHyvHvsPRJ5obsvjp3rATpGiN5yujGzsb3ne7BqFQmzWxoCUWXo",
  "key16": "5C1SXhq6ChKhjAzPUjbGWkeQsWqeZ9Fb13whf1GaEBDNE1Wc588dPQZavvQvNcBuonp7zfX4zNorZJdTwD5pJRXz",
  "key17": "2gJ3HKwpUpxGdyEKFx4oux4d75Ni6U3qZ4kqK7rm1FedHBpebgkfJJ32pmE8hnCdyaURQTLDivyUM8HzHgEBT8Fg",
  "key18": "4n2dU38AEKmSLfbB79W5r47nPgkpYwt15r58B5wUtRgUaREF3EJGwMz381HPFxSG1ccceLSfKkK1pFJNbbhfuG1W",
  "key19": "czAdEJHYJpzkGtiJBmjgz3UZrWS4z4LGLxBouXuU7YutY1ru9VnMz2uQ7LmpyrQXJTcSpvqe3hCi5HKE2f6GpXd",
  "key20": "51n98G3LJ2novUBpZoBkmmy2BGBV7xPNjxqsc79YzQsgbpL7ABFkU8L7tMwx8frFxktzhkuj94zLyeit1twPo9eW",
  "key21": "4F3qkVRB3BSeghXUgZQsDS7GVkrsD9GNzaBiwmj9hmUhd5WGLqBJ2bUkssEuYjdwyrJc2TVLfpfE6rnC8h9pscMT",
  "key22": "4rkeQ3eYSzqtZt6R1b6SezH6LkBwMjkiGzCKZjLgonrGZRwjBeajnUkfjCki9kDdNeaia5jPgMYmdSUPL1AMTJBW",
  "key23": "SpQ6SCaPVxme1RX3X747BxK6QAxkJVKF7eos1EpKxcoXQjJs9JbLnN2NmGknJ8gjnsqUuCf8CShw5ZYvBJfcgEC",
  "key24": "5uvmmPRy2GozyzLcQeQifoQo9Pa3acoMHVuwsB68sBCELTt1u6b4EeCPcGaDcUjvbUC8D2iJYeCPpfqWMATD2wqT"
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
