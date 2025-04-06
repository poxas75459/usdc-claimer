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
    "px5mZ9bCDfsX3mHYEMFKKFmkhpFLy3Mip6haLWC6PdtHthvGR43KxPunbWFv9TFQYQi4rgypLbEEzZ45Txj3CSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdQHmXMM9JstiQr6HKhBJZzZx6GsXZBbcv378hMNkTkZWjqYvi62QySUmkEU8X5jmDdEU3QQAYyvQD1y8vGb6Zq",
  "key1": "HQjK1XfmSMTYzxAuWxozNU6WvMaq7otS6KxqUEnSwp8Wh9jDLDVMuusbDHfSqkn2P6QkM2JNmYyvVJ4VUSNjGVX",
  "key2": "41zKxMiViBjdfqNTeWoV2GzKpDfufkEpsVK4BbCXMWZBL4u3j95DMDmRduGyN7rqU2YeTcV2re8oP4p9ZAx6s3EZ",
  "key3": "2XHxZv9YZza8omCgnmuVjneMUag8B3zqtRdZ67Fa8AAv8G84UU7h3ux7qQjTba8UoNmvMoqz2RWWhriKG94XgsW4",
  "key4": "5AuLvkrjZGpMWZ2rUd4LPKKTWLyhxdw9EG5PTXooGA4B9SaBHkw8L8CNpQwKZ6ZY9iTsHj5AfbydRUsdiptd1Npg",
  "key5": "5RDYEXrYcXAJ9XQxCNEQw6ChtVkiubQL7ws522QnpNS7LeyMPkX3e7mTdifHgoEDATXfMV1fVyHcGc13iHNjPPxT",
  "key6": "3ex9kiuw5T5m2iMtqdeQvMZ1GsqobwbjwZGW8q23mKTq31u9Un36Cmo53obT2jxQdUJCx58nfELoipBpEPQPtXj4",
  "key7": "4t8J1KT5SHQA4j54LdPFYz3uwMQ92y3E2oKAVMATjsQJe2cQRnpqhLD53LpfjgreXJe8FFk5WDPdGyXhpFGKY2jo",
  "key8": "2X7mPaD4dysZEb2ig9RmvavS2NxrijN36E4rWSkeDj1h2F8mcy1i55nsDgmTepwozCfVxGwdvrQ6CtMBruHrD5PU",
  "key9": "2ZCpz8uZxToVrpxWweuwAbyj5aWtuziPsN6RYBeZCr9sAjhY995BxRFmh314GUui4UDKRYDnt5yG4XBd5iBv6ijT",
  "key10": "34ZzrA2iEYJcHoGg8EXwTwT7PdGQaNqc4CfLNmiVcVg5c8bnt9D3GFCrgXu8igCMSFXFBgu91AehsrcqVwdzYEqT",
  "key11": "3ez9BN55Rwb247HMWnsr3Fw7qD1aY4bKjfd3bcCGB3EGtC4mnPXuFt5XTrH14b1N37REdhxmbBqsnHRnvEE24ify",
  "key12": "23oHZi8c3LcjhdDt8WfRMq9sBogdNaHze14FETJQwzfYGNieU318patzLNH9jTGsLJazMD7vqNA9rqg7H9wj7Wzf",
  "key13": "5kUxZhJ7kkYuHDLo8HmZD18nAJ4kmX2cwzrWzdKznkSSYPzemqDoHmaQnXNCZt7rtutWdLfnGSuh8T3wmvVqyYwV",
  "key14": "3i4Gxq8aAtQYT7ghsz7oAupzS8e731dYk5H26qk1dPSZk7Lcywncys4MGEqh3UiKi3p2JHZwVPNc1tqnUSxaze8y",
  "key15": "zN6bQoVKkZbEWXDv8ELuBB631JZnjVSsqDL77oC4PbBqXRp4K1gdzu4o8Wr6N4BKnGMj2oBucfMUKn1e6EEaDxu",
  "key16": "gPcaiaEv73e7i57KB823YHCPXBrnsyJjfaANvZUzBzfTUKqyC8M45rGMTS4kSrfdViq5R8hXnyUoucCsnVRQ9Go",
  "key17": "DftWvoYb9ae1jEKTYkYbCB3DEGDbgNXGc5sWq2Z4SH2RiiWTh5HkBeDkvDvcoZykxo6XyenELmhWcJqL3MjmhhE",
  "key18": "4jJqLfFNcWBuJwULbRr8iuSdAeQ5g6g9cbCrcsiw7k7kqE8RQ7yxhUbLd3iSjWagpCTfzLTBjN4Hqcj6q2J4Bdif",
  "key19": "5ZfLECnoVXdZR9pNXvEQWPJwPru9ynWKx5E5JSzEZ5do5ZHFR2WhVyGnLTCseBt6uWE2unZTPa7S4qWebZcrLsR7",
  "key20": "661vhFckxjn9SMcKV1siLpLgprCAvtvticRAUUx35r5rwAyGeo2mBdAKK3fvPvzpT28gBkeT9AuHQj3UkxVoMsfp",
  "key21": "5S5X8bBDK1PfiGDWSPXLia97GF5pgAsAoDtGYoqphjQCpH9WrVJgjfNpfSAqKx6o7gpRuekQjVbLFt6TibpkqK8i",
  "key22": "faaJ7mCsfuoUAYWfFgFqG5cd4fPUYH6LF4BW8df9cg4XdWSB2f9ry4LfsB41ASGeaXfm3BPj3abaoSdumTSMbQQ",
  "key23": "2LRbfddEJLeQGAKyVQFmyoeZjgDSRaAhPdk9Fiw8W3wBFPDuEmKYU8vASymg79bKrkeVqiXzgNZdERENXFPaquH3",
  "key24": "2p2ZnjhZD9Q9m8ycpLsWz7n27A8uRnyEanmte3zKqhzUnkDagabQgVXkYc3hjUhjoEpKj4XevqVnGDdow5ZcEoi1",
  "key25": "2wUb45fzys4nCRnZDgEVic2d4YtVt9cHBxt3RyVM13getXw4XSp5Ar3QSeaq9UDpUqBW3TtQNk2YJXPUXchBiBT7",
  "key26": "4vYFYpxKq8L4tSULcp1oqTzLKgKFYatL15BhbqzrtUDqpJRvCTThPaPJSANTPLf9LQfS7uzKx4ox3HT6HSK8Ajue",
  "key27": "4nWrx8mXNVkUDUC3jsftvFtZivHAKfcY5qaaWAquoJrm2aJgrntFnaihQj9sCmDfEqqVzN3885fuXASwKLZf2VeA",
  "key28": "5t7SZ7dU6HM8T9ikoKzUL2vKdoLiNHZvU8DYRvRn19tu1EgdN8jpK1xLb4SsBi84V4cymCS11Jyh7gHjni6ts7Vi",
  "key29": "o721ibNvfSuRKwC9A2vpDCuDP4gGD7Zpz9C8s4hLPdCYqFLQ7dUfh3gWoro2qnZiEjHXEYLpp21LbC1LveeXY5d",
  "key30": "HHru3qBKhmUWsXWCTdTYzf5SNhMBRFJdrCManwK6TTz3Zm88CumabBsattdGXYwEKDbdNUUwYHQ1tPqhbVAgp9u",
  "key31": "3uQgz7Gne37QNFNgeMFq9xW6GJuS4Up5ZdZw9VYnjCA2wSvjMT56LsAwYtzTbLbXxRMxrg3KeCJa6shwfpGMTzvF",
  "key32": "3H15qcmet1xSevcxfH6fuqLrGTG7wvfs9f5Qxbk41ygK6LCQHM7JEpwghd8CWjsfCpQi9pNLiwHdNk5qkHaKAHAG",
  "key33": "3d4wZzbc2TAycDm69kaDjpZpAqx4o2BFQsWPtC4UbhtsSshiCPu8XYbn5HfMJdu1UsFTcPdDKheQbWDMch8xqX9A",
  "key34": "YQmGmb7ofvy5nezbD68QzG8L7AweACBi7JBMdxVEwZDE8rjiZYe6BrTctikGfMr1Ga6eomqUYy3LTX3kqgFa3Ux",
  "key35": "2HXtoP1PSyb9qeXmswdg65ZXEqJFUNfMwbKn1DS2yWP4UL2s675AdP8vYo8y35UC4hYW7CFNTJW832fAFSB65425",
  "key36": "2H5jBijimJVUpg8VMt6PU6bxmixoaYph93sBgTXQ5TnUsgJfpoc3TYsvzP4847LhSMVQ4fHaynKCkJJEzeoBN7jb",
  "key37": "4u5n42QRVJKvHziSA2G2wCoqsCvxHa4sDuqa5ooGDTbyCZivLcrenHd5hFzasFhwdNKvC4WaXsAVXT38AWKu8WPu",
  "key38": "5xqUMFJsB1aPf488LVXL6F7gogArw2rVGkERj7e3NvqZPmhxh6YGrAakTcdnJE4YYzV5FrwcVWtm1yPANn34UrNu",
  "key39": "2TJKAvwpMao5PgxDgyiR6F56SvxQaeLEiK5ETQWfTPP3FK6eaXasxLw7KDRnd1MGgSDzoBpBLkTZXPxYXEPs1DrK",
  "key40": "5z1ZKXpbysFbq38VMFn6tFEJ3A7wVWwL5Ci7SzktGBM4u2Q5tpzcTJWeECLM4QUoVxbgoytD6Krrh1WtuzHyEw7G",
  "key41": "2zj7sQqvn6k1fR4a9DUnKHZwt9mUXTnicuaDktfQfDnc5o8rgHY7M6jKGQLqwCReieNBJpbaMcAmxAV2Z59bSiRx",
  "key42": "3qdnVeaBcWXsyjLMghsZTe4HnSyDaTtuc2myXfAP4VW4DN4y26gmXJEmU68ExxrwvYN5dMzkJXdiALX8z68msvAr",
  "key43": "53Jg4wDQR7yzVcgu1XRdymP8DUD39KmMG9udnN4RdxvRzvbqwidHcbSdR38PUiSHCM7kmLPjhyJodrconT7UpTQL"
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
