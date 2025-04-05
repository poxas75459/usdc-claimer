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
    "2iqAVr2UtDjEGQK2LmqpzQa23WQ9Tjf8qRrkqctQHqbUFLpubooJ3k9jcWu13ePkG6uzLhuNzPonNbcjGWjfwenn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSvBe9apAjYMKEqZBta6Q7sWcDW3nJisB2yfKkoq3U2dvZ3GTZJDMQVT2AGsRebH6jm873JbiADY5chW8eMz6zJ",
  "key1": "2uFqAhpihKs1s1yn6gavgTXRJugKZcNWiy3U21sgLbBXBf45wNCRgiLCh8j69pVbszLVrkzHaXNnZXwnCAuHdPbX",
  "key2": "2At4GKW6HN9W9Sx9iLshvhETx8k6zSeoDRSdCFPFGJHxfVzZ7HTfSrMFXNEPToZ6jsADtAUbcEhE7bQfcQcdKApq",
  "key3": "3GnTBksTiYZUbkrnJHoPXnicnaVFNQevgtfMKumBhqKPAwsoDkhrVBEN1YPUu1VaxJNEmCfpYWknnoaxDrRotw6U",
  "key4": "BqN1J8PvYk2f2ghxidTdTRKYBfKtNyevUpoYqbSNo3azux9sr5sD6QgduNNLz6uXGHobkEUtC4vNdJLK4g99fMV",
  "key5": "5Uz2JVahxHrHzAMnvy9r8uTExKBka84EV7yn6oQ2SHY78tukK7Eh3RR3EUJRD3USWhd5mXo42716W91Wve1KrMeE",
  "key6": "2PrazKyySpas5y7LVmmDTBbWgJ5irmAA218ZMyFSFUd1TfnfCBcpNApokCSQ84JLdX2EBXPWTa3KFge8zLj1ZZNZ",
  "key7": "49s3NGuvSUjC8Cagpdoa9FZMAXTqK49LKiYBEFtndL1PbUJ3UtiadxYRLmKK3GYgETsb7yZmbnJxG1Vhj6xpgq5",
  "key8": "3niwYBeZDMfAuntMYWsjrecKDHTSdBVfvHQjW8oyiBL9o4PQfPZ5RreMjRUBXMCQb3TB3yu1YiEPrydSuoTEoQLs",
  "key9": "2ATkNjnPpHB63cTQGWhwrPhuNiXomEVT2GEuHqPpimrY51UCu2DMQjrTKumcxeXLGhxQgYGB6CVm1cRJ4V9K8yxv",
  "key10": "4seUXfqKG8H7sf7QgUfiRoJYUHE38Lef1KPWbBZVLgrRwu81XvAfkn7AYjPRSS2vyVYsHeuvghYhcJmmcX9RjfHT",
  "key11": "5xZGYKYQ6mpQziLJfb9UHxoKBVGyFCtveoAWGMwVuFaNiictkC6PPxPrACtMkHaeBMExjzgzJRFxRAJ3qLXryTg6",
  "key12": "hZTsJzUAFZHnqkxt7eAkG5KZRyQtPz9HFTsX4XMc71Xc489DzU3cSGEw65JCB4r69MK1JpAuwdTaD3o2h2PYXrj",
  "key13": "3isyiPveUQNiXFFfCPMQNjcJcEkStk1r1W5P17taEzaH9dVCRRYwMY9ToupHyGbXP6h9PnbapUSkjY9Z6CAW3rtW",
  "key14": "5HW3UzDzNVpArqRYCtzRkjZZrvG38hGyLSemXSxDFfxjdAyJazsXmwobVhvq2w4CCsJLzg2xWrPoquJbGAHSBwqR",
  "key15": "WmT9yFkFu4ZWb5NCqvRoHggLM5hBJp22kLD9J9XACbCbMWQqKM1MgQzNSXmmJQYHqrXshkceLqcvx64Hw1SvSsk",
  "key16": "dwgYHrL9sdcJWoeSJPM2SSde2EQGaN1mmeui59tiKpn2LzaDiTPFcyvdqNgvCLc3WwpKHSrT1KSv2aw5efV9fGi",
  "key17": "2fMDRsXEbGvM41tarewbi12g5UJNHjm7rCnWphwCXGVyvJyXQuJFXSLWTdwBTmD5HFJpJpcLvQRkKaoC78MJiKLf",
  "key18": "LFfHdxUatjhswquZ9kXAZBvbQYvnH2ScwoNWwE4BtvLFmbRjfB7zqpW9kRMeGVqwi1uuFxARAJkadCLuzLNVmVm",
  "key19": "226mfrogX7YtCmwCPNTUm77p5EfS4E7XZWKaqHoAsoLUW9q5pos5co3XxPtZey2iGRd4s7WS7JB9FK2FzKMYAHmg",
  "key20": "4jrYPL17aHY8NK6Zs5hzPkTGLvZxrQY1yhyq4bzCzCyB3ndCNtTv3AfzuuUyo6La1hhSkhfNLFrRZarfFMhFnAYY",
  "key21": "9Lrm5BxBvTSkWuWtYdTNywRFpkrrByREoWRfUjyifPQa4hkQJSVSnPxjNLn2H9LzrSXhXYBQQeDzuCiXwW99Crq",
  "key22": "52kdHhTV5gqnuw8ybivEEgRoYbsdaLVKCfyozgz6TcAKMND46hgqCyx4TPPhDpqZ4hQUH4DViaE4Qva5gGiP9u1X",
  "key23": "T8rtAxYyTAU2aoQkCh7adTsukmCSf7iniCRDLmPoUhA6PHaE8eVs1QNnrWUypr2h3S7mXVtUvKByq8sR2aAXQh5",
  "key24": "2vyq5gBVcXwpPLjkBzgnzpUPG9yPMdWNqqCTY3NGKRmttTRiLhmgTVxwxeJj29dWdCfVZrBNLfnPNd6D7FedgfRv",
  "key25": "5DGLoTDrYp3zpNbhPaY9wEPLLp5H6Y8tm4sfFEdxZcq3HTtdBBsSV5p1BrycK4VBRg5R4wUZsRYyrcYPvAUpzqS1",
  "key26": "5sEyJqydQc7U2uveKCz78C7WLXZrdPkfnZeXspp3bHEBFG6CWVwPa6rND3GkgmjbmyAwKATWXQebeNTbLjQ7mpdJ",
  "key27": "2YHwX7ChLvvCqkS1rn4dixwCBQg3Cf3STvAoGYEFSoL3LfzdjWJ7Qo2TrRCHpuBxLSPoaabKrpLTn6LkzTRNpKxK",
  "key28": "3c3G33UCuxySEwNCthiXgLfArCFDa2hGDWikkWmZN6KeeAs6fZ5VBCodWYiMJcN8KnHK1mERbhq5a9b2w9B3Wf9Z",
  "key29": "4ZiGWBoj5so67VgLiFhrbeKeAGTgQv7rvpHyp4iGZxytXrmj2ydy6TvksfjhqejiuaS24Yy16aqM1ifE6wdH86uJ",
  "key30": "2wKvpwe337HX27T8HniPc9nCBtpDJTVWSYB4rEXjxpYZn7GCvxvKATBdS2fNrBG9iXCq8LBj6WWH68JMh2zb9DgH",
  "key31": "5UTZBTdSPrN9TUzU1vg6v2KRZVVE45UEhPVbwWwy6BcorHj3dj3AVTNB1vVqnYpr2eCNAF2nMZ4vL5BDZXC4yqSM",
  "key32": "2CeyaeyMEEMLuCPPfv2zNKXwijMHCBmdh89JcJKghbRwQNedW4QvtapYDxpqtUMLBXkd7pxK1PcB1ENMk6AFctUX",
  "key33": "zBmLRWECGMw2quocWq7GkSFgi14M7uydXV7cfToZTi4SqcS5yBm4Tu3xF1rf1bLi5vZbTG1VsYez1qDEZXm7QyS",
  "key34": "2TNAr4rxdJer3ye8ByUHz55FcChixu4woCwZRy8huTybSZFbDNed1ib2cLFhwx7aE7VGe5AddB6ECckCwpMWRDzE",
  "key35": "brF1Rud5xnjEjePPTdR3UdS8HUAAxqMBa96zuL4asvDuqJFQXh3i74TjqrEohGigZto3Y89Sowfy7Fi3PqLf7b2",
  "key36": "wVVqxZA1k1PceevvgbUXvL6RTHHV7NqdA8akpBA49NYMMQgC5CfezENTH1icvA163wZxo4rbt2PpBn4pBGQAKUe",
  "key37": "4h5aAkdxWMVLsWKafMNx5a5WyaFkzidxFk6N9gAa12REghyvCorJGFXdik4yGTPpbNqjG8NMqZPsYrFuQ1jTnDgb",
  "key38": "zskkjYaTuzW98qYsYfMauEcpi9Lm2UgoTVo8v2raX5z2xLeFDDa3n8R6mCuKbde5twb8Tmot8o7VWTATw3S8q48",
  "key39": "4RdoQaTWxizm3N1P4QCLuvb4xLDTx2iYkMrRzSzKqfodwxf4G2S3CUD4aqscJkWATjbusT5PkKQaCbk5bNGNaGC",
  "key40": "4cTnjXrS2RgBBgUtnkGQUFYob2PfjGBGTGmJfRuPGnfYpK5ki3oeLVA1GoTGSAQwa6qZEJYr1EN778YBNdiB19Jn",
  "key41": "Bs5SvXmirEC6rssM4tz5fzpe6fo8R1s3CquMikFyu3v9Mc8Nkjxe9usTrpywHAjGNQ8weY2yJzDRbmagHATxaNs",
  "key42": "2DxoXgxwc1Uh5YbAK1CfduoWwuN4GKpatFNa1fMApqNkMqEpRrYjwhKo5dRX7EYA1yQHAN7ExEcmiTxptSH9vPwJ",
  "key43": "3RmAQDa8pt6XFsSk1vkfZQ9hnA5tB1QT4MAtS3Z6A5SdxRr3hgxwHPsWFydLvD3TfTiX1XGFCTpuBLHsizGLmawd",
  "key44": "4aYkdohDECB9S2bBxUZAUCQr9rPK19bZTv5d6nSK8kayit516tDkKWCKN6YbcNhZfyKg46nwDUFiPDFu3fLJ7aAr",
  "key45": "398dLsg3QX3iqp8tLakbkgSwG1oc5nKcyvh1B5Sqymd8uM6Wk9keu73pTs8NCLQ639eevN78hB2QbEq4BaPgU5tC",
  "key46": "DC5sSsb4sb6m6pSCGCNtyHQ6k541Ave1FKMpu9Ux1eaJNrnb4YKL9ebu3DvTZd2MApcHg4avQf8dA2kLjpw5F6T",
  "key47": "44rRE4L7AHpfh6aLzyubdkP5t8ZXRZGTxUr7KNMqiVzWHrME7otQ2vbHvqY8zz6QPVssEiccnQeM1Lnvr7eX849R",
  "key48": "66Y7gbXdKxeBSP7GaW7uHxsxVMEzTL6Chg9rhYN2AYppiH4WjC5T9b9L368LbtiPbGAoZCMYtjVmNLPk1MqvscPc",
  "key49": "5tsoGJFj8o3NrY3nnrR8KDjdmTEgVBcrF2hPF1dvPg917U5gi6DE5N5ox843czAoCJ7od4oNqdp5aUX5xb98zp4U"
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
