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
    "5vtfNnqsUZYWJCeVeqaKJtk5bemHSF9ASWFeLG1mPge5dSddhppgsMuF7HkXhdvv539YKt4a3LwpLKaCN1Jc6UHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNpJSzksncZRGiMe125DQ8S17TcV3dQAPVsPM3fodSQ8pkQFngfqGRFSdCWxoyepWD32BbnbAPpcuqMt1TRjtrY",
  "key1": "3BeYLD4mmB3k8VPmL2Pge8qqk8oyyQveT5ASftxeftzuLLrrM8MzrqjcqiBGqUeqk6avfdpuc7e8W4DJdJXJrvYd",
  "key2": "2njan8oYpv2aMzcT5TcbAoYutuzG8NEfW2xbDKEhE2fVquhahiSgvDBCJtTJV3KUkuCCfooZXLVk8v2jDdETGWGQ",
  "key3": "3S8rpmpanvFEUt1JErBbGePK4BN1MReFRbE22XyB65qX6z8d5xmHeztzucXrddMCExKd2NBWZsd5vp3XMkNU1H1v",
  "key4": "5Bjdu7EqKxoSxYV14z7qiQuyjtCehW2CgAbApZg221yZktQWEvHFEvy1NG8BiGJnJ8F8WcPg5CJPBRuD1FxkR44Y",
  "key5": "3F4363AcQPmPbwsFVLTwFkFL2qHLYs86mvT1YToB4kWf1ew8weptpccjaPdnnJVYqeKw1HTYtS8YsPBnaGQEkANV",
  "key6": "5CJSLAf5Lu6n2AiAkL8xBGYHrZ6nFTZBzPT3kAcETAfqi2UK4BYMZi5z1ovw2PCiv9Sdx5zLwA62hvVPULe8K5ec",
  "key7": "3QxcLgrx1DhpcQRgVXDTEB7T8NmjmdL3bFbG2utmmEGb2V6dDW7WMWfECGpKZMeirxTDRCXMJoKQ3ySrg1DNoD65",
  "key8": "57M6KHH7tS4UdUH1HSyxG1KEoHTzoSkPN7vM7Yjw2AC1cNKGw2yNEUHBU1qu2AdUy7kfomNZsVhXiCPKHDFgmEo9",
  "key9": "4Z3vgV1DTnkKYnkCHyVYvFkhJK5ERFeiRffoQ9VQNF9NFdXAePeJStmWj1uq18VcaD9ucf7SPisL7NkQbL9ARTpR",
  "key10": "3NtW4BcsRYxLkBkwkkiZVNDNw1MDnCs9ADRqdL2MaqBLtsvejVFCx5AThdCHuXqC2wD9RzbVp3gxemiy2XvQ7TNS",
  "key11": "37jLJZY58eDFoMgCaA47rp7qKSGTD6G14WbgqNaqGh3zSv89rePXsXTjDkutbR9PCTxXJ58Q7mjQzUPqq8RSXvXV",
  "key12": "2NsgF2H6Uqcq8wuup38ShSLkY2P6RtndeVX1JeuwNARgYBLkGee8qby4fYX5GegwGHeBQCxwsfyDu1ssCyWTXFNY",
  "key13": "L1L3P65AynJWjfrHS1G39ytB5R1chsP7a5pcEgwr5f3ztknLwdLYbFU3SFDjqKMu9KVW5Xvknok8kiyPRUxuy87",
  "key14": "2tHBwDNdVYCkhBcfxcNVecFChaxHAcbDHBuauxXY1ozqFsQDruBnX2ZqWLp2JRMU6jYLxrnMJgTYDzaExjrivtUd",
  "key15": "42TdFK95RCkpTYgCdx4PzVnW4VaDWJoewNwbsoPv3eyei5kVddhpD5LoYTz8Fs6wALCS8G5kKTBgmKGFKVuiqf5n",
  "key16": "5c4HhxCPyv8UZCSEYQx3jKcX3oadJ3r6kt4VGc7ahFcV2Gvvs3JheD3pyFvQgata1t248tx3YiE5JYA7frkdDb6D",
  "key17": "5QqDNqHerZA2pNkhtbnpZYewyhPm2qHTGj3myjF5LGRrQMLryb5e2KuK6ZXT1b8Wp9Cmi9vHMM4tU2RqrEGKBx5N",
  "key18": "2J55rd6c1izFJrqg4K8Bw5muBSHTrxQhKBonPwBs9xXHnQVG7i6LkEpvcRCdzKwRucKYFX4sYveWNfkLHmMh946t",
  "key19": "mNcjT1R7uf6KfdKnoPfSbhxY4WjymNKd2hACzSeccRDjcXyAbrwN664xi1MyTkQrcnDnUVUhTJHENsZ5RV1Qj7k",
  "key20": "5hvL2vXiM4KmmFbzeGfFygwgeQcSryfoXcW3eThYazi5Kf2MpHPQV6XwuzujdX6rXP9ieiu35BbApmLQM859qeSB",
  "key21": "4UNmc4zFmuhpxbdYx2m8X7PbsoPBBKUpSa381Gw6qMT69NMS7eSA3GKvcEdcuTaacKSbZJaDasxzArXYcXtKdt4G",
  "key22": "5icNmHy4ZVXvgqSGXhMMzfn5hj6UEwVgA5biwXnAmrzhTtfEMKbqYt3j33U92EvBebjyW34QtvytxFcxp8ad62cE",
  "key23": "5BhHWtqUBjA5XNeq9jB79iFpc4XV5X8sXGaAFH4KxTNTt2mXRPHgseyMbNeNyxMUWe6KnT8LxfLodsqENKuyo9LG",
  "key24": "5wCjQ8y3EVuwCJgVfgHPLZxFPcxHKoqiTzXwe4nRFSucKpb9CtnmbaAuo5Foqko86YQmEgqHZaHGywuZ51PNu2eU"
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
