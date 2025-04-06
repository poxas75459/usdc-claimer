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
    "2G4BhNkKcjj9Ri8E6zkY7tkzu21JhvwLMKiKpfEMvEsCDeBuunwfsbDP1GqhXbL8H85YTVEniV3mnjNmWdrpEXri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32547zAVmP7RWy4RSnqksPKoTsXB3AAn6zEVxWGh3nKFaLDpwtMVPA47L3xEhuk4yN68fBdpX4DXYz2oh1SBtTHt",
  "key1": "3y4VhFfwUWusxE3czker9MspQuy2MQzocYnDVXg5uKSfKzLvAmoPGRg1yPY7Kym6jy72uzGqLYYzoHGFrfbiyoSw",
  "key2": "3jrUzWkYnSczokxY99xwKKFbWBxoMnS67G1N34rsuD4PP6eaeR1wk2wrJMu9uHWHDUvr7H2d3v81qWJdGYAet4oj",
  "key3": "P5tsxVALBpD9ifbmHiTLprPD1XdehyN1Y4zMUFLCGni8JknYH9BsS2EiCfNiRGt5GEt1acfaAmjYe2VZEXyFwq1",
  "key4": "3dH9xfpKmBjCMsDReDByADYTegKR9DvBE3CH4xrZ8gs9gx92qz19eUkyqSJWBQQqNDZZoga4agS6rUZwAyVt82Bm",
  "key5": "5TUvmo1vWoMej3sT2aPtfu48skWK5DF6UyWLRRyXwgSYsrDks5Ubb4CBLEsq4hAaEqz6GD8Bt8PNjwP6YnHZpFqU",
  "key6": "Tugk3MpNj2RCVB1zKUEgQkSbarhUQGMmyp2bDuZaYeRuLa7eKcBLp67zQdGUpJLomG5AcmjMvSCCmCdFdmBngWp",
  "key7": "GQEpeycmsuviPphdps7bxqe4wVaCns57n7gDQE78A4et4TLeekHJJrkZGLcSMqtq6rUQkXMpUFr4CJWcCimTCMx",
  "key8": "qhunBSQNMXGmfDJu45MEbzvdinXdkev8PbFrnKhWZLotg1pBPULnqpG7qaBe8sdJi2NHTQHAwwDVYnWFCPcCEQQ",
  "key9": "D4iXncEiedJr1yFbSFFyYqnryRos6chsnZy9GSMezbA77xwvG5yi1orZudnzNujWogeWN2VckkaBgbZg6RSoYPd",
  "key10": "3jmHKjmikXo8qKpnfqiKTtyr84chLezb6hmzgxsAoxzJYpWddkJGgFyxva9CSpaHHa8rnZ4dq7wiFnZ56GAeDTD9",
  "key11": "4LQRxVo5j6hAezjCPLdwZutiHjcup5TDRfnBD64LDsDUMLcSiHXYtekT81TAK8CxaUTQ5bnKxFnHXLz1Wb9hNgch",
  "key12": "4NaexbBUXXEVhPKbvHi3idCyCAFEzsqawyYtmTaqx76M4fY3ExgQrKqQt7w7CJFNTYVkgbLb1AHV5tkjaHR78qER",
  "key13": "3kV7tBKPVopXSP5hCTZrEkpKeDQrS56C5ySPkoqB7D95eiNUho4iMhpvhqsNYA3CidbS5fMPENPbybk8z3cxEQMQ",
  "key14": "5PLEstyo7uyTP1baD64rjvzjrzbG1uUsbRxr8HAEz1SUE3dujDPRgJ5FZjiQNoVNUWk7hfooF38Y6p7xndov6bXe",
  "key15": "2nACGxEy7trcxX6ao6yEcLkSgDQ2euMJvns34S2DjVxf8DYyQBQ7S1e2t9pm4PPi8tncu59JeZhY9xwcBFQ85Qty",
  "key16": "yWWqbG9uHWytX5XEFneqs8MxUXG3aMSeUx5PqrPS9s6d3NnW33aAz1T3DABpUgL8yMkTLFxxQzuZm9yiMMnQsqY",
  "key17": "2Cgda8CyGPqfGrkwueEGXfnLSVZRPhhxMNJ9SdpQUJvtTZATtM4Ch9vzEfLPN7ZLtc1RQ9tAPSzPD4QFxwFSC2yS",
  "key18": "4PNtm5WBz7QTkSvpe1Pj6XoUy6SyxmqfuhdGPKhq4goNENugLNhgyF3mAuKmJ5TTriomArZ73DBFdNiEuoU9d8e1",
  "key19": "3R1bBH5tbWJiX5frkcAzGkrQGMB1vCh8k2MT36AuebbWaSBinCEBL7Uh2n4YMDqhaCMAb4PLXfnb5UKFuoxw5BFP",
  "key20": "2YaES3HZvgeWMLrcXNLDStLgzxFi4cnr1nRcpnoCJpfUHkXJBcx7Zpt4Q5cZ1gpiRcgcuwyH3GCjULD366bbAPqK",
  "key21": "3MGBk43wRDULCGXW1dghqhceUvv1gacXmSoiAGMahHfAvN389LjFpgTaEVonq25UariB3kYgcY8mnntAAxQi28dN",
  "key22": "5G41qFxxCv484J25GSrN2XndXreoEJ1eQArUtgFGuGPervpna9YUfYWk3wNRc1Vp6t2xETx1VkjUp4tE8V4tQAX3",
  "key23": "45uADK7wg8K8y9V9RjayPUMwDK4325EEVzF9jUawmTrNhK7wZ4QBntsshUkYttXWcKjVQfo129Wa5fNHNL3cJEyj",
  "key24": "eiJ33B6eyVFsVGx9W8kLQL9NwCwLP2V3Gj5G7ASA4X7md9erUcki9xK2Q9fsmP9ZwgensWPDvdXXFoTfimq8X99",
  "key25": "5t8Kf7aCdHn1CByPHciyyF6JFQDaSwAiYhgxqXXHRoQiJukpjXVrSGBBQToQ1iPonFpPTn14jPXDG2kF9xCYktxW",
  "key26": "21VtyP6WoANWowxeYANDCYCeVRN2HdCEiEjQ5f7KsdNfj91a4dKsgvaoo5aQpBA1Xp1p3d5zBcLSb2qUi4dqkmZ8",
  "key27": "AGkqdDY8T3dtMyjRYJrsKhkShCShtDExVFzjD1riZMudb18bpHnbqQEarAPCGhTpxrLMRpYD8LAqm75CSamobtP",
  "key28": "3xpEXqnC7R5StZW49uoDTnyNutmpBd8sBFvz128v6YZDso7rEZGwDYpXLxBqKw1Xc1xJL9wUXEy8wbUyPjukFPq4",
  "key29": "2jAsYrL9jjBb8LTjtg7fWZieih7qHdXqHZWE7xFRoqqQgKTfqiVRFUdba6ht598daaHFCWVDp71m5JC7HMZDxaEt",
  "key30": "44CcgbgQEAYKV7mojgSsFWvxzi824QVkrA83Ab5LnrsGdsjA91DMwxbSx4fSZ8Eo6WLnojJEbV2k2zQNy4xSq9bp",
  "key31": "4oF9GivAR3fUSj76cqGaX8HYtU9doj9Krdq7qx1DNV8PSpn2wn3HPXDuHwa3BZfJc2E1ETj5QuMtqSHgZQRutGKt",
  "key32": "5N479C6htS69JNTHZvDqzVN3Kxg3zKjxg2EFtCGixNa2oToMyECnYhWcuB9ZeUWqWte9ehadc5FGganPTPaKNH2d",
  "key33": "53Rw7WCamp8knKRgbESXDnmPYbHqX9qz1nnwArKn5zb337V3QNXxvrFjEuiTvh7S44ymaTyDumdgQ3qXVPXrXPzg"
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
