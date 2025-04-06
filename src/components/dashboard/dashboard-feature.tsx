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
    "3795YXf11NBLkbBhwh2EtZsxfxjUE2madQ2pmJSuiLcjqvDXYgT9WDM6gKapGYWSMz2GHG5ZGWMunb3HDxSmaeqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XX2W8VRQGYJ2ZpreVbEaeCJWBCb34hkH8rRTGLzjiocWoLjXqxgJxVeLQtfT1pWR9tJUypZevkmedw9tKERPdZ2",
  "key1": "8Ry3qR37ViU1Zyko6pb2M7ejbiev235r9HSYx55WZTf27KJJq14rm91gXr4Cba2SytdVSNCQmFoxNLKS517yNLR",
  "key2": "4uSvzWTe76bvt4DpTNw4ps2ATZU882Bz5oCkcYrwzwKgTVXkYxUASci7zTRRLwkcW1w4PhGbQ8tfrhqQboS7Bbf7",
  "key3": "5HAupFTjanttZiFXkMN3SeeTojoLhL3hfLYsHgX1hhoa1tf7vDjKwq7yUZjXthrbnosebgSV8G3uo68Pf2s4LzAY",
  "key4": "5pkeyAe98awi1kQn5xf1nv2Dq495W5t4f4eueLde8pDp4fuFW7UpaxWqKsWVzJsEGYLemQVJrVEPA7wqddXcwUk6",
  "key5": "5z1ASB2XDTASZQYahgDo5hco5fWnynxG6tBUtw1uJY5uxy1VdmUQsfVGiJQRc6ffFiVfZnPnNMdUwxVpUw2m5myV",
  "key6": "4pmQrcdDwGYmjfb7mYASnVfRJAmgKN9xjRzk8sgvw7riVRa8Qb77auycCEytRCRBaxyjGPs2d4VYEMHQf5hKJ23C",
  "key7": "eSeaRigwhzyuAiRMta5J7vmTVwJYQLsZNPp9kmDnaS9kfVjRZHghh7HX7h19gUgu5xNqb8k3NsPwz3mxGRiDiFB",
  "key8": "3enjeiRmA7nsZg7LJCQHXPKuUYi65X7WiDsFC9AJMGy7Ch583yhUjZTDkWrhfiUDQeQrsFJrrqWomqyHafanDzJL",
  "key9": "3wmTUUmfNLo56Wys2d5mT7ZLopAv6FykLg7BoQVpM14wKoCbzWpnArJ483mh8ZEMpc7bPkvN81a7myXwAgX2uYRn",
  "key10": "9fLxJvhpsRpzbxMB5bBRX1oWWS3VsckwahLYLKiudZcYWU4weiHviPD7r2Cwi9xsEvj8TCQvvLEt4rPfxJeXvqA",
  "key11": "272X5n2TeCcGTZiyYvjtaWi3suZHGKm8Sazkag5VNE4VUsYXGeMb7hsJVbDYzdCngfCNXtokx4quCFRU6Wxfkofn",
  "key12": "3m8c8ZwSz6QXi21LJi9MY6LjhrswJL2KbckYp71R83Kih7Pogr21D5owGKeo1mmFnKNaQMhNYqNo3S1b39bwKdK6",
  "key13": "4f4SPW8p592WhS2SZMLjiAFxmqJVrm5ZQmhRq4TqSKW5mLtV3K4BA4yQrPA7aztK73gnYgwpxa6PqETshgsSLgf3",
  "key14": "22Gjj5qKpQv1DCLCbR7ca3YuvcEvHBiCWXQi14wYPYM36h2ogyy6zWbfxzcF5By9fL7LzDyJxFym2RRxHrx2G6tp",
  "key15": "eYo1TmdPtpwBysNSAcFiPGffGnSfKGAJ7uuzcHEfYZFyizUTjFwLuZfAUqAskvNoPHcvpjEBMu7wdrBCCLm87cb",
  "key16": "5dQskp3DvH8i4GnKxSkFwQRV1tyuLteT9kcVzGx6pH5Xx1WcHos6Rje141yimTCRA8roCL6ki1AV3PJpxqVb7ZpE",
  "key17": "5YMA1jWdeV2deL8ShanxEdyerw3Dvko283mCp5gXw1JQWiGA6LkNmd6QYE1wDRKZW5mTHXzbd2zrp5ww5ySxfH28",
  "key18": "3QkmVLvRBJ98iECwqxzZsj65dATyt4V2R9Q1NTFcHJsk954Bg4tjcu7SFAis5LPr62AQoUWnH86JarpEj8jScvP5",
  "key19": "4diGSNbf6io7BWWTGKqXHHGnN1r3NJ6VUXEQhSYpqirY3VsXnDERF8Ch2k8tg8LgS5tGtLW6bEY68wVb5pCMBeqT",
  "key20": "cme5G945aNVE2sqsbvYFobyQkHj1t6kqLBJSEuGYxFSFvRKmsqGyc49VSuKMgPRaqmo1zHeaUuFZ4tx344hX3zY",
  "key21": "R1QFmU24YbdApxXBEcMJBqrBjG8D5dtf9PC5u7UJV6asfmPFiXsypTn4yC3pLnpSYdAuabj8MaoxpaC11G5n3EC",
  "key22": "32UyyFLuCm6o6fQrCoSfHdjYVwHvUsFPrFPzQMPuYdHYq9fbtJhyP9cGjNHxzVwKCxYTN42A3EhMJavUp3osZrQc",
  "key23": "cQBGV3gDyXXi8yfFKo3ySBuzRs8rwh2Q8MHtS2NjQA6LXgyxxUqxEJf4oNf83qkHEvm45Z3YiPvk7u76oWS6zrb",
  "key24": "2dnfYe9iyS6eqiD7at23utCwYeM27Luauy81grVcqsG9i3G7EVCk2evZvvsXB6MWAzx9RTgfp3WuC3CRTghuNRRE",
  "key25": "5EyBVYKYpkW3YCJf8wFL2otuZQGSNDxKkUraYqGrcaVNoUS8cdr2pqzW67akMVw7ogUU27Cd57MKSqASmiZeHJ6v",
  "key26": "3DZA6g7sBQJ65AkNKuEaPoUzJKiaGG9MLYbNTV26VhVpDZNfPuJ2pWKyq23vjZUDcSBXoKENa5iK5QNLVX8zHmUy",
  "key27": "5NXdMTaW91mMZeF2cYoDJq4Brkwxhow9max5Wk683yM4Wgbxd81eVwqXi3NzsG6U8PiTcCoMfuU6ud2mGCUDZmpu",
  "key28": "2BVNFfse5QD11TPBJaVpwSgUDKH34q7jkzsSXbYsNAMV5X8FN7HiGbweMVGH17b1mvCMPWaTsaHKjaLakya76rR3",
  "key29": "32Q8Jz3o8zyMSStejp8DVRy4Rb7yXbjmh6UqtW8kS1c3mjDYg6q4AWG4DZ1FsiyKkp3xnGJ2aYepqaSqEd4SDbof",
  "key30": "2niiuB28ej6v6YPPkeeRr6GweR7a1q9PnWLsqxSdZkyqCNDFNFXoCvxLZQ1wCFHi8KFX5b53SZzuuem4TNW5tZ8z",
  "key31": "446pSLJ35nttKwfLoBowhn8nqWMrxZcoFMwrm7g7t8PNwUiqkosQuehkCRx6tyQoLkf7xqzvxqyuL9UME8crVVQL",
  "key32": "2mLKRLZahWUgyWMd1zwbREweCgyofxJCtp2LutVF3TtGrfMnDJMnDYgqVChPYCt2Q8KJQsnQzSJ3afFpecT5xVYd",
  "key33": "23HVwZUMdbfvp43z9rmVkwaRV4gukJ45GuuwJQN1kjCnsVjqUVL1uvHcuEy4Cc2VxwTtqikBmS3CGZo9zXzcR49n",
  "key34": "57pCB32FuA3Muu7Q6C8R4uBFYkpL85XwphqMK5HAGHpZG6kxUwUkKQkCC9VR1FJHcURP5eBpst6KCQiEmMGycUd1",
  "key35": "5oJidZhpzagGnc3VuA8uiu83riy2GWnLq9HYDbcc9QYqSZjgm2729YXxLgn4kSHDaNTYcGwUo9EpxBWTKc9TnmzJ",
  "key36": "4QcKmUs1b3LXQhtewn7jcW3dfdFYhS1cBDShn6mGbqkHYgkxMwsBTmaedSwvR8Jau1fmjXQ9aMHxBkXqPQrTRowi",
  "key37": "2dj1PvMHvfm1TXN3gofwwpFwwPaUBhqvE8tj9xVZX5e7xCLXuJcwWT8NxgeiQ6SCmRKBR8x98aBexkPuRYYPLa2u",
  "key38": "YmLqT6XSxEXdgxMPq91qJd4BjtH4E2MAaGCT3wmFqxuiwswrsUdiN982VphQLVebw5qURrLZvXYizAanrsiKB1m",
  "key39": "48RXjRyMDNgF1LKzYZ71jEhvJ7FQefF5os1bSMZK48C7GULDpTuuJMPJUKie6E6boevv1QR4rKF3weSZiMWiveJ8",
  "key40": "39hKF5QazGjCBUqkXb5HzvNzn8pHEFU83QG359vgWXkb6FWjAwN2BxiPKbs8uz7Hkz2BeB4Rz3gjSPhLZCDHodmY",
  "key41": "5ZFX4cYxHh2t4DYZtGj9PQoRvE1fJhq2n7Bqap59NFSoWsMFmxYN2qSB13c1kBBpo9rYtC4vygXbL6oWXLLFecuS"
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
