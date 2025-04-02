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
    "4hK6vXN2eu33zu6r1vSkwaoNtikqLpn6sarvnak1cNbjPFYy4KsxKXEuL1thxXWDDwiV4UhMUQeXZGtAqsNTQiBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELxzfabCsWNnC1bHa2GHESH6nujYv1DDwLGpsE97DW91GRD4r6yiobVhpfqbjfYSVmLnfCwEsXuoUy3sPtM1Fpp",
  "key1": "2vXt9tq8o6hTfJ1dsrUmqN8CHj7YSNT4CJgEASJvdeh9wc7MkqgEWvtpTfEZECBLovAbKywoGe76QYwHQN478nDy",
  "key2": "2iQdrNivy1mLQ7sMuweEVWS3HPudKa2nXKpUZWD3dVijoKdU7DpJVFXm25BEbGfpupDBhUrUannATFTjr9iaZ2Uz",
  "key3": "Bs6LZ7nexZFMqE6aRMXAJRZEk1cJT2ZvKk6K2hMNFMB7sAbNmHc3uqMG6Uzba5Kcys18ae4Dw8Tpaw921PwnSSj",
  "key4": "4MYJCtPZUvNPVCST2iVkSZLdz6BNfSCLVRtdmo5CVdvGphDpLDNSJHRJRZGnyDCY3cPn5rtMifrhwaACwHA9EKjU",
  "key5": "5WeR6QwRteP4HMFt5dEm2icr5g9yVcK1xBsUQfBCKwS4ZqfXixUct4fBC5ZRN5ixdQZdCMkyhP56npfox68inWBS",
  "key6": "4T59Z7VDCfoZh4WW5KpW9MrGWogkWeXi4S5muW4isZCxc4MXKwumjyJtmagw3ga4D19Sbwu7rrmcaVHA2agy6ARR",
  "key7": "4Prrnvd9NPbWULfH4FVcHHj3HtJt7GBZX2GwTqBnuNQ4pph16DjphoVC9E92SpX3dr9NeLpAzNuqVvoB4j5npMyK",
  "key8": "2NargHzzC1CndkQqrqksYUckBgZYaUuKyacE6UE6cAprG2hcK3zpCSNnAqF9AdGRp7iSWz87pUAPLXQazUeY3CUv",
  "key9": "aL32komCyfgttieTMr97VJJunFEm2e4RybzVDMFTjmn2psv3xdSF8uQrbmEU9wBcoHb6q2AMhp2awpcA2jTvb4S",
  "key10": "2epyYTkn2tH9rVftqAfoQLak8ScRuobV54T1ohBZoMxkqv4XnihoGVUEUDhjsP969fk6pszwJ89SJX1Q5cLhto96",
  "key11": "4q3m2naDwgWbg9LiK2nd2TeV34AXCLa5D1UuzJC5xRjKe6EcXYpsinAoyMjyCkUrY6XUBAnqv5FheLut2Bw6RFV5",
  "key12": "zAaZ1h8BzghoB8DE9FFVpCkPtbtEe3cJwvrrQgLQNDJhMRUFJoioxiV9GLgCrbecKwtPTWeaEpyVv8TDATJaJT4",
  "key13": "5geJR4yyarms9KDUY6EshhKTSQpR5xQqhneJXZNveJytxqs6HcWkMcYQNYRiqzvHWEFHpmkAWZdPiPcFSSg7cVDG",
  "key14": "46zTbiQNxn6imEPgzWj1pNvZEX6Gj4RAbiFpVrkPPGiedoXF8BQhHJSAB4X78wduEtCxChkVc9kEXxuJXcFyFacS",
  "key15": "2s64shXB6XVQ9udoopQnQMSGjVNh1CqRwzJEeJUUfe5WWCmXDnvNFsRMs786PanY67pUjMaTUNAor5Y1q1ri7KN5",
  "key16": "5yCdV418DxKWENrV5JRCpy5u7GZUvzKpxYa2hJGMwuHiBGD8SdU99EnHw37zDyN1D9BekPAHkLae1cdEhs4pcdch",
  "key17": "21XF5sDd1YHSfKEPKCcKrQwEqBPTrkb93q7u2kpT9j38sdDNhd5ofPea44KZ8nWWdPP3TKGdzcaGCCaBKuxV2F3Q",
  "key18": "2yzKyP72WV6p56Zuzfjz2NBgwN4G1TJTyvBmYeEitvpmMeNgBLANcWJhLKwtFcwuAKYCeHWQD531jearkbMnJiBM",
  "key19": "36jUgBcYMxF7wx9roPkc3BopQVou1kW1BPzgTrJv39YtryKXfRxBaSwjz1csP7DvBUJFLELuKLu43sXBW8SYzeq3",
  "key20": "4tvLPWsBZMz3ng7zYiQFFUCTnbdNzFnzRzzRjN5t4BJ7eaw4btCGUVJpmz6ZF2tmch5y34ZvdoY5qSF13VBPy59k",
  "key21": "M9XzmVhWQXcRNGzhW9SUyxE8xWTY4hx9gkzW7eJxB2Y1r1iRny7Rtib4UNeX8HxvdWQqba46rUGe7YRL3GPEPUM",
  "key22": "3L6iSdxrNgtLwCmPiSL2zgPeAFW5yyZ5uzZ9ve85wmJ4Pp88eVtBKL8bWdUjCP2tEVGfAd8Pd7d7W5ACxfVMLCY5",
  "key23": "4v7tCy7MBpmoW88bwp8M3Q99mT72Nrd4B9sRjDcZwY2PuKxvaRmYJZPf56RfoPn9Fje4hUorSaYGqpcfp6N6njB6",
  "key24": "2QcwAfpHyTrdUWi7fEmZHChMsU28YYYaY8XJXAdhnWY6MVyfFueWnmD1noBkBye1WQCxv83yKLeHMSbaCRZCQuuN",
  "key25": "5JgHNDCU8oQKRevffMpPVbmEMtpbRXWw5X3J5vUdsZMRs9RQuVPEAuaBMBx91n2HF4jt5zL3sUsCfJ9DpKsVmL56",
  "key26": "2eL5w91BR5gmKYTTT3vaMhnMjNA36djR4bufepoe6vySQauXxMiZ9RpdeKFm6Cve4zxne7LKdw7KYzA7ppws759W",
  "key27": "2oChbdTLU5sZD6gFL8d7Gr1HkhE8ZwHwSLc3Pm9fvWNRWRtHAEpQcZWBNrPZ4E38S13N2qSjec44gDTimuZo7yCk",
  "key28": "3YEnMRrySg3qqdz3ehcCuX84JM7A1JLgPCqG25CaWrfdtx6pkP5q3rmU5TesXkK5FbYTKKf3nuvV3Kf8JNZPvo3y",
  "key29": "5MUhV3Qv8rK9uyZWFMe8tRpMDAUV9gQa2YspjEE845Fu1SUfQVuV8Uyo52gJvGMSdpsNvMsBUMkNjiZk7JaGrHWt",
  "key30": "V4fXirnTjo732aL6A4CrGbL8rQTnmHmaqQ8trNLJfXYNwVzTELTVX1LFhF6cHCLpudY7TuzVE5Wkqevd1zANxkk"
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
