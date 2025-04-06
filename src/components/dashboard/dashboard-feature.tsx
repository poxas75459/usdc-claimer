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
    "UqiZbPzEkrZkZgseyA1ZnJbRvCcxRmP8XfuQrgm8fjBMuRaVphd229tk55oG26oY4nzNSFjkeGa5k4KHeQHXZfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZ8f5NLq5aGg3SjS2F8ovvfbcpFj5h25gutHzoUoe3kaawr677d5KG5XxzT5j9hb34gSYRjiios4ajMSBSo8Ftc",
  "key1": "4427BvJH86dh9zuqwbkZFhNHN37VREWshu7nqM1J624ZbmkxfX1SvUSiFAr4iCDGATgf5eNoork8iKcx5YupNRVy",
  "key2": "XAtFveQoSnBvVGU95qTEwZ3Uyu1YkyHr3C9T5ncvCFF2BL7ELRYj7D8mgxZLpwHLRSNAbkjja7TjT6bab3yeh9G",
  "key3": "4v53MqYEUKnyQLwByyLQ9RPHYTWix1CoF4nbXfer9ryA5zyetSGLALzMfNcTe7YbgGRCYqhqvUFAsrfThKDqX3rc",
  "key4": "63xpanXu1GCBBa5sQuvfbXhuJzoaWdk9nJ5rvktdUpTyfQPCfHrgZvATH1gcFw8wBoYi998GeS6hKP9N6J27uq9j",
  "key5": "62YZRg2gbeUXaUNHagHbQ2wkW5H7rcQNwQC2SF9Wy7Px58Sjk1Fk2c9L1Z6wVnf6u3RwDKRnc9Ax9sDXGkh89s1A",
  "key6": "3KgQmPL6svwGMvViRAnSLMzPHHH5VGW3Vud3ox1fugySyytLyCEx8ou9K9qcRpu7QDtsG7czMGeQGegxDZSzKHkT",
  "key7": "5ow236MfhXwJQBbTwsZE2GkNFGQuqG6RcdhPrfkeSZmfTzzcbGwKVi8Awe8nwdtwojeqhVrn1dSZSWDveHnUkxof",
  "key8": "5wnTtKmK4C97yF3r6bPE8YbV6ySBTEyhurifTxBCWMjgBHHDX3y9KhHL2VgrBJoHU3hTX4xxbFKmYokTqCF3GfYu",
  "key9": "5tL2QDJyEE3xfrCyDoNVCg3bDc8L2TUqZSGoGTAh5hEJQF3K52qqvnuD3NWQuXEpnbJSHvd14u38Z75xSAmbYHWT",
  "key10": "4THjN4HtSjWNcCw7FgJvNY15Mg3pxBjf5RYRagpFRuPC6W4cb9WRnnH4ARBnfY62ZTH7FLxpf56ayKKAG2QETGZj",
  "key11": "u3G6CXqxvPD4BidJByYRXxAcewVEBxUS15NMeseQy2vrMcmgW8h17U7pbvyr1HKAMYgzN2j4DqH7vaGi2wTk6Ju",
  "key12": "5P6PQGHjYgpVKVq6dEoiYhecUqgCqgpmc5H13G18e6agFnc64BTuLaUpz7r32eMGK3J2FAZftCNgAVj7cfVKhkmG",
  "key13": "2gC2URAQ1BHcEEBPDsjapGyNhU9CKHNCEfoCAYxSyDsQMy6JBfPRZdDisdCQHPpfb9zM5qBEh1XVsTC43EczCP93",
  "key14": "2DRZwAvzdKDAb1gurJUrpuVrh5qrphHb8eRV5QDMF84gSzPwfnv1kJjTSpseK68B7rTBPNuhXQnBrk1sDvpw5GP9",
  "key15": "4AwQiMUeeSEE93uxaH16tS24MeUuibLDfujRDEjJKp4MVJ2SesP5FAhSA1jgc3g8ZWHppGWha4bZBYPZdQVsHw8f",
  "key16": "3NoDaYUjQHYGmg4JGZJrQ54oQTmDXFcES8zDEBGgb28H6i1N1ra1fzXKb3Tyx1NkSKjVtA8TxvoKx6cfHFKUd1cz",
  "key17": "5bf4DSGUgsvTfAeFbm1qjKyxjh6chZnGXsqkJnpH1nMjvC3ovU44cNnirdHYR1janVzhHQe6xHR3ZJS3GJZ89PoF",
  "key18": "2ZLTrKUQaxSoMiPKdUgopX4rkHHoiqZPPPxxcXsmA5JFxatRMHWDU9sUdNi3UeiWJWEpcfxB2iFR9LJrr2HQtbrh",
  "key19": "5VA5kJ8RvRLqjDhqDjSc3L6PvZyNhSiCkbSGYnZ7BwTBXBw8gftk56niEBa5nUp7LfwvDvwMr2QezeRkJkFJSpkE",
  "key20": "2hZq77K7LgZm7pi3PiBENFyKNBgk24zX6zz38HnUwW2dPLPwSd3wowbqHyMPSTnXruSq5iLZVvZwgsB9RtE5Aj6A",
  "key21": "63r3mSzRRabPyA8nomeTRXfih2JDPU9ktQryWQ9EWShD6fdRpmdGQrNqHKjzU6W2DcehaRXhKHyBmPkWDNGfkvC1",
  "key22": "4EwAWiB3tn3QDWQue5fbsLeHWtiLRiZsz922JkJGRBtu26vPbakvbzcTMoWCErZ2jb8ZUKBr1tHTWKBUrutsTRxs",
  "key23": "5gYXchRkazgxTg5Hy6sz8v8ihJNEr4ybKm58iBYQDWdaLzNsqNqftvVzvSyFdDk8MP2DbAm6gkAVuCHHYeh4tTiB",
  "key24": "3YNQFhBszy34wp7oekxQdc1cie5ZXSTb6t7ge1D6jusmxZbHkvHamkgPX2VWy6zsrvKxXj1vbFzyY7gWdGzbXNrZ",
  "key25": "5iAaG5xrvzHidpoQ49QNsr5tX4RHa9sXBsft61fkZhG1QrGRhdBvrqQt8AshoSbsiBQEEm9Hws3XCuibQge53A66",
  "key26": "2RxERqFzfws4iWon88kX8YTHdBT5aHNNoWWQjmGBm4KnXEbsj2HETT91r6G55wM3Efc94W8BdstMy7D9eYqv83qJ",
  "key27": "5JT5ivp1PAv1vGH7HkcC9iUQPvDZpVtLhMUomxiacSxmPyHRyr5M7DsbfAuPcLVXhPp9Wwi9zwy7t9F9fRBRPd6T",
  "key28": "5qJ9gh7eAhF7arnF9nAyLMFT9EsaNoqSd4aweW1ipJ2Yg5DYa2yLerUDYpbM3QzEw6BdFqMS3VJLpKrya3bHm6Mw",
  "key29": "3omeDXbD3VyyghRjFQ4BYAN9tLBgdqgSv6zroY4rQNMdGyZybX5MxLrmoJD32yBy3bCQ9jgYNF59vCFK9oS3pPTV",
  "key30": "45vPiaaTJbzXsfu5XsEtRQoqJ7UYqZCuu9RbFgN8DVbUm2sHmFnFZKBAJJoDQ1fQpARGJfR6APXEQMuZwaLNJZzn",
  "key31": "2VWWo9WzpGARQb98jYJDWrM4eT2io5AuYmsyxmx6XXvLgtEZioPyzREk4ykcsXYffCa9Xg8rZMU7RE74UAJhLkV7",
  "key32": "ihBG9aZ8yz49zgDJet6GFm8Lgr38zjVEUGmSP2a16bLvwF34iWqC4wNENpVNxTzvmUQyZXjPifyG29dGY2hL289",
  "key33": "3ALGQEhFZscMtZZykeSo64VeWaVQrwL6WTr7VPX92XGGqX6bGnN9qvARqPQDRbxa4DgekvoS1eRBTVxt9iN8USSB",
  "key34": "59VTyUWz4PdrxnLiMqkwuugVeCeWG3HTqa6m1ca75tqL1kzWigsBmt8oSdn4tcdFUsLWbLSX4nvSjhzm6ttTWTNg",
  "key35": "5XQ1RtiRWyFTKbRzaajyUWvumSKF7mczgUxEdLyrjVoFA4KLcP983zhibE2cyY45YYeJ2uRTLPgjYPeThTdAbKr3",
  "key36": "4FSq8B7dX4EWoZybdMMT5Eb6u5hi4uJacu2UVoJcJdYyeNrHPYmpUbQ3gEE1kkxdH7RMpjfwDmjRyQQPB5pGvVoG",
  "key37": "3myNfb4gzjox8C6GVaP7vXSxVYFwNENFy8Eo5t64pzehxf2Q16obVhMoqufeRVx8Jd7hjkNrJMdBjaXdqgn8p2Dq",
  "key38": "46vdLveCgx1J6i8mzXY27JBmbQoBQWZ6VrjHyMf6NdkkEKpaX764UKiAPNCtr39ztKc8VaUH79MDx82P3TkueZEs",
  "key39": "5kj72JPthPMEYJaJxQG28TRn5Vs2PR7gvWDxCpjVcDUVYqy4yz2bpxvY498M545w3q273PDRyUbDnJbuzi1gA5H6",
  "key40": "iAAnZpdFyrEons3HwniVxqsFmivT4FkXEkcEUabRxpTaVjWwA9nWmbUALnzGDJ2mkyUpLN3MqgEUx32m2LEN9uX",
  "key41": "vsszdVtFmhURBqBWCHDuMyQkoM1uSDMLXnZ8iidYAmhXXgtp4XwD43t9YiEFn1MCgkJT11sNxzfEropjmo43siu",
  "key42": "4WMr2oANhP8tk6sfdici55RsLiwbHRgg43rSe64MTCKkGxSMsYvJ1hzioWz2xXGbcVPLEJBw9HWnYt4HksCpQoM"
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
