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
    "2TTKfj2QibncwQaSGKCSfuvid4turcYSRcVeNCaZ6p2doBStQr398uJrT1FqNDiiTBTsg7w4ngfBHNqingBZCVaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLoq7bysEGvseYvZnA2pPtJDFXK47x3CCXQ5xBdDwhdo9FsttGbg7ijRpbZU2PVvEWiw5tQA7GVj6iKN3izJyDp",
  "key1": "mNJqRZDks9skY68S71hKezmBm1ZABciN95yY5QV1wEJsjgbpqrt8rofgSWNgwnosg6Qsoio2Uav52aR4nu3VNr2",
  "key2": "458PhTfzviCsXVqiGuum3eZYNyCjsKJYTNLjqG8rHm6v1XanGitCcv38wsbtpGD5pLL2GZTnUcm4UnRFvZo4Bt3T",
  "key3": "2M5yVUe6wDkPkoBAzZ2ubSES2icryUeF8ez7kA6BYjpTvx65FCtxLX5AQyfFTVkQpUwq2RsE6VUWc7qdJNppXgJ5",
  "key4": "2mKG9bURZefj1F3JGnbxxpWk1syH1kqNmKUukKsfJfsBf9ZUD9YkD48TwLZNuE4vyF6Y6CqS1tmgv2iN2f422VsG",
  "key5": "2WVaXVRwJhTGfCoSz5daR9ExuSYjnS5zaLpArEWhzc4cK8HbihLfM8pBTMDMNtjttF1FCZ6jEsz4U1NEYJ9c579t",
  "key6": "4qLPXDjW61ErrYHNhUYtMQbaJ47s2fSHevZa9VnukTnNdZnHdtsHaHytr4oz62LTZRHqyPUn3fFqiWEUEJPv2qVv",
  "key7": "3nqr1F1n5cMYhSbm6f6FEyCeJmZuBEK9wu7HiChQtnVWG2eehFUq4RPNND22rnBYQ4muLNRqRj9xU36xcRkHhzcJ",
  "key8": "4daEEvGYbYbrPNfgu3bFyuuExvKCbPzKUrgdDsDoYDHTkgBtmtBb7ohFUJ5jDbQGVCzpDrwx1fQvkhRMGueNCd2i",
  "key9": "4V5zjkUt4yrBeNvrfZyfwvybZPh4w8twothsnkk3sbFEKoWVXnJYVzffTtx4zkCEBEYK1Rysjyt5sJWCfmruwFUc",
  "key10": "347UDEk8KgSQm3dJWcSf2m4U7YkQfLP8yAMinh2qPD3AEn9FMfGZzVhwMHaNYqZsZzFVY2DqynEAqaCSd3yVimYK",
  "key11": "47iXbas9X9bpxMYR4nZnk2iKXChbBByxEzJKjiuZz4iJbKMAL2dhaADrdG39jZkeEaaoS9D52YAm1tMVpYjyV5uj",
  "key12": "3xuDGd1ipeKo6vd6w7RZhrHoQ3nWo9Js1Wjb5XPgKaPd5fxGYf8cBsWteEdziqYHRNWuPBdLNnRMc3rpSnFMoxUw",
  "key13": "5bbS2JzrbRwkhySz6wSXGbSU5SxSQ1CTrEXeyLqp8CUJEZbEFfGTgAPCshR9vsv4NRCqvzxoLHAzTRgXmqfAJNwv",
  "key14": "3vLzuEos27c2sjZmiNrwGRhy9j3XNopNHRbKkXoE5eTcoV2aNx1ece12e263sRGfH5HUqBSAwPjcohmzHntd19wc",
  "key15": "4uwbiKoURLfyBXzhqTM82hScPkxriausxjwn4sYUipCoyngauzTd2e4yCcEULsEqiuiyLYxfJ8BKJXUCTwZh2D1U",
  "key16": "4K2oAXPp7aTFmPMHZZxS8nSkgWDUuKy5onjRjLVXkwv64AkkdF3UMMg8We9BcsHfoL8oyViRQBQHVzMmffYr9cmr",
  "key17": "2RHojR4H8n4VAw85bZSFand239Mwgkn33g6MA3cosLNZo4tXFP9WLctf27EJZH5ankH7NBbXHie2Jjj5KhqCCtAa",
  "key18": "2kowf4oeaUnGbT6kHwYLpQNdDkkvkcQvWcGQwCAZwZnyyRDfPqZGefBVkkYQVTqTLGUsRtkYkWSqea7Ri8AMUXiv",
  "key19": "QybChPqDjdCgiea6TXVp9FbGjKVCE8E451MxoFHBUi2MjU6Whj2aNJ2UXvbz1hbkwmerkKzNu8LXePNkjaucXPG",
  "key20": "5deCuAtiypsy5YDYirCaACvXRyQS6B29ByQraTDM8dVKWLe7fHZ2JGk4MG7hPioZcDeGYZCkxs1Vg8KRYNkPXySS",
  "key21": "2mFrNSPZFG9s9Na7Kgkj86F31ZkjntcebQthUi6EZLoFP9ZUzzxern14g4FXFmcpbsC9oBLpJDRZRQV4cYCxMFW5",
  "key22": "2PeRM2WmAH5J52dp3t6yk1mnWgELZZJJE1tKpnCs4oNwgJWadyGW2Fk3wifU51Khu2h2w5FiNjudaSYuxfNg5pw1",
  "key23": "3bDzzoF8ZMkwTCfAerE47fiQ9E27h7ToDsZXJW5ht3fyuokptdnmMWXjDPPFvf6vTfVdmNYhjXByDZeyyvh8rE2t",
  "key24": "3D2Wp5TxzaxKNypd2jG5NtVoUpXDsAah5ZHKdFwBkdpycQovKaXZowoMh4ft6h8b96EuPkJB6ose3sMjNjVpWVhv",
  "key25": "5Z8SSTZgUz2sH84CepVWcmkU17wGgU1aZx1SsSKbehATXwotGHGBYqYDKLKVy5XgeDefosRdXUuRHYTZKiHZA8vz",
  "key26": "2FzTqKUwS1WPtvUvdLf1VyVUKxpHhu7ZRmpL1xszn9zYUK1j8xxv8gxxXbs2r6xzmE8GuPsDvabCczMp7Hd2ZVZW",
  "key27": "ZFeH284CEjxkxMSuDrj32iNZDGiXc7ejFwxSWXhXkT5ThYB9FrGJwaCyUTrEfmQkPpZsS4ZUnSr8Ag7HfRzkiTi",
  "key28": "49Ys93yQ3kLZZLwnxRJz6Jk7jY668XwHA5Abyuzkp2Z76HD4Y2qeV1mfjV5dZpx2DEPUcTW5eD2oQArKn6PA9yh5",
  "key29": "pkgdbXcbU12HhHodP9JhVMGxtinPFUg52j7ckjxkwmiv54yuyGLZk4wEB91osRzj725badrQXYzk1BwVBKnMLkb",
  "key30": "JCpeNx8zt1w9WjoN78AazErP17vjBQFRWYAuFaB5Uic2HoPPfAajuajEksxBahrgatNR248n3G63JcyGmq3yMNV",
  "key31": "26KTdYF59KmsSMG3jL3Z3xbfp2HWf7VbtaJNScKaauJVBtwqYA3K4eY9xNLn4unX9WfxLTEz4ktH8bEWTQe4bdKF",
  "key32": "2vZAoFkA8pvNRv7n4qRnx4bcqDbQ5cRZM8sLNBQXgbY2nxrrvaQqzjaVGP8BT68cFbbG9pyjeWBXJEg7H5ygZwZ8",
  "key33": "67kM4imaFrZSNR7zwXDXHSZEk83A7c7JGZgNUDDSrkZc2eaRQdEMPnb1AMRK7uqwzHZvQR7RQTuxnrJfRWwWKnft",
  "key34": "3goGRxQnRPEhLXMGoKB3NrpokKVTu6rVgdt5W6tBxctn8bTgSzck5VVVT5Nsqj4eTQKPxsBuXJtiDFMGuZo88njX",
  "key35": "5TZwkwT6g1BtRQehfHUYiM5Z6FqzVywaDb5wt8AwW31hnEHud2eB6MSRhRtTUEHZFaj7DBdX7RteY8xofT4vWM6J",
  "key36": "TLAfCFGecoGxRDUrx9Yy8VtthLfCdocP1NvnuW239GrC2oDvUWZGJB6PvguJUPR2Z6Nf6yjECv98nJ61kFbyKxk",
  "key37": "4CyZKvQYZmwoMmEngo2hE9QCsarsR8SjFEtcS56Efp5HMrbkA38hA5PS73pPz5f9EhStrjpePeVLyAhucLyfEfKZ",
  "key38": "2XggHDnZwRDVsB5ZCnmZp3coLXMgNdVZDryBXuLPwn7rhixdgr59BMPCfp6XHAZ5xnwLPghtWUmVmDvaP65TN1Wc"
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
