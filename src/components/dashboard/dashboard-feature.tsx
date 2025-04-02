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
    "35GLRsoDAoipM5L67fQkX1ZksRyk6DRLRtrMYcBhttyEL4sKmS9sib2mjmpXDBxNQ1cERV847xKA8yW54b9RRgUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vJRkS3YUE5Ka8nwkhQSi5GtD3igkq8sUEGNaoLh4za4DeshgRwPUNTb11JhurF3X7WJQyssURzKbeTLP6KytZ5a",
  "key1": "3shrkXcoTE2vqYDetesR3Dk2XKDPkDFTQMGpk6rWK4ZYfmXcw83LDkJL1xH1ABt49xHrFNskpHD1JzEsf1wbPXCi",
  "key2": "5pyKcvkbaDwA2VY9v2d2YjJNDRB4N3KcpqaZ6nW3MTJNd4ehwa87of8VyF5Wu99R7yyndsepFqi1YcHLBabXXivz",
  "key3": "2UujkZecawsfXp2gaCir68cKrikpuAAyho89aSvC2HsgKgnbxoTggNu29QXqHFCk3S8GVaDfyo9cDzcj81JXS5M3",
  "key4": "3JfgYxdjnZ9b5wcvpkThR4ePjZoHAfxwqN5o7vzkJLuPBd6UNmDJnc1JpK7whynUBubV9eTTremPdHigP4JpxqPS",
  "key5": "5vziEQGrHoWoVbmqbuzdH1z3wwHtCHMg6srmpBfPpcySi5sVvFiAYPavpbYSL8mfayL8wA39iUSu9DXDg2yXZ94X",
  "key6": "3nbcpppzaZDd3aaSqhthyqyQMxuwJjnQ5C6MLYUDE92svi33auL3nkkoDKJpDfDnyh7V1w4ugNvM2L8gc9s1f4nf",
  "key7": "oMopCacE22movBaTPbasxGZeMYE2hCNr5v9o22beTpnRVYhXymbd5G1X17sQzWGfAApwUDyoJT6aCjdp4rhn4K7",
  "key8": "ZboAnCwL524MquZgaeTXR1RvqPQKF6TxcNxcHLFHuTVUh1HE9az6978jjmPdauw1CBNvxmds5a86PTGuV6zB3Rw",
  "key9": "dH8FioiEqCM7hHr5p4n722H5587Wfp4o4i2UUhczv7oH2TGRDDfJHN6RwGw49EEEHJ1ncyzB9ihr5Fcy1HDB6h4",
  "key10": "4MeJiQEJKJY2d898fq1X8NeYN46RVbvwcE5UHa7LYsAuSVe77bx7Xhs8BTT7sEjeukYuQJV66L1KjcEv6ihfy2Vt",
  "key11": "UhFMGQ8e6g1Cfo39RqGT2eWnk7Uib5r6JfTKYcRaHC7tw1QDFFuZyT2SogXY1Ywi1NpNEZUVVkhKakJXEVCeKFQ",
  "key12": "4SCsH9KDaEkA5cGLjDm6sTyQdTR1TaUrbcbGCZH6d2vacJeTtDoLxLanxeAULEzpQyGkHUB1Nrx1K6Hy1PerJrRm",
  "key13": "2RJh19qQfzmZBbBipuCo6tP94iYk9Dis4rWv3NuBZ4jbPzA7WH9YjDZCdqtKVfPd98rfXiSE4BFSfkkx6fGLXfNW",
  "key14": "Fsj3PyHmDRBZnNaPgzsQE6kvbhDQA2kbNsFKTJ6mP6aNZXgk7QjrofxHrJazP9rA8qgmUd5rCT85dDc8e2oWEnQ",
  "key15": "YLkp9pHXzFPwT7dPKiQ6kYoGFtgzCGQwoFubpwfHE4s6RwfDUzPDTrZkqrYbHpDYCxq9Va8Vkix1Ve8g5qHAtSD",
  "key16": "357C6cyK4vWBXo5gLv3zTLCJnoeAWXcnbG7LpBbPRXRSwhQDGSjgSZqYpLPCGW8yzfEZzhrqk3L16tehHfKJmryY",
  "key17": "93Xar5scfW93oxSgeNzTMaep6gCNyuGqQtKQQbihZyFXHtAMXVCBLHEqZsjDPAPjY1f3CGk1ZF5TWUyjMvmazdS",
  "key18": "2wfJYGr2B1rCAQnWbxPGSdm5jrAJxVGVTs7C8ceLrWm6XrdTyHpZxvFokkPeidUnforHaBATqDoL8PBHZKQpozjX",
  "key19": "5UafdW7Cxkqs7UoPYBdZ1Gfah2JU4ZpxKqcEWqMfxdGvfiaTnPoEYhrkguc9aVsxALBHwNZQMFQrv35c1w9zQhxb",
  "key20": "4FW4dX3RsGRVAdVTtkEBCnxfT43PC9e5kYRurtBA2FLLCDJrn2y7k4RkLP3EQ3sarafdPxvxkbfFMkyYVu6CReNe",
  "key21": "3DiMHYEFASA51GgoTySJnPnG2f2GGToPyhyaZNPzp7tWuTNUNHrJPHVE8amm58sii5TgCbL7JKD23FJufKRDntFp",
  "key22": "4WLKYogtnW2wrED7YTzbqn4zzj1MCeN7AsNustrEG96Ft9em7vPFosibzeV9odKyZDK68wZDLFi75CkZFJVV95gC",
  "key23": "65GmyQWTxxvQ7MbvPHw3o5ycnHcGjpaYgUoLrHkrdNuUPxkgVZGdkRxRBxfwQC2muPnLDGMRgqtozf6p3djHseTo",
  "key24": "32fGfnbzFCoqhFPnzD4TYut9PwMrE3MMo78KzpHYAqacC27Mv23rKUDrjjLays3jSBNmFya7nattSRRjE51aP8NE",
  "key25": "5jnmczAVc4jwjEG79QiYPJod5vnEPjPwDFXXLBnDKPvDke6AT3JgR6EJWfaU1cS81MMbuzxuj5pgccRjqTm3FEDs",
  "key26": "4ZUpnMDYhApwatJnC8YaFUqrDNts2qNDcLpFExrEfFiZEMLg3iBGGVAM9sBDjHm6KfxKQGY7huhRwipvwLwXrf9F",
  "key27": "4i9yKykqeNpNyNqJtkrXG1hRNPZU9ncdWZX1fMcJewHJ6v3jb8djtpHxKEHcoFgiK7PyJGEEjcgsRhvCfqwVQius",
  "key28": "a4MuajCFmaLTXMZci9PVHXJLdEkR3Jv6sUHfVDyFq8ii2Pno2vGGVKJRpntymSGLYAnWn3msiXVhJVWss8n7xJc",
  "key29": "2y1EY2mBoP9y21BLqtp635hdfH6Bjysd2ojeQKXtiKKdiHm9R2ZFDfN1A66Tfe7jX1PeXdwpNmNJzj1TJfFXA6Wd",
  "key30": "5NhqoZQwxnsmb1ZeymncJ6gTgUK2KbL4fbjzTKGTwvLPrAw7hSb2coE6n1vVBdZpjUZUXP5yePZaLVS9hsajBq8z",
  "key31": "49R7KSgeoXgaLmr7j33XcowtW9RbBFGnGpbBR9E3c7vd5fqRtvMtw9o2FjcG97yMeJwDtatxUB3j1kSixEA12FPe",
  "key32": "2yDeVz9Hm73cnMWZRtVU138UL4zUKfTjUM3bZMWmk1qziZYzg9VbMV6ZZh8hGEzRKfH9uEGwcsbTqv7CqZoKPmwi",
  "key33": "2T1gFna62XLXb3nnK9uXfFrtnFYzG2SPw6ustVBdiin1Tx7d84Rv2xURfY2Se5HTaJwkdrjSnijumES51UW1TAZb",
  "key34": "4NwyMaAZ6ZMvQFQk8u1VcoqMQxgMUUQs9N3p9yWZGYukh29wCKY8zL2LcRxVRmJDgoMMFF7ESsRUgGtK7eJkyDde",
  "key35": "5nvGaKHA8253uA5fmivsreuhhdhLT69k89TiUAUaQ1udwQsTss2vwcRdrxDQRoHXtsMHaki1qkVNCE8So6tCgha9",
  "key36": "3dp79EpN6KdYYEWi1ewANkBN4hEbrowy9AGuXfZbHmvHvukFW1YXMkGjASMga3eCf6EVU8vqFmXXVegFvSHn8uBy",
  "key37": "29iHd1EcpuxWstpzB8DPXSD6tv2xBvaCBvuoc3YR15T4Ki212KminiYfpZwF12NfFQ7V8mfk9YMqXXYGctknH5Qu",
  "key38": "2RSPBeT2p1xkZh8Uoz2CdZW7UXvmqWwt8zBVHevZkM8KLcD5wK4Ysc85J4eVaBUvxqH8aYFhnFbW6WCzKvRez3Lz",
  "key39": "4SuiqEWzt4dN8h1Uf8vXFQX9DSuWvzZuQLw75YAsAZYSp4A19AernyytrkenZ92acWp7WHbQP5BdYTbayoy916bN",
  "key40": "3FnVzpyUM7gSwD3Dpoq6GUeJKctXs2tDEhiT64f6ii4xSyeWfzpDVAsJQY5MeSd3kts9haFrGEquf8evLoKtoZdg",
  "key41": "gAkHre6FTCarPfgsqbmyrMshrNRc2AKc4DArJnoNHh8jC57KRPges28z6QeHGv8pRvAqBKubrKC5jkJdHxzuMWn",
  "key42": "4bEyoTJiBReTthGnDdMY6fzvJr4hZ2ciUkvcq4MBs4ViiYbwLZMY5BXg9Ee4C1jqdSegXGuJ9n3JVrLFpde1dfG1",
  "key43": "3TpRns5HVVAUrKivuSyU776nBj6P1ByHEnUpFKWhr5zXp691biVhZRVJstteSVcJDSC8CxT2dPkajPaxg6HRxTx4",
  "key44": "5iScS6MqCxnX3vJXjs94A4Dx9HcBkoumQAN3n2kyciNd59WnuNqKrw4k4irEWba45nfy4EeR1yETA8UVtiP6cLpj",
  "key45": "5TnYVpqV3ebQCZ37URNtbfh2CUPAPKoUBcwytbmomx6fGy2cL4Zr4yaQSfthfu2Kjw7VrPYJAGqptHbeTpRgiDFj",
  "key46": "f7rFFNzsKHcYxqHAASuH4rrfiAarDYrjK3eaWj4SFB86jkFEyzWapiGfU3v6kzDXkPvxpTzD6zjfKwqpUXWkMGd",
  "key47": "4kBpZA8V6b4tay6hEPU2xRVdAjhBuMVSF1TM6wHkJYj4TTBbL2t4hU6XFnhxPN7d6Kj867Uy5VyPvQhcVJaJai9r",
  "key48": "5YJKJxjKcVv3ifN9vLTppEJ1XQpB5n2Dao5KiHVFQKW8LxhXVV2u3thJQid1uAy5AZAPB9Cf36L4kMoNpq178DpV",
  "key49": "3yxHfNUMRYoCXdNb4gANewJFfviu3Eax6meTyewjsuVGscvpExSmbMXqFwi7C9SnoS71rjak2SchfdPyow1HfChc"
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
