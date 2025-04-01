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
    "5Ct3SymXhv54GFLTrbn7rcWatJ312fGxxNh3qu4QHS8TDCDi3upBpSHDn2zpWh6PYrrqRbcz7y4cR72RBLEVzPEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCw3Z3AiGuqTT2h2LbhUpdN6vj9KjZx6WkDA5vcJxZ5SmRAvcTEFXRJispxnhZLU4SuTZxXx9oZE4Q1PTVWx9rb",
  "key1": "2vSHKp5J4AvkbhYY1hM1y1dX184fAMKkAFMdpf3pyLwDZJzTBdVd42Cu8FDqF5s5AQ39EJdjT9eN8JCXGm9WVFVJ",
  "key2": "4s4A1Ne4Hcxyr4VaVt6fhdBRBULnvbbPmAMs52ok7wJ9M7EtCRGwVn9XK2rqo8kmWz8tbvfCo51yucQp3wcWNUkd",
  "key3": "3LfDF6NJngRgtLoSzWVcGuaKX5AxiEb5e3p4zSfCbLh6uJCHYM3oWZYboEAxZvKKHQtSd8WDwa8NAifiXjdhfV4m",
  "key4": "5QoQMj1v2pVxef7igvPhWUidp6J11tcj7RKuQmSLqTmPhZGYUCrrynhuWKpnNyr2pew1W5qeBrvb2GsUqe9jgVTo",
  "key5": "4yv9o89cujSjGvbyRgKZkB3qoagghy83ioQxWYyEsjj4ZffZXwnpLDtWfVDEPz7kykRehUsNDW6HHcMxjhxBPukP",
  "key6": "5GzNoSt9xkfhz161pvZbzSYZADPaDaDPmP7NZshCAFa3qfy4tEZpdVb6LrjJctyaf4jrcoyScDBmGLeNj1FSWe5u",
  "key7": "2XLD4nmrE5cuHNcFuuDmM5Q4MekdUguZSEwuu2NFMNZTnHNuMoSvZzQXZAUdR4k4ZFkC3pWfTU1T9GsE7e9AZ2J2",
  "key8": "obC9NqxuJc1LYGsYZTvmhoZF9ddhu1Gbc45z3w8vm8K8rE3zJoj23S2rXByw8xRg8xiMRFq8NvpsPqZaqFzRXUi",
  "key9": "2favySvRShYFzzibbDWETrL8HDFLQsjWzYvJ9cysjtCNHDZWWmmf9Lmdnv7bx7HviBpK8dAzDde7eU1iJSbgFMg7",
  "key10": "3r9EVpd4YMWZwh4HNm873gZomTXsGUD6pX5RJyb44TQh14G5SxH8bwZe2QzB6bQpkuCarwLyGdgByhCEjFX87KhT",
  "key11": "4mUtbEAYrtDN7XnomVzoicFE3Jb2TNRCBCHVeVBe4XAAreDPnXtivRT7zKSczhxXrU2NQhjyVW5prcRDWAxdqKL2",
  "key12": "4BBretDMDhLZW4FThaCs8bDzjzXKYS1jg1NqdPMkCUcQxRjMk7LYoeJSoHGBZQe7eeDwBxS77rjV1Je2ptxSf6dq",
  "key13": "5E3HWYEYTzV1n1qm5DTg5tohJ7RG7s922T3f7LSTBx6pMU2LN8qzLkdWEsQ9GuCNumMRaKaiEpFS3JcRoc1u6Gr8",
  "key14": "2HSxpq371829incinq83N386uCvL4NbbRSWfLvoE99MFyvD8BDiNrrywfHYSEgXVUwDoa3hJ3ccB1hy7nicTftug",
  "key15": "3M6vyMgVFQNESwS2JJBVxtGR6SD6hnLCKnwf4kCKZmCipgGGE7ih893iH6WWxvTASNYmXkBSTBH36a481NQ8Z2DD",
  "key16": "5a7UJ3iNBWhruaZoatC6g5my49zW24EiJwUDdNn6JKcFmnj114BXw1gRhwn5jy5S8PQPoAtTZiMZzi4c18DsS3cB",
  "key17": "5hKNs7PqdJzFD2qh5616hYgyLDQMFLQ3Y7SW6tkyd9mkZdbMxg3g6KNLa7MBRUaSoWpCsKZwfzD6ksNjZfeLB3XK",
  "key18": "61kJN9i5WBJam35sc4ypCE88Kw2w6LyB92hN4RMFYBnCWsjzmZMuouML5BDrdn7KFScmpohJiUW63Wd3g9twFPLC",
  "key19": "67bPe52DXwFADPFFsGT7WjgbkVi25q9QiVGmFtGDygFuboEhB1UkKcfbpDhabChYX5Q21ixtGq6bHsrGuL6T9qjL",
  "key20": "64JyWjnRf3kBDGbUxnbJ56dQSzvnCRfaD2dUiPPMwsszQzgNkp5L2PP9N4GaqCDJxsdZ5jB2jqErJAkFSYmfmt82",
  "key21": "mHdhpLQy9mf1qQctu4cxTdq6qV8jAhRuUK17XbxDkcXwF7VWHMRzorXQej85eWitgNvprz3DrMUQ8MPurrwTsMA",
  "key22": "2Q7ghprsHjRGoRPjHgt3GLpnzXGFoDX41s3GgLyzS5E3U98ZVRjAzMykd9hE8U8StHMyPApuNRHGsY9JDcBLkb4U",
  "key23": "3nW68qMUBoeBkF7e1yUBqHSMfYvDwCnYaf5XE5vYtNWBw21MVLiFB73UKcS9NH1Lr4M8J717uh9KVigPDaaNKP3z",
  "key24": "4bidJksGU3vaFeg69oLFejbEeoow2F8gMWKcQnr2F3MPSdu11bLoV568eRYMZsCPgxUHqhmMyKZZ25dFmuDK9NFN",
  "key25": "4nisKiTXgmUHqeEnVne7XhxS97rn3nnZnrbxmWNEmYk4CKd4XaK3mzkFWKH7zgY2e4FBu1byuYkV9vhSqJQeFr9y",
  "key26": "29HdcUyS9x2TGRCa4Cd8yQhJQ1Vp8jtEZr6XZi3AorRFJ2QQm8mCuma7E4DaHqtrAJtKGK4WSwHCrGBE6ikiD9ih",
  "key27": "5KeFoc6iYkscWnPs7S6PSHwpFCpWiDx1Z7HZJ7rEcFfqXSQCMqKha6zfihsNdPwa3w5sQ5Psx2EhYTCUHqSgT1uq",
  "key28": "2BapM33AgRww3sywRZ2gNkEXtSm8JoBvB8ScQvn6zgyWu73tE28fVBuGuWxaZZfy7Dd2UkszCFnDGsYu5k1jTpLn"
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
