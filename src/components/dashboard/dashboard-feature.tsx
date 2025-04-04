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
    "5x3KkYe73dP1gAEoaN2kX6H9wAX7WwUKHWRARcHZBHQNKLxknqMqDScxVnns2Jfn4dd4EDQTF293zr7ZbsrJeMqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StEuzgdUwr9mTpDWmrMMjtuNfFVScVwEWWMheN6DGpzFG4GrSraiuKmFGqsgqzHkDKq7TJ1DhvgJCjeu8iXbM6i",
  "key1": "55DFfLdpZvWRYTpgEnFfDYsba1TscrFnTuLn3nVfHur5jxuuiU8MEwq4kkyCGLQ7tKpTAuU4EJXgAPc5Ze38as86",
  "key2": "sdQDyGP55eMZzD3eP4LvbAmFv8SKg9rtynNbTYP6ffnciZYVWAtygALXnpXaKd4dMKRRj88Ra18uvZ6C7ZfdpbR",
  "key3": "3hTbyQiZsaFNszigs3ytPx7oak98YE31ejGt6jXq2h2c3cUTkPmDWrdepFL963qtVsw9TQ22GVpS9hXpqkxB7KJE",
  "key4": "36EirKnBpStrkTeKDVDkUDY6CiQPxiuaTSMUcqc6W5JXEeTVrUsN6zj95XX2vawwQHXtF9r3Frm9DTEpbyB7xeYv",
  "key5": "45iZwvk2wHemwinquQJE71Vxe8e9xCingtwGWLgDpT3dxZgGddiFhsvSAsa1Du5x6srcC7HUpdZM3cSj2P9MVfvf",
  "key6": "2q6D1X9oSLEH4D7nYPFXtUcwTwRrCkbPuRLhZVoTKyQRyYTFvYXGvNrKCycfv4PfJX5EaNXDuPQsV3twWbSaJtYs",
  "key7": "3WtmKpe5cStwemxRtKvX4MHCogm8g9R55NKLC63mXKpkYs2QBhM75BqoDT2GHrcEPuhckctxWu8rxD1qpcoayhQm",
  "key8": "SwZkkxG8v99V8WXJDw9RfKJnTDxNWxBiefT53pGdVjzo5FhXwGNP2Aw7qMXzcbzxhnsULYdY4udPk22ipHJXKfb",
  "key9": "2UtL4D3S94EKtwdg42LLLvTebegsN87ziUsWXnr2aZeZ7SUhUMx8SxJLSET8yji7pNXKHzhD6x1ZwZSk6U8iY12p",
  "key10": "3bfiPzBSvUZa7FC1YAYjPdVUFMhertcsvDSpBdP2Li8gPDYaHa2FxGCaCAu4pAcL2HQVAXAgFw3GDg479To3PA87",
  "key11": "3cKYnRDMBEkNMu67jefmhwdLfNMp429frY9ukhNovGPtpCDPdkdTbv8qsCwJdZbWT9bzeHEV94sP3ZtQnQDxFQ4e",
  "key12": "3R8Tjca6jayGoHa1prWwwZkHeV52AERS8S79MUBxTXxUFZ4P2Wm61jLQAN2u4uftEHGZomg1Dkmkxy8Sx9dzF5y7",
  "key13": "5uBcoFpyPuX9a3mV8RjH9oAUCf3NjEryhk3QbEXMDzQvoxPRNkYB91GghqREy8k5QD8ZtmoDqXkNbjYLpNqrTSQT",
  "key14": "j9fy2czcJYZYB52EjgKGtZ3QihUfhRY5wBRJgUgyoQiYP5dwbzqSqzSL7YYDk1vDFM9oQwFiQ9PWfok3Y6b1354",
  "key15": "EbZStEpmwcrcmLpnPCNkRtntboicoR8pw1XwJFwt7VEsjdBVYutZ5ZWbqTXMPdAA386U2aH5RLSRfLuNLt3TXaX",
  "key16": "2qbj7D7koKRyg7JcdiRmaWXV26sp64w4ChxXue111U5yY6X2EDQSBRAs5fJjTcf6vMBmQtK4uZW8NsiGUawy8K4r",
  "key17": "29CRsGyXwgAgtEne2PDeKPUiaJcSyMfBLsVqJVeY3L11P9Kt7RTPPzcfEMvEY5QURF4hBxUyvLsZKWPBUuH4i69G",
  "key18": "5fyb38q5s23xvGp8rurvVnbdGFpB9dYMZGfHyRj4CjzAbrjnnmEPwAanm5XGMCDWsuNedAEspfAexHMj9bZLoiAm",
  "key19": "41U2hVCFSkVFwMPyfTB3rcWcKF36g9DN7YTEWpx6mCzqxvGqB9HcauPibmmsaqeZyyQcXH9TxWy3xRjtLAAbRpmz",
  "key20": "5ZW87uLuxdarvpxSpB1AL9vjFFWxn94EgM5xgQuEhEVPy4r91AxCSPVjfsXzGa1c5Yc5DHoqitYDu77knCzV2uxh",
  "key21": "63ifpVVPhAzSGyMRrRqtoymBSg4t9nCrUGBZonu5tgq2UoAhhZPBvZKZdtY9p85F2ZSSC3nXwCdt89RmJEGLcDdk",
  "key22": "2sw4ZsGJiEozDoEX7y8P3TgysZkUkPMb7uCvyfkw3vLkKUAh1iCZUrgtGGkzh86HbiMQX2xaEURycci4qh6EP94E",
  "key23": "5wQHUrkbUNGvT5ACfjc3Cpxi5P8MaB17qZRCNnuJh1dzC1WteKUjfaJK9iuucQcEYwJLy7PgjmVHnCHqiq1upk6T",
  "key24": "4MxdzzGbb4HRoXCeShUV8tYNjz1QMoPRKgYonEd2EfwPJTotzeAG88D3kAR8jcoHD1jMAWTzXTwe1gNP8MZN7Abm",
  "key25": "4aftAxddpJyNXGoExVnJWeuSHJJnQkfxYv8PprGo3a8MFm6NRTa9XMo62w9TFAJ3eLzVDdDRFFvhD4HH97gV5ULP",
  "key26": "W5HdabW2tHVCR1aFTCRdQzFHBbMXTM17PM88h9obZ87in8KHeFdFD4VArLR2sNTTwqAxsN2PXj9rdbQziJbSyQD",
  "key27": "3btZqfHqexrmkGMZao6wUxtrVaty6sKTpsKT9BECnvj9fFLp6YYEf6tU1xSqXCfSvUbm2LU2TJ6UZFhimZyk5uW8",
  "key28": "ENRoj6JW5Cpnb3EkJg46avFKZWHya4eGwtjm3PS5MJkSVtWzqdbeBFnLUEdBY29ifAsDrSY7BnkHjDRM76Xv7zP",
  "key29": "5KBneiuFYrSCoTypwx3t5z6KRgJ8L2SFdAwhdniMujengeBcYhxTagHQgq8JSTiJv9BrpNsvGoFbcXeBNJU6iqB1",
  "key30": "2MzPq6Xs47vFWWbCknQFP9forYkdKoDeTsSVdNkqKgecHW3QrJ17PotKkXYZKvgU3ucDEP79ATiDMfhHAnQiK94q",
  "key31": "3wetS6fjCSxtgvsxxY9amf2azhAy6vboGCS556Z9VeCeXYyKVvXh62fCngzh3HcddboPf2e9DhbWD2M2VS57C4S2",
  "key32": "3mguCRtcxdXQD1JtBsy7g5JCccCkUy6C4QKs4JgAaWyQEFb7fbssTPyKCsFukLWMaHuTCZCQwHgqVxVxbRk3Lk6n",
  "key33": "z39BKCV4yrJsZsR2PqMkBFiy1QRu5UiDNVssuvwiw5LnMo5roEoZsKjRrVtoHpGn45e1qpqnKg2B1kozXP8mZ5d",
  "key34": "411PhPWWg457CdacuUCcUvpRb8VHkdtaYa8eLMext64zx1yh2EwP8VGcKZm8qcgg1GeGT2K4kQx1GVjZFi789ocQ",
  "key35": "2ECJL2EvCSmWJPDp33FwbVAM1dFeAXFsABfCBdGWtiWtE3Y2bGrugjNHwRywduq7FYkJekw3JAiGF3yGzQ3RibdZ",
  "key36": "3TZoRGEG31fcujwm8gyVLEGgK5ifqrnaHHxVFSzsaV9Yb8WMFZp1MscpCV7oPxv33Jsu2x3UazsDJjLuzwAJAef2",
  "key37": "eGQwNTctwTfPFLJKyNhtnvmUyY3dsvpMjS8WJFPDQ7rdroxtW4mMwsNcmWwB6CbMKmtn47iU2HdjwjXA4J1uZGN",
  "key38": "5xSW1qrWXZW9ioHKagjQQrwnrrwihjTma9hAvJD5p6wTNcDK1mSoou1expVd8bGAyHxD2Nz5G7Rawa7YBStFCbw7",
  "key39": "2QGc57DMzGm5R8mXrc4fyPWHcY89SKmMuwsRxVPyjm2k34b2aKn4LDJJS7UgPu42kEtrDYYxZTTNFWmesmWGPo8"
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
