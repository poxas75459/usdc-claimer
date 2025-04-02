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
    "2CUViKEGXoB6ssq5dKt69zbUu5WCeWswWkUD1MHajBzBxixskuaHjm5YSvSUw4cteKDedYXBzbQ1178SPbCDi3Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhyfEkjTxudT5tugzBwbFmUJ2EjUDeSzxdnaLArG4xpwSkv4boyg8Grp4nawmySxCghnXwKbBiuk78JHKanyGAv",
  "key1": "gFBXgvLTuLCjq71Uf9opTXPvd1rsee5f3EcCv96gdWbuyGVrLbKWB8Rs7jbGPzpmCTkGZGVwVR3brEnrcb2eq3V",
  "key2": "vCJkAW1b59LACJP6N8X2FCBvLgqkzyk7riZge4Nw3E6e3vSQiitCwtWi1NFfLNPwZfAVHoZepnW3qR71TFAHYTm",
  "key3": "3SkFBTcyBP8NHFZKy8z56ASg1ykvZBCtH2cXZTL5bYb8RNNkdXLBZeBGrg4iiCwfC3HF287eySEShE3SvKYVZXGE",
  "key4": "2i2Dcz76rboRqMDQQLRX6hg6NZAUCisAY6N9udwULvFm6ef77X2qJUu9KrVZdgnyRcAzpFgFkdmH9wQrKUX2uWxp",
  "key5": "hqkLT31wK7YD9gsj1oCKXo4d58v7hSk1snbErLkUN6UvokN8Wi29CNCbBbg91q95dztqdpMEDaiREUBaDUce7TW",
  "key6": "Fgn8vzajRjf9aomqv6LEnhyaBpecate2sbsdErbj7GZ42rRvzzeNvo8puEQTmJSkmeJVKC5KL5XFZ8X3oG5WgUi",
  "key7": "4Pc88YhHjffXewUbrZLDn97o7YZCgjRQez58krAERdWiu92LH179EJpiV356C4Viu8EPwtwoKcAkXUbXC1pC69YT",
  "key8": "3FEfDEtiLzXuS9Yjvgw87jN35iNqB5aFbd7mobgFppsF18qXhC6QD6spK13G8cXT2qWeUVbvkAuKmZTdknuEkJbe",
  "key9": "5sD1G6H9wkLFHzH7M89CS2SUR148zps5MqsHXVxtDr5Goejm14hbNTastb48eSf7zadGc662D1zLekKSJCD3Mvf1",
  "key10": "4nP5v5gPKzYAYpnvcJrzg9p6fNPtuVuoemohki4WxyWVwUSHX3uNFs7fny6tUHQRNDHKrhJoJj8RY24JSLov6oXP",
  "key11": "5KuGtvKUQbThnytCFaLEdFqdos2yUsYWiDCJSC8PpitFKVANLTTJBfWMBhVmffpF4j6ZQQJYocSCXZURc84YUZUV",
  "key12": "2dSj6Xacn1UQRMZCfKuRbg4GaG6upthUB9W6F3EZjKoViaEZ3Lquw3w2jas48g3PW5Ny5iTv5KhRgVyVaY3NK5EM",
  "key13": "2AtAwLD65Skd34ggmYKfySfnhQ7jeiKDT4xVSogSCyhsFebJRvd3M3NAWmU19CyT6q5Nr2qKWEdswiQLNeYMUdqf",
  "key14": "4nz7om8Re6pBWpdVbsM89hAcheX5oisToPYJdeYKSWFtgr3ooqGuxuJcxqjkUSj5FTfxHnvYJrjsXRwr5a2rPqzA",
  "key15": "5v1FHTjXZewhpThQaRpWRAuAD5MDAohMW6GYrvpgArczV7coiuo8qpqGNQUw5Q6RA3GDVKrTByMTvzktW4yZ7JMm",
  "key16": "453afHK8351oRdMjF8QG1Dupb4zsv4TBBkbhiA4LaQNCX6HUrqiUAfpPg8NVfVUpFDZpSMCwE1FNmsfht85xU8jo",
  "key17": "32Hk6quroQfaXZLGopS9CbRnoHgykutZ31tFoaPxXKWPcynzR48nFiD2hZ5hLM1AudZ4cvP8NezjepP58WEhLbCj",
  "key18": "2XnSgUD1vRbiufn83cxDCSLmkfYbiBXbwgoULhQvHiACYDxiaZTnbe2sjM63ATUarvupKqVnLpbwXv6aKunNXuJA",
  "key19": "5ZTD74LdkGnqVRyDF7Vh485tcEG7vqhzB9ZwmbsYi2VX1P9GSPn6ypDUhp6xS4AECNnD9yQyMLcgTWsNX7trz6gJ",
  "key20": "6LRmWbhjVDm6aqg3jogEJrmmFy41oSv4aNJPS3oW294NWBL6tiwwKAx6vD8JoTkQwxuQvWjCKsuX354yudn8dcu",
  "key21": "5hgPpfjeGjPGdbJKffv62SQBXL6x8bPpmYwcUAdY7yvCLKgQcnrnP1CktBQRCemJucHHD3hPk5Ld5Ks7NRnWKiUd",
  "key22": "25zMTgQQLZm3LgFrAzHVWya2UsEbemAn4xYctdBrfN1HEfBpwDpt36STfVQVnF4bK85sN5qrw91mjXevaEUd2ogT",
  "key23": "SR25jKqBosnfmq92cSiFFjCXFHWefJRsCKe1ydbcoX51qq4cAgn9MVr88vaYFeenX1sbadr78spYbbCKY451M3H",
  "key24": "5L5B1SkDw9mHfF1jSiJtPbQ73ZDxGAqfrup4nTmLUuGBVuhsNnTqSvYksVM2iChomD6Qc9VbufdZeKSYM6FHPWPA",
  "key25": "81ERStF2enrpqALXrTPMza9fpDb7cnLc9pgi3sTh1ukfuFSrvDWqAQFre4E9NPPgvj5sL4V7FG4vffSETMomgsn",
  "key26": "5eBxdqFKesRf7pp1Z9fn2yGdNLXxVpPHJJhqL6tq2cKhM2YmqtgzEtqLSxCv8ZnBtPkC9GRq8pJKYsrZn6LKfj82",
  "key27": "2zXZHhUicdPvK2uZndMQR3UYsNkfraxvg3TXEq8a5UGZH5Jy9k3mjEtX2ADSWbNjU7UPnrdvxkCnQRQCbg8UmGg7",
  "key28": "4GtwgBs4ffyGfYKTTFPQmLGMMMYPy63ctc1UmTbkaRmcXEY6hrf6eBXWuC9zaoR1M1q8naFgoh6AaeZUrkiL9vLG",
  "key29": "ex8GXSbk5z6Qtq1TZB5rtqrVbBJPrPqw9muCwucv1dUyDVjQEqWR7Uj5so3E3z48ukQ8mgnRLsPu59ChjzNA6gi",
  "key30": "3Uzt5AonSQC5xKnYAHNJYMYv9ZTbYkq6hSqEAwfkXZjLJKXBHaz8ARPtVnS9p2ZTgcmYRb8nuqdQ7qa9vVpiNGYD",
  "key31": "23zTYanTK3CvHFsFfRCfp5nwpRwrttVN667fdtASBHRuMe6TCngQWrcpojqX87yCMnjDnkvrXWCL5A3Jx1Up7pti",
  "key32": "4ipfbRLwmJxfVQDwaejPDdZzsvicJsQ7YRUXcLK1BxVhoPLWnC9kfnK5ZEazxLbaJDveAuhkxjwBytPztfTQ5nbi",
  "key33": "24zc9N6KhBxcenBea3RrgSRQHjsYWB8acyVMAMGCr6YuniEXCWb3CUX6acgh1pHuY3eU1Rc9KCT1MgWyGKCitUsC"
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
