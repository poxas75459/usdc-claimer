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
    "2jK4wvEmoDhCGT8S63HRPwoAPzTudwnarmsKcfSbtkVxr9H2iUUzLTGsQCyscjwSP5Av54kGdrc8wqD7aDh2BLBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6sAmzWkikTm2NpKEtt5Fcm1n3p6UUen2uAwUgafbEhBzoarVaZKoUjSq6GZpvnuCmiHagnBzz8iHVC42Pg3Uaqj",
  "key1": "5rqqmyXE6p4queuYTRKzr2UJzP52YQFQvMXFEd1wJ5xJsgmtwu8aawtSRrsVkXKyr9vXSrJwk9A6gat9FqehijPB",
  "key2": "4L5ny4BtCnapAk4iKNBTSf9aMXVWrRiiCd26UJTdCoXNCtCzJSaTBMDWZwChdqo1Eiju2gygEeXLYqaegaaX3pDL",
  "key3": "4XAbAwuWNRmjzNkmgNPix9ieAkHQLXZi7dRNaV2wnhGYehk1ySwSknZ2NKGTzNVngSsFBwQMrh6ZvjiXDZoU33zi",
  "key4": "461PSrVf7srZ7T4pTPHsrAXhkk51tD8hYz9iCaDntKKg3rqLmGBJZzyRas8mF7dfP9BA54eqkb7KoX18YnBsay3y",
  "key5": "2a6QSH9wwVNcLAYmTHKm8wDLLBca1v2FCFJtRhzFyuYvTm6oa3AjLhCLrBBCi1ArfxrzQiKLMfAdvhQNN2xDVgQ1",
  "key6": "3VqHmN3rSFb6xuxKDcauPDDEoqLruGVJRZu2zCZLksR3KfW1JzGEsLKtBH1d6iXY6mdVfg71jNMzjahdFiHD1neU",
  "key7": "4JWwffdvFtH8gvTGk1sq37nssRSqG5n9g5Z5R53zRSizW6CaG7Czh5gLyXP3qULNQFRpjVw5QetGZhbDaMVvSyRU",
  "key8": "3vE6u8JKVSUvFfCfkoghDTQ4QQybkcjPeP5x2TKs9Qh4jpJPjDC9PMVB6PkJMP9eaCrmVnYf1Y7Y2MBqe6WtqS8U",
  "key9": "3prXpR4fj33KHAwAEqVh2ZVGWjsShy2fdSngRwuTrcMAvFfQcRjRUyHwU9DztWcADG1Ma8LhawaotCkRiLyQPGFZ",
  "key10": "25kKUSCtTu3HmcFpoywxfXFQFZUta5KZyrF7Bo7UZn9yf4XELLxx7JqaiRop2maiCz6uD8EMY5QKwnsRW9GMdPin",
  "key11": "46ZSDwQLmZ8auvhywsojkQLPMfFsXqaLFWis7gNbLjAtWaUnUMjQTjSBbbzr59QKqRLWwSupFgnfeBogwuqVLQaC",
  "key12": "4r7jegVDiu5Y6qxZWqLxfZ4XtBVsWQ6QDBt7TZitf8uTKHbZKbGFqxknm5842z2ru1Z1HS13b137FL3uyEog3kyi",
  "key13": "5CTC5b4FvRHN9WdELuGANpnvk1QkriCkAo1gBeoU4V6YgHSgq8p18VhoJsjZCebfvajfNnujXU9BxzZfXyCEuCkw",
  "key14": "5GQDRQMCsgXJLk7poa3hjTcmrJTX1FWSCNRbXAeAR1xWD3KnArdgXHXMFNsyudooDASSeze96hNtLfhUDqHp3wpT",
  "key15": "5pJQwzS8EX8KrYW76XNyNrN8PyWkYreD6P6osYMMoQ9Lj3E5dsXhqVE4JSRMxfajLuR3n2sGjZGPH1qJib5ypPeU",
  "key16": "TCzVcYyRfYmJpmMgNbQmf4wBMJZ1Rx59dp6vjUfvpNzm7puPWijZ9VVJy3YjBwnzNA9obxaZe1N8W7caLMJ4UkL",
  "key17": "4tBdDv4U9aWkyfMgjGam8FKSUVPvrVpBHBNf5Qs3W4J32AEQh58daJmA4KngLC83hWWtwCsWXTG45SFVgZeBsPrd",
  "key18": "4VcF5pZQEnv8B9hVf5QnCLEM9Xhr99WBZJuhRgphq5NyUqizhtPnSNaJ5L3bJLYF6LeQCMc888qb3LKYrzk8PiWT",
  "key19": "4Jvfd5HbE8b6NysH6mYmHZPAL3suTxRN6JHzhYcUUNTCewZAZiuRxhHjq2YkGu1FJxuzXfs5sHiNPgSyQRf2PhjP",
  "key20": "3k2nYuCsu5fxf5oNy46vu52cE9VBY4sVuEmbWb68BG5xppUkQm6y45AGRcZv3rHzAnehZ5jv8xaHBq2jFpAk2HAa",
  "key21": "F3YAHasUSz2i6ocrcY8EL1esZM4PwDwzjN8nHB8UQB4v1pDSUDjxRkbpxwfBQFW2xwQuL8AMZnkRMP8g5myQzyJ",
  "key22": "2wwwucWKNjYdFidbJe9LPZ9x22engHLAeGhSoDaBr2sUyfbuWaSKs3yxG8eHuJW6vPigsJspCqjnKDDWS1H8aRn7",
  "key23": "4VsXwJsWyq5TUtoNUWyyexVcwofZafuPuXuE4ubY77eWVtDePuhXagkbgjmZiuxcYMzrvymFdoYR1s9Kg8VojfoV",
  "key24": "2awNZ8FjYB1R1jkoGFUKRcQk94kCzSC7tVxEmXAVMMXu6EJwFB1Y23qQPHnJKV4J5CSK4fU56M8SGQqjwDKjzJ4Z",
  "key25": "4BS3gNVibuZSJ1rnbAuMSWiN1nNLrtmxN8QJowzhhDeyx5Lh9KZNqGGQSXzPAQTKHsRtDj3QWbdRB6aCrzvvcakr",
  "key26": "45w8BkyXfQdzE47WMQzDUXYnU84Ze5FXsrZSUzNyEagRiswYZGFWK1n83i4onCenE4YLWowCBD64UT3wxMEMtZsG",
  "key27": "3NPNxkX5MHJh3UP8KNC9mrjrkKVLyZ1tXS4x8Df3Q3BU6LEarRpyYRUizW2vmRCiEWbHXWsy2NFWVMP3e8vT5S2a",
  "key28": "5cAM9evZJoSni8eEkyAkp9y7jRjhJJLACbNcuzmCgqNtRBWwVSSDuFQMCgnUPTgY9q6wr26pRAsxZqQJqyoDpxLL",
  "key29": "3pUPuGGgsVCaYZ4Ay9Yxn5fjJHyBbdG6mVdZq74TiGkmh7wr2BvVAyvX2nJLCximBgVMwr9yKb6jXn6pDyQzinQQ",
  "key30": "2noR5crZZQEPnkYZodY7XKB8rsLYCr83iLa2xdrqKY4ZbEoJfXvyLhhTEnUttZkucvnznaM4TAZkLXa3J18rB4rt"
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
