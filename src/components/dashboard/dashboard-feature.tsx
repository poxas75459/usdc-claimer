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
    "4vxmDQJ2yMzFHRZ32vz6ez1RhmueimUahhFW5TvPcD85xULkunLnUiirNjFNb6exC67r8xF74RwT4d5w8iMa9XnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9bpvEcTQtqkj1T654Qbrdk4jAZgSEXrHEgWk9vvCV4s57dbUHyYDnH8gtwqQkM8NcFdhAjTm7DsRCmM9TJM5qQ",
  "key1": "4tjif7YvVE8aG4fUA4EhCj1bH63mu5Thp1PoT1pNSgPdGk3XoMmLLXvYgk2UBswwDd1X1EQsFmKMBzbB5v8TvvYB",
  "key2": "5psTNBr6TscsHFDrkXpdnUzLbKT4pRZnTami1fp44TLo4d9eb6aVAZtLe4EaJAaENvevdC7uXtsHpPd86o9VFoi3",
  "key3": "4th8GBV4kbNMDFwwEXqRKh4LrHcNAxYrRGRuvainzzikN8pWNWeAxm6DnmBfahutjoEZmL3TA5F3wMm1iriJY1Zi",
  "key4": "2qyrcdmc3kZzGyJvHvDPvzAD34sHHYNsMSmG3drkG1uYm7hSupRUxGN2pKH8ntJdq5VXbrkpiFjorLbwsKGAQdrR",
  "key5": "K4ByWf76329XSb4GPA7RGc35aSYnZDi6HFuQDwJ9XYysG6grBsLTrtgffVz82YknftvfXtQSoSQL5eBJ7JUa2Dt",
  "key6": "2KZTkQrhd6XSfyrm9VFt7FbwT9akEy6gVwa89AemNYWrPJcw8Dvz2XpDJwi6qEnSVDN4tH1Ke1DezbJPdZmnhJes",
  "key7": "2csYzRUKBTKYBKDwcxo2jDfDbvE3rQL2W2PUmPrUZQRmwtaicXzdofj51stQxxGtYMY64z7XMN9xkrWfWdTNfPYF",
  "key8": "M9YV4wvKbEG1NHbMiCQ6qm1B5ZoH6XT5y7dZ2uo7Pfrgb8CGqQYoJq6sZqsNeKu5qdCxJKa8KMnZTkvL7iM4vDU",
  "key9": "3dz2uVetWEaSRofTuK2RVjULLoDCrPcXhNwhMrimUVtXwU7iYwcR7D9YL2qK2gFjwhYe2Gi8vshnFYqJyFxuZin1",
  "key10": "5dQtNBJ6f4xc5UhtJ8pbJR1zBzpSvzE8LS47okrQHrvyWc5VWM7cTExwFesdMikJtSxv12diAscTUysoT1TaSVnx",
  "key11": "4TK7frLxdAAiejxAzCpFoPCgrpiaPs3Q5QJYYPAHJWKZhzasNcBCDG4FSM2TienyrPhA5U5MK9TZTkdTmUtSXCv1",
  "key12": "5y1Nwn4AGp7sicTr4h74AvJyy5ZzGsqGqnAor8wA45pyrMF4foK94w35HrVteKK2LR9TSH9ErT3bHdBGKD4AJC5D",
  "key13": "MKUxMDjcfUa8yMk3K3F55upmFnyQcFMBHWHfKWU78vt1NtrD271SqzUphKyNAi47rHVFNyj5ut9QqK7QhW4wkEt",
  "key14": "2QmneUj4kAH3SMR8JF7W7xgvqkjJFCVWqeZTrv3LgYJoAdhvYKxJXKuWD5Lunk25yPquhrZwC2w3P55GZnScxXg3",
  "key15": "2yxky1gMerZnJo9G1kxXaxw8AgiH18osiFgE6Qzyfs9AcE5ZHtnCsKp4skoALc8hwr65QDSGwX9BJNDQxKPn9sCg",
  "key16": "aSeWqw1npKiM1GB4A14WJyjjTk4yRgY8SvfpRykTYZVtWWP4Pggxuebp5FDe15qGcrvUktFDMF9sJXYj3bmoMBM",
  "key17": "3EXxfpfRRhBNCGjsjVEwBziuARKqLXvUv5CV26fA9R7BENn7zwVEYme6RNTopBKzTwTGgP2tgCbv827eKUC8XTyn",
  "key18": "dak3UC1pN91sjZ1gr8o7bMaESUzFziWPc8HFzQ3ky57RNgzoSf9XfM7e94JXpdu24gJg1j3G9kJBvPaSVRQZSRR",
  "key19": "4sd4arskqkS54jDJiQxp5n37ULS2kN7XxpY1Tka8SZvN4EszvEfvBSEVRUrDBF3CcLm92HGeRUrgFP2uh41HcMdZ",
  "key20": "e55ePGMtaUrEnwLByQ77nfVzaSQSVsqzXmGh51LtGZRWS7yMJTM5Kcr2vPaReLSxJFe7gWmPQRb5eeVPXEYbBsa",
  "key21": "3KNty5aGwhELgujNkV3BYKUEmHexCL9Cgqzdz2qGMHR2fkAzCXEy5kyJLgPPRCoyXJ4pDykwS4GHggXSnhgZYrEz",
  "key22": "4uYXR6gKNSirWruyCZbvDTxUmHpYq9bKAYCbuPEd1G3hK8GoGp4umEtepEudocY5YuaSN5NvGNTNbvyrLnpv1huB",
  "key23": "44dpawgEh5zriEiJnNnam5hu9GWykpz65H9EM35nJfwHnDBZu4HT25Fs2iR9ykrvAadLQFj3AYQVyCGhJWFFMx29",
  "key24": "5ytL8d1is6BniXakVn89MRJRjtqCxVMZ4tWfvvRftxngXqjNxd6xiswSVz2jtWZ5pDbDWwYnZ7FSbTWq5E4rSo91",
  "key25": "4QpWwGhsHpfr3jKu978BwwAKysTce9zeE14mkjPB85T2cYSykWChX65xLPSMjgP2vMhWJRBoMQoBM9XPR9hgRhWj",
  "key26": "2RENdW3yqRZM7vwV2Zg4YNhepTcGHDtSjs2AUh1okGqomeMmqfnhhwK362MErxTB3eRRemtFMsysjFSXMT1ZGGYg",
  "key27": "524kyNexyvDfJFvMtJbJaFbmmhssQz6JiGE8u6trjMPhjNFo5wdfXcPHud3QCxH6ZGgiibbGTqnS7XtaTJjBQPxp",
  "key28": "22e9dWL9e3DrCUW6SfFD9Kt63jtjtGvVwd9jBE1PVFwfH2sdq7U5SWYK4LgRLcawxPvChiLUQPNXeC5sLjSpFzEt",
  "key29": "DxcfX5PkF57LkN63MurkHewLt58dHW3h1g1mwLkxB56erCUbPf6PcrLKGBKscLVLtyi2qGyi6t5vwohEHqUB7xZ",
  "key30": "2oxCYuyw93xPvo9iXyYy6B7mZyJpCH494vtgG7ofd1ahN37nVwbN3xgcSGsApLbDBqhqwQwDMtJy411XB67yucMV",
  "key31": "NtUNfJUknFWvFWgnhdbPkhCzyhzkUFJwiaTKkLYqpAbDM9wtmoe4U6U2PwJj7q1H68tGaStpDDCchjnbc3KRxux",
  "key32": "46iFfEDWFpN7U8racA4LrQUFowUJZawKuNitt9zTH9c89K6rhn9RdRh6YgSpPNDWYzJDGqHQohqHhRB36keyjA1Z",
  "key33": "4Witk5ugu9EyQfzxhnYshDpJ1eKZbycw8GSJ7q3h17XXL89spwPwMSYBd6yKwsT288bkV3wRsBki478CytSj1UCu",
  "key34": "4yaNXkyB7LWVBMz7kMyBFU3dBt4eezbrjj2qzDpLfduThnwbNCKwmyUN53qNkxk44AaE3xZf5x6JocvtdCRcLX3W",
  "key35": "fR6JhvnUGUwrJVzgV2ZmAmHjq1oJVLwgTbjFBxXhGUGmQCn37pByd3vv8Nf6dEYAtaE7LdrETQYYsYC7y2GsJpo",
  "key36": "377DbjKgJCtJhqLfwpwd1RQ9TrgfyLV16okgqrSeE3tw2hi924MNoxekp2kQkZSkJdY56X7NR9Csp9eVdAZSD8Y1",
  "key37": "34bdaNgGU2Pt3GjTpZzMyayASTCgdJiyMjmRpMe5gfAgsQcEAX3mPhcZCpPGNSpTTAS5JbS9T2CPNubg7YXyf7GP"
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
