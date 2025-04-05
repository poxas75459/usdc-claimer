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
    "46AuPHsCggoo9rMEVYLV2QBXiVUdgAi9X68xbytVhvT6SUhpHfrup87PVL7mmv8rgDeA1WkLhTMGXqgr546pzAer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xRYm6uVW6BsmucFtyHJk6U1gnyzA8Fc899XsR45JuFGBsZzENRuDWCFxDASrTYMPhb6fCDL51LMxRzHypoyb3m",
  "key1": "53N2qKETPtHU3Piks41QzjuZPzfaaZVWr2tEXUFUVaViMvuGQcRoQfNVLmZL4UCmtH4dWyzTw1RRhAaPyNpqmQuN",
  "key2": "61PGUFiJtXkzXgpTM2VcYsX67XNjSH175uVsxZuiUu4G8PpvgkNyCRFRbDyoSKeJP9Ef8Rrzi8CALQznDPWwed7T",
  "key3": "48255NdH9i54jtznU9RQLL7ByN1Rs8Mc3XkLgxoXENsbZk2tkzm4DuQnbx49Ny4NLrLHG8oeubSp7LqXAtrLbwGs",
  "key4": "3WJ8z7EEstwPuSX4m5cMk3JFyeYmu3qxA1697wVKftTmm6xQrLWCata9K8RkQh4V4AyHWjnunacnqH9hSRKrXh6p",
  "key5": "22G4BM1ikFuG8hnMGsr5PfecMhSXywyha2DT4HgQfSvMK2yxdXA7haKsQXMd7teA1K7eKhk1YeJ2fYnpgEVmJgNB",
  "key6": "3jnCuAnHo6c4Gfzt2WjfRh8cB5EUWn7CLBbEHkEmViCEydDWexQxS3YJxvqXJmaQ85Xw2EzZmdjMj7AHAvwCMdnU",
  "key7": "xhSCLABS17k3e4cGZKM8MawvpHcgdH7gycJ5VWxj7DWQC85qHL8TDo9XskrbKLgKWgarMSzguLW9L71YoNxWTYD",
  "key8": "5vATqZNaDxjjnmLyUVqM87htKP5aunJcatXGxBGtK8e5py9iJLmpadMDza41N3obX7pUJLf4QHuoSyHnBcidxdbu",
  "key9": "4bxsw39YPrWeb4kS8S9ewPDRc8fBjtcdj9fTp5sKNVH62CNL5Fp4BxNmWJ9LRTuC688rNHnAn3Ddksgfs3UC92R8",
  "key10": "5Cjc4ip5YDWxnTUcAsEWfDPhjaxpEETXZxoT3DvC4hxKNHoWMckBhgBD1F4z9Pb8uNA8Cfw9EbJgQgJ8TzkyqAhQ",
  "key11": "3WDKFgahgY7Abexac3VrXKWYK8vxmCMX8fdeKrpTZQMCDB7hbempeakXJ12cmUyJD1x3BeRsbxqDhBGNZX35SF8P",
  "key12": "49pFWZfkvidWatEhHZAyKTi45nJHzUQznq4iB42dLx52KoJan2B3ynw1EfKkmkcB3nVsFzyH6AaTK3ng1bQbNMEh",
  "key13": "62xBM2X93KusDAuPmVLRYHEdubhfuZBbGy8HuiWNgTiUfCa67xKdPxanjMAzrxdRkiCf5qidxoBHNVpQQ2mrcYEd",
  "key14": "TnHVnXqsawAtR7Dv3KjC6fNWNSkTqgWq3axfLrhK54nfX7RniCpMYiYkqWAo3K3tF2XDfTTeAPbX5fydBGmLq2b",
  "key15": "gTaCEPFrSLk3ox2RKbMvSwWQcysBLw8TfTrFtAqp1GHyMsbxWRMDzkT9zsfbu4WZWoZKwzdgM1hNTaR8S51yYBb",
  "key16": "5NsTccb3G7niFHaLQCQD4n2w4pydGH7pegWnuq4q2ASk6esp2jrMY8XwbiaK1BDvmgHUqHdTZe1nvvCzo6Nqsb2r",
  "key17": "2FGFsu9tATj4jYJpAbj16EYXZAhheoMB2HyPUsbNvATworJLSRGUPHmnwxwpBVgMb6Hdc8xnYrPB9Kih92ZEFU5Q",
  "key18": "27JYKqFfuTvRmc86ZEf3XUi2meCyngoWbsodGS1XkRJxkRiAiQEB6HcGER4V2jQ6MJrSQRV8rA4xFEG2wK2UgzVb",
  "key19": "44MYotNWw8CJVFKXMxyKC8enpc4vQefpTTpr4wm8VooXDdVUNJtnRu7nxURSTTCiAJHY2McxfnjCmni6X4y5sJt1",
  "key20": "5KsTNC8cZrgKNDtgLmkPngHUXt3HvwD3bdyYay7C8wPbeettPPKiJWW4P1Z742Fgg6NMs26hvUHGtdyw7syRcqCL",
  "key21": "x8KphdCvRgJxfEnBzfhYj8CCgkTme7FSxEZE4Xbx6Y528XLAkLx5PPgQJTwKM9CT8AEKatCg86Hy44KMmHAsyXL",
  "key22": "2oGQEYo8xBvD8vLpDdMWo8wcA6fFEKtcP6vRjrCzijjnAMZEXKAr52PLZzYLnYhNFW7dNWH9DT1eC14Lpx3JKuF6",
  "key23": "61dpPj54fQSEtrVWhBi6ZsAReoaHQB7vYpey7XKguEi1nCKvesG8obLyo9s6sRMnCMwBqjoExqVeZACTyUHaFFay",
  "key24": "4RVGvuJt97UqDkhrXRXpkFGHe7oxVVaMUKLW3xsDv8Tx7U3dH96AXmsU2BQN6FuAqkUiQ8zBJTKZXA3BRAwbrd8V",
  "key25": "2XVMPBPL6dzp5eqJpU3L4LoND6XWrwitT8EUmWGu2Sj22q5we2mUUTNZq1kq8Kn3sTN1L8xHKtFdQ4BZu8jTJAZr",
  "key26": "5wcprMK8P2trQ75DbD7ksh6DXLATwNav3jDoZsLZwPM6M1fA5xvhzKKnfWYnSWGp995ruRsgfGX8ajKXbZ1LqH6a",
  "key27": "4vR5N2wA6gHC81JMdYWHNG976WudFmVLpUDYiQAEGdDCLqqYhi8rM7RF9Sbm9LpR77ExKC7mvcW2h1F4jv4iBb6K",
  "key28": "2rFmqkKoNYxexAp43Rnr4ddaEu2TwxTUDKSTG561GzQbcoCA1zHGPV3iK5N6oAy6JoNuALQYCRguMuFcSUquhb8C",
  "key29": "198TQj4nmSudicb2Ug1868qGSJfMKEpoiuPXgKmfX8DTyLH33ZxUS8mrJktTuL62QFb9DBnbybeLhEqrAuT8dMp",
  "key30": "4Vk3LBx2hYLVymjmRL3PWG5udEn7pGCaVjSp53RNy4ytjz91f7pnRZhhndXbHqLp1q1Q9mWe5KpFy1u7nqF5FWUZ",
  "key31": "3Q8G4x1dk7Ljk64WhuAuiRYKDjgXFhBE5VD9XXipWbpXKUYHEunQ2oMZwMYuBfyVyJbvrqmZg3kEGdGSxGpANpCF",
  "key32": "5vdMhzuZJ2hqNahcGzbtbLG6dEnguex9Y3ALhjUfSbS6cm4LMiJWjw79Dh7dB7wXA13sCcD1giiDKFWkzb9BjGfs",
  "key33": "2SsFLFtkDeg9TmTFDiZrojaKdqxkUsfjLuMiC6ToJp2KxaALoDjJyNuMhyXmkzyfYy12G8pXg5HMXnzXudQNwU6R",
  "key34": "nFSsSqFmDtrSNZrFzeTxojqWnfsGiemH7J3d89mfXPm3s4p8y2KvFmsn7HeQipeSZSZ1uC7Z21usgMA71yfRYz6"
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
