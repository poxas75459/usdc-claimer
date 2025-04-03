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
    "48AmFDvqSAoVw8LctEyZ8Bxba7bCPSwGTvg3crvZt95XLv3UkfkCeF4GNUryZU8ZiMxNx3egY5AQbQRwnMJ9SGfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XaPjMTRtnyTkBZ4Z7eBaZiQ9FMP1zwmrYfsGAcR1vCeBZbSSwLU5eHmrFY8LcGEPqN178YY2pY1TyF9tLDGqvd",
  "key1": "4yUghbyT6jcSaEjLuy3iDUxyQ132n5RXuXvYHLXVP15SqPhTrshsEXxDhXUeVY2gzb38tmDng8xcpuaRchTqfrmY",
  "key2": "YMSQXxAmVxtTxNZMcxUQTFDgew5X4aZMQAr4VvAwWuAXvxUUnHCXXxPxbnx8Sxo2a2qYwRnfppdyyGUopFS2u32",
  "key3": "2QDAf5VZVCke5Jfk9EiZHkasnonyTbTcKVqF9F69J5FegtcpVXXhGgyV1nY3PRPFa6x5umfToBoMFFvWuM4s58bH",
  "key4": "4tHmiRcu1AfZCWdi7ENEFGU38gWGEoTFkobW3AxZQJtrj15xooTreUmiHkDcsbk2dnvWSKpdu7jqq582b5vuDfWk",
  "key5": "3WtQ54dUHmymJEWtAvFKj9URSnNKiBfGYyzVgmVCQUTXckyPp42iJvPCSHp2wCCNKZWXySw3ziRr1bLW18eipREa",
  "key6": "3qXPGHw8jqxzJnRy8TSXczyRgWPz8D6QHcdzQBTn9tg2QGUHoKa3CHXRdpRWAQpub8ZKsdsyiBtzBkNUbXMz4mtc",
  "key7": "3JJeuNA5AHViNiCVj11p3r8FLukwGkFT4d8KbDCj1NjnGawmJvvkTx8Qa6tJPLCd8z3bsJrwiqUpF995rqtbLjqR",
  "key8": "2aFWPbCiswyuhrj6PrJq9tGU1yp3nuz28E6XQX2wHBY7CsidRn3x1EfDwjzfJ7sBizZ4D5tHSmz41okwJUnRtkRF",
  "key9": "21pneNsCuAEd5JqHirbcx9RFihRcX7p8huuhNH3zx5AyqiXbDxV27AeBQoQBEMfgspridBYLKUcBGYAxHWrBfVPA",
  "key10": "31rqaKTm5rqm7aP7poeAGXVz2rsyEouSGc1e6jbze4c4VXa6yZp479vBH3Td9n2YganQfkzwWuXRi26ocmvPivcw",
  "key11": "48LNFXNjRKrqBbs4xxugWa3b34jUcZ8pqUHBv625Hz4YNasrAqnEKYRW1AqXCev11Vp5P7f36nPaTQoJ9mLDdEdy",
  "key12": "5wSmnhab9wCFjPTE6kWNAcBUYRvCdoWfttUz1tvmnoViyS3MuehrG6vwCNy3XY5GpGdHrrKUaboTsihNQuJ3x26D",
  "key13": "PzzqWLh8V2USF4QNKUS4kqh9P2vLnuZTffWv24GoizoTLaHmELZkBH9rxBo4j993re9Xk59Yu7tJAdkhbixnfuK",
  "key14": "46SXwKj8iVCZ1euTATsLCJopEcirH7W7YzxdvihecyDNrEKRuzinmFe3zeqx1rVp1huoJXPMPGMFE65c3sVJNaj1",
  "key15": "5yxjiQuWpTZM7XgRXD6eiXCt8y8Lh6urw9SFsKXPuh5DTr2zot5mjz7TzWDmCkN7pWWBoqo9Q5UFr2SuayjJe1hC",
  "key16": "45Tax1xiBicPVJittPZfUTw2rqUGfbsSGD7f6LXbTLVaj4VYyhtjHMxbzLHjSTaYQGjWhmc3uJFpvzZer3UWydEF",
  "key17": "4E768Tb1LLiDJyyftZueZvVjC5vkVpiTyVQ2j9YGjZEtMYYeqgSBRpPkrn6JgywXLSb4JLfq9W7m2aKfRHLmAwN4",
  "key18": "67BPNJbvAEMcJsw6YHTcTZm5gog8sn3J44i551KqHWz4yp139LNx5qRfZdnpQsERP9fGVLjVJmYqHwv7ecAmGmFZ",
  "key19": "41LnsGQB6EYaU1PS2BhhQt7v4Ss9FAZkCce6WRuyZXZt5vUXMBFxrscE8SuZXPQaq29ntYvgYA1hTmJjNphxqFxQ",
  "key20": "2piK3ASi3x8sFo7BNS8jCYgELkvi7vZUsTsA6BBodTXALximE5thqZhkTw3oX1z7zbDUu71sKZMrcvGv3jwhfzQk",
  "key21": "BhrGQ2TKqYUupyiNVHeD3drdh9gsMTWdHvZWv7rBFsCLnTA5yDhMaTQxWshxB6zBs7PRMoTGhQr6vZaAKFwCdJj",
  "key22": "TZhPaBu64ZZptMd1o6LgbwAhCg2ndA2DCHiUjYJxjW1ZatxY4HoG5KnvGmhdXpboHEU8vojKGxACHth4H8PKhE6",
  "key23": "4w7R9UMz7cuE6w1TQaTbBRF8wAXANXqU7uQuxqQ5okvNPpgkz2dDrdiB31QA7RmtM1hZ1BhtrF6dfbtsJroeGdZL",
  "key24": "t3D7mgMDAekdAkzJNucJofmZfTuiD6D9n9PfYS1vQNUajB6MChDTYg4q5mygXo2Z3rK1eneAsnUj8TXNuedef6d",
  "key25": "3xJ6JzKfCf65mNy1vDtF8H21h6QqH6ixfHw6PHBdVttULfFNzhJ6zYzTosVU2wawvmRFn4HqtJ5Kr5qrHhcPNGJ4",
  "key26": "5eVKSDakNZvTq6e3BEQbLMDLFvDcWqTPQL5Tv4nXkeWyrex5f7jXXSbSNAgwECP8vmtPJYLo6BxGNYokB1gV4bRK",
  "key27": "23eygTya2c8cTCZR7AxjSg2kvW3noNEc6jxiog3xmffY4B7XLtdZBuXAyBsZYpjaSxmuTKEJBcWgc5jXfjgPy7K3",
  "key28": "4R5cK8XaG427eFLwgPZJqSJxk9xyLEuxFWsnvyZf5u649FR5nYXLHAWLczzVrLzPWrVUCYrisFWBXkNQjeR9Ap6Y"
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
