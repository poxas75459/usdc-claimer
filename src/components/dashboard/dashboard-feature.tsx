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
    "5VrVjn47VgDf17BdX1it3hrE5BcCUDRPA5BQQX6RD8sTNbv9QmYyS4DRXUXEuV4hkfdVCDridympGehj1CyGGn8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB3K9ryqGGuC2kJY7gTQN6yPu1apbyynkCo7XdnxLwKhGumfXLeBA65aAfcpyx13ApbX5P3qLntmpVAcKVe8PS7",
  "key1": "zSAS3ge36cLpbNmUHT79C8adkbW5i9byFD4rdvKBTeiBzn4LoBJbxetvQRdiDcZU9X31FMTSZiDWsMSHP4sV8Xd",
  "key2": "xPJXoYCqhuRZd1hPyn5f8jijemTV2oU6Xg2Lyi422ehTyUddfiNaJcPANKfQAMHTV1EXFzz1ZDrPsGaC9SnN2AL",
  "key3": "4jVBFMEkXw7X5q8BPoz19Hm2iMLeUaKhNoTU8CkjYxGa9LSo3bGbcgiHrUWWkp5nupRdskxkhwPvHBLpoHvZ1GE1",
  "key4": "wYSFjSZuEuXe8DtpskvqSKW7oeLqTg7JnuzPCujomHznYNUaFFGWqF99L1nws2gorugrMPpRurwLsGZHMMWuYxM",
  "key5": "4sJvyhYKZNBjX2grtU2r8exSvQwoPjTAi6GtTAp2w5tGt97JZo838SpoavXiynQk34AnfAX5Rv1iXcdSLA6F4pFw",
  "key6": "63dd713ij13dEKE3QdRct73PgBcoZagoz61sRweeAcCLjQPAmhLp4FaDjHCM6qU3nmEEJ3bTzHdtFdomzNjZeWk4",
  "key7": "2vC1JsJwijyS7uDkYTcvE5QVLQDY5d4HBpd2ZQ9yTV7At3YTbHtsXHoeqB6cNeBtrXH46Lm8C9b6hfQ8gSe1SgNF",
  "key8": "3X4BRcpLFeb2UKQBKe78iZa4BfM8Es7qVt9uC5Vq4PFdVUSi3CQXviNjiFcjhepYArFXSighpWQdjcYpMgB3ViJc",
  "key9": "5vuMmRcWmUFtCWDDC3vLewxqRy1TrSiHvuLX1CKrLzwbmP8AHVDLMu3cke8uS6iMTLUk71ZfwT2NPdhmj8mZmE4i",
  "key10": "55hd4Q3UFTnYDzKcKhinfiL6fn3CfJJQBGR3PuettB649avYC3Shjf6KEfmoGptK5hHHtuS4CXt4rb1pZdjYDYwU",
  "key11": "3YH7G6EqyRWzKj2yJUZuUgBEtNDbvEybbqMmXh4VRFX4V2LpWbVy15RSYcjFZbKw3hhLntnBjtjpERsofuB11wte",
  "key12": "RoTgCb3hFDz3JWFxE93BkitamA4FDqMfKi3L7BgXzGEscvnxQA5j7A3tuT5vgfsDGQQhHWk41NcEYbKHKCkjDoa",
  "key13": "2JBMF6urKdPaRoZsvhyFnXn53LGmsjoHoYYw823JaRCpjsNzV6p72GTMs1iHjXi8UmxHyb4CVLvfxLRqXZYEca2u",
  "key14": "4E6beSjJ8PTAeJWy2btitPqKxzJvjeoEt6cBcRhWZKeRK6TbNPqP2u6S25PuRRvWt4jXYd4gL4BaUbQAoaGGLvQD",
  "key15": "5zVA8sxUFdWhahV2L5REYrEZenXUf4dD6G9cGyfqCPnmQcqT4c8qKYKhYc4V35BQSkyEMRaNPdvBPBMdMM1DPVyv",
  "key16": "44W6MFmRiGUTLBBv4GitJdBuGBjeRWFg4bMQuCWfYxC2rNtBJ48zp1m9C4YwgNQTHfVcVjnKTfGfDJUfVMUTchEb",
  "key17": "KGXXctm9cYUSWsBorMheMwvGXWNHHNa6BS5oMtFa1U5CezrNnibjpmehaMiiSrQpG1HxUYbkhEqtczoHceXcp8q",
  "key18": "31UAPdY2Ns7AjXUwEDpnDHm9LkprnEATU2BCp5H2TR4aCbbgjrzNWiS66ABSwxYNSkJrUn6uXaNdx1TzNyLzjFmh",
  "key19": "2xXNixdqdBivecUUC9scXqzvmesBcUQAeHiwpyRD6sjHZWuJ18YbRbu7fKCnQtnGKnWmnPjf7zgagG3RbUMFW6kE",
  "key20": "5aMEiWoqees9RSyrxvh7W79NsYeJa5Si4AQWxFZ9j6sL8j4j4SG8mXZegr93rxgNNXx2vfmdyGf41FdkcziDPHu5",
  "key21": "57YihN2sxdRhXH1BBp1E3beRzrk81rTqXC7WRKbU3UNZpA7oyW933wWyd2USkHiB4UGqggzKckpqBzZpGZxqgujm",
  "key22": "62UzExJ163nmwdChWu7gHPybE8rhXAJA73Xt4uWHVdw1KziLSnWzp3XATk5VWjDZqBGjHRgnYzPdNabVrdEwUaHz",
  "key23": "4mvaQuZTZSDGVW1Gtd3D9Ua1t2sDj2avZyCzTdMUknifeUxiVJWWXEbJuZ9wx9Re32e6uj4fFAbCpK63oeN6PfWZ",
  "key24": "1b93ASWn2QPYAJTWtdSLiR9azpjjFPZ9Z51ax1918HJfJYX5hfgmKqGSArVRofw7CukQiar3GxsuCQnza9YpFsw",
  "key25": "5v5QRkHoKovyCkT8MeVeKYzAcCNmgU7NV4MaKb9KfU34MR5wFdMzVnvvcLZwVGXfzmppNzF6VRtbXJxezFcp8pSk",
  "key26": "56Ud2JwouV6VnBD7asj8sc4hhizQHgTwhbHtWNqKzw9saFYTMnVDfFTnA8JeAT2mFP8tD2NoUo9Te5E7ggZ6jbD6",
  "key27": "5uWjZLHBMRyipVXaVqwfuoZozLTbi1tiEr9FKZGbSqeCecZkeyaAy9mxYqFcaACCN9aE9nqknvQm2hKhZDQJYPee",
  "key28": "5PV2wPdqPuC2p7QNytKZCjzFY5ojcKjopUd2dHF1pR9J2AUfMDbL7sAJ4idShXksMe7QVeRLh1b5QYbMWAvRPNix",
  "key29": "2PjtpeXVjEhkXALp6J8zdXWhDS9FrcrVE89Gcj8ihXyQDYTVqWfFyAUnGdJMvVP7YZiZ3735erYi6SZmsz7kSfjL",
  "key30": "3DkEEcYsYT15NqiHYMVHE5AXEEye3svhMzpu72sYc68p4uFtzpy6mmdQj6qV7u9tPjdTcHbtpjKDJPM9ZFx51WXB",
  "key31": "2cuHHZbB2oqG7GLxi1tf4SHEhrreuXfEFxaKQ89vpbRXH1ttS9TPPDo36J7AXgyjpfRssxHAYgyWoz5JSALx28eN"
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
