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
    "Gpy8RshiFL5TDViVYXCWwXFqBFYYrRvCuPPvRENwieHJ39KFLJYazmC2Q3kBCW2hj6W7gMKvdbzCtemyMpeSkZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28kpcHLNS2txUAGh4MBgXfv3gDnRkBBz2RijKHzJttrHTepizUw3moge9U2WXZByzcSxabsB8B3DCxNkdvsczsNp",
  "key1": "6WbceknKmGNw7AJyErxVypAJFYkgjBn1vnXu86HNfmVyrWzoXFa456xVNJdQP8GGbSn41NL7KXVS3tDNAqWKALa",
  "key2": "fFHYQ4LP366KVc3QgXb7LaKuFSr6hAoxwjYvyT3QBCdP7qdyA3YgZwZZVGdJdPE9GoTBLX5x4QbJSMCKHvWLfW2",
  "key3": "3bsfk6NhwrYFLYD7twEwzGg76cE9EqPPqckKDFgjswAzirE3mzXb5qpo4s7PpuWuKurNAJMRN6o6KJPf9rV3Mkvs",
  "key4": "4zwbx77SvRvzXnjJG1Wo4iX13zpxpruZ2aFc2jv4KanARpMWMeVYiqaNqkScv83fiAgQha63tYCV2DJfk6Hzz9qA",
  "key5": "4LTpcEU2EiEpDXUESjNkvUZwYCEPDHUvQxQSRVBJiBMEFt5oJVDjRXqcbEUqR56oacCwisoQdgMmtKokueRK923Z",
  "key6": "5JNh8u3ieYdExUo4TrSqu8xfnByuQkau3mFXvgMJ3JhUUehtm1JA7cxvoCCwjuRFcUtKqa9EQrPxN9bN8ULkJozo",
  "key7": "61XqVhRhxgtP9o3wi9cjF4HGqkU1WiEsZWoFsnbYxeyRyRWBiBpbx5qYvy8StPnYubhFX85MaWXnminpNjYSystV",
  "key8": "3YwETxkewfLCybSVtsnFyKrgD3cNcYecB6nJ7LCGcjt8gastLjScD8G2gnYBosjXfGa7DszCmncYRHMNbqYQPw2z",
  "key9": "3GTbRA97bDunV7A4ZSxh7s2d8g3tkT8bB7XnDaKin4kTFJncxF3Btrxq5tYJf9QGzcjAACJtioZrHV46Jvwq5kEB",
  "key10": "37AQV2H7XcaZrv9ax2S6gohJhyLLHQPrR5qBKDrrp5mLoLTf51zWvYyQVweujzCui8N5M8K91Z4ZLNAnW3wgv7Gr",
  "key11": "ephFJnZ149MA3TReM7tqafw2u5razM81RmouiDDY6jMoVqVJ7qJEppaPQmXDw8eYcHv8tyG4ugiCVRLGtCHS2b7",
  "key12": "4qHqRscLyE7V3ATJP8KKg8anzcjFwqY9N1taCyJ4r6pdigqxQJG4bMEHqYjyNgBh8A8ZQtMqhwUAESCN3ouFcoCZ",
  "key13": "5fSaUwNk8oDw7w7XSfF8qNYNWJNruLvKwm6z75yigxiGnRKa9tgr2RSM4MFJzFEUgMGxR82UcqZfA84KDXeGEUhS",
  "key14": "4DjnPT29ECjJYeuxNRfQeeGE4D9Q2dofvJ39SyjLZSZg6AJN3hhGzRcKgWdBvPvkscvgzyYZXaTrR2gTjyZ5dxhX",
  "key15": "3GEGXCvqJ9i2naW8LCR1uttX56yKYjaTWYLb5SXL48HrM45rL5CdvDF88t1niF1ndLX9TohrbVVMtDucdm3NpoyL",
  "key16": "3gTmRo6pjDAVqVWvN5JKJci2FGL3Mv7gaHJ3htfyLo7Zkq8KNZ2WoJkzKtkQakUTMnAdPCxSkd1XET2Ur327JFuF",
  "key17": "41cauVB2okeSJy6jCCRhwaJbhPyNqgzmeLhAQjQ5fAqN41hbVEpi96Btto9727MpQp9keowp1ZrMvBgGFsHuvueC",
  "key18": "4TZhPU5rhBDf6gSeyPTk24KrrwntberkiauC5rzKJ5p7xnYbuL4SP4hEqg8kfZbcUL4NuKKifCFrJGUK3ozXxRbB",
  "key19": "2vAZ4G8pWjAe8HzoiepAtLqwYwBmNUt9KZNmv96RA2Udwb1a8xznFJhUAkzt6Rh29XVKfxnxvsvXAMws2HgbCDN1",
  "key20": "5AeeBoojBrVuUoPJDiMVVWtjWLEVDw69bU1kDeUxwTsXMx7JdrLotLnfquV1X8tQzHKSZWzUdTsd8vAXRuncKiAp",
  "key21": "k7eJUoMundb64E67CRjLERGE2Aj2cqPtVkpnq9ZPRU52tEiiShibmDEzkdaNWRAJ3gGUjQaLGufCNDFwkRCF39d",
  "key22": "27qzDyZ2pDPTzCztEgQ5tVaWbSm1rZHv9WePj6LyDdUQSpK7ofWtvDdLPZ1qVwvNecXCouDt1qkwxD9JyRice4HH",
  "key23": "WtwHfdcg7SSmYrnG5NhFn8N7sakSHjegij9PRVN6WzkKWgV7zEPgSaHJPPSXdYX4WAHFVukcT7p9TNat78Etesk",
  "key24": "3qskvKTToBhL1tr7wEujHKwdr5be6jPNXeJ4zpqJtHY2MYGbYLNoJF47uYVKKKuCgWLs6tzFxrjq3knS9oeJZB8p",
  "key25": "3TRBJX214aE6x7Nt5RiUkT4nV7CUA7DEiQYqrsww1MRVy7X9U9AeXGbRP3985yth3SMf27W6XLsMQc8zhD85G6ux",
  "key26": "3cXDYNGZiNLhp4QLMSJAJbiRjaowdECWgdmK36xRWeyVNgdzVy9zUwH96yJSsjr5XHKFArfzr9dhBw2GYTyht95V",
  "key27": "3ZY9dhSdda9aG4LTdwKkEQTnTykUc76bFXpACj8MWMamGGNKtBNZKW4rDjt3SSk2CHAg3NAdcywqQcmYijuteVYZ",
  "key28": "e6LHTBTMdy55YcHMw4WNF53Zbaj2P2K4aPoENrdovNMBokyW4jMeRHKgSobLRxBdUJvpqVywF2Waf7bFPQXWqry",
  "key29": "3N9p4Uz3m6EjspiZqAUypkeQM5psdmKZGSybPpBFNWacpgrJ2vcrbe8YvoGRutX8jVVfRzNRBeW7yXvFtyCZQTPg",
  "key30": "4ngjwsLfCC3it4rpX9Vv4ETtDHD6Gy7GDbAsAU6Sxrzu55NpqCmaywrjGTBnpKZ92U6BYjQjpeBzG83BMMcNFcKn",
  "key31": "4G2pJwjqUSf1K3cLhepfyCgKuYoLkBwUyCfof1V7JwEYFrUEEud3eVtXKWfVAty6RZxSoujk9vRoAYtPTyrgMdcb",
  "key32": "3Qpv5yuR8tQwKzmZexE1mL4EgH6P3UpPQF3VkaX2gwSmfBbv9JVJ7oTAKrUwsPLW48vLk2k8yhR6xgsACZpCovw4",
  "key33": "5qcGUMzHUdsnDCegVfh6N13o1QpwxwZS5jXYXLwKMXfBnY67Ea7zUQukvVrZ1f3R8t8DhFjSnHx1ofSjwxe7Ngwg",
  "key34": "5ZvKD8RXCzg6LJWc8EnNJx3zFPVBNA8ztScfq27FejyvBktZFsUk3HeR7d3oXWHd97NuYswjD16UQjL8gogAsVSf",
  "key35": "3tDJ67Vz7h4eCpGssKmwytf2nwTEdPueUAbcJ4YzdS8B6V8ytcLEudHDpNsNsn4xekQrM4AYykToLWu3K6ffEGCR",
  "key36": "5Y1Km6mZPdxUbT7P3QFAEEe6FpYKE3MEtQGWXi7fVdw5UaWNjGMW7aTV12nNuYcpFa8V75bWPEj4RzYqxk7dLSED",
  "key37": "4t9wFHp5zH1MXbxK4vr3GS4JqyKhNH88U3gtmXKRoAPjtyHZ6C63Y4v37mzmXBuKo69WE4tRWnXDFFJxmqaML5qB",
  "key38": "54MajkhX5RuD52EgnVfvLNhaNq9Z82fHXNRuTSatZR6rPmSWw9Vp8rkP7JDZc7Bwh2NgF51nS7r7LVMw1ofa8hZV",
  "key39": "5pxY6fR8duAM63wL6ZspgkZ86LcmNXcurwFeksMiwxWjGuNjAs4Cx9BghZZeiWPzs1i2K7Qk8NxB1NUGnZPCrXwt",
  "key40": "5kC748W9Cj74djo34My5fzHnGHEiWvhetqyefyvUsBgxzd9bXgFrcnVvAtwoL4X4oKPtxgGAsxPWfM4F888WqctT"
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
