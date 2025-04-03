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
    "UaTUGimJFSue1TZ5GDFnQ1ZJGHXyG58u7Vf7xbvrY9QER738hEGnH2xdq68x4bH95m1eBSTMmZgb1XEFqkBM1xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNbjXhM7YPPZC2LqoCiqB5J9yhCRM8ackoTkoiQ4n8zf73FNSBtVACCTbcFYyzG1jD1UC3c38rLibaZvK2SGJc1",
  "key1": "2YrMenqmkGVueXqeLgg8NFCa7HAdxkVhGBd1SrHg5mCsCYCc957Vq9LPYSw71sZWGiq9rT6jFKEbewVp5h6gKDWX",
  "key2": "4awSbJhc6BVrx19ayjaSwU8utw76qWCapmVy7oxQcSnaAPuEWnsYd2K84tpPhEyZRbhwGEEBpcV7JUy1xDRRhjvj",
  "key3": "Gt6yfmB3CgbFhBiF2FoGBJ2VWsAd1knwCgm6VH7fb7JNXaWGvfpDeYTSJUUMCjdGwksxKRofYtCJPgUDFYzRonf",
  "key4": "51UhcZgyzJ4BbDPnhxSmo2fwJa87iZYv1BJHazoA2yPQhzKp6A7gpUkZ9NUopme9Fbzf6Qgv2CSCSNHaySQ9aDDN",
  "key5": "5xwuG3gD5PmYcKCvxKLcSpdCfeL3Ubm5sV2oNJrqp1Ea77jX83zNZtsVLWpfuNec21toaomyQTLUG7VJMKAmk2ok",
  "key6": "yTdkc5P3EQW6Lux512SHX4jSV2d7aMS8VQozZweQHea3woRvTXctZS5Lz54iLC2vcTtiWgMbCR9h6yr5K1ojgu1",
  "key7": "4u28p9zkViSrvevb41F6XeVbjSTGBi1i8t7ikRKMzurD1k8AWLknFM4DGjpfzAu83MBTL7BFKefpBta3i8SemK8e",
  "key8": "fBeJLbzHWopM4isdTwF91VzAV7T5xmimbA9eShBa4yYbM51XfobYvdsR6rs3d6JwTDXSDxhVddbtAJz8PPvVFDy",
  "key9": "PbRYptkuJRLBSyvL6SpuyqVMHsrE5iZTHCq6rab9XSyHCqpRMoVkk8nynLmtpDm3hQHenAKZ6SZdpH2K7ChxuhU",
  "key10": "5LRV7fkkVniTKuegv2zCDwG2iQfHPxFDkPo6BDDQXMWacGzC3jnvM85RyjoWuFV314Hypuc2Z5FqMZJ1naQCB2S5",
  "key11": "sVbPgVNjSuS1n66qpTU4KqGgWWyaEoVwfCVLVgNA4z8So94nR6MpiZBuqWwtu5RsXq4cZwmKHHdyCtCUxQAJnf4",
  "key12": "VLUTmbKxqeehuArNcjE65oEPMPYaNzzMLnaH91WLp9raaR3XVRTzARkciyHxT99jvyqpDg5JEpg92c4i1tuhgQh",
  "key13": "3NRSd9R32qGiCkEVtPkMGd37BpfAAXYx15uji7YgBZG1wLvBWqu2QtkQtbNYysyvMLxydfxYgaqSZC57nzNns4hk",
  "key14": "5VrcyKn7Cnn9gY9eFd1QXdVANv4DMHGf3kCtyDJ3wYgJPuLHK2W54yDLa26bK5v4qvHcuCvadvJ1BaXhehr8V34o",
  "key15": "2zBvcQYqKL7PSEawdWC7t8vpYqBUKv44Hga9JFyTY75JhjKoKoDBdkXsPzKZ7mNaoM147oz47jjQnwZhHA86yenM",
  "key16": "4ozWG4X5eQ5BCFujCqj6T8RURLLTDyBxvetv5uSH6XWFwuxFTphjEKx5YeFJxWHtGk9orkqzF1CpsX59EQrxDkRB",
  "key17": "4wM6DF7FzWDajHJXziTKsScnorPYJcWhRCPsCFp58BMium94yt9V9FMZsokZaozcuBycL4qv7PUAMo5D9BAPZAe6",
  "key18": "QFtpo1qdD2zNHycgoV5sYRGarrJ8KJLRqk7v4PcWqsaxEuq5ErEVav1QsCeoY8Bd1z8hGaRyFLkg1Uu4sgDnvcm",
  "key19": "4Kfy2w3Rs8nNog1QM2PXgdgCsjP6KBkU1sXWS3qnQ3KDbV4E32sdXCxFgo5fawmgVyJy7yiXR1zfHg8Pt8XVBj5E",
  "key20": "4PPeXXUsnwUb1u8J8qVco6LhSbEqBfEEmi9YTzoQWyH4CibkDqb9pZZ7siqwY5wWZX88Ruy6s1PCzJsX7KNSyW8y",
  "key21": "4qaujwTUciBKPQ3jZ8z6Mk4JkhFKptRyPWxa12VzjdthqsCe1jtQcsnvGNYMqWhJGwFcEJxuLewBGzg5osDqLNTp",
  "key22": "4iPa1S9nQTLZPi4Eh772Kc5VUA93VnDYo1Tt3MwbY5o1vz42k2xzVNKWPDXVNudtQ8eXsCmSpv61UHAWjTfPoQL",
  "key23": "a2bcM7eBBnqPhuibHKx4sb4i3XeKFE5oHHG6QcMujc7J892CLSsVDv4JRcYr8F29aYv4qK3aavGNURcoPpy5mnD",
  "key24": "4LyaEELw458ub1nMU1mzSH4qPy1Dpkb9rsM4xn8Q7xPoZixLsvMNHu1NJyFdbvLCxK1pso7HGLhADxis19oTiYEY",
  "key25": "4Snn9MGDY1YEFExz4N6JXEQtr5L2MVcUCnWKyL6wgxcR2pJF9jqsGjre213Fc1SmaXSRy5xUiJ6eCfTuqBv1cUqE",
  "key26": "Dsbqx726R1VR65oRFLjHtVVGkAwyinTa6us9R2eTW5a5h8e39A32nA4Yj79tmV6G4y6cNGRC936apxzMM9amVui",
  "key27": "RFeJQ53UA4JhFZ22Kc1hXBHgLU23JHjTRiuX4i2kCBFjypn1M5D2QM2UrsjR6ttyFh1EL7DbjGjDrsbBPTheEW4",
  "key28": "31sbkqFokpLd9KA8dW2TfyHCJDSsQrfmTXTHf5GLZVDvhiXCNSkMPZb4ZcPAhsCvgz756LPMvS1cYgyjbxrAncFy"
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
