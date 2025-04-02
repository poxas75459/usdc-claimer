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
    "4abk1vpJSmgrbatx7prTrLXC3hNtJQAhJbsGXg7tg8Cxr5WSY4ADE6cbXokGfRcasV43Vfa7nHH5t9FxVFGeXfGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45J1jBTrCBBbsxorqXzgMNktkTuc9wSxJbshv9rWqPoXgjHF5kLF3YVZnkttD7X6w6WLAnm2jF67q9L3SE7obujw",
  "key1": "49rQ8YNgT2cAVABB1ekELuCVh37BZn27CvTrhfV8S67zEBiDc22GWiWRqPugEqiue8ecz74W9cGAFpEkmfcBXc9E",
  "key2": "36bNxQxHq8RczThvo6AwjrA9EQ7qHA5z8mFjgWsKC9m69r4BQjMKUNcqH8TqrcgGtGcHSy2wVQnrDca2PB1RmCM1",
  "key3": "2xUiBckZnpXUfL3vNHMKKmQbQp3DVZu8D3hZwu19kjQz1ysfpuQNvCuZoAerbvp2bpzw17Rqu8bzhYnjeP7GFMQK",
  "key4": "2ZtJiy6Ebjbi9GMPGXHkHzTDpGW22s37H214dPF9vhvcnb7GWuTL6XV5JSRaRjxnfjAkMCBQzoFeMDPmYbDpMKo7",
  "key5": "4oay3JLvdgPmTfXRL9mD5TBdq8Es8rUDfUqomnS1DR2RxTMbFNMEUJtMxhSCTHacy5o5begXq59oUQGZZ33tTNXm",
  "key6": "hubu68myyjQpjoeDgA5GB3bibgo2yW7zEwNXnbdPGLWUWpgXqxkd7438EkfWLb6HVtFMhrUiTicr9nKsrCSU4t5",
  "key7": "5T9eaFPutFp4H12TRABQkUsoj5kB831BNopS5miPmrqJDGsADo4fJ5XH6CWcrcZy2Z3PbUHQjhmZYiJbk5Phw12Z",
  "key8": "3GG5dfk6aqiJhY5JD1HTw16aWEELFB96TV55vgq8cj8KGhVRV67NSUDoS2V3xYe5pByxXJt66dr6umUAcgkJTry9",
  "key9": "2wDuu2TQMX89hv8HENodXRZ97TiqYCNGob4B8YftZ7TZQuQrEtY9Qe2uJCsWdyNV5nQVCCmCosjm6bVATbhmvabA",
  "key10": "AWubJmFYPkLkzaNwVMbYMnxomZeikkKDz2jTA7Y8RTxVrBMnPtPmjBCELaDwU96gr9ZnnxqNwwYSWqc39vZFNfY",
  "key11": "5TDdH7JWx5T4C88PmrohkEU2ThRZHxKDZVj8ayrEr81oLWHuUbaHaJ7yMKqNn8HdjXAf6byJLfoP8zr4JFSQJyHk",
  "key12": "2o89wpXC8UGrhsWWM2qPh8kV3i6NxV9r8YbRcnXNrac6wA95rBaBmgcy5y68vpS5uPJuu4zcp436bFBwPxR4Beuv",
  "key13": "YK1fX4HBAAFt8xJJMSaq6jF5RDYn1RPSa5dVozCEqMwa6qf856Z9RuXAbKJXFjyCzwy34miNZ8Dr1iQQXzZDa3A",
  "key14": "FMqZqvniPkVFhaoULLJS6Mqxc1bNd5VceTgDXoAFhcnkdk7qB88VYyqyNmdeadHT91hToTBaCGJwMtgnVb432T5",
  "key15": "2nEyYrwmDmcGFtno1xfeo6oZTqzZ2geRtMTbShgADML5Db2pkZ6PjzfBDTxamieCDdB5ZJGWiJ7nZ97dP37v2xRt",
  "key16": "4VSbSnrrqVLGVtbpH2on75UH5ZF6g4t2wUvFJpeZQJm9cZFsq6hSyFe8YDXENVkbavWwUC37F7GxzLEAh2q2khsU",
  "key17": "3wMvybiPuNDXo6DbCe2sbULweZE1issmz2D5un2rvHaREjydBAK7wgxkF983wvecm2CvSn2Y3VytirLrteoYfjDE",
  "key18": "5c4Vek49QeaFy5Xh9GvPfcKvQNChSN2KEwWEYM5ukvGQH99LVCQS7NWJpdQHnybeSeJGty5MZZQtcDpfRHX1sATq",
  "key19": "575XoRZNNGoakaobKKe32qvehQaQJa5QovFY8UzKVeUp9eb5h41eFwkkSiPA1Hwx4bWMEDwYZraK35tcsVuimwxt",
  "key20": "3vsbdgMjJinBuyxHHnvMHdtt3uAUViro83FCZGzg6aRAWMFyAjq93w3XnUH6vXjDV2eLQoAZWDzsD758Fv1ou8rQ",
  "key21": "3jBpswMgZxPMdQt1PDngzMBB5f4qjCCqFLd8b917FDY9sTSoNxfdwcYY7v9QgWGQyggNnYQF58bmEsyjnb8QZ7h1",
  "key22": "4VdUjFvpTKhfM43oKZSfV3zaz3kTiHNEUguKiSTBp6QKCcKgziBhtLuMn4EkmU3iNnTEhCyWCZPF5sbwWb25Ckkp",
  "key23": "4oKPDbnLqezFuE8m48gaZGK3MuzdNp8HgAv2hD5ML4MhPz8veSsikBdejGJ6twZHGiopG47zECMoMoDDoe9Kcc8h",
  "key24": "3hi3XV8Vpbxk5V3ZxYqcSq3UpKgEmZgsSxmrTH3Mqcy9GDQRo4C46EyC4NfunQzuircXpn5EMih6w63wHMYJ1iTL",
  "key25": "2mHgdLiNdYxtXm6yEfhJN9ukqXMsiniSXRurJuZGuNSrX4temttQpjmhqtPuf6hv6gFrFi15hgUYcDVecfAuUnzR",
  "key26": "5Cwukaq4nZRnBY4eL3gQbQf6WHHmhbGvaF9gvZ1QZZS5oaF4xskDdgBrYPzZQ2DWAiHPNwnJZaSbASfN2m4vMdYW",
  "key27": "2qGW2Y5hskJTirtiYLQmZptC5m6pQ6ZxN3eDpAm2kAuWum92YioLmPH7YVCgZ3Ct6Drxt6s8BeABHpqrughAJ3XB",
  "key28": "3e7h341VMof5DcjACyczXHi2uck1Yw3za6c9rgG6KBww1YRuU9i8P1ZqhnEbQ6hEaApqHdiq1BjU9YHr9L6nA6MN",
  "key29": "ujXT79jL6Fd3LmSf7YewLsffJcbEibrVw58eEY6pNQCoFdeDdDzRJSjF1pbzUw4GdTBfwZxP5E7GFKmDafvJasa",
  "key30": "3GAkpG1gGBLJUZy7FbrdEKBwoy3y2Hibs1LwuEKbtgp6AWPnTxomJE6rvmLaSH13FibcRtH8w9ZZ8Fg3tBjJV6T5",
  "key31": "5owAdPV8e2hvYGJxsrUKMFquuy9M9KcPFXvAbVyqZLhKQdvstwgLTe9fhaA1fH4j1QHLoyWwUn2AvnZuomWoV5YF",
  "key32": "TXzKgg2TjXrNjYnEEh5UJXPj8XuuJp8vytbQ5y3cQdLqN8Jz88KFQPR62oFvRzqJFX27azAwH6frcoqhwbAzgAW",
  "key33": "v5Nd69dYS7R4W7PV4iR1boewNcSYTTWx13vjoRGkk2aYZwALFqg5zTbEEK21soWG4HMEZac1BvexLfppsMjCisP",
  "key34": "3njeKdfJmKHRJADJiNL6cEEJdeE5jRx5JSB9j2io2jUF2JzAmxstUastUneYkjFbYKngt1AqLpnEtrAAZM5Hy3ny",
  "key35": "5BqJ3Zu3MnxuqkU4jpJRJjn3iDR57aCcZuLgzyLDyfMStognBwwhQeU7m2a7erdpSfz2t7rQfiF365xxC7htbubN",
  "key36": "5MPRjmgyKk9PyMHNHwFPk9ssaF8KghXpuu3h4UsA4XFmQs7r8iUouEGwJ3SFc2GgCKWJnembh3Ccx3Ah243SFFHd",
  "key37": "2ziVJnXhpzh69rdfvMUv37UQcCpYUHBiwEpATMKQR3VsW69GBfdpfb386CVrYvDhUXiD34sqUcGa1rC6GkdMk6Az",
  "key38": "4Xgo9hM6uSknzv51ZNRMJouLCsKJ4s3ReFAwy29nNiPqjG7xwJWLaJnpamMu6vhe61ZrWGfnPX6H3NUyooDxrfFp",
  "key39": "4CqsSfPxTdmEXWDL1yMik7s6JuRMD6pXLLvP3BCsTvtMuDhUUYQj64HFS2gFsPbouPDt7eaFY2UPpn2mZob5QuAB",
  "key40": "3gc2Z9qzeUkF5Loq5vA6xhQUBMqoEBhGnLrBteejhTJa57CjniEMrygFu25q9NxhrCYbnjj5G9piKSWEAXoRwCPj",
  "key41": "5HnkYWWwjDgLZx6mAL7QZiVGjLYaR3q4GE5bLEab4gQytbjr7LGtjKfRcztTpw1jphsxNHyK6t6nesGFXCNFhuNu"
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
