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
    "AJeSWUv6YvA3AG6sVkFZ6YngYNRFoLArLdyfUJvqoGjUYAWBuT1nbjDg5aHGeeMPfN9u3H5mTHuiCWjDpzUBija"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xHFwFjtpf9JjKmHqQor4k199hymeovUiSTDL6DvD6dPTfBqhazKkrT4aa5ZCMCHsBPzqDUtokYeq8P6R7jybwq",
  "key1": "2vvowWkTQPbT2kgs784oK5sjAa3dwK4cSxj7FVfNifidJXfYBwZxPt5L4hApCCbBL3cymMYKWxDVbCjCkaRWFoi",
  "key2": "5ik4ma7CkxUiQUkTBcfzMJ5pyCLWrwiZVwPooT72dcgricKXbkezpTwjqJmejd7v8rm6Qaf4ReUVutStdAfmRhp8",
  "key3": "4t2iVMfcjnXWNWV4Te4RHBLYjMeRshzGQgmgesguqmwohpWiLPXXNfPPM1CgGgSVrYQqCEgEdNnrAauJNPjiqn3U",
  "key4": "8Zh2nC5VbdKXPnmwcxNGUSrBVbi89hGSRUnRo1zUCj2TabRkTe5W6kU7YJ4VTvJEZNWwz5ayUaLv1A9Tzy5kTpb",
  "key5": "JXa2yej4ha4ynJxz4TmciPhWzrcdRn6Lx5LMXoFe2Epx4dVWPi6eLqwQyskD9MuhpZibDXPBEsXSUHMnhoFn8w7",
  "key6": "3afgVRPBc8Uw9pJaREBpkcmoPejonTniMAunjrHofxZpmMun7GXFNzgYZFsw4nieJZojt4qpyWorjHPDKu5RYr4h",
  "key7": "3ikHfVHMV1Crdawg1v3A1bDpARfQ9HPDkSjAEkkZL7EamzivwdEMLR9Uqhxm1Gh6DgcLgHAdbmiA7ShqyQDsMYo1",
  "key8": "8rU4t9Li6UCxMQGdafUh6gb4CMdLw6TCGcKkC7ApvfKrBRA2RkWb14hAXrTtdeW7doDxETYoV1BC8hWLwLJ9E39",
  "key9": "2bn38Snz1jV4VBjmoxG8eTPjbJu8XgecEZdLeqbTP1StBePC2fhUZ1ieoEjRR5ytv34TvWvWdr3svLsdAw1BW9Rk",
  "key10": "2ZyGTyLfz2EqVD7kT1kGHU1m475qmR5QtYMnvBHGr6kBWDCsa99dpcjQocPVVKCp3ej1Lxox8Yr5dpNh193DbpCR",
  "key11": "3pxAoLDkwubUy5iNePtL9aW7TgXXsgiCkcPjFiUqW7mGw59fXKAzgYvLkwZmpwAK1xpdhFzcUzdN1MMLgwPtUTdo",
  "key12": "2aUhqPYaSRv1V2qmkaP48ZKcgfPeU4xF1qRnRX16rb49wKPuBQ6dd7f5WTWEoKGbn1skAfALbdhhPpx2ToM48DhG",
  "key13": "3vfpZ5byE2YhvhEfz6HpaVtnih7yxbjKFCrYCxrY1CNLPmR6pMzm4X2eXY2hdc72tgtKV61E6iovxC47Y65aksAs",
  "key14": "CPkm1PxxCNV6oZrfYQghD2f6CnFc9vCBhv6bXhuDWenAibFeXPqaCwansxK5esJBZwpm7V9SnStX8sqX444WM22",
  "key15": "4758RXBdQ1DtE9hxZV2RR6kNfUxABfSNe3N1PsPwoP3ReEsv5VwjDy3CXJPXkCbHfAW3tjMHBHZe1GzbzSx4zLTQ",
  "key16": "2EUeK3HuU6DLL4jAYQeNHFbUM6oehkYEKocMKVbrTJNDGdM7gKkKNeiKrknNDYe7MmgzEgNU3baWgxvf8YfVgk1Q",
  "key17": "2DXCLk5VChU8qDi1b2Fv4bhmirZ2QQMA3v8Q3zV79nuFxSDmVK5Fur3hxXsbpuyN4SAsLT4jqDX7gvdhgaGM6HSz",
  "key18": "57HvoKKsmGdarhNkihDKQwAARdCiPG8syqdSjUNmCj7FxnSffAeJK9RUvgUy7tMjtZA579iF5TiocMBuHmYGk2BQ",
  "key19": "3QoPdxreMd4gEwTAoo8isR4KrJCEVhiu5Svrfs1aqEQ9M461mw139jt5tomWoaRka2yfFaFcaFC1MMb3w9iBtcQd",
  "key20": "4jDykjEexsQ6noKpXPAqk4D1h5UzAcFZp1ernhYXsVvu9P8Nzc5eQ5JZFYg1S3oYPgAHEKSuvpmr5J5o5NM6s8tf",
  "key21": "27aKy1KkPtcydFH2DQoZxHw7BCbeRas1VodTUHvG4WxoLVqbFwL55Q9GpaU6TM7sgyJYMFR93uiMDYuNQxeEx18d",
  "key22": "2iMQx7E3xrdY3H9BLNScxdjcDXZwXLQRfYHBXLVZipWdKMtot1r3emCSfjkozDZNu22oURcTQhgRgTrZtUDwVJVm",
  "key23": "4Q9qcN8PWRZ8jHeDsXhHUqaurM7Bc3hZRk38P924k6smjDUM1gAsAqbuQBpBjAVCccyGERzxu2FAtLDdHnNFVwWQ",
  "key24": "2ciiVbsnbFmHdRZZo5AFkHePv5siNuVCQwDGBTmoZBDomye89qECu8cMRz7phPU9vMR6nNv6bUXf3NHzFYihuKcR",
  "key25": "ZUBUGFL3FFDJxqFbLB4QR4aY86vhSS5TNxguLTv6vxHCCLtSDNmnVAbAmdrvPQKtdNrX4MXeVtsW5JbYxWyHAbh",
  "key26": "4KQzzAMEDm3ZBKD6nvveEoUqF9EquN6NgjmjEbh2kYXx2DDqNRsscZ1b3WFDXkFbLEwFJ87GpNzk7v6HCi7iM1m4",
  "key27": "5ezo2mgvFQqFEuUwbxXWeRNYM62jvjrk5mQYaksAjdv44qUndhjhh1SmdF2TUsJNy2fJ3o3F8T147jH66cxSpZvC"
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
