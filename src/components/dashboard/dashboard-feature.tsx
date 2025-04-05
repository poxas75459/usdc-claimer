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
    "m6QzfLpq1WoRivd2W4YrfuCaumyufYEd6PVkfj2BZs4ccRhRsfrJ8PDv6aNpr53Ai7Q4XsmRWgBchk3xAZSbyY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYF4RbJJf4SyiCnmBzXbtwShEcaxcBQSnYeE2VUwQ5AyJRyg1fYSkw6FoUoyi7Jrt8pnoFhWnGdFCwk2k2fJrsU",
  "key1": "1UDH4yRFsDEqC6AXfki3pZ1NuMEAS5DkvauDTLWzoqjPiSrdqK341tynQDuts23NSixpTZY7GhZYUeiNmqvNyLZ",
  "key2": "5FF2mwGFwm5gxzjPdJi5W9BtgtZhSeaPcxhoTuKG5J7W81AaGQEcRuTGq7GrVKModxk3B1J14A7aXhHLZpDKqgyD",
  "key3": "31KdVPAyb8PnbkvHZn1quzsqhtqQJ3jXyrHDmbcrk6np2N9CLmVk53D1e5o9WgBS5iGRtJkTwH69n5gpp1z3hvST",
  "key4": "3cShDbXHSUuuvazytBdqWVjauWXhR4YA2vJE92BLVrfRZMp4ugzNkgKc2WkqbsNuaJfVJiSbjxydAfv9LP2fw6S9",
  "key5": "5oFjtDW7XMrPGRnJyM4z2UgjTVSZdVebjtQGChFs6Hzztmty5UDD3SKbsro8kqRBfcaWNsHLBz7cnGvxmWP3n5nw",
  "key6": "2MrHLC3xVt7iUQYX3jpto9Mz3LV6aBxBfVQMHbiN7Y9gJkdw7Cxdf41gC6QHvreRK42UjmRe39khCu7rXAdS2EXK",
  "key7": "4rQHf8JDaokHdaj2ntbd6iimZPL12D4eceGqfWAazSC2zXgoVUY2jj2C3NgnZ6tymoqXqKbtfZVyYPNSBZQfFFUq",
  "key8": "P1942T29hDFqeDm97ReSAddVE5JFkJ2ajzyD3Qh6Rrnh5MNJDB3trgydfZ3sqAWHFjDK1G3BbduXJDSVuGQkPrQ",
  "key9": "3qnEGxVo75tpLapus8Z8GxuYzjziSdF2vCJfFsycX3TACcRrb2ymVSVgnibQhbZzrxwYS9qjjkuSnjceKjN9ktDJ",
  "key10": "52KE5QsTCZvYUfEz7P7a6C2i87fCuoutwrbnGsD5UU4m39v53Heknm8YuqWsRrox1iMUnPhT72VjLvzpo5hWasUN",
  "key11": "5RXZoFGFS6qazEZhj1Vw6uKFKw46n33vuoMp7h7QPv4voSk4DPxADvur3pjgKR3MFybaqKnWqSy24PaUeVDw6t1X",
  "key12": "3whvwrcVELtj3E4a6ye3DVSyBRt6VcFavydy8yEe3mmWLA5ow8dvdyvrpx21wdSH5j84oQnTi1vEfuSG26HRnup8",
  "key13": "4b9ouEGwD55XeRAM9tPWVwcMcYd463S4fiukY4zLNh7iLJXqqQ8Mk3XHLddmgAeo1aEJKnfd7M9N6259gXt31UYZ",
  "key14": "2WfUbBabdhJXLfGEFSw4CwyMEhBcmahxYfkpuD3AiYufhuWvnDM7Bvw1oMtzQx57os6Veg3sHUYdEjpig4MymKim",
  "key15": "5yrPm5V5jRCqu5QTwVNCTxjqquyi3FCzzeYVb8DNhdXUVYrNCpKWyyxFnA9dx1P645YbcEFkhNwurmBKNEDZusxm",
  "key16": "5tbxZ8iRSZ52tVhyEAC9fHzAUKwkup9MsVcE945zXSCjrqjDh7AKP8rMVbPxr5ZBYAaMZyJAi8PdpxD1LvBmLek8",
  "key17": "4BZ9j244c3uPyWwxMjB8Wvabw8ufiTE4zFGLqEdXas4Mf8P4MBJytc8GQhtQmFuKCNGdCuucU9jhGL8K2jHyVF9e",
  "key18": "2ukjGjAJ9JeFMVAgWzW7tChtaLgdtFMWg8WfCSftndeLsJuvV1VpVZCgXLRYAcrv5E6xAewPYHrUghfk1bPpDgwA",
  "key19": "2MQnq46gjse5AsEzXx1Nw8KJMpUencby9K1eJ3mnLk4qnjsVSrBCAFvAkbpH2zyvGSqTvkM2cgxgev4sBprU5Kxc",
  "key20": "BbzBV1vmBLQeUTRABB66831bsb255ZsXmypBmXnHTkSUwSDiibwVfxsdFSvRgdkkTH1Ctn42fNET6ErAsRLmTAQ",
  "key21": "2f2sEQYT2HhmLKayXqrRwJ2eZLrRDuqzGhJo5HTZ4k3uWV9dqPSoeYfuSDjNmWuJgH8A2EX8sEir4HgMBWmpyXQu",
  "key22": "3pNL8tU3VdnRKZ9wGcLdzHdeCwKJqskdxmuUbfGzxweSuTKGhFY41rXuRYuZG9X6aok7jZ4rZDaXneeKaeuptcVU",
  "key23": "2YLm66kNaYFUEw5UwgmYQanCiAr42ErYHG27RJppq8BFXrH2kskaNdHVjfN2pqV37TzAAjtt6GaUcJebid499xDj",
  "key24": "5iFX39KKKxxrMkjU9aAv1U4pGfE5dY1xjfk4eXv7NNA5e1D3KNh674pdMWw8yc3fpqi1xhaMxvRazgGdB5qMRscH",
  "key25": "23uRRWdgb7fe21v1Kk8bqSH8kn38udpkg4xrGaxE8pmFgKi8iJXAQ95Boe3JuY53HQ2MwZFS4648F8uS1Z2z3rEd",
  "key26": "63atdBM6484R41d2MCgP4jmcncFeLVAHzDPcKE6aLBbfS6DHWrRU3yPf9zdN4pt2Th8mLP8D9yPaW6aq1XHZcR5z",
  "key27": "SyjxF1PooPCYKuJkhVMvqFRtAMGQTtk2bodDJwoua8zKAnGFjWxTxLyiSCb3uaw5aNWdEccTxdoXZb7mr5y16SW",
  "key28": "3Vf7oJLvauQXiEswJGCnJCbRPAL9dcBjC9j8iyZ44C5aCj5zi5c4NbargGoT42e5g5iFSvbEgSK39kCFZrdGz1su",
  "key29": "ycSkTdv5xPzn52GS3mDb8rf3UT4GRccApFbemLhPPrX2ZzPDurpegxSMyDqHxV579tY1Jc8gGgxmuhvtRTTWmhm",
  "key30": "22pGcTPCJfPqhGwvfXW8E7uDSQHQMSZ4k9udPkSAtMLwPARpawjkQJs272VnFjRp4PnReUfWMqvSjRKTH46rVssz",
  "key31": "3gVAUa6gB3D6Jth56rP9JTvNdbivZiohn1qt8Pnp3DNz2SJFy3PS1mayca3ouBdxJ4umLPDuate3bNFvfDUZnBrz",
  "key32": "5Ya9W9N6mm3fbdp5mtwTw6c85bSRWT1o43xzxPvUZYeKwqFnf2qnWaqdqF56pwcFY7avDUSDmVXAivAQS9cqkdZ3",
  "key33": "26VBycQa1QZxuAvFs4z3Ygogz81bGRngRek5n1k1sxuHNe3wGwHYtftD3EU8tALJhapi9oHyGbeLCvUbos5Cmj4f",
  "key34": "3ugxYVuxHTUqJPrehF1vh8SdhRrZM5VrgmQzNu9DytUG7aeSYFrT2ZsZwDNtvmdrGEavoyTJSq3jbe2jyoKpJVjB",
  "key35": "5NTCbNY6xQDABd5Y1YJMieFa6A8EKLa6ptLyCUrvpSrzFtgstdvigGnomMHas5URmvGfMiKFvtq8v4pmtBeRPDMu",
  "key36": "4pvC12S58213kcSR4FXiP82Ekjsy2ZzCASabhonpAzgifQAxHCkS1WTUjyhLHo1pcgPRYbw6beQhEkMNqR7cAt6V",
  "key37": "3trdGUdbiftcW8B3TjFurtANeUfDxbn33HxEsXXUjqXZpMGWz65ihQW1j3jSDXN7mUvP4ygGxdrXPLmFD76Mg2x6",
  "key38": "37ovnd5xicTY49VmJsVXCTkAuToCbq3PcaG7qWRELA16FiWsWbmntXigszCq8Q61zrG63kNQCB98LENcqGMG1Jf7"
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
