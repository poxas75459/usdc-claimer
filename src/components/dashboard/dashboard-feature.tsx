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
    "37og66bMG9W3dG8PnhwtWpwytK7mXjJmqVFxKibhCkJUAPAkd11ZD1bxkfVXzBnuioFY3Yer56X69r2hGZbMDThS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCxwPkXuHArnDiQ8HwbJn5NkownBZtab4sjFSC1rkKLphn8r9phbMu9ybGBocsMo96eS8XXoXDLCEuU53vu3CJo",
  "key1": "VAJwV57AcBUYsu1EYZM3XmUwHEdxuemnMgb1g1okUQUMY6qFhGv1WbnQnRocBFRd13ReBJwM2xDQ2E7FwPc5pHL",
  "key2": "GSSai4E5x969wshrFCJsLmeNgKeu1UjeYhVonrqULaAEPERdV6AEfWE5TBPgRmbM8wv4SjXHhbBtjUST3RSbKvJ",
  "key3": "2r8gcT7qRFmjTxkh8osXRy1rS79CnA4B1sg5vVDQDjT8cTXVVnq1wzDe7t3WUXizbL1mnqkhTA6Jz5gNZzbqCSdi",
  "key4": "57zMh2gJN7JwqJj5aZuP3HvQopGMGYsxAZSMadwx2FvurUKVnrCLcvjShZGVtAc2pvmgMmTQDj7jhJ5qN67nN2xD",
  "key5": "o2iNGAeKqC7AiTXBn4N5mkdRimEJB8RcVfQ6sWWYWm1rpuBNxMkCdjTmxEu71m8htchA3NzdAvXzE7CMq4H9Mfi",
  "key6": "wqqXif42UzJCidqztHGrtn1xJYjwveDqatx2xLHPJvdZ52dtGHxk3Eeqvtf2x2Gmt97Xk7n2KcuVBMyKEqp36YK",
  "key7": "3U4BFQBxyAq6DaGCHHga6zoQVzvTnTsnF7ZSYkNrBXnKhz9n6Htud53wVzXjLfGFLUx74d6XJeAd8o9PmAiZTohM",
  "key8": "ogDWfWj1L37auFKW5uf6v4npJxE26Y7fviU829uPvo5rmAkA97v3AbWUKn3BU73X9sYnUcBwcHzrtVPmairuv8K",
  "key9": "5nkoJK7cboJ6qL4kEXKCbxy1r7FbkTzegBNuByoGZwvs8dPvd6UFmX9W5JzhicgEJkMmMP88KbjhTmFWLuY4hMzo",
  "key10": "25cq2DFtuFnimRme2JpJfthaqDtWBhbFTYVfpxT4vbJxVPz2sBLi8vqqndrv52yBQLpHcrJeUyeTunjppvtvBmgt",
  "key11": "3vZN4X3URBSzv21FAgbuD2qU9NygCqEUsmneQQjbqLGMsUKwMYjgx81cyjGAVSrD2P5z4uarbXerrTfZpz6DVs1p",
  "key12": "36dkp1XEdHy8dKt6NSikTPinnSRpBkDYxcsmYGqyM2bEXvnPqKj7h3iBHwGtDtiwshY2GbKd17A8JgYuDnWxXANo",
  "key13": "5b8FvPwjx45pP6jDBSjWRFomeMz5hj2Jetbayk1UfNuedncsXYLmxybyr7jEuQDGmKgaa2U9C7nHxxof7wJ17Xka",
  "key14": "3fK8xU3aWYvcvCWhASzMDekyYsYB9R9BC9SvjcvGbXuuSwy4AqHAmt1bk641tNXbMcr9SpWjwaZ69FuRQde4Gp8h",
  "key15": "2r6T1W8btW4DGgWvjoLyrYKgJNzqHJ133qup5p4dXzmcpyhfKXX7YhqHzqnZR23eA3zLpm6hu4kVb42AgGjLWXuz",
  "key16": "4fmpTbj1bBvfq5BByWv3qb6LxYhvMiMddZt3VEfB6HwbeULbiVnLLGKsFvR9LFbwQhQEoFYsrwa7iBE9suP6pVyX",
  "key17": "4x73QdoncBsiCkKSiFV1N5FLCbgzbtousM2aFskws6CRE6MHDiKgYqgDNQLagg8WVqnmHfsuZg1BwvPZS5zKoKwY",
  "key18": "3tTnhDAHNuU2MAMxY5QbM5eo8XaZwaYiX8ieGRrz2Yf5PTmTg7HgZXtfed8kKc2JQMKPi1SMB5SHGHmJS5XvatUV",
  "key19": "khQyZwTRddgDdDuW5DuYS4Qu6Ty5KtdLc3hx1KGURq5dGGTaxwrvLsvuoumFpPWVHHP4jSBUzwzmXdou61sExKW",
  "key20": "2eu7yeyfYz1cVwaCbm1vSWW5aLKZontu9vL78z59r4EyJ3KHfiy9xe9SrSbsNGgQPefFkZCfPkXeiiELxSRjembZ",
  "key21": "2BcjWqeuXhJiu1vs2JnMpgSkwWcpUckSEg3kpw7QXpbEdrhGDxusxYCTiRCWJHayhFFTvXMYFA9GXfinpvKVKN4J",
  "key22": "FUrrSEBmVj145R9hV7zTjuT9B6fvYSzGG8Xv2PH1AKnTsT9DDNmJS16sj8F4wZdEsEhFoSQDaMUz6tkuZNKmRVG",
  "key23": "4h87YQftWTq7CbBzB2BQXSQaS5mx3x8Zwvu9xMHCHvSpWBt2Nyx2nCB4b2bzSasqS9MwaC5Maxqo55ZEVqYzK57S",
  "key24": "5Aj4Syjtdnq2Gmu8AfPKYCqyNeqSbnBJLysXyYbcvrthz8ZQUMEs3LZhPgAnGQeMYVvYq5MirXkFogzv9cvqkadM",
  "key25": "568Goj2Zm4aJw3RWTPNCtvBU9CAv13jEzsVNGTM8Su3PunGqptKqpuPNjKqcnGQpuzwUnNZdXqJ6CvwEcvKHcTSe",
  "key26": "3gHfy9BpEgWcnXT8PGwGoi7qR7ashcdFSpp2JZUgKipgURDXyNnferRoKWEtX1pHUMXU1YK88zUGQewrhJL2AgMb",
  "key27": "3jLtW3J6V5XqXtJQNnDtFnPStYR2JAPJzgn9mWH1Wd3HKuHSWQS6iJ4cJhQC5LPzQP9yQcfDFjSupLd1u4Mpwia9",
  "key28": "5Q2DbXeFCShjGqiMFg3d79dbVyCCJGmA3gzyvPePM3ySuoztGZN37dzANkqZEXhL2KJGHh5UhJFQ84nUrxV2MWxb",
  "key29": "2qvnRZiZ9bZgEehmtq8orJonQFiZAL6hNV6UpET2xt9Pppg1JvAp8YduKcanZu8pFEeES5Lc4i9JJKuGTeCj5c88",
  "key30": "2g1nrkF9xK9vnrdVaKGBKECMUSDo5fjuu4LLec7MHqPswKPJhDEuX8bn8crBzF2Q1eNLZj5UZAKQkSkoyFQzeJgC",
  "key31": "66XRtch6YETfToh1Uv9WTCqzyRj8ewLK1fMQ2zMtuvAuFDe8WHWhgqAuomChR1E4TykV11UDbNuyLzPTA1fpiRgR",
  "key32": "FLSyKjaUzYV2PtEJHhFJXK3ciHQongsM3262cMKjSfswnHJq9v9PJ4vvxpa8mLT1WhubywrzSBckTt3tqWPpKPD",
  "key33": "3sm5mSqbk61LJLLnbemTJQFVerTykN3SsBKC1wUzBqWAHqYigq8YximS2JmjDRSsaYeGaQiiKddia4whENVt1jJz",
  "key34": "4SPP39cAF7AhT6K65uynvH9SauKA8DbhR5A19L6M9vj61fYiCoUHwhp8y5kKgT2vbcp9kp4kDh1sKdbPZabWNx6c",
  "key35": "59r9gVxshq7UbGzPWBERixoUJWMVd5qTw9hhmfzsFnrgYs81rA7Kd5c5jnAm13tzqBYBRiP8732QmipJQ4xoD841",
  "key36": "2cAmKQGgXqRC4nmQJaDWwj6v4ni6phKGX2VMkS1PTNnhvpiYNVBP2tuQkwyHnZbghsyDyJQkgJf9zHtVJRj5vHCa",
  "key37": "t3RqpsRTPfdxywEHCn9ZedPDKQh4VGBmt3oQXkyVdc1QL7KAo2wHhWtFDDkMc3BLS1YGFrv5THTp43dayyuUtBN",
  "key38": "2ddkV4Zecd6DBM1XFvzSNn54UQMaG1UNgtHksVKc7AEmfxD6JZY4CVDhkiDcAzzE1xUDNYsDigfoTvaZd2d5VcMm",
  "key39": "N1qvbgynsKJo9b2qdycz8nAi4qVud15Rirn8jtaQMD2mxpK1igVgtGBumDoEdA8y4YaSJBknzsvUXyA49x8mBLw",
  "key40": "53dTg866b9nhcFFzNzjdrTuuPXCFX6VwRfLBLwuw2nL2TDS9ssiPvuCAzetTzF2knY4AQLe6oe4RHyykaGHU5xrL",
  "key41": "2uhkMT35a9fE9ia5xq4AHP7xC5TKuaJov5kH2smqKvt3WB2AYcAQhyscj2zdbXQvDM8KWBcdJ5i15Cqx6yggkuR5",
  "key42": "LMYdt9ystnS3NmCQoXRNuPUsekssQqE5bL8cpH3PZCu696ZBU7mZZ55h9ru7Eeio4YGVV5skPPXwkTtTmN94iKe",
  "key43": "2mhPtMk9atW5mFWuumPUsRebdkMA1YdjtDY4p2nmGw8vHTHWczZts3KfyA9AmyCeDBxq4p1htNxBZzhCTEe6jK7g",
  "key44": "eKsucZZRrj7L1Etfg4u8zE71dASKBdbRSFD1AfzjFdgvPb19RQxcjU1GJ1wEuXJNV6id5mkJBHzz5G9rQur5kMH",
  "key45": "46fHG4xHHCK7ioxGdR3qREv5yJReKWxHEhswK8gxqeNCuzftLwJQPfrjngLMxWRK1aRkTg3WrapWxkF1pzTpGiAb",
  "key46": "5wFLxkrG3iim58MYE6i63njyz7iGD9sgs3JTEtQsEfkneQsjp6J153RH7grC1FnJS1araSWh6r6DLTjxidVR2Ctn",
  "key47": "41tubVv3GvUgihDDwoqMcSZrbMAwGiaojhNCa8unXKSBrcQHBDhVEVfE2afsqt13nGHhBptxFDNPFveHwmnTidZa",
  "key48": "4w4fLMwQzp9f82nhmG2HeEwL8tYBs7bRW1sLX7GTeURaZGwJa8rsdRMDZaxVxS5ZwgGahJWtTsXQy43iySSsFhVt"
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
