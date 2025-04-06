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
    "5J3DpAWKiX5u9FBhabsNwAqf5SoNYYdbqQqoutvPUwJVudNTTH2sor4Pm2fQRVjCja7xdfvnZvvKHUcxDq2JgyVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCTTo2DiPdFdGockyjnTRGRGzivzpxyN75rD9bYwydDdnvVyGgo9gjJihydQg5rtKugF3aNAnAGE8ahCfP2ZkC6",
  "key1": "GiooxndtNhQZjyA8L9Zji9SaYGZXtKQXAM1qKffVsn63pZkL9sxZwPDzxRTi9owpPdwG6BAArHxnXkZCtKkX6rC",
  "key2": "694SKm81jUvp45eQjpPmCpj3kzqyDhbcXQCJm4wASSb7rWT9S5phSKp3rySVfGbHwB2kfgPdtWSBdHrWXE93Kr2",
  "key3": "3ksqJK5tCsK88dFcJCscYhT8qNAyyHkS8LTJCEF7PDy3cNFvbr39wWZfEsQZp83SW8YBupkPhSBz6bgqtrAn675n",
  "key4": "2rsKnNBEnw4WQEpe3ustGJJ5es556Cmz7Det6SyhAjS3oVGLkMJxcf15B9RH4gvw6x7uiPLUfDBLQh3Cmzjkgvjz",
  "key5": "5XviXzB6breccg3bbmVfhYPhm4WjfpwLaqoCfg5LPoTKVHftitLXcFQCL5kHUtDGFiArziW5P3STDDZVaGmFUMKe",
  "key6": "hymHLX9vCzv2BoF15qzymwQWqYA7uHwgKvMsHyj8A52KFekuMn8TWCXuez6me17aK2gSXYRLmjtBWRLSvGymDSS",
  "key7": "4DyaeUNHJbHf6Jw2NwauTUUDGv9SYu7BUruYP7wfiD7KqBedpRTbAFHsTZWtzSL3PnV1XtqZNzYrjWvYAXRBzzCd",
  "key8": "4bCJjiRKfKPnYPMck8YNB1oWko1p4bCGWdcP2RKkEpkWHJcMjxXrwNJ7rEyjh5PZJBL6Xq93PbUxW25AfbnezHHW",
  "key9": "5gaoHP3935TXm4G44Njixkj5eoRGJ2NiNV4GfaTATy5CbR7pHGyA8vwiup5BcCwa7gH75fCg4X6aZ1eyDCVgrZ54",
  "key10": "4gLJdN9rmwtjGE2uuGzuFhf6w1yuNzULeqRbZsms8ZfH2XVVFB2zoEL2aTwupZmu3YhKZzYaVWdxw5pPd1sA8TN4",
  "key11": "5Jdv4mh2SVaTMrNZpzrwfnnUYmf79hmo11TRYPVoQB1GA2uygytByokRoSbHdh3ZjLodYhPNnrm51bsoaBwwHB2v",
  "key12": "5BXkKw6TFtbMEgMbYQBifWCvWWXxi28rs6v421hp85z6Ns2X4wCz2t2VsCAgx6i7J5ygCvVR6SzdxXzfke7V6wuv",
  "key13": "3RFkLt4QZ6iNBLF6VwH473DnqJ1HUu8oKw8qHbgcpbMsX6Ly92H49qvSUwqp36FkhtcMWKBhoKEKBT4ZuBiZ1jXA",
  "key14": "fouTnzx4a29KczbKDdKZc2XURb268DVM342PfBVYcKLKaLxRCLQudrT5gSCsq3eJzSw8fG5jKPLF94JnTSheRw2",
  "key15": "2LdMDJw37k7DC3g5CZFvFzCRJ1NsJRhKSdTcdxJd9YD8ftSWvxaBh8mV8ZB8L9adj2X34Z8r9XtVBYC1DLjJdGgc",
  "key16": "E4EYarfiD4W4Pvgcsj6YoamRhxvonKZoSGdKauhX3Qk2ekHmq1PZ3Rav6pfLXzzxhwcQfAaqBwPcu8Eijeo6imZ",
  "key17": "4tcuozAKgcr91eA4p4twrqozSfXsegfhuGxxtceD7UCwsZSw96FnpwqNCXG1t9CuNDMfdBDHKLgwzRxh3Yes4CVk",
  "key18": "3Zy2sy7Tq2xV9tcQxtynmdZG8FChgtcVtqjQzdLPkbdXjJ7LhwQvA6cc2xQDr7PgqHdKiNjuwSM3ZweujfoyDaEd",
  "key19": "3wf7wgpSPPFJHA2gGC18YUokhsJDi9jtDi48sKYqP62gBp3orYruMR6TWf3GDGEyTZRYzfDVnrNjgvUHVc4Ay8KP",
  "key20": "2X1WCoekWvdRNSb5n5cXKzoNrGWxgpht1Tuf3znswgR94sCkUw679BVuMzhgC2JNqGescuMfccF4EMstNDvEJNnr",
  "key21": "wCRPQrYFW2Ede76WEKUn2RsF2UpHmiq9jXPq5gyAj8B14S4nGvido796bTBMxMcjFffKMAsWd62c4vBmRHs27bt",
  "key22": "3tCdZazUhgYqBKHcNWzVmPFhTR43JYRtnDYL56n8X3s8voXHobvFd1A65VpKjGjQXY2amWj3XRQiT6gDwPcfUrFE",
  "key23": "9oGdqYv7rxDp1X5vdaaYGCNeaCPVN4jCARKemHoMwnEx3x6KEchryp8GVtANYL1ba9MphkgRt9ARLguqyFwfDLL",
  "key24": "2nayQE5ktaYCD7gA9b5D2N9VFnwGxhZUw5c6eAjKqkzpS4WWWs42FSaWw8gosQJT5x1d79KroPybstyn8gikfCzJ",
  "key25": "2MdSBhJZf91YxjDBngoed7DpyPKrJWcwCovZGYZwPuFrCWoFkUipu5GjEDnb9sdioZMzcvBncSDRth2mgA8iiPJ8",
  "key26": "D2i6qfHcGLUhf8w2z9yAhVon8WPcvUyVz7zq4F5dafZmPqbV3bgbkSTvWk5SSZJvGKAEacydxUGYQjAkT2Cd71E",
  "key27": "2jxrVq4ehaEuKrQng5tzmBxrqcdahamNkpcX5qWQAXbdkgx7rvbZBPdTVvHjXocmYd5LLgepCXej6kyk9PxwLzCj",
  "key28": "2x4D8qkdPExFEFdh4Br7HsdjvfGzr7oXTM7a9v45CFjZKLEJq9PuNK5t8bGa155PuPwTn4BG9KQ6BFRQ9sxhQ4gh",
  "key29": "3Rzssjynr7C1BuHhR5ECzhbLwXSzxpePsqE9qHcGJd54XfCNakz24fbngG1ewaPKDP6D5HRKecYRMCg7vuz6b1kK",
  "key30": "3niuf5R5fc5jxHEanQy1yed9tBbqaxoyU3R8vuUwSccoi2KJPeRp4Rn3hbxGHzWHRY88PY46aAJUSjp1VjVPsQBz",
  "key31": "2CFKetYpQurWFkEpt4bUnuLhSFaVFr9iq1QmqaXkrSXJCLK6hb1ukf9hMFo8RpQSsKce9BJNzRUG3S1LP7HAqJZM",
  "key32": "3ZoLTHrWa6ns38RxCRYo98ToDZ6fXEyyeaMbDqQiJSkbYcGm9kak2Ewkymvu2CRPfKWziztkknuWF5KbbQB2QaA3",
  "key33": "5x9ViFqc6esnZnn8DT88nQ9JVrjRNgf7QVum3wxm3pEhEWBpRpNLoJ8A3GwayV9VipfWsnSa2PodUirQTZURTeHa"
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
