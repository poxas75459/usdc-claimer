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
    "5JbKcrNebWMPAkVkEqaRRAC6EdYoaScWp4JbWKpHyc95rVgFxWEXYvqSoo33ypBt1Mfsg4HR5qsDvAUWVfz31PhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tetKCerT3HsZsnqWSBJy4iuSHcuqpGa8i2cngbcxRwLs4hEd4QdJNb7fPCPWXuPKzvkxU2STXnZyp6RjKzfsLwE",
  "key1": "3kk1bCWTBLXtPY1JVNPyZ9LB6pvrBMKp6n4vhaMu1BAwEeY5DPBETCXy5BNtDXwPd3h63ST3KntKr8qpoQ74HGXR",
  "key2": "4PcPipShUDnEE9wNj6QKFTS8rjQ5zQ2rcRWL3duwBwMPfXy5K4XTJeb9upngX591Wu9ZHG2nLE1Ei2Rp8z9h28tw",
  "key3": "27ue8wjijuBiK3mxY3vb8GnAjc4UYoYbBm1rbJN7Y6veqXaxsia6Qdjj5pU8mUe6iqHHY8SaA17KCv9aQaPywWuc",
  "key4": "4AWNpTnJb2wn46REN9xmPnzJ6sF8apCxpLchThtZoqpYt4jqjiWoq5uW17h3SUEXLU2h6c8SiPFya7XZAPEVvuBW",
  "key5": "3xMX7Q6YEkXZAXVdn26dNYimPrHyfncLtFFGdy9PWcJzVAm6NobWnbRxJi3Y1B6P9YGZ2xf3swryWD3D5sikeJrY",
  "key6": "255gLEKMrwL1VzuNk5sFTSizeKTBQ8UzUbnDBA2X8hQuJqVfQWqYdECPEP5acH9Ekg4gUKp6aidwmQJs6GgYyCCi",
  "key7": "4AfdxHFEjGcWDmVSP8MVt41cKj9BAZPV8f1NMSJztNASALiV2Yd1Fgo4RwA1tuejY3zF93gdaYFEVN5RXeBG9iC3",
  "key8": "4CaytsxY7iAaMyLaC1F5k69rjJtmxRB4gpKA1EGRvtBWaENhsTMTesb3zVRtVaz5Lf6W4jXvKVsspaKtTqnBPLux",
  "key9": "5jGm66RA1Nmn5ieo5jg2BheYNPvA9NJRbHRry5C4y2TBjF3SU5mz5u8HkCtZExPYnKdKEtTbSHEspsV3guPdtRCZ",
  "key10": "4oj1S92ZvQxDt1ZV87RSYCbidQ8nBfg7onPhK7jncmQQUNSXAH6i1LHmAvnbS7bWwkrxmbawFADCt1QrRE5WvY9j",
  "key11": "2HGLMF1Me6nRgafsaEdNujexJWQ1u24tH2JBvp76BCESai82pEuzj2GxZcJ9HfrJJ9SezgYgwBCxfekmGYb5Gd7r",
  "key12": "kHJUAaas6KJSVPxoC4vvsMky1bTkCJzmZVfHqJwNLVpm2vYVBokwJYB4h35ZEnJADudfXSeunvAPj6Ub5tcTJPG",
  "key13": "59Xsy7eycnbqKCaJFu9KNMc2cxDqFJoq7FJKD29RpmKSLJ9eUitRjRiPpRXgqsaw9JZK3tryMFuwAGK4pqDbNn1U",
  "key14": "2pff8so6DPkARBf2S2LqxLGU941z5KQVBdAZQyiHy6aJ8hmDQvv3ry22C1H9x8nL7YVVdHdN9Pv1pnGFWApdyHBV",
  "key15": "2vgpPjijPtmetG8Ucv8RqjLsdyseguf66YQHmVXbmnWKCEfEbEhz77JAmHVng6rLyMx9G2kyfK9JAWRmSAvDTkp4",
  "key16": "3VMu5T3tDXhgtaMjdcYYsjhxHcTU7fyqx32zTqP2YBom8doQriMuySAJZDRyEuqjK9u1XGqhBtSsNUpdVYEKDxqf",
  "key17": "3uF5YfmdyuKgi7tWGt1weB873qi4RtPrdSu9qKv9NYpi1BVrJz1Xv2z1o6Ptx9E25dwbsmix2eM7ggoA5nBqRKTY",
  "key18": "3TNqpX7M2aykt2cMR3aF4frvCoqsEft26w2QhURHsWNAq8RTjRMEmYNtFJ9pHkoJCGUJxWW8ffdgse4MZq1TnbZk",
  "key19": "25r4TEZSLnTAP2Ctnq6Ti4o9zHfhPUeGih3riWEjG1RK1CyEsKSTTpYjXsUnxHeEk84q6gZ12ZYS2TjKQLTneEMx",
  "key20": "5Abj3SzCsfL4bn7xCivDA7aupRuyDFjLHzhyuJ2R1oP2oDUjq2Dosk5EAgy4z7woxvW8z8cYfECkD12jhcUjYXVw",
  "key21": "1RgcBMSU8USFZBH1YX2kKJimhJTXq86a3x3ag8nifkBCqsbQfjbH578CRwhFzCtGMAjbKvmAN3e6RNpjWwNtyWj",
  "key22": "5YV5R1FJZW56SZV898PJvfvJuGxDW1H3HdedvFL23zrUtfbgoK4qMN3q8TrPPcXphKvXe2wcLXFqMxM7FVAABH5t",
  "key23": "nGygwQ2ogvwjaCepcBnWeBezvJaUha26KYPBoFdGRjEgyHi5kqQk4Ge5e5UJfUxZSdsXUPhjR2gvmnJhVbUDNRP",
  "key24": "3AgvABq5xRCXZboia5A1ene6UByTxT2GMwfWGPiUFFpPvf1dbhgaVYJyXLafqqGk6LY8Njumf7jMzsxiEWbvZhSx",
  "key25": "jN8Cb8AQVDudSg8PhXS6XjXvW4CEtq7uJA9YchV9zaEAcqas2qYKbTdQYqHGbEBsBjYGBZrJsQh6BViRvG2G87g",
  "key26": "4oaiemRYxiqddor9b7tjfF4ePiW1FWtGeom26if437wQhmuukecFX9xrD38AkCfNqvjcZT8LjB1f6JS7bqPAQMrk",
  "key27": "rG62ByQHaiRZwqii7HVBcwQsaH6DC9QkwzySKn6d9rMDs5LgkHPK3YM1yqzrJ6KEomZUg7NsRqUnycHFfcBm9RB",
  "key28": "2QFVgr95kHTmR1ctv94K4NyyXwaeHwGr8HLg42A3RxaifGpdPudNgGujgv57syVGwCdpJxdYu8pqSG4F3zWBkYMf",
  "key29": "32zBcu6Tzjtai428wNRQHswe4nkuL32H7WeQqfPJtPsENwzmpob7VBVtaTvPjUjCgHFXnRNUQrMWdWCUsaAfs6om",
  "key30": "22NEE899i5UzoyBpiA4GAqBk2FHa7rVvv1H9reAajwmwPwYNe2YcmiFDk5DoysqmBGrpnRWa5JdgFdx6bnnHTqsK",
  "key31": "2hU53kH8TRBNw82dnsshJiCDeK4JGeUzNo7dT4DG1ZvYQgLHy3RoiMp6n5ujoBi2t6wuArSMnivopvSqkhcq4e85",
  "key32": "5TN6jHGisqm4839EM5zrNhNUJfio3U2u96aQmctCTkAbgLg4rseYDzd73jktX1uwhaNkuiWyCe3GdaLfpW8yqaHW",
  "key33": "5FSfbwDoE7M8Y8fDhPxbHmySLtGxbpGTkxrm3XmQ9y76J1gYzMVvSKPb7PE8K8HhmcUxS4SfB15zF3ALcqxsAxGo",
  "key34": "mDPMdNXR8HWZENLFCFnfZF2VopcJDQKZ2mt1KjkCNoEZCRzjGFDr82Uc1tyikQ3FZCXY5vCrgvVoyWmqqP2NEBz",
  "key35": "54KVS41vKPa6s8TwKKPNCwCF65GejvB5LnVu5ZT2pPwY3ajFwxGajLgbvfwHDCEGa1zME5MutgLr5qUDaSiKu1a5",
  "key36": "5XycPxUBs7hXiZDRNAgephBwJ7xoPNqzwJ5AAu4bZRCycunQzt114kemVUpHNssB1M1X4MzLAEQfULMAZGFBeduM",
  "key37": "2vidediCRTqB66DAd6jmeGbCH1opDZeg1rp85mWEfSSUCEJ5GV69sPgQjGNfoJXD4pWxBHCSL7uoAP5CbV1y27Rm",
  "key38": "3vzRdNrpMWJmFvzkcfsYzscLWLrkwuiYFVmHgabsrELU9xMQqkryAwSpeSB2wpczCUE4Lxn9fvvuPTR7Hf26sKw",
  "key39": "4thQqYW2auwXWBiMZs93memc6P4z7QfU1wE4ZW4DMuS5hCX8A9JhW7qr56DKBr9enud1UKf6cVYqczeCYKdz41Kn",
  "key40": "CT4XKoZDP1cxYiKvcWCrucpLPTFXvXd8emWGQoEp59ZXyxNzXn9KJPJeEcQB58iQY6tLfnbuVKMp3vHBVr48bFG",
  "key41": "2GdtkepkftHLcY2XHHeTfdBs5xC89zkWgY3e2TgVfgYt5QBShCyqEhZCgxxB3ALtf4m4hdBfaXA6dZD2JFwnJUi8"
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
