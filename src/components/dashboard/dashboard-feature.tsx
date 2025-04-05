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
    "2Mx3aB1piHBjFiJgZocps1RiVKdmq3A4DNc3PbroBritjsvHBUXPXazfEkSs14dPJPrkzVTcdRbwXZe62MA9ki3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kK3Fjg4T1KGbUVjBvSmA31xGQap55Vet6ESRCyEFZYW8ZMWRTYyVfY4UZFTpPunqy1ETyMPN6jLEfASuyjnkvXV",
  "key1": "4y6euerwAzGEUYHY3T1GAEdpdR74rqPBLyWoUJFSdJcnzknjy9WPzvQh2pob7urNAy4zBjLszPuk4dR3XYXYx8JK",
  "key2": "5CV4WT2JwXqD3qCxDX53zcnjqGqJKZExQXacmNDkSAeYHyfCNfEesMrC3kAh8AcV9RPTDjt3JWgLnRWTQXjKK6Rj",
  "key3": "BbUE4xvvxwTQf3nKrGGpHiv6WzpZDiGMmHAngZ3pHTJbSBksnzjELdFufAZTsBgW3LHE5a5BdqSL7Q4yVDZDJLS",
  "key4": "2CjPZ2LfGvi2m6piCL5gUdaBZwdr2zzp4dRrEaxspadNauJ4PiA73gP3y37MJrzz41vHYyMe85mKZxFsWt2hPWd7",
  "key5": "ssP5uuuS1X3PxSoykYE5iAjZmZTsjBgoQJREcvWUEf6kQ1Xw6LSjuTuVV7mivA5WvADYJocSWqxAYwE8Rsh3Rnk",
  "key6": "23MwU92WJwEvUpe66Ey4k5P5G9yNJCNdP3RSBZzMUahGrDo4dC1SieA5F2EWEXFbR3Gyp6qhtAGMj2tvMaQMPYoM",
  "key7": "37GGNF9Wh1LJVFxQd2CJeQG6yxqaqU4LBAdoY3AjhvRXP4DFfNxYML441oA23YcuQmFf7jjFostACL6FwRmHHDrp",
  "key8": "2BCeDLWbAnV4kvayWhfmzvbnYLL3817mdykpzKwaBTvEGHLNrptVcQmsff35tEY1P6igu4VwVfaiQuJFSGxogbxn",
  "key9": "jf3NTbGEXsA4sTfaPc3WfHnYc8KZDKLWGuEcA41HhkgfoHY2zEnuUjpafGSCnHzNz6gtkN81s77REtJPq5ossfG",
  "key10": "5ZHLYoXZRq92jmaEbX9jdviRQDkmr4W6ySvysJJ89oK9nfiBw3TM3d6WoDvviaJW6kj6MhTJoFxN4AsiUvgJXFmd",
  "key11": "v7QdtmQ9uAoynUArAeYGx48yEap16xJa7c7PtDrXcFw2UEMmCSc1yXwzneUGB9b214W1thzsGtanzKTw8kkmMap",
  "key12": "CGZVRWMxYN5EuqAvsdJgdkW3GzWPTkJncTXXMaysWdkWMyM9sMKfiG5sCHPncumgdN9ArWDAL4mSX6BNv1tJgML",
  "key13": "43PFpZUZEnVJ7tXBoGPijvyBGZM8MXQC3eNKpYXHEF6dD1du4nKDcVkvpnSLVSbCRCrRPAcDz9HLyK5Ft4LCurvZ",
  "key14": "5ShqnRaiddmtQLu9tyrfK2pVti9EkB2xRkTb33qXDP1dBKCTM38XRRqv3a9s9TuDhvgoSpfXKD7THEA6Zi73ggXq",
  "key15": "5YiKvf59Cv9qZvjJ4AVATKdNfL3CcmrBCqDpXUWbMi5GFGiZJqP8Wg4DgDVFoa4Uk7Gi74vsoj4detC7k4MDpmz3",
  "key16": "YoK72x6EPPMYtaCipPdvWUv1ouNnWaAyJiczi5QniPoygdtoSFctmoViP4fAs12KSvUxRHh7HaXzHiNYcJ8h98A",
  "key17": "2nU3tbzjU1XECyihgaaM7zCSZXwhaXv8FDuVtE7gZtTnai9d7k6r6oviPtQC5Cn9KZubyPd32kC9RcfWpbbVz8bt",
  "key18": "3FAax8wgH26qhu7jphpuqLLK6atYAK3np8ykRAwgEhPAtmdAB75wzSF6eJprzZf6KYbaaCkntNogaUs1JWBB7Mit",
  "key19": "QqPprUZgXkyofowi3HGa5WSRk2uxyZ4YJqLEu3uUA2pKCYfqCA98iC5qhBJE29db8AyXef6CtPqKnoGP2pPD4zy",
  "key20": "5i5k9VhBu4UV2dgNxdzvLpveEYuoSJFu5pGmMCXKz69ELEMRHDid2fAPp2DRvssPteS4gP6JuoJ3TihsUfMRPEot",
  "key21": "52nbz3crzBTRcshyzVk1at5yPrzdAqJYWveydQyHYWGkfMV4zrJGXhkKwENzf85BeDoG6KNVzrMCXKbtmLPN9HUv",
  "key22": "2KifATQew8QWHdjQuWwHD5YEHrzMNwGFz3pH1Sh5CMwsBatViw9dv4eUv49YfhAr7bv1SjJkRYuFXDoYiziCRm9D",
  "key23": "2q6KyLFQ1eAfJRWzZLYUCWsZj8UQ9S5t99LGnKBemREmGmTdtEoibeHWp5EnRg8GmG6MG5aVXGfhYfqSd4LuQDdY",
  "key24": "wrBnqvGutUxAMGgc3z2eM53QYWVj7S95koimTfGwwKn9GU7akBn9Dae73cSrM9RjujhcyeGVqTLzdNj8cNtdJP8",
  "key25": "39jhbk8dNVCS7DAsPcZcxpxm2HKkaZmyxwQcr4jpL3gA26AKKjjTNmfEXsbDsBXpm9LbRWd1x2uom36CmiBj5rjJ",
  "key26": "5ETVxcayQAY2thNT4BwZ8vVqbxiqBekmGncfSN7WG5wvmBJWfgMzGPmgkAB2PxjhYPGRH6JGNthiwK76cWdAEjsy",
  "key27": "5XXCmwFmrKV2dDJB38vc5gPgD5q7dLgciEvSaxRq5fYmSWPRg3WYTbN4krTnycdQ6ssRLvtRzJmkS6gqhLsJVwvg",
  "key28": "5WvTB9453YdpGFcUf6SDn7Q1ExtmLjMBYEkp7EX51UUKhiLQ3g1ZWYZMHdBH5SoyfPoGBhKFVgdfD2hiXEBMhSz8",
  "key29": "1vRNfTfJBGznJJ7KqNc47C8xVFh1SxxzARVDwmXpp3AWrqkqem7jZiE43TSowVjo3WXJZCNdBjF9NETViSgDDPv",
  "key30": "5xaFix9VNWfMxEPzFXeNYpt8qK8wUrZGAqEV6FzYx1Vx7AY6nAL6meGtNsFn5Q3gNbVV1W9CzEbMcFw47UJ4DLTF",
  "key31": "2pkBU7ZtHd7NsyxJ3iDjxxJmHzWhFjciyoLDWiW8xHmyRjmM5kFixNy6KUaiK5eme6pe9nVstyfq2wfdUWKjtEi5",
  "key32": "5nDie8oT8d1RP27TYkUSTcB99MgC1pT7Z1Xva7PyVLPc97BZaVVZoFm1kcYwthCDmk2U5ukNV15EUWXW2KRkANs4",
  "key33": "34KHQRgVn5iP49hJrcK6MCHvPQWUnrq47dpQZiigXQ6t3Lbvhk9c6Vs9t1BzwAK8R8HEGqX4Fa2r95txwukDDDyK",
  "key34": "57TsG2pXo2yQHiw9ZVL9pRu7s5tU96NficQofA4tugEc4b39KtRi8bmmK7BQuzybyULnhqUu9xhoofHBBau3G7zi",
  "key35": "2H2vYTcw8SGwxAABKc7eM2jLdAkS8ohs2jq7jviWnzJGEBYr5aT2bvkk1f8iT4MKc6HErmYFch6NcBwGJuRwFJpX",
  "key36": "5yJ3rftXJyBHjYGWdU1KCBzscNujuHdYFCwJv45YXT2ctZWnLNrB52fmoxQrUgK3QfTeabU4wEFwkfzqHuVKRAFj",
  "key37": "2VtQybtbJrj3nqRGuKnYf7EQjiibxprFpjCEuLhVpuQmdHkmTMxKGyS9WHpvz1f39jKAMLUD3etua84N5AqpvkNa",
  "key38": "4gtvHWFnvgmPmVdrPrtW4UQZmVxoUYiM6C8Qo2p3jxCYuVtbgPSx6JpLFwXwEDzZdN3a5A1awtBHABxZ1Fwch7qy",
  "key39": "4Gjy58XorPCcC5FZA2isAXUUdonj6fdVJ1hzeEq1kftT55SnPfWCDHJKVExtxDDduHqwrP23yz3akUgcX2QzCiD1",
  "key40": "6154ZZWzUV1VG5RBragTeqTH2iZnUwYxZxbtfzLvX9V1gpoLH5D5G493EGBJncxgQCqatieivrBjYuHCBQGMjk2C",
  "key41": "4NTkKAqUeuFSMaSoix1eQ2H6pmWCNqxojvZdi8bx5zhQhmttH3VeYUDfYNcM9qen8icx9bX1tnTy5SufPJiXKeMa",
  "key42": "2d2NefLxqhyr5rqz9pGygRes47JQdidmFJP8Whwiyw9KNhwYdRZh3CdygiV1cKFVj4jtpCXuDPXgCzwwD2GKo3sp",
  "key43": "279rbKRANYvcEfWvRzrASaDvXtxSPWKr1GtKNUEud8Sbb7QZT54SbLMbCozm3w1vfqYFTbcYgpV4J6YRSvwp6wrq",
  "key44": "5z6XDi5m5nnBCrPCVwPY5VZkHfiNEw6GbuXfGtSBZ3Da6Xs8qJLqin6HFSaN8YFC8iKGqmxVDquDtU4Qc5Sh5aE2",
  "key45": "64hBk49vsk1nds37kcDdzKu5cV7mNWFG2DcAnfPZDEUXf5tKtxRNfRrkXp4JmQhhRibjKynTdQHc2ypE9NGn5jXR"
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
