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
    "3SdHDPzNatVGB6cDoWDWdNmFEdDR9UMTYSFXvkFBKpodgwEUJ73e55EZ3Fmxgm5euxbAtn5jyEpbVbsD1Xk1W31t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooSS5KteswntJaS9wnfQJN5VwyBXuDMidHgEkcLQ1jiPJW1nqePxKmhuXw8BrSzsf7ggygoe7x8nnyVMycLoNLP",
  "key1": "71NFRLafCBjEhjN7pGTd8rc6aTaE4eeJvBd47u6A2j3kmCXQ1pQoVniiiQf9NN6pAUyaKw8vXydFPsDVKmouLRq",
  "key2": "3yXPFVzrj7bmcVwLmTG35rVtKUnzG9Vuc5RMR3DJy6m6WikoLRCvcKNWnrEDYwSKCh5YzpzHnpuug4NCuCJX7Kq5",
  "key3": "e1tCpPpTi3seoxC3GPSf5UU8K98xMP6myr1BKptVigVxmZgT7XxtNEq8De9d5PJP7g3BYf18cxw2h4aWwX6CiBJ",
  "key4": "4NTQZ76E4GLnheMWoHxxGtxxctx6isfPnLHJ67XnXQ5NAzWGVFqZwpGkkEPKXjx4mfGQKf7iZC54guENJJxUubTR",
  "key5": "7MrUDBKoZVYJbqAPPx4AyGsgxjbv81Y71vxyGRVFmTTXZ492GxEXHokoWHdQZ3aBky8R6DB8cQf6Pyoq2gWyppW",
  "key6": "3Y7v8y4NUvdb2C7oLA35QoNoCWwFMLP5kTLZGDYPpW6gYEVGd3YUqBqckXbX1oTQLSxkDVwkscskUi2pMdw7T36x",
  "key7": "n4W7Yziec8LSypyXGsetrKCj4qjJscCC7LuVGbhKFGkCDZz6N2yMwqsu6wNRGPwcQxyhora7fga4eavKJ2ejCdw",
  "key8": "4qKRTz6r4HUbi31Bd4kSec8puxWf1JPn3sEvBZqYpyc5hP9153KjaNLLMnfMeAvDmNSQPUqMFjBS4hdq5QZwPUj9",
  "key9": "3ctkHYjdqbdLAAUGsfUQabXYYCacrRcokR3TsGYGNBeLxUdEraAEDs6ug8BaUMAccxBEVWxrKZZ57465hnS14qLj",
  "key10": "374uyGWLkQj8eqyMVgTFqnmNLF93HuhDbFEwSrSkdBnG84r5YL8bSskxoBnfZQc8ARTLeasttV7SGpAX8Cw7gMr5",
  "key11": "57PF67dRq47G1Z8iNKcrASqsKdwLo8UJtZXnbAoTu643aHaZimMg3G6UZLFvBrPiLqV8o4WKR1RzUsZ5nZUP7nW2",
  "key12": "5QHfrRaiQm2GrNzggjqk1CUrb82Nie7MTsgRqJKT4UFNfXJQjrXYQhoHGoau2ec2TJtWjST4pW7SpwLwFEzoMjDK",
  "key13": "62uQBmQveYhgik4bQGxBFH5aNWbxs8mgLeaV9hDkd6urfkveh2tTZN57xnFJ2kd8CkCoi8zegkov4e3TQWkEtyTn",
  "key14": "WsUyvcFWECP3a3TRMxoPCxPaVPcBPAL5Gop5ZTTnd6WjwP14BMLsSGHhmMqkDpeFyKPUS9zwCbozSuAFq1VN6oB",
  "key15": "5NWPigRF18SaWGYQCTSXUF17sQ3yKFZocBLmHrpM85MebiJT8mZdioY8rLBFp1iqx1951nK47LSFAdEA5V1Gdfbx",
  "key16": "25rns8s3LbFeTgpw7HVAQGCVPup8hKNbkf1m1VGFVb7WUPhv2eChX36BgkQdx9AQdo2a3vPcShBmdybnQwdDP9rs",
  "key17": "42Gy3x7Duw9Gou3tJPdLY6KhTzSdZaPAED8jXzNCp7QRX5Se8b1mYh3VrKvx4x6eAwyUwx3PVDY7x2oZPgT4nv9i",
  "key18": "5NvLGD5XeDT4HrmL1m1DC3Xr7jJ8euKtpj34eZmhyAPVaiz146mBLsZbhrSsZLoya6ZbGo6XmaqoSpv8DKzec9Wc",
  "key19": "4E1cVoFFFTDP6j7RK4xJ1Zi9Fp6jEHH5hdZRzJhZqLbPUvjJcwewNsWvP6pZc1o5nRDozUuaUQ7qkGWo8DfNX3gf",
  "key20": "4iy8yEbgf6PNhdwNode3uQqBAwv9FjekZuZfg2PHXZ3yzzyJWurtCyuVHzqQhiu3n7ezbcBuVZSzyKhU5V9gfNwu",
  "key21": "rjRx7uXqcqJPFCt7D7sTJb5dDLPoE2V9eBEbd8Vis5WspiUyD3g7CHn8XdsDEpkjo9hDyvkKyswikJiQKiu9zJg",
  "key22": "61TFis4Rm1nNUTg8NwjYwyEA2HhVP92R3pzGPHorzqA3xt4niLFNQ2PKdyYAjAN2FZXyQWtzpq84W9TMJhrX1YKc",
  "key23": "4LVzxu16uRZtRG9uLrC92DKVZgPiohFoBrANF34m5N2Lg8h88TuLZ4vQHQppcMet4WKzm4CN7JpQ3G7iYsBjxpnF",
  "key24": "62zjvieKsXEE4fxAaFCt8rxhtvVyPgpAuxtDi4EtK1jUdP7eUzP8AA6xz6ZGPcQ3KcM94FoxAU8Tu9zr7gHqEVz2",
  "key25": "4WypedQD2QB27Vbd5jLMLRQ9fax62HVNjf7Y28ZfgvS6L6eMYfNVzzcXka1FAbiRdxAE2Rw2eojzUiXSaG5XW8tm",
  "key26": "3fH3P89xPd3z7BE8yYDK8gDoYYfpodU4ad4oyV74yJk2pmqkZnPpWMBmEoBkAYRsXQUNSSHQDgynRUVKkFFTiDE4",
  "key27": "5YG3tzSg8xSDxvzNjqaBekzhZk6xgRwfMPuiwik1qFQrawbVnLLXDmbNv6cdjxWJwxdvnrGwvCPPVZT4H4Qaxnza",
  "key28": "5TTv3xP2Qaw8zzZ5gHnNXtkLEpeewuH4tjUiCNfLnd9YVXrqWxYPtJBdvmaDvfZEntE5Hjj3s2VTUwxbZ7GEfYoS",
  "key29": "271GKzLmEyyGts7rEChGi8fMdNLeKa2sgkP2CfzXkFACwfXGA3K7iyo5LFfhwZxALM7yUXASSosPWtgU652yZhT2",
  "key30": "47AyMWQvfKVTasicFxCZEXGM79DWDuywRzyoQ4AB9CxYL4T76C5hP7vjRQYhNVbYG8hc42R92LPSEzjANCznpSaM",
  "key31": "YWp3ZebTLwr9tkW66DTG87rckZ8rcjUWWCrDSXRnmpniyWdpn7ktQxMoxJhsx3oJgTyqS8Fys61oabcUt6RaXRC",
  "key32": "UB3oPncggpr7tCm19dy6qYNX39mwziVPdFUz5M56hQePMZqiCBeGmUGxH8P4tZfD2kUQHS1njkWXXjLoYyAfj3R",
  "key33": "5ug4KqKB7EpEK6VZDKtegdKwLcEQUq1oBrhSti6n6n86rRyr5UGEzKqi4YevVjzBci5v7UMK49BnS29QgYicEMRq",
  "key34": "66ZtSujkFtT4DASrHb8orroasyn7AyBvGiR9AEeyQRVEZhEkj1DYoPsehL6DMxV7G4DQACnsLrMKFJorPsXCUwwg",
  "key35": "3RuvLtJeij4B4cG1L7PNL5ATQmtj919gj6QTwpRKgJNcnmAH8ZGFaeUkC2vSovW1iVnejMrHeidwG5vqTrd8Htzd",
  "key36": "i1kCq4T6LMx8dag987bMCa1UZTN6TxvLffPNEjqnPkmBL3WM2XrdnfLXDFGPQvhaGw66zpnoq4cQymNfxrcixoS",
  "key37": "3Wy79bbJNZzd242GXk46jzpMAu2ZnJbXyuXTrPxqdCKN1bfS34Ya4rzXVJYacQN6tRCaUhDNykENumszq8oNNCme",
  "key38": "4xWzHjaR1rBkc31XmeEyuDq9A2TeDDBS9UzDJdrjVDFDKBpXciGDjdLp8PMDKVJkqiLW7Z3PbDexHRBwwaR369RG",
  "key39": "29sgFf23vx6uLzbzFYwYaHK2yCrSaTSn5wUH9sacA94AaxYw2XPBESEyk4rX2nCSdLiWQQcHF5WU1wKsRS8UKsX6",
  "key40": "5k1WNSCykGMw9Q8tcktPAF5yLJcazBAquuE8haMN6tmG18ggJZzFo9CXVJ7ajN9Ef8WyzVmm2qq6wc5SBbPnn6sL",
  "key41": "3kzpAoytmMCradFpk9o5FEAarTf5mwYDHro3nmYg5h21Z24DRY5dZQVwyaWeFuQHHwf9j9d3oxtJrSZbLRHSJhez",
  "key42": "2N77vovzFhhjs8c9vZBmQ29jWLh1gz4MsQra3enBaHD3xaURLkA8wugKq9J8K2kpwWSHas1yTFKQ5kcbpcNgBm8Y",
  "key43": "5tHtaqXv7qUcQo4oJmDFUVKfF2CAZwdUTsVCWuvo8nceKRULXWBvtKqMWrQHHcsbBRKi2XJWsL48Zm52PW6n3ibi",
  "key44": "28R2DgNR4WMJqY4gmnBSDQWTKK77usGndqdg37HAd25DGN2w2uJ8DSxt6qNbzsFtduGJy7oVgbYDyuCLQckFYZHS",
  "key45": "5HLQ89pxSsVC58cjHr81mf8Wdj6RAZM1cLh6bthhNbKMiT9ncoem4kRh8uWMmQGMHs2MppG9CWamEBm3hmnserKK",
  "key46": "4cu3jYx6n6tDKorASno4Wg4JBuvMqNk8xurZaWUCkiat3e9SYscPfqG96UG5YTPDxUwiJ1PUSqPNkGZLsqj4yTcG"
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
