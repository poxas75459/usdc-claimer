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
    "2yPY6xZf7HnfCUjRS26Qa2A3L4PHbsEKNVqHP8nrHUrPULzfUiCD8dzmC4k1pJrgYix4CyJPv9q42K36AR4Z2q4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNnaFzijZfHUbmJhDK91WKHzNYtuGyeAvZzKT8Ybps4pVFEqFruTM8j84i7m8B2q6uvvCr1rSnQ2J2HhPLAqdhD",
  "key1": "28S6mH9PFSgWWr8YuJSdGtiwLLnaHHjRAZJauneq6VeN9J2vnsVkn8zXG4fcb4UKhatuRUGGU6aTKMqsQY1dM8c7",
  "key2": "4Uf72mSRc6s7okM2hcSPhJyxL7Nj89mieydstdgArJcVPVLvqEX1hjmwvx1px2Yn8T46SEMUiUmJCPsqZQ16TNyL",
  "key3": "44MaMsn3YHYvveuQ4aAHXa2D6g3oDdFbdYZ8iQQ6YQkiHBTNkN5vHXmni8AMGGoaQg42o72uBsehpovVTT51ZuPg",
  "key4": "62XbhPUdwzutpmGqkodmLN7qXLdEbB2yw5PK1kVf7pPttgCjGC8kMCSHg5AfiKK2cBzgtoPxps69q5NwnBnMFwL2",
  "key5": "4sonWL66QA386f7xb2Z9oqEVnP2JMdFPx6Yx1nmBRtamUVzYddYmGVgwNY7zie4oFQLCxBswZ86uL1Mmqk4uAcG1",
  "key6": "Bjrg22n8ZnE6uqmW2hXMUKuiRqTujGZiXvoUpcErEDL6DFmPXQMG4Bo5VFB8RDPVgJ2bjcBLkQBcGVY4KmfZnVR",
  "key7": "KrYrgnvHHawQmJQH3D4JWTJsKJguFLobeBrmiFAWG2ohmWcwDFAYNwiq9d3TgxybT2qkC8xroupXJjmAPmhirRf",
  "key8": "57BQhK97qAbQsDoyK8vBtga8PAXw5ENbbnFTVdhEKphavywZmeqEr6DgL1pZ49GgBLQxJTCux3tx3ZhadvwHujmx",
  "key9": "52bX9UjMeWjfodF3xNEzmV6NtQmuNv3aDLfWBZphZfSQD6WUeuUNWoN98oXtgYtQahGUghLui5mBQeZxg6S9tdka",
  "key10": "2Y3ZGUQ3YQEmqiWAJw6x5Wzjp5MvvVEWo5JH5mDNgcBWkDS5UD365BZWzSuv9FGQXrEY6E4TMPYd4mmBGHyDhgSj",
  "key11": "hXmKU9JHYyT5NS68RHxMDS6DBFYZ59QFe5Cyan6UWXqqBFBETyfQU3xYnWauWxWwrdBHKU9vWXMRHzJX8mXJbJ6",
  "key12": "2bcMzC7FZCD7yiqf5A1ipccZdbdNuWikaKmyqnWTRMUsvR1cg9asfNYLVJDJuT5zxb2ywpCKjW6vkYce8ovTNtdf",
  "key13": "5K8rREHrcRuuKQF4FPWprLLGUaLfKUVBiPkDURYbDRFPgjE16mJJvVfvUBL68HkRfhvnR6Ytiv7qCQZF8sd8daJr",
  "key14": "5KQURo3JNvpr6gEe3sXA1ZmnVsu5CPq5bCMTQTkZe3cuKSp7mSe2zGN5BKbsVs87733noXc9zpAKKFCjjvum1FuJ",
  "key15": "4W2FAg46XUwjtjQfsPoHP9vd8UoGqBwYCjVDFCZaRNS13PfuFGijrPTeFt5Y5gzPcA2Wsi1m91KMtdZSgsckLnGb",
  "key16": "28fZrpn8yLdWVM2ZPmdFAUCUaixEv2HoYHM12hF716AG5N3CSfCnLpRAs3Zcw77jHgNSyYc9k82zP2CoCUfakGaE",
  "key17": "Tm6bqhW7EdRxCKMPfQVQCuVBsQAdAJ2Y8ueXHNfsQK7aKwggtb1iDazcggGvVMU4mxLW12SaR1dA41wHnvKwjTA",
  "key18": "zvEjrFEEzWkHcPfgBA2NC6BvLszi1DGQKV2qyvmSUEixtmyASKDisohHDx5nFbUq9oozo9a81KwLqBrA2viqLaB",
  "key19": "3249PcsufePdveafkrdpfDhtMDfFg15JL58fLrm6EGdZtuM5SLpfVYkWfRjEkLHmMi3PPnxVsCNTuo8i8ZBsibQv",
  "key20": "5L9oX849vAfQJheLnxC1S5o7TAs3AqNzBn1fEPhJ3R5DTfiJ5WJUjfRastuVMcw9PTudqdBybDbL5dvttiTAjMvu",
  "key21": "isKWeMh9MMgtqn6vH3ifLKMrY98wLQakAVUNRRehTn2dRspqvGhNRDtb91UDspLqjfVzDuecTUBxoeqyUCFznUm",
  "key22": "3pgwAdcsceG8AmGPJbfzrMCmMAJXqiwDpUUJGER9gZrynGkvv5rMeMVbFBcPFDFZumgGHuRNmu7oCdp4y9aGMV1B",
  "key23": "4oYmX25xYEULVTKPtmjAofe7TiEmyYygNHM9ZmQdVCregYogKU4C2jvUKFhe1HR8ijCcHo7QEHET4NCRcdvEKyPz",
  "key24": "2jESU8oskVk8AYvpmDsdLrzqLCwPAdKJWvGqvcx8GKuha4jdBesmh2ao7jKcqB6x2RPSr2JcrEcLFJy8rKyF8rsY",
  "key25": "51QrXxvAwFm5BVHjEivjnk3WNkJ2bdXZGo156iop2HJ2MNYxoKSWbEu7X35YqZ2HRLacHvCfypmcdMusFLkkWisN",
  "key26": "wkD83uQCjBH4UATgYSt4DpsYMEo7mFkyW82eZDgT7m6ebLgtsSja1Xu2DREjVfQ3kxgu64bd8JEEwXaCJQ9f4Xy",
  "key27": "53ZYfTv6Zd1QSv6y46TuHxx3hM9c41J17BAsyhB4HGVXaN5b7GtRwTNj7nmfxLE1jzjWX5Pj2jPjHtbZJztFPiFd",
  "key28": "3HvqzmYEBvtZxxAAFJoe2vgwwzaNzDUuDg6oMwxGjj8VB4MTD1WgDUkR27QkqwZLcHvyScLLgAmCrd9MUg9YPKET",
  "key29": "5Zznrvy7jcSXKMuHoTDzRQeuR7diPun25inczuw3Ju1j36Tow7Lt5fQRkxoLpxjqVzptA41p2tRtT6QX8AAz6eYW",
  "key30": "5TRX28Y1krdksCvJENjj4TVsX2XRvFQphiQ8J3CTVKF5zoy2ZX8nEtkk6QRDLFnavpo54T9u1H5JyhdZXxMugnoJ",
  "key31": "5aYMQwY5ebVShXjdhGQ18CmoWrwXupLJSu91tLkhPhayAZuavJHSPNWQPd5Kq6wNzHGdh9GRy5whThjc4aNxC5kk"
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
