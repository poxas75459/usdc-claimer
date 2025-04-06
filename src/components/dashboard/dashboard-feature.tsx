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
    "ugyNx9JUveVqmANu52REqMzwJaXyZVhAJAamx3Pm91W6NXSV6MAjftMYctmtSRLFXnVXEshnxMs9RM9qNy5JN8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ci1LdHv2JbA2aCoVtNtmNj1i627z9FqHxusJHNdoJ9Riq6RVWQPfswpE6q8rQCXYfmoJCrYJ6X1PyLV5LAz2HLz",
  "key1": "5HpKqtQjrBjLfQSQxdsd3umX2sjyTkyQ8cBgJfB4LV61t8Jz9RFPvtZdWxTJeHWjzZ5eQ2QgAN2ZpBWSkY6ZmQpq",
  "key2": "567yVRcP3yiJmuYmbjn4en9fEBAAuVURf8ZdgSQcF8w9HZp8HYyV5b5A4eXizDHtidgub6faqdMUzLaM9AzrK8sj",
  "key3": "4RPYgNF6WtRidNRvBiZV1GB8Nhdqtyr6DB3AShsGPWoSriVn93xTnLxnWkPYCWg7jsu1aMr7Z9cgCaHac5Z59xkx",
  "key4": "2wrxAtA2qXFULLwR4jGdVDQf7HsCorV8ziB8SrFPyDMdrBJb9zTYxkJkfvKX6pu6eFJRzqxq5zLCAZhhALBoc5CJ",
  "key5": "4ctVnXUNidMV4JsuRUq8TMVqf8XjJPCfvAgHTqNk1BDtSKUuxbNVCWk5ySVV7aAi4a6QHauiQqxZKhGBA82A3mGJ",
  "key6": "2jzmXDR46NwQ5NnrTqzEseDdLkm7sKkwhA4Qe2w6xuBVpvErSwx1yugBEUBPoeo9NcvgJjyeZtqSQ9NVxk2hgmn3",
  "key7": "31peBZjWd63qEQnVJdQvYaXM2Y5EMGtvLsFA1SivDm4bffbQav93nb5Twg8aFGXseifzNrreVDRT7uzYLtLkThp4",
  "key8": "4ZXzu4FKTh8H2M5zNqFd4d7Xv8y4rt1LshQtmFNai4vpiDhr3t4aPrS2vASj4XTzLqpN5Xh7cDZGzfGS1z66W7MN",
  "key9": "5SN7nF3phAnSCNvruVv97FhvjG3uhWUjBuY5ujjGGEYiEEVxQCAZ1wzuWoQ8SAyRac9dictuaBeQbzxeTbyLcWWf",
  "key10": "3f7V17x673vM5hAjK5MPiQiaNQfbaXFDsvAYuP2biTAwSRbR5M57GL9Yp9tdSBfSLr6q8oxt9xPQ39T5ccRNrg6J",
  "key11": "yD8DUnHyx56wzhTXw6HQ1gAAX5JtVg3woV8i21koMy6pGz1FQReVCWND9bKEeQ8XwU7GC9dN13h4QKdq3FgQQt4",
  "key12": "62s1v17nPucSwkbkmjGoBhTpT9hWgVywTnvkcAaPVcwhE6hbPKoRXPuRNviTB6ajsfZfL4nh3jpcaTWnxdXhaFwX",
  "key13": "2ETcsuAdraEXywsJWuefkDu93nPSzqgMJGsyPGsUAuxSw5MazLDmECCUwKjr2h1xSwL4JwNnmbXP2JPx5yazfLS1",
  "key14": "27LiFccx2YCuXr4uD9s1R271yohjp9ymVXKaYYTZaZyENB3gzi2rhEEruET4DVgaqzCPcF2ou1yhtXScNH3TZk9N",
  "key15": "2XuXQDHHNysmy5n8et5Cc2PLBWnJf53pLgTwMgaGYfsoiEiWVQ8Tg9ix6Jp4CpPfmX4WRz1aHCyDXZ4dGLV4Rkce",
  "key16": "2NEEqUU8yzVFh3UkCKmk3QmXGSnfgzyZAcsYg3WLu5GBiwbjGEBUcj5nWWMQfg5vPLYUQhSPqyDyEzjvhXFUdXwF",
  "key17": "xY2g6Mwre4KbGmLwznC5Ao3tD8o98J4QJcBKtMdcG1veaoCs3u8DH7hX7PoCubP7w6LjKDTNnPoGuyCVBSb7Nsu",
  "key18": "J8N2r1eHB9MSZuXHQSGf44wWViCnaz7UUH5JE4mfPZ3AQJyY7yKkMDTpdzBDtR2KfGshKbrqZgUgrCX1kgSCa7D",
  "key19": "rQk7oiMrxagrGJPcwPRtH7r2PWgPjM28dE3GLhWPojYSB2H7QPgMvNCr1XHvmQxhPmnP6gZj1p7LoiUf1xd7fLa",
  "key20": "3jnZFadjdsEWPSAqGRit2BizNkwh8btnixGStpL4e4QS4JHS1wGrCcm2KttqZY5467VwBFHn6T98xK2K7uL4MuKW",
  "key21": "4CoqPFyxtpqYPV5Kwd74JHp5j8gcCehSRkMcDhEucg5ozM4FeBjeAY9fqjYKAD5g4DH7BAGKKmPVc2Aquwo3AaXD",
  "key22": "5SffA6g11UG9E3vkfFG4Suma2pk3cjAGyDj4j6PgqT5HWHsc4czw5fxJPCqsvChB8m3Pd7662Xkffw4x692Qb54N",
  "key23": "4sMQwGH2wT956SBsoS74RHKRFMHP63NfSMqfU3ogHm4eMYAM5RwaPDXSUFQsTmtUBu5uKEp6jxMvDU2AmJiebq9j",
  "key24": "5jPbUXWcb23iC1HMSxBnPLtGhwrgAznRLBHTGyx3SYfq7N4ZBgUsaykVLLjrbiNXEaigqwv2gV4nvj9CiLtPUqdV",
  "key25": "k6MyeJH22igqkNUMUF2WyiBYtYwnyYEVoUL972WNT7tFjrzueW7bwSmAcREP5pU3aLoUi67nueJPAPmA4mJtctQ",
  "key26": "4EXAbvUvr2uwpS12EM9YxHWHbV4z6TxzrtFtZ5NZsNzMgGqmp2WrKtrxuob2fNtBfmFPh8JyK1PLwe1VeK3uP1FJ"
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
