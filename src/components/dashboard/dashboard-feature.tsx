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
    "4Ztt2JZmWeCkcqAgKUb1DtJqJvEGLQKSdzTVtQdhcadcLjNMtjChBpxREQCByyk8avm3sbXX766nV88AemoEnVck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FGm1Homzec9qzXNczAQFH7yVBD5HNYEXs2mm3a2x9djEMCTpDrhQyoKWCPBE9jDEkTVZaSCMjtWhusF47CzzEV",
  "key1": "4ckGQo5rzF9oCSnTCtem4G2CNEdWN6vCq8R5T9jQJaTWCiYCAMZqKNpp5HGNfqn4DsV4ZP5jHX6y3aLvHgQ86Qy",
  "key2": "5mz9VgR5un6Pt6PR2fCotfCcsHhPNkis3KVk1HQqjMnQ5zNNFTKJJRmsLj3W5D7xUkdxXs7uszYnxq3nP4H4b3QX",
  "key3": "Ypz2BVvNcgbdrx7LY5naRYFs6rkmJvEBG4f1beobbjKKkySXqdcw6JxRnksCYzPkKr7xAnzuvqBb5CdwVoNXNa3",
  "key4": "5idsMyWRxYTvaougPR9DnzbGcymfrCDjkYRRr7RjXmKmfFQZtbwprQqZFNAHCpParfzDD74cyFp6qD8mjeyoT2X",
  "key5": "4uApUsGvVHCZgN92JqfqchtjGEUbFExRp7Ub9gsRugLsKTv9wHanTBsya9AvGxS95nbi1P7Xv5ifSCia5bxpDK9",
  "key6": "3HhG1jB5AxqacyCKfHT1AxJDfroAqEvC3SeJ4ny6ANRdxxZLyMBFUk8WNedT5tc7EzKAKmsSkZJU9CEXjhBUZg5B",
  "key7": "3qT4Q9eHGPH7HCy1TSQF68GLpYNrSvKoBMoPKT95LhtnS8Y7fWKisc9PcZQaMAo1dvdnkqCngshYL9nnqhe3bCPC",
  "key8": "26QvYUjB39F4KB2ZQLCAhBuB9qQU4a4mCu212MSNqTV9v8Zf59JDcjBEuYcFQ8EifQaxepsPk3jCWD18QixF4j9p",
  "key9": "262mLFTGNRHEsTfkRDxR7TriD6zvvNivmRopuydLftJZkX17cbZwsvejsoHnWucKfG8VitAn4CWndGDszvZsjDfh",
  "key10": "4dgwwCa1nTKmKmykAjydc7gobTHJhsseFNsYbYVpoeFakG13ha2owhKYSkfCEVLcCCW8JQXi6CNM3kHWapZ7cExZ",
  "key11": "PoUSWZ5hFajWW8QyVEeSMvtWXZJRKvyNbLmz6c8EFj999T1uetCozP2w32j8DzpWkfpwJCaEErXQRVCHRrij5JB",
  "key12": "4QAFMdGA2g2WXghJC481nphdF3gcbPP6uvho6n6nCvqLyiG4QevgFpfaYaicozAe4K13aBKphEs7EsBYj337qSR3",
  "key13": "4kJcT4ijkFnfMk5uBY3QXNcGMm2a6nfym2j8dqtBYEoXk87JX5Vvjuur3oWNCpkUcsEQPDuGZWzjs8J4fCHHEQzp",
  "key14": "CVNZd8CF2m3qWb2GH1imCJpht6xs9C6FYc93Xa1GMZe3zjmtbYU98bJd8YSeswLdHg9eLkQ2eFj849JhNACVyb3",
  "key15": "3YtA46zNUCSDqc2vy9nwj9u2SKYVHQxdvzbrXpxKh5rk3a5pHiKSbfEWevvat8eV78k2Wj9Uc3X9boACUL7m8LRW",
  "key16": "5jX1jrpVMtqURBwMaojAobSAmRkMWuNWxXuDMA964pN135keVjKfFALojyAUSFPKnnxyb49tHmLK3MXNZLyKuKYC",
  "key17": "XDe91CWTiwBMbwZSD5qUf38hNmPyggKqrAU2oiuH3g16FDofEvr42viNbJ4Yd9Q7WNbSTQrMUvmcwT1Xj6qaaEP",
  "key18": "3PpYoqTTq8cjjtCVbU8eiyBfp6DRqBGSQqWZ3v3MWSbJmUY5NHtE4cJfszogHcpWoga5K4pYTvLhPdPvgN1ummRm",
  "key19": "5Vfsyi2rojmVZbqH7JDbqUghZzi3LMGcwFuC3tY3mpHRM5MMRqu2hXCKdkU5xWvDuaRojiuMB6F4XQxJSZdCy8m5",
  "key20": "66y1h3J9nFMnPNgDqjyZw97BxLPBwARW3MHotQXELoTRKbsyRmE4pSYmzF4UZZ32gFhudMpogue97HhFPvZctsP6",
  "key21": "4ooQzKkB2F5NBc9LootFuosjSsU4YmBCxFXeLaRmjRoCrkPLZCn6MTUwmXueqTY6FB3A3V2vnAUGhVPY3MCerhGs",
  "key22": "5msyk7u8h9NftEW9DNc61X8nCYYUw57T7eDShKNWSMyqE8ED3kvA5SFowG8WtS5cTCTs3RsdnvU5r8o8yqCiJ1bh",
  "key23": "2Dkkd7bVbMpMKw8QUQH341Fsxj4YRxHRZHoSx79B4EhYjgFkoDjdMF1Qp3FtkmRM1kpHDt2ZAQKJqek2Y1BJVenS",
  "key24": "LVRUGA6sGmUvPrB5vXBasNhgmYoW8WpZKw6G7TuKcfA6zrqrocyT8pXZo7QZQcwtwofnZdmFrcWHxUbYnomwCfx",
  "key25": "5o6ShHx2pqVh4QtK4RAwCkrwXomCxrJofU7hcdadEnty9LrYnQzekxtbjezyALnMgCWnkbxG7nVYBxdNqm9E1hTd",
  "key26": "2vR52ZrRweWJC47a7RXLPTmKZg3if86pohLWfpJLKwcZAPWg7Eb1CSep4CDAWZmR4yBEgF5vBJTiSFpSZrH4sX4u",
  "key27": "4nQiRSVf41UXCT8SiBuUoRhHp75hJfYrkWCHedNakqMG7PzDaDoHAqP7jt5cMPS4h24hq6RZsHvs3FATucpC6A9J",
  "key28": "mqZUSJj9fNT2WGxVpL2fhoM6A1De7eeAeUs6hHrpTAu1BoY17UywA5TbUzxseRVYhiWzX7So6HNZvLycNmagVri",
  "key29": "61SSt1aXmwzEHYxsAKJimyC14o5h1ivKzHobcEWePsaDDgQNfpjUcpVpsWNiZzZHRV1guS9hFsZpFtPViYHGVd3H",
  "key30": "5krwhEL8kV4QbvDNUug5ykVja8b3KJU7JiexSw3cgFmFyc7Gqk1nZGn15XTxKtRM93JYb6WDLRWScU12GJJK8J7m",
  "key31": "WzWUZe9zi9VoVA3nEjUBdEgWP3PYVDoDGynxa9Qp18AZ8R8x9povUFAyNQATGHuNSVAGtL21b77XARfrCXoqQ1D",
  "key32": "57CPdJEDPLbPFKRjBUe5tC33mEQo14QSvAqCch7wPMiVHgdtcSo2YsarmEv4mryHhmPa5n6XHCNpcb15RFogLEQf",
  "key33": "62hDJTmKdJSyxinazsYwgb3P7EyFsdzV9tYNtDoeNPrPv1st8D3gLB2qQ3RiC7p8N74zdd67AW3oDHmdLZpqSLbU",
  "key34": "3L3gS1NLPXeZ9btnxtoHCoeFwGpwvTZZvaGnxBmsDce97fvLHYD6DAkD54rkRfE5PtJK7D7q2v7WyyttAGmBJkBU",
  "key35": "4TLTC195pKZwSgDYzjph5uUe1p1jt1gVeskNLoGY25arpwiWPhCFrpuaGE2Kmw542SeECEGbJcucVR4Kmua1xAix",
  "key36": "4XpgzEuqe4cRbKEhyd2iyn2Fi9qxaLMz85rPMbYxQhfhqF5SLAaoe2JbuTVQiSbSkUYkmyMSxwnGaWkrVJ94q6tk",
  "key37": "nJU2EU87QUSGwFGxQsUTXSVmJ4TQZYKn5K167AfcufepExcJT48XM1V3aed98cxf7UVaWsgP3gmizHNEQsJbyfV",
  "key38": "624qRg3Ug7F1VEfxrYjUc4BhWyhT9S4hucA19X7QwdumrzVo5QQYrwgqsXSK1ijkjLyRmbKU1hUssKA62WnptDen",
  "key39": "3t8HVasJzwbyPYTtRvffNJ8J9cAuTPeyMCV9poc8hRTKAn42pjjEdczCmVqghZbti9z2UPDkgJdgJGzAqTJDwGcT",
  "key40": "5QBxfd6A4yaZUc5mbyGxLrTU6xz1HY2SgVgXew5XnSynY4VkdbrhuxhdnwzfcuGuraBUUuecQjeHQZbesAZN5agj",
  "key41": "37CVzfuZwoPQ863yDGg42vSmEpuwznT4XBXktVq5ggBP8hsXs8L9Bjni1siAvrVhQjwgtHihVxGsBNXx3rcVRSAj",
  "key42": "3Ynoka4cXYoVbLXGSF5t6a9whyRfMRv7ndwQx26Su4yei6gu4WTtXLQFDzkYHZ4XC7ZRi5p9FhiwJmGut9bm5zw8",
  "key43": "3A2BQHtSHw7ydzekF7a2CWrRw46fQji26T68f8gTXd8HrjuenrBNdFomonZ3ym5F8JKu8NQ5GhAxAchBFG1anJ1Z",
  "key44": "5otUKEtBqtLmWHSChwEoMte4pTqR8wsiqgR7CU7NwGU9CMowJiJFPsmEAi3Q84fPqCFxo7z3ChFs4TmfxwqMWjat",
  "key45": "37Zc5yeYs7caG6aoiiPSYhwhwo5n5J5YvbpaT87gw5aPEcT8un4oDBPbyCfoCdXVCpCH3EwAhSFoAFn64vAZgJQc",
  "key46": "5BTtPy6kCm4fbCqaUk7jXcQU3DqNQPKdSjPyyNeJDGQdUEvYDzcRL2yBVeaWJWMKGFgf1cU4pTx9zhrgC4KP6MJk"
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
