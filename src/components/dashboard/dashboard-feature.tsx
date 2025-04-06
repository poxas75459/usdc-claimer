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
    "2Cytfyrt4LdHeP18boHVVYcPRgW35rpPE1Bxs1J6DF3eFgUM5mQ9mFQZe71JoDB6vVTbD8QFUGeK2eUi4FbCe4T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5TjimyBbZGxF6ZNkG9DrsGBAkqj2nfh1o4baxKm1d2EJtHL4CggAknpGx74GiQXC1YC1nCBHwrMRJquUmMSfgr",
  "key1": "2pwNALLsxBoLwVfGpp5uhNqpGgBBwDqt3WFuHG4gb7TCFnd9RKbq2HAxMBchHjy5sfSvTGy4n6kUDaBYzNgueGy9",
  "key2": "4Rfvt97EjwYz2d9ur9f141Hj7mg4EKVLhnd5xRL3zboeVqW9Zng5BoTBfYJKd4MoWXwoB1Rypw3JxfmMQftWBmh1",
  "key3": "4Xqm1KetRX6mkx3iLWmEwNqSHNUVhCXBJ1xmC7vDELrg6UcEX48ouUJLFf4x4BckgPk7wdFGomiL29jWmQAiLS62",
  "key4": "2tRLAYDCCrZqxvDu8NJouibMTwHCtkbWwh426ohCnYiKy4nykCo1VpKfAEfG4ykiC5rxY4NcHvuu1FzZXa4SAGp3",
  "key5": "3CevL5Cda7dExFqmimqhk78Mj8DcAL3WNwtsnoXpdQ5oKfyJ8r8bFM2obSeyUKFntYk9imSssGhcGA77e78oR5L6",
  "key6": "2zRtzy2Ada71y8q7tBrvsHCLnkzWbt2sfH4BWdzEe2a4LRa4YVBnZhq24mmSiFgqGBNFkJxFTRNcdhoLyUUqXuPM",
  "key7": "3Lb2aextDvsB8dTjFa8wT5Cw3YzF3LTKPMdpk2vhJy4vuvVYQsZjnCL1RyNZehaPw4otFLQYdboW2TQzoW4PfphK",
  "key8": "3od479qLA9RvMbpDQo5EkSfqRB8XC3vjBxF9vthdxaWdeLkmJEmKTRvjfvhxQN2XbbQYcDZ7aJWZsKLdSguoY1a1",
  "key9": "2U7sWdmKzL3HF3sQ3HrE7ZTh6HsXTLFQ36zCt4Fdv2RfUkyptWX6aKe4ZYdN7U8MgHuzY8RdZq7UTCypymH1NghL",
  "key10": "9Fw3oZryVE6DzuFQLgVPysQa2WtKsz5b8LiKTPWbj9YkNCc3VcYL7xpeA5Gk6gzwoYbgA1EUvEewYtCWuq1euZ8",
  "key11": "2SXY86RPDEq3XM968LKZHJQKJi92zj9LTo9Hz8wif4XXMU79HmyaySyDdvk4USW3CXXu175V33YftLWYAmF3WqAB",
  "key12": "36VJ3KwkQDTRNtfh4PwHGFH5YP6MCMXz6AHsX6R1kVBdh7ft3fPDSpa3NRwEoxzfxKuMiCMjYcoL2inJvYboDzgg",
  "key13": "V4mKi2gzJXX43Lga8L4N96KjxjHunSoi42jP8WZ5zvvQ8nbc1KfDK9QkA3Sve4QKFJK5UYorDwuZM6m1FWA7oZQ",
  "key14": "64ZBwoe5ahWcYhzdNHcsLZ7JJyVrEd1inaEGWRSFKAvahPdpP1CVmbFHvqZRxdj5R9Ays2R6gw2reLauZs56u9GN",
  "key15": "5kwKEqvr9SHgS13EGAScpMGwS7HUiJojnTMddjqay12832xfXBo4ij6HyGvLdMarD1hQcYWrDgn1ihkTCCCQeJoW",
  "key16": "3oRAXTm4B8y29qJVpnByMGBNHqvayxi2zjkAKHoNztLFYnBMm7sY8cQ2S7BbapCij1yEEEjLZd2PnoEnr26WYpT1",
  "key17": "5QdqEuLRRTymQKdNQeXA95RDpmFPXXJjYmpodZVMuD6cBrZwf3e6mLHsCGEefarApNk9VABTBtB3meje2jeoBEuL",
  "key18": "2aLn28MusLFe2kVrVxYubGypwjE9eD6VacpE3MAnqFDsjTJ6afYPCcRbMcg2FihvUvBrpZxgsDE7k4SF99zqBzve",
  "key19": "4r9Ldn98NUxfEJxqACHDCg72L7v2YiaLzG1bVMokKSKRYgzxtX8aW4J99W3yxnocHNtPbBoLwk6sRKv7LAFu9gxH",
  "key20": "5rSpiW5wEsybPzDC96ScPJmZG4uj5JE2Xuep2C1ztc6EH6WD2h7Uga7pxFmMDDRveMdmiWG8nCZW1ExB6ZLp8Ewb",
  "key21": "4VuKQhR8TDdv2jNn6NCpkr2PnuWaCeMn6DhVQaGn7KZNgNNDD6nR8a3uAaDJGJKSpfr8TYFvsErjD58Unv9FNRs7",
  "key22": "31jSXLuZo65VCpLBL69Tu27K19gn8PSrvmBKShcAH33Ry1xvezX2M423Ffv7Q17xrKmpz753yeMjVmiwuAPRdanK",
  "key23": "4MjE2vPpxiuGhaiLAoKF88sTDRhyiYsJXS2ubrJZt5EN2vPvDKd2qAvHjM2H4mDVbkZQmCpxnbLTp3X36HAq67u8",
  "key24": "Ux48fEm6ExxnMeqgTDSUrudeF9rav3j7nffLncs6pdBQLMFnfu1hxAYhqmasiUJ9dnmivkTM5f9UAyrC6YWa3Bm",
  "key25": "5tVBrm1QT2tcXgvGLYnQj65zQb1oWu2RFLEGN5MruEBZx2mDmFzM5WAPq5G4X2T927DHvyKASEFCsewuhkafoLtj",
  "key26": "43SUrnHgscufwuAFMth57BrdVYrUgDMge15QGsg5cTd2VEHEGL9u9g7cPe49rSNag4bcuY8EU6yBJdVjiQaaGHvb",
  "key27": "2fSmFyUknWh9V9zNfhihP9CYMYkLJmHRzC9NaSccyJ3Mjyc4a8VEBRQJAowpDgsCZRkUeS5zsWono5baSxFhRRD4",
  "key28": "48YCdoss2huDj9rCwmhzaT8KgMNodH13D2AYmATTHhRzk73zWvnNTvVVkNzk5vDrFUKLifc14z6uUDWNhvRhfbML",
  "key29": "SZ18t5Ps23EvL1EcGvj1cGs7GFmUiiiDcJXQxUu49wxHgyRuy7wc5ChNYKXRBKkjVxnm6Pzxsejut4qWeL7ST6g",
  "key30": "2aqowUe7og5AKPunZueYREGAJCP779vR3caiVMPmCETX8WMFNLPMFYPo9e4Z24BVHqmF5GV9hr3g2jR6trxVH5KS",
  "key31": "LUeZrEwnDu4djgEMp7LoszNnuJjvHrP37Y3MGHMWnk12LR5rqrBnYEhjFENkFBZDLoqz4pLRwtNGLDwggQHPvtq",
  "key32": "347aHK5KUcBkubutAU2XRqFbQZ5RmQqT7kTAFeyMitgwunq174VguPcCTwm43bg3njvRTUxsyqNMmtaPNewaGkvf",
  "key33": "24AheenmLyA7jkSAQvobg9txc7S47yYp9bdYUX86uy5FyAuHpvCPGoPxA2Rt3bX8agqb2CQcq53YYLCk1ucTQKab",
  "key34": "5qW7ro7jpUmrGmLPJhyeFE4QUvjQQxmBZQTsEVVfc2DAWkGkVQmTg9XeVf5tJi8PrbEtPWVaK1QQNBz53Hny3Yh9",
  "key35": "3BbdapKfRr7YFthaBo12DbjJoB7VPwbCrQPuyArDAuFFJVc54p2cCRX56sg6qbL97kc49H826NA6SSznZg6z43nT",
  "key36": "5in2AokoqMBrAUbuxxnMMFtUdaKJcy7eUih4RUqzLsVTamQthCQbBi7qZUemmmdbLvhSa4jVtWWSVvasx5uetbFi",
  "key37": "4DK4eEktDe1FgzPGQP7U7LGmduCVSQ7g571Y9Zfmi1DoJMPARDSypVvEXU2vR3YEKyZmqGeuTa5MSaGSJe6d5opu"
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
