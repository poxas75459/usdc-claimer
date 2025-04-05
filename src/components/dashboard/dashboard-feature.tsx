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
    "3ZugN3kSFJ4q22sjf1cdWN3DqohXXheTj4bcpnAikNbMvXg9t9F6FoZCYZt8Vwo1EjwpS1SLqbN1nJVPQpxMXGwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGP7tr3r2W9G9FZyfTbC8SBb5rtNqNnYS9sedqkMWH4NUiHm2ywKQvYsH5cMYV5urbxeTTbkxroGif91ZL1Jwen",
  "key1": "2xGAQqUsDMTba1EeoTZmC9oUYEeC6L5kkSaM6K8Zj7Yao9WAYpNNua9BJg85sBPb4hQqy6VMmG3DuVPwdnGxKdyn",
  "key2": "2N1cLC18SkE9FAMZDzr2jtyxULR6jzakCdRaXT3PdrbqFgMCDHnGeZbYr5ptUuYaEdHYzUzUXn1a5Bq49PP8xKTJ",
  "key3": "5BMygjXP1jmJUzTFAmRJngcXX2qshXwbWCxwp1pxjj7QSK2pjFSnPXBoV35Q4cMuxNVntfNBgBUh6KUcFWvLaZC4",
  "key4": "2oDBNdarLh5basiRoYgmLmqNVP5U8gSmzsMz9f1PgkX2sMKH2VUtFiPTN2KapcqM1LZfrDJVppT2wqCfDDqBHnV4",
  "key5": "3mNmSqEA36WdVM9ftk3vmxMMXh88hFavpPN3sGdZLjXeqg1QxT74mDShLEL66SYLMWeCPmJydZMwWmCX5QUFEFyS",
  "key6": "5oaqBBue4TTvfH3DeS7vTc5VXJg4wW8khH5XQUWyT7BbWNxNTPNf346anwez5MX6FCRDwgKirrACenAQAUPvk4UQ",
  "key7": "2Ay6jzz2dWQhXjEaL71AqBGD7jepViiAF5HPkK6j5YeyaKnUs74RMU6zVFVf3XXABJ91dCqyCL3DaEm5WeQVszNW",
  "key8": "3X5ybPEapNZa4SrWcQhxiR8U4AVY4Yku67xGaZCUEN7HccQvTEMDbmECicRdVDmoRgre7o5W7M2JJc1cXEVBZKtA",
  "key9": "1zorAAmGRKU9bWvd14tra73rcudGfmdTHXuxHuEKNRt5HJbqxhy7ETCngQNpa2qrMAkoyG8FKwUqAfmFnWetqHi",
  "key10": "5kYuiVrrBQg2yH4oqnnqdYzoD6URyoVC6yBwURsxyhXNcxgHS66a1q2pEXWYHbM4fYnC4Y51aMQ3ED12XwSCrF1D",
  "key11": "4v1bZ9svLvGK54XovaUdygoPR8nJLPedfeJPoDXRBd1DQHVQe8H9NQpMwb9eM72rXMFQRBMsxeTuGBN5cUtzt5fQ",
  "key12": "32AKQdQZcAtDYPSdvDe8NmSHSPyZSNMYVk4bmcjP7MK4pgxUHeFjAXreP3N3TkZAPaMTXUwbqVv5iy3Ab9Qo3nGh",
  "key13": "GbeWXRZGZgosfLjJc3SyFFPYDetwRUDck3rPksa8S7JQRpkGy7RcyVoVRKBAxRnJbN5CBJYNymWNfmdu3qMaxEt",
  "key14": "43H4i6nf6WrPG45T88tExHeZEfWUgomP9SnRfkNk58ds4rzaF3vQbeCipTbbVr9dARRhbp6pu5GfToZ5WwiUgmj1",
  "key15": "4FCN1MDhm9br7QERm6ECcGPXNHwSXvvCjsR8bb5MqogfZvmaJ29Wo71kLWKqY4QcmD9rc17NcHcaHTWeyRiaT32F",
  "key16": "qXqAZd2j283SU3ZBaL4tq9QLJ3aY24E4Fiy6QE8YLcX3ATbSaZVkVdw6uzsMcLgHxASDDWksJ9xs9Dqn4gH1DrJ",
  "key17": "24jqHHRT1TN9959Eab6gdCwkDpAGvaEtWDLn551JhAN8iSjTh6WV4bSSTABv1hK6uDQ2qU6i1Jqz2kgyt723nqLo",
  "key18": "5DYsJ49aM28uHMzbQQiQf8chUWQJaVafH4iMtTsHMG3FppfANpb51VQpSV8gp3aNB9yLsyYgP2j2a5img9KvCqc8",
  "key19": "3iD2fJoy1De5zhXVNwjzXz3MuqqqnPKJbxhuEhMTUjuCYaKK14dRmSexMftAJZeo7iCsZcxABBAPxLtqYmoJpys8",
  "key20": "5pvUhy9jNb8t3Jo8FySRHuCkd419tmGfj8WXUgZdRpgfJpJmwH6S5tPfC5u6Yhe3ktSseznJpEvNXBS2YXy41rya",
  "key21": "27Q62ZKrAx1HrfBanZRteyS5iyD95AhF5dhu2wmP5Fh2oGqZZ6QZSjpN7JK4qW4dnqv5V8fSh4jWJNgb2jJyWUDT",
  "key22": "cuExcWunYvU57LyhUPp7hZqw1oe4aMurahBNLJovkyiX2MW8tubE6wKJGjtxyCeTVRK9kBgQYa65UCXXXDdtLFC",
  "key23": "4jqEfrA96YWxsueDTbViRziwpnJhwhVuAAL7rKQB6nXQcrZsaN3D5sdGeff5paUm92GpSSiNLTYs4mqYykHqEsU3",
  "key24": "2JdeCgZXAHNQANBDPTGLDNRQ85b9hhZRzEGE5cA1RetSHH4TMouPB63KEebjnhoPHbk5bDdubqJUp3RS2iegr1Ce",
  "key25": "4ea9BFXidTAyDF23PnHz2N1vaVeWZceki9m3YFNUwW4vpaGL6uQeU7SfNWKNM8GKsn52Hrz5L5kjC8aHn5t9CKmr"
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
