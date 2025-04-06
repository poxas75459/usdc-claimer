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
    "3op2hDC5mNwaqZAU7Ls3VE5evnjjGAFrUSH7G5FuzSBXaBUsjYJJUfzmvnxRxEtgJSfD8B7s1JZm5HkritDf1Tdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jQ6zLXAfATwUZq2wiuc7vzntxAYXzf7dcWATE7J9pSh1AhDaMM6wu1TFZrZ7Rtfp9AhWAkZ6mw5BfzxBcP5v1v",
  "key1": "2ijGkmS1n63oRLteZANS7oa26LeWP2jANH4ZfnkcCiHMp1KJetzFp37QJMgH1yJc2WyezGRUBXfFymEgXsbxxjBn",
  "key2": "3HpY5qQt7i4ubGfLxCUMfwcFw2bFTLJRGpRnD6iUtBFKQo6GjmrQhRuGmqYX7cbfhLsYbJtDUGFUKQAFmofoTSJo",
  "key3": "2Kz7PpGcvdo7Mcpxnqd9SKsYiijC7ZX9MxLgVyU99Y4Axtcj1NKekj32BfKWBHjyEUUYxaCsHj9fsg2rUHtzrjCV",
  "key4": "42TK7yRxo4AVNyhFerBjpBJEMzeAkVaTYr7iG9Cuc1Hex2pGbjs8U8YhMtVzEdNWSjTsptRE5bQHubVKtUWYZde6",
  "key5": "57w97saULJ9W1xd64tbRH9BgSkLi4Snk9tBKERQ4RBeMqkxFBfpePobfs5bL4viQa3dten37qJw7EyPfiUBqgcgv",
  "key6": "fpWfNtwycKVMGWmyWTuka9i3voYxptMEGn2QrhXAVpXzNeiw7mQdonAtZYY9Ypa74QaFSxa9CAmZpmaGbbTbNyU",
  "key7": "3ahBRovg95CvE4FhJEapyXgtbHZtow56aWeSPYnQ5BcZUX8GdZNmeXtUWgchaFqHXsg4ztTa6KpKoqssSNFsfJun",
  "key8": "49oSArxsME94M8hmiAuiiqVTdN2Z7egxcQ72QCRVS8Ee6xvnrEX6sqM6Mao7mrtSybEkYzw8GDAAEdK6UNwf3Nvy",
  "key9": "5XYbVv6P8t9Ek3q4xwN6Noq1BAii5JF1Cdgi9ZwUeJ84RuS45Bpho5APt71C8KtrUuTwHPEj7oHkKrbVTxVciF22",
  "key10": "2bpYnCzckDWMhhPrP2YsJjbGRJmgvzjVJ8wqdi9qJaTo2px3Hf6o9noUVAPAmjD5cy85rDiFoqd8GBVhKmbj7jzR",
  "key11": "66iPWPwgK4F97yBdRsbukwU4UEWUehGnjfTrdw3EMVbX2quQbprTzQxiSPWJFDWDaeF1eu1zarX56nQtQpbZaqHu",
  "key12": "5VwFZ1XJt6fbt64qBARE5xsswTV5thWb4aGKHsxZkmFo8wnGdySbjugJpmJGu86HcnD3WRmcZaFfZ4L3HXfSMDfE",
  "key13": "2avpmGZbsWore9V8gehkJLs6tqHJ7NvUxxZYhkT5fWWSQmwc9ydS6RtREAiuT8PH4hc47nPXaWgkCP3XaL3Krwpa",
  "key14": "3HDAcSKSVMdVBqhwvwJP1kSTRv24bkEhd6Rkkx2zKXtrtmxy3pvAPfh66of8RamK68ZSGQvXku6wBKfzWewB1ydM",
  "key15": "2icmrxiP9h18R9qD6f5hvc92wXXbhHpDfM3NvJj8ND2TzZUBn3xD1o8DVqwCDABHnFvtLJwWRZTe79UoEjR48yuX",
  "key16": "4RYphcirPa65YeaLPAb8iCvwaoP2snsw7hmpsDEGNQ3XK81zXGwLgvsYqU5SUXBzmoWLAoYYy5jjXdRX5y4h9xbH",
  "key17": "28GLxsynCmPXZ5Sic8GJan9SWotqLjT4ySyrhY6QFr5bcHJmFabHdvfLDB3chEQvVtC8DqawLdTNTyLAFd9sGwZu",
  "key18": "47X8V9XSBqof4CC1JwiLbHq1RfvYHTDfkyonJJh43T8qdPuy6kVQ4RaWasKE73VLELTVFgD4dHjKJTj2JJR86BZ2",
  "key19": "2qcWpnaBHRjVtnyrBEyA7Pza5XzMgsoGsHmuexQRbREDnLmQcSSnpj1jegDxsNDiED6hroAiEZjxyVFAAkikoirc",
  "key20": "2LG9nz3pLd4mYLRbavFTMAMMQkfrcqaJFuJw8QaWSH8eQmgk9nHwqeV86RLW34gE8oWvuhRd3YN6VxWAJbtr3rBC",
  "key21": "2DbuWqAGSXpQezmaP1soCPJHFMf7paZsxSB7CAc5uibdqnnHA7hkbgoJB3HLZSthBqxzfQBUzpHKDew52eWqJTz3",
  "key22": "21FXidjud3md12EMA4PLHaULvTPerNGG7mTNqBMpVsbQKvYRCF4NwGyLBF9wyfDnG9sxCGQGD9Y8C5WuXPTxaksW",
  "key23": "5rVCWK8BnqK3jv8XibYhDQLPXe5sVXKbrhZPhWLzKDsPAqEzPX3zDhuELkNw6gPuxacva66b8GcXCqDB8ntSs5TD",
  "key24": "23WGTuM7nhni13oD8DGnUwTTtNd4fCzpfaS36STfcvwxZsJzrA3Lk3z2Avwm7ft4J8WCY1KL7aUQb9kNmYQPHtjF",
  "key25": "UZNDxLxMEB5rxx4H2zHeKXhyiisN4UDuR8RamyDrorU7y4LbPD56Aw4m9dyv1cyU5wRHs9fg2uVKZ56G5DJiy6i",
  "key26": "5f68PKcszhx41j2WN1wmbE3DXeZko3y7CV26LnNLsHZk6kN2SaojyJ9ApdZYHhmpV9QXvbukaFg13yX2uazsBkGu",
  "key27": "26J8A2SWKZACrYuJv3qQRytDXNdgKJniHMgWpxsFMEHVkh9DYf4XKbixbJdBhZaXpCKhTRA9Fx42wCbgE3ChWxUE",
  "key28": "5QbTWy54BriqNUDpLWuDcVE4mygDdttoPJkUHMFWereRBejir592eMa8bcfPv5JVVMHobmSErUj7u8Xn7659rhA6"
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
