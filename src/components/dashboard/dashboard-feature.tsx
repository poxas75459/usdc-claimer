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
    "369Qha7pSwChKujCsi86vbQmcPG531WAY1SPjdHebXT4GfqHNrLrcC9oerDKo1FykGfX2SfpnbbqyhA88u93qhyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7iNhq2CZrB9FnfGucKupTcbtwZcbtpZtfGr1TXbgJQwgBjVgtvP6UPDmE8tCduUyQ2A8DmVyweGdDQwHkfz5Nm",
  "key1": "2JG1u6egWgMGCXxEbF9xn3Q2J55brtFoXptFVz1g1V3gZtTbMXKNhHKLYJvHjEzYNXVtyVmbnZoDRPskerzRTq1K",
  "key2": "51qX2yGmwtF43PghS5gBoVgapEL7PXTXnTjfnah16DLozyg1jhyMyFFgVuvMp7FPsCovJQzbfDFKY212VC1VKPnv",
  "key3": "4xyFJww7WTZAeEDr5acHAx2mJL6GEQpuxVxhDq1bFszQ6MV8m48Q5r7UYanDxvNCh4cdorbGSVDzFxg6E7Hn9urz",
  "key4": "3ih33hj8DHbiLySXAAQwVex7Hok1MtpgrHzGQmEXm1EYwiKAsLyBjMcfhSMGuwgmLgCPCehiqybLqEmFh4T7mfNL",
  "key5": "2PUQ8iAXEZqz5Pr5UWr6njnGdRi3pGbQVAPNJjcwxiXnW1W9q5m5HAGUtvkHZ8cy7MWgUFkRWNJeuF6VzVyfV9PA",
  "key6": "2PPcAzXrCXWEZo3FohXFzTxAuajLLvFMDvRnRCq9fJicVtZhAPX9MxgnG7vZQ14VcXgy5LcfH1DGQCb4Qv37LhCK",
  "key7": "61MsSbyyBM2jDATSwVHhZY6hAPtgwvtzGs3rUqxiqcd11RHDmwniX7mtdpbuphLUkJzXKaYEv626EBU8uD6VMUnN",
  "key8": "4nCx7xF1qz7YDKSUqVeJLSSh3qXvv3VhScCWcaUSgSWmTm8rGF1dXDkBWa2WXUVHoYneWDwrKGzvBmsQG3uifqaK",
  "key9": "Fw27ELnqhDQ2QDhwBo47BHVGWJrrPEo8BRzZf3E7J8bhP4JZB3mNTY6FbSt9EAdRYE1cMpnv7PGwr7875wzk7Ye",
  "key10": "g54u1rQsMXNRiJmMuV3rYXLFq62zCMSs8UiEVQuPW4PB6XyLtxKxMvWZfCscAisX1Gi2mpLf4sP6WwzPNvp7FZ1",
  "key11": "5snBKh6gVXM5Sgd4XV7XLsbkSS4L4AXzHXZaSqcaCfQzJKLwJU8z2V7yTzk5heiHTX7WbyNB8k5Q8a8H51dyqGJ8",
  "key12": "2jukvBjynAaqnHfEpcwKV6WDTm9ei27qZhrGYAcaGR2pANU5iN7qEm27832QiA1zNZLr3jtpVSpMrN99J7W1ducR",
  "key13": "4yHUbqeUXEAi139QrwTeSRssqZxrsAiNUjgHPm99pbEzV5BGyJtC39zRCsjLsRZcV3uAefoC73T1K2UzinfsMixh",
  "key14": "5was7Pf7R6CzvtkVeNdLi54DaREdyvryySbi87am6vsmPDcGMPMsukTdWfzU8XxGSe5cycfh6afpaTLm52VvEH8t",
  "key15": "5zyd7dN5QndnedCdXxFoUbPAApaJTQk7x9MuVppXYqxyWArAmSKva9PpzmqUYG8NdFCUqUGGk2AqVwDE89Zj8RRQ",
  "key16": "chRZgohucJoBD418o6NAj7sPexqEUPwbA3pyErtHXB1bs3yjwgfjmnEmgC2X2cggfntpprjdUAXNSWaCKqk9YBD",
  "key17": "5s9yCnnjdTub27z7ggBfkPLe4KbboJNwua7Wee2a5UkFc8EBD8NVcntnk9cBGMZehbJGpkKQkT3kcEEXUtACikhT",
  "key18": "rKuDr5qD81XXE5YtR2WyRZvDxm2VoDhnzFwUd6avodgyh4U5Z5vyPsPzhmpFuFsBy68kCEfeBbykLW7DGtDg1Ly",
  "key19": "5ipAheDyiDoTa3eZ78XAP8aQ1zFm6LC9EKkRkU3YVoj1KDJrSuezgapQ7EJpzKMLyYEo6TrwrRzeu6Ysxka6UsnV",
  "key20": "wGhpLbuFSf57DBUSit44DeCHBKyCEB96cfvM94T9Uz7vW2k5yDvjkbiwqmSrqEKqkJna417Bj14KmFmTc8snzsB",
  "key21": "35Xh9KA5giGhB8zTMgfofEgRG9HqzGinnnLqR8u1B4TLxVJN7NS1iQbmZ5fQRatrLuB7NaSmy8fLbVyzj694G6he",
  "key22": "2MdBJphJgzvqpa8EsK7zvR8FgQyKSaUF7nxCY2nRfrtvzzp3vGvoZNSnSxP8wX79j4i6Wh3RaCa8ZkPticbCRTFL",
  "key23": "21NCDogTBsuVaeGAaMJaxRnn1sWoykvLXZCbczFtK6dEFpYrnCva7YuG5zzN6NJ6hho2gxynKky7da839drthQ9J",
  "key24": "5qEnvKKkrEfvogxR37uUw5Yr1gmpVe7DwNbuC8S1iyYRVdLVkKvRAE7AnmMW3p6pV25S1j7xrWbLAG8zGTVMX83G",
  "key25": "5JHDcbZUrU35r6GuKSxhHokQB3cRnbj7dqS6gEciJE6ZMpCHZ2w1uRT9Q5RaVMknGYrfBiaXqLGPNEJSCQuFoZBN",
  "key26": "7h4YWCMTyradVpTp2suPkJkUjhQMT1mg3GGdDy4qmhXyckHSt3oZk4vfr48v8hnLWJrM6Xmf8Ldj8eRK93yxsmw",
  "key27": "3bvGWyHcvmKti9DSbjGdPcfjqiaV4z7YXcXf3NgyJWPGTcJRNUUJ82Fojhaqu171PTpkuiVvWZTijJNBmzjMLmZm",
  "key28": "2x5HA3LfRWYW4g2YmDfs6s1cH3S9bGvS3Nu2wDQmgHJYEJ7yWALQQpCpGcHNj6LdnfLbZFAxcpx9EBahsuYVNifm",
  "key29": "CCnjTLYPkTvyjRCGBD9abmjizAnPKqKkspC5AXJ5y3NbaAmZkG1WKi16JUpG4WBsVyoUbnvtDuRAUnQpKQUfbt6"
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
