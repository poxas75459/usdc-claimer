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
    "3kiFoWE8Ppzg2SM452HdfLKzJ3XgmrDPtAHTc9TmWTpxQGmbmgzqfFtFu6SnzWVNWe5CmDTnEK5N9bqFyf47BgYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmu7gZCZnVr3aW4gRTojsdsDeFTWy797PhC4FpKakeNqLXrMWHU5NLyEDWZTYBzPoqKfKTxMV6ws5XRzC6YgpJT",
  "key1": "3eAwrKPA7xrujDpQQzQbF1n66DPK8L5ARSk278Bdok8WQBMmt7AVUuxGxFjPL4ot3zkhkc6Gk8atDHQE8A8DSxhJ",
  "key2": "4eaRzSzGGetCkr3FzqfD7NinMGmmD3jVyksVqpQJUfZ6SZg2kdCzRbrENRwmvwf9tvTiyzLHrjRX6YecsWZGGana",
  "key3": "axhLQUn6bTceuZuzWJtx7ychLV2x5iYdTyAA6AS9rAQVd3LV9p4wWMX7if2xT16GkzuU42WFoxtBX7NrXQVfZDw",
  "key4": "48Av8FYrxormn4ta34jFCGDbbMgN8q5oPTgBy2yaEMwP5ksECf5645ifrJ4x23BrzF5o1uN2BWvY63z8Ls7ZQgL8",
  "key5": "3eWoXCtpxjPXmiJk4A9PYavre455ktVjK1FTcQW6jMqYHwPpoDZ1C1J9mWwXJrBzsJV1roCTcgLoizvTJtcg2ijA",
  "key6": "2acDrkqciDaZ53WGYjUygDFpUjWjNKqFdbwFyC5FEhEzNKsyn1aBGcbg2Japg2bsKmEn5tKWfYd6bgmEhE34VbdD",
  "key7": "5xuChV9KvfnA1F2mt2gRsRyJuxoH6MmNkqJbdPaf5kLoE2K8oyekLcE19C5V42uDGaGwqgUMXsmF7MLbNSSAzfgD",
  "key8": "J1cMTFwhSaJYdbgs2seGvWqNAHRU8y8M8eT48hVND4UmVr5dG1rqK6tshPBp8Q4JhnaUQVCmAnrqfWQVxPBw5nN",
  "key9": "4dXfrtRgiRhiucnt7kRXpDwPRQktvYTxpZzZ1JbzFh4nx1fJ1wcwfSwQyLEx1mMRHpySkNpje5eL4k8XxuFLjVEq",
  "key10": "2KCCgSGFNSZF5DFqHjmo1ALceUsBJSJXq3jhPExBG2UpzLKXwNBSaGRVNLk8tWwGdyhjc8B94Nf2GMfDFwPh8p5r",
  "key11": "43UV1xM3HXk11sMgYeCcrMW6VyxEBbUjoRqVcMGEPUc8TTS79mo7pv4h2F5x66JfKCLSQndtk6vbM5JsyiTcJsHk",
  "key12": "5B9Zwz7W8mqkBPmfp9bnE3Tr1euWMqeSV18xbQUyVqYDoYvrys6weobt3Jg1663fAr18UQyWK6mVuLH92oZq3CPm",
  "key13": "4EraY1bkz5ViJJ862vSk2ZuWLfcqkrGFf4WQAWZoAn7WpjW5uwryAbf98t9RYtM6zXJehL3Qq2fcahDYuVjHiekt",
  "key14": "2rkiZT8fqzKYZLQ41G6pErn3BjPMXxZb9LhS4qfMwbn15cojP4U27K5RYZwpygrvPfk2aE791Nz2cBkn7dtDVXrP",
  "key15": "4kvVWnbfhQz8sjjUgCm8tUqyaD4FVjP8RTHorZnDYT9hEZm3dH7S8h3TBNdPseJTB11BMFaPRk4K1ZbeQx8WNqTN",
  "key16": "2ijAN3DBdq68Z5Vvevmz5UmS8MaWDgkFAtB53xJuokMKit8oXGu7F8yY5q8rKm9Y7VPPu67nSPy7pmewuSKC6PXw",
  "key17": "52Z9gbdpFe6KuL4CmiBjB4uGsmMLRovB4bHZabWxvtSuNr8UZVLFYHdsSQY4QRmPKszxXAsSXRj9NZx7BSGqHTFR",
  "key18": "3rQNaryoMLJfWsg2vav8XMV1CkCYY9u214mGnhk8N4xt4Dyg3wZCBptFB5RSR54BNttZLaFdw4BbYk3FZ2DijfZu",
  "key19": "3d5GTYvJYvNKLcrYtyX3kYvL5EptPbRoQmKe8N3rWrbiw2EvSebkXKkuqynLutXWCNh58gKMkCAPZC98XjFvnW2C",
  "key20": "3r24mEHVdmTCKDJntstW6VsWS2Jq3hQ9N2StkKDi3LCXYn2hQKwmrgr6pHGMdL56CHTDCqibdjwYGTvEpV9ixNnw",
  "key21": "2ws2cHiQc84SLH3sAtwRT3FQpWGSrXqZrwQKeKh5rBhP7AsKNqcSK3eqSgmWsB3rNagdn5KEijqgNGGLCvqx66uz",
  "key22": "5VEvuESsCkAJLVnDJtnkhB1BHV9zmAXskifxNK3L1sPgy23xrhBxDNqVKq6m2gagwttDRuXbqV49CA1hK5NuLZGB",
  "key23": "3F1cbQPKXWVKT2WeNPY8zHCMnLxhHEWgfVft8aH2sB4s1o33Bei8qT4GpyHP9nAb94V22wUTGxDX3PtWjxDcNLxf",
  "key24": "3wj4bbLjLzNNzXdNyVkPz6ChqRegqA9ZFzGABKxWzT5nx9qpDzPmtJdUtFVSEXiPZJu4GU8aCnbTksznKnWYEaDW",
  "key25": "3ayWEEMseFTECuUVw4pG59UpzguUqQyvHnUiXQqG1GdoKJv4coswaSHoh8pz7eRXQZHcx26JdFatvhWbzbuTngZh",
  "key26": "mXneJuC3iFkhUXGBsPCNcyfNwki7TV4oGRZgdmg5BM14YsASqwHsHQJDDjcGvgqsTebmLL3MQGbFyZvpTmaYicj",
  "key27": "5XtYbRZQV6AXbUm9GbVrQRN2UugrTkuMYmS8U6xjqQUHzSrEjGnVGzA44ia3R7Pco9SEuELxBoQHnRRKg2RGnqzT",
  "key28": "4GqotLKtpaZSaLKfz1rZ1k4KZWf5odhcft7teRSnfHKGoXtgTK8wsKctD88aew6CpPmwbNh8sWLMXq9ZX4vbP2Uw",
  "key29": "2SfCRmYtWG1ptam1svJFdGJ3AyskxJbXNo7f9gTsg9bCHny1YZovrkrEpbaetRzuicnBF9FXBrcgn5rKhwWpaQ1w",
  "key30": "N4t1Znh6Y4oWTvfcE2YBS5gzFsrbUxupLiLMXDFwphrWJFbsThSQGQWmqjctXDLSq8ZPk66ctnSFinTkEbdMjor",
  "key31": "3nQXWVhPeNUZtrSRb6PzknbDCjX4y11YL9VnLjSqmm2YK7MCbcvGaoA5TLHrP8oQVDfGPPy8LbHwcPekfjNGQvv9",
  "key32": "2mhQPWtfhGbpoWGzfLxieAZFtpWf3nWj7sRmXvJD6G1PpCjoLtmwhjjjakMkUyuSmBD4KkKYU47Z4Yv7TxvW3yyy",
  "key33": "2Z367EdxnRMWUetozqGMvHQCcVP3GvEGWP7szxLyex5h97Ttvw2DYV2R6sGk4szrJA75a7x4zt588Cd6Gfq1ga2i",
  "key34": "4RpJJZSReHJeFTd9sAPX9DtL2azjdCLZcrfVRXgcReMJGTwwbCKz5iwZS4JcXZRyLushww1yv4XRoh85kdXhqYnE",
  "key35": "31t72taqsNsMDVmkz7BGtJqVrXJ7ohMgF74XkJ5wL8FWuaeVUDhLSsuBbJa4muVGfE3F9hzLYc8BheELkyuDkNSt",
  "key36": "BvDyfrZMXTNsjJgGkWD12CXDUUXQ652nz8m7bg2vCBxNafWysjmQvzHk154C23aACQ8vBoVw9XcCD1CM4FWafPp",
  "key37": "3oHMcjwALBNcquWYQd4y3QokQiDdBSEDJJSo7SPzCTU8GRCwJvcpMGxaC16tu4aWfYXK2NgJKZBDNcp93LpWScec",
  "key38": "5xX2PwMR2MeHf99fcJYESrsVGSpiSQDSNmnrUHDC7wkvs6aeZHEejS1ndi8ck5ZegDodd5GemLJXbKZt5iiDj92n",
  "key39": "5EQTWUcetYdkYPr8tAMAXFzk6JcYBL5FUmikVPXT9CMS5rtmeN9JRxyo4nCCFX33PK2xA6mDz333x22oaXnoUJw1",
  "key40": "624pAmm4WwvXsQzQPuoE7iYqsBcCL71zFT1obfxECW4ZfoX5AtCP1j7LwRfLJTCFfhzXpd2wuWnfzTZWavtsC5NT",
  "key41": "23Cz3bZTnLsWQRBttkmmYbxH2kyDX7kGK7Qxkw8yWNsYUqWMWctHNLiMtL4vnUhANc3z5jEHbvDjaBid2QKAy31a",
  "key42": "5GMmadivhiZdYVWy3HtMhVKdkuPoS3EKR6S5i2Z74Vt5ceHTxexsDsrePjM56Mc5XwoX2qputnu9Wx7AMLwJjKN2",
  "key43": "2vYu8GQyW5DEExRsi8MgpP2qxqrZdYZ8swv7Jftr9fyfPA389NbKmHA4YpnJAr1VpZVLJd4V8hrSaqSvvvQtskgF",
  "key44": "5pbhyzLX3cNNNNaoZC26psMGLPDdy7wifsAGdE2jc854UFgGavQvcvY9xbppLiWsR3uxQDeXiF5E82sU87bmfyth"
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
