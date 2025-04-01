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
    "4H1VG56VKrVduiyJwufwf87BA9aMcjmoZpPXpXqNB2KmRMY1ahUNHSBhp6wdwjkMdXqHdPKnpPgEHXwk8ZAvQTp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vNXpBBUQvQ4s6kmsfuaqQs2nvD5hz8y3HVpGrgNvqaXDQMd68w9unDrX4SzZG819CU9RaFcs4TK5rtpFJnTcULK",
  "key1": "2CGurD5sR1jthb9ipS77qXR7AH5rk98Eo5JC1acp4uYGbXbe6b62XWLy9495NdMCxLYKVG1Uevy3bXTKNi326rXK",
  "key2": "3LVnU8wQu1FP1fHiiTVivMr98U6tMzcAdq6HpPAjJq3QqUsZXyAWPG8G7jN6tCNSGwpemUHfWPK8nRBgDWnDtPP",
  "key3": "25qEMwYM4qi18v852PhWf4Kn8EuTqk9L4JqJyNkLsDUjyXTE1WmQcWVKwPDjdBP4JWPYtVMUTYTwW1AhwncDvs4v",
  "key4": "2srroqHUV2AoxZVHaoMBsPC2CpY4p8JmMFS8NxNu896Pd12GXVU2BGQ86tX2jF49hX4h8N8KpvcE2tuURBnLeZhe",
  "key5": "4sZNBv7Xim7wNa5p4NMFaddyCKg6NeyCAhz4c9r8zpKX5Q2B5DeuHcp9ghWisN9P3BWCb928TBvEYy51pmsqvvwp",
  "key6": "4bhDJWJEmoE883NpKrFwvKv8BFGehZXgmmDiUqTaTG3GcrJWS3MHpocukgZ51JbJ7EHTg6XE4y38DSxxdFRMTczE",
  "key7": "XmXY94z84iEvKfG98kM9xAwTy92MzGLvFERBoxqCz1vyZo1D7XXDUJGdQPbPkPUf5NST5ffubvu16dY8XmMupYg",
  "key8": "5PNTQvxMGwHo8EUdFqHHtD3JGMHGSSizue1RoB7hU4YTB7k6magPCU2rrYD9JHifRLPWGKa4FS4dxGLtzKzKWbgS",
  "key9": "5NDUnMScMmP7FjpAfrrDuyQKZgEMw7EPfBqrrTuhKVwpzV22UUWTkDBd8o6jhadnmvdVs44UbaXc5R5gQfTQQGan",
  "key10": "48dHrb8JL1zRM1qm4Z4jaJQ1NZLLLcBFp2fcEFd5PvLLxZXfFVJDrfkbkNCXkda8ixotfz6T5uK4fazR5vRp6ao",
  "key11": "5PFdYFakQtXCuvrG5mQmvrPYZuwboSGWnRg4gUrCLDxkLEWxxgJBz6kZGWMWC25HKasSJz3rAs6p3FXwz31vz4s3",
  "key12": "n3xytezWBrfQXTvcACYJfQgHx8z5yiugEYhnxPhjqja4hTwmTy94BPcjbJFcTFQ6uDnjvcDkvNvPP8PbWvyoN9C",
  "key13": "5AuLzMYtHhABxtiWyubLrRKMxu5Wc9rPYcFMURdjLLPgFQ5dksqWS8GWUSfEjhPjbVKjkiUvGXdez4LuaWdv6rkz",
  "key14": "5sbZqeNijTJDT5qpVgP6J93DYukDNENMo3R23YJt5Cr4HxuLfQM9cgYvusTzDaSas1DPSNAr2AuKFuhevnPR3JvD",
  "key15": "5BBgNd2wpazcqZC8XxjaNJ1ZNvu1VGmdQ5xesJ58sdsNKnabEfbKSUeSkNS6BBWBvygEfFYBySpt5NMFb6CHKDGG",
  "key16": "5csoTMDNEC9iPHWWdbTvbKmHkey8762AwhWc6ohd9ocHjbn27CyHrkVw5n3CxHiQZHgtR7nVu3CyyyPZy36woMDn",
  "key17": "2xWUEoF7Y21qjJxiKQa5fxxoSsp83hHcR7pRps4Sips289sBUDsTD813nE5ZDQNKqZuT2ZrpYtSF2kZ9FyLxEbQn",
  "key18": "3SmDjigoyKRBgpimwU4GbENNGEk8F3at5NjFhWmgSNV9vqzjq8MdVRMKrAYWD3JAMhSdwb8fjtvh8AuNVSMWrZY2",
  "key19": "3NLPq8Y24ctrosmUMu4XxYcv38BWrZGsrmWGZBgahUwBuYA4wWCwK2se6Zh455XvJGVTErYYKDf9j3ZT4EoR94N1",
  "key20": "2MfyinPf2KaZG7EUVnqohaQQSaufaFSgMx4Z16t4kwV3sx6gghDKGp6UuDMUWHPsVSkVvqmuU9kujiWjkFSMd65v",
  "key21": "5BKKZ2BbEk8hkdWfR3tbj6CUhv54o8NUREz6rDJiYS1tXLZA2WzAUZ8RhUGRt4YJnhxbxzMfdqD3QFmUWXuCrFzV",
  "key22": "5HrremkirtwQUnfrkqYqMVjYobUzbV5TcMzBFmHXAaMVQYUTogbys4qcDinZEoyLqb8TnFcsv7k4x8yZpJZNGJy5",
  "key23": "3KfXVEbhxpGvPKyZJAiqJ4UaQ7YhPp18mqsZTn4d5YtbAx4AaLZ1aXXWEf2zkBWW4zzgJdXqJfFbsqezs9cL2yqG",
  "key24": "4KRGVDPxg8t8puzxJ3Fmte8epcFUvNTKWYTfzd9RvPVpBg9vwN6TC4zqfYgGfv1arwCzzQ6xwKHGd5tFyfHhjDg7",
  "key25": "28ZXVkBbgSqUd1TB9ncCy9iwCsEQuvpDsXitxHvXRPW1E1LGjvTtiVuD6FRXgJ4PcNS4di8uAv1j34HPLNj6CgE4",
  "key26": "2skgFQ7ktdz1gkjrbozvqqBJSEFxEUwz9dUyRn95yGPzm35gMnBoztGP4ADG4gHwG4s4napoKW38ZpkFoUyRzGeE",
  "key27": "22TS3w13X5toirzJ2JEgMbY9npnfoH2ZnSFBTA78oLVe9nwdVNWJeibxZXv8cz2ShhtPAEL1sioar4YNLYAevnM7",
  "key28": "52KBcGH3pn5GtDvDtw79MbPQtFGCFcqDwcLEUzse6dY5G3WawViUv3E54p6tLN561kYHrxTfcz6jSWxQmHTcMCN6",
  "key29": "c45prg2miEhMFFs265E5QrP4yZPCvSeiLD5UVBBTmh7MGxa72Xsp1pzNVfPNAqAqqYAHHXq7vphC8GGw5S7iuNH",
  "key30": "2qnEoMPGmapnPUd8UPmWLamYgAhuqrbrCnxqmq899t6qwTv9PWepmPNZmHjRQdTZEgfpaziVhr59v9wY6L1QZ8WH",
  "key31": "u13HUkL74s62KKuGwpxfE66mhi7yUgy7GX2MQZJQmrbio3Bs6YXeGqHpuwqVohMGoVyeSkJpCpVAtgxNt14bNuG",
  "key32": "5SvEwZm3jfQasMPmyxVuCwYntmk3iQUQ17reLhkVAP2htbnqnFzu54j42DoG9SQfw2T7QjqFyjyRYboUNooEnzKe",
  "key33": "4KvccD82CmwCLxrXqMBNF3JEWCJHGGVY38KApBgXHMhwRWKHKP6Ezrb9KSvBY8Bw12C5T1UUJTmSHBx1pxs96ty1",
  "key34": "2xiDJTtDrPuRfB3JAHcbq9emL79giatMMvFAcwuPjCT584s6bki4dYh7kj5JWgoZNpGrXeE5Hq2rHyoWfThMfxp2",
  "key35": "3eLnxe1DKVshdRpSWuy2ewe943WwR9CicvJe2pH6ghqWwfAoAs9vKyuQQcbz78noSzzyVy4aBwBwK6XPjtq9eigp",
  "key36": "2PdjR6CJjYLSv8RLxC2fUb2AEt62QUMYuu8SRfMMzDxvShLTC567LCK5w6b8QK4wk561nHWLKLpY8JdK4xV2gUQZ",
  "key37": "98REEt8ni8WHrMWNfzyK6PeWfjKJkL2aeuQeMKvJQyEV3dA6YGcpYMA3SE74771Qs4ymiTYEZEfc16z7J2vZjpb",
  "key38": "322C8ofbQz83ECECUxRZSy1NW8NvFegKvoKjdEww6Zg3twb5xxGTc7badqtnykV1d1AM9ShpPh3b1ZyDXj2uSCjD",
  "key39": "221RJVdCDszVR5xsEq4akvKe3XdWwGk6qvaXimgwuD6fFQpT1iUik7whoJA6RHC5a9B8Z4aEMyh4GLCTJzFsmF49",
  "key40": "2ZDuvDNERe2Mpg8ZTfz7MfD6e79Wo11zR2ZXsafynFGSEtbK2UD9FqN6oMSm5NXwjjvPeV8ZHG4e9RZ1jdTFAnPg",
  "key41": "2Kn1YMYJ5eUxPVFa9bbnpbRUSqihpAFHoBwQyyDEB7x3UYS1WvTqeLZLQXZfuJ7u1YESd9PcfgQkWUzGQUUbWTKf",
  "key42": "652tRYbMoa85dRzjJHNH8DUFrWHM67zXAKeMKNLZ1Z5CVqbL8FNLfp54ApHShf4MnfnsaTjK3oYkWvqvTksDRboV",
  "key43": "4sDVaqzPnUA49Hg7CW8Vveg9eWg2mzay9ZBAK6WompmW7jvLukuBPevKEMJM2jWzfippKAVKYZWtjS1eBb6yMbXH",
  "key44": "3Dii6StfCPU3QjWSwkgsfTgkNYZKK6kCxHG75uEQ6FMjyEWzZpnCKyWfzeUMQ15bA52MxxvYy7tc91GLTSvvQmhz",
  "key45": "FpkYJBFrSrErtRscKi2BX7U9aiwfPNm7DL1VYmCHJESr15PM3bxuFKa8gn9nur9WAKLTbSvC6PrrzDLTgnFqipi",
  "key46": "5WGqYRqWWMQUexYqSHnwS2m6ghPdg2wWtYridmge3DsLhX7yfaMtHYoXnRUfzfHjuQDXhkGbMfsYnQMaMyUza5QB",
  "key47": "3QN1AvLPJxaRVRLtejT2ABYBkudGBeQ9Jb2f4DpjMRd2rT5BuneWqEnUvdmqm5KMBUEBEEnMoxzYQULdkLERuwHC",
  "key48": "4fYsJdzbRWkzMMsHopgDDmFyo5W6vprc46yV13gSU1xr5HmNsfDS2Z6N2FNX4y81jsiByLAYnPBDvnqHZPARPTyi"
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
