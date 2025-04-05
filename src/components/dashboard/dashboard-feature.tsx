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
    "5PU9ucyiZVNXZv2bCVcE9VaadEXdPCMaZhfkNrkGqwUBdVbovMhn1msPvELFX87jv2WvEHJ58mi9aumHs4q8iPXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCtVdPD9n94qgx6vnv3ryAgLGYzXHYxTBh8sa9k9e1JYM3syn6AhipBfNGm7jwTTWtGVnYEdGYpp3w67SVdwMJK",
  "key1": "4a4LeCkX66E18Gwz7X4aWUMEFhEY9WHDYoDCDCVYi9xTLMi2UX23ZJapWAkLma3CiR68zTKVGXjZ2pNmVyBHFKUg",
  "key2": "N3XCGYwwcgMjvLL9MoPR2o92GVQvAeYxfnu8M7xC1u9gGz7VVmjuW5Y1hF1A9i8YKnpgHqn7GfsmUEEh5ecwTUF",
  "key3": "4Kb5i4DwV7oNL9UhaEvWjpc473B5cyAvBJ3Y2KUR3wQnA3dpwLqXsb1vfJeNoFVz9v56qGHScQ14Fgf5UuUf28ss",
  "key4": "aVa727ezSmGmPdyS7wQeud12W1BC8XMSWtkWfRpDqNFDbN9XDHCvKwFrPSNX6DuxLCmmqZMcPETXvfrzy4L3Kkk",
  "key5": "e9Y6LJDs7tbQ1YwdJDXibnhd6ZJxieoUofERd1BiFmjEd3TX1Wn6AUS7YvQ52AMzA2FL2thdKYReBy5Sbt9BSRt",
  "key6": "5oN6zWdonjLiP5BQvUMqKyWQsQsk6T4ziipnBh3X3JwSkmubW9YLqsWbPkKLtPtuK1NMuYoKskef122WKhhhpUFr",
  "key7": "5FDebgN5nKte696mZon9kp5qfNyyS34JrfQersMHHHLVAKX4iux9yrymRFQs5r7xts77RJdbtoR9B6FqcQYDpq1p",
  "key8": "wRzSmT7CKYyU4r451XFTZRVFcC3biDaeWCcszxNxQvN2BAaLJQmxjKtHpsoY85EWow4zNFSXGxHE7sjzeaPTX7B",
  "key9": "4qAQEnkR4iubPZNCPp6bWMj4RmY3JpH358ew22Nn1oHdTe6rAunGfzZ711RnSzGfFMF44oiiNNxhiCBKU8MpxFAx",
  "key10": "4rxQqdN7mcnP6FnKdGpTpHtRVqNtNKpsp3HRW4wsfgLsQFCq1P6426L1BLmeTTpDjmvrHwMh2K31YybsNPYJDUcK",
  "key11": "3Fr1rzAYz6qDedrBgHxZ1MFx5cy3UXE5YDVJcNjQQkjqqhxgd21e24uV7dx9JWYnPzpBtMUrTwrDFYHS721tXTj1",
  "key12": "fNho5CSXfNebzVEPDs1d7qau6F3wVUFfmqt2opF6qrdmwvpVFpBLtWF33X6xCZL1YNumPBsNCLvsS1ueMDRSPMA",
  "key13": "3VQ3WkeTcGh6YJvL8UQADQeHpQRuDN6WPpnfbX5ewND4d6hKKWKKTczsX78uSRFYrmfcjBaPvuFiRBjdNaFuJN5b",
  "key14": "4WSL5C1s7pnWsGSy43DcaJY624CqkMDhyuYTbjYaQXxPAzuuF7qAcu5qCDuuuWiAgLqdnhV9PYdym6sdN2S3aDHw",
  "key15": "4VLgiebM6ZhLSbFQtBrdvpwswsDJSwbfN7pJQziBrqDb4upWzFQpVdSThDauTEGCnnUGJKG2gUCHuCRUuxiTDgvP",
  "key16": "336PXMM8fSW2nft5YkDvZtgBpXMKwexxrvrnmcYg9A8AvaGAfAJs6GCbbHsWwvw4PSSGmyKVCLJj8mR56CyR9C5W",
  "key17": "PTDsJUBCAokoeFr7FXERTxW3Se5xKm4ukesAxWaATsLLU3ejj2PViLo1ju5BhKnUyZj2p32e7dzNAdpfGYwLzpv",
  "key18": "xRMgzNibzwpNhKVB4DfdKi7twJPHB9yFcNxkAs8eP4vFBBQf7x5Uw7vZfKizQcsDnuRLgE6rhW7haAJD8d66T8b",
  "key19": "2aZ2HiuqicjkZJHVcWjFA3JYTwQJepXsKpxkm68Ks6p5D35wbZQ2i9FziPSqjTRvCiFH7pt2wyJ86jQcnxJbAiS2",
  "key20": "2D1CXfrdtzzV8sdayZ56wfr4VrX3QKYF7ESQWQfAbi6Uq2ZBippdoKKPLBhmZ3mS7FSVfCTA5yDJ674qCC59a5ER",
  "key21": "3UmxRGw5NVQbBxWiC8BZcYVtZYcmCiTSbaRpaQnqBXVgeJmCRiqNgw7ZaLFZCWjzUiRzvwfsp5TknZby678p1y71",
  "key22": "2ETLHM7QR4MTZ1saK69GC2a1gDUuxjsZtQ8HdRz4zUR1RKywYBxjimW3qx3whTHdFV2TC5nio5j7i6ghBGXgLSaP",
  "key23": "2zEnSMmKkjfXHkBhVt4YDPnXXQoUogEZQfCf3BVcTHRihjf7g34dVZm4wWcffnAxydAYJu82567AZHbspbs2VyyD",
  "key24": "3MzYGmR9f39YdXx22HJs5WdUYu9GfsonadkpwxHCiRFLBYzuZUkV49ecBCXLZqboR5spFHQZCQsUBNUkDRU6E5Re",
  "key25": "hAHxgeF5jNKa6RN4kefS5PprWu8hDFUc4PbahHxPZ7eCB3EfSv71pedeTcrKn2AG43ZaBqk5iUucXtzPVW1Fbo9",
  "key26": "396CLVy7p57W7unmrgHNCKhRhZAJV9nzPSLgi86p5RXZhkEnhvcspJEy51WMqxbAgxoNmVtfNXawBgDSsoETFBfL",
  "key27": "5mScBbHpSMSyeyPfQLgfZi8uETZU9XDdRGCGT2r64a6bvNyVPtkYs4k8ZoPPRGvsyF1axEowxqqHXbKz3GQrF67Y",
  "key28": "DMYwbEmRmQ27Tm4GpGjfg4rJLPPfMwzN2zFC89mmhHdi2SLaVshbCPkMMneJz2a6pnesR21wxuMBebB5cUB75vW",
  "key29": "5RKpeW7HnDSV5cDK6mEqiVhAfyVjarc5x3DQ3V9DndYJUyjNuXKZ5iH2iXUPZyuQejAsF6sTSByq4fr5DpLckjVs",
  "key30": "dQGgS83tzsa23Xpf8zMNVtrRFeaFi2Jb41BJc2wGy7UoQUfjUqQEZx8P2okzSuTfTfQd9RAFFpharTRFfz6M7NM",
  "key31": "5JQUNVcsHMsX3FVtMQz5yCAnZqfopqEZpJNrwYM2eDXpQVKfFTAuLkx8kZ6gWTFeqcP5uAeMC7TTHchSFchPQxYR",
  "key32": "3koow9jQRifUs1TAJkVoKdCbUQwEbJNtbm4FfLcYQC2Lt2mMFFys2dcLQycCY5RahZ8CyGr7CCRi9kET8sJ9FRAT",
  "key33": "SdQMC5vJ9e3d1LMzjB4bdXrtUxn7E4GUg9JiHBptZjvAkr4m8fGCpJJohiiJgcBz6cSQe2xb5Y5WAx9aL6xifUb",
  "key34": "4iX5hrKjUjz86bj1FzCH1HjMiMHKiNhdkFP6U37PsAxVGRBjzyHp1hGhLRHSSJHwh653d1a2FYJrhjk2CfzHPk59",
  "key35": "5eLWaYapieSy61jRsA6WdtVhJdkYqULDHj7AmrEJaTxH7pAt8LM855F83nYC3d5ikaqJhRx6QUgSNmKmYKNq6qYd",
  "key36": "5kRkRG9EKGrtwQTuz95yTyMdw6ZRsXaze7qfvrtXEnfhpe9T5Kve96CLiFS5VkgUriD4bUT99BXx6WigmxDKQrYW",
  "key37": "uZezXgtyw1n7j8nDAtLgSEouLwNHd7yxxknKVswG8kF7HfN2iF4i4AjYNtpKXJzcXZUREZq794cfpzXwamqquiX",
  "key38": "3e1AucosmnvhLAonXS1nFMuFSahUSk1cQwd8vzCjEJBSrXrxfzZrLn9ymmrkeJNcutpcpokertEbDtYT3YWvDrFD",
  "key39": "txhsV2q9ohZYH13bsx4hVFVQMkmkjRfChBidnARui6RwA4Mpc3eGYzNcGr8BAAX5ooTTqLmdqx2AXUhxzYeixE4",
  "key40": "49MWMjfNTKKuvZTT5mPmEWnA3pJpLMJeWH9WDAXW9RHBVHGb3P6uiekCxWet1uTJrW9KiMWUKdQHJUt4Bttzkbcx",
  "key41": "2YtKmjPMXB2doa5aKpW77MiwKM1x8zrTAXas64xMbMiKtTuZ5ZUj1vPm6vVtKa9vsqHNsYoPcpyatnHchEPog4fv",
  "key42": "4khk4eBap5gJRHEbbnAEevYPX9SZmztDTDiUkhJmoPDAHqo6DNyvQMJDgXa2z8CweZvgM6XYAhxU3FCnScNPjLU9",
  "key43": "5hs5nMkDHUdUW3bPRzxqkXXjQkZGeG7LRyfYmd9LZeSLhEq53LvUMVcku1t5uhc5uH7F3Lr2wdpYkVD1XF53fPNE",
  "key44": "4G4VfG5fkKsRGo7ddDDXXK9hwB4ve9w1bgnDJnSFDC2Kyxp1iaHETuFy3xdR5XUb8z4Upz3FhtYWKKAENoSrahJD",
  "key45": "3F4qtcnVszU2PWEYHQWKCyToLKASsdRtzsb12ZS29t88yQ3tVFMD87GyWAMET9ipTYB1ZSHdqAwpwd9EhMUbptof",
  "key46": "3HALWHLqY2BQ18VDAZbnadG6LKz9ewRhZqW3g2bW9vY66WddwFozbt7utrqrj42GQYF7WNzxCusVJPVazHZj3h7P"
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
