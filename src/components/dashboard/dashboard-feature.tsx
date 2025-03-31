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
    "3PMFzt98MznYB25G58iHPtEGVroBCJHhW1qjGQ5DnmvFUiHcy2QeZJWHH9UuKNvHcq11HKXn72TwTLfUn6CZPerw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLrzb4qcQ1DEm7hBAYUsDzKCCaC3xnrmDx4yk8yr4KJL4mCPWR6AwvehtLTs5e6QrC2YacMjJYFqfF4ZQDsH5k",
  "key1": "2rZeUd8daApmu7A23HYyEiP9sRwByQGrEtV7KxDVZvsRE89yA3kG7G4CRLqUQbpsJoK7FXfHtQScVKDzYjfKZBD3",
  "key2": "3BByuaky13wG6QV14CHbNQhnqM314JsDkNgoag1fZE6qyLKVp2vuZYoFotyXjiPzSSxZrkg6U8NSr4dJUUzvwypC",
  "key3": "5pWzqfa86tSxPvYND8AJnmeUu8wdUwHQWAxMpikt4aJoc6yWoVvUf2FUxkCwDW5BzxcB8GscoG5QpuFZJ32Zm2Fc",
  "key4": "2utEi9nds9EFwzAKCTnbTDCXiGbbv9ixBb4tNSCA6Ho6Pr6zqVNR2mQj17HtK4HDJmfHeg2RtFevWPpJZfQbAJbp",
  "key5": "5KqiadsFQhQFjofNLGGSZniXuHL3p8pU8iUef9jYTfFm3vmwoMquFDUxoY5WTpxfK5SPrxh473Dd4DAQJHo16bpo",
  "key6": "2xHfxR3Lh6HC6tVUzfwQcGkv5no6TJddyc5UzJb4knHnVxh7R2qbw5ruFNv1ahLCqU2etFjhH993MrtkymJkwUCN",
  "key7": "37UPi8s5CRq8zAFBYJK2Ec4C9Hi7uxZdsA3o2H2h5Dkhp4NEJwsGV3HnNtWwHp77ovSAuJufHMZaarAL3c8WWLiZ",
  "key8": "3WQCMNWRU1ded1pHtiDXzE3K8JyrD63k18d2H6UWskbhX3SJLCLpPDy2QDj3Wy49QihS1A8ZhSJRXK1iiJd9R8X6",
  "key9": "3oMdS9M5sGU18Q7t3kiT47amiqMzN3HB9xAxGV5HfF2c1mroEfAtE9HmThDroVtkqRHAQqHHf7UcGhgfC4TzdN7P",
  "key10": "pHJg953kFZckEWstJTHAqxFPymnihHKw9wNfSmDJ1FY34qh2GSMzUcqKU48kSJvN5moNuGAAM69KBKpJceEF2vv",
  "key11": "3oKpHz6XH3fr9qD97kwvBmwZn1D6fh7PvDMZAvsyJyyQDGMmGc52Tw6bHgksyircTbT5ULK1gaCmQaGJvXTA47km",
  "key12": "nSXZHungYB6rX8ut8unrssu9QA9EosBpb75KRwLSxzZYFURm7g55tSgoWLr4kC2ADzLmMAGWPBiynkDWzyeLP8v",
  "key13": "55kXbvgrCq1nfEaE1p3sxbLbo5P9CzUMejkjuSohNqo7gzV6jvYDpfqTCYJ2F9yvvJ79TsduVCBD8zg3FxHvHboe",
  "key14": "4FWXmM89tqzaHDHpqowE2wj4HwqfgNHhJMMFe3uPduyLXnR3LuZANEan6oSy8NrJxvCUsq3KriY8jxsQqkxUaK2C",
  "key15": "2CLozenHjui8Mh7y3as9eGgDSbdP8NyicxH1Fx3GRYprocGxWw8KodXebHnL6j9DFQLJxFVWSMXMTPoupC8M7jpC",
  "key16": "3Cs1ugyMKoao2mvV9kKCgDq4hLSN4crfiBVs1AjgtiMGE5fy32ngRQWbSb6YbTErUC4r9FFa3BCMkwByxxH2sSXv",
  "key17": "4rknFUm1UccatUSPRJgeq83UfzooP9732prVU5XvVtJE69B1QErUmm7AmbahzEjiocBakxcWyfRQQbqJLQSXUtnc",
  "key18": "Jk7GGQSVF5hdPPNScTBkNQHL4qLqEfm7SKX477eKUiMrrYyZFUBC7vReDNjfbdJjuPaDHsZDYXATbpm2qZyyuZw",
  "key19": "K973cBFziSDCdvNqZbWWb6ASkMDKPAMsGak2CyX4mcoVpEBbFxprk4G2qVCDqWSw8wtJxNweaN4LpV66GfFhCMt",
  "key20": "55dUoJ5r3647vW9iczmyMSA8APxzrqDUeLG7QyRPy5iFAPjqCVSTctXwpGFJNwUYkPxhrA73GR1u5D9ZMxpq4AfN",
  "key21": "5xyWxuAWLNaoB34U36g27tf6i4kAWUzzrULNbkCNgsP6Su5t8AVUA6LKyNneL8SHY7N9pYeGRaiizkCne5joJK67",
  "key22": "5irN6imbz4KB8SkYTiVLBeixvkuYzQe72s7wxt4Z7TNgru7pEWdFTMzmeYdU2DxVdxSY7BXsT6wHEP3jkVL1187b",
  "key23": "21VexVKcvgaFgLTgUvbASfYtPg1fvHZtPLcuiprADKJS3zuVVspFjiRY1wVYjMjn7agsxPYv5868N6aggH5bX9mE",
  "key24": "5G4ij9aTLbfpbJhghWM1NbrJtp6aXAtJaa1T5JPPedZH96ffE3gB3Nt4NEGZQJwvthfCGnUEvmYiwoi9zQ3oUbY7",
  "key25": "5ro6iPdWPptWHsTB52aDXtqoCJEDtZFLWVkSP8aP8G4jFLjypcZ8PdxqVKhj59beAoxSqUdCBrv6XwA6a7YPSJSd"
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
