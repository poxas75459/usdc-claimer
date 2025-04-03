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
    "3naB1gMZ2L7RbUyStyvamjD4vFXb2Uc3SoK8LPq1QVW4kmVA2HHoiFhp8nBHK2xrMeHyGowE5HqBRJXMSLCx1BuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSZTQfWhRR7xPwUZf7QvXxTY8GgpMs2c7TGx71JUzSNy9UFACbby6zT5pBLCcv3DKiqbSnukgPHegJUn8wgk8GA",
  "key1": "WKkaCwnrRVrXL2qczQL1ozTYpWuojsCZAB9pd27iDUFf9MUhsh7xoyTKuqUQzfxcPspQJFfa5qFEpfEjJv3Fec5",
  "key2": "3etUVuuE6ck2cAntorMfs16w9HQMSnRVtmGZG8qXajG9ZfxrXFbZowVq1oWSp4LPP8Rd5G4HB4WRc2MW2kMujpCA",
  "key3": "45MZTnGYP3vnP1QSmCesTXQcEgJheZtXDnRgKy6a1MPo6CxusKygpHRg7dP2kxrzK7tTxBWgA9HpkzEx5sbMSe5H",
  "key4": "5t4UwBXJAgDfSBznXpWq9Pn6nhMm2HccCb2n2CdnoAegP1D2CZapoFgZmhtcyPANdV5r8x5xEckLmGM4XSacPAjY",
  "key5": "sehMjQMbKsE9PbAeRmYaQUTxL2Yxbtjh3DWfwFdGzuRrUDANSqFtKD4BQbUCP5irE7BooDk1pPJX921znrRdZku",
  "key6": "WeSPHqQHmeSaVcyWPTXhmsUVrdyaoZJUE5vrpk8zbtm35WAvPpHGyDiQoK4LYq1w7YAugMbAp7WZiuKSywhE38S",
  "key7": "4zwD1ndYaVuxTv1nFLqX88SBBAkSqyWa9TVaAHnwxbbNxnZT2BDF1cYYqTcqEAhBD6EbiAAHCqB5ikFecnDWKQ3u",
  "key8": "3qz5hpL1N5KeG8yQyXaEr3F8keWGrhH3WyR99JBEaM6o8dPW93Z5jfH9zmw1o5rys6PhU5Ery8MxWyuReQNimmnx",
  "key9": "53rhp4NH5Vn1L4oTk8E3LGJqqsM9fB3cqFqXPYK6wFTJjvngRRc9A5ZvYxrJd7EQytikuTq2rFThFRad2uXBgGcJ",
  "key10": "2uGvgxFnELGY9yU9BTRQxztLyKtPYCbVohKXyW8AZg9P4YyCU3TzYqY5AmCyt6T7RhiFDhTByTzxKBPSeuennZtu",
  "key11": "22c9w2hUKaU1UZbscYu39inftGzUwZntPZLcW6jiRxmgPfMttsVz4KfoKd83262qghn8Qyzt4FX5jkiMz1CWdA9d",
  "key12": "SH1y1jqZ34ufD1Kbyx6Wev37frWK1Mqwih4qazc2a5RJE64V1eAqhLqDsAMRQRL4eRNGGpTyTcLLHeaTsniT1M5",
  "key13": "mphvMYoZthmoSGxrCHrytjHa4zsNggLhEaMkimTTFot6amGdKT94w3pdja6R1qPEc1VUuPkox9ZbZkaNWV6JCyh",
  "key14": "4Kxc3X1XGtqiyy82r3VyQmQUyNCT3afcWdCnnvk1w7aemcAAkzyv445Ai9i5RQoW3nCcjov9RKTgoeJ4rVvWkr5c",
  "key15": "3vwUsjpNr7nd3Ujf12pMXVj8NN1eh48oRvLtLQmGgmU6uNurxc2fc5jbtVx825CeNeXWwf3vxDUpEqUWZgHM17eE",
  "key16": "3oxAFxPLvPtQgp8EEzwHT952jstANQywDW8xLev6TzcPmkKnVayeoJfrQpCZHHdpFDKXgWRFhNaV7gajo6WJ8FrT",
  "key17": "Xu2n74e4GoJaGRSkDzkGDf9jrwJ17K5PvqSdYUe6p6kjU5KmicpRmhAU9aFi43i28kEEzDu5AYqCbhLyyd9KzjQ",
  "key18": "2gPJfByNF67q2p2Kew3hHHUwrZRgcwEHpzbyMRSpg1HqfwdA8JGieVjKwgoVczfuspYwmXdJpvyh4ApMP5JJWxrT",
  "key19": "43NJnaAadjcoSabKLFqbuchVtFjLT5USgsXFAx5XMo3PonYVEHHfesQ1UZEzatxwG1VQCosFPdg6Pqmvsydk7PZb",
  "key20": "5HQ37qhb2UoawHMg4ARp4XFr4tqPPXfMyEjuVF7x81Dfbu4SQJKgKRqojxnSFA7Rs9qfNJYjAWXxQRbbrStDiWSX",
  "key21": "5Cu3qb8Yq2kmBhWwW4VPNs5V65oCxnkcqtAqoie7H8qGSarCD3K9RjmeQ2rPhJezqoeTJzxq2rTHkpJ3EYQEJUkB",
  "key22": "31CRaWGPsGPDercfm18eVuqEiP1EWNzxXCU5MeFwxGhy7QcYvGUv4fQmo8481dMkqFuat8dMS6Tb3riTraBLFkzv",
  "key23": "2HhpQcJmLyjYCpmEg2mnks3qteAi28kFBuqWkbLH1hcYvyRCkvChosmq2wGqhfs7WW6smLvCEToSB4vvjbYU84GX",
  "key24": "LVvy3bVw3o15KSfuuGVxUxRgkpq1yhGNeUn8wj4XnxeztkgKX8Wt87cgXQdw8anfENtxizAr5TULptrbav8bEnN",
  "key25": "2wKpLFkvFXcT4wuWTNZRo7PLb8zkcYuUaxbs9Za8AniknHGnjeTuQyqMKYaLizhFdWT3w46D38PghowG1UgW2Dq7",
  "key26": "5Vc7MPMkP1gMAnAvbThEnFnhCvaddqFiXgvDeHvfm8EExasGRk6gKMkZgPX8Dzcvcpew8i5PcqMNkydTfiCB28tZ",
  "key27": "2mUay2At93iBzi2fcD5cmupSa3qRUky3ktDKgu3LnEdLVnwAtHTnq5qmtXRRzQqb7de8UJfV9EAJwy4og39gjQ3U",
  "key28": "4QUkmftBFJZh7XYjuoxjXK6tj76Qxqh83f5Cu4h9wAccgt2MX5efsYsSsGJp6aNUuhtiKtdybW8H3P3im8qAeJPm",
  "key29": "4KNUNoDUuvTUdHw8nBVwmmYn3DdGAjenEZHCGevdCPCY23omi8RUZgNcdBAHnWps2hxqSYqbRE9JXJ7zugNKbP7p",
  "key30": "4SUZqdEMHkLKJkS45vaYox4rwMsV7YRpxcGLybT614f1bmq2GaFAZsrmpFTjRB3rTbGuTmU7DWxupVnmoEPDLW2n",
  "key31": "5TwKojv7c9Fy2YYivfo6XBVCxMSGh1Zg3aQoNUqn8rxZbRTwekmXG2nctPe2YqMcw1VFcsGYigmyrh74g2Gg9SMY",
  "key32": "5CmdXTbxAWLZBkD3vwKYDvqTHM7ru8gJhTKEdVLpCD2zbsVkWsYEogGY7fDh72YQBM9NPt8zRd8KWyorGBkUMpDP",
  "key33": "55hwx72uvoqdKXcTp396ih3xEjo7tZDhczmP44HaErBo88JH1zTiC4YEHUtS1RoFiQzSEbZvkipUJMHPu3VQprxu",
  "key34": "2FKMunnvxbkoDTGqbxi3CXnnHT6A39Arz398zfLR7MVKT4sx7WpoyntDKSopnLcpb5C13CcXnWfKETgeQr33PVHf",
  "key35": "3zCPpwZNF9NS8CSMjwVUAhV3MffRJt4Dn5KhquBkhRbzjrLBP1WETuq8TWbZtHt86i5MESQSz6FFRddEWYqCfEEk",
  "key36": "3cymFjR8FK1RF6EK34XGQtVe5edTqN7Ei1sNbLjPn6MAmSGWf4Neun4TYCWhznrFkHCwBpbui64xdzFd12LLHYoA",
  "key37": "2qMjN5KA11McvXMfLLyuCcxZJNNQrb1YRtuY9g4f7xjCrQRLf8612TboiTGeMpx8jfJLysLW5Gb5ZnXZx7UmNoPW",
  "key38": "4tZ5FHFkJtRueJHoESPR3xjxi7pgR2Eo7PpwN28XYAfuN1WdZ7WDWGCcS4Ap6pTvGixhecKFbgDxp3BnkwhbU6W8",
  "key39": "4wUDFbeXhcvVHbdsXzpjbGN17m1PBz3ZsLqT6QjVdQtrwSy2qotDvTKjQUeDhQKP2WACH1fYxLSN8RDuy5bYi6NA",
  "key40": "MZ6UFXtvFXBygY6mqa3Jcp8FUYJnF31d9WtejA9t9W4ujFi2noJckQfrfu58Mqppz3BXvUe863gWkDEsnQm5Uer",
  "key41": "5CHRjcCuv8e2uuPw1VmAqNrUMEqzAn6PhTiAopzGP1oRKFfwo6TiiGYD3R4YQFm7mxEvADqm8Biwrp2swWYYhbSf",
  "key42": "4nx2WSc36AH53GSDuk34xYnumSEYGnx3XW1jkffBdReh8d1FsLoCCcqpZvvz8z1DZ5bp2vShTAY5aXGs8odVPwUN",
  "key43": "5r17qvrk2GLgWMahjmfAQWYNtrikEuFTmJ7fHXhwDfgrCHPWmJkXUAby8ucRCyvUVnFouuKxonwKE7VVwcreA8dj",
  "key44": "5eHctULXYkRydn3XD9WLhAuuXDzLT17mxuVpBmuTUTbST3zF1RH62tECVKVwhgx6ii86ND17FVsfST6basWjKqH6",
  "key45": "2mR152qi37bxbAHzmhFUxh75JaEyVTsY1h6CJ8Z8fBif1z3rW3rsyEPQhr5HjxHwzcQ26QqNAMBaL9PD3n5ngy2y",
  "key46": "m2sP2ehVoKfR8sYNwbty75L3UXYzZsA6LDpZ5H3vqjycu9MmGqBRw8LmhzdeTt1HCoEXoxyXW9YZtxGx5PxxfgM",
  "key47": "3kTHyALHdxhKZVfLuGoena1FL4sbx8Q2Zg6twGpDpWHjD7C77Lo1k1LFkVLrkrNMLFyPAbPu4MS8JiKoU8Q2D5QW",
  "key48": "5QryiA3Jb9DrKDUhGwwpXk4NPFGPCDPcbSwRRfoRa7vgS4i3nViJoK4VuA1Nq8xmme6L8YMDM79vaoYP84nH5yt7",
  "key49": "3TuR4fzVi36VP6anXHU7CMascRhGXZGJD3vdK8FFAVN499HmzVLtMXHQwgjM72AxwN77FrSKjVCxWGs5VbkwUGKc"
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
