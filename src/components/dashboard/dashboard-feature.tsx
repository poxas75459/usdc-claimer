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
    "51zb8ReMZeKAi493frTuyGq9h622V9y5cYNFou6nzstMghfFLn18iRHUmeXDB2iSHtuYyggsR82V3pYtfgqkLkVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRxtCoreFfJkwSvL9waXExbAWtoZhrvjx1bFuZJmuAviBJr7SMGJCou6QjumHbAjo4wBVvJYkgEUgg82vsTMio7",
  "key1": "4vf5HaVNS8iZhLf5XW8zMSnPDfzaKGP63XAUAmo3x7h9AipJUyyDj3UQsxwmtMgD6kQm31EGubx8Sh9EKgFNHdhS",
  "key2": "4pznaS6p6bjVuY4W7a6RDPMYbHogudNenyCDWh33ZdihJJzbTKnNiVGMP29QYjeEj4H4LCDDKDbA2hJ1tXqCQnN",
  "key3": "TZFHPgRjWMNciBMK4QZVumyajhK3tpfwgbaWv3RioCoLrzFj4NP5oedr1RPdtNMsch7hxYteSy1TLw3HjNkjU5j",
  "key4": "3k3Y4iw4C7WvzHo3gUdmHtAyxLqnwBs56UsLrvU2o4xBxM6kQvfaKBa63q21QmEeHeQQK4dQLs4cfEQXuvL9Q2LH",
  "key5": "33kb7MjhM4WUno25gmhcNSMPXQgHPLY9n7Zi2rVGJXmF9oSfJ3b8csgitUEPhQhGkJYt684simt9zvGLHRDHTUkC",
  "key6": "2kuYV3tG87rQC2y27sLhZEHP6ZhYFRRY6A5UqJWqgc3eS6Jqt3rMDFroAaJPkaUXriv7JUbDceqL84KmHitkjjhU",
  "key7": "3Cu39XzTmzKRE3DwA2HFNYK9Q3Lc6uKLzGZzwGGTz3oHZE9xZWkLrXPGuyXF65KP7Ygj4v5FB2gwUN18mQBaGuAp",
  "key8": "48PoKecL7ANc4mDTj3vT7mnnc7hnNtXrRXMM2aNFVc3MPG1vDWqptr2jkyjbXroztm9ftfWmXoQaqEdBX4F4BPYB",
  "key9": "49qzVSNq1ip8uuRHQHSqhWASFPH13YnRG2awPLXnfJUKNWSeSJXNTaCgAcKMVbY5sE2zGPmxsYMkfZLwaGLUXEHy",
  "key10": "KzqHbCU4TR11agw8yN3LNU9WSr541tNiTcEJLkJ4bz4aKzpEfG9PUfN7h7fUA2brCchWofR1iKpeDstFHtrfTyu",
  "key11": "5dm2uVWkLKMqbaqr6MhrgRYSHEKkyYVve7Nm6n498HWr9qj5NTcfkVXCPcJ52AW5oVQTWnR9mpVKY7MzbVKaGX6y",
  "key12": "3H7XzDXLcSJdXwHEuS7eCzLwi5norH1Rn2k3Tj7mShy3urLCByX48WRp5L2De6e3mq1S56waFNvDtemRkJQbrHaF",
  "key13": "s2WiCGk94MZWqBtLxwTskfyn1zMVkxJtEpDtvjT71ncYQ6oQotFHxNq7Xof1SYMCcWJC8nwXdogDhkLFBKqkU4z",
  "key14": "yWPUBXNPZHAMADVmfkTMaFh4qkoSfcvzK4fcvD9QAAxCUfJuc5WWyRMCYURgQ8U7k3SAPJSHXNkS4aGRbaaFeXu",
  "key15": "2Ppg2rRjaYgd2Nsz7i2HPmxjmjscHv8j4PPtiCutk5GfqUuBKK1YqpmKqe8wNQEttxM8BC2HJnjBp76PncHnDbvc",
  "key16": "3vgh9H2kjS9DkH72SWKT5aM3THgyKrw7r7K5tDGPLjoYVnvPLe3Aif7XfBWFEB4gZnkGoJTGEkg9zWjy7Vf12yZT",
  "key17": "3zQb7Uhe4dzcfa8SZ36hS7NzdvVwo6Qc6Gkbftz38uf47c3PfGj8iw2FBHaY7C3QZ8wZjsyBV7ThkzM1Fvn5bPgz",
  "key18": "2ZPCWdZqg58sNLCcxZdT2f8L1CNgGYqbDDTBCLXjbAgHeej8WNCNRdJZ7TpqvkQypoZcTD7HmaRonzm5pK25k1Tz",
  "key19": "4eueX3VdpbeffZhc6sB8Vhdw39W7uZUzaQk2YXGN82T3tB1W7UNW3uFH1V2exqDBqwZqQKK6MxQAmrjdN3bbKd9V",
  "key20": "3mAKsFzvciUdDyttGewoJ4UtTQvEVt7o7DhB1B2FKmmwUfgT5i7vrQjs1T7YZs7HMxvHMHQrXN1gH5A966i9AWaq",
  "key21": "4DaRjFrsCDxXwEAVv5JahpF8DchTBy9TuMN32ftLCSumHKr2wX3zmSycCHzcr6VwjhFo5VLQ5qKhdarok32Yadf5",
  "key22": "3oH1Pvo2DLdrnrCcPHxHci12VmGMJbx7T2Y95rbTTz69XXPoiaKbAdqLsgaE1jbqmVequU579qSefUhnw6pANYPG",
  "key23": "4tGGoPkpdAZ949e4yTGm4Fj4Mp9ASAaRzFQ73X2PUQVaSQkFkmUjVtDU3GSsTdAsCMQoCJjmNeLXAFkkYiNTZbbp",
  "key24": "4uQVQFa7Pz8ecqDAtdgRW4NYmFFjgusekhk1GVc8F1PXF67mHo5efnG9ycBwDRx1TPRXVNfaqxcwKhFcrb6buVYq",
  "key25": "4cThqjgaTxyFeWTdiqTkFnUBVuRgT9Eo4rNuiUof94CWFfxjGHnnfs8bNp6wudFcxRftjaVvQYrbgFaJrqsTMaTJ",
  "key26": "JWPsr3MfSTWjhPS7WqfZUFkv1szbUD7WEWaoZkAsT315XArQcrft6xu9hWvHzezjGmv1raWW3amBRPNZNgarNUV",
  "key27": "65itkMcGSEpgsgvAkw724zxGAxR5RPFLT4STds54QD854F9EUgwsrkfuTFBV7oZ4ce8TtHTHbVDEpW9aqVxgVBqH",
  "key28": "4tKQsnZQ6f4bavDzURDd19FhFGqxmiFDdpyWgd6hgUrkF6qysMR3mG6ycBm4uqNDas6uRUQF1UttmrfvbdYR6C2h",
  "key29": "2CAAc7PJHp5NDGWkwQvumf1xHD76tc8CUuyQFmcqoxdrZ9wqeYwzcuvB8xnV3GHm2QD5sFXorM12XzEisHozqBB7",
  "key30": "34tWNKBhXkfCuaWkBSJKs6maDWSceKHQaFS7g1fAPAByWWuSmtCaJ15PEHN3A9j4rNhQQDzrKZtXAM2opmZ4usXW",
  "key31": "57HKeWG8ZdsKwTkRReySUHdAT4MAWjzcKXjoWaF8WBjpTCg3c6NhhkWf5RBWk9efWdLpP4kbbNgT1RD4Uph43LQj",
  "key32": "5rSb2bx8ENCG4KiEAptKeytvXrP3XsP3ASZSSY8ueT5GXKK91Pxu2thMRoomu7LuA731NRuATbSn1GKtAW62o3Rr",
  "key33": "tzq4XrU3K9mjmSBu1AEz8LSDxnp4RqexCVahiBPLWnRuwfXPzBk2a6B9nNbib9F75M9M7gaHbUd9PViscUKqv1B",
  "key34": "4kaveXrE9MVnzrbRbuAQ78YwnskCJxvTTeb5sk6dzgnpRyehdMLSDqYns2FpKQR4PoQdDhC74Jpp2YQYur774Aq9",
  "key35": "3sFPkhD9thYk7dEozcq2k8UNSPpDPMkSMb7TMgzZxdAPs7ACS57jd5LMZhtFSXcu5wy4n2PGJagne3VF4jcd4LYk",
  "key36": "43CS6ptGGyatJKSR5pgBD2PUzwmJoDxLLudXRVK75VqC47QihwgxBgypmSi9x6kg5NiSzKSFAo2sUMgNTm3kvxT1",
  "key37": "5Z5ghCXaqmMbpdXU7Nkh8o49ohuYr15iLkgxTHSTpCW1hfaGmgVZiXCAqdN8KaQMEvWW1YkiBwjpSkSJ7ZjPwcoi",
  "key38": "4UaYCn5fXMcT2U56bYE4izUttSykhKg5pJ1SckZgYgkehzWoRBMPzi99jMhANv72bEqU5EgDgpfa83ZMW7Pt2Ca5",
  "key39": "64c49FpMazr5PRKCHZi3sHVL136CDYFbPP4ju4ZMpq8eok8p6D8EPix55GGpCVbuJ3BB1UfgYk4qx7BgQswAGWGd"
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
