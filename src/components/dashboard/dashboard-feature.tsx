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
    "2BzoiTXAKFysGvnZAHCgVut6PaQsaijRLMy29Hhs94y1gobfXp9nnsg2GPgBmX6E5DkNUcAa9jvADWGHfusXZQi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7gKsmVX5Hggv9mXsanQeDcCrccGhQB3BRLLbNodYAz6PXrv5go39kzYPWhSgpwrKNNqFzSnWF9Mfzz3XoRGdVy",
  "key1": "3r3nfFXvePK34KN4kRKqFh7SLxDiHBgcHsfBr6NQuqqhxagGgSA6XMkgM7EfET2noWFP5EPiGWVTPgUrcL4cWXqf",
  "key2": "2rGKEZatVdcV11gNnzExux88LxiwP43qVxB6XavMQ6XXeJqJ3ZjWW7NJv2moTg1S2kPMzKD8uv19iyM482s7h1E5",
  "key3": "386BAbbCBH2TuvGqmE255bidk32EQna2XLJ8j1QLegxu3yXeZEQZe24z2VAnRZEM7TWqk6un3ec4BZH8nBcbQVPw",
  "key4": "xc6KWZ8BdHuX2aBZK55Yn2mKPg1S6faVhvx7Sa1Kf7fxv11PuRa4mRE96kVcEJqkdV26QUqwjPcJpqMM3c8dhrM",
  "key5": "5kxu9BuzzmtxwR5nFCS964ippiAA9jjQ3NfLV5XEUFRzr2DLL5ngzfdtJpxrESGvhyHDpxRSNv1623sTkw6ukn93",
  "key6": "44msmW16xxWjVcTake8Fh7jgeHx9qUB9t1zsHXiQU215S82sjLGjjPKfGLp8pZ5JaSVhdUt46YdfqWeNWKPTPUCW",
  "key7": "23SkF9xtWy2iKX8exsT3RzXWs1EDgeDWijwrTveXPQWBHUrGyBZCaD9nCNuDA29jVxv5nz4jpQdAJHGoWzG8YYBq",
  "key8": "miZhmsQRP3ygWKxUErC3PumS4hDus95FsuMG1P23FgPXquU9tViS3PVc6BsykUq2JuqC4XhgxiXFbfgSMS46VHY",
  "key9": "54f2PqwHkjiZUWwXqiHXAmJtLapR5RvuodDH355aXPTuMMkynagZm2wNPyPWvfzz1ykFfQh5X4BAtquKfGE2jm8V",
  "key10": "9WWfxcRMLmwAnUC7JAUTrusrx1HE2fMButLYm1Jzctd9Pbq95Hs8ExB46KfHsqNpLyCWAhQtCsmBikw3Aw3GvzN",
  "key11": "31vCAvW1TwKmUBnBNDQdqZVg645c3MnpWZ85ANVrdSMa7DdUSrU3yUJp7QGyZpWs9NQPsHK1Y3DSyLHTkmNkHApu",
  "key12": "24M5RkPvHQbr5eXgE2diercwxirGKcFTXkpEcvogNiptcdUi8KaQMKyC7HueSysqJa3pDvcWiazLx8xJNiT421vP",
  "key13": "4Ek9uhKarSqYmEhPbqTQs3tbEkEP9Ty3wc8GbsH3pX2fZqK2kBsre7zCUqqCEG9vg2CBENmHWLbQm9Ek9uVPUw3H",
  "key14": "3vLUKvY5H4nhrQpSuLmkV6U86xuQ2Ut5GZoJyHiBqySh7pTDf4Cj4HdUHuzamEE2n37dumTJjJhn4E66HGy7m47q",
  "key15": "5AeVETo7U2mMvSZ5wDg6PSJJb1k16gy96tJVX2m5nqHwTd2E3CTaeRSZYnywr51jTxjmPYtVhaodWuodKYtXTbqX",
  "key16": "oABRReKZGDYSUgTE5fT4waAZpPitYjFSX8agtwLm15QBpHCqTUkRpvSiPx2nLB12uAWvwWzoBqmntxP1e8gsKaM",
  "key17": "5qL1s5Z4zLJ6BZFWRtfysTNHhPvb7j7GeehBWH6jSMHxefEr4az6U7wJR4M3ENySEkCEPJKrd2QTg2LFoUQJfzuK",
  "key18": "64dX8sW4HvqDfFW6umMjD8C68eaRoTbBt28GhMqjP57ofj9aKxSDEenQYStD6h7iK4AMhNdMEtnzda2xJs4f9xLe",
  "key19": "4cXqivB7oS5FrqTsLDdEzLjfZUj3hhi2LLEWK1h8PbfkvRnQEKrmShbqueWTESFrgJpKeVLgATTauPui6YJ8Y8R7",
  "key20": "1noi1AkVC3WuvndxYWUqam8KmMkHtQFoU2Q5mkYTqr5LSDERy6d3bTwkKbduoRMheoeKkwbQdBjwmRvtVbXXbUp",
  "key21": "3EXa5k1pgWWERBzpd6gZBiyni23G4H1HHHtncoVs2BHDnh3HvivgKcZPAXaEhWYXmZFZ5Z1sKsse1EiNLF1M6YZt",
  "key22": "9gAPW2G14riybUJnwBHFgBu6sMEkoUa7B86CZ3Kq5cQJRo3Tpz9Djem6SGXuswPAzJSy5SNH982zkK1f1fjUAek",
  "key23": "5fkcnTtzPxoyadnQfKXmYz7kCaC5vks13PnRR2VEuSbbX8AgyTyyGMMv7StgPTXj6BUiQgpTto2GfaafWX2nNXAJ",
  "key24": "2sg9ddtTez1vU9PrpsLUWU1UApFJTLopqLwEsRP7gasuranm8PpxShEWU2nA29wm5Bjh9tQHgBK86Mg85pwyokUo",
  "key25": "38terGjZAs4BxoHeRBk3UnfwWXyu6t9pRC2zBHSueLNNCj9H7k8Zh8BzJGCMAextvbxAB4yhyYiP624k3Jg6G46F",
  "key26": "KXmqAUfV6LUceHbPBWKVHQTbM5sNQrMDQPUvMLRWyYSABPE3uBkFu2GBAaqFnTHjUa3gVfMVQkJDRAxdMEPzKVE",
  "key27": "pDigxEhuoHBWCWHfqcMEM6cwDvekduZGKsjgWLccwpCoAUA7SwnejZXnCQyx54WruM1Mw7aFj4p4ipCGNkEQ6fb",
  "key28": "3wpod9EhQC3K3CKEuYDDtdtUqxL6u8gsKTDVY1oNBqbqiNEpgaDqQpEESGnvB1d9BbW7FbFvtVctmqnNU9FWpkJq",
  "key29": "4RVeUDhJPPgJFkfkWEhYvMuurD5PYM7JVWHs8WKZLBSBtrJRFJJ26DE511jFAjtDkjfHdT2qe6amkYPEXrJNUrDo",
  "key30": "3ZGNJ5sBWFG1iNowXNfSYRoK7USGtLQeTJjfKHEczmndwHNmzaisBkrJ3KW9oNDerMo8RUv8n8NsEi3gKQVMhqte",
  "key31": "3YMmMnJcYw4qkifBJHbJPKEPvvggVkVegy3Bi3ZTi8oja33uaz6dj7tgxQTNzkuz7usWY4AqZn4s8YQQeRQpkue4",
  "key32": "gqRXj2ibCPK8aXxmRNPEZHGPtzxDj3zuQ5tepQqiULL5jUvUhUFdxsgNFxWSzNHp4ibK5rPaVsHcVoEbi9jYuAz",
  "key33": "nYKLkyasJEzRPHx4zegMHUUchzQMLqPMXRgEnxibyB6m6DDuAE8X1djv3kgMCWhQeWkWV47ST4gXYVHX2QAMKbg",
  "key34": "2HsMjNY92Ytw5hWsoWg4S1Zo5w8DZ6qEkjbVJthXDtk9QiJbrArpZaDuy9LEnq4WMWwM9rw1yY9fibxRfE3QGAtU",
  "key35": "o8N7nGWq7AxjPtyJLxZtfoxgeNL46qRGA2S4aJ3aKohrUews4op9RgG6uMA7L6mAQD5YVhQepeWpJTPpCaaf9DT",
  "key36": "4pu8A5gNLEaJ5JPqsP6Hn8QjAgtRWJQdwNb3xSPmQTgemth4xE7bDV2z1GKsSJmkynoY4L4ShgRhP4gvqAKM5CXR",
  "key37": "2YLwA8QB4eERbUFMWpmjaNfzDYBKASTcscos1RWeeNrrUDw6AvRWkysJcyHMiSzuPdD8vzHVxpU5gCrDu9R75gih",
  "key38": "5APHVYGY6ws9KDSbQZjQ44tQZSiJa7XLFcQihD9SrBuqj4LzBG6zPzeP4aVaDpSaeWPqW4nWGUrsh3bAmnoHv5tn"
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
