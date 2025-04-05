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
    "UkwKHzQjbtc7TNBvr5XStx55jfxh6hoFdfLuuXExhjYru31SAkBhAHjn4uWmsvtsLyj1zHjf8P8cJJAEmgE62w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9B6NM721AJjRtcWHvZawtByY6e2eCEJKTHkjWyKbSsu6XcdXemvkxHrnir5vnAwu9SqPJP2Q4wrWGKkQWswn3U",
  "key1": "2BFiqrYh6Wg4yEpJFLqdUirwnUXfRaYjbEM4Qv7R9qH3AKchr2KmmsrquxW6H9XU68rrXLVnV6WfLuipV9yrXZdH",
  "key2": "2ZxxntLkFqTq9Q44c3qBzWHzeWW6WQTnkZqBfDheDAMXBLMSr2YdVjzAuWLXiPBmQJ2F16WYyviRnqAw8QAQ9LFc",
  "key3": "3u54Y3sTFFPEtP9xr8KyADJMJsKj6V6K8DqSe2W6oydrrkKeiriLcbwrxD6fQtA9ijNNtSUTrSf2qjFSFdrW6XxW",
  "key4": "5Hd2pEx16wNFRHHUm3hiEWcVTauhpWaxEkDi2LPSEHgmCieKvzuqikPMCTSfVj5qPJqr55SKpWTgRsL6s3Fa9UJp",
  "key5": "VkzXv1oDpouZAjFRhz7jkoCdgvNqBDknpygC6yPU8F4BWesVTGrJH8UMPsaVEeqmy3fgrBG186KyUUt9t1gSuGK",
  "key6": "27iRKEey5s7Fd9t4aVQCh6zDP3FCzSNjBen52WWSC4EoBpK2XfM2D2g9XZhJdyxp3uGZt4aECe4SkSXTag31P8fM",
  "key7": "4TfaweJN3oKxQCTkVrJNra36BCa2NZeTrVpM1mCEg58Xba7MFzgzgDKzhtkJjhJBFRWv4mKyXma2kCTTVhJVDwP3",
  "key8": "MtFpmS5cgLR5UNhkUzQAZGjHWxBvcBwRHyEaSViDg3MaF81KRwrwSJmE37aF8d2CN2xwbWWWU86TmxPpzhJCRHo",
  "key9": "2tzbHvm4QXCRqpExcYNTi8zMJXJXqunGLGwYZy8vvH1RnEuUYYu5M6AT5hrpE5TaLPLh82uUBVGMNQqRFKE2yqBZ",
  "key10": "79ve87KHn5kGAmtbNLxtKRu4PytGW34mmBzSae1u8hHrBdFXBKJQfzaCFJ8g4vzcMcgTBfLNR1a8qzxLkEy4beb",
  "key11": "5iBkBHVdzXpDDQoCetZmEtNYpiZKXmAMB52Ta8fKo8wA5gm4aYpLDHr7cfJ3KiPSeHP8XCDWMkgy32KxfCd5r5c",
  "key12": "2cEQC2s2fHma8wNnDV8UqAsEQ6M93MdrntrTaQeJTs91EM89mMeCfPxAuG9EPQV6Gc7hgaEhGz9SbbBdqonh6vV1",
  "key13": "g8DbfBWi4bwVdsVTf5E6h5fWjBAKXERyhmTGQxAByPmqY3A6Tftcv5VTezN6mPWMSiamMxfmsKvP4arT3nYyMMM",
  "key14": "3e3VWUGEF7tidzNArx5N8pZ1go1oa3qAzDBz2hbGDt3UHDNC7rCsSCUwvUfr4DxjQ8VqfzrBtBfSDGjYxzGMcECb",
  "key15": "56aAJ3yLSnuA7oHgqLwpNmXftQJpkc6zYYJyfndfVi8L1cFmM22HMNu4xt3NsX7FAkSprJfqkjnZj1DSM7da1pyk",
  "key16": "48xhjbwWvfP1wuHTVY2JZCXoMQYUWYXNag8QopsbriDy1JiyLdNpyTSzcSzSggPxRvmYbyJSaCGNx8TxQKsGVdxz",
  "key17": "4fMLkesjQCMDuBp2qRnHNEKhRzt4VTd8TEWYMWsfUYYt419xFeyPgYPQbVmEmZzyLhg2bfG2j2DQRVNKwXKjQE1F",
  "key18": "4Aqbt3zeqTR6D1RSx7rEwVEkdGunbavtcwmNigL5KvoVESpuebfxYpcbKCEeZb4ve3RySjCqh5vhM6bfWdg23wHV",
  "key19": "64cpTfREqKT4M4mm9xfsZA3xzGt73bygPYAjDcvZ5P5ZvjWtnonSsSZSXfmDYJNPGUUcGaDMSjVEoADmj1Ns94rs",
  "key20": "5uHF8MVwQgWR6Gy6k4mmQeWfebPjmq3SU4Zm6WWSBGFpcyhz1MVE34SG95PRGMGcE8NBpHdsgtWskgPByiiSbd8B",
  "key21": "TQvs2yLpTLYU23zxsV4UEFYHDqb5Ftw3YVnueh5aY16N9M9X82ToGDTpS1pSZcBfT3fS4zzpDAjMY7jZyjFj69T",
  "key22": "2ffxnF5PE1tY3Gtd995wrcLod34BbtpWe43RFMQYbcX8mpSyWmoe8hG2AQ9tpQTsEjcyPid6ieasmRvAE5d87nxf",
  "key23": "4cTdvxda5ozkUtuFhGEDGMy7hn83sfyxLStq7bm67oZHKpNSXLppaRWyky7ZSVJF7qHoJiaaRE3fdeSwo7F5FykS",
  "key24": "3KjMK67b2n61P3vMpUGP9unPFHXP7zcPCjQCknbhTfyXTKCpv8LH37Y9XGo6FwGjhNpC2Wyv3BNpQcLyLTA1dC1d",
  "key25": "2XR6ysBEy5Jpnm2ptibtxmPv8yMKLJm6zj8JFRD1CH5q634PYC6RaoXGzwqhvxgnMCfcD1Jw4waPb52gjX7Xy7Pz",
  "key26": "4CjzdaWpuhy3LLXrBaSwA99LWYudteVFQAQ9GiSxDbGfQk8cAmYuCHiXvPbVQt3pp71uTJVmAhH5YWwk9NT9bhMS",
  "key27": "3aEv1huZ4GTxY7sCEFXtfe2AHmUajGH4XhGNCwMXDdZHy1ooLbwMi7mKSTSh31a4RMM4unDKC88bpzrJUsY3WpYC",
  "key28": "49om3u3vy16CDTPYWjedfUPojMJtdqytJUaTVFh2XoLjubkzZUskAz8VUbQqWyq33tZjimyLjVSG6C8KCJppWA9m",
  "key29": "4mry9Qyk3vb8YFRoMKNUPTH5v99gWub4REk9daqwgs4yWweT1iksWdXqm4YS7zN2sjiNdby59BXH6hHjZzv1ZWNg",
  "key30": "12a7QzPeGMyiXG8J4cS4T2CXZAU7NLDD6uJepvpVahTVnWeaa5qgkYMP2uZZAXvVg5VosRDe6ujo1myFD7TLRrX",
  "key31": "38VBPmMNRyq9VzGEV7G6zsso9e4zm9zSoBktSnxDFddJkEbNSmgXanKsmtoLfXWJ8b2cZVaQeg4LzkGgfWAkC1q1",
  "key32": "uX1oDPNpdCqAkQpGVG5n9z6BLGbdvoNuZwvyRZghtkS5ipVNNSosUG7kin2huAKMieBZiX4wWudvvZAb5yGGPWu",
  "key33": "2qaJuEETStGYbAfJDdJGkQWz8Sx3JA1q5hzeYmiRUPQm2bkR7cWP6JfxKVTg8ve8fYLLrJmhkDPjbm37VPzfqyT4",
  "key34": "TiwuRSvSYVNsMAbJv1zSRk5AD2oqwj1peZy3pviEa7g5Hsti2CcZy989qLvrRvTfQLnr2xmsJLi4rKrBCAJVart",
  "key35": "3TBHcWigoUoSBkFx9th8vXUqmgPj9pZJDLXD4DxwGgcgxFy7UcZDkTNWgn4VEjeUmw6ypjoPrrKugFCkq4kjSQxM",
  "key36": "xgWwEvQqaZJqqPoP8qHJujZE6TTynP6FEiFvaXegaRHwNNqGGNjNfCPeEifhVMGu82idjbCtoLx1Kii1WKzUdPK",
  "key37": "5t35ZC46XbrfGucC1gcXVDnqBwQh3HLBkGLuseKJz41f7TL6dUCBWVt5UxzreFy5hSjfQDecsTt2Yj1KrN8tJGTY",
  "key38": "2s9swF297YnNty3iYc5WtjjasCuHqttjc6KJYDk19ffYNaZMjey34gQWf8StbjdUBMyQbFBoJdZdU9zkNKjitpPB",
  "key39": "2D6UJ7wdEpfPBxC2bCbyHvd6RsWwSKy9ji8sFPjLLu3oveoWDFdTxbMSEkgda3whmh93fGrxAda3ZB3f3jV4T5sq",
  "key40": "25kccjvuNfFKDQvZdTRx5QtaLs41a7Fe8DhnneHKCFL9pZELvYVNtR1KfejoyYiit72ms9UdqZECVxuMEJbLGtxa"
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
