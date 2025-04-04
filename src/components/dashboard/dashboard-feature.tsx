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
    "2xuQQH1WmAfFjXvJQrXaHuKvmfVR3hJpWYzZNHxUv9aW1fRakxN5xeJnQu1SxtVoK2cdbZywErxBKs1KFHZ7L1Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvsAfyzUmzDgqGhbVTJcB2qsxRSw8WCYqB3sFHGxMFT3R7hyLCbkvnP9bifNffEpMXY42t9M4awUjkyLtgjWsoS",
  "key1": "GQwnM138nEht32KSCFHbbson1rwzb84rg7E7ZEDDk37RB2yMcRo4zA9HebTsgz5MPxGDgGq99XCTV3BpVC7yKXk",
  "key2": "4fjCy95ctiVGaazTohbAsMfcEU2EA7v1hAmYseXFGScGyrPw1NA6SsdFSkEBNGtJpx2bztg72mYjQWnqr342mLnC",
  "key3": "2zdB9DykUEKwdj5QTB7wPaA9zpbuZ9RzsA7Dcv6LL17b9QmPi2LkW1qRmQoGbVEPvhzV79SztAZRh6SF5gk23UsG",
  "key4": "vrxeLbiW2JTKrEX8Y2waq1TEgdGjPGLp69Wrbtf8ZWQgbmYVBB6e1FRa3rR4CwcdncNyiPtgntPx7yeAUqcXC9R",
  "key5": "3kSyqQos6h635mWmtEd2oPsdDxfNtJ7bnhbBC3PQMggjZk4z2fgffWysRCmpFLF9FU7sMjNqRs6J6jcfg5MXEPNJ",
  "key6": "2BkC55aHsXeP22Wmio2DwhQyWXLhkFRw1fJrTNTGPyCDCCmvzdtoLW5TAvQpzyEc86nwcU47PSsjQPa3DoBTNKzj",
  "key7": "3Jbwcqo3iw4RWz3xYD6NBqymPCqHtpwgNzxetELqiRBLXUHJWJeX3CEucvPYDVHeSQQ3wDj38UBw5cZiWBxeBpSP",
  "key8": "4ZYaGqENmoRnoCiCEaJi45jSVF6nQQHUKNWDvrGj6ngUguDysf4ZFPFrgCo6vVq6UzjD1sRn5V4ohrFnKepMsxrQ",
  "key9": "45X7Cf1vEGojDrZE4mJkp6rbNdQJkWM1cmW4Dqa1zCPU6e67n4SvfB9Pd9LRTuT5w3vuF4opSWMJE14r9XekP5cL",
  "key10": "n54rmmoa6dwE1TfpvCLyicFP1g55sP5NQyVJe8MoXcftfJ7TJvAihwYcWBcjb6bA6UjmLqQrXvWzUoDwtRByZDw",
  "key11": "4GaAmxb9zrR9ajsunoocdBSkucv726NAVGCwkVyL8up5zrMYBZFFi4bSUmvf4aakfu2UzARnJBauPyxsNFZG55Ss",
  "key12": "4SK1vvyx5ZFTaAJntQqHYRbqhSDT9h4FuPEMbRFFRNxs5aCiTbULN3ctoErZmNADh8VHfY11utuJBaikmqoTxmkY",
  "key13": "2CHMSNouLybTJz8cEy3YXmgRmcHm1fLeZ5cvmoTmdNVKy7cGu6CrAuXEpK8oxEGB6KnXYR3AdMJ5WwbfdLsR7U87",
  "key14": "2USZ1R5xoneLsNq91WHEbPguoa4YWbp3R88Cg1JqNsVHQwU99EwiwFNpRnxkZLX5Tz2h4WGiU8cAdv3hxvnWAKqK",
  "key15": "2RA7RBDXqZSptydSb9BoZnb3wngMoZApxXKbxUpmK8iTVVrCT5m99BKSKrqE8KAXhMJFGTRN8q3oKHSXqsLRPHkn",
  "key16": "394KHz34yGCZd5JuA9NiKrNfAdZGkbKXgVWqZXaJmBmyHVRK13HC55nzvxPtpetZE4wpuYf7DT3hWBqKBe3ExZD3",
  "key17": "58ceLHxJMSNmUZpzmiJXBQsoWToxYDNmZ6jvHsXXaQq7Ec41aeTQMTgniL4zrFK2SCGVNKxzrr7PNGXtGyQm6M4z",
  "key18": "3ekkxmt8ENbMDXD1swZhUsQCygQMsNb71F8wKi77j7pmA4cpq4UtY8xV6hvWcMcCKuNLzrq3h2xSu7oRdVEHdiev",
  "key19": "3qWrQHEuF2eLsGdDMdaFoJC39Jrd87HrX8Tus4y8V7NPNBPXjtQwH2ZX38nsTXkQgDgF6vgcMCEGBoPMc972PATL",
  "key20": "4Aj1YreuGw1y9wCSX7FudL6hsinzuXndQoMmbgLhL7tTa6ssGthehjmw9xZiN7wvynTi3YohaT9EDxJ7G6psNRm8",
  "key21": "5p2TjuEFfGXs5nMkMU5jqYUYkzpcgNsQVDAx9gU6NthmWZBkUEVLyDbjLPJ6AANbijhejc9qbH6gShRfiihS5f7x",
  "key22": "9P88p4WVT3ckyALq1QfXJBMbnUJM5bD15iF1jexGM8uftxuVr5MgMmaMgq2vJ4qsZwXiWgeVBgjRwrtt4ktyz3Y",
  "key23": "3g95NMCirGTcSicEGeDs8z3NogsT9Xh3ruHcJwkcXrosQ2Pp633t1r3CshinuBmDXpquYUrpigAJMY4dveHMtx3K",
  "key24": "4J9Uk6DG6KxEERs7MBcoqiXe1aeDhoG1QsNUtYJqiZukzRgfYndkEfdyyHQ4QR6DK3cJm3NXgz1okqAceHGXN72g",
  "key25": "2h75F4yehmWjuERv158Nu8yhBwYZ7Dn2CC5TnH9LzJx6Sfu6dWVUtd86qas4w18uzKuYuUUtfDYKtprXXU6ptgQf",
  "key26": "5ZE8s1UFC8sUw1sDb6iLE2cSEmXc5jcT39yfWb3meCUkJhdnc2ymccos2szoSkAgqfMvgTa33EDUQecP1NSk7ktj",
  "key27": "5qGPe6mRrC8WfeizX9gHJapmFnSEhzgDqWDmXnrbnN8birjMxrZkiwxjCGtG2Yw1t1kQ56yMjhMTD4g2hk2PAtAy",
  "key28": "2ELV94ASKHianc7VK1x776CSVbKpzJC9D6CHFbtXugZ1d6HpT8if9GRkJjrYhKLrr9XWJm3GtNqQVj7LSMoArs8S",
  "key29": "2N2ZG69MdVvHfnSsjvERBFEf4E7V5FfNXwLtbh3YBimDv8J946V8YtHoBZDHgyygWRPFfKgn5TdVa5kEUPLT9cod",
  "key30": "3jJBmcxNwGVgAJbvBvfSLNs5Zr4Du79Q5Ei8iNE9pgMcEEEqb8Nn8hB7RX1WbDZQMdoZm1RwMD4pdR35WZkUUUe4",
  "key31": "bjwf3DKoeFGYirpZD9PFPWTtckcm7MHN2EEPZTgsUiAyfKKrVeCp47awwBpWnPnvXM3ZWSZBkMgBvqLsArwpFnL",
  "key32": "2jn6PnAsjw8ES3biFsb8rPC6V4XfpiA9vpSqPCTEiPD2EVxg9NGy9eKxSjWKErXjSzaA56qKqTdYVDutdZgsH157",
  "key33": "TjpM9t3hDnnHxzoQze5bPDkoX1hXyJDHW4b9cEF62jb6mcmFJCnRtHQYVqNv24gcj3wdu5BzUBRwCfnXWvhHLtr",
  "key34": "ThnPt5Seus1f9ZGqVPJDZmhQDtVacGew9iwwnuJWYdKEEaZ7iFzK5B229ipvJhYywJt3atCpnS48jtLza8LBneP",
  "key35": "3qFE9rYt21nyQbkAuxZdPXiHydKCzMz2U2DFWq1u5jy69abZ6LGzQZtf77AjPLk7XpWbL7vGSdd5N8G4emFMm7LJ",
  "key36": "4PABXkDcbUueXGHWwxMEeQa66D1TGENhM9JvymUowbk272TqC1Tw9sYFLBF779rdogpAeK467FN83D8L3xxohugS",
  "key37": "2oVY44jUcFFfkohqcT7ypoUHJEu9a5sCPpcH4QnwbhboC7FKqGMGUQdDTEBLpsMeRoyAQCach8pmfYXFjx3Ayb6V",
  "key38": "Xbr2qFYMfEWRCBEKcHJ4aNEC1r4riJxqz28tib8FEfqjfWQ6Wc3nHRkxNJ5apJL7wjKiK3pngpZ7erftdUidDxN"
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
