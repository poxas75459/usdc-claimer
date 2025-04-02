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
    "AG9zVuPBFY9t6HP6rcoq3GqVpViiet4nPNJP3qHQ7T1ygz6PvQ2TuoVsowoDRJJ9Ugp1RtWcunVvKuMcAZpjagJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usQHX5ezXBKmTEC4aDGE8JJHN4NvkbJGBY8Q29zNAzCj8mv37UbKiTGdmB71ZKkcBfosfeHLVJkoLSMDN9X7bnx",
  "key1": "suSMGqTz3byPbKLvDNFRLCRQxfvDZNzVLrgMuX9DjvzcsUQR7dRnRN6EAZPaqahQfTKjAxbvjkcuAJD74ABwqLM",
  "key2": "4Rf5GnnhCAwwAQv42PgWkWefesbkQzcs32TMmTgPkFECTqkLUCVdjoNaZ4pBuEzSs6eqPoHmCR3rhr6cJcZfMnXe",
  "key3": "5Lbmd7Q2oDQRstSEjyyDuZne7Qexd7na524BAidCDhuN5qrB2LeqgtZ7ZZdAn3M3uCVmMkzvpbSc3DQk3Nvr6oTh",
  "key4": "2eYRJj8eruVNHkNShhKVGxWxMrsHsJTUWrW4Uwp8rg47oemFirPac5v7W3gPpADqhbBBYWY1Sicxg2YJeZstwb5f",
  "key5": "21z4CvvPS71UtVdhQhAaUFAugfoE8KkgDus89QwnqwLn9NYjzcd3h2MxEdG6W6DA1p8nrQCSnyuXGJ3StBLof3zw",
  "key6": "3X95AnMhtwg5JBT36FhsfdbMzi1u5KXNawtEjB2kcbwZ5LARMuzToAAABJSrjdNdSFfuX9XZFo3b9Jv4VBSV7HwA",
  "key7": "3vgzU4ij8mJTvJL4NqBij49PnmrB11MwCJHpTaYLvpwiZrnU9yyKMX87iBCcXuPkjvze4ff3ddXxj16zBeAJoMUM",
  "key8": "43SWgkoBcuDwDf64DmYFvdomQmAAZPU4AGgZvtj9zHfGgTfSGuEppu4ZnXbxekxWsj5m8rhRsbj28maWkW6fc5fm",
  "key9": "4MGGk3u3RXioQcuQWaJCnZAw1P6NmQShDJXDGL8nwHj3sDNGnfF5jfnLghZMnSj98X8ufEx4TQPNNB4cGNVkBq3E",
  "key10": "5zugNE8N7FJZwJirJsxHeWKtH5miW7wNbFimdrci3sPyh8FSk8XKZWGXUhPyCLiSS59X8NcaVwcmyxw8nUXJSEJy",
  "key11": "NYc4g7RvWFssSJarjup9ZXq67xpvvFoJW5DAUE8VoJwWTChTGb7ie3h1BXxhz97pXwbRhUywi1CNDYwRSvXtmDx",
  "key12": "3nZG9W7v1j1MscnkHCGMkjLSQ9vv9PaCN3aNewq4S6pd1RCey79Kwp6XdktyfBVhRRvZNdLVdvyJ4eFtHiwYz6cH",
  "key13": "58ypN4HCFNi3LdpjFLTaEKPzLJsKfACgN9haZ5ircFVLPcAy4g5kxxLHTjkBPGKHJbEqhyd96nGQR51taNtcFVVB",
  "key14": "23hxqj7UbPnoJmncZpuW1kmhxNs1c7xmqpgEDdV6mgbcFFwQFYo6AfprHshRoEefCSse48BUbS4pL56JXqcG9GNQ",
  "key15": "3QfESTSC6z8RTFKuTYkxfuXq9nknnHDLSsGibkKgXoaVxaxDDdj8B21Ddb11Wgna9mhNnL25WRhnTXQSaY3tWDBu",
  "key16": "5zAgEqhoQ3g3BRnHT6kEY8gApitsdUQcq5rrXvVgKH4FtBBS9cAQK3mYvnh9bkKePjYE3tVDrgZsN4eJjhqhCX8c",
  "key17": "2BJK63Qw2ZNdv4D8R6acy8wnkNnW4DnQuzoCmNYAMfD9Gtg5soAZ6WGBtvddiaG5n5QBvZy29zTsekBD4M39Ji2U",
  "key18": "cNGRfs4h4LqbvzkFun4y1BnASN5w4dskespN5mM9H8XpeSwzDPWDxoWahnPzc8Jch8Sf3F6GNQ6RutnUfufoVqS",
  "key19": "34iUh73pEDGg5DL7NevHFH8jGon5g6qa6zPC1yj828uHMpxu7ftHJ5x5nhkswNCrpykASGNWX5bT4WQedJk6eF7G",
  "key20": "4pgjQ8LdPPAUubGyPDEE3HhTgVdwwJAx7RUg685dTZR4KpW8DocGsDfhktGbtYPSEG1KfWWWg4XUWNcXsxuMxx7v",
  "key21": "3nDmG6SVy7VLLNfqL4kvfYvreqMNxrssE4eCubZ3tqWLsxas2GmLRtFfVZNmgsRGJBR2q2mXvmHwhjcLJwemGfzX",
  "key22": "ncmBWxobDRvPh2W8LJ6pWESHFXXBhSAJyT6ZZboJSewu483MbCkuN2SpVNjXgQiVhDTTG924Fv2GJogrZn5bbVc",
  "key23": "5BTbD1eBUJet5jj5phk5os1i3YSooBne9Qwze2NBEhXVDLewKhvMKSKZaGu4WseVcxjpdNyvvGf1ZBcb7geU4aqs",
  "key24": "44K6jjfdkZ2rsHZydpXRA9J8wRjN6XNwiXGNqmsYAC6FdUjW6TmdNJJnyXPm1SxDtMMKwhFw8YMxPuDn9DnkiwNo",
  "key25": "5EPu3Lq6n4CydEWFxUX6NyecsQqwEpjRzUuzLbmYnKwHhakVQZW4gNgDTQZbByJkogDTkyUqaSKgJiC8uqogZzbE",
  "key26": "3pYS95Q42EYDfGHyNyLM6MmdcWhALdWM5Zs5S8dkdHz8PJjvWjtTNXykq5YLf6HzpXnFFiwfjur3nMUffJkuyEZU",
  "key27": "5APCh4jTd9gkWfJKrzdYNDyADCooVanqXZEHEqU7NmF429wiGjLGdhHcCoN7VE1K2Mm7CCc516PKKcpv3zb38uvW",
  "key28": "2cHVr6YuAQVjmT5y7iM9vhVtbEo9imWAvKYKsLbViYdS3hbtNRLKXyCNGrA3tJNCNvFRCMYoiPeGuWCJ9z5mDegp",
  "key29": "35Nxmo54h3pezUpBk3cgdM4xgtZrMzcAmYyELK7EAGcuFqNXbQJ5g8a68FHX3jcJCemDZEeDBqH2gqMGrCWRVDvY",
  "key30": "8AD3db3MbrByRCP76jTiX31ZUaAnR3ftjUVWmoQuwcwNs7Vv7N8gjvYzdrWtWYtbdXHQD7wMW5KZqYYx76Yjyhm",
  "key31": "4vmMN3AHACk5nE7AofuDzEJYZamzUBj8LG9VymwrtjCzJr2Tvvj2gPcWFjQ644Ae9xAMq6buEkPVcq1LdnnEZPLy"
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
