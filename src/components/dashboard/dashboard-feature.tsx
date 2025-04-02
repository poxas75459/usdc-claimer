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
    "AR4xTZLFKiA7SGuKSii1aUjsEAjrYdzi7ecDv6QESKzEW9vXmwZtoUpbQF7dp1bQkDfuXnYznLKbHsChRc8m2WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qptk3ayhi21DeKjZHMmm3MgLsh82BJQqW23XN9su66ukSnvt5ZUb7CtBP9eLkTv9m2VrvrcL9heuzStiJch9Zk7",
  "key1": "3wMMMydabyCbe4vMuLdxTDXdZ5ni9LL5azX6ZxGYFMJsj9R3okpRoh2LaMGnnjHdGDJEvmz53mu89FB3G6BnqW8z",
  "key2": "JyvugNf8e4SLqw7Z7KcnkFMkzdzjYe88XsJiW3gyPTH1sNVSTH3ETd7UKtHuSi4nkaboSu42izENtioUkCCuwd5",
  "key3": "3h2VbZMTqHpo8qHfeDK7J9yhTkNbVcgFLg1dtgzQn7r3G43HZCG8nNrwPWfeqrtXWCUpeVesWciEjhwTnA31dvhJ",
  "key4": "2UMRQbS2J9uduNsK98jpHM5krWrPEZStZt2niZ5LGKxPjmG64yzJaApfwXuZbkdqwmBaGd98PH93zk9qKsN8KFMa",
  "key5": "4WY9sEeBPeQDn5zRvtbapzer6J8yfCmsdUHkK8pRJJRBZvxxNNrLJ7Wq18AeLhgTU9ETESizmqg6EAG3EdrLaRNQ",
  "key6": "49oHgQLA9WVcFJq3ysnsNXHd2XZRSw7GAWw4mJNeAJ4d2F2EDTQVaMkF4C8wJZ14bjxSzKhVYQKcgyoU526db7PG",
  "key7": "2aVmwzoh5wRu7idGxyzjmSBmk7jMdKeNyersQGEUJthkmmvTCzJ4Kpc3XUsNV7ZPnMMdCzUU1dj3rDchYaraBXjv",
  "key8": "2CB5VVjbtRbQ5Eu2PknqvvXc6HbF9TTzWbmCWTwSgTqmZisfsjeXZQ2KFM3WSKLsFLKr2sNr6rJxQZMWG3A4HzPg",
  "key9": "3pL7GhnUH4QFWcL65TWbd8hcHTWscMRVL2qTwpCbjpaHHy6QXrd9XUzFHRuZ3mpdGPjptsYovCnBw4DCXziXYZC2",
  "key10": "3MNF8FBAsAJhxXshiLD838zpQFqJ5eDbaXJv9CWVVrii5X7FtfZUNyiYbpjptFvbSgJfkSZ73duadpNdpahnrMJ5",
  "key11": "3JFqeBxAwRgz7mQQYuiKL586fGEFMmeEgeCrYMZMwN8zfLPjek9myLJd2EYH5td4qnPmtLcUkXYEA2qWvESeTAgk",
  "key12": "2JCaSRin1tHAUgWy8tZX9ZUGdATiPfDis6M6pjEpXRsECud7rygvjPqMXk7Zhcy6h91o9VtHWLwgatzoK9JeJabn",
  "key13": "wJXf52N2BsbzTXy1H8saWrW2ibrcQrzzWfvw23NwQkgvbZegBAquscCT7tAbitPEDyAncBfTCzaFa6Sez9u51E7",
  "key14": "bcYJATxvSZ1YWpPohXxTRShVXLcNzptwxchrhniGUyNMLxdE3C4ynteqtsxT1ExDaEZBzW949osiUjeQYXW52XN",
  "key15": "rYPDdV4AzjxG4XmqLQqASrux6mT3QM2dV3aXRCRSZvCD7ejyXfWpN7rg4d1VzBy8BMAdQt5V6Jd85zukHTpsfHM",
  "key16": "5fhLTaZPU5bUW77LcydcgHjwyWDJt3zqEsXFVvpfXr7QBXfewc8CMPjFEkWNWcbdqU8j2c7uVWbbbjf7EVxix9EL",
  "key17": "5rRzMqjqMCUMPEkxUyPj92pzAnwPGPDZtETrBPNZSm15LfigHtsKLPKQ4zGwTXtFe6Qq8A85oHmJyHprQWeTF4Yv",
  "key18": "3J5vxVggVeY7yixZVEfcKfuihhus2rrzjyu3o5d3zio5RAoTcrTfyxvDW3CihYHmFT7HE1HafyzjEyyt26sYqtHa",
  "key19": "tqLnGQWAPAA6A6EFmugiR9XF2GsvMLEGyacdTeVVJthRyRWRNjomYtB1t2pRKyineN6phxhZfgXGtWUjGxoLQQk",
  "key20": "3n6cacdePjqmMHhGgp56G3jCuL94uF88VRPTAbY8xzE9sppMf1MJQwyit61H9mSzB3P2mfj2s1JxSPgNLLFLE4y4",
  "key21": "2NzU63Uee8xb6NWagA49k25KwRFWZd5VMvVyBrFueJ7ebg63nbs7E7XDEQRBu3Sy6rsSKzPDaCDc8jmyaU55tghy",
  "key22": "5zCwLrPNEABPNgn4anLzSGhA4sXDHS9edehU94MB5KgP5nvysww7CqYULAD2n8GV4EpYW96ewsNerxtXiNh2CWDq",
  "key23": "4AUAUx1MFfCooEKoWxNqMKZEUdaYzrP37mUNyK2zyniWwaDi2rB4UJ9rC9pLTRosSMAC5ynuGFoDFpbrgqSWTAbS",
  "key24": "44oMH128Pvb64aMww3o2FuxrmUf9qQNWVNcict5cEEwcknJVXjCNqziopmEXNrMT8VZiNgqUkELHrK9SaGZ1zDWQ",
  "key25": "21P284RLjNQ5M5GBdYpKu9WgQ3eMaXiYrVosRch4eXMrEu9nZwodKbo69eZfGq1fYFeQJDTQ54VBgYW7bbNzXyPV",
  "key26": "a61ZDQspCY2D3BiBy4FfMdoSg8zPRetThMywAXjsGVn1ov1StSAikBkR5XT9JVK2SmcVaFWPX74m1CV4iEU95FR",
  "key27": "2aTE7WGfQUfGZUsLccPjCYftFWu4x5dCgC8rU6vYyU6ERyJAbrgHvzjVbnjXiEaAEBQsHMz79zk59a6VBqtu9dwH",
  "key28": "2fHGm42d15GZPBTg2iSJPWkRL4yvTQbD5aK2hKp8uhxCZAuBcrDPNcrmGfEQxwETkBeuZLhQKDP2b5bhixYkLo2i",
  "key29": "2PKCbp5kFWv2Xwr8JqCPXhRRqqB2vaH6f9TkUBfADd6UKxnPzBDU2jvUr9pfpQN4FGbsN9aXsT6FKjnEpN99TdRq",
  "key30": "29yYRrkyw5aYrpE7swmCr6CoUgagTyCHZW7inRZ8JCS5wDc4txPqU7AoLkQPZ1FSg3UiR6nfhnQqUozm7VHaGrEa",
  "key31": "4mHeSGujyzERtMMgXfb6F6dB8u57LHg4yphShLpCk8ggd4SXTo8Vreocygmx9gugq6J5C468rDwMDYdaDVh6B5tb",
  "key32": "48KpCYC5tGQPPGDEBozaSqhdmtHS1CA1P6BrYGq1rqsE95ToQtp4GCUgiGLE2e7ZTeavJjQxdkcs3zwoC3t5gYhs",
  "key33": "3iXE8re3EnHnztENmUBynn1TeV5bmLXDrhZkRAQejAdxKj1B6NcSTtApctKpUbzDLEd5ZoDGcUrCtDWC96ZyBk8p",
  "key34": "5BXKAjx7B5saCrrt4wyf5N7z2M4WndMNxrVJPqbfsejtbmpKqdCjMSW7pWyY6V8Lpztz8LM15pBZ57YgyiGWjvbd",
  "key35": "36RnG6rNmYetkdKQEGLh8q5w9ps8i8RstUUTKhZ2T7Lg6qxDg6dv9ee2jJTawt9WX3zgHUr3C7Cg1ZaznoFBcPRu",
  "key36": "5d7bN1vQ6tkmwdeohJHGGMSWd3dFpRsfhDRkFYCEiTw81esjFVBagES4pthyHyYRgZmUCCAhdt8rGmsPcUTozMnA",
  "key37": "31L5tY8zcknrB5nBrLviofssqYMNsYbYaK3zSZqGFBoxdUxXQri2bMRB53S3pn5hQcHA3SWmi1StwEPdMaiukVGF",
  "key38": "485byvayBgUWmn6ubMyhACoxFN1qSsbj59binnPnGg6q7CDXK8qtF2ebZTW7kjSQBjyKbM8onFLgaiQWv4Di2ftZ",
  "key39": "P8rpPRqJgpPHX5nARvXeaUCcZXuDnxaMY6b3LwVngJRkwwSFugUjqWhswcTDm7kR4pQK1QYs9oosiLQ7uoFgHBL"
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
