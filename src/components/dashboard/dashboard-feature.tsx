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
    "2BGjWys2eKHeX4AteLvbKWAtKrZYuf9sxuHPB2eMnBFCdMPcrfzcfGAUJoLZdh2wmLGx9kpKWbytVKPk5ErMtGSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pCcV2SJSaRrffGY5rNKg9rLuPDhKWXabUwK9XU3c8jzcqeZN8HZjV9iWc2SF7gHppkzhtk17DrEjA9fcFUY1XS",
  "key1": "5FhMQX9MeMU55y5A4mNWXN2QMgKKj4sMbmChheEaXzFLK9JZh21XE3W98aYvxYMGPdLvtqd6kBpoa8a1BHuJcgro",
  "key2": "3wpcGQhNcwMCvdiYvFqf5u8B7sCEvsNZ9cZokeKm8mhc2LmY4SxcPnTSa289iAqpdLSYB2o2g2tmZNMBAMAbwaZx",
  "key3": "3NJfozUiHsMmJsGjT5wbXXFXB9P99Fic22rnivVm2MQjQ6HzFf3kPUmsmiwgQiF6ZpyGnFY7SiwcNhQVAQh2ex1d",
  "key4": "4ZYuhuJ3qYFEDwzuAtkXFHvBNYbAQJtScYUm5o2SkmKwgQRHTedrrWFQkBpJ92i4vf2qukE55RVLhGqqrxVpnLbo",
  "key5": "57PoTQ93aXZGrjw4ghBrfHutEhQCWQWKeGDdiG8GXuhizsE8x8BmYukSP9ykbu7t6tkAgX8mB1JMpjMqyqq4ryHu",
  "key6": "3MtFrvep8nDdAxyc7CkAycSXZqgBtbDZdpynmZv7k8RGFL3Y3JT8EnSnpxrRdFxR48cmPub2eXpdUXzDmiRFPve1",
  "key7": "3m9aZWc3LHTbpcZ2RV1kt46qBo69CE167uArzbPgvNS6NbFyU6McwLMitGNTwtv2vXKDzsWBY1PEjCJ3YyJ8koMc",
  "key8": "2yXkyXbifzLna3XEFXRh6JhJM6AoUu9dS6B2wezrpB9bTec6ucFNZJ3JZoQnJKY5GrCVF74oMTAYWGQ1MCYyEuyz",
  "key9": "5tvoDWwhLbbEi36otRBGj1hLjPYrn7fpzhPbufBYtVxe1ZsvSYRga29VTcUueenseZxe1UPAF8XnUbzgDpDtmPeL",
  "key10": "2Yti8VBQjD5bYueGhehFvtZZJNtAfV2pVu3zJhgN7zRP6qPeyCif19D8VBaz3K83UTDViviSK12CRver7RHw5AYT",
  "key11": "3kDT89mRDKUcm696qox3KZv7cv5eNQ9CWjFBcDf8Js7FT5fkeTE4MnPCr75hF2SAdeSv1fj81V5zsPhNjGcaBBZp",
  "key12": "2j11Tc8Mvw6RDWnFMyozG3h6syLC4pZas6Aria6VS5q7re93FtV9r3iSxNqDNe8nFLhmLjertADxFnpV6y6Yj99G",
  "key13": "3hUfcmvwTeA54fbCN9xVJQH47wuK7n2SFSuTopjxkczGGsJFQcAZKgfeggaFHLf6ZjLmCdHznuRbK1XevHsof7Bg",
  "key14": "56G1Euqfz82urFwqBfZR5TZy4HzQBcqnpjnNmcLgMTVRX12UsDomvfw9768mESEmH6Ku1KfAXseT99vdQVD8aZ75",
  "key15": "2qKQY1HgLjPHniBQeATuVyNTd5hWQpVmpL9q3t16Sa9ZNJhVWqyn2QWv1QF5PmSjT9btkngjgkAaiJNg5n8ASTLT",
  "key16": "f2BdT7gAJtYm4kn155g7ziTK1cJkaHVUBjr3aknJ1jLPWhxUu663pjDDCxRQqQiWhvMdRL7dqiQK2CWzot1MD5u",
  "key17": "4Az7rfWiR6Cx2ifNMCrqA8ZSdg3WWc9ZuDbpaSVSTufKHPMFbAX1MQ8PMXuHV6sJRrQF2a11stEkkCQbaHgXtRGZ",
  "key18": "7pcPvYxroUSVYEFiEhf6bEHZiJQx1mop9zZK9R98uXXFmtwSMmhVURcT81ykgu5yGvh7GwTNPL5wmoWWBxax4zD",
  "key19": "vTDuWCxbB5b7uce8Q5tEMcFPf69oxCF51jpYVf1Ej7bNiLDC9Fyz1bpsn91s91uRQktKFHfTJmuefxSmP7PtCJf",
  "key20": "4oKiwyPgDs727R2Cou73ZnRAmdxGZ1YMtcsRvRkRrpCETPQ21edQ1Kqz4S6xUuEyzdEXJhVcMypmtFaw2o2B1FEy",
  "key21": "363Y42DF7AJkRnTgvE2KMrVpuLmB6sDJU5rxkiypV4pV8tFKnFpZyQZcRuzHxuiLWTQMfr5B3qqCo5Pt3zdTPeYo",
  "key22": "4MbkqmuE2AYPSuRaMxBywyWx1SBEBucoKbKVHHFWhhowkPoKSdP8EN6QTuxU3LdB6BRRu91o5NZN7VzPVuVMLvbt",
  "key23": "2JjcisNJAHgtyXDD4vG23f296puqjjmLHWiwyDephr7jrhqjczvrFSSkpkNtWSUSNzoUTa6Ei7nZwWp4a3P2HWec",
  "key24": "2sqh3dkLLCirGQurgGRGherDUzxGbm5Soj6LYFAEkmCRmGpfFoecs3kYBA74TYZBajKbLHsxWkN3JbJhinBfZsb",
  "key25": "34UE53grirHn9fZfeBtYYFwPSbG4eRWFTVDBfz2o4ubmPwQgMvC4h7gYE7rQmpECpV6kxg1UJRjMcqbH5YAXvdhJ",
  "key26": "5bG2ksQrFX13hRrwRQ83JvKY2vdm9rGyJ1CvUtNCsaQ1DwEkUgxuYGLTixxdP1Twzhjkw6gQsyu2EFGxr4AmMeVG",
  "key27": "xcH5WDFSyQRrdf77U3hxG9yJSfBUJ6e567tGZ9QcncpB6XbiyEh3viuWC1Bd76eyPwqwLg5zvgLde887dyRUjdP",
  "key28": "3xLKed1RsTigTmR9n2gEwSyziqFt8Au3iDQGU9etQt9BpMsE1HfLkeQP3KffFGsinB3MTcyvZw3rUjKfsrzGwtYL",
  "key29": "3Wsn4ziQaqAFU6o6CqGXxxub79utb2uZG98h5fhfHUSBYA9uxrZEYC3U8K5AvdDEWxEjRMSgTNtEjmKKxwYD9bNk",
  "key30": "3F52Yty5giwPd9Q8XWh7xEM7BbVGkfVEqxT62dL7GMRTRRUzBSNj9t7ZAt5ZmDGGaL7sfsaVELJrHeqt1U527Jub"
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
