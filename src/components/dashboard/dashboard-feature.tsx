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
    "36TWqM54rCz4nCu7eNgivEHZXVNQucdHiTu2TDWcpxkjkYVrXqFHcEVqWXY4LQcbkQ4HBkygbG624N76owzZC6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tsQKEPepb14NSaoNmJWh4qsmtJryqgNHJ7J1fKewwT1kkF1pGFqT162pLX55NtWZCg3FDSdpbt5DC6KjrfLuHU",
  "key1": "3W48XN3iugFCSwzahn6zHpkpn1cN1Pk6qHxcuRwGiCGjXr3bEuqvJeHPxfV9RzyqrUDZ7jc1GXUWPQsbwdRGvigz",
  "key2": "WtN956P5a9XHVah7aGrd7SiLmoZdtxMJyVN7quJg8hVkiCqH37nCjKnTAfDLME1Lg24mAdwy3nDp4PvfLMjSa4W",
  "key3": "5RXEsZTD6p4iQtp92caWQuS7JWiLfmZrQCGUkuc1RffnjqaxxRwNk8HD1p6GVt16ZVpkgnxbvHyoGsit9oFVs19i",
  "key4": "2hJzVw9zPXWWVxCK2dQz5k5XnQNLmZGwF4WwJ2WZjeBCZqg3zdaQhV9CjsHGpGCEF18VdBvmFyRTZ5KSYajFahh",
  "key5": "2Ghy4cE8zEzAapDEsBkXgnAPxTaiyLhfEFw42VaPGxD4o9U1HxiBtR97CoA9NPsJf2o4ZwLJxrbQCCP4zUYvit1z",
  "key6": "JWzv4jadkcqjcRFH5eCgaDdNCDdgT4M6CLhxmPYDwFACgKPZ1krh27GDjgt4beb9jRZ11gJmECkrq5smqNj45bN",
  "key7": "4hnxQnLUimic4ab8e2RkjtTBowmajix2qThDATnXPbuNnmyqLmdCuUu9Yjqcr6ntTdGXY6JTvEfFoQ4SEUufAJCV",
  "key8": "4LhPWD7NE2TEEyKTC2dCtCRmcDTTMqcc4mRVSS9cuCj4dEKAK1i1wK4HwqV62aDvXRuCs71yJ4UMRkv23J9hQ4zu",
  "key9": "m4chg7n3Apxbri8rNKBkpe8TJfoW9X6M3ZWUTyTMnh8dR7tsA16wiquCCDfY7HshgFBTTNNnyufpjPYhqH4ydzd",
  "key10": "2qiVG6UgiQrgtL2Up8Gp3Fjh6QTFwkdMXpBd7dHihk79fViWgaaQcSyFGTzdW7SerrR2pHaNnNw2vNpcfe1czVdE",
  "key11": "5ZvM7gwW6PWe2VMr33oH1hJVaRQFqg1DQMk4KEooWLEAeWDDoStiK8pqAVtaLPZp257KNx5MmRWWWSxFXB4vrmz9",
  "key12": "2kJVgWm2yUGzr88ceuNtwoBznnDPm1usJBMs2GzxKATjGgzrcQfhstHVt4q3DdgbLtfyMTouAfoZT6W3PWZTk4V2",
  "key13": "eLjWUyBnjsiy9cd4JBTsEU99nnmzjV3BvV4N7FD97XRKRsg3TLazQUoKndkG39ecUgctx3ggLE6mBjjRAbDvuzd",
  "key14": "5LPq1dZ9yNmnaLnp3Dz45AZLZ18c2W2B1j9YX6AwJvNT3D9NV8iAtkaaWR6KCm5N6p5TM5kt2LDF6uD6FQNUsZGM",
  "key15": "61wyhPJHexNq73ToVnXnZnDo2mhRY7CQK9rC8JTKBzT4HqVQaLpdkskLpfGXShN7jiPbeSAeAGyM2FXFsGgznsrH",
  "key16": "3wMeV6BCzKCset23vaR4bkLNTEVvP7h5r9tK93EYAB3SJEVgADLZdA8XKNAWveTPcm7cYgRYngNGsgS2mcxV3yGo",
  "key17": "2UsAjuzNao1nQPPmRAxy1gRGRQfVVU4JdcuGJEbVnvHDgAURB4tBjhg6aspH7XmEdZTXxHGBXCo7BtzYKWhb2fu6",
  "key18": "49RoCY9YUZbVA4hjeZUvnFbhu8E4TMrqbCmreLd6RY9fuWMWqidu4GxYfvvzv4MdYHGjXQSh9rSvQJfyBLqoLJ43",
  "key19": "5DCbCELtBvnixeBHowxALGdrwB4Lste5G3Vpr5iC74CERLmKosBvQ1qWrGYfy9K8gbaBQfcfy1G9J8VQYRDsWiEg",
  "key20": "34UZ38G57XdNQUqrNdtfZ4gDceZtyd2W8c5h2Uqoo7wUrwBPxL56Fb6xGY6qQQNoub1iGJMDovk7DUHikmeY3bmM",
  "key21": "bp1L1HjBbhGWgVA7KG5wyU5xSNxAKyndffz1JLrY9PgEBUwFsxTAUpunp1utw2ebrv53vL27wZftKVbbExkaF6A",
  "key22": "JYAJ6bruRhiuybdkEwGXaoVx82tZizPYz2W7SVWsB5S7AtK2VCSkN8CqQQ5Qm5dFNkR2C11d9CPnh7EDxd5shTQ",
  "key23": "3CjqYGKPSJhiVyzEPcXii93sNGounvxewzC3ZCtFocDsKtskPcUepJuYrrwNKNQBeR91TXeuExGJDCQfuKhWYQig",
  "key24": "2g66od6keoZUMoQ2vQSTa73ujrFRncRwAB2TNGP16ugSbrqPqeYbd1EwEiZb3zcW4g9tuCRabcyDDy8PGg5n62BT",
  "key25": "4GRs2suzyKB4aN4EvRVrkY8thBb5Zd6fRDjBq2KADruuhGTZDcQVyQTuFPTyjUcZ7A3ogjpxwb8jLKcBacwkhrwJ",
  "key26": "5bAivpXQb3egzt9gFZKE7ih8ggFpu5LM9ejUbgygyJiq64AErm1Q9gByvTzuFQNrxPvJAbyuRNizy2VUzYFuoetn",
  "key27": "KHF5KArteJZK36UGET92n7C38GEs6cZG6eHjE7pQ4wDkA8uxXxdsnPQXCydBE4wPEv43VV2RAp9722oNfKRSMeF",
  "key28": "5dYTUTgHoE7VTgX4nGwxJHUiRMfBPhAaQU5YjCUyRoNBMaHTnxvZXCpgBMtanppmfC1SfUCPbEjb8JrrfqpiPjpX",
  "key29": "55eyihLtLN5nJEUtr6hAunPwuXDTZ9jUo25LgeaGMSCnA3yBKCdGujWBRty2c4SEXassfrM1Wt5hjqKEbeCHRmcc",
  "key30": "55TzANM2bGBmyzYPuL5Ns685LmgNMJi1c2bKLLDatU9LqNaReJkaWUeKC8kCMt9BGDnB6mBe9LhN6U5k4vwCerNA",
  "key31": "4Xqe129jLLUyPwcsvoPFiPG584E9XExuFEAFk4PEmGWa4Q4XyQ6RNATyPjSd56i2RqecMriPqLEk7VGTJKaEuckS",
  "key32": "4CWKe5htS3fC31YEjUdsjo2wkLqcC8FWfWE4FRbtqJ7SHFtkECM1pT8y7ykjzAVHrqvYvCCVbB3WFBA47WQZvLkM",
  "key33": "3FvR1ANCurZ45FaJqTSaawjrZWA8gjcjGUNTdxvNeyjyRJngsdAxNGwaZiMhJx1XB57S8SSTqwZmnUTbx6XtkPtn",
  "key34": "43ALFuFTtQ1HkVWYVaGMSi57bthoNyLFpzrE85R3LkcYX9y3wKY762gX8WPqqg4A1Qyw317ebC1XoabTssJFmwhF",
  "key35": "4N8pPkgH2hXDvBNXXNS8rxG35zdStjtC6d2FDc1FrkHUyhHtmnDUc4iaQWsuomQRsUStTyhkrberN8UCxqavXTQz",
  "key36": "NPVjbmsJ8UNcQr25feUsZ9T1mbB9pJQ9gGT5vjtugZv3hgpYJhWgrfHLnwJtYcTs3RA1aipL7rHxZgz96oeJhQG",
  "key37": "4BWJ1XbyNGnCT7QQZmvRmZnbfcfKGQdvSpkSDwTWFnC1K4mXfFvCADZwNAHyi7uqWJgKgN28MDaJwAgUgb5KkBmg",
  "key38": "4M1Fd37Fq6ahaWBvgbmaJnPY5Nm7Dbzh9mDDnJC1Hbhg9jTkafji41uM13rKLhV798UjXt6wH3RP6WHmiEu2Fzfh",
  "key39": "5qtEhqgwRZhMf9z2KFvTiMwvj1YZin62zzHYBuPfAnYP9sw2fDC3GrPJSuYiRL14qJGiJENneDfxARdatG8X8xcu",
  "key40": "hDHts45QaKu5268BQDU9saaoDrtQirGsfH8D96RCEFHYTf1hSpVGdnay3tLTTGpTRzqMmvW4gJDUf41SK7qs7tb",
  "key41": "3b57Z7yK3ix129bvFcihxKxW8MUiPPkVk17iuBBVpqLv3kDGPZnDwmRkyjZJQNbK5YBpvwj6TUyintmHRCQMj58N",
  "key42": "d8tb3TjAuQLsgLifuozvpSh9kJtbMvUDeMkzSPS8hGjd6az84a8K4zMvhNw52VYLSstoFuQV3mCrMmmk2RQjtcG"
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
