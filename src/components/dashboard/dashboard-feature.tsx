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
    "5m71wHCGwAmpMUzDqCuzsm37ApsXzSk7txDawhbYTWxjgMbyCcHVDXX5ivPfYGQJYmqfsBv9b94mVwmcd6LcBqKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xscW6aBM5cGh6Jmm6KxY1Y2qx5XXH7yti7qAzmyU4YwxcwDDoYCS8ZiK6nZ6akFVDTEoMECe3PB4YxZCkaxSj64",
  "key1": "QRdKAVaHDESYe1FCzyDiq16jNryLrcQZvqMWggVkZksPtFwfA4HaAYZ1Nz4hw3zMWKVkNJWdW7kxZ11Zph9iM4D",
  "key2": "5UCpbE5HyWW2Y7DrP8ZUfD7fEsedSwX87qGUKagbTqzM3o23swMYzgZAFr8Jr7kjRZWtw1Mcv5igmcEEhb7HYeVy",
  "key3": "5Y6PMktHcYhnvvG5j4t6r5Mvvsm5SiwXXx5usS2fwQQB1gUkkVKZYAJ65YQYcV2bdJ6B4RiFSLWKSAGvjQbDF6Et",
  "key4": "2qfnHnH4PmREVF2BuQdDJVe3yAzsMzSrFp7UokxgWb9CqvrUKyH3yFaQSQKvheaS9ziQchRTadUxfpMhLo67xBKw",
  "key5": "2U7fLkmb1yArb44R2WDaLRL8No9d7Mfs9NHrdBUWe7kFKTKUTPffkfm4RZxKhWdKF7HLUnWmndQUSZXPq1zGKmrd",
  "key6": "x79crY3YJwoG792j4UWL987khSFrsZQLjracDkhvsu3MJ1h9wSJZGZFCJAC1nGoER27NGLcPuAFTnuBeeGHtaQR",
  "key7": "4J7zyvLNYTRW1AnSNEHNoUvJUKAZu2jzqzxEqXzAGLPK3gpCnsooxA8WaHhxf4nFckCR49UP7XY5KgCtFVoPpTaC",
  "key8": "5FzwyLDzKCgV3yPfB2QgPZyqNEn5P4ZMALeu3V3UoMhGG2TJaqvK1d7y1P3CRKVX4DcCYaBTm4mML6Ef2TdjBQQU",
  "key9": "2Vw7L84bwn2DUL63YUW9nm4EgmC3VGxiKpXTBL5xiyFeYZQndtQshmzsWjhPMn7nzSYg3YBW2GC9JUEeMuLRV4ju",
  "key10": "3iZY412LUjbW6qg1boGbV2Pc3sfqzzvAmjNVnvqFhorYiqGAiAyuELSBZUKMwkbT7ZJ4ivBFiug3n95JvXsxgXtg",
  "key11": "2NFJXY1pxDpif8DPAfqwvqi2NJtMsRP1QrhLaL8Uspt2Zk1LtT7AKw8boMxC1CrnQL7ia8ahZMRGHpuJEwLZsxGc",
  "key12": "2ivVBbjjBCX3Axb5tQNfLx4EsasL9TcakX2GxFsdDgHMM4hPHf63r1qjcMWExbA4JNuPF6kGrz15ubNuLCsbU2cP",
  "key13": "4T5vFatFzxVxDS9bPaPPFiW95KkUXyAKDQa9zC66XSmGHFbwxVnYzGVQ8jc1gseECL1FsWYujf5cyHGNxD7H9YQW",
  "key14": "5nqUPR7dHvC5tJqLrGJ1TpqYNxCMn3x41NabYTBk7WVk3e4irnniPZXKSrx7Bx78uvNMyb9kSMYDocj9grPdWDSC",
  "key15": "63DSoChUAPY9bGY1H74VcCVPEXthUPdAqimfGPYAut8ZHspptVf9Gm74D23iLPmiZ41K2mZnTD23jiRzfFgXMYKg",
  "key16": "4Q8FhoxkRQocJEEMbYwcfUoDNaJP8rEzMF7RMbfwmewAuU4et5YGhzdGpDSMw6fsRfNwA935Qf7D6mLuEnH6nTuJ",
  "key17": "3tpJS3QF9WvPgV5kg8hGV5xKsBFqCWgABhZJB4CEBfFNHyYcp6GHkTK14CDxpmEiWWDaUrB8KLcgKMUjSpLzhqzA",
  "key18": "5v9Ho7gNo49XvuPDczr1izjnQDdBaa7MfpLg9i9RyDfGpGacEW4rSTGcyhJ1gngBarasvThcZgK3BaRe9dun6KGa",
  "key19": "5NLRK1hPysLPkFpeX6A1y9Hc6aLuBLUMTQNkKzrUNen4JVWdBAF9bi635tmi6tvWKNtPGEkta8QyhaEP22xszpmN",
  "key20": "3zChLAANZSamHuYTKtKqrZJPKpu5QHbD8dqj4jYpeJ3zUgT6Ji1mpNBt6L78K8PKAprW1GAyeku3KapfwDLqBNQ9",
  "key21": "hKFd7J2KbbqBWgFfJif1fq1B3QgwM1DeefMBYWdpfSBeV7iqt68DLcbJVsxrRDpDGyvNzsGvXVZFc1DsPatTR6s",
  "key22": "4b6GtJKdT3fRLw4LiXdyGTcnBv3Ap3LVHNKP9FbanjSyqxjVyKHxC8KEkWgr5dA13J1K8v6FpQMvhfDczT4KcZ9q",
  "key23": "2SxZd8Fc8yy5hLtMj1Pbv6gBwJRZo3BVTED6e5cu9AJyMAk3QVdxjaYcYckTHZZ2DL7bdrKZ2ijeMvzRBgTGyVG7",
  "key24": "56bfeAMynAmK7rTytNsHQRHcBE2RJj1M8G4TWuzbqNW13vzfCKWjG8upgiRXpxKniMp5FFP4UrsCjJvmtiKU1mLp",
  "key25": "2g4zfSd3UEB2EewwvbKqEmL5vRJZ7KamsExYhDpykF4WTvxHf3MFVePAizfMLAig9c3wGRyCy3VPNiv778C6a7Qw",
  "key26": "veCvQWCyN45gHWezDvmKeyn51VVpneCnTNZbGihmoutTi9p4M6S3NmpWMSDsNc7cxrC7ftuoK2teVcQiHM42CdS",
  "key27": "dBsPC2MqpDv2n9ARuScCCWQs8MFSgFcmQmnMqgsUEnV6N9wMxq84c3E1Jrwa88TiCtheVXy8VdxbvE483z5yZ7x",
  "key28": "PzMfGqCriLJdUXL33jdDbav1qEKeyHMQRnkrJXPjdCbEa8oEXiUYXcqtmyKgDoahizuSL4fdPYSFdaSAEahHiHZ",
  "key29": "jDKk56hdgNBK4c7wWxoWvH2vScXvPeZigp6NmNo5JXjsLJwsLkZq6gW9Z8iMj5HrMfy66s26ax8hcvrjYTUv7k5",
  "key30": "2cnQPmHrHF4h8fTJK6cXm5o3giEroyPitdXg8xvsjBqw3LWA9vZo4QpTndoNYMx7AxjyeSDWR1FGzAUQd1CdPke7",
  "key31": "3d8dUb6izCanj7P3ktUcAH6F2BvRNjmYdqo1cTUe3vuTFMfFBbjnyEYmf8ARERGtB5xyB4vpk1oLpffaQXPvuxjS",
  "key32": "75RD9uhYzcX3jDZ8RvBJ9b5uA2ftztzMLukB618xDPNeH7tFcryT3Pb3xmXo26V65K5MUo2nVwdhG7jpkzVvkTb",
  "key33": "4qtruP1D4Gjt5PVRwhJPPjAxv3Lsn6SgDxk75cnhaehChMFz5HtSEjjFnAFokhDjKbX41YNuz3oaCYMMQA19W1jK",
  "key34": "3eHujhvw2ArRcxpiR6XugfiyisAYhdoU25bYmMJYMkpcZ1PugCZWKX3rV8bLK6yqxrCt2Zngdkwj7EXrNVMGTEp3",
  "key35": "3QZtSsYf5hVx7H2KcNSD6bzx2F5yDhu9Sp2TjU276sGULs5Zkym9jwLhWR2uNurHivNajQjJaqU8BUDzzFkpyeQj",
  "key36": "5Eb6oyQ6oVgkL83jZrPs4iFnLtqSuCicZJ5j4AFnCdvh4jhx41xB7Q41CTBmVCD3RmdqQVxKSirgcocYkqQMb8T7",
  "key37": "59iqbod876kgBykFVX4G3S4DCxivuXRvN2Dc2T5XxDgheQpZ31Z4aKZzktRNUajUAeLx1VvgEvXK46qRaX7XJB1p",
  "key38": "4rufdhqtEwFDyJeXhSPLCijzsx98NU9DWbroamLsx69WByoss1BMKqyQiL9MSwdSZtyi1jaHZhonwipn67Rg5GWC",
  "key39": "5Xg83i2sv7LAZFvAQwHAxJHfa7ecwRV7BsRZhvEbDwf9uzvBCtg4p7S6g34qrZ1z92dxFMhbdzVPfcYHkEyKQUbg",
  "key40": "4ZwoU7FhEwbF9gWd2hbnPW4paF6XUdXB3wQzjF8U4WxDwWoTtQP6AJqHCkmattyYU4S2yLr4ogzEM5qD81qQbAVe",
  "key41": "2fgCjNGvxnZVUBdZgwZhLVKTQp4fvCa6HBZ1rPjaxUrhaVh4jD8DGJmxpoL8t8zHQRRLe1gmcCGEyxkFbZEhByGc",
  "key42": "5tP69FBvAq5mu1Hdnhz5fWtwYy4y1DEGfTan246nTA76G533HWsdQVc1PBy7M82dHoTzb8MMK8D7AnrEmv9Bg1jj",
  "key43": "49bAoDgfYLVMt8HCufazNAXMxFzxDh8pkgRdp6YxMr4a61kUbdGj3aSzjEPoZPbynGcSPD7ZEvqou2BpRzDEo6H6",
  "key44": "4t5AxNbsx4ptWNx7t1Z4AdaUs4KBs6VuKkZ8cbWNhU7WeKwZnEPtA3GH84GVNpUSdeir4DUznm915s7f9qYUbjgv",
  "key45": "3toTEjuUKy1WWW2Z6YrJJ6vYJjz5wJWsMf1SnpvR1Mf6fVEpAny3TqZfa1rBUqHqqc51zBpYBi5F4bFAop3jvEEq",
  "key46": "d8DzyTzoGoR74E3Z75scd7yBKEmGektwC1SNhg4C48eKdz84HJXJQexZnP1kAghe5dHcamkvcEAbp71qNJEL6zz",
  "key47": "FHgzeu6UaZgwimYjsjVHccjTgVHrnAPF4yaNgrCSCF5yMknx8kJ4j63xDpL17A14PNaiey4nfukVgiiGYbWqRvT"
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
