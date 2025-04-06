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
    "9xNJ52hAMU6QnXheEdMNed9P4YXHLYF2QwCbwPYSWZQfSCfsHUYQACFMFSUf7ueVK5DigjvsL2MjymcWZt9dtdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwmmqcia9of9WTuJsasVm5SuinUSZS5VbEQacBEGojQd8ndvFt8k6qF5cSkLnicYU8hbVz2HEweVNfgtpnG6FDe",
  "key1": "5SivXq9CmTVdnvs3f3xsS3T6hZMTruKBCD9MkVnhPchQ7mMwCX3SWHbftvpebffSDQTjDwCr8DYfwNKnW81HhE1B",
  "key2": "4B8M4AqBmBukvVw2h9QDyRFzy82otivbMoTLfkcau1H7ZSB8NAi1y8LFwkVGfwF4ARKuypgArt1F2ZLxKUStFm6E",
  "key3": "36tHMgjHxkVUS4hqRwCegFubhUuUfZNqmPDGDXN1AU3th6qyDLapP7Wq5r36viUt8SKZevGMeJcoCX6QnsVuSDEf",
  "key4": "5DZPk221HkDcVp9pRaLyXe5epNd7xV8ZEBjAQgrPgtPMEBgzZxenJBo4F14A8g48vH55kz55oZZWyk1kizybDKPF",
  "key5": "5hEnDC1oXvNM5KGAobE7dsofEdMWqDcBWH4Gxg5orD2TJ27pobcPZawLmtusLskQkTDXYTB9riZrs4C19J4BM9eZ",
  "key6": "4tq5W3CL3RU1gbqBSui71tNdv1hNYnQgH7mXpVdZs2y1Ngqrz2dLisincFb8Yjjp8PQRMN9E5kNFt8gG88iR3Bwy",
  "key7": "waCnvfhsvqWJDLkxqnRxgzsq5Hv5DmD6Wb5sonRLCcKwbuyWJwZhNtH6aEFfkVFWirJ21CrHoVa9igDp963gUi1",
  "key8": "38cpCFNPZzxVmfDw351JBvL7uF2UfpEMAYm5qqAXBQMd29UQgB6CiQPscL43tnmTv22iiii1AkXff8svqjs94T4t",
  "key9": "2UtQ6U7Fq5wdhQ2YkvBBFKU24wnaAZuDxbsM6JvqFbJZdUrxap4HoRbVGiD4W3ESCnUNH9Bhs1T8seYUxZjZGvg4",
  "key10": "4oTm182pzcqRUDRnJbdFZe6wbgfXbZQMbUE1ACPLNjt9sF6xnPbGUMS8GcGtvyEh1a426AwmdJMDiSYPCv6w5Hpg",
  "key11": "vsh2yCcNWaPoHF3hV87UD4sMusZMv6phy21UmQQbsQmveTJarPNQJBHEGhgcukriD4BaRgmKuq4HbSLtbjuK6br",
  "key12": "J7JVKkNhigRcP77X96Qym3yfqJ7WoZfZMFvemZDrehUQ2fFd6i5tMRiDpJrMDe7A9C1ZJ9esHfwr1amZujfqswp",
  "key13": "4QmS8dvuQrfgaBLrQGuTgDBJyPoM71Rg8DcKNwqwAH7atcD4UwVa4NBqVjnHFVLkeAJ9hqgTgUVNJZAuLL23fpAp",
  "key14": "MVSAn9rF9jH4RfLdFmD5uReboY7T9rbsAtW4QJvP5CAhpKnp4H7FMhtnNzzM3A3s2w7T3RuZa5HmEg7DUGHYDkM",
  "key15": "4ZeG8yguhJKnUyT9Lnhj57piAG32x1PGzVbpYB5nVDdscFehw2tfLwSEocjGmMihfim8hDoJbcmY5DonWPnk9JXy",
  "key16": "qU8LsvHc6GpHKrcuyiq8aE8sL921aBhWgRxvMB1MqAgVUNdEgHXESEQSVvPatywbXqAuKH2wfXY2T4W1EuZNQG1",
  "key17": "2NKhhhsRUXfDwLJjea5g7NUtD9RHDT96o3Js12E2NgVuPndNpmoUPE91NXRbYjCGPYKYzRiw3GrHW2nnu1Rnxtio",
  "key18": "3Qr2Mbn9mgkNMs3KaA5at9ew7xmPYMgGANEvk5ASuJv2MG9J8pJLGwc86MUEtnw8x6P2EwvkjAeTodvatQqUgLtL",
  "key19": "22W5rbtNMMH7gA1hfzkW4pnabQ7DSTo78FnSaYhbkpQxmKHq9BAJmNpXMhdben5Jksxqv78txqJWH5MBbDg8UDkB",
  "key20": "HgfTeU5bRQvjKQqVHfDuZnxrYNG9jtKTu12Azg6GrojRs5CYDhZxWP3gSuJSMNXpnv8oAoyG6DwE3t2qXd5YT1t",
  "key21": "5fipDLUJ1YNu4jbHFTHSuNG6Ubuxn6aGkenF8DjtRCfbARJcdDFe4qH3t3xeFvPb1dpcUN6hpDNZuGQNArCj3nX7",
  "key22": "2jAGmfc71LQwXc5gk3i16MDczAmV8b8p5JBa2R4Dqg4Kcfg92C9s7bexsaiDkGoNdunbSfCiqYPeVXL43PfE8QWy",
  "key23": "2MRfFZsF2pnuXuSTKcne7LkyPHmSF2zCUbb8FAXJXbZBLGUMKJX15PGpAnYk3uA5Kd1587nRZSh91Piiv8xQqhwd",
  "key24": "4HN7XQ7isoyy2aq5TKV5qT33tunrRpG3SNZ2zkttXfyPX9rKzWYLqrikZNrpzYM5YDjVArEeceELCv3VQPzQS3WX"
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
