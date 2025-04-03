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
    "37oW6Rfkjv6PBVUVGdJ4iTgZrzow1dNC64oAxyte9ivaY71V99az3JQkkTY2QHxnL8AKJYgttHJSwCTorrsMpUbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7tNzEFpjKxCSxz3djQ8a7uaJxwzZHiGUjMwqCS3oHjSJpxJbYuFABuehi2nMvagUiQvzaNwSjEwwixWxBBhBnh",
  "key1": "LgNF8Kp57q1G67FdF3kSQmUpaPTNRXN4jf7QADTNs632jHUW8mHzUzU6EMEHhAdv3QnNBDNtsBaQ4Bk4aTMBueT",
  "key2": "58DuBFus1yswoJ5k8qwWcpkyoMT2MtYydzt9brtk9HbUEVH883QE3x5X1pTDLjcB1im361KrxRCrKV3tp1yy6oU3",
  "key3": "pa3pdLA7yRrUQsgcngyMQ8BKQSqt4xpwFqmom3F8Dws9VYezprVwjbd6w3GXaQB9pXW4gYzoC13GqxyNfGR71pF",
  "key4": "58HxcTn5nvZ7XjJsYxYrT6QvEmhWHX2Px6Ghdo5wND7pBZsRpmu6DNjuUYRcnLEHAMppbk6vvdHHVHS78Jh6X27R",
  "key5": "38JY5pFjRGiCgZuJyFGJnsivztGJjBD8R1TVs7aCJqpvkPfjorXbzhu7sh8oKGh1ug7ia57xZ5QBvbCwYoKyrwm4",
  "key6": "3GXY6NDQ79FEpPNAipeGY2BgKp542Zf7y4VxKX66iat7Ph7rQdyjtz7vYMdh7qb6ts3xNQAS7qivcGGoLZbPUNCV",
  "key7": "5oPkpxVNwTXHEcCh6wbspr97jEPPUaYwhfZZZ5HYtNaVE8VFjdsqFprya4WwjbXh4mH6aBwvSA4mVPnP4pwy5J4J",
  "key8": "5CFcKho8TpV1mJrUNgYXYTrJAogPnN4yfFcx2gXRiybwSNe2rS1deXusTzBWvf8svnMuNAk8jfLS3vubAnVL2K27",
  "key9": "5LeYBNTkrtbdQidx48QmnGbZFxGqcCy8CTivsaY3JR1uG1MmdXBDmE5cBiT4QneVgMa247mDndV5GdQfH7SMFxf5",
  "key10": "2WaLkzJx5yKc735soHVwKbTUMMBqKTWGr1BxWhNjmRcrjFeqNCU9J6iJv5jW69aDiTr6dKJsqc8Vnof66eeeWcEc",
  "key11": "3TSDu83tb2gfHjNRJPfqh7FsRUaopgcku2avGedAvuyhcJVCjGkFX8oXxzZqb2jFXQe6QvF7ynx99jWHmR1eHR6j",
  "key12": "4AwduSC15kM81tpWBF6RiqmMBHheZrW3AMxGg3qVKfEjarKuD48baYbkLkVNeFpSadXPrh8WtBg7tKPSqNUWMYHK",
  "key13": "3LPtGwA9WLGznG9mBuM69RgtzcDpir6QJtQCQGj1htzffRyt5SbacEpxK3W12MKsyh6FH4Q8f2LSXydfp1FcDLe4",
  "key14": "4ZxMNQqycokmC8DMW3vsBuMWnSy1VgmZ78ESpFdQT5awRaMwLKgu3W96BQbum3LbTcXgxV3Ha1qPQBoJXL8MtJSA",
  "key15": "22HKyJeXRZN6VF8uiJpobfjBPhLvcY1PAbKgTgNo56YBXZmt4Ag2wUAQoGriTVQH627APMM5oP9xA7dbsRPNnANj",
  "key16": "4F37b4pvGH9LDByv21cjeDLN56CizwXUizL3WNn8Tw27chScJvN59b8r23HwSCN3Wct38gZEtpyg2wbog8j85Ex1",
  "key17": "M6gu9K1sHWtn7cfMi6AneauutfnAz5MsBiDUqdmfSXNyj9jgBg5Zjh1XDiEerAy5Y51j78uuBLVF2dGhWi2RgYJ",
  "key18": "5LLHYS14oAuoDikB5PjfDFWse9HUAbBV2udLuZga431G8AjR7UNrAxJKq6A7TkbhyGKfEgxQYwfsap6kz8jmwdjC",
  "key19": "47h9vVeUYBu6RFEH4C9u7c4ynUHte23iLsntUWcQYN68nUzTUyvR4CbkThrhzLXSbcuMmGYemp2CFp3nztb5QV5",
  "key20": "4h8KvCnw5btfFqsrJKwiKzSq9M7FcM8BxGMzGpEz4tbDhu4e91Sq4Cuu2dBFjHymHrFURM3KXGXwyGG5DxudsWe4",
  "key21": "3h8iaAk8ajMGL8TiBVvsGwX3UT7mM1r9sQHQ1b8kiwrLC3WSxLvZ3xNdJYfY34PPDkoWfhWzJ3ixx7MFdpoQvjuS",
  "key22": "5hJUtv3Af3fqjG6yCRVYdJjnehssuig86LoGk8h9QF8PLVAm2caUXNLxpsE17Xjr9KciGzDCfimfxBXoUTeWRp9P",
  "key23": "3FsRD87v5SFdd9ZUwEaAn9p7p3SxMtPw4dNW6bdwu7HgGceuiAn4NJvnszmhThrCcC1fsJykEUVAYSowHGjVkBxv",
  "key24": "3UGNgK4p8YvfiZ69bs7qnXwZboJe6TSGUApw8gBu4gxcR6s773doA2571dceKShs6k8Fxm5SCgMHVn2eyu3ZLEHz",
  "key25": "fcHks85FtkbzJ4Au1WV7bqkfyKSMJw8WsydkjqbKVU7KsVNjdJYrpaaHbBDXpXsi9TNTWnv8Q1J7nx91jfWaWtX",
  "key26": "2S9wcgASMCbcEvnZBmKqwmwGtJmM6dMHEqQ1W68etbSdGATAoVEoTHuCX2HM1NXtUBVmPo8pQrqzPFiuq2bpojnk",
  "key27": "63RcdQSuwkFB1zCLYJXeecGmF3NYb2FfMLW6JRk8pVs9FZ2NPbSinW9tNztzJffemHUPQiGP95b5wjxccQ8GHEz2",
  "key28": "2oA3edFUzPsUho6ygVsi4yC8kV2UNCo7gRWCeVkRWz8ZL4NjkUg4w17hohw56T4hemJM7vh35p2qqz7ELjP8bzem",
  "key29": "31vu2S9UWaB6kVjXe4ocNTvuaY6LQ47e7YrBhE38Mdovw5xUUZoCpRu4iLfgYCiA7wxwPYvS3Sof2xqBwb5TM9Rw",
  "key30": "5vPPv6LzE2vYPh6fHVAYveyhTqvDShAGM3aEdGacNhwg6D5gQHt6w3G9ZT9WTMjnp7ZkL2DnqPWjCRWXzQmG6rzD",
  "key31": "3eGs6o2bjacG4vCzcHn756yosUc8XVCRe8obRyvVYKAvGJqstVKRE1FzehLocEeQTV1dcmVm4PXNjQkp95a1HxP8",
  "key32": "jhPS1GZe6BnAap9go2dqSAgSbzoMG24XcDztVop98JprkAsNfAuMWAyVgqCxUwYXtrS1KhnQCyD74FYaznHUDvJ",
  "key33": "5TUoMddFNUJqRKK94rJvVyDBs1jB6qBhHbiwVxZP9LXzwvLxVhqJjz7YfyjStea23mBgP8Ny5jVeEtqPTtsxCgvz",
  "key34": "4ccyAsHaZA3MhjJac8nCLmmW8cZncLpytZeU7ZGpkbwdCnTZ6Ueu86TmWdcCEvf73LUzd6MGsVjrrTiKtAG41QVL",
  "key35": "5TmVYmz6mJN4P9kbpFbRW2UUnKfbWa3XZ2se36HyMBUqS4MftaSE86gjGXkMYon8CTbmwVN9fSnhuAhYPVdq16Bk",
  "key36": "2pdjvsf85gEKfNDoTKyiK3Pf5AsR3ukn9tkLWxUjVSdZ782of5JAirqofTWvadt4ETFSpD8ka5K9XdZkhy62iHwc",
  "key37": "Gwe4nsnzJ7cYAiwzrs2acpgrPYti8WP33tHvXqy5jsbUa55QBTbCHJ8PGjQ8HeqcjmzLo2Jra698NriRSfVA54V"
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
