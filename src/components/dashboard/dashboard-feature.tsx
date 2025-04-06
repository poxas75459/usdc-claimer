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
    "2xR8cdfraAXYVTBdy1j1mKmZq9t9589K2p9S4XsqFJwsZZCAASCWbWAwqpeoiRKdMT9CdfxJ46Br6Xh9b2LHxAXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzfcJzWFYDLEQ7zYcbn6g9BHgcpMrUvRsBaXvT5UU662kDbVPWsGUUGuokCBUUPRtjDr4z5W6kWokGYcPxVj3Z7",
  "key1": "4giPY9EidDLgHRPmRgpCWkgzFRXyQpia5ei7tNF3mbvserPqwRvMDAr6nXmFM3Q8BUedGv1Zj7MQvmpnmnbASMVZ",
  "key2": "5LsUJ7Yt5ohrtgHrvHpHXk4uvCscMzWcXxeD7zVXw8Zm6NVDFygeFgsW3NTTobdLLp2QMkimaithYixhyWT4Y9KV",
  "key3": "5fUztj3fZD68A8Ncc9DVWMwuXsuZVukBkrWrWkFJA6QaBQWWnfMDq9TgKpkVbioAWYfDrAa22bBJnfK4gtjarG5f",
  "key4": "2YDhXrYoASZq7451xXYHTejMBbBhBbbUcfaZhrA2xebpqom6ZFDCeeK9D44v2XbrLMmp8516JBWJfAhWv1vHEj5V",
  "key5": "44FjMB7QmQ2C7T11H8seLVtLeXd8GUNwYG5GiJL7Rzy63oGXBwiyj2xYnLcBZtYegWDGv8ipFK9rdDLMp3gMBvuT",
  "key6": "5CBVkd9iXLbSpA1WyQ4yJBb5coT4eScV95uSFSBd99ExZ4DjLoMn3f8L21pkBuM2gH9aZ1xh4WMso4GhtrNHbyLM",
  "key7": "RhLeihsYqujtasptbf9FuhDtTEGEsE47ff6FdCgPVe1imik2BvTKAxHvbcGV17BXJ4spzk4knMnHnMpzWb8LCyd",
  "key8": "3KT5eeRdHVWp3iVijkSWUpiMspE38YZFXdKmawzSxDHW7TGezF2M7VRBSNkUmpKSihhQB1uSKqyMVY9yxsUsYTVG",
  "key9": "2yjVf3GtQMb5LVu1j4s3jsoQn7xT15SDGPVaT9kD4Ad2jDHjF6j8vz7oRgyKJPNFsh1GDPX9ZpJiKLJiXiWMShYw",
  "key10": "35CM4BXdmDuchZRG2FMumNTCrJxj9RFncXQUF1n5uV7QGYFncYpvG466Dk78pkfy3338SJ4BLZFKE7ENFEZLXh7g",
  "key11": "29jDh9wuM3R6Ah8RnPbZj5CKgszLrbJy2eQpu6A1G6fKW1cGqPiBLpprkHgJumXFaTj1q8kKxzSUowHPz9TYZBhe",
  "key12": "2ghyG2a4EEvreuNTxhPv84XggAtbWVEsD25GomhifmRRSL1gTzGLwXCx9xjLeDv6guMTtS7EQxVMZTrVY6o9kZK8",
  "key13": "2Q5GnhSK71ezipBfYuBag6kXXDgxrL19P8YE2WbHNBZWzQAM9oGFxbo69FiJkiKAHpNRECZVv2bCZdmXYbyhb2Us",
  "key14": "5B7NDG12XdX1aP7KdntgtNA1QLLhrXxjhaXbTh5S2FKzFn5BH2feKuyXhG8aZUme1sDMHCZYif2zCjiBmqtAcvPT",
  "key15": "2La3KKz4vQzvgzMkMFV2wKTaTHZtQJg3YEBQXV3HqkN4vGVJSKeYStAFgrinhZvnCrSRQkKeJ2aMTXyQWpEhKHj5",
  "key16": "4qNYfsuNKUQWzQ7QBpFuZm3KZk9tFAnCogYDCir7TjrSMBCRVikzfQzHN6VNEhUryTDydQuUHwPuuAuHqq9dwbso",
  "key17": "53i1Qe4jNjeMeVej8oDnx1nGditTBAbpSR5KoFKNsJJd4xuzuERibsmhH12CyjeRqQCLxynDMovAP65zjNrs27VD",
  "key18": "5Cv6Kv8pehQMXuckaDWU7vvzWSpEctDSzGfXv92KXY6oXoU5ciSvazvyBS8SYEHcN3Uyr85s6apyqBFgcC9AfHsH",
  "key19": "5bPZq4C2377XUmGsQCg6ZXAkZE9jRHN68b2UEB7Er5J77j8gGtKWYw46DM49ADwgaf3fLCddJ7eAe933F8myBJHp",
  "key20": "12g6eroPU3eSgvvS5aWReMyUWgkRRk4boBgfM3x4FemA7JqpEuGYn9jQkvhtULwVcgF7jqi2GccCKzKcoN5nyk2",
  "key21": "2fJyEEUsEdZWCqfeEh2fZMczdFr241N5m7Pp5Cy2HBzMdAmZ33JfUW5Uafgsb8Fj34NKUpU7qqk1Kgu3WjMr772h",
  "key22": "3VpsZaPJdDc7BDMKempUNKthngfDFphDW769hGE6x3M5edc9gBSYEaqkSwRg1vCE4arSZ1V8bgZPX4xUswGJ7fAt",
  "key23": "5bpJw3qG4fPzvoMyBn2zAPHyLazpkVnPm729UMn8Z3sTJgRjEnVuo6St1kyyytDGd7aC8QFkh8rT4qUYdcDZiGAA",
  "key24": "35hRMhKzxuxBn2qLjxSJqgAy5nnXMTPSVVBnZUsxfU5cFbzecbF6DyaWDQvYMasAbS1mqjmhu7NLwqaTn3H7ogin",
  "key25": "4VZDR86wC8M2nTxABEW8kJ5VpLgT7Vt5JhpfE62cf4Sv7Ap2S6xCRQmWULG6sWAw7fGb2cQXtLvxKS9EvgDRVvAj",
  "key26": "2zbX8q3P5PPepV1d39nwRdv2CCpmHeMsEegq6nb5uUQLX2npcs3zPqwsGR9pExVgx1jey4xLR8g2FqHhp8XG3bWT",
  "key27": "3zSusay66qGykAnuXog2yjz7rrh52y35bnYeB7kSxbg8US4T9YYvrxNtU8sGbwzFfYGga5GgVAPtSXFRwxG7XdTT",
  "key28": "4zoJ6egTzyAfsaJHETbmVbq3Hj8YZaHvDRNBEAxTMc3es658DxWCDsevGka9U894siXJeueR76ajFwUa8kRnDSWU",
  "key29": "PrFSnfRKvmyLXNosR7nPEJSfv5hjCWgsvEZLmvePd4qQF1tZ8xCkvRHM6mVjrFxTngmpywNrjFswd2sARMHXuX6",
  "key30": "4sMR8YkvS2iVape4Fc6t9HHC59vA6e1cQg14uSRBhMhmtLwVBnnzgSxMWSFpME5WAtmBh83pwmU9TETyjp4MX8bn",
  "key31": "2ZW44XBwb8XkD8Hwt7BQCYErPj8fnBZkdESti2CBSTYtuwCfF3xuZoDj9GoB5Gv68nXmYcb3GsTutocSdKYPK9jM",
  "key32": "4Ug1Vu8HVej2pW2MRmQgxzscZwQkSRXknCsftFBdueMoqhdCicfUtEWLM3B5qfJ5yESG1NpYB9UZgG6hGAdUjNYv",
  "key33": "4qGjxVPXjkU1Suy8m3CzaEfXYepqHda4JZjWs8N1F6tJct2TkqR8qeb8G4sA17nyk2Si7zPcGPnaZqbTeabr3nW2",
  "key34": "393r6NhtebfDiKV9Q8vgAQpV6M7JDW99Xg1VfghVafXsPoCAt8NzW31YrbF8PkGL9ijb9F85rBHG1po4fX1Xp6KT",
  "key35": "4gvu7FGWmMCv5RcPSJtufZ83EYnYDKgtZCcgzhfDQTrqqqEccLjexL4yJYMqo2AaiGaaSZ7iiTvybgDpy9VLtPLd",
  "key36": "4Uxrouzrjftz9gMwZrPhSS6tvKLb6txyu7G3pvjvAM5NEeE7jcVGotKmjnkJ51PGHooMquXMinCFJT8ZhXFUZGMJ"
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
