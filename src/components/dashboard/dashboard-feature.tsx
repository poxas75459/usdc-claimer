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
    "4NyRSPeznngWaeGrLAVEZeR3TfYZx8Yqs4yHwQrZz6Fdk7jpaRdwYh7TvV8Vf1y1AqPAMw1EmcZzK6oDPDSfs4io"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRhXLBMUeGgXsh6K9TDyJ8TA3SgJgWxcXLhzvyyBvvv5jh6YKMLwQwKrW1ysBMYZdcVX8TYuukwLhCEhKfxtPqP",
  "key1": "3PV3meAnTS6RGRHqu7ZnxmoXtazUDd4dWxwe7SpKoYVfwpFNPwgXcVrfHbUX7NsxWEN6azxj1dPFPQvLDThcda3o",
  "key2": "3JRCFHwGLhvWJe9ueQ4v5PmJdvAKPvcTHoYr3mMJAypfvQCYWu22VVRg5eHYVeECu7qsKTAyJwshtNwva2FR8edt",
  "key3": "2xjhfuNGqUgqe97A9vDiUe6i5K4EzSvGQ3H6QB42vq65xi1dk3tTDoeaXchv3qZzLrAagoYumtxVk1L3qZ8F2Qjt",
  "key4": "5XsjmVbpCQEMvZGYzCydWaX7orsherSfrvW9eyrgTxN9jA7dbkGXGs6FHSFreRsvgHR2zkkoZhB1J7Rc3iiRPHd3",
  "key5": "3jtzdE4wob1JViiy9AJNqodaQHL42KNmkRurLk97saD4ij8JGU3AfqJFNCQ3GiRdPWKdfkA5YirKpYs2ys9ZCmst",
  "key6": "AzNhHhKXHzxgFJax2AzMmFoV2sQXyxy3AmHkLa5jHSqUvxnsBo6UkjgFFTzJ1WSsBD5xf4nJQDW58MjSmBBnnsW",
  "key7": "2NmQJarDrTCvtkBkxT1xysgCUqPofPs5wYnBjxPJJBNM5QNdQHzi6htvQnXG4ZciVK6nJhoNc95Mb1fPbRjbHvWc",
  "key8": "3Hn2gqkwwZ65cfUA9DetVm1vDGrYXF7y2nEh1a5Ce7nGLnDZ91HokaQMfZNcQ8CYYpbJcJbWz1yp9NZ9nrtz1wNJ",
  "key9": "5MbrVhCasfTxstRnzGesTr1KXAYbN3UyLaiom5WsMrFak5WZLxqKZtXMnM1BNscVzerT9RzvVymERG6UpKCcmA6Y",
  "key10": "2FfbrzQz6Tk4DHhiD6TA6GeqNjKsGgUfpfeVNvm3JoXBfhkYCj3oWYrVkrThbViVbnKce8Xqh9TjCD71vYbFXdA6",
  "key11": "3FSrD6y2g78idJW2oHQFCRAJgvhucmzosBCurXoDKvfGjQ7rY4q1ojjx1vuskWxXZEzPz9WBLiUywXDsTyFmrwEP",
  "key12": "5Se1DSNqu8NzXc5vuKtwWFD2QhycoMd7DXWGuvhr3UjB57hR1FMSrkvhMy5yYP97CZismUqa9vsWDAgML5317sTT",
  "key13": "5YhReRYSScjpPFVLdoX87nkEJQPjuVrpUhMQGFe2RUuAMekdNvb1WA2Q4vzAb1xDjbJbHLY7PrSs9CRwWPutv3H1",
  "key14": "4ondNh333VrF6JxqaMnWp9Soc5x8we84KLHsiHbHyqbWLTJsWZA71R5JzjHhdrtCFh2eTjF1roth8YdBtNup62TY",
  "key15": "2ScjMqyq1ZFLp6x6zDrjdAekdQWBUMieV2rcYDy2KaizyiABXgwo1qHVM6CfQq9eF9yvFHaPnnC5WiMJgiEKKztx",
  "key16": "4z3giLX1uWFHMipLZmfMAyXZuT32MketcL8jgfLpdLwQ7EgoFdkeYzKMBtXzCzPecseEpHL1ggLZrDbXfwsVpoKa",
  "key17": "2XX5szP1Xf9cSBYigAn3nzaGz5mJo8ghhQ3tBoaA9E4otUa9yYZjMCHB1QKBxRyxPAz5anFq3DE2ZsmmzpjV6Qtv",
  "key18": "4tKHnVgzZqTcLHmub8R1gcAdyLtpnLdDU5nsWGHZLKSrErF8DDcfdLSbF34w5wD5Pr7nnc9gFbAee6PhVkq9fW2u",
  "key19": "3airY4K57QHJftfTg5M54WcDx4KtaDEEM9y5W12fybZg8STpxxHuRy4Lg8webr67xEoxmiEnVF77WuhV3YfMffiG",
  "key20": "5a5eMdnCrEGZxhi3JXrDxhJg8sxJjop3E3YFwvg2sU8bBEi9UsXdzse2ucpSA12wZSCk8ueNd8xYhUG7Ezq6tc8m",
  "key21": "43fph3TuKMY3VyrZvKGMrsp69tUvs1zxpqCMgQzjSLsXAJJqUgavZNKwqVcYJ6RquwG559BWsrj8HJbV6C5sKD3H",
  "key22": "27RgtokErZUge6fkFWNXbvvKjv9TbWf3hMdWQHpSwot8eVuKy1svqrW6hhrN8LwXLuKDkiZxBcmKJy6wBs6DRg74",
  "key23": "5zWhz1o79vofeY33JgpjGsGSED5DtQrQonLNUG9JLdhqEL868GJU5Wo2Ba28ZnzJPGgfD3zuw6ArFe3EtQ5FtaFb",
  "key24": "2id86K6ue5ecXZr82m2YBRgXoyCBSs6WDPPRL7qvgJwq7vRMsskfepaPW87w9Ny5cJbg3t3wrkwfZFWYP7vwgsXc",
  "key25": "2Gyrp7UUqd4EUtRBEcfL3afR9bfHu2coXWgKYkALxCcQGVW8Q5sPGVsy1nnKeWbX58PngTopUvNkVwbzCmreWffQ",
  "key26": "4MY8pehSWEcfvTKd1R9kJtb6HiRys7h5P2ad1649uiibpSWE1ZWeUAwEyvoTftJ8mYBr1bc1ez5kjYcdgiGtwXBZ",
  "key27": "2b7E3ykyhDJ36Qi2fRC19cFFaE5vTRvJkCYD2yH82V5mmrEuCJK1g83UD5jCRC6K8qo7qFYC4hJfy9pvow6suUZX",
  "key28": "2sr2j6q6UoZJFnMZ3DsV5s5kem5pz5ERpQgJwj7zRcS7f8medopGwzVMwEXtud1T7XTyJ8nkrwvTYPDiDixdHASV",
  "key29": "4nhufpmZavACDFMXfV89Q5eTJa1DCFTd5c2XgPSNYKH554TDvxjdsZwGEKh9zEbDanR6iztLXmMjKpUgUH77NPWT",
  "key30": "5Nfb6APM4b8gfitym9Nd93drJASC4qZGj2fRFwf5u17bTi2xNXJNK5CtTWq8G3j1bhR8xMTtHwRWpEFePEQbjEQH"
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
