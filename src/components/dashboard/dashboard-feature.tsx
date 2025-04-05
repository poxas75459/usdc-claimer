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
    "7CGNz4hsyE5qRk7aMGiNt5fnWEbTZupEkyiDBuFVginFVgQCy7FQkQKDiwvedLaTeB41w8smfAJngTv32df2SXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PcprqU9MmFTknM3VE6abNPWDvmEwpyUgP5nFGam3jKCzH3T8f4TYd1M2fstgNPVzA8MmJHnX3xB6oYqGJMcYoV4",
  "key1": "3kUhq2kU6FrKS8M4HS9wiHJNbn6ZqGxaQLDnVy1zGXMGGBa1rTRoVaidtVBc5ue9qNiA4ydZAkZNww1NTZCSCVmB",
  "key2": "5DMVtdxoqX38Ngk5LTXCpySjhMCgv1R1pYyVQAQhk7yBituh4uikd5j8o9wAZcHSedi5T4fxfTfyTEAHdZp6dcL1",
  "key3": "41Z6PeLQHjMgojsqm7i77E5uBz84NiyZLiq6Uc32FceRZMuxS8nxUBE1PzvP2kDR1nvf26iGtAGtS1TosUXxBADz",
  "key4": "2xzRdfqTo468oy7cBzDaEemxjdvXzLwqEtyjnx2sEFrbrztSgnPderGRkpxXS6bWTmBXBZ9KozbMvy298kgCnGKP",
  "key5": "2VJA58yoyRzfgP4MQYw6JB1BgCBVzVPDoCCV2QBxzwtea67KdiaN2gwgT39tg9pgD1kMw7MmftYfgDKF5XALJ5Dy",
  "key6": "4qTJ7Ct54ZEib5XFcLdgyUr5pdTgFaHk2t6Kiw735MGG88yFWJhMRQsECWGEFsxWGv9vRwTgXfG9tVBG6k6gzvhH",
  "key7": "pHMP78XeZmN9nY7W5HWNyPdTT1v4GpmjUus12B2Nq3vynKbF1ds4c867SsRFrn6ckUahmDoDQAkV63v8fLhwV4M",
  "key8": "42R1KmUKNLyDEZmD7LLVXCs4wGWUSBJMfvdRiiL8ZM2NkKg22xEU4yhzUNTQFyJX8T7QuTXjf83uV6Qa93wKubXv",
  "key9": "5RiazXoxxhhYrg1Dpaki8otkcmMX1Ghh88hMwrZDK8HLQEvZoRBWvheUfHUFDrutytMmRft2TCCPGDdsfZYwWcdf",
  "key10": "4dPTQYj2QergwKnUS291DV5DKoT8VAZwYKz19uxupc1N2zJguqqYJqu1pGD7JidzTvAmo8QsgLnvkN56doZHoiph",
  "key11": "4xbovo9eVd434cV9xgy7BsuCe56YXSv669KhzkxjFSHaWZDHjTRv3g3zq2SzQfNCtGz9eKdsXVdLymepXJuRnRFo",
  "key12": "4J4VDrcUSCHGwTzZ4wVzd7M5cNNedAzvzbN2v1XJ6TAV2FZjzHbJ67H77mzkR1qybbGnjNBP22NQE4kFFd7pkTN3",
  "key13": "5Kfr1JRKQ5mQdX1VQ7j5YVyujm9ts83vUTh2MGdGTRTPLSvFkzZ7ZD5upaezNnzuu78an8K7kD1dUPhFRy9MkP8B",
  "key14": "4GhjRUvEuLMXRLjK9TQur9Ex3jESwfhPEyNX76M8p54mzEPZ4m49epBqCVauyVAAFZjQhy5mwU5PqLF9MfNQy61D",
  "key15": "3tbVAZR9bzHvybtxW6HU3WVMx4FF5z59nxHCiLvbmE4e4HQParcrJND53Xqon2y4LyBr3b7e2B4N7b34HjYem1VC",
  "key16": "27XX4hK9VVRB8k7c6PmEScJaJYN4SH33wuAHDT7z8vREPgXhjnVD1vn4HSDg7frYVFFwMFYWioycMA3RnLxSnQPu",
  "key17": "5CLQBkvLty9kQmkVLbgSWj3WSbNvToSwFiMhL3wPUBfywkuT2i9cMJwSkpPsF4pEWTLommtonJ2iWFGkksJWnyST",
  "key18": "4q2WgkXqk4FHx2KoDTjQyr5LJV3raW9yaLRGHdEzwvgLzHK7sVLVLHTSMfZc4xTVT5EpSDUvoaHjaAmXjy6vcEuZ",
  "key19": "5dJ4McAbBVZCiEPTp6uvmvcHFh7u8yJYZC1aKzkLRQ5h1b4yCvAV4pbYWfUDHVoPCVebcojJ4G2KEVZaU6xzeePJ",
  "key20": "4SeGNgaQ6khh7ijb5nZ93fqJ342taaaF5oEUJL1iTo5D3qAgSYcbRNGbhiQ67yasfavxr9vgTLgRTcrZvnbS94ZL",
  "key21": "4bHydA9cEuRZvaracJayYZ3LGcb7NzQYjRKtMctgannXzzykoR4V3nArw95f9kyq3X9fP5f5ecfSPGXvrYsDzChk",
  "key22": "5HJ8PLFz4v6bzjieR5yFYq843cFGNtsRgibP7d2fZxR1UG4mFYaaWJVBNSmjKgu44GRZamhRFZPuij1fQXBQwJaF",
  "key23": "3baKmSuE1pteJ85X5Ur24VrFxdHjQHrPDuFM2wbsSLQgz9SKM1HmfUvfzjrufQCAAdhUaFV18J5Nm6X5wz7Fi84d",
  "key24": "5asvkn6xz7NCbMQPRFubNoaG8RSRJRL2rDGfZbXVcu3ZBtozBMputQxdtQCQAnD8JcCDQQupzjncoJ7srt46VLe6",
  "key25": "4dLz6YQp3MHcjH9nPWXW11TiTtRALarRtc2DQzSyHhJ2aRLs2GP5dgEErqU4H7ioy5MPxQemuHj5J7LrAbw11dtf",
  "key26": "4rita4ji3aQ8pCTFVgzKQ3pJUZ3VkxfbTB8jzVq4ezbUYc8yARWvi97suQ7Abm1exTvgLvu8NevrApDEnHKFGX2z",
  "key27": "49DMwNMzYRX1xFM6S3Tj11w8gTymAf4URbZe219D1qjnKQYitMNn2C3ApA2U1GTF12qavi7vVhjGKms9yeCUqkAQ",
  "key28": "dLkVPoAKux3fjb8mDsEtZ8PeTKkFcRYNJR8KcHL9RVTTKeCHrytpM8kagCv63md8Y6NjmiyJtJnNthT2g7BQqFf",
  "key29": "5hivyba6X6cFamZWW6hRyoj1iMwWgBPjTmi4neJY2tzYuib378FwHynhP6gW947ky3oFBJchbbsr4DVDRs3QZMRQ",
  "key30": "3WjznGzV24gFPxSAuuPEKaGahVjfSE8jvSoB2JfqELPeFzQmUiGEgMQZgNyAqj9aCZFuGymA6jTGSvNjmCoe1MjS",
  "key31": "5pqwXycduymUYUzqJ9NQyNpocgEysFWFhjkgqEeS1uwGVjRnpRF4QiHwwBw5MnYPv3aZHZVDyT3uy7jjurdAEKim",
  "key32": "31UisTAzrnGcfqaawbBqBtZo2mhGCp1qvmRcWkLPk8bwPFunhCWVbPpF8tB6ydjSmfwVSsNFDG9nL85QhDgNCrrq",
  "key33": "48qmBku8QzgHV3iL25fjmkq9RFVXbBn8viRrZPUxAZFdpGmqpY78EEMirWCkcYPDWe9Woe9FnUNSEoVHyc2U2ZVp",
  "key34": "566QUV8S5NMHQprzVe21vjyStUbZ34mRJn1pJrUA33v3JnzjK55vLdBzJMb71V1kxieR3hYdCKA94fFfaScDmSsj",
  "key35": "2jtht5QdGuYEcSPStRRxeLqnRmZF6DDvJbPXWdKgdkooUDTveZA8HR36H4k4zBEypmtSyGcJBatoi6T2oocUdkBm",
  "key36": "4sqJBu9oJQqeKKwjLitD4zd2MSNxdfwL35nuU8CDxbNyQcGyPdt6yzJ69zviJ4Ru8juyLkvqagMRDkksHBMYNPAg",
  "key37": "4qqcWFineBNoQMLZHvpMJ2kDXHsMDYWwKD3sMeivXeokdHbFURcYeQXvf8jnzL31hMzkxTzy4kjFpHS4vDXtueyE",
  "key38": "3w3YLZ3qeW2vdJnEuboY2sYp42CegUZLoHtzWjMwmPCZZhpiTDxpSBn77AsgrT3mVLbKtAu6cQnGsRti6wojZXsE",
  "key39": "4kkgLSoBcVNp6p6s4MLn3YyL7d6YpcSwY7ek1x9FkcAq5pvNaJkkaPrZNSNn3L2ViTmucg5mSJVZjoqeHDvboHX9",
  "key40": "3xU17mZy6GJCUaAc6p6xirBBco9iPwPsgBmCoyb4K3XGaxnGDwbmfqDyhZh8SMqf5uucHFqddNha1YCZZj3mitq9",
  "key41": "43u5ts3hqsGKiVSbnRwGuDZ2epSFgZ5YTjgY6ijukfGgGWue931wNLvyc68QxkYurCceK1UZV6GH2bjU3Zs3SHFa",
  "key42": "3ZwwSuWdih8EoPhSEoZcVggpRwkFarT1dp4vWjzfstPpz2QrwjA6r7fWJrKnkm2WMNbUNzNJEHz2z9UTJXp8fDfz"
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
