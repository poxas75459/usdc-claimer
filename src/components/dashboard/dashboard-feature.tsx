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
    "FXYwWbuFTZwEGNkpT9V5hKFxYxb2jnsi1w2L71hrBkjobRkQcJL4fjJv6Vtr8TcsGRQKW3HDjd7BvEBH2VLMELf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mp1Rq3A19CvfWW9rYdFPUNcvhbXYZch2KFViGqvHBPKBrqaBBgrAkweKgDq98JvxpDY3TJhwrrqcJUnr7qTPZC8",
  "key1": "2RVJpeX5VWdoqpsBnhkUh9z3gRZTGEz8d6zUuJbnxQZNDmgbzvszmM4tvyNK6hTcxccomjVnk9fsQrZ4JsoSdCLP",
  "key2": "4JkLNNER3NrMLjFJqB7khCxZPASUzZfWTh9LDavnf3RNmRapAR8euRz3Rx7Ur7yVUHhmrpmd8RdJhysdSQWUYDgt",
  "key3": "5TxCjyoihikE4C8jcnCfJsdBbCSnsRFQ667U6hPp8d27Ua5thX2kaD8CbEDCZga2kxNwyd7vFme1KRGVcZRxurU7",
  "key4": "62krawSPt946xFsJqP5PpBvGsF719y4WnEnY7eL3VHsC4UpbYnEds1uvbzxQFyZqapEAwoJcsAQBtBHW4LLbtZEd",
  "key5": "4omNDBUJr2uj2ijngV6xSxU6yjNFUfiPSW2b2RKxyuw1XQkMcE8J2M8ZAtozo4rGBZB8LqyznPWaWimHxCnLgn99",
  "key6": "42gyABgCrBH6aXmKeUpjugXQUnyK2XRtMEvwaWmJ1eRg68ZSzkofNq5Fjj7z4EJhZgtkpU5Eg177MBZnyYyZ45gA",
  "key7": "5mY92aXpHVSqjohJrzhfoTmyphP22axsxm1eMoNhp31E7Stdwy86Mhs5dDuTPwGAjUkVWRpWJgkKwRD7YbyfdhhV",
  "key8": "6souXPNuJamDPpkHB9NgnjWVU3AQatyKA7Jtog4c7a8MbJpvXDy99T4H5rkM5yT1bwKnF2bQeYy4KmujZnTJ1aQ",
  "key9": "rxzYhdms8YCbWnk3efLC1V91LBnQHj9ZZ3VfE6rh2GzWMXtMyXsAGVjpvXXXG1ZqPVj4vxs21dL5s4geRzHi3NX",
  "key10": "39SQnCAd4nCPP9pBxf14NENsMKBouDRb99FZgHuptCTJJ77MgS1EBHs8ruKWrkJzk49Ym8RuaNtNMcd5TsjsMMMc",
  "key11": "2dNb8XkxPcCbyJhFUedWMXa8mdiBsfyf6e9J8J7mcSnga2NBapew15Jf3jea71xnYfiWtxpCTrp4hfCh1fKyiuvK",
  "key12": "Q8pbPhWQhwav4citY48muiyEp8wkRKjgAhcK986AjZFJViphB1S6TNEeHcn323Avrg5yVEncUsB7pz6UyPJie6d",
  "key13": "2AEKkchTStM6TcDABFAdnpx1SGNXW5KZ2tABWMDKyxk9vrbioBZhnuRXqGDgh17xWwLPQY4UeYibRzDUEBUkZ6Z1",
  "key14": "BS3N7zYt1nyhaSNqTDZYB4khPXJmKuFwaZhaiRm7JqBxrZ6CiKSCAAsoC1XkRxGzFMdfqQjsZ8AgT7x96daoQ7D",
  "key15": "49AxwMfRFzp1Mhbn7ZLW4i8KGesnX88HenBZKhVmfDBKgsi7s3F4GxiSQZWnGVXKySDZ8ZFJ1zui7Q8cmmHTXdXQ",
  "key16": "4GhgUaFdLzNWSLwtzeAKoMvaeg7zdrXJeH56AXXEcUuv6Hvm94oiQMEBZSHQw2vk4SZ5A5RndMkJDmDSU8WtNamV",
  "key17": "4dSTzKfc84M4NQzMrWsn5dJ6GACj9xXmKWBUV3krAbFYwEgrfG1x8XzKgfjVBJ6Zyj57puL7nTidrJqwvuz9Eo56",
  "key18": "p2c741Fx3PtZyCrB287p2VCo7MYByoAvdAFW8k4NCT26qrRTpNVjGKiVWFES6zb9tnjV2a16k2i4oPw3UrKSdv9",
  "key19": "XLztZRw1e6x7SqaMHCoXziRYLFS2wtnn2arU42UJJQFm1y6sTSHge4LFKGE2eiwLj52wFbQ8keBKaChR3qf8Q1m",
  "key20": "3SuG1oGBj4F4qGq45DA7eyYHvxJb5j6MpTEqLbgpQMJri3WjtUYBeiEVv4SHStLKgh4QtCN2hJEQsAKox7woiPKJ",
  "key21": "4S4RqeJgrnmQhjkjRTefyKQB5DKxgZntf4LzbHeeH88d7NjCo9PsyU1yLAkG47BiKTp1Ra5NGtJ97KCYq2bkK3eF",
  "key22": "2JxgsyMRumnZ6YJHrjFq3zTUzJRpPjrX1duk5cSfPFwwG1kQibrzmSHrL7pDb2qcy8JHRa7hqssGLkV8wdNeJpYv",
  "key23": "32UAHyQWCoihCtZg2Vvu5uqgnkte1A5USwHKkNQef7eyXWd9chzLmdJYJyy5DmZxJoCCzRsMAnCg8j4DnomiWEZf",
  "key24": "28fqY1VSHYN79kzFFhgjPv1ZEAguQNsvesgmquwyV3nitMq9YUYjULUhN8wLRSs8V8xVkSURyDiqTUSQ242dSpGp",
  "key25": "3b2xcLv3BzHHGn6o4mHphNBz1cccUn9e5FpVL5FsU1msqNfGAPe8U84DPhUjynFGGKdp3LrDmh3ukvKPXgVkVZ1e",
  "key26": "544BDv6nsMgJRveeCmSauS1FY1RwzpDuHnJoDMVAP7JHCWauuU59RovFfMAPKGbfVxwEYgFrTonTeJeH8UYea8pg",
  "key27": "2QJ6MMaXg3ZeDoiwsPdjfU6RYscJHyxEcnksMMVeKU5ZGtD7F552LFWtFvHXtacTxRBxfD7xidNbUq7982sZSARC",
  "key28": "5YkjpvZiYsmWdTagSXezVeCfVdLiFsC5RPGQRVoqXd7qVYdDqiUnGbs4mroRw9Jqu5L9rK4u4XgTGnyJUBDfmWtn"
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
