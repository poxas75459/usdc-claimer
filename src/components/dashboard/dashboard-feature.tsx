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
    "5jaCCq5RSs8zqgxU6p3Zn3C3wr7hck5a7Azg32n3aYeyqsKvocFmmy6YceeKiYzZu3CzRwAdroS4WZ2KF6KXdCJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLUNaimgvd8gbu2jizTmkMcyAiEM7vnTtWyuz8okYW6bV8sCwvgNtMyw9sBsBRUm95mzTqphy93U7GwGUcxqA89",
  "key1": "4rAVzjABAutorv4iKcykDDPeiZH2wz2agMQvPi7hrZAz3cwejNo6weKWS8wV1n9U6gVMb5eLxNsj8AAkxANKsh3a",
  "key2": "5ts3epKrVosjuyt5TKvtoHNETvGtWfQNf8H1eqySKWxV5k3Q1wr77oRj8r2C5wuxAcB9cHLx5HyojMxHy6yaMpK6",
  "key3": "5Kt7AkCW3i6pdHTv449scdLKXELfSi7p4VqjMHGk7NFYPYJRwjG5rwaZkKAXFmgoYoiP61snbSxGELz4pwSKT3vP",
  "key4": "5prrR4RM61uvjQBmrfQ9pTc7bnRcxkFbb33fQKPY9L2kAbFjZ8JHHwCJJ6rskPLuGXrrQnVzipfs6F4kbJXJ9LxS",
  "key5": "3CVQxgDqv3eB6S1CZHZ9xCZ3yEoKLDGfHXC2v43vnN9nU1Yw24WYwA45ELfb65pjMhDhHNnrGDkxG2Su9nxXPB8W",
  "key6": "3jFcbwzdJmW3q3wKpmgTWqmF37zvn69uCfPV9aZYSu7vhPpaAxMkWrpYXE6zW2g4Hz2jR1p9A7AZqqwafjTxyFf7",
  "key7": "3WZzPdb6jJnrDb6K338nc3bJKouUWCnkQHx3GYXzUYcgjughYPQachm9ipjSqCP75pYCMe6dhP8zbDNYwbigHioM",
  "key8": "2GEdQqQW3EgSNWzUReXi1PGoUCFj6iBGX8BpXqD1Jdyf6f5aAwAfhKsojiTt8J15vjRJvoPkZNfjAjuKMwgwrJyE",
  "key9": "3VbggKNSgbCd9wnu8jfYQtT8SKA6Md1Y6gQTV6YuS3mTmZxAY576A9s4mrQoq6bq1hE729TLkt2QCEA2hkVn8BKd",
  "key10": "s6LY6THgRhzx229sBRmzZpYTVwfvKr3GEicPzp11MLE4ctfLF2sQffF99acd1HSYsEcMWBd5cRjkRFJWqMGNEJP",
  "key11": "8npe8Zumfea3jQM6erBRPHsG87yAeTr6gLQfmxrbm9vm5tUGocYf8xKAWk4K6GD9bZMHNcKJEFEQCqqnmbXHtfw",
  "key12": "4DKdPdhJmvH52UCJK9xURGT98mgHDvgEKh4equN139nVziEfgQk1gmpxrdCbTuaFDE7G5TJDvekHP11goYoHczND",
  "key13": "2KmUX41JQjNxAdTWzgNzWbw68tHysiHLwhBMGVumWSbWgGfa4C1NaDrGJnV6WnkSZmUQxURrBAczsqSfE3yU5a8K",
  "key14": "5zS64QTY151WRiu7f9979rR7n5Jh6oAzNCY8AsgitVCVaMUciH6HT2BSMuFToEfuSbtCRCPrjNgxQKDbwH38MdQm",
  "key15": "ZapMpFf57xTMhY5BEKYGzuxNvCoM8EJv4jRUggn2PmpFmfznB1h5mywHW8pLTf1jK61ssy6zuNE9nAzcADarKcb",
  "key16": "RDSCVzFi3BQ3yJRgkxsTidTSSnP6PBQzcVhzrpXyJBkhnUuhxNWHDbbJpTgmXjq2uLym8MBqyTc7y6DVZuYi8Uw",
  "key17": "51XjoXaNBtuJddYDQvYZWfwoabR34YKvSDR2agZMjbdN8r7cfNNBa5osUqXnYgwtCWGvb5QdHMRRrAD3yPS6kjMZ",
  "key18": "4yWCb2sdKNkWxmC8Ra1Kr88eFELsA57cR12Q9UhpG6CZ81NHJ9AewuWr9XMedCduYnMu2QKHPBW3Qs9EZGwQZXEU",
  "key19": "ANpkrxvDuAQBcbbtYAGhVkzSCKWr9iZuVbHBUmgVbopJhvV9B2WLuztg4gHGqycTaZvcHmE52PoyCeRsz4QuyPj",
  "key20": "5dafsU3hpPCzgnp95gFgrVyhKb3WeaHbeXB4VoMA9bpZihvXUFdobPpcjwCcBHk1Q5oSLRNntKpmPHZtRdX57hUj",
  "key21": "2rcWGMiKdAvborGpSTEyAR1LSKYVDcSpZruLFutUpCKyra1renHcbdfduHBL9pnUt5nUkS9s2zmWy2SAKLdUyd1V",
  "key22": "4HJ3eRmc9wP9ArLrE1NzVXHnqkqEXyUUU8dfWvUX7zYFY2nubjsJjgPsBQNBcWoh6wJ17kWajDEVs18tY8AsW2G",
  "key23": "2PH8fS417oouyRksDMPrhA7mWKi7nfWQB7qGGzeDhbiUL2rkK6UdSHcAKW8L7d1evrkeEMH6DgJoxtwwB5WR7o9e",
  "key24": "676ZuWKYQQsinzXeu2ovxcn5QZf76nTtRhg6S94cXphSBeHLKLcyTvEmF4GM6vzzV3XN3iY2FtJRgjKcT4fJmp7r",
  "key25": "weNtCdfuRA7afXANFGegpbcNx9CYyYz5w2EqgaExAXFSJKhozC35ECmTqQAidubmWaPZZ9GTXKNPj9SUisu2t5a",
  "key26": "3mRiG5qaqou89HGq7qephnTHSqcyj3NVgBfn6F2wfX7jGu4M7euAJrXpnHRYTBqLrwxcdcxqhiNG1Wd78GhuZhkB",
  "key27": "5EiJFWKcS71TjnWohHDWdQvKLVK3Q6bpHGVXWKuyQSWWnM6nkgxbi88nKNYyX7ZFDmPZXT2camdyYnGe3yoDzAEk",
  "key28": "4voH9VGcE32FwZ3XEsRUEqfJgPriNCvBtLkb1YtiquSZYvVqhgaiQTkHYN7atn78nFAucCu3uYs2mowaJXmo7Svv",
  "key29": "TTTKdmm54aKmAKtRzzep94RV2GdaXnUBxeFzv45ZcC8sHZDZHb89bxHXZfCReu55vg7TTEa8tR3W5YDBRxxK1Ca",
  "key30": "H1F3CnV6JkHnZut3WoxcV5Ho2osjsfHXViEGXkLP42dJBREhjVR8VWvkFvVXyDRNJ21Q8DZSQK2E1LaA5Sy1Qr2",
  "key31": "4AazquGF4EEsfyLtssZEkudnEKmXBYviH21dCs7WsXSWD8AwqdvEXyguH478C515vhsTcGTrtTtCJQGUBrkLiwEy",
  "key32": "2ncSuiUX9ABB8D3adv4HGXkiVs7Hojd5HGwUcpQGw5pwWMnjSy6V8mDMSDoP4RM3nFhbTBGCQ6y7yunJ4C8DJmmy",
  "key33": "42Lvgb6Py5nxjhqwt9Tnf6KarU6dzs9ATJrfE9YCdUGkC6hs6Hj3wXSHsxZ1xKvsWdGtYp3BeUaRbiF9Djc2LRzo",
  "key34": "33f39bNAvYrzDEDactRwJbuqkmewJSBbHCq2GBwg1UHmpvnAvY9AZGCoC45u9SJXijmt9kFqs1hXdNbEVisUdxeP",
  "key35": "4nXdPZ8tHSbtbd7yHm3DJQ6AHR11kuZN58u4VgQcUmEzfXeRxBm1Rn6axG77v9CqopkfRFxURQqp3MEkair9rdYL",
  "key36": "pY6HToFRai6jJ4TMCcgBe2HnweLgnTGDTFArTFVSYGphQeVNQtDuKLZY6JzTEn6GCbZRY1MmpCkWkN5QAUxiNbo",
  "key37": "5TeoJZ7gProquWt9snmfpb8buww99tCRrE3QXWnRF8WEVyuJtfKFStBNDV6TuxUcy9eRrrUc3dtWJyMnSwkAKaDy",
  "key38": "5UfnxPc8BHa39J7rPyaHaZFqpiNjqLh7kJ97k1MyiAM2mh2pchmGUKnEPfD3ha7ffK3nbuw9CijjKv8RJtdN4WYe",
  "key39": "5Y4tkSC2ateYv2z3wwYsCt6hFZ7rB5uJDzL3EwPrLLQCQWZEB2aDJY4ZmiDgXNJDFuX8XnxTwtuWEqUdi73ypYLJ",
  "key40": "4cTDypbWQLXS2dmYFEMVjWSNjTaJwcnpyGe5MaZgt1UG6j3o5g79vkrKDEJunfeRTnH5g1tcKfkoGFja9tofyPTG",
  "key41": "2JD9Lmkxhr6RUj7i95Tuj7dgvb7eRQVwoT1mXnYJjeqPQnouCALTdNEA5ttyYojSptramwtoiudgL42gtnMwU72p",
  "key42": "3WMaJ1NCp2BUwKnZdzqiz89e6yfhBkUd4iHMfaDx5chp9gSHLq76DKY22orw2PBPhubBHGDKdtaFuAsfTdqPT2ir"
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
