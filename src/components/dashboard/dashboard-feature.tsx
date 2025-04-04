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
    "HyKNhzRr9r4xNAJKD9RRudzj88PuFNisVTqiukH2gLNMHhPbT6GzwNeSDCJH6qD1maTVmhFQoVEM17KPTTg99mX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhCbbWmLHMRvuQvDfBMc3izy5RZgFyG8t9PPdZrVxt1iWWH91aMsuJ9cjuNp2xy4L8TJ7DTbtq2dAuRz2LU2Who",
  "key1": "f8HuvGnGt3iCpUwcXiNPc9GrerPdY2R9xJWahaTjPdhbCigTeLGiWti6nykGTM4APmDaSxLEPHNV5aTttG3pVBp",
  "key2": "3nTcasX2rPgqeTTKwVmjVpKA7bXXFReDdbwad9uVwoPvUMdVw8Lf5yXnEUxZihxna5VsAj2HcXteKGKiM6WJ3jzu",
  "key3": "3qEyNMQm5X58TVG8oGhpmddiFqVLECh6bnb6qZFnFBtwn4z9VbTZjSWdcZndPvJkBbhQsac3ecigH4iH33LPwep8",
  "key4": "2WHiQ49fm4QsGPj5xHEi8MjmeUQjbsfsSbvv15V4uhx5siMy9e8JDfYGgmjGLMhGkYBCqBH1k28NkgsHu5S9giVo",
  "key5": "j2h8P6G1QticA3KtykmpW3MJ9x5A4TdK4ZZmL63z4h6Z5K91HaQimKtRoLtgWkzgoS3rDPmnic7U8VMaS123wgH",
  "key6": "29iiQtYW6mvbdwjU3khavvzbu61fKDQSkZwsCPsBTU2CQqzVssMecw584sFnX43ZUYvUnc1CsXwzffE4BzNWdEm9",
  "key7": "87vobtvG63G9fESX99bZW9N7JXhN6gS9NNgB6p2THz242HiEJCdGfuH8SgXWE5oe43A5bU2zReF7f7DSndPngot",
  "key8": "4hnJjKqRmGVgALkCTHoa5T7Ko5jArqhFoWoe5kU24ktmANFZTvykoPPMKVmeG5xtKEweNVbFBf7iF1hUb2G2HEmG",
  "key9": "3xnTj1jhnWP9djkird6GUpj4y4EybJEMwK7Xf6KJwTPFbk64gfNHhtmWjCN889K2AnR4eNvvSMb98zuMJfzfb7ft",
  "key10": "5h3ov4osUTgstX7keTXLRLACppzhSXNdQDnznfXcPjeHKcNb1R1D4477hUU9nYLP7oAVCFmxzyRytD8xPdHxMaHW",
  "key11": "hp59qPHXbe13skuL7joRpSwkcFpXxbRWGWpXtnYMvyTHKaY1X3JJsVFMMWE1XcHr7wVEQzBkw4WnkK4ZXgxMwZr",
  "key12": "2eCd7rfLKBQkgvCcBufrhAqsbAZuKXVLvbzi65wyr3J6nfufmfEVv8dw1QPAKK1S36hGowxY7qWewtrxWcuRSu1E",
  "key13": "5eVbe3EpkttrEBgXXSZB9Y6LCiCdfrbMZZwyTAcsD31h2v47gJVAhUmpuET1PgGbZubZCGYVJ4BsHunM3nJJtmqm",
  "key14": "GAgvtWTNAWS1G6ENBZ82UmMde34a2ABBHtYebEeddJqhiwmsojLcS5Qr217pqthxthH197rZpKnydGVDkjjgGD9",
  "key15": "4NboGE4v8qrHrVSrsDchNnUTrr1WYZ7eaeY4hEtTCDBv3639jNSRHhQ637mFt56mfitznGzbAVvuoF5pEo5z9EvF",
  "key16": "5ytfo3kpMLkegoTdjA7LfNUYmh3LeH3ytmm2Z4F9opNwwqA8upVvbBk1pRRcJ8WLUFAPhHc29H9RbZ7ncYkNrG5C",
  "key17": "3xwWNY7eEG4p7wpdcVjBwmMyp64DwDqffRAZ1FVxxZo6poxeWZmBjmkQBYozcDV7DNB7GrjeXzK8qtyt9GoEdaxo",
  "key18": "22bcDG1NzVj4ZPq5emLAoeyGku69SuaXqmCcUiarcgAhsq6Y8JgACfPKu9FoQN8UqE5sU4PSnoap83BpzNLMF3S5",
  "key19": "JPsQrqT11A5a8sNigz57qX2jWsrUNVy3mJWqiQbMt3piC37gjiZaVtPDsvP2m1HCri8h7kRk6x5d5e3xkvKYgcF",
  "key20": "2QT5CJwWMhaEMcCQCrq9bbhfhbc583YnCGTK3v5WR9e25Y6DXv8kPwWRaAaVTAnuV731uyCC4wJKM77f7wjkMu3y",
  "key21": "4X1gntfDyrTbhYLB4LigmLZjJ2hnA6vQkakJUC7EFKZq66nyEo53t9gzpZYSLZrFEp7zuy5p4Gz6C8R4ECiJPCyY",
  "key22": "5TFKxzpVWsNQShqdYU6hzWmTuG4TbcrhrxHMExtuTvvtvdrZp9jnRMg6XLrof5V6EKUacw5PtEK2ut2yiE42oFAV",
  "key23": "3AmSCyNtV4fEnSCDzkLAvTTjq7XW4j1rjiquZ3F4aM1L6XP8fcdbZH7VCmuXvf8AcQyzayRiUJLRsSi1joi7K6Ta",
  "key24": "4fe527SGmHPaMy1GZyLzf4NaCBb5L3cdPcqxVpMQR7rywspz3AByNeU8nQCQvWSY4Vgx4PmfQj7pc2rognKU5RCW",
  "key25": "5S6k3xagyM1SGJmdCivSx2ptjkpYdRS26yHximMJfmQg4eRjf3gv9xA1e22qLeEd1TLviojPaqs4vvkbHk1i1aQq",
  "key26": "4mNrM26aemDLKC2irA8PzY4JnXby391dapUADsXi7beKWCLpCjHwMX8MseR8de6C8UbS5jr7EzrSvm9cLrmXHSzw",
  "key27": "3iNz1oHE8JL96ADuZyzBX13kbSBSe7MCjK16wthCcFJQbS2xqidXUTAtWnttsEzefBW7uMyyiModiarTtxvb9oT2",
  "key28": "eSgWbqKz69rZQBho7xMDBc3te3D53qt7QGPz6RD5JmiLgbfSud7bWDufgbqsyR8haeWgA693AbzPtkKW1hNzLM5",
  "key29": "3WP2DtGDpTMB6DCKftknWKP6gn5RDaVq2ZLUdQnZ7Ac5dM2KEefMqrKpBGwMENbruV9ZMFmVwGv2ehm3N649bjVD",
  "key30": "6o3qsEnr3jhcmqUsHa5LpQEM2a1XE9poW5fB4KMrbmb3ypfTCXQvfW9T7WqGUsxJwCaFzc6dy8dJGkp72P1S21Q",
  "key31": "5iqE3LVkPTwtECSoeVtxB5gon1veonBcuCvnvkFSaqsZcEu7Vx4fkt5gxWiVu8ocRXvpqx653DAQySQdeZPc5vKf",
  "key32": "2CDtg5oiqKw6rrfxW1J7HAWxBHk3g75vfg1UY82Az6brbf5QFHMxQkzUESke4U4B2z181pb9kfpNmCjwP5LEkygr",
  "key33": "4JH45hda8L1sTLPTmNpxcWPQP3Yy8754Dmu6xHFyk2y3cGURVDnZqUxFGv1uKZ6VDcaykPVxb51eK622vYmM5jGK",
  "key34": "67auaCNx7HvJqxkrHtVUuNt659ZhKjqL4BCXSHvLXi6pBstZbgJdhm8CpgvtB2W8YHs33cpDbVovZT2exxciQaUG",
  "key35": "4iXkV4iHd6uDR2DsM7P9UXtRjeqMmtGoL5mRkPrVmWWm6LbKzMJihP6sM7g3d1URVEWe6rqFdRCYEgrieKhADsB",
  "key36": "5HjggB1TmGgA4XNtuz2x6JMDYXZ6eHXyM8SrR5LfPafCQd3Ca3HT3rCfPLswi4byPENRvjxmACypeqqmXNE9LE8f",
  "key37": "CNpAAv8y4hx4bRDtLcV8ivduhpazAD97DcbZQDhU4V28EWWQGrQF9BQPNRgKU3xNqxYYYTyVGfgGUCZwfHsqSYt",
  "key38": "3cNqpquc4xt7dJjQTtFMh7Aq8Br6UWLivyE75i6FJwFxZRoxDZcEPkcqYsKQ558p2zNk4FdGYdnD3R3x7i3tmQb5",
  "key39": "4bwWDygwGSvvQ8gWHJnjBFphJ1BiqGmFmj6jBS4jnMzSri43Z987A6KhiesGiCS4k2NVC1AcDK6UtFzYhKTwGQ9G",
  "key40": "2D9DUkbFpxebHVsXDXKw9mgBuMxgd2tVopzrNyYp9vDi5NUVSSxDYmEHX7SQ2GwsfSs4b1UNemkqDDpc7dUePFfm"
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
