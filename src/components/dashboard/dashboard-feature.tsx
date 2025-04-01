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
    "4jqXXUiBE9Ky71cpaE12oxN2nfhieZvtoZmG8Xoe4XbM9ywHo933Vd7u7ohxgZNRi7QAqtxKqxQH7etGQbPSRbeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLhgYceFxQbsfZwBy5Rpm1ZfwAn6NCyo3whhHkLM27qV4LhhsUycCwnsKcTq5NpjEMKuevYzy2tGLSCaUsan9ad",
  "key1": "5RWbXeiQBDwDvsjtPuKQgewwQiLUqx9eSgodzCV5LVYgqKEQqTDgcUpcMvPXgRySHRP2y1k4mFSCzzNeAQokuf1x",
  "key2": "4S3VZ2G8FpZno4BxYaUoAQrceQ9Bs9f5X33CswVi4RtDKNSRdxDrHpL9Qfv7Z6ekYinDMqPb6WBD3AVdLzaffrFi",
  "key3": "4sd3w4x31rpTtxErCnqq9MWzbZ7chB1FJeYDFDwc6X9J1ctMdiiCQFZhApEETb3ow8yT3XNNqduUraXmxfPunm4i",
  "key4": "2TSnyNvFr3ykKUwHdriJMM4mELmDG9LpiYw2Nf4myg2FLzXpRErX5JSq2S9BvNCg1HYxxiWTFqvdQPGh9rbcipKE",
  "key5": "5avf59CDwL1jFin9WqqP2qs84AYHnfEPZdxNaoseyKod644r5BCyCGkTLe4vnwuYBBeUDDhVfytLJ846Z7thXWRE",
  "key6": "2SKaqCB3SJtx3gFYA2M8HgZvGDWbubYDo1eUtxGi7awAS2hhzWsTMMwHKBwakwKEQ1rC551E1HnWBnVazfqbNbVT",
  "key7": "3sRxmtJ92TPSF1dRmK6dM7sZmXTyML1ZRkxU4h5rjRkiH94sn1tx5qvSpD44Ca8MYPA1TkewsvGhvadMFnEUxnAB",
  "key8": "3cS3kwmwCLNHCLq1PamN17b1HJ44nFTFM3EF3JM7FFCXos4Mtp9Gnx6YLrQyrNfdX71tHGWrdk28EKz1HaHaeE6T",
  "key9": "3sVinLY8GeZGUZ6Xo1wvT2XFDas2UrBoD4yhQjCNu8Cv1MpffEDVSqRZkyA9oqmYCfywwseAtcSKDwKHA47FQdhJ",
  "key10": "3pjkJKfmovYLy5wugYNti6m734M4pXSzXqVDGBNd3S3bqJQzWxkX8UEa9gCNkwyagVrTo8HRKkHyvJvrT5Lt35ST",
  "key11": "3aFAVsS7sRY1AHzYFVPmMCjMadn4uMfbELNM2ooYDa81XQf48CzwBJCp89eNEDyq5M8D26mzaC3eJjqwT6avKw76",
  "key12": "3mJEwaSfDmh9RkjwHnoCJRTxwtqP6jwdwAk7ZJMUUEsg415Qej7Hj9RfnSp69AojxayUuUrBxB4g5LTPYe26f95L",
  "key13": "GUYitNTavneCk3nr4qFPGCYgAMXq1u9hMbMiUZtwMqvuHYmKCdXEBhsKLsSx4XG7h9U7VrEK7A3sALXv7qcbKpv",
  "key14": "5EdtXyB9HV7XYQKJnhqoUbCK34JyEBMYQAoixG7bc67CkoUakuR6ULcKoWXPsLGzfWHChPJLHmEWXGmt3w8EcJMP",
  "key15": "4yd9wjVipWei3J5vAL6qPGcRk1SRi5Cfsf9YJK7UAfmSk2S89LNZyzuPfKL9u5vwfkC7x49hrwCz9EVuJMumnNCu",
  "key16": "2pvyoFSzkjBEgj3Y5FnpsoSmHpVrF78UDuv31qenXAj8MzMfGHw1bxfCAWbESUMgqUaV8wgTMvuxZzK63MULZQ6B",
  "key17": "4yPydUrEni9NZ9LR1XstaUo9gwKq1QY4XiJJnY9CR8RNp4nwChqfVu7N3QNBHUA2wTPvqbyan43VkA2RMPNfrjHA",
  "key18": "4kzpYKmcJiVgEVRLLXVy3KXza4YN7ZcFpAsA9HQtu7eb244weQRPjNif6XJVys6uzsxqUeNVFdvwQQGsGAMkrveK",
  "key19": "5oRST2cSkpem2N8FcP6sE1AAq2A6ATBaVKC91EV8CLfv6LxNutcY9xpurBpasxqxGBMPvbbRzzuGhdHSUoiKNidq",
  "key20": "2EsiipqM2bdvfJaExWB7r1PAo8gaeSELvnYGTGtGTaR8wkQSLpSV49CGLK7GMorXUU1TBaYK1YFz8ifhmHMvbMit",
  "key21": "4sknAa2vfM4R6viqB5SYJgX4fLeBEa36uTNjbkDzWVC2WtDh6gEcysXPePbNL5UCwP5aJvW3wWZ28uiCrUNWsJDC",
  "key22": "5EfqLm9AnbUxChMDJDScgArecAsMXv7wESpn9VNBfrvEUzX94yj5KuKwJaQMfsc3fELv4oxjqrekbo5AZRnWRvBX",
  "key23": "57z5qZecpnuexvRa5pvoRrdsaakjtSNLNxaYMQ6WsDbv9mEUJv8VPRZnvAmiMCGx2Yw6hjPsBGCUqixqDDxkCmad",
  "key24": "4QR1x9mDhYeFYE5YN3dwyXtKZ9KwhfQebYHaGPgn6DpCf2iHr87iPnfiHE92Wp88McMc46mSLxJK4einofvQ4ptg",
  "key25": "UGUWhx9xgSpfPbHPV6SVtTSywdU9YSRN5HuUoCSHwbQnDgoaLh2TCd7VGEdFN37BA8Gr3mwbrVYkSUpA1PooGT5",
  "key26": "5M1AWCvAqRxYtMzwaJ27XqeEfd6a4EXPnyiKfZYLY3X1bp43AFrToD2WyYUYmcCUZ9wTzeLLFSP7mNkRHWooKT9S",
  "key27": "4rptt6y9yhUmjUMTpFWUJzZ4a653HSqcgA5eDqYLu5cU3XoG95MpZjKDSk9mM5Lx2fXXjkxBskmcUniQNSRJUuhz",
  "key28": "4qmSwkyEDEZkD8bKcumtpHm3CRaKiiDoWcWeceC19oCt6caURJ97p1Dd58FpgW5MhuaTXLEoXZAcj8YZuagknA2",
  "key29": "4rMn8F5QxEZ8ArkQux5e3jXCKtJTLNQGgJ9gYQt4xRiidSDnxhxoUYbQDD4qMnwYH77yQ9R4JoLD9K79szX7DmSZ"
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
