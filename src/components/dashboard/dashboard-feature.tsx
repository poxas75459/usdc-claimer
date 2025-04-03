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
    "2qNRS1pYrSfyzeZ1KsecxdH3EirnbybDxAca8pnNLK9GkFKEfWymTghu3PsfVRK9AP7hXyLVmf6aYKJtb8g4PbEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6223yvAzMRESVCpWTPmTJ5haWshUG7Aq43tNMRcWuy4JjLcbD2hEoM5DQAnZxWA7WGdkyvQzKrc2Mux1JuhUB7vn",
  "key1": "38ymMFMfFZtnpdBc9JR6W6QvzDPo1ZPk4c8BTmHZ2JZ3YvFWFCcPC1o295rUFDfUYfjNxkBndyduJk1jZ4qMkRnj",
  "key2": "5rTxHG2M9G9anC2EqofN8uaHCtyEFYdfow4dWmwEyWA5HhyhdS5SyEwAhC7EYgCivXt9wFAqJDYrqZo8BCCj35kX",
  "key3": "aCsX83wt8kLNmAqJXzCNnNS6LxtpNtiQFAWDDWp3LcBeo4djUv9fe557GPV29xRMixAvCWztpZoaxDFD3Y6Gp5V",
  "key4": "3uQCPMCJnnrZYfUW8JF8myYghJodnwrC2yQkh1feA39CnP7Nsi6XTPcUgTveieptMBJHzNd3CivcLZMwBabyrpwF",
  "key5": "3W6C5z73KCpcMKGdmy3BJtkjq23TdLYgom4iC5h9cWkcJYFJ8zZYzEr6jMKfdQ6Dt2fFEvQt4wsHMjFWNMaxGPih",
  "key6": "XUYhs3T68pbnHtMxLR1F4wcMnJ6bz5bZFeiXaSCmkavuPh129CPsAFx4KtFmpdpE6XYhSiytAKXAve7tZ5dyzWp",
  "key7": "499WDaXGfnhw1iX8R8xND5ztVRdFF89X2G4TkyLtMh6BgV1YBmqRd7RtKMS2PiEtJ6aWeUStBgYmYaztfxHD6gf8",
  "key8": "662xpqcxr8ZKvBMWuF5CYkBCn55HsNFR5CzMPKEJiBjKRWDiMj69g5JzHk4zRLEoU19LZ6MwTbLXk16rwQeaGNuT",
  "key9": "44iGgtd8HCZqMhWMfkjJBPf9RBrQYC2TVwCmENAxnYpGHGnBtXMEaDgY1curSoReGZYPuQ1DLzQxMRKx68WPwxqN",
  "key10": "3aLxQVPeejQP3Aip5nEiYsBNoUgtvMAg8aKQvY5gQxT92R1WWCiSa45UUbTHnj3egzxC3tNQctPapJrFsDuaXTXU",
  "key11": "4tb4vqQXbJqGim62Vd3CJmMoRFV5o2z6CwdAx2j4gif8krVsx9WHJ5UfcJxLb9DGfU596ajx8YiDhPJgP1Qn2YiZ",
  "key12": "4uXm9Je7P9Q4zMQqyt9fSqZLQKBNZpeYFmUxoh7oX3a3oP9CgjJkcwmPDN8wePgwpUSU9F7YTtinXcYFsvcSrLjd",
  "key13": "4h1pxr9awnUrkQkzA461fME3p4j8Cj8qMp3eu71vseGFy6g3s2VNhN68dveym2Hb8vcSVXHwRCZFcqC5Dj5b7pp6",
  "key14": "51FQAFpjLrVyJQ4BAbDuSzBe51xtgXL32KR6UsSyfmqjX24Cqix97FFWmrEqGTQ55D1tuHB36NhtzqvWD1cG6QgY",
  "key15": "3oExmAedyLE84opy5aLizwKxUMeFYYNRgQyt7BE253wM85yLA299vQd1k74y5HnLREiAZVvaJPFKtNw7969CFriW",
  "key16": "5sWwKa3cAyv9VX3diZGpVFqhQP1ioeCC5XujrL26wBGuz8PRPamTpGhiTrMs7b4s97TsyH4RNRvzTNZt8iCBdQVS",
  "key17": "RdYaybUQ8Lx35bcwK7RqWzb6qft8AQaY4RztxhwAChxg2DADNEbHqXCK1s5i4CiPGbiwdSztVsqNN25xgV3c4AH",
  "key18": "2THxy1XZdVT6BmYpQ9hWTfbeu5tkGgFH6MFsxzUYVQF9RVZ5uCSvGnsNhiJo3wuXrYULB57VuJapyJB1rDCNpN41",
  "key19": "2PNSEHYVQiyz5MiBmj6hxuRYziuMm2atzJNVMRC17iDEbbasL9JaEDjaegHJMcTCtqLfLT36tvcMakFqFCiTnXdQ",
  "key20": "5ZgXc2P8AzGULGvSDcktnJRyPJ5pZuff1yUm18yCVbfNYbZbAa4ivmt7KB3FVEbP5LDThhDeDGcqqy8XB5N3WWJ8",
  "key21": "2sUd6SXPwKTAVA45ae7joZN9o8WAfqUMidRYvW7XZjg8oJ6uS42Crzi2d82qpNmzHK2rpcc53Bw7iY26Beudonrb",
  "key22": "3WyNTkfVeZN9WEkZBMb2HSei4UnZgqSxPubMwA1bbrZsB6nhfzdburpEape3RkVQYp28wTeqzKpNyiKgpWEuwZBZ",
  "key23": "5bpbCk7GkSyivqh3ZEmADxuoXxpLx8cbMvXtJhi2mmRNt6S7RuxVUB2tBLpF6EPu1HuPKLCTUtGTNoMTEt2Xz2xs",
  "key24": "51qU6UghZjtvpGiBNpMcFnm5QdZjpnQwgaVSw9QVbCx4snaUsRzGFt1jyoxz1XcFgvUQsQFJXD27m3wKqHmvu4fQ",
  "key25": "2Hi4411iNHTwTMzZrkbx5ieNvx5YyY4NpAjtaZFXn7kexyYL7D4uGKG73Ma4jpZ2pzZTMnpti52ytnPLsu1QfxDw",
  "key26": "226NE6BYtLbJXVewaHzSB2aoJp3ynmHL1PAhzHBDhwDiK7zuGYZQcmab15PRLxSKUE2BdWzBePNkKEY2VuVSYULw",
  "key27": "3kg8rYnWW1wAxiY9HMW2t4UC2p5TLkPF7h49RZjdznsjFeSaadmXo7HuVcVk9AusadmdxgALPFgLSK8vVvpPZHWS",
  "key28": "3Wk4Jz9NPbFgTLjxmU3D4hKtgZSKZtP54V4coomLmMnWj7tpxcgecGKzZLweim8o8TRPsVwAsMd5Y2mwDSmPLeth",
  "key29": "3H6FqyouUA242ZFfQj33KnPYNk6ceVWXCwN4DeSEyZpqxwdTkowDWvsn6j5ZEKGY4tj5m4qG5nW5Ey2KXBeY9CNE",
  "key30": "5MZQTr7jQdPPw7CfkRCAuyE7Mdfp6KW6EASYH9R3FyyT6KA6T7mMhP9SGqzKfvz5fMeKPya6nLmFrtEo88iD6gxK",
  "key31": "3NNT8Z4V6maAGqemZtqfKV4s9wzN2Grp2CVxwR4nw4JSAbdWMQ5gMrPAeRrupZvmfS1fQW11SXS1Dmpwy4VX1jGS",
  "key32": "RiuumviSxwtL1yth789jLSyBQ2iMoBntfiZKtAVdmC1fnonjRq2dhJFrpAULRfFCepcmUmqBbPg6sRn3dgSsALn",
  "key33": "28XmFYJPBy1ffpYpg2dWrT21biYhBTTXP4BZETjqbijHQKJi3mre4BXgBD1k5GjGgbNThTejvJ8FEWvJhcUUHVjY",
  "key34": "2orbCrjxTRJQ8LdQU6RkrifoaM1LW7TPYbzvqMHywqfMBJJwvAvzguT2rxBqSc6qYkZZ78hx5Pyk4GYqq18HFh45"
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
