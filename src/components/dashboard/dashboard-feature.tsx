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
    "5LH6QHoQuh6PoK6p9GxqUWfED1yxn3YQT2dqzbGm6AMrzSMZXMo2DgUhzHAmqXqk7pEpWTY5mFdiBU4ThGMqgwVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XFQbGiAdy91nZV5yG186UHggbJDKfVKaStUzn8oSQvRTKZUwYsuoehysMYFThPnpCkBWYkZDbLsS4L5xbgrX46",
  "key1": "1dXEotHZXtXAi2feiJxgePRGVjxAykjEKq6jR1FCyqQe9KkKrwWmZ9X16unwfX18E4EZTHPTu7TuCMXcUfacfuo",
  "key2": "Ha7DDh2ndxzcdLctnW2J5RLgPVp9m8fFNLyAGUp64nVQNJZxMAsk1HyCBusTNKUu6CWLmP4euWKW3ixXA2c6Aga",
  "key3": "25mmFWxMUJv36KLAK5PyuqRezQe1TCpNBDRB2DvwBxzN2eW8yPYT6s5yVVYMaMEeMcMbmqZ5T9UUsssZh5rsVAPM",
  "key4": "5sCdd6dJ4NSmUnWE7rFvot4ja1yQ4aDu9wJ5sn7p8jcjfXyt23Gaaeu9Wvcn1p8NsGfDbnEy2KKxPoW4sTUd7vTQ",
  "key5": "5BCLp2JfxTuXnbGftZUzXjdXq4aV69DRQe8ksTALEEhgPj6LCPA8wZK2kK3BSBryY3kPxSdpE1XZB4WKced1AqbX",
  "key6": "67AiAnTcd5NSMKVwVayGhR8Co6tXWeDgWkUZ4Uzd4oFY1SpwPmSA9avg3K98U5DR2NpyUd4iEw3E97crhgLUtqoo",
  "key7": "3vqCibWu4jdLcf5BAy5geNpuw8ASqFdErzkEXTnvnm4Mwmu1o6RdP1zmP6nufzYtQhhVSbfFz6DqpiZqN8CAsTHM",
  "key8": "2s5avRtaMGK9VXnbWYSkq8f6Jo7cpQbXFDVwVGaH9Eumn3Vfuf2d5Hn3MfwUvqXo6pzevxYsg77o8XeEZsQDNXc5",
  "key9": "23KoPAEjmPUWjjkwxMAmWSAkKZCxgKYcSSpGH2KB4pYRoGzmoKSiG6buXhNP7ah4SWcyodwhgrneuE2QhP8EGmhZ",
  "key10": "pcdJwepGtjAoHYhhxXtyD1hMQ9bSuTS11zibuCCP1LTE1w7Ygaxe8D4uzTvSxYfG61cnn1JMfQDmiCeuGouvA6j",
  "key11": "3kc1ALL3H7ftEzLKPKT3XsSWbTbjdFpA345vXsVRUj13PuszQr5cSjmsr7ERSgkpNGCK9iztYPC18UuaQ1sHxGEg",
  "key12": "3ToE6k2XGZjsiE3w58YFbtA2wpWbMw42HCUX7FKXXCXZ5aywGqCH96VPAiGxVgeyhsCHaCu52MMVk5QQAae33TCY",
  "key13": "ubrGYbPiM5pNoHYmwxq8QRUrXRXDgKSKfoi6fE3hL3h5iK1DXVApdBjA3iGz2eZTk8NW2CkhVfe3wucbAQhskzA",
  "key14": "4qZi5T5ygLTDRWhDtGGHxVdvWJDaC2qN2R64EF7XtXrk1JW5eAmqmrYCAuNZAJfwE6Mry6M92kpo8zGBSFuy18WU",
  "key15": "5uyxxuCsUdai7KVdcSVxAXKs4NVbUsee95TXPEAX1tqM9Fd89sccrbNoNfiN68nFeLdY4bVJBfCWF91xtZsVG35S",
  "key16": "rCW7eFaBcJX8VKeTj3RCDrnfhuUmwfdayE7RMbTY7k6mxLkmfWSrh3sKjovSNkFfStLsUbZvBtRU1cigWfxNQBY",
  "key17": "2MdsDa48at9NiFyFjTHAAuzVCjFQmfUYb1z3pXYo1pT87pjdBkrBiYaoaho6VKmATTpBq7jifoN1aq4Ck85gDyuk",
  "key18": "4k29B7ykLTUS4zGnyPLSU7fVvLDggiMnugFc7saVXHbxbwJMrtGfaXukTgN2Bdj4HuxF5wtagZ7e7iJYTXASJSw5",
  "key19": "1P2kzuVKrmRHijFD61FmHu3E4xKTiEoeU62nv8gMjyL18UReaJHwyBHLexTX37hUGCo8ugLFU2n8mEDR8aEVUp1",
  "key20": "2zyec6xCwRuBgeZvMMkEYRU47i8VPSVcxotm9MNBPYkQkXZE1CZKWudMQ4Mk1KaevFgaqdhBcXY5YXHSG7jEza1Q",
  "key21": "gzni41CpC8Spgjk9P9moYSG1k4YmQzNh8qRaMsjWEyM7j8D2AsbEiB8eUdbfvjWuYqaTTtmkhvHnbARGjq8dbMb",
  "key22": "5oKoyttNMGysrHX2sAaPS9E5owr4MpMAGQZmGmWPYcjDExSppQUfy7DC4NDXG8e2KNmbvUHDoheNPC9hwdz8V18Y",
  "key23": "64eYDacPb5bzyTP4fzWRTXRxQnEQBjhHNaALkq5Tehjj1pW9o4bAeaw4U6Bf3edF1Ztzt4iKCh3cAPjMABgKJR9L",
  "key24": "3gQsAuzLxi1AhAZ2t7xeRLozRLvAoH7WXWKiTEYbt33VQW1TeqbtvQW1RhNa5o4A3q2SMdJCCxmgaKKNZWj7e3WF",
  "key25": "EPMg3gJTybmimM5nhhKuHasZ7c2C5RnerqZcPWsim1hiGQRVNVDreF5vgyM4n9R8w7RuPufb7UVdVcWvHMUdXN1",
  "key26": "5EvASQTM1S7jEaERdTrJFKrGsVHu79vqQYPsYy51Zbrcn2RzqqPFrfKP1JRczggnegUcBecUWbKEvhZ5KFTW6z9S",
  "key27": "49taUH2siRnCbmVDfkoV89pxBXXpZHrNmhbAP5VAKiBcUFudae6hvrpPYthfbkrtc8hm1RbtR8r6heC3k5u16oDt",
  "key28": "4kmwp23Qb7nv8pk1ssvpu4gftX1QXgNCyvedtRN5y8LTApy5kfmhgooectegA21KaDjQAMdpLeMhPMkF7V36Trub",
  "key29": "2iVbt56DmV9xUVnyc1Spsq97LQYzfUs6AYeMmoUPT85Y1LMemByVTsC3BDGPeoSpzJmDFCpGynSzxtLfuvk1Q1HL",
  "key30": "5CKMgHi4EhA2Ddaqpj4hNL4n79hT283Mg81tFs2U57Te5y5gbBcp9dmKbRAt56KofuEJCK5T6XWv1wuHzbLAirWo",
  "key31": "25vmpx55vVpmsEHo7wpcb9CvHthdm5jct6fP3AmfJgqhb12jBA24d8Vd1ZYmmBEVBnHMxBx5CGkVLigkQh3Ri3HT",
  "key32": "3KSp4NLZxnFpEx3134psSZ8QnPt5oanoiXbt7T4PhvJuvH7r1q6NFxZX3wCGemmbAePZepjNc9wNFtmoaiU1BGdF",
  "key33": "2gnoaYsaejNeBQ8bZ73t5oR2rjRvdwwLxi5w6e9DL8i2tPrzRSiZsqwrFwBLTVQKjqzDHTxe6Sog2MdN2NRYx1Ar",
  "key34": "3SxY4ESKtuJYX51KmDaEoDiKBtMgvioKdJg5JxjTqYuqXVgjL6ALh1ifraDNddFhRQyF6m2E3U9QNNveX4QBhWsU",
  "key35": "QKrDKnGVHChTWJjVu5D6KSVt8suTZ2jabVV2pm4SRRkJKubN5R5jEK39vWfMnj94FdqV1U9qo3b9PvtefjhynK2",
  "key36": "4K6b5sBmpbNFTaKwsymBLvc1K7783pw266TmpGQ2MRTxhJcD6aUybhxQHs1FUbHp2cHPqC7hrJPxWBd8fhFTeNh9",
  "key37": "5HxuiYKpUvSFHUHVHdebeSQnZP3a8o51aWAv2P7AKvaFzeBs1tTjHpx6Vzt56Z2CvRhUnxyo8f62QCvQj9ZMRqnZ",
  "key38": "YYSRJetoo1wxWXj82M227bQMWP2yKHKTLqqkjLqTTYCcMFUFNHWa7kWWdapNEdcwFRZXiMn3Z7EhAWQbNRYpZfs",
  "key39": "3y854TmDVtgup8tUaqPscudyhwoMbzEhSYFfHH7mjFaMoGeCbACpSTBt6f7o7Axu4NhQtK68iBSWBbruoLuAiapT",
  "key40": "4hXqaktPy7ok7bL2nKwxNxx2PtoUxU7T6KLpgpW853PQo7bP9uGjQG2dsVDWsnzweD11rXGmQ6cJLohk2m9rmz5X",
  "key41": "3sdwJtoQthBE8o1uB956PTyaoRZk9snKgpZWR2fSC5AW5wcT9UXjUXWtn4b8wp6hCkusNABLHisvRsmiK5g93Z2",
  "key42": "5i9FngXa3ENaDtj2BcjmMPbr99i7qh8C6MZbadDTzG14VsKKGsKdEsTRXEvdQ2qLMyqZ8NCyQ7gYGNPstH27acXi",
  "key43": "3TyepB1PQHep2U9t2Fy8ZyLo6biuCH2cxFvCi2wgma4obj9sejKWxis4jLgXTnvZdAGggwvfiAzCZEHHapM6wDLT",
  "key44": "2g5z6otk9HxD7vPD24f4tV2snCu1fdGQrwC4PPTsgZDejuoybi6bsDzPFLi36Nsd7VXydoCznGLRdhvvH5pMfR6G",
  "key45": "8Pbr7F2Rx2RnxFcrBESZJdqjGRrnJfqb4KTBbpKM3LFXX4oM8VHPTUgX6hEkNeyjs1w32vJvSoz1axnH1qQ2WuA",
  "key46": "5dfvMVPqBZJifp4kik5NN6KcmQmf6QNoTNfNeYGb5c2ZWGsP3daYREDR8Uv395UXVFETkUp8fMLPgcmiZdV2ci8",
  "key47": "5KHNX6TWNKMtvfi8J5wMV6BRWuQhAiFSJikHfCJvvKadU19yaBSyyWPpENWJjSbpg16N1srwsi1p8gZkkD49ovkj",
  "key48": "4trV79Wm7mpETZKGRUgvgCF8pAKVam2UfocHUVb1jpCZ7FCDhTPvLV7XVkV1SGVWMwGeYRd1SFgR2FmgfSXHJPes"
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
