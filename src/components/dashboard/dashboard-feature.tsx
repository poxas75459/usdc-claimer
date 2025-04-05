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
    "32bam2cgwoEs1EKKJ6MX5ppKjRq9Jxu9aGFtdP24FdGU5DpyQwwKHNb3ZpTbGh1GgdoarswJnoN88KUGCxdX2wMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyyfni2pWpHMTGJKbzs5tKgc5m3Wvucxp5jrZNRBMEvZBnP1eKFbgjpkKGaBFc5ja3C2GcVxchwpHcaEJ2yMYNN",
  "key1": "JDTENWwJmXZ3XiJYuTnH6u3fp6QUEe5GZiBvsQLJ4zjGYx6PC8fjanDjDTvrvyfoqZmESXj4W56ao9SYn5bu43f",
  "key2": "26yDdEdq8BeYvAqgqKw2MmYDs4b9MEoADMbihKYcaE6FxuufHL1twLB5ybevZFrizKZDLkXSz8ZonPXBB9U4s2nB",
  "key3": "28Ffk12T7QvDzDCCbcLxRvy5Qap5KaPhacWgQjpdK1Txey9Wy9PSF8cZ5AFG5VNL9CaWUG8ZWXtsguSQf7T2nP1v",
  "key4": "43EbH8dZ4KbhZRRL6wePRBc7qktVGyHgJkHWborY8ELnFW8xiCE6tGe4fp1HUHXpwxZRmeacx8dx5coXMXd99GUq",
  "key5": "4tL8bnKFEggFmSYkw4G4c7Zyy9Vumnf7RLKgRXVQ1wfp7ppbZ5X2wkpvU1G7yH3Xjfe8VPYWUuzM9CXkBwChEi7a",
  "key6": "2uERFBEkFYZFnjyt4aLLbv7JSDGZfYYJ5jqHKycvDa37w8CnSfF9rwyC3V66wRQd4bkV9mAo5UcJ5hHGdTSb7Ewx",
  "key7": "5hoeASfEhxbVKo7346sYHGP6MqirmfGrBcMGdNNQ97rSBNAuR5j2RbE8B2FgxizhsfACEd1dNqxAnsnDuZUMFBEw",
  "key8": "3MqwmveNLnrMvQcPFqJ98HGmdJJRW8NoUEAf4z1tH7PuWpFgXgVNwfQm41rVZTwPjrLJnv2KHPwDGkip1yz36Myv",
  "key9": "31gbt6PY78C6RbeZUdcZ4ngSiVf7WYWCrX7yK7ucC3xdUVpCVa9sMXhuzqD8d3qoKhxYZ2FvfPVPkXWGcEwmF2Tj",
  "key10": "56NBv6oWwpxG4jZoPg512QJE1awqQ4xEMTY8GEq4wJ8CLSDv8m7Q5QjwkgSwd4nqgMTUyznrZE61312xuTuFhZg5",
  "key11": "54N6t9fpnzFwivMASrvP6zxAqC69TA1DZhnYH3ukxtX7J2pXms5KkjPQm6npn9VJv9uf7RkTF4DW62qxxhdKmNgG",
  "key12": "4pLtMv6qwaUwy96VW1i92BCSMBF44BxN2jMeu44fD4CEXcaFE664ak9FCjz7LUK1BVUGQjE1vagq2CyW2Cx5eMiH",
  "key13": "2Fc7z8TERBykWyZ4UQG6zYURnK3BNvtadmYsEJ4i943x9GDqsM9cspM1Yn2dx9j5ChTNAbqsbbPcH6LobEgz14qF",
  "key14": "5RHk5PdKhV9gXsRbDVJvC1Wrw97n92Z78uc53SFdYaDT7KCnqb9WqZs1yR3EnYeTkDxMDahUcF2f5bgroLe2gXGy",
  "key15": "LGkoaTFbLWZdrL4zibiS3JQLAeSk6fb65MjiGB6ogkuK2qEARVjSuRvLTcYvecG9s9MSG9sSrHdhXsGyM3tQWeA",
  "key16": "2iDM9Cx3b4WG45tejSH8RZKxFmHwQSf9zzUDJhmFKBZx7maDjs7qeNUxwzJKs7XS3p5NgAia9PueCUhB5JsLdeU",
  "key17": "2wg29j7sPSuxTcfvuRzrmjpxvBGeU3ht1UkM1rYMueo9PhaK1Ykj1isPRYEi2dUxeeAFXNiw3eEunfPA4HcAzsp3",
  "key18": "3kWLnLLfk6iBqYWjQTc7SQeUsGm93cnpmd2JM2yCfzf43HFxQozaZA4hn72NJvrfMjYhm6a3REBfc8brYNLHnbZG",
  "key19": "3NvzvBYNvfwpT8jbj8JVxB2kyV1NygFbmmnCrancgHLtfY3QaRpYtrRfAAEmhWv3quv1kXCwkuLnenFyErhpQXuA",
  "key20": "4Uw6BVjjNx1cGAFXPVo5SgKEqxe3scp32eCwscTLS5QKodTdCEoGmKL8iYpQPdTp3aWLycDjn12ABk35piegZKbq",
  "key21": "koi5J1F6RnfRyLez4G96RRmVGGeNJS7z2Nj9FAa5H51iPUtSGbEizDmsx9BWcFHdTFJ4sV2YcfGsk4ycEn8jMNt",
  "key22": "23ynwpqXwUDqQ6DW1kyV4ZE9QafrPXdgmiGhbcGRA4f1DQaujHdsoYBQRyxk1D6UumYtZM6vkHXRoY7fgWJ5xd1H",
  "key23": "4qwst6QbD4yyWfrqgy5zKhDxYk6K82dMeomtD6EWAnXXZMFovvu8x1GpdustyRodvXzbuSdzVBaVRbjTj5gB2yMr",
  "key24": "29ac2ab7bdfMcoQGftUv7UHXuAhp7eqD6e3tJsawJkuQD6YYU4mr8iLQF5soj7YytKgAEehWVCPG9Fgiihi5LXqX",
  "key25": "4UmVDQRZyAoTFPPeQEtTwgco9ZPYxEZ1d2cSWQcE9botmVE4BsWEQeiTFQEQaaKUXBvchZyHshnrV3uqdEPR75ML"
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
