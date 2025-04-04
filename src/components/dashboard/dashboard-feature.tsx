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
    "6E9QrNSDiXgZ9LXcSg4F68Rqv9HgYARhehRppfZ1FqZaJ6ECryb83Lwq7f5RMwz6iTeabxte1MSMEoQwRWv8FpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6Y3KwAEj65zFQrcTsGBb2DqtDJnbKB8JjCQorm4Ggb74qFCF3ua2kEfak9jLxz9NKGhLhi6VPQmWhurXtgypNM",
  "key1": "33QGhWhDWVEioz48ZAmkXVo7tKbdrjKqDuXHmH3HB7AMC2yF1mcpjZJokztuyhuPfPWAngJ6qgvanwfMU95M4E2d",
  "key2": "5hAcwgrQ8jEJbFFVtc4tVdqapC92at6So6gCpsCS2E71z9iKiMHtzg8NxYTbrc4Wcq9m8GASEawhyziCwYCPg3SJ",
  "key3": "5J1QF3E9kvzzgXJwP4FWCyNYxR37s6GCNyPh6qjNhttGSnYBLQJkKwwfGLuEyKFSutccwetaAqJq9ttdWUHhJtem",
  "key4": "AaB6J1dy1iBKtJpDAt3W7G14KXcnwxXfJXMdjLynPnLFyvUHBmoV5LcdnPFNcf1t8EaEQgKkhs4zHAbEbnh5J7g",
  "key5": "foxfHmbSaXeqkvhmg9YMLFPa21bFno2mpU7MP1wbESadb2WD995WFSkH15Zvdzg4BQdUMYYiPwyPwBTNSJZJTYC",
  "key6": "2m3HMKZaexEGnyGtxJndaxq9VLG642suTQr5NyPKHRFhLtCrEEtxcQ6J3PHfP4YmiUjChyzaiZP6SjcLd4Vo3rmP",
  "key7": "LTNn2cKkixxcqF2H9QuePPM2KHKjGnZgknapDaFA91F7dRXrgSrZ1gJstYwuMJ4aDjRG9N2aGDptBRNKB4Br8ta",
  "key8": "3PuNDJQV6AG3da9wzcpBuiL9aarw7uXtWQgzpviYrJHd87TEicDLEooLm1s81wt9WtJT96NjuoC2adMyEL9yJm7K",
  "key9": "53CpgM4DvMDy6dZaXNbYN7G2T8mE4uS54SCc8HSEw8E53s1RBwAbaSppKFo3qczcc81hsjNimZNiK8FSUL6khoMA",
  "key10": "5CSDyN6rdTidPBFVZngA2F257NoGUG9aEXV7sFMrRunUYM82cgtBSkaeidQhKpPVixtQ8sG5rt7yv2bUznBNuxME",
  "key11": "6KB5TPEpkn4GfDAoT64gWvNp75w1b5LUt6sCC5zUvHPKZW5vWa5zNBsXd55nBYmEkpMg4Bu7pcqSnw2XMDVZPpj",
  "key12": "MfgEKSwQyYRsunYQ37bWvsy8tfCmdWjVPktwMq5CW4wLe5ut4X4yziaUAZxdDJQ3p5ZysLntjGrd3YG2xqLkfJs",
  "key13": "3rMmeMFNWLuWAXHRJPqfh5CoLjGm9HZr4o29oBJy5m3qLeWgBi6or3a1AtNxDVtTbpiSJ15ksEjo5D2pCdGMfYdU",
  "key14": "66YbUbvhp9E7qaGpWAsxZucrhpDuhhqo6JcEfYqKtyXPpJMM5N4JEhFroJwWkPcS8UwhfE4V6ncf3Yh4u7wuiiPt",
  "key15": "hr3gpGvNsHQL6EBfCVngouuy5J9eB9Eyfe4wsz1cwwcnG7JusYPpcxbiWGmaFAyVtZLSLaS9B61yX7x7eb5vr3g",
  "key16": "21mmUDNxzDzoSD49Wfc8YdT7H4VErTeBJ1Xv5jyY2RsSbZa1L9iFZ9ea5XYHzTzBhJh8XREVdd8VWZoyvWow3o8z",
  "key17": "3LDuGrgXqCM4fRRnV3sU1HPjqCS5oUnLHEEphjFRHTeYxjqdtMhpasTiWTi82c4Z2Pk42obH2RzHrYYQkbXVQv1",
  "key18": "3UcUhGHnW1vJrk65kdNoBHsGudddAAHHjenHn9yHnXnDXsyabBiNxUGG1oxY8hHs3jJbD9jSYDmaD7U2mtjWgjQd",
  "key19": "3TPqbkUG4GEvMnPHHctWXpV4X1aXEhxNr67JXuj35QD97uTTF4jCFEQ1zuZ6FM4JcozjCgErrV6hmoW9b1UU2iTq",
  "key20": "2r9nerr1WrWADXoX7WYvqku2h6GNEawTowdVms2L23E5FAwD1PQ5oe778MEWXYs9KC1t9CrUBPb7pDLTpm2ZeUgY",
  "key21": "26TbepZXJkW5RHfEX3CcJC2td7if1D3GLmJiCCejv2rB7qiXyWpi8UBNYPz17qvL3bFsf2XGXarhTEHg6HYvqMZm",
  "key22": "99FGfqi2CpGy2Usf7HtA6B8Gk2t8rQGB6VayUiqrg4N6FTpMqrxPEwUjeJB6kFVPgxc3VSGf3Qu7jZWxR6rheav",
  "key23": "3egxsEU6wXgN6pwviQe2Cq6Ui9tm6b3VxeLdxJbMPwdnegiiXfBMrLL11Huzcoig7nSQwLLMSVkBZn76ZUYNaPj9",
  "key24": "5EdGSk92sWAFP5JK2EzF7ZopxU7Yx1p9fK2mQCaHa4uzPeJr3XjgsTVME8CDZ7cWT9jTqf1crmayqUsiTin5fF1R",
  "key25": "7dEYWwgTRE6LQHaTsRhiyHdHpJoSfsaA7c78dCwUDjYAAHLa5UjK8NR13uYE4NHFtkMxhCYYzgT6142psb7DcRU",
  "key26": "5jwAZ9NLPdfC3TrGN2V6jpuzaYENjw2FgPkiWM9PG3cHRsmq9GGzFVQevDnxq7Pw18oXjhwn4v6DEshFxPeVDG2t",
  "key27": "6brWcLhgHnfGBnove6up4PhZMZVVBzMELm58x35KTdrZrbquropu3dhRxEUcuyfRpdLFUUkaaCwdtComkZr95AY"
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
