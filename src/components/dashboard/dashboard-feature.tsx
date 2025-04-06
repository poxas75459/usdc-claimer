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
    "7H7CtupE5XzyU9wXANALQfaLuRhDfCjbWgMW6meBuwBJuE6nzFaAt8t5mvA3TkqLcvHzhhP2A5tsEo5Vwh882SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nump4Fo4sK874EsfdHfJ5mtmkW1JCtwRkrCtsRoscJkXkq7ewYmwZrdcwwvNcLenueGcVEVygjvKvM4DBbaEgeS",
  "key1": "21GZnxqm382KKS38ymmYyVFg1RwxHQxYVkFm6GVyAuYTf8FTAEqJgxjjXatvbm8D3ANjRTsEBDqxuEB7ohr3Pj1s",
  "key2": "3MaTi2DaZpGgZQG5VPqr7hL5SrCij8J8LG9fun7Ny55DqMUH4koRQaJKoKexEzCXVNWnLGbAmJaFBeS4sdMjZy3D",
  "key3": "3LpHZhn3kaoaZV38iLEdZWZUQjPbagpNvCYhFkkGjoNxn24L1xUo1EvHDwPV559qxZx3tH89drM8szqPyGoqkDFS",
  "key4": "5pnMLmj1rYojC4zBDo7p258Tr9W75inN4fQdfUsQBcARCnfH6qaeMuRQg8hLK3sQwvq427pPmQBabrkM8gbTx52c",
  "key5": "5d3iWqMeYdig4MUCa2Nbwmi4riXndCq88UrQ2xvg93RCSHJocAcP7LMAsKoAVGeG3eVXk5h6zfTgw3iTnNjp1tG9",
  "key6": "2Sow5dWFBBwytRgjiCRUedLTw23rkN6sxLMe9GteJQCfebJyYQEWzxzYHWoKmRaj8W878YwitBhbbqmsHri5qk6g",
  "key7": "2MdUFFcmqy2EyBEkhMnwnmUkaFYAEXz38tgRss2jmfAhzM5vkBHhWC1RK1RV2oh5scvDpc4NmhMDG99KhxEV52bu",
  "key8": "2GxzrLTj6iWNtMiMoAnhQQd2Yp3QNG6QvKd9rqQj6dHuiMY7WQWcHW3ZPWrTjyh2ez2w6bz44cShk82P2z7hd2EZ",
  "key9": "5GApM8frF89Ns4JtNNHV4gXgh1uTD2ckRTu7kxTMpMm64yRiwPiuNnrxLPMfVSjo31m4ho6ZQujLJQpxgeW6Wjhv",
  "key10": "2T6Cib3grdxvgcEtNpadKXsCvd1fTMHdZ6UVhVQBySPGyS43CYC2qiCGW4DQXxAaKNuacyW5cg9ohf29j3QALDDT",
  "key11": "4wprj98oKUFVBpW8LmxFR3LfnEUbtmb1okCixtWMdkfFgQrP6ahGWKtowHssbBVxipJ4K6idrcmkLFNSf6ShCsJo",
  "key12": "WMiBB825amMEVUvrsMh8rMrfYr1v7V2YHMHsoksuvAvGSNFvinKQ11y5vGntBNRhikoFtHpfd9B5kqVrpScFUUi",
  "key13": "4xVeNMdqdcLfpskQLQA5snNe1qC2wsSAuN9oppUrdx69HnvWtTona5FeGnHvncVnCarCxUNvxKLBoV1U6u1Fgmqs",
  "key14": "5oiZ9vxN7Caw1g4GWuQxHjZEgarRvuktX3KDeQVbhcUZE6cLXAzVJZPQw45y31qZ8vC1LddxujkgGU61kuDJXvhj",
  "key15": "SLsNEngQwonVBd5Z5ficHkaJnUETqCGYgABzevZBPpJxFusN2Ry8dCGW6ubPsfsem1ATjm86FzXyQ4HMVBopTtd",
  "key16": "4uJDwijS41cX2okRdVU2NTxeBnBwmd1J9teweWSCGTEe5UF3NGLwVoeHeEbcmRjChJ2hwkabJPphaZWX8mo1DNBp",
  "key17": "sKoUhqqkvL43pqBPUt4RhXTNku1VnBFsXwRzhPJQSy6FqJTGAtDe62NK7nNB5PiSM922DzWzBYf8QpePFdkhFmg",
  "key18": "4qLUREvZK6cWYVYnsKxrvzMMMHNERUDaA3Lg1GNpqrPoJ5gfbhsa33dbyJQdjNvy81Gdn9kCP8SG8GCg5q4eJVCG",
  "key19": "3mLfZVpqVAjHLqJqDr6pnLHjnFBZ4ZCzUiXRgpzUZYCkHCSBKMyETTnRBad7ruhVvEXakVqGEa1Fn5B8Rbhwtxid",
  "key20": "2RwewusShxGQBaNDdd8jNXNtpyKozJEj7DYcRe1HfqRzCdsX3nKRPNH8bNReLLCdmMmfyT9HdcHXFhvehVi69f5a",
  "key21": "2euuBzaeZNLNA4z1ijVSrUGWmYVTekTbcQbBVA23323wh17Aw1zMHibscCK3tAo6XNdDmenYAKAmj7WfPtBg9Stx",
  "key22": "3vqAZThnn32CvUsmxDgHVt2Jc698yy8Hdy1Nxrc6SwwzKJmJMxhUT9Ua1ThUjqZLdETAfvd9psBz4yYKYZpZhHe4",
  "key23": "3Uc3ej7MPjzrYTfupi5uDVKoeDCQxw2W39Zha7zppsWCSNPKgmguudWxHBSu233GAimKxX8vLtzHzJbmpvVkCD7A",
  "key24": "spwXQFykVxuuwwtQBS59szbxJyqdSRDRqK3aSW9EeWN5J2MJwcrBkgwB2Hqoqtw4HnUYM92xw8RvNzVynEbhNzb",
  "key25": "5kyAnA91Cci2twCo5nsaHZXskqnYjj4jeZx1bjCd6uc2UsXvDKRvjAjZHY9jm3mT1aVVN6JJkNaYPBTFxmozdxRd",
  "key26": "2ekUKa2QAEG2LKn3jUsw2MhuF3FxuTJQ71uozx41RTWPvqhEvUSEgA7hm2DUtUGfFXEJJZwkwaun691ictfF5ozL",
  "key27": "379Q9aqEPAh9Yczx2Fzmivcvfo6QvUNmfxeJhTDnrFYLYkKAong28nLzRsQQfLkXArsqBzzuwPdpiXKbobTVowPj",
  "key28": "5N2S8kMKmtbcQnrXV633LrMsTAp5csjwE9JV76LJqxh2QKdvW1tyhqDfcY9eub7ExLxSDWFQCP8cVu4Ed7rGBFGZ"
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
