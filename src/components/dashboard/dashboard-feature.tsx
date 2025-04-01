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
    "4dXSLiBLf29yFfAkuwHsuyWzjDikPj9N2kAp84tduMUwyzwQVjwjNQfWt7RWJ9BTsCVAtcESY9t32dJs4FzTVqGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWdNZgeXgBS8UTeqmLHXLJVWcomCVtQ2F2wGDmhxptv7iSmmdr2ajKnxc9TV36kiedTuFSjLt5PmR25rhqMMU9d",
  "key1": "58So29bWmoVLbAxRSF99q1Ti8aRwas8eGsc6g3tiGC3bk7cDgEYe9xsvWFfcHzLZvriL7jr1pRz1Si8E3L7XzoVC",
  "key2": "65fc6zgMJnW4yV5XCw5KprzWLa5XDpx5jzHXSiuxJzHuwgmoZVWuSHcakvxGtxct4fkXAu8Yy1WMo2rp2Z3wuNqb",
  "key3": "3x8SMUc1iNKJ71WZmSfo9U9KbuJFVNA6Meyx1GyWrvFG6zMPKzkDciq3PYDRLs5DFTYpamxoA3ZHQoa69rS7s2Es",
  "key4": "5fBuTa2AwNoGgd2JDyHCGow7UkBJZceMbvFQj8vFiQj5FuKauDZQfcxpLHkNQisYczNiuanwTRsA9KWxQtseb7jp",
  "key5": "4yUySg4nbJqhZKNXCGpXRtEKGoRpW5rQCUVQzcpgGZp3vif3eBeenoBZcQUB76Ne62ojrPhYk8dNz9dJuHTFpVGV",
  "key6": "4n6WGBfJSYpZyYBpj1xJDxTRNhS25LLjNP4FM541eZjwCzCnRWHvZdFsYniHPEPoKpKAG4UPUqG2LCpRfiPsRywD",
  "key7": "2pLPnB1AWmJ34CHKnTJHfw3unQP23s51dcX4fZ1ooiRQhBCzU22aLiCBp1Ez3NiBzHqkoKHnz3ngJYXF8C9X4gKR",
  "key8": "41Cju9rWgrQFXX5CBEpm8aAT66ELDi4ww6L9jWxTQYDpG6jqiZPUQfqSY9SBZycNu7y2Z3nKjs4YJ8MxWY14VQ7r",
  "key9": "wXSRiUkxVbYsNVRmdZ2eWvSBACFaS1y9CgcQfTGWNmBWbi4PSobqd6mAEX7PgkbUosRWUTG1ZdeKvGd7Qcvv6ZP",
  "key10": "sK8K1qGkUXJ3QTktoXfEfB2dXwJi7W7H3zS4MF68Uk8PPg7sJ1dVzFv7TM3NgNK7gV6uwXbCRUxXvzuDNQvt2wm",
  "key11": "4rgsmQMu8y4uMGeAUcGKPpsa7bsZEWrJC5iQtyhEM9DLGbboEPAknb9F6M7Uxc1c5ptwprJwjEDbYfbpJ73h8fBD",
  "key12": "3ibnUHjPyFPepgRjZu4Bowg3iRXcG4pgsn5b3as5xLWGQ1sDLVzNfQrxnmRJF24dkSQDaKGgBSHbSskSTj32mQmT",
  "key13": "5kQGXNhBRUvVRJ3pe75TTbajKZ6q46Vtngowt8gSqSpLq5r9Nejdt4uUc5mLCsv7M5UQLGLpd9SfW8i8BjWkbcsr",
  "key14": "5RNUDARHnE7P9vee5Kqc8KXTfFjnDXQcm2P5q7Mhursa2ty87my7cmeMCR14SCJr1um373gAS6oTqjUTaundfGaf",
  "key15": "4AW5VEZpvtPUh3H3yctg2mteZ3iY66KNTW5ePBYFFAewaAL8UM1YRKJhJTHQBK7JnffQZTH7HXFPNXD8zEncTpnG",
  "key16": "887VF1gSm31Z2mSq18sJ6L8VUTgGF5auKmDh8bnBq52CP3p88vp53fASVHfkW3fvuHsnsd1HBFvduJhEAANfuQu",
  "key17": "3n18osTFMCuYAyFE3TvXmMHw7qEkz86XZDqRwSfu7KSFgUmNgrmJgrmRLXvZfJcwCb2u6XKUBnaSPrLZQpDvC4MF",
  "key18": "55Gjfu4ETutkGTkPjtckRtY2NvNaVJjueZFHYBEjzG2VzyLpeAbbhXGgshqAm1XDXhc87dt9tFau7QKqTZArZ1rm",
  "key19": "5YwoHCYV75qrtrD7Jo3jycAu6vudPd3HFN7qsCVdV6XoA7PHrFuEYG1R5wZUPAYVn2hCXUi5CthvphAWofW9uoPo",
  "key20": "tTae81NWWhqpq7PqHsy4YCYmAEHa1g7aJt2B13VsjcrCU9WehWpF1ryifoyHCMswQAufiM9zPGDqguePWNdDy9K",
  "key21": "4MYdu1KgUxgwkSx6nBEVujhj8vyUYewQ8dLW3RCQuXVaW1btP2cNfhHUc7CY3bAN5ouZ1F4u2doMtYCz8qwBAaBi",
  "key22": "4WgUy7EznAxyZgbBFTr4wENNNi6BiqzFMRFmFQ8BUNWbykjbTqCzJiWPae76fuweEeuNP8XdndAaCiBk3ZN8gJ1u",
  "key23": "4NGXRbsYBjBErPKVR7mZSST2dsUxA3hQ9kbCnwFG2ui62tj1UrUPhyG2n244LoKYLfMjhL1VmhNogMsDVFiySEfX",
  "key24": "2SiZF2eWyDh4yofoA3hdor3N1Tx3rKskuXzsuzQuAvn6ZrRFyNG2x36iu8kDhDtQL1ZUZkJ4C9ino4gVBXqeNLNE",
  "key25": "42mjyNNZkzM1PpNHhCzY3eV7zDpcj9wVSv4KgE7hFwYDQGUVHfa6A2rR2kaYVHYf7uS8apaJqGKSTCr8V85VbqkV",
  "key26": "5jmLG95gtuGwSWNrSVMhShs8oNmCN7ybnTwkmnsaK9BDaTvVjKxya5swtBGpDurzctRiGmysVKddxiTscCk3x95D",
  "key27": "5sQBCSUKpAnMdvqrSteMwLfSjjYRY1CUfSiFLVBh56jBnRcv58ak1sgtF1Fd4ZHpkpMGSvA8Kr2zz73C7YAY3yZS",
  "key28": "2nnPR7JHj2XhLeJRSVryLq6cCBj1SUVzF6onggRBcpMSmg9h5L7ZUTDFXq3Fa6W8F6eq6CWbJ5pqRyN1yp5ZW3LM",
  "key29": "3Vcc1yehvGAc46LgtEtHUqWzzz3T1eFfgZHVydB8ePC2PAfsio9Q4yjpDBvxMQGDNmnatmW5GuXD7WvcAoXF9K3T",
  "key30": "j2wrjcuyLFo5rzNVKwgpfZDFJG4Zp7RebRjGNvKXqE5t5LJbBQgfhGngrQLJinKoQEb7cKEjqrAPY2FXbdn3PT5",
  "key31": "3hgvWEueL3cfY8otnveCmtR373yz7pDjskC212gmK9F7pzqBnzPjE893qASi589DcTodhMmeTQKsxRkxehx7W7tr",
  "key32": "2exaQJuXfChfEggk9TLeNso3Cuk6378XuzRJJ1tngfCmmhnpsr5YadVvqFZs37W5ahDsC1HXqX96eMvTE9RB2ZVn",
  "key33": "3fVopWx9681CbgAgr7ZmGCqgCVNQRhm35eNvfEPbttvwcCmo7CjWEjdpMySr6mzaWXCzoErt4FGJC2PFVnFVerLF",
  "key34": "5DNe8m49DkD452pz91W2GNj654hq6LQ2hYJvRPbAQwP2jgmsyPGR9CNutvexWtMM3Q7NQnxiJyhHeSMUtxh9RmAp",
  "key35": "4YzzVYyL4fhJmxZcaUWaBKCQ7ykDrD1X6AgXS4zjrTXA9K34WM42Q8Da1CPWJKRihi1B6ux6vZaoHyEVajJRLjso",
  "key36": "2n4obivvUubHdGDtmVY8K8dut2jARSGVdvvtFKJqq6Xwdo1DEsiR9vNVAtahDzQsQmmeeRao1bRFQ4zymLng1KmQ",
  "key37": "3m5TpzBxGqnqZzZeBhWK9M1YZ9kQcr8tv5bsdtN42U6qJr1Km5BjXoDH4mzBGfjFZKzqfSNBZhHcvR4at4sba96o",
  "key38": "5LqrKuhGXw79yLiUzv9iUhsCDvHuzf1MaVsrABFzM58WUSveMifGt1WdPQW2t5t1QQ8bqxWg8zpyLTNYYLNPfR4A",
  "key39": "zD7aigp1QVtAwk6zT7pDfdavhV38VGLL5GCwJy8FRDukAh8fmsdJnduHxWh2Y5RDrzjdTD25whjTh7Scw76bv4i",
  "key40": "3dD56J6iVaJTeWuNe5W6QfvdRY5WAPKKH1PwBfy98c39rxE3iHs7wjcQFWjag7ZTDHWuYbgbhPCTx5JEPUASyAy1",
  "key41": "24UaDqmw8zES2bjYsbAqAvifN2bvVgVPyqddis5HNrLquT47hj6mNHvAkJNxrmrpirPb7TceF5EDyEMgrpmre2rM",
  "key42": "PMCccgL58tLyJHgzj1tUM2oYTzVNegoAMJx3ASKohKTq4xn9RRn9y21vVvLuWhqjS5mAt2MJDL3Tqaamo6UiJ1G",
  "key43": "3BWQmrYwUmLVQWwCKLBAMBFEgG8c4WfuNPtLaEgBnqR4r5q26ZGfBUxNEzmzLSuNZXKfdYZJE6xAQ6dWCLd941MP",
  "key44": "2RsD8kywX44swhGgdj8y2Nc6XvFKkuCoFk1DWKbNR7SJorz7q8F1mPzQttGRTTKfYh5x1QgmnnYXn4Hjgg6tiVbv",
  "key45": "BA4UBBfDkCuxUaytBn3U4RodFWsemwGhXiKTpUubmCaVgfnZwfqTYu5MLHKbCJ2U3hjEDTPCvyMQviv7B3Yosd5",
  "key46": "2y8H3UKXqar2bnw2M9qCSC7ipigzjznCTxX1H5FEFc3wvDBehNXfwAa5px5Ey5QVbN7SUs2ZkrALuh9wmxBQvq2P"
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
