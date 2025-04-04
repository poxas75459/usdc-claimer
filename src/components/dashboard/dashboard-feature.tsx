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
    "33YfB8QFHnDK6ndzjVUPQt4Pwu7RAKCuZpMMsTjn7DPEUEUGYDXpvTxctkDTBiVsd4GjYTCQVy7pjBicNuwbZ1co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbKYubUDMwuC6ZGPMrPpq93FBnjUcEo47wwKouXabUTBegJBB84kJjaA5YKUKGQvWqtTqwA1xwhpPT1Ec2JsBcN",
  "key1": "381GA1tZeboWhe3AzPjCBayTRMFknuuEu5GtDx2T8KRfHY8tYo8b7EapFuDB3jdzVyoUQbTrt4s5GzQJND2bisvP",
  "key2": "47CMA7muqLoEpa2VZ1hx81ZfEbmpgeEHzGbNGGGJMfPP4Mmg11GGwpkeA9mVQjs153yk4cK8yF1nptMEZ23siDLh",
  "key3": "4KRNxXoMVuAd8esvHrSNLErio8jpYtakrpzjejmAMLyKxQL4pGW5pQJ7DDhmGFTfZTTvdpQVFjML78ngmn9RMfy5",
  "key4": "4RqDmqQDH5xV6544UwcAMuK9jJFJxYJ74613zg45jfoHaYPQWvZ9PBcPuA3EPKvSFb6KGQbpUmMkquynuUjCX7Qg",
  "key5": "oiru4N8oJyhUGudQr36R1hqQVUmayPxjAuKj9vtVyg7AHqUEqPgFMZT8Hbh6EZ6VhVLYh1sATB73QVT4wjLTWDN",
  "key6": "5tMWGF4JHkPCYpGNwZz1EfxdJLQx7oHoTAtRLexm9NPxxWpihbGWjfeQmBWMebXafBSaMGBmCMUUjFb5h4L4e77V",
  "key7": "454nYetwp26nmAJ1uybcpH1LuYRAENiBi3ZcgFb4HxnE7uqVJfrLXoEL7Cf3gJwdkLgVZs3cTCCnBD2aRMNX9JUH",
  "key8": "4Y6eS1CkR7JcHjDdhgzJMxvacfN33u1QPxrz5qZ8X1WJJKkfWdn2XjYP122mCB4mPmPSgagHZFMg3Wd4esDaiEVq",
  "key9": "rQtuyX2eT2A71mmMtzaXQB92XRskRXhFgH1XGsiWLmX8NmTs6QKN4LtFPDDGckv8SQKZ1LCHGtqjo9nB39BP7Ka",
  "key10": "2j1FoiZ1c6B7DfSgyzFiXY8ZpMUgFcfXZJxULokhcYVnmLdVkBjfCUaGrDn9DTzSQCfaGq6XuGrMKjM1AxFmxpRX",
  "key11": "4KU4wtcx6Bwy9VA1M3sJtECvTvFKyFNJb5fFjbah8txp1ruAmygNiPJyeLRqmvaU7RogqHXUSi1yArq1ip1EnDrh",
  "key12": "5fH9yeXuKQdfmfwLFmBqVK96LBKJrdukK7aFGEjmWbbv7j5U8BhsfGNujpcA7keXkDtvGFhGhdSDKwGZStQzqvE",
  "key13": "62uy9UfSF1pZynCNEjW2ExRUrr5QFy3MrH8MD7XMidVUBHDPeBH84dsADPFGjab4ECUh8kGes2NTchrTUkBMZASw",
  "key14": "3ApG4M6mz8wtCqw85en5bPNZNQJjH1mrFd6QYCtT5PWKdMedMiGfDXeYkvFvoFL3JVkSDCvKq11qM9htddHe2XoS",
  "key15": "3Zj9wbYUCHf5zmTN1ZTWSS2GWSjRZjRNbAq1AaL2JXBrdiHRF2GVrnPM1srMexdDAwtU63KYgEaa4i2thPXLkqMS",
  "key16": "3mUbNriCa21zpo1NoUKhtQop9MKohmna1aNVxzjuXwD7hHBTWbC1ik126wMdCJrKkqm17FDwcHpZYzpfphFo6Dxp",
  "key17": "4nhYz7ES4w3kRH8Guw1AfkjB33NDF6ufRgu9XkiruHMKVxQTmHua5fFecU6B94MFmTSvAyYeteqzWJxcZs8Nhhyq",
  "key18": "2AF3xk76eXB6qbZTxz9wa7AuXURkjRsAWQNPHKKJBVGCo6stXrGrt3Tr8eEEJqzQVAcZKQFnXQPPFTe5x5bxavCR",
  "key19": "35CNcECceus6zPqkW45sha3943ui9j383re8UV15DkM3q782GS8jY5DC7hNnNjoNvPAU6cxWZpt3pG9vAWPYaj8B",
  "key20": "5ShrsPjh9enGKSfZPAYT9KTbfpEweVBNW78vwYkKq8cdA12q4UH8SbfbysqgxJZZkttN6YELY4bMVfKX8d24SBC5",
  "key21": "4QuHie8v1qADJMTUeR3wAab6fYenMDSckbzUtwCRSvfTgkhL6YhLFKvxJZFs7tQbCbQ4D4kYtEUiTC1MxdZZivN1",
  "key22": "39ZpGqwMPYcekHEp9a6qdLU7iw3nurxn11cfe4ZHYmXPF5XziooByRYfPhrAXJAnGuW4BzU8UKnwuCxFm1Ujh2iz",
  "key23": "swkYhu3hD2EBoSGrv1pQzw8y2UZe1PxNvdcV5CWXJpUXhKPZGka36Ea6jorTsKVmQcs3vSXyTsHCYJmq9MihSNF",
  "key24": "4HvZbn2WaXKq1tXGPBrePemX6G4EJqMt7RikFm5TFZB6xAFCpB5MhLk3XSFf7SRnNoevNd9ZmvYFDAynKXNHywZY",
  "key25": "4HhDpiC91YdgvRoH6rNABXfWBDbSHcAbvi1xbCkummr81WTSqdbW9J2HZ5t7CXtr72SpYFvzqJuqx7G1KCNBQaiQ",
  "key26": "5t5WG94E5LNmRvrsZcHRLwgivziuGtF5PrpBbY59snVp3k4sJDQq91ADSAGD1So1bXFt2Hfx88asZiTuf1EjytTP",
  "key27": "2Nmwpf7EKGKHvjWFwFAp3mefMx8r4S2vYSqxwbZse4dXhVkpi4hW9fR8TvEm2qhNb87vW8692btjTA89TgpfUicd",
  "key28": "3Q2N6DKbDwYgPSLuvxEFeSBpH8ZzSTscGHyU5L9L2oAGqGgzzzqEZaF5yiZmvXFUsDBGei5cLtpJLSDaiGdZGfVW",
  "key29": "5RQoLF9zYjFAyVJKqdhLVyh4YZv37ZsN8Sa69iUX27EkEVaM1BswtW8MYUyXAd7uUkWeUQwHhmr5gdkagt6zH5XB",
  "key30": "46m4YSZ1e3hCVrn6teNQS4dQMZhnSVeaay7gnyioxVYdh46AfCNwGYVAo7teGVaZ41YRhrnfQG4uhedhydN8aR2E",
  "key31": "51tmu5nv9ohFUTdX3JGvWvfYJKWTPQx3tFLcBn5S4PMmyL1BEHMHbHXkVyz2jq62HUNMMqoVN7YkHPSrkMgnh3VS",
  "key32": "5WWVQqwPthuLzPHsqoHtPwViRNQj48sw3KuWZnutGvdGsrmYECsvkn9vdVpDC45WySjmZdrGAy4ccVcQ5XkssNGt"
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
