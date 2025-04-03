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
    "4Cw7vMLu84t4Q852dCeS2YMNYbhtSwWHKHR55f3TuZTTakhYfS81oYzjaSoMKDK4K1r1DYuTAuauaRVvEeQPAgNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w53QYCqt1mTS3GKz3UXRobatigLb9aKyXmeBcJE1BWwSdKuDgj4Ln8YqnDAp6VP7DGG44EJSbXr4QUcroiRiudg",
  "key1": "5b5UEFkEnrEhjQxffN4c2M8YxdPeCBwXc4qHoqrgfeRuQrWagw7AaEETqPSg63ifVdtHAmcqGn2JEWtDcUpUQPnT",
  "key2": "63dMAq5988QTqs8M6e4vAT14NaC5AaXmyAazvtMVCMMuzjKYZzLDtTSK2yGgWYrhNSVbbNAYzAjgq59jAca63CCz",
  "key3": "3L4kTWXTe6FrVnEY8MxsewTRoSJJXoGMCf4ty25S5RB4pT2QWdZrrctT4MZfgqocj6e9hJcdhTEJPQriv3GyM1ax",
  "key4": "2XqeLxMuZXEwTEguhCssRVUWzjDo4PbLN4Srpsi75URfTPzCqyYxbC6wdkJRwacKTq2NTVVLZNyd4QbGuU7hjRbS",
  "key5": "2V9EMXS2V6sWJdXUrb7hToP7Gd6v9RtnH8QLA5TUpf5h8k1mhzaLjzqZiYg7ZmNrdqYH1NjdUjz9xLCMhcuWNctZ",
  "key6": "4s7kR9BeFsB3ox1yL8y7nXWJ5LiVYwZL7ftkJ2EA5CiUoVcbgKXJne1qx7ikCc6TgHp1kiE4oZn3oWGWwCVqHbS3",
  "key7": "3Wm8SbEQburmyceD624YRZpsWi71xnuhc44U84QkuJQYv5DbEN3jXP6USDveJZZhUGT16Z9m5GtWt6UMkKsmRucY",
  "key8": "JQMciqPH5RmBipgP9ygy623xCQMXTyfkunLwgfsTR9wbJWb9oXQkts1QuHUNSTXBHnQiWTReHHHQETQkWoYC5C6",
  "key9": "4vzhJxqEM4JCiCeYFcZDpdniqmNPe8tmaNAAvjzpkYFrhGquSpVQZ5yDfDen55UbkcC7zQKUDUzjm3eJZYnLJdFV",
  "key10": "2A8xfj8fQLsR5SVNoeS13YPfT7DQpgmwEzQhzt1KLwZLVrRUWSVBxdmFpybikBPfHj3jhEoHXrnmrgaPpiwLDDcj",
  "key11": "YCSNZF74tkhhurbifJx7my92WFtpvAyQfHZb4EP4JL2tKnES1ruoTLwyDWCFukSVtqAtGCtaqq3wTMC1DCEaa3s",
  "key12": "Ns5ybB4Mv3TyykK69bYY6xfP7iYFLPfFb5wdxepCyde48wM216xaohXoPzuw3ihVR3u9VnE7crgsRMDhtXdx8Kw",
  "key13": "2ykbvU2L8DWoJkBnyoYpdxWJiEcWAWk52aWgonwCuJnj3D5UTpDL2woXDw52kRinK7QynciFRuR25y94C6BY7Z35",
  "key14": "4uaBVhv4NmiUdY4v5jLGBqrV1kdjhm4P7gAKXdZ6m4pLF9ou7qw1F78PNj7yczTyc1LVQLFPbfCSfGJ1xWLnZ1MH",
  "key15": "2Sxaa45VziioCv8tvamdpDLQBUMQnTHdvbRz9W4K1pnNFZTi772NN9rcJhHnXFj68rH9LqZBwxN1n4ea6B6fCDtt",
  "key16": "5wstCKTSagSGL8orYhAhCquTAzwzvw6wEa71T7dm6QfhmoFT6noqurCqWdKF5mQhPKJNa5YQ1wxAcCQvYVYy4SPm",
  "key17": "2EPY1LqRtYBGGLSRcCRN3k35okz1hZZchfRF1Y2nDMR1ngVx8KPRv8gNkDPKhVc14NErg1dLPis73zJR4iPwkSsN",
  "key18": "2RnVNWBpwiP69dyPoksxP6C7kF8KBa553GD3RPwWqrASk1JvqvgTB49EuqCUwGeFP4vft2J617FGg9t7beon19ZN",
  "key19": "3CtxscRXTL9JPdToiurZMKejzLJonhvkWZzxSUXdsunSrSmJLgFLHQV3vrkBCzSptBws9NQGviZQ8aPkcd4yzrZ",
  "key20": "cgB3Mtyfegi4xTecT4XQ573DigedbjjXSqyF2pqe1uLppnxkevvBBFi7rmLbED3WkgJehm4egr5eFGerm2DqfHq",
  "key21": "5u11Lx8jmfyGFpNsVH3Vz7BLP717DCyLQ5Kzy5sTEStEXmq3MMhKUDWVyfdwq7v6VN8PFpuTcYzCCiTy2WaQgANg",
  "key22": "57jWUCgLBvjEa9ZCnRbyzA31Kar88o74CyWccyG7Enbirr2a6HMFsXMzBbPZD8TSbcsKmfwbNDY5BJdoBM5tUdts",
  "key23": "5ayTP4hRkVcdwUtd2XaUyW2iquFiSsjAAyw9g9J31RHGEkTS6jS13vQWZv8xmwCbyVht3suqitrTvnaBitfXUpL4",
  "key24": "3wSq88FFukr2Bu7wYf34UGVFyEx4jVKDohG6znWgaGrvvf5fQ2FsFTnkCNuKTyq4hih5Eh7pdvp13ZMgGLfK4T7e",
  "key25": "3kYi2Fpyhfm8ZwRpAQwTqqijBBdz8pR2Bu4fjsYuEdGj3Db6fhi3TojhgpqPdAP5rD276GMMJNcGBWfWXYLfZ2AM",
  "key26": "4AA6iwEwegvQpXFa1YjyEbWuS1Br5AjnQKfVxNKuhfgcKrvsSHLarfGprKcfdLod5PN8HH5PNNibaytGNSGscsNs",
  "key27": "2eoGnDtCdNwyTXJZHcTBfxyuCRJosdo5xoNVDkDkquxr325tQ1hiMtTZQqgCGLMEvRKAwkL8YPJg2UbtrbmXqxED"
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
