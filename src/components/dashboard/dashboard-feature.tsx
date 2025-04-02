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
    "3HPkAxJvC6Tm8ukEtA4ubDLZUDkHEs9euRFkcsqwULucek75iTjgBmiNv4XnPRz7SY6Wt9Pnyo6eu5NHqC5Tx2qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRTnyYdzfbAYsQKH9VCpohNjbGVg1A38Rva9DngqxU4csVAM9QkiDyFVXwB5pZFfpueaEa5uJCJ222bNfk1kkGT",
  "key1": "2fSaWLcNxngHqXsgfsR9nif4seVAoGLiKqjJywr94X8d3oCwUdWP4RQH1Eec1yAoFTvqYtVwnqGgHUgpERLVfQgU",
  "key2": "4TVhkRidRD9b2cDUo8iisCNT3Nd3GPvPcUiBm2aekKCThRdzXgy4FLxCUgN34ys4TUUGe9TFbtXXh6FiRuWU3prq",
  "key3": "3TLknSMmPkZBvUsTuYCDbuq4kDioqsg4g2rYF1Ae5sqjEFZCUoSRn3bZoLntLBXsE9oMTKgbW1GHfrrGZauEJAGx",
  "key4": "X9Be8FcJYyGcYrVXN24QZPw5274fbWq77fymXEEx33V8FUdNEtitY9VyazvheMAaxKPbJjAQW6CJ1gWphRAZius",
  "key5": "3Z6pu5MAvSDzUvFq3mxNt2wxmGT7sRxXPS15uiMpDRJvt6dN3n4f3Ukk9aJHotHjRTAA1XQAXtwmdcLjQdpN59Dp",
  "key6": "4N2DNSTdaHKs3Rs55HgKJXVAqDbvRFmVCr7XJ26DgALdEt17rqAZtbPQmKP4zQKuGrUKaT3ToCUFWefWWKn3Mf8d",
  "key7": "4J11QykcCQPCAUozus9HYS8y8yKmDEwLR2eZ9HLsBdDCVKzxdfqZrTPiDRnwK45j5dcBEhBsXcpjsmNnPrnRQWXZ",
  "key8": "5mVMaJ4V8r9eNGDMopy5798UWANja93c1Wc2YQLtNz6wbYWLBTjBWAqZ734ReGp8PSWTH2iqUgmgGsnmhNXyoHeR",
  "key9": "3fhHm5gNJqP58uxNq3ChTGRuCyzi6ApJdhHQmvtQTzVg2SC3eXTpZzWcoJ7wsb1w4Lzto6tK8B6x32XoQ67TtoWJ",
  "key10": "2KKnm8iqdYGzW347MKHRn7gAu5FdiYYKFdG735BbWKkRQBHqAAiWZexKjCrAAbw7KsJmNYzDBgvds3265WwqEoFo",
  "key11": "4oe4TPtco6aSpXLBcbsWT84xKNNGbKgUtCcCLSqk5v3fjPdQorDJNoWuTvpTicBVyVg2JqaXR9Bbxtx7s68Sto1g",
  "key12": "3Fy39aKnrP8d1WpGBzL9R3XT6iXLjK9iz1DjBNisWLRaSjAoSzXVL3VLQQAnxfpzCgNw9WT7MWzKbATgZMSxDJez",
  "key13": "5vitBw1epkFA3tLwmyneY6kWBvcr4BgBdKdAsun5VooGVQawiGQHdbMP3nEDUxXMKBXy5gbNGx3tYSE1GiUKMWih",
  "key14": "42cqcMfkRc1NvpfELPjcEb6LSp7zM6VzdZLTJsaBh7d8TEz9WgyMsAQ5wMeWWmS3YAimN8n5NCQEoYURophrZXZQ",
  "key15": "4UFn8ihGcdCYrg4NiURa6WHmKdmFQkd4zjp2Y4W6JYepwXCn3ftvVGmRKc3WUBqZNymMup91AXmXnmeWeKadFdGk",
  "key16": "3Jx6sNJQAstdmHLjhhfi5xRk5kAxMxF39f2VkuzD4b2REvYeAaYsetXNGj6pGjGZdEhgin8bZTHE6TbL6ZYcEiLE",
  "key17": "74sLRtk6MnK9YdD8DHtnoConAuMqoFA8TuYVwXYr27xYYKsnW98wRsrLSDnDm1YGr7qTh1RC6tTRpLAQWAJaSFe",
  "key18": "cCaGKhZXrGM9FgxmVSfnHd3vaXuurG1JeqTTJLqA5mvsuXycHtQ2geusWtDV68yLmKiEg4GFqjC88B1jJximti8",
  "key19": "rwVenhMZQ33YL2MVBvvvMRHjbdVddVpJRL37KQJ5xcf6yk2LZJA7GTGKEiEbEYDCw72p9WZVCGFqQYvGvNdA4d3",
  "key20": "49RYE9EcJRoroufbDvsMCEBdh48koHNaAK3suAmoMJeUSB7qevAdtatLWpfVb9ucX1h5qc42WWwFwtnyda2tNQdr",
  "key21": "2WLi37EKyoUhe9rt8mjZFzJTaruVwe7DYJMeVEy75YVDt269e5zVaddwMwvGURM4W4tCYdvRUn8M6QhWZnRHou4E",
  "key22": "4iN8Q6rsUEK2247U3jZ4SCG2cDQxbYRWNMoR2u6xgD44WYnQMp9kb6oBsSzQXd3MnVtX5VsXxxC4bQdYtus5vLVT",
  "key23": "JG9EEoiKR3QWpuzHh9dQYero6v1nhiwvc2GhcXhweHpYKEHY1xVsUXEDgrNSLoKQEMrzaGdRdjS9s4oPfvHUuGQ",
  "key24": "4vSwV9DnNLmRGqdtNU3qd5P4fE368UMkMmcrfb93cRJX3rLBMENsHjq6xKZBr2YACzvKr24j8t1wDh7WCSFmu3we",
  "key25": "4d1FwVwCwsd4gvhfVs8XLtpa8kwjNfuCQmE1iGQr6jgqAr9inFP9QeB8z4zaokSVgW2ntZzcr1acgYdvzEvoHAwC",
  "key26": "4mmsXgqQdqXRwYYHmuE5MyMawVnFdCXcpoANLwbNvx1hVAvix95a8YFfF8EPLE6zw64N5xZGyFykJ3gaiGd5Q5Qb",
  "key27": "25L19zYkDnf6j8v4XbGQJxt74vA5xuBB8c2uT1eD7AYvXwAKqW2ATujMwg5RLDRJzRYADMwrUEUbe4UUi1LitzxG",
  "key28": "4wyKpG1Zjujukxhm2KrX1tapYU8AbGRPdrjQAoyNZaLu8qQy1GSUYiZ92nLtBM4ixgnPTPJHqten4KH2zDSok3sZ",
  "key29": "21qtTD8SjMN5vqCdRbx9JWShmjfa2T2Q14DpFy18P1p5N1Zdm3X3DweFcGVTBXNDZ7iYgcdHj6tU1CnGLc3bkWu4",
  "key30": "5Ad8qghxSGGu7aXLGt7NaBDoozSYTRf4fWcBGhXVT8Cfn9vpkRHXW55pMeVn3ApjVMf1JVksntczvTMwHm4RSjGS",
  "key31": "Dk414xZXWwoEKbyNJneMKWQsRjVeR4CoFxT6Q2Uw7PobVkacuf9tNrNpdxDBRpTcm5BkLWaQRt6GxkBqQ93RFAk",
  "key32": "984vwZod8esSsHv4kMArGx9TPE9jjbLUNiKK37Wa8BuRNVViUnqydiRbRKMnnc45xX77t3gaBPjNeaTzeiz3N13",
  "key33": "Xb6gPsLPcyPuNDTBmZZCKSmmVttDojaERArXurxWe31Tztr2tCXpm238ajtVN8fpbNoMJns5ygAJf9mTp6wVWSk",
  "key34": "5kfFUk9jsAyHtaWJabYL5A8igcwmG2hAboM3Xc71PN9NKGqgvw7mPwHpQDtiMsW9DaNCGiQaMCdTa8VTXFBw5n12",
  "key35": "33V31Te9XRmY2P3SDVywpDs4TEgSFkcS8dH3ryzQhJMn1wcLmGggDvb5AcjJ6XH2jrbHEESP6LzmXqUPhyPmQXgq",
  "key36": "4XkqymHRt1cGbsJA5yDnjUQbxbQJ8Y88ATydCDw92QXjWFEaoRrBdKzDkUz8NajibTw5VtBBUwxuhMUmjxLGksqb",
  "key37": "4VV7kSBgVPFk8fabnuemoAUMmhRrmmrkfbisDSQVJsJedAMbNv22aZ37GyBCrSX2J5ChLvjUHSQh2c7HjZpqkDxK",
  "key38": "6gSgMuYJ6EKQhot7M7Y3pJPa92z3uWmvh2mu3q4FNTYw5hhvf2pNayvf9J61zE8oCDtD8QaGP6jBFkw6XhGqU9h",
  "key39": "3Zf3wX4CPuJstajP8QK7Db2J8FzVSpxwoMYxqFtyofXkviJdciVYpmeivVN4KLuPjq3fgZxkbUxQgwDx8j4VVy4p",
  "key40": "26fEhTC9xuoLaWepZYir5cDhYodLnBswQmu97kM7QEMPrdGZ8vyGy7KzhRSnQdwRSPscWhN18fR4WmgU6351NzTm",
  "key41": "2QbNhScdvb3bezPMdy5Th5jGfLnitcyFZcGSDR5oJDeqmX2CmofSkyCFPCNtevGzPyvbUayiBsh1vAuesanL4rqH",
  "key42": "4anzeXDxqDfsQdRn9NbEkcJtgxGTcVG9AxGAF6co3qLjPNGmpFWNqzp9h68nchmZ14PCSJNwGzdPZQui83jt3qiv",
  "key43": "54Uitp1mjwnvWmZ4YmvqaycGxKDw81qGWi6n6z43ZK5GBGGr69bybz7w8PTF75dZ7DCWwdLKVdvPFqM9S4QZ1vfz",
  "key44": "4gqeMYDvQ7fjkM9hTHV315ffTaWAqbWpj7BE3HERmRoiEYtNkUd3zQQbMfmMh7qQR2E5AJn6b5KqoRFRFst1J2sz"
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
