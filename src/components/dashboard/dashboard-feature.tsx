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
    "5bsfJRyiWpKTUfuz1qULSL6o94L14sNW5MgNcAbK1HbqruBLjWuquobY5oRMfNUPmQ2boe4bKwWpYpBewDo54swe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2maUAaCRu9mY6yeraQVw2E4Lmk6zbciSLLkcC7YRZqYhADGM4pbwXmo7Tb844AowgSKiyq8Wt8LBL667uS31YMqU",
  "key1": "4VdUpbekyJePfpuQhC5Fu2LMG9X1znSAwPdrUumuDAicuG6DsgFFsjmJ4JVgvdzBfhvX3gpRoiyrdWNCAFcE9LWc",
  "key2": "7JPj7CgnYHwNaQuZfybRe9VTivnssvoeJ74EUXZue3X5JGMwXYLzxUCjAGzxfpSjE5o1YTvWnanD5H9qVMkDE9R",
  "key3": "4CzmJKJ3qhpPxKMJdNzmcUaktMiz2yRXoa2Uy1JN7XeztGNTyjCgwGkr276NbS9Loofqm4gcwhhaK4kifLYxb5y8",
  "key4": "cVPmyEvikjT1H8GGNz2nsD2UbLAkaXJutKfPH7yQqm12G8bFWj3pdEQNqnVgGk1HN7H67D7Jc742C3dJxht4XYF",
  "key5": "5u8r8xZ98FMss7fZt46SCFFwFEnTEXND8NJPS4KMhPrvEHB1uW6aSsdJypqNQudBBBKu62uFg9Sf3pgAAqHVNffD",
  "key6": "JPRzaanQonrq8FX9XPxsWdhVBABvPkuL8ERBUoauNBYNji2TsEPXSSyU14dk3sPE2TAJCCE7nvoUiafgtPLno9V",
  "key7": "44FvzyXHsyf9xT5WvAbcgm1Fxp9bK5dtouapQWH2dYy6oDTHjRZ9hE6kdNuk5oj1cjH8QUnNJSbjty3z2cFJVsBM",
  "key8": "3BiWaU9Mk5a6KRr55nrs5iHfD3St5iz9MadALvoVhatHwNUGtZJxbjGsWMmMZAgM1tyWk2ZXmX7nZUNXiu3m29dp",
  "key9": "5ohMeTxAKwxuFk2WACCqhKrALGVia5vbPm6mtN6mqbLHFsP3GeQXsLsrwtArsFMc6Baw9mPsqs713RaqsJAkymqT",
  "key10": "p1jFho2UwQr2HVNaQPeWpS8cdZjYXHTEbDXicqh2xNyF9kF6GGa2dVqjKdxFfigVmherKUEa6XS1krjRwXWbB3d",
  "key11": "3tiEcrC5rc9QfvoyLz3NB15s35F1vTXjmYimMEb2Nv8gkhzkBkzWWDvsGRDJfhgEaChUFcrcNyvxTR8koCYpLo1Q",
  "key12": "S9K99FkpCETMYTBMX1UTQk3gCyJ1UrdL2VSEcg2eddVoTwyBHu6hUAf9sbNkb7ohb9n9hLDNr79UGgtF9xZGviW",
  "key13": "2wvpraRewFTeQbFdNxcBKy4CXrzVfx6qhfFtfZGX33jF1ZnroK9hY7cK2Nzntvi9eg1DGUSiD5Dz5wYPHiB2kbrs",
  "key14": "56covQzSpTw6kKf9XNUMr7hq85h9JCdcr5NHiJAf4Ea1v5mYfn7X1p3a6VQSYn2ToPa6hw4EC72L2Tck9JaPXJxj",
  "key15": "4qo7DRsoLZEVspTLfU4SX74W6fwTPYX7G6RgEVhymw3K7sZ6ozicKdRXHg5WbPuttWw8rySsCGddTPEiEDXSnURf",
  "key16": "5gRY5psgVBBGG5zrGK4o18gSDLJKTnf3fUDqUs9SWxg9E6fLAWxwvLYEPw5Qr8ThBQQVRqodwsUUHSAmxXH3KFZA",
  "key17": "4mSrc5VdXduBU8R77uBxLoLyRTq6husH33XJ7fCaPhdQmoyGaE5jfG2yRj6TCTTbEJRexxz6FerQxktaLCPy5mQa",
  "key18": "5N3NpAcsLsZHV5bAmnCj73fRehiw4FXdN1z7PJj11E1NrPu9v8Bia7KeuTFs9BrweT2VPCozZvVyQEfg9Dh1G57T",
  "key19": "mcPWeziWLrdPeEpt1187o7Ub6LrYgCE4imLjsREghuhXPzBZCPCJ4MoQyqBtteHCk9cwidRzaEecoGWNKaf8ss7",
  "key20": "xp6Uwipa96pJfgysNdz5ujaHd7mevW8zh9VwdzJ42XDx7wifDkU44Y4GHKccfRtaLrNtMrjvu7hGyoiwDCtmddS",
  "key21": "492U8dXsuReLsq4ns1wnR31j9G61JubGHovvuuZJSekq7XzCPcrqMhPqqufvPcCcJ1bNqvz1JraxLUsZ4aWJEres",
  "key22": "3LPneay1j1JVwkyE8ViYRoP35xJcN7Q7ZUT8t9Ych1onYTmvDxJDXtJEiJUQQ9ipvHx4pxsgXvqcE2ja2cgtnhxb",
  "key23": "6nFXgFdwxtoc4DvV2JxviJiRtryyLSowoDcjZ8uuqdigdvNbmYHy1YxMEJqihYyoqibW8qVjmdkBbYH8tPoYgJP",
  "key24": "5hPr7yr9gEGVY6jxwwcPCmWJetCka2aqibGQFqgiXMDVSYAU2jWr2a9m8nWKKmepgkhGzVysXGHcXLs7QgkkaBSR",
  "key25": "TxMnXShf3rSYh6UDtGrrLgvdmEDAgLyHJD5iTRrWvF48jnn4WnB6HZYydLW3AqHiEEWjE8oyZ3gkHtH7gc77tNv",
  "key26": "TqFXi7k7wnbvCCCw6K4dbtrC1vh4foS8xoFLmdmTepMMYoAKGZ45kXXC5mmXnTmujKXEDV35RegNieNPcfNmXzE",
  "key27": "2MdSDWcbXDzUXpzwxauaof5YLfehXsuCxvWDXsb3co9U6rF5sLn6XDa9VkBxmzadULpiyHdoihfCSJnv4DNWWZFR",
  "key28": "4Z8pj4hB9pS2cbzFc22wwdFQ2EQPbhyYRUdmV9jK3dw9LGFEcjJpMCKqbhT7CD8x2aLUNsozwQd55vTmsGK1SvdD",
  "key29": "4RWP2yXsdeK3U275oibi4E3cUZPbajAhiVPoc8DtpEVRMwMrvx3UpE1x2bfg4GJPfHETunzH8c7p7gjPSfHzLgbT",
  "key30": "3UHC2ruTYBZAx6GCrk24UzFvSwqRq16UVA59wo7jnZudjdTii3ey54skpVzfJLo1wUXEqKSn8gPnfMkWbVHB9yJU",
  "key31": "63ckLDy7ZvwJoPX5yfTtJwHZbVACVcLZbXFSqMr6dSradCbBRv17Fr4GBMtq3F3w46HPQt7rwBt4Q4KpgAcwbE9K",
  "key32": "2cz5DuuS6J3PB1C4pzpxtGWDe6fCjkSGhdyVRffNd3BuJaM7E1bJxJ5JVjWGCXHyvz1hpzKRKXjVZz19ycjiPrPi",
  "key33": "3EDMFwXZ6gSo9tjqeJJVL1dAoeuiiZDfZQ8wLtwyM3RWnpkSTn6vH3SXGYqmPMP8gNmFkuYCYKfDwjANCcWSkz9E",
  "key34": "4C1h16TWrxK6XMr3k86JR5oVnr7kzB611F3h24UQrFsqgsRawXhQ1GBhAAKWEna9dhbXxV9bEREwUzjXmmQTbxGd",
  "key35": "5g4UD1Un4SJLpD1DTSXYsWFNbHfY9NT5ork3VTh1Vowj4wKvvYhgvvW1NVDzC6XybRibFJ2SVfh7UQJbA3NsMbre",
  "key36": "URx6rvbULeLGmeLHKVxCkHuZn1LXRLoDnVaNdTJZEQTwTsfstPYgR8tkuhKXeBTZdfS2DaHziypkq1aF1z8ekgw",
  "key37": "2BujKXQGyG3JgUgqsnDYqeeUWBg8GkpwA9AipUZTW33grhqYKG2qBfDoUUoSMCP9ws74dbVz5nB37Yn5gxwcNXqw",
  "key38": "3AAEhCLv3f1SxwiyyVqmnqAi2RmCPKUHj4a2gbrSJcd6e4uKCCFJUgUT6bKJV6AzkkMidqyVUxirJm33jq1GrgXs",
  "key39": "55ZdTtsJvoD6b1WB8XH4hGMCMv4H4MBaQYfsi4hsdgT2a4AUaajMB5Seex8toZ7UY7VgFJeZtCNoZcEyoS53vqAf",
  "key40": "4uXCj4UaeDBWtv24yN4TgEEDqLVgE4iri5nkfqxEde7Xor6FHqTiLbBuTJW39eVXxx592XkpRuv8wF4ZPwEdgupQ",
  "key41": "3D1UUGLQmW6gpfwBJcgj9Xsg2TggGCpXd9Fa9CZAWL7ebKt1McVoKYgsrQkxKiLRAuKzmGnLC7tsnjJG7QP1iA9j",
  "key42": "5EnpG7LZav9rAXCTzZ3yG8BN7Uzoa7DYRTaBSmwk3dHJ6qb9TxvWnWUHgX9z9LwX3j4Z3FCBcuFgtwKTjDoxyt3Q",
  "key43": "4s75LToH9a64etzedNV3by19a2bsQg3NB1uyd8AAy8KoeWvxcZXBEcpbTihbZud5JYqg7Y3wpJmVYsx5DDRwywq3",
  "key44": "5KUmY7xNFipee4dViPdXpKWaHRqRjHRAbpPUVFV19S1Pt9M4q5GriNCvUcuafC3mi6kpgc3KMYtxqzQ5VW7hXEUy"
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
