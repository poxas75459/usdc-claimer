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
    "4228ye6Q5YQfgt4nvwmUcNpuhCGTXrk7Fyr21snR8FWcof13u597iffhu8wdRn5cFoEgfga9fb79x26DMPBGUQMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6HKfKHQfsc23Y9Lefz1JPdQR1NPqKZyz94tLFprNqRafT7ftDJQKi5uhujDwErBWSadts1yBAYQJ2KVaqqjxBne",
  "key1": "5PqEgDZTPja95aPo6duMG7sW2XN5UmPrDhqRmQKgGbrsFeSXSB7aiA5UMhMKtgYX6D8mKdH411r3EULhrZPaP62C",
  "key2": "5Jrzdfb5ngC1qEJU4CPnUh8iuJ7aJViGWQV2hBwCN11F7srNMuKUEVzuiwU3ahHc2aUDaU8Ja3sjCeyKVPF1GfPy",
  "key3": "4MyrrRUwqBqN5h5LZPmnekFBmekdamMH3rkzHVU9YdmkCcLA57Aydbx7zn8fTsP3xtth3FWBHLYNZ5Pas1ZQjtqj",
  "key4": "JzDcUdegHAp69ov9Cfy3zRZJc5kKtjy1JaBJ9TbgWJhFQ4VumTB5YpWA4daRaSGJmZiZsvj7S5DMvpLmU3KD6uy",
  "key5": "5Nsbfp82RgBi88HSBRLvihz7PXfY4aJ3LnUuMkMc8d8wFoJNWHzSP2SoNXF82QSSzrYWdpjPEde7dHaRjoH3U3g1",
  "key6": "4tnqL4GPV5N3UjNy93G17ks98CANSvZzaJkLmr31VjPA974EnYFX3DKQqiCu3EJrvu6o6KVWRpwRJ4YLCTfCLUMJ",
  "key7": "5CbpXNfogxFW26JN4N2nHgQdD7iGA1umhNgg1AgkF1asaDqQuRPwKjkS8YGoTYzeqnLYQdo4NewybtNJHdR4Hvkp",
  "key8": "41fTe5D6ASugJqz3QdKuKZ1bkm3bmv1qSoyuQpxAHyyGp7f7UCFnU67bSYrj1FVfCY3jkotFPwyTR9ZLBDfPDsVy",
  "key9": "5TYuDaMqhvS5CHJ9YXamQZ7mq7Eiw5FDeyi82HpjfpHC3FWrwuXt4Hd1Mw6Tc78dkD4aPJw7Ahn1TBDYVKDCXVDj",
  "key10": "41rnxUtEuTajbdZTmvV7jP9WxAacaS1QGGFWjicFzoBx6hRGEkA6ahvrRvptL4M3cetFCHR81q3jUYzwSBY3AWhF",
  "key11": "oVtzdShAxFyWDLZssLQqdWDLGezVKQnajbzXoPHQgFeFdn4F7cyfuSkcFd7eYJZ56wVbje7Qqc5Q1XhYLFUwRA2",
  "key12": "3XmWHs64wVMcmmwoiH6HxmrcPUGRw6FcxYNZZVimy2d1rWBSzMFc6fDapozYqRGDAy7vn7r78WFDrY8MtDpYqrNF",
  "key13": "5zx1nqWpVJV7gJGx3mU3NYVSzfkZb39N7bcwrCs7fExTG4VUSF13U5irdCDfBVgJhD8k1bGVAJHfmidjs1wVHZyB",
  "key14": "3vT2TTmVGGGQdppKje7DpDbUStZv1dP1M89V3zKVJrvPUPv8TGU5URDCJow4WyipXbcD7wto9AZdTpXuYmYHeiKn",
  "key15": "3DguJaDXhcuNxEVcF136UKMWqzfRA6CzumoqZAAC1mgqumo5hp72CK54YaurQWzhuFnF2vYJw87Nt2f6GWVAWsbN",
  "key16": "4ToRUFfk6hv7dFbbqttbYoUPtZU3BU8jPGpgK8RsFkpqybbxyHX9otWLBdAaD3ANSzeJNbtCkPCYfTEo9A9oiZae",
  "key17": "51sFbFbmXLRJuaKsJuHkoSkBVb8s2PBvaEac7myQpERhX1CcFS9JxPQrPE5jJuviNW2WDLJrJgtQqbRvkPbrWzNi",
  "key18": "2wSdXy2Uxxsw4HY8iXdf7gwuKjfD1Pa3ZqfCX36k3ev9cXP3Do9RK5TUAEAcQ1Udpk7rAUM5SBmCV2LJ65VVJY8R",
  "key19": "4ZYckdUZ3oqau3XmS5oQuXgZNPAFvEsiEwMd8iX2rzyHFLJoJ5QEaj5Cb6vdXR4wrLcHXExCr5N7VgdJhSvrruoZ",
  "key20": "5GdU9ofJpsbSRSUpDozn7gKm5ZLuHddn2hdxEZqntvMXz8Vd3XTGswF62Prapo5nx8r11ZNRLSgRFyin54peJyKg",
  "key21": "5wz4Q1Q4dzRi5gWaTZKb9jGJR4dWUjQmSGbZMdJ5sgDtQdVBFpavfkWhYvgAnFWZamwXSxUCNxkCvgKBdkmhykzF",
  "key22": "3UmYkhxsKKaBLXBPnRgh2KE5wgxurCrnHEZacWN7pYT7HvbJTFB1BwX87UWGPXZ5H5CRj6CzaGRNyxT37sc2ANUK",
  "key23": "2B1oqCAyQzruJnZ465PE2wzbkqUwci6nmPAeYc5pdthnjLk7Q5BQSUpoRioKDRSKmBwcSe3eCun565vFB9GaLdcr",
  "key24": "5mWfS5EQkc73W1E6bbDLfJTTgbqE7dTzi7W7mHpCQ8QnnYLS6czyiP6vzvUqZNKk8z5ivqGVMY5jkxfj3PbQXjpZ",
  "key25": "3vfYB7FLc4i4YFkr6RKGY9qKjTJJ3Eis9eDbVp4D1du7TzUfLXwkxW6kPbgGnV19JaQC4krd2PzkSrGpxfs3WjLy",
  "key26": "5J257hKKaiebFUj4aSzXAMsdJEmLDxAXvKyVXVAtiqGayZMxDhi8Da3voL9uhBgWZHwzKLb2wGvCMyrKNPKWLNXq"
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
