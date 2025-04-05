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
    "5Zv6o3Pw66zCcqUtpw5dno3ohYFbveyR24gDDaPfEYvV1qSfz4xVtNQ55ziATCT2u246orkTb8vFADq6Ek1FzyWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHXEE8xUCC2MBByrB1RyJRQPSaHQ2HM2yURmSRmAQN3eM4pwL7UtAKBELEUUxfM6XeuwytG3cNoVidQDsCiEmmp",
  "key1": "4utMCYWda721Eb98Yq21hAmwErahb8dGhauU5r7bfSoDTJvpXj9S61eP1fF8AntGSCAPeSoYyyFRaGUjcxjKtS9i",
  "key2": "4ZFWb2FDPd6nXATizBoJzS3hR69PYeVYDeFAE1h7Lpt7BbMwTxkUUcx9uUroLbtGKgjUCKhuaHZBabwMkF4wPu55",
  "key3": "5ctHAmLFz2c34HVQdzEXrYb8LQkTRK194W4LGYkMziFqBK1NmFerHfbbEGQbUA7SUPuazfyK8XpmjWsetZbDLJzq",
  "key4": "4hk52kRWRNGsvsmbj2MvTqW48qwa4gLdopucyqwMyHQkxZ4hPAVopaDQjnjGv4aiQQimn5cMysa2r3y1WTW7zrKz",
  "key5": "5NRuGB2cZnXGsdFrM52JDe8tteXfE9uMSxJM56zkK34PY6pyVMZeZjJ95a4kJj8G9PWNsbA3Af2iHSZG3TMQT8Qh",
  "key6": "iqu5K3kqwg3DvZX2PkLGjxrfxTrG9dBXtE7hdfJUJiSN3qFqwvkBfvEogKY3vJbhjMAFggvwAxDCLhAKmbd39zk",
  "key7": "3Qb9C5aiRPS43P9bvDhST3y9wuAm29q8LPtNxo4eLeMf5omQUe2RRsNaHfkB3Bs4Cz4o2MKgbaPTNHXkZRncZx7d",
  "key8": "5phCEWhW5nLxrWou39AXxzHmrkF6trGD6ofajZH1HA523Mre7s47Sg7exRJ9sNNdFrbfeMHxPgVvSCByUdh8pBth",
  "key9": "5rqXGiQUDPF7XcDgNTcXDXd8QqWPJko7SS8L27xvExA7TorYBdnmnD1XpSLURuzdXuzZT95vbTxE1s22DQRhYzbn",
  "key10": "nQkEXS7WCBPUXPbquimV5iG5Uo6hAghQSAmaG5e533XoeFmgN4nmH2JtFoU7S22VeanbryJNYLnffd8oiozhYQb",
  "key11": "gcoQMzeGddKfCbgfqbgAzscJkPqCQu7i9mJFkmKQcpYyTkkVSVAwM3cjxYQhioPYUAV2yGyUMrd9hyif8TwdTH1",
  "key12": "4QtrRWRethTVvUxMJxWSQhYU1Hc6CEkJsJc3G3xAi1dj1QyqM9CQVe4LrwxdUKxEfcj7cEg12nrnStyLc8umK4f7",
  "key13": "2eJDQEdcBT7vxzaizneRSzE8yweZc4sfhMyW8UTkk4o5JK6BPjsJs3gk5RvJmaCuYYMhNCGUTyhwXw2H6LUR5RA9",
  "key14": "3tgya32SwgqZpFDwqEBFP9ZyctdLeXSDKZhthavMJ3mhVccA5eFUD7Dn6N21cqzV8zjbXwyZGnVRwEj5sJjgtG39",
  "key15": "4wNEgwq7tdsp36ZzkP3qHCQzF71hig2rrznngpzf2KK2PXnHHTQHyKtEAqGXe9BF55VG714THcELKeLL5kDNer68",
  "key16": "3XrTx4AYNXZqSjbsHznT4HRcf5yYC8ewX3tSEV5dmoS7E34xjUTPjDskJaNofrpf5CwHU279kRtwL5katQkxwxf8",
  "key17": "3H3dynKnnr9PiXEBj226xsbfVkBcrJZu4J5STga6pvPAnu3HpBiaHK6yT3fsM3hEo6d9JLC745NbJ8hbVJV5dGJL",
  "key18": "2LYrhU8JkqWXeQWKjmkTPhHYqYcS6Aaw1F3kpya4CL2XZdGKfCgcwDHLXUmBu2U9wdHTewZe1LMtVPL3AU9ouec5",
  "key19": "bAWZCpLCYnkHu63iPvXCr7G5W7h3hmAHm7E5Ni1ad4bfEvn9fJgKEhFkxEXu72wdD1tEGV4d3amRd35agiTkNPp",
  "key20": "JHD5Xiq9tmRV2ncfgPACYo7G1cKmPyYqfFBLBoaCUGiJEtHhCJxTTe7UML8MNK7tfBBohR2gJvj1xDoEz2ex28m",
  "key21": "518ZaFBBMwjzdmY85KBVYHYK4w42va31uCgnHjjPvSg14gz7153XRG1tD8nogde5srVMxYZWXKX4gsTW7K2Y6c2Q",
  "key22": "PQhrvZCt4NCnx7yhHx8NTh4xw4KgrL2MnveruwRdkW6RuKJAhyvUco6fLp7HhmoJ8ghNtk7B1aWbRaCU6nAQRtp",
  "key23": "3yTyNF8irTUZbkgJLCKu8KEs5QtBez7m2jLuDKxBwayZYT7UnbR5MrgRj6jSHmuLmZwhvqJmBr6VEAmxvKJPNcfy",
  "key24": "3nHUnD6c5fCPi7BXeiM2heshP5QE4JNtoUwEixrzEMATf55ZzH7SLeso8wYuWhenVB15mxYrKP9N4hhLuYhqjTGN",
  "key25": "2bZJeX2L3dx4kdhXesCW1gUtEQN8FBxChY32H2yWi1u2DyWMATQxwU244winx9t71B4emHSPA9SrrrWD6bLHLAhH",
  "key26": "4miNjZHSq34uTbQ7eAxy7o3zpu1fWeuG5hzraziy9gYHYMFYafgThfDEhxw43xtmYDoBpTkxdwMzohibXq2PTRNR",
  "key27": "3ppqy9wyBBHG5TtC6aAn6Pp6MiP1bY1jLctYJhXR7EumeyEuuVFSDsAHP1qnGqMxSv54nD8BWQTmwEQ9ZUt8L4BV",
  "key28": "67feA8BPq7EbtbJVNyxTXjkB9sqixLiSN45XvAskcMeScVxxpv3Em9ZJbD29xdso9N81GYtjUk29uju2mrWAYMmS",
  "key29": "29Z41jRMo4Q1ryo5XVjHTYKcfm3SgiVDpkBVpc4wUAWLJbRF2waWh3NJaigswpjsRFsFtiH7ZjjQ49A2zQRULyCs",
  "key30": "637fD3VQyehQ9JmBijUqfTuithUgyRWVJZNccDP9hTH9r8vdUmwze1ExGB19UW6X3Q9maUKLEQn34Vv5yaJeYQYz",
  "key31": "3JjQ4H3sGLmmBBzwAfS7dJ7WtCC4n4SXWDqoNAicefseDNu76EvcpCTiJFDzmAVdGD2etaBJbxgqDzdKYgBw7GQR",
  "key32": "4X4mZ71gpYLe4HMDtg67QfrGR5LLaDfDu4yVKZfcbMsf5jyD7xUK6YAfqgTvsUePryE42CyKsTjVx1yEkQvXw9To",
  "key33": "5in61AafQq9VQC81UwEZq9GsECUMH3vLcvWqtV88b3xPiPtJq8bncVcCxUDS3jZEyrpmmUGHeJRXu87zTuXbgDDG",
  "key34": "4xJNc2FEhgQmYYmWaYqt9szjqWJekiPw5sPMcC6Xq4GTYRnkg31HVWsugrNBviSkmyxMFEwFQzJnBmdQMGeEz2AG",
  "key35": "2Ldca9i25VbtK2fBazbnT2qEFci5Rqz26uij4jQYgZyPiR5EWB7wd9R2sJndiVTYMMBDQGzVuBzYKHAtGoyjadPm",
  "key36": "3Keaea31w4wToRJuDtitrUUy58nN21jmMAmuNVTr2aVS1mxBvGJCkmXgy7ehxfnajGZYhPNLf1WNeDP3N9YmLBmt",
  "key37": "5hKpXtTdj27Kbt7KUtX6z6rLKkErurYoW55hLn6VhVeAeUGiq2hMXstHDPt7ABZUo7Ycb81e5F2AjsVjB7qBCYfN",
  "key38": "2VHFaEwJ29dX3ExDTWY8b4F9JnF7kWX4FTHKPEqbVjrhUzcv8MU6XkzFDqyhseL6gZQpdZhLAhYzWuiR5EBa2s94",
  "key39": "2YKuKcQNHLJoPiKhpvpbVnBGbhkZWVQ16mycTAFMNZGGpFAEomTx4mSR54rEY9WU35qiCq6yLFhPvFow7b6CmGF6",
  "key40": "5H7UZgggvwEGTibis5KLtpdTTLnqXkVceQjDuJntvgKqxHZdTN5yr8u949VBmCxd2H9fdCxZopdGXFGvbpWJP7zP",
  "key41": "GNb4L7RWVx4VaUtjxKzBx9rrwA3feb47d7ewfJ2iwadVb98kSRDaivgEExS9zJvswHSM5KugQapYsAsA3wpKrns",
  "key42": "4gLR23qgQEHxpdaw39UxJ4gKgc6QwRVN82gE7RAbquPvEJfvHuahUxrtDmhupnG5Rh48fr5mwm7Z5f9aDriQUdP5",
  "key43": "6794p3GGfFhv2j8PmeZvTmeRsJrn5RHv7dSA4fBLZtxSxCQXU77J6FVeMqsjfySR4c5neorrgyfhDd2kRnwukHk6",
  "key44": "porTEzUyQ81DKshmuAB53eSdb81L1X4N9QpCVikbVpNnnnAFfDpcoc3dG4vsu1z8d5NgerERXBa1vrsnvqg8238",
  "key45": "4DkB1Qqo3X1nLkYzvJWWEXkPyMyR9eG6qrF2RHXR4GUPN2qZn5kxuiXSF4fLeASLduegjbscfkQH4ydwmcM8TpXc",
  "key46": "46EgDMWzLRqRvYYeMztpXrMmL3Hh7PKmyo4NMnVcdSV8fiywt3fofdfv6PVVQc3kMhNBTUqXG8k5HwDTB9xtV44e",
  "key47": "2hQRvMBNVQ2xAHhZD7xwNSbAR9bWkU8i1V9vDHKDTEv2osaCW1E7rkAsjCqwAJ2NSfMeCLNKTyJQeM7MUVfGux1E"
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
