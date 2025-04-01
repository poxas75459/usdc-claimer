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
    "3TJWYDDdzhAQFgfnDE2KR5ZJSASGNadYcKbGERd8GTS91uQoqVvscJmMeWmYNWk5NshFyRf9k6qpif23kpc48DWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMBLxjJdPkpeQZ1h8gvUjwDz1jPSJ4EWyHH428Z62TBsEhPDrfmpDYg5Xk8nUYi3Cw6Q3CDiQYQ2xWeQeXKLXrT",
  "key1": "53mWvkzwp3nX3ZvDNJ7mMThfEZU2xtnjqDvMMbC3b7B8LL94yFfXXaxScN8y4EpZ22p7kSmqF1B9E8XSF5hKgVNH",
  "key2": "4mVgWaFbV3fZrhvf2DPSaw5EtGpACioUqXx3owHfJs9tiJXEAP9ejhPFGhvcyj6KA4Qc8beN8mDGDcEtmDYp1wZF",
  "key3": "2Ms1iuKMtWj3XXWuSnw8nfQPwymeL2HfSwmbuF974oGkdhvrdS8CKxwxuaCULNp3s3YVGRaivu2puaG5Vhaa9rfa",
  "key4": "5GWQkHWCNb4fFz1Fb2JMbY9znkBmpF3remPo4bYQvBSAXGvQjhHtb6vAdes38gsMnBx9fDpt4nFZSVmzhFU4aWbV",
  "key5": "5zFqmDrpAdqXKt1J2y2empaPuGf4f5Kpy5AXVnvL5czaDppPNny36pcXhN1tjQ7dmYQgdLX8sLJeDz376kb5FY4F",
  "key6": "2VmkUnR5r3b7X61UREnX8w4m3CZfBR9ndvRtxvgUEtPSE8rhmhW6Ae6zETykV7UpN6j1vF7W547Uv3oEemWKoMWK",
  "key7": "NGxvp6RHcTvRA9fRPHnLcGFc6DLCCjPuRUVM6KDWo6RZNUuwi865CoibJ36VVoQpnc1Eaof6sEMYty4iSWWhiaJ",
  "key8": "59Jq798KPRqGh3RcQSvCpEbcGBLQxoPWiBsMnSVJUZY1h8EBCLNB3dann7PCybvrceWvirhVYEER78LCVgx91zR8",
  "key9": "54kJ1fhpMaiGuc6GKPkbYcoSHsQwze2eaE6atw8N1G31BFbrXoq2zw7jmTZzjgxd7aHNs137MJMHpz47VrFm9wfi",
  "key10": "2fvq79zKLqjKwoDdHDKDUjipPvn9H1qbZ7JTSuWhAmV4iZiUkynBhPMeuM5jvrCxSk2C5CVygBpTj6zaK1Mfn7NN",
  "key11": "56uc2VQQB2CAYP4GDWtoiRgF73U22RjAPktLzMKbNge8Z3AH8iWPE1F9ySuWkD11USXPPxTPEsERm8EGtLUDc1UV",
  "key12": "3sB1RLBRfupFP3N8do7zWt4fEkSiFQCdwLuDEY4fYA6HyNuq2pHCU8TwMbecdpsuEFGXWBvrNkRNvyXKEQsXM2QG",
  "key13": "3kyAAGiKoqUXpvBDjXQjsRuLmuVSR9Zd8o65L5ofsnG29gk3QFCwA9AsXsaunD6wX16jFit1PHh8vrt9xrxfG225",
  "key14": "48ZaSCEnxBkTS3x7FbWg6vaPuC7d8UhmYVD3Jkhmy4AFDYrqdSgm93p81tmB2XaWjoSEFu7C8aV4c7ANyMXFPnFz",
  "key15": "3yEEYCRUCPTZEy5zxLS3fawBE6CFCHQZswjpGoNMBgjmzKaMZ4EqVj68yRa5pbBsvAFggLTrh9ZYEfu7Jn35zq7K",
  "key16": "3d1zyycVDgsEnANNJkwwt6b8JManru632PfRNZeD8FGXBNwUcb9JnS9zxs6hMNd1dEpq5BBhKx63f2AwkHvsxNEt",
  "key17": "ch4mid7cpzrEXVHn2crscgqDFX49Jh9C5bK42E4RLRpMSoQqZUHiMQwzFXHG8hMxawMy52Kfx4Vdg5ocvat1oUj",
  "key18": "2aKyX75Nmtc2bojxB6dRUZY4woGwK6ESmUx6bpNZ2NS3uoBTGfNhqfXDyHoSpw7FRA1aLsFkqU22hyMvwyMhDDdF",
  "key19": "5tuw98vENUCchiXnkwtkrhfnzkDwoW8qoqFMBZ2p1sCKnWxPvnqBB3ZRZrbjVUXjNsqfCMq7jvrha2CsTJh8sSKB",
  "key20": "5L35mNbXvrA3jhz2HmxQJQnCirBUAbkXhHY5hUiahy5wfsBVFcmLUSrBKh8BcxwK7BwaQfKTHdT1QzkRjtzDVoWe",
  "key21": "4X9K6crDFcQMyxLx1BM33Lok6H7F2bKtUEZEzKWpTHkPYuqjsCKjNp8orXLAhuQMe8P4x736cbcW7mKXUa28S2GS",
  "key22": "51749qGe7c1kYX9R97HAr53B2NGLC78yjQKuq4rZ1ogPqjeEcXJUsaR1p22duT7D8sHmD8V9a9Wsv37tWametGnx",
  "key23": "5Tid7Ey7VTrGd1pFUrPj2W5NH11vd17TCrBHVKKzdyG3dXXZqZ3xVhc3WtxVd9RaAZhTGhA6TMA78ve8yt1jgR9m",
  "key24": "45mz3kthuNdX9D2dQgNdSWivVCcEgwJKzmXAyAHU19oeVKB8uL3jmgFyWHLkuwzgNmKxZc2ovktE54ckHZDEaeWm",
  "key25": "2EVd3sqcGJkatL8UjEgTSpcGxVEd37BjAnuYVFPcVPGxYZHU7oY2nsP72vTBwphqE6Kz1xcDiGusFkZCnrjd92ZP"
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
