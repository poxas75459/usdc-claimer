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
    "4SDMwZsRiebf4Z7GkvB61X9pxPbUYN8rJBAPMfbXsVcSmWy6fqaYjTFwDoNK5iagn3g5cmsrYVsgiPCYWYrMRG6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGGM1eLfbxCs26chhVtcZ6UumXSkMCUVXU5evHQXkTfyVKk9gbhGAiwXnzKq51EqjWhE5EVb661hdp4YGvEwXx1",
  "key1": "4sMaG7192GaCpNhL5Bj9jijFpoMgHFapaeuTSyg4WCqUgvCTdw8PtZPBptovDJFdMZA8X3ATdABRBRzKjWYXFkhP",
  "key2": "2RMen4zat8VJct5YXfrCm3mTQs6UCWiSP4N2uxY7hNzbUV38TE6yrWqchK2BxVoBigRCG1UW5FQKbH8DRAamoY7K",
  "key3": "smFes76HQbjzRHmKUPHNusbbQZ3Y7w8gKifpFVbEM9bLTrTuhRH1GYxjcnVUot7ufTvoPBRpkFGYmrFaE2dzTdN",
  "key4": "MUDLbYXX1LgQmseUJ9FEVtiCxHPMscweBGMZ4LQSgFABQysjhzqPFzEqpq6Zc5QJpnKhS9TBazVD9bxo1Efuft7",
  "key5": "652aHSNZjG9TPTqr8usFnDRGfoWeQnFvPFPgsNz6RztRByF53TuKFVKAA4dQqJ35mrGdgk4iqe5ASSYauC9Qrqrn",
  "key6": "33ZmQYbdj891HXoBoC9Nwr6mwgHXzbXcZjbcoZhGgrR2Umk3YaoZMw3WSgi2S8x3JEDuGV47g4i6FTpDjHPSRVGm",
  "key7": "4M9Zm9jgq5tMFLWk1TkXTHErgEYSxzZ743nEJaT9fG2zRAGLMicp5CBcZos8kds2UNLZxWi748Kq3p3aPR38MQGR",
  "key8": "N6c5TdgGzxi6KFoxNjDjWjEdTqDqQ7ckAUBZrgMn8wGPr1FBUc8Fph4YNSaKeUVfFMPBh9LNGmDzapp8sKY9dPg",
  "key9": "4RJ7BFCxGsyZ1MbQkbYfVdonob4N89g5S3Wrq6YAnojyPzbEMCC67u4vgZ1wbz27iRGWtuDbMkHt6ZoK5LGJWZpT",
  "key10": "ezShFusxwM8t4eiXdt9riSNh8XqusXYJaFbXeZVREb6Yq2x4kteiT24vki8hWhjN8LYLB3TobmgMNBPYBzaWB5T",
  "key11": "5pPUXqFFAAv3E6roXabHThdHdfJje8yye9RytkhvtHmwC129PdyFsykSCDcJqip1um7t2dK7ndW9H7orswr26kFP",
  "key12": "4A7579Zw7vybhREAgb69pk9N9qYKGjuk56yTtH6R9j7kQEkpZFBmeGnteN2VotuJgtFLhvak8FM4oS7mWfx7P8jt",
  "key13": "5YqSkb1uhTSAE4kJ6qBJbXsdBPPHmuZCYy8f7yNVp6oje6SefwgqoT4URbMvUMef8KNVSZo4V5RwzgT3JPEL5Lhz",
  "key14": "3qpUweUafbb9zRC1qXjLjUJ2yRvmNqVoA1nCoBWdWEGQDVtrzudkdsQCfkwy9a3SW5YidiV7f7uMf4J9hDCKkYXD",
  "key15": "2pP1BDCQ3bZyvu1wqHygjbEMWCubjkTjTS8zDFC2VLkH3A3xnT1Em3TNTiTCejB7UTSNzN4aqYeFx6Z45tMKTBte",
  "key16": "CmXYqu3qewZT5x6o9jBra98tYpukvgXUBCs4pxo3Ktnat8CfxuPFAShACM3KEo1GCodNqjk2TuQnAvqC5HT8Ysj",
  "key17": "3dqVWj4823Phsnmb8R6Q54pQkc5whkrdLAMtpj6A3ziR43ruhh3Xuej7mHyPo7ezbgLFp36TDV5M9yFkU55SkyDn",
  "key18": "2hyNqzyLgM7gLpjHbhAr3zHdb4omWyxLrCx5nNxRBa5PZrFjYtpMX9HwgQ4e7iv84fDLuFpBM9kKzAKknskd5D5a",
  "key19": "t2iiwTU8fpWHr5PeMHPtZhzoxfaVbjrU4QRQt7C8DAsX69QH8DKFNJKBKgogy7pKhBdPxeXxvrQDvv7Q8Lf6uTB",
  "key20": "38GAujpam7USheKtXBkL8UkZhq8y3QauyFSzb2BevC7j1cZTKCuju23rnJhMZUzeUJhobhJc6CkvXighbEpGdMp1",
  "key21": "2wptKtxb1Bjd2F5mzk44fUoc5UmR57Bw2ZWkx3PbGti5VybfmniMY3WAHeB6uRwMZY5mdS3tNN6A9m1gmhZ7WagC",
  "key22": "51w2ugsHWW3p6gU8LvL8T2wTre9KfFiRuj8xM2zMa6uDwjt5Q9JUkQD2hTjC3MZTqDPqVKRq9jWRa6VXWqw3ACJV",
  "key23": "4RX9wCCgEWkqduWYTEWY4bkKVviLjk5VfwgXLhyMhGfTkAWbeXVvreMZZmEixcG3E7ubkjGbSEw7pSpLdrGrwKLs",
  "key24": "3j9CL3R92qSePi8g8PUw7U2Axa44aM7dAuKvyWWV9hGBq4h8Mryu4MTrYLv458LoYVk1EAMk7QyDq4aLy4sVUNto",
  "key25": "5RVdXtQdxUS7VMPDRVS3hiN3FHcF5omhshffeNAfagMoAEcgsWVfYM4WsT94EqaaWApAYCEY8yidVGHuyABHUvSw",
  "key26": "57Rs4UsUzfudBJDw4XDhxp4EGbTZtq3SUatEfiQzmuMv2Q1PrygwWJYnqYAykXp9MbJHH6sQk3J7gp6E7LxUx2nm",
  "key27": "35fyubeqKj5Jk8eugXJGuXLCwXVtwdSnzofKLgim6w9EHGro8CiXeR3AGMoKtUdzBfYSeDhwhc9LiZJKMfcPaw8a"
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
