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
    "Rva8CitvTehsKgAfvPi6vy2BVZ11F7ZTNfbKhfptdgkebZGiPAvbvMtPGDdospy3LUJsCK7LwaekinvaCrm6qno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cc5PNmjjDnfQpRbKvZhZBCgUXuuK8tLjMSR1VhWNVGnsve5VdfYeZY4APKcDmv5RdDJrG2xE5Rrp5viNJx5ESP",
  "key1": "EZPriWKkrrHjehotKaPKTD1F5rUSjD9z7MgTifB1sjZmCwLMXFuWNkEdSiW8uXUyWke7uxhF9mXwuLobFAMMgCG",
  "key2": "5U9avffKiUnXgYCF8oRbvujYsvhijXz7ZuY8vYMzYf1EEkX8En8zBvNhh7ytgGSWmbC4H8TNVJ4XQaRgMM2hsqfY",
  "key3": "2K1beJN2VjSF8H1mYK7ohCurr619y2ZgHwrkcWpn1fik3FWAQbfvn6rF5GWeUXwMPHj6sf5wSHbzdhB4ZJnhwrEe",
  "key4": "46y6VudwoKZn1PKv7GjqaCpFtuazKUa6SLYugeVZtQ9CaKoeh3XKe4G8ePFbvi5GfaJXGi9MYcvvdUqF3j5w7faH",
  "key5": "sohVw4cXFJr8NL7oSJC8mpvFUghxhMGQAcVKFvB8EamiMxSL5Ms4BgZTJWxArtk3QaHkDzyD9ycGeuazN49PEL2",
  "key6": "4BW2oJKUMkDdYwdaVvHNVXKdZb39WSaZGjd2zP88jHCoygo3xhFZTThGY39f9XcwJijo2mU5sSW5EnuFXdk8WKAR",
  "key7": "5kh2aB38pX5BRY5yZPjpZes8Act9UfEY9ztprArofKqxrFr7ReSLSMsWEsmk5taoXiQvrdpEK8JXd4QnmQtL9zVU",
  "key8": "3GASEn1H1ZC4RrV6uSnqcd4WrRXjJXD7HCsNHanc3tgJaMG7q46WnVKYA3dakAr9iKdwb44ZbJ6FUSe64TSwAzmS",
  "key9": "4wNH4zADi646KsQ7AvCrxgknvEu1h6HgThH2qLDxaoVBwiDDdSLJvGPZ5mg7A1ZTX2wGUpHRwWeLxAhhgJbyx2LE",
  "key10": "28FK1vK95CVcfmSUJL8Vmb1igFRChSZESXG7hkyyJGRmSUYYFLJRL88mRctAhGT5UZgbYSCxrp7No4HQ83jEWGwu",
  "key11": "5g3XiQhyx6y7P2utHPVZgVQxAKWtzBuZcYBFErNtpHc6fTgpDLEScQbVjP8PtvMSvfqFbb9oYJntQriFBRY57Rvi",
  "key12": "5WYKMnAYasXBtJy6jR3sUe4Q7CvMfwPXDQxQtWQxZEDZ49fTCGVeNFLFbBQaWE6jZzWtGjVd8oqXMfRFHNihN2GP",
  "key13": "ebX8K54JsaKrCgzqY3jzEEGFsc3C1v8t6tigaSr8WYBkSCr6MG4hX8VHVK8BwvPVtwrXBDFXCJoJ52bsKrHMKDe",
  "key14": "8QhMgXwi2Z7w3wtAAxZ7Nh2DbnJkYUNhctZC6ghDESFahj1izZ5P5nRLapdTNFcjMGxfdbjdg8D5791nsX2muev",
  "key15": "32EiDTmhe7oMAvxrv8cPhk1x8Vbx6PUuKKehaPQVvpLCzcP852UnVHgXP9Y1wa3zXW41gqmAfgCnKfMZ1qvf6QYw",
  "key16": "2JRuRoSiB2AFRTCkWkEqvW1kQUFK5miJyKJPYxAbvarPAUfKiYVJzUz8TXuheenJJx9v5AX7pax7WYpXZ8h9mWjg",
  "key17": "4pTHUArYP9CiNVVM1i6ZpSBND9XPRsyVgdTG7raPzoVYLDkKkn6YsmM2GGesVGt2DYYdM1xKNEgbJRceapuR1SV7",
  "key18": "4bRNDiJgfvzDns6P6hAhhZguWwzPR1RzPGn2LVSMG416zoAUMccC1p2HRb8v8xhMrhHvfbDwU9vDytr6FtgQvueM",
  "key19": "4dpzALwXXxEwJ6PKrkBodhD6EbEMNAx2B8N4UY5nk7pNGpEYFHfCJZozzS2WmUuMQqniisPgcTD8QFFZ85qqAmUW",
  "key20": "25G8LVN6mMjQ1CvS9QcwAJqjvALZqPRThDAfFddYUv4a864GP1jmHFEEscTyqpGAp754gua1UeuNcZHyUF7NyEZG",
  "key21": "3z67YKncBF5Qbo5avdrjMTmHz9TdgJjHcH621nn2KSMXZ8ofxwF2SqPF4QPiEQckDfiXfKAsp2yD9FomvHjpB3tj",
  "key22": "5icBBaYrUS5SoBqgS9JuhPSuokxW5eQAV5TmHTHmeC6BaVm8eGb6cboPYHiDLRZe2VxATPrejCwDvtRT1tNiarMg",
  "key23": "zhjfgwXi3SToKaHTHrT7eYV7gMKK3PAat3qZhCVYyLWkZgBkW3S2DSJKRzLA6J3BmLPwzRyKwC6WMw9Y8FDQEY4",
  "key24": "3XzL9mMVhXU3jgcWfQBa9PuE6ARJj8RcJkXAyiCNSmqyYCFrpqPbzk9dt9tW8s7eLYMCVgVtsKMymCAF9zkRP2JT",
  "key25": "3yJAGnxjgXsXHX4QKoXJ9EZz6f147JqEohYKZDZKSPh1SVjSWGNAf1ekETzj2uaKj33LTSf5t6rU8UaFFjQJ2dkH",
  "key26": "4wBwJfsWWWyGDnRCZfRWymjL4QB42uKsFUW9jgdF2NpAXjnwSRc57hyPenj7aCrWjxJi3Lt5DnCeR6jjXLPKusK3",
  "key27": "dU2EfXNzCQjwuSCW5AX2EvUzz9qRhf1N6dbhFtGA8x5dJ7u2AizQBncKeR6Xkg3iFhPZzzSVLqF21gqm55WZih2",
  "key28": "4fZzfdfa4nDyHkmXRx2TgcSiG5jxGtP5kbcA6MHrw3ZLDB6YXDjKbUGvrBbVm5X6YgRrBzfCjiv9Ta9nVvP1vmU7",
  "key29": "3nswNbLxhnQ9AMMRAh65FPX1km6eaCpaa4GmtNEpRjcgatphtcaAcfkWCHVDHwpdn3rSUg1pJG5aNxcWKodx2vnw",
  "key30": "AGXguyZaPo5ytMiQN3NRTwBKHv67hBQjpJVTo81TUJWwnCkapdrrRQoGNfCQXu7fgVsBsAaemFko8UinTsvh9zQ",
  "key31": "3coG7ekUuu5eCJSRaiTyV36Jt5Xh4Ak3cHuonsFvPEng6hB33DJr99S9PKSxzbTHHd2FXcc8vX8UxFBbjqYL2JHz"
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
