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
    "3KZK8jG1xtyDLiLXVFUfNMxwGaHdccC7482KBcpkJ6BA8f2uMRXmLrLqCE699FB23iEKe1oYZSVThn24fwnXShWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ev2EPpND96CRQTHmokccwNPSYG3LN24HmVfhJ6e347uc7K791iKHMZtPwD3vfyK6fr3fiKSMSzMpMrMbdsBaKDF",
  "key1": "WyxZ49ESWBxjPZXqYWXejiaeVGwvDHUzxRdEo6gEVFzLqCnqAa5PRz7uvUJ6z5GarkmN5ZjF1tumtj47EX99Pza",
  "key2": "2dHtaqXKw5hfuwZFre7weEBN8ipJMDHcDyi1PEEe2LuzfuSnnPMTxLjoqjtrckmHmhHNjevgDy3Fdyc3bisBwt6G",
  "key3": "3JoBovnE5T5A9E6iekhWuSQHzHAze3xVrSs8gWh332sFdWSFr8dd3VgfpGL1mAQPoF3t8ozf22pdvuSafk9eE6qR",
  "key4": "pNvZzBv9g5txAJ6sruw1xd91u1jiBzxvFQNm7BjizcbaVKN9h6jmAuFDVj1g6J1Hkh1RC9FSk9VRpGgkkZm1XTh",
  "key5": "2CPUeGJPbL6UdoeoFqEbfA9XCW4f17ebSNFdfdYuW2aoiMkgZYX8opwdingBhRUbYPZWycQUr2sHZnx2UJZBb1Bm",
  "key6": "4Q8aoXDH2f5qYtzdfbsHGQrrysDanQf6hxAA5MFvsRAV7iBvVk4DnfFo2AEbmfDe46CtjeJjWyf421qHzYTn4VcS",
  "key7": "3BuXBkRFWHHAfkMScuDzK1NF1BWiJfVzC55fKcFs67Ac1ifmDarJ9rUnYAVJomfYqr29QSdSGjxZ9rGMSAD3f8We",
  "key8": "4aq5GjCRvGN5NnRBpi1QKfKyczFVZGynYwbKXZGT7kAEQnyw1zKyp4GQ5ADUwLmcijWhEdDiA1VTZcnU4ZfNkyBh",
  "key9": "iE6ZsoujcTNCNkaxoTCdyWy44kJrLD3DGgWir5EBzATSMbP7JoVqM67w7XNoUFzXftz16aAZ4rw31Q1jkNXtRyA",
  "key10": "3H3ySpdrKY2HEidF8Qi9TqCq1A3JoQKuKmJNW63ZkFhND5K8o7LWJfbNpH2WjoWuEtdSDgo24ACfKV2qgnwxPNT3",
  "key11": "5iZN94C3WWpQJTdceuqjhcJvnSuEPQVELpYvJA6PAG9bVq97AgFRzhTZXidkV3Fxmposww6rfeo3p5xyWpV4qRbo",
  "key12": "XLxEPR98eJRnyN5HGddhadEesRqa8NfkDdhHS2UPQCvNgzA9rDYEircoWFWqH1FsoMSSnovRPjFnC6gbfNGo3DZ",
  "key13": "4kLh8UUjc1ej6tJ1uNWjU7afZJXE9iQo6StiHxjujj4m94MFyBKD5aHuviwJKnZ2iATzDvuDWfc3EAxueG5ECiXb",
  "key14": "5y2MwZwjrwTyQvcbEpK44iEDDS6fYPboGzRbiKzY6r1kUStxb9PuPoGi39sjcQp1tYiDzuaLdprE2SqKiywR2bfA",
  "key15": "2PpoPJFXpLjKTCfEo1vaLNXeJdSB2xrvt4LqAmHvHERvE2KuxWWFnLLXZ45QuDWh7Tcu9m4PfaihCPBHCQnchR9Z",
  "key16": "pAVALZ9LyLrymC1vvjyZKkQFYjykchLDmfcNpzshETETymmYpDpZEsa4SkmtQcuRy325zdUQ8Z9dmPKv3kQA9E6",
  "key17": "zRwYTSATQ4rsFAvTy6CPFjyRgByNcanQ3mdwEGLb56rqeUdhzp2WXZuL5589EePB5CY76NuyS53CArttxHs88FX",
  "key18": "PMKK3QCkhALjcZndpXTs4cJ1VdfVRaQ3KkMB6HVwTtset4udfsXoSYcTAj1qqXFSUaoiDzF7xE2sZSE33HiiAQD",
  "key19": "3cEnUrxb6621d2LYDkeaJ3FawLiuXkatKvpguaJ6zyu8BkV1zGpah7Koo8AStzaP2rWgqphKZ5YnQUnuakE5azJm",
  "key20": "2AxkGLrWegadXvGdJez31Q33vTjXyfjERVAUEboekKzMS4oa6grx3JdtimstV6sS7L17wQiciLVMuGZWxRsuUfJR",
  "key21": "DdLyjKp9ouoH9kvFL63oQUmyaYJQddyh2Qq2rvLKyB94pPLudcALKrRAuhs9eQAAJQ8qBh39tX3YN64HeGUoW9t",
  "key22": "3SAjYLYERp8eUhKJG7Jwv17NJifegjo2euzgKTpgVVf8ztbgKBnLaijBCPHzusiTgZoYjNWTgV91Stp6w5ExAGT2",
  "key23": "4tcwxEuv6gaGBp4uTwF9QsEKpZPZDN4jAurm8DSRFv1sCNes8cCKLizpYhGCvVBMfNt21R4SVzkn7XDBrm3d1niq",
  "key24": "H54UT5tnbRpKEXQEJfnVJQZJme8pMbaMXy8sLKKe3Cpvij11aoygVtehCFb1d56mEvVwAHeop6aWyKzQYKQ7kzo",
  "key25": "2dbmvfWA165xeQaDFnAGGRDDaaVhPzGHEUj6BEMNt6okF4HghBvG8m6icf9mb3RKPfUcKUZw84v5L62w7K8EjzJu",
  "key26": "2WTfehHbpjiU3NXVbrXrZF5YJw4x1fHhiBW7Aue86vBVRMV9hW2AY8mKTEUikXfNQ5uJEFcgCLTEF2Vqis72983F",
  "key27": "2PVUjR2J7CFq8NB3WgVP1CFqbz6LKKcPWGMh76ecoYUVSQQtVkoMrn2mzxTF7W5QkfXrjo2md9C2CE8DyDqMN5pz",
  "key28": "nzQHdMZREvpzKAxyHvjZjjYmasKZrxLjNXjDC6MB1XGJWHLrgCXxVbvsGe9nmZ2j4fnJQoy231ypod1MXS8Rd6h",
  "key29": "3kr7E6kpKDZfXY3BLr7AsW3ajsvCCkoxtZsZqRMECAoEBo4Wiut6TeM1QV55Z6TVYd1CbKKu9AGq265Y5Q8VgFWV",
  "key30": "5t5v7cZdxBGoiLHVB8J7RwAU6Vhycd4jiwPT4K52QaGCKxbHRPWXboGihbtwCzNPvk7Pp7m1sc9qWYCkf4mn3518",
  "key31": "2BbJkkaoNWa6bYDLpwRcQdDpFYqrFPNncv7sTA7a8PnAKtyanbMxv3xrw3gcrzmdi3NMEXfbhrnk3tgZvw4zP6Mz",
  "key32": "4z8iLiDUhduxeVE7F8AxxqYa86dXcJuHYxN9ycaTNpjseeXqW7H1fw3Hy6NsiCnshzANw6rwx8oPZy4XtGyxWoxm",
  "key33": "3JeSd5QJTm51LkoMzCeWFj9KFgxLjE6xypcgdhn9FJHHvJqJN6jrDAT8GG6LCpUQTEHF18Hj7vMnUsnMjmRtmbWN",
  "key34": "4KWFvEiJx56gN6GWApSvq3qfCarhBuWMponeshg8k6ULn113e9rsbNdHVt2K95gW27pso99M73AMb59yhBnmd5rn",
  "key35": "2GNctDJYXh4TLKob9YSPyg2Cof5CLWMjMCyfVz6CY2kE2BYY3AFNZHftCW9o2U4ZztSLJoHM2jzLZAcXDccdXQJS",
  "key36": "3LUwJWJrpreLhv813D1camnZ1i3x4SkQDrH4X2u4VUS8PgMCn9T3w7yuTPuFukDSGqw77a8NoLsakpZZ2jJrMkCD",
  "key37": "42hdQznd8uREgF5PHtEtwGSxmgpj2Fi6AjXKsBxYYEiiHMLHLx3Jm2GEi5BzP2ABug4BasQtNUFmLHPLg3wNhrPc",
  "key38": "5motisqvKF5145hXE4EYbpShQ6RQGAyXWPRSp3K72V1ZFpW1BzTVuqeLKUq9qNfxtgher2mLCcSNTRuACGQyB3Go"
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
