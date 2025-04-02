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
    "4ZS3fudRE5a3X9FvKZzotkR7msZmnBSR9tKTNkaaiiNuKBkug6nUm87ez987CnNRTLN9St1uRdboATKymFEaKMiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RswLEHoQLHDNpncgazZwR1U524NtMiU51ZJ3aKYVZsLYD3ntsjw6EntXE8zg9vRCs1M63QdS6KFT3Mi5tuB9vwu",
  "key1": "3VZqgzNZdxZkfHuDK79CrfNoMwJdjb1sicTa8DvU18h263tPUxNQ8c849dfJUZ1uFvFztE549NkYLqQviuKgpWck",
  "key2": "54YL97xu37tgBKsevXk3wQTSxobmSYe8xVBcouGrRTtCvZ8MEBm9XSN4X9phjk9vgjYdgJomWE7k7hqmvzsqyRDV",
  "key3": "2aNmqvTKWB6GzQma2K4kgBaJGjx1J2NrhsGbuAirVexwUgnXr5JGUN9ro8Lj1Prw1bqB5mxkcezfi2VVKfQVcq8p",
  "key4": "3RZNV1ZQ8wNK5vhrD32qym15mjDb5gvUV6X6eTUNd5zVAM5V6R4Qoi1K1u6De8STXP3k9SNVZbZGQG6gYhaMjNmA",
  "key5": "5VYWkNC6JuWbVoXaKM6gWHrXRptk3wz4pbUKP2by9df8E8CYSqBRpgQNamt784vKb62o1EJdRYt6brfEHrWs8xdb",
  "key6": "3yLWDN75ixb2Kj3M1z9mN5xpMSnbg2UmGUGbbDTcAL6gQ2MWaXj7ENYENguDYFa9iEBtZL4kBJyJQpL2fiWA2EoU",
  "key7": "3kipye1dP9soD4u198Rtx5e4V3GzVL1VUwQ4Kv4EHg3aq2hZW9XpgmMo5AFEFGTbdtw5AQwykNKL2v64Rp7zz9bd",
  "key8": "EhrSVrt1FgR5bgLFXtLYzwSWR4pUBsDGkMZ6Xnf5MjC15saViawZ3K4EnWnDM5u8SkQQTdQcycK4DXPREkRqN6h",
  "key9": "5aHqyFm4K784pNk3oaHe8p7YgHGr8kFm5kS5TumL9hZe9Btxn81SJWzjhNqsHKmF49bTMEGFDYpbAbPDtDht3gtA",
  "key10": "3WrNYhYYpdP9KBpCVMmuopRs9cFqXLnm39txFQgYsAqYob1YH89B1qnfD5EBy5vX8nLumJNkFxkgYK7MySNAHUst",
  "key11": "vhCzY9NYKnzbZMBjkhGsuoYs98gbnoWpd3L4dCs6QTYY4mNwKLNxJFVsmALvdPKAyn1v93KazkWnWqnBh1gpN3v",
  "key12": "5GXyVQpFbKoRsptMYpPStPbCDNLosKkY9wLzscmR6H3btseXZjkjS9tgqAy9oUMHRhhLjMncvuastA2xTgw5foWb",
  "key13": "5ShrMNcF11EZyioHUH6zWwSMrGcJD3NWc2YczghZyrS37xUBcje2HamjAiHmrPzVnKHVFi91DP4UVsBBySKL3GT7",
  "key14": "4XCyp2ifL9cBPtSbFyzRGVwizZCB9w1Zm8mSj3v9sxjh5ubi519t2q3oPFYdMJ6qV3zBpoxcQWTetX5znjw9E8o6",
  "key15": "5NWeKTpEVpPvuB3fu1VZynoDQmEpQ88pSBkPq9WWPZRtgcVaLoQTZ7Xr1MWo4mWBevzUAgLsy2dkcDFBJHnDXr7X",
  "key16": "nkKKmDPfmC5wbVKg2yg8WXcwoBs5yUrqg9npbHPknQTU7bA8FXEoGfXCuSTJ6iM8W5woQgJKu32hem4ydAeXe34",
  "key17": "3JdqTgoWJJBNxuhAqaxStB62weDYcdqhpwiPWsjzp2KscHXsp8UDpPuGmuouqFpJ6r5U9mbKhbQhmJvEukVjPXWg",
  "key18": "4tvGmvjhd4q6MUEcGZY3d5XR2A4MriQ6TjnaoEG8sYveLXPCMAAmvu9txsEyskJVUuQSzFuLghBexbmEwShmSvrX",
  "key19": "5C2ribaPJ19vZvu5LmaFjcRHuFVmNLryevYWq1c1g1pbHkNcuc8kAEaXKS8xQpS3WoxJGtpzsTkhrBr6R5wojUm4",
  "key20": "5QbzJn3nt9XWAN46bgvr2uf2GoCdxyZPchsceGGeHL1ziJCr4NSg2Zi9biQ8GyL2JzXw3t9NkD6xbiHYAcQrTR8D",
  "key21": "3qp7SCVSKkcp58UKAv9sMGkQ1exNdULv45f2hanKxDuhe5JsDy7x1WfPSMgdrcWn1E1Z7hjEo8aGuV7UexfGRxCm",
  "key22": "3erydx3QeryJSDwUwWH9g9SrRPkYvek2B1WNo2EZv1km6tKrRRNu2Fuq6w4cLE1q6qMdyeTCpQRgFQw5QwzEw7k9",
  "key23": "42a2hGRFGSorhxKqxbfW2rqPy3HVu56951HgHnew4GW6E3uths7rojf1Zuw6uCAKQszmds1mB5ooWgxhXavQfHXs",
  "key24": "2h3xpMcBkQTHC3hQEzudPcpB4EryGj3aomEx9d1xYR9J4mH5cAhQDkYv2fpxc1H9QFW3CgT7g5hAzgYyf3TgxEtQ",
  "key25": "2NYcaieoMQHeSNYV8sguVZVufryZS9Qa39H3ABmNWHUhgHenxR36yMqwPoqtHpZshBCm2FNaqBNz3Dwt6ZUJv5KU",
  "key26": "4yBqmVmGw2yg524Eea9iN5VpZFtNdiwoYvLi639T1WBKYA6rZ9CgRLQECEM8RpDpv38tUND1fsieB9BEQykiobnt",
  "key27": "4XrQkw4ZxYPDfT3L9VW44TkTW4AkZGB3bQw7nDeixzE7dj3AdcJwFLdjPgZk1vaWiEsj4kYbH4Q1E8TVkGFLh1cj",
  "key28": "iBQtiVcZy7eH1VxW2FQVNFRvn2TXQhi5uxLc2SR9uSmrv9NUMujJ8FmjDjmnWvnP9msLKr2ipP8KkuySqw6qkEd",
  "key29": "47DFmgAPb46UGRGFwBpFZEwnTP2C4PUmN7A2vbNM1bJfBUJDVMFMbaNh3M25EyUZvRLj1Lz48CxGroj8xb3xs8PA",
  "key30": "9kqMJjenWLMhGBwmf4FGij9uFjgkY2bCe5Du2rRp6iD6oZFPh6KzFfmDR6kZVp5pjRGNMmsxGiS8MHkLzbFNjhC",
  "key31": "3Kzkgu7j611wPQeXh2oXHWWHrPNRN1Jtwa3wmv22ApYmSBusqWCdHwegFHSLYRJdLfHWjvEA2AWfSMknxaGVfDmE",
  "key32": "3nk51FkRFsS1yA8AbgNL6wdqYUfoCF8p9HttzPLo9tgXLbAJ87vJw26oGeVr8JgaYWT6HGF7KPHWTH3wYBS7byYJ",
  "key33": "55kiuhGnUfERRpkakFXUSrHZ8M7BH4BS8w39pmTB7CV8Rbus8hbitzGrYWCqwjBmVfc7fnYHx3DZFr1XDgQocjih",
  "key34": "2uHx6w4cYVCnhjEEo6iKsYdCtowEG8BdKoQn6Shd9h6Ga1pgdaCyHWtTkrGjYe94D4ZPLtpdAp7sDrCH2d2DJStH",
  "key35": "2Rv84vVE2PtyEhUfDVe3wrWiAiXVF5va2o3w2bBPBMuG7DBSw8guA8ZgY34CqEYdxvD7CzqgjbVkPWtbb1WHC13h",
  "key36": "57c35k1xKw9Y2fyUqbcAEFkhyLzjHdKxjRnvX1PSDWPxgQNjmMyBT3w4XVA5t2QcEMTdozPpprp1gSo5CUZU77Rs",
  "key37": "3doXZ75fd1jcSbVPxGttBtmpJnqqZybwRJvt4MAvtFGKYcFMQaL4Q4tmkNuVFQxCN8jxvrqKTgRbdaYTrbgjM9zs",
  "key38": "42R5sSdx5HtWcSHwP192xgAQRJeSuonpzchz1pF9nBR3sRCz3gsdditCzB92ZxDs7mLSvTwMW1xhunCnGKsqnVUu",
  "key39": "26cQe5Txdf21KcV6MPRowZeYaeT1xgduVyZpGLunKVmwYfJKvKGbLPHzdLC7F8X1SzCh4cqfZZjP7NJf85nHFPEv",
  "key40": "5uD65ynD3yhfhr2JTU8G9qgWegsdYKDvrs7geRBanXfoDoxXciLNWvAWApKQHPd6295FbTK2jh5XnS1m5FEH4kzi"
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
