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
    "akX7P2Z2hVT8B7Xh5fh6JLvxCDg4vh312eaBdLD1jcf49foxdGNTYgCeU85c1kVUy5Ae6ed2tXw4Wy9XeWsijvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2mnQMR5uCczCauvZnfADp6RSKGFnp5vbDdqfHBqbSiVZtZvDyZEfhZ9emn6HnkiDwashBNkGyCnikKE1hWwPVz",
  "key1": "KLRymtWdsV7orpkMKNP4b57GS3BkDWqr1KWFhMFGMmEHSw6qrTwymG1cA6kXAEN91zxPBrbSLB7qKNmN5ZHaHQV",
  "key2": "k5F8ZNnbdhCdDtLniH2uQv1U4LfpY8XXV9V1XkByrv7LiFoCak4kibhCMFwHhMYCox1SqrJT8mSecft1z6vLTES",
  "key3": "3oQBv2vrg21VReVymdSLb9Z6evquhkCnLTf8QijQj7D79pjHuZ6mZwW6f4HkcBsbhsCRsmn75t8LTqZhMX9Uq3GM",
  "key4": "276ucMW2oACtidaXw7MTFc7cMzaTDvEDdXkKNGuBvsPMTHuR3eNHm2djMixjZtA7o8Ni9TMocXAaTfjVnxxHcxxx",
  "key5": "2b47pr9bg5q9bibJwm5QtqkvK5sLWfCPt5zN71g1pCe3eMo4Ej5UtLd2xKx9PyyDTFHT3zcH2mL66tECq5mnHvSk",
  "key6": "2cxUAMS7mDawbgEFjoNw2yGYwagThAY8GcEDuBTZabPKidZVv3dotPA9xpyQiMfiJdk6dN3EdX4pWcBf4CS1pbdi",
  "key7": "5SbeokLuukFXJD3ZZJTT7thJW6yTkok5q6YpV5HoEfYifjgi6aBKKKWNKvki5cFh6KaYnWNtr23iWd6Ncay6q35e",
  "key8": "zLbejJi2PxduQDZ8nDpRhRjKLbEszHKAEag7dR2QjkkUVaXWVKRCveYzbRSDHo7BMCTTVFQWKbiKyQHbXCsBZRv",
  "key9": "5W5GSYbTSqhpwAUfo4N66rEQ4duM5iVxodRV7BmgGDD3BWgJEqboJLEpcwEzkskk8F5V2MyMpigcfw9whoVpzzse",
  "key10": "3bU7rGbZhZZ7PJyVRVkvwkd9cRCpLDRbDan3pQ33oWfsYE7PiGGNXsyc5f4BiXe8UdDGuAQQo9ikzivAGxDQTSa3",
  "key11": "3AmL6iK3YRPCrRXrkcADub2cFYSWNcsBpBbnASEcZCUE6fxHkgeUVMpu8fL8YVFYtEqxoFBZtXKpbFGnvaxMocfD",
  "key12": "422icoyjYR1QKhTZ5xAzwSE38dCQQJoGaZhyZf9fVLZJzutLBUWohJaK2SWYAXU9TFknEQ4Y7Es19LyvnT6c7uej",
  "key13": "43qfwhYMxCSi6i4uhDwzxaeEkLZXFYa8ZwbzjZfpLuwUH8CKRy8y4oTGKUz1o5uu6s6bxWDbiG5AKS5xVqdF18ja",
  "key14": "3ZWnzfyvV3ZKZrsxiMuh5xwMevbN1XKxWzdddNznwX5mHY1nvJvMUavawnGoSiRgPeAAZcLUgktoMSWDJ2WP6yin",
  "key15": "3YqL2QHNtv8cCHtTauAxZGJMMmnMtNCWhLnCWFmXstbQQU3xB39jUrAcASGPQLTxeswMV3FZnizyANhsKARamnJr",
  "key16": "5mQiKJot5hMKGSyQJkGjUK6NUaP3fcmy8vMPdzRwdNpBNFoGGrp9D7jK1YMTEptUVsVEAnKUNsXJwdz7qRDT4bo4",
  "key17": "5ikjSQLDFZhYDWg1fKKR9HgyeEp48Q45sWWVUv7n5Te1vyNBG4PwjBZRZiwqQPmN6eJY4iEUw4L2ftZufJx5Pcfb",
  "key18": "44Du5VAw66X239Zft5UrKCL5AK1rVYZec4WpH8YnxFqxDVtHoBGFGvHFaogPqehzSo1x31VxPSFo5y3SotTtao5o",
  "key19": "2bJgx8oW8VPSDLifrFNLXKSeTBdqYcQoArvFwgPhRPKfispqs4hGX3ub2LdpqivJpVnHKnU2tVmDn9aJ3mcNr85z",
  "key20": "3vqzo5uaJ7AE2Nwk6KMsuUnn6Kjfb75ZcCtBiqfzY6gJHp5LfeG1ALiuFpBDrHaeR9BUNFqAySdtSeFPKdsqSSF6",
  "key21": "2aEayBCSM55btvWdChqoAJhzFbUMZXr83ReduoEu3VtYK5aaNYhsKdj1jyMAZH6E3MQrtnXhZkr2SJYipyUZBotU",
  "key22": "3X5mQr1CFjydcpfKgkLoxkYSfZa8g3TcFE2WbRbbgwsLAbX4wcBU8hjPfukKPyuCYsCwvA8PzVPESvo8RWPjU8QH",
  "key23": "2EQH2xLWCsFSKBft3gyPUQbg4rgaY2AmfMdKhocSQhxHs6zETpDuaDYZSwarASsiTYrVSi8KQCynjnDLiMzak6Rz",
  "key24": "3gdaPCdPSf7EWQHhJ6h8JPbJGCb6Yc3SZ7VtpGpav4itjB3PaZ9uU6TtmDjARCgcbbf7D6BsM2pM9Vp5ADS7PwdM",
  "key25": "4nawTGtaUkQyakuZPdTYQJJaPWCniSUXLWMo7Xv3AB53Q1mpAnKVR5ss5J86pnZjT7SHpMbopWG11M5VfvZRfQVp",
  "key26": "5LqLaQDnZQ6HEA8GDoDrnbTHFpqsyza13ptgLwctrd5h4wv5mbYu8aNgmSPSV3MFTTPhjhctPj7SLFfa3234FTmv",
  "key27": "4nMtmjAZLGABeUZkBeUcm1oJMpDrn9ERCZzpdwTxLG1nMYgyBByBkvq5Pvhhr38p7Yv2dUWHJYXaXqdcCoEncufG",
  "key28": "5Jh3y5DxCk1vREGpjec4mBW6r2qA2NsHZjoq3UwErq4j16mbaEZ79bDFSCRqX9sbvzyFMFfocs3EiaXZA4kp3YBQ",
  "key29": "r5LtJhjfL2d8VMwLcCcMAnhcpB99ozJYZKnhGpEvZt3p1TrSoV7J5MHVjy8kEGcYoLhoftQVtSsFxTsrFJmaxRM",
  "key30": "4wtyHVfYr82pphApXhmHwMiqBxrx1yDx2Dah5h3u4izA3heZDxZw2GpYujnMNjCjnVDuX3h3dS1UxmdK9gLBFNEG",
  "key31": "55FDehJFN9LaK8hHRfGmwtHiXoTtscitrFGtpo5GKJrD7NFRUFTKo6guVVqEc1HNCErMfQzHJkWc78Swre7VKAgJ",
  "key32": "2wGim3o42YXDTNH97Dzypntp3vgNm2tkY6g6aQqGF926P9ft6Y9JQBNfRkPYDPTYHqRJHJuFMoJ9UBTj5i2skPu9",
  "key33": "513H5W3DqaraGxCC9d4KCncnE3N4ZBVn5KpmjfQx4h5WwjTTYKiWURbecQMhZ6BY4Zkyx5jsZfJi5nnhJLHAAWSh",
  "key34": "MzAdnz1XdTrHLA6nU1KNqsEedhsBTp81JAw3WzRpnytMEarLSSSYmpkwmWKjXWS48VmvBL26Qa5nPzTLFviBmo8",
  "key35": "3shiEkVaXnpKtmg6xRMNU5omejzguJYGYDTYf8NNAhrzqQnfM4xPvD6hXLrhFhhcH1Ap4SCWDpqFmmZZWjwSr5dT",
  "key36": "2K5t1p57u6jBMsdg9W9ovqhACXa92usT3SgcUbRPqLmWgmGSBrhMVk8YxShqbGNSdxt5k4wt1Tmz7468TKwy3r3X",
  "key37": "3TtYdDbtPegfzzg6Mfm3EgyAHAef8Ze3vBvhBMwA1bYACNi1rQAffQYmPcu4RwquptmGCQzQd4DtFvsPqnkhBzRo",
  "key38": "5Vvv6QxBF3QE34kpx2GE4nsn5ziGQ5MqTzucprgo71RbyKMpiMefJDW8n6cuteaTBQd99wkvzPthfgQriFQDVqke",
  "key39": "3HUJm8uLT7EJtzCXceU8NVrz5z6JKb7DULtrj2T1o9sP5kTpdA81EF2a8jjGsAGyGGHdZGbg5bU2Mx8x5Y67tHk3",
  "key40": "3o8x9NPqyi9xPAxyyJpY2FfBDLP87iyiWkqezG5tmsAVJHYL3yT8aEPKUvfb1KBTz8d8iwnVsqF4vPWSxWkgw2xp",
  "key41": "yk8TBBteeXreQBxNgqdqQFdJPM8kVTaemi7DMTygZLWkdKYbBYTdeVVztgUWBQgHkX6LVFhXG4GR5zJ2xhY6C5c",
  "key42": "37t4AWUUhUB4BN3gEYiTpUYYVGJEcDZHFDRqdX3uiG365VzaCCYzmH7MafYGJgR99Q7Bv6a2Ds5vAcGTTFUzfiHt",
  "key43": "2dhzeJyqzosx39g7QFViUM3JLwfZnUfica2wL9Rw7AwSnA5AeSRk3fQAzaAatVEqsPJ8dKsSGFwFzpsTQVoKL4iG",
  "key44": "5fddGCQFFb7N3Q5dZErsYHosBEXUefGThPYwsv1vEWjMBHNzGj7shN5SKpwcVsVeCYzGwhkDB8TUXxEBp3Sxfsd8"
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
