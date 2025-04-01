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
    "3qWs1i58Fjir4YPLiPBTJVRJ8iENe8diuANBLwW1jTog11S7e9cTXwbckN18sBKsjDgw2KzNWMGAzRBepfvLMeeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6Lq7j6FUPBGYkgJFMgiWpDEjmDfywjrnPMjBaM4CAzioRLBfaB2yne7yZCt1ykF9iA5ctpk8oi9W8mJ3w1qKPY",
  "key1": "47X9uZnWMsQSuBCdRVznhMXdZXTt6LAVnF5GXzdnChFWMByKBkGmypJxejWnfnDk2Z6sBP4BKNEUTh1Cfx7Dh2k4",
  "key2": "3nUWWM8h957RPqHaJRLawoxQDSKm9NdKYPxU4aqSKtDQzGqhstuUTcseYxP2n6AnFTAaB3XqQvCGs3SmnPT52SRQ",
  "key3": "2wNu1KYo9wPyBwTQGoNKpp3tFriDaGVz84mwcHrfc1t9qxcfZYcAkwSkaY6uwqeFq6exFMa2yvdLhfrtD99yhkKc",
  "key4": "5ehjhyVxEp2RR2BBMfS13B45TVpiR1GcAnMRkj7fiGWsDGM9Pphp5NAbsFL88pHZB3QxPA7hAYNZu7vZyL7NESw4",
  "key5": "4GZwbB44ZjU6xbMCfoTYBYqQ6nXqW9e3xavYubutw2YfkKSdMLiHd4La46p2vgQX7CUWVEpcdDEdvAR1SYFE2uhN",
  "key6": "4J8Ntk4eFS98Vj9w9ohpgojF9KhL27AAY9VvGfWze2PUwDkijb8dcay48SSUQ7CioHaYhfs7UmnMDG6Zox1UhEzZ",
  "key7": "4buCoVJBeR5kj98SNfF8sXwDhPhFUvnBCzDRzsvXCysfHKrqLu8PcLSwui9Bt41cmnqiYEAPqhBVuUHxSij4ANR4",
  "key8": "5iGrNV7BjHwJ3cL2LkrDsA9DYht6UDshJvb48kMoAfj9ZdAPrCAhWAufSv2V19Lck7XiV6mY2kJCYvc877hRbLHi",
  "key9": "2BWf5UtP9XsPic1q7CBq4jBhM9b8xEuzDGGeygotU7wjLdLZMpuCctEXXWuSeqbTnT3umBE8DZakpnxzbrmqWBCC",
  "key10": "2YkAwQSsWArc8eoneJDBrPJPmq2cTwkPZKdrAA3tTyFVfYRJNtmPySnpfPFAm7PmynKNgLWpKchH5Cb2fR4f4Hgs",
  "key11": "62vtj4DNPEuNV7uvRfqYAEmEKeJdGAW6BVvrj2ZgEMnn6s8JHL8eJgzfchjX5V6XnND5AP1g4gTbuyUfVNKqfh82",
  "key12": "2BZM4UejweJibzvUwfMUJ32ceCyG9krg5AG1Q8vvdeWq2c7R3W1gNLcndAP4cV98T5KLv3AC4MzQWpjM6nEhF9iY",
  "key13": "jWnWH8dHZj2FiqKeopAkyqeDw5rSbtU9hSHhFxsHkcqT2MwSpiFeXU5cRNQfBxANpJpbTARLm68Jp9n8nsDseB9",
  "key14": "67czDqPsHyTUkrGWArFKE8xdj6qNCNsDNm1ppf5aGtq97TV7zfKGWFBYT5ysiGLt6SbNPrRA5ZtXceYzqh9N8fZh",
  "key15": "5k36j4rVoZhkVDV7sDyoSAbBY19dMaLrNV8d6S5owdgUskLS7YeV934uiajaKkKW1XsnoKP1Q9wCQSnLZkc3HNCY",
  "key16": "4KEyFzjxoM1zCDyAs4pBt7gEaGKU2MtrKwVmWiM3HTvFnPKtZrqfcpEGFfJu6cnohafwap8iQYCBe2z2Xma8WMmX",
  "key17": "5fb2amjyDgBKZkr8ckbaSHR7fbqE6RzRqrC65EXzC9PewJNGhpVTLthUuXCPSRf4WDptWYFUJVLNVHG6Fu8Fmvde",
  "key18": "4fy8zUuGULor6tCrxjAKjZiPfiCpjQdwHNaN7ABdm4Qob9e1km9HC5FeEojE7q9jNMVLUCPZivqUYGhVGcn3nqmx",
  "key19": "4fnYHV1UvC5cZw8t67Fb6oU6WAvVjjQunFreTQEiZjLpRbpHbtYmendyv4GqHg82Aw2LAgEdJoNayXCcVHLxbtMA",
  "key20": "2yJ46AwKgxonfVo3ZY978go39zP8Hi3wUqR6o9TemQpAQuz5NcTxWeWXQXkYHt1F8vsqueZgSaozSdvqbMeqvtF1",
  "key21": "4ULRigrakSmmKLwdur4mGgVDyqp8BJaoHJqRpRZtw3XGGaHywybG3Eygw53Wq2sqW2pG3FBMnjZNu9zs7NUMMibW",
  "key22": "3gfa5d3tMS22zmfxJbwudDo8tJ2fNznFw5HaXuXVQsHfM1QAqREzxxxkqYkn7e4SKNprDLZRJkKzcGPfp5vBLHtJ",
  "key23": "2HaJXFyGvb8FWpmVqGzGKuP522j5FwgNSFEwJThhjdv4a1zStQpZNRW6sQzBJ8gs7yGZNk3DZ8Fv7WGqw4qddcQ5",
  "key24": "5pzR4KrnKUc1MGQmAEJbWUypZgSRBusNB9TBZxfcLTVo5wzmLBGKUmeWMsgvdyQ3dRvupdiqDDdKxKpDBxd8yEJk",
  "key25": "5Fbc8zrqkE4ykZG3QJHwoyRZ7QwvBm6beGSuq3Wgi8qNMhSoGkFhj4CRiEqj5c2euyjDZYDgCfLifxC3mx2ACX61",
  "key26": "24Bf6PyxL7NKRH43xoeoPMbywz1DonnxhdWZcFPz9rTaqkKR7Ajs6cQLnYvKmVASpNewUyFxjvtN23ELvTF6Vv9z",
  "key27": "2WV3Mt4UrLNWyaDE9BkoY4KbnvTM6WXY9Jk8ooYLa2bwthQtJGEd3o2gGCv8fsQaThnihEFAxkNBXVEiBkrqoPUh",
  "key28": "5LfPgj5r8BkLMmJbBoLfN8QmpjgcL4941nc18HESDDy6dKC9Bq6MUq2JxWysm2FYbonj56NHYp3EamQcNgRCH6GE",
  "key29": "5nfZdbVYW5PAPiaWvz1s9wQy7S5taDZoDFzgMApaMasxtg5qQFQr8h9HsoKpkrNuHTmZYEBPLUzpMDdTDeyTDbM3",
  "key30": "2vtvy7FquXP3YYkPRz2FPfMN76kz5S56bgMaKY44z3RQC61XP8t3BcjXDFzc3khMvYbHjYWikgtFt2BGXRagNmwy",
  "key31": "28AaEToqeFYZgyHCSJTK42wkkNX8b5zuz8Pq5J9cwZiGF44nm7KknYsAiGHhdSmsHE6TRytAALHMuPYbQsSeLREB",
  "key32": "5qxJLHdHTkQHDfP7hhAPXxC3vnXJDpnuWKDeGqUu1F7cLD3CCJEedtsvp4XjeprvYmfyQ5KJRkJZsfWgxbbN8aTX",
  "key33": "vEcMScWNpnQqMYRVRe1aXy5AFv6z7HvwuXbUKF6ejs6evHCyEG9WR7Hgqq4mWiHeTY1KjbnuBkHbvoZLY3eoJdA",
  "key34": "2wLjo7EDGtyRzce3T8zrgXuuHtYZcAMMEks6YFPNtzaE3aDwK7TRmxtFMGSHZBqxzwzEt1PKueWVWgMN5fiCvEc8",
  "key35": "4NhsCVK1Rn4wij4TG7mxxSMY8NKD2FQxawLQUg14LdN5i6iCfRK44L6wahQc32DXMd3cFD5ENHJFEWdRZZ1gXJ6s",
  "key36": "bBoCB49yXPmoo6mvm4SmC4HTEujQwP8GSYZuQ2Zpxg7TKazuczeJyuBStuDKcnFCkj2mjES2nV4XTgH1Hn62Hft",
  "key37": "3aLXdRfaKzhVsARjxEugfnMXrDRniPtfgSdja2SHEfHQMVTTgzaoUn8BmHCR7F9W1aCjwCeJZd1GjgwoHbzfG6qC",
  "key38": "5T7NwvDyy27Pjs8H9xT5Zm16i7ESLM5vPJD5S7C8pKrJCwfxkWN6SDbwvjEcg1kPBfkYhfnioeEtx46NsEz9JUPy",
  "key39": "3vrtMPfNwwT2A5EsE1rsXnEDNRYpXW4z8pT75Eh4fEjXawENNPhVb8Mg9LJLc4WxG3C63AFC5co5MtPgFng8wBNB"
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
