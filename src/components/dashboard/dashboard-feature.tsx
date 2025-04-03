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
    "5WYNPHwQXdzzvyuaX1vhUyQuzMTWKjBbSNr3SiTASGMZzjFySA3iMAPugxzrtFo9faRXDooYqcusYNqRWFGhyfdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJtqkmxZ7cWbFbiSCGpSDz4PNKTpcwDZL4xwJpJYtHND7JruLeF2N18XpComEscdjW3YBcXnU33z2ptBhs2qJyz",
  "key1": "r3gBxnMRuEcZ6Bp5oASnQEKoEnTzupQDDVv1CtrazWEcXbyN96oE2CSYyJwDcxccHcVWMpJUyNe6auamS7Qhu4x",
  "key2": "3PkfmBANnuoWdtJuFacxs3oWEvpPW7bfzFYTCgFJFrUbxTkWnAZZjmd8dn69pVsWUryTvLxuoHASwxfSqsc3psrL",
  "key3": "32bdgZcWnFNwEDwcbftAXoVXtxy4J6PS2mt9dFTRvqhPjKPopWC1vbH4N8sDdpFuWsgn9uhqVKrm5n5vP2prdsAG",
  "key4": "2Eq2AsjLoForbVjYE1SP82cp4ZtF79GAxHB5u1BYM45hV5btBQ6spPCUSuRDV2BqLvDj3R3W6D6fRawn2SqgXP3y",
  "key5": "4zkXfawub7cvQ3X71S7dx8FKiyJ3na3c5TuGLxDDG8j8deHN35nnm1KGNrjnGgezMYCnFfZ4eSsAB5EDASQCAUPj",
  "key6": "5D7LMEuEP7BdZk7gtzLzCf7RmQmZM9t9nujJVNiswZcYUY6KaYHPNLRQ52mHAGX1emqjRKWvo6x9eX3GJbcUmcNm",
  "key7": "3toJ4Yi1TEJnvKasS1Eh51xzUnnzNvhMSyjvDgD7KzgBg5rzaKbguJBq5t99HvTFAznmMbS1Mrmn6eTTmc9RXKTr",
  "key8": "2op9coGw2RFqxLpmvyFM48bT1vfGkssj62HcdsMdWuThPKNrPFmjx2QMzoMUhoDJ6R7QFan9QpLx9oWNzhzTTayy",
  "key9": "5YTVeWtMhEcK3L5jjo6fPjGZMDkZDUToo2Q5GgCVbfFJQ7EEwSUwfmsZcG4BMboBn14Br2JvNM2J13yCMaswuPEB",
  "key10": "2khMcTQALarMFtLEZE9aKB7NnjJzFhtsoLfdNtK23Mej6rVHBbZm97HE2P7ACkc59uzK8zF5tTZJKdCWYr5DgKsN",
  "key11": "2YAnDEfqdUrQsaknygj6S5NMPPxx8bYjZuBoz71c5xopvZUpviFRdB5nPyfGQ6S1VkYfYmoqUchKws21HVGjXGy6",
  "key12": "2tqk24PvceHwfd4SyUtseft4KNykW4HAdr3Q78TZjvFpENbjq1wm3y3L8KXvb63cL4Dspj3ABGG9EEKhNWvVKRjk",
  "key13": "3gsNcG59rduNRfmHevV1tx5soMLk3vAuQk7dQbBNrEQ1pdvbeyznmrERCdneQGfRquoLkXbEbtsjfK3fBAK9RgeT",
  "key14": "4BCVw6A1wdjGKbdb5RGef6w3RCnncgjvNPHCcizZ2UmWvcXPGqDxW1n7Syxtu52wtpkSAbQfmKdqbRU84h6wFoUe",
  "key15": "2yinJUeCiHzt2igX82FXNGsv19fpEgtey9f7woN6D2PBxx5j81Tzc3XHFdY1nc3JAuX32Zy8WevnVPmYkFpwKdbL",
  "key16": "FcRyuMGc5ac2UPvTFD5nrYUCEu87R2uZfrm2txhGnd5BDCMQoT7ohC7uUuxiEqwhHLGP4wnrTdr7jsHrWdBPagv",
  "key17": "2YMUDhgmBCzWTKzEDXRLMAWQrFY6PQxTNipMxj52FxJ9DzVBkndJysbp7da5xaia6CWjKW13KNPT2NHVrQdp1aMj",
  "key18": "3kB1BMPM84nkMvysrhd2yHarBadea5H3dPTqX2EEAaAJbjayuSAPrkwUXf3cFNsi8y49VZsYGGmQ4rf4CRxdfWvg",
  "key19": "5YgN7srNut17ikX3xXeHigRffHATYeEyJAxxdE5ZiMy3joCqr6nvrAFjdZVRqwKRWs1mDAZuT9Lnc5d6ZzCLffG2",
  "key20": "N66F383aosvtjNA8UqkNy7YwfNfHJ5esD6N52YwGAVw8RExAj4d4RjggE2Y8bsnTV3wFPqXZdDqkQcLhSVtA44P",
  "key21": "szNHzS3NBG4DBJ2Q1m6PcWbuohtSih7M8FTa7Nm7TvALLkGCtYZ2eUmmvW56oiYHuNwuzxDaYoTuS8wJScbptMA",
  "key22": "3FpkXCWPJ7GbTkUsZXiJ7XGppz8pBykTSqvRui6GhFu6fSbsfVECdaPNYH4jKKgeHBy59V82njDzqXgBNgtzCVgN",
  "key23": "4C4n5sfDAh7yZdnbCnmBG1gf5mho6SFAtuXtN1Sz5dX8kRtovRHWcobia5SaBCznSKGBmnBwFJoN8LML6P4sazyS",
  "key24": "3xbz2kQc9zEE2MTyjRaaQbyKPkNDfdj92XLrw58BFCeTBb7Jeqwm6W8QNAtXZwutoUDwKEpNBUkBCCfPYtJeE6wf",
  "key25": "3Ljf5rQ1ppfNwa2TWrBktSUC1FW7HHpPV44zu5CP8BUX1LnUcieVq4ifMGgUqnbDUbH7EjQLxr36mDKjb1hLts8M",
  "key26": "3mtpGcU5moDVPtS4jZ22TZGAB6tdoVWAqoXF4PSRyB3dZm7sR1Fr8nGrdY9Zp1oA3XfbFe3ziZuhWYgpcxjB4T86",
  "key27": "3i1AZ6ApaaFBD5QdpyFCtZb83EpogtiwApZujU76UC5u4gwrjBXrSdgaE24eCkSKEqsgEbL7N8mWsC7NDugG4An6",
  "key28": "25uFRNQXDuRXpe6Ujkrym6tYX6HhtLDEmDju4DhTeALJKbqQVZksfN4HL6h1qjQyFb5GJgC6L3hyACZmi2vswqbx",
  "key29": "T3ry1T7KxksAZt66GcRSs8HtJwEYjKyXTnZNPC8NqtzToWRygLMs1X3tgCFotVYtq31KTGdeYncmxe1W5VNtQ9D",
  "key30": "5xbVDdn2135tdLvPxtjDqYGBFcmQrEya3N492e99QQNSD2AwcMD3S336RzBw7H7eXf9vohwSQTX2BQWxAxAdHoFh",
  "key31": "24U5wfoTAbMwNut8w2YTbaHBZ93PDDxzFsuhB4oSa4yms5Qr7qq5rLcKMHEC9vZvRdhyG3GnvogKYPrakqsmQCoF",
  "key32": "HSPNykzze8YujM26kjrRqZ6ur5erB5ZeLurf9PTVKXX9imrGAdrmNzFQ6J1pW7BZ7J7KLwY438nz853rp3YWEXP",
  "key33": "4ryfLWhNBMfSzGuEj5zRMDwGZcLjemvHn3zsz6bEPG3jwvXXncXnRdVaGo9CSrfkC9S1efUiDvMjPd19hNPbFFxB",
  "key34": "2yHZewbBZA5NXpTrrisudmGFtPYPQ97oBvACLHfPvswL6idiB8X6RTNdyBeqKvDA1AH59whSnM9QcD9skZLn17fy",
  "key35": "3hkWxAvwR4TJ8gmceD4996UEHYZmJTrBP9qwShNwtpeMasjf1eC8WBBisQc5gaqjXEfVa3hZY63j8e7QffLxqmq4",
  "key36": "2RQWBA18EWRDFDRx4FDUS1iwEdGFk4N1VKyTDWSfCzCSzVVdYY3MCTwuHZyU5Wq7EU49zqwEFZt2F6DkPLJiWiur",
  "key37": "4XLp12th4AU1uFNefxXeiiCQm1uzgiSjcPwBma7t7SuskEzzteAFzTzvDSvD2i7DAPqikUSTvReUzFBjDqKKfhnu",
  "key38": "Qqm6n1FTAeU7bEm17SvMzQqf2xePpeK4s4wVBrLhLvfSW149bB2t84EdZ9dpQ1a9ggeDyw5TXJ5xvK6CqZn9qdT",
  "key39": "4LSyYCBSBkiFz5duyCXPYMLpJs11hkB1stFS6RtF6e57p6oLZFabzMeEmYw7QQkVPH5oqR4LkPpR2TuYwt4wxHYa",
  "key40": "4s2CAEhCb3pM8uKPA6tdNv2oy7BtCUmWBiWbenNsreeWHfeobs3Y28BHW8AwW3DXrBYNSGV3SvyPbV6Qjbq4CY6L",
  "key41": "4njqFiiLYGkGgE2xntAHQeiahuE9mYdLTvJWwiTNwTcMPWYyRa4R8Wanf3tx2Fx8aCH1zDKoV6PAqphJV3WjqNnV",
  "key42": "iQKE1Yi9uXZtX1G71eGePxmva7aDrnca8Cn3q9jRjvrnYtwRY2rre3eCoNL89aBj6DZkPG1YN1mr13pcz4vxXvP",
  "key43": "2zze2VmJeVffiRnuq12889QPxVhtSCJD9stdyWWZgbHHjt5n3Ff5vhcdhytreQeJtZTH4k95rbQf3WWjJ29seyg9",
  "key44": "3P61uK2JfurKVh7Wp985rDTHZPxuYFpgkuwWqRNfF4GGTAGKgiEpnaA2v41kzJWhPmJeLGpKNS1XyYhUaeSfhi2f",
  "key45": "oLEhct9jkmK41xpJTqDxmCy92AL99P46iCe9VwEbCyDY9GGK8iQ85SaYM7YiB5DaNQtUnDxmJK5GN7xTnDfzSKB",
  "key46": "4XZ1pyS7ciwisAnKNch3CzDzo4zBgZnMsB3zG3LfpF1kkWaNZbocxCDRaL1KJLLNPZdGxG8X93ZkD3EtYw2eRx56",
  "key47": "2Cdbtvr8c9MJVkfoHhi4F1fb9JnBeb5qgZJrC4UZ85KbdypeFfbQ27bRMDRqQwDeoXJ3LrmdwpnhFsA5paQpyPZD",
  "key48": "3VpTyeScfyepWKCWAhkkYBEGFmEK6d8xvpFfq5jHEE3erjmoWkijQUVt1udfz1dUnMBjgZDNFC4megJXj5fdknnb"
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
