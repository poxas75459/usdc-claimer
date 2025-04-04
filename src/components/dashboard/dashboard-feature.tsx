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
    "45iwwSrW3P4z7WXAeFZNhqySzxBYLKbhgvbkGoC5zj4h31ndbYaZ8EHBmDGgb64BNNS4cBgc3se8KyWQRWFTKSSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzDE4vTfj1DkMVeh9qv4iU2gnvcszZwXewP3dMg4YR6J2RpeTYWEuo2JmM9vdN9xokWAXfSbh4R7GTVGKZLmgCi",
  "key1": "3d7auSWaw1HMzTu6De1GTVmEWeoG2dfrYt3mGxErmzQtTaoZ22bTzv9FdjxcZfY6J5es1Ewt1uiFaPSe1jjwQEBy",
  "key2": "2n2gnMruMFtxfXMhCgC7FE1cH4R6gSyfEu8swPhsto78rqSV3a7cc2bNjC65Hf1vynoRKncLmYYvpJs34LcmHzZ8",
  "key3": "2etkDVyMVZAC2aVDzyLuvEMY1EMbzGxmrasBzzs6XMv98rHHqbEzb6kFFGLiw85CX7M23DBPonVeNvEhJKn2qRnA",
  "key4": "2o3fJQk84nGez34Y1HNWy2WAsSZLXDNGGDttXikzzb4USDrjShpPZEmVjcdZeYc7GF7ZLqoAxWZFdCBUF5EKaz23",
  "key5": "3nzB4gn2QT5WgAGwMg9z5oAufocc4c1DPdubpWZQmK4nFKL9hmKJWWuo77DVsZobXhC6B3mbnCtn1xUPuhxABBbE",
  "key6": "24qizv738Xqj2amVD1FJ1A57XQbnGBnnqKiz6zeZCo4N3PaeEqbTBqmZtmhY3x9wgnmErF1J3Py4zka99MhMATu3",
  "key7": "UJ4NRUyHyiXiCvVvQPeX9k3DA21wLWB1yPHfA45KY1eXTZc3hhgjCWGiczynMbJ2FXyS3kYRQuzzK2CqxmMtqmb",
  "key8": "2nsDQD8Bpk138enHypy316ura6bvhWxBgJfTH4j4qFAwTwfy2YoS6NkQjkBQUKtnR9qf5uNoMdMVLfVUzRNxQdQU",
  "key9": "5XFhdzVsdGHucnJM1MBRGMFL3VdqKVMDJYDuAwHywXmJNhpm5CGVPF4o6uyeBT25VRhfcLPT6EGqT8MDpg4xCi1V",
  "key10": "5mt25bJYphoiLN9u6MiP3a2p7JSC3aWj7u8w3MW3K9pQxGLgZmi5PQBE7NahRcJRrxZnU8t5H2KDXwGWXgc1AAvP",
  "key11": "2yg2Fa57SjrrQ2Efpuj9SjCYPHvtkvM1HWzUZo4iZi7oU6vcrNJQVh5j84i2i2GdjKZsYxSYx1p4V8bqe8FRMFwU",
  "key12": "483R4tVXiUYPskBBoqoYL2wA9euy4tqYVrydvesd1BVcLvyzhFBu9P82BFdMuimeTsLP4pBddb6crX3RRbfbopp2",
  "key13": "3C4ym2MEM9WkPtHGndz3u7n9DfX4gJQZhE14kAE4oY4wCRdqxnFDURXsK2LFj9SkEnpWi43qb3N8tMys21xeoREa",
  "key14": "5iThLHzqL8aLxAGCu3nobLESXgabWU52uWYc5AsgeK8PTWyTkNgcYZLH2GKe3ZNsAsH32NAF6psfwqynVwh4Hyr5",
  "key15": "38h9nmKovoh14z1N7T15do9BtpWi42fv9Q5d4u17du5zWAM3XEuyFvszih9h5NzfUXwhM3yyGocFC8EuQuaJPAvW",
  "key16": "2GuQKZ6uesovKHz6bUHuvwLvXFujGEjSgnbhYZdtyxB5pKntzCLHHLiutQnfHgWPF1GHSVfEuZDqLE24ciSURT7R",
  "key17": "3kyJnfLPUZSs93BcT18izM6daV3Prh9vfncW36GZZrrvpdxwBQ1vas51BegdkQUUS8567W4QbFRJ3bSgGtid75oU",
  "key18": "4FV4JVWQADohTrsTZNgvJLZ6YWdYSHfi8qp7q9rBRMLb8wxCq9duoSnP5aKqCZZE6gi5RfRoGKkt7UgMCzq8gewm",
  "key19": "3w8wvCzsMC1JxLqyfPp6Xb838BMymqFtgh7azoR8X7mKxBGmFbHZFWdBE2pyBQC2eSU4nNdeNeuu554G7kcwfZEu",
  "key20": "M2hGZDyXurzbTj88xmmVkkrKx4EDYogNi5B9kcbBJ9jQrMBe5KeM1boHnhiipHkujRfv8qCFhWEedeTT5Guxxma",
  "key21": "3sYM74AQeXWYH1RKN1rT8nSQ27QL1WwxfvwX5y3dPM1zYbarmscrNfXgAWh4Z8SkDNC9V7y7d258c3Ts52yvPtcW",
  "key22": "3PsN1PSA1ywVKPKih3JDj7iPPXgd7fyxFM4eanwn42Rwwjz4XzRqguGmUzXvpNR46S19UTYrficpAtoG2GBiV912",
  "key23": "VwgHAADKJ6bawswbyJgh127YDiwrDxobRsAb7FFwAEoAZndcQGYi7YX6z3kGmXTRKVfx8MiF5K2rpgSs3DvHgon",
  "key24": "4MHorzAhPEZhgF5Tt2mwDtkczS9VFkfxSmNFrav87WYcjRYSeufa1WE4nfraob4LQvjphFPr8XBmvrp1ZzeUZdgA",
  "key25": "2TuaBkbNhgMvTyVbd8JoNtt9eQLSJhxHSRKWM98xtWpiWaUZAbUD3wS289YmLAfqdwaRWVkYHw8V6MkxJjytVwxk",
  "key26": "2zGBUGSpi4iPH8NtGo4KN2nR8xv9oxAz6fR2vCEjAVYDQX9XLB4VQQZZoCqriym88VmpZLkkoBd9awzxUmqnkpy4",
  "key27": "2jLgNid5r5ip1UUUnykWu9G481WMtMMjkgpf5d1eT9z3CKY9i2m5TA9KP8MLfAV7uAY2GV69hSjrLAzdFmMCo4Jp",
  "key28": "3CK9dJapbgJfhTKnRfHBvEdaGFGE2ny9cFq6N8bm3tik7h9DCkV8hP8xxo7ZRsDh22Mbc1fMWVDELiTBHbrC28Uf",
  "key29": "5CHwG7zFutqszXJTwUsB6N1RLTbZuuAvW36YdeB1GNqzca5QGecrXcdVUoJ36ZT18ApRVxRyY1dojznwsSEteutU",
  "key30": "3pyRDbq5GsnERpwq2V7vqA71B14E7VhSv56GiNcysL3raGTKLEnD7YdisBUtGPLaTrNbopTJFjJaQhRs4GBVYQws",
  "key31": "38gNUCNukxSV2drSpQhDx9NgkN96TANFpN48HfsYMso8X2hDuDUD6mnKx3R9FTZkSChJEyfN5ajodqD7AKMJqymv",
  "key32": "5hcQDyxgELAAoMbwspRVEEUEeCwVg2BtedoKuAauSKA3ND5a314XSqG8Fws4pbaPLje5v2E73VVoaDnjiMkRraG1"
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
