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
    "66vn8d6FFBbWhizgYwSKHTg1bFWsbfGSwHi45s58TxypWPUGLQn9YrEpGqcxKk25MVBBgkQgy76eNbTyZ4gPZ6AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EH8ZswWeTiPoZoXwxfsnrDuNMFhkXMxk7VCc4LCwuRo12R2ZCkmHCkkDmQq4FsEhjaFLg8wyce1g7ECLpffAFhz",
  "key1": "5ok6GLypw7f9ZwXStMeWud8Ad13oXAw91HvUhyP3Hn3sJ6rFpWv3t8GY2SrMeaCCmVp1982SM8gG9VY6Suf2Jw5b",
  "key2": "4djriLoaw74Cbj1LFgeTc5ghWXxLfebVNMopyADvojtLqRnUYr8xrbrtMkb1Wx6U6wTQsDR3YaricnBbM2QYrqmn",
  "key3": "4M7T9pr7pctzNihFnkYTnbQZ3Lx6xG2bh2KXvjpwUY9rhd24SABezrdujNq8D1ckQy8haj3emuxoBffEBsNs5wea",
  "key4": "4SVgnGqW3VSWRFAzcsgfDwrekesWeWy6uRb7wJwcmRxQtbAuEWdXib1rPTiMNLvXVK7KvNhHArCFB5bNUJH7KssW",
  "key5": "2As7WQARxq9pUr1RBRiM86h87jiyjbi8LLtFaybpnd7AEQfQf4BCdv97dy8enSph4b8SFpt9X5b7que4kD1rHUpg",
  "key6": "5YAJSA21kwKw6Dz1j64deSbui4orbP6AcHunuPGLj9eaawmiKQnyURQhvsF7hsb2kFNz3x4uMRXRPJDaWxJoV2jG",
  "key7": "54A8Vv2mVZNKNPoTj7itxQZRNxoDfSeYyWCCBRbrPbioqt5z4ypVhofxfzhN5Xps12ywk5Nhbo5novgEmZZG5RDu",
  "key8": "5LqyeeArsy5YjLJDH3zeWEyFACyNSDT28D9Ytzddnu6yA7GzhgrVjF5QXMrcTAA4NUDUrhVhkD65E7fANb4eH5WF",
  "key9": "4EezNtPNEjTRyXpKEEthhVb6RfJfGurn7VNMCvbSjDXHfmMZjNnazAxqZbbUS6E9X5Moq7MVVtPANQvXgVaVNy1v",
  "key10": "5H85Jnu7tCVD1ciy1XneHQgdazfLTL4UDFrFM7KzsXNxEsfFs8qfyyi1EeCmfswJv7XyuASfKDnucfgAht5ekENB",
  "key11": "4qF5ibtRkBd3429fb544aMhmzGnpv1WBCEGuyE4H36cQ2jN4JLHHtrF5HDKYpsck5VRXS6y57aYGxaGrekpUiL7D",
  "key12": "3R8KTbkc8Jd7xhbb4ngFDhM21wzz2XvTEvnQQAFetaCphKxhrLsWC7RJcNBiw7ZjUJVBbSycFTBiPxQ5BN2w1dh",
  "key13": "47U6dudanpYmvwNAMk2QeYsA2S9b4bRR1ZoQjiLukpmBBidd3wvx3GW4bv1MqpeqVJ2VatV6hu43xHzU53fcwAWY",
  "key14": "5Rue9wpzQ1Vco5ocdujAvZZGmLDXwr37LLkzVBUvbXrecgFi9Vn6uQzd6BAHXx4akZbtTjj8nfTU3BSRVNT8cwAv",
  "key15": "27Fp6W49LAmbbr2x1SF2kayFCNkEbsVWjupnoDYoMnBqUz85t4qmwskiBvoRADeftKMbKfFtEoc9MF4BoSfzQ4Hb",
  "key16": "5DC7wMZwiNPnXPbiu5mdtXozs7KEcpATsdc7AHbKXqHv6BNLmRGUUtCez47MmVWaj4g1wTY7EkxYMncwvXbXjkaZ",
  "key17": "638ZBS7SXNzB19ffJjiAtHGDx2eatXpk4pwUcz6Mh1Mwm4A5vjX7J8a2EWFPV6E76mFWxNcoYkjMK6Zw3N2gkAFu",
  "key18": "4bDKB5LrP5SjhtwKve3yGoVrjkLmdQu68VymRd5AmE93PUap3x6YZiV6emAFWLXcEqKj5YqCHbfc75ayhELXMMXz",
  "key19": "2KEDHR3tH1B2VnbPAyY1UZU6gbjM7nUtSALpoNvJiCUxXYW1Lja8zZVWWhBmA4ZLkhsCFZweZM8VnhuCYMeaSAsg",
  "key20": "tuBYQvQzKDoDZcjdsYuviRDBL8jmMpPVzLR8A788AeWenTFNK9qFLkj1yJQBJNRJpb6xPHiy2QQMaK8aiSWTKDH",
  "key21": "4p1ARfUSsfC57mkVKASNPapBpGfPKUQcxWhKeofimCiSC6UXBUZHaygDodUB5KSF8YzMVvT88BpyYzjgJNdweQWE",
  "key22": "3jcTL3YNZaCegUAtJDxv3UivF3ZzWdcUN8Kf9JkeVxG5FLKpFHDbMFGE892cB2LynS8msCejPBbo9EnPQHgDtMWd",
  "key23": "4HxtvYeh25CxfDgfz8MW9mUe7CU2iH4i1KdKPFjK7LZvp9aSuob7Mer98mKiDpPx44zHJLhkTLStuG2jekNERXjE",
  "key24": "AfmHzTTuMdkw73kdFPuhxFJTDUsAvBNUrZq8MpbmYVSrCHhDQjpVwfkMrCBLCxG4jwPv69LC6P24mELXem9VbD5",
  "key25": "5Qbmx3DJWLzbL4iTjHLMax6cWN21Eq81M73jNvVmAQUdxYH4bibbokqXonSQcVSr2gJfDh8wXYcEQap1Th7jsSqG",
  "key26": "5LVyxEXgaPDxVadoWGM3mXW7uvPD4QqJxtEKj6jKknC6mbE64VhPtTXW8ZEdred99qvMTf4JSHYzDw4KFiAUDxrV",
  "key27": "5gN7CmvghKVnoB54pLuAZb75F7gbB65iUGoP3xW4ZzCXuVa3mJo8QpnZRdoBRyN7WjmaoVkbf1PccVWs1nuKDim2",
  "key28": "4t8y1848b5aTfwGgq7okug5uM6QeUW7qh2MDoFANAv6C1zg6jEmZ7F3RBm9FpG5AZigPVYv8x1xQEcu5FzBgMQK4",
  "key29": "3XPPEvubc7of4FmduFSH8pL1UxK4QYhpExgze2oUqPAdjMsCW2PByui6Jwcd8Wcgti7AfAqzAy1ymcdyUzXq1yjG",
  "key30": "fW6wc9oh1zjB3BrfSYZBxqSgXMCXgC1T8Sax6Y9XdBn5ZPgEyU8xYAmpPx5F7ahweNy1k981JahRdUikbKhSNsF",
  "key31": "2dc5PXKuQXMjFHSfompGuF36jL6NKvUv6KbJca8Dn9HCKHXCnJo4pTme4L97M2D1Jndt8RZ1DhjcWEXSZfHAXXQS",
  "key32": "4sRMFcQ9RJQKrf99Dgpiop1bjBV8SRvwjUv7X1oWcuB3A7bqhvi1CqkwXdzo7bNdXVLZHhZN3oQCpVgCbsVBg8w1",
  "key33": "3peijyb76WdTLd8vRMuqwBziDC4y6dofVQPfDWA3Gt55KwLwffjFHXAaFYCQtfBcLeqUoGRdfbeZnJYfUB9F1dTC",
  "key34": "4YqQuYKwZ2MGTfFwBv9dDcsip9vzCbCfaAJjjZ6smEHt87MRPN2izbYMnZ9Y9K91gnkQ5smZ5qBNXJfR3P917Dug",
  "key35": "M43YatbSjx191xgGwcLvuDD9Nc7ZXwJLudZxqnZNYXF9SCCkKMoWcg7sL4JJ4r7mmvxWVWk1SZ68xnHGKWwvj2W",
  "key36": "3m3vsWKynS1N9PNxFz4nPRkvR7u5QN4R6xJgj3FqEXYM7cnJJpBiZpQug4CPSkThCZ2iEiUqpWrpahJJXr3ueHhx",
  "key37": "5SRVVyG63xQtrDDWnwEE7mMDDqJJ9LwJBE633UxFqCtFuyYJBkg7q2TjpAp3caCZK3MEANcZUPFJ91xgiJ5wnNnd",
  "key38": "g8z9HMGXnaBJqU7WnYq5vShK9kh2f8usieF8Zud5So3TpMQacFeXGbW9zrbvckhg5k56bMjxeQYm246ZSyEtLj1",
  "key39": "5wnkxbnxcN3tKbg2CREhoVqcHwCkL2nQP46Dkxw3873bwVwCBs8P4GVLJnh6RafpPzPmmhwjs1jVPwHRGdu29Bwb",
  "key40": "cjHE7142tWmmnVgLqdEPypno1gC151ZcBgej6difFGibbhdjpbZDGrnDJEX8Hd6vroW4MzpGQp7rG9zj2sFDVLF",
  "key41": "31RRYLDAHT2m1ipCzn9ENpNgYvQgeSsSpqcEdC4cCy8CSXmEt1cGS6zR7DfHDBneQtumuZ8VXTtnGWTQVUnw9ruC"
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
