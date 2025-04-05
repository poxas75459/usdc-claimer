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
    "mXCu6vU2b2sYqqURECaGRkHkRYfjMpm4aAXaZYvPHecBg3Mm4zfoDdFA5qwepM7PaNWxhf6KZBUp8TKLnBjrYbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbG2Mywh1Fv3oKXjo4BRAtMKaxspq4ev2vWDbPsQLnhP5yTYxKe1dpyATqLSgbYrBmvq2cehnc2irEztTyQao7M",
  "key1": "2qXX9vw39GD2MsBgu2PZLJuCidnSnNzVLtFgxjGvrG3MSon3eFycJ9HMTRnmzcdxyHRVFedyJhfsiR8Ac8XnqWFK",
  "key2": "NcA5svFWpVZasngn7cLGEFXtCJgzXp1Tjorz1aZVrZmT9NBELV8Xwno8rZntpP6gHrMqasN6rxK8UtgB6sTvRjY",
  "key3": "2GNtaJp34ZcPKrQ4SojoEyNgn5Cp5R7j6aYkvwY7UHSLavU4V9BjmRvtqZ9i4RJvGbjHRw9aJuqZM7yicHouhQLX",
  "key4": "48VKHJwewWAf6pF5mhPT7pkugLgJ1VbPVgCsrWCBgVFyrpKg2yWeaZDY1kTwGhhcijZfFpRPpnBKNakPGJsnsLBn",
  "key5": "46RVnQ8CMsiGrmchWTin9QVyDVVhJgxnem9K2wUm8VnaTsYX9YRBhWky8j5n6zwM4T1USnJVQxy5Jthzfzrmthjf",
  "key6": "2t2pBjzefjc7TAQsRcoT8dVZ2XTfWTH8wE7yMtmCCb6UbebtEL2SgLmDiiWoP3PFELHo6B4XkDZTwAbPXuaPkBwP",
  "key7": "5GwswhW2fh3YayGnQ9PBKzCgiKXYbbecWAoDeAvndMYRuXGtBDX44vqqXAZLbMPjnx5snNUjpW5tWR2vMD9hXRaQ",
  "key8": "48nWHsVqqXRGjuMhLKpV8xe4vHyea3PdrsxU5maDvYeS4h5KEHsKqGt7rJqmHEMWENBXeUTy5wPatbAUQ33K4Tjd",
  "key9": "4aF6nn9VYxxEQgemTz5thoomzrircheqErmCr9nf9NtQ7tvorNE7qZSkRKHgHwktFm87Am6B5fDYtdm4cbv4J5Me",
  "key10": "4e6293qsBFgzVYAFzQt8N97oLn65F1YYwrdbyEFpEVoupXgRZnwqXgpFQqYS2KLHgvte2tCW5QpkQTTQRT8NsXyU",
  "key11": "5Djkjh9mZyhA9k5q9umDw8ZNBAcQ799kNoGdmSrf1pTVZhm2uRGQJiyNieUPZJd5sSCex1NKjiKf55LGu4pua6yF",
  "key12": "4yougvSKJ2qSfp2RDh3F2dUXacNhKsBe6teRZxPvUpN4Z8Y9M21x2d9J4Mz8Es78uQ9njy5nBrFWhrxW4DthcbvG",
  "key13": "4xmUPF1GioYGz63UsJ469bUR6Jgcm5RKiwMe5E3q389y7gvpTGE1kGJdDjW4JoerhmfaMVGDBsszTZSdmtsC8rru",
  "key14": "29kfMo17Zgx191sCDgSH2WWSTuwr1jViC1anwArepvGoZXvmJYHmBDYSHQuaUtkkJCPfbkEadpmnmsQ4e74DEeWd",
  "key15": "65CEPUGediLstvT3A1cMFjAaArRtKesvQeURre8e9ZaUSXTXuTPQpRwbXx1TDBaBLumWzN6K7gUTYuxST6oNsGvK",
  "key16": "3fsZCdLNxjihKxKHUC4srnUAzr9Axe3uSuaUaQ96JQQsVqLmNWnJXEZmU4h78qZ3i146iZMj7wQtt8ZSqJPm14Gd",
  "key17": "kK7kv5TaxVPPJ4paNnunE1wJH1SD2SfSJPFgzCGTVoym77kJi1C4pdRgQ7Fv5Zhw2r5gjb4pL8dDu6a37pe8Bpg",
  "key18": "2e8xzPCiNzFZVCHPe6rT5LeLVe6VzxHJVpqmcpabupU5cCDLNH351YMtthvsGijiFcpXHuPigmJY7f3gjMcL4exC",
  "key19": "5Vb9FotWKaZBQkFL1bDF2idbSXREcZByGwPrqjEGfxk8jdu3Hw1veCp6gz2RnBJprNiqYwosMM7vL4AHYqaawExk",
  "key20": "24i2cJjo7pvA3YTpJTimjxhiRFANUCtK7u2uRhggCn7LiEDSnonwTmpQMBYMwZGc6jiE9dG7gb18XNPmK5A2nwFY",
  "key21": "3ezFqUaqtCLybsmRGDPMWQP5hWvngDyY3H2C4hgQQMNYU6t5dHeFa35HjDXof6GzpQ9YmuFSp2Vin6ksTsUTdSD1",
  "key22": "5Vi6buTqnbsXmdAjJMT59X5i59W8Bd6n1MPp8q7WkrmaZNg6Wd6EnA3fKtQHBS3kAc9jaFFYeaa9ziTWfrz6EiKk",
  "key23": "3JCiwSjT596d427h7g7V2rsTq1wVvYt2CdY2aGcZxFYXJ9qLgruiBtZE6KSKkcNauJh9PmjKA2ffGE9Vygkb5hnE",
  "key24": "2LDhHQ6dqQUm2jiZCHpTS2fA3dWbpEePDWDqAZ6dWwLHCsEkeCrqGb5yGGkKboKBMKHhKVk3ZypD1zxasWUxCHjX",
  "key25": "ZVs7jHiZmwezfAX9EcVwVz5NNjPdZZzfqPmwhwb7w1jNkffNxw8wwWpH4n4rYzTP7SYYBQR36bag7FtPT39VEK2",
  "key26": "5z2b3eP4k9vrPPvEKwNqvzkPixNa67sMvjDuuvuBZHzZiYrvf8BpmqynHrkyz9VVuwXA3iaU44Hh88NKhnCSyYaB",
  "key27": "51VCovzwwygnKbcqa1LP2mQLUCJCoLBW1eAmVuqmKxjX1NPdZmRZ9sM4fWHzL3mGyCWxgVe3FiSV3X2kK7FfF4cn",
  "key28": "4THRz1zZFrmzQApBdgXriEDWMHNWN3QScxNm1chuRPtWWYpYfUj6F8sgtpzS5AcJPwnCV6D3eb3PzD1msziscT6D",
  "key29": "2kG1HBNJvtZDapYcuJxv3V72Mvsk2jJzhSeZCW7jiyZgGiHeGYeaPwvCRHGajVKQ1L6ASXRFSDnxNHYBaM7e9ije",
  "key30": "2HHqr1cUVytYZQyJ9PmoaTZKvt99jpDqqpr7YcYGhhmnJLuAUY831TFEspVUkYqcyTZnTcpFHDJT7AWN5wqbQWEP",
  "key31": "4nTS73ZrnXvWJPmRdT54kg3P5bL5fa9sDwqMZdGkgkZTkcQuUeVnxyUK9nGMDgtiEQw14X1XWHdQ5zYzbMytubGj",
  "key32": "2Jbj1WP2y64cg7dtuiM1aPKyHXDT7J98R6CVDi5iwnkQhxwmvuqRqw8GPNHkMwZEzruekfbjMTsWVzEhFrPk1ejS",
  "key33": "5pqFkmTvzLHKMmyAgN9LQSKCqAixkT7HM3UGqjQGZ57Ych6NUCVccYhBrY2xSMZfZYpdoUw426pDEqJCb9gPNeDp",
  "key34": "2MsY9RN9P8KU5Nr1XDHhBQmnk3wbS11rV1hSg48fyNb9NKJc19ha8Lx7KhBXmcecATPxpQm4K7tfHSfgAtNU2pnM",
  "key35": "5o83n7ZY4PV1GJGj2zNwrU87sevYwFSojapKUj2DUT62x1VeiDgH58C7MVw4nhkfE5PUs2pLU9CxN3mUeQ8R2wN1",
  "key36": "EN9bYXUyZRN4vAqwbjcV36SB28evGoUsrthX4qRNUAkPNX28n41bZYUic6B48HKr6zkxVKbZywcjCRkfXFBhExp",
  "key37": "3Ziqm2fj36CDbCio3YPYsX65jCXhPhX1D4PrW7X1MTvTJpN4yFNejtvqM6jYRZdETJqVFRzGxxW2BwtaR6y7V47G",
  "key38": "2UcEgXgBqqDkmJfNRxwC2ohPT62Xg1s56PhmW39Vq8ZW6GPLxBhDBScRVV9pG7N2zpkXnYSMFQ5bUQYwDeU27SMv",
  "key39": "42T4osBoKHrA3utUDKNqebCCKt3rDcgw1XNWiNDszuEpfhZWX4LhMaoPfPaHYbNFsk7pHTUbSbXKXPBBGwuaq14X",
  "key40": "5WtmcCAM99jbTsg6bYVgLRtNab97jGUgqcAzTSiiMUVKpstvhPeHgw6wCraoqPBG9m6dCJnkvB94CEFNkdfYaigV",
  "key41": "5cv1Mfx5czJWXy8w6ZT1VU3rZBi5FVdwHkN6dwwDCSP4Nds4toqiYxjZvtErf6EwFm2RL64mZgMVpyunChEvqbwz"
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
