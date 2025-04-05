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
    "4j4yNwkeV2Qc6j4dfMVz1r4xemb2PTyyFbHAvSUFbgvruFf14xC2A5G3swyiGDb9xUeUbzhKDS9BbpYR8nxknQJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dBNet9PYyffdYi4HnuJPAnV43r8GC9Up1kxxmf7ckKAtAdyTi5988GudQjt6uyewcBz6vL7aSvBAkK2Ga3kHMN",
  "key1": "3DgNa9hT8MhdwfkHfNtAiorZ3yCwJiWht8Fmg18JXUdLctbYMfHrZonCrDChXHVbMPsnHwQokz6Vb6Jk86wMApzW",
  "key2": "5BYZoiqmJjhwXoVHjYoLeet1XnZ9tkDmNCQpKZDVKcsUCdS6qsm2VH1v8GdBbjt62GFZoUcv9SFV81cLi6xkqrqP",
  "key3": "3ccKfbKAJ98cZH5qNfaiK2Rt9v6TsJrcpmSNXmtMa1zuz27f6e781HnEjYHq6zi9tKkx1P2SHYw8x4WWdEtLHpRb",
  "key4": "q31sWKPUnqRCPszn2QQVsJceC4yYNC7VvLMZgNaQU85Edod83u4Li8zWgeZphRredDjKwpUXL2AcNuB4qCFtMbJ",
  "key5": "5RcyYGqbc9DFW6JXGNWLeVENmT5AHLzNxnKEj5Mu3s2gELPJUroTFsB9rPui1xDLEcEaHHFSLkhDZdANugEwXQ1i",
  "key6": "3KRTqpcU7HWrPMQJjKF9ABK8skYCX26Qco8pon7uDzGqdLG5U6xxAHjkWSwqPkFzrcie7jBCkn6DGbkrw9J55He9",
  "key7": "5RmK1sKg2UUVt2GTSvD9kF4vwnB4LwQN1EFzUZsf14fFCTcZpr6wFpakrx2jb3y6Jd3TjN177KUBZqUfnVDRVSKS",
  "key8": "2vtg3fXRyTPiH6hFMQDtMgLK5R3tkT5DoMxpuZMfvMeC95QZgEn2mTZrtPDw5XWTYRKDEhwaVfX89Wiez8gjL7g2",
  "key9": "3t2a9DkNNJ7dYY81eyFgyuerBnoJHyM2jV6gAiu75cJ45cSMybxngWDYLXFaobkD76gzgczkvbmsBkKoKGMbvaJ",
  "key10": "ZQatwTX9A9DCjheiyNSjjTf649kq2NdcVm5vhoTGSnRy6hiXVSR5C3B1E4m7EsN7WqVUzaYh5HawTmqfM8qjoZH",
  "key11": "26NRxrzezsEtE7ikysrsfHURTiR4MN9kJBTeymB7bmAadDy4uvuJJxpDLTJnzzKbjGmGHbskEsasU9fanNHH7LaR",
  "key12": "48tL1S8CvPMVuDNjLRDL5Mx9my3CnPkaUXcHLmTZ5R78T9hxSpiW22226QitsNrBoHWu1PU95V3JoKXNGZRXZpa2",
  "key13": "KPciFQTjvBdUbFwrtRaNzPzCSCecHGqGKKkksy2eTmQntNDaPU2izqar6Cw2eDzp3daPsHvzNoBS175M64Lox6q",
  "key14": "u3JvaYjq1KzDzFMZTA2acPBwqFrf1fdfKZAb66Amzhuk8Fd7y6uzRRvdpS7g2xNZ34hR6u2qHp1ieo5tTujkZU7",
  "key15": "3gNDK1HXdPSf7BEbvDmjpWgeGjty2LhykRCk2SQnVudkd9dhRmEDkH3Wkn94YPMxigUN58RPLBCmG8CAg9VVzSt4",
  "key16": "fE8EzCs61297Td3N6pmQ971jymdzWHLiMzgR3p1XTnpAZ5WnnwAJVWiPmsztsZpDEnZC3Kdj9V3nL7N8UGMDNM6",
  "key17": "RgSnZqT6vYs7xGCLVi2GfviZmY2QBX7oWVNtv5By4b9oxZ2Mtp4DbzvkfydavEf1BfwWyoTP8ZTbbUfRfi9o14z",
  "key18": "4onapy1vMQ1pADyoGGWf9B8tQxrpFqbWsDgPpLNZFUSqPH9cR8BRq94V6hspWZrTTk78raRLQLWtuieE5WUmBmvD",
  "key19": "5xB2Bv4hHLGSrfQ5LkxUnF5T5FdcWA6SJfRQTf4kUeTdkejtvt2zeiD9rqu9MrFrUgyKwWcEWNQ8pvK2mqMiMFMY",
  "key20": "2LJwNonK8FgzuJopb36t7sAcCsfjsYw3XSeBSbJh9ZgodUc2WoejqJtRUetj2o7SS8d4V4V7uckqrZzdWgpPSzFq",
  "key21": "Qcs244uaPioGmSRHDPA6vmVbjy6PJyCRmNpNr2UXX8a81vho6FB1vccF7wBBE75rbecB6TSyb5tECd2AfNgHe5E",
  "key22": "3oH5aHFYCWamVrfKQSKDRVLUTGdfcNE9zrZ1kwxTe4Hx4FPESbPVcUCD9LB4PvB5kEqL2XB9JaxnbdwCaBCSasJa",
  "key23": "35rkojeTMoLMr2S7x7bceKqo51WA7Bt6s72Ejq3EPpeVsYLBxoRA8gJXCsJZ66Q5gqANAWdztCjaoEFsNoJ91JX5",
  "key24": "3S5CqbX9bJMnVCGEmQfeHdUdG2Q6QjkdSe69oVQjg3aKB6WVRS2mc5qnzfcruX9RGNEeEg6arkHrMgzpbxQEZ5dh",
  "key25": "3pLzLGxrX1ipKNrVvz2x3gQgA7dpmdvbCvk7idSwNxeMCtAFN9J4F8q1WG7Mh9EQ7Syu99ECC4qQaotxPXbcixrR",
  "key26": "22uWL3vYW53tPD8iKcp8kmujVLwzHmCqiqufsSUTd1CbWoY8TY1R85n6BAEBSFT1xkzw7JTJV4CcvdLmur3cnbVb"
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
