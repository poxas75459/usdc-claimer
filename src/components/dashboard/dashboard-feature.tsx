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
    "5M5FjkfdE2X1HNZWj5Zx4egMJfPP46Va5X3LioXy1RWwmNRhCaUiKqK9EjzvBvKVJ3VfnFv4TAnyDQNtXGeQWDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQyM4TCA9eRaoqQ5zutEzgnXnsLfnqmZV58jz7qafMPnrq4h3W21aeEJLwRnxyQHxt7gSdNG9MFwQXxZjiSoAUF",
  "key1": "2wrF78NfP9A5Xq8dQrzwxontsq711wBqUtVv96q2zXx3nw9KbvUf1WPDoo56K44oU9spAqJGumosAKWqfVXPfmqP",
  "key2": "3pyo7d3zzVWcRNYwxeDW76Ydv55Mcj28Qm1E9iVqW9Ch9BWFiNAsjw2ixJH3L68MFshfcPw3dVxLapnRtPRgUmxy",
  "key3": "4rv6qFLQv2DiTyaW8LNZfo2iiCQVLWExCnsc638h1phtUnK9gU9Vgo5ZuCf4e3tqR1RMvAjrHwFRiJ38xnFSdhBp",
  "key4": "6Vz92D87qhY13B4zAtyroFrT1AMKWDwfxKr9Ttxt7uog6RTJAeUShD8UXKBjs1iG8bvqYmZPUfXRkFNuw6wyxtm",
  "key5": "2o2dE5Yi31B7Z6JEchEZwgYV79cpYpswubZXyXpQ6AYaFXimRGrM24EZpwA86CgdvaMed2ooXRptH8jAQcwwwdqS",
  "key6": "LeDdUy7PmSscf2t76iXxp7RGusxfyygf3cVkZSSB2n2nAsB9iR6gMrryqhXTt3HNKS6GrA4fHFqhABvLr7QL2aG",
  "key7": "FXBYCMmSNaj5FzGdKyYUPJjXmkW8SMBKsrt3j3uupwUGgBJ6WUcw4QhRC9ZnWYdhoAzPHofj1ksjo8zq9ouJR7j",
  "key8": "5MR2DX2u9Cxb4zJiRDSk8mkmM83yPbssGRvftSXy86jMir6fJ44W36fc92TFWfbcYLfyN835owDNJ9CuJY9EjqpF",
  "key9": "3M1EfTBk8J6PFYo3xNazPTPhbFfic17PYDP3VBdgW5eBk1CiSvJsYJuVg7cFZ9GPTj6Ms4maXgRLL5wyFnUQz9Aj",
  "key10": "2z9wdTExkKhkhPwohN2Yg5St7HikiwCpTGSSvXUZVnJ7V6vFNd3oW4PWuAN2YysLxVVbEzVK3M74xtMXV2THSgWx",
  "key11": "4ZQ76vBPYBmB84xaeXko63gPEtEPZwPrW9nFLK6w6nUvrPrexui9jLGza7k9xt98VmBUeUGZEpcXz2prH1ozCKSH",
  "key12": "3bWrBxjZ1oSbR7aAkqtyahH7e7433WDgN74yAK9ybuQYEHKNAgaF5KFe8Sb2bmT3T8jwYirg6ZHTQ4SRU2hiX1vt",
  "key13": "2DA8HtLVZM4eB85ditVQx7Ad34wNbXaUNymcnaKv8sVjGQe5NCUGwZuBe2MtAkgvBhbiqpNtLALVDxNEUfhnMkVD",
  "key14": "3umvQfa8uM7i2CPCpXzskBbbgkKtrARKDxzaAzEkSzkwr5HUCjLY2FiBQGdScd8SF1WCRDwASWV8mERhimAGxHkE",
  "key15": "4rHEzXJwHSJFkEx2U9D3L4wwEn5F6E66ivDwbFZi6is6TKL52mA1zjBbk3S7GEryudhcDzyksdzTG8JHNZsEiFEQ",
  "key16": "3PYLoVkoB35s8MFwx5KifFfE3NbDc8nbmTWDgSpgDTGdXtvkfuAYrG8ABW2ep4hrSae4sbbuTuHmkR9txr5a3hDT",
  "key17": "5DepjVfw3f6hJRNHN2EQ8CbetoqoyypwT5Py2xqAXBFUJRi7woDHSSWdiBK9fhNuFkycGohAcQHsrd1VjR7c4EjS",
  "key18": "5xfmWiUXQPMh8jVW6Q9QGeRaYdhwErj9nvTUB8raSgagWhZptPTKX8sERBaEr1j94cTGYp848nD3MHJLyLicvam8",
  "key19": "o2LjyeVXTkGMgAWpdd9yxBzZ5iaF9x2b9u92B5KyMJnkXN35ez1MnSxwCmTUUm96MyUq835viFpoaRgw93B8vCi",
  "key20": "4Mz527JRqLuuJmTURwAVXcvaeC3jprA9kh4YKyAEqqbELMXikxHPoarr2yUkQEWVCA7Mj8YdYk3oYeANuVvCzgfj",
  "key21": "Q1JG6j4yWCrsoXEAfwX7sq4mANC1RB7ri5LkVugL3nGd3aLZQrG6vwdzxLw2xCvJPJHCrtaEHzVNkVDovsYM2S1",
  "key22": "5jz5y6umwshasusxQrekCm7HYnngnmLKMrpTAxtsh3CFVuzof1VrwQzh4AVciktGvX3UtZNy2He6cLgWfDQGN6T2",
  "key23": "5GksRyFQexUhRQJr5KwhRQmtpyNevfRiy4WY15chqEFvGKQbaMiSzDyThAEqt4Goj7YDmEPrjcrj4eEwf93yauxt",
  "key24": "5pEoBKMWh3qN3XoQufXCF1DLouiEKK4ABcoDBTBJvPm8EWSi2fjL6b4qLKRBFCgWavpNJGcie7H7fJ1UDqDsqN4N",
  "key25": "rcakRUVprbzKXeXoktzh4Cnq7v2Xcq2tdFrRxLkudTTG1W9kBFpSZiMkhehLGRyREY8K2mG4m7o7Zvdb4QoTHEA",
  "key26": "66G7Kri4wsSFeA5gZYNm2ZMVRJneW4WYbabBJf5kiYGwD4HGQtEwUmYR81ZAoykATAKx7bFJ6jcAnycRP7ugC92S",
  "key27": "SUaJG7EJZW5JURjREuNW4WPPznhwMbEhxFk1Czx5wePinWVq2fkxsyov6Q6zBR5xDG2AC6F4Vhg7KrkxCL3k2aW",
  "key28": "Y1BmiYXCQnS8irXXZRZ41WNtgZghrvkmfRNZh8zJv9AGv45SMATnoYPmCNx3qoYz6AWbc1XrJv1Kb7PRykFJQBd",
  "key29": "4xPFk4tG2Pmd8neAU9r72FTUKGr19iGNWsmKuB4NEXr9LWQnWDQ8tYbyw145xUPXwf2fpZdndMS7kg8JxxHkcnzW",
  "key30": "5Y75zLWmmnTBw6VLtaykVDXFqQtkksaRjEJutf7ZsDDts5kcFbjSuQdSekNqJQFExQbHcpymuxvrnRkzn1fFEYt1",
  "key31": "2BkKZ9FkfchTkwWTFdpH7ESZ2Q7UfabSbwU9fRLFpNZh7AT7SqZyW8Zu7wzBT626RsMh3AzwcA1ahLkeXeWcTLmN",
  "key32": "3rGghBXmHe6nt7Jg9azvxbykBLtkag78rtoNFVYgqd2WkfdLXVb6LsYPiHvCqg5MXZfMwRY88L7FVFbXcoaA3GPu"
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
