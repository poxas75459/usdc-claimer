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
    "kywBBZUtaQqDfFQCDYfbakRigYiG7q2Z8AHNEoeWYWerk76XwhsAoUVHWcbpqeRgfcv2FjrdbPiZpD275nxFDFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMTNDcjrVV1reZBSuNo9Y78zY3a28SbdwfQ6u3nns4BZppRddRAjyCxQHwb3pg4RUtTJFsghff9oBUhGjR1s3iG",
  "key1": "31vRUzjivv6XZWj55Zt8zLLVqix3iVzUdAr2gA8BzsH4muo8agMiMaLyfKwocs32axL3YMmDPvTzTCCakdz2QWUn",
  "key2": "3D7oEjafsS3ov1wNXcTHxkk9ca52pWAADi6u932YF3z4iY1dsz1BqP3uJvU4JdxJskx3XiTyWbUwZuRNU3zABHws",
  "key3": "3geZDmAUuGQkuHvcy5N7BDAbXAy8NK5dAguD3PJXiv73Hv3mdbPDfTWvbrokeB7Fnc3K9reZwRPhJugUyxGevxeJ",
  "key4": "2wu17MKx7hLKiiyJrqQQwxJ9gQxkAi8p2AZFVkgjUr26mFLQ5bK9HWCJ5n8MmDTVgPYqpzAuds47iLesE6zBtpgn",
  "key5": "48KWigPSq1LThc5R45zXJWAcEUoN8TD22NeBz8u8bV4H5sP35G1N9p4MKdcAzrZxFHcbCBJEaiL7g6KENkV63uxx",
  "key6": "3Qp67rr5iBb5J8Aw5dL7KfDFiHtB3XrJv6RzyxHbbU24AaQ2RaTa7aHif9sg5g59KAnVPx9vGDcbSfEsrvBB5pn",
  "key7": "3pgkM7zuyHGdtLAktXYQTVXDvUzWixuHgqfeha8xk3rKXsgzsNvXACpUdeGW6XuaVU5Arv1aY64ofbK7dDXTdp1h",
  "key8": "3FfNJrurbxe66Vf2ozvYaQLiRgLjP9Y5o6VX3cUvtoUkuAJ96HL3MSJDT1ukYwWwRy7DP2GGPfAdFbeoc9wjjJZV",
  "key9": "21BSPBiiPgz3qBzD15rzh3jhUnE4NQWXYoLZqnMCseYMciLNyZfEKncS9Bc6CLcMQQJY6Q8fswWbUnAyL3HtxawP",
  "key10": "4ZBEjnrfR8kG7XggtvX78DytCZ5RHw7pPjeLrbjgUGuxMDno5kbff9DujjqhasnQNrRqFwzk1VnAeU6DmRDtFBrm",
  "key11": "4FEaWCSNYfKJ1D2bKvF4CqoiyddarsUF4DFuPFb5yZJaz8sDErU4HVdVg9GJdU49QFLsy1RXUngD6sTEdJYZ39Ym",
  "key12": "5XUkCs6tzH9vake2Xvc7hDC139cZSFAab1xhiMvzBUnqM54mFzfio27uU1UoxUDUq8VHWQ4SEeWDVdZiS1sz4rR3",
  "key13": "5hanAVJ43hfYTNafEfRhdkNH1cgvKTQR84A6Z72U2PEewbo3QSvHU8aZX51cnE13ruUzoJ1TL7che8Wks5dHqZBV",
  "key14": "47kXQqT84YuL9btwr6QDtrfHCaao4F3XjvN5acf8Na5FMPeoBfH7zErs1tmGrdT8XavNPfg6HLkZ3N9PtpSk1MUg",
  "key15": "26Uu6PSAjcdE5LhLiA7GSKjrAUoMxenhM3JWgqKfMSd6zQdGP3TwHUKSPuECLPTfhe3EWpu45NjKsXn18cak4ZPm",
  "key16": "2nPWumw6Sd3zJTnc78Lv3Yrzeq1fxGAo3gSJubSyjjLrtULZLqwtjScs3i2espL3nZJZxbuvwt3ommmbYuhDcvAz",
  "key17": "4hFqPnFgGKkPkF1mGD5ianer6PMsSQo4depojkB9pGfMgPhSjxUghk3wJ8xFtEf82W2PCaGLoekZnFAZquJfq8nA",
  "key18": "2SQmysWcy6vNpPAnQg2GGQFKQx2JxMFTdQGSznBW91mhTgALF5pQH8rwxctgSPHRwGuxWyUdRi8BF4eVf4K5pya5",
  "key19": "5EZZ4kButktkqR97PY1TMPeuKXg4vM3i4tHYCoKY6FrYj7NCKtK4h6Sc32sxn3GWfXcSsTTCT2ciZdCNmC93T1aR",
  "key20": "4pXRYtLcph5KDGPQhWDZ7FTzrxfqNvM8r4ob6t3vHrQ4YipdTtjpjA8VcrjPjHD4Laf4RmbA1jKJwPyCuiJB9E6d",
  "key21": "3psd1gQ5E97KtrpfSCCpEqMUWymT5ioqMN4BRuBwVsxDbavr9UAgq3yVq2zoWWfoRccGLz54DmzpGxs2MyXzK9Xn",
  "key22": "55QBqrcnMQGxJxoYibZfCmCAjNzQNLjgPg8qrp2JRkEosWLZ6YPQiEiqsVtL2ioTjteoV3MY1egthEeXpHEsAQXi",
  "key23": "2FB8vTJ8hZLGGW7XnM7zvCN1CZQ3B63tnoEnDfwcQF5xdXFYpjBEdL7yGfpS5CMTGN8nCXKXDAqt454wbZaNyip1",
  "key24": "29xZ5KAjkKzpkEgmoAKeewZurB9QW7MoTEx9uMFpkNY5rLyLFe821ZZYvPEuKbAjLsM3xvjKcjQwbjLNABRSnUU2",
  "key25": "8ovLtDjwGkiP1SZDcaJ3UV9Km4EL4FHVmUpgSFd8Wsnkjjue4YC1TWaCtCSaDkVgzwmR2cTpA9CVgcf4WErXiEs",
  "key26": "5vK5Qv6csk8pG53KA1kTWx2CyxX77SFAsCJYvtz7pfD7xSBiAGNkoXHMD9cXt5Y3oHu3xW2Tk8pGk1hC6p24fgmk",
  "key27": "5csGKbnfNJU7uZGAGpoQLY35BSvWGZVzu4YXNL9oVQnxMe8YUe1SNRCkiMQt3vKQTuymQxov9wjRS5D9GTu6nKYn",
  "key28": "44FHtTYGvsizSN4S4sufqnUhNYJ7fAWfX64ChRC9enA2v5SuCnSdiDkPibnAJGDimufftJVfPVmmvBieuJwzRqkE",
  "key29": "37pQKnszsL7TdzkrSk58piM7xTPpaL6V1P9S1wfFsi2N1nureg9u93TGowZ2rjbm18i4Ga56pr3VyKTVtd8Jauki",
  "key30": "4peQLw8WYHioQHY4cz2tQxpzaELxEtFKXGNRmwbtpm4wfJTBZM3AqoneaE4YjpEEX2FH8MhAC18Qp94RvBdw8fqz"
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
