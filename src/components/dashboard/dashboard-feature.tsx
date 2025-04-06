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
    "2BSUeJrbbBzKmZUbTQZCnaneEdqE11pgW66NsjvfnsWuMwxozsHuzD38FHzrVPRKGKp8YTTiPMAPsJh4Jpd33NLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMVDjYvLGLiEoMGsXaVPs6BSJy325pfXCEWdxqogjSshC421rM2aCoapynt9qYU9Liv4w5JaZD3PWDwDQDUFERy",
  "key1": "5Dq26Agtbnm3hDRte54h9iSPXFiAjERz3itXLcxXp5gne7c4mK3wLcLogVRaLum3G2kJgJosjXHuZMY5aLZF8nxz",
  "key2": "3aPTMPKUvF8LQViioGRrkHa3qxW8YmvMAwkDmvywdozeMeECBybpVu8faPb5NKQeAfvpJd9yYVHqAo59opyZ3M3U",
  "key3": "2mTM2Dy23KKjLXrwPQM9GdEEHae2yQM1jr28kFw2RW7Q3rSyrRMA6rT1xNN9VocC23x3DfVDia46RP1Td2XYMyu3",
  "key4": "2Jg8ywEVLtqoZwwXvrvPXNoAUQ84iFqpyQSbadVmKJHFfpn16h963jmYsk42rDtxXDDH5YA71koq3U7ZQmXQ4vao",
  "key5": "3d3XjHB3WkFmoqj7CR53JwBFT9ABgjUUku1Qg3YQQ4wvs8bHDPPa33ycPpRnfxySVfQHxR4drQzocrwaDJo9NJpj",
  "key6": "45TGvUWavcZgotTLMoQiTTG9y8wTpV6qpoSE72gnHARXrtnXZYhDQN4n44H4FjH4UPAaSSqFvm5SZ4xaDYRQv7GY",
  "key7": "4BdziMJQcaJguKH3W1sqtaAXHKE6R6CyzAn3Sx9JcZ5k1hECZBH3n1VKQzjMdJsor6ihgiHmTyGWLp1zHgd43Mrt",
  "key8": "5H1NAVePU7y5K2d5XruJf2hYEaEuetpBR39FHsfaNXiGuZ5DkrjNgmoJwb8jBWcvVFyXTyvc1ZcKs8DFypNJtAhD",
  "key9": "3nS8iRq1dEKvH8UKmPkZitkK3t5zz1sT4EmikiN4JaPFPyhDDFpbQGNHe4gu2FPRpvLqE6CWoWpbG6tQjtXEjHWP",
  "key10": "5epMuXzdcJjr1yRwG4hxBuMex9hg1FyxNr3wENGMH8tzVEP6YFDkFX6V5MkXkKNntVM5nhGrzKi4QS3rPFg4tmie",
  "key11": "2dWbeN9votk7uyqftxANmKmjYzjXqpnaypWd4MzAGczov7g6HPQ1mjN3jaFKc3WJgVGNkDZ86Ly617e7Bhr7LUDW",
  "key12": "5Cgmtng11eX4z2mvCBM8dCMrFqaDGZb9su9pGmoawftBXuX9g4mAy9QJAtc7HZus5RW87BNYNLRNM1T2oYRp3YV",
  "key13": "3SPGVc3c5LRLXo8wYJunb9yaBAJotU8dgCXyjvtoaXtcbWkHxz8nfKwLEUaWL4oXguuTuWq1ekxaqyf1FERPr2n8",
  "key14": "2y2be3vQuQ7oNrWYZbpE6KbVMNmX6xpuaXpbxtTR6MsjEpg5NaACgvshENboCojDLUX4BBcjgHsavAurr6S9WyPq",
  "key15": "4ek2LTHooEvoyeSmmMrKkViadEqugDugTirYtrVwcsZ3aaN5SWSsjpGcFQAYxHUSKT51ppaLDj6UDpg6qpouAesE",
  "key16": "2yxdbQz348QFADdfAN5oLNGu98Pp2aA89nVgCcCfinJLtDJRWMPt776ntt6xuXKjefTVXLnPJmM7gxXLhHkDpecV",
  "key17": "4vRk9XrGhXwNDUYToUdVcuVxViNud8Vqgv42oLQP4d2kyvtdaoujnBgzT3AKnHZZ5szz3aVQ7r5fJ4epHrUice82",
  "key18": "bLEpM3h5SVtUu8XXwkVCEuPJ6a34vgLaks1veVBNbPpFELptkeE1vbAnhTTQwgeQjrr7WMWmjCFzVAZH9kD5jV1",
  "key19": "2FhkYpcTfuNK3BtEw1wtJ7h167R4Khetd9r71AukMP3UdraLKG1Yz3FBLXo6nRC57eZfKx1QJ2QxBfUa4rdWNBGQ",
  "key20": "3cbRKoUfbd8kaRjuSwG1ZWYAwGJwGom9yXbrmg4iCLw2EixBTeMp6m6gHJAbHfmvPJY2qE4mv3yG5JzQuHwhfyDT",
  "key21": "oYrdhSkiywkfiu8a69aAUFr3akmufYv2aF2SDVvD8b8FGmtBj51Rchr4r7GzUQeXkv1ZB5onh4p93rc7XxS7hy3",
  "key22": "5YUWtbjiuCKBCvJ8mhRCMJdB3BPE2iKXdoH13FiPLf81S6qxgwh9rNgxh6g6ohjMhpPyQvwiGhKfRRNtWdPuBt3r",
  "key23": "4Vt1dWCQhtV7hHtQ3ZkeGEwBUhrLUBTn23BQ8u9vuzq16RSR9DvXUbVNrUeAPTy9X1TFnYkBHSuFpet5QnyfsLmu",
  "key24": "5VBLbGwe8PV6y9CUBkM2DTU1V2APqC2MbTuqax5kfC6pW9Fo3NwfWg4FhBzGcJH4PsgZh37GqGV2VAezJQUN12uu",
  "key25": "4J9fDFt4279m5XJLFtVBFYQ2KE1YdFQzrLwp4PmKR3d2UuW8ygX2nRAAo96cpqqv6C4ppzJr7rYUnaDfXa93VFS6",
  "key26": "4wJtBLHt4wo2FHg78PWMXTSw4GhkRyCdSrUMGYbJBToDzho3WxGtTXZnWyQHVME7mMEyt1ukAV27WHAHPoRnSFPw",
  "key27": "VQRSc7cFDFLXWDW4RfZWR4RU3siWXQSqNtM9wxbegW3ReUQAzoaT3yBGp9xJsyAQgKYUmTvWVo2xRZnimXMwrK9",
  "key28": "3mvafZA47QoTxv8dDxXbbujmwonsHRTJo8yJotKvtXrrqB8AnWKA4xfBXzwk2h2gqD8n8wNL6LXQ3W7wBSKLPp2W",
  "key29": "2VLjZxjvaY7KDnL9UsNyvZkdaNWAdjuRdvbnfRFhcCwQRKmfVbVspgjnXhrhineh1hizEj4SFXB6Guyp86jjhWpM",
  "key30": "4thXwy9sc9YpY3ZDhXpHCwMNBRpvJ9CCTBHx2xgaASTXgUfGBN67UdNUm6xgxuXq8QcRDnmRDUYXZRWLLjPUqcwr",
  "key31": "3nDCV3Hq4uzDnSU5Bwqqp56H98n5cHQgvPt4ZWxCgd1cjppUDUG1BcQa2dRGkX86KNFjSVgxQENaw2yWTvPb1FwZ",
  "key32": "3N69UR9f6sm3KZXVKXWmYbn317NJD17aS8xmgCF4YKLkDUqtrQj1G1DL2ZPvtyWUEdXRW8QLozbag948ZxMNDeTU",
  "key33": "5TUCP5tcJrokdnKTc3WUqVwhNKtvDCUVM7zr1YcvxBZWsTBwMwF8sZgGWYCuHWGTZ8wsMqcnU3XB9GVERaY27sMh",
  "key34": "5r5RSKVmLu89Y8SvYSLoCfta7MJGgSg23ccqjhauYRShPuBx7vxtRrvGomnSiV5s7RU9qMDST1DA2tcGco4bTD9a",
  "key35": "5icgLQo5qGopRnJzabEoT5FZwPmZhCBsxrYeUoCeKJPtuV5FFFsTgLAdjkZ5Wm3HSx63a6JakL2KAG5jAngyo9Wd",
  "key36": "2CSYcciYB76qKaEi63pWnKDQZJ2FaotgR57bC8XQCiGhiAsBezbhUeEECHKtnuCTnckvb2G9wfUhgPoyuArgmoWd",
  "key37": "4x7GwPBrECaqGDzRmrx4ZmvBocpHywg1vYagMgyH2NWWKV3k2xuyx16Ubt5J8y4jvRCGMcdKmabUVfoc6k5EeVZq",
  "key38": "ZWq1KpcgzoCNLipEEoHCSpZUm3zsmsVTcGmncWCV7LS4xLrrbMczTDqvnqrDb8CxUcmUb1oJre9BhnSYF3ccQwU",
  "key39": "5HRbfgiwgdMzRV3HDcwXoftUF3CTkDfuhf9ECXnBvbpjdV3DseRNEARuy1qHopo3HJKM1iWSUCLTuc9HBbJERyFc",
  "key40": "3pgztFKQkyyPG7uuZ1ZUJttGSZYgyq2qwx73DSerkva7zJj63q3a5zfHpA4gtJ5ZA9kuN9WA6UTbVVB1CdvskTdr",
  "key41": "2kpBJVAaBTaEkYGihkPhcChFP4ewnvcPSwDLi8KT9i244WHRxQgepVzhhTZg9aCRwWrYihPWLZD5XcfhGJPAHJg2",
  "key42": "2bTdiU1xXcJW9dmMYdCxJw77qN1hjqYqKGkDxHpSaVjEbn9SyKX9gP2N83Jjkwfqht7RyEug3zKHvUrS7x6o9mHU",
  "key43": "4M6juw2ZAp9A8nBtx13c7Ert4XArZ79QnxfUbkJVEwyWSTinSYiZMbKPzUgP3yeKAVS8W7qmG6pQVcsY5tSY2QC6",
  "key44": "53TGc7NueVGebwQCBBrs5yS14dvrnBihv83kjw9bAUToriLAfeAGAJQEF9rLAQwJDwqVzUvSz4jpinLB1TAh3EPw",
  "key45": "B37uR7iHETnswaFy2TwNcuabZFHcycHN49SJuxbfKGXZgG9pwNtdaBSsWjg2TvXGT4N7GeDoTUTarenqv4FkcJH"
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
