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
    "5Uyqey4XqMPpN46QWyYkW7vwKcS8tNLtq1dsp8KnNMBAEXaieLgnSDBB7CL5q5TyqbH3iAAs6eayrvdbr3ZbMPKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBQPfDAon5A7rcvQrjtydpZL349bn6zga95Pe2jz1rFdrer2FH3K8YD2PSNnk2TSEQJuu5sKBNLDzoB4rjMEkWj",
  "key1": "TynJuMVJqxforpXCLAHWBBNPtCHSHZmrp1Anb6fd5UySNZo2n6tvZnXyi7gT5kfUfJrYyxRKMJRhA8vGDXjiDTB",
  "key2": "Ee8VwCLUjYSj3jBSUcMNmZwxG82hYXJC4AS59fhJhzCjq6G97Q2VJajW8eMAJs2nnHFW2EPLHpHzwFK26Nn3zyz",
  "key3": "2PnFYigv3Zo4eb1573Gavoshykc4it9FfquYUxVTnKhvCX1re7tTji8Vm9E8pQpUWrFUvLFwkxvfPeeDX8iLNS6V",
  "key4": "4eCfUwMR5cPJCHAGR7Q9Ww6kRmiA8Sco3dKKRmebs4a8Wxo6Whqp7AknJFxUJxEnW4UcDDdxk4DCM5p1S42XQ88p",
  "key5": "3peZbTqPmtFJDBhyRoiJ2QKCeudL5Ut6wGPHYytWnKLafXZTUSuCXD866rA2CppGQsK7pQUGZynaXGK1MC5RZmLB",
  "key6": "4LKpQiCFeg1No4hjiVNBCALtJx4PDTJisCYgL5fATttcgqiKWtaVyFZP8U1vxdxKUwQH7u4GBHcG2w39AvAMsiY1",
  "key7": "4AejjBjWD6HCx5FuQTKPLV5WNez1sJeE3BmdvLKABwB6vFFgqzgFRDtkhtRpmHwLCykdzwzF3uUhUqkJ29EkprGi",
  "key8": "vNSWBfWPzuuvCMbJeUVwon6HgY87E4nSJ1ATu4726ugZ6WaZfVDBGmaWhmUyeX4w7wWKsoj9iDRPnThGgW3MVMK",
  "key9": "rC22zDCEGhYRwHcc66iW4Rd4rFHMHq3UASJ5FvXzqYwwfU1GwtSMATLiz3SC2mEFTZPc3od5xKTwntAw7uGm1Rw",
  "key10": "PZbJtqcgiRystYU6Wsm7yR9grRihq25AoPTUnNqRRR3oR6o6eQdrtuW6n92MDVeNSF8i166TcakJzFN2UJzyqC8",
  "key11": "25eYtN9M7t527pkjRrEHh9ESCe3rHqKDtfMFwZVq6AgT5eyBYWDM4dSA3jnK6gcg2zbkS7wEL9tcsTVzrAnr7DkH",
  "key12": "2Aa8bH52GMuqiMLDVLbejZ2xw12fKVdSLaE2X5goKToMsyWynuj9ZSFNViN1hJ3Tim1gTzFEvAMt6nWFrUtEWFBx",
  "key13": "2gUBx3EzYbH7SMunyT1XDHaPVYk4vq1NFKUuSrw2TK5X8QEZa68UEt7ieErv56Fq58Z4orEBJEgYVR2JyowfZUFz",
  "key14": "4zTRsBK4QteSJ9MPPibxvVCzdWapAyi5W2yJtZrDxzwb5F6DJr5tF6XGs6QCNxmLvgsC6L4b7GXmfU5jHn2L1Tsm",
  "key15": "2qwYD9ErQSm8eHYrfoCTtbGLMQmGv8CbWdixctGKubLhXniRfUbGFcos6McrJRuMqqWrzpajpE5YEkSN1Cwn2scy",
  "key16": "653pNxJzvevXZZp2vyc5DhWqSNB8bqmg58moCp6YUEzYz4r4emoh6EhBXRWSkAfGSKHHfd32QCj6PotvwA2W3W3C",
  "key17": "4QhjDhmczrpmyjzAUSFzqNCcpwsw35hZ513ZsktKJn4NCSW6kgEFYCjXGDurQsGtqXrrZ22DorGSqq52DSNvrJQ4",
  "key18": "43xAu6xfd9nvAszENEfLDGDbMXV3RY5gjn9WWEFcmqruh3qBABMRHWZ9qYWLa21HMQ53V1MDr5TugRARaLEh8ZHf",
  "key19": "3oF9UMBUcFGd7S1wSpWnTr7NRC2n1XXwesgiNHHJ4Qajr66dTFuQhuusvNYJxgepzbieZqYxxCWc7AtykbXh1QGU",
  "key20": "4jZ2wXyL298BZy3n6Hm4NHiE2QFxAAoXievgVNcr3c4HNQh87wN1F5nPEP59rWdTLgsufkpLJHKyACq2veWGTogQ",
  "key21": "5Hjfco4seo2Z9iAHnw3S7hP4xkAsDirawK4tnqRr3LkcYr4Bc27mF1Vdot3rUguCPgJxijqwgs8MGQsf1DicMpCF",
  "key22": "2SawhKpE15PjTPquGWA1JtVMDSQfL3JGAodB3QSZAmewT6YRMtdnzGspnXUGteqQ2vbu7SySMvdxApikZ2dSNd4U",
  "key23": "3ZzUjH1XYpiF4d3NPPbCW2L4tfWWDKU4oJi4eUuewaDHrQgUJM3duPhyvRgnK3bBDKC3EGoNRULyCWnjpERUV67h",
  "key24": "4xUm3Qg8eykYSwpAqCCrRfk1b7jBdvys5vHwug2PZLgdMWkERBBJAhzsJi8tL6FqYMp6crZRvprJGTrtuH2xDYk4",
  "key25": "3QQGGyJXYxKeZiKktTaPyBU5FBGSqAQfSSnz4wy62A9mWWEHA7ZVXXAeCKkdYkVq4WVHKo8dEjnt8jQocxy8EeJi",
  "key26": "4hicqSE5q73wFLnbhCwbhwAAirHw49m2sftkbMhnZSzSMsPTwjyFW9uyrVPgySfd8oBXWTkPJwKWdbUiZ7Ff8PVG",
  "key27": "5kUQLvXNystHk8sEqCur82QDsdt4ELQBxaZ1326PEVxgLQL4hSpvf8zUnY6rvpavJ3q4kYoLJXmzJa8GV5dFBwZC",
  "key28": "4T1K5H582vdVNVZF3qnZaJyFoxLK6JYgiHUEV5c9q5K8aG2iczwp7e5HndMyFjCkhr89WTpwQJQyDUY5sBMg7WKH",
  "key29": "yGN4nkkq7pM5kybsx3rGMcE8jSywZYZwirzsWXWjvEJK9DjwpqYo8A3HsLFjCCGfFbUSuS5EBX2vKfQ6GSfUA8b",
  "key30": "4EZ58FU3iY2qQYSgSRQHKT2U1n8YA5pfDRhKYzukJ2qREhnvqmdd96Ne6mL1C4zk1UP3q1iCp88HWniGzn1bugG5",
  "key31": "2TPWQqQp7GCo1LRuduER9LkqDTpStAYsBksqJMGe1TPF4nKq6nEtxKBrZV75Sc7Y5QJYiFSpGavx9ZcszTmPFkP",
  "key32": "3J8JnQVv1L7h19Ha3kbZdLxwN7f1CkvwfVrteakWUAidnQYovcSeqReZf1sbucRmAsgre2enRjBwch66KsHtAN8b"
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
