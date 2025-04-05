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
    "AyKitaNegzgi2JfjUhzYnSzqDKyiB7FidC8HA79Jp4Jd37a6fDZZ4L4mUnsyQALtywVBgDPfwXe4ZguMn6XFSrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPf6Tekxy5v4P9bxeutigM26rLbHhtF5jhoPUqZYggHCLvD32yqucwPejxUmuEmTasZVA3EJ9a3BALptc1KdDT5",
  "key1": "4bbityFqTxuFmKBYQgxR59o33dbtZFGDe6vpxkLnqpfpjes2Zy128PnTiNF34oLVr7JbTXMJ1MQxRBVnXyNs1q9V",
  "key2": "5a5zFtKWBzY6deLtjNM8UYXTfJDa5p1fa75jd5afs4vabCjRHLUjTWYojM4h9rpX9Hd1EEGLqBuAb8k6UZZvbUXa",
  "key3": "56Nf4coZs86Uw8BjUVKw679RU75QsTwToLxve1SyXGHqodnMUWay6hzqRkhkdjVXGp7CnujyTxe9WyM5GirrQLsU",
  "key4": "2YQ1uLKYGiFUzBKW7P54JU5AM4gqzobyHJdff1XcSFuBsKV8bomLYqWZ9wZh48qQpLZY65jnetXGhk8zEy5Zc6t2",
  "key5": "4iDD9mTF6feqqL1VXLPY3QABhktHXsP853ECKKgDUdsrBvZFAhswsEQn6XFoRpseVtohdaUxH7b9XAGzAA2dopNw",
  "key6": "5kQJsZgFKvTefmUkv5Yp9UzimXqe6TjUxW6td9YQgwuMNVx7TNsKR3mg699Hfu9sD2m56srDFBaKCGyQwTjE5uYG",
  "key7": "55AJ8atv4mXVQgKDBzg7FKLmTpiZi2G7FL27w1YQcyd8vCfdkcujaakTTeSfofuf83X2Noa27xwYkGvP6cYFmhBm",
  "key8": "4ow1nQaLya4hRnJFVqcBt8uxEndJtzF1jzMAxRdftTFD9JeWxced3q7dyHgy3d1LCcyGxoAMDEftRJsTF92cKRy8",
  "key9": "ZByFcNrg8eJzHpSQDua4mE8uCUZk16WerQtibjTpQ75jdTzaY2J663ASLVdvASJp1vMmQm6PfRV8hT8Hvd8jUJv",
  "key10": "5fKMyXuosqhbSBMHoCcT4ThA371vzpo2AN5VEVHppSYUCA8i754bSL9oXVwtjJwdqwRGSrGBuMxiLXZYNXooainH",
  "key11": "45xXNXbVqZqyHAKQeBiGgYZ8EVNGnScEMndyjQUvaELAJxLq1YwguwYcEgVc7oCVb7fg4dwHpEfdXNST3GmToJRq",
  "key12": "51vnD1bJJvbNhjPLuzLBLZBeywm1HDVASYqk2BQDt3rMB2Mw6csEhQBGRL9Uhfjnvb32HT4LjwvTmPzhucNtT3Fc",
  "key13": "4WLgZULxF5PEa9fS65kQ41ZhYF3389AkypM1StV8ZGEEBuUJwCmtA1VAKHURPiYskmE2dQXpaQTQB5yQad2RYzzG",
  "key14": "3VvnAsxHHASVSLsYBuNyViDV89afiSGyQthhMwdun4VaN8MuzVnAkjAtZSHVheXkQoEK9pSnvg1jkx61D8ucoZa1",
  "key15": "2DZQQCq44egcus4W2bqTNZ9257rxK5zj8WMP8tDMSk7ZmctUYQ7BsjUWeYFCueEqojitfuwNXKfxgGExd5E3MVvi",
  "key16": "24ioPj6H1gAP3zEEBqk4zYxADn4tBdxRqvNdBD7CwQVk4spmmvC6TBgw8fC2u4KueQTTyt7jRcxnEmCtSk7zCF21",
  "key17": "GL2FArEaLh3GddFgUmmWDVpXihtrKrzjD4ktQ6LmvNdRssPjkJntVtiiNFc269H43icKxk1aWX8WCNukzHSdjY3",
  "key18": "5de2nMn9kbwK287Q6tGM64z2NmNwbm4Eqm1BnGKAVdfaYkoT1BKBQmjGdk3n65DHs4XYWrZ2YGizfNeJMiPPi5xp",
  "key19": "3d4UD6kwB8ejXwn625TcH1WceXZt4wMXUv189DRv1CDhfPUZa7Cq3KGo4b5fLK9ZZiaHgpPvixKfPNCJH9YPJyv",
  "key20": "2KsAhY2vPDybGbwPm5jQVKVEqTfj1NsqcsA34WHyg7Y9rYKFwkvXa8sExE2bXGeNZgBAV9wzc56F797QiKHiTEAF",
  "key21": "XkQ9nZPWRXo16N1c2tdAF1ykK5eLbhvUwpRT97uwDG2NCgKmQjqr76hG3nBmm4XUxfkTCuV63JsiYh2bUX5bdi3",
  "key22": "4Fm5EwcaAZBVZmx51xUiCxebaGTM8RArNCgnuaU5sHHU8KFE3JWDHMJvJAct586ANBbY4yKxConQ7JcU1fAmc28J",
  "key23": "2tYrqWPHDig93KZCnFiS7fCTTFLYJMNMeT6UjNXmcnyRtNvRHjDbA19icYJ1Q5umKCgMjPDuEHPb7UjAw4vG4PTw",
  "key24": "46nqrjAXgoYdwWGjwJ8KmC81stoJSjwTUwMt7Zj82DJ8zKxCD9zAWx94YSVLhd4xXrnaPC92W3MrryCovjizkhZx",
  "key25": "64EDn6E3araZoHUbC2MFkX3dRyvtG3uK2D82atYS997E8F29ZpFJshKUPmrk3HKDArBYXbruXWjEggQvUJgn9TWG",
  "key26": "29UZzCgRyJesJUWjN7rcav7EXoF81PNNEDMY9mW8juvtoWiuCAB8WErd3yirNatyhkkZxHxybiXj5bFrpiwSg1QM",
  "key27": "2sDLUJAxxg3Q4JCEr3DVUHjWmQLcVc18KydgktDGvxRTbYnSgsYEACWkwoahN27YStyfYAAFzJr3VRyxX4VvR97n",
  "key28": "3iJnNdKmM35Ue6hcr4667fBkMnPh1kfoBjqFCH7FycxFBDMXNu2VgDePwxrtfirDcemEXH187H7JvftEms6PpnUL"
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
