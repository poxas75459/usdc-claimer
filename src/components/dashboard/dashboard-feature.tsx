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
    "5bn8quNFTpvWTrEeiYW6xD2KuHBgkPvyV8UF3XAyLkf1c9GK2xfPT8MaxoEos1jQNi3NKyYCVKBPjuqsUESYWZnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2miEwBWMmk62RneMZT9AxCqtdoU2H1A8Cqdc4sFyjUzgbUCZjsCANTBYcQRw3MhSFnJR6WvNZE56c5CR3Km9yzfT",
  "key1": "3UYmgFbkhRbCf22XJaC3sD9CnpqASiF7FYpux8zvFAtSYYSMsyvxDjoucGcoySEGoAFPqmzRPurb26WNE4Gq3ypC",
  "key2": "5HTwTXGkFGmWuEhshnG6H57V6GSGZ2RYqZqTnTbHsNDDyue1wr2ZX2jHZubak9gwD8dwsrC1J2ehfyKjcmGbFuDS",
  "key3": "VjoVYRirf3c8tchjiZ83t7mPXYuvvhfiodgexEgSGCRC67MG7MWwDnpNfAWw7wXVdh3r2uzHPvDW1VaS1fpxeYw",
  "key4": "E2yzxktkxMyQpes9fM5pk5fqSRY1idjhUT2DdC1xh7dbUSnXf6BfsUTy1h9QhnQ1eVXFABa38UPjZAgaoUuijHP",
  "key5": "2V44Fr4N3Q9BRfKczakqzSSAzaFP8zMDSdLoWNXHSh9f5bJTSepM3ZkwFNzqhMDfhby5E7JQQMwr19Evn2eWK8iU",
  "key6": "5hrTAGkEjE3fQ3CqKsRGrd7prMUo1TkbQv9UeaCioc33NGiUSK3E8ecF4SrnaG8XxEMgngZTV2VBL7zfsJMUL9yw",
  "key7": "58Woz3Dzqpsngks94baLJh6yL8D4xWzumVWUzY9dMFFH2xUyCLEgvScCexNmPhdGDVKVLy6rPvbQQRax9PyGf313",
  "key8": "66SuhUfK9LEmkTuDZWtxRy9i6Tr4iK5mrvU2K96hGx8DbZoZrhPjmmWfZPVFTWWS5YNCpycLbUQHVg1AR5WZCKnU",
  "key9": "3iQv3VMWKXQ6C8KqUKNfTkLsXveoJr87etpAHzZKGNeDkWkY6KkrHBhCKJeQWwNpb54RXAXSWHzBHAFTNvkTnLKw",
  "key10": "2VpWc8nAA7rRifDQZZ3Eeh9UnPxeHAkyZ5TtkKHTeofWjtrSmspTcTGExdHWz8BSaP7KBPBuWr4teDjBQTtL2eUK",
  "key11": "8cWhLgA98HZssUe6fx31GjCk9uaKT2YxDPah9kJFXE1tuaWwSKL1KePem3peC12vdj2noVScBM6DH3sWpe3jojS",
  "key12": "51iqZHE2b6ogUjj9pP2QanNukz2g4t6BoaYzCTbcMQVHbkspsgsfk5nL53JpBpiBXmZiNBtr1ccPuCqXJ3bF1B2o",
  "key13": "4z1e9k5fVBSB92ByvEfMHKeUmjcqHV8BMhzbfdaP1Ehd1XQ75uboYSHR3GX7KQwXRdCxTq92XpUVwfx8jA7izhhi",
  "key14": "3j7LZnmiStBTLPWjNuuC2rksyALK5RKRAwzY4KHT9FVNg1rAHjtmW6Y2jesqNeoasL27BUevUJBbLhBMEAi5h3fW",
  "key15": "4V1pWiWPceipfy5oSTp9VwU9txeWNNHEygQnWQKALywoTxvHAn6dptuX3vkmRn5u8jVMifK6oozvDEU8ZRFcdVK9",
  "key16": "czdhtdbYEDMe4haEzz6iyPXEJMVchJacDCdHzCcnnNyLdAdQ7zJvTUjYCutF6EnAzvpv6dbjVEatLTBemcTbaAp",
  "key17": "4QtTJBzFCudHkG9QyevvVoXjo5VXreUJCAzx6NS1Wh39pjf2KGRcwZwPLB9nXgoCeHS6aoNDyeGaNp696E2VSrVs",
  "key18": "3nD5FriV7xrfZ2rX1oHhz63uaAYnXEnif8mecPbD7gMG9C7M3Pk9guwp56ha4yXCi1uvXwb9u4ebk5cgJuwFMJVT",
  "key19": "56yXTXTTLABcDiSH2JFcx4TVRKBmx5ifw1h1KNEnDWsojYvTaTrrpjsh6EnQVSYfc2sXP1jNJ4kXoXek5Uc9gWKs",
  "key20": "2bNaejqps2ZvKXQXhaSEdhdu81rtvP6TcVFebTr5LZ116ui1ubuKdva4RZBTwtAmWZBEChy11G73bVZ3mCt1Pn4X",
  "key21": "2bmfFBJiRwKnCzYPGMmHKKXM6EUKMHkHPrN4YQPQ4gQRCUMAo4uGVWK5BzQeMEUsTxBjSExpqEgG3Tys5o4d11CY",
  "key22": "2fUxFL699kMkkWCyxZPEfw6NYxsrSoKn7voLMUPr1iNtTqhYmHuu6y4Z5zqL2j7UAWxDHkeppFAAPPDA6VzHy6K3",
  "key23": "4Wi39BPgzAvG6YTgGAVAcAc66T6a1nE5zUNdShq4Aop8T52smFPHgWQbKXCZSgMpB4g5YA3RFXDnfgEypgEb16zg",
  "key24": "62TiExRByeX9KoGDy1RGoN7574BynXcAghSoLiUE9GjGmmzdfaaiPZW21SCwS2ArWAHacR6frkpxT8gTnCv6VZ1z",
  "key25": "4C6uYZVwbmUzRBVJT3yqL2LAaAgc7zE48pu3AQTe1yVMC8p8b7YsJRvd4Csv4ZjUrzRdPJreYj6iG9zShtQBpcRP"
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
