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
    "5KMen33VstxfbJAGVJJXktUiPi22jkTDSxoQemxxQfBXcYRN83Rp5NHtfXAifnvHiJTomLdPHRqMnRrgicnwJP28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAMdTY6TeU1EJnuL6dHqqkkznhkRnfvP2pfFCY76UkdpFTmuDtSMQycBHLosYT5KHCdbR24WpnErfdnZ1H5bVZw",
  "key1": "23owSd967JgSCyTix99owxgTFGupJei1YSH6Ch2n5gq7wP3BgZT4Mf83ZP6kh8bi5Ap91nUEpHxi5ubyKWuTRQMd",
  "key2": "2F91tMznoZAWX5bWCi8CRy9imzsEBysnGoEia3xfG5eCb4M5u9b5XCtLyZmSAVD1jTVbmTRs3rdvtbqr5LXRMuWf",
  "key3": "2g9jyrc2m7yQcaCnyWgesc9meC8noHSgnGyUmr5wYX2DZPNjCMdyvbKyidfGWD8KyHLYFs7Rox1q2nDRrDVgTRcS",
  "key4": "4ZTEHLSkt9twCo1sAUQa4p6vQzCDi5u6ZFAv2Du3r1SSYBuvKMHmKmN9UnF2vfJotLjftjWMPxKYzZjV2Ay56LtL",
  "key5": "5EqjgufjNsbEvcqjH62SvJPJMpFKkvbiVzDTGWZhFSNNLsmEfWz3CQ1U1h3nQwYKNFZ3y9YYTps6PbqNk1Uiumr3",
  "key6": "GtH4NkqvxuvnayirZGwSmp3cwAz8mwbzzdsJU3z9bjNW1xXNXh6KKDDKhboNCK2bmJDrv76ZVj7NeNRenhS6YNX",
  "key7": "4W36CdJR1oxcLXfsMyJ1dAETy8MeUPyBgHECvDyxYXr86eqKmvxcycWxigT1aMZq2rJAPxHhqUUFhmm6CqksAAGV",
  "key8": "3RzzxxufHcViQuq5mjeJNS9Ej7pkheSgY5DasRPixskp2fM9bBpT4UPzZhSBtbGCyPzMyuuKXwQY7v8VzN3ZTb8w",
  "key9": "4YRguhGxobHt4bz1JoiecKYHqaEeAkFV8Scw6H5tuNgRNnfVR3Vtiux3SH9cFtBFnySkXWkSPxSzpXyjnSdDEB5u",
  "key10": "3pF1LjTT942VEzichb7qoa4Cmh8Qgu8gJAqEEViUzvbvEa8pHf5X3EWVgWe8PgHtq4noxciGLkwmg6iEAgaL4FNg",
  "key11": "3WhEJya2295VvHnbeegdwBJ12E1qQUuZsaQV1TAztjzpSJkby7TsUo9mS62Jyjwi2w5PNSGBwzNZjTcpBS6c3cno",
  "key12": "3zBcAEKBtCde8PP3MXFnLJGLrtkwydeGCtFidygm5tthuszqvoydzjZU2EKskRQTC3uaaQE73STSAGd6vhPn8qs9",
  "key13": "FcxdwjNAC8Cstt5mVjuxVzBf4Qa3KpPhguKt6YR8QCCgvsF7RxqarTU86xpRNS9zXCVnSQfgmQM4yuuzKzQE4po",
  "key14": "2icADM1eySzF1mQ7tqipTrSrBKz9dA3YdJxHsxE7DEs83bmWszoqmt8wuJyPz7Hqea9cfga6begiXB7JEf8NduPz",
  "key15": "2iboN6gQScZw1fP2u4qqa3NFH9thUpvBTSUo84sqpL3TBBGbbUhdvQEP8UV8PX2KmjTsNyrBqZoZQjsGD8zsToeR",
  "key16": "yc9bAmnvSzjYimxW8KsFwtM2aZrbev6M7yAcmrxKX2C374XK9coyVwDhHBajQMWFq558gktyEX1mQBCpB8AhVjH",
  "key17": "4JSmeSQqwbUSSddw652LUPM16mLVhQZ1tTdMd2oQ4oaysxxKxe3u6EhVvw985NPnPQcnaBStdBMAkbHB2GFPXdLo",
  "key18": "V91crxXdyZZ45Jy6tTxP3qqMyDHFmQGLZ7gPuGB75exTUJQUu8YTD8X7JpHhPug5yqUCFZAPvKJeU5SgB48qQkT",
  "key19": "4chnxr1gSXs3A5JaQLYZj42VaycmEjkQmVnQyxBC9WFAUmPsTBh7xa2gVxymvUAhtuaXgyKo1nXfEqLPXzvE6RC2",
  "key20": "61vgZiWp7Puwc9rUVFVB4mi4X3vMrbKDkpPzE9KCif2Atp6ECGftWpcU2c4GWW8D8aaG2NHmcd81TtKSyaYKX9Rv",
  "key21": "28KExPBa7uGC4sMqXo1ZDsH3TgXGfik8iJQyKuqC4r1bL6gGFxyVf761odkc6TJvG5cy7RunwbAHPZhqT2zoZY6N",
  "key22": "3QKp2oaD6aBqhHmt3NUZeamfrJtstykfGDxys2SwwFJUShwMG8L9iaCa6zyM2Bbw7fnxRWTR6oWZ1QTk9Toopo8p",
  "key23": "5JWx5mUrbqCu8AUX16WizFVaDzuj4V6sUkcU7d3Vty5YAVj7WhwWwtpBbiXUahPFPEdzMrutpWBruAoGDmVSw1HY",
  "key24": "3yf8UHPVwiPZfWsifZoYXm6Nf2SyDSS2nwzPug91Q34sbcoSJ4wvh1a2qLp95QwiqZUj8KbVUTJX2MZcuuo7WbGB",
  "key25": "3rtcy4TEWzHLLvyB6f6N2fqTcjV6ZyWKvF92XMYamKGs5eDGjdwXJZAn8pdj3vTw1PmGwW64LLj4tiwbgZsLqFAu",
  "key26": "65ZbrVTKfi3wMoDCgFKk6vJ8kakZyGUMi8ut8S1o3gcUG3D2RBFQ8us9QEevowVPEYP3QMLRdemat8yRzqLL1xPV",
  "key27": "5C8CxPuvSoidPKhd32VFSFD5cXUpsEXdZe9vv9WfnVB8DVHWMbNfhxZQcv9gPvTomnkhN1y2uffzT9U9ZQPiisxR",
  "key28": "4g5Yh2Gw29ivqKzFCviFVpTRpkoVYWfizPEW2AQdatcG36gqX44NPTBrJ5DTnPRE7mFjVeYGWvwcwiv4QyAGcc9D",
  "key29": "5yR8uyUeVwNpmzHv6NkqNJmUnXTqsJbhouM4mYDWxmfhXujuV6vYy4bf3ArsUzorfKNYS6aCAY4wm7DYeFXy8w8V",
  "key30": "LoxtCtoc41Rn75KFZ9GPTAGezAB3SAGKJdCzQMieRDCRKwzYPGjNWBuNmGWWsrhrKhUGXgTdHbAL2UoYUup562x",
  "key31": "X6LHapA3q9G1eErJufFU5YqBoEC3mNM26JAQxGS9mrJeKK7MrRynaWDvEvaaQvMtP4e3CytMTig2szsc6pcRwH7",
  "key32": "oG2rj2tVh7pxxeJ6w1McfNTioCTFM5iCJWu48ZqBKZrCzEwXbfwuZvu6kNCxh9HbzwXgT7pRGHShV3RPkEEsmc1",
  "key33": "232hFFFjHMbMyPqTLhCtSYEdoMxjxwHaQpPitQjRC6ddHHDhF8WPHNHYjs512Zjh229uVychUcQMk7CmZnuopgBR",
  "key34": "fr1A4Yxt1wkaA2uoDNpwx62qkBSgxgUz6FcpguMQuoTt4LKghGjYJJida9cWYwECogngLvgs4ZoJDWHYFnRaPB7",
  "key35": "4d9iUY4KYNRACqqis1TonV8kh8BLvcSDshMugQYeuQvG5gCVHGkZogHKjUDapqLZiJBwrjwAd76vUEXQaLiNXoRq",
  "key36": "2jcK8EgmaR7BJdCLqrufPbhn7gGFVWUFG3pWzCjSeLeE4knB5fGigeNNCPnPCrWmYGm1VpJ5aDZZwpEdAqaWmjBK",
  "key37": "3hAMfbUx3i9bM11XSAsTxCXHH1ev9cs2YW1DBVakSZxQ1sfKJXfnUb2def7sns8pLiLVBzf14LzVmxxyJUu3xFgx",
  "key38": "zLzX6JXb66Eaicyv9Se4ztLwddPexKu8PL8qhJ4L2tQRknwrdiSP5725ZT2xvYDQ6kVLKaPPjpcthFsCofCN7rw"
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
