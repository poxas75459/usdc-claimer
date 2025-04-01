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
    "2qJT57ZRr6qw9ZCBLt4Jspho8sXzJW5gBjH3VX9djKJmDpUSnscekWbJ71BGTuDoiSYbEHqwdQzqXDEb8nTD1MdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcCTR3js8ZdXi43b9obgCstg5FPy6sFg1YS4LorfTxKEXChEppXwBYY8xKbz9pMXpePMNGk8kaXxcwZHvU2XV7t",
  "key1": "5E4ThmLHXtbykJuR4wYWF63dtC3NBwiCkgyejWUMYpyna2pZTK9eDM8ULhjP6Em9UvrNCK1NfvuDtruWXJ8bmPJ4",
  "key2": "2yWvbQQ9c1n34TeQCEWtR8VdmKQPSveWjMUBKzFANXbCwLAGRLc9pkfcqSSNxuhz3LFioPBrGn6B2cy96LFrjNwe",
  "key3": "P8eqexBiia49smj6kSr6mbMAhoyNFrCEihsn1FfwadZQ8CdFymx5ZAWfn4U523mvvzwxgpnBUjcUSayM9Taidnu",
  "key4": "2vP4kWG6aJZmBpoyQKsdREF1aYPhWNadQg3rn28Nvjp3FgmoRSYL3PtrKQyxaQSUgzo5ggfa6LFQtnek6LVLVjNn",
  "key5": "2DnZ9gPsrZxvDBfdCaVdzYL1o9HfiHzZWtrFXgWfV3qan9uKtQMhpT2No1ZXptqLe3JLr5nDiK5wbch3S5B8G5Un",
  "key6": "4Y7ctM4SsbKhQErhprjSdfqNGJ43nUui4DFxkxNPzxDCqBu1pwJ9U8oSuqwMraYjWrPfLsNZTkaq4fDe89y8fSeu",
  "key7": "VcuoEzsY1EBcbZ5t85TcBauvHWQzagpPUfhyiKqVFpEcXkJTVGjUzShmqzR3Y4TonYKmw8oTmfukrpmbNvdcAAr",
  "key8": "2hENxRyHk4iKXjRye7AVDA5sZi3DWaySoZ9XUUo8hycAuRBYR7mC2VNTVk7eW4FsyKWaUb6zaeg4DHbowZ71xP41",
  "key9": "4MVC5L4C9VqeBdhnmGEejZLaWtY6jj7kcAPruREmdU8q4mbndeu5jxTkDq65cWn3JtiAKZwE7T7Vdx1vfFTX3kkz",
  "key10": "2HEKCR2ExPVh8KQKXZ8NSRujX1Z5gDrTVkYrd3QoUTopdApxdJGMDhLSUstxEjEB76YumivhFGz9A3CC7BNebTzj",
  "key11": "3CYHuXPR6tNTqwyRherCxpJy5eTLVS77t4vuX9VPagnMSwmqcH2bztYFRszpUYRYq5rbZoND85tHdgBxntnGZWeS",
  "key12": "6139EHqhdgeh8swRfiJd9T1LRwnqEwFetz492rKkmxcsVCsNTj9ZY6fTcgvyzjFjboJVvMW64f1zssa61CuMDUBx",
  "key13": "3YreMtrU4RLT74dc1nXJfK2hRYsKimbZgHR3bHxAjeQHbyfZX3hinrZ3YBLuTEU2pCESNEKtrLprHLsqRJyo6b41",
  "key14": "3MRNkhFw5pzkTiMYCX1TB41obMN2iE4xti5y7trLYkPfWuTpMM51Fd2r4i5xV5L2x1VWJij8ij5c9DYM3twoTN2u",
  "key15": "5MdkKxYb17unh6a8PXyhcLiqeBuc4hCHzYAqRtpKfZm5WbPNNo8fL5gtvM6yR8dWpaLMDxi34ax2EcFjrH1JBkNe",
  "key16": "51GxPmPWAXN12Dsr2o6ug7GpduYF4j5uSRbU2JvGvn2AJ38fsmCidaa4YtDLDvBXWfZckY3VVRDf5ikaMaCBWCw5",
  "key17": "2fRMcL1pPq4jXsj1j9nfbrKDMdhLY2SuagtJX6ot7haWCeaF6RDf2KF3tZqS8aD7ghPhvxm88srjtweEAh9GzCyB",
  "key18": "5K7HCoA3gXDoAhCDqapisstKavLtbJELdz7avsG9DLD4wGddYhg1jpXzR6xUXqiHj86PKZUWHW2EeFCwRjBouL4w",
  "key19": "2bHtcSEy7WArNtU5jRH2H3PNxskH3DBwh5pLT3nzW2ji9P51X1LpUZZz9X7dRYrieES9ZrAUJU23vsVVVxz1TVSU",
  "key20": "5csjdhSBLSMbpriawZfNNDn3eB3xas28hA75aaTKTtZtfzmuaWHVduSgj8GV9H5vRcRDBGKyj7grJPEFhEUvXqXH",
  "key21": "2t4MfvDyddx83FYdvdTPREGE3hBPRG5kmhf5QCmoPrqLDZSsU2jAgWQGKtSiET7A2eMsmYtYKkNu4PvEhtpoBQAq",
  "key22": "3YJRcVHtacHNGQZWr8z6GsXVmyfDB6gGHaxM1Lj96PF3GqW8QETYwR8dk7N28e78ocAQadsJ6K4HqfdzJBcN6Vc2",
  "key23": "4FsoDiBQ9Z4aB1y3ihQBnQVCzifdPG8AUC3RATvYg21xNQbxM352x74BdwAnGyvcK5cCa3Y7BQn5nGKz79SFTUx7",
  "key24": "5ERiGh3JCj2WvWTmyfwU2UMDreHGixniL29DQ6DsRcUF3RuSscq4fcL4J5o1HoWQhkQ3zXcXHknBFydYwvrLzeh3",
  "key25": "75Fo2JMAVw9SE3rjHiafFsXSqcVUQ8nw5YE2ia8SYPriRjo4vSEBUBW2dWExoHbiKb69REm3Hg8gLvax5YzVAG4",
  "key26": "4isgeCfDEDCkVxDAz3T8RpV3wXrYXAtcaLG21fmxjN8ntiSorGUK8pq2gm5qypYFyuqii4jrC41JbME1ZST19zZt",
  "key27": "maULp2DjfqHFN5eNsEhNbgZyjDBwwVRcjriJo9eQzJh3fXr8YeZd1twfYxWTPtnXjE3x4FHhcSsatbGBnBDMyLo",
  "key28": "5phHX7esZBT8WYefJcwgQzq3SMZhVKV3oaBdT2HXoDubUEg8y2Kc2FfBqYctCBCVjF8446Jc7CkgCDf5keKdM35B",
  "key29": "2af7Gh4d5XPT6XR5PauXavMngjfN6nZcn2qrvQcqkQ71cFwcbt9RgB7GNyoSD5vw4hc4kdoDAFqw8spRSEc6nCkf",
  "key30": "2dpiH2Mx45HQxU8MQih8bZuudaYV1h3yfScK4WTudiASQyWfXxrKRSKqiGdBANT12jPVB3ZD1pdTJnr3QYGNL9gw",
  "key31": "4jLgCfgthJA7HwHCqSg9a1H674srCHpNYeXYSbNcMHSaGbrv5ZvGQyzKeRrdJciRHDQYbh8ABgfnp56fT9iP74nZ",
  "key32": "2a91YinrwphGZFrNCBTFKMwZWyWzkqEo5734DSqDfsXXmG2ystoiPQCXvZ8VRHrewYtGQsn3chYkLshDER1osMEv"
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
