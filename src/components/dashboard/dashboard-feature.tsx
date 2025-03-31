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
    "26xLdZrC1s7HBq5kzZMZewEa2MKMvFPDysoTYdA77j9nrtHst5pLJR8QGP5FZGvLASNeJfu8gi1PNtovhWXwD7DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRTGrVpZigfANqatVdSKwfAJGX2tmAtDgxBvFkQKeSK69QHEoUx7RuGchcBMVmNtG6QHC8xtaTDkHG47pTg4uny",
  "key1": "3Jy1QhkYxS6NLfkjDS8ahDa8g6H69ZaX8XtMP58FRMHfPk4JgrHNFGcQPMmtfKUteNmJmykGvdUZbkKH1idb5qgE",
  "key2": "417J2LCdgTqa22HBZ2PEftjvioGMiUf1fjBXuUmu4S8xNauqT3hsi3Rer2Qvk6rFHeXwE5DDCrRqttRGqrinhXZg",
  "key3": "mMx7c3nFoDc7PY8DGySGg2pqM2dpia4iT44UceMs4V1bWi3T2x5Gre4E363pigQrRmhKUYozCqVXvMvo4gw6hwz",
  "key4": "2614oXfgAbmqszTCQAjrnKkbCpTcxT4CDGtfCgDuDSWAVTqcZBV9PovZCjqgabFaYCAM8jDQ5xwVXCRKreck9QEp",
  "key5": "uniP5NAide5iMijpqgoK7Z3YhrbHRv4jnJdoLaxMKxzag1gugFtAdn8xuTCjnE1pjGUr6vSn6cWMLuvexXFfVSS",
  "key6": "5UbWHLh3upa3V4P1HPRws4BAAHmatacxKYepWaaYhryxqThXtSSQbd6tS5UcSfsV6abRKRZ3qgkRaCDCTu12FMCt",
  "key7": "4sMdvXppwvKrehc8hMq2JG9RwT5LxZ7Uh6eB2eNXYZn3DVph3SJFd9je3mzcgBZCeGk3LCfRBRPkFMyoPLcJGTJ6",
  "key8": "5fer6x3VzsE1efoVRRnPR2WQA6VTv6xrTfCBgVzQZ6TEj7M6WQTjYUhoL9qZkK8HCJNX7hjA1SKcDtZyGKtvzNh7",
  "key9": "2nREHM83fWKgh3fDKjoS45yzJHspvXCwKvFhZiwGb3Mny6t76EeAD4eTGjZXYnY2CXoWhzM6QMv46ATj5DqWiNAP",
  "key10": "4PwDjkUdxwyGwuifCyRAjNSNZQi34tKpmsQ9LuGREBas9dC8yVCDk8dV2AyMsoRmPf6C8HeAHKxpcbWYFhNcwem1",
  "key11": "22LA2YWXdhr6J8ghaLK5JpzirRiMJSGngXme1x9cRJnUgVQ145Gn5h4JQqAaKFeSWf2BG5xyQ1w3mUuB9RGgK38s",
  "key12": "29Wbm6bEzzobfwY1gdyZybhjubobSy5KpvsZ8PZweRehbXM5CDtXgq8o1ubD6vPbWXBtvXSnfUV8NZXHtbLVSpX2",
  "key13": "2hHrAKSHE8iuuTfDrSjMC4W6e1Tdv7UPSaRz3pGEP6WdJunXKh9pavgiwUiSuh6ZYmzUW1TgQ43v2ZynDn3i8uTm",
  "key14": "36Fxddo4bvv9wmUc2KBCuKv8pnkPY9tmza9t8eYdfzzX7xE3RcFcVWnemWxAbWCmBbVViRaur8puvMfqiYVtzeMJ",
  "key15": "5whsnnbHbChgWHLMRTtcPNMKcQjRiyc1m47bzRHbLr4wfaDoF4t8jJYgeAgxxf8DKayQsoi3NpbY6tc51qfG47Mg",
  "key16": "3kV8VFSEEU6nr6sXYmvAJ8HPiAT4AE5E5NJPRC1PY46LQhfNdhHu8h8y7oWLugVd3orjooLhiHAtTqMurTuuyRuW",
  "key17": "3793iwPh85vcP1M1nmh17F62Ti22eZdMFNyZSbcNF9WoysgQUapkzwFmnVktgcJ5hyD6hWYnoH9yjDG8Somi8Ac1",
  "key18": "EHprAZv6wiVRTL7i8VdKtjCPaMv845q3Y8FKa8xHiwPJc37cVJ8v8koJzFhX21UEqhSAsrh9cye6LKHbvGVckcS",
  "key19": "5jQ6HNp4C6FznQu5JFGeSsbuQwdQ2c86xJ3kZQqztmSA7MdAiKePGMdmC7DEHKex2EfuBzpzdttTBUYF3266YSvP",
  "key20": "ZrVvZPPCq6pvPTu74Tovh95CgnFHVoJfZwtKZ1kdtQ7AbQgacNHGN2zHaB8EJMRNYjBeAcH78ZkDG5Pw2eVkk8j",
  "key21": "5g1QMw8owU9dmWcR3t8k6km8p3qvWus37dWVHYAN5PiKBTd3DcKFCCXq2CpTW1ChNGK2seZsmbqKoGZezog3w6xv",
  "key22": "2hFCCJPtWQEJFSv5rZzNZhDe2HD2tA1JFZFey2B2sTHcdJNS1Vb7tYeVt3UHJqWsVtwQZP7iLwPf9M2hVhLwoheA",
  "key23": "4AUDXb4mCbk3RmNoWxtEmRkPHwDr8jSmvmWekYxqSdiMhsQZEsZNebmTuVUmDhFjgtU3UNWuS31C1PhiKBF8EpcH",
  "key24": "JRyhPEhTergDjEmqGy8VvHd8os97sNZwVoSh4JC3UFqKbhq4eLqXYhfju6AehdUQBWJ5fqXe9fGPb3j4Yu6zXpz",
  "key25": "d1D24M33iDK3tVXCNFmeuNqH3hB2R6hyEvy8qH3XFfPJtYCB4UzRZRCZf5zxFqQQ3GQ4DVezt2Mp444GGppwD3Y",
  "key26": "4dVGcmv5T1m2ZeCdrez5Yj2PLj6V7uKG7UboxuQyCqHKZSfvfiVLd3tkKWJwHPqWwmsAGBAhXUmYxs5w7VMYfRat",
  "key27": "4aAzpcdULzgBe8trcWzrsa2hWidR1RG87rfquQSEPUdKurJ2PvK18Sq8tWgyChAYBSoupNQLLfF6AueTJxZFY1px",
  "key28": "5pdCR6NfctoX37C2w6ZfYFcu9Z8pAfVwwfCY4n42usY7zgjLShjSZz6GoEFMj9eJPsakLVfKkPfo7tFiTLtZFYmZ",
  "key29": "2jRyYNAbDZqGmdtmVJvskRauBqjqQbuvnknCcq4SyFA1HJmvJr2rTXLAb4BEQUQBpZoDaUKFSDjHUNWwkmLgBkiz",
  "key30": "5bERDi5BMgQ5PiUQ39Ris6XkqwcHsLr33UkPbbok3Ks5NkFjKYVvKohYtRD48pHWxupySZmu1wqATRwwcGvwmM7e",
  "key31": "kUCQ6zuPTvc9FMQm43zSw4Pi7onHXoXePCCnx98PwGjd5NYBKW2WAwHA4HvBT5qESzZyA1ELmpSkVcFvbGmSPgr",
  "key32": "56gBt1LnKoPqpm8akBpZfhhDFaSCHoFoN8QWKixvvmUvwFdQe6Qrdi7GzyKq9o8gd3g6pr987gZfqCwRRJWgcnrV"
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
