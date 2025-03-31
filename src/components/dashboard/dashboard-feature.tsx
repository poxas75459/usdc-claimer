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
    "4pyE2X6u4aTTrnnrzcx2tj1MsyudPKKnD7tEk61ddo3h8xFsbWc5Cb5D5Cd1MqSvRJ8AWCRks2ErN9Nrpyjmq8ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xkbHuPhytHGAu83N1JszN6sKdYkUVPm43mP9bgvybv3dxv63YMBg2xEWsr33pRWyzMXHLZd9KbmA44XZ2MhFEg",
  "key1": "ThQ3D6AKraXhsTJT5ZjELLUpR8bVptczbo44KuL2ScEgE6RVQyygbgAZi7fRUammfKXBCoqJZLdpufNeAF8Mhdp",
  "key2": "5FtUULDSuNkBGW8ZsSUqG5c8WjCZxfychqXtB3W3CVG3tAGwFJNHsnnLF4KqCbdgTmyipNibGSi8G3NtfDAMzHrn",
  "key3": "5eMWFv2rmjQKLQQLdSDcaEqyeWJkoGV2KTZaCZQhEhnTBSDyrhTiH7Y8kAThrARQDgcX4n1bM6PnBdSeyJtjBkar",
  "key4": "FNfJPzpqD5qkAeV2FyTS7qi4hV5PzxTpURwoYtJXH5aADbc6qrXsLnGb7HT8VSDkLeUyQv7gigVrnVEFCmJkUTo",
  "key5": "5okdJ85QFTkvbMfwYi8kEaYW5MwUFEWcEeNZVv8HWN3Kq1rz7vfeWBmi7ZioNho5VTcAvx9ks8gj1bUSPqPDgtSG",
  "key6": "3Sa8nWKGSDVt7ngaUFzeCWbJFrGQnL63HeNkfR6d8PmaPqsyex4yvywPry3MYfurAbwBCJQgK1N8bF8i7dFwKyu8",
  "key7": "DA2ojx4x14cvUoqsC8TpVjP927Xcw7hDmL8dWMga91LtJ8iccH91YHUmuKjDHo9svVMMVhgensc5VAWdyZJqABL",
  "key8": "63wN7MD2ybPuLmC5zX53UcUdWBosFLcvKwe65jbR3ANgp695MhNChtMExyAeieZLXCwGw2CxCXc2U4mZxqe6psna",
  "key9": "4eJKA6ysEZKwhooBpyhDdrcxcbteJuJDJLgsSdubomMBdoK6ywanYjg2ikUtaYDw6jQdZ5sPg9JrWBoU3XWD6nAF",
  "key10": "4oSKbuPKCRUioGmcQMkbUVBBGbRYdo2HBPEe5EvFQ4q8p6zQxwNrBoMJUXuKeYtfNnUrAJ5coefbmkNcsPKrPo7D",
  "key11": "5uiVodmcyaKCdmPpoC2HHfsFDPn1MDu9RMWpWkuTtib4McjvFv2StzXMqL8frGmiNKnks1sp3GGYP6iK697uWGj6",
  "key12": "21vvwzXBEp4fqwU4gm7AZgo88Wc63RHWXnCt5JuQx5YfLejH1fPbzGBc2xu1wxWKyS88M7SCTGYWmnCNQ4qiQkie",
  "key13": "3RwbgZgcmXDy2RUXzARzrYVoZH6eMXaEniN19Aih477TerCwgUVw1179VmEzwNWj6ThomtqVNgoaFXf9QPJWu7ke",
  "key14": "2qoM7TMqnYApnx9E7t8Zjy845g8q6nzhYmXi1CjzAnyXKWoAe1Ao4gEJugNoX8pzigP22R8K8uZdombQRc1BEThW",
  "key15": "5pxofDUQdRY4ULDkVmtrjevEPBLXNJEVtdp8y7qydauu2hN4TuJrWhZ9E4WztqnCKGwP5KuoQjZWawfAjuPAvsTz",
  "key16": "5ij4xS3wBe7kSyhbJ5AZUuTmmTxE5h6Kk7Uf2SoPf3zD33McybfsjdjvNgfsMxUSmXs819V6hq8zRzGRRQjDHKwk",
  "key17": "43jsDviWm5aTZdZkpGAFNSZqGtRRCRAqZvywnP4fGJQcpknFfE5npEGdVrkQ3qfWvdVpmJTQBt9KimezZkABGCMe",
  "key18": "3tqB1CVw6KaqMBGzozE1WAUVj2BjTpxu1rchK8deEX9RHkk2gCNAdBgi5BaKRSYca3NVBW4k3GZ21ScnM98Wwj4x",
  "key19": "4M3Mgt2gx7mKWEa1M11DuiSSS68fYeqSaFHaTRsZGumRhQ6ddycZWkf7RqYLzXXXyCUDsVw6yVCV7T8GRLqZkaNK",
  "key20": "5GAD3d15cvyQrKAPPoRfPsjgtFsj4CxKpZH9avAsyjjTnAEn36GrgU1LXCtr7pTppma1v1EqRy4ScfoWKSgMkLyY",
  "key21": "2FzMfx6hDggDzsi6CNXvUBZSrcaaKxbCBgNxhDje2T6zNvafudxoYzXprqnRLQZzZMHXErZsF1JkqLc21CuRuSxS",
  "key22": "5mrwZcoYgB5uksL2Ety9AHDyM4RvnRS19p2gNEijzgJ6dTM5KFyH6gKc8cMHFj2YDpUgXKFysMP1SWHdxwaWSw6b",
  "key23": "vfJBtcsb1n7aXwqPXSnTgGjMmiNYNMyTgFAQFsrvzT1dmKeEVum1mkQQGqeHGAvD7R6b3eSKwVfEswvazU6ZNMG",
  "key24": "5MpTg4HRDfruA352cKgBASbYGao6KT2QZbBTVA54i3LM3JyfMQqMZaaAvXhZ5iUZuds6aPowY8wAS7SJmV1ukzov",
  "key25": "5FhdAFTLuAMV8P6j9XQiWqTgcZUSwy81mfPSkH5j5VXssVChS6Y18RqnMdwmXpq98TFkwgRxcfFVsB9vrP2ftZfm",
  "key26": "kEBMhSowqMS6wPt5f7dCbxLFmyTfideunBq6GjnUeLbXgFuhZbtFZmxv3SYaqFvLNsma9ohwWNBgWLEHyJeoc6N",
  "key27": "3FT53b3PUEtxLwnDy4tGmVY4tzxVUz42qCTNvmpLpM7opR67wqXZT63a11eySSip2B5BQX1cwCAwaLkXoX1NUsL4",
  "key28": "2XRmCZdJLeBRjJj8JLoR4RHMdEVV2nHZbmRE7zNRkTBkgxB2VEYBrYnLbdm6gnuK9LBbFatakS987EzxYJikqoQT",
  "key29": "2utoRMTLJ8QJ942NETYMuJoUK5cYPogjuby838iH81tzumcGK712Cwe6THFbVD5n7gDfkn1A1fmq7RDVkDNMWs3Y",
  "key30": "2RgwtHDWZuxS616ZqYHg7aEpU3CnCvZLTAb6hQGYuiKh88VSVL7aVZFPwusQqsNow56bwtVgZRAkTAPFsEuYPvHX",
  "key31": "iBak1DrScEwi3vHB3Hf6i4Wadznnv41tAQdEnBg9E4cnFZKAKPwWCjcuaNJQZo6ZvYxf4r9u96psqc6dXRP4kSH",
  "key32": "3kvoBZ4ivicwnM1nn6xKg544yqbiCjmd6qBW4towhhPjagHFZDRdTVtst3h27VHn9VAhZ4NLpMG7KLLwfj6WK8QK",
  "key33": "2qR6XPNhdE6NxoGib9nPgFtFxaGwCymrhZpwRMFF5Ry3w1Sg2V3CEUQfhsXiJJJVrMKtFGy9jpHTsRZJ7YFBgQSv",
  "key34": "9k1kaunD9uTJ6s24VAi5cJzSaEhWQzJZpxWEdeLFArkUzVh8LFyhkREzNepiqA6aYZ3TT8iukEGc6zGmDo6SyAx",
  "key35": "3HeZb54ENt2ttbMcwWyagvJ8mi68PQaN4E715XV4knnVPHorR6npdXBzBKg5PZ5mMmjqLUzzuSrMnvWsjsoUpCff",
  "key36": "5AFZ9Wr69DFMrgHP1HefM79YAVBursKhht7fkuqDa61Ej3jXfWM67L8e2MaEKccmJbfKjfFQDofyaoUF4qkjo3iN",
  "key37": "4dxzvXsEhWZYwhn6etRGw1b6bsmqGVBTDkQwMrpn15tAtpq5jjwuktqeKJ4hBDs8SPpgUgoXLYcPA1MW2gjnbMH2",
  "key38": "5J5msCiYbPQPgr11iBhEf2U6hiNK9kKDxLXYwakhYkzBy6Y3U8n9RkPyw1xPRpVxiNym4diQbdMHboXvGLdXCP8D",
  "key39": "26Di3zfSvT6TagSJM1J1qGXHR2qqBEq6xLVuyttsexnCPhS4Fu45HLdRNyYuyToHeZUBuXSkg41HpvJQxLQbJ5ja",
  "key40": "3wE21tMQfmuwg2iT6GVDhvEBmErvSFy3pB8ELcHBCbY8cMpgkApqJYBcCWoP7U4tEB46yKE6RGuGjJ7M4scBymZB",
  "key41": "fTTvyjwsVKHkso532btAkX2JzbqGpFyWGTJ7yCnfUJTFHzZAPHrUVLNA6hdNrKc12X868orZbkUZCytHydN8VeV",
  "key42": "4SXanT6vNsV2CErLGwGm4D2WwZF8WWmFDrFpUEYMQ5KX61DyGEMsd5ZrAbrmHERPS9bkiyoncjiCASPbdxKrwTFu",
  "key43": "3wXVRjt7zd4x1gFGPdNkBPcNY7gkDPhUmhmDh4Xysh6C23w2G9TbEhVQamia5PCAGjVWrsZyJ6XhaUkhDaHqhnNc",
  "key44": "2D86GvMiJvt7gzRGSqCsWPMp2qDj3SAfAFYBZrhiJW2UFYDNZkYHjxpyiQQKdB9dd9t9GCYHgURschAogVKrytdy"
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
