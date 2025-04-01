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
    "3TZJXi1zwh7XSx3Q7iwjNDErm58qzBN2gyyKP1vT6gyYab8cHmu4sBo5meGvsbUCgLwk3BmHyAx38729vqNvceFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNB4dLHQBbq8Rh1gD5jYp6hFAT4b7Hyx5d6tPprPZaGUpqG3tMd7jZcXip9yxwTxX4bBAqVMjrFjeq1gNihHdDV",
  "key1": "63y7vb2RoN14zvRvEb21QN1YE5usVB2wHQvD3g1bXo2CPjFfpr32VLP3eKAiFGR1oKa5TfS5FAWoi6rHF8ugtyv7",
  "key2": "3qENAyELp5GbsxSB8kXNzinuqJVBhXqU8YZdPpZSfLKAafjW3js7suqwAacdo6EcFXmFcxXsDTHLfii2gK5TBBQL",
  "key3": "23vt5GHpxFRQWYhSBUSWA9iKjCmQCunP8erPAAEpBaxqRZ5F5F5RhBoUbtwp9c426vHJvg1itehCUsXDHsfESjDi",
  "key4": "3Pz1e76JekJYLQxzefisQgUdbWeu1rk9WGWYPzQxNEndJewuLf5ZC4pc8zh3WABoYFD7tkagjmGveeRBoa3qczdQ",
  "key5": "2eEpWXn1BYVP7nv6oS1YdS6dB6fjYKRCD2MWiVhfNC458nzENBQQRDFNWvdRRXMqGik5r7hKQtR3nHWXaw9rVYgT",
  "key6": "zm14B8NHayHmtkDb938jkmUmUgS9M5kTsCSiGSvABo9gTGrZiBhubPUDCayB7q526iWgFHQNm9fBjF4LTkG4vnk",
  "key7": "46hnEroU5KDkJzj9qzgLiaLDnpwHp2cgCZd81cG5EUCyNBT1uFGtc5CpNYLWrvqhR8ARftrifF8QBkJd7QhcQeZM",
  "key8": "pSXQ8sx1C2qpXZgyP6igdfMSQoQ53nqCfJMxFzD8Yd6mkKYuD7BPNt7g9F7XhkvzEvci2S6zkSBYKYiEZb4v6vT",
  "key9": "2cEt73EDAkWn1XUyTYjPGEjSe2bdM4GazwHQrPFfkcUiNEGEN4exT9BMkibE8ua1qGFAJuDayuSewPWJegqRcUe7",
  "key10": "24YgqCXYgrRxgAseLiNo4K8PWmJyTpbYYeoMHCaSE6wqN5qJFXqSkKnNZgpDBh1xkUTXDidx1MHoK3cfMm58WFcT",
  "key11": "2W9SqYoKDzQJsWHkzmCyXekcacmcfnPdLyRTUtGc8snxz9jzBfCyyWbNmQUDSUoiwQAqRDZWgW5XAx5LvH7XqbR",
  "key12": "2MoNVcwX3Uc9gGyxC6Lqn7iAFqJdvdDnv9Prz475z2chdUFdoJ3pBng4fwXeCUhtwQehWbDVZW5XBWHAqd1nfoGw",
  "key13": "P5gwJ5K1aw9gaTAqdjk4Z3oagZDrGiLi84EzFgoQ1zh4BUDHCvRBKoVBUeJfPEQURK7mgtsc4XW4Nep991JupYy",
  "key14": "2nE9khvAztdc6wAvfbonDYQxnmrvvzX1PEXr9TeEHW3tTkP6zDeZ5v8Ve2ziwJqP27fwdf4dBvySpqUSRM8SETQb",
  "key15": "2S9g9tztGdMiYSAt7LaFTJkhDAsLRPKuHjSzKfm2twx36oRggiatfxsJZxqT7Bg7SAEPZXTU7p7ETSUAB3BijsNj",
  "key16": "214AhPwq5oCU4hi5dzVPiZiihuQMyNrjFaAQgbA1ZTTwk4Ryg2BZtxkMHax6MWX3jo7Uq1RfMoQf8MCvvsUYEbK2",
  "key17": "3wCQZ2M5EmJuYT7GnQGEZ7kPqZa9zGoHsPvJKj5CtLLejb422cksRwpqAFTXazeG87rUQgVYahnox5tJHcTf7Swg",
  "key18": "3PYZdkpme8pYh3Wrx61AVuwhQTZW8PgzURWTtpjwBBqHxm4tbzPcMWXo2mvyTvnNDHGrNtMFE4vxEa92ZSBr63C6",
  "key19": "2i7aN9s7EnHj81oCBYKSMUvvA7NnywAuS7AppfLcyV1hntB28MYwzVsqUY1HdUPusikjRxzczCJDcwjkVuKbJjUy",
  "key20": "4Qs1HarVGN6qQs3PwARxp2dNrFwdtXHJm4fFeVuNYdcEVCE1A4fDmmwqdSUvGuCLrf7caNfpvRVEiA61bZhMcgdR",
  "key21": "3GLVeStkoeCmUgofXmma8o81J2yu8oyAoi64F7XWQ7DFQhkuZFUicednrG22n5zC2m1kPJLjwfz2XixVABCxFRTi",
  "key22": "3CbUceL3CdkwxNq1wUL4bkjsdyPHJBhXhu8qCSoyeWubod7vXenQ73WhafPFoJNPiwpPsYxbmR6nKHFZJBzfV7e6",
  "key23": "617tx4q9vo4sffYF1123dD9jFCb5ogSr9e5TfsibtCofx1To1eyx3a9DyBvE33EGR6EUPvLueMyNStXa7nejCoAx",
  "key24": "64SvULNyjohGP64YJj4DxX5W7DeGoX8fcaDMvTcT9J6jRptLqsNFMWnr8dA9cLjUhtauoYtBrdHGqVwDSzBdKpxW",
  "key25": "5cyZa81SSpks57KMc8jzmQELUiGJxsD29WQi3zfbJkvrhtyTBjXR89Mdo5Wjr9neBgpg7hc5vagXWUHsbPAPyEF6",
  "key26": "3LfFwHzwYRobtV6oKVrHC9GcEmA1GxkU9dzhTW9ovsfVDqvbGny2WMTw3tznzmpF58xH6RuFeSUgpYKTFWS5yzTL",
  "key27": "61mHh6bcHX6ZmyWmuHgDFGbWSGCmGvMJuirH4CtfGrxYEGoEfmz7RScdRCCEbMsnsr5cV5c96CHZTfn8jwTSqNqX",
  "key28": "29Y2Hof5CQqV3GJu1c6SGqu2wT5ywLd2PtmXb76Vv6L7e5Sum4PWqndwG3qQrBSWVxcGinCAuHLQAKyhTmDB81tj",
  "key29": "4TWB9ZETe8WYLsa4ujPfCSdA4i6DzrWrGP2qbaPPRhdZTh9zz7TAwjGeUeFGJWsdkhw5uXu244tJHSRNS6Jdpo5Q",
  "key30": "Hiiq8hd3GvmcUdPtoE93CHJATLrFCKUKwZFc98iMEoUWgyGjJEEqewFk83QKSULZMkMV7DyL3vdk55i2xFDUnKD",
  "key31": "639HAR6XdTTkF4mN96sMNxVSEqMCR3gTY5eXSvdxyCaXFMm5C4YgfbHXLK2v1LA8WRTKt812UDtQ98WRuA2gauDs",
  "key32": "664pJrRQj7LwDvfHe83Fb65nogbQLQu7euRmrtNoB9ds3C8EcqzGMLGSWVREFtWeLCkMceMLt8TzNPSe3zBYV1X7",
  "key33": "2iyqxVFU88VDrQ6Zx3UjdUacM3ka1Ub46safAyBR2TLjAuoS9T99HwYmoXqBTeCFvXp7C1RC1TueVSbcVCsMePkR",
  "key34": "SZkc6bbqHxTu9EXJuB1HRnELSXT514LSFaUiGphUSvQjy676sEGcjtx1mekJHPMwLUPfT72L7TsWDBNE2mAM7Kg",
  "key35": "2yPkh6CdmApm1Rk79rYsYwJXYQYuJBvsapgw3vqJDGBrNZvJECCHp2APJ94Unhn2RR5Pi77Mzi2TmVr9cRZWh2gZ",
  "key36": "4f7FYRCwJsmqYNesoU83nvqjfQLHi2dfKVrEc92EcmNGNoj7SpP822qxqLub98ekwfPzxjHrqVZbPoLaCzXeWqG3",
  "key37": "48SYpbD9QkxUxBz7VU9J6CHQF8QiNR3xEoeYgnws47nzgHbq89Ccj3XWtwZsxBqZ45YUyvexN8GNCAZSuf4m9UF4",
  "key38": "2PqJK8txuD7KCkrHPmaMWKCR5qRB15qffEjrPk9YtMZMMGzfcgrofsyUGHYP7Wut8FTA7xdpFDegAEx8k9aSAK3n",
  "key39": "4tqLNeMqxLE742soPqvfdWSQNVXWHuhGBadd3y7SXnmzLsfUxHXcvEvqhNSGfmMHoGXN6rFqN86AuS9P4CjBUFqF",
  "key40": "HRi2S5k1xgqhEJGHHR5UW5KD5VoUwrmwBwtSsvYbQukNVFCt5BYFLES1Lk21vWrN8Wv8QgGLpPPgSw1km7hkETq",
  "key41": "59DNp3Af4VaYGjc9v9PW8n3Hmy4XhsJTuPkW6D1aR4pktSfxCwJAV7NCNoExaPewo1MGokFPjptpNyCFVkurgycx",
  "key42": "5ZruTssdF7UFeUDFn1AQtcLy2UgnZfPDCqE9WDXoDLJLvv6FkL9qugcrtX826W9QGBqn8yBxsAcnmW7FXtskEXZ7"
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
