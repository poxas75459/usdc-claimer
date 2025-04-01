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
    "29dwj19fABQxqGksv1neNgCedef9Uf8i5KLZtndoQaLoLW3W4j4ekxzJ6b16BHcNLJkbqQq6468g5AHM9ykMuUhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9EyV8RCpLEzuiShSdut9cFKVJ15qYiZZnkEzQ1t1rqfrsK7bGJz4ipS4oYNyPFRyid6N1LyLC73YKtNDJX3Lji",
  "key1": "cwEqKxL1zpvBEkuVGHCd4WSW919k8C8HTzs1C2HZZihtuuc1SEtwFPMqy1iSP8WsZwdG3kjrWo5owr6R1u2wfgK",
  "key2": "5PW52FkkXhGPKguXMJRtgKaVCDYtBrbjWrdTBg3MTdMNqQPjxpRdaXY5kf8PFu6E46GyhURRjaHKYyKD4rhrrXqc",
  "key3": "2aivQUXjnir5xrTmXs6yairgP9yzm8gdsa8MjruyviP8XQx4xkEoyufpH1yYbCgP6iDuzTTiB7H2eELVYkcQu5CM",
  "key4": "4LrQU1MVFgvuYjSi58y41Vn5jnpxfTTnwbSFdc3yN2GaiW5Y7ighQpDwMyDr9kfUyhLCzT8MDNHJghBS63GZQ4RC",
  "key5": "jYL568ccy5Ak3XyVQzhbSgAmf2DR9h1eDfGra6maT4sZpj1dVvK4cHAue94NF23SQY8HcU7NRFpEiJVejZZ3FVf",
  "key6": "3PxPCB2fuCWEbPKE4YSNP6DRpqeqEB2kB7y6ZyYs1pPS2kWphmcrH46MVkWfpSK7bkotnKAY3xMUuaaWCTA2pt68",
  "key7": "5RVB733YwGiYmyUBK9nB1XHYUEZgzP4RVvy7WMQhpHDV7LtZcEHqLt4zXDoZADticHVGMnvgyL7D5NgjJY1NVX41",
  "key8": "ACR8TwnMXb34pExZHBxb5SH52G6stQcjNBge1mBE75Db8F3GJ4KytQA6TyRXvkf2ZQ1cCuzmvj1Hcw1Hc5gL9oN",
  "key9": "5HgQ7XouYxF5SR7SWQUvQtkucuAQHzKY5u4b2caHjhkLFqifpz5kQAWT1GmWuG4mC2WdfJRzqE3EotABUnXyzDi4",
  "key10": "4sxEoZx5y4L7Xf72eMpRP57ef6UEYpSY4XhGzEuMCxQQFSz1AATiXsVzJjhPQzxJEeg3wgGR1gF8srKXFwahQEfq",
  "key11": "2hfa8nP2MAToFppVJ8VznmbakRZGkURT8Fuw3LxeXC9zfnsrMpa4BxZSXzHretQA6B5ijbV7h7JoBeX6WwbMGRHd",
  "key12": "3LLiiRmjE4a9PbdPCZkq8oQaNXvcXkBKHqMrvtyJnQC2fosffGo3wDrHH5LBx2nJvmykZVVP5TVd1LdeGZBA9CFG",
  "key13": "5xVbZQJTFnm4F22Cf3r3hncC6ErMZ4zY4JawBSQBHUvka6Z3JFNfzKF676toSJEN4uMEKepakZNZu3DMeTVVqXtX",
  "key14": "5xL5wtqkigoQf1qdCXuVMXE2oMSgC7BwEpzK4MifrYhNWQbYhVAbnDGoZeDsTBMPkUHxEpHao8hoNa54UcJWg4JQ",
  "key15": "3vb4DDpen5TZk7pB7RJqAbL2GGauodJzuw52KyBqEGoMEsQ7BWATYCJvyBoS2aS1mMxW8dy3pxbxt51tAmk6T6Km",
  "key16": "4xvGnjg47qqrEe2krerQrD4HRk4z5jeCcu2vHbWgKtXL1omUhg2YxMhjnCqPubXeZU7JjaekbS7VdH3yetBjJa62",
  "key17": "5nGE1GL8yuJafWqyAYvL5gNmuHv4uBZfQ6wdo92HxWn5DwPvE9guQth3B3mxKZVKU8VbBLA7p31gxekvABgwweMD",
  "key18": "2Rbgknzs8u3yJ4kpFo7Tt966UMViZgcLCnWnqRqZGggPK9F9JiNYWva2BancF3aW9PJ2LqXJZ5TEjx5X6hd5iZbU",
  "key19": "wsPpw4ZpoWd6uSphdAnzCDQzMBPz8b5biFZV1ZxBaHsjipynw6LgobrPdwVCU31YomZm6kYNxfmyXRQr68WNAfC",
  "key20": "2R5SC8CM2fhLFR7TLim559k4cWyJkLZBcBmkkE5n2sde8iQFnwGERZyYpsNHEWNBvaaV3VNJ2ouUv2hFaAXXXgsW",
  "key21": "22a5NNQYjdqQmg7sjH7NJNDJUxxHhmDMqteSgp9CaeeXmxXgAU3kXgNPwPkSRf8UgmoSAfRNDeYmN7V98yV1hm7d",
  "key22": "2W3xudB9HMwRZkm7B2jfCdYBnrkpvcVinSSBenMRpZ6CYc281s7BkaWHDcR18CARYTR6amNspSFyYF29BfU18dT7",
  "key23": "U6chgTMMBjxTTi9fjGy1Kx7DurqLPUk4FBd698nEot57DpagfgqpP2ahhUNmV54jrqPmy3HGEiy58iYTK1AG6Wm",
  "key24": "2n1XZxCjmHF1e4k3gibHutZ25AeLhTCwfxfhUanqM4dRY4jRQ3UNL89MvwQVfaDY1Az1yKRN1Cs58c6Px3wHF1n3",
  "key25": "4gWrHN1YkJZC7MVyLsBQAsbh6T6YaAXc8eRBEAzXzsS4e8hgcDPMJ3f6iUh34qx1pUT9BG1JLzuMmRg3yBfPHUmB",
  "key26": "m2qiGb85AeBfyTP2mkfhCeuLCUouyKQLbamRduBkeeuWfNhyPPHJsQGNvVUAxsjJfehmTHagNmQywFojdENfU3X",
  "key27": "2e3VTSfp7j9u6k2dLaLQVNX8zjBc1cAQNLKDWuXVm2EoKoZ39g5pVh1o5zH5wRN73Aga8VmC5HF1BqVaoUFjZPAx",
  "key28": "4cfcbWQW92yujmW8j4vjALvZ7xM25qGmmtY6Pu2Z5FvmL5JzB5qNfnTfxkY86rwAgfPxZ3EtAej8Tm9h5bor9fci",
  "key29": "4Kre1rku9VSp2Wa5za7yiBFfxyMUDqSYLFfbKBG9ywyew9kMMkhHod9EXZmqTg3cJtJPKaz1z5tG2ziLnctvCSLw",
  "key30": "5v2qHM5hCe2icFVJaip6iQjTg48LVLJUDqnuR5BWs82pNaHfH5EGzbjQk9rkQsBakW4dkJXBHA8bwxDS4PV8FxJZ",
  "key31": "2RX7doKnMaKwoirFaCG4BU6d3Ape35utgDDYwbLba77JaTS8mvziJiaPy49TmkfBX7NGdSZMH9PkUA9S8LDKaiUn",
  "key32": "5wuqhZSdimKieihDQVEZBbpDAVG6w3bnqX1Ja24bmRBpmUpo5f1P4x4CWx2zZTL4VZXK9acQT19sXDNAPCYVMbry",
  "key33": "XdvUU1aB516fWjrPa5dJSJ9uL9jJwDrpX4yieJiCtnn57gcE6Qkkyt4irWyj2CKTaP9Pv51aZYrQFExjfVLaaiP",
  "key34": "4WComTUwfFzxSAtmrs8yuHijW93oZbtSx2ub7pkwwSbb7jTvfVW71NbRQfp83p1TcizxWijUhfoou7Eh5c11svks",
  "key35": "HS4n6iB21QBc4uwqDqannW6aLPKbkEzYk3U3yVd8nAyggUDhtta4Tx4bj7oRZADHziCozuaCvJDmwBgM9WdZc1G",
  "key36": "5UdgJYxRiF7mGMaRyetGx73ivMr7m3xN395m7KFwcRiWpMFTGCGpjjNN98iSZC1eJyPgY45frtGXh1heYtmN5VYR",
  "key37": "52coVobm6NAZhr1Aa8ZfiR5q3TG6M9CqnNN9jhmzRj4k22mwWxxJ2NTkhRR859j6dter8eL8xGYKxrGjuY7yREA6",
  "key38": "2ENKtewrXL5DbxNQWvawX6CyLUGNEu7c5gAweoEsoSAJHaZC7ttQJnPk1s1kH56RfsSYurtg6vL53Yhx4iftW976",
  "key39": "4bevfxT5eiCS6T1o2PJhbENP8DyiwXWZiBJh1yNpjxzppTMSazGzSP46vF7fY5DeGvZWDHUvNeEdp8Dn2vmMfNiF",
  "key40": "5G9dhzRycGL9NXJoHxfLJSMvbeLuPm8hfHeE9Ju8pq5nLTyge2LuRdo8GBCxU3cwSMXpXWNn2Ngyzg6xiFxG18Aq",
  "key41": "2J57CaXaxQeRMgah65jk9jR77GeQqT3vSQBzS8SRD8LbL1BPCNSS3YUw8qkYztSoHdLddASuLMFaE4n6cJ7Ri1oZ",
  "key42": "2WdrzkF9jmv8yeB4fqxyUBNmU7FGzuDmoqBNMxYGAiMAGVSo3DZXpRx96f4xmP1APxg1stPQQcFRQ2hvngY2KV1f",
  "key43": "38ZRqnAFP97eumSQSivrM28NFE2xnzwLXQJAY5irnX5mETCd6EcXDy5BDz5Qq4SmLKV7vEGytpeYNpgsYpc2ujFm",
  "key44": "mjrhujA6hL5nD7A3MfjXb8naPN1pTCeNBS8untBkFXkHB7ZXoiWFpjkP8xstZ5orkrciqj7iNedNPFWUSDqfAE6",
  "key45": "42ecyhJKx7EKidfccWNW4eWvHM76NfZM2EF7gY5UXCzC4yJuj5DRLm6Jv9NLeu48qGjeJcN858UsoEmHVWJXyt9G",
  "key46": "Berj5xGs4Mmg8qna4HcEJ8jfbKfGGjKRf5Rpn6UXu747Cbw7TQgMBcdiM6Hn3u4KSLv2ku6SWUD8GxaD9G9nYLK"
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
