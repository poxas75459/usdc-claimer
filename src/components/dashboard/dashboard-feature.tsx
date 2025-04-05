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
    "5NNZvGsmzULduuoco6rT3Yd5tRWXqGg8L8rb2qm6zTAFsUJQDY678AJ8fGhMk3UZcegzum3nhH3AZDPdGqHHCEXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijB8sAQbCWNChDmLCrEwM4uKbM1fFCG6eXRr3YgKXPmvaGQkocCdYDAxsDstaW23cYnY3KhSF8e5GFQX2VukFQB",
  "key1": "3o5wdc6wA1TzyJr3mXyLuuPbVL9Tn8yQE8qtbVSq75X8u6b4KnochzdAeqa11dN9z3rEfWofd4XdpuuNDN9883gg",
  "key2": "eTfqonYDSbnRfUod1w3rkjfmHoaAcd3dRRYfcfKoghwdZzKePDakZkwHAUgfGzKmNBYLe73KNZSybpCFyiKp6oQ",
  "key3": "2JFdALLvEp9QS9VfdxXXA1gm1hgeDGNH71R4js6QcyvQg9fSwCNGML4wvosm1qjRvoo7AUf5EsgRW8rpDuyFgtVB",
  "key4": "5Tk4AyPBY39tpaKNdsw9fdbidwCTRnpm6bW718EEmKecijzWrUAQFKUc4b6zgqpd6qCxDELf9uqwWtdyc1HLuYGP",
  "key5": "2H1h2QSKHkm411mDb6KyUeTMRaSB6MzgrvczrTmBLm29JmDaKYNcexjK1qjmKw68o2uTk1Md6yeN7qbJSRTuYgnW",
  "key6": "YSceVgSyTYApkUmnB7A77L4NJNaxAbadMBZn6Mfi9LQZ1jn3P465rk6qaeY2oJjuxpoNAW7Dya9G2g1r8hr3HqQ",
  "key7": "Px9njTucxJX8U78cmr8neCgA7jjmw87xFsip22TG76gdYcjFteH4hVoMRrAVkPPX2U6pB51AQjWLKaodLZN1DSP",
  "key8": "5szE3pHtjrVcx9pCazsp1AQZzqgmnAopHpUbTyHZxffuECWfb65Yoeq5AfkmGbpEe8SWDBacSCrox1H1tB9oWnwW",
  "key9": "3cRncjWkSDgHSQ94ujFnHoLbUm8W4fma7gefKNk76xcWcYX8seLocXpkHtzU3fk5rMeVHCcNLPmFb8rtgHXp7vyW",
  "key10": "5WLWrefhtvmPZpZdKGwKXubneGeApDxQb6mXfmcYvL9jdwr6mdAHyrzKceU7KXJFs1D4vSnsyGAcCh2fVj25J2Hs",
  "key11": "2spghcX3xSQaWseHwTj4jLBhEh6jmVLV3havYokryZYcJYQCoe83s5kjHTVzFxiaS1Ja3qA7qK5eievbvygUvxTk",
  "key12": "5XN4oetQLqNXUgag9V8DAjRUmKKRdnFHyZmV49CK9gZDRZprHEDLCyfmPfEtFoTeb5kPj2F7YDyQeVigx9n2z9dQ",
  "key13": "51eirS3mfm3An9ecW9S78K3dSnxkcAwZVMav2BbjJuFABZcMrP76yubxYc9XqpEEGeZfuaTJscarR1HVRqzsTeu5",
  "key14": "5McSoEE9saCSDgVKKp8RWqzyYxFtaJtJpu7eQkYnNYjzyr8Cbz151KRYeYEfeVwaNcLafQYGAUZdg4dqVxFmWR4x",
  "key15": "5GysUK4nQ4PofAHCt7895uEPyYQArDY6sdfophyTYwVKNesshysFVArqFWJiKfhY5M7iZotR7zuwDMByeGGxQsgZ",
  "key16": "2TjYscSNmMJiLpFKQHSLfHvAPoJKguxsuwRrKLDAwbykajrbNvWJwjXfTcnYHT8mJfqgbdc6pagX68DfL8fxP5po",
  "key17": "2NgfJaspfXrWMTYRYyHPCYWLqgck4ydvCoHoQ2kS7uusBG3JEPfC3oAHMFfEJruiaJrhxU2niyZm6zKfgrsFuMFe",
  "key18": "3Sa9vgi5Cy9kpPWV5eG8YJNgNF2j9AGB8DSsEsuGd2W9gTHBQuoFzEaY82WPzVziQuZT32vWcbPJhmgtzpZowVNc",
  "key19": "5ZLvUFGEuoZ3ghFPRFgHeDuv2NCjeJDkxEvdUP5kUtYQ1JFZm2oSnjzefVNLozjPZeCafLYTuTVCbVXBBsfKYtx8",
  "key20": "4AiqHhKpGM8bjpXV7GFs9NSSQHgSDZoHUbRPoaF4GXYTHatK9sP1GRSTP3FRKZ9vXEQRKkYd8VpTFXXng6doYvFS",
  "key21": "5s6dRgw2rSWkSHEb7KVJGizxgaj32TeoZVWCJS6dXgvHCxdgXRFxxp57kPtDeTjfio4bEv6AFec3fkepH38JM5hs",
  "key22": "5iy2tE6BYuYdjf2xfvXaMPoPpzn9tLtvxCkVLonDgTemsSVra6isyzqanFoptWaw8xn55VdUmdWe6Wqy1xGmcjhZ",
  "key23": "2N1B2i4JteUQzNwA5WcBYBa8QK1MG4aF15yN88m4iph5ozBdXgNYuMFXpK8yYLzXYsm1yTwquprz1WKHeqPt6JBb",
  "key24": "3z1FuYKNv8aCJjoZMHfiv2RBC6pus59P1WAe6cTsxVMrB6GzFs8cFasjaN7q8GvBTWANpQAJdNavGLb4xEvSWWRJ",
  "key25": "4toCq6wN6V8HFbEnErCgjhptqtfGG74TZZWGjmBgcxvYysredwkQ2FCuo6abYvc4yJSoAwWUrQboqCfTXYw7kiPZ",
  "key26": "4hHahp1EP3M6YmvmTVcNkxDJAcJhF4ZZhKsTiHidcB2QxyWderyRfQEmFh5wFKf3f7FSqVRQm2g4GgCYfqaEXvuE",
  "key27": "2nYsxYkEiXU828vhaP1YY8E5fC2n7UHJWXwoRi22EC6c4xpeRsi33WzVBx17secjUdqeG8JfpVFgKYt7cQbRsdWu",
  "key28": "2WG6aZsFuyjt76vnUbG7NXVhZ4P9nwxy7XduPgU2Rsagxaovxhe6i5uBE32eFpgY1Pf2hUCbLBUmFtdzcXtRr4oU",
  "key29": "5cu8dVSFVxHEDrHXSms2dntc5K9B6J9ECMqujDNg1xi2v6A7qBKfVhxv5kdpL4cNQz27gxUDSgyq2hU6dzehn5YA",
  "key30": "5rjyTzimZFuXALAwjg46ws5Pds9L56Y1pHDBhzMZYcN1wq1KGtiiW2j3y3cvBJa2SViXFwjBYf3opQsWQfSwptvY",
  "key31": "52QiZAmJa9JySebe1gUtYjAPmy4HBkRwcr9yDVokkfQx1Ph769mRVneG1Sf54SQSi2Ptc6VvGYpCAxw81yfBuVXj",
  "key32": "2zCgQBCMxmANioE2bFjR5uvoAk4ubH6mfDuC2grtX8DvR3XcaHDSnv4udVKSfERBfk1RHMPbbshpVMubiXBbuZ9v"
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
