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
    "5Rz8XKaNCp4wDwU2K6iCXtxNuDqNf4RFeY7xj9nDRrzNRU3ZmwGwHE5tGcYSvfu9sGu8cUSUNWHfK5kUe46vn5rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GRA9y9dB196Z72UWZ7ex84w8YVkjy9cYwzrQuuPxatcYdvhRhqrrx5WToRSSbEfmTZUq7A8gR5yviZPhT7b3ggz",
  "key1": "3mRCjbhyj9FFrp123qNxt1EFqrRdZVuECmH1spj8fBqfp6o2NDRwHEU6B2kLq8Bw6fm819SiFbwoDyto25zz4oah",
  "key2": "4wZ3gzzmiVT7eYe5BmwuZNJJj6SaZXmyW9MxdVHy6LrokvdUJ4yFWoENzaHYJCsHxr6nFo97up7GnYk66cbbcCLe",
  "key3": "36inG4K62SU47agcYPfo8LEFT7hLFU2Me9Shrq7VFdDyhdMXiqGdbJgP2r8kK7x6j7CRJp9xQDL8BSRKZXsC41Jg",
  "key4": "2FofBHUmxNWmDqiX351eBLGhNttpNyTaUhS1GDDBcgtL3Rn8uiYrSh5JQ9kMWquPHwk4xfWnoD7Cq5wRiYLGBnUm",
  "key5": "3DepNGoBagT34cTqGKn3gaH8xvRySzShAjETN66BF8rA7C5PHjyWjxRQuNWL1Yr29CKZGqQaU9i4Un4eyKALFaci",
  "key6": "2jmb48tnXmLRzFV9Hu35wMfTCKMYdyM6XmppzzAabxPmf2bykHGt8mgXkYSe1LxKRzjYWxCcTUAa6iEnSU3RnYEt",
  "key7": "4zMEFRDbyev7xZXcGwnYQfYETHtnLjGeDXa2pUj4uTs6MgrTuLaF9E6TgeyFWrAaT6qKQebSBzMJrWkuTke1JBBp",
  "key8": "3M4QyXYRHuiiaUVSgVPDnu3Cq74LTyDLB1BCUHvGTHbSsyFMkQRbhGbuwiPgq5S1j2morsPZz7WeLEZQg82w5y8K",
  "key9": "5wsNfAcPhdAgheNqdtrSjDEc6dWfN83QwVe8YY7DyEYtGP2mpYyojYm989JLCCrUqpKGnL3qTH4HLGmFnitvj7Rb",
  "key10": "TuabGb4E6t4tQfQ75o1eyMfUTicBYRrvyK2b1AcAQHjnfY3PCn8PRgC64M54Zb4yHrjuLi23QUr6EZach3tfweh",
  "key11": "3AhM8mJeBnjjak2hkKHPwtSacHfZxdAMxSWoG2VqN6tMb9XnehnWqEYApnbVpew9nJ9iubiiGQ2zJivambtusjBx",
  "key12": "583mqoSLY2y2HttTBKdpKL6xsbNb9sFKwQMJm5auo15kGUiegzv8T1FyZvPj7DzgSD7bGRsuoihXcrPjGQqiYN18",
  "key13": "5rBbamtRFTyFy7ypcERPv4QzgaF5wF5M3YMvzt9XpHyHxzZjgPX5U6BkNzUrYCTPn2kS57DvVaW1NuMEsnq6VxTD",
  "key14": "279JndHYqg2kkK25RxysUsnuqS6RFYaG2ZUosM7mSgxiKTUPE4phabMC2HvkRUvEfofZNxaVkgAtkdfRtEZbnHbj",
  "key15": "35Ljp8eL3sXBmvQBDxbYKELGmNeizqCGNj2csMeYuWF9afrDLo7idCAmVe7cXfRXEEJ3MhNYMk98Pz67zPofyzZm",
  "key16": "2yFNVZbPdMNvaqz1kqpNBmsMBRMSEjxctsYD3XsfR4DJVMMRFn1KUmmQ8ATiDBWz8BegTVKEn1uXFuysJXk9yiMk",
  "key17": "3SVcqYWNWYLCWAPTv2YMhLWd8zB4wd4Eu9Tv3ouNBzqYE63YmVQxpYk71bbA9sRiEpF3EC3GENLEaZbvvJq1QEbm",
  "key18": "2iKz9mu8UbRvpEKZK6VDCtKUe4Nqpu7Fpy3hQ5aR3DdCBqy1mxNk5RFjpxKprg1RrwVzyN7CGfASEyKyQq54VPU5",
  "key19": "ygFpBHRseA3XC5Y1UrHwEdDq56WLe5YpbMAyNYSPvUnKUYjDjd6ZFWUUqxhTDrFsbmKihoDAEgJ9VwxnDyQrqZg",
  "key20": "4xsFSXr2QEfpPQivaWPxUDd58RJSub4XaaJXJD1xg3mqLB6CPXAJ7wndPYHF77exGg88LDjNTUjbXjJv4TXAdFra",
  "key21": "3KF3PcTc1JWBowy84xDYeVpBWyRELqv2qN9mshbZ1dzq8jnyGv5iVhjpenMRMfHcnS4B1M6NAioEaNLqoEDWeeND",
  "key22": "3SXzbkHjwnujfypNKf8H1ghm8QS9Xdue9PTbgMwQRNctkJAeXXPEeMrR23Cx1tVzhfMRxQs13YkcUvHqbJ5mGAdu",
  "key23": "2WGJyigziqmKUvfBzQKFL5qu5wc5NTixJiU2DpYhr833Df1MSibcBVgqdiPefMs8z8MH81tMKPxxP6fUqxA4DPgr",
  "key24": "476mfDMiZnJWdz8aUnujCipK5FDCad5VGYGi5NRYjS4SwCydz5QEDqxeyj4u1Ts9wN8BeyVhp1PwkWAT7UfrsGPm",
  "key25": "deSCGQdCT42TodpMdJh1upuvBw32nCgBTvaJJ6dBvMag8vYw4UcXR53DPTZhxcQG5aN8B7aLsRPEYW1FHtd54XE",
  "key26": "2tm67qtdcaczJXNtzdnMLBQ7BsroP94ts3UMbjbRsZcJLVBKbovikhRPhqp9WaEDuoYEaJVeMX9fEH5mhB2fnHth",
  "key27": "4cNTdYnPo4zv8CgsvTSkvbUHHxiPy7MNgrhRg83b1F74mMaNkhwPE1Q9VaQr1aEtUdnjRrEpPn1vtUm6g2CgwnyY",
  "key28": "2q6rkiCGPAEeezBjqKQmmbBPHCtVLGTtZRMKSehRZiBeSdkFBranEECnwhTdXLuJz9MxUkBsnSCiuFP4RtrEAA3P",
  "key29": "28SQ7ofh8inG4joKmiC6UYbsDEQDQQyVNZ1GLs8M4nKzWCRxaiBU1dKKuLCb2Yp1fzzrSFt861WJQfeuh2bkHKQF",
  "key30": "EFb5ZPmmfgV1XwtE9aVqBNtusTSTNoYQKr8SNDNDhmn3H4znpFMrqSWjcR6xvZM3sZxt6dogAAzpMAxMouQdi5g",
  "key31": "2sNxkdW3ebVCvyHUc1mHo5XhaiTKs7dySiJKoVpdS9qQYt2Er9os33DtaF7VpU7djFDxn1c8gX8FYsaWckes6N1a",
  "key32": "3YAoqyAVsrEqiMXpJMGbEk1VxmwTGamadfCq8fjFfur78cKAMzFMMMSRPYWZJ3qdJFgMRd356qdQz6gy1vAJqmpb",
  "key33": "5cfnWku77qcxTM628v4H9VQj7V3kiWVwom9NqGz2SjkqGne7QoV57XYXezBgdy8xuHnhSd7qu9JXquqgezkX5Vr4",
  "key34": "4WZ4EaokK4Xi2eBMBHmjF2hHSaJwcnPE7qi6yq4ZdZWPjbci5jBWYFiash9t6LRrnjczrZq8vnrPpuVGwdaSqMBY",
  "key35": "2LJtYSCHnpwa34LMvwZwP7GJoDMCiQKKdSeAyWomdn53u1QEwEJYb4spAGyeGrBFLUHnx83pDyDXFWkYDXm1ACvr",
  "key36": "523HTzmxpC9XFi4H9B8XEJELSbU348CckCp4kXC27kMXStbURkXGs1NW1KKxC2zbNdfMuRoWRH4nfsc9GhMhR3Gs",
  "key37": "3t7AZ6kNvBAGHvRnxjA7P51ypxChDmT5HA18mF2a9MahWqwzJnjVK4TNWAQ5CsWdmGWwo33CFcuRsoki7Fp522F4",
  "key38": "2r9daSAJyaAJGewF4pGaYVMPQSQba31XCGr2TjLoAZw7crgUTtKuU6M2DHgezaxHDSm7t5ZWaNmRChBtpAg5g66E",
  "key39": "4xqhUcD1PxqawEFMPR35Qsp3xc6PMuhZziF9xaBennf5s89ZsUzDL9uhNRj8fPVvv3q6vX2YouFJMKf2YZyyLYcN",
  "key40": "2q6P8sQQftTqKTMHnLqzVXysm8th4uYomvpyaTq5PhryZcGzzzf1daNr4Toxb8ZDS12sbwGQEhaWUbsXXQeTqXB4",
  "key41": "4Aid55wH9D9T5qvaG3tsUytesx7xDfSJJ81bhXTd8nkmczJ5j8onAqDYn3kQVrGjqem3Fxhs9GzmVegs4jB6aKdQ"
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
