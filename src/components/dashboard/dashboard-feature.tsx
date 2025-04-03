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
    "3q14piK9BxiBEF2qz4oGs2bTBy5hLFAtESDwy163pts53Ax8BAXLCcGvRVkoDF6MDScNL4r4MiKvv94tXkWnno2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wDuVowHd2GhRAvyXwJ9d5uzo3WkJ71qQBiNNjDNUK36Stp9X6d3MRALhc7fSQ12AkaEGpULL36PWvDhvvrnRDx",
  "key1": "Tdk9HsfDBgXZUAMn2c3AtwQwSmuVoAM7176bRLw5gUfQ4oNBTyj7iuAPVXbUHa5TAUJhW4z7SseLsUfs5jgNjA5",
  "key2": "PtdxVam2MGbbsidaY4irKA6N71kRJ2XhX32g6DyakXLEx2WMah48raK1WN4bzdcrvL8FZsEzoP3Swbp1ayYCyon",
  "key3": "5bCALLQozBj77Ran2fg2efFd195P5aDBvP9VpabUhfn9uRaDjkkffRj5gzfDM61KRTTk23j2ma3mvmhRVwf6SKpQ",
  "key4": "226J1SRzhf44nmFpX7YypinK9zCTMiW87tXnZCWpiazNYRsFz3vS7uLG79RXv4q6V1XuQQUQhguAJG6jgBHi4eWr",
  "key5": "kKaN8uK4KewftbV28hLEeQhz6eFxRE8sp3BuzZyFDDVnjKZpniMVKe5DWR7FbNeF7equ1FDUEmzmVSXcLUYtEfE",
  "key6": "3qF9n7BamttifoatDjueLNxGSwMhK1MctHL2BYp2LatuXNGLHcnVZiFhQsP9gnh4qSiXLL1ak7KdonwV3rdK7hkU",
  "key7": "ugsEixewgW2dbj9oEqcrFqmyJnu4UNZeaTgnURSUABsiJ38bXJbrmckeEiMSbynLdGkYUunRnPziAjEs4TWJs8C",
  "key8": "4nreKDWdyoLWfSKir3aRQAvhLvobre1BP6yY9UDMG84Jj27WVutCi94AxtyiZhP9gZWtWja5PgL4dHBCigMzJvTM",
  "key9": "5Jv4anQMPrivMjfwhutSwtsKCyjAJE76rfLvSDoXwiiF3DnfTCeENB76kXikpc2ihkZXyjy5tL9Wt1Lc9MxiEH6b",
  "key10": "3wjQ6atB1LJRuzLSEpoLdJQntoQbauTJuhGEcncGTV7pbi2cnySWe8W4aH96ZGYvjd6jn8w8pa2KoopVg9iweMwm",
  "key11": "2o1KMeoMNLXVhmyoQKPT3bHhGw4Mpwt2TjbLudLt5zp8dkLird9Bv7Bd9KRDH79CRj5mnSh7UmnXNfFSwLMhoSCf",
  "key12": "4mtFHogn7f6jos5pNEiTkDW7xj2FfZSR7SAdPiZThNkpNi719vVdnwJWkfXNHm4fac84BmLmH9nR5ipGMTKdz4Nj",
  "key13": "28G7JhEB84RfN8uCEzC2j3WgNWUo6GP2hqKjt8Hfuvhz9fNPRGv8VcGG4LgDEKPrJR8wTBkz8JbXamSqnm1EygFH",
  "key14": "31WqmcYEg2mhr2qxoFDQpa29unQ7zxx36shzmrHSk9ehomXdzi9RqkC3vPfB7aD3yNLYoAnf9hJwxNdBfZtwy5qL",
  "key15": "3sBoPobiNuEdtwtC3jeFH2hcMVAGroVoaQGBR3dhqLkjznPDmJJ2g1PoQ4VzQiUeYnamM6KMV46CsvRFaWCZG7RW",
  "key16": "4aDLEN4VrQKRNmt7zUuPM3ar1dsZzRMeZW5FAb8bKCZ8dBDa9xEKJmK3mJqms8fiyKh8RJTLFQhmUgKPD5sBoJZp",
  "key17": "2Nr7RHSrcndTdri3C1icCE1SasrXLjdWKSScmxfeLDz4GpfreAUmLX54nRNDVbxAzFGfNfgkapYQAZ7Pp8pRvnR1",
  "key18": "4ktvMsxnZjoe2RXZeN2Lz24YqGzcZMoCBAqFuiJrdYeePncRHE6kJFaJR46SXLL4t6hzD8UK2gq6oYE5uTL5tptG",
  "key19": "47bdiqxbLGY1tk8B3S5gFxJvVpmHAufwJrG1QhGwkkXXKCD3WAUDedJk3zBAC5sLcA6qv33hUHfoxjS3zEuwJ3Cf",
  "key20": "3ziNyDPiZ2hPL1rKSwweATcZ3BemDWyNBSqiPXTKqDJHXoAnsmzc2Frkfrvzyqo4VyZVbVGj9VRNeHVC1W7wW2Ln",
  "key21": "3G6iykead2bfFyR9ntBK6JrEhyWi9849HVXUi3fxEYxo72PUx6GTQysNV6H2XpXcoaJuJZekDvHuJ8in162ZeBdQ",
  "key22": "67nc1AriK2gPKvCr9E1nX8amEvbhbJtLwHisdFnsjcZNoqCbBAccKhFAdfnWWqUi7frMVnhYGw2fcg3ytmPgLr1y",
  "key23": "58K7sr4WuwoVyBaLMJnXSEbRt8zg6q23inEDNeBpB2uz4qYZvjYHSKxjogSbwhjuttxdjHwxf4C2UsjRywzJnnDu",
  "key24": "3pCzVqZxZNPgwKQnacBu3TezY344dSnHPWxBApXRgdZvAPkWgAUFqNsYphQ1BJcMrjSbRwUfyeBN7AK12ED7BWCG",
  "key25": "4mArFevqnbS2nFPV913pikjXjhXzyLEiPpxPtTL4QkudJoLkUf3XvFkQcbTTF8BNyF1k5nuPeBxYzKjFqytUGYJd",
  "key26": "31JYAgQCZJecnormEiMneeqodd1kWkjHoMViKtB3kpKne8wZqSVQemF1imten1dPTMYr7XHhSu7aG6GstPZ8PGy9",
  "key27": "JP22eb8DpcqMxX1JdP6ePruJScs18wKhuY4MevpJJPu2PGWApiLzbFDsKtGdkHcz4tpRLPZnScehHWrcnfbv5r8",
  "key28": "423NfAiz64thCYvD4ariBnWAJf6gYkikAjYfTRvQqkBzhpcEJ8UKJajrDQCVk1QzcCVVG9JoCGBYDpDMfxvCr65g",
  "key29": "5QUBjFFnoGSuGASKaazAMXZRUVqGApkH8RvVvDfw1Weyt6ttVxsBDCZDrtxEk5H78vY5rDcfTUzBf3JnJbkErQ8t",
  "key30": "2e9dKZLo6d93D33yomAUZiZzzVAijGKX3WFF2ydgitgz8hsJ7X3mVmFRiDwAmWUN5Tde1RjcWH22knbSP84WokCc",
  "key31": "MADevGmeWygjk8DjRyFpKiwveWuwRQEm4XZmTrsyHzehbTExxT1oPSZun225rakGwcHhpFsZQE9s6dx8XX8QVMx",
  "key32": "3ZYHBrQRGQ6m3DeWq2tX59rc8chnDiiAAj8wjjpyMCzp6bfP4b65bgL1H2VKCyKuLnMkMvxo4fzfj8E3kc8qoHbY",
  "key33": "3hhvhJrqdWm1Sbpari7GNeWqhhK86JZwEqkPkath3dEcYQz1LnBRUwLMRroWaKo1HJRC2MYfsu3QWSEhgMQpvvSf",
  "key34": "2CXE96RzTqcdqLycZb5Gy3Trnj2WLFv2grN1siwsFNYLCGFN2pCvcPWnF1Lcbt8FFXNajkvG6muyMEF3tSGX7tqX",
  "key35": "57bteTKxpbd22fxG4LECTv1tvECS4yudJGBnhS8J6nqTmDU1KNsAnteX4RFK22fn2fpmxC8ENMXCgW4BdXuYzJtd",
  "key36": "3RgFAsdcafUvBSa2rmqGKRYgcZ9LBTV55kNUzMzkkUcg1Ma1m66Ls1vY9fSyLmHUKuEVQqfPvUAFgc6R8waorQmV",
  "key37": "uc64Ua5xu8WAeNRXX5J1P2Ees1SgoKnXtARsMpceFtbfEYYVZYQ5SqCKvUMPRPYLjjpcnnmw3BKnbgHFnRsUNou",
  "key38": "2CYK3qoLMHF7BiwA18HqJG3RaFYQ8eYSKUWRbUqVvionwu4wPAc6BxsWXuna45sRcZMw8CC7dqCo1czmVweDHKU",
  "key39": "3RjS3CfPSTM6oo6p786Zdmbma59YqnZbNRopxGXvsGio1U3CHtramHjzUVkHBrpuDcCJ3ruVcoXfPuFzaWF3V8pf",
  "key40": "4KvcVdkNWPusJTiSnom93GG2Zto98Ni9aSEYcHQqagAuv2LHrH7qT8xfE6GNiKCySL5vAvD5yDroz7GueyRu5apo",
  "key41": "3dxvH1t7hYQBsdZhxkyfALenmSeBcGrF86kMxC9FCyuzXVfjgRPgeWMV81ufJq3qNytt3Anx431ix7yG5AXNrUef",
  "key42": "2QJ8u7h5EbVkmufmhRXWe8g4DzCxNZyTZRsA79k9aT8wsrqJJC88JccfZZTN1xuuh82KWASFfMBM1mEHRADPtgaQ",
  "key43": "JztFgNivfYGuWJcZf5WTDd4AdqVqopj69DWEWZCerCxGMNNQVKoHhL9qqgujUZK4jj8bpU8j1USLGraptFe2V65",
  "key44": "3HZuj7fc9r2d3FsFbFg7fqpfjbZ5xqgnjhMqQaMEq6Hv2C8Gfxh8hGyYiyH7uETF7UhaDxDogowamCW6VNG3JKXd"
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
