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
    "3xtM2HpiNxADz6HidvCiQtgx62pxEt3fa2iFnU1TkLEd7JEvkgSyKyGiT4Sc8v5fXdw4HE9j6E26iZbKhmcDfUkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rxt2v7W7nunCRdRj7bwZrzDT2JicJuoCTt9Qm7kjSbUX39vivA8eZfny4LfjrXj1sZGjrQbZRAuWcKtZntJL8Lo",
  "key1": "2kU4S6sTvTHhomJbRQKXvUdGkTy9znEUYqvfEZPL9dtxToF8RjqfmnGXJepUHBWQ4zRZLWTFh81on8iSVdunBBd1",
  "key2": "37BBDP5QjXqU1xh2wf1dxyLSr4xQVUkidiXu4wKnowM2va8caDpnfZ96PeHnD9UPH9kTqUzD7wGeLgRsufbruYuH",
  "key3": "2iacZBTSmp7j9UkUSe48oqP9guFVvNBzQYgixbASnQ1QG9pdzS5gCsHGNkGMHjamSS8a9czptjmhFfRd8gvn6oNU",
  "key4": "3W8j8QgsK8VrNurY3B5nS8intiUmoVNEyrP8mRg4ASb7uoD2LrWTAGG6mJgNYNQUNjruh4p2bUNG3kVoGyMnxBZW",
  "key5": "2JWRbqngjJYRQQLPZv1dZJMzPgaodgY6HNsRGVjc3XfFyyJ1Xjwb1LeB2Nuqeg9ELNH6Z4WSqA7H4bTo3SHSTCpb",
  "key6": "CSgBtYywVFuRGjD8P4UDxTzgFFdzrD5bgz59jQPEubsYb3AQ9HeizE5uwW1UQQyew8N4a653Xb2T3miqz7DYwQJ",
  "key7": "3oYbnWBrcChUnf2ZB8DaQKvqKritCaVEVpnv8bsj2BG5sSCin5frPwqgUcuaMP4cTLcZRYXW7Kdmu3jv8ApMHYcM",
  "key8": "aVdZ8C8RtoEMP9moYkrpVmPAJ9gNWUjUXx4Twz1sAVXR1DBX6Kma7wVikuXPBbQmZQfpVfRSGzztWuYuuXuVsLr",
  "key9": "8tx1Gnb6jLV6xx4KG4fKHmYCLL3q6fSqCda4N9zz64ZQrBrdRBaPUgYNqRX1PS6bYF4U6Exs6L3qv1wKnWCox9o",
  "key10": "54BYcdKpZbnVzGByyf6KuusXktCA3EyDXMMpLUqdX33ra8q51yir6ZjMceoXgdJjAYv9RVhkpPp417mvYRv2D3um",
  "key11": "VGHNNgXzQu1xhKYwLHZuwB2JnAmtAwSmiHnzjTmv5gCqLNtCTAXkFRNVVyxWYXX1NeHVXR8uxymkWg7CMC1PW37",
  "key12": "5fX4JKCeYYhisF76AjVdc3iqesCfX9HBtNrPL77TP6d3YBBQxPkpEidNoZUuuRfcbyN2oXPdnQgLsDJJTjEaBMoH",
  "key13": "5P3WjEPmmM8y9YbjP4doFrphqGojjGbSxqgZHNvKD5AZ4xRTfMGGCpeNLBh9SEhmzAGDsEzc7z9LVrV1EFko45AZ",
  "key14": "5XHip9RmGM4SSnQES4NtUm5YQhuB8MFMdBA3dBKpam73kdejgaJdEAgQMTvisXWnYS4cJyehncjkHuWQPmNkZnUW",
  "key15": "3EyUiSDJSXvWZGaYFffqqVwfGq74kPXbb3S99nX1MyEFXvmgaxSAqXEJcs5D2YBTYP2pugpEwcYvxpQhUE5nEwUD",
  "key16": "5catC3Gn7qe15md7GBfgwSB9FibsEBhhq4AQ3ykjmCZ8xURS1GwAu3TyX7xnXqzdgyNm7Pn76PY3UjPjAYcpAJga",
  "key17": "4BpYLtKxSjJY3ipXbZ9bJ6rbk1m1MqCcXCaBJwzNoU6464DqoP4FmpDnk96A9LYowUji2UNtq7jPR6HPKJhY7eAy",
  "key18": "5QpJfss3rRE27i2jBypico8Dj4wtEBUgZ3tfuC47BMvu1FEKqUYPffDVUZ76bD2tb1BZpAikSa4SPHsyk6GTumMF",
  "key19": "2ScHrKeZXPzkRVkRyxwK76Amu8Pu3mbWeqwo1EnkubYtmeWW83iqxK3o7cL2sNH3bGYKXs9vcyF2sv5mmdo1Fg29",
  "key20": "3Jzdbztp6zroe4q14znJo7NZgfdHMQqy4m9cp3WwJBoinq6HAf8EqjeLnnkud3Dfiw6qVtcdT4GjsTieDBaJJmHo",
  "key21": "5xCVyvredeNQvVfFne8DUhZ9uWtMpmkBkZZpnBNKP72tt4UPexzET4q6R3Xteg8ngHMAYe9JEmQ4E6yejEWDY7kr",
  "key22": "CiuucJa3Rzt2Fk8SyQftTpngxHP2rzShg9ogrgUpyxkuyGB4EBRKJNBJZUFiL9k9j4uQe2a1TKhD1ut7nJSosdr",
  "key23": "5N36f1JeHxyMVciiEVvUtTvyXSsMdiTFBwNyUaukDESFuiYu5Zy6T4p1rT5qg9kSHsBZEBWxeQKypdu4uWmNbfi9",
  "key24": "5XxX62dtFv5MaTicm8sQo7bgxgvB2oJgzrwu1y5h411aTkW634C6qiPoaAwDuSymrz7M3vB3qKLJmVeJUEfdKJYs",
  "key25": "2wmvQ8DuUpggfKeDzViaAnQykb9buvcwSDoZXoTYM6e2gERHgBZxXL85U9CAhceb3qQXLQa6TKbyNwYypWkawWCP",
  "key26": "3ebgAaqKTs7j6jbzHMH2cqbFa5SJ2zaZHEMuGVRy9Eof9Ny2UFWXp4Lj7SCEfpz1GhwUzzQXzgmuermK5pHzZMJV",
  "key27": "54Egwy8oM67MZNjQQ6n3owCGhCGMKTyVuUcQkcGNHDA2GJrweREbM4LfyYuqgRhLt8ic1SFWz6LhMiHZuheHfbwm",
  "key28": "F332SvQfHbRxtLNNaPQCprYKfnxozWfYtg3nfnoQojq3etfuR673tU3vaQH82x5MBaqcbSys3uHVshEPbT7X5gB",
  "key29": "xb9KoYhztjLfDw8G56ZZTexgsZ7wQjqZa6vHhDL64b1v4aF5LR3PbG8fG1YM4UJmEhJ6MvaZSj6uynyFygPS6NE",
  "key30": "33jhsbg98LAef765tpttEeMEjJdvFS5VpyYPCoxyLcRTjyNynf6d1SfLt4qThZjb88Mwrm1tqVsSbfq2d7R1j1r7",
  "key31": "5x51cvrXa1pSfwzgYWPMuAd6nrkZnSQSUpt5GfJTYNMX3C242A2bpVV2SZBopPna1UnLrZqgs6MoSP2itbo8QnAy",
  "key32": "JqBztiS7VownHMFJtT1Tft5L12YBj5Shh7m5TLF7XNh1b1Z83pHiyBmZGL8KW7GGTRQfYruUzTQjxq7yjJtcWEv"
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
