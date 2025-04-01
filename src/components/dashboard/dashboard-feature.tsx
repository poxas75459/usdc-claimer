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
    "36QT73h3JTwKayM4sMDJ12ykNc54t5zgcNg5pR4LorhiSANLDBkVW9wEvna8NkDFKNVRyrJ161MWa8wrcTM9osW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gFs3uXUkvY9d2vu3kZKznPERgdtp3ERBQbuhUxvhfDvWPj2jMWhkLufLrEGjvoW44qEHUxC8XHpdw6618kx3cwd",
  "key1": "4e4JTAFuKkQk8Hdoneindayn6FPd5Z3y6WWcPzzHLvKRKy6jJtd7Nh1bfZRAbiWiFGzsApF3njjwWg7PTpcjCA7S",
  "key2": "3bhYpmD5KnF8HXU96jAPwuP13Tgm471NC4teTWok5SdACAtQ4Ud7nr56rfTYvYf7nuAmyQmPpYfUMnjbPvLBTZYC",
  "key3": "4cZxiwh7EQ2haNnzh8DQMrLRT3arPaEP7vo6Gw1f4pa74HR8mFeH6e82gnPnbCMDc4rgKmSoykcakbRsejFspp1",
  "key4": "qi1UCtoiRWTVXj5D6Zg9EWBXzuLCUJhyXMdTGABvkPWjF71bXWZDPJxCC6abGsdKnbVe3FK5NL6sE7AoWCKia4n",
  "key5": "ousaiYccbnPyPr7ebGoGPN5cTuntB3VaZkjX6o7w5Ewwht38V2SPwVuspQmtvkYpNvd2jLWPnU3r5wJuE9WGR35",
  "key6": "ypbbr94WdEv2NcakCAt1wrs3LrUmNASCARd5od6NnkvTboH8PhEujnwUKpVexyPmbAzxxqi8espUPwF8UEyounH",
  "key7": "5czccxTLMrbAwTc4qUrdQM4q2HjUkFZpDVeS9EMTYyDq1uHaAgx38NudsXxkxbZrwVaMiu2iEiqezeUjNfYUj7jk",
  "key8": "32af1TSaVri6azRo2wF2ppqLAGSfPf3pebKKgbKjXi8XSerZXcaavhGNJxdDipCK2zod1ce3PpnJ9mYQafbdH5HZ",
  "key9": "4HY3KEjbHC5GWNCw1DLATgEZEjykDeVQSs3aE3pRxRpbVUFy7sHNPMaQpDqzZEzMSkx29rpbJWK96JKYc9UTFpHm",
  "key10": "2X85AbKJ8oV8D82AwPo8vkrFhSF7wg65h5Au2t2m4UykKrwd4gqo9zf1ZHBF2zi47TjNromtUQdSgYcXyj3KiXkJ",
  "key11": "gGnYo4fas7u677pSstU3Z1ZnSnL9X6oDLdYdsYwa6gaMjfUhxJ1HaXJ13vKHm1v96CsmqLmFq8dLpisWCHCQrMz",
  "key12": "wocUGJDeJ1g311bkFiTNn9BeQ65Wn7iqVbctdu6RX5Mkahbiv9LkpMXnzhUMS1wFyRgUWUjNRVVW8MwNsDEQMXX",
  "key13": "3AZUJwLSU4kghJRfbacgUWrDtezchNEspqanuLEKYFR16AMPaoqQ8e8XxeZXHEzwZNKqFMY1oVo8Z8FEK2Pd81Lr",
  "key14": "66a76qZUFXNZiv5jYqq8dcDv1F87eksTi1p37d8WtGTKMJEkc9XFCkQ2H8ah8R5VqTCMU9YVeEfxQiCAugLmjJZD",
  "key15": "5YDvEgoQvnuDFcCF1vvw7tLcmAFBpN9jCgEJDsAGEY7zcNDYZY5hGaPsxW93i2xvCxTNpVxsY7eNRwrsuqwG8iHR",
  "key16": "5A38B4bXrqsAFKpPq5RYnUc766Jcwx4YkT4MJL79F5D21JZCCCeLtKMuTRzfqXhxP9sqoqTAaFsuUfKeD3W39D4p",
  "key17": "66r1MDGg6batqL8yE4Vyu3UKrkmgCbpfdofFUWfxUmCcUxHzW8bSDhRjCBRkuwEfVFcUJwaa9ZgNHXSNwRBivR3N",
  "key18": "xKZp5Wd2zzG9c8NFMTjbw5DMXxZ4pRUis6jWkEnHRdUbAWaTrdDvBv356U7YakkoLCVNxuRgm1nUYogxEprVUnP",
  "key19": "659aL3dcS9yA9mFRwqoxjq7MDynX9GQEt1zVFUKZUyH6Cr8j6v3cCSgbP13y9oJoWZiNEaSCK4wWteGmvEKkgCqe",
  "key20": "5YcZXN1LmJ2piQAtbvFsftMdbtDNazWu6RUVPviWEHBhJRiRYoJdQk1WbmnEwCNJ45dDgvEc6ZbxyZuUYXB4tz1r",
  "key21": "2kCvMYbHW2n1rMd5aUDehtKprhGrEpv11pCY5idQXWSMvHQMo7xMQ5FPjGuYbg6iEvLAxAMotjCp9TMkDrAPmrhA",
  "key22": "5NchfXfy2DDnpqjvCFQrM9vQg8BPaPzJMPa7T9HpqwLH5RzT8rs1KYfjvsAnh3izhLkLMeWzPzcfKxjACNTjh4WT",
  "key23": "eqRvgT37ZD9SWT5oiCUXeUJ7F2ftwMDGVQaDJHKGHoKtZ7y7HiJra97hSEbMEgwKZ48chaAFbuF8ngPdJEM5q3J",
  "key24": "34G4qZTo7MoSbmFi8riL2bDWx3GwduJ8ZygaE648t4dKRH2V7kq6duzCLMz2k3HyUb6aujvkxtCRMzmj4gc22nDb",
  "key25": "yajEBZeLDhgquFsuZ6ih54neAUMSS19b1AZX4qCLp1mZfQZWxGT6ZEj9BQhA9wu4iDm8U9QFeWRG9cHTKN3vY4y",
  "key26": "61mdoWx38Mze7GrQ4jy7D4CN1T9zmEgqGW9SP93NSNRRqiBvsC4UXKx58izGrXWSYqbGtVzNL1iZR9PsXDHPvva2",
  "key27": "5394VqfN2eSemvpoeDZWwoEa3YwbTjNMMWWdL5y9Wb1cJvbWKSkqHz2tpWaZLYpUuGpMtN6kw6h5jtnQRiVSG2me",
  "key28": "5NetC1vNACjnggL5pacpDR9fP3v3GKc9q69dyQWbjoBmtgTwQnh7ZD6tcKfmEomjDdhrfAwRdMS2kvCgN9ZwJUaY",
  "key29": "33ZoouUTVrSBHVFKVaNv9cd6MmRw4ic4oZ8YawQxoQDaT3rqjDjWoThXTxsmxcrZcxr5kUnbB16WTwSwUKc9zm7",
  "key30": "Jb9rmSKv3Ns9fdQajJntRRdCGpzT7B3CWpodjqHUTfaGt3TdxgxDJ9Zanntn4F1ZwcJER23amKa2rRsQDD9brw1",
  "key31": "3wsAnq68gc1tc9MMxH4FK9gEBjpByTrPBcbCoupA3Z3WKGfd4kNbfKtXrq4zXFsVWsZYeqjnnr9ry4AVKpWYrEAL",
  "key32": "fxp6Ei3W2Cq45g9s5ZYu1N8uyJoWevbH599E9JDBfdQok2brR49ZgkEyCZydFvqZUcgjC1M4TnkSnMxAdFaj6SB",
  "key33": "443QBuUvqYySiZpZfR7J63JA9Wnqugn3xBSL5CrfLYJMKN2wYpr1eAiXPZX3tQEzc16q6fVkwrEM8NAHKjvhWdFV",
  "key34": "3TdwdQ8D6i18rskdZzG4ZgCVGRLh659mCbqwJn9SZfShE35aASJNKAwYF6M8uaVk46T7bhidcArib7no52YGT2C2",
  "key35": "5PebGsQG1aJYnoyiRC54Tar5MPbzqi8DoPG9rKKJqs6A5nwcxTWqMCZCKoUsADmqEM3jSwmUFj3Hdc1D8UWTj9Re",
  "key36": "4SG4rH4PCCThkYDtVpvmN4w5PMK2SuqEBiV2ahm2MioqYR4AuWZNdSfJQQkxudwXeU2nBBJki4iwrXbm7Aj2yPMP"
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
