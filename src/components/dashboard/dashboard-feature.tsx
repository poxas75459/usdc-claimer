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
    "e1qfru4RibPinGQkssgqJrhbx7UTcqeLCotA3aYn8PD38Z8ob18FudXkLGkcHAY7YgGaUrn7t7ZVicWcb5Hxhvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vY3YYdjHPQLuwzKUEar3bHkx6NYmngB7PFCQRDEQNijQdHE3LigYEh6noqyFz5ii7s7UuAPbYTc9shs7TcfnXyM",
  "key1": "3spSCjSEXrgWdTyCQTqFKtXqWvyFtNHstpXziR4NWYFQLxQm8vGhT25f4dRG8yvRy3ESfm3BNUUvtrFv4igAHj5v",
  "key2": "625ZM76JDWHPTcGg9q6qBDyVPbhvXqEtz7AYA5rC8xcGPdCHkgEkrqdN3sAgAszQE2fKco2SN2jzNe824fbU3Ja2",
  "key3": "3vzGKTZiGPY2MGKGLp4TWaMkmzrY4YTNkZwdCQK2n9pdc4gBzHfcqpWZe6t8TXvqu54maeNr4hDFtqFsKA2DaWnr",
  "key4": "5o78ks3QZYj6ARNHKcCpaCC9eouF8UtjZRGzHhZTQkAKcUtXQnwqa7FiEJ6d1ftqfi5wG9ve435K9LAZNzPBj6B6",
  "key5": "3Fh3VZhf98iJadqD4LPBjeXynRTDtUhGKhLE2rNn8A8ves8KoLdbFXU1sj5DKrWhVMNH5Mj77x3fCzHWd5ZFAWze",
  "key6": "41QMcbqM2a9LxEAkAgEAmHF43nSYD7uQHeETovzsm8r2ciE6kMDLnjmQFBeCJ4BH8uogkokrCxu2tErf5jTPUSQc",
  "key7": "4YvzcqkVKMKXPUrry68qUyh49Cp9n8bTuYVTMx9c58ecZG7WGJQYuCtb2u7iu8Sb1GTsy1aLR4KbzKstW9vNnWYx",
  "key8": "45hgAGhovtGTBCV4fT2Qw9Vn8tkB4pwbtq9HjNQSPRRGVGAsyMZkrkmGG1F1cT3MuoULvRDw1ksiU6xPocXpgPcK",
  "key9": "4a6Vq4Ek2roxFcU9SLvDbpQ985ZbFC8CvJYDZevFtUW7wLZK6KZipGSTtUy2xFyMEZw298CXUyMVd6ETEsM24cZ8",
  "key10": "DPVfsw65ZzD9jJ4tj1GgnHBcfQtTWFFB5bqJpLiXM3juRbKVjucA8iXXvQFaMgpYfyqcmajwsDfNA9aSQuuh2NS",
  "key11": "2mRLbgkWYZwvTabtsNcyrhSuHsPLWiqSXUNhStiJvhiFo7UMFHo7dWqTw54bydavVMKX7LKNWqf5JKx6xVv3cdqT",
  "key12": "3d3dRJwqbcjsK7A7tC4im47Fer12ZhDQfWJmrvRmKEQz2GV4CgUXipV27mF2yecGy1UjHQvXCchBPqa12Nxe9xnh",
  "key13": "4HGtsTVmANkdH3NjUzNrBqssWtAA4fTnZNVXmtWfYAAhVn5i9moekkmJgx9LUV9866LZ5zeqU7NY9iceMUQdVEsu",
  "key14": "4Qv54yZHY1xPjQJ5Xoj8dX6cywCTX4jkgw7fNufE5hmjsi1oeKpTvP6AqxpnZuswn19ZK4EDsDxSCYfLP6Sfcx2M",
  "key15": "3YZFNvztVr6BYnowu66ziSwLPye9k1ZmYufiBbP82ZLs5J76vRmpXvnvnm34LmQy8KkPtA8tovTU5Q4Ctmw5yFag",
  "key16": "5oZFS2JWLu97j99yoqLdj82hw4yyZE3VVPX2q4cEFLh7akGjzjJeYpDqJVqvBkdFtTDSW61RB37RrwFWXipGdxbL",
  "key17": "3bWQYn5nmRj2ZbDzhUyYGfTjkN8tLAWsTCiymeNKEjHwk55P4QSPuCHVbH4d69hjS7JLDn2qvZ6zf4b5d3xUH59G",
  "key18": "5esAHDCbJJiTVybuYWUneNTeeue3ZzKwMD6DBuiF7JhU54qH6mRWXGZXPKtLcWNZ1DRWkSWb9cxt3GiaBxC87L5F",
  "key19": "2mYvTBDPxdwgJY7Loi4fFrBkt6NsY2EFwYDZGzUS1bVFXUSdeDj5B7HL4WHS1qLaEXLWWnPrGd6vLsDL4oVgF7Yu",
  "key20": "kQymV32SK84JwSGwz8T7fG2QNTY8MTNSnnaCTWgmhcvfK11Qjh8sm2pC6hfwHfpDHVzQUt5PWdCUEbhXT5ogXQv",
  "key21": "2kYfhv2jaTe5NzGNKaKn8DFCN2U4TsRbpJswAi8oE7azQcbxzru1DEDLdRSNWjaieVSyxmAVPTmi4jwR1xSCaJWx",
  "key22": "4weuQbdG2WhRftX9LTFxCYPVocuKwxitEQRCxGN8XkPS2Sy8KLF1s9oM86pFZHYBN8bkkXLUtvDy649YKuHZjU19",
  "key23": "28xi6AqA9wX8EQccdxnnMenVH4MU2xV1WeAxJrUr17vbeRVusL2LvVt89v6WUSMZj7yxYf34fTeg9MJfKavkXWoj",
  "key24": "5LAvspAS8w6Nn2vaU2Du7QzheGEUTCjt8nLWFNtbWCSgdcak5XXJGZfwY4peHYfdafrebZLM1PouX12Q7DcsMko7",
  "key25": "41w5rdS6bDfGXcmFQ2ijrJjDsyzuHgkgPw5ZJV31CxKmBPdzMcXoKnfRBzWoqmWKKUzFPGYxVmCcSADv1npRWX9b",
  "key26": "5Csbmz74dYBEkuYyPLfgB4diLdYUNmum9p7o7rtoYy6ET8BBSuyhcf17WwJQs2qGXVAny2zhfryghrRzmLfvjne5",
  "key27": "2hJqcWszRPqXKMLA4rHuaMewxjYbknRHCRTMB3uR7vaH5iDqtEuRWLbrpUftiBUgYF7LBw9DEXyafDuaqSveehrN",
  "key28": "2FXatpAUpMrETS5TLr7jhWiSqpJM2dxmxq3YEMpeigoZiCZfxUxa1YWod67vunCi1cDSP1GcoLRdQ4x9SKQKt23w",
  "key29": "2L2bLTfYXFo7QSzydkegLseWamFcngMZ5nzpqg2MidoCVoNWBPcBxLjrz3viGWTZvnNpR1guragkV7DXdJjAva97",
  "key30": "51urRUJZASmyKcvvXBUTZxHnmgGjArvD69Pga4fyH19XfZbq9fDXURiUYDnwVBUMUzZptrKiTrgJg4KPNTLScCwi",
  "key31": "3Vi1dYGFu4SNH2bsgX1X3zqNWeSKgkanjThkobCyUcJNY6BqdfUX91MAYt3sk6oPemmRXhQ6aVNSQgdsK4CouXLf",
  "key32": "5HLxgL7uv9borHAUJDrzPeCx74TGxYh9yG7S8NeCzRKrATekd2w2DtfPvnykLjjaaKGWndo4KFrNj3znGuFERaN8",
  "key33": "2bdzrcmoFTH3u33DJpuscFZb3Bhj9B7yDwfJHCbyX3g6pxyGamYUNaCkK6dJpxsL1mJfqpEntYi4p1sLQjxSQyPN",
  "key34": "5cCGjgZdxxnVFhqqH4oCyUupRNXwtWXX1qQMozBhamdZCV4zpp4FzmpzrVZ7jroAzvWr3KGWsHeBKKwctPB9aD2q",
  "key35": "2djwpAmn6vVhyLJ5fAiwfDLi6rkfgmQfiiwN8BwiVWMCgchdgTYkoRbxx18r7ERphbf331HWuFiLeyiCUEidPPud",
  "key36": "4AfffGa6egJowxXGyYL5KqpDCHbrwfxXGuAnAytCZdr169LvHvpCiARBmbGXCYc9xN2Lqw4CYt3oumBeXUiaaHSH",
  "key37": "3txg96SpXsPDZ4eDFmLCUH8F91VNmDgyqGuGKYwmUHvL3xskbTNLJmtLaFa4qk31Tfv1FyAsyHHVeiG1viCbfjU",
  "key38": "215ArE8jTpeuTV3LJMntUuQtWMtwfwW71ooutcpNJmD3ywWmqhVia9WbnggxYNkyEn3d8EQCcewMWqLLm8iLiapR",
  "key39": "WHnPpWR51vq5NikLf14mAZicuAgkLHiVm6Hi5pf4j98NPHMPbvMNSqzMbdnLGtNmL9bwbCu9F6FJFXZmCc2bY8t",
  "key40": "63dvHjxDDfZTwTQhzP9XcNhEfQ2DCp6UsjkWaWRTS8ehP6h3DqLt1YUEgxbcyeJnv9mehJun1qvRQ35fC5XFpUtJ",
  "key41": "4BFc4tjCrTtRWxn9UYcQ13naPTK9hXMJgCzeBucHmK2picdUesAHGVJ15XGBnvZtj9a4hFgTEzi2vcBmTJrC8VvA",
  "key42": "k4tMeAsGGEQtzSZfsvNyaJsg8hCa8GZU2dqigG2Wfsnos2QBKa7ZVRHZV1BUJMcP5CaDV6NQrR4AL8QjMo2WTTr",
  "key43": "4R4fxnjK9kMdqDHV5UXPBG6gQaXtXWWNoUCQTsuuxfwkGp5ERbNFhHR6NPsKJuE86TyQPnuFNHoWKYZyJKDkhtDK",
  "key44": "3Nf3NneDejfVjGeMPkKdHu4StWbL23twqtpasoz6df2Y6zGEfRKfNNi8xbuNeVmG8AvyQRwCsSYRXmBv1LAU1Du6",
  "key45": "4LbQ7djgN3VqvfXTHHHVarwfHjjiWGTCmZfmE76q9m8zgbnMEjLse3tBs6Zh3fctmJqa7q636hrRKKYcuyMXWaug",
  "key46": "34jmnSfUeoVWusTqN1vcsqSuKHiK7jQYh2yeXiykuqd9sK6F1MSVGvHLvjY6HpwhhZaYVgk1x1k6sqC6zFPR3zkG",
  "key47": "5KFAxm2Rx3tx5GgWRKpG1ENgBBkgPZxmiaxzohXjvERfYq7KZQ34KYsenuEEUz8Fph8Bj3fyiXRBJerVfCqMxRno"
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
