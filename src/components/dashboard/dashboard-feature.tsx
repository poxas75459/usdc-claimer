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
    "4CztJmNjUjJJDWAQACHuQfGp4C6kRQcHRUS8aRcnsLfqjd2SqAYAtKmNcwYqE7fgbcsJudWh1ZtuHWLJDnSSH3tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWpXm9m9zxXFQs2AjYoTVTn2CCTMggi2RLY15f4GDL5M76bNe3pjZoQmFqNwTS23CtVeBt5WybjAkDahAP2xCtv",
  "key1": "jqxqgAnBUqqezQyQr4sivS9ckMgTWsPYntXcf1EvMyZDMVFSbnaJr62egiZzwQxyL97YBBXPWJunzSYFFLJLduh",
  "key2": "5Nnv255qjLVZVRNizxRqpwJtSS8DBPQcvUisazMhmvRBypjDsdBCtya1g4jVL1Y2RGMi7srptR5f4YTX5BxER5eM",
  "key3": "2asRpTh6egMcPk4299csdMAZWfBh6wL8EKZTwYdEM1MtjzVtXz2EAZqxLqnhfevHAp2dE78m3Duqr6Eo5Rjadbag",
  "key4": "4fEmmL6P2XbNxyDxkSUdnTQepNSHdQvjhGVf8trrafQoa6zLgfLZDi4STepBTpytAqpxyJ2GEDTZjXU1YBMAFzKa",
  "key5": "2srFrsHNSLF2sLLeMWRgCATbDq8fY6fvCHEMrkKMegDB9L6vAVXmC7vG21UMKsCkJHWFSEFD7yKDNEsfa6dBf7Ln",
  "key6": "4weqqCpNf9fLZnfmcA87EUaNYRr7wCdU6M7vMW2iFw1zCF9Rz2fnG3zYsU34YUif1owh4Q33gwPcj2LjCimtKfPw",
  "key7": "3bgaTkm3af5pGVrHZNaYfUvPEmy6HEN48XW5todjecLt5W3AJpxZv3mWsgpR5MLyTG1d5dNCs1BDUYnfsVx8gpTN",
  "key8": "4rKfFMNEc2q8W6N7ctgyrLDaxSNenjxBi1WjhDyQArQ5HB5wo1yVtjWx2MYEnGXrm45zx5zgfz9Sks4UqvjddSgn",
  "key9": "zt13818iGsUtspQqggAmiZi5Y69Ws5rYjQuDTiuduoDiiBHmhuidFrMcGb7DCvCf1bKtBMikpfFN35DqhLnDtDz",
  "key10": "3RtcMorFxCwhtHptdEyVDbETvzN6oRpoj1sitfEKKTMfUTB154Lf1w152u1vhHwTYPqSWEQF66tk5XpRFXnZkS5J",
  "key11": "31EUYPNUUzzgkjVyNYciQJKDForFy6a2Pra65G2MpdHnrxKAo6g4Y3MPWWWzBci8dVcSh7bS8FPDjYcErHXMqgfn",
  "key12": "4wVaT1bzPB4BXGJMoh5nh3w7UQP6daHmeZW88moM6vnuUpRrMp1peeAFXabXMJ9AkywBmWS2y2SjLaEpEV7bdFCN",
  "key13": "5Ck4hyFDabXg9b9juEvwoi7EkqE9rs59XeyxhxV8m4kZLYuCPBeSqz2DR316oRMHi6VpqWZRnLLh3M2zmAwiAixp",
  "key14": "FNATnTwn59EGGTjWMLuYnrr8FjGFJLKNYLEN7UpT6i1aNhHQA7jCMaWzXLNGyDX8GFcRcXvT4DKjFkcBUfN1seM",
  "key15": "4t6VJuaAU8caQ2TVVVcdCtQt5W4zucDZftqCenYgEn2joFULPTYVLUSRBguvG4LMGgmkDZXbrNeUene2sNUJsaC3",
  "key16": "5batYVYXa8SKRnijrzX5izmJzM14GetP8hbZNszZ3rn9dBDN64QaxLVNrdMwsU4VE9VvE42vQMa4PfxtJFyrMogj",
  "key17": "3imFpPgyBUYSEZ3h6w2gaWFvr8hN3hQn8PK4kKzHLFpJeL4WHxcumJicG4wURtioeLD1ba8vKvJXFrxjnQEEHJA9",
  "key18": "2Q8FvznC8p7wRCueXz8fJnPt5rGQJodX9eF82u8X56zQXVktfZQKsnze1m3RMeS9hachXK5aiz1zxSxM1T8Aodyf",
  "key19": "5aTU4YL8qieivQkqGWmLpWxtQigveS8SuZx6c3JsRjzCPfz856hwegk5FvqpNKUpAVfpFvy9r3Am7XhLTwxTNAKD",
  "key20": "22XY3F53NF76S5KLCAwtx2diMM97px9dF2am5vg4NBcrVNu8aDdA8BsXf77ebyNNWgmzYyznhd1mkFY9gq2jqQP8",
  "key21": "2NF4n9wiUc3bCn9GgKmdpnBByrPGnZPR3fpj54eVtKkgogDVDdfWxXzGgkenX26bKop43PLxsvmPCeJBZZZLEAfU",
  "key22": "42dYur5SHWZG9LVKqd8wad3yA4zzy7wokVybNmqdDU4q9KB6L6QVYJR9D5LjbbLyeWBypcAHKrx2VG8mqZCDHvho",
  "key23": "3XNVr5dE6ZpHeRXEgrsodrE2yUfGKDXfkE6LbDctQQPzreuB54TWWeZPqQWN9gja6YNppRa2r8Kc2XVUHJTWwm2A",
  "key24": "3LYD7r3irWXsHHbXN9mtV97tR6DegVfhn2tjvxCKrSxX1qR1CRZ1HKfLfh9zDxyuw7D73BVju3qqdHirGCizHxnN",
  "key25": "7kdtgtb5zB466EJnzL5PfSfjxZJKSTxHHAnkwGQwSg4x3LGARFT3jdCH4sWG3TEAj6HncEirg5zvcDPdfMFPQ1Y",
  "key26": "qHiDFLrgPN95838vdG5vpFa6aRLuAzLvWmyR1fwBidYJRC5MyvPAw7EFXfjFieaqHv8gMMDdELPM7SuZsEcifaL"
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
