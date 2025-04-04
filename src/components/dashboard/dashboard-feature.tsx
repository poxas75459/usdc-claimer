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
    "5RW4x4V7PnTkpqU9eY2xF6Xaaoht3cQJ6kySTPNM7UbeFH2h32VTRHhfLW7ihw1XLRmvEt25Q5rfBxXRnv889Giw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTHemfk2dD1HtPwEJGfZvTu3A9qE2h1V6yWck91NYvbNTMHNZDSij2ycTSHPfdrvM3DntTZ1XDHKj6n6uW323Uc",
  "key1": "39tKa4J3f7TX2UmcTMUmLpRB1dTb8nkwLGQM2vNnho6p1YJzdCohTo2YrZiYAdGFz7AuKcs9puwtQoS4jqtL9Ts1",
  "key2": "MBnyNRu53x9ZLxb9qsWPrWGCBv4oqjK2YVSwFyU4BkAUjvoGpeSk7JVv12uoQqfAosq3YzaYMeTSCCUqTcjuYPm",
  "key3": "2PD8CH6Tffrfe2rS4FuRnDRwQrdyfQsADeygXP2ED58ahqVbZyzAHX7urKig9G3M738S8UJGzpWMtBuLt6nGqT3k",
  "key4": "5fhVRx6QJHPvcgSTVCwFeuVrKyFAVdB6E6Bs3czswLEjk6yXDr6pCvPukPpQFrqcSF234u2KwwRNba8hDQzmybwu",
  "key5": "2ChEEdLuwDsyYccMmT63FXdZK3RKNQb1kiDHLRtM38xD5A1WDQtrso483cTef7TdWSp17BTn76NcNfFHVXr7dTUU",
  "key6": "4whE1Kwp18zzbsSwuRmLe1sC5FGDwPR4J5eYAWn9WdUwhS3umjKu6nhhgvqB1L6TStbqvy6T4LDYBj8QTK7f628S",
  "key7": "4CvAAQ5oSRrBGuY4wKqtBnXqT8yJXc7Dzy9i3TAeXCBgmzFHx1uejFkHXwDSdoqrfz7Yb31SZuAWLjswFQx4yumR",
  "key8": "b5H6hiAScWq6SjbJ3zDnX6TnqcGPaqjv8demauPHhc8HRqzPpwyANjeST41svWW4pQZWweVUYfsZL1bZEFvTUd1",
  "key9": "3tegrW2cD2a9SUPTJrzoHCEMUDpd6GkT2vE7mqLNQ5qgEkHPdFYbk88jSDnSY5U41FHETdw42fjGNcQP2dKgmNEy",
  "key10": "4KwRyuE4t8ivLWDMb7RqKTf5LMrdHawHtmsweZXeCgTbdihKxmfXdtriq7DgYNUdWhcH2mZPuA2i88WibEK6mAVi",
  "key11": "3JQoE411f7UiaPKQnwEDpWSJMu6ms9EWxEzARfConWguXu5b4gsd9LF5qjB7MbhWSXA5ANzX6NodYmjvwfgwGBu1",
  "key12": "3ybRhj3avqPpscFmKz5BeBpV165LWbmQvp2sP7ZL1EtyPCwQbhzo6o9qSggwwZNg5HCJgECGML82tTsAMSYR1URY",
  "key13": "2VsAue6KLVBswfAAUyCZXDvmBjJ5p818yV3WjkNPf8Hk8CeHvSK9oQckudyXBoq5oAftvsTa2ouKTAB6DD7zziAB",
  "key14": "53xKaA3nyi7KZHF9wE4xkaCzkRqmY9NzrGoa9dD7LTBZqGtPT6KGNMa8g3XsdoKr6EhVGaUBMD2CVRYgAdwn2cV4",
  "key15": "3thTfF77fN4ERks6eSFhSsgWcs73YEpn6QrZz88aT32CpBr46SK52uE5Y4TsvkjEGuAecULwUo3epQBUNFQaNwL7",
  "key16": "4UyRFnJ6Q2mVfPyt9oniYTeRMqgVMjag69mewpp1ViceoNYDhSH21ZLdXmyPuEDrVFGa19wNLufLPHy82N3sLxgm",
  "key17": "287Vf4CZJcEE8dmn23aCBcZeQQtbsqRn6ubtWXdFHEE64T1j3QhCnnsDp8wWeUbo1pa4YJtpiqrXDYZB6pD7z988",
  "key18": "3x9hSyTyvhmDQG38edj3gF8mei8r8c936iLD4shdyMhywbjAzhSCd7NrypjPjHeJX8KsSE32KCqw6u3KZ2CopPoT",
  "key19": "2dDcuZAKBNCmxuaUuP1rB9jJFEbSPFdLG8mYEyjSpoJU4yXUa1no6hVFQDwxLKgxDT85bYCdARiaEEvBB7XRvyNn",
  "key20": "4wLKBJZaJGR11wHnb1nqTDVWKEhNo7FrzwHMFuVRTrxU5xo5AHhdDwhT2cv2cjzVFHn6dePSjeagk28Mqs2SiLdj",
  "key21": "2rLtEM4X5nR6BCsT183jhsnFvhVTo72PdJVVCRcgRnvJXA23WPiKNYTbpw2cBesPx3FpZFEG1Z7nftjDnx2enC83",
  "key22": "5Th6UcTJnYgLpN8KkL5xSSSX4iHaQAoAMPcGGHUeLEyfRnCQCW8BcCEJ1ZAWvJHEmYCtrKwNEUFts13h2nw7xUdN",
  "key23": "4Tf2eN12BZQz3uWjSeSTn9nm29hYEGeNr5mZygTFvBkMJtND6y2WpGwmYhsgG9UUkoNei61m2RmKQhNfR3uuDH4f",
  "key24": "3aiSzwZMZEh3MQpKhxujaVpMaGPaWiYS195UezMGLMyfzaW7YBHyYj7bxt8N9wEr4zYFd8mv7EBvTMjwFuDvUWCn",
  "key25": "456SVSEDoJ39njUZ1Q57FeamfCoC5XQ3BtMHFWuDS5dVDDAPNiku3xVxDXTbMtz8jKjgWXUV2pUfaEgAjVHgVBm6",
  "key26": "4qRJu6BMWsXQF4vGTr9VUacDFu45LpA7PXnsATepQHcbW3EaSug8tXsyJVKwyoNn9p6QtA1aVPYvS7tRE4qHGfEJ",
  "key27": "2ZPcEkqK9aU4tYd9aFTe8ykUQ78BxmHsLNaxwDn2rFWtUppizgC1DqDpR9hTiqaDiwpNkTtZVzMfbyQSLzaXT7pi",
  "key28": "4TVU42XqwHwvKEh8StnVVDmcUS7YRcy7KZ2oWRpuKayDTmfbeueBdXrPBfvTpG27z2xjf5XanZtaXRC5YJkhT48",
  "key29": "4rMkWYm3X5VMqobjaUCQN5Z5xRVsF9nSpFFZktePeVN5cNbuZCEAQsvcXRmXeC5A4Q3PMLeZKfBxiJ3AEX5bBAXQ",
  "key30": "4NXWZVJ2pWGf6BDXgh4tjoCo3EgdD1w7SWQGXBYb6xGHXiPmpC7qb6QW5eA5GZrNa4Eiya9U8JYpXyTShyCqqqUr",
  "key31": "5s6irJ8mzf4vgwwd1PBQXmqdwchqp5JcLbSBxmmBoRdM1Nv5GDrHkN4w7qSfcE8VPcmYrHJwPLgk53CCC4DeX7Pc",
  "key32": "4oqxSSGLiGqST9ckzzJrfCZkHWCfVmWzhAYyKQkugGeiqdpLhURETnDaqeaHwJssNY5xszRUPzdsRUjcJ38omyKG",
  "key33": "LGhbqWpfs6u1XWpZahsj859GFUHu9f6h4mqgguiZpwgCVAg3PaXSRaD5HKUehyN4CSp8EA9SrDAF1STvMdn3pev",
  "key34": "2gFTdGVvpq1dE1yCgyUqkTmGrAhY2ddYHDDhzBmC5mPFgJfCZVh94WJ9kwmUbDVyV87zyfePxNSyhnbArT1k5UsS",
  "key35": "2GNFH7ni3VrNccmAVmipZLKN1sEo9MiNh3SKnFDWGPqcNYqAJfrgtTqEfiJGbiRtxTWwKEvm36G7vT7FE3HaCe1q"
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
