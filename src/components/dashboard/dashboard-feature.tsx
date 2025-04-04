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
    "L8iDAxLALribasH3aX9w1qmtDNBCRFabasaCJWMxAPDCgaPUqXRDREgNFq6B3efA6FFHVXBzZrRhmh1VC123Yvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UZvfpb1CUgS8m4bfxAbeZ9SLgRVzpVyn1dtmiqsuLBV1vZymHEbwvcvzk4Rb2MhvaTsnXc1QjHDUUdM8BCnzyw",
  "key1": "5poEq59Q8pJuG1vmjGuenSR6bse3zhQ9MCiHmsgsSBhMmiYGDSSHjfxpQGFN7kfCNK5hKc9Gu2LV3c3DrkirGAS4",
  "key2": "22V8PCoxJ97CG8RrggffDv4B294qwyuJFEDLJk8nFHbth6BmPjQYisJrGkbC1SdfxYvFXaovnZXf1nZm47TfGopq",
  "key3": "3Kic2NSpALpx4By2tt2f1n6AfZiKV2XqyAKh9nZu2knVoXnnP2R6y9NFNoMworkA7RTpmWomWtm2xo1Lw55H7ig4",
  "key4": "5N834VbR9KBqmiwGSdt4DqSTGnDEWqBUrNrrLNqtR4WpArDr7KAAmm9yDBoisRgAqRdi9UBeMYEdHDiiKMFz77Et",
  "key5": "4phRobVV5pRVNpwuHuygbCcg3Ya85z9SGE7eTyWCzA7HTZwNNrh4c1CTyxkjVdCkHuMEmSc5H7oNF5uLszZmxMtd",
  "key6": "51cLW36z4pxdpRV2kkkfRYa1u6FGYY3Tq6bzCF2jfGwJAUpBU3BUNv85Lx4xgZYYCyKeENbyXGmaPvfB5zf2T7LP",
  "key7": "3VfbGQ88sYz9T8mme6jvLi5UuyLssChJiuhAsvjuSULpBJpbKeZcxMrRgq7BFY1C4EMbzYr4agwUJtgvLni1zCZt",
  "key8": "2QLK8pBYtu42CTYwjC7VLWrzFq7xxryMoY5XMyLiGw7B5kDCFsvREaLHCH7LWEXHRBEkgyJzUQSK5MegU1XNkYbU",
  "key9": "4AwHVuLfQJUwv5ognduxwDpk3yeenSZNjRjXwn651aKNZ4yhsu6xPhcQ9mfGbcFJXPStydVECARkD5YZpoeLkfbt",
  "key10": "2wTiZDMYViHduUZWFEHZJndGUjUhQigioxQWHG3gZVdgHoKm8mkNXktKMfBjWX6uDg1g4qmUmnPyrt2ZqKVzRsWT",
  "key11": "3jSLXVdXoy8X4ewVJ29x4sb5MUk78YqmAEbwrpfyBrTBBAqv5iZSCLqCpifu4trqf1Be2gqXMmPpCFr3SFeEE8WW",
  "key12": "43nR31aoFTgvW8pZ6xdgqAKpgQZNsEbLCypSpuprwqgMPdnjuWRV2U2EciyvJfgzmLdWRF6iwS8ARdWwbkS4LR3d",
  "key13": "2UGSqbf6KzjBuK5fs7jiaDxwhSrmpuHqLZ4iTsohmJGVdQbCCutt1H6zVfL6t9fo8sTmkMSqqGCztJhSYydTDt33",
  "key14": "2es91tSKHtGu5TpDrRMNLRzaeeijTS3pPQqtqG19SacCsGPxk9F37d5fqiwpNmZWnb71SJnA6KjpCTuEimtm3B9J",
  "key15": "5Bw69dT4PaMvjVPESeGWsKsWJ9sNSTJCKfZNyQHjfspPV2KJRbwYnjppaYaERv1AcDML42r9woKHXMaCovF98r3M",
  "key16": "4mbFC4pRV9RAzHxQyjbRuaHUbxpu4aZRh2iNbh64PHmLqErxrnsfAERKLdNSRBkESVhWkUzAVmk89FU1wkuDqd71",
  "key17": "63ymCUSvNFBR2Aa2tMG8TYSN4wmWXpPgQnDqamC71isQBKCt76r2chM5Mx8qx1HCMhmGQsuTen3BiqdraBSzJFFF",
  "key18": "jTsGadzq3qvPgPWHzWSNgTyZbxMHwkWayjeDp9KLTMzodKUmd51v9rbo4zrcSryEhpu6FosLoCNLGfiZdZJg1bZ",
  "key19": "exnw1YY839y5QWaJASQNXDQwkNzHT53LJCGTp1dSdM2XFF8kieMfkeGcUeUwpPyK44mEfhTTCv1oLGQmNe6pPR2",
  "key20": "s5KnM2so66z2jpPQpvoG6KFMV7HjmYLVTrqPaVYcYYAn1uf9S4fT2hNoQV5QYSTgQbRfWYmW6ANbWXm16acFs3H",
  "key21": "49h3kpZie94v3jqtJEFzc2hCxEGyVYd5UhTugDKhPa4TkSoA92ZFrWHvsjLDKmJWXDBLqVx5fMGgLHRn2kbdSRVA",
  "key22": "2hHWsDW5fZBTBmkum4ZU4LqkvyXAjh7WnxZ4FMoNbrtTAwa9Rd8uPLBoVbJ2AJMV8jRrBfPK4cuHBp6AZayF1oTh",
  "key23": "5asC2avs8ZKEY3EPUAECBqUprfNoe7VDzL1e2m74aM129j76FiNF5PCGB3KyRtBmuZKJBLCZXtbHuwG2JgNY2fCs",
  "key24": "MWx3frhumo2xVJBVTDQrJvisQVhkfsc4XZ5YmxMrMw3gmm55muYDJ7g9ZMkorPpRhdaEKHy9J1mMvACk3uJqXWr",
  "key25": "8YvHMVgCpJpvJH24oXV8TavWiDc9yRLksCGZJzFPXnbwWyFxjgXJrBPL48h8zCHARtB9jdivJCPTuRHQLUhHUWR",
  "key26": "3tBme4yCwEvXj7pBj5BqCX7TcM3y8fri5ZFa9j2L2F7cAJyv3vVEAh2GBx3RMtR3ko5jkCjJtT6dKU7c8mra6JUj",
  "key27": "3V9HS1H3tXhV6LCT9Cr6qgrdUFYtgKt2Yqd17awbHsfpH1T2zQvCGEYVixjDHgNAqve4JHbV1zDBxiweKgNi4GGt",
  "key28": "2RjRMYcn4HAznTnS2VMEi294GcjgP4ZbFxhqZ1nUSVdJD7gEwwPQMdwiJGRL9QRNYCHJqoJHq1EZEmpA7kdgN7aa",
  "key29": "3teic6LSizfCpxXhNiPe4PLpV5CQYqr7TxL7tsoaaGtZoCqBJrywF9wg8FEEQes74G2NeqzYragybvdDqexY3YNE",
  "key30": "4j4Tifi1D8y9xfSHHCJ3WnBmvka6cNrKQAwMwQeftQJYroRv9DxjhZrPk95a2yg9cbFeiCRmrY82sdeLb7QU8XYj",
  "key31": "NxcfoSKAGu769ii5UdDnZfmnFmvze1bmW5aqRPqVW6D8bMaDsub6mMH6J2VUhH6NvtxxAdxLFTe4DVSns5ebRUQ",
  "key32": "2495i4F18ubW2zmRJzySfA3teyDQrbwaifoVT46WMpntxfbX5Jf3GGTrVqiPD9EikFBbASpJfCzR9fs9NibpeTRv"
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
