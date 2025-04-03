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
    "4dx4AsGeFxUZTvDTxRbwEJVcSEFvPG9T1CGJd5G7swneYVrQSYFaXXWqeNs2w8Vx6Eb5jyvGpSQPhEfbMhmH93rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6ax4pPezQprqqtSPbAqrKTQjmiMeL5jrHB5Tv3FZEFPinkNvZhDZjbRHxrNDMF2LKRkprcrGVTu1PN74E1mwdg",
  "key1": "5795FBHqQYooFQs9jccMsSWgwZdF4avvKWXWHrbTeg97w4RYNGKAHwgmAwJpLqJhQnwNqCTm6KkNpiyxqeNk4RyZ",
  "key2": "5sZvRCQhD8izpKoQmC2Jxa9rvSfcnyZt3vencueggVCmrZump4jREY3KwYrTJoN5LuMHsJP7XF36ssgHTJUofS7C",
  "key3": "4Bp8FMsHRkPYXTKoKfqQWw5onx5ogyNuDwPXn3sAu2yEHECya4snGk3Khoz72hgsLqtSVu7gERGfo4mLccVuUasg",
  "key4": "NKjkoJzRz2JV6iFL4AsUNhv3ATxazBV9ZMsWK8zSE4cSFNGazuhEnTSuBivQzQwWrDFv6X4XCp9avw6vEnknVXh",
  "key5": "3oh1KAsDjGaZEP9BuAs2UfnAg7uYdSP9ZitvXoK6kh5SeqKYuBM4BBYhbhGZyPx3fThbX99MC1RnSoyNwch39D7Q",
  "key6": "5jTRZFVEuhSVdmA5y7MT8KDKF1DBeXpiiMwT1cunks6uozc1YxaqbMmUTt3WxcDgmtGj42eapiqf2N8oih9SmQTg",
  "key7": "3QERAFWneeXTAJBKH47MfTgcuPrjz74Qft7Ey5V82sXT2nRKHMEeNxaLGH4MEjsALEUi5z2WxZYLp7apKPCjiuTs",
  "key8": "4s7K649pWH22FNPnXzWQEBwagHhRGEMTTaxS5EEJDa2cEYCeK9JUfiC2GrVnAKf3aEq9DuvCmgjQhuZtSQiZcwt1",
  "key9": "3r9zEWPuX2CzqB24ZvjDnkRVs43tMNei2mNNVLYXgcmbUdYvrLnkLzaewxQKHh7cyrBjZPN9WXfHXF2T8sLRHAP3",
  "key10": "3MgXEuC3qnCLtAGyb5fzJbev27MmzXeGR76UhGd5TSJpJJHVqrc6apa8g1N7nZUxVtXKip6kjndDG1MX2zLMSzwh",
  "key11": "t7JpsG9C3iViMUsft4LiCuh7beYbupWzGoJw2hZKHPFU5bFGGm9vihJU8M86bUnyUrxCRAhyJLuj2xu2pzmXnBo",
  "key12": "3nN61XZpENo2cmCvcZTW9LckAPN6CqdHjTW7quc9wsJxJNLK7Mm8iWmn3zMtTTaVxaiUked3e64yRH6yo1uDacpN",
  "key13": "4mrrdrhjzdN3E6Ftu6LifKDnkSwq9SUcjdVxebZKvfAo2zdfbNviUZahD2jQtBnJnfhm5ERqpgdHfzwgjSg58Jhi",
  "key14": "3fjbyeSe2ScRwwz6yzwaPjnk1HkTwd6FaXr9zF13VPNSnvwAadgRqvqUPkAUyKT4g36zMjqRnVLgr8ABcRNBaLsu",
  "key15": "3TWZXTSrLw7ud59hbZjJuDxq9XXqtxzhBFGJQKMzDMZ8FZcpfgEEG2JrUjsRFXfGwc8nEB32oGqhtTMn5A2ZSVBK",
  "key16": "Z1bUefRV96BeEJGKSPzkHi8nMghpV1wksjZ1iGdhtZmswXPhgPUpfFKmCcSBgbLyaupgiPSHRLgAVUk1B5swb7j",
  "key17": "aMGVAvfQgtHtrRE2a84ugNtUxAJ4JbpDV9iS3BYEfktDNK1N3RbmKjmNfaDXhUFnCXUYgdKW3g83W4iTtkvj4Pb",
  "key18": "5wsUhTPXWHXQvqLBSSgoMkNYWS3obeZzgeUSNQ76qUm8z2a5Pe7PRUGQcbcbJySJ1DpTTLTtLon1jgewFaq9yP9K",
  "key19": "2hCXxDGxvSzuj2KiZF3Szm5iovjtDPCnhEGuy6ESvEUpAAGfDVagGfHaVCP8zYf4Ukmm4hsmmUtRe5gyK97W4Tbz",
  "key20": "4G5mwnzYQ71AJAM9rzqJA217eLNkCAvvL4xhm6GecponcudpkvbPHxR5HtHn7my9deEVGjWdJFsEUSJ9oyGQC5LB",
  "key21": "5YEE7y1i2C9X8szkmsSNCwUafQkrLLZ193aGciCD67iB4vVouAxCutyfDDjEkye8sUeRntvMzP3HeVCmKYqvoxe3",
  "key22": "26wGNyMUE5Yqffzp2iCWJ8ChNdXfE3gzw1wchDuzG759gZyBq1QzkgB5cZxYuXLkaowk9gQa2Jyw4nmBNeQuPJmN",
  "key23": "3kKASQbvppuMrN5XikDQ5UXPZ25gko2MuwgaPCBxXrrh6tQQ5VHo2tB6XCRaZP7Y2KGnghNUxbcBzaAVKhtVs9Az",
  "key24": "5HDEMvctgB2Qv7yvPAhJ3LbpscrfzDSVgHJg6byaxkFsi6eSfibVWMD8HjXP8TRj6dR6SpibdcJ3ZffMuydWAE4J",
  "key25": "MxuA62yuHRHwr3RDLVRdFAHCerZjUsijveTACBa4NiNSBAukDh9Se9UZq38MYhqEjSQvFjzfDX4UyhBTfM8XRMG",
  "key26": "pNjr6q7DUCi1rKcrJ7BAKotP9AtWUZXYzwWgXkxUqh7TdCguVaZ9jHUpTqgVak2fDeAoHjM5zBTo8rcLk5H3U78",
  "key27": "1puCbp3KiskqtaM9Q7asZPwmGD6rJn1KiViaPzonn1fuUgFDUwhEmn4KHQS8Jp8oxgHHALRfxQb5HwrQAxJFcMM",
  "key28": "3vXA72xh8yTpr7MSJKqKczAefkNxrpKeBmC9fuGhWGALRw8fiJnjxqNzv8KgRFjYXiUaEUVmPNNUqJ8Sy3Bs8pn7",
  "key29": "2SaSAMr9V8NDvVK2u6K1eAFBPmrGsw72P7nC1z3qy6APVatWeunXVo18R1jWwqRqhLGdB7EuiCrgS4u6RaoPTUq5",
  "key30": "5LYMirsa2zBQzzy8T4StRJQ23hkUX7g8jzxTZeKJRRU6MYDpkSqWY1ubgFLM4VRFBKXW7KUjvxYdWTWW2AgdCZGD",
  "key31": "L1jzUFujAx5dBjGBBkW77vNzrN329MmGhdCSWzVHB1ioFBZRQT1qakrzwBLLzuEdyyNCYqyBzLgYxysWqwnwWQD",
  "key32": "4LR458scLoUYTCm2vM719USi5i2dpv2UGfsjmd24gZNgv1jhnDzYPA3sAGJLJiUWKgfGWtYKSDvnbHKyDCNFUeXf",
  "key33": "34LGYJZk1fHHPi6vsUqtjQqEwqBWFeaP73Q32ZHk3vftSdXvsoiXFdzK2FiSgwak5hreMXFNG45FajggYeUdW2QV",
  "key34": "5Fb88PSTQYmNdLadhC4fMkpQ26xwUoBZWPreXM2St9npWj8fMQxeaLhM5wFPqHJPQNGsZvZdBhhiLgbm9A2V22JR",
  "key35": "27S5bLZtdx1EenAq8pE6seehEVSiutv5vjsQdsSgm6PZt44X5TBcwWNPNjkZVwj73RWxKtz2yj6mo5zb63U5a4qf",
  "key36": "wGLyWv1ZMZ6qxqefpgVbd4bvPAWhC24xNosFbr5pRYbZHMJT1CXuRVkZCHo4mDw1Yoop46T2gaqQs3Cih1T4Gkd",
  "key37": "2jaaUNPrAEtmBKovyhogqRsisS6xavoh7BrqaTBTnda8Hm21ModuPjLs5mJHGGSkF9xmkurnQzuHEgtxxe8atUoF",
  "key38": "3hssweWmfZ5pYzGjDUTktruM1X6qqSNDLtEsfiZKejpBR1BQNEggTKp4jydb9iZ6nxZ3ZfdaivQ4p3BmnfFMgfSe",
  "key39": "5wDaXxW22Qokqg8j8HLuPQ1bdsDnao9qQrjoCLMu7oj7Eq16z3GQnxnWMGJrCXAtrXkjBfWTF8UvJNRgX9ZsjK5n",
  "key40": "5W2zNRWvkhjJvuAPokpxbvMmiaxPnqvccXmPGf6Bsxxi8wi94fhV6UxEdkawFDiobMkgsy4azdD4hbAyy2LG11SQ",
  "key41": "HFfziWMP5D4t6TR1K3nNAmroAfrsU6kxZVLaUZhUDuMnAYfsWnA33cAfdkZAj2pgWmrvhs5nfeJkk3qNtvwzWv6",
  "key42": "55sjyhz3zFJ24ihG51q7JV7fbqvJ6kJ6G4jP9E86JFB3wwf7ie5XythVv8XKq8hLX48PCacKSVZkkuZJ5S75yULA",
  "key43": "2zdm6NGAmzTmNAVmk9ELxvsuVSmxRbNZyY4AbtVKniyjSZF5ixagMDdb6JUCjqo6hr54N7RJD52JwbKdoVNNvQUt"
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
