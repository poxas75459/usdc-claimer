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
    "5D3At7EpzJSryndUw7MFDPvV6vGgr7htke7WcJw6PLe28fpoBtVzppn6r4tgh7ZnUKxwpGVPCnVNsxa5mxqQD8iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkdT9P6nyvy1VsncC8K15hKshNYzguahZY8zi3aqQsJ9tjNghQqUKiSmgh5oV2dj4Km1KA19qX895itawNCqJ3B",
  "key1": "59Tc9PD6guzeup84eNU5T6xNiciy3cbsea6Lw61o46DHDXBaYTdpXiDy8qVswiegeNyC2ZKJX4D5DnzLmcjarm7L",
  "key2": "3caxoCU2fMdMzmVpGZAijz72xzKaWxktPpLHPXj5ktPq6cZPQsj4CZghNHcBLza6vXMfx2SbDgxS5VX25u2RtPAt",
  "key3": "5zbidmbdKELAwoKBygG4JZ9QT97PvxqdXqsdrKbbwdxBbQCHqSzKsaNEKyWh2tD9huRLCk87bqjqWiHqqh1gtNjH",
  "key4": "R54U8n9HNmw2fB1Yqy4v4sctx2WWBcrdRxA5m8QPmwDsqfAYYCormQBRkKyGpFr8pAqqtGegJcUDb4TidNBjGZq",
  "key5": "4KhUEgZ6qYdQJ6RfecCxwK2qHEkmXWUabUZFMcpScyZutEdvPYJj3MGK1KFtFDPP6BueD9uLifwuGeFig5PUAtCx",
  "key6": "62qRxh8gz8wUXct6gYoQupfjt88zgLVdgone4EwabwfkHC3Zonm9f9veU4mbCj1ZAXEkNvoi1Kjk42wbeurNntu5",
  "key7": "2ZA5UoMzrfrZ1UHF8fCtUwGte3m2XjaXM2At86p7RaNrJ5XYu2sxZp849xpPvM39GYExQM17cobkV3aShxcGb41R",
  "key8": "5MT74Y5duK9C1DvC5RY3hArsfY7nnYWBA66Dkp5JFHS7SwxN23b7MN6zYBEDmTk7UdQEGS5MMrj7oWTrNZkD1Cj5",
  "key9": "2dzL2fQaPYMZ8LgTr1iSNit7C2QNm7Eq6PXBLu5YGVw5tCEcka9BC7jfaEGev3WPFfEadWmwkAZdGYikovgxWrK7",
  "key10": "5twgngcJf2Z1pkKpeSLFzSoyQAtJX6aA2uJQM9r9K3JtA7bdbC3rBH4H7oKUVESo7pdZ3Hy3BEx6yqAQDMUV61Sy",
  "key11": "5rKwpGj7A39pEGRZHB6TucRggjPrXvChuP2crCFCkaNRto62qSyR74oMHmZREoKApZwRuLwh2NhhCGEhaTPNmCFb",
  "key12": "dLLyaSFgCCm3qLNyX2KccnYjLYdoLqaT92YM16b6F1vPxeCVGQQfFTSHeGdZzJn2XXNbt8TEDE8qchpGx2EPCUZ",
  "key13": "EwhEDjrpd1V7EvzpbgEmWeDWGhVSaitxk4Z8LWfLukHjQD4kPDaTcDbAn19oHwUDTiM2vbwkR5hnubKTnVdyawK",
  "key14": "Z5f1RAcxmpRSAjDcPykXfR6WoMx7Mx4MeWuwQ5r8D9AyMUDpbajTepDYwqn3LZeo2LHocjdJeVrJncg5Tps7hUP",
  "key15": "3KzyybeWrL9KFWTqFJJdxkoZQFrrSFTLyS6tnL1PzkB99PZiYNNpq3M4TQ8xVsTRbcRwtruCG3Dkha7aLQ6EHnRY",
  "key16": "4wZ2HpvoGoF7m1mLLd7KAFtANkppkazdS8kaJ8ssbEi4rxGNHLZRSThDTQ1gu68FEYZwVM5ysi9bs9MhRzGY2CCz",
  "key17": "4QBFuHdZKAbcSJQ9rs7BBUBdcPhQTaEMLb833wcmQXLuj9eoFvBa38QMA1LQfKQRW1fp1TxREd2qqR13hgytrA1u",
  "key18": "59hRag2hciR1oC7HaPB7j1pGaLmSDUkPBBDBTaurpNzf1b9zhJEdZqEPYipbqdaKNGs9QTYU1PrEdb7q9WUkGMqY",
  "key19": "47x4rK78BX3MLSwWjGqT9a82kfqdcYzX6gS3oHmjCSV9KaWhM6NBn6ZoGJBuWXa1YzRGnYX3Nc1zC11PXNUfBjLk",
  "key20": "cpZLPTy7VETK9nb1LfMkmjoyyruyWjNXAatnJDjWZ76ggJDhf1h5q7J8oe6pMC2a2e8ypjykGgso8wNX2a2Etk1",
  "key21": "25wH4hppFcchGwFxYSA3CgZFMqinJsVioQykrxD1pMFERo1kPRBRMYjHP4uzRsEzmGrwrm7HrWEbqGaZKMqmQb1f",
  "key22": "2zsnHhZQ7Y4cHkWJbh2UQVt4kjZQDCNZM4iMRnm6KYdBGLGxSS25BCHLiRckyNqe1WfRcQ8fm4NBZRop2ZPdU8RH",
  "key23": "39oCwegjpm5mpGumLqXBPwngZ5ku7UL25kEYDkhfQAbCwsYvKeuqd29oSFi5Eg3tqCNtsYn4B2vNAuufBgEGRVWN",
  "key24": "2KeaHXNhdK5K5RFfceuFdUPazFFUHYRYQuwmLUbjUtLufeFaX4o4hdnf9Wa3GMQ2fzj1JoJKEHpJjsMkykh8BZYm",
  "key25": "3rnBV7uw8noRBKBnipW5sr99B7yaLymTFHeDxmhkBBKmrhjML4s99EQYggdxkUkF3ZNaXvL14kebeW7WcT7Q75Zj",
  "key26": "3Qgr92SiFnP727xq736StHLxaJUpb3Ed5fkHZ1EHEFMFNGjkufoyxTvqYrogBMAwNdZCatjb2hFSC6zrdvf5GwXa",
  "key27": "21yUBL5rnAPoNzeeGBrbzSD6mEVjvzcCDWKMEHS2SQzQh2ir3tMFQWJLoR2XSxf1DX6NEWcLAf7e49yDcebdyRXx"
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
