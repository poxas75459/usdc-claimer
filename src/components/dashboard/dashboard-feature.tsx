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
    "418nxWNErMJxzZSv5Hnya99eyN8aSd2tBCG2SGg62ndmsv75XBFxDsP7WmhJ9UcTswGHUN61tyZ1ZAcb76pSh6on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26K96qUw6s6t6SeVCtSDe8XLdThDWmAomrHq7T8sBc7fMwexrTzeUHtL269aMk1jqWjxQ56YYqmYttQCwqiBrxcC",
  "key1": "2RauoWArzw4sNafADRA37GjUVJVG4RdrhhEftpGq1mJi1mT1qUgAXppBtXXoPH6qGEsCNAsKRYiUmxaLNagbEVRd",
  "key2": "5hvvpC9SS15YNQPukLMS9L9aSh6boJCNrCG4V6EUSpSZbddC8QaveNnQHcsyntid5dA3rif8xPS5DnEVRAHf4vFj",
  "key3": "3Bjgx4NrKuhtUSctAKkR43keaKcVEbgEY1iEf6AKvA9JLrcbfH3npudCL8dNo4i3iKKpuAx74HGr9864LH9NTZWM",
  "key4": "kiYRT9AQgbqzvjbzCbaeyu5x3Fv8oi51hx5C6zaq1gBvR86tcVzYMW5fxA54ounvYgB36TTPeKu31NRU9iCxPaP",
  "key5": "3xHB8VHe2A9shKw6Fc8UYgd2Y1JTCUpprd5C5UbkXGZFmqqNarDVHBeDxTESBKfyimqmVUsuGioQrSdPxKb9ZWyL",
  "key6": "5ZSeQ8dsSapZE6cd4wAJ69SrzMja6xdikz5smSb3gthSJPZVj4gmeCnFcwgWE28vdRR72WgRfFpaFxqdCpNe5oH5",
  "key7": "3bjU46NqD5o69S7sCD3RR726T24KkcLN6LqQU1byNSbXMRin8ptAoH2VNjaXM7BvkK1EYuACKYFb3i4XXg6C42k9",
  "key8": "JHGzSYzfmiEzezSVS8jkc57q69ERiUQdjyvux991neReAPwGEyHHA8LhXJK9jjvcNV22gt6qUfoBEnVQB5FQo5S",
  "key9": "Q5RGkfoY2adWFZc1wXv1VMYGPF358g1d51JJWKomHEY9Nv3eFQqXqgggs5DisjbPqeHKmyFrjKHqeji4gfey1WR",
  "key10": "vbYEPsauA87eu8u1YAEkx1ck6qYLrPDah1SBVdmrKfzVRU5ER4iUPjhVeS8FUmsL3v3ypmxVYyVpsVGc2FqwcWV",
  "key11": "7gAmF7mvjY1GvWE7SvvKCKWoCzhPBQDTVX9dmUNAyWCJRpWHfQcH7yKKr2JBgSaDvxpj5AaABo1K8CKocvofQ1A",
  "key12": "3bNicwEjuY3tR1wpaD4aChtQz2NmoNkoAH6jj1omQEvCWngS6btqUNrBxRdoUKSVqnQ8wMhC8pTCnYetLvKhJYUk",
  "key13": "43oHdpixbDKA3dbWbPGCjHG4TZ3TpR3mXiQfqDQ91P6JqND9ddYb9VG2Sa1Evfn9g2Vj6pLhdUjyeVtpu6AxaSRP",
  "key14": "3NAhWRpxFEwkqv9KRQZXbGwBQxRmibgXTMkbBJ6aAtX6q4Rk2YQQUdka7hJuM9HEnU1t7BWqDJHgpYcZdE87xxdP",
  "key15": "4jRcWDHeiLY7qa48FMT1CGm64JGZP3yffQanrtVacMLJxvgE3YDdtgroaNwZAqLQ5iGrkwEgmbExWVtFdA232gn9",
  "key16": "Fbdea9agXiUYGC51vdGVJe6MSR8ogKrchSBiTeydb5upvkXRQ3kYFTMGY77tm7AggQAn9hC81bpBgvMM3MFjmd6",
  "key17": "5NnvYZFcgyadsRrjqPx8MBdWhWLNkodGQxg7ULs6UdtB9GcfRi2iUkNJpUuHWt9E8EfzxazAm61DoNhNNo3s1neh",
  "key18": "2raYhcXvtbNEbxABNCZgCtVSTRnyBjGj38Y8pVQ1SAtxthp7ez2QY4pbs21HQ7gCmv75dbGWdnddyT6TMHqj883V",
  "key19": "2SbHV19SkCcPVE8KpNKXpc2LhHkBG4aKVwk9ARouAKbf6Jza291PXKsd3ACg7BURjaekGmERZd5pghUU65jUATot",
  "key20": "3Zq77cRwwsg38ntitfUjh4KxaiTaUvdQo5XczGvHyZyPxfZ8RRL1dCdjaDE6pXVfdxbkNcg5aWA1VgHxuAopAzvd",
  "key21": "5wYVjc6P9vWmLYNpUWtobAzjgSbzdZi8QxZGRPfMV7WtSdzSaR87PKDs2vaok6vs9DhjJ3DvT8ihHn4Kg6LgqbRA",
  "key22": "5vuMEWCHP5LJhWoFacrfNJfVbhRmL2UPCWpTHV53bSzcFMt7T6gk4C9Pmj3YhaK9EmJGEfo7zshfoNWC12KdcZF1",
  "key23": "39MEeVpY8CK7DDzSf2mUXr1pqtFRCceFtUN2c5AHi3NYM5xWW5u4Wv8baQ8FYZgX8G7Rg2REVa1fVw6qG8rfQHmp",
  "key24": "3SHD1sybESXJxUb97GCHwJT3QdUM5xSyNG9P5gTKXJJ6sfGBaD3QRNofgZKKfu8dKB2zDDWMj1DGcVs1titKiQtM"
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
