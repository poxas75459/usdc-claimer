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
    "3BAncBAJLSE5MQ6rpd4h5hfifTUPnjLBThuz83DXEPSTgpfrBXFEk4jmbdyDDN1C56JRJceNcwZFsKZysRVEFxhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SXJRyEXzs3uttihsyQ1kPWq8DLbTwyVCb2B3i7Y5MSPp8JC1DAP6n13nn2JTVSseNhjp1poLMDJ6a7NimAp9yn",
  "key1": "5kYW3JJVb1w2WTUyo5PzrQMznze42uVdwgejEkT7Re3ZeSBUY368jSL3G4yRJyqUESBgmV8TouJ1hAGWUJiyTQbw",
  "key2": "4oHYMrT4xC6ZTaJAQ5sX9KQ3P8ahALzK6rCqaykBPf5Fgf2p28vBwAvhWK9c5csf2RUCugP1Nk3F4EE9kafgRhDC",
  "key3": "2ZvrvUWpvNsTADds6zfLmyYACQiYgpe99MA8treWc4PFRhPaEBuetZyPiPmFGpj4YKxkEgvL6RucVKZXvRjnyjBe",
  "key4": "3yR99fH6DPGWTgdwGjX9VvZ6xb4CvCiiSvnSpBPTtyqWcT3sGDyk6jFQzryMt35fPmgZai15kurqYPtkw3eA8afy",
  "key5": "3TwDDC7Hv5RHPc3W2ntodFgrLEPz5MWxdrQ7JvcW3u64mgnMFPf3pjoyqdZTrnUGB9nmARfDLxauXkGGAFAqmP5J",
  "key6": "5VjjJFouzkNdobHxMvdZDUh1ZVWn6GpPFVX6AKP4sNgiizR99thibgAQX2jVmpeByrnw9AYdWp8ahY68sYtPLXvV",
  "key7": "VpPhHyG7sG45Pej8SmrcYeH596g7weaFTYsXxxBFvZsU9H7hLR1aJJjgjBwxhDtw27mV4kuspp4H2saWHx23g1C",
  "key8": "3ZhGmag4z5UCgGLqvPXRfEXV68BGjQwv4Z6NpmSMqxpFC6qz1Qo3G3xbWaEgSsyVZyxAqbP56MRbusk4GrQy76tS",
  "key9": "5Vge7iaXQfsro5HxkGPw3RdYXHYjn87eN3L8J7kwhiC7YRLBeo4RgxTv145Z61Fri9RGhYCvto7yjUqQT95NgAYg",
  "key10": "5T19VoR4TQgqSVkeWnTK3nUDx96jdYCaerkE7LePSfdGgDWJPJ66Sh7ELDx5rYUAG3qkRKsujC9mJLfxsaE2sxYc",
  "key11": "3m54mYAZEJ6J794A5Zfmfek23WzKM7DjgR2rnwLusAx2zStmFxuFfciwBF6Usj3YXwkscER8RRZAHtWGn57uv47s",
  "key12": "4y3iFSKkB14PSCzje22E9A2sCWEaimggko5qQ7edjJHn2BP6fDUgwx9fyuXG2Nu1xMGpb8hfjZJEysY6jsRBJUnj",
  "key13": "5pk4nJz6GBTxXXmBu4e2s5qbwADaJHgHPkuYpXiY2ByBSbQqaEBcLKfgLqQwQSKM2Ua5wopRFpQFE9AZTVURP53J",
  "key14": "2Jm9WXZKyhE5vnULZcCodyKccAumArsN7j2wfS9GwgxMT2XoMXTZzCeMrx6aWjQFdiheHqC6aeGNXYu3TVM95Eyc",
  "key15": "3owTJbBfiKcapYU5FRJcTv1YSF2V9EQnYyTKVcHiSeXgz5Y5X1ywyk2Nq16Kpp5zueuFLiXLK2jUjwPQSnT71CqT",
  "key16": "4Az5pWc1oPgESWU2x9fVmzKVVbXqZe9R6XtGgMZYPyT8dU4ekvBhZ4DghqWvWkmQxyGYdCo5Rk63fRf28xEB4M9b",
  "key17": "5KMVCmJQDNzPujZkf33JSgxzch8RJZWfm2PQnkEvZ96nraq7nL9qWBMkaGfkoZQJGkgjDbUudbzBwqQMqmf5ybKv",
  "key18": "yD8grUtHVo1AWSAeJ9nV8c5XSFPscuGFoLh9yPfBdF5ShfKYkvyLR319omUMAGnS8XuYZCb3x9cihcqZKJA9Z6f",
  "key19": "2DqGcjdhcfvLKpDwqDTgcRg9Qix1uKJGHmGZFR8UUEyFjRyteqZQ9dxJjc2Kuwtgauh4L12aGLuQX31UghAdBKhD",
  "key20": "narBswXS1PyBjoLFWGn9AJNyL4XkKwzCLmSeaNskyj9EMFkJpG5nVuAyr3hjx58x1wt35YVMNqDjZ6F47JSnZ8P",
  "key21": "3ZBNohMygQ3MChJ8F9eVYQx9LxGohzsseHp66p7vJjeyAgRMTKHZy7s1q1tFtXXvjS7VjfsdWgxGNLLH1ATjXfBa",
  "key22": "WKc88ZCqdvUvFw58v8Zi34vGEmpQ1vxa4WoMMcoZTywfwPU8yrFzTozJKU4525FUHR8BELAux22EQqF8EjCsc4L",
  "key23": "5qEqdp7ButEeF1nDraCBJ3Rq4fR19GGgUqC1RXWKuEmfWkLEZdEdtX2pNsFysHHHqkgYURxJm8VQKs8giUhT2ch2",
  "key24": "5QH64eKZtkzQXZmnbTZvwoZwYYCn9d4t3oLd4zXPrm9g6THwChJnESZcYoasvbqXGBgcKfk6JW7y6q9EhQBdgzQp",
  "key25": "4jdGTXDFGFQEkLnxLHtjHBFn37hmndcc2EDzJeLcCyB7QifHqGtds1TsQMq4aATnNaKRRxBEmmPz95CS75yMVzvn",
  "key26": "3Qz8RrQg37ccWasKhhTabDX7XKa6VXS8sQ6inZVbTNedwGadvKoJLr1CuZEfTknhqHbHMZx78QLUEN5t3iuAt94F",
  "key27": "2voJwxR3aKKpaGhJZdLrogGgraRRCL8Pb8mz8cSbQqoTAJyoRxexn4mW1EeTt4qwP2EAtngpmyQZsnbR3rkUEAr",
  "key28": "36rePzdeHijSKvcP93oiWLxZuE9Qiu3xmsZeyrASDjXv6WKCSSrqp8Z6L5AcsjAihYAPSpyaimHPtBJqKMrQytWg",
  "key29": "5xMwvnPN9NtEYDTVect1NdfTcr3JBi9vcprdg94dn3fkkECZ4JRJqsGSV5cxBspvwJSKqDsuABPLbFy7Mp1NRHu7",
  "key30": "5n8vhr79vbi1jh7QBaATyotkbC6bxJ2BscDHrivzGGaLrx7Ka23687tinQ1Kj8mx383zrrUBygMMmSZq25kvFzW6",
  "key31": "2Qf59oNW7j67uAMwmBFv6QnXNPMTBgW9WhdJKe7C63XcGzvTQgAtnguqzKib5tcmBWLG7XwLJ1wdWpsXK4wv91kW",
  "key32": "3F5JuiKB6QJsfm4vPuJFihDxx5huTwT89i3TGvssNP1UoiiCrbLnTkcx2h2N1iSPN73L9FUha68VYFLY6RMAcdQU",
  "key33": "4YM1N2tNLfm3tWgnQcs9hHfi7Dq8XePif66mRK9qXHxNHhSBEVyj3Co5tVX358fnSGMjoRAv9ZJ7yLaG26ukjfne",
  "key34": "9poRPCsH7rpE4qZnNSFWZjVhi6xwAXfFpatpBLZuV2pitpDpSRwZzucnYRqZAgNNMng9BecPeLxGFPdMimg1yV3",
  "key35": "28EJRnxCQKzVpxy8u9M5zXucYkNtv6R2QvJNxeebWn9xiusnd38AtNoV5dLotasJnDwhyVK5bjcJ6UpukrfmZPf3",
  "key36": "36tUpHGoPbvtv5knJo1cQTtNktGV2eYKeQMsDr6dWbfh2dULyKaLN6TNum3ByZcr4VvoQxYwiYAgPf6LbxNPpeT6",
  "key37": "4LfjNPkCJL7biPLiN7CMfhjSoH5CTWM92AxHvM2pL5f3JyzKJvYGkN2FKk4oVg5MZT8uMjCukrZMtL7Fsk7EV5CZ",
  "key38": "3uBLo9CqvcSqPNer99V5rQqHZUwbJnQejBzLdt1jm1esbdXQqhzpKA9ckD8JSegLWsTX2ctJ6PbTLgctRBa2skY8",
  "key39": "fWEcUsGXRy81NHLqT4qyktvVNzJhxxhAWa1hHiobSkoZqPGqPwtZJoAxkD1k1vMcxwrt8dTEgvwkNb65nMavAYL",
  "key40": "3h2vAKZeUB4xjFr4K1ejZjzgivhtX5hgQp3KfrKnWUBY2CpojiVN8xQfcDmPS3UYr7tvWHn2ov8HTDEAdgusaDhZ",
  "key41": "4Vcb5NApErhJVhxjsh2ZvUpb6CKoR9adcgJdiSn1Fd86RrwJikoNFyzMU7SLQqMuYhmB8a8R61jDHdvBTL4fhLDq",
  "key42": "3M6JMhfekuQxHDgbswoaMxH93cHqfATeoaB8igucirJL8dJLeHhQn73kACtTXeHybLnMdmqkTJDS6Zb46spgic6j"
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
