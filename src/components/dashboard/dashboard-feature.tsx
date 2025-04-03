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
    "4sn97Gn8pGSfKoUvVcm6T3gXVL5fzNZByACy45KsDGRYN3ZGiy7YFsuQiPLX9L74bdCERpdPQuyraZJF6xXtPrwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbjMWSuQ4gmcVdrP9BgXX1kQyKX2yUkSxnfHU9XqmQonQRxWQdF4bFgKQ8cicP2XuUoMWooWZ1HD4gDkGmuLJQc",
  "key1": "3jeVYti2gjgsj3ckHBQpeALusmwyMPsgHzDxBqmKijRxwM3inre4ohXqEbUhFRHCHjrtTUGGybws9E5eF4rfA7zE",
  "key2": "n6DZnVUiGrr6HC6Z5wviJEDCWSQtQsRZnViv3V6SWxZd7mhTFUz46Y77EbDVb1Bmy8VF2to67mAW2Mso44UTbDi",
  "key3": "5sw3E1qXcPjVQZk3NKiZKe9dvZ3S9oFQtzBUowY3eHaqdQrpbpDV8rwHBx8nkMdrNtybLoUf6x44vUMeBTWfXCbm",
  "key4": "8Whhv1hksxBJSm2CmsiwqtZC6JQybFjppU7x9kGk5yfMhsGU6qs4KrAbeNR1uX8nESMArwMEVJKV814AT9orsa8",
  "key5": "2UoqQENqXNMZ7D6EETPVZCpRYph3Q7wBfY4wuAyXdHaSApcr7emjrzuHB5WmvjvnnCFU6y7CTovTjsz4fgsS7fxG",
  "key6": "u7jswYYZ7e1aVnY8dudR6RJAKHnorNntWVfB7PS1FFYaG9uoTYgARoJZj6ZRTVCw8zkKBHkYNu3Z1qD7jmor6aG",
  "key7": "47zxSZ3vUFVrVNPcUjqFuVAwfeGr9q2KrD8888BCeoWgkcP7CBWk9ScVWr9LLktKYWJYHdii2bKmGtXVe8fevocE",
  "key8": "4Es5yYFn3HVp4AbMEBQxk4ScMeRqpAohADJz7jkUUTfESVgN8mtHTVs9A4So5mDWLD2dk2TDK9xDYE7GhzJ7awe5",
  "key9": "5DxWSymZaEpmTNeRde9UYUijecSpa3ysZmp6WyEYBUK324HMCxnoKd1S3zXUeVJd2WGx4b4eZ1drnsWsbPrKH6YQ",
  "key10": "342PuwiewZYGGxe7oCS529JHKwyxge7LGvTXWEG6zp9VLT2uaPrhhef9knUzCEbdxPQqxRtExwqJTRxCv9t5cmqP",
  "key11": "9gwXTfFtjgakGAHWoXztbqJPWYNmDHcboRfDde9VCZkseYiwb6pHMDJum8qt6NnYt1b4KXHUapA3hmc58an1t2F",
  "key12": "2nZC7YdFqP2TGzojAwKEN7nUSUDURDLHy6uR24SoRHxt1mbQezwP8zTuvuDnuGnpAuYnu8JDu4pGRvv15n7tUmko",
  "key13": "4dhq1hrtoHDkFemMLkeDMJhALoCys11BAx7BJRbNV1Y1882K25PgUNpJWa6fapiv1HnF2iyB515ChAsdUpGoRvUB",
  "key14": "efoVzZMKX4crTHp7L5YoRHmbecn19dfCqgeTQpKsy5nnEnAvCZ2LiGH7dQNWZPEMCBgTQMkd9LZqZsMwAhM6wNv",
  "key15": "3vtguHn4YHWp2XNNTd2zpkqhUL6UK54yuqA97rtiir3Gkn8YnmK9CUveKR2mJrxn8xeekU9nfCjE1Sj8xDZV1zsY",
  "key16": "31NpjLEQy87cQkyxSUKbaf4JYGZcDPrA6ojt65MEngSnrQyoHHFtTncd8H7buehjnLFQFHStRc91j4FiYX9r1idj",
  "key17": "3tZ4o15j9L1VFV8NjpN35n6UV6NXxand26GM8Ey2hwGcdU8aj8KFvBVSfpXbbnnV9BQ1MD4tpdduCaHV2rSbvuWF",
  "key18": "2czxDci7ZxpoZQiq2fpNtnDLnjD5h6m4BkCd2T79EAakCD48bpV1AMjdGGzoRRvWj3bxhAebv8gyrtA7hXf2CYB1",
  "key19": "46aLrYa37d25CtoaxpqvHrRYj7c7YLNG2U33Jj1E6LrfEVJXraM9Saio9NYrmfBZbdinKys7BDfsoyWGwCEUw2pC",
  "key20": "3Q84XZymfvpmMftvBBJGKCLXQJGq6ebzoKXKVX8Xb1BJhMxQHEBChFaHT6tYKvSNETC384SJJCnCKoX7TBY7X9N6",
  "key21": "2xD1ywRLnq6VCuZy1Q1jqLb6dQegrddu7NX6tzzgDYkAgaX8Wq48y3Y89KDF7xuRuB2NJkdLZ1LG7ktVXWkbbYMB",
  "key22": "wdQ9JoPJMwcfxeZHLV5qKwxdDHDU6xDaitBMvWAAhFa2h7Wdm2zH4rn2RTkPj4GJrND7DQgwTLb7TR8bavbrCpq",
  "key23": "45GmMLib2iQK8E2gPbF4PV2nPHoGws1Hq71gDNCwKxiFAVJPtr4P2gBccGzGjWQnRBrwpqHy7uX9WZvKJHN5vuPz",
  "key24": "5HSiDMdtW244PTkTAGprpa6HvduhgFTfdx34aHvFotudvdEG7VLFAcn3s3oHrkhZSHTwSZeiL6awk9NBrDfh9B62",
  "key25": "4uB6chdeAu6TTzzMGxACH3nVoVaYG7qPCQQ5CiHE8iM2suWGGNskFoptojMrDGNhq4eCDzA892Gcj7W1K8CNFtP2",
  "key26": "5ZnQt3EKFAfJWEh5zaAy5AnFPuLvpeg6otrwyC8GwkYZ5baeTySRu6rNdScmMtFfYo2kr4UbJ6p9cW1FVCCD4QcB",
  "key27": "57bhfLuRrCFdgo4uGRXB7LqxKMmBxLbxcneAuK4hnfwDTXqkVXsN9B98MdD2DbZ38LvzEbDG5NRVG28trxZXr713",
  "key28": "YhABRzQgiM6MfMM8wp2rxLVZvzYtdL6AU5rv5z3gEWFEKiZuhXnvybXbZfypqMEzKdtcb8KiBR4yqb41Sidy2pK",
  "key29": "5hYQEVdWT4uZFz1RgX8teSdhMMaiBScdg68cNbQzEsfjuoGxaggZJbnyaxV8QTom187f6tFVb4k46sNJaaRnPvYo",
  "key30": "i2ehpDxcWWLN8dpZRhgufjUJQQ7WckZtdbj3AYraoJTb7kWcEQqbHzpBYc3SFL4FoyXo7QWVorLw9unGeJat4ap"
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
