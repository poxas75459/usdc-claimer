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
    "4jxv8fCtkvNZuE6TCny3u2cq3sy1tFErcprUUejsLDPAMCrwHNn9HTDaDkh4fr5kknRQcBRoUTUQjnpRrjQFhwG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUTjzTNjSjdMyB4cTM6tEBX9tLswtuJBK7A5t9FAwtTGmTnSVNRqr8MBkFwTssmQA312fEyXSKHXNZZE7635S6p",
  "key1": "uyjnkqQZkpfnE47R8aBgY5ZRnjzQFPVA2Ct7MnJxojj6bva88EVe1JzD6AYR1YnvgjA4zcUxnKyD6petUexRmNS",
  "key2": "B3R4Mmq86ojuSstXrYTtMtPPRKrdyV4zV5LecLARDGT7yq4JkFaz4UXJdK8CQqgw1UBFMS35oRpgkfy4qfWgk9v",
  "key3": "362ndnVo7m2djTufUDkc18bFZoiNHb5rfQanN9o5vD2Epxu9D3JVYStGU9ZdxWjybK13A8bP2ddUWE7sqb46916z",
  "key4": "1HQsQnuBAjrYRz62goDtz2LF992wDWVM3hEzpFCicHshkYp3Y1GJ6RHjudoL6uP1kKe3aFW4kZbCSjbEz381jps",
  "key5": "5uuVw1k8uwsmRJQobnPSHpMgJ83bwQ7yykgV2fZVYfAyXGBpnRKh3RQ312VxwcwTvs75dM3GytchRpzn2mGiUWFf",
  "key6": "3zpQzkCFnNp1544LqSqfVdosgeS3giP2jLZsPVS28swT36sXToXNcv57GrpnUsUNFnD6kYM66KCGx95VcyLbWL1Y",
  "key7": "3Amd2ryXBdcrGTEh7uVFuje2yZDPW34pG7KSFWAHFGUUC8pfwCMvycbq1LgBJouPGvXRk7wVeKGZVVPc1JKzVrZ1",
  "key8": "2JmieeJT2aUAHovynrJYGg2F1k9PYgk5xpqeCeoKAh6HYhQH7Y3RMBawdJD1r1eHXPez3Bj4xsZQVdvVSHRHM6Bs",
  "key9": "AWiLKdt5REmQQ8kMYZauRo2Z1XcNtvtc1JmX6Ap9c7ZeTg7HhNUHQumfhGeEEUnDtVmYgiM6RLgNGJhJH92DWEp",
  "key10": "RjrBMzxVdeqFtVnGuJFgT7dmbUUPvU25Q7Dzz3m7fKdK1Vmre4mnQxg44JM57K5n4avs1nLeLoX6PuSWw4Cn1uk",
  "key11": "2o8YjwwXNpuTHLvdjm57vvzcMLTy6SCYPmJ9u3v6tQmTLXg8iA6AHwMH3ie8BH7cpdYi5ehssvyC9fd7RYmxx8Z2",
  "key12": "2hLuZF2AdqSWJYZaXmKYyKdBFXjnKhSy3qDy8ZbVvavSgzHnH9HdPk2FRrzrySSHhFpF4V3XortxexdxokD4kWJV",
  "key13": "3Lo8u5nt1sahgEK2e9hBTFL5JwwSw4VbHzDJKop5vmSDfTZLqwHdUpRvCn5aD4dT8wpUcAEnGgAA7wr8nwqAkW8j",
  "key14": "5BV2HVFHs5kx2ewpSzKeXwvLWiCg2i8AVfhq32EAJot7GzJraEK8GZQttKsRWDZnASdrVTbcNtxGwxW1VK2MPrpz",
  "key15": "5kydfQRG84bSHek1y3ePaSYpyrokH2Dm8mSF5HpSTr7J86G5bSLGGwPrd7jadRvxdT5L4NLnqrJjTGdd3pEs4uSZ",
  "key16": "45PMH5tFZdEH5YpH9kw5LmqLnttzeh1Q3baFKGxwAiA1kTNyfYrvYfZpSUdGxSNosaqRv91XZeydrBFLH8tSP1hE",
  "key17": "2KR4QypSsyHDr3cik5Q965Eir9o86jQJz1VqgbhRWNumSGSPacL86a2Yfi3Ndk9TnWmH7JuM4yHJrZ44GXJVACaz",
  "key18": "ZPXEkp7VitQcgraX5CZMnBKaqE1eV7CiA3DN3rvJzFqCX6TsmZd2FAqb3TxrKAjGQoNJCiNnWDithCWc7s4hDYk",
  "key19": "zpnrAfhddcoX9oHbeiU9Tjqev6gC3KzQM6Wj4QFZXZcGtWUdMTJvH1QCg4T5yuC3qWoAFK4bovmQ5MtgWr9vhXG",
  "key20": "4oucn3St5HaUEoLwz4tBDbwjES7fDkAHCYHWjCMQCQwPbL3siWNejQD1Y23rK958pcMaKTYFihk1sEiJu5e5FQWm",
  "key21": "f56dXfK8w1b1PZpZ6CavRk9XX64sVTn9hiSTfv3KLba6EiES2LirEk2dm6FFH3mrw64Cv846hGbm5JMSKHWezeU",
  "key22": "2QjPUXp9PLnEWFQkfmndWnv55DdGTkpRgbqdoQD5cP6RYEDoLXcu8gRcwcpWyUwGY9GYQaKRbp5H4E1KcT98DR1j",
  "key23": "4wEZ4Uqs95N8Gq7UZYpYYRVdWmjQcsauakinQqk3spgXJ63YfRiyPiQ5Q8EFiYRCmdBgfwjk7zuAr95aB9ie3KfT",
  "key24": "2NDZyyB4BJTvTokU92iqnNkRZ55b4rgV1JazU42PRSRZB5fHTcLpSq6TKmnhzjkWdTswS36BXfTEyjqf3R7JDHZu",
  "key25": "67gN1LCtswZDs9tz8nkXW62B8oYq8Nc6jAc2i3B8NZkxhJmeVgeyGG8djo6jtdWhEB9smLJMF4k8sEuCpEyWS7Xq",
  "key26": "5vQk1aXv3nxC7Em458xGAkbgBvTqoq8ABvKWL1xVxXMRArpxne2M3zHkHJh7nwJmgenpn2efNKvZMywfsgsqvnjT",
  "key27": "2x4NsF5mHQmAR1VJE4Mfzt5DvFJYSdGiEk68ZUGcHibg2mQa6RvEgRcFAUg7dE6c4L4P7gqemWY1tpW66L5enhaj",
  "key28": "5B5RQNQNHUpCMkXAxYXL9DAnMtRH645RVHDdcywAs96WvFkkE5vExSmmYSKHSL8CGLWZRshDBBbuvLMprYq3VtQL",
  "key29": "5pQtxsuvhHTgGzLm19DTe1rE1SGMZ7GH14utxcR9k1DoLsxc7BtdNn34wJZaMttywY2YxjhRotmk26Ryp95Pzuww",
  "key30": "4wUyL3fhA5eKVhr1mkU5xAPBwnVh5MdMWVnio15fJ5k21N6ULJnPTuryRQWFtManEpQp9tsL1fPAJhpsGWSanXZG",
  "key31": "UAvvBzGmZtwtgB4xu7ZhR7q68PvsKGr2aLBVtQ984xdnQw8E3PD5FCMR1GC3xJzhw7ApEa9VQ978gVE1ahaup7G"
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
