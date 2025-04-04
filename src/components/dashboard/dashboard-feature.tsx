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
    "4uvRGSgHvwnkFtWsYFEcEfBFxcm1ZTzTavwxHC9GhsoQuaG5redCNju4eDGPLvuabSRdncwuRiTkQ5D2XtWdFeR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4qDwMAwxtPnUozPRtV5i6nmb4cVGd8umGy3qN9RxGMr8Qphyp9uH7Eh8GqJ1bHBi6FwDjagdkDs6D1xKtwTUqp",
  "key1": "2DYSzt5NgwLmfQ5Utts4YNTkRMpfUpas1TnrBMKtwtfUr7wyqcGyMVAZng5uGxbrd8cM4imvhFQoiaWzyrGpX43A",
  "key2": "LgZMmyKGB5PfdKLb5iXfN8YGGrMiz99terjNEN3evfR7Vqt5YU9yhMcnY1zPyuYGCSfDUSieSj1LCgzw2SvwwBH",
  "key3": "5hT5KPESAG7MJEASkSbduSDi2qZuLxjKvQayLg2ewmbc9MWHUn9c54SS8e3m2Gbzzh81fBzkkMRH8CCX1bcXzzKY",
  "key4": "3Bc1URYAkdRRSzZjCjkCFniqdDZPDqprTZbQWwZAzMX1k5F5mKrn34hRTsGBmpSP84zV5ykMAY6vNUJr98RJdz3r",
  "key5": "5JxeEtjQFddPPahGcJv4hCGLTZmJ3rS3rP7c4LZiDSyUsTq3fdEt9j7VM65CZn2Gc9osvDwo62v9yA7TZZJ4GEqK",
  "key6": "2XtnB1P71k716B77sw6RbDj5v11RigWsfmgWsTqoh4mzpkvfFFfytGKRCRUJ5c7zzEV5f8kSJbnhD1ZuDEPUo7FV",
  "key7": "5KX8nKzDCGXZdqKSc4MzL1d8QfuF3H1YZwmyBqLWbPuGWDhGS6UEGUGtqf5XYqzJshHPWJN7fWpg3TnsYXWhuPxe",
  "key8": "2EsTKkes6pzsoPiwVqRTcF9s8ogP2ahodNZD1RdvKPj81YRDprNzNrxJg5HzEdrLU5xCdJqpErbEd9AiWXUQpSfA",
  "key9": "2TRb1fxhKXWJLc7PfWt4ExBtEa9LCysSABuTzicTYWUkCTLq1D2phed6noUXTaUexoJwSPvsPooNDcGcQ58Qr4MC",
  "key10": "nPg7vDHaokUnwe7YA25UarkuTVukpTQkk46UrfTaLBt9JKkH9PHFncVNrbevjxgBQzPkfYtPt8xFBrq3kjKFpo6",
  "key11": "4Vd8JzquLrfaQbAdjeVR2vvMctUXEnWDUYuFQwfTx7PsTBDovMnppTHza1MsFCvamaamVM4ysd2zW4F3FymCgS6L",
  "key12": "28LLrDTmGierzvdzShH8g1MD4U5XyUZxdSxd6Fyovwb2nShaYbrUH7sBEGuzcuQa6PSgC194XHwFeW37aaCSCVwc",
  "key13": "5eynzHHHVDGMVVYBehk95cEypSZL5Lk1QDkgSkMjrTsaxr1jvC1xJ5L6PYM1RHopmrhnFi72uk6cemqXGXNwSPey",
  "key14": "2abmL7aruHAwiG7rDAXEebUT2es8czJvBuRBLqTz3CMWLV2KLQYYBXB3ZrNEYabUuF9LnWm5PhgX15Kc7r4gd95r",
  "key15": "44UmxpBwNnPe6WaNLws84wjsEdQ2CQZwbxSbD5RitiLHSkxFwiFgk1hPBbS2b9Hoc7BdWnnWQfv32hY9rJGMDpr6",
  "key16": "3wLqsJjwzC8SsdA9YshufpFt7cVQbpiHQpbX3ycqECBtCa69AVEdh91WF4FuPv692LSjuFTGrmEXKJudjdE6Pd4y",
  "key17": "bBW4ULGdjiyFWyzLTK4BAg2CXcBqghzrAPtvQdzxLp668Cnm35LB5GVMpT2gkRHCPDJu2Zyf9g7bfCUSYjvTw4F",
  "key18": "3sEfDKLqMQ1gHjmHTeKNFsPbVSXhdn4Csurwxo4wMWCbza4TXbfkYnWEGCX8utQm9RuWFsNdySpoLi7dUSZdkH9z",
  "key19": "3yqbX1z7qa5PFCeTZcbXN1XrWnsUMcb2wNowAdj5rHZs3NGpnTwR6yUEvhWVpLQeogsEADbTKTQSdTWbsnubCbSh",
  "key20": "4BwKKG22oiumeE7QkjFsLkhw7FA77CbwEdnkoV9H95HRciTT1E6F8tnvrLZDWsNSeDFdc4QX3GgaZJWWRQwnzizK",
  "key21": "3KVU8UMwbnrjYNMbbEQULoEWuZEbtqnY1dUkhZ1jN7rc11p5T3bqB5NfTx1wWgn5XdBNm4J2A1Hs4d2Y9EBcjbnE",
  "key22": "nJoBdTZc1kVg9wXkLpkBYzoHpT9dXwYAoMuitwjkjV9YJxEgnbu7iaqPgEPdqmXy62DLmtoUnzciBfJ22w6d9qx",
  "key23": "33aAdddJj8oeAnboF2VswQT5uWYgS5VtkRAZPhqxEZgXom3KrktJm652uACityo73pduoTurPpdtjG7dhzzJqAzG",
  "key24": "27YRHwbCktv5vNz1cXN1meuCgHobmsLmPmtKDaSbYvThCjbguJ2pENzHQ8UJkp5BtFUB8PmzsozEzQ3ttVyFEs9M",
  "key25": "3pb3rbMr1dhLQzmXwLnMzRHZNk5oHGdnnJJsM9tgym7Kh3AD13mqGGfN8wAVUze7xi7y7kZFeMArc6LNNu8PaCoL"
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
