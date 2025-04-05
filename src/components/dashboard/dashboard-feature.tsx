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
    "491LSrf53pJqq311ypr6Db9hAU7caq1VPhp997MpuQfomRf4YnC1G4DE9Ldb79t3MQQPXUjSy9oF6Qk94ge49ofS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBcuFeGx6bnVoDwjieJYd6pufTkb23CCwU2TXrjsuvTeM2imeharrXgyQ7wY7Jxx7WCiGjaLLc37bUUPKDoXrkD",
  "key1": "dXHW656aZ2UCVYWCfgyf3ZXjKxK5EDa6mmPiy33BLYLiDBgjhN1qyQHYVdyBS4GyFQuXfi918ooZ1PpfjWC3Ghw",
  "key2": "4ay3jUct7HKDcyEPy8xFt5K6zugex7T97gcxCy7bHa3z25GvimxdZmTgCcGCFBtap23Cz49GgCKksAykDDdubWv9",
  "key3": "2stPsN9h3n4rdY7LrM4EWZmo4wtDa5pu4H2H2qAHhHLq9bHWHREeU29t6gHAYH5BfQ3L5bGKEpxKBsZFQCAki6Hu",
  "key4": "dRK5gysFCcG2cDN161YXAdwHaEGowuyHui114L6qsb7uqrb9vfsEvQuRfE9effowUvKHHxpu79kJN5PEweRKSiT",
  "key5": "QS6KqVYYmr3mALvY8RDxsDK9GKDn78UtdLoHSREZsQXF3RGyWRavA2CStFEj3J6Q8fPreRjhYYKdkDugYPrv75R",
  "key6": "5HcNMHPVqkAf92KJiVZGkGHhkFHT3rzxr9UwCiEqKybyWEXvQ98vWk86RwM1TbrTdFwDYriU7kuhtUcHR7eFogoY",
  "key7": "42VUXVwmaRoGMxkw8osLw3teAwUMqBBQ4ua8C7paEiQZM3VQCmEJZ17XrRUKRYSDEJk3VB3mUGkkB45Yd14BSHvB",
  "key8": "5qMyNwrq53pBQM8xqAFSY5n8Qa7CArksJTgiTw8Q7ntwDcHB7sjNUmSRfTbsUtyEP4n5cUmCbhXfmYXLSJEv9JMT",
  "key9": "5eGEUNMVt4SUzQGcHN59STM3AuU6arXitAz1FTNxY2TXyUhDJHrrWCw2S3TvPtg8DRm5MEyrNDnmDMp632mMh8f4",
  "key10": "58Vx61ZUS4RRQf8ZP48i4VKiUTSmsFxYVqe5gKYbcbE26Ekqinpv3vBghWfgGNjnihnP3qpd6b5UNxMNK5T5jTDC",
  "key11": "4aEWCyirbbeLhpuUWND4c55Uh3a1hPp94Pjb9WV8BQZJ7HSwS76wES5bXqtAa2BR1hEuhuRuQynEjnYH83ReH3Hv",
  "key12": "eyX6VeEASNYKaoh95kCdaLYoQERqALHPKWyMBGPBPvdVVDURaP1QtdQzb9BMqWyTvhu3msKsVwZggiMhYGkB3sM",
  "key13": "5FmBctPErvQPKCnCo13ff8tkvvCBBfh87xBdEWM1kfmXrNBfp1yDSruYqwGJ2X69nMLLYR3Azr4EfuFMNN22UcxW",
  "key14": "swHuEr66zYoGqiTLBDjwahQDG1ht8PuuEdmwNUY2rdRdPppoY2fX6ftv6G5cnbmhy3k9imCCJdL4YW7JhEXkkRf",
  "key15": "gkPJV2sYjUNYV3EZFqeRxfGpAxUfvadGPyaXp1zKkbBG9EkJwBbz24jc3nT6pQx4ozwJKcmDuzPuhDSVks71WYz",
  "key16": "3a8wfWrFGy924PYQbgjwUXsUKmYHVjRAREfX7YsBvzxGyogGJoq5cxAQSnSnYaEPLUiFEhdBxGiDkod1xRqf47zv",
  "key17": "3xpZvSW4Dv2rzFKeyNZGhxjxoLjeusrviBVoy2z8gKpa5VRhxd3WdmZCqe4HJnGmRbLeh536T4qLUtvx7d5eQCYy",
  "key18": "3C1XviBbUFZFzC5ch87YN9sMC2JowzXKqM7d98mAB2FGiE18AVjgCgtzaQBN27TmCrpBcE1Puv9V5oh4SQDCdRUV",
  "key19": "pSevCyRtyh1vcYrjTiLfQEf4Hj6vXFj4PchsmhiGYBgyp5Y3usX2BKJBP6PZrZ8WiGAwDBKPY2f4EAEbzpwNCNb",
  "key20": "63cdVoiF8kX3Ed1Fewf347BXhoEmmw5wHyYbnMH3WemfBPZiLUqjw6U4wmMapc6Tw1kBD9nCwJs68mDsM15koqFL",
  "key21": "4S6b7UmrZPoxbTiywqCyH3ahW3bb3BN5HdJWgL6R7AVZmwHxzJSX9H5razDasBEmphowsLEH1y5zUT2BPz46LUm2",
  "key22": "2cW6E3RQJDTBTnqRSqMmDBDyd2f1jDCTgcXKLVRBWZnirrjps1iTzvh3Cu1vRUng797C3GPXNYz4L5MT7JyT1LCd",
  "key23": "22aS1QDv3LgYMoJZ46FMLA6CQPQaUfNngaAzydaVddqz6SyGRGFPtBzZS3URbJoFq91p4XhcbisUdMGcKbcJLqsD",
  "key24": "5Yq4NPMoyNP3tWEAGgu4hT8NtUkeumrcZiFj73b4h89MH2q8mamiiyywMRPSpUdD5iPRKGmz2JpubRXWDJnH5G5j",
  "key25": "2rUerUULSZHGkFJqYN2RcVFah9UA6tGgAvBnCdgjNp2N9JtfyA6TxjkSrgZ9NV4CH1Y8xfeP17WZUrucH5EfumB7",
  "key26": "2pnNenNB7TEnR2tdzkYNhaSFAhtR2KxxDvXikTkn5sWHCYzy1QWewMi2VxzXQBgT7dFk8UrCZwy2JvQ3CzQb2x4M",
  "key27": "34sfrCb9ny9ydzNsQfihvSrHudJXwrr9BpLf5PLCShPQ6E78gcsMp1imU8E8FFs5nyeqWohMMV3bdGVGoeFczvmi",
  "key28": "3RcVZhUQrBWsRqKjwjkdxLTtp7dUrju4mcXixBVGUz7Z44iASNwQeREj2BQAfUY5Fi1kGGqRKByv6gzEPZQPnG9s",
  "key29": "3YpTpkw7shUu2XaVoWAsiPLFCd3RfHByYFUxHXrzfV3R2ubKHJUKpXhqHpTQQf214jcdMfhFpf9VdxSCA6Wuhk68",
  "key30": "c6SB4m2sc15Fc4CwxpvnPvfHyYiKFqvw7heEVxrk32i6N31og84MwEpWVpFn3dgT8cXNMR3LTYR7nDymYZW8rKj",
  "key31": "2bGSLqssrTJfN5RxY1KWaYzSEttFFTUnfnyoSt535uZtJP4xXx97VJ4L4VZA22rAXEDga9PZV56zjDxG2NPYZ9Xj",
  "key32": "4opJpjFKa5GXeLRNhiDWn8seiiamafubQgozTKmVjgLecJneezuaQuXuxPMzM8P7o6dFFtpjfTDe9g5Js3DFZY2m",
  "key33": "5XwVLVwdfpPkPhz41Gi61QQbqKoYLTmvSZ36crFgyQhnZoBZc3xVkuLuWD3cdTm5jouySsLyprx8CMpgJWoXwbK9",
  "key34": "3tCutMeXfdsRuwt8yuwJ9gPKnQJ5woQEkjfmJWQLJAhwKBWAUMniAQTsbuuJxXaJ3ZGMPjGWfV4jZ38ptmnki7o6",
  "key35": "29m5PPLTbYvgKJ6EbjWTN8jaffnpPFDrjMjGbbyhgVGZKjPq6DVifZZQ1AYjshMJqaoRU9ManLA2wBRWnSsq5qGe",
  "key36": "AMd4nmzhbNx25DwVppwGjYLviR2vcxJcd11BHcXVE9bP9eUDyfmVYcCddfNwDEeaE8QpCozf1QTa9j37pmC27jj",
  "key37": "2qMyyhnMxCfXDSBNHuVeh3PLM8U7bfnoDZNyc3zv81Edw76deBMAy6AyTGvMxm9PSM5deo6JoM6tE8FBz43ntMCx",
  "key38": "52eycX1CF5AqeZrQ5AgW5rec7pHZAyat17ZG9hj6ajoCiesn1kvp2hbLH3xPihzRWKDYgfnU4UiNxtNBxiZir262"
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
