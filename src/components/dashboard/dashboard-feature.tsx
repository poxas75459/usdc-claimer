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
    "2g98DY7PxvRx7aiXzN2ekDfoYxWXbhSv758oKsFbGkqKGGySqkxuEJktb4jgHB9gLYCqurWy2gyctKZw4y4VUy98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598nb1xLvATK92bv3h76PAUF6FUXgZbbUzmuSnsERVmhmXTTjuSZ4Z3CuvWvKfPjBifxMDrgriXYuPC6k9JiPo5u",
  "key1": "3zrb5FZJbA1TmekfLZZaNY4CzzJwbEPiQ3HWmPXcLeXhkcbPJfydhFPHEEKwyUjuVwMGXEXmuKxkngeKaZQSijvd",
  "key2": "2nSgdDXd75XBLGrgQ4ehethf546TYzxBidt5LqUPSPBEyU2282xbDwYCk1VuEw75d61yCS5DWUsaUawjw5kPzixr",
  "key3": "3Fh6Tqi7e44XrfrtfyAhnd4QDsEamKexTVjSbx7w5EiiejtH5YgRqUYpVA2cpaioZFHz9mEP9hREeaM6hEUDySZU",
  "key4": "3NCU9AocPzvEWoMtzAFEzYsBmRRwGrwmrVoZdUz8AWAHjU6bTcQu1fVTozwJZEfnXQAfnwVj7iYL589bmyV6D2D6",
  "key5": "2JdWaFzqdgeXWZEuG5CByEwKLgf2BhDzGt7ZGt1Nhgduxn3KKxDwP5NreNbysRFZE6bPN6v2FSkionNiXMFtuJPH",
  "key6": "3kRpvdiUXqd6h3eTurjXcHxepmE6wK5iqqnrZFVt1hAMpYRcPTMeGcdkWBasvLeWkGyYPjGK9xQPgtqaQaaB14Cw",
  "key7": "512v24nLgF9Nf4ssjQsSQJHqauJXyK3zXiigYvhuVNnHjbAVUvi7FQdApM4GFEPwZbSxEPKuevUJhAeErDgKC1Qt",
  "key8": "42hCcCr287w8weKKFZBh695EAvEp9y3SbLCKJHGjkEbGMUvsSaDx3yVHuzHss4i8PNUxc3X7inEX82abeHxKe1xi",
  "key9": "4TXrL3Hr7zZ5LvwvNNMDywSTnqegajF9zXbeLmicgkWwHEgfuzPAsqR4yiLAq4zWjJczBWruejqDfAser6Rq54kB",
  "key10": "2YVqrUBB4p7fE3MZNHArvn3wuXTTk4jihNQdbJHh3aMVY8DajmgGK1jFkWY6bKFRnLcx1LoVFLr38YhtZZz2D3RG",
  "key11": "2iKRM1jEmwww6web8MX5dXJjGHeBFAzbJx6dwJs2hjm6zNX4UkmXHLyrW4UgukrgQPTYgoYbVZAEKH5eBMJ7YdAN",
  "key12": "5QRAA7bzgyinnrEdLhoHUVGYfuoU5Ez5fw3h3quN2frhc58J7soURS5mMscfRiMWfeaTzuw7qKo3mmCpyHqQsL8q",
  "key13": "5xgmQ9UeTFS9cK8mku2kfiGUub2gCEkptqUqSPzg8zsCnQbA1tZ8S6RNKtZmrcSg9pM8VKHvZSZgiHD2wRiGEEPT",
  "key14": "Vw5TYMXNvcPE4E3BuwrmEsuwxF3vfwd5U5tiSh1X6Mdu9pbKS7H3YopwpkYVZ6XVJoW2zgFoTmkaBy8XZwgzfq8",
  "key15": "5oFEgdtbVjfjAJdZpL4XvoNHyXdWXYLeUk2AA3hMTKtr95p92NLbgqs9kzrCHiKtBTDJDYhwMk81tBFHeFJyA6p8",
  "key16": "3KhKjZgWCLzmyZffx5rHMJpyLB6oJSDzMt7RJWNSxj987DFLhJ4jXe29Lry2qWwkgJZQVFR9DgfnfLVLBB3VfrzG",
  "key17": "GX8iYbN6AWZv6JX2MtVwt5ZaBzu88arxXyHcnkkegeEbixCdt5dUpHgARfiCRZd8XXqigVX2Y1z3er8H1HQmfsB",
  "key18": "jD6B1K7xxapT9uyG1WhQ5LsWYaNu3h1kXFWbv29DpjKhQuzLrwZsEjFdRjN6APZapMEBbZnk5wRdLxdm2yLN6k7",
  "key19": "4cR3JknCmJbin67RZzk5oFABcWCRma53BBFYZHyz121z1pmR5mqyqyuRQbJXk2pv4rsAfbwePsZ7wS85a3int5Um",
  "key20": "3hTSnyQfgYoPtqJpq6MyDbePZfTuJLgMm1PBKeqqYxrTAgi4uHra2M85yA5wpWcEmpe5m8HVHkm4tKi8cWE7Hkrq",
  "key21": "43nYUZrvVwFa1vaNE1ypsG2Mtk4arSZ5MUxNSh1ihEe6d755ytgYN7opg24uioQkAr4cFa5BvP9ukg9Lq4vqA9RM",
  "key22": "5pNzUiLtG9HPNr9mnWgC5hKWNS3ukpKxzaYTEPMsZBxBjZDXtHv5C2BqRRocKwA74qWVSEp9BnCj9NziYp8jKhWU",
  "key23": "4aKStyv1ZtoqLs99xSZdCyQUDepcrF5KAzh7HT45qmSRSsGdbs4agxUZheNAViSaarK1avhoEMgM6dPSSv2iwaTh",
  "key24": "Bah47VLoZw76g8iNVJ9md2JenVphnS6ZHn1c3GCqnFxjYVaawryytDGywPJF8QycfubJq5pX1oDiF8Z4xAK7BQy",
  "key25": "wLhDJtBj337UUZUVu8sYV22ieHRvYsk3gmaePiA2eMk8x1Bpp6UTrLEdAk2YCRpU4fCtSsUobFEja8HWeUfiqcY",
  "key26": "3S9HzR1N2PF2fXruTTh8gJDhgKiNnvaFB7i9QBA53CADXWPjE1VL2vyG2wV1XP4muWVUJv3pCXtQL6PxfBn8UQVe",
  "key27": "zNB5XCrgAX3nKjVLbGGVEEUWmhFZAEo1rzP2d49CwYzXdkANwNLRYXZRUDLmpqUETvrPxo1tgrbqVgGtLvC7bPw",
  "key28": "adjncCF3DcEzeN65Xaq25CGKKNn3fRdGohDCmqNGnc9m1CDSvGXnxFg9MpYba62y2syeYuwqFmMhh4NktyvCHnj",
  "key29": "2PrZkznuGmfyHiZoyYRaPk9khndyqTkFc4DsdeFKiQVAtRYotaaGXEQCyTVWtsJQMjpF1VVWxDFvRxeDZ2vXqxsx",
  "key30": "4Fk6CKgZHHnSY23PWSJQ1QH4HYthZpZ9mKeP1RC1fqKMBVZxM5b46xtYcorBPBCHyK9qevdQBZH51dPFsabodKJs",
  "key31": "EQfpQDaWFCwkPhJgKvcuMURRirf1DGLjmSv1K6s2spzAdfcnm6AZg2JgW7b9ZUNHgjcXrwX3kyobBxeDFwbaWGL",
  "key32": "5QuSFyXByfhWLxPGw4mSSW8pzg7fmKT9wSWreM7Sq2pxgwh5oUJs959j5w82tatCVbWHhQjzsgFNTTeS6WJccQc5",
  "key33": "551QhwCef3tp5EB1ebWPfyJaE5KcYw2TeE7AcDEGzSDHvHqtMxmGDWDaJ3sKcMQzopo768TKXNchKnXoJG3M5A9U",
  "key34": "4AvGwWCRRnyjmDBzpxUQLLDzhYDzc3J2aVNiPbYuuKaUKz52YdAQ7YLughi8yTHddHsczHB226iEUDK4UYRqYFp5",
  "key35": "4Wu8XQoGVDRAdnEkVtj8m6GKH7RkoS7wdr2YCuw8xwfexvHhhbgZvr17GnicHmq9acNH26mNpTUfMQ56MeqiauML",
  "key36": "GE9jPZt1H6XryH4yRjq4p6so7nFHYHTnRjKYkqRzHBuvPwE2HayLW3JRUC6ZTuY7VV68Fw7DUhL1Ct2zaqE5fZS",
  "key37": "4QjxGYGKAzmcV2oiDZZZbTpWFyZej3EffpyVMZfeKNrPLD5iMfPvUziV6ZzyETn6f4eLMAJyQfudSqWxogmX3UWq",
  "key38": "3coFgTB62RXYEcqP55zVzezwKRid1J6u5ajqx1jeAs8hvRLCW4AUmp569FeDjUFVJ2nNoecAeuHyWomtRAQoJZnW",
  "key39": "ZBUfaKZp3S8182FDoATaAdPXcBwcRPGhspk6EjPTHDQjTRq1bfeHYN7xiTGnyUGEpPzAs8JkpxRBmYnGMEFyH8U",
  "key40": "5atXCtYc5RAQNzf25GHS4iDrdm4TfHQtkvzXYnfx5o7ftEPiM1h787WojPsHwrysYiThZ8JmbUyap7kWxUWEKQu3",
  "key41": "bv1u2rebYQc3Rrz6uazfjG4gRB4Jg7coZ8pm9HbEqtFaq26eucfAcAsJAVyWG1dcYAeDnNkfxeqL7WSUemgCmXm",
  "key42": "2CcKjq2UmaHL5iN8pH5QSGASMTznTWDz4Kk4XV1KsptLcXBv9BWMWRga6833DnDzXwQzChpV3agWDzrap8bixvBL"
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
