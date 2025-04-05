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
    "JZhUQsWJedEwX5HPfYEWnGDsMajBfnsCvZk8AcRsVZSAAiHMRuSH9pXEm7iK1e1T8nj2PGE16gQHz2HtzDFihGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hts1Fnu3hV9KCp3eXAmSJeWNQYGt9AMznYAUvT5i4FCphEP1nXQoYL8svyJ7ywyRxLH4V7NMVa8JjeuUktv6B3o",
  "key1": "Mw4iqmJyGjRFQEpo1sS3EvHy6pJzYHSf48ddnS4Bhr3KBCLovmjeSxXfros2gb7xKf5KYtxGdzCoP2NhrJaCNvU",
  "key2": "56jpjz4WNrRxWWQ3P92fur2EQbbGvPupUMZHue5WwcKKzsi5ZFnG95VNhCBY2UyDgUZmUinM6vw3qeigLtHy4iuq",
  "key3": "2GprVMWKXe4u6VGeH9R9rkZ2Via8c5aMH9yotqq9Yc5ECJwnTPAoNWWqq1sWgy2zszSghaktoxM7P8ZH6fB1eN2e",
  "key4": "KeEUUcm5exe7aNHRWn34fwFS1zSiU2DNXT12oYmpo1WKARBNHwKQWpER7yMdrLqtFsyDagiMoujE6xR6bE3t6et",
  "key5": "fyT1h7GBnFMkZ9YoZiBzb8hrv9AxhocYBUYJ8SPPHYdzeuSHrCb39sutnehGkjBcH8ei46PFh8Rza3GnJopCix6",
  "key6": "45E7VfTt8VFcJFSPuxtTgNiiMrJdSu2WfP1j8hqPH7UVuCSoe3YxuSov8HrZTWaoosHS6i29WiMS8Szt82C3yjBi",
  "key7": "3DQ16YpwMVHpimKfSNWqR91qpKjU33Ab1zC7tfXrMRCPsQPaHUCB2W5SZQzCbqrsuWX2gTVTWxs4McKKqNw8baS3",
  "key8": "2NfPSyy79QNYSw4pjaFsbueJfC65j1DGn93KBfjRdANAoDDskTvE4a2fSXTt8CrELP2QB5HkZ6sFQpQzJLFdJqUi",
  "key9": "56KxAsnmYc6s4ffXmudt34qErBcPvVe8BTKjWzQ6Rcq7KaTzeVaJHXWWRaNTiBbbK45HuJQuTeQ51iEwS3D3pqYf",
  "key10": "4Euez55d5hyMaeebo9jKLfpbU96F2qmYRptvTNZz5HJiNtsp6HhrCQd7gEFdhi21RfyiJDBVUUnYScm7FbxE1GYx",
  "key11": "bYHnR8Bw9rqZVSqVpbCUY2TEzMKdMbwTWKgBTkfEn4e6JsxXiqtZHRDQuJTJs8krBYnsCte7STG1wnnmvM6Wv8f",
  "key12": "qXpHQKwohg16teJhbhR41PFz5v8tZQrQcPoisJtf1v6hgyb5B7DecZW9KxbTVGaDhA7drMWfRH8ZYtpbQW9kuwk",
  "key13": "5MRdKFbe3dLP9fjcnvMhiWs2NpmRuFbdPBthBHMXvhVWN16gRRwMB772qAnieabsNAPJtaTULYJp1Uxcehpe176M",
  "key14": "2n2DwKF7itBmQ1bQMEPzFrEXfki62uZ9iePivvsf9yzVsPJGj5UDHj8bnhF1cUWxL8je8wdVKhuL8gcNPUktzy9C",
  "key15": "3Qrr8dTjJjsDsaX8AvUFduJyrKKs66cftTd1X5aekwFLb8hCPLcfHVP95fbcgZCu4hciaRWFKpQ96H2TGX1QQFtX",
  "key16": "4GgJRCrXyoVJ8LU2kx37GXfivH2uBYim8cjaqVPNpS7UYMATQv7UdZN9nBegCssSbR1YQ9kSu2QQvHkPjuPVn8BV",
  "key17": "4DRPJdmotcDY6RcmgeLTWGeoG4VPp3cjkye2LBDnexxWr9e5MLSyDiKNBhKmfkHdzbiQ3aAjBxrjT7kGVUUGARuz",
  "key18": "2o59AWESC15V2iariQnehCpvRkxLZATL69pjSXVurkooe9VLC1c7Wef7rugTDsPCS58V4xnF4J5qoNV86Vj2FCbL",
  "key19": "4uD6WBn2sti83saxxWMRqmsyHY9Dm8o5Ty9aCf9qx7bJVju6PYgcEdNr794uJa6ktaDU9WS3mffBSUdaVsMbzEBA",
  "key20": "2to8HJ6jYMq2UL6B7YX1ymZxk3eRU8bgDYDf7i2Dw87sFprxGhBwKeuZaU2pot6gtEK58ueEaFfiYvXfHBCsAxkn",
  "key21": "4YJDgPwwGbFXJ4r5oLxpGjdsDnu9oVwgMXaX2JSzniJeLMGkY2rKBbj4e8VLbNjivdfTbnJe5TeZZvBnYogoAGVH",
  "key22": "3bMLtNtnjXggip82prpXzgopgGJfenw7TXdfF2AD7JLceyNHCm8LPwgMbKG5h38rjie2FGUJF8yJcsBUJoVYWL6N",
  "key23": "3nnNfn4f5BCxDm6BLJc5kAtEYQWHHZDS5X1M9KqagJBc6nJwLF8fWaAZ7yTsXpQfFecL2q4CuhVvauG8GyqCYYAZ",
  "key24": "5Xz6jTJ6FWo9TkQ15T4pS6Aqhxf5jiKTH6bBiU51wJMe19zKwUWfDyNLnmPKizB4KLK361Y8qngkiAp1KwDJdCx8",
  "key25": "5h4hdjm5LZ21SyGaegk8urFMqVSzSZ3DvUixB7xFHK38DdmeYk75ufa7sdZ4xgJoagSjrrp8AkWf2kxBtsQfy3wF",
  "key26": "31c2d729nPzSD6yTcXhiZb97JhSDtQK5TnPZfwGiuhs1WbsePmnA9Bk4LmcNp8eXnPRKBuRrFiHiE5s683j3EsCx",
  "key27": "ZAEseLWgENThJwDyDZ1UTLPDPtBavduZdKT173JiDNHCMbdxYaFF7MAbtEUJ1Jf7Rkg4rPRYUgswkSLPnWveZBK",
  "key28": "282G4i8tpfuueu7cqmfvE7nsi4ijgSMLnPrPUt1CR4j1WDrBCGKEYGQEspt9a71YABbJfXcnNGVQ324dZSA5Tcs3",
  "key29": "2QYaafVTA55V261azDdagnZ6Zaxs3Nj5KDEXapp6j3rEiyQiiBZ2rE175UjWnsLMn1pXKXziL2jeL3CHP1Y4PCYC",
  "key30": "3u1RpriiJtvi93euSNkDQYbDJrMVz9eAVRuwkz9wJsBMjfxFfBXyBNB6ZcbcR1avagkCyzeqnDg5oepVRBjheE9U",
  "key31": "5mioNtUfA77WVKTefsV2CaQcuLyTx6t5L3nbc3gVuSxDcPxSgBi3E2p1D69RGnK4vpUNo2SkmwsiFUaftz3ukNAa",
  "key32": "42EBwHts1Wy4kDuXSeJCQBkr8EJfBUCJAV387fu2u9GKm1g89oVySSqiMyHXeeRwRnpL1msw6GkV9e4ajtzj8gLA",
  "key33": "YXEziHZKE7UNuyHq6wBw7d8fgay4VKxYHGoTRirpNn1cXRsgbvLjiwHHBWfnASVQgRyi8bBJ6qoupywxByXc81Y",
  "key34": "3vTyXRAGFgTCq5HLoJRCGSPUi6oKr3a6kRb3csR2CCHBSzjL9m5iU85uAuGA6MoaqXDDiupbb32F6kRrjhFjXSzU",
  "key35": "2r6uZUZpaXH89KUpNeuLURqrJ4JJwHEcWnUXu1xhWJiggowWJmep8BZjCjPwr64vh5AXyD5AB5TmAAWrXhwnCGMf"
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
