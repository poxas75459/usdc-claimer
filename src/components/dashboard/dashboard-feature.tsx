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
    "prjKVhbth6DPeVQrpRQFhCWSkoY6h9PLP7qQGCaCRNXB23ZEmzV56tKxsKhQmKBadmvrQDKjg3Y8YHCJyQFTDAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGRD7HA2sw2a1CVU8wjA6wisP8B5r8yRpAfrCAM8LfCwC1VfmYzGsen5cLorp6NYsZvAaADeciiR9rujuFf5vsn",
  "key1": "jnsUNgZVkRCRxtpMRnZAEAmc4LGycqpCUAF47LaVaqiVKQJhUdqbHHmRmzRgY3HFAUR47HFCXMastNFWHV1Phjv",
  "key2": "4ToHEeWgrNLjkp9UZbPhLuuLcfRuXT37kKuN8UbDpH5YLj8RYLZC1pkQg73RDJFEz9hCTi1rhe8FNAuBLxQNGZdj",
  "key3": "4c1bqzNvBcGEHrKWbFe7jxqCyWyYcjW28VeA4qgXkNHZZv1JDts2ykfwX1ACKUNMgVebNqatRpr51SQPRBHRGhCb",
  "key4": "5cH7omK9MfaKKC8Ym2Ux4YKbwjL8Nwc37J1anrFQN8JFqV9mH6Wt5BovpHwiR5RsJ84B7T7DQggt8GKQ4fnPeCXn",
  "key5": "3G4j1DPGwWr4nxrdh3N6ZTBrcrL1GePdzLZGzbVbQmFbqAuHYYCHpkxUwCm6HZZNtwrN1KvrgYr6WcHmPkwTbsL6",
  "key6": "5StRXoQRPmLwcN6iFFZD8vvnxkucguRxFmd2yWVk3ksGQRnsvAi3MLdP2ePJwXKtbMkFdNqZJLnSuRGLSRaLQxAM",
  "key7": "W1FJjGZow53RiUKJf2QBJsu9pMWXz9iHR1w2t2A7oecX1ZZ2ZeCd3Kqg4GvXrAWvKAuK5S9JRk8nZeNp6ZgT8Qn",
  "key8": "2d51SRtyb5AwSTJcFNmNRubxYiCGVYJJyX5SfFy3GXNG6zB6bTrvexTywz4yQ57jwTkSNXPZfGCreGLwej8tCykH",
  "key9": "3TrGfwkswBctYkJWbPH6q57YnfVMWMUtGge39Mnvf15sHhy84C7A7R7Cm8uFEWV5iKcPywmMXXzHKrHtUSuV4zJe",
  "key10": "3R6ufxACMLUfc2iXLKzBsvVTdvTxJ4QRYPC814PjjDUXLgW2MwH7XBeYdz19CB21EiTfA5WR3zKT8nXuV4tGA9Kd",
  "key11": "3i1jXHhC4NTZawwvgoouU5LZT22QwNszoENzfSqSqbr6dZ2MmYJcM4DDqASK4SXLSSHP6p1jWE4XQSvVrbjGebqZ",
  "key12": "2gBjC48mVHgScmuoCniaAS1vPhPKQy43peKp2wquPuhzRDrhjkhcDHP29sAR2xK1UvApbW32f1nvxpjqcd67JqrW",
  "key13": "5M6Hz8n5VekjrHWLxxxhi4N2rGJV6xhZpKWqzr4yi8Mb4Puzn1TDZvXEa1r2bzJjZwNHykkVk1k9KFiuJBZDSMzq",
  "key14": "45eoVm1XMe9yJS1YgZykwVwZgrCBZbwyPiSAc9P5sPge4KRCgWpvS3S2yAcUQRr8qoaM5GR1AajPKETJrFQRzEPn",
  "key15": "2MzY4y6nzY2BQ4JZtZuS3LmfmynUziZWJWxAqXCFWgK2qUVjHThg2H25XT5bX1FcZGmgoHhD8NywZzyxDmhKE2RE",
  "key16": "2J2kEvHzJcHMzFiPDpo9GnbGt2t6hiHGQZ8W57qfAdsyTk8F2rnCb11U5DjMrext5SG7B2ez39gTvW3fEzfLTXv9",
  "key17": "65WmFH5vLAmrYzYhbpLWWeApCrXYjx7yyyhJfG1bAHSNUsWfhCf61tavTCuPYYshBWXUgyTZ55WPyT6J1AazKbRa",
  "key18": "4CnYjomBUcb2oYuTzoNy1mcWKrqK4awbHfjzWxCHfMz7eQU1fGhBFgC3hyXiH6RQbrHMj8SzYokyPVkk9iesth2J",
  "key19": "bWGjMiXjwVensDrrYZgLf53q6rtjSiwUYLzWhi2KqEWp4M8otrqM15cfWd84nPnx9xgDjPcSmrEyHvD32sTTsdp",
  "key20": "22iLoxve9pLoCLnzjMeCDLzifr9bzxV6xUtMuSqV2Wnf3J2UUmLscdYwcuseDS5dhcoyjYSzd4y5GnHjvkvE46sr",
  "key21": "42bAuQDMABmd5TMbVVL7NQHH9DB5KG5xpRKpLLtRoYSxyFvGGVkVWjyrsXjBaj6pMKPVXMTK9dAcWRuA82xKN2zy",
  "key22": "2XVKMCp7hA7URao6ccobJykWFhgBsHi4RqByHx3gTTobrqePNzQRixFwnmjAwRPeovFwhwmKEf4CyXUdKDDkpwAN",
  "key23": "48DKikjDSri74WdgKA2PDdKFYBhJf17qhKC7zskxB8eCNaddE2xEWPZrBLqfJJoGfUsvQPkUfG6DA23vC5Gy9Pup",
  "key24": "4D58z1HDy5TfoFSjogMKddFkSWga7yTxkLpKQUyK3GFMMEaPCL9686j9J48HbU3Y8voPP7GuL8qgJSJFiWb9WdEE",
  "key25": "2UjFJzz18LxLQg9qGgWnb6oHxgaGahrSLRDtAcdwQZnG4srYpRXjRcFeio8dtWDZgQ3SfdsjmkhwpKmPBmCik7ER",
  "key26": "3KGMQhdfL8Gd6DDhfmUtp94gC3nozS2VwKycX4JysPpAv5MSigX1xaiBA4ftcR4NzY2iEAQmeebVxSU6zMYmxxyx",
  "key27": "2uwnMT9aUSEfvMLxBV8fYWWBeRXEgBjt28UYNy9jt6LtEwCqr7dHLhh5kBhVwhMZZ23FkTwHKsaiw848qmaEmZNM",
  "key28": "5xScHjzVFnomp6y79Qpjqid4nw7e9fajq9XhPuK22sSAKFw7D4qomZ7Sv1AaD7iUWqqgJDf2rSbuS87SEFuSnNBr",
  "key29": "5y2487dpepxUKaYjYwgxT1FXFsycBNexpCK5Zq7gr18wrmRAfbD616HkjQv3XeQhJHdUaZQJvhd5SmfDLqmpVZkL",
  "key30": "xZPExH9LVmqowuKYGRLKAiuRdyn31MSfbK6kkCi2sg2Jv5aeRj8jQRwbPZX13eBE8GYdQQz2V559gTgBMiQPHyP",
  "key31": "Pxm1QwQUv9wW7zofoTN3UwCHPa1mvKNbu8NbrYoG3qBKZgvTju3Wyau4SH6serUXqVgAfY5X4Wk6LsvhbAz3G7f",
  "key32": "4153JBVzbrJoVkPscMed1cxpYw9qa71gLCw523qX7dgAU8UUCA28RoLKky2UBF335zBnZu2k68jZ8mzkTH7syg9E",
  "key33": "2pTfDEASbn6uuwqRDt7VDjhh7WWCkCBmmgkLadFsocNbBAzgPrW9zUVJWH5MNpTfKsA5xip9J4Hp6UNTQ4aokEMG",
  "key34": "U8HpPQF1foj3NUzYK9y69TiX6PQqWBtq6N2UA8NX6scezdkz1ECHXY9GP7SzVCfhNJ8pxZm749NQYHNQZq8WTSC",
  "key35": "66RPWPoKU5bss86Bp7SDBbNPbc91UwbjzZp4zj2zM2sTYV9SuhSWtb5j9VJZyFbWUsavC8236bGsMzwNuF4RvZXQ",
  "key36": "5NemMbT1ugxLmvkfcEom4iBettUKyJ21DwM2Bu4sRfkTgK4TyMzDwqmjSJRa5cChWqac1zTrPNxt1wrgJRykWVn7",
  "key37": "Ba37TZxYkCbRjNuvC4ZGcMjhD1HAwst7Wmisr9mD2M8WHvg1cDsHLuw2cjPBGEYDZAHpU7rqFTj4tZfNPmt5fyF",
  "key38": "4VE7P5oLady9symWCqeeM5TQRntpxLe9c4YuyvtaiAdfbEf54v7giXmS9F9a8p3wuL7xBSedc83YdUPDx9K99cWZ",
  "key39": "4fTMizuu7Huv67CdPhooUuDkA3K3wRJCzxxvA6guabLRm3MKLjzC1RATE6APTZyM5Yv2uogd9rZmH7axMNr7hLhf",
  "key40": "cef4fCg9GxLbQHv5XL722jaQf4VacDZw9i4joEFZQXqpacxrzizjn8EW5oTDTX9f258bkn5SiorEdg9fVecxF4m",
  "key41": "3RRG3eqwdgoS5mMgw49iMX87f6xgvLKSFQJwWEM8QfNrDpsnCekJZRg15LvMKx19ZctABKAmZAN8Htua1oKxB98L",
  "key42": "2A16PTWCz91mNsR6N3F3cS1NXJy4KNzbaVgPZkuH9bS3o12G55RCZDNQARQtwygnvnF2PcwQBg81uVCSxZW5wjCB",
  "key43": "4fZthEx9QvwwzCBEZkPUNPKRXD2ZypuJk4yRYQoabSDCDFCW3PuSfovk5LHdm2cYCKiJqb6wksNpbSU6SiE3LtEu",
  "key44": "26t6S9fMWbfKeuD7isuXZQSSFTsEgrDZRRUWECzWmafvJxYn6h5eyQ3tFhTTLvEVSHyFEAyhAwYqNZz2Y5fzW5Ny",
  "key45": "24vLW7o6EvZaS3Do1gqfWkbVE4ve7bkXTbYx6gQobLuUp9cq6FX4pttsdtt9RtZvYKUu1fFUKpg2TZ9mPTuQ1xLY"
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
