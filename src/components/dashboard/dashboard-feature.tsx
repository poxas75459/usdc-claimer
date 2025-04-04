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
    "p3XVh81DYELjZvqn8iExRA5GGTtcmSdnct4EFUQVN4XSE8VBudAtE5JGnE9Wj8P1TjPkJjkvKYJNLTyyFxL9wvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJnG3fMAv816ESkd2voJqnfpqKiRHSGKXnVWAjb7qRhS6Kyuj4SPuSPFSQxocSwP1LxYNZm2KGorqq2fcyUoRx5",
  "key1": "33ohEPjZXF9oUUP7P3Vu2NXjSrLhmNXgXBG9xnRXRLp5ZU6wxBHpACGaS22vR3MtpG6gvL63EoR38HLaJPjiatJS",
  "key2": "4h2JL71JKaTgq2n8YtBXTLPkou53Tiv9gsrDwnZovptCSwbneGRPxbY1WT7qSR5uKB1JX1aqmerNmZrbBSFtubkq",
  "key3": "3ER52SaKd8w1wNH7UTZWzc6nZ9XZHvM9kz1RTCt5LPY5znSZnpi1pamGPuh6f4GaBvHkVmrvUyXcdLFznkxSJLP9",
  "key4": "3Er4pYcBc7cqCzE2RzZ571vbqTwoxCBA7QxhoeusLc93YfeZV8KSuCVEE53GkuQpczgN3XUE2sipo885ucL2Po1N",
  "key5": "5Ffy3sUdyKgsodac3jfkHid9v1Kzvrv6zLUgWad3wtCXtvaHV994tpLMAj5mF9RDbGaTi3zjn1bnsL3JLM7L7eia",
  "key6": "4QA4sC475Nsh3JDHzp3xyaCnyWZL9VhehMYFzYECt5tNLWoCz7NqaiqYQZJu5KM4Qt5k6C6UcGUPpqCymfhFiw52",
  "key7": "54efircomDFd8kyQ5zMMmsqxHK2mrRK56rM2BCHn8CD7vt14SnDswYzpsFwMGYnWQLEjfjNyGR8A5M7jhrQkiYZc",
  "key8": "35Mu6TSysyvsr9wrR28uEhrYSGzWZgideKWZXMXVtJhKdgRSuDaEo2aUXAYT8CGTmgUqbYT4ySvUrSfjXb76P6Yp",
  "key9": "2msvjw86UgbKp3iuAjV9HBWhzrgeA3t6bEWDegNNkQHj5V1mtY5KUZbf8wgTizTDWJ3fD41TBKmdajhQ5D9pSAjd",
  "key10": "5mBXwg38z84HHRniEboy2SKYhJsVu1Dy9vtQT1wJHibXFhdYr1j861LjyGQX7rtGruc9xhwNhb7ZPisy5HGBNVpd",
  "key11": "bS8jBEUMK28wkHoa6bJmkjypu3q6RKgCWh6SnxdeDfpNA7BowMSKJqScnbdtcZ1mwS1MHNuhnCLmQX3N4rBV6zw",
  "key12": "5mUeUDK7BvyPZYT99KYepHqygPk3ynh5EuxQCFgSx1xm1ZP2nsjWQ47JLtie6xK7EgWghvS49UHxWLU7P4hpACwh",
  "key13": "3XNAD36DQdDHQETPEaFUWGcdA4oEiibeh1XfouER9bAM6YrFWCZsYqFhiXZtsAEcBDmrkEFdKbritKu92qPhRwsu",
  "key14": "4HaghzvyZKR1CKf9f1AjURQfYGiYWACUyFnnGFzzd7XqSsLx842LsgMK7LktkmocZSeMyLuN2wYkEqckQuYDxQpj",
  "key15": "3hgsvPaAAm3Edy4AX5aCE5QzHMc3PaLV6btXHU48XNJVzawxMAYmhWgL2GohwQYcFFHnwTa7SvbuB4qnExwmReNq",
  "key16": "4EeiykteSZz4PA4L7c8yLTNPyKuZmrvHtfNjv2SShphMj4MFY8gx3tsgK1haBHgkDjrBpjpM28Dqm3EhLSc2X9FT",
  "key17": "4x18iVy6CYmNfyCGCvq1cNYkpwPwq2cDamzqPxZXV4huwZhRhjwtCrd12HrZjduAPyM1h9gZLKi3pJhu6ASdFJv9",
  "key18": "5YdA3kvhh76QoxY1RXP1brQDHuaYYeEVdvHYuLEhuwmEjJzcR2hma5WLRW8q6mKBrZYRJ4NXmV5SsgmhQsUKyMXo",
  "key19": "7iTdgHGYvYbsaVURM451cGuEvyTmJF2fJUZyuwju6unyJuZYrKp3fMjzA4z29YJU2Fvm5SKmJTeECDN2K3j182A",
  "key20": "rqrarWx5u4d7SLg2MLWQYUNs5rfsXk8zCv3wpnz6LnQS5Qgu5Tc6S4sHH2pBZvXQtoFwR1rJgZKpiGpHEjA954h",
  "key21": "4qJssf7jpkrdCBHhC1WmBmj6D8XEQWZYMWvA6nzpgvku9dpWa8VKKUYw12yUgKqKc3EnpzzaJ3Sn74HvdqrL851p",
  "key22": "37poKjPgJG4xa6PTx3t9D8M3uoTeudrhCKwiRWpKSUP78SRa5JuwBEGAJ7WSiNDB7zQwAGpp8MCK3ph28UJ8dw1q",
  "key23": "2D7Khu6UQNgEJT6Pw5aA9hpAsJVzQUtkeYFi35MwnW65cDjDzXMUKtYwRGqmcvmDHgwSr8GpBdVDGtxMSVgXEpZC",
  "key24": "37tYSE5pFG9aBC6wSmtBJ3zixQnrUSCiYdmCPLFLfFXReHqNyUdoBJi7uAXDWFqqZErEyKoGBRr6N1fN56QBNdm3",
  "key25": "2VTSjQfg6vKXDDBhxfTYL8GSU5tkXoHrYA7n34Xq5FKU1LkuhBDCumNZ6sPyjMCSowv6iZyNBkzZxse15kX7cGK6",
  "key26": "4LqWv6o6PdnaZfEnMPwvcMVdevMoQRKajRyB7PDS8fmDDCnedmq32DabJ5dygiUQHnWT56tVn8dXL6jko7RUmTb9",
  "key27": "381XPsANEuF4N8PvGcHhvjzQZDwi7yHoqH9ZBVu2L5NJAxm56azi2zLG4EuopXSUusr8RDenDUe2zK5uLac9C4yz",
  "key28": "29qa1PYFNe1VihfMPRsU54mdApZ79kC4jxE2PCApD6LsRMNcQGcHsGYvJLdD4EtsNCCM1x7Doi17BxtoyVuREAL7",
  "key29": "ysVUYcUmtMp6di4Zz7batXEGj6Zxk4zkgUZoS4p2zub2xKyctMXRYme5J47ySRN3XB6k2Z3BeFjA6iSH8duJWsk",
  "key30": "DPSUqjnPGVxVKciKzSrvUU4S7CbAocK16AsrWo4ffemXxzpfMxtrvy2rDKTQRY7gSw9qMofbRjduB356KxvzemB",
  "key31": "2q1MwCkZpFFFwU72QtPdQzUtYsou2F5um5civTxfow3PyhddLJbjcQseGvHB8sMHEdVdS4Y6hf5KngqMqaRvrZWg"
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
