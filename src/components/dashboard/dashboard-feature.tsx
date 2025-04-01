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
    "XpVVLjRAjVSWXxkiJrCweuw1T8mPrfH5Mp9CdZ34EJdMXyQA6FnkX1PJZTp7PD9FAgEUrhiedLmxme8BoW5EM5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPtdE2qJea2R9FhW8Ybt2x43Cq87QCKzbGawibrbUxwWAaHsR6zkrffCGEnSZf6SJRGYSgsuPMcdMG9vossUmiH",
  "key1": "3vEg9pVyGP9DTYa6NgGW7gM8Ftc4ZvN14M74YhExGYzanfY2LcuS5u2sUT2k9HNPPSLqhTeMozRNx44o2FeGaDCn",
  "key2": "bj4eanu7Rup4DNGrMpRdaLNxSq9gNwFTEmEGYL48yA8bxSa9KLwuFgEhsSLvG291M4HmTvkSBFyN4erxRs1AcnD",
  "key3": "oJxBzDjrEgmmt3a12Prq8XMChJVGVYnWRZNZ1CVQPNBqEBGbuat6kkYgcpQNW2y4mn7hj1fMySorydw6du2DjS1",
  "key4": "Y9fALQfvbcxqG6QreojXpCrVigprmXQ4AY8dASQboPQMAq55SsP2DPW2MjvKF5LATyoLcEt92QhWFKEurs9bXS5",
  "key5": "4VoMdqjXDVBbfMRh4dkN2GBNqddivKtuUGHmewvaANkQ1vXBz6eeGJV15L4qLAKd8Mi2aidZ7kStqcpfS1N9AJTa",
  "key6": "4YQPn8TF2XcAoahLgKY3u9jtM7rJXPVP691nB6ree98XtAnUVBNQcmNxTJ8oQKKkN9wYcRMDaedxHE9rsNdhrqx1",
  "key7": "47X186MM2zUQRMUrhaWzwPxiUfqt2BcEwomMpVwfG5QfbsLXoqVaw16hbG23zvQAKwj2kVSavYMKCG6MtF2AJHjX",
  "key8": "3nLsAHVcaRgTtMLrMFHNZoGaWBCuEecAS3F4fGpPE5xZQ374FY6RHzeBpbwNDLX5PHzcrB38tVfBZZTBCipNVhMg",
  "key9": "3LV3ZbqsTPhvojcxi6VEAdNxsiB1Yfzu7DdzWL9pgXNr1JkxhU8Es28uEbpQRyArk4D3FrLzBpVsmvxLnTjP7ndS",
  "key10": "cpuzewKgRAG71Nfqm1x49fVVFeqZk5GrZVHjDo7CCo8F3qgKtdk73JMrxZfEcPzbYd2sChVcBxmGiFT9TWZdbyE",
  "key11": "3XyhDEzU1y8m1YptU22SaH49EdLXZvivEs5RMEJT2d2hNAmEVZYh4rrhUQS3H8nPd2u5NmiNoKBtpVTPsxRtkwN2",
  "key12": "22ZixCF47GFcr65ZktGnEU13afm1v89q6Q7GL6LWGTUwRVaYdmE9osWMqCHh6RUYA3US8VE9yRn5zqE25SqHmBx2",
  "key13": "4okCMj5YYYPnK3o9zz168mnVpiE2of75EhqM82A2astZs31aNhMgMMYvjiKQNodKJeZexskcKk8oQJrWnkYAYMdq",
  "key14": "5VdQn7swjzgexdWTb2UnXUMp1jomdYkcYabWtvmVTZBSsjU3CpBwRqBHST3UY7pUicxE6R7E6fJGfVmNHWrwk8zV",
  "key15": "57CiRVgkmikKji9EMoUhfq1gPU9kbwGMUumaoXWsWHW24rxhBA4JVSt599trSkCkuUp9AHSywadch9dWvBXgnx1v",
  "key16": "55pS9mTviDZu3aP78HLiFAPdpHBKjMMJ16iqDiEDUUUSQYDQSNPmWcdrBx4jPY5GZ3MeVYV7dtxdJekguExEkzVF",
  "key17": "2tfXREK8VXFHDUSyGKxUGCBv4yzwzKUXDzp2ZBB41A6KkNGwkSDe8NNrjrfJAiDtu4NQVZiLfzFW2Nqy7LRZvwu9",
  "key18": "5mJHGEGHnW5MF1tRkCCoEzfyKL6vP9ug7VAvDZjsH6CiQ6xgQf3jRxH6CvM1tFH7fmr5zCCLkLD6G5qvzhXzpKuR",
  "key19": "24MA3EuUmr8vt7wRxNaPLL9VGHSPq6tt3F7LSnriGqyyfyad7Wgoxur6tmC2GvKKABvCngtKNGk8vadLFavBR9mL",
  "key20": "3fJKYn2CBwbNRAGsRAMREbak8EGti92VKELTigxdc3xrAJrgsuLvkMZBfjqCLv4XcqAvVNgQaCiMKhGMTfHuECmK",
  "key21": "Nip9r66m8bEiGE8T9cjDWHCPhVVUZsKEN3rm1Sn5hKi1dXDCUXPFQLpBEjG1wTt5KeZj1Kd6HSYPkSSUMG6jGJS",
  "key22": "3cKFF9ZJ1jWMmPnC5UYFX9Tznfv3vjLDzyBx16kESS5r3HbYLopwfqR4YvWZmXZFenQB531NqzsPXTWmpBgEtStu",
  "key23": "4A431sPc9Tr8CiLSYfe7p7pm4PcbNW7Wh42CSBvd2n1MENpfwedUUyWfxqnzhVbpNndsyerpRVk96U8MJV7SrjFf",
  "key24": "5JniCrvetQQdZoKiNA75txp187bZjsnpkYFKpNgBG93rPE7c9PF6h5yRG6i2LDAGdxLYoWb8D7y8Li7n3SrEL5Ap"
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
