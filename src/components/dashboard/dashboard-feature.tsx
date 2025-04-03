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
    "42kXMUhTDeLQP5yhjVJN1VesEaUY7qdtSQrsznFWFmJroBRBmaurPfMFVBgeHBwe8NncGJJmtqEfw3hAxUfUxJjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QXznU7KRjtHR2PSy5UzzSQcwFhZMm68a43qLXYXnDCWnGC9y243YXt9uYmPzwVQqdPaDu16qp7Gw6qFuABjyhN",
  "key1": "4ZBinvVA4RKJeo2ggKwcqhKpZAZkCtpRybkGesiskq2ejuxFd6uMGaX7kf9prwNsERQXVxkWfFBP4SZR43rpng1G",
  "key2": "61q1BhkUkfRNjSXnXim6hD98mY1Fy3XMHWxfNe8kzxc6fkN1PfduXCuf7vA8SZ7XM3JwAui7qpSxP9ishBfSxbje",
  "key3": "4jmBCkWTodX143kP4FzkFTWCHCQuZH149L249ZWsazV89fCCJVfoziMgkNJWAU32TQm3Nvyr8WbJ1MszUBDC1ZFg",
  "key4": "3GVcMvXQ6HZkmxAfGS9Cms132HBn4noMBDaXievjgZGbFuP97zXwDsrcRyHsjVBfzd5iJXpDPR5jz5MAKsP7Hxj4",
  "key5": "3UH4r73vLdapRPYkU267AXpUWqJiSYiw2CyEjGDqNEyfc5KXT92N1eF9zaGfnR3h7LdkNnft4n3FtCQpGfEDUYXQ",
  "key6": "3xULYDup3djfYA5yMUjPTXv5N2VNbLao1k2dW2fkUGAXj36RFgG7eDYyvHbDMp3uHrPaUVZr2X611Kjk5b2ikRAb",
  "key7": "3m7kFJbH6ZkhDyAhxXPBYqKSiFbMmsRorbANLyQvk69sbUDxnv3fvX8WcQWJohGABVwW2WqBEVttPXwTTTz1HwGq",
  "key8": "4BA5D6V5WXbdCXZby8Gbx8hJS5WyLYQiJ1obFvVsGiAA5X1y987TkYbixakZLNnNehWLeEQMtUkUx7qn1UtBJ6Z2",
  "key9": "2pSSR3hFm4sgqDQ5cHZ7GH7gXAfzredJTNKCvhXUWzc99fPFxyveB83kTTvAq7BaDxhxd7TDUeHz3u3BEzat5CPW",
  "key10": "65Fq9pbh2kw3ddZXTKbGErZskAoMyHvqA5UWjLzVne3L6HmKPqziNTGqBAai4p2GjfM5ziwLY7tkMyX8WrqhvXB7",
  "key11": "3SoqttdbKH6CPqa9SF1cThRApBsJXe6h7nA3VnSUmWB1Dq91uXQ6vSDXrLiCQDTPLqWaDc3kZssCmUgkiz6AhK9z",
  "key12": "2JNkuiVtfByZkuK9Qt9WSCN1Nfhcsjt4XGfMcZwa2Jgz1XZYWnnoFsD1QRJRVHSLNunYuEWsjxomFnUU86GJYFBZ",
  "key13": "wogZELe2RrvmJ66PSbEvAY9fR1muRud3dcojoB8zaLjz17Cpbgfio3UgdQZm9iccgQqoCmPE6BXoHrXUpja94qS",
  "key14": "4nCzMgxDxuZtgaut1P5HDd7zNegS9ntNrVm7f52GhDvx6sTCZkZvdo3gPVwL1dbaMeNk9kjtDiGyvLJzAq968KJb",
  "key15": "4LCA6rwSyxQdBMTurLaV3ssExVk8fuBariZowg7gde7gdLzfTRBi33GfExCmnQMe4MXdzZqMrdRJtC3UvDfxWWvZ",
  "key16": "2o4fULJwYYEx3DTHNaWLtJ8RCzygneNPcPdkntDNPTsRtx2Gc8QBePGFq7VWYi3Vc7DF7R54sk4yMmYtjHS5rUjF",
  "key17": "4AditCPafV8paNtzoRbTvReFjTrbXsbgZXopwMFXwS3UABBeNtGrEkwU7f2b3ZuqGaTQwGorh5YvaSxrZdXoEKV2",
  "key18": "3wT5mRbLvieTkyVPSqwJw1dNcCxD8puW34xRrQweLZ1fRvdnMfsXkimUxJQPNfmCCiSupAsjWdvsAx5K8LRBYLjY",
  "key19": "3FKZ6dVjsD125shAE7mQ9iicSUXjSdUxHkSbPCe4BaKY1FcW24RhXS7uPjht4dhDTuhHqCXAxnAL4MFi2N3fXqLU",
  "key20": "2wKMgCvezoakY8Jv6QQ4m83ACx8GMqKFAhNgLdD916UcM3Z7SqES9trbnrXLZ6PcWwwXVii4ZGEojtGbbhAKg9Lt",
  "key21": "vdQx2ZXfig9VAG2XpVB7CKBsvb2iFycz8AZikoXZS4yRgV7SMByrnWMsA4iHH8uBNcvhhNsPiZr3kygHZ4BVGir",
  "key22": "2cCVAUTy4o4iJpni7PavyKTg25ndk1UYtCRQC9hsEmFVeLKHF9x56BYQc5M1oPaDbYQ5J9Q7oPm9VXyEtzrsMvWt",
  "key23": "4bi6w4MJi74R7DougfPXophYiD9v8tNmavXPxdBxMtw2TfZ13mbu8WtuQ1LY5xA9246d9jGAvpkHLp5xJDnKJ1uA",
  "key24": "3buh7mri8LWVSHqQsH3cr15i3YKL3LjxRxmF2rPn9DMQHBxxTX6UpNw1tayavPtqVdwBjYwfTYyDtpUz59KvTH3Z",
  "key25": "4oEhf3Q5Aiw8nmcDsW2MecAYwMnN3hWmLEiK7UvViHiZYBfMgBbuKdqrnTW4UyB3jCKzs6WfdHDdT44nb7MLp512",
  "key26": "5LvyZ7YSAPbDKgJ3vCbGk4wjRqhLaXnviL7DWsvX365b9niCKP2SxNkZyGLK5oo7HEWnFkRyoJ2P9vMANGmtwn8F",
  "key27": "3VeV16TPW7vtDXjboY2eW41wPF8fkrnaqoJeXmH3JLXbXTgJhC6vCuPbmCKh9tMTG3xVo9XEm2QG8d1dhKxMceu8",
  "key28": "C3TUpodFDwrgSMPAGLAoaSsZQkXUPB2QnCx8F3m8uXcD5QeSDLi9rDdNKcvVYrmMSvjnnJsTAnsbPe4JsbFR1nE",
  "key29": "51VkeTWGigwUfqnZvqGxhgQ212uPAVXabTAiFu6UyzQaXMfE1SkbQiCzuLm2QzzY1HG4m7nrAocq5xoYe3pL3o1x",
  "key30": "4CHi4suKH4oShXAD55oMdbksgorT8RvAV29QL2Ny2gebafkGfH75rxd8imrsW2u4n6RMwrZ212zGgvQppsfM6TFX",
  "key31": "2e5i9F9KVrxpMkcMXPXmb4DsW19UreuHEWhL6XmpgFA5v8Wt3ytCjfJ12WvcKbXxEiaNHRxT8unn4y3goRcQfyzp"
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
