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
    "5k3woKmsrjx7baqGfBpfPSEmsvCo9PJ4q4pgw1hBARopNbuG6TAGyijefrFps9zi52rYaRnsafZtNmT5EEKUv4PK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64RQK1iuK48HZNiHEjfVJoPxcRauqDvTdSxB4JCjCocfvdBqQkzrXtjRNLDS6UnQdhuxwgnvNX67aYus8HEoetX4",
  "key1": "hcu6Yi1aEcKZrSFjoDcu1VaixTAbzeqyK8W9G6xqznpZD3RK9a3bL9n5YrrVpfrUnPhNVt76Z4CjTV9PhzuhdVH",
  "key2": "5yzyU2kBHc5oHD43XpTrp91HgvENLYs7EiAFWQtNZRD2eAfodnb5xMrY1ePkcVyhmm8hxe8nC3Q7SPNNpZUdHFS5",
  "key3": "8Aw6UwSCNT9Yjn5gkZvUcbuYn19X291kCS5DpsZnz2vf3JRpHr3SaAZBx8zVPerEjgCUD17r3pe1qDaQqR9xXKz",
  "key4": "3FfmiN7zGQNeN5jwt8Eu22A8kdety5NonSpw5nDJyvn2qY7xCtFQ4MXxT3HkhqyKYk49rFe9TKD4SDWWk9hxsvZN",
  "key5": "bKztVpiMfP4dkc7YP5Pd8FTBkiqLLY2LzccXuzQyAyVRzkx8uQu97rkotuz8jpRJSt6zFcKwvzNHCrUj1hwUeU1",
  "key6": "5Vr4G2im4U4ejGhiPaVzWdMB72DWwxvgM24yFADHJ7uMksmExoNsR4hGsdRmCj1PX5RCfzCpKXLSHqXDuW3rqCUi",
  "key7": "3WBGJBLM4b4MVwjjWnd4iofpWAfpcpNwgrxfaoQfd3dG1iJ9QyiVUY5Nm4FawqmVukB5E4CQiFX5DMorLxo5NUjr",
  "key8": "MfXKbqeBvYHU5b5WkTWfSUdE9B892NoUx8UFUh8t8DvxXXTMZQ1H5fs87wSvrYD46EFhioXsLYcCGuDy1UbeWNK",
  "key9": "3GERrrekZhp3c9y5x22xdGr4CRo4UVK4ZEMJYLDigFKec8hACz4ub5DSL5zcHditAK3V3bXRL99obWC16CFAEdcs",
  "key10": "3rb8erae8gXMXoqQytj3Emd11yTz3pD6oTYv43aY4eBShGi3kgQRyCawuL474Am2urktWKLjtofDrmAdF7J2KeKZ",
  "key11": "gUqD9mofrDkvazznsaTSTfjGWrBWnk7P3LYA3ebGo29YvjyTgY3WdcBDTVejL7J6NdppGBQVHideoMF2v3zyyM7",
  "key12": "23Uhe2kKZbpdHT1AXuGVvScgAiT7mM1MeQKV7KLvFTyfdwLsMVheKhRgcXcCSWv5Ro2CXMtdVtXWK1Ewy2YmcR29",
  "key13": "5B65TXaTieon9FX7PwzBNHb4DE6r96eTWAzLS5Dg164ywgMsvvWEBPSaQZS9HZ7QXWovPH8ZA5MTYdU5S6AkAa1K",
  "key14": "2Kt2Vwbw97KoacXbpcoXiB6RmDNPKus5g9zWUHdJut8xEvyYxMj9qWxfSGV3PLSMySTUNg6hWBgTXNLGzZHBxB4Z",
  "key15": "4W7f9ikFD784m7kUd5skP97kcw6CKuVTPAN6tBkMFnDfh5YKhUTSFiV9hSW3VBXibKf1LSzLxh2iD3dJNgPhUyr3",
  "key16": "4UAbprKAMBvB3i1erMAbbqqaHpNU17un64XsQiQLWaxr8khTWR6B2i1S1QUGVJYRRMurud5KgTZTKytLUiUBg98R",
  "key17": "5FuJXVPK3Gh3LPANo9QkSsY5NYJsdZQD3GPPBvsmWQNeYmyJMurdqo3vRW72HkNRTYn6668tySa4LZ3Cr7fKNonQ",
  "key18": "MCMkH6JoNZux2q8anCMuRHZD5eAEATnkyzxft5hCZTt15sit18gB8AzL9Dqa5ix3StBbFYaAdHjmYFwHXHsjSeR",
  "key19": "37yVtbHArbQhdX6ETxrqE6CkJyBMR8Dar7WgXtqVRcWUbB5RUZPFQui8Gb7rBL6L3eER5x76kCTU3578NEXAbhvy",
  "key20": "EFcTamRbemBUL7wW7fRnGX86pE8BNmAAwgdS1qCJMuPZby8b4t4kam2y4HU9HyvNt1M12PnZdWGy8nLa9ZQnCwa",
  "key21": "2nzmzz5Sv86Smj5zWC7Uq9PQie74nu74xoaefPswLp2vrm14cALwqMEBArQMuQPXDjRiCdukXuYve4gMMBGyd7Kr",
  "key22": "4JXvWcJCLPdfSJ5TLWNaGKP44eiSLK3Cvb8Lud5u9jm1NcAgYQKxzehpFogffcXGkWPTTnNhRZLegVTwDTAFrUXM",
  "key23": "FaE7tbGAhD3SCyeXfU4yRdxicsV5WkDUAkFGzQ5gJPi76g2r4ZABkYCdGNZkkEU9fCkREzhrw4xkocgzf84mRCn",
  "key24": "R6wwegvcwYANrefF9gByzYtbRHRufdToMkaBTbmguERe8sANs1nzXnhH4nooGqJxGMB2kzZPivAEzr3NKqXWNXK",
  "key25": "2AQzsdhU4iBiL8rS3Ek1CVJpmU6uXDKacLwykA6KMxDFU3SDAFo4zT6wC4XUxGpYxKyh8MCAEgEgUtP6YGfLkGYu",
  "key26": "4fpiVyTth3Co3rUYGDMschWat1S1uUgtxKEPWSaobsdcXLh9gufhA4E4psPKKKRGezYie8ghXkDtgKmZnEe2XPsi",
  "key27": "5eyhkQjXMPEtfZsD6YoL9aRhAvUynkBGpgb4jT2FoX4PnLk1FSxztS9QbZWXryVDpdafnq2pARw7U9eMMHLUXhpT",
  "key28": "DSU8MGmSYjeJrvCJcqqAxYWq57s7yNpftKzNWRZsbdyKXsK5kmKygM5w4XAFVyhdJ3n6dajfhLohuofgPvMZyvp",
  "key29": "Vdm9PLpnXKyeq7nuygJQp6EuqvWsvxnSTkjPTgHNfA7vS5WvWG9ZFWoCYbFym98b1NSwPEfXDmksHUu2jzm5LVF",
  "key30": "3Bgem1Rzm33CysEGwUubEeFs9aqX2ERS4tQYQU55NCAGUMfoQ3SrUg4E9dGqHeLSoNjmL77NR6yuPNmaNnNEndPU",
  "key31": "3KJVA2KUne55f7VcRfQbd1UZDJjeGBSLRGmkencsgGpqWXnVzre74P7MBUZ1fzKgNtFxXBTszU9bSC56WrUwymiE",
  "key32": "rEoabWLCSSHTNLtnkCwJUsk9VnmbKkKhaatdKHUhbaHZ2tpc98tAUDuxEB8TY2FrQycPEXryhVEDxuz6CyefFco",
  "key33": "3b6vZdfp1bbanmi2rAfw9izVH1KpbdM3Nx942VuHATf18hDh7h3DeXfB1Ce77c5fcfGskuiQ4SYpL8r3sj6PRSgi",
  "key34": "8ma8suQyfLox6SyBYjbXXw1wSEfVu9Xy6L1tteaAHDSELeeRVGGuoYXPSi2gmzumEv7S2L9Tn6b9N3KYQvWY4sj",
  "key35": "21CgdqY1xCkn1m6x1vNYK3sh67GyEZ7tTriH6PQqjups2s4VkqE7z8AnzjwqXB2Jc7Nz3ABN8KPCuX7jALX7GqLh",
  "key36": "4px2PqoYF3ns487DdoLraiqV1goSmw2ZQtkY6H1eemjiZShHGGj7U7qphtqYpjhd6xUaJAR5YRPnx9VVVgC3h5Ck",
  "key37": "4C9M6VGCnCFBmZtvpkUs5h8tqe6FMUU95agCiJqruAJZtTBpUpLBTcxkfJEqErp7AY5Xea21pm2d7y5MySRfj934",
  "key38": "58JdnXLdifiPqUPbyUiR4nvg3XNJHhnvmkSw5BCLjeksQ5BFfanVG6YjXu9wV1kH75wyonRuXZf9ezgGoybdvn6h",
  "key39": "5yRD6hjJczegYxfVdqjMLKn3veQykvKHf2btn7syvfCZMmqC9Y5t4RQtswdyKttDTiaJXfeEBj9yua4LGxZXJZK7",
  "key40": "5QS4EsiDviip8EozQ6eZh7FRE9gDdiehNexwFHvmNjySVLW5F4j6dyfyvwZYii1BNERtf3YftQBaZn1KFkFAN17n",
  "key41": "52AVsy89JE7HbatsxbK54XWu3vsmnovktHRdd56GzQ2of6sWipBu8EBZHz3jhuxWBiBn9DJCDcft6K6Bhtyw3hgH",
  "key42": "56UdYsosVu6UvYek6uFs392NvJeC2weXVse2QZp4X6DDvvD5df7gFT3DEf6ecHBf2KZhUYFbxQhuu2efGBka4AhA"
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
