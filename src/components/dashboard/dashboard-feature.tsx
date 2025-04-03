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
    "5aXiqVpjqQp8EvHrAgquPxYpTySGREGEbxEzwa4n6AonyX5MAiY7Vq9LpbZiUx8tMHxfqqEgm2bhLkGPCn2437QR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmmnLL4MF64PwYtLtms4vrMPSMgbgAe8Y14a6XV2n1YNjCU7nVYdJEYLt8vYzVJDBkzSnBEZb8s59MjimM1bZFi",
  "key1": "TXNsCS2kF3gudoWD2CnguZit8GLXLWLUPPPMV1d2i3zEYiyMYzRWrWZTZpqHneqGfoHzGzqhy3NNgbmFdz4Ktsw",
  "key2": "45fG6WkcXZc5ESbQes2imR2mbSZDhHXp4k3uafTL3DHKpYxGzBWs5fiMaHueGpaxTA4mUt53W258ndQD2T7STcVe",
  "key3": "5hQtJxSH5xAAFYbNH4Ny1BQsoNQLssGnPwUU4PQG5LV8CJgEQwXXScmEhsnr4rmzoFBzSubY1eXjZzuV35TiXTMV",
  "key4": "433X3XKqDFDTmMiYQ8qntZ3ktkYFfZWbwVHuroxFrbVsxW36gDSXXP67MEBrTYEkAH8FG7EohP6fvgs346sisonT",
  "key5": "3rqpdQ5JJHuq9CpQRe9bVF4v1NbKEKUkqk8kp92GyuQPKDmLrwk3UWTbeofkt865UnGymbfnW18dQUUcdMtBguzv",
  "key6": "3u64pCrcwSWn34GDamxKDw7pxpPJouZW1GYqwD6Djp3EEjkGGQ8kePUHUrs2bgcaWrD4PHDRS5yoiM2nUe5FnDG2",
  "key7": "26oyTExqu3dnTEfg2BAPLXCFphpUo7qP4XKyqookup1bbDTHHwnE7tAC7eEUqUiMENUfP5Tg9UtCevgpN295koAQ",
  "key8": "2x56U4TU6m9jkkDeVFzrHsSCjJYjP7RtK3zZ3iqXbdhmWUTNrJMVimuVPkpcQojnodZq3VdY7m8uhHm1w2LwVHgL",
  "key9": "NyZabHRHV5qRUHapq8FV87ZQjBXyUtBbeT1hxhQZH1bdJXSiPR2REF3zYmCi3KqKXdtrrUzA1iVFkqNh5MAsaJJ",
  "key10": "AsxvDWYsfHpm8m2rJc6vBZiaaBmjBFZvwp6Ba7q3qhCznvtN93nPARHoEUpuBko5nZUWYh3hFvrS1Dhk8NM9k2a",
  "key11": "4jb1GCTTpJXN7YjTPF34xTaEeMFZ4MQ9KUSbuvjzuzQ6sHhJ9S9mUMuDv6txNgDNXcqkJ47r9sfs2Z65HwEngX7u",
  "key12": "2ugkyqrxqXEFJzLDM1wsfbPHG7BK4rbUZ8cYeevt9iCia8q6h26v69rERZ3NLKJ1fw1UkoNmhT9JQTBhbSA6Fz2G",
  "key13": "3zvDKPfwbDLhu7Vn5nMjpcyNeFuCXQggPeHXkd3WGoW3zLfagL2b3RvAnraJqEvKQVgDsCNherqNGFTtJGdndSjE",
  "key14": "56b3f81ZcTrLWvrGUKgQoGPSTSxCnBpq4XmfFrUTq5B7BFT8iiSn48n8ThpwdMm8S831sXh9DTZkZAdQKLJUkEXy",
  "key15": "4Tp4ujwJBUtty44G42YcPZoEBp6fFCWN6G6yRnYJzwahV3duFq4HMr5Rqwe89SMoxQeC3EeexwB5s7HCMBqyYHyd",
  "key16": "5gxVzbM1716fJAmiEQrHc6QV2FTvDKvintgTi5FriKqPCM3BeZQqfPjxhb5yzQHNohkZ8t7WTNrRLfdRqFN26FkF",
  "key17": "3fhQwWuBgbPjRdMwGa4J4Ex2zXkpk3KgF1cF754DqJoehS3xtmw9JG16EGjeGYNWHNRr41HcsEvvCic93ML92PLG",
  "key18": "5crRjmUAy3mgFbagD6XFzT54tnWzvJRc2mKc3REhMZqRhoKCQwWSAjQG7RA8mSJyk8BqH3Ld9b3hqBsSiSWp4s6V",
  "key19": "2BD5KWNESsEBB7wS4b3ep67DFhQUgsNrj9kqjvCKuaCXgr9u4dXrZvyvG9ffYcJbHPoKHrxNC56up2htqQkPnSjT",
  "key20": "33EEzJk5hQE4MycXqdN9QtCcbyLdnJvPGtWtXHoZy9foSdo2zNa5JSxfWy3nuMDRFWQ4Pwfh4LWMDs17MeF1S1La",
  "key21": "5jqR1wb8qrVbHvNh7kxhhK5LoyX51wDGDDR5XGM6z6MfSPyvBHgQATDTTpxQa3LB8QkGFKLndPWxbiyzUuHHcDPN",
  "key22": "5PxvddmkL4GgMq1NKDmiWj8CJpvK7nLYaPuozrsmJ2CFb8nmjM7yZBUPkEkmjq2Dfo6zTyhSADpe5VqULp47aof4",
  "key23": "5jYwcTLdWVHGuspLWQhC4KYo5dEcjcfSgSmLzRRYLVCDY9heHPawzVS887dwTtETED368P7R54bUex5k64PU7Tr5",
  "key24": "P6SQHx7JsmhGETtnmwqt6WJrzTBZAKxff1YbDZyShWpb1MpbAVe2A25Mf88eMHZ3D7o5P1BEmC2GE8J6ZT9Psw7",
  "key25": "4cV5xSSNr6S52164gLhyPnVSAgQrXaxXfQGqQ1hqDVidwBn8caBfw6Ef8XZu5s9kzKfF24UqeLniH2k46AUysyaV",
  "key26": "5qoPGMpHTSBREk3Gcau8aUpDSgnqteznnBqzQhv24EWY3ru7t2konZW1CLvRDbt63bwN87zjwFjKQeAWLnypZss5",
  "key27": "2bvsKLwci9PASLW6HgNoB59ZTu6squuuQNrQuDGazLJodzU4Ea1gahFUMT8eP3rRH7X91fmc1iKc75H9tsVAWLgZ",
  "key28": "26TamwUx4XhBasNE1Jw7nkL8HDESTwpxLAvwxbdpXeVXhaDmcoZ5aRtmktXfwSBGVgyKfSaFPNzuUXpJwFGbU6ZL",
  "key29": "63FYBzGKUpnDWu3EiTNjC1S1wtzeC18U6T4TRo6mj8ThwAqdygdrRfwcThrj7LpMUegWdFcqd3pbcJAaKjXrzcfD",
  "key30": "43YGyjKgMrZKe5xeRjcCEQWudzz7Xc6SNrpwgnN6jD6MTYFDGjX9kwoKiNtv3dkbeUd3NBB7zowJJV2j3ivgZwr2",
  "key31": "4R9uN4ofX7x8ziNW42s3MsYS2EQtn1off7QmARqqqAeaXvKhUr1XSbhk6Uf2opUXqeqJtWXsUBJPnzAjs9pTZCQF",
  "key32": "2Caw3vm4xpRUVk3yb5t4mxzjgsVGBZMGKnJmaVwgr458s4b3DcF2x34bni2V4AidV7DEdbgBj9u5rwzd2PFuWGRc",
  "key33": "4SuBziPTHjWfa25VMvxMzYr8ned2n47JoCrwbc7FTPUKGVutivdbMsjQVqz6BmjU4Kusr9fQRZMUCcTqrnk778Kp",
  "key34": "484Pqw29uJjJ2rbAbdKUpU7DfjTepF55YwQrAmicV8emetab4DLppTSQH1tJEQfhvqjaT5juJ4pTcWBCAwFUrU4W",
  "key35": "3v2dnrejGYgy9suT7SvjwaVU4xpbuAcTQWLgyFQuDb4Zy6YFH24QWm9D7jsKEvqCoA753dnQ29KcZWCTDF9vxPsk",
  "key36": "4FN1a7VqJ8rFrekTvKDBYgx4U48gb9HfmHW52KENbTUq75J7AxAxAxm85o4JeKTwaA1EQ94ggdkFVPoAFobLpL9b",
  "key37": "nxFRujZ1b5kGgmpNsfxwrV3QzW2k3anCkfu6cGrJQGkcBSiearThhHtWacFmPCY4gwLM8ZKL9vi1ULidFDq7J3M",
  "key38": "5DxzxbX2nRomPG9yzdd95tgtHS4Y7PFtSGmfHEZuQpjqCceSF9KTUqWZxt9yDpybjbwz7WfP4jJ8XdQ8fEWf7Fqj",
  "key39": "22WENEvLHiTzyH8wDcpvX8YasoFEGk2GkLbW8g1XHZwqBV1ieivjq5hzRaB4t9J7r96jwH9XWRXWG9bzn8Uwd3LN",
  "key40": "2xZP8FnwyXzqQW4adFuLqad4t82WSf4MwN1AhYQxvpAFrrkfkfSwc1WYBiUJx4bi1xUSEz4UU6WSM9F2SLXeCVwn",
  "key41": "52yVECw5MDThGvep3qyKgMCxGnQWq38fbvVQ6MUWriZ2qXQXAZEZsBogLioT4ttJbcbUfX9yx83FNLK55D8v19Mj",
  "key42": "XWubq4rUmkrcbiRkcLJfgJNHSBhRzT1SjhBZ284sitWhZCirKPiEK9zyr6MTCci7KEcDrXjMbdnF7vYehQfJRLr",
  "key43": "5J81KFrtxtS5bA13euQRNgwKSkNp1EBQLySYk5v6B4usud6GuWMuRmKSRDapejsB4Mj1Wca2rzBKbXNSeWkVUxqy"
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
