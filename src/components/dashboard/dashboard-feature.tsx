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
    "NVwnT5PTKvbt7vT2JGcPxfPRhqKjZsCLAvBYXaCMBFh7iXVQP3y51sKWyeyH6qhykHmsxP7JJXZpkFmurbhGVQN"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "42LjpP7aLAjhZ8tjtaZMkJoyMsgJ6Pkr3qG6sdiyj9JAeHeBKsiAQJvhgxbvYreWesxzePpCptLU3kqVw62AJkCZ",
  "decoyKey1": "iZ6RrnGdXxpktaT749a1LTuLRecwBAd5V1xzkWjTL7A3LDc3MFS1oKf25X7LhU19SbpMhL3GPqhnWYvApmRbfSL",
  "decoyKey2": "2z42e9d3PmRVdKyBYjV4iFTVnFc3fM2gm427HLYfgWUEgbxdAczSHVtuXkavLmfmeFkisLckjLSCUrA87mxijHoo",
  "decoyKey3": "28j62GD6XAmRKg6QP2opQ7AMztwVNLM6SjABUegfxAFa2uzYCRVdunukawbMuq55mi2EehvhMC75iCP1UaT9dHMV",
  "decoyKey4": "3CeFsJ8muDEFi1oE4cPJEW6oVpBKYfcqvWBjpeQRFgbZfQSxfthPDfMSMrGUwbxE3Q2rsxBUSdkaMpcEGXdtcWCs",
  "decoyKey5": "5WtbkCa3NQLMvCUVk9A7dhU9Lw1Ro36JpJRxvwnuG1bczg37HtHMgqZquUiCUocGe8orHNYgoBVe9RNUrMkJptH1",
  "decoyKey6": "4Fo2xJv78U8sZnrFzWJJob22LJxJznrPpM3HEDp1ZjCrCoc3AftDdypVb95u29weBP9hHfuuAXGhMTK8cvm5PTbZ",
  "decoyKey7": "2Dk58TweKAUHGppgvsQmQ7EUb2jWJRLWkSp4mCQWUvaCoEhGSgZyfz98XxRZ2u1678zQBf6UkU8P259UkZu4BLVj",
  "decoyKey8": "5nFwMYfZx4R6dHgRXTT7JooD4bN5cawF2tMJiwyiVv4nDd8r35yA9NWJDsyD857SmW7sGtkGyeSo1zMk1VHuDeJj",
  "decoyKey9": "3FczMfCH9g3jQBEzcUEQAvdFs7nGW6dv9MHBFL6VZJzyK5tURg8kSrr4xbRV3Z3SDrQ1syVrKKKeuK2QD4L2hgcX",
  "decoyKey10": "5yAytXSbKJxfqeTnzpUaw7yx5ihK8hCcdNRYzLBbYQ2rZgFcwHaqojD1eYidoJSPzh41c2j7NxDx4yjmVtJxqgyJ",
  "decoyKey11": "3ULewNg2oM3xPJv4AnpoGRgPDuXe6STmNag85SCvv8Hk6WcuVzv7GuPs2f7mESRKcftMGsoVGUAUekoV7DsdBkDb",
  "decoyKey12": "2BMF1LN6STjHiBjjsbkEDgMki6Cbywsd3ncZkmrFGa2mqNNnhH8FkmiNuQQaMHq2aGTubyTz3HxLi6kokfZU6sS8",
  "decoyKey13": "2Shnf74a4qC87TADUDZzspT7XeU3LftKx4bRLhEVTPRzA2TfWr2DT3aALf629S8UpYRtktUvkvaScnLNQowAPJUN",
  "decoyKey14": "48q1tKNopEAc6Ev5vug8CFK2DtiNpvkUDhHZDTkNosCi8aP7q3nVuctvkMsG88DtKoJpbRYD4uuKtw3WSkA2BwEx",
  "decoyKey15": "3LgLhfzuTXNjygmDay9YsHfWLR3Cid57Y3rv4zXMWdoUdSDoDBqC6gmQLany2ezf5FMomjDpvjkq4JUoWvUmt3WT",
  "decoyKey16": "3kF6jr7sPoW862Zf2Nrq3DnHRfdAvxdEwxHcYBFBr6HYadj7eYunEiHR8kkd9AkGKL2i7SeDQZa6vHSQapNqCHQK",
  "decoyKey17": "3H4wmptj3o1Nrt7KHnWWeb5b9KZ1RW8w4AumEeJcAK8zEzWZajG25kcUU3vR5mrc39vBhS66txMitFEnNG7k5sCt",
  "decoyKey18": "47AoFs4HEdJjUXMSvXW6jp9yYcwDtPzECFozeRDDQbHuxncgmHTpLYFMtMdx9s3a3mWNnadqPMV1K58K7aNvPW2t",
  "decoyKey19": "53pmpRrXPPwJZ3PkxaNBV5osWJnCDcY7uafoFXweFeto9d5wG37w473Jd4dK4ETbZcSvKgQPRbZMR9mUc7EYWLcs",
  "decoyKey20": "4AwspDZBQrGetSHtvk6hBh9JGKMN8YsmqfSyHVaZcbKwuhQGXpubHuLuRf2DMrsjsoZHV8pWTfQrW5EJyodkaCAp",
  "decoyKey21": "2tnYYikWGLT7gQiuS8EBHcuauMsHX8EESXi4XJGaPCahL51wjP829u4QPcuJ8JnUJMhpcdtLeE5sZUKnMky31wYu",
  "decoyKey22": "3kXKtbdeY7UAG6A57iY7VthU8M4VDRXMFSaaTruqy48DvYHgrYuvZ1JfHyAfk1qsEuhaVY5ZLUJWv8nMxLmjHwbv",
  "decoyKey23": "4p58yjX5KTPWZTS4mN575FpVayNSY5W6n3MhVLdFyeqMSgDFaB3No38D8LEBykYLZj1CcFXCzkVQMTr6zpmLXxQi",
  "decoyKey24": "7YFoRpB7jkz2btiJ659pzargHdvmrmVFLWwnMp6CamuomCwmaPPMoxV7oq9f8rHzsnfCj6GxqNUHH1SyKajMVB3",
  "decoyKey25": "4FAAz8CKkXk8FUNLh1Q2vi7TnUuvpcuL3TMYLf4JWQc2g2GW5urWtY44i7Y2z4gejNfZpbvPrj8PvFg3dpLtxMrQ",
  "decoyKey26": "4V7TeLNAk93JmnUN1mK2pN3pxQcrGaBTVpfZ6meibo3x5dQYWN3pqEfwcNwPuKyQfiDKWfJAUARsrWZMLetcKPid",
  "decoyKey27": "29NLu4jk9edP1xcjtS4BUPTuAatKqeNcap3BqdZMThPoJzZ4wRSLzFMdbD4M2oDSCfRnoD9RiCDaeF7s1A8ZTxj3",
  "decoyKey28": "5iBPUhTvzdjdNGssWPW3Abc5VeXTjU6b3EzYsUkGQq1ykQBAW6Ye5mr5HsNiKBE3j3K72NQYSKGfQk8RW95wMFa3",
  "decoyKey29": "2BgswRJ8bkiotNNEsY2m6tTrBNDU11mVMwB8yJxES7Td51rGDi3Vh1v4ANGXEMysqSpvbupnAXErhuthpgCyeZe7",
  "decoyKey30": "2AuwgXiF84v54uTst2gdb9vdYQws3Zd5y7Fy5fdCGHdkfxzoaRYtACa4PFN6iEEsmnxjQrP68uWQXNLpPAsUcDvJ",
  "decoyKey31": "5K6fvjrJ3Jm8wfeACRZnAkRTyhV8ofMaa4YJxGWnwzXmAVxiS4pX5xkf6u44rxeWPRiYTC9CL8odvKtjGR5dpmpC",
  "decoyKey32": "23yta4rs8BWq3p6VfBprwKtYXwCo2sK8aQJhxjeZUDipYyYpX5mSC35vL6A6wWVxg5ovS4QYfg8LPL3sAHdFzeBE",
  "decoyKey33": "4S79DtmQ82RvCn6KTfnpgXZF2EBbG1ZgRNBkFFw8rNKNzpThZLsqpxBn7M3hr6wfgFN4utKnPbbQr5ziVuggFUBU",
  "decoyKey34": "3Ae11C2X2U4qafYFUwywz6wEYyfaKaXentJDcFVtSMvfk7AdFTSfk6q4iNxe8ngdMkrX9mytaHCTszmDzbEpqKjr",
  "decoyKey35": "HSc4CtpbEE14vfnwBc4GGHrcdpKo1MHZG9t1eAe7t1VUWz8WaHHkGdmS66L912xPz7Nd8HKtH8Q8JHHeyym7jNa",
  "decoyKey36": "3WAzJVcD8iFawYY3yuRuys3eL8VyJUdVYyFLPbq3TCBUGCoG1KwXusYEz3QQ84wbz3KodwV8KHpUwv2HJck7qrwB",
  "decoyKey37": "2Pn3aqHTWW1z23KCtn7cJqP6nkrt8rekwXHktqHqhU2w3UzfRgivj7poA35L3sHKrxs5rjx7sS6gLXMRDGyKnCx8",
  "decoyKey38": "ba3Xa516zVb1yVQsDNyCLbRUCtrcFYsxCfoXpoysZr7DzYTaMk31RrMjQv5gDJASw6BiEXPbpMcwCgLeqZMwtdF",
  "decoyKey39": "2G45bGwVtGeCHAZMrEoAqEdQtFZHHeUmwjjVXE3zxwixwHf1ynAAhjBj6iUBP2dkfUFhZYB9Tkq4KHsGDDhJ7qCV",
  "decoyKey40": "573xhKF2MWfKoNyPzVX12vWthZtwPpXH3zKwx4JBZ38xM5WB73Y9aP2ogL4Rhg5v5behWRWge2jwhYZCA2H99TzN",
  "decoyKey41": "4Lkv1Zi52TkWBuWKgawwVoTngjGp4CdX8KEJgqtbAARTrzqdcADCiuNHBtaM1RE9WnW5HBwq7ecTii9iNT88S4b5",
  "decoyKey42": "4fRFoCAcnymP6mRiQfWYqyFuh2FkjeKpVfC4J9PWnsCHW8bPXetyNKdF2jMe3UGwAQeMMyp9W7XY5PsZckAXXyDZ",
  "decoyKey43": "5EbAXA5Wc3SCbWe276eEK7uisZUbpCEuo2YhqGy3EFDACAEhwvRAUNiVXPyDtiZupTnYcGNKQ5tQnnh7Xm2XvmUB",
  "decoyKey44": "2qvggR7WmMm9eHyskPiXi1RauHTxrDY7dp9tbt3mwBM9xUGQqx3ZWTbpLGHmPTM9AQHwjxtWaJwG3bLM2AtRMoFA",
  "decoyKey45": "53nquGD33UtD5o5UeHs6r75MEsxFjNTRWD9MGd3v65errGwz6KTz8vo4CbDZ6qmvtRrMWypCu7JmZRkYbgTqeWad",
  "decoyKey46": "48TPKHMZiWTjjggBMbhgZDDn7T7fLLQGJpGeKgxdHNoqpipi6AAJ3MshWF2BQJT34RjRk5Dkj71fAys2En4Akdyc"
};
// DECOY_KEYS_END
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