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
    "2qPyFHBwM33bdvgkqNYZ9jHwXvy8DkCzEdwhHJotqW9qGEh8bskMz4gMGf9TQHoVSqaBuQPMmPUUkBxZSxvFfrAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgKhA2HA3FUjQdyNVKzpeSJGJPM2vA8uAAoxfwmjyw5AotNzpN8svgLQeUQAYGAeZC2ke2J38MNiMqAG6muaAvx",
  "key1": "2sQpiZaT6yKTsGMB9N99czRByqSezxih3JNijLySryW4i9q89i2pGsQxhtkQ698ZymfLgF9ASqVA8BXeatPEkX9z",
  "key2": "3Y5j1tNmKZ9EHs219aW1Uk1bpmkMMxjSYUAZiUcs8qioC1s2hgU92tJvPGeWoKUQYFUvhB7HT7zdkDGJFw9BHEi1",
  "key3": "4rbqiSkjzjXj3tCEoyMmBhitS4VWiKAjXDFUzEgw6Rriu9ZoLaFJCdEwCabstr33KU95YvHRcLd4C6o868qZMDj2",
  "key4": "2DxBH8YoNn3uaDf9AqcRw2mH1JDHu4uiwGQEbCX3agQz6A3LWhG4cpQNLXf3uGdjpoLPFEdsyG3cFQK9wohaogPB",
  "key5": "43eqwVQgdBp44oGaK7sU7K5NBqe75r7YKMTZk7cm4trWhYAkwMvz1yzFbqjuWkHPN6iakX9Q71aJiZD5YyCKLfMP",
  "key6": "5fVsNzfATd5SkwJYond6j2iyYQZhzNKfHsvF5cgD3pNgNftxLrDeCQnLM7ZTdb4KbnXWP315NX9yvhCppJ7kdSZL",
  "key7": "2eCyQH6amNzCCxoRMs6D1i6VHEDZKaFZphnrufsxWL7szsQCAr1CovN25f8jJCL6A4u1FANySTNoVh4Ht3eh2Hx6",
  "key8": "5PHC9t3PEkpJWhL9roTZToVs6V1wLzomCgjqpP9zU1CwQ1bFQmPCPrHCqHSB66VpXzCJY7WScTt83ZJMyXEHArgv",
  "key9": "3bPAMN6xnjaA3dNrsohw91JDF5KyWYXLEVYb67UsjtWtAdnJhexVHLDzyuPEzsGmrLjzYDN5Jjrj8wnYN7DC1Duz",
  "key10": "4iRs4RDQeUsnnzpzL3nzjtXciEbfcULb5eXGbd75rgP8wzZGfbxzrzehWWm3S7VtFBwToSwRwnfpk2LxRn2ut8A9",
  "key11": "3TKCLWojkcHCYgcbyJeZgjuucGG8Rz1uxkZGDHAkzci4YobSpRKY3QBa5preCHnwByNn1jvYvhb9mXAyy1sNQQAv",
  "key12": "n6Z1TCfmQQ8MzXLqiuX6Kf5N73yMMHe3kZQLVmAAoHFiEtHfGrxWrpFBLnTbBEConKfpfdSjzbKkEmoLhKa91ep",
  "key13": "2aytewHR4dkNT1Rq7K9vqXSjzEfv7NwLJYdMbcFVRMpwMbUbfH3Ac6n1uCkcrnzKhMbJLKKPZaY8QcJMzUW26Y6A",
  "key14": "4eb2VXfJeRYF7RE9NSgAnjfHeVTHFPF3HfcNF6UgUf2jkiAkEnLuNEQhcGc2CHFpKCnHj2VvAyvRkGAgTqaJ9wv3",
  "key15": "3v9tbmpzB5nHcF4AQQYbkTxQbRAs5b1GVRVBD4zKESCBNbppwQCCUKzN9uUj5WcE3nmFDxD2b3KRt2EGkoaTr6ap",
  "key16": "2P6G2jo6STmYuvCv8jQEmo4ZKhWMbh5t5icNUSWMsosnoBXwgqi5e2r7LDcLJ8kNxwds8ofESuaUtLjtdFuq5CJU",
  "key17": "2gKpayALaJpddaAaZRZJh8dUL4jbj42aG7Qydd3XgA524VfxTK5DGzAJA4rSjtxjFRXqkPfzb8gRU5FgMKUzqY9T",
  "key18": "2JhmsmAy9rG5K32AA15HKe1AJ2E5RxHHV3EtiraANfRJmAYkZbYW6Qi9wibZ5FKswRL1q9YnTqjfVumXG9LbxhxG",
  "key19": "4TDYMt2ANoF9133EpgmRw1SyrbSVjoYKYwK6HwuhxhStGWNLfPCdcWxtW6G7QD99NzYZn6NFCoPGGqDj7pWrVhPo",
  "key20": "2DyHuQ7M9NCPpemE1ytWiiVbxLYPRrPfA7GnGdJTYVsYoi5vRdN6qAAv8QEBvCqdxi4GdjXiULK81MftQotUyqUc",
  "key21": "4f3NwXTPHGQ4cdmn75CpnmHK7MeFBmt7jTKDryQGYLfC4mGNFVFBQURQLHdv5mF8uwJbgF54XcoYABYq8h7jDA9Z",
  "key22": "4H2tQ3XFnMWV2usP1vc45Z6nwqnAvtusmZN5eY3CvYMXoPgmMG2emaeJdgMBFMery8xFv9ykjXMtkBEtyS7S1zCn",
  "key23": "yYroi534KacJ37ASWuHJXniuZgqfGP6Cq4bgbXi3r6UeLys5YZgPc4xRP9uvRCeR94dsfUujEzK3wU8YUM9mgC3",
  "key24": "5ZC1xnrc5F1yEapM2wqvFsfCDLhXthRbVCYPYBogeA4DHQLK37XrPHKakhN4EqXGRD7MTJKYMX4Zc3w5Mbdt2Ad6",
  "key25": "4ZzSvU4CZHST1mPoFW9zwezJr24HjKMPRbPerxptgz3gmaNJkXszYGfaznwmqPYGtocaQJ2UM9DYCAcovo8BSD1o",
  "key26": "wQuFYkqYPVEojroQdA8FoFC6gmVXNWkMHyEWpcHxGVryBNxhJKUgULr57r7euc5xHhdXVEkXM6wQ49wvLXnUMx8",
  "key27": "2qY6PGgrGQpTmjQfPoHdHvHXCGnCZdWwRiNTHU5iBrfVszvZ4UpdsRQCrpCXowThRe6eB5Q8An2PAV4XuKJtFCcP",
  "key28": "33TpQpgpg7r1icH3yU8MLJtdJeNhS2BcvcnDQ4R4y2xNotPLsjk1REVxyxn1VFAN25CCVBepw5SqZJpPrUEfDHCT",
  "key29": "4V7gZguRdU7KHdENoVG97XB8vmUYLyxCeu3haMiFuHqav6K9PenmQmjNXvCuubeq2e2nJNQG3Z2RzHUrVHENGUxe",
  "key30": "2NyMhU8ard8wfvpDgRmjQ9ps3ruKzytYRMZy2oLa9utPhG2pyCVgUTCx8TCbWaYX6iqRwcGca7dSKbLSc1DBNVwu",
  "key31": "496jmugYAwLEedFKMoAPqVN3B6RiS7ZA17s9CmxahJHUceNuyTgnScSS1EmUbtatQvahNf6nUQ9jj1swPMzZvGx2",
  "key32": "3TZQ4PHfn5FizLUi2FxSVBbeoJkzABKdSwPWoYwnFyUT67nyq8XXSVexVHSWp7Ws5ewKiSwa7tY5MFthJ3Nh5trh",
  "key33": "3RQJUHJcyCqgLpYrTmAa5KG1qfMNfrpbJo9J5PfzNEEZJbza4KDFo6ELNEJCnvHbwU82tfqog8heh3ThVMweoztF",
  "key34": "24aqjNBBG1s4697viZ7Kd5vZNw79nf6sUTY7majDxe3gM54RUBkBNTSQetRG7wxfTpLHFZeSRZq6nWyAct55qiCa"
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
