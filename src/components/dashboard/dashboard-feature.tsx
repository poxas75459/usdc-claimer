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
    "3ZxDKf52dxyZAWYGN6y7nKUtKDzZkuzu4iL7RXXiNhjW2jAxyWL1nt2mqnFEXNVAUADHcHUwEpsERV3sAT5yNju9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzRA328dmKyzXoqJNRt4oTDJMhHHWtVvUjnHKimhiNiiSvMXmcHqEyPuMUMr6HLw9czxmQdoJARRnQkF9QEqn9u",
  "key1": "3mbkDTLWjaztGTXCJeyZ5MvzQ6dbYmfcr11ZAmmEf1E16rYgDMBQbBgDrWKMV6t6WWLFvajHq1z8znvddqTMGqsF",
  "key2": "5E223ZYHh7CDEzALZ1tAQTjukJtaKyVBjBcYG3vkUVu9VbUmjeDzeC75g6Tpd5nvyS3evjbdfLcppqnhWAS5ApSS",
  "key3": "3qg6mawF7LDFeYWMWwrobS4yGPy5oSE5znUDvuHGpirv6ddtBhoje4U6hrofb1eZAnyUqYbwuw2PwybAsgVMevTX",
  "key4": "1Wg7giqzWPSYEY4JKS8cpBfs1438DjqFnmQ5QqiNL8Len31gCpUFRxyoAoM2ddP4WYowKfhkF9qr2K2nqQjq4h2",
  "key5": "5BrBFEykEoojK4YVQA7QETxwkkyw2oGGiTxsk4McuPfzFpUz4eqLZ8dyFFwoy5dnova4KCwdRrXCFFNaXtxRw8nM",
  "key6": "Q6nTK25iap3prf4MfGgmDmPnx5utMAcexha8T4GmtfLpL8GbGuWoXr8kR1JCXLL4ZBSuBTquMowGwkFwyEphivh",
  "key7": "4fh6NFaBVJMwF1ttxfN3npu8TXk83URLihSpa1rvJ3HNBGzy73ZxF9m9XXG32YFm8ASgCcG5r5uT2GSMRpy65CHn",
  "key8": "2PW522qpFkNwA6ou1P9nmsecBnBc7neREFcSqXchgATvcRFEzhtqrCWkptTWN7hysHtBJRhaDgcSEUEg2oVvHds1",
  "key9": "5rAtU7973iiCo9nRCmqcXBqFjUuo7KzdFn6UyVgatBSf39Ln6vWU38XCUsbE2qhRLdaSNTvpCgchURS2JCfqA8AP",
  "key10": "2Mcu9CqAU54uQgNz4BWSgzLWjR3j8XnTeRMomVDC2qEuApQ5L177dD4yTF38dwZGLfE2sz99qKMGEQScr62K6Sir",
  "key11": "4w9ERRZuJxFFNuHNPTc1C9xzjdwCYqgpR5McFGDJgHfW2giXJiWYvAf8eCegnJXLvPA9cVcfo3Hyv84seGojAuT9",
  "key12": "5Fa9c1JJSRrZC4S4CXZkEVhPeYSaRbpy5djyUpu71jYsnqUHE6Uce3zvGQc7AR96KsJyAAMckfbHG25ZS9dxj5hQ",
  "key13": "21ni498NYNof565WWXyq2zy7KBxEete2MmxkzSrhLpUeqErsmQMsSEspxLrPxXHhXLb6BDrB8KbX15zxqr1gSxic",
  "key14": "3SFRVTWKDnXf5L3h7QNaLmYjdrTYgSUb9KKce2DdrnbqAT4CpQsAbeK2GN5nHbBaKWT9NBTfHBzUZfgchtakyj6C",
  "key15": "4otMw8Vex7mAFxGt1CcW2G41CWnE1J2SG2Jzhn4M1zDqaDbZ2UbhrBhwd8oK4quK75LWTzKga9EP8594aK6S3jjf",
  "key16": "3WCcyhrEzFzMTQWFAq3AtgzYSrndKDHdCGJahNrQDUwnjtn6VxTXrbBEdtRLUJRZite5Kmz5gFSZAC6Q1VEtqKK6",
  "key17": "4qDEwGuawsLdhuvbLGLovE4j9vd9kHVQ4myBQGkg7TgjueAas2nc82xa7QGwGnP8ysiJhdet47uL2nokZtpiztqK",
  "key18": "4JZhfAhGDd9wTsXqg7pcXaBR8o1cNZ7GtSdGRvqQEGmdYUGwYhDUC1cDCFFqhJ4ZMf7LWWEzXZ6hV1k51kjMbvMk",
  "key19": "621rpxNstBt93ak7ZVbxZfzPmNqZK24DrTUq1KPcN1hudvs3f2LhaB4PfeB77JwDymFa9JbEK5PeHJGxnBwgyD7J",
  "key20": "2vZTZ24UAd8p13Va1evPv7eoM53ZZCanyReZ5Lv3X9B121ryP48iiMf7Kgg8YxHKzAhQHqzhCKTNAcfLDuDbL67R",
  "key21": "2pzEXscd82o93bDEEZQ6Chnh8wKKGkiWc6zzwnjV43v6MAezXrkJUM62fbK1uGQmm5auG1UTJfTKBLmJRFHNDrGD",
  "key22": "43KSvwJ92Npk4dzQJNhkrUHe41XmzQfRG2URpk4wpdVf9dqZSaDz8Akuthd7F9rN8sPMZBz5uXJy8v2XMEQfSSQs",
  "key23": "2bBeXaCNun6E5f3BRSBxXHu7Vyes8gbpdqoPwM9gDBM9FzFVqFh6p5MXpTLq2hFMtRwAccd54FCPjANNM4qrYVXy",
  "key24": "3RFau247wh3jaEsMpRKZpqYHKek8Z3LTGkrcawf1XCFCkfU7ko1Spqb1ULeQQCGVwZZELQWL2eEG5ssRFXT3GRV4",
  "key25": "2v5AxDPFACJbjSVXqSDVYYBiT3JUj3CvKCdKutyCATnE7VptKfhrEC6GxA2UYzysADYEPu5ZCgu8AdeYztCYKEuX",
  "key26": "2U1kJU7wiMGey9fWQbKTcniDekn8maU55phSZ4M6HskGWhfBPHrbNCjHBwukiWoo8vi7ziJQ77dCyxMu3LL8DeJS",
  "key27": "2TLDfXhJZetEhPTqmtRYtkMcfJU8gyBWUV3tJUzVmSHFhunTmPoPodZcUTB1DseKxVhvmHaRdEfk7WFSmYCnRMDr",
  "key28": "4SGKgDCNKDFEjztVdsrXoYr24caQu2YdVWSAeeHosmJWBthRsPNHdSCu4QrL7aqXCZUgGGuR7brmNuWERG42h5Nx",
  "key29": "5ho7724pwoyWsVJ3Dn1EGBTVj1h5RcWKFNCWvJGcz4rMEenttFJQB4LXvpBmM5CSYMsRXcRsn3K1cVZ9AZvF3zWy",
  "key30": "31cgRqPzwV9UC6zWdkcofMZm6p8g77BzrKgpFicvCrKBrQYQYkCJVDnfQP2B2YWHbiETU51t4aaJVyWVQ5a2goao",
  "key31": "4rZ79MWwacfPWc3KvZgpznWesdaFBHsacrb8h31eesokTn8BJrUopvLphneerPHEUxscF6eN1PjseJZ9eN92WyFe"
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
