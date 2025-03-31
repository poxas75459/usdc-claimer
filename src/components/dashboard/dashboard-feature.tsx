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
    "2s6LeCnPj5khFjDiVBbsi6tFAEdX8D3gBtPKRLhSGmP4XrN8usoCymFt9aV2roNWPjwM3Rr9c7wsBPyHTQ58tfSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBzj3zw8feCFsYWEpwtN2RRnYSyupR7KCeFAU7DTWfeNvUDsiTEHWfg83wwCyybLhyQ4hsAAfxmAnqkFVvDVyDk",
  "key1": "4KCX2VF2FhBj4nQ6yXDthLWAdwju8u1kqdryc7mgQLUpqypCGMGD8FbGrCYH9H5jPxsoHnNm5SSNEfNV5yuyAtyg",
  "key2": "5thvqggs4pfAFy2DvhU1qgzjbKBiSTTD2Pkgkt1VsDN9egtNq9hzPPubYDhQLvbG4gJ3KawJfrXYwYufL3y7wCsG",
  "key3": "2Zx8LbDF63v4pnfUtZeKXj3ivSEu6Py58WNt3NeB7HKBoK8NWbHps4SLsGrmf6ePcgJygyhtGHza3jdWuHqiwzjQ",
  "key4": "4DsUahy4ZJr6St7zsF8dFkec2pm5SyYdb2yzCraDaN99YWDdmbPcjg7jZxVdQgjBfwzcVfJLVNjiD7tWuxCZ9UjJ",
  "key5": "2kAa6ktkrrpjxiopE1QLuBLFDzApYFBqRrAPZDGyWPsWX2j4JgzceY8SBHxDTdzbqSed2kbcZLWv3zvccRs9eE8C",
  "key6": "4XFmSZAjweF4qnqDK8VQttfmcsbbVcFfbzzJCWW84nZuPtu4CVsirTiJHcDANGBTBsuM8s6AVLavEqMzetGd7HRr",
  "key7": "5YLLHFmsBWPj3CKQCW6if3QBKYrYUcNqTt19gqGfakNRFArutWoVDazcMxy6vt1ZXn8kejgW4rcSdEvaFMPmgSTV",
  "key8": "3hZCmA8qtDpivaMySn76ZShX4AgZKpnG4uMwcUpJYTNnDh8oyzwz835cmuqygJX7kXFe8PwX3MeYxcWiUWrurGRo",
  "key9": "2sr53gGNdN85WaqRwJPmoby42FfMEdSSxymSn52A1JQ9FGmpX3YGghjCixYQw6GeJ1aUjDnpuVXcyST2aU1mjS6D",
  "key10": "45ksCTELdSMRisdnS6aeskXktXCW2EfYTJ5HJuEe36asoViXT4dqE9nJ1R2XBzs2ZjJ2n8eXN7qYyJiibB3Cm8s1",
  "key11": "56Q2To4sBumLqG7WcdjuWoYQDJZ6RihmeEjYiov25uR5u3kNbjytEfPEZJEx4uXQtLWBe36eU3U9ULeknGQZniHE",
  "key12": "5KJ7dDrU2hukqnV5bN8Ez3yLsTcCnusL9UhXpeaFDnpc9tBVfjeMb8hLQZUroej8TU3jVEVSiHfBAh9JNJpX5FBg",
  "key13": "348uvU8XhxydWuFAejPDUewmp2x3PoytuLDUrdNzMH1Duyf8cjNkZtksDkQoEmSAQGgrXcWARay64Y9t9pdqGnR8",
  "key14": "tbkhZvbDmzEwgPtbciRovC3ajKUW4tpKHJKkXefXfDFkPHRZoVXJQ58PMWgR5EzrM3i6HYA7Wbsdht6JqNFothP",
  "key15": "2c5M33kemUouPDuckdjjkbberVExgxgnutdGqx8L7btQsYvjy6mLKfpgYx5fPMHvsUEtw7whbC8bU7vavxhuSeCq",
  "key16": "Z9YXAFUNoRiAe8P2Cguq3CE976uup7VBt2iUeNgQzc5sTxqSSbKVrZ65RWCXcEUsw9nZrWrsyf4116NJHRyufYL",
  "key17": "4kjUroRQpAHv5pqAQnXNhtGakkEtd6rVQFNwxDwcjTHxaEPRkLSZPWeydCsjLfcE28ZQ8PLBNyzmTExDdWXJXdrd",
  "key18": "5oDrCUS25QNnsqwiW4ev1DMRC2paQaNZ1YQisV542zFdUFyKjGY6RJG64DQmev4jqfwYLLQxcHen2T8NDp1iUCar",
  "key19": "2nYkpvjHm3FEHCG88WdB6fQRjXzZAvVZdJKosae6kNTDWwKeZuhWPKM5Sd4rgpi3zy8CjZo2vUPwkFKEmfDGVxWi",
  "key20": "3tsrgstPKRjgDgdfh5UXHFfS1Xsx4FzszHAKqiPcACyLdRKYP6ecjsAYNf3SKTjCebWhy5KBFbkjMwbksWNFi2mf",
  "key21": "DsGfrX7hqQTmhVMsMA3DirMdFJnoryK1vcnE3c9AHtfQmSmHuxhzC6HRjEP3b4z1a7mnk523N2mqiqFoZ6uCbQs",
  "key22": "5buU4okhaxCofKpuLTzcKbFoBnkraG9gBRMHBiaw1fwKhsfygw9ujNCE2YoWerBvwquKhJMRj4YBTyrh4Rjspzrk",
  "key23": "5uxqdEjSxR1Q51Ea1zhS58pokAvZPqyGufMPGMDShXYwf2NW4BAoFbnDkcHTAoka7wsn38RERN3j1Zc4cZB5oCCp",
  "key24": "3QuW7n52scnmx7xXBKKYirfcdr5YyBZn9ZhauCtpKqS3y3ARs9QZhBMzP3m1UqGtqXgWR6KsbAnbuTYvHekXAwBC",
  "key25": "34JNNv31UHEmujWQTFHwwMRz33QGkoyL14zWpfq78FhkUuKA6zNrUKj8J6DeAm4Jd7hhgF7PjtpADACGdCpRSRg2",
  "key26": "46mnvovGQhCtFft9UCYm8qvjZP6P44m8XN8pvaoDEovoy6RZbbEBArQoLyGe3wUMGeXkswG4ca28rfmH8hGCaLiF",
  "key27": "5hU4wavvXDqxF2zLmg647FXps3jRQqSQmRugWmd9vVb6RUiTgL3UCquaACe225euhiSpxUG5sRwmw8o1hH24EPc6",
  "key28": "oTxvBsTYPZ5H27iTYNELpRSRawLXVDanmS8LcKp686jcrYns1BoRmqtpe4X5VfAP1YPA8Bed2NpBYv1NA43k8yG",
  "key29": "3ejoPLSpuiqBytXtAGz6ScTe7JnFR1N9vxrYwAqYJdpN9aExzLR3PkBSEK8dBE65DqEmQcZDrxvUhFd3ZbE6ybdT",
  "key30": "2amhrjg4K4TCBdhtPK8Kews7CTc2gWCCtc8vcFKpVarVsPDXPGNMM52wYpBx3HqfvhSxmDFoHsbwcMR49JHyz1uT",
  "key31": "3sNCxskWq9yp1HH6xYB7jFChTQoBjEqBhccce9U582RxG2hed7cfWShnxPMNQyUqunZUUWUf2QQU2Xj9gfUm361K",
  "key32": "44DPZLNekKqKCzt2LtEn2pzLKM9Yy1St1tSANVYVPxS4zwtQu4aj1XQmLySYsgcYdkALFe4LT2ypV1aSJSf6Ho5k",
  "key33": "259FpgByU1ikM4XE7Cz7gAfXoHvkSQHoEW4PExNzxzSnxKPhTj8LSX6uAh2yB4C3KctA9yg3XXnfG3AjkFiTn8Lx",
  "key34": "53Uhws8e3oSppC4UzDYLhfXrpuYyZDaHdGCcDc399BAKbQfog3b7hqhad7paau7fbWHW2wmkgpkRVtZM4CEK73WR",
  "key35": "5RoWSGV2S7VvwZKyBZS9xSFUTu827pg4XGPhHWyKFpyEASLWNZFcRtzfCQvSXFBxU2y5WU3G6NMcLbFLhgjVLXFk",
  "key36": "3DSEX58JzdnSUpcuwMHMMsGy5HwZS8z8zbzZw2uP4HjnVyZ3gUjTpekcJDJyqFMJCLtgvHRzYxToPaoRYs8ARcC7",
  "key37": "5q44GbHwoEvsQm6Ld7i62HgEbjq8NL6EXfdGRXGxyhV6bRovtNYmkg1aL1Q6PMj55ty6hhpoykKz987yy72U7zJT"
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
