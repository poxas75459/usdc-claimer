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
    "26YEmuMhiHLKx4NNiiXEooSeshrKeMg4ddz2NX8Ew7PgLczhCXiPcgZHXH8H73LNxHshphZ8H6wKjSjNTxi8hLDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsybBzLz4N1avF4p1y1DL5LbxwWq2gHBjeQhBc1RGVZC5DvcvMtNbjYACGXVQp2UGrJABf3kpQ9C1ujuZ84GiQ9",
  "key1": "5CDk7M9EGnDhqudBuxRLJCkGXXih8ug6m37xyzLgaeqKboWxi8Ltx3AZVpLF55STryp8G3thCHpQtuXLMpSCVXfw",
  "key2": "3V6SXLkgxh2Cjg6THSWko7HJAyqhKMLSkqkk3PZipQkfjFFsnfDcmnTmwbLE3tJdRPArFLsgwkPBL6YS3QEyQWjR",
  "key3": "53AXzvDwmmFKbLPp273ETEiNYdKVyNpRS6sqio6CNT4kC8waKWQ3172freX3RUKwkDDi3w2qWn7SF5pgZySmH6PD",
  "key4": "28Uk8KFqHYBTRwRd1SycebVvkCe2PH9zpSkdSY8Rt5qqTLVzcQvJ2AwD6C6SuUvsjicSWMh8prRbtZMScqEe3BTm",
  "key5": "2T1MjzjMGGXoBE74diYgKq4TyAHurYEMX5Mj89kwg9rLw2ttX16o7mKRgpcsnv32jskDZofs4wTGAADpHUj7HToB",
  "key6": "2sWwawhmd5jw37d6HLc6KBJdMkhB3hvPpzdQnaqCKYQMeugsVqF47pYh4MUWJbDseEU9Dh9tBHSgtJxqCC4CgD8A",
  "key7": "5EePd1bmy2ke87N59A8AqoiTQtPhkceWMa9DkvPqwNDQFzGag5ouzFwp2x7iUfDEWFdZEq6Z5MdqhwdoksBHymZ6",
  "key8": "5ttYnJ1QWw47Q6uyAj1VArzCRJeKBNJYtuVkizvQ4hpprDiSVw2HcV6NmVWNr9GAVQkdoif8tDcGPSDdCUGCcZNC",
  "key9": "4sew9yn2yddL9fSfViyx8nt8xuEGGo6k5TZ14U9DFEHjNdbf6rJacfAJfkjpBqjXWbBnY1qfdSz3uK9Widee1fqz",
  "key10": "2wN3z54w5RnzZt5E9JBm3fpbLxcizpbvvz2SfVTwrQ9kGcDnnw1U1NEWxz6KQntY39jHta4m22ETjS9QP73j4fdd",
  "key11": "24hggxMxjtwZQHp2sG3sqPvx7ofQd9yycjo4vRTSfF5cGkbNZyw7dZLjyQfN27ScEhzoiS1apRWpcqD1mX3My7wH",
  "key12": "4Jx4wPaXYFtvYSEeD4Bp2vSx9bmZbsDLjY4d8edZJNaJXy2fU5D9ntTeX1zo1sKJYtHURd6B8nX3FAYdmwSiFdQm",
  "key13": "5jj6oVFA3AV6gCESKvZYvnHgK4t1tSnbbtymyZDb8CmQgTE6w95Zk9UEjGxG55vh4XevqpDFYjYi15ojt8p5dadN",
  "key14": "5sW2DHbQyxY3kQguft5LVFRVmczmRWD8BF8aZf98EoZL3TuMgyap6gjqak7E7dh8HxyRKPwjFND8mTBpwUEoocyn",
  "key15": "5qgCoqn3uvhyEHUyr9vGZzs2j9R8FqinCqsdoo2oCk8nhYH9fLg2y5RB3qvk98VsBbQkBxd3x8SQ9B3WG8Pvu6xs",
  "key16": "5zCSba8RK35djrW2Zu3Gyx4BeGwZAJeH9wWGq9BfUGLqxaMq7nxBQqgeKejkcXAxzfdrGLWXtHnAf5MfGdreVjaY",
  "key17": "4f5M2WDo1wVTmhCuMxUnswFcaAY4ZARe3EKYo8ezecLA7C7u5JGdwBziM4DF3TfBESZybG8s2zg6qTAyWVDYkTGU",
  "key18": "4N4y1upHPygGuQogtuWSogmZbtbN419H17VyfkK27EUC4qJRQqSUFjRzTCtvuBneHN5DSv7jWvrd6LoALEVvC2Fy",
  "key19": "4MxoKZWqwNi9cbV3BdZb8EGQ4GKcRUEnqkDFkwuENFFVmPkDAUWGeFAoobA82eTbhyJvD3x5Ku37g3xwfxFjANgd",
  "key20": "5J56KjDcHTngcwzVbM9Eg4tykSM6iXStXjWvKo2vwHEnjMqkHFx88TP4tJnsV7f2ykozPB1yWsyXeUed3ddCubMk",
  "key21": "3qGq33CDg7kVBp7JNsmP3pcygF9wACC5k65rU6rRLb3n5aNYBBYDtmNVf5Z1KputdRFB3ASSarmywr84ohet6DyU",
  "key22": "4XLmdZsnqEpi8XB4moDfFjsKeZUF9Xca5S3jAD845sV72EPD79nNEkCWPa2J1gwa7SPcATJ9pCC4HRoYEurcFoLJ",
  "key23": "47Lzzi2R61MmB3a4nvrGqzR6npi5sXUz84xr4xptwA6yporKcmUFLF5DvEeSRnRbHivEfXGWpBrsqSqZCfYJtjuU",
  "key24": "3PVA3SkrW437scK6Zw3gteWXbRL7hAMemy1VcfBU89RVPLFMWxRFPSJa6uFfm2EUZ2P63hxQgbggNP3hWZUsXN5",
  "key25": "4zBxp3yYiSuTgMNY7Xx4jjnDcnkpCU124WY5DGi4pyGSrcL2WwSPtEZUDvWpmWmgDaBzEKRUCBKmvxbJv6hd6shz",
  "key26": "KhyNua3ehPJ8JrG7JvULKP2PUkmpWQiN6aZFFPAPEq76XqXH8MmuXTbhHA1sHDSECkGxWkmCp8vNKYkzoQo8Lg8",
  "key27": "2HAzznVBVRNjFuUYPVcBBFzygndUU7kvYTSCAAMSqRMHco3DEWXeB5Jr4RivS8ukZCTyQz9NdvCm7hNLSyK7GrCb",
  "key28": "5HmsBA11dqBoNVYCsnZhS9JMW5payKSuckRTYcLa946NAg51yGh2EbLfeGBnFfHbyrRKiC6iUfNmodVqF8VH9Rie",
  "key29": "5LMJkq3BhMrKsRmPPGMa9B8BPamoKmCCcs4kNW8vS3ngUhvPQMCK2zjEimCWyqwFFG9bjfr4sdKcaM4vtahQUAzx",
  "key30": "66J1A3hy5yZyRkP2hkFVNDu8g3mtN6s52wFLyJgeb9yY2zqcc3vF6mw79PrmhVW67JuZef4pd9FLzf6qBuYwSpx5",
  "key31": "4BKYTPrinNMs9gY2DzaUADourK2rS2tdnFrbtBaS6G3wa54g7mAPp4iScedZ2vtwVK7zbULkK9Pg1WcrGPPtiW1b",
  "key32": "4SPDLCG4t3NaoQVbdZ6coCnNkZgjteQfVpSjLtZPQ9YLnGnBGevC3rT6Ew5y7h6HE8aoj6Ag3aT9K4tTj3BNwiZQ",
  "key33": "XgyVitPY1x8MsQjEB3n9AxoBJ4NuiU8kftewozA7hn6dvDjmGCANtEdHV1zrF9en8YigY1yaW5i1SLCsFRVavK4",
  "key34": "4c8oHGHHwVEokUmf7M9UoAsyUAaBEJooHA3BEhVLUzKTnJjzaCDiG6h9J9HXPVkdvE2NK3CJMwKSWcY3a3VJe7wn"
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
