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
    "5zZnUGaWSABKebAXuemiwLUoeguqUeLuU74JgXpsQRPz6RujBPj54XMD59vshV4CeWAZ3KZpSKwiszvr44DMFpUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSvizQryAprU7gBdesi397GmtDtXsvUF1ShTYXKDnpwawSYHfNLrpArqz5CmsPu8vTSDkS59yNnThdeuHLkv2t8",
  "key1": "vbLRFPQCZVdWAmFXhtJSTut262cdXqrEqXJsw3vUsUDS3fzaeNSKUey6cJs7Eb9yoardEuspVwPHQ19h3YUtrSc",
  "key2": "fFHLa6G2rcWhew9Tq5cbXNgNSQb1CfU4uCHQSE6era9qKFygxMFu3itupJzYvKFB3EryTHYCnmbdTA9wVR2vYPr",
  "key3": "16jUVjKiJghf7ewWRUxRAkPw8FQDk9ctnAwyKtmRwg7Gm1h2g92LntnGaowso1ZtLVhwMZogyQxaUayVk8phuAD",
  "key4": "3wGRSRnWFNuAHzysTHTSL5Nf7SJ4g1pca7mLXbND7tftzNbQnpWzU6RmsLCznAXQ6op4SygFWb4NWbqTzLhFPiVV",
  "key5": "4NLaYqZKnJmTnH1fmKNiKxMfrfsZ73MaEL7d3Re6BmBwLRdJz9iKkNqBN7x2qg5ghL5Rm9jY1EZcs1RxaiydjJg",
  "key6": "4wsQPxpGGwtL2ASB5zxqpGwcpoGTsqDqztCAgQz5BM7Rjp8EU3LAhXMJCLYtv6Wd4YzAvZKfgy1tufM7PDXrFJqS",
  "key7": "8LNMULqLWN1pv9A48smuk3M27rrWUfZNcMwqJusLzqGkRdzXdQCL37DjMi75t1SJNDYNdJmMm7KqF2AzLtWNqoU",
  "key8": "qBHxKAtQxd3x2X2j8MxXFMAefE4R3pYHmamzvmTFqJj7EjXn9CjaFPfsKNGhxj71UxKXouGyjUcKr5yhtqDPLxk",
  "key9": "4xMJCs2vEdsuAZVtVBrWPp3bSgcudShGxUpoFRV9HuxC8zbCWV85uo56kxf3ZAsRCVrqxSWE4rdURAkhJeo4yqkr",
  "key10": "2AS9owpBWHhTkKnAwSoWKHHmQefYFYu2StXBM9jDHNz7dX4ZKw9PazGUdP1hbnPBMEfKUFN9RC1yesPLMBiqMZQc",
  "key11": "sTWwLm6H9TGgB421yhAAynjZjELyaGbXmNXsC17PHepFvATrr7JztFgAZS3p7nwQeAYicDssXUbTKNEyte1Ve7d",
  "key12": "2B1bgCDQzGRMQU1bbZCTxsrPucgpu6kN7MzTTrXAwekJu9MzQA9ckxRYVRj9ToCfJQQxZrxZUkV9QZ5EQ3P4G5G2",
  "key13": "5ZhVPVKgRxXwegGmKiPowLiySCJnEoKNTYFhUqZAN9Zysac7kHpkg3bBvjLmhy3aMS7P35nxJC7nizkVuhPx9LL2",
  "key14": "kbvAf8CGYugpNhkMvg3ANch1MqbzpFse2mRmA1CMWYY7t88q1WTcNcMgaBRc5CCkd4EQcyaZsjwAknyzuxKLb9M",
  "key15": "3peurCzVa1v7jwswHrnABEmxuPNzo3cpeYoJuX6W46vYLfEKvx4Xwa8Vkk5QmQ6zTB1fevBMtEUKMLMNsDJFBTAP",
  "key16": "p6xsdjZmsccKrbcrChjyYVVHoR1eCdpB675Pa2Z2XQfL9uddZFVoxBBg7UUAf89mqwzmfLNBCYQN713CzGPXKJN",
  "key17": "5Qdz7vRSox7fxdSJJTHtSBncU6T7NXe9Gdm86VcKu5cxDRXcaUqc6aFuEJ7QsojANZPRqhMyaPEfSoMisdJLXPnd",
  "key18": "5tmuULbfNEd7V1fZq61GcYon4yzBGUuzpPz4qz2rPfJpa8ypFFfcfnM5ZpH6D4hfWApZpDU2CdNrAMyCNBdgC7D1",
  "key19": "4NG22V2fycwPbeYevLzxJYWD7dJHz61nFrCndFy6MbGw4vtiAhkwpUg64EYoGZryYer6K1krKQfGYa2HYf3UPHB4",
  "key20": "4VemBVWhkZkTAHcass64kXkj82X8ji4KtXP4jdfbkvN3zGKx2Ky9sZBBZrbWEmDjQ54P68d8M5ui8CXdR4Ru4r96",
  "key21": "3eAHeZaZJ5kepd4qBcgqnTqmCNtNAm98twS6BqGobEavjfovdWsTSwWWKVuP72DxuA5HXue9zcG2xYVC9U8kK3v2",
  "key22": "4GfrYcmiML9jgNgyNngEcDjF9vsMQEtZGQvaZAiMSGRhM2bKhPx3iqJYuBEFNNC64xAP2EEd4NbgGx6wYrLRsYaA",
  "key23": "ZxLhzqx9T6M8dszS6To5CYaHxCJ2N8ukf22toUTQqNwbTo6Q5YqTXRWYYrqnqV4m15Y7nRxwjTi2oYbBneCn685",
  "key24": "5tyx3dPogctK8ZtJwFPGYWZfv9hjxNZ4H4hxf1cP6attj2SVDQa3VCHwiwpurjzFMVPREBSRfDZbU6ZKzXvosJiX",
  "key25": "5U1gX9WSmL2Y6kkbmgsNZTfULohviSbe8SudhFa5zcfrSYTunRDLsAJems6LYX7Qy4z5K4eMPtzqvd9dnzn43xZf",
  "key26": "5yJhkZqyqG7WVebKVuaDHN8CRfjLUhWtTgQzUwHrxEBjsPMLnSoBPfLouzgcEr2eh8WokKq52Bx1MbU6GUzFeEji",
  "key27": "5da1tevmtCZQWQjEbofmXy9J1uefoTrdxjJCwtnuFsWoT4RW6xwRJnBjsT31fVUsJu1cr2SM5iekEST5EANnh4Pz",
  "key28": "2UpJXG5YYM1tvBMZeQUvE7z6KjwiB3JeoZNhiwdr6uihiNy2dEMh1eHVb2Ye5zofeh1uivVGXhSa8MgTz6Znf9Ce",
  "key29": "2itU1bjEZC9Bv11d4439TPgZ9h3PZ19rhyzzJhdjkiTc3XxoXL1XRNML1sRdcCjoLE8iHD1F3Wqv5jaHHVXGMJQf",
  "key30": "2Pf6XE3cZmLc4Hthn4bBXV2PSRdA9RpG1KGbY8P6ZpQFm7EGUnqwZoryPTX25sjMq5GXFdH2S2344cEgpHeTUAWa",
  "key31": "4Lh682tSnLmiRbDhHVHu9QBWeLzp6ieX6XoQiX7vdFQNn2h58gttHBpfZPZHPXtfVfsbdt8DoaYmVGQdqkqBgvk",
  "key32": "3eorcecA141DiyQeM3UkYnu8sZZhCLkfvZLEKKTFr5Ug842dVBHgB6zN1NUSPnGf2YH6YxZW6wCsMRAEtWRzgFkD",
  "key33": "5LLH3fVrVLE3xCvJyNytd5B4EMv7jHCfkWHGa72ngbPdNEVyNd9yVGWpCrSeHEYzme7okscBMFjpZe4VFnX4pqEQ",
  "key34": "5REhexs9X3uzk5K1HawgpCJHLDZeQx6mJCPgFtLRkVgiEQPRuJZiJ2s7a38zM3VcrGUhWaL5snh8fCr8zhJnr54j",
  "key35": "AurPjEqSyCFGgiZTBaP6PzLaHRsbBxXRpBHedy5NZ8z1gDJZHpdJ3A2tBgU94Rve68it2t3MAvFagSB6bwZkm3x",
  "key36": "QCivTXvoWQEDJBtBer5b8RWLauAWuzgWtYJML8hrAxFDEavcErShvFHKhpmzDH4zXikrQaVszfnMT7aPw87uVqC",
  "key37": "2KbCs3JBsLN7ooUehhPy5vTu5b7amb7wyH5vXYv17kHf5qDmiDWD4omr8dk96rikpkLymnduCcPbZExSbm7q3DSD",
  "key38": "3wuSud1BbZcgdNF6tnXqg7RfcmL1V5xKEnoHtkeQcBNL3peHsGxtzGwQoWJNuaaBoiobmiqDSEvHAobBoXhhb9vp",
  "key39": "2dqyrivG3T8iH9GaKu3VzPhDuqfZEjddQNqbqGRzZH43bpAuqTrVXyWsGxXcz82i5xsMLBrAJD42nfbgooejmd3T",
  "key40": "4rPmCrwZqUf3H5kqGS1L9twy85CcWoDZti8QhFypfw9577sTm3Yw9CeC8GcvEMLMMb4Lw7Rm6d7jPhqnXspz9ZBt",
  "key41": "2e7VWncsPfePP8jPfU7YxJbd8byRzzGU4WxAD23PdFunpQMeine75uiSPe473nJBrqT3t7KtcxHbwvadbEzsfsi5",
  "key42": "4Kqg2Lt7yCgQJWgnoS94DjitYoPBUyHGiRg2Cyk5pN4YMAcXr4NX8a6E7pzKCP6eVV7NXDkBys3HN4w1uA7g6fZR",
  "key43": "5QhPNfMWGu4SNLRRCtg7Smr7nyhUzev1qpengdfqgNNt3YApAzQ2SLWuhpXe2DMzSYj46P7Auz3Ta1yHLTtVw7nb",
  "key44": "63UPY5cTa66zfPdBdtuwS3TRbH5kYFdjXGr1xsMoajUCB7Yz2NkyxnLSXW7Mp5GiDhHiJUzr83ZjqgRrQNXn9UwS",
  "key45": "2HqDVwCxN7BRRjHh23axXuNfUccE6J87ermpfn2oasC7hrPHtWKCAB8Pf7L44oZUvjjpz2Cf2YRdpm9DNinJjCWT"
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
