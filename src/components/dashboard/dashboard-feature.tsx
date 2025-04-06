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
    "5J224EHQMNyFBLJEmxt96JLwuiBWPbFGTwZYyWzpjy7Yk9JdjrBpNhFkh2azDa3zhBfnRA7eGLceqLd6QPgcSXUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWh6D48Nn4caZGo5STxfJr9xN8PCPfWbP3EtFxvi2WjaH4zKM9fAb5ANmJv9zayxG9C473bzdxuE6PrSuZLYrB4",
  "key1": "64AFMnLnnUtBrJ8e1g36FSCBAb1LrFQiLGw6R7Et2S2qtQXt1bT2wmv7GmLE8tJhTpXpshgSnimXYLxuBavCxWLF",
  "key2": "Co8Wzr9gdT8xgLLiF7aod22aZEvDHa3dRhE62YKGJhBdHfYtFvwEoNiRuefKgKhPwYQpim9TSiBH1ft1vWKW1qi",
  "key3": "AKSpnCCjq1SJvJM625Tw38Uk6eHnAHo4Txtov4r4tZv56VFXcLzGHpXyJ6mWLTLWU4Jhhz2nBq4YEc9Keu4ujD8",
  "key4": "3UQtM2PbEHfvwGPimoUKfTf3aJnkdpMU1D87mM3vPK8kfQRG4nzJAMxRfQLYCZrpnzMk8xAuG4129B44S6MQMryi",
  "key5": "4AQedTpsGeM3cXU4aESHbqf8A6uit5y3ttBzuLVeWx5naq1zPes3Ux3xSKwQ921SkVN4YFAY6JaM45jZy7d5XtUc",
  "key6": "5mTcNVkGuYtya2n7NFyS7oKR2JzhHrxP5rzKaHiQGkjDg8dpxNrto6KroJ8FYCyqALxwV58iQ1Ne6MdXk4rBchmU",
  "key7": "4rEG8CESYTHohZ85U18X5Z9hWVPiT5PmLQYAHXiuL4bShncSYvifL4pQCJ19YuCraVBo42gmWTrFXkSHzM45H8CA",
  "key8": "5TD3HFqPzy2rWsmsGF1CY83rMjALSAGZN1CPdpvApdtAyWfLxoujgAr73UASJurxQy9ccbjNMBjWXhigXrY6vaCP",
  "key9": "G7DN7kpAyhxr9K9yvjK695HxbVtHD4NMdrJwxgS9X7XRaac31L1EZvWrU9AEHEZCpCgNBC2xVwhAJ5d1CfaPvSy",
  "key10": "1W2nKNDifJQH8TDcFoq8fzw5mKFANXQkVFVZfXWUCWgNn6eYpmuXVHVQ6HBck4CYYxtVAmshArFSWtxGpTsh7Da",
  "key11": "5ksfPQw7K5hw9XsQAv7j54Kq8YDGmcJGsQmCEZTAnofHdkZnY9ApEHESdMnkid26ZTjqxMtQTPvm3teagXXKzEw",
  "key12": "EX6W6b6jFpbG8aeRHaQkPtBKub6zsHdnJu5gpYd9QtPmgfh1szuJTojWUJnsqPHSrq2CRGcoeKFEZgXbWoo1hxX",
  "key13": "5oESaBMwNvn6Sj1kAbnLrqcQrc5A9HUryFmtBRCNJcgutgUAMQU7zjgV8pDqdDSvPJo9EjvKVrtURdNtFLHqCXBz",
  "key14": "63C8s98712FqNAWqLdvJDsi9mVh3rfvD1QUj9MP48Q5poDTEBwmgkQCwxiH7omwNdePaRQXZfY9m69Xe6DNNvYp3",
  "key15": "4ruAZU4zKd5kPSDVxsxo2Co1erApn5Y6dimdbQ3FEJTpgyxs4Pw5dgMyQkbMDQnWaKPwgYpPHh4uBVjJmjNUR2sF",
  "key16": "55fZMwEe8wYcUKr8G1NXGydCbY7KNTKtDNFeZec9uptCHycREHHrjVJyVF8SXrR3hfkNMqGAtqXzvpvybdMGSS5F",
  "key17": "5cJpQ9khgZqMhfLDFAP7fZ6UGo1njqenH7dwic3EA9GGai72hQwMRhXhevopy7E1vFDBDScZ2Chvm568HHHtPjoF",
  "key18": "3aprngSYp4Bp7fVt8gz1TAYSCQrXQgndWSup1siNkQXFbWAp1XrjyrAtbHQDv2caLwimTX1HEXW7XKFYVWnyc4gk",
  "key19": "dxZtCk97uqr6fxMCgksEfkXTBT14JygpTfACBs8pJQRTQSaGg8B4njRXWyn5Qi7E7Jz1dRHQswh8Q4xtpGJNe2T",
  "key20": "3QCXd9uZhH2dfufmU2QSAWLDhWdVf23j8zh6b8JNJ6Si3Ni96zTz436NLFXQngnieR7HYVrQ74APr2SiVHQgceTG",
  "key21": "4VaZSBR2K2RupfwG7CqRXd8ia6MC5d4tLTMynAjRGfnMJrGmPwG9E3wSprTq4rrqMaXcsAFpKjXN1uoSZKbEoj6g",
  "key22": "2Yrap8HvK8eFnGPLatVKU4GXK8ht3GSwMeafLvKSanMM2ZEiN8ViYUMWWbkv2KBMYnybGDDESndXibE34VtcxQ7T",
  "key23": "3RDAPL58xidqcUbhXHrgoB45opwdoSV549avT2vkVFa8G6F5DeJfeUVUaMHaxBUUAm8uVMtrTyat6TBP5yF8yQc3",
  "key24": "5QpfTbP67Efdn35nLNeeifAirCBj9m3qUi8SLYoMueHLLcw5AMUAXJKyRvNfi2yJczSKwhoxnYidtrHgz8PhN9qB",
  "key25": "56VgrW6h2akdQzLZo2XrLPqZAnZU7oVno5gYE9dgrnbMb9LDmP9FiCTcCv3dUThcs4rHxW7ijCMaau4muCCEbdn4",
  "key26": "2PVQkSjMwE2BeUJyEJyo9WHPAwTa4w5NtXTdQbSYpzp8RVetgbuMnpQNT98vqeYvPzFknSwGPwXdAasfvojZVwDN",
  "key27": "5RDEQkhtTEiGRkg5efeYUugeuYXK5c1TMhmTHavsELAVdLYxuDvHpXEwN6GzBQ4SWWaYpKs3Qot3reoEYbTEnrHW",
  "key28": "4kLVqiFzsmbuyYHKAPzLUqniqDSSdFCp4yBzwHe5t36MNHYVXJaM2RL7mctMcUS6Kv5cma1CKcLSC8NgtTyzG7ht",
  "key29": "3ZWNE1AECgLPZJfTs66rcKh9YQ5qsqcVLNtzLbSkHXiQxvjMytRM4vH4cbtFmuXcyj5dnorUNx5ZpNvvbk545txR",
  "key30": "4qE1jVXmEWFr591D8sh8TwsjJ5F84VwWnDEMmoCQYDrkSAZUfEovMD5WXC7SnBofbq5LQ8xMpK73NVmqeYgFTSja",
  "key31": "4EDAYMG4HZoJALyLLzeynrJiiJ3JKsqD3eTQKZ2iWvhGgUzWPprP4ZpiouHjZ8b6n6qESURuUiY6isHpuaxLehTW"
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
