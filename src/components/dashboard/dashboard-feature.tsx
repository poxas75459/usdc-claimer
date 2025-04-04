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
    "33RGJsd8bguUaftp1gBHobR68CkKxPRrj9bpPrFmfNpkmEEvJnueatTj66SCRGVayqVeM2okykqMwbDBY4MTgE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWrD4zjd4WjQ5CKMeazLuTwTn3uwP46DfmeXZg9VPQgZZSryiX6i6bfP9S5qjqddqBRUEeerF8LE5eTrJyRgU6U",
  "key1": "2LfYcRjypER9KaQmdZG3z7pcyq2xBxtHk49yhTDLUQZYHMDC88qsSE5pZjJivZPkwAczPW2WbLFzk57kWK4nV7iM",
  "key2": "3dzuhQNiv5yfRjsw5BWdeuCyPdSeCXdJX8ZfaG4Tpa5bG2PmCo5hUDCLn7L3FviQJvAD96iBEJu3JpNonjcxP1u5",
  "key3": "4wpgayQ5XTdVDJFUJi8uAK2eC2mba774ZhNVA84KGvaCNtAeem6ZBFwp73cywPp5czont1PAZWo1sUKprR6i6iZ9",
  "key4": "2ME9Amq9FTQrMjAcYEFNEsA4GgqQqUKZvPzsxZBfzHz32Xdv1yQ6PTfmzMPvLmQ4DwZh4EAVrL7moumAKcLoKCMq",
  "key5": "5zBCCFBawhFXcW6Qx5rRLd13Gr6DYmLhhhD9j5kZSM9jFYKXseHwAs7TS6xqnpTWxkTgzf4CEjmyFwgA3Wg7vfzm",
  "key6": "p6xSVsn9b8qsbqbpT71ZHH97LbcC2KYM9Bvs3EDtebZ6fmMY3Q4gNkEDWxTpEXfrqHgBmgxgPJfjb996rYqhtS8",
  "key7": "2ztN5KGuzswJcmor7k6RFrGqtgFhi6Hce6N7oiNYDT49XHuGb4TF1Ub9vqSG2f7FuCyKzkhd8orNxnzDCDoKrUM4",
  "key8": "57m2XULzCTLFfzbAAGF4ihmzLnCaT7APNo1zoJg7gAkqNgCDt6noQWWdoMHd69NsvKkTrkAiViCKYX5NBzJ2uoE4",
  "key9": "XxL4sTMzbar4ufHBqA5EBYruQczRk2sw4TWYDMBHCmaP7kdUTG3tzUA2BtnyvjZkdY1GWTg4jUKcSppyikSvfAb",
  "key10": "Xw88akM6Vdh9DZpSQtsqaHEM8vsdUrnAFArVtyxfE7sHetFvivw8JrCFNcLaejww7iXmCRvcywjTH6B7eivBYxb",
  "key11": "3t1FnLpXZeF5fcpUy3HJB1Exd3DBNHRJCvb8DDp7QxMUzV1LnjWsYJKm6mw4ExUoNsK6YqTQcJJdPwVbfvQgLtpW",
  "key12": "2igRQzwZnCbdrySGJwmSLedpBGdbj5vJ6ahNDPK3ipQmLbZCPZA3GJNhPqXLrAu2TtkqzgwqMHud8jwEwouRjkqF",
  "key13": "YZ8iLx9aPMEdAeHiwYCFP6L6RaEDkn84aF3VAPmRBgwda31ZWeD3ADj1QVVMNcRrJUqiKxiVhZDXmQEh3BG5MbY",
  "key14": "5mHtKvThXNmv7DhD2tPj2VtBXJZfmrZ7sq1tpfAKAzE2mwpU5z1jaA6UMWBcwtKbRBrZvCqgQdwpvWtPxwmGbWoA",
  "key15": "2wctFrbGtyhmRiwqjobBYcbsodBvpcCQ9uNHuDEgh4dkysZKGAb2eFrPvsiepFJTAYNGszgb1UqWhcF6ViuFuhj3",
  "key16": "4Heajdn5k1jQHQAAdYMh1nDi6m9R4yuJjEQNYZ7cWaUowmFjWXTAVpgypc8phW3cevKDbhZMw3ioVTtpKTKddct6",
  "key17": "2dJdvXVwSp9YY8GSURndNkDw1k7Ks8r5q3Mb5RZqoqCYdMyY28bM3eRVrqztXQauJeJJfG2RZCXkpTCU2wixab3k",
  "key18": "zhou9vZ7P43fz2r2PB2d4V8FjifUBpi8g63159ysJcCh8YNjNADMdoFbPqne9KeoCDE4XD58MHAuHRCK2ZDcN8A",
  "key19": "51aTEuzznNHh4pDNVwrBidW2XiuLoJ233Dy8PTiX3aNSEC4SSHbcL8RgxwcY5Bj9AvSdyoyAwij1F1RkMgdc9TBa",
  "key20": "4tGJ6cY83CQvo3KxRykod5qdrWBj2GzDK3unjnDeB3m88guhU73f98SqepFWRotE9sJpgVtPhwQyvuqj1jcFwtyn",
  "key21": "2KtSXyYtBCwJv368hWhDLXtiDnqeBDNp9Ghr34pRPDboXYSQvePAj2gHFCvEaNe9AuYcZmtxMzu1FTkAC5EHqaaG",
  "key22": "3pPzvLXYyL5PTz43zwn8TFJMqhCWoqpXoj7B56gNjVhUDQt2KmGBiNxd3W1WVz4LDsVEB665RkGuN4FtfWt4hVLV",
  "key23": "3zRRqrJUP9CRq5hqfGBddZ2C1GxpEQzgxkGH1JGn7Uo4UQG9M9q6vhmQ6zqiYtPpPnrb1xZdHrJ5B6vXejNQ1XEm",
  "key24": "3egzeygLfyKEEsEpSUjGDqcN2VQYWgNJ74fJVU3RT7TxVsgQceWMdS3NLJ6BwF9BxortKztdkfa46FY3WiygSDNE",
  "key25": "5Y6E6e6MNRkwQeJKDaRjZSbtvM6cnZD41sGBY9K6EVnY4ti16XtNTvCM6Pp5kJqjqxpYqQxjMh25NEAbUdi8yJA7",
  "key26": "2RbHwtr4NqJZrDxrgmAbHbonZtmMLEYKE5xHs9kXsuFz24w86Lf5ChT15zdkotMxPNSVqQ4ZiUpFwBhzuQivASvh",
  "key27": "63RVzKgr6Q1K13FVG1h1bUKrHVxtsTaNULgPN97CXrxQ4qGz6UhTzQLWMscH7HAQ89JPBAqQZdK2yCpCwS51QwPd",
  "key28": "3wSZzbEP6x7BkAEqneZ2rQREc4uvKRqrQ8X9VYYJu74wagnRzB5RgKS66Baspv37nSkVqp3LpCivMNZ7QHe5bYeo",
  "key29": "6bVdsJ72WXtC8RQb1HcocCmxv5xpaPPijV38BmcVG1E28ukoRAasHtESXFwwWhvLfadvBrnkDFRFCfTDUPU4fR3",
  "key30": "w86CvTCq2nEpD9e17HCu8fMknB7RYW74zsnZLcNyWh92EQuptQebaA2KLe9CJmAzwySzkqbaeZBfT6S91Cfv5GD",
  "key31": "5HB95GKkLomEGgZKc5ajezSKM1XYUMcRjQANeWTAXBesJJ8bJivA8fUdenkivCEjcz35D1xWTBcHpNvQk3vPVVZn",
  "key32": "59KYiCatvw5qMUtS5WCiBVQ7VWYG1pUHU6thuiSo7YoZ7tCx3tTn1f69VaiSQjckjexb5d6KjRCiWYjQcM2uJtnj",
  "key33": "5oKfU5LPaB8dzzgN9QUoL41YA1VYyWMudaAuMv6sxa6R5XmEv9tbLfMgxmTHjE7w3Hr8SK4Mjt34nLPkFqMPwXh1"
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
