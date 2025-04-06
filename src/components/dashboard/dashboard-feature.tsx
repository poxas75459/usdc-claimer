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
    "syjhJt3YJRdpNmbpxXfiqV9iC82eJk5YNLdK3cq5bTp9mwPFu2XraDCEL4FoDrTizEr51y8ZcVk7dqk1KaSwKWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thZuXbQVWQnd59farVjNgVriGMGjUvzuZzhWcErwEAUgRsp7KQoxndgfkydVSM3ou5apFUcYFL3M5WzTBkREmaY",
  "key1": "5yFDzB76vptGBNNjtug14jgZeJvs2hP4DzyNM6hbap78TKmgiUk9fmYVgNmDaK1FMQNV3zo5ZtsqaNSBzn5x1EEn",
  "key2": "3S8vfuhc28L5bAi59deMuqZMYwqNMPRFACgZmxTSU9bsPG2zbkGcGUMdrp5jEsbq7FydcQrYqgELSaiGYA8hLkME",
  "key3": "4MHct7Z9JpMXUZAEMJMfW4tVLdo6cFNP7tNi9vLivhcWF9ucvxmPi6RrybycfwUbGCaAVUtDsuZ2Gzdcg7kVQzky",
  "key4": "2xSp3kHe1N5v3GMNjfWyoeYAntztDgTMACMuoEQhPs3r1WDcw45gYUQ4jFz9VULmUduHivD4cznsWPKX57nVjaVi",
  "key5": "XUnRZmNenMMZKHpiSaE8sQTFHMUAUwkdZVFoJAfkV7JSp5TTrc1rVQAgRAeN1fuUELazvAXhpMT8kWBZT41fYEW",
  "key6": "3eEQ3VPJQbNuuPqQYJGPxZt965THQ5LH1ZVdd6YodbypDR7ouQsgDjwB7DJfEUSm2Zz35bggfUgpKjZTuhu8aXLD",
  "key7": "2vLo6kALVLM7AgrZu9bKkavFeLgngcu8Msg39ye9JrpZy6ezE2uwNvKHE5g5th9ijrfAVJhVzWoo4KRjiJAqamRR",
  "key8": "3oG2hYKbWjLUgj27TdFcLv1qJZ2nZDQui17bAPg88YPLSYocfWUnfyV7DTooU6WJJngt7dKG95yNMMjioLr9VjSS",
  "key9": "2uH27cgCeQBRnxhWh3hfkexi8NXBsxMgEF2hkfVYMLhNPy79kRnVSLeC24V1kYmw3C26sjph3mh7YSNitzzZdJKp",
  "key10": "4eBJxqaXQKYtkWbrCJoPPhCeofPSTvx5Z37hZM3kpFj4P6TGoCtbS59GSkphpSJ3tNkUUuK4sAmvbpPoKTmMTvEM",
  "key11": "5BVaLjckFR2QQfb7gUEkqBdLisMziiEPift1UTh2hPtnHWTAs7RRDE9jDCuganq5ZCGf6Hw2EFXaexszKLy7u74f",
  "key12": "24au5EpCk3dSKLEvH4SJQNo5y2mp9P9u37YYwCKLcVVyqUVpMsLdEvR8caUJVjFcVEXgz3gcsaUzXqiNJukUv9uY",
  "key13": "2T549FUXKWxp3MabxbZsqajKqfi1MnYbJibUdwezU3J6jNB3aShXhJFeRHtfSgPGmz3sm1wng2DL5kj55NfgkEtt",
  "key14": "DfXbfV431oThCunRwod8GU2EPvK9ypA8HE9mcsUUb1jD66ky4XNMxLjhfNUArCUbZVRBpg4Kp8pFSibdZdBCqzt",
  "key15": "5cBC3ATtvoBMsnfPQPiWwQug4aPezj9mfFuDcaoxcUcqYX7V5esjGDRQVbQXD7N7MPDjsTBoSbiKvFa4qbVv6SUD",
  "key16": "2Bg5Q68CNb63mjio9z6nCSEVE38n96ARSQ4jUvPnKTBZJ5dxnVYWatBvkw3JEmstpMVZF77AygEcyma5xqB6BF6d",
  "key17": "5iYPYR1eKS8W8Dh1bvGb8H7tLW8GoPbAC725Bcz95qxahAxPV2qrNCHdeicembKZZfwqkK4xXtvjHLV8Psmsk1jV",
  "key18": "5o79pceFar2jGDvaX53QGHGNbKwphKXrY5VtSnj9Xt3weWo1Qoahf8oMu5Y9uvuXhatGYLkA9TgLDFSrKiHTL1X5",
  "key19": "4wMx5PTF4fxEXHYxsQhpnqXMc73B42TdXbo8R5HDLP2rLzGYD65qpyRJFfVnveL7djS3wvRqKcxS48rE9u8HBcaK",
  "key20": "3Wo2mZZzg4kpWQ8J2rxNbCX4E3iSzv345Q7kmAhEqxtgKLsbqZJbAfeJsudjKhQFSeQY5jgKMbTgbiQungEEtTqo",
  "key21": "2KtyFdnWcVPGXgmupARx32C6sSHofW5NWpnZDQUDzftjccVcVAvvXVi2prMsWXYhjke7ezkofFJmrQoimUtUhsSH",
  "key22": "3AJ87fdtPQZXxAvhJ4BunYDi99kNf4ihx3pPvEwWGMYsiaeZm73LwnNFzCk693eNewcUuZ4FNYFA6PhaCvWVpwLL",
  "key23": "5v4UJu1FunSD1jiznntSXSTFfSQsbqzm72NJwGJKKLgzsHVSuzKP6CeRC5f9fWqgpumB56VC7efCP4LFBwgkPvAP",
  "key24": "fVe5dsRpYk9gXL4akqyxAU46xw3HUyLfeu6bmaBycyqFdHFGgdMfURvrTk8QrJvnfRFg85tQZNu2ZHaaeYKkzJY",
  "key25": "5a9qQL26HbLaPFTvUr2WwH1kFF1ZoMxZctzoWSDUohaDUXDDZvhzPQSNwD3vDnYjna8dfGQFtAegqoFHpsnv45fZ",
  "key26": "4KAq7TaBCgBt9yy4irBJdQoPrTvJEJMRp8cZCmYERHjkZnKXDNr5YnFcicFi2cJos1kB15E7mASek5sXfNG1TzTF",
  "key27": "5G1naZk2DAJ31RQMRqih3tsjZQF5wimaFHnDcEMvwoxcAuwUmXbX8y7J3QY4LFt7vQTq2BzBsSDLTtRWdkkQJcmp",
  "key28": "CwCKxFmH9rwA87qWyTgcjXuZRwj1W53fkz6CUs617y4ctVeMDQCGGk8Q1dUjfYWNdQaxzwwuVuDhFocyy5r6f4b",
  "key29": "4pQ4M9ywx1ScgSEnUKr1LXqG7w6CQhoagpKnrgbQh9XiVjJBHoTrjH919paX1Q9DGCeJdQKBbbaKuTdbZVcK6Wck",
  "key30": "4vPDeTfrEwSRGAnz2RaY4wo2VMEpwQWsPaU2wGUzExhFDney1XH3qLmCKWX9vt1eyuNFGTGvajpfa48zWcZ3QhZy",
  "key31": "42KH8wSbGeN12847JHMbvRfKYGxZpQMFMCNiJF9HB3kjztyEwkc4KzniUVYBf91kMQ8DvcxkZH5ZYizcEVBei4Kj",
  "key32": "5gBQjo6iy2KTiCJuq3kL6T3QeqCNd7dMBzE2HERqRK5Sj6HMD4U4dBGJAx44RcA8qDJXhfZjx69Q7zsQW3jjF3yk",
  "key33": "4fvPWZ5FPdBx15f6GQTEBphTZxah4cJgeokqBnkvN5u7HbKzjPKCdnPejRQXjgk5P6cBBsNsQLxaxQP823T769b6",
  "key34": "dubnFjxiLVPa5UNEAP1Sx1tqG4TdMjF4R5RZexJLV8M3ZgmN6matJFjZ3gMqvNBwMDYe4KRhyt4aX9r2KA5qMS8",
  "key35": "2zDbbsGQXCL1p1BRDMSiMvgib5TGMD6mesUodjexhp9cYUrYhKP7TeBfeXtTSCUgwHcHiwEVkAzM19FNL65X1GnF",
  "key36": "Z5rTR7ioNRGSYugmsdDH6fGA9Eua2vwyH7a1Y7fZ1NTnnSBJ9YxbWbDUFnBMkCTPdeShMmqL3zMESUPQgVqHMLm",
  "key37": "47URsnQ1vdw4DhtfdCqZLV8CghSb3Z3kvc9tkRBCk7tkP2ASBDn6Pkc9YmvQ2c1EKV1n83zzFrJ3Geb2FuidPaP",
  "key38": "3SC5CcfaV7V7kHFsq4bdmmD7qqix9dLtnopNsS49xcrarZ9g19koixJx3wzQ8Gwu8q5pLLrxmDN6RYprUh6TPprF",
  "key39": "nR7kyvtdWPpNuxUCxkSuFssrXaaboPzWaawmXLpt1wUsCDp9J5rx3dpKQEYpVcpgpRfUMqWz2N2HRnTNBDfaQEv",
  "key40": "fP3zNrHS1EUXw49zJUL92BUpeBvjA2STZ5vMeMP2zHjxecVzgGmxku7FAbs2mio9y31Lfsu3EJbUt7KPiR7zKk5",
  "key41": "3icTwDRxuvBgKNX314M2FysYQdzbaFjz2rgsRYhshit2Bwh44oBbvHWrBPfGLRZWJnPoxxP9dMYHdVEMzm9oACXS",
  "key42": "5wbTGojhD8qA6MEcyfCtEM3vwTX2UVKFcTAVmp9JgQJ6y7UzsC7Rp4quTp5c9pkVvxuxvDCo4rM9cKAKms1G2Srk",
  "key43": "4V28KWqbDvKYCetzjHu9VpB7P5u1VtzmNf71t8zo6SKKXAsbC1LRvLmW6JHwcQJciqSWUg9K7oneQ6tca5duxNyR",
  "key44": "4aBro3Cd8Z7nFZ58f7rcJh2MPrvF19aGrkkjLnxcv1MAqE5KSFCVUkvcpgnpw9gumJ3ec5MhVLE8NcJDP2SNnQSQ",
  "key45": "5iMS1whK26PCx5qgrxh9WPNMfLGLB6cDXbhDEp4RB2uQG5vPNnSt8y4PcVeYMsw6m2n6AGRQQWBRyDVWCw4VFA9"
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
