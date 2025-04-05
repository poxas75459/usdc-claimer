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
    "nsBxNrSkY9LRmMKAyWMkJoxS9X3t1Ex6arUK8n4sZgpk9hs1Kjebso6aDSTF3P3vFyPd7RFMuFrdpYhkPxLc4nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55e4tQVLLDg8RTRTqSQLcW19QVQRVH5L5ZmNNLsLhAyRHrEiUptrEWZs5e5zQvtrr3ZU4WLxjWHrdHBxK6VYSV67",
  "key1": "3MBkeAQnDkNi2HAv6As175ZMDQEhxwfav1xjt187EkZ3BtmummsGM9oSjbc1JsPj1hK2rJMjoXa3obscjT6ectJ3",
  "key2": "3X8fBgKP1JhgqiF1pNctKZMLhCSsQcCqMFN2rhKe8gX1qkXBSWaukbN1VuzWLaQrCCPAVVt6MERzLqcbaXZbbbDW",
  "key3": "5fx74thDP6DbjTp5uHXZNsGa2uTGdgwqk1bgCptqKKZ3Zd7isYjZsvqdgFmkYJo2cRc4ch4441kkqYCSaZ3aC2Q3",
  "key4": "2cEnSWtmzNhGLSziExxFD3LJPhm6jvvE4y1SUVcB48Ja5h9hu9ZZWqG1TGYgdYNgeLs5DYB2bchZnTM3Ttr8JE7m",
  "key5": "3m1C1DNXg73pvfuXCTEQXLhZRsNHGm3UuqEQwsXBwXDjshEuuJwpbLUySCLAHsS1wmb6t6t1RxzwYxq4Hw8Wcgq8",
  "key6": "5LEeFJssA7XyYZw6sEcH65txJo1aJQrE2LkqsqA4WJXnhc9Q57kwqANg9EqPaWuUhP5uqAYDrvHbgJgWLVD3EqxP",
  "key7": "55qgQkcV53Aj1F3XRuwxw2abVtKzN8kQ3ZFif5DSys69sLsE3PWYmysiv3ZcwSi9aZm9nGzG1ZrvM1XHn3jX76f7",
  "key8": "AQ7XDkDVDKEzUaJST2gP5MNWYSE3fNwj23hL4LekXnwSxwWy6qSc1LcrGS2jdHJ1KvJkLzvp9Ff3y12zhS3F5Kb",
  "key9": "2gFAnWDhEvZmKmvfRi7VDz7WuxMZWDXvpzWPDHe2Es96RVyPF28Pxafhwf9gKvUkcEmYkuSXGR38PfRvG1UCFSBq",
  "key10": "4Zzut5fHbaDaUu5NSfTD2oJpKJcHs8onmLsAi8XeMYYYLDQD81Fpmu7RDXsHZRseRPgUQuwhpcydWTYXDFpz5jFz",
  "key11": "3Be6L9ByU41Cxkmsq8yMtJqKARv7Xx76cT6b2gKcJTtRHrtB9RNJtGrxjDUMpuGo2ZcqnU87NHPeZsLe7hDJxKLc",
  "key12": "4dFNojgw214HyU69rVLe7FU6eum7CwZrExKMEANnJ5d9wyRkBnMFFt6LbPDKqn25LjVE9qWki2ACQxqyR4TX2HZg",
  "key13": "21SJebdLJCDQ9vaBtnhSc9z89X1SzQBA3RNmdq73VxFg8thr7Rtu9RHMyXaF9fxGdZLqaQwY1g96kwyi2VefNago",
  "key14": "4kbw99u68kmAp4UeTbEpVbjaXCz8zML4FjTEN6h21PJb5VcR97rxV9qC9THDKJBu6XNLB5Pjzg9bnBLYk4AmZtEs",
  "key15": "5euRNfFAv2xJC9WehzTDqDKXYQ45Liyr4KejkjfudsmwgDfbahdrRsztM6rZ4titekRVTvY8TDb18QAZXm1QL8uj",
  "key16": "2myJKFiwSXwvyaortK9qmPEXoEgmHZjmyS9p8HfeikBPJUp69JN9duhVNnYFZCxPnMUK1RrkK54VRfL5oURcf5fS",
  "key17": "4NmGbRtdHgXnMqh98FhaKTk3dCkrR4umHVHYDtnpTMhsck9gmMGjrvvaCrATUijCCAhgcDnabGNGntwcQ2N71frE",
  "key18": "4C3mBobJBkN4es8XJV1BBFXVEqH1Crr3rj1hg1x9A1HYJS75tUED31QWbJ1uh8f228ZwfNGguEN1cabK7cRYZJZP",
  "key19": "2ufG1aTkyyitnU1P6vumwBWwG16jAhsmy3t2emXq44critodS4QfrvxvRRKtxrzP87iFwXamJwcz3arU8RKRk3V9",
  "key20": "4xQRoTiHmQdRJd6jwxHvRh6f2aytMCChuuX5VzR7zpnVFR1eH91AYzW4r6hT7Nk8DxQf4z6pVRDBdoA6zkAhBFg7",
  "key21": "4ZSqR3Mo2EmxLDmGGR499P9SNMTnsJMgy533GWgDkcQGuufTFqPsojfYEu3eTrxbzM3uhB3wXWJyt3AjPH58WPwM",
  "key22": "4gAdNbg829ZLfCUWx1c9MrRWL6XEZUiCsozR4X9HKRES6fBUheYErm4sT4GUiFtgsevdAWmkhNN6yqQrTnsmthrf",
  "key23": "5X5pgAZHhV6Da8PbhmaKiLJfpoheK7cJ7NUUfE5nwCE1jhrQXRtFJr6k8useJ93vY6QTS5yaogd8A9SfPVKTycru",
  "key24": "5iFQoYXBMFkGfNCVZ8KLLfbdS6uPYuiKAea53wPczfqLUpuAQ4cXKLNBjFYcgvXNHywMC7xKySFjBXqHV5EfLyN5",
  "key25": "2KYLU3VScpLsb96haPqAj4x4cnTXBU4PsrULTntFx45zvqHRoP5SpUNJxEbhDeArC4XUporxBsqCxFi6fmKWuaF4",
  "key26": "64zZj4JApN9oCNTDiEj2GJjsDirRBLe46kTJEabUw8MQYHFJQ1Ms2s8L3uVmJ2K7QFvaUwbUegzEubmVZm9JJMBM",
  "key27": "5YPoSKgw6kfFsYAgphzh9NNsNPkTkbkf9nPKcgotWiGdCU59Jv4ij3KYCNaGGEeQYm1vrgwTkzvGaFdDexxV2HnQ"
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
