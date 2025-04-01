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
    "2MmvjkaPdWEkwhHMnmVt7K99yFgi8Tkfyzb256Dp3oDC8DzCQGfMrG16Cv8mF5kP8HscyFed5GbyBUmysFd31Cdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nm2AXCLUe41Mc2RXfZXyXT6jJATXN6cY5FFBTKTzjtdF1WVVUFChL4ErW4HZnC3nRbvizuDDGALUiSKsmbuzWah",
  "key1": "3Wugxyjpi1ieuc4gYf4sYeA4gscTHpkKwrnnJ8bZ6oX4Kny6zEQ66qh1DdVnuTeknqBHr9XvxbXjPCKxX6SikWAY",
  "key2": "CM5RTxDRW9yFFjgeyr1UcyDkkwHgJjGUFU7or7g2acXWBj5u1tpz1HJn1XGtFDkJyfswSpZMh26sZ4DADp3zrBZ",
  "key3": "3vQTmvximVuEiT23wzLLXLPysJgRHFqN6mhbwKV2KKboBL17wNViQ1JEgAe7BtM7uzroKZdL1D7ECLEiB9aijncg",
  "key4": "ERS2XVmruEyXS9WBe6F7EBMFvZ5g1kcicQ58vkLsv5e9hFB3NmDHYa93xzMG6UEiT7uMX9DnXn6PtPYHMuW1ynw",
  "key5": "61V1YHtThxty68s2mPY2PZKBAMEHdit9NmTvn8tk3rq435vAWESDHbvoSP1HgYVvwKTUSBMUw8AzV6jVn4VoBfFd",
  "key6": "3ywaGsQkZiXeiuXcw6pWz6gtSBkAFVsYig1oY69VcmUt5E6mjNdYAtRdBrWu5hG9zMm6FgFnBZErf5SkamMxfCKk",
  "key7": "2zeHkUYPsHgAjaR4B6CEsrBZPsnBTxy2fUmpNPr3eBAHYJzMnS9a5xnFhuPEhMrjpudoyApzu5eknCyVbjGkasig",
  "key8": "iq61PLbEoLDJrFShDhCBgZhhhZPTjiLRi29FAiJZE5QHj7GDBeUdLDLP5Ju51GA2NxZX5tvHxRKSuhUAJHstz5Y",
  "key9": "9WS3srHongEFF5uL14peRqK2pbfrmfWgPnzCRxYRqxp4LX8Zq5mLebjco4Dg1Gkyxc2udHrYTav6mUBCrsskzxS",
  "key10": "2c75duF7Pd6dHcrMqoxtNSeW1y7s7fxfheDRhgsMXWRjH2mwU49gMqCy8WV9HWpUN9ho1W1nmTdmcEGGKVsa3fS7",
  "key11": "kFc8be6xoeUzNAM25DzjVLZi5gzqGHvkaAqP2kAkdaD2T8sVrJdJR5RwjzBEoiERLSRagzKz5y6mwkPmyEGTr4y",
  "key12": "2pFocCcuWMae4URMUpasa2VLLTUPmBWJbnW1K497opaqSzKYQfrr6yUbG4t9ooyBstZPcA1568ntroWc4SBFtqEz",
  "key13": "4kFcGgQnUbw7qU86fUE3TbMmzoRUKUsLE1THDyMaiJDrJB7jVW7e46heFRWH5uM1chU1aA3737o6SqsnAicrhpaE",
  "key14": "2WZuFxcSsPz1FiWjno5m3meTawdTijB4ebcT9yuoh1GnZhbhunPoqafgxQLkWzD1FWh5YLj5WceqayCDMM1wurt4",
  "key15": "4efTL1y1RFbahWACvmTZDmngzNB6WnpsrwKYubXYa6FLjbmq4BBExMGTd6xib9CJAQqr9VHuqrSxey8v6gF6eGXx",
  "key16": "3rCM2nELwGLEzJAUBy5ij2uzCeEVGTDZgo6nDFxouYgfwos1QcrET7LESiSWxuPNoFX4mCv7Aajdj69HEa27E8VN",
  "key17": "2FWjwSwNupJeH6WoqkwkbscCUXwjgPDYCHHFeCByh7CMDZEVhTtb7fffph5tKc2DwAfKHbey7SBB12g58BvW3tDz",
  "key18": "5N3B8tYmXVaaYQrUzayp85L7UwLK6VZP3dfeCYD4wKYsCeV9LVHchoG4yaJ9cMcfZh3FnXsqvfwpXcN2agttyTgS",
  "key19": "2cwfXPRzUThngvoWT8EdN9cie2mknfW1vSU24p7eg99Q25FBuz61iofq7CMwQGeuHitrDF4rbmKb222rCfceaZnD",
  "key20": "cXLENvZrpW6NeSfw6mZUgg5TpsN4sBXohhuuRLgjS34RvKqqZndEsUjh8A4GrQvdrKVTNsQceD4murBcCCycjgK",
  "key21": "2U5Cc51mUzY9j5ksQ2Ua5mAPLpq28TpNTXsfwweqrrtzJgkayf4FKFdz8yKr1XYAiTbdfQcF3jaC33ZPDx62LKUF",
  "key22": "3gvrUjYrMSt6uk5qiiiP5nUrcRY8iiHzgz4F9wvjPh8PRBjM2CUP1aY53RLeGHTQYdFjHwSB8uFFgpYVJr5yj8YN",
  "key23": "3ERLjbQgZaHWsyhTcMBTLCALGKp7Tw8EnPpFucKUtMTB3WamqQX1CPyG7d3ktSomfKtzaRPezwFPyJZeMdTjqFGm",
  "key24": "2Knm6pKaZ7bDUHZsZJiByc9M9VLgLH6t1cwEAGeohLKDyHxtFnsMfy4mZb75jqWwB9XRKFjwvg7TRQC2CLiNeHi3",
  "key25": "j3YrVefUUUSmU7JP9A9sSNN2RipMWMbcGZer5LEkhrkupCBcEwVD9UjgFwUQWohUeejmn7PUm9dy6KdNeebD6Zi",
  "key26": "5m8y4WbVW5DUPoAEHaeuK8x6f16i39qReJN6fZMsRqpgYeuCmhEh97uBTK2PzJhWr9SHydcEUJ1H4zaonjLRccuS",
  "key27": "5M96z91fHyyNdY6QRFDTD2qccxHYBDr5DZrAuyvZCUYqXZRBTmgP1gxxmwTyfgEwCoSuj9DnDqMRFF1BzmXWyh3E",
  "key28": "hemHxQDrLVEeG2M52Dd1CcE8zLmGR587YgU6ET4bpNNvQxj2Fa46ouNEDux4rgDn5tNbv1JFDmHJRCHDXZHqQx2",
  "key29": "65bbHqBWRtaHmbZdXBd15ps7rSawDG3Hm18p2TAoRuyhGgbGZZBryZZSh5hsExDoNMuTUNoegKbzmxQuMMBXM2WY"
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
