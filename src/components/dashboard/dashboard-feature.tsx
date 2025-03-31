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
    "YBaFWaGBhXa9ZesNTi4KhFwBvbCH8PYW4nma2gyCgiu4taNHufjrggRagJuyQ4gRD1yZzmvD7rHVjWeXqgCPG1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exSF5UvCSU77JWnutMg11d2Ag96KZ2edAdnAAEVUj7z4snPM5cNBMjBwVgNUSq1r4LRSdSMYGFZ48R3EifvjgpB",
  "key1": "2odCriQZXYsJMMHLKq3ZUnVrcoAZ6iXpZZJqX5W7t8nBsWLBT2pwDazPKKf1awo6Usk62ospEjDyqq2tvYQFjkTX",
  "key2": "3oP7AW7jJsxcXvuVZ1m4Vi6eGgQKTTg6YpWEkg6mqFyCG5hrosdhvGWFzvXg1tCUTkXJHS3M6BEFxD5UBuxRTmmQ",
  "key3": "5qQWKkS71C7mqrj2BJ6tCVbNh6jg3JpLKGz6FhzwvgVr3S5jyCngRbJf3pRc4ezp2tUvFJDvp1uZhR3xpGgXUJtX",
  "key4": "5fBy5XVGCHSKdqtqufa7qaSZsJQbsnxFNHcwCoMQZtKSyKAEKR5HHPoZvQxV8bYPvwRnepxRBHiUXfSZijXBo6Rz",
  "key5": "5Q5yGvy8a5cTJwQi8hTS1oEUnkAZAFqn2w7QBm4XEKUwsHbF8iPjtduPndRaXRkmiHtoXMkoy9GfKNXBMCNAC8jq",
  "key6": "3y5mAkLyd5rh4KdYBQsck8PSEVy4zgBaPAAe4YhHYCnuP9fPotPVqPcJJzjpabYtSgxFetGQdR4hH14q4whyS9ML",
  "key7": "2zWSuuiHAgknjVoywfZtSiBLzSHeRB3o64gzdhiC4JztG9Gj9iUc4P7vYeeZF7ot7CdYd5qnHrxhbV65SYSzcFQ6",
  "key8": "ahCRpaoNVcuqzPDN1wzV261o3HRsHdfFvBXaGFTLjCShQG4Ar44PCywALwNF7SjqXrkivbL5tgPzRegu4Qvc1Zf",
  "key9": "5beo4iD7hXPa4L49bgrADG39QgZNR57MMbdscD6vjBZE8eRcqi5JeRMXG1rh6yNLFQZ1P4KcvYpfVCHrx1EUXCFK",
  "key10": "3KiSKgaqVdWeAqp2KKao3QXzi3NkN3dLd9DPebTZJncZsfVXjkpWve7aRY9tpaLFaJvP1HbaErFhqSWSdHLNJ5Ns",
  "key11": "3fMc8trs5h6LtRgt2yW3dtPQ8tEJDd2fVD1XYKgH6CAwKJ4Zf1rnWJMVemQ2PG2VAvVGL5Qohfmi58aADuJvdg28",
  "key12": "2JHJVm3heEjdYnQyVxJ1ogfFgCbWJfskVxPGwqmCCc94ec4AncXTq3wBDeocGfcoVZ9cxzGPqTvR24pPhfRsm1MQ",
  "key13": "mknr24JK6DL33SGjHiWq3mXGZmjEE6DNSJyVDH34X8ppyBUqu7YPGPV6QWik2mXTWKmcmoW1Z4SxJiWwjDijK5D",
  "key14": "8KcKGDNP6exqVNbJqzZbJZn41Crh6ckXhEabcBYMiG9ZQp8ifBb8D9fW4C9xxpYqHqK7cT5PjfK7zbYWYLtmkn6",
  "key15": "3UBGWanp5TMkKY7w2kDvmSRs9aYC4tt4EAuprKTZPLYi4y8zJH8nQ5T5rS8Xf4T2HiwEwDVt8ydNVC1smJbayEMU",
  "key16": "ENBDjKV9ZXoxHoMk93xy6R2qRVcvCwQgz9nDDPndTWaCc6qSLVKHb1V2P8WokuHS6uru8GxmxeS8BYk1vSCBJLW",
  "key17": "4xQJStd7DejoR9pL5hkzeJjJoVqbXnGmrTy1HqUNPfCtc7LL1uqXS9GP59Psj7JYnd6sC1XdzjpUjevTQQbegPqQ",
  "key18": "4e7esepqT89aefvXRjz2btkwzWxfQ2Gd4ih2a5VPa6NJieGEeJKoProhzihdNkE94FKoLF8XHXT5QgArmoK1anQE",
  "key19": "5yuVwGe3qMfAvvv5ALKaa8eYQkEtMfgKnw8jKKzCGMdJuy62BTkipZ1TJkThbYSdeseiHWogUhr8w5tHAZG7uhUN",
  "key20": "2RUL9wDwecerg19XXmiPFQpj2nXcJCd7JEbXTheT8qT4eU2msA7VbRZGYkmHWzpWvsWoVsFgNj8WaoCdbvMUv5JT",
  "key21": "3VWRq3t2q7raz2iNrHPK8ttxymsvWXbGnEfAsHTfLTafS1cCqbYEvS2xZHLA2wDf5vM9QmZoTGp9wWTvSd7RXUJ8",
  "key22": "4sKtShDo7XxQ8jFA935uaNy7YtNFiDFfQUvPNvyXjcVcZpbccFfBDs4WSMJ8ocdWfdE9LxXor2pHtwoo7RPqNTqX",
  "key23": "5vbs4trwuXFKatXjtAw5Zf1MgcKuNsoEVsJxxHHUPHUiNG1QM1xRQiS5YHex3vhrpurDG3CoA7t9X2PWAA53sjdX",
  "key24": "s1oBzZzPMfveFyAf2FMqeumT7nzkDMi4kQZvdusrqSLxiM1kqSqXh83GT4Tnjwq4JjXT5uzuyYNSnGaFNU9jNJz",
  "key25": "5yDah76qkUikr7HH6h3nX4zU9T8HXc4S7CYaX6omxddieDqHbfHn9mGPiff6JiLwm2Eeh6ZxQftdJN3GawQ96kLH",
  "key26": "mJWny9DUrGeGo2wu2idKErDxUMuo5X6ZhcVgTx49JLrCCcCm8XP2SsyonDktibptx47PS77aWWK55QtxN4D9y2E",
  "key27": "25xjBnsxm5tRCp1Dvk2HkYmgiCGbNjm1ozpJ7BtHvyz1vTANxtNyG8cedQWu6KuC5wYqtF6RCMDbV8zEgZMwACVy",
  "key28": "5vyiijKjYYtYdXr7CPnFoCh3Rc2iiLqpgeoVM9NfUnBZypb5o3QQJkFJHdyCKr6GWLcXna5p1ezxujLE4UMYg1ny",
  "key29": "4ifbjRfLF9sszde2T13EzxosNrPnam8Bqjz4kGgw8oUNK1NGMMnWkApczSby7mqZ5qhSWoYSra41qGdsRDr2ujsZ",
  "key30": "36UYdhXX9dmbWc5ZWjNAn12Atak61h3j4AHBE4hkYw6yt2wrZ9KEoqVJMRrfFVA7eDQ6sqBTtBn46j62VJZFLFD6",
  "key31": "2RZEkWXKxz4uKWPV2f9Qy3qVgzonJjxYvULBUJvmThjnEKYMjWsLqYLLHX3X9pn4p6v4HY7zpMi61moDiMRD3Zv7",
  "key32": "2fwjjiCCBWkwTg5BLJdQkJ9qG8F5wdKmaRkzzQeiwpirFweXo4QFWoSK9J3dqKXzBFbEWdvCDMdUD9EwC2k6Qp1g",
  "key33": "5MA1PJEH88P1u28UupPdZEHCvNVsJp3D2NnWQJ7CGBCo5un5Baezx2VxVmzvf8DWpAWGpQXWkjf86EA3gyvvZizD",
  "key34": "3iDuRUGCmBzJJF2foWirXsyXQ3WEj3TFsEe4HMP7uGqcztvHHdizKXcqmWpomCnxVLRHX4otjirLVTQXTcU1duLH",
  "key35": "2gwhuQBeHoBbHbBZxaEfSxypShpepwEzqk6euYFZ3mN3M2QsXBPphWJLKDgpfxTrBzezac8uGnHtJtNZV7kxXUy3",
  "key36": "2dwvau6mRM7BmSdcDwPxZKtpJZT5wM39SA47B7BDo1VyRwfPnvuTDXs9PiDMb3M6Co9B9q2dXVttEJnxjsmmsBdT",
  "key37": "3EkxCp7sbMm5JA4fftbFsw7ZCb6V79CJh6ckJLuVVriXWd6NtfeFjx7wttZf6DDCBv4x14Kyo5RRGCytp9FhyW6r",
  "key38": "viqJWmSsTVe92VgdonBSq7FuiZTf1FpyjGt6GWenebrzTY5otCoJmgfV3Gk69MYuitDKBm1ByWxj6aap3FCTP8P",
  "key39": "53GL2UDeRqTq3aFu8D8BykFMrCo1tkgJA5ZuNTKt6kYDBTepmxZGKBmiPHL42MivzC5edTCh2cYoRAGVbU9qMWE7",
  "key40": "2ht8VtQFP1yESCG6EFBDnW9PXGhRcbe4P7D63pLocYXp2yEFs88YexyK2BMvwnFLe7TuVjCbukMtcc9okz8N1hDR",
  "key41": "66T1sA1v8UG4oQj1AySh5cBsJBPFuzczE9bfkG6j6BqbT57JX9VsxkEUPjiQN771CpEkSjfjRc7pE7Lw7MYsuA3f",
  "key42": "2MTDnJo2Xiq3Ufn4zFDSCaKBzAb7xzNWUMRKHcb7ibokkfZC2bHqqNT2WsrWVUTUR7fZkTB8ZtaUf2ZURys1Wt7M",
  "key43": "4cF3i63YPpeqtb1uD2atasT2uM4bSaf8SeWUFpeBgnTL7Qk8HQnNpdKYsERPDzS5hABBMXaq1z6FVyM4YTka8fba",
  "key44": "44jUdsfaL7hKHDWCdfYw8wtC5mdinysceHvaztjpyi16cVxe27i17iD1bRprrddtdVVt3uzhjMgyPfswkQuaBXBa",
  "key45": "297qXhsUwaN3hazYAtktRoGdpqnmryDki2YRNAChJtkKBGVqzihBtgnwXWntxABLwFm1pqDTDJM9mgaoJ5jnyS1Q",
  "key46": "3mmXpL6veLz1gjZzpF5nZ4jXMXjUAxZgA7MNZv7312xas49tYpbuVjP9n2Z7PZ4oYKfXy1BifL47kyEizBno5suX",
  "key47": "5h8cwAiUtMSjcodxtbgE7PWNqqzsXRW1SRnv5DeXVrx8K31mvME3te96zF9dnpbK8eijkrYyFDersWViczW5AMXm",
  "key48": "4gprsD1CJooSNEATudktCtTTNiGrje55PJ9jrXEZU3971WLTaeiegEn1xujBow9HriTwMtUidAqzG8Ve19fLRtrq"
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
