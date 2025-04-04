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
    "2VwWJhze1dNXiYNwXsS2ug5eE5xFgXaytxEUTEPh4zCqwTgXwG3NhT3UsvarfXSCoPCWSWQ5LRDqG73FVdbcYePw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fzr7wNXhq7ScUUqbYRpgYa5UFUkME3kF6TQN51vAxL1GkxkkoGBFDU3FarQHHvig5pwpKRUkaNJHvrG3GBqq5nw",
  "key1": "nuN6xt22oU52PnFVDMTDyPYJ49iMBszqC2pqAFoyBVjSvyRztHDRmZXKaLCX7K31Jw9myqA8ZnSnDTF9sbe1pGK",
  "key2": "45W7wXHUJ22AUzPutcrEVVWojfDUdDLStnQtPvZzkL5ZhyViFKCGosgbSqUDJjd8XGek6tNM1hAYVWiFK64UnsdV",
  "key3": "3Kt1pUJ3aTGyuBjX1wdrrTPshWDe9zQrhGGEeKvJSHmCNpFELrCQEDY3K6sSi2f2hKxQauou9cSpvJSdVXGUpoce",
  "key4": "3eAF6PBZBCeWZyorJNoBAFpF9UANa79gBRYamqRakxJRX9s2LSfyyUydn8i3sjJNV7i1mpFZRXWoAKSRKWxN4enA",
  "key5": "2pszTmQ9aykZyf4P6XUbPbg5wtbD7reBSZffZPTkN13erM8xKMPJTrXk6ykUaoGaYGvbzvYXSnJSd9X8V2doPA4N",
  "key6": "2yS4JMGHsnFEHHvZidX3APFZ9bf5X3QW7bbvBd26KNESpyU39WXqMudT6icTSLPMsXfTb8yExzeiCF3cPDQAJc5k",
  "key7": "58NHiWADwgiDL18SbiFUuX8ybJ7S1sXoBTa7rSG8BgX61SsXeHVj1RyYSri4aShciRA8JSZfTnpvunRBoDrbwtxf",
  "key8": "4u9Kqpoz5DKYaq4WFUsjhq7dTJZXyTzYt6Vdqbt3fcv7fvY4f8SqbMmKdE96zaMZf2N1Fp3wkpnR3hDVj49fyMrU",
  "key9": "L1DFqgtAhXnXRVwG5dcfXd4XZePFTNrdvaiKK623f2xfqZxMnkXrHq9xz31oyF6FHgaKd5S1iRmfJPLdCD3vZYU",
  "key10": "2Y6Lfr5r6SbMQREeR6ojPcNiZM5yoM8rKcs3tA71edVxM7g6V62ZKH8bdWZnvSxYr2ZBoBjRjg9MnKBCumsD4Zz7",
  "key11": "3d7PRoathXKabf3Gvf2kWMEVQPKpaoEbpcSqnZ63DyEqZdcYwKHu1vD8BomsbVWe2kdXPdXduqSVvZmpU7Z9YEiQ",
  "key12": "v196RggaHbj3Xo6rmc98gqxP9Ef9nhpcQZMuZG85cSKHvAitES7bLYsChfsYhvFkozyy5TpfNMWG2BLATTX4LWs",
  "key13": "4P3wYoCtNFrszMUbWXYGirA9sRf8QqxsMbT1uNXg7LNucS8V47qBc31kx1Vg1Bg9JDrq1HV2mq2A5mhuQsZgBvav",
  "key14": "2yyyDvb5cptzztjgw1Dn5PxbjQyvg2nkC5QyTp7qPLoQNzdZMAZqeJwfEmiQDYVSxxSzKcHtpd92NyepCAMhAnAR",
  "key15": "4LFxipEYgWWVbte18zTVegDpm2XwVAeVC1giA8VZM4wHdkeZcs31unHwvrw4jcf6gHK3UDVZSGeW9SuJFFbTWwaV",
  "key16": "kWGW3xXk2VDzd3qkyQb7ZMoYgcWSfwyZVRHzocoB6k6yrjbQL3PbNj1vWoi7qCpQQ6UpGWp8HXUH4GzSyVfbSkj",
  "key17": "4zDPenYMauktbbbGLsZjFjgfWxA7JLNv43WpkEL9gsv8kJBjhmJareBLrTHVLUwpddHCBZTzmDeCkn9MvqmqpiLv",
  "key18": "2ppMimCY4rsSaEHShkJHmX8ZiEm6dr92RdnKqqC1pi9tCVi9CsbzeYBqoSbUwKyt63shTx6dzi5RchYtucLA1L9E",
  "key19": "4PZdJQi8arGeLqmo998Q1WGNHBE9Jmba15Cz2MhJtF5sZEofR9XeusBubiWace9C4n4VKSMjRrHXKybiLg5nZkY7",
  "key20": "5Nx3qoVXzDnJy7xnjMihhmgydq3HBWW9V3erk3BNJDHTcoQUvdZ1WPSDmi7fcVisysPbbZH7xSuPsezy7j24DqB9",
  "key21": "2EJSi8mnAJFFDWtpnWTFiceMgueF7MFZrdNUvHnNNhpucF2G6qPuy1Z8DBBavGrXV8SbJ5aCLYsiaiAi7mTkgj4f",
  "key22": "3RHmLJGm4R6uThkSPxhEftGZKo69oxM75M7Ydw735wdUh4P8TtBC35Dxtk1Z5MPQKxTZ3ue8pG6JUwUfkNY5R1CB",
  "key23": "49g9nHi6Nbrthc4Uu2EtNKYLZVz1aGyW5Y1GXpcBx7ZtsvcWa7LoAFE1H2Vd7NBJNSL1NoQ79RRexXia27GoMLCb",
  "key24": "43YxeirC1UCk3xpaqDHwFC2Pvdotd95mKAYwKhEeuqzAjW83TgtRgSgt4K8Nv7FWr71d6SxtAKbwkMNzLyHsmg6T",
  "key25": "SwompzhZxfa6WEoWv3c8bGVLS9DGoCXxUKPchVcLfsX5DEux8iVDy25ABc97aYfWQK5Ea9EyyqeeAya8iWehNmV",
  "key26": "bPx5K97tTXGLXzB1Ys5KJnQ5yBkBnVNzcanGkef9YsrntyHGGxJHKhnkyiWvBUNR1WKPtZPLyZ6cNv6MKMeNBxd",
  "key27": "25mGDjq4LYQ9Wn9tAqdDno7Z6kDm85chPzmoZm8FMS3Zo7ZkWtAURaPf7wtRp7xHqbsYs2maNCkki2jyghAcvEfF",
  "key28": "5bEH19rM3SQTeZ2iPGG5cuzZJazPKbyih9NYesGUU7RjtdNvghadqFiuog56ZRM7NydmGNYYdBq7dJMzb7k7QFhv",
  "key29": "4enzTJ14MDphkitqsosWj84Ro399CfSgeQio1aCeBGELCDRNZFyBcEGa2QvFmPbaUMBsbmnADZX6RQ3rxLwD9zdC",
  "key30": "5fNpsrtDi94aTaN75wUxGCCKYWr2ZPEn3qvCm6YhJXkXmSzivT1tANXnbgmrTa9ptoDgEaij8NAJjtzkpshmmZKD",
  "key31": "3qhVuVKj3YkXEjcGvny4p19s87ZHKvYkg33uRTWSSrpi5vSJS2DFL3U8qNqXDiBsvjtzB7NFUyTQHtv8uz14pcHk",
  "key32": "3yEY6bbPaD2pQoRoNAHrWKJodu8JDbcvoM5yw7z9RgsEMBVLozaDN6nQGnqyJMidNhYX2qQwRKAMmjfDsoLx9M4Z",
  "key33": "2eqPho3Dv8qqr64GnHiGpXi8K3FM2HL7JEpKfwwMvfxSeU1TMdMkup62vFdqCnjNY5xWKQcTv9FgzpsK5ztFgJF9",
  "key34": "4SXKe4rSiDh8Kfki8LX6LakrW9AqgCqz5h6iXqgbrfX3R1JMg2PGpKbVBvidTv1h9GeX6n4YiW2GpYBiaiDzzR3Y",
  "key35": "2YNok2wZbavKqUkk5dj2KBUS46eWhgDWT4kRrV4qMARa6ShNQ6meuBUEL68wUkoT4LkfouyaJTQ3qZuLc5vMJwyQ",
  "key36": "2gSLqdp9V54PfgXuqnjXfUxrjqKffX6rfKUYK44VCdRHLvrgzjFbpFA16sBhvGwB5CEc71gBnPU5uR3Zx4DrHPiP",
  "key37": "4bUp2eGqxAN2htBrFCtPVbW7FrRbYeSrnNHXroYqKu3WVuB1rXpu5Z71jGA3BD7vwK3ssM3fVTdMKsJ8bNFZnLKy"
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
