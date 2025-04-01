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
    "39Lj4uR6p6TfKcH2nTVoJk3BdU7TKNxdKAYPVEHZ5kqnkKAt9L7YfZV4EKD6VacdiqH8558CRV86kPbcpFtkFqG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbcGBdgxcwfm3rvVSADdK1hF5XdpMfYzhUuZ38SkA8GBgQLBhtNeXx9i4oGGUKQRz28qNoXpyXU6mJmE9nwjjzr",
  "key1": "3qCtsDx78dXNAvBdkm1ZXS7zNEfdm36jqoL3cFGCo8JVhc9Q7rxgpRg6VSNaiKwByvXEWhnhuVJBJM8JWYnhK8qL",
  "key2": "nYXgrmoP3oZg5MSkBoTQB2X9X4bUFgUQzmB1H9KwmCNPhXtZzRijixUEJQ5GwNPuR2BHHQpFsbh5cRjtCr6r8cE",
  "key3": "3L53JzAF7HPkP9nNPxGFtxmBYLa6B2ZHD3HNB4YdK6uj3AugeE36Yj9qNpYi3d73ZEW3RKGTeFEDbDA6wm7NUKJr",
  "key4": "2nu52VQY2Fn4K3iCPMPtE2vVh86M3BasGVUZc5mDmj5Wbz45R4jejzryBPj2DgtQHmB9jFdr8brRjKyVEjqmXUeR",
  "key5": "4mzZNJ1FoNQ5zwHHpQNSvB52TUuVJ8Ns6EQr8AjDRA9m3AmaNjYqyHHD7C2ZBTBdbsYSpT6E4ejA97gPzoKkKt7K",
  "key6": "3YJkEK9FYXTZdyMBVsLe9jszWRfgY2zNi3DpcEZVDWkkEuio4Sx9Fnjz24E5asLnuVsxvwDXDTF5v2XNpw24uKj4",
  "key7": "5gXQSAyYMqfStrANuNXBisUnxzQt7DPUfhJs6ZKBGMcFjGDcUuZTQvvMBLzPzHvRUhdVnLPpMgvfzNTHYgikkLcx",
  "key8": "kj5axV82NFxnpoHmX4MMGac3bX7DQVNbYdCPw1unfokPZqSsmMACSeVVUdXzhBB1St5mH1ZwS8X2BpaphJxf7T2",
  "key9": "2L6oCkeEbTkFQVj3xuk8UNAh1U86KqxCz3Rd5u6F4GosVqfpYJBQpUnAJRrw7JhCJ1yNaweGxCfdpgqEmvKx6RKu",
  "key10": "3VeXkCs5Q7biDLNEErt5GgpJqMC1qY6m2uDK7gnDDE9sZ5FPbW8J5qPK9749XMd7CCVqBH6oFo4i9Vs6yXWfZ1qW",
  "key11": "3Sfrk8sov7UeJjgNXbSctC77qGByTV63oESQwXoS6rU3bnJNDxPHC2EqhdabfyjFk3G9YqQdec4w2gftLBaEeM5j",
  "key12": "4kv9PHff3QMN16T8XfHTWwuu3ow5umamCFUGg1MTkoNMkvegFnwPFo2QQuo27T5gAn8BtiVnqjpcPobo63Gart3e",
  "key13": "1pztPQyXXL9vEwKxK7opGEtgd5Ch3XUe8z4ZiAfNN3Bb579b4Mc9qPoijzDQ7CS6Z1NgCnGsn6pXQQCxiL9NjD4",
  "key14": "3ctACuDyUG1wtAfWnXp1a4rHciRY821yNDij9goLy3eSJ936kdN7Utu6Yqux3UHSSaeBLXYuSoACQLngPakEEKMR",
  "key15": "2J3UWPytrfAMPLRKN3gMubng2Et6m2JC5VRwEHC3ywPL3zjD5CBAhkLC7xsXzyePSNToy7aTnKbpVRwXcf4Hr2Fn",
  "key16": "38iDrUf3cszy87i926wDhmJuyGqYL9p6ux8magfbfHVcg8Y96EtTLV4dTZRgYbTdPEayDALsL4khLBHyzj9nSPQU",
  "key17": "3AuGRBkPcL54iRzy82HB31eXY9jTJAGdKZg6qaVi2QFchp7ABzBUXSHRgLr89V12mTUmUVzsfdCPFmtFDGY8W3ji",
  "key18": "5XBHgeUCkugurVhsB73AmoVjfPmz48rpB2kGjFc7uSREm51Jpo5JPobiuXza8ccCaPcFEfNkqVUQ4gtAKabGm1bU",
  "key19": "4KXqh9Mca6eE4JHUqZLF4LuJVKkaNtuPSvpUGENVrAaLsUzemQyX2B93nonzMKgiCxtXki6HfwaJ3yuDXrtZ1n4d",
  "key20": "WhZnEiBxoM3bjjcNrD96sMLx3cDdysS35KhEPsji8KE2kLXQZAQtA8ifygJGZSufFBhFsdJcEs9NAijjyd3RByp",
  "key21": "55PMp1Es5bQPbw1qPBwiqWyN6UAsM3uLyCYkvEgWoGTaYnypygfayEqLsH7nUH9aJ1RwhJr3QbHmFTnLmbxHtWFb",
  "key22": "Ko5KoS2spkFkhvYvn1v2j7hPQKSMCrpwVBUR5SXUHiJz9r8Lx2M11uaPWwpEziKuiHfRQzLUw1d9QsLunbTrzk7",
  "key23": "5KAZMjpo6merqddbXuRb97bsukxBiQPnBsP6Sfon8xqzSYDfvfHvk2xmiCx3fkb5GC9vrR3AsKSGyBENie8m4df1",
  "key24": "5PpC2xdo1xXfS5VCytrsSAXEjYnrV9FAY9NUdm7iJ1PkR4o8sDGk9accoRFtYAkHJyXSM9Jz8GNxYEHvLxhLvJQJ",
  "key25": "3Y1WsoAKoAuixXxrgCUZTbQvy7N6N87dMkL1KuLtf4QtMXSEGBtraaq6eDiQuzoE3jVxYWsg8rrRRtPHhrQyBiKU",
  "key26": "egi6Hfc42BjBRaYHgJZqGJ2ehGkKeucKJWnNxqqntXD5HKo3rv9THJXiSxHRsSNeyW6hnSNpUkFNo4ToMcQphVC",
  "key27": "124C2eqQooPKeSSNWFqt66mWjgBpSqs4BMTw7XjxrHs3s9t6RpMrHKuqDVbX91Px41ZovxdFKp2zHXAY8X8hVtMz",
  "key28": "bwFi1XjRD6AVURRfh1szdGU1PTNmmMfWUWfnqZvNovPLhUVVs6ySU8KLwPo2HTU1ic7NmByEMAMZS4T8e89YLxv",
  "key29": "Sn7KdfHfpLCNc4rUPujW413C6dMEypgP4VuNNtoT3XHdaPYFqjEHmU4B1yrtVbhKHcs94maZMYmyMr9W5xqhcfz",
  "key30": "46A15YVWLns9cczpqvXvxwP1cex9X8skGcRhHnukY85yGNQLDnoPpgbz6uVuFEQSAAwqUKmB3Ca9kcyLy5fPtzta",
  "key31": "3XxwCXduvbamzSNhmSHhRWWkdkTfZ5Kbtk6W5ZiJQ3mxNxZ2fvr1ynGD72cXQUXmNz5QLyQF6zc6Uej3ZD6PPxvP",
  "key32": "5Kxhrifb86w36i68T3sjn5hdGXik58NSaXXwkd42PAoeJSds2ymidqZo6GzuuJkPixw4BMF9ZbvW6CE2av2rATjv",
  "key33": "3aR1BXQNCAgG58PHV13AfFfPKPecyVgL5uTvKg6U4To7DU8SSEQTMhDMNWm51dtMGVaHCxmu4VQYVakXesTJEW3j",
  "key34": "5dsjLsbSvUeDkUuPALjzA9UxeEPBKDLPS6HadW6FTrSmbP5cMupUdd1KJEgNJUW2qDBqdMELFPKsKJSrMJNfEVzv",
  "key35": "3sNWHFqSjJu8uoYhmccRuaXWNfvozGWzmtdsdp6K6oH6dcvUDMYwMRfZrB5gFuH5gTw8tRnfjqE9QWyqfmt3dV9q",
  "key36": "5r83HU5suF4ykbgccDpWYjr7ZoM8SRz9sprv76mbJUGFJyTELuYv32JvsfbZmhVmCwdQz37eRsEcHk7fJYER5wPL",
  "key37": "4moZPxuM9WzjgHEPMnqtTwJT6gzSaSLMM72qpzxsg9jMz8H9ExcqUt52hQWMCgxWfR3JPmtpSpJnpEg3EBQYubp2",
  "key38": "tUNuzgwTQ3VubP1dyhKKV6JBDtbYRfBZeYAntu9ve6unDikiBawqF3Jgmf5STjpv7Ln3vaeys8VoY7XnRw8aoFr",
  "key39": "2b8Pov474HaMi4S4Fyn2Knu1N1Unpe5mcnXfYaX1i6Q3cptXJieyqmKCDfxJeSHVsQQn1jJoNgmqZfdkZXKLDkr3",
  "key40": "3gXsB8182jo4USbiJ7xrycF24T7Kb8JRj73Tvwmorc5UXbxL9GZqkwWMRY5LvwtEPbLMt1hriAhtdFbFcYsLwVqd",
  "key41": "1hwT2R3ugichSSvJ28brFVoVWvZ83Uuf4VLDh6XYbZUjvmxkpVNavNpwXRbQRCQ1paoozYuEu5z3EfAzG1jTByv",
  "key42": "62xPfbQVXKgp2JyNVtaJd1c75YACPVLTixipqq9HV1fJVKMAk8cUZsWGkXuAMGwC63HSdSqDm5tE9we25DiBamXt",
  "key43": "3cYkjVxpABJM8h1q2ffUpCiFvDbZxQ1L7SERGYWv9PzSfNDx4UgRyPrQMjBj9HGacmynjMF1vT5Myo3fgyPyuXGc",
  "key44": "4wrfDqbxnF9GgT67ewVL6Jah9WVV8AXnkgJA42oKE1rKjgeiNCd3CWVZAMiWW8zNEn6V8y4uwxZA52VvBPexTsbv",
  "key45": "5cJXstdjpp3FuqyJkkiy3eLgrW54fwZkxQ2AJdBDcooQjRkhqr7sHDtNBMfhfuFzaprKw2Vp1HjveC2b9Lnt3jwC",
  "key46": "67KNRBCbdZnsqSXEC4tv3iijxuC7R2UYeTfuF4hkjC1ec7d4WxPFqu8NgcQR8bmSqVMuu2Cg5FdofXkmngVANbNv",
  "key47": "3TUgviFgUinutieBXLGwvkkeickMZHSQikFjJGu6yUkBpEmPznisee4dZtkS9FAz6hXhL1ECgZs8dp7Wkn83p3ka"
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
