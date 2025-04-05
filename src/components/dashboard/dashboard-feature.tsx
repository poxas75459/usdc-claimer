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
    "5yBtaXBo1Y1fMNdK6X6Yd54AU6e779UZssiWX3tMFdFbg76LtZz9uq9DfVX6jtfD1gVwrVbPM4wXUwGgVoFJeLBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcDD1YKpRdcbhxrtyHbgM8ije7CEuwTaWtK68wSyf1eMXvq8K7ozaGicjccMVD6sfsmbfUrZqQKZkV6DeTTbU7P",
  "key1": "3ZUdbRB1SQNfh1LdKo3FURzZY918QMsc1vQ9LXjee8e2R2289FRqdYPJGqNoBvowYuZReSbatavPhzn4ndrPSewV",
  "key2": "67Pj2rjPhDvhZFjDKwAsG7GbXSQQSToAQGWLXSqeQYEDigpnRXohsLA8xegyBzWwG9gqmtMrUT1Z1prPzzDZd3bx",
  "key3": "5NBDEb9yKPZLzkDBUQ3xSaRkiRnExZ7sEBbJvzBFTZauuBpQbbe3NkRmHnB6KYdEC9qfLzP9F4hqWrpeVQGwd1gw",
  "key4": "45ugV2iVSRdCoWvKAspbdNUAaKQegLU2CYNpDjLKTo9G6HuWiNTj2BdBjkjX4qEJpxpKMbvDZ92yMUaNFg59BaA4",
  "key5": "3Y4ZfKqY2QRBNK2Y8FWrfpiaM4yN6i749PhTkDzFsEDPinvr3gyuLjXrShhRMkeCzLR25LNoKbAwMyh8RPvqVBRQ",
  "key6": "6pgP9ZPbrPS1mPNdxEwe1sr7agcbu513JsB2FAxmG8MR3xrNWU122hLJFBknkYPJ8vBouJZXBxFEFayJeKFc3yt",
  "key7": "3mizfBxpyv5pGWh4JpWGYKPq4AccPqUd6jKLDkekN3LXurzgfdQmKYuTxwAJqnWkVR7tnfFGMKc1jdQv2DFr4zos",
  "key8": "2p64EfTypX54jW9Pw2po5QkwAZJMH3qxekr6AvtDv37nvKbqckXy4u92GeagiRsBmXv8mmfhZwULRUXhVQLux9ZB",
  "key9": "2781GfgQoxsLWuUEw5SvVesgg3Dha8TJ8HduX2BQjp7FbieN4ed7KJ62N5zfBKz9h5cRW8ac2YLTay7nTZEL9GDH",
  "key10": "923PPsup9upFSrn2gzScX1zWnBFQTgxyaNNPsGE6XrTEvpGao1Fhjmnym8goQsBcmcU6C6Twp7pfDMcDGenqMz8",
  "key11": "2ETAWykGEdfzcxioUr4vT3fR844pM7L5TMNW9oHDoi8cn3aHpT1jBf4tA6EsfJkQVQ3itGM1NzWCPqPrzdPaLgMF",
  "key12": "cRxz6Nu9kVprY9FfYjnWUykctyoVFTdPPwCTnaGSNKNkMGP4dRb5WryVH4WzrQ9YMyTZGT4ycTSttQK3jWbSrno",
  "key13": "3vRXLN2PdDTScShsurVtnJjUEUuqeosYBLCxvE5rh5niN3LmTLsTrrSt26n7HH2EhWXKBp3G7qMCvNSpQGuyqjU8",
  "key14": "vBfBTQ6HAnjuHsPmphyxeXfa38t9Y4hk6AQgnaN5ch8FikzejfDSfq4FmHp5hU9gAEgaQTM5YgTaJ7idDe3weLM",
  "key15": "5efBTd5gkVMtSnDNLZpsDEkK2SgdHXpj1CYh2mKLRt6McDLPFeHyUZPpsWb4H6XUKxm2XevYwpWwzbLDH3rLLnKJ",
  "key16": "x3uiusfeaFMZitXxzkqGR5Ue94MWnLKeUZVvXFJX79USxRYp6WvxteA2Tr858eXz9NtMLAXqXZUUauz2WQrLGHj",
  "key17": "AYfBTvLFYTpRDLuAYFZ2NtYeqnYx9WKhNMFrGpggesfXnKTedE7rix8EpBGtqVLuMqDFVQ3w5MpTG8SsAjbzQ8s",
  "key18": "3gCsLAG9QZVP6o274QgbeJL746t4txmG8Zms2VdPb9dFTYHRpvpKcbVECMy6RyRPeJtRKmX3imto2h5rxSktGKAY",
  "key19": "27kga4hAw4Hjp7icAM3FSe2RgNnNmoJTRQG4vP7T9CYDa4prGDBDb4CqdfwGfVGyAJHAUPq4tyMdQi86oMvPUC1C",
  "key20": "2Ay7FfsD5UC4DvFb8CQWakLxQhGHGbifDbucS6DdH1SZRhmSAnf9WLuR4VjhTL8VncCfVJMob7J3nqZP6SJvgjmy",
  "key21": "3Rf1Le2eggDMSYdVJVKv324GE7NatB5G5Nc22cyNXLSgdKeRpSyGfJAd8AqJWPNGPbMFPSMYJSNZaC8QnVaywwUf",
  "key22": "339iaHFSqH8bfSHSbqj3z7DEKX7a19tBFiqgRRYHZUxTCXZd6ua1qJ9UZhgPrgbRGV6JVT9vjHvfaVQ1t4hDh9jc",
  "key23": "38Ej76SYqSfWaaKiXngBPYzaaoXBwBaKZ62xY971aHZvD2L7R2Wv4hoz1W6gfe38nfMpBcjp5rtCnWgU4wxDR1JC",
  "key24": "4tSe9dnZdRWoVYTVsgUn3w1VNRjXahSYvjKhGxG5adg4nE4zJqJPGqwfCbPxkRapJxau9KgHWGnpSgxYSf64Xw9o",
  "key25": "4gtRQ8os8HNRRPSPcxbCk7S4AaL6TDQe7KRArDpsT4zZbc7qKbWd28q22fx318XjapeNdizDdgYfQzZvnC2kKduJ",
  "key26": "2AZTUa5BqTEDzs88LenUA8giVy9asg2c75EtaHLWoY6SmyihUkviKouVWNJwtEPYRxBVhV6jXF49NkXstcxbnZtk",
  "key27": "LhTvBRrXXiP1z3d7stj9gHPkanP2mgijMhintnM8MbD6HNLGTXdYCMz6eLLTcnshga4o1Bd9GB9NKUWbad1vVxn",
  "key28": "5YVUTGcyg9T6gEjxtPd3SpF6wsp33rY1DkjrZqyHDgumXW6rZdKJbnBYzsQSmtELCEf6kdPWATGjnqjP9wHdxsRk",
  "key29": "5XzNSngBXg9yCuu4ZMx7mGMAnQzz8GYX7g8z8Em8NpJXW3zKh7yHDkxdxP2qYBJwgUZTyxQfSr5Ta43ZigFpDa6y",
  "key30": "aAi6TDDzo2UrajQDL99ujD315NUsMnipDuA5DnS2k79F5b2WfqF3njiRMeoNj3RxVKwprCNnfNNo8j6U4b3HwpC",
  "key31": "2hq4h8hJA2gcCPcEaqKDnFTK8snMUL3XQxQFxTtVHxB8ijUDf58NZpwfDFTbskzxgiTMabT3d4AgNDDsRRfD2c5t",
  "key32": "3aE9sgFf8Bi9yhyryum1RkCfJkuSPiS3k43ee6YXJzLb3MsQAFPXWZcUHnvk6LC1rWt8yhnQ15LBMN6pmkWWLEYx",
  "key33": "NqJ36wcya1qDbePuDVkV87DwXEwCoBahtfccxtWjRAHhkXphykdiFqhjtZE1xWYWnCYZgiLb31L7pdYuyQAWbPN",
  "key34": "5o8ermMsi8d1QyggC1PCnLWXqXXz1MKtPp5vWnqFBhjtYSj1LznX2DRGDgN5ryrJmi4REDdZfRWnmgNcoop72CnD",
  "key35": "4eW74373EuATtT9R4ie9nvSXwkemAbG342jyGg1WPw6sz8j5R7Fa4YLoFQta5BgvH9DZ2nNZ2gagRxwAFcUCGme",
  "key36": "3gqACsKwb5VEScLgyLLkTfk4zrsFfnQGmDyo2VJpZhNHzS1nb4vJW8vjCpzmhNzyuA2o1jC95a8Li1TVg5TZgNCd",
  "key37": "2Zm8uzCMzdZYP1LhQoP5m9aWR7wUVjb2V4ChtcLQiTXZFLnqg11LCgpGXbnsy2eBXoY5DJDvwGW9sxk3Jr1uc5bC",
  "key38": "59WszsqtYuFh6YucaDhZ3XEksb9s1vHouaGJCraaK3SynPVUXwhaM5roKjtQut8H8nnqRKLmguCDZQoGDd17F2zS",
  "key39": "43YQXPhmXyoREuDpcFp3F2G72JwCZe5hg6hvgLm28P83SgFuk5HdLcqx8b3cv4ZCsSUVeT37eY74uSETUm3goYqW",
  "key40": "5GJFwEoWBB5KffRYGK27Ea4rrh9heeUqVe54EmJTBGgNm24itujXiweB6GeS9ewnSP2VpDuTMBg5o9FWUxpBVATm",
  "key41": "2xby4mHQ6vdc7D4gq5aH1KUE51U9hQ3QrDRCde44iAjXRgCWHjiJ6ffhtmc5yCFkkLU9HJF7Mkj1PM8ppou36NMd",
  "key42": "4XQGgYwfVUyCQjEUXrXbWUqVQHLKFzydrYTgzcJXkwazS3dsJFxAXk66Q91Ac2NZd6kamNLxekTzW3DZepiHEfwj",
  "key43": "BDATmq73Ea4VfXAUpUuzyt6XkmWS1E82ESKXQJEnJ4sy6hjAFZibpTMuPpy35zsxTSi6b6eGVp5SnJ952BRd55P",
  "key44": "3TgaLkt1MruDvSApqsDGgUGAbYjYJzaQ4CZSM5ZV2jQSJtdvHZ86YufSFKdguVU6mNEAiGXQqfGkdUQ8KwsEC2K6",
  "key45": "RQo9EKYkiAiJWy8ZZe5iyeYJjRsPcAHrtJdrZwhHn2WDECcMXCdPkA5HWG46Xz34xyHX8s1UopJVQm8Wm3pb3WZ",
  "key46": "3bGgHdv2DjXkvnbGH7CU1nTYn5Ke6Ff25DwtJTqvKJU8wp4i1Wpd9RQfVpWByfe4B5MrBVYU2XzWTUpGd6zFv3K7",
  "key47": "5VzStQQcjozN7GPK6psyw3kgufkV1S7BHDYCcVzP3RabFbfgpVGfz9V2GQW7JYGmu6WpEZf38e3uCYfYsJbiAQpp"
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
