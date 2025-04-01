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
    "EDBVyU5JP6GNjEEadf1dFXBqW9a8jE7jVyQFuUXCBKpjyPqgx96YV2aK62uwbybDCTAus91HHwvjQ6NBX8Y2BE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uwc94HJi3t8CbKCT4HLesX8uDJojmxgRCjv8GSon3K2xBnS1FRXrKwj1nSfAfmYE9ZPwzVVN5smcppsNqdQ9Dmn",
  "key1": "453Tq9jyzds6DoZj7CoGeACnpHpHrw9fB22FKdbabAUPDvU7tXgTzo2mMgDThmvjt9FAnXuo7Gwt3e5sUW2JPujv",
  "key2": "5b67xGfkjDJ8Qz1ezvsyJw75sDavoZhbvedBANkaBuKvPdHUdU76Dvth3VPPRjVSPQ9iwH7GQBe1UbDFZJNtuSqf",
  "key3": "LRAy6VJDG8sj1Ju7RXqrr3HDat3ZaRdbm3VtUEYBuN3qdRjKRMwdMt7VZzKvWWCetwtdiiEEE7omSUhZkBsbDbB",
  "key4": "3toHxjiMzuo3dPaLqupn8gf9takn7iYDKxc9fNqeKcZME4Hb6E8fRHCyTSKds8YBUJzNxgG8Aa2ioLoEN1LL17SU",
  "key5": "2sFKDzixeEtk9iiMHZ5DN96hfXjsDCuHd9scdzS2uNrcvDmrJq2uxaSyq6yBvoALYt23QQWvSY6QJyMc8kkhMntU",
  "key6": "3zE8tRhiM6bGoec4jEmGmLjYVsJS42yyd5znFa8yJE1zZHtuo1L4aTKREzQqz4un4Ym5KS7SXxPXVe7VoK9rr7mU",
  "key7": "2nueezq6LErF6uTTaKXbjcEu27AL9PkExgbFh8sfCKUSzXQoGJf65BSx99Tc8HzvnyVeyssmA6MjFuyzaUPsoF7V",
  "key8": "5bVvSCjqwYSYP7tQy29rJeLMsunkKvhfGxQm2Fgsrt1Y9w2oa7eouaeWyXZfDYAR5N5wngm8dDR4mpexHtqsvs2W",
  "key9": "2atrbXSBgwTVpmk8rBM58588EGXdyn1jZ9zq1gHEMFKMka2dYTeaS5XjQWZuJ9ko91TcWKUTB3wopzBhE8gvakUi",
  "key10": "673UPTaA7eP8LPhfqFuGNFsgfN1KZHSpLFmBgEwTwALjq1iodwMSHaxJRgzAwKUCeKNsfXHxxY3DH3UMdEaBd3pX",
  "key11": "46S514rS4d6yVpjridhNBNkqVFkRBjfAvRVni17Fe38RXziZ78pTPm4ivbDrvHYtwNTAtjtRSdFQg8Y24BLC5pSL",
  "key12": "2cYwknvsaE3vqrAARSc3N2VPNRaGwGtzJTxmxVHBxH8VCSJtN97WybdaGs4sXS2ziUAuZWfnqVupPuXtZ8QawVZU",
  "key13": "jhkKLHGBJW4StoZqRCGaD7w4o2PWFLJQKro7reAGp7vcch9Tfatsx6ZnMyMx3pn5yqwg79zU9MW9nifXMa6o1RH",
  "key14": "539BQndYyhbpAaCDAwyHY8A71atvRuWtEBmXuvQwEFXByTgarfYbVdJXThrwAjV1N6WWrS2aLc3PavK4472qasnZ",
  "key15": "4Ts7uvfKzHQucSaQtPsFtBmZKp5Jf6VUYwWRvmMDf4sKBqZHq66gyLaGR46GC7V1ELsg5V6tK3ky9pCiqf45yt5j",
  "key16": "5HU3yF22fsgN7qExN4PhcgYxwR2UdaujD8YiteLvkcZCnQp7XUomZUZRHFRaWYj38onSV2PemGtFrMaHCEhAqB2K",
  "key17": "3E4Uzax86a26F3ytnPGUdGf7yi9dyLeKTwTjNF3gEXHpeiB2cK8Pk6nbotqD2wNvJRXrYptgTVKUqNMZbRAWhLii",
  "key18": "cfbDWA1PP89eTtbRo7Wp1VU57rFM84HcXLaxyHxv43x94chQL5nL7RigSUwE5RBP68ngzbzzQYuyDeLHPBVakw2",
  "key19": "4bS4Gg2mJPB76dJnWRP6q5hJGaW9gnJQ1fjdcUS7aXPsLcSY4q3tdKDmA2dy3xk2kDQJX4cVwctnCciNFofYDRC3",
  "key20": "5c8VN3DarsV4EVcDfxubemafPReDro9cmGpDrPSZGsZ7jSEZYjmsUBpzNos9hCga7tv5KZhXfd8KiwKBwLVAu3vD",
  "key21": "45TKHrurh4KuhgtPwkbz32NggRMd1i8j7DLZvMXvGnySJPdz791wXWzqjBDhyEE3GMxSioYw3JePwh5Taatufjpb",
  "key22": "5wsZxWrW22Wh4DkojfnX6H4oiUk5vLE6aUXiBrckJpJvWxazsXB2Bch2k5AqKcgGbuc3BE9MgqpXHV4RY79yRtJ7",
  "key23": "4i151GceWGGd8Rc3CJPJhwUEstzqYoySiN595BZEoZjZna6Z7fHThfREjhLQJsmw9UkBk7HFpM8apTpqxn9wLZTi",
  "key24": "XGGdhWb1QPev2yNz9qSUC4CDhfYVkBv6yEJS6JycQ9RnznVoPtTJdvU92A3nQwUNY2G2JrTz2YB7SQR5iMQ7Mib",
  "key25": "3QtYkwq8MvzdMaqfdZqBaebQAh9FrZBkV3sukWx6eajDJUkvKAcDUqEtJbkqtwKhC7Casf8S92R9SPKKTaQo6ywm",
  "key26": "3aAzEUpp3R4nVtfbPfSph3E7fDnu68sMuRvBMuBM1MFyjEZqrHy2RzUPfigUq11y73rBUmzsFEnsLJToLVthmK1X",
  "key27": "4aaQNZRuEfg1xyifWgq668YuRx9zgSXYqWBww3bRHPvREav2fcmrcLs4vbduGvvXkkGKfecmRHhUmqf9Z96LxHoL",
  "key28": "3GTSxPTxFZog2dASAanZBsY94SVsVTiutdBsQLwbh4rkYjeeRF2rRjGfSrax5uDh7GHoR5dKsA6rE38SoBJad9ot",
  "key29": "2CiYo1j1NsGUtQfmNeFfqWKDbrrhDEt2FpreeKppS1uzwpxkPNDGiqRdarG77U9Toq2Fz4g665LZXm6kJUYtkJ51",
  "key30": "3QpLwtzVvcuJQ9cZsKR6sSmBNs859rYYdBM1dyZMvdzbqYgcihJRBsV79Z9CnAq8ZUHLxysye2xr4iaFyhcyAbm4",
  "key31": "67E3rG63rkHwL431wymqtdU1JcvMPLAsiW268dQuLUP2dba99zMYsF25uXRjN2bfWbMua3Ya2gVZTbptARH5CCWf",
  "key32": "27pqhJtcxhTDz6WYvTyPM4oCUFYWHXo8Ubwq1vLgFNAS1KmrQX4bQmWo8KeKBDkyTGym5qnuRWgee8xcoba4aVFL",
  "key33": "2uMS3tYxefUkvwvJwY8SaXZx6uUZUM9cbG3Gu57etrLPTFVguHV3b3oVtt2A3kkkPS7xT8zQgQ3BrT9MXhDx8sAG",
  "key34": "5mcZfp7rWUqGKNvmhJJtCR9ufZpxcHRgZpacyPhuXQAdmhgkVbdauFSTv3Baad4GMgdzHdJVhTPKAacfYnV5wTTC",
  "key35": "2MtZ2AynvGHcEAiLc7a3QdXxcc3pHAQbDevU8SBFpY2aZUqXx1Vx19GtRPKr3wKyzcuN5t4gErt7PCh76W2d5FiF",
  "key36": "3j36Nn9vjNDVRjQaV2iZqVeH22MgL1gG1HHgGupcq7ZHfwUAw9X9oFjoNVh1YSs4YRfPTkqpAwnJSnifLbhLWhpJ",
  "key37": "17CFpspwKES9XoKaG3tjsTDx7kVsdEahtequseyQJgfWKzhN4zydEUveWTo8cmf1dz8MSPhTXRX5jnsUMLrAKyR",
  "key38": "3GGMLe3kRNGx3baT4a6AVwh7tFyDQdHUSkPYiBVpLPbsmCShJzpAhK4GYmRWMDjvFzwPFkpnnyuK8BxueWEuVgcB"
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
