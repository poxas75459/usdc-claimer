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
    "5SGHnMdgQcan8FfAp9sNiLkfygNNogoL7ZcZiZzN3t6Rf2exMRpHTjYRDxXEV6j57mMBrp9p48XSjP7o5F9MMqEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPTBxgi1KBt2Dk9TaYDw4n9VhMw9puDd1vgAGNf9A26V264Ht5VYf9ZuexoHsXEDJX4UxE5rj9uFo5rGKiJEs8m",
  "key1": "2wg4YypgccwFi94GWguu3pUYxHDERiQa7AuBgvP7FpnHC4GFCeMDt98kgTRUpdhQAfMPwMVAdc4cqrDrDdR8C9HZ",
  "key2": "5fTrHS35oQUqQfgBHv8HbgeF2aRfuxKE1s6SA2FrGA87LWDJjzrTUfUy2fQZAjZHB5qNyw8Kt5LGZE6iedpYTAEy",
  "key3": "4tMpBbXxaWAZ3LmR5rgjRi2wzhP8aCCHga8KP2KCczufDVcoDtoDGmTLhui37y6XstCYaPGtSJnm6rdRgyQzStSo",
  "key4": "2bwyYMuQagMcBMZQjp2xD9ARypgeZxdMhwDDy2ZFMrfXxVFJCtunHnW9HaCuNnH5x9tjpDCCEeFNSSfVuDazYhmy",
  "key5": "33Ze9vSRiz9xexoTregnjLEYS7Q7ZjrfWmgLCYeJqTxaQNW9DdwJJ2Az5nxSMdLzyQPbGGmH9C4FdYCz5N8kjnPB",
  "key6": "5Qc9XEHYnxajy4KeeoN8a7WZMNEKwrZ6krNWAKcwBrcZEiiiAvWb1PxgaRUJCWmvE5zYEzQ1iiVmRHMTF5T8weA6",
  "key7": "4Sov1ZGyp1Rr3XPvnMPUkGNDNqQibhwEdVBS99Vj8JrmVqUGYNFhwnVuXv4SxBsmwNcCSL5qqob6tURKjLrQUbhG",
  "key8": "2TPBTNFKZZ97SBM1xhLtePTe73pyLrpRWvZkCoSDEg6dyA8WKLj9q2fKeWVSwgKpFXGQZaQRDXpJHrKFsKW2H3uh",
  "key9": "3eN9tXKGqpRgzicVN6moasvjhvXNQ5qmyQRWHHzj1V1sY69PJeN7o3zo1o8Q78wyjHjuFxBraFCLe5odPK8D4zSW",
  "key10": "5Q4cXDdhAVWjAFN6Ph13m39eztPreeWxNJGUrfGdSm1JKz9pHPEWrDpNWi85zQTSgXRZXm4sxgYPqH8WrDZQ4Td9",
  "key11": "5XCjjKhUP2xqW2fnDU8kDR1MsX5CHeFbrp52jEh8EMXcGvRYatjsEYoDJyd9g9BBxNc36CLvU4qoFwsJYLszf36D",
  "key12": "4HPyRBrohcMJFYB95KY5JCHbQzmytvqxvf2PK8SD4YJuRhEXRo1LqE338dNnrJzQmLLWkkQLMNevUU7wPVDsWTay",
  "key13": "2SUq3BT4FcdiMbUTxcPqE4sthyaH8ampdsdCXcwuFxcUoRy1uUbp2QPdQgwPS9ZQFfyn4eNJZLebBgTvgtWNh2Aa",
  "key14": "3HwrzLnybLffjBGeNycprtnR1UDxMrhwqR2hUSNFspHuPXEmSukQR3iDLe6gJkMqyCAon9TT3XmCHJUEf6xRn7Py",
  "key15": "4zs7jyKHU7nxyCfDs9XLBGvb85YBjErfM9TiHZ7V2TNQZLJtJb12SeL7UtVvG7YYRAT6GfKzXQUKNBrZqUA6Sx6T",
  "key16": "3u95ZqnhcdJftiKnpFku2EHKEhibpCM1CWpGV8JurmBKbwMHrhFBcJLjzskFMDzS39mR9MuUMEaJda8QrpSmjPYj",
  "key17": "4ZD7Xr2eZsD7yjzhpDZs8MQ99simAF5qxhHXxmprnMiHigjwcTMSiYB4T9z6eH3jJMHDxStjDPqXS9MQNeWA5R2b",
  "key18": "2fiArPQDuFP2cfRdyRFNg8omsqxbwC42Jo7zj4YBfWRu4kbtQjxBJ7S8q1uAJA5XSncGV3yToTZPNpeoWHnsNc6q",
  "key19": "3EJYSD6rq9dVssSj8XaTidqPY4B3TuycNcbBBJUjLgqhzhzCtKJSyJea1M8TFyGA4sALxAvvSnHgnC1xgEcp678h",
  "key20": "5xUAkVBksQvRd7mN8Dhi67wUYxcadJN398bmDrPwFbzKjHPpoBX8LG3WjYjm44jzVrWC7Wsm5zqY9oiPwxkLMjkE",
  "key21": "3Kqob5BrXSiEAzF1xVsL2qf87sAsgb8cwMLwuYWmea4PU2fxeE5QnE5qDXr9CnfuxQnVKbwCqrrEJfAHed8L3svT",
  "key22": "jykTMgEjaJ6kkXzQoo7BRufpipnSip2ZfGx4T15d2LXj6DqaXn8G9q5XPSem2MQVEoMAtysyQaahtqt3J2fzSJ1",
  "key23": "3UhAKu4M5cfr6DWrwTNj2N92USz4kRRrE5E1GXUvBkdRtACbehpYPWP1jkeawxuJRXQhAG7F33dSDfuw11ZanvED",
  "key24": "2ZeYbhNGRjqAiZaqRCSenJaPqCB5JvvDn1ZrzgEjuRAt1yTqLSo4Q2wGA97pTXZ16UyjQGdJ7MhTRzm5Vr7EwnoZ",
  "key25": "2z5SWo6fgH97ybFnNYNK1A7cTwjiaiZjLxKB5R6qHYWYWQwDb9pXStiQfzxdXYXnHU7w3LysceV6C76rkb6BV2Lp",
  "key26": "4cJPHeDveeZCSNBkJXruxNVJa7a7XRevb9Tu95SFbCTDYCgZSMkhMx2DvPFDHPXuAihK27FnaFD75gU2d8Vq3U4m",
  "key27": "5GqovLVoW7QuQJtLC278tfHwrFaHANUunGUHv4NGuox2DgQXRSobNfD8JA7Pn8CPQkGyRLUwUWvn1wVscBaYLixV",
  "key28": "4wqgBqGfKAyYRUdKsoVEtSGGGAc9GZ3Kbm339aBjQQ1vHVCCBv11ApL4zRisfBX7t2AGutt9igivHMcekDZbyTcf"
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
