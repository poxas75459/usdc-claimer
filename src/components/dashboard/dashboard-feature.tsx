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
    "58PmaGFN4vqiC3T1SvKHYPhrcRftGUqaq3QgYFh7EvJuamjUyf7jyqrRQSgimpX4Zfr1vLgRZpQqvixgPduXv479"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3o2JdbTr3B7aMco8kenkNy6HmdFkgHbTtcNGpq3Ni3tJUgPdWQrPZjCF4qbMJS7AUW4Zri6qkUQHbbDqKE81t5",
  "key1": "3ZwNHLza2ruAppfPzcxTZ1i5kGyBew6UXXaF6eHi6ygnq5nCTscEhNfBoYhV9EfuBddu6u9QySrmyHgNeSmxKhVx",
  "key2": "xuLCRL4WVfuyRyd6vtYoY63oStqhUc7dXwYVGLrjVDfUCbjy34cSo1mikwAP1xg6cKjq2wbYuskuUJ3YWtwvQNZ",
  "key3": "61Zsc77u913iYRGHUTLEkJuat2LQ31pKLhJPoui4MmCiaK8NQ7B1KQph2MaPUdWQpQzZUvkH8jmjYtGTm1V8P8Pm",
  "key4": "2m2XZMxbneeuJN6PPtAxSNF7vLwagnpVPxajoZyZ6LFgqx9ZyFZ7LyhgZbdUYcMwijUHfWCrrADj6d8mUJc1MqbH",
  "key5": "4JjzfioCsNGdWkBW9919MQRCRB8aB1cR3WibR5sfNArEngdfdtVm7ddiU7ExXYuizqbeKQjkQmYgd3e9DVq3ujj2",
  "key6": "5jTrLVRr2MHeb4iDrJm3hjFhj33TxznPqw7HdtWqcNTny88GrcUHKbd6xSfbibt4FrhoPYxyKquuLtDzxxUu8ozW",
  "key7": "Ww7eDpBtCgjSCugXk6jQDnu5baKudE7CcbS9rMfatbd6kVMt5WoKv7QvXeeDqPW7uNuusepdP3BuQfKvKa8y47k",
  "key8": "29M6DiuXMmnznF69CdNs4hv9a2N1MF1nvyPCGUFnRKTAUxztizGga59LsBu3No26Ht4YRCxUWTVWCiBpU5gQqiPr",
  "key9": "571v8Z2PZreCfaswfgzzxMiA8XDLZwSDchdF8JLsqgGFBtsnJ8D6yG9gAYUamEwjm8i2fZu2nQb64M4xmAjqfyeC",
  "key10": "EJrWoqytrfyZpySWfC2mcpjMnYvGmAMytJeAyyiNRcCqmoH15xXqGN4ruvbVMyrg1FVgxgQur2MwFh36Qd18wYG",
  "key11": "z8Lapxgt1zDg24BCB5iqpuxK4u4SSwT84uZzG8EekMtyH5rnB8zaufVAkkzjWSGGaUCaP8f3ay2JPrqMEqpbMsy",
  "key12": "21QCSgJrFPBKdbcmeAA74sJJZzaEBaox8RkQ52nhxyxSn3qfKnMMYumzNUNfSB4RHaLn2EANcTUMjEqLZewca8jh",
  "key13": "2NKhL4doXmjcDtfG7NsE9x6unpAW6jyxNuySVqkWMeiLbdYF1Czwng297S6tAsSkMu3HLTETFC5UEFpAchALUu6d",
  "key14": "3YAq5TtC5qTZn7amrn8nVKiXzbyZieYrSiMFzsfTNuNQEsdw5ZoET5REeK531xner4sHkkZhWvS6Yp3fUDavPfRW",
  "key15": "2ezkk8DMguK6PiNMeJ2rA44TUP2go5WtHu5i4DNjD3CnDTYFPxUJFEDrCN5UcLnS2SwtiERdXvqwBAN5XJjjwRdH",
  "key16": "3Gm6UYBPs89YxQm2UoYxgHQzGVBaKfkaN91kRTsEM7TXnJqN2k9EuXkV8tSEdfDcf2U6wmStCSNzHsfKu8qCrW8x",
  "key17": "5frU1ox7WZjfFvQhPqXYVJhB4tmtn1Us8W4EoSzETvkhZBA23ELajbLe1H3uFPxCqyPofgB3fEqMbD6nSTxjMhqf",
  "key18": "3DYNhmqwqGevhhYRi4J9QwyqZEFBZbmFhBjPuSbvPwqbdJNLLScTLJ53Px1rVRWFjGC3xDQfweiKAvp9PRkxVBeH",
  "key19": "pKwioYHHg1J6skuBnUae3Mt7dLXnNbU73PzeDmR9VttZQtwL9VX1a1uLoJXsvEnDzwWgf4E1HP9WzcXhGF2yTH8",
  "key20": "3W2kAV7whdHdh1bgvbB6kUbzMczH3V2MdqLhwx1ABnUAR8N4xZnM7ChnTmcPsxhT8zNXA58WXXLqXQcj6mcw3VfC",
  "key21": "4rByvSKFCEJJsA4r3qdCJnCfWQ6f9kQmomUeDtD75GJt1Fpf7ndU1WLyy155rKDRKqqEGNse12owSLkQswF8YFaM",
  "key22": "5gPZwUQcUotCfBdvX77jGKdW9CSu5nQP6tGVgv4x5o2H2xAEKC7eCAwcano2wGSNNxFEccdMpiMysaVyCouJ7Rgi",
  "key23": "3pfdS6stdLuzoFTLp7pKQmNXDvTtzWgamKTqHTBz3wUgJ9ak8jQVHfwQ4NYKL4PcvdUKExE2Po4G5CFJ2yyiEQ8N",
  "key24": "4CVQUfevkdc3HSnCjmrLAjcrEnom6VXKG5h1h7GNEtyxR2cJfjgb5pjpDasTCLqM6YZ2W3tdTWCioene5Va7D3o7",
  "key25": "4ZVvVDtDW8Rpfznvf2tYaNMFrGUU7qqSP5SASZUUH6Q2uVqKxsY4uFHuLBYvprLFwDCoPJYq6suT9PLtsXmnZ2k",
  "key26": "4Fv1QFnz4xBdkTUiaeYia57vyDPRDFv2boWNCG8YcuDAfNQf69W4dyLnrbqPuZJSsbZP1izCs5USeL1CyTagULXR",
  "key27": "3Kr3UHeg2MNsUmzQ22dLX2jn69HkAPj5dMDgySbcfyZUz4UjYp8NkdeJjvsDrEkZKCaMTzfGyEvNGEfrfc1RBam1",
  "key28": "HQQxmGAzVoCuq47RCTeMjfREizm6BdmkmghQAaDyH5B2ihzSSaYoYasRYEThRtG2jAaUtK45kd5SqKe8ojqhCte",
  "key29": "4qux4LmERcLD6S4RmQ6mZMWwrus6WweYe6Bg5Uz3KBbmgoSfFRsLzct3h7KvJsB6LfzXvQb75x3wrRo4xJTaFMc1",
  "key30": "2tXpicRpXgjhtxVaZEzzAPJKr6cnvApc3qVitXhNMeYbP4EsJj8PLfjo8PdkqcfHfAt3UYqA9dZYVYGGBESdaagL",
  "key31": "21KoDUyzw7RJNr7Nz6wvprDd2GpocMcRatPnUc3nt4XFgTnyGZWCXpuE4FG2kwekfkEm4CV1oa9SMLfn9s57z17u",
  "key32": "4uDZrp6AQrewdn6nBRasqMcrxKv6y5tXD5wauMSw6K2Ek22wpYpHBH2KTY8esYsjjjhMJAjoHAoncJ6xHyyQG5Ew",
  "key33": "4tYyoW6gtuDzPf8UuftgSfp9Pv8FGx9HyM85jXu5uKg8pc26ZinzPqB6ND2pxHTidtWu2DY3GB4P1hFseHA9fWQU",
  "key34": "5mbwHw7wDxU23rdM3Cx4fQKwTeeohet49cdJGAqcU1ofXhwXKLcXjVbmUXz3t85SvTLaUm6ad7JmjcjZ6eL97Tgj",
  "key35": "5iwJLJwcu14tkDV9Q3vcvgfbfuUay6hYpLohWop2v7YQx1BprWVpvQAHJE12hEQqzXXEQmeFAJ6Wesq6qTMWgAqP",
  "key36": "5fSwHTdueobkw1p91sf8s5pXts4XP6C8uhF4tA3X1QGLxLK4W5Jgu2iMrYuQGFxTY5xeEZux9RnPbfUaV18UVNon",
  "key37": "QzE7EdMZaVmMgnHgQ5g7WSr8NNVmx8CsF4VcGd1uef7krDr4RBfpXadanrVgLwtgA3wNxGqUukr7AT6JWNRxCDY",
  "key38": "2SkFQALvW8uRWZp5FUkF7y5Y9XS5AMT82NRxdD7o1yZ1pkMSGALTUC6LDchrjtFfhYtn88vEEhaQh8MrJzY5uGhZ",
  "key39": "4UmDDfwTFBz5ueVt1rnH91LKow6e2AHqbbxeCqA6CRx29MwhscuqoJaGqj13wc6THQXfK5btpYhz2JnaCkYaVDrd",
  "key40": "3pBujJVWtAv5s9M3AtqMBJSqN4sroGodfi55nzWhBnheHJLQFUzhAwpVRVEwca4fkcZ4994inu8xzB4LWUrhuoYF",
  "key41": "2ucHEE2s4A2is8bUjrEwGU4J3gLb7HT3kzePAJ5scHXvncx3zdh8Z6M5f4GyaYdi8jfZ726bvZzTRUV3W3GVB8oq",
  "key42": "5n6q1GNHtDAtry88WFXR9dLhXMCP7hN7PmcJXo1TvJmCPSZoMjTuQNH9n3KQmuRJndDRhT7FY8AZF5baBFpf72VY",
  "key43": "274WEijrQVLcgYHBQ6CqESFttVm4k6mc5NbEezAu3W8FLrAaunZyhacFLT1g4bsZgUZBFBGtjpxd1d6sMoQSNZYq",
  "key44": "62twiSmBvBCRBtd4LZGQc1mDiP1mUqh4bHEggubHtBaEEnUtUhrRayEuNPSw6utbzqPH78dY7G7cznt4R994546j",
  "key45": "2gTo6igvqJfo3H6v3gQvWy6uAoqvdf3Q7ohR3nGxs9GtsgCpe7J1wHjMQR6XvyozEskcBx24MMQD63m7weeG4Lw2",
  "key46": "4oc1e15FcEL9oN1BuEUx5AJStKaE6ddKCGHPrSJ92bdM6kANmP1Lr3wwwJXFfspfCc576Bq2tAVhAN2MZuGSNJuZ",
  "key47": "3e2DSBAD9tS58tvrYT9NpWE526RjCPNjkgkeocoCJedd2dFvHd4KCQ7yn5UcREzopvf4EuznCJoN6NfFj3QE4bkt"
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
