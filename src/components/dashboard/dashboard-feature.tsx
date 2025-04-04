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
    "4xFwGKFw8wqdEyAQ3zzqJttrNRe4WrGyNv3QAHtWcdeExFTY8Cdo2WuHUQvmwrv99Pi9zu3PnoN3oo41QmVShU6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtcRBRUPdM4yToRU8rAVFqnYt7H2nxRjS8Cq8wmLP6eNqjKxtoRJW9hYQeKy2RxCrkwgVmYcdfKsVcc6hD5gCTa",
  "key1": "XexymWXpfda95wmAFMkAnVh3Xj6pGJf7ezuLc9Lf7mJfZPwJz3MKMTNYRKkvKJ4T29e87e2JpvYTQRFvgcXNjtK",
  "key2": "2ikn8JK1GfvoLbuTJpeuWjCcedjeUdFtfPzA5fXiuAhvz9KE6Byc4tRNDTaAo92ohwp8mxPJvtdDNG7fagYhKGxA",
  "key3": "3PGKHRNs9DDWWnt27Le1gBt62QPYLevJ6MPrd34Bw7dM2xRp5x2FhmF9dJUJ8o7aTAZoN9AegE6hgQaxfayHdJvH",
  "key4": "xctfE9PepntpfeerWUFUW5tjX2Sa4pk314byK3Zz3K1mo5jcRqsaGvJZXFqjcCabw3w7zZbUiTdRXN9rxc2DEXb",
  "key5": "4mb4CdPrr4sig7bo4r1j1v8V2jDCjp74amRwUmAkNPD5i7anTrhSeLkxXYCmZaxKzKB9K4yWjmGcAd5jrzUJBuZi",
  "key6": "4DU4ZEvnChmNW6DQ1VBgUVnFjoKTwwhijriXBcFZUVgLBgf7z3HWsL7ggNP8KjtciLhUZtFNutEYQKpwTpi8WEgS",
  "key7": "3QpiP8s88M3Wyyo6qFHcigzBkAW8zEQzgGRkSUtKQbLoZJ9aAoA5r2mET32DMmDUbDTtvFT1pAiZ6i625dRvxVbt",
  "key8": "4FyZKwJ2WjqkHPxUWVUm7Vfo7cHrbt2i4CVhG3VaDDFgdWHEzNcCHGp2R5B4ru9PbXnRqTmkAEH46YUb5ZQhhzkY",
  "key9": "3hqcUMFMJbpoZb6qwY4ott9u7AH2HQGRarQf6yDcfVFeSVVhFVQ7cGBkbeeMrAYR1prv8GFP2qLW69RpDDNwkrEx",
  "key10": "2PpEPsoqAENR9UR1wKFWeATmhq5y9z2KwHFM9E8JPRxd7x8UrLgyFcwToCTcdEN3hqxojpoLUaUGRjARDiJfx1m8",
  "key11": "2DZK1dBxMbWhwvvR7bm4WSQC3uCTBixD2G7X6XEvtrzzgrP7rYuVp4qgoxaUCMVz4Ha8YmiRNmAYQWV7Q9EmeNKc",
  "key12": "ndGC2LWsMhnKy1MJwCNFk7wi4a9JJxEhZS7UJDt8JeconjumrTojgk54YT1r6Vt3cDHhyJHwMYLfaj23EcAoszT",
  "key13": "67eqD85CUHXtJht3is9MJDYPGq9QEDxkFPJYYTXqGPrDmW8BXkTC7QvoJpKTxRB8As8HaMjNuyYiqXL5Faggcih5",
  "key14": "5hoWGypgB5HNbNkZyoYv8VCkut4Jkrn5wJLFu1QQpFWaaTFF53v7E9d79mFk6sRMkQ7dc6PAZZtnMEKVH16x9Wqg",
  "key15": "44CmFnyi5JTj8ckSuMzzq64YybGYT3RB7U1o34UTFuyvt5QWKe5WzbQ2rjtucSh6S9A2vkU2nT9Ww2BqgHDNxknu",
  "key16": "HmcPnwynPbvi9h4QFyDcL9qaWkTCBWfJ4N1vgnAzrRwybnSyPKMrnvBhcpLzb19sarQQYNqtBE6hCxDUkCZtrsF",
  "key17": "48AgML7UT8P3TB621o9EXTGexoU25khJptagBb35aYKR2UmpQiDPFTVk8i2VzZ6MmyQ2YDv49zsuSgV15rMRBYHp",
  "key18": "2dzTz1UjjB7JBjA6ovA1S6aefZBeBX9GwykD1VryRbTZGGC83nYfGU7ajgYeRx7zJc3YBTrP9K8uGtDeJfkZJx2Q",
  "key19": "2D4mt5uhPwteYh6t8CzQNK79ixJEk5VBewquvFVvuGya2rCXtvY2Uh6t4vsjDLzsXchtL3tZnG6oMQg8jQYHACPh",
  "key20": "31LnHTDRs9AFUNJER8KCmn4VpvdAKoCKGisEb14Ti5GnchiA29n13uavAjfmBc1DXHwpsHkEobB2mvM1ZiP5KovG",
  "key21": "CuZLGJjxh911mHEGy5fJQFXMD63e9bVyFaC7LBQ1iESRNohJUVw2hDDVT6RFpDhwhHX7W5byuNpAAz6QBQeThbC",
  "key22": "VL8HQBWLobwXrHWXqUFhw4HmH1xwTKqLdbMtiEUXncL8kyJ81KuqN3DX7yZ6a8YXS37GL12o3bsphanxQ87Qcr2",
  "key23": "2sh25oPUgTkMbZAxjqn3NUc4jYauGUSyX83hVPHGtWYqEg7fh6D5b7Qb1dzTMrfpnDewRS1yNDnPgkBu79mouALJ",
  "key24": "4n6quzQ6QQ6egap7cZj2XNxBee9zSpRiH726WJQtJk3yYhD5a4c5uneALBgcrM3b9T8fRUtofNxRzJBxSGfKwRFa",
  "key25": "53TeN3AJuiYPmJeSFgLNjHZ6Zg69j4259c1kNFFmjQqMQiXA8T8nzuNLEJyqrEcoZ33eNsm9k3WZQjsu77PNwTvp"
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
