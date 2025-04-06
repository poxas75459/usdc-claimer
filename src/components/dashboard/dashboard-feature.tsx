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
    "5xj1WLG9SZ4zkcscp26UzyNcJVywjuARqeUgj6FWUqsFun2Ztv9U4WM9a1o2F8ycijMTXjs8peBED3UvRfBwWhUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S28r1BX3HEjQbripEHsiizzYWmJ41aN7V2VUrkQqdm3FeDWN9PxFmz5eMKM9KDw4shUEQVKQzK2d2NTDmc5ELTM",
  "key1": "uadjeC4THYGbqEqNGCUNdeDTGrroXGS3gLfP9WamzCotPaxb7pcMN6i4xzE9Z5XkLrwP1Q4r7koroquSeggGjc7",
  "key2": "3aQxzhrELP3UWRUFDut1jKeXvJJkuYKLxYTVBsvmyTYhcHpJeKmaxKZHob4ket3yFfGhGpe4ecYnS1RWyQoKSpDp",
  "key3": "51NruesrUKcVKhsCMJeZHzjcEr79S2subVXArtadwBkRk46MsAfsu4C9F2qHxcAYbUdvByGnmxxuGHBciJLdDvgk",
  "key4": "4JTQ5xsizNAMWzeU7oJH1dR1MNsG5sMHFLFa3ZfzWpeivP5jTHdG57KRRwjXtjiFM5Fz2yX8S5yZLcqy5SKP492k",
  "key5": "VgAD6828rgxaHxQDW8q5CJ22vfHAzBojt9LfWcL1f5ffZmDmh1WYGM1Y43tmrmpeqaqST9ZczgoxaaeXfAVVuj8",
  "key6": "5hzgh39JaHwsUjzYcxH8jsbfhne4D8w4EEgfha6CCfFU73eMas7RwnjwJZmrVoBwuAxndLs3R4965nJixGtVygwK",
  "key7": "5rbxUfsWV2sJn98ChrfKoD6hcd6XC5k4iCnr5Eg1HKyGesakgYpUKDE7pLjteRhKoACBpTmBfr27yRz2Rz4SFZB4",
  "key8": "2KNLVpxNXJpgdJh55k1LmTX62b1zvPyu725NekGhUuSmpuErdVZnWYEcsD8RJx25qVELzwLPVZUWtYwdZAzH2hxy",
  "key9": "usS6FNvtpHW5gy8kriDsVPjacgSHHv2YVWxbbvaZjMvPfDDgxWbpg18DYYfDoHtfWYF117qBragXbpQqzJeSpzU",
  "key10": "3ZxCDiMtZHnCCUtBc5WxsPvAVb5uxdNccu2rg8wJ39RkQzfmHYQ6xnapqzHUZC7pBESHnyHQyEChrzbjLJkMePjW",
  "key11": "4bd45ArbZ7Sx9UCVdzqwtLFSoqV2Sfc7wBSJzKcyoRvBpGXhuFi7gpFDnPEP4AMnnkERrHiRcNwrUHuTe2WxTaBt",
  "key12": "5uYn4jdJLRAfxX8JV4p1Mi79m5fLQQLuY1y4trmxbm8t9FCjrP5WVo2w1yUVkR4AoXMQeB8SxrsgWk7HetR2xj2Z",
  "key13": "4Yz28fPBHQS9a43Eh7eimWQjfZHiUbXcYzSEPfeLPSPHci8MmWfBD6QMJJiHHpjfJcNKZmfrZWhTSpdsFbnvGvci",
  "key14": "2JsASw2dYx1MmZSYs8eor6FbGMWraUVZJ2kN9NSDxfKoyHApzkXmyv6S9NVWRpvVGh9NxY5ctNRwtmm62UiBGSmB",
  "key15": "5bR4cJq8WyRQN7JFctt7yz1UAGovNqgnFjtZDEf7PNhLpTEFMaPoZTH6e2CtGXY1NqdAWJnyvusi5p9k7Gj9mZog",
  "key16": "jzw9U63a9isksYh7kTn1mCfqGbr7YPWyd3aXJZZq57uaFbNLLEXLLsHnQcq55rbeWGc1CCEAE25u7ZUHy3hESqx",
  "key17": "5CtKp3ySRQKhxPXGq1z4JwY6aToYZfTH8MFeBAThNGYjNZ1vX4Sbsjf7WFsJZWuKj4MK8DdpWrDd6FHfTAugH9Pj",
  "key18": "5Z6ERmRspYPYNvDV5341G2Zax2DpRewPkkEhcmDeMFaJzV8b7Mq7PiiGSvD2EQ2V9ciVY5QS1UxqbT9GEFZxwUTp",
  "key19": "2XzuxRKXi9DY9WEeteLykiUQW9ebtxinBnuu7fo3CXpzrkghENonA8CYBmwAsVRT8h9MEP8SZoM9bcwnikqmnJQi",
  "key20": "4KFs19T5H62Wvk5dxARVngPW1FSoAwg52XJoVuT1J1B2uYWrdoJCYJf7quSAhrM4ZFhXXUiaqEvWQDjpwuVtceHK",
  "key21": "Gub4ypCRK2ZqfomiJdDevqZQ4TASVRCvBY5SVfosSRjnrv2Dd1hD3iZ1DWf7RcF3YRihuJUP1oRm8owtDwpg9R9",
  "key22": "5P7REkdJghVm6twZeniAnjdpMVQTn5HabbicPKt8GwXY22b6soJykKWemZnZystVf6PVp4FacUGeQ7suXkf2YJqY",
  "key23": "2DumeyGXGjFpbwjqMJEWdxAkHagYq5Vs4UBrDPGjbeHNdLJpkHGbXjzTzYLEbiYLVduYmRErxW9M6eEFTfJjPonp",
  "key24": "2NnR6FDzf1Pbv4uJKWHPnsUE1megvz3PpAo7g3PoZgMf1ueGhngXBsGnWj1gK23qtHLF21EVCecwc11EXM158MBu",
  "key25": "3DdEsiCHmeRdAGY16EGAjcMut1ARFDk3JTzTcPeheLmBoHxjjeeE6eiWxVjwyAXst9NRAfktD55JyqTMTMUoK9Bu",
  "key26": "3TBSZ2uXnpFsk5f37jonZxaRN8ZJyiwwXwkrd9t7yARVUbUx7hNC7vyboMEBrjvLht63kKUydFbrqecJVH8V8gd5",
  "key27": "4FE6UPULfMSF5Cserv1Wq8TSRu978oqFB9vAmabahdLNnKV78tFTqVpu5FJEA3rSkGdFWN3PCggNvBcJqqroXLCG",
  "key28": "3fvnNLwSFN9hJU3rp1JTPYshe19hCimiP5PH1YYhXi17nniTDEpDjnfq73t8bR2LU5XoR5Z2FxrPDjSoppYWMVUW",
  "key29": "kZbMJskTsXgrud8h2KdedW6Cd2zZ89g8BfDFQF48iuJ4vdaX7SCj5VcWFScGEc3aELVCtdGXQJEMWVChiuAR6dW",
  "key30": "3PzN44tivLLqnQyUJrLEkeSX4K2v87LCwLbD1EM31wAcK4xCr79BygDbpoPs9hkzySuNUcd8VZh5JBdjPaiDphg9",
  "key31": "44d1NomY85ZmqeWDbseUNZzNRxrg2fGGPrc2mzQFUXaLUxEdhzSHWyNDEkEqS34U3PrP5Ndxs3So3ifZ37WXYQ8W",
  "key32": "2onKLBWnsGMkFPWGQY1mPBtX65dXqCN6JYimodDGRYgi6ym2wkGx9EwhxDLbdPRFee9gU33JjACBMJRb2sgS2Vzj",
  "key33": "4m37a7ywe7r3ewZcwaDDwXqaPvgfBLKcYBTHz7mZLkQs7jWH44xBgy3r4MT46KV1FHeE2q1tGLbDvd5QNVbtf8pZ",
  "key34": "vGMs6UBias8ZNgvUMgxmrBdgBL4QrhbSAkn1Ztn98g4jF8c6n6Yt5mLkBAtHhoA9aao4rDcmTFgeb2v25nWM7kx",
  "key35": "4wLFXfiLwAwD1EUuwnQReYVkhw1UA7qWsgTSUWV4FbSx9g4nA9dnvUqjgy49uwX5FcFSbHqaEizSsMKvo4GZz1QM",
  "key36": "5WYmS5cFqtEuLX8CB1KB8PpM54r8rifumArg5S7xv1dPicFHUUZNt8HGGcdndGKHiRuLyvaaMm7KCVtMhf2XhQdr",
  "key37": "498ttJPQoMpXWw4aXn9sUNvQhtmXWZ5tunAnx7KtHWGGvKxZaedpDFiar7gYZZCADe6A3EU7wGUEJgwcr7awGrCe",
  "key38": "3KtkBhyxuXuNaCYTeZKCJPjx3LdtgLEyn2Q8yWGrsh9UegqvGNK8QjQ1bCaL2njWCn9898g8P6CFUYAdtiHAhyxw",
  "key39": "YteJ8VAbLKnT5rrCSGNNvHdHYupdXLHqpt58xv17hqx8RzMcqCdVcnnkEbqFgTjeY63a9n5gfnKBdf8phZeZp5e",
  "key40": "5p1rrMPSLJ2ANMWUsp3cn8hWzPNPM42FDbegBYosHK5TC3Rc9RfAT1Yq178n2ffudH4ndU5gH2n8HCMwpGxB99kz"
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
