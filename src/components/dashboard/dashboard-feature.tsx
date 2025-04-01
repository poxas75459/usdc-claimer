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
    "4sU5bCgVmQUf8SGoaSoM6Yj3KqTFDZcDcYS8sZFEgvgSC7CCF9tCQU6otJyjNqKASoCkK3THATL94pfyQH91tYSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8VmMCKvt9HR3fN5VpbvPUCzcFY17zZ2DXgKe4u3fxtSKU9NX63hJ79fEJiRse7vx6DxtejjgNTpBg6aJy1ETLP",
  "key1": "4baopTqag9QvtPZQAJWAc3fSzziFbbWfd2Z5YacpiyGo6JqqbYxR6wrNVtpQndz7d7m2abn9KxkAam7R7QS4MPCP",
  "key2": "3oFUqr66TGAwHsuGavKZtmt6FyLNM6cWVNbzKGfha95w2PBVY2mZF3fvRUmarmnNUZSebuYoiLmM5sTX4H71rBid",
  "key3": "4CgbrLxTTKNdDMPgA49n5XUhSN1xZ4NvGfWjSFSRZfy8DWe6iVQLAYA2EEzgBNSG4G7jZRCr5dhhgGFsmhiGKfuq",
  "key4": "oRmwrBFL7P2mEjevZ5LGzG4RYJ4peYgiJhfMEAmpAtJvqHuuBvxPTopqEc8uN476wVuNAMR1mqr34XkKa54AZxY",
  "key5": "2BbAc2w4mRSyLfe7R7R171nZcazPn9QSBAXMJ7ybBr6kXLTbGXPuETrHSBn9jMRAyp9FYzBv9qZ9cQYzs3rKJX51",
  "key6": "2LFau5ctZ7V88D3DTijLt1hQY5AnKDAJE2QJirHnmGk8gDmKszLZdzwSYWi7VBff2LCw1kaYv6mBjpJWJQj4HYHr",
  "key7": "ikxynQNeYmr1rAwhrn9kRarjpxKkgPGUWfaeazR2pFBuP1uaAcB9UpDQKddLKG9G1aFPf8rsU9JTMbj2t5gekKQ",
  "key8": "P1nRMojzC9K9J88yxoMpLUTHti1ADHpSuy5QuzJgjfjmssUGT5VJ5Zw71eeYVX8iSY8LYyVNe6NEzkpjPKReabU",
  "key9": "4pXFdkhtCFWNhMvBXfb5jsdzHUszJGuzwt6yiZdMoZCcgHxGzCfQtUDEvKpcvdWgBnuVZv2Y68WJehrkRq5AiJYn",
  "key10": "4gNLRwPmwCnwNpJsmWdyCgUT1dvTU4Jmh4jYXihnDB4TTqmbgpon1uAmgjBXCBsMy38KWCMmFP4EqFCTUUdXbbdb",
  "key11": "354joHdJi1DtCX81XBhZSSQgKMswQFC2siqvfrct99zfqeA4JHQ6QYA1sYuttiYMAqVrSa6Jx2x6vddziZMhHBzR",
  "key12": "3NtgpWX1zoK3kLci4dt2Ddrhwztd8TPaiKJoP6GcWW1jbNbohtNkToUShfFtWXjLVjRHXnQFrtjKnW4XB5wdWDES",
  "key13": "4Ls58KeNpVQoosMNH1crL2Qsh75aD9DjnTZMVSccSwPmDWsJQekWYc9To8WfGtaDyDK4G3XDyVivWf3X4TxuNe95",
  "key14": "yNcuxRUZpzBLa9EqdWmoep26fHJpz4MoSv3tAcRF61Rjm1SHLiJt881Fw6MPGjm7heZHGj8X9mJe2xrBxPwHdu5",
  "key15": "3cybPT2aQZ3HxmB9ZxDMJ8iNqZxitqrTk73Rszor3WcNaHcfnkX5z6J7aJc3ckEM6ybpv74JtKL7E6ANgkGJ2Lqc",
  "key16": "2ETPzvVpBAwN8xpjLEsCZCasf6gh7GGoJqxpPq162ghznFT7gSq45V2m1N7g4NZ2BzSiJB9AJrwLW1NcJJUF2mWR",
  "key17": "5DCKiYp2ywgY7Q7DzqajyjLEsbXzhjdcdhDV73yQKpJs8s4NweUsG4PvwbdgAYKDRRLDf7asx4hp4t5bEYzy5q47",
  "key18": "5nsGCdQUquiCFe5jHsFfc6UqvkJsFCWjHs7UcbCk3QLRF4Qk5zxp3x7KyeFvMuAa6P51th2dhqjv8rDwbvmVJsZL",
  "key19": "3gKN6NNCynngVk9zaVVVCAhkwN4xdfmGeJcNRmcF9TsEvrMverpGnvq4aiEkXG4F4iJuSEpvc8v4ifRP8LmyPfbv",
  "key20": "3JTRYYmyTjpFddUBVYE1RF7L53VYA59N6scHtLT9CPL2wAWis3sYp51DsH9EJAzhytjirQRf1GVv4ui5G4xU61bz",
  "key21": "51dk4LDCKhmtf4GLqUPSeHAbVCc878kPyfb5tiU1UJthrJEbEor8jHYPYesMi126vjMzkNcCCTM3GpNT3xaTGeoG",
  "key22": "4BfvT89DPABzbnWP8wBpyERsgPqzGdGidse9QTFdEGo7XGPdmvw1oMx1ESn14HGDtaU63wzvPAN3bj7uVpLFkoKn",
  "key23": "4Yd4Xk625sVKjZ9cwRdveQNwQYXbS8s5QUbX4qsmWELEiTjFnqQfMdGyJf33aY9eZVbUSJvC9RS992vd9Lc8G7AE",
  "key24": "3wGVaF99YdyAsfwq5GsuKz6yYscpJV4HmG7ww9tNbVyxsncA6QmEemZjJZmqLUpXenemmqdevHzBEFnG1bKTLDUv",
  "key25": "2j9KTATNna8eQW988FQGVxbk9MBnB36vSypnitkPq1bqa5MjuZKiyuhQ2bRQ88A3KpawbG8FfxR6iCGQcHvyqLnP",
  "key26": "2a6GLCJ7z7eq8FhyTrEETcBfsdyn1BU5qGdfu1nJaU7jWeVFgjX4D5naqnDtkYrRm1zKCsWg5dXhSVppCHAwkffm",
  "key27": "4UpZqpxLHJzV4Z5BJUknbytKScZrWHATPRDmsNpEpfbMD584NxVJQrq2sXXoFATJBW2zJ9SdAbZ26cEAxHVhLDrx",
  "key28": "2HDXgQftwPYr1JYFatHZmRmB1sDuhBAYtfSRfn46HECVs3DFqDJNXNGH6k5Yv9rqB1z2a1U59a71gGNA5GZDJYFM",
  "key29": "5XkSwvmNjqXPGwpWvUzyvqK9YqEuGWJtXbWYd6de8ewqeYcHYh5JWSKfjbp3uQpp9AoGQgKaG4ihHABt6MJz8HJs",
  "key30": "26Y1VJR4m6vj2ovtB7ESghsmkV6Q2Yfw2bTw3RGCqzXyPmo5N3HjJVjqsqxE7wXb8gyYT8zFmiDuaHCkiEWTGhMS",
  "key31": "2nodLAPFnu7RXQtjLn4HTd4iQkYcBwZJDRvUvNzHQc8FL62KTpGU9Xtd2k5Di9W6GRTsyCRF4dSWoHYXXFY73W9P",
  "key32": "or16f7exoevH89iTnHaeBu19pRfgJ4eUqVPSAEx1Q48yMrrzLEvqARJ48JJWLFdFr8gAfpuce92xBAtFChAGS9n"
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
