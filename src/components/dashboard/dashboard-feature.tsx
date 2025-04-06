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
    "3qDVDBNVV9xA3MQUKB6fyW78Fty9caetbFcibjStnp6fhXcM7Vpi6vDnjtY5wMRJRLNe7axTgE5zucGHw54Af3c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2roY7AaGvfXHfgjdqQR2htgu234wDEQhSgmHkSjH4V1Vj7y9Xx5goNDa21qRsE58qvCDGiNMMGBxMauL7YHwBXCE",
  "key1": "21FJqPEjreSDnbMpXA5df1LJkJvW2sfPi3bhsBtF4cihENAHBCk65uKJDUTdbkhfdrKqyyNAY1KFU4wPU4NebJwn",
  "key2": "3wGxE2abgBSm2UgXbEFZV24iFmGwPa9D65BvKg7jtMsTSdeDpGnAd1ipFXRDRDnXQbmMC1YbY49umhZC1Td7rmS6",
  "key3": "2GJi2cCcWWmTXRfC267ncmqYJd4WW2yakEMHUcnfhCHQZ7VJESm4QatCKytRxKbN8MvYzLhGrcTtc8ui2hhC7G3W",
  "key4": "8S9fpJhLdqHwBCARTC5umNuSCxxVGwRU1sDWKNwLScEjStcrgXEnJFYQdzkh3XLjdM1UGmeQSEqZvJPYRtFo22f",
  "key5": "1NTo5LBcc33b25zvHFht8Qe7wWs4PmtGV4hMtSkxyuZ6g8JcQgBCFriW9VbHjSK3yxkMaguHRgaHpspm3Y24DqP",
  "key6": "5u8tTG6Lf8o25k3Vrs2yy2xonR9HX4MFB3ZKbtv96PyMwKWDcsX6dcBCy1SzMHr2YE6HJ7m9TgDBCzR3d8GAWwQS",
  "key7": "363sHpcoyu1JRn9pbJnFBeo2iBG1HZX5L4aehF9QfvjBBKX3x5PhV2hG2yrYvDx17V959DYVjF5N8y8ccoNRnNfn",
  "key8": "2yDTTADn2H5ZnvuYxrKj3MU2TMxZzTaKodCHtN6hLN9aDg35Ad8BpeEgHmX3jArr6WUtK1ZKZAuNTX2Gv1njnNaH",
  "key9": "3maVM2dFJuaAMdigRGPy8tV2RaKFUve9PqTmd6XS2dMfUM3EHt5oDetVgzsba9Z8E2SWJ6nzUAiUS1ZpabYBx1NU",
  "key10": "2PbBbhf6ZNJj38Z6XvrkxGxrMtKoD6NRDeQ4moCmPEFuUVekLy3e59QfEXWnDsqoHc1tsz1v9o9VBxiwNFxZh4eL",
  "key11": "3MPuQ7re2m22kfvHuVR4kmzSuAncEdvDokC3S9e9rzibQmGY9MAJPxGAdd5sRfPy6ZcEht2fTZfA2GjX5HCr4UZZ",
  "key12": "4V1rXKAcYbnTJtGsgxxLvSPA9KdJhxUcXbyT81SNA2VVAMNSFbYsNRsXd6QCTUAjSUsGX8vaj5cdijvsDX6q6wZr",
  "key13": "2qwWq9HLmvW1RPikcNwpS58E4UEZVJyDpXWTWUQZZ3N6MdFQWUiGbFXwb8dTNVvEWcgzzrW3NMkyU69DVPpAiMu1",
  "key14": "41zxD2hRfXytnBruEmraph9MJPXtovH15ee3xCDtDLyS6P4T8Fkzs6bxxvoDJeUHTodRFChtcUiGWicBaWE8zC7j",
  "key15": "ekRpWSq9Br2Bgotvueozr1Pr3tHWpRihj99vKZpgFqMJsmkUWybkeQnXhFvUzJqXCk38cYRksCv2sRc8wVEwKqV",
  "key16": "63QKfb7hLEDLhJnYDHuiYz3GLCzxgnLXXuqXRjPqrX39W4jDehsksKsGHo1o1BSEXxqfKodzFF87w8sV1Zm4fkrN",
  "key17": "sGJ9SR2arx2FMoHbTwD9phs3buSF4o6sR99ykupVEZv26ZHmgDEBfz373bu3SHNc2WcHMgGkHzUG6VJCVaNLLXg",
  "key18": "QsVLPNLdzJXxvPvnJk9bs7Z9ZDqurNmbTqENfr8oz5eq4VzrY413LupHRAi1V9egMHQgEfrGYRN5GbwmjHKtLZ3",
  "key19": "4Z3Qi4hiMtdVLLZCCqtjpYZT8xJHv4e7dmM98zjkvmsP4FRxJtv85vaWy3LSTEzVVcbnC3s8THA5jFXkYHjZD4Zc",
  "key20": "4hyZ578vohmu7SAThEuDAPHxatqxkXjttmk3QiwVaXYY7XcSCDUKDz9uH3BoNbwhXx4y8M7YGgq139rcQTYGBDDD",
  "key21": "3HMhkrgBKrPN8VEPRgzRV2oak3ALnscohQqjogtkz5RjE1tCW8q77ZVp2KCyUjQaxKxGRXr8ABdRPadRy9R87dF3",
  "key22": "5WYF2EfrA22BnSRqZCS8mFuP5EuwQ1bWAhEQo6uMFKGyoDZRKvV2vy2AacNSpncEn3F51Xp56y2zvHR8tWcG3Uv5",
  "key23": "5qfv8CSHyTiTfP4thppdeoqhiuLDxc2FZVWpfrrafRFAe3NJpdjs6arESSXxmHg33LJPMx2xpvqiv1Uu8mkG91m4",
  "key24": "2N2Qx7uA1k5dhbzQTirE9GetwbFp8mvtepNDs6RkDQ9Ma8e7SBPqnfSFi6zFD1QbobsMsL6m3S2jBQqGDDJMv56p",
  "key25": "3BYB9qBnPyEuVozUQLf8xtPmwk8xCzB8e1FVAcbD3dhzEEdyjwFSFGjpVYuCtpwkeSDrjXsWBWxzvMSrpbSrCLoi",
  "key26": "5LV9fy4n4N2jUbibiLWgsZFFZiUmkbN167kL1mk9HqGye7ZpZnz3JPM5qjgYQuoEy1rsBJvekZ6DvWzq7hb1Ubcn",
  "key27": "3WHwmGrK7oy3HVgFNqxhtNb6YPExzxoz7duo5cYVFf5sgunHVoP4e54sNszTxp7xwkx8yMRM7JeU2XKffL6LKTr9",
  "key28": "5VaGBRPdqbbSyBms53vVnFtU3hcxx5Qch9qMyMbVqteXUZ4oS2VbNEQ2SU1o69J61QCcCp4vhUmE84qqgGCeXUvV",
  "key29": "C7gLvo8YRENcsatazD44xPrZNKZpduZXrao1MvAXM7y1CYeGX4AfMGZ2br9gnDg8nVCtsU1smfgZhxufHG7sKfs",
  "key30": "2L2TWnTzgNKYKuMPnmsjH2h9zRnZ1ELwN8zWV67iZzkZCFsdPrqQeVwtSeH9RbQtXK7hcykgyEcUGdcEL7djst7w",
  "key31": "Y71CrzQcHty8DuUydu5fJAvUir2oMkpehFuxDkGGpSmGRcqqrPCH42VKZMSs1ijBEtvZdRvGWGTSixS69Nrzxxb",
  "key32": "5ZNoaWtVCyN5PorCptLKaKHZLoT5NyJhyZLjVLvfdEpEhtKbZPb56Mc3aG6CwzCzSBj7zbv5FYddGWhrJPvbChbv"
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
