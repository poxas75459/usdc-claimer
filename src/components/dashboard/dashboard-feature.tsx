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
    "2wN6f3agjTtZzDWAr5tHteRyz2ivTyr2SLCTp9sfFnKatPWy4tpgKiybopq7Uw5HHxZ5hKbmLYzaqeHTLt2cJDEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBgbtSVc1JUzPfLc6NRKC994aLdZs28PJSKMLrwmjcsHfz2wZ2UxxEiiPpVK2d9yJ5vUveo9zjtawJnDQH7Uo4C",
  "key1": "5Pv7g9MRAkojnKLDJdESWWXiwv2ww6eX1AtrSfd39BurHJCBdAdS77jJS74FTw98vhfkTFwJ7ZBYFoRQ6ZXkeWJW",
  "key2": "5JqaFyT5ks2W7oYLX3MUtVet8X5xqTSZSBnq3KG5ttCLRCYraVzrPD6JJC1kdS4cy7cCnJJ9Nv4Enu2h97WN1aUf",
  "key3": "5zFyUxdUr1ShoMqUBt2PG1VKgs9ncPcSRBfqugqs5VNSKJtK6H4PxDwjxzZcaMbLxgQj7My4gdpuhHgyt67c3bju",
  "key4": "4uWfvGrx9vBxqzmjH4sVqoRE4JUaoCNkdWzMzrobPCZnoNnRLnDYqasxwDi82xSQWozyFBa2uLgG53BZfchLErEY",
  "key5": "5nmhCETET6TKwQffK2TtwgaysiqT6itPVgn4BtiCPXCffjyPLF65Di6TJNDydYN5fG6iMSeZXmUkP5AFFRxNo9Z2",
  "key6": "4i8LR4F383ectEBeEXPVVXNXbpssmYnwSBvDQKssz572BGPYK6dA3SZmAwfRMMcHBbt6HaZAKvvBPBYFjEdkZf6r",
  "key7": "5N28iQkZBorCEjAKUT66JQoZqeJnsU8gfru2wXAWMbn9pJneXs9p19sXSETr55TpEaf5u6XgyCN8pGt2GV17hbH1",
  "key8": "5cyTsg9cuz2DCrzFYkuT1zRFVTijLx8LzmkBBzY4oZpk9Tk5QYtgHC9281WRVmXCmNHfUL2CWS2R9aVPsP6Z4Fut",
  "key9": "7ApzmwY9bvQjBopG8E3YksFG64MERksph1yEveKLbK1U7NenU6fYLqU2YZ4ZLzgz7WLZNAmNgjUsQarB6G4mCgB",
  "key10": "4HCnrW9W2GpvTYE3TnWnAsp6FAhibFxMDkq8i7Wj4sHw9KDXnz1Ke9Qn8No2ix6mmfHkDoRX8oJBT2SE2Bn99Cfk",
  "key11": "4ctyWcEBSHSMgpfLoGL7fMbKuQ4hwaVQp1ErJLLvwDH6F3iRMViLRSvfWnyX2RtpQTpTqnzffGpUXroffEuEuUyN",
  "key12": "2k67imEd8GztHWQkLWXnPLJVjEHhsWgcvs9KCLbHtRUcDAV7zwSfpV5fw6oJhCZVvbLf2ZTWuDuR4qJ3RMMwF1sh",
  "key13": "3Yq3ym28MMJ5cP6Zs6Z6FP95rG5GwRirM6EsKk3Wzfmo88X5DuPMr8dJ43QD1xZoXEQvNx3aFdm3djCURLqVyqTw",
  "key14": "5uaymKwVE7WVxTjyhvZs47yYrR6iVpi6qKWiCq5Xwhhqjny9FzKatxdnpByFBeeStK4ChomDuWdRd1fv5BSRxK9k",
  "key15": "5kqodGH5hN6TYWiTLPag9uKDacsfhzuYZT6sbXri2aWErv2pyHiasWD1auyDSjzW36uKG8LwzcZNGkjXuyuev1mn",
  "key16": "s2d8ecKTYsqRUhsBry4k6J9KRgvkpgExAPWk7FkdgHBwMLyQbW6gRx8zZrYNAdYCcWSQug3LRb24n6pFXsvJxVh",
  "key17": "4yRLM95X3HM6fKUpYDxib7VcU1juH1JE7fusWiZF6JL5qn5FX9w1ya78iEoFRskWVpAbC9ZxTRwEKsTAYUrWTo8t",
  "key18": "46UZWwoa6qgYKATaays3Fk5myAaTtKH726Hp3savsMb9fFm6RYWuZMqW1xeekftUJGA3L2AyLeYvG1PA652bUAfq",
  "key19": "4ygd7GcAhj47ULBsdMkZJesxgx91f1RbQV7zHRYdzmPYLtiDW9vQSnL89YmQDFWYDsa4JoxB6ZB7LrYJqUTQcy6k",
  "key20": "2qtxqNVHnixsJ48nTVZoL7X6tLaQ1PqMuVFhnmKPTku11qeS98Fw2qAnegaHp2PdsABJrdCs5zTJ63o1Z41xFrXJ",
  "key21": "EHtzaYf6ijCMc2BmwCQKpJ4t65wJjRUgq4BQ5PBY7XiNudAZ4SSYKy9gnLJGXLDNBYM6grsWnuGoBia8h8WT3bs",
  "key22": "2vUgYinZpQ5NKGiKXnVcBd1zVG3szXfeoxK2CeAcYouwAoQoiXifHND5PRJFnbPLN1281Lwxed2vkFuM1MDmh6jg",
  "key23": "58pDZfMdCSuTLTGNxFd9uebKZiJPK632F8xwwsSKWMTbXipRnPK1iJMejD2mqc1vtkavPpQFLddFqhaegdwFCmAH",
  "key24": "21ZZ1Qtrprvf7kp8BygMaZHV1TkLQVmQQ2nkEsVbeysT7HaoXvaahj8wukPnhL2qcyechEc5CkRHhdy817735swB",
  "key25": "3cbQyrqEnYoXCGMQAwEHMdb29BSr8wyYTGimXakGFEHrg6eucJzQkSNCueYNoRcKHhSZBDx8uB8T7JHTbx2FStKg",
  "key26": "bioSbtUYVBzewgZ2LLP52xXyUCDoAaYXxRpepc5ZrfsvqtqpKme2kPwMYgbNT2c6GzSRmqV7cfM4e6QMH5k2jMS",
  "key27": "51wiYKoS2ZG9MVcTMVgKqb3kdSKyEGXFZPMfAmciKAvsXWYEYMBZJBD9Didge2wHhquGrAmM3yknuCuC1HvCwyT1",
  "key28": "4HfC2QEnpfLWNRq2eMZ2g7EkDLAX1HesSZ7LWR8q7D8BH1NRXK8pfczuN7DjBS8txBezgobTQyAiRydDz8eDr9w8"
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
