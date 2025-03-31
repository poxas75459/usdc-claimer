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
    "5z6iWzRrVt1ywAGog48KMGg6Xm11tXuHGbNBeo6dNWpXaiqog8fmuTKAniU1NRcm1tjUe9jNGL5ffoQ8zeY3Jtxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybhRVz1QvUhVAHtXu18meizJy7f7Eb6G2z5JwCMwxhGgdYMXtoVwAT7Jq4canNfRWFbqxeSV9e2WDqckVfykEKy",
  "key1": "3UGUAtbqm8Kmoj36o8ksAzN1ie79Uwkk51x5wFqUrJrTJrEE4VQeWngW3aRJyfPdFat5BakMzbNUgJSM4N6kSvo4",
  "key2": "fLC4nJPxASdBxr59ZruAniFnGqtHYTFZSYyEpFNxGCPs3Gc6VgcRH97iTrc6Zqbda7ncY3mAC5Lwjeu58rh5GyQ",
  "key3": "4rdhGjnd6Mqvpgk4tTTnqhwGavD947bMX72ZKf3Qvd24DccqFpvTDQBCeskQSr5RwxaShSY7Zc9KcmhoXiQBx5mc",
  "key4": "5SqwtGERX31e7saRNuJYvAsNNuXfbWcMCGd6bbcihy9ALkD3hhUdxZ3xqjK9ctXVmZVsu9Dx14msEpACM2pSCX7S",
  "key5": "QrDw1zvWZgt3RrixGWmchrfjdA5noa19fi3nDvPALZRUdvSsmXsmsNskM1i69R3Pp2Cm9sK4wkpCuUZgskAzHTW",
  "key6": "2F8cc1BPDzEi5k5WoMHoWHvTS4BHr7oLYHs7XGhwVdk7gZTtdhYvGdg8ufqtKPhw6aLDSisqiAwKnCxzaCK9sUFB",
  "key7": "E6xkZoNVzw2cu9B72xA9siws8QMML6rzF2jLiskfp1ajdNmEYFzvuLguP5Gyu4UWnmED2aoFH8wtoLDrxC8FMxj",
  "key8": "4gPvvh5Ps5LGYkd8veJ4NWw1jqG7D3VBJJfguLRkoG6wyVb7rGxSWoMsNeoSx7AhR26Gjeq7BSnXL1tnG9ynas3t",
  "key9": "38V349vrVeGrVNmL35LjqwVQjvvkTMAXm2Xp9xuVFs1VhSLx7aR1MfCraisxBd9xufFZUiy7fPJBcJshX5QYXDqs",
  "key10": "3JRL2gNvAndMG8Y9BYKtDvKD9LuXzMVQ4HKokb6oqyJpPmDEftXAZBXyQNvXNd3zmPCeggjF4YbCtHEduyKXsDrk",
  "key11": "326YTL8oXfzHUWUJRdR9Kcwkv3fXSFoELsvtaeUB8XjcEGg3LZot1TMRtKCdmSKTs7Wkk9nZyV6AHMFnUTizJXt",
  "key12": "p4JomENbwoSrbRuDFWvbm92Z1n9qr2taMWsJSpDUusMonDUU8BJ7ZA8ydkzMBzmtuqCE9Kazmwj7wdEMd6PuysZ",
  "key13": "3TPUsnFLgFeCZ3vBPkcfiKNPkLDQWYDmzhQPmhatRQqDubZFwRuKQaLaw1j4SBCewVWHLuQN4jUxX1WPkLzxbNNN",
  "key14": "2N6sg4a5fyp6uQwaS2G1X1N78E7bNPCRZfVi3kAUYYhYXWxnVJpzvA6o2yD8Xv8i9ku5ZMSoJFERnQg6boo6pvVV",
  "key15": "4gCTMccrcig4uEh7pLtR4JjEGb3cDcs9hGLA2n4r3ANgkyta5aAaazSP1A2sjKjwwrrjVSNfSycnbRci8XW9zUii",
  "key16": "rdrnUPVFNb6UobPdajai7ZdhDQU4TnfQNjqvKNu1bAA48d1V1Rc9JCWzE1XVMPtTWPB54qv9v7aid281rjNCgTN",
  "key17": "2Ap31Gxw4z68EfvFL9TrfiNb9qjyceLgbUHGrFxwHdkdWr4qL4g1DFzLc6Bw3X3EddH9EXeJstL3j5QWmPgNbuS9",
  "key18": "b2XYLJ3eJZo2zAfGdBSUfeUsaCCXhrvdPdBtnB84awzdmoQX4Jj9mN8uL8CEXerC9x1vT7sGcLDoUZCXYnEE6Sh",
  "key19": "441hrqJnsMeMCczcWCMnAs3Va4qSgZFLrfzDjvwQFFcnapvMuUsRHMTjvY77LqG2MjTtqVVaDtLunHE6GAEEJgrD",
  "key20": "5bRKYZ8pQoub9btsjsQX5FnGyQhNXK2MvxFZgibLgAHqrD2SwbtREQAuN8DxLCiD2SeutYYEZikPgHpJphuAyWxW",
  "key21": "48wyc7fGQRPrYGtW5hY1ddu99FDkuPSnpMnXpV94DruG4gTPwtUKF5JP8KV7Yee9sinFcWjWJGjqz71dzb7Sq6cz",
  "key22": "5ELDcu3JKcXf5gjBCmwc2xRbm3tfo1uvy1E71RHTXNGz8dZsDVDvpLL3y6zaFx67ezKcmveUZr4HQSfPKTBqvhLL",
  "key23": "3QjHRn6VctV91VB8diiiVJmhgJgqydfFxY2j37uMSsRqrDG5vxhUpqHMmma5seBTm3E8yjA8ZSXBxFHjD31SEiFu",
  "key24": "nn2c2sWf67GANP9QMFipYvrHkx9HjNiDbPEpkYAagX4NyZBCbuwZwLPcyHjAxSu8fbQRF2TkW9MeNYz74M3w6cQ",
  "key25": "5UBCPUHnnHBYaSj1qzGrbNNHRBBUnMYEXnkcmkn6m4UYpmAQ7rH6yHCZviQ4xmHYMfdV43t5cHwZh5nZAaedcw85",
  "key26": "2boifK1CJjTW435aMw1NH6BXABEVFcyZJpsAnB2ZCuZDEoe6Xv3dbMkHdboFwh6Pm41VfxxEkrLWD4sbZC722xM8",
  "key27": "3YgoxJWarZJXU7Nj26uAZiRk6AFaBXUa6VschxFi4LoYcYMoCJx5XULE2wguLBa3BHLdq7tVAVoEDacLuG8L33wo",
  "key28": "1AB5sfaCXMb3CSH1eX5wR6dYwnywPxKAMTJoRMTTFWDqpiPvud91rp1jTsmEUPVxj2FgiYHbKwVhtXCmdrnYQ35",
  "key29": "5VNGQnhbgwrowEoiumKwg3RrXWWygJjmwc4DRwCjtUFKUxA9QMvtsU8kCBcN3QQmdwEkCSbqMZvANBJ4cvuLcTfj",
  "key30": "3LLed5jEuxT3HxzGigyrMEmzZJjhCchNX6vGRPuabZAC6q4SFop3hRRkeXLRmrio3aEEYWfjvXTh47azGAQxL5yZ",
  "key31": "4QMvxGRUANP9FTuxh2EHYgjP8cneGfTZRkHrkDEkF8axRp5hfkU7qB5Ec3n4dnAzsCyTV8aHiLGNjfiBSVX4M1E5",
  "key32": "5BatXCzxTvoneyM3PvF1Kk9Rb4j32TntfMXSZ6MMqV2vswqt9uFY27ZDoEpu1eHNT6CHAtwbntdRAodxhKk9xHXp",
  "key33": "5Y1ovQXuLxM5voFD1SiF7A9yyyrgoKyRhTWS3VG9FF5WHdq9Hv9cGVK5DtGmduKEAGSPqpK2tq9AzKq69r2Awy2R",
  "key34": "2gwwdxKqBApDtH5JYoTN2hCyJ6snxJy1zAaz1wVDoH61aPr9AtyAnKUWY9BRaXyGXVucJZPxKNFybUAy8baP5QTA"
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
