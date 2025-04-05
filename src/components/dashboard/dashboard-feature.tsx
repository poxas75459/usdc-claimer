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
    "4C4kBvyFyvQioKR2hmgpCCA1Z13pmnKwY94ndD3QAGEvXQxsA1izSWzYd6usWiCjmdH38jezAabZoRzi4rVkxQR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqKhVBsxraudDKSGngNy4mmXH8CZ4tssDNgVwmtgMbQiWw8nH1xfmNd57kgB6p2KzxL61eh6kUj2PWFS3wWE1ba",
  "key1": "FZdcRRMcjnoWNYNyhVB5vSw173KA4NucKUti1CdgBzQt7ePhJFmRZVuMB3exWbe6feYCizR7JtJzUer9doTgkcq",
  "key2": "2EQrCbB37b2i3q4iYkSCQoe4TW5bDgsyu1PFZy2VSLJNjP1M47wXBqAqt8nXECuJGiHEp88EPpxEtgTnnG199y1x",
  "key3": "2oCdRfzKR6WzZEg5tkqCn4dzGLaBLD9F1FZuRA36ZfFfy5ghLc38NEvTQRs2e27B54aU95mvUtPNfvAj2r6Wbi7K",
  "key4": "4biZ9uD1eyajTzLKTH4iQ3jsTdPmRA4Qun19JniHDv1V1NLhg2Y3zSeADCiGNbitZ9ToPA6tBTMGo1YFX6UwqyRE",
  "key5": "3hByHSSPHhiEQLQAKjKkgqrn3wWy23VLW62udLJXj39DWssooBupMip411BVCCCS7vND72K3qxuap9LmA5C5oXPN",
  "key6": "xChGFqEGw3Hw7Nngxmy36gsinQY7oLP1UAJyK7vsAaG3V6YiMsZsHZyDSghRRosuARF5kf8uo9Lay7dqDoCN3rW",
  "key7": "4imUMrv2Zg4swAnPU169BmMon3RioPEG2oQQidxxgcRMaBSwkRUX3DJvxqvzs5MNRg4BSWvtd8NpdeQg513BXKe3",
  "key8": "cyC3Wtb22JoeWyyRM7cAjHaqyQtfkv9MMkiQw83UpLCxUtkN4efndWULyXN68x7agwwG64orT28HZPaBEcPD1eh",
  "key9": "4twznF7dZyb2VPQwwbBNt3nsEMk2AHHUmmv5w7zB8nbDpV8339h4vjSK89pfx6zDfuY3b9YQ7DZVrFxdYijp3Wc7",
  "key10": "2BMkkJuPVtLUf5iazWB4YESJuXuDqH77iFDtKkTn7wK1Goq1jzQAZpviR7VCrtjhgcYpqnGs18nMY4D92DdcJKHk",
  "key11": "zJ8do9L1E9T9DezpfwGpKwfuK7UffNmRPvcSRapKZaNbSUdCRRPkbapYjyb4wTAS86QEB328pEvQ9MZjLxw5rvN",
  "key12": "4Ky7YEqUWBPukbyQtEVx61i5KKsZ9wbEuB93m8TLZC6QyDZFApNFrripiyjMwicD37o5ZPwXnnKDxHNVKoEMimVX",
  "key13": "3ZWafbGRdUPxK827jxPA4tGP77vpaZsoDQBEYat6ogUnWUsYfGZvh9aNWxW1u24YVTRrLmzig8t7rXU6JmiBjfAR",
  "key14": "2TrDJX62whrhMHD9cxRVkVD5euQHYPcaZkEGdyyTn2MrBuC7SmbriNv6PpRU6m1QcnBDhG3Nh2aZiBbLEjShB77Q",
  "key15": "45Jz4HTYFAhLSteE6bz134zcLiLLE7fX4ZYurPvfJT6rzVEqeGjospQsBo6wSLTiBw6fq3o5FgWSYnsGwPVbwNFQ",
  "key16": "642zT6eM5cZ5tXAtiLY6FnAVQyhLYDfANbdLvk84XR5m7Q8Z2xHVuHGoavsBshzgnoNMVprX6bzL6wpceHnbZYvU",
  "key17": "2cvNLAYcArox8QRBRmhR5d3npH7FTDbnFZsQ2c5J11yNkUnuCvrmbHqgt6tEy8BKwJzc7eEPXTmujin8bWqdfhsX",
  "key18": "4tfYPzyWURb8Bae35hfTNcgGDJixob8xY7jESDsA6TZg4akSpF7gQnDYsKD6fY41vSXUjfvoaTm5hQxeD8e743mR",
  "key19": "56mNYheXopXFtjRKjAU5ZZev5MXCbSFDMYAsLKwvDaktKV3iKiEEBhrcMqk3fob28XPnMBzVfzgsx4sRzaJ4qAGH",
  "key20": "4mJAMyi6J9CXFa5wRPHgj7cdbs83XZA6RH2URTyk5AqXmTvPPFUoHM3gT3inqKjNSLWtS5wA4DLzA29E2MYP7im6",
  "key21": "2mZ8MopPKoMhkyBexWYydW3xZSRgE5Af38ZH3ghmfrYN7VVmG4i863zzAeps5xEFkmd7Wxjo1hFoeFQhvWFcSffT",
  "key22": "XfpboVRxksyHSzT5YFmMSfQQ9zWJpvUGVCdVm64ysocZFhQkwuPVraXVKY9Vo2r8mPAc78VmQyHQk85W2o3f6cC",
  "key23": "5HAKUNbvXEMXgzhuoAhrwtcGgxjZR1ZiEQ7JUmKT7zggHt7B2TjT2H2qkwUSnkYFoAvjcXkBqrU2VJsbuApJmv4V",
  "key24": "3YRT27LN9bejUdeWepeoC9KSAte8xRXTFkTfTPUTucUeR7sPYYmaw1jtNGq7FkBmAY1m7SeU5aFUxzix5KkuwD9r",
  "key25": "5pePuTR2NosKjrjZsgrzKMJkJAMrAXM1ddSZMPjK9BXhKQ6Meac2PWVGzuYsxL1AQRB5sye3EJkr8YbbyYHjYANn",
  "key26": "3YWuwt41SnXmiyHWbWUVY7x1dzjwNGRnV61LPhoCsnfrmgmrbEXFYhsv8HMcRw6qEMjz6L93hSZM91XFd9JjLMg4",
  "key27": "5Xqjvsvmzwkp2hwgR9eBuvjvgMjiMGBCaQeyb2nD8BkqsSGmEDoSXiYrgKFLN2gARcJiT28ntS2rP1FyyBszZzDY",
  "key28": "4wfDmCDfU35Pxkk2QYWCRDb6EvCkLKtLj55AHwbHL5xJhAU7hZnBxNzSqhMyXsEzQqmFo4Ja3QbyKC2ZF1Mex6HH",
  "key29": "U5TpDBtAPMrQUN8rusMLj6WSBcJrJjoPoXzv3dAR52c76KYo6rHpYADDVrUPAM2nr9Xt7xV67L94BK29nQhjZW4"
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
