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
    "5Fk38FHDfDp8PJt8wa9BiF6zcFT7goSVqRR2NUZcQdhfwTv87xRBCjmnkDzzWYM1XmQ61hBD2Fx2DA4uYji5ifiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3TWDLXAjExXCLVikwXoeoymC95LrjDxGvtTNj9RR3o2Lcs5qhi4aBAHUNcBEqbuHzGQaxA2HXJrqXytHNAqtPa",
  "key1": "418X7fEVRkQf8LDdLPjxJE5kEoyDnfRkRUBfKzxKEBnQ8FQypHgfDNHoWvBJ3rGcjyNAL7W6UXyYkKbXcTGP7rmr",
  "key2": "Bj1sM8w3AGKipEwNcb67tDQnaXGNo7tYTdFPsV3GeVuPK51VHtFxZNZyj7a2pfUYdcAhxoNf8zW986LC3JvTkf8",
  "key3": "2sqLwpQXf2auPeNhFfk8yBTfcKC4iLi8cDHUzqvgzy9mVqJ5XTe6xCn6BFEbDgoZW9rdv9dGy5yNGPfAtzr7TvSW",
  "key4": "43y1y1b48i36xU29oLQJT1PHUBiiiwkMopNdwXaoy4CsME99Y5Mo9A8ju3ma9de5rTRT6y7wtHgc5Fk2V6WwD1Ts",
  "key5": "2rVBPeuptw4bpcTB3qNd1FBo9vN61FLpixGupqT1xAy5f814WsgNFpyGvQ3JhU7P5qqDSPJHhV9YvPYGVR7wHReJ",
  "key6": "RzWvQzCAr7i8SugL47kG7afQWRcXzHeS8NFboMmwft2ibYZyfv63HQqp1GKiJn8chRCShvPAxcTwGVFiFq24ysR",
  "key7": "65B9VyZmn1KVaJv1AWS2pSMUXRbyqwdma1JNrrJ1Zp8eJU26g7BZ1CgD84kG7xTnjCW3hUrtaChj9Lt1gFk2ji92",
  "key8": "62xipakxkpF7BGkcgRMcAHCDdhnov93z4DSzzPEsMv6WKZzDz6zY6T1HHiiEawCWvfqXNv9U5sPfekBWunUHhora",
  "key9": "4u2UcRGscbqxXFShwTFjjAz25NFooUn72RDLQNz74rRwMQYo2SVHXr72993Uiwopvusabnx1rQbtXtySG41faWA3",
  "key10": "3So12eK76mw2wZh9GCJYYpS76f4wxJcQRoHoHT4osDgaosqTPuMBScU2BWmVg5qjxsQam4uhxCuP7266jGgDkf6Z",
  "key11": "3vGoRLwJqmav5Q4ZH6ZEuP1N1UnSNdZ8CWJXKMdUbYfp5RytayPCX8WPYkFySTjojiD6kRSk9LtXrHipADfCx1PQ",
  "key12": "478MKcX93oBVa2UV44mCu6paMtg2nQdvtBgUtib55okqjZjrVkMkSTvtWxP3k4QGXVG6T2aVBiwN7hDKh7xEBJQ",
  "key13": "5g5UtaQ9NegwQtdaPAuzHzPsuChyZiaeeY7HQLc5VMUVs5dvuUKvRyvUx61BZTrC1w4rhq2rkAwzaVrETYo7Tb8d",
  "key14": "4CPjipq3TFCXHkFwJdYimeytupAMkXyEe3aQJJuLxgcBGHKAFAPLhdRGt6r2W7co9bn9jdjLauTxq4w8vjYKYbjc",
  "key15": "2RZHWG6ZYsuwnVcAZfnK45471BKFHDnyno9V8c43DBP7wEQYQgpxHRvgQxmK6KeTjmBbqyHBwJeWabEo49zaSd9i",
  "key16": "442LvpgtkuCDcpebZodMDU9Hg5fh2EbdSM9pcNcZhLgZmrYtJ7mq49kVZF4JF5CUSVkjny9VrvJ73wg9vYgDMpBM",
  "key17": "3grxMESXiu5qu6483XhfQgQWkxYXc1v4GYrYKPs5iPC72SL3vfvahvMFnYj7hB7BA9m6y28Hm1YxKQUqShubbs2N",
  "key18": "2r45S1JbZofK7AzHnPzR82WFWms1NH8NF8owe8MGEb8D5VinpUWaz37abrbreHm9CPsmfNE1EpGvCvyLTkY6CTYB",
  "key19": "brjvWYn4D9KWzYHrReyVFuHRYFcTGNUghuHnUuF5gSr2xysZ9hXM3Se4yRzsnTm3Pwr7WyyASVaFBuJQ59d6GJN",
  "key20": "4JUmeoAP5SccYnGiszjwW3da9gk21dMEPm4LP47ropRE9tiGAwdDyLjtfnV5q16w8RzMSDVMb2bbZ1t9pxXhRDwK",
  "key21": "2brhpb6vPVKPftSkQbffrUpKHrpFEB3hrBzaZTG2ReZQcpFKGh7uxDwD9BVFReW8tk11iEnQpyogMxpgNkReftSm",
  "key22": "2i6KCh1DetDodzm7MADmUs8uKd8cpBu2T78BbMWTjn8MPqBvc56KaGbTdRCEAczGJos9gDn6sSYiaR8Yvam6VS3S",
  "key23": "4bgUmTEEqQuC7mW8KSk8DNQxAFSnJ9yspZPQumWrkX7W2U5iEA6ZFJWPGXuqLstkKZQWC86UiRWvQYYXCoJ5H8LS",
  "key24": "4fkX7BMTtaShZHSqMKxUmLeZ4EBm4eXJW5PimqccujEe1rXSjqB1yqZjY8M3vem3czsn5quMMw5ezMDfhjK2nJQt",
  "key25": "5G5jJuQvySurxCJ56pUUrinfEtr5e6x9WopFeMMEXb58TChJGAz5bfWiU19d88cPtpzrFGCdaVkeCS4E1BpJ8jJh",
  "key26": "3yD4JRK4G77JCK9cy568YKXq7H8pbMUQawdPEp4HFnDLAoeQ8Vt74Xys3zP2yiqBE8yXGzvzUXfRdVjF4n7DNU8Y",
  "key27": "2ZXE7r7aujWADnnqMt4HnkpZzqmcteM62AAm1hrG7AGwGMiW92s24i5XkyFtSw61SQSWw3Wi62CryHUW6a4vmbG3",
  "key28": "4xGTiSHuNGwmMTfZWydLf875Ep5qZYaK7C32Y5TMSxkG1Nb7c74SdJ8wvFczNp7sNLAbgwB5BZdamBEcbGSAzNuu",
  "key29": "5KJY3eusLMyJfD4ZPNmeadiWgJa8HjoXGkzPL2LVvrrgUeGAvojSbeb1E8J9VofCnvokQzhUDWtLt1MmMhk3PDwK",
  "key30": "4E4Ec9k9sXdgVH7er9WCYDvaDm3zfq6JWjJu42zmoHnUCLo8ikiTgFWjqw3hdevF4YQZiTQ2w8R3pbiPWCMPtkwX",
  "key31": "4LXXq5FryXZ9xbwAgFKxGcGp1rd1qPP4NnBaPBtLk5n5baNeqe1YA2nuYujWRTXApWdvnxHCkSHgyTzg3FGSXmUG",
  "key32": "rmHiiexbSRAsyMZTGiBE7KpUHNa9MaUc9HmNLnFj8ncxAeGMp1ZWjqdZgEnfrA6HJVsvNaprbqsskwkrjhWgBwu",
  "key33": "3SzksKRQQMcDXKjEm8WFhR1L5hgtmUZhLUkL538nzW9DSuvHjBAK4TobDtxLLC7izHbi39TBGcSwQg3mZu8yRCwr",
  "key34": "2WrVQhQG4kPcahghwKfoYixUrEG1ECgBhfubt34jEVCXnHkSkCWzK4GFZYvBDWV4DigQryyRFwR9zSZBeWtMzkGt",
  "key35": "4Rzwn6rzqswdiKGYF4ew6p4DLevUNRL45L9MzrY1mgcRWUWZ6LhdJ5hody5h1wx6MXnmdknKS7PX4DNgN4uZ9WLZ",
  "key36": "5roqCEvvHyERk8Dc2HHLbkh67Z6nPfVNpehPRboVCJYcWJip513R75uZMxQtwX3KiW5usdZui2FYGkwyRr92d7Bo",
  "key37": "42NdFykk1jh8sVucrBYwww4bNy8Gv4UC6S8SPvpmFyjWb2AP4anQe6PjrrUnoDsRtnyS9G3ZeqEdMDqwe9rfC2Xo",
  "key38": "59GuRUoG42DuPKEJ6u4iqAKEj868dC4THHKRbVG2wBTYPWTwDCZTokpUQexk5fM1X7iydjCG9BBYziW6Hb3muVpA",
  "key39": "2TnU1r4hHJ6BGCKiKcDjVzx5vyjsWiR2dCrMxc9DomTHu4R3nsCSeKVkBGJew1m3ML2Go56dMqRmoZnq4fDEtLEB",
  "key40": "4v37QUbVvrFjipYDD1hnmraptyLHFEx5PiRXvf6Kfh7SeQtNuasGge9fBqBkmuNVdAKSP4KWk77tn58yfkej9RZk",
  "key41": "4eQVx76ZLGoHenywM8dW819NgnPCJnBGyNZNcGT38AhxXkWNNwDT13AFuyp4bfqffPxE3fNgZ8WEHJQCnoPJewd7",
  "key42": "442HPr2MNk61JVHeBdFsyNpaYjSqL9VNgUJMJLPSwW1P11j973CqGspLiYyRJJCqcZN8sizfdLtUVx8Yrr1jq9Py"
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
