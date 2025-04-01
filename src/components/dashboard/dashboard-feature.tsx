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
    "3SpmHfmHfgKar3SBpTw1rHV9gpjziNAdB4wFHkThQh1D6bB3P3L6gAe9pUp3QmjCevEvfAbH4hEKDeUSh2UcFZi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYWnbLz1xPZmZas1FPwKz46LefzXXbvJjwAhMHETY466jJzVxPZi2rjHyocn7hrakm1C2uwr11o6G1kxwgdbW5C",
  "key1": "4ceG3qaCESjRasLurH6UB8QRHEcB9TLz9JdDcdyX3KYr8Mk5eWL6PDJXDoZ321goCDbFesVnfnU2htMAQ3KGcUhW",
  "key2": "4ZvVmx2nAqxjMQgreXBTvcL54vjR65jor6ezLgyj33KgMdTpYzoRVUCn3mECVZBAxr8s1cKaqyCWVm16o7jLyMhn",
  "key3": "5atmkh6BT5p2ofSWe9MpQ35YeHxYKeUK4Uzhc71taWZrKigzUMAvsyDxhfPEMoWAm8u9YyGav6eSwoqQNXC1KLp6",
  "key4": "3LhDLAR5GMvaCBzfkcR3KDDVpwShG2rvgT5EmXSCnvMPNmMV3w7ou5JbBUjZfcKggmQ3u2ynE19r7x45sQYRrjXv",
  "key5": "49N4pv4o8P4YSaNsErU6jF6jymhxYsDUCtEeE12aC3X8L35dyvduf7ygVSQbSpjL78meLUXsNkqWRbQbEMBdHN6V",
  "key6": "34CSNyDW4UDg1oiiFo877R4bCCuLUbk6Zp496iwiU8TvUk8VmjE7Fs7rt2D5kz42DEYB6UYyDwcfBj2SDxhHzDmZ",
  "key7": "2sLxkAf5iiPaf9pq94sZCZQGK7JvT3Kg7WUV3Ci74gxDtUKF71dpNVyRWz1dFEiyenYgcK59Z1FT6kt2rMaK2omc",
  "key8": "c2UvAL1JTGqbhxVnVyb7o49cyZBmTSTpySYHzr6GWSedMVRv9zrwcBZNFHSYqQHG7updCQSdHTMg12DASmC4jRY",
  "key9": "kjqu7UPcs3rbTKUmCoZtvdqmbSaU6x2SrrXMBEA4SHZ52mVRJr79JKZkjxtVvLChVujgCfCK1ohwto7iA3gbT9Y",
  "key10": "26pJMR1rkthSsCwmf1H8MM6R48uDyhu9tieHUXehAs8qYnX31Rk75DfZha9yB8RwaXkeEufiMWNhrfApqTSUAQFS",
  "key11": "2mAEV8nARHNV9KGa7GmbY4catZ6SzgvarZBeLNhYuJYJUMXBo7GTRrLUAnvW9T77woUusxdUFTg2XzNCB4M888WU",
  "key12": "2ngt8RH3hhxxTnQxPHkA4e6zWfjK9RwUv8Q38zTvnjjJy1Eyh8x48joyMgM75Lp2sEKycZSbKGeZdMcvJFAYDhLN",
  "key13": "62zwjUSev1DjF19bUVba9Mi9BnGeJx2HcPE3w7xHU495495ftMDPFU4sYegtNkDqZmEEH9c2rB3pbQiqXZRKPFYt",
  "key14": "67aHQgTWGmaRVJeBh62Fz6DnnVbVBQzQpsiPZWb66cRpAPrg4jdR5o24aB7qV883Yky5dDbvo1KZXqPsc8uUuV19",
  "key15": "48VJ4rx2okcWLT4gwAQgTHfiGPYyhEULU7Gea4uMaDWXHMA9quGECk3VpkeFfRs9SAcLeXNa7PJuYk9RGj1tpjvf",
  "key16": "2q8g83nag689F2oFqQYYUtDh1QjHghc76bSEbcsmcjf6QCXFQvPUazqpMZ2reyXHxUZ2e7GmbXewhpo4CbU5aFNd",
  "key17": "31qknRewuRqzznMAmukkk5m42esudbNxUTcehUSMNhspiJ8LvTc3ZScegGBd279EXDRBdStVgRt917CMX8sK8gDA",
  "key18": "62k84ewk666L89ZEY9NuerYL1uyETuYeXSB6R5W5E8ecYv23L4ph7tRLkfnQpbqui6zjdtQVpWWBPkZukJhYm6GH",
  "key19": "UdNvWCR2YvSz7SQ4S7a3YhhXCHaGfd2p2jsGiCPuqi4ZnjySudrWpkdTsTfXg58ZGbc1XcyDvayvDsLqsYfNUL6",
  "key20": "3gD2SHKaqoGat9fgVnMWNWB2rxscpGFjTpsWFVAbJtfYJdLxPg7wQnCTnqpzCWwtGcQzcwDJPEsEp5uo79iiGAgN",
  "key21": "3W3RPvdK5Hwjc86obq2MBKuScjbgNWuw7MUGxLX2NCmjA6j1bRyaAeaQrARym3gt9EUwQBMH4CzejZfcn1tYQwb",
  "key22": "5nHbSou2X8CGjkwUDtHg5gRxebYApNLAGkFzGayvF19b4j7VU3hWqfJZs5d7j1WBaombdJSXayoz1VNHnupLpMEt",
  "key23": "4MyK4UfEughpJ21FsGZozQDMxLqCRpsgx3qfyVaNqxvFq6KqtCWicvguuV6ju8AfHaShCeXjJet4QSnhANyhZ8xP",
  "key24": "pqGWPEDiqttaJxSh5CwAV5Y25jBdGkF7cewpmMovPVy956rQcsoCxC7JnGDC39Rud3yS3LQTJ2o55KsWjFjNWCD",
  "key25": "5pW3VHmMvcJ7csnyzN1ZwJNEsNvwegFD8ayMM54s2fzj6hady1fFw2i4eCWZnfNdJxf9bLfaS6Zc7NXyYNAXc9du",
  "key26": "3W8P1ZwHvtADon5qkqPGZB5Ut4WDQhAp8WsszLGVhXBNMdHSjEFFwzifs7KnHYZSqEXK44zddrpTzUnyiqH7LdvV",
  "key27": "5QV9jErtdcwRp76Scx7JF66NHsG1PEexnHfA2sycbG2Gt71AE9gDjmBrqRurQhoRM1ein1QBEH8UTfjjw4ATo21L",
  "key28": "f8qvHzPpBpHeGhF2EhExb8Wk7FeR7HzX7bQFTCNQgfT6mmhtheKV4wTVdr1uUwRGM9NsBwDGMjwnnVwfENaTH6G",
  "key29": "4Lr3k7swtpLia1WjbWUj6xB57qCAbQksBPxVAG4DRVRYBSQZCzzpNDq6GPbr9YzKSREtoZWYBWXmjKd1A7rE4XTU",
  "key30": "39NryvqX6xtcdJG3bkmyBoJBbRm23a3EAXuRH2qmze66uAZZPYcfgYrCiiFpBs7r48ERUEh5vZzyucurUESH5WfS",
  "key31": "3J7Wb6KDgn1R43JVSaNK53P893rLkxhyvPCT2wRcax8eC3oSyFeKCTG6acf1Bg2XCQxXF2JMfG1ntMp53KiMKR9U",
  "key32": "3GM9AKU3DUmysbUGXQjnTHWbmUYfN3Yz6Xmv3UYodeGcNwCTZAHLnwcv2bub28T2Nh3F8JwtEvhFidqxUPdRUJVp"
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
