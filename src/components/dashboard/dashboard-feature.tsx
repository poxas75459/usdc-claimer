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
    "4YjAes9afupXmrvb1x6DYbPcC6W1vAVPmoHR2qMVWtKRCSdgivaG2cLreMDPJXS3Dohx5bbWS5AkgRA6oN1QtfR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sogtp5UAcJajCK6RXYMa7hvEBjbG5fWan8EG7xpB4Hagwq26DAQZnWNooeMorPGk2kYXKB7C4VVEQkp8yejeYAe",
  "key1": "4ojPnrqVqgJeWRxxFsP5dNKzGY9413GTr3ekVCxuhyavEZiLfQD1Fb7t2TeTbkwHcYMx1MKsFixGVqUCSQqRvf5s",
  "key2": "2wuZxPuzCHc8YH4aEv8VWUuccnkZEoKZ5aukCi7Yan9DKanDmN5K4rfNCrUtBopwMQLJdoZVX4uMZWzPc1Pgsufn",
  "key3": "2C6Un6oBWptsX1XgZHcXvSHK29Z154fr45d774Hs63nCihJa9DbDMYwZY65G3Y7ZVyj3fjWpN9pXLRLneAP6pfPG",
  "key4": "eHdLPQYAiwtKiv4JYALhMscQAc93Ktg4oXHqJv3ZyiVMNQk3SynC3LJg6JJ2GC5UcogQaYQCVTjQiHsfX5mibAN",
  "key5": "2vk7iYdwiK4ymDzRDLyDzG8gVFSLT5yFNcdBYVzs47K5L7XEfQ3MfwRQ3nNNBgRiAPZDSRZdcdeegQcCWrUHDWhK",
  "key6": "3yYbuuTB3J2QnW5hW83iTCpbsUx1vCBWsJnoDXbeuvYZzpAp1ZMwicJPfNhjmo6aQNZt3tvCvyAYnWjpz2Ze8rhK",
  "key7": "3fnMVUnzGVBDRSoxwBJYUZZfKWmgYrnmkLWL3d2rvcV2upsj1qAKTqy1gQqdLBgxaKjYnN4QHbfeHedgRdN37k8R",
  "key8": "59Q2rbiDEK5r6G6egXPg1wUx2Garo3pbN3YomyDLrE97oquimsBzH4U6XALU3z5VuP9SkduyrLBP95zE2T4rE9j1",
  "key9": "Qeio2pw2vW8vSgJMD89Ss4DhaTTK97u37HokKhLSxBWQpfVUnPufAQwCB7Jqh5fFcB8mb613QBkK6xhmMtrkjyi",
  "key10": "3BsseViyuaNmJSxeas5KHhYcACXuadiCEsXy1Eis19NJQ46yg9Z2xGgSe1o2tZfWVanm6V72kEzDgtkJb4eLSfZq",
  "key11": "twYQB5axxgJZFdvkMq9qFvWFaJw6t92MiAvpdbdMQwunriiKcKgq81fJ8oDSMGgFCPUrrvR2B2oAikKEBBqticb",
  "key12": "3U1BsHPsmj9xfzixXs8j8MEzsn1vNi9n4rbvF1XSzoA7eHeTmofh6KaXuZkJs1pmd7xEFsp798utNhBcGQHmLaqE",
  "key13": "2Yg2X8y15ut3RcboLe3CqfpeBJY4uuZQpkoyKy7jkpr8oUsdYGUtfx5SXz8KgB54PAZPtYHibGrD3RfyhPZZ5xHf",
  "key14": "3R6S9MaWmed3D5jm8hne28qtcHLeGaZLP45pXSKFFY5CBTi3Z2YCR5mP4pqLdicx3hK6BpwoBMxJC2e5vKhRZQep",
  "key15": "4AE4nGVwuPsMStQefiXVusvnp6JDxJie5SNNm1gcXZdJEVRo3EQuNSEwgqoiuZvL7WAmwa9YKptEjhRQVgr5BzM8",
  "key16": "5xTNZoHxifdKDESFByFQSbq3Usbiy6CYTjVWjEZuvGakuqFR84cSfQwb9xkpfQwuzLSonzi7ADbaLSbPTTeC6isz",
  "key17": "261ff8Ecg3cAJN4QYFcbaK4tXThaoSXa8onG6LosdEgB8Jbj5eKxVodWVEMR9t8M1C9MTDaqFUT4RTpeMyX1kVPY",
  "key18": "4RUadqpqFmBeBTsynxMheHVbRXw84RnF6ycPtNnKm7MRFNVS5SEMhUeLVch2mJoz5MJ5qoaVfZBzCvE4AgNcmtRM",
  "key19": "3HSzdEoaL2rCHhBSSkyKpEpi56HoD6v5BtBzRH43eNYRZfbjENNoym7tzRDqecD3DAXGqtr56hYCpaQeSyZU5kgc",
  "key20": "2bjjeEFtUi97pE4qNnkmgDo3pBfskRuA5PWpcjYeH6gp56xyWymFfjN5ExtkDVNqt9vFp7Fv6KmhMCunLeHv72xU",
  "key21": "2xZ5P7A6KYkxFi2uCC3UgRmv83mxpHZnqfibJQQS5jR2H6YP7K98gLkgqhf8AxFjiJyAJvqmQh2iXGwaQffxjv1t",
  "key22": "4nCHpVrQwbjmohGSa1CM3EaNAo7akoWfVpjjJX6S6o5F9MNy5CKuV1SpXcF5P3CkxENFA44aDoZe5QJwEYiqhFWs",
  "key23": "4emMqNaPrhp6mGtSuV93uCLUeYLcU9KQGyJKBUWauMyyJbqPAKb5dRBMaQTPtpqnqqvt2872hWX2LwzM7SWqw6jV",
  "key24": "5hwHUQhSC27ZYf5qLaNrESwS373U2qYa9ihLMGtrmYUq5FY9FjsDaMEdUDskFFnaA9sX6WAzP468LzcYY4DUa4xG",
  "key25": "51uuxjpymkyoUtNHFv75u1YEajasxT25YZ6mk2CQ65ExKnG9WBsBLDQAaLLnUmkDujwmY11m1NwuapFfhMFg3aEp"
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
