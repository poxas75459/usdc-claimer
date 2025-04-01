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
    "5mmrQXnX6xK6f1SY4GqFQS8XpGwVHkcsLVpyFdw5hS5R2zH643CcopamnwwhcwtMpWioe5EemMrnk6QmvFK6earD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVR2tyQEEoHkXrr2VSznGxSZnmh4YYZENuGDqBwEXsRtqVmtsN7b2QzeVg7kwaXVwxcfxf7QU2XjbTHqGhBFGfn",
  "key1": "5BewPuErt83vnZfX5humyeg9294ehEUEQiyg6MGFxt4M36vbbg8qewEaADuQ2GnQpR1VVY3nKwGsC58KfuNPNeXy",
  "key2": "5AbusCt9EN8cjNdQqjYtZ2bFHASn5cA5KXfEXYfdc86jnJv4jZrRercNMUfxi6qJ5umRRmbwhoaKV979oWTZsp55",
  "key3": "5cfEqbHLodwNUDCTrNMzof2XnMmbVcNcMozeu7akNHihWuMbiZ56QD9NZcwdfHPP4ChcJdcC8anT4KMsixBbuZ4L",
  "key4": "5XoBZD91TPMXLH87BahuaAKr5tFBvNAjGxXLQxPSnTjV4cAJ9n9ubB7C1NsTRkSbqoQe1bjSV7PL4ByMv4agR4jt",
  "key5": "2hf9frAjQiXazdpEuiiM7gxXTcLc1PJimFsuTM5P8Wsp2mQPqzw8zuv36HiJdoQqmLYpDJticHrRfRRjmecQafVZ",
  "key6": "3fJvUXLqDkFAiU2BkUhZ1nbARyEB48qzMFqoFWLjtP5rrndo9yokeKUAjPi3fbBEqGkk4H9YBMyHVQRmkc7t997P",
  "key7": "2DTtDjnwb2RZMyDWvjGYNoHh8fN52mZkZoChxuXkDfXF4EaADFQPtkC2EG4Gf8i3gRKBV13FqNkVXm2TX9gh1eTJ",
  "key8": "4WfnfPP9CoJQK8LX7dySTQgmc1swvD8hELtDvGwdjxGK59eViuSce2PeCF3pU8cN9Ag5J94Zc1A9CfYxd19ovERN",
  "key9": "2aT5qnT4nmhyMgChi2qaA1rwDKfudHBZmizNGXk2ZCtVn5vBFAWT228Q6N4uWKqX2wfgXLsqW71ovV9KQheJdNLG",
  "key10": "zYLd26d7vEpW9EQ3EZfhH4HRsyCGdK1mdAAXq4MLVhibVEBSS8baGh8ymbBUNhKtytFFW7WqXXiBmNBZwDen16D",
  "key11": "4k7k1nGSzvXBtfh4TYXNWuwUmC8Vnnzpxsz34QSSYXZVA7hkCPyTN8DnsSLM85Ww9PwkxykvuVKJRzhAaEEtWAqt",
  "key12": "xBTkLw9ZuSpF7csYAegJc28AScYQa7ZVJMoQ7PRWihw2HorZRKgL7S3DqF5p7ZYqwoYsSHU6216csGeawKt2DPr",
  "key13": "4HK5TEQBAnUJR3Jyv7snoVMb8iHaaqdu9UuiZT2rUHh8Yb6sJ4nBhPazogJbDghUz5jENwdd26s5HsfN9TvMb7ov",
  "key14": "K4sLk2UH22GGPcp6Eeyq9mgm9Dmm9Qup2BgemHe5nAu5qC5s3wV9CT2XUkLt424cMLqFTcS1BeWc1whXtzwDi7p",
  "key15": "oX8dH9vQV1A7PZ1ysGmCzMAcPS2XzRacWo3EEq2xmNh6j4DCrozCXC4CeZHPBV7ewDYxKeRm5s1WAHgkEzH1xBC",
  "key16": "3xq6ZSm6r7koEABSNo3oNNNXKe99s3WNdXcGVy5rJzc2W8yYWR5K4Eoh4LRv829m4LAgzokFSCT9zNAHx5bbM7tY",
  "key17": "xWNdWMBrvyphXxSVhAf5f1hZvprd2mkrneq4A3SbgzSuBwXM6cB54fQF3AvJCabCLWj1MwHL5giiNfenj7PMw3o",
  "key18": "5Mz8ftiAXtXU8GyZuXkgi4DizLXZCJSkBKgyCf3K7xXLULkzL14chJHgvWVPQcqHG1raS1qccmAswv4D3EWKnowx",
  "key19": "2P2wxY9NexHzRkqqg6TVy4U4XE33UD8TrR5mqMk9Mdj5SGvgzYUPkgb14KroGmS2x4Ta66biqyRgQ1LmGFRw1hBB",
  "key20": "62MjYuyZwrMzkhjr5eSxNZn1KqK8uNhNxGsxxL7TuaAcifN1DmUp6Y3FbMUHqJRyhSTeXsh6bp3zhCKSPh6dwaoN",
  "key21": "4m2j1YasYHyob6aCvopuiR4xcVDJDtzPYCme6cPzvWJiUZgBMMbP7zmTBXfsQ3zEKmbXaEFUxv6vvU2aa2YRgdi3",
  "key22": "5YF1zpFws2KYTWVGavJtVdoyZhPZ51WN6wghryA6e5H7TspHDdBVE9TNKsfkS7XYotWEgQvo9jpPwWwp6inPBPk5",
  "key23": "3r7AQP28r6RopFYigavpTf27foo9BsxmwvcoY56wCTWiYDZz9CKg45sSQCpvdsAea27RpooovRQhpABxKe8XN99X",
  "key24": "221RPJzcpvxMmvSwAZZ7vpdtYNkjUWRDQx8DW8KQQA1SuSRMMZEGNm6BVPyiVoPhy5mYxLjBCotqmnCTQENJ94kZ",
  "key25": "4qyFTiWhghDvs27Yu4xPqajmXhWZKJsMUmvhw4xAK1ncKag8QfsCzopys4XkG9UPgoC5SWmJKm2nrVJuGNMNYsWJ",
  "key26": "4bKKYDLKXuzqvh95anVqzyGsZW1F47L2G58peACU3cx1dgZP4dTDPXM2Dce8K4WB1TfZEnqLP7gqduTtUH2tov88",
  "key27": "mErNqcRNm1ewju5tr5hn7LYUidL1nJ2bHhZhgxcK7HfG7TtWFUafTzf91H24dotH9zhP6BvCXHeJ6hsGwEkVToF",
  "key28": "4VAW6TVLEuMsF6eWZAt9zWCtSYr63MkGVPrQ2efCSG584amEoj6jYg79RB364ZQmdRSyJoWwQ3piRQNKCSYtnCX7",
  "key29": "2DpAwuTsXXFAkTn3KHJ6tCM9rKYqnqGAm49ww3M9GDUEM18Momquz1DPxLDPxsWw67QiRf98AWJEbVbd7T2noJY9",
  "key30": "42J118GDScK5sviDpzvEeEGfoVcuin5um51nFvDRND93PyfBBuNUQsJzKAQamFnMoRmLcCEpb3TarDmWmXyKVm4s",
  "key31": "5bVeArYtEW9rsAzc4sfbYSdkitUhymGpg1DYFK6EnwKaSCqnvC32xrSeViLwc2mf3hu664U6jtJST9tWDSBAL94o",
  "key32": "6UuksXgLyYGKouWMZX2oUsahT3pbZe9RWDtp38x1k6Cci3wcZMH37W6MuufPJuZkbRPLyFz4ExZvjmeFBCH6rUG",
  "key33": "3iKgde9F9rgwUSa6UqhMVqkMkKcnFvMAZBZCc49kfiKcdZjtW3NiLbwKgccVAPt3KKrBebAKz3eE7ifoDfnbCLHN",
  "key34": "2fmNb5tYqA4eZZ3av2GRrrwgjFAQNN39k9WMT4nznv6zwom9PTp9HKFWK7dViXY9zkfkXQUn2HqHfU7VvNH6iQEj",
  "key35": "MEPdiztumAG4e2rFYwaKvvawsuJSBSz6KwLaCi6TQK5jVFPymgF9E4haZWPyxx4CJXRW2NAb9VVo28oxQaSGjtC",
  "key36": "5EBn3tnFCjF4AmuBHqY8ZoayQ6KBNfhuK3LQsJ21xx5sYasv5brLLAPBBfVQzm5weSr2JnFCnvpoUUX6eJh9TQLA",
  "key37": "NYeKWNL3Dd63aFTzMApTwWdiWArKwSoC15SPpvK7FTQGPZiLnKNN5PPRyfuBmxiWNVsbCqVKB8HQbqNMdvJRAme",
  "key38": "5ekNNTChZQ8Ld4foqQ8hYhMNyFiUvcd9dKG1LqyW1MVCPVuXrG7DnZxeP1XD2FL75Dm15qAVczanqT6xUHRT3ou6",
  "key39": "2UBbQwskg9worJPCeSkCcnrrXvNrC4z9w7VJ1bi3YzXwpqW55hYYNvL13NP5La6kuigFSVTD8B8F4Mc3oQfejBiN",
  "key40": "3Ti2mNRekhN9G5xfoeCgTvBGW1oy24Zrc8JWWB7cy6wiqFbcn8tCh1Uxv7mizFVjnh1hhtjF9ewhcrUpFMKKQ4kx",
  "key41": "2NsWTLk4pD2qdjSmuUa1wB11VsWo6HU7o9ZGcr6Ntiumkv4ZW9HVzpZ9UZheF2xZy9FJV9b4yWCrw6Lke5WQb2wv",
  "key42": "43itfGf1Z4UoMi1QAoxbsG59Y9LMY3HndLA3ystDT7SzZAkT9aUZiFwPtTeHHRCKrE8mSYUedv78uCEzgBvBbAAt",
  "key43": "2SA7FFTYTFuxFzhHaZhYdekiinzU8fjVS5oR8RDBjFUW76Jtg8cY3Ns7AVm789qvkeezKnCuutxWwGvX8rAVBh97",
  "key44": "kCbssCwaPpmnt42LPqq4qmp6HpVmX648nWf8Sn6oBvWJEhb43V937PgDGdGuomZ5eMSBjHAfsKMDH8ayZFfjsZk",
  "key45": "2srPPS9fvbFGLyxABJG4gDjm85VyEMXfqazG6szbvjaApsVjT1Bbi2uYburiWX2zG2YmV99mhXyckHF1WiZnjAdA",
  "key46": "2SUH74peZCausWNR7CcWqdea8yUGiBtPep8MtxeN1nFBnhXmBGpTtsxZQagh3xycAjkFoqWfcwiGMPmSyLCD32tm"
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
