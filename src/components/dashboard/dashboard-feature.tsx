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
    "4zj2dTdTXqE9u2BC7hX9fi3R33FHnRbWxtA1i9GtJ9akXWGssEVW1xxdnGqhkEAsiWNuHy72tCPTY6hiuy1vENUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bd5T8xPSGb2QoFTESKGLnBEa6dB5HVoT9uag7n7GsEYXxNARgyaagaeFQ8cLbjjRKgVVGBCSj7hWxJSWgff7WL4",
  "key1": "5DoPWeiiHznFtjgs1owk5k9CnM4ARjLmsMsGdxqCyXhHuzhQo5JyYJmdq614XX9QcND6exXZDTfXHQTTkzjqmZag",
  "key2": "2XyqfgFMk3BKy7myNQDj5SQDgxGaivFG6K4cDxzVNAV4ZV6ziL8nje84cuVu6x6mH5Up6DxXPKUJ7mW6yEE9FPWG",
  "key3": "4fqang5u42x4xTfgc123pZtEZ6ZkMb1rWWowmCzWrbKTZ1vMectF2hpSqu9MTeYTWbuJPME2ZnLeZtcr6FQzkJub",
  "key4": "3o9K7hzcqcUCxZoB4qv7qh1dJTCeB1oEGKjPfyftUm41DLsJWD5fcJsViXPj33e1Kpzp4Cghkvuccq45Qd4Vsc45",
  "key5": "3T478BtNipQoGt7QYj15XA3GMyJrXCeF3Ljj1XiAUJw8xAMmKQCk7AiyDoEaZVyQFsyrrmQrXQiJBtZ7ng8PySkY",
  "key6": "4gQZyneNyYitCBwmHTcmCdmdxo3N1Q8XNMSeBTsYvVyt1kbcgkY1C7dToyJDajxkFSXeZFeFhRjr5h32RtL1QCvS",
  "key7": "2AG25vPakvDo4ZGfJ2f1fZQVfb9Tu3dBGynuSnjWDsRLPampYdLC1CUPwx8SGQzWYJo33zvz91HnzAZfoaNdKuj",
  "key8": "2QqFJrv68AP438oM3tWQqGL4VwZ1qSNDL6V3M1uwW1wYGpxUpHThtGrryicfA1jXEAvtd23ea4vTokvXDSKtyYK7",
  "key9": "5kRfZUQ8if4wZW9KkkFvrdjWzgikjZNNa3W1aW1AjcfdqXzohci6h7Xmw4faSvkKgi2Wvk7Z18ZWqyLJiwzoSoGi",
  "key10": "23JL3KnZLH2gNBQ7wKRAAouG6KQbPyjYqfG16agvZrbGSwfPXoDEoWebX2KNsiBjGRQFzAh7tBh35j3Wb6nVFBuR",
  "key11": "3aSKfB1rV8o3uU92yG9Qzmfc8LnaUNdzaDtXwJeBMR4WdvP1n4FyaiBRqRmJqSCtnY6xzYiV3yF3JfvUtBkgFr9w",
  "key12": "Nr5LAe1cgDLPCyMSqeRDjntvuy57tRGGZeFbzzqLURa7jTwdJKDePYmGyFGX64am9x3fSmA31YtFTD3jQzuq4QT",
  "key13": "4DwhkgbLr3Xw4UeYdnotvJdK4HKe6aU1Kc6MapuD2dLZosU9sU1D7jJTCzWvCHqjfE2NuB57HniXRfxTxSJeSwzt",
  "key14": "5Z3trZppn5rQFR3k66siLkSoW6oXr3tbu3agdTb8uWZUbf7aR8SMzWDo3VPyiG45CXJQkJ9SRrChTAqkmGB1sifb",
  "key15": "3tJ2kANtSQuqkBKbcYD4DkG2da4qqxTJbJkpjAntGizYTD9HcPzCiufw5SV2MbTnYWJHNANsgCjumzpQjT97PBaA",
  "key16": "3D3sQ8d1Q3v7Y7dRA28GnyuHHv5hQyjJPDnjuWrZHxAfQLdPiBAxTF49aTj6VpyTYJavF8EfokfNPyd8Fs7n11qX",
  "key17": "5wgoNzFJ4brdMoojmyBh1JC6S519JrWZjGkWF3ZFz9dKWeLyYkLJ8BdH3QpXek1MBP8dMdr44j8c6iJGfNJDLSSr",
  "key18": "5yupA85jmbqSvzoSKunCa6BjFG4bu5TnBiLoh6GKZzrdHfFtccDtHEHRU8BueC2iL8xbhBwhQ4JJAA23E9fkcgrv",
  "key19": "21bJ67vMQmW36aawkaU5Y6PH3tJkmBAYtWFx8eQtp5PsA83aZHXHBshaYPaFQunRfpib491c7UqC1DkEU51673RU",
  "key20": "4TN6x79ir3EhWBhy4mfDPPdYgZnGGfyZEU9trtyzzEvM7RmirxiZrgorjAEyT6XGcCMcZYHENDeLme2RTUbhE6Hc",
  "key21": "57ZxNkcykv7VwgE49JiPm4ivNN6b5ouUmeyvsQxc3Zjhu1XsfPYyhzarfQysMRCHFGEhmzDKnv927Ly7a5AXphBA",
  "key22": "2DPhuSy9dyeRBS887yLFUKQU5RvvF8GTqRFCeqsWqvG28TVqUK7KxUA1RDgxQNTm6UnanaDA5ZbgYkqW1rSZbkn1",
  "key23": "5DCytFnmDhzPvF3RgkZ2NLXqoH133Q8aGRWjJiuT1akFWfK7js9vwxfjL51jEStxqNkeKa2NTQmiiexFAMNiaJbo",
  "key24": "5kjZ8ZKBLYoYdmvFpz3VnecgRmGFpnocYfUaJnvguwgwiuwdocS6Y7KgSyn3NE5NYrzv5Ecn7pZYhQc6yPaqN5ts",
  "key25": "4mwaqutAyKt43ZHQnxECADfgcRXkANHfmmKRaLaXL6KoTfNBYyB9xV36q4vgRz64ZyAYMKbp7sUBAKREu7LzA8Kp",
  "key26": "4xzDKVpFmNMTekVTUWZ59k2orGvvya3cz23LWB4QXzeZNiEFZM2QXW3dN1J7faBzvMSxCSSEG4k5iCvUVAoZgZoR",
  "key27": "233rBCUwure9zoM4tqmCFuZsgnyXUnf7638RqW7pkckdp36N4N5EuCcXBmR4FP1yCnU5KxBTewQjHn2gdNeMtraQ",
  "key28": "PucX2WE5XJ7g4GLQhfzTapd2BA3mVR3nZQrenpPVMJNmpgRxhY2H4u33yZMCdtryckGbftFVCjgTaWiodmUFbxb",
  "key29": "46ymn9w9ZotDmTdanHw4vs4ubjAMJCCMYHqe7ocswTzQE1ts5xC7TJDpvdvWMY5icuF4DgL7gCTsJnHp7uxANxEg",
  "key30": "HZKNdWkzYwcFjvC6fEKXKPWhonFjvGd9UE3YgALWt5CacPoYNtWU781xpPpBUGFJ4vZBZt3pd6HxZL4v9somvsx",
  "key31": "2GPV82KCyNDLqqeDNRJHzLn3WJEqKADMaV8pAnZBnc8nWoPofV5rZDPuVexMUTvSduL2E5pHPAWzHDs9r9E9puhr",
  "key32": "4Mz6Pr9igeawsY6fhaW1ZwZsNd6cZALidgf4giLPu19RybDX3pYeyegCy4VqQBJ7Vx2yg9r7dZLb2FcUeB6C8EzK",
  "key33": "2qn4MH81kNd11XTb94c4whfDAuSBAbU3cujAGffYzbcYQycDSDrWG6PyPTkXjzbKMZgzLcjmqJkReowv4txv2ZfF",
  "key34": "5LWYZzHk1gQ8f2PoLk17yhZDMd5RtSyBjpPwT8apiM9VA5MrpxWV1pMosbjkA75jQeJahH1nGXCCLL1JQtaC4LXQ",
  "key35": "2S268YbjfKBjsb5aauNTfCaxZLo72mxrUiAAUa2qsLc2c3vAH5QoA6W2kmmRHYwo3S4m5LwPdkeoCzEM3HM6nwWH",
  "key36": "2oD22WFiwSZjB8UUF2bNdYMWeLN9pgryULB6M3ZFhS9DDpMi5HRZWBx27wj42QaNLiSPrrELnwofbytSxCKYrMMC",
  "key37": "5qTmeWEYYG5RgcUbr9NjM6VdzLtpy7jgGznziaToReonySz5euCWKMrxokbxykCVhnkwAH2CJie7w7FcA4sqxbrc"
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
