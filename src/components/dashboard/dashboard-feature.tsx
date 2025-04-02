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
    "3UCmkgD9V3A9cN25oFRkB8EsNaqjjNntA2RYAzfzE89Wg1HHtfrB2yK6d86Bt7EnFSSrpDbFZKsvuPC9SWBSZbVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDh7SrXvDhNcTvqd2ok4Dm9k83i9YX3tvE7bTEpFKyHPDjYATkxEHZFt4y5RRzKS17rA2Q9hrbEFJAG8kopZzu1",
  "key1": "3GFKQhLQiMBjvQGhgVCsYmUH9awmfMdmr8X9g2VYBQjPBkz1t5xx4VfCjhreyrvvuWxzCUvdD9HLMS9xcXRqDg8U",
  "key2": "3gc1YKGee4aJWhnswMEekTnXeqCJpakmGqUVbFaf4TFEZ7bLjpv74ayLnrMu43pVKKN9pCPvUJ6Lmv7bkcd1FCCp",
  "key3": "jaJXLtrKVu54F2U91Cj3VExMW98crkS8yaSqA6mG3H7YkfNxNtjVrEz85eyfGzu1b839yxTLDMnJRueaqLNhKnk",
  "key4": "3Gcw6Q2TaEYGhvHe2nif7f9mVrHrXNuhJpxTwvV5YWbNgQhsu7VSMAqH23TsBatvA7BfwZWPBtLPtrfMTPhyv9ca",
  "key5": "2b3a3LxLmHB6pKTruGGKJHYbUkQ9QSoMQnaDF4kZueUyRUs5x3cTFpCgX27BK59kWHChhBKJszxvYrxEkht6ubvf",
  "key6": "3aUvs7yZDZSoSeAzAv4phQNCFKn8M9aRyZXBC71bCWCtRU349GxyotstueYmpprwYSDgBoY5x1UUBMqcWYgptdsi",
  "key7": "54hTBpDM7TgFcUD8BumZMYy22VwFsAA8E3AUTtaJQqvcCq4E5FwCVKLH3acoCwQXF5KUeQzAKLTNBtGAQ9CFFHFU",
  "key8": "4ShZrsd1HemxY78SDi23n3hKYdTP8j8DTFaCjWnpL5oHxgLbK3kWMqfvQb6oUTpUqaibM612ketZM1e8GFppxmHR",
  "key9": "2ctX6Vdro8c85hypZ5EZxDXcs7ZRW5LsXibyvf8a7VJCHy755x5JAg6csCWZyZzFq5jgGJmxL2sZzjUEfB5Ckq3z",
  "key10": "71TUjcBU8wfXTN36jygnMNd4Czwnk3qpg9PLMTCeeHBkcNuXZKAzvzz7QTj3atCcBQ2WwYn21SfwNKZmrt1W2uo",
  "key11": "7PtXYxM2uv3JDNwRBJVJ8wMXQ3LwmGCdKMrHHwj3QGETedRR7iEUf6xbRkDeRgFu9rSrBs63nWMzKy2Fmd26H4u",
  "key12": "4rdXQmVgt1esrRVsbnZmnWaakaBb8BiEPEDttWELAEMiosR1uPVGnC6HdZamZtAYxPfr7zFxj2Qo7K9cLc6ecgm5",
  "key13": "5uw5RC263A3Y1yVpsjH7LfQzwxAS5xYg3YdTM3FARRA32DJzBzXvKsFShKKs33q8hBV8kRqAVua9qERjkc3bqRqF",
  "key14": "4kLK6pFWx99j8Vhe2yzh8xgvHdDVyjB4kF3b2nFisk8ZnJnszAs2EzG85YEeX9WtiJqZGSHX5rMpEDVJFzYocoh4",
  "key15": "3Vrd9dfBncXfuTCX9pXhxSfXhbvKs36H8cgEapjSRwnmKcYBgiyumtST5cnswRrAmSn5PFZ3FokJFQ7ivptAizF2",
  "key16": "51vJgnscoN9CUZhwQmAxy6MA1DoRnvaDpWafLVKAo1DLdig1LzTr88wRsbUJPbShxX66mBFDkng8HuAR5Ledkvy4",
  "key17": "3KtqXaXHY5371mx4nDJYasmBJZp2BAjbhKY2FFUxjuEgwnjtwGNQVqXfX8XjkzkJGjRd3TQQQ3xr8BVkQo6d2E7e",
  "key18": "buY2coQ2EwFwfm8Bpg4sTxqh1V8Nc4hvZQM8BMQCUAnL1ytW93FSTdUBXuSTUQv5484NvqGfRj9TC6VMtDjHwPb",
  "key19": "Zk1VRHPrzJ1zpzZFgDXX7oezcWJEKGpyJs64BoE3SVupWfgXwUzoWHrhp5jdhxydSEWGhG4gQeEc48CeX9NLyP5",
  "key20": "xTHPW6gbk3hri5e2NYBn2YnTVn3je3AV5c5A7f7y1394dpbxdteP91YdNPrFuupJLEe2LYGx6x8XSZpPVmRReaD",
  "key21": "4bnSU8tYZpKdrCbTzXhbCLL5nWndUKJdpSgRJAwFANP8TahiAxJarUBhQ6mysCtKbb9HUb82ZXvogNoEaRoHvE8A",
  "key22": "5dFbbzToKA1FBFFitHPXJMAbPLqLp614CLvraAHBroqg64poWFja29BPoxPNs9LnLLQbMAo9EaYbVGEjGCftkHcr",
  "key23": "5ujYuY8VSxu5Wc9Z267Uex8HhfFEmtvn4GKVPnnyGyxvyt9XjBqCX45mLSiEHDWtiqZT3KY6itq4kPtcR6uTL1bp",
  "key24": "4wWht4js8TnZxnJwcfJCerzixZRaVg46TRkXoHaV3NqWumsqDbAD8zcosVHWzFNDZdBQ7jvtihf1CYbeirMrXQ5H",
  "key25": "2T9uaifjAPWbqs4KDFZXpT3Bo66y2SpEpeYoY81YkB6XeTFCzzhDhoE7rCPjzFJ2MyQu7pxmuSdS6VRwfQBAYJnE",
  "key26": "3pRcZ1RKmgLw1gEaNrumGDWrQxaybHcD1wMiPqvfLYGydBMvQbeJ4JuqAsyUR2YnGapgh3vpcWpxf2DprozMzeij",
  "key27": "2gTYnEAoKBYaEuFz5kmNLVadSgdoRTPzqgAvaoGZT1te4dETMcoKpQB19W4rbV5EUuhtVDh4ZbugmcQ8PfLhV1Db",
  "key28": "2z4WGVY26LXY3euWqnt7UbSzjsjQbnuyMWeHazc2uAPiPDB2QQeiHFAuHSRHmLsJtnsVbDZ7jVE5Q1JpsZUtkLVU",
  "key29": "3yXsZhGbxhh8U7fxM6JZD3QY4LGtgo7EFosrvvThdzH8mgvtPaXzqjqGyaPRUVhtgeg84J4pLj4UezCpKzQvXJ7i",
  "key30": "5yrCagrutxKWzsJK1GtgisHVYE1dcSeE6oUV5wjfhnoQS4nAreGvpp8ySV2enKpGTZFYuDcaSF8YPpfubBAmeM4E",
  "key31": "5BhcgWtRSeBhiJAwA4ayL59fjGy5sLZFHSyYK1tFk8rvPTcgrFzSdE3ZN2JRsF4jwwmewnrjZNKjXQm7AtEBkJYJ",
  "key32": "3AcpnaAFmhN11WD7XpjqLVn7RR7VxmbeTfardzFAqkmYxkgS2Za4kYV1ec5zHp36tLrjvPPXdxtPmMpkXRX4yF7Z",
  "key33": "4Kmxx3ak2kxPXm93mErawxDvY8FDsTHtW1fGkavom251r9PitkxuoSoyNwSHg85nnQcVGxXtHfQw1hHgsqkRLCjt",
  "key34": "4deHTvoc6wKqdw2QL7VhGc3fba3uDgAALqgv4xxj6466WDDqdgC3wQMKGRtCiZPJvahJNVWV2UxJHupEhCmSHVYA",
  "key35": "AGcySgfyogmFex63ZFK712XpydPXG5YCkj7NSoFboEBNFTrXPsvA7iM24P7etgbBvQgYXV7NkgbNMM3idVAimgp",
  "key36": "3CrSQ8qjzAeFWnmuZ7gexQDNt4XAiUBQbJzGRmq8no8cap4Mvzrin9c34gUYjHFCrd3YQYGgpqhsVQJPiU2ciTMx",
  "key37": "5kYQRrWJnuADojav55Wu8mxutbbfBC88UJR1t6sEcJhvJGS3YkgxvSPRsCJBoeQHQFFU23KB3XGsZZQJhxg73Gc8",
  "key38": "3ajw7oiZo45z1HkwSLwWyYNkfq4BRUH9wK4eYmVhSPwPZdfUWU6krNVrRbyspSmkLUvTbJPY5vNDiRKfbUVhi3RM",
  "key39": "27M9htXLN4NX39DZ1oVWtqE2aCu8HhK2dBEydeTYVMHwsNYhAY4AWDE6qHHyEKGJX5JTNcUoWTWoDpKvD9YxcmJV"
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
