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
    "4masUkPSEq6EgP6eyfJHLJvx7XTNksRciZzBwqCN5vyAJyvxQ1PjaVZ3wxTmpekHg48AmtnELfpRYtC4TQBHEijb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exeAoE6cHASGbCvDMz8UqBywVTWdnXg4zHBpKPDyqwhBJjWVr8aiWwD8gxkeCqwqvwJN2XFp8aBTFPkTJ1Noh2w",
  "key1": "GH7UctiZwMgYYSyWr4aa6fiQGrXwcSK415fmFXrTZh9faLPYH97htagd6avbpVCKBP742sejHnjyK1Ex8mzjDHv",
  "key2": "5TaT4PnuHTRvkDVtDA5uCWo9E8bnYu61uG8pJCmamBHpGx5Kjpe1MPeq6qW5uFwwrN3NfhEkweipMLCBGVeavB2v",
  "key3": "2uPEUvs4Yqb9ngGPZ5CxxmHs2KmUGXpvRcYFz7ZArJJ5Lw3j2Mgf1jRT4CJxLT4uVTSEVKWVkrsRP2WZD9rnL92X",
  "key4": "2FifGWTjSC3cvVqLdiDmeLWcFDbqrvWDJVt1UuLyzv5LxEprUehdXpuEYKU7rKod6iAqQgNxrPxMaFqE4mCcVYmz",
  "key5": "5eyRaFmcshY9kiVJiLxHyKpTyuwqzzsFK1QPWK1mWYFWjLTcincvinW6aXed3PmhTEa4D1T68xdYTFQu2J4XTvkk",
  "key6": "3Je3LD4cNSLiiJipp5j1YmVtd3J8tsnZdgSd6hDNmPuBW9EGhzbbWYZeW4S27UjmKCcpmf2kZrQxdVQQV8ecv9Ho",
  "key7": "41NCpx4hkr7H64CWbLEK3uVffxD3sWtBVhBVrd5uD7BAF44KYm1EuXemLLAv3yNMnbxBuBdosQQti8yhuWT2ofYM",
  "key8": "3JUFpYDFcNrR5nK5d57uNMvKsk8tyxRUEbE9Kj4BxY2LJMG3ctJwVCyvc9LcNoHhhK2VMTmji4NtSpAfRjAjsiAo",
  "key9": "36zzw1zVNzvXRwtYrcvkJ1nUuz3L412AqvGgapjw2nguDUKghZa8M5MqySKL9j4kcoW92MV7ZCNHw74NedZm8spP",
  "key10": "wrretyU2pVmXuDCsFTk3DKbBH1oixTXZoeQaXeqczoFvoxAKTJUBXwSP8qyimTdGH7dJakVXwPpTYcYZbpM6kiH",
  "key11": "4JHo9Cm4SiSemakFvcbyATJke1YxKykRrBKe34KiXUStPkradT5PKrprQLVV4nxnrFenHLsD39mNzpbkXrjHNFyV",
  "key12": "4TZm7bjbCKVe2Xmwc2HocPtiKjhjWLzMAQHE6qjCcX3SeAXGLxTb2uHughT7xsowpdtVji2FVa4P5RVJhf9TWnah",
  "key13": "36HX3auMPujcLFpYwPRp1iKe7cpqk9X2Roq1HgscQCW36QXDCnv1YAtSCkFXMtoUjLz6bMBXNgBkX9nQ6jotz7Wg",
  "key14": "2BJtobyATcnbiSty7xwmTyo3o3fq3u4AFNTLNddGxKuzi6LdAjR7cF9Jt4CTKcWFQyfwvUmjo5XG9kwaE9AV1K21",
  "key15": "2trWRjsbN5ZNU47KE7QoY4qZE35Yate9t8JfEmo6budXnV3oGv7DC7Neekcc5iyCTSVu7MaqoAYqCcm7v9gMKWwx",
  "key16": "2m6EbjLEJLcYjqVYZ484V3zSupTnGmmuahXBHQDosGpfcNmTnpL2NNnACzrxoFJsYh2QTLxY566PKSqLLqRpV3qL",
  "key17": "5uNYTnP9mdm9JgUmb9MRoZRygiw7E7H7gVvi79NuaJ8on3LyFXw7tiGVrnXoBiM9r9sjG5e5CHAoo9RaDeA52QE",
  "key18": "5AJwhbmS4s2VtoWYhFporu9D5zdumreU8toF8Q8bHsFJmAqPRxhBPCDJea12tCQv4M7Xi5VqC3Mauizcx7mX7ARF",
  "key19": "zaxskv28EQjLzQXANYZwZiYZNTjiJtzQezcB2NwhJ7UjJujkYxHoJMhBiDsAbQY1PDmVjZj2PBRtUHYB5R5RzvA",
  "key20": "2sU2Bjdzea21uTDSsyzxY6PMcQ3CKSWhoK2iTtAXiXrxEdzhSsvcYiTFUjxfNa6F6vWZyMZLCsT1r19EMAbQZsgq",
  "key21": "2m8BwCynbMbKhSx9phnMEs5ERDPEiSxoufpSdjPv2Jz41TdGnGGckkqh1xRvRCQpMZ31vYC94SPurfodS6DBJdAP",
  "key22": "5evbs9jU9SyLCEwd6fEoicEN8iHdDgRnBapV7U77aZ4SToe31TkiB2BjvHHj4F6KYxWmo77f5PFqSYrzYtGzZxFU",
  "key23": "5ByiWdQhxZwGgB64y28dZaQiWTwBmmxVZT3sMc2u4q21Uroz7nBtan71mt6Vx5txVWBHYAe3DtBQ7HWXnK7BeKgG",
  "key24": "3p4ff2W1XTxNS2Fi6MWqbbqwPZ713K7Yni1NHAxj9FJaccGu6K13fUkqShjp6UbsoECJJ5GAonht8JR39V1Bp4pB",
  "key25": "47cFVmhUBkETqRSmTUBRn58ZTeuiZWeLEZVYt8JvqgJrrsmFab6SL7GidQAv3gt8VL2164hmjDSNDwz7Lzo1y2VW",
  "key26": "CUXwkXYyRWvu6cBUL8GKQYevQRNK5k2cSgg3pqLZzP4a97pV57qdrDcmNTFoZ28LSYrtTECpCqqgidF2CBETJ4j",
  "key27": "63WVEjqEwmeVguu1dBRm175w7iccyddMYxVz2uV6U85ECv5LtcwBemeJqFZhWssPYPJWDrgmBD44GkVzVBJuNVB5",
  "key28": "oaW7ZbDqLomJfrkeWanZ936sEtPDpbNhmdre326qmPZBXvpC2n23zdYUXNbauTbhs6G7i8bpBawC8pqiBuZckdJ",
  "key29": "5ArN89Q3hwt3ww167Y7g4duiJtZkQaayMragJfrfWiut1zNmo5m8QLs3iN9K2iaoqVA9hq3s9yYScTCBTTuNAjS7",
  "key30": "5cam3pMXD33MU8nmUYrbnsmPjL712654KowpJYvXUPWMdNbhhgpGVug21oUE3nqF35zYcK8g9zEDUQ8SbGoS1BuW",
  "key31": "4roANSVbYa74WKJEoC2P9CPZp1JFonxmk8SGHtYFTMtnHtkcKqagQcY1u97WiJaA6974FZ3aKPS3nA7kpTp4JYWU",
  "key32": "5c6i2EkqkCpuVMnsENBeeckFyRMMEvwx9UNevRADj73yzUEPZPqqHbHKqLB9KYdr71xuSvvay5FQUxqjxLyuyvQq",
  "key33": "3emSb8pvYpfHVNLdFZmLMkqosRW8nc8QHMhK9TSE8wy3psqBhjwcQCaMVd8wzHRGS2A1aa49trT1mZYhbKLG54qN",
  "key34": "3tXsoWqf45XxjvWW9cXauKd9zPz1URbtuKG1acK4X7WcfkSF4G3hnTn9hAEH3XLJCiULShH5u7QWpQfTG8jA8KPa",
  "key35": "2Akh91U5FRMQ1xKnTBqHJcDmj4BnffUZvHUnLYaNpbo38fNjKywYK22yxodycyKWtRYyGrwdnSXXKKWumnA6rjaZ",
  "key36": "2RujVfYnDf5WgtqyMTqn4NLqbN4kp5Y5MWYTrhehCJGnNoXTUQHsqxaFTqGpdUMwnp5FiTkB12r5GRUNvDLDfieB",
  "key37": "QV3fZWEnopWGshScAgMWczZMJDqeQHV6MfCC5E3zCCcXudiMuhDeQhua7CHAn3n9wWSvLnCQatuV2oJxc6Kdcuz",
  "key38": "2Zv1eSxedgTdDnJ6ez56ZaBHmyvULLiDwu9q9nC6APRQFL8C5eVanp8c6QYYL6aHsWoLQXBEXDNNpyzQLx94RWV",
  "key39": "3yD1XwYwjtqzoYe8u63Rv6JjCJ6JA7x5b3z3BFK2ca4tuV4a6VR3AutfCxe6dPB9jx18omCM9DB7gPoB6mXg1LDN"
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
