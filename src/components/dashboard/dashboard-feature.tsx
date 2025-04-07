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
    "2fa4eDEK6pFPnkxE4aX5Ek9Tme3dYAC6PrgRPF2qLioVVQyAtPwVjKuLPqbph97eSHobe5nPvwjvcWJLpAtmpGq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTPV7fWgtBpQMcP8u65gfurjHZVtb4UAcUenss5TaCsutMWs6ZmCw75WtCBphkVZL66GaKKJDkuyeNZi7toh6Kz",
  "key1": "5iESxqFk2CLqfgaqwwvxFxYQwS8JVgjaAVT4pKsydRgJ4rtXKmTLG3sVM4Ru7pQgnCQgcRA7MG6r7U6bjSRYwNGF",
  "key2": "7TvMWxL2us1347wczjktuEo28YJwjYqvJwzWx7fRryLFAqqae4YtYQKDNX3x2hsG3GZyd1Jgo4ST8LJ5EiZacog",
  "key3": "58qbfQXGUUSRGqhzCTXu8rbHEtPUdME3cDTX1EVGecJrCko5VQv2eiBukYQiTmckJ8hwBAvF67eThp99FPFN4h7v",
  "key4": "2SDS8zTQkkFvEPu4VMGys1wtR2PyE8TH2zHdZCvRynr1nLy8nRDPgzK4VUPTqrAJ9ocvFiY7nPmERXzZZtEmpCXt",
  "key5": "4SSrMsBxYvrZyrXZ5cFARrryqzTJhQJf2F8QpGbobTKH4z1tnmExwZNZVi3dKTkpRtaHqogneoEEqvSXJwZszBRw",
  "key6": "5SDAashCbtxV2ox8dTu3KCvWtEoC8rDXf1B2d9Q5ohNcEPaj6VTBKvoJCbFrhqcuuEGBo1pqdVKxZyMi5qhPsqjT",
  "key7": "3VnZ6ApHY16Z475f6RcxAChpSSdhfmT4MsvAm4A4p74mmXjjCoNPVkHsJuLQjJFXNc3RLZeH38ETdcPbKPFtvc9W",
  "key8": "24LSAAEeqjqZ8CVwxaApN6zZEWsyqKgAu92rtrqHYcVvX4QLNfeNcjPwvTW4PaSRr77SwPQwAPHgXNwXhmEyooXe",
  "key9": "wUTVoZaacCye4pwTU6sLYY94Qc2KBFK9mJYVjUPhfMqN6hyJdKSJVCDYQUeKkJWjFCTAne5uxxQ9EYFAPQVTDqN",
  "key10": "5wu83YHfRR6VgYh7cprjjmoLK9socDxQ6Mb6PCEFgofveNjhLpZmzvEEgKByigZmhoJNm7WdJtTw4xdEMuFadfwA",
  "key11": "2viqJYzgamEAbP8XdXAVDvjZ3PcHZkaQqdCmCaRp3LTi3ZAff8LRJQDJDoqfQhfqrpWH6j46ZcLpozfe3GDDD7Ak",
  "key12": "c6SQfsDKWYcVHf2gS1Vtw2EvJoNRnDHNxBprMsm85aFMD9v3hxd6FUPxbANNAJLDvFnVHoK3xyjYQ61SZu6pUhh",
  "key13": "4xgBSF3ovFVfkzxKWofdt9ap4oJcb5onPezvhihSKnrtYWZ11A31vNe9NkVCWSgqYmch9PwPwjXTMNMD4tZrwd2S",
  "key14": "3tGrhKSx2DMcEkApEhesyz8VwAbfxqDiM9uKrNZLVcUSFiXQK9UeYYBcg43QdjvAvYmXegNRrEwtzNWWyoUqX3Ry",
  "key15": "WBZF11jhkEpzJc8tA7R2Qe4nwcNvkKuoFAavqM3sBvg7J1bcZRyrdRLFu9zemmUXTcHUTsoLgqtqxbSHXWXt4We",
  "key16": "zLrKdq1DQBQszMUwrdxYRoh5mBRw5V8Txd9YNUN9zyu616FPFcBaHHas6viGf11VCqpFGLchXmG8LBMiGjJgZDV",
  "key17": "2YNXBCGj58SBrpdb7K2HfvsNbREjz1LQ7hV1o4X5h5p6jpdZ83NvqBthFM6DsNXwaawPioCGnfinat3WFaZVE4fz",
  "key18": "4UpddiUs8nihygFfEr8nwMdWxmdD11LFXaYXnkTTB3cnQonfxoH9mbHULACXHJrD4UCJujK3pbheU7toTezXpsSa",
  "key19": "2PyCxwk9LqTTddhqmSSYrjyzNmDw8h8kMFHW7jfKBKQ7GuUfqu1ixddmV7MrheZQzaw1tkKpZYWRBQzVJQWinVua",
  "key20": "3byXtkSujnRh3KRGeEUwPzJS8W4upz9jqGRBCKeZpNJS9dQtuhYxjfaJatAWJHXVmpaNgUwxHk9vHmLZnsCBfs6g",
  "key21": "5ovu9EK4gmp4uPX1tSfxWmQD5hU744bADvP5ZNuSLCFYjD8s81Jfnsm8TMTXG6Z53guXK9HGmP4BEF1yipkHhpbp",
  "key22": "4KqTwKY5UkkHtwqb3VR7dPWtm1YhC2ox6hv4g57NP6ZT4kGeNVJhdsjxtrY11L1i6DrA37AWusuEF6Rn5jSzD92T",
  "key23": "2Q5sxwrdfv5CSDFkZi4z8tK367vriLUVHKZstPnseWRRz1GPvuzLfqL8nzhbaCsdEbm5jWyZMs1EfF6k3dDoMb5n",
  "key24": "4WdWtrz9cjymTKNbuzQvohL244edniMxE7XqzuqWwQH8zSnszuSThBy28TrbDnz2YCHjta81PTzyYeDJhRi7iTWH",
  "key25": "5j5LXW8ECM5K3ByyL8Tze3BYtWRFqKpKXKHeMFQTaJ2EsF2MF176xWaHpDeikwnhV7dU2BKe7TzCXQkGwQ2o4Wsc",
  "key26": "4DWFZG3PwMFcbWZEV9gM1dr5bWQBVKDFWQ14mbVbESi3dUTyYC81nzo5LXrfZqvhY7FcGy2e5Ny5DzWKcwuZ6ToG",
  "key27": "o2Y5ngMtKNKjuYK2naKs34b6NB2vmVxeBdK4u9isBWsjrfjorEKJNZKs73UyLpy8xnz5Xc9Xe6e1TfyfbgQXXKn",
  "key28": "3jLG19Rs4PCR724yBRzbJ1ZJi175ukLz7978PC1PgUxuBUTozhwZbpZtajUnH9MozqxqK6XR5qbTPnsgqCtr9xL2",
  "key29": "3GnrS5E52ScC8uyXiZ7CDBCzDCpTY5A7AY1HhMz5kfMYSriGz33492xe1WQRMgP44Nyjo91AkoYL93yA4geQT75C",
  "key30": "655xcMy1wfeJg22o8HRaZ3jjDVrSxCDeyjJJvszYADXCJVeWqh5SyGtC9796cwLPcZFN2VkQaYut9BQDB3PygE1X"
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
