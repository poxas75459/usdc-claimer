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
    "3YrBvtV3Co9ETezY5n9YELYMz1nuvznyFZWRZ7U3LfAFdnq9PT1jW3LbVaQmvLwZtrs1RFvfQedd3j3RminwjMfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DHbuZLUwXhwizSaNDxkuLPCiHXvVMFBD9zuGMsdr8sMME564A31ZKXNwJwUDP5zjA77QEpR1MH61hGmsu43Wxv",
  "key1": "3U3CiPdRmEDJC7hPdzuVwkFA4sKpDKLsFJT8R2WEZQUXEbFLRvmf29JevtroqZqFnW6bZBhpoFghzKMuVRktBFEH",
  "key2": "2zpaZY1kTYjogzqSknET3kLdsx4i5ZbeemWaZ86AsTyYQzTFwhxxkJFq16xAoxNcBfdGNUduNc5j7ZtSygr5cEQr",
  "key3": "25neX99qqjD1vsgqBkPQXDG77WLVMzW98xGqRJLZB4MW2WpePHwmM33B2NZfeU6sYFE65ARw2Embec6yRypA5xhb",
  "key4": "2GHGL6xVSVRmLtmAAChBbX3q9X9BEKE4HGfCudfM15882Q3cEbYhNyrN7dR1xYMVwDsR7WzNtnJt5yqM5zFewLwv",
  "key5": "5kyR8wCbxDHD2jTmC5iFJLZkFkRqy5vUecz5w1hTfruAqrntaFCaKJDrCiXSMn96wy6kNY3K3ZTzNtN43W24d4oa",
  "key6": "2hEbu3zAgqz1k3K1G3MvuKqvV4dagsV43WaeKreK3pczxufmjirFwz3e8ofFsvF5A2SfVEPyrERYt16kwX7BtdXx",
  "key7": "VxxzYphuxCxGirjzkJzNkgCfDxZHKc2imMPEPWSi23HLNJP5LAX9bEP6gz4Td75D7stcdkZVUnERvyXrGrZ4hgJ",
  "key8": "5xi6p5VN1gRs532TVQYX8vUhUsrdDYUjp2dW5PrYiXa94xwHWLRqSbXomdmuMbCeMTvWPRLd3byvRF8McgjV5UmR",
  "key9": "2bZzekBtJRWNmw56JtFK9Ndea9VNcqWEJC7vL7J3FH5bGDNW3FuTVcKehMso5g2AxZQegsKsVbkiHW29Skqg9LLR",
  "key10": "CeCGNaS2EtPw9gm2svT5XeTTUfh85JAK2wtDt4uAcRpTGvRSxucc9GXzMR4RtpdABYWs7zoYQKTKBcji8UW2vFu",
  "key11": "4TVfMMBFn9MzvjjJA55m41ZQajYS4tKS6McLTwhYqYCGg4HP5tJJitHFfAefjhxtEEnKsRnmVQSCQb2qZEoh7Hyg",
  "key12": "2jAa9BRNrisRQyLFgadLwbSNVwAXHJmyz749PYKEgrtawzxM3JF3AjXLDF5fSzJmsthDHRuQWgTsatNDJY6LJpVL",
  "key13": "yFFcDFmEhQKqHoAQhha9TgZMrse4dy3Mf7xsFiGSyF41P18UpZEmJ2wv1EkdCkc4XBhF7oHhHEwZPAjPHvcMMJq",
  "key14": "3Ysg5X4bUYyYXHU5xwcHh9Dppp8TrwCixcfPbSw8YCfCLJJyG1V7fzrxFqyHdgStAsWVfHrPjXTkDfBDdsbgPg9u",
  "key15": "HAUSNyYUHjwzJFgShoZnfioeNhbJ13bAZYkzLLGEEN649TpSapAo7uUeVcGHBmgHxuJJjd3LsYqUBqnJZcL6hbg",
  "key16": "4y5x9voThLhRJN711qBJHtjWT2z2jvmpqqBUU2nMU4Kiu9ABkFgoLDDdi1qQguLQQeXM9kXmS8kQWotATs4fbpLn",
  "key17": "rDdY5aYWyNwMr6cHTmxwt4hgkBnJrxH78MNkzUWKxEvPvB2oxbvariYdJELEhk24oHFmcHhSjc9xaZ5rBnC6hgU",
  "key18": "kzKkiAPGZVUXqsb6Hb3X38zroPpRkSvrkmQn8eHM3Sk85gfMGcZSTZ3k6nRsdsRnZjvgvLfQQJrCxdGExmCzDPr",
  "key19": "3uphgXH4kqb7STstp4RgKwCn1b8RkCKcqwkjUKQWhPAZe7U3J1cNPRhmCmn2UhcE5TqKakreVo3PZoPSB86MHc5Z",
  "key20": "5yFQC1vnTygoAA7m2yFgcdp7pvk5MDok1aefhjpJZ8kHEuufePJtJVTZGJv5zfP7DvJkHAGCLYdju8dJBPPHc5Gw",
  "key21": "5in1kjCgUHYyyBJPLb4qRC4DgxDK3UyS8wemYJqk2tWaxeWsoU5CZrVeYX7xvpRbtMCcPwvsJCeiXLBump4DuHqQ",
  "key22": "5mmnUHzC1dhs2UTANz9as3zW3UaSkNy6wAvdLCzBELCdVmu2TuLkCHoAFaSPdQTR8cBLcn21bF2KTcSLzvU9JbDu",
  "key23": "2BvWQi7QFQXo67JmPjHsn2C1wNoBgvPyeBykw6bRsHTS9LSZZuZvBDWa2niQpFmpT8RYK2SP5ifwLKyPVuhAR23i",
  "key24": "5PrBsVhbmpBeYcucZZhf1jCiSyUVtAkVF61GCNHAcgAjDMwrVpK7WyGx6BNqbEtixBb1g3L28eLuhD1NrXN4sqZA"
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
