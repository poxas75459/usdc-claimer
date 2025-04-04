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
    "45VSUp2mYwCNcANvsPqUoAzJssY5w3mEQmw7i9McC2Ktzk95nvPJ6b6JaRU48vDy54JdD6yT2HXL2zx9iDPuNzsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnfEMcUULXjpssYLhh7nkYkDAYSCQuCGc5ABB49b13y9XXfS4kwv4Q419qkNv1ogvEiEk8rxDhnb6ypCWK1nDY",
  "key1": "3La1SeDGMxcNSYh6DXNAkzRHXMY4jLMXCpnHbCQYbYVXGBQMN3NPSRVdZtHkZFuJKyjLEsoiuCcKHFqbAJQrBoKt",
  "key2": "5AjiPbZt3jjra7gLUssQePk2WzE6rcSb8GVxKsV6dLFWz5C24z71eQij6iX9SYfQhUJ8epgHjdPBhhWzZXEiP3Wo",
  "key3": "veoc7WHyThJk7Xism8vcWiNRPBVxaKEFGw7i7ms7YEDVvZoGBjYV42VVL3vNfAKtE9RGdMSgwrW6ZpRc8L1Yx6M",
  "key4": "4oreqYdQYbLEq9mbWAyT4TZ7RYFemXSuc98m2Bi4iJ5AGe6Q1w5k7zMk915rNKyppaoMGHdR9hMxYxPZ1s4JYbCe",
  "key5": "398hTw2zsCohzzocLdUs9a14rEnTXyx5ihxEAj88B8oZ2AtCj2WFHuYBa3VLUDvy3GBdtidJPhMtwKFdCY4WQaQb",
  "key6": "5c5iCqW4edcZsGvqxR87nq8LfehrM82tiB2LaW3Lg5xPVaKQ3GnKstVCTwtnNqVomnctuYMC14Z2ysQzBjPsYhjq",
  "key7": "3c5uJFTL8hanemsUUNFAkQcn1rq7XHJNaMFrv6pD6yfbqgh4h8ufYvhFag9AEvW91abx5R5HNkMKDCbzYgHqj8vs",
  "key8": "2Qq3wsUEHzmYaqKPKxXfmbfF9zQyBXM4SDdYsxE81pMsXcwnWxyk9RwpkNQ2VKgRumutEJrXiesDfsHfxXgEfdaX",
  "key9": "uSD7Vxfw5C3cRnNzdffEjsvBeiMaY5arW4cJZ52sUZFo4HhpEEassQF8FaE1PxPpTk35qKtdy5g7akw14YJZbRU",
  "key10": "Jw9iJLjupcZ5y7g5sZv7RAYSBNeLE5UWzFhQbFyhgKiF1vnHtk2qs9zC35QjarjR5F8DF4Qzk9whEdfaZLLyUCD",
  "key11": "FJfuCbUCCEWyNAjb5TCJDd7L2TzLPV2KUhikJdiosoURyc8qgyzdo4gunSKaANHweEJF8XKYtvDTQaV312kKBNb",
  "key12": "4Zej88v1btoqvMB3yVo6fawt4dQJAsSdG3x1mCsaDzyM5GgWNkX1A9BSFpvhYcGPcZYsf3pjszKBApPhnbJCDrh4",
  "key13": "pZUGzghkY7MwJ7fGZZFBB6Vu348iXfY4jo3v5dbMaKjrMg1TzMcmNY4mdhZANbX9CpotxXBCU79XTmA115Dw691",
  "key14": "4tHSbKgQLAjSchma3Frad6naUxmdbxuwomqQibCLSFcpVEqNGBXpbs8BuW9rnv4KAi9NvDqeZLpPoxzGCpL4NbYi",
  "key15": "4xRJP1h5wsPGweQQRiaa35EGZwd2HKTWYqBTAe2VjcSLzpeK7o9Fghx888STrN5er1mwdR1cBQhXnRD9BMbWb5jV",
  "key16": "12ABzpaSXELHH3nPYiyhJyEx8bdmu6CdvgUvP5KEbVpHsS7QsXxPgqYB5bP2DPMayApdgpTdRnHT3Jir3BqJ6pxk",
  "key17": "33rjirjQJbLrzdSPreBcEsWQmQBuz1LtrtKv2jx6uk4z52X7yVAr5k3NvuzjpLtqitQsnStMW9q2BTmkLTkTNeDh",
  "key18": "38tu5dgzgcMP8CHVKfWHVEnxjQzCi4PoGCaRfj8bZUnkJEVBYaVm4hU2g2Z1u6Q5BUknH4ewyupCxg7TJFsm2Ubj",
  "key19": "3z5nrJC1SWjbUhch29ApM6od66U2ChNgwv5FKuc24JVsihozqvrE2K58v1WDJRrWi81E884MugsahahhB3xL7Eks",
  "key20": "5R9cZP95C2ZGMboxTw9ACJGz8wanL6J3yrfe3yYwjP7W8n793V1uBrqVrNh73SUrHRH5K33vJzgyLgL9D8uPJ3HD",
  "key21": "3RJeBQsRg7QEFjBZrdULCvU19HvBVRfs6HKXh8HpNUDPGXKnvC2sdoiAtDcDLFR6ePYbtuEQ3hDoMG7hAxPLethF",
  "key22": "47FahekmazuftyQKp2xeSYigQfo3daWTbzs6BRhhYPNypFYdvq6VCFFgEDyGqyC6tMkKXYxLWjs1inepF7mqxscG",
  "key23": "2Afaxwb2h1f27bq6Ecvpx2yvKvyu9AKxCMvD6V8cZQjrJh6xpuBZqGXfKdSZLFzpoYKHnY6P3muiec9sDrnKKvTc",
  "key24": "5dtniXNrEJubh9RzF2mmxGjqRedFNMuoDhoJAdBSN43v2FnuQkXEutyQ6j7JTdj76QWQyFHFpfpo9RfexfzwNUqh",
  "key25": "3qj4yrctxid6fQ6BQqJiGeA3i6uPMytiPgddW13xAAeSb2u9uvPZFaB3P4WQ76q5K1cFCMfqj9k7z3xArdpcbuWY",
  "key26": "4LqKWjQyQjV2NhGLGRFMNChj2KQqY9pcXapWJ91euse3gp8pvrRAmxrgrFdaw2watfZXFCN1HpYuAjZZ71onZCut",
  "key27": "65JoHcexmSj7mcvzJCndqp56mnvAsn9kpc9FUhqvSxFgN5E7Wphcxx3WsduyW7kp62YcaSWjSum6YyQUJb98LEtg",
  "key28": "5jFmT6ibaQNFyAsxx2bToAfvmNxevyLqUQKV7QU13ZxaaHfMSidCUsCu8qatoXV9tP8FqdTxxdiin7mst3MaZcXY",
  "key29": "3MQHDUTG8F1fRV35mhg5eakMR4XmvbNxYKd2Khm96sJqMjNYthZ4paX4MPUhG57KhPVrmh7WEHktNc3CeYmTg2gm",
  "key30": "doGBjMUhthbuQsDrgXKtFKVFW7p1f7WaDyBhzyxPSrUtPRcB2Sx76LGjKXgp35MmkWcCJahhFfhzVwyNhVKpfZy",
  "key31": "48QTdFjXtVo5FrYV6kx3D92t5M6HPCyvnWrDWj4ymZejoULgHnf93QYP3eNTsBny2ALRsZ7RwP3Zmhm2fi1wCxdS"
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
