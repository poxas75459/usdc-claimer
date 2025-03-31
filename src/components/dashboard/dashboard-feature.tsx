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
    "aK2ASzqujLEJWAG7wFio38Pz2syX4dtzPgdrVghWCJGPjPAjd6mh2A2YjeuzP7xUfAdU4X6ePHJgac8G3QiiSZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRp9xJE2BfETTpokk5Ahy3k4NgeYdRK9y1k9ibBnRm1k19wsKtWAdWiRFg3PoPLPbNrS1oGZ4r4PUJmSueqfxnS",
  "key1": "65PuEfDxRVNFAiCfch5zqQn58CHo3Q8aqTVH2V8JS91DYxrMn5ARKMYxzfynsd1XzPXouM1nK6hsLN9kp3dNKowQ",
  "key2": "5DGR6LKaypAXr8wKKZQ9wxuuWytGREUZwi9kjrFohWYvgCWTXLUYrh8WpDRH3P1urau9nMmnJVzv2ZnFmCMpa66x",
  "key3": "2xKoMqmWfZBeHP4Ca42QQjJujxXZV3xhjQFVGD6VWhRzNyZX7CDzGEjA4UkgCeZGz7niiRm58HmHKtDLwocVhePh",
  "key4": "4MgqRZpNAKF5eAbYj1KxVrq4X5AVkepRgoV52KtQQeydhetd51MLr1BSFSCAv3TVJ2h98DHLt2jJ9mLrfF3e3HQ2",
  "key5": "5AtuqNE19uR47Mrzr6bzKJkAcpfPoQJYhN8BopSpdd4xFnfNqcyoMj8gYYkW5uo25ysm212rxjnWKDPqdJivgf9p",
  "key6": "5reKJqnh825D1k6GwdBxCJ18RAfQNqPJnoghhGGuUJshXSvvNgtB5qykM3LHNqivRSKC2tTazVcR9nbgm2cqZfWD",
  "key7": "5me8wvQtQTpKaKdQgUugUYC8ZemDSE2LPVecSrTn4LWQL8NJv5tCJ9bWWFV5hjwB4Xxbpchv5yqxuxKJ3WQRzhSE",
  "key8": "MDFJVu74AwWHyJXMdRJ9ZpdsTiXUt1D4yjWp1vqgC415tfjjCkvKhejLSxBNYLFqcVBtJd5tUWEeQvrnfbPwEjJ",
  "key9": "Rh2LBV4wR9Q2aEcGuhvGPZbEM9VnpDe936396YT9EQXAG81n9VvUwkrxBNxmaQho7qGtGQ7oHqTJP9VYkvWnupR",
  "key10": "ijv4CU3LtZftVWtD6f6wrQvsMVyLSdsPg2wF1o73RoKfKrTdJ7A5j92sMWE7dgy9CHgjFh1B1dPfhAycJa4dPZp",
  "key11": "2dY4bYXoZXmJPBhkmSBSgBgMmVvrjPicG1sQmLsEfQBN8aRjJvJMhAh9PAXsGpYyZqoML8gyqzPcmUH6c3mCgvGn",
  "key12": "4Ah43VxVSzwqNMKMFi2neaAkQ8Peg9vjtrXwnYpSPjbuEnYcHv37wMZewn57j5CDqyvubVWH3qWMt9LVhKzvsGGU",
  "key13": "2CivNPc96W8wXLSaJ23TJ6MfQUXSTiSckmbvC6mW9JzVRdv81npPHuFx5XzGgvKV3w4MWatGiDgmhoetCfMa3945",
  "key14": "3233aoDay6cDastJJMZKbUHzWQmH2orArFfrrdD4zhJghesxL77yrThirDBVHHSGCDkujH1P8Zq5pyz1XSEMv8Ja",
  "key15": "21dE4VfYqA1jKM8TTs92X8D7hEzD8yfCe1RQMJGwQsW2f2Tx6rMz92KNqLPoCMjqiCXovNPh1LrcTu2VA1TAxQf8",
  "key16": "227ASfWVPcfHi8QSAVgkxi1RjjZjPt1DbjEDW9Z58ghMEpcGqGKvbQR3v8GGcA7GdKLCzjEXbeDHTezmA2oNGxCz",
  "key17": "5DoC1J8d1vkgdHytfY3H845aqiXJ1cQCqzkchH9AKEdZ9oUe6PdFEt7cs7PmnX3gbHwhwvjbhyaPGRyt9P2t19ew",
  "key18": "3VkJtY1f6JQN79uKemoXfcyfseowxWTFgXvqZc8ZiiTebz6Zz5p3DJ9tdckj1ABaaXCfg9Q3rxCrCCBiT9B7XswA",
  "key19": "3cgo9jSmM892yKqYXc6xzcoc7CFF7iCztZpmf5JHzACxPJMJRCJzYXetcveZryZqMWkVsz8cd4ZjDEHUFtki3vAW",
  "key20": "5BrhsG217mLoFBVN3Fs1xJt9HzHe3nqjiamAU6RHKiEzqprYCoaa8922AL5E5AUkCAJWgrj9f68ekmZT8PuFHzmW",
  "key21": "5KVZ5xAK7hBQp4zr3PiwyVPa5gaE6eXryN7ExXzjs4bwwTxwJ1DKWjaDoW5vSUrdbBmBtynEFae7ePRp3X2MRCWC",
  "key22": "VGxerBNqmzK3Q9xkH7BBzAXGeuFAgzpH9RzEztuEGsTriHh8kbKEQz7jQgCTNeAjshcvQhkK3wSaCQ1xvRS2F3T",
  "key23": "3WXECnmp8WNYFu8M63DiE5kvtduMLn6qL3Evj6XPFLX7bwF6TfVvTX2Mo14owsArutni47TxKajACtwVaVmzTWEG",
  "key24": "58qCGttHPsANAJvQrrqkYoWq32PUnmvnm1Y8dzfVbxiMtgkkGyip1yu6WyYDxQ2kgYXwcupN7ozJFbqpRHBpguFu",
  "key25": "3HHzqSk7E5m8GDSwgeYqRMjYE93yKRNTnKghYt3e91HLc3mDmTBixWLWhKBZt1qZfpSe5xgUbXGLhsryNxcPhrda",
  "key26": "3bS7iNHNVvPtReHHGPsHPwWQBisGfmbRUCSYobPTwwaTx7j6T7f1kYWaQhZLX24CijjJ9sVMdMTXcrY4DKxzUY7g",
  "key27": "3kBPJjpvgicBCwkj8hSD5mxQJoifskM9uDCakbKWMGgCvvXFdBbhGigNJ8KvDcbUrqopGWh3LvW3DTTDs3YnYFkm",
  "key28": "kT9H3sxYrieWw4HtmotS3Xt7oycm3LkYnBzozNDFJw8LkyF1FMwNw6dVAnAz9zhVPMEbpzY2k1hYLhD7uCKhpMg",
  "key29": "4wWyoyCuTxhTCsEWMWW9nBYEUUjDbwyDwox6KkHY5UAKvvnPqxVXRz7oxLu35gh8qtK5e5SysbbXTiResXNRjD9g",
  "key30": "4RhkY85Z7Z42x4vYtwKb2jvfZfB94YAHeosWR6h352wjoV6ZnQNfce3aheN38RDkUGRg2Q7eoC8cYvkc6zhzbHvE",
  "key31": "4JMbsuGqRtzj5MoXMR3CHpxLNUGW8CaDh7SyAKsJnBorHd1HFoosgUJmDSfdNzKeKY1t1A82o2nBJn2Af8Y4EYE1",
  "key32": "5HCYiKDvfBrNSkAr6UNSREsKXpT4oG9u8zt5Ro4kqoMjA6icZmqHbDe3Jhg5Mo6co5B2ee66U9j9pMg6Ayv8BBD9",
  "key33": "4MzYGP43waxgp7ZCgPBTd4W2jSVuH1vTP9BHM9nTU13Pn1xwtpfr1oGdfWEi2xPUVidiSBjqAZpR67GBPmj5Kq5V",
  "key34": "4Gd6rr5BYsWxZE3ggaSJGo97BrAFq1A2Ps3QvpQEGrDe23qJmS6u5fNf68svXHGut5PiJ6oVaPYjrm5iftjHZ6LW",
  "key35": "5c25DJmuA4XMUBgSyC2xF1216vZi2p7MvuqvFhQcNG2yVvZj2ZCrjJzeKiPky6fXoC1VE9VH1Juhu2PjmtpJdjvw"
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
