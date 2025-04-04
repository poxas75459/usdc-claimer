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
    "4CApqSqH5mouXHnAQ7iUY75nzLDZJHipGsvwovtcyCuC5CbJW7uvasgLpPa7R4YbwcmvfnKX6QJG8TL7TobnATPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGNp8aERrBf4pak7dctdP9ynwZ9o8G2pHfJenx5XwjMLg7SuZQHvvFf85yYXCD8xWC94HU5muyyxsWZAuHbBu4Z",
  "key1": "5ABLgDQhQYzG89ViYS1kLaF6NhzHKPE8BYh58o1zQ73mNip7SEAgnBFifGnvE7a6edTnDwYWeBcHZV6yggxSB19H",
  "key2": "3U8YYv92h2Xt8xFokJZt13BmcPNTXncE1fzTMgYUQrD59a2pNFPNbJSxJHDWhHtRZvfQgdxCWtH482yZ2SCVmE9c",
  "key3": "4pub2W6ysPtbTKiwZLdrFhD1Uh6nC4R6SgTF6A3HdKXLaYYiihDxgc7e2qkhbbSy3GZTS2LyqGSjXXx6wWceP4FX",
  "key4": "4Yk9eAVptXRvMYZA2bUiJ7BufnXCRELubyS3ye9bFvAqnFUeZMokYgJTB12NC14nvipv6HkKEqbXAw3GJiH5tJMn",
  "key5": "66zUbtU6NiZdrH1LQUXdaALqSRuujU8JsRDsLxXVERMqqL7xwQxGsoYqFBm1dm4NnBibcRpkjM1yNkpQnFxht6Ey",
  "key6": "5SDaCLTaqzxAWotGEKk9xmvB2c1XSjueEsaM1ozvGVN3aQbTchGQAcodUx4KuweURzfM6LpfamgCyR7jiFjTQZyK",
  "key7": "4y8bGgeF572gE5Lmb4EsXrMi2u4mma4cm2vJrrmdtbfF8fsBrVsa1jVutUQmVeh69FvEso6JAkRKnfPaK3jcCD2i",
  "key8": "2EJtjahxmksq4d8mRQECnPt12eEJ4mWZ3tBwaKdGBybshwXRQQMPyYsxbRzz8yePSo6eqaE1uFiSdrgPRWoesscq",
  "key9": "4bv4FWW51gqUYXEdn6recqPSC34n9MEyJesgY8qjE5WrQkB5fUhC8PJpG6dBtRYJK1xLAb8yEKJbEt5eucsyPWZ3",
  "key10": "5io5FzkeqUcvA3MPqpo4tLUSZ9VKaagy2gSBPWcBCpWaHvcHw2kc36k8B7GsQ1Pbs7KjX4s2HrvfGq768YhBB7RE",
  "key11": "2V6MSAwTsiEAtdXu8vwRLgyKQftSR7PF9KPHqLR6XAccfWvxEXN1QABpc1aJbe3UKSrSnKrrWDjW4QTHKQiAJ87m",
  "key12": "5kPuFQXo3zXbCdBNgJQzVfTgWqjKkZVap4KmMaCN3ZuqMboms47FEiZysJGwg4CyqR9ra2fTJsmrST1KuQtDP3Q",
  "key13": "3p2ZFXdQ51kYxhSwHdYPnzz2SmkjquiWbXxWNwNkwtZmX2qYaJKk1xF7g4Ttv9M4JoycReCoVEmnaWSEjiiDKMZc",
  "key14": "5e6jXbrBT3DUg5BgEXkj8DuTN9otbruoKVr6tb7mresedbWxrpNFgHHvefoav8YoqBVGEnsJviuWHjXLMgmBdFem",
  "key15": "3FFHCab21p8qvZJ7oy7RmAty2rqWBRT3q8G4oRCPiq4741j2WZBiSEoo4nPDeBtQocpwmR1R12duiMUPHLDbQERJ",
  "key16": "JP77j4rDoCo2nTxULDDmAtwN7UZCsvTnHYkWXeZgkzkxuJLNxFLrd1j9kfd1MA8gSAyvv7Y3XZeQ13tdi3HhxUp",
  "key17": "bV9aPdwUdJjqjWSb3FtxMgQ6Gwe7L5yb2WDQ2iRTDQUAvXFmN1v6nt5mBgAJfcgmA8N6aUKEAyY4teZwxfsUk1L",
  "key18": "4H19RwGkriA5UChxD5cz8SvRw9dpUT8dcrFSi83uebbWHzda7ysRZ1g3a4ELcVerHBasYABXDujG3pgiYcgc4KNk",
  "key19": "7HKpVXUL18sshcKte4RS3aT7hVR1XPm4f2w7ruNeKxXQXuHYc4PDbvuPVr95U3nZYXkuqMeNSsHyoVtNq5AaBm2",
  "key20": "4ZL4rvuvRHgH3DX4L8DZpeuhmPEK7oAVpNVXv4Jri7iJw5UGF3WjaQ1jeqotEDSruAEZC33QNGRE3nbabKR8wP7n",
  "key21": "4qPHwXaHVy5u7JwJQfGWQNhHP4znvxGh7cVPhp2hMNJaFjmsai26wbqUBTgoQdHeGQhMCeebSKAhKk6gpYmb7UP8",
  "key22": "yNvvzyAxxkkSmBVbEraDjGvQgQkrDzFPVwf44Z1L7hcChJWXEzC4wmc9n58xsbjE4QMWkRLjr5QtVRudb1r1G1q",
  "key23": "67NyPxHaiooSALEnXuj9DNATC4dpVY482dPp47yYLkhRy6eiP6xiEM1aaFW2iBUVSqNDstWTYhxH8ZiLVERS8Y7v",
  "key24": "Dz7gWWWfRfEgf8Po45nTmvQa4AmmAoeF2mz4BpPr6aYaoQ16i11Qb1VtJEo6B4Pu6b4qw1P1x2qYwwcxPifp24G",
  "key25": "3aEGExg1jPwFRGR8ywxevC7rRJjwVq2KrAQBzp1VYCiVjCEqnQ9ZQvqLUj5wQ99Ce8Z5bFGURfic7y4sbdjMeoGs",
  "key26": "5gqvwhq6ahcxvAox2uwjAQQEFmepTyPDWw1DmcygCuKXHigD9BXs528mT4yk2rqbuyxrSP9b9xihWtw519rzNT48",
  "key27": "3vpYYhjhLmugy7cCuD63gTr4MtT5dLrcjcfL37qCoMDoWZcDSqPUnii6xsAPReoKd2xEQ6Rm4PBhXiTUpErXXrPc",
  "key28": "26R9XegvDjZzJEC8wxj75hb5Lune4Qry1GVjWrcF7whASN1pGG7U9LVPPeyqMKJU3UewoE4Q92gG3kYHn28hzRpz",
  "key29": "5AdGmhK677duxLSer6rGSZ8VGJWL6F26qMsGbKFH2zTrSNWCL25WqkzmyGaKcBAzyW7mneQoPuwhNRuDJPFQcRpD",
  "key30": "56ruZ2Ab3QZHFMGvJNmxbE84qL3jaCNgJnP5Qco3Es47EeusSBHRJJizSFoY3ujg7ZCaDxhHDw9Po3YB6dytiXmH",
  "key31": "3MHWrKZFyzEbQvrTTshQ8HsULZx4TmijfSepCXcKYp146qmuML4fn1sEanhNw13yzKSgyt7KWfp5RM2BdKwYfxLM",
  "key32": "RhKE6iVmKJxqyhV2KwCmU6Ky6tenufwEh95BwvH6Bv5uHjjUvycJVQnhNgYGFHNJVdpX8y6tCnAiZimCXQBwC2a",
  "key33": "2oxfjdBjE4RNRdcKD1NNyATG74cgD9cHpsEhEsSsd3P68Yr5U9BTamU8WUN2Dis4RfVKUxSMwd2W6DkghiWhdmpd",
  "key34": "5VykRxmdCYjpP9NfsaGw14QQcGcEw5G4x79GExA5aS4vM117FguGtBfRFNwN3yb3qkDYLApBVCr4VujgW1GYPJ5F",
  "key35": "5UpVYv1pNYLDq92WoQ5F5x5TopvwDQyZc9Z9JKt3a6okrYH3bN7xrWg8Eof6Pc26tT73U4VYoddvzuMJgmzg5UqJ",
  "key36": "2dK4TScVwrCE553NtYq16UWXNhLdSiasyJ1fwJyKgnc1TE1iNMYEcR5gTSq6vzKk4oM8UiLWY3Rueyy8vtjoj5EG",
  "key37": "2UQBJeusiXi4Fg1uNAMQcXPLQqSeKFVvJnXovJT8qvTkGBhyJ6rgG6q37hcvC1t3qVRu4ycbaX9b2KThcLqTAoVu",
  "key38": "3EC6AtWKhQjqXChSxK9zE4k8LSM1xs1pDSZruAzv9Bq47WZcqpkkTp62rAPDPRtzUWf2H85zim5bomAMCLrxZZq8",
  "key39": "3pxk52jTw2sjMtc25Ua7SCV2taR6iXkMQSMdAnSoWJRppsSbY8vzfaSKdcQGRFKm9yaEsEhxrPJcgFARURo2P15r",
  "key40": "5QjFPRYuF3GTjUcLb9XKDrjiap6oESaoayZcXYABFuyMaxhTn9ALFuEyLbEp6QMujYgtedXBnu44dWrik1qqiSma",
  "key41": "D3SxCCdQizgm7oSxee9paLbkjP93nrNAwMgQSPbLXvPHMvJZkE2UEmtustFevQEiFNspsT843fHRx7e8UW1s4Ek",
  "key42": "xtKDPgqkkGZiTB6gkNow1fvZ14K1qvCf2xNhzQq5Ecs7gLZdWzL4c8xkFXBKXfescTvyYXtGCnkY75fUGCzdCYT",
  "key43": "2ET4uoqQWNHbCKWcgE9DTbnYHXLvoGxNiLzQR486PJKrw7Adw3F2E9aS8twbJiRaJTNk7yzUJKTjkpJHEPUWmz2y",
  "key44": "25zYJiHw3owFRcwwgWWKA5h5mKxpjq2AsRqM7cf3L7TEH4AXvbUesbonZ7Loks8hCrzqiULtgTBkWtoGsbXrdeYL",
  "key45": "3VTkX6iUgXZPimS22a7AwRF5tQkUGmf83nUsHjcXcWiLEgXpfwDbf9UCztTsCTiegzvurMgSa8cLTeWAqPmSx3EC",
  "key46": "3Jo6MsSQhht8LUk7qehnQmk3Gankt31dWw6BN27Nx7n7dQWphY4Q3Kvw6YAFqDMhzzwDttgKe3EnrVvqfVq7Eaq9"
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
