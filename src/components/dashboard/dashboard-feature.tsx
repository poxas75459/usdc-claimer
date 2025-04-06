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
    "3e5sEnZ3bdyVsyrY6sxBX48s8ugbCLptvNkAxM2H7VBBHJt2BzPtcp4Pp3d5JBEyzkjeXND5o7RdRdKKhYWUFkjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAdDyHwN4bncjMkAep5ajUua2fRopzWQHphGjEcyRT5hMt6MdhogxjkBbTbd988nR8Cp2hv7F9yQGNgHgUxL2R",
  "key1": "4btZ4egtUJUCnzRu8BXkq23XHcmhpQRv9JYQNKwtgCh814SskgobsjzMgDNnm4UsRyxufbDRj4EMHgX7dyRF2ZQ5",
  "key2": "2WLgq5GXQw3NMtWHNgTDonQVoGChvjYgqt321F2xBWs4AJ9CL7jCFZFaSThKH9SBnLT8ohNg7TUd5aFYMChzyCgC",
  "key3": "33ohd8kcLnmXovvCajcUK9F9hsumBKUyiRMwiHaaYtrUNLF6srV2hnMebTJYFuJnhngjWoPhFRE5GLw2FeoR6xFd",
  "key4": "4WUsQNNzbvEUBZzBeF1WUnUErvTnDPqNYuYy9NVGmE4Bimuese8Z7JHd5EVdP2RBGf8G3bm3Jq6PpqM9bN8s3Xhm",
  "key5": "8Soq9PTdce8mUt7YQgFyarwzQ54khPuYowjzHHsTrMXi2ocNtsDUTeptP5sXuDW4492sJPJTXxtC5Ajx4iZPpXi",
  "key6": "2HQ2R4sF2BdsskvYei2PKiFwPK6SvK4ynKJMxB22YK5kdseDdhzsyvpmCr2suR4VWjyYtjRBpQKG9s4DpGTdDs6o",
  "key7": "3j9PJLZ3eJHvTAuZY8nR99wPJ7h9wqxKFw7X287o9mZz8T5S1CMXYG9P6ZDHpRMZn8gucx613GN3SpAEfyJ9KbfJ",
  "key8": "47KmBygGMCtDn28xoeyBsXFzvsg1rQH3KEnJQjVVq9X7xvdGhdHxX2x6YjCkCBXszPvgMFXKHvpJWhnBquVrPeJr",
  "key9": "2yxupbjHf1yLPyweuT8F6x93ikxHCpCPU673LBLKtsfpt3D3C9uB6ck5xKZkhRA3J3X8UZYz5rFGKbo8GnYSvu6c",
  "key10": "65erXjU6EChjihSCUZiUvpEhwYfWAx9drkQJYUGgtDHwtWuQi3HCZAsFbiLSfiPmwEHxf972GYqCSLqRvcMA8AzY",
  "key11": "5HG8vVGjc99RXrXEvqhwQxh3FDwRcagcFQJiPX2bkWBBGfURgzLhdCfzD9N5V62naSpyf68uwPYkXJemcaw96kPU",
  "key12": "RAKMWWbz8DL4MAC9Ad9TYcSgSQorgjvotARBQL5SgdbLTqwn4vQmzbKuqp5BfRb31kEdhgWwYE4DW8yZnTjkXTg",
  "key13": "2c29hzbsgLaw5Y6bEDcdQcJndecQbLzVinhpEuyhMSSXhaweV62bQYbLwrVAkEXsUQnnnuSqa5G4xK1PfZRza24T",
  "key14": "2CHN3VAGiQT7tkgdviUEJ16PRbPVYHgMWH3WwAmFhodGkLiLYL9JzsLXJjdojPvn7bnd7tTsXowkaD83UgeodLPo",
  "key15": "5uV54zdzmxNrTmoQPN9zEVc32eXyaoep7bF6Z279Dk1rcVbLQemxbKgqo8WVRrk7WEyrRJQ25MDknCpuixmaxMbR",
  "key16": "2crSyxywtyjVkhpUnjdW1MNKcpQWgYTbvMpcwXWdksfPAY4iKyLCdeAxpVawEWHn5huPG83ibSvGnHFhmQ8J7abe",
  "key17": "65y62nFVB9nVCkT2fhPDC5BaAXtp8UG9wh3CVnQFgCjB4HBF815yV6iLCafDiSvpcHT7uVpz5JQyPKbdAcur8VFW",
  "key18": "4C1HiPqsQiLP7pyuXRxPfuD9RdqW2dnr97tgdPLTpDbtnfhVQb9zSzjdjWva6c9NTFJN4C285TP1zqZrwpf6jnt3",
  "key19": "2UzstwBvJmZQSHmJegihVoJyzcmXpSZCaoWtnY5TdVNxLo2bTPjnE8vsjbwS62AGcy1Yn32oQ7cPxyCPygND11mu",
  "key20": "558ZsuLckw3bkyTS1jYbMMGWmEeiBjtEC3x3ZXhHjkJ8hx1xxugofFD2icA5WMYfbEktjgvZJ8cQxvwBqMYNsUSR",
  "key21": "4GjUcyYScrZ9fjuSQbS6opobFxgzKuy7oYiwyXCVxdsNUr94zrMCRwQSYpiDowx7M5uKLwetabo4W6RkS9d5k3qg",
  "key22": "2EK66RbmYgzddL5o7dnj1zcKAd5x3pwh5v8odBHQLDohB6uqrkNVFmDQ1na8KMgoHAPZgVx2ooos7J5wT3Xv49b4",
  "key23": "4obuwehnYtSGKXHSe1ioQzTvTjGKzVDDfmiaPhZPqGZ3aauEqwArRMYqXxpJdtQCyqXSu8GYqtMBr2aHRULwuhvo",
  "key24": "56Gi3hDREsnUq8mp9Src6Xzqbnr7BYntkoR3rU98U5QXcvocpHGcYCdGkun81jwRjTMEszwg9pnRcpkHCWCihDYT",
  "key25": "4FJeeeXTmin2wvFNYJcnnnY7GE54qGC9Y37Fmv9ieFoAbc3C3wZUu5yrwRvuheztnMg6HgiyyKtfeHxLhgHqUQS8",
  "key26": "2ew4xNAgrsfVb5ZxALxXA1nfPg8t6eq7552TPYmNzpfUedDDpXnaaNuNE32gzoq8H8XqimzcvtU9fhWMkkdaiPrK",
  "key27": "CUm3LpnMKdiWrAURdfAnVuFQko3V33m1sbNx8exk7uFvoo7GxEE7aGHKAT4jK5CHcAxa9ZA6FpnHQd2dA1CPPGx",
  "key28": "pYgww36MsV1dK9S8qeMWP2V8NSYukFozh31ifyLJarpkwvz6a9pKuDpS592ginVYLAnmaCQuz9BX4SMXHaKVHeE",
  "key29": "2Dsw5CGQRh8ULijG9wzHPeEQYkDHYn6j34PZXZX3vCR86hVFix6qdm7gkhcW9vKFdypuZsTJoCsSV72zw7wiiepW",
  "key30": "8FY9NMZibMSYZqjKkBXLNEMPLDa2mSMvGk9ziKu3gC1aQFxq3u3jaJKBpvL7rV9xurbuZbmUwxJNsR3Nn8C16LJ",
  "key31": "2xNg1pJLmX41crdteUNRVnZuSJANvXnrzWw9ZXAaytuaRmWahtjUe2Do9AbFYRZLZqRvamFdxBGFFgoiDzhLb1S"
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
