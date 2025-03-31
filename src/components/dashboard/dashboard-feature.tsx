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
    "5qcUM1dbFripxm7WApTDeELJvwhbTX7yRjeRHcYX3LLo29gYXbo8rhSAzqTVR262H2GjRtZV8wjw8LYGh6V9Aqyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VoniAFGuCKTXwR12q4v8goKk2LpDSaCD5n8Y5CiUpvgKGV74vedkWpTBqBZ2T7CCbCtGxPFDUAYRQVmz4fr8CQU",
  "key1": "4p2u9fzW68qNMSB8P6GJuVHMYPDZymzVXBdwgphQkqpqTL4LMGqMbWAMAgKiJdzBamBDkS3zK1s383L183Erd7wb",
  "key2": "5evp5onhm2jei1PEjRCHXkHWcWU58hmjAYt21YKpjhGsgCrR6kGpeayu6wGE4eWChr8B5SCnPapUT2r3oVnVf27e",
  "key3": "Mj8nzjDA6XftS6a3R2ReWmQK4m7T4e7bY6Bqn8YCm6smS9mUmqxXRrmrxZzXYhud3qDFzdp1swkQqkbEVo8sDv8",
  "key4": "ZADvk6fEAPb46dMUwwAdBk8ZzZj2GA2BhrrNkfGA2gBtE5UaTpauDS5qk7oxTEtns97tdfuhN6K3UT9Uhkee7Kf",
  "key5": "kfR6SpqKmKf76x8YdQxxYiPZF11uTvgYWGQ4SvM8Bg9i1Jca6r95X1kL4RwLnvWbdbW3ERdGRUjLKvsaFTk4sZR",
  "key6": "5BE4aXnf9vwEHbJbRDCTccuTumtP2W5CEVhbBhD4pkQCWpGdD7mfaYahNATMpfdE2EgiVXkQ2t91Uk4o1rrYPxpg",
  "key7": "iD4CHNEG6vfu76brcagfanmhuPQGcxqPtzbDr5GNzBobWkL8QDDYmEbNxnjAqmCGmtr1md68oEzHn9fwt1Wz89L",
  "key8": "5PdJYP59HEhEv4wLiWt2SuWu8VofThVzxE9gJuZAK9FiP2B1zqq5hZYezZL3mpwhxWdjvoUutb4WxR9yPCUKL3V2",
  "key9": "5A2eHrhE5smrWyAqjBWqx5dKcDqd3m6SbqGW1p1FWgmHAvgw3zC4tbE3EALka6wafWw5ECAdYQEnQ2ajLUELLKoP",
  "key10": "5xndqKTnydwGLp9gaUP6urevB1kCML1vPCmjcmB6M8VTQwAVFwUnHStY56zHNRVYeD2LGRpiX7qpoKzCgSQJxP8n",
  "key11": "41P1eGsqcH7np2Q1xfCwRkS5Cx1MK1jpKfXoZb8RrisYkibnFuWj3cENAtg1hczPsbWMe47mKMb4P35DNbnmQwca",
  "key12": "5xqLf3m9bCuXpuiJUgEPwmMEhKu571bRxXWoHxiufpqPqFBkQjq16cpk8SGNvgHtchPE42QxebQgBZM2XcMguoH3",
  "key13": "nedfBaqgBEtx1dSqDeqAKbVRnFnrCVg1AYnbNoUmY5cMegHKtskvy4Rwzn1aJsLjhKnakzENcZEQDAR2tULV4Rr",
  "key14": "4T1Y2qw4YgPM9eiQHxY7ARJPfcERVRy6WdmGAWtMXNuXBGgAvrSaKVhTb52N6PxZQDYeyW4pLDdDb4JwiFgtmxbn",
  "key15": "4FKpoZwsjsSd4qUkmnmJHDzGKjagdSbQfguGMFptCBDxUmmeGYr2759FDoayXmP2VSitkeXnuVFA9iGdKCQjNauV",
  "key16": "5P8wdunAjddzt2TkhkUYeart6yGQvwfbSPGoUYT6ZvQqcRRq5abamyN1Uhh7aoykQ8beX7kdMCaShht856DAwJ2F",
  "key17": "45FBTH1hu9BVgrjzXyZiUtmRgUw2tbmtz788opyEnL8aJkKy6JnouG3BvRanJiuBUqkFonDqojPfKZDB8BN7W7Ph",
  "key18": "3p7JpoDWG2GLvGzvXqjWLSbGVrPZDaLNAjJuwTspZLwSznKQfZ3tXeFaB9Qscz48BK2AbaPAk2tv8ogYnaBYLQAp",
  "key19": "23rSRyUehcobLDQt4xw6Kwc2jGqiksCjqRncpr1RmgLB64JGuwZTt6zaxavDN5sgddELAXveL82WfU1CFEe1BjXL",
  "key20": "WcQUw1V1Bg7eJjYUvJMuWW831qmbMZwc6rZxbmgidB1D5Reb5kFxyeFENLoC7XFx3c1HvNtsRACiGzYU5ddNEXb",
  "key21": "5XKRHdviASU8uMKUstZ8H1qiFhLEgfsUDfBfGRKzvTtTfi9McBxWW9M6Vh2Nfzi7F1Ztdh2bwyAH2tKcKyvUYfTN",
  "key22": "3rwuu8WLxeWGJeCVSmneHmLMbZ3Rys4Cn8sSSmYZu3HzRHFpjdxizhwaRohUYhUgzVAHkcc6iyu1aTwHXioN5sQb",
  "key23": "44hmaEQsHHU8J9CjBSiSKHytrcTQ1pNFduKfVy6DxPkWTkswRYAHkZnXtnB1Taa7UdYhNozme5BrYQ1sVgGWGazt",
  "key24": "4tYW9ztVbXScDsCZLMWYocSdnK79qNaUSCWy8BnhvsDN1ZEUsXUwLhLjrotJW64Y32btSDxxMC2HXt7BrLi5Vzmj",
  "key25": "2bXxzsgkEwVGV8ix3CTW2fm4BRohU3Xc2fvnVP2NZNNGfgkDLFBWoEZXwa3umDbbb4tXDnDNE4vKipqj4VAH8Mhm",
  "key26": "4vcbkmYeEqsz7cQBGT9pdVKH8k6WgD4xw9oDmSX1EuoZFFGh8ZumUDUEbasLUbP8b4WMovfLe3NN4TMUqTEpLsNy"
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
