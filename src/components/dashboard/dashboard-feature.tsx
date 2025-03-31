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
    "4bu88XT78DZpR2WsNMLaitrPteSUuGYxcGYhk1Ed7xEqipV4pTPCt7nbZdP9rP3uvx6TxTRxKG9a1uubFD9YjSKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUoYJQwHjAUNf89kx3akN8G7qWa6zBw41zUJRZdE34ejbBef1u3wjtyBfWnbKaHZ4JmuCwkZ4Suxp1sYXvuL63C",
  "key1": "5bUArPzU6K9oL4swu2vzLibze5AJMQTEXqr2HPpYnMGjhvRPKqkpQTBCfLBi2fKUorgveDs42j4ufP8xALcpycUZ",
  "key2": "3Vp6QhX8kExu9P4v6hSyZQYKNUgzpJETPrzVgFHcAEL69pDoqYtrCzMjN5NoP7NUTxoHJB55dK1cnyrxNGLGjfio",
  "key3": "2a4XQi6oBfMfmn2wZrX1SEX9UPtaQZbwE1dfWryi6rMFYvKmo53ufuA9FgJyDsJSXbazag5BxNNHxAC3qppTF2ds",
  "key4": "2kChz4LpMVHj1m7AtnvVfEbnVTe1rco4skGpV5vozhLJpgdYNofv2Y7u5D1iVQX1s1BadsiYiut49CBE6W4rNN9A",
  "key5": "2NADjRt6MJ3QVjYqjMQBCFd2eeCCpHQ2knR4tsq298oZUoCtAxAeaRvBdos8m6PAwVqtUxFPP4pQCrmxkfLrMRq6",
  "key6": "2hX5pfFUdW7v7AT7Xm7cY4VqtDZbjqtvf5yWDAtmcNe2FsVm6Pe94yUHT93QLdJScUQXx49UipcyZodwXhoxq1Cg",
  "key7": "3av3tYzjFdJhiknUSUpZKKvgfEP2Dca8MWmUYPQymca6CWhHZwaA2BeKMtR4XdYTwBvYrZKkSeo5Z7AXLucspiuG",
  "key8": "Mnx7BKc1Z46FUWMQkuV1aHaxb1pY5twBx4xwZnRUwG211L2FSWAZTu6ZbNcswvSneY9frf4HGAX8Kwz9fGFautb",
  "key9": "3SgLxFSKNVq9aNgnwXbBteu2GcM9JUtN4qk3HQCaiADdfHVXLhM7CejX5sFbA76xxebmSUe25sHqbuLaahaebrnE",
  "key10": "2ERgeeqUu2DKmqYo8ygVNNNhAijMFSx6cR3LdnxMLTRQzyC27PvtfDLmUwht1Y4ukvAk1EZNWtyJeACzvbcmPQgV",
  "key11": "a19eTNzqeFHwb3QHYWPcKqzC961RW5jRzVrb1HNwkLNs2WtqwiWT582tXwJV9ZQRHCSorHLZtbRQJqcesJYxsi3",
  "key12": "Rp3ewYMgjsp7xS5nLfZk1P8sq8Ce6QYB1tsTLzrHUhjr59Ssi6gQdreSiYXbMx4zRhEqSCs9suqQ6oJZoydk8ie",
  "key13": "ZYx7gBoH4FToCGBGvSfe2EjEb6BdBcHu8d9wU48sopbesdqid6X4tY4AvJevVuNne4Li7xd1oAb3SnHPLSyh2yg",
  "key14": "3FZD4Vpequ9vvY3cxEYiCC8xMmebLZqsDrugQgChhoa8yTW8HyVpHkRvUayv9W7jD2eKsZRDkmu1vwmKnR8HUoX6",
  "key15": "EFKdu7G4K1inRJSZ2Kgggsf27Hxho99A5QJByQnN1HmgRPNnYE5E4pQQFboT6rXCmvuZNnVmqAXUM47Svczn5sx",
  "key16": "5dxr5bEhH1xgLVRYJTA4AEmsCEhPfsKsiG8cJ4C4VhsA7Zye6pKb6Kb5SLUPStFbGtsesD61kQC2cXiKQJRJQana",
  "key17": "4Rsyz3siAdVAfX3KAuFL7UbzCukmG2YrY1sLsxYKEk4V4eyHYBaNECbgBDiPWxMausa6foDzQVA89EqKNvofAEi8",
  "key18": "2uRsGCHcgRdwurtKWQCznziUD6Mds3CKaMDgdqPs3dHC5U4iXHxJDMynKQC3SdXsGqEhiBdDQ3gsd9pVPJqCnMdN",
  "key19": "hnyhbhMHV67df2CZvmo1RSNJftyxAMZoaJ1qNgwkaS84xaEvRTKKXPBZHQWyXGqBLxiV83fFzczEcHtPYdAK56k",
  "key20": "5ZJNC74pFqZcZ2AND3q7UzGtX5ka87fbw4JAraiF3tvPjKMVRmT7H6bvbZiQp7ZwouPCxT3fiaYC8fyQ4VYMBycd",
  "key21": "gMx1yx6sWVxKpHujzNyUmScrQH6ot2iqy5SNs7azTzWvDU2UkhHdpxdqWwxD4KfGTTTGSQkzbUDD9bBrUQ4uDsm",
  "key22": "NKnPYHzgAwsJp1rvm9U2NRZk7agGBGSrdiqduyndZQYFWFt9hrpxYkLRwW51sJChfAgpHpUqzYJqoni1ZmCWnnr",
  "key23": "PmdN1s6Y2nc5Q7p3CSEe3QeywQjLwMnj6tA4MsKJnuzpQnnhmKoES6mTe8xmYkwxzfGGyigwgT7nLFHFc7uuRnd",
  "key24": "4aa6UzMnEgMPpqm7BbMGwcxBtqWEdUC9NVmzsztTcB5VJ2gbkSXqhHGkqVDYwNkw9X6mLTnPZbzxgbVhYesboJ1X",
  "key25": "2eu7tDBFqawKiHCudyjdgjUjSQkcd3HY2Hgc6KwnQwEmk3WJnrA3TRRFHzuSkVA5VEM5Dih4Z2ZKeDAsKEHEY3bQ",
  "key26": "3bTps5oia71APNR7y4J47o786FLr5e3xEnjXyv2LPjNfMtKJpXWNQpKdKZYBVgTnNc9LqnzrwWzrNuKnMcR2HNXf",
  "key27": "26SKxYKJKbSQf8RaF5TcnT4oFZ7RY68euS4q6FzfzRv8asZD1zrZGFbzgxudMPN4fBWftqFhkhAHupqxsDBiMAxa",
  "key28": "3K7obfQE8bV8TjsH9g4SnEoMCxAPwwxmbz6LQeJjCR47DYFaSr9fRr1rXfuLoMktLMnNbnTWEqUB1bXY5wZDUfVY",
  "key29": "2RjVmnGMztNAcA43oKKtUvk6L9oj2fbtASRh82SFCjaryGvVEQq1pUTHy2aouM2K5QasZQwYw1Kqqz1u7nThH2j6",
  "key30": "HKMbsMVMh1StGSxgpk74r5quKUKyPshRB91WvWfHRGq6cQgJtp3qw2NrmEioqzbnvGDxj3ELtKmJkkzJXowWkXE",
  "key31": "53c5aKQ8bnensQGzKZrZGiCJKvgeoA1puh4wkzqevUmQw4eJKiiDeif9kgcAr5EdSf9P7wtUqKie7Mah1sWNX5po",
  "key32": "1Mv4xfqJo3M2hg4ePH9VzRBTwofPzdfDVngz4wB9XVLzdE1cs9YEDNaap8TixkQPbqbeXBxf16dk7AaFbEjbRuw",
  "key33": "YDWUZ6eHMXJjL6VNYgkMKdDSyNXggxi8p7WZha9Aajv4C8N5MfBNfzFcjLUdjdhHw62s5mPZ1yRm7UyD4KmF5ia",
  "key34": "2sQmHFKPUYB81QyKRCxXJ78vz6geR9Wix5ehWhoKSf5qSZ6ZFJwsLNqEbM91J3w5BmXHPqdstzLUeEMMiBC1Y7dn",
  "key35": "2vys76PM8NcVMioYCcKAdqCdxngxKVQFtyezJpwHpau2821FS9U3Yaxp6uvi8Zchnj61nCWudim2swvWTfZJXnQj",
  "key36": "4iasnuWrthCrsZPXT1vwPxvHAHSJn59hbsGZc7G5j3dGZ1UghUaQpmuvwg1JkttccxSRpHKfdJQDT8t9iFBuLwZw",
  "key37": "2EEtjz47hRs9kAxAAKLoXK8gBsbq5yCnkyMgW2PC549c5kT214BkZj7BDxHxM73kw9YdZCEPDhL9mnyGHH8FcDa4",
  "key38": "39P3SHySUDJAMjh4Nees9KRMCFRkB7AFNGhykfxYuzPx8W7jDYDSf4Wohoio6BCs8pmSNwEPdbGdJHZAhBe8MvmP",
  "key39": "4cYUkVmUPU5b7atGwVe4zW7sytRChGEV61qKTFZWPfT48jtinH4BzN848TVa4H9kYdSGosevGb83oo9Y5KqoSdwg",
  "key40": "3bKikunurgaVyNgNnsck5mjURn1Ts9z1tTK3UYvnh6zJhDUVgqKsRuozJ7CbmEY5MRCqTe9LpvRD1Gd7K45myr4o",
  "key41": "3PZNDRPgWx27eRZiy3LiZejY76U3j52PtZ57LzzvcvBWLz5NnV9vnae6GHgVkvdi41h8ddhWWxcY8GR6GMvzA24F",
  "key42": "44jRv8gpEpAQ9bTG4qeA6nWaxVvCekMGvz4wdHUyzvHNhrkLKg6cvvhBfakffYStU9LbZQsF2qdxA3rChyKWmeMs",
  "key43": "425Do616x5HD5fCVc8GPNCnxL3ZKEfk7DtdV4LwyxPL2buCudvuNkHekumkghqbgPVYBDkbC131HZFkFHi4TvFni",
  "key44": "3jcHqupqJ1cDTdaVDPFQd96MBrLFFdkKoUL9JxRfSrTG4oqdZwZGZQCJFwhARiMsmtSHQej2qSUrRRM2C62mU7E3",
  "key45": "5NbvB5iiaVLkMKi811UXQ4NYTWrs18YvzvDN9EiFCWCw4x57sgSrkHmngTTtkz9b4tg5vDbFnTPhEfDZzcZhSuxj",
  "key46": "5GqnVTHdpjhUAN9PUxNjZXPdyxSHLHs1aV9tVH9XtWvQcu5WMJy386qkVfZzQ3Ye7EpD8mcqCdKuQVPJYwP5qV1J",
  "key47": "D8NxrQv5YcRHurdzUsZa8NhVwjTU4fyGgy9sj7ZhbRT7pd7jUYLUYLxUz331m5KmPpNAbkNCsjAMxu1aBAULdfe"
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
