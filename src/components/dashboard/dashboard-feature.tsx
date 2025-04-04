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
    "3MuFBiRLNdQewAfRTdreaFsHMNhfB1LuowEba1MdK4WADyHPXzFSNKtR8sXGssiQLXeZbsd9YxB4tkC1eV8116aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hcf5AmnJWKSrkSCJE2eYZU8i6xKaewzqEiuUedB1cj2mysgVqTjZ4PYTjeotttrbCheRtqxTRGPgsNHNu7QSAJN",
  "key1": "cqXURFyxS456wq5sSks1d69u7cFVRTiqq33pXen5UtardUeBSmQiWNvzD5ZMCtA9CEg5EF6hnzV49eXhShYwrBv",
  "key2": "2L61iAzAisVeY3hF8wQbuhsjKqXaf88bysGLMt8ZnwkcZGzxoZSRHEXTuEWc7jE8ND5m7KgG5PqnNFYd3Xusr9nA",
  "key3": "4CaikNQU5gMMaj7ia6NYyjdCgB9rTuf8e3D6HYnzrhzZpbQbP17UNcFM4gsK2m524RndQr7iJtYc8w6hLdgibju8",
  "key4": "4Hp6P4YeGre6LrRvQurWMcsX2yefAzvpnTWDUhGFi2Hc2Rvrdm6QS8FGtjp5LEUrZknZtzZdVBAgzX6y1A4AJDcS",
  "key5": "3G7sSkfKF93wQyzu2F1Gi4R64g2iqtHhtq7whgPQqr3hZwQozMetmzjkCt3VYaqpxyJDk8PoF7thA8RMW34C982z",
  "key6": "3jhmL7RzEHHHbQAHNVDDf6fVk7KzBK3WaXtX2A74Knd21bSxmjZbkzRjAKgzzbVuRux2gth5vKiDS5mbUtMuq2mT",
  "key7": "27YNi2WAoExrkDsY7WGBjn4ifRZzZb1UbExBX4GiJynfj9kn9BUyJM3rf76psWzWMTn87emVkz7ov1rT7ohoByah",
  "key8": "3HiRQKHpt8yGdd6W39ZWMZVGeBWDQ2aW2TRWm9awDcXpZ3g1ddwdiC4JkXq6FyeUWSrJPyEB4xLcmhHq3sQKwQqS",
  "key9": "3w4WvHTFktasjD3QfYbBgHJpKAdkaEmikc9ubVKkSoxTtYSPLJdLRvANiBb64SoixJVYmDPCoFXhTfEqNV2HKiPT",
  "key10": "3chMtYhUX3hzhfQiH2FFYHcUciFwmkzkdZ8dAUnxykWNFWKrqGh438JGGtjzbxe8ZoM2wCiMRe5ZjQD1p4JRpGCD",
  "key11": "4jbwGUvyBjoSCVuajom27fX7Mxs8B8jFcz872tyzbbWzyXi8rmXEvLMRvFw9PJzRTBTJxWnnVYupaWjjdEL4McMA",
  "key12": "Rbek4sVULzoganawLcfNJkyNjB2BQQUjBLhcaHhzTAZMwdgQhuNq6FgWD4CSaXLMAghqKT8QVsPzYXUSBD5kQiB",
  "key13": "QpfytRZ2xQkssdKeBzLede4ms9JC25onizmsVvDg59xnMNcRP3Bq6Zat6wxLxqhovPUTxCLNi8WoWzEGPZrg1KN",
  "key14": "4c9FwiM4s7YHNoBxatiUiVcLHYrkEAZdMV1bGhPwdtrih5kjBZPEYpvqqaeyhWiSRXty21T17rDZYcaFNw1e8R63",
  "key15": "2Eu6WUa1BSugU6pNCk8TVmf1e5Uk8kZ28eN9KTjHKn1AR4gMZX1P7trXYVSwuMNm7NYWRiWfJm5qERVg9Tvco88d",
  "key16": "3jyvUa2FH1jW9iYAQbikQt2yBMRbSPqAhpiJ6MUk8Dj75K4ud8SCu3Kzq5cmQMq2durKofvELTw7xRCRsdPNDh8D",
  "key17": "XzWykM7TgZchRD8VcLQupzPS9d5f2zntwtToiSdDdwGVrx64Tbnje2SuEZePz1qSyPbwCfw722XViFeNcFPApj6",
  "key18": "jjBMu1tUkYseRx1Qiwko7DjDh9XmxhJm6mBx17o7bVLmTR4ze6KX6LPx39WyTwPS9LgZiwToV24eWzFdvMvXacV",
  "key19": "3hhMcfEHfnG634MqCPxKQGPtP1Bx8i6D5wKE89FQCS4VRoT8KunLAgpLpgNjZJqsdVcM7GnjN2cgVqtXjuMainDb",
  "key20": "4mhgabFfZJGuReEbnrbdpGY5U7jWs9VQwezzpACGhogwfbJiPDZ35PLicQys7BievytikLGNJMBeZctsr2PELRcR",
  "key21": "5grJxN9vCFvSDijXXpdHUxTfSaWyFWJL8orzJGrfMHdyEe2GgVUUWqWt35vzHLDmpRvwYCfmXXbbQykggJBQi1Fv",
  "key22": "63n2cWka1MdLk8TxsY1VpZwc6RgbtRjRW5uztywL5zcR3EMgg8a8D6725z4JZk35nUA8thz3sv1dm9jwwvqaHhrh",
  "key23": "3n6P5UyzWvVZG76ADic4XP2U1JyemoDL7FxaSsecMPU5SGXame8pUEyFy9ueHxGdm4p1sKpJeEAvtTiyWmjM3tKK",
  "key24": "4Y9iB6p8Gf9MwFGUgqFrxeCk1ixj5Zv2hd75xiqu3n48ZhKqDusxDWY1781qoLEpa6XCsYinMrVit2yJs2neByiY",
  "key25": "3mM2AU5ke7mgFaMJe8mcEjJBwF1vSbVfnQK6Phabh8S2bsHGiuVcrxZx3B4hNgqXx5nqiwWvVMBVJzZ716gMj3cZ",
  "key26": "223Kz8YuQyTdvgTgbrqUqQL8xusffbDPZckXfidmWFx5zfQxoQq3BNsEckA5aPq9Sz4QXgUroyrnUhVgtgBKRnxg",
  "key27": "9MLv4Tkcs92GHmYRdbn8eNPeLZLSL97uNLyVbgTjYufH7X18Pa3w2gQNjyzW2Sho55mWgJxoGN9phJyP9nmDjgp",
  "key28": "23dfmDLnvWErmRBR96ETG4JtBJMCc8LeWbH54FvWPowePkhDsTKkRsJjiewg3cdg8pUKMxnKnUq8mrGQuLAc24yb",
  "key29": "4X6CAUrXbbw5qXLmSYYUwKatDQNNFaEYdB8vVfCZn7m5SPFvTnzfG6duNqCpyd747jiW5v9FdAuEamvb6T2FjaUG",
  "key30": "3pL6NsApaTD4SqUBcVusQvG77mSBWkjSDkQpdvQTAD39F4RZAZkNRwhTVqh38SuUSnNmr49V2fZwGdxiyKqcKkUz",
  "key31": "4hjjEbvJLa8FmFsThJCYEqnALvxM9QCQ6YSDZXwsrJpKdSkudBRNsT14pazU8hsQc2N73N79hqxzrj914YxZAV1J"
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
