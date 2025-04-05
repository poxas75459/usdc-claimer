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
    "23vgi5Mo5ExownYmu9JiK5N4TZXpyneXgQbUDWk9o2ktYr5bUj1HAeMJPjNZEQvMqtcCLCcPCW5eWwKNS7P91iFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Prvr6E3hK8kaAN3Wd7kTPNe4vpLipKZzX6JHeb8ZaiuPptKNNhi3zbmif17HaAHvLts8211ZmkXGaauCkzKDAjX",
  "key1": "hyw3cw1PqFCJEKtP7nTgQA9rb1KiUPSX3aq9F7GeWGYRjJGVK41BAg7ynshxmivk7YS5J8ayPi34Vsi8XvgsFGw",
  "key2": "s4e9nsTZSZ1zG9vZ4NbDV3KFyD1sHugdhT7a2aSS2m9FUjSCTkt5By1CFEYt5Yufsu6YFMRJsUcSBBCjs79LruT",
  "key3": "37CTse7MnhbAWRbQJA8KY2cpLaSVdD1oKKYK75nsmG6xq3nz38hUVMTDrGZajxBFpsTACzJ5Bt9H57oZYPvHe7F6",
  "key4": "27sSu5ho616WYAvXNTGE7vkwNKZDN8M1oizFwD9Qo3Db6FYeU7N7uj7FNQiFcfDnMA48oDSVQT1sWqEsDdznmmVV",
  "key5": "511n2aMYCrCNBW1wEQAMW643ZQEXaBAgNATKCte6PRJ3dP2JrYac5SkqRbCEVos64fXAuegMyMEAfn9Zh5cwoA6g",
  "key6": "42dzX3KpFfA7Jt2jYD9DeK1VRqQo4YC3bPuDm8RfRsAmHYpaTM4TMbQZtXFfH3QuJWHeym58wE1DHQoEwfj4pPcR",
  "key7": "3r8vCAMQAhDwhfAYB9R4K8hSyVocoWkwRs8pvuGXqjSEmFikUKKkgnNbnf153wt5fS6u6iBerfMmPxowwZDhvUeS",
  "key8": "4fY8aTxsAK14Ho72ZqNf1kGaBdpxHzhZa14eWZqBdDHp4GsJWgcNwK2aP4nzkMAfv2hcqiUiFY4meU2QT9KvWwjs",
  "key9": "3KSFXoANmnbWsdLhqxqEFdYDHWiXnqsgeQPVwGStPwJK2Ade4doxgAc9wP557nNmNn7jiHmUyLfem86QcWzmZL9e",
  "key10": "XtUwTiycuaco4npeydB6xo8TzWYNBR81aezAcEU2dhEr9fncksUtn5uwpCfzuAVsFRHtpm8hxnf1pJyi6WUb6BT",
  "key11": "2esVQ4SrtbpbA1AD2mmDq7DKTHLeLaCsRmL6gVeCwKjbjNzajUEED9Xdfe8xyrUQbckZVCitnKL5uwF9jRhaMrNN",
  "key12": "4sgToGnyNuWKSwXeF7nkTqojUSE99xFao1bMA9T5A1fsAg8fMQmkU4K6o5W8ioxKwAq31mp5xXfiCvXf3mrckabv",
  "key13": "HW6ms4BPAcNXy6J1VqPuNPoZaahHTknkg8B4puQjqmmEF72xq2VdYVz2BLtCFefw5BmmYaLr55mZsnf6gE6tfC5",
  "key14": "4UdrVb3vCtx7wPooYcBrqcR6yeSLFUXvYdkwWqanDXuyztpzrMMn29z6A78RHxzQwoxTTFM7orhsCRZDqjKhiD2z",
  "key15": "2f8qcv2y3Eyk4FPF3ck57KrDzfc2utgp3KNLZDvTP3bLHiwi7fcH8mS8Qr4JLYoDPXsXkakDwJ9qY9LQb2nGhq1Q",
  "key16": "4JCyZbo16MkzcqampMeWhsGgMkcV5LCAwEy5GJXPiuLxbx86kW3gzmNyAYSfBVpNkm7cm97phNyZMBBD86nTMV4F",
  "key17": "426rZUp1nyhZqsEiT2QoNV48upimXPgnkubMzGy3WkVcHXxnTUq2pzfPV2TUwaGCMFV3KGNzCimQh5iJd5wqbfLT",
  "key18": "3odx47RvTdE84w3W3zbgFhD922QgUJxqxj8EwVEC5Mzc2NXpTEWBqgUWYwawk6CVJLAjDRnLABaJicnBd2FYXMSv",
  "key19": "1qWs3SZdQenvMxugwLpU1FDbfhcjiY6a4Co5Bc8kGqWLMTzrtzUbwLnCHB3H25JqrQPX2xxLxF2m2ND6xnAxdd3",
  "key20": "3C2tCe2i33zxL2f69cAjFK5FnFu7bdTAJxpBbmx2vjNDsgHpmCwEKTKrC2u8D7W3YT6VoCpP6Su3G4eALssMmDtQ",
  "key21": "2LGvWdUQymrag7dzjKuCd9D9t8GPx6JPcrXXqSZ9tdj2CeJWDK6LkMaJ1VXy3XQYSHAUX487TYdw7eCvXnfRTHKM",
  "key22": "4gEPNeJ1eQgZaTMV8RDyxh6B3DWwGxwR7uWqp9dHAyL36Awu5hajQc1ttfQfPVfSu4jUNEAs1Hbnk1HQEiM6N97E",
  "key23": "RTgjP7tYQECrzXZ6XSzjGC76eJwrKWykMhBqvjaBTfQNUp1Aa6dEHqjCBAehQVKkF24SfcvxWRdoQcaGKsm1hZz",
  "key24": "3qybqadEhSzshQAXGCEDGKQNZg9gBygFqyksEEbSyB432ejZnugtV4G5i4PjhUX5eDReiySmJCHxadRcVSZvQBuw",
  "key25": "4QHStRvX8ByFQ6QmNdZJ8Ttt8Tcgc7f18wJUaVgHQNaLQF4mZaPVr7F1Eh4W7HRRT4RXP36yKw43fJwQerf2R4Fx",
  "key26": "4HGkfnGT1Z1z1aGqkzBBytLUM8XBBdcwE3ghJpthG9VUyu7175pabM9zCQd7dG4Wege1UTthzdKHhMtTh838V1TZ",
  "key27": "3Q6P4LZbwLgnzHnwKwWgb1H4rmECtY9uti6iDUynE1vLrnP6dwg2Yn9ys8A1uuou6sfkw6Rh7R2akjbnSzLD5RHH",
  "key28": "ZFwcGC58gYKbfFXiEWZmx2KCH1EKPqCBgRmZFaCMXvmQEaJYV9EYYKUVPQJQYZkoG6JCaxkZuFfxZ76gMYXVAhH",
  "key29": "2tbbpbJimCjKpe8M9qu3kMs68oigDHmcF8wURux95HJEcz4LFMSNY9qEG9caBEqRTVtsGohQv1KeA2YH4vtQH2UQ",
  "key30": "2ACHaDMQ3FMdUALMsyB58oWQWkJ4cCU83eiDNKTeVP2gi6tGCdtsrqj1EGZmtdZW7prggBr2HQeLJxPrYFh8VTiK",
  "key31": "6hreihg3wEKFnP9fiuLk5SahznXMqMDpkRsK8VZpa9WqfiDqQ2Zif1HgCkNLcvJuzorXapvNb68VdCh4L6BmZG6",
  "key32": "4HbpVwknUZLVztZ3yRQLjmHuCR1EposYbvC3SJV8BFV3UKa8VmxAQjBEBqzKgYZi53dWRvKXrkUAUtP6mw4WDHd",
  "key33": "5p5v1r1RqXtUyNiFDmKZeBQnpTsg168TTkcK4k687sjAuHv9YQD48howvg2qYdGLL9HGmGJR7p5T1GPzvekjJzqN",
  "key34": "3Dk4KE6CyWM3QwB98RL7U4d5AP3Nd1Ncgf94t2HJtuSNwQ9XWMp545w48JERuMKW6sSZun9YhN5xDdBx62NUHRwu"
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
