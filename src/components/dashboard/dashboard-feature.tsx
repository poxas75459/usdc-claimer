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
    "2YFyYSe2qdsYkkCJc5GeeJA7UQ7AipQFDfk3CZav8Feiti723YhpusKv5DjuWYrZQTPZ2XvhuEgZ7jboht5dtbdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dqno5Pw3jZx9eTtFrskP1Ykp7TGd4csZVWPdF3nHDAAZXZqEqPMnWmftTsx61Dtv8xXGTndNnS2q7jNMfMrDcJa",
  "key1": "DQs6u2nejDfRCrxm8bXoLGFd28gp76W7vJDt8fRrpKRnxvWBbdAEiBZFEiQkixUPoSdp4eQFd1NuUaE7domnYdk",
  "key2": "5GRGSEJ8Kgpqh68LaR1KCz8oM8MApL4NTtKCeFSgLHUmSF3HAS5s2DzgKoH2dJwdrYsZE5kR5VW46PJhK9K856Ej",
  "key3": "3H923Ks1cZVxSZXqMrLR68krXux2EBpqXqY6xvVsWyjqRZFUxCfLPU3BtBTwAcuyfhf2EZDc7kWwzkN5Esw96nEb",
  "key4": "4SvS1hFwqSuB2DuvGBEa6prGJ6MBDxjjaeEfmEYginXZzZ1uWMn3zR2zoYfQV5scaqsFtauBYAtjFihEEx6y3Nm2",
  "key5": "5v3dv8xG7ds8cG382HqbVMjRAEy8MjyLwLzcp49kN4pmbb6FzWXU4itfemsKTzpA3txtW74hVkp3dDSzXKs6CNg4",
  "key6": "4EhLJNdApbdu1k8TGf34ZSUNVMmMFt9ceS4FRMY4r83gSA4ifnCPmET8LsVRPQjjvZjYSbKYYcxjz5qw7JAFpkrH",
  "key7": "5whnpdUR43qXqBdGoiAYnCmKXcpwArU3ravvYNKExQBhrRoe3AsBPSCxydg8dQzVjJSU9nxjK4hRnPZHfL6Pct1f",
  "key8": "2tcA45XNxyPqa8uMpcQQWRYypPkdT2GTnkwKHuyWcapFVrNABz1eVxNuLEjgFYJf7a8aDyTSNXc3g52ZrM5bQsPG",
  "key9": "5p1j7CHMf1wXCtFJ4a9NWd295p8jHdq8to5vLXFVjHUkCh23mdUgtbSxgA4mkmSvYyRs56dXRJYrh9fGvTiKxtMx",
  "key10": "roA6wXrq5ULxfprtjAi3vGeki97H1KdXYn2L4bvmKqhmodq4AKqCL3gUoJA37GD7ceAYZ9T7wUfFS3aBMzBiKXQ",
  "key11": "U1HJioDMpuu6R3rb2PSrfVQTog5dXAyMrixCftc431qDE38eB24F6jQikdi9x2GQg3fez1caMxjnHWeaYBtpcri",
  "key12": "3mg3vzryWbQ95hHaUyKjpxxY5yfXmU29DLqRNWq2wXmhPyjgF11tSVLXeZK3tUk658uwFS79mQNuFXGoASvCKo8F",
  "key13": "2xcaHCn5hNb3pSf3uoN8EsxFRYPRRKFxabXAqc2YUGAWonZcPdYiXWWGcd9AE9wLftVJNeAXNs4BBpr1Hbpuq7xb",
  "key14": "XT4B6MxWtHZbS8FKKGPKNHPvY9TEJ7bDeJFcLGGkPFSmndfQZdhMtExwQ2oZDC8dQmAKPQi9qiC4qwVL7hzUFox",
  "key15": "2eM1mjsNkS5JYKCqyJ6wwYxwYP1xsreoBP7psW9dnLmoJq2YWm7AJzUeBJcbkU6t5Aw7n6NrkgG7TGoEa3BTh9DJ",
  "key16": "41YrG9ZptUQRivBQEpH3hdBscTtT31FfXSPKQ5k37Tm7W9rdUkSqj3avS48G7y7wKn3ZtALJieTgic4TMXSj1ZYW",
  "key17": "26QcdxXREhK43et5SSbAodtWeqKfpRSVV31jkPvdvbFfPMxVw1QDuGyKzhFWHUVtoT96YhL9BevR9Ki53k4PeRpo",
  "key18": "xgLsUJypQLmDv7cfrMYt6jm5CAwmEpLNZsR9S83mVHwi894qJeAiXTVSzePgdPjAFMtWum3vaHUbmkjng7nLzib",
  "key19": "2nYF2DKeaKLD4pPFvNru8jJRuZnSicg4Kew6ccmroes5k63tvQYxtvHFqPPWYU56SAGWeDyL15gT9tSL3UQ95ghn",
  "key20": "5GEk2f5jWsbsXbYapN3b99cDfrHu59ZA8ttA5iDM7ndBYa85UfvwakmobCGju8A1xmZCpVCHCMz8tTgRacXcvBUe",
  "key21": "2tMsAad8H7rYJ8xN5Emxc5zgGuwXvXsDApB2tBuedouqT3ibrLap9Y3aetemiPrYCFQ2kP1ijzwV8xFCm3S2oJ7h",
  "key22": "2JrYQD337ZuoWyAdSpPr5tGcinvAxjUMMwZ7gzZGWA6AUCYtgqjfyp5nNHC5gVnwvdGBiJxswyvaDUrRQxwV2Vzp",
  "key23": "2D7Ry1LEe5fefYS8q1pHNNbS3eHbrq5PN463L91cPUiwcYHa7QKtqN6veKp2Avjpxy6EKZtEErJxtsuwm9iLeBbE",
  "key24": "RjxiB1kEJW8Uc3NKQNVRP5z2oD4dcbZdqYLuA9WEK2hD1SHVbu4Ek5my7kjWHWLeCugGkpZvwMsAvkNQD2vfZcT",
  "key25": "djHZA1Hf8zBMQbd6HKX52gAwr4LczKHQrwK1QYpk5Bm7KYRLfSeAEhozHoYNYt1PkKQEW4BmdM67inaa7Ck9YX2",
  "key26": "Qh1wpSoYNwHSy7tk5mxcQC8nuK95GoKBiu8eykijqrpEQ9KqFqXcDLQQ5eFkfgcd7K55ekgs7vy5bcuXVAN6in6",
  "key27": "AEHc4x2djanXerQj4zaZpFPBvkCRkCC2gHDANE9JuRUVKG2EAqVdn1yyPCGA3CNZnSFrsGVNczeGoos49AT1SJf",
  "key28": "4xpNmccXXW9G8RxWyYcrpYM1SW2uY7woy9jDF8PANN1u1A1pFJFnu1yvqN99uJwMX5XSAVYtHCVtvVJuRAUSux9F",
  "key29": "5C3omVQC7GdBtZNwD8FwBS6BSJ16H4S5CDM3RUjymvs3bPvNSVBMb5XgjF3q4FQojFJwEorDzGpdhiGk621YtMGQ",
  "key30": "4h2iCLfGgwGHcHSQTeK5U2BuAKLdiB4g5WXxCEYLsLsEf5F2PWUxzjLLRsedAzqCVF2Bi3hmDevwhyTa9ZT6kW5W",
  "key31": "2vVBKaYLERj7AZS1zhwnZwKoEaYEoP2Jw1SrZcTKbwLwkSTSxjcYUDM5hzqXZLiBj88phTrCoR1p6zMjH74ZHcRd",
  "key32": "5nTP3ukbJta2NDDVhcPQDNXngW4hYZjmpZyJRDMuCW6Y65dnrko44MWdu3pBNqv4VsHWJMT7gYUMboJFuYDWYLTn",
  "key33": "2z8c8srhveenJX4x9NRFTuzhxoN7ekBSsvs5UPEjjRpt4bssp42ZrGJVzA4nzUBuUAe7GvNZVotGz6HnEqdnCvbU",
  "key34": "QaQ2FEiS1BSA99TCrnUCKscKufTW5xJhHFFjnBZFJMS9FUFjgrMT3MatjQUcCGxCpsyQA9Rhh8kuBJqkNP2Fvzb",
  "key35": "2shndcdhf4whwHJz7FMg58VhQSu2qfQTkDjk3zqwM6c7QgoxV6XZYNjaamjK7q9niRUj2wirKA5xxw3DhLCUR7yN",
  "key36": "3ihW4k448skFjaNSeWBxZMzT92Gmemtfbgn2pMdCvs2iGBBwowoASK5LuTghYqeA8FKvPspzFkyAnn6PQ6QFGavB",
  "key37": "2wbfkikBTCY8Mbt5DCLkeqVhiCmUU3jQSupyh5KkxT8fgfsjA15t4LZcwst5tNtuY9WJoUhQonZdvqNZZDfoofSe",
  "key38": "5358xN7syQLxbFpSQJ7xrPTC9HZJyzCx3ykM2CjxGkxfA3ULXaZZicusqZe6CqkaAS2jtkoTofDyZhd4W79LXpmo",
  "key39": "62GVJwruJG4MGxnMZMiiKkxsGGc13Eaz5Wh68mBPHKm6koUwUrnC3zDiYJ3NRAC93k5bRuMPjW2CtWuzFYGhP4wn",
  "key40": "JpRn9Lm2XUT1VJyjK4JhW87H7C6UgKYGhwXbxXBXRQb2B34RYzKE6asUnqzm2maPo2JSPJ81quwkkTG1qdfgE1T",
  "key41": "4DZZEsfbGy3PqQnNcJ6mKeFLj29rPxt34AuJyhJXxSC9HkTpWAXSYu2vrLxe4yqAqaTjBKGY1BJAU2AbrYZsXE5C",
  "key42": "46Xfe9msos9exVcUuanYYxN9fY62YgG7mKzDqWC6r82zAxDDAevfupEj2n469vYjFH8d78siaEnLdN8mExwqY1nv",
  "key43": "3GVv3BZ6UtFEtr5bAFgi6HFvAg9xZVyTAssKTdwPoFZQ5Mr8g3JTQm1Jhe6d3oB6hKVgsuicoRcaQv7sWYoPfWmr",
  "key44": "4BXmWMo2heNxXcuNeUws5vedR9CMU4yadfMk46NcBPnzjCqdqycwC1AtqPhGiyDxAeQvvqtYFoj81XuXKE6jXd4C",
  "key45": "2zhpcy9t2bSySvhVCUcjMiniXyhbZn2fRZSzdkSBqkFx3Bcm39oyN2LLLMFKShA2ZrPwQwTkbJddjDyxGuBWVxSK",
  "key46": "5bHaJVi3TgdVxYbn9fxLBWiHg5qDyei1n9tCotEsAoVA9LjzxEGShPuwQa5953j6SJcY4qBc6BQ5EXwvp6syu4a1"
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
