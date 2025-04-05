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
    "288saz67PyKy6X8RU8sj1HRRDcSqx7PiBLc1Abr4xQeJvaLszEMgUgqiEg55bjLfQX9KMi5fQfcpBe9bwyujTxCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55o7iyPtfjzW9azkVqZnx7UW44SQWucTDU66kfwWKRMJiSRBXRUru4ZUUV4quW1PF6iq9v6Fd8AGCdAvbR9xD69t",
  "key1": "jHU7bR5MPgKuvJ1uaHSBwXkXR5F3pQSbHCuEuwxzpxjQZUvHrh3Q7ibZCDhTMu4PGkPQAZ8PX2NAbpL6mNBr4iq",
  "key2": "2QDMwjjaJ813bUYRZRFNPbHiZ31vzUjUVEGJcYbrKnvKMuv7HyJPm6DpC6CBD1bUgL7rf8D5GSSqFohry8Lc4ZJv",
  "key3": "2yhdoBgDRjauidqgn5KuNV9gn1PMP3h3J5payhvULBV1GxoihpHdr5nRaG1nMVFqMyFzPDLRRisSwjhKNoY26WGq",
  "key4": "ZPd7cfpHLcNdKRin177raGpWqyz3z1YjPfZsUPuSCTrWXeAxEF4sBqe1kyuAPx2kw26hPpbp7D6it7JVxjdm8Hd",
  "key5": "2B47RRzNi1QsymSjuE7kVsQYZcKh4mM3nbGa6iWy66DPwk64L95eUNCSrGa48p52J1jph61mJKrg9zm7vMKWM5AA",
  "key6": "33RoVUTTpoFxaXhzmDJnRHGeHNQi9i1UNPtvnViNbevmxgm9PuzXuUM4HsiwPxUDh9Hjpm35skXg3CN5FCAdSU5Q",
  "key7": "2zSqBDhTioHNn7keQQ78h6MFa67XNu8U4QZiwzheKL7mDtDUhv1pJJpVxVs14FjYcbU9XxpLuCENm9qC2uoFH3aF",
  "key8": "624DGVyhyx5mbg51H1YqQ12F3aJ7pDbMbPvcQsrPbpBHnXqf2miFdLh7FiALJ94a4zk1Uw7Z6hvVQfnvyaqsypdp",
  "key9": "4sfi2GS6j64d4LLPW7PrJ9rRq4naqXrjQy5cDXVjbG9nTgyKKAyPzs424QGcdrm9uB6RbZSvamLwdGTSEBqpgKNa",
  "key10": "4UUfCYZHoK2T8ToAtT7Jzd1Czahy5zpSYwPuNhqBjX1jvxtcUiBHf6SP5MrNgbLSrYAzm1qscG6AaNqXfEEMpkkD",
  "key11": "3URDCJsDEhHvRJSha6BR5tn3VZ3NNKmxQLyXdRBt5yZeqiSzudwMh1BheQ5w9wkjspNbH2pyzcxpSb9RNicT3mwz",
  "key12": "57jeD6Dqca7iMPifdWXc2a4HGssCCQZUnSpn7ivJXDGoGXq8u2cBXpRjfdGui81xZUypxQgQs3xuGvjQkjfACYv9",
  "key13": "5JYU4nKRhi5z8qjNwBjFeUB3vHR91dB1nTkgCzA7MYMsq9VsYRdnB97HxenC2T3ncmXs9htfuDGTY1ZAxZeroJ1h",
  "key14": "4p1hKMDDE7LiciJ3BRYRuKLy55etRDW3RjWoeWSm73czMAFppaacLkqEmNDznWe7Ux8DKjcgMavkZquzdbEWjNjX",
  "key15": "2xX8Lj2UT64K8YgHJpqKrighru8D3BUQzdB3hSgUsWZw2BbBnmu1buv4pzHeAWhA8Pkx2b3fRjTzcY4qY6isN9qk",
  "key16": "58tNRUYBJLMndNenB9auiUZpLHsEfHGYtsWzSwj1tDpKHxA5KPAuE7t4H6yTH3Rk6Hj5FTaaWCgnKcydst4erSdU",
  "key17": "2Ain11SmyeGTt3c41VxCrUQAGDf4d3QQkTgC4vPNwCUssGdzfVVRN4yMR3dR9AuucWg6n7aM7j3AjiCWthtPnm88",
  "key18": "2ytLeYxZRaK96xkGaFf6Qa7mUdMBKvk5RXBKvcNBNWHZkgoqqEh7PJDJzKAt94TCvnGJMd8sL2H1g2kyPhPKEjrE",
  "key19": "r7a4SscqVZ8Qs2CDuym6AjRj3AzH4DZMCnVxukReuF1NThu5DnhVwsTUY6duGpY5euMJcoW1MuVCSg1vm3xoVVc",
  "key20": "4jz7UJWjH89GqwDGCXTavcSXsLobku1qpqPaUgwFuZymXgCp9zgwMHi6q6gdG6thskaqQsaoVApMsDpo8oK7SaPY",
  "key21": "2pP6MEfXzwkSoHHH2gzKp4gZWXhoyLEuvfuCNtb6nuBA9oRy3WCRMc51h4aTqC9SxdB4GQ2gKmYX87ExRiMctoji",
  "key22": "TW5LcmN7VEaUMu1vM6rCn4FzHhEooPoLYBfs5WmD9pWitN45xPBzcys5JVGAmTT3QeZ1oXLG98SnCBn4rhMhD2J",
  "key23": "EzaYMQD2XgDiZeBftPE4BWp7W7RaPuAdVeWtJJCrStDwcrYLhMPsASX4hA3LiU6YqMFiVHbCYfWwdwN2G8k32cq",
  "key24": "S9CMvXmx83BnsiPMnvbZFQhwLzjAogFAbFBneTSf5yErjKwB1kCQgiGSJL1i8k4djnrKiRCodBxc4ZXsydbZ2Q6",
  "key25": "3WAMeGzjA8RnX56dKrz7UXXur4cDWY2hNw22UYpvkHabt6yHZ516WeMkq1WwpjbUTbjNpgTZswx8XAZ4LUNQFXYy",
  "key26": "iZtxuC4FFkg9bdYgjMh1V35i6ravk3cg4ErhxJJSFXV2FmCzu4CYg7HptR1rimLXgHb2EWMfbf7V89FhoLWRYGS",
  "key27": "5XVdeLGzvSjZAVeXLWxpBA5FNJydcFyfUvjzz56seEWRrSVvdqXD9bjEQX5iWw88JpkAffoEgVrpcCEDkDjesVw5",
  "key28": "632yPVmg4hsKD1qkQDj94EjSMghX2iqkuCZsHSaEipvHjBcL8uqi4VUb44Ro9jjSk6gJiHwXRhsGz5CnorxvJ3Am",
  "key29": "5ntRXY4QpXhAVtXCm8j7DLFUXa4BPkEGZvEXvMKwGTyQUHeZXTYzo4icYJiirh6njswmf71My3YnJB4zRBwsryB7",
  "key30": "5f3QYFoTJ6h6GYQkfarbJgjK91BP1y8X7fHAzmNLrVHxwdHDkLu5iefpN55qxWnY3eco14iHM5m9FsUNQtkdusZD",
  "key31": "2LUTDYXwUdiBi9xxYSkvsfvstQLmSZfUqXG11ZT5yBqe9edNiP8CbNdyo5rRJoQn37xRZBBWdB5RTBp9vraQYfUL",
  "key32": "46MJMZ6g5veujnyy7uQW2iDNCZ6125uerzFJvKDz3uvHvMQJT6UEFUrRVe2WGkWkmNHHnnfp6YuPqT3cPBeuYgzy"
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
