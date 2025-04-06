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
    "3ZtxotQo7mHWtqiNLk2P2EyjBHjMgAjpzFZCMagGWLRTKo91AbbvDANy2d5KrBdTdFScRMhAYv8x1snbJ221GN4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKiPS839NEtZWxiZ2Hc5NpJeWunqP2Z27j2Eh3bzWRsCsoqZZNnVGmE398Wr2JDnQmdM2VAx4uZCRK5kRXxuT5o",
  "key1": "5UzPehDQtMsBLARktA4T6b7kKxnhA4cR4rzkqt9qUZnHgZeXWHNLP4zFHfRQ42yTkWYi3kFuewdCwU86cfGc18HA",
  "key2": "2HzRXxTWkMWMdo5GuBP6SD1gwqtNckxFCT3PpgdDzB53fVasuY9YAUHHPQWY43BWHm8jehdpHJgqabZzqh8hw2Y7",
  "key3": "5iYoj9JVkZve8WdtibXigA6jQHkH1cp3aEE35U1LeDFUstD6nm6Le1azYdDZP2wJvy4jyn8JPm8mYDfkYysuMAh2",
  "key4": "QYqftGRwaXMspbYs1n9xRYQLppW6XcTyJPjo8Cmi2sTK7VRGP3FPSSxWp1stLp3aqZv1M4o3bsgbB2m4Ayfma8T",
  "key5": "3QG6pG2AfE1NLFrtJdGGZm6pHwHs68SW1aKRMLyLuA8mbaDGYnVhJqjMVD4TZyB27MeGCCvrh6ACYarhny4EawEq",
  "key6": "5fSu46Mem5FFpZv11jAupwPPGh77SySfXi9TnCdQh67YSDq3Ca7zorXSjKbrPKmcAYKUzcvCBfYhWJaWj9VpoDxb",
  "key7": "2e31sNhUVDRVi1aVgmjg9E2YeuCBStbRP2HQCWeHjGMwwRZLn5Bg6QUGdyTdpqR1BmDsnbqbyrYN64j2PXcmCJyG",
  "key8": "4Pfx5ABLFdPp2HtJkR7mEcSSScFrSCpvfh6Hmw49kTsLkDsj5U8fbKmi84qDpp4uvQqA7u3rB7VNVSkXJRVnfaXS",
  "key9": "2qw5rNyDRX3vKnGXHggPQ2dRqb8W2mSupmhVvpRXpJW63pCdBrUfa5cs7qBpJebWfD3WpyzK5oSFPU5aDmoQ3NYC",
  "key10": "4TYYTbwyGgtcboFgRvkZKHgy4Phg6fhd7pExSC6hp2UEyBGpsvdAwFMKCE8kJBhi3sMvaHYYST9LQeLQZQvxNfXF",
  "key11": "5WzQBHXsk7noCumjrjBPHuasEnmkXvnskv47QX6svAKAAr9SMsGDwyw49jBjrsBBVAqMmg4jnUgRr5m4RpUykauz",
  "key12": "3YZSby96yWhuWvNBRRbJwiqSsUw2k2kbot4e7MzRaxyGiyCogoVRDTRjjny5s92rk4Rc4TwrKJctKrv5Aek4pjr8",
  "key13": "4zZbizXyAn6qAQdRP4BEBLzXe8SQHVQP2JPgHq8cTecK1MbLE3HJ2ZwW6etENwa4wRGrXSG3QJ8pegQgmVteWc8S",
  "key14": "zT9iHtjWtKHSHtTgGYAUKbtGMJ72BsChwiZCBy6dyDSdp6jEbqznd8uqbokF7v6J5ndLvty4zVUazoHEUAKWHBf",
  "key15": "67SdaHPk5vfpCn8MBhJ6KAvz7jEMvwS91GyscqXByZ2wwTj2zNsiBmi7ucbKhsyjPNc7YuquyL6K4uvhgPuVWZYo",
  "key16": "3Ebhz3kCYn4MJ5Behz7YjpTPkkvJLQgYoMMSCpfCQTe6B59RTUEqxgTC8psj8Dgp7ShRZvYw5SDhJiiw1XRMYsLs",
  "key17": "3APoseTp1g7a6c9yU5MXUCuA4Tr7EkCiHyNtiZriv2W7d2pEQs2sH4qzHJUarULQZaR3iYFDFs72JzvseYaBwLiz",
  "key18": "3QXAyFyaZ6LruUWYVEioHgri76y21eps3hvHHDthcck6Ho94oX9ZBdb9ha18W44z1AWD8hVF9sP23M1oR9758pSx",
  "key19": "4f7iPAx8xW67inWTs4zzV3ogQtWcAVyS5NZa9qFCvfQ3CF1dEKgSejawez6QWkSqr5g5BmLkCGLWN3WiYDqEkke",
  "key20": "2qsVNWNBgnBZVC1oGsr7LCb93WP7BcuLjLM62eDy2noKKAKJsFa625YWrrCGXYAy6JmJJTCCBnzxrCSd4rFHaC3j",
  "key21": "3qrsjdsxM8NWoadPH36jtJDhMTMUydd7qzccv6y1kgf7BcotC4zim8m8ZGXDNtm83uMargvCDV3f3mhkEzdo4Nrk",
  "key22": "4YDuQ4ysDuDvLbXTFs6Cw3B6cfUcUaHi7ztgxTnvxejRBQtJykyUvdskcercbcJunZcZXy8BxGofzbVLAPf6jj3e",
  "key23": "RD4LAJeEfH3hqkJK6exZ8rtWohyjGyUsDvvV9j77va4rbb4DvnoHNa13UNSEWZuFsJjj1akYHXXRtviw5R6Leqh",
  "key24": "49VCxRBBagj4WaeJTJgZUUWNvtTVfQVuZdNZQUbJfv4hW8YEs3Deo6VX1HYiid26ubJKDepLi9p4fak5wpMP3GN7",
  "key25": "4jUJXqTTPCKj82ZvWBfqWART2CdUvqiEinSJGadaTPCcoaF7u68WPMK4ZpZcL97gvaS1GdcqgS8ZZDbefqfPKwWu",
  "key26": "45pWzLSEyVDJWsc5VqhifMviykqR7q4aS8aMgjk1u8F3U9a61XvJ1LxjA5mrZsaJHzecCaoXi3cV4c5cKrRY5SF",
  "key27": "66cTGNaxQao8itcnQh1ZJi9HPFS9hQ5bBcNYA9ZCndbTHVfHDQB1dh8XmRSABTcSujNCuH6yjJTXD4efyEuJey89",
  "key28": "22ynyMNiNH5q7F8VZtEAsjyszF6TZh4XsxrRRBJpF1Xk6k5nmWAYdm2ZbLfhCJX6xJYgSN8fLdLi23PRobhJyfnz",
  "key29": "XobJYcZu6WEYQkiS7iD1hmhFk3BrxCprGWNbHrhjgbKHwXQHrZeRWRrXnapGAhk3XmfTxhLYzr7czEdHQpFvtgx",
  "key30": "BD1fUFcXF2SHgyUZMibEqAqs7C2uRxVoMdxqvBCV1pNVDtr6Wty3GLPeDMwSttXhjba2SNeD8J8QRVC6kpB66sX",
  "key31": "21ghcoq48cPt3awPN5CPzYydB11ojfE75oha1ZScQic8wmATiKo2h1hiH3mN2Qqh16SgXnwhrL9g4sgueDFS14M8",
  "key32": "4JRa8z8yR6v2jNqqUD3GotkAQ6kGFYQG9M6sjeufvZc6JD9HawGbxSrit7nCeMr26hzjxLnKQQSpM4VSXgML9VJp",
  "key33": "2A8LLZXPuBT9ithSYeAwwyHFkWt3nz8QUZdGs5u8WrA4ct9ytWHJ2zoHpFTLQ2LhfrP33Qgdt8g1q5QzwqWLmKCa",
  "key34": "BYZoU8UfFLReyVA2eF63Ri9U9VWmKhKwBJBBSHWvLJtJFMqFepnZLTumCEyDN5RvTCfh1p5iQiAGrqs5B3GeZJ8",
  "key35": "25krQKWAKNykVnvuqtAQabUSX6SUJLwHvELMUAZyCpLrSKGcQhJpM6GyxHTYuePQB1n5nBRS4m9H2PmQyivNXTcF",
  "key36": "4f4E1J2hNoFoqXg8yYKoGmB8P2Ajo4NEyehMNGWAwN2vRxmSUTqAbbU8fZxb96AuBfuozHH4vRSxmnpEzkuB8R2d",
  "key37": "AtRV6NdPb7QdXjzHby9MM4CnreYUxreSXPgzzjqS9XQCmsCo7mztc43zw92E3BKU4RfHVVpEnWvSwkVm9jwW4Tj",
  "key38": "4KsnPkmTV6U2FubTLuUCAZbRQXPm3jRndtS2j9FYM3Vvz2oBXsrsMv15hXX9cznbEm9toAsP8UbD5CeiiXddjWVZ",
  "key39": "5Sx1NE48M5JqPQiXyLam1eHUBkd2SKStczBYHQ2SKVmhXjYuE3TycAWmgDZ2qNQbL7hSSjTztAhC7rCytBjx6y68",
  "key40": "4StgE68Hr2ZducY52Yrc7bmXFnJJUxVSLJdXPLk4sepqH2aAKAmuEx19YN1pF7VHQGN3XZtZVpCjYfnnf588HwJh",
  "key41": "4aPgcsMhHv69NTNyoj22hdbbKT1hGDCsKGkZPrhq2BHSfwn1wAFjgRP43Zh7XKiyVus2zZL9ukwPv2kWqvj8Jspw"
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
