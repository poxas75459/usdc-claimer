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
    "LzNwxRxXMELi51k6hBTHQ8Z2zpf2YkJQhyFK7iwnyDTq48GP5LMe7UuwCtL62SWTehbBxNbsxqbNFPiHTvvFZDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVBzz4LZfbLUJFUCsQ9hHmZ26nhbkmFUogr9C6bWgVjSWf3qXXadPcWfSMXGx4FTmRbpFip3TLGMm2GTWYNzADB",
  "key1": "321hnH5EZoqGUJCwmPRdhefqipQ7SHZ1PZUBTQ2rC2tanFjjCxDyCyx69V6itDJczECWBThVGizknNHkuuET1XEx",
  "key2": "4pcHH2tijvSfFZFJ5hzJG2tUAR6NzUodE3BKzHzqgMjSLnm5Rt6unBJjmB9V44ozusTBKpDa8tgV8exM15kyRWtb",
  "key3": "cGseFj35qFZsEA2Qdsb311NiYUkGwkU4JqSxGvP88iqkWxC3RvEJqiUmGuBoLwTzjokwF124d9722Y9R7AkPtji",
  "key4": "3nF3ZC7LojrAdR8grLp8goJCCT3Y2a7rutkg3dJtmReytSJV5aacmvpkSDrARRzWmBhXzr5MHuRwktBtEvuxfxuW",
  "key5": "2EAdj48Jx3EjEAykwLu7hQbRmYWrU43iMzNLTs1YQeZa7Ps63Y3tHg9NbTBWii4fDX2hRA7xEbByJMkJr3dh2vbJ",
  "key6": "5Zim6CMLGhgDzwhsqdc5BKR4Q53ezeF9yJtgKFkmpXm2wtMtNpfAvjhNLMvmbavkQ7XSLG9nCsFsPF1MrYQBofam",
  "key7": "2edR43aEpWZdFoRkBmztBoTgcgxn8VMqmfe8QFYLJCzfGJ6K6niprZWt4D4attYXxLA4te4ogXmT6tEB8TVPQMB7",
  "key8": "2Bm8KL8L7fizqyfgLJruQ3QKjd9RdKDgCQxwH73JoqqNsuhRdXKZd6Vb1pgih83baiT6hrUxcRz1vvxAeYcoMioD",
  "key9": "65RoTuVgNZCAN7z4jqGh8ucTisHMF7oGK1YPoYBUoSFHGQH3PJxiejpnvpcinpHYTC91CmLmKT2venzuXX9Y86cF",
  "key10": "45YH3edpUb4CYKemEmEQsNzwqwEgt6gL58isc4J7FqRwQXeTySHwNpWazHinfEZEQLQi6hLevBppZhYZzNr4zmsE",
  "key11": "2FvnfJScMhU2bVTLr2DtBjA12kAuLnrNFADNXEKvTenDo21QCs1vJurPbw2LCsXi8YoJ7zzW3NBgwaYJtwXp2Z1q",
  "key12": "3nBHSsV3MEVg4Cz1KHVNosWysjaEMPQcyhB9QMqkqUv4yMFc2ZF8JNB6n7hdvND7MfZSdHdGmRyDGNuMUZAQ6WHG",
  "key13": "WT8LAHQ1kqgDpeADFSxipu5XbDkoKWHEsnwDew8oEVarNrERcGM2cEMfxsKvou4jHLiNL9BAHvyKEvpyKtCp91y",
  "key14": "4Y3qLQo9r8H8aa5vzn4Zzbg8Q73yWthfs6X9sRVvuLVZEauJ4TGN4S3WBDwtvoYcCjTup9VPYWxCqHkMZzzWT3TX",
  "key15": "2Htc7YzDxBuEM6D84ySitAa924oHrmkrc72XC5KVh5sQuExZstmJWhgzaviUN5W8a8EaTWMAn7BBAVmQxqwzHi6E",
  "key16": "5y8wqDJL4ZFvKBccVPZ9nnqQ4Gfc91c1U6QKxqw27Mhz5pPEkx154b4uD6ek7fdZNCVBLPvCyKLRTova44P8nK7q",
  "key17": "5S35NUxjK3kFpq2EjBLYyDfJhXWVyC3qHduHSf14CvSb9LJWcnykiQ92ww6vNqVWf2SuX8iHmxjJZxyQtWZw3X6H",
  "key18": "28bThvsYpbAd25o8nMEQdf4HtS1XJjXgJeLTPNFDviuToXfKyviPzyLA6pfjmE5gZucPnexLB4NngzkL3Eeop7KG",
  "key19": "KqspGmSmeFPY2SLSpm3KEM2WYNE99xAbLSh4H1nTvNkac8Dvub6TinrnPFiVzeURkWFAgYX6wo3aPAd81N9DA2A",
  "key20": "4wrs86X36L66M44YsHpW7H6h5YKfXo8PFbr4GgNMvheBpxKeBsQ58ko5M6YVWtZwcFCQv3iDDF6i33EXqf4ZfF9L",
  "key21": "xYFSQn76bpjgcHYLpSu4JS8vwjX2HGiQMNo687Sb1jThEriFt848cB3RgnsQocgJXmgSnBFZj91RSJSTkPMDbog",
  "key22": "2rQqAS2JCYYmT5yPFi18pjvK6m2Lb86WSQtGB6MQqu7yH2C7tkASw83LB6UQmDpxiwLGnHa7KqNUMNfG7pkZ4ZQn",
  "key23": "5k83cmPKZT1kasgFAK2cx9gyBB2VcLC32Gow4wmJRq9Koj3F4f12nfpiNR6AkmmygJCR23iMqd69ugGv2n4sUdpE",
  "key24": "2TRpnd8dTPgWPk4iiu572zcWJQ3zJUxkj4wbs8jtpSEwnVfX2xGB9CN9xHz3k9XJy5hJrMRtY4BKuvyS3RrZffeR",
  "key25": "33pMJ4HVBS7nvSopmgfCGRnjRLiTRbFy46xXvJ41WspHdEzrGWziW3eFksxcpdzqnLJfb65DHPnKgWdtEdyCt8Ri",
  "key26": "3vJ437sXQWyPx3soSS6PaEpYrbSJKtEWwrkySXnjNR8MuaBQ5fzd2PpU2zHC1gDP2TFrz1U4hjDQ8qhMZyycVUmb",
  "key27": "33FYLwAgj37mdvTBuBsEAEKjTjXtBGExsNfi52vVTrtZAR8dWSB1PKALmBtLrnwBMKixcH3xDHN1ht1LYgUXpLmr",
  "key28": "3xVxcYxhfERZfFK7aoef4Nbqz8mtk1Xhr4ygMGm1NvgTjgJHHwhREVWdrKHaZ2gj4dFh2yaQJsmNu8PftAAqRtAB",
  "key29": "2XQmbngqzFu7d3fMUHfSYE23Eeg8EEi2jHRr2TPMRjXDURK84Yam1g2knvWPDdNFfvAgD2RsGJeent81WNAV7Sfr",
  "key30": "67LsQgR96Ubdw4FCkAXX9r4eFxVTPUMuAWQgaZcWGmUnzzxY8xUbWztQCgyPv97UL9Rzyp9ZFvEGpKvhyPnAjUwZ",
  "key31": "3r44HMVekTeB5QbmjEPC9qRMzbk4DM7k1ECHLEnQVgWQ1XaJvk6jLMpPDL45kv45mG5i2sStVNLR8D2SKdLjuUe",
  "key32": "FZKSDGsoCD5eT9NbL9ngsgnaTPCDy15ethaQYYB3JgUY7L8DRZSeXyct37L85Q6qZrwZKM5VaHginMJTroihJm3",
  "key33": "WYzCyqEmHmEsjXynutugBG1A8DQ3ycYztwJExrcDEdzb3yoy9YrsYPbR2LWcncwLAVWHoejodgDAykekqzvUdRH",
  "key34": "25uheUyKeToQyKgyiHBYcXtXww582WNR7zTLVJNoYVw15BHXVb2GDEd3GsuUAjUKog4PWedydumV3T9XFH2zv43E",
  "key35": "26nJDE8NLppNpimjM52NiMq4meLsktLjB7asBQc1WTgrGP1KGydDh1uTiik3pyxwgoe75t7dnNt5Rur5xC1poBzU",
  "key36": "3q7h7JnydhiD6UjGH8EZ5bY8vNknTyrtoZhXoxCkKd4AEy419VpqG8z6bXxDBWVFUsWqr15btnP5AWAdL2H4E7N1"
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
