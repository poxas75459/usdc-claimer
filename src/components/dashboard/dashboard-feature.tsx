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
    "4iVjQYNB9G22UVqYTAXwN1AEKMLLG9wscdTG11pAqT69Yo9fqW8pnkwCx4qNa2GGgSzZRXQ44qDchyEL3P3Y5ss7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ripAEZr9EFt8QbBgjfjSUBY6ShneSRuNYVripuCLUMPUziqVi9jTQHdTddM5hN4B69fEnp8gLf74yBqotY5G5zn",
  "key1": "4kwyyYe9gWmjSPc31GE2nqJDRp5gHB2mCVegtjPzB1BQ7zWz6cwA4uZCLB1hTpkSor1B8w1x4n1X6TVJ3D2nWGAY",
  "key2": "4GVUGdKKwVRkmjmQY44Emsn65VWq9MYUzc2ZJmd8tF4A8x6bWaqS77g935QGmu9VszEFn7F43ttj4FWRUtz3gzma",
  "key3": "3QAdbEuzmSUHhGh5uvatoM9FkbZzksJvhU4Bw9er77xsBesBu7hyK7CAsQDJ9w6eMATaTQuw2ztJXSuKYz8DVDk1",
  "key4": "4TuWjNqrzoey5RX3SSRWzGSw2M3MDx6zQQLnWTiNsiohFLLnV1eoFeZyA1jjYiBnMjSQcc8aP9EBEvAxps3p9zSE",
  "key5": "uL51gEGSPzRtKi7UjcLyt7scCSCThYHewDSD5ytSjSUJaRWeQPjroTUkkGDWavQumsQEwMe8rRuF2YpdwkSEhwR",
  "key6": "4i2RHutFyamDYp6i1ugp238pj6dMxpunZftRH98V76ybT3AkenWdxtWCjYJRNrNu6VY362UQ5wmGcQHW5yfG9dZD",
  "key7": "BQsEwdFAF9NBZL6gGYHXQ53cG46oQbYSTPii4cmez6wHgKNcExMqURLBJAYJFeRycQSRZ975DSJ7xnxxU9nmxYe",
  "key8": "pEC2dRNmsh9fiCttkkPppsznQq4nJBn92A71Hs8T8JwoSbu6SjvAUwZAnjKjjPRWKyvvf6H5AHjRBpCpVCqCWCQ",
  "key9": "5bqG8B1PD7xw1cgqLtFcaesVgWiqFmMPe3zPakHj7Je8EyGSt8G1voYVV4ciD8DuoXeP6fNAKnLoP9MSwoHJY6jv",
  "key10": "4Yc4vQ74eVo5atgezTuJJa9mGzmxLu1CpZfzP8UUz7ngqNUT2FeKZjjWdkzCfCmTyLHaREzCFmPurdWDnUXLEtVc",
  "key11": "2MPk9P6sNBYwzbG3yDxvRMxWo6YK2ZYSK17o65jb1XwaKTgHS563gCGqVAoxv8PMkqVY2uQ3kxUJsb7HU4BJQHfK",
  "key12": "2391ZBVsPQyi68nxELQBnMLzDC15og5tDgXChQd2SiiWPSiLSCXAzsDxXae26ePkaNtx6iE1uXki5ANNkATGaezx",
  "key13": "5g4FVL2L9Z5hukWwDvfEQVS8gjR7w66PJSbCeq4BtuZ87Wn7ANAufVJwwJPRQ7rp95VMn3hdWbnZeXbBkrxdM4qo",
  "key14": "4AQ5Fpb34FCs7NEzYJ17CGXBDkkGKqdXBUkacLcSwuE688NWc9mmiPkPm1cNwStirLmvJUCeRxg5mgvhK1XxDWVJ",
  "key15": "2jQeg8RMExQtDscsafyfLtzkqHwaVmnpEzaSDnvG669AzUJ6cyP2W9DE5u7meXzLkQwDHkNUMHVjBPR72fT3bEMh",
  "key16": "5iaxQdSftjBT5wdmLuep7frYLDwtDYiLt6qVgEQ5QMVDm1V37ioDd6NbfPfQRuzGPFYeUnxjcfyqxq3xT212mdYW",
  "key17": "3ULK4XyhPnhmnF21nfu5Wa8RC6L9REKcQ8JZwFCY8x6zjfXVkp79hBLn28RB1CZSEMFDFUvTpaWtuK9RT1aSsSPT",
  "key18": "37ntzaQhZh6VwPFnub1sNPTxqRXwi8sKXNXuqsDMGufFRsjL7P39e4GgxbU26Lbfb1etm8va14BnbjYEbDTqh5QQ",
  "key19": "2RfAcdq1WYSiMfLB7re2qfE532kqgCoSw5KFXVYxENcj5r5xyXBK6TFCtFA2qZZzvGNyQLgQSA53YaeGW4P67mGU",
  "key20": "3ymHSzC4sYNHTAPm2iorDSjej5XJTo6WBubZhaZZDK8L9T9cQEV2Tr2CPoXR1muEaSn2ABif6CivtsP7m7xA2bcH",
  "key21": "uUcPfTQoNsiVNm5K6uhnSe4dCPiRguZTzUN4SCtuyMtebrWcVTTqp7fAypY1A2SYyyLLeN9E1uSJnGKwJnq7qcv",
  "key22": "GXrNMPGbJKz2R39YaC8eWnmVwxy1Z61KDy3YVm89HaQuA5mMk7djtKjYN8T47n6D35tCUAKPiXEuGCUmKoSkgY7",
  "key23": "4pe1zkryDnutkXfMWdgzCfWgpWS1b9WgSFTjfdSniUFqykheu99xS333ntbTh5HeDmqfe6enp7SzFDzTiZpW9AYk",
  "key24": "5N6rBTD285bGyZY1TBcxx3qNEEEenySKajnL26SYBSNmdmoUJbZmsvVDN1rhxLLM76RpzaHSBgJTCGogfZ6UxnWu",
  "key25": "3nv4cAobWV6TgYWDfFMUP89rXgUHtTg3FfbFtYYeAV6ZCEL8GmWZGta4Djz51iL2xBeeBXqKbadUXpw3a6M56rKP",
  "key26": "P1cGrhHXcfgCQ9MFyRGjGi6fGCK6PVyAcc4h5dq38dWzbQutrd7cpNuqrzT3uf3ePCUxbzzWBaJhpmDRkYnvJQq",
  "key27": "3NYqwj7W28S6MGxmR5E6r4X2nRstGG8ZQLYcDUs8BreyVkk9Rbea73vSCMs5F5j6ykgTQ9grkgZkmKrhPuGbtneX",
  "key28": "aUvHKFXc7TFFDaBdgX2j8dWxFeUMArMFPa19Lz14b4yiCo6mwi6dU6xNbXawmYsRodc4rB52C1q5DcBNJijsmFc",
  "key29": "yphhS1uVLDRcp1CaYM2o277poSJLSWNTz9iTW1j9u95nKxr9iUWu1xK9ZFLdzddf9AtcgELaRaPMiP2yx961fZD",
  "key30": "rsYPY2bNHxsAgtuXHJpEonMXxtvMV5fVJtAaSMwCmu87VtXgSgKXNPRUfhPyiNq8pLHxVrRKrJmwsFm82FpaYN5",
  "key31": "5vmLeAS8aPpoRB9fTBSbgaWEAnExhjrMfbhgNq75DFjGmw4K2AA6B7kCNiDyy4tFohRaD6avFwF7d1JrEbwxKZRs",
  "key32": "U8aFFijERQqfHq3AhyCgphW9uk2MGHg5HtWCDNQKQwTp25BZYAWLmxg5yF1ndwAtk6fs7DXVS3aht91Qy66XvP9",
  "key33": "3De5B9wocK669rsgcAGWh2NiQE7feXeuxubzKYVQc55dpKPuWmfG5dUVaMfiqqcCfzkNmafwGAhgd21n1TdqKLD7",
  "key34": "63M8LbEWDJxY1yzsap26BsvmRGrkjbXdzgau2vBwf7HtGAVFZitrU7dvS6ZURerdxTtvAofQCuji4Bdtk5KmnK9b",
  "key35": "3sYsKbfb6g3RoqZBVTVmKyjU4VX2dCDJijZtYQwG4x6kRo4YTz62Y1wy9PDnWgBSQPL4k7tshdNqAQhXdfM7SZbt"
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
