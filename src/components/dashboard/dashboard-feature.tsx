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
    "456tX5DPQwhQ6AwppFzzaPJ9Uz8Ke5PT8PGfkzgTcbxasm3MRyj6YNysNZNW5R1RnBEfvoGT6DNwHJh9Kd33RaJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoYGaC6TQPkCJcB2M2Neu656qmHcHwLPouqiUewEiGxUvTQZbmdyvL34Zh7EC9F2ss6BXVJaVJwvZQsf2W2cE4Q",
  "key1": "2gP2jQ4PF6PbupMhb3RvFf3cvaQ7FVQ6FGZm7SA2Pkiq5JdmcAR2scdbtnVEwBLBe1KuD7KVLpXtDW5TwjJ6QBxK",
  "key2": "2nioxPSNdaHg5utNCJ6PDbQeZDB2tQnixFkBz4Px4ULa2GKYcgr7ZC7qrMcL1ZDJ8wvw5oJi9znAcSgGWHZnbzUG",
  "key3": "5ajF9QMkDBCmwGZbwvPeabmkfE8Cijymaj4ZhXdbrtGoNWTEPVzrJrinNQsEU6ko6R65Mrof9Xax5p755c2hPiwZ",
  "key4": "3u5EJJjWZadSVvB7r35kqHiuj9RSrwsAG72VNQrZDfCsZAdVY2haHrrZynpriJfAmTCNuAKqnjcpFYibLAaBxBq6",
  "key5": "4Qs6RhT77pfd7Q2WisjBea5qFk6CxdUUWJszfUYBHWk3dqPDTMRkSNoEzu5oRenpiUqxbC94FWBirkeRM71VfPTw",
  "key6": "2sh29AiDgkFd7KUJynb6gjs1Z2s6gG6DxK3ac9rCrD6RrhC7wFRR7XWgF6fYm2JBMyNzpLGxGioRcShhGNfTGRhG",
  "key7": "5xyY7KR2kERAuEGSicTxGiKkm8zaBx8gJ8T4S28YPWko4ttvf7yvbfJpmoHu6oeNkXjwvAzo1Gne18UC6msHjbH4",
  "key8": "3xVwT47bYQXS4vCjPrPtcggRHKSfTiL7YDaDWd3xDkBsThjhsbT9oZH2pqwDHJ7FC9ia5LfwQekF4HEFEVtqF9D4",
  "key9": "4VDCTi4agtWWHTG3cyf15DMDmnG3jLnixYmxs5chHTi8ZdD6EAzhrEBb68GaFJDSWh6NqLJW1u6PS14FoJSRFb5U",
  "key10": "qZCzhTEHbyk6RxAckkMtubAag4KjW4NPCxZ9mKYT32qP5zzvRtP6Hr7Urjf9gNQihnUPtSBpLeEJUTaiPoZJSNt",
  "key11": "21T5U5x6iMerUP7dQXyVTbDKioN6SMVVNEEysTEEd7s7XR7uX2zYYcQVCWmo51ieRJrbpgS38f4GGDPbmfwgiKmL",
  "key12": "4UadiQuNAT5xngvVpcMC47LyWLfHmWPbBbzk2KcADZvEbr86sXthDTGYi1fuomp7G8qXHEwCunP4q9zCL2xgXTQj",
  "key13": "3NZFAh89m8SYLtNbMcL4X3xTPTMHtRZdcjx7B2ztvMS8VNFpjqKaUyRCsoocPoFj5WLMqvPeQVCT7gC4KfNxs4Kh",
  "key14": "zGiYhRCnFYhNmKHsJPWTze6B2i4H1Whz4Tr6mGQziyBzQmjHWQGHWdAdRGz9bgtRG96wJcj63dB3WrveXq9fuha",
  "key15": "42wn13cxyZxf52g5h2VR7DrcTh52DCkf8S63i8cd9KGcLFR85WSRyb3DnhQEZyFzg9pWT5FMYQr7BcHyfYjjoCSi",
  "key16": "3qC1yRsPLK7cBR5EiqZ8RUG6Aw3otbQ7UBAezJg6mGnT75sn287EviBtVyACh53Dx9pNQawgT1snkicHhQWfNKit",
  "key17": "6rDWP9HXuHLk28W2HwHnyKsGenz5MhdZiY7DKsdbWCC8tpYRoYrguSrqRLeAdKrfVBkGeo2jKX2GSZzG5a7iqgm",
  "key18": "2A5tZoDz4Uq43zN2xJYdQu196U71JVCiWqCt8DLvQjSSkSBMpQUXqicuXjx2B1fKTMTZ5yypsB9YhKD5asFL23q8",
  "key19": "3G17kvMS2F4f3gQ6K778EALFFezj8ux8H7S1cnsJfjCJXrpbVNSQKEW2KkdwaZDRRuhN2wzSgnjLasmiZfF4uK6T",
  "key20": "331WDMRNsPqiR4YmRdVExpKu29badSFbFX4REsJxWZBDRwiewHxLx1K5ud24P9jwatu7pimjdeSQuvVz5bLxvUFF",
  "key21": "3UvrgWs4kr4kWU1nCF9dah7jkQQiv9v5Z5MYnrkPXXSpExiodz7NxSuv61gVWR8MSF37B5yf2x1FjRuS38VDMMHw",
  "key22": "4yMjPW7SwqxkEL8tuznouUeVLAxqvyhavEBC1yFSNurWV6tGVb6aj1KnwLobhGgckvA731CTgxiqbDk8JZkq6kFL",
  "key23": "2ABorHSapBN4kVvkqgAhjiciZuDpNZd6ChqbLRhfFvqsQrtwZL58oLCkZnp95QEaCGsXvDNF8iuaMWSY2hEk3vWZ",
  "key24": "DXDsDrznTfnnEPwHWaZVtFi2Lhde4bu1o59eU5HR2jyRJqz9RjDtZkoyQ2Gf56o386mim2cXezwAfG831sBpgge",
  "key25": "5kgYuTizgBEoVZypMYA7i3fFCUX6HYKbQuvptUnEEAR7QKKH1583uzenBwjT2vZu8hjnRiatNwKw5rTsWssqS1ri",
  "key26": "4aknT37oFFnMWkJQexSCZwgguwrGh5Ek2uW5KBEQzamuGJafBj5UzbzkmSu3aLGpJNrraWwPjmm1srm6VC4CRCmP",
  "key27": "5Qw9P5q4t3F7yadSGdLgNTf2PXRCefnnVibW6SaB1H85dKAFycdjN7AV5uj3PmQwEbD5D79NuvH1HqHtMNVDQdGs",
  "key28": "5GBZoY55e5crtQquortuk6KZD7eX69WQXopD65UFQf3K9S7Dyj69rp5ExZSae6WUxwNq6eDnd3Ax5htiZAz3ttdF",
  "key29": "nKoknqBDRcZP9VagRtz2KvRVMVnyMFqZocTBYmacwT97bxC29kCEPZutUsq26RsFbkwwoaFxYVax8gyRBuTP13b",
  "key30": "23GQaENkigH2ULadAdHodNECXLA4BaBDRY8Zbbg4ez9dfE8uBSW1yjk8NjTgFeNwe4voy3wvKEdidn8LaPEH26Hz",
  "key31": "3vBzUPAxUSeUC7Cz3WXbmDMmeb5vTe9hzA7WXEAKDBBuYJbKR22D1AM3wjYem7oN5hb2iTA8ctseoKLCUC1snn7E",
  "key32": "4THFgHKV4Tfc39REyb7poYHRpBeiBpSrKNhnwAPYECTvgo3SYgAw9wmv3KnhcJKiWNg9swSmLQVvm86M4wTDChyf",
  "key33": "2a1Z8mT57o5ire37EjmYuaa5K58arfqavc7MWfMVEZUwXo4kLw2vpxL9K4ieUWLAhKkQHWTfn2cuY8M7CjG4BkHu",
  "key34": "29h5UzcXbTbPeRcXpgPeymrF2miCA2qspmqfiD8jgE6LqJqiDSgyo6Aihkdw9WrVzGMJr7eJ816BTNPRLEpJvjWb",
  "key35": "2kRK7W9S9DFy3fYrp19npDADE2zU2Tn8xiFLS2LKCGKRADGJRH7RXR856cSvT7KZQ5uLUzdKHZ1xu334WxU4qAUe",
  "key36": "Z9xtm7GaJWxtzchZR2wKNEee68m2AgFDyFLnmyhCX2QBJu6v6m5ZHdZkgKjf7m87hoPZcnEVmzo4HZBjxunqWwL",
  "key37": "zHsWF3RoSUES3BUww6z72nkxprjx69S9VSLdoTwqrR359hS8UAfuLEAFomPGA2w75mo39oTw7ELVPjsY4ybZKap",
  "key38": "CcwGKeRHmmzJRqyfr7ANjvXV7S1VQzkHEx9vqZvdtGX8JURisMNZmZWkpeBh28i1kkhtYBpWqvufzQWNgeNqvnp",
  "key39": "2C1r5864oiTpgTnYCiFHiVLKX26y6D9BQZ8H5NjV1Gf7dGEJTjGAtTRzTYbaaPjSqE3k7o7kWUVrbK9TRtLXvfhV",
  "key40": "3czJxkuo8cvd8S9pjoHhEU8BJhVgDVAGaCSYWufdwdt3oaNp1CpBVGqjw379qsgwejraFGmtKYUNoYRmeuMsFVQA",
  "key41": "4E9eYMJe87zKQPuqBUez5T6e2kdekdaAvKgvmkDMFS8uz8bSG3dpRDDh7o4T3yQ51HJWBHa2CLeytmv4tsUaeYey"
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
