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
    "5sAijmzMzGsdrxTUXVaJgdDKLcayyVDtLJTtWveapUe55mefJceVE5cVUeg4pYX5NoxrECRghNRMX1nxnPadhE8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2GFX9myTTf5PfDwvWpwdLQn7WsxW17jT71Hn5Q5t29DFnX5d3UJKcrgBy3zwvyzBt8u9ST6ybhZjfuFxwLvm4f",
  "key1": "3amFogeGR1GtQAo5mzjZeZh3okyDw1VuNPo9K6NGZmhEztH22frumGTSJWo7hjQcqhLsCFcef5unM75sgefM7BMB",
  "key2": "2Bz7EJjxaSWa2AtBGDCX88RzPXXxxqAJfq8XWnUDnPsUD93qf5ci7GQDyeSvubAtUrdp6p37FEhkjrP93Ckj9Y6D",
  "key3": "46NNVanyJMjniz35ZUQjGQSNePiG2oFHVeYKexuNu8NUb16DTJDvg5GRvrEp4Lr16RyybmMcp3wUWMBgdU7gseaz",
  "key4": "7nFP4Kw7foLruq6qs6FtjG5y1r8WLqoJ9hQ3FPZZYMGvGFu7msqc4paanujyYazCcJoKbWYtNmn6yi1LdtXn5wY",
  "key5": "37AJfGsaMznJfT19bdCqG2bTkWjKEwCq8ga33Xu6gaWMpmAGEQ1wUJTjqpw5kCagnfixFg7KcaMniUdq6uriiikC",
  "key6": "2YfBi5d19SeZPbc4cpgaUZuaxUa2MTV2dXgUkZeu8ht7WpSVsvWLLDmXkrdny4MfZFGtmgGfFVQ9gtBPcFnhNEgo",
  "key7": "512pkyjch49MgVKX4UJdPFqEYxKGWussTeXpGvSnVwrfBv5GFta79hoGdRR7E9SYYVnRm3vDgt36d9k2AVZZ4xKm",
  "key8": "47q274otasE1z9JtvotBsF72yGdASnueZatJo6itkggtB9iMRe1JNKZZYxHfeRLTJYgpyy8WVrSC5GGV8WRYyVSb",
  "key9": "4nRBuKCJjyqNLGTcwmZtHTYeXBrt87JMbxNK8Kew31Ege1Gdwm6DRUBaFpbhMHWyYpyDUuT61wyAUSUqBy7r4wQR",
  "key10": "2fbbe7jf94EpNHQySPgLkSeYvSQnWzsxowyMRgCDGt6XVxw16Ggq7JmogBsFWPgTUDR41Go1A7wRekRsArqb9Kns",
  "key11": "W8Z17GgFv14QcqPypkYR95NFP7RVzRBj6teYBGrAub3YrSu8jEcL3qZibpbHyJsFQCqCgTpZ2noASp8qrv7b6d9",
  "key12": "4TLcKFaTdoUvWVSJa2VzrUkePTLBx6uyTMo1XTUUoPyyPu6qY9yGgMSHUS2bsuwnit5aVzyKxYiiSQ71qXcocK7H",
  "key13": "4NsXewtJzJa76pA1A4UoAw1axmFnvYZUWDoy3Lrh8UkTSZN75jJ3iVVSP7kNztKzGAFwUXJetWUJgJ3rjZqNgmBf",
  "key14": "7WaS4eV1HBqbiih97xP6NwH9LVbg2F4eevCiYtfzWdZMTPtDRHFDNvYDk1ijUnmNKAfCqtYMqb9Wj3CS45AsAbd",
  "key15": "5YxFwVir9xaewKEEz2iikadmF4k8ScswT7tVFYjPMgcnuGRwJ7dpU2BFGmKBNR7FMeNzaPfEkq8Eb9bx2ug19kPT",
  "key16": "2EMiZaFe9oyaUX5Gn61zMiWk87xFz9NPX7B8BaxEaG3TRwWTKd6EKPtwudhpFKRF7vkjz6uvjKcUptVcFFismijp",
  "key17": "5sTV4jRcVPB5dZ9R1aWYdP7RnMk11L8EiFZeuDCYta9GBpCuRqDeHY1magmV986HZmoxMLS2ko5KwgmyVjGApZqV",
  "key18": "5trqgNQCk7yDmrFXEc5PcYJjAdZyVYKuAjekdGEHmNcaPcxuPnDJ7141bxkVkShZtp9SjYqi5XJqi6vNKq2W6uWx",
  "key19": "4dF7Mpdv61dXXFD44ctcNwUeTCPJVLvDQT2oYRZtENQ2ozq7dw2g4EV9MkekDbM5fDLN1XGBisHueikB22KAd78t",
  "key20": "35WDNuNiGvv2fxVS6PTnnn21BCUGHyz7BJbRZ4rU2bY1k3mU1Papvhj38hbujMHbbT8Qi6EV2tjZ2XmZtNrhUzST",
  "key21": "2PV1HK8E5ENGccDwFcSRFabGwuS8ts9B9YToE1nGYcehu5mVr8LbEcsk2wDAdtRER4HAjrY5dGxoXxLDz9b2to7W",
  "key22": "yNSY2QaMx3St8Gh8169jBH7HN7MVksUx57AA1U2A9uPhBBRierUN3Kp8CmEo1TvKiSPUgZEqWRPefsh3tUoAX9R",
  "key23": "5yYjyxsdpfWeAeATUSngEXkLm1pBT6kmwCGqvCFYYfXe8uaXE8aD5uRwdUqXMEkiETbbkByu9jAg7vnxgibLF3sJ",
  "key24": "3UyarCLHNLhW1TQdXUUvSg2UfPYUVdou8w9v2JTaxReThEvtHpJmYExnPa3fAKkRoSqFLjYDKbyKqEWgCyqN5S2m",
  "key25": "2CocEyDgdHHdpejMF9CEhcssMNv5XY9Jo76L8isTB25MYiu23TJaGMNm2ZdegLyqpeipMQKv6PRyH3BV7z6KE6XK",
  "key26": "2wrihoY4kmMCYkgFnGPFWJRahjY4FHEFnKFbTsTEhpMFfSXKNbF7Pso2UbLP9ow8XnpECs69yvs6Sj7y1xzNKvME",
  "key27": "DBrKHL87Aa4oRfy4PDjVvJwNS8nQMG4H6RAsyyY9Tkh4DJ6R8EdEYkBZvBf1qighhCcDRDVMWbfCVdXq978NHmJ",
  "key28": "56mts7MJBMfKpScehjr8CW6DnfPwKyzg1PvAEs8zbd5ZumY9Jb7DsC8DXnd9qFAwENkQbwzpFogCihLuvugpotfQ",
  "key29": "566PCUoTrnvfwDKc1D5pf9qrqv2sZhMJQVFrKqoFpQaevKijjSBuEsz8RoM9tR6jgs9M1AC8sTK79nz39bhe2umq",
  "key30": "2jSUw62B9BvbmZz3eVTEAZimBcrGvh6FiG2w2fXsh9bm4H5g8YCQmdR3xq3pBoVYoKDDMmNkKiPRMycroUXrAJjH",
  "key31": "56AUCWRrkQWc1z4Qs7cGrdSGrTt8AWVibz5TqriRK1rhnufE5XZh9oh7Sk935wmWt5hKKkTK72zF3CmVuajoXwK1",
  "key32": "5awS86JfJ9trzw8LkFLPz9xX2SGBSjaiC8SZbCkkjYjBdgfK7cPzoPToESB2pqcfrN7hDCuCjhEbqcDQLKL15mkA",
  "key33": "57p1H5NAi2P7t3XcEr5Xn3vepxqD8eNF2U8gVzbWEx1MQaAmN61csbJcrnDcQkxAkWtXjTuZJd9nv9htpH9umjNk",
  "key34": "4cutvi3UbhdA2EjXoWfdcxoRZRrp1QKQcSfefPY38kRM6vU3BHk2zDvsrtAM36QexZvWB22Jsdraoxc9UKTQWM5d",
  "key35": "53C1rKkvNHnMpfeNjFfRHyN67Beuhg8H7iHFBJKkyS8vCYVCMLAzzBMhJav5UzeqE6Cz2AURAphVHtFvFMpacBMR",
  "key36": "5tuNKjkwCoMSccCBaqXQebFw8mUQmjnQUtM9B42dEMgDTJfFxtT7QKCFRXChrv6TBEw9s3SkyPpVCJd1ASnATMUU",
  "key37": "34JN9mEDMUeyne5MXLyZvxwjSipsG9qoHmeebrakjrLMn846GsbRFeKKYkYTReYK6GPXCH6khvG2nRzWqohhT3j3",
  "key38": "36hgKbdsqtner3tP2waeXJyyXFu3LgGm9LeZV2JZqK9q2Lu3Hay3gWJ8za3HYmjNMQghh5Fx6SJ2BLUudpohmGLN",
  "key39": "2YB8KvA9cudjqFCUJVo7UfMNCzuXF64opVEmHFZv4cjkE79DdR84surzKkZ3dBAsC7Y2xBFjw3kzMXEym15G2K39",
  "key40": "3KwUzE6ueNJ4kgqNemrrHkt5FngvqzT2zk1RjwrBDozQ9bxUCyHNmRHwZwQcjbMU3mchUSFe6pircAuQpkAxaGdG",
  "key41": "5pDeyzDVnGLMdQehGzdejZqGqrzH7iZqdxb5eip3BZJ1fnKHeGAsQbAAFGTNnkhKoggGo5V2Y1iz1gi17Xki6ne5",
  "key42": "3cTanKXcE61Ym83i8mnh3XdxnUNAvrdDqEvqdyCMUr7HobL35T6vkz3eCv1vy2UJjqe4nJXpr7HcDSdfsodzqAco"
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
