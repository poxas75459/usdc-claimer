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
    "Nydmh8CX4SHqTv4oajQjxZHapeY9HaTsMTTWDJxBJfu72mXQTNoeAQqrKpX2wc9eTLmu8Q3R1KyC3v1CjPLvrqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmzy6CTzXFUNMEDyW4qbRnmFsskM8LSWAssDqgj6KjLFCKpvrLzgwvxtaybbd4MhD9hxMVrrwv1Ug6KrhFXnGV7",
  "key1": "2iScfrpdzDg8jaQQ22ZQyQ8zGkUbXnKNSN14JjbzsUyWtfCAgHuqfbVpmJATkrU9ES95XbrURWaWq7VZfPNrzAqY",
  "key2": "2ooFmeMwH1caAftShPweXA6rtkuX3a1Wu8vE4hLYtLs5QGLrZhHeZcMsgUCi9gCezmPrmaKgZyNqbVyecCKDyzri",
  "key3": "vCc1Sbj24hd1wUR6k8NJBXBbU8F81f3y1RsURuL7phxkMkbuW2TCyGiMYkGfXFrYsMATvxya3Xrr5fHbFct5B7g",
  "key4": "4o3UKasEi9gFgp5Zox6L87EQuwRPjTVeixyhfoHhx2k1gFX3eC8RqyuevXQaP4D3jJDGNtVdCP2wNpTKnVhN7geE",
  "key5": "2eEncRjJKKLHEig7FUBxQEdzh9yJtaXCA3d1sNXYik9KWWQ4rFB2WuUUYuQNYHnvtDwp4ZbC64jQrdhB7U4wdLZq",
  "key6": "4uSfyaRQwYqgukpa6SoLyHGYotq6UCgFp2gVQiaF3XiGjW9o2w7PH18f6WssCDVSYUqPNm5CXZjnKe8Fyy5t11ax",
  "key7": "4K8emkpN2gAcbjMyijyPFVmX4SYYG4WqewLZZNhctT53CK17TUZeMEipocWRHfCPucYVXDU9kqpq1fWbB3dqbBKi",
  "key8": "2KJ2MXP8cRU6pP5Bhe98n8DFDXQeqFK2NHJoiyZUTcVQ4uuKZRs4bXHNQrsZsrhLbmTWvF19cnYmrarrRcc7HXfy",
  "key9": "Fzt7CDmcAJn6addXEChfhQwb57X8es7eNE7kcMvu4CukFzNqFjv5563oWKfA192Cs3MAunGdWKizqB6SDoEaCmV",
  "key10": "kBxU3wUfgZyBCBxz7quC7FGD5g3AwVNwoT1gJCh5kTsQpHwR3ndiRyEJR4HkSEJCY4t1kC94XHcoYXf67xRtNwt",
  "key11": "3FEAcdEeHejGAKJbAKXF2QY7TYbgSyAY2gJaEULpTMWJSeHDQjKh35sKapq3fWsEa258s4Fg8o65bvit4Ka1XkMo",
  "key12": "3S9txP2LQH6cVnvXyTH2aKose8aXzSj2UHPmjDyN7LWaxeFJ3GvpviGTw4D5mScNawtPFqtn2paf72q6Gub8eNbH",
  "key13": "gfZoB9Ts8qMzRfY9KJKLVaRPPupm3H9g59VztnaKuMcdxxSR5As4MqYFcvdhMKwNrWyh3ajyJMthKhwNb9nzenp",
  "key14": "2ps1t2Wciey1FjGdoLwaLUG6SQXmpy2yQk1imPyqHE64G5vpGSTHaZj79VS6ubBjDBCg8RseiutCiqU47PkyaqFv",
  "key15": "Xbv87vUqd2FMqb3Dg61WQ6mW9bNmpqG4KdAATYfd64jDRSRKJBhN8XTVHpkdetdATBztdQ4rQwN8mHYVgDnHMGP",
  "key16": "2DvhMMwZWiwUdxwZqiaJ9eHR9zZswsHPEJ8SXyGgFrYt3kSWQd3E7649Uq6VE5S4xeduumpnaBmdMD5bQxWFSYA1",
  "key17": "5D6e2VvQQKHLau4nJbm3MAooQUzBQhNR4WALYUTbZA7WMBPZVneQ1M2th5ESm3gTPNW2fJ85F7CPh69372eZDM8i",
  "key18": "22yttJ1PK5n4QR5x1TabHYLTzCs7HF7pUyGYain6dB2w74DWBg4DW2QnABiRen1q2PteTXZiGhj1XCZPSrwFGMos",
  "key19": "4v8ccNjT8kUFSUCLBLcnUjYf25TTpwuZPLqE19iirfZefmvj6QLCtK2wHqiTxnATRA9cfYSo7EF1gAMGuZNn9cKe",
  "key20": "4kdkkaDPzU5TVJZEYtPTBEzkM19NsmkBz4TwaNYcubx1Gr2CSt6k63Vs1RHeEQdep82C5EewooJDVKW6cF4bgcNU",
  "key21": "3GM9jXXY93ocuMjS3L3LE6wRJN2VL2FRDCqUF5gjmzGZMHQKGP5dw6NcECvfuv2QxrKcJzFU6G4Y5PtDnc4dSPD7",
  "key22": "5mBELA9rwXvzxDpcYQrPgyqRaFvim6VbAATMGJUQXXrTTHCJc6uhAzf7sUGPFv3xt2BnkYvL8Wpy6D8UHfzEShK3",
  "key23": "5r8NtDBEehWQCqs34FHDMBZgFhrywvtrEY5gyLuZwQX923Ymf9dCtE1BUx25Rth2hsikDSJwQxvoawXAoRDbVcZQ",
  "key24": "4P1TCFtCzvqgzzaFJs63dnu4WkVZ8oaj3zPAvNyJHk2xcB3HYhPaeGfMZSJneBU68acAtWsieh6YUt9VXczgGaa5",
  "key25": "3wgYG1ZGx9Fx8wcFBJX8JLEe5X9DPz2LcxrpMSC9VV2rdFerXmRyGW5ncWeaUF4XwkvFAJBcgY4L5RkqgwKRWGQe",
  "key26": "cabDAvdBbsn5437B2a68ksQAg1VNEqcz164mZxkN4TJxVWnrrPtQRu174gNeutp1oVPFUL7vNixxRKUW37GPTff"
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
