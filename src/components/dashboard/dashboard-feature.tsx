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
    "5dBqyzSp5Ew1xoxjWJMqarbndisSpomAjmDmKPZBT4oskKPDkTAPq1rz2GYSgudPsEkpyUNuDUKwGBZ3hCpbwzG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pw9Jm7osNfxmYhe3jzS4hFd6osxaBhiRRW9GPDEW2qF16QzwJcLJNrMvt8xcXUMMqucWDMyZ1vGZbXzxAK3gLGP",
  "key1": "4pz9u84vnqYpq4dcYxf9zJGERKWtqmZ2yahBL86T2iMab9sdCqsYdrRDfppz3E3ejBdo8J3SF6xp4tgtZ9YsFYe4",
  "key2": "knvDWRxyRoy1BmhK5M3fe8fhpNyKcYvR9Si1vcHVAiDwztMgG7ieJcUua5yTPfDG9kv1UPcF93tS319rrDWQ9Rz",
  "key3": "43Jhem3Lz8sDxzeksCt9iDtAibw2KehJCLNiwwHhe2B2QvCQK4X3zAoK95SMEbdJffYNPpRAHJEdm6yApeZmGDQQ",
  "key4": "35tJpVGMqhJnSqbNEZ58TmCMEP6YFHNG91ugmnWKFQtZ4um5a3RUZQksExe1yVaqiZsVeHWHBitPFjto8S4iDcUY",
  "key5": "6CP5ZHGJh4WjD1yHfKqTY1kHhubKxCbKtzh994ZGmgcCAorRQRoS5yajGYsgh7QMQKJ4ARsdhviLgkmhznp9cYD",
  "key6": "5hqgW19zCbyU9m4zPhc8u88uvNaaQWBxWrmgNTMSAy7xFPX9DeZGJ8MtjXKcbZeTT5NypUSWZP7H9XTZATXJACGd",
  "key7": "eswonikrKxrtbGQ2vmzrVRTraxvDadZ5AVhVpb4RyDWXPpCKtvjnC4xcvdrYqvxzBzVmVXsPLuvyQDTvmtAGnut",
  "key8": "3JmZaYQr8CtEhFXRB3dBbUuuSmMkmfhy9FzGFVGy2rY2jGuPrAdCmYLqtfP1eSR4tUVsb5tMLoSNoXMe2FcJu4JQ",
  "key9": "21bx5LEJcQWzwKw25KcxvHnwG2z1EMQMs4QjBG9c3GHPvwu5PfpNUKepVzrgXteLEVPr1HwotjMnWpjApmZbpn3U",
  "key10": "5P2BCih4x2pBRv7FNif9rNnmdNnuG5x6LUiw78aGCDKwEcpZwVH55qe3gnfhJMP7PshjDLJQ6bm423jjsWKDRw2S",
  "key11": "25dUy9d5qLwfWQmqTeTZiZMrppSH6vZesYSrs2ziRGjJqmcq4yaxwCEm1KV1ZVqC3LreQG8wRaiH8bwHGJWuiy3G",
  "key12": "36XXDyicwFiEy8aqPko72J2DkCFvs3uNsXDkVqP7YUjvvyMsduQnRsDFENHDG3erade6ztPdKpknvqJoaAbUzESs",
  "key13": "5wxgvgvtgZUY2AMA5UwzomZ2yixdwMpUMyzDjyy23PbttupV745isuvB5kdS4spuRhgrSjcZ8ezzHbMFzbHuwWv9",
  "key14": "24yhn4rgTzf7cqCszb4UR49ACezSRySzdovi19vu1emdXKSJ287aj73m2ZkJcnRXe1mskMJNeeHNqjjmhTTGaKa4",
  "key15": "66YZQHLdiUABBxw2yPNa5AdFFUZdycb2YGDZTnLGjZVvrBTaeUaLMqTgwcdkQcSKcmhGrNaiccPETaEtxfsty6E2",
  "key16": "5QJUW32xiEdtmtUCvLrgDSvHHpTFmEq9z1x8i8qJU4GBcYszNpah1cocdYSp3UMmip1nTejmirT25D1MGLy8WU38",
  "key17": "3iGjV9jqyrxbEmgdLnWYC6rt5iK8okxpHhgmm3WcjSkrkerwTguq3G2173BrUAEPAmsMhVQh4NZd8qZNmYSsAySq",
  "key18": "2FtoEnoJ8LorUjDqCLmyLsP9nWKq4SUjnwweftFe54G8pw8BiXSPzTtPihEBZQxmhSvZMTsPzA4WkyMnkmyTKxM7",
  "key19": "31v3uT9LfjVrqgxnyji9oQRXFZJmWJjGacTfc8eiMfVqmywCExkivBYbZApC8kXUUWLYwDMdSSHYmUzLwCgPm4qk",
  "key20": "5GcceLw7N26CxkdQ5unmZF1hmn55G2yB4eLdZonjaEkzq2wcLJ5fXvPBnRyAWyrBkSyRpwxYx4QJ2F3XgWFkybFS",
  "key21": "3BJq89VDWk7oDt1jzNdrKFiY2Nn6bpzZGrepmvWqAV2R4Znx3sngLNbiQ5vCzwXaktp5arfMaKncXjcGe8fEMMot",
  "key22": "2N6obNHbyQX8F3EE5dkCh3UovyY7ZXoNKAFSqUsdMNuWcmArjgqdSAAtezxfsggkE2kFo3RF4qKW5YqsQbTN5P4f",
  "key23": "5kQ9Yq7tPjKajPvN4KCdN3hzsyvfh96ZLed76XgusptuKV2BQejw6BUCC1pgA6EReggTCqj81ERTbFC5wTqM3s4E",
  "key24": "dsSyjviZCZdYXPdW1HT6nLsVrGoYic9dQQ7kbZ9iQMRuhVuf8TKZyDLUKAcPajhmXwFhKFpXZMtB7RuFxZ3MAas",
  "key25": "5a276TqwdQ2bnLuJ1FJwVPJoiC9VoqPoKhRgC9swBJqMHQeMekvnWyAf8BJKZNMZg3Hro6CzCiG2BLzUg6nZGn1Y",
  "key26": "5jnP3KVp2pHMwpN2GYnpQEHCNNGXAqzmSrGVKYbe2aVRYkPPpLr35z7D8UujHioid6xECDkRJvHUAcBUcohee18p",
  "key27": "sFgPX5Gd8xmQyb2imEThhEqWfKkLRG3aRvrgNG1b7qHrG6dCcGgtV8E8sGamUL9XhBWrvR4g8Yr2aMeUCQ4GJ8Z",
  "key28": "58desLkYWa1GVYgQojLxqmg77JqBEBTSPu7nowRqV1jwUYw7h7tEhpttqKpKkzQwSegkgUSMU39RqbE73c4vb47j",
  "key29": "Mis4xWdLXGMwHotqpDpw6nnVFiqfKsMNTHeUYgTFABxvbKzUdUrxw76Ld7VNthVjaeHSy55kgH5pM3nHw11BT2J",
  "key30": "5wHDeNtXyoAHhQibAAswxKq9Dq13B1hQrkv2aaHZN3PwgSukJ5yXAuZT7D5r6gGcQzHaJEDYCR3GFU5ozPkymCJH",
  "key31": "3c6SmXbuJ3hGsywMxuvMLTL7gm8hN9HPCqHmF6XpG9JAmGGQWb7UDoArHvcK88F79TR9SkqAzGz1uWbgmX8DWpsg",
  "key32": "YHyECPhNpYGMnKHD1BdBG9WcLWKuVKzgF5gZHRL7SuhZiBPK8Yri7ZToth4rbwysZfL3AUoU6p8Mk1UvGFscrdW",
  "key33": "2aGK2Vp9myyWgNDNiHjEHj4y4qEYbYqr3kUHVu1Vuv51G4ByzAWDiy2atbar8TXc3bSrxhcASZjquDCBeKU5jJsH",
  "key34": "48CoGVNXDauuENhM77XjdrvDSLEwdAoUmXYTzEnq5EXzyfwUXgCsPfgoDnjcE4NExRtuQWDKhFf2hnRnWJE8PP9z"
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
