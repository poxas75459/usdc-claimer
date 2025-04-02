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
    "5pX2fE5bixZVyoWuY2qtQ4DtFvEd4DvfKzCkwK4Eapz8rD44ob48gATxhxq69HyrtuN1QRuXQxmPt1GoM5TyLkzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEHgVhUAQaiH8jcRBq8SiKH7cdv1N739TJaogBD1r8v1z2xmTm6WEenfeeiJCnypkEZtt3RQAQp8UpfLgsCGshC",
  "key1": "kRcpHVYEUwcwuP59TrhteL6w8ChmQeWYNQTEnExzbeRRtwa4v5B4BZRgDGJcFMaswFzQYiaJYKWe4b5MWxWCfhK",
  "key2": "5Qd21ZTGczj2FzdzEnxDWLEbmmZZLkE2G1YqgRBnWNgty1jpN8ubLbZX1s7masgWYa8e1tzZBvPnYkDaTEU3Xu3U",
  "key3": "5u5JEuYsbJuSFwUbLyUKSEngEEjoNYupvL5CsaRT54Be7JroJ4NLoQkm3Quy7mpHszp3KVeSDgWfaQ2HpCx89sGu",
  "key4": "3b8KURbXNh4h6jYzUDgS2oxymc3RkqSMdbSGrGRqfyZq9Ue1JVfDnXcVgYb1t8Abb34TDBKrVS9FBa6N8G8RZDbC",
  "key5": "36HKxpoEWBG7vvQoZx5qBN5t54fpzPBuf6ZLaZv6KaorEGQHQhYnjWH6CUvYm7geP78hyYQkwxEvjZUCvvU7sVDz",
  "key6": "4U8ynj44Ay9gHDmBKpVcAwbSqxX3zZmumafTHutAGsKw8gP9of2wG2G6yCMPyu5wNGL6X2so3QBqTivGFWXzL9AA",
  "key7": "3NxqCWBSmdCpHNbXKVy6JFpfCeo55uK2641o7b2sZTFzLdFoz1zXKhA4VRrWQg1SudkrYur4iRb9HhAV6WUqG2FT",
  "key8": "2oYVswjqid9SknEHr7LoMJZuGzYJbeKvkGRtXAeo5q6epyryrDpJdxhm25EWh42RGPbr81bfEagB5XXC4wFkNpC",
  "key9": "2394Wpe8fAc1ddj6hgEexWTBrc6sf1S6FGzobVF8uguD5jNn6iWtqFxXZwzaJftTzeDMh1DYmb4bN2jNWGRmArfg",
  "key10": "M6jFXMQgM3QQUB5ndXYiRzWYbBrmJENX6kjzxKuMzrUPWCz5BcaHezXxeJMkYpTjF6PF7qazMxE5R6mF4fU9Cj9",
  "key11": "2xRjpQgRWUQNnnV7dVEtygLfJMRk6XSRT4k4ZfYedG3YnmGuiq6xtkphm2nKPD77LnQRFwEk9cJLDQcqihYg6fvB",
  "key12": "5vmHscrP57McTC6xyrjFceYgUQ1qkodBX5RMSoDrawmYEU6a2PMgmKbcSNJM1onvk524wPrtBaRMW2LBdF38vtYQ",
  "key13": "4EFrv8hJRXz7yEz3kxLnB1yKm3cobxANhjfMnDa3CWLhBS4DfApTJTah2NSss7W1mA1LPYKmVj9mmfFk79tgEm4w",
  "key14": "63givk1ZHeyAyaZAFMp2MbHeTjdn7UJnNZyy3mAAHQvvDbyzhbRH8hfUw9MUMtp4XkRqQHPauT8EdqqHbQV4WYNh",
  "key15": "4GfB7tAjXiYkauaRSLqLaXg41M11aQMVYtmozYju4pHcRrwM2hCpaqqX3oQGPTQqMSzfagdYNws8DXst5wpwA4cb",
  "key16": "4N4nyD1t7y3qc6GysfM5ZYYuoCNE4PhV5asm2hzNoK7rdoC7pL3vkXGhjNhKCp95J2BY7kYJgZZs8FtXYPmVmJw2",
  "key17": "4ZazJFWdxcTqcH1EB4QxegHwAH4bRHJFAMrj4oRbWzr8rhBsN1EPeNgRf7HfvcMz8pDDMsQ1fc3FtuXMHCJSCs4E",
  "key18": "29QfZpFKwha5CBM1fUFbNfKD1V5SGVCrQ9E2PXTRVQdfHcyUSj2tLampk13BoMi1FyEWHzEHCXFMhByHydpv1Nf3",
  "key19": "3xurnTD7L5n72Qw2sBEyCLZdt44LDZJCKUiziksUHjqyatGV83ftjgK8psttMWn4JZDxarcTGt3pD1B6jQsVzbNN",
  "key20": "3jD5en1QzZuUf9TZEgQEfF6MZaHdgorVY23KqdTD6YBaCRNeyxpvPxrwM5uQRGM1KSSLnRXTJNeeENNkj3ur6qYQ",
  "key21": "53kNv4P9A3rU3YXCpquVsxjg8e7EiKeJU9ghkSS9dtiXJKtdvVUSrmYqVwoRCC6pkTZrZkHvzSHnHCnprkitT8Tn",
  "key22": "5DyC7evd8zfPDPR6iRQknhyEjVNtasvZfyEynWGobaiNosV2cfAdxnThYMMPknADw6zpuAaCy7eEzFbdpZn8RThw",
  "key23": "3Y3b1kw2Q5pP4mciNkDNh9ueeEs7BiXZrpmgvQmSuLV2c2pP4Kb6JLLkSbAL4MeDz9TX8qV1iiRGF9KJ15TrAvT6",
  "key24": "4nSb5ZG2stXoK9Y1aYkhfhMQAzMop4MgY7fjsJvSjFqWMEzowYeSCetw7tQJgWBEZYEtsXeKuqH6AQWNAhhGpotd",
  "key25": "52bddMaeJ9gA5JvmYkVeubLvswMa6dR3xDWiMGDaKcnR5dkvgXLNfw3FLXXxrYGrXpNxrYGmox3ehf8hiKxWug3z",
  "key26": "3zZ6KhE4kKN9QTWbZRP3WJExCEL75v3sHPgLhbVHoYv71vQ99qTSseikjefXByAsbftuU44NUgNyLEMwm6Jb3Zzy",
  "key27": "w4xqWFxcPQkde1Ja3Ak6ZaTQ9knsJAfDfZeA1iSaUAA2DKZ3edoVfDAKYiTKHCFzRFcnR4Ef3rrT5YqL9v7SzJT",
  "key28": "2dytV9XjkEWDHdTSZXrD7jizCoYu6QfV88Hm5FCuyc5fWv3TPehUtJRkJ1FVZbLUgWopi2bBLfJw99kvMgMCkyrC",
  "key29": "2FB3desatuh7haXqUVSsYA6dP85GwVinMZPgxgWpURighLYo4FBvDxndYuHZ65sFaXj67Bgb7WJxY1bUDYpuiUsK",
  "key30": "5qKUkBE7DqdutPzKgxTxZ1Yn62jQ1BHN4PxWUe4ZT9ZAgP7MEsWnA3JDt9HccPRURF3xCgLb6JoShbmwtoXcTJtw",
  "key31": "2VyrVVL143YtGVFirtLhvYXbPTyEgtUftzprxCY8r3xjQ8MDFSU2Asvmg7Pn7JdyEgruWFShvf78c17sARcFkd4L",
  "key32": "4UrP6xWJJ34UJnqyjUKdf7BzumfYAoj71fNyNXL9LAB2Euh5kGqXPc4si8GgBPer4Kup6Z1QBrVdrUKc1m3cJQGC",
  "key33": "3GUSDdd3zBH2zVndqcXo5a8BVkcffYxRG22AWN96LGi8XRqjG1TeXqbFUqp9ruqxFbStrtPLF6N8KJpRFGaKb4nc",
  "key34": "2g5BVv72DoSAAq8YwtwwTq1Xf1ZMBLBEG9EkWsmFT96G9RLSM9GfG3WMEsaMzzHTtUBFSxjVFHcbkss2ioBzgCDk",
  "key35": "32gR7Jz6UxXyCWsg93oqegJtaQWAuCgYDYFT4LbxJGzHpaFRUfREqhXoifTJJf9N6kGGpVGHufNgGKN2FtmNnJhB",
  "key36": "3JS79P3ayXYXALfTPCd54VaPfEgHEKtRHAxrptBmHCMFKkAXnQZE4q5dzdnvqJMmjRPJREdbkrFRxZmxBp8W917Y",
  "key37": "3ycQsoGoG8hAuHRPGjynvb7iNfN43MssxUt2XeTNEsCKUgZnjVJkBhm6zJLVssZZLJDfTMbKmXJavLv5iu9w3eFb",
  "key38": "3ANwT719QUFCS6cmqHY1meGBkPEf3xCktcvj2Mpj8CvFJG3eW55EN43e9ZxLYh9EqG6fCtknMwQTFUQdmZNpqa7u",
  "key39": "WrSnZq2HLPXWtZWAVvkoauX9DBxBTGBjmQ5Ps9RGhCjuHLayw27SLrrLrKgD8Vn6jUqBdqcf31XZK5QCb5mm31r",
  "key40": "FFS9ywoU1mAUhVkpQJHiqpfNR7abxnXBkmwvDDSXYyseqwcp4s7RX6MtMwqEh3VSEiYgpVbPVbNWKtciPEqH4vo",
  "key41": "1V5UmpRvU8mzG85diJw3oBuEC6JmT6g7TihpQF9sS8Z7Vs2S2VWhmQUsjJNSYYyy1ToTFf4qGQ3zr2b2pozvgfj"
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
