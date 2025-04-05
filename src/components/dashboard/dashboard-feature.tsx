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
    "adnifMafGdXdLRQUXS591wsKdrD9T2DGLZmgGzUh9rqm9D2Ee5wHFTN8v1PC1w6RdwXq3MdviNBWMg9hhGm3HUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yiQwJ3wsG7VvvVX9gTdHugaupATGo29tXudBpK4p2z7mDSR3M3tbxiYkHK3KU1eUA7ASCZREmPea1icMYGc2F2T",
  "key1": "2ad1jiZpPyc9LmZZa3iM5DEAkJ6smso7zMQWChHVRxQKGJBpyLWuNRBxVxTtMMZLQMPVxszeYkKn4cXECadwfH5a",
  "key2": "4564esJ1wcCmB417Zx3bsxsbTY9bXjZ2mrCFuLiKA2hw6pzqNrfXFkbrffrVGYzQN9p2q3FnvuRzUXujGxaAgGVX",
  "key3": "4gQxcoooj81VW1RKmesUTGc8Za6oCYMs1q8FLh2rdjzieRnsC8LqEgFiUadyu9dTLFG4rWwnTnELPvvGxzf7cUqB",
  "key4": "4JHuwqvCMvB86N7UwrBt7iCCPFVNMnAeexaL3K2cy39BwuHWK8zcSKQy6rKU4myLbzvjEMp6rePNQfZFByUveShE",
  "key5": "EGaAFU1tsk6wDHRyeuWRNznW4CvxCCkXwwbDRRefEdZ7ZUUaHS2Xymze9D5DrDqLkU3qtQCfNiW5nDvXFiAB32Z",
  "key6": "2wiHUrGLmXKtoYNxEdpyfUNNqfsYfmLmXXsDM9nbjXyebarRA1V5FFVGimfiaRqN3oQFE3obgbng4yXCCNY1v6cD",
  "key7": "5s6ag8Zb4Y4NuFgD3eueUspjDaDRZacsVxhmPeg4EyC16Yai9KZGRb2zePdjEUyUf567NS1H4V9hsRXVK3MATWwD",
  "key8": "2ZNWXwMjt242dG9n5QtN8irke39xTwrmvHHCPriZtCwmyEVBDoSD372CTDnTxkb1XfM5yAn3VrQ24zoHQcHrJt1d",
  "key9": "3ZykLiqkEhnfFJLoGWQSQYEX6CjaoUZ34sqd5dZCfdWtj4mLc3GG9zM1sjvih1M1Z9fDpCMFknbj4mfykv6ckoz7",
  "key10": "5V1n4sYnXNMcKToQRcjyAfdpbiFZJFAX98kXSG5qUCTCph6qoPAYXz8q1FQYKYR1pLrmodjXaCFuULzfy6M9agjv",
  "key11": "p8FL3NZTrbG3dmN8jFgVyppehyTmeYQYeMqrCPnE7KoTcbsCph3M25GJN84PgazvGNHFkWMjsnTPSUQKXMoa3u9",
  "key12": "3UGtj5PnWmycGMhU7uFkh3zUH7n5BBpFCZLw9uGVLirFaFe3ixAfWTXnGQWKtGHGWwPwajqyf9ccqBK7nsD56LXd",
  "key13": "4GUyWZM9NCR1YSuTiEXeS6xRxAiy4mzLTnfiZuaXRzMAnSRxeiMh3FzTnXt8UtE5JnakzbBTPr6Vi1A1TypVeaj7",
  "key14": "huHnq4SGDtU39bDLZ1cCTH6KsdikYR6tdafFSFiUCi2tQTc3trWsYqZAiatyum8jqFBJntkYQ6YjT4trY51TVun",
  "key15": "2ikXjK8gxQ27Fx569LwLb43w1CzTCcxewuHZmUrLQTcpLuEAyWbrQXgJhgAYwSsckQGw55YUpLykUvYt87JaRB8c",
  "key16": "2AGshmzFwx6WNiaJ8XxfuXGK68q6PNSURjMuz84rAsiT4GXThJbTXseiJHNjFeTwXBjrxFYJAwesnsHijESoK8Za",
  "key17": "2zCjFG5ZrnpG7JVq8WH5n9252fGf6EB9GvYNFamyR2VW8ghTT7uHxz6xaKDpBPqkVzuZNn8oTnarYffYa4Ph1g2y",
  "key18": "4XghwnzoqPoKns8LZQinVyNXQEq4b5U3xY8hPyWRccvwv81HqnsNUAuDrnVwwtksusmt3FyAu4DGMjPaswvskZjD",
  "key19": "5Qc684NzHNdi8tnBH9TQemv3yTnTRGRAEzvHaQvQ6c5PofXujKSrHgu2HAC3UiDqr71TNTfD1juaicTYgfJFToSQ",
  "key20": "4mBLu8yGuczvsUJyjwPisM55ifJnpBPLkzF2WgZoD3bDoeWkNJAixhTn6ZHW69k6nKt5DGLRYMrEJaFwDKQfRxkt",
  "key21": "okfR6BtQWaJm9GrqBAJ3iyLqNbzyQrs4LooUfzXbYvHwXi9HWLzUvB37QzhMyCrQvhW8VRFFXj6ukdJBx1FAajR",
  "key22": "5db3uurYKpehuUmrRvA5XNaiPxFdYb5aeYPcqG65eD8U67h9ubwRNWhnRLRgjEVQGKqiccfJJq46z1RYHy5xAzws",
  "key23": "4DyppnEhdS3JsrhVyBgMmj35GBNaJBS5nk9Dd6vUfXPR4R3GR1LQM8hPrLAhbGGDp5LZHBFeRDqjKkWHMwtC65FV",
  "key24": "54h7jEEg2ghwuJZ6fFspVCT9JVTeVgp9KmdJLxqkBeF1qeydkpLsHnZQKskyCMgUi286KgFdjHxA9FaPAe5PGc3T",
  "key25": "46fpCdJknjJtUH5yCzXM8U1g9orgFkR1JeMuSHmFg5jAxWY3XpUckRFg2MihtvPX9LPKMWgKNZK8CuyjDWWELGnY",
  "key26": "3XcY7E5PZVvsmpzjwGQx85sLNCGYAACW9Q2ukDa1jJY6kB6nPogFQicDE99m75E91XtNKd3iKZxiy7ZRZBvRQpNL",
  "key27": "2LuxjFgeoq8Rs848RAFnv4stjpJ7Yp7BbVViZbkXiGe9XSH1zMgw8GCY8VV6Gydf6z6uMBPvt7Po6SPgn4pKzHT6",
  "key28": "2nxBrWPuduuMjVT2whPSkZrnL13NVLoGXgFBqH28Jqu2dAsXMGDUiyYPRqiAw7YGkDq1w7jqkt3SaDMsAdAhqNFc",
  "key29": "2s5F31WTDV3NpWGpDFbSxypnhygq37haetsexp2sLhqk3uDE4UgqRpb1AUqnFhh1m2UDH3F1S6jCQ9Bsjy1wGxT8",
  "key30": "5yFqBQsa3epR8hUpdUbQr23EoeJFbxmD9akr5fNUBGRqTUVqjQRhRU7qRVhVBzoU6rr2sRD7ANyoJALge1jBeaaT",
  "key31": "5fUC3cepVyeXFTdaiLbM6RPhnp6Fhgm3vZuSHZGJQm5jY7b7ewv2kyJV93si2emg6RPAbZMDhYYKLZULkXFFhrM7",
  "key32": "3CXSZbpwtbHBcKF8SzuYeLFGT45yJ4vU84y6p6Cy4Pu1uCU4kEWqfdW67dbQvhThdUZhmbnT6rjSt5mNEHptRfM3"
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
