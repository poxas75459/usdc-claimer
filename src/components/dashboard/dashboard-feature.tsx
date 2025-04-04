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
    "4maef6ogKwf9KGd2LjxbppqrBjqxpCpjyRrLtDcafTFngR9hC1GjPUiq7YqsC1ndvHkFhtG5sBddh8krYkx1yZZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLAEeQ3BKmNZo5nErTyC3Wp2aJnip8yNEXwcJxHwkGND88bVNT2SY51p8fMZxKHkm2KDABMKNTpufoNuQYRV7Ld",
  "key1": "66zgMY795r5ZAXsZhWibJKR5veC8WGCSfuzYiZhAsydvtLpXCJ1WUHs5PXqFb8AnJqhD4jMfSFx3eLT87YXNtGLJ",
  "key2": "5aQe5NJFjyhtMo9dPriQELaZgbyjZC8osnds51KXPxqd562SxcKiU1s4BAiA7h3FzSAtwR4oK48jTzom6MDA5cvN",
  "key3": "5QeftnhC2G91YGzka9zXXFJ8kd5VQ3V363avR9sNFuWT2rRiqvrqThfUSvkAowuTqWognvXfBU5YvSnBDYqg4BB2",
  "key4": "3uGRy8cPjf6s8SWBCuKVEcZHYKsNbdyJuZfkRUepKQTDQKg8Q77GLd9nUQvbMLfuvk5UvYNK51Bvo8z1rwPwdjMh",
  "key5": "4Q7Ng2VCRKrtDUaG6tkLCpXhEiyUAChBNrVT5QuJg2FFnq9Mgxz3v7H2fStZnh4SGheTNFpug7EjUZUwaQLWCi6R",
  "key6": "2gCwPUN1usAVjjymDUNbkwzPNhSHjC4V8WB4zxnFXUBr4gANCti2ZyRxqSE569wtMMo9XHA2cZaSQEXawvSTKa4k",
  "key7": "45ophpBt5haHMrYcihYbG5tDQRoZWGi4d5wyK44qVHwNMr8DfFCrYsNr3Fm4B9MUfscoGEA296wcFnBZ6eZgphwb",
  "key8": "2KByeuEr714abF72aTvGE24V7PHwESqXxzjeYaEBW21FsdLLomwEgk74x8fJc9bgZiUYpT2hZTE3t6AvhW18Sp5x",
  "key9": "5XwG7vLgMEEw7qfxeNy9LphLdvgcEUJDZvVMUkxASnaNTZZyMSAmntKG7xqgSfizb1Cu3tSrs7SaVrsS2anUW2JW",
  "key10": "3bihkoV9DKiQ1jsNvxpd8AChwdeDyBMQHsxb3aQqN2mUE6LTRJqTDoYHesdd692Y5FhKii19Y8mUK3Wz5PGKSXHT",
  "key11": "2BCCKoi8tvWfkMW2BnFekf3RBVRHhvH4zAKyyfrhMK25DhxoqpmKQGXmq7cs7pwwMdty6yVfqiH45UzvAkXqCMS",
  "key12": "2oafGAcx6MfvKbvq26esEWyFVvNvCHJVXZMo5DY4FJrwmD7n8SkwFavpfvB41xAu17x46SBeiVBmKJo1eeApcU76",
  "key13": "46uLHLdUFiM7QvK95FzNXKjM9Q2B8zVoXSNdkz4bXGx1HN8aaAH76a7h8mPTdgTUkuG6gF46CEbYfwWM5qczqQfb",
  "key14": "5kZgzexrwHkGm4ZSWibdCTgwNH9yP4213HFEgjote62y7VxUscX9qjd2c1VyFgLgUxZGDjQvF9hWhyXfJQDbpaVA",
  "key15": "47aL7NobP82aRpgQLJmNKKjecLS5brxzEDWw1vJAGNySCUFj3xEdXdx74gNLEdGTJk4DCYFfDKzHpVzg9j8bu1Mu",
  "key16": "3kf4Tz7mVeTzac39Vcx52cYyXP1L1XV8LEKtMCLEKwb6B4TvVjSMZmiXZME5MeuGcynaed5Trq3KSrBbYRuBVcPZ",
  "key17": "r1ZuQrUYj8K93VbKog97fnEi1FsCAUzYGKKZCJTE8QgP55zytRw3WroJ4JQodQv4xkBhSBZXUZXRyNPDf62GnMR",
  "key18": "417XVStFeVzb4ugby2AWwxnja4N4mWVsfV2WP8aPsbRs87nXveg6djazbr3Xi5ygBRL4ELX8HCfyqLsPngp2H1Ly",
  "key19": "4zzqPWQ1fRh5N9jgm73iDs71QRSGNcRHvc5hu4QDMwiJ4zqg9TBMe3psYygi23Ftvzq7oKSp4e9btVyQWnnfsYKf",
  "key20": "52txpxoHXsiABBnZqa5WP7oMnZ9TfuWfvqyMvF8iExvUShDiQ6eRiLAcHAyjbVuj44Rm7Kw4C75BR8szn3oPa32h",
  "key21": "3GK16sDMgBeTekaVJiDpjnX5WfGp9oX5rqDBHMWwNcVdZV6G3sExeQyR6apyWETcRc52inEDXu1MEX9uuLzsdgGF",
  "key22": "KB3hRzPKWCK2tNYKkzujCBjYkrwNdQk3WRiXnV8Wtg4UYJnLgncWeEC5zhXRZmWMjrJRhMNtLDTEAsEZxDmW8uq",
  "key23": "3T7ipxHEMFrg7PbdzCBauEuU3xQT27kzmwYqiBaYUk6ovEypUBHYfrksPzcCUzLXNXrviNAuJ74JK4NttjbrPvZQ",
  "key24": "4efRbNMNzMy6qHEGab6uJrtXGuhAphE5JJGPa4D2in54WQ75BgmJFR6SAdUYFjHW56YrYVX1s7yTuo5eYWjrN8Cd",
  "key25": "3FgN4eyKytZFzJDVTbyeUeL76ygoJznQtVxPfbd7BBdsergkaboVsmBy8WTX4NYP14nmat7vvZu6osk8FtTboBQR",
  "key26": "2ejKk7vyYAbUVzqtNNHXvTfrigbWQZRQQgnseEMyRrFZJv1APx2DqmRcBhWwJwm29G3ma9hN59V3o5NjCQfL5fcU",
  "key27": "xpH6PBSsbCv7nPJUwjwTJQbkybkJ6E1rGW1nDyB3m4T1XggyYJeiP6u233K2yfGFy1uKKDEwDFzZ9Dudgixxi4V",
  "key28": "49BNkynWe76BmCAyzorszvf4oqEdyPHDDGzZAqotZGkQt3Gf9LtBY69p6chqPFbVnW9CxMt4XdHM4HYtzayJvpQN",
  "key29": "2o37GKF1EtGAgGUPEDsJjQPPsQuNyr3hL8eFL57VsxqoUFsLoxJPKMk5vcANjKsQ1cGo9xCWx6BBmKt4he2CJPfv",
  "key30": "2ps7WSVPxSM2xbncKWo7JWzjZRmZMN64jmEzo22LRCjCXf8Dc5CpEsqggbFcvudrraeaPMfqhi4k3p7msm6psCSz",
  "key31": "5DzdmboRWvipUpLikirAMGbaTcAMuXuewcJGSkmpwy7MiSasqZ1ceixJKhqF1JnDNXvgHbYURD9StoD9DB3zqzWt",
  "key32": "5rZBpr6zD27BuZL4iHTZ48bmNTNqMztYpBw6Gh6Tet2nUD2zkFwQkJc1c1dPMRNZvf63ZKdov5PBi41dPE1B8yVu",
  "key33": "F5TSCDBM6cHJARJhYnGGpgP3TfkwYwoz2qokNiEkpmRwxUsfjHpLPVHZVq5n15BrW6r8snYypPdLMKuwdYdc1YT",
  "key34": "3nW1EGEtFrjkP9GjZZPqsrBV6P6ZBaLxern8NcHSDUsz37EZbiXqfsscBcQC2Pbk78EkQY92iHiGC2Du5Sec1cGD",
  "key35": "2fLDn21h2R6SpQ7gVi1Fo3pRDLK4VoLypT4JF97EdyuxkBszKCx9GuiGqpLBSzcCrqHTie2LLUwGF9v4yewTXVE2",
  "key36": "3V7Bz75TFE6WuaVHS7jxGLprQ8nsiCZhAZeXbVrpJnvEKNGWq16uNYdvvZ1cewH3z3NbkK7AUG7QoR5zBX9K2ghv",
  "key37": "2jHCGAoShtEgqfBPMwdDWzKAoTVDrNFoH3aoBKwzGgv4QdP6uf66N12Uy3k9pVyPioCwdK4sYyiizxuX22KZMTN",
  "key38": "8zYtWDdFYJUdKuoq8iJmBbdzj6yfvKdnj74ZytExAw4bW9kVxqPsGT3WZnozx9p8nansGySCjBotxLWRSL5pMRE",
  "key39": "2AApV5MxFF1EV4L6KoMyHTzyEyZuVgMMTf3CWstXYhsgZZdC35bH8mxtHpftwQvktrrTD6KXVNjXYQo7xgHkQcUG",
  "key40": "2KGSRAYRBQqjSrp2E45s8YoTBZrqm1yXq4hEV6waUY4TbtHhZWuQeqrzfFuSB5zMTFX6A8fv6Z8Fm3ELMmDwA1zd",
  "key41": "546P9XDDTDdaWQzZHSDeaBuw66pBg8C6sZqDEBJNk3TMWXB3fx9DSwcjhkozTgErDvModYaPieLsC4EbETXXcxsu",
  "key42": "4jujRAmMDQFwH4esv6n3stQNHvgaToBJLZGu5ahLdk1KeuUtCFpANERrzAEJ8xtKJuzDFEH2CpcCkNsojG8K8Qne",
  "key43": "jBhj5w5N7HYZ8hsr17NJk9jjBDCQGN61A5bruRRUxqfB2anfPZfz87QNYrbVoBH15y1HKNSA2L2JbEAxyD2PxLK",
  "key44": "3Vqqk8nCjy2DDC2ccejHQ9dfwrdJifCZtUcXZYa3aqqygcNxWt9eUHcAPQPwB53vJ6q2dfdoD2dv88QYX7bqAwy5",
  "key45": "7vTKsiP1b7JWC6ybu2u41NQRNTEUcBaUkm2CEMuXwrhfnVkpU89xrPsQ7d1VhdAmiDxtvyqHQMqWE1QF6rPuMhL"
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
