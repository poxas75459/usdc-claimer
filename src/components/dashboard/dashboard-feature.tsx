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
    "3ZPk29ocofw9UPKCKhoQKbrELivbhxjiMJZyFRueJ7EVvZxdRa2i5hGCdk2FWL4QUDAqmK5VE5cn3g4Tz1ya3NZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StaS5cV2C2KXgubqzMbDossG61tsdFhfGXkKY3XK8WPaYGgkWe2dTWDBvBKoERc49UhACh6tHMhKHw5LW4XLMJK",
  "key1": "4qUvZaxYebvbJPEzkpX1puUcFKUS6fNEr9gMXQyEFn43Vq9m2y3Umg18wFGidgGhuReYJzx1nZm5mWCXLNrDh6G2",
  "key2": "mM2YPtn7hV34ddiaX3uV33wyKajh2AFVxZgazUUUJVmvcHVmYZJH5Ct5tCxi6ctzEwS8hbAZ2PC5aL3WM1YK7uM",
  "key3": "NPnPspHfo7yGc4caCdhvNdb1q7TTCQF2uCLRgKyaDY5kEzCv6Jpkiub1DCtjhdkGzeAUALkZ1TYBmicxKyesWnk",
  "key4": "4kRYqRwYfT2Kf5Pm4TGDKro9J7ZHg3v9rzWANWqyr6HDsReExCQGZnHAXJRe4QAT7USvuHkSuhLqCGUX4nC1y14v",
  "key5": "CAb5QQtdmexaVe8UHv9qy6cNJFnzspbw9osBybZ2L4PkG8Kcm9mkAwr5TyPFNxywCpYThLF1wtWqdhYqWsZ6S7H",
  "key6": "5bEvzpHCXhY3PAm6bs98oxHUmSu2ixqxbpoNEqNcFt3iWsMAf3FNkokiCVfKzJEQ75MvUydxwaV5CukBL9hFApn",
  "key7": "yCaD5PhaMRb3zDNtHFNQvT5kas7TBPE46XifGfivQV2NEEe6vNYBRQpRUkFcp7VrgvcehvmD9ARXpgbSRKsKYx6",
  "key8": "4w3eEjgAQUYDTtaugnYuG4TAUN93gZZvFcykKwRgnPdjKBNmEduyqjq5VFsU8hDTmgqdiUDtny83SpN31tsqYf1M",
  "key9": "4SJNYBWFVjYyDVBqH2HS678QXCoN5ARMJT8DbZRwUqWCACJkBbhRWSZRJhkik12BGp221YDKRKyWS8WaUnZaSGbS",
  "key10": "4YHEjciPYm6gDUbtohpmeJ6yaJsVnAub6BtoJmVZ4rzJrb1sKKboKHKoFo8Nqff3GTT8tcUjo1JZgTu4yZpCqS9y",
  "key11": "2p4tzMtGwqv2FD7Nd2X5xw3rZFCRg3MpNM7QUeH3GKgfDywCf436zBM96s1pRLmvtQZHmnBYmhz8zkWuaLEEzA2f",
  "key12": "3rwJ6VgCCHt215bW4GptZBntrSndA56NxfypVpWxY4sAjEJvL59yiUTwtjEDx2Sv1ifb4BPedraT8Jv9yNA1U6DB",
  "key13": "5QTe4tKcBgtGCiuG2agm4uusPbhhsfUdyFJmMzpfvbyokYhGfWFeWtMc2n51aSwnTbMpjWAnAss6aeamcS78rXar",
  "key14": "5ekDVfwjJSwotnzJikkpgd1WhdMLkWPwAhvYJascz76vXFoFCRdQVviK6wMiambe1zXFY3tQsSt8Azj6BN6k4pc8",
  "key15": "3XZoYoBUTS9L9h242DGgCK7jALP3XYK4fFnePMuXZ7acQQNAkhXwhCJ2dwNBkayp4JvM2JNAySeDobUPCvKVvkBt",
  "key16": "4HiCN8U2HTymbGbSvNKrXtoz27gvYD2qEFp5idmghyqirVeBUnq9VvgBvMfDTDW9tovC9jbPB2qJ4W9AViya9ucu",
  "key17": "5LdVkjs1VezECFGVPxdHR8xdgYRURqUwfBEvPHPUduywRhfPVqW85diHYi53JPC1FSHMhLsfGFBQoF6J57RLdaTZ",
  "key18": "5vn8nmuhT5si15ZQBcCAHqjjCjPtbUXFcpAhmDGe4gm52rw2YzPAa2yzumhUUUTPDHadYqo1LXGw98X7pytMXkgc",
  "key19": "5Jf1DFK9efDAJgj4MdcciXzQ9TqarnEsShr4ECbu5gvNkXRHcXuWAJ2QePYWmyZA9bBqQHYZVvmFRvAz6bRjVccJ",
  "key20": "jf4QfatXnm4NkEs9B6rqMmckPYivmfEhPW6dzYk5gSskKBnf1avVw5iXjX9ZHoWstFGxMsYqfTURkH1jRT3haSX",
  "key21": "5Sq8wVrLVHchESMYujn8HUXWRMASyw9yhf4T2hEdpWTxESTLRwYmJYvzCEm1RhFy8USsURRiXNfeKz2zr3gCKqWu",
  "key22": "KX12ddmq5Cwd3S9xDByaUjz28zarD8oqCFPi8oQ9qzeTSyRoESw2weXEG3EhG84V1RtJNBJGRGauUyDDkTahX88",
  "key23": "2TiLZ3GCDdVzhUWKQUwqHvqUadJCjUd81Dn9hezSFSjy8tvyV2HyaWZewBYrsEjr3bM32j7JpDQvVW9hMJvMe5LW",
  "key24": "3GFdKN48G6s52FJkegVMrvHCbrEfqMFn1tfKBBFTnqAUjbo4kNR4kB3AsMnbC8G7WstuYmX3v42y8UFfomYmuQDG",
  "key25": "4r3GdJBGZgf75Qpuzq9ZQ7K2vZWX42La66zMguwrQSg5kxquopT8UB25ktFMTQysBDswqoyPdkeMGbfYrGnYgKxq",
  "key26": "5rZDv8g7cRmqPzV7A2wQngmQyGDg2kg9RRD29qenbjsoTSJH6YQciRtDky9WmdvrF8SNrFw3U2BUnaGnoGRqyZbB",
  "key27": "5e9izhfjLgKjBqPSPjwGwf63S2i1WfBWkq1V9z5TboF9XDTv9s5hXLBZ4gynT9rpiJbfVnrTQL61E3qDd3LCGqPt",
  "key28": "5rEVi6n9dTSZZQGTMc9EjuKMrkwh3QhcHGDcvogiwL5mCctmmm64T4BMLCBbyQNPtXNQEgnXB2YBb4v8jj764yAt",
  "key29": "5fkv383hpTRRxN4B1dVFWRNUj5ZG9tCdvh7ixkwyed4DdcTzoTnRnqXECWYEbxEDm5pokP46KRAKDPGDs9eW66f4",
  "key30": "4AaW8K2ZGL9URAE5BBYA5UoxQ8ZWFwWYpHTzPL4t38gkMcFDbF5j8qWHmdLbQKVd5Wuid64praSq9LxDKH11eYkH",
  "key31": "3NUuHBKMuAcBcVaxdJPcwJ1JWch5xkMzzmX8Rmf4pYz1hfRjCQCBK85r1LscS1TvUrVXvhN2utxwey5UmYZorq18"
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
