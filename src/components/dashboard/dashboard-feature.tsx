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
    "4q9MJdFafPSEpWJkHH5XZc3cANjxHcWtWPMTbJQotNZrXQL24cMejqhiXGCLbdrX8K2yL3NFpoVoJwyuouoHTzhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9JAcKnRGiCdbMxwtPGBLXejG4twG7RujN9qLeBZbs9iQPQBXtiMVPmGjoo52mGpk9FcaGJ5yWXpdqgEVsqy3mS",
  "key1": "3cvEuGRSmnMRBN25GSfyrUwWF3Rn43RzH2oqSmjMtt2Dp9LfiNGEsL5GU5pqdEi4iQhLc4tqfK1EdEGZrjdmfQpc",
  "key2": "cghqG3EE4eFDp1BnrgSgVdeefNry1n3tzw7KBKvqwZFowwe9CcpssRNCuL7oAXQ63rNe8tH2bQCnrb2oMCoR2kC",
  "key3": "43DQdPseVb1edxkkr9mRG1sA7FDfWKX8NAo52dkVzMNFUbB4sdRd51iLsKnnNKNEpfxqHt3KhXfcT61HuY1wrVqb",
  "key4": "4Wg5YnkxXgQhSyzN7qjwebDCgz91FJjzcS474G1xicEA8aPTTmFKeqcLdCHBFiQFYsbDMBhQJPNtKrpS9c1Ev4Zo",
  "key5": "2TSUBqFbAUa6d6bDYvUftcxLQihhMAKUmYnFJGkk9c93fqsiepVLdMJbn3NKYUJ5LzetMqpo24HVu9g2BbdfYzkD",
  "key6": "4NQ1g43FGEjicDA9UE15VbeDCBsys9ZEYbNnwmgjTNnZD53RpAEj5ci3hQGg2skdgkbjSG8FyPNjjy7AmJJehWku",
  "key7": "29sXDC1cQSR982URjLioB3fxNfCQf6XukpjLjV3JsuQMexyzV4qZX9Lp8qkSXnJn57NhwLYfJnbBdUUpM2WF4XGX",
  "key8": "5PFp6Pz78j2MhbdgJLBDratJyBH4BReq8MsGvSoCoC4Lt5XJgnd9aQqPdqCKMJViHMiEMhTxfxoVPL1SMi9KMP7N",
  "key9": "3Abs7WHkJhS6qPBonfcHuTKcDpRe7PpmV5kQ9n9sgPPYRQkxZTK5V5zVBuvYVpqayb9RPkVUPnjpVhxyHm54A5GX",
  "key10": "AmtbP4U15vVnfFd6V1c3P8co9iAbnfxtEyQT7V2EqztzVrSgZQ5vXjFs8eiypLUoHk4TL1mbm7LtjZn6q3NL3wD",
  "key11": "2q9DJgz4fUywFFsEazLRabrWJuemRBQNVxAVpXcBk9Ck5Y1mGtnFzsUqtyn72WJLYbx9zrMhdAZuRMqUYsDsUMwH",
  "key12": "V7ioVH3sZaaA7w1HfMLuumvTAE4D57ZWxWbvq8HtHB5y61EeUgRLn3EtFxxaXDqJEvCuSHjFo1boTYUT9YekcTU",
  "key13": "34HeYZ5emnF6iFvabpPsyfPeqGNU9VFYiT8gyfYMWMeEPxamedbxsxBTsf9Ey5ni9UFsWvpDgrTnyWe5KAd6Vdae",
  "key14": "4MqUa21vcsbV6VgStFrhmY5sWNW7rYjrMyz42bZaVRF1N6syQr24gMJxoDo1GW8eqqzA4LN2k4ebrzyqwigTNmu7",
  "key15": "4657CC9w9GCuDYo48Z7T3PXsU3iopzke322SxjKB8DfQ21hYAeGT7EyXYQ7FySArLsMyuZvPGesMnYnHgXubeJ46",
  "key16": "hoH1SEGNAtLCQC4pLKmHyii5TdwksN6ec9KsM1m4krdnMbjkpkebkNUtpm8GfE2KTCSttBLTeF8hBpYRGAyxuPL",
  "key17": "3JTmqmhogx3Ec62gPn2JybEXZ4hQqptsdWg8cED5DEpENnMEXevMRRGMAfW2BbRru2mMRNQ12mCx2Mq3Rd6hdxt7",
  "key18": "TWZXfuM9phDWyZBS9SZAWD2YaAomMocYYoXmZRxuXsZ2MAjEn7BVTSuNGD3ZcTe2AxFe75sYaaNyt3wbJbRiUJn",
  "key19": "3o8V6veawPpz1JjX1od5LMFtFUVGpcSPzEoFVSbx9DYqLTWmPewYYEVmg5BeuhYBmnKgcYVqNXhDi3cX6hhxwi9K",
  "key20": "5TjmimQ2c5YRTPSgcVmptw2Ji5LDRsbtNX1d8QpWhW8oGWwv9NaY9BXAgj4wzmfyNMKdJg9bCWeSTCA9V1B2okLY",
  "key21": "4nZ649s5eZhioXYq2YCtFL2iAV1EtRg26p1LLN1dPNfTdcfWh276dBuP1VSv3L4JLP8PfE8f2ntGDo7jpoFBJGsQ",
  "key22": "55mxChPdhSURQqweciHKweJBRrx87epiw5vsrVPPXuEmvQJTuu4MQtQLHDQAcPNoFWWWYWpSHeeSNMb8SpRh9f8L",
  "key23": "5ocLszbi88uRV9SMCRsPgNuZsnPTEWZDgX6s31oEjRTYK99ufPd2wqfousgAb6rAzzKqLHJn7x4QwobcTidE6Zzn",
  "key24": "2dqvLNekCQVKAN4s8tpP9XmSB1FN5BfgHJNibATJBFfwXqYpfvC38w6EohTB7HbJCoRbCJ7pB3cL5KM88gjSyG3y",
  "key25": "5sHs5RPFMTS2qTmYyBEpX93fEGwFE3UiNm6sWwUQQUscFdTqb9LSdEZ6PwkRJEH7uKqVwD2C9RqKnMBHE7dBtmSk",
  "key26": "wuyPS3h64n6Q9YsWhHhVWN1aSrdLTNA16eLcLVFRS2UaMB2jkFFf3SFZj7ocNVdDJkydVDMY1AhRsZn3rudC8oN",
  "key27": "3XD2b4zHxAz2S66FygdmDbAxkaQwsx6SPf82nYgVgEyRQAXGzXrQ2xvfsckVMAjb9v6K7msBFtgGAyhps5npxKNh",
  "key28": "X2CXcejJpUK2iE3jUDbqFf8fAvCGQSaAGxkRsDaPoQLn2f3jFdVQssxy2c3ktHe3qKCrKzsoM7b5RZNAEVPWWFY",
  "key29": "2Qr1z3qVGVcAfN6U9Dnj8T4RNvk7dxR8JBtb4jckMNWqUi3CiddBeVxjUeeUBHUhRNPNAJQrWfuXWWFsAvr3bDAR",
  "key30": "5NLXF2Ywjv9k8PDr4M63Vi2rcD7tT489Rq2dT7vKPMj4bCt8XrWvffR2kcj7qFRpTbm268XwfyQd3RgMThuVfvWa",
  "key31": "2F9k2ENPsmTACn87FV9mpPfu8Qb3eSHrsLT2amCfCvmDuhmcGuSn9h96c5wyGqnmQU2kT4QjERfhe6KUZTybPFe2",
  "key32": "3zA6vB7RNrCevh9BiuhGTNLrzhWkNmzktaWkdiytbx9PCNgEaPXaYvBiw6eeAfYXfC8EcvJJJJeppt9UJajMp6oP",
  "key33": "ZKj9BsDMssezvbr6Bw7HeSNghPbZHgDw5duEmiAMLJEqnzDMcutHHF7C1ngR3Bq5isQbNsof1nMyLN8aM1fDRH6",
  "key34": "5qYQTkeTynLCriz8H194rfXC9iuK1D63aXb3X5AH6yg3Hw44cbqouVUGA7TuJzTdRL57Uzn8nSKHLvnSNLakaRBv",
  "key35": "3Ti8hFWe7GgdfdiWK6Ndh26F6rY3wAX9MQzGWsZ9z2xjzmRiJGSqFjZRTE4PfPzNuDnkLJdEwB4tLm2Z2rMB3iY1",
  "key36": "3GD7RJmuL1qw2RaWrHe8dfSrCw1xpnUZJkhwtdY6WSsmxiLRzUppFQd21Z9qKig7TdLUzF8Geb34LRqvMCs5L4AD",
  "key37": "61BgoHXUENFZfuAgVKEn8q88UTS3PV3jo2WDMFcmegbCmoAEG3iP8bTQJv4Jpt8rh2CHTyQe4gYbgFBk7aeraVmE",
  "key38": "4RfnZ4RU5wJvvovQANMMxCFFLeYKWTkut9UyPi1hvZoMytnQ2LXRcBv4nTyJQH4EBkKazc7SGWguBEqPMWmgWRey"
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
