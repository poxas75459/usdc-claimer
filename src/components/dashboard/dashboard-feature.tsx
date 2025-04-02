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
    "42gXfF6qhxuDcJgiweuzWsBT9zXqAxZBYFx4MRMvPkP3ErjkXkvghiuZc6dqSMnxH45TnKMfHtFWpCtoUcaah2aL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKx22E52jqcMZg44YJoP6e2Fn3Eut9qC9Xpphvu4dDu64izjMLXGmP6gWNgCi465k1NsP6paoYkR9NKidzoKLDD",
  "key1": "2M5hBRAy7YY9qGt4rQZXsn2oP6AACDmQsKvG85Y9Zf665wu8aTrRhMa2cxNafBYgxjTdcyr1KGa55HrCb6dAuRY7",
  "key2": "5J61arBqDae58pqcabNYEsPgtfhrnSpicQ4YQnkQUC9hqL9xfL4tM3DS3zduFLorVLebmTBJPRrdruBz1ZHt7Fdv",
  "key3": "4M1bUEHGTKBzqbFZbCc1LqvoJUr6fNbno3nVbEgNx9FKf1DNdCZYkezmHVNub8nNjSkZmdREDxpvqhTDKwjJYaNX",
  "key4": "4KAZXa3s63k8kizJTWS5YtvwKL3yEc8Rhfskt1SzL7eVVxJaur6nzsLDEEzDED5XZc7ZRcbsXAVBj9HDtZmL713B",
  "key5": "42Nzsb23uYKk6Jf9xN7xoFdf3wscF2SV12EgKzkxJwHmF4AAoRf6rUqJzYhHVFaJQ5AFoLLUq1M5epvixojpApzr",
  "key6": "5PmqYdhz3uesc5Z1dr6AR2vpr8xZvVxeC47fE7db9P8fzj9DgKf9J55a2Auc9tWoXCFPu7VdqrV3mihupEpSmZcw",
  "key7": "22hhdHNBJRNu25ssJHs1kqTgxo5LwMD3DECq2nQSh63cKiBL1MAkNN3HVKmB6HVekSjknLnzG8bJxLZ7Ldjx3pqq",
  "key8": "4GDjyEqLcUQiR7CDsGvNzSiMeuVNFdRxhb5QNFnikr62mCu6K8XMgq4ve5GqM8R5vzjhkTNJCzZ5tpK6zpN8RS1q",
  "key9": "66RrPHX191GrAjuUB7PT3ePngrDmaQY4AQHs3boxyLwF65zPFATVeRSdCYnq1SPmoNosny74FShStLJzsMHDJrdh",
  "key10": "3ojPCJZYP3crSjHVkt5GXoZwZbwzNUWTqcuUBCK1PdW3AdDLKoepDpARPgFQdB8eGpufRQ9B3zusNWmf6htv2DJf",
  "key11": "gJyBkBRTRnnD3UQ8AtfRnW2A2q1rfmxDERWTWBA1iiEvkimU9tTDLVevT5U25ZkkL2cwwT81P5pikMahQ5Ffcpy",
  "key12": "3wr1bm2bMvkpvY34xEtxFvbkSqETNgEbEHNmSkPxk6byGivwE9eYn8Tcz9a88DsGYV72iZ6UWpMKF3FyPKxHkMYB",
  "key13": "3BuoaxRvCDW2HQUB37GXarSXXxUhkBN2TeVwTAdnfBHUfEWRu3NdwawVVZqANo5R7yRS3YFCMWk9gw1sDyRnnjg5",
  "key14": "45kB94xD3mgE9jq3ihCweUXJJrubFPr5jDF4XF19nziaPwPgj6KCv3dfCFagBitoHc8RUvDi985Sr6ZYB17jqf8x",
  "key15": "26NU51Zoj1iUr9AgEdR8vXnnP3sUrT1XtmL71zCVgHy8yarShoH6A68YEMVceYJBH37ibXmpzPFbK9bsmQX254JK",
  "key16": "3ZZMxeCTr9MkwvLJb8afeQiW52wsu9vcTXy9CUfaTd5pvmjGnqTumBamGVYey7F4FwZX7CDuc5BxkVc6rmLAL4L3",
  "key17": "5gW6HEy5LpehATA1q4Xm8G6y1RXXRXaS6Yt3JHBxETEufzKWDvSVjCfyXFc5j8VWfv6kz4YQuDukCMhuJKqpRVLX",
  "key18": "3N4xoMta86a9y8dutFA8y8xJFyxigRxhnHhwAVyeSKooPuBPYtKBcipdA2k1oLnx6bVsobCkk9TnAmmQ2eiWDtit",
  "key19": "59iyuEjDRedgRrGho4X1Yjx2xKCJk678LdZcud6QSiwQy84whsfFiAVtATWTvGEVosKHAcdKLqu8pxrre2Rqbe4T",
  "key20": "2RJH43UTmWSxXSMdJj4jvq19N21F4MXjzUmWU6viR2kDsbzN15N8YBLtP7TLbBGuDv9FBHJjha3P5iEYwvXEjnMP",
  "key21": "sieNtYtu8rkzdQpW69HEqMMjY5oBbfu5thtyK12WajgRd9taWchmq6uy99yyYnfsfy27ky6FHfTrUTW6X43L2Z9",
  "key22": "34xi2NHazajHaRruJQrjDUszeier2YBN7Fz1uXXQHqTQg98PutqAU7FFMwoV9kAueiE3ASxqw38H5F1ojMu3HQKz",
  "key23": "11G5tcCJTGCioqbCxZmVS9erAiPBfyrRgQKsgzG7zBfmYAW2JwQpNan7WAcrckdMhoxpxis9D7CGbcTc7R36SeS",
  "key24": "3u6xHf1PrUrjC8uP4urQrgToCJyLf9m549v77tApXUJwnF2yCb5qphBv3fReQtUg1vNudYAZBrJWq5d67huJArBx",
  "key25": "3UCC8key67CgrEmq76pEDc2FY93hh4XaBbPorZq1eC98HgiZ22Fus9RGvoDVjatecwdvkHpS3MfxBmoSFxXdK9kP",
  "key26": "2BnQptuRi4pcDwvJNQP9QmTcjNG4VRckeMjbgwXXe5uPGZ9EDPNuMamjYxsBBgcBfzriZDTVccmNq8Yf4xe87Azp",
  "key27": "TnMqVy3V3NMwfEmZFKG4qjPBCA3nbaxHkNwVoUSEs2yYYXkTB5FRxEWZmBskyYjNfWV3nKMTbwf8umF2K2ozKuD",
  "key28": "EXUtGBUS1hqiMEMMYXuGM83aqcBdg5PQxsWsQ6gUtjVYJAgrVJndBgNEamPUeiTm5T6CeseEjJM2ww3c1FpP9ie",
  "key29": "2uszHvyCnrBcBpk3vFJ775n8spL6NzP8SVVJJPzeepgi85fMMEqpoVB88jr8zekZQMtArXeg7S4EZN2gbaxBm6e9",
  "key30": "5UgPd3ZX7EGCGKRwrpkubMf4dC3tB3HmfkrGGg9K8j1uLFWPJnTFQpttBEU5j98DKkXbMbyjyxFc2Zg8GdCRWP81",
  "key31": "3qHMKM9YjHB1LFVASPAXvnFPVdTR6xsMmYXn7ehGuqHUjPcb9my84J4xhTjWJBK8WHf1PvLXUHMCd48J22yhMyw9",
  "key32": "5674BraVXkreVPBAezqZFUBsK1rfuozbvoEdcnRRPjNswR8tmEeBYKcmZLNwd3kR1TQWWFV81kZ9Vy3H9wVvcSqJ",
  "key33": "65ezaQxNHM5nDb1FmvUxyoQntj34opf82WfRAX1cYcUZQ4hBnuxkTw9ER7sSYghNgWKi96zgiQaaqhs98Z3sent2",
  "key34": "5vqC77gkiQbrKLRr9evzUSPquiHkiH2MbAPFvnmtAQj5HTeojSBupexSPffCPLrFEvKUpRQwFcCgBmw5badtkUDE"
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
