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
    "fPzcKof6My8zWBSwpXmTVrY3u2SSEAZF2G4oRv6oy9oVbPcrVZA8xBcHy5WY2ipVzb7TRceojLHkcGiUxnd1LVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9ZkZ6BmgbeBbxMvxMhRfJJUAqjryNWoSaYo1dWo2fQZfbMpAsDJXo234q8QgzZ2YzgniyGd7JHGVAko938ByhV",
  "key1": "5XbLCziD5b6bopy8UwbQ2v1jCg9gYeCxVwNELoV6ECGqXD3vsbaanjRXvLy142UrQy83R9HtdqkT9JJapDoYnr3u",
  "key2": "2WSvZB5DMzHV649wprhdN2Z25SdqjM1yTpwixSebg9xrc9iWrzsDvJwPMvaMLdYrPNfoqak3KLPBgZn6xGx6ERdm",
  "key3": "28kmFQ4dkEgEG2yJkDQYU1C16quRsHTCqnWWZNEodk8wW8cATC5nHLbMUXNSdPJ68WDNaUdn8X51km18Yq2LnvB9",
  "key4": "2UDGSoePR1m9vZRBZhvBCpWrRFNkdpkvkSb5qfVnd2QNtmkfbmYYRejVQm2yjwLbRM3i5hLYhk1CrT6Sa5CtJDVj",
  "key5": "4o8bMimsnbWR4Ew8J5cnbPAoYs1362j6L4tRqyb4anSuYgCUikgDhs6HmeYbGWdWyu6M4oNiCM8QYKjFrLcTnGp8",
  "key6": "SdwGr3DBd2jKMcmsnB3crgqj6cV5U3a1WDKdnMDYJN2ZG8NPwzyhnbzSKqxjn2g3xqHMH3e17ee5pTGHEsFWte4",
  "key7": "3tY54xY6hPzZSBrKWwCem6yY58N4fggvfSy1YBQdC4Hosz33XgrB53EX7Jssk3aVhC8Wp8wr62a3NeLunmUsHS5j",
  "key8": "T9QuQZXtUx8upRrVad1kQkietuHJ6Tu2wFA28LmZEdGLHR6mx5Grwg7YLWZ22wjuYf4LXKJo1cPDJyJftVksqW6",
  "key9": "5xsPAXCo9aP8JxP88G459dAqN7w5GRiPdQqfVjgqpA2yeMG5rBjQbvLySu34ZtK52ipnXBbXWv2DXAyaYYuXg5hE",
  "key10": "SVHhaCef5CgsnYNMA9iYTyBD4LGvqKyqnPFo1E6mrQbqxuzDX9JRAAqE1gpdjWNedU7fz1VekDHvVXgcUGusvui",
  "key11": "3XyMdWvTaBdnSGRUnFxffQTDBbYvpXE5FbkhG8ePrVYNVRJZknLHGoZtuxS1bo57o6uLv9MPVaKaSyy9EhaDc4LA",
  "key12": "4XdpDUEQ6NV1NssZWZwR5fbSFuZbUtM5bsHx7RCjKFEKrgqhSF1hJuhVUJ4dvh7Cvf7GgsNKQMK12uecN5F9TcTB",
  "key13": "sMvNJ8wP7DfPFEpRbTH757kg6EBacefWk2LUTAoP3ZQxoensR3Nmr9aVR3NUGC9LcmY3tEKrsBT1p6nUshAyVU7",
  "key14": "3krpt9dcWNz1seJWP2X5xXXx1hDnNeXY27onMT6N8jsVxsuzLE8yaUdqzpzxmTqodi45LkWeD5hvpqo9gcxy4247",
  "key15": "2RhQbRsgDmMnRwuDJpWGbdeghQ7q2o3Fpb3JEpD1eBEUtv357NFMLy5sy5gU7KGhvwpLpAcXeX5AyFckqLW13Yzi",
  "key16": "34btDQMHtprytpC1awe5RrwoJr9eH7YdeLnjpFA3EEs4bUr9TC6bKwudPDVQjoNEW34k7c2U4rMHqZ9pFJPnTEHR",
  "key17": "3j8L5p4mH4Sr3ij9VZfBtD9ebyKZqPi1B5BbZnaPwW8JjKGbUSjRUTHZvd13zSQyWXotK3uGetfZcaf9Txi3hCTC",
  "key18": "2U3YVP45EEsi7aLBR7TNgr7VMjL3mue1L8WhSiBRwxUGqLkMxvjWYAUX1M3zyjedaYrFQ66pE1ictRJxVrsSrJU",
  "key19": "5ABmKMM9eoMVEmT4YgBt5vxJp7YhP9pvYBpGbDVPewqjLpqH5C8uqiEvgMnFLzGejAA6BEYgh1VFxMo5kAnY6q1M",
  "key20": "2bgcHt9QiQGn3ikjPFj6TBYgX8t3KxRfXgHKHd59SvT5qPyu1vj74A5nZf2MYivreywZ2zMvYVTRGuWbZLE1wrWX",
  "key21": "4nky8mXjoFxHfRpj8Thxz7jK7rkfqLnV1rxnhPPDyh6FhJvoTwq7ECWE4iTiv7qDCt8CaJfYWUGM19z7c6GbpDf1",
  "key22": "5TCiWiezA6unyUPsfxSESLW1umC97hvyEXFFJu6isBoRN7HyqwAq4RkKDbKr7L4YFHtsQCBFMfgLBKBma9XjHJZ7",
  "key23": "36UUJjFdqHketkHmeD9inEbdUcVa9cCjNUNHXUq8WG35vMCxKStfkh53b27zFEoP9dd6dNcUoqtRrNkKb3ZYL3GT",
  "key24": "DXcd9h4vUDJcnKFFK7Mp52vWcJrehKbGek2N1DvQQ6ZHbjXeEeR6wC9EYkKucVwmS8xWgGXvxJDeyvTXgRuoHgc",
  "key25": "4kEDKCxnk1KTpmZB9knCBH2zbYRBSoF5SReSLHHkgaeLVB1YoHDwGTWRhPfLTSbVsEKFU9p7WD2A37NEMDy5UcaR",
  "key26": "3xRA1uidmDqYLu5vcEjEaPQfjZ53VRf8ThRSqv7Tqgb257UfFC3sTCTjiBgDf92PDUpTPpignyBVpUR8QHveNoWp",
  "key27": "2r53DQBcg5y7nW5JDAH3WuG3N8rwo42XESB5dv8gQkjEdNUxQcMScgw8nVAMDkEQWhgJcsinL33wnW3CRvLC8xBJ",
  "key28": "523iN36s9XGBNugJj7ECnREZhgCso6NAjeDVuNwU2PCy2rpVXmap71i6ba72P7nVH689VEwGWamANsCwtiS8mKes",
  "key29": "fe66YfdAyrb6QNbg2MWdxkGwrrwBZaf7HJTHJACp2zjQjpfPWYjF7VVvWUZd2Y13iv1DakAr8gFjcd5nZ6345XW",
  "key30": "3aZba5h5eAat9sHUK5dGKxfhTS33zFAxGAjM1tmp9P9XuzLxVdNveho2k5fjgGhFtWSAJiLwbwFAzXQcxME7osri",
  "key31": "4CMNL6shCApMKhxj2LGYChkDdxTRSNmA8xDgcbonKisftrp76STVrHVzG4nzCnGkTVdPCLTX59R9osEfNgMLKpuW"
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
