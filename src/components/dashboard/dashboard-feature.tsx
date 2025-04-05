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
    "5q6Zzdy2nRjCWjaAA9xuH4ERiRo2xNQut21Vg3bvrLUTngTyvqFMKFh64kF2qDEH7dxRXeNqVp8XEHJKEHiejugb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLDpoDDQGJAybVZt2vzxrErXkSAUVtZNoyZ8ZWKo6J59bUJN1GshRF1v3aqAArwb9trzSq32kBCSHHL4g21ThdK",
  "key1": "45WKcWDhFWr32yhUVoFUxiqrYU6e9wfnpcQ7PjfgGqSCSmS3oLFy2fqmJSh7okYirmELtyaWRSGehUY1V8vkj5v9",
  "key2": "3cLtrXg2rgiZfvVSyy2F7tMZahNLcx8QfyGag1FktoeznuZ4TDzbtHCcgit8YGQgLP1RK2QWeKRm1Q2cNTktze6F",
  "key3": "2eBZeiBRq8XtEWw5222riDE1M8N2NhJCrGLrST76f1UGFDS3mPi5VEfL6v5ACL4gfjWYeNUisoSwsf8ZuLom8y5i",
  "key4": "3TVJZwzNhhnUqjR3XgdwVijmoq926ZTrVrtxBxwssVGJJrRNPdJrPpfshKba3TnvyA7eDcyZViwbWAUHc8Jj3uCq",
  "key5": "4ozKAB8sBbeGmFsYaTCZYccYx1Xb8kC25eAJaSnXePyMxFbZRHyTRcfSzTTKzg4paewM5iWHaCLWQ6cD3nRdtpUN",
  "key6": "3HbHK2RXbGpMr9SuVTsvdxwhhs55MweHkqGPsSQnwnVtKaLYjkDutoMYoKteqsQdBrGfHu4WYfGenhP1gztHmd8Z",
  "key7": "LEPnY2bFuc6g9UkVAoyzLgTftANBAPjXiBfxE3XoUoqz329ZAgV4PGPErtNeGsSYBe8HaeiApmSftTdmui2bzfn",
  "key8": "2dGBN9K7Com6VSCsBUcFPDNfW3AT1oTo8xwmqSVW3wcZsLPHz1AN6Kv1c98nUsFicN94RDssUpZmhX8fuuyAC3yF",
  "key9": "5c6nUktBeosMB4vmYoSbcKY6nfDwkNC9VKYfCHaf833nzKkbUyUGVfT2RqbQpzAW17iq5fanbUj6kmyeWngcYtdW",
  "key10": "4iQnnQwmpMLE6P6qKCAki1hAaxJFsw9MS7Ca9HLDVSeqQDGE7AnkJB8sGRvmZVRwp2HupiPC1QUa4NaygTkA2YRH",
  "key11": "5e8XnGwE71gVk2d6URENdfzNpLcJna3tqTHvJbWFTnXFwmmhGkdzDs81sm1Qqch5nvCX9y4dcuTH3cho65TpQqqs",
  "key12": "41gZJwgNA2kjb9i8iC66cjNa3Mar9rk38PWBsD2L44gGhLuMT2MXgtHL39QjhuYHCug1JGRdNprNqd6yJe8rnaKk",
  "key13": "5RKLheXJSZLGnecWKtdsQxGQgVqsdK15WqcjvbW7JPi7XGqQ8QHyG4fmtS7t2bjBojVbGspoqjvHM7ELABLEQBWk",
  "key14": "3Wi6iNALKFbYB6j6y5WpXWLX3pi5g9sSfnjHDbfYW6NDrE83X9xUjNzNNeyRFhaNJ628YQkSoLGLFtqAp7MGVNrW",
  "key15": "aMn1MozXpiEyRPRTJeShvednJ6TLqNRaumun491sNUnpRpQCTaQPky5VpM9a5e17b2jtwoUXmyLHv9JUL4GTuh3",
  "key16": "2a9zpgGFQz9FRksHRiLiNT7t2qeDmXcQ2TzprYsjHzJmp8GQ12WVrpkde3s9XpCCprQ4wK3jeR7RyexBchnujxVw",
  "key17": "5WvoPYfH2brt8rirXWun6GcDwQgg7TUrGAuekj3WVovSoMywnoKeschsNxBieXN9hPF3ZiNCUr6p2MLVpiikoAKm",
  "key18": "2EM39ZRLeoNKZUD7rpNfx19U3EyCDC8YtNcXgFZNkgEp1AsUooHQmM9aq4X8oZC7qpra4xkhkt15Pfbq3kdZ9nB9",
  "key19": "5WqxzaPdArLqg5WprbJwdq1ACLub992UNFSmn1qotT8menYtavAVhp5EYg2w9DmpxwyxfZikjZsHDQpHHpgNi8Ad",
  "key20": "M1FK5kYvFdvxw5KkPfbQLTeXyXbd7LkwNMUM39oPGin3F15ZGjEbS6nJFsrknng6kbHr7trof2GAjabxFdYYS36",
  "key21": "28WYPQ2FVgyuCHGukHebiwDo7cuYRSzumzq5FaLzUX1FLkCzbiaykxnLYJMaXf6XykMnMmgjFMccnjtpMjJpa7D2",
  "key22": "2V699nSD2diSNcT6GfMjibcb8QAREsJDbbP792ywTpJcU7wGAHcmKDARPaRzKSjWUxr2epjdy8GkEan2UkVXDsAw",
  "key23": "4tMtidLmnNJfeB1FZvoUd55mB6DMHAKpNqmcrBgdMgMioREKQQ6T7x137UtNDXnxBsJTDEcPKRvsd4C5PcBt18FP",
  "key24": "3Eazxj8Cv1HPJTs4svpEswWyH5hfnTwEsdgRd9QCq5J5bGtgRSoBiSoBTFoc9BPStiiaGQhP4ZLkeYqUTJoJNUma",
  "key25": "3fZH1gzmKbwX6cpv3SyqAUVf9Y4X5Mx9Jf5jMAgDGJWJ8kZJFVmVBjMQPuJRMLFgdKv5x96YzqjPAy8SRszHR3m4",
  "key26": "Mvy2woTkM6fZdehw3vnEkcVAYGr7JNBzadeZJGwikVPutDibTsiTXtK1f82Uc783hDL8TzY8W1KQ8M6tAwzhRDg"
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
