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
    "4RmcftpZUpBGGafUqmGd8miEM263bqSJcfHXPdHckRMz7LxP946NRFV1qaYXHWYHMrGBh12bReHc3bi7nzMfC8oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CitTsMTQkjNbx8PG2Kv75DRi6YX1dwvCSF2y7paMjLy9jdUgREgGEAZg22n1VMTNVJxGN1VjEB4ML6uVpvDb6v",
  "key1": "4AYpownkU42TAbqxFvtBVknMHTN8hnU6PgVoLR2JunSGSKyAbB1uYDHpHP2fZ9w3wAXDr9c4S1CEPt7ewg4J8B4Q",
  "key2": "5rUYu9ptLr2MYYXwUzfyPPPYYJWa1ThgpCkZAuMMRkLkWaJMZrEZ3gGc3QPErbf8wPUVwJci6afqxKP2b3YAiAnt",
  "key3": "3N3euJhZmJDHoKQcapux3vLUpBJ79DowbPVRbeX6wU5gmGNoByscgdR6WyYSMCJPehauV16Xbeaknc7tNK5fxp99",
  "key4": "4VjSk1oc5Tt2GMH3iuF4CyxTRtN8dWHthhJXHfV8APAm5VMhYB4TqtUBW7R8fykKtPm2xUbZwvRzrd1bMg5FnTPN",
  "key5": "4r4m8H4EvHvD6yedN1BKrEvwNZRaMdimVXySrJRDsWVhkFNManYMhZ6jBB5skWwqZes3NChLv3XhnLLbT9fMY2Zi",
  "key6": "uWke28b2eab8h6F7LjQj7jA2yBdgsPG8Ph8H3FXUsZXD8SryD23g8ngNahnWhDQkqN3AJtsKDsUd6xKggqyb3wN",
  "key7": "YmQEMckyRHuAJFqEkhBbSkEkBCnmcBPifCJgnBjPWD1R9YbLq6t6jHDEVnU7WHEnRPpENoUY39a4keUNxoxytho",
  "key8": "37oriHnkDMeCaNYGWgKbgk22DSn42jP3QvrQW6Wgrkg7EyVhtXsMt7b1Z9Ymfu99ASSxdXFaKX6d9Ft5UTrrGVKt",
  "key9": "4jXFxmm7MCs36McYQjKnRz4RTLuGoEJ2NR4FL4wxyKp1yLpgYDQ6ZbNAtrdGmmyoNhZMrrariP12Qcx92aSEZnKR",
  "key10": "2sY1My9J9KbT2BWR8yWvaMojM2RTaDbYNhoCU89rhNDxjxamFRMgzfGeJmyBwhN9g4SLReES11NqAY3r2kZA5Uqx",
  "key11": "5uQ9TTNoUV1ZWXSa9E9vhbwct7rT8UFdDhyQCeiqvHzTqCSRg1VujxvFUtsvj2gK4jpbQpVeWvQqD5gyDKdHUjHB",
  "key12": "2hA9VcKMmydji6JnALW8UZuZW7xwpJvgXUmdkTFHc7ZJC43zpwbkg1ovUc5A9RtyUDZtXYCue3kPEoPa31B5TPB6",
  "key13": "2zLDt3mmdsNA2a4vVE4e8xB7TUqcCY2bgdttn2FYCjukGjsXQDdXqc22jMResTgZuai2HTEGzrkpwa6pNGqkxJtn",
  "key14": "4YcyiaTAaFPjSBvU5xtcemZH1R9H8h4rowiEJHbRSirVexSfm9XfxAg5Ghf7YfT2iM9w5iUMduGvMRaAGzRsmTYD",
  "key15": "31a7E9ZRhCV3zKfWK3bEifNpdA3CpXiNkBCVhf5NM3d853x9pMhBK52JbLU8HSNdpVE5Js313tKvL25kCxQQDMC9",
  "key16": "hyo6GboLp6u4LAECiY4L2dEDbfGTfAJjpXL61YatWeKZCbFS8XSfPfmRNQZn18dcYvEkWbAcUssK7Yzs2j5iCd5",
  "key17": "4aLjic7YgdoXYDyfqZKJSzwLapTerox4GPVpRwiyWtPAxyK5tD4NHDRpTC8CspbMeuWbDNmoVv11fmfwGZaG8xfv",
  "key18": "Y7gbqS4oPfjunra5uGiKUXuuMtobw44fMCSarsZS49SdnT9FpDfQ8ht9gH7ExyXSCeWk7EQVrVxEbTDeAp5wzsJ",
  "key19": "65awnZ5gpGerGUhSDomUVMns6uf7rPVe3P76uiKoB8T84gJpLVWFAyA34kePbXthpeHVg15zwW6wSrQ4aNJit6JX",
  "key20": "2caQoTCLi8ZggSiMBHyt7Ss54d3yvkKwgYrPWhu9y8A1q1XnY5Sstti9m56Bs2FH3NJvqaWt7HafsVkiaLJPEDJX",
  "key21": "3tZS7SttE6mNgi9ZSGybUhTWXMESx4vvcLnGWRFRdYLAH8TopN4UBSZWzAgSYn2f6E4DCBvdMpSfmRT7QHrSxYmq",
  "key22": "67JjezLuj7VSF6ZeMQuPL1wKtjCHFgbavSb3MWBL5Qen6og25scniyE5ePpMprKWwDL23neXGaTtp8aPKdmpoJjA",
  "key23": "vLPx1qHnHTE7GPLdJshqsv41MV7SNTVS4CSWNEc8gFaqCea9pdYxcfzZuhyHCyLcpimJTGL87NVxCyAETZouQ42",
  "key24": "413CkypwJEoRGKitbdGu5KBDGDbDReFLM4zHWdXjWdphM61bTrKAkb9DG8NeLN9NG8PT7wdv5rcsUzsodWKpg18Y",
  "key25": "4BnfTSHB2K9xdHrxgJW7tc6wAWAyWACKKWcXzK6GXjCSP65daTfomVnigtJoSU1W1NznBPA388BB8neux1J4j9AL",
  "key26": "48NcAg7wbp2TvYeVc9ffEgHb8tURz9a5T9PezYvtzdWGweQDUEdq9So8FL2MRo3SkpHGK8LdmyND4kSen5MEpkMe",
  "key27": "5ZUS3d7SBhYdnFdin9mceD31vdb9wdZMkWqPV9gPtc62xoUxAhQFgoLHKx2MhLsNYhvfk2SUnoSCbr3ENJPyjozm",
  "key28": "4yibj7WpGh3buCmJ77PCFk8DrUfRvbyhKpKYyz3fZ9jJGpD8yoTigoYGGjS6B7Kb3CiT3pVS4F3agkcohnthg5aM",
  "key29": "3nJ439VAhYEYzwbDQ2Rm126b2EGyAuVigBaVkJ26icDzqfWbngh2YXAGNFcJ5zEeEjvb44QPHWRJDKTHgB2KY8Nw",
  "key30": "3huCnAeBh6b23GqfTCxB5QMEudf4nHZUP8dPEDWwsSrWq6tGESaGuJkuVV3pt6jYKLtooCrJfjFuRwENM8dS3yzX",
  "key31": "2d9L3nFSqvVHJ3jSbUbz49u1yqjnKFi8rhBwgTNJ9p6aKgCo3JYjcmj7TAQpjWWzkjYM6SnjZzpjSq4cm95kfE9E",
  "key32": "5RK6ne6P2ycYqAuFKzUxfsvooQL46EFMgyHreFQW4L4wko5JVCTG6uy85keqHnjDGrTKUrUJfgYTQ7ES1YwyfwwL"
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
