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
    "6K8QtA5QCpbAt5qCcgrSabRjdvsmmPBGNsaF1PjGYsmcjKqiPUYuQbqtBS1w7tFwTYUrxRi5xnQ5wdep8miL7WM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qA2jVyC7DGcXEqiFjzGEH4iQrFn6cMdutZL77vREdhpzSR7TpHWtqVbFPJhFsE6F2kpkMLQuyoaLMp7s46z4h6W",
  "key1": "2xG9DX4oZA3kjwMQMTxyQp5scRd4bbWJGZMU4Md6SjSQ1UhXFwtAbeB4QmQ6gECaCzCvt3UacCM5hyeRLVAJv6ez",
  "key2": "4Sa7c1UBQkSULie5CsEZ1te6dx7UFBcEtfuzEbhmNDkQYGCd4AMtApRC8cQbaKoFPuoXQnrk3sdes2QoYbdvFqVm",
  "key3": "3SskyMgiVPKuoxf22XvbQ5vENb84dR6kn6mbHgMEDtSLW46ppa75pvHHmVpoTrZRPc6pqWLJNXeo3ek5NygSBswx",
  "key4": "55qkm7swhFaZnU2TQMXZ36ki6AYsB1Pk27iyDkhVNGgTmh4UEdLF8JcKMQwrP4CatchHyTRhLDTgeEoq7uidL3YT",
  "key5": "2X8f45VHAN7G8Vdraj9ZqKdUW8YHrb5nWFPBXkiekqaqYmkBpZi74NGQ4SJUZhkxRiGXaQzk3RKe3ZUjkiNSmS12",
  "key6": "3UvfPpxo633K7jgF8PdndwzCC4JAJvpj5PhNQ7mCLq7cCikZWHw2sGihPNQnceVuyuUX4aj4QzG9DdGJn81xWxZ8",
  "key7": "QtrYGwjqfynFfa8pL1TTYcJkEmnjux1b3etYxByJ2BgDdy2ymfuV66EKNSokVHCEcc6vJCQDNXvr9kbbmebtzTR",
  "key8": "3errV6rTuGGcJ7azr8gRhkTKEWZ8kX5K3wyRBfUz9AL899p91CAmf2xra1Hh1CBZ8WZQcQ9bagNbyyjRy4b4meSb",
  "key9": "31eFjQEvrz2VtjHgeNAqdoBRZRZSZng4eEKtUQyMfU3hvK7qErtSe7pTQTkrDoEj7YwKXp1mcxM4GJ7bQsgCr5VK",
  "key10": "4jBntRkTSzUiKMhmPAwkY2usoJufMsTuFkPsZTrefe16GjCKKJdVhT9FYFUQqQrbDRfTBfjthdzab1DREUAiPGqr",
  "key11": "R89NmWNdWfkhgyakJN51t8sgvzqNbJoiBPiJyvNDFgG2HyBgGEFdyALa6VsuDJdRuuT7bB184f5iqeQCReeqxS1",
  "key12": "RhNdkERzFLgqdfnHscbRjp6M3r3jhj11XjUHgYHubTnzMkG9At7WRgX2atgHrgPDKjhtJTudJ6RevTp9WVJoTUM",
  "key13": "4c1ja3DnPgE63LzBN7t6wsRd2L5CkGFexkEWHQUoAW4LoKXJAQz2gWh4HQR7X6AQyay6iY74FrTV5pEXLTRETJao",
  "key14": "9goGsCco7oF5RMmrL77rp6s6ux7gcgaoDhurbqN4idhLdjk3CnQppUVAmYJQNy2rCdWoTSFizhpsUz13ZRt7Poi",
  "key15": "53FZ4DcKbZwruNQvV8bxnvEMtWTEZK7nyDAmrZs2ofvU6deHdKV3aosctsmU5sjVB3k6PBg7soC4AcKv6YJA1R95",
  "key16": "4p42rk3kyUPBA4nisBRK16brHunkcnDoew7eZ9SS2xrgB5HFvntL7u1HD7Q7EpURqDm5ggeh2VYojQ7er1aF2a6A",
  "key17": "dU1HRw7g4bVhD3yF3RKgW416R9ihNiZvz2rcpCV4joNEaRAhgRP1JxWAK6cuP1j2W2zDUGyPFYxu79QCa44xdZA",
  "key18": "2RGtRbyWCMcwYoJDTxZptc4JyzWmw7XkDPLzzutNYjpyETeMNTJA9oE9iH4PaYMAibcafYSSuAVrkRoMM5tQCgtj",
  "key19": "UwrUV6w8P6oVp9gRLXRJrWs5e1mqF2pL8dHemAvcnmA8dodcDeD8ijQf692PTRDLUK7MnR2NuytQAThhArAMoUB",
  "key20": "42FSFXShpUxhRnctvYCgLTQM47Ca5jQ5QUehcDffeJyYxCmGxMPE97pj7676ksmQVRmdTm1W4bUw6paTT4pGx1aG",
  "key21": "5qs74f9Cyz4GwbUES3WqzL9NE3cKhXnKZ2S6gsYu49ftors6Zc6YQnYYy6R3Kw6q8nSk4dN3gmT54YKED2QhW4oQ",
  "key22": "64Zi7JTLYFyu7S5wYvF1jhZ627n73m8RuceGdEbjF2kerQMUUzTZ1did7ickDoqtegkLii7T7aB3ZNYUfvYvvtbT",
  "key23": "3KBbG9TiY88CbMckbUHwxGHsmjYZyyGRgNgzQf6xnXDnVfYa83u1gB93y2kcNvXBjBsoAwe16vb5GvofU1MuV7BH",
  "key24": "25yjf3ZU5LhdvE8CGvUJA3DinPMXpgEwi5fEgMDZBpE8eX1rhnagnZ5CvY1v9QiYTZNveMx2fwEhzbUWoSKEjonJ",
  "key25": "2oBfVFcm4K8hiAp752PR2Lm3pps8kWh1WogezLqbpytg63nf8VsEi5htBRTbgtFq3VXpqntahe4eo7ZLCyrBZAuY",
  "key26": "hpFfzCGHfv6yNvNyNDQpbdFR57R5TN6o8Gy2CzFt2rRVg1mJbrbCW1megpr2cQRDYEMu3Bt22qxHXqagTKKycfV",
  "key27": "FPpz67N8EP8G6wZVmqTeTGzERfT52RPTPKWyJ7nq3Gnk6hc7nX4dax23MZpdCGyb7d3Kbzxs4Q55it9j2SzHfaY",
  "key28": "2z3EboKVjq9Wu8mH2E47BJk4TQEk1ppdWgE25vjiF9EynbUqwMFgr6xCPniquvBuwP1z3qAEjc4qk1qqTonLpU4D",
  "key29": "4tNEUt5EPPYDvnvHmXmpB9pYwK9e6YembQCrFr8sLevNwxUaFWHiVQBcmNy99a6DiRbZ7o61e5H76XBbadzUqTXp",
  "key30": "3DY847BKsuza5HTtHm2xsp9cHCCwWkkrFKxHaUUKEmFEhMoA18ULHPQj62cG7ssmLM8zMmaGuSgkGd1HeEN1Bzcu",
  "key31": "3kcDRTYLZqPZnbpthbnHq6BYC3d4QoSHx7XeBFJCyu3ULyBfNESJJnvp1xBHpopNwAA6fZtYhAgGJkmSSmFpVZf1",
  "key32": "4DZ76q6csbbXasGpqttRHx9SjKNbSd4rDxK8KpnG2EW8ZXdmqzbtHGdXC7N1tB1UxqhCHNv2NMRH98W5gPAJbjqS",
  "key33": "4yWf1zuAa3e9DHMx9CwZ5zG9G5tu1aTGcd5APCuFgsyMgJCpSTg7sqNGPPCR7SqcvzrWK4GmXekiLkFy6TkbZJyR",
  "key34": "4KoRo1PVFs1PX8o2htDGetSazj3sWQxxwBcPXJsUatcR2VNHuyj36aTCVi18SaCaPKJ6hKotzQj15hPpYbqk6HXh",
  "key35": "418bjtvK4LhnxyioEFr9HZnEcenGh6H92sjNTySnpm5Y6ycuN5UMT129PCBmpJ9GfDCSjG3SgHX9eZQuJvLABWu2",
  "key36": "365L5RKWLS5VLyXYabH2yCoS3cV6vSXuFpvPS1Diu97NKSQMZUopgCD8tvmBThvwAkHYf9n6wM3LK7c182AvLFt3",
  "key37": "4KtSZWGXUWVtrs5kerH8KFfzKPPcPWJVpDrpjoDkg1KjuyqkfSanBSUGCqnukptHYD1tNs627LELvpxq9ciZBjTq"
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
