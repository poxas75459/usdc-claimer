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
    "3iwXWNP8ccXKh5jw5mPyb9Q6e1mWfrZaNrFt6UCJ8U4AAgN6dDDH8mURR2jNyy41x5qWe3keNzd9ZehG1EA9LsVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcGxDKFfGz1nK3Uz5rkxkRcHVLDB1FbyWHDKdNEUAGNnUghGcVr95rerwaFyMngdKf4H3LTXsFssX68ga41x9EH",
  "key1": "cpNHX38RUN7chkjwGUQrFqJhLBzMxwLZKGQZ4FDv9fabdaavDfUhgjqDY35cFkbp5wGoh6xx6mP3CuS4YqcNZMz",
  "key2": "4KtuwCTZTZieLArsFokNgVJUTdfEyZBiYZeo9odeNMjRD4KVEpVB9azVv6pk5zmxjFoAfhrG8TxxTNNby7iTWKBC",
  "key3": "28QA2FSAnL2X9UuHAddVBZDDBAShn6svHcTKGFgiP6ahqnLcHErUgYcmBDC5S6wGjyW7JwFfPW4r8iGtmRj1wRbq",
  "key4": "3ttr4pAnsGZmaBfsjsGMGTwMFXcVica4Vam3msKzLmL1hs5kRjKXXPqKbPKy7q7vZZ1m1jfTP2kwZb6nZQg99Q2u",
  "key5": "8G4VAwwjyMdBTh7Hu2zkdZkzKf6xcUAvy4vQ9JVCkZRHftUMGscQoFRAjMqaqGPGFaMcFKzy3whdeCPv9ft5qQR",
  "key6": "3VbtRitPWqvvy1oGEWpYthQtfhaLx9vSrAbwNRLYgYCnYtWT7evyB6xn7v2TLohb2Jvh1PcH7c1BR7BAF4LJrUVC",
  "key7": "4ciuS1iYWrSpQXS7oUCG3pA4bh3zELCMaDCZxEAVbtJqyAJVxwZoSHJwjVYTDhg17UyUi7k9DxoGG3bN6xfywozq",
  "key8": "qw5MTLDwi1Azbm5s1taHuXBq7wTgX6vMe1SG6XMLhjmBY9RnaASeHDRxutQKnQHYYee3JmzX7ra1m67bDXTuswE",
  "key9": "5CShNESXXqhRQfnmGRwbd4yZQkPnkj8NSZc4KCEHDWvrNCoMBAk6LxX1ZuC1VhVJ9P2D1iTMYH5c1WKtSGPWzTeb",
  "key10": "3TyqSSuzebziVsp6FdRh5iC6t8x8s9LrjVgcKexQyYpNFtMu6vGBX6SSdncsZoJ7SXGeQCvMBXN2mjLKb9mmjRNz",
  "key11": "2MGRjMCNLXoZZGKBZkGW3NpS6Db4FRBkGB9x6nqwrgdHosHFuBrKKBdhaMxw8LAgcXrNZuHdiundutrTBrmrYKGw",
  "key12": "4xSNpzxSP4Y5RQH7LhPxVt1wauSNGpLivfJhst74m3XEpkt893q43h3GAL8pLZgSs352y5ocpLQQhXbL9cVwg5ka",
  "key13": "29PdkiX9RrTVTxUdSKasu36hyVBSpoiPDyXiGtsTPnQgPibDs8U61qJWJeKfYxWUiuSimDByWoJ15L1X911E7gtq",
  "key14": "BCATKoikXMXiPyyKSFMMCoNM4aUuPJCf2EddSCUYFgQMbmLSDu3vy44EhbYzPXgiuMKNnJh8iaNZCrWWT74TEZa",
  "key15": "woH8pDrEAJmEunUxLEnVSp4SgVY5ezyykYbEtJrz1Y8wumhdF6g9XeMVoZVda9rQpD9jsG5SWT9DGJbygm51sdU",
  "key16": "5Nddg4C5vK2S1r6XMexHVwHpJYk1RSRnjxSoXvJARpAAJjDmRLQMwY1Dy3aV1f5F8QirqypgxnPdswL3iRfGkTdL",
  "key17": "VBtJzRDbjxxQ6Yhbt6viX9MAUMvQBajAenbV2jQxi2vMKeuCDaE3TEMHyBRjuxLVjhqwNqDAtnufQqfg1KfVmiv",
  "key18": "5p94EE1fDNZHuU2apdQFsvfp9B5u64ag7mMnehH6N8TMV1BqoEb3hRSUwzdDomUGJnZf9tHtyBJJeWnkoWHeLrar",
  "key19": "2eE1VimEkm8MHkp2voN1uYs9EYkWrwCktQvSK8mQoCtHhMTXoaYkA2rEhJRrdGE4SSWpL3W4zLYKSqgX7XD9rLzs",
  "key20": "5ptiAKsfYwhKTyUeCojXuGHFYu7F7VUF59MgbmFF9JHkCwuuH7e3qasMTkTMYBtjSyeSRTs2WHp7jQ6dGoo5ovx5",
  "key21": "4PopEToVGgwMkN3JLKXJVzBpqE36nBC2NYRWqiPSDU145zKy7GmNxiDsS3aAhHXE3fDYcNhcafkC4hmPiXEjETFE",
  "key22": "3LvpbSSd3WfzsWv4XRob9jNPWVZeYk7kYo7skKsFbMRCYhojy6XdjMCU2gY8MkERo7SmMQrBuk8cBXefytJhP38i",
  "key23": "g2mUPqRaMfcZF4R27CZKMt31PwtLfrCTA6pGPvduhd45mK2JhpH3b2LEvx6aYDq2tnobNqcJDCzHMzFWEq6jvMa",
  "key24": "2YxjZvXq9TsLsiZLy3QpPQRoh4qgu7LBjztaV5afSS6hH1SZfSq37FEwrg6thLP5R37GBHCMVTfrAeQUZ3RJtXxf",
  "key25": "2aGmBtP37Ys7xS7PHg9bAjHqn8KLMkJb4bzESsxwFeM8kk9CJC6bWJhSVVQ7ufb4mKP4MkzgeVFXgwsAX2WTFcGo",
  "key26": "66RUrpZZQfbCPhUZBPsg9qcQMwV6gxpbCfFetqraB3nKDkwjhzG4aC47y3188mt5qHUMcMyG4xd5BeK9sNC8n8LK",
  "key27": "4ZC5r3oQbpFRQ2rjzVbYkMZiX5WeXGQcSMBkuQmzPe6wgMmjT7kuxg97VQom6zQ337otmKFFiCCq3AgSbq1t72YL",
  "key28": "62qUbn63Nxx6922JTxNPbCWrXZM3wk8u5qtoKBwFCsFx2FS2WxbXog9ucTNqC5S1Qd6612b6VTZR6BiyWWLkmFWD"
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
