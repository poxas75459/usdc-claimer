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
    "41ht8UXDFpcTqXXDAkYbDFbiQxYyeTuHxQmPxQovKfPkj7UvfHgDA6LTAPzNJsc1K8YzEcLTT5FRfbwEUPrXQxQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xz4JitRarFuHCdWfqkiy9Z29G4rkRapz53Q9WUQicTUTafKn9x3msCKcfXWw4f85PUGGSqqwz2quEjegEBErzsb",
  "key1": "3VnZtjV8bCB84gXKRmrummCXH66MhWAyN1qyTj7fbcETkD9jnDMygKBt7CqKtmucEN9J1x9yieBcyMkmoMUkB6Yu",
  "key2": "iX59qAUqywUcF4Fk3nkuP5WmtkuTec4KHx7Cco73kMcek5fjkNQXX6xSY13wVgPcBJG357EVZ5Qx61GmEvVbSXE",
  "key3": "2aaMSJWMx6Dhwh8sAsnk8WqnCSzKzdiZBCWaZnqsTcBFuKfX4wBhPLo7Q21kaUN6MAmNonoyuqmYNchUjBtwVKoy",
  "key4": "3D4XCvjeaTCkF2BjVi5DnioiQZavR72jkkERDj4ht1ZT4jWZ3oQVM5nkf173jduRgY6BkYiXbvnaVtJWWqTKbpy1",
  "key5": "3LiZZG21MALNPoL75EPnhwkCb62YzeYs3asc9Q6uRckL5hhvg1u4QoPW56UeDeQF8gA8jE9Aj3UEbBPDb4G4gD7H",
  "key6": "3TcoANj8sYmF8R3Y2r25DEWxAF2Bd2HvAFbvnp4gaFnga65ucgZv3qzLW2hnrXDNjyPEucLdXp1eQ952naLXnn3n",
  "key7": "41Q28N9QeFYXcAHKHF3X6cHC5UB3UsqUxQxBkcQknDRf4n64zMFXijXRpcKg58M42EQUeiZfo4jvHDxkznmqMxFH",
  "key8": "2VyTx2AY9AbSKiH98dgwryiFRUGfVYdUF9aZSPLkR81vyAxh3aZvuA1f6F8SRjhbrnmSb3rRZYLsKYHbduvoLKuu",
  "key9": "5qZ4tnraoHG6Jfh5GgBVSZ5EmQqPxfD4tg6HsLxRp6YYGRNTjg8weygD6an8ba1ETk7XegX9K6wetLhHywapPWco",
  "key10": "2jqiH2CsZU3GCFT5q246KMpqrECzyjcuQShUXn6LEWqESnDdQZdXKPVuWH8oqC6WK7xFsXTz8Svxi598GSGtWB7N",
  "key11": "2bkm2nHk5WmY6hvPCjAxxXXqjEdKTWN4wqtkeDdUuNHLURh2uDL6A4jU4wsDKbx4CW3zfHs2H78oeSdVSWoyXQm7",
  "key12": "2ose6CqacV55PCHKn31BiSDL7BVAW364ponpN3EToK1mXxiYuvRkYXcXnJhteF6FqzVvK2Xsy91t3kNtQDag5iQv",
  "key13": "4jzyrTqTcvk5B4DBpSt5v3PQH5FCA8fCA3Eg57YBTrF4KFQUNJ2hpSx8Z6Ewzm6EDGET4GGUZCaaKcYMnFf9Q1Xw",
  "key14": "3Kcz51RDwKbTd5Srr3EJdvRZJrPfLevfcj2ezDsBb7sR58Rc1fwrJknwptuzS7dXjjwE5q3w9R7vPmFFUdp4AxNc",
  "key15": "49FqrWyYXNa8yQ7WHo8RnK2ecM3Ntv7FdGRxgnmbdRfZuj3hCdtAC6fjhWieiLcssksNZSMoguHCY4oaxrLVXWbw",
  "key16": "4BqKsDbDUEAGeTBMnuB7mJhesNiSibXJPWJbnrxtpyJxMCWHgGGaqYk6AkQervv7JJvY7Jw1WCt46ArHCuEau1N",
  "key17": "jwcwVhnAzVQ2eg9CTm4tFcEE4ephrAD74pSdxGdBfGSD9erCf9FkV6rJYy6nkpWebTFELGSr7M9EhSSCn3NpZ8e",
  "key18": "4rY2b967rH2okM5nfn8tAybqG5rSaGNxzaoZinWUavNf9um1X1BTEckVzsSrHZsXFvE6SmQHVDbpF9fy17XXjaKU",
  "key19": "2m2g5EBtBsiEfyjipwb3YLk7YSDdKWKqSnsHkGuDpEN54DSM4pT1qL3KVpHPDsHJhrsjvjnauKELnmVUFVqBC1dN",
  "key20": "2shKwhotPj52B5BhN1pttjniHfQdHc4FSuK7PmcBPVZNJnnAJ9jCfeFii1ok2KhaQgb4cqV3Kwr2ySTKV9muQ24U",
  "key21": "nsDRCB45QdJbKM8vpWL7j9jg7uvMP8pG8XN1QUedbiLCXQ8foSyrRGe9RfTjDtv4ZYgvyxQe2sc47o5cTLJfTfm",
  "key22": "6qachzH4SxsAfprtt84RY2rHMzR9JzWGwEgyscghz4cKwfsU8PgovXXaLkZjXGN1Zj3CEoWwu8gF9pfEbLvFEYp",
  "key23": "5D3S6PyeZ6tLyrVpwoVMJfzPW5ArwAEJyRMaj7R5bBtmGhRYMyz6HTsYTzSdSZwBXZt5raRiARjfqawZDRMf8vyz",
  "key24": "5FUxgsQ224sUgKr14GEPnqou6qdgR4S84pdfjwg96cRPQrT7G5gbQec51rtqiAeuerLNBFsHWFBD3fz7bmzzbEjL",
  "key25": "5U2HTBYzrSui5571sUfBuXineZKQG4L6cTZeCiauiTAhTNZskgxi6NBiNEKeZoWZuNMKjBDm9nSPbGJTyrohc6y5",
  "key26": "eThMgWacWPuRbTYTRXqbL4FRHofHMhaHadrmkDP6vzdDXKwpHbFXx2fXiPCXMpQE57cXvHvYUEZrsbVXyuFCPLR",
  "key27": "oaDZjBTHpNvLgo1x6Shh4Y49iap4mLVikNkUaEVdrMf2VGHNZnD2CAc2qDr5saA6ywvXWDWzkLsiciBNibkZv6v",
  "key28": "2D8f82JnXxTry4fnZv8xxPh9iZfmFyAmPaBmrmiKJgF74vcvyfmrzXhMMwBjhVP6eKgTn3PvNf2LarJXUEYijiE3",
  "key29": "3zba7aKCcjAudGt7nmVBb78ZgLNcJvZ86bNYdcQKXLeQ2Mi1MaGPFp712HK7hgRDe1vJaawzbWRMHjYRhLtZC8qk",
  "key30": "5QkLbQLCPqRKBJhCdgxQyHHFdKR2ZyUMC28yLEe3t7TDC29UUUrFcQPGXHLD6KVbsDhcPpoZyDCqYxbvsCXLieHk"
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
