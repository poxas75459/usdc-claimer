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
    "3S4bMQTcow3wwaNGi1jFR4eD1mkzYrZh9MV5a9WtzjvFgvVGYRpmdrWQyCUn3aNtF67sjoYq8UJKJGAP2kPqP6sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LYgF7nbQygdiaxgribYkw3a1zfuLaaPMa77qCx3aF2msQHX1TzXjiRexJromBimmBDXzGSMPPm7HX45ZDyxDWu",
  "key1": "5JLCsaPGLjwkpVMQJYgbYPxFJpFckp4Ro8WwkNBaMPLUosmcMbVDFoYXch3pPPjUKsD151ggkfB77BTCLH39brN2",
  "key2": "5cHDhwxh3FCiqjSrTuiq3pcwCzLGVJhEJUddVtqMC6B2WNfKGCxCRZDmEKC8RnPJgkSj5sjU5PSfJezFkFMpEEoL",
  "key3": "4VbU6Beb8pHh2piHM915KmmSyZUXoN9P1jGNeAj9MPhqU7FF4hen1zLu7mwVbwz7MQXYqGeu9se4phW1H7CdCerM",
  "key4": "5YjRwd6Y6ZaAs5PWRoCpDwgw5kAp8bfvgVzmzHnVF8rRWeaPXNKt7i9jAi5r4fyHACtuMmPQfZbi5NDiyPyaRgH8",
  "key5": "VUseo9jBtjQKZ3RK2U4pw1StwbV6cb4sTWrxHFmMnkRMoHskYjQBNSYBytpsPE6dziXinAu4SdDPktcK4YHHTSY",
  "key6": "2mN4wsikRL7ivsDjssieid8jYJwL9jVrGjZjZihKQfB2FZYGcSey1S9xvQw6zREEGnT6zuaMkCyAqtwZ4VSbHELX",
  "key7": "e2XVTzDBMzkA4vFQpbKUyUvFxYGXvCLNzKvGVCtpirVYXEcRYcmjjhc1ZtguP2MfAMQ6uCVRWnCqmkfbmJNcY8Q",
  "key8": "4SqkXmFAHrTLuKzDAzHvoVfab3TpREApuo6SCM6pmrnzgMHYbCEk4Z2DQhHuTypVSGdGZvTe7DkRgz66t2DZUMV3",
  "key9": "4KPkiaLFs28bLEfrGoL43NRnJWVheqSAFETQWv6gmf6CcCqdMMbJNWvo3UmvGxW3oxqzUCcrjVaNBmQXyTjrbQyr",
  "key10": "2SFbdKhZ9jipq8J9XCpGxa8zhUYqf4xjLSZBVpg6euvbcU64m2UouPE9DSig6ZMFrzYvyx8xqY5DFXJbzhowxFkt",
  "key11": "5CrBSZf9oBcieyV1bL4ttV3Dn33MuwXWNNVRKTu4ycpEvvCWWrKy4LTkdP21bbjTWdnYHziUziTKtkKJtvapE4tk",
  "key12": "5AGpKt8DuHKmjh2iYXwu2wK6epPS3KF8gU7T5iPzsuaX1Eex3TVi3JZ28M9ZGALDS7Mssau47G41kVhrSSNqwHqf",
  "key13": "3okz96Z4W2Vkvghq6eRGtmMYkH5EKRbfqaqQ9k7yFg3dD4dLeqggp6q2VP8JuyX6r9Bn8xhi1NVhg3kNx4y941et",
  "key14": "2AtjjpxRxaVTQYRk3Qtaz21q7KNLBUxePbJy7N6q48gbp4X4tMdDRqFVo1SR2TNQS68Xo9KZg3bJYGMYzKKZgpSu",
  "key15": "gUuQYbLksRTAhR4NzWRtN7P1CAhP5kLv2BcLbjEGDnZpdizNM6qCKeZYEgKzqQhrHDRzVJ5x1KUQKnBoijK6rCE",
  "key16": "2xrr1sPSBbq7ptnr8ntF3qAVHYmds3Wi7s9HciaX8KQXPQ2Ac4hE3h8xvu5LHfkztba3bzg3VPcQF9Nux86LzQ9x",
  "key17": "3RrJXcySziaq9rcEzn1PthAFdtTjJy58Gd3P4WwY4YtWSC5DVk9jMskLf8v353naV4W1LtGdWDSm1N43U2enbLfq",
  "key18": "xCpjmLD4sChfUiDQ7Aqa27PNQrJoBRS96egHQryxiJm8WxojKwxjwyLm2eX3ppRM2TfXiKgyJj47DjUe9BGddta",
  "key19": "5d7xH4KyZ21n2RJiHrnxpAyQqdNYtYqQpueSp26F6XdX5FSD4nG8pS7XheuGHDPWQXWV8Y4skS7c5xg8uRvrNB3E",
  "key20": "4RCM3XnzKNGE3Mf51cAAKueJBWtKXUL6td2WYQ5xk4UtZoAnt8Wh7qNK5QPkdiDZm4NgeSUbwkZvhwY3sZcE6BC6",
  "key21": "39XzVypMgtdmJ7fdjhoXjoEBc57gvHvNqa2P2vQnDJbaipPhTZeu7k3unDyf14gHkvBTfwHBxYHQm8PNYXko2VeX",
  "key22": "3z6L8WpyQ1nvbVe8ZNEiJftTW4VUhcXASPRpSWf3anjQPS8tQxnkRf8SDaREhTaML2Vmc6mcVN6G6yvCrkHEjnbJ",
  "key23": "4cWJbbGgKYqK3cW9DeM5V36A39SWy1Tr94UeSjQ9WMH5Yak85VcU6LijM1CrwQHNXSjRTERJcTEwDQiJkYEHSCrt",
  "key24": "3PqAoSMiTWEoyFiUqTGDL6xsVeUyiM5P5BLTGL9h9bZYKjpnFZN8YjuzM9sgHJM4tTGRh8LzvBFthzETeXR8TQB8",
  "key25": "5ez3dyH1RugAZc11UFPeSiDcZeYshetjVt1QvtNb4Zun7GxPkui5nCeeqyjWu31oSky8aPkUKFq7V4PENLD3ETb8",
  "key26": "3PpPSwWoYJdpym5utMfUCjYX5YvwpDCGveEjtEbxBNoNfPELxCsKvSnLyXXxDR11XQCisY78mwTvf3L2Rpkorr4S",
  "key27": "3Snk8sXJTTgM5KrrL6FijcFjRtEMms8dLU5vHF7s4NNM1Gpsa54Mt2UL5wVFdJCd18KfNSKAHbykkzRMEv9mqrG7",
  "key28": "3kwtEBXHwDs7Tq48KLLoXfnZpu41yDmdF9R7ATx58oFKNhVbS2WA8wLDoyqsi4ipUgyxZmCUQSsgPtDxiN4aq3bS",
  "key29": "39nDZNW2QUUjsa7V4n6EvFMaASEdW1cpkjGXjCC1Hmz5DaVXDMPHZir49eCFZxsvLZgPqGGPM8XnTj2EUtwjS1YM",
  "key30": "3FLoQyAGYJ8mYBDWu9UpDgrrVT74DP5nCGrYfSLX4npxJi8hJZKB9eJuWmSaihpmS1SgmB8iU8rqEeWEDXzVsb2Z",
  "key31": "3D5q1RwZXFiQ9QREuZottQ9btbPKZR92WvgTBCMf4jyovNZdeGtFqexqgKGRQicm7XWx7bcCcAqyGtnM7nahm6C8",
  "key32": "2JqvoPUnd2AD9Fbjr2ufsmAuGQjU5Fd1vsNcEQUcPLg8SwJ9bPZMsPCW7dP2UVEe9JC4v7T7DGt3oU7MuYEDerJp",
  "key33": "4LAeP6HFLmPmgPJPjiF1pu3aho7uuox6eSXYi7N7ZWycDXCBxZTTgRZzpNUNNJW2UYuWFXRwA7gxgV5vKxWXXnxA",
  "key34": "2dHumjtJopaj2yQRSYrNGn7o1mwmYGTaUyZupxnB757F7noAiVd7XbntXUm1wQGCrwy18basizkGNdw6T7FmSU7d",
  "key35": "h4NFBu1Yrr6jtmbbrXHRciTMmqqyFBeQtr2KAjfm1kd8ARbJgKaVvQZuzFxPdbKQ54vxKbH1vv1u5CoREYyJPZ1",
  "key36": "5toFBmbJWEwFN4HctjzLTQbe85SjWpVjuyHgmM3hwh5eeexevscCAThTs1dcyEGDpYD41mHvW4qcnd3N6unrGnzc",
  "key37": "4kEsVHTDk5KepG5ziZhqP31ReLmE5ravTH2wiY8vPiPtx1Y7PEj82e3rL18rM1wxUdtwYGtjuF2S6sLAdA4bGWiH",
  "key38": "3iFMc8S5sXViecxqRnqKX6HmuFGFRm4uGcCSWSFqceQTDLFWQsK4zXybLqrWiWXUnyYgDXuiXqNqnpw9CAuem2om",
  "key39": "4waxjUZQH9TNvp4KqUPPJuKakG9ZZoyZbhjqHC3CHDQQZMhrhsawdo6nyiM8hZQw5yvWAadYpJep5cDBKtY61Kxb",
  "key40": "488R1jUJqjG62SCBVSg9dtijXcWtaMZNyJngBpMuCMmbzfZL5EDJgF4NeCUJNniVTwRxc1EQ58imJxy5rZi8jTCE",
  "key41": "26MuoKJ86LikuRdJrnr2shwmx7mC2MNcvevN7xXC8mCkBQJLzZX9igFX6r7Zzf15kU5fqjhuZUrCQwHf1pR3nAVJ",
  "key42": "5zTDb8QbgxVj5rDxE7C9MvQTEFfH5A3U7uGZyVzKM9ZPey2mv8o3yXWGCyqFBsrbXLA2tfbAeoMRnVreu1P8R9nf",
  "key43": "2GU1qS65gGTFzu7UjCDwRYmV1PdfGMRQpqWNrWEBrgbMUHUvijdwgdHoC46siPzz4C8h7t1qbtb6waoQWJoYywwp",
  "key44": "qySDoVL8mSmPc6sWwZsRiHBtyjWYuUic8s6BShn2AtKu8vkzBH3z6AXdxBdKnhEVEwe76iNDuqfXPRUiXK1w8of",
  "key45": "391JgWh2upY3MWDrWX3fvu9zfrRrCqpM3Tb5YPMDiyMa2ya4ERbeLPKmGVc8jcg5wVL3CnWRib2MPhQkqHTBaeuq",
  "key46": "39NmJyLdanK5BUbEBVCRW5frcDgN48bEiLCTv6hBkLFbceFNgWPmfeNSgoBQiaoW8i72dTRbkMA3Xenx8a51Hup1",
  "key47": "3VCygvkRGdtjGqST1a6dEb52scCC21PeojpWBVXMmqC9KLj9FfYy2c686WkdGgcH8QiXTTANWvRNuxbh7HASmkWK"
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
