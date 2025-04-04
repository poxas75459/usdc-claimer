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
    "64qzoBBuvCXvdPAVjGpx5sAavMeLSrGVgm65d6w6162fvnuBSb1YzoTRfKfSnamDFvmD1hhiDXBwam4dJ1BwkBfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVJjwXi43pyk6xuDizECjLT7wEXyf19rYCy64ziECckruq1WN97KUxnR7oQg5inh7oxY6P3eajratSTJrmTMcY1",
  "key1": "4hJHXBn5QXFk6Si5gMM64raTwE47p7ViRHPzV7QHcxrmDbw5nr1qaB56PzaQDcJBhR3cWArDsEpZALvt73gnC9dT",
  "key2": "2MqqtfHeEHbjhtiBos3ieCtduucPgJRxsg4SQJuCP9jTUUb12MJM8ybhNUHV75Pz9jJn9TSkpzN94mSfFjAjBNxD",
  "key3": "2oA9qVB4jcHraaFtNT5DN6xMETJXqVWSdjeKa7Y7nBAE8Q4Ha5VU6kfXgpyzbC8VVXCdnUqQD34XPJGGBdLs7p37",
  "key4": "5JVuyFgjQVexmtHHjpJ5s1dVuniZeQc44v4RyiRQ5zcLM3RhELawWkrKibd2kbTuxKcRHp16Q8q7FZgC2hz5kUVv",
  "key5": "2yLAUtCPGrwQXwjJFn26dYXpuKxkNxR1BEib1mMiYgM9du2DUofen49j3AmhuSQkVaGMaxuyo7XdBrY1V811pP6q",
  "key6": "2Faa5m3G19AdkgprXZ9XNFyCrbfu4XPukcfnsfgYRjSwMHto7CkBHgeyKLPhRxTeqCWFtHbDsdbQLCaoPEXNM6u1",
  "key7": "337ybgM7UpeGafUipR9Gxnv8PVVg4Wh8qXiRfVkwNmrsCPyRDFxKdz8xp2ozLCf54NtdWniZUcCiCpedeQBChvuB",
  "key8": "3Qkuu4wmNxqyk5bEj55vnNX3D7awscJ3mhnyGoxR2KL2WDSe53yDRxuoLovam8nAJxuGQYAcEp8c4iWtn1grysXF",
  "key9": "UiFaTNrZvFmsSLz4febBQSn2T6fdnaTsqYawdajFYjJqYFrYm8jzGKhe1QY5GntxXPZ6NkEP5uzej9roqvV1RUP",
  "key10": "qA4yVh7TQtJYdREK8BLAP7ipLrw94afiDwm626jkHMhQhj9AmaZttEDyLJHzfj4Q8mj9D8zsokUrWD2PdKMzbXd",
  "key11": "2AZA3nTMLnZbFHS3ibP3Ghz9HY3Ze1LT9fge7wxB6qUqKxcD3FBiAUWrLUeYDy3TFJcJNcNXXmiXk9iraxjumyjM",
  "key12": "3wY25TcGDnNpKc9sdqbQuSg8PzfF2crka7pYbxPgm63Xv3z1DtLT24H1RmYE7AyBreyFiCVy255mgoNsUq6SVPpW",
  "key13": "5aUFbteUBzdEhbsSKEz6KMgsg1nxaA73H4Lw7HRLWsFRrTPtHE8jiFyrWyyh4bsEa9LCVMv4raJJq2tgdfAF4zDt",
  "key14": "2TDpcB2suCUR78Ub43MJDHaiBLpqFJd2ebg4T633E1qZT6tUGL8NYoq5uHi6zNv7PZkxc5Xtui3uyQH5evFo1cwG",
  "key15": "4ormoFXtFj75qA8qodxMaaQUvzogFW9Fx2hpiBfvAskE2VL2EMZ1zUdN1pCT89P8uGkzk5boCjHYaPT6T3XCU4iE",
  "key16": "8xK4kded2ZgaNy3yWkoX3vfBWZe2X8Tch1yNCNypkKTexhFVsUJ3b4EgXo9MKEVriJkCgvsX5ri1JN4XdpE8EQ9",
  "key17": "2LktwzAFhyi1bEFkh7YswCEgfeD81Vd67ndXwwZmf5RkyunyA6G92rxzcfjEY5oXF3uoyuZjNYVKYJAERQSyAZR3",
  "key18": "3cs8ooQbqU4LTFDnCLNtJBfuTXUVfcXhrvXEHY74gFx9k24R8tKLDzP2Czn5vo3TGEUueW8MpzbHU8X62LL521hd",
  "key19": "nxDrgWvte63KkAZzkTtbnAzi8Yg7cJE5PrbTzPyinsbdfLfH4YHjhVpixRM2xK7Pm4dXhsKArSL81BBxyWs9s6T",
  "key20": "3JmbPD77QDohAXvHQSkG2mDjciELVyZUAaTQSaewRbtdvx4GSn3cfLWQm12cAtpUoE7bHDShDxD4Mv4z4ExDDder",
  "key21": "CVinRfgV2tmoKRE9ku5y2TLNsvMSiW84xAcP6Ghba82Er3fhAoUwUjaFpndq9uAphEdJJmuGaoWHcdsjv4XbV3Z",
  "key22": "5kmYfKbid1DNhNAQUXWpLfpwtYDWF13pyvevZbiaUb5X9YrvLQgpWwcxwFETUjTG9ktURmKJxjYbU7bDbidh3mQY",
  "key23": "466cZy2JPLANddCtWpGqLizrkZkR4uSerVHnVKAjojjP3pkj3xMf7g9h68nGwxJgPMNFJJMbeejbvpziX3AWp8YJ",
  "key24": "58hz6bi7dNbfYNkhy8gwn7hse7L4aD6eSGfki7NwBer2JCYbHYWCu8iCbMqJVWwECNBbBTawaDY3eYfs18RaYeir",
  "key25": "58wPkF4CZMVuS2ZXMSEppYSngbkrc8HydwhzAanunbpdY3ZdBoHgLxVUz6kbH59KJiJoC8rWw8TzP8BLozBaDYKd",
  "key26": "4kDWUc4goBBPhMKgUU1jYxnnYWinhsUDAGN1XpPnbPPHsR3K8VcqeoLctL73bXsxfDG6a8TggJVpH7wFw7P31btL",
  "key27": "5QnDHDAzLJNSHitbe6FAKUY9mjw1LJkmEP5kkMmZtcpGKBoJRHZLT1AuxtKu296mJUqAbde3pHLaYuEToRDMc8Xg",
  "key28": "3whiTQHMKSxWHaMkMeuswJgu2j2wooJbSQWMuExzyDG8dAcFJa9HhTWmTzeDc7TU1ncRazq8f9d1QzKvKikUfJop",
  "key29": "42X81A11qaeqPTnwB8ZMEXp3cqDLqKHZxhjh28Wp75txDQGS5TUTDnpS61SrJTScd53R3KLDhQHDygnJFzQaX3vV"
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
