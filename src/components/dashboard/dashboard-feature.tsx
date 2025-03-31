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
    "3ZMrwGvP4H9X4dm16eC7aHKPTXCPzvTxjsKVssecQRjfww3yNz8QW57Bqu4RY49ArH4ARBS8MEt88YY9HBigeMt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CfmEK7HvNFAqB5MWkKLUq8cmpPzcm8u8VfoG5K6ijp3g81Zvs5Hrzn8VyQP3SLSv3yQ8VV42gScBKXbvp3j8dL",
  "key1": "VkyM4NGTAPkemGXDdLnkKasUoWCzzsfHiQCuRUBmhYoSTMFBS455GfU8ot3h6YhAJBqsonG1zkp3o7wPBnPgahK",
  "key2": "2jJE5mx24YqdUQYHdRhaPSsGM44o5Cfy1RokadbtiU1dBbNuYSjuYPd9v43kdb8HDeopjuEJCm86sVKAJcHyvKX4",
  "key3": "4LwefaaLzaWWu5WzPz7Gj9icEqbpMPuaPTjjahMVRRbtGo6xeWHr83Z9Dsxdf2Nf3RoHPA84Q5SP4bRfdTb3SH2d",
  "key4": "5nsitfpCbfPj6GLmscpwuJiNmpCnFPM1eUuKWUbxX3d8csGX935XkCy9qy1PEUhdbm7oGktdfkCzKu47CeLd9t9j",
  "key5": "67pmTV2RFeHoWZwZ722BYR4zqToCfztVGSNbunK3UZM3gok4jHsukW1gv1brJMfabHNHsiwgx2a3jiA8bhYp7iVL",
  "key6": "4ZgBEZGBY3mV8Ci2Gpn73uRTJXDQT7xb2R4H46nhRqXQEkeX2yYRECzzPq9Zq4qGzMgHqzSDvWNkRrJVD289WQmz",
  "key7": "3L4G6y5ioFFktVWD8az7eGN7JuZ1ZdACuUSMwxxiB4dXjTVvaxreLboorxF6Po8Q94TyX1sLTExQNeivooJfN87e",
  "key8": "rFQrVvttUkbvMBn21tQrYJNEXHDuWHAR2MvSTUhfmC5kgp9PHBhF6xeyUBeC8QWTNwKj25qSrQfxbWzHKT6kyAr",
  "key9": "3MadhGQA3NsCWsGpRbQLiTgPMESpYHncxXXaaGj3si5u9YeD1PJeamUaP9g6XcEtAJE3Bv13xG9tJh9pzvowuF4D",
  "key10": "2P87vwJ79tExzfoa5rAE7U6Q3NBTzoQbg2oZ2FUFrs5p3T2haobZMT2VYzULkL7LRN2Cj54CFLgPpraTfNvLL2KR",
  "key11": "4GvKP8KcZvNYjgSvGWHyxBX7PVXG4D9MxadeHvd9WNBoeC6gSbu3wf5pwGRWTJLy9JRsa6aSLq6LhN1WJTADcEyS",
  "key12": "5zgJvuqNKxmwcPAhuB4yUZmH4D86SncJnvjwSNiQCztCrTMFZBN1waqSqBkjnPKzsAqVnmubSL7P12SbWfeBtG7u",
  "key13": "5etE8h9YQKwdWi7TaAcWV22cng81WdUUnxA3tD5vJS63YzFWYvWQKh9Up2FP2jNcgLD381jicq3p6CVddfbqRkdF",
  "key14": "3Xe12LEonjZUaNivxojmuceyJGuM8fPdsYrof9Sjup6aehfdojVoSLQeWsgNhVaeKtEGZdMcqJK6kJSqXgHgZHCA",
  "key15": "rLYequ5f63T74dmj7HnzMgDQqJRSmS3Kzoumqqmw7QTU5D1yY37DaLeuFfXqFD25LiSMvG9t88a4hJ4SYmZitdi",
  "key16": "5Hi8SE6RJBZ9bwQRQWkPpTkGD49zg1NzutR7NmHqJiaeqYa1yYkwmSj4epmokF3G1eSku7gD72uQFQHakLV3udAE",
  "key17": "4GbQxwZw7D99S2yru6MVwjJmsM3Guv4qJT22XKjMzeCVox5Y47mhu4gfMHjcAMQR7qzWMHt5SSVmsYN9JTaUoUq7",
  "key18": "4rasFKi7PfBJ1ZwPYePtbcMScUP9PHFS8d97kGsq5DAcaN1zyXMqRRfstf111PceYHk8j78epsVyjWBqawryazXQ",
  "key19": "2GPkJDFo6UTsRMx9TxY75Rd7GGgGkRqQz2kW7yYAoWK2ne1ABr8UNML2zKYrh6zwtMY2XkVNjMUtMJnZyeyPDvHp",
  "key20": "2CnV8bWp8k3LGTRvggRz8tpNS4cyQHD7qEKY3NZuTG7oTgKnLvmEresCaauCgxo1BKDDV6b7baDhNviKZHUEC4fF",
  "key21": "5Qb4e4X8tLKD7SiiTTTo9niMKwph4EF9Qak6YPBjmjo6ucFuR55LZ2sfVXwmX9rmY53J6ztVcLVpQHM44xpKgc3C",
  "key22": "4nQCwh61YwuMfCu8rdFvYRdCisj98hBcaw3EgxVE7pzWVLQKf5Y2YYZo15Lg4fGf1MSe3wfRnxrKfzNEArhNkQcm",
  "key23": "4bCzp7MHvz5gbVroE25LoEazrEPKdwSQEFuwYQWc988wig5nSYFC4amH7zi4Bj4adP2wpgRrfNR3CBspX3r5GuEQ",
  "key24": "EDMEktbuKZgVRp22N3LU8mrL2yaZVaGpN4HUxv6cBXL7UnvzsJyRwJkC7HpkU432RtUtNUAahy3HraYtdpjNd9H",
  "key25": "44iKDZJCJ8mX63Jom3ihxqR7nQbPnf3BXeiCgjnPMFhSpXeDRKJTrhh9yNuVK8gNBK2KUXCsDVWRRo8ewZp7fRqV",
  "key26": "2VdMxJg5JDu8WTZq8NaVnAjGjoeRPiUe6kAUkeTHtd2XuU4pVKbyJjTnHEE76cKfz1AefhjFPJbpoPF3zwUY629y",
  "key27": "3ZTew3yniJ4XQnn6Pgtk4AxmsJ8Bx5mzhGjtiCQ9c2psSwBUpvcGtBdwnQnW7H8xVPZAfA3EGuQmjq1DT6sw46gF",
  "key28": "5hKKMSkWYHyHtsynXYAM94oKZAEDEXHxeKuumMV8uJUF6yxoCcsJdGBS38whBYVhiZxTGCW1Z6BmekrpXBaSVCMK",
  "key29": "3rCsoLtjnLRtxCyDjUMLMAgfTLXGPFPaJV7VrWmhQt1usFHtCYQpTbwzLYFkmegeTsJDk5wtaDrLzM4RbZzAt1Li",
  "key30": "5PEbcxhRN5NSmtqiruY4REcbCmS9tXyHMEoZ3a61hb3tPyhjd7rfGZKNNGqJuiC8rscDif3wTUzdKoYzabg4J71S",
  "key31": "2cZ3MF6Gh8DoZeX2Y5V5U8oKLrh2ozpjiX4xMGehr4QYs6bdkWTxbH6QHeWcPmf3SiXM86uS2NNTvQFd9QXjFgrX",
  "key32": "3XTBgxsmF6tp8Nj5KpgrzbjYBAkymZrANFmZpp3HqC8hofMVnePMs3tueprHYJ8ryXabSSxhuj3nb4z1rLo6sCHm",
  "key33": "5HFm7riRuG3mY8hy7SwfwwA5HYRYkkhHYVWC6BTDJdPjpXazEMHAG59XWYMN6bBmz62KBUFrcbu9NDJgi7ucVZAQ",
  "key34": "2mC6PWa4wBGwKwCwo69i3UFcGcf4H9F2LBLKjX1PHDgqYuu2ADyU7ZfEM46uAyJM3D7Vhoju4HP5rsKLQ1opnEEp",
  "key35": "4zsAP2WW2EffY2X5FRXcAbeBtBg9ZRNSZHaDE7xEvyMSvfcZou9cMenyJHxScA4EJ3Gz1SQtVKoPxHVpmkWuxuqu",
  "key36": "5eyTLzvabjDducm9zK86ETZoAU3846876jSbnYiGY4zU9TAp8PFyEMVGb2xFfWeABeRxwrkt8UEwVFajhxQ9oV5j",
  "key37": "4MypbUoBx819zPheq4pY5MPRyhxsVwBs2JEq9npVE7QZFrWMKzDG6gwoWfDz4ovtbD2Cgt2HNdL3SqVmuQVPaU4w",
  "key38": "35GSKGaArLgXNJPGrrJ8KJZpo3gJ3McqhBjTnJocWLhaoq592cGtSDh24dGZET2qEHShvw6s6camk7yqvAULTkPH",
  "key39": "49AH8GFBkZq4NwUumyfgXHW9kehTVstGFHAUn9KNDTnbjW4YUmujXUbNbRX2o94u7UwiFhoKEntbCtriunDyFQuH",
  "key40": "2CEFe8KRfjWEudL92oMNSCo5GaL3VU4n12zvodMesRXCUevCcZMKUvduRvRX367Vwomr7L9Lc45kw2M3FZZwwpY4"
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
