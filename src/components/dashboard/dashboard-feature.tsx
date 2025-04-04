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
    "4pn6AgnyhAvsTA57xm8iExHxb3j1E1zvd5u8JpsQw31Hs4JxhRgCjEPWkQWEAchWbgcSoS3XZHujjG3gVD7mQkpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuWtVGFpTdJgPTciePBZX2f5RdYWZLyr9fuJ3KcNh6CLzHHnrkcJssmkq58aNaXDd6RUbSwLpP7FbyARW9r9juK",
  "key1": "44oAWZ7i2AcU2sFxYEt4hvDDKENwTXKpXsFWu9g8g1hsY6TnNyPoGwu4Vb2hgs1Ee9xGNbdyufx5SiYsHaxpaN7n",
  "key2": "PzQAxEJunuLyoZqCqkNNcequwpF8VV6u34fxBggLA9L7MxbYdT2CDQYyyPKR7nYNDzxX6GbBv69aeeVHG3Kx9n5",
  "key3": "BWKL7qhScMh4Qn1xA3T64Lzzi2TG9StzcrcpcCJfai8u4Nb9ii2ojPaExTMSPENoZpEk552KEJeHDTu6pS74Rbi",
  "key4": "3Y1seXMoQu1duwJJRB3CD4WNeMF5Yrj9gXmzBo2BGH349ueQeDsDcjox29u8wFPRqP5Hdh5HPF3hMywbmp7QuSn",
  "key5": "44MACkofj71aDpeBugpdZwDLiZkqZcK4Ac469FF4qA8319xtNhBmGBPjhF8EDPwCcFSyfJWfaupjv2nwVJ4B5HvZ",
  "key6": "5z9y841z9xbNgS3AsJunfen4n4xtPQ9Nem81mHmnzJdrcSettXbur4GhjPL1npDSD44TYn9tptr6hdrHWw2XeAto",
  "key7": "Rt7gq4LFVsD9oViMBMmjiJq9KU4P7aXpVkHQnTuxZTsHLKHwHQCW9yqfNDXeLKoLX8C77rnJRNbLcx1kiXEWydV",
  "key8": "4cST1gUgiuL2KwAuM6JqfksZNwnKyeZPuHTDkFwGsMfZnbLZqqrp1RNsGJ76XatF6qPCpkyr49L8Tcps8VAtcgZU",
  "key9": "3j46P9DHAjEsmVLYkhQHFjCa1Zykh5Q5Miu6SGLe6yZuud1JPYWnqc34neCSbSzcGYoFKvansYZiRtvgA1TxPo3d",
  "key10": "4eUqJeo4LMrm63zhkL8LWKVNnoPC9BYxEfQrJFaUFNgd5gwxkWzjoGKUd6GkUcW5ZYzfZm393PHrYeXLqM6bap7s",
  "key11": "DDw4PgAJiKq5ivUxtCtdhLAA5PsZRmsRgVUnayqeG18CGuiNhGED1XC4UaNNZ4NbjmD3pc5pv4zYieeRwZqx4DC",
  "key12": "4gB4iH88Z6qyWtWLoo5dHuaXEDdrTcQbUSBHHzjDiwBNwcMvrYNxy7MpkrhnLFkmAn34raNpBqNWAdVXiYGddNBK",
  "key13": "4H35rZSbkEThBFT7h9BbrK62nqbFwWTtDBZArHk3GqnCAzt3DA2TRNWBPEs9RQqPbdDGZUec5GyPq1oNRQLrRcmE",
  "key14": "45rH7DoBd9pdYZ8qzZUjoHczHaRraXEmoNCt3hJyzzEy4GRwJRK9ihfspqSNqfQbFzBW3ngafF84pSTZedydPX7W",
  "key15": "46XDH7pZTSfGye3f9kGzQxJ4LZ8XFb7AWDcsC2UArohtB7AfgA97u4piS9nEmD5mfqwTLVkAcg4yeaTHsWwtvRog",
  "key16": "4GYNmtyo2c5jXsTZn8RFusjeKojA9YGmvytRpDfcdHWeQegY7RUtL6eaS6tWZ5YEjm1ox1TXVt6t5tck7m89KyTW",
  "key17": "5qUMkjFGJxuZP9ApAJjTq33weGx466QxDdbmPFEGpTi9xRthsipfTNHgXG2byEHH1JFwP6o9dBJei8aEgbENGSrE",
  "key18": "fABJ69B6T8ycjMnVCTqrTuVovsTKLdX6L4X7HdvNYbdrmtWEosFEhQ1rEC2WdcE2xx4urU8tR69fucS1q3UjLu3",
  "key19": "4X5VyiWSfLBjmnnMJCgJN9iVfjT4Wi17jYNn79YyQXiatSqYM5s9aHmEufLNoxehanQkUv3W4YaebXoqLsMh5YJg",
  "key20": "FxPWV15LX1uieA5DQxyFDyoeVKAPTiZ8VKQydvSdhpZA4i2jAqCGGuaUp8BWjRCRRQPk9Fo475vtmmxqmsFHDNZ",
  "key21": "4rYMV6nvCj73YNEYuSibiiNQvaZdjenaT5gReJvsr2pfuKF6653faNLiD8PH1YZgaQRMnVxbEMFT5hT5wUFEd3gZ",
  "key22": "3vYfVkq8Lc8omCmgc1ZcrU6R2Q8mFSD4yCQzJa56J5p5EAUafUL5aWyo62uos33iQ7MUcDJVZ5qXgKPCH8usCnRG",
  "key23": "XuPKjWAggZLYxMBAN9G4KShjQDNadMbmf8hJDHVrF8XfvsRXbmVFV6jrLapTzUNE8o9UnHiFNScP8qnwyYyYHKq",
  "key24": "BTfnGZj8ckkBFRGhP6arBREUSM2DhZojyqQt6boChB9DHJZ5LxR1BdvPMufE2m3udhzB2hWxrHgJUg2PykDFf7m",
  "key25": "dTNLDYvaZAZLvbhXXfxRFf7jLPnF1WZwSTjMt4G1b2y2W3ftPYeGw2U8uXTBhRp6pqz6F9WijBcrMdwvrpZoUUw",
  "key26": "g9oUjEwdbHAxdnVzGzKwA8YyJrLdzdd7NuQXnGpNQ44zXenBHPaoVqnnVEUPEZV6v26f9pzTFf5g4vLaKXpbuHL",
  "key27": "2S1LGQKHWU7z4fQ8QmRFQTpspZJdwjbxraei3UzYYt1wcugCkRM4hRSpsAfnvURu3u1uhngPa3Fyt7yqZgRKE32d",
  "key28": "4ruCd2fMeY7kfcVeQbLigZtqoNTRZWAsE2DYeyF9Shzpqozo1zcjxDNJhRZTNYzAqFUMgnjwzs2u27hnqR4dyvXY",
  "key29": "5qdjCAyQNhnsLFvZyBsVH4KTHnf7b5PuYPsSTAivaPx3qTph2WBjZ4t1bHwagUtByYKRcp6Jm7NTduqSHAdT6VaQ",
  "key30": "dBbtNzzB1Xh285Mw8V5yXX45YJADCLSL5nwvn1dwDieom5EmMirsbzctsmUon9oEgpjGGAnDBB3RcKRVbVaFLsx",
  "key31": "2WUYhhxfUWBNVbhZDX38HZJJi6HkyarHgfEcfLkxNjb76CdefG7kdkuUD2HwLsdVoVgP6SH7hPkF6zmhXq8rPmWK",
  "key32": "4fbpp6u1fbNKvrauhFpYfgq1kaf9tzofX8DkhQZY6tVNgkqTtAKsrqoDtVxFmyp2KxJsg1YA2bCKXAqcxffiSL5V",
  "key33": "5oUnGvEdpNZYgiTwvzM86xqaamwjUTjkoWHAaoTHscXwjGoVR845XciSqHA2rjmu288QnAnxQFEPHKqQbKajgwzB"
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
