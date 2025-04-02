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
    "5cL636qbWegiPwLrfDxQ5vBGdvT3f8ya2YtVMGFVyqK7uCho9orJ35MRrewbReUTrjtotiofCB7sykoKsLfgbuZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUiTkQtax6MW5vW5DDUzJvxMLEkjaSHZjd1qkKks1eJPTQnqKZqtBVj6iMZr8b9qfMDa7HLc8PBV4fXego9UsWt",
  "key1": "3WMbJ5m8nKUTPju1mJHb5CNWu8ruBmK5jkDdbgRj5cb2ABc7WAawS6KFQ2wchbGs2gR4NjdyvG6mCRm5Rr3HDnm5",
  "key2": "2iMFHK2jqFQrB5v34JoSrpsahwTjxzdxgtnuSxJ8WFVKpC7iacnR5Z1vcorBSVJBVZixW6ZHduk1wDupgw3TAB13",
  "key3": "4X1f99SK5J5A8o5s2uJ6tJn4YEJ9nBcxfNt6z8Asng9mhFrBaT6DpteEQJuiQidqMB6bfKtXggonumorCFQ7e8F1",
  "key4": "5p3FBj2cMX7GPihCjRz3coNvAHxLHBmf8Q5ihjrMTpeTDggWaaMgkUof5uEfmaLV87xeBNDQuXdZ1Zmxv1XAS4ji",
  "key5": "2Y36BBP2bxEeAyGnQEP4jqWJBzgrxDAFwpobTttu3eCFwfz6z3LJdAuWNGDRspNC1rgN9mhW3r94r4wMvALXK5cq",
  "key6": "2VnNkhRxu6yFhw9dwj6zKMVvHKvWk5Xgg3wUsS2hXCsabhWJDFigBcbqjDCWThyXxGbL7XaxwrqUUdqTji3TbFW",
  "key7": "4hvmePVNZwtMy1nsGs1QcVuv6d3RyoNeFAAePVwmQnQXM1tcLpcDfS5WaLW87i43fanjoZMz4CkfXuq8yMartkzZ",
  "key8": "5dn3QdPNzpQC53PPKZF4bFFfQP185BitKa6y4zJqNW5NyAz7LHVXJGB62b3u9CYUf9RxBKtuvD8W9YDcQ13wPNgm",
  "key9": "2JUfHUVJQduusFmBujHMw9aYJStc4Ns7VcWuxagPsbdHjEGAoH7WNPV6xZb754mgTG1AYoZ9khBZoe8qmS4KFvNM",
  "key10": "2z6N49pbQUVqDFkws9YWMP8EnWpJmEAHTBhHhH9cjcCPE3ADnMNVFkhc8L18bzvE4QjhBS7xMMSRJv2SLFhfnBPR",
  "key11": "DDtPA8tvELYWgcBp9VEaTMMDridVCDKwJJBtazXyVNnsjpxyEiVzzpUzrUrHLbs24s2AR9QVMuXT2TPgPqXGK75",
  "key12": "48HYVZNodLvq2Wd8n2NyuCVq6Pzuw7afHw1KnX8m4rAnKuncELxK9C1zKdTEZrqT6FZcRM1v6soFLenR17ScSr8R",
  "key13": "3UPsDyJHqx1rF4TsWbHu2Tc7KAHE9qNnguwi26ySa4xzNrz9BRjJg9z2ihehRDZi3LvQ5TuWv4KFemgf3Me5i8u9",
  "key14": "gvBjkGPfz64busjUWk5mNDYJWvpk36kLneFgkAMD8MLdbtmbedFtmaKTL8jUMZkLj4c9zYTYRx1pd6DWzvZnW3P",
  "key15": "3Dc5C3j2PFVqCaEbzEofMvcVnTRiwk7jZ18iuwnhqPgpWQguYbkq5xPu2bWfYB5qoqarEb3sdifZ5NwNefSx2KBE",
  "key16": "3PvfDvbuA5RdvXg2YX3vRFUpDVKd16bNqbHwaJgy77qB3gYWJMAyq19VfcbAdqX614DAhJwjke733TknBXC4A1NR",
  "key17": "6229jakrY9s85ZaS6hYdZ4FjCkRqsTeKhkf43YzkUiWpzxuEXsMeFZV4PQjHWwSNZQZ3v1JmKVySzZrVuYCK6w3p",
  "key18": "43U7pvCLioo87bttKvvzqwGEdqsJ7M8hjdWvSPNrjzDb487Nf1kkEXQRYXU7XKXcQ2mP6Cxv3phtaaH7WgHtcno",
  "key19": "5vcjBR98kdNLSaXaxfY3PqAmAZuN9BC27iVNMiQfxXhedmZco9onQm4MXFDeyac3AZwvDtrCS3NmRu974g2BktLv",
  "key20": "3GUjwXYrKo5oywivhZySsfGLjnxwCiQjyrFWFjb2A87qoKSinGRQ8SkUjRZ1egHYgsb3rRj7PG7iqR1cDjGoULTT",
  "key21": "2G6ft4RzEwMEK4qEzUyTkJY2s5CwtNJWvSXU6XJGjFzRqA76zyeXoDJ9wFcyxP5a8gVzVGGH5eyC5TJ4ZAGzHPCU",
  "key22": "2Ud9pQjqtZhBBGyfVzkYQxv9jcg9QwxKt5iqB3M6NqSVcQYJMW5dq7y3hrwAUUj8fSUqCcvZ1xwuPTswBqQYmEzB",
  "key23": "5eQfpvR5XoYKL3pZxyGwixMsz9ifq9Gsou7b7UHurxk416UX1Edn7RPjpThpQUPsvPJiZ8x8kGQBxnoST9egJyto",
  "key24": "3mtoKcLtuDWDzDKJpzuh2rr5D7F2GfELBw67YkdE91B9cueyQwFXAZUV2aanYLENumY7jZzL6tPKEzUSGjf2sgZ3",
  "key25": "wfMrr7GDUmiKroo3Yfk4DyJ4hmEHWzVhyqVX7auGrfKr3mW5JuR1PnePpcAZk3Z9JxwvWAiheS98K9GcXf8NvmM",
  "key26": "JmBP2kiSkbxtjZaykJSVs39nE9im77MeoC5ZawQZqR8pTTWwVR2Ct6jzQCGRngNUhiQAwzH9R7LT7VMsNeLhkzW",
  "key27": "4a2NE7MfGfrKKCyjC1oGLXHG8hxwYXiFNukn1R7KzQn3wmBMoZV3t523GEHSCw8HU2LvkvWsuw8DRrydkkfpbCkp",
  "key28": "2SQ8rRmdUpQXYeheQeYkFS8i7VmToiGLMtx8T8gnK1qf9fpFabDgT4mbFZBAuWeCJo2Mqpsgvwqnt1hZgc6MVUTU",
  "key29": "5CTjaE27xpK3AihMJe2ihroiS3SyjNP4NM9i1eW3zJ3psQbGEUu4S7zJKsxZsnSQHKaWirmJKorjk27m4bFWMHWv",
  "key30": "5UWrvzapxZTUJhL3LKRxjxKhp3RVu31zvysdhju2LDLYHNuTmkzzFcb1PhFqeAX1j6NZ2yMXfYL4bTEbj7FbUmjT",
  "key31": "37STnoRj3JPrZXkBZXX3yoCvLrHmbYhHCnasQx4xkY58dyAWGjhY2gFPE6kAfFHXXhn29vk6iu1SBj2ekwA84CCh"
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
