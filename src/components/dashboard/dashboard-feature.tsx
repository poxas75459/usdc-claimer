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
    "3nSK6CEZqNp6CGeMmVxrVNR2tsAz7r4Xy5s27KZWJAfmNgao9J6mzcpJocpxfJPAmMyjVnrmwkSHJXJJQkUeVqhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbcMFjtFsaHgBj8nDcXkh7SV3KRo6AC9fomxV7FuY3RDbLY8riTgicMtYjUV4RmyMT64nLBNdHngAbSwaCkEE6g",
  "key1": "4YGfxKmMbK2ntn4uZpQtj59CB4rLwGW9YQ2xPiwE9yFrkqjub8zm9JAAKWPq6JnGNLtv1LA3ffhAHvwC2tx24RLr",
  "key2": "25LVZU6TCQnmczgVPybpfMDHcfUhCmASAQaE89k2N2ws3BvhMaf4UEcbQkZDxryx3i3PAKRSs36EgguYqNGEfvwU",
  "key3": "3kgU3wJ7XiTWFz72TsXRqdbM9czrBZ9djkWWYdAtr1jGFbKnM9B3rwr9Dd5Urgo9pDkL4SBXbbSuLctDnFGyWSqo",
  "key4": "4nH5HVE5Hn2UKrbBGWj9nS4BQMAKyx9f5kDTkyW28XpC2rx8r1uGQq4Ky6QqyHawwhc21yR8Wt285VGGhQsXph8c",
  "key5": "49TsbNf9uCJAGVMkPf4RY5ezFdWoVPJ2VuyFGmaxBSoWd1SQrGNXM2pE9VqP2W5spw3njs5oT6mif3nLsfDEvqRk",
  "key6": "2AgMjkvsXS31bNX2KeptaFuKjGxXFw3eJjp55ket65mvrWPqS7U4k4sgboMpDsBKU4YAPf3qmFmMMuMdSPLAsY3",
  "key7": "2scBrBEV9CnrGVN9nPq5sMzcC61tkR1TQLnUrEgRZrN4FN4odcFZwJWJHYAriESAucZ1V6pA4985i5p8jwXSSrGb",
  "key8": "n2AG89ZoVbu7jzRHP3YKFVhyXK28o7oNYpyybvasKsM6A13HT2KjMNg7ymZhqkECRBWDPzF4cjKvpehtswk5E1H",
  "key9": "2XPgDg6bwXxxhbv9tXUfLmdVNu74CVi8c7Qs69HQQb8oqq8u2wMBMSxaujYMDFAwnA1iFupp7FFdYBXw3rvpAZ74",
  "key10": "2iY6vWfikT4iX6MBpxnfVMVeH7smGWLxMLTxDYW6Wmok4PnTJ7ERbA4Vn7z4oD2WJT6xMhxPHpVg3DthZ9ns275Z",
  "key11": "V42pzydreBFjzW2HQySd9JWJ3DqkvuUYEJL5vbbzUGBwpj7Tx82AyZLnJtQSzW4ZhdhjEgjWGC2ZfDoZKsBZkKi",
  "key12": "2GP9JQZEoyMDZ4GisYt3QLnyXYa7uSoiJgKB1unvfaDhnhnGyULpVetsEq6krt1Wfq9ZNLFxsq4Mc5atnfThyfiW",
  "key13": "38FpjqzYKwtcBXGEg41kSfRgvd368yXXpZHwgzd5YczDWSpVtrhWcRQd4jD36LhMhfkAdGNSFZAgMJUtPpNefdi3",
  "key14": "2jm7UzH8gA4zzN5aXz1e9TDmy2uLiDMf4p7eTAGqS8FFS57oAcwmN1CiAVtqUPaHxU2UtRo1R6vgWFcrYTYibKFb",
  "key15": "5pyyaD2d3jEjj5MCXw2VLi6Z5x4KEjKGJNVvk7Zxq15yKk1ABtvDAqvb1vtdUoJrykGnEzMMTVrGJutxjU56ZDoK",
  "key16": "MYbh2GsKUTGsQXAjYsqRn6sxyx1L9vBdyCp9QJjWNucbUNZqAQ8izUknQtN4EWrznJRyFmoa9UFrE82GdkaeRLi",
  "key17": "5MYLZtLoxVJeMxSmFeYY4rTq2RDy5eNdoSBYKmTEyMc8BPKZzJrvqCgrA13wbbyy9GdrJ8oP8k9ya72eMPBbFw3R",
  "key18": "2LgXjsQyQ1r71WZM3oYNFdrmSzG7HXJUk3xjcWmLbkThFxz2ta5mB39YSTnJnTp3xUr3hi75q9BUwiTKhsbhBmvf",
  "key19": "2mooYbJAuesfEaJathDVqkg3tJgvF9u5NYX31N6fXyiWWx2XNCJbqHQZsyX7E2uWEoR8YCFMkhVQgv6Nkr1z2onr",
  "key20": "5q6WvR29ya5XAKjysbL28cCjLHfphnG1KoszUQ1MZ4dSEJjjKCGm3tXpZ3nzrxdwknjptrovpge8FZXdAaUhe5mT",
  "key21": "4D2oe76h2HKh5nTi8ZFXrG8pmgTphxjcvvMPWykwAqjUMCbviZesceZ9UoGvVfpeXpzzyJFZjhLKh7o2oj3CPfbo",
  "key22": "Dkim4M4Z2H6uXZSzfyx87qK2W6p3NCgDKeYXTD9dRrShixbheydVeRSsUHvWAdLhRUwa29cdXsgepS4KCeUaau7",
  "key23": "4vLeuUQrc41JdFjbykqeZp21t46bezaPcmaZLYn11w24p6uBs5KPe4oKunVNinzjBr44EgfCPmzH9ZQWgzytPCZd",
  "key24": "xW9s7tiv89TG855HR1wNemyAmD8kaXWLApkxaYDUWP6wRuvsxAHBETBewLu36HrRu2E7AULca6C41iXfdNCvLiU",
  "key25": "VMUn521Q21ivQHaUjnEsnUq47aXzvUHWTcmxF4aSZrVCV8ptEi1nsiesUqZ27aEBUJiXUw2kQjhDqma8WfGhrQB",
  "key26": "2zirrLSGfUWqB2iVq2nMAbnXMJiervrMqXvSZGMrRDneVYjWXMvoWhxPWf9Fke4acTTy2w2CjBUMZ31CQTsM8Rvm",
  "key27": "5RUowvSoVg9JJsKXsSK19dCDenJrAHU9dRsDLJLJpVHRdTE2892bPz3ZU24GbrSv9SLmXk6HE8j6pMz4RjWf9Som",
  "key28": "4pvcHpDbrpjnBVkRjSupnREJMgLzvzJfAsqxS2yuJeE7yWiRDrf45zRtAMX5J3k2zWiHrVZ5fWy2V6LZ1W46nxPi",
  "key29": "3gGBGj7jkP1BHD4SVyHCo2aMq5E911G1ZSxRSiNcpmeUHrw7b2xgbKk5UzEik3Cd7ssTjwALvdZcFCV9EvGRXWid",
  "key30": "SjJhuPzk7xUtR1guEZfL5FEdRMDj1T4pRHk8V64L1WPEYxRJ6Q5edU2fvzZiQ7L9ete8nJVBadREeyrr2ivSEuB",
  "key31": "5dDjAJfD9Z6zHu5bcQTKiE9cUPSsidKBzNZZg23bJuyNq6KycksbnyKe9FXAHB2r5eByLWZbBQWa4eZZLprWEj5d",
  "key32": "2XGsP4W3dh3FfVurLUBhVxht3GGi5MTpqNgrQiHumFFxws75tMBESVSwJ8QY9DvexxUMP9E5DDWEbVhF5SmdmLke",
  "key33": "2xKspmRqfQ3vpAiZxYZmUGxMiVRwFbTnfp73964XYoD6f3YobaF4FuWeC2EfvPFa6QzzhMxceFPGkCxZJzg6nZ5f",
  "key34": "2gZFZnfhA821USheUfJvttTAhjt79TCZR3QAqUnm5patQ8CT86puPtStjzm8ET4UZbmx9xERC2QuQhomWFqJEd9G",
  "key35": "2a43GC11Qm97ydMbgV4AeTXpcnZwTfgQvKmpM3gn9wEKgXa86Tdnw7pTo8GbG82qJykTaAGZStKVAoqxb5rYxgtp",
  "key36": "24ET7DfS56s2tVjvbbNizwtxbyv5WMzETC34oEw43vGbsPwZh6Z1fvN8o69YVLxzx1XdtgFkYeZFSgmjTXCrCAC8"
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
