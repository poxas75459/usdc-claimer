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
    "2gSgjmH4tYqexTCNgWbLS3FNCp6Gb5V2KDD9VQbH8a7qBiXURrz8vM7sE3yeVUt7QCyC5jHqEXLePLuDeNnjcSG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5ocg2bVxvC8Jsrj2F15YnoUN9xAfJtfaND3VCdoDFtyxMF3jeok7KgVSXdidsejxFe7SiSkbcsUaVqxtXzEFYS",
  "key1": "4RsCjGGeLCfcWuVC4PJD6TUdnJ5P9rNnnXfJYHHQmhot6mfX9DocJdUpoJhR6BAruUqTYsG9jVtbwnkkKP4WDgS6",
  "key2": "3pi2Mbxuoq7DjEJKxVUvVXmZYLowv4jrBjdubMY5TVmmKby3QrRNJVRzSLDdqzeskhu4MvfEx1ixCN5AERNXQ6n1",
  "key3": "3xhC2a1MzzEvtPnrZa6EFw8eLFt8E2sVvW2Me96f8EaJhVoDMLnp6osuA79GpihQL9QbVfGa9Xk2SHNY9gYFkgLx",
  "key4": "5LaoVaC7vCPZvVEDBDVkds9DmadWtYtbMYJfzDFpJvLY9d2Pn7e57ifNbs8y8prSYcNrmo7nrtz6sB81yrRMCjEK",
  "key5": "5iHrHd8CsFuA6tjVDPSRDp5ozRMGaA4e11ZdcED4vasGhCCzvw6VDcjUmaBWX1NDNbDX4f8yftXNWScZ4DR9LwAu",
  "key6": "2ekV3tRh2A31zsXBrJydPqXG4JW2t613jigLKHcooJGBrmjt1EzK7DdB3PGD8JVm2gDx3E2Crp3GnEzhFPeXAUKU",
  "key7": "4wpuS7SCLQ1XEQMuqeXrGZJApqXyYG7Zu817Qvy3KjvzSrq2dGaK7xmKDHAZt6RmUyYs3TWDJKcpyTfoHd6Ts16m",
  "key8": "5rnjv3gMud2aqMjkZ3Mh2oTYNvWwmhKj9kNNg4cbjm2S1xtP4wGtJgkfQkGdWSW7Q3nAmtHkjyU5J7fBCK2fA5pi",
  "key9": "65rGCKshqQUW91Lfncq33T9asUDYSpHJ9Aa3T45kWEqKoibBhx8TLqrY9p4RRVmEYa7ejCKPDezRFkndytSTaJFt",
  "key10": "VQDJ7J9LSRV2WcR3UtiU8ajw8FUJRAhunrr1btHrigBMsQ2GkubtX9MMFuzRokwQGGzZLAhTKDYuyUPANKoVJBj",
  "key11": "5DTccfxovVQF65rFixTFBf2Ptk6s19Kvc7tzvns1RE58y5dPW4XQqAWU28TzKjapat66EN3KrrUXE7TSbRK7X4Ke",
  "key12": "2V5FJ64iXqm62TSYNoSUHk12RZ15MmgfkHngyHZsiP2ecizSkTYDcAiy95eVQ6T6h6MPpon5CuHNvs4uiDBFc6ea",
  "key13": "xLFyrdhyNPwzrs5sY1wViEF9zoAG3iRuBd2DU9VUwU5EpJKv6sQZieN5T7bouwmjWrPYXnLkx2zw4ndKoRbqvBd",
  "key14": "4p2BLD2AMgW3EuDMeYenrwQzPQvGagG8SEW1pqQq9pJM6U17ZrHdJij686q6C5YvHii2ErExbLQ797J73KiQDFXG",
  "key15": "55rrFgLx5dwsnVhmfqQmANVXDV5gadouFe2CLhoUzMyoDjPeLY15tPEh9RSzzrGqVMWAQMNrC3JVZKMdJ9Et1F9A",
  "key16": "21yAHbowzSHDKGCUtWkT1KmirH6eegreYTr3GYfoUfhD4nmZZzX2MkVtUT2Apzgmxi6iFUchnVzBzntp5MJ3pKBa",
  "key17": "3Nz5XEB4QaMtTdtVpudyVdCyDxtrnsVnWHCka9qoupKzNxm2eHi7dgnE44XjHWHsAagHa6RabrM5HWQBMMvVZh1k",
  "key18": "2sEGzpDab46RDZS6PsRWy8NnZm3S5wBSFq4qFMgTiitvMuitcWnwSZNQe9PX4AkXtd9qa5wMVmr9XFfaEczuC7Zi",
  "key19": "583kmStrzgW8U3k47gh693SW76k9jubxti6qcjHiWqzimshD6dQN89PFcsrHVEDTmB2U5rK7DRXrY2nbc5mzAhNH",
  "key20": "2ATqKFRBcDqPVzFJ3KLXFVtpQCDEAzPdkmyP9KG3jkaUBt2PpNwFGidtqVLu5GCMn5AqtnSQYzkWivbMXy8CUUjh",
  "key21": "3ktpafzhxb96qqzi6sjMcZX51X5MVnZcAwYxmoNjuV3Mhtmd6SL8snZiMc7mirjU6cRq7hTBUkKh81R19hexUDR6",
  "key22": "58XJLyUk9gtRgFN1TFeEKJsXcghFPB6rSF3dNu5E8YUvZUVYwEdsd5bTXSmcnafiynbXBRC915Wdn3JmYaHtQazP",
  "key23": "3n1vZCcKZby5tc5Npk4SzRjM4YsxK9iV8xjJxLjJResbDsrbYnwhpg9dH13mhojWHdWZAJihcqViPuHhz8kKoyXu",
  "key24": "mciS2CjMTFYP7iGW6AjDzbkwefaHcgBU7xNXsDfx8cSUmPzm89zAc9PgeUUFkrnmV12t8FziywcmjMncBSZrAxX",
  "key25": "MXdwDjUDqcbM6f6vDaZ9wYct3mJ2Et1Taf5KUqidqDqvnuTBn5aHLzPN5NSJib2Fbg1AzS5fe96v96teBDEPyeJ",
  "key26": "58wt9udf9o3BSYrqiXinH6uybNMG8hENa2nfhkm32HvPBqFpxvQ9FWkt9B7q5NvvSHzfEbHiEdPrbHmF1t9tMRN8",
  "key27": "52hmxd1TaK7a6aKipqUGumicXmvgDGaipCHaKYZ2EBNJL4iMvSxMn9QNvhd59d9Rj1MnRhd7feJzX4YpBhHmct8c",
  "key28": "2ZUytdHZbqYCVE5DDRtNcPt5phN9oJe575gkxRmnZT5VAFi2U9KwoT1Xy7g8N7nwbFz2Am3Z5ZXkgmak4yFUtj7Q",
  "key29": "DQmWyTHJ3ZHbWCawygJpJwFs21SSnvxuxmRL9GHtWZfEQPP6HrXswAGcwv33AUgDpDPdvLzh71v4RFhX4cBox8j",
  "key30": "5y9k2UGuRVUjMC9oWE8sMZoUXCvYxebWrktADzcxDzRVGNsz9j6R1K5JHftdBfH1oyXjntAFxvozBk1MCSgSJNDR",
  "key31": "2DJn2X46zQ1GVSCjgErgDGmaa7Kiv6Ac8x7jxqpcVx4DWkJmFaQGzph9kxBTt9hNaN5Bytmg8LNkZwynevaJvG8q",
  "key32": "4TCbyzVhEYm8mgg8k5JuYAXuCvk9aX2VnC9m7ZytLfEuA1Q72GgJcZsi7YeWBDqYTemc8KVDWMbBrzaVZBpPdVvY",
  "key33": "quVE5C8i39Vf1GLHsz68Gspv1LafjwnBwoQpKKaewvKmTUBK4UdArzS29EsZ3UqEnFGvPZGbGwUwi3UTtQgKWHh",
  "key34": "AW9YepfFfvyqN2P14uXmLXakzr68vjH4FFPGjwC8nRM8VPWLEesDX4ZA2gunc2CoGFAimsGbhdgANYfmv4iZ4ap",
  "key35": "NiknTUGkMhD9QSZMDMd5gynimagHYfqN7KSrRYyc2K9HmahtKxTJecGowFVsuUwsoNVW8CgNhNXDokP42BuFXSP",
  "key36": "44gXq5rjAVyHGLYdijK87c9vgeTL2X78QR77HGrksdCy8o6NzJyHNRMm3XV14fQjF9Hkp5BadRF57T49Hje4Gn7c",
  "key37": "5SV2ehfkA3ZrZ36TYdT4xpyHnyY3eTbx6DTpNxjk4jyDuhe8gQLLEqupvfJeNenwKnf3JE444nKGiVda62Ba1KbH",
  "key38": "3pUrD8BpoyRSJsYjG8ZX3xL3RwqQv6tEroXpry9i28221QQHepwZJ8CX1v75FUp13L9SJpkUoRaYQyoTLZCPGS73",
  "key39": "35piKpPmcvkCQNykkeGk62TvnM9bEP4A4JDXgKiTkL4A6wcWKqf4ZskHEd13hVFpqbDD43UFihsBZLMCGNPkVLmF",
  "key40": "36RidrUsLcx7HoXdibbMMqG8953wFNdWZvYA3b4NBCy47e72SaJB1cq6y6YAqvKzzJYU1yHgDZZGYijJJRFpVvw6",
  "key41": "W4pWnnjjh3Sn15z73WLjahKmgaGXJhEupR6A8topmeG8ZDS7VjU7HWqykNmQi36ydFaGDTC43N3YHLdjQhBmBii",
  "key42": "4QHJuyz2MG5QNnm2dedHsgLKz5e2QkVBVQSN3vu2dxB9mRLCqQUMUo3oR74jbGHXNoB7ApQ7iGQsTQEyiveUEdUF"
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
