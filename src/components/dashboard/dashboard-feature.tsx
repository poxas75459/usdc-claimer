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
    "52uf34FkaQRx4FJQUXSEdRAAe4GGVbzYq9TgfbE6my8RR3XganAwKCUQdbEMxwKB8SUr8RAbvr6UYCPdrKY22nZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Uq9edkSR3EVQkaB2ESwazuU8suR1zfY5ADSkcZMMqKBMxhZKYQqMMcEm1ZkHu1aDPXfXVsFnp8Kw6WisBHkzC5",
  "key1": "2RsGZJPUNctRj462ASZGwQAqiiiMjGQEgVkpkZ5wmZz6HPG9wjsmoMvGL57oBnwteBHPvXVFobMmM6H7fcq5uj27",
  "key2": "5DXBQSpmwU3CxoHsDE21CyDu6WDT3qSEbjiQBYQNJ7bLuga7zK8YPN6E5qMyj2ekDq6ntLLQmXgnHm7nXRmMGyAn",
  "key3": "MgfsQzD8bEqLs95Kpy6b3AEWxwqYv22E5r1FkKBdoq8R887XpigE5drXbCChDq1o42NK1PksVsTTmt3RskETu9u",
  "key4": "4s35BtQtgXcEoaTmrBckyX7ysc6YFGGz2p7BRq5ubDh6DpAbQrRVQvvMzS3ihzC69Y86q29gA5gDboConoYxmXqi",
  "key5": "4sdErGeuRkvNX7i384PeWeWM3rxdN2z33xHZHPqChEpoj2uNWXDkdrHHrTWgdFGHLi7VVAvQQ8uZVfg1J5kSDayp",
  "key6": "pFyioXR2jQN8uNdmdiH9gtvDXjjj3js7HYHTGAXMtG1TJ55MVcf87coo1Qii6wfQHTymYMK8ckyZ3hSJp7gkEnR",
  "key7": "3z6GVRohh9wVcC36VBeg19wAfyms4JE2wGizsF7fa7TJu6vY6wxQY4tYQspMuMUiE4HYrzCsfST5PYFKqFCagJqG",
  "key8": "nF8Zfo1yfSFjoD1maLQjTzdaJJ2b9PpTMjXXH8Fn4aDhsqcZ46r2y1Fwc5cBfBxPNKXDg1YN72u7frDpgTkJALe",
  "key9": "2kr8eg8oBdZKzAWdJGwNreBZoKVdd1YSAAyXdUpax23sVpqupyZnp9RxQPKVX3QQ8SeDHuE7CfFzn4yAqK46zmNi",
  "key10": "5UgnHNaFR99UEbB3Kc7g2ec98faFzHr39JDUvi2skwJNqPdzYkWwN4wePFYqMHeZXvCU584YJhxr2LBRBf78rzPK",
  "key11": "n4AhABPvaCmfNnX2KQVDbRCXSA1Cuf9d2RDweXXDojaNfovcGtChPBqGvanXxjXPmEvmCFx97eyBS6kdiKbvxYQ",
  "key12": "9wjZJYVAgYeov8LhjcGBgCuqFkASGYH5NGrzyPsyY22TUAj8koRvU3McvjVGA5HhcrG8ts4P6z1CGoUnE4hqaKV",
  "key13": "3Fe2w2vkpEBJoug1xA7AajEhaYXncCoZKzR8nwmByGnSpwNAxF68NThgVeN5yeZ6Dq5LGDUJCni5iFMsMJAFyVMV",
  "key14": "2e7smNsHz39vy8sWXz9KDrMkByW4sHDuQ9PXKrrmgfeCep14Z5op4vsacFycGbxXSU9C3nM9YtUUH6ZrCYD6mnQB",
  "key15": "3YKs7rcQNpmc2PpWZ6yHwDUTrtcHUTTcoRgTbTjznSR75JEALW3vdkH17Grrf294e5zKuRnLnVZYku3dXsnt8xQg",
  "key16": "2gkFBqUiBjUocY8NpzQRe5hDKPqLTjfYWEUG4JU4bi6qG7gY9eferW1SbNhqknE2B3rcF9MT5zY9QPiF7CvuZm3n",
  "key17": "5eYgSxgHS5TM2HvfdN8EpvCYsYb3HvgQcsage1sVXmUzDqBqcEDugCQvQKLQL2j7Dk3KYFR7mLQdidvLZQBvzstE",
  "key18": "4H2kqzrCZomWu1XLWSh7Rr6hGhxmAw38i4DD86QDiix4JmZbyXmWpfAD9CaLkysZFRzAvtZ8erJuPramcMSjy62y",
  "key19": "4zQZErrhusXmAfBZEMGJnBuPv6BS6t7aBxxwQ1ycavoBM8ZDhUmGsz65nU9fEAbGBGYw5F5w5diNK9nX82Uqmz9u",
  "key20": "3nCgmhbYQ5kT7Nnu5iSatE5ZjZmnT89W4VRQeb4JHg5rjoY4SWQ9Rkiw9RnbUHP6iraKbaaS4F2yjJvBdyMNnBHD",
  "key21": "3zU2AydeLGDW3XXei7wpNHGfaWXqbPKrSpfvf6ojii4zuRuewb62nsZQfaR7MGQDBEUg2gbKGiGBNdHYdFeyN9ZY",
  "key22": "5FuctV8Ly6QkcRtWzZ8mTCn79UZZp7Uy5KidEZYSiJWY1kP4iYJoPZ6pbbLWdcsBMXHiDYd4QPX7aEZKJC3oeFKY",
  "key23": "2osAPj5NwWkwLHcePDPeXWrwErbwfff7ZTqKGtxctcAXxzMA9JfFFEAZmgqnYFCyth2qnAHi7BzJzV8pcB68PDVP",
  "key24": "3YVHc8L1TQSFuTzN4RqVrBLZJXSSMZYaxmEs231YKaEBqPGxyMXof8UURYS6hXhj7dBJhLs5Hjm2vSic11UoNGko",
  "key25": "54P715XaKkSbE2QaBU1QDRckDGMLYkZcRX7dgq8r6Jn3NXQmNb6JExWFZGjKqJHskmzC4YLHMt2wP91qfp6GvPGx",
  "key26": "3ncJTpZgkn8LPMRJKZwTxm783HzTECgAPqc82RzgEi5FFMnk41XEs8MzqYxeTB8j8CfEVsr7VAPhaFhKyhG3sV7k",
  "key27": "3nAYtrnNcL1DEWq6Y2CSAq4M9dv3Tx8JNyg4WwVKLiifGzhhvHV5Y28TRrubtbgvev7ABvHsuEDVXCePeSfk16Pn",
  "key28": "2gYWKdFYD1F4wd56bkH7AxpHJurzbpnhdcYdszriYvrNSRk5UjkfMku6CeoQA3mg1DhMVKkeJhU3RsXSoi4heNrU",
  "key29": "2iR8Yf7hqKRsDmvwDe3LAsX22q4tHhJTf7nuHwuhai5krB8ngoRgxAGzrNRTPUj3nmon8AF74HeF2FD4QyDG3yKF",
  "key30": "4akSRwGU3MSHhr7CCQWrYRb24Mss51bnUa1KYPpiM6rmo8ft2z87DKPbhhw3g6gJufydXHrfhSmcBKCogT9cg419",
  "key31": "3nmSomHQVqdgWLRqPYSPoo21qL1x6ctARCrLoxutiHEX7oTB1RxdVvngC53KEfrvXEdGjxcnDbBTLVxVzUUxNquR",
  "key32": "vS9zb1fMHMVTPyorqA2RjmiuWjuoEM93EFZ83C7xBoyMyNUR5jqDyFxUEx694TavnoDBD7GUFmiJQuVRYw59fCY",
  "key33": "4oNk8jNykcoB3nRXzMUtqBxKSpQ6rwc5TJMwAU4eEviZtjdDmDVBP6a9T5u3e6eHXsUj1KbH5yGXiBMrznXyTZkb",
  "key34": "4w3936EJF5zmD58V1Duiv3jMzP7kNaZU54A5woMfL1UHf4zQvcP1tJV2j4P1nSSQQCw4fDjsyiKywAp2bjDcx5u6",
  "key35": "5rWyujsVmbG72dsDe8LGY33z1YeDP6aDH93bT6LtZ8LRvMuwqYhYX9ykhybjggLgCHTsLcMcA8eKBZWyhe4nbTod",
  "key36": "2LGfsCX6AjAmENi989BcFDnpsbuGJNJLxZ8LPuc54um6FoHJGunZgMT4Jo8kgLHD1GWdXB57j3RqJEc8zJ9979dN",
  "key37": "3GgH5x4rJX41GFSQ46C8KYmhCF9PoymqrMhsMY6xb8GFzYbxu3p7PKpQtwyGhac2NJ5AbNVHyqnbcJs8fJ4nryi4",
  "key38": "2GXV3ekFbnL9bBqQqABiad8JUQM4zVLx1skG2AaZ7Damk3SKGD3tUeDVwia44RnkX38fpd1QHiP4GdJbkRx6doJq",
  "key39": "3YnE5d3LaEwyL4Pz2tuU2UnKgEeh5bqr7KbjzYCY4aKzNiyT7MVwBKuRe8GiKwk3yVjsbACRGewipHAjdLQ1ksDS",
  "key40": "cb7r1HAS9cMpJWCCWm9ekuhwt4R7UcqtZVj48AFg5M8hSG8dCkLAZ7T8s21T1bguSU3Ei9o8gVrGnT3xahVUos8",
  "key41": "4guLM6uo4mSkmWqpCKWg13wqphcttHfzvbsyGN6BzSBCD2t78zP27VpjgbBFzoyMvcGuNHn8vFXqGpXrvMfBp8QR"
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
