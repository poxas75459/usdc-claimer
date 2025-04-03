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
    "Mh8xwym2cfRwXxenxueqSRVFxigd4dCoXr3HhkcwhX2KWPauYZZ8vvxAs45LWM5mrAdvStJJjSY61f4DzorffsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUCeLp3VbfErbEkz6iXsLDkdzy9a6ht9QpxEohC4Y9nsUiDxDDgzAceeDKU2JcycUxDppYGCjzAUnni4B8GxqmU",
  "key1": "5geRM6KQFhe3m2e26PJP1tpGxUBy4GrGQXRekAMnZnKsq4izFHKrFj5HtP2AfDELoVWaz9U3wjFUBZZHfw78MaT8",
  "key2": "PRRJE47c4UvLx1fgNo5VPJBC1AtNSmu8C7RjTMoCLD2jhZ9qoiYoasV1i7C7hnnYXck6HHuJNhD5zAKPR4ikMpy",
  "key3": "34ZtqPKZ88oS44M1gNzcA13kRNj7nFzJvaefuuv6YDJmkthRfopeyZ2uK5RvwCiVEzM9Q6N2pk3x2mmbEHk9aUAH",
  "key4": "bptxk69bWAN5gHN3kqYCoRvXF7bMyYNcPRdRYXHWhhjW4nKjrTeBoGod9UMoQsFVEivEvE4ZZJ9wGcUg9NxpmjC",
  "key5": "22iaivWFfZYEyiQdqfr2Ne4MdpLYBeEfnJA4SAQwfFAbTC1hqw5CRxRcCgu9Zn23EEwFcQTcNBRq3gyFt5RxoERv",
  "key6": "2kcX1ty1QNtmwvRZod8g6JcDpKbReqfrh2np3KCsYNKjaRZEMyiLztzrwZXd7yCw9jQCNEWnnXXELHLGCYbNK3UV",
  "key7": "LbwFGKe6ZMgL1WowWY3faD9Pr7699QdXL27aR3phF3ubgbRZg31QRZFpaZJVitRb7WckNeU4c5jGEpdeskdP6an",
  "key8": "3iAdoiKqQwjf67MZKFdQC8AEobiLR8dBMxsae4icJZepbAn7T9MS7gPNxFcQZtwJphfNhhL7ARVZZCetk3M3kRc4",
  "key9": "BARTn5L3LyDswtnXhqztryosabrfd6fPGc2JHgbff3mQxbosraXSTgVD4dx9anN74kxoUdubhenvAfGYSvGUmbj",
  "key10": "4f4inS1ApRX9mo7GVrjxZNn5uAcXSy3zhXLbSys43fwBus3N68Udj1E6ADUWaRBSLmMirrYkFer2xecwWTPiFRSE",
  "key11": "5pqStYX1JzcAGQC85C7mU9sW2LzLecLuKQUXyhchPnLH6x5Sybp94Rwbu8jQaC5yQRLqpsrs2vRmRrEVXGPqcqaC",
  "key12": "2ia3UkwU5xebhvYUtd8cq4AyaLSX1dkeRLVpTc9NtTzpREvbMoYDQfL25yXCpupNviNq9XSD1wpFQoinPTSS49jW",
  "key13": "39M8sE7JevX3G23oZ9p8dQgnGxNVAKMnmYYkphhHqKBZBKThDLUw3tSSgsNKdgP3zKo1N1mQJwyt4GPa49QxhMBP",
  "key14": "fo7QfCQTD7j9Ki4BfmACYSur178zpf521NRroGhCzJ9wdh1qhzQRr8Yt3hKRSmAqR6SrDhfNWZXKW6YyN8bXcEz",
  "key15": "4Epgsbw6FvEugGgMiG28wBKGfMSTCrRweAAUC93owacFgxQKWc3x3HPgB6HJGzfdU4FefUZRQBp1YeaGCYvzwjFF",
  "key16": "53sUeSMiwWDDmshtL9VTqa6TiwDLEoZp859Qq697sTCXSnNkW4eazNWBmAv6Xx4wWZ966MWL1oDvjcQfPKCh1tVN",
  "key17": "Kzrfd6JUQTUmwSNvdy24dZGCBEV3m3qLghH6ziCCTBienr5LyyqvsnBTjyRUXgie1fCYm1mPrP69gUbH13nWxDa",
  "key18": "4xieKnwLF871z3X7fhgG1Jwj89S363zZ13grZz3SwC463BxTWP1hWdq95bGHBz2L82NYpiB9jQA4vA1YhBRB7Vs5",
  "key19": "25Qo5Hm5CLA22gWUKSnqmF8jtxuUpgCgzZkRDxT5c5RBfA1xeP4Wjkq5gCLCa2sxvgGcNnFLjX7NgEkML9DYUPhH",
  "key20": "4JGYu6JrKm8ScPTp4UNP3Z2pfxEeTVWefssEDrjKLn26idmaJyPMVcUrZ6iE4MLokqxB7UBNNcbvjrh1VxreiLSy",
  "key21": "5hXapoChQyrpTHY2sLJX7X6u1w6emWb9LotKtf85DfT7iynWVWHctc2mkTBdDJLjgY7Ze1YV9qMJKSJhLtxs8fqm",
  "key22": "42nTc26FyMfbi8dgMATkevkx7viJ8rqnXNRiGzPPk9Qy1S11JG6cm6vNY3LaRpziYMkpVWwYXxGxJtKYQftUB6Yg",
  "key23": "3iZ2x3zLYD2k4dTQo3mc8CZ7RAMtop7iMWyNkKP479Y2wPJ1mw32PveMVqeFA1VHs8BXXX8sEmn7ZEn6T9cKLqvh",
  "key24": "5HVvMQsYTT1WKjocvPRmGLGcu1hPUHnNuXQpPUpxz76pNeSQXB3yUYh8UrtVSr2vExggAqmVySDBgX8DtroTRvKz",
  "key25": "2pMn3CyBoSoEgnrw1oEV9cKz7zkv4xZJXnuiktET3uXCkNueDzwAQF8ye9HXFMniD3AhR4DNMMtzL4MmVxdnMHQ9",
  "key26": "KTcSyckx3DQLGzweWaedsGDzfgg5SfCrN6mqxVmvgHV5FuB9X59z3TNrRZZe9nf4u2vMA49VZR7MA25DjEX2wDB",
  "key27": "2TWL6vTEaX2ezaC1pHaFi1tkQx3jehLYao48vfXLSXpMHemNzPSTn6cbBoCkweqK2KifeDCZPhN7g1gsAyorUCXQ",
  "key28": "2HZoLGyYSyM7Yo69Nkmb3kWbi4dWCoz7WQpkZyoaZfATymqmDTKkUo2VcDXz5TQo1eTZsh7KPuv9jJavYqPXAhZF",
  "key29": "2wqsg7TvfhdoUidR7Naebh2ZMwQqrJ5zQiMPawk8zaJAfc8gfV7ze1yCrtpYVFukhaAbJzc3vVV8ZWKK6ixpN7RG",
  "key30": "4vdxaovnoJjXaM1ouhxhN65fwJYXrfnD8azuMkRj4xorMjcKazfK5NDjVeqb45qUe1sW6F21u6thGEDuRqcxWvjS",
  "key31": "2ncaNqrcNyXthK2HCCwFKCaQSaVggodKu9bWFDkcwyzK3fx9MR4DnMUcFbbAwavKmZn9YUXbsetLoEqekFaWtTT7",
  "key32": "4iSF7HWtD22DEqVaLegoYpTKenvGgYSRiYJ7YR7BgDho1j281oTjsNhVQGU87964TyhKSnHLWi1ovXZaPwBTBt4v",
  "key33": "5a83h5BxknUkhnyae623VyHd4kivMuwKoS9zK2iDWnhSRC2AXCutDA7Vb1f75HqjXKnrLdXoKkkKQiCt1b8FxRyN",
  "key34": "3eS2tik5CGX1cySZ5fTNhPpw6YySFmpV1wze81gQw3nNjwus8xVZUex3a8qAKZrvEUqk6Ru6yHDZc3XhKyeyZi6L",
  "key35": "4mWe3oZhGA1GsDmZKkY2dcbNKyV4cvPA73PUKY4WaVvU3PjHRHxJCbR9gcbJ5sRFBYnPbdystkq9qtb1Y1BmBPeL",
  "key36": "41r1xvEX57qz9UrPYirv2hmVA9hozuTEiAYwGBwAtHxQme5D7TvhcUegaKBydkSjQwC8uFSHM86JNBJrnv8ebN1h",
  "key37": "4mgBhaxuKvC7JLfDkUC8vXrt61pp5zfwnGkfmWvxggDQXS8gtz68v3sjoDDQX358obFP8P5X2JAyumsCPEbc5VdL",
  "key38": "2UVGppy1JTunyzXn8PgUFcZeR9aF9coJcs7ZbEUep2Sij312FUjtohEDbRTfRgkRrb8Jm6QQfAXcXZQT4vDZa5DZ",
  "key39": "4nP9YdfwD3ABKrArEmrB87NWMcigC3hA3bSubDsK1Ne9xBEMhcpiucibUKk8oaoMSH2qL63eGXW7UtknTmVMKPTE",
  "key40": "53iDKJ1M83hqMNFp5mqDhBid2fh878pbJwfdYTsydu4z6mhnj4hzQZp4RzjFHpzoy2L7D9SsmkQ4HY7kpYhXhXA5",
  "key41": "3R7opYnL1oWpJdco3EGbbFk4VX2CiHPkKYdScdJqvyTwoGaPLsqMykcaLCyk4EZq7qh3MwP6yidfJAhnjSLxFMMh",
  "key42": "4qszyArfk3L2wKGjexKGLM6g75XxUiwtmc1m3H8PEhikxNocfTzzS3ctP4WsNaEHufDf5ZMUus7z451QE1AxR7pN",
  "key43": "2N5WVfabtaZsKPwNYa8ue7DCk3xvCqxH4tTFDb6ASfJSS1fc38MN7SknMS1Aq4KKC7JnM7GhVTbwZAYVjqMmRog7"
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
