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
    "4Jnqgf8wfJAY4N8ZnGzT67KkiNcUURrrwsw4rbdxjgBcEdCTsheDf9sPQyZGJvLgHH8VGmkyyqXPmpehQ8B4d5jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mCNJy7qRbGN1FHfxwGJdH1j91ZL4NgHxFW7b9Y6i3NipWRYfCJX2vzmQ5t61qJi7Wi8tQcVhqrNRCjyTmVAFiJ",
  "key1": "4J3fzkGLcTZKQKkHa7PL6Qtf3pmA84XKsHxNRRH1Pr4HP3CgREwafioKKD8bQNrwJaNA2CdfrA1StNtHsR6BPtkU",
  "key2": "4xWb6okeKRsCaBDbHqgg6PFwo8GFvEAiTiwRRGmHX9ocqST9y24vLy3KhkYZkRcDWKn6ZCmdoAhwdMW4s3Sa7vTu",
  "key3": "3DJniR7tXmM1UAabcTdRAL1Z49TURhpNb8WpYgDQme6CyKvLQN8jQKqUTgE4KQBYQH43hG7nLzrX2dcHPsh421fQ",
  "key4": "4Fv6wqZVdHV5t1gmUjM8H5oTkRf9WvwSgKZ6cYjxyEfH2yNB8vmcZHQJw3whXqs2icnAZiU5CapXZqx8jTxS3LwB",
  "key5": "5aLTbkoZMgck6g8D2AfZXi4SmMb4gWoJnAdVebdesZGvPbUJ8F8AoUP8xmoe4dMdzs5zWSpLcgDiWf4qRtCTMNn5",
  "key6": "Zj83tXiiow3jGXXioxpJfP2RTVb6u9ZZLirx5VNjcK2ArUboZtPxaojgyF5o7Lq6HighUZ3J3spsENHtG213kq6",
  "key7": "53WnfYdgLaocSBE9EqXtL8J8JpPdEJqhVKXp1UFs8mjJK7ucT2gcBLmHJ6XmNE6BKUuxj8d2v34CaTmg23uaKRoK",
  "key8": "3hreh5MsjTkSn5wVjVaGTNP86arvkT3TAnVGXEoMipc8U7rt6gKEmnZRiJjYvHzBDt5jqbJy9zR7jfJn6vn7AFUp",
  "key9": "2tJqZFzRauQo3FgrqBHLdNEXQiuTQENXGiV6X1wELJ1BTUbAa6BJ2394nPkB6ezkFYqtiHPSYHQye95tNC37D7Ct",
  "key10": "Ctu35eETDN6zdKnN44StqMQwteDbwBkVPgakXNw3BAxKyU5JgSCqRcQESjQekL3oYtEM53zkQXvrywXcPjwNUPx",
  "key11": "3jzZNoCEciTeJ7feSBxGmzSpdTpoukZTjHqZGRcq8DQFMD2vRR7kRCCx7RTShC5y6cLrLn3keWzhT69MS9H8YDmh",
  "key12": "5QndktUnbDXXaNzgNVURmRiNuAyMnzS42CT5bY7StQKZibDNfmgTf3WMpq4U3ALCGVNS6SCNfr9hb918KxgZ9a1T",
  "key13": "2449tF3HikT85GKeUmNmh3LkFpZ7y6vaGAaytohaRNFwrshfQT14oaoUcdEJWD2KzCH2fu3sRde3T8EtXwCo18XG",
  "key14": "nAiWHUZPmtdq1WRJgqET1NG9ZnLUZqgYwUYSm1o1iyhC4MBq7AKbUGUsc1LgCgn2BJ4PnxxN2bkaXy31bHmx82C",
  "key15": "4S8J36cUcfqr6nZ27ZWnQcNYtLDC9zh7dv31fZkPFYiHccaU86NqrMVNAYAkDukQYn8XtRtbyHRfvHmY6oBWeJTP",
  "key16": "2fnPxEruwDPwGWpg8nXZx3BRMUQMwfSX7vGhyWot7C1kAVCwHhpakmYdm92jaQjxjdrakkKTrG44nqXUivqLGhZs",
  "key17": "nvNfDuudxFrSFMJzVigXusp85ceH46BQPRmvACWqHdmcY3vLD9TmY6Ad8K3Xs1F35S2UdWYSXBjsL7TzXgrCtL6",
  "key18": "59QTZqYdbpHb9A9XzDUeAddRft4QD3js1F5cByBUCRKX5FvEPVemr2jrxmn214SLoTxPxUDxekSydZnSVx6NdRkF",
  "key19": "GXMUqbnUu4DvUt8mxXvRGwrEpjpc3qsEhBwxPGy9WaBpa4hRj8mqYv7KqJGFxqGuwJeLvHFfEWxYG6m3yC3LTDQ",
  "key20": "3jCyjeoEdPCjwv5318UzqwnUhyzBgN66ZaUtXJfM9ZFtJxWRpNQTHmDXpfjwhQxbTpejUqo6GFj2Z3e5gqJWgu8G",
  "key21": "5k9nYtYGPZYRQeHPtSSXMkDBDgy4FEsv4W9i3m9ewctaw3yQTCQY5fWob1Dyhs689qDQqNxLepj453mSfw5zai5W",
  "key22": "4mon9AbDfyKc6jgRyKdaGLtwzyJkGY8CunZrwGrhhHv2mWrEokE3RzAvHGgsZJC5ihJXswXpg55UAkHsvcSr8EPa",
  "key23": "2Vf3t3xDMX5yadZVXaRJc6yzsBwf1TwdY5G1zdBXmHFcBB6m279mLUZfaSF9FqQTLcxCwBXWSH3Lm6ctVqXqYbS",
  "key24": "489yfqsdSry7uWnvr9rs9GtnJLgTPwD9Bz2b13q2j76iTPoWgeGyuGACwLjCm5t4v61f11ysHAmxX3vdbS3ABbL4",
  "key25": "zqtkJCVpsP8VVYyHfnwwMSiBm4gbxvRUxstykUcue7XZr6Ty4HGHZ2G8BfH3qtaiufsu21YksxXfS6wDsSwiThA",
  "key26": "4sngR2AsbtjHQos6P2UfkHqCaoHLbQiPfFfVhXQJUufnKUPm4iwGhoB5e2Jwuzs1ZL5pabocUw6Qtujt9H2xUePg",
  "key27": "2Egqfcn2XXsQgbEdBw5LWuDey169CD8KaEsboRQtcv99CQgxJHBMNuJ6VeaGoxiXLnmJnkWq8ZQV8ifVGFJCkN8u",
  "key28": "t99hKma5TUWKa49pQkMoMFnGSkhM5qY7fNTztNtMZkZpiCp3S6aep4pGXJXj7bentyqPXbMUka2VxcZqDS8QUgA",
  "key29": "3v4hF5uTJ7McNgd3512Dpg6Dr6tM8PERKcrDpf1VtWWiqBrTkHdDJmNtXzNUU93SxhjUew7G14ZFT1F8R9jPRo4V",
  "key30": "21C9Y9H9dby776C8gQ7t6nTh9WEZ1jkJ5QNaehkViqQ6n14TH8TnviTSqqsG6GX197y8wPefeX6UQjpCSEBYTDpK",
  "key31": "4HHQkZVCh9793tjpjScRgAnHm2sUW8ebRt3zmVEsEt5gL9w6jNz5EJYcCAccjhmkTVSJoNWTviPoBmzmviM3j7gW",
  "key32": "2tipczk6CoLgX5RJatKkHfqXsKKYR5xs1aNS44UBSQSYpMtqGvqgZzEzM6MTVpCrjasLSZU1vKdNqyVo9WKX75kW",
  "key33": "5PSfzj3e68gcWbueaSq6BqdPigCxm88rsfPrvqckjfDQkSTixRiJfGcHFKFyFefm9p8c3anzGcWL8yfgnz7aEVsk",
  "key34": "3BmoSpcsKQPDyysG1EXMiizyXajMged3qRmSVUrsVhpQdZp4n3FQmqZQBsQGGuVGoymZZs7UR4GkcK425hifzipJ",
  "key35": "4zbCeuwpDVycFwEk8dnwUzCwjkABxy85fw7u6gkFvBCBk6QZMUQD1CaYXTEXtNFbQwYZDJycE8Vp42aiSPcte8xB",
  "key36": "2HAP7js4cmHKLoingr3WHBGE1zebUYDBEdMXijP3gWA97MzukWKY9RiaPqBymXthhB4gPaexQCVoLgh4r7ywWq2e",
  "key37": "3dXPFcMNqgrQQkck1EQgr919oj7ds5eboG9rNbCMr3ySrtV8RFkgUS3Fvmii3QVnCyaEySp4Vt76t1ferbh9rz9g",
  "key38": "wnov511qnpucJqBZBRcguf6zHE2wCvz4JUixg6LazaDusgVLR8L7FVf8bd1uhT4gQUQbpgZ5jXbL6ESoZkRxxQt",
  "key39": "27afpcbhDz42ZeSqt4wYCD4k8v7Y4PNiH9mM5haRccPf3LSyPKdGEkcMntxoWbLpNgRMdR8XVdUjigo2zkgxnaLG",
  "key40": "23zwxBnDRaBnUvmmhSnCxqkbv8DeHWyiF38Th9nFTFYfRgQfsgRm42Rm9HRhhmUk3zoymJ7AEti4YouocYzffx9V",
  "key41": "2KoVrHAmUbsn9cCmZCmWCZEZ42XeKj4Dx6yhkDZkbEsJPoDgnN141VmZkfg1R1PZLALtpDrfn5Sbiaq4RLsb16oN",
  "key42": "57cvnJn8JDd1qe6KM3H8pozCXjN4bT97hnq4sCHhAjxzqAy3wjB7HLvefGa25bkj1ejmMMQdM8Ri5KrkwaRgUQiB",
  "key43": "359p2BzDHZndKwd3JkBMQn2QTmWfC4VgqE4H8qiw65BNUyZzg5a6c2fVmuMei5PT1XNTQrR1pZUBkovWEu7JJgZt"
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
