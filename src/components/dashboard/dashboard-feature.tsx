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
    "5K4rbKCoDkVRbkzYVuFm47rk4r3MW3wLLmQmt9gogEQ7fVNYGS96t5qYZzSQf6dw5VGkRbxe2Sz7hkriKefrPfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vnkHCo65porWaNW63WvizYJNTo4UJuJiKBBkfAuMYpNtKuJFxdSWgoye8obNZQLYCAZgPsEU82Wjm8FEc9MpJLj",
  "key1": "3u5hogvUBTNsXCLDC2BXmAFoanBbrkyze7z2o9reCepXGdrWfR6BzAA1DhyAvgXkPXY1dbd5zTtCsywBb4uV8nYM",
  "key2": "3Em7iRcuJLx1rBgj1vuXpSi8b5tpcVutvH51KPNNXhftbVPQpJEsNGkRsM7H2Z6fnMCTdDehJ8MryGipaQitnuh4",
  "key3": "5D8ApCj2Zi7BgLAFGSctGnCNdwTx5Z8dHxWbi4wcubiyZe6eKtNGHXMaP28acJBixooEEHhXjvGw8uFTu1s8yRrK",
  "key4": "2KJHnC7qQq7P7ptc3Yr2g6ydDiMDnsfEXrHE47cwYYyxXY9HQ93dRCZk1KrnLSY8FtFjAyq23JKNxzSHwfmqt2C3",
  "key5": "3ALBStYx7X1ctFkjxAHwk8KMkqDXP5NuPc8NSc5xV6AfX5NBoWsKF8UtVxfY9tSdqeavmyVPDfuMSXkR9AVK4moP",
  "key6": "4AjRLCXDu5zgYStTHBNzG47pNZFUz1h2kii8gXJP5mvGCLTjGkaLHXP6uKxqAjS64XHo4ce773wT3FM6BdWB9xQz",
  "key7": "2uG7VhUaEJJhZYccezqSskk4dp1Sd6dnERnjE7YGcNb2d9FpJZU2DvZKo1q9YMGeq8QmHDNCKK7PmXwuxFtQMgtH",
  "key8": "37dd6utySEQy2ZoiffwFyozHKGFWQYuNoeSjgi953f3MXK4x9imfVmhpMzgDxxXVqQzLe4yL1maBbgfVRSGH5pEY",
  "key9": "4zNmHPJFV6h2FJxLQ6DUNn2534Dp4jvjCADwypVZFtztjw4LfxzCvg7H9fEJbKf1WhQ97NwrEkc9EPsAdzQkJYqr",
  "key10": "3hgFAnAY8DCzApEWuXPUfiKpbK1XApfv79NhmUBbCpjKvddzM9HSU3QopwfXpESffiF473uqGNTXqwRu2KfjiwcU",
  "key11": "3gBYBwb3ztgz4yaBBHDe8Nt7qa6QAFqA5SbqWkJEPVwdAn6Qur3TPMCRWfziaE9zfHXfybXWDuC8bwqvon3GyTSx",
  "key12": "33MeJAy2MPHiGSHkhnAX5ffN5NdNqo7PUtaqhvuE3NqpDypmAYs5Tdxh9jEtLqRnp38n4EQytS2YbwHdpTdTZVN8",
  "key13": "2jkbXhZXka6e8DGsqW7V7P7mTphobdWtRg9JehWgYQmDRX8iNiG3we15LijJpdsGwkXRoKomScP6hMQ5Xhhje9Kr",
  "key14": "2TdEmyF9utubUryW6Vr67n726sHEECeaLmazWRMtJxvozsXc3EJ1orNW74YFyYDsB3dgy8ZbMpJEtFwmNnhXs2Ro",
  "key15": "4nMQDDj6BEatVW6Fph1gVYhxngEtoQWJNPCpSzUB7wgmyWSmMf8K7c8H6cSdx64AYA6hvECwt9JYawtUra2zg9Eg",
  "key16": "4oi5YEoX2FzTCrwdM5YiE4fpT8WtKmaHwrDozG2PTECktaC34zeACcCyhq7svCT2z8Rv5JFAus9N5BHEA7sjyw9L",
  "key17": "J95JDDdx96m22xFJGu5DTSeKYS3nXWaiHqDDzGuYtqcHhTvxFgVd59e7xWp7a5zxw8GKwHfvnioFzhXxZdwEGR2",
  "key18": "4XQhqxGXLDaKipChLUzjy5buENs4q4bBtzAqtjdGrGUg2MWtLQqxDZQTw5tUut3cNtuczujA9bkmc9jpcqWcVzYx",
  "key19": "2TuVu4JYi63ipTqGPyVKRzhwC1J3pfiYrYCcjdQHd9iSHP5DDYTsT2CFnmAeXUx93v12Hgu88UyJ52DxJWTcGu33",
  "key20": "4QCpj9Jx732EKShJXo3jp9gGSXS1AHzrzV1f7spgNYZw9Wo8XfX9HJwEU9bgMXY4NSLQRYpdYdmxJ3NAP6Q3WGsH",
  "key21": "4Wd1QuQh217cC4yPneHVDCE6gAot9po2p9Vv25ufhQuoFgXTVgDWo2QA1buQ7vdxwmLuDxr1ZjMm6RaewekaSqY3",
  "key22": "5UbKFNBtSDKMBZgQWNGjFar23kQpftRVMpYPBT99qWp7YnfNmG4ZNEx6bfk8mJkvhE7v8k3VT8aX1xMm9MJaphHS",
  "key23": "5HsDfxbRkhZyhfPMnmCf566ddA4nXvUPpnox61vgKxLeJUnXB7s4M1C8kDgajg5o8bMH7eyhWn7zehHiV4c3HXbU",
  "key24": "3YvxSAYmtYZeQNksZBq4VMkTopttB26NWQYtpoHxz8n3unX8rQE5hBtkkztN4Hkvm7z9qR72E6msz77y2ak1PDKB",
  "key25": "3mM81oAt6Xp7jFQnJKuzrmG7A8azSW5DaQ9F7tbwAp7PC9yaow5oNTsumiwAUJzDu9Pb7Nkox3u1qUzCEHuRb63D",
  "key26": "54eLkp1qvXZHSket1WQGjSKoJD9onBTu5Sk56Rpqyor4VeiAdPKK3HSHhghUEFmPqbGVwPpKiFnTUN99tGiVGRc6",
  "key27": "3v2HxYTkjjrZ1TvU2FSEd2zKw8GK7pL2djkxoBaNzimL4EjfU6Pn8UVBDdSU1Ktisenfv5k97Hw6hD3geef97D7C",
  "key28": "2QYPoCS6iupnTyuNau6zgW64m3i6RrRrfSBgRhaAy7WYLeo59H9sDhB8bWT1ei2YvJaY6yPxyh3HBcFfHgq7D5WT",
  "key29": "3KMRJbrvcZkdRh38VtV3VuG5MT8CzXW6YGPyPzsJjVVdyexcwAz9waMmtAjXPzR62yN2fPE3nQQio85YHi9JvjSE",
  "key30": "EM3CvTXXQGDttXigQikXRZKDKY5Dc3BQrmhJBgeHnCe7ioXkZYYtiMSHAAu4GHqGhxsEozAD7UAd3NbGHZkzLUM",
  "key31": "3pD9TmwJ4TXreRxm6Mrtgw6FHxbfiGSEH15DP6EWGCFdWiqrrVH3snh6FZfrMJdoZbrcDguPqqRM9RmcBjXZrLYR",
  "key32": "2zZfr15zNNs2JdcN4wwfHqRLK9kGtPP5BniHciw1nABMAj5fGzB4QnC38C5m5P81YppzEkM4o5FbUwgabJzzV8qj",
  "key33": "5xaVjucomKwqAdpXYLxmrhP3Eap44ci7eaUYwvz14fRTHureGTiyNioVLQ8AykifT8dBa6xHcnBoxv5tv6DDmaWe",
  "key34": "k6ztRrxjSPZVtAMpS95Rrf6wTp7Q5HG5wpBrkrpjup5uBHsqwUiDAMrKFHok4jC9GGLDocNWcwQyuTgbU8RwNem",
  "key35": "58KyhpxUQnq1qDy93sxc3EiF5nLC8jBHiu16gTU98KiPJ9vWPtvKNckWrzJMqocfrfDwzwWMWok4gtaB3hGQR8pg",
  "key36": "5kdtUiQqCJDMcscqnMo67aQuyLzi95EUxtUakhEX64zgSknEoVJ55t8UGgm92j64gEjBrHN8FTLhBmZLMtbNcVeS",
  "key37": "2aUVjkehDfcut9XFVrXCU9BJ99XECFnpURH7URfDCFtC4UKK3xBLrzhgrbrfpkB5ZiDqGEoM6D7pKhRFSVrX82y1",
  "key38": "5w5rLdcKdDBjeJ9FHbwKJ8B58LWJ3QtYiGqQ2AiXGZuJfjwNdWmacndSUCsrscppcYzdu9DgELFcnsPnyGkPQp8k",
  "key39": "36zLRiQd5BKGxBMK82pEaUAymoU5uauMzeL37AqYD2Vaj1QsP8oTaBZRJrkmo1xb76pPsN2pawissANkxnUhiZuu",
  "key40": "5Zb1qfDsQg2Sb1WtxMuTT2iBBwsP3uaLsjQNeUPj5jYGCHaDNmStQFaa9Py1mWm1DDC69qzp2TDMjs6sjGU911U5",
  "key41": "4wDg1Yz1Wpd8TAD7SuX3wP9P8DxdgpLF7M9mxVefjRcV9HeqcDLGMY2jRmXbJRLAXCFv5qcT12TxvieufibqTTHN",
  "key42": "3BmPJhbvg86HQtZyNQu2itE8kfznVoPmMKsfnJgUF5fQLgAxNcTvn94CSuJqX1XAahkas92jhC4LN2g5qk2tSL72",
  "key43": "3RzpT1mdTu3imPGxZhf9iChriqXZk53LWSRhMBbJvLsQccMDCasMd9nBC4zEjLd3hZj2GmXVzuEMkZCADYjC5NFF",
  "key44": "5zfvzUtNuTTCYX9YQqomMjKszFV9ZX5o5abmcXzJzQcboye9ErAqwXYcKd7cArRRs4BSnmLGPfYvEzHiP5wzxHk"
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
