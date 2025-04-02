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
    "376oHJR8FJs3kFh6Hfcsidzz4KyggbB32Tv4mA69ow4KmwWBgDBbVyGqkmCuS2NYdqFFQBGXYRp2txnZ7NhRTtbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXwcaKZk8kufN2sBcBPwTsbJjTuw1ucUtKAN4sRRra3dJjLpvZmpA4BZZnM2QGb43rvaJhEPuUPJrU82H4NKeoU",
  "key1": "3vTwgYtmHxyCkffjwdCUiGgRXn28Pot6pizPDrUgrXdJMUJwiDrGFCPKWtEJUE5s4Hukre97Tetja9G6rjyj7bW5",
  "key2": "5a3LwwFBf9KW1197MTKVYQZk2Kuqk55X9e8ehSNt1taURjHzfZ8gssFyJ5yTdM44tmw9qat2zQVBRVB6brYQ2ZA3",
  "key3": "4Zb62WChJajrP6ch5Z2DSqHL2wbxzgtoUKoHgq2e6YcS8BUH12r6Y1mSj7bpfkvyRKaBtj9s9EBb6hMFqSjYeDHt",
  "key4": "mY7zgPNBP94vQtD9PwM4kpn7MZrbxysUa1UtRjUnvhCv1Pu2uQQnotbWehN1s9b8G777nvztQQkHMGyNnuQsLcZ",
  "key5": "3MwjssgtfWTNMoyiDa9HmWLcCAN5xEpk5tbQzi4V7XmvmWXmBt9qfBzgJ3bQ7C39GdLj79ZPzquVVEskUtZars6V",
  "key6": "VzTEGeBiPyDvxCLykfAcLWcMMfRVLX4PkfD21rVvhK2gnrFDfrCNHkWyzuY31x6yppXn1SUomVzGkvTGZRAuH3r",
  "key7": "2BFyDH4t1dxGbfe1wZ6cpT9iXGtTsrFHBdLowt4cZaBJR5y5nxmMxcsoY2QPdiNi3bryCZQYJ1CWH9HM7HxUdhxa",
  "key8": "3ZE9ihcnDhhwqkNPYYwvPnTERho9wBkA3FHCGpuqjDaLpMfLdJt2sSSHt9K9jCT8knF5J27Hnn6dEu2ZfN5eTBUZ",
  "key9": "3mBubGBwGrdK64NuiK9UeNjzj5HXT8pNtqny5Y9fdVJgcBGEygaZ2NTTRjCRyKKHA4EQFJfTngw7wx4RtFcEzthv",
  "key10": "31WZTXXYoSNbDF52fxEiRJE1dC3YcenCjhhhsFM5bGW5XG1SzB3hiAWb2r29yHRCezZ7RTbxxGtfx9oXbj72smL7",
  "key11": "5qZqkBb6DXRHcsUBqe5dYFXrdos5Z1Agy8z5QjoKDWgpSMoqdizL27TEm4Ac2mFeoKrP9Wv5RpyuaT6bvHPjaUkb",
  "key12": "5cjrH3RVCCVe5zJPYRfvzNdRtL3G1dzsgJg2Usg1WS3EPXgYEitKXHnStWUbYx6rwCrToZrPKGjaFxajMbVtMdHV",
  "key13": "4SQPkWUdnxY9GDFeYKRAfNqrGNeB5Mx8foV4CpXw2fUWTT5zWRevGPTNrNvjjmvGrxLvJ4QGF4KW8ZdEWfVbkEjb",
  "key14": "3i3WeHgAYCdJuPu4oK1nSjfsAnPXgjoxWHSCuU8ML9ueEL6BSGufjKDDw5hNdaVhaPz62NZos8igTGxJYxpR4eDH",
  "key15": "hq3b8SdkPgRDcrXeAP2PRbAQpbbMa9BKSyDapGS1Z8C6DSt56VqqnzScUxvjgcPt3Ddc1QbZ5HsTZuuNrtQmZPR",
  "key16": "2EbXDJyn7TFpnv4oGesuV9Fsc8JvwCpAtH8Ui4j9LqmJqsdctVH9SPEYGaoqtd8TMK7p4n2HpAq6yA192Cuw41n1",
  "key17": "5CEu4r2e9vvahvgtGs3zpk8FFmUThQxVEXHtDczPihUUUp9v5UJonqoZvqGz4kieoP8EatZ8qhxXhVupUgQECaVo",
  "key18": "VTVoeNmMRseFG8eCTpLQxdXBT7BRRTEmH2cXCaYHvknD5p6a6m4CtWPqiwuJHyViv6wDak9LB92gT6Esrn4CGVv",
  "key19": "4GdxgzLQLs8CYTGdubR7b8JKVavUAAYXDXNYNfuMu4X65pMiQbFuaEqKfv6yNH2mZsov1E3v4HtAGzVUwfvZNha7",
  "key20": "31AsVwAcQCnN1CC5paUmWjNWNHeszXC7xVC4qEtmdyZUwkWrWkvcEsk8gZK4yRKFsrwzNrXUvmvgnVcgJL6JDvB",
  "key21": "5PvJGNMi8eqW9N8R52ka5URM3CRTTgQ32a8ko9ArGLui4fSGDwNwKKGVmAhZK9LNFaWR2BCdadMypYiYAnJTcobm",
  "key22": "3VkniMF2rWUEA4DRd53BkGB73sy9XAx1WfL6AG1toA451y5oiuChTUTQXGFQsvLGs1VTr2DYQ6gV6cD9qQifKiud",
  "key23": "SQWa2rzSoEJvxd2TpFgKRB3r2VpSKgVGpy8i1iJRzMjHv3i9Tr4ASCVkySoqWGPyrgYsapebHVWWx8BHhZaPpbE",
  "key24": "3YtJohnr6sy4wo6MH86YpFRKTr6Yq2T7hkdZP5CRCLoEedzjvdQwJybBoGtWFyAYzgzz5TqcpZi7AzRcyEPiyRMh",
  "key25": "3ix8XbA2y66kB7epgG4XQwiddiDtPe77LTU2D8WTLbgdudpBswniW46G6PTazbk4pnvzq5ALtmHfdoLwfC3VfdYq",
  "key26": "5Vm8D1zLCqbBSGz7fD5cVSEJ7Scqoom5qoMN38uNYnksRL92emApYEcas2qxAdnZc7VBKsYk8BjYzoSRwS39hHb2",
  "key27": "5ThyutRhRcKuA3JoYY8noLw2P4i4W1f5DQWAmrLY7GWenQUyzRienk8Z8NjTFeMiMiG3hYXqV6UrF4TTTHafRT2w",
  "key28": "rm5XAWdS65d71sMnDhf73QtuNfbYRUx83wSLK28jnkdFF1p7zqas2QfmCnVzUU39Vs758j2haEaYiCi8kGK5LDn",
  "key29": "5Wt8VamwH7ffBkZWxQXKQLtAVGfc5NkAFbLF1b2iLTDKezy6KfPNjxwME78oo6biL2cGFi2HH8tkaQ24EpoDKAkW",
  "key30": "3XfasvsAE2sZxN2qBjyLYESgFxH9nAwy1ku3TWTfQB6J6oB247FakD5iS5qsHtHdd1ta7i8vY631qHm1j9rPnkfW",
  "key31": "24tWSyop9vW7MZHWQ3bUe9ga2Yqv96hQL3NrwiAxgBtqKxHmTwrPLskdwrysGSbd6YH7uUNBKGjm5EVZME9CJN4C",
  "key32": "51PSXVemBf4uFn11bHFTpuuHg5WQuMEfKcEPcSXcctWrpBpDfRfUg5ozxm79irKvurfdUKbtDuee6koHva9tP8We",
  "key33": "2cHHE55eFyubVCnWhGPr48fRSCm4ntDaQkbv35YC2bsCditCzsS2iRUqwXJSenbbHodE1pYFBu4KbKUrHviEHt7e",
  "key34": "4G8rNs59aJygFS8xeB29RVRjgdx79AfCJHKQN2RxubCGnGXkJbb1ctAD89aNd8pHCswauHFyxzs1Bi2FtUErJbEv",
  "key35": "62Cxr5PW88tzBV9NxyoH52DCupBorssh2BFCKScFgNJvgM3TrqmMUHZDBg4cps12M1rLnRxJT3MLFWRpVKYSFR9o",
  "key36": "5yXzpiANczXD2FAmdpBMeWJGxkphjUVf8GLLE5dJR2VBSmHWLjUTHtUenYaLr5ydgsXsAnmfTwkZ2LkGtzQvrBQW",
  "key37": "2hHJtkP43bshzb9doPRSDbfo33o3PphNjsVQ3c5Q6XGcHNjq2qxVqVakvBNXTMhTWyuRVNqjiye8E1DU2ErhKLU5",
  "key38": "2UZ8Fj6jCLPskQXevzcYuU8CmvMVLepzMYrT2CBT4nJmGzXcCoVZAUDwpynizAgrgU3PMUjsEggBugXxV8a5gVFC"
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
