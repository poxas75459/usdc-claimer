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
    "2cxtAk3ayQWwAfFpEy5pMDV5BGTYeYYrnN8kM4TzAtdeGmhgpWV1hWeHDPPGWMpiNx4iUx9XoMoMNkTUz4UXMEwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFKkTZMGhm5vLKpt1qGU94JHa4u8X31w6CKzL3JuwSmAj9Fnd7UV5o7rA2cPuw8VxMqodT9wjCHkR6pC9dFjL4X",
  "key1": "5p4E3tQGumEjU69Vh81WJDAU6X7GaHHohkS674XFkuXF6pzYQhypDYtX9S4wnV4bT9bg8E4s1Rjxh3L7aeVFcuVd",
  "key2": "51LEnFTeZdGCp86whyVRtMwXyKgBD2SP3K537wEgsKdngabTvSZyaCHGgNhHQurfwmitysRgkzoveehwBcfmWXFY",
  "key3": "2u8F9vJpiYL7NkpiUS5RSoBVtNk6m4sjWvKjo8E37d2ocyMru8LnsAjFChTgkKqjqWP7cK9vpx1RuAYe3trd8cMz",
  "key4": "2U9VFBw8rG84eQ8dwqhcytCH4bZ2JRaVEhGE1Sb8Vm2o5nZkz7BAyxoe8ndgjRNLoDmCbWBLB9TeHcLRtUiBkHgw",
  "key5": "2PtsE4j7bH7HgjTTDT9cqDLNwiHqqXL12WTZ3TEL2K2mYh4h6fKdyfZKbJpZe4cffWdSrttLb2q5K7fvykeJcWmU",
  "key6": "r2n9EmckXM2wkF2oFygEBcy6mU8adcsqLrpmBmVY7RvsxAWGhQ5WVt36Yjqzn9Y1UKEZFgMS7JW26ED2GEyE3Vm",
  "key7": "5RXD3w46SGnBTNu3DYKdoj4QiwrEqqm7qSLdM4A1nUGSfQwi4rnXJju3oMm9yK2WTfAJ5TNHH77juLZgHDhvK3rB",
  "key8": "3yyGPdYyC9j4fjsubU4Qhj3M6gexZDMX2Xf8tVsKfJ2twFP4GvnwCRNUTqtWubiTxSjaCr2fxgEb6BhqMZdD5dwW",
  "key9": "4gTLeGi4CbHjrK3rQZmDv6w239gcgGuTQgoVEYH7FcG5uG17suLkPRH8scrUBCNe932HJJN7FVjewXiebH8f68EU",
  "key10": "4TA3NWaxNhgp1r37vzqtStBBHzEdTgZQEpaxrf9B7DBLp4guYKQJa1uDWfin5p4WPTn5w4dN9BtdT1ZnHgKfgPPJ",
  "key11": "3cTcCypMCCezNtQJXLvpDgTcXcKLwTtqvMS4ixmphqX6yU7LirWQTPVbYawbcHKrnK5oTxzeBNVtaPadQ2nYbuaB",
  "key12": "5AAzUWzhrtvtCZLPM92c1YdpfqQRfqPhoRTRDYDQGUYAHJubBXD9ykdwGDE4febGftnJVWAEXvVk6n5cBRQLd2Lf",
  "key13": "5P8cXc83uv1T86EJTt2jJfyPnENf3AxmXcbKZMjKFF9fj2swzoc9Jk7Nq4mHCAVgyUTgKy2RbkuMjiTyBAkWFP7c",
  "key14": "659czSBAmimbMMuD93LDP2cMCqxxRPdbJrhy5YyVKCFWyDHcyUF8Wpj5rY9VS8MgzSKbLABkUREzCtWhTGw1KCZC",
  "key15": "3vRKDAGPABNCLz7Uk9Lc7rRJo4fFe2n8Vf6YqAYR5shjSfemi9ALs8BLc7UpefJWVRca7adRt1jgwgfdgAHnNaAq",
  "key16": "HM845gqqzkERCwYVhBTZrXNp47Ux9cAavfj1t6bDMMiVKcsKQt1WEQ4HULeoroUf7EtTkiyARyWmcw6njwxWFYE",
  "key17": "4RHxGkKCiP7U5MSthGsTqpJSoVcTAS7jkGX1r8seR5mzETRAPkCV825rCeT9wPiYzrDdJySkBAPjk6yS4Dnce38J",
  "key18": "5NsDKc9rMrGXd6hcvAZeeDD3v9MQdktfJzv6Gzf8UZuNnHAWXau3W7HHzj4SH8Di7uPfPsYVxzDUckBCkYzMjYT5",
  "key19": "2MPC88kYtNZ511NssDKRwEBJu7q7F56V1FSFpv3geCTvs65Tyk2YNJH3Pai5H64qN5X7cPMMKNAfipscYkP7xZoA",
  "key20": "4NjjLJcgbioSqrW7wXZ3BSDoY8JLJBTxiBuDEmPxEYAVdeW3dH5su9TyT8wrRSd5od5qL3kskMm3fojWt4bKUoNc",
  "key21": "gWfdMu9HZx3VLtzPUpuJQ4j2upmSYMPHz9Deb6Cyu6MRajfZC9uTY3DAhbMUT7kLVFHoWwvqE3a1GgsAaJjwzqS",
  "key22": "5P9ZurqHqUR2qMRtMwhCamz6rgqB22z7wSu56J35DiBfogtGL3tZSGv8E87UfpxZNJVupL9i3Fx5RJVzsU6NTErV",
  "key23": "2uJ3XWxzX8JMs6eMcNa72xGodQYhhLjbZpwaJH3z2RmK7iYvwH3eahrvP6QvhXyBKBM82zSr2xrEg7tBhCRz52Dz",
  "key24": "3JDSR5gCiWKcXypGrvcwRf4ZsWAg5ZLWgXUUUL4gjBd8M65u6hcqfqKzgnfjNxiaiD5RxAnUq7WpXjomm9yaFzL7",
  "key25": "5wLPrtshpqwDVPZyupNJMrRCx46GBmVPNxpekw28wUETvnKMBBNWRKhURSDWkun66sXZg9zqYRU57jFLD6wcDWKy",
  "key26": "3hRSEj258N9VCn8YNH9aUFTq1GnPFiWVGL9FTqNtcZ78anpBLQcKfGsR5WqLMRqEudquV8VSnHGToAyWLJoJNkJZ",
  "key27": "2sGmC4oGZ5PdKkKCbFLEdPSFi1qmWZsMScoArhSbotwThEqx2mHAbSgu9P5Dk5ZWtPU6WGheDn2DRCnHFk3XHurr",
  "key28": "36MP6oLNyTjg5Wq4uwpy8pBa8QB3o27YXq18orXyWoBDryQXWWQZpwLfBfDmyHvaWvifSjE2Pxuo17ygKggkMph7",
  "key29": "2SZkjmWYfNEpyuJkYkWHHVMBy36PSLGeUzrWKfJnZqUUjqe1rnpFx9tuT5f2Nwkpd8N4T1BiEsUeEtQd2nxMGLCM",
  "key30": "5ueHKJXihEWFafN1hVdP7ED4q3mA3C2nTzRiZ41jgUQDvQ3eCvzFvqz1kQnEFfBfdtZuPnmMbFARL2Bi5sc5fx4k",
  "key31": "61k3CzzVHMzF9MxhFAnFWmDoFjcwkfpTED1rBAhhJTbeduk1Ajqo4zfGYNnVfyhRYgChKZSKdhgNJrgHkJ5sRJ1x",
  "key32": "2vanTEh3pxEMwYQ1d4az9UdruZ8iNJkXa8NHYdS81gUqsft3QFdLH6vr7ciXw2AvsCgUt93AoRbUpZQrejWrNq3R",
  "key33": "5pRTGrxCYhpm7wnQYAbpYPZF4N6SzVpRj4iGduc7auEPn6VJRLzhWB8929SD7qF3xRMLG1FYxcT8a4oNYXp9CDti",
  "key34": "2ZQ6dJMxmPqKGX2EsecCVvw2UMxHbxH8ZcFST1KUXdNqUT7BLKghv8sFEZGWec4pp4J8pnqX66AqKikHn4rMRGBt",
  "key35": "4fFPvBmW4sTDnswJGUJ2SijNwNkjAZ5Qm6MXDyjDSVKScquZsuiLMu9JBdCFBTp9TdeJNjfXYucLJDGZTLYALeFo",
  "key36": "2czUR5JNvoq939ZLUmWPxeq2e4Ery7GfB3RJvrTw5xUJxqSNQ6fdbBFV2ie5bRbbvstDX9vEnpUVMR3MvvsLq6ZF",
  "key37": "28QHwqxBnA9gkRMQYfBD1pGGSui6qZPYYT1xEC4ZPP7UAvsbkjoGUWVaBJSPUU1zoZmMdscPZ5f691mMaTPHkXhV",
  "key38": "2cYZYw7nRFD852WnykU23xH7iFhSyxRvdQxeqqcuj4EoEwXmrWtxqtxgHhoJxkcR9xKo16ajRcx8VCZwEjLWy61",
  "key39": "3AwYbfQthoRsTsUfGFVbjmQy13sBEDMvmzmBeigRVkfFCyvmMFAdY9B4npFhAk7YBgBU2ehfwedsHUXhEPk7FjYL",
  "key40": "3zyHhz64A3Kh4Bj4bJ5KRmuufZuBs2UTXEBB8Y47GWDCMdP3175999Hi5RvkRqxQydvFFbBfqNBgmXrm3CKjSiCs",
  "key41": "4fkhvdUrporyBEYqMqoA21BktFbTNkAnZLNb2kSj9FivYkm3zsVFC63Fb9Km2eKyx38MJt2joosu5pMJQe8MkLYZ",
  "key42": "24wrb5DV3VNUX3T242zFsTYNGYNxwWS4x6GnfW4iY8FkgjcNu836FCaYdswao7o2Jod4Zhho2dh4Y7uVdWAKgpox",
  "key43": "5maLSGHxiC63pBdQ24BeKQ3UTApteAV6piNL6y6zt3S422AucKLe3YQhX2WDjqVDguvC9y73ouvxGAejG8JACjAp",
  "key44": "27s9bLwxc7wpZhLTBvBM1pBYYxk83nHFRPMqQK1GrRLgNTdhhMAjgeB3kQrfMYrGhphLgA6pNiWo4y6U46CAZqgS",
  "key45": "5fLUDAU9NQRgGAp1qLJWYjjKDfdsg9fWp56vtfnopCXiey3ssuTvzS754XoQCfxYrh4kgJNL1ZBMT2gRWrNBTAJ7"
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
