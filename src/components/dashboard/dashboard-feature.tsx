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
    "2rChQmSNofLkojAuYVDDpd4mCkKBiaeYhwVWWBzrcRL2cBRznG4yHGEcp9nWpqFchdv4Cqww4eBXaDvJW3VN9XS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdDqvKVSARaVYrn4DY9pCNUfwzogGKwksLsqqrCSCxwB63dt8U4C1Wc9LetoLT1yEiRyN6N9MvwtoepQSZJm3kp",
  "key1": "5LWrzkFTbqmDQvAA5NBFZ6PZdyfDXWpPLkLohJ4kTSFNMPzBX7ABNcLsTLUDvo17wFB5KiYDaRdT3yWnrSwdBuxw",
  "key2": "FdQebXdVtJ6N6JvPS5TKpkBWmubJbwdZ5VHd4ZKs5iEfy812LNLkfCtR3oq2YyRmPeWZteKfL1vhJwg3KJY2kNt",
  "key3": "4WQf1ZwzVQkwLgwNos584SqgmXb8zUTEHg1PyMPmBbiNLKJozSH4JZD3vw27fUw1BKWQhAU4jPMd3PXVtm2fgLBd",
  "key4": "2iRM2Zm5dLzmLeYHxUVfjmeQP7JSbWSQbkmHuaeighiQsPF66LjWeDydU8rp9eQ8dNeWWaYXcGkeJ6AQHhQzbZMs",
  "key5": "5bcmyaZdF3nsjWWJ5m3WMASMotFRi616z7MUXzk3aMdVvc7FBgYS5momHfGYrrPFeSVSkWk7PXq6ziC23An6SU7q",
  "key6": "4esRadudLqdQrs1cKLkUCcvGNWQDxUuBj2sTJ2bbjuRDiTukPovtirg7KkBvu6RDwe6cT8gLdG5CdQJqpXCQvjuw",
  "key7": "4euVyWFMJWEw79PZ51ib4gExoXawmh1adgNurNTC9scGQZPqMfykWsRJfNPKeRyGZ52ACUxoRZMSp2Zvd7kRNTN2",
  "key8": "2tSXLtj3oQAgTEFgv3wAeHkEVXmnaRKWPRa6VPRmn3q23wYxBwv6ToqNJhYrfwGtyAS2rparNhNWajBZPECihU2a",
  "key9": "3MLQ1ELUhRHRCfCPCEvQNZ2rimH58Tua7CAmVk5fNECoAMwX3ZRk4VRmA3GhY8o6DadQ14NfwtoZxUAYGwRA2fMN",
  "key10": "3vigtfNxSUyu4XxhTFUf9hRx3Z4JEaZLRhfsrpeVyfiGHYs1GsedVsiPtyEtAmAdVBSE5vRHVQqgffoCFSpL3qaA",
  "key11": "2XqPLjKAtU4sD3y49JuDxi47CmTjVeRtwD3VHy7fAH9bKKRTbwHP6kAu6wFVkxbWihDaVR4L9iG5ziQW8c55WAGR",
  "key12": "4ZqbrGuFqmLBorukVULVe5xLb7bA5MDrMWtf1PEMjCqPVpV7vct8FzGSoQi82MgRXouKSzyxabydDuYjiU9Yfdmh",
  "key13": "35rge7rb31zhj3tWYzkrdDSH2yJtFKtPniXonKQqssgVtm6kwa9Yv5AioJatSHYt7KPAqsHngAtFT8MgDBeezCpp",
  "key14": "3re88TNAXGFx7MkrdRj9FPuRM9jsgphH64iuzyNadn6UuL5WNQ3xQBohRA5s9TT6tXHDjK3tpwSXBv48wn6m6cAW",
  "key15": "3WWqMhDWdsrLfRvC4yBvSjM1jT9yS5H6P5FXi1n9RfEdw6EfnobsL1weD4My214K2grn6FnsMB16r1LEQhXqSppe",
  "key16": "3qvvoWM1NdgPwsRTrN83jpnnRhsp8yE1WNjNU9sXaCgxu8bBFxNZZRbe8eVuCqZuBsHh7qwvabZEs7j22N5VSqwW",
  "key17": "3wPSoDaXNtCT4JduRxb6cCtW6PQjkMNPcyryDy11zTWvFxWc5cSPKGuSTybk77U3pduj6LtEGZwNDKDZoMf35H5L",
  "key18": "4dBfKAFDWTUXxYhzgn9fAknfgmqagFoF7vyX812yQ4HBW2Kc82CH6UP7V6UzaJr5gU7ENos4kDNsFRaBbgEDrg6n",
  "key19": "6ZdjycJsnUmqTcC34SJBcDc6S9LjZ4iJ8dnaoNFfjfXAx2mS9aQAndC3aHXvFT2ZF4hi8UaexKQjuxay3YXWAVK",
  "key20": "2k6FuffxnHXpjaj8eAzR6HXKZJvriaFvSVQAYMQP6ZiaA8oPBGYaxMuqvJJpcz1BkuKiwqQgguPFqNzsVMfVU83c",
  "key21": "3Y9zeKxcexRdJC12ncUqXGMqXiaCLVp6xasC2MZ35PeDzRv4M6ze9udreBsfXQVrQGGa6qjoeavquTLHf4Tzo7rW",
  "key22": "3ep2vU5hPhqNFVNaSxoXJAVvNMo5ZFnczw4c8XH7Dv8cB2KgPSPEz9Hy1NLaCiokxfY31bAsg8Bcaiie7sXKoGQR",
  "key23": "31AqXALdHShvbvpZMUcZU6XWAu2p1DHVHRKJ9QRsyiTn7PaEELUR2jrYfr2giES4fahx8vHwHJQTbbUxn2E2mX3U",
  "key24": "5Wc3X8LshnRq9y85UEgyHBq45BSHHoUaLhsy7Lsx6ELe3NuiWBC5sri5ZPGC52Sy4Lept2pXjxgVbrWpbzRx1hzk",
  "key25": "4WJ7oENveeuW7Zm1eKg8wkhNQsnzZhKdw1f1Am1p32m8wRVVosQo6vjgtE9UdfU1GZDmztQssSDFJ2mXVkwQBysq",
  "key26": "4XcB7XYNEJGojFz7RUdQDdubAfReP5EYgBdY75SYGpkNtsrWiLgWz1eaEG8Z14gMH4AQbDqw9vTysyfpXsqjuCQ4",
  "key27": "5XUqMEuH8Tk8CT6je1JXoQotokCekKjdRbRm1XXKfJiGyw4dtKKQsgTwPUTzjhhR1BXicnENfUUQDdmKG5W5iN5d",
  "key28": "4EGFJVVo3jR1R5nrY4uHrYiDvrEd8cZtETD3PhcTSqkrhwc4oNaTEZAwYXWjJR9u9ZzpjEHxGovJKBqeDwVRGFgL",
  "key29": "2WBB9TDQqpcmQTxPqgabuwdh4ue8XGpd9952s3NgvGW8exbDk7BLpP6Wdi35HLE5xhZD2GtATe4oi7FPvSJKtHqy",
  "key30": "5CrdxP5veBNht2mjCvjJziMF99DMqzDK6h33Z4h1nfv6KjWfaV7HeA8Ebgne4NoitcUg8FkPbKEvVBmTnUqxtXTK",
  "key31": "3Lg2xRgU4kZ1UmYuVubhpEuAijdL4dmWLykRR5p6zjuizz4qMzeXHaXG4bqHAVfH4mTB1tKdR8k5xBpTddRrn8yK",
  "key32": "zr7y4d4Ct9u9tBCgBzAsn6pAFBaa5ec5CgbjovnJpXmUY9PBDuhCjZwRrCi5aKWupG7W5nYcoVTxbv64oH7qqKq",
  "key33": "42nsqMLD7sfiSfCj4W16JYatYTnbgqZWmLkYyNxRMzbVnCSpFfoXXGBAeKRPxLYALoVEKjrrVgeEMYj35s6eLnvs",
  "key34": "JGknr91J9ruQPJH41oZtJ5CmScfn2Bf8JqQU7xdaMjesvmnw1HJzcWuzCqrFygPGYKVY4CTLgpneDx5CCbNAaY7",
  "key35": "tjbxbNvXq1zGfP9e2GuiK4FTWhwvaTzuA67YZZXGvXLngWMns9Y3J2tCKwLmJLq9dQi1RenvAjspkRsfW9Gesa1",
  "key36": "R7P9zcsDBnzBaPUq7gd1xfdoWnoLAmg55t72FYrrx1SEZ22q8QQ9sQ5Z5R8N9Sd13BAuUNovoaYRtN3jbvwSvq7",
  "key37": "5nAivzRmuCK4JFw5Tia4EmrCgGnZyHRBfeexAo6ei16hJtwM72doqPow6LUpToAJSeWQ9YpYQC8LLiWVGNW4CeJy",
  "key38": "3KbpJSBR2ZQ368JjsUe2z49FvEbJaro5RL9fFztdTiu19saH88TVbLpygLgYfRhgkuVKQTroxc8fFyrAbLbyge1g",
  "key39": "3CAaMwVpjbL3LSPYNgc6JCaQeod6ez5vZw3wyxLEkREpQcnupQZNf8vUMTDRHvzoLJXx9m6fpqnWPS5BXqjuSErn",
  "key40": "n7N42bVc8T2KUq4xSND7exqfmQjZK5xqNpE8qXsAwGSGffjdDGismVkUzJVQjbVEWjnJr6UTgbg6mrXD6NxnFWH",
  "key41": "JksSMKXodTnRKFX8f7eyraQhtJ8FaKviAbZJZTTX3xNQX7bnYc2hWQk8PjzHbwHLsEjhgQ5kPMChQEqDgMpdUE8",
  "key42": "2UUbeSok7ihE12Q4DLbp4CWEGiqFCXHYb3kGGH1Ls8mCFv2o47fcg2Hyjkn8yyUgQgB79x69CDeGaiqRiE4hpwjc",
  "key43": "2CJLJWp4n3m1A3svxPZfWiahCZmpRg9Q68NqJfYVuufZEatU4AvFAESLZqVgva4yJkA2LtMpPNRJFKXWKXqHnSFm",
  "key44": "8QM1Qnuxfe2eoeTtmZAaFfC6q86V8rfKnYfs9C4dLsA8Kf2RvrRAL53dwFEUEaHMvtfP2v9Ce2NUSTCRcSci5A5",
  "key45": "31dNCDD7NXmPzpoFy5mJ8aqu97PyMJnYsPceSPPkpHF4m8gJR4xorSd9GPA8R9KWjy5ktZFLRBm42U2eA1vAwZ7E",
  "key46": "2dvee3EW1kADh2ZzEPngRibReCm2uACag79CXe8hru91DaaSxk5hyNH6GBQjB3iAYz6k9qSnrJpoyDtBBbiwbXsL",
  "key47": "5Rse8nbMsgxWSGDtaLeVPCTTUmkauaTxpqfnHy1K9S1WmKwTNZ3yMDHZtVnZzUiUkmpHNq3DxzDzh9j4PSFgn2te",
  "key48": "3yYG3d7jBUgQqpzCX3UeDMaoCqZZ3DgqAZe3ejMMBx4DwkNtQh4bTx56xWCXZJ9ubvCMbKGUXenjqATYRZbQnEBf"
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
