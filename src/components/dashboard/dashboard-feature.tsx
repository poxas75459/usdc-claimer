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
    "2PUJD8SKLvU7rQAF4QvkUzkZoLdhihZvpKNEx4V5A7BiFU4R7p3dJePgFNXcpxd3kYjwFYG7VdhBRNmJu6tzauuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4bsGeKka2Si3ncnePguV9Bi7TypUZwDpC6KnubHuP4f3yhBxBLerayR85uxyRDquRjbiSp1p3q9BPmRnQU74xJ",
  "key1": "48UUL68xfMikE32DEFEF96EZJte7fTczGie4Bzh8WJd9GnMB31SCjaHZL3j4qcEi8DV6gnXRAJBTRK9JhRd9vqcR",
  "key2": "5mozDgJ1MjXayoeYShj1in6JjoawkYbDWZVJ4bVrB2auou7epjf3AJ2eyGjDMGQPondPVDePoKdPgz6VfNjcJe8s",
  "key3": "3epc2zeSAGGE4UJudxZ2PV4DA85r9A3smkyvkx6SWYMu3Dqk3Yh4SeExuD1SZtr11Y8GWp3WmWoGQEjGyWfxSGwq",
  "key4": "3tWw3kjCLTgbDaj5zqWmMwV9aB3Yh3v7g6zXaV7n6nYxWfXkpZhiKLXJPbRLrxdktunhxgLEQRMugE8BFTqWXsbN",
  "key5": "4dyg1oXgoiPA2axhECkUVNXCYXJtLQzWLUW2aEeFzbYFpWbmpQLhdRXQ4aqWagMdSjB3CUmUwQr5CMHUXC6eQkqb",
  "key6": "4sKuL7gCLq7Phgsg862DUzfgaLtSdyQK6sMkyzRjTx9UfKygF6WDoy48RjJvUPbNtR2iReeEkVNpbsQrkjfkXqj3",
  "key7": "3i2Q41T9WbRzWQPbcGCkLRWhUAZiHDHjpzQWyzb87YQ55n6Mmh9fLtUWdjxyi65oebcbuWUxhLv31cyxe2AXV4f1",
  "key8": "5NdExredAtv4p5AF7zsLWerjyANgBncobkx27bg49oDavYFNsNbNHGXiSJmvNrM85q7h1fdsmdCjkMmLMNKMt8st",
  "key9": "2zmDjusXtVXFX5yfvvJ7vxPC1jkv1LX7p3Q91dmBAbWZKdVqaVN6P64VyCTw2zUXk3jdLCKx8DNNWRUz2UXHyFev",
  "key10": "5LAbMFtkCkwzMousmUaTZFG5VHXCUfDMpr2DXZfABJJ33Dd6FqKCkVBWzDXuqcxD1ium2Vjtz3vDp74ffcwqZWWq",
  "key11": "2XivjFPR9igt1t622B2Wooy8Ep45PnkmpVyCgshhrm34xm5GMeUYGqmXwZULEcAmm81sRRyjWZsADbFsbBhQdofZ",
  "key12": "22Mo6h4M11KBvQXEmDPnPxzTSqgjQ8ks1htf2ie3y7pLVfPmhdhQ9AFx3iiaGhhUffnyUQ2Dp6aiJ8r9RAerZzty",
  "key13": "FR52VF1nzEC3HWVTUH8UzBL3V41j7DbqXKfgSwE4xgeqD1B4KTvKdMoGQMSktKu6YWBTCKtvqkprZd4J1sjQNGE",
  "key14": "27MssnzTYGMahpaLUHUJWpxNipf32Sk1czJ43Fj1VuZCPP3J4zpQ7wDCiUC3cLhRDRbQeS1CoLM2qNAHBHD9o8Kh",
  "key15": "tU2fx52HNXx2kfsG7y9sqTfSXQeWY8qypNw91PZHNgC4qwFc5HFLZsQJu6oB7BJedUPv89Gk7B8gjSH2xfoikUH",
  "key16": "2HmBnD1VqVnXzUr8LpbeTAsKsre2Hnk1C7Tjhwpi4Szv6pNqHGXVuEom91oXSAK65WS9onHiuxbekDcFM3eEhBAN",
  "key17": "5Ci51uJmpF9MwRqxP46ZV9GkHgya9HiRKpnKQsjDeDTiJksQrzQWPtrYK7nqGTRkGEepk1imHKfHykgdKr8HUiF",
  "key18": "5SEg1UcpsAAGYGguWL4u642qCCn8uSpS3VVUqoErDuF2e2DwiQ1KxFTdA4cnPmQtevbNGqSGb4ik5V7gdLfRWenr",
  "key19": "3ReGT3is6B8rkBHNyhduWPL1hPYSm2T6wKhk7n4wV9FpsTjQWb81eCBRna13NyBmv8xiojbqiBPbo61BUWy2mtf4",
  "key20": "USCZCjiNJDsUHWhFUSjj4gqpN5FDyT5KnFFjqNhKR4AmAHdR2dRdoUszC7JXJnra17B95AMLbESDBmrxztBkh1R",
  "key21": "5HthFenbrbRxk5fMqqxMnBBBSNqa7qe3g29Uf1VvPsH2YjvVgsW9LUhkzZJLbHNwnAeyipyGH5FRdZJ1HWh5Lcvw",
  "key22": "tzhCc4rUL2z8x1tWFDxXJpcxT1isAfmkVDVLz3zHPU9wp7C7XptGfE89xkM99Zh5zPP1A3oQk2FWKpMutkeGaC8",
  "key23": "5SMz7zEhREHTG3gumD4zjsRnKnVTRmNjCsa2vJVn5au7mZbC7Bj5pwudcBSck6neayP5VTJ6mkiofriorvahZDrS",
  "key24": "WPAKd3cRsgBL29XEZjfrGt6TnpxhDTnmKyWr98DXxkydv5BuX2tcCqbtupmCxKodHFtFcreKKGqmBBhu2wdNzSp",
  "key25": "F9pSpmv8nUoVvfamRY6cqg68Rc43c5fPmNMieLJVFKbSJXs582ACzTKUHoGPehsT6CF9AYrfvjuuDgDW1L6QDWG",
  "key26": "429zLTYPnfEv5Mx5r9rdDe6reeCBK1w4Fpe1wrVE2FUqcAhC1PTgQQMS6kpLRxhx9RGb19KX8zF1zf98jyLTjnUw",
  "key27": "2RtrNXRg7WG1aKes2VyQK5Hr8XqPdXT6ziA2YYykugP6ZG1qjr15eRFsdoM4iVWW18JUb8yfHKmc3ApLm81zeGig",
  "key28": "4s3s2L7Qz7yeXANsXAxEs4KU7NY32jC59oFqKZriUTNcQr3XfC9EUN8q8TpdQyrHHSW37iTxTQSh7f8gP7KgppYa",
  "key29": "258FDsLHJKWFs8Z1doEwopde7sPqqYjF6FFECS7QPyL4kFPU659kv6NaefpMGhwapAyTSKGkWxXq6dbbRrXUUVXx",
  "key30": "2hHa9PAA6XDTW1DKqPbsVEiYnV87ELesCZ7pqkHJm3FwxGJhAaXS5rd47MPGC2jySn86Mhinpamd5tCc3u98dm1J",
  "key31": "E3cxyKdTZSDQFygfg4evumA4GCA8fXdeYfWvBRQtgAVCgcoe43ZRkfdyo5PwGG5s5Y7tusNXPWrYgAKLbe5VnNX",
  "key32": "5puhJCgJpLozyYGvC3NS3yst829aD5hhXB6avj339cFr8PtokVdzrjbECBcoaxuyjzvSPEDWm3mFV2u55SLLdxK4",
  "key33": "4dv373oKCiYz2RWcErrSodvMjsx1Uh6d71k8175BP8ZAHV3Q5SCkPihtSNAiGncYWA9uHZ1ckPfTQeHLBnquCian",
  "key34": "3yNh6yvEFU5rKz6VPm8nScA542x2qstw4HmVhULJRxTQoogJqHKCRM1FpxCxW6PefDV9jLCRdhtdQxknT1ibN4BK",
  "key35": "4MFMHNuLeoxwV2j7526GazSTHCfuei8ut24EKnZgxqw2Li7VhLGUsiQqHpLxuYh7fhWHzHTTzf5fM8vyeJgQ1dga",
  "key36": "NoErgHd5DPGhJ6xXVrbugsrPhovZirpReX7oSi6Z16PNG49kJwAsY41HUdSks7CVhZQ4ASTYSm82eQncYPEPBoo",
  "key37": "3P74jWnHzBaWLU4QtgrG7CH2Uz2no3DfXvRed9eZoYmwY3rnmLrwP6SppixmGG7SogfEEvoGvZ3gTarTwFbhfCMq",
  "key38": "p1mUZKJxArL3PwyVqV8BNAQuBMB7MVqUbQ6uPLQtgf6uApACfMDx593LJDtYCdZrREskqyh5Y1Jf8sKcd47hSrQ",
  "key39": "3kJ8BikhJm3kqMzbHhTgsJFj2epXZHSAGEqNuSafw3nA2MozgCq6LNeZTU7rk5bbfg7Qq6GVaB7BKUvXcJpAD4tV",
  "key40": "Ge73ts7qfwvU2mkpMzNX9zSDtcTTDrtn5Y4Hw2AfMqW2ruLwkHAr5xX3XZdYAUaxmoVQbficPriEhZfkWf6vDXe",
  "key41": "4GeA4mnHpJgtniHzxRvyL5WbbUb7ud6iwMFxwh8pZoxVRpEpUbSYfSwRiVyaPir2uvUCKxUxZmB14ra1t8N7BnVm",
  "key42": "cVFNYQu5EQndfJLdinvgiQMc2mD5XnFXXLcAgjW9m4hqE63SRJDhjigUG83DBawTcVewKhBoZJAMcEEVSqdrbep",
  "key43": "2poPoyhy6pzaefY6Ap2Vm68DJ1sVsACDGRaxPoB5J2kwWW9D7tE6QFhMJ1VcWenx59MN9WprFnuivmG8dDEFBTdc",
  "key44": "ryJf3S3dy7uukdPRkbE2xNqXRgKkYiXvEAztZNNMsvXWFtxS7u4yHjFibZacVKBPy9NGjdTGVD7aTqx69aYfciW",
  "key45": "er5DyB5N5TvrcfTBkSen5zNMHgSzqoHQfzhQHs4prDvKy3ec3NnoERtFAUmqQKAZ3VSv6ZkrGyZ4iA1UmjPfz4c"
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
