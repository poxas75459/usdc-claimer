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
    "u7ZhWDjcjU1qUDN5NgtGGtDH5P1LKwpaS4PNFCCSPw3uMNfRFRLwy6qeePwBvtvCfoUqDJu6udmZBLhdq6H1XRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLzfiJb4iKhHTPjhwuaptZ2XByGYACL8QY1kwTMz4XaFUjC8nSrwwCmdrsTDrmfngaXfgSh4qJpospyXy9vBsBH",
  "key1": "45nc5p4wCJkDAy2LgEnifC8G3nvm8hAWqZNhgMwJ3Zt74yT7S8qiBWYRg1yciX4bRNNeExEFkkeEW3w3skk9TfeV",
  "key2": "4FpnvYWX8rBvebEk8dJz9jQzzCDWf81WErgLpps4mY4ZhNJ9TfJLWMpxjEqZkXrZdoLh1J45oqKHUcW4Ky6F4uGc",
  "key3": "2JheBjeJVrHUyg5Jg49f2eTrUNrLUumkEAouxdp1y3Z3fF8VgXVoMbAggyb47RDPbq6uWAEAEF9VM5xoxnsfDEQa",
  "key4": "2nnE32JnsaFMKYLb1jdLuGSb9Cd9g5XAeaQK3dbLMCQBM2FGXTfN7zJTZrLdduDTZLHjrmizxc5yj4x9dfvchUrW",
  "key5": "2C943fN84zhW2neKTFWQv5e3fAJyBhnViFYBj2eoWn1zmn6meHuUQNyBrCkdk6dj4q85AvdyGgqXnpwt8F9KpB13",
  "key6": "3KXFZBCKKhGAibFenKgus92KkPvMLGUKpApk69f1BJvjJZoJQRDmpzzJSQXWnHWhRhGaLsxwbZjVK4zUi9afzcYM",
  "key7": "5fDh1dCzHiQo7GUZeqRwRNgNMB7XENFXnSpA2mmM3ynwqxSo2eSGKhZvU8oMqW6XMLLXU1FcSeyLbc5ctY8k6VWz",
  "key8": "3ZJrbHwG9yjRc79GJGS8qUBzp4Yv5pPgL2DMM4BNuR5S6AqgXDPHX6DFpX3ENMHjCbaJz5PVwWSJiWrda2cxx1yZ",
  "key9": "5JV3MZrSiwHMTjoG1evsLrh9gh4nUXzJHt6nSzLDNwM3Jq1xB6zCcYgpHosrdNs2ydLqkCLGxn8FvfrqbSSe9ggZ",
  "key10": "4S7fBUaGhGVRzzvQwg9V8EYz6LhqxTgDbYo9dQAfDdPNwt5TEzi5rqKrNrm31Whsrz2AJfUhAXBK82Rqe37xmmkU",
  "key11": "2bEmESyFBaL65A9s1VFtTYmbKCdUnG7aiar1CChNCJg4s282NjpBZufdcUd1kgy62uVNwGmTB1p5oH5yG3u4KVMh",
  "key12": "5C1zfBDRnKttagJU9cHG3ZKVkpWgktrvGbpSvNwCFj8YUCejcMbb3az4TSnCxBaqadfmab2AZE6sjgo7Bm8R26f9",
  "key13": "3ognapqbYbuLcWaPuczdWZaGmVTi39UVcYVQEuPvgsXWXn6DeUHaTEjGP3F7aKEPTLshxfkPLQ71Pzdhrb7vF7Wr",
  "key14": "XymBqDvEkBPNN9fMazpzEg87Wpn79QjPYZvU1raH2M1LfDE25XsSxYTs2nvJnmS6d6v8k4oBUUJ1MMsLyp5nMn5",
  "key15": "4pL5zMC3fSUuUP5qy92Hq4pRAYZxhUohiweTRfKC71NX2RMGRy1PQm9tdfCp55Z6aYaF8s8jdEENbXTypTnQBx5X",
  "key16": "4jDj6qjn1XmCyTNGrrw2KUB4FnBkWoW8NbiUkdEtTB14VQVGztndXEzMb6a2GFo1XEqGw2ric8Gp3CaWJydEf9Gp",
  "key17": "fEaDkhVBnMKmoiBheYAftt5d4tdMM2AzLsdZMeQUe7S2X9FumgFSwaCkHeRxwAN1veF8bHkCHygQuNoqJdfXa2f",
  "key18": "5BuPh7D2sPQRCam5ZpK8qA8jmTSj6danrP6cHmh56znQDUcgpL7anUn2szco72WwYt6Sb72g6a7RxyNrVpE92okU",
  "key19": "3JCHJ1MjCxrDJEnNsxWjkmH18UYwCDMa28EfzLc8GXJw3wFRXbroZUeDUEXBVNjBdZoLkeAeqWRhqHmPGF7eLu1c",
  "key20": "3VGxn8znFUpB1iy4QQMaJNycdvfSddMpF3ReAmPNkoJPM4gJFm94s5zNbpEpsux3Z2FbGQxHnRSDDL41pqVYngjS",
  "key21": "2kwG4taUT43ge7SYAUEx5N6fW7MCQGu82o2XZzMxq3wcuwsKqfjTKirdGq4kcb5iz4zQVVwgcvxgvgwJkNmNsJ4Z",
  "key22": "2dXsTkyoFh955aLGuZUe6oLZpoZ3cryn83bBLGPia6ZyztprpY9XYS9rAJGb3LiqsgttXXbcEidSYTRK7TANkgmm",
  "key23": "YMLJ62yo6hAgFTFR1dFSCmofRYQrQsHUVbc37bXbmxHppcJcjCbZkKGN99eRm7pChvRkJ4UvhDePDnNtFPQr8pt",
  "key24": "5TkduCmNRF3AEKRPGxhmMBMVGDki5vxH2kMPW9VzxMAkxKTGrHJpG7oUQshUrSZrzrSCtgEbrx5tPSmunve1uUD5",
  "key25": "3qpec9WNiSqvp5ngAtJDgHK3i3uSQxCeyW2pwf8KLRRmZds67swUFnSrKonXJ4C6q9vbLCtyRnUUSXqEL1oEWUBf",
  "key26": "3xANFC6MbcNot2kUSM9vGw1RyG5y7HNFChhHMfX5CthcpAy8FRsAH2rCra73sAfm8Y5W4abVUAgSjgxdJ4BSUdSx",
  "key27": "4XUECka2UUFfRTgH21NzRNAU8v2EAt6XUfPvS6v8cbd4qW6Chc8TPBi9dWGGtN9fKaqqHcRznbQqAr4nNM3vGqEj",
  "key28": "4ymR3SqL6fHxmm8UtRTdn3eD82TCrTA2guZyHf6yMU7p4DtVMXTwS8SAm1H2opyfYZso7caVEaAShzMJeeisxZt9",
  "key29": "4zutH3LV34Znz3iN8HFdE1WXhPK5MZikdpWfqGaSdx7KeUMAMVZEkbx6QUQJzyCckAFYaAdzZovecmRvKQSNniHD",
  "key30": "2Q4bcPzyH43BdU9bREYZstzYDZzo5AZkCY1ndTXjA5BWmkjSbcysUrHeCoyovqpz9XniuNMXo8PkUK7biPn9avYf",
  "key31": "2yGRMMFeEoyDsKZsieTgYrCxwrJEdTJYQANnC1PiSCdBTtbxnDApwQZz2deJd26irvdqya5YUYWsso38XA6cAqPK",
  "key32": "5vRXzo8YYBmbQJhgfrEyg3Qdv3ndkx6CGNJQUwSm4i4yFCs5NnkohfhPD7FSet5YqMLs3ys8eQugDDryMGvqMChQ",
  "key33": "3uaFJfLWaLFCkzwXJXvxqV4n5SPiDuSUCAYrMHc3T3maSN4JmWsdNrNFUskn5UMkpkPPx4MaEtUcYNSg1rnR21mn",
  "key34": "52ZUqZvcXtgBNwga4aeD1bHREA3GSxDxb21CQSsDvmnZPFFdL46CKVLaJerwKLuzoQ7qsKRwsXW8T3DgN3AA2gZd",
  "key35": "2CKF6rKGaX4ozAp6PbhXGyUoUCKTUQsTUNBKP1kjaSZ2SFxJ1Xi3DL9KYt764RaAnimKX1yf9bYfX7YSfTSpXKL3",
  "key36": "6yUb9dSqB4SJ7kxeHZ6jWX8uSSH6wyQJCHJNKeUpbVHW9bPZQvehKdEBPmVks7NxZ7Pk2HWp1AmiLKHyDNJA15r",
  "key37": "Uimb4uhvbzbMDC1kVCyDALgc6xuzLH5FgccK3VXibnDR4sSaTtqkLUHSscpkbbGnwgKutpR3Fhi8i9crE31v6TG"
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
