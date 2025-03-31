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
    "ksJuZDfSK2bXudzbNR6Fyw6hyB8yXWU7zi1EAQ3kmyFEy5h4GSAXzRLJ514QXKZj55kNp9CijxvBzMKUWTqmXpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3oy6Ndddfm7UtwsQUjBAgUESym4kkpF9Jdh1RD8pJ4xZhYDnAqbSxdgr3FTCqHZ78No9xggu98widRXeEwLxbg",
  "key1": "4ztMcPPCvMoSiP5pRrUimChjRdDd6Ncuw3wYeeoeM2Dm85SsbddzREs2UuuL9nitaMvHorGzuzkh1QhkNHdkAnvR",
  "key2": "4dpnRoWdfswS3kLwu9Q5KduFyp4Pi9nQdc1YoTJrwa8gGegjRPSDwwfaBdLhNHT8mAW5dy75y6eZex2ayW5LBYTq",
  "key3": "4HNz8Uc95daJTHqzHDv3TUEyGfiLETVm5pH7p4wgtDUx64m2f57izjTvZHDzeKdxm3oFALNFVu5EKoiBnidbaPhn",
  "key4": "2JmKe4WpQJZgHCcsttfQJLKJ7Z57ZfLGssfxBS4Zn6XCsHWVTCjMGwuK1i1ktsHwHAuqVUSgjAXGTf7VXMuVp2gf",
  "key5": "4TknkAXEUapVL4KT6cp8iMueP5htqrZ5ySHgcCYC1VmGcvQ9prf5dy3oRym5vybDDSa3CFgKQ66ZwEros8kZasfx",
  "key6": "2cpGebntBqkXSy9sRP2NrD1T3qvHVKFRPsj6T1wjzgbKRrnFB7bPxTQAAMm8hifzWZ4wHEJJi3dkrC6MUX3DF19c",
  "key7": "4SdLJbiBWrTyVV858T4r4jgwj1fPvzNSEp1NqBCjBf4JiA3upsDzUJ8hvuTY8FE3vSgMGMgtrTbxMR93T7fT4n3e",
  "key8": "227nrTLcqbmz3PZtsgj1yc6uRZCSchN1kjqsodZRHHSpqeLUeKbe4NVvHTuRCnAhncE7bkgCyxHyR8dhjt4GypXk",
  "key9": "5AZHUxgNhapCvzGXQEe2NNW2TtSoNrzE6m8c5QWAarpTDYfoGueM7y2Uwu1HGaGbPnjStBzcdpCRSWcNmGPh76JS",
  "key10": "Xkq6fLAFu7hdd4FUkvDD5Wx2W2oaxfrZf53BQBZkNbWvAb89a16muoQnJdwFkNoVip3csPM13ynBWeFEKyQWhfd",
  "key11": "JK4sZpDSFsk2epumzWnCjAi1cP7cLPrvGowr54ZNr5t1s41ZkgyDTuCCPuq6JJFQkoCbNpHss5znquEW3RfNewf",
  "key12": "wAmKJcc6s4UjqB55oxDRDZ3zWcrQRCyRmKgqapxf3iGZjEPiUbh2RmjpjU251n37QNcWkyZLh2r5FwpKvCDHuEt",
  "key13": "2SQwzsw2hPYjC61gMazFDAoSUSVkii4iYt1ea5VonVNfakpPGbgpmCZ7hDC1eX5nusuuUckvTL8N7hacwcfT5Yj3",
  "key14": "67mTFfkPYchnD1xFeBhVWQbi9KCTHFkLb1Ywv9t7LD5xjkGv55B4Uj9uNgLGJbZkAmWNTCBHk4T8YwJEJPGjTC5y",
  "key15": "EExQ7bo5T7pUs6KXNrkXhc2ey2uWSGSy3XdL1dg83pu9ZMzigY2h7MfnruuAJjC5tFJLrrRagTtLBVuNof1CaSF",
  "key16": "r3QYQv9j3zpp6FkyjMFFubbr7DMC5WtHoWRMBAAzVd1rnztF31s8tyqrzXx1WbPrsY5nmgxAo3MTg6VzR7FPWZa",
  "key17": "5qhZGYmj5zLG6SXmUx9q2sHncZMja9CrPCSoiLCeBhvfbkgkdQCJdjdnbLAcUwEvNyVV6GQvK3YmRKTmh5Gg3uvo",
  "key18": "2tgL1KV9Ppie6cLpZuyDA5TezxG8zTUQS4RxpxpNuncmWX7LFDX4JUQC3b2DmJLUxpgWME5fLN9BJpgJXN25NAxX",
  "key19": "41wKptnLpfX3Fy8EqquxDwwJNCPuzFe3Bk43wPCXLUWcDtnSGLa5KJMhLdg6WdsrqWmqU1kfxWna83ZhJQhimL9a",
  "key20": "341R1m568UpvuC75tJwQkhkNNtxDabdURuXXTACTj2EuZHCquZdp5ZB2Pzp5rK7RDTkyp5L99Wz4Vm35MYU5bnYj",
  "key21": "JW7ht8As5aYu4Zf1AFWCQGAjFAyjYHYtxGFQwFm5iVTqy1WZeAhUUWQYMfd1kpktqqfchhQBEU4CYvQzv8K25uD",
  "key22": "3b9NLHkh351zV8eBN3p3Wphc6vmrd5fLMPEzACY1kY4kE5PSkCdkHt89w1CG1f8KGuBXVfpyrU1sUuNxcuGDuf5M",
  "key23": "5dZCieUGsD6qcisd1gnAHd2LFEeYaKgb1EyMZeT6B8JiCce3rK4rNC7fdXtipvzH3qNfKz2BekSci9sb5z9SzqYk",
  "key24": "2Ktbmbc1gSoEh7pxbMs8rkgeJf8HgdmUdvSr6pG22FrpFia61pnwg9GwSWp5KrQ3DWBZzQL7fgwzvxWjiqRCwEKc",
  "key25": "59nVG39TLS3C5EehnYYV4Acq98QNvRTztdqfDo3NTa9kH9Gsye4fM8rLixWv9q54hJ6oSqiVD1y2JHCEdYqkKZSy",
  "key26": "5L8QsUojPZMnxjPiCvwTJZcFF51fURJFExZvxabZXVucPo882DdUf6D6idcq1SfPR6jDWMhcuRnUEedkre5zebzq",
  "key27": "4fekuMSitvgB9KfkBHQJVYakL1BkWPLZ276qsviNFtzwnEUCz9NnPUfbQBk4z7WzTizm849bhqLTNgPPXfbsfHvR",
  "key28": "xxFHxWNAdHrUgM4MCRRAJGtaSgkByxtcqoYak3zecs6j3pU8sQJxgeSZ2896xt3cjUPBckWRU2wZEjSLbZz4JSU"
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
