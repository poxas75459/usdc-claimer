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
    "3ink1cxiNLM15JCZFRih7dWEJ3XDAHqzVpviENbgdYm7iJbvXALBX3tGHQvzZZoZTG1hFT6SrK1s2Zz9KD7Mf2aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YKxdBR1iq4xjggNsVdCRUHfk3DA9atVX2vVzEF3uPgyPVZKprJnJfSgGLpRcUx2bx2UpgmV5tAQupNrC417YHG",
  "key1": "37k9EXJDhvRViVA6RMtV5WdCoUf5saA4UQLHRS6jfPmNcH2BTXoA6KGqxsm5DWLaWE5wQWCrQ5HaoB6dtXxMWUtL",
  "key2": "5MeVsshLNMiR4WUH5Q38Z1ryQNUwXF88agQAjZfBPboVVbcRUUy3MNTTGHtCN85YNKbg5578tNrP6C3e5iYSN4Qj",
  "key3": "2a4g5orHbk8AdW8VFLaejfbJzYSYCX55hcREPasNjmDNwmREjfvBiYDKFxgeZKLLL2pMQafvFsFjVyVitdCVPoZH",
  "key4": "2eDmsg2yaf7jHieAyisBGig74v9yksiqR2y2U1TZns2fWCVrNRAWqBJJoSeoUVTjJPcCKeyK1SYN6QHhK6Nr4Jef",
  "key5": "5pya3rL95BWBo2aPZz2AXkSBK5DQhykKNrxo3q3sn6xmpmh72R2Exsd3QhW2WQec6tLjxMAaBhdNeK4tBhs5tCFU",
  "key6": "3ryF1aoPLBq41AXFYywW2dexMxQQKXmnxg9hpn7ZrWkPSkAxCH276yTMunu6EGb7T7MbDDX5s5KmdotAUhNYnKoK",
  "key7": "3WQNpHktygLbwD3goW5azZVpiLcRVak4B1P4Qd3gVcnk2X9r6c9hdTdHe2YJdz2upbMrszZ2sp6bUwA6fHbW6mkH",
  "key8": "45pgGF2pHGjPASupqDgPeT18qYVPr8XuJA2YgCSWVnXaQek1AjyzytWkSw6p4LFmapEkf68TPhSng5Bfo8k2CwNu",
  "key9": "4g6oERPr4jWu8WQ3pF5trnNsRqsCtBZ66YLwFXaAZu7cGDv8NSis8txRahbwAt4q9CnbpZbKgYG3BE6KMpiaUTW4",
  "key10": "2yj6hR7y974QQz1RUo85YYfwSA12p2vqNn6eBdCTZim7dybFmnrnZACBQgFPTBHE33i95qwuoRCKDqKHCTfgP9fY",
  "key11": "5EWZsKt5e4gmZkQ5VnzhCrfLGHxb24H2Af5PhbAaEShZmjCgiqZjhnuoiY3ojrsoxSjF4WQTtZyCmD27oV8nzAit",
  "key12": "GXZPQ49zUNVnCaD37zP9ZaPC5AoL4hzBxuCFhFNNkQUv1tPhB7LWt1goKV74PKrxv2Mc27bZ2QbGbxhKQ27aTyQ",
  "key13": "njhwykNMkBCb4JQx5Nn68t5fUGbydBvADnD2QaUQJYqzQeECFsPtpgc4Qg8YuCkMyQwcr79KgvUHfRF92PngnZ9",
  "key14": "SmWtyLRmAmQhreRWktvHVsNY5mWuYod9eTxchxDutiCxy2RzmHaxY4iUnozkAXxMD3eb55Arqu8ctMjeN8UquTQ",
  "key15": "QFGBJJzJk3JFqJRZxJDXJG4DQCmctSDHqfq5zqyEj9k7TuPQqtpQeHpAAbJUEd3GZq5UB1KR5xL5iauaSfiZgP8",
  "key16": "dZZrHC8EojSbAuA3Lz3VrzfFqHH1opUdQhSUSHAdNCzpsMqp3ddxHHH1wdH4PuLLvmUtNtBHcCWFC3tgwPoR9Jp",
  "key17": "63Xkfp6FheRqz8kVxaAvKfB75JnZffVQYmRNZa5R1nZpLanPJySsH5UDfiVUk7T6gvhyuqVdJGnsXNTBkjBdt8vR",
  "key18": "3w52NkYHHBErDRPZbSq3Ur5o739qPGkkjJ6VGVYBRmXSyC74wRENLvzvbH5rhUcbV1ywmdGSMs4Z8QwGLd22Wy4T",
  "key19": "4gqnJweFS8iwJLuEijcz8KLUZdFYtnBE8gNH2AGzqnNkhujKNYXtd285gjDyCdnN85hfUcS7zGYjT6LDzjmoezMA",
  "key20": "46fKuTf9yeg5r8zbRj9knEfWhoy6S6pv9T9yBSMV5HwaDTgL8RzevFtmcUzPxrmoPykgV42T5mZskr1jidGvQi5f",
  "key21": "4b6FxvWrW2mFge1J1imwWMpHAXj9CAzT2T5Q4H724Xg12wAnjhRp3ozh25s3F8BzVUHpCUMgZCMQzrfV3tc5uWLP",
  "key22": "4peURtXJQyA8qNKssafWqkMytA2YPeBVGWzeA8DQMobdcyyB2BRm78zGbnmxf1nXiMxvCL2Dme9PW6Adh48Tcoyr",
  "key23": "5pFnsZp5idprYEUffD5HngJMtDFTi4tUQuLaY17qUmA5LTcdhwRzkuzbHaMqSywidKbGaq8ui7D9D39L8N456k6s",
  "key24": "41rwyFg63AX448eBEc4D8W3K7GJTzmDoGVK7MkpJksd3wE8ymq8djbDdFw8q8QoYW2Acr7ZQvcBNuPtXM6MpYLjw",
  "key25": "5h4TjLcintphtwpSbVCoWBpqLhAsmRUTzuSzBsxf4aR41HpQnZnVR69J6V5oSkLqdyXD8buReFYj1yt4rHave2zk",
  "key26": "39oejCtJrHwEHTCjfoXn9YhUyHLSsBF6kv5isrsyJHvSfZJubMsuKMhmgzFqo8bmeVJRr8petehwja8TJZm7cwty",
  "key27": "2ag5PbYY2csZJdFp6HSs2uu8htPL5pxt6TLqFiKpx38w2iXcPDvL3ZL1xp2R99NFD1K69WrJcVbhEoBymtFce4qS",
  "key28": "MHppQXCovzDGQmx7CKx41DTSqHgWMmnFEjWJWbHpuAGG9EaQrgdqAq9zrNmyvDV4ASXGgXTYVfLhokpVPwP5znu",
  "key29": "1w9QpSnhTteHj8XXSQvHr9YAweGkaYRdkzTCugW4zr9dBP6ujtwSHmBi7qWdMWswvr8JhSTUKRghiUYXnRRFxHE",
  "key30": "JAXL2dmYSaJmnMVRXhjsLyPtac1Y4igc8yRsLpQU1pF1ZHD5YTZy3adBFBTA6zguKfoF9So9yg5Q49CA43cuhGH",
  "key31": "3hVBSyKH8BCHW474xj78ZKSmRPF7TX8dKefunuvf9GnrikCJj457MCahMZMU41gD38y7mb2Bkq4HCRiXSCYRcqXD",
  "key32": "5M251LZTWqJrQjbzBhJjnjF485JnfZKHXrCFmMgMFMAsANwpcJY2wJEkMqjbL8XcdLb2PBpyp16M5Jha3djaxcWS",
  "key33": "ADUCYLLGHU3utQZUkm1DFLmjtF65P56FpUmnkQuVq2rmfgrXKP4Wk5qq6aNB6jvdCXQmkcwEGA3qxokLYUhpmGF",
  "key34": "2LA1kgfpn2RU9Rn14NXoyne95rvprJhyx1zzXpku66bzm2eZuZws67Tg6KjKLySyCMWGy6t8QEbH6zb6T7RkqQP8",
  "key35": "vFcAjpz2z6BuEHtW2vSjR4cN4mU3pNfMUQ7jmZfyvck5JH4DrtPPwUrdfZC44Ur48P7xKYSc2whvbPSBRKF2h6M",
  "key36": "3ALp3rG1pahca1xKnGFMShh8cHqS2fJF4P1WL3cScdjTVamZUc2niYXjKWySqRU4bTwMWxmbKSWT1R5xgmv7XPGT",
  "key37": "4uP2Pt5H4FVbmo1P1WZDXXt97X616o1wP6ZHPGiznjufGnEpJA1P1bPi9gBzbLyJ5e3cBQoia2Dup73MJop5ukDW",
  "key38": "5JNwAek81VtxQZXBfCfWHqZzuJNdeDzRcBzch6WzRX5VWkmVzrsK8FaVWcMuUS6jC45rzkbdCSL9qUMmnujtRPsS",
  "key39": "2B2heJYknJHA21KtwzgsSQin32zMC2SK4GF2AGf89WTxRXzjaXrgwhexfQfTfmgvpZk7N73jdtBVgiSzKYq3Qcjy",
  "key40": "5W9pBNMPLuVCekzmkBQ2pU1cPxUyRsnYmLDP8QYBWqXAw1zogA7HkZ3gHwkVaBBM1D9QNGitgPVryXJuQVfujCLG",
  "key41": "2vk8h6xryPSQkpeXz4rSX95KdgJ7Sh3E3c2FUEiaJVg5X8SdSFZkQmsG2z2bGX9o7nkFKGMKJRx9SCrpUFGKsuLQ",
  "key42": "44ALVeaMnvQvcw7afQWvwHhp41xDrpwxdW1fhcBM9ZRN8Kj9e1NF45J4zaGLb7EMHk2N88R7rfoFXo8VH633FkdW",
  "key43": "2xG7UEZ4H1bEVGgfwfdbUo53M1U7UGajEVFuSfbuQiPEYa1sxDJUitSyoNgeSP91MZgx43qA8K4qRv6JRVTDQEqe",
  "key44": "2mEDgdKrz9Gmv2tnTpAYddpRabwX8QsiJdjxf7LPZxJ7h78gHCdDNdQuN3QKQqxwZp21Kr1wEAQZXsh4VU97vH6m"
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
