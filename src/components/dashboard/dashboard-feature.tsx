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
    "AriK1cFYLNVG8At9XLWxBrTjSe3epANPoqaD434oUnpbj5x34mtfyNGdFHocw6ZLvPTb4NsCFQhuVU55Ek6yPAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ET81jYx1VCJaMJZoe1oPTdXvMYvGX4sAr7ToabKwpSR54DKCKWRypSaxLHViBTnm29MVrvXaHfxPbCFmXQgJVd",
  "key1": "3ccvG2V9e1MGfuLXxuYQeAR3Si9Z1VywYQSZ9CWweP9Eni64bcB55z95k6Vie4HVaXBf6u1HAmruBJLpbV93Wrwt",
  "key2": "7mK79wnHmCPKQy3PJRsawxmFKCdy9YVKyTr4tEz9k6cHwH4ZLwVp2koR7cPdj4thoprwUJ4wTBFjQzLFfHFC1Mr",
  "key3": "5y4K26y11UsLwhPM1BUVxnxBEgwTXo56xLAjM5WTCj5VsCkbskWhWqmpLMLhVc9Gdwq2ApU2WND2sm38twL3H12q",
  "key4": "5tPTtwehdUzcBp1ZFEcoUa7XxX2V9VeoFjkcm5zCEuKTdUhrrQYpxHm2VLAN8mGRRckkPW6vmXzRTXqAzycDHoCh",
  "key5": "XhcFnrL9vuJfXMyo22uESD461sA6DzuN6Dqf4NUKagXYv2mXcZxpcGRrB7dh45PhoercobGmwApu97bthTzirz4",
  "key6": "21XJbc8e9HJ3nzoNGTEvVfYf3hcVY5KQYDLQ2aW37XuUGWZJJz8AAVgyfaY9Zru4swa3wzSFaC2fCdq8w1N2QFmg",
  "key7": "7f6yCDVexvE3yyETUccf3iYUFsEG2NPqUDjyKJuHMdssPyQuxmcXMcF64Ctg3GqtjUdH2w21bGDe4ZB73K2yAm5",
  "key8": "5SrstE4urYYwREw6aGSSUhH9R6SgfFbqxFHP4AJV6X8uqgAwL6wVRDRaLE9hpQbs2ibX81j57mPfvvJKR1mWADaa",
  "key9": "5g9F1BpY8VTGLvEaBrZtQRHEyZum8Na4mJrGsqNUL3Fw5uBJU1jrYHAEAxWESg9gHr82mxs6U2XgBV9eierozo2A",
  "key10": "4rZQLmmnm8jM2pNeDVbCzUGhWxnkhUC2yE1k4TSk8m7DNqULya32oYVBZ9EmLE8nfsDSR5ETTVnxRP3p7wQ9zLm4",
  "key11": "2RmFxS7Y777yFkppwHwL51RtKAvCZAh6aEfT1bpAiFYJC3zyhmyWXgVoDaMVLiebmjGCc3qoNFJ1KsY4NXDWq4p9",
  "key12": "4AymCbEkgB7AfHFDQ9CZXmv2h9YpQB4PMAGFoxqi8z4XtyPBirAHYR7yQbuVc39wNogbJjkB69keb7tEB4LAuj11",
  "key13": "5pdAFVLtSJGXLVG1nYbDddfJTZvkcmZEzndqnx2Msm3PvPwkzGRUqdvpvWEx7XWkpkVisqYABhzVU4aLnYGjdxem",
  "key14": "3QgMXNk1UJUufRFfWiMNuci46Y9VfpdhjCbye8T4rWDdXudTU6fwLqHdKYkCqvQ6ozBmUHcdcEvZ7MEo491xibFn",
  "key15": "4YjfTMXCGiecvQJCR1LzTnT1GLqtoGGWLAwHcQ8LRVm4BT2oDodjzt3PUPWEe2LCkWDsTaHyBptL2qraqCGEF81k",
  "key16": "56Xmkm5hU56XvEY23GQPBGhNbyQ9AkG3j8ResSTRRhx272MbFX3VwNK8QxRc1CjwctP5K5PYDPeWhDDLLXQDDYYb",
  "key17": "4CBJQySPMRjiyFFXuECUUCcdyy3FGK9MFeR2QAENR3HKTUv4nSevR9bcvXeWnpStfqKMqKxLXMzVHJ5KspB34VVR",
  "key18": "Gg8yiYTJA38qhZjdED8qh9W3EYSc9djcevwuAN6AJRyJYbKeFHhh3QY4R5fjTsAn1rnGMUGLuaYLt6wKLNReMhp",
  "key19": "4jybo6qdiFSnqb8LD1GyLd7ARumS6exubfDzuzjGHkgjAENVyJjJGRchsVD2RuvWSgov1Gd7mLPFvQZThwqwKJVn",
  "key20": "5Ah54RbP6Sd6R6jp4gxZtwbt5vMGmQVrCNgKTw7HZdPrU6bo7vvFKzAp1Jys7cvXVAnpqkofyfN5iZVoxLdQ1QGG",
  "key21": "4NkJoVozw7MRYFACdWNkcnGNQVWmHE3B4jXR6iUPngmbp5D31iSaeQzhdNLC3v7fviF1mjWQD1khLo1jdfRreFGp",
  "key22": "PcR1ahc98hgBgYCDdz1p38NYD1LviLEbirgUHZJvivi793oBCX6iP2QVuG58U5DcKd9yU9836Lyxt2JBZwHqgb6",
  "key23": "2jJ5B4LGVA6TPGFp5CeLRwynrG8P269P3x7EozVaMMLMLgSJvYgS4banP2KzJ2WHbhM6aKd2774H21wBcR2pZTyF",
  "key24": "5sBrk3kxKWdR1NUijC1SjwAJzw2AdMPXKFUJvjo29dLVyveZLqrnfhqrToevj5yFMdEiBFy511QyYtzCNb4piKJu",
  "key25": "5B3ALDA5mvf6AiVX5BReBUdFWsDX7XK4UwcBueFPhiKoLDLWxiZsHARsjZvyTS63mEMPVDQbmUJPeUGp8rKCxnGd",
  "key26": "2dJdA8PQNCfigf82FfFGFZmcpbb6Yy9Ptgk4EmyMAPJ7Pjh8Auk93wbwxiugPJFe8pf945wRkT7ZkSXvxVdji4rY",
  "key27": "56REy5tQYGQRveVMCA9J6aBf2PCwtyz5ZdRXnpwJQECD3noJw7bDwQfry3kgTMKrGHNc6z1bhHcXAQ8HUNFiNBHr",
  "key28": "2jctcAzmETngAF7YmKWsBbjcSf6TFTxa8oi59EC9h44PDGXjJvKRyCdJNgmfzxe1YBGH2zWJivYRY4Kn7T248duK",
  "key29": "49SXiXHLyXH3NCLBMdWKHw4oZXUeQCCBBZ5HfqsRTGs3DoJ6hNsWivUo3znFxJgoeDaLyVhxp3xUKqj99JJ41Gva",
  "key30": "4xf4th5TqNF33NNUjBmU3J7TMWXx2cf3o6j3DWindAV6CN5g2Ch71bqRrm3ExYAvrE8k1RvaMVHXaPxfHBUgPDi2",
  "key31": "Fp51u8DuBq1Jk4nrMicVNZS6XfR5AL67VaCUkTJSEYudjZQ8HFTep7W8ttGeuyi6xy7DdeQX5qYRwU4PbotMR5p",
  "key32": "2kbP5CuHTKSyviMLNAcbUJASPtAAJHGiocHmfDj8PuvpfK9HmqpYp72gu31m1vcbB1RohXuszRqsmPE2dxnRt18p",
  "key33": "q6tDDrHRYzfaPq1PSBaWFrNq6xqviSJeUK5AsgiCPsyiDbUfgdsuYWd1w2HbvL6UKx3Pzf9VfmoA6TG3k3HvE1p",
  "key34": "YaP5ZqS3v2T3AgJyvSLxj9DQ6oodcrrviHL2Se29VD4bXsefD8jK4hinivPmfGeu7RJ1ePe5pEt3nGA64gvqWmK",
  "key35": "A4SD3ypCnoeHL2qbLJrLcreincYr21FipqiJdvdNcZsRUsahFkPzj7pT3YKqDzU6zrigdCRYFfuGFfVtDYYv1MT",
  "key36": "3hEfxjrLzsicPz2MW2EXR11QySJBK9D878QkxC2iLfb2gPeW3iLMj7mbVLY2E5KSyujJpmpwQHg62wVmddD5z8HN",
  "key37": "4dDZYLgMNxVsVYequuM3tKYn9G8YU6zPv6TWPtH8Srx6XqsjcPWm4hPeyKvucUakiCy2hx8mgvP8MDveAnKioZr3",
  "key38": "54YWFNW8XsTPAxgJPHjP1MSGpnqmZyBLRxG149bVQtudn7nu4AvEGcQNPy3LvXrbVm2Kj6Uv83jfMGaAE7dDdToX",
  "key39": "49v7HhdrUwgwgmYL5AfPNy9UkaFY9T6FhvAzkcpBL3KLo5xwkEVGfUoYHfu2LiQwoVXeGC5vAfM89mVrEDT1sb9z",
  "key40": "3cdxGCf8fwsaDWdvADHw9xXZ4EStrVTr3K8b4yZaovXw87uVKNShaC5Wy1cDQmCPNR7FQd616Ef1vFS7F4EQpu8s",
  "key41": "4sfjjjqvXrdcd5vghWQnGzrMMv4te9sVQp69xxgd5pG8WVyYXPSaQXWtRwjuDzEmG32bd3CW84Ppo6NUTBvb3tFa",
  "key42": "3wvgXkzF3RCfhRTaVZB5su1HcAEE22Yi9jcPzRV2Ut3ZRbT9AMVagbM4hzAuMjz8Vw6C5syQqMD5yqc4bRQwq23Z",
  "key43": "2CoAhHD8WkQwzpynKzCYCUUNmbkT7Nx6BDNhEu2jNT9cPtfuJG17fE6e9CxyvsLMhwbShKAoAiyiW2DnzNebQmFr",
  "key44": "cmur3h2gtYC47T2USpySxH8tD1o41PEyGC6EzXENkfv4vYSo6hVSThSJoXMaUy14fwDLQHm5Y9P4L5MirS2Z8Ya",
  "key45": "4zjRL7ex3gD6UJpzVcVcx8MeKKwoxFM7N4TrFv7KREzupHCFiH9UCeyhcFbhYCaJwDiZCb6U84NXq1XXvF5ZVkUv",
  "key46": "5BKbUbTRGCHgDTKtCQ8zrPckr2rGuDCrnYz76kD6tKhWJvy94eaYKMrj9vRgditZHj1ULNoGSt74Bx9uAzkUmrFE",
  "key47": "56GCeCzidjC8ZaBAs242zeQ2vi3ipT8uEkpMsgNwXgip36SJFFqsJSBhBV7HwYbSXCdDna1zxzUxspEjF334vHBb",
  "key48": "SSdUa66MHNWDfZpCLMucqTMWcVCSFYrY2JexPFwZ3rRo9GQh3zD4x6EYKT9KS1Zbm1xRcAq3961CxgZtCmH3tXB",
  "key49": "4svx5Bn7c2UgqYEeHAaxiyNyxFUanRK8xB4HyuCyxsgyjhd6D91cm8zQBvuaip4TdrC7JMBfgc4JshdNP1Hx4aqX"
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
