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
    "46PQyUPbgtdp7CBEEyC4E9vMWCmHUALwEwSkS7MpNTrkGEvWFWhWdUGKUk23ywVh6nPjUDUSjm63QntxdgE6XHMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VH7g5N4LWHqgqwk9iWnHXZGGTSNQqzinJjkVfeWpj4vHPmBbNhPofsvGmWTZtQTBJxBPThvaKoM3aQGVi4yfjjd",
  "key1": "2RTA8bJyg7Vf6zSQneoWdg9dZfRSXzpqLCvjZDaKHPXJFPaiE6quQNZLDbQd1AgbxZ8VU8q4s1viz5Y5VHYGWG3a",
  "key2": "645mxzz2qx5QyuNi3U44iTnqTnaLFdwFZ2nGPxPA4xT58rNjNsPmf9pdFH9wQhf36SS3CdL4eHs18NxXzBBxtNrM",
  "key3": "Vgh6ENa3fCwW1QBN9yo8VBhTGqtqD5NfiKEooaTuNds73NLdkmkwnBrwAzBGsM7Jse7YB1cnWxZxxdUFiqmecSF",
  "key4": "4UCmuSxX3QPbP8UrfgVR3Ef5fPH1KQ8bEAmQrCqEpHgd74n26pnwNBTTPToinFCcUrZJnRSytSGSEiGheFL2hDTr",
  "key5": "2ircNNjQojhf6jUTGrCjp22pyk8LwSZHwhmYZ2zxHkNoQhXm6HSvAVoJhrAw5DvWrkoNn1coDBMrh1mkBRXaj7LW",
  "key6": "3HBfErMmQXXdvj8DNL284G81hY1UZr8dh67ih49Ykz76kPZbMAQeNymGUf6hXyWprLUqZmTiWJdiwSnmyVRqz7yK",
  "key7": "4xcTQKDX8pmZNtAynYrXVGq684nbK5vjNMQ64BbGCbJXBPpbjY87WbXh53o69bRei3GSsFvb8Cq1Ao4nah6y5mMg",
  "key8": "2nivjVgYysgsqBeMitj6UHwAf59xgCysmxrU7sW5MzatvxRtK1Dqe9z8VMjqfoSZYiGJzyaAL3avGL2Z54NbQQHE",
  "key9": "fHqzpyLpibnwdBHpLWfFcF8vBZCGmDGibMZ7hGAExWfejmycLfmuAC23dbDnp8qHX2QiYveKh8myyz9fGaBnrEe",
  "key10": "3RnbVwpquueBGtzNemuhHEmc72r6UTjvEFHU37wMbqt5PHMtG3uF3Wz1vbPEyQv1FHHygMkJGgJEoLATnUmSgFn6",
  "key11": "39xTgFrVtXkv2RPxpiz3VfxFLjSyCT3PFaZRYH8WTbqgHQknYHeyJrb5oAVCL3KXYTaCAyxMhvXHRoScvRgdziVp",
  "key12": "4bKvBUud1p8GhV2yD1XmywMSJhwrDE6cxDiVsevCMLmVYR3k3az9byv1z2Rup8bbLsTGmLr1Jd1zuPnp5LQ9YDaw",
  "key13": "2tYZmYsp7Lw7dui7KPh649Fbnc7XP4b9Vfq9Gvj8kRnCSNSH1dq44EebSfxsXt5M54wj5Gq7nxabSZ9y616bHzqV",
  "key14": "4C3sNsmp5y9BWY13kGYDV2biEE4VtJ6JnQxQTFqHx7vMhVwsRKGv1f1uT1AJe9PxSJhz3sRNovBoPxTNWn1JHfmn",
  "key15": "x3HB6d9Tn1Vdm8CEtNLSdWAEmx5NwW23XZesGJ9us7DS6jv9TGEVwRWopvi7Dpu6zMwEsi2ktiMeDUBZyxePgpp",
  "key16": "2HQpMTb9zZJoh2hphqR6XnUtQLCNH8V8sKEDAR6siiKPNYUHBgA9bEdLUmjutiAH497w7UQigTkVEWQeABLc772L",
  "key17": "4Cnq2umU64KgHWPXyDVeZX5ekopuyjHwoj6G5YQWe8JSACqpZe6j28cLp2QTMJyLv9dQCiUgNrciQ5K1fvTXWsjc",
  "key18": "jSt5P8HKkAggjt7SK37CRANxY8X1S3GhnmX6ZZMGWZrNgMzoq2yTDU1xSJZKR9vtVurouRAUXpsb6m3QKLZyEgF",
  "key19": "4utHBXcE5qC7oH9kz7XJ1yMFQeQHmegS9WWZwEErivma639RyqN7uPvXtvwGPXoQrGpUxVd2Y5iaJ399ySoThPex",
  "key20": "3SQsQSjhmBtvoxq6ECQeyiE74SS5vjb4sxy39D4RXuUuxmKfKYtGkgZemKZMYmxMbuVDyQjNsMpLx7UQmvL7bCyE",
  "key21": "ehQp2ef8AnkgKYAs2uZbs9Te645R4sTKNu3kM7LConUj2z4tH4Stq6bucFwjpmqViAXpBP51nTiHZSa2fH5wSxG",
  "key22": "2X6iWz1MHPBT8ofxvJYMpXT5t3N3oug5DwdMh1CtbsrsDkXs9LDZM9eBhVWns6eMRSJ49WpX73vL4LrycWVvBjh7",
  "key23": "5x2vCW2pfxBSWi2djxYGbUrXCAGb5G7sK3NZRL1XFoGD7qwHLQtkjGE7mCH5bt9txXCXcLxaNbBtksT8WC135AU1",
  "key24": "66jtMZmffPu3en13D2uSfM9Z2nkBKsCtNXfFDA32b9HPj6aYuV3NgJKBG6KsrZvrstiqh4sySGY6m8obbo3zz6oD",
  "key25": "3pRn7e6dHmGnkbVxbfumCJHHU5BnDdXTYZpTz1XVn41UQfbQB9F8Zv5AFfkzDwjvgZUrpQEoTZSMSAccGr9JHZXV",
  "key26": "5uBTdH7uyducJ6Qk4pAbB3bxXgt74mqFoT5yS6suzBbKzDHgihnEcKyjixiaFviYMPgsLhCjuy3QvuH7pngdC4Cq",
  "key27": "4iBuCgNrtU7QhwwMrj2ZKsv44hZcLkS4hBEeJBAbbcg8P1S33tMWUacxevuPx1DKB54qirR4WFFtQpyYpr5nCx4f",
  "key28": "XbtvwvBoBgHvJ9Cyfj98ewW9LjwtMUVzkykuFKqz9eDWiNeHgZVqbfwrxNfPjwEiskkLrs5B8FGvBU17qqswQfx",
  "key29": "VBVFAWGQpbWV9813tufTtwQjP1BY1VoDXHGTGwYSxgRhVi6Sk277rvF7nyNtj9dn9s1tkFBbAmiAjvh5xGZ335B",
  "key30": "Dzg2PNjWXCGD7MPg4ZyukbKGm7jjXc1Mt2FXQmTRXDgK2Lq9GAktPfXScrEGwwWiERNFuFdM25ZJax97GPmkRQY",
  "key31": "4uNBsW2LFrVveq9XnJNzTFUnMTXSsRWfj6Y3txzDhumsG9HiLRg8c42bibwCYxNubTtDz63NMYQLL56RDgbZabr9",
  "key32": "4R5r71yJ8mwSLDdNwRkqyUS5xVjMJPMkvWsWqF7WaMtRwAt1oHk7AhJSvBCrTv7rRXdGfR2r6eJgrysaZaMctoAc",
  "key33": "5Bre3hbqBCvkoiGma1EeE5X8LTiWmwKkaXGryi46JgNNF2WYTrZDFgervk82zsGYbQVYQRJDaG7i78Hv4n5UqUDz",
  "key34": "2JRMsdDimsdEWT17Ai21mV1uS5U94D9VJ1CUEKMnPNacu9phZGJCBiqroehmmt8JKphyvFK5HtekvUZUDUgH3EKv",
  "key35": "2DXDJRqjV6cZTeXUaCupQ8FgPaqfGjXuhe8XQ72jhppsU19kqZpGpA3a1dzCmVfnFWXhJiPYgMm37C6Uk228cmXm",
  "key36": "3mjA9Mw1zuY1WbCYGWUqLTk2APRaaxhg6b1kdq7wMzgmfNZYauravvGXRncnVtGtjSFqkF4mJyhFmUhPHc6T3jZt",
  "key37": "avFS1XB4shKV6LRzLr6juShMmpYjsvbnFsfc5EJDEHQzj72p8nmgavTb2V8kc4ZuTJFRBsSGejwp9tUMAoRLVmq",
  "key38": "43NjZPN3n1cZWGJ7C1VnQUH2pwKDKr7AaBGSSTsqJnkj1YTyWfAqnUDyJtxEuGNeUoYbXzruJs1pepmGCLitHrx1",
  "key39": "2GwAiCdG4uR4KaoxEQy6wkrkdm3Vxv3rQmw2PCBNkkNAkGF4S1AP3tBzGWiH2Z43NkCrhXzuggKAv5FGRwyWTC1e",
  "key40": "61wjSpLc3xGUK58tZiuRoqnVWhkynJubdsXPydhFfLrR9rDDWGivofSa5q9FujJymBeC8nyxMPG3QpZ73W8XoDtc",
  "key41": "5AYhdiQBQ5jfquXcoiqyFvsVB11bysJEUYANisxyHprEZHSDetdu9apNUHoY18VhtFKnQuFRT39umFtKWkKtgWMS"
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
