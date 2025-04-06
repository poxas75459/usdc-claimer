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
    "2um8SoWQZuodBvMg3tTKZC1Qf5xsVgPeJAgfVDBEdWFfoEQP6eMMu2fb6AoBSyEKxC5m58CVnWUE6PHXiMqwSHtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Dy24zRjx6ftSAGHLXYBzKu9x34xQAJzdWpp9znrtrfZhhzw8KBvBRUFZrdANMvsH7kfgAUQcoq7uNvBRiMHNkx",
  "key1": "5zrxqZoh2GmW212acbu5cSNWpmRmWnYwBNNv2qwjvb4yZSpV9pm7bPJHyxCkKd74AQFW2RuR8MzRTxGf5EbJDbUV",
  "key2": "4DzStxkZAeyuJ7MhFooG8wjR6Jz4Je7KstyFuZzA4X5aAiJhxgR3ufccmu5FjuM1CQGgcUqRStw66bgPSLtmx2vB",
  "key3": "2Wiaiqk1VRU3H3KSpMWeF3f4CweJmPQUu3btuTMomAtVhoo416ZCGvLSSxmKyAW5tMmQAAt6S2mFtAeVh4ixaKhA",
  "key4": "vtSJQoqXS22zabXn9kvxT4bTVqK5NyYmiYTgwAeSnt5xcN4Z75Sc9vrKTQaAv9KHZTDnnsEc4pe5xQg2cNnUbVF",
  "key5": "2YpqiFJrA8KzaNqYijELNAGRVVWP9EEkUsSyXRcdUFWZGgnwTXUSBkWbmUjf5k6fakieDAXbJ1TSZxf2exg8gEx",
  "key6": "3vQBjQkHPwjQQCxD65Ji24FRmRHcANTHdAZHwS5gGuC6q1igNfNEQQF2rqQfrsN2wqbJ2uDJNJZtvU59U4noby7f",
  "key7": "4Y66v1TiVcFF1K2tESLGV2DSU7PM4tuq9wxHeakpnmbPJ5t1TnrUomJJi5fos6T7uUYA3gJ8h84h9qA8ZEd9TUxw",
  "key8": "3dvoDdeFMx62vHT1R9PmW3bNaK5W2PA1AXEtGcEtkskF5KrYuezJPWoc7dRriJgk1K4eiFF4DM8Udzbq33ptWVsx",
  "key9": "1HjSoJUd7umHFdau3JfyAsj9fzxYi7zZTDHFiV5gTaRkCPD3AL5ezqi5Sq7GzkvHwR1V9EhVxViYVrrW8opDLs2",
  "key10": "43FmCovAcU3KxiCxNZxkAfnjvF8HN6fdZnbXJ1BWmDhFvkzxWUReL8wze4coZvPMiZ64R1T98sgZSmL8Qs8f7anp",
  "key11": "VwK3FzeKDZMJHJEeZXsdDWsHYBkLLS2paGHiSPpX2RZ9xZg57dHDs3iiFAoNJb6JtBfVATQ9LamtesoWuM4REac",
  "key12": "2PPK1mw8QoGifR7s1avNQbGwc4nBBcjf9S6G4GN8VtbEuMWpBbRiHPMBKV4BCmTbE8gxvrMg2EWZCKtUb9edh1nT",
  "key13": "3KRUHChWHwfxetJkrjUE5KVFEoZTw5vTS98KacNMmji1t6B6KypPZ12Xn5i143neSNnCWoYFjMTUCBEXdTGutnP9",
  "key14": "5V3cZjpNA2eKWaUysgZeZ5S1c6biHKGSQJKMyNq5dqfr7AmCpwN3vFkSBdasvQG1j3JMUv1uiGW1Tv3YgNRZutQ2",
  "key15": "3MVjhfsPqLFjACAQ7ZdAmii3g7vBP98wLFxW6MpHziDogG7eBBBc14p6Frjhn6eaiwpK4vYJQVVcFUnJZJNdxkPV",
  "key16": "39MErQe5R3iZDoMADCsvyyB33xTnKGDBryx9EpNLJhDh5PKpfmgcQs9WSJzUnLUk47GRHraFw2ofK2BaSWqve9qG",
  "key17": "5NFr4cXkfFfekVeHhhov7JohjUYUSYdQUYscZ1VNtLG2LFxrc4yzJ3mtgzcrcn7ynGXq9Bk1rkCHTAqxKxGHXPgm",
  "key18": "3YJifo26PqzLmgc2xmxzFA1XP57bj9hCEtypFfMraUWKXq5mLYguGq2s2zGA3CYPkvNJzWFAThjrXduhL7DkEKFN",
  "key19": "5fM9A3cJ2UnL6XtwrJnonuHsYv6SgCTBmHJk3BP4XUieEFhzKpyJabQmKaR3rg1dbKzKvhxehnTw21uki2EoQzKs",
  "key20": "vBCfsSwpg3o1v6LwuqojUPVYNtCQ1MKgYbRjhQo7RHSnJGLRBGhSVKrMCNrgTP98eZdqrSi34zosRFrzPBNGxQK",
  "key21": "5d5F3yoisqVNKCTdaDzkpFWHPXbevwUAqoy2cDTAaFX9jEY3xqsbj7XbiBN8FPNjVJfMpdL5Bf6WF8yhw8M8oTHj",
  "key22": "2CuWmHiNM4mzbEczPfrBCh2MLiAkDSHVt71L9szHXg5cs1i4ZmQqNBiZZcogjjy7LLF5jyxxULtkVMCHnQnR6f3E",
  "key23": "2rLnh7zbuUoejkpoo7eS1Mh7vZdQfYzjCcTNZysyC1AJQyvrn2JoW6RbnXnT9TbdVaa9AMt1Lhr7iM3GDJf5s2vg",
  "key24": "2Y1nbeFW9VRwuVEzFpcYK3PQ79Ys5vYg8MbiQgpRjTrZL7zDTiMuYbTeJQ2PJ1udbnUYZFctq1UN2Qyk7ARLRjDe",
  "key25": "5wiTxZcJFBq6yyKtdZbp5Y6UzTeiqkJThgx454NHumENgsCJJocaptTA9jYpVzmLib45Dzptjsz9VnzbtkdUF17i",
  "key26": "AMWHkZWqQQRfca8qsBUm7uWwC6tRBRy9t5ofXqcr8NKHhY2Vga88w9vhaMEFUHsEJTZKJ6jRpBNs8iaTesdidrc",
  "key27": "48Ti3JMRdmAp8SLfoTWQas1FmMksQuVBPJF6napbFU3cbq5xwj5p3yGAY8sX1zGPkD1zZUPd9xP2PBpNkvNcXvVM",
  "key28": "3HvsvQ8k6uB2JQTbzfzNf6RXDxCwyPvE2n1NzQdxUnEfGEiGWnvmuUizzbUKU1xcSMK3NqkmkNp23ky6a2FNjUoA",
  "key29": "2JuXWkeBgpo7m3dzmVn8oU2H6LLtsNu4YXSECfgjzrDhN1ruSRKf16tmgstqjq9u6FegCEy3q4MKigijBZQKdPzh",
  "key30": "3drVnBTCMvUy6dTvsFjhDgMzHE1AtNNSEVPLUzBFvyj9mn78KyHk4ojMauuqbVHKcRTkm3pbdZaiHqCDqqdXYUNz",
  "key31": "3UsRmaE4hAPAQqTBfHQJHFcHP2MdVWbsnnrLrggQfpXcJUxTpUv3438BeLcgqjpyutsje4JLNdhaP32J4NJkd4bs",
  "key32": "2coSThhA97dky4iCAfKXGtZGJiaSTcKZyDkVKtTeo6Wu5SFhPKoTwLCDECtbkCbHBkFjn7MsK3Ad5Wioa7vypnbK",
  "key33": "drJFHx4bver3AKPkhk9A4ffDAmruY6SV7YgEmBZx5Ub8HxYBeozDGnDKvU1QKA33mf1mCCZP2Fb9EiQgXKajWAV",
  "key34": "4moxWL5WwKhTotmWZutWc6Wp4scr7t65r3DuEecMxFA2jgy5FavuKoNdFVD5Ab7ZxtjvT6ufyhudxA1FFiTruPnx",
  "key35": "5hBDe71PNJ7ftrcXxVbRi4sRZn85iCD8KD7NXt6oaLY7AipGcUJEtsgXpDPMwEWijScWpEDrYx4LzBmcKAf9Mv9x",
  "key36": "3XibQsyxz8UB9KEiAJUsLfS35X6n9FWAFgSm3USmtZDWwHQCvReYJZsP7C5k3dL9haF7vVEqrf6LpyUQAzvi4RFX",
  "key37": "3aTCqHhWZPfe3LqzjtiJcf18d7KZFeusT6S5UfJ9amNCgiS2nL38PBKTPupq3S2X5JCLd6SMA5F9oGy245bjSUbp",
  "key38": "2GzZTsaW9pxRGPsj2RR8jCgY1HQxRJELLEvEBChetbg7rEj8fP7PVN5dYqiandSpNXwGmDJYwVLkZ993mVCZY8EG",
  "key39": "5iSP5ZtJzAumiTrQoa1tJQM7JTerXJRjJ5JcaZuK5dC5roUDF8cX5hXWWSbmyzzmNxHZayE4d3Le5NEiGZSDT2KT",
  "key40": "2mfz44usKX1fM3KfVbTi25TmUuqBhqwF9pihcFCxENEQvtXs9gVxKLzV716t959yqNCwHhXwAoQ1YrxRNuV8jWdx"
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
