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
    "4J8PtmfwoJtAhB87i5mBEXtAm73VXH5TMzEPv2YMeBC2ZjNCxDdXQRTaUL4hBvdsk7egmDGZiAZXjc4MVP2PeGZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S85W3vwSBCsrDYLEcARZzVaZMcjv1uoaeFwWLMBVJ39FWE19PFheEfXogV7ckcFYh5iAaxyaBaxBgKxHjbiLxFi",
  "key1": "4xihW9pRE1istgrsQGR3vL8eA1yzxHz4AmN3Pkmn2tWwxai7QiMSD3phqQbFZie31YgKFaYW3Wtz9r2EdphtukNi",
  "key2": "4WKgfsU1bNYHtMkey76T78BHnFaCzWRxL1jwnPfNwy1n3m6dcN53xHW1dVBpQ5SJ3UF8pU5HqA9GzCvGYSpytb4S",
  "key3": "5QdJsy36Cruvpp5KdYsqUvGNhRqFSHqeK97onJsnrD71xdy9hVdnsaNBNiE1cWdHmJFWbWgjhEUgWCeJRqBBWxfJ",
  "key4": "5VCHBcv9hbgybewMNSKQ9ad3ryia3GFcFcdnBxqys4835R3eFv5DA1mPQPtdwrXDK8w3kVsvDpKBc62qQiLXp6Ue",
  "key5": "5XL6FH9hYgpY5HwAK8gaUFS6pLHnyqhBogXYb5B7yxSSYY46E92x6XJV6omcgxuzPgpCmD67NuHzsq7KipapfkVM",
  "key6": "3qFDVe2wTYCvyDXndDsdMEfqMTnMu5A3Znc1qzgJxC6xmtDj789TqD9qVXzLZyyVi1LzbAH8Ny4S2FifVQcbinEJ",
  "key7": "2P4qZoaurECGN98fph6kdgw4XNPPfXETP9S7ETgKT8TVqdpA96DLLGB38LqY7hSmhSw7xAbUXMBJPA1Kn9A3YrdX",
  "key8": "2tpDp6emobCkQefwBDLrzEzu7GzxnswbqrY7pFWw9pTqLkAt3pYAr7hEYmD3gGfkpnfm7erZL6bZbixP7QGZKUm6",
  "key9": "5PuyiomvGVU3GYQaJuoCccEPWiRsT2uCRoA5VfGKZpuXwfmnpSoTy11vSxExXbKz2yGfBRwng2PGUD4gR8A8WJ7q",
  "key10": "3fnXLfcjW3ibB7LkKwCGpZhfQDKmgTE4DDXyWybjoKyrtXbp21BLN6njow2NUbb6bJuwQAXT3DL4smNgiKXx8ULf",
  "key11": "3B54imDiXn6g6EDPxBU73tz35eiWrhAfX2puHCXrFVJfDCwhYjKNiyuZjCtuirFENaJrH32CPUCF6sFctpM75YYD",
  "key12": "aF8zndtM61qBfLa4VtdvwvKvbZuYN4J5dcnCgLBHwiLAToqFGQESK52yANy2vs9qjHH3EUrPZNc6X6ZFtpoUM8t",
  "key13": "jkdpAgVkNesmEMk7Mctikpnk3UUnzD6LGJYo9prVwqeycnKqLVrjNVvG8cGK345oVa5cTDbVEk4oet6roZSd8T2",
  "key14": "4TW5n3p4ZnRMc5hHtioskx6hYvE24BUW8eAMhYQvVza85jHdshkXrwLq8qXPHryU3cZLccDU3TWpvcmyKLkEqNUL",
  "key15": "27E29HkMf2ALCj4dyh8Uype1vKifPnq9m7wGJH9yvvPtLqpfiyacth5R9GEwBhpPrtSBQbDVZRVXi4ewFKf7i7mT",
  "key16": "45hkeDuW8GSqEt7PiT5XQaJtpPxuUE8sW9aoYiPAmVTcpuNt8ZFhMce2oK1BbsZbEL4KK4wq1jkB9VzFwnoxFcET",
  "key17": "5yjAHsCz62urhAo5ER5PSJdHZCxEfkZe2G4wpNRWmratgnQKN65X8vjxJ36grSQCKoc1gQ9QzvuSUqGQXU8RB125",
  "key18": "2pKwzLprorhe6z3cCfiATdyaKY4BnzwowmBY18bheiUCpFFhanM93YxM3H18nVTULhyJRbdweibCfWZtvjs9XruR",
  "key19": "5BeCWYakzC9a34vbm5mwQvA2UHJmeTMHQZfoHn4BQo3DSrRWNuBXfMB6mCucsSaqunf9uPGmCQuXSF5GiiDgswTE",
  "key20": "3NR64GuFuQzRkpv9Uy81q4UQfnjMbs5g6VSXxGwmec3Gwd3JPrhG1UBVGSqbGgSB3hDVUxRrPCWRSz16aj4wTNcL",
  "key21": "5KJmF1sr1qKxqNNKHHRGAZ995iHtcnUQmoZKzdQgANU1eEo7JMp1pFeMFV36YC2zhgt3hVCZ5zeLSW37Xr2xKeTA",
  "key22": "5SwMWZDYYtzyMNrZrJHAuk3NUBuo9oaJa34V7ZwhxDc32S4QRLu6Wwtk9wxmZUbHbNenNSBn31yBsWfkGriSPQRe",
  "key23": "2JX1L7PKuqoD4kPG7nUvZ1Gm57YXNdMymSzjSG6YM65gBG39YDfcbk7K74kpEVgfMpbyqRqhRoJMy6A5JHMmB46J",
  "key24": "t1trHDY4EAc3JiVhNp1HAPwSc12Zzq8Gwwn21QL9MZCwP7pqPQmjVqiKpfTEPzzi5iv1d4aKktyKDKfjMp6Ugfn",
  "key25": "4xC4ehfr34SbTp2QGYnqDhWhH8eeKieKYMN3yje8waFwpP2KQxgoyodj7o9nLRETn2gw6SPBnDhyuffJm6AJ6Sv6",
  "key26": "3QuPFwXZgCRedah63w2zwNcigNDfLco94Hf9eVALuEgwWEsA7SYgVNio2ToVyuwDALF273FKw54bLPUHUzBpgGxX",
  "key27": "2WYj4vz5nvcMKrs4aLzRdSxmmnnKrMyGijCVFiJ1rXeJJYqdU8CFeTKRhCtKWv3886ShPKBaorHVNdutF2Caq49Z",
  "key28": "3xdGmKJdHXnCB6MX638hAFvjP918RLohb5mw75dan2iefxfNVUk3aTD6SjR15VXNrF2NMiXsC8beGEoayJzktFMj",
  "key29": "4zktVnEejczzwhHUxgQFNFwu6yhEtJhQXw932TrjeP3VVCCCE27bPabxkxh47gxyAGpM4fDF1zEkPLQ6Koc5vsUy",
  "key30": "EJ27qAi9y9eV4sw6ygisEYheWzeC4U6qo4YVZHVK4oXr7rCN7NbbQNXzSx5G8fQMdBJvFDKeVzTYHhKJ1GhBX6U",
  "key31": "4V4mkb3FkuiX7NwSg3RWw4ykVz9MhpWpJDQxkFZnPDiZbBdT9APbhnByMycGcndXbfUzQYJxqb27hgyHzC1jzvje",
  "key32": "4JkTye3c18MPjidA8ioKhgrgCjgbGvfVAsyPK2yyZmXsWVdt67PNLWVnNZYP8pxXW3j7guVSECy9JJMe5Vczh8Fc",
  "key33": "5pwb8C46S8ta9fRRKu4GAAiE1hYGKzhXxmJe6wak4ERiJcVNkVXoZAhBNssXd6KCvwcNf2CJV9uWtRPvHRoVS5Rn",
  "key34": "5ixDpeLdz3SwtrThqz2aLyLLWryGjJubuZXfzChdqt7GpdxbP85DDfQDuT17omSHhrCq9kM9sKx7QH29pV2L3uFZ",
  "key35": "5WSRq8AVAqsaUhffukyaJ9i8oudWsRRZ38MLHeWSA3hRGpkEan21Rh3rs9dsUcsiwpKGd8dbkjLJ6XDhK5bYuAR1",
  "key36": "45GgUFSfHVFe1c4u974QAqKBSUpDs6ysyENNSFwJmEGsJ4EMvbHjsnhz9TH3crhmig1d6kMZtLxswuckaFzQLuEm",
  "key37": "4X1hQRCWjvF82PHFSTudC6KdKWBedFSQgsm91vEh64iu2yRCwmE4xyCcdqty4RpHo6CWioJ5XtZ96mvm614aNyvH"
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
