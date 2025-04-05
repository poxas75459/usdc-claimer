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
    "32CYM34FjhKbQC3CmSMqCgT5qtVkwg3sm3h4yBRvxJABT3cFzRWJgH4fprz7xRzQNYgZx3vCr8tEn7mVctYbsBwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqbXyk3mdiwL7v22JYP4JcshW1TGvypsTvWenCuCcg8Z9Tb3VdD3fHu2ydBP3dQdLXjqnyH6JNvcbsNQmSeuBda",
  "key1": "5KhTZdqFZ5kGwVg2ue7Ri1fpZHYpFVgr2M9nv6HwTLDZJ5652YARAEnkcj9E7Q3TFwYMBJnK3DihS86QfNN83E4Z",
  "key2": "YmFR918qCTrtsXyaep9EkWGUvFhVvDnrZmXa23erz9rho33QxaSz6XQQVnXGsk9rsXgJLaatpe6YRVGsN5TsUay",
  "key3": "43wz8cH8EpFKGXsQdLpBPJKuWscoWwxyRhkvH1XHKUZTXtt1TNXe3eKjEKfPQUVYJYxSSXuv1ApDM2Q9VcCBLCu8",
  "key4": "KhjWkakzKAsqMCZmryrTXhEiJBSvLchFjuneGfCnfCpcpXGedVAspBNfiru5Fz6BYZEfqqMrAgBBjchvb4NHjbY",
  "key5": "5EbA6cVYqwcgVSsdMVxYfN6CcWxpMUYi2MjsLh1eX86yRMpBaSLHUY8bhuTStc1dGKqmFuMwZ93BYFkDUd7g5xQu",
  "key6": "2T2iCcuP3sc4YXcMA7PsnfmnAuUebKRT5EksUqrJBcSko6QwNcnpRX4W7cqocTgp4Hobnt87v7ymfKWA8dgP3MmP",
  "key7": "52UAMCx4KrBTYiuP5urvG9URXgJwM1hg7wz9g2rVBjiGZP86bjpi6Tt7CmMxEaKBwB24Mb5K8hoTmuVR415ALVBb",
  "key8": "5Gxg1fF9mffqVcYfrZtQ9y4t3uFy27Ea836W5jv5SWgCJJNEP4JZjbZpzAcErDTF87j6QvVTLwLTeZuF7tPH3CpH",
  "key9": "2zAkuW3gtFJLdrkhpF2yC9rjMztmwTCGjd2CVkc5vutXaWroPyPqLbwj96SvGca8Ko8PeiFBuoCN5J9N6f7X3LFK",
  "key10": "4W2nR7HmG4skXFrWqsrzqLeDSTPGLghhCH78ye1KksuF9XWDUMxMBmNXjVtroTfX4WxdKypLzTYeNKZD5hvBRbnP",
  "key11": "3Y2e4jnWGBpu9eJzdn3RKF7TnivCz4qsmky1WL2dmysjyBnkzAyiL7yESsZkRp7CLjb4dsfZvzpVfguLAiV7hCfL",
  "key12": "5JhFpeyy59JUKZGShhiFVBmdMZs1gK7B844yzrxjmbKoJNSheS9nUbLd4P2kFHBYoQjuLt3LtG8qR4cCsCmfsevu",
  "key13": "3nc4gDTm9pERyWgd2izHWA7M7wn8fcqUSpv4iQko1FqKtJpje9Ap7mPpiDbcZsfF2f6AhyAUyeyDoDaNrm3onoTA",
  "key14": "4EWbmFNXjaGmEUNpogVAHqjDN8NjrYgmZMDj7D7Ncf7MCswmRf7Rs7YRXjfU3oHvRhjyMh3fPHtHZeSN1z2wApTG",
  "key15": "34k3FNS7F4bUxcxqppydwzvTywFSGd7mJpwiug9Xer7UnSXxKF5zaMVZ4taWmWAibRL4D8B1H4ZSgVV94XEtWTXR",
  "key16": "2z2Uqdkbxi3ua5NAug3N2yhwSQLaDDDpDZjdAN6kbwnUSVdU8BuXzDPdUyVY8C6sMHKtHGTfMDpsQP2UZwpD4cb5",
  "key17": "2NjkEYKYe9hPvZyo1ZjLqFP2FG2XLTo2JhVFHtbM6xxyEvayjJVSrymUkxGpWTuL5UqoM8FjRNEZiWd7dTPfBfkN",
  "key18": "4erPcjMmpjdMUN56dzT7bYzx2k7oAYpMHdMethrivsZN9P43q25MnWxJnA8obJWoBUG6CkbGGgGdWeJqezp7Qjn2",
  "key19": "4T12omPc2kqv6MPNdqHKh2fyvDxeCVqye4vSJXM9hQFbjTZcEm5UN3pRfV8rdEUy7d4PUzYhGXXPG4SygyjtRTCc",
  "key20": "3iR1qGoJki7gpFsGEtYE8jHfQdE4XGAcEVsnoNJG4tvQyHaHmJM3JvgvATFeoaRME8DuxwW1BpoupSp2bT9M2YQN",
  "key21": "3RDSWHCYGWQnJAh2DUKqCwYpnzocRg1Nxc2F9dBtuMYHgPveeG9XvCkUgK2nasgGcrsTXjSB2UuSmsVUeqSDSeLf",
  "key22": "4PKfS93CG2HCFGHeyAS9CjxzLXfYpJr9ksLqcvyr39N3sPyPPykfnvWMfdQA7vGWU5TUApeTBY8tmiqWfvteV6WG",
  "key23": "5fnD9XMY2LyVXLHjkohNGKR7qyNz7TR7DiHVfBMcuaKJWstehmATMCSE5g8Ede2Nw1AB8NYPwQFM1519UWm1rG7S",
  "key24": "3Hh1rYeKKkjaWougLo8FcSwtLLXVfzPA66WyVTbuGXkehW7MDYRk7NuQu8KCZ1PvRv2i3BcpCN3KWZa68n2DgMvU",
  "key25": "3Zos6DdsxfGFRk51mYSj6efEH7h7JidmXUUSMYdpHiJuQQ36DLvUof7Fv5FsuAYJ2asD9oTxEy2xZDhGXg9x1StC",
  "key26": "2PrMzCm1Xc7mYE4TBHYZZiMypt2NNnTyVfWKtkVtjAXK1UxmdV5rHd7sWGu8JnznCj4UxZg5cjpFsgJ3fW47BC6x",
  "key27": "4dt6rsPJaKboCm7GS7rap6aHFj8Z4QrWkJwGCsjEo6YKys1ZPTP2hoAeBNYD219ctoy5Lcjp9xvhzVPQfNzzcoN",
  "key28": "2LYjJX1gsgquyBMpse52hYeDdx5P7im6PJAajdPwxZR15RdVmW8PAidW9DN8CbgK94aKKH5d5g6tjXC8XxwbvpQA",
  "key29": "35e1pKbUSvQZoNot3cR72XTEkV52KooUue2H28dUEcvCS9frCoE3KiZLv3ap423zKRcEAHsjGQ9j7CJ6xNkyaQLQ",
  "key30": "3EmQcd2UUKGGEief2haVkp6pEAc8HUV7eakWfVhGxkcRdRicHCEjVx4bMB586vcRz7gE1o4sicnFzzxbYtnfg2sk",
  "key31": "3Cfqj1u5tRyR9FTnBhUGD8ACZQ5NzweGrW2SHeHhXcXgNCfHv6Ccf72Niej9tGq4HLAx6NCDbV7QVfowbcUwAeWq"
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
