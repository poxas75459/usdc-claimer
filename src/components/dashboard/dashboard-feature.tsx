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
    "5raL1ipc4LETPifzCgttq7L7SQEQcSGbBzqQmV5NFufb1nHQtrE5vGuzM6QjmzJpTm2wjMWcf95FwEEtFf9wZwj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikU4XnWxF2k8SdyuCy4nYkZAUGUU64Rv8kE8gxV6SbUmDg15senihvhrCHHGACci9rz1E6d8whdwQ3AvQtVxyN5",
  "key1": "4fVt1LDbCkwNdpmBYEEHdYpspeKnMxai7BrFpF9dY4LNx3rXpZNbKZ7g1vC4Hx12hCUTjw8iTHk6JnkKxuLgGFzJ",
  "key2": "5meXQ1fzU46ZhPyffvaXj9PTepnyDHPmqbdMXBw6yoVykwLDaz5JhoZFXS2hjkuWVJkW334VPrfgZNeXkaSsbKk",
  "key3": "5A9iN5TE38yfYUToWkDVDGo2PTRLP1MvG3AbcPc1jGPN5BAw4sj8DLMaUvr2E35NmX6Vj5d27sgvfEq8QNkKLUBr",
  "key4": "42yA6YQNbcJvZdBrtzufdfPMzin5jNxaTEYCHD1VcdNYKHMh59NJjqZiWX2bYXEtcFavRNWz88ezfTbNnHF7CCdQ",
  "key5": "jSjoGnqZ9XxzvrjXNRzC4wBxXAcrPvNHDa4jSzJtv227KgEPqVCFqTMV6EkieNWRAjQNPJgEvqAJKm2RSKEEjPw",
  "key6": "34Eq7dQEWCYK4srxNyiXpXdTJu9vEorXf7zaCfJDRuk59Ce2yhZqc3GUP7ZZzaUV5w6xnhAFrZw4UpfV8j33y7Rh",
  "key7": "42BCmezWcDJVpg2jBkhMQE7tSof2jb2PWknYsmZZXVvDZMyVoekkcwB1NYF6yhgvtbcjSjRKQXdDviYxeYxpt2sN",
  "key8": "4fWnxDU1J2HsmnL2msuDXKrz3qZsBCiC7t4gfzNWL8NztVwhtjZAZ3VXK2LnDVgFkB5uHnDHPoi3xz5j3Qnq7fPf",
  "key9": "5YwzvX1Bmw8jFKrsdwEWXhmeuBghSgYKCoTerbj4mWJLxaPRxMNZb9ASp1AFf7FbRqebHPBj3V7KjfT3ipc2ysWM",
  "key10": "2ebYCwWWX59gwmpUi7T7raWrAM2exKvTL8aSJfn7aVyEXneJDSCtPDMdqFAE7CjGTvteyrHXCDKcLQ36ydum93XU",
  "key11": "5Kh3vek4p7yBcY1JoyPwRYYDnUHWXFeBhLoigwupzxJLVKk66q8wJJeL7sg1LRLtvMGaKboHJJmjfQnHwBrenpSy",
  "key12": "3Y7y4hg6UpMWF627y2WuM75Tze1MYUhjRyJAdMEnQMgwu8DcYEquPDvQauVhzZVKs3W8kQ591CdxwdmHcqGHvrrg",
  "key13": "279hZnP6xR56pKdKPf8JnXZKqdpchXvRTje3jWdcqMLhicJ5D4r2AxCHcQwMeGQ37wAgysHHa2WamZfV4nJ56KMp",
  "key14": "3WybVDFyVXjEsRrWErdaJByU1rZiwrYkAbtN3M2X77YUqdwpN3o94KtH4AzbrBCr9wrihMiX9xGeQuF47tgPhYp3",
  "key15": "3tWjGsierhqBow99aV1Fcn5kLcnjYk5sHAjisAWXTXotGKexNjJSfGMVUa6Zduv6Huxc3SQo6TfqXevhZaK3bCM3",
  "key16": "2x74YAXviwvH7xGY6FHuaKuaRkif6cnWpcyucGki8YwS2ELo6FpijndHLPo1ypk4Jahk7GmLRa3q7QdBR3D99YXJ",
  "key17": "nQQLLXsfv9Nt7XrmNpCkchQz7UEkferS2W9qm8Nc8CHbrooPqH8QMJ5hgk2rgye51w5ocYYdjhRC6qTrJo16HUu",
  "key18": "kmx9zkSDfBXgtZ5ShrzR7mr1EFmXHS5PPXNMzUYXjovmdR5uXVz7KhKBKp4bEEjec38176jB3eoKoij11LBuwMJ",
  "key19": "5wDYiVCrd6LaTev4E7qLoLW8mHJKSLw6jaKcNxF6bJQQmhxKZuZm7SG1Y51mngVTj92LicwgyuM8wCKJbUQ53Yqh",
  "key20": "5uv7u5dnFLfskj1ydBUvcuRwignqhEcbPa5MfZuBWCFpkwi4YJBwKr4T1MvHGj1fj2GMA5yBMW52NAahsxDiPr7v",
  "key21": "4HW2dPcn7Zm9yt8bSeUrorVyPRBgA2TpAvrsU7XhoDEyXqHxeg5oV7F9zDMwvwTsnA5AHYJR4XmqkcDMDgnH6xLS",
  "key22": "4NDSabxASxEXiAXgnoapx7Xqw3mZApyGhKvcCHpQTniboABjEUQasRPbieaoyLmFpu3V4ayD7TJrK4tWoD81yBNm",
  "key23": "5upe4gPYY7bHgFjFizWQr7AwTYaqViePRXTUhpcHvE2wsXQotc8Ns1k5cisXsbvsxtRrtPK5qHTRQESqhHH5SBXL",
  "key24": "4kpSz1RY7Sf32dh2VdLEX37e73vjf8UJ4fpgWhGSWEGRwUkCLjwuB34Yt8DaCDfPz8dEFbBmQEaiYMUpPSZ52Lq8",
  "key25": "591VFDzQFeUFqRwfdPz4nZ4TUyDdAYvDrtxKSmGukPjC45QAAQi77HCMR1aotMVvwUHQ1KsdbN9zXkV2Q66xe3Mm",
  "key26": "4rmYwTRQJ2M92fR4X28BkKSpg3WMMngHfzxG175ntMAnf8AwiesKLH26zgvL7ZqM99vrKZPKzYYUVXCz61EUABcq",
  "key27": "4Bdbo53wHpTbufQY1Pfrgz4NADEUBz2JYkZSkm52HDFwUKoQBXauQicNPRgPHkqb7vhVKuD5Mdbz7DXuKcLQjkWw",
  "key28": "3nA6C9abJSEXWCQ58LXyMGRFNKKSwtT5mDFwpL4DJPyZ98HPdyhfB36XcXycBiQiHTmG76B8DjURYAh7NtXeFiRv"
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
