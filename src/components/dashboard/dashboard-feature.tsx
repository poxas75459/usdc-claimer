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
    "2t9TnmSq4MMcJS7urHpf9NQBg3vfQnfK6f2oqSY4Cyd8CoSHNGfuX6QBPkqVNGZFAXB38zkinQub87SAmHNLBByT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8NyQvb8PVYCCvbwg2xojWfyTVP35LPxzm8nWnc2FsesSamD4vviRbJXaZSC1aLp19aWykhurtyaDGzAJUvEfGG",
  "key1": "5FeZ3WTCcGJf2DCNt8P5SSovM9qGpbF3dHVqvswEgEtEXLDyeEYVQji2x9QhEiyc871HjNX33HikKfC5XKsRTo8B",
  "key2": "2EwXeoPRNrSh1oEkoveto9owfmKTw5SUooYss4usGu5eX2TSZdJpPXzoEUnmhR2N6FuYg8LWne45RBqxPuBSw64R",
  "key3": "2BML1H3W6Gt4gjSF27zWXinAD8kMbqfB2cYc3QRU1oqwrF6pEAkYakk2aD39VuFy965f4sr8wqYjA9yxWzpcWkfG",
  "key4": "4tMZx3jk4FnDagcfUFvTspmYtkX9KpRq6mCHLkPtyPeAeuDe2ogzkqAfJQZqSUhyAauHHAaW7MzCKFoL8Piqc81C",
  "key5": "4mEALvQaPQUoVnE74N1A2hcjPW7VYciS5G8hRGrMysRcAYXXSBhEqvF6sCngQK37uewnUr7uFjbCRszZ4vAjYrEF",
  "key6": "H8GHQWEcionznrq5H3DrxoXwwXk13HJ3wPWm9GARA6b5nesxEiG3ZxuxTp97G9MFimvHUKGgqCigHkWbJCMRJoE",
  "key7": "4mZHKvVPtbdFFA6QurMTdXtPVrwqpjweX1D9AxYGUdYm3P5FoaCHM2xCVUUm6MP7VuBbhzSVgJn2V5yExNScDRtc",
  "key8": "2iWajjDKkXnJYCsfCVsJEMeTjPRE46tVc9PqgtsPfUhTi8xDnDJGYQ7bFAvYpbaD7fCNwhfikzC2sp7naAeP4udj",
  "key9": "sAkgQnd6zacP97eZeG9uVDaYdeekFc4Rb71268JwvQMDYse5Ee2SpTGveXFE1Ff2eXqed8hj6gh6WrUdiMG2S4f",
  "key10": "3R3WyqTwguNuc4ABsYWDpSmv42myxC4R21r6tGkubNLfipzHzWQ76CywouyfxqiHpFBxgLsqVNoUsFG3LhZrTTdG",
  "key11": "3Urqpj2niwBsSkdVjGoCdjudajHEzjzZsD5noVVe3CwqVCgKvNQVUkBJysoqLZwypYcNzvjfFs4eyt8Haizs1jrZ",
  "key12": "27haFpgpNivwatqtQRp6pG93JFt8V83nfxR58LjHBB3vdBX6D7VQcnuXiY8fF8x1x4uFmZ59Rco7TASriBPN6Ykd",
  "key13": "5a9rgcE8LzZb4Z9rQZobNDxskhsuwvjFTS8B2GKema9iG4z3erkjW6oyK3qgXGmQeKBLJXCUs3VbcMCR5ESuXLHc",
  "key14": "653C6b1MjJJD9TU33WcHo2wDnHs2Qq96pLq4FwbRWyrvLz4rciA8hSTnRBb2Uu5Qi9rQLGcFdddsWJKdFE85bGiH",
  "key15": "WmEe9a7aBiEf45yLigjx3NxTeAJATRAve8JmchYKYfbmKJ5qLARgU9FCxMm5iaQbGw35gsapFsnMb3Kbugr1kKP",
  "key16": "2uaGcbbbF3ekSLijPHQ4CoJNtxyfQq1u7j6NyU9yhsEF7vVTCAWgxBQZziTyziL9CLGVackKGYS6T9JT718bpv3X",
  "key17": "3HxpPFKQV1QEesLhcVCPZfnSecbdrH3jqXKoWRWMu3sNiTv7UM1LGwsmsbXRYRut6H8CbiVxZjAFw5339KZyJxM3",
  "key18": "2tUcz2jbNxmNogC9uNWfAT2DPY9gpvJsUYQLLpg1oMqpYhGwiCBogpJjkbHi9dxpDCo6p6dAdJVVsi4Kn5VkwBpk",
  "key19": "dvb8WsW8MQRsjkX3P9aVamX2dGjubxGmqECfvaDRNAYCgB6xn2KMiZqoePSRqsRd6j5VtTgvYzq6dsDXGJY6s6h",
  "key20": "3NjQQwQ5FJ9LwXS8C9bsUsyysizTkKBPW29cc2VqtFjiB7qJ8kmPZx6C5KMJLgNdBA8jCZj89kAXxsqbFG1TwPsn",
  "key21": "2EeEHxtdw7AFQzotfn7KXuiu3k1RMmqg82SDUe7tpTLaTdNMTt9Tnue6rLk5McxzUKQcTXWo3zgyBQLUG1vAoCTJ",
  "key22": "4cA9XdmKjn7wAmtGKY7QFZyzwBvKuftL1PfQTjmmME79fgH7KmtVnaxZ9GTEGQATo4RFJUPmaB9rXNz1ufeYY3jp",
  "key23": "bX5vf8pYpgM4cXSJ24oXf6dSmc2YohYzRYndkWPTEgd7qXchGAA2LWDAoFf4pwKMhp2BbaoSaLtyyJdeqQWYNAe",
  "key24": "39qKQ1cXXqSVrNCAMvAxxmhcvhkSfDiJfjR8zkF1wuVJowyEsn7KqjgkbWB5P3wZktucRpCw7fZmir4VrhpEKF7z",
  "key25": "5YpfC3xXLnXW8vxnDcFMrMguUHnTx6ZRDqoVYN4GYnKBHyd18JTVKiN5sCb89kDSCLSnLQXczuTNPPnEc27JAzJ9",
  "key26": "5munhjhpRWRQELrQ9GypaQJ4DLPTop5cyGkhH4QpCPuYamE3EYwTv9k55fVY92qi5Vwq7eEE2z22oe4kmWsFPhVE",
  "key27": "3XGPf22g522QECdga1mzBSizBqb2PvzUfJDAhJAcWYDfTY7oftX3G4xtLvnLWhuuQS1sgn88ZFkUKLiUTEbKVf4R",
  "key28": "31FyAmXhehrR2otV2Pc2Rc3CEjvLw2hpJjGrmQZePFutmX3zHenZcvxxoJpyNuCewqiLbe2uLyn14Vdb2BUiUMe3",
  "key29": "2xZqGdJoaUDKG7Vqm5AB1xsH5LFrB8rCVk9oi6DkVUJcHqjVpVMjz7eVX2dXhkunb3TxZ29yTtAQXxtvk84GSJPX",
  "key30": "63GqUJ59K2ogZcN4huk1UPtwLxWku8gQAZozbPeth9BXqFjS2h4YXUDGY2iEEwZpEDugV22o4L5pkaK4tJXrLQJh",
  "key31": "nSGqq3kD4SMLwViUmQSpNuxqMYnx7Xw3HkJT28jWnfG7razqGiXNvaByGg5fUnM5NoeWf8chjyHpy7qjc65APgh",
  "key32": "2WJMfd4Ttr2gWzqvAQznogXZv8pYeD4mX3B5FABXo3rAcPcNJZ9JmzZFaY7pzUFJswfaYfS83tzM6JdE7PP6Pm9G",
  "key33": "MKofGdYYVobbjRXuwZCh2QV6jabXT851MzaC6CfuFh5pPtgrJ58EcpN34NAmyCyqLtw83se6GsW5TyfMRYJpJg2",
  "key34": "4TtiYdAUGbRXnqC1kM31FiN8Dx6K5ouFgK9Fve3Za7oUxTF6uMcSpi6vRaJY58YWTRngLr6RP6L7V1XupHfFX6Ea",
  "key35": "28ZSAgz16eqKj6z2gyugRzLQYYvhbYRohA1VtYWCZawegUp5wfye1ofpfiEvm148uJ7Z62tYuCURBwn2zo9zY1QU",
  "key36": "5Ab5HeCygeiUV3RMrunCzW7GPbJ8mtbemBf49MGRGSDuhyHofRMvAmtvus7uAtLqy6ALcEToeoBr9qJYXXJhKCvV",
  "key37": "5Ro3gNTLNkt89sn8Mahan6mszTdJUR2hKhJ7F3VHzbvfB2XE2RaumATtsm2wZTErrjqyUFDJJ9rmZmaj5Ay2V1t8",
  "key38": "p22oRKMLekHxuXXgNSeSpC9gLVAfTG1nFiEhvgKx46iohdVdKXPyLNq8AyAcZd6m1u2UfdhsYQC4oLZL1Jp89gk"
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
