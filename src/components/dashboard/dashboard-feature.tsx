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
    "5bKGyavSVgfkRnsYk5oAC4WbJQyf6Aar1i6MFGzkmqY1DjFfjVH7PFBfXJ62W9JbvBS9qLoCEreCfCaS5h91DkEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xWqm9A7ZjLpHkbUhmWrb1aoTGFDFZz59qdvjYh7hr8EaSrVAogLnm9jzU8ogyEQv6ZKVgzvZ6HVT5uLnd61Xh9",
  "key1": "4hRP1ng2D6pfW9i42WpiW5LyyjPAUr1XX3qC77L8EadXrbpPG1ScYzM2R4wckN5Mxc7BfEJGJM8HPuL8taKmTgwL",
  "key2": "65hahbVj6H2bYC6TettEhbqoek7hc2nipVG8nAHW84R5RqWxXGeWNy7MBqz5eEitnqaNuEzZYT1p24g8awqfjsca",
  "key3": "sDVGLDEwjqx5j2mvAmV3wEZ4GEWYH5d16MMtTGQTTiaQRkpbjzWMFXobsgd7zP5NKgdZBuKpC4mNR7Mp7K9aahZ",
  "key4": "5zQguD3LmTcEkjSYNjN5NUJYoWuhMugWAcquen83ZEr5s9jBMRzui1NaDYhiX4T91ys3YjUmuyM3wRMgyYUYmSaG",
  "key5": "4LyZhPihpgYwrCkx5txQvfaKWvZUaSjwxmpadxMoy2TZXhZ1fJng6xrgfhKbTMthRXDC8Ashjbv9uxeJB72JKSwC",
  "key6": "3REGR4LG8Qtkq78j6NERdv8TUwyKktW885sPBvfw1UCKThivXsTmcfoyV82CiNtPwzbxfzoBKqKYb6itgzSd5gAu",
  "key7": "2tCw3ZgNZEamVAURfjJo8v1v2W17ksvj4eaHrRN1GqRVhbvo9Waq53SboW8Mz2dZfirM9Nf8CbbY2jvx4eLZmw7G",
  "key8": "292nXqXvH1cUseE1JpdYRK4Jgp1yo7kDNAprj9jN7KLnjtH614DcKBnS2dT7pTq7XJN1uNRkkA6tsJ2ShmN4kEP9",
  "key9": "4MyKk53UEZwDFTsPdGymkPtZ16uv4nDHHU8k6S8ppK47bH6zxm37kCYRcTgJgu94AbchXrxEgwR2gvYjLkU92QFW",
  "key10": "3mJAbxMTuNHd3MRrri7sEttTAP1R9BN7FefEndrzdFnuVrnBNjq1NnCrGEqjSTVDYZBYMyKjV4VvDW4NTLSNeAMB",
  "key11": "5W1Acah8hB3wWcSZUX39rBEnsFTS32s3HGtfmGxoR33iYjHrvuXkzHVerH4rPRtoCS7EcFXFcv9TQBbk1nf6Uaxs",
  "key12": "Vo6xkEAyis1ZdY9d3PMgv6Ak8yVTHHggaFWM94rszpqKveyHMtunnCSCGCuxjA2xirRQvD9em8FNYJSaTgnK6Mk",
  "key13": "3ZknLoa7pjGYhnTFTBptcyHeJKFSmyfH1nSZyXzzJ5v55VGLCAgWCHYsv1yGVZDwrzXkqXvTkx9zbndQGZwAe6Kw",
  "key14": "THPpJ7LSspNF35UcLp7baxWbKYGzwbD5yYdAVkiavw7SQspUYiZiNrgYQ2pbhS2WNAxu4BwRR5B61xjSdsBHKY1",
  "key15": "4yazboQ2qnfptsdZDw3i7QVUJx2PtiPkC7TaC18yceFsDvBsfNCvi5ZKVM7DiUEd1dPkSG7mxTeXCRxga9CP8eY5",
  "key16": "z1zqCAhec6L576RSeozG1d7mTELjMjgQ5jyRhyqNGddH5tJFxfjEa6rYM4Gc4MnQDd1xiuXuoGNyRs45axmqdUh",
  "key17": "3xJ2n3rR2L5mFUVPdEJWfAKbFQpJ4KjmnGZzWscoMoQaPyMt4E6nFwt5AawtTAZUn8dhssofoyCNS9KRtCxqr1u3",
  "key18": "RAVHEoNeabZ6PWuBUzA9kZEtwejt75dPwcvrCcCkxPrwdoBtw1od1BepS24WfEqdRUiN7MdJdqYBF1mTb9RtkH4",
  "key19": "2hAgeyKFRA8wrPA81tr4w4K4YC5eh9Ek6fUnsQkVbmnGLCsvzX62TiQmxKa6XejjrCNe8bendXjFLSY5wJfdx33Y",
  "key20": "3CRUTups6xfZ9d9RveM7f5oRgxHg1GAD9kihA93GueWvVys6MUJpEFBrYhon8BhuMNeqPoAM56bmZQQ9erm4fUVx",
  "key21": "4VzGfAbazyFvHqRzasojLGb9kFrgLBieWnZiSadnuvUMdpHNp5Tpbm3uEBrAN1LCphecsZ44kyKw6EPWwQKHDr7u",
  "key22": "4Cn7iQLdcc2v3kEqYNpZY6NbBvcCxPnsWDfxVyhydZAyNEj2sETrpY9CXhxCW9QWZFU7k1HaDMPA8X7TmGXGhM4z",
  "key23": "34rBS8qjRb1wJLXU9e5TYK4y4NoKWAh1ZLd5ykerbYv7gT627dHg4VohCsciajsXAoBRHjcPdnbE3jvDzryhtxNj",
  "key24": "2XexAT5uP46ANz3kzP5xLu6mgtLxaF4gTpX9TMVr9dtN3BSHST3eTJ11Ku9KTdBDDXcMt3FVNvGnrxi4t5Rq5WaJ",
  "key25": "2jexCYNcbcm1oct9uLY2W8f7xbeXa78ZWdgzduBuKKXJiHexBxeU4rjxiT5ki75ePMfPoqu7DpoHZ2dJ12cGDmNi",
  "key26": "5oUi5EHtZuQX6kkkJUGEp25BMBJGwvq9N2TdXoDQZBcaGXgTf6u6ovtAVXRqbEADQjMeJpZTbQYjJHWoCvAFE75E",
  "key27": "CYd2vg1EzXdp19UaxegvGXfKnQ8jRPef2Y2AVxyXHcPZoocqjAqUGt2tqyHmGFxsvFn8CVshS3z3htvZEmLwfod",
  "key28": "5PFuBhGR1w3EoH9PyMcx42d87nL4ksg9RUJ2NJYo7EVG3fQ8HCugBUtoPVh99VjwV8iN6Eo8rgoiZQZvk4CdjqJw",
  "key29": "2G9tNRFrcRfjgreUxQvzipvsECUrPWLVS5ENDMhkw4dPyRMjiuVXEDeNgKDfggfGQfjCty1pWdPAHLtZuFUJRMJL",
  "key30": "3hHBbm96ZWsrEWg4akH7GBsuvR9qw9z6civGfGn5ok8R36bxiQ6ktuhBRBvGJKmF7yULCLLev8DpZGciEyhrCij",
  "key31": "5yzeuNPojBvbEi2zoBFFu5YNe3PGSZ5SW4bBTQ3xifSTsGYSjxSxCRSiHqTFTaH37xmfZ3Aq7xgDuWEbsC4HPAr4",
  "key32": "2L5htW4xmFnEwGVxW1UhPRLpyS9d6bU5KkUHyaQ1T45w6uSjo69mUByYZ9gXAQnxAMnkUX7RBPUPNt3mBf5CQX8d",
  "key33": "5WH3pGWmosvUm7NZLJyqdHShXt7fHtoM4pqdE2KVJf6wH5wKEWVMnaSh88tEotiXUUqKxvc4tocbbQ17ft3nrSkB",
  "key34": "3GJe7b1gjvVAqLcHUjLdiaUud26vWk82Q3sSDFz4RECQEoPXz8Yb2qoBTj8Umoj4LJzTv2UgBLA9UMdmyQf9s5hs",
  "key35": "5QFFJawqcoeZ9Q5hxJETy73hZjjJu2jes3YRU8a2s42ycdzr5e1PJX6Cyv4ja79UNAx4KtasCkgzCE5ZwfhRQYjg",
  "key36": "4iLi3SCoKNHkPLDpiPpv8gZevSdpaz7Spffg7hxMu3LydZxmUwBBWuU3HUam7qThoh2EwWFQCcSsPydyX8aXPFRc",
  "key37": "2saCVPsHjMp5XtpsoRCk8WFXy39d5ettdgza3n8WNwHYtQHyXVBf5i42yG2kQM3pqFgHBDADRmqEMp5KJDTyTMdA",
  "key38": "5hExxYimBGpxcSc2hPmPisNySHgT5NYy6WWrSAPwY7E7Q3487kobW32ZtFfFzsHp2KkAxq8T3xfiBhuRzLii48kb",
  "key39": "5vwVoJTdkc22AF3X2GkqV1XkdTNy5Mwa9oRaPjPsYNKMktVPidZqFKveDouPhkkeGNjJjhrkUL6bhE8mRaTTwu6x",
  "key40": "42oEyrWguNcjv2cxGeZtrx3FchRp72SUVNGtpJyxDiuxVj8sQ9ZDRhnyHNPq1Czbfs7QHKe9MLyQ8J9tGsJg6bgn",
  "key41": "67efspeJn34Jjp58ASAAzU71Fqu7XCQnbYcy3WmR8kBURxTasbSvFv8vXU6G2NRt1wkUovoh868oZWK6YmjiUQmc",
  "key42": "PPWhFJYPpARL1UMmDUXHNmwAYTbAtLMtM9qwKt2sK5HRWb4XzauwUKG3VQeHqjx5zV2gyMqhTobU36L4rb9JMia",
  "key43": "4QxXWWRm7Xw7QZ1g8xsQ88qKqWLAM8MQc11GH9ZsNRy5DhUhowTQd7rEy1YZazAULQbk8vgUGisTxJRjf4GUYXmv",
  "key44": "34grRz19xGFFaMSkpC8JA7zGWxpNdg7jRMFvo154GvupTPyX3m1RcM1mEHLAFenwkafAsAAKyscajMSFXbpYnWDY",
  "key45": "5DLigXY4SAvu1nKijnCs2qx3zUzGDJ6ooBzftJRRuxvYj9wHMdGxdKdnuMp26YPkGVfCxDWC2CkHMgo3owceP1Uk"
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
