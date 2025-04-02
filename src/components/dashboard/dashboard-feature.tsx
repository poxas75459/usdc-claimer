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
    "LbuhexeCTYVfzwqQ1LHQYkcc9eXxknSAHH7RJCffpWJYMrpyDKHp6BcfMAA29JCpWtWh1U1RuXfaGuPcA26XTHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZPAD7cErreK3FU5rnJm8Jx3xaq2m3TQqCgL8Q65KURcKn6Qz9PgCo6AKS5ApKc2MPBfBdAa4mvgz5A2jdb1JVT",
  "key1": "31vYtKkvXQ7iLS3fFLYU6Uv4Qy6v5HgnwrLCD2fLcrVdvMD4q8txCNr8Tx29wxFxMwRzmL58EqGn3ozPyGpVMdgv",
  "key2": "2Jx64ncyUsuKjoWHGAdwi7SrMY2z1ACjttrfvXAby2XPDoy2uKC6RHC8KCNLyXAU21QtaiCRGr5V8ZnAGGagZcG6",
  "key3": "2JW59hmhiK9A7e3ynufPzGxXNDRyJ3AAv9f5sCywFYHH6GzSxXcdaAbapmc5xMhCZY9u1fPMJTWbrJXAf4H7pBTQ",
  "key4": "2h5cBw36cokeBeycmT7MNQS7vGN6uXY2V49zuriLgdEtpu5Ut4eP54XeWS4FTdJcWyqSvcy6He7BAaWCHtcntH7a",
  "key5": "3JZjKCfW5ry3aAGRM67aDRXrLY2oMPJnj4VJBQ9nYYmmJZ4RZ2vioAaCFeDspB26viGaetAgWEpQTojheW3jrdyA",
  "key6": "4jcvgM9FRffginPTJvjPF8dK83E131P1iEos332SYnYJe3iLzaeZsJb9cJt5vPbyuXifX7PecbViUYNeRSAUcHWL",
  "key7": "4oQEn7zqBtjnxG48BcwLX8ewHK5DVHfRxgRJoJqcYhvkSooc7eCpNfByqmfvCq4xfNCs63CrKQpV8PnqFifgVFN2",
  "key8": "5c5x9pJbjCS2H9Jm6ehuAKkk4i1LRjUSbD9cB9Zg2dR9uGeu7ufQxbPtEoDygbztBB8GLzU4yCRHe2pd9b4r4zYE",
  "key9": "36LbkGSDZWzY73VnYrgUQmQKEJnc6hKDPTFou8q1VCtsTh8MLjqXq2ZKLH9onvGhXCJHq4rGbBcYiBgn6Fr3DGHw",
  "key10": "4xzYWv888U4Eai3aEtuMnTDdpx6ADtdukYVxcFv57bXrNntqAzVGGnxUTxMH33sFF2wj4YZcqV3cm7jTUyv3t9kH",
  "key11": "5ZHx98ihhsjNXntn6wDCvcvUP1NgKNAVD3tEDVeQtKAaAxGQCxdH9tovKUL3apdhW6ptY4gsa5FHyaBgXYRj5E1h",
  "key12": "4u3RhAWQDMquo6GdYDzMos4Y8BYJ73PGCs4A2sqZMLqYxANLTP9e8v86ZQtcG5EpZbiKNJeHJzq4QHT1es9bVqz",
  "key13": "3aEkLGii1Vc86PeMknaULEhQNrPaCA6vmJ67d8uCm3Dc5898GhNvzY6XUFxy8qn6Z1wiy2Jc5iPVA5CZgL9Xa2kA",
  "key14": "4X5bG76mBevU5DYvxvE79ExxjepSrBuetx8ZVjHpwpVNaGC6iJEX417viQ8iQNRJCRkUDafEcdMqzAL6NLj9wEjK",
  "key15": "StkEt8TdKMRdMH6Mm3n5JR9rzRW97wcDFdXK3kmy5e6tDsYFczu96i1FpxsiURH66unMR6B2HVUPUez1skx14L4",
  "key16": "Fqeetsk11uo589Sk5Yb8FoZFGZX6RCyvmDfhCQUYNiG7beMSfQ8dDNgoefxJXY9t74V3KsC1VM6KSGh1bJtytSQ",
  "key17": "5xr26LPRgzLmMYVDpqwUZx6HoceUNdSnDyZkijWj6fqVQmHcXLr7AhRrq9tzooWvxWuv8VYhDm4QWxUiwcFTwZVW",
  "key18": "4gectsoHJ7ESU8R4w8q6N22FV4Tyc7biVRAzva8i6LwpcWWaWWKJa55TLWSqd4vsLUVDJmhw5WjrQ3hhjCdMWeB5",
  "key19": "2Coa3PLFBravSLgkNzBjnomS35Eb6W9fpQ7dLoTjE1pjYAF3x65yjgfAEynPEyQiCc63cQnDga9RxQ5RUBJZcfz",
  "key20": "VmfDc3qKGTn8r41ZXaDqChtKiCfBZWa4hwdKKvoJEh6zBmYbzHNB1oHjM2ycv9gitgs2QQ9xnmUhyQJ1LFnf4PY",
  "key21": "2hnZJqQpux2TTL72hCYgeUTxUv7uq6XvPWvCD5JdF8NqS5SkUEEEoARVXbr5z4mPLxNLFyEKYicBMXMA3ieKGtHQ",
  "key22": "bZZ7hJVJhjcftEDZ1fyCqwH4fMJvegRFE8rZNEPgAPVCWqpXS9KJgWUXtF7Dg1gBPks76RC7G2AezkZtg5jrAV7",
  "key23": "frtxTiPGUE2baZ2AL7oBSCaDdJmBW82Q4jHAGqfhcU37X294MEAaXbYuE8nZarzmKLcW3DLD8NXnTtiqcnqBA5R",
  "key24": "FUzrz4KwMY2jE84eFCDRFxCxQSEgsK6mXmsmcZ2jTdwSaBUzvkxefmyB4tXTy426c8RhZxCBvfQ6qujZBXACcnb",
  "key25": "5QWzuoa8B2sXtJMfFMUR24s7ASoFYbdnFcSEcFjLdDgqw2dZE1neyVtssxAohrUuLauKic6NCHT6SrtDcBShNDTg",
  "key26": "5wofYjJxmQcHCQTyegyr6WBgTQh4hcajirLj6e1CNZ3W3XH8xP9awW8YoYNpiszL7GG73VvzigCeFGupiQc2xda3",
  "key27": "42vUygnSkSrHbvnmfLJR1Lc5SRw9ivnZgZAD79wK8HPp5fZjR4LFYgFipDVA81rnTsktCzpC23u8e7sGcNZc25YC",
  "key28": "57psVYCRk9f9ZNYW6XczB6ePXcZ5Z5qxPQeQjEJr4GGtGRKT52VTswUm1WE8pNw4izAbHiJz22tLsFYe1XFK4zh3",
  "key29": "5PmBPkKkCLv6tXjutmfDfKCrFWmxZjN9zisALyftHUQnWWsermKJWB9vfx64uZDsRmpG56RFc2N4Z3gGruUrohig",
  "key30": "P4xZ7WsVqGmN9D6W5FJh1v3BSm7gVUAWbLAxrKZN8Mg4wi1GrdmsaV6cEW9EtLLYySEXtJ1ab7Q468rjbC1hiW5",
  "key31": "2Ek4b9BRD4t1TGic5uqLzE5fA3FPmJVyrtAnJUgLkFnGMWacnzdqLnsBLvh57CMJQkHQ5d7mAExcsB2F4DkrPus5",
  "key32": "r9CDeddha9Az5uqRqxXx4ozJN4veJxddXdWxw9dYbBtJykHz7xV8vYC5qFD3b2bVwkHS2HGoigoKXUmt93tMYC8",
  "key33": "5tiduKZjYcs9rGPzaB2kVYW1j7hUPkBKX2tSW1C2ndn4FavhQV45bTJAhdzSghDa3ddVHAB7pHDx3iDoiMS9bmYF",
  "key34": "2fU2s5YUo8Jtt1ABCEvkLvuT7BwsKQ47uuLK5BbJaFHP9PLCcFMZSiWZV4UgJAQBuoyXJou3NHgaz7rfZigLp7oq",
  "key35": "FTyK9UuoZ1iJa892p9tagmAjBcLiZAXfYAWvEaurVhM77331fyxbnL37pcmqTpb2pSKcebbu8LnSjgvKX58cmJ6"
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
