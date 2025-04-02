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
    "4Bt9QRWR2QvXP2X93cpvbh7kS4zjPgk1V1i7cz87LYXiepMFHGyiKaiDXrHxbfJAfMDViT8aDnW21ipXo8njfh9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wVsUrFXJFi4tRcZUUeaNR9xDMBDPNUjgbsqCjFBMbpqy13aPNETcu54nGdnQV9d9UyTin9CN939xcm8X9qPjEx",
  "key1": "3NYMGiehr5GBHWPdhxmmWDnNk4jnUb14aqGxDEwxhdfMhkNY2oPsqmYUp1pLUJKdV8btjbRc8SH7GeemV4bA78o3",
  "key2": "2HypckJoCpVSn8EmK96REx3ZZuC4Ah2uC3ddwrG791GqK92D5NvhSn4YiKCGsUfjQvkWcMa5kYXqjnnwQWo2W9Ww",
  "key3": "7K2fQYH7UTVnY26dXb1UKkWUkcGJmg8SDdS5g7ZUrSD5dMdMsu4tVcoxYF7GtRvHtT8jv1KPfb1X45522wVVzjj",
  "key4": "2FJF7iJmm5ZDUjkKw1zZhz6hidrye1mnbfkgw1HE5d8oUmCDmnP6fZRbvws44KRCrWALZ7nbbV8GWEEdXchMKYoh",
  "key5": "4oU5vvrf75vNjCgXsWVoQiMSFELuM4DaEjQzxPu7Yc44ytwn1S6Siz7vQAdecwivrJdJtbVq4YCAERzerLB3yPL6",
  "key6": "4FehCAJQeaFNordzjj89U6c5HiQD4CfFMUbyDqKn1hRxEp9mU2LmtYGY45kkEDq12MydgjUABpwGw2pv1oNcHsgZ",
  "key7": "4mtDczLeVtt2Mrj1AyawmjDGf9Eo7jMKoge2fTUMftJ9QAgFsbbCs4kgCKbjpEGciVY3E4HSYheZRnPa7QJKRULk",
  "key8": "eT8HtFLQmXFFcbrdApKu43ruLQLA3J1yKRV2dgdVxL9unhv8SqT5Xg8GcjCf2fKWdBoDZ2hBBR2EdM9TfzT5dNa",
  "key9": "4xgbb6oTWTEjdCkQpHHNSGijaVETcLvMwVmZzAv4ez95RSPsyzjQA61CPM6J1fa3jLgZAoEKNafTKaZhj2pyhrZ2",
  "key10": "4eUsxVJULfZtbKZB8zhmARibJqHx9KVFrtN4hzHgNYtJ4dAjkWdX4ijVEBJxK5dniiCrewf11oFDaJWAeKWPFaw",
  "key11": "49YuCaFuQQSTpviiESVLZ7cVuEmcLFEnzcJxzwQbsAz1y5z1UavoketsqxHKL4wmGvW5uYifb4NmTw5BbAkU5CnD",
  "key12": "3E4eExbkUZ7fNR3DSPsMSPpEfAZEB1GSkMnzGRmUE4qzzfQa55USdW5y1pDjFJXjwhnKHqCZyYz9FgLN9AzN6bMg",
  "key13": "5tyRmNTGJgWcELMgfPq7v2zX8GQ4TQk3VGswKTft3rVsmcJcb9NTYDR8NKSEsGyfyk5JcH8bkQpXHbrkpZcxwrzL",
  "key14": "57x7mCcL8g6JEaMLRQMdyVn4D9H98f2HyDw9UHgfMZT44v434CKvuaVoFYr5y83LyU4nULwbKyzp9SXtJyoBRoMB",
  "key15": "92S2kJLx5D6ErY2QShW191k7QnrWA4AjQaV6HRGfz5jgPoAXDRaaCwuGUjoZ7YGJiQat71n88yjNbgcuDc921sr",
  "key16": "4T4k5R6u95ehxR7QvfdDmQ1tMDKNSgcx3tgZRhdJ9MzPojUiray91S2QKHBuz8bWvBqG5xzJrx1GEALtEe1u5pMr",
  "key17": "4oQQ64AyGsrHpWYFxAVdb812PvQ1tacwByPZUnHMBQ9oXtiMz4U4gKmvXdmtUXwZ8oCbetUuphq72v8mmsokB3p",
  "key18": "3ksy7TsBoyR1BcQEoghXztfc1KZThfL5HUEKUbsWo8mNSsFezoizZhXzxQMUoeWwK9Q9J81cea6twApqxkrsW9vM",
  "key19": "4RD1Dzgi27s5XcMA8mcZar95kH5wR9baLW2FSW2zVwW2urPQ8zfqmLDaUBgP1D9g6g2oXb1kHvkCoH8kv4pcmRZs",
  "key20": "38kqiE8GY8tRkR93HJxQhhsMdDUBHAwcoCaBUp4bSfTqos5TWkHdxwf8w88uB5SWfmLpKWMVrkg2eDaqPdVqC6kG",
  "key21": "3u1G1PkemeWf8yUuELyrYDDGwnynwh4TYBXcxXG7UoyGTqtAmXtapyGRmJMjHFjQh5iNcHnJSHaKNhpoEgYXHUGg",
  "key22": "2mHzy9c8y4CrVkNvj34VDLnZHQg8TpXjScCD9MdBDWg3ei6GGC4YbZ7v9Xy1Xd3kzLzpKiQghbe51bk1zmZhvQkB",
  "key23": "cjjweomUXtpvUn9wL3RiiFnDa6fNuC4NaQub85xDAcj9oSJQmb2Deu2asna4Pn25yCxVhKyc9qfFJrzX1sMLQHM",
  "key24": "5T4szeLxHVWB6bkT3NixbY4PXhu7wu7eZRtMzmq6iHXzpDbpDXRtjZK4cLBw4ju4eovok7CXZvGLymu8USQyKGtR",
  "key25": "8ihR2NG9TVkrHcKAXvR8dVB5gPMi1CHfb4Bb5TD82k4Mjuk8L2goGQLcqxzwfQ4TyfSeDrSqnokCatYMJyzQrTU",
  "key26": "37EZoh5ptNV3VTS6arPynbHFKd5wFpAvWij9E7Kc4wGsedS6rLzMbsk1h2pDFSoeqSkQcNuSqyWQ1yeGvNuwdEqU"
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
