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
    "28RZLBFuvLQNCZeqseqFVGJTtL7saS8CYnTe1Cid51mbzjmCgzD4ugYnDqqmWfgpyzazKyhdN8ozPfwWiULgRK7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4yEjMbwv2Gb2JehBPdhLKxEEcs3NwFpYRYacDg9ELa3dyCRiLyC9ybCak6inoobtaCEF1mnVMGKfCBbbKAbnTh",
  "key1": "25g4urEprARw8UkuLQgQcoKe5p3oxX4Hvt1fPd3dsQtN1j9tHfs1aeYbGmwsJgPwRUShiDGs1UtAUHFSMGNSFndv",
  "key2": "5CQ7jfsbNqjrgBqvtvnPrMEugDfvF3JyMzo2Ve3p5QfAVW5dsPGUPKAuqoJCQroAThnu2jMZL8VEg7dEKYARvfTV",
  "key3": "3GHx2dr7XqNTgjzNbB5ADhfPXdoePyBtf79b3UwkhRPS6EML7vfPxPseC1i9yEUkK84KoMnYRB6zDrgLFBseB95x",
  "key4": "5f8ssNFemPbc7Ucjnz1ZkLAHLAqZdLYviZYgq61zmkiDN9TjenUEysLitZoWfB9MpNzAsRWkZBJhvJqGqCLsiRnZ",
  "key5": "4EoS4G6fHX7ED6EsnN7Tknp1FEF5rAHMzEPHwYyBteTjpe6Dv94S6bTjbDstLPvVqz1ZVakoFp1RNTfBWx1FRk5V",
  "key6": "3Pt8Bjnium3757YydDWx1wuPpDWz575LANjBQHDgjaEjHneTCvEnsmHN2ywV5RGFQ6Lj9xzssAgK85fTD8FVLgvb",
  "key7": "7nHKDwNNCM2t1Q18cM4CyshAqysXBUTZLLkJnC65rxUQqb6HA8cLpbR3w2hQgJbgqHihm8H3vAKq38Ko2BHvfgT",
  "key8": "3xCqtZoiigPwP5V8h4opLCxuJBUm5AeLQPeVZ64HNjswfwVwzww2hyv5xjNCJkgT5XdT5oTmHvkd1f3FNtiVKJcQ",
  "key9": "nN4sRCKm5MgGP6Bc4keJBFSB3UQhEKwWWyH4B2xvsKyK71bGwbpJAm7EqbV58qnbivuGhz3crJwqdE2A8RacDaE",
  "key10": "4rnrK7yDVNtFo5F9DtuiiQHuctUUYsYp7pAjThs21g5C7tRMycVxhNTgZzsVZNMXK3V9VZXn38rwHjtzX53kAMH5",
  "key11": "3qQRP2X8AogKhk574QWJ6H5PbReJ74645G9jdQPYe1aFfnMaLJLZ3zsZZqVamBBSY6bBY9CTPoF6pWBfyceMVRMV",
  "key12": "4AYtYcyxd5uWfdoqDCxwZAfgFbuv3dsK5tszjgTssYRDAVpGh5pX3PKJjCbbRxqgvgCCf3mRX27reswWpNcgD8fS",
  "key13": "RN12rdd3vtB4dUzhEHyUHRXZrwhXLFNm98acZwyZdEyXXi2tLfWdzQzh1iVhnwhCwDecpfFcJMTD5CAWNFmH2Sk",
  "key14": "6vs2gK1UnFZUtda329YNNj6MvaZa7YmcJWcAt2YhiRuooij9KgQsujWSDw86h5HfQF9WUgYeMED6rn2eACvcjBK",
  "key15": "2LDFrctYHuA5ByEMiZcPkGcGnQRbJaSjHFeBVJoXrAdnkhDLNjCgHo5m4nKt65oPevKJUCXZm5cGrvKtTwBpFFrK",
  "key16": "4DkwTkpaY4uHwWAFMFgG3dDeCceSnCEyZhFqqmXb1rKJM6fJ6538R8oyJPa6zLikJyFRf6k1cfysLkGaFDErYHAB",
  "key17": "4MxLA3J9txtkZYeUwqyctR9LbVRtUf8ULr9P6DmrArpypnnmErfvxcqfEyuM89wDiBLyLX5Hi5gdGH48DyPVvSa4",
  "key18": "2aDtzVdb1D8CmBbamq47dYkeEwJ99FJwCMsZAsLJeW2zBw2V66SLrMSbVc1DfxWvJpFATuAeRZ8wksPcgzbYJcSA",
  "key19": "51F4FroWfxtDsinJbdyqPuBwQ5ivJ19weo9iPf3GuuV9J5FiDQtSSHYQ2L1fCbFtcjUJ1LMaP6VJEpTNeP4uPcDL",
  "key20": "5sL61URvxBNeN4eWzDssex4KWU3TjH6f35KbKYAkgswDyFCztiGK4MSvnxvs9TUDfjBdtoKsciVnKzucBhVGTNnG",
  "key21": "WRq9LUk3HxGbdBZmU6fjxKqWhhTAXPzaC1GVjGzsFqg1faJoE2MREytp7VsRHFkpB8i7GD5AttuQFETWxexyJ57",
  "key22": "uLZYAmcgq27EPkqnsxZs7xxXk3TYBfduoC3WWBPimCjHrAdm28u1jLkcnLskRNhf5T882Pe1epmur4ZWTV7Htsx",
  "key23": "4WtTx9kAjScnWjXGjqZ4tmYdvY5Na775oxB2qXQ3XnHi8YVi3MVrreCegJXRfjRQX6jX91Jtcy1NSk9LnRH371kY",
  "key24": "3Ew91gqaat8AkS1gWqFuueYRcRJg5gQoog3XA7k2jvL2CgvD63Lr5gqg3X9ajr2vqAbyrdi5U2PHxjwY9eogcUCg",
  "key25": "4UPBtTb6Zao7gk1k9if5n7xWZiNKAzbZaiQYkq3t7EJrFshzSYdLjvsgXhsNJHQcXfingvZDEF317m8PtJHc6de6",
  "key26": "3QrvbCCpKiCVmX1uSmErp5NEpGWWWzw99bEKn3YfdCLfKbvgj91DJVVAmsZSGz5CaxqdC337wStD3R7w1Mz5JkGj",
  "key27": "5sMGaVT3vYTJDVsRuqeXEFyxfXWuJEkJ6N5MjC2mFvtuTgwexF3eSrfvzG7HBWezHhYvS8yvVPajgFxi4vzEhXoD",
  "key28": "5Z696FxQDKKDmcsN2Mbr1sZzYYjUXjFQTY5a31w3GG5DXfWANURcafHXfBKTtCEiktgP2jjeziyq7Tdw7uqFBv4g",
  "key29": "jHtWBsFEkph6uHu1DF51pBqCFkebVLdXepnAPJi36XNGoEejxuCv1sSBsyeukTUkgzBEKEjXzG38BjBa8tZp9vU",
  "key30": "5VAvuRjY1CYYD3aVMiwcHXP1MPyPrYCPQ3FPtuckTYeDS2KzRdVBofdvzRKTQYoRM2958J2NN2f8pD9vKdHLe6Ee",
  "key31": "3DQJryJaS4KfCE7eH7nuSvkoacUpvdXNMqy2dcRbCRyGY2tC3KYzCuamBkmD6nXPNDvzYb4nE58LGKk8i6S4kvks",
  "key32": "2RLYU7dbPod3dQDQThjEg1TGWhjShJg9eWbyJrPLCRvSwJkowe8XGs7T4tuBV6HhBRJJxPWXNE476yFe4GMFy9DG",
  "key33": "3WjSeSxBtiMchakWuWRM3tbAWn1B5uryGR22EajrTPAudjrPBU1f9XLXr1WCu15T51UCFDjencaeKiUBLjCdLYZU",
  "key34": "2oezU7kXu7JjdVWvYRe8rAGAAn198YArwtngmJrNYb9PGy1ccSrFo3ou5drEVZG5BEdAQTD1EgPvu4JQ19xzHWsj",
  "key35": "22HBXHsNgu411DrqkZk1Gsb3MguF957Zn2jN5vrBD5dFRB27FdqTKgwwk5cfRnkq6aX6bQkanazg9bNMjWkoWqgg",
  "key36": "4RWjnaayUBHTFoReLJoQrKKC71LVzFpHBxhQ2JF2TrcAzhwJgVPhPb43yGXgG6LvrUba1bwRFZ9LpVdTPV6M3WVA",
  "key37": "5xGGirAoNyQhCESfs9r1Ya5VGhpbSQFFrBenQ1f3D1QtMrh6cETUnVBfi3kXSiJzVnqbUXpFHoP57aTrnZcdCbss",
  "key38": "Ma8zyuxNMPekk61jvpw1PzTbFu6wzkwUWVGyFgB75J9qYXfCzFEV2z9RM3jYWENEc6AQ9bAENhBj5xkE45xB3yr",
  "key39": "5LBm6JTRftVaKz8jE5PJQFhhihxy4Hrp7Zx6xUmGquvYAXTxFJTwmdPWE4gnrfrkeq2fvrkfPAqdMt2vcU62jUCF",
  "key40": "v1thTqRxRnKDzk4v2MVb9s95E7g6hJyiie94PHp6q9JH9KAVczhDUpZiyU6vjLiDTVjtmv3JxzkaY8DYiMc1h9v",
  "key41": "4am67JYLD6pRj4zZ1g8HbVm6HTkCDbifL9edu5DzLE12LG789MMeW1LXtsbmvQ4suePb3wHU3Vbft4nq8xAab36N",
  "key42": "2BYuPgWH52sQYNrnCJbxyBmGm1uCbecrrrHVdiKxN2zQMcg6mKcofzhps7zGnjtN7U5yojC8HznW39H2NaEUapT9",
  "key43": "9ebZbdTRPzxmf2ppvkifVSPgrSS94tngsUWFag4oPU5ovsJWEu6jgkv3NShqhAZUMefGe77S9gG5SXAuN7mC7Uc",
  "key44": "2t9YaUuhqjGKPQQqm6aefKLiNwRHGtWUCUB36rFBtFzb4KVEtTNCcHNhteYrGfsv8QEFQvow8FpoxbD9CqFHyp7"
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
