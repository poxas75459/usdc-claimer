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
    "abaPquLYBhxmnm3z5jbneUrK9EYVseEGpoCKYcrw5vnmCLybpnt2rdWRnXRfKdUrckGUxGt2AhZ3rGHhkbZZEWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUJgJKqUdhmUziFxL7rBKjmiji7ppEFqqQEMekVWodFDYM6zzYKJ4iTxQpHsRA68gCNwhY8L6DgykGNFoptxd4F",
  "key1": "3RKcMu4CTxa2kpjcf8qxE178DXQB3cz8XbZes6xkTF8B3tTYtQdVYCLASPjvE77Ys3w4o97RaZbF77w6sPDUQgnp",
  "key2": "4UFHN7sb6XoarmjHNvVjg2JMtZbbYyBNgnFC5xZEDXUKALMzuRukxFqoboUaQAMHXNS9dyu43WsKFBJVJeCQhUhu",
  "key3": "FxTciFQkrEoSu8mYNJwSXxmWJfEigutgfiwBR74THwYegyiipyvoSEBVqJptfhgcDgTETFuWBHrw6tg4s9MdmRw",
  "key4": "4PjHC5KtkW8Kkyf4eKdWAEV93SmxofpgfqezVKLPmm6uCLcmdV9NWGyYcsQ6HFLrm3YLfUsWRNgEbuLoRJNpfjUG",
  "key5": "2e6b2ibwbiedrGDGgaBS5a9P6ZZtwHX2G2nSU69fqHnzPFR2zQdsUJUoUCvfcNc926PU5o9C4pGXcNHRtWLgh4yX",
  "key6": "FCih4RQJzSj8vR4T5U7hf5VeemPSfwHFamJthMsTHMVZUSmWMufydRENsaTgZHLZnzfuktuh5AKoijTtvYk1Vcd",
  "key7": "4TD873ZKr5rFapyNbooWmwA4k3KNiSnXphPveo4e3N5gsVbiYiHGErkyPAyYLHA3KCGyUAYg5zds3BRnKZb5Nvd1",
  "key8": "27axWNFXoaSMDRGP3R3e2QcfyBbHb9KJ5Cc6eEMXFak9RQmbJAmxJvQ9QjxAEytJS2eZWt6dGHrVhU3xHrTNBd2M",
  "key9": "36SMWhTrv6hoKNqMsoRJJ294iEe8hbPBK9f8iEKXwQwEdhRK5UXkJmFPyNCfEtqUhATdCW4nnUD6JpPRnVEfVyes",
  "key10": "8oeZNVVdJwAdFLXcy2sNmve4X9Gskskk7fyp5SkLo4AcMN1Y7qyLWUmjZ6o8qcx29FU44MkaNZUaoVbDNUeCK63",
  "key11": "6poGSLXXkViCBCKK7XxLsXVT4vzacrVLKzoRj3rYed5BrLvwGcVH3xkNUrbQabFkkKRgRsCxTwweyrM6kaVLGjx",
  "key12": "4XYg85iCoj89D1APUzqFsKqooUgqC2THHacVXBR2MgRTBs6BiyDrEytFSpbvFPbXQ1YSXPtKJorZrT5XZoRuSqcP",
  "key13": "2hmjAFHifTZs7yk3k6YXDn3C9bdai5eKAXwzTGmZKYTLrYEZLy3r3MqAJ549w4C51wexcTvHG1VMbevEVuRSZ2Yj",
  "key14": "63wovbzZPgepv5Y9qPNiAACLmqnJCss8cbtnAFYF9pRJjka3M1iMzDrVsWauBzU1T9nhKtjPcKZVdXdmHAmZQouM",
  "key15": "2erSi2RKkKCHNdLRar17hSxBS9dziqiajFfffuRNnrTmTo5DgdYRWZfobySBUQptwh3DPa4HuLmsvr6EdLLcHK9Q",
  "key16": "5F2nJYUY9BtBYKGErrYx251oa8hgLYCEHRgLC1Wo2fGuq2EDxdaCmfW3jwEL5FMZdxqTBanSo3ugwRqRp9SX7kuf",
  "key17": "2tunKGdrFKTVaZmEj2NgYTg4g1AgYYfuqLAUfbp9Kenp1i52HXLUxjZWRziUXda7zVTRygAemSaPSsJwcpRy9BEx",
  "key18": "4TzBTnWGyT2CNdrwDADznAccmeePchyLyZr6UQVnXXTTcr6MFiabProC2i3zUenjtqxB8agnPaj7y1C2u6zkt9ky",
  "key19": "21nYEVzkXPQ7nDFhvF8QJcBkqZGFhczdoFU2FyGcpq4y5YxKiSUVUJDPyPBEq1ZuoRDwrNBo3szmhJEKsUpN4mm9",
  "key20": "FaQkAyee6ovMQAUjz7S2tURX337gHdy4SFe9WdALUt6rBkfnj93orScPnGR9yZV5eMgBK9qMHKKVcbUprZubPX5",
  "key21": "5QR6G4Xr6rk5AP4ZvW9TU572Fx4A7cpKBTddBq6dqneBhJnGqTF8Q4qos9rA5aswW1189Jyi4zshXbURqGgKqrrD",
  "key22": "fSdkUxpm6WXBZDyXHGsyQMvvo5X4u8uq6Ce3AQNedVmLUJBJ7hR2vvJxZMUJhEwdeE9eJ28tBfq4eTwSfCxmC3D",
  "key23": "37Rk1fKq1mxHqXj3qHkbSAotQJrZtF4eU1tXMFmrNV8tez4wXc2XwpXekWsNgtL4cqJyZA3NebtUckCJBsiQyg9v",
  "key24": "T6Sk7QcBUYG1954bBAp1pjjgJGF7MRRdfuAsY9hqkZF2A7ZGZEG1YnTPvntAMzHJS4XXmMTHwbvtt9331Gnzwqv",
  "key25": "4Uy59MG5FMkbpX1BYvQBKiBd2FuRezZdG2HVe7H4pptkSQSxDXYuo23gm5QXegCjtooYmDD34bPNpREVBiXJt8us",
  "key26": "3x7Zk4kESigtGri4hb211FPxYpmSMkTcChFrZHhhz1QjfkeV8uNctonzekYKWVuw2cHfHHmZ3bP2bR1F3J7wcqUL",
  "key27": "3U1RazvzyzyHAeeHvi6Yi7rWj5KKareftxJXjHt1MK4aK654ZyjFU5ESpWo91d3oP6Md4C5fAE1X12EwLU3iHXWA",
  "key28": "2YR5VX9jNPLUhS559mKQMjQJ1YBbgwNiKNP5AKXfuuf5kiwq3NYN19ymxPyeq94TAh4MKAUj417L2vMr2HoFeiLB",
  "key29": "ikZCL1sHo3F2BL8g1Fpi3CVRgQuUsiae74PUXQHXaivSTwqtKU6fcfqdmxJNDjXqbExr7cKpR79x2AYQX5YQYXu",
  "key30": "u3p4VmiAHpHsD81fCtFyUNip31dR58sN1LoNXRQXbbGSsNdLeh4eJjx3bsfDV7UGprXcYPGDSQifAm9obySqHxo"
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
