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
    "4XMngsVGtRDDDWxWzv3pc9VZUCFwDzoxhgLLg8HoviCHbAr8hreGgFb1KZY7Sw6Qs222G44Dmui5Y44nDLE5XyNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMcwuuEJQzUdoARjghMK825rTWGMw7NW7FiVDEG3J1STYsewWrhN2rKThSrM9XZUUTjSwjGfvzWVcY9pvm9EmK4",
  "key1": "5oS3WRXP3SEG6vkqedo4LTtZWV2X9zRA7VoFP7UZ34mDjvx2wyioFrzMnK3CzrCDz9XNeb9EFJnHzajMeoCAYd2y",
  "key2": "5AnfibXJXHaEdd4fq3StqWT5oZuYB3DrS6m2d1bcz9ukRQg1DPYAGmhfpbmHtfniWUNQitEUwAxovixVSFKf1Rp9",
  "key3": "5gM6iK2ezLMt3aHNNJK2sRbhquwVzh8TZnx2EhmVRSvShCp3rNxjqMdY33N6skWEmSzFQwvVD1rFZQDsh4VX8Lw",
  "key4": "3tt5oxdeTU7bvsT8698MaqGcoCxCNZp6EBHgLWrDC2u12TvR5XxBEMvmxc8rn7gmuHvfrf8hB996kqJinptdh77n",
  "key5": "4uKgGGHctau54ZkRuqV3QfHhWYcTqGJMWfWFhStRzBVRhWcC4XhJQ3eccs7SQsDrGCQCr3eJgHfLfxZZwX2vTcBa",
  "key6": "4BdcjpXzxzEaXmfd4d5LXS9h71At61RGhsWP7ek2C4UQ253RWQ6whD1oYy7H8RsLPvircpjZNB8N6h4McHU5FmoT",
  "key7": "4Ur8Ep8ZekvekPMDwenPaGwzWppAQijRgvChZngNCqCVeUhtqesbko1nCwqCeC5czLSzCmpdx8wxSDGcV7fB9ifh",
  "key8": "4p4NpKW2cC4sfZQbr5Rq9oBjcQ8nMPi1Mgb1fcLtoMvnx68vE2BqzvE7k8iQ9wCePq21XHpbiwRM75R84j1ZpXxN",
  "key9": "2u2XPMMEa91PdU7VAxrWdupNsGnmAeZTZLS1WP7Hj1aE5YKBLE46kAQJC39SzuYQ8Xr3aKgfa6dcPLWEQZudfjbz",
  "key10": "5ebYdjJ38Cij8H7Z3r6grFq9GnXQxdmbyBC8Cr9WJk2z7949AaZSXU7DH5Ez6s3bFK8w3zjYVKu68Q6fL8jZ1baA",
  "key11": "46GBUV1qPZApsNxQNdVGJ2vwLjX2XWaS8rYbp77K4ArEufQUx6RujXZQBALLXarFQT2DU1YddFDQH9ofdWA1NNEN",
  "key12": "2iy4bRf6aDBDC2j5PALLizbHHEAqK6GAFwB4CFZuE1fYmfcDtKq3UvENZMWrQV56WYsUpPL6SBtnZJukfkK22cKH",
  "key13": "4ibFTQrgbNUa8YNQExChc8N1BNUdepPHyEGCkNHMSj75XxpPVzGkaK3v5dgya8rGHbfoQGBTSa5f1ZiDjRLpuvLy",
  "key14": "5SaUyf9UNnVhGZVUd8HJ1nTXH98U2tbc6KiEykoRNibjioAKpN1NEiXYMNJwSvjSXqyzTsYYjERqJWtiujRLNQ77",
  "key15": "62NMZE5viy98XyCD4CERT1oSj2eE4v6v7TtnX3pWDgg6Hp2U5XSicPMfuaYAuzwpZeyUQCtkiCPLno1NPT976nS7",
  "key16": "4LJafzw1jP9orVa4YJjfEoLXtQX9rzC91oK8exVWmtUT2cNqx2ej4qFXyvFS86cuwxvc9MSiQCCXQ8fZqkPfQm3E",
  "key17": "3ug2Z2Rwzccoj2CatqFXzP82KxXxm9DiXVoLnfERj9spECSX7CqHRqvssfrZEhK9xpSE4FQKLueJi7FxPA7gnmDm",
  "key18": "W4p2i3C5pEFAZdxW1XMo21wwZa1qiMHe6q5ghwnFUfjEwRR5rvUdj5rYkvT4dbgBdf5pXcRQDKRjsqVR4LyeyzX",
  "key19": "2st8mpE7NFjo4LXhKVZaeUzD97oACKZz9roFDQu2oNFTR8UnPsLoafwqAcejoZRPrVxQMD8XPucD6P3h9m4X6mp",
  "key20": "3HacsBkGVDjH3TnwL8VdXUX97yBxf4243ReA8KZxJPZLcEE5M23qz3VQKxaL3zzhaSRNPDXX9XnHBE4r5wJpy34n",
  "key21": "Mv7umxE8bLBmJzpKqDh4DR3PN68U8HrM2Nner4aBn25vvzeLquJMXq5GWAdBNsvC54CSFEcp1RGbrq55Wq9Zquc",
  "key22": "46uHgvXDFrqcSfd6H3utJg3ckqBrE5PT4K2xDenqUFZk7mMNwvjAu7gN7j8psmnY5i9fBfd2M6ra2LKCEL8yVdkY",
  "key23": "SZNBzYgCyZDMUKhUas53cPdpjobQaC5mbeR2v9n6Gji7uDrj6JW53F1cw4fazwAeTAC7uCb1Yjp32zrvRrUteg4",
  "key24": "2xQFmEDNGf3ZAA7Ri3BTTgKqNWRDPhXiuX7n997xRNULoqF6dybrpzuemAyLDRatfqnx1FkS27iY5pPdaER7DHh",
  "key25": "55HB8t2n3DkWYRt3wLniXKtDR9gStRQ54mLVPadC9mxDDFqPPUt5ApVrjyrNdhEVoByPTtyW3Gah5Ds3mjig9s6W",
  "key26": "9eo6L32tqeqkYi6YBvjUW6HMYaP3bBgs4sJasBLDxFLnH6PzbTuat9bUFCth6FTpYrL98eC3uBywyPNcDPsTJ5M",
  "key27": "5eaq9MhDNoars2wc4byJNXJKJ4PLgPJ3BZWMGtn3TDj5vL5pVtDwXJJ4GeN5QPbTaePJ5iWJ6NeMktETXVwYg5mK",
  "key28": "TLXiXH2WsRoey3nsm196uWDLBhifvoWyst12oKdbzFsZ67xvG4idA8WQT69AmdguKS62ZnkDMtQEJsAdBpA8LUQ",
  "key29": "3BSxKz3HkCKhe2cLTEE6YEnnmPG73i8SMn1r56smkKzGKAYDj8xxnhyi7ALNATiQMKQdTj3vjEnaZf3ob3rVyPun",
  "key30": "5L7HcGg3WXHy9dcZztQSXekfzh1FDNMZYhgoRzQbfRA8iLoTr7mt7VRCoV5ew9pCXTYrEbcmnNCdWBY7J2NTaZnZ",
  "key31": "6q49Z6TGB8bZr2ySN8odpfyw7JCpvjyJ4APSNCv3WCza2yyo5mGXqoWp3sdontV76JFXwvL5Y8Nb9qwVFG7qGw3",
  "key32": "rthg7nTS171X4W8C49ocBdQUU8b5833vAM3WMoEgsKBERmpWRZBUUENt633nEzUroToP1FDigTEQp6MgqLN6dmz",
  "key33": "3buaFqXADDDCthZVaTwMNnooGPcxWvPWtdUdzUR8VLUhLoh3onsVuj6QgYfjpHxSWiBLWfLru8MYwMq9kYghhYM9",
  "key34": "4FMJMAUkM6duMBj9awsSZLqBrqtUXWGRTr2Vn2nu9ecnsMHAyHEC3Pia7upk9pMCp78yFcFCKNK7QC5Ye46rvG84",
  "key35": "2Aotr9UeaviJnenefLkLgfr7aE3NiLmEY89msbpLRrsbbAWeg92mALMy2BjETJGu93WUcVm4rxV9gmYqpCDEabjJ",
  "key36": "44rwuydiUqH17tUhYEpHQGWj3jXyD6zqLBhXzdwYDAprxgpGWaFk12hh5zEuYuWBJeUuRo2X4WWUQhYYAZM5SSxk",
  "key37": "4AJQHRwxjXGcRVZNNGBcpbBtanf7C1732NtYrUBfrbDHcnz5q6Ns2uiV6DFEXTvrekjJrbtjYtWyK5FGHz64nmLV",
  "key38": "3xt1pzBEoSkvvTpjeB4cBDYt4X7T5vYZetmYcTPFpmze28LTS7wCBpbz9yFz2XscRN7gNxbzANzh23a2AF1xzb7B",
  "key39": "5WhJ2jdSeLu5ovwBguNY5hGpt31nc1UptZDkxsWxPqovpuq8qCSYRavVbF4KCz6UNvLRDUTEVV8Tgrhf7uX3yMtA",
  "key40": "f9PfqEZZr7D5ncjPwcJpyTQCZXpKREa6ZAdi5LRmmPFfiocqaC3qFRstu2vcWwp6bFindkmwL3MuBTjHasDzPhV",
  "key41": "3FxhdkXxVZD1TQR1dogMKQvuKgVBjhtEPR2AquPAxyP7kSTsCAMyfxMVe3m6uYyDQzizSiv4sh7J9nb9SQR6sqmX"
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
