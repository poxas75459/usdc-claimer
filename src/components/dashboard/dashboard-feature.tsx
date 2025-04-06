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
    "5fcBggGDEMk1MbSjQdHFvFKPAxe1zE9HabjzX2QnMR7XdxAdGYf111Sv3RKMTsKfuPKiBnjJRUwEK2PQYcwBkDA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2Tbkgd9Br5K79vCkCciL7TY1Z43q8RcrDZNrNUd5UDDVZVyYkgb5wNhzDZYcVYPL4KzNj2iX1HKitXvSPgCFXi",
  "key1": "Q58MrgYYWCFiLZcTMiZWf6LLfo4avMZdJyRfbgHxk15U6EnGuuhHhDoPNoRC8Ke2b1EZDg9RJuzUVvkeZmEnGmz",
  "key2": "5e67FRr9GcWjVAHrryUHPGSF6ekGtKW8H79UJZ7zgvJFXN3kYDnUqKZvZyKRnAGW1fJBr9aW1UgxmC39h6T1rDQ1",
  "key3": "3x3ZdjBwTfgW6vSvBFLK9PhVD18BVudmxsj5Dh8ME9A3jZHik9nSQ2f66bvy5uCeBH195ZBRu2gqqeTvY8Eo9sG9",
  "key4": "ssmBvnWmV874ogZCiQjUCZGtQnhS2Pope4VH9zfW6tcQfqAQzBqZVVmXDWC9BzEkfKN5szT8mauK46ndxufuBr9",
  "key5": "2i4gKTavkALncE288VZLXtM6P2qGvk1XJXkNw3SoxrZgV4PT851rLVMEtFqVVZq1JSyURSzRgz8NQ32S325Hz8se",
  "key6": "2arkg3PkpMmtQwNiBAmCGZS69ZchDvBbnGKSxKJT4rPrLiGkPvAQwDfBhFkwQpTQZG9jpWmRTZ9ufF94vSwCiUeB",
  "key7": "HEKYC31VsQ9DjYVPHirx2zFgXUYcm9Kc6VkKx47TfKe7EPA7huSUKLbXVHfUG2EuQbPcWhz4H8dJ56UJ6T3rpMa",
  "key8": "2o2gXLyF71Fdvre16uzGp48cB5wonoqXyFtwRdJLfyP8ehJjK8xpZa8mAq4qkuq44sX7E2wdkZxuStbGG8rFgScK",
  "key9": "2EdT6CrT7HsAxWRmXbxytuV3wFcMyxJjXVAefMrKHHRbD57m39VP7UUNVwExy3Xvf9SK1prZRA8pvgAJYEGyxGDv",
  "key10": "2veMfq8qFoeVX6aRTRATqvwkHzTKkWaxx8L2XpnqFY7U3Z8uMySULyXryTgnpJSSzzHG7nM5fTjPyKXTgkzugwZi",
  "key11": "3E3ot8ZdyjV6DpgpzQTVSKspqcYiGmJzzWTybNj8YE3yNqkC1BUbZkiP3ixqD9HZvAEhSWa6QcbSTJy7cjDadq1N",
  "key12": "3p3cwcd6XRhboq2H492QdALEFK6HfKpv65ZoywNUWdzrbHtR7J7jbzJXYFEuMvaBtXK9XZEwsoKds5zjzWKqa2rS",
  "key13": "5ksQdvpz5HdDXyK4i1jFC5vp4MzSHZUdwPnLTGzmD5NoCmP5F6NrjvxyKdcsWBbMy6SQpdAfF3KxV6i87s7WkfGV",
  "key14": "2RmwfVaHnuRDMD5mZBiuQwZAswEFX3Sm4TYQZDET1karpL5cqGr4TrEZb8hDnSeu52RunNE4VkLUkRww3vXiKDqC",
  "key15": "3xUnNTvL98HNwUwSxvcJjHi4F1wYHEWUe6MdgqVkez2JoZyq6dtAa5axEebDTi292TEuiUBc7yXqy2689EzarNLM",
  "key16": "McjYoPtA9pr5sHuvmLt81euKDiiKJXvJhok7XfNK6JDGHgpiXrbwK7fgYaMjPmrmk4ic8wbRng14oeN7vEwNbi8",
  "key17": "3T9y5KWTnGPfvfSpaMhaukDusC2ktnjSHk3KN9qSuLpadyEKieoaS7MM5kZxQcb8xrk5UhwN4EFVGiQm9Ff8DTtp",
  "key18": "33W9RcxNqQjyMhbnQRuXyDq7JYppY2iPgxTqTXVVt9Ji52D9yYiFxJoNPGWXjAmLSroutFCiVZbd5dtiMx1NakbN",
  "key19": "2AXbi4VGWy3LFKhp2AZZz7eqURo5BgK88RiEewuc7C8ZxjeNnZwcsdCE5upUVXyZPJitwLyLcTDmCqgv3SkxnHXN",
  "key20": "dGtXCEDepoi3rLuBuiCNLaeybfKVpZ4t67B2XMwb3dXtZ6BoRCKCytVua4gaw4QeBQT9QQvg4BPPdXNyV91vxqa",
  "key21": "zJ7t8T2HvQ48n7ASGyQB5VQjDd14R6r9pegipS5VTuX4CRjnFA8Xedk6kP21q4pou4agLZXtsuysJPokjE6j5MR",
  "key22": "4BV7qaW6CKyQprwkW3bsqbeijE4qe4dDAECKaSRK7WqGb6FgBPKFamtW53cPNicEGBMgceKxtEMFiVru3Jx8Wy5i",
  "key23": "63VUqTPR5V5FmwCqUy9h7eZYBrxtmUYxuUa5UQwTGMybtq8X7JDPL81RuvMn5AK4Ze9h7UzfC7cpdFd6NkKr1p1J",
  "key24": "2gZff4vuhHmwUpjLFE6HR8VdjjinAjMzp29UVhhGwxvTEKCZdiWxhGV4bTPV5Xx3NANY2d89uDxqH9v9xGd6cKu1",
  "key25": "U2PhV2bPZyRLf6Z4bTW8qZrbDpLBHsb2swFfsDwZGPxbkad7sbEyHqJiuFHzKsuoof786Suc1cHLC8TRFqZNSTN",
  "key26": "5AeEJxRX3e4AMmDYMGr7s3W9EpZ1QtJfuEnkn1YxXxG5HPVM5VVd1wYyM8BTvXk4ry5U5ELd5pXk5VhzNa5THEQs",
  "key27": "5Bu3zMEXNvtKj4xLWgNRZv1fRvGm49S4UaJ6BbBWJiSf1TEosHSPKvH6ggMC91YvQxz9pDCy33ZwTuBpSQDczfLY",
  "key28": "4pDRUkmvpttB4hwdgjQ1CpZRx1xYhpnBTeZQE2fq1ro7kXPfft7fuNhxnUR8wAFpEbQ3aUf8vEByH3h5iwjNKYH7",
  "key29": "4CUNshDHRR4yebbafv8mnJTU1ehJdJZeSYzHvTQ3U1iQhsu5soUZD1MisDaijaoWWRYLkijg2DpacjBMeXsByRSJ",
  "key30": "2iUaSTZtAvnaJXERYLKXq62k5gYmnaXqsJDeHxcpYMXGTsGm1XWzFY5Rc6Et6Ebdx3u19aBMDDocizzwvgEh957C",
  "key31": "veNbysm8hRPjA6HQ45JydtuvAaXNe4AqE2kE4NjAKQfKFw3pyHDq2TiQxXtvj28fH49jdcoUVprv8pWrYho1Fag",
  "key32": "49yEJ1eJKL4JfSTMThPjNwpuMtQ227tRq6HsczcHfwDQ1GYkeRsnQcWpYceFBNiCWuvBSMo2cWNhQwg1sRizhnH",
  "key33": "4ytkpT8Eo3Pbn71bptrg9KQctH72VadzCGVZNdzYTCLMGRZDJ4HqtCJWd4aTo5fa6JTRSGcLA5RipeaPZ6MBwUnt",
  "key34": "2xnKYGnZXBsQxmkXFgJsMfomx2dE9D7sVHT53DfDWRrMmBeaggwf7JndH293qsEsXLejRfNCgp2afyLht5QSNUtQ",
  "key35": "4BpB1k2EFk7bT1eowL4qrLijWyYS4GwVxZ2r7Bfj8FZpDAfQRiJ1wYakN8xf7THywT7pdobqNaNdkBAwksGKyUjm",
  "key36": "3ekJUjjDRizdHSUu1Y8UBFH1QHg5iDnHbi26DUVRJJ6SMCb5fJ7aY7nFjiB3cJSwxispry6dDd98JY9peXq5p7BU",
  "key37": "5CDxUMaYu2bucF6DzXULMntuhbbDZJx62qHizsHyus6ufd3xLhf7Jo9JBdggM1Ff2YyciB4PijppFmqvZZkzq9Tb",
  "key38": "3f9UbbZHzNZ9nyUDyzK6Ji4aTgLoQcKP9usgW8JuQwEN6DhDxvCmy9ABMnAdiCR8EqE3CYxtsXwSnU8cEY7qDJQ4",
  "key39": "5PB5Z7Gb4nW8CWiv2LFb7QJARpf2MjyqSkrN7kxGKP6p1pErehBQxJvn6pRTsHsxV7h3MhEprwtg4WTVQGGVX8iB",
  "key40": "48J1h8pUY5Rg6D7ezr3Dw98xdt2JB9pWMfTGHuGnihSgkQD6kUEnAgdvDsj7P45dXef7fp7acpw8yjrwCYsaWHgt",
  "key41": "5ix49rVjW23aRRvWzBBYEAaHdeLR2hA86RpeHHMvAHAQD8QWdwUW8PnFe9Srz4CH4LmsTUiQYmv3sDUzsWjfpPVm",
  "key42": "58QMNyvuUZsW8DJcM4eRa3VjiTR4hnrhspefeJfuqtiGSBsasPSCNBpP5NmTdBjhCqKWz7HpfkAYtbDBw3C9HYB6",
  "key43": "5DKJHhEx21hb9xo4adWPYweknbqJpJeDBQ3XSnyVe3TsoVfMRX9PMdJiVSiib7DeE8Buj2juqYaGywevKdhsUQqh",
  "key44": "36H6C98TPXJzhqgMChADX5jbFcz13FoKwDehPtnksoDfTspwC3zn68pWCpZc11gxwKKCoqZZD8EMih3vmXnhaJhr",
  "key45": "5HoAenUirJNDQNCpU4e8mJcaoVgrkrgmBT6wRp8Mb1JNBMrvE94m1UDWm3YtMxc6wf5EVUXj3q59CfitnWVJgxDF",
  "key46": "4xURdM5kjvaCnUbYMu3rSqvbsdUPu3yzaq4fPym7nfcbKHYGEL2sCACxoQzn5Thv2V6ZYYdunrJ7q5fZjJWhkZZX",
  "key47": "4Rv7FDWBSTUARouchv16iNzhw8D6XrLdAJN88DAtuEq9Ee5Lp6dJwQJ61PUPcoWeSypbrA6tUJo5ezqAdWLCZRRp",
  "key48": "3377cjZWyiS9mXsS1Pjvy8vJrgVy9PuGFAnJ6ch9p1XbvLtg2eDFbit72s1y9PFny1PwWLyd6xvmTNHAvjikChpr",
  "key49": "4Poooj8HYXDDUUqakBsZHxDFHEJWW2C2obhEH1MunaoYj9VuS85Yrt5TAnt6KhVrdTEnN8hUs6autJeVw1KPXrnQ"
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
