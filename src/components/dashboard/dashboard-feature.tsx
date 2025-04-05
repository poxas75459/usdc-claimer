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
    "3ApnJ3rm1VTT7veVrKaKNd6Nga36Uy441WTzmT1ngwHGstHKFz6bCjyPunPQfS4Gq2VoweMNZyMNHia8RQwfGTbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXvT5zugz5dLj6EstePH5ict5LWzSWNUGoaDM1TYTZFmBksRUqyKaRFdtFwSD8GxtnGY2De6zJ3crNzz8dg6HqB",
  "key1": "4yipTLYYkC5CRg6wYrGmupmMwL4utbCbihf6xyQc6K339jrqWZYVEDsPWUfxJfPQYHHNArYo3Z7KQCgPiRWE22zK",
  "key2": "4RMP7yojr5e7dEcAU4w6vDzHDJLhb2wVN7GntmzyTvVKAtP637UB1QhM9LsXbGBytN6PbwnC9wDQLcB9QVqJfbat",
  "key3": "y5w98ZhvmAAgpn27evXJ9ytkws8uQPmx6EtMfigRR3gLoAmJzJ66hTAB8wf4ub6v1hbzcg5sdARNwf1GWdnV8QT",
  "key4": "5efbrHZS9WQatu3hpaQNsh9DSWc7UwfB6yNosSPPQYXdgcxGfzxwML9dgf6nUz124vF6w3HecWHsaL2LujzYrbM4",
  "key5": "2z3bJbcsvdhV45LLz4CNHV8iMq76ksN7Bdu7zJX6J7T9JAuD29QbKZDauq1MF4FVkg4LuBivLZJjbcAx6hhX85xN",
  "key6": "3xWQpjiwf6JaYNBHLDTNtFurFuqoZs2bqtmoHJGc8J44e9uZehZoivYzu2fahxWbnSzn3svrZTXxYMAjK4rpGbTD",
  "key7": "Ehv1QshxrXd7nsaUQaei8PK5ziVgkV4a8LpRrpD3YJ9UgBWyNacuizvRuN2X54vTWHVLrgE2K2psZDDpezLM9Ep",
  "key8": "3vUyRXWFUunW6RP88Vacgh9vaxwpSPTfq1FidFfATFRewKvMFzNM8ivmApjq14Q2SPSEoxbs5BtGzuwh6pe8deui",
  "key9": "2TUisPYMXkqEW2B2ZgDesxHU4ZV53ywrZE9TDQa21K1w9RcT8F3dLXaVvt4gDnNgwANEwWHnC1PNAgYGEeDMiRZF",
  "key10": "5JDHuGuBHmW8R8AnqHotgsF8NUVCgpu2UULWREhTNbwRjmNquBUdxJqDjgNnRtjBz1WnRizJjoHxQCr75VBxWhYx",
  "key11": "MqmXhvgCV5DUYkzkzToEMzaE94dfSaU5bmFjUNfYpDQ9UvLcagoCZxTVgwYCPVaG3vEi45QctaM3NPScsRDgZGq",
  "key12": "3SAFs3qD66ACcWRAER1kFx111tZFBwnJQo8ssxBvVcX6RA3xeJDjihdUDYUEmW3ygAKfTE3CGURggP8hYDxqqnjx",
  "key13": "5WPbmvUxfFUSGr6iYN298H33sNpJWR5vje6CgE12q225d7KSMq3fzChFzhs8k7d5aUphk2LmSakR6QbzBVa6TWAT",
  "key14": "5Gn4otyRJjS18nHLQc3oD44eJLTrJtwu9eEunbsvmUpP3LXWmDXY5DEs7W4tm71EBAqZsuyyV81jqQd2xSFjtR6q",
  "key15": "PDZnaRQjL4pb4wyCVBw37LYMkLgWd5p427pARNv9WDspNrunTFyNxTJNFnwdaV8SGeDbK6bCrp7h8hLEDF5w56w",
  "key16": "5xhSgd8QTn7ArHEAvfZwUcom5r4pEXCmgMoNZXaNHvRfdvjSNTahZY4wQXxJPVVYGi4PxRVVNxigqhQLcCVMxsMY",
  "key17": "5XiLNobQkyitohRbtcKJsPKchT8ivb3z1btedTwzGMGJTTA4FKRwn413vgD7MaTPA27f37AX7QoN4KZ7QQy3VpgU",
  "key18": "5pt8iKS9smsWYAkLi8PiUoBuNJAjD8mYe1wxWpwL8jqVuSNGQtS8j2xuqiHzwb7QAvyxAw4REherk1Wca5r1M2VC",
  "key19": "62SGuTWuBwipGSDfqDwgrQYcBZqo5QoFccmrZL5PbudsYEN5dpm7TLhZbDj6onKkBpo87QsiWRLzXsouVWXHNrTE",
  "key20": "5YaxtSrayDrAQZXscFeo9yDE25CooZhCLYn99s6nfrwpUxbJ2EXTFSATJAyRBA2dukSSD8AyeJJrQy8bcBG8W8Ze",
  "key21": "5rmGvPu9zKbSAuYhPYbeK5GUuqPUbh29jiPB5McgWQSbD1Qq7No3A36Ew77eTzt8kNwQ8BxK6aT5K9GFGNjpg2ZQ",
  "key22": "3caHDm4SHFP86kedNSYHaYJHun1ooLHtFGSp8PXAxBED2WoTctE98xUVViAfvcSyDRSEgk1TpXPWDKsWinPKr58k",
  "key23": "5E12X93hzhowGSic5CmfhULNvP4aJQma4L74ycFcLSepTF4hWcjp6wnvonGUW4xkMmzAMsYRVWJV4s4cc4xUNDCG",
  "key24": "51d25CbePRhJQucH3P8EyLAxnYhDw9Eey6Q97oW8YaRWhmBw5EbJVw4Q45pHL956SBnLJE3GE6SobkwYHBMQTTdt",
  "key25": "4qE33wUCq1GVLbmUM3of7NXY3x3eWdYEAFin8kgL4k5BhRVcyg5QbfcYZCWU1qaWS7vv8c2qiw4Vee1cta2ufq1W",
  "key26": "33oDFBSm1txXwsa9GFEeJK1yx3bFtsPGJazSogwBGG8Np1v9fjpfxACGmM3LpcZ3KEamey69AKmc8WpCHAhabvio",
  "key27": "4yRFhidPkE6kHaLGs24XyK9eX5MEaewzGSZvXnAUHgeUqPSZnx3JLWM2R6btA5UXynf62G2Q1WQd6QvLbGeTd2fz",
  "key28": "3aJek7ViRkzuXfAKvyuwvmk5kDDKyLLmBShAiFaegwLRUciQfXg6GvW2984ptK9o6ysJa8TNhTQ4HsiUCTwcnxV8",
  "key29": "21c1YjoaAkEAwiSHrtntd3WXvzCg51AJMYZxEiCsoKKGX6ezYgzh7rqdevwTBYh1DgBbAp9mYYMdvfrC4oPNCZLb",
  "key30": "4LZdzLJyhxMgD3zvtu8J9vbjDN75aURy19wFnSaoTYpjcL7DyW5DhnAu7eFW4n1gUFM2giNB95ycuxC1923J8Jm5",
  "key31": "4Xcyccb4Ja1he53TrozgvfckxmJQftLvLXQkwmJ6JPNbsybfG6rQwM61WyDXo6mehe4y7NxiQJbj2qhYSaj8RAo1",
  "key32": "65Nw7QxK9wCpR75UtymkQda7UkhaFjxq8M2Rbz9jSPWY87jtrX6ZddJbUty2RkkTnh4aUjUxZfGpdLw5pPyjZDpG",
  "key33": "QnS3yBp76i46biZqJA3xc7TJB5XSYQmv7MCfu3zNrzpXoKeikTJkNdwfvC6xCibA8YDNvWo8NU12xSXw1KT84jG"
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
