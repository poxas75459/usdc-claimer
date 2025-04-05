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
    "2mBUDRjapfWynB4b4NULGFtVfv2tcxmiPbYMsF1rYa4UEAKK6HFdFQGGR59f6vombrkqbVtUda9tgNXbtzuHu9tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5tPZY4KDTje4W3d4UGf9MkN9pxqeShrQiCpdCnSfprzhjpMCwssNLPjBFr4AMkZYA9JNR4hid4LGFDPqtDQkhx",
  "key1": "5tMksM65CfK8aDYK3PcMKFEKD6LZPX4ckbSi3R3kPweaxZNNWcqWRMwpChjmVwR9wVQ5cCp2UqLQ2KS2U11Ac1GX",
  "key2": "41fsRk1tVy6KwbFDxDoMdwQrcYHrhMdaWhLYqVnqFatPt74oqUZ224EcqNHf7mo2sBakfnh7RppPdbWnNEWnyJpJ",
  "key3": "48YPJLiRBvu3AcPdDvvL2ems74etVTd85Ey3K3xz9BzoE2T5Ev6u6y7np4gyibNZwtqkftroGTjdxAiBbRZc52Ut",
  "key4": "3kMZhz613cpHJZQ2ZTYJuGiK3csrGW1mD36n5gDTVahoycVga5exSTwj4i5vLLBpFUUdngJGYhpv7hMaUFS3LY7d",
  "key5": "5b2aBv9fvVPSsZkU93cH3WPEEbGKxS5M36yZUim78J7GmNLBjyufZqGfMhj1Rd2yqZEmLSwvBfTfhzZx2zzJcqb7",
  "key6": "5TGRqXCmNdF6gMq6RbQLAwT5R8gssKVCN23eQSF7wjikoP33CqMdwdvbGZyrXBhkEn4FDqcaUR3zYn8wcU3mrj3o",
  "key7": "4yk2azGDkfe65GCpLtmwLXvbHZ8jzraA3zFQi22KiS2nEvByodf11rdLvQ9DUVbxHhP1LD7iAdTQdRdV37kg1oy7",
  "key8": "4s6ayDsiCpwwnvypKkVMNJ92Py5PbZvHGgcZheQaETq1Ar8k9QqJXCJoQn2K1QoBrswhGMeyNr8i7Wornnkjnqqv",
  "key9": "64KcnUdJLgVqUXJFvn2QmwNsuR682BhxxDoXYMDNY3p7idoW8zMkeFmUWNxrAJYUwejuBjpZtzVWog8rFFB8xWkA",
  "key10": "4U4dfE2R6DnAKu1Yx2JNAVqL55hHMSA835CcNRRQg7RtJiT3ewmyB4nw19BMVeRdFAvWZHkbiooSvtfM6po6TExG",
  "key11": "5qqmx62kPbHLZxouCVqx99RCE1od5GiemMjbsKEjZmqABvghSkhLFPNeX1CVP8XXvuiHJgH5mstS3JfypB6Zz1TK",
  "key12": "22cB4oDzRb9vZt96e7MG2cTmjp84U1yZ56wkPHrzogt5chPCrkn54twZvkHMGZ1pSdtJCV7aThJNDYKjED11nqcR",
  "key13": "2L322HCwJ6atHaSAnPpUmk21yaN8dwUZW4p6aDEM3SU9WtQaUaNQPcu5SoYavMhSUmzWZLkuWMNP2hMowkn5ernn",
  "key14": "pqHXiEjSWKFKdEHdgyAiv1KBxFr3qiqrMjwSssZNnUeAkTM4WitVNypk68BmQhNLWC3GAtC9JFiJ8EbKkAgY33Y",
  "key15": "4U5m8cgsDBYiXi53t3DuTkxxKXM1JTRzRohY4dnBEEkrTQNgdCHjYXkjW3bfxp2ccjzbRdH4KE2VLayMK4sqjSjN",
  "key16": "5PxXHSzoz44zPzdW4YrrXYvnQyEd29AvpFw3G2bwqgnT3LiCJMWAawkr28jLAGAPeQBoPHYqt4QvZ3FYpxgq5Qgi",
  "key17": "5MXFa3ZECSzW5hu6r2nhg69qGYXuVvbcpg4TKuooZqJBDY7f7T2LieNLvAQMx7AetVFZCsf37Ti5iVaVvqjfK4UB",
  "key18": "5gd3LngrUmwEp7gKK2teT11h848Y5xxnKTs98x7RzdJgSvK3VCy5JrMv3m4yrq62TiFgYDNByMwpQY8ymsj5Ww8F",
  "key19": "66CzjKATGe7ANuJTyaZg6RJXEcwvjYqFb2vpdhMh4jpSsUsHuG1h7NQncWtSNPuwibRCcJ8oKZkM3HsbAQ73uT2J",
  "key20": "5TV4TtAppEVtXM6LjjBZiRKYUseGZWBoPYSeiTi1GpS2mSoN8TqnNXKUUVeM4wwML2NKA4rGRE1wTeoJQU6LaDvF",
  "key21": "5e2xc4vcd1XjxFsGMLyPcrr3HaAcH4Ax8b4PUQhDpzGcQeES41pke19DvYSyVsuy4bevTN6hKnAo9USdpkdy84K8",
  "key22": "2EQHv8xng7cQiZUXGjaNMCqMHSts45zBYLxwv5LLfSctFByqXRmiE1BokkeYxxobSqTs2UV9N5FczCUbygDwe5Tn",
  "key23": "hBSV1fVZJusexHNLiQHrihk2J28ETw9J8gTKag9G5h7o7996AozrvSSoRaoKzxGxRSxxQdiCqLpQZfVYQ5rHwGi",
  "key24": "5pKd8QYcmSBJh5wkLp9vDf8JL58RZYKfu7ypUdCUYJMpZqGGsCbzBujCWWrqZR5CPhpX7v3HvFpr9DhLsVgNU1MH",
  "key25": "5JYDmGTCMPyoCRj7F1ZRU6KFa263AAd82RE9eJDWWWJJgP6nHwZoeFrPbopfr7AhM4dcDdEUXFRLCWFDm5mA1tRB",
  "key26": "59WGh19ntD9o11qkxQV3dQN6RytDGSWiEz6KEUyJo8NnTCWnf3vHgj8EugzJEkd8nyPpSiLbxWYU6Vm7R3p6kZqD",
  "key27": "3UyUn74PBvwgWY2VR6qLqxVeHcJp6ToDEgAEetCFVYX9giUccjpGquryWhUc3Ri9VEpuvzBuLGPm5HMWdTMqvEvi",
  "key28": "5Wuid7EMcepWNno6EnzvQLxUJsisP48yh9P5xV3AyUTaj13U5sTHddGfKx42occ7zwY2ww2JJo7NGS6Y1J9VRnww",
  "key29": "48aHAn3BW1v2GKvPZA5GVn4LV9eTcNWasw5zisbV9zhhPr9AgvXXWupK9jWy2UceJy9njXatoyeRo2UE6oMqFDJS",
  "key30": "cLJvTLVNwNCeLqkLZaXgFjhZTCL7v3yWFvQC719Gpj3Jc7JcfxFWWFm8c34biNo2MX7bXtdNGk129UbprcBygtc",
  "key31": "RKbQK6PsGmGTCxVimGw9u5RVJCGRoKog6xCmh69ErRFW1CnUTh8u2KTPAMYuvbvtZsGeJWNeGS8SgKj6UYU7Cej",
  "key32": "5tAgFv2HKfnGdChEhFMur8m42WCe3StbV8axmEqotw66gxq6Fgeh8ga3TvEccdHvAgYK2MwspdfDEhFcYCyMU5W3",
  "key33": "2BW6BJmPTkaQT6tgxcFbqNDvnCJ9uTrc68VmD5popw3Mu6TecHw2bQmR12afCKxdTdJkjjF5TGddPxkWjAFHt5vB"
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
