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
    "3fN54SbKQs5VDsy4fc69bhtfXx2LPNsw5v1dk9rea88E25mDRufqjqbBJrP88ix7hv6Do5ZNka9tgma7JHRKn6o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAwN4qh9gS5pLK7bYe75gPhjmUHMuKhJiGLPR1ozrkbdzWPm4r4sAeUhzScgGWVz8da6engLsU5JUWkea6y6mr6",
  "key1": "LpEX4ozW9NUHtCr6U5X3RW61hT6Mr2oJ6RyWQkHiNQUFRxB52JMxu6MksMKKzTPzGRWzWjxqPKwNMB6JEm6SofD",
  "key2": "2g2QonTQtxBwCDSUEcgafP76NQ1u3sGEFDVjYNfcGhHPwYXo8MBwNsp2EvL5sBDtMwpu5M2qgx4s9xjkxdnrgWWM",
  "key3": "5L4ox3HPVpmd5d5FGSCknHt7M4i4WN6c7FvVEERDyNvXu4itYeVp5oSfaVkx5QsGhcW4h9yBXzdurhPooikmUPJ8",
  "key4": "3o8Q5gdZwFSbQHX9fBHigwYNAQCrCYg1RPn7Fdmxe6BuBR3AHkCwYMZxZFJNvJcyKpohyaP6BAzvWrdMxjuj8Unn",
  "key5": "pd1X8zJrz6amsvTmckeHs92J7SNynrtGpnxA1h6roCkwWLfcCaL8L7QRAGUeqpsSmzjvpA2BT7MCJ4236AqqYoz",
  "key6": "3niYAnbZ44b3UDCPV69tq9ogALboV7eMxeGgf5kxPuviZ1DLiKqS3BX1HhLLS247B64kS7M1cTB8CXJB3g3LSP5t",
  "key7": "5ppUfTMnD6qzEhFiL7UzkLCxS2QZMVLGdVsGMzLfPryAJzkh1zWNubFrd6uWZUdziPdtYyhoKP92v4QLEQwFkP5t",
  "key8": "3dhA7bNXKpGaXpQaj85rEvF4v4NjXhCfkTSEqwHWtHBAoByd4aTGzGAzSKCb3w5AyQU5BFuB1ysCyXcjX5UBhxdh",
  "key9": "2NxqeUCiatbGSGnjF1BKg8mxqdH4dD6wYZvY6eeBYaYt6bjyHJ8bDZtZFPn1JCbi5QtbZZqdBJvP3ZgnGff1NESQ",
  "key10": "2AdSaCNidmdkfvsP7diLuGNNtoTPaiCMftgdRTKv2h5omhsW4xwsyaVaGW7cDY6caWLh8WNNK1QtC4pmd5LzCq49",
  "key11": "2BKKZD6V81ERqXwzWKLVDtjPRXRWN4QMwJc6yByZJXqAZhSngthSmr3ydjyHuSxnto5AzrBnfDqN9mobLnZtESmM",
  "key12": "4qV19PQpoi14HCJUJAEYhhiBCoejSvXVcp2v76MFkJUdR6gi3YrXHNAh8XyATo9bHbw3ZKQkJeDzCKX59reKZYj8",
  "key13": "2C1RKTMH2TYHh2zzUxs8XXSf9VpM3rd3YJhtgK47gCkcYCyKrCamvbL4LaGmurgtdeXi3nfuHtZ82j8KLDs3d8fz",
  "key14": "h4y2AeXfgFZkGo2s34LDN4hnzQNaL1ga1wWKFEbYoiVRPGZotGaYWuL6c1vT2sWVjzTeXzNbWNPsemqNMaWWJdG",
  "key15": "3PcW2K16U8eGxqb5YFpH3pHncD1CkWTW3jP4ms6aBwAYz8HTuYCxCC687U4Fk1NGnJd3ezYdxKL6KMoxEjtfmJeC",
  "key16": "5cJde7WPNCSPs6rTUPthjoMVYxNr4swcZzMGmiSvJJcidAoMg2yp3uUascxd2EY5B4PUAx7HtXeDb3LKHjYZvxCM",
  "key17": "B3tA2ReJ6sxkfxzmX2Z4Zy4Y5LgNsShv3astm3MnFB6wXcVKyWWZ8nUe6QcpqSZY1XYG1cwH46AagXK7q9t6oBG",
  "key18": "4oizfAg2S5DtwfL6WiY6QTQgGKzr4vYP9LkabXssXukg2tzrVcBy8dX6r7jGuKnsqK6PTBTb5AbcwC7uB5SxQRZZ",
  "key19": "2RbxTsXQ5QcQ9PgFJ5dsDoQEKfgTuWsTm6iokdvaNDjcLYCmvrL7GxVfLSnV2CTF4piWTD8PNcDDQZUZw4haNq6F",
  "key20": "5JyAiTpLJLsCpk7JQ4B4V9KskpR7K1buGgh5Mc9pRLYXkFiTp61mFux3B9TDhjKH9xBLek9gyaQgZMzBn69psBaa",
  "key21": "5K8cU9rjEHqjo5Ew5T39LpYAjUYKUxptATAzQzTGeAMfeuP9xVGfWMycCrG721VXiwaNYCPHqKPFxZmHX9DTBJmS",
  "key22": "sZnqPhdbxpheafyHG5rrccNvWSfHRV2BCeodw11JW8sWwJhP7HJ5DxgRufNHMq2wGPou2tK4xZB2PavCiyikD6v",
  "key23": "4cLW6gjpmU5ofNNqREwDzGUEouWFXrivibmbvDBJ5AbJJv4TK1WSaGYvfAdY53x4pQ93PxMpR8A7r1cn8goW2cbe",
  "key24": "4kScos3EJa9wyrGdbYzug95nY2P9rvMYC7UMwkuHSyKoPf8SyUgsLE2esCAYdYcC8g8rPr9RwePV5Het24e6dRoJ",
  "key25": "48VtnZvANbaXkr1KQa3S4Q2a5A8QG7TixARzP4u7Sd1j3LdZ92CpXM914fhrPruNvxmNwTw2shvmegkyQv5Xk637",
  "key26": "P3qgTSUZRvBnP6CGkntsx4NCnDf4T4i4JZ8A3m5UoXfgNvoeVjbg2H38qvhZAXVjjtskyKLBinu3dnrA2ZiuZWY",
  "key27": "4H77vtiz9uZG3vc8AHeaL65uHp2ssWHMnqRbakhjZxKcueqKoa4j1cXh3A7XpNgV8LAqALQN2RC5bB81vmKUiuEM",
  "key28": "3RA3t3G8nUXfJZTH6umtcoyBcUx9J1DNrv4tx4DswkgvSUfacG4TXCx4Y8KueAmLaua7qPmSQeXuZkyNX8tnZEYh",
  "key29": "67AAva36g3FmobHCdTbZeSB1GPMf756mLTowdKR4NPGNmQiZ1p4YJb19kZUb9pVc76jmTpmApKUDsXvCc3p83JU4",
  "key30": "383AV2tM9D3VkH5qog74B1iX8Mu2Yn4RJNPb4256t8x7cMdQ7tR3aAPRpGwcaux85woPf1sKPNhwfru1UEbpeLDj",
  "key31": "3wWzSueBWF8fsdCCo7EREji2tTiVjHKHnHUSVMCy6GLChTEwNic9bakoGf7x87bk8bvEyjozZXj4tmmTzfZeVJru",
  "key32": "5uHCWjK2Di7kuWjjUy3SAPRubpG8qbVzmJcGbBf7ELdD26YCDPLDSSkiYHw9Wi3d6LP1kmJzwk896pRrBc6kwPLE",
  "key33": "5ZiwkBQi6vV2CT5D2mS2G2r1UVPLRC832BacUg6eqdN4uLfz7ubRzzRAPrk3LsnZsyWRXghm8CBGJdymK7CQkfqK"
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
