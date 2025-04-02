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
    "4wsr1A8dC6JHFtAPrjfzH2C5dv1Vegq4dD1udWPLf7fw3uWU424EN3XvjMQpMsANwJi6cLowTHXrkrTvdLMos3JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kzp1845vvqUdjv3HgRZP7rXYjzDmm4fBS49hA2qQ6htKRBMDXQxMFMTUwWQUw3VKCPgSseHsgtzt5zniPFGPHnF",
  "key1": "2BgsKhoKGB1YL3A9mZg8idNTWtXQy2hNht9wnmqrAUNGFDUcf1TGCWZJN1FunKtTk1wSFjip3TtjGzrJG4hSFXCV",
  "key2": "E3BHUJJVV3FkHRNjgTaDezTh47HdcnxB4vqMi422DtUZduTnPU6iefP7xmUQdSNhSJMNXYwViCPJSZuVMLCs1XR",
  "key3": "3uMoE7sjpFngYLCWXyRhjhYASYpqhJkZP32WpuoCNN56BsomMq9YAG2ciNvikAab7NCaecterqxqaF7UbJyZrbN8",
  "key4": "qcUPCcjrXtjXEpyqqxCH39H4tyehNouHWZcFE5h3sYyvdP96nCL8ZPcSboRQ9H2YBKfuWBJD86sjXz8v7hSp5gf",
  "key5": "3LNGheoBkdzG9Cbdmat3QQ35kKFaH5zrRwDWBobWjQgK5TZDugNPRSCuUwzkQxfTJRGxVsc9dCA1drRRG6HY6KLF",
  "key6": "2D5oTRuPnyoufZVXX9BQdHtXsio6i9XuFhVtiFhN3q27Ch1Bd188ku89XbFimD5CkbHPGvHY1291nE8pXLuEX92m",
  "key7": "47ugdZixvMSWPYj4mVzhVq2FCUbxCMgUi2MCnyuXG1cNLNKrUgHAfXmoFVYM1PbiDRMK9DE6uHfRDvj8EZeeQrrL",
  "key8": "58KYf7bCLatKyHBZ2qQ3kwGqDKFHR451XSqrgviMKAHXzgNh1YQyLVPZdDGgUvK2M1pbXWYTM6dt2feiRyS4Zof3",
  "key9": "4o9nEY71QxwsS2sNyCW3cjqw1Fbrwr8eYQPTr4u7RRKusRf6LPpQSpkY25TKttUEJSQCsvtun7PhTMBgu8Cpc994",
  "key10": "5f7U4nA1v6o6ZLHi2m2ba6jA5Qnm342zj97XvwxfKSMtfHUFFBUwYd58HWQaHjyd8eUSvFx3aznnSUsqsLPx9NXa",
  "key11": "3uK4p81jL7yow7xEovVyg1s5VG1hYoHW1hPL5yH6j4XpYJGAYDRumab6Xn7E9gEJcta3inq371PdhXFZxSabBSQr",
  "key12": "Wh7hUTawzpkBdHcVij3geHbnJxZMxuDTQX62gwFdxFyyzSHovFoosxLoRxQhnUHoZ3xKzti9SMFRgriEnKqXtSs",
  "key13": "GdZPSSJuyhPsoVkagdmYmcRvme6JCMWM1y9R7r4LjjFjcJvRNjkaZbgs8CBBp9ishVADAHiqjr47by3SE1wKtJ4",
  "key14": "2n8rwLxX2Szk7hGnaXTofWxv8sYLfZz83Q2nvf2VUGF5a65tAEkfcxJpvKcQ3gLXFcjBsi7aL8SmS2CppengbGFe",
  "key15": "3LuiD9hqMG7arQoMRvcBkkkMVR6NqsAZLfJE87q4cCidmMi2jVPv162x4MnyrvWdtg7KNFdMxSA5KecpUv7KFz99",
  "key16": "84iBTn9DxPL6To7smYrJnBJAoDvpjycMxMfDEv5uJjCvDF4J3B22abktp8Dwq4CrrBEiv5k5NqGMZA2aYTquN1k",
  "key17": "4PMiouwQBjYeuhxdp6oqjE1K2NMxTQfQ4goPzULfeFaXap57Cdu5dN3SwiLf8RYGPzdfaH5qQmvtkfeY7GBLQzTe",
  "key18": "3k8AejGAYiQyoyLNAhu5TJ8m9KSUPHQGKR8KfqSFR3PfmeEPuRbGgiiTcnFimpG24h9QGCZgBsSQznBQfqGPA9jC",
  "key19": "4FSo4REhSptHpcMXtPtkDtySRm1D3xmF3xfAACC756T24WtsxdiZfxmwicnBkJRMvyKfeg1cj4UrHyM8WzrD3iSc",
  "key20": "3MovERDE6YrDUt2hnEa9LWZZx1qUAzoKeYsNTGm2PqEgdQUjbJfhAJreM1uEpUuy9F6MQYRmHoYTczAPE7zib9hR",
  "key21": "3yFiwD8Fju1AC1pVmRUtDLUPRr8Ft4srqiv1Gp4GUVoDwRpGg7KNNTymxVovEGsoE2ayzMWidyALUNWU1tS98yud",
  "key22": "HcjeNHDQsvLCA9ix1ubfrDEC9mzT6LGUuPFQihEpt1nzCxUiJhcHE3HthjUuAATfD1S3549wBQGQ31hYJSnaJQC",
  "key23": "5bR8yMiGHr1kzMrW63ytmaQMGpaF1QEDkfnWCNYeyiba41gCWJGdUyUS1bZsUKDKA9E9Jr5tHx3SzjCkF9PWCWyD",
  "key24": "2TWVjVZXHtYFVgw3w9brsQemvAB2VT3a95yNzty5s48YPw8dY52ZZQQAD6ks6vxufmT23XcUa1t8WU9d8MNvUTi",
  "key25": "3SgMGue2E95c1c1EvCy6LbZW7PsukpoVbFhWbhhMZjL1g4oWCAhAoLBpixh7Lm5WkUw8JF7pL28o2tCZzg1XMfgt"
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
