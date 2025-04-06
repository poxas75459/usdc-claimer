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
    "5syBG9hvvsqUK1maTpzn4JLNkC4uXHgmWvtctVn3dUJr3XpD8pE4kW2WG6hm6m3mUBb5LRpaqHEEDRTxVPgr3GSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7Ds2cUCRDMfAwFiRJ1tGp73n4fbgHe22ykrJrW7RMwuVgZmLqCTEGH5EHsADpaCckhV6sbJg3yTqnnVvjMEwQq",
  "key1": "2RXsRcaRScAxMqR8Pz5nHhda9nYaDvJe2RnUDwMcMg9SxQvJ5igXmbDbbaNtzmRJif4yR66jrCANxYyLqp63hBAo",
  "key2": "3rP6pbQUfH3hayZPeoEwUcTyhVBcw2axNyN4P92Cd3pYxyunkqho2bT32QGqEJ9DCU6TZsXWcuLtztDJJGpR2eNp",
  "key3": "fdwKKbPRb5tZPqMZfp5hz4kgRJaruTaYNAZhncReAoDDRdDHxCtncsbLuopHhB91MSsA5SL2HmcpQbpSmnnwKTH",
  "key4": "58vDHKRLjRoDyuThPYVvwbUExWJG3wjZzXpDugZ8EVL3tsmqwGXfp7hweGiLP9VcutFReonotUVtrZr1d6NTH1c",
  "key5": "4jX8QaVcpi7FoZPBTy2CA7UoAjU7tCX9TYduXsvSKMQQmGzg1DQYH8MFKmUbDPVwwJZyPq5AnQq52Z1QvLZhtL5s",
  "key6": "2o2a9Nqah7mQH9cBYAjHqZhw6FYAbR3Tpf8qVebry1tD3cm8RAdtL9QXsQ3ghYEsi1MwVEqdAVGVJ91rcaFCeLQW",
  "key7": "2ubDho16UBCPFm17Ao2vxisx3JQJymqQ8yPrkXpWo3P7jnkSfDryECMPuPyUttwwRdmonxwXfxRUGCo86umeMsEE",
  "key8": "51GFrawfqQTxe7cVQJoKeN98zBxr5Cfv33bb6m9ehvP5BfEt277phdpqUdHfAy5EDwyZwcPJtx2ox2QyUUR9YHDa",
  "key9": "5NbiVE7CMnQNJ6Pa3UjpRAsuwUT7FaawyeYanGv3YgrbdRCFHGjY9s4VcYY3HEsvKYP5RBtJEmThMcF2Yy4ctNdw",
  "key10": "i4CSG3idXCBdMZn3WUhdchRVUWGZXVRSwYVUi8RDjbYrq4YG16sykKcvTYNkzvC5bGK12ucf38z6mCcH9Fxm9Ke",
  "key11": "JmPPsBVbwTKgFMihA8L3tk1m8bsLbfB8MPbbpzExiupz2i5jscssmnPuZQBKepA7Qk6vcGbdMrs4iP37P5HZEVL",
  "key12": "54djQAis3Qp1fYyUV7Lgdoje8JJ2XAzVXHJxT2b94LzH28b2Ci6Th48Jur7FCaiPXW5FRnYiUGRHhdQ5TywNQJPJ",
  "key13": "4YbiD1q2hbCeHWbQ6TvJwqqVKCphZHaeuZoFR81QhfGXgvTcrrrLvLs8FdJuitZybjauAtW2Ne2Yiw2FbrgD4sDe",
  "key14": "5EKGkhBkLsDYymdaMQJ6bmJ7KAQKtikYwAzvUKnzbQ6dE2Z16ZGRp1SzYfPkasCa7tWPBdTHS3mDFbpZBhUoNKDm",
  "key15": "3p4Lh6aXuo1MjiieFAU3kRvVuvHRARX1hKRmTrNiCnSRXM1U7taQd3THkkaH2e3jeG9MA8J3pwzLSdjGdZ9Qxr8n",
  "key16": "7tvU2gTEW2vqVM5XkQYuxfM7fh1XvvJ1V7ofRyVCRRJ6RB8VjsLrtVqbCBjRne676rp8yEaiU2TF8BwUs1XVkVi",
  "key17": "3vrck5PCvfdzwKNHxK2N9gqSkz29AptJRoLX7r5HXyv6oM5EdMzcmzZb6mSxBKdzPjSj8i63DXtJ38KPA7NXaau6",
  "key18": "5ThitKjfSPprZbF4BdpvzNCPH7XJDfvsNWKsaH82uvLNcrWu3rgx6AWimk6rJ7adyEXNWGfR9B3QbFMmw3r44Hpj",
  "key19": "3h6gh4cpUjPQwimL5HuH83xNnh5jnyKdmmp7S5FYTynMM8SzvCeTV13duZAnpiYgLFUjLbNthiaoPBXmRFu9rfvv",
  "key20": "BAvtPUrpFZYgGWti7zRP4AtpssK62Awpvw6FfRAGL9AgvQfq9JCM5mLegurfBZwcGRMZiH98ATbbTSASEomDger",
  "key21": "2iEuuX32RnPRE8h8G7XyVaqiA8Jr5rDzzAyPnA7ADK2494D15R64VkMhywBdpX32NecFSUpsxYQK8BWZiijasFEb",
  "key22": "5HuMQapbv4ynjfmpgadU5kzefq6k7gEuuqaWDVWfH5gn65woxARYwhs64Y8Qy7pdN7k4zxDSKXArTrWo69u551k5",
  "key23": "2R7esJXSAYi5ikmUvP4cYSBjSqvzX6bv3V3Cn8aQBjVXe4Jq4c68tuN38PgirbVZrUijos8CFEpmfDQaoWnRy14n",
  "key24": "2nvMnJBJFDGBFPtoFwYgKqXA7SDJsannrEXDwifnsYsQd6voVXHsQXx1yCF3MK5gieMYotVUYJCLBQRYTfGXSBdo"
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
