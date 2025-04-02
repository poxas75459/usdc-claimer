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
    "PaFrkEq5WvTpoa1RdrAKQ8taRyKHa2qwEHthQAbfRgKnekp9oXARVQURKFHac4UqNQFUkpkmtZsxo2rPSyxqokF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmx6U2L6J2cEVTn7Lxf6anHWiN8aZ5i4ZXf3ysUDwN2vQqWcq9zDRMzwC9WvhpLkDMgkA4RBhDDWMWkVirvL5uE",
  "key1": "5Tv1sQECvjmC9hoWrpzW63A2uJz5J6yYX4e7znQ7VRzgCzwe8kpopqbASFvjGvThk4ma1DouofwpUfLsyq6xupaZ",
  "key2": "3YZLY9ddVj1BCQHq7Uzv9QwLAXCpXUmJQpFs1ApfB1Dk8X2aZ5MMZxjuCpziQHfx5XjUnR5PVAWDaEz6zuRbBq4w",
  "key3": "3os5K9Gr9aKQNpGdmfBcHoPVtTjQRyGggiYT9nkKqEMr9rj77bAJc5HSrbLa2A6MsyLaNDRJ9ejXnbbz45nrvDwB",
  "key4": "5pKV74G7RQjJfwTnEPVJLcQEsm964fLnz3CjdNAM4YtU5yYUS6wmsaAnmNVMirmiAfn3KhJ2yYtdpTiYMgo9AMBd",
  "key5": "2EzDDsStTRCpHg8f3dZrWsu9WfyNe1rUQohfdkksDTY3rZqAejfqHpnChhyRxJLMZJui4tRjDrPFE2odDB4Sr8nE",
  "key6": "37rZYvzBN4qXEwymG6aq6TDPvNmqEFbohKZap7BwvKT7uzEZXruncjqYj739HE8irDaJKqs24GnwiMcMJnhLKMgo",
  "key7": "4bs3K39VeMRmsnLyGFgv7HXgaCBuHVuHKBxfmqc5EyxvumRuB9GFfCkaAZvf9jmCQcomub4j6Uqvafuj1wGgyk4J",
  "key8": "3oC7dJ2ca5KZpkncpXjxVkXLKHRZAQ7kakjeRgSSz3tsioGjkxn4qzkYjPnXRFQCj3BukQkTXjMuGL3Nz2coGy2m",
  "key9": "4pUu9uvbiv4Ym4rwmowwLViLgDSimGNWepFrEVjtsL7F9u565LLrRCmnuRQUWnCFX31nzCgW74TVDCK1krVbhWbq",
  "key10": "6146fxfZEfDHGDrUyq75REWioVANsvuL5c2QkVuzkcAdQHt1mARFDeK5rb2fNKqdQfbWobbMtRDjMNj44Nk7ovMb",
  "key11": "3SvrMMtdBpfrCZnLnj7ETeFRa2V3ZJQzLgw8aBW3QJbSuvNrrNyax51RXtgVdTD6ivvA66NSSCWDdXd4VCBibUrn",
  "key12": "299s6hiRHB4wHLacSX7vDLYPK8B5U56peeDNeT8hbUf8sbHvez3p978AAi2tWdZhcdkF8GQZUP5b6DqrLSmLnwre",
  "key13": "3NV8ufniYSq8upH3ZJWyqPiVkGASwU7TELVzf8aimchP2SeVBPCJHT6QL4xbAM62jGb3ri22Hj219mJAtEfpDtSD",
  "key14": "n86ooxeDgkgvmxWh6BLK7LYvhR1Pz1YSfaU6AJbHs5pMVAYUUTysqGNijdEdRLpXj9WhTjKAMKhHaqQLeeX96Rx",
  "key15": "3vLS33wJeBfE38ZA77oYAiMBGjCdtW5Bx3RGHUGd53aQkmvHSjREyG9M2MY41jpTgtU3ZkH4KcYXPLFXJvCJqNq1",
  "key16": "2BsxfTMBckmGZ5QjayDTAzK7JLKZJ6DVJuNaW1sZjFSPexrEDgCwSUF6wzWYT6qSaZ14CDM8VK2jp1hCks8V52Cj",
  "key17": "3er5Fdb8XJopEWpQ8i2rttV7RioHZwk2fwr1i9y9hdRcY9TKvkT17RH5f1dTeDUnxax1zsNXyvN8wirmSub2FfJ7",
  "key18": "52iuJJepZyoNk5TphgWpK52cyfoj9WRf64FsSpdPXQFSgnj7GKD7SkpRTtNCpPWoQ3Pn6qg9XrmBcBkKXCP1122U",
  "key19": "3hW9mduuVjaXsfwpoqGVKMuGtkkxEpdbH8WWBaAWSHP6mRG5ULnqveBG2tQMLpdjbpQfMu7zykgqr1rhfSLpRbmS",
  "key20": "2HJstuo7gJcBzwcRb5pcZc4jMzAfbe3M5idXWkzjd3hs2kn72byYw2TA293FHVNSXAr2HV6FFgwbLqHAAcmXZRHC",
  "key21": "4e6eZjkwFn1sZLSrP4qjJzfp3btsJXeyvhy1VPHsUWnxCbfM9aqhzfSoXku1ULhqxmDVH53pmDkeQKpEPqhf3QGC",
  "key22": "4ev4thEQNy3r3UMNm28X9bMDMnGPnsTmyPCG1huY2y9vTcc6afLSMwELRrcqD21QBSGZyd22AaLeGJD7gGQVnsc7",
  "key23": "5PYnMbPG4tvRSgpdzc9zAEc5VkVHeXrpXdTD6cpj7wMt9uthguMEWQpFgATzz4HPf465T6YXZT25pXFgU3q4GDKG",
  "key24": "2LubqXb2e28YQeKrCUoHWWUNwbaLKnc9AFwpoiuCArQhGLw6DYkT3XDcSw3pVuATRUAgAuCGJuGmsuokjhKmsoJP",
  "key25": "2mGa4TaY5pALFDkXr2wkqSKUQqtSg4q8j2NFBkNB1eNj1vs1aXhh717GXQpv4C9sLX6hSRz27N1sxZY1pZhywAT4",
  "key26": "2NqPju8dcSGwZWsyD68CVScJPZtf23LYw594KT5YHvEsg66gvXKWvaoHvsFpTddYriNbBU19F7UvRnNLWDhbm1u2",
  "key27": "jTepA1fNRRNdBD6cSSN5yXPZct1gNBhSDW2f2UohCrF7p3kTPB3ZrUXTR1JUtX6VeqFB3eN44WzuX7yCfhdmFxJ",
  "key28": "uQfZ2ZzrmaovkEMEnLYUmcCcJ38jTcT1EJEXtx5Pv48RGF55qxeJx3fgsxMdF6MrK7g4AUwBBTmwUg4PSXCqcoy",
  "key29": "2ntQWP1ABYwcvAqcFzhMQmbFZKxLo3fzNtqhHbi9R1sKRkJtGXTjSPWLm1cYvirm3SPuGqdLRxBWWGKbQiath6Lz",
  "key30": "EtJJBhGkjAWXj1ovfw6Lbnv267cWNPf77zjsgthUtZJpgZm4hYCiTf73HeAPo6iWJ784yon4r19cT8GD6AYEMyB",
  "key31": "345NHc3cZEzunGnfwq5APsB3KGZARYfGem3xJVZubpzjmhUq1dqznAuPn4TtHpujHg6VuGco3BM8B7rL1n4gniSk",
  "key32": "2fERzGEVU2WyfLhvZhLYVUUYJSQuVKkWBayBnmYNJfR5h7hDGUcTQeRYjx3rn6fEapa6kq7K5bodgLBaSE8BX3A8",
  "key33": "2iccauHYEZCFdLEFF2QHG5DmBMo3tHzi6bLpnUfafxCeHvFHXB5jPM3xYHNBEqkVGcNi1MAp2MXvvHrAJx8krXiE",
  "key34": "5HZAt7YHc8LdHz4gtpi5jWqFMKbReW7v2dRRhYepiLNcZP7jg2R1cLhP7pNvtV4QsCTRa2AtCUEKwyi4up5bpZ1a",
  "key35": "5aopxd1kfzted2SEvnMXxzcm1UoFDD1EAoEn875EszDEjFTzPhTojt4L3ey92dbUFm7Qg4anL7KdchA28rq5Awhj",
  "key36": "34eYfGPHV7BgVvPKxLnUaftakv6UXK5HLPwyXniNeRX7h4ZT74Njrs1QppZwKaV2yeW3pfpvHc8GvNLfZv7R6Af9",
  "key37": "4JecrjRtRkGZSoPdGX6sd89yqMxKvnL38irRPCYMioitB71NDCCo87KaJFkPkZcmXBARbQ6FngGi33mRP56KXibU",
  "key38": "5zZiGAw4u1Errq45TCuwxUYw3N4kdsGaXSF12M4DAuCF8HuDpnmq1rjupsxzA6oGXAW8grrBr7SrCpcSjhyVHLrj",
  "key39": "5JDkJrMxfFfvHjm5WeXdYKyPmdtUTqY9womQe9a6gavRYdLCnbApUeBwdoRGmLRnYTSdmNg3X1iQrXRTvAw7SSxw",
  "key40": "2T714ksLmiFt292BLjUJZLqmNVptjUhvmFiAkxDRzNAZWfGBdBrwHE61Ugf61gXLNDxrqnwFG4B1xmCZNWvuxxwy",
  "key41": "2ZUCbjuXzkeAikfbib5NJD9vUJsbmHWEcD9u6ubFFAPYHeiztcCQZETrCABfmgUcB5CR3fso7WPXHZRVUcEyJ9PV",
  "key42": "51Wq9ijLBQ2BsKgYY2QSX7GCo9rEukyYAksMFXPDyi3LMZu5frEaDpvhTKrgkhFNJKeHUCxUjzn8BtocXHncLJ3e",
  "key43": "5APsYFXtMH5hyiiyxfbtEViRErEpWCLZNVzWpsSBHxe4uM1GA5NnhUd5sKwwxtV26yx4o84wZrXj1KSLdnwg8wrA",
  "key44": "21m35muuHpF9bXNzfxUqb1BibDNHvVDnKjdbre2bbVwtXdwcjsA25wEQBv3ysJ5M83NKwMiYUP3M8C263auXVvZC",
  "key45": "4igcme5T4q8kjHbdNWdqu5Cea4hcwC6b1G8nvYvvp3yF1BsNkv1hkTKyxx9VD28vjd83J9WQthHaonJ5wKaJSqCW",
  "key46": "g2dPKFywSCjzeotR9dvatSeWS8LrFy3nhdBSkS72AsMmWZLHKeWYik2k8bm8tNzXBtANLda22wGCHQuK1Fd4sHv",
  "key47": "2HqVP18f3Xsok2w8kk4BG1r113sMdufYi5zEkK8RKkmdjbCgYZb1RbUPBAFnP2ddFgKxgwJJo2KFjJy1JWAGnsJD"
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
