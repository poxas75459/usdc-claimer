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
    "2KeGPE6PsZRUJ38nkTdmBAZw7DcgHDicXCtqNxQuh5fMsJgtnbvaBZYCKdfvcfsX3J4h5gkQ4FL1NWDjwRufVWpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zo9eTe1LndpTczWpc1opjiaw5fzWmWZ7AmvxJX9iRubSgVSo5aQQHhCcsXRk8d6efPW9gZoqh54T7FAaEZxdz6m",
  "key1": "4iwmzTwujVqvBx38NjAQgfPWWqSvCbpFQFkreZyRmSq5cCbahVwrFdtX36ZZwkYwLfKH1EsXAbVbo4zdKrcFx3Qq",
  "key2": "3hnxD7mp954gDdzhuPJHeUZRCYFtAEL5BjrAWxGJe5GzzkNsmxGm9dC7TknFxZsdgZDex15FZBToH98kY7rNuB6u",
  "key3": "2LX5JuuW4qcEze1hnf7Uf9eT5YVUm82pQNAX9WScQgfvLgx9WJgME6zTEjiS81q5Non389PArKScPnjJmpwPnxpL",
  "key4": "2AoZ391EK8nPqZy99PHicMr9qMEbx7CbRRJ8Wo1FTxkeBXBWJn3zpRMEj2Wd3UuWpQGe3E67R2EfWfVXrPYLSrJT",
  "key5": "5wdCPSRCBbkj44v9NJNvhEmftds3vG7jSTyp4KG5wKHsCBqZMa49HEAzYj2azr6xkVDiapM5BPmMLNAYyABSaNRz",
  "key6": "5j1T8gFGZ54kfbrLa3n5pLeqKrYn5XrF99efXp8EqSumRaFtgMXFp1fix5NSkM4oCkEjvCszSPDyYsq2rNGWSgn9",
  "key7": "WTF8YuGEiEfZGJfDb6zM7e7NnccUMmgp2czXhroudS2g37DNjtjCYxShtVGdjyZY1fsZAnXTqgFJzwQ6qN9P4Jp",
  "key8": "tXzMQBfyo5QpwH35B9HatwbhJQ94txomejzGarGvn7yQwA8b1t1nABQ5bNdSfP5WuGP13mWKD7DPiyQynkffGkc",
  "key9": "3q4DwKF7uk87KNvjcM9pTnWMrxETgYCXC8CAGgWsMoeA8ALLzAFSzYpc5HRkU5GHk99okeiBA8ViAc2ZNHu3Vuyq",
  "key10": "5kB9gKe6aw4k8kp9LvZh1NyboXVXvD2pYH9tMgmBL2fcyUsSCbfyfBGo7ZtVrzphpFarwtgr4LqeS9o9QaGFPrsQ",
  "key11": "cPYEN1t59eTd7p3HvUWjAtiAvxTZev73N1FQWPPER7f42kbUFJ9Jj9z7cqiX66ZemZKRXbyos8Nhq62amTXi6o3",
  "key12": "64sb5Fd8JEScprHJqr7doiGo89JJzPCWeXSyPJgMMKEpdE4bXP8bEozViw58htrNvx3TVFdBGKQye3uQPhLwNiwf",
  "key13": "4JdERd7oHbGU14Rj4xTs9W8PgS5ZCpmDKW6UtPrVFp7Eung8eNzonFCNF11vnnHcsu6eUkiJeLnaubUEkpQ1UUjq",
  "key14": "4xRJkzEgEWunKPwNxAS6SZG6QCc5kLqoscqBbnAxCsdwAdSLnnHWmdUYB3hUtALUKnQQdS3jhKyjLw2Didh5XCap",
  "key15": "42Je4A6ZKw4P7uJsZSnwomi7Hhduds939a3n1fp7hRAtZy4rrGgqLVBsxToEBPrNrU5X4VJA19DpViez1kyMdnLy",
  "key16": "NpzohtzdBWRnwzFiVXm7ZR2nzLXFd2fetaiQ88J7pUP1TywpB4GCVGoJ9BMtTdXZbeDdPvAGMA3Lna3KA5zDa2k",
  "key17": "sFq6crhVyu3tGJGAzHf9rGnf2Yntri9fWxNtWoPWwHpgodWCEzecXXpwpKdSnYZzzJcq1Fcarthh6NDAwwsCniL",
  "key18": "BmiNVkhTkR4yuXajTwYmfzmbcZNHY5imADwFrQPsyYD9fmGauSyYUWDkaYyixbuoUnxm4tE3A5h5SYB9jb1AJcy",
  "key19": "fDXmXPeLwfbqrjNvTd8U3upfmra5ToYxW4xTYWceYPbBSGXGNXFAgXq8TPUWKjFoGF1yvSsjTENGdwg3hSfmmk6",
  "key20": "2YSgeBYLVrnbSmAb56WHkivHvP3BFVi4Mzi8ui55ibwTBHeBwiU7BXDdMW2NEntmpuRyEgpHeV5ehfWBtVVsPL6A",
  "key21": "3BycG1HzbV6BzztG587RgZmcBoBzYG6XxdmLb37mK8XgXK7eN11UeBBf96rCTAzYZHcv6kXgwyAxJRNfCEP7uPeT",
  "key22": "5tLeNKHubV6zfTpavMnRT7h1LJpkmegmATPJYot4oM4i4MhJ1kJASzk2NBGisqm2ZSprEmrDsNJGx1igtPUnUGmX",
  "key23": "Jz6PQxpEtr8UroriuMaodAemkooL5zybbaNvndbTUJS9qg2nABPt86cFcbprjACwztwqoDkx1DZm8hd1D6auxcn",
  "key24": "2yeMmo9xaAy4REr6XYdvgdBR9JNuSFh5XY4kqm48cm6h34PM928tfUZqQ3icSSXifYEMMwQL7fpgvq4V9VTiwPGc",
  "key25": "3U2Ab4YNQQpBZVNGKg2fmzrxUjnzAagdruZUrYT3oViPyq8J2kuUJw2iTkvChCxyyGpStmSzVGStWVT1uoQmnZaB",
  "key26": "5xnm2aQ7K5iVQiwwnVW4typj8vu56wpqV7ifJPDhp4HJ548aLBeYo4wE7Y8x6XJFmiWKmw7c8sCM1dEaXqBkufaW",
  "key27": "tCRYvA1H3osYHaCapQ2Tsb634h4wFMgao9F9JMwbAh68yiWCkDQZcSdMmsM6PV8tjX4BFxRQmd4G2KmQrWkNmbF",
  "key28": "4WeKRXHa8YqL6r291DJVA1tYf7kfsyjiAvMw52dPv57gMdJszjkCu9YRdjTV7UbDXHM2EZuzqNVZrdaCkTA5cUJ4"
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
