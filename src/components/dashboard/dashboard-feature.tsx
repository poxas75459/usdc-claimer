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
    "2b7py5LcAirzJHomqiXDaPoqcRg29SJy7PYNVzmXs8tmqw1Ar6e26zaeF4UkCL9UFf4Atk8dEKNfg58t8VfH9k7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6437r9fMFN3ANrwxemcDuN2BzPvmU5QPagJ4xLqrUFLcvxnDX4kmEHL5xeAXmQQDHXY9pA64hGqiVGgbZzcGjc",
  "key1": "3etos5FyarBJsbxXK18KpWMX1rqa8FeHigcvV9P7bzTXkLbLZroW1mj6PVwaRzhdgq8ATKggpw87o4y2eXffmeYY",
  "key2": "xBhHYUknpgeLUjAL4zTf2yTPbaDE949rB2TcKywo2RgbLDDZLXyBFd3viTGyvqEUuBvjG87vsAvV19a6gNuFA3R",
  "key3": "2jggk7CsHYqqtu6JbzxkGkg5gr3SHeVBKuU2UyzY4RtSoAhFn6KMcreSF411NXNVUaxAQte8pduVurjbNcRQEduB",
  "key4": "2p1Q84eB5njdF5wcLedRTRrpvh1LFvjjuSErgUotDPBBdbah8RmXxtzQ1aXsVG7AAPBwk8NvvX9UZBrgsefpzSM7",
  "key5": "3hLY9ernFfshF7Fx8jgdaZUoX6TZ6T51dKRGsF4nqrvMPaphAXMxDYyUHiFX7nmvP7aN67TH6pL6jB9XHAcLZp9t",
  "key6": "2P1jvDFCtWohMKRCE81gJ8PkFajHkaS1yuwidyi14poT1UWDtAHh8MaikJyHnVXeF7hW1jnxWYGgYNfzG6bV5gWW",
  "key7": "tVhcH8EzHEkb1WX3XQZtfGreSH2nhUCeCpiuJSkiALn8pPawaSiWe9QshSrSLJvNBeWBAY936dkoabfthk1ZSHc",
  "key8": "4tD1uUaXMXuGHxdeMoT7B2KFNMcRMuaZ2SQsXTWqWgY9JSEY1pz779ZpHefLa4vDqadRvHoW56YQmibgAbM3CcPE",
  "key9": "fcL5jBpCtNDcctVZYFaPc4DJisJZteUEuJZd4XqkjVQJnAU2Bq7EASBeX7i9eBtn9y5jkKErKarTBfR9wUrw3JL",
  "key10": "4DnxzaZ6RTEEKzyPgEV2wUh53VnT2TGBgy1Ju6SUfWcb6xeGiM9vdR2k3kGd3mN5vKFvrNxifAePHq95AYEUz8UE",
  "key11": "MLASqVJQG6w7hsHUc8pKG9A939a1UKwDApqki3h6i8Cdb7ZoDq4ZY4oWQB811FCiCSBCyxcHbatvG8oJdhbGMeN",
  "key12": "5MhQwdzKpicKUif9ZZJrxPHQrdZaZfxJxMENSxD4uL6LG8jDKawUgQndvGvUeVBrPo7Fo9YWd4Xt8XpWDeKwhiZz",
  "key13": "2EAd54AKb5TDiUjUeGeZDXpXQZ6aziN7WgTBzmQb3Z2dLbzMVPWfP2d2uC8qoYSYYv7j2SKTdEyywKA7L8BwBb4f",
  "key14": "5kWYiZDu8UAVWBWNcXKU3BQW1YsAjVa9WWbJXhy5QVnCxmZgTB3zXySaiNBf78SevjeEdozpbPcNHPZt1NRfGPhZ",
  "key15": "7X1K5VAvWFacMARKiHd9vRHmKVSEDaCbLymnujEmKPTqeNG1W4Q9pUtmz6fPQS2EqyU5gyh6bEthqvppY7Ax4wB",
  "key16": "263RouGBk5h12axUsooxtPvSZorFcutJi6LHU5Ht2M1ypMnT4cudiiF3A5Sez4zYvz7Kvv4zRVQFqTSDJ2tCJpGK",
  "key17": "677kXiYnJ765HXxvMTYTxaMZ57raqgVYf5poWKybL857CNQKMKEVRvNm51Abpb15hEKdcJUJRDp6CsVJ2njBQjYX",
  "key18": "62AemZbLxwjimQfcS5wYx4CgumFxiyNL9SH2rfubecrYxq1xDUBf4ACN3kRQpGp99ECMxYxMjsvS6MoJ6oAXbHy8",
  "key19": "qJJSoxMtaA5rWtrw7ctcwap5MsZNyEBHyKvPPhEX7p158kEZHMA4d6FJnXV5nBSS1TdJS74x892VKLRw1iqMJ1B",
  "key20": "3kegSpohS1NJDMKW6VrrFdCKxwCPTUT86GKWe1uXn6whpVyk9q7RHHJ2Wzb9eQcfx1AVuYRv9oEBKb7NkrqAyq3U",
  "key21": "42aAarCQDEBsAa4nu1pCL5mdrTfPnH9aZ95dauUQ93koxLoW1nrwfzvPvr4jkGHRTHGSosKsXLMFoSfst11B6zT3",
  "key22": "M6fKTSuugR2h8DJt94wTed7sQfJ6ZxnkisfCrTeYVDLLBhtzbQttabD6P6dCWybHALNtsygE9ro6u3u58VRLTSC",
  "key23": "3upZa9GiPMBbQkt97oiexWUWyRKwNnXKF3AwnjViv3uM4M39NSwE1DMxfCwkNyH7BgdSZSzBiSrj2PKP4gaixtGS",
  "key24": "2YAXRXuyGdwsaieV1boKD4hGBabaFiHMKEN5F4VPd4sKihmj1CHATBC1aLz5JNTLqzp9EPwBWhHZNTkBiXEoUyQM",
  "key25": "4Ep5uK3shpYwGj7PLvpWvwpWCCDe9VEzwt1bZ1uefu33bt8VPbUkxgSW1mhgK2ocK4YTpCserZRYBMkTDVsWaUrC",
  "key26": "5jHuQpsD29XqgrzEAom9DRTTph5YhFoy5zpaxhs5L8kcPaKYvULLyfZYbarFtBzvk55JhnB5vsZgkhRovXoP8ana",
  "key27": "6snotokf8JCkwLpmSNZ9cRBKN7SfswnVU2MxtKfsAeH2Mp9w7ie3yPeQ3Tsf4N3BCimAw6jkFmjVj5Dmfcu4eXN",
  "key28": "wVufhdtB5YGEoMZVNZspB7ZVvNsNFhwDxsPvXyUFuUkHmY7kdfmpGHThrkRb7EdiidiphnFFJJVmgdHmsS2nR8Q",
  "key29": "aWk2xa9AR7fF8CcowfFxyv3Yv6kyaDKyLDhJdvpLQDec8XSks6C26k1AAp7zxGgKYibnPdQBH3nFD5SvwEB6eis",
  "key30": "4P3Xnk6GteTTaqb9eps9kuxBAMfvqYm2ojkLL2Uy2UX1V8xRv73Tw1r5LYNCKepG6Y6D5MTgJ8AWWjoCmh7x47Ho",
  "key31": "3PJe5wSop4wJMCsTDHjAa1EZdR2qEK6xz5w4wk9G29tzWANbp25G5sJ28L4qc7HxQN1zYMHoxYRigrm2ovtSv2oh",
  "key32": "HUC5d6vRbfgHRKDAQGMtyYWKKk6SKqitM4RicLGwZUebN4o8mmawxRWCPcSHGQ8otzRtcmupMDSBK5jWHv7kbmw",
  "key33": "Vn5anDvhyebyPL3V4tu1YW1T6KA73YJnpV1LrxUWFrRsgc9UfhDB5HsxK4i6acUQDvL9LuLBKyeKDAVCCt6z77K",
  "key34": "5YEqqxorAxPdcBy4BhZecsi1ws54Ft8PBQ5cNeatQuoXSHGH5g9yhsb62cMM4JR99iL4AudQWf9LeGJzdbburrZ4",
  "key35": "3DVtXqiraMQsuSByf2YZssUZChseNPhkMfKowu66YXWVSLdYbyYq6iCjkLVfYmQi1kkMTP1UwBbAne5kQASYNqJL"
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
