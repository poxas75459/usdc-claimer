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
    "bZJQr9NiJn5UE8dXR5HCBnUWJTM4hfBfv6k2hgVFTasniKVC2ZxeM76DQXSxghaWdgwp6azn8BVyfTZdwconq6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv3M1jsuFvuvHSJiGe9B5xhh2EUP1CX2rq9RNRSWEjgJ8JthmsVgr1ij5qmch3cuS76rgbZjTEbWPKTcFeeZ18E",
  "key1": "3hw7SdfXurGxfhUefXSqpk2YKPamJ5k5SMz14HzjLwvuvPwenfNRi5iQsAaD8TBAR3NoeY95Bn6f9hTdZUTJqYBc",
  "key2": "4vhcxp7d1UHCJQmScgh7dZSscmUDEV4TwDoPkdPgr9KUKR4DXZ7YuX1RjowvVW9cnVgp9XU2qcyS7HEDjgLE1mwU",
  "key3": "3EoL7MMMDcBeXwDRb1VCay8WroiGJfFvqkYrv3ALQ1AisBdxDaTbuPSLZvfja69nW9JNJSfgFD3XPG96um8VaZ41",
  "key4": "yJtrXZq9we8hVrkMSmtVPvoKeFMAGftA7xWvNvRY8VMw2M9k5nvRU8thgz8aZXxgqzwL5xyiLZt8xrFSYndXrug",
  "key5": "3TEX5BcXFCRkKiix2eRFqKJsoQAzCfeyJMN2vGNYDqPvY8UbSC2UWRdCnPP4W16My5N7u4xaahWJysqz9XTsJy1B",
  "key6": "5mMj6uNAoXJdzyTgHuMWCcNeKNF37fRM4YRFmb5Vw8GQ3fe7bbzMUPctNktG3NdeHA4UkjhTcdFWK2RLhNkRwEmz",
  "key7": "4SaWBh9JjwADCbbv511CCVPuQpEXpJy6Vf519sMNhzmW7ShnMHvhEVLTT1xuH8WvEu7xXmZNsMSbjaiaDVYF4Eky",
  "key8": "3G947G7AM8eH8PdbyaM2aY2yzDbQvMxjSCQFfxSGZJeQhyWQ8aBWn4Ue2ixv3QRxeWaLULTfHJ6EjmBg41LeGmsp",
  "key9": "3fBjnRUr13PWBWCpg5htBSzpWiRKBw2X6XY1Yc7vrvxpHymu7uNegQ6oxA6Yw9KG1QEyqyPeiKq1SoVt3J7MLPsX",
  "key10": "3Vcnd5wSinVzGdYBvDAJKLi1Qn4pL9fxmch8uWsEmwYDifdVCqU8UDUopCuDTmLhXM6k6jjEc3E2wELBZp65yLKB",
  "key11": "3oftDHiRm8ZYQQ1XMrMudGbbnh8M7Zb73X19WFPYDtSXqGFMfUNpz66DGRqHodFR6zR4nGTdgNAqtWn9tnoGRoVU",
  "key12": "35YDf8VqBN6Vy17AfwNob5YnXtYNgTyE1dnawLaSArb85KnKUw2J4prrBc6ki8zurkrN3DE54oxigaSydq1A7Lq2",
  "key13": "zgaCuAUASZ1Szwr7t8Djut1Hx2b2M63PF6MQhfZASXxASEFCL6vwHdv517ugkvKWm46st8iLHw3NBfZEmXwyFV1",
  "key14": "2xJebwDLNj54Y7ucmAELn57hUZrLAs5c16ADg3tot9vAYNcPVxAUan9es6NZ6aibfgDTZCh936Ed829eSsd1a1f",
  "key15": "aNbLjvZRdkXLxBoeVod7RmFaJZLy1DnsMztnysBZ4HQFhyTKc6CKXPfR4cwG9EFBS9Y2FGptE3xRULd5mdb25rq",
  "key16": "2FZntjBrsDtQrxmtJptVNrCXuRMWA6G7SWwfeA5SE7uB7qu2m5XA7e6eX627GiwnYKjSJeXs3Uzq3dWsbeWy4gyz",
  "key17": "59RUn8dweKfg24wgtxRhFjtHMSDCrnwCbkm5xrriSTxG1bqszumAqvd263N2qhocxS1XmYG5zZmfeQjzAu7kPqX3",
  "key18": "4kck4fwQMB16V3CpeX3bBvDWmZmNdfaQNA9gFBSKtqxG6es6eyNHpUcbZ4TKULUMQPhV8jBdwjcziKa9myGNreCw",
  "key19": "639BWWUoPDNNEr3qrRutGTLRbmVKP4WCQnqXjEhtUBfn2q6NVTazBQ49CS8p9VfeF5UYLEV2mqT6UEHJjFPZ8KNJ",
  "key20": "25vdvdpFFfki2h4AB2dv8XJj9wScfo3JVZnkQp2VFQBG1CUNtuN6wQv33SNfGVAa5v9xd8JrqAbWRJFZWWB1D7Sm",
  "key21": "5ocnUPBrnsR8K7UB9PdPx8SkSX5bjuK2yVh5bGJJ8kfnDPBzR5CuZUDvZSekpuVVSiWKr8MsjkppGBSqYH3wFwki",
  "key22": "2RxGjcJe7QqrZueQQjZQMtBRRiqAecvEucw7YSEA2uCp12bBmRaazTXHsgCThyTNxMCZx1fwpc63WjwmityuJNu5",
  "key23": "5AVmpCJ4SZ6VEbShPiHqwFc4EX66Kkb9rPj4JuWmM8vx3xzWVNhngpmdt6DCas9kWTAnqwHo9fJZjfsQdbRfNM2p",
  "key24": "5AAAs2eGQxVvRVtmcA1xz8TBJhyi81GeCNVSvRRXCTjGc64puFHXpb3DnisiLruPqAmu5VuEg7SFh5rvvccH66hd",
  "key25": "4ukvdDVU6isabXLFs5kZ6dFxefKLtAxEfz7tbSBAeRs3LTrwKUbFJGZ4ZRumk9qZRrYe2EPBNgzpEFoRJMywZfMo",
  "key26": "3RvaycNWPbB7H6hAou2NQJZvs6dPPFRamZqRSf8fsEi7L4ZhrqUqfb6mcQ3rLucaLsuXYyeHpnW3Am3sJsZxy4eX",
  "key27": "2Pxb2513fxETBgFaKekmWGCxbQuN4doyUjUmuRiN6i8tqcxSfz85EYd3QvxTp4hBL516Ggu7V48mmBeksghbdMk6",
  "key28": "3YY3oqXUBu613zzVVSJXZ4Vw65aes2CrUfGuKsbRJ8rwKBqTC2xsGFzRgE2cJeQJWKnrdMBD5WAezmwXGQGS8B5M",
  "key29": "2dXv5and6tqLc7SnDqN9HNPk3GfWrwR5vGAdS2c3wC563WscrPXgcT13NYHmcyjBz44ZsdgtdMWTy3eCmbs23sxv",
  "key30": "w592n6JhgvnU1vm7JA1igKQdm6kbtqxc4dJq8XD8ey9tLTBj1ky5ebz4wb1SaknqQ9VVCXVgaWdLFvrBBa3cFu3",
  "key31": "9429TLbKmVAG5gMfVdxDXqCp4m7xohpjq9Fg8rqNaj6Euc6CN1cDqwrswPau7d4xJfjKhfSGdNUpG2A34Nu9dfM",
  "key32": "mieLq1n88sc5xctcFzwT6jLM2pRS3p7jckKgMc4oqGgVsbKJicyifUxYyGP6JwScTwH4Zb4BU6niqPg2PsuJGQ3",
  "key33": "5BVWXRTGGZwrFsiQvyYwhTdkx5YJ4rqWuw913ETZkCR4wT3UqXA2TBai6aYxF7LzhHwohKtGgieTAdb1UCpkoyVX",
  "key34": "34ZzFLkA6hA65v1bpDeLS3jM4fQq3RuaczqsNQZ7zXfhodxkbKyLpgapVrF3i8fVp25xQgG6UVnxjeXmoFp3ekCa",
  "key35": "4rjTVLtqrWBEhGQK6ReoSG9taRDoLTENzFdVSM3nMt3BZsJKGunCi6rqV9JyedcQhcC7DpGSNXx11D3FmZkBKzo2",
  "key36": "44tsejKv1LPVsXvSPqNZhWKrXhV4UXyNHqkfDRMBmg8AXBUziUJ6A4PXJra4Htcb3huN8nCY6yqVuE1MpeKEP9ah",
  "key37": "1kfJHedA2z8akELXSGYj2AXeJVoYc833gGLTeQgteUMRYipcMXwHN57xgYr5oRfEQsH3cbzH3KGqsiar7pata4D",
  "key38": "4n4awRMFRtfn5BKmg4gxKDGEvytj8egvyjRXNnJ2TGaFVWU5boLbT826Wjt96QoBK9XbUkZGNUHRMYdh4tAgomWk",
  "key39": "5m84MUAPhcrvqbhRursHMEcqN5tvfFz1BLCiA5Hjtz22yaAPHhg4uXNnbwAZBcjHDHomVQaQrgtiW2QbeJziw36P",
  "key40": "KKdQSEEoTzdpbxXhqsVmTSbPzUQ9tfjvL2huP75C5ncqHoGsRzkaGSgCJqC2aShVfKW9uUnGUQyJcEBrhP7BrUg",
  "key41": "4wuMowdorXXCFJfZaEivsow7quQTLywHHayvjFaFg9XNtwottJYbZJ78muuiE8vSAJoastqS1KRZWUTa5pKpXkk8",
  "key42": "321L6k5F8WXCaYAvQEYjYzQpg2z2mRpphozMB7kTtrfLqBEKtz3CVnDJEc8iGHavPAHQkEZj3pfZovTho4DP1dJJ",
  "key43": "JE898vMdWntzeXaCSLo1BhELg341E2oz7oVEKuY7A9UBbVhWRoUxWsnvYmmxLiGbgitmB5dPMkiWUcJt6uE915n",
  "key44": "Nza1XU8fWGyA8TnaqWYeqSS7eJtRL7kW7sDvaawnkSy5VsbcTKpkw6ZgCc7RXwHcrYZz1K7Jysq1DQBXXa664Xr",
  "key45": "61u3mX6SJ4VfHQoR9Dg1yN1tPzC3VxQ8v8murEtTAb2pLqoydJamuWTdJEtN5tBv8NTHMF38hjbEjMSb3RDu1XFX",
  "key46": "47Rg9ZpTPd1vz8aAFrFhhjKJ8zWpE5EN4dDCuceMbnthx46eGaH9HNdwvr7wcu9hoYqFj6FMdKFJJ1RmW3Wg2gEr",
  "key47": "n1ox4Va8HLJvnv5f3uaKbGCTvg3grzkEdTkeRVUCZiTsPZNBTu7qvfTAjzhRFyVVvj7o9yfZ7kk4kPg42RGWD1K",
  "key48": "2Y3CrG28QsC852W9yXgesLcSqhriRRV1uhqtiDHFuN9UbQgsjiiJZLbbCPExKJoHoMg3VX9rzpNzzfwGU1rYWuEt"
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
