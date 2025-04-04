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
    "47ZTELikJgxJNCzd1dkUaP1GAdE8sKyAYUc4b26azJFcNitZqtudRTzMvgKnLfJnrJrgXzALqXUcWM7SLruCwctp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7BsqayKKL2QxYCYjNDwWAtiXQuJMXiYMbkmU7GwATZwUyZxXvHj9D6qf3F7qtXvj3if5LtwNvZ5EZ5qqeTQpao",
  "key1": "3FXBVBcuxgsdVsdKtnpFqaGMSVzTpzcxXxTJVoGNpiT5Yxz8DKj8evZittAiiTkdfKmgy3uaW7mHZbMjMo5bzGoK",
  "key2": "56Wb9ccnhioXpPL9CRbW36n9vjVdTuZB973DmgFtP81AXBz2PiQvmwUCUjT1ThdGdVaHFQewSnRotVfQkgfid58z",
  "key3": "59j29mRwmKzbw5LECrVvQjYyJfHQ8SyD7pU21g2FtHoo1PgKbBy8tt5ah3v4QfFh9A6dLiABUFPUVmWPFEGVpA5Z",
  "key4": "3sD7DnBNmyWndiKX8WmoVa7pUA8yMWZMcUkRbbNBB76WZqJaMG8F7hAyX9v11ZxTuXuA6mUCkF9FeCUN1KdJWDe2",
  "key5": "3dkTEbkCXk69nedgnonWgr4iyk6CxJk2FP1NxXHy84hZu5qxQsn4XGCf8PMD8W7EVS6X1mKsqh9T46zSfUHmHY9v",
  "key6": "5dVkSrjGjXd7VM96vnUzRPYBm9taLuM3Pkam4jF1RrkHe2oBUtH9QfYf5ETrnQBieyFxhPh3CuxqX8RP3UKYqwHE",
  "key7": "251HGQAgzHQTMynXP7c2FEFCF1EjB3LyGVph3ZF24Mu4rm16aAxd2wr3wvcPvUo55tAE4ZrLKHXXC5Mzfi5oUVRt",
  "key8": "5PvLKxnoCex6PFThJL45MxHrFjUTkFaQ1DV18Jbc5SFNeGGqomtsyrp9tbJvavBe1oVWLanJK2h3bFGqayR9copN",
  "key9": "2MzPKYmJux7c33CPQBeaF7hsaBQhtet1o9THaxcvT5kGYMg7semjn6RN1AMmg5Mf1Bv3Bw5qY9of6KefoFbSErXP",
  "key10": "3C8pZbSmVG7nMogd5YXcZhRidkb4K9mnSCbaFD86HE7XmoKu2ED5GKniDB1Dd2bYK19Ep4roH9yNTEafweLHUUNm",
  "key11": "3KvY47rFRQJUYSjKHDPJNXhZRT5n1pAdeVhNbW87FaJnj6Hs8rcKw5HmXMekqiLDpmspmtSAiP43ursmj8nNFe8V",
  "key12": "31GvzJ6Dx9LuNnvWx4QJgfXyEiv4siNbKG5bHxraoEoBCEpRMEZaVkYo9njSRDyapDZeJZeT4qXRtnzKBjjqCDXi",
  "key13": "4Qg5PLCZX7Bbyn4Z6H1ws2JHPKj1H3AC95RYoN7snxLeyBt886n4aZ1fG2qK6dMeJ9ZUD1wTZKHrFEsoyHq6L5pv",
  "key14": "3bPfTV8bSHjRvHkrUpcWLQVvXMbo71Rr6FcDCrzvXkeHHXKyS65dv9TDPJyjsVihD3szdx9hYnyg4DFNFndT2ptw",
  "key15": "cmW8RjsWdAXX7gebTSTc3tEmYHe7Eoqh8Tq8tNdy2kVdHxcRkHzjWbfcrquSZj12zvX5VhQ2DiyVtizY6wCh5Fm",
  "key16": "5o79mCXS1WtZEEgbUVty3mYVSULtNjqtSd14hHLkEEAQhc5YbJHctuvHP58SBkJ2BuBkJbmSqcGgBuoCa8fffBTx",
  "key17": "5A9NpxNJRLPGKQZsuYb1KG9ocFvZxn4uiK2sUyPnA7AswciDb7WkAums4QhzR1PMUxaDnaT8FdGGqXMVkzhFrJYb",
  "key18": "J3NCHwdfQwPqLYCBtGtua8VEnbaCmReG6VjHcDcZRzYqm4Ma75qppiwmiiq27toLGgXEbTbxsWRLqvfHsEA1MKH",
  "key19": "2sLrpSzcTrFJPtXsu6FKwMsxzSSEUnoMgPmwYUkwnoRbZjJfAGcYkSNucrD8UUib884ZZzx6nx94imfEQHUqJ878",
  "key20": "5MRbnb9Gv4AkTQaXuGBfjeWBEPau1vgLBkub4BrLfLrK2QSCjKnQeY5jwbK3rvHn2RumZBU14ngJ4rvLsR9rY52R",
  "key21": "3e2YABCM4QoNEszTnExKHAHC2XYVjsSquLeqoEac2HwmJf6msJ3wGeAss4smygDoQreE1ncLZkCFi5qHqwzygrYm",
  "key22": "3HVU1gmmgCLpoeeiZQ4vhSnFVv2esz3omPTHoKacNhvrVucsAuUBSJBEh4TYWk9cV5qXPgVVHAsr3kM5MyBwpucN",
  "key23": "61MA39gZfXBDHdGtXUyf1UEUqXyMoy4a3PrWN2MS797SnTPuFifhjjXbKcJjZoaRrdNNC6GsH7YN9QzTr8sWAcru",
  "key24": "3h8C3amLMnaLUX3N9kxqQ5mUEye1zxZuAUyB3XPzsQcNa3nghnceQMYm81mm4DLBn5j61W8F3fZosi8a45hoTzSj",
  "key25": "51faD3qLzbntirhbaN1yHas2teYBJZsgRDHfULq4EB9ksQ9GsSdkzWmqmyAnpNc9CnEX87SAZhnxkp8JY5UDVRfA",
  "key26": "2vHVJCqhBHhKUdo7wMniox8Pt8q5yLszCMAHJqZU11YsJZF8GfoYqycgRGPRVyNGmfk6QMhMHaQAB2sb7Y89koP",
  "key27": "39mNcPMBBjp4XALokQhFPV6US45vLBPV1P6Ug3jmGiDwyvsb76N5FYoPtGkZMoA7u81KxeYLq5NJFzYzwQ9J7B4",
  "key28": "286bXw8eq6cimtHy6YtBUSodsizSnuxut8gDrq9Akk12e8xRCDeMTck11kn9FuLKC6CgAqeQdVuto5SyNMKQU1or",
  "key29": "4GW2EfZaHR22HreRte21BUDngECQfwpKBttxCj1SVGNhtGudi22wL9MssBSd2Aj38R4F2BovAZvpccZkL8ZAxrxn"
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
