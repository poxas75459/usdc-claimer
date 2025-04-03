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
    "5hJqMkKzf2ETXojt1ySdNm1omGnoYDgTMwAUR8Grrf2UiFhFYY8aw2CJaWbbpy6k8DYgts1Y1jgExxgXm8DemHLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3Lj39HDPCSn9sSMEMVUbgt2qLez6ueRSUgKS7E1YRhDkBXiipdxEnX8yyrKAJs4Cncds42ACbkSL6jaNAhka7e",
  "key1": "RsdH4QJDvrdnedScsoYsQQDYD7G3LebfSgucUSBAkUJEYQt1fdQ34KwPmkbw5BD6XEUvansBVMf7KbrjkB8AQhM",
  "key2": "3jAqLrf8mHqg782NvncDpB6A5wDrpKU87TM7n5bgnmwH5b8JPZHhXqesgzz3uuM2MfJwYXDY6Win3J6riZ9KERyx",
  "key3": "24Pqq4UoZaT5PeCFGbf59bkiZBR1ctiy8Sx6DFNhcRJQDYXnSGuff3ZfWLVjKqaJ86iHtoxMUJiSHY52jShBCRaT",
  "key4": "5LpdjKmyaHm3E4b9rbpv21YjatjF4hw9yFV1nN3BfSgd9dE3Msnvs1UtfpNjkiD4drCLxSjEkUTgv1hLP8jfMXjB",
  "key5": "47BRuUjioa5t4QhqcgpoFW5S9jKX6tAZaHiB3xX8aV4dhzMfHdBMmj3Lw9rs3TXpnWWyAW5uBDNR7o1BxRgeNqUw",
  "key6": "5PKQAfujE92G1G3MZdLLtMSorSs6GkTXkY39k2g8BqTTbWF8iBjPUugsyAv9xwV6JX49GDqPoSPFZAw6iLmsAkNU",
  "key7": "2CojFoRqXnzmQwwWkDGf7etFj1PWggjTM66hCKUTKBgjB6B9unSR6k5dxb3bphJvGzZmdfimNkKpa3x1jnN3Y3aP",
  "key8": "vv2v7DKBx9PkNfRWDFZhTWxWGfNsYuRqxv7MEqXttynGscZyzXRufQjGY5CtVJFdQptBT1nbkaBWySnpwDBS67i",
  "key9": "xJLRt7GkhF3ggCYfFoGcZ2xNu5YcA2YTxYoD6TmMR1372gL1eLhzJVr1V13zjcXc4UhMY2TsM3zx5Xs6TzhEKZ9",
  "key10": "4Fzq39baP8CMm8H9qpTSsxBwaBnnBpuhgSww2bXGdS9MxFuVoh2Ctn1JU8H5LzRekqp8ByDeXwehk3dChwH5UL8a",
  "key11": "2vPVYK4ncpfq3vroqYeksUHrbPJQh6798TxLfsjkJk5ZrqvxkRYuWZEDWVWbeinESa5kiNnMvg89UcPnhJmGAeA6",
  "key12": "2KeEpoNQSPwnzraFXZKkBicMK2TCgWSnEEfC1DKbJZtQfyrTyiA1uk3y5KFKQk5JjwLLomCGkRGun2oBJnJtqacF",
  "key13": "571psiioAFjhDs2ZUYzZLNCkecjzWde2hKUivw3eQJkBg9EgB3RAFawNNw1RcVqT7AnahNSvZcqduqUUp6EPnLd",
  "key14": "2yNAR2NeR9eqCGB3rk39Ks65ELrVa7oAx39fzzv8BfR1VVRqribDdKf5Gyf3czpm5EJ2J7JRNx4wKJT5iZYyrq5k",
  "key15": "2KHvRGzfPVLWX66ygWcbo23dQPCz2mKLtb4P8JHNWhhALostw1SiBsdngK5MxA3fownjeeoMp9yZbqNhf4ZQNJAS",
  "key16": "5eqfrexTPYugKG9Ed1f9v2UZw63uvSRs6jowy74Hecdikt1tuaNppWnjzZjyK9Ca2H7HzUyAHPXLgRXt6MYmPZZy",
  "key17": "4o5ndza8P3EpkrmTL4yMHDfzw1NMUGZqubLci7UifsCSg9Qc7jxUViUWTpwTzMe621cd6YNzFKp9x7HuRKfs3Gk7",
  "key18": "3tYekVB2xSuQgdPKKE1w9RJst2xxnx1RGmb8SqihxXGViLZBh6nPfkzMQ5QdshiDMngVtrisZhsPdFUnU1ymvNq",
  "key19": "3t9JPV882NrWEzQdPQL6oyrRh2pst9n177Rx3gXZw3fvwdyjcNiDS9zkH8kE9GGXvM9vHSUiS2fFqUgkLnrUBZSY",
  "key20": "4uyrT4ho8VL1JLexHgWcvXoDavrXxWVapozQnHcRb7MXhpTyNMDjxCDDutExDu5kxDKdeFPSrjPQWaZQpbgavm9p",
  "key21": "3eNpw83fL41r34xyW2sd1AvHKHqfHbChnojVRug4KYsiqxFabteaaxPM3kVrBrSvkhLT7MFNyTU6YJoM3ZDMubEj",
  "key22": "2Y2zc3Gm65BDrEbPFYqKSP9hYZNdCSqAcR7jjVzayFjCoz9CArznsjtHiD18MMQmPGbh7y5vauepffsWio6ShMMW",
  "key23": "XyY26mSrmrcWwDoA5wJaFmse6XWDhH2jDEgumZaDQzUk4GeVM7weUDtPx14AWxX9zvNs2SSUtNEF6uwhbbvsMm8",
  "key24": "Dr7ntbkXQwyCU3pxm9tCGxWABgkHLLwKFCmHikX97Qzwn9SuVDNn4EKTHJGXhrviV7BJqVQokE9z1tyGyznqGHU",
  "key25": "3P3z17GRxhb6VWQpifwuYc58xRsgD2QfW6ohJQLP8Gip6moEoM1X7Bs4eitL5b5KWTTNewWCHoZpQv71WfgwU7Pe",
  "key26": "5p7ig2qS6jd7z4vxfWn2E2fd6jSJYG12pLgbiM7jiNiTpkk88hxq2vd1qwkjgQUSpaejVVJ6iA9TXXFf8wj3L5C8",
  "key27": "47jN4J7xvM8Q97X2FAWL1Ey7Y3KEJcMsaKJRxZEQsB6Ln43xYFWwqLmYPkHEvVC5E377cPAjY91gJt2eAHeCH9A5",
  "key28": "5qyVnfXF9T2XA9753uWYYS8HYfgBRKWGgB12SUq8KfVeHM5A1Wa5a1a27k9FH9SNZJbuq727ELA99nk4k3u2Qqrb",
  "key29": "rBweo4o7F5mvC8zQSR7pbsfTZs4Mymw2CDBMv3trfk2v5e8yLboYmxTAjKvtrhqQQjLiYeD6FE5ge5gDKJsPsWS",
  "key30": "27awGJ5B9EUBbcCNkqsvE57dLyRTPor5zdP7nSCuKWJHn1u5nEtHZv3xobYV3dghP1zQrwfDv7eRhMqcoxFqWing",
  "key31": "2JoXnSLb6pCDKJiKBL7k8kGjQbDqTWmgxqZGJGyvBYH8sBrKxZX9DBxnuiRLVqCtoQYdremUXS1WT1DaYXLhsVEj",
  "key32": "3GNio4qRuyQmmRJhvcGSYrKobpyAYByfWSpAA796uAXPnzTRP9U7Bv22FkKymrVTirMzzyHrNjkWXPgfG7PJxcee"
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
