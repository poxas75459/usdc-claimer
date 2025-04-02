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
    "3rJUj6V6NuQwVit1xQdfhGGpxHQL1wi8HDkb1eYdKr6teNFPdnWcxZkWLYwfuQajDsbkRRbxMDSiQJ5zAxNK5gfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2octfNHttWYMLqibvys6rTktDbBX3L7Zy13qEV37KrzFyE677gCgY4CKDPL9MNeEqmpsUDFq28WZ3PNav1hNxQvN",
  "key1": "57jqgBpZ5LyUh6vpvwFRen5CNwQGSxcYr1vCwfwgEqPvVZUF1ic48U1QtLvgWFtc5GwGEujWXYZ8XTXKvBhTMCCR",
  "key2": "35AYkogo9ZBZtucejdJgqd4JADj228m4HXx4NRaDjqr23VwCwgBhNKadCh1havzn8wQt2UYuMcoRDAmPQEvLNH9C",
  "key3": "4YAzS8nJHifDuh8ChioVFgK7odcGSq9oTChzCKNk2TaA3Ts8g9LLawNgcxRTBaUWj5zstwLtch8uTEeD2opZAwTg",
  "key4": "qBAL8jzmR4W4SxKhYVTmhA9TT8T1bq9igLqfCoa4dfXLmEanwo1oC595krt1AorWPFJmcVwsAzGpAmeiEPqfPUa",
  "key5": "3nkLQarCwcaFJHwgoRELRRQUmav4E2cEJLhPLV4M9Q5mSPYhb88LTqcw7CyhniYfakvx5BkBh1A6PUM9XwoMLR76",
  "key6": "2h5f8Myb3sfhVKnQybnGVLEWgpgmQX88ZQJUDQR5THj3rcPEpyrfKK7u3Z2j7ydrQAsLPsEYk2JWjKqfD49ksiPd",
  "key7": "4ZRMSmBjLaeHkManyK95VkMZ6szwcPsR5LK5YhLviVtvT12autksvimJUDqHVhdpt3UWZYt4bZgfmq4LAqtWZocw",
  "key8": "NKWMJBoEwRQq2zni9mNrgsvykfJpQ4BZDQsjNBcguBcZF4Ps4eyb4rfHnf4ewANKqmTaQZ7VeBBUhrYVekWFfkv",
  "key9": "4G4jmZoaeJS5MoWK5sx12PM3SgS1tBJFpzm5vmopARH8yosNVDwfkyPBZg21u5pio6M6NpaoUAVf4kD4tsGsfhRY",
  "key10": "3JnDvfGmy9o6mmZz5wHvKkvXgZezN7mequWxoozVR17uvSKiF59ENvHpDrx9eQWqrphG99zVTejRQPaw8WsgEzXa",
  "key11": "4v1AYvJ7rhik2pFcKzYVcByYnNmrKy1ciRptPXPKTFjgfzqJJTis7ywSWgXQDRULvbRB5xNd7zvchPRJ6NzaqqRx",
  "key12": "4WbspCJiTTLYz7jS7sf9DNF9Ntv2vE1Am7NtLcGCQU3VtyECnukXHK2JFUCa3uq3HitX2rKSLxoT39hudY2HpsYX",
  "key13": "4y1pRVHwm5KvW1tMFJkuAMpHMFrjsdZ51hDudxvNPcgauHhBgXaoXP9WuC1qG2gcfvnDsU94SC6z7Xwst6fRNmpW",
  "key14": "drsoN1uJw6LCY4eLUCCmf5pUtxuZYzrXi2m5ELthUmd2mTFKWnzvBxrrjjFYBGS4NV5hdrxuQfaqdrUb2brCguG",
  "key15": "2vgb2uKESowFLp2r8JnS5cYcWJvPYrmNmt3bHkL1a8H1UD6ZqBCY9EwBaYU9KsagcT13HGm93xQq8BRzMZhoo9RN",
  "key16": "3p5kjAPkGVgEFrVERLjdy1ymkbBnmEFjNriaYvem8oS8sdKwS1bsYPu3o74FTyn5VkCV7ptrLTqDT5ayVGd6Mdy3",
  "key17": "4fdL3Wb1YjDkQVxtQDMxG36B6cdvncosPhNgvf5unV8MiRYtVSUDfksFeh3TKQd9wkCB2CrEGALWgSvBtMaeBDDz",
  "key18": "2wDWqKhubU37cYPnVwJtxoEUHCiLnsqUMchCUD5Fov442Wu2G9wrb2c2P87TQH1J1rbmo8WobiYVoqeQfJL9E6gM",
  "key19": "5didVvg7b8g3ShkNwAp9N8Ux7fGtJZoLe7TKgxZCPoTn2Q9zcXp6dMXzUMi2w9j1w2stSjsL4B1Fpzpogk7BxiLY",
  "key20": "rbmQrMA7yHv4c8CkzQLJKqtRT5b3xBNHiXHaQTdaii3XPVgWNNU6fM1AeWDrCTb7yW1nKqz149dJ6NUcncrmd3x",
  "key21": "3jKzh1rob5HNf5t6K4Z6cFsATQBaVfD3ERRXXfhssL1dNeSPe1eA1MEuVPojAYuk2946DUL3CREXhbL1mrkb7bao",
  "key22": "4Ez5Yamt5sf8QKRdYhkRP6FdW31HDRAFfssnBfpvqr4DwSELzfMoC6fR46SrzscQcJEn354124KgF2bzv2EruFSJ",
  "key23": "3JMk3MwECkWip4T9TKnhDC4nLVDxJHkpyYiwLWabRWzjbPLHDLkyfKxP4m23FXptMbiYxLmrn9MHhciS1LrShh5",
  "key24": "zobLMaWEvvBJF9WzCtSrKeYAP8V3wmzeE3puKB5ZoMwMUysAwb1EmZFU6XDAWJSCiJn7EUGRmJ1Tzw8BP1Aurje",
  "key25": "3vdXMfBzZvbSP86itA3zoauaPffXrzWu66NcvzNZHjwqwywaAVHF81QtZ4AZiaFtPvwdRBAXiPWaHmSzrFWKqb39",
  "key26": "4aQWvS7DnHeXYeCbC3t5kNyQjwPxtEjxHJJseS5ZPtd16GnAxxuNM6bn7XiGFryQhyVT4G8pMCp86NeCaXKNeWZV",
  "key27": "9VhN3yEcbnGELQLX1nS4wUH9iGWsT2N7AGD5LVLjPL69ETncGFMnLffbuuv3ocXVHSMUYFKUpWaaC44XPwQTSZx",
  "key28": "62qrjzk7GRFEVPrBnUHkLWZ9kCayV2bicGnJKy2GZuJELy9EPbSzmTFFegYQwa3d5PBr8anviGT66qqA1oarcPrC",
  "key29": "5iHG5cvM286PQUPJGFmug79Sg4KSGgdghzHmdcU8HkFmfAfXm4KGquqmXQRBUNDAGvZPCSHg7wrswxd8czEg76MP",
  "key30": "bqz9HQ7aBz81zEYZWoSPfUhoL4XkGdoiYWZRjKcWDoa4eVXr31T4y3CcJw3jpegtxgxLsgpsej1x3rfS5RXeaRb",
  "key31": "YPFKD7F1BhgJzBwueppmX8mt9xKC4nkwhe34fNxufNHdVpELHMVragWedo5jMrD3fAhXDT3uU83YTW71ggRqVKm",
  "key32": "2zrL28AZXNnzdTMDvGknhL3D1y6BYfRevdkvtLj49UsGjzm6H9L3h5DKmvs13HTs8yAaZ8VdvoYLJRjgcaQj4e3K",
  "key33": "3qzNeGXyzaCMNBRMneWFSmuSNKFcK7S3rEMebH63wpMTczhwbGVMzAKbK8RtVTFBQ1vsidbcLDf4LVowmvSMkfJg",
  "key34": "Tju6bjaP4DmnkVats4yHu4pwV4CUXZS3x52eAnquZ44SpsCdDJ5QYpFL8DwGjaFyDL4mijHm74fhhDPE16CYy9m",
  "key35": "2d9hnSJpAGNtZrEVpaPoFRvN9zANo8zc1VQXAtHanWdfxD4gpD3LiFLcbVmskNAd41pdCMNN4KBgQWXfL6ws6kvv",
  "key36": "NxEDw6tP8vSpam6tVNMt7sCcEV9qMgfDQjZf84JbcGKfBNDNvM3HG9iRdjNv76Nuo3yDRAyAtihLTCU68R51MwD",
  "key37": "4tQv53Vn82KdoMWmwzuaEZWMFZNKS2NfGWrmPCVg5b7THUXYZigzt8GhprcV5zBU9BgEKhdA3HP1KYNwj5s1TDWV"
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
