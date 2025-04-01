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
    "25CbXFkf5kV4psZdwbkRSPcPu36Fa3igNtR2FbAdvDbZ1CFLMpn6A1JHEFDe9rSbS16vcV5Qv5jKVXdFJGBE3b5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSJ4RYPn6vov8DoDDwYo2cRiE1vTfednkDj8Ty9JWEMRkuD3PvKFPaBQUm7mCh1fZZAMCQNDsieBBRQVgcBEvCs",
  "key1": "wGJYdGnXtiZPgk97UbkL3y6t8CAnhZkFvENiyFCK5YHzEGWLEFAZPbUj7Ci8R8zHnaZkpLAK5hM3pgeZFdG5EvW",
  "key2": "4SwBYJsQi4j7FWPDp1zU32vxpfmLz6WQj7yJdPBUm2pAaZniHzxUpwn9PwkF9rzLQWZXWmfJrLmEXQvDVy7E5Ybg",
  "key3": "62UtLsifDXF4fbbzK2jJvvxJx9bqmpFHpPtzzswPdhCu4iFPmDzJiScDagAR6UPpSLmC8ziGJdTVsEfPmWEkr1cX",
  "key4": "s6MnMUMTfkBeNF8ePHPKWak9eC3a6MtPQLfZoihYauSr3n8ofnExy1wRdh2LWHjBJbTEMLtsWNS8Ph8VuKSpukY",
  "key5": "2hv7e2QGnyuVhFkCEfMwGHzunTRSG4QNrNsbAoSHiJEakkmaGMft46SdMBjzhdCaNwJezspgyEs8yNdghzTAtaQ4",
  "key6": "4o1WzKzXZqVvG1cvjC2ApM7mMZzskNfLbBimZi5AZWu3fuYEXxUn4AXGnAA6sYoGjvYueD4PGvLTf2GyadkE3FHY",
  "key7": "5CFPeM92hsYNJyAuy7CcDhZPJqc3prEPLS5fVM5Yqefs8CpirbMYMpucuAE7hvDaMGkS4cTotocu7u7eWGsUnhup",
  "key8": "2fc76xuSRDosyjguarFv5Z7ShUovFfkuzSMaMQMyn5c2Rot6SJWRXVcC9Ja1tebzQwzQTXuHRgDAqRXy6yweTpGB",
  "key9": "51T5XRKKkWC29kqstgEGfvoQb5CHFJc5VSkdMsvuEMrv22dNb5pkr5qF3fCwKKnFthv6xKS2qngjvaEarMSFxtSc",
  "key10": "3rauqNWjjLzJetpdzb9D3YREQemjf49khHjamCuN1xB4naE711sErFM2D4wnGexezdGsoAaWUNdm1TgrVPdvesvp",
  "key11": "RMHpE2subqkTQPV2TuBQZwtAtQ8SHHp1NkGfMBbBhwrMovXf1SG73wuy84Adoucx27gEuxRDbYvFFVwXeozLrJ6",
  "key12": "4tmoMCtvmCG3Q3DFCEFZ2KHJfe3krGdrWzSyDZeuEuPE6tmBN3cbDxp6jgGugeFDy3bXoYAQyLhJmcFuhGv7NyMa",
  "key13": "2vTVbfBu9Ye1LCgbbptiSxfBoLahunhjNvFnMYYGb4qDw7Mf8Qgwojo5TK63VZHZfMu5DcJJ83tEuaBHDJHPUAn4",
  "key14": "3ZSZJqLKpPPeQQ48eh9KjRn58QeTWtQfUb36qzBcF24uwk8G2GxWtAEAT9k2SCF1ZmTMppLqDyo91EupAe7BxyJm",
  "key15": "5VzEJ2eRQgxNcR28S8u9dBcjx6n2jtYeMFubEuFjwTSHNXLN9jUXqBmswaChfxtSJF4PRfrXPMW2hM6z1m9rxnMU",
  "key16": "4xwNy8mGXUM3B62oRpeyVKmuyo6mnUYmTSBmeoXUhDkGfBX6SJEugW5NrCthcjNsznDoYnPU8LVez4aZzW9cRqVy",
  "key17": "aMGok5SeKUWQSkssZZxCsvmdtskPasrzirJTbS4GpUvKhqeYUGQrZemrjM1LK4uGXYCbDTZhrypiSzezNyFkbD4",
  "key18": "4sR7QZwBnQLg1r5WwdqPem3oHpyrCcu1crQuFQqfzXzXoZhPHLmM5Xgtq3JnVGiCp6w4ETkZWhMeiwQ8fZdyfkb3",
  "key19": "2sogrEKbh9FQZPJJNGSuWjF4FJDiQoSzjRGh94Z4JURa9AkvEggAporssuxJrcBNjpPL2xmCwXqSvHwaaLd7tUAb",
  "key20": "567hfbiKmUuncegs5qncGHhiQdf9XBxGPF1rHNyMcsrvXekLCwVTujYFrUfjD8PqDoSa3ELDwjwpEZfg6LKwfgt9",
  "key21": "3rVDBZgDzYENjzzHB8K678QtZrQZhXxcDmuxCj17XkzR3N6LBMmURWpfcrGAz3XC48vfUkSsNfZiJN8NX28SpWDx",
  "key22": "3PSxZ2XdJHp3f9712kwYwgGUwBmtzqMnmxng26VL6k1PmnqrFsAHeYwrRGekaFWPNqPXet18gvKjLeRAWkZ4upA9",
  "key23": "5czKu16usAwNNQGKQ3QSneqkQ7NrgUHTfHrkenPiuYDyvazbpd8xUw6S53QXx9HwazZ2PD4CGuegUwssx5NqYPmS",
  "key24": "2rmz1zzSJGonizAfQMQfn6EjTrdc9DjG2KLZikWz7fW5ov7AKPSJMSKBtWkdAGdxCFoRoFihHfPFAnmRZj8as8DP",
  "key25": "4WHUF19C5C2LJiJXd3tiCYXqyA8x2xfKi7DsTN44CS5xnCvkxrTCPUyqCQTpb9LiJZtQYDYig49KtGrC2vmP1WxQ",
  "key26": "7afNY27LU575x9Yq8a2NYP4A94zopoSiSmCU5kdbVvWTi3QLjyCznawiZKWCKZjjes1T6GvdjCWcidrj5neapSG",
  "key27": "5wPJp6pgRaFY6WzfCTUraWH3qUy1JwyjbTkMjV1GGDpMj8RWEJr4iDnotwsuGvc2ZSMiDvjvpWaypY8snXGPyQmH",
  "key28": "2PXZ55j4EToNnhwi8eAeiM41EnJhAghT4NcgDrYMPnMqbJCN33k672VZN5Tg4dzFVeKj4R7jSStwSeZ3GfdfwQeZ",
  "key29": "4PzLFgLcyoNuQBViLdwV4j161o9jZYAdu4JyzMactG3WY37pC6zKQiEJxeP3egcHS57FR2rYZvsh48Axu2vLrCz9",
  "key30": "4VLcadvTCpgpGAWU8kTncfsPEoegiic98qxnvyESivXDDnMYB1E6tnbwDwkUaYS3esv8kVM4ykq5PNr69FxEU8Xa",
  "key31": "UA9dukvoNEezP9y6sKNg1B9EwcBS7kGfxZwq2qvAXzikzbfdT5synqZr1hLDiN1bC7TAFyZ2TbwFxR7bbUsTgEy",
  "key32": "4KHwFiiCjmVtYGTd9B8dEa1CsRkQSacwVkDJB4JpRAEKZE628Wi4wh2UsLyD27bxiaTr2pMKcGkSfNVvZWY4RFZz"
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
