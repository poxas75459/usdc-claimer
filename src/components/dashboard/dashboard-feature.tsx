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
    "3u4JLaL22Jr7F3yvpdHpy8Momc1qsyQLccizGxzp7Hv2VUYG6Gi5XXQF9zS6HcuB77tbmw1RetfANTGGWRaWikH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8PPtw25YHwXBXVHqXYpu6vFDbp9rr4Hw9jzCbchxPRuihQLc3Mh3tpXiSBuSzCNgC8CpChqXaFkbEB7feNFbhu",
  "key1": "5BJ8iN7c96EbVd1zUTYyEYHuvG6JWofPeuJvZ8LMEhBeQi9GZimZseNZmQTV74246hGjZCKPFFFZSrfQ8YkDsRjJ",
  "key2": "643993iHW75T3eKecm33rJbCntffGF7NG8fwN9rJqvn7nw1a59YFigJ9etvaWsky867dQnVUCUocyB5YMvVKBECJ",
  "key3": "2UTQuyWSarT15Fzt2Ze3Q7FVPVAJEGMGpdoGKHVzUr5sKZva9KSCgS5NMu8QMuajQD8Pg86BH7kbds3oynQnskkw",
  "key4": "4DCaqFcMYQ2vsusHnahhBT68fJmjAuX3hNxuPR2axwPNwUkzg3P6GWTnybaiZ5hCms4wb3tsG5m63PVvDybaL6uu",
  "key5": "3dzTSpsKMUT9khQWsqA3EGmHn9qxg1pSqUxKv8KeQ3qMQ2T6g72MskSH8eytMURgzaz9cP1FMQ84kcjFZWj5x4bZ",
  "key6": "3g9o7x9zhaGTQww8oJMua1Ki3hcughZ4pe647q7TEKz3yGeN6frZzfV9Y4uRzgL5fUZN1M8kW4P9FJyDcfxEtvNc",
  "key7": "4YmNBQzEENdhMA92cbZG2WYKCRom9sbxBfKRJu5oFQWUiAJ1YY8rUPJxBNn5vN5Ys9CwzJb1ZyHhJj3UmdwPcB2S",
  "key8": "3d2H6LHjHVkFQCLJ9cJsMG71RTttUa43TTaCwpiGteMr4Qfg5rB1SYWsB9QJcwqTcPtWKoXZ61AYLg4jcFbBfkHj",
  "key9": "28CTNRc84Qhjrc4M9Z7TKGV9fPKXeNPUiXTvigQXZ7Mskd3ayxCnh2ShN7KGyY3XRHP4iUgVCsB1J3pxuhoX2yds",
  "key10": "5jqdWT9mSUftATfMnUDNBKqAoJrBM4gToVwJ9t7WVW9MZk6J6iEJsg9WmfBDiPBaFcB2KLbu39hSCKvGKRHavgXn",
  "key11": "2tUbe39YRu7UqZEnXGoiwTFtrsktLS5oXGJHscyHbzyXewgQm11YbYgiPejxEWmRfQvjSbjGdRGiN2ETc4nd1FEf",
  "key12": "5HAX2VUkFR6fjATCHZfg1XLcUs8iAgFtXYSkxcRVsj5LQZKq758pwyhSCnEc9N3Jb8h7wGYRjCzWcf87eMKfJSb7",
  "key13": "4vgL6jGzJu1Ud2hdpcfCJ1u6ATDEoJHdaoySJXQAmvWdooH2SKxD2zUiDyrSZKNr3r8UoMzWFqmwWQVAM2rQRNdM",
  "key14": "3Yny2vnmafZLLTJGr6ubFG2uWnQatua9kLHCacb1vF8yABpBFJnY2nca1aonWFhByWrFGdxVyGo6SwafHHxLxUuN",
  "key15": "5qdAHzq2n7XVY9LEuLwFELK5WyramegPkc5DKDjm5eXtiHwq3V5yecAjAzhRJtGfqV6izyhLZQyeXmebf15o4c1e",
  "key16": "5fzgJvtAtN7QNQ8C5afqQvjxHv5RmQ6y5JfHbkukTQ6QiMshDDwbjDyiydyQrfwMh3qHF6ArKWKLQkdPF1ECyk1Z",
  "key17": "3cvhe58LkVRAk3UQqrqiosS3bNbwraPrgrMVcJTUYfhFbBNUxj62Kx6T9mAWKR6rHrfXHKUwPTh3pzQwSCcfRpfu",
  "key18": "4K3qtboySqa9H2mzzb6vRDVgW4cm3m9HVp2XGSMNTFdmPbwQGyBbDG5XHbyYYUHWNLJ2AsYamVRA3kiN4e7MJg3z",
  "key19": "2rkfoLFkMXuyjqezyAbsN58QNbWcVitHyzPaTwn68xvs3d9jJbu9GM7ve5VwjQbzY935uUVgvr1HZm2YivzDZwZz",
  "key20": "2AVx1utK2VmW2aCHE27o1URoAe3LULT7xQ6fS5npY2KgU71frMnCFTSQWdBy7HrQ68miEmXRb5bBg3Kp1aka4Lny",
  "key21": "cjcwrtjPUQxmdrhh1QUFgN4cxFN1EZSdcy94Lb7mpFCnAu4GZUMVPwfmRxjr9NnMUq21hPEwt6ShEs6Vv2UqgVp",
  "key22": "4tmQiPu7kE8JCJMveg9zJYiUn2yZdrPmGFkWx7miBhRaFiESRnfxB9cKsEHTdqDoa8atg8vevBxQrJrYfDxLNtp9",
  "key23": "3NQFF6EsyNmMbXcqWQSvHuL64Vs2nhvj9FU9Cvhxvbz5RpMdYfuNDVg1yPGaqoU4qV5fZPWLjviuckJSmAUMxpLJ",
  "key24": "2ZbcPaA6M5eR9hyBp1cVJTW9fBdv1WYEj3wkRwVsiEfL92993KkerNMEx3wLZnigSaZHrawrgxCQMg9eee7ph7DY"
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
