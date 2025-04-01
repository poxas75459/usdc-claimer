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
    "44GRFHcH4LoDLXJ34y8U7ZFgAXat7M6LgkoLAbHMgHa7a21xwzVVbuTJZboPdPrkMtJpLXSGCD2vJyyMWsSGxv1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSN8dVv8seyTDZVWv4hv6DwvNgiGhPTYHtvaKpDbm4GHm7Xc9m2VBmk2s2goE6FiS1bQCn2SQJ8hWozBSNr1abS",
  "key1": "4ThDpsWc6fWp5MASCGdRwo3LLwKi39LKExLBy1cxFuqwZ1nTrtQEQvenUeNDyMcLryP8HzjAfNLQoKjSekKiJTqf",
  "key2": "4je8iy5BzSSGLu7gzhjJvhUzUgYt9wmVJEyzeKWc4uPRzuNqUQmb5BWi4xkmzVv94ECNorz7UT2kxEsfMhMjAJbi",
  "key3": "34KJwQwp1i4MLGUKfJpWqBRbtJjJQ7PiDeP3vHSKA2wAKSo4dGSH75R35VbxMtmyUsKxCgECTWM1RhZTwFVhR4Aj",
  "key4": "33wykFPKRvNe51Pp5bW8NEyJVWW494Wgs4ws1mmMTiCnQLum7Vb53A9pbohFA2raWUde11mwuehZbpd1moUehqy3",
  "key5": "JUhMi5bmXhh3vvHAA2GgMtKnPkZFumnMMsqFvd2Guv1dGZ4UB3U5bYyDgzqJLS4tyHKgZHevDtJT32YbV3u5vQ7",
  "key6": "4niPVzikKwtn8UwfXXNhNBUnZoJnTFq164k7ocMtdawLTgdoZduG3huEddqq4XXtBTgWh6798j9GZxYZUgLH5Fat",
  "key7": "2MY3CygZ5Ydn3LJ8EWtkGWgMhHaJ7ikm5gJAmzYXAiruWBpGKcgzUxFJLnGWhJk9e4SEQcdTpoiFaUPMeBjLdcme",
  "key8": "2VJ7UZhsQ8uWMLU8KNJuL6R6Xyc333j2RPVH6SNHgjZxfjZv3whUh4daqJD3Lt91jutjgxn69Mi7V1Ai6WJp7Nhk",
  "key9": "ZV9opA2h2J1vAUCrTPpA16DBCxQP7rC7McqLUg8DkrS9qGP88UxyNNtT4EehqbV6yGTPPAtS29P6QiTrxiDdhM8",
  "key10": "3jmrFcDFfDdi4kNWUMJNimCcmC4ia3YzRk9SRxhsKBJi1BPyjju1FtVHWsYKSKT49YPV8qjsjcCUJ469GNR4WpBH",
  "key11": "MQ6TJ41KK1rGZApyTX6dwoTV4NChFgmixnkzPT711K7toL8BaF67nrqKDMYSiYJCd4ADtsVQ3NbkNqknEWkBwqj",
  "key12": "2BUXh8GQBn6BQ8EQzfb7GMb2J4xiEKiRJTejtPYsFmV3NqbvirxjiWws31wbKfFHU6pvzGJCpoewGG6FAVFLDL5Y",
  "key13": "4Q4R4jMsSTFza4wHmNaRK7JQ86p5kMxFggBqZHB5YLP7wyr7E1VhQ4r6HuTQAhwWw5qYoJHn3LNGAVgTfHJHrXZx",
  "key14": "5dCsJYzjEVLtrVX3qJu8d6Q3Qi3F7K5UfUj5A71uqNTL2PsKkQh6f5YWoEcKWGcdRnxnqGM9pCMgr1rpht1R9B3",
  "key15": "4JdgCLL2vjjCCkmh9TDTQaCpV73mrEZqTV93g9y7pFheYMWsFFoBEuuD4yDEJEZ28oNiyunRvMapbsvtW1jE3Suw",
  "key16": "5BNq9Qhoo6aNuWN3rid5ep4HyRRqARVzV5wZPUVv3PzuCfSfWJ7D7AexJfW78q341sUFTfNvn1U4cxbcBscm7VQt",
  "key17": "1VFV8mNaKxnFgZdY874RdJ59rjuxuZmG8wpHEDKz2448FEorN8JLoPAJ9x9rqTXJMZcCr2AieBQ31yvuTLPAaWg",
  "key18": "2LoULFRjLhTxkx8mJvC1vuC6STLPnFzd6NvSAPRzUBeUitWuqnMLgobr8wrQHgc4tceqi9vXHYaC3CgSXiCABXr4",
  "key19": "3Gkc6KUrfHC4ppvkXaJfKmdAMvpsCuS9uz3864hs4hgwb8vzF2SKbuvhqRvF6xNXa7eKiqvRe8Z5yBJv44dK4RSF",
  "key20": "oz4BkmUJtF9DHL1fZC2tmsCjarZMgFkK9brNZbpjSHRSqXKYJJBAVLRFi7jHRwuR19i3neu6JBwUzZve6gjdfLv",
  "key21": "48oAe4joJuL1VazH9VhFGWomMpY3iV39FU7W4hdRHXH9Zm8ME3V6MCesjyocnkJNLuSdEmpEgvtbYTV8TFdCfTSK",
  "key22": "9bMNTb61ncZSJ5CMazwjEiUkXYHpoXCX8AiKXPeEMqyJnn99PXa4U9qC9gfdunQ4t6euZCKxGfREsJni8Fjndw5",
  "key23": "67NsypSvgpajvvsbwCCY76Nyd4HRTnK1dwc9VdmkzPmFPzKLbqrWbVjoYtSHjycgHjqf4pXhestso4xF9cP84RG",
  "key24": "3HRDTcu4i63GPTeuNCHFEAZyyM62w44uoyUpr33ckkCpisxbBu9M1rg8ytwpHiCV1TTtwNpazebaFHKAUzE7kbTx",
  "key25": "5JNm5BY4gVUfPzPbqfmjJhbXtNMDFLVWwAbKe3pAWuqSjjWf1FYiXMyNcvN4YoP6PpXZGi5tS6sLGG88EmChkrkG",
  "key26": "3oCeygvuHV3biLjWLBGitYvJYG88a85zKdh3XDou5GLhT3XThCGLWQ4ZnLUWp2tu3E5UmHfpCkBd26u5LXW2CGM6",
  "key27": "44a5twojtU4QVhpZREpPyM9Kr8hPYGj11S7wZgEA9UUToLLwfbQ52z4U7pUEphw5vnia2bUJDMpBkghfkAWN5gJ9",
  "key28": "4HXn4HupRGowe9L5sR2mJVBzbETMfqJtrq4nJou2EPsyHqZc7PgxhdSQzfCD45WwwAVaW6w9fyTg5yRpKWUkxyAm",
  "key29": "3vhEiLRVSGUTMx1w1LfGhdcT3mtmBZuNhqMkxvA9bGPFz9g8LqrLjPoCk3iAfxj3X6jmnZt6ZKoeYeghK3D5UBGS",
  "key30": "2X9yMgqpqfMMaM6cryhzdRYQ9Jc2NJxGJsm2kJvjoiKJ6C5YetTtf4Fy5EzTN2HfZSv1A3rqNqweak4GHgw1Wbm",
  "key31": "17jEYWGSBd97gfnhGPCkpL42ihTZhTVTNpiJ7gcH7RXWTH4Dh7vbeZKRnsWQtM8q1xo2bUyXexxZwgYbz3MGeek",
  "key32": "5dd33KPWdL2PLBie1rhqGQ9SVpg3jb4ngioVAVTi8u1BQo2gyWtxdQ6jvBjoSjkwQSw9wHCPzr4V38s8g256hJJu",
  "key33": "4Z7NkiHumspGXjxGwf3jxzQbrV4W6yHukJsvP7KVj8GgVYaaGCWmR9tAvvAhViHntf4TTeyGMZEHE443EtY5GQEZ"
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
