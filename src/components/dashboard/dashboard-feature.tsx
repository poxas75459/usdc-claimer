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
    "5wL6mrXQfPkeJp2AZ1TkCmVErBnvJwtAfNWRa3J9Xn2smbVRLfCvuDQQToEDRj5nLhWRdGFDaNFvk8CgddmDC8mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAJ5yUBxhoYHSPMbE4WghvyPeZKtcoiFg5wdDyZs1HFVVdgD5FrV5woi95xDLXCVmfX6r3oHakXzh9gJPGXbzd1",
  "key1": "8S2N8HRm63wfrurcuX89hF53HQwwDKwUzXRfRda7goEi3375B1rYX442AfXDSeebfJUotSBW7AZLSxHak677D2k",
  "key2": "iwMpqoP33XTtjw3vetY6xLcjZC1HyLFvECkr6rB3gUtXMeV8XFHe38qP5vda2wWe2iGV7UGbaZRCLHo7Zik97nY",
  "key3": "2GCQ756ez3ENL7bHq86vT5ERB7uHNyvgTaaAKzfqHa2EzcBQuoL4k7SYiFriQjigNaQgNMYvi7SWbFoqwug3wyTH",
  "key4": "2LybAoMaim2vkusEbu7vfPwmNgCPgyYAcfRAYw3rEQiNeAh3H1dB98b2x5uyoDq4f7m41imPaPBd7Dq6DLsEAs1P",
  "key5": "2tmgwWMd3uh6qnFdYkDdqr62AzPDg7FdEvCn9f5zLxaCDVtajbzS4W6z5RbYAiDfAh8juEmRrgcZVXTcHnvPRu5G",
  "key6": "2gPEE1kZqLQRo6CYVx8Y1wzBZG9XuHcKhn2vSeVwMc2eQCWyAqMoF2zKCLqWqhgqLuKTbiUfKXSUBfdoSGfrmxc3",
  "key7": "52WQ4hsCLw3tKz2qfUidcood5uJqEpfWZu3bDSsy9uocCsSH5gEjX31ZsoKCfjbqMrs54VWJddRfPY7XKB8aEK5p",
  "key8": "5AXQA1zeJVF2kqWPBhQ9qoGyWRP8ZDgskGwoDr3GgXKMCoMuajPvU6cMqS7Y2CYGqifsHucxm52RJJw1EVe9zEE4",
  "key9": "59Fh9HJ71kmkC4AHrNoUSyDx1JEq5w53gQ6uESptQeyBQx5wf79WMgpyekhLLGA16o2Ejfd3p8RvzAiRJzitKcuY",
  "key10": "2mYm9oyTXkhWUfJQRFAbrCn1Qe7JxniW5j6WwhuVLGRxausxxCjiTW4f6G42QYkYdKsPr8AD2NjqMET7Bc3q2XW9",
  "key11": "tLZn5EEGRYeNRBnzt3RW69Pfysvw3JWzGQjTi3RVXQqHv1Yq6KwhaMbF1dwsjVjE1FgjtzuxUZj8tQzQzQ6udze",
  "key12": "3NJxqC1GpvSqkEeorsPg81R2Xw5x7KLppEQBWfrmsAPuq36YKvbBgM6mJz3Uv88xcV6JZuJWh1Fedi4x5nRRikKA",
  "key13": "yYPYSPfyYnMdvZuy1tn1GHe1p4NQ19GaBqfJqzamcYrcotoQasTyYzcoGyxfc7VPREfSc2bwLAnrxSMY2SJPi9T",
  "key14": "36xK2JNAWbe76dWbmu94T8p2yZTz5tDc5wUzdknSwfBtH2dnq4NtfL5sm2wrpHACum7ay29ayFCoiVfRFzoMVU4",
  "key15": "3FSXPCHDj23TGAqyf4XHeCsC15sBGrncTGuojTmL6MuMu7yQifsvV2YP9p6kqN4oPvxeWJggRaQP9zUGpoguGgU1",
  "key16": "MSMkSkdQt2LxgHG2E2NkidiMCu4ucDYauX1n6VnGYZq26xkkMc7TUfgZVTvBEM4ExBw6biWywoEtuo5r1rrrfwb",
  "key17": "4u6Xxj7ruVfT3nup4TSqzzzmHSXyuydMiTkHn2zgQ5Gb7RzNUgej2MoGpdqqmTM1aXMVabkHzS2xeD72VRQnzd9A",
  "key18": "25RENT49YMfjV39goicywzBQkE4LqNmNdK8kC7GovTJSxmPvzVcWAjYRKAPRTo8uoNT3vEqHKAfqEbh8MLZNU5EQ",
  "key19": "5EorXB1cYcjB5xz6ALak9QwrDKaCZgxUcHrVk2e3fJYtcpXm7Mw4MwnwSFtrzApAw56iYKwaRFmLtQMm6h8FDe4V",
  "key20": "oMWeC4V4vNYffgCt9svaNQkPanMh6YXXSFZALsnYhzZ3bePf4GCEFFAYF43R21hFTk4aoeiXXN8zrSfKzhUWTqo",
  "key21": "24uSg9gqhR8WkPAMLR5WV1YRgweTWhw9sUZ2raLTcTn6jU3T4pSutoRSQW2SngowDDAjwHGTfCSKZThMhBTLcBrz",
  "key22": "34WpcTuKsxQZSDHRDyamjwrBsE9u9tgQyAtFZ3pXBWXRJ57CNPw8ijV72LJsHnEjxDAbWEG1yNmFUxyNWBZbCejf",
  "key23": "22AKpndLd2t1MaLmtqj2jNPB8BiJ3wwAZ8kWZJDP85gFCKWR47CXKVMrc6hj4hHCbkiW2iH2SLHuvcRmMVUdcUKE",
  "key24": "3Xr6GznW8pEBYTvPZPDbzeSDDYauJ3EN3Xhv5xLaStZGM4ceMTioQeofCH1jTkndEuAYxdbnNdyFi2XYWMwCQGSm",
  "key25": "2vbepaRQs4A8jvgP87VZUkh8q34XVNkhdzBDEHYZGUnSYnrfWRusxS2fWWWce7oqADsno1qDZcACg1EPYcHFLRxn",
  "key26": "3iszL7sypnAKTMcyiFHgsqaKDFTWaNbdz2ZC3hqKdsCrpgrWuS2U4cfXRTKogkqQ2rY2gZvUozPrxrPYH7npZDAL",
  "key27": "23pnRkeyXP86M17PMmowUyfe51jr2CJXGjw3NQTo1mtXq3nKeVxWYWUmVXfZyqwXqYGppkQag4tknFETt9kAMoLo",
  "key28": "1216qfsBo2np323YByHUs7BDid5YvGMedxHjn4nqJVWhDScN4JeSd7SmmT6h13f4V4XGgBLvCTWr9a3vMGp7Mhwr",
  "key29": "4Eoj1Cj9DhwRXaqE3cU2mfLmnNbYoZiNHk8crkuGEsz1dh9scEexEhnbQgo828S6GipQpc86TGW4LesDPdy6GLJi",
  "key30": "2bK1ozbF2WCbvDrPSKhTdX8j6R83xspTfyBKwBLj4ZdGX7xwufsBYYfLvHSfgSYtpSU5jFt9xMMzA7YWyeiWZM6Q",
  "key31": "1zabWJhax5vzjajLbtwgp5RGrXHCq1tJipWhMovLbK1udTA5WRQZDnaJf4qmi9k4nRnu5WoWjkKvmMyuKNMhFQe",
  "key32": "SHRDsxQ3GRZbtVeVwUdgzT4waBngGgjuV5aYp29fMwrGYdsSM4N8hDujHVhW9xiqoxAek97FEe8i6mexQVtsibN",
  "key33": "4i19wn7VmWJps5idvKxMnZ1ZzxCZ9Q9s914yZcyKUQy9Pp6FxmGpzoYR1kvE1J2ghNaikeU2gyeAdRnSnzkHFpNY",
  "key34": "3KVNr1tUpZ5e65s7DXpoSHp25JBYhUJ7uZSarsDHe4FzpSsuF2EEYk6S49ewsiqtjhxKkGFRz4yZzgakMHPg8mxM",
  "key35": "4MNNa73RwZj4TS9ddMjzqGHqs5wFCPfDpCoZxjCWAL9H8m3bNYmEqRkpCmEDKGgK9EoavTMNJAxjHvccWB2oeehG",
  "key36": "2TJr5sxkUediMTSSaURF8pSkeo7TW42baXzAfRH9YsbsLuz2JQB19dPaJ2JpWe8bfRkWZXbJWPkTYFcbfCuiWYnj",
  "key37": "2saETz6m1GWeruB5akTSCx8Yo5ifbjmS6WMrC1EWLVZ9i245JCsMVoX7pgUFfJxWvrgQA1JpwwUMkFeRix8unHyX",
  "key38": "2cbc39qu4vg4N9UfTLa9dVeQH8QRf99FDWDXnFPAK6umgv9ERtiDnMZnf6rJao91LUm6vx4wSGLapY1jSxiscK8F",
  "key39": "4NihtKA7o6cZETJaF4jct3aECMXPHpY3bPTi8APuFKqv4r6os5QHWe8EmpVCA5mxPktzVtWfKnMsYGnL3TCbjSvT"
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
