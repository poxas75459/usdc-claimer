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
    "H5tEEw9cigiepnxmCnjCz9n47HHbPkj9CdLSNZeCYMfXiFHGhewM3vPXw7YCNSBDCBuGtNNXGemg9ArJjurLSXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3d1X6paGDwNN8VgGqYB6nZUxsAsJJ6TzXRZHXE5MThTvEV78D7vtrHz5UkWg39qpaAAk16dNy7UAgpgy83HDp1",
  "key1": "3LkXjM4mRb8LNg6STsNpKcWMUQYw6sBwV6QLcxtHGHjPhwsLwGrA8jPTQ1JxGPM6GFU4ALqhtgEHmREfvSpsVvVT",
  "key2": "5xoCw45K85DdWDtCp25vGjQBNmcbsTjvXfZFjQwqTHuF1BmoTykwsGNZxVRfJyeXMgFcV3ZwXAg5ZbDXLSuX9Cbh",
  "key3": "4FcVHCXyjhE1V29Dr6vwVrMxyZ3Q6WBqfH7yLdUjqKWg8xfkPbVSjXEijr76q1M7TNCFPoM1eJadMpyd8v7b7AdZ",
  "key4": "3vLY96qHizrCwz6iVndCTaSe8oCVoVc9gXsjMYASA4Kt6A1SDK39qRcipLycY25LmjQzHY6cY1Q7TTLiMJ1vSd9o",
  "key5": "2wLJDaXHfVamMQdguXMDhpD5LJPRC2tTkoV5HG3XDWFVDJnFxHNzy7J1G4LCAo3xQAkWSbQrA42uqzfKRpymQGgJ",
  "key6": "ynGFVTnMNuaMr4tEQxLtwv41cgbzpwQtHXCNbsCnvRENVuX4GU3tkDyYcfQzVjUForrdV6WxnKuw4PTAAf62sp2",
  "key7": "2DoKBqdVgR8jBHQYoJL5oo6qh5xLy5jMtG9t5a7VGrk23D9R4rPHdKxMaxfTL4a4PEyhN78C3HXe1VdYroYDfmiZ",
  "key8": "4tUETSk6VnoXDgTSg3ydFHzQhcxVKTcNeUarYbuXh7Lvc3RMVHXq7vBpk5jTUGD1izs7uPMZLp63wWgCbm15zzCo",
  "key9": "5XervarSNHywvcNzPZ24Wyf3qWypS96iWSQJZcZNQxkFMBpaKt4pr69acyReEtcfwbHvhm8ZB9U7bNw1Fjo7r25F",
  "key10": "zqeNEk7yheFwgASiyrR6GvYj8FezrVz9oePNpqSKGXAnD45erJmm2jvNz1syU9jbVMzHitZzWq2q9pKcwFHoDfD",
  "key11": "5qAWk54gTAzBFtPM1XYn598wcoLX7B4L7pAoWkzxgA1gnjFbUWwXemTPMyeK4uTuD1RbDuxYrsXWzRzCcocga1T1",
  "key12": "v3FTbyfEUQf1Xsci75mF9tmwj4mTKUCZPWYQMDU5RNa5rJ9NmCbicFn15wiPGP96yEWw28vUKUGirHiXzr5jzkf",
  "key13": "LM7fWX3ySFMvoZmsyF9SdaYd3UZuf2JGj1jkGLTYbHLMbWgg8A752tWvbq7g6ArZ4ZfgnJrYTcmg1v4TBturs5J",
  "key14": "yMNeic1Z1k1MYzZZWFbFU2gDx7tz6LQuuTy7PcZFPVz7w8tsx4L12KgtZ2QjqEFp8VvZAGDGkW7CLeGfy6qC1a5",
  "key15": "e834qnXvkk1PMRNQoxvwk3E9z3fbVaJfMCCdVN83xmx9QMPjrYBgS4ycj9xqs7vAEi7LFPe5H9gH6gG6hs9fbJ9",
  "key16": "5jMx2DbCEtheLfhxEgg3YgMCKGHYzVTfBJSbZrNYwPTy9kjJ1mDEsfixv6DnMXSyfvuYz23CgCDJzSkj5vLhrcLL",
  "key17": "57uuao2e9yZ2c5BTgQt6HTdMqApuCyXWhncg738XJdgerSPrz1JhtvXGxy1auswkk1kVf43psTnsf2KbmttecxiZ",
  "key18": "2NTJjU22DWVRJxowFgNadv9PWjDWHuaQCqEF9fqDPbJx8x7cnaSvxUxSS67BpvNMxxbU41fnnj23iH3dioNBA7BJ",
  "key19": "4aAJoHitD9Toh3BYEnr8xAdCFWUncmSu4qVXn6Um6fpgcaoK6Q6AzCaHTmz4wswmn2oZD2F8zmVVD43YWmTEpwMd",
  "key20": "Rvmwgxr2vBichsMNfsJfTdA3vfXmSAYuxG3xmnBhDFgUGHgVnYeTiN2wqgSkERBHAywcqXzcwpfrhZZeRL2nf7z",
  "key21": "3jCYsb5iraXttqypGDLFxyGQLGk3x6QTUCH5X2XNiJxAmzCFQLDGVgvWchy4PCfc9ZccCi1yNZhwHe5uo4xunJtr",
  "key22": "aJKrQUoLJoGAivCq5R45kJNxr4zBusR884QkmiBnEqiyiECmBW8nPJi9xocnG8yB5tkByvWbSPLz35mwRFGnTRs",
  "key23": "5WmyGAdaxk5HuRWyqwaa7pgjNrHZzHDJWUtfHZC7zUrpnm8m6cBX1WvB9USSs1ZSvhEWeedsGuPNAjgxoGgv4wGA",
  "key24": "3a5gwe8PTuFnhMQWopjW7zTtNowtYJxhFDXmnrZPCZwPXzc4uxqcqd29Wo74bDgsyX8CzGw3RTXscb3fQ6j1rdrC",
  "key25": "5b78fLXCRNqkDoeySL4kAfEeqctSxCrwMr9TnZXwwzyLHEAF2poJ4ZU4x1qkcjdUWvXR4wx6crKxF6T9u6r29fb2",
  "key26": "4VrLdYYpBigxscqeQNkjHKsDL68pabE17639rZ5JiUKPNoDLWUoKMeeuCFnnSByCNHkmyD5hHatQ5L9sZc78gGse",
  "key27": "4WdzKndMrdajkjfyCKVNgrWdMxYjrLXJhHSc2kT44FgXaAvEEUy4cjAvT3oqqMuabVpoDAz11gciTsnzBAqADhWi",
  "key28": "3Vdw9XCXS2mAb4yqiSXxMWPfT3BWyqjKmxrDaq1jw3zsnp4tRnrgb4x7N2MKS61ojUYfhfrFoFjmw1HGCGS4GoB3",
  "key29": "34L7hM68BcbR4hCvXQR5xBb7Gfoz1xkAn8xGSEojqe8GPbLmYX3cbEJpmPofM4kedXfHkb4dHpV8reVWDzjMWpD2",
  "key30": "42Cw2XKCopJjge6wc4RK6aqkDprqPkM6oPep6TWNUd5SgTbyFtfJDD4gJFUme1v8TsWa4NGLtNRK5NcZe3Fkg4KJ",
  "key31": "4uZU86x4z6qBDg9zYgVcpr23WyCMKAf91CkvA6EC9P4bWtND5XRBTzu3fuE7SxUJbz12d67huiqy4zhuwjj9Ff7",
  "key32": "5u4BbFDq9UM5TYFPugyvRKBJWdTk61kKL2LywAarXQzku6LaCWBVCVQtRPfv589EDoLJ4odYG4iUo7Jktyomb9Vr",
  "key33": "66Ku3qzchdUQyV6xRz4zoVEmHMPtdqGXbJHdSMjCyWX7TJKyyhao3rJeMUHZg5EasseoR7xHNV9zhm6aFxyR1tES",
  "key34": "4t2AnFYeU51NAgvKstuSzRQFkZfNU2wMLYR1bnqgQG8prdqnXsQKLK8qZcYNkN7NeaNJH1D1Sr93yTLHJPbvB53c",
  "key35": "5jETWPSxzTxakrxwcSEcc8SAitM7R5CeKXcJsjJBaizwjaMgYHpUpVrEeP7J5SNUr7LGRU7vpDnwxwoPDD4y2Gf9",
  "key36": "sgbfHt3jnzMLEVA1oMK5P1oVewythgG981pewbVn2xSZ9h9P55aT1DojZRC2Xk4zg6NrzgJ7s4ZpCiqNLK87RTq",
  "key37": "AC4mj27eTZEi9rnCA5LVPwV3L7Xu8NXZQfNNeuttZN75nNcTo2ozcovueAMcxMw8vCjKMA2pWwmhJ6cm4pLWVAQ"
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
