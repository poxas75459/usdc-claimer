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
    "24dkYqfKrKMsVPJQ87e5AJkbveCZuiuKudDmw8FFhYbYfz2V5Jcv1KjoCMEAnKm2N5v82iADR4afMvw7T43YE96q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JmLu6bcHKDbHcQG9WTmwE2RTW9hVVegdvDdS8aBcGhHUSHBx9Vn4AeGGUXHjCjFiQkKqUU1BTvFAzoacvPdQT",
  "key1": "veJwosoUeExkcD4FrUrxRZWu7W2RsGm2Ym8m1RsSAdyrx8AT9htV7RAjkMW8ybU71G2UFzH32aXYdVr6ZJwATAY",
  "key2": "KNMEp7UnNEXbpxG1D1QJ7oGyETwFmb69j5yWuckN8tyD1jS5zpMV63n1nKLXepKiGdNA7HE3Z5SaBc1AeF4jnE1",
  "key3": "3nsKX2KfzEiBiVnbK9x7dkc9S1Sror7GeZLfihqRvMh7A5t5MsTugDNsi523k9qSkW8KQeZkV5Y5NFdcAGUE8ZzJ",
  "key4": "35LUZ5Rt8FF47MaUMUytDqp7t33TSmyNzQY77YiBtka3rzX29eKuEDMrzX3eAcgRJdi2LFfgiDqLSqprBbocWS5M",
  "key5": "4T17XUoP1jY5TiY7vPPXAofWT3bPCWA9BHqLuKXfb8YqGJnRkvoFbSzBTzv5ZDDoDmJ7GjXiHzmKWhapUwV7rvBS",
  "key6": "5yeLFJ8pNwnumPvqHRHkXpN9uMRwLiPRqA61dJCX8Hk4inZv1wwue88D1uGwZLQ7L7J97on7gFr6PMS871pxqRmr",
  "key7": "5BWvdUoCRSz3zrg5YfLwPLg1yuKKi1Q6UuVUztYJkhbc1w1iTVk9fcJ1aVDV7QsSZTXidhrSha6cWWxRvMZfnCgC",
  "key8": "4ia92pRknM1iqHUDGmQg9iLxHn49kcbv9L9i7E6uxSKAEgYpJ2XRWwSbxjcpGnfJXbTACRALB239trB5Zsu3UP7j",
  "key9": "3sCqX6kdzdwcikh2pdwhGztGRCc4yBkiHSPjjngFjyzwNi97hsG49qH9sTcwecWpEThTh26zhsSdcn8aW6QsqSuL",
  "key10": "fjPWGcBEWiSv22PfZC38x5JnwhaCwFFRTun6S3LorJ7c58LdLkSukdLYw6j8MDDEVFrLKkDyvQgattdg42WUyvu",
  "key11": "5EjQ3oPtGVtjdKzpntrHFuRENQJ39iJ6VvCNPyQPiMxPD7R4u3tC5r2ehJJHJBQkQAVKag8ZYCjBfT1SRtzC7XHD",
  "key12": "xj429WyXoLQJCz2DvshLhbSovZZNUhqPxZG6iwrKmQmwwVrxi9yXNtsJgZ4zjWvsujiHuHruAwSKpWNspqRrXk7",
  "key13": "NpdvC3KL4z3BfLqEU9SktoNYNpCY81gvtwmTGV6oNEAnmj7ekXJZ3JoQ75qsks4wBocXk9r3meSxZ1eaaDSxR5A",
  "key14": "JssyUkQRgw9LWQ5NTWbQxdsUmjJbV9qfdBkLUPRee6hDx66UyJF6zvp3qukytD3pGB6KLaG5qXDHy9W3wRcZ7SU",
  "key15": "6449tGPGEzDDLnqgpD5He47YSBhT1MujNnPUf4y65RE5WfnupPyZt5keUN7eFBFqeJxKAfs1T5hnNdwtdhfCtJJU",
  "key16": "4zxy5amzYVW6PGuATmdANhWbyeL71PJGSct3EaJ48GQtZyCuKAUHCcxx4Acmd6JUDbvw8TPTmU4N5C68RbU3nh7u",
  "key17": "6WiUKSMKiKcHRug3QyBbXT9gkgskuaqxFGuCTtDjsYNcNgy2GHethKtnRDCwQETPpSCY9Htq5U1BwBrT3VnUvq8",
  "key18": "5ywUpDNnGhq18tFzvmVjAFeRmhNyTiQWQYkk3VB6insgLA1sv9wJ2TyNckXs7Dq2UpFMSZixALX3DtBpo8UXDmvo",
  "key19": "4PFs2KGPKqfozc9vBD2Sh9NTeQAKmCw8Ua58ms15NKCj5RZGXfWxPvSFqu4nmeMJ2eTE4JY3oKC3LRsWuEzuneu3",
  "key20": "5FeCijapZLXohXvS9m9W2bqhado87JTZb7dVGy59EpJq2RrypnJ44TaGnLQ5wdnjjvgiNuurPhuAe6cnfZMtUAF5",
  "key21": "2rfVdQ7mEVMcYjms26FELKqzpPkb78ts477GVvXnT8zf8dhPi5ByiqYJUCrD1qojSURgPCYhKPB2GFDqNMue2kCe",
  "key22": "4MShkvZfjy25mvkQPgYtiXJJ45F3nMEHEBfKKd3FxrXKM9haffyftLcx6mNdh9fEPEkKcNwP1sat3v8jUeS3Mkvk",
  "key23": "5fZJ71KDxBg46p2cQ7PKwXHZgvDq4REXQrFxffuEZMiqdBecDiAFd2EpFPfLsnQg4JdYVNfDf92zboz5DJohdLn4",
  "key24": "2Z8GQQC5NVHazT5AvDKh6bBGJe7U8VAoW4NCJxBUWDiCmqQwXsgr2BozizXjP2VpmpvqKZr8xXnUMEWrkzwdZo3i",
  "key25": "2LptJ2skN68TAch27Ac8jNcYkRCM9xRoe2u1Qo6d4SyiYe3rfDX2GTBR3bqHRKTquCDpPNwL4GChbnrdq9aU5jH1",
  "key26": "59F5sbPzDgwrBT1iQLupQsgaj251WNuV8QN6vb2KVAQafGU4JS4D7DZWA8EDBFkcsEnBz4dAgjCgj9uvMwijwm4K",
  "key27": "2VfZrqm17T8FHTgtzZSZeudRT82MGdJKFaSDK2W9hqRxK5E4zE8ocSdpBr4CgQ7ChgY5RFh6Lw9gcEy979bVNFnG",
  "key28": "541CKc5qV29tJrqpTeztGfzGGpLRHVFup14eqm19GxuBYhjG2ouw8CuTRN5qKDmyftpgnK8gQvq97fZwXBNyyw4j",
  "key29": "4ehu1F5bu8mcS4xrXX7P7G1EZY6GddaV1dje6SoBQFdMySJF1bYxxoBWEGfUzzT9dA3cf1hyJoTvMFktxUwwW4kt"
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
