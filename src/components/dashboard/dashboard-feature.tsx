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
    "52D85yseQYQDtQiiGKW7d6De1fViWhHmV7Vu1JMKCxwJxHZ12hgp8U83oQYiS4ypgrTHFMenhMDa43n1b6i5X5Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raVbwfWPodKbkM7yWm9eEqvP3cpfMLdSaYizbuuLwDok3sZff5rhbBp4mkfhQVry7Ta1Qym3m6vgPh2r1HbWKVS",
  "key1": "5RA8tPKUa3rJH8hALwTJTarWKZkwXHtzrn5pVKdhbCb2Duytdm7CDXEWBMjqUFMPfQZHabhf21SyqkjtYoRkFv2V",
  "key2": "2gkPMqEDzzDwzsiaEaEUbj6FnXTQxexHBpCZM4q9tM42ENK8ba5duQy2k1k9meYRVkLDecRNKaDwU4TbCYZ4WNkN",
  "key3": "eZFAy73GLpEhvQvt5GdfNCXQCy5Em1eLN1YhzLuLX7ye54DYAV45x8pGYLoeoXAGU7tS2F3qN5bLTfjk7o83fkF",
  "key4": "4RxW5hUovA1jMUfxLtaTcup97VrNWAxDmD9cxC8Kuk7VzSSVHsvPQ75xRYbCMztaAWQUWj9Dfaih94AkyqFNNPky",
  "key5": "64r7cM9T7qbYMQZuoNYbYY4pidxzC78fPjxTB39Ek4fGyr2iLpTAZqW81kfRnuJo2zWmTeDawcDkfwBHR7QhCLK9",
  "key6": "5DqeMmmUPUaWkN5UuiyJK3m4Exat5cyPtgyoMRzFpR7iQDgNLhiCEaKCNkkMajvErXwnUfTrrZvQb3LRFdZVhopY",
  "key7": "3nv9WhvdzWgLUy5Rq4iy3Akr9pxHnMxh4S7amMvxumnSKiXfdY4rnhxKwBcybmiPBrSBR32UU9DVkKZt1Q8uU6p9",
  "key8": "3tNH1BFJjChao9ZjJKxWpr1weBJSgCQz8HoxjqwmyEJRVLYJVVS2v8gY2A1FHfmTwTK4PpJu5HVe7MtDzRdReN19",
  "key9": "daJoEboxPtxDZRUpHqxadc5H8M7WuQ35nSKnWvo7QqRYXFA74EynGXGipw5hXxZ753zGLLh9GTk8tqmgpZREGYK",
  "key10": "642gonDusCSdBvGDsnnMWbN3xS4pyE6CDpwcgX6qeKq3bWnoBeq9JPyLF5mbKYWvbvUpTbfXgr3VGtuMcQsL7bDt",
  "key11": "QpzwqefEVvYT8d1WN8qTxexfvxCq3YNeq7AgRQJuHtxJiKGxrDV5Ekau1uH5rwQPHnDvf4SGyL5GGcBvZPHP4E2",
  "key12": "g8NPh2ByeteGUMyBrDvWwjPz3Ty9Jkf623dU9xsRc9xBs6hJ9w5LcdJjwk4krDY1xisE7oFpN9XFeMRgBso7eRQ",
  "key13": "4EnniyFwqPm8AXGREZmT5F5GzLKb2Axcjcc7ByyjcNbnYGcbjoafAukawmQz1FsTTZ636j89HzMHfXyry6j93sTb",
  "key14": "5xCGYq5177YKgcP4EyjyrabAVgYSATRUgnnbSDTSMQjwAwVzNE6cZe9VdtRiX8syPvFVBijzbZHhhJNatvK2W3kt",
  "key15": "558qhKM9b7UZujsJyrRuejvqs2CVTU9cmgMAycFHVSh1RptpbanT7Dqh7HBdE8C9XGU2RqHFjVQxKtTBaxMhrBWJ",
  "key16": "2skTY6q5eMB8BYKrWLhd7Rz4c8j5Ds6dxnospDu5trykaneDu3wLAjGQ5qQLKLQoPkdduaFUFQWgeTnep1YLAv7F",
  "key17": "5ufBLLueVBZz6rZqY1Q9zCxx5LSxjYKsmipa5PxGyvecY8kpc5X7zBdeGEhX37V86hcVMMSb9cMza9EcVpSrfSii",
  "key18": "54g8FnZrstEe5zkNJ1PcqotdUy3v5dZWt5Z4g6zLBKj6GMK9G7qmBwA689oz8j4L7dfmC9qfW2nAJtH3vF9YWic7",
  "key19": "WkxzhXoJB7zP8fS54UZQb8evFuBiWhwj46gN8awg75wseC7eP4kF4iBe77iRr3zi6UZkVYqAN3TKp4zDek1zvsJ",
  "key20": "4AfWa8d4wR8W4zMAort7FPLxFrEst6i9ETJmrqGqx6fUmK14RLPH7idLAwPgH8NG2ebpGejx76yGYyfEvhFM6Uwd",
  "key21": "t7ywmdp8WjcuB1fCDsFSfnuHQV82vuU6DNLGBSotZJxqXMpAXkvp5gVyYUqZtDj8s7RuJkLXgtKJvn1hduwM9uN",
  "key22": "hjzkdwc8UrPN365jMr4eE5QumCBnGnQ4eqjCHH9ud58LKaJhhpiqkAZmsUbrL3YYVSzi8DevfUCUfcv9FSSggbx",
  "key23": "4XoZ8btrj1xVaRKKM2i2Vr4h4pnCvG4fk3YojbWGvovnixBfg5twZ6ryhXZ36TsUfSserb1jW4gR2J6VEr1Vfyrh",
  "key24": "5rYaV2DdFACkEJuNbrxDHdWAmSwGVNgiuQcZeHkRsVKSt9d5BNCdYoaJgDVwmfvPbQ6vBRLqy15jcamexu6GvFcZ",
  "key25": "3RoMwaSxcSSPNcVw1Ddm3i3PVqeUtAvcPkWGSWCcafAyyCGExUx99vfg4gfyMqrZENKuYFWvMtc8XNEJ6oKxhSE4",
  "key26": "pk4EYpaDX97cr25MkVsofceCZJedrxjz9JNNkS2uk3RLJJBSsXerD9MgvxmENkWSHXFcr5641eQ59o2V3WxEe9a",
  "key27": "4L4XQyxC2gtNGp6h4WiuBhF1jp8cdCWiu5FK6o93r66erR3HtzRf4ERASYKoAsvN5dNQQDnKtVVtAyaP4UGQTKA2",
  "key28": "3XHeCryw7EKbpyDR1LzkLdPD25oPjJgCfkTXwMrLfvNM8C9BmGmmNJJ8ZJmV8FJpZRnTQMB1QrpjaFs1MH3ip2N1"
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
