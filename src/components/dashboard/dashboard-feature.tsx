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
    "4NSWk9EXWf73y9doaFDR2cEQHJTw36ve3PXSym9Ncd1NgfLHjjG99FDM9NNE6k7GXRK8VkCimeDEkUFDyWH86ZtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wh6Py4njAunZ1SDSg2N5E1Et82ssEFYksJi8bzS7VpcGWHKLcQVJh1iUmVd9zJGwwoEBCw43KFQt26h44XBpb9c",
  "key1": "3deHRTrCE6dW16EFLwWLBREAAjCzV1qoJEtne8GXQcqafAC8CNZmqBika5G8WRpxj5XqhXnw2zVCqo4ghruadU38",
  "key2": "397zwyEV6QQvc3m4NPBGMmHqFTAgeTHbDub812iJsxAns4qJ678eCe4u2P9Nf82zTppwof8m1y9SEwcsT8HTmnsv",
  "key3": "4X6mSCoZCY7FMtmAEHA82y8enSCkU524itg32GTh46ZPiUrKvqPJ8vi9qw3SXk5w72r88YR7oQd1uGVpuZGH2naY",
  "key4": "4uvEAXWmgkyXTSZ68vA1ZxGxXNm2YKfgT4efoFabYJR62WyV6WHfhRVAB3veN5cu33WUJnQ5QFD3WZzcLD1zARCB",
  "key5": "5zGaVtv7fbMKtN8QUpLqCe62v4j1FfVsTkxvRjhMFVDfKqb1X1JqR3Vpz6xAdhSuGByMob8c1zMixkCzgeUHfTRt",
  "key6": "65RnYcxnB5PbSBcT7WA2e4xfzdVkbtEaamKXrUnUfkNEZT3Rx6Sna4jitj83841XXS84gZThKzMwXqZNcDdexDPf",
  "key7": "3D5Z6FetcHJfmSz9BRnhHX1xSgUDMUmWY1n2ctJt1FgFXMWorCGUZh1KWepEzvFcbNrqUbcEwoBRChDaGafbQXXB",
  "key8": "49HXmZEmGVhqK3S35qwc1UQgKqAGeoLXurFmTuzMhBGgR7BCPRFRtQkhC5FfNcrrCeWHEXa8az2ipBn6BF2orKPL",
  "key9": "47Xs6aB6oNkZ9N9sF88xnaBfanSFtPE4ZEAh1HtGg66sBnsxuz9hqUMCD7Bak6iLLwH4nrXnxwoFTVuK25LsFYT9",
  "key10": "2boyZVUSMsHYU7cMaLMUqwXvVL4BNFUxQoBdpQttVe31gvXggsyWfRXJawBvUZmQapW8Pe5pVsQzVXiUsrSpSw2J",
  "key11": "4LbW69uDfjFZJ3jfRQUeWeccUaRGuYB8r8SwzSAnvmRQmv8ui5D3PWwJHq6T4qZG5we766emM7YZKbs5kJN1vnoR",
  "key12": "XMeTfQqV3zQeunob9LNGqMsw1Q4asDT4Am3C4Zeny2iZ3frCAzBHXamFGbEBBdXxDXxbFMjUpSasK2Si9MNaU41",
  "key13": "5w7gFMcfA11kx2kWnGoak3d7ZZ1mNbynwrAKxx32QrR4HCN5MmTo6CPjDdQMsoEi7Avj9kp89JCtbR3LHjSi3Kyp",
  "key14": "5y1tRhJa8nTMno85PiDzvnqYtfGy7GgSWEzKryJ46wR7MkHtz93wja1i5W6Tvs9rPGbN6PXTL8GZm3Z3N7Ja9mjT",
  "key15": "3W5qBsXr8zevoYjDdjLshob18cDDyiA8PV1TzE6j3Db9GLn5FsX9uuAbdmqMpwMrXwcYEB6nby8NSUbGrE4tYQ2r",
  "key16": "4WHm6Gcedpib18Q2stKWZZKu6pqMoUWUAJnDTRZs8J5exrgUMDb894FLWK92XpLpQR69PdpxxJsR8y38R5WQZowW",
  "key17": "5Sncxsc56uUq11UGY1depwvnRvwdzjVEmYTFqMk8hLVChNpNQiQy2tY86Wdv6o79DUMUoeArtTEc4p6jgBHaDt3C",
  "key18": "wdDxGaXjQZeMv7U7jYitkRn9P9Qvjg4qHQp8E49uh5wC82Uc8ftNMrMhMS77b2VTXKpQDHN6YzpPSjPGtcjUfCN",
  "key19": "8K7u16HapuT2LuBtisufS1XRibsNphBWfXyLi1EBkGwzu3gTw1c6xPJeKmowSojm7HZ7pkgmNroN9xrVXYDrXCp",
  "key20": "3MNuPJzf1aVDCMBciDKq1T4DjwoadcNYq1Z7tR7pq1KQ7b5Afqpfr9WWw95hggnb9MHPJ1CFa134rCrp5Sq9DzrQ",
  "key21": "mTuCqBp5ntS4TiX55LrKBNJV7XH1avEd9xuScDoGaNeEeifZeQkzKu4mxDBAQwWfzUR87ZAP79BvgGKJYNkbDRW",
  "key22": "3so7G42rKqnayj6ftKXwAdNiszAoqBBeTa454FudYC46JwQj4aFB7EtXPh8x9QZBKHPLArDoGhNc4T6RD4c8dvmz",
  "key23": "4Rrf99cdZNkUvRibTLaNzqHaV2dP2PPNmSJcr8SyuVJPjdakpKCcgvkfNc3JaZ2VgxpF4Vd4LRvG3NXVCUHqFjZS",
  "key24": "63K7CUC3KWXMtFWFEaJ6LpS95DwPZ1cQaakDoyW9kowSaLfSYcSd7qE1omoDvTqUmDqikR2RyrnxighjsqN3Nchp",
  "key25": "3pR8eVzznrPAcaaaBBJH3f5XjsSNYuUz3mEvB9sj94oQBq3Bfy7JpPdEssBaVjiqGXUH4VgasqftAXnRh1F6m2nc",
  "key26": "3Pa5mYHKBSxgkGvSobKN6Ai6vk8uugwi92btBzKtQP4VugmTYZN6JEHkrEm6ex8LQ7mnzn63b4bgCmaqH2r1Ae9d",
  "key27": "4HfcdXr8NP8K8RiTBbzXK4fdYEaUAwStMKmufDhgXVuSsd3bw9xFAR2wEZ83p8RiDumvY42Np7j9XYAuokdtNJJz",
  "key28": "7suhPTqjy86YoCBVxAtqF6ahxxb87iQghF9kZKPQSibTPbZWAsmCVZBW862urEzYFaGBKaN5UjVBinkzkeoJfyp",
  "key29": "2RWaSrJnU3CWK3hwNuRGU7ghF3iVvoc7StXcekvCpBpdDfKfzZfjtku6SXkFi21TegrK1RmHhBDJuSw6C4WfZjKb",
  "key30": "MTowBKAkGg2V9tSEddHkufSQZmy5KA4uk9sU7ojJw1cqvq5e45ooQG191BZA7KFUp9Rir31mGZX4MoTEmX9Eh2B",
  "key31": "2yyPHYF8vhyNdX9gpvReKP2VpmdRu6q8tGxn9UXT1uzTA3874nt9jkB2FfayJi7SvNdSgaVgwgs3J1dWgk9XYna3",
  "key32": "2PAUKb7qVK42GPjtSEkV645Jbmo3P4orLvVucbMnKvG6KDDdtCvJyFw5x6tcXov8AkK6Vk31zB9wSdFz9NVUetfY",
  "key33": "2hHjAkYEbKLCq1xYJgM14MbgdujmK23bRnVYsg2MdhYcL6iUArMyB5s1iyAijJGRLBMP8iqECJKp4PiHcKKHqw7v",
  "key34": "53rfEeJU2AWYuwkpxk82ECVS7nmFkFf1VFo8JqC9vENN9esfuyjXNif8RSKVAxXb5iCm2VZaTvVUTM6dZgXaB9ES",
  "key35": "4Jhi4Crfci3hq8HUGhPvzvp3m4eryXkdCPkTVsqf9PAeyf4sm7Wm7bERysRcA5HrcMYBxaE3M2rpGXHsfUbT9edn",
  "key36": "3RgtmqfUA66jMKAqiEGc4tuy8JpESV5rr2jeAeNh2HMu5YJqFRcY8dxSEJGB94774nq72oDALuEoPwvxid9kzYEP",
  "key37": "3sMTNxKU6YaxQkqnZw9Qi8CU9Z8kbU7oVjiu63f9MYWarNpDwdPztbQ8eRYorY6f7PBw6Ami7TJMcsKzjdwqmBJ9",
  "key38": "K3LunCKkSYr4PAhRLr4eSVNUdNJL2XmTeKNd88rzGY3eJzUuPe1sdAqpveNZJpVU29cHiRQP5bbBz4wH8r9ewha",
  "key39": "2XCkEgXSJCSfTjKHUhu3amU3LiARLFrx3o8ewnQSHKsnoLRiwfriSppEDBRAPSr2EuiX7R8ZcEHejaacVnvoBLcD",
  "key40": "3CGw6kVCdvYuFVZbvNNtGErLa6JCQvwoL5AnPB9ZK3TYdu9dJgZKbrvmADcEYMy26hNVpc4ko5bYMYV9qrJewVaQ"
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
