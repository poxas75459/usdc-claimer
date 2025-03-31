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
    "5URw2CmoxtKDqLoGicwfWWDXjZcBPJZDTWaMRCdQiqtoFe9SygJnTcxfQg2Ddv53YrSyvi6dfqRyCPuRY5EWHBvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cf2GbektuE8fkKmFSnumMSpDQZVcop3igDwKFakbemiNtNfuvtFjBxo7EnDbDZH5cX4zbUfpptSew2qzFN4apHp",
  "key1": "2VKQWbLmMuydTvay9Z8sxUB9SRhWB5MzUfCJbYQ3Ba8wia6VpwR9TBCQboZUQJFmFKrewZkBfE2PXHQ8fPQxewiP",
  "key2": "DnnbCMTexTY3kmNFarM84gFWnL1Vf7ntW29vptJGzP5JL298Tjs1rqeWunnoi1iTJ12J7zqsAiGMj8eg6y9GFuW",
  "key3": "2hAjAbiJ32BfmQt9nmmPW8uHsi3NFiQWhxeUanUUXfZiWTDinD7msMbw3udZV94t36VBHkkGZoGbB3qyB6ioBPX1",
  "key4": "6Y3Epr8dKXUGbapBab9KQLZ5BkMUo8oGPQo61bznZjUVK4BoaupVnW7DnbfQx9obp2e18GdGZCwZ8bZPzdYQuTg",
  "key5": "61g11jZs3pSgbPATsK1jHKnWk5U4rNfVaJTzvQZJf7ffJSNfj3KNzrtF8aqDANNMpmmGfgZGkZXjnETt3kajUP6W",
  "key6": "2FUJEdHRLkKLEQyq8Rd2TQAc4gxMrWJTF75Qi3av5teHNPQhuWG2xSJwbnVPK8pVuhsFcQaTEWhjH4rUstd8F9Ur",
  "key7": "29Eq1Y4DjBvGfFpFHfemTpPj4t1S1K2MN1PGvBms8CBJgpkbcdiAYUmnRrucijt8cRwjjXTGF5MRKmmz2tvZJjB6",
  "key8": "4qR4xuwk61zgfpLaSAieKY5vzVUwD1Y5gxFHcWjSvJThDNjj2X7SA4pWJhv7iHbMHqWYKdaPHBqpP4XoB6UG4Uhg",
  "key9": "5pPLppBmknMDsF2edoJAkuSCdvGrZZiFuXzyAXCuq9rZimab6HjCUCEKNMnbD1Zjxwonme4k6oGjdJxLmusqdhCn",
  "key10": "3PuEnf4CGYWwWUwMJWsqGRkUkzxrcZWP36Qow5JAhDzfCiNKLvrntSZiPna36yJbsKt25UaCHHJryXAfThJGEBWy",
  "key11": "2A1cC1jkVCyb2fMJVuREeSGybuGEXcDP8n5LkohHtvHvjgNKyFTKLonf2pafSuihAhsyRHnrveaKET5PHJDUT1Tu",
  "key12": "21AH8UPAB27bzuRcvcwe6N2hn41EBAY5mpsBUBQmWSuTLVCFX3LqTgWXyF28acKEYv3UDCYvT2krSCW7cK3zsCcz",
  "key13": "62TSdHedKGtZ7jmrgcMEtAYMFnWdg2yJzUmwwP7o6893mD1DHMyRhrh616Q5gzPZexY2AV3bteBoVrqfjEhK2Snz",
  "key14": "4CQxCqzrFaJchGEP8hHPKTSqayiH3fzPUmUAGXgMe9wYPsjwzeLJRW1vbRT2roZvhp5bvCZSAxSrcaeGwYEajmKg",
  "key15": "33nScuX2oynVTaDszh9b1xYTsstxA9oxfyZUEKQQ8KrpNN4gqdYA2mnGw3RZQjeXrhip4EyqNtmvNgKd2nT9DaeD",
  "key16": "4kwWRpiMxjLw4qEDQsZb3TREmqwRroMLPh3UvpGgR8cmKBDBLyYpH7d3Ja1oPiLMRw5oapBzk8x8SX3iHAgQLwCJ",
  "key17": "28wAv49QPqJ281uiZgHPkPzGeLCFH1kJBzsNLScbCoz5cxpT6i6i6nqYkhDpyJrav6rTG45pha3GgxxT8uE3sQwF",
  "key18": "5WXQBQwqYFSd36YkDTvfBpLXF8UupJZvBw4hFfk3HW4Q4vEVaC1jABomFSwReYqWpKvzsmvvBu5CcN9MDVsXPbKd",
  "key19": "5WxeBR5f6sgsEzpfB3W4YUQfc6mBpUXEhrNGGazyMCs1KKR1j7rxc1wD4HrkEeu8k9G5kMF4syjsqeuRCp9CKr8m",
  "key20": "5FsQKaZYApmKzVCjW7r2b3ctudxD7YRRhzZAQacNporMJcuK4Bd1HBXaae69RWfRx1nAK69HKgGgDmRp79fHJqym",
  "key21": "2KabEcMAxwpN1Dwo7xMiGj283gb1LSz6UdqM6iHS6vpSgCc9ZXrLP2j5wwEQG223asmuV2JHZg79LRi41mz3jygC",
  "key22": "5zemJ9LCtLDZfUq9JzEphMp9jZ9KyBW5AUAJ2SoQnXMGAQtsoutHay5KzxTrcMGKG1h2hdDyihuMBdfjZ9sZKVyj",
  "key23": "638z3bE1bDuD48Y4PrAsq5U8UGS783BYWnYd7gfY6m7pSCa5wvpWQwjyna5hUbkGtvruewfrC272d5j2UAxTTCWL",
  "key24": "3sJP5uhpFXnKj6gbvPcC38EAwcDbNm6pXbEECq58oM9PdnVuTusTwVTSM8d9GhpPuvNoGYdBZra8fFiU5JoyiAyv",
  "key25": "tQvPKuGTcZp3DDWsNs47Ar8gAiyLFHNCcJKDtXfoRLgdMV6sP61xGF5JRvUkg9Q4PM9raNaP3TaEtvtwq1PHJzA",
  "key26": "XStQEfzfM3XBGtqmVGJujzm6V1boBsf65WvZ8zC19wqmexpLA8JGHKLxYn74aEtX6tjS9t2RFaJuwTb7SevWYvU",
  "key27": "LSubxiMrZv3HFFVeKhdNdUaSCtfC24AciUVZWEiLyFxZcmg9HcPHAT2SogEcn7SV3jkxPakE6L2SvhWa6fVaku4",
  "key28": "rMP7csKEwcowm7xXZmkhgd8e6okg4peZq6Vx2Fq8ox8zVFH7Xy3u4LQvfnh1g1T77CEwFwJHf1vsg9vDEN2CJr7",
  "key29": "4S5RnFJve3sv5UYj6F71fEzcwdtLwspvDVABpp5wYx18KRniL9Qu4JfQF6UEJf2GY8GDRMA5LuMvvoeC22vVNVUy",
  "key30": "4e9t9ftNFepcS8vbyKYsJEVHUQtoXQnScMCMYpRMMh9zQ4Czm1QrtB2ev8TTL7SK6iwKY4PVXGUtq43QWei2WY2H",
  "key31": "2RmCvGvtkdv3xXw7HQpvRcKhLwphbTgiGsDH72vqwQ1MHnYaTJeKpnDME3McCFzfBcVM5WzKJn5jXyGK2oFc5vbh",
  "key32": "4ccTBpviEYqNXcrF5EZ16crsqy7dFuY17M4XFVWhuJDjYu1Gh6vagiaBHX5nSs8PVtSD9UKTkGmCGnyUGDrU4ZDD"
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
