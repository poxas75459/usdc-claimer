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
    "5Cd9PX25ZMVSPCb7ipa3rxVzwETDj21QPkfnU84Rm54Qmxyud41dN5nqNq6kiBqkXDW6woob9zfgVFqtznjQ3Xxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cx2MkwugTSHqFWAMDbViHWXDqGrcMzmR5eNViziUeY8RkBk3XKxbk2nZdePqa6hyVABBRkxaxyVuFppMXn2T96",
  "key1": "4PL7f7HfEn14tv8ayeMgDqwX556L3Ki2hEcL22xWkS6jJaNE2RdPri8RZ7D87qnR5L8WUZB3VTEbFuoMNQfPSXux",
  "key2": "3pAwDpXQcCrmRxsCdRku6GxGY4i7ZmonNGtvrVUQ9iMu31uVPagEnUkdhB5BzFQGVVAGVTH7jiS9cKJZrwKx6mzm",
  "key3": "b8CCfnk1p9xahmSnkW4qymcVQorJYdedVaPLgUQLBE5z26GNuwSaDXsfCTRTsk1QN66zJB6BxGn8n1Vs2KmuH73",
  "key4": "3rDMzqe48JwVi8GVcnNpxBt9diY3GmGoqfRVZubRK2rA55fqzKH8nu1jH3ZbR8No9ejxnvA2qJo93T1vKEWbVyXp",
  "key5": "3QBs7mzLNsGEVcvMjJmXoP3N1fe2u8sCnECL8HctT7PhzaWrPymTiekBu8GzJgzusX2hvkTXLacgrTRL1kxUuuP1",
  "key6": "X6oAcdn6zpwKG5b3ymT7NSEcM4KxZox3VZRXrXBsbcTMFea9CTykbSVTzmYuWKhiSsYRDMSmBkyzSsJRhDCkdgz",
  "key7": "4xSsmEFdyjnp971eymtezNZDo16YBZsRjJBwnCgFYCn1xzdxRu6F7WqfPVmgJ7VkaTSoJLpg3T5WSyAeTfexX95i",
  "key8": "2PmAReQKBL94gU3YiJmpKeDXvDcXbmyKnv17S9rUAugjL1ajr5NtADUULqTAkynREBkSxDswYLMndNPT4r4Caap3",
  "key9": "33LkXwoUsekj88SdEM1AHzdASY6P7wUFi4KcD3foQPYxDYMjru3sSBWX2MuchjkBkzhYEu6eQYTaV9Kbc51ERotD",
  "key10": "4nznU4brqohpuNoB4umVVaXQ1WfAzrN324ccc8MWnnTFADKhrrQDoKfefQHVNsoDaqUdUWBNLv5NUXNgxGpE1Ccj",
  "key11": "49uFuXntxksWNskzsRE5Xo5LVAcBM8VZFiYpX166uixfbHo8PUw1uY7FjyyUUDCWJbYZVGCBCTAyUbeyixF8uyGR",
  "key12": "tfXqGqSxKqxFxmUidz8CRFEK6VgvCzwfgobWKTaYvkb1dXSzAoVvxKgXQwydpphAfBJqqJxDzWV1MKdeXzsguW1",
  "key13": "4QhHz83QUcUcpNm9PhBSjRWQZj7q6FC1JazzJo9gwwxPryEgQWhGwMwMkavinJ96QjRQjPgjQRLYMDwHnL5kUbKD",
  "key14": "58NRsmAaehNdUNpYqv8xzK1Ry1Y33YXj6VUjCsoSVrzCq7WAdz1H2xJSx4QkS2pnJzjLiz5KN48kTzknyLxW643T",
  "key15": "xsnM5NTH7LNcRBb4xSwYpE3BaV1w6W6gzyjoPwcfNdJQNvEBNuG1sQVogfWeS56tqBAyQq64HhE3CjLcpnQYgJX",
  "key16": "2xMwZxTjKwWqJZT1TVpkvPdEEbw2MkNMjneNHeXzhnVH65UVNFG5eYoEsTKjhpFerRAYLBxM9Snj6XiMCkzVmpuc",
  "key17": "3PRkiP5QpSajcgn52ECsdtjyu42iThPPpvuQREWA8PwKPLWhr8evd9HwkXEgKk7mhLQpcXu5bv242bJJv5pecUCt",
  "key18": "4Ng949bigb8YFV5PCCuH8NKfBywasbMB6FXbTiBbsC6nYbi4UhD9heoqBSR5D4wvz3ymBVQXxxjk9wNhyDdT3Gbf",
  "key19": "3BRR73oS2RMkqG3TPaCqkraMWrrjDMYbYtbtBz446ubkyMp8RkuwnEeoLPDEHXa19kqXZ92GVNnh9rKBR2rpz7Ay",
  "key20": "4PevKBNvzpE9qipWvnPmAn2Wo2KWiNpaEBHYH15h5FT8CfsANZFamQwY2YuNibyQfCwxUu5cH5Atp3uoyAxH3ab8",
  "key21": "4rTFeZR1x6mTXGjSgf7VMsYL2KpLcU2XyWgtSqdJoYHAMJ8C5Gct4WkqFmCBJvoGnQSbeZJgb6cbVHELEH8aWwbo",
  "key22": "hRVn6g6LCFbvjRHmzJxUQz4gQUpWCAmhwCYFsuu1C9kDncFX98hrWhuM9nWdtjrBS4tPQpNy6AzqgNdkfY1YVdd",
  "key23": "5kZNxVhPWerWyxnUENdB2CBEiw6GCmPCdxVwJzgAf5KUTao8kZ6gu1XNH91sMf284FJbNqce6NdtYCpSyNPEXCrY",
  "key24": "5nAQBGBxproTpdgZiiPye8AracskmyDk2aajeq4oTocXY9bf1StmyGRSrSZg2HUF616T2Q4uvuDL8VWVQo7PNPnP",
  "key25": "5mniQDYkwvULQfFwAe2GasN5SrPcBYgAqNdmSdjHbAohqdAv3fF9JPjCdSfbuqfWk77nVduZig3DAaeu3Scsh7xR",
  "key26": "2DnrzAqZUjYH1DB7PKJ6HTdHqxe4Wr6UirvvvaCo81iGFSmKiqGkw72ryTPmFJkchKkqXSXXjvPk2dVmtmMgvzoJ",
  "key27": "2sB6qF5kFaQMStXStuJtcSJf9PG5xC4V9i4QGUqPK2MijNrxF5twgPH1c5pF6W1DR75sx3RQNH8arZ6benZqdpx2",
  "key28": "2nvCGKY7yUdk8FLAQ7g6szEUSqA9NnSH9bzgzFPULsuVWULQ75sKTo2qW6FBN145gBCo11fVYmGbSMTGjBgi2oth",
  "key29": "3Uoq8PRJkwADjY5EdPnjRM8xUokVx6y971RmM6crEy3DY7NW56pivXgmsq6htqNKNEXeECRZFJU5FrT1xjSpW8ck",
  "key30": "N5NSXXAJPrw2YAEaYJSgzMz5zgQ7GJUQnKezCpfMzfvsxkuXa2c2vTozMTQwyCjb2mZxJ5tFu1FhCfi5QcAKy7L",
  "key31": "2huXGTctCoBKbHbaNzgC47UdZGVcAJGEnbG8AqTAt73nkoSqmvNeF3FCCTTEQtXYFQsi1CD8ijpdJQKoAJWHEoNw",
  "key32": "55BfW3US5FiVBUjBFpKiPmyPdJp9yjrh2BXMW7TkXXoQCVCSyn1WdCFrZaWNWjcMa4dLvNkf3dzq7knJA4MfTyFd",
  "key33": "3WRvHN5R8GogoYX7DzXmfTKgDFA8npjuTDobp2BpigAA4Li3xj5kj8J3TLZ9TnQ4umbXbbq5gFMg1durFxNSFyWu",
  "key34": "5chVFk1phEFgvGwmgr7NetMxxbjF3aG11MJccYpE7oMQr4cdDcCFpXNEjoARFsRmVxYpAW83vUhKpPM1uCvokzX4",
  "key35": "626KZuJEBERyqhw191oQxRASuDJYUzM95Tjsg2U3dgmSv58FWdeNeED3KLj7sWv6zX3LY6UW71VyX6dNDxnB2kTm",
  "key36": "5F6Sv9FKmoLYZTX53qekuaLGjbCn9sBQ8Eok3KnD7vVS9ZeAcdwaHFDdKGx4rirENSkLK6gd11cYkBtd1gypeHf8",
  "key37": "4FsX9oJAiwq9WacR2gkdWdJHTAFkTGvn592272rYWo88RMaLqByZzU2esuqfjMcnfoxr1Fypnh9A1t9tLNHBcaan",
  "key38": "3Q1J9aALZbUodpKB3ThZ689m8GxhUKeMo2S2nYPJhqJAdhntPCfRVRcvhj11M7z5bZk1TYM7gWsQZ9YDYtKuUWVx"
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
