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
    "2siDenf5uBKPDZ8YuHzUHmKy5RMRhMH1Yno7c76PSEevf1rxWB2yFGzDo1aYWNw5HQwRzcMkFftLtGGobcdm4BVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KGvcduwJ2WJwQKvMDRbxtiRqSrUazq6rVJferKcefPMyx1ei9BQi4qpkFYhKu6atS6BRm6XDLPsYYNYT84fS8W",
  "key1": "4ZPYQVJTFvASHErzwKRZAGXLnbtHKnfEhuAKLge5RJVJsKUAyVHue7pryySB8DdtXspbkaQB3DnBzFG6EzZt3J9J",
  "key2": "5ZGrSFxJEaPkprTGn29hEf6EcyDv51CFcFPfHxg7WmbnSvwUDQGZ9cudNpqSe82uUd9FpiX7L2xt2eiNQkJqHCNT",
  "key3": "5r6Jao1dhn17GrcrnEfV3SnxRKU1dKcuQAYPbEzJUc8Dwgq9mTAmwkQwEHU1DaozaaJx4bF4ik5yAHuHc9tnR3E7",
  "key4": "66PE6CEgZ6ycwALdkWVFQRXeqd6Ab8ufeGrXvGqiuUuhLdFA7fciGpWnFDBwUgr99GBEE13oxF7iP85iivWtfKuz",
  "key5": "cLi6GMpLmi4XmijoeJzPrfPa9pMupcMFg75rBH3oYLbBq1B8S2tgTFP2QYSdjm971PiTxmE37cQAxxHRk6et37B",
  "key6": "eVWBERnn8E6yUtumtgtkXpsmpw6SECymo5K43bgRH2x5X5cSZk8D5hQ1t3iuyNNmRfvehhckE6JtwhDMZRNGQqV",
  "key7": "5AgayMpQ5GGBdED2pbwuBYiwTxw1qmhNhrhXu8FjJTLqqqpWEvVDeLMQQX7r6b2KAF8A2oLZMhirfXf54qPgWaJX",
  "key8": "2otEWUevR2ETY3YFkEN9tycobc43fNzqQi5ck8mvKJdWyhsVGsKzaxoyBtGYXbPQKDrRHnFoFdDsUsgdMPTus4zG",
  "key9": "5vrX44Kzwt3mGYet2uTWssyVMR4MKCbifbDXt6sGSrix5btYYtZzeFceRpa7q2cojqCrJ8uHDGuzre4MQFrW3twY",
  "key10": "5YbN99cjp9tDkJKeSfnuxkr8pDLY1MQmAA5Yz1FY38mDJBpbvfZvzkz1oSVirjAgh2pfWYAKVrk9JQdEuVDJ4Fc1",
  "key11": "4Po6BDur6ZusVvMQRy1AK7f2xQNTzofdB54HekuTrveRTpfqdigEds4FCdceDbPfGZ85H4UwK94wgb6qunLbDBeh",
  "key12": "5aBJeLo77aPzXpPZoym8xLHm8Q2FikQp2YfhjtyKGP3WZibRmdRENSPcPDqxXLjbiV9i5TnJ28WW883bsNExKnU5",
  "key13": "2hkfdUZKeeTNkBQuVXZLubxfTF1TSn1B5GAfjHQwHmAf82F57mxUj4ux6ztmHN1dVymmF7a22rmqetQKewkb1XeZ",
  "key14": "D8grAfokSNRqEtxkXxNFwYU2cV9QL4MUw2P9oU6KFyYRYrb4upWozgjRCqHecP1srWBhyt1G5qdfcRWmbiRJ9Ww",
  "key15": "3wkBH6QPWAmnWqheNLd924H7grJFaVZCLKcguKSrU9jRADbKP16mvD4MEss7rLkGhgasUaVfeEGYH4Q7oF8hFyh5",
  "key16": "3AKna4Av1a3qhFV1PgKQ49SAMwnU4Lp68Ma6QXhBcMhwyUFLEFDimCixspG6DoCnhYbRFWMJMU5ktNF6ALM4LZtG",
  "key17": "2arW2n7zbk82kDB1YhB5U5jeDhscKnuFKyvwAPmLkVFzGxgUadcRqjCB9K82LULBvh3V1yvxrXeYtf8xdFon6f87",
  "key18": "54tq8ztUNdVeH98kdQbi5itK4bUdhSBJUpfdChRSZpPL1kaPYWmALMHtfAN3jybEJwertfEMT8PgcG2sxmywNJP8",
  "key19": "2ipXRjSL9ecJR4J1wzxenZeYXUUs9ntKqSsSvsW59NNewiNtJoN6KQptCCGsmLkyHoRrWvGY6bQXdteaCoZvaTAW",
  "key20": "5UVnZoFR9nFgZWcxmEMYs4HdaMQtWt15ddpyjyWkjmjx92nt2MfzTwgXzzQetTEawxH4UfhB27bbrD9QxNLnDUut",
  "key21": "3fbbSgt5dr4STicxxNNUssr6NdqeScAj3JzoH1c2S5UN8rRGkJzakvVW7b8RBFhivU4tEisqTKQ8BzHfDUdRws3r",
  "key22": "2ToD8fcY8XMRd54wuoLd7TChhu5A4RafMsdEguJwwYT9aiyS6Y2cTMS9jokpt2ANkCKNbSzMvaoZayKyCwGHcepu",
  "key23": "3nuzY7GhiU1Tc7wVnSovpFYn5FzWRd26cTBYB8ES95PBU3gqitWWTn7tD9aBiyW7ms9BZqg2DbjsNS4aYLUZtkSQ",
  "key24": "3v21PnyDtdgmXnikc18c4NJhMbU93bSm3p35PoYW385CqnHsVTxibx1anhDQ1UtGKnWmp9kTDj4JCoD1jv9LA7nX",
  "key25": "pcT1fe2LY3jNXiAV9yjR7JjNvbFZ3ueefH5gzuBZL4Cf4XnjoGZpLZA36LBLGbZBJzPTDCpYmViVGt9tz65JmSz",
  "key26": "2f29bSqe8eXSXaUxxyhCcrHa99bzQxpKnchjo6JRKg5kyERnMmWmFzjHpE6quwxo11s4VBeuEREK3gdUiJbeWQzz",
  "key27": "PtKnyHrzsP3Y8R1C4ToQZeMSubLLfpjFnHCbJEyf8bxdnUn8HKcHaKNmfY2JwzJfQuDqgaRy8bZ1Qifjg4jUG4M",
  "key28": "2cRKvXojMdHDQ8f5PMTRYfkouzyS2PHDVt8u4diwr3L1krMHgXFCjTjstj1CyANceb6My1HmXAkoitpQtHsiSaeQ",
  "key29": "3Z824UT4oNATAPA9MynHq8KgXp6yNzfF9eyYgELkMxG8HtTpLrjxnkfPeT5ffjsPMJa59LLaaAyhcWoZej52vSjF"
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
