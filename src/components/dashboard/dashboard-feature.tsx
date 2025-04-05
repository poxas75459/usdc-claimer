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
    "56iuLrp7dnsBLfhQDEs4ThoC4qvnqoMBvaQ3uTrNNGR9UggTzwxvrHnoW9TLXEYeqS6q9YFeu3ixiCyoKPj4WYav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzXF7iiXsAYkkvacFKt27QGxX883UiE47bmrLw3bMH5jBMzdvEg9FbLDGNhcXP9AN1x5s29jpsx8UGhxF1Tk7j8",
  "key1": "49YQ775GMXVjYb3YdtvLRQxPtrCxidMo4DfrDSZqFbCcbocLKmEcjPBmthZjn9FLamd4D9poMQg1TLmiaSVXcbWm",
  "key2": "5pTfm222ndEiEVxqaoN9PCPJayDfdC8CZyPAJtH4rErXmTFCtT4Y9b9GhaZ5mURUAragpDnnEWhzqqSur3Sji7Wx",
  "key3": "5LATJF6LN2gxPRvVgprKm2egtFi4FTnMMPEETtnhws6Lnqmx9raR7PUUY83hnESvNm1iMdnE69tvgF3dtGsy2zsb",
  "key4": "rULMywVKnXtUsLz7nj4rzNcBzHCiiwBKH8hX66th4GsZuoYA232djiMhWkkxaBWqYxr7Nb1hJ7R9QHdVVJbDfLL",
  "key5": "4UN24su1DRDU3RyWeRiq17c3zHczahDHozUGed2KTNYMWb83kiK9fKs96Zx7RHBFA3eUb4DnFpY2w3w8pMEHNzyS",
  "key6": "24GDwy3trPdxBRSGrC6dmzjepXPbsyZwHzNr2ue12sJv7dyi8NrRhfXZDbzKhEdwkxxUpNoJnAWyV1cJ1wZEFhJ2",
  "key7": "54t7uYNvtijdfNzq79LdCCvbxip8WcPvZiYTQPFTQfVGMibHjrRuiu23r8vtBKbd2pkxhPfaUogcN1UUQLJ9WzNX",
  "key8": "5nG1WjiHVtEJVkuFoWpU5mj47EBgaz2o6BoehJLJXf7vzKwCDDSSGk9d5jd8ULxwtvPCNzuwgLWQcDwGfQLsgTW2",
  "key9": "5Eec8rnmfz27HgWqgbAm9X67AVMUVj5ZJf3P7MWJ2bnMjUEBGtH7kmmkmxTGfgbwc4h8d1b3fXrebCkJZG6TCRU6",
  "key10": "dnFGeaLKpD7JqyAfCEguRMsn6fUrMSxZjyFQNwkCzgbKv4TezoexztVnpNE2HvrApK4NJ7yeNEVySisqibqrdN2",
  "key11": "3X14jJhTPinYBvHofKbtuGkykwb2ejRayypmM1hSF2pzVpR1JMKbKU16wZPMqBtxPpinaB2eULkxM1hqQeuHmtoH",
  "key12": "5ASqLPViXD5tqE42BVVzSP2hVZhJK1dGZgVsCMNqqx8PQ2C5Mmy6WiY8azYLj6FugNoDKwVUgU7f2WxXXkryPhww",
  "key13": "4mFqbtbjWdFX5bGp4cxWoGRYUXeyQWj811Vyh4HXNga35r6LDzb2829Qg6wVjKJGiXPfFvWHfvTKqyNXxWPHaGMn",
  "key14": "2kfeQMmCFUB2Nnpcaq2TCjU9eeQ38zNWWmfMptEB2UzAe3k7WXJH2VDXn1YCY5ob7nAhsP3mAKga6vaV1nnCYAH9",
  "key15": "4bNDwJnhR2RyhHmPP2TiCaiZZcyRcK47NpBpEMQVL2aRddmjXJa3DMejNjkYkAQmpnq7BH3R7agiKoVLTFNbRHX6",
  "key16": "Ud5gzqxfL7XYoqLmu56KTXiiA3jExgNUwd4YSaYHky4Vh4xBqQJ7iNC6SqPzes6drT8dpFqSV4pPHr2VyYiKQmc",
  "key17": "gLvXh8KHVxxjyps3FQ24DzcbFT8ksie44oeQLo2KfrN5FqqjDpUDBjuw6Xp9t7XwnVEDqHsALgBaQTRGurBWsiq",
  "key18": "2qgUKKRaceeLyq1pnJXQ4MFBFQ3aUGvPH28iLPp2L6zC2THry1AkLKydTL2HSm7ursaFpnDvsYXsUSbmj2J4FPYu",
  "key19": "5KFHfk3rAnjvKupztpM92ap3he1kLiBYXUN7zRHVGz1gkwtjbcXbvsnXoSAryHTCLLPqXZJxmHcXjuLRvL5FAYhY",
  "key20": "5Y2heJNUcGrrxuQDYwQm54M1zNbd8JfjqPHNaanoNnT8DdQwT2CQCAdeeer5BovvzGgemw5PVwdGmUtnbrBzBJwk",
  "key21": "3RGXwZifjD511HPKTg1RarH9F2pmSczGsK4XT9Bdeg6tW6c3H6qshs13pj9Zsweyqshj7cEPVKxJAZf2Mhq6tpNZ",
  "key22": "3tMPWdEsMznaLf7xySbwy1ABmLG5jrX5dndNRRQjDtJbaj4zSMuZW6rNoovbzvFMVsxB8ApiZegwjzm6juskTJXT",
  "key23": "42Rra9QPghKqCjquUaqgZbwkUxw47FjK8oxKaEKv4xin9GffTTNELV41yKDr6T9zmGGSez7AZr1CZGQaajYeLm93",
  "key24": "vybHtndPoZJuaFfk4ndFbw2QbHAHr89Dx4GbeMewnojpsKbJLRbRAndxjT4TaEkffekbHGSAorScR5g13UmXP42",
  "key25": "MAdupE2oobGTg51RU3uztvMmovhqoFi3veMeBugjyTtvRiEY5K9AtVajBSCpdjva3d34UnnVMjcLHQaWTKdCJhQ",
  "key26": "4rA1Yz37UMfdRBPWAHdQvtSntPwPH8PK7Qr3BYzs2LvJCAL93isK77kYEaZzDhUcgRLK7GcrC8dEB9P8LAjXCj67",
  "key27": "V9Qxbz5Kk4opfEsKnH25w4uJsmFHMCAjhUz143ojdaZSnpRSj893DwQv9uTnSeSnh7tMqjVtJUM9sJqBnVm3V2V",
  "key28": "4CikAbVpvTKDX7Taz2USUmYHGScD5M4UrTLu7z72zeKv1GsZ8QqHynoAJoiYpRK1XxaaMoq8FPEjDP1beyLyi7t1",
  "key29": "4iE35ztXuGWq7LFFhpkSLqXBAXenN8Add8caqVwscZZGXkFwQjcMx8H75xwHzUwqmAmoAWkP8r4iYNCLJVxRirxf",
  "key30": "4oYQRY4trdmB9SAbjVmeKK8z1x35zK91UdtjrvXmH5t2iRLBHkjeSJ4J7C5Ea4kCwYJKqmQhZ9UPQtvVumFghbnx",
  "key31": "479ZSKjM5BYN4hM4JbYdDtYvS8N8seqC6MYpAixYrKZku73D4CAjeNgdpEKJhdR9t1um1Yvhefoq45wkCGYNKGYZ",
  "key32": "YN667Ckvgmo9xiEa4feR9oTccqxsKXM7xqaMswTYaHt3o9g4nhE8Rrn1u1ESAHfVqR63s1hBsoZDmPua5LwC4zC",
  "key33": "4yGEUnTSiUPYutNnrPpywTs9jsfr35zW9XmCAX6vkXMxw8ZUMPnjkga3pUcKCBhwrUbiNed2CAL8nAxYCZtxRcV4",
  "key34": "8zbETWend5kWB6q6KXApmPPJY5rZS44ANKx7gWiB7yHD9Ky3sNNNK4YXvGU2dQNyLzeHLH3V3kQiuEvAh8c8qx7",
  "key35": "E81kn8RUaGhj6tjGDsYz2C1pJZ2vDkC139UDFj6G63eK8ExyunSMWAYK3RXBrvE5jBQLcVNxD2KD383wAWGehN2",
  "key36": "GrhMJDim7D3HuPakyKrsZoGiWtiVM5CcPCz7te7mR1hUgMyxNLzCAKYcUexQmmSJ3UaqHhixecTGAV82Ld6qJop",
  "key37": "3rmjbFPzdtJuS1W7dN8xpkj8ozV1NbY5Bo6SvS2iGa6YTK8qGi6Ka5Z3dP13Ew9mba4DmSL5f8YGdPrPpJNjWsQa"
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
