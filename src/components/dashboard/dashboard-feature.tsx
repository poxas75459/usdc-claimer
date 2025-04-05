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
    "4WebdHnK56xWStNwhU3LWMJuskfePQDZv1CkaUV81oHUQaLmS74kkLVcy1M9xpMsVniePiZrK6En8qucFmPB8MMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NEucYFbn3Zv25yejUQ1b6gni7Ek3xr2hLdhzR1PfXyKJ5n2FBYJVrVRCpYMrbVqvDEAkn2qDyhMixe6fyZMvjM",
  "key1": "GQwvYzMJSWt9LkQs9Wi1HUyfasi9fwRhW81W3Fa5F7KBcciekvrS5gnz5a27q75qtDdGGYKwWe5ZzKnvCQeTMS8",
  "key2": "25v6v21Df5GvjDz7U8qb1aj95wzZrDYxaP2TTmktd29beoNu1Ra36Ucm3HUiiQ33SNKBNqAPF1vAeTucdUncEfrg",
  "key3": "qUwYSSHie5Lzh9wrzqJsprc76EnVRwQeqYAx3WzMhd565fAx2KZDDFMVmbqa9xoz8nUsQnp3ZsmGAmCd6XiQpNU",
  "key4": "3iZyo1QhBbnrufxEn5qupUTVgq4uARzLq8n35f9D3ncn73Zqd5DYwNz8A7AHFZGm9dT7yesPZtvRtLKWwRjmSTrd",
  "key5": "239556PDvTKcTMGBUW4cJ3VHBirmRuNgpUAS9dhU7e4VMbdyPh94kTchok9bLwWdurfv7Yp3GNEFSjSx6BqySowA",
  "key6": "4pGR4jzGEtXFQEPufpGgzxUUCY7itNzGP75J3okdmZxGpQr1XkbYfGaPeAPRCvkRpTtFmu1VsNw1Qb571asbUAAR",
  "key7": "3oJWmpM3zorTUxi6VTGWiPqxoH4qEUXpcgVUg3F33Uu5PrJxdggwE1XZhk89SRCkz9LWBFjxpQhav9PMom1qaDyk",
  "key8": "2no6J6XjAMFTBnkAmLzmgS24oaZAwZo4fYRKn3oR5TZB6nfAJTNb5Nxyw4bdP4mARzUaR7x3c9sksVntqECgeQGX",
  "key9": "5pJXgqPNt7BNcVDkqbytb9VLTV4onywaAvthDVbeJHdL8a3X5UMnD6AhamP4ABDzozhNrKtwJt913DU5gW1hvDDn",
  "key10": "YBB7FzPaPbFpygaQwgVq4ExaNj6tyijifiihYwrBpH3sjzCz9YoQvqLZP6Mbuqm4khVViroi4AQFjNzqaQdjtcs",
  "key11": "4ftnrmkpug9WLWfaT18yMmGtvbrxR96HZ4HHqWZnbY5bJJZdaXzu9U1bx1nh3pYKiMRi1cr6ncdjHPSshnmvjqvS",
  "key12": "45XVBX5Xe7x5djCuRX1fQNdX4s2m8m83ocEb5ZRyW5W7s1osSf8STaY3DMAQvyHBpvddHLFhKpCfvpJeTExpUPYW",
  "key13": "5AnNQUjn2VRn4CS28rTnzPaD94GhpHBSfXLDipkRb1d7YttT6TB8JCJzLHBMN4cevr7i4YRqtSWu9HAM7fsJyTgi",
  "key14": "FHaAPY7M3nnxMoZ2YQgFQgdKdM1eznFHE1n8Yz3PY1Mg2HFSEX2oCQ4sJj8Ji2pX3g5mFTVEkZmZ3YnmcXEAiFq",
  "key15": "2NAhnqVHMQvKF4ybmkAjnkxrxbX22yFYpDjLmXX12CaG5scMNHWeZu9eHiDhsrMdDZbyPKrJgTuGfDkVWnoAXJkj",
  "key16": "4dAjYsoKSx8MKY7e4pcu9nosoVPXeqjmMfrcsj6iCvCzGiSi8K63gaTSVRst14yYY6tKpeTwHdhkDvaLUTyxmYqJ",
  "key17": "4HrMgPZ8q6cGXamoqNCKpUGPPieAP6z2nQL28LaXXdH9wprNumQvRSDKtz2ezShvwt7FD9EFuckjaAfnSPjDGq3h",
  "key18": "5SuotNLDFKbtJFDUAPsaKX2kMCcZJ3xtnKD1emAa5jAPqdTabn2Y5rhF5CtCJsokenFTt5o2QsrPdyyD4VXXjun8",
  "key19": "2vFa28sqCFX3rynrJYS2Te7yqqtvzaH34euPJ3pxpbajBGHALkC9VC1CaJRbyRWQ67UzDpxSNorjVwYthxDXXhAc",
  "key20": "WiYkhZeMYJ1huo25bs4AUTZv4gvK7DXDB6xBNhHRXh9dztzjQoo2HhHoqHzkLBNhWgVVc2ggh9spn3EyU1xidq9",
  "key21": "YMvEzxThswKTVXZrZmr9KJS8rfPhHWu9WjxArkq2NniinxkEtFRewGiwFnEMqqk56BGqYeMvQzGYF6H3grbecij",
  "key22": "2GNTtuU9ayz3gxddMXXpfBJmsctJGgQCZv3FBW6LSUNrxspgAQdyEXmpwUT1hjJxRwFyNdXXA6UeKoquZW3XCan",
  "key23": "4YzLu1hR1C1A93pSe79jdorxX5y2AUJRa7RpjR9G2YCrsQZRjAvxhmwvzv5ixsG7EovGQivx7qobjmHT2MdYXm64",
  "key24": "2nqL2g6BZMLH78p2SyWv81MRdx4Z2BSwBdHvLjj26TvagTxnRun3jQNJxkBTjPhRHQHeC2mTBu81TTh928uqnDm4",
  "key25": "FXb57eGsaYtZwdBX7jWZJ61cfP7Fxzeqy13FNV5jga3mKxcUKgaA2hzhPXgujWArHWvQNa2ato1zitm9UY6QW4X",
  "key26": "4gtu8HkYatzqMSQ488c15FW2qDvo3XK3pEMZgrwBRwcGn9DpHVa3FmRfjMNxZewFptHtr3ZtGQ5NUSzbCKycCTxq",
  "key27": "6435BBW7K8ZdDf1h2JkbRcX8MCwZBTcui2hiCoiLqt3o7HrkJB4DQxnKFEwX85jGPYFZm432esURVxCTSH7a9Y1M",
  "key28": "3RyJy3xSyCce2QtdwFnYN9LnckZdpfkXZUtqS5btVUn19Fmx2sfzGdptkEn9UTncWCrFGYvGmdLqUZy5EetiDcbE",
  "key29": "2b1gxAF7x6S6jPnAd2o1KsKfytLf5TC12EM81LHdQPfPAGvg9EK2GrWqJ2FNvwMqP21BVMQfMbVNo8GEQr4LJZsP",
  "key30": "hvCZwz4CrNdmjsbUVqfBKZaFCcDMmQPRtrEB4L85dybxGYqn6YotDRa5Rnspnueupget9AFuH768KV1RmgAR5LV",
  "key31": "4Ka7r3B4wRUztRpxUPwKE9GUbbJXXbTAeCVs9wKLPytqkLbRF8f5t6fsdHg8bRzKqpnAjoNCrAa2J2Jm4eJi9X4N",
  "key32": "2C7KePUt4bwspbHSLLGLvKKUAAhwYxjoUX4hrehHoBumCNjwtZZJtifrPS1LCU8z1S1bDpN98oxpY6Z5bKrhfw6X",
  "key33": "4vMsjSAgqBX5ewVuZYFDcnJTbGBP5LBamevnfF25ArHTawSDXE3xv5CKNJwESfWkruUE78Nwc8SWwEUpDSAJMYLM",
  "key34": "3vH8Skmj1E6eeMpp8y1jEvRwDpoWuDsmKbxpomtoo665P5pQBxjYghLL92yzZ4KgBvHoz554cHKsZXRjyGc35tkD",
  "key35": "4DRNP2yxNziv72MvjLey47H52RhD61pWrkyjEB61PYJwzuRPsRpDxGtdUhXocwCAUFAkPYLxgEoupc53FzR58KhZ"
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
