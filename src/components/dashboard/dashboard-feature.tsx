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
    "4GXrG4AtxJgz4Y3AqumBPFQDwQNULVSoF3xe19bytYo8oYnvRbumGJK7iTLFoUKvdKYprE5ArwXaAf3YRSmxdBNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Nsf9ATQx2rD1iArpZjEiHDXJDyNyQ5EbUrcC1ZPLdRPWNvThfZBtpmqboew3sG39rx3WEDwoFLBth8LQiLnxP1",
  "key1": "3nFsVqStzmkTXeGwzsNkvt6koUXHAu4m1CjBLY6ZFPGc5RrDAypdrSRXnGK27AnkbxA7abJzAC75R1PjLDBskfdw",
  "key2": "438CSJajweQVf1EsBioUs1hB6TyEaaw2A8RB8dWb3C6vXFyRnFMZM7hxVNnjZxdwYq7QMwdYSKxVotVzGqYKyrqC",
  "key3": "4u9qJmAedqeMCrGT33qKhSp7JULVSQaJHK4vniLtRaiwRwzzwX8iP759RiAiZrN47cTVHNddofrkYnjB4u4g7pEn",
  "key4": "2MfXYQVE3pYNgDW6dpJJLuQd9mC4tTLt7JL1egKMZY7N5bPLYNk1uLp9A3AxYa1j7GUb55K1NB5x8HqaPGhGLp7g",
  "key5": "5RwTudAbzgBGtDKdfLhMQmeGrm8KDeu3c73px6hMZJ1puCAg7wkG7V2tRcwGWxpp9BW3pFHbhFRcoK2TcPgRTQsa",
  "key6": "2aANanEhUJ8VSQP3PFqC6fm2GvBu3vq7f2Xi3avfhiCbKEAoYWvTWVqJmP9Qn5g5nTHS7Z64GaedmGdTHawpcnFh",
  "key7": "3k8Q6iGrYZPw8urt8jwk4hZAggiwC2iqv3Zs9T2hd1Q5F4iks34BaHm6UXJh2KCK7J5sd43XG6f3VemNdr7AQwFv",
  "key8": "5rvoxDi8qekiXpmmzrj7KoLZBViZTwp5nx7PCskQK6iV1v7bTyV9q1o7MQuBufCV1ouAnu7UgT21GyqdK6LUrpfg",
  "key9": "2zKCJXpw3pjm1Gw9AeQjy8qBDcRPRwvRcbPSoBHMD6UvLkwY3H4x2iF9GMnQEfy3aVsMibdJpVZi7WvD2pRRkHvz",
  "key10": "4yg7CTNjkHkFZRRvht24sWmRUBafh5TiBCZgXFseH8oS9nfpBa2WtgJq9avCzCAn3AjwxhBzbkA3vDcWaDXytM6c",
  "key11": "37b6mH9LQ93fdangcG1nNtatX371EWt9QdKuQNNKpcqEPRyxCHsrsYRggUevL93y6FoEoxDwUUyUBeW9izw7q8V9",
  "key12": "4wzQexbr8H1simFDPpeEpBgPytVtHu9Wwoi3EJN5PbzVoBQKKns23NEhZ616gkBefu6PYoJsue76fjN2PNFDZonD",
  "key13": "62iQeqpWZRwTWUbNjeE2GQtoXVASPbjBiPhXNu3VvzSbGn2LBx6Y2KT6iihSDzCMc899z2Ub5pEs4q1nzkbrbeeR",
  "key14": "5EcRWhjwFrDcrAzCsq4NRKkciXxDw7KiaAYVw8huG8q6DuLBAfGNz3V7SFHU5BKESQadvuUA8d1Z18ENGWkWUNnz",
  "key15": "2E14jan7ereQKLuNhpyqjBuaEun7xywTBSUGbTzF6ybjLyFVyFvZP4NKjwjbpzpqayYNgpq7dwL3SsdDnJ8yoCBL",
  "key16": "3xxCKjqNjB2oX9nizueVziwTkEsdr9wdgyYxMuVBwJGenTxzUXQie9tLzqbnN9C8d335NmDTu38v8R449v4kp2Tf",
  "key17": "34S55hDtxs52U7ysACXmDiMe4rgrbM4rna7bPLXJJuZji43eCmtJZm9MKg8LPmvW68wKwc2jrX4F41vur3tAudEN",
  "key18": "5fdcvrjZ87SwrmSRSZ7J7eV4XqD8C1YN93CjMoLoNQDD31DHXKLBqGisFMopRzavvqPTHowr9D9m3wn2ksY5XMQ3",
  "key19": "4JT1AP5BVHx7JBhWCtsgEkKRAxWzm8oYH44B8HSwaS9rh44T9uzvjxBktQ8Nx1aTqCXx4tqbqmhnsfMwwTXbAL4g",
  "key20": "4SqiQjuFucjEtvzHpLGuXQravEkwnciJWVJyhvLLdqycTDLfbc8vsXgpbdpkc1sfFFczuXkVNFxodWDN1HPcB3ft",
  "key21": "4fpfJ321FwxnoQJVLhoYopnZiVYs9P45jbTc3Ma11yiBQe8SnqJyaCQZq6aDbxcPG6jK8nzTvswr5rC4gjmXoUbV",
  "key22": "48S17U2KoFg8vi83jceg5BGCjrYTBcBuKq69TBaPFQ2pe5aJj1F8sGxdCr2Cu6T2wPqtLU4rr63rjPCiD6Bt8EMU",
  "key23": "35SdmeQSt4ja1TP2RS5xnL1n5Aew4wXJ1Gtsq1yV1h2YtFV6EeZA6agw6bsSCPHwQxcUXZBMkZZbyrCE3DC5HrFP",
  "key24": "2D7MkXmnyg6dkzbUN4btMN73waCZF3znmdabtsFyRnkadtLacz9EtsVnuChPVN8Q3nJEkn4gH7X8zmT11bwYitQZ",
  "key25": "2fZ8rgpozxxq5iPwSaBxU7wznmsP9T72hnvGa9LtjEmFVk31BiH2iCJ3W7LcfkB15sBFdspoqfMj7dLLiAAjp4LD",
  "key26": "3pvd5WnUuPw793jf1CCw8nMuuUNRMkeUQjtmzXdbBDAqXe1HAXkf67uf3fvc97eVZRGk5rSferJYQwFnc4j6Mx4G",
  "key27": "4pNTKPJGFHajVFG6zAja1Zq1AvzJhWjnpMC9ZjruZAxpb7jLxiXoQ3r4GUiMJU5RwaxSbvUdaCqt2NwoNhbTQCgQ",
  "key28": "3uSmNdKvtJV6kQCjzBeNxVqJKJVsTwz5HNBpU3L3jXwgZ1ebSEcaXUvyYcYCm7XjWcfzgCpLDsuAEXzHonzLwg4N",
  "key29": "q9egEde3DrEhthPpHtDQxm2VdUeDQho3Ken71RdbUhLC2Ju5AZCssfMSnVn3W5TqYYoNb4HVyy3iMCzHthdK3Yx",
  "key30": "3PrsdFRr28HAneYXGn4Nmo1RsGoayXgXFx4mmwjEzYUYFARFunGqoSqZVauBRGFsGH1zWPha6fULYBeiqug3ghoZ",
  "key31": "4AediFL9m3JSjesgPPjJHo4YBnKM8PLcYwkawA2CkEjBi4B1rgvAUrkKa3kvvtDKDdwoGNeZKs97oR1qysh47dya",
  "key32": "9NeBoSVxxXcqbKxA6UKPAzXg2peJqnTgjzvecTKWQeK43LZnoC3aBxjdKznGUsxJeGEcjyVemuuGsMgFJTmwXdH",
  "key33": "5ivRJpt4mHh43So5Wzfu27uAoZPcz3XGhwBKsrViBr6tVDgFbsrvmHhu3sBHSwMffpxwtVwy3QSNA1TD8LnQHrfm",
  "key34": "36vGnGZznZtcZruVj1MnK3NNTSv3yu4Xwn7DJCY2WzkG1gD9qpHrjWXnoRUik52DTGqRChb3ULEaQtXAzDRwaV9t",
  "key35": "4jcpoT1rgFfYpd6YMu7pC1aDKK7kG2hyQuYVzGKBzEMUhDbjMJ8XPpouaGFqJACNSq9vGU2bWT6BLFAdYiHhJe4e",
  "key36": "5q6NTh8qLstan9iZtPehNYEsmDgUAuWxTMwrBTZF4kAZbkGYd7PVxYew7XJrMfZQy6Gs66D6kf9vAhVYJnJjbvXf",
  "key37": "gFdrWahdRwtZbeW79jndWUsz9X9EjjKJXtFazV9wcxGjmR2X6C1HWvVAYvjgzbGUgfVSQYiB42SFfKVd5Y54iSk",
  "key38": "57TWuVcJeHSquR9RMC83SyWYoinARKjiYYqm6q9NZ47tweQ9aLnjnV76NK91D8z3Yzc7HYy78yyumStoov4gG2BK",
  "key39": "43QQRwgZvnncGeBzJKZ7nz5R5MCkCEAtHE1PH4ANACLGFrKjDjRxQx3yoQFwnqRvLRXgwMBmdvLGSZBoM4Ayx39w",
  "key40": "2kBHA25XEXwe2iTYkTChJc1rt3pmXsikaR2CieELDJhP53JefhBPfCtcV4XsvssmhQsTe3hfdRTHsDe29orPCNk6",
  "key41": "uGJQCW6su3bpyDyfWfGjFRy3Tt6pks8HwQwn8Pz4sooLAUgQLLNRan9RAR9nbEcd4Kmg2sjThUrHJf7rehkGV3F",
  "key42": "26PTHg8DjhMGYsjFJpFyDaHCWoPCLo4D1GyMProBVyytq3PtfrfGME1RmcojocwAv5GzQYfVfYgdKBPk88xz35CE",
  "key43": "44QcETyFmT7EwkxaQpM2fmGMzDPKgCgMQuoB1isHt7dRybESGs6PeVpfT1j9FpGpFRs1PoovteCD51ww5KwNBsiT",
  "key44": "33KyakawcB8wX6MFCSiYD3aq5K5VLLibVqwMN8WifrLTdHe1B1qNYYTR19VNYzuG2vAtRF3vegfRmej6dewpxENZ",
  "key45": "4RVK4Hen63mTFBFawfSMRxQdTntQgQHnGSHB1LNSy5ooQ1qPjAgMRp5czNrpc14SoajzJyxVT5XjQHkWMkuNsLuj",
  "key46": "5npJ52f2Mt8SNUEkHvpwr8TuRs3y8SxpHPyaB2NvMYD8CW8jwoJfTJR9asFPNVLufDBaTWxtcuC1LFPZXh2zjtuk",
  "key47": "4hTETLboq5oeLaTsEVumtDH4yxeDqcc6myYy6wWmBHECAA4qhZjL8qD72tVHkLz2tof4Rft1d98VfURF75JDp7YH",
  "key48": "5VurRrwpWtcpXYK4FQsdVSBYqWvbB3XSXhngZHWuWZ2neQwGutv6DpYCiyHKu4Wo7RcU6nFn2XnS4yaU4CPQfYZz"
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
