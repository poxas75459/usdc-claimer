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
    "Wiwdg3rDjYoFnS59HPor4ZQAmgasAAaBBJwYhu8zUxJyjr9MysawPxCPqLmWeVVNbgjwsasG6TyhoGc1BrfsHBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nUwXBtayjKBGUACizQb5SGqWy4BYaPwbvun7aMbSEps5PMLNoXhpe7DRXgu2agbKQWE9a7MNqrijLjw95WyNaVJ",
  "key1": "5Z3TkWgt9snJnTT8VNZboggTr2XEuAqcdYKbSAAiajSoYFboyELvAx6QFTg1LjgXtHea9PKqAzKbo4tcwD1f9BzW",
  "key2": "3aYSHdqaVbSNGppFLxAb8sZauEtBen3tocdCPsd6VY7rHs5ZSxqYUGBiEbMsSWFBEvbaRcvH3vREPFHV1duRZRgi",
  "key3": "4BmnMkkQ4a7BBQvtfLeFgsHBfyVHFfGTDqegsR83uz9uF2h28L3qT7Me3vrV5daB8Y5HsgZeKzCKK1jKGAE3rJBm",
  "key4": "3MJVPQerSeJirG3cX6X8WExdbdcyeeLKzvZAF4PK7Ax4TQ7oTs8tdc6ZBqVjxkthX9RzRxffx8b7LS6g3jPZRHx3",
  "key5": "3vx8TwSU7ArMpX1MY2dnk82i3Mz6pmcxaP49AG82eu7YA1hWFbuK6UP7LK7SNeryc3E6d5QVsncQSbRJ7ncymLob",
  "key6": "4gi7nXDzqDPSi6ic5Hd9YcyDKaR9joZVSo4dDDGdQu8kLSTAvZPvLk4w2NWDAtbZGCKrNh4Kh34ZKRt84DUTwPNB",
  "key7": "581Ps1x9qTVpfh8NEdSRHB9aCmCe6sySEC5M975rU9MR3hFrGWyRHD9i6TDqeShHt9GNb7DP17Lm7CHbdh2MWtHg",
  "key8": "2Se1Y4Nned9uJHb2pXGpQVWrJzqEesFxV1ZHHLwhbdsNSUEhUhVmGhv48wuDhcAJrKUJWBquM18EWgS8hNRDunmU",
  "key9": "2EgEoYqphqfJUZcPRFb2Jio3hsL8v5UThtoPrV9Tt37UR1RSkHpeUxb467gRqMaebXTs3YqyaM4dQEDp4QDZ2tfR",
  "key10": "pP37mxVDC6Wa62FF2EwhsfJuGDgXG5iqpJzL6iRnUTwHPMNpPGgKsA8MD8j8LqjkASRWLUF9Cmg5m12HS1bomx4",
  "key11": "595bFA8RQfaP5oEFkWGXUmgDPNKoWWkUN8wgub35kzaD5dSmggPwfNXDHddXq562QhSqwZyrJV7tpgLUxLBQUS5n",
  "key12": "jaCfpAZZPzVSqNnf3GWMQ9jCC4pUQvtfhw1d7vBLTc4CrFaTgQVqq61VkjsqhDhzvDyvKeBf6naTwtzmJdKDAHR",
  "key13": "4YZ1HbyT66YtnG3Xc6RJapWNDNLg3rrQzZMSPrKRM2A8LJ7LBhF8V3YEZz1ubJLjtbTCbhBEbeaghwoyA89Vw1JX",
  "key14": "2yYfxodBKKYGhxucFRHmBZzc6EUwYxYvSnTbMez2ZF4LnSVxLWXFTjBLKEHrTsQFwgUhq52FpRTNEKZK4XryVCW5",
  "key15": "4znhUBCBCfdXxZXUN6jLRx6QbcEwByBFyPXFzGdQ1rocGbTDbhYeDm4XTaGgQQZjxHwAzQeySA8efkGPzJ48kqT1",
  "key16": "2RQcUoVghbbLogB2Ei84YMKS9GmP8PXX68tqYdJRLZjZh9WtHukLPCx6gKfhkSJ3DmVNFD9TAwqSkmPYZjkpQ8mG",
  "key17": "3Dyd6H486aV4gWZoDTTaJjD7WLcZKdSVdvUfGc6w8am9Sm5ste32p8oURFfjnajMGKCddkooQvk5ETiqqAtxfPMb",
  "key18": "2ACEe1XpCUjg1N4GQhgaFqbnXdXBRUhng8jKQgmt5tJ8zse2DW69X5oo1jpxypvcaxpKRc4ffmBNgGWG6KhtPXRE",
  "key19": "5Xp5u55qGJeV825xHeSLT6ytEdUuxsmed1rAh2WEkfFm4fuZzaKZ9HHG8iBGHuLWoU668ZdCTWuavw58E1TyeSKq",
  "key20": "3RJnMHaGSMQ4V2BpZiGA2AwkLHt2BddMKcD1RL1RZuTEoxuhXmnKE5aDchtu7Y2h4KEhS8PzdYgcovgQgeYA6dLq",
  "key21": "4y2XSQkcNKj4Q6eHoDXExsMxM1jgE8sbHe915pFet59XdscQcF5xrbcxhkBrduHVDMoGL7rMj1EdDyJhyJExTvfV",
  "key22": "3HBHhpq18wikKXzWhDdSE3FkBLwDxkaP1V14bjqyUXubkZX4ATA7TQYVKudHwDDi5JXj5n2CyVjtTmrU2B41BRgW",
  "key23": "5nGQrjZ2A2JWxQD4xPoEmKLF5tLNrfhLVBQz3LkWNG1D9RrzW6x3CYcbUnSFbKy4fD6dLRAfxqRvTv3FoVN1BTTF",
  "key24": "61sCtdbyMnBxvngyn8BwmyfMWEve8oftvLL9dF84HMQgNuyy6T7mPU9GLYuE9LdZAUd8TECaNWsPcv9mgNSKXLRz",
  "key25": "kyZA5qfPfEeqhWfx2xUKdtoE89iJbL2rhx8xm7SmDGisSHgkaCfM35j2zWYn9ghoz6bHr27aQgzt9p19T9Z9d2U",
  "key26": "3MtjbG4ZuBK7opkUKEHHzKo3ym8grF6y2MibhvQakiNg43TMsq9fTF4VdMtJGArnP6r9jUMX55xR23jX35hUqedf",
  "key27": "26Rv3RH3gEMgUdGvAke8ZaUYSuVFSoqT8vEEy4bRC8iMfpcXkqqh1J1doJqitYKc56nAM42A4e2ao5SX6Qdz6kAd",
  "key28": "4RknfW1choXZBzuoYn2Mo9NYxnmWgAqfd7LaNdbg1w36frzdKTr4H1s7XEuixshhbeAq3SACX7eVb771tcN71RKJ",
  "key29": "5nLqvdxwdXnL6kXsv86GHGeCBxNTZ4J2FiFZkgZmz7FzYd3HHCeuomKn6QUkhh1WgwRbe1DQeD2pTdSGtwpeLKUs",
  "key30": "2Q82zUDdsS1mKK2iA9C5y1oj9iTTau2Dmd5EW27ToTA1QfuATQETRU6gmSdF8dsBZMdvrJzGkh4cM1muWCh9e88h",
  "key31": "3eRrQYE3vWnHW169bAHXqHB24LFLueDHKDu6CwrjvaXRuPqW8eGkBuLCBe5BvHpTxPuuDMZ2SUWEBiHu3xm7G7KZ",
  "key32": "5twXNHcrSn4DPMkKRq5pLXWnTXWLLQRYpz72SBNdHUuAHcUcmqmJzefnBsrVxjv8F2QKwFUa5joEq7wxogfte94g",
  "key33": "3yMUxJUUbBrujWaJagN9pjJgeTQDe6Jji253AaSEWtFwpRgaRkAAeGTkxiENuC1PWCW2eKuF987TqFcYsMbKX9QA",
  "key34": "4rAT5cY2bu1A9VWgyymeYX7TVMxYX1t7tN14FA9Z2fDRgngU9TCn95i18LPcPs2rjz7NXMbyUP9qvSd7TUUWXNTp",
  "key35": "iUWmQgzN6UBSFZu1LjiaiJgTewXWdeXGPVJRkLQryiHqn5zzqjn6RQdb9VkJECfbcaQSr3fAAMc4ogVxcKwrKCq",
  "key36": "1dzYA2PQiragyj3ZgWdnBqv765DN79PdAmyhZGnoydj22gbFAMecFDw47pfSsqm9tmAezafgzC8Hyee8Y8Qe5Nu",
  "key37": "4cG9voBUqgdxU9CjBhbkicFttHy5Y8CgzCuqhC12REadgxLH5y9x988s1QefSb9nY5wqCTsDaZxWxPULdbjQWZLt",
  "key38": "XxGRKAB3t22EZLCPw1UWPxMPK5ieRGxrusSZTXL7zdZ9hBdMBQh5aSwNpXMTv9WSxEJFrrkTHqZsRpECiFGGc5N",
  "key39": "4E3Gmp4BkQR6mWL1WQuCo3nhC3aygup1DLHVooLBvTozxFnvjYX1Rc1ztmdrfQk8athiZ7UHW5TSCDJ4fVNQpT2T",
  "key40": "Dyb1ubgaAw1v7gJNHN75Qte7jzukBACwid4B7AehiTZmk7tNMmgSqE7Nrs44YiY7ANikvKc73yGrx1Hju4bAo9Q",
  "key41": "39Z6wgaDtXLZ8URbDMicWENBbcJMsYikLPuhewnPfvDBMcopSdRo7nZw1nRK3SpMEkABJw6sP6jsLM47q126CL7K",
  "key42": "4x3k61B4xYL3kWQmZHjELBtt6P7Y4dzJxdzmzyEFcAVsdHZq4M3QvDY53mYhyNkcpK778widcC1WvyXYQD1jRg1p",
  "key43": "4CNN1wGCXadaRXqDkmX6NmuCte3mfHTyprW9j3FMNR9zjAU34bYoPxeX43WmsYDBiWhRtzpLumcWWsn9gyg9EUgN",
  "key44": "4u9Wg6vVS2LyFVh49AVZyH855Hj7xPscnxMetikTmGEfL5q4KtTZf6gQ85LUHGC5QjF8331urRp4q4vnkDCTfz5z",
  "key45": "yew2gxyKXbdPTwrsA8PZqNy6rzRGNcHfKAN5yvwZpWWdQ6Y1PBHezw7Ya6moiu9myXjaFtbuQMbQzccDeo7JCH2"
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
