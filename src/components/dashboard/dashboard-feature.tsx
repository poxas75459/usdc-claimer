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
    "2FpN8Y3uNqaVDc6uswTHPz1gQ2Qc2pjxVzXBgjHSjpgKVtWHmtjeBkuCMDchV14S1gKbzKyyow3TfJmjrxcJWvGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33aNn43sjFWXANoGm5CoVvHuEya4FasAqKJJgHiydrWmmKgYYKZxxWS8DyizbQnx3iUvKsTwbdV2yJZnEqnDESUq",
  "key1": "57qFEVvsGafbUcJWAoCkEMob9xwY6hqirApT5btR4hvHtPY3EJ7yyab8grGzZyZWvz7JSaRiMVD74tAde8RKiSdw",
  "key2": "Vytc6Mns9FqVhqExg4w9SgJtskHWYwB6hhqvn1ahnoA9N6chGo3r6mRWJzsh28snwgUJHSRWx9jvwBmAwUgDCnj",
  "key3": "24KCf72h6qgxL2C4i9JNPcKAipLpfKRSHHtL9jNDLDtZ8ARZ7L4579hfbL3grSPw6Ym2o48qYdFQBW5rEJzc6BiX",
  "key4": "5MZVy1LHEf7PXqxrFHfPmzFwocHy1G2BunzvcuWQuQh96NxjwTNg1SLMn5vorRJAFPTXWVaJzFfrQTy1GNY3nKGG",
  "key5": "4TtuuUUdUQCunoHEvuUVt5v5s6vmTnJfJvAbSFG7kjo81QAVUjbgfvUthkmFa6hCvfzBaSGuypKBQy5aiusoJKDj",
  "key6": "3tXrswDmFTcbZAuJgG5dWq73MQ8CTr9YDTMWyF87KR2bcZUpjDYS7k5E4aRjdqujky1qfLXEckMKETMEkDkf135S",
  "key7": "J3iWn4y4KLCLsuWzWNxgt5vtxqcTWwKCNHCP96JMnRZpVa9thAEuMFMZfhAK9zQr8gyJgdZ6iKhZES8aE3wWeA6",
  "key8": "2Hr2LG7geDFD8axp9CoannWczBZnbFLXA6iWTouDvt5PahKy8JKp9UmyQHrgRA999pFLntaS741DatxESDZSktxQ",
  "key9": "47aQJzorUDpBtQLQ2MewPZzbdefiZTFRGnGJxBhBiNRLsv5JTSxSJQbgXNkUXfDj2aH2mQy2vBiQzhn9Kj1Sr7uD",
  "key10": "4VPsyjDuaDNbJ41EPbdBGR6ktKwYZmte8KGnQm2L8FuTCd6bXFASjmwxzw1h8udRZmJTwynQMAv2xyYHEV47Uoih",
  "key11": "5wd86mrqgKNNatZrCs1x18bFzDRM115YZJa6XAksKNgz7YQoXQxc2t1EmBXZ6CbZhhTi31R3aYWs281NexMRQWXL",
  "key12": "WCSmgxDyc997qvuJetjoNgTHRRL8Hvx4MsSDqjMyLvQazkPBDvPZ7oC5Q8njSnUKmxfPRbFk7Txs5Rf9F3dsWmN",
  "key13": "5AV6syAwG1ezFjtyvZAn2X8pLry5iprnRQf226VzgppMqWzMofuyhkBP1jbS6n46YG5Q4DWgW9C7HZVcUM9EwMzM",
  "key14": "2CdkFUbrA3MZLRvw3hJoNVUVCt1MwbBdVSpPv1wis5pmdGqkYWh2cUzoz5Zi9ikkFJUAMQ3LhXqawTzyfBQgo6zd",
  "key15": "5BtyBTEYtKsKA9tRGk5sdFuZoueaSRUd4Csza7gyvWxW1ajazfhYwwHP6Kn2uoAFnebvZzsq7hRxivJercN2p9it",
  "key16": "56RLnPApqVkEc4yJpMSvspiArgAvA9KdvzeL4QzySDyEPy2eDQdRSxYD2GP5YMqVEbGVarT7LzTtGAcsVGoUFJMu",
  "key17": "3va5di9GFhWvafnsRGLR4e3nuZJ7baLJSW5ZT5LJYvCmFKG1eKmyeLfBRNvc4zMYSS4SWaSQYLPZomuQz2rQAG1r",
  "key18": "HeTBScMYWjVDa4ivBC9ifWtR8DjA7YXwrVZnDiKLxG8UmxaUMA3notukdSmUe8MJrtn6uLbULGr93u35MEqw7VM",
  "key19": "4poULDM96AzoETHVvyxayKszgqiZEMuKb7TLN9bBKFbcfWpn56VGunh82BNH9JboN3CeghBAZDXFkoa5Tx45Uc8H",
  "key20": "2hZpJ6vZWgggfGoSVWpzffMxeY1P5Ki6tiQgzgXjmQ7xaGoK3DV8B4yDQ661w3scqUacRt1avwfLJEMQprSreKKs",
  "key21": "2YGkYw5T4aRRgZXxFKLmJYa5AcfkJkfVWJFvawYkKNN9eScEFwSZiMLiMzRw7BXLWyr37c1VP67Vyn3EFTi9jrpQ",
  "key22": "5YWct46kjmh5NULjgk9tQhGqU4TAnTmkgXuVmSBQhPSrsLgkjhaSC3YSo5QePEPTuwctwFyBz7iLUuBHYCyGAvLN",
  "key23": "jtW7iXnwiBErsfxfTfWeHkyaqEpj65oWFg9TqeaYH7dExZqABTcniHbr3s65qbZaTNHm4K4PM5Ko2rFzBVNUKW7",
  "key24": "SR5Nthfs541Az4gDuhDvMFZxt4iLPXDJyuczQycw4ipb336KmHGYdJcjseto7dn9EM2ErSzjxBmUEWvYDbQDSHM",
  "key25": "4nW9ovoJd9g4AYTBo4xSFtvbFbsP682b4isac4m9raPxJ8Ts2gSFhWp7TWZCHtxqdMjVv23PKgLtcaUNFzbsWJBm",
  "key26": "yUJD5Lgsd9vudFbD9RcFcFcwJF5qF4HL48SU2UtUjBUmxSKBYV2N9jKmJPkZQ97TnvkH5NJ4f6RRFSwe1LAfGNW",
  "key27": "5Tax1Jh8p842NM49xroqfcjaBqQD8GPckmVwncKyHErifhHdLoqEBHDqzSb3Sefqa3P8LVZCvhVvRhY8sUDqGphs",
  "key28": "37qVczwWzv6WLf994SWun1u3pXrw1VsrDBybrCTEhPy53muY6L9ajGretv1ckdaCQ39Rj58riecQU4mHm8BjSP82",
  "key29": "3LfgGC2rZy2nepJmyy9DdTkcvUQtDvrbwqRHiqXvR1EeiKunMxwTWgfJ3Negy5PPi62hbTwSBES7JEwQiHVAgUUq",
  "key30": "2eGTmZsKmi79D7bWM8W2Ta1KTHRLKmALewMq8a4hx82g8DhUDejXEFuEnVPhLpcpspPYQiKGvYwmak4SGBLmECs4",
  "key31": "3Na8GvvdeidcGixThuQJgEcfj8iYt6SZgd78TVqtaihkZnjViyqNFYCRcHDKqi9FCQ83uum6TJbZMeVcomaqejme",
  "key32": "5xeHSDMKvK7yMcUwqid7JE2xhRv6CUMWoPbkhm3ULR2SA5h2LXpTt3YtUyCJsBBuJg8k72kUKb5Ya6TiwkWVyrMZ",
  "key33": "5VfepwEUB43w6zX2maMbKsTEgaEud49WZk3ELnRkeR9wr5983ZJa38vj4UoR32DmrMXYtqU31p5whQgzErKmpBLT",
  "key34": "2Vty98SsFvcppiLUXX7tYDZxPoKPW4ySofdGFYvkytRmNpbWEvud1nqAT5KWrgML1SRaqmKWP2yreVVG6Y6d7wVk",
  "key35": "4a37GBKs7WmxKzcwivttdErQksnJtSPLshzZeMzk64Gog6Ybf1SvaLvNsHmFLUWX62Scn1SmSCNEJz5ruNoY98Sh",
  "key36": "5xXdorAw9TVJSaUCReVFruWnWq34wVfD3sKMqcLRzVxSQTRXpLTCdbmPwDZ22NBUCT7RrgUUZrjRnWSHEpWFdfFs",
  "key37": "2cJ9XX5CCoDyXPc89EdjQ3FvMwCnPWrm5BAr8XNVnQ7PghLfvUwXoJTwBd1jPsrgpyMmAwSVDxPZUQoAXHvRManT",
  "key38": "3dLnzWvRz6oLiputUsBgqTWsFRVe9pGVguS51DbYA57sYRPnaAuv3zGxSZb4U7W1PKDDHrnf5oAu7z47HVF13Ltb"
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
