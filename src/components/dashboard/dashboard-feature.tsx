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
    "4emnyTAphUmMhnj5NvUfT2wJngiZSiRAJcHbkS1rqAx6EHNMnL2V8H21ycL5PG58nKcPE5tWbbnA6QjRECGAQ6Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lhes3P5ATMwzYRYenrtMzhfDQ7gyRZQzu3bZ65LF3FmkA8nA53Q3vUViXXeiWd24CombxPFTZdTmw8AAyLGgrqG",
  "key1": "GLbtd9BXs4sNdJVw1cta1eRSywqETAUtT3mRtyEe8qGFvMwLidVzc6uFa7e5FjvMLAskp7jmKZsqWkKkozcTQVU",
  "key2": "3LVF18tB4GbcQrV95Yc7ZfPo8NpgMttDCXFjcGmTo7B4NJ5FqaXKbc2mU6FfL5dWur4aot8aX6zcFijBeHHy59dV",
  "key3": "BKmzp3qkHtSFiYVnsSKRtpHfuTFGAmmyoEBRnbJwSvSSAWBG9x6c2hXMmPVhsJB3iq9CcR6BTnaAxj7pc9ccKH3",
  "key4": "4zusyZAmGGRLd7FFiYzz6n9beuVY5Vz6KfrTnASUUdLE9JSFhRqmHgQma6LrMnW5Tv9i6mbNnatLU9hJGZ7L7JFD",
  "key5": "2RpRUdCeRi5FaoXYWJesmXxXNGB63vHbCcwiR4BLYcekwwrnR3ksajxarteXDCUE5fnTH3u6bcfg6jmACvSZ5dfx",
  "key6": "4ZnahbWmS7jTSEt3kn3oddEHhKrJsiYpASyVkWZ6YTRi6rDPzGevDiRcafBi5vp6oQBXWuP8TkFB7n9ieEiXZico",
  "key7": "2RVu8Fpo85eWQjJXN1BR6RULs7aEpopvxnJiTJQsKxw4TPKMmKUhPAQTS9GLSksmePwN1TyGKWsvki3Fmsgm5gRJ",
  "key8": "AEhuFi9Vv85feWpjtaxkNDfvPJbq63h5M3Dc3FVqDjyPvxSt7pwJ3BuicGiXtBfU3uM9hXLkuSi6fXFSpQBakRy",
  "key9": "347P4Vhraf9zPupaA3XHCuLVzT7BuY29tcMrQW47wNJuNYFHzAU9KQkKodAKvbkkXvi29kW74uY5xaHDpVwN7LdN",
  "key10": "3RyYSy7qyQjqR5nu4dy2q9AjHC9vY566ub1w9mMjzSnna6aB7J5UfE965aG796UFJArYrTVU8qj28GbfDNqGxK5Q",
  "key11": "5d97GqanaTT54NYYfnyFG53qx4K2RVqG19nmQhzFZsEngTJQp2nRZHUfnrBpMZ4P1q8b64isZCjxafFSbuHbSM94",
  "key12": "3EMBMciwt8ktB4ffairpsLwojmPaHTB9VMpYZX7LZT1e47UHymEsG4gBq9X2TppWj2q2xE7mVPbHMkqDYnptdtXW",
  "key13": "mMVAc296ChP1PogGG6fpy9z1bgbKwuryUzDKs5qvx7CCxqZQW3Nw2AxGKwCkmzZot9rZompyKxbqNyeMztpLddm",
  "key14": "5VD5qxKSP1jBTSqj4BivLQ37Xs2zvypKyDvCFgihzu83VVNjxkrZJKC94VadbxWMC9QCG2wJYdeN5Y9vbRxzFkvP",
  "key15": "2cMAaacmHXHZ2yS1rNVMSZjyxbby7br4T71kXmTaXZgm4VCdQ72iD6FuHyRmZu46fU2VH1MsATZRYuaAwuCHyqwe",
  "key16": "2vJsSex6itPtCh2HNbfuTAN9kZU6pBjGbkKFJN4TCWdPyUKYXT8H4hNsG7TnAiR4gQXmLEWgnE5NMjNzNSKmrVC6",
  "key17": "2szpPMtJwwdUxnTFmxTUNNUBKQuF6rzmSTtwPBWxeq7cZhvQDP7dp4dnV87CqsE87aU9SyrjymndQ655YEkWaUg2",
  "key18": "36sSHjhZp483g6cWCpsGeys6J3s98h9JHA7tcFejpE2U2euUJEGV9QYo1g6Cf4G4bqzD94h8iFm7rjbRgPXkJZWs",
  "key19": "CASCt1i88UqbUrqNMa4EC2JABxH7g7Pg9KXkJ4aUBX9Y3RL4Yr9oAHLEQmTnGXjCwNt5RjMRKoXbiNFocAbZy49",
  "key20": "4bFCBzjzTM5bGkuHUCqvKYJXcyj2K1eA4Uny1aN1yaCnocgCurtWzw3kao56P2ba6xDeMLekD5qiHMADH8Uq6wRU",
  "key21": "2dQ8xFQcx2cCLZQuM8pGmywDBDBcs7cugckdQxEbQJZJRzne7RRshd6xNwcfzfSJhrcCcxaVwFtTbAcaCeWWHNhS",
  "key22": "2rTwP7FWmSXRRjYHirJJUs9WyuejvP8zhFNWByLawe54TXoahYU5XZ7Jed2LYq6Gu66GRaZyHfGxrr5qBtNeWNa",
  "key23": "5PoAjNMnwWHtWnLjsiXfYYnZFJFPHo3vh97nRzVwnfUGwhXujaySibwypdmcgZAEbZ3rVZ1rqeR4uFNsxoBawkcq",
  "key24": "2rHHUaEje4kxRHReaPCdcZwQGYTcm31odrVqKWGp1eXxBFqgTTyP7SMBsBAGoBsfCqURv8J47rcHghw5Qk8G1ykm",
  "key25": "2NVSAKm8AQzSBYFo8GrH7uroQhiMrLPe1JirVdkDqJJ7fqLPu8ZtMQrDXTufhCzK8ePg9SobTpFjsciWm5U7CxWr",
  "key26": "42Mqg3PXgn6VPrCcC2Kf8Br9xTvc4y3ehHW7CPJbMaktbSovYX6T8BJ4KzKTZvzBerJqvTU8d4ytco2AjmeRSQLV",
  "key27": "5fkDZyTNnAoQfAy4SJqbKgEqN3fcxcGWToHUikk8DA5WSfs7LT3NEtkBhME8AFQVmEoDS9FVz5ng7TDYvhDkAKDs",
  "key28": "trKCmK9EriyWd76dP13ARymNa29NjNieYaykbFCKEL83AV2WwBNUd7NYTcyN5fZnPeB8rLkYVhz5L3KWb4Z8fSK",
  "key29": "3XjvwTq67YW46RgduWfpaLT1KLAeh7rWU3xfbCRLqtcKUchSDGHqWjCYrWtekRxdXjXHxDCkDh2R35aEnbRcMTyJ",
  "key30": "21ttRp1LX5pBrcPq2ooH14P6K5i3yHHabJQgJA9aDrgDVAP6iwKYR727H2ETXgNKv4RmcUJZn3NcBZqy4YbEvU1J",
  "key31": "cC845QnRxzu9X3u5cnvdrkoYMwEkZCvrKUfrWSuhtANmQ11ZYuVnNxuSvkCHhHqd49rAH8SvSGWzwY2aTP2pjoP",
  "key32": "4evVK9dBV2nLZ92dYAUh1Cs9Ei47NoLrJzPC5CMNTbkD2Pse9MfKt6wZ9EXeKuWgEkyW8Za9gdMZprfftWsfGeJv",
  "key33": "3auTEwBDfJ5X9aTvDSW7dVQWTQFjjSuGWDorvf7bRS8nfwhowZAC2FA981q8D24STpq7Dy5WCasHiguZDY9JavdV",
  "key34": "21sFTPbjDtFUeKzTutcFdZwNPQHzdmHWW8u1egqpY1GHPi4UM7hKqD4xmA5mVodsT1aFQJ6EramRbi1VXM6EuQMV",
  "key35": "2zCxL8pFykegQVrsUMWtwypdDB7kQcr7jbQ1Jjuy8ZhcpCZebcY8HBr5rJ9Cw9n6si8bUWWyFiQBJhqsPkDf2xN9",
  "key36": "3V5MFXrj8aiZvnpBYbfzXqXyQq1yVMZhgWviZ9Z8SaNxs8NvHt7FTNBsYguGJZYGi5wDPinzoCskU6EJDJvGJMSa",
  "key37": "2x8Wu5oQPLpAz9gZCwDwg2wLZNqfDBezG5hsaYnMAegkZrXZ81aenBPJMRd4N5jQQsQvhQyk2895rP5mDUthWZKh",
  "key38": "4mrTwvH5wsk5f1gFPsALvKSWijnD7BKNPZ2R4tASRWHAsL64BHEiZiQ9M4YHKe5pdJ1GV51yHoxuRBhRBPoGTBm",
  "key39": "5CBN9o9sgDo1HL5HTPiPHmTKGnde8seJ3uXNJCNhnbyopPJiaBPYfijMpsqdXh2VYARxbkSH1zPiBEziCxgMZfW4"
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
