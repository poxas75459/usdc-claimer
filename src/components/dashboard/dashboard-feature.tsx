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
    "59anKeDQrp3yZSAXjLhQXmPY6MwxjzXgdu7iNjwnxifvotvewzsQvAA6PrN2sRoPo8JCPzf2hM4zPi88v1JLdmXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xSfrLYvpdbpiyUa6ct9RdUF87xCzD362UTu5BVwoca3UbWWuS4QWVPnwKjfukZVpJ6SxuoXqnFZ45uzFa461c8T",
  "key1": "3iWaPaPT92Dvn9H97LQsaRdMSbchBr6y4rj6CQfZNfTdXb4mcQ7kyaSiwu48UEP8kyBseng7wgxUWAnfGDUjZ21N",
  "key2": "4ehKhF7jD21VuBFTBidDDPqTEL2hkYRj8CRu1zwYaCUQ1edF7L7syGB5Ws5ffzeDJPHqTC61WMn2mTRrB9uTHK6h",
  "key3": "43RNLqHQznjoQPeudoBzho5N25EGPj9sf5esLTaaBYA1sqsoz8kSwEBMBT82hyCiV4Rb4JxZJiyrVQDSUsugDam5",
  "key4": "2L1tj7iatVpcqozw3PWDBcsxx8U9u4DNY3iCdZZXfohuKwWGbyQfvKSVE9cnANmpqWWbBAAGbPe9qcjuW6ZQ62cU",
  "key5": "45b6gaxCByf6NeqiEt79QCtCfyYscHk35NhVNUe8Dk29q1rjhKy87KJx7rBSELbuLHW1GZTrGhqCqbTXTUtKW8AC",
  "key6": "5sjvxtdKbJPz6X32DjAZNDPubQMi4zNPzp4MyPAHAvUQf7k7A4bEF1jLbEN38qxDWK2PR3SpcEczbwGoLwXFKniB",
  "key7": "5yhU7ooGNsy3kfii3gkz85B5j5eDqZ8KNb3ifkLT8GKbsuRnKdAuv6R29rC2FsNEvWKXbsTA4UkN8gGLV6NjV9cq",
  "key8": "2vTbxj43ci7W8Zwo4qDvKr3VFUVDgirt6Qr3Rteqwfni9o3haVpkCAR91BxzMLon1w82KmVt2LtXiYd9Pk5q8GXK",
  "key9": "5L5NMcKc6pQN8nzU5NRj1Qe3H7ZGuMvgLZPY9f2LtwnSuyw7er9iPLt7TQWDjXXip9VFZzrjX7EqBXaDuk6tciKU",
  "key10": "3nCYdn2wSU7kzuys5vcqNBJNiXY1AFSb2Y1daATBLUGyzNtYpkizEnHUFswJupR3twwyxKqp7W8EgBhryYarFpkR",
  "key11": "ijG1JnsjrYvN5SJfCmUuPVgJsAqrfFjBk8TeiG8Aoay9VxftijTidbiU5GpkN9U4TSCRGPQaJ47i1j1sqgDjjJ5",
  "key12": "5R7xwp2kbzHRG7cQPMEsrskY73LzTav5bkN83NMQGcAHYCxbaeBUnZFtGSc7vvccQ7k1iMjndcDXLy28GY8ohppQ",
  "key13": "SkmQ39xAreK2TGrVeskdGRgbmnBWYMDAbNUj9HQbfjDJAWsGWXGiniTkhZzA54JX5YkfhFgea311sp2phMt7oxX",
  "key14": "gzzpmNcxvENsqhssRU7UT2LJoVPKZwBwhxcFMmVoTxoLVdCT6h9FE61U9fYsoWGJacn6J3zwK6k8iETEuxdGKbr",
  "key15": "3vcCeQtaJ3i6kbV93cDUWczeATqjErjjUpNsBLjkuGSVTc1Fak2JWVkqGq853Sv1kPWi1edyHgHH61g4JbGK852X",
  "key16": "4pbNPL3NdSAqLeQrCEu6e3wdHjEsyzHhGRnBrgnqUVAn2Sn8pEQaQA4tB8oCnmDVHWFueFRB4e5c8go9D4D7Kvqi",
  "key17": "3ma3KKEK7H7FjFSa3TE4aa6kKqkqqg3iG93ZP3wkvmqbVrTZhtqMPqCPfs81NFhZVhJMwsMqTACx9mxuBGAQhEcd",
  "key18": "2n6bqhMAQVFUPmRdiURQW51vETsDwMMYcvM3vg4F6jyba3jygxHKLTV7oa3ZGJrCxemd6qpUF4jJfgHzcVssEf9S",
  "key19": "31abhjg7985iiCvDe637BMAjorcqMxCN5A5CvYMTATSjoQthuu3vYzHNgzBTbbX4hXXL1JzgW52Z2MmFmbeHC4Dq",
  "key20": "5h7AsNiHMGX3J1VcCwGtrADthWFa53Wd5pL8tgGVrmiHurgYxahMUB1Yt2cGU7MYXqPCVqVShBJVNYzeoT6WJW1k",
  "key21": "2EYXeD9e9C4UCSTDspQwmgHafJivR146Ba3189bVi4DNQsy3EdD9D9C4isjpL3Lns91Psr1SvJ7ToKLrjLwgmGus",
  "key22": "5kSmiEYXaDFFF5pCnCGbRZReYDPyFizy8hnyoGH7JjbCvPyfQ8NCcJyFRSRXXsum5CWsZ9TnaKVE4xgrgMj27kS8",
  "key23": "dBc7GCJyrTuiZv1z9c73iJpC2hrro3haWnBv3adXXBYTSdZKf2BUxaVqQ4bdW2AFpkj9SXSjX1YGbKJWxVcigvB",
  "key24": "5GCHMXtFufrsuM9gkqj4oz56dCMex7jHGLpmLaF6DRKryXb3MmUuppZJ1HMd6vgLBDwf2avo7feKpwxkahFfHvzA",
  "key25": "183cozj1dnGPNMhYMTArNstNPFvSwjbo4VrZCtpmeiUYDkg6w5Hot6m7SDdf7nEksf9XHvH1og5GLupbaMFqWZb",
  "key26": "5epTLEYajNAZwfkaQTXpP2G8u8r3a84PtfBiZ2etAY73os3Vjh6NfVss2yQ7ptsnkX2Su7F3Fc6w5e7NXhK8wzvr",
  "key27": "2QHKejXg2By1zYsgbHB7HpjDeC3rLfizqc2aU1X3PDNPYDjeKBeQ1zXsss5NQJT5ptRVwW3wkawBBWXmnCzTmex6"
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
