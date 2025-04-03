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
    "5fL2CdXXKFpWQd9rkwPkcbZkERN6x7xLpfgDqjCbuR3TuYF7c72yxdSWVcBQ19FaBnoZfuywCMajDQ1HcuWfoVrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wtat2jPciGxN6iK5jaL7SySmuctPGzE6XLX2aKiXbSrB6CfRrX5mRes5suMbFDT3E1a2hmquM1ewdStKZTPGvzY",
  "key1": "HhwqUqJWPe3VZBrMDZWiEaj4oMueDxDWgxwGYSYpMGAEw6HaTNEoyxEm92hmT14znQQX8GVwu7XnaWTHVKMbyi3",
  "key2": "67dUUzkzKMs1fBCZRi2aDibxLBdkQ7Z5k1rySRnrTtcP8UtJAfH3GZTuRZYUAtpVW1Hppb8z47cxdRAQjnsywti7",
  "key3": "mBR5B4eWmUHEWfrjdmHhZ66m1Sch9kSxn3sgScKb4r7DXnqHYxhBtWDASEB81X7j1joA3WtG2fGHP2prCdRKBux",
  "key4": "39smcaevk7tDWKKY446AxS9QgceBoDCcQqHaRNgv8RUXWfWhewRErCrXZuwkjnyUousjMYrqW3rWhL2TY9iaN3Xx",
  "key5": "2kYCZFBoMbMNZ2hLfpjeacWUKMeDkgXg3Yzi7VUHc3mY5c2Z1pLoRaJe2uaggm8o4dcpy3gdaEKxL3WFiRhQ1fAn",
  "key6": "3bmpt2fcLS34V9KCDbghP3dz57Vg6zSEPUUKDUuHXL3f6XED9zUxZFN8vLmZwAXbZudWghEgQV77RQSYyfv5rquR",
  "key7": "2yg3CQgCb1UtvgQSojRsw955wFEQ29cRBm96pWEHPwwzHaLmNoPv46yCavJ2yu2HUSWWfzwa2Yyu2G5tR5LSAX55",
  "key8": "3pAF5VLAEj9zWXQAoQ7HiLmtt2mxGZ5GKVXWRWaKXdmYJY4i5NwC58obHq6umPnojYCsV2ksCsY5nPpUeP7ZcdpT",
  "key9": "5Yg8ZwpcekQS2KzkBEvadJ5L9UmjaWdeuNnGbqERuXqHb4gQR6eMeavTGMdZGGpnyL1kysH5AMV69sjuKpxVrNt6",
  "key10": "3WBdiJ4fJFmaeJNBNnwyoEJ7XnA8nCTt45U45KL7YX8hhyKXm2sm7TqJHFUSB6MKQXJzFbCvdndk25yXBzC2PH6B",
  "key11": "3UGbCwAEjFTbS3oFKM5HxswMnmh8PANGT17ubitiZ4fZGMRHCR8NNrLQfvztRAfyk6HXCfzWbET3G5P4hGeG3Hpn",
  "key12": "4gqTASQuKcpiS2U9AbV3FcMizPRxSdgMeqkWxz5E8rfQrvuivUvJK5RNBepucrLZFquuSHs7vrbyhSTFXahxQDAC",
  "key13": "SRdTFEemppjauUa3eaDkg7nNyiLFGxjGFidcoqsDw2rVNfHEm8AwuyfGiTiHuTTPepHApLVvsCoZHkWHLJmXJ5E",
  "key14": "KpE5tZN3L8sV1P4JLKSgNY7C36cuZj7mJJmsD5W7akZjANEumVVr17nDcEvjuJFRdDvT2CUaXEA9jSTdS19JLsC",
  "key15": "4jydAp5rdrrzR5XJ7SXhtp9MwH9N2e6ztiDmMTasFkcpYxFjFfs2Q4bBMmE3L3ccTdfERrmybPp45cerRSX8LUW8",
  "key16": "4eFf741aCVTcmoqLLQNxa3Tc4dGa9vr42kry3CrgLuBGkQ1Ui79Gj19Vf18zbeLQQ2FjBamwvTJj1Lc7RLaWcKkp",
  "key17": "3SahFiYvf47QBsVWtUpCtSvzy2Y7K8DjKi1Q5nqknXa13CaCWSqc9vELuhCyQGzokJCNSgBjkWSPuKrJ4uEA6Lai",
  "key18": "4LH1KoBP7skB3kdTomJApv4KsdGazZPi9oYARYq3cYrkKUWdSKfrSMRidXQyaHHAS2cKczLFPB2PodHccXWjcRo8",
  "key19": "48yMA3yNPJ5jCmQNfoJz7deFeYfFF5U6aU2e22m3JXnzhcmMBxbELJdHm4u1NAPkJNCzTh9xEH5smNsXZSb84xev",
  "key20": "3FrQSKFkspmvLLbnVWi1tJGaxFS74n3ik3Pv8GHeCj5zrrkvWccw2a1mg8mSQdoyxEq9FhcBV3QKijWBZCvcmJYc",
  "key21": "2uq5ocYsUfuFkPnnfP8xsahXaEhoicmp9V5qku17JjEn1Jt8MyMiD1qtonCei1mwkZubGLpguMx4V8Er7p8dn7Jh",
  "key22": "4WuNV165bWVLipdsVCD9A7rvHSfCMeNL3bWJ5UWWuasGfRqsG6RfaLXcK1V87JoyGTWyFQ4JcTYsYeKzETbeBHe1",
  "key23": "AzLr8FPincB9eseHxh4RDbHeozbC5BbxtVq7AWjUQsBN7YfUtLUR1ubzWkbkzfNU13Rhhk4QUWSDqZLV5KUgRjk",
  "key24": "2nVLkPp3txAPYKytAA4EdeZkwQ5uo6ugrnV9sqxztTTepC43t7SN6UMqv7Kp34jKXAz8q9uTBhrzNDoPptEokjMs",
  "key25": "3E8Gk1jLHz7VFweKtmUkm6q5VH5hi751S8ZmwzoV8dzTMruyfHPBpVkddXvyzkmMMizfGnJfzx2dC4Mf9xgwwHz"
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
