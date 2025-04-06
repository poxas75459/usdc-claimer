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
    "2AfTH1xi1e6j1nXLvjQvsdb6Tdpu42EWsgTkDzwv6dSE3GTGbLaUrS6jfFLAa7uziTJSQye7xS3hwYcBur717BUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mehc8oMcazu3u6V4Q4rveMfQasbz9AAJu4rAeEjvHpWxRUvDFtkqmYQqcoqfyyPX9tBBsSQfMorNHvGVHzg39dW",
  "key1": "3BgZSzfjHiTg9mxv3qDkBhfYUjdb5fqzhUVmxzCdc9uUiUN4vHQas4h3r4hxgFEED25Lqa2BFxZ2LnP2eFKcmyr6",
  "key2": "3sD6upu2f6SKtz5DAqxgXpWECqu62yq932nnTJMnvpECy4aptgFuD5YUNuQPprLa3Qu8MYxsEEZHu7sYud4Wcdwd",
  "key3": "4AZNxg7UzcFzvCpHrRRNmPW6bLx3GYGiGJ1QmsEVsasP8UUy6JGx9jQ2aXx4R7BnKMy3jyFEoAHCfjopAZ1HvKYv",
  "key4": "4sWyWrfGHM6qoos2cy7WChPVYEZq9Qav359Q6Ck8QqTjpsLpC16aNJCWQAkD1GtnuhceiwzXsz2d9VQKYhz7h4nh",
  "key5": "3sypRhdfZH1qmMvRnYfeegK5qfzF3n1MhY9Ds4tidiKwzHRJ8uH7rxCwMXF9AWwLic8UkaE4LFhHZuByT74bNTKz",
  "key6": "8TFVR5uagne29m6Lp9aTQRJ1DdrMRRLY1Uogb3eMNuPhJ4JhUzgANe2mQpLjkr7bSQvDJKaBu2cMnMFoY8EtXE5",
  "key7": "2NKLxEmWSpUTHRZ7h9Zs1kzk8iKdhfHfbi4xUVYVJKCEnv4MfVc8Gxudyo6fgBWejc6njrQegwxJySnQFhnh7y9R",
  "key8": "24SF5T1Bv9nrZ8js5vsuevATGWmyRDwnKZP8wQqAsQUWZp3sigMG8oksfYXvwZoxcevim6rnVjUPTfSpoBmhMUas",
  "key9": "66acBYbzXq8PHYXRbdyMhV7s3YnQ8cCtFdvPCGa6Zd6azXtgw6DG7YmkihZYCysybQrd8CjAxYEQimSpbpNpeZ4q",
  "key10": "3c2Fq6zEe17qJqP3A5bjJTKWAQ1HtxyQEuvD4CnHWpFqr1XiViMhhCRf7eikBiFnfhLBQ7HmN2obnaaMDVzCitxg",
  "key11": "5GM2JTzpa1dPbc3Y2LSQocUFPqRiB9NrCt5PD5zGNfT3n637WzEgB1tnQg2i6uttAAQGybUWcdQHFr3PN8tRari8",
  "key12": "46FywguNS8qAPcHpgjQeXbjVERcQMRBpoqoBJFxSt9Ev2mDfpowcMo5DGPsnJ541T4xqjJeM4ejeyTVpp7MsspFZ",
  "key13": "4NnSRWYhGLowM1BAct6exSVR4fnPBJ3or5AHRRPXLHSbSwDMr7DcmcnaqFiJA1bMAS3ukT3cHDieFBZpV7RF4YRn",
  "key14": "4pSC2dEEYLeB5q1NGorTPPciWA5qQZpJQxQo8TsZLUkgmkzwpW6tWvGufm5JjQ5SB9Bymvm1933SWqsRK5TqQ1Rz",
  "key15": "3mSd4wydvkhK7z9roT5BFJB6423dpJnituFFz4MdrgZ1gBh28ZsJkJYieQBuu7TjguwuAHfoB9PP6CeMVv9Tb79p",
  "key16": "2EEHZXMbkqjonqgxeLAnwp9PpM1GGALXKDJ4PnxsqDsg3BY6aZwnthDd9MnQwmoEGZLMZUyMEfEaXhjDMr9CoT56",
  "key17": "28XoePJ2urf15o3rMGZ2SuKz8kdEJcTCPcSJd6L2r5GioL71EoDMD2Mq9EpwaQzND1hC6BPfteGZr8P7gGdC5Ysj",
  "key18": "Za8PBsnQ22Axs5gEwfYLvAdU59twFQoFciSTStWnqmrRs3fME83MiYfAoTYEukQHcBzmXe85e2cwUbq4Co63kQx",
  "key19": "2uz192YtF8GjiMfkNu4PiarPYaNTJycWXwPqWPxQhqJJZp7u6C3Bw4U82LZ3MsMs33sZmThtW9wGz9DXAFkd8dcK",
  "key20": "3aG21PDvK2zdynTAauwcP8D1VZWhAvAwF3A8EW4bmq8ipgKR7oZm7EkqQ6PA8dRpdTGSMR7uNc1o7GoqUcwZipDc",
  "key21": "5k7kfmkV8CgBAbMfT5iPSomnjLZsqwYmvd6VAaCKphee3BWLHYm7pUrueXCcQpQPLXBXBYErucpRrJb74AwutNyK",
  "key22": "2myKP7CCw3HWprjhwXCG3dwkkmXwUdXMZJ96f2TT5F5ZTv2QVurLAKtnMafZFn4TmhPQTAPafZssdmmTnjVNyjVV",
  "key23": "26y5hfTqToe8U23D1YFRbbGMQVPN6xLUKzCq1LjR62bL9tsKuGayzdKxcCaMv9kE48Lm38aXCx8wcDYjjFnbsfc7",
  "key24": "31Kf3fY7xvotnY12Cb4NVnSYMyncUbqwA7GPSnKo17sdU2CEwyaTp2v3QdGricG6Uj3MtEVWBbm186iq7x39G8WC",
  "key25": "5w69sJaG4KTrLmyTUbtCh5yy6hFSqHd7wGtBJHnUaqi54gmVhFwvypUnHg5USv8F5j1rmH8H9a8zwteHt82NAxEA",
  "key26": "64uy7mHyAr3XtwiHxfYuZBQw1kbE7JFGMYLawwMym2wyJmmFDbjQRQNLUVQHZHHJg1nQEK1v7W4d9zYp1hgzChhQ",
  "key27": "5B6jsHuAjpsyFjZxuLEVYe75Z4fAduCSy4MLC5tDVwBxW472FLrrAugtP1uCugn7Dip9haqpAJgmxhTr52TSYT8n",
  "key28": "2475xvuEoLDuEBroMHCBtq3mYxvjifRWQD1y1MmJSEsm5UnjTHf5v7r3a8GHnJvv3Xx5bJR9zH1H3kroBckoQQQz",
  "key29": "3xJbvN9Vqeu7WYTPqw1eZ2w61tKLX7Re65EwdCd1DVkrWxVvmdvPhtsMbiTxdpeqUFt6YcuPEQRGT4PrsvhUzLNZ",
  "key30": "27R6wjTH7DZqYszQo1dX3cpEtRVYpUFHJV7eGnazrZ1FuoTv9qghJm3pXeuT8aFehLDzdQoo7oPuvZGyGvpvKBVX",
  "key31": "37eej88uKwd4c8kMhsmeU1ToUEUYFGyuHYuutPLa3rZKEVFwwzCJDYAJuar2TvWZrGiWqkYzpdStD5aZTZXiK8xU",
  "key32": "3yKAuffvVuvbGWXqeS77S6kpZaXZgCJ44rRN1obUiNHsyVt5hxSRbVZ326FttRX8HEYk8arBTh5wTXUsLwVQXyXp",
  "key33": "2N22vbCFSBLnBNPCxHoMeLdPbFKoyjYmDo4a1ANZwi2pub7bJffysxHnjX5ghprgpGzRvQaxuTVCw6ZLkCtXfktg",
  "key34": "3dJ8c9vMdWHaRk4tzgMHcBisioh87sprV6CEYwoV9vTMjaWYmZVbZfLTPQ5CxCCSuF2UL1VdtgsUnhoDFK5YTCua"
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
