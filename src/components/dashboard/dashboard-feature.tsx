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
    "5j9JkiXVrMQ1xRjq97cy2xLuLhMK1QHG6Ldq63LoLUmJsRyK4YUiA7W1s2NyQML2TLW3cRt96Z3iP8CXdejYyYAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJoMJASfEqyBDPd2nwgCrjJSoeY5CcpxiEASNyhj5EiPEVucszZtY6o6nVketCXLuNQJY9FANPNb8vq1v2FneNp",
  "key1": "3T2V2wWBiEr1xydXsZHZYmnL1sfpKyT3DczbZYJBEB91FThQAcYE8zsEoFp6aAK9qYcdM1qvNm3xArooCVK2XXc2",
  "key2": "55ZLMbbWsxvEm558ecNM9CFDBfnT7AP3LLXxYo2TEQfEDZUy5jZcdFXRgYNbJpoppux8on6gHmGfZbQfsNGKhg2M",
  "key3": "3omR76uePjgTRNhzAhStR6eW5p2NyfCSN8opjqk1UgZzv7Q8KCwHqKEsWaJLMj6wLX2rxh6omHR3Nuf5E8MrXACx",
  "key4": "2CdBMcMf8uodUjTw8aringBdzJt7Q9stTcJTpEjCmTG9TzGDjbLoMkqzNuEta3hw1SP8LYQ5vTnSrojyVMqQKnex",
  "key5": "3fMQTjc3YRUoW5YMCe1K9jtLHcCJjQh4z6zwBRCrZaUEQ5kGsPdA45dW4M6BH54FZnpajdGE2RdQJ1iZcQYpBYf2",
  "key6": "3wTNMxL5XLpLp6Qr3G1bAQsVgeq7zD6CdoVT4WTP2KuPA8dZEr6XcL7XfYpsUrtiFia3rxZANDKUoejQ8mPitr5Q",
  "key7": "5SfLB6xNibNTPpcAigbsEJEKnAi9mgZ4sT94L82upreHZsNaA2LEFXVWdvXgxaeJuLjRoj7786o5Zr3922CyjzbR",
  "key8": "2JuVQz8aE2CwVZMSs5kwvAvTxJVKdnnCwv8aCTfQv43RzzjydPPYf7hAyUmzdg1a4dQmuQdgdZ6TQKd4hvWpNXRW",
  "key9": "3asj2HixYEaEumfsReW13jcf1xvQLRgQx23iTMn71taScxnWvwwwP2LABookCChX8zQfiCdWFAycoemk8NzrChei",
  "key10": "2ZWLfAQSpJGU7og6WzmwbSWeczTPXFtLdGoEFqjgRZGfNYusec76Bo4iykbi2ehmqv5iDESXjPf4cUf9gkSnx41a",
  "key11": "fEsjoXFeKdQCnYy27jYnP4sakvcCkajkGJz5ZdCKakQrnQxPBQry4QtA2x3gqhmLDHzMMP2wAvSzNwdTJRbDZde",
  "key12": "3AMeA47ZPrBAqkL5o9mPmkdqDh1Z5c9MsvGzoYDVzY2qykCqBiTwgh65o19PwMaJ7MmN3GxKdLy4Ji1BKrP6Xpwa",
  "key13": "4GJq3gx29UUziaDnwcwPvxW5CLb4aSqVDVyt5QJ3Eoxz7vgFpLXBjkeNzgQVcnxiS9LgH8znGz5yZq7vtJgBBXPN",
  "key14": "2yHc1QYhARp9WD5154dnvEy1n15DJ5oWzfWouzfnESFMekNBkfBAfSXbRg5KeM3cpKDovfNBoF27wrsREFqVovg3",
  "key15": "4TQbx2kHmsXdS4eYhAmsgWXTNSNaSp4RXZJrjfDnGq84yhBfEuP33QefpUnebKvdaVbBdgAepmn1dGixqMWpCasc",
  "key16": "jTZdj87zaiYYSTBX2dQFMQTFBDJL8gHuPRRRinRwrwaAQAmuJeQWkgLKAPpj2GJzkj2zwDd9frfD9xBGEit7vhd",
  "key17": "5EYKYCVYXM1m12gy9Yc6AJFuu2AQMijMEbE22r1pymB1X3idqys5EzT4YRF9E1S6pkdqPnfyi6m17AhvJQK9tKz8",
  "key18": "2NavDnVTBpNuxsjQ3rpZFjjddeVfj2jxKqdxcPSxv8Qh6aYVyBEe2ejn6KTpMsE626kww9QPA7cWmnLLYd9FCZJE",
  "key19": "4dJAnXwbiAabAKQMm8yfXj5piuoKUGSxJFL2H8ezqcQwpZ1t1AKDChMjCYNiRHMAMMPAxnoFCDAyJnfQrqkjpLoT",
  "key20": "5ZGk2JrYUfRXA5h9yZ7uSxvfPKtKuM6c83gRWoHRVVLEbsd1a36aTytMY7imXEop6bGHQjdynXSiBcaaYgeVdo7j",
  "key21": "557exrgh4rkmzZfgKDTtq26sSTSozWoaNpZjBx1C8PV1dvuq1nvHewQ484zUWx6h7SCJ4kfbEGotxAyGwgiXAfyR",
  "key22": "32ApKMRbxJJi8aTatwWnPHeLZc5d2viWmTUqStCSBfQrGMoTucmH1wxxv3WqfPUR33Sw8vDApBeShYAAyAg9s4ss",
  "key23": "RhYgs4rRrzf4DbVev3196NK77bNDMWPF1aUTgMn9GiYeoNR5VpPDzdn3BvLRAN4Mc7ryg6CaiFiAkkjW4NJmFq1",
  "key24": "4xZXmB2FJ9KwkMRRdvEBATc5tUus4K3N1sAcrgcNZKpSmx7CfQHhysenZGN7jqDk7cRGKMPoXqQ7K6eeFZPAQ7CK",
  "key25": "3J2hSWd3TTiKmPk2ZcQJMTVemXmK5f2erYFGTjQntTsUDrtAyLKC3PeZbu7Wo9zcJfZFQzCgHfGdg8hkPxU6JEFd",
  "key26": "2MWMzZwvKj8k6cgYpMMNKzd42ebjKMsUpzVMthsRknDtyDm3JazaJCwgQKyg9oDToF7NNd14D6eYB52fTWv8nGX6",
  "key27": "36TMuoPaZ1tukEske2AQSGPXXWtRPaB1Ng5aSr4jVguyBs2MbvfBRmqQ85JEUBGf56tVEWTDhFSzFMJgtV8g9M16",
  "key28": "2EwPnk6tqdiU7V8oHBSCqoRev6t2MTVUsSJo1WnVF5tCLUrxu19VCuJBQrB63uXJaB6MLc2ZesjensX93nykeSST",
  "key29": "2wBgMPmNFge4QWWT6a43KNfL38v2aYM38tVtr1WL1j8L3xg3bcScKHpYaUS2dMnXx1LjycTyNDrngTJ6y9Qf3aud",
  "key30": "2Xon1UUsFG4923x82yopX5LYP5ZnSaw2CUbkhmwRET8s8vzTW4UyVPp5DfgMcnDy4C6RXhq4qM59orWCVtBRFT3f",
  "key31": "zJeMRCrbCeofssGNFyNKR64WdQAat3FSJH6GFWpnPhZHXpq7y72vxYB6wgGnTkNPMGU2oM6EJsw8FuskUxsYp5x",
  "key32": "2ciAuvZgZ4KBDv622qaRSUggdyhqFLB9pEP2YsS7AdqqhQkKDmrsvW6A3Fdsf5Zuhv44RPcUsdmaDGuEkrwAd2Lg",
  "key33": "3xLfFjzaGb4CQKqhAJ5DUoBpfdPnVG8H9ZBYg3gQa9HFNcdNbVBKcJwFvb2ZyFzwx1Be3us3MWyr59UNb2FJgcoB",
  "key34": "4NYdceUn3LTftA4DrWW6bJgaJEXE8M49YhU1zXkfnLhCyUNp95CgdTSDFr5pYzqdGe85qAary6bQjS3nVrUu6Agr",
  "key35": "4mwRryH33goUHVZZoHk9qCWD9w4d99MkxnAh71MRobCTcmkvvpjDCE9c72kYVfbkwiW8Ln6GrY9WAuqFw8d6Pff7",
  "key36": "3cKiZ82VXy62cBV52xTwKfYSR6WwA7bpp7iaNJqoEsHoh2F9fX3LXUudBLNNYNjdNEQUcfFWVMeiRZtqjweAgL1a",
  "key37": "5N9hJfT23StP5yw6hiCvYoF2CorcnfqBSgkG27wP7rgLQQjnAawBZTuJnLx3sDXnjHk3UTH8D8jR1UsbfCFHHowP",
  "key38": "Z4EWop3YbUeSiYqb4eUsc13XEQNaUYaQvbijkEe9yvSaYHzLiks1Hmj5cKMbfBuaZRHP6zkZVSGYYbNRfpdKoAP",
  "key39": "4pCBfhwGPJRmQHTZkKt3qe4KWJMFmeh1TD7sC8TZSHeW9KVQ4vB991JN5tVPATSrDxmAYMcf394xWFNd8okojMnf",
  "key40": "3vVMohB8wn48UKd8zLHrxjdUCVTyvpHHSrEnGeNAtggxZ6aQuyv8vgjqSvw95WcshQDxLi4CxegjGZiJ71WC1BMy",
  "key41": "52VRW1u7ixGXWt99arVPDWNSk3LrMfcrrVu6mG1qvSaG1MohuLocosHygyQpK4Rc9MgzhccbkzHZiRoJpdLhSVA5"
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
