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
    "4EZ7tVyu3FNcFxdCyTyegWLcEepDGugspfYH1CNqGEjjjd5VSvJFMCrb4vxtWatdn88e1LPuJqXzjHn5kXpmMqvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZ2kYNrReYwVufQRRYMwKjkAqBoo3ft7JbxErqDuymeaxrE1Bbh4Q2TKy2Z11tcyaVtmL2dJpx7dMR38FDp9Fm6",
  "key1": "42N13HYd7oGMBjShcPjtMdDoQZjyqLz6326HtVWkVDadisUoiPTsfSZBgrQB2a9V49KsPFp35oMDRuj75GbN76zg",
  "key2": "3kxYd3HggrkrWw6iThuV1QpwVZRodUN55FQKRAdQGoKDxqGDRf6JofM5TfHeXHYRBfiiwstfJ1mSeFEmCmwrYGEU",
  "key3": "2dpDsB41AcFwLYrZsjUsMe68TmuAoNEEDFKrYgXjZM5C9kiEL2kXJpCrkPRXsRmEHHibAduxjzi8QYFtuRTj12fu",
  "key4": "5iSbrcdgmQ16YX1rdtwp3McCVHtB11FfWF4W7ty8Wdxf3xRESAzkxa2HuXS1P9P2z4P2dAYXZ79YbMAXwTztWrv3",
  "key5": "2HbExcYbhkJDqKoveW47qa2eaxgAPLRoELvSAXQrFyiGNKBWHKzqoSz7pj4WiKRtcR9oVHuw3MV35a6hihk3Zsib",
  "key6": "5vrCYRsskKRfM5wSaZ8SrQZbshfQ5Lc4SzTUErTfPZaUznX43bR4fujwYLSrtYmZZoUBzEVuw7bADpLEdyg8kNnY",
  "key7": "2NGVpv3gCvdA5JqxtwEPGxLSu18Da96iDpn59KtGAquQcB18UJuMhoTBCTuFqzM7JkQWKxTmfw1QTbQ3pywQwPK",
  "key8": "Q5V4RenuF65KhUGoSajyLqfA33B3eXQaxJ9HyKgSNrzLgNqeXCCJPYn3z3iQwXFdaZS7CeoR5a4g3xWbziN1q7E",
  "key9": "2bqdAmUWZp3Kwkbm2HBVuMddQRxD1f5kVSKBPbFgFZuBs9bsELzF9cni6mXa1j7NEELYHyEZUiQjBs2n6QTNKDHo",
  "key10": "3PsPNEi1nCb3j5ua36jZKkvEik89HAV8tiWGtLW1hqB4toGYD3ZGgttinWRgVHQuyFrvwh629MWBwrxMbgL3Nb6D",
  "key11": "DPtvm3m2uP3uVyZc8oeDo9q9ffRfGUrPK2TVBh3tEahUibDANX4urk8tenML8aL9kKtzVPcjN1KoYHVoFZKFHp9",
  "key12": "tvvPDcCz1PmnbaQHkZDcEuh5yfBk7HV99t6Ykhii9ox1btqPHuW9bguA5uy8nzMvKUZ26cWrXUwKXoBNYKdZXPH",
  "key13": "3m1KgN5tk4hFm91GJ9cVBxA1MesFNC65RoV4ifMdoeZVop4Dk4suzepAQ87JxV8QJCr8qvHhXc79EpVy6FMredpX",
  "key14": "2j8jZN4f412ooULAJoPTSSt5QkRtYqSjVHJiok3JgCWHjWdxTdjfTtzuBk4dxsyGQXxMzmWLyn8QTErKhP4m9zad",
  "key15": "2okojMT4XKuW7SzMH9KRxvDXvdL54ZE5MExG67feqWY3U8T92jUbo7RYzZdM64oL9wjTHpQXTERqUjqx7mCKTcsw",
  "key16": "D2HXrmEZgozbseeGEwzxLYfZW8VTzpx2rF17YQKWgckPxNt2RYdizBxwfDcPXgYFUc4NgnqBp7DwgKVyeGWejvs",
  "key17": "4g5XG56DjVT1bPdw7FDebg8BSXHuu42MkSa44BBQPLTo96DLfFgwazaQq6u7dA3PiBawFKQnZqEQv8dTAYxXDfBq",
  "key18": "611uc1EuSMh1BFVeM7CXnhTAeJrGQipEexsUizGUrjG5w2Q51LgWLnNmHATrH8iBKUMW29ZySvBdCgo6xekKy5Rf",
  "key19": "5hssbKSmAgzKCC4Mv4TTjdAGb692hSF1xark8ucFS3ij29NFAvd3kCCaftefQmiaG1zYUeF4QBkqvtzmZX8bnaD4",
  "key20": "55GfdQNiUADKdikuodk6nJ34uQqW74oNGxDos1zYe2m5LbLXe6KsmLu2gQMiFfk7Yp5YPyA3hv1bTyMkzqPjCxD9",
  "key21": "4DN8tcnEWMmkKfoQvRHKm2wDPsbui1gr3KRVZhVm7JXkrmoTucynA3YXHyU5ttb3t21hyxMCMsARkDWijD9tXgyz",
  "key22": "5VxQhnDvct16e3YWehgLHibfmutHaL9KppK6StQGAF5BV6UeVYAr4yDHMTEVc9cP33STsyk8qDGGHV79SaezKDme",
  "key23": "5AqQNoSMK1imu1SkUun8rQ9MURyakdQ1yiCYto9JSQynWbdCfoBRCqXzcG1JGvX9NHER5Ey6XeFjrrkdU1hDpy48",
  "key24": "3QbjyWkLchRrwN5iTpvPb7iXyJsEBPSxCq8846xHEivt6e1CT1vdR5udtpzakris92Z6DVVKNU1pGufZFgqFBU3q",
  "key25": "4QGL8TQdea8p3HQ2HbiGjBFHxZuZrUyVLGmmUFMNCvBCs9tDzWqFWLwPzuQv73WVSvCEEa9A4ox2AmeAyu16GTmT",
  "key26": "2j7QfNqifNEiDrFHE8HqRczWWnCKYc4RDj1gJZQswoQmPvi7twLTD1hwodUWshbRuDckreLhDmNGMF7jeohFWVsK",
  "key27": "4t1TcBCph5mRcaGYjSD6cTJvGTW49cwAyrkJFddVgFRaANaSyQzdqTWfQwR3gp5Ym2hai5aa7w5o9ymHLDWV3gSb",
  "key28": "4CEL6nzyQ9BfoNkgAmotny2jwaZTyWYRpUaXFGCkLLHVcQNh6jzuGXDvcnZc9Y5HEHRuFsq5EwJFHhvWGCF6GXwW",
  "key29": "mJrdqP9MjVrR1trQYaKw6ogztuoj63tmVVxCh49mEkRYZuV9pCX7u6Jpg7yGo8t8LoEwHs2JCch7keSkYMyUujc",
  "key30": "6VeihUAZ9XaRagFJwNCkYYm114YdE6c7oGAztGgadAuvnxqrCLpgYPGosmjayadZHjpfHMT75Jwk3hBSQAs7KqL",
  "key31": "4cnM96E57amxVAuHofAyZj7aCghTZ84tDGaPDL1xUmvyppctFdRPwZEdPuPEMttipFQYgUSs9oHbQ1qABjeUouLe",
  "key32": "5TefTpKkzS8ocLe38m7NEReeLVBBWViaw8Rj4WcQqGN9TyoR1K9LXHUrD2Hf3Q1a7CWoXfdwvjBNbeeDRe8SXQNi",
  "key33": "5Uwm5sXRaFbvtF7ZMJoJagMFk638mNP8szLUJFnFHS5VHVEacBr5oSHzcCVv9EZinj87LpN8NtxcCC9EceYtLMiG",
  "key34": "3aSUr4myP1hBA1u7kmFc4YMhsKpn5GA1n1Fha7sXmGxwVxYBDfgA8F6mgHD9fThXBXWHGK1y3QqfgW2PgT26jteN",
  "key35": "3noeTg6PNzd2u67rcoK9eeLxNFXhqub8gf6W98QKMYsKz1kZ9a733c753VV7jRWjCQoPX2kufcfQY862NxwvLbMX",
  "key36": "52PgScVFHpn91arrDr8sx4igvSW5hZpx8YkRFFUDPosjJwNWCvLUwAkYVddjSftKdibCfoZYykLQNVt8tbaLjM6o",
  "key37": "3PZ592qNK2AkKXK2AFicgGmJLZTg13QSTPpC8JE727uNYELBL6CVpDoxFBeQaj49unfUSrNbTV4KQYGUyEfyXQeq",
  "key38": "4vyPKoUdY5xQSeScwdbWmfkVXx1TEVeAkFY4sX3NfpbqHzdgbpXuQFr5tkatzpK3MGu63gmqjG6GKcgdksNjQpyq",
  "key39": "4BekBeTRUiD7yN8AMYMf7utBNWtmqSkS7mGjj7UoWDNXpj7Nnn7iMk9Tv1D2CMDihndtCT3yo1bcZcewcQnT6aEZ",
  "key40": "AKvw2mDkgur1QBevHxQeKk5E1zm517SpQWR6nmaYCNz9zEphgtKzknQkaPaKQqsJaZ5iXkuhdgLyeSPqeb3hwKj"
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
