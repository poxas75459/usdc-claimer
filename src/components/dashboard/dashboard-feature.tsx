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
    "3DL1YMy3Jk5zTZWjiWDkRrB5gBV7armBVAQci4Thmwzb9EbK2vHhBsp5CRQMyZMFb5hakiYMC4pExo3BcjFzxXBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgPtVBedxGpFJJj3znoiStvftgf3PQuYochPEnpk2vm29FU2713kxQhWLSZkNJVvt6hKUXcht7BFQmsSRc5SnuN",
  "key1": "4WYaNkmEiLwKi46ZXBpDDWW6UzKMeawJ3KUyNUe7NrYUaoYKi9mMa4DxT7D4KMbxkpEazAEVv188BWs3GNTiyD5X",
  "key2": "4SGAXEPiQd8KdQFF34PNPZRi1CBbBgzy6zNMvyzeFj5XNudKVGJFAonPBy1LrhCdj2aqU8G1BJ38kFtG2QGK39CL",
  "key3": "4Ak2MFqu4f49YUcMKcYYW8ZgheJGBiLefFuNjBFUPicWkSWbGDy1n1ancdueiGJPDL3EEvgeMWnmn9oJMNqzTjW9",
  "key4": "3umXTexjB4bQ5EUSDfQAnco9Y21X3i75UqwrTnFJMMBmbEeiomdGy3EL41SPnpXZip6nQ5u2W9PddxsMeGhT9GAZ",
  "key5": "2nhN1PwxzH9aTghjNf526jPPpRrFMtKLnpPxy3k2v6a4vuYEE1rbsssK24BDtLivxuW7UvD6iG3UoqWHmtnE5S3V",
  "key6": "48iTGsKRaSuoNtkEYPuWGQJZ4nPsJQXYFBAVbW5vznD8qE83t142KQxG8or686YudqhtZDtKKk6vsFbbRvvEuNDo",
  "key7": "2kB7P9BViR8bxSNgk2wS8ND6xDkH1shhuNjqtJtPtrPCa75etdox1pffyAB7YqpzaYQjXvsBJxFFfo74qsnaCgiG",
  "key8": "3Ytdxm2fhTH7vJtw4bDiGX9sroXQnRfEathyrxQk1XQ1q5HUWYh51MWmzmEYHmbuU5W9CvQsEeq1qiKsLxGpwjEj",
  "key9": "mexGb614CBXbstVA4LNJ8RG6DNUzAjtWog6rMtC4ZPWupxkKSCdiT2RjdKLio958ZwWZgvzYDUdwpurHE4q8cNN",
  "key10": "2weQfD2ncq1csMma377ybFkFAtrQcp1eVvLvbTvJEchVqZCpfGaNLNcLpUYKB8eeLzbo4aDYzr7YEi4ei9nZp2Pb",
  "key11": "5g3foz43yP2dXSZguyKBc8ye2EGhBbqwiCLHxhmmreHAENaxtS977GLTFxUvi71cut6BSbApXsPStmXctk1EZsZj",
  "key12": "35DM2EhJf1N7EkyeRf8ViJPvry5iWRUsK9LhX6cagGzSa3LjE2vev5XNnUa3CavfWBGYHQ33cmibCatzeu47GnL8",
  "key13": "5JT1uMgVWifawZzNZmLsfPPREc86CRz4Yr6xZHBskgxqCFzGocRdE1egUufG8rsmDyP7iCLDxhyPrXwmaouB1P2n",
  "key14": "6228ZFogvBsVMr3ZyGxq9TK2qVKPh3pvvsvGM4pK9NhWP5ctsaVjpJ3szQmoMvdh1M2Ve9DmRD69Sz8XMN3Ju3Qe",
  "key15": "2KiXBP3g1gKHxDrwtvdBWqX7BDEpBWNr95LAnDjgnLjUYzju5uZBft1adQcoa2qvRaQPRm29ei2rC8zrUPW9jet7",
  "key16": "5cD9vV6Q96TyD3kBifvjg9tm9THiB3jEm13CsSVkpfTjMn2n8MFD2fAN7AUK6rDNFr5CxPXo3SqgVbjwt5cxk6Dr",
  "key17": "3gtcid9b7aBTrPCsMm67ehbHZqS5QkwW1a9m1Eua8EeWvwxTKXW6B2uqUnByUX6TsPLZnPeVeiw7tnHqWKVVkbts",
  "key18": "61hnSGqDxe1dLCEJFdsPkowQAuph2gXUQEqPVqJx7XzYt4XZWvmkLCJTqSrj2GvW4gU3kTsGx2BPHNupoRbCu1Ap",
  "key19": "p4KtWit7dW98BjBES6VNtxhHwbDu2PgDEuuZWQQjYfcEPn5DCXvtioXxy7D5R7jpEewmxcLg1gh9JJMAwaKwehp",
  "key20": "sT4ne6EBPV2abVTakW1GCptvjVruSFV3JNt3bB3wBjV8iCx1nPKr1z6XUsqqHaKmn7V4mrk6Cce7utBozWp3FGu",
  "key21": "kBMvZvMECpkCqo4ukNmfLiKc3RwDwajT3MycmXzq5QNVqp96zTWbz1XJzxKai8QwjyrnyxA1UtHe6KL5htKZYx5",
  "key22": "51hqdMzcHYsQghZ4rYmVTYM3rjQdHdXfwkhbKsFNc1G5HkMtNn2s9LmM3n5L2ReVRHmG9H2KMUTuL4kycPb3q9e3",
  "key23": "5B5SqgEvzm2pqcGaVybAw4oXL5H84qgSibEcgjMR4E9jowb9CkkQCV2RKCiJVQWR4h163GJKPvucHLWYFGaecyFj",
  "key24": "2VFHp755vPXyUCHjKTAzhTwwF49HWQZitRNNq8V1ymP6gL5SBmBzUiFT2GnoN2qH3FjQkzmWG4Nju5kwZvF5Eb4Q",
  "key25": "5FoEJMpEkXR8Ynfsw2mMqtFAgYdpqGTJpvBuusb2yjM3WGheKG4MaHWwpNYqxDzuRXcSEEQoxdKJHc4kqrDawKBs",
  "key26": "3rxbuHEdrM6TCHprC3sBYGnri4HVLgjsyxap3bp5eN7DyZ9xEBNMZbwnafeAry7Tw5PhyYcQHSBWMwEbQTSJj3jf",
  "key27": "484Csf8X9HfrMSEExFpr7kbdXcmLdxPvwtPUYEQsqwVNrf4WJkEoJotpaNQvtJag1aCB4jeaQ55QEmg6dKcB429Y",
  "key28": "21pvQCKjbZfZQkinwNYMDSMyhFQ7MnrtfdDToMHUJfjrtRBZWiqJ8P6xra4j2Vq3uUJ1dmaZQKprj5RobGmspqHc",
  "key29": "2iyY9wuawtarqnvRBWgSRyqoeNtzXQxQCmwAUby5MdgiwApMQ4bsMwY7pr34B4oJtVc55DHTeXN3nhqHCQZyDaBm",
  "key30": "2mTo1JcU6MFExw7QmSe13QaYpzturQTynsWjL2Ny4Qw6EKRYYC6JZPoMCgy2t1GnMKjDboGqoa6WWYCan4buQRwK",
  "key31": "3owQkKswAgcSN7ZmCvnMXwhtrvtBeKEEcRt941spSG63f7GxJ3Psdtg2i97j5suhdAKKyZ6dtLaCS2K525cpjf7c",
  "key32": "54Kkkh3qDL9gP3ZSEMFkRTpsoGz8LHK4XbpF1EK8niSzMWwa6zd1CFziqo11PaBa3Q5xRiWztKEvC455kHo9KvRd",
  "key33": "xBroHBJ2HfTktwUFvyyxTURbkMGU1oDJ52hvSh714dQqWCPJHhP9jCkn7DySwAWXvqTFZ6kFVQiw5nwrMBShA5i",
  "key34": "d2DbjB65ErztWX3qkxttbxDpbfSksC9BucGNNp82xAxzXWku5cuFm1W8rLxzM4xAK9gBsePTuxmgf2DQvBeLFaS",
  "key35": "2vnSpL4cfYpk7DwDou98tTTYBCAeXUinhPHZUdGz5UZfRyTECb6vQWn5QcKvVbyDXco2JL2X448cSGeuez36Ngns",
  "key36": "4a8EiTugyb7AkS9bM2VRbV14rK7fiRYAm9yoM6v4ECNzvh6EcWuJiXeRcWv6gqB8VNvoHdZDpffhzdFq7Gm4z4ug",
  "key37": "5PBo2Qk1avHTnuruyDRpumTKxYUk2bLqVDedgNYq1hpcqUvojmkZCkkCbfcE5Vrb6SiWTNkg2NDxAuaUwPDotaJr",
  "key38": "n56FAqz65j4r7yMgDbLJu2PRF7WMhDiyqVcQpSzTV8oNU4CcqZnYPjLETM2Lq3BErwPt6p1Xqo9WmWADz5xb86G",
  "key39": "4wtDHAjsqovTqBHFDmPUqTBah4K6bLbSSHdHWXLC6XETgLiVDpfexQxzXbE3z8KxAMcPyL21MKqLZy9cstbEawsy",
  "key40": "63rN7PxaE9CopCpKA48tpFngA2j2XkEmQx4HSDMLuQpozXjqvnGbEG2V1P6aW1eGhWu44NkhRrmN8Axa2BgJFjZF"
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
