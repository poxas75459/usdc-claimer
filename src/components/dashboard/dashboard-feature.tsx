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
    "5xZ6o7NsWf4y7MfZDAiCDpW5pKho4tNs3cNxDqFcaNiqNtBTP3TChte5HUVYWXdNLC1QZwD7WkWpVoHdUMxQhAWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnLYBU4qu2rfu174twtw928h38QsiDssAqQbhqsB83Mp5LZ6vnFQZjL3ZQ75iR1B14ak15GaRgEi11yvLgjHo8U",
  "key1": "37bwiMPaT8HVK8CH8q9Dju7UoAEzTD2sZYmRKEiiRM1u9YDaFTZkebC7ZzZb8xvkYARyY1jEQZp9u1HxZC5L73JU",
  "key2": "o54TBN4u3RT6yE6J6oXKMUJCiW34V8jEPXAo3fgShkYcuyJe4V6qPBwiVQCFntpxnmvywjXre7aQjd2o7D5NvqK",
  "key3": "2exauZ9xKsWcQHqbYwFajaUVfTn4C2Lv9gHsvJVvJMMHPjXHLEQAUEUG8MJrjEJikwsTF4PVvQnqv7EfRayLJ8qv",
  "key4": "4ESeeyCGQrJkYJQdVDHKYDrXT76rPoRd63cxyn8pgCrLTiFfV73gYUA72W8fkwrWBUM7ymYAykaPmKbEornupp6w",
  "key5": "4Pym5JVEKoLjYGbMqKQVeogAypobypgyRsGEEdpkUbw3bm8JbDEiEVr7iCgCxhDYRbzxcRZWESfPKw4igJD795qw",
  "key6": "RFhBuSUa4xiiHNBi9DpFsovwQmshnKLjwB8A1LZJ3cFRxieSypEK9xKVfjEj62YqCCRKayWo7brmVr5Ub4sbDgZ",
  "key7": "5wqKd9kqsYorw7eUQhA3fy5bHSh6SxKd7PFC5J59mZcmMbiK3T6yU3u5FH4x6WDA9tbNR89fFfrB9Wfmb1X4jTYT",
  "key8": "E5cN1pYcPsD86ViCDNdNH38Q35DUnGjZTqXideoNG5Ut8P7PKyRZDxxfLPyDgtY1V5MSyKjqVpdgwmn85tgwy61",
  "key9": "TtfRTWuAUWfAa2A8U1iN498TDVvpeqkP7ic9aPjkdULQyAyjGKei8M2eBKcQr477pnFPNprLL3bsPq8ShFYEtaP",
  "key10": "2wPmP1368vNoNvAWvk3FbibQ2gq6HdjuA1iAhUgoKEqussWve26rHkUTb1RsFYNCM8eGU7wxE5C6DHnjiqSYrLJS",
  "key11": "3pzhzt6pzebeoEDmofo2fT8ygGAoG1614ou4uL4tj6A6v35pyDr85kB8ZpFsbyKYiF5eG69mK5SgUEBvYN3sjfjp",
  "key12": "54UirAE91PuGNq1QoKMQNvcx19t9yj6VntpCyeM54grpjEZPFkR6MqDJK1HAbcuz7fsA3tW8pbyuiKFe6WLYxsdp",
  "key13": "3Wy1VzsfD83PapTsimWmzMQ7T2UHVoKsqGfQspE6EacnmeuZQY2Lv9cV5npkq59KEzYwEBvTQPAJxMfXe6nTJ7wL",
  "key14": "39NFTRTAXhEcKby9rgWdQfWtwGrbCPGQU84vpGngjPwy5dN7Kuq6ziaf7EsLffGEZkt2KcbQt9bUnRjujDcUhKYD",
  "key15": "5zkXCpQX4ZahpWzdAJvQrNLnDXHHUcay5vxykG2DeJqr1uZhhZ7bhd5KH3DADrVXUnh2jr6Kwg25eYPH3gdPkySS",
  "key16": "2wdaSD9qhfYagPsvh4vcXU1jNRFKJeAD2VU9EnCUPDEws5ZwSyREAThkbpVecaV37FM3bZF6xsVVA4nPmChQx4mC",
  "key17": "4EyZ5vUx6xe17ygGcbzGCDBFEZEtjfZpSPYMnTNDtkXBDSUFjPUaYWYB5wxyRHdgQkA6yz2vZxsW3NDUEygSTBaB",
  "key18": "2vRjWJFBbzpYnJa4wWba5A8p4rPSwUyQhHaqXz4PMpxDRe7pApbSig3krZwvmf6xJiCpUJoEe1UnL2Kesdq8R3K",
  "key19": "2tZPs6k5r32B3GUzT5VeK3p4aMvBm2BWPJh7MJhUVpAmCHfqQzb79FJNgpkkSTTRw5qM2mtw6cAwmpKxe4nt52WD",
  "key20": "52sZjbKg53qreoyX7yt9CVQ8d5B8qjqNt6dWzUNzaY9waicMche23py8BqBbj22p2jHUzV8mCis5pyRZn8rupg5U",
  "key21": "51JUEjshVGS9n2gMFdHoTFeEMLjMBPaVpbR1BjsQsoZPAhmhnSbjhDWZrGQTHFP442ZTDeJXHyKuZM9GpUKRCPQ9",
  "key22": "39sd8EKRpWBoTCDofEck8VpY3dCQyJyjXdFVeJhCP6T1PAxxaDAvKPGhwsT4pcd9dHndbfmTpXY9tCAD6w3icRSo",
  "key23": "3mHCvjNk3aymDUMyxVAqc4aZs8RLLXPFtQRgxTroWXopGxpKBzoPYitVYGgkHCvpJDetTSQ7Dh4BoD8fHaYXMAjF",
  "key24": "5t1TMDP7Vs9ZpEoHXJc6cTgQFaFr1WKYGxy91r9PoX3LkR7SEPDPwL1wFrKKV8k9SstwoLCAxXcv6i2C9ZniCZN2"
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
