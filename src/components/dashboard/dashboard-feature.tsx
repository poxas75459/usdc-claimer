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
    "2NssEKvNKVnDU9vk8vXkBeCihaZhXY7URr7fwz9midu7HMUHSseq6q2Ue3hs7pM2AtjFAGMkh2MzMqiWEWmVvfJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMNYbfBaqY46oTR3yMfcsFy4djLJ3sTCkVgF9parrsuVGkrsh5A58cBjkcpryceeUzKSg9ZXDLQqpP55Jfq2mxU",
  "key1": "44BkpjMbNVFhQ6wnrtYxZKSvUpChrCw8AhpE3Qg35BpZp5AS9wtQQySEu74dFHrLXp2gCKQrTGT63oNNGBS2LLPe",
  "key2": "4zmfnUnhW3dD7LAqE6iMahSLdDopWL5weFsPM51KF1ZyoTQNoNxNq424JeNvxhygfvAjMft2fAfMmai8LozbGTo9",
  "key3": "5KEg6MpkuShrJvPnc9ncNth5UpRk8YiQFMZm668Zc2ZGQbfDczoKzg5ZxrkVWGao7yVjda8ABhNC98RVuWxX7ZN1",
  "key4": "2D9NQNe81N2RdXrpdXCEL3tnocp1GGRcEocfLJC5UBNUAjw6jjHmeKYhtMwag2eBrDjLmXkvpgjYqCQLAeQjBReL",
  "key5": "5dKfgj5o96GjTGL4ntrRRDhAEHNvmWih22s4j5nKjKaRKwWSQMmTVHLHSGwdYutxR1FdD41HvF89RvCVR11Qdeoz",
  "key6": "3hspfRzAr4YkMEKC7PDu4N8y5RqC2n56adWmq8e4xKjzeSG1bi5gCtUQUdABLDW1M4rcshwmsu3h8Bsy7g3F7RzY",
  "key7": "2HXhY2bPixmoJwbrf9qbo1LYL5wodMJA2RFG3CzQqCiGk4XqScGEgVr3LvoS3yQPffm3Bs8ucv9WRpPD6d2pVV6L",
  "key8": "2Ak45x8JpVbhP9MHV9ZhYqwUvd7sNUJcneRZRYpjCHh7gFRwS1HHuKUjLKd56Wtp9QcyjZJuAwBZvqCtwRXCZ5eC",
  "key9": "3rP2BvvYia2PUno6d4uj2VysyZaAHnJqmBwRnwHeecXrXT3CDNMWxXfo8PGd8wF8jdZh2GLDHojsLT8MhPJUMm9u",
  "key10": "3fecPrHkTAN28PZvk68YSjeugtrZ8ssQRH5X3BvqM7qMwKmdqEmY3QupdjEPyb7DY2TSweE75XfTFiQhH5DXD7Lq",
  "key11": "ZUtgJVQPHC1egXMPK5M9kuaqmD1fVwyGCGpZGTAnt8mXQRjvRGGskRGiSR7DxB6e2wEGxxexJr6pDKLkM9noJqp",
  "key12": "2rMyexiE93TvTtbGN6pT7nDUdYAFL39XJfwFYnPMKc9St2unfuA6t3FFnpqUbqx4dX3bBVGY3waydmdDyMQqruJj",
  "key13": "62MBnUhVstTSYnTZvajJfKhcn99BbU1hqcRtzhchAJeBFV4dXAxcxyqdbmeHyMdHn7YRWJjJhxYN1jwwZB11meJj",
  "key14": "5rnKiZE1LnVWBtYcF7Q8HkEec83qxGKo6fVHzev9HAozbcfk3aRvGkgdzeMWb2Bd7RTWF5NuL9i6ZU71Y9excDAt",
  "key15": "5eaEJnWhXMcrUfBTWkR5PFaRnNKGz14MoNuJTGsL28L5MbEvzZKvmtQt7XGXtLz9dZeNHoa81n6njszohH7Pm6WJ",
  "key16": "4VUdYuSCt62YNRbARt2bUtvuRjGHC5WqMaMZReNkKFakgjQw9oXNT4RSY6HuYTDG6iatutMXjYuRJDUiWEydpCW8",
  "key17": "u7cVEAtGEabEjRJt17pjKvVqRtdNdsGGJxL9geA7GCwKH8fnaz15untTmf26QWzGXTbVn2frgAqh9ZoBYWaonhz",
  "key18": "A8pNwyG1cHRDtmEFXKxnMCi5MuX2fseQdefuQ2SGWhyNePut7sWPVNAPTkT32qjq36A6Knw8b3HBTQYfTycNFoM",
  "key19": "2hbCshCie6Um2vgGDLFx4y1yZnmDNEAwTX13MX663B55skroNQfrEpnykFDZca4nnQzpnbCPfryBmP1vXVKQQ69L",
  "key20": "qb1a2KMPUsEbsVpoh8ybvMb8Kgf5tQhHXRiumcW9ANCD7kqbQctxcTvc8gFZR7XUDZaKv4znHPXqMZC73WPwYZm",
  "key21": "4Hxv2fyuDDsD4uGrTeYABWa7RZ7urBEr6hvHLi7v22j2epdv95ssK1x6wuXkDZ7BfWeW9KPB2MhS2L4B8Co59gjD",
  "key22": "44QUicBAYxRLmrEWBHCurMHhkngnrstK6LZ2XUR68KF1DqWuPP5dBunvKL3fk8HbGbypWreGM2qAdAaeCCw8LfXH",
  "key23": "2aUbjWxpnJMrCNinzhkav8Xuyswc8nJtpBwHVrbaxB8Mw3TdkpmYoH2qTCLi7KSnfGprRVBD1HczWKF1bpF1xRM6",
  "key24": "3e6bsb3tUcqCNHiDjn9PEHESYqPaft9MnLMHNTSZUgg8gTcdPeXsbCRsqZ89m7cqMgf5RJxteFq25timGFVTTUh3",
  "key25": "5NrNdwBdWvvFuuVZ8y7omM9E3B77nNkPAckrjcboGWVNmx3qZnNeX7D3VC8Xm2jP3U87GfKTPSXLDc6FtAzyY87S",
  "key26": "3ZdEpNu5sf3MMVkvQoiiwQhNSUeuLqQwBsW5v56s8cJTLdZ1SLS648RreXRUNUk1SVjAoSjLkKTzR9FJPHt9tdqG",
  "key27": "262k453ifcjfk5XepbXMLGEGPiCcGzfXfyhr1xBMD8UyGfFCDwjo3WFTq1hAkqTLCckK3Wfe4Vt1V5LP2wtSN86w",
  "key28": "5mter8NUvsPRZzdjNsrpBfRpJVuUjKAaAvZKFtNCKfXYi1ATQXb81JijPs7Q2HWJ6re7zfdy7VoRUwRBdLzp5kQn",
  "key29": "3LNDtqHRweswTLyBVGpa856k2XDkZ9fqPmYY5VVXfAr9XpRYEd6fEC5WAcnQ9nLbX6dt82zr9Nsm4AP3rB5ayAWo",
  "key30": "5ZHKdTZgeac3GMMzNBvFPuVnYoarjVMbrqpTdVdYhZL1cyc91tuSKdeEKQrfko47Qb3n2mHS1qwfqZfUZjzYvRS2",
  "key31": "3k81qJu1oRRp1XaieH1ces6kg9XRiVEsFKVjPsgMSkv3ehWzvLGmpgcQpJKESWiKBJPB7qJrVhs38qFtuSQqxnTv",
  "key32": "3g4NJVyghGKpfQYrbYrUZQZiFXeGUK9tYYUP2U26j1qXhbVSb3bk1epHeFWhvZbrtGqkvTKAhgqfTUSAtXkFMQ3o",
  "key33": "4edHLJrusi7GmspmRZReakCE6NS9FWVVDDdkhtu2LLMpfy1txPh4kF7iPwgcJuyJkEAiYfEZ5EyG7W9G3fNQiJ8d",
  "key34": "5iPFvZbiNFRxAoytb4FGUjdGwEidBG83pHci6V4bQM3zWyWZGY7KbCacGL3bymzysr99JnDSVbB9m4g8L3msHSXS",
  "key35": "61t6ePzjfU9MmG55hTBPT5Rq7d2ZQRnFr6v7xxPeT85FLCwMVu92KouvczGZDeNKYTU4VqKD92VbP2Z1k5pKNf3d",
  "key36": "2KyAWA4upkT9qVGYc6QYcntpqgDsBTXdWQDLemv4aNKr23KxH1s8yyZE6wZS4MVvaZn6ksjsdBmAa3sHTDRbhP5b",
  "key37": "4n8KXnXyzVJnAhR6LX3pfpEyJVxgCbk9bu2niz9uz3rYKpGAeGboUwj56ZpDCKFP2EdrwLYDR6WwVa7F6Ng22DGp",
  "key38": "hzvqAerqByHRvXM3LefdW2Nm3qetDpYEEBMCCgQYoXEZWaPGWKHYPrKeXGKRp47NwUw79bREAZ92jZ1a5kBi7qu",
  "key39": "2DDefRgLFxrrX2TVCso4dtTGzxqadVUyyFXkoFmv2CUhT4H6Qed3yJsGW5hqdRYJZt2XeeLwqzUWr1MjiBoNah9p",
  "key40": "VXgYoPvGapZKmVsfeTUHYFUahmk3gMFqBzAQ7nf9GSAKWdnWQ6d1nsd68aMnYpmaYnfxzJkKVW7BP18De2prtCb",
  "key41": "GyNQixGtmfhp97Wv574ciR4USxQXRMuVWENx2dMcUNpggT5PpCv4u3w7Te3FY9EysPFdKQ8gShUL1ayFCabUqns",
  "key42": "4KUvvqMGZ9cBxCpSBMmxNExCZw9Aj5bvRjn2FLuKwoL9xPaiFnS95kbt7muTrs6DxXdH52KQ1QX4ZRGNrxee4RwE",
  "key43": "3oBW4yJCFYszaSYC1PdrP7XP5t5NJUGWRkZihC3bjzabkwknuWa1GzpHtHJjpc7perPjzEzRgWwN8xPr2czo4x4e",
  "key44": "5GTCaGDhd6rUBLvbAZcyGuEK6fQjJjgtaWjwquxTVEXDuaAtJQdYg5eCL8jZcSkXJKRPtucg6RgVVpPf1yzVnugv"
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
