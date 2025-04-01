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
    "5idKd54jb8iuitsuZJFhtZAiM34oXK8eXP9bq6fQAwrGeUVCxRLSuXFmE18b5Nzt4k5wr2GF2UU1rqDCvFHrQ1dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341T89pC9zCqTi8ZRxHMNNgbXYvn4EPVB5MDNHgFN1L6dUxJWExVJvWx2priF1TzKEv3Ps3HbA2LFpTmR3AMJuca",
  "key1": "ztFiFVLZi4Z2f2Jxgw871yqxs7qZSk3yG6hjaLU4EQEymgVjKEphc8uLh1JStoqWxdZQZj7zHQ8AP18g81oGNwf",
  "key2": "SfB11nCYUyqVrizLqWWYziE7p8eMqToiaTqUqzg1HH8ZwpXimhRhZMGsScphJY5AxATebH4mpx79L4cMt2JNSuy",
  "key3": "4X5Fmz1e1C2AnNn11Pbk68Zae1gZz9WXqeUssQC3pzU9tktBk67gNrmEZw7bpDkqMDs1eand1wgG5eSKdRX4AcWU",
  "key4": "4QWJd73t6ALXU8wrsmVTbKEpuP6RQJ9qAGtrx2MZMQ7P58q1CVFdTnfmXuEjHk5CkieoZQpJCK1G1Wc76Q9ZUeAx",
  "key5": "32TyB61KFSHf49iDdZMRUWLUveQmxVoAJoM93BcngvWg4q7yZg8Efy7XMun5KNw2CyGApZ7dYdcZfMuY1mwvNQ4p",
  "key6": "4xNwTrS83oV6ZNzt8LWVvgyBt2MM1A1hfiPWmS7mCZ6C2mMRwTSotdEtSubU3cDVBbsppDVWcR5MKgfzrWHjZexz",
  "key7": "4kuzZVTp8LA6dDUTVqboCuKQfCwCakToX53sKH9xcRQWyizqnTDeQu5jJHRQSgRNdh4Jnnp2QQwou4pmN4CLyhkE",
  "key8": "4zBtHcRhdQfjwMNHxUqrzioKaJ4XRaXXCMvQ1AA7KRpus6McdAjGYFYpztERwKypbD3DQpyfqS2aEa32jLnUnFf9",
  "key9": "raUF24HPKk6Shw3j3yp3hXjZocyj2freHydYfFzvT2GYuops4giBSiYbzKWf2iWJfkvbADJfEX6KtgSM8eDz91B",
  "key10": "365smKdcrhVBbdbkfJbzoRfAib2abaz3qekJUeXQX77eWEzpWSiWNDfTbV4T842DQXcmc9hkP5VcNirxjQ8epgpX",
  "key11": "8w9i1ppoJrGnuTqonyFbsL2XvdWUjJSx46UU1h35B87ZR9eZbV6vwqsCHFJsC9fsz9yENZyPbehvBTZtDcM8794",
  "key12": "5mzsFgpPdwFeQmAzqtBmks6fuqz5EYvB9tPaNJfbU3UtExgea86LBEikGW6G4MYMgCqtBduXAyETTUtVsUQhVXGD",
  "key13": "4mHUxqTJ2qiPcUYq2sK4jgUYSXzfKwmDiC1QX7yC3cTzKi64q3FxdpsMNQedUoto7mUBLgqKbzS5P89ztmY7XPn2",
  "key14": "8cuCdcxfUyPRYcovZkBkPj96e3ADBRxyZJC1bL4mwSQhwdnQgES9poNgh9oRYUuXoACqx1XruZKEWRsafcqxTP8",
  "key15": "Kh2NYxctMbeGWaE6E1dSjBrEJgCRHaghUMK8oms7qSTy3c5QuNR9yYbSXvb24SxDuygzV3Q4HKRCh96LWxyLR3V",
  "key16": "3p5bEJWgp15eLuBxxGVreEXbMXKJ462egUntDx79v7JTYEYcL35RvjEY3b3RV882ECAc19PfPDaeaDcFUCgtQisf",
  "key17": "3C3j6GnHa4FfPbb8GkMgfTAARdXh3kcYVpznwLY6HNRNfLJBY8rk3c1RxgLa9TGv2HzyoJyk2rJe7FaZNtcrggsx",
  "key18": "5JiVZJBfNQyvyGfVfWnogKn584VWEHHScedY6wUQXLmwis9pa44kJEhE7cnGDqxwQPB8SZ7GDDDBiUY2ahDvtNcD",
  "key19": "4pQd1bd2JAyFji2r2c8KJcHYjhRzucAVCxa3VFrfqtyXU6toFYqQNnDohMt3G3urkgkeXtjN7yDtdtx4EMT4LnXt",
  "key20": "3UJmvfkENLsztMamsreeiagZmD2uuJEkBpbDLMfeMfAMKQQLBTofdw3gmNEZpsW5u7nv4UxeucaZtDnZoQ9D6c2m",
  "key21": "3WzJKMmyASqeY6XXss5qoP91yx8mrnkc7muvjaqtJHpaHvPe8h2q3E8LGMD5seFFYytZVuD5LotYcNxYZccevPDY",
  "key22": "3FrpUfyD8zNKHvGWsRkapxoPvkj5CHU7MYks71JuRcv8F7c591qahLRokvB124DxYfhWZkuVacFCQqsAaS2hdzbR",
  "key23": "3gnHgtSe4uXbfv2TqpxVJwuDsLgi2GGqQZ9hPifxCZjTZ8iZ1Tz6pxGXgQvYtKYEMhqYYBJsmFyJc5zZRbiUHg1v",
  "key24": "5wPSydKstXojuvhtb31xE5YsWERVTNqF42fdhgTaux9SLanV6jDaDRa61GR8vB4Mf658tyYBJeykBwGZ6bHK68jj",
  "key25": "48NfUspRhoEpPbQcMAsu4EpqajERTtBfnF3WuR8sxPueeSNBRXgSxYVbiBoqG6tEF9toA1HDSm6cZAKAsVpWXn4k",
  "key26": "5NbP1Jbph7wyVbMYBkNLFb2hkv1FgLG825L6PKJ1m2N9MaYB8T3Ham5dcj88weE5B3TYCtXzPzVBN7gPq1jzStyE",
  "key27": "3rz7sth8du9KB1yDxs7NHkh7ZT2ZoRT9LeyB2Lrt4yPnKkwtRdUyk9pb1pAGtRXaqk3VwBK3d2UYLbJ3A1Aycx37",
  "key28": "2qWtbXTVR3L4tPsUNjgPZT112b2edsCTWrNkL7SnysvMeNUXuhzDfTPSAz4XjWQQLCWbUR3ocghi3yjEHSMLANuT",
  "key29": "3cSuqcD6ed6y9JNKtgeqpXFyvbeGwPjpEtzEMniT5MTAY9zFC4yqABXvD5QoEGsgtJQcTLqdrabY3RbVEt7ruAsQ",
  "key30": "2Su4CHjh8JTQbxWYFPg4Avxm88EcXgTTT2cmWLje1r8V7YTutmBRxgmqRtgksX33s4x3pQqRBLEpwhHQkLvLkDLY",
  "key31": "YPDonv2Ug7oW2BgVJZoTpCBY5H62FW8DDQAHkka3Ruh79QrR9RjB7niLKosB9HS6rs3mTPSDvfhWpzd2NaTq69o",
  "key32": "661aKMGuSqRgcoMxbiemoZZLsAP56HcJxj9SccBLmFvH4YaF4qTkutxdkUWAwiqjQed9CnyXSa4Wqy4sn4YKvtfe",
  "key33": "54w4qEN4bgRqDFJyt6fzEUUSGFhc4kut6YpExS4ULwwgBAxJA9mwU2LnT6pnrTsPb1TUTVkmxRm2xq5P5UfGoUdL",
  "key34": "f3fDoxyYgKr5CdVDUT7UphUnqm4kUMEvPLseqsT4nY4qRRD3iG5CLwTy6Ak4gms9wwqS78X8JgbPpMTeWewQAPo",
  "key35": "3JU3xKuUJ8tnVRZiwAv1WJ5Ng4YPT6iCifuWkXKsEZ4Q3MFJK9GpNadfqrEni3PVvgCsxn1WLL8Loa3E19AZw88g",
  "key36": "FAJy8JzW2JpJgCTUXPcvB9iAQkMqixsZNKwyYmZCg8bQFXBygz5pEqzMDDu1npoXKMhFinW3DNjhhD1fyt4S1CN"
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
