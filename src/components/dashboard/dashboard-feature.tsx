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
    "4DxXgAKRQFNXPSzbx2f5R53gCLM8qWHRkxG6ZrbibW91kpdZS1iGR4oB6gDPD2rAr2DQpUGMCMLn9vXMV686VmAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RUSHfDfcaPPcY6HRoB7peY9cJGcS5enmQHLe8Xjr7r13F2VNGSh8u1RKgHMtozSdZoQxJTPbLDuJJbP9G4sS8p",
  "key1": "GwQet9pKBakeiZua5H5hePGuV3VrckNKtv6YJrW3e3WfyvTASUqJTQb9TbPA5TBLVWfLddrnZUe78USyZKtZ8Z4",
  "key2": "5rP1TXZGMVE7CkZ5h1nfTNzQg7hBDCpHkyoPTXHxDAb5nafYuCC8gcNaEWmvWh2dqrdTNmZqfUps51aUi56esHc9",
  "key3": "5qoXCfQ7ozQ1m8v9FKZSrTj9n5QWM8U6tbBGvAMD9BYadrTgiuubxgC8Sxs1ByZDoKDVEACW1C2QAhkgfqj4nJKm",
  "key4": "EbK9cScr1U8bBjTjFbeha74oyuSMd6efoT4frt9vUyJALjQiFHRuAYmmPunBBrGBJuEvGhvkfCRAQ6BPwv48ENR",
  "key5": "2UmemefbCcLXEshdJH2E7dNabo9t4Qd6juga3jrGoCKGDzo7KRuKqwAKxsbR57Frd5qvNDeKJXffC2G2DFNRaitW",
  "key6": "hHBX1TkJrRvF2aBsCdiaMDJoDey29C7nGvDuz6s2BcDfLySbh9J4LhmjsWmMKVhgJkMsbCoPiC6oCUzQBHeC2mP",
  "key7": "eiuyvtgSGr5AigZauGQdnK3QaUQsnJodKxNiQxfxgca51waWwQ4C27baSUV7BH6nJvFZjaDHcceXphiTZJknSYm",
  "key8": "4hWt2sTyKy4Fnjv9LAupJqWvWVRhUGtLEuXAUh3Zb6g8nXUPdLaJf8DtRiTJsndZjxLwVE7hjqRR1wKtyNscdCfN",
  "key9": "3xdzmPP9ZCtFB798kwcMNXqf2xNmj7j8wq86zqKzBDrLB5aBNeKAZLvqSjqNu823nsJXTHzFP9WDj8iceYGqL2GJ",
  "key10": "2kTHJgFe9vWGnwMNkFKXBm4RMdeBtBbxuQvEwPXmEvbbrwzdw7uXvjJq8fnMegq1ZZarhfbPMK1TCvczvMJD2AHE",
  "key11": "3HGG1iVkHcG1FEEDXeRdLUzYpagipwQQraRFL51FYH5k9cAYjzKCuAoXqTeAinfa87maqiKhHV4kSqbKtnk9khwY",
  "key12": "3uoRRsUJR7p3g8B7wCak8FoiM9NmNNj2aQX9DfZDuFurYioH6hD85sEzzyaUo5VnvjTidgwJZsvRysw9nzqoDdc6",
  "key13": "doRAAZWa9o2dFMwmkMS8ghA9L1KbAbwtpZTBVtnr9js8T3KJJXsyUFEJu1XjnmNi5CqUPihpP3WjMpok4wmn5o7",
  "key14": "kF7zaW3irZqcryvQwAYRWgsZfgPAhHEvvGdVcHfQqcbUsW3Qsvjvz4yGT66u1wweGX5yTa6gkNPztvkZYD4BSiW",
  "key15": "2txiBB9rpKi1EbcacaZhe1M37pGVbacTfuPJ17samXziJZnSsfTknW6GvwefwzsQXMzhdvfgHp6DU8g8Xn9FGyfL",
  "key16": "KGFkQibhtinzHFuzQHbUsdDHfkDWJ6W6vRocwTU9mVxfaFww2nAr6igtW8oTZ2CtogBjWUWhNRQPTB9Afg6wjU2",
  "key17": "AhzQLH2huRV4HA2poApF6ACov6B6v4hKUuGcQRZ1Qkeacnxm9Kgb14EwpXsgiUMq2jxV6k9MTFY6xz5Rs8BZ5SR",
  "key18": "NmTf8znNbLWdoodKCF1vsvYNXTKyEJ2uJrMUAezQ78sTeuTBqQfExbBAe9wu8jva92QFZmDr1HjvgLKrjbKNJNS",
  "key19": "49k8jJoAwC1uWJ3epZHwqTiAKzqx9MhRMHtJiTZP1jTrBrLwwpSHqR3m6wGRYt1PJ1JR3GGEuLzc2xyYxQubcdiQ",
  "key20": "2pZSHgbEfj5M61vEQG6ATWWsQVBq1G1LBTALucaDfoyUBrJerCLRfkEsp6gRdyckgJqtnkoLRM9QwfGhN3jmsJVP",
  "key21": "eA1hSbaEBYrjEzwaYo7diZDdPvEJt3gUL7kbzcAWAs2bSzC2Bm1tgh2g1xwamemXqNfTBrPUYNAYKjpwsLRggEt",
  "key22": "5h5riyPFQJ44J7uB5MSWfu5fKaKTLZRKKqyD9oKYA5qs2HjJXYLTSi9bam2HCsF9c6ZkG8QK63oKeHVLPpjMSfe",
  "key23": "RiQh4w1rSzTuc1SRPmRq7Tr7GE3D4UyPiqMyUHiDRpvyohWTLz1JAiWg1Bijeh5x9HH4ZPpthDSVsbTDnGDJAud",
  "key24": "4hjsJP1izB55AdCwt4xbPCCMpEY1siFfAUjevinywEZbJhrBLnRkX1mTxhNQ5yf3a8f8fZVDBYEAMrQ8Ycve2f21",
  "key25": "2piAhrVYWDAKDRUzDaLMUAwdVwJh5PM4QJ6eh47LjcYanxCxQTxm5HkLT257qGNhxUyNtDYYBNo22evFtjFXyY4m",
  "key26": "2y27KqgvgniEJnXngcSYfwpMBYRKPDkMVerixxGWf9mDUr98Dt9VwvE3sb91ZrT8Q8BA9DyAPcUjKG2nh8FokJwa",
  "key27": "2fW2afEaGAboUF2kzJD1QqH9mYy6hCCw49UU7HF24KU7A9UqbfiydgDtcqtXDJwjqGW9tXLcJraxqwkbgJfEyXey",
  "key28": "2U5iYxFwRqNUZy8PDEJxBgAqYVKkvoYGD568uKRYXSMxT2FLn6EUGM3yye1hMhwJVRm7fkL5puCDYQSFxMCCbuEY",
  "key29": "63tpiL1jTLSJ4WjxTQwau6q5VM7C871yYFHN6hQpZmpU4ydv8sRUuLUDaS17BzFDJy1MqhTddovjDJTfNEyRX8S3",
  "key30": "4orTTuLNoaupyxeaUthEQQfoy2nSsrxsAAkQVjkDJN1zfxPXM3ZBxdwEBGCdSCkkFHSm8PMrPU3i52ViNiuQuTej",
  "key31": "5PtNAEad4myS4Fc5fvy6ntoufm4aSvLWmF8GnhxcoEQfwcnvPDAXLPNZXpMq6LSzj5mBLLyv8txrgbTatGDmrqau",
  "key32": "3THpVt7xCeVRyjkX4CPHqpyeLcrKYCEsX9UV4TXpJmTSconKzU7Sm9YyY2fLSvQv7VYzYYMQwh2ftuJwjmFnWsLm",
  "key33": "4PdwUNHBCu1h9nt1iXJkF63ytQpwm6uBSxvHzhdFAwyvH3GXohd8iHCMEQ2WMVhYkTVMDsMKw2BL1DpNwqt11UYT",
  "key34": "7KwurtPrSB1xxF1skr6NkXyWTdBt2fBfw4wTVRMQp36RmoYEn1VY1pCv8odvPwGyguQGT72rqfFiXJqDzQBLEjc",
  "key35": "3egUabvBKApWMieeWw8hAtddBSsNikgzYA5pT5Vdzs78jQqFRcNWK9QtLyWVjZoFQHi5iiiLRJngq41th57FQH44",
  "key36": "5x289TVpc9u1LXWCoPPcqpR3k2k7N4a3JBKdFDrdRb23yqJrqmWGQAzXE8ipFiasaH3untc7e6foeGLQnJrTa5kE",
  "key37": "2nEajrJEu7H8ooojCPAJu4sZNN2zKf5xBznEe2cfRCsBm7TwNjjrXdCMo77DXoV4qLLWWy8ttrY1fdC3FMy31Tin",
  "key38": "X3XkKrTZjzhAihEdFeE4nRZpvkCc6ov5VUSQ2Jbu3natoYK45Yxn4LVx5h5LwcHBpBRFnzRCUmefjUpxZjeNYPx",
  "key39": "4D5bdTfAx8S4imHQCPAJApVqKkyDqy5iQBioCTbpZP5xKZ64uu3CFq84FavnkhpCXeE3QsCV5qBiNBX11ZcJ9ZTX"
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
