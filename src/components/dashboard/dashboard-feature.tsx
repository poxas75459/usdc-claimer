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
    "3kvkJb22sSWrJEFmaxwMFrbiEWKFdcenArHCtpW2TZdiFSAuEyEML2yi8X1A5qfiBMh32C2bQBEu6MxQcVSeyEcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3wo1KjFjV7huuvygHDwxYPkSrYTJPJnxxTy7GksyNBirkJLFBLkhbz6Xy7L9Ayy1MEMx6A5LZwXyCtX9V1vgZy",
  "key1": "21e5cEvfgmCxCe7P8jgUbXJXR5oWKcDNm8mdrjH8VkmhjjQztPzkH37B48RiUyszopW9H9HDzBp1tGCY35VseeMv",
  "key2": "3aRZgZJ2ZHAc5G9bUpwBXpWGiaSgtk7gb8S5VbzjMbxnPsHgaVtv8GoaLtcJ5kewZh2TtFKmcUHc1fstpURpYk6x",
  "key3": "giURsuiL1HVBK6p817YGis1zMNkYLuxLordoTSccJhftZw3tYHBCXsu1HEFQPNvCrMYiVqBuyzRQpDbDkHSgBbh",
  "key4": "dQmMP67ws8KgNMEUYjUM29Br8yJta9wHZKNWXVV3hMhi4b4wFLq2PRjJqDTN5s58965mCETPAJmPniuxkL6FF2U",
  "key5": "c49bTwgKNdF5Aj5dfYWZriuRjAWcfLXrt7Tj9AyA5qndfG7aHThhmwLgapFf7Ly3M6oDPyFqnA8f4Z12fh45yzV",
  "key6": "39WwtaRZfebworhx3K68suMaAEfG8pE5f7wkqtmYJEEcLAQuDkeeXA2YpijRGtgJDmXTPfVS18nA6rXufKCLRoPW",
  "key7": "47pcxyDtBuDT1B7fHsXuFqjGnwJGe8SQb8LH7VWZTb3VNmEjWJNVVQk3wU5Zy81LUPRFRYobKNgbCru9ZoJN6hqv",
  "key8": "37RWqHaTCS6BtbZLydrnVVCiPpd1ehysntMd3SGjPba7CThZHJZkrgz3KdT9ZNjRYURuzMVDUHZW4UkD1DARKuCC",
  "key9": "5Z4MKNGREdpJEq7NrScz4DHXoGaBXrGQJgamxz5rGfXZ45Va3znAFFKoLvKiQ4c132pbrLAjPscwJ5YzotVvMeaT",
  "key10": "1NrMqy68xSDPZRRsxy8FoHbGiy8BE9JnWJQzEvK7Zq69NXYy6eZNDxRsexueCPy96946AiVS1ZgQqeFRsFpEqup",
  "key11": "2aXc4V9gF6UMbGadBWcFeBmLdhR4djqNDdPaMntGq8YreoYWEmZkuDh2nNLevjAGYWoSrWckH6SwV6Xvxeoh72jN",
  "key12": "2yuXrBWq5xqTBLFicUFfwc9j5zu1qd4mSmQ9WHkLynG4wnzG19mod6comTLyh4dKQA3AJFfQAeKzZSjpoZ6c9x9m",
  "key13": "52S2jjxRjKPNcWgp7rWeh6t4sWJ9hLTN8eet64QXc7zDwfoXppKoVMsLZJc7mV4BP3ycZG2VZFE5fiKQY6ubBiKu",
  "key14": "d6EtKPQkV1NaW6H7DEcBVupjC2e9C6jMQaWRuEprR6csBVJfeiGJ98en3vAHvwrF2YJHw59dwMukYbWHArhhro3",
  "key15": "3KRKuhFJyd6nB4gS7zMHLy6KnccxU9d8pxHc5Fuf5uJ21CWeFSbfUut3CgpGCpR7YujzuR1qBVpbku8htQtYX3qN",
  "key16": "ZBFZmS2395WFWPZDZuWcMRjttdd8emzdaBfPGshB5dDekaxwQWMqm63eHXTM3hcNKxKfhGMaimkw8q9nmQnFSuf",
  "key17": "4YdkCi68shVXfKubarhZZax5PV1GoGDhhE3Ye3ufTk4SyR2vxdr6nX4ZCHJpenj4HqfZ9yx9UnuLF3GWTJ5UAy2X",
  "key18": "sdZdQ3PbV3Kwqe7xB3g7LpmUBM73BhhGFdR1dck8q73262qcfvEFEDLoPNPzx3TN1AUTKciAbuxY3qsLovgFKxb",
  "key19": "2b42gDwQCAYLdUAbz7Qmqg8wKLvZ1XnY8eDUbjxQkBQqqfSfFYeyqpsyWA1iDRU92RDQ8A2igUx7BaTHoC8k8cW3",
  "key20": "4zf1jJ5BNRdzkaBkfE8xCiVHgBj8x52xBnqJysMgcKWMGuZzyN8y5VUZgmB8BkwHG29EpzhU55JcKBo6pyc5LgAg",
  "key21": "5D9T1a8xJmKt5SK9cVt3eDHt9Mj3aRVmCqBbRC1rbRLx5Nrj1zxaNdMuvYndJPM5fcwV4aHWzWNgpEJ8FuF6AiAb",
  "key22": "rhtad1Sc4b2DzUViBMNRgxChhDvhQBaLb4i5do6Mex9A8fKMYfEavNwV6AcC75QLW8o5oR5tDw8d83Nj1Qg9WTE",
  "key23": "rrHQHp1u5M7yi6zThX3EuUUmKDCSHNnzTdKSud5tHoU3hzkPkuECiik1p1CwCBf3FoAFTLuaZkFSFtfXu3nkrVb",
  "key24": "3KUfQMZPgaerzg2xk6HNQytyhxyLr8nAveT7P6niyDiKcewQfLyidCireV4U3MTcgZqqtGvCPoWtvpqUa3kuA3Uj",
  "key25": "2aMwjx1tSvJyr4XQyA9aSpoUsW9arWny6GbVdCQcmaT4JiEcvmpfE171ztt8dcouaYCvn1UcS6KE3rG3rm65rAcL",
  "key26": "mKwzvRkUoEEY15hySjKgwWCmbMPPW9zr2m3a1tE4LNEbcwp34DYyKUoyCEXkHBhta7wesvLNnqSRQ2YQTWKCQXY"
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
