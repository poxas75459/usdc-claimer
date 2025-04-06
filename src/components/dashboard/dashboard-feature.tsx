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
    "4uVqj7qEMMJWamTvPhDDbqnD1QdQud114KRzLpFDcAcPc7E7h7fFsePcPoojtKtyiiM89CRiYLqVrzmjfSsDvsvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1inuLMLa7CrWK9c1fnrZMzZRZ7sLT7Qtg9UrSgRg2F4R1ZyV1bNRnfWrBqxC1LSZSf8f1UceP74c3TC543uq73",
  "key1": "4wkmGh3kGmZAfZErmGmB7MbgdC7LPxFnz2PwevpoBWrHwPkQ8HKmiGF3D5JdRDdTtDnRzRbE4fNzWe1pfexyjAmk",
  "key2": "3RsMoRmkbir8jzgPzEU76Tazc2tsqGnh4V9nQUFQXhZbzCRkn2nxryDRtvdEPop5jnQPUJ7NFrnnY4eJYMRhNDcz",
  "key3": "RSkYYzuzrADFPdewjiqe2fC3kaExy9aNRKVT4ZfT8mQ8s1vguomAfKtBXS9p1HU4DSfAkMX8N16Dy4wULiyXkL2",
  "key4": "XQVRMAKWXxLcPhcdQnD476erHBVDFNQic6Q5ga2fnZiYUSY8MKSz1VRPFx6pdvtmETaBLt1MWAd9trZj1XTrtWv",
  "key5": "2L1wCoWgA32wYBsnJuvaTbMb686cTYJ5ADdotaX8ytQY7NhHGnKu1TJFWYtYAtHTj2BbgQvUPu6jJf1txi3iiEvv",
  "key6": "4K6jcYoyiiCBt3YBD9i9iGNzVJyYa9yjpAexRhmY5vtGa6eAsNEewnD92Cv8gR2BMUVjhJo7URa4K2k5LyZscJ3s",
  "key7": "2CbBiYGzjN8EDsnvcLsMcKUVGq5mVbELT5Pd4gVDi32vJYQqNLyi2xCZeMszPcvP8RzQVexi2uuVQwPsRmDrFPWD",
  "key8": "4oN5iNPLfpC1ASzcDzfcNZmgZrkp4cdzrgNJzmoDTiAu8d5qpAMABoqGyAXsFMgFZ249u5ZBpnNRRX5tNar5HmhZ",
  "key9": "3rcm53QcFojyYqTxvAttGJFCDensVykAZxmtwra2xfSWvur49cfxehmGUArtsUMxY53j47femBXE9D3yo3kYsNiQ",
  "key10": "mRi6zFi8F1LdyzLDNnWDck2qHu3zmKuWvRXWgvAf1DaqLuJnam66sYCb2tLokxrxVxbsLifwzbx7EJdFZmYUash",
  "key11": "e6N7ftwECviSWgQvznMSbHZdC7tXHEtAos44gH18JxwpK7gXJNMzeK1jzZi93NbzZufLN5LPmfx9rH34yw9jwa8",
  "key12": "5LZ6F6avLYhetNQvJaF5pS5s8Q4pJuVwEAq378L7mLe71XMERZoQ8SfmGVKKmim4Thsmo2rUuRYpFeYX7PWGAuNW",
  "key13": "3gLUsiMRVEZLnUwxFZ6rbGSCwZVpyFdffWYa1v1bxUpNTcy9wP6cCQ2CMjd6GjXw8PQ89TJHr2UMCkmRbSLQj4bf",
  "key14": "1o4j8mZtv5gmjwovEX1DEzf9MwKhCe5LtabDsrDtNSR9U95oUQGJeBR8gvG4MWej1MEwJSPqF7aEhudfxL7oAg6",
  "key15": "5ioqabRRoeLNxuWeVrGPY5jsSV2ACaLHoUHsYURftuxiCdxBQv9F8sbiQ5Qwn2AJfdRua597ZnqdAj2ZyJXBPnVg",
  "key16": "4WDaVU8z9hxwV7MuytGvfLafnQbbgJxff7wx87ZvzBpUJLky1RGWR7WzN19UEcQJR2WvaxSvoqJqyZfKRrKCc46f",
  "key17": "5rYUVJhHjnowWeVDqWM6pw78AQVQfLCWSepMFF5fnLWG78232DCecdtLZyqKnnrtjVmSwDMYjV1sUoX66MiAAqxe",
  "key18": "2VRxEZvnJUcp8tTQmuyU9rkeKzdZbdQDxGYY58W8A3ANZopciYjygn987JukCCHqm71of4wfybTYfbPxAkS1JE5p",
  "key19": "3KdWRF2L2ynjafrhAMpgyYPNDq4M9daFFjxJrvGiNDvujTonDTnyHFuJHpAH4X7S6c61f7e4jMaoagfVD48aEsJW",
  "key20": "59gEzuFC6GpEDB6VGntPUHhDiH7euQLQVpNgvVqE9L9fnqDNwQr489ScECupwBDatmMmganxrFdVyoAhYmeMdw8X",
  "key21": "4oV4ZhejMeqddErRBpFhqf4qVA2pUrPXvUWFrmqJTCWR6srKKycUK2wt4YiHacLvAzKdeim5heASsnsQhVTfxAUn",
  "key22": "48iMhjA7Pz3S97J27v6jegw1QbmRmmyhRiTEuZuNxqnLtDV3XtPUVqBhFkQ78RKu8eC43jAeyJmbkedgcmSZwW7k",
  "key23": "L8h2khy76Ka7GdCkgEH11xpfCHTgSUpDZT9yXnnx5a2BcX4aBNqDirj37Vn3d9e6yfBT4BXLU4Rm6BXLWzWdetK",
  "key24": "2o9vnn96cjvCHXVxMpUvqEt1LFF67xyFePtRZQsDaiW3ETVa3ZNxrdnytWvFboPXnQ9X42qtN4KVLW2uUqc3DQYG",
  "key25": "rpHS8kb53QVKRLNH9wNRURqQ1DXm9HhJnvdVeV4SwHnnfrVCWuvgJsjKzwNYgKRrEAoECry2VjyawDnVVL6sHPr",
  "key26": "3ghpgvSSWPwQUfeHSebWuJWacwLc2S22trsBB5aSoqLYHuf9mJxsYzhsGaD3eqr9uFnEfrVdzLWkXNo1wQAJ6d86",
  "key27": "2wscm4Uy5BLskmKGzWjme8MovjJ4Yy7TLkQH1ZkEp6iWvRNyUvKVMMZKuYEuEBmvbbw6XrabkDQTZ7rjenXvw6S4",
  "key28": "3xnyLgpTRAZwqLW8VSYRRS58mqPLJcBZiA18zTk9gvupn3Hwk7XQ57KD7QdrES9cEnFqUiXSNtuM8nKyGL5QVrkx",
  "key29": "36hQC6tySV3inGBPiTk4eaTm62kYjDstmREp3JuiJDhrFQaTgjz7Q9ggWi8FbMjcjLZKEDCffdBRjxtJKPZ5ThbX",
  "key30": "v8fZLy8E34s4hnyvNRfXANR9bmSWG2ugx7ipe1Yxv176EpVbjjfGfB2xspfXePwcBHcbnQMYPAcEmKY3deHRXGR",
  "key31": "QbHx8wpbs5J3NAvKj6mvSvJUfPo2q4qTJu4GvoShHHPo4hTGHqZAr5chwRQVoVUjts46t89qdNZxsdAW1fML9t4",
  "key32": "4mHK2VGRdSqr8h8zKCp638VdBQn4F7CXTx6Y7Yx6msvwTvAF5nEhAUS3j9yrmQh6Fp8Zgt3mxH6qyEg3oAkEgHMg",
  "key33": "3mPgNkJxGkRRnctyuDGu6mG42RWmMEjdEUQYFt58XvkbEoZ3ajHSLJJXM7J8CYbdAJxkbTr13wv5iUHfU5MTZMkx",
  "key34": "4w3h5ZF77yoWxRQDnuJd8A2ETsL8mizYkJNs2wNNxkQo7ddZ6j88SVpcwvoqKmHztYtctvhHp1oLH4auvfxZVdVx",
  "key35": "5nKdjAxwGL9xUtGa17XP72TtRPYCSzSVctXvKs7nYccQHMV3ieFhR5Gj6Ccq5geFbX2Wk7FpNXDivpZd8XDZUsQv",
  "key36": "RMdwyfcu3YHot9v5PAjSDYQuGYa6fvuvkP3eZaQFTZLugBYup81YE6Z2vo93NZLDMzGxoUt5dF4QfpsQEismjKA",
  "key37": "3n94w71Mcupnyo1KC4THtbvh7orkhdLBBzXqXK5LniBhGGiENN7Bm9Z4uxqLKBCAMG2SRrqcSU6Zm2tz6kQLTwQv",
  "key38": "5MnGfDi8seiaE7ecLAdc6FLMGyZjFz7friwLyPm4LVkKkxCY7SgMNMffC8NaSGNkXrsdtRFC12CrPHnhTNfAB7An",
  "key39": "5BfL4YC4tF8mEz6HA9cHeH1VhMejepsDbTxKPrnCvVCNrGe6ARLWjK5MZ7FLKZmmtU9vuo3cfTSBiqkCoLjhrdsd",
  "key40": "4jXE39gXq6s4jkbSj3e94E3eLH6KALoi1RPTp6U1dWEX28kSpPNSqqDhj6Lh2Wv9aFp2DW97gYsDov4iTgTXab2N",
  "key41": "376Wsb4qGBMjF3MVRddgedQVSBEx7rQ9s61S5UFjTLnpnzmUEjq4YdpbKDYNS9VFbupT3c79NzphSsM1YatR9ikf",
  "key42": "3bQAyppVAFF7sAWwaph55zpJT2TrfhP1KpH423EcVBT3N64uDLRWg1ZoXVurF64594LYGdYp9LT4eXhHxquTtEhj",
  "key43": "3Y4sKHuajHiJinziXxG85mfd7VKHYo5vuUK9kkk6cGe8GU2JJ6QBbydNxgvFsmzs7kBWx8eb1gutQdJZiKvKrjFg",
  "key44": "frmhPReAWdB2iHoFztMrPr7drE7PbdZtrDYNMzHLSutCcWYaN3EWLvvwW5ysZYVR5edRTR7xrLipQGFn71Mqarq",
  "key45": "4nNEizfVfL36WWC1sQTABCgrF5NfKix4rnpxwDZqmYWkSUF9XrtpWL6b38VqM6m9vJAGwdUPLJ6y1e461LMzSDhW",
  "key46": "47Q3pKwdNXuYxY73VoATL8beUPiF1CN6Q43xn1bii6LpcnkNGuGm9D2oTtUrwErUXkzkL2dKpVF87QQdTFxiUmUh",
  "key47": "3cqZ2XgpV6AHeiZNLLuk9z8xV6Ee1SbCTvng9sYUKjE7pM4oQxsZ27bmPecPCxxxvfBWpeYGAmtqGNyDamkFYj37",
  "key48": "5zeJzuXDX7N6hCCuL9B2AkqZVbu2RfNKDFsYLimf1mXPR56xW1ETghgKgWhFz7vw7yS2LbzLPiSgAPmf8mWNEAAr"
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
