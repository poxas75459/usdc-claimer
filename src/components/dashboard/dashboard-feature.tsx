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
    "2ypzN3gFZBwbh4aW39gGxx8isAL7zgDMqz5SmHL5aN4Wv2wStexHCePKNEoJwdWrBg6cGNgythjP2D59gWcgsX1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJZfHh4huwSttdb7Mf56qrZkeEKNfdJ47Ky6TwRfYBZkAeJ4SdV2hnUQT16ATF1Z3DNAocUXUh7XUDzfpUKN7fk",
  "key1": "5n2Q3XN3kpBSuGVyoRh7n1H9qTu69ARjQAfAKC5tnN8ECjDnKYFsV3YRj5n2WMDM22THaQzKouUoxufYiFaPxLwo",
  "key2": "4EKKTseNDqYTjEjbgP89Wc46mzRC4yGMy35mahepZpTTAhXwFen6sZvKGa5DD13UaecyAbJzZoyUkHW75thjhVd1",
  "key3": "5VEdCLjAf45sRTwZeU15qbRzr7u8kMPvEAXczYF1QqbjnNiz1J36g7ibaoiLX3MAjkf4RAd1tfjoeRcvyLNEhUAC",
  "key4": "EztZmxZcybGPFfqSNqsjUP8q6Eii1G8FrzMVYSN1wHiiMX8hXeN7Z3ry8nSAXbAZvBEzAgRDwi3BkPX8NDr1gxK",
  "key5": "64CSJniMEKj5AVe2W8ijdhPXmkE4bgV8bkjzZFuPaNvzzYAbYTyUByTR2YjFoytDbCENCk5Xeso54Zp2Z5V88XfU",
  "key6": "5cDCKFhXVJTLkxrvtxjaKwys1Ti94SpxnwYJKDs6s4ECLtyfkS25Efe3xDJ14d6kfzdsJext1YshSN1tCCNoxjyP",
  "key7": "4NPz5ReA8nkqojqsdi13hTGo2kXJ86S95bjyJZYvgcXouQ8AqbJ7Jg5yvkbx7rXCWYADzXMSZfhXYJmNmsks3SCK",
  "key8": "4LxdRjepYRYjJLTz7BQaGBxUZ496baF1G6kf1EF5pZ7B3Y4YAPmfwUeyNnXiZ2yjt7wLfZogXDm1faUobgn2LYYZ",
  "key9": "bPFjeuxAP2azTUcVjxNb4qbHNh8npXpC7fP1wPwB5FkGUKWRTRMZiAKa4ufDFssLxW2agaBiRqzxxxfSr2yFhCQ",
  "key10": "pwqRwU17KCyBR2pU8Mnymmqxw8Zw5ufmBptMyvG3dhWK62FEzXQmi6wnpjPJBQ9peBgjbHVriPXUvHxDceFnkXr",
  "key11": "pHaY31PCY5kdKLhhm9buaFoZKxRdCEKuqncV8Esjr1Uvw1rityKBYDbpXDx3jyZxBNcr5mWSYEHo836tisJkeqe",
  "key12": "5XoeSh6DXWhMBjXkKKTUhaoDbek4BoWzq8sSpVeBGaZ54iZAKQdSM6TTEjqcSXZtLM7EHxyKjjtkcjL1yxhNF3w6",
  "key13": "53Fo5hyBgLsPMCzYQhoYYqAcbj1Vb954rE2jzSXc5if9DhQpwQpxJ3ygae8xr7U64MsacD2r1ZWE3LhHSwHsCe9K",
  "key14": "ttMxFTxD5MFV9UXUuLWYnKqiQhYAq9NeNsJ3R4W7D8vjabrzreB6fEJLqeEDWscVR2Uqa9ffUgiZxZvSYu3JzmL",
  "key15": "etxFK8YUWBmswTAK3JLTnd7HM13C26AwMkw4Miuke9K3HTMLX45BZoqrgdzsSCRoeY1KJqYy1Va1U5MfHqiMh87",
  "key16": "2cS8SoBFCRKg5tP7agnWznnBs6zV7NPbW3t28DYgb39tT94Nwgsbcd2aEhzmqWSmikq3CyqNUh4weAxujN1A7W8o",
  "key17": "5YsTYTUgnpfnspHrLc4enqLdQ35iC4qhJp2Y3snswAKABJTdJgkdtSvkYDME9o3VBcUZRnWiGFYJzWdkeTZH8QMe",
  "key18": "4yTo675a4BCeUjajPFAHVrUb49nkHsGXcj4vwrzV3576mWtr3pbKGTFZMWx1SL8viM75TgkgZqLv3ue4agbbb2wF",
  "key19": "29pAGw8mgJz3zdNxaDwpjTd1jB8g46GZWP84aVrvpvVeqTUvvyzmQEnwqUF71sKLrKCiAWDnLSQPj3xtBV317PGk",
  "key20": "2H4MJF5GoBiW8QJLQJE8UuCayWiiGV3VjDqGycMams8v4dA257LRoDsJc8AVvCQSejajWDZe5rpgG7pnxtkPTn5",
  "key21": "3eYvrb2TyBbPscMyMGYenMiG9DdCxFC9TnU9Ju8PqJSLBvE5fm3Zk2GVCgNSzyEo9SaCoDpHVva5Nsg4SJ2Mt3cp",
  "key22": "4e1mg9oP2cy6s5PqUivvuEEPWgP6DKH3r6YyHAJXHsT3zVtevL3jJyaFQmd9G15xwkCLRa4RYfEBKC8ye2hJxsjZ",
  "key23": "5mbCYikxEUqM2cADJhnm1bNzvmzFbnscnR1PdLgLqfDfcTmCsDbZKjhJ5rNiPoTAHoDhrpue3qsexdCujaM4joZX",
  "key24": "WdnRi7GVkK86qZSsNhE5gDWTUjcaGxE9sJb431tQTzfxRiD4168aQAmStW8mvRSquNpwMHnyZZzHkDDaSXQaWur",
  "key25": "3fE5pxanLeircKdNeLUKGSdtCTYNo94pBBJ1P2r1cUQLN4VDkLvJD6jrAUEkN1fQhthM5EVTZsXvaycqsGpVT4yP",
  "key26": "3PQiMPP1ZW8u235aN9eBgPQsDvrHhydGXfLSDgL8Q9M81VLXEtUgNM9N57QpV45A24NEbDk3CfUNGDE1Twb78q8w",
  "key27": "5yymRS9cfKW9xyhvoi1nHm5rZrp8PH1iMBh6VdtHiWVQeHWh5KxgrdzSDTVaMuos2SqiGWPaKmBbYU7wqmc7CQpS",
  "key28": "3yEzE8vKJBX3zod5nDDXCr7CQchaxkrMrrgLkysqcauqsxAHMkGfCxbLchWWs2veygHVXq2pA23wT4ULZbaQiwXF",
  "key29": "3o5VWm6LBGFvZM6qmxL5fc4ZGn1mMoCKLEjxZ4KvbpPuNbdyGPSA1wx7FaE92XcaDFU9qcLvBKYGtDQwX2e6MULk"
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
