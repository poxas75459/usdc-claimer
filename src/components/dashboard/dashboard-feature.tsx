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
    "3JLfqYC8sYHFPkhEvLEUogUbwSndENHRpE4LdkV6GHSMGBh5q3RLBKgXBMYntdGP1suHwvvwnc6qmNLKxeuP2U1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wy41XyDLduN3yrVq47geHpTjs9eUTnyMeZGBoj8Qsf5HTahAuRcQ6FWkHkY9eq1UDbzdX4NnX7SQfe7yv3o96F",
  "key1": "56HFUVFoyFRi9VkQf7umeHZAHA9hpTcmHZKhQsXTfPaq12wtmt88ScDni7JtFAQSx5XYn8MJcQpwJZUnSFSYim3b",
  "key2": "2qCNutydNUtdHVgrxGoDLNJTB42nqFjrWdMt8ovdZXoUc5TF2vPgRf5qgygF3TKMJhSvgfAp1XF1WejFk2TjNqcG",
  "key3": "4ohy5DihR9A1PrDSgVkvHvGMYUtexKFRC2UJT4WDGD1vKrMX5p5i6TpuooF8zsTjo769j1Xhq5u459mVxTXnwxTb",
  "key4": "F5WzbkaTKaiqQe4b1xX3Vhcr7nsnEDXdskrJXKgtTqAGYWnxmHBJ37eWZL3wnbHQVMbe6EXCEfFUnAA3N3Q6ZtX",
  "key5": "3rzptSJ38voEBp7oH89ceG2okjCZyZyZXXVvmEyqYWKzHwPUFbasmdXZaQed1uF6Dyn2SX5NagQtL83PMj6BpdmJ",
  "key6": "3aPxhbyXUQcYfPY4Z4HX5qqRztcTnB1be4wBGZLGsT6XQnhfmdViZ7KNSNg8g3BDsnqzk8gwHHb389JNJznxqe54",
  "key7": "4cCKqoQmmB8GtZxw2JgtJoRLR1oy2h74BFYyFXtpedSp38WyHjBPqfc8wVXsKCnoZYCfvxkJWM12s3E7X7BHUEqk",
  "key8": "Q53M1Ya8K7voJSgsy18vL9o88BZkQsaaSs4i6jjJhZ3dGBE64WRtmoV65CqRVWM5D62YuPNMuQyNcGjo7dQ8THe",
  "key9": "he2XiQuQP7oPyMjRBzkwFgzktNQwwTSspddwZFan9EhLaYCKRxxyUz5eR68WCaJgyzhh4fYYdCQAmEhne5crs9X",
  "key10": "4VeohctK7t91VZjsH7zhpjsEKr74R5nNSQ32tD138KUzqTUcP2k3qNFekpYtis1AKGMh5vpW6ZQEBdjr8na2G4P4",
  "key11": "fPU5SFgCsRaFEhEQfBPAaQjFDx3GvSAMsmAXaavjXxs1UcRw8VKqWYfsCNVyMVoXrAzL1E6GvdZ9ske1aYmWu9w",
  "key12": "32fnXrQs8NFM85PKuvhE5z4KEcg8s47peVktJBDnB7jZvQFDUZ2DDPRxGUsmhFGUCeVnWSosD68a2PR5juAXBNAe",
  "key13": "bEqdYfwZrUYbKicemn61KDFTRr1RGF9uPgX1HA8KJfzM4Doo5udAvqBNX1oCRSNTwfZJYzA1F3nckPmVeX86Qtg",
  "key14": "5BHiY77ZDNBRne4rMoj5zCSFZTT4oHZLeR5Aas6py6TPVGrwCyf6R6tX9MCvbcngnHUbjSzCbZjoC4aBD4MzemBq",
  "key15": "5rNWWzD1yG33UjQr8d9dJCtDRbCAKdyFQCKCejQwWzPYyXc22DMNf4Xt56GXW8KE2ZzAcaCgBeFEWrw4EexHdYjQ",
  "key16": "4DZt9cdHQBLrCCreZY2StfkezEQSQkNAtntb1SX6TR5ZmBHFXf6nuDssreoLTXH68TXAzia1V74c2dKeUVLDpEgG",
  "key17": "5UqWoqU2wS4PhpTMcFejj2irrzgCzWxxoSTPYdStqeG4PEixxhvQhQrpWnJZnx9ehvcADr2eKJ5Qe8eRzcZptFms",
  "key18": "45hkzEmybvVUc4PuBk5wnsmoCCpGPQ4Unji8g5vFQ5hGNC3LG57at4RpPhNM4RMmuCNbfpsTgGyXSqWDSJAPReF6",
  "key19": "21haSa2MzR5enixaYHuKSPzm5FKkNo2NJYsvQcbKM7yyZbXcXUE8tqeCyoBHcXCKSRH9PD3WkBExxoTCVjs4snKg",
  "key20": "2GgEoXQkonTdmf6ARsZBUhcTEj75kJ2cJwJVVTarCFHrvDKQEzPg6hco4NzjrQumztUvD7HQ6xp9zCa68nBSRppC",
  "key21": "2Uk85q2G1zsx1fB7emgt6Z5tKBnTNu14SUTAJcX3nXv7fvxyD99sQFJXZ478oRbB46CK8b7RmemppsNt8LkEVHiY",
  "key22": "2QRsUaum3UTbUhWQtZLq9mczY6YqrNcWRvrFbhBpai8Wy9BabXA6k5NzpKCQRXoH4E6BRJUcSG4ExtsqXpJ4U4PL",
  "key23": "3f2UX7ztJGLTKa2vHWqNnu381J1zD5jHQ4S6bua6eAgGJ3FZcz1QMYt3aXpay6B5QuTZmf6nGCEDdZoeeYUH2hMp",
  "key24": "4eGkFdxHGQLHbzRTsDGkuFKXbpepVT7rqkUuxxwoscfh3kWbsrTj7Kep5mhKQmCTuQBgJ5tvFCKPZkQatpHZskpq",
  "key25": "5KoWMTneeDSQMD64262avmYVzFUzRYfjeNEy1GRQr6AVQ4GrzqPBJokjk28VY1ELUUYmsaT6bgEERTNN57Rj1pWU",
  "key26": "3Mta7Bw3iUvgR7u1JqWGvsukrqpTmg5UGAArJ9ewRdXwwvjz2TQT9zzX3dQjcKM8iZEvjiCMpnt4DXqxf8ae3cZF",
  "key27": "2vtktWYJdW79d47XTZn6QP79sdkSYWbxZDmr3kRGwmJu3yLUbTUqDimJ1fZtWgXgKDeW2fp3ehLcKsTcEP6qeMiw",
  "key28": "eL7zYCRcnCjavWc5kW8BqY9EMWeYgFEea5YuVpuomKV3GcnuSw3UzHowDChgnecKxsCZoGD1S23AWJQVbkCQPPH",
  "key29": "377AcWZZmhyGf4mNuYomu9sE8WPeKwUbJmVP93WJ8fTt1bbJBU9xPQoWPVJFUdg7GN3se3iJbrCwwT6gWhxmp8bZ",
  "key30": "2NXRyG4PKA77aADRnpWRd6y5gJLgMYt9tLv3GfgkPMuCS7eX4LjVeePkP3E2KBrKzmyqTBvYYujgvc4itLDTrZrt",
  "key31": "2w9YcbZEhwTp7Wm5Bw6KAFR6gLxhPduDNXshQwZaSwN4vJZ99VqHV2jMsUETvwvzF79JqizHZNDrviwbSp3Mi8dP",
  "key32": "JkDk7MNbnacbid6qkrGpfwvQb8jeXBXVDNmHJ4h76vBbYiU1Pp3c76vRf1ynF86Xzk4CjKTBs22ScbyaVLCwYDo"
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
