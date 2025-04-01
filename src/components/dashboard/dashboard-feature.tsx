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
    "4VogmGay9xV9QpZDo5EqAvPFfcb1xsor3a2HZzD1BTZFJ6ehs5S3GBB5KzCRsw8gsKJurJUCmzocfBEdYZyXooHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YeTD2cUbteWdzSHMG9LFDuwhgtsxjreeFMrUxewXuKGnDGEw6BEuZVGdTSUeEwaxH1PT3gxhoDuCY5tfpQVNf9A",
  "key1": "5m3MGahsCfZZop2s8TVAA2XDL93YP1YUQsPVH9yrerSGze4gvMTtMhg15PXj8dYL1PjMEmitjAz6NfAaZLgyMSEi",
  "key2": "4tPeT4BmXN3f7a8jweTX85zeHah8kuGURaGtGhXphWTF15oEmFFw9yG6heoDboKShLZX4gmK8jSwytSmzmAZcbFk",
  "key3": "4YDDpNisNP4NVRRJYTUt8VtjSY8VzNTdS4PEc869aBK5n36FFf24nXCH9WKkeFpL5RnptNsmGZ4RWfd3akeyNUKz",
  "key4": "3FWUE7t8p2YeVSTbw75bc88mmUSojmu6fYeV3gxxiHkQbbr78i3uuMAm9HMR8yxVLKa9TWrfjUsHYZ2r1Auz5PmF",
  "key5": "4gbMjUmTvTj8HJufBuDZwPX8ZZ2kAcL7HfzFdmr2cPz85PSysLoFZpzez5T6npfHazcsZssiGJ8DEE89ZD2SLAUH",
  "key6": "3dQ5SDA1fvPxNiFw5ATZ36DxVKQ66DCUn1Mfksw4YDjG5JiDHSmUDnJ6WtizE5FRgxSGvpL6mYFCqR8WYjNH9oqX",
  "key7": "21jkvA79sJzJiwDci49RXBtWkH1Q22XGMpQ2puodCuunhWeYfux2gP1gYc9CTijkRoUbcEvBg9LPUCQQnsS4NJsm",
  "key8": "2EWPhvVHgbUMuNicGB5H9QxfsC9RuVSdtQwNg8DSjkEXhcBHYk7ZKrrKd7DtNCx221uB4gfRCTrjk3TVyxuYyqaA",
  "key9": "mruNR1ZT6SBtdhSiqqeGZcrJaEEMyEjS35evSURrvWY15ADN7hh8FWML5vyiZV9pZEs6VsuGxSGtyxgZy4WicMr",
  "key10": "5mTZo7xeqHE9B3RhbJaJQ4oaQUB7dj5sZRNqJzB8jGK2AKncmzKr4PzmNCazMkSiH9Cv97p4EmBDoR4Hq4jz6rH7",
  "key11": "3yYg6tQwu1s2PKXQUZKcXUfDtXnrpQsyAxAMdeTBCwpDqGQ8SKs84n5fK3DzgP6cmXuhuCyfcVoDEJLMS775cdiZ",
  "key12": "2jNN9yozhkcqdstmzsAVTwCBUrVFgKiNwjAJoXbUfagb4b6ewq6TAGDzW6EdRY6EPjiUmfYGuQJWkx93rEbpmqML",
  "key13": "3oBn8njPnykf2X2ZEQz829HyJL1qrw698s3Hfd2USnU7X2HTc9uMMftQ11VQRn13yrsM63wM5Y2p87Wi6sfqVN4i",
  "key14": "4wgk1HWTdp6c1HsbvquCPZyATycj48QEpV1Ya3tpvST2m8sSmdhcDnnQbKYeSMrQbh5eV4cavsV29MRE9pUnXkoQ",
  "key15": "2tnpZgT6paWZMBG2Dh2hVEnPSM3wFs84eNP3imXNqyNFXgod7CbBQRSkV4mLxQzAns8rsd5oTFeogwWAHkePNQVW",
  "key16": "5nFLikUJCqmtydVDLvPHZHUZ8cXEuD2jaCQeSRLSNqiqaCW66kZbsLWEenXpacW1S9NPxbjA3ZhkYRpQRDYgERqU",
  "key17": "2mM2qoPZFXEz2KGkHLcBE4Mjm9ckVmXG78VJce4vDx4NTcqzT6XDW3GPxT2hL9DrcA7zKK9SxBLdcVazSgxYXKea",
  "key18": "5MSTkYvbkTU2uh1KwUzujKcacCLZjefmNNUc8EXkFmedGDWwQtHLUqyKmYKF4SKSQiVZUCExHUqcwZjzbVs3q8ky",
  "key19": "5fy1rbKKCrTUgf7K2PMovipjgyLZYMjDmkwtq3SKJV7NAjrSWVZhPkn7NMQ7VzFFUB4zM4kh5EcquCPB6Sextsi7",
  "key20": "48qnnfxfY6LXNmhPnXAMxZPF4LP9z14SFTquMXSCiY4xzKmh8gcu3JcSGU6TaQoUCreMXxX5UEPLNPH7dnW2GT6",
  "key21": "4JxqaggdjSXwdwNPWyKmuEif3sRPBnqLWkUANg9GKW3WJyA9gy4oo99xjNt376VYJA3wnCsPQnLB9cxt7po3BZZZ",
  "key22": "2M2og3gbEXMc1eTeYnrt8Mm4qG78BuFiuGwEsCzwrNrujSAYKwrJm1byGCKRWuTEPph6wGQfiwHxALHj4VkGcADL",
  "key23": "5toGiXr5pPAxKuhu6P9K8Q6H6trH3Ni1o4sgWBaufGXX1uAr6LB6kXhysBjcmd42iZNn4FPBquE7khuyUPjf2Qgu",
  "key24": "4SK9VgVtxk44koB9ougrvHehaQ1jfWDVhfQfQX1X5tw35vKuAdHM75yzYnrnhmb9MW4u38mEDcRfN2KmkwqcPSiJ",
  "key25": "2eTKyb8R8EfSH8DnL3ZxVm36tDQfeHVLvN9BSDyNVng4odNtxDqzM4eF6pNKVKy1ZrmzqQ81QiTngfaKGhbr9bAG",
  "key26": "457JVE9LGYCD6cASbBv95G6iuGWeXALYmgUEK8SqwfCyEajvMEWAv8v5xaaTjiKfCuJnrV7H9UXZR3ZDRsdawqom",
  "key27": "5UoJHvLSmra29cTYCZUgvL81N7GHNZmVoBoMoZFSbga5Xr7LCmozQk8ckAsvgssJXTej53xfDF8CRQYS4fDq2EVW",
  "key28": "G1TNk8yFPQ6SFToFcvBsnK8aXzy9r9sm7rykq7n63vVhGnA2XqBETatPWsowqbdEzQdnQGQbDapZph3Bs6ayQvA",
  "key29": "3BbtXpKLmx6QavUWnU7PurmkuBzKak6D8bJViQ6FAoXYpyvtTqDLo8qS1qn1M5o438GbzyQhGAzy1iTyfwfLyUnp",
  "key30": "4yDJY6rfcF23Stuh9Qs6kEiWsP1B1RW7L7NHFx6EbK4SnRn7oTpbhodUYjJirBv89576NoX3nMmCMGm9ySLeRQU4",
  "key31": "5tEZMC8DvKq6pnHCasiZ2ppUkqJ1n8VCQQKzsJqKK39RJBU3BZ1FbLfXQgJrFrgzWxiuAojCRSv77uXiBBCP6nrp",
  "key32": "5ikWy2xmgwbZLcFX4L7wRBdLNoQFtE45TtmKSjMMnydyE2zjzAjZUZxX4fSAvaWhCoXDSJsocHNspoCz4WTvfpUk",
  "key33": "iPm8bpd9VHiMi6T8aV8qANsaFGYEYGDuWxRZimxSaPLJnhL6bcNZaRwfbwrJfBERxcaMxrruTEyVfkneTiiG1SD",
  "key34": "2ya4peA6euLHXxqFbdTogoTyJfx7xi3X2EpNu3jZrhwQkR8VwY2aLKretCfkmm5kpXnNDmycwxsM3WibUA2EjLmK",
  "key35": "4HYAdjPn6X4ABeSB87bd1T2RTWLYZRPRyF4XTtq9bSp7jodQsRDY3a6ZnhxBh7tBJ425LKmciTPSJKj1FyTAcyPk",
  "key36": "2pJsoxjfpjvgietRmWgviUWgy3KmCjVWegHAVetY7ZnujUw9yJAv4ddUF26iFxEHt6HbZssZibPJ9xBqTfK57SLf",
  "key37": "3ZNywd52MGoWoAHZcCZ989VaXWA7ukDAwh8n7TKEUoasUVjqqWpbYQo97dCAsNE8kDpEMrzP7m7tMLcNoKqfapM1",
  "key38": "3TfQrZqykQ7E6vXXprXr38pQTH19aMDKHm39qzmsxRJ2KtRqquR1XM4vAeTmwSFhb2VjqH2jvZxZrMkterMTVXyK",
  "key39": "2Z1VDAwPvH3dbCwBZzsXvuaePi7SqwV7HfbJXHKvqSxS1g5ZTVC5uihfvYBGfAMPeYWTkzprM7hytqXALcmxy5oj",
  "key40": "DxRUewUh8N2eZvMmpi8bSPbVmptep3hZASk6NXt9pGwFtrEpV3Dke9LDp6LcptMoQ32eZKBXNtWh7UBsHYf4mKZ",
  "key41": "Z4iJFxGvJwSqDW73TCuDADfBUgKf44x8uKkAk9rGbuZwFMowUEWWDTKyuDvQCYgrJB6rina65nG7JQ6J7NvYuBf",
  "key42": "5VNiViDhcJDNDZVjsVdEaFbn1hNEbU5yFcaPmwK75aVtreunjityYPh92criSQp9hmaGuHKThoJBzA7AThEGuWN6",
  "key43": "3oUZmb45FHAexbXDYkA82hfe1EWTctr7C986BvPrzKFp2a9d6gY2WyaFyLfke2VLGxG51gDkbC1cuHiASVyZxjoH",
  "key44": "5NR31PV5Dy1u7RPmRknphBffgxX9fzXgoZFMuzPapbrxcCBQXCRTWPsY2QxerP5DmoLiAyD8dEfb6KFwWHGEy3zu",
  "key45": "32mGLgMEfBBw8GyzMXASXU5iZghyLxWzYnKJFgFjge2W98F8GkTS9GU11i3bAP5hun9vNvdmgGrzvkDZanRjNEHJ",
  "key46": "2RVxg3hPQ7QDoVKKYM2SrTrwyqzwUg42JExCEwFJ5Dk5tCnVje4wQeF2txxQxDqdcnAUoX2Madgx4NqfWJkYJ9Ld"
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
