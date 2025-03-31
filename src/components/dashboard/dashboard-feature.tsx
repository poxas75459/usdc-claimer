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
    "31ZwV7F7DhMuwXmbr5yypXVR9ynuPToAjU8hJ95zKmjCKQRsSxZERVvMDHWPN52RRxkfuRAKZSasrvCQefSh1SBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkqXKo5xzTwPTxUYLCtASqiL8BbVag973SCWD8GL1eSJNJdwg2qYUXuTGYpU439bh8AjnFbtRMePwyqfBYPEL3M",
  "key1": "5toHahYKkfVDbFr14JFQ8UCYwwZ1xseaqzWkD391htgCuZqeQgpP9WiVard3ecPv9KZmJExWzobmoiMiD8AJcpmR",
  "key2": "5KW39P55gFRSRnnuEv7z4NHpoEYQus8w64iYedmyNmDLFpvNKKA9jQbV1UhjZLGQVimzqTC8k45p4PX4BvTcMcHB",
  "key3": "29gVMQwiqDrroCLXvBJscFxQnekDgDGZrYgC43oS8CLpZXV8zhzvAS6MBMsf6aSJ9vzkAqL68wMzfH6H7TcygjW2",
  "key4": "3RSVaUmEjKVBBssxbq4AftBegV1ngfjKX1CFKUTadS1VxnQu6HWLiTJarA81bxJSPUuonM9RC4hhGjZEVtJhmegd",
  "key5": "5BXy3R3MNwwfpqEaw5rhFSn58JhuSLHJMEAbVMoSFKpmkakpq1ut4uKx15TTr6MMaCKSAQnoSscStG95EyXDEcjS",
  "key6": "4EzoJgWuaGtLR6ZhpHbAhNdZzXEy87vBCZ8xTvKrW3LyY28ymixe4EwrFn8Xfq8mJQCZTErWLMis2RZdQzLTk8Mf",
  "key7": "65zPdrj4FXk1cLXD3K8nmBPMqhV2wzuMsGD4T676D8B1vcf4AkWxjmik6GiirEqmPCtNhZHHi7foDGENXBGaWMjA",
  "key8": "KSVcosXdDhdKLh9qsZyMx8j3W6qmCgcMe6q1LLHa2uB7TQ7xR7ea2PDAphnJFQws1fVLVHarmkfyByQrGuysHvq",
  "key9": "3pfEKZckJxS2JVJZHwncYwDaJAFTYqjrFVyky8YXXRJ8zjBi96jEdyRzxshduQaKFRukQFjhiDZRUBUm6WHkpY3g",
  "key10": "w9LHvwXhxrhD6jXHngqxaan2EUFd7f1uMdbDftZghkYWVutr59zajjeGYofcshBJDrrrV34eV2hsCxLM51bmg89",
  "key11": "2gj8JMM2tVb1V64HmaNDPJ2xEigzptycTTWv23jyL1XfDHTronTgd4TUKKK4qhpcKJ7n6iXkdgv1G1pyv7wEyphq",
  "key12": "37dWEvRc4DPc3Xn63Xi9mCXmm4ce1v47PcVn4LYW138oSCBoMxGryX6Fn49TckeVTz54U9T8gDo6qiubvFgBarzh",
  "key13": "CVqUWMbirC3SRqmwd4a2PuPLGPjDbHGAM8qUxwEgxQtmyxn3j1hyPAbzgkBeGKpjP9Jsgy2BAqUQ1enSVKYgoqt",
  "key14": "62qEZdH1LYeLrc7cj6d1Cy9vbi1yhx3eabLgMJWBZthuoYYKPXEA1ZJhN7mn6bBAkdqEm1ogRVKPJFuR54sn9pWa",
  "key15": "3oUudtFtyMUJjXZF1CnV1t92nyqQCSztHa7EBvTecvLTcs3vfKznCSa379qbeqGSWi7PJXkkiRdJb2ZyzjuJaG85",
  "key16": "2PSdd4BbgyfXjT6w4WGknUhdvw1aZnEYPRLwRxybP7FgiA2Zwi4KQMLMKSNZuXFsLUdE93WzUU6dq1nPR2rWTKh6",
  "key17": "2TSipBGmStFsvGKwM1iSJBbBDN5nsNnhHd3h5FLSfuiFhh9hPjvCjzNAf7xGUtdc1cS9erdtk4rhwCCYWZmcTeKJ",
  "key18": "3upNVNKHEUJjAdxmQKs5ehQ2ZThfC2XE2mcCgoVXRRtZwDmTLF8Ebhj5izSzo4PworEPKSPnhomvNAgEuiwYoeEW",
  "key19": "3tmJwttkxkyxNGHQwLNAFQEqPYw16PihhMUXUfBjxpCM6D65LBSCeVuXJfDWBgiPFVMKnpXqHuLQKnmthsgYHVhD",
  "key20": "4Hqt2zGLShqiBsudCDzfMB6mqoyGzvkzHTdBogkKoDUdNx3Ub6cSfgExPqq7AnRw2kRS88vXEE7FoTRsjB2gA9Td",
  "key21": "hDCLiVhHtDiiRMuxmLygmHGLP1YWDU4GggJNijQfHnDxheTpbamwQXSNxbW6BGVHrDpbDjD52CxzZQNMwWMU22j",
  "key22": "2oL7iA2FvdczrPVHeBx5erNQoGLS7MTJMLTFW2nKAp4DW5UXeFu8GFPEMmZ5e4BhuHtoTPhKEMqVTfoT7HEC6w2F",
  "key23": "2YwhRPQp1TwqPSNXu2kYqyhXdBNFcPtmXPP1qTdoPPhsitAFSp9b5NkcQpksVoNDorrY2xkCSp3pXhJfBeDPNe3B",
  "key24": "2z2FfEoxKvpv4w6JzeSp8NJwPFmSUzpoQkazcwMmFyKEmDKS2B3RV8pNWUFsJvCo6kTGs2cqMFzQoJ52VRuQV5qk",
  "key25": "5fTieKJKL1F8mynoXLgocD3X3Avg1WqbM2Y5qyLkkb5Qb4fsQx3JweHKXYHwZd487srDh8FqbgaCb33DMFHszYWL",
  "key26": "EkFToJoRpgxs4rtvB2fCY5RS5zcapt53FeNu7DfsKd6m9mNhfRVV9poE6154Z4cD7JW2JZGA2KsqP6tiSXChHg7",
  "key27": "3cqU2E8tbJWk4KSpNSjVxhfvCaph7c7S5rV6gdWdXs9PVjTYpR6YzGmmMHMYZ5Go8RkVCXr7wJ36tpPoWE1srbHc",
  "key28": "4VX21JeL1VDFFQffp7mziWfw89bm4DQEjKhm9FY6KhjiMps243Cc54F61etqGzqz3vc3eCLGQp9dapQND8ifFPXg",
  "key29": "5GchczLv1NcUtKQnzQ6rH3kVxXXWznYV11Ug2rZvH7q4onJLnUdog1mo2TnDcxcN4CWsmWSRM1T1wDhS6Hf3xC1a",
  "key30": "4cupHEdM8R1iazcRGqidjpCke8d5j5rdtfVxS8Uo7mPzFXM1SyP8h3dG4bwN5UDmS79YvnLGGuXRfQu48moKeBVd",
  "key31": "5921FEPWMEycWKC4gMjBi3yn5NsweKh7RbAqWBkzTmkddC2z2qJFidVUDeRetijYBU9w664ZfyTmhQPjcWEYg7jz",
  "key32": "4kS3EA6Dums4AYodCmBp5hfmVb9WTmKy7Z8NGzYds9x7vkG6rNoWqbmecUJ49bckoDvwkcBvTrRksHrYbUAQFjvd",
  "key33": "4KJJTfeAnvRJtSRt8HvREgXJnStFH4jprMc4VUA7WLdDYzG4En4Hab2r8Dyyo5JPUMRD9SLpYFBumD3ar8JPLeb2",
  "key34": "C2SadnTrgyByWUTnpEosaagYgYqcJvGBR3HWCKh6uee3HuN8vctyKYDVQGA6ZxZHXcCs4k9MG6DChqznG4jNDpJ",
  "key35": "Ekrb5hvwVm4PUZ95ZkwR9qxbQjAnYvtzW755fDLRxF1ZoV38eLCG7sSBbqo5iojVioJgww2J48TtANEhWpqaG2j",
  "key36": "52qxLoeDNZLt1A96cRT8iWT1CvxLT5MDV5HGVLf4XxnKmTA4jtBsQY6nK1K3Wj6nf5WuE361wFGE1XgrhBJ3nkbS",
  "key37": "2KnfWAcDzK1vdHC27UEW64HeyzTvoGshsc7yamPahiLrnh8iLe8HwGMMwpmk3WSJmHfr1oGn6xBvPZ3Xos9JLQwY",
  "key38": "3s66PvsSc37F4QSqjv36kVrbecsC9xDtov6zdXYGMX4qP59mjqBHETbzmNiZAytpNsqVR82QDHtNRK44DUHZRjzE",
  "key39": "5oGPG4vJPaGuUQpoYCFEZ5MhDzMbUeiM5Bruk7Hd3REzXuRgxzSb7qb6MeT8496F27wBqzoKKptAvHSdFuMgdczG",
  "key40": "RVwiHrkCQ94SBtynFVxZeayjdMWE9DS87ga4V8wuLhvBXpVt96HaS1rMaiWgLLrhE4uHcNuhrj8ato9YCB7FZUE",
  "key41": "35XKHe66yVEBBQMMemhsvqpC7Qa4v9gENPaYmkktU8QYaG1zZ1jG6z5RYsPpKu28HR9sjkTVjrbchtbZeqB74eig",
  "key42": "4Yqc4vUtc9gCwZxBqX6s9A5Ntf1SySJPdEhvk1BT3hTgqTim6M8y4HD3aKZE382LCYfVNgUVBL2KPoikpv9G5qPU",
  "key43": "3LjGiUttrUisaU8kgXaZsJoBxc18pskbHLK6f6JM7aQjn8h8qmPZjvhb5eqCwkUfc13XzBBam7e84yPLtuaDfqFr",
  "key44": "4mfAg1DbrbUQrUamhSpbrFYebHGHB9G3Gx9e19oZ1VUtdhafR4Pdzd6VG4bM8sDbowuewcepUeTJjgjaQKoc5vdf"
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
