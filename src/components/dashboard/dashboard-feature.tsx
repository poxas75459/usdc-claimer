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
    "4hvrwkKdtDPaTVeDY7Z6djpGAZf9FNHz4hnGBvW53upffqT8XMn6Rd9KppK4DRLZs964kUJGSdjZrarHHTKAbc6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bk4CpSPQe9KtCn9PP6fuo3UTUPsYMjxNVLDy5eEEetNvcFRXZhUdDSfzrZD1Jdn8hoc5YLTGjKhrUhsQG5ATyZ7",
  "key1": "3juzexDb9gK72rTzR4TTbeV5uBewXeToKuZ1qW8ujKMuLFPoGDLSdbr3rTS1xZhKgDYUB8dDuU7KCeR6i6fjckFM",
  "key2": "5kKfkbvbDa7JPLZjoTJSkbkKrfwAfg8ZsjJeVW7ktd5xtsoUcMsdjkVhVCNEm8TYV2ZX8PtY1zVnf4BE8ytNKunT",
  "key3": "5JFZ2X6zF9Dbs1agLFysSuVU7ZYc4XfdtpXTbza7TifuCvLRerkykcB2SWHSxyu1SViRnvZj1WjA4bPKFwBZANFE",
  "key4": "445u5cdJ1vAZeatgfsj9M9ejtXjTE5jCP6EtTi1d96jvL1eqomdwc1Kct5pCQLVtpXLpUpNYBJUMPCkiiMrMbu2d",
  "key5": "MA42avvrjWHp2pae7jEQHkHz68EJ9zd8gHPjiD4R1HrZXCz31Z9h6CEHdZYmjFzyio8kv1JBPA6kioKRcPTyUEj",
  "key6": "5CLpx2KPw99rfnEfrHXN1ngKiKDWbV8U3b7EcGm4azgq4UmBQKhWd6siS1s9C1AiyxvPhD9qjMCbUvYBgB2Sv8KV",
  "key7": "4PBHA8aUdE4h56FcaUndCb79rG6cK467RLXqJcYp4kK8iV2pGtkmn9tXTTpgjMpF4uEkVp1MMe1eWfYRZ3hyaNb4",
  "key8": "5tPkMCKdj5RrJTLnvNHqrimx2KNsBqqsS3BLRCxdydETC2Nrb4UmCZzvdWuSU2rk9adnLi6H6Z6EpiSEcV9HDvC8",
  "key9": "4EtYAeYPKnL1dYvij8K9a9GYVbwDz7ibiuX9aLVTbFN5zvhTKok6DMKZB26P5Y8sEMyyF1m25cC1NyjrhhHxW2o4",
  "key10": "3cpHGEwVHvE49NQteWJ35NxYMvTQP8R9cLZoUasi9yQTSRbphSwygk9SGtGpjn2HFG7wTWUc1YrsXbWnSNQNzYpW",
  "key11": "5X8qJRkVftN5uMydxa2ZehuyyjV5PbHva3wHkmq9jxy81TbGihzQ5Ax9R6LxhUuvTcEZps8sTAnrhptzEykgh5tK",
  "key12": "22F9cHjPf2tkKKrrgHXe7YPZjz5BpHsH3sexTGRsEjcjBiWB1Pw9BvMGHjetPFpQvNfbAik4XVm29bg72yE22ath",
  "key13": "23L9Kd6Usyn4mdmuCKd2XaByfoteW46n4VzLwYJ6nxK9QQrKYZgHAcqpHVmpmsCuWZ4hEWHtv916fHDwWwJSBjoF",
  "key14": "4ZSdMMBq8yxvB8orAm3C5fo9LbycUMhkjPDVMfV9pjU6T1UhUkxPqDyrmLNst2gbf3cii8iRu3pEoje7G5BYYLeK",
  "key15": "3QY1Seyy9TZuEMNQMRmT7bhxEZQYC6X45Xu2qmKKEmM8B3p9wsMewaLwhSN6uYz6MYUNPoKsqfSxdV9B2DYgnNCA",
  "key16": "5xE7hLYdaURN4PzpefAGLztahfmXkEGuEEhbMcEvnd1gFHYwswYfAomE3Hm2ZsovPNdQHhWq37ZDxBHzcwreWjJh",
  "key17": "LvMqyGQEvcjLDBmHenCV6XRsV9gdhTdu7Gcp1tip3RokLs8o7AhxnRS62CdGwjFDbBAeZYPTnKzKqqfMEzKzeoo",
  "key18": "6267Xq9xx61DkXAHmT6RE57WRTAACBhsWZiyiBnzHxLcfnT6cgLN3DPVRVgyCTVYdNWVGzkVfpHt5pirqAnWU5s8",
  "key19": "2XMKN9QYKpAqDv7KuBFdF44YsQTvDUTr3eDn9v6aaPhYDFKPbfL7mQt2BqRGmkvxpy59eYNF7PZCx5o1sVksPWkg",
  "key20": "2NMtXHYwG2qUff4Wcro5P8kS9tDgCUTXxk1D9AkV5Xzn4QftjJyz7S3kH8zGi2WDMAbyaYpAkLpz4jrXrrn8o8hx",
  "key21": "2vWrBXqNPvXd6FA2BEGVHUwaHbu5U3nWe8gN7JAvGYQasQyXxnmaNq4nw5JHCwQ38cpgSRywzBQfmRCBkMdhfPHq",
  "key22": "5jiGv5xnP6k8H4h1eDmPwphfEZx5FbAQQJJz2KHERfJLocKgxJM2KyVRHqvbP8gYFUvXYHrxdMpEku6Gazi2GGPB",
  "key23": "65W42qx4XPwsp4CmSLi5ECoLe8hGCq5sX3u3HJw8D1Q2PFozWNu1DgUZVZo1Kz5nYi2EbFrjk3p7H3Jngbqbo2bE",
  "key24": "xhvbyzr3QQ1y6BssnXnGjeHzuhJtDigw4eCf5AaXDXGuwgggwHWuNiuR7tjxaDmVG1eZa2z9tiFbr6xGuXNkWGx"
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
