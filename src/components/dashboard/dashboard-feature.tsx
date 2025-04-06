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
    "3RRqHCvoXJyKGDasKdVEBuyDS4UuJaoUrpW95b95Gus4R84wRnM391Gne2rZMkXzXVS9C9KB5bUAzNe6AeVHdeUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLq1PE8z8Mwdgnmrg6vfN7vMjw2w8JZUGehTJMkx5iBWHpb6uQE2Z3KVmMEp8qm8vUZX6HP9NwPr6CHSN5i12sd",
  "key1": "3nXqVXA7hyRzVU36RNeJRcD4rz9iriWUAMoFTyWBT2efSSbf9QHWKNmAX6cXdG97Vmqy5fJ9zHvzPQccJjio43VA",
  "key2": "5aWsj76JSPsQXKzbdWwjxg7UD9VRgysNZ2QEsnswEBhdHDksgcog6WK2LACXX6ABh2UmJQ88pSGHUu9M5mq9bZe3",
  "key3": "4Zx8DTDecoct2Xc35Zf6Me8ShKjGGmL9TbuVBZc4vr8BZyTDmkV1TE7d331mxj7QqPFnCqRYkN2ZUo6xd99g1vab",
  "key4": "3XbCMD3EXrAugocV5JGbJSbkFDYu65ewnVHeWGWN4s377c9tBxnakzSLWZon7zE3xiwke8ZBrFfm9YxPD2mSSoE4",
  "key5": "5LYVJDbZqWX5RSHKHeQRpd54Z6zDNDkax3FJVv8HkmFMX6rCHi6H2VQK95fsYNu7zFqJWBnF7b83PDuS73EuJCE9",
  "key6": "5uuVPMoX9DQBQd7qe3baNZ5sdi7r4Ak6zRWS77Gmx6Hb6j2SELjGjYzMBEdr4tj7AYg7RCJQJsreoAt5sxd3nso8",
  "key7": "2wifhwX7ibVqF4oDgPdPEAuoMTMGQaqgioFUbjrgBKvGUTDkSJVaEjZpRYqswqEj4tjHRG3tbAGXawYFSSXMHXkY",
  "key8": "79urafefZu4ZqU4Qt6nxHs1mzz1UjPdP7H9vVvbxLfr9WYPqsB71Y94DXr52pEnvYcKDg1vsHa4w4gYab3PUETA",
  "key9": "2jveTiQuLnCQaptgAXB8FVQgBH7dat5FTKpF8kdce7L9SuXKWYR4KfnqcpjMBpXFJCSiQAmxm368J7aeRxqXZsw5",
  "key10": "65wJ7t8NHDxN3nWtHQyTZ3GUCTWj8xHUVVmN34vngkjr6h7bM3YZ8mJVfL2H6MtzGqzAZErcofLqVPpzM3o4gQrK",
  "key11": "5iV8rKbdiDEqzCntMDfTCu2FBd54XjokXidpKriZSbBpnAVQ2s6RK32DEttSYHnu3zrKo32DY1MpwQB9Nb1uU5PS",
  "key12": "5gqqhh7k5HcwFmYdzvbDsxybJgNDEZMr9oqCkyw5NigfjU9kHUNjD3jfa4rWs4VUfbnhxYsnv4jYAaLCtwcWgpNw",
  "key13": "5ts2DtXeu2ZA94MaQ7T69QZ1CddKwvPhpoUvHbMqJUkPkteLKsK5tCnCJ5n9y6XQKvGq4pNG64QvGAg1s9p1fJ5k",
  "key14": "4BE6wmCZcBdAdZEstHwsTifJ8b4BBRFEjjtkYhg77PMZFDDQ1J1DjuTG4CMCWvbeUzqrvFrMKsHgWRjAeusfR9jZ",
  "key15": "4XtWrCZDUX45MYYaMfUjAjoM23U7YMpDvYZtwxY6akhBFzHTBFmumnAwS7C9RvsEnG1kv96AHgH3jFiQ3h4uGXRq",
  "key16": "ERKXPp5DL6Gi4mHYHPwZepwq5YsPF72goQSfWiXAAj2jT9nce85ozMLagAsxrZw2KzfvcYiAGzqvRauzZQf4sBR",
  "key17": "362w1vCxS1aLb9DEVAh7mFJbRNJsVviZx1EBNd5RzyxXftxi3KxeyhhxyD7e1uuNCwdhNNJSEG5fPrxrwJ9xELfS",
  "key18": "Z9RyJZjKJjzdnStEaGgeKyo38jjEy8nG621TtmeTDmkMAYkLREfwcQEgcViVCdd4qGqMnZcQZ5nC6LvAnRWn4RA",
  "key19": "TbX8bPjjmTmG7mLcCS2Xy2PXPx1WfajyZmiV3ujAYu9fHLpfU6n2CQ9z2yMGvM4CePGDAoC9AGVNknaV4A5DMHr",
  "key20": "LLjqtshZYWyCVTpePLf8QVQf61bcSprQoFtDHiFzzt9h94u7Z6BNqBRBKaBN7DeVYwZLurE9CuEUJUZrmNAMpZx",
  "key21": "4ZbvFvy8577fdZ9NUUNv7uQyvdv8EvM5aE5P3w5D3gzennJj5Xu5j2Qxn3eSU9gw3aoUvJ7b4Vq6spq5MSsMYUJa",
  "key22": "4XHvMSL4arrhRhkUuugYruiByMMMA1PTjTZtqhR4iWwGsNoKpwqqELpFDQ3BgtypHeQJDc26AfPhXcQNhybc2XsX",
  "key23": "5KvdC3cEXXTMteSjjPhuLL2xfPatiXMsWUcgZmczoYTwq6HVTJTEoLWCNHEqjC4j9UZ3NBEM795UKJYdsi54U4kR",
  "key24": "33rVTYfLqJWMsuV2XQQV7Z6mnmuhuGG4GfUtw3bLMN8dkdc16MzJwY3rzAHi6QKqBHPWvwGSKeE6KJwAzG3mrsJX",
  "key25": "5bMeKb8nge3g5yp7C2HjKM3hsbuRRcMeJTbwnAf4ZVdGAdxToEamRCv2dQf38iGHc5D76zSj3zFJiTKKR28pm7JE",
  "key26": "4meJJg1oXvHNmrkWHYPNPB9MwUSZRFpvt9sprRqyP9GopNZkzPpb1mCpTB3yY7XMDEwV2FErqgN7X9tSGrM8HFGo",
  "key27": "3Qk23XsbSPq8KWfwtyuFkBGWpKxn5w7xi8QPe6gvuzu6RWAVVJyaGb7h66pxEBz19F7JBpBVJHL9EdhBVWWfDbUp",
  "key28": "33TJGmE4nxo58mZkKDNTcBmZA3LbyEBnPaPiios8mueREJzXis994mgbBJFGomXRQEjbc5ybDULDB9aWFUTJYzi2",
  "key29": "23xgYHvgTaSCMifob4sbgJd6kxZdEGhi6R13mu8v5sJp4iDCVFe5EzdRUxCg5sXju2TBtUnrXKXZKwzdn2kBHktK",
  "key30": "4g5WwzSNqe72buSRtNxiUp3Q2bvLKWocrp4gusCYg5GQEFNx7bk1c2X2smBM3sCUusptugrJCex6BuCa39V2WgjU",
  "key31": "3YkvoQ9QMTNZM6DR6p2y8jY8XvgTHpV1rcfaqkywbwauMHfxwFSa9ZPNkBDRT5xQwdYmTeWzXAG2qiifpsPgCgTw",
  "key32": "3SjaPgZPP6diBuFALGugv6cXR1qViX5rENLDRVN5YyHkPGXEhL87h2Rteg7T5t6vRzhUmqPbcbsFjNK9UQ3Gk9W4",
  "key33": "kY6eRv1SJ49UBDVjfbUcHBLp6sYk3B8oE1X3ikdMBRB9vYDDeDTnjJj9KJhwxVPaEyz79jjUYyrRAgZ9rqLLEqg"
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
