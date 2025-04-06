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
    "3k7oCSWmkjqLDxLiG7dCrMCxVA7Z35MQHDkooYztyLkkoqvehdw3WMR64TwPFMyfShKx6TwGfM1nfvw76A3Cwiva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24qvw5Zbe7LbP4gNeLn1SvkSCAPWkPtVLLrj8p8unCcsuWMzVvbvpQ1z9wSVEpQpeTu3ysDuvyDdYjjJrzFh1mWW",
  "key1": "4XxbgrZBCFcbjHABZHTWoZdeL6tHZyjVAWk8a9QDN8W2juGqz56gCJfmC4n34Emsg7NYvhGzUSjbfy8xwX2uGxDP",
  "key2": "4TQA3853tWm47DHXwaYGGZYp6FnvcF5fHdHBLRi75bGsGoRkdXceFYcvf1fueH9ZTBTbuatv56V7xwaffWJ2zqud",
  "key3": "228JTz3xXgKNqbD7f6btFTLVsU6bfjVyqBArsTZcMC4CZ7df9q8utnUgS6rJwvXGem2eTEixUBzD8wmpD2j227fs",
  "key4": "48NDEneT2RvoXLRhQ9avyY7ofboaNf9S47c8ff4dFcEET35PvVL8BnYV4638ygCRkpgqYf4Y7nej1xpHnFzr9oMz",
  "key5": "mJPoTrd6A3tQVQfJv3E2kPDHoJJ8ujKh4p6PyEkDZxkNer8MMcJjUbZhL5accLLg8hJKqePiue9hUiMpZhyXPug",
  "key6": "2Fd7jWnLD7nHsVSeXqhNnmR9rqY5iiXPNcoxN8KXLGaf6SpqkKbqmyfT5nc1oLCQMmyvEGrXaWfmNvmZc9cGpuwo",
  "key7": "54qRh8tTctKRSmjFf9fEmvpcPBam3dBx854njTn8TYSXtJPQuURej5LGseYUU7QSuCaLgCe9sptNWEcLBQQqRctr",
  "key8": "ytowh9dxTmDPmYne294ua4LLpDk3B4xuRA34CoR6TRvii82byxcMo3Ep4LnKvb8FsUfPYCrSguAWZ8RBu4ArSUJ",
  "key9": "2pmBf4n5BazkWYAkovdtLccHXRAzpj8r44Ffg6br4cDNL3voyvYsdoxyzkXzpWfvZRQymkvpMAKXu478g9cQucv4",
  "key10": "2DcRjtw7EPsXCCrQS5699RKkxzrjz8wUKUKYYabkT2GU4sCHLpfk2PFVunC6dP4wur33SQpPJnmuZN7vVUzKpi8G",
  "key11": "5i4Hips5muChiSdPVpyM9PZJs7XqK6j28KqVC2UzMEprSLJ3RENVkcPLxje7jfdYT3yVMHDDqSzAnyTe97TxzAAN",
  "key12": "22FRBXkm215WANQLom95vFncNmc5BcUqiCamiC9PFo893JosPEwd6p5B547aRL6JpxbyzjU18eTWRkkkewELzgVM",
  "key13": "3ioMTMBcmuiAbP7hjaewyBAnXjguw1YMERr1NbSK1QpmGRfJbPx46Z9pnUvq1N7ctuJjAJijg9g5KKPaEGovyweC",
  "key14": "2NY6AxVV6x4LUuQidRyBDLjtZAa4dVfBR4vNhgCSHv2oNQEtfLRzbDWuzKjJbkpBRGYDEw1KUa3NxTetRfZRE9Xm",
  "key15": "5u6k2gf9MER8oboji5eRXdtvAGjpwH6DtJZVZEnnndvcLAUiu2AhTiJJattgeRRfgyKJKZLCkwyZtE6ebEcf6Zw6",
  "key16": "2wC3adYpYZ9u5JZfHFEA7puFQfmvaPrVekcA9wNhYdWagfiyuioCPYR5HyQjnT5DRvYXTdG3HezvHerFSVm1g72i",
  "key17": "48JbzpDam8nYJ5LKfrXoyHjtizLxoayLxTynjsLFXBfSf7uHX4F4GywjkmvRjmoj3vTFwvE262UGogCvXBCyc4PE",
  "key18": "2i9phM8VN2hWgwDnTzoPcomoKnRs8fz7AFjzfgaovJ9HpnvppTBdeHxGm7ZmnikUWdTovCoBexszvzmc54uytAj8",
  "key19": "2BSBxyT8qVzeWmjQzEep8uEgxTA2L68qYG7adsSFpGNsa82deWcEc7JxfxyNLVzFuo62bGrok3KBvqm1Sy8aGf5G",
  "key20": "22qJBqHEhzybqPXMe8yCfemKYb1VWowKJAR8hghdsWSCHcxeUVLvHWUeJd3KvQMGaGGZdRDzx4poxXaj98j127iD",
  "key21": "34TRUKS21YzmHeZBdwDdXNTmx6T6hNK7kA7PbcNmT4uRBzSnMDxyKPbzo5zFQTXrJYjsLVKHzWqiQNYgD2hmc29E",
  "key22": "U27myo6pki2PFuFAAT4SzcCQXxmzkB3wmmCY7b24v4qtkzXQvunCqEWSPTFUmuXqPNLniBEzGBkcesAP7hp2RvB",
  "key23": "tGzqBMSvjasax3BmgJJ9h97ZJJqEy728oySjeVSsBwgVW3L6uFgGKRZAGUb6AQb8Qhp47hET7JroSH5JYxbkGhz",
  "key24": "3beitERFzLyvX21wwJqcr7ob7A1wa2MYyQfZEWU1GG6rP93bxeYrpBjYPNpf2ETH4VJDwfMDd5ER2zYyMnoAVfFd",
  "key25": "2csfuXSwF9RDGyv4WjL8U4ZPv4nfgXMnw6gvnYd2dr7bFT2TwfdrfrBVJL16bD5xFbg6afSUb6Ha4nW1zA4qtcwP",
  "key26": "4mfhaUrk76y8zaqEiFuVbHhprZ5gqDxcqAPfFmo4a3fPCRPCWcLKYu5ACBTaR9AeYiH2o5Zn61tMJtQV6ikTdVBU",
  "key27": "3FVMexrYzKdYUdBmig9AqJUx8PgmFM7tAzY12PGh5pnRAEvgNeZ2i6JRKZLTNrDnPBUqVrapWKCEnRYV9uRjQ153",
  "key28": "57Eb64Csw4swocRzBsTcStmxzgnAQABE6N5KEVhVJN6P2r15FgjGkq3CXKs3jvR3rZrC7gmdM1UQXnQorggzNah3",
  "key29": "5uwHVk6VX4WYx7rk9o32yA6nEx6g4hmVGZqkc12Rg8ky5Ujjz23tGHz3PzdwQ5imGwUtdNwk4EHqA4B1Zt1AX2Yk",
  "key30": "2uHQfwMWzBUPYiqkuphLMXVKpWr6JKAuzBAExjxuJVDueAtQ8srWBniFdFuPevs9sb1XmaSJmRyTbBMu6SP1KZMp",
  "key31": "4tvZiDuSzDFeugSeAiGVtwbBDozuc6AHqv43ihDNCDegiTy4c2orKm71tBsxGUMukgVYtxxPg37xzH6fddpkkAr",
  "key32": "4zZNBjcEyZrin6PC9ZsNGYVmSrSC9LcwZ8Y5SCPNvLNKFvaDyLYA5cdemgip4W9s5BihwVdc6b7f1AtQvopNyFp1",
  "key33": "zHb1Cd392WNppaLhV6mkDzueJ745oj1P7QcKKmpRQ6H74gMTHBp3gMZENuU2kyJ39Jamc6KmNNASArrwffLk9ap",
  "key34": "4SwQEKB28aUH4wUse4HwWRevb6v6mUtUZw96veVd2LN8ygCBcGZgcnnUpexLH1xpQSJTsL3KSbCc1Rk9K5QJtNVv",
  "key35": "uNDUqr8rWgmPuVsgATzKU5osF61bxXvduXNgeihJX1S2pDLnCZUyWVbGBPUkJRoksbS3Gu9usMtpesjQtw1V1KD",
  "key36": "4BDctNFgsFmRRgjA668xQESsoViSRN5zf2ycerJG4iovS747NW6F9sE2Zhs9N4LRS6KTJs9ucRe2J1NZMokNDPfM",
  "key37": "3fThQdcmAWRwHqbYEzdoDSZoGg5KDUyPWTufimJagNuBPLmojcD6sD9xSGmK76iC2Mxu1dEg5RchJXAAYKkMvpH8",
  "key38": "349NCeEAuHeEyQmHH6c19ZwibKGNP75kPqyBkngb2fjgdPpazmKBrD6JeDzTiGGtGpzuzCs4f9Xj3GQfQPENzMhy",
  "key39": "3YF7TiHx4tyxVSiJyo2TpNFsLkAVSLVFRQTkp95afZV2Xh3VjjXWrg3ejzgNQRdY3vLPXf8LLCHrTLF7WUeqCjdh",
  "key40": "22LkZVAyztHZe2C59FmrwmsRX8CNmwhXSQuRy5TKUDXeiXXXN7VoGCfP2Gu2VQPcnapUdC1xYVCnYNpS4QbEJLh2",
  "key41": "LXKcRGi9h9U85MjGLNTatQkfkq4eEEaVBCNszTYNEyTbE4RybfuRKiedHjBpPfFr9UE7WmbfM7DEXsAsyXz87jZ",
  "key42": "65LWcVCKny1F1o4RZqqnZbMSALmv5wfBaTuvnjpnrqwRSAZiusmfQ2aKktVw1oYngE9KMz5DjNtY31DfV1sgcJe1"
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
