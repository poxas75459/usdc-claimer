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
    "5eVxnt6M89kGbkLwQYK6Fs6xiVbrc726wDG9ZVKg1XFqd6AVSEPFJKJ846fEttX3h42JKXY1pged2s2WWyxNSTJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kc9kj2r2VGiWv1a5ynCHVBLFRQXZ3rvUAcEYFZ93o7pcXp8gfzCNJTmjWzSMMEm2QGmZtvW7jmrQfAhk4X6Cr89",
  "key1": "3UJC6fgjJYLBo4NAofCFcwAUaSUQhxeZfukQNJz9ccoeRukaiCZUxWf7LvxMvCqXZFTQB4GVeDjFhCoSw2eAEZm9",
  "key2": "3s1Lv7xLnBi4bLPi41nqdUbhiMi4maGtUKtc7vCrTwk41TKQmsr3obcP7opzije6kqoTjXkhQbtTMKwLX1B4xy9v",
  "key3": "4RVSJmDu9siq8MsGSJUMWJX8QUe8Jd6GnureY2DKmuCMv8r7KzVpTgjeoeYVSj3tGNinSZ9UrN5akM7nViab6bT3",
  "key4": "4dTmGgxDHhWWDCM6tzjt4i8G2jWfV8PySxR4bwV48GqvvUwC6hbaUDTkEDcGdbi1dtmCt8Q4VZWPCn2JfkSUQySY",
  "key5": "C6afBJX3Gtegvmsri4kWsrdaXp1jvAhw9EEBmyg92Meag8oMFanqk46rZMzSqsrfnU6HTtn883wiXj3Wf4FVusB",
  "key6": "54vtDTgEPuNMjGrwKX2uetajpPvqxV5MqTafbxnNSJ8hxi2CdLr7JVtAPmzdrCpqxPa6CZC15GkBE8inGnBKDEM7",
  "key7": "3JstDSco7Z7aqYqQNxjssWkqvDDjJNYrNdpAUqQv3AvYHyFRdYk5fZ3PGX9i3AdTynP3QWUNX2wSu9YTSTbYHDWN",
  "key8": "4Cv9HCBcFKw6EGVfcsGKrgqM1gDXdZTn2ZFpTtBiTBhzwNzNm8mjncXFPVnZue87e7Wuj23s4WehqcozffQWvNuf",
  "key9": "3UhRoEChzDepbYCNn8THcBoVMpre5QbVqmHHfCNTzgsBTFYPFeyecw9JUGoBag1hqpKfAAppGQPkMgwGui3DvX1o",
  "key10": "4XYvkpLfqFRGiiKfcP16Mqn4Pxsv3KNidNvssewYoATSKo7oq84PbmkizZYJQz6jWmQFUEPCCrt3JXGGxyB2kdHS",
  "key11": "56DhDY7sq3ZAZmByAJWHmYjzp3BaxHp9zSdxzCiUcRafkhB2gz7Z6brxGUtzF6vt1iMGCYq7LUxSzLoMB4V9FGJR",
  "key12": "2yFv1dGYAGRULfzLhfm11UXzabfsWjsWrL3ViYaNpbJgy6QicZwL4kEFrkR6RTQqS3rpJ9rf1p3aH2U8gehMCJeQ",
  "key13": "gRA43G76Hq2Lk3ctYJmdtVD7RiDcnSccfwQVGaVK25rm9W1CEfxiG2paHbG7FGpQYTVNNHkDaSkrsCgS3W8GmPb",
  "key14": "9GP4gh5gr8SaF4oL8UyHHEZipc64ygHToskWnniX6P99CRe62TUjynZNjuUjQ23bvjF8PVGCzV8cHThXiq8dsFm",
  "key15": "5s7tPGcfBQ95McEcicLFbFrwW8yA4i4T8HXzvLSYEPsTsGm5yXuyTv2QMudornfowtQrBk1pdpddCSfUXEPJJipV",
  "key16": "5GEjwAuK4bxHgKAgTjxY9VJDT8NnKX8vXnM4pePWKxmmGNs1iZ5xwsvk8dQ9JWNhfJbwEihZHvftEFJNvVPXToZf",
  "key17": "2k7NsneGRFSmmbu16aABhxnDamKtpTXwy1qWXY6s6NQhPUFAbPrkQ8Dq6CEzXEVYAvu4Hx2kikkz5kRCvX4Wi5qr",
  "key18": "3Ma5hKu2uVmva4Y44SQkmQriBNCJ8wtYryR75R2rwkyhdWTQgDAutLTuGfLeB3VidWm1JC3vZAxwx19Fn6LQLjQD",
  "key19": "3ViwaiHasjpg3T3Wmn2QN8JtpxM55MqvbczBxyq3TxCNmod1fTHJR5MpkC1GodxeeD87XYL9RE5oUF19bkfE147p",
  "key20": "5Zt5dTRBYTdK4BXRD5FhfTVsLAbAiYKTov3hV6YnmArDwoKshWiSfX9gBwDVQzoAToL8eRjU5cjKbfwgkVgY2kde",
  "key21": "2mq44a7V1a7z7T1it2e6T7o4yV3kZWPWeMZ2F1JSKkFxQs6wKG8r7yWwBkt5zJDxFKCrByQrQVYQfrtzw3ZLCgUj",
  "key22": "21KFVGsJBiBoNkbdvJpGkPxPM2wHsTat7uKeUJcf35t1nNbhTU6KZzh9Kuj2hR9gLHobcb8i6rm1UVZj5WKxDd1N",
  "key23": "5gfKTL4hGEgBEsoD141912YEGYNh97ZgdgL1wkpSyH3mJAYevjCmX5BaiEFndE297BrcRcFXzkKVygctEWbfYEAR",
  "key24": "4kMozUPZ8F5PNayxmjyHj4rY5v8mtBr6e6TF9rHY9w2ziGpk6iCPeSqoZYttnYNarcUdxb2uP42CQghfTfyQdEW1",
  "key25": "4qieqJyWpee2LhHiuUWpVEfL7tS14WmiGpRk81ykWVkdWtYV5gwW8gvCXz3PGFY3Gr3fmxs4TA1BrJ3EqRvgiJjF",
  "key26": "3eDKJbXen7hPGXH8Zfae6FhQ6UKjYUXW3qCNST3BpS3qD7TA5WKagx63RSRS2brLGZwughSuChktHVwcbtbF1cJq",
  "key27": "4EfewC1TnQEW2MzysiW9yghrpPcPmH5d6kkfpHmPNNitAV4o9ya11zBTGNuh7iwMS2Qt3WnQJ5zi79vjnVP7RM9m",
  "key28": "2mAZBrjHenv3WnKuBKHiCyVg41vwUJbnVdLjxvrUwKFDdxZFv8YUPnqkDVYtT1Gz4Cc1vb8jRptbM2rMMaphJsEn",
  "key29": "4cKnLsUJWpkfZ7UESRhKS47FFdHRCcHpxyRY5FpifENt8aW9rJWyJHZgYx4paMqZTES2QYuWDhmgP6uw8hk6bU7S",
  "key30": "3Tu3AQJUH2fwfMJ4khLGu231vUXUFVNxoEkxRxfRXcKab7nJhqycTYDkKYRqvdds3SZcgum1Zmg8PCK1ySAnwvz2",
  "key31": "2KTKdJN8UPt7LaGzppQVepACfeatL7EpyEBEsU2GtJCY51GEfMjfcPytmERvPizUwBWDnBS353P1V98gc4TErE7",
  "key32": "4x5cUFi82ejEhesRGh9NsrZwrKUqnmnnBK1bmRbajcZwt32pNvbGLrtTUe4tFYkjEFBxT1Mg542XoB3L1xpXHFGj"
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
