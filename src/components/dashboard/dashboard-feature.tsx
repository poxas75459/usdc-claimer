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
    "62w9Rxi72mXZ1YT5vefrjg3WoePRUFE7675SY5jJcKUoYadxPYE1ZDgqgfQ46fNAcRUkw1KhH3LQpm1M3CAdU6cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkCC1GR3qd5PwwmgFkzYXbsYLcrtx7a5uhT6t7FYV9ss4nZUp5S4vzTDT69W186YCYX2tCJfoDVtg8zD55NwY4v",
  "key1": "4b3mMQYi9aaJQqZZj2vUZVyRQAszBA643cHsqLdk9dr1kJ7RnA7B7K6C5jinSeiwP2Y6Wcy9MAW4jLYCjUi6kyoT",
  "key2": "5PQwLaBTsLZdbm361DBkmdUYkVfAr33Zg51QBtYYsDNbXjLRoyqmt9ejTqac2AEPau7pyNPaqkzyASD7KFmwwM3S",
  "key3": "2Ci3HmxYndomgfxhaLerW7FjowAS1q5d5ToRt4TDKxDU9XM2RKJMmKYw6ezWYnbNnGAQk7Wg63KuNQDRfy62PDH5",
  "key4": "3iBRyCNjDhNVYHmtPCArT8KYhnvDK92KfeV72Z9etSXQMrwSf58jnPrJrczAVmyEogfxvpMRCSrqXZUT3sg7ckXL",
  "key5": "X3Jx5qsM9Mx91nsRLPsJ769a79ZjbpjEtztyEAvErGatJrEy3fHGjq4eEQwSECorJm6UtUof4ZqwghAAm5fFGRe",
  "key6": "3BcYW1ggfzyh7HA1ShPVc634fYFp8dsw9yvo8o6CCVryZSQMhX456WinYDiS6iXnJFsTmHCXeBbdQjagD8irWV7B",
  "key7": "2oxw75eX354hhrn7skCyLGmSMoXJHDmBJ8geJQuLSbuV2hpojiCSaF3CmGp3BexwSpeubSSrTcoSqM7KCXLabEw7",
  "key8": "5BZwZGqAj6Ww9u5AKBN9yQLU2ttKnkGk3qjvbPDUAVB8K866Hx6N37JPG6v2TFKtXWb2BNgoCnAbceWLjMffo948",
  "key9": "cCvH1YcXLAkZHURQjLeN6GExt81ppDdVoLSbahM7o9znK1pWpzYcwKikrbPRqJHgWum7EMFBKdeGR8dLz65TK2B",
  "key10": "SrC7ptNyrDS5sM8ZEp4bTPYWoUTSzUsqQ6mXpKtj1QBiL1av83sX5p18rh7HGU6xzePwYHhnA8LP5GLzX365Jre",
  "key11": "3B69ymnjSPHfYX6yQbFHmXP2Y8SujgpswbUjZGtAKZBj4S77RoJBJE73ZpqZPpEHyDS4PQdbNrErp2UGrMLRMSkZ",
  "key12": "3RKCAHQv33PZsuRvMoS9vYaX1XTPXZq6gSyVA5gdeehYdFeLs1FhmaVAM2jDQqRb2v1ajEY1E6owm6WPBLdB9ZmZ",
  "key13": "3jBcpiBohX8ngSHzf5CqcSgiWLL42wtrsTfuPrVZJNQF8b4wMtnmGjma6RBBom4SkG5odETLnEbenEprSuct7XJ7",
  "key14": "5vm6ukCDUgm1MDfzR1SEpQjJSgYV3iudSsTAe2HS41Yn9xybY7CoFhYXL41imQg1KVUs9jE8UDHZtDcn9J2Rei15",
  "key15": "3mtL96CQQbrNYWXmPt98pY2exhXb5KokhYmo7sBb3tm8H9eQ3rgStjVvQXR5x8E2tpiR53BHzqzcB2VP4ETmjBdH",
  "key16": "5QnTkh4iFZHL9T7WkmynbsV54hRQyTPbk3sdvQW54nhbWjDoL6mnj9LjPUKXMpuhA5AndhkYeLz9gaPfNBqchszw",
  "key17": "AeAWW3DsWBhJKDf9cWGNNvYC7geE5wRmjmTpp2rEeh38jTzwEPALaHKXP4WVUsC3VVu98NYUw9kSpSNbwrzAZze",
  "key18": "2ZXTkhGEDmANzaCTGPp2QwveaqbyfGThzp55LpkBncj8Piq4Ewh1jokXVWSfp9WNsWgdaGWB455wHd9FEcJtaLEM",
  "key19": "3kAFFX4p59YcP1Fd9RN15eVVjEthgpmc6sAA91Jyid8yrehwzkWaMv4MEU49dCgkC3eVEhiHMATgoUKN1TCLhG6x",
  "key20": "2i9akWp4uZNnf5g7oYL9aySrGgMA8zvUFr97W3Ye73LSUFqa4Y5ho63zMbAvPmPs7vUzyMFoA6PVQYshnAzASFwC",
  "key21": "2fezJd77Da728DNE8TUcX8wabjviDCbSMibLq4WDw6djhXPksDB13YwZwnn9iBNgBDrJjRgd3pHiYnaEn2VHJQJE",
  "key22": "2rKM1pLWStPvXTroQycS7LFwYcMdAHMVR2iqRPFVjfx6irPk4amxLEH5wpRUonnqAa4BTjiqXh3nYdASdufabszy",
  "key23": "5KhinZEDGTfa2mKhrihVtbcVmHXqrrXT9x4kzC9VmHoVMQEnT7gj5wENurmVJAFdVq72gURkDYCFLpB8oehFA18o",
  "key24": "4aUA46oLmsgABC2wFR5Uc4sWadWxAEFMnUmD5thiPhvajRX5VEbZu8p1rokm1nAF7KfBqDhw57QKVx5T9mkbhPv1",
  "key25": "4TgGcq8Tdkkcy6J3dpzSRworxXuupGg5j8a9tvgJNhrG38dD465NztkwiX3HTRGNtX383sGucLeuP882VdrB3HDs",
  "key26": "2sfKw41nggDUeBna4Yw6PWjJbWR8PoiouJxzwqsDB68uZEvJYQbTfezBScVzHTaqwM2gMm4NGvQVBQgrM2vcxziH",
  "key27": "3Xn6av7B8sRT2gYMccpYGM4jhb9Y2xS1SKKTxKGPn9x4tKmGrwMn7fRNN5tGxLYEyZuqTSoxePupuu4QjcPE2bXP",
  "key28": "4JyFzjb8HTZ5uyhC5ufPiGok7SPQvUzGDZ2ydc6TcaHpZs18MbKXZHQTkkTpQ6GxYm3Bnm9Gey8CJdwtkwe89nQU",
  "key29": "4CGFUuVhYLv34TS3s25iGet3DitwaCfiZiRE8vzTE8XNRi9mKnMgZ119X4eLYpBXNKyguStBh12MrVfGvk9HKnP9",
  "key30": "Qq968koR84Eca3gpH76QnsUxP3Aj3gTUvncLTqMWB4WpnWZLYyYTJwLd9ngANQsHws3FipYvJXcEfAbFEotNDJw",
  "key31": "44EDJBbDr4zj7CoEeCbk4AgwUwQdJwBJWmxXvuqFHViwsxUrcHvQNtu6RVmkzfLevnPgiFriWTspHmAeipzkbgU5",
  "key32": "2WtFCH6dFtYGBjnY7UaDTBH9zxsr1SFdnTVb6KDASBCq4i6B8sk7q8954ZQZrXhtGqVDqE56ZnYSyRYvksrmkuVd",
  "key33": "5pLXoXDwE8semMAb5y3N5oUa4FWsuVuLqYsgJ2kHGsT2k6u3RqN4oZUjZ6q1HG6vroZPnurh4D4TmgMeJKVQn3B4",
  "key34": "2QLKr86grrpL92q2tLZ43W5jEiSqMrfEHdQwdNfJM8114SzLmBZAoqNtycapBaZo5ortM6MwYAnzYRU7LTvN2WNh",
  "key35": "4MFEScAWSuUVTkF1Gd9vsTCbH9tZgFGcrQwpCeQW14d1ePBTvMVBVEsY9tDCszJ6H3hFGzysX4GEK44S5odNRN5a",
  "key36": "67LsVHk5SCDu4r1xz72Zy6tRk3hR8UvZbwpB4isH193mBsVMzQ3eArn7f6hJwG2eqUR97m2o4iJxFvkqowgnnaY2",
  "key37": "4PRagJwRP6gyCefEvnJRbVxWe5eQezT3gNQDmkoJcVgps9jirmaWM7uELxKuRgAFvZXf9mtWqqK9o9ZH9uHqKqMf",
  "key38": "3tPmEj5rDywongGbkpacbenBc3sNRraDvGHSbb9Ri4j8bYP6HzMqyktoErVwWjjJTf8uTm3VtiuXycEt719h9uXB",
  "key39": "65BJaqh7gGeoprAN9BzRHzMWhgs9mwA44G21neYvsgoSA8nnDxeACgNXcViEEKACfyaGbCwKLPGQyWH66Df3ct3K",
  "key40": "5jrHFxFmsEmhtFSz8PHfYL14yvJ1vjCEc7rtcza5FrHwSLP5JFNy1JkKQvnkcPP6hBdNthQMcWGayuqNwfevEjZ6",
  "key41": "5YDm5ooaqYZ6voLgtrtZR5uc4UxDyfK6Trcn6pAay3EKJEbGSCsm6H3i7CmnKTYpFPLrMRdXy2PeAeuPMVcqsVTQ",
  "key42": "4Z4H7VbrSkbd3Dcvfuh4zdKC9n5pUXEmfrNrWRdrKMZia7JZHsWpubftR2fH8xdJumXxhRZKRvcXv4uMWutgxbPA",
  "key43": "2iJrbu3eaRDgdhuBYz9jmuYJQuD8BzvdXNAHiys1tFX2DCFmji2PAoFcWhQtX5h76NU2r7szDePqmGahEmK2kdnY"
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
