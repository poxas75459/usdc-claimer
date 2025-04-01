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
    "HdzsnDjdKz7mijGASQBiwPL1UX9pKbDFz2DZWKBJiG5AjinDb5rxEG8b3xa4Lgc9wYx4ox9w1Qqp8XuE47gyMsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHy1JnyAuyjneAUdBCSbMtFNSvEY51KmVYmXm76sYpENuKMNpi97ZRMycQLTFvbhw9dGf4USGdMZLkjSyPiEjDT",
  "key1": "2SFu84MRpJvC59BxiqUSnHvFZYez8Ny2PCRyzh3JSJWeHBnZoawgz4aRRyheuLktc9X4XoEua9BvRn5VKmobP9Rn",
  "key2": "4tusDxFtfHhDWJzfy2GUiXr6e3ggF7DX8WsxWtgiGAVaCVmWWj1MKba33UHFtQVAPqDKPkthS564dKjMYUMibA4z",
  "key3": "NmUmYWpRBUYLHZ3rWobViz39MGo9xmQu6MJqWSSscoaf7tp5KvwfjSge14J1HCDdfX8cRG8eRmNW1tBTabVQMJU",
  "key4": "3XRzpgohn9VtwKM5Dk6Hb6S7KZ2ZnXrCb9VokD3eZNSoMgVsZ6WWJM1Kb28dyQYgKTtEuUEycx9Q2G6dCBpYPNbR",
  "key5": "YvRjtJJgbBD1xJyUPZ8gigikyYFTEa5rxGDCMrPB2e3qL6z9n7941Wd5fSCZwZfnobo8hK4RVcTigZ2ZSG9wZaU",
  "key6": "w4xhVnoayzrVxigCUj6GbDfgGj3v7invU21tmikJoZUY2wcAcdCXaBMxAeiuR7npRSdP22DHX5h1pc8ZJgdseNp",
  "key7": "3o1eVAjRH6mrxEhszydPEn7qY1L46r9GhCriSB8E79bYutRjjYiNaoztkGRqtFsz41KVRfo2xsCwyC44WnpPjLLL",
  "key8": "3kZ9vQJLrGSewPmTsGhWEvTdeTojdw5yL55r3E3uMAAPuhnuV9FQ3WwVNK8UjXZ95PLfP2AEpXs3k2qjM44TSDcN",
  "key9": "2S5vD8VV4hr51ws9n7idaLGgnBffMF1X8yMXLaN1u1Gaq56Cchrk6VJn5UM5ARffdXSiriybh2ytCCo5q5QyWDT4",
  "key10": "5T8TDAud9R7S5tCRQo4pYiY5Ktop73KpA5mCPmUE5FtsrL7rFeykCtoUqLJNMcynfg3o382AVoxjmV1bgm55ocTv",
  "key11": "5wEqtsJhcfrEAhHYrXg7qKj3NyYMPwCwEq5F8hEwpb9kiCzJ94hVhEXDLkTjtZXsC6mYx6jwAPEtGA4nGm1m4p5n",
  "key12": "gdmNVmZWVc2NqdxEN3Py7jynNB1Nn5b777iQCjA5T9gvPqCLdxi294NfcFGDx5fUAkKJX7h38uUYjyxU4kRj34V",
  "key13": "48HUyZwTQbx9fcgEbp5MxoUA2ESbxcWUCoMwoJyYpqBkVrzN7QmFJzJgsqqLPfLQmGJuKMf9YDi342UR1zxX6uaz",
  "key14": "2DBnFsv8NU6w2JnRXp95nALuwPkUxkxfAPXVUVftpbZMM95BitDWQToyktiV2SW2JVuXZwkuLEhR8tq9QWwirT4d",
  "key15": "2ijNMdETNQQHZx3SF8VAA9vB14tz5Pef8cF9vmj3PqEjysUKMUohcEWQoaiDeiL5Q5mgzzheGsck8ufc3PgXnfxP",
  "key16": "3Ao9MUW837gFeTLPUoriS11PY39ptjKhyQvzCbmVXSAGfXXskosvcyiozFZREqfNKEjYoVpqGFkdtzo3CiMzJLZw",
  "key17": "4gFSEnMacERUYT3PpK1sk9jW5efx74u69wtbLLaLMCndRMLJTEdnFFDwNSqkw7p3y4DRrkMEDuX3p7qpstxhbq95",
  "key18": "53s2dDHZk8MDuuFb54biV6MQGVcJejkRiEffdiJ4HA9ZspjXNWszKA3UYdDiB6xAApkFz6FiH3CmZ7mGyqMQf1Eq",
  "key19": "42A77h4rfQx7FdAKZijmAxntWbuyeuWyQYAdxdcW4RihwntytjiFUyjcKLRZ4NkTVJ1jjt6aq9jrmHAk4DXq13Hq",
  "key20": "2wLKXGY7wZjWh5E7jA3DYsNVj7saKmDoP5YfSGnRpFFQPCv5kAAVQvrWd1b13QCSSg6nWwGYqkftHDez4smFVRFs",
  "key21": "5fzXAVqCFdmSQEJmdzLGRDEbr9uLjH11KgwqEJeBDC4VLETyZjM3GRc13vziW9Ycpo8JAs8qCNMVddfkGgBCm5Eb",
  "key22": "5agQvpx1uTkqaEeW7ccMeJSKFdMJB4E9WcXxDvv2HQXiA1Zn8DT26QVYMTQwKFpAM6YVTyF5hXFgpj1MUgKYhuEJ",
  "key23": "2VUCjd1dPkWx87Y8oJJcLxfjiRQU4aTrX3obo9K9edELUgHoGVwryXom9G7eJWpabkCuG4SLzewLsTR2WWJ4ByiP",
  "key24": "34AG46jZZpB2Z8fFAaLmnZZ64kkdtrkQnFBezdfqEvTnYrVYzg1urXR1UUBH3iEZ7xgeH49Ri8DP9hQszKHJHUYs",
  "key25": "2amPgvFepWCHGSYac9stz5ULDEkBVeDEqMFxi2iqhUnz13MUEqPFsUrYjkx9GXcqwCCQU6cxA3JLm88cY7engmNT",
  "key26": "5fxajZrsyLDNZXhFmvzCEaE7X5cD1tmpNgD7n4qZ3ShYLx34DLTyWqgGSJGF7kpWJ2kaFVhKX9fum7wAV5Wr7hy4",
  "key27": "3f2KXqYorYXFoHQeyEjJfWEL6L6xiqvLpopuf7EQbhNj82x7ZjpjpokGjsRus9hAepkeRjSSQDHpJxPhxruhfQDs",
  "key28": "3BXMDc89EGkfVjcPUyDNJZEeiLtRmFmBt5uz8DquWbBUgH2Rhm2UVRXPfigjhizxyrUnBT1ieZ3oTL31Cnv63VQo",
  "key29": "3RXhgjjHmeVtWeDB6F1j5fPbhaVwzTV27KGmeArR12AEPTdnkxRGTLgHtWAcs7vAkfyEwLKTkuF93xD1YPNqVDM8",
  "key30": "37JPdERgsjKZdZh2NvxGYDdWanKFpnePBTws9BHZynhkCbwWrod1Mz7hJmUXz91oCshnCeWNKzNTHJwCH7TJ7bb8",
  "key31": "4FTBDeuDfC3HFrtJHEizuz3NvmiFb4jArV1ozmjeTe6HyBPCA99HC4i4qEKD52Ci4NshmbHTj6TGeMCkkvMR244",
  "key32": "3Bh7MHbgTrB7q2ti23nBybWBfEeNJbaSirE5zK8zxbQxLG9GV4Tb5f6Qqf9d5AFXmW1YTkkrLmgPTQ45An2sWQxv",
  "key33": "3zT98RJKMHGPABx8GuyPZ2WC5X17Z5wLY1PeqMoiFytHmFKh7vv26MsUHQkzbHZPRus6QTjRqcMM3JcHTEK7jdm1",
  "key34": "5EvLU3jsLYWBXFhBGNybC9iHdXcrhWyKBoRGcbFSGUpqTEHLoSfhqMSKaUutVFqiw5iFwMQdGTL4TcAZbkwe7eKE",
  "key35": "32sCERPNm45EyRL1WAJGa61gzW1SBTAayTxWVZ9JTpqtJgUrkcQ52RBHUHsc82JK15wehrGDZninNDngPrF67EFh",
  "key36": "44t6BxTxgHvffX2gTgVFfcSXZWTuRV6qyfFuwcPANSkPFDpY2AkFjDcbMmzW3TvttZQRPvtAZPmU1tKWCJvtsLZb",
  "key37": "44pVwVCKXqSNnYktFwrf2h3WkLCJNbB2Sd3TLQ5hCRduvtCLwBPCyvmJmMYobBLfAjmU4LusgKk1QDfCSJiKhokG",
  "key38": "2MwbCT5Z99Vzni54db8w5MY2p3QqbWcQSphUYN29SCakpPRHCNEMuegsR4NUhKwsC26jENjpSHRJR32RVjs27z3H",
  "key39": "597RkTKAMZXBREkR2F5JRgC3ZSMzUoAoXgZmSSbYNB45ee38WSBLfAfavRBykauQqFV3GTRCYdde2QChHWet26B",
  "key40": "NL1X53sDgUEwfDnYjmJtBsze9t2oWH1afqm1hfgyo6tiecDV28gHT8Edv1ABP9ySVPwgQKHS6cwkxfZ4BmbMfxN",
  "key41": "3g6pFW2PuXMmpbzrvXksEcCR8Qhv6uTzeLREHqRXJYUeZMHcgn2waKmKYDxkK57e1E6bin2rNc8LCXh4GK4Sr1Nx",
  "key42": "4AjyDH6adYp13ngAnZqBMQuMejEF4W4YkzsrjsQTM3Z8jsda2uZHHQc6CAzGxCuZ9uw6z1X7CcmmFgTstvEcggVR",
  "key43": "4WtyUxoQLByKV59DWJHcvWdsSzs2VKV4QGqPdLtFtSyfa8J7a5Z3G6vPq4UExYWNMoffZ9dN1WCasBiZFVKeGpi3",
  "key44": "bBhBtV52sUKTy8MX9VAu1rQwgxTatTiz8rFLiJaRcngpEYCC258pZ7caHTNZUNMc67T7vg9d3rfKWJbyFG24q1d",
  "key45": "4Uk1FMZQEU5vauiYgcDPmsR9pMmpgVzQL2qgSshDoPdmsNtCrn1p5FrEjkm7cQmcdSvYsWSLMjWgTFTF1yqYJHFM",
  "key46": "5doYY5egr5V2QDhhAcPwkhiVCUPTDvnV4WRXxym9czDsjqBG7MeZwc1aua7CtFbQaFK4AXhk6PaxdoDC2q7MEQw4"
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
