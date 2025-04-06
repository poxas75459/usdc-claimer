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
    "5yfVv69cnvvg1SaY9paB8Kzzo3RBw5A3euBWk8Y1nRPE4BZqPuSeYkoK1GCowu2mL7E83ujzjHBhmL8XYsLzKMgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPjdqVZ17WchmYxiAWm9cdS4FoXBytADptMtAH77PPHVdEvSpZQ2chSGwRwR7Q9NycfcwiJmXbs8rVva7qFLNeg",
  "key1": "3WRtJUWrZ2vWRSX7M8pzpE6bnFGX2UcwQchQbKwEn63bhTqsdJeGE7cSDhPNy9dbCc68CU3gtdPiB4J6psvBDM9L",
  "key2": "3EQc6RTzsS67yNQ2JdR2akDEs1LYuiawBQrbxD5qZecJCBZJxvc7ofXo8gspLASxjcep8XmpTiMexH6AJoEXB8mr",
  "key3": "2AFi2Z7V3U8wiFvf9N53snr8YBsoFqEW53uKjnnHY1xTjUBNL6N1UYktbLtbDe29NuDcNkLHACVeBf8hwQnprYPL",
  "key4": "35dki6XAFfweKbiSwoxo7wRmBy4mvsZARdqKUMW8zME5FpwRj4PWQUBvzftsVkcp2KhJAD2UdkeT8uPdjXCBf168",
  "key5": "45AkCfpz9ybSpayjSpaRU4cGDX3PMGi6ovDFDrzu2b3qZ3JPhkh7wyvaJamfAK9K94mtAK7SkrFbisEWKWbSmUmr",
  "key6": "44T6ZxZmUuMKSYRRT4vykjyvW6SVtkBr4DqZ2tZQr3B6hqsmUuUd2vStzkGZJ4LasHkHCzcuLVSyXjqrondpLzuR",
  "key7": "Ey2Zq8KJUmmpFkAHw5DihCtLsJpyEpvwEMTiZ4pBKmM95UXEnvTQNeYjV7rxLgpUR4ZKyujQtdnPqk9kd5aWeNJ",
  "key8": "daZ3yQupKRye9YjHa2WwULUn2RJY7DpztgcFALxASbTDyjR2E4L1dcw2Nt2di7jcVbHPJAVTs39tpawtWTvQR74",
  "key9": "Lfuj5on2WMZxLnzM158HTV3kd1rXHBL7Vtm7Wmw27Fbt8m5XeRYbeohEuoEYUXyb9iEnu3vXeMMBKsT7sfPGQTZ",
  "key10": "4Mm8Qu7EHQmsfeAKLwHbNdwhR6TGVo1VganoLtVPjCryaaWYTC2GmXE66jJvxyLW5dR18PwDSNVvUzHxQxNBtotK",
  "key11": "5xqLYxBPihXyMDxKCVVkLVago75yyox8MMmLc35XHokJryB2NCHCN198oqDs3sP544UU1XAPKkESf1B4BzqpcjiE",
  "key12": "3WUnef3ZXaWikLKTdExDgzYfUojYHZ8YCYjZsvGbsvxKsh3ruhqWvU92VGv9n1h7cxTXy4Sd3LX4GViZok3p7BXs",
  "key13": "3W278ZdLN3cL3cidppmqyAAUjkegy6gALSZuxUQFAiEbZASoMH4h8cZEw5dMP7vXwyXGyxuCCBvMfg5exoLVrDsV",
  "key14": "47zRBd6mGP3R4nccCVAJPdLHSjLFHRWmKvEjwgxyrqNFcFLvUhHWQGdXeJ3hHB9RhC2Zu6NbFKwGsYjFzikZLjfd",
  "key15": "2uGLiTnqK6NvViwbMZruTcRqrckQ65RQA896W7Ayn54YzyB1oR8C4CZAxH1FBwX8pLmjp5XmBgnen2NXTUWJ3y3q",
  "key16": "3xeiJ6ups1oFGDvoeR116uNpQ2GNgoUtDriftZXd1YqtX3XJfdJUkrennwgrhWVLGbecqqMYMjXJFi9meoGvJtBT",
  "key17": "45jtmhV9aeXRFWtWDrYKgcyqZ93mbP9jEhfzR77iva9XcuUbJ5bZNqJqdEmo6yNF2mxroHvU2eFrJyXUJcC7DSKV",
  "key18": "2a4ZtpuRLCVxmRuP2PHjWksU3yqCRgPD4m5TUyiiD8AhtjrZQNqEL17ovpsTLttNkUS6C3LX9AJi8stjFaP8MbLa",
  "key19": "SbQ2LWHNqQimabeyj2A47znCpNWPCDHAFuFni4aEASJX4Kf659ZRceaeV2mM5ecD8a7MFbDW2FmLKS5b7ZraXMU",
  "key20": "AWYq5tL4fX31Nwmy3GnHncVrWKPyA5bfRDLyHqVMdwbH3nedpniC2EHdWbVhfXyWGfjySAAAYq2VNRVYk7bJpCF",
  "key21": "5uqTustwQ9cRGRK2LWiCDQtaQZoRMfjWfoBiDnwomGpKYvauBDvw784ZevLh42TyjKAhS9knqv9WMGbtRKoqS9pN",
  "key22": "2DKmr8ENEAGJtqypa43euTRgWpw4fJUHBEg8y6uwTfRrD9qmuiTZQSxQRQDqfT8W63CX4aRndGzTZmC54HDS5bsT",
  "key23": "3UnEvCErdW1TuCZ1Dr1keysgAKRJEDqqabuLZ8rdaqfnKfY1JaduB1VZ69S2xoVdUghb9WmL22SfBjssiSWAWRvh",
  "key24": "2UQizottKsCsMfVm4dCsptgfP2Umz5kvxMbEtRSn55RrWtReSaMJ6sAyCJHD6124qrHsZgbZGVU1c6RVkcxbDmp2",
  "key25": "547fuMPDgmGenbVeeW91L7cu2nBYe1AH4aLYcxJnj3mAzBmwbNTuxgbECiBamnGLLrrE5Z5sf4z6s1uc9iPheepJ",
  "key26": "2dmM9RjVtxSQyue2MUb2ds9hRDbippJajA3k3kgtfbtmzC1kt2e1QpfqBWrNF3MGT2CCYRytAQehGPUDhLLy1kwM",
  "key27": "2BznCJ6Ru5zdYh4gLf4MNZH5JJATva1kw6esPtEKSaMQZTrqZ4EhcSkN5TnYVwUThBuoVRjAumWs8WeF4TA1uuHR",
  "key28": "66EdPjj4prR8eWUhbJ2c7opij5Wo9zm1w9H8HyQCLV69117744aWkXpcxbwkFW6aKUAQ8sNALe9et4uoPpzbVTxH",
  "key29": "4R3zPGn3wYATtxU1mL7kaY2uXUjiX1SB3BRNsYc1qVK7Zq9ZFMVrQda7CJERSFeXZfP4H1X6ADwxxB7t3dtFM9yf",
  "key30": "5iEhuGWziu8HSQwkDiVUyzi5anVRGv5pP3zrfiY3wLpMHkWdi8n8gUottiZCX6ChfHnd4YeG7qd4CA13BD4uWcPH",
  "key31": "2tiKsaf3DFTyfPf61yodEoEocHGWPPayzvLuYaVvXVSASpjPNmh7uFzyvYqfbgBmVeDKS6JNsnoB1n3KGTd3Dh8e",
  "key32": "2tJ48NnGGTavwvMMwxEkHnURmLrC3HN56y9LrrGKNMzQxH5jteZ8EX2iJUBkFoQLdpmbZSKD61hokvdjkBqqq9ty",
  "key33": "3MQhhx7m4BJGyjgUVRADM4U42YwhvPMyH7EMvJym95zwUs5RNMD5Y2FPuZxnV5AeQELUpHieRqi3zYGkApotmcbW",
  "key34": "xFn9KM1AoXGX121wYnwN3knoNC2UDfrjjcWwZzgW2QQp2KGgAWKGBXdtHt1w7iutfuJWS6F7qFK2SQnCTqXNe5x",
  "key35": "5a7Yf1Y87QnnDb57zpLjdv6JC2hvcsPEkE7BwtQHLfy2YyQHenLQZ4Dhav3WKD9Z9ez6FuCDSMWhaf1tuBn14cye",
  "key36": "43oEbeCmNJHqVAZZ1hFTVGp1KXej3MJoY4jf2rNonMmzmx6S4Aq5ifLwDwo4WmqfGcSaM8meGJjwTQCybdPZivSp",
  "key37": "4vr8SPwJK8ntUdLYmzXBKALaoHVtKpJPEm4R6R4so1wj9DJcrLtwhJX7odkaGCdDcWUGDDGhfBi42ceo1SaogoSy",
  "key38": "4yRk28TGknQpg9SvJCWsjfV4opQyedj8DCZaL5ThvSPLkPUTvEZVg8suqKipTrxNDCSe4vJmzPDoEf3tzjcrPKcb",
  "key39": "5MmZnQouAacqT5YhGk8Sfx2NoMHrzqxxh6mSByqcqMmhXKiPakrTmueKC1FUj9g2RC248AwHcBYUQqZDs11zyZk6"
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
