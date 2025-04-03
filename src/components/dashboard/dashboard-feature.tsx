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
    "5Ffsnx1mqTYoZsS1U4q3PYmHBG7pxDrAyw94PYvPZfDbTDR4S7dMscdpVoSKZd5YuDXL9dZPWFPDwNG59EkjMm9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAWwLnn6zm3V6zyu5xQtknkxVXPeftJrNo5bS52LugEp8Zk6u4Gvfs4PTKEggZo63BoAWh3DFGktxZnrLT65UhC",
  "key1": "3EodpS8zn1hSMViqaRiVfY2AZ41hLgx9j1iwrvogio4Un1B54QXi3dtbcTNCkm8Uq9BfyZdYzPDASd8oqJbdXm4b",
  "key2": "5Gs2Jo7HHXWYmsmSxejhrw1CeNpeC77FT8GtaLd1GLTeDmSNMNGxBrxPyEFUXwoNUexQtuQWujYUgykPkyu5mjH9",
  "key3": "4kvTJMw8yRLgsWEUVqDARB9HaZD7wEvLi42t9tfQqdWDqbV9deaqHFT8apGATxazxdD85wAck8p7sbGoixKxNfW8",
  "key4": "4dZf3zLhLX21ydFK3BDTGEwMcbuHDjapyP4GgB44KBJjo4FFAh1FbHgzzDXvgsKtxMpJY6c6EX1VUVGpCwUNNhVg",
  "key5": "5ixnz65eaetyQTPYsLW2XEvpvgtJbxzhfWU1zoHxBtiQ9SHBpyjQ5s4gV4fuxNdm385BExTqJ5xVCvgZwDUcdmG2",
  "key6": "5Ae3gvJim26ysT1CA8wwPkXF4hWDEsryT1VPTEi3L21ayarVBrGQDpu3eW5pMtuqLft6fegqfHkEeQmKBsLFqNPY",
  "key7": "kxzUSyesZ1C7EgDkLtxX28cN2NWaNDywH72E8Eq6nQLRBCFEGPdnt8PyvGNPbmmwqj4BA8av3JpveeCU8tDXRgN",
  "key8": "5G5X9J4eEzHMnyNx2FAGN5FDgyFBQTNRkFP2JDK1AHtN8mwmCrkeNe7GDtuEcmcwinPonpN2RfWFXvngDq6b9R4a",
  "key9": "YQBsBsmtekDrY36v6z1B6TirGR6fgdup6iHxkKFWzv1PNjQV172jgwY8Q4GwYAwZL38dZH5M6QPhGPYPKXusYKr",
  "key10": "3FdkWL2LR2yhd3EGPaemJzJxa43aXbJodrd85zwLawXVzHzpqVf3hzjTvRbYouyPA8UbtbkAFaj6nmJV2ZEo5e3U",
  "key11": "4ALBp4dfhZH3NwXr9pmGarW8eUKL38LWiZbN39EaYE3HuYtDtgVXUh6HDd2vhCeW5UTmCkaM9KaX3kZmWBYJf2Ys",
  "key12": "3RZDoCGuFANmweKS7PCzUftMuWAzi2Ann2aqDYjwbrJKzBcACiTn5M4VGzDCS2e1Jsn69F77Tu2Fd5uKFc1D2L2Q",
  "key13": "BjWo1vzCBvVThYWFUrCYchQVLdF6eE2ucLy2itxTsFiGWoGxKXe7VaKLAfN8oAZ163arHHnL1EGo55G5erPuqdG",
  "key14": "5XDHKDAtvwYjUL3QSU43Z8oYuKzFWWCDBnmHPdDQMsnQYmacVjDD8fBS6cXMeP7KErt9j25cTzwituf9vArrFMJA",
  "key15": "36T6HCbjAjDKv8CURMadcasbzx6esQRRMdeu3GVwmafKsLkuwVHTJseiXhXmJFkUAPR2uLmUodaCWur3Yfd9xRSB",
  "key16": "g1BbaRAq8PAb5tKnGYV6WEdNrim5BF3ULMcEGu6tgfPRAdQkmU1A4EFhpsRzZpDsh4ig1AdHuUBhy1wdJgLeq1S",
  "key17": "2S94YGyjDG1uKg6edz1EiXTRanM7foghfnS6FWBxCSS5ZUwdnhtKBvNZT9ZQ7dCMRbGqr9DXx8vdbXBqbpPoUESM",
  "key18": "4PjDn3V45aBsEiSCiVFkzLXa3yugsWAV9mWxJQ2tWgreDEp5iAozkFfq4nrbd7U3rfFHRB126iWrYYpJBHPMyWa6",
  "key19": "h7i5S25jh6iMSf5GHN15W6gWmmyk8h3LanbJxACsP5focH6qwD1pYeReivQ1k5zRPwE7PG3jj7UWzAM37sDy7aL",
  "key20": "48GfFxEUQY5gqfyVUnLnEipppTxsWE8ERuTnCKMT4A2ePgU3z4bUh6e7Vi3yhkSKKe7CYWt3vieBpkSFds3mMzmF",
  "key21": "4ATWBFen1p9jwE1LXsixd26TMJcgP3U6kKAwtkCqeC4P8Fo9bNdYAhFYJf2HygsMfSx2LfmTzFrSDQquUYBjjVtZ",
  "key22": "GfWCoYAZFZAD1xbDitMovRsHB4oNmgEqd7xv76Z3itg9CiH6LQtynv2uaUvKcgY9vMGcssEd6eBQUy7XcTWyvRS",
  "key23": "5zZmRxqMa9xZP6goxdsmY2nLKc8Lgn8DCmzQzHC6XNWX5N5G5XxuwJ2ruKdzeVu9rsJ6XQeGnL9VCUamwVQKptuN",
  "key24": "3RHS6DRh6PjKr57a7PSuJR1y6owJmp3qGAxwHi3K26qvmCyFb3NYDA626QZzqGqb75XYqKnFVm6RhjPZEbWxLCHM",
  "key25": "4FhzSoJ7rNQZhH5xSPUzQN9dizsV4HAS62348KgmJC3Z8aax6zxG32VGV1UgTaNHWDJEQd5AjrorJ2xY6zk5HPpg",
  "key26": "5MRjikKoe28pyiou3MyWj4WkanMmPAtXCVWXBqg98aFKWKLcwQKg4HryVPaDkXZACPKDTmChjwAvsQLHg8HSdxbf",
  "key27": "47gUcQGzJQQf5wCmfi4RnEeJmACg67c591Zj5yMB4WBXqD28CP55ck3G8Noz1z66PRJcTaruYWwmwd2VcWeteWzs",
  "key28": "5jXBCAq9TQVgDXGni7iEQ6EHD7d5g3A9xdXU4kGYqDadxdmqKCUpT7PjRyPdQF3cGTrkr6gtWUfcqmbACQnJtVRU"
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
