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
    "2nbwYX5q8XdskdwCW5yCSQFHp26y7p8hrMva47P5eLTpWgkxT9EV8Nx1DA7a494PC2QWvzuxHY3vXnCa3hKGSEKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEZuumMBTUkBUEjicTunBd2Y9wKyLL3twLu1gUUpcXAxXuHU1USNZLn3UQVZyWQ1RYAecvPdECB5xHDGiJfKhK8",
  "key1": "44TQJY3UWyH4n7m2nmSFr4kLPxxajdwVPTZGsFBm1RXCb51FqGd3BgENUE7F7RrhCQ2wEC4Qtw7QWnrV12MLGKTE",
  "key2": "3EQcphrGHwyeTjPbPRR2HEhHi5xFB4gau3Ma3U5u3yiGd45zUFYCFFY6N28GqEWdSs1g7MQ2ufxyAYCyhrH7uA9U",
  "key3": "RPkim5wJyojhC9Ldqk6qWzbkMckTzzhx6XJVUZ4tk4AZYw37JcDMnL24PmFZzVSqSR6fYnsgtzQCYqcs2PUkBU5",
  "key4": "2qqF9LTuf361R5zSWkMxrqzw2jcM1kwUmg2ytzFum4HfHvqoufPsARTESg28gYR6tiP6ECZM7gMNGczrBN5JbDNN",
  "key5": "3NC6w8qrFsuvsmuFnJBvaM7GEa8duDqPxuzEpvoLywSx77qmzVa7XiKoNRcJvP4jCvqqiYaBvypkmk5kt29Ud2ff",
  "key6": "5NVtV7iu1BaHCmbVDcSMfko4AJraUb2PGsZ6Yt9nJE9hBgjUutm45w9fB8ihjYKcA2jbttGsGTv3FUZAdDFBiYfp",
  "key7": "5a2dKJv9kkMfy6BPb7xdsC9vdC2zvnYHw8dHCw1z4kixwn8bU2BAAHemeBhRf4PdzzEwuCgv2R4aJntYfuAqG4HZ",
  "key8": "5pdrrfh9iXedEpSNgNKGbAeKmV8DnZ4enqA9Qz4sNifVHkwn3YtLSoFHLZdAbGotpHuVoL9YCFNX6ndmfHaT43dQ",
  "key9": "FXVjGndwT7T2cMAAXnfauuveFwhGhpmXzq2iujGWKEmQkfLnqg7MFtABtyKM5poHXTGMUwpMWbKa6PjrjM841Lb",
  "key10": "aEZaHxVCtHJQnF3gwJB3THN3aMmVr7PieFyK2EfN5fMTSkZFBVEcPXsKeLAHDLcX3qcQZNLnP56yZxctbkeUSM8",
  "key11": "5Fhzh8FVGQ6RR8MLRtP5wJ6z5qvvwLMaVQiTfpWqYVfUtKE3UY3QELUALxijfMomeeJ22FEtxpHUh6EfH5iSeJ3N",
  "key12": "3fTUTMqiLqpZuEk2yXoDaDhBpyb4TtoaBGoNisUQSuaHZTZmg14utkL9BBF1v3TSEWgKfaduBXwY4cZd48iApXf2",
  "key13": "4yahfwPBzbkocpArge68FUzHshjm2tNFLgDyLn8m87eiF3BLBom4ZW48L41wHte1K6Jvgdg94MzpnVD2RW1RKJNE",
  "key14": "5hZJm13Dqx1MvDaF2jKch7VyaMs4QsTSavGkhbaLtEKwEGpzzmgRLgwcPHfiiPVT2MTGP6zSFwA3sDepiT7ukhLU",
  "key15": "4oCMyfuCB9euPgKL5d1kNmhrpMbC9ppf5azVxYHJMihM5YjZcWRTS7qo29gMf9pWzsrowFCAMQ6tSHcABCyhduYj",
  "key16": "5DFnQ3VJGBKpj8dXskqP51XC27TwyYgSpYQDmbvHmU1CjE6HAiRMRdYBBG6vmoKpPFenDj9FvToYFA7aea4vn56G",
  "key17": "4vJquWx2eRHWGhXNdR2L9JawU29M37WQgQuhFEfWdnQyuNVGgZRxUcK3xGbDaGNkEwjZdRgtyGQqUZ7riWq11dVh",
  "key18": "4MKcDoGDi1WPggfB8TuEw6Yh1z1dqpq81uzWs541tAjgdwoLfUP5txDe2ZUVZfd823LBT1fo1CXUmpR8UKyoxZ3z",
  "key19": "4ksTRRRJNYwb6Brgu7cswaTpKPGaR4Xqc4TLVoV6Ty7joRzCgqk27QxToNJp6azsm9hbQT2pjEjKE6zk6et3dnyK",
  "key20": "A1Kk6tH11C2KfNWm9qSsJu4S6AoqAaqAQz1bNb93yopBVhrd3X5e2AJusuAPrpBz9w72bkhUqHZSMZU6m92sBeX",
  "key21": "3o2AJsa5fGMkgKFjecU5RqEEUtNVXeQBFGwxUVkqCJTXoGDx7dWLj3EwTFRtQCX8UQsCVxBCwSSEk1T6CyYyVrsC",
  "key22": "5k3dta5Ds3EtFejFbsQdcD6eLs7fqHUTfAH5u7iLbDxyJE3o5besPZcLhFa1mmJzXUvZQQtCqjBLnDVtJjPNpP9g",
  "key23": "2aeqhcGJM3CGyvY9tfkpPiv611NT6znaqAs3T2gTShNeESV8y5vRYW99S2UCqQTm5ZkSbPtyeVx9TsuikzmxwNAi",
  "key24": "CfGxzHJCz1YytMktXHF9bmoejjVzZ1f94nZDUMz6nQxFMZc1f2BEMeurcDWijh1xGZ1AB7pPztfNmYPmEUwkjax",
  "key25": "Pk1H6miG7o6UbhCsSuZP4Qa4FJVDYuLaPUxSXxhis7v9skJXtLjTEZx6nraAK71gYfbNzxwzHUVLs13xA41Frp4",
  "key26": "5B74zaZPhVov3TA6m47SRpkm2d13VFW7B7zjHb4Pk6GaAmdbmmsSWuSfsq7drKubnNDPDvrvRr5LEAthgSq4m7MV",
  "key27": "4idWSdcfkQZXbHLTqHUuyrPgUXVZNUHcsvEMa9pACv5v2Yp7Jbkuinb4wTsKNJADJnzqoCCKm3QS8mR94qDCGr1S",
  "key28": "23DCzSVadxsU2wor8PJ679W81qwYp5WjHTiJwStPrSsHjn6AC318szdTEDcwyEfU4WeYM21ctLYakscduK4WimHK",
  "key29": "2mkGKZUv3fPGEzEFjk4ZtvQzFxeUvrzTVWWq3DoptSQd7mAFnbrnF37srkQN7h6hpqNo3i7yz2dpPgSQfpLMhe1y",
  "key30": "5XqBP5iZB9XH2X1eobU5U4YxCLjqU9xb4DU95FJ3DwJuDqZY6PCisHTi7EFnNJ78951K6QvyZZwdRVeMM45BzNo6",
  "key31": "4ExsRze13X9YGYQHHRk6jS3gFPGhnr7HMvxUJkpkdXY72RTTXR1XU7GDabFADZNbKg9Qk1EMLNM646eehrcbum12",
  "key32": "S6WFb2Y6nc6ZiHXubLyNsjmUzKryo6L1BWbPPNENtCxtLiGVJBd8pMPCS3cjeKa3jV5J9mhwadKUyDUghjKqy1E",
  "key33": "5ejFEtGJZMfvpCP6mSAJSfQvu7CHhxJtiZFdN6dCiVnE6Dsug2hccvnaG7vMEuzX6qfvciuvjFset9TBUz5Lurmr",
  "key34": "2S3Usmpbg4kdjZHXfUKxnPjjmBiZt2amhJMxSusr7mZ4qxJsodCwSmomLmP5XZxPBWMwvD9DvcExfQW4WE3LPTFC",
  "key35": "3yXNKgQfwtcTTR2QwGAWem9uUUfZkXu4X7iysXBHG7z9pf38XddaeoigAxFGCwMHCRYa9f6u9YcayKAfzSWkbnSX",
  "key36": "3wcXcpmWE2LZYz76MhwzNeKYdbf9uNMpGgoYDzHNMggBcvtFXyxutJuknNCcx5Te9ADCpzA9zXEMMJnHMpg7T6nG",
  "key37": "2zTe7kBHgznzA9Rk7ZZEiUdojeauMF6n4fjJK2VuzvFbvEzsJL31dDPeNrYReurvB8ZtbcRwRaT2sUhc6e1qUmeo",
  "key38": "26xySAcrDwma3B8LR8D2BD3aNbgR9fV5iUbZrAnep2BZUC251fGZq6sAeha4c34kwyhu8EKxvxE6B33wWXQt8Li9",
  "key39": "4JLZM3QZbn4qZ2Tv5zmENAyEQuWEKh2y2W4RNAHUonjjJF4vcbH3Y5GoAeGCZMdrFQCnvvp9HbgvdDDQ58RmCWDh",
  "key40": "5EKww4VCgQ4KazpHNP3GvqLAJfuANEvUNCyZu1aPgtuawXHKfTUWL1QqnZGZUyvt53TBKm2HUcTJz6RUQkSowU5N",
  "key41": "3zevY3JeiPDUQVx3wLbHEqEgVEw8F4GEwyLS4rEw2uLec1PPwCeH65uPKtpR9UksDxP96We1HGKW7C93QF1LHC63",
  "key42": "4Bp58ge42JFNNxH6LGgAZbEGU8qiQCzPV1RDXV6AWZLgoduG1eVpnsvh7qYEpHbGRjFSUKFAGbuytGhfGYhVViQD",
  "key43": "4jfcqfmMTbNCLgsuHfzb6nc5jNzhJFS1Pj32ZgwQ7evQzxZLzkXT5SR8TSfdfgdJ1HhnouxsDbtR3A2h3SVWNBAg",
  "key44": "3dzHgUeL6xFBMdkHgzzpM3Zx7YHf9QmD9FpJXWutETzn74JJNgwjzYiDWzzyHx9QDq5PUMvkjyXnKj4m9Eg63Rp7"
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
