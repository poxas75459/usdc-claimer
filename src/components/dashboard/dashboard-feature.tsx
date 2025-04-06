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
    "hrAfNm8DnY7ZFkbFgmdWGveA94BpavUvF7GjA3cqkxVxFsHZdVveK3sAVGbrssEDrLTqYkajnSGuXbSZ2Eb4soe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XrF4yNv2gpPToKTytrt8U2WoAJryigS15q2HbCQNdg3VHkydCvnQ8QrYBjUtXzKKQJJwebWiuFCmcgD8tVE5sSz",
  "key1": "2qdTTaXkuvaMvf5CMEHsC9A7nZrDwFgojNYAEjrNxPvW7VzUkjBatFTchgeBVddwsimMuJhJERmEfHknvjUqMmAc",
  "key2": "4o7FBgxpjUaf1snUTwmLPNxrqBT4FUfsDDvScgu3nXr7Z77AFewVoYUPoLUpDBmMH1yymJczYuefHvNusgWh51mR",
  "key3": "4BmDNNuBNBJQuxx6SsrS8qatwAuG1JKK9v2q3SSVQN3RCjQG7oKaNej8SacEeyqmLHhnHnFaVJqfjK5gnYQ9aHBM",
  "key4": "U5bptDQZhdGhCqtuFqmCGSu6WSi3gSb1kpNP8jmaYh1eh48edtAfoyJM2QNBAgUQLUkuLC7rBXeom4d38njD3Ae",
  "key5": "2UEyD7eR2usfkfHyka4Ais5eR5k3HMiq4apbBUXLrH3ATCXfK4bK2hxzrDqGkCyHHkie4FGH1Rqeu99QnyK1CaMQ",
  "key6": "4EoKDDTocdTNhb8gjAc3TLm9JpJKungYP9GR6HXqikX33LaqrWmsx5bjBsaB8NoFn7rbsbYHJQVFmnDrHmYZZuUG",
  "key7": "4DYARmE7k4ryftKeJccfWQ9SFPLUZnZ19jhDhf2Nf34oG2374HWiEzELDXug9TRGFD4AR5fwLd5pgHB69rF9wzmj",
  "key8": "2zW5GjRWtTUZbuS8RN88VYgSCPjAs7rmARR9DW9XgDaeHXqawUr9B61d8naWXG8Dw7YJnnBooR4vEDVxSWZoXhpE",
  "key9": "2A8TeXwLfiBZDh8DoSwakQPcyi82WGeUVQXesM4QYvDTPLbDqaRxPoRqoRJo9Kbsvu3dFE4PDtSnBm667RVMYE5d",
  "key10": "4pB4w1K3tk15wpQEEKAmJ6KR3a5rzwpRSg6p1NtnjHov3EqMEviThvLihKe4AjZupm7HTMRZ6avND2J256YXFn7H",
  "key11": "55hnfcZDY4SUfU5q545tg1X3krN5q9Ua1q1FAjt63hUZzybfkK739KcX8pxunFnaagdQNLCxRddaZikyZ8VZN9Nk",
  "key12": "RiEwRxbtW1ohNrLyo7wHRcoXVhs1ArNtGmtK7xVjhHPuxqDjuRhrX8zP6iaAm6nvKGsaF5jUuVZ2Hb8MXyXLDwp",
  "key13": "3vTntxWcLb9z53Ztz2B1LvcagQejrkzE6zrP94RxyqDQQoHtP38KdeJpRqR1BgkEiCPy7u2xevcFFmnQgpDi9WKz",
  "key14": "2VaXdi5LyaghpkRfEHjknF4dJKyfSkkpyDxCicnc8TDWifpqFjwZBpbfJRAp3avsTiTm92iGFXcgxsMrinpGYpVx",
  "key15": "2L3RjsxC1eCZgBsuPQCqg8WzdcELHHFjmKrX8w29GQwyjb7oKZEF7PLHtNGfZ4AWyMrNKMeBSmM4FNKkeaRWYSUj",
  "key16": "5a3ue8bCS9nNEbQusxHJPk1UET4UqPjCeVVrdhX6WUJ7ebATQ35UPH2cJauBpCT6m24hMDYNCSHhAorBs2VpSrFV",
  "key17": "4igL2toJvGHJwrQ8VnkQBzraEyAcPLb3ZWnkY5hkjJr9MjV15baVzXmSuT8oJBcCASnwByus63oDgdcQdWnS6Cq8",
  "key18": "3yKcVfu7S9Unr444CPY6Pw7Y26Sb2Dzzqt3LQGTXwRCgcSihvEQ8jzerddifNqdJjmyakxyG136QqHC9vm9QCGUp",
  "key19": "4codSkiCkK3aKA6JnYQEAGazqMsbDUDM2681c13E1jmT7ZRW5BcXrNZLQSHJHbsnqyZb2h1QCtXDXw8dhf1UdHpV",
  "key20": "4WFX7qADWhDqCcV498SR7Q1WvmW4Po7GopK2hHWgRWJRpmEphbkRcEKrwhUw6MsB6BwKWgazfGDrQGLTEM4P215T",
  "key21": "5odsyodtk9s4c4t3LBeN37w35x2NHqjBXrwDzztDwjR26p3J2acsuAPLHr48QsBQ9dcokionpxxuvxAtJdew34pb",
  "key22": "51FtmaFaDWnGAS8hSsSXHgiRzDDinGXSXgARsJfDwG8RxCkEWDfdmh8psjtnTX344c3yPKac4zSPwG1Xz3zrrLA",
  "key23": "BApy8MXpt42tSpSxWiiZKmHRhasapeqNx3gUeD9E4xmMikP3u6aN9bDQucNKFyDK9o7LX3CAfokgnkTDGqcCsVy",
  "key24": "27kXtMzkcT7TGKDs8ZiiF9basvVkSnpR6S6erC1fq3xASSBArSUgd12mQQLVYuLADYpamjqrgSSrYHbk3yKQruuP",
  "key25": "3zQgHhNhEEGcDX4hJzeFAJLAdGi24F36TYZpjA3HhM6e5QhfUgttUKpgwrX4ThuBtM54GVYNZvwUAAeXNkLoWbdb",
  "key26": "3n2btVH7PosUSU5xUFN1HHEeuDHXy4ysY26DDkf23wGqZufgiBZHPpNZoqYgBVQhZx48UKwza2T7DZLiLxgun4mq",
  "key27": "2eCs1oNrLqR2HwkiTkXpzNNQftSLVPkiEXKufwiZuBXmniZ1n6WdibakDmUJduEwJjnKQbhGpZo8VT1sYXupSsGD",
  "key28": "2gzt2UZYzd4VRfpHNZc8sjw1DydbUeJfF21vxyFcGS2UeQXexrnQb5yA9ZYPuXHZFeZvi17AMFharPkUcs52Cmdz",
  "key29": "n9PNx2aWSVG4S3xdaszdCCMWDP6qqtpC84Bm2zuBy8RZPJFLha2BMNRw5DGw154VAH5mDxXEWR3tyw669jLgH8S",
  "key30": "4LTVHDei2hoHrnriN8jGxdDnYZR7KvEdSznQ47dNNYt943g2gfUrdXHZRJEcH59mwy9oHdZazj34qanoJn27RRnk",
  "key31": "3heXMyvDZQNMRatsb3u3c2m5M8j51sbxQdwyJMCouYh2C71KTQr3teZnxw3PQicoSbzsut8pt8iKsRmknHNEGvVY",
  "key32": "2oncmArhfsk7ZuwJNywaaVzmunz91So2Jk1amTK2QVFwectbfuFCEz8R2mxmFYxZZ7wRdgfAErebYTcPs7vDtDuC",
  "key33": "n3VpKXXkLvcjCmVYBHZ63msPK3ChA2ng3UsHGgXwdwuYMMByvLdoEuX3hN4ssBnw1sGXxUCrqsMAjoZ6kv3Hwk4",
  "key34": "5uxGEvXjDqHrDZMj4gdGwnz5UTDgtKSeNNbLz78EYzVb2Ud2fJU4xK9eLveE99oLMqbYwciE8eKhWvy7Lu2o7JRs",
  "key35": "5ZGfLNifbpX1ztK3wcBWqUB7gB8y3LcDkVbp1RV1uLfNhzBWht9wVuqdCp2n3ttszcC5pwPYiWgFeqWEZoQHKTEs",
  "key36": "mvTPaVjWpXfAMs2Jtco7LjixX5LW5uBHFf4cqSVGRk5XMCLA7xjEs6ir8scrgTy5eFjov3NixzPwXqoMZNJd1gC",
  "key37": "65U8tv8vvwZKdN1eBZYGRmw4SwAvccbrtwZpeYDaCzddp83JGgRqJ9GAniDyNjhj9R2BWt84r6TWJTS3DmhPkk26",
  "key38": "2HUfuBLEwkkmQDShJiRwjHwHEXTmx572YUcQH9TDTxnpNujYdPbaiNxT9iqNhGND1djQVW9YgFEQdJ24qZxhH942",
  "key39": "2cotTQintjN28PyJnft6TYejNMd58n3QXjnQuM2oxNGxePuARPsbDE83Y82AekAbmgPQ2U4oCpNmPZsTpjqLvLQ1"
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
