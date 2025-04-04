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
    "5vHwRS3n2AT8uKTaQHceqSwk4wXTTm5eLa282BMQ3UDGn2LYP8ACUbVn3L8Xk8dR8oacjwgGTSvgimDifbhpQeSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tr341WvpZVAeut7FakqVoBjwV4TLMvK8P6Rpgfb7dfNao9xPgbdiEFgrvsC7MJmyBezZaZmy416xjyKuPcBh19G",
  "key1": "2nj3VR7yUrbDA5PJF68qxhWWgmXbR2GG5Yc8ptGZizbj7KQtLdJQM6kqsXpVbK37fk3fkAttYofc6AJge5q4tZ6Q",
  "key2": "5BTnr9Bf3wfsWeQMVYsGA9rcvYcwH1ViR3XpBX7oLjM38YMaATyUmb1W4iGDFX7eqBoVaY5veakq585C2SmaN1Pj",
  "key3": "67Wn6wymEKSfbA2beN44BMyGpbJBjEoY6eHx2BXPz31XEv1EAUgrtR1MuN5Zy1MefCnk3P3YkNdTxESTfrX1sw8w",
  "key4": "2Krpctrzx3D85MoimP7umoDAiXDwaqWcN2uuE9qZUeqr9tBY6yEsnAf9XAWR7BYxRDmv64C29sqKJkqFCagrdaZv",
  "key5": "eKsio12fN5UaWDpoLHzCtYyC3r5vz1YxaZ6YubegJDmUyELjNKsAdhLwtTqD5juxRHNrTCG5463UaMaL2bHgo7R",
  "key6": "HtNT3XzBkLAwpMo31xndWxWLM7VyJPu5szp9Uj2VGNNym1CbicJ2B8RDHkWaJdwo8aYU7Uy1SGTxtg4skaWw6k4",
  "key7": "4v4EVmmNoHmSrNEMGP4bp9HNkbRpSU7rKDX8b3bpFhp2vkYho1M6GhxUVEfWaaM7rCjh8DT3XZqpUZrjQ7KHqzpY",
  "key8": "HCSipuU44WSnDLkFQSdoqT4XQHx8qRecoJnHtfeWRdaLg7kgeDYqiyEe5rUsBTxr8b9mNAUQx2AHNTFG69QVQsx",
  "key9": "3aBZ3WrQ4kFcvQx8ME2BqCqqdBJp3n4StGPnQuPYL2sW8yTZxnhdoSXxg9gtipGZ7FDJ2hqN37F3WEGz3kBJWtKX",
  "key10": "rvJfjgVXm7jHWDGu4SSz9xZvSQHXByp2s1h2nncN5G7yBLX8oFKvHUYtmCeXbxoDmxckpzgMMR95kW3QJEo97MY",
  "key11": "LTQTHEoBBGL1JrV3sdZ4j6rYtJzGFpphxT4GYPnNAtYENFYbon5k3Rh3oErT3iFwc2J7odfKY5aR2KDPsNLxePn",
  "key12": "64Zxv5CJnF4Lxrc6tJoPJvur4UHPBhY7U9ZpUWDShWvaareisQNkuqtmpyZ9EokWpBHNcN6jMyyehgc63fu1cyjF",
  "key13": "3aQ4vJLeiDFkwM6Kzxk7W7UqocZqJNNxiXCihU6pLsjge1qpbLhXPUq3fRwPhGAg9svnThesuenJfYApcgZNhyB6",
  "key14": "2WWCKaT31FF94sozLGUwcDyemDUfLWSvjqFbeP1VGKb2JRzfoB751KqKxtFCGSyHQamthgKnyXSLrSmuNEXZ2VDv",
  "key15": "3cb6eCzbMPT4FLsGTEbQ9hkHDuriHCaBy28Z6yyDvwLD7L1jAvDV9Eozp1aQ22YbUQLEw1aRiRYgrgcPZ9aBWHzd",
  "key16": "5vBcSeWnFv8y9tAqkaj1eXuZJf45ghLguuGwRcumcVyobh3ZFNda4EckrTdnwo4b7W8PfQmKS43cw8K8774FFXGY",
  "key17": "4htwf8E91CfURb2j38sAbDBiVfCZyohN8aGeLNKwhivEVEvyD3xxwcsepFEotemUHMxYYeYMoK4KKnqqHxeX3kuE",
  "key18": "5LoXWZkWN3DQG6whPaopsi5tLmfcdvBVffEBtjxZ8W2mgNxvv6oJsmvqP8RG4488dHDnraPZTYKsLavZrP2SK8UC",
  "key19": "2BdWAk73GYU8ApRa72swmd6BYXNh8Lt3CrzgHDowXDFheUgAxWdPn4xNT6MLPWrXM79GKg5vMVFM4zkBTD5Kxpy1",
  "key20": "5EsHoyRvpP4WyKTNuDymCQ6V24sHbWzgD6voC3mTM6oVHwFUbGPsJqcnVLCGpNQ7jJxCw2UPHtt5Vb6R7N5MgiiQ",
  "key21": "3NjXb76kFmC91FoyFqUQ5epTnUCH6AK28N47uwS4VbcLqr231prddcqbV1x9YHydKqwfF13u7L1MjT2woY4FHe3o",
  "key22": "5daz8WmfX9LFtz7iojs4cLUPxRtzY6UN5eFEZp2RYZFHdcSUNS3gz5XEGWppWEKtcWown5T1NDAJg39dE1GoSeZ2",
  "key23": "4kdAqMzDjytfRygTmFk4HZyEirLVnrGcfLZmfaSURcVEGikzxRQVFYCT3byqq3oHGn36bM6S2zyMSPsDsqmGnBRd",
  "key24": "4pT8nM5MXfDyzmu7y6fmPUR4ZVWDFCJsrPyjt1TMKp7fERpFHavmJXXLzHkDGnUBQnnakEBnvDSoF9XtFTe25SKj"
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
