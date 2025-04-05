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
    "63J2C63YzCm95pZvoXGsfCEmcPiNdz5AoZB8Ls1TvuK6YLXP2ms3f1sQDU3EriKZsnkYag4xMbC3Lc6LXobJXnwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8rqoDcbZ8ymc5tUCSXbDc2VVYJeup69AtwWYm6nRtPZfY4dANd4pzQRwVeRKHvXmLt6P4riesmforMAEmLFGWo",
  "key1": "2bYBdf59JQ3mK2uFpDpebZ4MWzDWfUhTPmwseWZsn5HJCuN5fmcp3yxfptqCVJCH24d76pPZH52d4Fh4ENepytQA",
  "key2": "3CikyDDpDArk7kZBdZ3F7t7mn2SZUZ7EojFjDNT3qmc7iHCcZbmyt8S6RRGnn5rn89cT6byUQUbt9kXVAwNhqanz",
  "key3": "5imfeNC4y8jm9VJrubN6e4UrMQ7GPq48hbA9Mjzd5FZr2RUFj6gAQ8X1SBTET2ycv8cnFn3GEBMduc5qkf2L5uKM",
  "key4": "4sLnymvGDb6SRwkdEK7fkF7dX7bb3FGNqgV1aCtRHFYCDzymwQY3fbBXGW9TvpftVx4hevTTi8JYo4QTLgjAZKQY",
  "key5": "259Z9FGXa9n9G8BfHD4rSXBm49LxjWT498AiJfP7HcKMNA2bY9Em3E8p4NaUBuyrbNtbhKwrkzgSwTQYr8hfgpdv",
  "key6": "QxQvHntUbwAPdj8TUYJhKSkM8QuPFt3jfrBtmfRk9WhMzGLFZiscP2qVLDngqLUt1QPbSTnVSXJ51XheCF1S6pX",
  "key7": "5BsVmEZbxVGr2W5a4f6xtyCcEsbr69EFzckf4yfeBvGnifPuKRJ36SCHa1gUZxKHFVnoCxiDPzjv2Hd3k5aD358d",
  "key8": "2aPbbMwc4LgkgqCejLh8EtmLAyYjMW9eh9VEdXSHkF9AL2iNrs7gQwfr5F4fZNxfGhsZL9NHkYybvBhXnrv6GW3A",
  "key9": "2N9z7phzbZZHQEERdw5H5PKqyehyFrCRW7h5e2JEuMVvZW9SKAe6239RTyJnBzHwTCPYPUiQRCpw1CfUfBezN7kX",
  "key10": "3Z33M9VbNpzzP6f4HN3V187iRe8Hx9HHFnVVf2aqXJjwAV4updaKoU9AsyTrJAHNX7bt28AZ2p8qF4yXiLS7FYNR",
  "key11": "2DMbSW1iaYSt3ZzqCfZ13PQUKCY9yNc5h384XPekoDXASr3jm1RYnckNWNNhGJ6z9v386dZxEEMUYCMQTd9tb1b5",
  "key12": "oDGWY5jmLdxiy1uiyDzG7qj7k7HmiV9jos18gsLiyk87QeYLSKaGpdZ3cvuDctUguu5EV7WTJA28PUekspYDhiB",
  "key13": "5bnbjwwqvE9SjfiQMjtG5wqqov2KoL1fGwEi7HZtqWh7xTukipCAYGArUhVEqcx4A3EHqzDNVe2MeekiFUkqTrz5",
  "key14": "5ywEVgoX8bYEvhgdcU91Dmygjum9oBQV9vAxskULqjgiLaRPqq7aWLDvZ67mUZxisUE4my1B2fmEQYRwwPVhj2hq",
  "key15": "2eAdqGAZmbCcywYxBrkfjxpfveMUGAoEJVPDjo77ALTPMfKsW9WrPKG3xByTQs36Wb1ijjL5BEKypnEej4pU1gBK",
  "key16": "2RCgV8f8xkTLrPmxiWP3JTtUoJD99YieB5Nb1QUpakHuuRwEf7MiqYUbxBEpugV9txbcajUG48Y5mERCxiEwPSeK",
  "key17": "5gSj4f9xPK7GAjBX5iH5298tXLSU93b363DEsDhsXCY9vre84y5ZGCcbxuTPUd8Geo5JkqWsWY3dmQgNpPZSzGss",
  "key18": "4uUgUXDTZDDTR4X63FedsMgchDJFxNE2Pej4y458tfEVuX6kn7rDTDFTYGzomjbV7XXswGAhfCDhcRzNMnc4H2x5",
  "key19": "2CcsRQBPczu7og3Z68QvWb1TDfodPPqy6UzsAvWtaZnCxXAbCFZsvCFW7XriRc25UrDNnBuGKjdUDvHfvLEt4w5f",
  "key20": "3imc52UPmjUjGTLyr2C4S3PBtZTV7JBvitp279RefLzj7wncGSm4Ba6c4c5pbNpQHs1ypUbMSajd5uG4nwUuksq7",
  "key21": "2P4LgDmQJcFzWNa5gXqbG2DV5sGw4RjcV3ASxDjmQrgAsU7sGjNPpmHRGrsMHKweJRhX33VA6bnXW6NmeCxCWrpz",
  "key22": "4iC53wvgQwPzg4LUi2Q3ytN656wfcJB6QVX4K9JoRpnUnpHfYNDW63LNB5XU7FCGQFeJC5nQQJ3BMR485KZtJ6nc",
  "key23": "4RUAwfVS19YkaaeAgCrS8tc7rgYgxytaQswyfMjL2QfFYQPK32EPgUPcgBcDwFtpMUoKqSw9htRGkkkaV3iSGFJC",
  "key24": "3aEUaPQepKvBR8iqtZ9Gh4kss5ZZw5f5pctKQGvH4YA3abxCEuFoTsVUtjkKDipkQyxFqwwHBvErDjvJutzh2CHa",
  "key25": "4krif1iTUQ6VYdDCNmCn7X3ujTV3u2yHgaMt3MtJ6uTy7uHHRYHviQG7MkUAJ4Hbc7Hjzpe5HZzY9mvP82unoWZY",
  "key26": "3aLc1sG8TAMG7E89Hs5jFYJwxqqF9Rhb27wQLSFGU9J32GS8LyCfs9hSzMKbpwhp2qzkPzW68Fx1KEqyefFxVhnZ",
  "key27": "61eNmVQHxwuSUWmFBpz12U31jt2ipfux6qqSDQPvRrzhGLaxQ2zhzsoyeiJuHBSVaMzKMd3gUcJVMov4FWHvqEFq",
  "key28": "5LryPL5vkEn9ruf9ebfidbm1Ei2AbUcfLZ1WGLrv3As3u1RFLsLjb524t9PfET5y6fABQTBbDSWmWNSNDpQBv9rV"
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
