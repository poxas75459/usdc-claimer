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
    "3SZgv5Pdkg77NtE7Sdes5xaumVvsu3Y82p9FhTaPK4dHfaxFx9PbvbuutNg89xDsxtpgt8XMqhypc5r24aXZTLWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdWzSet2zSj2dvDtUEf7PqN9Kv1u7HwddDK24r8pYSggxBgutomT5FqxCmYrZ9WCbSB2U1ojXsT6Sd5cxWvwF95",
  "key1": "oVkBnw62qa9pUt7TbMmECnau8Lxg55tTpre4RKdE4dYdSDrT59FdtSUXnwEPHjAEsaK6Rphu4qpStCSiNHC2enN",
  "key2": "5CVLqGgFLsotgnXAUoBMh29wHNmH54y3B8J7jYeVDSLhJgB3MdGQvmceoTyuWR3jPQoSDbRfqTmJ3UX7PLE6JYuS",
  "key3": "4YBqGZ6u5ernHCpFEh3duMEEAEw1ygof18caohtj5B3sWmGRRGn9SWYq9SuZYACPbojhWyH7kPPZg2eUfcxVoK3J",
  "key4": "5rEa6UsHq8ZnsS9fgkuoe4Gh9GXQdTysjW5E9c7UoVFmsArVQkEeKDKU8qTFVzXMsogJv8VbRHaZVekqXK6q2saF",
  "key5": "wEjFYSa5v5sHgMFkmKBZLnbh7qFy4y4DvCHRzNcQgMfKagtRnNZCVkHPm3Whhvs7YEUhFvbsBhLXRyzEKZmDGCY",
  "key6": "4d8cmSaQpxSsUdNzPmJxeFCLG6bvEnpcqYks4w2ZSxzxR79kM9DoXW5HMJM7AvcDRceQLAVCbJu3yHWZmg3fS9V7",
  "key7": "43e47JSe8ceeEgsCXMtvbS4sKXJpYAsNTcK3FyQLtHnr2mwpu7tgsUJZfNhYotSahQaJYTr7jJCrXFkYMxhHVnvc",
  "key8": "4JwXVuucxRyAZPWaz5P8e1bYHjHi2CkKYJ4iSTiTJrGoW51ZJRoRaFpGV8DSeTMaT5kADGgiDAx5KdcF1effHPjm",
  "key9": "5GTA4S2DuSeYnefMxcLpUVZvfbXrErKm5otuaPfDJECjp2pWs6z2yZCuH69fLt5k88n5wgiFjG28B7Zn4ddmSHeV",
  "key10": "3pt9ePHorRDWtets6DXg9hQFeBdcYGfdq3XVJFoetXjtb23oCdK4D1LNVkNrohgXqeNsXBzJRhzMcu3qxS1ZUhH",
  "key11": "3GG93DRAfDHjK9UjENE68o6gQU63jagRT1tgCKLxF5n1s9NV5P4MvFAGc1ewDzKXj6zzR5Qh2NhTkDeFJpZdeQtZ",
  "key12": "vNUrJFXFAiQZqQKjEFpmH2J5qFbA5mCuiKNUdNKfgtdbLz2jYQCbsxTB5hLy7NrLTAD8Jd1AxjBp4Td25iLq8CG",
  "key13": "4g8SGZnPk7ZqxBCEPs3sxzF7MbkVTyCa7AorkcCVtG7jA43TtkyYbE2yMmDTnUzh1ywKTqN84SL7eukf7ACLbUiM",
  "key14": "uPi7bVZaigdYi6vq8a9NCi6T7ZoAGeD3WaZWa7F7ip9bq1MYpCEqdM2njEFMT2hdXd48y3tsKrrPksP4TisgMjZ",
  "key15": "2Wi5W7ukp8cpysaJq8nREuaRsrfChtrGcExAqD4Vb4FgaYBNnNh4YDQENqqV22jJY6RwY6Ea866aD51wRNBLhbmw",
  "key16": "kS9vdESN8usCzWA7AZvjRNBRMjgnGeJkj1yUiTkL8jYBPD3pg7Mun8vTZMBP4VrvSZfXZwkiLvKJhUNcgLv2RMk",
  "key17": "MozHzbXgKGk6zUKFfGBLWnpEJgcKigP4r8mjKyfwPpDBYuTBp3vH85rdaUnjkDhLCsspx5VmHQwcHTKyYUEjDYE",
  "key18": "Rt9qLmM5RAbsF7ftX2rg8HKik35cnpwPnaz41dV5X8JyTLo5iNG5aSbDEomGsFeuDEc8jowV7Mhcpg57Qp7muH4",
  "key19": "2ZbhL7WXeao1oDhrMBhS24TAukKMBYx8Us8MkFANRihxg2Zeo1U4dEXoBiLgaad37337xVH7noepSdyBdCMWXwvp",
  "key20": "5hE46Jw4dpPG4pxHKLNHz8hhAzEQFuEVzhK1wiQVsmHWsNVv5h1UjMgaUN4fhnww6XLJakztwYNvUUnhiaqqDGWd",
  "key21": "2GuwRq9DHXKfdkyAsmw99He1TmVHzM15ABaRQNimR9Kgtps3zfL8BkBmpxscqAXYSbaqQ5EYcPZEQ1YH1zH8cbgG",
  "key22": "2ZUEC7gjQgvmVTmJWv8xDv2TF5pvqvCTudGXL9rXHu5qmYJwCvFrhYex63Gya9GyT7JtkWWUoZHxMgiSBGMJyuyp",
  "key23": "4o7mv5wszs5Qk4d6D9WVuWaeX1NeGK14Lg18d1VuUjkfCJ2WawzAeKa9gSYVmzWrXLLAKSSwg8uwFxypGgG82PSg",
  "key24": "46AhXTFmWeJGxvVYuhutFTWxxw5i9byrJsHJF3KukrPAb4mLRTwZVHcJj1jkDQbJhChdKAqU6gjhVU4dUShCXjmq",
  "key25": "4pbS3Baw4SibgXmCypd5jKCGsD2dos8a3WLgaAgc6XwrZu3LZgo93iRp5wrQo2to1TyozJo1pVujbANcufhZwCbd",
  "key26": "5kCFmjypuGzTsR63ZNXH9anVSKcNv6gAWADwJNu7GGRfiBkmu4RP62sLPMfn81ARf4JUnfUBbsLmuCVcMD5MwXDL",
  "key27": "3LGXaYTDJRrCWo4v2jaepbfUP9dC1eQRiQqrtadXKSE1Xm2nLRtADTqzbpdmKheJyzgJiyDNYAFpYLCPV4RQsmGq",
  "key28": "26gfpHSrDepXFvDGXsxSBni2Qwv7DcWbSYoeJUjqTkZuPGeXcaTC9r47SrLHekys2nbVyySTtYahqaH1BjJM3z8E",
  "key29": "62rvPyVSru3Nrw9VCW4BW2k8cvzKE81xeMyxT1VyPddCGdFdWk3KHw6LXTfXxsf5yohK4K7ck5w3YgZxwDwJGRdF",
  "key30": "53dqA3aozfk2L3UfUC95PF7AiUBaETLA1MTma4M1TiwHWk66jCU9ATqL9MqyHx2Fppo6yKqph5QV1rgguFPKdkZy",
  "key31": "5yD9kM3ri8NTRh6zyFtAeK9nBpkhnUSz9cMGu8UverXzR7X16UgsgKnufzb3b5WHXFrrast6WQMLnMRFKfwAFuqe",
  "key32": "ZU2DEbo7jK6rcp1EbwkaEupUs1NaXhAt4rfxx5iidbsbvg34zZWjnqtqWtp6W3a3JcBJm2Qe5ZET3mXBLZEJ8GP"
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
