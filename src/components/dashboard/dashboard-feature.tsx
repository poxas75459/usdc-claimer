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
    "2uM1SWK5bzWjruamMb4SB81UUnroArZVdhTeQ6uVvkkhb9FQ816mxVv4UMmmmrbV1BJj517wTPfwCyW5hiuNpFv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEFEHxb8QXo9FM3fSn7Ke3W6KPi3uENz8jwuTVV9WjUFyziUnkF7CEfJNFMkoQFFuSRk7LibziwQETTnKnU9zcV",
  "key1": "4wcJGByipWroPTZSGLASuAfRXfWSa7B3bFeCBdxRpnibiZXPTWtHrz5T5akS3VP3A9YYQJCZWVY84dMCniaBsa6P",
  "key2": "5cAud4zb1vbYwMNbQhi3QfDJzcrApUU1jxaV86owaFJjFZwBzK1Ns7FwQKBAj7smMiSD6VopRwvdtjyC2kSgDyD",
  "key3": "422XLkXsepcimtRroabZ6S697goDFjBc1HemVzYwCPphXFgBQq2YfkFXNiby1KwL7JChX8YWYheZBd87FUaiCfuT",
  "key4": "377eSkUVHZ1YV9PG3AtBiSNJJmVo9iiHKp8pB5npRonaECCMPthSa3UsdrGhS8zX77JP9y4qFR559EotngZ1uzEa",
  "key5": "5U4uu5E1QyPdUHL8aVchs2PS8VDHoQJon7Bta3JDVwf9X8LMWrDHnW9rUvrQbLPgzD47g1DRVxYyeQW5yDLV18t3",
  "key6": "QePBS9QcgxaX76Y8LpVg9ePsCianNGKy2F2kDLe73L91qdozJ7gXSupKgCmY7ZciUXBYh94TwhqughBNhosBEyB",
  "key7": "CKtbgsabehBdWPdSgG76agGY7cnjR49YzoQ8bCa73ptLkJo8v624s45Y3Kkv56rL7er5gRNezUH795kHj3zjaJ9",
  "key8": "27EKTD6rHEYZmHRzrhyivo4k5TCwHeCyHRZF4Dx6v9ZbNkrY3C6ZLEyGNdvVWwpRUennScqiJ6L59akLxLD6AUE6",
  "key9": "Y6RCrd8RUUkcQrM3p2rpXhsVoBbhMoD6P937ZamdUh1gFpX6ApNvu184mFus527DUSygpP1URJ5afy1kUPsriCZ",
  "key10": "5xRXDmnFCJUsfEzY3L41NBR6AaVHsTnrLQHh1TCeXNzgtK29cn8TVgutf74mHgjzFTMH5ddwMqg6KYg4npvJmPCZ",
  "key11": "63FmT737n2cdKcZvxzvfywUD85nzon7MhXZR9fkjpXxmDStYWYUPYXP5YPmNqmhfvJzEcdqEo7ttHv1oHyaLDV1e",
  "key12": "4Ae2NexnTeKX2szkoSxHyHX35YKgtwrLjRpLkJ9FPhSTwYYpwmAsN2XAFW3iMndseKWrksvauYgrJMn3YcjAejK3",
  "key13": "2iURNeD6nc7D5jrJDNwdxJ3mEurUtA2khMdVKjggTxQJ9mwG3drzhY4f2gEJjxzbWcMCJ1vVhcsXYRqqNNxAdeGV",
  "key14": "35nniMKsDeEX1ySshkoPrmebTJqVzrqKZHYaAcgvRHRFb6CQMQM9aALLqSknCEwWagUGtpJQLvq5VzMn7c5VUt5g",
  "key15": "3XAcMyrCY4wyooB5eqQUqPFvGyjYUNhRyX3Cr7svQLuEzJ3bww88vo4KwBqt4R4DefcHj9oiWpi7QuoMcuwrvhYC",
  "key16": "2dQKfAatdrSgMNcW57Dp4YsuX3VPGpF9nnYWLLnGTVKsXn3HeGPv2ewULZ5yN3h6R37SWmFYyLrcN1WMVcKG3EBP",
  "key17": "3A8ErvZ9QX8WkDkAuF4zzuWh7ML7CyuDc23fjqLiKtBFCu5p2cGcAdyHCbiSZQfEXXiVb4ZmHuaN3bKE2E5rSu7L",
  "key18": "34uia5HWCF9PgrqLJqnuhhsGrJ91yuk5u3ep9sfjefVSwwf1k7eyJe4qJ1HkTPFVzXeb7sLnS9WpNgnWF3k6atvD",
  "key19": "DsnvwsuZ4NZnvDib9JY8T9K9fctxZzropqfTwovVWQH1Wqnjs3hQVMqZxtWDdjpg5wtHpYTryxNKitTo5UTZewM",
  "key20": "3WhnW8FmaGngKtd4wipak8M57GhC65ahbCuSwXTQd79o6LkdFkJRhoLw5rkBu3jQhCVUvBSpmMoAUq8mBNoCYwGX",
  "key21": "5PJKQbwsoXkV86bUA3yqXqsSusaqFw83r6xirsVXa74M3AsQeumd5Jai6jfCN1wKfZ3epp1e5LGBWn8gMCzFMZ9G",
  "key22": "uXjtWJrf7438cqPGyq7q57S5ZRbBft6rQFTb19VDVXP52K8KpENVvM2eEkr2uyCKexcBd8RT8i34mmkRnUnusdS",
  "key23": "R59s3RDsc9UB2hLzHSq36LEjEwedyuXwpWWexnqgZ8zfo4uigNsoVbjQz4cBfRkG2KVshX5kePKq4R4snkiWmkF",
  "key24": "D1HM8iWLXGRXc8CTLywwF2SqPjEeGohDN3ygYbRrWzJXxvxBRYzw5XXHgvqURvvmu4fLaExqGxZynDRJ8exVM2U",
  "key25": "5GFvo19Nn4zH9YHzd5Ek8hsGNQGVhmXjA11Uv7Cd3LQw8Z8mCQFFcEmVvWsWKZXHZSoYeDoMQ3eTEUo94yxU6vgm",
  "key26": "4evqHS11sGZMwFTX2yFK8MNM955jtm6aY5pFnuU7ud6ZUA9Bc91pb5ZHzHcijSKUcdaLNxoZxgYnkxnUoPKutg2A",
  "key27": "2JC3eRnPGpSUme2besyCGi7dokkh7oST2X5jMAxpd4cdwi186pKvfaA2MHJdPz5in7LVVc8jT6EYWuEzsQgsntpg",
  "key28": "56TYvoYoTEYZ4JLwknUa7KBRDBFvTG1cweysGnMUrfrZHXcE4xmQ6ihbfeJibhBBFZCWJTJQ9JfWTP8NH6TKD92B",
  "key29": "1jdnUQ5Z9hbeRWbEizdaZqqkQZqw5LNgvocHWuHhkvr3d6u3YowAVUPN5wHezYbfTXDBznCDJom8xCC6xCJE7Go",
  "key30": "42H2NjWxNcXaEVqg8LkM4Uqf6CW64oczjPCgu8vURsigfsvAftVg6x7zynVMfGFSRxcc1xNf46m8sp9jifusHCPm",
  "key31": "ujoacu9ozdWKbkKkU6tz4toHjGCX8bU4SjBmjPeMKZTxyG9QK9TWDrUPDAeLfrWP9CktANfwKc9Kb9qASwnYsiZ",
  "key32": "2id7FX9GJvfV4g2bBBfRAwpPYktbYQfkF9Xzv8JPQezkRiDAwveGiSdM7Emxcr1MJwiJnxZPrv97kTva774c4KUD",
  "key33": "46SM5t1DFVk1fnC3d9YkuCEaCxCJNHyfpScCoCAb7hsoV7pkchnAa5H9vVKhBFKgVsaBRZJSLUdb7ARWXxTwV8Bz"
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
