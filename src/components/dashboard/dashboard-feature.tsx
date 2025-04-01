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
    "4n45PJg4LpiyRMMhCKiLBPuqkZcGARbNviwwQZsXDDZUj5hbwtLGm8hpsvyYY6N6rQgU9p17GMUj8v5EKoT2d4aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRMCpZEUuo8EZVTMZ5oGZS4Bu57FHopF2sd82SZyxKSxj3FpE8VW3FXLBsYjLpMQsw4bJNvydnFQy3Q9mGLfyJ2",
  "key1": "3LY8eRgsfXZ55r8AtZ8Q2K49FGHibwpNP6pGDQrxeJnieCeiLBNTyA6VDLibhDHp98amioQxqjXfekDYikxMwYSa",
  "key2": "3yt9iY1U2bPpR3oe8fDkF6wQwbKCZb9kXZv8jLtFXERjNuRnEP3UpcD4NXNDvQZmsPXc6opKGBuTc7bk5oJzuv8M",
  "key3": "meX8f4Zib4jbdy2Zt2MNUVH2runXrXJsZTLvmpama3eKui6pJ8ifTkwT6fyXwFGNqz49pYfzGkGXVE7t4bE3Exj",
  "key4": "3u9ED4ezvq7qsF1sf5DhNwH1xAJHWNAna1jJNk1mUY3VBU8JwM9a4SKFVZjMjLHHExSvUqEMArTLSTWSsy7YRmQy",
  "key5": "3xutTuuhgYZMGJoGjjVBTZwJnhp68a3DhsSrCN8mP53iVVxeCx1h8N9gHuDpifcXTCYjLHJRPzM5JBGQiG6nGyBo",
  "key6": "534Zzx48PnX6CkvsUxmVpouq4TU3s14pa49HNE4cEnjHz58VeAQWa9GcQiG5T9mcqfZHDFXxJrHTobqLPBAyRdrq",
  "key7": "2LajHu53jPi6WxGz3bZn4SQ37EU9LS5XVzcNdU2uuo3m4ancYuEea1Xsi1mwFxGCTQxPgt63JayXcwkPqS2JGX7x",
  "key8": "5x56sf4JAMi98rpVpYPpTetoQRdNXy9qLEXpA6RqZTbTfstjzmUKLbp9264fMaMBm17Xrd4vLq3HMBDLeHN2MRKE",
  "key9": "3s7iKWq1vFqqhDmAjacfN8CqJsAeNXD6eDEBhvBeZEibuL34cBGqgoNGLxpm8ZEpkpkTHTYoyAumUMpuo67XoQx3",
  "key10": "r27oKabgnWfbGJBqzJ8g6KgbumKiot6z14CEiXTDz72rhsTSKvt6JqJ31jHzv5S8sLr3pWJthnPkntg9uua7tSw",
  "key11": "3VhSb4pbTVeaVUdR2rjsEbb47kpvr3Y6TBoKVANGKS2ijgYbaAcSQqku2sac4BUhuzuZozB64Zx5u4yM7bzXyVTv",
  "key12": "4D5ZJUh2T4JkZxKoDXqKCZ9bXcGkxoB8kebgzHXnwbtQetoXujnxrhpg4qt7S62ETEGzqhm35xAbQoC3zThX4Wo1",
  "key13": "4LBtDaNwKFYfUgNZhr4no5GNcmAYqL3y1vU1VDE7ffhg92mPxYUfYzp4Sog9FR4BQCaGkTitAKKTQuUxQ1FF1xBc",
  "key14": "3cRhGDNGGNjHMPtwtmTZZ6B3VAxuBPUCSPqtEjLc2aB2u5WkT8tVQLo6zNBYmLZsyS8yhCYs9Xwt4B9B5zv8hTTb",
  "key15": "23ytfMM1afzL2Hp3ohGjeyuqRhxij7FVJMzhfNBZyANa9t4M86tutobvt7RHBH2FNTYipjNxaAijCkFmzoaoWTvY",
  "key16": "325KCo8TD7jZUaD1VewSHtXD3gULRjUQdC2vkx3j7vH6TohtHGmjwvjy7v516ME3MzsQMA4J4Rz9m1hS2LhQABDh",
  "key17": "349bNDo9PXnnJTTvqrA8uCoFfvzssSQhfiDLrB4Up3JjcQ2rKR9naKgHrhacoTZd41KtG3K3F98xpok5EuzFsD4H",
  "key18": "2UUMbBL2DYJKwJkMxXP7PdMFyBEyE9jdz2tfEWeNC5bRYftXV4iRRngu9tmhiLNfNRmnRT4bpQft3eMjH9YeTKrV",
  "key19": "4VMSYQNkuN8JmAK6ob8oFi2zdXwmuLmYxpqfK6Le5tmShEroGkdnKhjtXZ1ucvDXyyGn5HWV3sTadMFV1VnGTMiK",
  "key20": "4LPRrnQo3veSLdjM1XA1bFhstTd5dvbSdy6MRfM87BibeN8pEvT7HU2zjcZcDadytZ4uzW9UJerCQDEmEdyz93T",
  "key21": "5FTfzmDFSutdrcowTEE1SQQcqt4s9acM6mkxBD4tFxxE6wVsampMEAT85gewQ7UJqXD67oFTN69Xurr3MyncdfvS",
  "key22": "2asZMuiPoLrzSRH8bTSKbgtUmRAgKVrjWRNKWRSiTGrdD5KN7UCNyhzKos4w5HpU9FdZetAG6qjzPZ8v2gf8BW7X",
  "key23": "61CYxoxsz4D8jr1Wzb9x6Fb3n2MuTABJxjCkSUhn8ASWVx8LkCxkA9Go52aoYgpiHjQ2aiNufUkHXH9b9wWeWseJ",
  "key24": "36N1ts2P6AEWWcyfxw4LcEijeSsPkGZBzPPKxqC9chz2smL1rjiBJUZdj1Tmt5yK1YVVppjgUkAiq4tjAAdVEoxZ",
  "key25": "3Whcn4xFuevFw694r44E3sMvKCaTKbLkuUDjy82NoqdkgeXMeU9kyEgpfqeUbHUoWN7EyTpA6XPAZyGHqNRU4HjK",
  "key26": "Yw3Svpraa6UTiUn4HQhbdtFQ6L8Na133A75goQRf8ph7CtbTVApMuU4M3TNCM5fTeGJn58oD7hhkQUAMygJHNwM",
  "key27": "49kytcNDiJv9P2hG6LeMrVorrnFnJ7Bd3hDyEc4eVgApZhcKc1RXkxPdWUX6oMkigvEBWuu6VBUzTUShTPAwf7BZ",
  "key28": "4TSPH57FNzF3Hom7Dft2DtQSwhWFXVQZxjQpWQ2wxAaefwLU8UMhxivjZZzQX14DjsENZXeAkx35Fyi3gp6XHr56",
  "key29": "5AzZ1UtrQAC45paXhhe2Xz3aNpYduLjCQMq1DbpzifuxAkip3kg3Uz4u7KDUX72oDqC6yntuCeh5GMn8csAcCmWM",
  "key30": "SBGUekD9pz1RCpqXaDyKq9NmU8hwddpNruRpWUBrDSCRKt93EFXndB9tkrrXjvv5w8j1emmi4EyUCT3bZn7Tda3",
  "key31": "JRag88w9La6GyCUAHJYU5tHX1qc3SRCi89xtd2jRH7QLmwXxui5tZwvuja4SLxRufS6GtT8bVasYvqSxoUyTHYh",
  "key32": "4Ei9Y6atwGbY62PHoP8T8AwirdKt2cyHYXjDWmgdrmnGQt5N9v4ioXhKxq88U5Wx1j3FuiNSGY2a5DxzcWbezCzz",
  "key33": "24bTdQXEXa6vuUGMBMssBKYESNmJche1Y4Jp8xRBr8fTfXszTTvimJxHQF1tp4pCuNVBvZpfbnpQTKTdo5d6JA5n",
  "key34": "XtiV5eMyo5bBuhTQckGAdSVzqNjSF1SK7cuXL4u1pR9rMzfpc2hPbbbKt3oFkULuiSMudtjPV3r49RPUE9bkSFz",
  "key35": "3bAUUHVGWp92EkGoU2LyQJioaaNo5sMy3ryDYZRNCjXpdXk5EQMXFAFWG4oqzFhhuqjFaAEL6higmEfyPV14fJVQ",
  "key36": "Niqp3WBvYxJLJQ5YwkSyNwvvrj35yMQRntciao11C5koPFiwAJbzSbUuztzBtdpd55gx1cw8iCTKJPDCZEEVdh5",
  "key37": "2dGuqk4K7cFNHYooVvbG5tA6CoNyhMFoYFsxkepiH1ENN7eP6UnMxuiXBrrzLts54bgiNMo57maeMHtFBsTRebix"
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
