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
    "3hkUB9jM38CqK7hVPADmR7HrMSbgoT5nMakpN2ewg3FSZHaw23xDWDVSxaVLU7UksA1t9TgQ71F9qGX8L5QsiLNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRnSSgsys2Tt5kv25Daxhhh7Y1bu2sX4r37eC7FoLREgv1YaAF3Phh3C7emj55dEXKfRTZN2SyTNFkvBYJ7cQkr",
  "key1": "5fBTnRLsYj3sssjt5C79or8es17957o461nMLesJRHC1X9ir438MVopQabGYBAHNQ68DJve8mJCrkbHMkKaj9F2f",
  "key2": "5teNnFqcdNVUEY1Zyh6vfYLLQpG3SfAjfx5wG7HGHFyx8ZCqNuupWCmMJUvd3Mw6TykLKtoFH6SAzaJGrVN54fPj",
  "key3": "2vYyMmBuTVh4Tk4ahQTEruHa83pqaJR3sqKeF8NCc1nQnSsjKZuZ9gqdmfrBF4Y3yAaP2Ky2A3Hpdbut8vurGodo",
  "key4": "36tsbgcYXDdsKj3iSYJofprGNHjcF5ygEC8Go2uK9sbt98AZQmhS7z2mYpSn8UwbZMBySRYXqLsAKQBB4wxVEiTi",
  "key5": "5uU5rjKpDWCL58MHv9eoN1ttHYBdF2Q8NzRqJQL2vH1k4dkwYe4eqsfH2FL2XEJXo5oiyDNjK8r18ehhbwi9njAE",
  "key6": "67b1jcdjXDTtwi6YssG87aZ1d9888RaXW4Jmd7stk8SKRwFLrrkA9uYn4vQM6MhHhU9KRabdPEcrw1oq9A9HqwGg",
  "key7": "3WcHiv8BzJEijS6jrbMKNiejiDpbEbjp8erNvHu7anHzmbTNfpAkAxEH3omKjyrGykunqpj5Stf6afKbXraDBRSj",
  "key8": "5BJS3xKfxfJEWoc6cJuVvx6NyE1i8pr18UYwMqk8JTwQvbv9jdoz7kCpdJxLMKPCTWASoquTfkgTivmhHfdi5pDt",
  "key9": "53JHVVyhAtfSdVgNyvF8Lc8ytQFuTHH9baj3D7JRZdvmPWZdCA5BpA6uPzZ4U9ictwNFgNpMnhYaN45ALg7nRdiJ",
  "key10": "5ysAXcdAt6CEC1sjZJSKDRHzABn9qaPZsT2cwtPDcHS5iVvPPYZQpBbBHiLAeaF5MEuPcQoshRNnDkuH74hZEsm5",
  "key11": "3cVCH6S58JEh8FFhB2HZfrgxNBH1T7MTZMwFf9zBU2wVuPNnvotkdF59EfNx4wEsYB9HhmTTHRAHhnP852CTJa4g",
  "key12": "49Xj89ve4r5nq3wKRrQr2gVjWrW1SjtzwpJTynvHUUJFPenyx5nHTAy22vuhKjEJKBJEHA45nmouwKaF89z6k3BP",
  "key13": "3KQ1DEiSeZVhA7ZwyHKmWVTYk3L5P7AY4MocjadQxyb4pTuX9Aus9raLC9CryAYoHvYp5JHrj7dua8NytSSyTiL3",
  "key14": "2eEphfnKZyBH3a8GYoxcpKNnRqGwfvkKXqkNjWKqwue7idmrj51U7PmDgbbmtFy1vdNQAbdfoiLDA5zVMGi1fpuY",
  "key15": "3Hcotx8BTeSnQ913JNPmqSTrLTxXbxgyQCCTiU741Bi2hEdVEjtih9SxChwiNXGTHp7UudXFexRNoe6mWqFhdeHr",
  "key16": "36xycv6jP5Mwyt4fB6QschN8fWueBqkBK8oeEw8WWtMbZvSVYzT9rSV1xcgjqa3s3E6hxz3dJLWt5tUqewXrxpv2",
  "key17": "5a3EvhG6XabH7istWtyH2xK61ubBMyzThawJYAp6D93Rp89UC75ea68eoJ6R31eFhPDr835Rg2nf8HsovXxraDMK",
  "key18": "4311ALWj9wAQPBe8PTT2DdraWBUwZJB4aWvTZCAnSSA4Qjua5kX7cSjgBN4X4wWAw5EEfdQpPRAriLy1wqwW1x24",
  "key19": "2AivEqZN3JmQH26nVfDDUueRwDsoAoo5aQdG8udSyPFt6qrpuV5p2ndxJkdGbHpqVfpSmr4LsJM9SVJUhv2uLJZG",
  "key20": "5Aw2KdosG48pDpMcaShL6zhQFRwQfpYHh38xysMqvZm27chbivBjvGhfJZMxDEERamZSae9M6jdBAUaRGuBYyL8s",
  "key21": "3YKEoTeKhqfRbHKvRsuUXGZXyMkXFWcex6GqJ9yrBEbpz1pU2EhHBBTMgPv6jCgFaMPQ9qpHwcKUuiTF75ZPBbEs",
  "key22": "38fe33s4Zn9V84cG2ChGPs94nKB497ATtWAwH2BK2dcAT5UDF6uMM2u4DbdE5qe7dqjrqeWuE4JSt43ei1WbWAme",
  "key23": "63nWKm6qXrX5qLKCz7Vz43EVkScs4YhmGJoprChCutuRykYQ3bVzUFz8BgBcvwviDL5SYUWR3efKJgBwa2R6mywK",
  "key24": "YtfH17hizqzFyL3YhiDnX97Y5GJAyShKCTn2T3zEht7YSuqrRzksHEXy7iC5iPfw7KUEsNP6yd9exbVhq8vGACn",
  "key25": "3Mjt2jWBxLHM5MveE5gV7fGBc3k8dwZLccymo4kRQewUB8UQEgtpRVzLCe71wGYFMArQzqXAjMb5QLeg1eo22fkc",
  "key26": "4hr54mWQ4ppmYwgzTVx7qLGv9F6rGECSbrfM3gFQXjqJ85mRNVYUvnXFjPGctRqFPxPTtR9gfyr49JRwHS8sSbms",
  "key27": "2HLTJC7mXicTKqcbZdQa9AReS8tSTGpTTBisaxMxgCtur1hzRQ1faBRTefiGDBEZkvesJ1ZhtkXkYJuNwmAmBZQJ",
  "key28": "4JdjVKwnUAmNAYV9wRo7zTmgcStTzM2n3rDGnW5jyV8wTRNBtybgRsJ1BjuJo6V19ZX4Xy4pJmXbPRzP22vqNb1x",
  "key29": "yCr44nNtb5FKNyZHD6ApM1BMPFjwDc5yymF6bBsTyL93g8N3H4gwmH4PkcDrT9GtAGmQzfvbHAnW6suPRyTsA1e",
  "key30": "2ieguD7qnmEpD43gw9pZW5fe4B6Go4y6mNSws4umPJpi7ygdT6YnfdvAGhkqFRjekjgd4JsqxwWSkMKC9shEHvrG",
  "key31": "3N8UM4NoMTZdMGdJcWYmrqeXWK1BtXuuBqAWhDEFEU5NN57NM1vcUUkfP6V8Zh12417MJw4gGjzrWS29ke71KnP9",
  "key32": "4pceiTizwoTmnVGDDYbya9rAinrgLjLTUceiUS5RCrBWSn2asDTfDDsL5Hro75Medae8DhFeDDmoMfn1EewDDnyq",
  "key33": "2AHKauv328GMjBTv35xuYA8o77RkqzG8rax5DyXvMvaxsmZCENZthQLZs5vkBLvJs2WKzSk5F2X4qzRkYL5ed6R8",
  "key34": "27zQhu5wUhjwaxabcwQ6UjzHprNmaSJUqdDD6MGEDE68DjF2kwZkwkLv7Rb3NaKNnUhjznKouvSUWa3q1q4cCX8F",
  "key35": "4Wa8pcz9vggzQowCLwuTDm4AUTQuEyJatC65dDtswrQb55XsZcC517QWhroSDKrWBKppiqHnUP7ZBfULDEvho3ze",
  "key36": "42wq3ba8wtv9hcRHTVUGTUJ6n9DVnZjusg9NSvQAwp2AQeDd1Y728ab2g677yFr9Jkp7opW32swP4eN7owtfLkRB",
  "key37": "4aLgb7uUupC1677NdPrGLDCaq5UuBACKKo6Qf51P4DejYCkG1m25E98EFj47qywpEQSCfXhcZHRjZh4xMKVX7LaK",
  "key38": "37bPhanA9dohreY29XnUrRMj2WEZrjSUbFRziz1BeDQKSFAK1ncdWM5GJyrFj1RmE2rPeuw1bZUtSEfcWEkdF7V7",
  "key39": "3mdj8wiKzaNrVpF6gAMWtzWkuNDjD1TLWQbK6TyoMc5Ne9ucMtnDuDiSDrKQJ1hARhzEKU1ERjzukpUBdEx3bu1c",
  "key40": "2PBo44jFvugWbkTa3BhSjrLVfZjNXYkvQtWs8KCRYnWampy3NhgpsvZgUjtEX7rqi7NjmjN91qs53N1XZkxdV8B9",
  "key41": "TtgNvSk9GRDy38Kbzzn88S6daSW8qQUireKuK9L52RVJudT9fRos7axJUpqPEFyoS2n7Xdmdc3mLdjHXPrBBZWy",
  "key42": "4gTbAmSagB7xcqjgQoJQU3DgrpfVbJjqn2gD3Jr6Vw7idNoe9DXmDevUJqfi58Wh2BdH7Sm6xvb3Pt1vVFc1k9nD",
  "key43": "62rwYknjdE5RcVNHkHx6RnywHmgnQqtZdLiLsTkRzrnhMzhxuUSDRMBYji6tTft1H8fFgDYyYRmgjszUJqXLg4Sh",
  "key44": "oVFzgL3STfYWKFER9bJKR7KM5xAhqFMmZAygU4ni6C6c76iB7V5azeCba9VzFmijaLJBuXMMh6JfbnijYukkEcC",
  "key45": "37P9q3svPeQkLLN5kH6QNid7BM2ombWdn2EFnkt5VFbuJDqGnbFsaR5aQQA2vq4pir3ApuYNnqePYFrWLb51aZ9f"
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
