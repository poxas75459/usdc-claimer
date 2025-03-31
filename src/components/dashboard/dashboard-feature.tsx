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
    "43EXuwUn94AJgbGCRgQGq4wNWJQZ6yXydcRzPoQwxDNDznPASnAKF463NS8WQFMdRV3rDuvMDMXABiLYXvgcUksj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fevjvPd743gvUX2eJaWhVLbokxFrzV6woTrHpnz4FR2KhMBX4SJTV2Wqp8WtekwsLG1qzauWFVrxgfcJPsQFTx7",
  "key1": "4YvX3WLB991rrpjoDeSS3qubUk1D7f2Y3sqKMxRgzNh3Z1z1eMQki17EJY979dxoqFvCYvHUqauNFoPW7LJDhAhs",
  "key2": "3gngTnbGfE8NdGCKfZAycM5NqvqnuNzyzzHMzrXwXss3YqfdspVW3KU7c6wEC1cNBAxYNbmm54t4MESfSbSxfms3",
  "key3": "819mBXYCNBhnzBEDeRQhixKEoWXke8a3uCnRHrBR3eQT56ZtbGiTtx1B5CNKmNCUye9veMiUsMDypM53RZ1ZQRU",
  "key4": "62aHyoAJohNDEEipuuQqA8ndG1JLctdi1J6KNwnzM6vsQH1W5KhnJXbD3z6JzJkT7n1HXynyaQboWJWq98Cm21Cc",
  "key5": "3wsLya3BMghgXv4pzSWCThkhLWiMU28MZ963deu28G4cE25GU7v5CVk5nHfaeHh2oDSsAsH8vaUcTpkCKE6zVY4S",
  "key6": "46AAr4aVwh8mzqXRcmHRve2enQbXn9Q4zmNWTdFaqNfxJskJ5FJeU7EbVkwF2FEa69avJfjf1eLNA87VVVLazuYh",
  "key7": "54My422bZn69sa3MqosSJKNmgyxFrLjNu1SuPCPomX78ZXXzwUK7tXprVxZj8w6nNB1cz69rTUDs4fB6VLqafihW",
  "key8": "3cCBuTP1Q3D7UNzVy6khpe5S2hGgxzw6eR8kXU1JPJcL6NBsahm1ykVXhXxycEtYxT3yAD3crikU3QvPfoxKJmQC",
  "key9": "S5fExiVYXUXGxiwicxvTT1KWWQpwpRTLv2Zehi3nEkrFavkK9H9LLeHa5Q8PnWdNeztqGyWKANN1r6PmBpxmCj9",
  "key10": "4mwfnhZntFWgPDRsehew4MyR9cyA8fjQL53E8iY93Vjr8JyuFyfXix3nSyJ56Fcoin4phcCNBrEvYXqG6Loh1tPd",
  "key11": "47BcAd6T8n8szwzmzP1vGC8TgrnABC1QsYH452aw8VaWm6kXBtDYkMFC6vytGPf1mmxzGcd1v5L6E3apo3ausGKf",
  "key12": "4mA6cBC5xCeMh7rwJJrX5BDRkchcEnGWixG5ZpW8p7RqQZw6Lc9f1KZuSby1DR9RQXN7M5xCnV71rMFnM5xwymQ2",
  "key13": "b8QQGANWwPpNb6B62EYCkiuvnoJXXqTC4BkuRrBznWEjYfGHJxZsewkWUEiNmnLDUX6QaNnMAkjAAyCnP8RL6Mi",
  "key14": "61GhsRdwDDggqvss5N4EEpmWVa7oU5EvGg6z7hNHGJZkFt5vcs5ETtgys9GepnQAbDQq3AA6jgbMJWN5WCGRcEY9",
  "key15": "46hVkujE1CmfDucRttjBCcxPzVLTVtnnS2uQMgEJsTmahixDZnVXLNJPtnhwVbWqoyzcc6oniMPJE2g5utctp86F",
  "key16": "4h2Ff79G5ewCMAaBk6Ezc4WDj351dsLAeR83HVwr3u3zMPTSi74MX3CWm4SqnAX2f84Ft1VHcijKffK95qhob6En",
  "key17": "4iz8BoQhLUKDXWV5VBbwAGrCQcAUDLBrAypy2wxFHRL2Y3GRHJTnQSbaBd5hbpLxdfF7rt3VYeVWymZ6PH1NkCgh",
  "key18": "2MhGg3Qb8KoZ21sTUgWcuPR2i19h3D67EY6AdbRqAw8XAmyTeoFvty964rhoQADubxPrN5gifQZ4RHSxP6LYHHLJ",
  "key19": "2GpjUk92PkEUZRLqDG8PGPwm9r5jYvNnDFARHKQNJXxMXSseQSnN6H9eVVFXFoYHxkReYVXe6YW6iJkrpc8tMvcr",
  "key20": "26tKcc1kb91W4oTJMJa1dgzb9bkZDDqeAroB9uBqz4Zv7aanr1ByJPyaJrY3nMVE4LirZxCN818Xh8HuKaYHEgXs",
  "key21": "3zPQAsmVQWFXiCEwUcYHhPZXscpTWZQzoisQs3Ld14XeYwWW6wpnpiHQ6C1GuAww52ghvLjae6MkHRswWu79v2nP",
  "key22": "3zSsga13KfA8GkuC9HKpeKtY2JPQ4pBYzRM8JWDYH7x5H1KAzctGWLdCGj5HK6aar25uzwBgsx5HEtJcHYFbNNKu",
  "key23": "4wdZsqEET9B4PhgDepkkwvCzLu8xiVEojLSamsfVU6HhxNikLYw7ZXEYahe2uAe7Rx3AoRfnuCDHNX6dPX8Vtqs3",
  "key24": "429hgcev9Z9see2LsmhbGUSYWzpm6k3a7UevtH8vVVGD6Y7LT21sAip6LLBQwdHXXw4yVDcyTtJ3hxjCAo2ZSxVz",
  "key25": "3CvZyfYeo5x6MV3MTKqskJaeiceVvEzSqXFzqTpSK1AikZ2T3iGCFQeN99sVjg7RZvBuBVeCFvLDvTD4e9dLPS8E",
  "key26": "4Qd8H2tibuAzUG5rXtixddjF3Sihga1ZnTYBCSnYCkxWtqVYktvWLoBCfRdE1VksqTzEE5NsN4D9j4zJrwfFN76B",
  "key27": "4nXqxWhpLptV1aWUn6sKxKuvAJ5x55caVEVj3ghgKNd176rnkX7oKrZiwKNvbjs2quPKeTzwTgZrhuvDZMRd4sAR",
  "key28": "5us4juE2jy1NAFVisB7VaHLsYAx2yn3t9HHxpdgButGbyqhUFUzuzYifhk7r4PFiB5KDsidDeo3qCyY95TSQ8124"
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
