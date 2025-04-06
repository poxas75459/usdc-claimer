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
    "2oSpvZYj2czMxVpg45GQoX8mWBNvTKxAHg3pxbpfv79EB9KwKtw6EsukzN2Q2eFbE8dfFN3UKcHKuCTvkisowEte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zV9wQJyGkN1Z5rhTJad92EbNDMu6HFcebEbUSnKAwDXExvNCxhswf1H3U1YFFmX2tkMV7frASXmwdbXyqHM4xi6",
  "key1": "56Q8eVMgamh9MTyXQfdgy3yNiSgB26cs6kKkDa3SjE8VNGCFUUwPWTviikaedB3gNyttszXKtZbF5VV4YkKY5oGr",
  "key2": "4mxXvFeD9w56zBEdu112qVc9rk4QDESuUYK55ULRc2qAh9wDsfGa1rwy23vZwZnYbYSBTDXH5cq4RHnnqDtia4yA",
  "key3": "5Kh6D52k4NUx7pWxou1mjQvnU57FxQ9vL3Yv63kjAF6T9WEVjtdcFATbQJagyfwNtpFyHoxU2f1kvYsaRfoxSNvD",
  "key4": "2mqNDtAJHcCbCQSzHQwg15dya5TyePq8uhqLZaspVp26Ks4tuwits8LfELroBijNv4Zs4AHQBcqpvxjSrdeNXLna",
  "key5": "2Wh6WwYF6f5mPwjPNbuZxqKQ9JG9AnsmKFHvMsUJTavhbTEvBBYfV8AZqDPjkVjZbPvYvYZA1eiAJyJ2qzDK92eo",
  "key6": "2sGT3VX12iCP2ezUZkdJUcL4yAYCWp5pVdxTC7CsWzPCeUTUGJGrfiW8iqeUZTX7R8UsU5aA4aHjuhf6CZyBSN8a",
  "key7": "mxxQaDHhcoE56h1gA9uoYtaKdFB24YHATkqPAGGaZ6Ww66GeQcMZXvB9GLpPWo8c4pX1WpR7UgQQ8tPPCq6hQsR",
  "key8": "4xcNSPY2f6wt1cHy5CJNCmkWKCoSzpv1eud3sNznXuvrraz6qoPAsucf1ib8oRD1RLRjVYsLhKr8rNPTnseRcpdx",
  "key9": "2XxwKjbirNsTCXnr8cKPn4GRQm8dSN167QxurohHZLfpSgUpGmVXFgWkkXbW4FJgMhLZz2ibjWX2HBuGVBwUpssj",
  "key10": "52WNhmaMsz6zQNWCBaz4A6xPt7nbpmya3fFqz3d4FAWTkB6jb3pygsVWhEup6Cc9c5AeDE7nXzbLUD51wi99nqUL",
  "key11": "36mZB75pHQkGYtdTEQirkbobwJYB6KtMNLtVFbqxrrCTCb6ESUu1vZomeY51aeBgi2znNLY9xMAJ82UpMVf63uTZ",
  "key12": "5QbXozrrM5eDWEQf3U45C7SA2e49itzHM9GWssDQhRHNJJwZBqECMHo6dtVucRYkv5tG8KrwcX5tmGxoVrdbPs9Q",
  "key13": "2ZuxmreygK6p6KLD3QQPPuEvFtEWUCBAUtQd7MZGrMwbbY5ePNVQrCfnktWRWKvmH99D456bxvyTLRWuHFpSbE7C",
  "key14": "3VrxwHoBtexbLCMsd8mXvXAu1BJZDVyBhLquEqQT2s7bnEcpdxuzwmhgoqdWtJwa1HFQ9EyQziGzoKrTZsbrJiBU",
  "key15": "41xooaXjH5CvNCSSq1f5G4TpPYmxqQAXSwh2uMsnrxkKpJdKH6HzJp5w4s36cKNHnEApna5VcLbVmjSo6BytJERU",
  "key16": "3LCbf9HZPtg5Q4R9Vx172T3ypGbd4UJkGRk1tTYzNEyBxYykqPhA3ZFJwARdjjMds9RvRK9gmPGfgzbHrDnzweUw",
  "key17": "66Nt8JP8vr51ABm3FWpGZyXsPN1KPx1KNrDpJBuEuy9HKw8AqoWyfiSxURH6QwgjtLnwJBfaTbvjNFEGJxzEGBTR",
  "key18": "61dzqFF527oHoJ1KrX4FK78oNbhXYCHfm2zDXDyV4ZCzgLKiZWEKcXUXbdMW7jNVwb9GQZBKwvVratewScnBqaBm",
  "key19": "7oN7ACjh5g2kFGPiZ554KJfLiFkscnAnbwoA4TqQ4zMTtvXiR6fQ57JBBcMGNVyGYLEnLSEPqGEA5peQCmtBHyy",
  "key20": "34sxSb7nt5ZspgXvhsGefDsqy44dZ82ZeC9cEEqAZ2jTGkHCKerkFj1F6XEs4Kzeinkvnd1HEp4GrsoscpdkCmb5",
  "key21": "ugtJxSBn64t8b8oTfoN3YJgKY7Yjhx2udtPTH1zpEYhsSttcmhBXU3S2YWztvkd818V86gLWWV7ZSWeff1Eq137",
  "key22": "q7X51mgAhcJdeaUZkb8H14wttS3tZVTAr8gXeKMD4YuRkzqqRh48zj9TnUA984YTyfzeVPpogaooh2VjHTxBjef",
  "key23": "LoQKvr4PHoG6eZAUgawujAQKk31zj9GYjrEkGcQMfHuj7ASHBTG7MXWQDsPEyDCBpKDm8vQvhrsuS2wJ9YTdRXM",
  "key24": "4muK3fwThWKnae2tNLm9BQihXHsTF5qnNU1ouyZ1LDAyxGAzYmghRxG9TSbmSG8pR6Czavbh3ji4Wazaz3dqwNEu",
  "key25": "4acpYXwMGNHFmJRcrDPTSbwBRbYHLVZJpNSkWZzkiqS6YqrGZCRiYhjdjpGRvdwy1uyRxi2dXRmZMHz51esM1FGz",
  "key26": "2eFXjC4pbPcCi5eUUsNDYkpQcWRK9h8RW5LLXym8FDkGEUed2vUYBKuUeCBpVuSdBxkxGaYB4j6P1LdWtXffHYys",
  "key27": "5wk8QifK1NERHQjdRr64JuQuNZPXWByndxsaBTLoeQrfpVvVz9XYnSsiZeC8XV7A4mYqNU8P3iA7psCM2vgaWGy2",
  "key28": "5v8u5XZa2TzZzUPUsg8KVQDuotJGzrzC2fySPQVQrt8F31NKYWZUtD8oieY4SCikW2ecEthAKDdZafuGLHYzGtQX",
  "key29": "4qowzzA4f1Rq4WNVkdknFniFXAea9uYZVM7DraxTSWvKQLHS4kebiWwncKDmYKTUFn1W1RowU9g7PcJofZkS6WXz",
  "key30": "5ieJ3DMrsHhzZwh4MVhrStaUW5zk1prXoAQ8ZF4LmP8DFfmQDdmcE1s9dzz5gkmi1Nbx6YVbhbkvNe1ZfqcDdTnr"
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
