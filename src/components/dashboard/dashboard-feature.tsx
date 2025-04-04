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
    "4N6Fxp76qjPoqZBP5j31VsozF4qNdmtdJrPzYMuBnFe2jKLvmzK5mJ8Umygx9rK71NZTYbZb5qW5mNgmJnqKdDiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ponVyyyH6KEwexuFQ43VjJSXpnsrNP8XMo9NhMneB6gHPyVt3Gc7HSFZxbV3sdr171uoMs4R2ASqdL5n2UtA9k5",
  "key1": "HLFmbQSGgzBnNK3Q68GmrTKDUW6BmQGGvVxWvPQ5v3rLtkmzS36gVUMXoHXDMFCZCudQbCPehvyY7rACyJ7BWde",
  "key2": "8XM6WPUtR8RFo7dPK1jPAUgANQsbKuRJMS8D3boKzsTbrY76dDhPZYJYKKbHUD1WpdUaBSBYQeomwMMwy6xtdfD",
  "key3": "ijYiBWYpJergLJL3n1twsbqxNfjVLxqunVocKcoGgjTj97C7JvRW5nn7WXRy9hD3ECLUzRJwf6fuqij8oNXSAcj",
  "key4": "4uA5rQMCGGbqAFdkW5LdWAU6x5DiVfcsbEuNptpTzPxFeFbUK5P48hhkbLWQwEr516u83Xk8v1eymrFZFc44YSHg",
  "key5": "7pf4M7gDsSSj6XgEKJy2TKFQgX5GSywAnMkQRCMSqAMVsrZR3x2HJE1w9vdVciojr1j23ycC5pYwur4kYNyPidj",
  "key6": "2MgAoTh7TDnxkzzLVaGMHu1dEmxJq1cTD8q1Kbadme3eRJnAsKEMvkHyxn5VEtp1Gr6whs9w1aGg7GqbdjAwsxbN",
  "key7": "2V6FPEVTBZSNcYcBhp2cpKtRKstYqsLcSiSw2s6KLCiJKN5SUGVFrMfe5RLcLmQsxZi12rn5KkmVypTUVMq7AMeH",
  "key8": "4nwtyLRJZ6ePyiUxryeowbXDYUrGRYFAkEhEL4pqfMyTdnC3S6QgF8PGkZcVzHBZKTfg1iMKfCJwYYwyDdhp7msm",
  "key9": "5roCtoJ2v7EnsmgNFFXp5iRFSnzZUA3WxFwQM2sjxRpFjJJt5C7Dc4e8aiPDbD5xd77Rm343ZAHuR2gBmZpJt5nP",
  "key10": "3g3iAnhRUREbuPyDPXZ8aPHaNK6Jw8Q6bEjwKewrPU2GLabBwL2aaWK71pZhy9T1cr4NNmZpFv8NVMnm62bvpHQ6",
  "key11": "2dAjsn5avsEu4bkQBBY9QYcHyZcHirjEHJQvPtJXx8gEAFY2d6xJWraVAgFj716QT4JePeweHARW6BYniPtnnQ9H",
  "key12": "2d64D441Vzuget3QHcU18y6xNxCmxWqLoq4668bumDH3UkbjgB4eyg5F5kEufc3XrEw16enCTG6jZ67neWTiGM3g",
  "key13": "3N8h7ffaXHccKaEDTRRNAppBM3occJMiY6k6aVXUFYszc1LHFD9vrna5uu8ycdFx7kdpKKwKFv4zazGsEkc5DLhy",
  "key14": "U1kxyxkSjDFRPKa26Nr3GcKf1Bh5A1whbtZSijeES2tUSTw7MTB5ZdwqSE4MYV7jR6JcSyM8aHvSesNFvmivQKU",
  "key15": "2jrqtgDSvbzBTaME6QCFEVEwXr3D2jiFgzBHhxUymWrdd7s82FWZC73kpePWngxy311b8vCwb75CtVShEpraa9GV",
  "key16": "3BK85VpMJbL6teVfzXT95kB6Y4rbJo4661o9hCzEjSLmSTbMnAESGD5Tg35n18Q7KqfVvrw8U8fEu1NwFzbP8qfp",
  "key17": "3M5o1EUy3TZk2a9yNqucbSFoPgLVT8SMB2T1yz6zBWUwRB7DUK6TRhw9tJkVUjQHm7WfMZrcouMAyJiYUmGgsrfU",
  "key18": "66gB5mxVWjjXuMQX2h57Aa8jD8GqnmtYExjLHxf5XMhrioHgPoNh9jRwZzJGZruLPJvVrm36B4EmfbvhV5339bYo",
  "key19": "65XzKtk4tf9x6WDaxyYqkEEsCkGZjBT9VXxQwDHe7zkMtbfYRuduepeLJ6HxC4ooqgZiF4YmDj4L7m4DwVUcAVHt",
  "key20": "VY9LFoeij2VqUBiSoez6erXVL14ycy3cyVswdBSAimeN3QmzRxQZavyPv4NHVQoU2gmnpcWtCwdEwZFheYjQthC",
  "key21": "iMVAieJZynWptyqu8bFr5rNyMasfTeX12JKA9XMZZEneHSWmgMV5dExmTQFuFugRRKkfkpLZmPoirpFjDrBRN3n",
  "key22": "KvvRsgpnVR9bcJSkGyjnb25zVmGwagkwS7EJDbjgpwBD1FSpnnL6JdyhoMaG6Uoz6Ks2bjQ5FfBzG6WsvmyQPZQ",
  "key23": "5y6PkW7mniAt8vDSY5UFt16hJMbgs6kE2iMkmrdjw3reEhFohpwgnGmktFWdzM4xCnL77eWMi2iF9ezVZwH9VZSx",
  "key24": "2wDzKDbPENiCpbBLovc61ZxLytZHwfssfhT3HTmoyJFSdMrpsX3gaZekWckRcw17WLadBnjrK4g3yio2a7tZaBhW",
  "key25": "3hcnpufkKxMUk7vy5NL9SFnsiMWTrhgTcFfD41NR1CepJunwf7EQmHK97kvJUmQUhwFHuNnUX8xPJ5ywBnUVE34j",
  "key26": "65tvvmEPuJDYFtHQaADMXrWB4ZcxwDU8jpjUgyjXhA2dkjjoVgYBUQ92kYk7zAGCH9gkj1VcNaLQ6riXprfZ5coa",
  "key27": "6218CEWRCQgKp9E6DPySwSHnzWwW5MmSNkRNxxht3kW4CkZKP2P3G8mpMR5AVL7jxLcPeBhwFRZHjAJ5GTbdBR7V",
  "key28": "3STTvyuHMugepUtKU3JR5GEzQbN5t7kyMnnDgVfAtAweUA67C28Qnz9Su4Ku8txbUTtuKkd1JfjBSj4CGir3hdf4",
  "key29": "3iubMvAbCdp7uxUzUD3qizjKaZXCCLiduvRhdEfdvVSqrKELnRUgokcbPunKoZbmxwKoA7quqY8W8sWS2mzmEEBn",
  "key30": "4r3DLFdrBzCpweHcK5YSWe3ok2Fdt2ZRqkGCZccXGbRbnSUbipfkWUSkb4H6QNbDQVbc8xftVNFRrGEdyhMFoEBE",
  "key31": "PXywqenZS5f7x8V2MSpiUCotZ97N5oiCDmww4BJz6k6JdM756v4D6Vhw6VqqwpUfZrEyCCUXKkVKxJjAqPkP4kf",
  "key32": "3coGqBv4b6Sy4jknYPF1r6asiLNewQCbkp1youpXH3n5Bcgbv1RUdUSNtwW189DujMKt4EWTwmpDzhMG1abEmD1S",
  "key33": "2afkvZHFkE7mhA1M79dUBFe6t2qJjgnjhLkDg3fpeHePJW5YoBLFWA5u5ectUqT3T8HmfaXvAB1Etvqg1k2J9m3r",
  "key34": "5ZahXAeF1oduyqfVo2K7qVBd2uUMx5uh1zoMK3sbGKU7RusDWFoGFiQFEiLCAqCW7UZk1jguoRBwXiyLggBDcRY"
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
