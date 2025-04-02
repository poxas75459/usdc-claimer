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
    "3Tow2mcTACaMQ1cY14HkQxW6uCEfMBAYzjt7pXEUwmkFmfz3Fs6Rkpdr5As7RV7xmQvFKKGM4UQpPq7tMe9oM4rC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpdvgbgqhm5tiRHefRxXcmjiF4DX13rPRWVoPmBFE5Yub4uhMuuJH9MSxXpDEt17ZCxT9WUtXj8UwNnsEZRPPC2",
  "key1": "3p8NatfwG31hJNPpwCWZUEX4CtXWdjnCyjh4ftGqjAihjamXZHcQN9wHXcKA3gFzR8WaoiitKTAid83P7FERV83f",
  "key2": "23UhVtDWNs2Hw4otGKd4gzfvhP69ZswNG3aMhAZYdpaSYHxri8ZrkHvqkZ94eoksjkG3HTQhazQiabb2PtAEcupJ",
  "key3": "23DUYgYnPsQo8eZ9UgWGLRRdVtuB9WFGKVJrTcbeCAqDrjeJVYsv54zQhxkkE6yAnqGbXrtRYBcVetzWg4oUWg8B",
  "key4": "5WsJXskSUiM85ncKy5QQmqJ8JdbbibVvAGQ2cH9CvWV7uHfZVnAEwQg2GcusrwTVmP5v8BRc29tdGHnuDzXR9G1v",
  "key5": "4Bwfo3y5Rh2EG9DD6upciyUkQ9Wpt9pCGkHRXPL6Aa9Jw5uHSBhbrGSKoMwnjVqHcLU6FMzRsNkc9YiyiDaEiSYD",
  "key6": "bh26Xi9UnoroUzZw9MK4QKM25qxpfBBu4AX6T1nm59gCyYEkBa751xydbx2ci3AxPHm3ouEwrb9hqTmP8srTFJn",
  "key7": "2DRW3jc2hjvt7iDuS8HaZkMDRAGPn88FUxT4JDvmouG2XsM7jNPribREBgahyPJqRnvrTqxyVHypaVgdzvLCW6eA",
  "key8": "3soe97pyrarqqDDxmpmMd8uPYCfkLUnU37a6oVyuK5yQkWhkfjwhhGBPAtMPwSqeS5wsnuVPtwkLHzsMPfFCpPd",
  "key9": "zbQ6JBhYYtEZk6DmpkydAcf5mV7WFdhbWcku4eYpUBy4PG4LX3sHSLpsJeqkVQEfAvev6yGJ3fTExRMBDd6XNbc",
  "key10": "4Znsz1mNMcFN2fNAsc3dUM9KpZ7oSEd98Y8PKhVBaCvUZkEnJvmLJC694G4SSb7dEhabs4iS4rwHUhRbEs1hfTqW",
  "key11": "5SDh1zeLSs2dJpve57WKz8dZZsiH5sj6Kt55GWra5NihsHCea55y18JPXhMjzUPHQLr1cJHpwCf72nNXCLKr84Gz",
  "key12": "2qsiFaSTBh33rZyAHvrJaAwEbynDvkMcxetj2GuN6qpu8saCgr1qqNydFS5epaGAxM5FE7esx53FcQbkh3zDakTC",
  "key13": "M7HiaGQutAZrB6TVihMtXm7ZMBoo2VtkgM7CrVNeVRs2Z7x6GM23b8iG4pdGZzBWkvpt8Tegz3CzAJCxkLACi31",
  "key14": "4oYqn5xwk27axiarikTLHCLDaKRTbY6SB84Q74nJ1m9cHwWVgL8Fwamgt4AXThdun49beNeqUb4ED7BWziP735hC",
  "key15": "5s8mXMXaTnBDvHuqySKBi6ufG8bexps7ncKkkUXy9VJytdTMBgs6qbk4W4GMB7rdQpCMZiCi46dY7vCPK3RPeiEt",
  "key16": "52zqt3V1aeNKGScVYSQVQQZFfbGBp7g6ZNbgMqJZJemmRNkcBHsn1VYSPNHhv7UNWG8VrQyRk774XTzbyTZJt1Gi",
  "key17": "a9RZGvyQbSekM8YMzX3ia2zu8Fivg3cTAfjASXsjLdUeMCfTwfu6aFLG14an5rkVwggWcxjKB9a8hwoJQV9MqBY",
  "key18": "2q8FDbGAhXyYjfh5mbckXBrbZ11mMABHmujaqJBQMDNVBwFntcPkcFcuoHrDKoQpX9Uer9bwm6fohc7BZk2Dj6NV",
  "key19": "5dsnKtN7UPxN2akLjwrVPKp589Bj4o6QuuAmKcvoAW9FsqSMMdznH83QiqmoPWJ2bxnqg9otd51Jp1qkCNNaZjpE",
  "key20": "5qq3zWm1rztu9W7mgv39DssXCna1iBVjS9CTf72AJridbiWyKUx8wH7zQqaxc4CkAugz9vTZFpYgPzouFD5SNUjv",
  "key21": "4nQFokkjNFtUwmvE9TbCmZq9N946hzsxFh5R7VUFkRUw9TNKu6o3d2g3oWijQqP7XaHXpUAvbgTXLpLXYne6UB8t",
  "key22": "5GN7N5eWewCWHSQ8owHYTfgmacbYvxcaVfnz3RP1v6tybd44qFZ7Q3TgdeBSHS24t7qNL9kFPUSuBKzzobpn3vhD",
  "key23": "4GNf3VppBbLuRsiJPokJgjWYwKy8M26eTUacMmTu5VF7hQmwhZJqsNwMTtm6MxYdr9QcRXcTNcq6uGRDRW2RFbFJ",
  "key24": "3pydACW3YWmAykwEZkki7K5or7beSdQjVPiC4F5SJuyjrp17YbbPp8TBR5gmCWsQj3FLxGEHxkvro8wKEeMZGk9c",
  "key25": "2hKcMy9JAgNjXfw7MKFh8qi44d3cmu2GRJRMtjuL2GUTmsVGrmAHPCCZxLfaP5sZYWtZwgrYaJsvWqjYr3iZ97Av",
  "key26": "3ZBozSzU3dhZH5DqZCX3WbwPw8m69A5k8bzkrBd2HGY19jCwxCutRQydSCHsXeb4554Ai7WizckiLvmGqeCLrr9c",
  "key27": "4VHtD2iZRQUzPgRzyRpVLVDWVVSyTPWddmzwqLvtzZLaL6VnRW74RvsfsQAP7JQGDkrxxD5QkdGyYaPq8PPKV4Ex",
  "key28": "SW85sMGW1b3p9frkxER32DkPxiByCuE5uyFgE5hf8U2kJ3VCo76wcRHZ8su8vYZHrLaAKuHHgT6U5m1gbWRtRrx",
  "key29": "R9pBLGDMKmooH3mC6sEuGnbAf7c3HR7kriR4uTUmpQ2i4kvaiXdaux6Qjms3Sh6ZGbdVvEDtTaFm1GPJ1vMb5Tj",
  "key30": "4SFGYnNsZdoWgkKk7QPxcdpEk28DXsVJ1A7WvTNNXB1GBxkv6tREzxFNNrWw5MAsDUY4pwRxFFBXjwJS8BHfzRNs",
  "key31": "4nS1VjsDTbFsHKGwMf4msax63rWCbfj3mz7Hojs1iYwiG5YZ9CKmZocYozmrUdZeQhsVKQyfooJvnwTszDRci4oW",
  "key32": "3CWgqn3zCGjT8swmX7x4HnE9UXYDSGwUCbjkZNngAdEAfLeyJQ5abXTtrkvGB7C3ar2MAuEY694SDBeaPNbAqppx",
  "key33": "2PshasM6Ld3adhxPzZZ1qDmzLYv9rzZ5YBjccaZpGxNA7p58X8KJvzCKHYw2cGQy47Zo4mthmEx7sP1a7n4qPEUH",
  "key34": "5AukKYq5aWb8VPGkUAHSQsZMZaRtdy4cLKU2Y6FHsxwHH3TDs8bFHZoBFtG6XhCvk3UAAk5BFaDdQpjRnau95n6Z",
  "key35": "4kwHwdX1u2LpeKeLhq46grYU8STEm8hTrTt8VHePYxz1WYgqP4VL8e58J6WWMaWXtJsUhf5tDFhDreYVdcP65Mpb",
  "key36": "4Vwy5HAg1DH7fp1teqqz3RSDyEJ9j37ULozzGnXYbxt5sKL4BBZd6oMYpQeqKqaxLdALbwSZv6gR8QQoqQNBYWHm",
  "key37": "5pPQnhsiC1SVCRLN5AZSZZXobZx1JVrYUKGYLaYfUYFr2J6gAYCtbisedx1zxiQJo5Gy5LSPJw2jfVdhuyGrufYt",
  "key38": "PoNHPwKzPtp6ByAcE2fuh2cwggVjqMChnV7qy2MGckDC8TAxtLCswG3JjPy3HyXuA37sLTLF9Hb3fTV5QmdBBwX",
  "key39": "35x2H9mQMp4PGZ8yJqTxwxHhiHKsFCnB7xvdheML84z9DvTeTcHBtabPAm9tMn3L474s2FkNveGcBpiKkPKFgNXL",
  "key40": "4kLKGb9nGJMny98yVYaPhqtvwmQPHpqjRyuo8iSExgNfj5rf2ewk59YRDECkjbQw9fyztxa6nHC8EM4SN6cob5iZ",
  "key41": "56mSHmaojEHfJoeRuikN6VKxB5iBP21M3N7pmBbHEjdeayG5V4wdjaTNhHzRx3BW4ENSfDMyVoxyYKQWUWXrHdb"
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
