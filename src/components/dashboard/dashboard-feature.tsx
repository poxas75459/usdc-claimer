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
    "3sCYPMezgfsMhAWAT5pcGiXDkivSe9TmPfziTap5HhU8bUoTUoHCKjAdLHX5XSCHaSAfUfjbKgVHwMn5cmxGcbyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2re1TRKbS4KcxP2XpNB2LwuWSwX4cJAqPZwTjvC4jJReTSAPMEQNhZcZYK2CdjPTygqud1cUph8GbQAGyncyB1Ce",
  "key1": "47zLeJBN3Gfquu5FR1BLLFv9QYY4gaGZvUVqgEgPLvvJz8Aak9PVEthh787VW4ADCF3nvyWMVLGZ2vhBRfEWFwZp",
  "key2": "2fQNJ8ijGgEeXbpuGg3R9TtQo62yMns68qSVysLFtnsdBviAWmt8CMPoxp6EW3hrHiE8KBR2UhT6FEKJPAaEZ5ug",
  "key3": "2oEtDteS3josbNo5DohxVYHjZC6PeVjUpv2QDADpEmibzdG3NP1wheYGxovJ8FqsLYXTKrU5QXZgZjYW7arZG1bd",
  "key4": "4SbiTErzRUAULwEitesfqYrTeJjMKHJJzRDw1dAvBHqfGhL1djkEnESwQDoh23w3u41ZjwHoVgVtTFeNYA3CM3xQ",
  "key5": "iGHumY4qnSX4Fr5oVT1dD5n8PpjAHVGiCLzeBqTNThGCGGgJw29UYMud54BAuFwVSsvzKbWUPoHs2FSfQrhe8oQ",
  "key6": "4yKw2dXZJQEABnEM8NmqjJjr8EpaQb4mWyhTG8Bu6ajG6VJXbydYhqobTPaaizFsUrVJqEssXi36JrLrBrpRdGx4",
  "key7": "89fk8Xb5Y3g71J1o943VQrLWfuaqFTXYfhCqtKdmQJ4ABjhFagQDfRCHvqM36wdYVkRiYHgwVw7gauhoacqt5Dx",
  "key8": "3veDcU5UHmx3hLuEKHYpQ8tz1r4Exgv4EssLgdMUmAGEi2xzcjtJAdcfESxv6qJ45WdEygXBuC5keNgUYHz7WGTt",
  "key9": "gXTnpHx8E7vNhh2Lfy7MgeFZQJXc8FPeuhsefbomA6hxwkpzw3py6GnshaSKddTwUBdJA4EwmNxgHkeLLFP1LCW",
  "key10": "5znRDJF4S4h5bS4XqJXLGDeAujTy4g4Hn5mdX5W7bwScBtFdHed1sRs9ReRyoeQ9F6PkoST7jYgBtdkWxsh5eSqu",
  "key11": "3hhb3jcwgcgQJW4v5UK7kYZHxtfxfhhhCCGEn6esKKum1N1mEFoewQHhjB6nQYc1iQdfvsU9V8UUbAexDLHyStZT",
  "key12": "ntLBiHu2G2tzfBtdo23d3ExVtHZVvf2AHvwZ9MxMXX1WTindgZwdF2CDZAaXkuLi518LVMrYNJa8RkmMu6HDK4i",
  "key13": "537FeRwWZ18TRh3YVyreJwabqswpyK31WShp9xLHEaegctENFjEpxLeDwe3kdQvFfB6iz61U5RnV5dHVxbAiXaom",
  "key14": "99xnid4mYbzWvd6wxR8hbkKnaVDySJc5AxTa7URikdMUpk8MVAAWepNwX4doxgkMEcsKFWnM7QALsn9Gq8jWQp7",
  "key15": "DPNPcmnC9RbsbQDgsC2XQjSFofZSZdHz5xLibmMoBxzc7R57seyygNXDKdkPpVfhvDTSfs7WepDT6beKx8e1zGv",
  "key16": "3oJnCDEeF2anvbDWABeJip6UoqrNhFqGUsiMPoX7ihAz5wyXY4bjSRXHF7GajdgNoz7Uy7ddP7FB3fZYDE4vdR3M",
  "key17": "2MrnXtncoTeWtN8QgQBNKuct5ipTX6L8q2bSkTkvW9BtTDBDGsnp1WVoQJfUoKA3EmHBq8gv6sCnp1Lz5YVWkwZX",
  "key18": "2GHhxziBVcU4s5jfyHSCrghxyatagWDp8rij8TDqezyFFfKBPKwE42ovNjyJipm69Cxmi4T3NKE3uP5pMrK2FvUn",
  "key19": "EoMogQfSFDRtpg3zr1sEQyWDrLprnP4DojcPThXnM1Hj4gKehbUYaiBhtCv49pCqkDPM5mvd6XUK8WzvGN6DeGM",
  "key20": "4jrBCRpRAodQMT6JXbkhc5a4hP6PgLFvoup1U4f7okSLBrTuAEHzWGKmto7pmzYb4FQXa1gzoRNcAY75hg2d9dS",
  "key21": "56RJ3HvsH5vu64mbwCLRdNpR99fEQ7wP624oDUHZ6LBkt2q9JCTQKKRC8j8RrrEg1vPHtkyJkM4ErNfP3ZZNKnL2",
  "key22": "5titjvt545WvmWNaWQWFUwBY1hA8K3rac6ErH8MQGdc1y6Pu4BkQrv7CC1oz5awkURguGyZtRisgue8fFu2XwDy",
  "key23": "2yhoq1dspW5AejUD2ZBbpSSZFD5Yrz7e5ncjJ7zrE7gLjLxWHfX63ks8dyrC6UupQeX8i9oy1Yxxkaj38V5kqRtY",
  "key24": "5nyghMaqfMhPwo1zNfrmneFzw9UCJ5GugmPMUJgBkDoDjezFgBetocdEg8PQqJSN5aSkCUHDxMeeYBTQ6W6SuCap",
  "key25": "6zD8gH4kcXWeXeNznnBWZFL565czgvqMAXmDeC7WFSXrbRTwnF43xqoJubyp39r1bVaHYw3STEZFx8v9YgjeLRx",
  "key26": "28aNimYsCvY9yDGt9sqYBgF1KcmfjuQ2Tdh2xjAJKMuyM74igBykmBAzbsS6XBhy2qnfZo4pb8QvKjgDJQiTydCk",
  "key27": "4WJLWmwHbraWkUNkeFuhBufUZypiqnwUAEJUQwDob94ZWJ7YEXT1LZ3bGFdUrfuRKmHPoHkW1dn2PdGxdUkYctr5",
  "key28": "3YQEqJ4ZNwysRnygNVfosdgVmj4e78m2ogXLauRMhab5snC853fybZk99BH5xXMwDkTfJ26A9BWHB2VURjM8URy4",
  "key29": "3pkPsnm9PpPrnJRE2DFgaVeYC5erpvVFbpBrCXePrjFfJmy3qsuQNTJWZc6JmkYKvTDDC1dBhWLRycBdJmmZ8q7U",
  "key30": "4722MT2WFqw8vC6zB9KVyhVNxxqPwxEHYpgnqND1bJQqbeU6xHHPAyhrisbcMBA3aDfo3Yf5cPL15B1XzVQqp7aZ",
  "key31": "5oLd4ig8JBMuN5QQnyUBQ1vfzm4piA2f7WxqpkreXSMei6oe4JLR8Ju55q2VyeKWthKJKtu2zH39BdMom5XDhDyF",
  "key32": "2mwNq3u21nPuTCAExAGc8uBWkbbviLutgHimj3BG9PcM79vhSShURepu3pBGduy8ZofV22bWwPNfjPQgtMJw6zYa",
  "key33": "P4GSzXvLUArZM8QRBUvXBoAnJsPTW2eK2p1WGngvoQKn8WDhm7Py4bQU7KLtVhgqZaVMaS8CMpXXcCS85YRtAzw",
  "key34": "3F5CgX6PGzrCLcrtAfRRAQouvog8Q2t4x7ngf7jLKpcHcXHAnVEYJKS689xSWXmVgye75QdyNBi98oWdinEVAN6g",
  "key35": "2chtioFme7YEDVpspAjJiaHkYt7Y8WfizdqcSyXfiQvq6wdHM2iCffidNpea5uVqy8Da93Rj3Gi4FnPnNCwiPNF",
  "key36": "5bbWs9kFVfKzVk7tu7g4JEs3SCXXSsaWQZHLW4ES35ZuBBvXziQFCNFPV8scLhAP7sUTj39mHH7YRWMf11iQkC2k",
  "key37": "wCMxhjAbN7GzEfm5KYaByW38RPoLoYqfoLb2G2dMweJ64r7LVXpTrzCAbxJQDH53MpisLTaZLWACfxcJFsx9QzC",
  "key38": "5J28xupSA4RJJEtaRtrxPRniN3zD67zAQw59x9jHwZmhm3m5X9pamtS5rR4u8TnT5FGpfJ1dC25M61Aof7FbvTft",
  "key39": "5gddD36cZCPgfHkgVEzyhhGibhWNFgAUTERUR6T27P6gHBdRvAu8Sv7gdS6ZyfV2PGkZqpdSsHm1sk2eBR7w1k4S",
  "key40": "5xQpbwRHyyNHTpzG8czhPgcuMfeVTyeEE8cu4dY1821sWhunUw2jEa1vAyj2LAa4PCb9gsQ1F1BM6uH7BfQGhaty"
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
