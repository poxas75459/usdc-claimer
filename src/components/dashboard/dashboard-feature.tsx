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
    "4GVVu78ofZ7an32Uqph2mL2wqdJfyVPAq5i8Gv5WpgV9xvsTKarmK9aqgxKSHPtQ72MWueWrVpeQG5ZMtdgye3tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1yAeEyJYMWHzBc1DhgEi3vd1hmT3tCiCXoRNU7JvSP5VYaPqzKC7zeT26BBAGz4BkizAxQhrUPvoys718jfCzh",
  "key1": "5FEVSg52FNXPZBbVjkLeFEhtNBKLtxcXP4gCpSJTtTJ4M6k8bEFwxovgGqzCrtoWpf5t4ekUst1yGsZhxkuunzfw",
  "key2": "3KQSHVLsKzpRmkQYoREKYr5ciq5ZPvA25Kc4RxUMgSv65KoYR7uUzJKTkRWJGcBoHF8Q9hcEja8WvvvjTK69MjDE",
  "key3": "5YKfLhHXuo7Z7U2pAGrEWFDhaZ4bCMojzU9RzdNRPsZM6Gz5mbTCd6sk8pTFNrsPMyGqpfkSfYCWtbKHXGb2Basj",
  "key4": "3ihNt5Jtq4ML3LmK6MjzuKxTZbKu4qdwLXgkA6Qtwnsk341uQihxu3mH8R2Z5guZ9GdxUYrm4KkJmsM9ZCagj3E1",
  "key5": "KB4Qx1uwez68xF6w93ZjjZiCCsB77GNjDB7XzGorm3dav4UjzMHG18UeDBQWrkP9W7oVqCTk3JkbLSzpa9TYLuh",
  "key6": "3hwCvVQr9RqNzcmZgcwy3s24vE2sTdwVKAm9sWoHU9VoW61pkM4BJtF7xFVwsCrt4FvrAtFoeJ2oLhC87ZMrKYda",
  "key7": "AQvcTZzocMUksVrd9kp85w8VZLgbxqXnP93pCMXwaa4AdU1KMhJFixCfjsy8WYjTAqusQ28iLTj55uCb3oau78V",
  "key8": "2JMNBrBMPV2E1TV7RQxRPGMGF9tEA6zZEcAmnJtfcdHNbLdUDRGZHESktqvR8v9fHXqFjom5R3ZfTyCxk3ghkZx8",
  "key9": "4eKeZ6mSxmZDPR7okr8XkoyLiVkv8pw7qj2Tkmk5p7u5o866kNMn73oHmZo7Fw53c3znu8TEJ2rV4ZYXQvZcnzv1",
  "key10": "5yQzYLFwyJ2yjR9R3ywqSUrB7ZEwd6YhQb46GzdojDugAqnqo2fM2oZUrWRY5mqNnhF9FMjCsNfm5AQxJe4DHFh6",
  "key11": "2yoq97Zi1sF8Q8rimAcuMhu7eMTnkuQx1whDxCLFQQWovASAkhTVor2ceAbnkPYU1gTevoxG5GAB4sSnheHKykqV",
  "key12": "2qSvK3MjEw2eUD1R8S45BjUzScTrqYKtp3ufHALCdgBmL7uLnDBBq49ZwdmjU65KSN9qQpnaGBeZQXmkGNeDkNBB",
  "key13": "5AhrFaz9YGmhJToc36GgRLjPNZ6uMcXgbFpNLSz11wNqMi6o5eXuc9STjmA6J7vGYDNK5TDRbkdTY46H4Rhnc8Vd",
  "key14": "4hUr3VSbjopLSNc8NzUT4E2cmHdNoKN6hwKt8VikAhQ6QMtQVNzMM72oPxhVHy9QbhxoyiNbP9wsovTNfAJN1KAr",
  "key15": "2ku5Dq3qbgarCQVmon8Rg5AUcRbnKRT5ssqwtCnRCm2vKKK3URiK2JnBLUYy3Y3wxxmWibjbfdDUs5HGfV5UWE3x",
  "key16": "cCxjcYsD1iey26tkt3MtQagLAyKudKeySTyNCnNGzeytuPRCgP9M8bdaMXZqNQqTX9ySm1CnoQHUAnZThkWuUzi",
  "key17": "4EKCpiJTfzo61bZoPe48AYPsA3f8gkSFFWKMba6JVbK3yr3itADGYZVPtAFSR4Qs7pEekNkGgzVJrrSnufnnVebt",
  "key18": "4xWgn6XguzfZujQj2ed552ybQSRpgyoDCJiqERh99SEA4ooqWdbcB9vTT5PY71jPi8iaZQffwpADtMTnTxCJ6yBS",
  "key19": "36NKBCNecgAcbVdS84C8Mjdb6kipcQrUG9dNPMEjH58ESakKzH8FwFZqXRzX1ayWGxe8ibA29aUuHsCSsJP4TUPa",
  "key20": "3bxNHdqj1YL4SSbChFpSdSiqvC99yzH1AQh51rJ4vQoPyTffXTB36EcJFABDywLfjnc7LDypj8RK4HrpoujmqF6W",
  "key21": "3XBdoGuJAokzgzuU3mdryBXXTZeLCa7vrBS6x31xuVqyLDWSVvqSi8R6HCe7oyEoBwpNdJqxTQUP4kkeep8WC8Kb",
  "key22": "3x8nooMJZcdDsY15i1DfTRnS1rvvPx4rJ8XHS9ThFd7WDjHdSqWvgFjMZXfAoD91wxsuThmrRqRPfrCG4myJP8Ev",
  "key23": "hLFnyfVHfaHo81oA6bBh9253a9UkknyGsPHv4woCnFJRpKUiAjxNYmfskgQYMgQdRcbfhApEVM19mxYSMj8THX3",
  "key24": "4w7SpNNawSk2z6xSe966XxZV6vAdN3WxWaDjmj5XkyjnPWQF4qfKTwgSH72iu73Q2inuQgJVDxr9TuZ5JVEHZt9c",
  "key25": "3nyJ9TLLEAreXswrjZGuGAC7qWnhLmxi6SgfE5oSrCJjVvSsqLkbEyhBB3bGcvNbgjgK9gdCFzHEavWHboZc2bhh",
  "key26": "VYXRTDeJhPLWAUhFX1RNaRGQKn8Zo8TDPaJ19NbmaWoETArYhN3x9xkAz2TTZ3e9HDdmayDhpUabespzAzRUP8s",
  "key27": "3ZM6GEpqKeyxL8s6Gv55PcZoXApJTGzfeFcDjUYPnv9hBP66699ufxqNYhGiP3QfjcmsogSZVkNvdkCrg8w62Z2Y",
  "key28": "4CWVidULrvddEsK9fV8tnhpE76t86xGTAwfSwBvfXeFfVRFzP82kyEmN8FCVR7fCdPMwGri4kcPcrtr7BbGjjz98"
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
