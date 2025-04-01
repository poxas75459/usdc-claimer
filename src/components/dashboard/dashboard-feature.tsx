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
    "3tpsYsAdm2BzepcpAzDfMvrWqthx5QgWuXMhzfz9LJNtdxzwkceSReeTLfjk128jFff3XaS3FjEA8RsYwrCFpZkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPvpVVFSN5UiTpURPoAZYLP23oju89TMvURAiGGYaHmAPxFCFvmDwXGJjJn1iDNZFoHYH92FuAEyXWBiLegv7rB",
  "key1": "51gRwTdqPdVnmYP3sRD316oqCCzGQKPcahzEdrbhd9m6BtkwtCFJ2uTHNpYde9JNVnzDQgZbdKeRmVarCWFwhZiA",
  "key2": "3UyqjqbVkQttSLFadS681jPuWRWStEqAb69qJSPcBvhS4HDKhPjoVbABuFPnZmLukd1uMoYdqfo1T9diBkFr6jh",
  "key3": "1iAES89UnMcEyKYoPC9J8XDUAvs9tnETdwwTE1kE4pxubn7v7vG1be9R3HFpZ2KZCbNUjpbp6uaK8Kcx4GtNe92",
  "key4": "39FpsrpQ5znqXHLKuYeBDWWTGxdEpsmABgaRLUCE1VHANBTdagpozQMigEbcbk4zsX1KgGcnqa6Q8qoRjbeH2pQU",
  "key5": "47m8AT55NgNoNVx2jHFUb9WWEiSfBBnJPDYNZvBNVA2e2GEKNU7sFpFRZ9MEKxJNKFBo6kK8wMf4NynEUoQVZNKT",
  "key6": "fLkLrjVY5shao7VKXMn8RRBVBJk9uLit95p1pXHgo3RKdtGQSxbd51VJL4ynEpgGqWTHwznxt5obZU4RapvsyvK",
  "key7": "654Dnhts4VYKdDiLiayUAg6yopRcE4VEeW4NvKVp4YUA7BWgEmapUAgH2mudKNWjXNgnKfLergZfFtrASmFxZeTj",
  "key8": "3kcfiJEeQvfzPddyB5fiD3qdrJJp7rvNA6bpFFbrdqT6FgEU2Vjk4WcXyE5LeYdoK6YE2LvfHJv7bT3uJrVdEokX",
  "key9": "3wdJBj9agFRP6xYTpiHEyE6wPqLNGYVCMJVZxjoDPFomFR4haFu7kzuaTUf8UvjaNZcdU6ocr42WAnDfRj57tM3v",
  "key10": "5RTEooUU1e3U6EugdREhEhPC8LTZ3LUoVxetgYvyHuVRjwhC2LW1BmaVeDTUwmWqKFz4Ji7DHM17347eUjCFL13T",
  "key11": "3F2GcSTByyAqxPDRjhPmvNBa7tT8hZX1AkPtHRKa99XUe8H5n6rVp7sZkMKozhcY3gHhq3TiuUyP6dbCGZsitwG4",
  "key12": "5gnPNAGtAX9P3f1vKbSPdnZz7GrnUFw7KTPvwx4e33v3jx2x9hTsVZGGoPJgEZ6kqm3UvUH9P9UWgnvYNXdpzWFG",
  "key13": "2GPFedvZ7kqBN6RaqagD8yLKBfVrM1W9SQscMbnC2yVYZ9MMbvX5VzSugZPpDjRQZtCD1gcBBRos5pfHEBBKoPqp",
  "key14": "59knwzgU1wAq3Cv9HANjXp4WQtbhtLmqaz56MqzDsPfM3FTFZTZx4gz3QAyqM5mT3DnUWe3TDbwsuFunEfQWkw9a",
  "key15": "3DcrEPLZzHHRpQ5yG9L2d4yp8tpYzeX5WH84gAvsuPHe5USSfHDUkR5Zc1hPk8scNePkSm4kCmBPHdaBhReXbCv8",
  "key16": "3BiwyM1xzYfgFgN97L7H5cTaB1G297C3QWr9fUkCCChrs5A8hTMk8gBA7aFNJJzkg8uqtXYRwdWBDeuovnWJBQdn",
  "key17": "4zNSk7D7D3CVv9WmpT1nsYjPkDtMcsTWoQVDc2UQ7YeKNHxA6p643d9UThPTZkMXgeZQveQNiD3Zo4UYBp6P5Rmp",
  "key18": "2SzrZVUgKwmTGu5Wv2JYY5vdy14vH146kvwsu7bDe66mzxYiz3rZCfVGmHjvBE5ZHZTiH3TMzYzkiEPYQAwr84Je",
  "key19": "3aFPBpWD9aDdTCGdb6fgsGyDkwuPnzwL37CkbiCsDAtbVfnjjpVu3bDQDfNe9nxCJzyc1ZiGf2i91BeiFAEhSGf9",
  "key20": "5RJZp9LdUCsSWudHMTPcd3hYfaxza1m7xpQT29qzFys8cHuSs5mr4JCp6nxjwzuA3eEwr1GAtZtFEGuY7r2Z3a9s",
  "key21": "huuCCXNpUJVGknyDw6KkMddpxdJaackL5uSLYmrSPBR5yV1msiLuwn49Jwbm15EcAjosE7A8LPEfHVF8D2KSauD",
  "key22": "3tqgxd5Hs4S7MdRCaRTBZtbQHCHjQVX49Ji8A5BXprnNWRbejdb79vmc8YvjtmVtvJQbpkPtRWMfip3twkrtxY5L",
  "key23": "4ktfL3VsAyzQv6bb9nG3eWC4EmprhHcqay7dHibeGVdRwm4FGTwRiXeN2cpZEivQb1dPLkVyJ8EZNV7gLvcsqyv",
  "key24": "4C5yJ5sNJqdjSeh7Huj6CPYeerGENEC6imuwDgP4LnnjxT8rEUdBU6szuvAdFctrvJnfnM7B9NcGujKLcoeAEN5C"
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
