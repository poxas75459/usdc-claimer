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
    "4CDYtCVpKVbe3mixrxHot4j2KAw7fLJgbTs5FVq24tEdPDfZqHG8dgRRFDE5TMTZX2sJFx3v2xcxh3z7Vpk4JwT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBy9Fg7prhTapmE6dzVboPrAiH5wy8Cx92zjpXbhwiQrDagjWm5E8ukMdGMEn7YExFJhubjZQptjqZY6adRVFki",
  "key1": "424c53j5aPAUbdvrmBG222J5SAce4ETtoGui9bc12AB424JoKwpYxsetGdTgCYfnWVNr6ML5sN5iUDsJs7aAUHfz",
  "key2": "2BcSfFrcWxX3fkoqU3mGuNWzUXhnYTcQv29kuMF7MtqAzHxueCBshjvc8vkXEFe3GW1GQFnJkbwPzujczmMw4kVz",
  "key3": "A9mfYMDFUtnwfuVFixaFuNcmSmjtEHzgv4JzSmtK1rove5P4PFf7syq5songNch9qknDwMAUCZTnJDfEK7KdgZd",
  "key4": "2SrB9xk4pfP1uGAzC9fLD35LeTBT4PhdXZPmfSo24njADLoeZNqo3tEvZMvn5JAMpTa7EKGwdNcHRyLqSdAHwRDs",
  "key5": "Lj95BMn6GFvYaGmBDX6KTF5T6USASLGv1hsMgpAi6dcYboqRiDKrjN5rC1GJdbaeEFjcWHLZuxqkHW5xm5YUQFk",
  "key6": "4WC6P6FG35jp7RjjucQbYHpA2ETmadv6vizFdNM9XrJSrrNQtnVEJqZo9k59KgPSVZgUVH5kUsw9qWzUCXugWjnD",
  "key7": "4mrsWRb9aS9ZY4iGuTCWMXJzaLki3n6aQcgduqeScavAyz8141yr8YNQEcDw3FdpNxHxa5uuAy1Wp6QDwHK48JjQ",
  "key8": "4h1qsyrfNjTC4E5nR44ye46eW7Pmz5ykX16kLetrMWYUjoLtEQRtd9h5VZME2mC6FsZnfvu3ktzAXatsB5pUncKi",
  "key9": "2ebTcTc2zwVKRMY7hsDUoGJPCNij4YEBxzZ1BsANkGfxx9Z1ELiAz3ghm873wpxkhvaud8Vh6mmQu8G285gicULp",
  "key10": "5e6gFAZXRoWRwxJ5J1eujd1Yp3KT4WYWQZnwhMJZvHU4cgEr2DV9vh1u4DBJGFtqdkcmVXPsmXs62CaPmyEXBEbL",
  "key11": "5maThkbekcrbeq1Ly9CDmMpMyNMemPEdGXAKpG8yGaWwv62RmaisDaT6LoMDacStgLuGH3KpeLUx1beop6GEmPFT",
  "key12": "4szuSeis2cUFc46kThNVdznmePSS5HhyzBsZFnJ3xYjm8TcXG3XsTkinxohrcPCswec7cVoVRZRjSNvngSFexQqy",
  "key13": "5GRGUVemjUBJEwAKqMSCx2T9PCzbJWpvHSfTvKm6dLnT1X4ra6ssHZEk1PkHxvsoUuLoEhpw99ShLbAvqYmrjjFD",
  "key14": "4oYwmMtDUu1stryenbomRxoxX7RZrnUqqJwQGisscLgmJbb6aQmCEoqE1ZhMuFmPeqUYeX72EFkcnNfWEz1bgqHn",
  "key15": "5E4CMjxyrUo6PYV3nAyryqQ58Q2HGEEP9wmJjHjkkRAX2hhyh6fCG1zDsGmmxQfJEBTy7kKur4DdbZK3cxx9hQ3p",
  "key16": "2dGfDosDb63wwzauvUV1j15Do6TNGZgHp5uYDTwpLd9pYi8uudKzDgZi8W8r4jpWdHE463S1Ni3QoHSDJkfNBgrj",
  "key17": "5g1HdfjZ5y9ds5eLTRkbVJYsjmeTzgPYcgaH4KLqsGhKyLxYEqbqeGdEZL1EaXgqpbQq3eoHaeK8tmXEPze2s5tA",
  "key18": "3snAT5TVcADaNqhFPVP133E9S4Mgu99sHpeXxM7cMsUR81w8uYP7HNcEfs9AmHST9UrEjtizk3JRmGTDpejqCQqz",
  "key19": "LU5eiDapHxb69hsG2GXwXJnRcRcsQdwJpsaC3D2WTt3ytMZhtji81M8UdHgPxnVji1cW4MFg2BenRjeh347C4ui",
  "key20": "572JyBTUpUm6uZ1GZx8wKHLrbBAq7psbezCmh9R4WtUnwUMmVf59QYL7hmDY2okv74hopbfx7iMNgXEjbjmvysCF",
  "key21": "4jFUhra3HKgGtdUpTBtYTKSaFQa6vBiX2PJbVqTW8vTLxLMghbEnsnDxBkpCXAL8KZN76MwVnNiT6scsBYBuEcKc",
  "key22": "3MWLwQ8KqEa3AD5KY57r4ziPnVAJyup9BQvfryigUnSW4nyNKfux9XLCd5j5j7mymcumcns8fjY1ob8WetT4Dazo",
  "key23": "2xzSDyreEanWk9jNv4EtHVu69rq73hUX6ACroJuJTvbLDurPrNP8QQJmRJ7Kg3uwtnGWajHF6AEMXYzDfBk6LKF7",
  "key24": "2EJEv6qE53BGkTSx3rztamDRyq82xpKZtRvsYAygHnESeWnTNJJr4D5c6mEjd4mLGzBKhBxTu6XzPaYSSpk8LA9P",
  "key25": "2oq19qLr6XHTQh4koVoepq9bTb4ChwjCzM93dVsaDoLUpmD4VP9mFqeZoP8PBVDKky7YGuseVdcLEPaM95nbRgpN",
  "key26": "49VeN19mHE96vYVtmUg2KbkXaRwrjm1G45x51bTNNy4jyNTcH7H24qKbffLqmDDrQ53G4kuMTnJnFPHtTRzBbq4T",
  "key27": "4VBDYjMF9vaxajyRJYhggkSjZE5Er8PBTLsCuL4UUVTSpdXywh9bsJB6xWTw9xB7DWWpMYh6JMJpdHfmnQHqEZkx",
  "key28": "MAjgTy4rhB7o5i7PghscDM3frH5ZTwGXw2ZpmMMqPNzDZHVUQaYzW4YPWww4WqEyTV5p4hm44SV36a58g4x9R9F",
  "key29": "xqQWSbNa4dkXXqyGiv1CopP8URnUUSKLhEM4vyMy3XNkFuCKQhu8MZMWpgmM9cSYNXNqQN2fs2UqZcGHLCqqCdK",
  "key30": "4a8LowPPKFYCuDt9up4JcSjDPCBVtkLc4NgDXKCdRJXAC2SVERDbcZdDF1KKfEGUWgnriFPTc2xZqMz4nsBfxNtc",
  "key31": "2QFVM2VVTxneHeLWhVqbcZUC9UdVdPy6XuQoPzx5byMX5L4qJuU6x8va8E74NvnmvBLhAiebipbaGA53L41fnYQ"
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
