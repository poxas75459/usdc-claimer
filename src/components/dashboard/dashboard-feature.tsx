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
    "5sUWkfZjwY3cc3oqSLAgd7xgawyAbDYFojjawKLfPiZ9or3DF8SYAhEkN96Fj9T2WnTzwwW9kw42WiZwWqiCTYHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmvhUGEfJw3erBnjttq7mj5mzR9tfnzUugF2pnsPgEjdxKQ8hGfJcQQZZHkdjwNRFeTt4CzrShVA8RLRhVhLQLc",
  "key1": "2SvpbfkKrgvtdcVJzEhgHWwpnczYu1G8caLDb3eF8pGscRgYEJQJjcMiHfU1pEKHte2cVyY31Ajy9uzmBff8QDED",
  "key2": "3Uf4BbaoEJc3F7pQBGE9KGUxhbdhoqhWMdqPjgwuYzYFCuAUVx8Qhj7Udr96pBiQ1xPSudg3SYFhCGhThaMtA3KX",
  "key3": "3e1kRqREte64r3JnabQhoyHxLpprCFYAqdMHGMvyqRRdqK34Yx7eukb2awrMFNRVVkEepmdcXN7gyk4M1LVGRedh",
  "key4": "47seiAD95T4YpicLKfZ2CMpwYpD5JWMZin1MTJxqwXdPR87QaCFXD8BcwJVRhYEgBtHmA7MXN4dRdxdExes1s6p",
  "key5": "21VQi75WuScnb4pDaLRFabpADosKtjoJAxZ8TBHn1EEbGre4BhCfvxJEKUux3grYW8KDcHaHAsqUqWoBfgvcTFnp",
  "key6": "5Uzx3znA8VczEPwAhoY2XdC97sfJvCjWMvA4wJtwZLgZDD6rgMiM9zkZEZKesuJgKFXRzwNGTxWJc2yranLGZm2C",
  "key7": "4S8cVCPejXs8ZQSj6Zdj1bfmtM6H7Ggx6w4pQTDPWVmvuyqGSqhiqmo4qtrsMXuA85PXk3ifV6w1c7gAVvoH7cPM",
  "key8": "8xESCDS84KmotThMhwF9AiBuXPCJ9ESrAtCqvYzuVVQJ4ivfXXeeTo8bYvT3vuE31gKf1NbU6j6g1a63trCrnpT",
  "key9": "3tyou6e1UsnFNPYaZowzPBRzcXDGRzZFyZivkT6KqJNVfHpkkYPpSmg4VFAgurqaQSgCztbqXJyiM3QSAmn82Zkz",
  "key10": "22L6KfYM6hkxCUeYL8AMvhCXHyNJfuHmsMKvQ7rx8scFTHyxZtBnhDevemmnGrLvpBrFn94ehXQLeqazUSU7vx9r",
  "key11": "3s7SoS4QkFkiW4ycCFMatB6eRXkTFbnQmgP5kY6wcHEk3cHGKfibSih6hjHLsUA1FiBpG2Eo7VMEbSjW97p8UP2U",
  "key12": "44ntuhoT8uVuj5Vh828CgrBLnhu1ThikTxBL1cmTdrQxZSc8FyLo5fhZSwfDZaFKaJ8iVETwo1UYBgsjD9Y3Kfhx",
  "key13": "iPqJwV79yvhSUkYu1Xw4m5JYpoRGrZ3taa1HaTU9udwMNrTcEyUHCgVDoch71axnSGM5sh4qMoFxuMnAmYEwxuE",
  "key14": "2tDafSoUVD8w9EbrL4MykE7iVGbjdWC8HtBT9DBQQwQc58rQJevmH6Xg29mKx9XcnbG5eYU7gwtBkGiCBGkaVvaX",
  "key15": "YVnoQFc9oPacQiXWExgvAQGn9ZG6R8jsruL15Mk5V92sLAaMGkqCLkDBBXaTLmGoq4ho4Jfd8cpeQZ8LPxoLLPb",
  "key16": "2nd2uoWVWKWJvZRdaA33Ghu7pKGTxppiG4DUf76EzBopwAb5XMEf1NApYywLPcg6zBE1LgFJ8YZP6scMMys76DHv",
  "key17": "4Xg1cn8GaScAaTSaS8p1ZT9RnTjrjARF7AXGrmtJNMfm8BPnh2qdaJc3BgpqvN1NiDWUKqBLUcKxi6jJfpYiac5o",
  "key18": "47pzDkkdd1vh7yeryN7VyzNac75iZ2LHbosXmPVvid5DqQDYED6WgzQ3e1o9hVmxbH71utEJjJ2Vmy9VmreMznwW",
  "key19": "2GWopbVzFaJbxxiw9HEPCBkzZrtEJHhsfgrJzUTEU4UqVXh7vJ4kxxAJ87EvuRBtQ8rhFETyRTw1Kmocn8wQcB99",
  "key20": "2nKJuEdK7uJEzyDnGjXT6U1qdJT7yXKQFQ4AJ8vc6JoGPHNvS5h4RjkqzWfLKF8w3xFotmhHEBbM7gwd8ymyZTi7",
  "key21": "AcCqzs3WXrd3pWfRMkomXwbQKPcUcg3UJQY8wX9rNrKENw3inuEHK1zvKaAyxn9W37V4rTUETWb91vYw8B3Vrpr",
  "key22": "5UUDgY4AjdF1U3wHr84hNB7dVtrd9qgKaYkFbVpX7NDB9TFWNdBiTkFZjM3MFQw67dnBywznLaT3qkxzeUHzXsMH",
  "key23": "54epa5PhZDRyUnhxf529zqcC1Ht1ZF5ho1s2fVNotFkbeAgo9tKvy6H9F4YN9pWtkMMb8ZoSvLLMWznJvFnyfWvT",
  "key24": "49LkwkwqfDkFHrm5QJBNUXXYyegfbgx4T8Hja2tCeyLvkTSjo69aXcPnqAMsX5RzWsmKLVmsM2co3FbaiPD3hh2m",
  "key25": "5y9vnaPqNJrczWsHsxH3gRLXJq3PL1QAdfG7dvVhRiJ9Mio4WU6nL9RQyGNC36goyvNjU8uxAqtkuFnYUWSgPVqU",
  "key26": "3hftt1y9GXnS5y9bayckkxG6k63xbBUSGPhtxdo5M6XKczpcXm3t4dVa4Xd3xKbsRzaQeLBNEoHPBrGheVmE4Tu5",
  "key27": "39cYLRfzHxBZDwtiSA6bjhhPFrimp3ccBUUmDeRqofaaw355DD7Zzv78UxVzSD8QQx6mXtMEDwzrqyQeAnUxgM2G",
  "key28": "3fWFvKUFTtVxut5LyDCBzcjztik4ekXR3AKjgbAksvsxiCAySgVHk4iLFjNMm5NDmzQGTY22QQ3dPzNv25ubT9UA",
  "key29": "t5LaWiUj1n1XctTbVAHJDBjcawUkFP231obnmJTxe8UL8LBAbnLiKxUZVJgYJ8uoSy5PkgTBrSD5EeV79gUTUs9",
  "key30": "wbCkYFsbAJLY4HKegXFS89bJjcHN6YMoQLbiyXjvJLjRWnzkxiDzdsrKTKYFnxxye9qP5aS61bRqs7Uj4nkYjme",
  "key31": "2XBvV91AuDrMiPevJmZFBRcF5Qs3hguhaa5ema4dejAXSmMY1gtE4LUx58z9KGoRK7ZtFRaB8DuQfVRPGpu7VMZR",
  "key32": "4EEk4dX7S1qQhrTnMuLhXv3XKjCZ41R9rnpFrtvTC8uRkRuia9oJLt9iGnoeSvTa5TfdaRh3F3z7F5dcSaUSBTM"
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
