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
    "2znNnbnL5oFUu9p2BeMKx36ke39mVeyQeVMvyVSZeJLCDcjB3KzRD34LE5gioMwZveHjjdXgKXqi7BKZDXNzriTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x84rvzToVGvgr6b7jxq9yuHasQ5vvv7cWsNrmzjkaGEU4cgRKxGvnrfimDiFFKJ6gYBpf5uz5qp9Da6VYvr6dmj",
  "key1": "5TsdnwhEpqw9PSh3FQc9YR8xmRWwUas9xKS3vDinpg7jG2rTvpeEDqfbhUEwZpZcz1NXYJLj3EfkqSCH8eEC18Em",
  "key2": "Dk1q5fLMMvAYG8TfNLGCSGUp9xnm8SRTnv88FAR4c8MVB1QirSWzQkYDbrJD5MKRjsf7MmHFr9Rmh3UTAdi8FkG",
  "key3": "gMVZ9KLeeNoBH8ZS5gi2EFPuCZbyWXeVsaHBw3uRNJs4Zewbwo18eJjbJJ1wjL1xD8fzXx6SinzQsShBHeUBXCr",
  "key4": "3cys6vkmFyGsUFTDdu7NmeCuGbFT7CymAfYYePUBzFSUbXjTJYKK19SJr3tmdnGk7QF1stEc9TTff9FnYyWBRvGk",
  "key5": "ByY5rXvrSezJj5v8fHTdZZRkxxw7kXdd1LZYLJQgTKxZuUG6JR2aPRJ7xp8ZdAy4oMLLutDjvAbuppvtS5TufYE",
  "key6": "tBMeMsBfp4V8cetL8Vn6rdKqnRbtRwQYt4LKvuf5FW1t9oqndEG6YJFpQsZu16wuPZkr4qFnBpHzdZKDQ7LsNia",
  "key7": "2PR4UrPK1w5PnASbg8kGpX4EdBt9G8iwLDZTNh8wPeTw4QS6T1MzbQ1UsQ4aLb1hnPn4ramjK6s6cGF7Zp191zmC",
  "key8": "49b6YaE3SmmxkE7dJJwUcL7YH6rvgziyYjgvvKDSZMYB9EhimmWjhKodMwVhd71RBYgGh3JEyq6MboxV82bN1kFK",
  "key9": "Ea4eenhrKoeTQLVUugskgKRi8E9at58HBzoxnCcANkDv9YzDKwCa5wjuCz3oRfQCHRAKGgJ426BCGxd2Gew6k5a",
  "key10": "CZPdyL2VF89R2rXHhJMmV3AFB6zWyXEg9UmdwCvbeBB24saApichFW8v138tj5hvBj8duSjnpKeLPgJGYroVUe5",
  "key11": "4fJ715GsWNjo7Pew4KTGWCF86MNYQekDVbwfNKuhk6b8SPVveCGR29VJ9wyraakAUViwk2FAXf61AtyVKN6ZCxWk",
  "key12": "qQxYsRyHw1KkFmTv9SUwkyj9ma7CzYUg3pWNpC1h8Spi8KS1u3Xu5HhDjPfDa376NqbZuq3hvwCfNbjMNdah2uT",
  "key13": "4FFZVsDGsmTCBkNCvMNcj2tXJZqrHgdkavE8Cq8dPkc9c6SX7HpctiP8rYY8HqcyfAsb4Dr5JZcA39zPdbpiYcH9",
  "key14": "rUnbRr4JoKVpMEbVQfz94WZHCaKTkUfDE2kngRMxEtYDSBmDbvEsR5ai3U8aWJtBxaXMoijpUsmbbtrqCpQt82E",
  "key15": "4J3QSQTbCi7Ge8unEHK74rF1sqpVPdPWQaBDh2GooK997gwpSrC8shgdiE3WeDqKWHnYCEtzK9DPDUqk46LmMMK",
  "key16": "5Gd6innuQyd5Ht7GcXerRAXbpKPQyAm3mN8CKAd4RrviQ6vNUrhoKT97xiJyggHuZoLM4XUspSYPTEPUfVsL95a6",
  "key17": "4pD9utigkCXhTk8QC5DqxL8U6onKoecci63H1imA6duTw3M77S6AvciKMuXyhbFWeA32Y8fJM94eTJHGTdEkb4bm",
  "key18": "2Qi7rpYHTnLnNiB45FoWr1RqSa3MnuQvdP6u2fopeKUEJCt3bT3otoLQCrY86iXtLMg8sF4gXvYQBCBhsxdSgHf3",
  "key19": "3ESy9Tj5ADdTKNvSreeErNbaQDAVQxLJuWJCEY6Mgs1uKVozXeKk4zn7YgHoq7Le253Q1HG5T94AD82a74S2M6Ct",
  "key20": "3TrxK1tKRiG9Ku6oEQnNPtZrhrZxBE2cpMX69iKCMQkvD2cUrn2vYCEnHGw3MrqZLMQXbcZxfnXALsJBvpTfB7VG",
  "key21": "2cc7KUkHnp6VZuWsdx7Bp85c851Tf1V4PzE3TLR1PkakkoaedbnCLQYgDYZvMSi4cAowGjDFdpaHj38HkMqt5e7q",
  "key22": "4z5smKQTjpDKsGUnSqzzxHHGRTBrsB2yQwEhi7yPwb87UrV6tuZnNuDQRy5FMv61iRr4yw7aUCpDrqxQNpes81q2",
  "key23": "4HybVEAU6BCP91LTtFrBchnpXkuDfnxyS7tPePWCwxqBg2at2Ln6GEhETsUPDyhyS4AbTcJSAJvobqw2L2rKpGEn",
  "key24": "mbogJnKPQPdujswgLNSspLhWfbC1YbFsZhHU9CAS6t5rcCFVAkHquhZ3M3sqNNjSSZw19yUS4QNYbHvoq3TMcub",
  "key25": "3faH8DK4pGc6KD1CLxn3N9aCeeSEJCZahinwwE9LQag3K3UEaomeCG4ZEbAAzGVS4UxH28H7Vn23cHNe2JR5ooU9",
  "key26": "3dCTSF1NwBTrNYeLMGt7fhAZw39TrXLQ2vf8r6pLP1R7NTSuFsbniKPPzJJyihjuLN8jLbjZC2F9nJ1Vcv1aeyAa",
  "key27": "67Jw7768uKUshC6ZGC1N7UvgHF6hNeLWFXkTe2ue564cJC99oaPCKCeqWhL7Zhutq5Uzd5UkjtEMw1JGNUnSmQjt",
  "key28": "51Y2c9sDQ1MsCdoV34hoqnnaLV2WcVWcZ7ve9Ygrd6kDMvfVHr7sGZCjUs5KcHB8Ba3JsJDBvxRJS3u9aHkq3sRb",
  "key29": "T4TTPgLWtbPR1PrdeYoQZAprfXBefy2rtb1qZQK9wLq8biNdtkXEyoXKq9XTUiLq16977Gd8aJnF9eoE3my62hN",
  "key30": "58VKRtBwdEe2w7ozz5Arb4shah5Byt6LmB9qFnnu4xLgJFPmF8hDqggTSHZx7DekySvsyyHzh6m2Y9eiuuRTQ23r",
  "key31": "c8XquGjW6dtJF8qTBpbMoKonRPE4ZuFsxynTkaxaQ8a4oF2W2uyNHb2Zmuc5G6ZenXMVKByQatZnUYFaSV2mmhk",
  "key32": "s37r19UZ5JeMAVfN5W4SAbYwhkFZ7bWCCXSSED57MghtcoPCQ4HRRuHtVDH4KdsnoTEqtUoyw5YzfSv657sQ2UY",
  "key33": "2xg71WEhr7TyQQjoWkcLGjpuMWH6fVEkT2265cc51DCYtZNZVn8M6JH5C1Y38cLepoNf9bfwAMk6UBcruCgag2q",
  "key34": "CJps7fpSccpH6DKNnaBjj8KWW74oTmhWQUEzrtbXEGDA1o2VqXj9a8ccwWst6xAso5aNcGtsBaQcyt8D4EPt38J",
  "key35": "5Zn1b2DJNrCXf2uurcqJo3TWFtUifzLXWavMNunJC4XZdHcQT8KS7tsUjyqEZLdaii1ZLmwpy8ug4u9qycM4JUvU",
  "key36": "5CsbQxX294SWZBVL6zCotuhQAGMmWgN2ZCjTF8SiVmEenv3j64jkb6hLR3utcGBooi26AufmwcEgQoaj8LG8pyyr",
  "key37": "4xs4fgmpXafTBZLxh9AskqCH81zBz8QC7KXxpdRENHrEGpKkdpDyMYaL5dSY7gMhA43XnDj9kVQftvQetcZQi5RY",
  "key38": "4pjsgv4AigkDEr7GwkzDbmKhkKNdRpFZFqa86DTe3CdNSDJQ5ndxhfEhhmhsnxZG4diSgWtLMP2r1RsGiqWbf917",
  "key39": "2mwNGgTBqjgPfxWB1FnTCd7L2RWZwVqzwH8M4MY274v1jBvxgxY9F8WUhQFfkhn9ZBrM8GLJXBWRoWXWo82zuMNa",
  "key40": "3NA9rPpggBr32wbSmpz1pKofY42sdm78VooaACK3UvHzcaSYDy75gyf6csaoSpeqyYwrGVsoTtKCCxS9oBAxB8UP",
  "key41": "4GXNncZQhFhEAMKhH7A5PrFTyeHvrgS2rXFhjLW41uJrNZtdgLvT7oTStQDM83eP5fKN2W9yUA4sus4qNUmXTJoy",
  "key42": "4kPGa6UmWZRJ8eKG7PSB6CTXrsefu1RcJoV7cEQNHZVeHmx3sWoJXH56m4r91wWirA6cD8Xc2f278intDuB9aKKt",
  "key43": "4L29Nt6V2PedYoSkG5iaPeSs3R77egZsx1tVHeTWki7FVz9NTT3w7vHKzzdSeRvv6qs4seWvQBb1NZ7jV5GSWugZ",
  "key44": "uesZDt3GKoxfE46ut6TmWCFnNqQaE4wB3DSsgGiXbYs63ZSu1iMWb9NobQdhd7TnFU2N1Aac5H1ZSsa8WBWwAyH"
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
