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
    "4mwR8YW3y1Sdca7o9SqiKfwsoiPhsqBXguFEcbRecjFfet1w2htZ5otywQaGHmnCPc59Cg29NirdP9xA1Vn1sndx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZevc4uST95ijRgJbw1rxx6ApdcJGbuBNTpTDhe9yEzXEfSeyBemvxaXiSu9sQLJLQJJ5yk8cToaBKWeWD6mpVp",
  "key1": "4YVMveULL3YR785gKkNCbCKZKTNjFFs2cCWVrWfU7zypLXnZQqYpGSPE3Zsu6jUjXyGYksWxY2vAnthPSJXiLah",
  "key2": "2CcgGdGEdpZ5P5FCPmaJKmUMHb4wZZfegtAB5oU8RCH8P67J6bTB4sVrgmk77WVS2Bva2wbvjfSfenbPwndB8HdC",
  "key3": "vGQ2vtCxJ7keWTdz6yAww6qRSTU2ZL92WL2oXgwJaST6uhH2xWJNPBUqiA85s72hbzjyYA7Q2UEcvq2uCBR5fZK",
  "key4": "4i6v9v3Xat2VdQBBL3Kp4tSSw2bA26PNU2HGDW4rVS9Kuu237NMQdKhu3ZcaqEBBj6MyYPemvCxJnxA74A7gm4ce",
  "key5": "5vQLMZPwtauDP9CW3RrmhvrmgQSt1iMw7uFHfyvkhnMjenygGQqkQNkxAnRrvQCTqggboyPSBLXG3CQxZkVqPnC5",
  "key6": "5QNareTTvxfinTzrTmsgVXxhhQwC1KELqP5trJP8GdwrwZWEirVCX7Rix7eENE8hLT9gX8L6PjYYVV9Ugm2rJ1fL",
  "key7": "3vt5mzu4wCZARH57AUHjBY9boYHNtdDThhqwSVMzMwwzpKZnRkqkRqmfN8LuwSN4w1Rnxg9mpicHqrdZHdJY7ooa",
  "key8": "3Dujr3Wf7TwxfFcfV5uaTwXqNe6hKxSQ9YY8Qbe5Lia1ciEBtBjyv2AfTUk6rjkr8kUQmtP3hcsGiDa7rnXqoF6p",
  "key9": "4UnTWDgPtR5Scca49L1ehBw2VSMYrhn6G73Y4jCrSoYUg4HJhi9ee7rZGWLbXJ8RuucEvQnPQ5U7JXiv5TcogQes",
  "key10": "gV4hw6kdD565D9dJPkbY5KSy145nVRH4JPqD6Mf97mqT1Bqc2MzgsSESTZX7KmZTHKCzv5oBHgo7cCyJpvy37Q1",
  "key11": "3ygpCucCuwmRKPs6rYXGypoyFJ5R9szcMiCHJHzgjTBCw1ejsgXNu8Yks5VLzSHd5uUs8GPwEeqSfBYnkbg7Z4G",
  "key12": "5dqwa7zLczn4v3Eqq9fTtKPGDwwxGbL5qx2RV2UiGbbenhCMhzCaXNVasniWGKAPi1cJVERAMxiCrLQjjZFkBpd2",
  "key13": "hJFLY4hZ2izFmjiz1CdqEPy6xnA7Q9tQEwmc4oZ5xQ5eRbw6kUPsCQhYRipRdhkwDGof5N48Xg11BN58TWZMs47",
  "key14": "5aptEpCfzsDyv27HpDLi8m9agKaS9neiseue2o1B6biJ5ddVKcHN48Kue3CNDr8rjgqfMJo464VpTkXu1uAZ7tjk",
  "key15": "3xsadR7gnchm1nGJpbvz6aEnBLxkZg8FeB1ocNx7pg8XjswGaUUXwJYTVmjugZxHkGXdLV9exZ4iznHyzZc5v4DX",
  "key16": "56rkZe7UFK772c3tFKdhWL7QUGJgxWR26ArBD6VZFQoS8PZcUGLw52EroF1Y6f7Vbz9NtCdHNZWigqZhpEnbr1Pd",
  "key17": "5cywCdiCeRkZTarKcrcRyGK43NdG5c1gv4sX3fD51qy2upZwXv1ucCaUfDqhuCeY7jH3N2nP2VHA5g4BY5gAC69J",
  "key18": "2uhLWpv6YCPp77hpuVPrrEABkf5Q72B6NJJHDEnoFnxDsG1e2XNtiivzv2APWfR6kDZfwdRU3RLDu1CMxqGrmRA4",
  "key19": "2y1pMxzb5bQipkCGquU85oLWQeDycdm7Gk4BTRNeNz3bhKuMJZQarRkCfN53otfSk9kBDRwJA2CUzRAbAWNDFfgb",
  "key20": "2VRMdniozpkdJF7b2sTzS21EBkyRkNP5zhzKxU1hFWMKUiUdqFnsPgVkmk3NWzDqNajH443CCX2wdFpFnypfoFdP",
  "key21": "x5fXuU5F5vhJT4BUKovHPQQWkdxse66JT98oR1VzuwkrSkEsxqAs6XiPaaqPSaB6xcFTPqLwreBgdsaeroHnM3p",
  "key22": "5rUqkZ64yR6w3iG6ToACkiPbP8iPYv41Hz7iWyB75auLnf5XTSakKpfjWvD3XSrYWzUTCJ4pZ7o5rpufsfYeQn19",
  "key23": "5mj8EpKCMSHjP4hbpyQSJ73LE7FDiT7a5rCZkMGgHooVo9kjibzQtJGg9QENuCd6LxeBhBveP7TPcYowmvp2ZZyM",
  "key24": "383jrrfDQ3FqqxYJWW1B2wEBvGcU5aocLFTRCwCwW862wWCZ6a2RXj8H2Wwu1gUgwPekNqtfRAa467ng5uxnb8Gb",
  "key25": "5xpycDk6PgRiE39At2xqaNqszA9c3FyT1sdQ9DhicP9gVatDQ3mCifMP1guauH9d11KTUJ7frpPQLwzmg1Sv1Yej",
  "key26": "3wviHaAeRPeR61USmtGbZnG5NHCXpBaKop6FXNdFVDFQkqYP4xdqzqvLSCX8MsKJY4EFkvnhVd84DF4xyHUvzQ4d",
  "key27": "gdMPtsVpth3iKNbhSm7K2mGFk1Zc2TgnxsE6eFDci4w1kdAnqzhCJ18qqw8fcMczTgKSVtEWfczAAPJCbPEVWeH",
  "key28": "5uY5afYmguJdofiEeuud8NfaaN8KR2ficmtUy5BtDedfJKeMxAAuvaZRbbQYviCCXVvx12KphUdQvEpR4ujommPE",
  "key29": "5ZDKxUyEJrxA9Dxwybh7HqKfU4Yh7C9ggtwV44kbkrLeMjNZsWEKMiApuv1VUyXuyPYpHCPJjWtPz2EpSM7yQint",
  "key30": "2763ydxmo34MV7xxtEBAi8yoA2mPZAjufYzKakpc1smTUoWgYR46EhfCnPzWksQ6rbk7VeAcbpcG375adWWTDNht",
  "key31": "3B4TkPBCqehBomwJLEST35GPTmnwHCM8vcajYziUrQqEP1VnjwEEdxZLkDmeHYkBMuhadxdK11wcfER6rRoBYKW4",
  "key32": "3TXcq3CqqnSK2r59ZdUMzVqXP6YcHyXnHnAbHa5u26kqWieiNHWn6wNFAjTgSGoMDmBQsKQo8nmhUY9YgYPTH4kE",
  "key33": "4dy4qbPqHXbeAyD8ZtGRSDeZyHntqGmynkS3DVV948xzGJxbMZbwvA5SXHRby1FJv93EXfotLHasVTfFnLh4QsES",
  "key34": "22Rygt6XHs2EgpT6QoBM5RvsbRURcxaRPLmxSbKN41R4YazoLfxoN9NuzCkgnCSUjgdcQcBih19fCXhrqCHzv8os"
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
