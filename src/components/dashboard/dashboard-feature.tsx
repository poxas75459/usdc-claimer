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
    "5ETnV7MUy361ZJPvqLX56JHD13HSHoWsePA8cgSHeWrWn1jd1QnCbSUrS8QsczshqEkweA7avW8Lhn8fbQRY7o1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x67B7Q4aqTWp885Y5gzQWqSMTSJdzYtfMgJYwZ6RzfuLKU381u3XE8GvSJeypzQk2pNgjKL6Novdd9jFfZy5Caq",
  "key1": "3jpmKHiCWsYzaRpsiKKKsuXfH2k4ZPmFKBdNrVkMNi7AqzwJwen29LdEYwjQMcqRhQBNh3qpCC58ViVv7crZVqEK",
  "key2": "xZhWjTbdKamPrdN1FmNrszrCdpet2BhgGrRR4Q3aiBANMNdiDNceeFJgBBW2XEs4wSPM48PbFZvMbefiPyUofn9",
  "key3": "5G3V3oqn333cAyctodtMe3JsuYv4DqZuh6nEWaBvNKRBnVTDfUbh3m9sZq9JDDJMzYrwUnKjUXV8QYFVtbtr8dMQ",
  "key4": "5LCsg9DyF6YGVrAaMb2AiJ975uEezVECgD73u6jyrQrVDW5NmSVpDuJ9fS8FL4QM8Rr2Fu18eJs7yzawZgsSZWjX",
  "key5": "5NYSw1gy1kMGCXv7YDsGCSxCG81kJTPC8GREVWQ1zwKxuhh7Hi5LNvNiFFhpUmchFRGT1PpNkPRJHWFzxdGmvTRv",
  "key6": "qr3XfrTHXtTwK4nNNfGpy37h5m3z4Qzu49cdjk1243tJQfzfKbFzSbjTTCsnr8Lzs3fReLTPnmXwkSpghLMdqbG",
  "key7": "5YSwo4B3GJYaJhfsfcRUQPzoGMqJzqWysvjx5wzyC6mJk9fVpR6y1r1bjEFbe4UJv4p8ARhkb54fQdWirKsDZuPG",
  "key8": "3ixvkzq8Suttv1ZsaMWXGjZ1XLrVRNxcSNSZPxdTXtcmycb2JkmCNXnM73uNYTnmBTw7QTqpKXAyp3iA8fsResbp",
  "key9": "3AZPShH1Z4TDYH4VHbfzM5Q8dNc9wPS8Egj3mNFnwaC1zDiB5Yqppo7FiEaYT55naiW9Fxgp4nKjH9VXzMgdPKKG",
  "key10": "QK3LWguVSaQ3NERo7tD5EzjbRMCZzjY5BJNnp4z2ueSCLzko7T6as2H2YogTqrzQmQYwr1VxiaDTh6Mtu17rsCb",
  "key11": "2KRbzdFMC94CrPMeeJSsHm9y8z99HvP4u2qjBJLrehKYHM6zCFehpBu7ppPwaLZh586aeo49fFRV2SbkaANPhmCm",
  "key12": "3dR85b4zoUGp5bNh34pDBSBARsLQ2EXfm9YnwQa6upAyFA7z4ENXPqqP8pSMcRTCjxkKFQMWFHFUw23EbzmrZezk",
  "key13": "3X2Jibuf6M5d5k6yByMNcUhkUAittuZUG3oPa6GKZroz83rLD12z9xVyghDrLVXSFKRVYjdEgQv9rXTW34Ud7LxQ",
  "key14": "uepw7wemjd5GKtJjAFg3YJBay8xuwsQxHBhPdnmaVm6KviWXFJtxU4bFyXt21qCGePQv96bxNwRR8NPaY5RCh4x",
  "key15": "2Yo9dvSNx1Y2d1sV3UsAjcYu2A7GwdSeXsPftfFokaCqh6q9mcMg8fgzZQj8KNQSf7Td6Pnpxu4dz3dcqvHyq3AR",
  "key16": "5KfJwk9sUMqB6gSvYuA7SPxfC8nSrBf6Q6Cgd6rmtb7ReUkC9ynTXK6amxizxv2m7NGdcotBcoYt6cu9E7QVLCoG",
  "key17": "JeR424kkfmr8hggjiABpnDfQMxmQAu7hL5skpAFzovsmoX59564vt8tuB9LZAWaaTHUdFvKiPQMJXMe4dv4Xujg",
  "key18": "2AoCsX626tS4YPrXTjguZvN1oNxdPeUvJnTG3icZA1DLT7q7673Qf6HCwV8D9b2CcbNd3Uc7yqkdiRUCy14bwHRe",
  "key19": "4QUqeVFwx6pTXFthmwE9ueSsjKJMr2926CsQEAWCK3v59UzzZtpzs2mSsbTEFguVxrqZRQCNi2Tn8R6nyLQsk3Kz",
  "key20": "4Qy4bNacn2Vszynm3qHUw3D7gt18yc6WdLNT5DgXkPrNXUTxLcSqwaTwLnsTgcGoy8eFK7HSMAHjT5xDNN7oGfNC",
  "key21": "67a4CrsAxNRLpokyFH9RyQnQevhSsTXSDEcTXXWUNTA4UNBQQkqkpFfRJuci6yvz7pXwan9J4eUtrJgKkMYAU4hg",
  "key22": "4VPjtrmZTGnwsCYg17LkTJ9NuaNK5CAPytdHrimrciSqhTP5kyEmGJLv5HWrTBzLxyE98qWtKGqc9aQykoxsxH7g",
  "key23": "oWQQHW2TjuWefm9DXe3hqDgQVYEna4uU58z6XXMTiagTXLFzTbDBj5T7ZJAcuaLFLELHYGAqbLMKURbokS6dSo6",
  "key24": "39rhtgqHVB8RybGA9WpDLFih88dQs6edErNn3xB3XQcbWagjUjsWynCiHY49KoKQYXPKtxzEpfST3aVLR1BtZgWN",
  "key25": "5wRtNAQKZpyuygsboiJ9JweGqTP2e7B9pDtX7tvudc7mFHC7Jfwpuee4jayF7ZUpMxWCcaATdgtxNC3T4iaWcjvb",
  "key26": "5TLeqMuQvJAwqT7W7iNSMLx5fEMGjcJnWv9yHyXFExCdckd6KMd6dtJVLcqoBHcYAMMPybFs5fT9FZkA92cM8GNN",
  "key27": "5Sgd7R4Ua5D6eYVWY6u7uZKB8peDJ7bZGRDwgDkU27zQvis29pN2GwheeJpnoG7FxcVk6stprK8fuRGeRWD454M9",
  "key28": "tJjqehEQcbu6T3xXvGtJ6dRqedqHZFYJiz637xF61BithngFij43ibRi5mW1SEyGxuMoMxgdQf8H3Ad9YgQVXHn",
  "key29": "4MudcyNkTktVVvQgL1XDUMsLWWe8rW1MKkhNz32DrKrJ8WmbYVttBYgPSZcKLsPowWPzAbEz55C1tuvjvXgkpVtn",
  "key30": "Jxf6QoNXEWg73P8zvsaWrkWZRVJFVkiX42SLjuFPg8C9uHoLgCjADZGQKhtXu2xokNHFQ6rPkBfkLVsX1BwCFBL",
  "key31": "S4VKFmLXxm3Nj6esw7JaDfokCmouUgRYKHGc8L2vzi1JSkxjWjK1ggLwrMFokHZ98VTaWabjv6LreTHSM3BpWu1",
  "key32": "af81EGQb7GDkfsEdLBnR6PfD1ZTG45fwUEzuJVWNmupPrx1igXyNneHy4pif6WHD8eqZiHabHAQgmLniEhNzqWB",
  "key33": "4wV8qZSFCzUWZXhpeFwgwJxJ1j1d7JTVY2zLnUEVKMLbndwgG3HqKp8rsGUGjP67wEtNbKaraRhdkqxNegTKiVmR",
  "key34": "3DSjPXXaAU6a2u3DCarjsj3fVShfBuGcq7nJz7Jabv1MZ7mSWsRoQZRwjFmfopBmPjxGKabNECbTXXRKy9JKGLxJ",
  "key35": "aygJRABB9tD7C88J2wxtCs3qzXAMC1MPM7mR3v2NNG1AqjqHUSfSwPsAPPdquhf2pyi9EfYX6orcm28wykZkJgt",
  "key36": "3a4yTtq1PbeTtnJx2PLi6g4TQ2cVeDh5sFYJm4rEzBKuSt1kpUFKGcdDPNxN4bquSKrqYQGd4sVAb2Pr25uQMbcS",
  "key37": "YrrSECUMuyWTLaUsQBu7FsYjwAguVhUmkbTPp9zjZnGNdjzHgayTmXyq2jtMXgvDkcjKB1NkZvYQhUcQsP8KXZh",
  "key38": "2w5z3zeV6ATEToxyWosVcadKTQ96kze7y5dqSQvTHxGoPLbj7Y37atES1zLyJY5j73jPhDSrVLTrUj1JEF3pdxAb",
  "key39": "51CFmdXEA4cZWfgLRb1BUd16iMn8cioNtEE77CWqFn29KgHzPYw9BySwcmMRJDzTFruWrKazvZrkZqFYzo5utS2N"
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
