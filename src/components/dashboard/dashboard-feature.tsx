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
    "2NGYuek13wzp8kKx6NmchZEQuh9XabPXoAUUNJYWBCSsaMJyd3HNw3H6chnEx8ixPCDuEePB655oqF6HJGKdjXL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NK3zNv9buJBTdHLaMDCwdUSckn8AaZHNkwV3DZs9GF2Y5UHTzcRgZtqmh788w58oKgoLLtZBoos716JYvDutk6B",
  "key1": "4TH2wXFJQCMQK4wNvaxBZyQFM7QfbKyskKi19s6TK248UPDHSFdoWvkcPEwvZ7m9eoiUjvNgmu5sXi1DZSeBa5ez",
  "key2": "4wj5W8tBiamVZHtSa1DJycEgQr2SuJxDZRMB9uEeZz1NdnMuKZ3qVLUeSYRKmecnHfcFFoLYU3a87r2vDaSfUTLg",
  "key3": "34QvCjXmihNKoWgGWrAgBVfefAaxokFkyfg2UvBcfj4avCgpJFezcycL4rYh7VkEveFn8ZKyVbseDX7QERcQy3km",
  "key4": "3H4fbMFDDRuqHN6FmtmpsbiQkieeLJXmABKg8eqWdptk8KU4kp3kx4JzT42F2fpMLTBNirVEVFvnytRs95hdQgHu",
  "key5": "2q3YeppjiaoShSmKFXK4TLs9JTxBdsH7EF2F1S2d9Y9d5Bek1h4SxLPVkr7dz6QAMCAeCwGotMTzuCCCGPDZ8krP",
  "key6": "4pMxEXzrADi6dmbChJNxeRqr266JNQq3RYW43rfF1qnnQMgseLudasZjvTsfc3AaqL7yyvjt7VDPfnQeyyXLuA6L",
  "key7": "3g4WA644hxfYBP2ssCGAnq74EHVgcwTXKdcgWXkMCvg33U5HJA7PXQpg7J5WAXSxEr1mQLSCqnqDvbeN56HDJU9V",
  "key8": "5UPN2aXihMeftxY2Z9ctDThSSBpeCbUE8DQ3deUKepEtA6uD4sDicnERLUcA4qCdb1koJ92cCa2JJWNPpjCeucu5",
  "key9": "4w33pvBexaxAGfpjH5DV7qoe6dzQ349dDPTLceYuVCAgZi63MyobgeiPCRCNW5kk1A5zWuQbzF4VjhPze2HsdAtR",
  "key10": "4EY6E1hsfFLSFCJBSUQqW4hxN3j6nuVgUpgh2ubwTCxH5gcz4VwkZN18gYUGvN6GnEx1mN1Ebd55biC8KxSU9P3h",
  "key11": "3gqmyXKEzdELQ7Ft4mtYNkus7HMpFnHaSjdr6n1NKDDMQxFseHq1dZSJmo4Wr5ZTmvtsiA44maytAKZixSNnshLS",
  "key12": "61EGRWiTG1dmrgmjAbfeKMbPThc8KVmGJqFJHtdh9B4EXHfE2ckDWRYWpkBbmyKDKtZhp6ZpqnU7RywRdNVGoSca",
  "key13": "2NJQnS8N51L5VdLpr7NLzmeqQHzsjkmVaKyu5UxZCENFLSpY91PHc7R7HcwRmoCdAcEhdLGrVyiZHqvAofiP5uHw",
  "key14": "sa5rPFWqG7dzeP2BAdj3SDxDQbTzJhkmPba48A6qjGy3kF5RgUurksBxm2mBt1KR9TnqQSHcibStEFEYB7T9VZ3",
  "key15": "5Aasp9Jy75m39crvSbFoBX5UXBHCSJ5FXBXudbgrdQyooTbPvkDyKNi2FKiwfECrupjdegtwwwpHbG42XwNoUMN1",
  "key16": "TJRmKkNgyX8Ax9gb2wPJomebtGL5gPFKktiramS9GCT9pjThgPtCjFtJ7FdoVwMTTFmAqrCKn3PjbCsPv52YwnZ",
  "key17": "5syUNECuhq64VCiaXPUimLxMX5J8tSW7FZqvnCHBimqbM6n2RpgoK16KEdvKa9pE3F3U754aRXabPz9mz8QFGeQv",
  "key18": "cy6mnfAkDMTQZGY6gSYUu1nTh7xVKUPvm1GTBkPQ2wZmTiuKQXyfxDTxNzekjSVHhDM1upwWuHFCjnF3qWjzoZK",
  "key19": "589up54aoaUWbXLGU7gaxmR2ZVKFwzHwsQx1xKwS5mEpqQRXPvewcyX6e9TFgNo5juxFv5hqrNVzZ6ay5KeVy5kg",
  "key20": "4RmEhsPJ1MX91Ly5i69SW5mMk9qDH7TEsdCHdSqyeBfATNg2CCaYRZkMB9jNQGz47enQ8uorp8sqsafHdc1BpWWD",
  "key21": "47wPsZBBZGKmvxkoov4wFoyTjZrGwo4PxZWT5piNH4sCm71bAVUwUXjbGsUDAehoacfmm5hqQLS4utouFmdVijkr",
  "key22": "3DAT5xZGRaLeBird9hpy4KBC1ViVLbSaLoEFPR8KzhLtrh66Ze5dF6kobhkXKetXdHCgcGgGmuLj3c3YXiCYzhwJ",
  "key23": "PuZFHKgnWe34AMYJZbdMKD4Zg1gLeWzTdmJaZKPaxBc6aP2oBGmBtDHERwz4zp3ysFsCr2XFfrgwZN7zLbsicYA",
  "key24": "2VZSh9Pj5AfWExokBKNGZRZpAXeELUR2b4gg9rZvQqaGbAaaz8nQrQfwGrn31vms1ZrVkNcFCqrLiREviFX8Hnk2",
  "key25": "4djvYyDfgDyX6k9Ed9cf9uYWBNqJDTHA726c9M98FFGe2tL62xV2wdEmYBpuDANdVqqMQLyWAyExy22AdRi6dH2m",
  "key26": "26eKbwv7AkZ7WYoZ3UbLJcc9TXCTr6ait3EM12ertUU6xBNH2m1pnTzTnLRuYwHLPnvHycJmWMEgJyk3bU7KscyX",
  "key27": "2EQ9kp8ozay2Uk5v2fDHnHq7maBN17s8YCsUJuewRjt9Q4ebFTwXZJm9zJFM7QBR51Ji2STsd5ZUhM8vbgqfhhwW",
  "key28": "4vvv7rVHjn2HjSA1zzv9s4PmCbo9T2mQrJhHxzbCEJohQ69ZXjAnWbwaC14fzQ1gwxwkVLzDw2fjtPTzMcFRwvE9",
  "key29": "5U6M9t88soQvVAySH7T6Kb8a64cch4oqA6FDAdQyRNqpiudybQQDSCTtgKtpSHvM6xv26dFnLJjLhPCYoJEnPFW8",
  "key30": "4aidEWwntsixsB451YZWeHaggdiAzG2RV4rDBqK6AGrmfaMxZjGadg9kHmjPwPM5LAJKMfWyCNF1Uf6GvVopNhAd",
  "key31": "4R1EZu52dsKdCC4wzUneWG8ivLx824w8j2SBKXEEWPyEehnLaFuv8dtJrj5YgACi4iy5UX9Lpv5bw7Xb6yt1e2ZN",
  "key32": "3udx42xM5Hh7tB8UgQnN65yfMpWknbWQiP6Q3qQY9jbrHRnJQbXye7wV58DGidcX4yaBxJqB7ZxU4oRbCaCWkbR9",
  "key33": "3LyQiEEAoq4T2iZzSWLwYJ1vDVGJDbwhhPY6i9vChAmKrP2mvhZmBboeX1Kb4Hkb1GJDm9Y1NEevDhua48aPP3ye",
  "key34": "37RJCdhvQPYk6wGbs5MhXMhZS2AD6hKEqWm8XmBVjbgSfNpRa5ERRfNn9CJL33weR4udYfbC2z9DfpyFB2i29cRP",
  "key35": "31KUNTNX2VPpu93bd8wrfJmJooA7fqr8oeVE6iXBLv9NPgzdokaL17uschSQ96LD6v5vdpU8MrgKtpJA9Mtx7Upu",
  "key36": "4PN5atyyw1REamdgTGLndnNmGGEvNo9JpeNZAggKR2kMUVjbeUvFMVkPtse7YLDmLQovE5RPR2fLpFrkpDmq75cH",
  "key37": "4iNHNVrqxEL12bxiF1T9XfvYsfeYwJGJupz4b6uDXPBx5mDVnn84FcWxMHYwAWiedPVa4uW46smsv45WQHhPQwt",
  "key38": "2R1rE7FdMGdSf7BRuhG6v6utegtQ4dVTmAYyXJ7tXn4SyoHSezved7T7yBQbP95oLkPXmqXHnypjyJQhaKKJcvLp",
  "key39": "gW4xwRqJAgwa4QAdftWhGAHZ1gW9c7ayQis9uJjtZRvninPiqVCC66PkpXDR8gUHANuqXUyUFmYbLoqVaERxVfj",
  "key40": "4isFNc4ergHg6drjPv4cQzHRCSt8fy8ZSnjW5ESZ76rHcnGgNJi494oGaaDnMmyZTTo9eKsUp9rtm7Yu78SmRxeB",
  "key41": "Dvmc2Ziccsrv5fgWBeTrLPh5vAjS1LTqCJsBwjch6qCtcUse2k13WJUqZs9Ssv3BXGpNYQSBQSc8Ba1QZAEayAH",
  "key42": "EQX8Qhs6nFF6ZREYVdAe2dVY6dZqh9c9kv7bLpKGUYnsUU6VLRqXEq2wKhYFVT8aHTeND7JboJG42DbjG1iX1vt",
  "key43": "5gK2kePDw9sjydfFDwpJZ6QeuG9NAe7pygeoph9WK9q3QpfRn7J39H2JstsZ14d431DL2frZMJe99f5keQPCSERp",
  "key44": "D3o3sbjb5HwyhYhKdVKDaiCs2cLeqctf8sJBqArbVFmvQbvCZrsckaEyC135F4fRMyMRXuUctBetZdMVaTYzDUX",
  "key45": "2wvy7XscHaVxYhQJm5oZSb632bGy7MZrjbtH9JS5zjMzbE5GnbYjovDYujCERGar4c9hPP62wcjmf3aCPK4zc3Pc"
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
