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
    "5GvdNkwbiEma44upq1vL7sX4Wr8CwQR1dCGiGeS2fNtyJgRRGdLnWCs4y3ymhpQ1hmc6rYvkYi5KrikURekCBoK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EiAZj1QFc8xRMWxo6KaEqqSYwLgjLnaUngi3eJAY6oZdwUgt4vtzLDKuJr9cMyhKPvStBh4Vv1PLjivjrCjCFiZ",
  "key1": "35NYNuwT6uDhvZpYZkw6DLYSUqCeGDJ5Z7t4VRanedRFD5ZHfDVgmfSAmLv3zWGTMuX9Puqby2NQT3BaYosBLiM6",
  "key2": "66dYVum6EhBGwWoCXUYiAwqVpm79W4Y58LVywjFgDFwVWgc3nFTAnCMkt88hGsze5kKfcx58jwd5dzDYcGMjRjjF",
  "key3": "4XY9EFQ9VhTr6MCGNc86VzraqL6NQJdXaSXfEzynNhp61Jfd3kAHcXQHChbpVvxQbQNMcnaUSHP2JJRKRhNZVU6n",
  "key4": "8SdkJQAN5HikpqcN2C6gE5HoBYSNwd4SwEJhwCLhCPqU2PHjrWrGMWcYRytWDJHzLJEP9R8t56wSaFjopSYpAci",
  "key5": "3Xs2oNrahK6gnDdiWRjzAUcVAudJFQTAFt6FtPtryVXCxKz1u3n6HrdgTnREUp2JFpS7LZ2UtoSZovF9EhjXrGo5",
  "key6": "mxc7Y9JSYuaGriU2VeVHjDz6Wyfw1hDDbZawrnSJUrvsX2w3LNGuk9g7tDMd3KYBp2ijZf8Tt9o5YcHkfTukYr3",
  "key7": "3QnzsbNMU8zYmyN9cTyBmEkGDHpiKa1GJQozbPaW88prLm8GHcLqZabMPfpVqxu1K496RpL9XjS6qB6Gep1br2Go",
  "key8": "2EQSNmmqC2Z45xCNX5Tx6g4UFLmDMuwRzeoiHTvSh3RPwp9LM4FMwAZEPfCjakfAwLnjTJjNVXE1RTrMBQzjBqPA",
  "key9": "d75B1AjoyKfiGNER1JjzWX4e4XpTneARh2NEn6fXyW5d5Xz4YWMJ9QqF5f1EF9jS7ab5FKSxwkNbEtf6ywtZ9hs",
  "key10": "2kkT4P4rqu3eD2QLhx9t5tPYBj7U6QN6VRWhdaD4THCu6tva7pRFGciVNt7ReUV5XPPJyPyXe5ft5iTiryqcHcw7",
  "key11": "2kqyGUGCGxaFwvXdMbLTAWnMx9j3MDZYtUdURQTcrnhG3saqfctMUpDbk6fp9ERprKeyicbpbMjoVahfZG7UKBAQ",
  "key12": "GvEnLLo6SFwoa7dMEDVKjvgZhHp2G7PR8dWqQMsBvVtiAvqDrJYfbPy5gF3GYDoPmJhxCDTGdQJb9ymQL2j7Jb7",
  "key13": "5GPLv9RebegPKaoKk7C9cHYSdjQShJ7CFCwGpnudvhcqSBpFeNPfYnVBCt67JGbSSpDRMbbcQtbvzq48HUWG9Wwd",
  "key14": "t6axg8TCaiw9LXAp78mkgt7d2PLWFG3UGXMsYUyz9Lfk5MuYBfc8Rx96B3MKxRbtHndQDyeRjjWcdFKFPkyjX61",
  "key15": "ki2EYUJQYrjERqN9K7r3kzqboYfjtEGbjyFdNHszx6FXfNoUaoTcDi62tQECcWhjjKhNUTfYMKtfXd3wExDFmDF",
  "key16": "5CuBccL6CJaDvHr5LmnRXg2iyWGqXpgt9WorASkVHd5z2YThB6YPw5VykVYzr4ymTQsfkbrs8KV21ET5GuMnExxr",
  "key17": "5pJwTLq5DfuBHAPmwxbN8WkwAEU7pQ52noRwKmXav1An95QyniWF2YDCCRifX4BF8LbLXpWnNs9hsXsdyJJXGDxH",
  "key18": "3WbtdwKfgVUsmoAeMdZ2AGFGbay7YwE72tDfQebvgTDVPQsn2wqnDvzfdzWE6zrgjev58JbAapSBwyj8pGybwpNS",
  "key19": "4MBzS7Jtac69wwJ3R7xZmsF5zUqSvCRcFgb94AKoVJWGWy73ZrD46TC5WkUpVG57Th3r3nfkgTp6szuLB5fPutDG",
  "key20": "5yNGgZtCromp5hVuN53afLR3cngAevy4nZzjBxpWpPvCQZhDEXNdjXYDAz6H5yuFEf3ZJa2bn6uJ33JpCgbKfBjK",
  "key21": "3f5NjYgBjuG3Gx5c41GE8aysZePJKseenVpDeeTdD2swMkcEfLtXq5WXLScZxEZXfW5u6BEtdDSTc8d4jAmbXAS5",
  "key22": "5UtMwJER3i3DjUJo62JaFXusQKFuCtCa7W43nBp4WaFSCT4g2Ni4w1QjzkY1iFzfqfaX1FmCKqPfo8GzdFUXNpkB",
  "key23": "nM6zHgAHLJsCfQCaJLB5mumGsDRkBwQBhjYZojjPijNqsJJxEgT3JLeqvpBcPuhXL4sW45yET9XWT3zHSoQiWjn",
  "key24": "5hgMW8YNQY3Bcq6b5FWFirdKvZikmK2TS3NHGAwHz7qVgeE6vJ4QXA2iz9L7XvRVcaxy8khsjrjmHsekZxuFcd8f",
  "key25": "2jSnZ4YyUfMzxK3UuYzjKLWXk2g5kVmZrf8HuwyzAyyJ75jmTRp97SduEJ3SSsAHs4USMoKTatkhgSrq8ZHzaYX8",
  "key26": "5c2QqcorzsjVfZR7rSTkn3RVpZJJ6R7bBbruQk8v93fMHpB3a2ixz42HJi3JBzeDwHBwDfRLp9hnGDiRJHPEH1Py",
  "key27": "8uckY4L8bqqX1Zh8vXpesNuqc8qoMR9ywnoWykJi5HGjhH9yiYav53dWTSAjEbyRkg3C5jz43zNHU6hVdAQ9v9L",
  "key28": "hNhhHbEcWZhFiHD8dnv3shv6nhYxhrDyNgSQHTodwiDS7hLpM5pDRLwC9vUZGkrDabt1S1G4YMqRtPxMSMt6TTE",
  "key29": "5FLBoKEhePzGwPoFhQLvXnWvQBjGNQb6DUxeCnf6EmfkfkH8azhn9SrkPURMp1VmBDySbtKSHkX4V1AqmGdinTTn",
  "key30": "CGaTPjThunMgRPm2yLw9iudiAb2fyyc7BG911njmEkoPgXpmkihNU7sJQZj8HyNzGi2fJkonBUrorcVF7UM6Jop",
  "key31": "2sPsjpNbCgYHJL6aMsRNZ71YYynuCBe4prZ32UMDh8KG5KTgXNKxNJf5YJg6bszHJZrDUEmvLuAPMFi1JGsmGfRF",
  "key32": "54Hd5FjT7GVfYkA34GCqWdAqqev6po7MaAFqBrZWZccvcH5hG17o82VhSMbSev5kZgTD15Sw9CuFaxwbDk7Tn3vU",
  "key33": "2v5UeQpakRJ28ouj9L4iJBPS5JAPysqZiwE4EX6D8JKw9dk1rgYajEcrG9gvYN5tPe4RUEtkjeR7xXC274CLULbf",
  "key34": "28qs4jicZ2NpJRfA3bGwoWa9HzhPEBTDc352kSWjoim6iKoJu3yyKqME21YVymKWapAgBcRQ8r9d75ghN5TAYUrb",
  "key35": "D24ZsP9FVRfv671nvjEnM93WjmHD22xByhXwyMESJEBCMze9br1QvjCBJyLRTXjHEcRnzrwGuzHjeY23Ag6HXDd",
  "key36": "3imBLVdU37iDA7o3B7z8zTC4suQvKD34JwaojTNXKum7oQxitWePTCsUAU82dgy8Q3KzoWpmTFQKi83nw8RGZuaj",
  "key37": "2KFTbouwCsVV5S6xxaMi48XD2njRTastbCnJv97KzLUjnrLCoarnJaKFxu6E3kvfAkwF7vqEmG8GGnAWUtj8jsiy",
  "key38": "37HCQg2UFbp2h6bBTZjW2e6w2FstSv6jcZ2WvM37wGwdgFUBLgN1V4TSDcXVxnsYEAu8brLqA1Gj3Ts7EruVWUWy",
  "key39": "WeB5PdRHeAFpCh6dDNkUb9ag8coh478YfBeYwvWEasHiNUFJ3gQx7XHb67CdpzLz5a991He7TEoWzihVEoSpqsL",
  "key40": "45qQEq8nNCTzFnt5fb577ZWEZ1Y92nH8sNfadH7DkYdWU4f9ZoWwkKmvbhS5LSvxj8owQaPZ47FDUYb8YePvkgRc",
  "key41": "4swrdwrQdTp99noqJU3jMVaAx7fYdCcCfTbX1Fx7nM8qe8ek7cfnmSk7iqSLrh9GJ2vuaPUt6GVgCihF9yCeS2zz",
  "key42": "5oDAtZ1ujhXdr3dMEAKaqNbjJxGbx2RKYhDLyrubor6jqHFJRK1SDmk7twoqggu87gGVFp4nkmupEygqGXUS2QjE"
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
