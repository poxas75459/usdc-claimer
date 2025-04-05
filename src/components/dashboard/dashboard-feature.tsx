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
    "4fWB87UnfYyonpyR9Ejs2RdpomnLpoRzEMFvmhFntJTKVhPNMfttRTvcYjUP6vyWhYsTu5dF5tM3q8KVQbZN8J2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvwuUEn3mZgiubadDgvH5YndUtp3iFYGh7c6YnVVscsYojTEqpj6R1ZxVrpHH79e9Nc98JiAxg2bxs8RPJwQ6U5",
  "key1": "NCkkkKF8uVrnd2ZBgDQAtaADWhGqchLLpPrNxBCUgLjz4ASGfrjV4tp4ASbD7sJa216ts5oLgmE67aaAjWLYVbx",
  "key2": "5s8igUpHLUZDp4sZv6exyx7JL1ooW5yJ3GKGXgXbM99S4tb98YiVrZzNi8ds9EsjowqyJEjcCywYd68GcrTrUox1",
  "key3": "21BKsu9hvS5mK18L8Un31bTiR1jxPqw4yvUHNxBfnSW6hFmhP6CUHNSV1ZrxVe6KbXdyxVvwgeiXmRh2Aa3V4gbi",
  "key4": "5Q5UfsBrzSqNpMzF53hVNA1JcQP2AQxoGAQYgNFwtSrCDBG7W2o2pi1fMQJ6JWrw8PQAnmRyMCGMoWTxp62sYviV",
  "key5": "Jr6e9kSmLiMpsXi3UsxkzMNMxMgjGMMPniZ2SMuiK47TPALWcCpg5g9V5anfE62GTfTCxiNfN3YxbZa5AJfR3Wc",
  "key6": "2teo3DEAeQoHoNyo8uc19Ndm9yZMTmRp3A5kaZ4VCy5JWpjX8gBAS5zfw7QhsKLQ675TW9nmuBMcQtvSQjXrCGAu",
  "key7": "pmg17YB3VWZe2zZNq7UC2Rh7D2LuLBbvZPR2qDNLPiHf1sXzfS5qPpZzqjuUyPCrH4sk9f23wmPbmRj7945hjLD",
  "key8": "2LmAXJSkUhCYoEJpVYsvv2NuyzQaePmKXK5p9Wx5atRauvg5UZmLEKjQuy7vkz2i5RdhcPUgMwCwzZrQ7m6YJ1Nj",
  "key9": "BfeEc7bp1yoUR7MpWT2hjhGNCJE2qzWoeWSXXn6mZJUzsCcC9KcLvAYr3wMe1yk4fUVZXWJFM32RjhqLaHFSrLy",
  "key10": "34LF3aFa7NtYZRnNsjeZdUsFz2VFJQLWCCJ9D1BNSJoyinVxox22tUjDcUVcCxWi43QXvqF7k22u1wNAA2rfDaL3",
  "key11": "5aab2Lx4UacFQ7wUZ8cRQghV7eodjZbJSpbGEGdFo7cg3Z1ruckMiaXxX5BwS65Qkx8zX2gKxmmb9gXWGUsupFtR",
  "key12": "25ozKCawHTTigVFjXEFWzni3mG72VPVEKFgctcVRgyA37HRRzG3MnpzAPT8fEfiaTGGPj4NFDDWmtXmBsix2wgJb",
  "key13": "4983ZUA8yAaLZnnujPFWov6phC4DZCUvctouwFpFvAMx8hBgbc5AoZK6FP4frLLwDk5pA5jwMkX7Xz9BSo8Ds4kz",
  "key14": "4Wpq7BSREeWZmrSDTFyd2tuzmpgHWNQyxdd3y9ohhQxeLRoYeppjXeERJ2LRnThGQng4rztJ1kPoo2xPEWt8bGgF",
  "key15": "31ihjxdSvwWmGsjm4h2HszsBiEnB8CN4p5JcgyhKwuqYpgZeqm9kLruHLF4AvVfLxLZ7GT4sgFX1k8MXWyhneFrj",
  "key16": "5WbAjFNhZVDFR2ysL7TTW6BieXP2CcJv4DKRHAubSVgB12ma3E3Hb4tFTYjMEZedDRo6JWyvBoaTzkyzwXTieoZy",
  "key17": "4uhuPkxtYwDUJJeDekza8txorkS3s3dF2uGcfZt9cUP7HR71mHovHJznxHuSwYkihjCKY6EquUYmeWTf34Go65St",
  "key18": "3eSdydsqMFrrNZeMRvPq7AhDZ24XBTdKXVEBcZ2fv27F9yMZBC66V3aTYQRa1AVHF92YsVPpriFGbbRFa6umZN4W",
  "key19": "hCFLfmJHVV1YvhWFnvPzLVdkg1g8Yn7kExZrZRP1xeGKSuczj9H5TVkxpVpgy9AEGVtnTmX9rVcBUnFvF7svk77",
  "key20": "4Gz8yhwQVeTd8tbwD63dEMAGXBa5K8DeCpW5VAZgmfja9hPRpZEj6nnLPa685RXKkd73D2quYev3ka75fPgxo9Sq",
  "key21": "5Cv7ArsPhP6bvsBaj48zQAr4MrvNwKUESjVgY3LwrxY2FZvygigqKhgsnMeBQniX8hzaDpcyUsa2yZWPZ78B2R8H",
  "key22": "9mVYFcR46MirVRbPnM2N4xjCMmdjR2eYzb66bFrxUPxV6RweNcpWP1GeVtLqgfvjgJccfxJEwKpXbiMg4ZfSxSi",
  "key23": "36KSpGZUsozYPUikxAtPdk8fwXTLQFDFtem4R8gCk4V6K3Wu7zdeMVwn5ivoKLbQkFbX7rY4gE6kKkkrzFLpUE3Y",
  "key24": "5vKiJoczwiBRDegmKiDMHJgEo4EzgmQy2K7iRB2BJoTqNjXrN8vPEsPWhTCX9xQTok4jwjANuqKPwHkCnuhNrkUE",
  "key25": "2shgY2Kx79fiMNv71jojP49VSjpVM98GDqpNFZ3PviySg3mhBuMLms4qfewfpiD5J7UnknqdJbCfM3HdgHRBAuXL",
  "key26": "5QaWDHvGWGTmFiFv1a3gTFUDzecQh4pevpf61t5FLc5839QTVgUFJgX1p7gzujsSj2SpN7hhrcbyzwRvrFrjDMCx",
  "key27": "4971iJiCs1SzpTu623sVQWMq3pf3yJ4Vg2o7JZB1rRNne6Erg7RKvjDwiQmog9R3MEHrXoziPMhGKr8H34T1iMqi",
  "key28": "3uur3sSWQ6efELfB9yaJGvLr1UiN3koxwFQAkJTJUMmXzR2y6e7KB7SHs9KLszbGRNdqP94KJRsSfvKGArFGiSrC",
  "key29": "24LJJH2Ty6Lr4rVr3CKSmRCDw5re5yyGuiD4V7ody1nrGicRvP7j8XouithhNdBPSi8816bQpemsVg8okz1fz6wn",
  "key30": "2f3bKj392KDp45X8P5RJVRT36AdivRNBoMqfVtYDCfWcHbf5d45A6B8vL86W2tVdUbjccwjZRHR4X8Cp2faoankW",
  "key31": "5a3VyNp7MHRvbp3pHkuubFrVzyu4y9yZLUu1K1LX7wFf28SwSuEy3uC67YjPiuY8PJdHi4yDQcwVbnhWa5iZBHob",
  "key32": "5NojFUe8HEwXLHXQLnCEE1dndwLaGCdbTK6TyR9guSeoDdNy8wxTFru6gZ5FRpyT8xp2TG4wQa8h6e82XqL9Gx2z",
  "key33": "4PxrdB575a7ZJ8iNjvUyWFurCmHh9zkRWYLzR6aitbNZ2eonanJURxH6trVA9eS7yMT6ioJN1fSb1CYR2o1u5cui",
  "key34": "4iqKm3qjJ8wwdr4BPCJPhX96DjJtt8FSCUfMf49r6CzXHMKHzvye1QE5Y2K6jnzuigV8akzCPySSCbhiJSJGwifB",
  "key35": "2HqUDo83jWL2D9iCfSQX1TKcsC4JaCm6KV4f8boeR2McUpsjhBUN4zRESQ94CaAMdaDGdjm5uKKGga6rBzeTsggQ",
  "key36": "5DSVjCgMStXbb3PQUQVVbmaDKyTSW2Smt9i6DvBugmgcMj21t98Vsb9csvvf8ebnRos7oLDjkjS9dZTi7cDebeVL",
  "key37": "3usgn33S8f5SGuWFLBrRdcAoXipQi6NYKpXGz4xYfX3toXys5T2hDAJiKRXGnADX9buGtVox8BKeek7h6NP3QZC3",
  "key38": "BGC1khcw67C1gYcYEhmu5XPR5uT7BqNoLUtkCt1TUk4KobjqQczYzDkFpPELa3X9xPBx1wN2MgvxUGpH5htRa8G",
  "key39": "LzQ9WqTqzrwVJjgaZ7gnNKFHiihSzcNstgDeZgNdCeCfiiYm6xLckj2vXgxBS26j2zP9Dp3V3YDPFtvk8Dme94u",
  "key40": "4k8TLiELh1sqngkax1Jmv2PuZSSLenjuv1S4YE9KoohotbWNF42zKDiDQZsShrVNZQEeNEauQeJn6BrfPDiFP55o",
  "key41": "d5ZtNpLg2FU2xVZ5nMJn87Yxz57VoazAZGDxGM643BfXmTScC4ANGiEZ74EWM4cfpNcMqKuavDYzvZk41xVZeun"
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
