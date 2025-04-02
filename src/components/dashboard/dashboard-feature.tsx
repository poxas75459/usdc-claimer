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
    "3NP1A4BT2G3SLE5Uamw5q7vgFfrPenpLcaLgrKymWDAeJjmC1ACmt23WhmDH1y3J6RGJhJbN9FNKPtecYQPVw3uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZPM4fAs4DUZMLYp1BLS3DBo24QwMP2ELAEqZwAbXkSSaU1ucLNp792vUHZEzEUc2ZyKYFnYbVwcN1Gk1LEKw8DD",
  "key1": "52WxxVVKHSt9iCDRAyEtid8F4UxfR32VrRuwMWjxiuDynHxfwV2hAtu4Kch5iXTmgwBEYmDse4mfbwjcfWqhkig3",
  "key2": "4idd2dEZczcENw75qz49HEJZ5TJPup9Jr59LU7M2uyvBsdYKgdA85DFFWq9jkud5Ctzr4BzY3crd2LABCif82qUU",
  "key3": "33h7txbQoz6SPe54nB8FtHS4juPJ9A4fT5heGWxf7yara1upkKa2sB75oJAHsKx7KrkEp3cXiAJdp6thAAbUJ66R",
  "key4": "3YncVc1Pc7u22LjkxFRDwamQJKXUv5qz756sghzByx7yAruCnNywA1wtHrxBDZ4vApQdu414hGJsJxU5SNAztvnr",
  "key5": "qpoSTy4dVHbUh2y6SbL1CXbhyv3gLnmEkW564qcoDs5itYGiPx7NcTgJQTPrKAofJNSN5NiuC7Q7WiHixMRoVh7",
  "key6": "3rZm3FHoJUzre4yrarAzYz8WEN3aq8J7bGE5YiV76xpJoYwrPXSXmD46cWnZGahw1XCNPrygStfqv1B8p1w37w5c",
  "key7": "2XaRbR8o5cH3Bru2ziv4oGTf6YTpdKLYsdeCNBX5X9sZ1UUiHtXew47UjMJCLXw23qkqieMvoRjvy9cAJUbgnfke",
  "key8": "5DApXkr71FsZRZWXXPDT5xFEfeTegRqgCKvW9H79aUnneFM1aij157EdZjjkJWS2rWrQtegbq4ZqpYQSmaawbKW3",
  "key9": "2ioSpaYinK1Nnu9oFiacZMWhJeHPTUE7Uh28iGjivwdaWhvZrwXAMgfQop2iwoWSubx72An4RD81EEotX9ZuBpvn",
  "key10": "5snP6SNK1qnPqyQJZrpD5RBnBQDkix5E2RG4dwFshqGes3yYW5H45sQoo1cqA8Fs8yU7yZAeGKySQAmBhhBx9F57",
  "key11": "5Bj2mn8uBcrnCYoW9z437jPH7Q5DtBemv1HLxoqd6xbQ2DwqGUv6DCSER63tNXASWvcSKZXwVp1DM3LfEa4F2Fne",
  "key12": "4h6gCrYe4pF5QJEnpr1kMxKJ2KovNr3GPzqNpXPrV88tuBtQkF56Pdyi9GtSqLwbLcyyW9UbsHenphG3QfDtbJpC",
  "key13": "4mxUi6ddNHMsivyzPbVo3gx9XBiK4LReb36o3bvtYwa177xoB5o7fCzhKM4AEmW7mzvQVbuSkFnZcAnAJNbG7Gwa",
  "key14": "xsc9kzBENspuUA4ddYQdh1b2xQF2XC22q85oC6154Qa5nwppNQhMzyovk8nuoLb4jkYu2YVUQ2hSga7XcmR8Rnw",
  "key15": "2aXsvecpr5FR63ry7rMyB9w2ZekDv5JtCjdcd9Fr7uNc4CuS8kiPq72Zy9ZrVtKP8KeUUH3ny9ATv92gi6cjGF2J",
  "key16": "3RpFgWj6NargeQXMRi9uvSeW7f34gexGKmfTQmeyhXJkeVGNpcU8Hdau9ZZzSrgnkuEq39KddScvh7vUhrrJGHFM",
  "key17": "5oZ9aX1twUP1eyticRSgWSvDJF9LUkNZdoNwKnMfcbdUx4awyy4Z5C2mqZpK1f3FkqApd4FVLXRfzNsDsz5GG2rb",
  "key18": "4mD4Ky11aHuv6xhJM2foU1Bm12mUZkTLz9CZcRqneZEEmsf4KQdVJ4wSXCbmDmSsN6LW9x7t2Ygm4V8yDiXGVA9i",
  "key19": "5BEocKDVqZ5eZknZrJQnA6PUBQA3EPf2S8dY82zztEgdHBu3K7adBViouGS5TY42nnXrFm3j5pyzRtguXfiL8qmj",
  "key20": "5eVNSSUamEhgq1dXzgbV43eYfYPD5bewteeM9ZrN3e3fs9ezx6SB4uV4r6oE1A4CYgXTRXUsbhezCpQodJNzLqfn",
  "key21": "4aoKdjBV1f5cwvGLPuxuZ2KrmD4HB2RYAGeje5zRruh532RydMAuEq3haCiX7GvVxdrF4Q6deLUiY2eWJQwX1m5A",
  "key22": "329KAM4ytQiSdmydcmHDTt4ENSJwYGADwo93CU37rpkaQ2KCwGz36XoyrTQF1oFt1g6KRe4DuLJ2drq1RFaqWDMV",
  "key23": "3eAm6YrA5nPBW834cDjK3cpxDZeNf9aUVH1DQgMZQj2wGb2WC5tGKbr5YRKXV6y1eTjMiFBrfC4eR2LEM8vaHzYy",
  "key24": "3VyAi9jYvngLqqDhpDoPiQBeoaZHz6yNHzbXUVFFpe4qUJN9LtSHfHa28YaYnm3d2BXCctNHHij8ny6529XtKnLZ",
  "key25": "5HxpFnGV8BANC4jQfVU6gFtYpN87xLfSyAnq8L2yuey63JhLFLuksbcDQghuLXdamG1orU1nBsmt7yiN9MegXPLC",
  "key26": "LB6KTHikax7YK22wa2Lvbkb95dXZ75pBuwVAamtJDwow42piqr8hTU2iuUvTkPn7G8ehCX7JTaNyohJbujZoPkR",
  "key27": "4hAiK5UBBpQaCunXSGjaZ1WKYgbBE6LaTPDgtZbCMFsJPbc1UX2Lnz8FyYLprcPVodhGheBNya7z7UXrzfjspCaT",
  "key28": "5sjYz1i7TkCjwuUqzHQknVsJfr4B88iA91rTncq3HRVMPa1iujGcfN2WTAJJe8grESLtWvNGju8JDAofH3KicCHy",
  "key29": "3qnagY9W6kmUD2JGkVViXdFgiwomaHPEnNPEpx7hciWFRjMYqrRA8yW7BGtB68kcKtFX346G9HkVdWRaMN2QWety",
  "key30": "5qry1yTaNynUipeycwsJDpjhkrQeHdzFRUUD4sM7PQAD7kv8iWJV3LikmL7KbUKsRXtnjdjGxXb3NSgJ2fFGcnQT",
  "key31": "2HCRZ5eLaf4MUpQ8PC3i4KFXUMNJAniyQBmsHirbh5b6WzG6eESK9Wvq1pwMWpQyRjEiCSsKf54Vy5D3tU4JUnaQ",
  "key32": "2x8RdFAJJKf2yc7z1FMiv7Z8aKGKVdW7tvPQHr3XznutJKDfRczEyMMykuKNpNzPTphhFFNcfTkRsPUwoKRgevBQ",
  "key33": "5JWL619vY168wXswnqhi7JhmaLU7dAN1wMMQxDTUrXTrSKLBafL5GFuSDoFTkeodYjdj7Ku45iRG1qv3Pw4Vozv",
  "key34": "nkxuP4TufadgnSa7bw4Kw8V6EBNcHsRqa4Qri2QpveMw5bYQLH9brGNRJuPWL9Do4sBEx8JvLUSTCNLPXuFtT6S",
  "key35": "23KcHy79YrXPHEDUWSPYkuQytjo3yijDKDoNjJaNxduRKnhH4XYWWrjY4wAvKZ8qqQ6CU9Cx1DRp5UMepWizCuNY"
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
