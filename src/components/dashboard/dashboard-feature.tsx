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
    "5FLiyLrf2RZAaPsjZESiKrVXGCnrKHakNzUwHPLZ3AM8aNCwgA6h4VxBRNB1V8Uhq29Drco1k6pQEfCY8rJV9Muq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbiP259u7iraAFvYG858Qh8tiwWMg62NZGYDm4iMzdTocQKxf2etV7yQiKiN6MTEZvgkLUy3AgcKDpn1BYfRdXH",
  "key1": "qMG56aUGyWR16Jd7VoZFrx6vC2TyXUdRNrTXFbY9SVQKGX6cgfM1rZrtphSWFLNxB5wiHPkDYxDFyuhrY5cDBPY",
  "key2": "33X8g6ATGcK3aLKLNcVeJHsVagbpxWDY2K6bAD4cec9GSDm5eaPizQYScBS1DJRHnYivPpv6CyWbb471N6SvHCBP",
  "key3": "4qS9MbWRE1HQkZy3CPbSRvo26NsE1wTg44SG2Xo9G2GTPA4bgtuFMAQBT1V2b3UfTDWDmig7AmAt2UtCE391PaNL",
  "key4": "2t1A2om7cTpnVLd6HGN2G3AsbjVhDLhozgmLu6Pb5HQarw6ANLyq6tu2k2s7WSFNzNjyxRidN7taUi9vJHpU3mxu",
  "key5": "4ib1pNKwhmc1QYDXz9DByr9845E4t59KEqn5hX8VjVZEPhFGktHcZsgZP7nHfAiyyKYVmw7zPr9ffzU43gNTPLKW",
  "key6": "4RUTUA36dBMo8h4Hi4rnYD73ALWCvGJyYs8v2xZbMUHEyQGR3BkXpCnsMUyKzmWe7ChDMFzYYBz1PqrSFcet8ZUg",
  "key7": "5o1K9XEHXjr1jMYWWJhpgrmoH2BNkffMy7pnVyKKZc1NzVVRJfizHc5VgP5NuFH8HWM5CAu51Uwb9ytGbYNqjLYx",
  "key8": "4ZAxRqVNtY76fknqUD7DuK87oidSCq4FcvWQ94Uqm2LcJVMNx4Avk9iFdSAcDD3eYqgDdRteHrQngXtNJE7hEuE3",
  "key9": "JYVmmT3mpeC7jJThAwVwW6nBPX6YkEMrLpew9govnCSnf4hsBDfdCNyaPy4L67GnTHqfwtEySHhktivhwUKwzZn",
  "key10": "59MFE2pqMxzKUrG3FKr5rCdo2E3ZQv2d6xwRUZLBcw7tFjLTBqZXQuCVUdtNhLCvddMSn74kRaE8CQmGq5Gk5ejh",
  "key11": "3p3qCsxsRW7cBvScEHPubYsNDWnqwsdcEBEFJqcHtQC6ARzcpXBPmT5mExYjVJeXCYBh8wgYMjokxczzNSkHGGKY",
  "key12": "3DtzVutztRjNHbw7XUKwMuVoCGPVMbs6ZUbkakTv5gEmgydQbQc7DXmSBMoaNBVH1oVuxLoY1QTJViVqZNCPCkQx",
  "key13": "fMLoJfEHjREcHpmKgywsXuZ3H2Rbn9FckzD1QgJ1jtoSrPY4HH8C6U8ayB8o8TxvJ3nxv1GvnfytZeZyzrtRvk3",
  "key14": "4texUHqAD5NPXx2TDy4CKgLen2CnSnfosUh3TH4EPuLLz2vKpCnt5EByHjarVFtWoG2Zbc6SjudUXkGFHRseGZrH",
  "key15": "XJ6CKzVRYkiieYKzHfeessyPfZtfH8GCQLP4YycMtzNuo1xwqBZwymdaSfVoHURzEKxNLBj9htpW2QPDXZ2BAG2",
  "key16": "3c4WNvqAPusC8KmXziw8hhr4dTSxqueokjfANWkf1a5AHXvQqRkcVZPUzATVi1aahjqYFsqJx7U3rA4QGavAyVdg",
  "key17": "3CemqvRKEuLZKSiQ2PfqJtfavd8F4uUTqo5FT57Pvp4HgPDxFpzudChqtpMegXCDZewuXHy5jwWQEgzv4ZTf8z1h",
  "key18": "4ZVUtm2LfXvnbbtdGVpwSss9PdnrWaQxF8b2MSSF8V6jLiNibsJjYMZVBajcmepqJoTSMNcsrX4XV92drqWC61yv",
  "key19": "Bvi3WmUBoZ7vnyiK6yFsiFSHn97KPks4dTxZxn5aeDmmkG6McuB5zR4Ar39TtpxJ8Mv7x9csZtJuma3r6shhgkT",
  "key20": "2DoX4mDeQWnHDmXTqVm3WD4CfvTqNqiCctNSJfoMZ8XWw6UEvYRb6UH5fj3QaS7FaPGuskcBJPQzL32Eu8uAdfoj",
  "key21": "61LgcqTzeNbzjejh1LxFNcED6J5BQFzk9rDKv4JV4aq8H4ZfVpGQ7MFoaLyLGTx38pdJdNeBRsktnd4JABM5hYkR",
  "key22": "2VJpTcqig8Bbyin4oydZRDE5bKi8ZkBsZtUj28z6arJDCfGAKtc4V61M4yTncAmLJi345ZQEZT3Rx6CFfn8M15uH",
  "key23": "5VyFauYSV6dZSANH4Zb79zKtotaXCMnhYjjBB3EzT1fVriKSdVT2GSRvwVnTdx8R63Aj3W6FWGDGnwaAc1gx9Rbo",
  "key24": "47v3daTan67n26SwZWRZ16T6WaMdfWxPmjKFL8LnGVPfvJMEWHSUgisUCtVsvLmcRnNnfsNFFbnRVo3nTEqxSc6i",
  "key25": "3rTTe3BM6g41UzQuFJb1jvhfMz8d5fwboffVA3K3kPRRf8pBRD7PcVWoXcb5xpi4GkJ1A3HQsTdKG8hHueWSTG1b",
  "key26": "6amdXr6CG7HLxxMmuQswuJFhtLtJHo4RZwHSdBuSyz4UEtuBH2uHaPS48uodEDWrM8rZFTMXNvnMjpbQrs4BSkK",
  "key27": "4VjVJwznuhgXE7wfgC6HtCwhicCRiGJPuMewWSgRynPJfA8nQeiNjzDi8bUyUvH73Dik91HEs8vaCPqnqC1znY8W",
  "key28": "2ReyUqTQwmJJoLJvEqRc7W9Bp4h7fvCLe3UJsgEXtmcdvt9ukZKg95nohGdE3TbXDJ51wuNFJbSwhp1D3aA38euZ",
  "key29": "5gqgjCuq2TDbZKG6WW2CMXVEpktr8m5Qi6xhkChA27XK1uFYxa26mMLGyEnVptqrwys3SMSwxMoXS8SCmtDKeKiG",
  "key30": "EXNPzfQdEmkPd8RE4Vduibjfum9fiDgXLnPhKYPk24KxgTwuv7Wy8xfjW8mBWsQToVKFVQeAn1eZYvggVqdsfzp",
  "key31": "3BbFGDJgTVrp15HiaEFczDXmfbCEPdjN8qsEh4xdYgYhXeVuweuEnMag8X8ZaYoU7pag13zGMEdNt3vKE5jGko3d",
  "key32": "5gbqh2wYAkGwUqWH1stkqeFE1yZaz3BEJHJLaTfGnHrpy2ENgD9tFgq5RY1vesmeJTRYKTw8z3cZ42CyZ2eg9NJU",
  "key33": "5EpjPK15JSpJWJETaPd1641j6FdhFwp6PFCDWhYY31MmShuPtT2s8L3gPG66CgZvZR9MfSU6259PZxtrEK5mC1MW",
  "key34": "2WrXdxosCNjdX1onL6umfyuabPx8SUUjUsSm9X53FbxV6E54PDawHtiupVgJQESDt3Jkc7AXvPnmqmmHAVwMgBY3",
  "key35": "22jMotYSamjNdCny9hE5E1TSDtPiwWFuRL2jJgURUDNfTKUPBt9aC83PfY5AFV14o4ZXA67ytDM6wbke9WwSJxne",
  "key36": "413jEuqQEmbHwMydrGznLzQkRgxzEi1qtcUH2Q8Du7uu69rGUrRqtYuitmg8Yd3Q6zLBR7zEpgeGxfNLFfRaQp3t",
  "key37": "4FaKuv5YnYULwmxbR9DbKAT2y74HC8L8C8minDcjQU1bfdvoi1r1zf7TP5P9nm3a5zccSHVqqRcrEKcwgmM8tjV9",
  "key38": "UenJTogT4M9Cfw9pZBmSUfzUbq89SENHkDUE9aCdehDt7v5h3NbGSXD8jcKH4GeJ36x5rpLygQFvwaKAQufybeL",
  "key39": "GtKY1F3YM9XEgq89GfjxW8uEXS45TPsetS1c4gqxs14KkUv62yDyDsEYWTREmA9ogJTYvcAzaEUVxHEqMU7XLaL"
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
