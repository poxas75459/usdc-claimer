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
    "4F6nJ82e82YmH2KHmp1enBdzR5kChTU1tX8n6gkxjrTEvtrGCH1aQz3xRFAVZTcA9H67AUQkTt3qzBdvRTVeXYfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Pic2sQmkU7ochXWBf1mC8j5oNuM7xNhZEUFQJKk6qAapfKvMAZ1aKZc3UAgkqLxHyzHUsMQDuJRvbQf6J5fW3t",
  "key1": "34JqZi2TturQpADbLKCMJxRA5tsEeNjMURG3iWXS7b62uGsZsC2yrdMw43jwGuMGMvrcozWMBULEUYxWCN9Pu8oC",
  "key2": "5i5b9teY9jqPNRTKpwbnfCKeLQEtfYR9s1C2prve9ZqkrZSNEAgA6m9Z23uVym2L8oY6e2EmLwaQGmTUUedUU8bA",
  "key3": "46pEt5aELaZXmcayPEo2b25giBPHf3yJK6mNNsbm6w53bsbWAaLEh4aDqx4DnnX69uaRpQM15QJ6WGkVGecY5Xkg",
  "key4": "5K9K35eC4EhyL3YmorWEXoXtrUWrUi8E8fNfRYbHrm7KZ1uB5QXgQHnYzWdnoJsG97YMiHL6tENweYu21174S1jw",
  "key5": "31Biu7ai4ZBi8eqiThjd3FGZzg19855TPtpCyczjAnwuabf6VkZNZuWkEwkc6tZ24FQtWCbYX8rM6UdajweXyD5y",
  "key6": "iupTB67Qs4V5p8ZH7v3UWcF6VJ9bq7ivy982oEMiBJybv4EGWZ7db5wLpwKmH3gGnTgoXY4Kp4bmhLdXM3YJNkg",
  "key7": "3UZ1NWFLxHthFaWeS7LXGy838sNQfudmA7poxyxcnfY2ej6jLd84Kd91VM2qVzCNeWUhXzGxHsshmwwHzV3XHWPD",
  "key8": "46VW1RNtdSp4TDh1F6ooAr7vCTzRg6w71C2R4rP57aw7bPMprtyot3Z84npFookckngqRNiBAHbecpWam1k2DpAZ",
  "key9": "fQsWtqX9WF2tN7doGHCooqxB315qTxmvs1xknzTqYTsWvzQaNoVREZe3Y9tD5njvtWLX9TbYm4EseJcPH4ZteaC",
  "key10": "2D8xHk3M8STC8TTingJUTCs5qX6sivPwBgphbwTda1mV5zoJkzmw6YiN5HNopknJtMh4E993hGWhFnu86T3amviR",
  "key11": "451i3veA7xdHnpUGNazc5tSoRHJrRkSBrCeZjPbmbSoR12RVJW9cW5vC7UNLToZk6v8uksuQucnai2MrfQFwCBPN",
  "key12": "3sotnSVKQ2GF1rSyRdy7K5JKDS7D7KboLouV9atDT5YDzqwk1FuMEi4eqRwMMLnFDYYR24GS5QhSiSBRMBB6eMLv",
  "key13": "3pBEJ5XPoV7fQiiNmCkKaKPn9XCzzn7JURRmtBtLeCkaoDhxbmgGAai2jNrDyz4u9DrncoLVafmLbrPz6u45rvF8",
  "key14": "5G8PAv6FzVkZTgpGuCL9S4f7b7or6aEJN35nhKuL7s5cDUMbhcJhiwzbDKH6UVqrZvDfVmCGHKp91Mpa3e6X1nV",
  "key15": "66rbSe2WevDLfZRcmjhpNc1vrQ54HR3bG2sfbkU5JvaBs5vAGK3U1QvpzhHegTKykBVE181cdatrBcsgE83Vex4j",
  "key16": "rZZcNsMBtCQ8CtQn4F4nZCrT63c8WxktkabiSbw42g1x7pC86MihdPEzf3RUTooosVrM3bTywf1trLY8uwPLsrS",
  "key17": "2qq8fWFpwszZEptmw2UEJkmCPg48YWASis2GN3PmouB8xpLjRFjaLaYVEusFXq2qb988s9y6qpk8MxJhyXDaVr1v",
  "key18": "2QenGN1dDii7Gk4cDx7BA9hVTpnpVTmC94LxzsB9gi1yPmjxqdVCaKJHqn2KjuepN6Vc14SkfbQm4feAk2GsCpYf",
  "key19": "3yCFvPw3uFDTfSoLuP84vSyXkAmvGmH1NnonsvdP6yGD7UY2FMdaEtcxB4pLbXuqegTsgKmcmNP1Uv4k91uqkK62",
  "key20": "TquCCJWcFMakVBaFUbUhCVSXEZxXwbK7wu9whMe1acXJ2WPhs1FHwC8e3cKcGVWz2MGoELWupteyyzMD6iY89hr",
  "key21": "3hZjjGzhYkkpJ75NpJUxUnQ4h2TzgigNhAfzE9zYYzVZpiowDWeUB5w2RiLxyKeLc8X5b1mBe2AjgXPFHvTYYHAq",
  "key22": "5ac3zJC1eenGbBParMcjbLWcpM6vSDt5LYuNzwHERVFC5rhDAsoGyUaE1GfMfsb6Ku2eaPWmuWLUzQZuB2r3fu4C",
  "key23": "2oPBY4L65bYcYUjpPQvZETRfDB948gzRDfDT6awNSenWEjM3vA7dG3cBvF5Aif1FmmifEAHwN6JWuBJpicNvKX24",
  "key24": "2tVgyCpiHAFyXn26okcKKrbxig3opHcd4dh4dcuz2gNg3h2eFg8jKAoDNdu1t2TxSVuuNuW73X4MiQ4PApj7g6ev"
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
