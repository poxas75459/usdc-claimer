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
    "4kPjKkQFZN4BjgDeTReQRxgx9MP4vrLRUsvHxfyGrZ7DMxTdLU3hRY8ERhGgeqJt44KW4iCti5P5shTcwFUv1Fuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RvHVk3SjLB6uiV4ynMWvJi4a6ZgMd3jdJEQWFUqjhiYBEkWAqVmZzhrL3Utb3WAbGs7jGuA12caGNNG9Bd4FDB9",
  "key1": "p85pDnbeqWZXqHesBZwdfFkeBLQG5pZT32ukkkW9T6cMMgTpBDjVMNxC1oEEXEoD3ptpAjnbzeRmx66AC47VYFz",
  "key2": "2YTECJcAF6oEULtwkQgoZkxMXT8WhZkQhF1VkDsXjpJze84XUzjBTdEhSYh2SZmS91Ei8xwZ9HRxVpiQDLwMnrSW",
  "key3": "3UWA7ADZSrNSW6HJo7DUkWq4jExckYw42XkqqG6TWWHqn2n6cm4rc1aDnhv5kbmUAFdCHWnmQRiHGYSLr3jqdBnF",
  "key4": "2uAyTGMHTGeYYfE7w8aUDuWZpHQusFUoBExT2Ja5qV7AUqLn3vTKtav2exg3wxppTQeb3vb7ci4Pt7DuyAkZ5WXk",
  "key5": "4P8RQyCJgB6mSme9BQUb8DqvJxsc31QgFjRqJ6o1a19wfe95MoZLnT1qMWwfkmFhqWuwQESd1u5ScrgdCr4tSbxr",
  "key6": "2DknS8AqT4bQL5BQJtRvmQK7eWyFEuigVKEfEEqavjeXREr5tCo6Pqi8j4a3SPfbSGpYfTA2TBX2RU24oJNCoa93",
  "key7": "4117qXH6CZgKopgnMGNJETyJjPUFr98MgKRt6Vpzzz9dks5WuGbC9UA9iG9xjSwMAreBKXngQQ9uYwseYzdM8ETp",
  "key8": "3B9ewYZK6eZ5owwvBbgr289gASXX6KMqKz1j8XxFZnvf6ZcMdDPgpdkb1z847TS2AEpKN5BgbTK4yCP9HoiLzBmt",
  "key9": "2tTjtVbwzmA5PnSojR8QuspMvXnMnKki4F4xRQmkftqCZi7yGzTAB2rg358kfLaSwUsxfinqPtxu9hgmEsT9cBiV",
  "key10": "TxycoAdnk1GTKE6z8jPgxjAXiSWq1oq2DjA22xxDBc5V7RRwCMm7LuVNXbJzYKfoGHMkmEvHPjdYT8Ro3VLZWQE",
  "key11": "SFJ82gRxtDavB7LiCgjWoCjwy3SMi9YgfPF8FfaWtLqXuCGu5WT5HeBA3JRcYAoVEsgcMdu66pTDqSk3KdQK1C7",
  "key12": "5aJDtsuxWKkVjuxakbX5Z1M1vxZy6EtYJdZeJHteTk4tCd6ntSZ4BWdB6bGK54HQRdzgY2DPAVYMMVAZ5d2e3QQJ",
  "key13": "5xPY2rkfJtyvjypAzTkjumiT9VQNTmrLoMkoNLhDWbLtNiWu9vuyePJbxdoQGjQwZCA1PcVYX7xsVaokMVzXvDwG",
  "key14": "38qvDBKxH7ko4AxCAkrTjT9cm2RXm5w7zewKR4UDfc9pwzFQVqsDKYWu3mNGkfzxNu3kEbRiifXfA4mRgpsBq84M",
  "key15": "r7GLiQGHix9rg1Qqdo9D1iRd7sGh1CU9utnp7HZRe9GjNya792apWDqjCT3Kbgbsjq42cgzUo6uSodUHuaaCf1X",
  "key16": "5HFDvDG4B9ckzsFUkNecrRKPbL4KVKDBtCjb3xds8CTd3Ut2SpXESH4yb65nETrBjajUkStf7hTHPA9YYAr3TmdJ",
  "key17": "wCWHuoxwssrnRBEEa31hEjBPXvjo7AWyDXZy2EufaXbub5EUTtJUU7kfzkZAFp77n2rDL8VifyucPRekGZnRwYL",
  "key18": "4VLY5st1xba2VBsSxRBmHJPAdpGx5ohtDhh3SfF8pSzBsF6wa9PERCUbAtLh6kZEHMJZwqHobd668pY4pk1ESEKf",
  "key19": "48uH4Gbdk9PtnnRW7tBFiwCCroX1eVWEFEPJkMSrtVGnaw8E2ikb4mnKdYBJpMszdd4fmDPpPMJQ4yY1Zz23f7HF",
  "key20": "5FUQyarzhjnPyck12BoZMK6FSHCSuErpK6gnP6GGD1vKd7REfTxdH2Xr763DWCsrMZw16k5V8DoQpue5RxFnY6WV",
  "key21": "3CKJzQJF9XjtGbDztSotKp92B9xeJ7YdTL2zGZH5as94u1yhZDnjaTgvXSMmprbQYRFju5rNySUbf2Rb842Yd5xg",
  "key22": "LE6pADxvBEazFd3ARxheD8qBem9zNJj7BfmFCojZJqMrEt45eYLCFQZh8oyyMihMxqSz8Z1Tr66CpGLBkCrd3oj",
  "key23": "3u1Y1wv5aZV6QyhdQBbosfwS662Y8DAVyQz5MYJ1oqcCVAWF92wND5XG3Lz4wEk5e2bohU2EgBRvNHrkXes1juD5",
  "key24": "5Agamw9pQDbAsnpuPuTxhT9NsyCUXZx4MK84DNiAJDhgxfikVdEww6cEzxT6HBFMmEm17yaFWXL2YhcsGX2sF5Vq",
  "key25": "6114M8Yy9WcgmtTprG3SbCVyTGPijQdz5L5VYpktbyDTaRfoHj6MDwZsna1vYrkhNKJxEL6bMjvaqav8MUfAP5bc",
  "key26": "amZece7xLfifgnL2Kkfhc8nJigLysKUX37GUsdjyLgpBTRL7BMUpU97KzqHFEzfBXyuN6y2vYpPYq6UPB73DQne",
  "key27": "2RwYqYyV396KY4ZpGZysdtZZdz6MdFhXHfrfhyaENWnDQ4FzYJnvvsZzDnfewYsAsxvHmCjxJ98ac19gAkQwuw6V",
  "key28": "rrfN2XAUNRU4HSrqesc65BeMPKVHD1mHPHTRTrxCEsqUdXvS3Gjj8qVeZEBHEVgvsNuXb7zmTXrnpTHPoLG4Gzs",
  "key29": "3tdrn7ciWfrUYNSpNpjfWcTViXwYdfj9RKHChiaUsECvNuKgV1zujt2yYNvaJFAc9dEFQYBPjJVTSuT4zBKadsg5",
  "key30": "2Z1NEXBN85DUfagcVpDYaZ9Gy12JbtC364AbbfymJ3ySiov1sF7tg7ZhStmijXgANabMTDDHxK8ZXx8F1o2PzfbM",
  "key31": "h6qqurcrr7Zxun5D2mSLkDvgfZjC4vZ2uZBvc1NFcxiaRm47U4kdwCGahir8QYFg6aBkJdGVcR6CfLL19AGeBaf",
  "key32": "387CK1sAaECqXuz2AV1apGaVXsJr3Qfg3hRxPk7JruG2CUxvrEcxkfsLDL5m2SULJNFY7HUUDrCFzDHGQTYhQhyA"
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
