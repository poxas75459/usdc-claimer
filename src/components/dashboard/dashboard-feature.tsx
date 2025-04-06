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
    "QE6MHzNbc7VjVCgBW3zj1zmjnFLA2STJHCyVknZJNgHRjab1S7GKuAQGw5HW6vQcrVT32Kos4hA7qYkLXyshEam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkXZxKbdSfoWnThvMaXgxfUquEsw6sbPgQEavX26td3X2YhvTszWCCsnmds5TuaFAtNFPbuunotBbxDGNzaPEgt",
  "key1": "21dCt2vTkY6DEPcfMZe5ypvSCs9pC6kKCLLuWAVj3dD1x9Wenfk7nAYckYMnz2UKLNB7YzBui13GpkpXGg97WwTA",
  "key2": "rMsQZB1iid3D1166ALyDAJ6VQdauoR8AFxiU1pjWfL5jkdhJF9Cn5FgrrhkBJ4or1WGR2RR5zP5pGhcCCZ1ytry",
  "key3": "5uBbmnDfYneHejjZ8upX8JPC8Z4igxwzZegA3QqYCaHqZcAXhhJmf9YPqUvHBmR5WVnFGdsKEGS3U4nmx4AMhPbP",
  "key4": "33rC3yXzE42xXQriWzV77bmfXEtfPEhGjgXkAUyes29Wirvd57sAzuGGAY8RdvJbAtdBNk7HY4NfsLdNhXcKExGn",
  "key5": "29ZGE9ezfx3UW5fuVjrGCpmCHvB4xbZaMXjpzVHfFY97cDazFDNMut6Ho7BsnwkaKVQU8PEk1fYDJ6FTBVHXA3AB",
  "key6": "3K2t4dHYszLTumJPhDMFcvsjSWtTB3454eAq6Jc2Qp9FeUA4eKwy7GPRQLep6psjoCp6BqdZx5jeW2UiE4MG9gp4",
  "key7": "VWQN2rgYzQ2zJMURN7u9EKAfdvQxX494Ec99ysPVwLWHXSvWgksBse9J5RnviLnpFPTCbY6dCRYWY8DwVQESrpV",
  "key8": "WBytnVaFUHARnkNxC9TMaevthdZu98d517msNmZjXSVZRGzoy56eCrYuy1i97zFQJKW43jEEWacvimdSzMWj88s",
  "key9": "4zKRZbyuXzByfU1TqUEcaYfeiwdtPkJwSQkfoGodzSYtH1XCbFYFNoUwEiXgp3UvvBg3XaTwkxbjCWzhH3eQxFbD",
  "key10": "3bDqMpuUs166MwLvZYX4Pbe74FrpVtNtCFW4DYQqx6EdJhCLJUBH3bybYjdwLtnUD77D6yEVAkDjohez1GVh8LyX",
  "key11": "29zZyVhYUQrNj77ckyewX64hpqCQBayGpBZpSuvHPq1KMLBkQhthnSnKMzuSVpBzj92q7XWBNLNbfPVyBw4Ag9WZ",
  "key12": "2p4cQkLLyYa1xU7Q72wTVgMLYotKuTLcQhbh5SA1gWsCHFLm7wxpiGPxTZkVbvHEW18nWAh7w5xd2ycMpwvx9uGA",
  "key13": "58UxmRB1J8epJUvhymFcLMGpWi97dgaG8EMHQUSuNAd2ngnokCcS5MuYyDnQoxwATmGuYdCFP1t3TdUUsApuUvPf",
  "key14": "4ahT9K5EmGiJenhrofyAGHr3vsxj9pbaAvuSjxbin3JCQbyJHkUXf7EHr182QghMsbPMZxnBSY73jtfWBH1T1ZYB",
  "key15": "4kFsey4WZv8zqZNWuRaBBBaaD91NV7tXM2CqBDuKJq3j4kXhfPDTSXJc87fTbgiXZXU557ciJqN1EzeAqRp92SXe",
  "key16": "2HK8FXN73ydtV4TEWkrmdFeNiu6TTLi8YWoGfkU73rFuT8WYE28xp2mJEiKomMWf66VoYGLn19A7rWyiRX2sgLUM",
  "key17": "2SsBfrNsoZ7RVC5KbryP3Kq2W2sgn1KYLkegKqTtfoxEQEb1whtS1G9KC6EZbDa82sxB9GEKLqmhwvo7k9BbdTXD",
  "key18": "F4cqFmdgQjMxm1eaQFfL3b5NGr2MnsMrhp52W1uZ8cbCMMnCsJf5uHVDDbT1npcHe9TXJMYhVZY4JTRLpqimoCt",
  "key19": "2e1E9VvQQp9b4UnkFGcDXvKBJUtPZfR35mjBkWsEjzNfVyXwT2kFQSr1XRaHKkJCQkQkpJMzqHHRd2F1tcuVEn7X",
  "key20": "4rRHZErUp8swPKRrywZyLDKZ67fjfaJWJihcXxUpvyKYCRa3vpPE2UfT7ckzrfpN9eYhKvVebXxAfP3smZjr2zx2",
  "key21": "4nkphcaDMTotRCJARvcfD2dN6ugMCzb1qon2tNczpcbyoKHuEunEhyqBbdaUMxAgdLqaUFzbC2XW8F6rsE7smVCo",
  "key22": "5pnTupom4m8qoZCfhscvKZB41mJ8mAD77Q2jSdnj3hJUKTos6wkWgsA75j8JLunnv16VEVKfaqQVtCnnrUvjyAev",
  "key23": "pZE7SuugDxLiishFsf31FotLrqoAwgHHmnWRzTB6kE55hTNeJ8HpyT9D7NVt1ZEuAgJTWsWXrUHjcptQkpmQPVT",
  "key24": "2bZYe1KFSizhAwEZRBp8r7sq4qt7eNiAfEopSP4z2zUkDTaDUZg8kFZT6boSiEESMchUYxfJ1CPjpdaJNBPshheq",
  "key25": "rzM639A3okf2XR9NWRyMy4QaKoLfQn23d3BhkpVRDYeEu2sUubLsmVCahcayajimw1TVCbXeUnWxTb9GvTFstG5",
  "key26": "ctmeFpGDN2r127d8gxio96Qv3HTQNDK3hQgTZ9dan9MM35VjqNb8Kv2Yqgybv715suTCic7jX6v1qZA5tBAr9Qw",
  "key27": "234exowFUBpG8F3WDkyBeoyQe1VySBKVNj6265vxJtHnQG5ERpeV1NR7CHVyqbqsz5QwvsVgpLjMYhgLntJJ5JUr",
  "key28": "45XB5mK3M1zgRzZwr3X8D9Z1J87Dh7tfKLbt6gS8KAxbpPTyrh2LoBNsKySfSFDd32mu7hdiTsEbp8nNUqCAHkEE",
  "key29": "59AzMJ91ALct8iH1s5fSe9LdEX5rcXKKT8uAFZ4JSo5f8PKj9Zmcv21KFVUsTzD43kowJU1LXP34hTRFY9HXMwXY",
  "key30": "5Da1TjqeozLkuDjmBscbD9XcoT7WQ3R3pJgpW5m5x343p37HSQ6spRgbNWuhJSMwUxQYLsKhoQbGgvxiYpuvtnrn",
  "key31": "2ckQrd8DDm9wRvX6EjWs53e3xHNteEUw9Ciuekp5kodcpBLyh2ouKY7GCzUdNR1QDq9bGnSrcfj9rqFaiodn2VQn",
  "key32": "3mMpsLShHq54U6VabzTHhZjQy2GfopdovJEbBMhC513KhZUKK3bb4Zy8REEEPWMajtTyjFpvVwskNkYrCQ99g9Ld"
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
