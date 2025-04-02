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
    "FYvLtTMHNAJz6iqwCPiUcw4NvgA1zeJGQ2hKWpwisw8rMbad1Nr8s5kWGhU7JR15aqJ5FkeM4jFr73pVp58QAxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1uLKKGakTfbJXTZoPYMSbGvGbRgbjhAL6sCpVtCAqAqFqgssU591r9urjZUjzHhmDWD3a7c5hd1V1xRiB2D2ky",
  "key1": "56Wp2vK4nnezoiUH284dGSzTYmLDYP7rjA6RfjtfJrJcEk1ftZtgkACzayXGJAR8vLYL29N9C2yCWiXZuQhu1qUK",
  "key2": "3Em5C3MggSms1KNusemhme6V2v2SzKkE9QidiAXKavC1qMyjmHEyf2KXc3jBkeAnMgr1NSF1KFsP4gj5BXa9XGj5",
  "key3": "4oggcMH4Wui7jHUhAarTNnVS24S4mPFNd7xXUwEpXYJcfkX2FN1okWp2sH2U1RyMdB15pev4R52AtCcGGEHWfXuh",
  "key4": "5sehURixBpkqxzYUZYLjkhLr46n9aGqpambLfYr8iSZPThHE2p6zMHYT18e8ymiu1DC5A4vMDxdj8tSGg94M3WHz",
  "key5": "3WS4u9bU7a9yaXXcm9xc7Sde1Wc4mENr378Bm1yQeipYVRvXQLZJ6cf2gbcPfcubG6Z2NHPftD4ZBtPF2sbbwMhp",
  "key6": "5id853kFvMu1KH8M2xpQ2BttAWGpxyek9AnjTnnkmGExn8yxxEc7f4iagwqybLSibemmhinRqaHBqgiCL7TAtE8T",
  "key7": "3FJV2a4L6PnYksFKzXjRGNoYcinyoBWAFj2H8SG4SZBfSoBgpLLPUZRKs7vqBTPz9WKe4oi65ZSdmpKDuUYoV3o2",
  "key8": "3c5y2wNF6ZJcfA4qHMEwEEbEAwb7dPfurEZaW2CKqXoUDm5UN6HpeWniKjK3xnvUGEWwMyMZ9tkTVMZci8p7DuV9",
  "key9": "4fwG1x8Sd34Kv4aSpEbZPZH7UrQ5U6MEcvs2zU8b6HhUfafEa3x1FLgvi6PGUajipwLpSn7rcTdvQEvCtKsadqML",
  "key10": "4koJGHdcpsTxQzJcQQ4nrVNpq2FhcRsqUAvEfWemzrrnPAnqEgydb8kat6sNrcPNmUhf6Xzr1GDN7aESxZEt6hFk",
  "key11": "2gSAidz1U6LKhLA9cYcLJTHsMGCHu1KCyjAnXUxCEFWiKLZ5XDb85sabUJ45171mwY2PFaVc2ap8BAAn68XjsomE",
  "key12": "e3YgHhKT817stZrDrp39QtBYzWJ1Wsnv1af8uqmLya7WudUtFe6PVJWSMmFzQsdJkQBrVVzSz8Q4BSwdU5qhsp4",
  "key13": "4c4ybc6LRU9LTKc9guwFzr6LivcqW2MyMXssS2AEhk9Wafsv9YKQb3ZzamHcUmqFysHYLk5TGGhQNkHL9RrwkLpr",
  "key14": "44Ae1hz4gYoUxWDnJu1oYswNKw2y1CYsDkGKUmCG4v3fN2Tj4VMsgxJ7ZtZ4D4TXXuM2jwogfHrW5NJtZyaGp9yF",
  "key15": "eid17DxNSpT4nM8eDEEar3skdc33ybYVvJfdMTqN5DFmVgX4rc415iYgwzv28eyUtYwbLEywuk8yNTydKw4jMZz",
  "key16": "2URymYM2ycMm3fNUNFnAwhcPjhUnh6USKFHuyKhu1hhDocsxJp2M21YYQ61Bg8P4J4RkpGrCxK5xCsxGZfKah9ey",
  "key17": "37qWciFxSznEs9k9LQkBtUFJtxYXEaBno2zJweS9h3AiUZKkrD3zSemmcLWhxwK2wNPbFY5wcKt6M2Y2fYT3vQfq",
  "key18": "244QLebXxhiguBGx6D1uYqY2SWhWQRn7QQvgP1zkUhrAVsUkNTcmS48TSx9nkhqCNngdcZUJSGrLVqkXmDH9GZTm",
  "key19": "2J8mkkK13kkjQFMLtzFKfxhL8fmpqBprZUGaghv4dLp26LmkepNqGxbi8VFpLJjE5wGcyXL4rR9KNu5XDQnqrpge",
  "key20": "5rQoarty53cXmrD5QAGwZeQUoYxpocp1siMBM8Y1mNubnduxT2WGw5s5YHAnzTSE4yy65JcQX8W91MGEQRMNhmWB",
  "key21": "42nVAw5kM3EcMk6HP9E7wZEAeaFFYff9ZSCHddJhofZ3SWwCVxYQuBAcdALx9UyDHnBAsyZdtYU18z3TidHXcP2s",
  "key22": "bCyioiZZZoB6msLk4QxVCkZNkpR1WCJv4ihYruioSMQeXQvjsKeDffavSU1H45E6t2NxxFSEWYRYrPGriBeyB8i",
  "key23": "2wbhEh6fqbVhNmyyfCsNYzn4GJmzgn58xGUY9xMfgqvDc1vkDqS17X1vYeQ2jJX9TVxVmvM78qQd7RAvLkTAkNuN",
  "key24": "3MbG6TYSbTeWqzZkhzhYSqLZGfdgyh4aDGYJmr4N51JXuaLXxhCytTzgF4VbQQyj8AkoDxaFAmUkjwZNAhk1nGUz",
  "key25": "45yaJEd7ggqM7vBtCKipMhF7RaCgJbjfwWtpXcAy8Vt9MH9NyEVNbyDRfZAynavRWnHS9zC6SNp9qEB2XXJRkTRZ",
  "key26": "53shkDtH2gZ6FTtKdRvq4w1NjAmdayJwPiNdKSzyMDnmPvVMud4MD1K6rjNCToWyNWoE35sfsnMkZSkYa2T5MJHy",
  "key27": "2nrqTia1k3Xxo8zeSYBDXfNM33SLrLv1YxzQ87ZGJhhMvk3ooc1hgg7FMW2YDGncxYRPtsVsVHcE8X8R3A2r28uo"
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
