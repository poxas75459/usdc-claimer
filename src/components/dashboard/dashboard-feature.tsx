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
    "22psr9DDSM83tj8mayZKSGs5VUdQHafjN23F3Y77Ht3ounaKERZt6MYrFyxQPDvmbkTgcs8xzRpE6osCKNjCS7ML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUEJdhxrTBXaZbcUr9dRvf1DkK2md4nncqHTDvBDPycMzFzQ24jg9iCzRhPjR4md5M6WGsA4bu52a5jce4z7D3F",
  "key1": "PeM2N3gjeWA9WcVG5ssdMcDXvURfnGiSQhXJ4hGhC2QoNCkFe4AYcJi1PFwE9NPgCm9DgRsydWgdzGfucinijsq",
  "key2": "41iDgn3TUoPREq5QZhEUfwidnK86S6tCyQ6tG1wQR8kXVRBQzfi9vbWU9djV9SSgTtQsK6DyVuxhDAsjzmDR8Bw2",
  "key3": "24k9YT8LfFcGtUAR78cLrmE41yieDUaUC948xFfpeZawCD8QxU8Wx6REWtCkBT3D6rjye1VC3yCtyXj4nnwPUgYM",
  "key4": "2BDVL4JPmuDB9V2jTGuzR8agixBwA3umCNxqTQwWpxyFpHothScRY7Ci9PYFeNcVH62uMJhgHvUhHk97UkQvLSMh",
  "key5": "5KbGSWdKnnNFDANQSvrB4hr5n7j9suBdwaN1zk4VoGzPtXbBDLwd9w9tE9MxFfzdTkBkHkibiCrMhGouQVn717mS",
  "key6": "vzLeLfuHBo82Fw7UsiKueEGJHDqp4a3VG1yYSAdePun4tJxQfSEdw8z95qkGL9cMHWLUFRSpr3sFG3k12z9dHxB",
  "key7": "3SVSaNnc3e3DcgVzGD5Mx2pk7hWRjjDtmnvYGfzNToF6vWkQn4juFwyiqThinkWGFzWbGeFvaZB6N357VPPmoncQ",
  "key8": "3WXEN6b2KKNa4UzjtkWHvPSM4J3bUJyNb8EKdjgNs4hjcGD6d5DVKXeUqbGS9gsFMp4vcPS2ZrvJHEk8wGiMXNjP",
  "key9": "4hDKyg4rPKTi1TNdwS8G1KStoc1GwiVuhG1kAiovEyHw79AptmH3jtuoXLwzUySBvJewDXbqs9Yyk727fP2HrbSt",
  "key10": "ytK1nkJxUDEQBahk4PHE2ZubPysHWwyvawrrNhSv2bdun59vPsWkAjcidVdQ4Z4PkoqSJ4teodmAG73EnZqrxjg",
  "key11": "2DzN8dZ1u3crvBo1wbgm7A7EtKADcDbyqbUQiK9rvKd1JVQ7gpaKS3tv7dyZ3YWH2ciwzu8EZdaBY72VK7FTAn8D",
  "key12": "54FjujzPdZihTzDVV53EYgnVXHhXErgFFCG3rHrnv5G8N4aj3bGrcThBUEKtUYYGuEmv1WviUaemtb3aqLfKJhW4",
  "key13": "3wkUCpNUWuxXfHCHNXAda45tHJ9mx6vTaYAJYDWpmofbeyZab94aRmu8s7L3L6K1R7viFz1qUBGKEeCWHduh3ygN",
  "key14": "5cCiPRFgWDs9MTcmH2zR4zHZVJk4eWKvuNmkvNpxKDocUMGicLpQpUht3zju9xH9QKTUyEzhjji38SEQC9mYo7P8",
  "key15": "borfXVJZ5FJLuM4MCXmURk68Ajrv15W4J7RS617BGZhWp9uvdHbBXRhGFpzuFxh1PowXxLVKJ32WFhgKjxHkMG6",
  "key16": "eVnzpcmxjtrGfJzuQwx6hATowawRNdJT1CovcKDDZAwKdG6qRZsNF7ZruwGzsWjMuukJqExa3UnyrQiDbVeSpC9",
  "key17": "5mRGJn5E8pFVvwiJ7yxuWno5SduwyY7DKr4jXiACZ3hg24qVpMwXBd5FDT1u1SNjDjaBAVFsxTzTwYisku2ca1J8",
  "key18": "3cg3SHsrgvMCz7oZB5QnCJDy4bTkL3JudLKdkgbQWDkQeK4H9YVP6Vu7a7xKeLh5eL9MMECfDGTeNpWHH8t3RrkS",
  "key19": "2nHjBuHqMhVwzCqqpJFQXvau74nR6ZEK6MYV5NEaocFNwgAYrXuC2wFTPXNyMq4RAPeiekGitZ4kaV5GzZzcXypo",
  "key20": "XoFtWb9ohFB6dcCTWFcyKmLvQJMLMUeW1pJQTZnzbupS1z4JLcVZHNT26Hea5Jo7fM7jF5ZiivCfTLfBKyUgHU7",
  "key21": "66tuAo5WkawA76etiTbUXghvnfsALvEn1YPzLsMiJaNYohA24xDfJrAGRPXTPESEGft98zWRTL7hZnePuFupZAA",
  "key22": "43DyC1GgU8GZxrVUjh2245xS2g6Leietrmm1JTt7r7Ac4PCPLQwxUSKhgLU8xH77rje3bvKnDyaxm2MUiG2eXmrV",
  "key23": "4AxHeMgyXGdd789xXwp9kdfRo4jqgrQYCtXcqDD7ELyL2cp8FvDMURgJRP4dthLXLQqy7Z7ustigDHkTgwWUBrKy",
  "key24": "2r6ojo2FKW9fzzNeeYx2YWyrk18Xf5mKwbA2Z9SmJSJqM9cAcoXB9rG5owykF7dCvZcyvuPZAsdED3xJp6hYkGpa",
  "key25": "ALNxbKF3rf4bwCkSH11rgZQ2MFLE7LXaCaYcjvDUR5qz9SUF7ugYR1gMWAWEVAFfpjiHE5qkd9CPqbxgkfhERav",
  "key26": "Rh3ZGbzMHyvvZbLBjJBwWC1cDa3ef3CJt7925tdsK3VsNKzDmsWtRrCGSUttXxGdudb5xYhrFiNMNkquw25xpU1",
  "key27": "651B2bi8SgKMnvArFBhVNqPonjELJ2pQ1WsPucrFU8VeMXtyYfMJ7QB6vZpsu8GR39HnEcS4VdaQpRjjwzZXnpPx",
  "key28": "pogcUCn8JtBeHK64HqVszkA3BBUHdpCvBnZppNZecxmJsqDxRqNvLKfZWA5s449cRty2DUJDwooNPSHN5wGgqa2",
  "key29": "3R7s5zguUg92ngWeuaqnTmB3TnXSgpAXZoWkpu14ESvhxzYorbozAEEPaY5oBhV2czmWMNaXswvqdJ2FzQ5MVzPY",
  "key30": "3ydgzxmK2erxs7cuCXkSU2mXEkcRh7gvXZVjEYmANH5rvzDeNd2ZKavLhCq4sMCGQVzCANd7RJgGdz3SnNgAGcEo",
  "key31": "5oyjqKHkr6muhNDLbaZzHVnuAuToxat9femSX1eUGYeLMywZsM9Xw45Xj6xxBReTH7fmgw2LibMrU1RDXW9T6BNa",
  "key32": "QdmDK2pwtjgTwY4YqefwauKqJt4nGWcA6FejRoXZ16b4UpG1QuPjqg9Kuu8tiea98chvmUAzjEYDftKDu2YLycc",
  "key33": "59w6EFh6gQ2NCPs8s3aGTXktwvSf22L8GmRACwAKgTT6CyBvZGSnXNgP84WqgwehWPXPQLPmRQrkq8jBECdeuBs",
  "key34": "3kf5Mxn44GBJh1Ev87LMK6nyaQifzDDCsAkLkgbQWT6HgifzybBfPQNFEu5Rb6haxnfzQXgT4SsYcoyncYVEcsRz",
  "key35": "2LtAwuvN3C6GP2F7ZbmumqmCoXRv8DUnJ4axEzghMCZw4t9FrfXJrQeEkMAY5BMrSDL1C4saBL3e7zsf8di98DdJ",
  "key36": "3tRukPWqweTe4U8h1hjUSsYXQ9cF1TnF7yDRRJyrasCmgUUXSFG6nz4Zwt2jx58Ziu5Vf1hDjRrpNfExUhf3i2fe",
  "key37": "245yvoHNqTYvUEXYCdhgBHvn3n7feWq6BgQeMHG235Mudp8sGzJVhXrXbi9EuXdTNxsRCFqfJmiApvMSitCqyruB",
  "key38": "5i17H9ZM4yYRdi2KcLYkKHZEzjPuCYqTEogcq9yUKpiSuWpFAQbYicQ8BCYNSEcg94D9KfiSw8ueMbpWirM8uUki",
  "key39": "4Ewq8YSPRmRr6DjxzQSVc48vuyUcCoRzAEFMGRBTcrVnVSm3GxQZddUnWd1jjpCczWTHryVy5r7Fjk7pdYG583vt",
  "key40": "55P2tWKa5Lk3obHrsKGn1XgxD6Q1LdbML3ZTRzdvWFaibyRcpY4QAjox9T6Enf44brwECR4ta1SKbXbw7Ym4f68"
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
