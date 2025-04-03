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
    "4Z6J7aoERvrKAUVamzo8xHWdGEEgTLpCqTutqjHbAw4cpTLyV2wKXXqspoCCoxvBiFpK9ZfucujXWJAuxPXza9Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkzdiKcCJ7jZnJXEEhX8pv21HZ8LhFTfRBCJohKtqKUoqtsPUyUPieKotamhQsqqDDCvazTo2DjZ7peakjMz4Lm",
  "key1": "49ScNLC59mDnVqp7hGK23TWBGat1kVTuqFDbnZPbyMWfumXsody1byuusMZUoZtKKaXzimFLyUzXaJ6Xhsqizfu3",
  "key2": "3HrHATCwNa5S6Ke9HdWbnAqoKXqY57UikhXZwdNEsMzrH1w5mrvDBdeAMnNmBDk8qxh5dPTs2mjU9KGDwVtAGSzk",
  "key3": "2u2gjqLVQ1gQhgfJ47Wz6UDQ5ZgGeQC8SaYBKxhomKV3UCDoSo8USGDk1L6PsmiCVVxKd7sqrKxajbFVopUyfhyz",
  "key4": "2WwPnXoQSnKRYnPoU6v2GdNi55vMqsA5HcKoavLtgGPJ8f4kSWzprDTKC7PpGG9hg28PWQt8at7oaRdFW9mSWntQ",
  "key5": "3in16hrhxcxJuHtm2GzUHknJC74GPxS34WqSYLABZgi6eBpXJp82onk3vizhB6JsRyazqyLdRFLGfjW94tBxgfeJ",
  "key6": "3n4ZQ88xExPd3Ck4juDcYyyhgmtFHTKEg66WfcWjemAzDCYLwJ1DbdhKvL1SLn4TBUknt1fycxmPit1HVjScif6V",
  "key7": "2JVpT725PuvD8qy4QMrhSw6mBeqYvf5sRVB9opUniEq6ApVFCYwPyTWRne5Ec9KrKPR5kMTNBZsd5N5LLeUkKUUd",
  "key8": "2F33S5HJwmea8qbMdrqu6CLoKWuewTEd9tWieDPrHovpJQxCWdnkyDzNEAYrToYnoYgsULx4cvs1rDdiqgf4djUT",
  "key9": "3jWyK9CCw1KR2XnKXfGQSYcSy8PFs7hY6suWmabjFJtpwg5NvKHrAzkCSUeNaFSFABP9YSpt1Tiw4pMebJG3ZzrA",
  "key10": "28RdEppyrr3JzoCKJzVsnGHp4Rz1i5cUWgiQVWkBxvzciFw4XZKrafH9sGFbu76nvyFajQJKKCvhhXAxgWAXajYU",
  "key11": "4hYQao2CiUToJQxdX5WyNZpp45n9sUcc6aKmx2PZ8JWTSK6uPrVVA4nJRWkvVebievL83T93NrAWK6ExzhyuR283",
  "key12": "2MVoYpWtG7PSWpngouvMtpzS54k1UP5NcMPmNPQnrN8jn1iCLnVS67DYTjUdxLsdZYoEHce5tq4SPCecpGyDxaBz",
  "key13": "37MLwgW3PhMcQ6eskX4f7M9komNYvwrf63NpVxeskEHtHyBfxwySh7iwGasbSVCXFNnGmm9CPfmFjXd4Lkk1KA2F",
  "key14": "4FkHwLLvBL3WkJKQZtWUkfidYvC9gibyYCVkV3r6nnDdS2EoyQhi3gt6xhavWjYWaRXURLhB6Lb52RZEAmfU5sww",
  "key15": "49rxuBTnQzPxryCG3S4RQNzcMjq72wRuY2vz5AMDsDcje5qpRedHCei4GhmyMwnqrQ4ZKrg8t1PfgxN8X1xgXyQg",
  "key16": "3pWGGfXyunReqpoduoAzrN2GH1Z4LH9Bo96814thQbe6tvsc718pfdM5cDNATqeJZURfbnXeqW3Q9HFPsh4jUkxc",
  "key17": "2q76auhqTF4MFMj1QRcEbLCeaUg5agWPWHwhJPpXw53xKTT21EhF2kKjJgJpGREuK5QXUDwbyC6ZxpDh2UeJj8bL",
  "key18": "6n94p7oJj3rYi9De1H5A3nEanXZ1tut254BcPLHH7HY2Gk1k4ekRGxU2FTKaBs5w7XfhbTGAg8w3trtkMC3FByE",
  "key19": "DE9p18pnFhSxeY6obwGsNQNapXbUNr2aCUVe1hUhHFeE5UfmcCQG8UoDtmSdSBgwWdyq7MkJPEgcKFF238LBTLp",
  "key20": "5NRsJvaBjaQZaSutRBRvXVJGFyyhoEinEnRk3zREKH2KDPWq5C3wGruXAA7CzGikW4j5L6WzMqFrkUFs6yjKDpQu",
  "key21": "YA8N6rJS3KtibBpCtj5t9yUCL6CXRWTpcSpHz27tg5GPQQPmyoUreaWXSDTVHfXipNGqVQH1UU7sM7G9HPFwZK7",
  "key22": "4yuPQfJGvP4yPPogbMr84jANimSoNazWq67WDC5fgxjfhF3EPZ3EHxEj3F9TcrHv3oSxKmBfMrut8syEXTQvDgVx",
  "key23": "3JeAoSQ66PJAeTU73BW1XegkiFmMPL7Pjg9cwJUPeonvYzCEHSgZgarBtrGVfj21Y1pyKdD7joXowSNaxSPiMXcY",
  "key24": "5CYqTEf2opWuXy1KVkaaQpuVWtv6vDFbss4uidx8PJVGuhAAuKD1QobDxiwm2JctYShN1sDw313U6pnd6kQ1yNjj",
  "key25": "5uWnW3Wz277TZRdciDY9vkvcEJrXBWpPypBxevBKDhznhd68YEVQFKQ31HPTTj8qDx5QuvgTnxeazcfgoyfafMfD",
  "key26": "5oi4UZZGmi45jwQTjSM922SiduLETxfDbyrn3HpnD1PHsdRsyE5SVagRS5a3ipA6dLZ7oJJ9sWYjWXikwBBH7dMz",
  "key27": "2r5e4tM3aqbB3mRYDQaVFVLRQartmQ7hnoyHq2zJ5sEUwLvix183vs3wXoUd867AgoakYMiDLDHQnVmwva9nf96g",
  "key28": "61k3NFQ4RN8KBuhQzr55aj6b8J5hLZntf8pdoKjhDPfeLJS6h1JwJUdpowaSB34ypJ7EtiEjsuAyXepZhy3LmZoW",
  "key29": "2ZB3srVxt3mfjGA2hphVrA5kXRj5g6sXBD7f9EyvWnsTu5sky5hcQpCuyvAesM4pzqcGM78KYmUPktr1PRRPEmBL",
  "key30": "35tukC6STiLcngAmFPsH5cWboqeusgVe57WSSuwg23b1hcKuvG3YfTQoXyGv1YrcK2D5CU81QtMvfw9ZhH2abQFu",
  "key31": "3U7g6QRQjJbTSDBTUASYnAYVtU98kB93Ppz8h3rkm8two3zSmZ72aNgmhCvdKvTZhjCR5xKa4rc8uTPYPhWiL6RZ",
  "key32": "9rYDBYVdrYNa3qytgJEKBiUB4748J6HYQaMtYwtp3senAHAqSTiUgxZX2hXgtkZxgc2JVJ7vDUK9u45dmK3AW92",
  "key33": "2EcPcB4HMqmoN9si5D8pmnwpvB619DBwW9kWwM9ofgJYNw2Jo3pdXsDfvFGsTHX636jAUTgqN6TPEzjAi8ZGfrE6",
  "key34": "5XBrHDUqVUjzjY5a6QakqdsqoxeCaWbDGQZiKVzWpLTm1NjoC2BDsmo1FRGNcowZbnFKhuZgcx6KP83Tz9aJ9Jbz",
  "key35": "SrzSZgS2ngC1Wc9vtPb6W3KDp3vZAnZ7h971Dqd8FXzJU5vME9VLPybHeMyxjhRCnmQaQUJrV4JTkE319gcxMMN",
  "key36": "44hek9sCmKvUXvaL9AvaRfpxCf7SmiujYxJaTb8aDf4wvZusWb85S3fgJcnSKyhu2mCs6n6QS9nPGTdHaEgwd1Lp",
  "key37": "5mjHrHUWtUR1sYJ7BBioXJyoFQidFw94b36ASZpCZRwkWqqJJ7rmuEvbuTH7phU2U9WVnt5tju2WQpUUDTNSzn3s",
  "key38": "3t6MNswUGGZTU3qEkdQdd5nsqvAPkgL6GoRexbUT3D5NhErHZeKutg5cxk1BLXcpSxqiuJB5trQkM4vLLsqDqgy2",
  "key39": "3f6XeWVDo33Wu8ygrsxpBXT3UXTP51FSV6z25BGBvvvzjmFVdvcL577mfPEFwCfRPaWJeSpoHejSpSGjyGHpbUyG",
  "key40": "3WznUCnsegRDWwwjTi8Xpcm9kgewCvkaGUNuNMTUhFaC1UUnc368EMmchUjNNDF6NbUfGAWePJqX8GqLFjMreUyV",
  "key41": "3Zu8iU123RduXkDBkxGbQUSZSgq9WvNLLkrgjfVQi14vZU2p1EbhrRv4Htw28SFpYcvjsSETsEkt7a6F4LEPKB8V",
  "key42": "2DtEPmvgNDRWdpTXNVMJKn5K81ofueTWqwAn9tEWJswQkbLhAtixR1TiLi8Zc8XesrsUmeWzmYhf2z8F6sGweip2"
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
