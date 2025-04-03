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
    "5mu3d3xG8wPRLRwt4bckToK2qA8WYmcSh7cgfKSDUrtQbqNGzGJntUZVrSHixv7s3Npb2jkw36s3EBw3hccUaydM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcUZdRQDpRJtX4Co8asbwAKgfWCB1So9ys1WV79jDg5iTwrhNqTZJrEzgE1hM6gtocpek1wC8mG21uB88L5TBWD",
  "key1": "4x719zC1c8BZ5FEEfrkoog1WJ4aGDbSmM6imBYywoF8xZnH9pCiHWvo5391qf3HqYJg8eNiuypX9Hob1sFRX12hi",
  "key2": "j9gfFuuvnPQpFvtwHJEaAt5pD7anAcg6KWFdqj9tTTm6a6Xai8MCQf3VLNVWQBkXboCsdXKEHkUDPTT3Zx5rg1h",
  "key3": "3CghYgzQ3ex5iSwRDVQYwNHC2ngGuYPHFDa9hfjEdPQyVwzWyqFytdjCzouXqyoi8aF5MiRvN8arRY5HM69eKW17",
  "key4": "yk8VJKcYVFXQk2fcaWZMrQHQMKEWC2PdnntjmpDUKQRqib4oJnar5xStctjxRQnZKh2wWYwpZJx9VAn3BjXb9jy",
  "key5": "5QVumrZ6dd4nYU7x3P5haKbNNUL99EbwPrPDrqT4bzEqkQ93EiNGFR7j1E2GfaMHGpPRMZS49tmUZWaYGxQFdD7G",
  "key6": "9jERmVsHFFJHLSYjyLv8DfDGX3b3fi5VSY1fjJpay6jSL8FWmeuDuvDJeEmmV6cPHhAdFs6y1deZgT5JaG9bUuh",
  "key7": "2wpc9sgvgBbVa2NsQ3NnVEU8xcy1ihJTnd51K9i91eDtxFobai18sXoXCCP6bDt3naJotTYpZkjNEWXx4C5GHoHD",
  "key8": "2WqnYFTYoEgnu3dNAGa1tuHSsme98ihoz9JfCMPA6Z7Ypo8p9V8U6Mb2aJoTVed7D8cJv7av2rsTGznuA8VzW61j",
  "key9": "4JUY5N32NpYVGDg76yKKuypGKuh24DWWPuYU7wY65hYc62n9nfQ2Ef2bXVp4CswJk7m85LsRR7vCPZy6v5bR1ZFZ",
  "key10": "2J2LjV6FW4Gwasio8ZkvrxciTz5GbqRtwZco7oqji93rYyuQg9aY8jC6BN4srEshJRnVWQy2GucYKvs1jVrhL4cq",
  "key11": "44zPNzZNaExzhuxi3K4X4r9xbd61qdjC7wQcxuG3ojzX87BziguSvn26rU88tSduyqmQrAjBKtVER2GXAF7pBrnb",
  "key12": "DqS6CrbSjazVSDUp7P8MnSRugQCbefnQ19H8iuEvFLq6NyWdUqu1kWnJpzN6QoUHnaKX3XGvoEo1wqMRKpV6FC1",
  "key13": "5Tb4gz7rm3r1vA48Et27KtvK6HrCpLmBk5GTCfKgvSXiZhJkyuPoii85UE9WkNRyntwWtJutgFZUUWto5EvygcqD",
  "key14": "i3iARqAswKWwFg2qam9p8tiXZLPj2JeSsyHB1W6SBg6Rej2Z3SKD2zRXdWyCUAoZ766suhNskhqe9dDsCudfu1B",
  "key15": "3bxoz3nBr3suetQSmqk47sBej6AKXnX1qZiVc6rtTzwNsFUDgWERgArmn2EAbNvsPdct2aQq1jdFW98tK4EXq286",
  "key16": "232krUgwRP1wengBFmcFGA4XUS78McvjEsWtSNRxswEwVUCaYTeT7jhPoSJDNBuroz66f2U572VC4fcKCaj3BSWF",
  "key17": "5ZsJirMWgPCQhaV1wkybNUeSXJ6oHaHJ19NyYM8F3vzjGXuEah87akQYZzV24bsZjdymG6QgL5uWU6RwM8nBWAdv",
  "key18": "5Z4fq9R9DQ44iZby8oDr9A8JMYQ3kECEjxBxt5yz2s7JY5nhiuY7vD2M8o8CGy5XMtS97xBHA9D4xpGvaD9sdojq",
  "key19": "n3ckkQmCEKWWD1KzsmrfDDNQH447KBMrH53qQVNytnPwYyACRB9tNKpxrmaBK37enSysJ5VchM7XkMuwJSQb5R1",
  "key20": "A5WYPbUVwRjz6jjvnBpYK1Df8FRrK2ZDX9o8aBpvDP8CqdzCfHk3F9vyfKhnchBPFiKELemqNtUzw9e52LDfrmg",
  "key21": "3HTJEqyp5xNvAfK367aB1HVndssRmWwopicYSQNoMQujmWjk47wxD3s18JfqqHqDbWPC7vVtHsprrdgUvMT92SfZ",
  "key22": "2KvE4wfVcL8eEppzqqxmDGrjFnA45yFHjMQKc4HwVD1RYTmvd9WVSohWeh6TeUZd8oct4t7Fozw7hRUvMCgNRcCj",
  "key23": "2vKrrnQEzPsw3mRwMWus6yH1YYYpyZWCSwD4MHrFe1nwVYnjxu3QgQedUed4YXaWb2HmRSkRJof3pcf9wWdVg9X",
  "key24": "2qP3DnKHQBQDkQ5oSgL1qHcm2RD73sgni5HDUdGgv4W3SHxp3godSt4NM1fC4peL1zM5M6EzBTJjggxR2NobFSLQ"
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
