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
    "rvvkYwbE7ijtGWQ93jCYX6hw5ZDw3Jmk1TYb3YkaymoXowbNLn4JUuVpP6VhGdSDpkETxKEyoDoENwh9d4z4UqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6JwybashfqubEikxFYAqBdMTSRnbniwyXSZTRt3UC9byLoY26thYzk8MPyQ8vLHPPFXMfgtDGamPjxGrY8kgpK",
  "key1": "2bbC6eoA88WidUQ4SKnsJdZgYcFQxZ7q6VCufNP5RudYGPQUdjczxr2TiM3T9Mf3kQQ1n66U3LkyvN8PNtvAaRpV",
  "key2": "5nXtg4cCGk6Beq4SUU2bDzwBSdv48Mh3nTsZQwnhqrtwuj7vxeBp7DqnXFjsjqAw32XzCBuxGUb9ewbFvgNu3BF",
  "key3": "WnmNnTVYwhvd2VqwtDeBxpUtXk9DPDwBmGSairK83DSr4238rGbR1RckjUe6XkoQRFFFFeQLZdAbFwLUHutxrww",
  "key4": "3UCWWimPp5FFRvZPduKRYLhkdRjj1ZhwJjatkJaPAg3x2jUGq2m9FgqTVw2rsA95WvHyyGGgpybLwXzFztwJcN6Q",
  "key5": "ynMMLUa6UtWT1t3ZMUQtbCzKKumPZqpGTjUgkmmSc4oWWeJVh6zaXtTCUcALPSvExDTVW5uXWbNjvq69QGiHNdV",
  "key6": "4Ff4NhiByjosLmrnSA1MiBHFQvsTCpFaiKbaojMQF5GwYcewLAd14ebQeqALQgc9WGXtKGpBGYcYgtJKQJ6x8yKj",
  "key7": "4qhomXb4CktmNsrKcbyBMcztNZ2frXfEzrhNrUgVWJEhZKCbnkLXwjSqBbhftXjfr3ysQHLdhiDuTkAqDCqnr1e3",
  "key8": "2yT98cTmYcdfoV4gdfXuQUXwU1J8Dph85f86X1JjXaWPrpgx48vCFzw6RSnZMzTbtFwvJXQiaFpvszeMLp4h7dhM",
  "key9": "57ZkuoweDAcWdjmHRTehAS3DksHcsPCarbxxvpAVthS3y4EYfSZCJHjefbZWHp4raWxSLHxCMm1yEyZdjw3fLR2d",
  "key10": "2dbEKENRWVWaEpc3JQTmQeURHq3wBEpovYeeLMf9GG2n7xs6BMz7XL7CLBwso2tyMZAxK8KHQkq3UCyjYZHBgEUu",
  "key11": "3oMcJhqrhyHjU2sxXbDqDJf8v7jBUutkA9RdoEF1CktjMmU3m3YzLbFUxPyzB11JV8QcNAV6BfsDkNvH4KmRTyFz",
  "key12": "49BD3uQBuecV1gJoTH9XFgFBkg9KFn2SwNjEyczXUUt7kdTKjGmk2ZqgNT26GJDgkU27ysDPJVmcNij9w9PeHL37",
  "key13": "5ZwuKbtg3htLepUaWwUJ6q9M1qJuAQGFWreKEQSqpZ2vNpsEZB1ScRvRNdefj6AwFHgYeFrXMgCyC9RHcicnqKPe",
  "key14": "2xNWZqj1F9MkK2DrJzKYczRiv5yr1uyAHybfwVNSMMzaWp9yeECRJ2XRJbWR1Fig1rfS7S4V7rp6ecJx5PLXM3K6",
  "key15": "4iQc6kHMVaT5USKTd41sM4SdMArNSsikkvJbv7pTtEXYk1fm1MHSHGumTxY3oo1w2F48VanPqxQ1HPECyT1T4yqy",
  "key16": "eyKacoVGV1uTC5YqFRkPKdimiLyqooPfPS8NZuKe9HHWqo11FtkBvhDT5frUsoAy8raCeAXhvQYd4bRBEepysra",
  "key17": "3LA1KghNnGToN5esNFU2PbRPKF8VB9yQiqDYHAqB5L7CGuGxPd92sw8sstzkqhwJPVpmoksCkZFY2kPrZToSbQGd",
  "key18": "4g6m38JSwknhNfzgZ56vPyq7QmArjvAjPCgyXtH1pZQ8ie5Y6GanR7YerbFdFSdKSbm8JnYGwgcqCPBJChbCTGrD",
  "key19": "3ZhppAfZEDUkwkgFYD1zatUsPE3gtbi9M2YKMHAoRRL2DKoaq7xXR2rtd9McZJxggdmefZpQqkonvE3LHGsutHkM",
  "key20": "c6ryXgbm47nsJRNYSgBkRym6wjpNsruBdffQVPkG6X7fGnUoLN4cpEPEP2kqmfJoiJJFzqZWHAHayrGnxnqBiyv",
  "key21": "3QfrLotUKXo5niTfwpwYgmhtuFWdD2e76Lo5vDAHf6qoQLpYG6HUovBoeQuqpf5vBVNowHPhQYFc1K8cwZ3d57Z",
  "key22": "28GGuBiFekRvYwkHbJXeajifK5zytDexA4VHC2CSxvGQdBMcdbkqWLankL5AZnSXLc96rnuzubcr219EsTeHzSon",
  "key23": "5UzLMSLExU5sy9Y4vPtfC5reJ82BkPUR7NMq9LScynd2uy4CFXp21oioFjFTNnWYdcphSB3q76A7sgN3cp79tQXk",
  "key24": "5CZvsAeGajLy88RwNMLA3VS7jBMa5X7sgs7VAjtxByx2NPv1HXSr1hwrmgBSnXU8RzicTMBSPQGtmmzYEbZP4uhi",
  "key25": "4S8BS8vYW7TPqUnMndFvmCkHPNe5BLh3sKaQGM2jfyQKSUrDW6Edi3QGmTnhjmdBCRHCzQsmbSCY1yAWfYBN2ZKy"
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
