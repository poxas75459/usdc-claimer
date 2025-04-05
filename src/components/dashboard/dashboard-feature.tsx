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
    "15hnwoUtYPGp2TY8Bdapq7z8ujFvPJeYX4HMCf7G8YQMtVmGeWYWWbG4QjVHekHXauy2vGarMTk9NkHAnkGvy55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cb5Sz6xxeLwY9anSkKbtCgM1iXRF6rftRtsddvqHjoKg3pbxfRz9DZKCwacxLjrHS977UgY7BFoRBrFNfFTGFBr",
  "key1": "4jDsTb2YRxbMYuK1rsNktxFXVAKLRu3arz6YmtyuV8uvUYTdNu3eYCUEB2BRKYBReZSqejvZMFdaHrpHE99ee6Fr",
  "key2": "4QgVgfz3UNKnZH3jN1iKfPcomzaKEERt1hiZp2SCMRHM9FafmSvZz6qHtX8eGZSrzvCFjZQrmuxYgDuNJsuCE49z",
  "key3": "3MUqy2uysT7eFAg8uoAtisP8pXHToptZyZwjz9NynBNycVVtxmAcwxnHeN71RTL8wxTPxmcMkh4Yd8r7eckXZ7qa",
  "key4": "345Yp7Wa6prkcMMJQ1Bbe8DXVepyV6o1fL9ANaekuerXHKjz67AkFZL13g4JWfuwgLbe4MbhYYcVwpuP5AJxrk4h",
  "key5": "4m9yKUpFr29NsH2mG58fXfjdVFCXG9yhxWZhnAHsze2SHexHLYAmZzqTtVdsNSrA5XMf1iArE51UAczCka1i2Dg1",
  "key6": "5mj7G5hJoPZJhnBKF4FV1omFHiSRq5Z13R5KRcopyChKCvFkJuFYnfceKyLvnRNPUe5raJZkFwjop3xHWf58BgAB",
  "key7": "2ZkMZA8QXnzLBj5oyrWMJRKm8B52h5G5mPXCnHn93hRH2P61TvoE7hpML3FnSrsLNm9KGqDEHt7P5NaeaxhuQX4t",
  "key8": "zSD58g3zHaJHAnyCsAsaJrUy6s17CXAZjmAsbZGvHBC1ewbGCj1iExNyZrT4A96smqQSMTjp2YwTHTWHxkpFkXG",
  "key9": "58zPkau5fMUbmGnUXnREnDTTx79BV4GgFXHDsPKmAzZPw4Kb9HGK6ydKjLkUdrbbGMyZUEHfbzSCej8ByTt3LnrC",
  "key10": "yPzurhUA7wNFxizjEcJnkhfcqm5UegmQmfScF2aDaufSCQPCnmBStjpYDrxfwtdnAjyerbr4S8aNRCgLiuVd2wH",
  "key11": "4tuvo2v4XFrZ1wVNfdDYjXbZq3b2KJwo8Spc37o6gYv7Dj7TVmTyUGKQ7PM367UF5EBTtWZgspBMSYVRuTUbg844",
  "key12": "2ED5BVKESgqQKjmotejAWJvmCrrEJr3Bwcu5h75a6GaXgfSDw1gBSx2gjFdZcuDLbTBTzjDoDrK3L7uBMfRVmHyW",
  "key13": "2PvHjKtKntrHh7Du2pht6gKt6xh1jsmJZLVzaTxXGaibtSKqTNszkdBrAJayKHwbt3RSa7Yeuotkrs6KuMUZDT8J",
  "key14": "55ZpFUNsBGDbeGZdmHCJrG8XESuhGGiFzpn6iM8qvBJ2ApeF8iB9aRt5CWuRT43E4FHaaAg1KoN7JTPesE8RU4vc",
  "key15": "5sEjHjb7KNRhcPyX83g8QEcppBrXEunM6Kjz7tpAnYauW12W46XLtAUaak34U75aM6EjN2G8pFAgg8LhqR1VCyfz",
  "key16": "3pH9S6p2pGW5Kkp9ZHRqd4oVTA7DUQQiWTom8ygs2DXR8sTehXE22udXBYDemAeqG1ULbXxWjat5EvQmx5kdiBgJ",
  "key17": "3SgoPyraCyGsPKotQyNioRcxG9Wr3GR3sZWc5JdCU4wLcwfRxiwKWE8MriNwXJtSRSZfQM1mzmcpZ9si1Pec7Jv6",
  "key18": "hHFfT53aWbqvawE5dLftVrjt8g2K3Zxt4NzbGgygUpXo2Gq1V8as5uvPEu4rMy8WLcHueZPhWpbTxG1xvgrFabo",
  "key19": "4tzzuUpHdFzwwNTJmfzvhZ6XGtNfHkpj2AgiVtGzSV6dk2ihBbzewUS9NkRB5rgjphYpQBD7wn5emu25hHgQCUeY",
  "key20": "4eP1Yx15c5TrwttGkfoRjoBkvc5mP4WETz9XGkkaB77sqGDoGpGRD6gv7JPkkVaKL9yAF7GXfarLfRcMD62bUEGW",
  "key21": "3UMXXopM7eLoUsiAZbzVqcCj5BCrv6VmTmLgBf3BadHMVKxzKjBWWeNVEptQJphvJ9WCxMamvdoFHgPwM7XHftAs",
  "key22": "2REbwMqFqSmMdDLPM2Q3g4JqVUzNSnvEwPPgCkdPjbHaTtRkbuoxuCbeLc9nF5Mp16Gc53Tp5b4GC1Hca7twktUf",
  "key23": "5PP2aqScGahYVco5zZR6Zu7s7rbuk8XanDVZ7Kr9CMjw76euRoVhLs89r21KbBPsajFwpe529EtSYE6YU221eJ7J",
  "key24": "3rsEabarALUZmFpArjsnZafL6ArKSc1NRJdEv1foRCkSHPBNPsMxWWeghyzmnaYwiNX2Dqhbc8rSUjg871D3i1q1",
  "key25": "2ckbm2UrhQPFaeqzL1Pn7RZFpPjEdAZ3U5LqvvDGYgaG1xYxRUv1GEicJMbzxQXPiyM3Ww5JTXgxgiyPJ13PcvDL",
  "key26": "5byzgnpDNtKqzzhiFr9zFSaGFmTEq1qHxNdVw68tRiC9BhWmTrNVkR6U2MVoXoNa89MNPoLFLCFcMu7i68qyAnA8",
  "key27": "eWE6F6yLASCj2QG6rMJgXL8goepP1u5u1ovr9t1Dc5wvqgv5aFUVgtQpfZPY42wyn8LunzTVd5fPxo96juSdCuy",
  "key28": "2iLkHd4MR9z7deU37uG7jhPBgzuDH5W4TZDwZvjx68wEQG5pQya35Co51n417d9D2JMywiaguhGZ96SbYWK4LjPG",
  "key29": "43DecjsiGJL2FDBnrMYWi1f7GGeuCRuV4a5ZKX8kJU6t21wsNaQFW5RLaK2is95PRHwRbkcWNpDhSx3cY9XFtqXs",
  "key30": "46huhkJZYGUVbCGLG38FY7PzNSKNvc3H6iHp59eyPiZ1AUnqynrX6Az7eTXttmRdSFN2rQfDD6Y8mhyznSptjuN2",
  "key31": "5PfyhEwTB96734dTPnyL4RZz3iGv2jceTNKN1vVN8LYf9jyymaGC14mGYbmUqzMJ6vJ1GP6cZZzM74YWQRZPTK5k",
  "key32": "5xwWmSM4j79eVXbTfu28Ae1GAaPEBde4eAF3JNM3vNHaZtX1NSWgczM7JDH5uu3efZiBECjfMaP3NM6qfwBc46V",
  "key33": "waT5Rv4xQHxk76gP6thahRcQttLVpcDEGKVWbC8kZTofBRB4u8zVdL6EV5GC3WsjebNtdNWotuJUaktTD1VEw77",
  "key34": "3AwwP4TncBoFHGGCVo7BfTiHstvt8wsxJZAPSTJAVeqx42jhZNtVbZ2xqfbZPrNLxagiGQ5hbE8fEbwk1scJuQ8d",
  "key35": "28gVTL7x24WhDfS7NrUcp7kKcZBkLXrzNjBnA5KcnrvZvxcgs4FBJkpECKHzSP13sJ5WwvMcAHKQevYNmo4wDfKM",
  "key36": "3JRLaasj31u3SSrCkvgwK49rTZTZS83FEayV3SLAWmigLgsUCUXvQnmmFQ2yANybzruNnZyBGYNxMFNiJx9KaWr2",
  "key37": "4UYHdqJvzMrC63SzbuPfxQSYfdERk13iqqZS4UwUExBVAVwyfY5tNxihdwJq2CEHv3GxGGaY3jwXC5yddEBPDFJf",
  "key38": "63vctRWMvFcDmjUVdWEFQGW7reon2bwgiZz91jMBQ4E2cRsgMBSiwRymKRpLiky7R5hmFHpzYMrGvBCZZSmkkohm",
  "key39": "2VuCS5qbNemeipoBSgCJtrAB9aNJuGJ3Eb7T8RLGsj1ZufeDd3xAfATFjR72xqzzCeDfsgbRhDWKqMwsStdkwyan",
  "key40": "3FLzRFZ8Xhf9WqQmSkKMnQ94K44jnbkcKLRCdD7D8SgGL6DM57wjoJ7rqf2yaMtYrticMuoFmfUL6XXDwgH3jHvi",
  "key41": "5e4dGBuMCSvRFWLDP4xfkSEa8cw6Wrrhxhwmc46z64QsCmUNVfRhZqRbKFWVjHEAAMzMrTwPKPLS3zusNwcyeyHN",
  "key42": "2BQFU6ioAJ15MueaBBwmY3zpBSkL4j2Bd3s6UoiC9nP9FiQLK7hZxpTRQgA4eyFC7PiNVWfSLo7Jg957yi8cweQU",
  "key43": "2fXYmKM8rSNC8tVgtPqSeD4NmCJb6j1KyFow2AULYKjvaGAuy6qgTAhbjeoJjsigeBjAqwosebKXxSgxLMqyGDVs"
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
