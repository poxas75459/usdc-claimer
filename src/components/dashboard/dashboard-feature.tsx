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
    "2r56XFJTvVTfeVCgZXCaAu6DBJbdScmjuksiMkdnP1djig2qWSF5pzZNTEvai5Kx9sEQZFiH36WdQiCwgDPcZoYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yLo6LZ5r9aU7ipb7xiSXBHD3qwLuk1RhCr6P1CTG5i721AeNgAsvc9FGrbzTvezENEwZxvDJ8DH9AhiC3Lm6yK",
  "key1": "xgJ498QcmK2uWQRn5cevRLNbqe2N1SxTqMH4yShL47RT44QrffmBD5c68BMFAq3we3xTRL71VJCC6iE7rynEYNe",
  "key2": "2EDimeNf5eufJ4AtK5Mf2cDYAHT3VakdDePkfxVNYKqYwcmLba7tdw1CtRCtPgUX2g8pPwNKEfXWbZLfm67CUtbR",
  "key3": "2WP9XkuypaanFjpi2vy33CNdjtpc2yx8cBHjFNrvsUa7SRKijek9xFKU7eUNeV9p8c4Ure111Ygah6HQ7SkdnezT",
  "key4": "3iKC9bL2ZokuLYb4miGSvKfXEN5319ntbaBaMKnsDwWSR912zi99oBvbWpfNwGmPvse2cbcksAG5FzmVUMrWs2i7",
  "key5": "3JAJgcBBM1Xg4dPcFRoLoNw3Nyq9wavCaHRcEn1Zd7KdZa8EkgPmP3FsuddKUDDdHZKPRhD2zdxFicCxDcePkE5o",
  "key6": "4fxLSrNyMi9M77fJoRDQ9xfSkzPfrBkwjCbs8HHrhi3iRJR9Smy5HrYTAhGecM67Ka6cVfrvUJyzjfLRZF4TJymY",
  "key7": "3mRTra3kviADkXYNnFNdyospXrZYHEUYRWV3xL7nh73cP6etdpK5nhtswzbwGdY7UnCS9fPEgvs2YcJTbGBC3aEn",
  "key8": "5tYS8LkVgLimUE9umr8kDTwfQRo88GLu4juhH4KHTvJzpaAeySE8WQaZUJVjGmJEkXXH5SqmLC9WACfPipQorG73",
  "key9": "48hZ5oXKTtFddfTPYkgkyJQ92nJoHsbFqdqiwF1r3akF55j5MV4Q6Bwkdv3m3WQue7QzPNrHeAAsqP8nXPVbwgKb",
  "key10": "5XPWr2EPU3ZGVQkcMn77YdhJUDMekqHy8BJib1RZjrQuKQkLsb69xASSBNJRPxY6Uii9vaL5VNAk9Rg9p8QRML9h",
  "key11": "5rj7RHfZRC45XM4XRBKzAJoCKsFxfhnVpkF9kfVU8hhzRjpSAJEaiK4A1xw9indLMUoXWUFPtLzEEJ1NyzQSQVmp",
  "key12": "C821ocu2yPaAaMkrZ7b3hzsB3Me4NjJuq5ceQfDGZoHVjzrun78KDixNeyT947FZgNkxVRqB2UYGc2fay8tNo4m",
  "key13": "2MSXg5k75ywPojsi6484fbuFBiErZBtmaEyBLcKuC2vgisXbwQKm1ACpPbmcN3zBtnDKfV8hh7c9Rj9YTpn6V8xZ",
  "key14": "ZwLK7saHjBmMuKkjHLtuaG3hvMiRtwNPovmaKPQeNkdeXi6SCrPQDSBo7Wtdc9tFHExaBrRnWB6yQVnDsbgfRaG",
  "key15": "5nQCmvt1LzPaQSBzGa3qABjsV5zUweu8UDm6yR2afw9RkN9kMp8s3Syd9xjUQfczCCsUc3fgQjrgLPUwQ2WPRtju",
  "key16": "FJtp3PVfA4RxNvPNaftc1UgqxnkcqBgerzdAqcciVxcGqtaPq5mj1LAvvCiEywrVb7sLUBjrhaR8kT78ke8FgbK",
  "key17": "2BVGyE2x5DjBxC7rZPPBcWBYFcLcAGUFSFqssY7nYkyWHMNnJuau8yM7CNhjfNxd3xTnKai1ymk3mtBpTyXWRtFL",
  "key18": "YkhjB4XJehnfsjwzTqDpCHq3NMgb4SksqnydT1AVaVHWL4QqKRLGAiNdbSw9McqgP8P4PqoXyNxqTcKZFT6RTg8",
  "key19": "5SNC4ChAwJp6wMwZ2rsSVFbHjnefaMZ65Qyi9mTkpd6mxaiC9terXZEQd7iByvGyyAfB7KUko19AChKbfnDMxQzy",
  "key20": "4XGEnuvoe719ykmjEEDQeufgbCe9fJoadi4WFpMmeh5DQ8cru8wy2XRvQRKQkNQVcugayBXKLvndPYrMs5dHYAuX",
  "key21": "4ELe3numBbEownDgf8DTHRwy2ZED5GZTFXQm8qYZy75tzGwkL3EXjhr2pFGcaccKx3eExzmoHEmc11oEf7KAXnAc",
  "key22": "37bhcQqgGHnPDQu3Wnn3kh6wos7gXvcMZLbbo3VnZyV2AsvABhu8zVL1xarvTWAhQozrDhTrhJC9mUhNMZCrtMac",
  "key23": "4V7MSZuz6R67z7vjiTFvfEtfLDkFtr8UUNXFBQhXjmjPxVz68C9vxPvRw6vRgpDKqR5BzpeGe7hc6hz2C7Rh9Gxo",
  "key24": "aSZXYNtqwwBQdbDt6TfNTxemSP1L32Fgm1LKXd4eDikdBwayUYLzj7D3843PnDUHoeUQsQGAWgvKXUoogSDeANR",
  "key25": "mwsv87oXJpU3V5ZV4ovam7w397kRH62hTU3ipYNDrdD9puvS9iPeWdR6YtTSfRWN2wjNt1xfEMv33qx1shAoJhe",
  "key26": "4Fxfm8fBCDjs2q8aZpLVq4i7bUkwEJDzpz7jpsc9NfK7XPgMuhaFANjVntb2TAMM3zbv2iLdGo18rdF82HPCNWvc",
  "key27": "2oBjePwdT89PqVwHGogxe4kVHcVJCAJocjB8CkZPpdX3fcvSEQWvUrFRGNKJzes9zPTUtsMjLfVr6SanaixQ2HMw",
  "key28": "3EXZwgpAZSkwm8sC9QDHsfbxRsEdQULotZK3qHzA5HDPjNYV1ZXjVYXHBWjhG4kwYnVt9XYeyHUGwJMHUDVrMAfz",
  "key29": "4KFmhYKF6Ymwu1xSARJ9Yyy4ryJM7Rgc2bN9THV6SUDvXtpjCypVjeQ6qfWw1yQp6Y5Bx2NR4GCQCxBE17JBhtzW",
  "key30": "3dyJ2PnZm2mrEy9XTYTQJKBh1PAECsRTbQFHuwtSuup5xH5PJRc6stZXfXhnc1Wg9EckZ8EywHAHBXFpaWvUghUp",
  "key31": "4PyeY4BAWGpGQP6AuQKARPGgXhwmto3nSQUrQF35g98xQrWoqDRmK8t1yjdRNZapvW4zszLxiGVUJFGXBw5UBEep",
  "key32": "8trhiDo5biccBXsZuX7vK4v6EiMjarzdxoggskZBqeowGB2Xw1Fe1XYwsDbh1YQkwyzJDmCeAK28YMdB8AgyPWP",
  "key33": "2xCgy8D6DfswCPWusCtm7Q3HdTrpivyimbscD2Dp4ryMq9rqgxru7sjmaifk7EwQ4ZgM5kXQA3CtBot4d7UCCxQG",
  "key34": "385hvrvwvniSDzJyTUWQ6jmciqEECsrNaWZKMKVDC5XfEEYjCW5Tn5oshskbwdBjKUn6FFgf6nmEmX713tNZreSw",
  "key35": "N7wdoeTptbsZSHHgtc2DL6diSQywR2sHKbMthPW4CqH1qXct78VkfSinLPyADQ9T2Yb2HxGQy6HtaJAWxAXXUir",
  "key36": "5Swf5vPPasSwvTPANunignk5UijeuwXmDRrMX3cYnnTG86JtGWsiAv78BBQkwAuwgpyfg5oBXiKnaFStDY6hPTE8",
  "key37": "31uDX1jNvWusiBjtiyYKtz8NinrxjiBZELoUuzniQWisTT7ba4XtkbVJ81chXvK9Rc7eziHjCHcqL1B1UESsByv1",
  "key38": "2syZFdXueLstQxsHFCNqR8f7QrkLj73rMY8zoywy5MDpYZJsPuT7m1Twd91vYnYBjprAQ4nAwnG8N7twXAXntpiA",
  "key39": "2LfCithwm7tqwLFNxtzydLsKqEssMHyepbzv37Ce3EXPojPGyhrY28QLJ92bXmkpR3R1Jz4Ry2s1djJHEMEVNufm"
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
