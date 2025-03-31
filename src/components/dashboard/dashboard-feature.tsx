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
    "2EtRKKQk3gML8ryQAoXKYLVWuWj6e5jScx63vk9SN6ZC45zRDHvAs5wNBKeZRcrmjNwwcsUWEd722WczTKq9HxRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fg4kFZWgnNWi8XiuMkmhuMuG6RpbryFxMRiCYbtv1wnG1jSiVt3yQTtTdmBSVGimLtzMRxkSzBwfEQ4ayXQYokH",
  "key1": "49LfJ74mbszLdL9V4ALJkS8VCD1Lnen26f1N85rqJfQjeLGaQZRFzgLgsGWq8KEECtNe3dJKPoxXoTPsxogzqa6N",
  "key2": "4Y6ZdJ3bZkeuqdjG4dknnNdrtZ3hyekfrwmAeVrVdf7dKqpCevGNqpTRPjnzA7K1E8iMpFi656Dkq3g4u4ZmCE3T",
  "key3": "4fc91qAA2kp8jhNydVrAbLLieTNg4ibZTV74tej3ArRa6CqbnX9dXmvm5m2Xam8TQQDn5M3G8UMzU44f1abhTvvY",
  "key4": "h2tcP7WbAAkS5tfcp6GoqiGxe5vYqr8aVwZMf9EiDiiW2T9ux6vkLAuvuX4s7Px5KZAYns74p4WJd8VNKs8ZKPE",
  "key5": "3t6AQSwc3NDh4jgrw4yv6xCrretkGMH6rHde7PvaA3CWNzVLy3W45WWSczdzdyYhdB12nEtULZGgWCSJonZRv3Nm",
  "key6": "44pwA5BNWb9SN3ixFc1BmuK97FUwbfzuRnemUSgT86q2UhpKZMwgYEzmG4YQ5UuzRf8gYFsQDmAMdCtVdq9jaZRt",
  "key7": "55dbR1DoxBiwmXXYyGtJ81nbchDDWbta1GnpyMePVAqvZcuKvR841REZPixR2SgysiJx7kTS1giXeqZr9GhU2xWC",
  "key8": "4huhxMeSRpuxKbnrsMxmmtkFdSvbmiL8Gji8Pnyk3m1up5LwkDAqjxnk4FBUHbngfLbpvzNMxXCeErWxp8qkBgqs",
  "key9": "2Z8jj6TSZWMoyoYoY8ZZQU8xdbgRGYU9okMypGovL6KgnQrpx3L6KiScCiHY8EKjwo2B8Gm6emYKqxoLnsDWkPE2",
  "key10": "487xqHMsuAgPm2TtofhEZaTdVjfWx8sqYvbdNLdF4Ya27X32UbqSzq5DGXR6fkKYUQ1gvLj4rpqSLN3qBsjsrJZX",
  "key11": "5GVHLK8DJ3hqyEdiW1XeauHNypSEx7hKWM4r6pAEEXhkmae6df1gdJKEYHB5gkSuZbXZo7nfRWcfoBFFJP8Z16MQ",
  "key12": "y5YwCj5qGxXzs1mUQrp3zWstmVHxJuPKAiw89wZUPNWY7BHrVL9xMkRx6apb8s1sfbxfMd3tmndoXvrPqr2FvXk",
  "key13": "5tGj5GsLasWzAXvRR72WqVN4pBhvmJhMvikv9GGfc4XGBGZ78BM4ciiMgjGqcwfhYAp45i2V9wxHPdBEYvFeHTTD",
  "key14": "54RP3qVe7kYBcHjVF6M9RUEmfnBdHzEkrJzhknPBNGhkEw8xMNRVYW9oEwF1dUGYKFFTMtiqogKDj2bHCMyTe6jr",
  "key15": "3kevsauk2BdAqksEGByfrroQDVVMHXZgb6Mf5ZitC9w7tnDaAW4EZU1wbESDX4s26GBHKuekPBVZhFDg6Dbyn9qP",
  "key16": "3drhDRzmtK8MF7ejiz12m93QghDTsELDxvNVgNmtfUQrRBzFEUV78n9YX5kV9Y74Ho97MFhW1BuwcwcSqWkFwcsQ",
  "key17": "4sioj24F2rAgfyt8KJ3gKnRd7oz7igsyL83EpVgrNTXAJDNMLnYgobNG7QJRe1zkB6zSapsfzCffoMH22crGcQLw",
  "key18": "3K1nW3yBDtVzbYvHsDJZSSSkjHUF1KeXApLPRUysiNSai6YFFWeHCTECwNxL5v55a8yqKzzY1DVboVSgwUV8f2ES",
  "key19": "BnJC3pEMBVLr3cjZi1CBMidB13ZXBNc45FBXqwhyJsz3TzkKxzryGbK4bU5tPyVqrFswhkoUA4DedoQ97rYwGC9",
  "key20": "47FyUfGVEaeuUzHL9KsqgNUugvJvPaeZy5XtmMzhkmT8MpH4VYsdAcKv3LmTDitTYiM1JwmPFRBQBGZ7hNdzuBCs",
  "key21": "4PoK7DXX36AGRjUqWKN3MHa3V4SgpE7mMK1omaFMff2xPX31ZyiwCJCBZVNG74PkBenxkCqiwq9chSvmcFBpXg2J",
  "key22": "3Bpba41vGVbsrGypBf4SMnqDSPZgHt2crF57g9NssaLGFAVePoHPpwGoYpZXhVUtj3WmwUCkgsCNtVpyFAvoXPQ2",
  "key23": "5Ht7awqkCXKdUqbhwND7MA3CGeRbNbiYhzcMcY88vuVYxbSCUS9HwvphTKmg5zehQJgNAkyjpQVGT4dmv8vwHfxX",
  "key24": "3rwFRVn9nMJNHVgwp8JofXzJx8pvvjKGxkMoi37rnsN5ghpnMVxHaGTnJAwoRmRcCYmoL4seE8WXLE34JfQdhvPW",
  "key25": "2ucwQApkp93yHV2t2nsEV4fYmspeGUYhDrrsrdAC5PDMpjZzr5wnLqNE9WEFcfKSvGgmDMAiAPiiy8DmjX2gQs2T",
  "key26": "4wuq2qNWrmv7tCy5yfDxCemsAajJmLkgdSEdtexudyPR866kSokXBKDjjnMinJMxPCfJWCTr3NwUvuVJQ2CggbHL",
  "key27": "3tKbgCyaC8Ka4ynibHTmKtGeVyWdft2fRPBGWVwWmj1GS61poJDP2RXtPmx3KamMHWymFDDoaxHKLWEftz3px5S2",
  "key28": "4h7yTeAFG7Zgq5oD5xp9WVgVrhT6aMbmBE93QEqSRBZ62dj15Fm7x91BFwRw9hwi9PFweCyiXPfnLDCWPCAVnksk",
  "key29": "2BjoEWs1S2LZit8E4gkHU1JJLxvhYNtkx9urYjGRUzjfzu44UThm41J7VBHVwm4YLYctwjVqoYD72idb8mNXVrHG",
  "key30": "3iVkjJqAhxfiL6ov9oHkKsCqFBfX2Vc7Yo46LqusUsfc1UEA6R6qFotdSpKW1JBZb6eZWDHLPYF7xvnVbzvXiktV",
  "key31": "3mAknBkJX3yfmZNneXptaZgsdYvq5oWuQE69tne8F4oVu1zr3oGsgM7nPtq1uCpYNzBYJCyVxWXFkSqrDvvsN5ew",
  "key32": "3Eq6JptrLnfDsTcTZ85cTRvgJip2QAw6pTHJv9i2LB41QrQSLhStAoTciJ84x5XvB1oH2mk8BtaxPxGzL7PDCiFi",
  "key33": "3s35UVuq2HPHrAow8Rf5rf24wGAZpH1CUGk6zPe7pngKmYeQJ2t4Bt5sMBgURSpH6gjsBeouBG3jb79vS3vzFWv",
  "key34": "qnACXnZoQwpUCm9kKjUbFZ8XZJELjeM7rmeTtDCeptgWa7cDoXT8Kw4ekim4oCzajXDiPQcEgPRHaR1mLnuXizP",
  "key35": "5x77T2Z3u2HkwZuFrEob3MDMjGqPAJoDtH6AttcGmwdqPVgKKEfJEt9ypWG7kSJjrbqoCs4fjjB14AdbcGVDeVxK",
  "key36": "5nxBQeeHt596wzMVeTAhxCv5tVN6AtDyVZNbhizvbrKvgyZJWTfCwxenyvUB3e9SGUL6hut7z2p4P9CktnrfJcvp",
  "key37": "3z55Legyn8rEnGkiJr7JrskKmoKNiQm5rjpofRscgaoGMXUX7H8C9v62CKnwtWQi7hR16NQCscLtCGgpYacDmpwT",
  "key38": "64CeRtWxrzYRWNpkQDN9WL4daQYoKmxdo5m88zV9HXTqqi1UkGhXd2mJfAeWzhB2nmD2BmeYtgABJn9SfiSnY6SB",
  "key39": "21vHHKUcGytNN82uUV92Z5WcuZEYpo8BrLbf9Wd5sKYmRNSsAncRD5FvxB1adURxmKvrrJ8xYAiJ3VyVkHkNVroc",
  "key40": "3XwYokZ623chuxhCDnV8Da1Zfriufi9ztukWLPqNYVe8i3F2MXopJLZqsGhAxeGXtnCqsSb9xPVes5eAB9drytxp",
  "key41": "4EXkSdQiPNc8JWj2J8f7HGSYezzdLc4gfLskLoY6VyHq2oVC1wSe3WW5r5yFQxnVySrpeHEDueQwvXg2jonK4BSc",
  "key42": "5yYqJpDwoYG41SoYTkbnqYeP3CRNRZs5fRx8v7G8BzqPgcMWXPocNPJgVwmU7w5witSC9oksedtvAfWiK9ERVBqS",
  "key43": "3M7zSvszgGkafoATZ9AuPxW3XAG8gPdjjp22ncUDZaXZnyN8fu3VzUaufh1L17c1LmK9hB3mcCoyRv5qfaSsX1ku",
  "key44": "57QG7VQDGcg3pgYpPnEUCTxNQAkp6AtmeKyR3bb2Q9WQTVwfU1KRKJw8NWKYV2qjX4QrsP713JiVKpC6SjqncwcW",
  "key45": "3ihvVYHt4ekzRW9QvgERJwwZhMcHn2zfs2RG54cWkKuFdyeDUReWNNLj7B9xLWivGxEBK7S1RNoN3fFrsafEFxD8",
  "key46": "3dBXmwWoh4UYRPp2AgNyoh5t9jKdQYdMjkpYCe7f1wjPHuX5DHBoCw5fR5mDYHbj94TJxUxesL4s3wN9xR7Eaggq",
  "key47": "haArApNLomMWga15sfEJuiQZ78WESf5KdvD1gQWM9SHkG527XKtqh1TTmY8eMUB8M5uiPNDpPb5nDroQ8UjtZEC",
  "key48": "616gNodKmr4JD6Gytnmcc4HfptJoYfZX4Q7P8FRWJQUnvaAnYNdCThtr6tkHPhpefyagN9BXRceEk4qavT2NMppY"
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
