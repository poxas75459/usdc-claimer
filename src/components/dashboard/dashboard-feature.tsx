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
    "63s65KC42tbPaUXgVq1D513eXdDrPHKmQJ8Xk1EHA2PUWeNYhXi6gGvm22WJnbHmu9YoNwXNMpZz89A2Frov7DhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iThunPekJUFnFqPrhKAXfcqXLPd9GDhXyQwK4SYwEHyCN7gEkDAZAoCLR11iqP24GGq8DgZBfnMZ8sCXKAfQEoS",
  "key1": "5oxh8wVqfarFnt79tG7Z9EED768tBCkvsSq4wmm7LHkDkdyYHxVKoyB5picfZdy5UD8YfrgN2npGnuaWi8a3xgJ6",
  "key2": "SxEaqVmgdWjNLDKv6sBHivU2D193rZ8SLRb1WA8i8em7foUGU3pzdWLdeqTUPFvepwh1LB9oGWStRCXKFTqsK4r",
  "key3": "VyxyH4eYKbZrrCw2uYHfxR7TZ9eP1C6gkjEtAEVG7haKpK1qFXQPQDjHVggutoWF7pF3jxrvKQFtTbYG5BbXxoY",
  "key4": "AX5Gb9YwjJr8AG4V2zDAfUrhAjS4DzQJfSP94QxLCETdZwMCBmACCxyE4TKYttMVfqUk1vDfwcBDXbpxQk5xqd2",
  "key5": "586dihknP9cMHJTVS7Q6wALq94tnZcxwcNAGvWz9JCU5Q4rKVTt1Xa759xgadHJHLYHb2uo1TkZC6D52g6TU9R1N",
  "key6": "2dACZvvYwo1qZuaeHvggyTSXwinBEQZ8vZ28kS4PMQBkMWhaX4vzqb1sbFoNxAzj24dQKBcredpaxPFKSs7ZcDFx",
  "key7": "2QXjFS2Aau7LMfPiANtmDTz8pqNNmZgwBp753HN7HXF4VFUBYYGew7ezyUBYNinpP3SQDh5qZoyMzSUBXBeGL7m7",
  "key8": "3PL5XDqRJfgPB4V7AxM4gaJgaubdnX1RSN2BNpWd4UNiUvwpr5cjPv8M7UbVEWwBKiLXvQNJaqhXKVuGiBnQua29",
  "key9": "2C7VAHcc7KdAGCLi2FPvjma2VLdgubvui1WvZptitmZ1joziThKpieUgFzXSPAo76LZjfpcK9cq3GdubBi35ack7",
  "key10": "5wxQrQ54t7BB38TTzh4VnFad1j9iDfuEyqycMTEcSFK8Nm9d9GkHfEhTuii6fXXAZtUsRtvTKdHsVrnqEah65ts3",
  "key11": "4LTxkvE25xwG9KL5oBb84sd5VHgvoy1PehXeFNrK5eZqA8Q2HtkYAzRV5syFpWA4g13BFetV2jw1U9x33ZX3z7Ub",
  "key12": "3qV5yUhHuASCsJE2dir28gqwkXegGLa6CymvcRYb12WTKYXDgxeReZwKRj15EV7YEhtKRgasm6Q7JWeNkNiaoThK",
  "key13": "3AZQJUobizuk3C5k6vrsuTzfDRVLDspiLQU5vhTeWQAB1A72rZriDRCjvsH71yDR4jBr7G6L7eH6T9JfiM2ipNcS",
  "key14": "4PDgNApJQDAyztWryL96u1Z8oqByhAH351zbkE1NFUxwdPGrgL52bFLbRZM7sEJDy9HokLcL7beiEnC5HsADkAVf",
  "key15": "5xZwnKyfUHqVsiur4UdryRrE2YKMeUS2jf2XKWhQ1M57Dtv4cMzEA1MKXtoXqAJBCjxbzzk8J4UcKEv74vnw8W5c",
  "key16": "mqDMQfrZKdiPwJFygDwLP2tUL7JTY2BreS2Hnn7mPvmaU7D8GU59xG6BMqxtpQYC4U6X3qpddwqWYHriYMvnKrx",
  "key17": "3Q5TrBnnthG2RmtVEJxmEUd5JUZS4VcJp2TdZMmv3L2jVc6yE3rHGCRX2kjkt3PXkUa8WW8HUDs4e9vbqwZwyomb",
  "key18": "21goyP3Kv4cpj6GfwNWsUCCfqMc7BpJoaU4XjCCx43roePyr36yo2Cy5xUUtupZTvDw7WytwnPM3zX7amWknU42d",
  "key19": "mdYSZ53UpEdRbZoGsbFd55feWW741ittNGC2iFmiM1seephac4VYtHQKqU819uS3EMYxrSF2dG95e6vvKrBCQsc",
  "key20": "5vVAn7h5GAy3wBUekFN7qtxS1xDpFzCsntKRZebVK6A8Gki1FCKqK9BKtbgdotHy9UsZFSb7tfujDJgrRNDPPbbj",
  "key21": "46YaLnFpj6RMDZFFigSMnqRE5ypAUUbBf51bf11k6cTR2U24tMiWKE2rYbQEtZ4urmUZhvfJX6fssg7e68bdkXoy",
  "key22": "5v8BwEFbwApznVA6VxzYTsuLP3691ruR8E1tb5jYeekfL9wPvD4NAnySFFwFbteLdLYoiCchHDJvnnBLxvUsT6dH",
  "key23": "4cwetVBQRM36kJ52PAABHrHbsbpVWrzBXvyMScciVAr4PLnacVcoBSYU4iVqGEJLY9rPYQ9D51GZebQDhLp9RqqK",
  "key24": "2Gj2BCMga3mdAQbyx2qiK4L6uohkJQGTuP6qYxqsSX3u8P8h3y4rKu3sCMSc1DzQL217SmYvbwfpdR6gvGYQsuyp",
  "key25": "cWrKR2RB2vXGaGdtgYh6Q74tfyqPHSLDfzH5dFGsgXwkCbmaYRRHqn7fFgUk5iQMKCRZQadKawyiqcuHqYdc6Yk",
  "key26": "3feM4CzoBGBxmJtEWep7LUyTwmPePYjSTUkVF7fniLfWQx3WJq2mGj3jPp2QA9Zz4diNCxsyQDdMsoAMRL4Fo7ZQ",
  "key27": "5PzAkhuw7qQdvkBkMbk2BXnVrWc9WWdEpkQE7mQzqoT6bhQHPWntgSpAfFvs26tM84unjp3A6Br2Ba6JBwauheKy",
  "key28": "3DoynQqNeYoyP67qyEiSDU6KmrTSXzK5vLALbXK5QPV3xzhkWGhp1GdsDbYhHUtRMYdqumxx49G9chzdhgX3aUf9",
  "key29": "nd79YGZU9fBJERGdNqde4Mpu4pnSPivvSonKZ7AB8cEZ6bkUUgGWJHKvCkEbDUPQ9U8EFDvHSmRxu7Ln2zqPd3j",
  "key30": "J7z5MwvwF3s9DfXmLCEzE9c6itg47bHQ2FxCmA59WR8wbfH5skUvZPaVBJcsPBc7sYXX4tC6Fe2cq9fQ9FAKxVS"
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
