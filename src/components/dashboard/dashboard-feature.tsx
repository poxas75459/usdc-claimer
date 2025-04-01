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
    "33b55YhjNT6JGyxiPttTXneVPwNHGYz6D3CrM4yCictxdKuMt5ZUVag7HCBNmCTeSkEARbY4jF21vKaYHRYoQYoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YbqK4cy8vPgTscnYgP2czJzSLKGtcWRRU432mzAiH7GAK1EgpaY2n9m5tPUGgW9S9yBwrsGztznHK7nXukBA65R",
  "key1": "5V5T7auWPdcpYYGvQCRNVnzgYVpZQoLsZdD6ckbNBbfF6sEBtCaeWKRbqKAtZ7Ad5maNKzsqK613GTiZyPVjdVH8",
  "key2": "25Pha5KnvHJZaa9THJP5Ps8unQ2XPNuv1869YSTVxvmJHTqA5n5xkkRjd8bijuHZDM5v4ryLVfsRRFgFQMTqQFCf",
  "key3": "5EpLLNGCzxWKAECpt8N21fCTzTHsFrkLR9Ea5CmNgf6D6AzPRg1ia1BaAndq5fGwnSb7KbTdCSeufnSF5zeKUiBr",
  "key4": "YnaPyU249MTKGv2ytaMiKnAP8xmsV7yqNSn6pfP8dmoNXaKrtHNiSXHCx2aEbvL37SZ95kScStU6BpBYFPULFR7",
  "key5": "2aQnV5kxCSHjW3n2j2jssmuCoJHBCWsypqhkpN2Yn5Uc3cHbmgj7da8YQtpdpeaqbt4HM8VghYsVYAeh3xuCvhjH",
  "key6": "2J45Vnowf4XR1wffNzZzqZHmK23ukAcS2Gt6v7HRpwJew3xiDYuTbCCCq9Ge5XDfpA1KfSYdZA4RhXzLzfvshzjm",
  "key7": "2DczijMJBgpQVwrCbSDi2hxbofK1jkLoN1Bzkc6511Ubm6wtbZuf8FFqBKrA47nEwPPPZXR3vUsMfneiYuv8BJHv",
  "key8": "YgLwaY8mo6Hm4zkPFzsiygHFcpbXNK88kJmxT5uab6Jj3i7foptPEnffQGzjkhn5zBF8A8P8vuvjbBTU2eRfhFi",
  "key9": "5a3ADxaxpNnnc1V5pQrJ6NZV1k8PsJKT3caUpxnWnpDuxofehC7gF6qruTmgefX3uW3hABzHgMmRT96J1ukxVWZg",
  "key10": "nGpANrw6EVf17AAhvTSm2vixjfWpS7TXVc95NrLG5ha7nwyt6kptuWwMoiqyn5ehk2BGHv396Dp4DsvVttLLdyT",
  "key11": "576tzQNBKi2tRGj1XAL6YKz3gergaS8U4hXVLbKCcuWSoxPFuyRJ4KKBCAVyGzn7frJ35pVcRSwb7bdR3jYRJXt3",
  "key12": "5HEx8EzLhwGQS3MSMseHduDX7GaxNQuiBtSEzmGhNMWXYNMDLhdfdcfAC5hdujKiC8r2Jo5H5VVRFxx94wrykyPc",
  "key13": "28KQxzrUxyGKHzqisN2hqE6KxTDE5KTTmdyvYgGo5zjWNUTuYYkHzSA5utCFi6nc9KfPnA2xxMGEs51ejT5hAnYt",
  "key14": "UjG29y3BbjDhb9WCmWCRBa2iqYL4Bbu7QhT5g555qjboW7E3fjRpnp2aHGWmhJaZqsCRqqq7yhJNSwWUX5WYKfS",
  "key15": "N3Vx4SiYKtDUcxKPkgiPRyt3mQxmG1rDX8YLd3LdWEvfubQCUgnfSPvN3EVAmRjBYa6GMWmUnwYKsUwFXcskcp3",
  "key16": "pcHfwE5PDV6PWsqLTD2vEQAGEZ64z96cUvCaikGKWuy8JuwB6nxr1wk21RuXdUcSEhfD22mDndqHWCvLMNtfZWF",
  "key17": "3pHfTGaSN3aEJtwubkkB5YKgPuVmVeuVxF6oswz7Wrnt39EteAkauHCY6i8v6PdWGVH3pFyRyvQ4DnSmS1tzF3R1",
  "key18": "53HGDhrLCD4KUGFukfPF678FSWyMjVvxTVpnDbS7vNyjvSpDzb4CafE6VkLv14ZBs6rv81t7LhYCdP1RAk6iohY7",
  "key19": "4ueWsA1Bke4EJakEKyXEtT5ywQXLwPBWgmANxmAiu58MG2dxEe7rz5ULMyU2ugqAsGGagffjUQ88ttG9mTMhJPqR",
  "key20": "5pLGLLuyBaYaWJZacpEgaGrXynKDtJ32jckS9kSYaPFiAJSVsy29xXowETQC6BhRYDtbp5PdgfZCD1YmGCwUQMyS",
  "key21": "3Hg44TYu32AdREaP5a5pfWpBnRS9cMw6KAR6mZ1r1Q2AgaQo6F496Yijeqi1wK3Db8oRZKKRnuEaDEMYmDbsikBW",
  "key22": "4qpbYzMa5HzhvQ7SYxoQKy5he1neub4ooBTZpm2pXTwK4couVMvDiD9Ar82TsCZSSkvL38BqSPs7veojYhC1vGLK",
  "key23": "4JZubjURHR1rMDg7FgRttWa2sowuyY4qXSALzSUVoCSppqQruT734rA5EQy6BALY9dRnzr9xV7e5tqFqoJ2QVKNt",
  "key24": "33KvQJqXZ7gR2bNmdrWoc5RhXbXF2CkvGAav8nrhv2w4f5jeYRTGEsBefzcJLGxHMZAheTLq9i5BJeXK8c3Z2KjB",
  "key25": "4ZyZb22Xn7BzPDr1LQZj9quxGkuZxq8MNmQeUpMCTyhUVvf3SvWB2M5vUUnVPUdVbzx6Krs9V9SpygaxP5pnoctG",
  "key26": "5zWZwY3KF5MfGemkfdaG2WNEtPRAmCGVvCKfCoD2U33qSH6XdBPL2G4x2ZJNUUYKNrvrLR8oogFbwdeEXJUEHDZg",
  "key27": "5Ck2cTDr6AJmSBfBQsrhWML2o8YfFNekdSaRHxfpLZodgd7cG2SwAmkezPcTLRLX8LjSTzNQyD37JERgmmVgjfVA",
  "key28": "3sMXxE6egA3W1JmqtHpetbGRd9ZEfDvsHzo68SJLwbDTdMeBoMDreeE38ZJVAzV9dE2m9ssUXr9kAsgo7csaZpkY",
  "key29": "tEwRBoirgySvAj6kzmEnMT9QXAHuiu9c4sqwDsGzCnbkFjKE8Qs1u4XT5B697tjqFMD5FvwSnm388Q63unvhpoJ",
  "key30": "27tUwubPv5bBSAegUTEkUkfnRJPXQKErSZbuq4BCYVN5w1KyX9nphjyCZtVoieTStLwrWq2QpcespCrFwaareqF9",
  "key31": "5F2Bx64EwWgLCDHGT8285d9dqXeBLuFnkMkTiLYtbo9G7oX8NJrY7Sg9rcppTRu8Lw3ScHgNvqDbAyzdfAMF2RUw",
  "key32": "3e5DC3T51gurntHp2oLegMkokqqXzeAJVWzKR91xfhgDgky7Jf3XcMA9CS4MoZe8Tj8D4eATvSc7GGXndWHDxibf",
  "key33": "2gZCXE32rvYq8e18o49avtHX3unE226d19eSgrNamsw6hBZFrfnYDZFyH4TDsYKdxZauAbfZqwWxxCDpvWJRxSmM",
  "key34": "4q3smFhk9HY76uXVTBCrLwMJgez4duuwNUFn11PpaPYG6CqYjh3U3JpSY5nAmewdACHfydivpA6pW1vLm9eCiQ9P",
  "key35": "2LPNftLo8i7mGNmyDa3vpANMKaD1XAagBZTVxGHhv8pkUUpnewgkgg6ELXVr2DkAv8QKnimi6qE1AUBzYw4HKjtv",
  "key36": "4yPAZ8BsEpV1SqtJnbMKSHmhm1TVckMMSCbWEXExREK7ZkEtbH6MwyDoJxEKE2bw3eEfVK8jitxFgvxTQA1g2fKv",
  "key37": "5hs7Gb1eEuH8skdwEKP9NYjvGcpgMjqJEaT3CXNf7udNbq4fdHAQK4KVq6S9HYVP2C98UFAbk432hAvvkxV8ExGs",
  "key38": "33UhBNRMkhNx1ebUqEpy9J3xgCsdB3jxn1N2f4AyJEjJGV5Qtgt6Bu8s9QfcRpYP9JhDx4FkdAyBAXXN8jmcp9Ne",
  "key39": "2cWTys1t2c1DSjDC63RBB4WtBFwWwZ6EHGW3zpRU3myD2c3XeTk4vVsFoivaASMfcxUEfVoNsRKCQHfGqs6GDXhh"
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
