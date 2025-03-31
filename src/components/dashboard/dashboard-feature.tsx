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
    "3gRP78kBUCKapcT8HBrHvZr4m8LWx4TMHHiso5sT8XNKiuyx5X6sedusSKqcVr1HZN9mF4Po6z5HZSyvGujrEoFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFGHFmmtqE7my3zrajsV8tXwW5TtHFU75gGVZUR9EtBxWyqNwh94MjsCAaQGcNWujXi2m6NspLvkXPaC1v4MCmz",
  "key1": "4gseTyFc6SwN1Nhuq16ynyFmbw1rPTkJStne7LjCNhBh1JakiPKEG6RjFGM2YsmbVWexaNJCq3qMykP5eKVdvfNB",
  "key2": "3og7kvPJdWGbmJqucsbjaNafNP4HGsyad3fEBdVRzv4PGKe99zsy6neEk5BDmxgJCK9Rir9uKxwvvpVZMyMqmcHU",
  "key3": "3A1TKghr37PPskUW2sNMj3Xb9pGFDHzB2HPXE9rwJbsjUGByDwtD7U5BbEm2TLYeMNhcGa1svXrTJwiaAhK9TGHA",
  "key4": "2H5iq1YdYQHd7Fy5ky1QynP57rxRWhDnYoULSGBUgs49cTAbxRb1ogx8bNX8EHL53wyceNzVM4B3rFBdtRz222eY",
  "key5": "2jACASvX4VBqn9J28ht68iL2eCbs2QTSy4cfHPF2LKdrG7pdWuDnmkt4Bc2RW7FjbNQj9YngitBhAuYVWg51uCwp",
  "key6": "4RhQNVXzMAb4sNkHe8aGQNgaSyMxAssYNfk58kbeEE1CaJTgEyrktKuq6VJCpkEzH16tqKqc46kXkm6MwNJYLfuh",
  "key7": "318c4ByiYrmRroBa7jWbVZCijpmaS65pyCkKeh6UiNx86KJyJv4kVfj76mjM5Kg5z6eRtm7JByP88qrgRqzZZjjf",
  "key8": "hQyUAqdGQK8nKRFj2yQF6dT2hhWUsL1xYKYxhAGobSYu2Lf53yAh3tXrq7WrRLrMfwQdJsRJz52hpxMg4wqpGk6",
  "key9": "BJJkYbyFDLe69k51czjSadHhKMYfJuQhpiNohbrxYw2Fu7oMcQpWd8Fx5F5Ny6gA3fh8XUxn6xXJTr6GN474L3z",
  "key10": "6nswBoNa85hrXBmKfh4wcyX9vsj4KdNv1aJHwoQ8fS6a2dRA63fxzeJwTYPzby5mvYVv2csXyJ339YVmRYwqEfF",
  "key11": "5CTtnmTNnbWQnmreLiZKCAo1YTG4zHXpGVRm6D9rcvm26UgnjsrVrP5zmTHqCH32SW2D2sydey82ET4EDgtWhid8",
  "key12": "2u3SzA6GcTZ62gshUrTNGkzk1RLasRPGnvFRbm5aABn1n3LRTWPWPSBrZGXivyroqLj8Eu5cfE9Xzb7kTK9iV2VR",
  "key13": "53wdA6rMU3zJciL371yY11cqk6rPTs8Suotjyjc2NN53gBFQXirfANCXPAy317zvh4HPnLSWFL1xsCGUz1zuHbZS",
  "key14": "4RFS9mMrhTrTWy2HZhzRx8yLjkTZAZWBWkgaFSJvPCKy49SWBDi12Jxh7YGZ3ADvpspj5dm3fJHad7e8YWP1Nc1d",
  "key15": "3ZTNrnzxAjtXzLV6yqh7tfDUGAU9kDGVHhY12cpCiGguX8USkyfQ534eAE1Jv728Bm5aZbapKdDjVgnTZiCYm43b",
  "key16": "28EX4ZDHspfi9mccwRo5ZBmLb59oH6ooYJd7ZtdL4864puSzgbHczEPSCBH2hhC9Tna2nMH97dn7UzHrLqwo5kT2",
  "key17": "Qydc63ng2BcAWgMxQezsEP7jo3zBcciVM66NCrhqWuAkPT4Qfbx2j6oWTndpovXQyAoNiMpD22sWYqmm1kA8huc",
  "key18": "3UQA73S3VsfYS82UaMTeU7nf9pGhs1VreRYSfdiESgD7JKYUPJmB2X3WAMomBasyJrTbL7jiDUa5nV3bo95EMiJJ",
  "key19": "5gaH9fASsEu9vPyXErMvtmCmZq7F6HCCme8huKcK3gpuc7ANRJAV3YZVtRWfvqAroEXzLpiHea1RsSXcapoUJkXt",
  "key20": "57goFnnrFPNQHp1BrLJL5v2etRYgPgpgbydXNQWfoE2QSiFdtXZadk1NTXDHKqL7FqaNBHdTkwruFXGNoESU68vi",
  "key21": "5kxQuNouDurmBTxgtRb6bVKjPjFv3ggC8FGTD2cwcZsTXx4ShoVWWG2bU2q7GcPoQUFGL85rep9T88Z8WYQhYXrk",
  "key22": "mSxVi1qssSpDeqUSXEtEyjKuDkKn9vjuyZJFmQZsvZNNmW851aqdW3Ea11n2rozkb7umv36XSvvMhsTK1for392",
  "key23": "JS5DsSo2KYXGVoECrD8Tdrfu2MemwocqKCmXwZHXkzUfrwwQifDnxQQP8gHAwgqL3e8MwjqzEhN4DyEkvmPf5pj",
  "key24": "4uKoxRpusxTfuxfsFnMFRoWaVB7SbkdZhLuNMrZeMTCzvczEpjv2QrJ9VNpoLEwmpfEGdFC3mhHCXYaDcUdSUCPo",
  "key25": "3WDEGa9Mibh9DzZPBwXVjT32tmNAptdkCRtKdXRwUV6X4VdZZjXp53EwqddGWS5hNUmU8hugLUtSYHBLwPFhGXPA",
  "key26": "ZADBqXek6j96tJgnN5z9R2xX5VsHmyaEU3DE9Af8KHGzcJwq8KoogUgUa5W81cAPN6uCQo1jKrTqG31oFfe3iHk",
  "key27": "4UFc4ENhsAfCeuwkZ74T6c9PaRJq8QsDEV85kYMeSR45QJwtyojkmqQv76KezkZiSm9LWRqqzQkdEtFraoebxDXe",
  "key28": "NrrYKQ8DJ1tesL6UcHQD2u8pztDFXVgqtUMAQhpHhRr422sWR4cycXUJjzcH4pSPubQF6fY1CpNFHqx6HAm8jxo",
  "key29": "5rkZLtZk2S57NraMskzA9gN4L6EbSpWJMfhJgmk527okk2yZnrgaB5HKXjvEG1zW5Y995VH4tBrkp3SbQeFsr36j",
  "key30": "5qrbCnNqZP15YX7H4Q9ZBtjeaC8hgFbP9aofFrXN4Nx9Cd1umPZ4Y7XrZ3tskM8hXGoRLW2QMxAsUhB4Bcs3FL64",
  "key31": "4t4ZZErEdouHjdkS4aNDH7kBUi97QQBWxwyBrjBmzoN4MFCCRskUcY3rNyk7Vzbg8HYWaMUkFJDbPiPF9QDtEiFf",
  "key32": "mNx7jUGSM1Q9C4tfsgVixNAstk58TCpVhAYW2L9bESdJWaghrni5gBQM4dBbpDnJrvhPmaeFkGxrEJuQH6DaQCh"
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
