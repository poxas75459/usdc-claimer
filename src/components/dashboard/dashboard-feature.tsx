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
    "56cjP8DbiQbr2Jbf6pHYVr5ioi8eD3CfvagQYcqiPnRqBvvscKwnLxVFGm7FFyN4vGSjxRs2hZ2mBXc65u3CeA4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnbPYEYgsFS9fNDGvqFnuZGHb5mBoka3tJ7QQDkroTSSt62LtcpPmuUxJALEtWP2m8AY85WPyYVFFFwU2CAy7yY",
  "key1": "3skGQaTVY6fVeWnGyPubLiY1GRVQBi1TmiKRJVL1RieGg3ZNeo5SJ8xRbULskHGF5ZqEZhB3eH3Z1Mjot22E21z4",
  "key2": "2JJXxCoBpYuo4386m5vV1SxKssuw9qJ7b8tpi1pjEmoFfkGJ9HiHN18d3HsnueKwPDWZeULYp5WX1PDzy2S2wMxp",
  "key3": "3EGH6X1c9d7K3cDdvJ8fSG3JYWiG8Hdeoy1PtVEScYTxnB26WfgoJBfCXqQBquw6RjPhqWqScmwgUkScwZ56yKn1",
  "key4": "3mExErH9nw4dxgHu7Vj1hWJWRAj8w99qTAYpnK436MHJntqN8EPrs9n8Jr31i1PNzniFuQ5d2tKewC6RkgYxFgRm",
  "key5": "5R3VLz2bpmT7CtMS88ENNVc64h2BAYRZHHdR16PKnaAfs2myTbYDbSUhJWgKK31KVM82r3FGhNJquYhK698eTbQk",
  "key6": "9RofTo3LAMXqxnSy3j2nxjmDzUAXmm31b8gVQYhRPW2Y84Qu7sfuwB6d5kGW3WMqLxGdaLEPUXcoiirV95KN5M6",
  "key7": "2eMgtZvjnNHQ7peanxM2GdN81zAvFxN8XmkGHAmTx2xLXfHPZvvCDccHpS1JFA99rKgL3YVET5PwjWJXPv96Lq22",
  "key8": "4WvY2sSCoBDqauaY4wUdntYmgHEr8MLQGQCZ938PqGoGXwcWHRk5qvHXSCt5qDd8cpRxqm7wbrKxZbsXbM1ULAB9",
  "key9": "2og9JDKzByJbifiy71o5bp8hvTDKZy3yFJsdcUnRYVfHk6qWtRLp2RkLvKRMTkPbJa9MKYsdoe2Bcxdksn7cJHX7",
  "key10": "2Xq7pAQ9CiYNA2BBF6MGxGQgzHxahxBdzoVBGJMUnD4acC6wRtHVcn3xs2pt9zuio5bz5pVHGhVbQp5X7GcT9vdi",
  "key11": "YHZCEizKs1ntqgiCW2tz5b2cLQUQA81BMH5kFdBf1qbvTYiyuoe2dAbmUiAQ9WVPFVhmrz3b9euWYD6LNRnuKpP",
  "key12": "ErQAkgjfAidhcJexKvftwjBrS7LsGL43JVirkDe5ECF2GKE6ztdhziRAD7yznjSDR2xtuoEeCRLjjqP7QR6E3yi",
  "key13": "3wgSNpYS1KRU7iseVuYm7wiqquqDDvQ5LTYrv9B5NkzNeoTq6aRtpAdKCCBCpcSY9JCZGjuzDexLkRd98x4h5gA",
  "key14": "6hbjnV3n5NKpfDn4LH5x5nAKaPwoC7AwDxdchHRCC845doTvaWtDjf3RapLXCcxVqcMmVwnVTi6qrE5tv7okoNn",
  "key15": "2ohinoTJ4KysVSLJwJbLrrSjywEtbH1LGKZ1SDhN3xWFUqNzBnyyyR17LFq2rnwpwRhccG1p1axqDs6oD7uhsKk5",
  "key16": "48q9PsWBzjtgKRBrmdu6yoWAdjtU5uEUeDusV1gtea1SibqkFmdkdKEEMg8ebHero7u4dZR2gyYqcUVXa7Ku7C8f",
  "key17": "5CnycxJHdwqK8CmkDqMuPUPmkj7h25EhiLDuLXjavbsC71oamftvn64Eo6oHGvyrfZcm2fUS246mh6JuMrkMsq9f",
  "key18": "5ZFWKYUQo47pmXoJmZoEBiMMT1NgwfSLYjd5XK4NJxV8mLRuMbaQ9mhtaS1JPhYJiCVPRDRZB8CRKp7CR5qZbmXf",
  "key19": "3aoco3CmbzjDYLGAWHznoGgRcRkJYsqD552x2t4znhCYa4gGWCZsnUpoP4TJyh9UPSXZVdC2Bs9YQDoayobyCwiC",
  "key20": "4MUum7cdMN2cCWGUC82xKMop1CGTujzsjZ7bM6cNDPFTcv42SXRTPi6cqxDMjEM7wY3mGrofjxRdKGS6BA2yvm95",
  "key21": "8QLmwqbhhQymmq77EBRWfnw4Wv9EhspAcB9suo1cP1mVoyXZ9VX7fHtgFFEnRRDLXBVMwMCjht7L4nt4VYMcoi9",
  "key22": "4pQnALjQKPrRV9yN76MJN3cAqUBUz2wVVjK34mQUWm1g56rBSSsVtDTkDtKinRvtirE8mzJ6DMQWSc6nD6iXkhH",
  "key23": "2j6SMZ7SkAAHtakoS3kEkR9SNYeCcwxAJ2CupTNh2iV71KEscetfKiuVV9oosiUSwRGS74its374udvLGJRJyoT1",
  "key24": "24s1NkxKMPh6ndCDYrugCJASUNnXT6CTadEppHw1Rv1jpj2NVrRUFLDvheoVvNrKzTBP864dUiYdvR3mZJMTEX5c",
  "key25": "4M2YvqsFrg5oAF39HGuzh44iLUVmaNzYKfr8EUTMYZd4uqHxqEhCuakuairHDWpbhmATacsqoQAZgGVtskAroJ6U",
  "key26": "8NEHbXSBzGkSkGvy1bu93kFXmtidVxrLUWKv8krijJihfLs7WA6VTqvWtZmUPaar2pCmFkN9L82Q1iKhpeQFnUC",
  "key27": "5XMwieerZXSC3p4NeVA4jUdHF1BMRVExzjsLdgNZgq2qeUyczZKVJa9Uo9iHpaK6uu685Nye4ig1tW5Uk88GFrkD"
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
