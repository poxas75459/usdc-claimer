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
    "4sLGumJarjfxdjhzW7ismyiNbjcJuTz2w1qGLa1wXF6cxcWGLBSiFKBR8dPSkzNLFS6iCToGnCMrnUVJTfGKB2G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYQHTwM3k3CqmrVvs4Tx3ff3NYqkHorZPy9fPM2GrqEKoH6GEVWidX4CupMCmPvEQ9vLfVXRbEZ2hF8wdRhYk41",
  "key1": "3NMqzwyEowFoeB6vWkY2AgjXd2WazM9rH5TMyudLbxzMFbKmRkYdkz9QgceYUo83knzJY6o7qM8Rg9P9Ji55uabf",
  "key2": "5ETPSvQWHzFtcipPhSk5MnjuzxgDhvgZw3ow6JuXrAQNP9aBsh8qNUM5KnND1HvaQZn9VZ7d3o6iBepFE1uSZqHb",
  "key3": "2rWMAHijkgRH9w1QNRt6LTcDeqSYahbU4cq1WX2i3qsEZFqboDKn5uoMTmyy2Vt3ztcvPnEceXXxxxnXuJA35UdY",
  "key4": "4d7npGoBxCEFxei63qciefJDsUGyMrkSFQHHzEr4bUief7gMZYwiTv7a2p1gHKnDX7yTn4JoiPJxNW8K3Gfu3dZK",
  "key5": "2jDgjn4ELdrpw8j2i831ZUQCJL1Fp9LTpFKrWAsxoj81RZi9Bt5Cce6uem75HWs1iHnCnvtmgGdKugGEw6bciqqp",
  "key6": "5FgEUkuVm4dBMEQdpSfEAEzaYzMSH4aGLzX4Ro4E4vq7VVH9NH4ixc3MkfVS1xxgW7k4RyGiRwsTDo82vS7grdsr",
  "key7": "5dePhzVo5m4duS9HGy5pZLqDzxhbfsSjP7L8K8nWpWX8h29fV8zyNPsr3pVfDXYPjhLhMwmTprodEZGXV7dVAM8m",
  "key8": "33WrEY1YVZC5fEfPmVCLvMeRJzgRK41i1oYEjemgiwNr41XmQTd9UvU7NBX9pkHyx8Xp3JyYq1T4vBQgvBWTUny9",
  "key9": "3oUCvSVM3pRqR7PSSs8pCG2SJnKxUUJAsbmVMVtPtJaP3W9pVEzdMy9bVZExxHPYv6D9F44iNxaexGUcNoTP7NHS",
  "key10": "Q7xKyWVM5WZYTmuwtRsmrBP7NrFK6zbzoikwNQpRsHfRDygp9VNoBKAG7guur6rouufAUJHcxg3v7ikWhr2DDkV",
  "key11": "5Esj5QrHVpnfEaS4d6BTBFrraSVCL4kkQHe67uoe6aEF2nvuAkgoPdEg6NT5K79AdX7yrgqxbkeaXz7mqa4oZiqQ",
  "key12": "Fv2eBvihJj4KUeteuUmek6MEvJFWXGsoJEbAWx2wGALPvPs8gBrDgPptdegfpwm2UDEwLAKvA2gvbyQGMfBJppp",
  "key13": "4YbyyyfU3xcDZWBY6W42AuzomrrQijaM1FtTkZzKFHp5z5q2JTHaJdGTqrFF9cmmwBpPgJCW2oHnFM68gKEtknLN",
  "key14": "4uhBNWaeDyQ8wEQGmAyGnQyfwoXn8zSkZCkK8ssoxnDTy7WfQ6vFk3vtKdi3CF5PWLSvDGZeuo4Z8ETeTcgCuZe4",
  "key15": "4NvEEe4yuVs2SqBrcp97WbjSK2qsECcy58gdmNHNx8U8e4VHPspF4dFrKDk3We58NLpS9dKdtf2Y9iZP5cEU3Krc",
  "key16": "5Tu1h4ubtEU4nWtouC327Z6E2iSVxoU9ZikGz7E2SF2KsJmpyVq7dLiBnzQNNnzgWTX1TVArz3cojyxEpLiuX3bm",
  "key17": "3kc3C7PmnCqoRbjPyjUA4gagDfLyeEPmvXX1KoRbXTuBe8vTMqpMxZpZHneJjky4gwmfgDaaoCVGuvf7sRgD2M2T",
  "key18": "5g3Vs2XwBLPyMqX94KVDahSuh5Q8JQeXR9yFHrdoyXz1rUvLtpUcR3bPaiWJGNtUUuXEhc6ZKVv7LXmm2m2fCXsi",
  "key19": "4FKcs7E2kvufD35ZMCnWpgtmnxdHWN5Yz8ui2XskXp6yiCAwWKPbadj29cLPvi63wFdYFmWJ8ShEMMriHXGjBGep",
  "key20": "2rgSEdx3PPd8aK65E9wpmFtdjmb9WwbdKbnX3WV8cRGoa8nZtznxUYvkbFkbfacECF3a6de9zmvkNNqrgskLrfj4",
  "key21": "J7pF52aNyn8ABK9S3CQRi8P2Nf5ZingVyVkcRVXGCDh4AdKBxqxx2NXRL3RXbaX6fVqgsKzDqoFSmYrXhSEHRYh",
  "key22": "2hAzwUEaycJKFnnGgnzcjRbE4j7eSBD3XbNcMzFAw4HJsD8GzCtQUy7Gkm6kd3UKrsXCiZfSbN2PbP1aBLnEujWC",
  "key23": "DGxzMYWHshaipPRmWwEu1CtP5uQhcbWdbkftiWPf4LhUnXdJTjx8gANxZCeoCBndMDxd58sFFiPD9j956sM5GHW",
  "key24": "4d25dEzvNrGqj4BJZrvSBUhR6YtRdzuJwxXbD6nB8tc1apTwvZkNshoUghpugev3jLNPZQe2y6PsdszaYymQdzsh",
  "key25": "5VZtxFToT1v6ieA9xDLDGhDjwvLyF69F6cvJ34Xz9yyQAi4vTsR1rKiF5o6CrffUVWM5zMWNxEq9Pna3q3qTSBrz",
  "key26": "F2wssZuL7MavoWvMbZmvBX2qc9AK76z4VtVGCaCgK2kfVcvxeNB7N1XN1Y6G2LZb7yxoh7VugcN9SvjTLCkSTzE",
  "key27": "GGbd8UximPBANwXERVcF57UiCsCMFHBh6kxmxAdQHEpwTXQ2ChFQdQByqErLa4Z8xtckfN3TcAfrepmnkrzW7C2",
  "key28": "259n4LWSCRAXbTf12rmjhzBgE7uhKudvwhbkkYLT3KHy6EgpyBB14RVYeHSwtFjqCzfiKffVNFzQ884qcBygZ1Gp",
  "key29": "gcWJYhktG4FPRgZsTo4vEQRKvnDms2V7yLPSiWvADT4PXbah7oxYh3ZhCMn2AJckwe4CKbAg7TLBis9d1tKRD1L",
  "key30": "2ZCNn1x3CjwcYmE6JJHtU6arNhGKrcqDdu31AV42z7nyjMknxUkq3sH5navZd5nT8bMuK5fS5jJfCmM42SYkt2Lb",
  "key31": "piLaesokg6XEhBrm2qu7z4R14UpAmUzM1ZBSjtS91rqj2Q4rVE3icfrgMBo4EjR5xAX11XPATBjrKSESeNytHmE",
  "key32": "3nxkSXcHZXwPNDZG9QLnuj7L9nM4Vr82oqG25SGRSSFjTnAc5Je3mZmi8ZQHxPvw5BFVeS9X97Uni65GLZAHumN6",
  "key33": "36gENpC7AaXPMMH1Dxk9N7Z41DwDxpqfMugiXXQ78izH7guXP3PeJYwQvh4y6VaXrhCZWnFX72eiaREu47RJCHbQ",
  "key34": "3Gjdj7Q5cGCRisCRhG5N3kxdb6qoRXh1LQnrGZm7RWRScRLZCka6qAcLXEwLS2uVL4Um4uz1H3QwpTYe2kr8b45b",
  "key35": "4fjkbwbwt6qmguBVQgLncijsNC48JSWKQkAHwRwfFjV7Ffh71V51KUg5V265Mxn7ph6LvBhQiR96rW48cxFUtnmm",
  "key36": "2BQBhnmDgZXCL1kXLf46fBGU13sobJJbemgkGEEeqATRf35xFaQYtbrzPk7mnvJACMCLJKzSmGb8LaHxkGTFwHS2",
  "key37": "3VHiUf4PxtyKaKJGoaVPNbEWLpfNRhB7zpv5LvYVs7khE534YWsauNehZawtFSci3Awy2fpVQQ5HfpUARoat9Zip",
  "key38": "2LHCvCqcpWcJW4CaiMcJZaKSPEgiZue4BFUWDMWr9rMSyuGffc5hi2zLJpTS9PopgsFwAQyzHaUkvw3QFVoTyv58",
  "key39": "51onADatprQxcL9gEcA1Wj4FFRtX329vZQD7U719s24KzKFmEyzmztc9JeAx2GCAE951LMjSwktfB9yTMLv9Wtxm",
  "key40": "3Y65tBZ9hJKYSfbogf4aoFsDa8JJjzL3yeGJ3zCHHdzBtRaQqMGmSgVuSv9a1QUVxEi7oKT3fCqEA1vzg5g8GTXn",
  "key41": "2tDjEMLnRx5ateDm1PULDXpnn2oFTH2mGEFiZjHgjf6roVcZFPKuDqzG2C5cpQFZP8V7HGUyvLqkvHuzUYWqv4mc",
  "key42": "2puuHVu98mhhSYAKtdEQT12e2iJyPvFmK3C14WHbF3y9XxWP8YyiL7QAbaFdtF5mJtggqXTVCR5mzCWwfn5dRRQo",
  "key43": "3RzffJGEBoXWonEjhNPZiqZZ7kGzirKQ98CQMNfkUZFrxJ6Nr9mTygaun9PgRBZZhNGKRgfUo3qadok9zoWSAkTe"
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
