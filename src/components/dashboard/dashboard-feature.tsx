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
    "3Xa5xTSxkWo2xXkz6fmLEjmMZsqwPsBV1xMDaUWvF3QBrGuBoqg6EFMiP7MYGBXxUz1pNZg2EcNGYbr7PkhBkVhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zbn3k4WTBKgMWjcHN3CNr9HBuudzaWHmQ2fsudwfwXfL2zC7QuUifYg98jci87G5Au3RjyqqkhguVjqhYrA9vwM",
  "key1": "XVKdxNkWx2QCXRGymDyRqAFYHzc4xbZkqJ3823u2MQRbnbJivcp3ciZMcVVFXMtkZcKKL8ypSZCTrJ4thVYwDzy",
  "key2": "2j6Kf4dT9ynju9ZSq9v8WrEB2BjhHQJTqBQ99iGCrp9N2Lwn85iv47vo1ZG1MdpwAaaP4vr8SFg8gDe8gRbGzium",
  "key3": "7xtiTWP61ewmLjYV9n53PX8CfNozDJiyMtRt7Dphdk2NiF6R8pSGss3U55Ge4Ez9UpQm7FDdMURzhe9mirmSWaF",
  "key4": "3BJW7oRgdDy5EC99pch7c4zbScwk37bgnam1KGQwDsCYKSAnL24dKWpnMH9K8xfEbRMm8C4DTRQZicH72cajQ58K",
  "key5": "4DTeyYi4NxsYc7uWBJideMwJ3kpovazmaukP4hWT25UJu9TqPMHp7XHmcLgWxAucumnZ96rTQD8uLQ2qAUSxb1yR",
  "key6": "4KhQy718WkEnoiwLfZujzts8fTfPPXMEv6poCWSdTJhRLijEqQfevB8KQW3TZnD7jtgohQsGjFq2MdSvk4KSCfv2",
  "key7": "gN7APDu4JYZExTqUpxTqm5a1NhztZKwkbtnfmUdLLCYsF1p8jeVVQBDHQXt5wy4PejzEbZNoWfHs8W27GLddBgG",
  "key8": "5rRe9pHcor4yuvCxoQ6WoD2r7zTYEzaML1iUxnFjxbuKs4Ge96w3ByFHhasYHPNBDQ2ynSgVCkLBUY4FgL5s492C",
  "key9": "id6RA7Az95Gjm8YuVtusV3bRRocp4NpRGQiYj7ceECpzUtDqwijFzJPWV57ErBXb3ZWqL5Pk7wmQWyphxZ87AWK",
  "key10": "3LLtRAZg4GcXMU4zr663SEGjSpyYjBLcavu2pzQpwWDroxErt88XJXHZBgtWFqoPePiC7cPnD5qDhyhWYtHYF4nZ",
  "key11": "5d9YkXwo8jijR1GY51gnQ4yXXoy6z2hjFyhHcH5p9Fcwi9YaRigN976BR1qYcJVSvtZkB2Qortis6RvWaf6yZDHN",
  "key12": "3W9TqQTamDBGXPatk2jMQ1gPRXX6Xg856fUTVxkT3scM24hpLtC286MY4VwFy8x8teW7sBgYMS3HDKTZPqQLtSQU",
  "key13": "4jwUUKh3DYmx4RsRiaoPXjkFdXBKVSiaWFWxzie7g2XfFDxAWcqY7AhCDF1nKn6ALhEkCLv5VYbh7wTPb8ArzEgu",
  "key14": "2qkiffsHRpkEj3e5ox9DbvkfCR7aW8RHuzLPVuJ1n67oyytKjmWWNvHXG8uEs6Zom8RdLCVMCup4YgeRemUq1R52",
  "key15": "4J6tNu3B44c2YKeKAp1XWcBfHcn1NrDArUwTQSyfe6sEM1uhp3NQSiXjp1JTfNPMHNhXAKBQeGczkhVe3poVnp85",
  "key16": "5GHjVmmwrmPwv6SPk1ZvHqjffJm3WA9iVdGkUepM4jaG5tD7pQn57aXaWH9wUbByFCc9nsDyq6iTUyni6oHZTAnA",
  "key17": "49nSapfkBEpdvbV8rMx6mWPHnojf8cXc14StMZfKm5NGnDyv7VyFsdLBZZromhTQkB2mC9MCHxLvc8F1d5n78tos",
  "key18": "vDUduX8ZRZzgXCPwF12PnLXGAsAYWS8A18cX1FTzYMLsTiRSzYTXt39ZdABt9BuFkSqE43phZivVY8KBUNenpR6",
  "key19": "3kRQ6qmnrPB1AtMcyim4TztPVu7gdg4KkqWUaZE3rRmgVb2nh8Y26Fuz5FqptaHMH35SDjK7gdCpQZwsgvfCgUoq",
  "key20": "2ammois8SA5qpDsuQNGifdvT1BCuJHkmgC73X562YQkXQs98s4GjZfocqKEswbHbnaC4uuARL1QhVxj5P2cexsQa",
  "key21": "6777vrySsjX9vLKJyJCCF6x7L2psEF3DKzpXxWspqvEyjKv1HRRCE3TEDtrL96FCzBB1Eaef5sD1JWU9MQ9VvPA",
  "key22": "XVptuFjiMRuJrAQqKisv3SKY2pvQzcHig9M8RrzZoVDqnCu8BVcktGdR6efAkVYMURojkWesD6ZmnmCsX2Mgcdy",
  "key23": "rayffYvUJbqoczsktLQYktEZPJ5rN4VyGsDcbyfPgKEP5YhTX2yzePyTcmntoqeUfUzUAWWDp7jQjUmKnRV6JCJ",
  "key24": "Jrk5N9fHAsKEpTb1kUpXcN7bvQCRHZRjkcXeLSFG6ayGtnhbHbVdiq7Pi9AVdms2GwRRpo8zXK4NG6YY9BuCsP3",
  "key25": "3n81uS5PxvqJHUuteDnDdPtdiFfx44JdYY9XeySvbaZ4sAtCC9sdZ527bfrEkLc9x9CbXewF4wAQKtoqH46fW24e",
  "key26": "3vZTaMnWMSjVKEibXz5BYAuH4rwUVRRqiqEBuLnPmd39vBDoak5G8EonsxYwaii14TDoWjLoo5oDQsUDibV3BRKK",
  "key27": "2eocCjK1BJn4wuvf7mLQX4hQDEibVWx6fhWCrj1KBVX1qABiRbXDw8xZrVxHZiyhNBAvCfUyhdQQdUxx3hHBy4BG",
  "key28": "23jrN3f2saJ2ohjxndkD9zAF9YQkAwBquYSeySe3rPv7AVgZSSC2K2ZEXN1jcMSRXCDERgWybnhYYZf3ePnwf4Ec",
  "key29": "VkrD3gs9SWzBtxMCRsWbXUuzVfsYUpf11ZzajaTnTEj8RX2mMcfP9pvqWxsX1ApSvPxExSuoUi8YP5G5aJwthj8",
  "key30": "3MHA1CgfbypqbiHi8xKdxTt3GLz5uwumiz55AhigQYuMU599vTpGTcofixrpTrkD2ZuhdbpccnzBNDyUmvbTtGac",
  "key31": "KqsCQyRAqSAv4B1PWE1pgnL5Fc9S5fUyX5P7jFxLfEjLZ5ppjyTnw72v41WCrAA29iVPgQH7oxtBeWAqY67kXoQ",
  "key32": "5UbRZqhRrA5aj1evnHTTcuRksm8eKmaDevsoiJvc3ss1ouAePxV1RPWYdcT6EYDGta2JU6k1tWtgx8ChTGnNqpUM",
  "key33": "2jL7u7wresgxK5aFwC7xRVafQQARJBayCs6bn2uMHBbCz4t236LXEcpLvp3cvkXox8g9nWjCba2ZWHRJPLrsvmD5",
  "key34": "413XTWhv4u3SnygARMy4q8KJ2FJZdXe1GY6nE4fggzHyoXPkfFPpAjra9kFkTsnf3Bj4RXBe5ThMaaJ3AGHfW6wj",
  "key35": "5VBqfSuULG14nqgS4o2uqoAmUXVosC57gx3VxcqdC3P4XTDLA5Mp3o3sZNoQx6BCcDAW8Z7MNkSrDAFEvJXxgVPw",
  "key36": "Qi8eYKTdEXAmaL4iV3WyextEX4zgWkFwrbmReggmdmQ1EC996bQt8t7N3kFzm2yis9xipYnoXCNANHTLsLRXREJ",
  "key37": "5zNdHqu3hzcjD9GE6kzuN4RkUZaXWAYRLh9q3U5yijAwWPatSDq5xVffmUzA8difcUeET29EctyY1uVvEHipz3GM",
  "key38": "5NvuTy95czQfV2deum1ZwjGfbxN5KFupBW29Wi1JyXeo3r26jZcWov34BHJM76JPdokB2rb2VoQGEoxhKPct91Yp",
  "key39": "4GJk3686bNpzFLhp5XA7XXJRsoJo3TSmLZUmCBqhzymM11SfcNPyoRJFCauASsCCqQK5hQGPgYEKmfeo8UTHatyu",
  "key40": "37t4gzBSbWAgQiuGvAA5ATwcCpW9Rq9qnXacrx22MRV8FeGSyLc3c18ET2jtiYfdJxF2aSfKemgWZK35LqfrPSdz",
  "key41": "5NsJ5sintQtTiV5YWLKBMzUiWSE5d4rUgC9NSb6dbRKe9MBzeVaJqZYFFeQHVyZmwZmZBCY18R3Sbs3y4wPLdj9a"
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
