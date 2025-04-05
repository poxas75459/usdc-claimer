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
    "5fL7uRX6gbAGvYZdzLQEvP2FfDT6tDS8ti9tWo5xHiaLAaFPxcHiTtk7bwudaPB84nNh9GrtHkhDD7ifiYdZA8p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3P9a3mYavSRuvSgPCtFgFrLPntRopDGmVKesYuoSXXB2A6BFu1BekCw4j3cxpFNhoCWhS7ruzPMrCex9c4rrZG",
  "key1": "XhV9XQg2skvRDnJsXSuSbx28D55G5CaYvYHU3qz1W8jUyybxuPZX3THQBjkxiv4b3CcefT6qsT17t2rWduSsrWn",
  "key2": "4h3HTRDYQHsSJceztUptsXx4kRXeH4BMU2xaNEx3qbyJKgWCtoSeQ8wrBRCqvytA9LU5i9ZrNLoda5rN7ZcgU5W2",
  "key3": "5Dz3REi4cL9vXv1jEHGtpFFgFwT8qRpG6hSXHR4PJQ5SJSURvtNMw3JBHPq1w4TE5rF8rEfJY48oR8wS9otno9R3",
  "key4": "5JBKEQmBapqqKijESS6vBWNXaYgG4iNbPXL9369pPY9NHukomoeaex9FS72RYQSr8VNg3iCfWUW7JEHVYxiGahL8",
  "key5": "4wMpKLYWULUZjSVHrNTNXLe3RP7TcLYsKpAgwinzQDk9pDG67FtLGX7Qffcz9ZdyrctHCqnWzxyitzco1pr9mHXU",
  "key6": "4s1TtwSSYqfQsa8MoxaB64GgkEihcV8z1WDVuC2UtVCNi9V64Zh73GW4i8UEiTjrdbVN4eZbxAymNUj8NZDurKk3",
  "key7": "25RTDrV3dPh1e8tTr47FRyJArvzn9Nem6H5BNSm4K9kPPL37A86ajdYNFMvUnPLpN86Twworady2byh3z41yNNDd",
  "key8": "Lw3QUn15kHWoXS5c6MdY6hmZwTAh4E77rh1Cyz91FFHBLzvUWTJoBaQqgzDJd9ErLGhB4YEW3Eqndumzmya5Acs",
  "key9": "5MmZfNQpvtYB8uNieQ96fMPUf3UHGUVnvhjtZcnWDERjkmdbhEHR3BZA2QGAQuky1ofpVJxRXQ6m5WXCRiPDXh6Q",
  "key10": "5P8DuKXfdRNp8PGm3hLDbLvcH4CTTojQAMvd2FGyvocmaNiLov7n1GWEyv3ENJbHpmFpcRknBhJZqb2NneiziEc4",
  "key11": "229VesYRAncCuUoupFsxNXhpTxGQnGPH1ueDgUrTPga4ir1s6vmYcQtfNXaL6KaxTgaPZ6nW2Ski3qX34ydEfgCg",
  "key12": "5FhD7NQ5ksnRBNQuSzPtEF8KGNUqzKToAmC1QQsbqbiNHpRWMUEBwuE3dDdu1jQbuavcCngPUC6jKDxk5heU7oiD",
  "key13": "3ZoWnh71G6i63mawX1Fjn3x38EaNpcuAwnyqqAPw666ssy8aNzVi5jA4R8psrBxLnTNrdntXyovAgMmAzQzFuSkz",
  "key14": "QHKSgcJGEosvjZ5SAKDBujecuimua1hemonA5JMrUd4kCJcPavSVBLcaFrTfJj53twW4B6oSdE2LFJnLCiQdiVg",
  "key15": "5t5drqUjB1QJR22mBe8nYBKeCGChfdt2dkJJFsVVx7ySE9xZVBQVrQYhsXJuLdPCXGpbbgXjgBpbPsUJH5iLYL8h",
  "key16": "4Bva2Mpx8e3gMCvEGQ9iBpiBGeJFXvncVZFA32RaFXwdXnQr17qU8qvujjjqStxNcfkgk5N6muZW9GWTr5swupke",
  "key17": "4pZkFmrZ7zvBiiQBzQUYq7oRY14MfVs99ZpRUM8gLBPRwe948EaGYACQX51ojD4yGuvoBmvKKeXU7KhLQxxrbfHL",
  "key18": "4TnqQwxC3ugedc8EsGXoxSKYgVtTnVvbjDb9s3tc9ue4FfRZAusfxBj6M84yK7p2zBgFEVc8tDDVLgwaupmHXReC",
  "key19": "53CtAiJnV6rC6PFtCu6EtCQn23AaPiP5tLuTPrTB9vqULKa1L2WXhHFZG4TqBaLjJc2nY2kV7xTnkLy2zYetVAjL",
  "key20": "4vqdjjfTvcXts5UgAqbF8SJRzqoQsdwnRwSTrVqnghTRnSHyDE1RAPDQatM8pTH5bZnydZwwcgLD95cxWPDuy6iB",
  "key21": "A9yJdRe7rrdyWjCxKpfNxoyHFL4CUsWuo2C5cHmbCsL2axMwrjjA9qVXrQmmjcTSJsjLCdYwfgBQGMkNyFyZjvg",
  "key22": "5JWZq8tPUeR46vrEcjtneeHfYj9XnNKPL96UNuvKRZmTsZ4WhQ9bu9K9u9xRT8A7DMjh8HnsA2cqU7ptxPDAo5H9",
  "key23": "2fuDAvpeKz1i3d8YhyTeHi9BqjJetHq5Qz5FeSaV7meJud16MeRFedtYs7n1CwejSHmSmEfiJov7CvAZyPxrec9q",
  "key24": "btnH4zqeXj3PBz8c4vqj4iZvENGN1exL2eEw4G3CCbaSrjVpMNEbz347iS1xLUTcsxRmTWvfa9AfvPgZQPPQ2Ag",
  "key25": "3eYXC1HLqEJDZKg4DqnLSRvucHYQo49tgrptdm1tBrJqiAN1uawzymfMwNLUbq4B5RcDoAkmkWFm4koxGPCc4gBd",
  "key26": "3xNHRRBndgRtL5kJgjhSMT9UMS7y717Ax7oJuNCeWupCjgLncdrwdnpSFPxvR4D66fjT2xt9azh7kV2vsis2dMYx",
  "key27": "5yDRmHFWoiQHcWfTMGh77E26jxTtH742ftaVJrjT76eTwfPETY7mZfaiZhjPBsL9L17xUtJLP8MBYWYmcWsR68YD",
  "key28": "qiPq48kkbyWdZmdj6JYkjP3dRKZpLJevh6KnwR9LvTM4qUQrKAE832tsDyXbj1Raxi2yUg33V8hGN2rgVgHEfpP",
  "key29": "4TNHj9KsoUNZYxEQVNF5YSrCR4SHAz5hr99n5vio4AzzvGonTcCwjbLsDSYoQY6RaJwQHnhScPCVTFUGWGi6hZKG",
  "key30": "4e4ho5HiTfgLPtdLRycsjT4H4bmFcXXbPagiWdHf2sBMX7BxYiVgtDccK7GLDD327t1vQwAy3pb6YLfkubqGAi3Q",
  "key31": "39hpRhnxwvpENwFa1Go9YyNnsXw6Sg5NQF3NpkLf23ZnvXRTUfWVJGyScMyv4dobKwsm95FvR911MwmiQUVX6Xk2",
  "key32": "j4iogKSzmPj4pLNfDtxHRxpkmDMWVYTofwy8uQASRmfq9La5vbZpNpfkgJpaNtPbpzbrNUFarYxgkFzt1mjCXkS"
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
