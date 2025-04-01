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
    "5xBzg5Sdnnu6c3rmuuBQLDmwCrjYionEpRxWXxULTB53UCYtf3Ng8UK3TdwyfJ3Lp22MbiDRNCw7w8E11uZz2sLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwBjV1C3iYHdPG4mpHuwVN6LaiG2TgjNkHGSBoBaxorfdSYAJoCGdnCPa2VcSKSBBshkYZX48M1r8dQs1ef8sNE",
  "key1": "6VzP1sLAQtLxndTQRnWctULmc1vLF3LPR9nZdGeo9TNmrLoEwy7wLYxwMZvx86pev5FeS8TG1apJzGuNkFjB21C",
  "key2": "53PH597Mntfz7yk8ocmYjDuW73UfHB3VTspDufwzUdPd7urPW4frYxPZuRbr8dhocUJR7qwgUCJbdWNp6eeXCG7h",
  "key3": "3PpCU5puXgyHiQbm2FTNhuDVhwUMJ6zCUFbzhXaU4kq4N9z8LAtxeaWj8qibyBm9Urf43fV6bqKYmNjYoXt4Vcb9",
  "key4": "23H1qwUGhKrm58PCTTkKjzJigaydxQHnnrCie9vgAyHGVWqfsb5txJuudcJ9VkXp4v111rWTB9Ev4ycuwQP2FFmG",
  "key5": "4jGPznAk8VuAQoJ6PPRLfpxFWXP9kUK6364iPnCBQUuymqf15worQiRoPe8Km1NgPAPfsPAAvJAsyjNkCdh8MkgH",
  "key6": "4ubtgdKxxz3iTwYyphPJMv6AYFyVia432akRJJnrjmiTsCohpv15VV6TpZA7saxRt5GQneY5s9EqkiCtFfkK6QFP",
  "key7": "3tdW97mPq3s99euPuRzdPAM8GVEzJ9DXMuEgGCYPzJiK9a3KNucchd3b2UcpJPT6qgdqY17pt5hdTuzvPXq83kWT",
  "key8": "5Npa7kjXsw2tWWnRcTUPe9nUxmQpzbDCRXCEUM4opS4ntyLQxFtkTRMjjPoKSb1o7SeeRhbqzuFdWsG3Zg8Bytri",
  "key9": "27dymt83eyJzpizu5deeescHtrY4C1KPuVoqugTvqKW9qsb1r4pXfHucbBoL2Qnqm4pMeJUy9s6HS3rge9XNuSpp",
  "key10": "5mLxGHWN9VztDJNrHpVComwgbMs2hmWG8w7Zezv6jhUZy661dtHzpSv6AMgzV4XtmSbLuprtyrvMK3sFiU5KbNUu",
  "key11": "4E56GqMkJrn8iYQaRbzhzxuUrieWgigj6WTSpEMC1Luc7pcoVAGg4W9C6j2Uiq2SfdW8yX2C8dz57gkF4VyyLvfW",
  "key12": "JK2Xf9cVxEzhXQqAcrfBMVks7rD9WzeJQUqyuT1qTfoj9g1Z6mWtBuogg2oX6BWckGFJjFv2vR95CtMdi8jET9s",
  "key13": "2gf6QUwyybTtMJUYBGm26sXJRyH1dHu9HAXBXSydP3nWivxsMkQGUJxm3oEYLbXjQLWK1t8wRyzif2mhm1TeZvRb",
  "key14": "4t3cEeZrC8kCWorxNhz6kFk573ZUWCgbRqv7TZzoAZxfgmGEJkMCNYMhMomKK47DvKbFZntjnSjUGsvUeDLTChkW",
  "key15": "4bxpFgzwp53H3PNfb7B8AejZLixTtMZkiyJvSZuwbFzRnNNW7dk74zrZ3Xvf2jS2NJgzUD9d3KmczhL4WLYcrn6J",
  "key16": "4CT5dGZxnp9bXSPoNj4PEU6FoVWeT6fPaLeHNNUa713q1Tq2KZUewnswH9BYpCSG2SmoNvCzLypWFZVJ6sLFGzGf",
  "key17": "66ptu349Tmo5f5mG35WuaBrT9WqsBjeLs41YPNcmM39hiJF8gQsENS8Z1r1LWnBRb6fPKPLhUwSu2ELhb54BRLYK",
  "key18": "4d3t7y3irGC63oP3GF3aJPMqcTN1mRpTqLqHHBLQjy3Spb6R5S17c91SfPwCz6mATpGejHaHUzQCYY6Q7ycugG18",
  "key19": "3FZCArNWYpXpKsFBGWFEerHkPbpYvV5UWxBtkRCULz7NXHyc4mXCq1e9ECvfgD3hTLZRBt7nFfaT4HcWjKP993VA",
  "key20": "QxsguZsyXL4nFUs5bec3YfVSnVc4G6q8QL9ZwYFgWc9dCmFmL4GdJ4ncyH1pAhUrp9NMtdMdV2xP4czojug6eWM",
  "key21": "37j2hVaRgEAhnxDJoSEDPD5qRKocz9Q9SjLyWPsHwrihR8HnFNPCNESZ1tXPihoegDmXpi9BE7TCvQP9UJkrsDjD",
  "key22": "2KrUx4iC1MKqZwtRVip2W9Dkxe3wGy4fVUs94zb17zHypnZrfNagNg3vx6rj9aamby7SHNCsxENxcq3KeAeamFjo",
  "key23": "4UzXNpXVJt5jaMW5uGriX8xvoExrzdEZGx1XZGG8nHbmF4wf1U9EVPcwXcGmKmv18t6raDL3rZUBgTZieFZWdp22",
  "key24": "2tM1smkwgYm8avgajDhTrKuus5cQ4gwCnDCnRZZki26v2Bq9J4euD5F1gYJTqqQwdCgtxJ9PXZG77AH6t9ZP5zjS",
  "key25": "3x6QgPbwiw6Cm3QneEPKGL5MetJdhGfpuXx6SHTdQEvc5dhjrioq3nS7DvoWT5oMaRKTGpZSweW9juWczEwjbBee",
  "key26": "2DrWB41UCZfhxP7sZJ7QyZQ4X7ZqQ4hFqAHLqrop3EzAomtgNbHxju2YBweJesC2Gq4TmStbt8q6rXoaHjTU9QS4",
  "key27": "6XLMEgLi7PkfZ8Ky9oJWfPa54jmiataYsgGn4dGvRRfxycWgyHmtmzPjh7JuSFimAfQNmJseBxbpMjXvejtUHXK",
  "key28": "437JKawb2oYQZc8RHb7ZyC12xeSSn9xN5odesLE4hktzTU2VGSSwBjAWoYdBPsrE1Huh8dKwZvKUhHw8kGD8yUsC",
  "key29": "28UiDDhs5JT9f3SbmdrwHN4jMEDBEaX5MyDiPgMRRDhWy3pimqo36x9XKifWGgsUyqnipcwqzbisxut5ZvJQcWEZ",
  "key30": "5RPo7t9jrukt7Ve6hhGVEYuD9J2iZCgKzZ2mBPgic32LjBGCZQgsqxbYbpRiAhf9pgQdLdko3NTokY6TJLMnnzne",
  "key31": "2ekFqz1izg6SABBaTE5dz4ULSedSd7Dj9KKMCR5BtvzkmnaZsi5Qp2XDaX3de9Q66ADn1EjnxuvciNiY48TT6Yka",
  "key32": "48prFyWYYBraA4Gfn7rpDGPKFKxEmUqBAZqWryfdtf1pkenpqEUYu5S6uC6LWSA6679RSh7KxqaSuKrJ22C7jyx4",
  "key33": "qauzmSsmNJAXLYNH1NzCEiGEeEgYqJAJMfzYGunjbmAYmZt7meafnChqLNRwammt7w9UkfAiMEEQHi3nCK31Zqn",
  "key34": "5CGSAPoegGFvvDbSfxcUTUeqA5E4vpJYNFerXXH8f92useBpg5R2HaHqRX7zwrYz3LqpSgFdN6PQzyYrt4KiNjdS",
  "key35": "3mqngxyfPH3KLqj5QWpetaj6JEi5oPgk38KrwRx9x2REsSJKMcpQPjQMDgBra3Fk2CrYoaDW3aLcR3evcFD9i65h",
  "key36": "5k3Gf8y7ZotrgpnsGzGub9vgojmrv7Zm5HYdxjuJzcUsRoZBX9UjQoPa2iScQZmD9zzq8ooLyYb8CNag8stLLuuu",
  "key37": "26xScBV4VkLSNe6wCWrpugBZBdCSsTRdur9A3NBrgxF9PnheNR1vmvAT5qwVq24TQYuzRJYYQHNjGuQApKhZTJPU",
  "key38": "464NDWErijewisTsTT3bRd8yWgetgWpZZZAdUGET9MZpEYDCiCTY8Qko57PGhCUgoRkGPZzZBmCLrRXgTv27U1o4",
  "key39": "27kW7tvr2sxKmZrFLdHugP35xoM54AtyFh1JiZJDUQADzSzFdoW7hehEkqnMYPXwpTLyQtXe88HomedP2e1GDxNA",
  "key40": "5KZamj6FNBiU4SpRwDbufE8RuzxxNsehqyMR4jvYpyEawmByHPKjTYDwBL32BqTpZW9i5xxpW7EmoYfxskKkKjAh",
  "key41": "CLvXRbF5AQrmhaPqujiJM4JFCPHSz3YxfxMp4LeRy8Dp8vW8Nncrm4Yu3ybVSBeYnj28euvPrvSAf41fVCCNFse",
  "key42": "4pSWHFyHRw9tSeT7krK7eworGhab5raWCUx7tZBxCv3Dor8fyREf1VmkNr69sxkzFFQJjg1p8D2in5MeEfXcWCWB",
  "key43": "L8syzjEopwCzDpJKdAvpA3ypkfANkRGpzJ9xoSskgWXnDB8mQzrHX7DcJH24acebceEQpDQuLjVcKnCapZWd7ZH",
  "key44": "jAZVCxFk24xpxEQAWzUj248EA8w9si3dd8tcpjoGRG4f8xqip8PzgBJpYd7poJKV36oSiSGRXrhae2jnB32fFdP",
  "key45": "5iyspy9KEnntv4KpLpxb6bAq6GeuiVpYZQpvo8Un8mkqMrHsdtAAV8dR4vqhJfM1KCpHzwjNSFV7RmrAunujvKvk"
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
