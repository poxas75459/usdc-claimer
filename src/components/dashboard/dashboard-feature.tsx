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
    "5VFpeL1V43tqmgevXjkJYXGYbGDozbReHAE1Fns2UHRKdvxrKqgUYxiVCkNSwnVem76HgmLsgeTi3boZnCK5iRDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQcSvYKgNdXAHY2UBCUaMiTQ7CPKS5BPP1mfrsU4J4dK7wtU5gA6xCzDHuwXBwPurH7V6LVnW5kDrM1f45mATYy",
  "key1": "2zoJFPapmq2Cy4bm5VjALvoYjv9m92neznk9mU723cmVmQEjcsZhB4NqKhk3jKyM5NpvUqeKurgyAuVkgiuW8TSQ",
  "key2": "2YrFXdypCstqg2DtZaJpx3b3SFdLXBhRBS2Rwrg3Ge3hHPsV4iX5uN46DiZNFg7QTDaqN7qYiBAPCnsQ4LtdVUMb",
  "key3": "4yWiDeVYsPqAhEVmfWo6SomSDTnvS9ENuQ3LZ4918qmaVWH9nQ4ay5Z6vwKJwrCQQb7zoRck3Ag7wf3S3NGSoRL4",
  "key4": "wnQPyx1unkfGRoXFUSZ341k1NFvcxDyC25xZnWPTv972kS1QfJwSYq79Nv7CbFmskqRmCY9SnJHT5hCwKg2nusq",
  "key5": "47qVKotjbMmbVhkx3WxBzS6agNvq7DEykHzKYBHb3VrGTARBFtpXsAVMV6zcnLk1Gz5cu27g3X25EjjivrQpce8B",
  "key6": "3Smk4w9Trs2rT5freKb5oPW7H6cwN2GgFjzh5mBEktX53c2jaRQsicFsSwJgrsnajLa3VBRCv1NBsxWbuCNkP6eQ",
  "key7": "4M2ZmVm5tKaCLnB23PyyBLp4VQA2FCdDCmv4BodMpNi57qthtZRuMzk1WnCzaSq9T9oTnhTgm7MsJaJgCALqdXjU",
  "key8": "2yDmsPXSzwP6AkQ7q22v5ENxm9vbNEQqscZUDLNRoh8f5nsWt4FY57Y7JHcEP94BUEdVzdoaBsJCBRAECnLsJMGZ",
  "key9": "2hd3wbJqmo5QxGwDLoy6pwVRnQHu6YmVWsDfPUFWRdxpbizqf5LZ1UkwJHYqiRSim13TCcXSrVdMgnEVgkryNRuU",
  "key10": "5supcW1b2BvAfJFQ85mqvQWP6iCsRFx4yQJxbvSmcJXjBCZQW9fVAFb5iHBGdfQLuKikmiu6hFjyC2N2djQVHSGR",
  "key11": "3pfMD2P4nwcVLT3qaeMWhAQFMZpabBgAoqyzDybTbTLXKySmjxHTfKd7nEpw2jzF91y1zRRw7BmCdcX4BKqcmjB1",
  "key12": "2HzWWhRBWPF23Mr4iEpWGiYWnsr8epP4pcRnG5evAhRehn6P1CDft4Kxy1Xb9iKPQgHpRNKeukcG5fzsrj9MQjLW",
  "key13": "42bMzqDHwrquYduPV9yEJMcvZdy1zEVAaVPKBGx3x8JcANgNTP2yKhdjZD66tVw3PReg2Ec95A4DxJj3fGgtRpzC",
  "key14": "4RuegwDGeDq2bFXRrbAiPsiRASPX2rFwsatmisTpbW4ou7ySvzTVhKquMm81jVJwuwN9uq2TvGeoxeXmxhowqSLZ",
  "key15": "4A1zT5P6G4pHFrBfwE9JnEqkihMu5QLwCGAChyPnFgikxJs49qXhLVuxMF9QiuuzpZDbik16cXsAxWUfgL7Spd8B",
  "key16": "2xWzDyo4ncDnmAaEBfQE9za45NqFKwYEejxhGkct5JQfuiKTTQPt45f98qfhYGq4UBnUsRipC8R8zEAsv3RANEu4",
  "key17": "2SnnJyjBY5ob2ZjbvprJkPGWoAp7cKGGaZmE23GxJ8n3VnKtiKjRJzpAfP2WUmd7VD4tKMNswPBeNcsNndbowzqM",
  "key18": "3ArupNa9pLf1puZsMkMx3g2fKhLHuWE4qqg7rgUa3U4xrR1vad3GjwptA5ZQVZJJws1gtS3GZMCGXdXb4ndKB8Rw",
  "key19": "4B2cbZ458pmthkuQQniznk6jJULNa5ruNhvDGUSg6Q6sD5aYps91pGqZFaxTzZdkfeeFH5NugC4WNda2TBK6XC3J",
  "key20": "46pdwQVQhfakJFZyfkwtqaiWbHyd64nJ8Rr2ZdxTSc32vKjcqiaxU6vfx47rB6uMB6rfDoCH8GZGv9U3izGzgGVu",
  "key21": "3Noe3xvunkrTrESgnybyg7wPYnwXLa5k8ifgbNAUa7AeZvX3bwsn3NB2ptupNMRCNTdUDVDGfTpEPivrzxGMZuVR",
  "key22": "58DPUY2iSSEtA5PSGiALkmBHqzJqjuKPsLhStyhCiByv72hKRkYeGEbeXmCDBhfDdVrecDm7Gfs35Qv5xG7q8hjT",
  "key23": "5B4SV35bv21mugDs4EsrhvHBSoU4Dbce56xUqHhELASpJV1st5RTGdKAptxcQ8s7prKtmuL4mwYQycAm7WanMKwH",
  "key24": "4mc7rc3PzS7vbu5XchYx161uGA1GAfufuJLj1Z9DFQmxXshfAM43Znueik64yWto5noV6cA45LdQqkAxEyE3pv8x",
  "key25": "57UH6vmQZo4wpr89av9czEQn53LvJCe6Pp94WJAUCLMQh8gr2y12cAmXanKLeMkJEqasSp7LYWmBAJuWCTejSW7A",
  "key26": "4TU9mS489oJ4xexxQ2dxXU2mX7y8Wc6cXzaQXDFpmeaTEYHX7UVdw3NhWgSxa25zwUijtmwCoGj51ByynGKgUpin",
  "key27": "2HWxvyrD55agbAtKRpSauAjqMFenYtUBV9kLLWXpkquwYFqrh41DqdbY2x4xTWHf1cdgJdMqz4JJfFPzm36FjBL9",
  "key28": "w6o8G3e9xjrmF4LsTmrVzmNU2Uup4r2SXanyjaA56U1CMWbBntauWqp6ym8cosjqQ9yUMUnmVb6Vob4BjwZu3BM",
  "key29": "2wfg1dFZZ4GPHsUKGNtBaSTyrD6jHVxZXae3RLpnEKu4QYRazXiNHoYkDD7NiPEmW1M6tAoXHiMWn9u9vimtAjyQ",
  "key30": "gnQWCB6SKWZ7AkxLShJ7y5Q3c2M5VYsmA64gdj1Bkx8XCcRrs6dEQ63JLPM7GcGDmuus5Ha2Cnny2oH47mabZEV",
  "key31": "ZKbBtrxk8dXZN5axvQmWpGgBPXXT6Gyc8tWymdytm2SPWsQEsx7gPZDBeN8EcAqiYeLreMgEgQoZZXZJnQ3o23o",
  "key32": "3PeVBmQaSGS8CZHNNanKEuSpjwtzwoh4ZfzANdEA4eNmmkVDE26jR4aLi6F9m152gXza7qSDpTLCNPx98UsbNG3Y",
  "key33": "4KtnFCWzbmyHCcuTpEvf47BGBBjPgdX5ZAC6yMWZiQe9dxT6J1y9hbEmHbkYNZYs2pBJGpK314FNAR1Tw6e6CKAP",
  "key34": "44DVSDZmcaMXWrWKvsej1PhcQiuUjvUvp8TV5ghCZ9Szr4ibp6paU5q8TqX3CN5n9WrgdTRPuVNCFrP3hhQaUM3i",
  "key35": "rBkv5T5EjgiUJH8jbUfHiTJEMZCh8qqBtLngPMe4E9TkrXgSBNPNnx4aVxSZo8tTvWQjykxX9DEVS8KVkZ1K6mi",
  "key36": "jSGNfxfqjqmC99EgECqsgiVMnoPr7g5GjhgPFwj4JXTQN5XfbSYVSxEn4guPtWMupbmnxryorVCuu7WWNoPVrij",
  "key37": "4jLxfNgngv4jeZAGrayBztbqYKE5QN3tiAgzVeXPxWTWm6u3py6xVcgR3Bf6BikP74xiY2hdgfHrpN27iyhTaRVm"
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
