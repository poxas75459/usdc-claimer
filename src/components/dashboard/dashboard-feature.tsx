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
    "2vTNtfpsFRVY9hX5871AiMnUDbcfdatE5WSwiBoUKZqC8ohUyXZhhRcHaxoow5oTmT79ySoDK1V88L8pBPx7Hqmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDwMjJCEmhvictaXQyYbziXLCWEywzEZTnQxayCbwgxoTGz1e2EecC1WqV69mkhJsi1aNJFgn7CKYBCT6GbdxgK",
  "key1": "2nUnMzJMPNDZmFapnGcoLTtdWaikuqUafvix9LQiwp6Awm6U2h2q3FxaF7hGFBbJmdUmhzx6d44yqRouVrLMdzda",
  "key2": "3CHnZsNRGwZty8Bs1pNHjgaNyLpiynsAttKvpyQYUgGAzsMkW9WPzhP3EPARUKT3ZVyDkjoPQRBYn1GT7tUgiQvo",
  "key3": "2XZxud4UQKbjwv8dErQik54MoQfSYgRCt3E8ryj65UuXzGFNBWWoymqgnWWHAZR4QHc5Rt7Z4kUGSyp9gxJQv1qS",
  "key4": "49FZKtAeHTkBjYj6qA3QcURjL5TCNmLRiL7bXd94qS7G8rEbdVXcMD14Nm6dXNjkDHnQAx9AKJAKEycGJ8nNomxY",
  "key5": "2KwR5h6Vv997WHUFC19Xmy8rweVew2Wrk1vG1a2UtUSkkth33at8PB7WpjZkRp2oVyBK2V4ruZUjd7xCz3uU8Gtc",
  "key6": "4TS9tB1c3CbR5Drb5YmvY1MPAo3847Ect9pAoNkRSViEn87RfKe3UBdJvwdmZ2QGH6AjCTMQkxqnx9HYFKwMKHcB",
  "key7": "32BpJKMnEeSZfc34KLZjKT3o6XzPW8kWtzN9nAZ2dhQG7FTDxTFPJKiHBJpJH6o8gJJBFU4kpwZRsnCQu5GjA8Sd",
  "key8": "2JxG7kvJnjNNSYm5a5y4fAdaxhhQMgL2Z1ujZbZFxmdCvJnGgr8ZH7E9faMaqemabLmFpnd7FTB86YRj4eTbu3cF",
  "key9": "51hZrZv8vai6mPceyXQQJKvFoVwgMbZe1SNwg3V8doSgn38PmHvaKVMwomUx8oBxWDJ17Y39CwudCLFaatjd2pF1",
  "key10": "45XQMW9mzVaVBZWiorZZHv295UgjGdfwFpHQRe7xKVeqoY4WM6KeJpu7C9HBEDMBucmbYzT2jQtPw3sPZ1qKe9UG",
  "key11": "5Pan1o3aPtJCwkkenjwauJ2cHTh3VNEUN3tFam388nrfjjKGwBXxV9Hdy84krXC1nUa4rXtcPsXJQqz8cqANM5pW",
  "key12": "2UmLuApbFPPsQBa3nQS3vSgPbNBZA1L34omtvVid1dnZmioL2FSKKpFUWnqt7YAfzL3AFBhAZYbamignkf7YJjN9",
  "key13": "cdkokzynAVJv87dHciAL2z4GFwpofHhF6KDsXzwy3zbuwuLod68ygP7PEVuQSqpu2UmHn3vmdtr5W91D43gaoZW",
  "key14": "fbYNNMM1gKBonvz1Xysn9N6QJueN5Q2Hf2gQe3XGwn3zHSUUE9WCp1KhxrEeqq666HEC9zu3URdQgH6QTPrNznL",
  "key15": "4wTzDD4XB7V4mzT4rW7Z6Dt2GzV2Ka6XqtYm2jx74Fm12KZoniGV1Dg2qiAhAwWosEo4HzLrJNBH6C6ZGuwhPJDG",
  "key16": "3y1zqjwuSHpy3JF6EcfKh3i1tMwadR1GKhcSAmXqqHDhmZ2FnsxVtGoZvyVafhaNzkxfbMsEsdmbopEPk7nYPDNU",
  "key17": "377d24d8hShHhycUhXtqatVd2gFX3FDVHLS8HhWToGx93tt9z7XKAw4dVexiKXtayXgt9q4NQ15sZb44tcnxq4r8",
  "key18": "2f7SfTmFASaLKrvRJqxr8rmgRU614DVm7uQj13CkCD8GMUAYkJhwCutx5LWKDUczMJWK57vcE3DitCzyEDXkbQgk",
  "key19": "5zD966U4nKJD7TuuDNraghsCkr2rKVEwzXc8XTh38YPBZreA1EGgMXtYfPKUPc4sXNBiPkEvGprBVvztspGbYUqA",
  "key20": "3XqYjYcq34vj2YyQ35q689An288fJwHgBcJeEdn3Yu92Df1wo1wrfwPX12qBR3ymyAn7CAspt3oLgWM7xEh6WVzZ",
  "key21": "4Ty4q9f2a7jEhb7E61jjnwEN62o62QUVHhMgJeTzJ8P3K4kUns5QaF2qGYX3QYdZ76qv5rofD77siAmgFmSLKN3a",
  "key22": "33pwvzXLJmmmbzyPy7htWRwk1nUb5WNHyS6QSJQze1ghqQx2KujPe2ofF2qEesYnPQA5AuR4YfJNzp6TUucW2vjk",
  "key23": "31MZ7XZQV6NSHZM4FzeUYBKYQvyXWC159B31LaLeHvkuc6Y38eBz5KUkXrmgLv2N15UETsrmNSFY5ARWf5vUPe7j",
  "key24": "4DvdrnT6cmDFJBvaxResuqv4sr22D3Mkx3C9mANerx3ew8KgQUTKDbEyS4kF7erbb1PamFrXg8CiWngc4P2ocuwz",
  "key25": "2pzBk7uoQF5oFd9b7kgaQUX5cFnrGzeLr2owcyhUkBX6vULK3c1QPicruAYAb7qTWK4KbxMtKmQocMewbWpvHGjM"
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
