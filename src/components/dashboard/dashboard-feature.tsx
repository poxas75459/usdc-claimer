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
    "2eNWSsnPaQXnbDHoRAuEMNg9rfp2f8v1HWGAdVKyLgfrPLNWKCRysENh26EFvUL1TdtWxWsEGDRRkHj7M1W8249m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bqe5utN1nPLzM7bEdRbxwn1mGgQQk86ErzDHt7mA9RuCj94SALh82WSAkBPfPDnDXfy4TZeJBu3wVG81hiSBh7r",
  "key1": "QTLz1ihG5ZvgW9bJj9QuUnYGgjekjnp6mQX9VP5SguSGz2bn8oVUbfSBzRoTdXCPb61xy4D7sPyavUZdLK36eYL",
  "key2": "5bm2dVvDBRGymJND6xw8yvLVr3ho8ndBXZjvtzm5qr5qHH5DPLYb89Q43HxcCqCMn7sGEjj8z187nvN3uYxQVsfB",
  "key3": "65mBce7haMt1riPSua7CefiYUMMkTrRJkKUFdjA6tkYdcFaAhAiLWNy4zmcL9kEkVCrPPCNoU8dSJh8UgqaxwmwM",
  "key4": "65NyPQmYEqgUbEsNZWh7imTYZ4oAdqkHGj8d7ZDuAh21K9tnX69vcCCreXVSsNqY2uH4jjR8WaGq7LnXv7GXQAwu",
  "key5": "ffSnwwaGug2SiLjPyc7d8qZN91FHLxj8s6EctBno4VGBpX3xN6Qgn1gBGdjFnatxJXzorgPAsY7kqe4cRTwHMs9",
  "key6": "5ZV2Fq3rhsvZEW3yPtw6vtPvU3H2KA1ZSxTmXehuKo5MTVfRFeoeGoumA2Zt8cXBvLYNEBXhvoGCw3BbkWgETP1A",
  "key7": "5T1TpjpJffzx4nfF6LgdjoeUvr7ceHbwZtJnQ6YFowLP8S6E6FZjj3zy77QZUezTP9dZ3x2skTXqeTgyNjqFB9eH",
  "key8": "3Gh6WQpeemSiqfVPP3TVg856exKZnXSYvFMhjKhSETRkPpKH6b1WSBwMd3wBPL7AWaM6GPFx1NhRsiQQfR8RupHY",
  "key9": "4uk5XfpaMWVwpNc4MjadsL2erbszwv2FvMRes227NoYugwQq5sraLVyZmp6YkHosDDvtSaiVgw5Rqcd5djYtLmnd",
  "key10": "rPhu7MTug84UEnbG4aCmkjsJzXQXYW8mZQSUjwH2uQCR8zqs8qSJ3d2vzjytMynHGATeVJ36tvouteM68tPythk",
  "key11": "66Pw2dKoLRkXRWwKAqsAPpZE8br9ZwshSsY5KDTuaSZzcUJPs1vKbTrFqKbY9Gqq6Tmd99JRxjUdHwhfP5VM9GYE",
  "key12": "2usxT3UkUfviz9fShwzQ2Ae3P9qwGzL7Em4pDCdAxJ9tUEhHNureBodXgMzFVTezdw2a9m3xrUzk9DP68JVTuAdb",
  "key13": "2yebyDALNsgqq36hdXDm3cpE9H8HMEienM3rFWagRjKLJk2kVUgMgLxDbu2cEgoqBtsspN8yEYXH9ZbjMdcxFuHP",
  "key14": "2q2HAUYynS13suVHovjLv4Ef5EUFp7XKq9dAc5LQd6DG7UMKMAppXJKGS4UJq1DZkMepyE1ejfCMqbpDXVZRyohu",
  "key15": "5oVmJLsyqyP1YfdQD7V2tsuSdXdD4eBjpNqbrHNrWMRAGtgwPx477PeK2SMkwDNBvr36CQemeCKshK2y4UbuYHue",
  "key16": "4dUCAwdrux8HMBNNi7ozMi3M6ywBTSJnjrNBB8qMVWnrRC8EXfeF6hVwWFru6jsB6fHdeWon7PJ5255fevQRnmdz",
  "key17": "2uiMSngpJeeduaoy4LcvTjFs7Hkh9aYy69vDG1JS7ZHvPEfCRHuvyV71Gc1ArK1PnGM6Ja4rWdAkNiQNJPrLYbAK",
  "key18": "52i9KthZb2Tn6zHXa3LM29vKjKaVjcKjWvyqPEvaNpkrbcwzLKAWcff4J5mHfXCwURbYVM7oVPRwRABYycyztMwB",
  "key19": "4r9wQAoyA93TkzABnqoWRc8xiUqiFaMbHJ6GZVvRufC5xpvbPQXT5hfxxR3HNPMn2bWgtmwsnt6gqxUT7BcBFo86",
  "key20": "4z3SPac5D2F1C53UaW3FSFNAf2m5u17NnAPpjcxE8kXpE2NAjpHDtDAew7ZpwtNEiCZ1LGAQ8kbWHZbyJSNVbFfY",
  "key21": "2wTihFRF1EEi688JbxLh1cG99cTiGNt3Rf5ru847tsfEVrBxYKmrd3RX1vzkDmiLbNVDnfkZrx6v1XY5z65jAGkC",
  "key22": "3ZwRx3CGByX7CmfE6NH4SWAGA7vkPVTd36C2CQ12XVp6d2czqviRPDgR31cu3h2eGGC81cxmFM4sFPSbwSjJsJgW",
  "key23": "x73XpnhBfqQHzPX2FHoAWBhw7MTLTTBmtnJf1oViMDmCcCmVhBGGNxkzsZBYct9LD31YpSbUPhWaXFhveAPeyqK",
  "key24": "5a9qtRDBFeMwgRZmf3avscgwT9DRDBSazQNXcyehA9W1E21Pi9fdejc6TFgtg2SfsV2bw48EakxVX5BYtp8MCo71",
  "key25": "5tmpkz4BX86hTHDo5rBkQLFTXgxALQ4cnLe8Ns7e69gQr6pxrXaT9dw42Bwz6CM55LDkB2eiFMvA8LK9j8FAKGfJ",
  "key26": "3Xu56FVG9XWWAruZWwszGL9PqepmV1LLb1Y2za6RN3hF2seCqSY5irZvmv9QM2byq8bwS87QXHddcHYYdBXGQnu8",
  "key27": "5KBbs1ycv2pV6Y87zm91sfS4PcfsUNhHydaqQUwHHD3GTX686W5TmQnuG49EVqfTmshd87z8BQ7woXmVGRdJPETv",
  "key28": "5oqRwPYy4MtQuZQte5Wzfu57QJkGGTuhYLx2ZXRHtoEycyZkYNFw4EzKkh3GhNsPn1P5neDFzBSjdGACTKYnd8kq",
  "key29": "4QszBa97JVfacNgqPUojCuSRhkHPh5CsLQ4and3YeYKRe3r1KT6P9BPZ7E3UHFcnRWTiQeVb4E5aT6UXDn8idcCX",
  "key30": "CEEk5xGrSA2HpeGAJfu4iJYVTwyHZu9NiQRAUH6PYaFm2fnm9cnXUqGq3LMwNQFXDt2PLjMREvRJnT98XZ92zRz",
  "key31": "5TqtsVNgaYRgBf6PjhUWzabWc8x7TiQBGZUii51Vn7Z4w11Hs9q37ZDRM8NvzUcsdireqemuuyWY2kxwm3sCpDJ4",
  "key32": "2PCAK4LKemRCLFKaE6kBVrVmpRKf6hM3bCp2tcLHbhrrF5jJQVS5SRnWRjSGr8aXjHsmH5wcqRtkqXXRRZvDVegH"
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
