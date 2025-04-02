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
    "4QWPeZ3LGBvhpm6aq8j6uHYHJeXvKazNkD3QS4Bw1E6gf7ttt2djCUTT8wj58pbTR31i1PpSz3bzcVKZSKCv4Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BQsjhCUALtkBn3Gig2eT5jfXy22BdMwyNnWgx55u58ubig2CF33TkBYs7b5bJWvb6sAswdQY3zKFnvGa59em1N",
  "key1": "4nJSuQCpfTDKoWRbKnZCLRPSnyCT9tQar6yD5Ncg7Pvs2LK3Que5XZYqkBGVKCqXM5BCEuL1t8eJPW18fbHmgGmC",
  "key2": "5kBBpEya2eFDLZywpjWjzFcGa2GpbiiedB2NVmfhxzSqo2s3JUTPnFVYyBhWCgBBT5p1ZPFDDo4dNXizfw8fWHnr",
  "key3": "5RD4mmaU1RVjoVEsmKoxvRN7gfQuG2g7AXHNmB86PnDyyAKuS4PtQGnkDuHo1cWJ6bvV5MiXkSgVCa3adibFSRMX",
  "key4": "59gmc25EsgpLqdyBJkg5CiVrQFkGDReiZ17ykbyc1cSW9JHKPdaLvusqMCDgzMEuaZtCfNpD9bdUEPE3PCaVtXjy",
  "key5": "2eky5RH8v5ysEBqmo6jvqmtEFgeDJNsFF6fLbdgCfhgM27aftnBZajY7uDs3SdtbY4ymaZgvTc1wDuST5U8qwFJ2",
  "key6": "4mScxTQpe8eKcG35fT3fAo8BQD7Z4JB1DddsgouzgEGRbT8LvpGXp5GgZpEm1YwfQXvVEQLn2U1qgKSpSBwY7u9y",
  "key7": "LeEZQhkesr1CxeKKrooGCmFdQtzYdhfUWaS25mMsPVyTctNXQVcW9AEyhSP5tUcuaeyHUCJ5uEq7GMh15c2qfvq",
  "key8": "4tErR75gdkbyHYFeXwc866s19Pd6z4TZ8rSicuXSLCWUeGzxresdLDwwfTuPDWyAHHSSA9FBZA7cJXqwMX54NJfu",
  "key9": "3foZRz3pkT6THDz6PoHf16GWjHvQNto8C8Nma2oeyEgZy4zA24Ng3N2jWt3iC8vzTME8ZSA5y4cvVxUXr11tmeMS",
  "key10": "58nksX14AQAdmQpJoSrTnomAZc84DkEsVSniU4Rtj4wh7SHtBE5Pp5uxCredFQ7j9GhHxqVYy8p8L7rR14sZnuQF",
  "key11": "2GaeEUz34Xrp3CLZL2PcYxZdp5U2W12AjPDqyKgnhx9raqttaaa2Zn3hyhv8GJyxvZDaNrY1Rhk5FDAKot98uTSs",
  "key12": "K6yXoPsA96qKZNCEEMtZDceFXATfxSRroto9JoNmdnNC2UWLMzZBUpXpivg3hYa53pBo9HcYbPT9eiSn5Afy1EM",
  "key13": "5mLHRUc37WSv5yBtTwQ3z9Szi45mk7s9ey3VJeuFfrZN8qvcLnXErB3L9gUdKVCaUzeae2SXVYwnR9UfWRCtLZP3",
  "key14": "4VaiRPFGbAUg1r4uEkUEA8W19ZJGDH8khRW4ASe9PHR1GnAhMzRgzzGYGNuBMFsgUKJYAiUbPHuyAyVTymMQjCkP",
  "key15": "RyfM7ULK6o3FNUKeBcXWfdibsavE6vKVXa6QZQCHxYh8UeJfLdMjvzAGrHeydvCPaVb6iAMmQRKwGQGN3iANfVc",
  "key16": "4toiYdBtw4ALrp8GeNEdx6ndvdhwo87evzTj51HWiWS6abTTJq9rXrf6vBh7LHdxn4txT43BG4TMLXeLnNmLdT8f",
  "key17": "3t5xHTbzzEc8XXLKPh1UdeCsx6dWmM4Sm6gRbt6NjMX1CUBDcA9z8xbgYnsFv9KJguYPSEBRR2a3DHFnmxq5KCUv",
  "key18": "4mewDcTj8nHEAit4V4MKFgDphrDzu5H9UyUmUd8YHGKTnVCeC4eXCFAXuGd9WcK63jxfouAeLjx66ZKzHvgmAvzW",
  "key19": "RNTbdyuSEn91fXHD1GrFN8DZ1RwjSU5TV7KhB9YfvN4x3Ec9emHwnUha6StSSszyLhJ6v8KvxvSnTGLsHgA1mT8",
  "key20": "4p93wKVzStCCS4cwkTh9Z8DAqvj2hvG1NXBPXfUwEgsBHhdkeyXmZaJYtiZocDi39BE9tVMCWKLgP7x8VZdZUhin",
  "key21": "XHiSXBkU7JWUCFStXiRStcmqvZKxcrTM3uxCtGw77bRPbDiXxSeaHdLfSDGJadXBbMPuLTWCpkDGJjEWrT8fePi",
  "key22": "AWd8uwk6EHrFV3ncxo74qMLSQFH9yBjEUP4maWy6PBGQMSEPNgeES5tU762zFqFLCWHU4mbcodB5jGLEEKVrXgH",
  "key23": "56TzL4GrpNai3sYEHbVnYS5dENbb7kpCbc483VyQYUvARCS1HcdjDUyanMx4KsxkT8AxdixoBRTEXgXAMC3KyHLW",
  "key24": "YyB3jfcKNu3ZDaFG8a6K6uHqQweDk5GoHusDPhovUYEasusLFoPqssfpsgotmarVHZqr3tH3f4Kb6F5HdCuGhmp",
  "key25": "4Pje793YuzNjYoLCoTbxGj24d6H8ymyDhbzTE4MKPG5W4bAs1yAoSHDFpvGigkoxEmG9hievrzc5ax4yLp7ywWU6",
  "key26": "5P6scir19gUUsdmv54cetwYmVBCcLyT8pDGHDUsRea1iRLsiELbV8pyCqWqjKeyebiPM7jywESaXRW43rKYAwHiR",
  "key27": "g7ybE33miYJdEfYa4PYFB6tbSsMRrhyti7wPKNeXMGPLtUZFttDpyVkHr5UJ7VhKHqXbZSiZCMhs1PYpxGQbicQ",
  "key28": "2n5ZvK8YQnKHEaxuHwRE934qFn3iqNvSkyLq9CMHDpmPNJHNLbsdDusrvxykBoR6LbFeeJ6gDEGof1WiiWw3gA86",
  "key29": "44UWi94WDYJgffpnRR5v8N2iR86fLwMzEjWinjvhpRZ35Qtygr4PswyRXjJWZSWAN94az84ph3zEqkHTAFzSEYNU",
  "key30": "2UpfBZfkLz2S2khAZd4HGkXRt6odn864KZk8jcEevtm4saBFHW8z3Ev3VP7ug667nSXbjfGMzkW4xbFDr6dQqK5L",
  "key31": "t7SKfL1xwTkVqNyhPWJ14HLcwgKkuFLN4fKhroEpV66rHL9ekVNxR634BKNbH1dcXtSzB7J5xecWzETE91AmbFN",
  "key32": "3jnsJiYFxbKoJo1oaXGPgdaQpNZCp7nnGYpb4yjt3wJu7p4cvfpkPF9ULfYM6uSSmEf2mmnTBbvA5pEgkxsz7rGS",
  "key33": "5n3VkC55vmpJjLDSRCfbJHGMnR74VMEyHkxNENiSEkLC5uobe1o9SMm3r5DgfrzAvvpPQCYd9okKUe4d1pJvhiXY",
  "key34": "3snsz6fQTyqALSZqKsBnyDgw5zTcGfnyskxF3e1oBSffMzRJwrwrtHgP5aczcz8gpn82A4XWG8nR72YwTYduGUgk",
  "key35": "4zENYEnCtN16EUdr4DatTPbJRN47pcdgCyFJ9W5tXgbUJdFvmcFUHFtHJcB8XGHE2yXajcNJtkodaeBQDf6apRPT",
  "key36": "6yJdeeNTt6KBVs6eStvQ6mafG97ByAVByX6E3pDEke6kWtVaw84DK7JPWqWTJx2WCCYs4zPRg43dHDM3Z3EBFoz",
  "key37": "3L9wzhWSMrhHqmCb75iS2HSn4NoQeJDwudCiUH68JNv54oDC4AiCweydEfjZoPCiBqbFSCmQQHH4NP2jSoBJyusz",
  "key38": "2spQV9RGm1M2Z2hkyggaUbWTtPfu7gTiYxcq7y2r3HdHMmWc163rTuJd4SkeR3QC2d3NSj73WnjgRDyvgMRA7Q5z",
  "key39": "4VaW5Gc5DLn7DzMiQRh3AJxxgRT3NYEurfL5UgCVeEuz3PRBDa2PD8GystXjv4iQaB1PqnZxHJsVebUEyWhqefLs",
  "key40": "3iAfu8K4otVvNjvpVzZSfSPVZU1HSmvhFgMVZhojuVSrpcQY3hUPUVBxaaZXJjGwMMzyRGRcwChr3B6susTP7oc7",
  "key41": "ox9HtpwDdcgizYmeLTxdFXd7zX31tSeMfGtWtqDskhL33HpbTsuze1bQkrduU9BTjXsU3jRJicoSSTBrjNtGDs6"
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
