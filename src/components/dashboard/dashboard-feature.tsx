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
    "4MWx4He8uHx73gfd3ixKCFr1ohcmf6mcF7QPE1Hejx8QJxqgj6EsPGzw8QKmWMtxQdH3EyU5sFjTsKYGxNcoaE1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEaVYr2prAEVFjr6h97RpebpFmWoEDuK6UPSYkg4nZGKMo7aZctAAXKdQRAdhVBW6qkWYjNneRVZvkVWeTTezcS",
  "key1": "56PZjQk8wvK3F5iKQim2dJ2ZCFyVf52NeMT6uXA3edKF5j33SiBQGVQsY9oWrPGk28dNfqhMMXRKdMFcQxneGjXe",
  "key2": "2pFNDbCewU4YPZvDeKUrVYx24kcuxYnvFskYXnn8vGzpDewEfRvYicrNs1T2xUNPz3DExtrZ1qJi4hrWCu2p4h9p",
  "key3": "3DKxiRqX4jAMNhbZyCHH5Lv4JSmBD926JKC3g3XoW9sCuGJcPaXUCS5MSsdLuukFXWZM6yYFjs5Aq75k4CPX1xn8",
  "key4": "4Y1oA4SxLiBGFyjHRNcaAi6RU1y1zZxSa8rDbaGBiZhrajTbBEbohU9jkkRjq3zbK4zLsBUNjLEZbzD7FgpMDzsV",
  "key5": "DPcjqz2RuCmgwB4GdMHbPhTZFX8cGeG9iKap2zX6bQgZrPcPUZgqoGNrFoMUtoAqcqedQA4CyTm3645UYCbAiA4",
  "key6": "2nYYdWD56rQihHZaVnnqnCaAYK6uaqNzbqLTPSEdqosZDQBN7ygWJWdwCNQ2qFfA4uswdFiqNB1yR95EUnj5Hrrh",
  "key7": "5gkgSJjZd3TEiaNBs3XnsP7s5SnjcyxCZfr5H4iYbHWScLa6GiN2LjiJGv3yWhnUn1aVrksEmTcZZW14B5WX4NuM",
  "key8": "3e9EtGgQhha3BoCaz6iVBK7bUWnoPJD2K2nYFC5rGXcVEaW35FVk3zUqhMwH8F3wTAjjFpMxoYEXHqtNMMcc4K8",
  "key9": "54HC7NSCx48JQ5vRd5peqBDeCzJku8o52d6Ki5JZWyUdj9u9LZsp9EGNKU9YQhZEGUaAEu9wUpgDJXCStm8Pam1J",
  "key10": "2Z7EoZ4sauuGdrMEXcpq7tZ9mbwEqdm5HuBg3D8ZLNsBXeWqMLU2E6F8VZunwKYP33bH6AUAXvC4iJXwkeF38MdH",
  "key11": "aDS3UrqAGMSgfJEfhzQtS1vvSNUe9ZaEyBzrBm93ZnCYozamzHrF6U4W3QUbR2CaMxxEFyTJJspRBcDiUZqNpTd",
  "key12": "4oksYJrsKx8HD7jG66pRfWLyXSAJDTu9v8Vfb8bi3UaM4jVWXD1BQTr5fGjpa5H165Hbhoyu8dSRnmiNPYfdLuee",
  "key13": "ci1xMmoguymWJ9GxKfcF9x23xJBJjTx8FChwQVJRVX1TBt6TmzQ5xA1VSwnLnuDRKknhPSiwQ2nL7wqYiQrSfps",
  "key14": "4siZ3dqybBG1mhAWTxit4mSLLhTpaadwbjLU8NB8z7xcMKBqBYcjRN6GTRpRo34ZdrJZ42ABQkUsE2kt6F8jdpeG",
  "key15": "5eqSNkcWTySDuNFoCTKWcm4DsL9bbNFUi1Yd487ARUyp7vRHswky2e62GWN5eABA6y5U8jgvaPLr59Z8Qhbh2b5S",
  "key16": "4kTW2fergTWkpzc3MDzpmdHw4fQBeKCAazsSpTBhamdXLaYp1stp3cyt7Tt14Bd2m6pUSB6HWuASyqeTPaCaZP3Q",
  "key17": "2jopfMbqc4gTPQ9yym1jB7VHhuzvvrTmtekBgmcX3ZzBVNw6pPK98WYCUZ8QnAkbpypecb9hrfCTT3WpESJJLN7o",
  "key18": "3vWPM5ShU3XhX4ekdAeNGpmrqGpmAHGBU73KgajGR2NwcgbXAzJHgXKFV7o2YDhyCGTC7CbaK6gmFaqLDm5PL2V7",
  "key19": "2jFEJrB8on3vP2ueDTtJkzoZT1HW5Y1VL2Z5Fqvsv69FcVaGyzdTF7NvTTyZVw467KmK2YwP5mCQDeVJGd5s7b4M",
  "key20": "3XVEEmYi2WgmRvKubM9qYkUCdNBrM84GPxZEcPpE1R2puZByjNiog1vhWKh5yXenCsuAX1MX2VsXD4tfZ5j5GJe9",
  "key21": "4whmZhrGfVnrJynrrYLwhZnvypPkM8zsbD38N7rCEJaDwzaczg1dtn29A9foaHzidjDw7JSkWH5x7VQRjYkZKL5m",
  "key22": "5pejZqVZHWconiukf3ShyU8YSaj4SgsDz9nzfXgWizcKNNANTQGr7XQ8Vm2vDvBkuffdNRKfbEzRes4CCdoWFdpu",
  "key23": "2K7KYQcZwvcpRyK7KciHS9CNwtXqidYqd1BUGUJ1maAKgW3fG4J1PwNPu68JmJLBUsmtxe2nHgPUfi332Tagkmk4",
  "key24": "5Dvx7oskBj2ig8KPD9ct5j2a6jbaeVqcTR4iGF2aBo5ZpJvP8SvQks6NQg5c8ZGHk7s6b3VpPziUfH1qmecDd3kC",
  "key25": "4ME6eP7sB7YE3im9RJBHYsSE3mg3Q32HMUYibgm7yea2m6QnjED4eaqtSJ4n5noHLMNYaN7QZpUugEcK7EJqBL3k",
  "key26": "3QEGVcxFgcf7dppVZDGavw64PZswrRsb6revjbkonrYRWwqN1aRsTkpRUpV5DtcYmBqgb19h89N1eXJfTGw2Qph1",
  "key27": "2VBSkfqBD54WdDuTvACNkZmLJma15beMKAoye18uyn2uaD48N199aRR5ZgfB8vyuMyTdwCDFQCoad4THRZeuB1at",
  "key28": "3y62AixAaYC3DkZpAXogp1tL4fc2vXfREsRchNyNMhRhcc6RTowkeqayAj8sTFrVrdKuRmiNqTtWstrd9HNsGtaF",
  "key29": "5sYzquMpsge2R9gDsdSGmKd4vtPgtmHmqNmadUN2tNJFjWkBjGGVqutcyomZRCcHYXkdGyrip16jRTztNu6YkyUk",
  "key30": "ecWCvKsuynD3ipaSXPkR4ntxLMF6LasGkDzi3MQ14FbktvcjzFUCPLBzmDKHm9tTysRMpH3uc8anFig4m7PFvwW",
  "key31": "J7jEfwPjnNeCgDoCTUehNn9y9PmtmF2gVHz4GUWJ5bHAt5s4zhtvBzHhqXiNASoiFRvZPKp8HzPDSxLdvLYRKrr",
  "key32": "5P5EryyBVDCgwyvE6NAz7fYLHoRZ5EzaTKC7XobPbPENu83rn8H7iX5t9JjAhWzdNJExnWicWVWvgpV6mbLvVJVE",
  "key33": "3NCqsABViqW4ZoTrbH76NauzA9hfSFtWAGcDmTHy2e6qRECEK8mDeHULqSM43VpZ1tPcrSr4tp8n9SeJ235YUc4a",
  "key34": "3YpxgoBYF1KC7KHVs73np4QUAWPQ8og7QeYAUmqtoQqwxcSqeeWiK3PaFd46xU49GgFiNMqzx9ho4DuBg3zFix4u",
  "key35": "5jn2YE2c1DtrW542B4iMX2aUUnnUKfJ5Uioj5FYbfxMLYjBiXTUBmmngBdsGKMTmnmXKfKyyQ5t3gShJzMoZQgg9",
  "key36": "pbj8b6Ju2AkpCdzWU2CS9JwzK3QYE1aGLChzdRMhF5sfEVZT6KwQjmBif1dDNrWTinrjtwQM9AMmosxe45kqdrc"
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
