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
    "22BxLzDu4GM3wrBTNbMDB7mxSuMJR7fyZuq72iroYRRvAgBxnXNtJ3S5yGziLx6b4goor5FWdAA4ZJdsNfnpyyjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zv2FkoAmTeAPoZS2xppB1rtcUXH5H8JBwa4m6KNjCpxXVnwkeuPziFn6xv1Fa6Eibn7y5Q4QWykvRAEPPUVKDtk",
  "key1": "4AepFd9WRYkqUcRDNcVwC6tmWeFxJsrzehcoCdyB6VuGDftYV4H3CQMeR9XDp4Z8rgFESX7f169dLcso2sznJtAe",
  "key2": "2dwQmxGkCETFWuH2twxhWFYZdySrCRGqBuDTRA2coCGGiu7MZWz3jobkJoBDa23KoaJxdVdbAsmmSnvZ6tKYifDZ",
  "key3": "2FUzaiP1BtPmz9PuTF2uDFjJ37KYKWZYCEnYKAFGk5DkQA6K96L6RSJyjzn9Lp3mZw3AepCcR1vLUYxm84qYiN7c",
  "key4": "2vVhBXA4eUU9uatr42roDwAoF6pWKGMF51pTPgwFX21TjF1rheHLZWFjCQnw3eNtFS3xmrNiFt6dbCt944wVkVCN",
  "key5": "63pMMDX7bt51p2xqwod4EGUKfDHS8ge4NoS79PDXg35t9tiq4iqu6awtNjh1tjrDwasxfQ8xowudcu3LBha4qgxv",
  "key6": "7dgJtW2MKy3iAoYPV96Gv1KWQbzAmFfMCsfWnuA23n3kmniNbKWqhjNPDcoBpXmFgVyC5VLUMkd1PVzGBWuxn8G",
  "key7": "2SVG5hTUF2zWZgPuzQe3RcaobEfF75xHL7teLdcXjQuJfQFU1XYYgXuqVD8TgX19BRmJUs3YYpczqEN31VncoPjG",
  "key8": "3oVH2P6VvzzGcdCT7QpUVEicSCjcBHNYHdtrJMjqaaxP4VfFTUCF19mJUCwtEqNEAQyEYACPXgFfReWThqHmCjVc",
  "key9": "4AcBqzpaK6kr2ieWXJCNwiGgE6awc9xe29pKSbJJSuaCjfpoD6ZtMFKDu8oXdKSNHxSkrNGE8QZC5JuWUHKH37SL",
  "key10": "3neJuv5JkhFTw8A4YyTQt4WacXj8r8jAEXhi2E8ex8Sn76iXovBQpdh9CmpW8s2hxv1mGt3Ta8kv4Th1cDKDSomP",
  "key11": "4Mb2BMRFusMJumBujVzsoMQYzEZTuQFRqAfhKPnUyhaAwSc1aRU76g4zbYkmfRrGf5p21vbUqkhyCwRoDQHqZdTs",
  "key12": "34dLy7JXyVHjPEeWiJyUzYbKAaNB3CpNjff9GekR56sb2N69cDgKVQb8G6E29NePa4cjpUGiJYTE7CWnL2ugC4mx",
  "key13": "4zNbJFSm4HaRBJC6NtggxR8EwAZDvjJY5D2X6JgYnkU9LiZTczCL1PypgECyiunfeSWfdYpJSSAhrTc3ZXDrRpfg",
  "key14": "4vU1JoQ8sXp83RmSxWTNf7sL7j2UnY6kFRY9SamFEMBcHc4Vv4uW1WosgApNumWerRz4X8tkgxggcWQK8veVNkmf",
  "key15": "4wWSu3X8XQ848oZrVEZEKTsruFR8YYdu8rSanWcuHRG5dbYALXbTi6DMEbzpwQUL7q9daNryC3aqLucxyDrdDgxk",
  "key16": "47YQAaatmAA52kgWXB4wfGR4Bcv9CQgyhA8Bed9zDUnixgYq4PkLv7NMX6zZ1qp1rotxZiTB3V5F6mmCP63ooHDS",
  "key17": "3krsyW35tgp9qAY9Y4LrGmToWX6vBAVCxsoWRof87k4cTR8fhZJ9yHJEBxzoxi1txDVvifxeVknhfZz1Nwc13BT4",
  "key18": "38g8UndjWZv46FuW6HeD2jorFCtjU2KPch5AzoAXydb4A6gnzJ9DHkMWPij2fU5josGg6UqLrKGekYJa3GDBPL8d",
  "key19": "DEmFXFJojiV9ZZtucrsfZziXk1nNfUnDGhKdUsFgHq31VxjmA9zBEnuHdXZav1A3qk6QChGHisM4o5s7ojDKbMS",
  "key20": "Y6zLbeBt4dRUxJW2JfExz2afFmX42mh1wij8DrTK936eMviuaLgWsShWFBaWqKbnL2Tv4UdnbBqmbBEUGjvjPUZ",
  "key21": "3jw4PRvnFi9FBnepF8VUoyRygC9RcsPM8bSeuHbCiLyoiYS89C2bsW347zRVRxEzQ4FrmBYS2LNWnR8VskP2ZKo9",
  "key22": "2ThtFN4iohNmrwJTnHzRpi8FtEtLmP83spfDfYNAZ5ibJ8w3LhzaeL36w7Yu91UPCQyF3huR47A2c9gYY9AoaXHx",
  "key23": "5cZNKnyf42jF27dTZ2DAg5RYWiA5RqRkpCpRdom4jPFdHAopYTfj5WmbMtpY4vBYh2LGz3DVWd7Mqv6B2YyDZkVf",
  "key24": "5ifvZnkNkHtY3Gh9BkiRcA8zuzV3aSvLM93uvos9mt5r6qtkAbi22feUfErEBtbduGPHMkC5QgqgkhqqmFrXVon4",
  "key25": "25aAc2TANNX6rHdFFTU9jSzEogLyVAignPH3fRXhYtoEbhr7uuBcLpuxxsAdWLcUpEP74dkeL9SwJJvT8dGAGVxT",
  "key26": "47fV6uHxTdT83LQBQ2jqezJC9FoFBJTqrjEkeGKcyn1wiqnows1h1CVi8PDrtQ7qRaBWHTcuAFJ6c9W8cz36pyQw",
  "key27": "Zf2bNqW9ovr1pPyugWBGwHH1x62kJYVfALsFBuN2PbWjVGz4eRxJBpfwx1KH2s39kvhczFRyVW63JVWhrEsAeqc",
  "key28": "477Q9i7pQMPd3r6qPvmJW9WyQgTbZU6r3uFqNgCitVecx5vGmpBzovL5EqtMG4r4dEHnTPPM9DSGD9eFD923eRKb",
  "key29": "PsGXLcHG9KHa3UhdjUyPCNwzM2h6tb7NzsrBSkLrsEG4PvHFPUSb3GqqP2w3dAJq3dPxtQy9yAZKyJuVVpSHujC",
  "key30": "2a9f9fJRy8gSxrRAbFC7NL5tzQMZswSu3jwidC5Hk8SPtNUWLCMUaGffytVD5WQf6YsJi3Wt3FqaGu7aA3v5AAEG",
  "key31": "3mnS3wpquLmJCiVYFCUH7dEYYnVEGjgpZ4sjPbNMK1xvJ7hV9hF2XRcnHPFArkAPz3kSy1exGnjHArLYdwfxgTuX",
  "key32": "4JfaYEipKo6tozN3zM6EqCTasUWQ2mmytLhqUYgJAHE3dz3UVxpHiz3fuuehp561vce4nw35P5yKEnQQiY45VkSb",
  "key33": "8MgvCenj3dkVxnPRjAijjkKNEQJgnk2aQWMq9zY4XufXa6gc6oABGh8eKjzh58B2AH1NJ9FcNNCpjWGjo7aeJDh",
  "key34": "4RTXFVFp4Ps4KbEHiubMVuJq7xRwnbVjPggYhCohAi6mJ9tgPzKF74M16iDorwbbGoKwmEdkc29s7i3iaYJSnxwu"
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
