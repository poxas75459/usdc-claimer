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
    "2dNWW2MyuM7kwhKJAzdrwM1GWuwB1xrPyAGj8RvpiQdx6iNX9db7TKwcGjEQQk68UGRqvAHAfsfCFMeQmQRkbVAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pX3MTf5eixGUk4gouoLgUPzzoTiJVzVktFLFSGV52kkTSMvT7g6TXPdb2aCBfb7Qj4Uu5n8tQbMe2SQEW9WC72",
  "key1": "3fPwXKguicn9mLYsmF6b4oGnunYJE5rC9uGtN5D9HPBDfMf6UGURVopJgpM2VG9RNWbwE9KqUWBo9g6ahcA3weh5",
  "key2": "JnaK3a27KvqvgghogycPF2WXoh7mTzpLUvyfo3CLqN5XsHnhfU6wCMErRMYTkZcf1dKTg1wsZ26TDyvhcFd55um",
  "key3": "52uUTAJfxAEKBe9TKBrhBUAkmQTQ8k1qoPWKRUwPnuHkvvwMKnwnhmZ4yXYEdQNo6ackLaJ7JCAMEyTkCCrX8h2N",
  "key4": "3eNHy8kLMLX9vCXyN6zHLgLB8zEfZRG27cLgA546bMTYrbJYPzX89BjrVPRhBs8zHyLHmSEdaqAHQC2NJLzBLyUD",
  "key5": "31DmksGYBtvtdUSazokRSEE1P1e7giaA68MToW3BeuBRm1MYaPSd7iFqyTEat46ENDVhuy8HKCr3FD6YNUFzCYfS",
  "key6": "WECNT61ebYRyWXnu32HPGqkvaxYxWp1cKS9s3NxaethHMS7b7wAx2FvdPunrkTfktGNPTvrz1YqQtr7rXKwBTRM",
  "key7": "5BNvxy4HFgoBfvEcYbU8oqtjuZ2n1exJUHg4uEGBjXKY64wjwSAK125Ni1DWPmhyz9kx2QdbKvP8NQGpNBTRQrDj",
  "key8": "jhThM54qSCftVUD2iKCLR7vjdBax4kSPk1QZRhnLdk2VjKxBmoo9GxJ9ktwjnxqWuQewUgvSxGDAM33MRrm7qax",
  "key9": "oP8vyx7fBZEQzF3CDNWE5UU2NqD8ghsC3zuEYRsPzcVdNXQRjGNKtprLP3U5Abx2k5sn3oqRQiTv9XnWz31cQbR",
  "key10": "37AdRxDx92PQ6ijyxS5q6BuFoPHifBGo3GDGeCXUQQTSXEW2t4g9xfsd7Ymkg8NBGNRGdTbXFzy7A4f4dfLtVn9d",
  "key11": "4tGjvpG8dTLwinzr4a1xyMp6c17MQthMAE7ua414azPwW3WyMhfB5xq6rRikkaSgs24TqtZnyDY4qYe8gpgK7AEf",
  "key12": "5WetvsSCsWso9hyEA2fJNjzjZ55TegGWErG5bJQeWNdpLKcnjzQyXWovSZHa3FBFd6w5TudXaQqv5TdJqMmiqnor",
  "key13": "5v8mkiU2CrnrNa9dEtJjDNFFPeWRp2mxYCM6kiAzoWHXEHRHDHqfvY76Bcvxz4D24G3QiE1WJdGjbCQD6B7cCn1Q",
  "key14": "2yGPwjMcbK1yuwiHktxU9GcxSuaieREC7UjGV8HeJNCXytSEMoiV7ZGBx3WUjCQ2SUjKodGzDUwtLU3CiNzqNTJa",
  "key15": "QUE4oRKfGKRweyEStcHHRgNCXzdFUitKA6jrrziAUzuwW9j7aDzhPyDrfyGTL6hkmGpW7LbrtGppBhwvH1EWmUe",
  "key16": "5NzFNuMa4KxBQbU6wSSGNv4uNrhRa9En2BzuFoTo6idvA2PB3rtjwRA13xtj6eDTnoFp2Xoy9zk8nbig99BGhHsS",
  "key17": "4zfBHQyGLgivBokTdxcBP8RGq7A9msMMqe75FgdRu9i9KJyf9RZXrDGyXB6Ekxpt3dRAziFvnua5vx1kPcVEZJPj",
  "key18": "x38gAecUCUcRws6Gnry6dwUY7LaShoNAphq7BJTXzodqzQ79dkeR7HptXHJT8QzXdQDXYL8B5pRV6M9v1woyNBX",
  "key19": "2DzxcEoCsr5ExDRmQGtV15JhZVpVwpizrHVxFvSakDJLEuoLHqcbMJTJCLbpY3aYDtsLqDY6mNWtcZDURFx3cYA4",
  "key20": "5RXXKpHq699dGLgBCbUrXTXG9bsfe1pUrg2AiriY1sz5GXuAHikPVMFyu268BsBdGVCP7qA47Ao9Y8dfu57GXEqD",
  "key21": "3ygh2vE57fMZeWvmGb8HWsjnjCorg3gD6etWZBmfADJtQs23gmGE5349UekpffjwdgveyQd67Xo3YnGUf25Ncb7J",
  "key22": "5VLLkwNgBwY4pR4WqLCxVxHwaWDYrxAFepG2t3EAnpfXgccBV7wik8hj3vyNjt116DnskX4cC7YqsBgB3BsYo2eU",
  "key23": "2ZGWiPZgBYLwCTERJUHZw9EsHkJVS5QfzHCoDbM21R4VbiDbi2waQZfRSBYRV4iY6gPy4qkuRxJ5yVJNYhjMDcJx",
  "key24": "LK7nf1WoPDShjs93X5UNXzESi4cF4TJmb8LLoYKTXShJTRjzVE6eYzSu3GXXPTLdYHzGBX1MheuiQRuQGKbkxP4",
  "key25": "5s8RtRr1CsHmmmUmufccnhymRgByi1b7VKP1S4SsVVKzLgHNektPBHNxcYHCtpsX4LdpXS2h8jEoETHorBnpuuba",
  "key26": "2RpXj7QSU6WE2iiMBbuv12M3qMEARcoAbv6EYdynJKRy6UGeqUVMP7vtmP3JQYEZLJ5PE5P1NzPpX7B4uJM1QviE",
  "key27": "3aNYzfesdSNKCdAL7vyL9AEQGPNFZVkc6MoPbZUsdzxTUAkMhFnpGzJWmxeY9W5rYLnkFUmPhQHYTyFSp81ZAMiU",
  "key28": "3nmLDCV3GhWQuyAvZiPWvKi6NQyMX7PxwRCWRBbhsy2PkDNTWskbntHiZfroN4b4KGzBFwBYv8tDt9EAzTJy6P1Z",
  "key29": "daTqceeytCTMc3B6uQWZuiMebgUWU4YBDiNSgzPxXqPewjgfYnQimxUsVk9iSrSavsNnfzcKr3knxNb1YcPTDUx",
  "key30": "2GgU9w8ptUkdSpABfNpUhMh3vndw3TJbLjdHgJJtGYQcGkNFbF5VMsjfqWqDU2WHcoDWBosY6izMrVcbHRDqjNDe",
  "key31": "5iXy8rtZJfjAg6hT5atD8jHtSzDTiKjAnXtRbs4vPMReLR8AEQHBehWnxHtX97c2KMHvnsYmbrWg9JJjFNXkqNJm",
  "key32": "29TXWFDxZMMvNqQti2M44roXyH76i7WdYfyvGcZvMci9u5QxWJbnvevw8e1jaBPgo4qcMnJojU6TGMy53Q1wZSwX",
  "key33": "4V385STjDSwA1K9Y14NMUcJnt5ZFK4idg9u2BTaPv21PQgyNX3AgNK3aHKs6iQtvNEzbUc4oNc6DaaqJ6JXzHi7P",
  "key34": "5F2ffgs5TcqwouPRxyEh631XW1qM8BkDGwEZ7BmLWAqfEdjadQGEkB5uLZvmoQkkwSs6KYkXQ1qDJtLjwUK75bKJ",
  "key35": "2c6SH2oepmnxLKB8iThoSmuuNuMQbSqMoqB4KayMrkXPJRCgJ1Vrgh1tKd6GxCr2QxChd5HvyWrw9S4EwAPqzM3Y",
  "key36": "UcBW49no8PMGfHm5eLnZQv3MEzaP5vUrcXFqsueTphiRXoAZwetmMFT1RAPxyFmKnnUMaZNW5yzdqL9t4ncS1i5",
  "key37": "4BAKdYfP2CpWS416yecurcL9fR5RbauRK16LiW9yemjBhiWj1cfdpb3f6RMcKz3FWTYyiAAXEbhEvwu2919ChXW4",
  "key38": "3VZw9w73PbzYpz21F1TnU6u5Hp9fiQfQUyzdXVmfZcC9m8Rz44iy5LYxXs1gxmZC2S3GZdgmviwPFNCzdTtT2NPu",
  "key39": "3ZtbdRB7N1JE4a3nqzmrQnXidAzHsuPbEQL7xLkJ2kwnFENZtYi9BFe9GS4nTDBuUCrqs2FkLvb1SR9CDBDNRDjp",
  "key40": "62uqPy4i4qTFpAoWSotkXn1wkZi4aYeZXDXfeZNpgUxgXgdUPJemwnw73PbvVRuyhxXbKhWfUbh9ndiwXyJyG7jG"
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
