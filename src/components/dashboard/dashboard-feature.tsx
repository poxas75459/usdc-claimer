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
    "3Vj6hmeU6p6qW5ZtNupGv1mUfrzKDnByraw1duVa1EGRquzYGtDrZ7pah9i9aEVyYZkKvHS7uiiPeoWVQSBYqjvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FY9QFeeREHDkjfCC5swumAUajGrLV3DSGkhA2VqWjdCDWxMUsYme3zR7ARZyCBMVpUc9hs72T74bc8YDWHFnr4",
  "key1": "x6Xjn2inpWL2XhhCwnMcntmUpAzva2JbwhBzG9NEAxUjudWt3rm3QzDk1uoTxvNkFtPkL6XGMqo9vMoRYWL3GZH",
  "key2": "3xYf2jEwbPj6CAkpctb47JGUU6aXTUpD3vXAQedSdAC5Bw1SAB6pbxFZ9THFJWod6AzoFi41PWyXgSDA6LQhMk1i",
  "key3": "24ELSjc1kYfU8ZH5YiYw7XR2aFEbafUm5W9VZ7PasLR4w5QUJuEv81xLNEiKFGZb35dfogK2KwWLAP3N6bZjDFMe",
  "key4": "2cajRzUvELpsJ8skSnjGXomsSdd8YoJUjb5PFUMtEUQX7q47d8Uyp31LmxF4pUDRn6Kx6UUJPCn6HsXy7Nxzd5sD",
  "key5": "4d1KLKgGdqSspQ2HiaisbhKCcCbTsuu9beKaFbNhwWxRpYZuzbAktrMEMFkDMdTHCttz5E4iTHGpX3dCgHNu11N6",
  "key6": "5jUXbyADRXUaKi7f27DZ8GzzigQ8WGzQb9nU1weE2ZT98xvBtz6Etd8WhsgTomhw8BKgEawg8GqCyCBkVZEVo8j6",
  "key7": "49oSX35QTFXYBdUYeQ7pScyUZd7Htw8v5iFWry6U8CpPyimUL3t72EQPyVHPkb2c5JZ3Zbq5z6x59SiFpAaSYwB8",
  "key8": "ireByfwQgvqShVA5GLxdijGkSjLiWnL8KNb3H17bHrNnZyUrAi6ns5i28XmX4awQZgEQyne4rVLT4FKaWKLdZP5",
  "key9": "5CCgunhMDcbDCR7njWLq9oT3eKLP88ZgLf33E6SSCCDz8WBuwgeZqnzs5EFphSAnx853J5AC4NfqxKrqL4bRRvt8",
  "key10": "2i9wx69pJdhUdZiwCe1FaJ8QgKDSKZFbCYEWsH1MqJn6SXpXR1buezQknkYUT9Jqy4vob4oNUxRi4Coizz4LX7uT",
  "key11": "269viiTsd4xV8SyqffW8qzaAg29dHw6kR9YELCHtG88WvWAprnyQXGdaSHSyQEQbegtJvbc2S6sBAyvSJaUPRKYC",
  "key12": "2BReo5U28kwYrL4tGkAXSQbUqBzv1nw822xkTWisfYc1A9AWr6jvi5bpA1JoNiQ1mZzjGeqyT3VWsRwQvLBhqZh7",
  "key13": "4vSj2uBq87CX4h6WBiQ7aG5bfCfDTMaDsnvfCTD6nurZ5uUv5JkUQnzumJdxLBHo6o7kYbVfR7oFV31TCy4YzaRN",
  "key14": "2VKUYxoecshqiwZk3iGe6STZG5HSUnwB83HqkuaXccVv1W1jGFVmrZ9riDVvEpXQkoe8cHUNWHpFAxus9c4wWsH3",
  "key15": "4yvxG3rkjDc4yiW2ksAaySXL1snu5tsfDCUjq9hqmEA8J8RjpNVqRD8r91m89zbvcrYfGNRNbfagXWYMHEL4Cyk8",
  "key16": "47hHrrF2hcWt92J63nwyfEX2gS5DsRPSqoL3RhRwqCpRt2khookRpKb1dU813gx18p9CMwuKgaa8PX5TPHPBgLUK",
  "key17": "5yW7EybsTgA7emN3tPCUtw7UvCdpoNffCkHx1BLfszHd4iuHpr12mup3zfLjmxcWHYa8SYwdL4dwCt9u4aj3Tj5B",
  "key18": "5Dzp8kWLQqa9SDUxof5ftr6tdUkNbaLNfjPmTz53gekQCC9k9khRcRzau6QG6AH7zqceo4gDGBGcEyY4jKZB98Fd",
  "key19": "2hQ3BeW1NAgx9CmVMmg58UitcLpk9A4z8wE813up3e4y1ZVootP61Akkrot7zogedB8faw8vKEHjDTJk2xWA2kdz",
  "key20": "5Ww67qJA3SJc2HPRhWBHe4fWMCBsxkDg1hsUAM9J6ZJaZfYbLhdpmVwPyKU3NwsKVkQdDem81o6Gf6HSxhNpHJEa",
  "key21": "3VNrQa9uowLeZfeZqYqVc6QvcN2mocEmLpvh1uT2YdMi45VVU5TgQ48LzjTinXzAVg8AB9uEAGk4AH23WC7D4fMW",
  "key22": "2Ki1JTyA1hWJy9HmsEFp78fzbM5PFbVqjv7wwd6c4axyCK9TsxTa78kK8mMwTqms3XDszSnZPPzPiquiN12aX8VV",
  "key23": "37TyBupzTDD8JDK3putAJxDJgD8nHMRuvZJWdq84nUtYaNA5d7WXazwuu8AyNoW9y3k7Vb6J7xdZnGMDUFCvgDhL",
  "key24": "4Nn13cWXWwMv3HGHQGwQPn8ugzrHQ9pQpHk7za5Chp736HAeLamsMMGwjBt7faQ8F8BJZ3fG69oeyVC1HPQj3Qew",
  "key25": "2RiymBDv8PVZmhXGVGXSc1UBZKtFaQZyRMxKVNjMuNyxuELkreVCPSgiFjTCpCmNMZGRNMfu2JB3E3oZdoK6wXfk",
  "key26": "28Lq3bPHoJyWadiKKQzXGkBGEnSoYKQ2CPZuYzHzPNMFQp5pL8Tz18AM4S1XKq85GvVECJTnxxJcoZJUFiRJBAyX",
  "key27": "5umSiwtTyufuGciMXeDab1yuc9MwN3do3CACSYFRMjFGYkP3vHdk8q2XDwYGyxB2H8RY4DqeEuWhMBsmzpzieNJT",
  "key28": "2tBx9KgGvkh7dQNnZxXRqVDSMHEL8kriX1SoF4R6E3VTWDrSySV7CVdxBr53R59bXWf7wjxcaktzENown3GL4xDq",
  "key29": "2zizND4KZBvSNEiq5ZpBaLdHnoFvkpKxLtmWp5Kv8itRFfgwRX1fAXZARLDsW9MCzG48fXosuezWuWPFL673YWZS",
  "key30": "DtoxFBDtXrAJQtF7kZ4hb3tEEUw7FaMeQneh8bT1swLeKgvzFUudiRrRPXxZCcbxFX7gWQaxeaUpojokthuWXN6",
  "key31": "5Wze422bjVprAf5meUdErKzGiGqBmKz2n99szqPbLWehRutY4qWG4NaE5h1dLGpU5dHKmcKpVyjbL4t2iTe5NSgF",
  "key32": "5DXzyMx43X5gYKDeZbHtpNmyduTXws1dQFbzaEPVvULGnBtdo3v7SKiu5SE1dk5jjEX3NET3kxjk6fsHHSoqmDsw",
  "key33": "3amuX9cMNsE2ppCURhMcW7HgtQZKsYySPws53LSTxcji4TBgGSs9DrRmqMif8riZ8hp2ph1gp3F7J4Q9bcuHuGeA",
  "key34": "2LcGQJpHTfq34ixvh5yRgYXZ5BSP5BG2cpQ6jfP1L4EBfHrFhGTSySsZYAMbp8aoHmFbbGtoLmr41ftisBrq2pXz",
  "key35": "4SaxXGyUuhuCYfvqQGzQgxTv2EGzvBgrMwqk5UiVMznQFnFfivPJCC3pTqUyYa1ALCmdtwzizPkEfeuzBGrkZurs",
  "key36": "3ViBvd151hTwFPkbXEps1jnA1Dn7R2sUFfwAMBgbP8eeBGwpsRs8Nxn8HEU6FMAuM7P9rAXvVdf4sTddk2xwvE6P",
  "key37": "4fjiJnrrLwj1rPDvSchRifqJFrSpw6yUvZpVbnfBSWou7YwFHRDfjxm3bAybBAbmaieW2SdrtzruJtwMt2Ub9Zwr",
  "key38": "2d5gw5Hfwcviuy4ZYW2zMvybWoQ6YBN1An5KFUernKN1BVfprJ84CiPABzatvYu84kXN5yAxuA965XyCzLRdTkm5",
  "key39": "5WyxeCpP5wk127McUSitKuR27J9RHvUMAvDpaajihrv6w3UupCft1sDqi7ZG5gnZczWR16LfLrAfZwqf6bQhbW1G",
  "key40": "4DQ2kUVjQmxEs2KMS3VqfLFfSNRST4Q5ncCTe97EwPsPRKU4oVqBFfiJtfcgKf6vkBcJNMcssiqR2G9YhPEw3Jvd",
  "key41": "45epDSSaCF7uM2ccGdxKscaHb1EwFHpCeK2uVJTDfozMnTVxYm8EixHPzR54bAsEU3uJZFZUnTCQdTLYJCVc17Vj",
  "key42": "KXy8Pu1H4fhcgFZkMfjPZ1mJSqNQpZaLxS8sfw5Dj1YrF8ZMN8X3EaCuyQZqtn56WArWNt1wkzDB7XaLi1d4dFo",
  "key43": "6nhNUNUG3NPS44EH4T2qvtr9diF7u8aLKAQbzu2bdigTUZGSq2Agjn5MVtJ22ADfh85eFEjMNPpWkvnRbHPhjqm",
  "key44": "5SvYx2tr7p7km4cbvaiwbp93L2y9EYcQfgFmomJLSb4kaWExNNKpUHgY5LsCXKuddQHZy773jHKD5j6Vm2CkGYY6",
  "key45": "5MRjCDZEXumDtrxaEuPJ84QCmhwfiYUb24C9LNXrxxZzn5rnWvboiS2BgT2ANGsd9thjEFoMi12gnj4JfAmGtNj4",
  "key46": "66CCyxqetCAvBruTA3C61ywV3KdWSTeBn8rrCpxqhLBGMcqWWwVRv8RbgLTQ6BgJXcGQCxy9aSWVDM4QRFt1YfHQ",
  "key47": "5scwJxDQpvYRRXvHMZeCAHJUsPkea3sMBoDKN4bprzZ72nZm33G2vrtmPVmWkMYwPGnD1oAvCjAsfzfedYfhduVT",
  "key48": "3QNPEZouYeSr6Bdmamjvb6whayej5PAg9FGAgfxC87hBRuhz67iCCVAisq1MaPRKSMUkwwQPg1Qtu4t9dWD3BWeN",
  "key49": "2yU2uS4s6T2XtzTq9s6eNiM6u2KQ66nWvKfc3iEwh9hhHqBaDXB8T7VbBAieNABqKY7yXJKvqzXUgHb9sx76uZYJ"
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
