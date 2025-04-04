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
    "ByqURc7dhqBDYorvk9z3uJsQQscDSpeRz4B5jxRbr3CR4MCP2KLtmH1fgrMQNZG12BQ359zhvhif93iuS92stQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9P1kWcko7gj7ZG5HMpx7bSqeBB6JeNvncJEBqfAMmCEbLvPkFHiFFMjhKZVRyr8DYNeydCUKjhDjMXVXx3p1RC4",
  "key1": "4S7D8QnVhYMsG8R3EHiDDpTQFddbziqCFB7LWW9KX7wxUpRLYtnwWs4rRM1ntC28j48HrRQ7zxrKE6YxnshGAFrb",
  "key2": "5HjRkpeGQdv4GCAGhz35Gd2xHHSGxxBLdcKdWYm8LsBnerwpAaGe6AC9cCUVSJ7ruXqSermUDuSZNJ6rLxn8CVYS",
  "key3": "2aeWZJPcwRb7qhLGNoMob67dJM1scVQsPX8ovvHBq3gtMCerzqECDA1FLyZ2uk7y24Tgn88qXr3sJ6C8fJ16hFi3",
  "key4": "t25DHMnnx2NUK8xQCzG5sS67U3rj34sQhUxpkhcDnAAW39Mr9Xc5qNz1Vmz89TSifPn3rwMPC9SrMonWxWh8Cn7",
  "key5": "eXMsKQYTPwcv3E5757bDAmCzoQQuU4kHo2HTfQ2QJVj9ceYwsGn5W88LMcXss8PXpY5hjpBGfo44HRPHDeDsUb7",
  "key6": "4wQP8qh9mxTZTp47TQwLoY4X5RMpwVx2bnozFWmDQDBiXeBGT3SgBSrmM29J73F8WTd8EZKgQq9rvq4zQYvLqdGy",
  "key7": "5sNbCu9sJXKq7TTNSfTz6gQXSLUvkTTLhy8hUwDVKe88UbLLZZg9YJueWLSvFivFhqCQrqxA28VMEPaNW1gfuDVE",
  "key8": "3XihFddKJKZzphZAHpHdABsmAQhJdn2C4KQdApu9FHVkgbM3djBNhC788NnTTvuuEn9gB7PRzNWgB6ANNrGbiev",
  "key9": "5TPGeH7YzT3wuxc8qjtatVF28ywmeVpGpzJ2LJmxNLdMaPqvbdCKzDx4iPfgmVuQF3ycW1eK1gvycZ4n455coyr4",
  "key10": "3Bo5Fi3jjhzqYLJcxDYQFcBKncz25ugJmBMLwdLH6MKKCotQpEoJAKVEd9ft2UqkPkLnWmZwBUSAYGLDWFBQcVk2",
  "key11": "bQAkJXne1U86UxtgQiQRkECdDxX8R4FLdG3CGwYSpJrmWDuwiXanAbigbcdraQPYHbgBLrivJQHFrcn7ej1jhf2",
  "key12": "2v1bF2oNciEF8SyvcEiQefEKhXnEnghLsf7SBYfpZttEmR1SJaq9NRwPEZckQNrFm3uuRT7D81HusqWVtDnxaNNj",
  "key13": "5gFUGRcjXRL6895SSkkDwStz5bCUMJxWmvh7vt6BxP5kFnA9rcsW3htWkEHvDT4FLV4bpNfDpuYioNgNqmfjgyC9",
  "key14": "4Qmx8WbiAZCYNK7y4kURFiuakjPaz6d6Mr13SNTsZoXSBgyD1JffU1RA3tPSHsCyDEHYPYRTfWe8vkgfvuoGre4B",
  "key15": "PdNtYM3R2Qzk9fwPovXqo3jy1BtCtCPKjRzLc79Z6kipDc3wLvcimXAweJFHagdmDTMLFMKzqW5CRv8zUYq7GS5",
  "key16": "f4QVTyF9UcCTsWGNEoNJQULUPBcPNvYGoi8AcDUbg2UiGPBCdfyDD9atrRSfzoBCRXceTofd8FmwShVD6uR2CXF",
  "key17": "27KtNK5eYfDiQNac5BhzfxwyZzriFn7N4641YJBxGVFcKw6TPacEHebe7KPMGcu7Ezem6ExGkTMtz8G9cDE3FXec",
  "key18": "4h7UxfeBwAdRLVf13UhvVg9cqpf4XqS7Z6g3tekGpDNvSfJkvSbcMRjnPSL3wdSB4Hdd7gqFrpFzCumEa2L2ijvZ",
  "key19": "2gmLcx3H6aBm5vNyeZqSzJpk9syg82FtyW7qh18hASF9zGvtderSzvEHZdgYhjvDEh8zCjZviXUM7LfgTSTvJe7t",
  "key20": "3Uwr2vzhbq8RRCjgQk1nAcU823TN45tGGCmmAY8Y2jf7dfnP3qrPgemDr7DpCVqnY2Viiw8SLdZjt6WkYfoM84x4",
  "key21": "CgAcGJJDTF4CoTTyq7qCrAEaS8NYKrHHqZsHEbrfaaanVjaavFoBntUd6oRvW9H6mTVxqguThEuoLfZgVAPisRe",
  "key22": "3tDYkKcQNFFnt2x6Y8H6vYt5Gk9K5uhCp7sSE1Q5z3b8MsfVk7LJaLV9wXaSqSuzVXcTmpo5iKUrxRqwt8vztZ1A",
  "key23": "2U2tYXy3C94hYbwcufmxX9ebN5wvQfh4NzK9ua6QJZy3FgDtEyJqrs88jkFtf8KrGJgBdZinniTAVNL3XaaFunWR",
  "key24": "2LnJpgAiYGEyndf11FbiqP45ffXXE9TPHWpV9krsubvd59AMSq9dpDYhZEfg55gAS4hQbs15CCDbZCWdGfZCAaFz",
  "key25": "2Q3rHCpiz4Ut8Gb1Wm5V5W6TPFYYQpjm4QzKvHESCRJsHXYZM486rxvJJr9JbAmLSe88Tq1vhff5GFT4VPxVvtsU",
  "key26": "39GAZnfDbDqUE99wf5gXZ8ahBquK5atA9ZmTBaT98jR4QDKC4G2dxESACB3t2pApe7s2qhPyBVUGbtLd6gnZLwFE",
  "key27": "5p7NEWKv9kLkUSkmjUCvg3EjPNjjcDKUy5MXKPBvTpyLb7xLwSvzxbpsEQ6s6FqKtwnyHWy2cYgonmRKmEYAxtxY",
  "key28": "2Sgn3BvT6Xjod9Apq7Ufr7skU4tZGaufuYRVh3n7cPdo76D4irKZqSmbdsXgfY5nBfegFF52Bq3yj1rjucsEyWeY",
  "key29": "61rJaBSfGXtbeECNVHMZff9Hzu64wJPNKgCW1JGAwTtKKLrpBnVRcJaiAm1wL6cscUNNsPeBmfLJ1UT4CDgtEpdt",
  "key30": "346Ssqp4yPzXGmzYbhCzkDyHg1Ykamunwke7YzhPxRSj8ZdwfytK5woJjsMBPPeL5gCUyw4ZbixtZAtrcC5Ci4WK",
  "key31": "3R8MhJJyjm8igwPP9XGgzaeoPmFxBKVETwyXsBJsEGJX4HVgUzBDRRZjRXXwAPE3fiWHrfeevbzPzsEp3JbnCLzm",
  "key32": "97eLJcFjpHvcG8q8uRuTPAUTpkuUmohUfgNG3ZkrGLL1uNbXZNG9GUNLbvvwVuA4MAW9WCByb5Z3JS5Zqds63nW",
  "key33": "3Lj3RdSVeCRFMMtduhoYxrZTihpFZFKsJpwu9PgVrYbdtwZnzCrPaEXXnursadePab6b5C1V6zUEWzYkA2xdTEXj",
  "key34": "4Hvdg2jjKhVPg3zCb4JNPYfAUxD6sNCrhRbmoUppHmMRzmV6Dgctc6xqcz1NsurxcocAa8QYnV1XfovCHZWKznn9",
  "key35": "4yFqZyup2fL3BA2Wz1pKk4HiArxGhbXesiC8bVQuZcn5mGS82bnwS83AtQWbUQApCiUiwYfP2KY6VQRJigQ7QPuq",
  "key36": "54T8BwRKWXrNh9NzdvN1H4bhBypwGu82jbZvca8E6Hdd1eN6GUn9xiSg6ZZSxhYYzaU1jbDXfsSprhfzbJB7HT9g",
  "key37": "5YSozsrD5PyCpM6onMBTaPwYpMmQ7xNvmQ9HAPgdX2cKW48xhv7PMT7MMAjcZXmAiXnbj1K44ANufag1g9jrMrsW",
  "key38": "QQGEzefsZsBhxLe6oDkGPwaVypoSgwq8hD22qgqErGAfVUm7abgz9uUFKPXHrMjFaziWXbzbH658ZhFgnApavQ3",
  "key39": "5EWXxUxFgZzLkTbomzJCKJYSsxuPTTht25L2TDa1dY6N6No6yaR8J2jw58KMSRkygAWuFahXsGAG6T4tf3b4fzW9",
  "key40": "aW7gZgDif9LkGPzWVXp1L42p59fyiRx95J4FV6TNdWNPnExfZjpNuENHpB89KToqRttKxfUA9gbd1arALbVaD2M",
  "key41": "4C8aMeaiEsi3V1fPiGKwvmKWGMMju67wDbxnkHgs6SiSuanNBoTirN7tJq4gTmru8ashpWJGYrTGcn67gn6NWRw3",
  "key42": "4F6FnAottGSwTTPF761TKK1Pt9B1ofwv8S4zHBgWgya6zAuzR3t6rHjJLbUm2RWxfXFaj4a4NBTNoq9S7c8AhX3T",
  "key43": "2uW5RL3MqYgU6sJwzgPCwMP3jJvhw9ghNTQ3Kbi6U2hAbS4ycsuys2issRW4nqZskqt5N4pW5BFK3kX4sycp5gXh"
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
