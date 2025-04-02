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
    "4PcYYj6PQh1RjtnkfDKpqWqbPKH55qvRHevrjcLPLPiFaw1yffv2qqKoxHDWddPgq18TrARu5k4oL5TcJAE5X2nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwHjBbf8NfaY24zyCsyNLfhBM8nFVnNodf2JWPectPxVtQo1CTzjybNt8tfsFvRHY8vvnEtjdpU1GQ5Gn2BxT5x",
  "key1": "5ugb45bEoDxybsWDtm7jtforSQxcnid9b6wmvxJoShQKxnGE62EHRUDKajAcdw4uR7vaZrumfFWKTHi4HrWYHvL6",
  "key2": "4X6kQXzTBm7RV1YF4NniirW4hqAtPfNM8HDoQakZXSFuGtN2XEFzQJMsHfz3N2pwSMBDe7zFyPHQi7DMxagZyJ3m",
  "key3": "Td6BMtAdtLC8JZY85KkmiFwdiAyRCxmC9oSad9tRFfinkbg92p4GsR8RzvQC3gtDE7RuRMvwwcNA7UTJyUfj1ii",
  "key4": "2ri8cLfLpFHF9WD8qkxfyeYiY6TLkfCvr93zvyHP32LgPSqRFSr9dG5uzcNS6aQvXmdLKdy2YPorw1mWvTRGqRm5",
  "key5": "3kWirak5DHFHJunymX5mpGLWJiWz6EXnCbzms8wL8HryPMkqPYgWEz383uV2qvH9WRwwd9tV9pVAea5q8F9wfttm",
  "key6": "4Ux4rqwhBSqYTw7ZZeNQkoijYEFxLP2iiDDcC1oUTzaqNtkig8Mg2tghyMtiGWamNjENNY3LqqknrP4bq6owzRGG",
  "key7": "347uGyMMiiYpD4W79jQKFzMZLt6SU3Nuyokvbd99RJ5CWY5d27jfbyGq71MwghCK67q9N62yZX5BDKVMURYeudPL",
  "key8": "3VFQecgPAXhpQfrnuegWp7cUhFij1qpYyAdppqSch2oS9rTZ2jCiv5DtYvGcyJbkwcsNX8dvC6u12s3PXTNR5nKJ",
  "key9": "3UbUJAtX3E3yLSyN81FtFfczSPkx1JBoW2ugZyeix7M2KZcyq6KbQpuruvXFrPSJNAMS45ASVRPtRHfzKmDT9Ei2",
  "key10": "2bCmaprhnsw2UuDBGqP3o1pxZ7zCaLA7ar3LL7L7sKJXZLpZU56aSztUiPcA33HT5kfR5Kk5QyRzXYM1qudTadFR",
  "key11": "2TFHbnNrzkqu5WkXnvdWvAZs2XRocGEsUfFQnCHrizn8DWyc4yqe5aezmQhVCp6DWHNBsuaKJcrcsq2CfRQueZcV",
  "key12": "2yDF6ivFgYv2j7X4vaWyS8zKWLY6SWNHU42cxyLmrQhSu2RVHVuKraXSBqqZ7rJb3heAcrxRGbrX4m3Eqw7Z82z8",
  "key13": "5kw7qK5Nv1SsAYnS9Jgnj1gEZX4HfGQ96hdWZrn2ZHUScYCFpb2DWaXWY9zTqjvSWydSiGk6mFk5ZzKcBfx5b4mV",
  "key14": "2w7RaLiEv9x7AX3khjokgzyNeFVoJ7iTSjqEpbsGZSrPKWQ8ZyRyGDSVdmPcB43HzEa2c1ML9CfeEpS6pjvXfjxP",
  "key15": "4tTsC6WkCR1NPXxnz2C3A1M434FZkTs9n3wM5jHxL86ddoRTCuhB8292QWKS8HDp4x66PwPem6LZ5zdkUg2gxefJ",
  "key16": "3LHUhWn8qAi7wEPxDz57TnBq5PAHEx5CA25ppou7HBDVnaJt3Rh1FwUn18JKShT7U1XERKFj14ZQkrhXaod7VrJw",
  "key17": "3DqMAkJoPC9QXP6RH3Zx48rn6ZQmwjRaS5EXYDH1mjTzyFQk3YDbFAx1QA7m8wHw3GdbtmnYPR47NCN69bxfphRU",
  "key18": "65TdkwL3t9K1Ncvud2DF5n3xrHY8ccfU7yH5Ep8wqAR6SKnrsESHE1dJLzGzYtLNmqULTqQH3tSnH8YweuSHHRKT",
  "key19": "3gnRpcs7YeAy2Ssn3waHND3fM55ai9UMCi7ZbJm8fsTtWiQvrDWrVsJiATuNe7eZJA9dYPVVdVzhzdB12G673RYF",
  "key20": "4Nkfv4FSPV64FZiiry8EYj3SPpNdgv3j8Aqx7mBkuXyjvky2izAR4VRN8U679Vr6ZQ1j76Z1bFPX5T1vazR8Ljpj",
  "key21": "5Cxq9zo735XZ2KfWuUo6KUQs6pp26LsYx4B8VVW8hyfHyr324yRWuUGBU9rw5oA2MhdMJEhCLyWc3Jt4DwF5BEwu",
  "key22": "2vZrsTiLibMUjZbMS5kRf2reDSgKWnMfp3MKdAk4FNeYXdmbzaqcm7cy2pKZZTbxSq5j7vahcgTLm1u4Vtj71Cyx",
  "key23": "2PfemwHmirc1oSJEo2E1S2e6CZnpZSqPMyScqeiEKwy8NuaX4xfrH9qBhVND3bs8xkLnycAh6SMqeVnRumdUeKaq",
  "key24": "XttjEb2qmh9uvGPEWBcJtGnZMhdZjRgWXc7nZqSVEFQ1pEV8gqoRdECCsmkT6rAMozV3G58K5rkc6mz7aWTuyAA",
  "key25": "LcippzqfY6dgi7KoMNMRTNcGjbBgVh3vwLuXrwXbEi9uxysWuhsRSoFWZ64ksmHidMVuniTxeqqsyKC8BuuN6ds",
  "key26": "3Eon51YQZNuUBfDJYV7vt7BLBkd6vALGVxGBnaUKqhgmpJywyF5B9iyryQbJ6C7j3kGD8AEdTL483VVR7rYCYKgy",
  "key27": "4hMkTRJUHgukJajgoHjDcViH3LjwHzbF7bSxRRWk1SMTv4TNR628JEHfkirn41n2tFQTmXNQqfxFxnhQ1HQmU5Ky",
  "key28": "3HiyCBxYwAT2YyAcT1Hxm1uCpG2UWWUVp5ENVAmBag8uBvvs7E3qP7PtWbkfWYxB5nP5S3PRSfoGUR9yExSVHKyz",
  "key29": "43xGifz63PtPcUt5yDJKyptyXRhYd8jbB1RPmyTcTqKiQ31aLqkdPuQauEo3w74goxm2Lk5QdYtvMh8GziF86V8J",
  "key30": "hQWabJ1Xmqydua3xe1uxHXVbFv4DyNRLNV8SGrCT2a3h3zCB5W7nMjxiKfuf5QWdmuCPs1jM9oEhXabVdmciagt",
  "key31": "MooShihdWkzRBcnc7GjJiMsaCw3RJTZrDbLD2enWZnPgbZUzKh7x7HgABcrm8wzpSqPwEvLmgB2FDGhZkWSFBTH",
  "key32": "4Fjx8o33SggSMkzj34KyCPdzEaKWY8zj8dXJ93uMJzCRqBYG9NsSs4KgBgQsTsz6rr2EydxWKh1ksgBdo6cPC5yd",
  "key33": "4npGAAzbt5xdSQ2MV7P84eQJyUw57jtShWDqaWvZg5fbNShYbDx4oUtWdK3kVke6LMgvSotmfHHyoiLHJX6kKxT5",
  "key34": "2tREX1hoaw6GAoMoF528hKhEEgfpRnjVwEtExpt6QMNifr8dT1PqrCiR7G9kCNKb35H72Tsmx8VgybTYdb5pG5XE",
  "key35": "5Pw9hChh7BuFcFRXjtNgDPR5s5zshYhidt7W28BS6bW3nEfVjhjxYhyU8op7k3okY35cuFLSEqFgfjR8TSKXD7yr",
  "key36": "52ndehHxcwNkzLAMZC3w6tWYTjfD9MgmbSkYJHQuHjbtyA6GuJc7romE6jpYBPhuEbwMiQQ1WK3MaWFdokqMgDnZ",
  "key37": "3eMmzw4qbn1rTpRK7u1NQ5vo5zCi8raashM8CGsiikNbFNDUfcuFcjKnMcEyrfTfspukHAEo952Z53pKbaEXnE6m",
  "key38": "BdHUV6GW4ewXbH8kvhys9CGAjCf51TniRJFmsz9k1jhM9Lo2ar1pSmxrV5zX1di3vfjciiE7xJVkTEDP69jDPho",
  "key39": "5LsNwAdbAMtcW7533YvkUg8Dt7RdQJzT21zpPgSXREnx2R7wpv66gznybvdQkE6ww8kATKAygyYumVowTZ2QVrje",
  "key40": "3EbRBhudP99DCzmoeqy5stsNGBoiYdBV5Vp3Cuf5zhUC6uKyA4hmQF1ZpvimvJ6UEJ3npBs5jQkc7EdkAamzv3i4",
  "key41": "5F9LvQDsrEqswNqQaQtDS5hxNifLx8YhukjnvtNinyRb6vPDPnmQ5pizKjxkq74ebXb9QYLDLGhbxXDdHgt9YuGi",
  "key42": "4RBPqHCAreDPaoNhb62p81kXn1TBqeucRbxrmEBPPaBkPtRUN32nxX8p4NepnLgDdikgS1ay4fBdNCT1Ldy9EFbC",
  "key43": "32KwPVNJM5Umue8b7zdq7bjmwfEXgTLGBp7boCLuJ5Q6BFVFtjH5h29BW4a69yK6s56ZEYvgwq98d5chU8Vd6fzW",
  "key44": "2BAK4CrqtGzUqo4ryCZbU8i98bLDWFCBaZm6joNxDj78rC4LS2ZUDcKXPzk21JduXUxo638JETkmFj3CEY3784Ts",
  "key45": "4ohtHVrHt7YNM7USyN1rpUMy3T2hAfzehRBR3g2hTzVEQJjPoUf7JJk9SFFpWHkZsjZ6n9E9oisQHenBshNdFTn4",
  "key46": "1PM6F14GxmJxcjzHiv9dhRABAvTsetREgq4DfBGtXfi87sfpeAZGvuKhUvNRuGYGGd1vEReGH376jgpoP4QqbP3",
  "key47": "4Ecpu3JiEwk63i6zXwQCBTg1wTLHehnqcTdMfn2j8zbqGYA1caJZ9GD7qFLQuygXCBg7GfN3noqni2t3CYSu76f"
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
