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
    "3BAQkW3Mx5ZSvGCn9BSDghqnXiAZByjgPcY3vU5iMrvjSSdhm8hFLXcNpivyhC4Ck5Xs8nsLNSVUHtRGm3c7eq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RFSMk6d6PkKNeZuEtDvzPxK3wMYUpogKJfnyR8Xq8U74XCjrDqqrYNef4XmcQFCbkw9pNckd9c3s1GGjHGAXc",
  "key1": "3WMVSDDvXKpnP4bz2eAsmLErKuvjURugqWCJ8TBJKNunrfB63JASd6bNqvUvQoNJoEcXycKtbLpzmXGAYttGQ7bf",
  "key2": "51dLsfWtyiUXyHMAXjdgB4cQnbnxj6Z2AhFgcTCV94JHVRVQRWrNVQUHEh7CqFg2LDkyB6etapp3gdbBDhJ8hGiZ",
  "key3": "5cNdxUX4c7tQqrB84NZBSLa4LVjSsZchF8sJQMAiVELt2kpjPtBVU7SyxhpuQcxrY2xej3LGeHESWg1wHhNLrEJX",
  "key4": "3JaFEDHEp6mjivsZ3FTuUoGf1Ud6ekDnegmc4F2owL5NmqyuMqPZ4UcBW1dHku1p6ZvBJMFnG7vmAKkAgjtK1KFv",
  "key5": "3gTH7V2ALAW9JTyqmTmLrqkQonF7FjQnw98EuPwD9dnAb6qhfu8ZTzXNjSS4fEzY4eJYR1McS5fBkiSePiPpiy1D",
  "key6": "3piVYfS5CYBPrugJ1dPv7qrDstFjXeo9pmy4VxxnjWZchoN5scEtFLYZRq11U7KuHVDE24mRg1dkNNzUEJkE9Wt4",
  "key7": "4bxKdG6mf4RfW1jwV8sbnehPGoAV4pbunHr7DNPtn6TzzLHPqNvWT5u8oEhwPLTP7bFNtbiCbMiBDCjRyxxCUYCi",
  "key8": "2dB1ANwhVJzxrj39PCKKVNjjZTS4Ft66Sn9HS2e65dJ51qCzQUgKXvKP8NgonrzzebSvkmNYeXLztHBjeCjhN28Q",
  "key9": "37bzSWcNkVR25ZEt7Savz2jzQATSWzx98v7e8rdLu27zfxjSir5CVARqRCKmTat7MPk2aQoQizuT723sHm5fxVio",
  "key10": "3FShb5DMFBJbUcNF9XtTPg6fCXeHce5ddkmTGXT3MHusX3Lbqo4fhNqL7E3wn8JH78m2THvrf8fH9tgp6ZthymV5",
  "key11": "3XAN1cTUZVLFS3p9KRYXKwF6RuzT9B38jMkoYwreotbmhoi2hSnqh4vYNEbHEpPWQRYgfyic4HpTvKWAH4EnzvoR",
  "key12": "Jq3TqfHLERXZCFqK3K4fHRAULRUenn5K7vQaZpLv6AGELWzMyjePB8CbWbguzfayftXRptcKq7Fc3dbeu9r9sZx",
  "key13": "pkBRjyKhEW7g7cBCT5C22zTexUqu6Mk754V7X4tycxpYmEb3zi8aprAm7rHWjvqCbjbB4xMzdEzuDvedCjMsPQm",
  "key14": "4o9rJSQxxnfKG6kwoGM435LmJHGnbEScPcdgY9GfHPLJvP37GE2FjRMeAPbVPN4eM7YnGj1C5g5TL5U1vdXsT9uS",
  "key15": "5YSJRsHxKgnfL2KsPYetxcbmYEELb3QN3F6nAdBGYwFn7TJbi8WiHMV2DdpdkxeJu8iCHFxUwu8HX5CkJPr8jHwq",
  "key16": "5xiYhm4mMvPHEKojfh5viMvktHkWQ2DfiYBqQFv3JxQdwXH6vMU3KaR93GWcwAqxtzGP1XV2oSTJfZUsWkwPKTHN",
  "key17": "ZH1VTQP7nC3YiT6yK59dTdDmVJA8iMwrEokKJyGKqd7HmvTjvsTS9SRqVVkN42mzzYpxYKUg4iQ1phTK6gaPiNu",
  "key18": "3Lp5EYUSGkvpdUScYUzqk9bWyKprzSeJg2Ftg1xFdJq1P2ft93oZWNg6WQfFKkqTSFpPTZxqyuo8PyZkZsYvaH5k",
  "key19": "3Hsbzv5SiXrz13cS7xfHne5wjexajav8RPWxBD8Db3Qub5aibHhTcScEGET6aD7NH3aoASQd689XzgAGR7XBVxDc",
  "key20": "ai3ezNoSbSNKeSCDzahemnwNPgd1hXm4gDCcBjQTjjTitsbZNPTJYYE9hejiTzU69yfBGdetLTxhJpp93eFGMCr",
  "key21": "4uTPUD6JbsooUSzey74KcLYE65dWdniXpY83reCWYKW69DPAojZxtB8wQYQathyfevTLywe6YQEXfigvkJSYnR9o",
  "key22": "2Fs2yTge3JStmFr5koB8tCc1Qi1FneZb7sCMsHKbLmUiYfdAi9C7rtxmTiCx2cvCbqgsBsjZbiDCncbstTd3ybuG",
  "key23": "4amneQ8Yjf3XT5tTeaZwaw715CcKSNDg28M4sx36aFmsn8nkugtQoJL5rNTK6cG62Ha43mGb1Jm7PbSJDuJJ8H2n",
  "key24": "2FEM6AKPY3qP7SwLpKx5qwqCaG7nPp7G9fjqyHKgp8AnBu44apAMXLL55t4ijpoE8YXNAjH3th6MNUqErG3Qq9pR",
  "key25": "644wKtAawBrzdVfTuYFsxXMYpZnanAMRQDJZbRshbFWvnnW34Me2WiNsqrzGE5zNYWuaMuqyskPfGPiaSBiXgHBj",
  "key26": "ryWCaUwr5TaYh7wTVjoCi7zyw5RAbsAu2hR6kSakyVbHq1hAxTYkNwzBocLKdc9NjJG8kEV7o8J5P2iswAeQSnq",
  "key27": "RsYW5bjXadPpy2zqQ9NUvzsVx1qYd4v8M29UmkAo71UfjMFcRJc1GygokoaeHtymKrLNLqKa9zF817oW9P8TYoM",
  "key28": "6624RxyzJ1jZ3y8S9dQJuF9tFA55zSDpRNYhajkFhKF6AFebYXqfXJ6ZNVURKGbWzHchsxC3xRPqNJeVL5zNbxkQ",
  "key29": "XMrPiKXiW4zAZaZNx7apsmVmQuqrttkLd7SMzeXGXsZ3KsZyvNiyosaDzzk2DQ8yPjNmqCs1SY9pkae8MuKtZYd",
  "key30": "3KnT8VmazXTMLutWAZ2SWWBfdMGiPkGaasFhGAtbU9sdBF2VhaWKk2eFeXBNQ8bHz4Gv8EMuWZy7uZkaQ1HJKe9g",
  "key31": "3urZcijiGTnz64jjfL7kGWLLVNAGHmJJHpMJsW5M9tkXbcaquvVee6fTckLQKbWEFhJidgFnYRFTzERUgt286sRn"
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
