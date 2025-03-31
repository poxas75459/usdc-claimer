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
    "5hWPrnK4eCW9xgRw97nEZ2h22F3QyxFJLDHwb5qtYADreqYw2wWrTUiHezqbAXPTshpUWufd8YRM742mh77qiBfm"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2gtf7b9mzMErjAq1C7AH18S8HZT5LCHGWWJ1C14XJ4q5tpX4osWCjSEjs7vD81W9T6BKpD2zsSpeyH8grYY5Mmw7",
  "decoyKey1": "266At88WRhR3x8yd6KM4Ts1bKtmQrvxopQrzCG1BpHXDMbBWQjaAjRZypTswrYN1gioKS2h7WSv6Nt5RWKkJebVm",
  "decoyKey2": "4TwcZuDmWo2vzwaeHo3fUdFNEZ7tJyMPDj99DS2XGN6Ub8XcSkx7heksdpqAjnWwkoTYujtQ2oqrMj4c7P8E5eJZ",
  "decoyKey3": "5t9Z8un5b64qyiCAqrFVFwCx5xNzTGMyaWEqYoaf3T5XkHrYG5u7aDa7U9UXMap4p96VATq9D98Y4amYeKKkYLxN",
  "decoyKey4": "3xsDTwDzKgaqzCPV8chiXZEPeKCrJPtsksyJM37WZKzjGY6iXtsmWL6HX2AbCmirYQVEPJzpQp5wox5C4TZNbPzK",
  "decoyKey5": "2NqPRnRBE89TFHRX1njuzYCAH1iadvDyKEYJkdUeu2ak13uWuYd9aFwjnJMxLiMByzCQRKPKqZ9Epz1PgKaNEWJy",
  "decoyKey6": "3SYqYcGVwrweokt6s8SFvJq8EqEcKfw1xCNMfyfoW5HvJ5mWeYNPkDonC9dHqDTtqsW9jx8Zz1k91RzGu3ByCx1V",
  "decoyKey7": "gvAx2eDkNTZq8E2rZ3YzURgBQBdcH4kiXVHhbSmtLmEESurfTaQLFCQ22zmaSGFXw25jhETdtdCCR4FgJseLK9d",
  "decoyKey8": "5aLgYp6iW7Wdx5qxKnopzJGXFJgR9X9yAwRkQgpCSV5A4N7jiovM19xeGMHmhr69q4bC9QtNCZ9qYNM7k5273989",
  "decoyKey9": "5Hpd2yFdom4HQTspuC2UpWwLJ8j1LzNYaEyomrVMhVTMrvZCZuJjQJ3G3yA4ag3WnR8fzfN9En3qgkRof7gXeGwu",
  "decoyKey10": "Lds1pM5LxqbUmSXK7Kmz94iYunmzabff9odJc5tNPbKd1ppauY3HLMUC6ZsomxmDubbrMeCvdkypkjeREyWPRwQ",
  "decoyKey11": "BWMqTpqte5XFrYpB1qfgu2rffvoHVqF7S1crN8m92zauLKJhsbW4fCRTvfNsZongP9W7HBUfL3ALL7bR52bGPtR",
  "decoyKey12": "2QnnuET6hYtkaGkpGRjdmLpkchCCHUV4mWwEe8vG654gfHvF7xRYJKxfr78EJBHEsk8HiEH4mBLAdcfs67vhXN1r",
  "decoyKey13": "3ohJrYtXr5ZkAjuFJpBmiEfUbpAVPfAk3yzB9zL2X5P5J5NKhwdNL2jr3hKRvSSbZydjyT9SojrBkmRAgaCs6kaQ",
  "decoyKey14": "3cuDxn2nAvuAo3Kv4JNyNDpCeDEBCXLanSP9dD3pXAyNdVLoK5TMeQ4iJzk1auhc7sPcdSCv88cYSwPNtVersWWX",
  "decoyKey15": "395wydbV4CZwzdPnzED8PS7DhmkjQA1JHJHaGFuQLhwL34C2g7PzhrYwZimSFNEN2PfB4VnCLf51mXaANxbH1jf6",
  "decoyKey16": "2iWUQb5FYKaur4BfSBfP3RTtzSvb7cCRMJqLbYfeQb8x8crB2DL1ojcGSphoP2GQ6SGyHznPq92PNQe1YTpQJ2B6",
  "decoyKey17": "MWXFmEapehuc4kveeAY6Vo1yXz8o8BfG9UayAbYH4PK6GEpDHByd2jg3p2msNGCjZk4KKunzDiixbmjMLdGAxac",
  "decoyKey18": "pWTPNkQGG8dkus9NnFxMHMgp7U67Tg6LzuLphbYANrQFbDukhv9YSTUgCZJUuGHrrLyzATTWtBZUnhmYbxKGuXs",
  "decoyKey19": "5gbeeQMf1SinJv6oXtXr9ofy4uegjrWhR7DFprKgpGaNRAFe5qdtpWxr12gcUDnJWzuZA9qJvUNKszzH2jJngSvT",
  "decoyKey20": "4Xn9cVhbi8MWaAqDPft1DkNeLWdsrrtGhKQNWRydZsbKdNx3YhSX73JXTzBidxXcrXYAJX6BKGwrtwiyVQek8boT",
  "decoyKey21": "2xtrd2wT1Hp9dy3iFHkhFXUJUVfokwdBLfLek7AiBHZnJJePbp1yMm4shJUbnMuri44wK25yXHnEwtmzkC5K9wRq",
  "decoyKey22": "57Q98qj2tjJ7iDfW5oFgjDjfLvgp5rdksDhUdkK5hVXcBdhqHQ5vmfLEczAGo9e7uYL72Pox1ksD21DDSMAnHsT4",
  "decoyKey23": "3qzcT91RWyfptZ91zuxRoyuLRpVaDpfSoL81Smminvnfg2eU1pydZJ2jSVp3EexqFUcsRxB3Z9cXdtSkEtaNtQvQ",
  "decoyKey24": "5uCmFP9PAXWZA3y91YYz7ZuCGTj95pswAmZTgeURMV8WL1a8hWD7NsnSZNNFFawaC4Pagr4UG3ws6WPRKVQCaSsY",
  "decoyKey25": "2BmUDDDNdhYYrRdwtxbHdSCSJVRxG1b9yKyDU5v4icTs73BpDZbaRxRSmdqnu4TUZTqgU9pAbWa4y5iRbvgCkz2x",
  "decoyKey26": "2YdXMJeF6txwNKPzg9uGUBkf8DLucjV64DgnxfVrPv75w5FnLNzxiwJ54v1prjcdRun3USneSHTguNsii4LbfYLT",
  "decoyKey27": "61bFzSSUGFx8f9wUBE4eoaDkkQcoKDHsdDK4mKb3UGdcbg6GQyrX4senJQzWWKUEgkFHKgCSEb62i2p9P9C3Fcp",
  "decoyKey28": "5jGCgos8wP8Jnt25zJBisF7HL8Cg8S4TpBAencBniS47h3VxoM3HtFWv3WhGhDGJiLGWt8rYTH5oQR5qAkHv2GAV",
  "decoyKey29": "26Z6WGRtn8khFAEFJkbFM5hZTve4JQtgMmuqepzVZrPwfDxKgrpzD4r2FyUwwwHtfaETfTZ1crgVuNRgotjwqWS6",
  "decoyKey30": "3GeTYHTpruSvPCtMd3uSPiuE9ASSESyXV2GSLsPsRkSySAqJ6kTg1VpPtkJigx33CaFEsysCbFUVXBEEADD88KNK",
  "decoyKey31": "4SPms69nTxHtfa5nbRG16twri4NPqVLkq2X6oaoa576xyd6QuBLGA25aPHi7hKsRqoQKYavkHJKYrbbSwutkE7As",
  "decoyKey32": "2vS864opSTHbt685bfZt8TuattxbZmV5WzF639U9cMubiyagVdjpvbjMtP687WKqjksWG478ohuhWqoj4BrGAaGg",
  "decoyKey33": "2vGdzWPFCo6FmfDuBWZykxUQRTCDJnqCzEjsHbbgXbRxcBfgF64sPVJhYaVf7h1LdvLRcTsuAhGR6NtYyAR8o9cf",
  "decoyKey34": "5yfumnBNRAJxafpBWvQhixrvaM1aADFUqhKVVTkFKSn7EquYiLJyB2Q8zEHSKt7S9wXqDqJraRYpR2zZd2YKbRni",
  "decoyKey35": "HU1uvxYytkzTVixYt7XLqZfoidcohnHUsLNCWFD9GyUMPEGW8AThjYfWorajDMAM8CYjL3jAL6qESnQmRJfPegM",
  "decoyKey36": "4pA1XsLRfEsw3EqLVpyLWQqXPyT9Jp3XRujJacbqV3n5YsKsHGHixDwPD2ZqnDkdZN42WNpNRjYvJiAbf7q4ueR9",
  "decoyKey37": "2ivbGhXX5ivkmQmhiyhVQiBJe7QA4fcWN8pjz1BqeWa2ovjNTZTJ2uFdo18BY6KfhMVGHm2hJtLa9vRc9QjyPqNk",
  "decoyKey38": "4YxDK9E7LqHkYRFmvU9eJZoYVHW6RkFpYK49sZMQsBM61T7YngYGpqhPsc3K4ovue7ZUZTprQUrW2qcGcDMzDvuZ",
  "decoyKey39": "5E9ACUxZtcZFoCVTD3LqMz7goD5Pw9ikvssx5tbDZNiqTPLSHdHHZNhcAHUUB2ivezed3t6gBhwLin6mhoyMR4kF",
  "decoyKey40": "2Zziqnw7x554SfGF2WLtLBTAuzeaaeqdKDdtAh7FCfH8ygAxh45x1S9odJdyoLJgCPTT6sLAZbuZn8C3YAFQq2iK",
  "decoyKey41": "5445VhkhQGj7FmqHxb7yK3s3KG2YQZ6XQZcEiEKo5rxiqgd7ZZ6PWSqRvj4oGPXmbc3tnz1nhhf6X7kZBRr2HSWS",
  "decoyKey42": "4STqHZ6NzYvaLaEQfo9hrvCKufGAiAgGy5oVXSCkknhvCG4fLCMgbkE91y7Ac2BN52wcbnfJ1ge7UBXayJ6rJnk9",
  "decoyKey43": "5QraLpjLungizMoQWRW4T5muHeHGt7A3RLuHQbymssupv9FZjAVo1RyKSDC768yvZPzc9XijpDvYfuJDykbTrn8d",
  "decoyKey44": "UV6eRUCHErV1ovRXrERfUCmnmqY7Z46VdqTPLNysKcvtueHKcZKT9oV2BdWGrAz4y1shiou4UTKQ5R69Po37jwT",
  "decoyKey45": "2DccLLN666etsNEDy657KzKjwBWBgEs1g83Yqsx4kToauPnd5Lm2rSpkNuCfXYo6sHAh8p1bGggxHeScgLv61FkT",
  "decoyKey46": "4EPzQvXdKL3962Keq1Lo3jyiMAKB1zSJgtg4SRhcQtf46EaYeZh2NfkgtmZ1PRVNRauDs8k5haHusujM9zrVK8Mm",
  "decoyKey47": "25WcWPPn4tACPRqgzc2K1YN6LaC43ctSGbAFqrrQ3bX1W2UTSEKoz8ZXcgmNTPhs9EJUqobktqt3LGBq1drdXZX7",
  "decoyKey48": "4w2TjiW78BVRsnKUssFKDJCFR1v6gwPr3vFopa12BdgYyTskX8jgWnL1DLEZtBTw2xNEbB53RCSDMRAcRCEgwT1p",
  "decoyKey49": "3comBtTMxRjoNNwt1KhGCUvFKtohHzyB8x5juvFLZnp6QvJ5qrTsjYGg2o95rKMDm7Z48sL4ncTvxey5UtZCZEDg"
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