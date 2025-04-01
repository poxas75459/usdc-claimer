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
    "3HzSfLsZeW99g33oADPXG7PRcwfnoryi9GLmnJsqjp2pHN1zqzxb9b7yKzbWrPFbNdDygw55v3DGGX9iG5GW4LLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AeMqp5i3ktQmqJykvE7e3sQdWhsKj4NJC4RgD3hnWX9q4NpmTSGJ377qYYFzTXhWXEhkaycMVYWJ5HAjiAdA3VQ",
  "key1": "4iBypEeeGiQgXT7dPmnKimJXLabSXfSKCWpqdk1BHEM2opXN4VTUipnrrFwZJryWpScwmA9dsuzemTVpScwVzTXV",
  "key2": "4CEkFahoGBgS8ixRqZMp3fjqERRx3ryFPH5nsmpApaoyhgZcFgD3JbpMhBTe6uzBPX3TsJiKkjTc7yaYHMbDPaCw",
  "key3": "2NHVdjhGmyaD2ekbXz689hbkUdbySToafVSg3pEBNbH6egcPFCURPo1tEcCsuLPyL5bgMFCP3Dj6uh2kPTKeUSwa",
  "key4": "3fvKBzVHjexKqQ5b7cjeLzJsPHgcMM4TZeyb8vGrYouHbXAuBRiQfUpdufGDakp8juaDpdPfwhR4htc4kRVP6ZKj",
  "key5": "2cy4JJUhnPT6ZviJZFU2RTHEidFSr25msWWzHmruS9pCZVJHenys1MQF8Q7ucg7Y5kaZrs9KWbrSRjbVKavBMSXh",
  "key6": "4nSf6sork3f2kWgPzjtnQaAeRMt3uKESaUKZa9fAAstJ8sXU5DwfhZLiKu5sawhW2bFtyKPzAiFJaY4EsA5RMtce",
  "key7": "5su5GTJod3M6MbCFLFpvTTFtmGSqNeGQYzo4nMk9U5JuDhNxf76bqamX3q1VKz9ZQH1duvRwU3oT2aGdkpeuivE6",
  "key8": "CCY9w6zpsNcpzjv34HFjiRq5xL4n67esYFtWxxeXRerveFPwCnoVEwjL4xjT1qzyFSKwmXFNHtS39jScu9q32cv",
  "key9": "aS49ityv6iWepvhky8iRfNnsD39dUN5Vp3oiV7p2MRo7VVkQCud8YYe29mtvV5xGqV7jRDEHBP8ZixAg46dsuUM",
  "key10": "4ykohgbNNRc2ZD35UY4HDVkLnFvFAhYnhjK4ABU3akzBcy15CDG7ouNyyJ7hG4A3pAnsC6YoM3uk1RgEpJuxCobQ",
  "key11": "3M659K6d4X63r2m9GKKAw7zuHX8wd9c6SriCPnQJQkspVJg2oxiTioPk7aGZZdZxxaMUZwWPumB4sJtdonkiqBA1",
  "key12": "4pGjA4wFqwhrzhTZzLQGs8jfLsYPijCa2R4ywYgioiYHUpN91uZaY47Jz5XhhuUtGJR72aN7vgrXpmgX6AcK8VhX",
  "key13": "63BGBSiTixUfcc3zGa8uMof4r8txuAyKuWWos8M9sryyjkX9QchzqzrV5owCGVBaZfyM2GLEZ6vunAAVSuCmZfAj",
  "key14": "4LJBPteJ11A49ahgmF9UPAm9Yp3WZWrLJU8YVogYjYHJkmwP23ZsvDyKiAKRsEzx9zTHAn88NULAGRXLphzS5sRr",
  "key15": "4CaRcjZ7Lz4YYyv72iv5mH484KNh3cQcUAyJWHNair7tGo1xd7Ez8cBaWecZSw5i37QAQNLUgirZ4VcejoQ39yzW",
  "key16": "5TioqYikNk5rubXqGKPzkJEbHizEedffZi3cYnnetmvSw9MRQU4rcZ8JdQRN7kd5AchpUC2cwBwMz38hJhmSNVNQ",
  "key17": "4erPEQTvPeQchUjq7AMVL61ub8MZhhXtK3ys63HCivndHftX2maZLNnH9DVpPtkvzJJt2JhShfkhRrVpfAfDskuU",
  "key18": "3bYafEgeRhGcTZVVeQFdVe56UyqQk8KBo6K7nUDeQCQTR63pnvqJj7sQZbVYKsdDBhYbHFSF3JGJx9DFnyZKM2Vc",
  "key19": "3HVkBGo7nZNyeRfVZKCW81QyPWtx5EHRxMvYA18XpPdGSmgvmHEhozYmUxzG7JqtCpJykU6BL6pKVummDLxyvPNs",
  "key20": "4gikFxsPFUn1KHsrdckwC49CLWtkYq6UeSVJJWW1mVS4zB8HmQ9GLCgXsHwJQ22SnHJXhqL9nB5U7BEvLGga7xfB",
  "key21": "5DSr8hFsuiGwXvMxpfwXH8jW3iESyguXkGdUDrPWJ2wZxE2ZdQecRDfqSxFwhbFMQXc17JuLPtFyKnSbt66DLjtZ",
  "key22": "5szDC1nYEgCGnAnyFJt7T27zSgT28LFNTP2RXVk6AJ1GU7FirvGFZqgnjr4ifnuEtFjqrroUx9LR79gaAxntJQhH",
  "key23": "2nq3ABSpdu6BrpWxVPi4EG2PqgZFnxPigf8rsDFvQhugNFQTjYqBtkNDqC6CK1zbFbSHwRxtKj6n21C8vpS6yD5G",
  "key24": "5hoWpo4fyJG225nAUvrpkcRb2L42NfLA557MqSKt37gibLN5HRgjLE6wGQJCK2jYz5JmFCRfMeuq4mnqGvZTx57T",
  "key25": "5S7g2mcgLbqCWCY2zTZGRb9Zv27SJ3GmNfGJbFDQFrWPJmgR1AKjx5CDJV2XmftFqp65vmC1NnWsnSkPMZmyK4Fd",
  "key26": "3vZGhfXi5xPxMg194NKoPu4HFWK7h6ZqbMtMi7uDwu8Ys71xb7esqRAMGF49htvg1mBqBG875j3P41pRkRJj1hoY",
  "key27": "dWP2YbBBHNB1gyVrxDNxJGZjgyiW41TxABtD5YuZTbcG6FmzKVanB3zmqp9iSa6UZDBe7uMFRbuZjUXWdjaDxyD",
  "key28": "2YpiBCLGa1DfEWrZrCzk8zafFUUDY9FAt54UvSdveJkL5w8nzVScHruJgvEp5BSZFtxzkcNUv79Ce6K2wxaKFBWL",
  "key29": "4nsqx7o3L3dAUNuqSgA2GJJCKPxXryCf6uz9NScCVtpxeMV1fv4DqtjotFAfQd2fhwyDSG8ZTatEAcg3RmvauULw",
  "key30": "2GwCg7TYfVaBY33rx3rmm5xqdczJnak8BdjLzaG8xLs1Ga7euTP2EXt1wtqUKGTSrxajFpdcRgV8uEUbTth631v5",
  "key31": "5FrcitP5ZeXzjJCBazv3vmHX47W7GryBvuGjYfaHk9DwnFfrKs8LByoNkMRbmq9dn2vv4JwKibXj7gBru4eKHbXa",
  "key32": "2SUHYq6aZ9HG34aAruUkQQrEav8PdiUHnxKHuGrdfbPXvqvCD486NMFzPqg1BRJ2BnagNmE7usmP1hGw12DecHbo",
  "key33": "51nmRCWgzYx7cbMMZWoohfhwAd6N9HQiuam3DCaMbF8oC1H11kkifyADqVsZCxiwNev1bG1Fy22jwtfJyHVZvp93",
  "key34": "53BMQgw97aftMtMvXvRCriAh42FswT6gxwp96SXY8rG7uPrjSfJNk81GBSHR16GTnC3kKKjAdcWuL3yZjKVBH8PB",
  "key35": "4iaLEs9LjgucbJUBCHBz4xRhPe1zsTzjRc56f1X2WmgbQWRx3ttSBu1iy2LhacpuxczWAFQVSp1fqnfqezHknhhw",
  "key36": "2B9tjsKSLGVjeFEubZg3dh1ZFzwYm4H3RH9XTgQBCZfFP79mzg8UtVH8HNMXbX13whufEbo6YPBfYfHoV9cFsrPo",
  "key37": "4BVtWNWTTNV69yWuNgaXy1HPMh7vnfYEhW8NdeLVqqiDgoNdvYqiks4xkUiNVEJCJq7m79XKmN2uGus4EBzQpTTm",
  "key38": "3G2UP6BY7XR3hLuh7SiqoLvpxiKudWgYyC3oqnSVXCqwbNqBS6cRDMpfoCwCsabu19jVQAyiJW5RLjHgG5UnbvSA",
  "key39": "2eWdCh9xRc2HMcSyNgXN955EDf8ksGDnY1D5inwNQjc2mSQxs1A3gYBrvJBVkHZqGdrW4Vu3BojndMjT46MuuZFz",
  "key40": "mprSdsbh4bKg7GJaq1Jvj8ofnAz19JexKHBKG7H2Cnpw12SFTXpdkSPoM6P8oDUNAZwXwQjU3wjQHFcHuzWennA",
  "key41": "3sVtN4PtuXUYJvCt2jvnzYv4UDbSGg96DkC7Ha4eanydPvGPYNeYz4DoW8b751EAjoBoBpT5tyvpqNr22PAksydM"
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
