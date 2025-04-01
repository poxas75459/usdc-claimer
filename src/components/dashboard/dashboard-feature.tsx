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
    "2PhnFNQ2TTyaCw6TyPr1o1ZhahBUNMm2nmeUf3dXyqW3aEedzDg4Ts7xfkhMZzsgLftyne3PpBidawqF3hkPUVHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63aWecZC8s8gkyTMuwPojemS41jxmT7Ghhy5j7LKDyYKg5JsXNaYBik1QjcprnqyKuRrXTMdCthB9JF5XPqv82uP",
  "key1": "5TT8zCpNhXLZiUMbAhaPLmQbW4HCsdG54DRYFSA5UqzmnALzrwy1iuRiBG7dCY9R7NRuYyH7SXE8yZVeQtVUzoWr",
  "key2": "zhMmruX8EyDSfqn4eH5yQzdfNGsuoEVrv15HzfDk9xE69uvZZhwPfxXfX5ZrTWnu2xc1RsbWzNHRJb4dVACTe8U",
  "key3": "dYoiaZ9M56LVSRb2SuyDNpcpihLTXjTtT4xVmLGKV9mPkP6DksZXBkKkd2yU5Jam3EDQc5ovepXh4bCjhHbNXyJ",
  "key4": "5GgQmPa4AHgs5REkMzHqkPBoC7gxda7ucxTBRsoLTGTZN24Qfs1sozUuAfdsmpizohvFQwdd1z1YLRdSMkzkmxUz",
  "key5": "dk3zMxtgnLtvdA8eRjAWUVchK4jfFEc827vJEbp5HQsojvsceJRuLnwqcgLQeZ2Why1HJS69Ucu6UCx6MXCTmAF",
  "key6": "2G7i8C5sKw1bYDisAM7DJeQ3SEoWV7bcqVCLWSjJwAm1GfhG1RtZf9oS4Dw4MzVTdmyzNXR38MFR3R4AB9Ghxu3v",
  "key7": "5Uo2GQTPnFaaeeZV6UpjvFsTWZuzLKSYpwTqhMVM1EUPquZ3HzVWvvLrzynNF7zgLvJQQUNaDHKVg3ab6xidF63Z",
  "key8": "2UkbuD4KBpv5EBpmMPMr83fjS4bozdyaVmwiP4Yu4aPsx4ZnX7skBfwXrW5SDenBv7xchv2KnLZBPdVh9k9pZePB",
  "key9": "4tCMSzucxw9KSRsqa9EMajeooop8QUY5AMZmVLv9SuG3Rmev8UQXDFvAxwrWQNp9YdBxXxRxgK3BtqfNhLiwWPiq",
  "key10": "3P1vjWVCSZqJp3VxyseXS1VBNCPxHg8yERmfiobktmi5SmnRpbijbtv2jQX53juqMxzhhNB2AoZhZvvunkGqZQ2q",
  "key11": "3MF5RNQywnoCnxL8YLTwGwig5NiNbySLvpcFuc1Cxmvozd8RsEd9F46UKhoik3Bm57zeruS12v6gGZSaYc6WEnEk",
  "key12": "3AuTumMZAvWcEwteWH61UhvrNRXnxche8BUCSraSUiTWQu8G9AfJYH1DFfNCx8UtuoMWauaKgUXSifBwLDwiYxZz",
  "key13": "5KKrapCZxhhJdTKPx75NVtiaj76AxG7HiHmrmLCDgfcQXDgpDHLEWaBJ7v47B5jxG8gbbnuDtiiQEeWuTZXhJ3vH",
  "key14": "5QvhbWMjBarv9ByFepEG2CahK7CGYDVVJeGEXsht9p46WAqGACBtdBfbkVbRL5TmscYGiyLdf3ukmHs9D45JpzxW",
  "key15": "22U6cc1YXkJhxD34ASxdWhbW7DhN1ueckxr5h11t9Bwb2FfFYMCmEWFFaaF28ohJnN1rLbmegPFeKpEVDoMvcpxL",
  "key16": "4a2jaPm8PWkieyGXfEm675XNBhCrkkmqk4oyrbzt5agPfJ1uFpRh4KVyPrEzseWHp8TrvWEcGpGJ5pSmWruDBC1r",
  "key17": "5anzm1fbjBhjXpj1BU26oy81aXBz2zyhKxhv1XSBQcc3tWdBj3QtanJiT2bEtyfXGkJfj6ETNRs3wsSvAttS5yQE",
  "key18": "4yASNHEoqfNpe3EmWenBL5grqWPHVDRMK1827QxGVSKTnNj73HDbnojD25ke4acMnpycYtCehmhmzb18PgDMZXYx",
  "key19": "3HF2Q8SPumznD9DDk7MWJwG1q9jA8jJobBcNUhtEa5vPptDgJXi2tupHPKzSRTeSt5BKUVe8nZFmMK2dD4QigXSr",
  "key20": "2fyExodwkzYxNgDAqwe37zGfpK8eV6KB3ucYK12aELT8gCfL3s5u8v2dCbYnJhnxjegF3sV2kKc5DFP4wcKCf63n",
  "key21": "oQfRbHR6pVpJAQyDbAojzBTg1WBbqXCBbyfHN3vbtaFT9YUCTLvrtQo6HLr8Ez3JV29TA735rWs2Uk2MYm1EozP",
  "key22": "2H4eR6epUMuWdJTmHZAAuPoJBe4tf8KBFrvcsZvJ4PuHCMZ2LWuQHrCt3pUCHkvZJDDGUtx1YFprrMb8aqYr63j2",
  "key23": "SN974FhhvmMfTfhsbMhST5SgrWmjovR48eoSCxfy2kntbogfVTYRqAdeb7wm8LmWZMXpEY3qDb94chJJ5E3KTwL",
  "key24": "3GZuxyjG2n7jLoahHcH8rvsxgA4tdooMnoP5hNp2KcNHj8fkKt3XGUmGyxKp89U6zuoN9aCJ3MESDbcTcsh8kyya",
  "key25": "2CcSHbqKCjFj8989sdaAcpanxmsJNs9vcnK3HEFPhDXY75Y5pFwu6jn6mjiGBawzDBGjc9rztt6ubdTmfm5cj2pD",
  "key26": "4ffbLsKv7RHt2aNpsGY4jhwNjwP9Rk4DKYY8No1rP8Qo9UsDhiBWhLVGWZYSVh3AMd7awUPiCLn5upJ3TPDJzCo6",
  "key27": "2kaWqKQzdg9V3kWqR8yaVJsBATT8iRof4YFfky6yf19BJaJCcPkFeRaMjZYbcwhT2oUnDTyfsFWDJ35EhWZBxVMM",
  "key28": "23q6jcMeJC2sUMQ5BLghRFGM9yiuPG9K7b3ywEc4M9rCMxRGoegGcvegkwQfXWfJ3AdaUSzpt9JhUCD44uf3UKUv",
  "key29": "5edexMPvzsJEc7zPKG3gwGvqnB4FQgemQM35rc3rtPtgaDnGh1fapEZNcQXUKu7abdQdUr9758bDooH7u1ryT9dM",
  "key30": "2p3wYTA9hWHd1a7M8XyB3Pwzr4GouWQiQQQ5z64GsCt7fz5orJvqQYnxf8CNYsjUiSPrjP6VJP97H9UUVsDnajjF",
  "key31": "2ruEZThyWp3H5erxzagCXfimZ68XDCwYm3PXSpMUKJz6SyU5cdNSZ3U8sr2h57zN54ibmJAWPdGLPL2tiPWCXU8c",
  "key32": "ScrgVwGu45mNxhYp3BNRncjQ1TbC4fxpt3RwU3KCxmuyu51RvtH9gReMcay8ogv9q2Lz6YoW382T6wKFC25cSur",
  "key33": "5mcFGDEy7A5W9sStwtfwjLcvNs3sbqAM5H9bYUfRjxUdyVWZFZa6ZCeY6u7WbCn1QdEa2XMgLgi9X2hSjpLhyU9w",
  "key34": "4gJ8pvKS3eM9cg9c5Aer4b3A2kbu2uD4qF7cdrtiYeCLbQH5pkHnaohDV9nbeBfr51rMG73PgBqYEnb752yCd2ax",
  "key35": "a3mAdgFfwgZzE26EnEZ2NtBk5EK3iP1T6iLNJp6a52BDBhtjoukSZgqLwyjRBwZ48343T227v1a7FuSSuSA1CYT",
  "key36": "3RA4mr4UEQ4xr3jsJDDB5iQc9GVF4cjyV9Sq6oTb44csu1QCXQkREmQbCSJbvsAfw9z4NctAU4boSW3GAjrgTxni"
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
