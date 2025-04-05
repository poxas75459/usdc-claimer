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
    "2rERFoTfrwsmLkx1KQHTrzYEgSkhmthADeHfRmdPy4rhZHzkmTj6MxRzPB1du5ZmmmKGG7TDZHZWmgizdq5nUwUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24aPkBC8D4CM4sQ5pJ5WGxqjKR9rhgDuzkJSuonxijR6U3GBahUoLUYk7Xi3pNogZZv2Bquz9c1Bj29rVRzwDWDN",
  "key1": "5RyPCg8hbfubtyjyEn9TDR1F6GrycxxoAFZW5Ywk6VVexvZkoHiCghQGn5eVadcZvjM2vYYt5m9LNm945hpMiW1M",
  "key2": "2Ns7gkS1DfMAVFQZ6UcVFPt7pfb8hyQqCD3D2qeaVSDHuSYe9nKCrEMNy9A72F25XZXZBdCNc7XgRHQBwtUYFMYo",
  "key3": "43shE2FUnkGH5nzUPWPKyZfiFJMcBWAVz5mKHYjJSEwUyRRqAhVokjLpGxDuNktXiQpaP1hyqpoMheJ82RJafB5N",
  "key4": "5SR4R48KMCY3yfABhv6XnEVy1cWNKrcKDJWyVhiAeKKiXpUdGx9W9W1ZB31nDKtRAFRUmpMghUtz7XXNWmUhP2qa",
  "key5": "4mF7EtSCpeoF9VSqtVhMkHYZohzsUa692XYQUn6iCP6gRFV3fWXZrQ3eXrGRZWZSmjcqRHzaGv3K87N4WchknrEU",
  "key6": "5nktzj8u86uKkoj49Y3SuJmXt5LPLLt6jp9rCsQDRfbmLhDpXDRPSiJPGSZehCr2cMqYcFqepisYx5dX916Rcfs2",
  "key7": "5dwdoiQ23dsmHCaJHRzMta3rBLVAmyz8tnsTnuRYvPePiV1HLrQgSjKJtKnawaJLEErQzQD2P9UxFeRU8pESTDcA",
  "key8": "2DbQmxbeC2KLkmEvVKWCHejgTcc5iredfWYLoQCMSZ2xJkH3ViXpqFwrDdsqPFgmXBZwMxrATwkRrxkd1z81hUoY",
  "key9": "2KnU512kvj5tTWbGX8XoqBBnL4yJ9tCDCxhSffCUybhUUKV4XhUCTqSGgmuCbNspPBx5MQyC68VgUqmLbkCrRMji",
  "key10": "28qw3R8BQjmhExVqH6XVsa6BDAxPS274irXUUDRpjf6JR8KnQHyT8MhCuM4PmMFBzVK53vnNuSPVo8166kGCPHpF",
  "key11": "QVUy8GgT1AA7RsGM57xcRdFBhj4zxVDhBjgAhVWGrMBeYaBnu67niz9iXJ5i4F9NNqSW5nq2VXW97D1SyJU2kUM",
  "key12": "2F6VxvmABL6qh8Wy92tY6TepuTi7kbQ6XeZxGHH5Li1qQUxebMn8s4kv7aCRPr1LNeqirhH4EGjJB7qz9Pmd66vJ",
  "key13": "5vQtjtmbTGKHnFY2hvkCryLXwHsMjYZbZLD7MB1o7H1pB1jzkQxRG1iNgYKYWsUzmh893AHw1wCdfbqXBR19gMcR",
  "key14": "UNstkLzpa22b8D5NN5dpm8buWsRiN2C8kLg7EPj6cG3qP44GrdcFjb7fB6XYm8xPZfQj1K1qGjNfGa7ckLd4GHV",
  "key15": "59evbs4CKgJyGgxcyi1RWtsFRFQHCpcT498DzabjXXBGk3bbcKsaYQweppqXmoQorgsJAmQpemq7nLkKi1MkhDbj",
  "key16": "49MZPbiy1Yb4ENH9t1RpM7L5uFEY9VAv5ARurAg6bjHfdsPA5bSbRBVX4ykCUX2h32eYZxmBExrU1hjMKruXCNH6",
  "key17": "67ShQhcVjBWFWwFNfN9A3LtuBjsFLAT2bHtuwtk8hhwiiawKjNhRs2MFnsc9WkGoWUHyFTQhDhhKajfDAKs2mqFo",
  "key18": "4Cv5M2Z7twRN2LXer4UPsRZMqxL1SU4L3o3KsPW3S2GmahfKPKqRUmb6qeYa5FT11gZshU2vuadooVN2Avk9RCuu",
  "key19": "3xFQkSPFmNHXGGMkN7HVNf7xugoZXP4taRpyntE3PWCy9zeKwjFEtmXp8TqNG4tqiCCvZy7yBtC2TYz7Vk4oWW71",
  "key20": "FRMKteQJDs6RRqy4H3PRtWnkrqW7tN5EpUFYNJ3EEAkKYBarfWZDegxXn8AFr9tXGAYPugZHvom1VNqFr1Axp1Q",
  "key21": "3YW8Lu5gAweteH7UMTUmRNoQmRvPGpfjxZvinnatXrNjA6XPKavmYVWNJEFpQm7wBMwBkYnimdpejuJ4e4LehTND",
  "key22": "43S5DsoE7h6yisiPs97h27KX1iU679tReGbRpnHNnc5dXBpUuEG9H2wH1kRoiWg3sstC8LxGedm32SbxnsL2LTke",
  "key23": "4ycAZuZ4aKy3mEE6L3zg6AYHb7PS8j4rKKjk5v9fGczq997GnGqRx1qaUKPbE2G3EUc4bSqFCu65XXxTZHaknnuc",
  "key24": "4dX4J6i59jhfJtaPgXJc3zdgESDLp1gyhaQh2ZDYcSqsmVgEHhhmK5W4ghyUim3mJpMyBa6mHShUF5wEBT5nfns7",
  "key25": "5teWmSGWGzUrfomTFxaPrTeLXPkt74bH6EoFzmKoBxfY2rAiv17vHwT6Bg8k6FgrHKogJLYLciRxTzBsN12c8Rpw",
  "key26": "5aCG2Ejwv8DPQR4GXEaKEnNoyYTMoaRadmitQYYJ4Aian6RF5iS7PbuAtkbkdfPJEPmpFErFaBgf2AdcGTJg1HKb",
  "key27": "64ywqiEtbytAT78csnwxjpUigjr5GNe6ERfEkTNh5FHLeg6g42aBAvycGFrnjm6ZCV7b1Vr7mAqh9JCrxL2HGKc7",
  "key28": "3PzSAW4D42fcP6UMBAWkTfqPRLn6aU6BGVXivH9zte6jDfirWAJg9V4g3uTrmCMcmAJN7zBmGJkgv1jBwnrDxN2V",
  "key29": "3w12GKtCccKbxpr1sHX57KfVxLMbqXDpDD8sqeL3GUKDBd5WBo6FVXVSs6UReRy17DSEdUMHxKPh9RRWhTbDNja",
  "key30": "3nzdDqPT9DMFWjPyNxJdsh9MkdYE3jcK61aZSu1Aona66MVbS3uubpi2rdGpn1mf5XgjmgaduWq6rzvJfcVySWPR",
  "key31": "gwwZchUocP4nB3KV5Nq7D1UFPQqAcAP3z7qN61hs9evj1GSDU4U8Lo9uNibbwRbT4ucX3k21m9YydYnnoQbWUJz"
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
