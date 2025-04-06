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
    "5fhmGMdyDuW5tkUL9aNu7P5Up7Tz16xHRTCThW3RWRsSDfcSkpP1HoTQ3UcDwjvjrAiLuUcPR5aYjPjpHJ6Sqtyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GefpPwdvYAVgKSvZiGd3ZJG5K83FkBJNAmU2UTJtvmF4bj9Vy51MfBm8z7qqxj4oC4UxDE7r5cYXgZL4zUQhQWY",
  "key1": "5HmP2BFK8j5ZAtXinvxqapE5v2to7jnCttMz8hHZnTCZsYXGRfNoMN9eL7RhK3jSGHZHDUfyhYr5wMG8u93nSNF3",
  "key2": "2YUfYBdS7Y92PgUQmdzdpgudLereeLQ7D74rRpx9YYpLeuBPDAkEzA4Khkp7abbY2rd7SCdKtNpJg8MGqEgVeqhQ",
  "key3": "3w8xvkntdA8WX3DBferv5cQDuAQXpMKmv3EheLFyY25m7p1ioG9aQ4hv67ADopbJbLfZkSGK4nPxwGF6Xdn9W5tk",
  "key4": "2CEDz5sCtbweZMLbRWoAL7DaW5i9fZTN2wtZePGKEfZ1a1jNsRGTPzKp7jYMQVD2LXcky1Pt6TRzJq1voAb4gVXN",
  "key5": "YVVUhsJRttn7wXd8VyHihk2Lq2V3Kb1xNiGhEVzkpcgSxXdhp1ZbHmN6szWd6PxWJVZTQpNT42dpYSxJwn29dai",
  "key6": "PprU7NcShp3x9aTXYrLojC4VHZty7xSyphSBsYKxAET6KLhNrnx7uB51p4B15HVGVYrkzvCqKp1XViAu6AYaoSt",
  "key7": "3aFRoVQLVy2HGUDb12WZRbBZAyE5CKmD4AbA4epN15vUsVmi4gkNgMnUBb7FBLUYbRQrjGoCP5jf6PzGyh7YRdKV",
  "key8": "3HiFjaHyvs3m1FWUzpRe6XoLfYJF8AFgTVEXv8d3JHUGTcNzCPK6qzRSukRHfXqW8A2Yt9zJZehbhokeb1MJWnoX",
  "key9": "66ngDot9S1Tner31y4CYqTcCae2HD2CEpMaeWY9QpPYqabuRkovXbhdKiASq1VE1VwQiD38JHVQJWuUAQCpG5LNu",
  "key10": "4DCrW3qDtV9cjde5qYkxykvqSfDaPFAv4isXKmhWGdkffTrc9YpTu7mWoUZ7Bw9LsQyfj8WgeB9GweRgrQ7YahU5",
  "key11": "3uChFGmRJVNUq2Ss75e6oqPtY6QRAy7bq2HQZ6PQiRUaBYsB3FniQnwtPfYsFTtULJT4JHRm4SVRg9vTSjrXKmvY",
  "key12": "4iYA5on1rJaimp9MZo8Cce1n8gJ8mXcrQvceYcGb4FKxPxpFDfCkz5NR3sWXGZijwcDpWkdKqMP6H7V3yc9dYFfo",
  "key13": "HvK7T5a9aP5muiSHfK5AF7UVd4RG4az9BkX5DeduGM51YRV9koZ811N5drHDWWaHkDRW2JoRFaqS5eERg6L6W1A",
  "key14": "3Xv2Xm8rLUz6EacoRNEgGM2okccrP8vAQPfCK9toBw9e9iamcL8f2HwapBpmf32gzhqS61oFcVCaiCG9FRERz1Kt",
  "key15": "5KX1iZneGBupVogQg28epAtVHyB4zvyVkSJ5GYxkcEcjNUy7TsiQZWNpjDwRajtNrDeorhh6vFznScpFHFN3AR9K",
  "key16": "3xWnndSvgS9bPem9RZmm3yERVvURWz26YKD5v8cs5HXrhiDzLLU1MK5EDtD8c5dTJJ63Sy2eGfmSjdipENy5QLFQ",
  "key17": "2CdBcLmXpitQoKvrYHuSCRcPr9o4joyrdWoAUFYJ8bEM9PftNEkZYr6TRuA1Ex212BfVdHLoY53XbqFKV9kyhk5K",
  "key18": "2UfW6eosazgENt1t9pzVGbE6m9CWySe8M3aWKUxnLCZ1aRvQ4Vt9nRHqncJNpPnofvsmjXVLT8Rm9zVHGACFTgnd",
  "key19": "tK7ReDGmfCP6YqHvAPzKwrHksBJE6ntStaZ3joUeM3JcvL5vX9CaHV5ecQQHVUDr5fABfAF2CHqEe5YL7ZFULYZ",
  "key20": "37hQbfiqCgALHoKC4cg4DzarenZBx4Swi3kmTuKvUtvsNsTvwq8PGJdBZvUwLCvfPUai8KDjpBhY69FYedaWEReA",
  "key21": "2jh7LunyN3Dft4qDoM1H66KY2q9o2h7zAkFrjVU1e6HJCXD42PP2uMvq3X3UqaZ6jhrCH9JFRpPvkXLspLN9fcij",
  "key22": "2i5AFywcaQKLcPURVqyHW6Z8M7yzjLUMEtKC4u3PjidtPYPoHUwHVZjf67ooKFF7jqmZimcXdqgb4d4AHParxvYW",
  "key23": "3Qfi15eyWSsTWuY8bBoVjfG56E8Fub3Hq44V2H2GKKSv4PoJNmqPEprxjYx2nbt1C5HnpThs5sCB86vFGTouBtwP",
  "key24": "3oDrgWErcVXpeZugrQLuXg5L9Lg4MR1yCYhrmBrr5WJgGxUiHNouabH2Xv6rBgb8eEYM1H5WL2YkUgoJ6nC8JuiX",
  "key25": "4qka2hcb5176WSqoVzYAy3PX9sXbgnyLZpd97aNJdtEZWtUTc1u75mgPq1HwYExniG65Dy5zxK1xHYtazWrMYgSM",
  "key26": "422WEjE1R23NYa9UdXpZAekx335vesXNXZma9i7XJsxZxPQeNwDTc8gg46sn8UAb3sQRYmwVEt4NzrR9KAJLoLHF",
  "key27": "PiToF1MzpyNzsUx856gcTBQboT8Wr7TKUJPe9tDZ5iXAM2mMPgJRDmoeGdcSWVj3yF5tZKWGF32dmt7Xde4tfBG",
  "key28": "4aVZ7HRiVbsvfozC71rfoCrbWiGc3nDVhLdmob8BkiaqpYtyvJffAnSbohMz6FFcY93TGembQ6TK7BfWgMo8GepQ",
  "key29": "2S4MyCkaudnhS88EHZJSJU57sUba3AVFPEnT1aWBsyCMSwWVvUFY93Lyfp7R8PaYrPo6R3bWYUZmGw9WQSbuYkpt",
  "key30": "5p6FKhhuCXhJ4vc5L6EubVNCH43tf8JN84B1qdsfpJYKNrHssupjJhiXcG1pj9nj6k64GtZ8c6Yuto6oJuftRHru",
  "key31": "BCEjbfpVhhUrQ77dPY6GXffLSgBGjbvsqTaq8YZkXHuzqGZ4WjMAanzJbEcK2QQNiKPeqN1ZLuTj9NTuenUdUpH",
  "key32": "5QGg1Z7XrDaYAQAKfTkZRk5dEMXeu4xnh9YJuim7mrL7NY7vuRzfWZv4RjxFvo9hs5Ztb48KnxVzhuVy4KvH9Cmv",
  "key33": "55L33x3wgYXfibdfWUGdQKD7zWutynNrsC7NMmxSpXHr8wYiKJekNiHLJWidNswDYV2yeqgC5jZfxA58omH4Fv1U",
  "key34": "2DRccX4hHpnGAe3LXHPGnQnNEG8bs4mxMgZqumsyAoQNp3nmP1Akci8yvrYxKrrMeY3FZpStS5Z6VzyaLj18Jmmh",
  "key35": "3yUNwGeYDL2qAZMfFgDTVoELFZ1QpQd6htZwXtsCdExGJcV3GUhEgDJC33dRH9SxNGGnvTZFTiA7CfEQBqK1rbxn",
  "key36": "5gju6BBuaMXHAStFvLPTth34TPds4hVa7TBZQuMcCyMnLpePLZSwzezcgx1GX9C1VfeqYWryaqZhNqgWgLbvzZYy",
  "key37": "332usQgBs198kVKkVZ9uULjbkFeCk9YmygbhURxmrjiZd9btyyZQZREDc2s6RgUXQubHxnKirv4UVSEnRkJL2Bbf",
  "key38": "5qf3ZeBtBtDzmMsnFELSDJEhScaKTk3S88TS3NByz91whrEPnTz2ym6yNw5ubaEHBj7iPJTDoQqYFZn6Sw9kq54M",
  "key39": "36YaFTG5knmmWFxRC9RxHiM4ocDR2jAWUpy9X5NNwMguFiBDVGXDQa7Umi5hDTAkh5ebQS5wUUW3MoeAuhcgx9RM",
  "key40": "5HrRD58SNRrURsM9dKKmJEg5QEt6w8vnE6vqnto9QL5yuaqRVaUGKuWxVucgDXSiAJrW838cpqcve51FSzvxfmRJ",
  "key41": "jqpfCv36dpkFyqWjYeC7NMmqUjHp9YKju3x6dkZfEubqaXzD2n3hfxJ7kurngR1ZozLce3U9XJkE9uGyJU5MihY"
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
