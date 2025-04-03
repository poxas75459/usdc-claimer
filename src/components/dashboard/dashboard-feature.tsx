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
    "3Qq9cf1vfVhJptfdTRAVKJp9Rt7jv3cxJAJcBVpB5HpkMMp3pYbq3NhnCnUgMcgqKGXkdBUaVfGQ3wU8yfCmAKgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5dCjTwcQPdTokUY6RhbN2DnmbbBWeiSfdFd5JMDdwUaJtTgbXUAJ2NA9Jxthk1fChep9iYiLLKzfkUFoCe8t6X",
  "key1": "URbqN6rxpD4J4PE7ZUpDdMiT69omNBvAb825JqwtHJexASHgjso44J74jPpcp6GtCCN9Pp8XbvYxHSGL3JxArw5",
  "key2": "JXdDaTYZtrm3mBT474vuzGjjLFw9ubSSCh3evRWmhXoTDxL6VT2WgQFkdWRabtp48S6sEJYNjc5U4N7iQL1czC4",
  "key3": "52yLW4PUeMiJtrSLDDxfqKFfbM7pa86rKtgh76vKE8F87Pf6CrJgqcV8pNnHFrUTzuwKG7BfQ2d357Dkx5zdoRpj",
  "key4": "3Un2sJqcoJAtjkMWcBwdgzUEX1cqMat68yNFKtQmyvYJPKB7z3TccrtVvykw89W68dD3QGeHLU2e1H5mVgn1jYEB",
  "key5": "AgENhFkCYKT8pK9HPgYaMdUfX24TczbKmfQasyxf39wdSjohedAWuQ9RU8RQiRd6zKZikBCZsEq3Kke6tc4Fp8v",
  "key6": "44sqe3YNFrnxaaAMcavfkhtaF4NVzh4hVmeFVyMENojkyA9wMhfeUmfykMjuy5aWVchWqQYhCK1nrsru8dY9ncvD",
  "key7": "2nZBfTQRyReB5fXoxXGBR5d8frP8Sw7gAyQfjcUwgzMMDtuK69vxDACmsQ4591tvvYptcRnRWmFQzUn4TabByW2j",
  "key8": "2e3FPJRk7nqGiz9HVHpJkXGVpUcLX1d2xzQkdNwNw2rad8RHx8c79G5fYVrk82yTdmALHM4x8EfE9PoUomxToJHS",
  "key9": "49E9qL79UaC3Xz1ZDMosp47jsq1nZKoZRkcq5oKrVJDmDXPAocXxXqawLd3n3faG4z7iq7aC3ELFDYm2hqA6mB3x",
  "key10": "Ln539xYkiD2WVtkN4nnVCxELiPEtLtfuqgS1i9c5yGytH6DXtYuPZGMH35WqNbJcCN1RBqZM3Qvw6AppdPpTwf8",
  "key11": "3cn8P1y5ka4Z4qRXVsEBt8kJQQcYognoBKur1jqstz9x2k853Pi6kghcGQidLszsppFxt2VDbR65Gbjt6V9mmToP",
  "key12": "3wzhLUH58m3T6QqWdXVxLAi27QNEU94ZGHq5FZ3L1aV5Jm98D2f4FD1siVbk4g139H6GJN13WRtpNN6yAeZAkGML",
  "key13": "4yKpaFTL4M1K6DKuYU4u5WQgyrSyrJvGkZxqq6knZ5ym1q1Ck5UAgzhyYSvLmBCyZAfiH3Z7DBCLMvjAhGPfEWCb",
  "key14": "5PRjXUkCMBtxyLTAKyQZPQ55B2DaSfaWxWNKupa6RaRzNcDD56QosMFfvq75ucwiLxwXcLjXaaMUjLu5hJR7dcLM",
  "key15": "4aC9Nd2bDxYq3aFfA26x8YvwPjZmJ3qWvuAzYLtvZ7TEPsjPi2Azuuqe2Lr1GPAq9dqaCq7t5kMLshHZt6LYK65v",
  "key16": "UrcrwJJyU89k5PyvgYeHMCabbY4SpjCdtBvjraZBrb3nzMGC56wo2ehoiLB4GnjMABK1qM8A8H7gd4fjsqeQRZn",
  "key17": "3nMapXF77iMaXTQbqaEYCPFGGQfLohTkMuPQKtH1RdKen5P2aKpJnpZqNk6niNtSxRqFBdmL8frf9NoQ91n4Afzm",
  "key18": "mS55SMWLqYofKx3wRvKWa8tSW83zGwKJ2fJ6HiS8hHQhQogUudCo5iHYiLH5LSb9oea8iDiUpzQMbsMH5eRQUYS",
  "key19": "2JXp1EzybqzDiTHdMmi21GTogQF5c6AGQUF9JzXrxPLZd7CvhzAKo14yVrdGS2B4ZZ95RtZEhg62Q92pfXQiBZnm",
  "key20": "3RXj6oXdgdgaZVcKaQ8SwHCNXHJFRGJm9jm3R3wUvS1z434NhWguaFMsa2jeaXAFtbnMvNgCf5ezY52rE8sHH3ye",
  "key21": "4QakDQ38jDAKPyrQNmHMG8W3TALnzbQnGoHXfSeyLoo7gK7MxRd2mx6e1GfCrwM76aTjyzzLGN4hT6g4m37CA5Tv",
  "key22": "2EqdrtFXdEKmXfiEKCxpg5QAgRsNr9aj46VemetQB8R3ZikVWLKLDo6DrfoRPFz4oE6nkXzjeNyVK2yH7MxK6Qy4",
  "key23": "39hzY5ajSNqvvMoUiC1WtDb5DHSF8JFw9AdyvR39Fo3ZS58Dbxc14z9xB4GWePjxnU8dNY7bj95XL2jUMp4t3AeK",
  "key24": "tZqNQ5PqE4TQMNFTNZqvP7yxD2H8Yw2r7mpucbai1EkoDALbwCHZAyvC9qXYNeYjJZYWZGNe4eMFMaTuVvMn9XN",
  "key25": "4vJwJ64H2721FpUXSDx4vdDwPjHjXRrWXHpA3FMkxMKsbK2uofAXyfvakPYtXFt1XgQnYLB1h9AQ8hf6wsoETNYK",
  "key26": "2nfx4F8vQjzQ3QbCRFqCeRLmbQcEb4YkHNWXToahXd9bqJ8NVJ8L1jHiKjbvBoerhyJUcJ9D5q4oYQs2ZBoS6Ago",
  "key27": "4fvhdh4tf3xJqbo3LS7WpsmoVNbfQqYJqj2i6ZbSCLwL24rrGwskcAQTuq1pbdgoATc9gR59ErdvkMVWX846Lm4J",
  "key28": "3xUDpzyWgQtcrBHySgv9p2i1oBaAcPdVPjrW7bv8s8g7Jmr7S4Z1v5s2NbQ49QVXw7RoojGcTgRvmXaQ21ezq9NG",
  "key29": "3pjMrpZXiqMRhBpjdD6EsHymLfVdNfyQw4YMtrJ74LmkWwPeh2qCJVAHcYT6Npt2CM1MLD1BjnpkFsEWKzd6EM9Q",
  "key30": "mZxWuiTU9njXojNw93iZVR7Wy28e8kVKroqsBqFsBq5Kn93YyrRUtGXM6njXvNfBKiKRBh3qjerygjhB1Dhr6Me",
  "key31": "5ZYyDGy4QdzHfvPEzgXerNQQvBNTE6XCtgLm8afxTbQ8G4LrLxVZdueJzmPURuwWem63JRcWhNWthv3Peb76TizU",
  "key32": "2wTQn4RjfHxaaqLLD8qszVwwWLkQGyXWToUK9V9b6C98QBZyDiWpTgHXyNja5LunJXQrkcecbgsANQyJU2Wq83u8",
  "key33": "5VDf666hhyHFsTShQPRdz3WwtH7gHsNxNp9HYEuyy7LkJKshrjJjGDjmvRFFYCAQNsNn6h2BMuDgSdhr3mrsrxT5",
  "key34": "2Q1LdfWypSVxV8bdKDFgcU365imQKqx8bJxiiQWsFfykTSBXicSzjdq2LsgwToeHScTu1DKMwzAk9A1QSo1LedV7"
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
