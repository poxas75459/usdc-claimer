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
    "2PQxoRHHpTbjguQmM41CMyLAa4sN3sfcYAwTVxnkGd4xi2J3Ut8rJWXimwLoxHynWoxqBkxBKjaWDiD1XyDFdsbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDKw4ev4cnmsJZZaMtasN9CfKSUCsSv8FfGvyzCE5BeDm13YYvmWMxHbFRAKynWwGx3VhT2k1PLugHDFNcb6eom",
  "key1": "5ErVkGfWDoxy7Vc2kfSHX2d4zwVwUuQ7Q3yXyNcQ9zuWXoifryFJUPwXjL3XxmMqgx1T8UfC5b3yjZ7F7eUdraZm",
  "key2": "4Kb8S5ZbQHTvMqLbCLmHr9XYWMY1bfpy4KS7AmksbxnTuBrgJj4RP7yZkSV3dinmmxGzTecKNqnh5EKAs6vED89V",
  "key3": "43e2AXP3fcVhNr2n8prRX9m2NGS5Qe4Fe7v4DDiHHRuVJ6YjJizzPXHhCtY6Fz3jkKAQ2hRBpHPAUwy7x6UQn4JD",
  "key4": "41KbdgvTK1E3fQSq131gtfTATTC8dVUWctqyjfzYXtU8pgHWZo2zZzG3W65WbkmapLR2Eto9y3zThH4nsMv21rcm",
  "key5": "61ivEUQxmBYBwSW5bvCKWSNMeNqi7kSSGjfwGDvvyVedj1DbTfA9TBbkXr2ugotLFUgLLHJ6d3ku7dggahhSkBuC",
  "key6": "2ie6JfM3cpJ7Qpx4T1SV6o2UfQc79tuMLojaxJXrjtGxryyVV5HWw1GXeXBQyuxoMM7XsFhrvLCvQFmGmo9ci57S",
  "key7": "2qoH6GbWLZwQyNr94cAEQwRqJdiB8VZ5dfMrKUZVdsMMUWV1b9MBEdz17zQCiX9GjJWMP8nm2cXnjC5GeN1kzTpX",
  "key8": "3vz66VTibGzFG8AB4Tqk4RfR2ZLCMTRnydqnPcTnbyzrc7TscZpkYtWtuqwhwziVnJwpwpTUj4FwvY8rKeTyN6q6",
  "key9": "3rZHe9Bvmkq3KBbedehSmYMSemmLqrY9a5JB9gE8itesjMRQ9y5TCNjPZZ7oVhrZs9HeZRDPakvr1a9PiQycXWJS",
  "key10": "CgogtwQzcrFsAJSVVytk6EsUqufEgQ8CpRKXKoAHMLgefZNDBeUZT7RiwLb1rM3tLWWMBWoN9HVUx3faCxjMD4e",
  "key11": "2NVJNSb3QAP4tSbEhAmXVzGtnTBHZnGRRM2f6MV5ArnBhuEGNUGwxjHHbmww77GfazbTVQm8PjbAd8jkwkQ8Vth6",
  "key12": "586Z3BqqcVHt1ZSBehhgdWM1m9FuiBHFppt2EwpNbd5HGEQ1meRZ6Z1NUBtBjUmis2aGu5sZ4tqKA1wZSTMEg3q5",
  "key13": "3c5VoiDMuTPnugtggmauvgbZ1kj1NZvFSpiA91CsLK6Bx9nss4a8MxwL36bv4i1t2YnYDZevdU9EoHe3cujNiAXH",
  "key14": "38G4HwYAxtRHVtser131FiGpLkofZyxS6Eqypss5b7Yh3R3UMjCemesqtivQ1L8DoDbqFbKCXGcBRqgydx5fNRhY",
  "key15": "5BJ5W4NLFREPKRYJRXWrodvFqF7Cwpe8HtLrT5edXaYh6ok1ygx94AZDtNnNe2Nvd6xNHfmF3ZSxofLrePxrVJaj",
  "key16": "4RsdBgzh4c8GqXcLHgbmYXcPLM9WiyFkkP4x7vPxxCCzQm3BysnMRd77ShmRFGDZP9mpSaT2aap8pe5fDYZNRDL6",
  "key17": "2dxm8cYaDkkkg312LDcEPtqmpvtACdYYojDE9Xmk2L8UHVSkAt7WBjEjMcGKyaBVQNcNxyNSu8smU3d3Z5UQK56n",
  "key18": "2YqwPGqKpKq7DobD2qrL9MHu8fe89EWztpdKcNW41ds7DMHyg6vKYaDTrmu8w2BvpynBGwthk32Abjd2ptyrRYvT",
  "key19": "3b3ED4mEbCmv2MnJ8Je2GxfzC8a1vA3GicALXmenUE6CN1oC5FnnEkHyVNrfYSUTL2vhsU2ESMERT7MuT1KnDpG2",
  "key20": "7pEBTsJrBreLhMsxLfzi2iCWb2pkTAh74w8z5Kj9ZKF2qgCguhpGn5kHo43zsYXLtznPRjkQGe9TZ1Pe5WWqQew",
  "key21": "2xrBMXgzva9qnDSrtDBrGJP2qbME89k2Gj4ETmSHdHDGN5EU6X8R56pvposKR6JnqRF1qJdHk3xWLM3XuxMbsnaZ",
  "key22": "uwNdvkiRGEwv8RxWmiypiysEe12cSh6DV2Y6u9ckyu2tsgVic3wGWB4BiWjjjqqCeC7NQgjeaYGkgT8Nyotijx6",
  "key23": "32qCD2WybLCS5MuqAJ2A2ocCZSA5Be1DwYCox8XL1YEEmxU4WGT3zQKRyiuZjKHLpLX7MLBemirVKojQz7g1CKx3",
  "key24": "5xmToQkz7KAUpx8W4aQfrpxAejK661f3dQSmCQhWTXUV3hd6rmLpERmNbiFbUzvqZA3sKEaqqFunLmZc2qREV5Th",
  "key25": "3cPxPep8J8yeo4fLDqjYGbvNHmqALUCbgsGrc7TpWLUMMa3RPfihru8sebejVeuKxgKEgb3skd6gWEHq4c7eMm23",
  "key26": "thi3b6YSMiv4s3NJU1dH9Z5nKo9fCt2ga13SkqzBN8Dc5b5o3Q64ViT3sQ9j2TpggZjdE8RhKiwCsxSLoYQK4Zp",
  "key27": "gE8aCmicGASBaH4kmjEWrg2GxmPzYycPxRy5yKADo4wZe36qZS2nrh3no8HG8EPtGisrCQqNmHoGkR4qUrXSwee",
  "key28": "4hCnbRj8y8gHretAym6HY37yh2pmG66UP4UVvYHz2BydQx6D8bGTtRbT8hY9wUTV4rpYZXSBLS96EHKoyZ2tvNhA",
  "key29": "mua7AEYA2hnM6P87wFuJgx1ecS7UeNoz5DgAtrsw4mYfEFNmzAPSwAqWyV4hFrANWbLu1YTkeqAjwDtc7iFuRYt",
  "key30": "42FNYPyhGgme9zvfbhpW8UDVBE1S8iK3tJ7ssRBp8db8RQZFnKPCTMsyCgnExkjZAtPbkdbFMfoP1UErkfUAnuuE",
  "key31": "5LoMrgj8Ajgvz87mcR1KcSsYQz8qwLYkdBTRrzNj4mj2Ve1RzRyCBeQwuLyA6m1Niq1tfJqYiVnMKHFbeduVXMNa",
  "key32": "4jEJxakY6T3qgGL9wEE1VzCJ1gc9nDwxqWHJZ7P3mr3V4w7vTYVa5E2TVgwMTEy9jqyygEe3s6fzdwWLkrshn9FF",
  "key33": "44accNF8oecLkDoTT99Gn6AWCLTeHQWVqztEARWYmPzUmSowb8NtuEjQJHWCA1gnoy68qCcZhEucoX1phhdutqKj",
  "key34": "4nhG2HVb2GgMbwBonMSd2ufWNJPMdGHUePDTU1guZfRM1T9LR2RVii1abmT3mEHShzEx7d13QxnLxsowViF6SzV7",
  "key35": "2DkyCGx3VxJKDqDjgMSkVQqgxwnx4WKc2aQyeYdEi6xxKMmaLY5uMyTA3GfkeWPsGHB8R5npjXBNJjeiWjcDvbfk",
  "key36": "2VJskJB6raVvBCNt1JXySDhGQEqhKwEiE2K6NAxxuQGuYaCUNfL3Q3BotGTrFB3mS3Em979QjysK7nkfZMSK3VqP",
  "key37": "58by91JqGAXmRjVAzsJ68pwbzby18jrUBVi9rJb1m2GfwGugndfa7NsueA5sufz6HMVkdS7MPG1YrMTJW8eCztj9",
  "key38": "SXbewsKKnpLYjuJTe13cZM7MFgRnrQxeZdbSASNRG3JomZ8rhbCiwS1BNky9NzJcGsRQ4PGsxL2BPz74wGk93rD",
  "key39": "2qpYTXYTg1dacWQKFbRQk92eCkJa1Cj5sUxpvx99GCv9VZnYQHc5hc3dsMth3iD2igvsVmmU8wQXy3FaXiTu12FY",
  "key40": "2dU9xKbR3hWawwtzZZgP9S4xuUUxrJeKyvdKKd1UGkWsx3TxV3E7xmG5jGJcAahjkLro3TD4ZDnZVF4F1V1fQ6mq",
  "key41": "32h6gaAd6rUeoRmHSVwfHhcRDMn4YM9gDJ79HyPnXqSzUdpMMaPnMqtbTCtAREaUqxHHbfKSrTMf3VZSaAC8G93K",
  "key42": "525kjHZUYBK9gsNHRBNDE2MXjdJCpXgiNyk46i9KZhXUofacomJmyMWBFckKiM1YNj4ATBpKHEsb8KypQzUpc5jc",
  "key43": "31erFp41KTDk2qWtN5dhX31UduuPXr1TbG154DKGEeKkMgcPyjaPTQqH1aT4BpENnvbS3rdm4vs2Ts5fMkLJEDEE"
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
