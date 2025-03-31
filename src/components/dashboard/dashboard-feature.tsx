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
    "2XSJL7ydhqN6c2Me3BqawRuxJvRXHKUvn1q6WiJ8QNYZEokkYHfNRWBzwAqxV3f1b2HGnJqFTCYUovt3bYDdDM4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zf82QEZNpyfh6jp595GcL6J3ujC5EMu9homvDSpqYABvz8A4n676KBarvbihXaikTaA1KgJismDz5v9BkmunJF",
  "key1": "2NyvrPDppq3bzpNj8F7RTir2ucfxzaYhwLsf9v7TB6ARLyhjwuv7Cfb1tRQmLgCwMaCiGW1kN1yqDJD5GG12dL6V",
  "key2": "2vtM3dQF6vJ6VLnCHZRmkhmTQK89tLSehog4m11P59Q9FsxV6DAvdVFKYhyFqjEVRsKPTyZdMZepzju4F5vH6XX9",
  "key3": "3Cut86S1GDw5w5beUNNg4g2CcMASggGE81zWSEKSn4Rrvd2aXwf81AgUhu6PHXJn5oDM5TWxMXaiHnmUL76dmnMb",
  "key4": "3EsoDTooDP8KWxrpaAnbZLNo8rLcQ2Yaw8i9zqfe3doQTZpbW7Mr7WhWGbbVb2b243oj9JFf7y84frQSFVwhDjCV",
  "key5": "C99yitBL5cgzEHPAThsW6PPC8u5vw6JtRLPXEzm63urbTkL7qTSTXWwD5V3VJ9uAdDBZQX5ZyvJ925m6YGxQUhW",
  "key6": "638rHn9mBvFqGVwKBmpJjacmTvYaNQTJnL9M7YNzzSvtMyqZi9Em1zvr1oc5BcXNNrf9m2NNdL7iLYVEuhE4akkW",
  "key7": "5WyhqJJeM9UMM3DpzB8xn4yscF4aTs4bkkNdNqi19wJ4sYwAaVn2Emcg3J1VZmwxizfcTwa8CHKHCyfCwzZsHjnK",
  "key8": "3rwHyjxRtXSm3FDuTCPviSV85gEyeQXeWUMUDKGcMiDnqaMq6FyL7vzD9fkWhQoyikoM8Rf2HePkdHCQYjxPDU8x",
  "key9": "4EActQ9XKTTWBUyPQzCqinDsKsdtf2gutxv3X1vUDK5RTFCfdraFY3Zg13BPohiCCnsybk9Krbnke2GaLyVtwkzy",
  "key10": "YLVLUZd9FShz7s6KzmD1sHroN3V7PocWvELamBrsTYW5BQUgbdcdpr3SL797KcMzhHX4rpBgh3KEpFeFhSiLKAk",
  "key11": "29sNPjFv7vqdGoFGVFUWnHzfsdYEVszttNcE4Hae2DtRYR9JubDRyqfhtfcf5iDrKZq9x6FRxAHWfSgkhyLujQqQ",
  "key12": "zRhQvjiidYRNkLg9xd6rXCH9cfS9vVxEmmLqwdUmnepyGRqSEm97Mc87U3zpciMsqo6B51sUn4izRyHZuqq8581",
  "key13": "4CVWAVVDJUdeBzA7ekzuXoAVSoQAtUeeWb82XXPoSQNj2SqJUKGQkenDiUQDmTgHAKqmpvnQz3K6PZCWLKfHiyvD",
  "key14": "2rhKhg9534HQ9UJ1WDWYve2FLNqA9qikhjNVGFaNpdtjNy9GDhRNuVYXCqMMYS8wFuLPHv5rzBbRo8LBsQ4ndbYj",
  "key15": "3SwyBon6NnvzECcKtW93BS9a5ssEWruppWSeExCFyhgSa2EDYh2HGPyG6T4AbYrxMKgYPQudWv5e5bhkg95Wj3S7",
  "key16": "4B31CGn3y4gUboiZH4XvZ4oXMg9fAPVh6yEkFx5hBzkUft68dki4RUvbvzxUJ1F4w4DYqSS8hDiQoqWLt55XVXjB",
  "key17": "NdMji5ELhSkUE7GUxoWRReZtuvQcXPN8qzkuyETfYDsziwTxCtgEA6x6352fMxkp41SbvSG8An4vrMGHzbYhHrR",
  "key18": "2pwiTCcA1DmPNr9cB5LT5dcV4TGYcB9pshBddrtbWazprRayp1GFkP9RhzDTXGovmHGb9BHcVHwNceUVR9ZNXqzW",
  "key19": "21xeaGkwFL99v7qDoEpB7Z3vuHruDsEZ5rT2A4C3vJo3NLSiXmkZCEJgp83P777zoH7wRT6H6fXMtyt1R6XgEXMQ",
  "key20": "TK6Utnokp5ffvvaxq3TSzypY2CDN2Nn9pwaipht2nJeaQbNcGxuEWy2RCM4KsHCDHPfWtPscv7DgUvaTh2ByTFg",
  "key21": "bKxFt6qNewzMAEcXMDJUc5RtMVadcf9WyJeEGLtYks4mJLpS45F1WsWW4CgQcyPqUdS1A3nCkSbw4UaLPrp4HZ8",
  "key22": "67J5hdr4aYFCtPa7tFBc1Uibr4DCVPiajXiSTuwq3AnX57P2S1FtXrQgYTDa5bzM85vW47wFpbLn8eSGwwJUuAN7",
  "key23": "qt3ARh9JEVneNmcEVYwcGMy4BZNSupwpbg4pnCCL5g9e398XBVxyAwtgE2fSMCPNh8vAQYapUcyFRw5SHruvTia",
  "key24": "2MSwv7fpm3NxK7Qx1jvUw4HRX55MPWjjdM9wgYtAx4DJCTwfQg1Q4CmxDebuiYjAizh1GruHbQeEojQLECMNpAyu",
  "key25": "4GJ3tzmAf22MM3QKqKhKSGta4dsSEEpBqmsGGJLQGbd8vYnKpn37E8jknR5zE7jXGm27xoF8jYJeJB3uwaLZULkS",
  "key26": "327iEt89hh2XtjDjyJ5mAEFEcn7ZU9AQpcMDCjn9QMcAdxUN3VcpVnd6v6PomB3GihuadvUcbdUoSyCFUGW3DCvP",
  "key27": "3s5kYX3xbB4HmZWe7pureAvaDNJTMDVkkawCHs7hkKpz3nK3exLGC8GWSFcRx5UZFqVUZNXQ6JPczPaBEBPg7i2T",
  "key28": "56PW9aPXMTeptS9eMJ4FAf5sNfWsLnk7BwzPSLforEZ581cyEy9xXABXsXDxXuD1xb3HXDsmgvxHtJp54ks3nikZ",
  "key29": "4HBWEUabJxmwGNrJyKPRR8wZtsnbrne7Dfi3HELrPoYKg2wnoXFsKBtnoDxu2GSe1Xa7NNRSUpr3XSZwRHc9PzvK",
  "key30": "CfSN7Fks96sQVQNGdZh6b5eJJkvovb5UuMeMCXpSGVKEZgbkFGPdHVuaovKpr9xrkwwg1BhQr93SjneMB7ZizKQ",
  "key31": "36MJgnCQ1Dpe3sjvrME6RZTvoyRUdY1MBz18bxxyxiv58GhvEthGemmYRDFye9cki38x6m5gtFWW8cbsLn3HnpzV",
  "key32": "3e9Sq4L2eaPL9dT7N2TNBhVP1hbtPPcx7W7iFNbjYQHAsND6A87W7eTUky2zgMSGQtDvXoQhhAUWQjvnrBoiCoxV",
  "key33": "5h3Cv279RyKSwQ2ZsopVH5W2P4WyARmzyTGnFshSpY7mwpV4w37QpLcegdNtgVtpWenwh67VPdYbBrX7kHgtW7Ev",
  "key34": "37HPbzVd5aXDXpcR78qDnvY4NSG63w3AkQ4f8qmQvUbTTcKEuY6g6mbKnJQwZMfa3HMr3r3cPKF3yNMrXzhVjrEe",
  "key35": "2Kf9P4AdZKmFEUpjwp8oWWRJdVs2fwxCUdyfq2DfwYUtzPejXTFQ1m9xKLDfoDaH5cRQ7gpufXoPT3Tjm58eELeF",
  "key36": "4mHJqWeAqqqDEKAcsjLQHJY2PyDYhivppt7puufXMbjAHhLKUh8NYrjc5CDmiEhZHHTBSadXmpKCsB2SYUSAus8Q",
  "key37": "3QvuoMR1Yh3WChxJQXpvkRiBqedTFsFneu3bjDuhcGkorJQCL7zDggkDUCGiZwLQtjBGJAd8nRTYkYULdFWouZMd",
  "key38": "31FWNeFyaM7qr3LA4d7BmxDhwqz7caiVBVcEsWwDikHmN3xC3CPMevsGq6bEeea6A23yyPBQXyRaG7jVmuv7sxtr",
  "key39": "437EoJWmMzVb4BgdwdXpfPsKJjNVsrhzzkPAZ52ihTUQaeDtks5JkUgs5SUpNhDzQJ1da52QKzVKaDWKoon8i7yN",
  "key40": "2scvL4nBymjXNnWQ5SyK4fGvuRWznvgyYtB1uLcChd45mBvm8kVwXmKuUuXkHUjt5hqxVQ1VRRytkJKvt8yzRoGu",
  "key41": "2NrDzmh4JoakngYhYTK6pEfqWcRCQ6wPY3NMVJS9yRCCUBcV97zPecDbtfmgfHfieyokL3EidJmfcaN1hU2VKwva",
  "key42": "oN9C3bWBFP6Msu2ywG66RDWm9qi1HGyRVM7FkxosKoHJWd5sBuZShg2Mn7x54aMsisbfQks42kzDeP2Hd6bRxep",
  "key43": "291tdFdSTMGeXA1CAh8bXNFkfVrKaf4Rkf2kszKbUzBAqAr9vKf9LwNxEyaFa6a3ALSn55DNBoJ7WDp6R2k5JU2T",
  "key44": "x4AqT7ohUfns4vzbyM5VPL9dM8Q3DJhZagbUjF9eRGkJUh7zqDAurvHDRbPRBWYS85tfSURPYWpxkT4LHrXVVju",
  "key45": "2JFmyWcsoQxU9PCY6kzJmwDJdPD41T24PRd9c44xZsAcBGs3M6Bt9Fv6pJ5LGLviAsA5CBfcACHL7A32fyUsgbPH"
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
