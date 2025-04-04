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
    "eH2My9m6YUL4KTu3FZC7u8V5RGLVHfgMt98yvoDzLBqyEizihZdoWTNiztkKY9xViU3NNUe6cpwYzJD2QF3eGJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPEPxga5VK37q8HhVQxaWyGPB3rqNFemEDzWMjndEaYRzCxubUXhR72cdcXu5Yg1SHZsxbJdmxU4fzgJ4ZSzzfF",
  "key1": "26aMw3AC3MN5TXRhHmCa7nHJb8BuarCa1F7byVodbvH5rRzvaH5dJ7AcV18LsHMqHEnRXr6fHvDoiFEMYEmHY7Nr",
  "key2": "DwGje1ENU9rQ2nrm2MkBwwGQVX3uq2bnCHrQRzsddvzoU1M4MUaHjYLSbcvTh5mLZRbi8a5L5nPWDnvxQ6PFvyd",
  "key3": "x4uTAsg47K5ypeZRCZSvKdmQYDp9BiUFZ6D9RftyNNsxLcgtrhamxDKyKVnDnWjT6ByKYHNHJ8w6K69qCzKHYhd",
  "key4": "3jPTgxMCxrznMoqzEtbsd9c4Xosgs5VVuJBqjsKrwQNAevHGYW8CvZUdfNujyg7J8ABjtEv2zwX2kTeHbmwZZojk",
  "key5": "4pQAsMcstuymPQCTLnw9Fb5M78uAbwuxGqyJd96VszeS9zhJor2DsjbLDchpCSMcxZTzQ1EDVm5LbhcrqzR28B3W",
  "key6": "3JiHsVtiMY9CyBjiyAQCAQnadg2F6ufJdHmQX1K714QYkaTsJH3kwkPj6eEYLnkK6FFjWyYcVAt4c2PsKiE6GMmK",
  "key7": "2Wu75cBXnqJwdXKYhHbD8ZHLT2MKPuEK9VpQCqSjegFDdzDH9hMb53Gx3rvqFRTSEsYzt1G4VTNbeyzKoQBWLe7D",
  "key8": "3W15R1GmSfSmAvHQz9hHfeRuSEnjyUtcc6mfoWFi3Rp4wQ9dqQR1M7aEUo2xVaRiMBzUfnD14fSP2uvngHbv86wg",
  "key9": "4xop8vVu9C66jNv7bhhpwyEcVUkLospyPSpfUe5F3WmeaX9mPfVkVARcrNj97GMPGhx8USbL7QguHN5xFC7EjHTa",
  "key10": "3MBHwtb6adXDXnFFuHWBVVwra5hLjrAAqFPE3dn6DiNMmdDJPEAthHYL4jnsxiDQH91qu6cz7jQZ5ReM4V6utoJg",
  "key11": "2YRyuBnYrAueqeoWsW3om9H4wF3wBXikLbTr9xxF8vqEYqHK2uULR1jyYEbrjvzwTybZxev4f7LWSJCEgoMrt5aU",
  "key12": "2zdAqhvBcHxvA7gZnjKxHVz4XdDKRbqvom7rT14SyUdgJnKZscp8GxbiokmivjQvPkHRKUJN9Zj7HR9BkeUjrxJN",
  "key13": "WD6RM5PD1opmKMB9boMGYCd2aWcmjVtYUauEEFtbx4Wc6dQMpu8WKQvxcU6QBUtrxFM2EQkzPQFBb79j7M9KuWH",
  "key14": "24umUXPww2WSFjhS9FivCXDC92DM8MykWaURBSBHbCJ8xEWcdbPvpNNnHjsr7Rx5wYUbYzrppeSepq2dY26cLpXG",
  "key15": "5k7JNwQd3PtnZpECvNCFu1U7caAVCn9WqSNutDWBFTrp9YW9ppJcCrxoE43wFbUzAMrxEgtb7UhsKEidfTzYTmKr",
  "key16": "5fvtHX18b3pUTtcesZomLGphgvGsQdAQWEtWd4tibJWXjAYuDEUTF3gUPontorSEVSvUg4ncUbtjG6D4dR4nXpVa",
  "key17": "qqGPbKoB67WEcztXEB1CEjxH5ia8fSFrsu46a6admjGbb3WfBAfp3YNDuZgn7F9Ps7gMkJkUVqTqFkMdqssGGDx",
  "key18": "71Cs1NyEdoMKWHrJURQPPZvt3Fa7U1eehnCFrvJphRaB8kXZGomD2gRXsTdKf2UQLx92JhdZ8q5NiGvxez6G4zS",
  "key19": "4Pp3ESNaDVCB728iZB9Vho7CgTYzauK857PKwzfExaRvbtmkPqyj6MRMst83XW6tYNqxZNQEVBQbB2yYkFa7RKYe",
  "key20": "5CpF1rSeDNmGsoJ1Pt1t57aNGdjfmdmMzhk1fmH9BDu3xYNBogb1pAuVMNLdch8mRLToUtAuCieUT32RZyj581ei",
  "key21": "2Vq7V2fVUAkpYZY1UY8HjRrDK9BQLSkHbi94Skncq7ynHAtagCPfah3ceV2mDN52jbMmfahjpgpoXJbyMaNogbJi",
  "key22": "3yqB6xmbwm3Cp7QE9eFmCckTwYGBidMAw4c5bYBhntqsGLmuVShrdB3CeTWcR3yhsa8wQ648vJdwpNxHsVp2WZw7",
  "key23": "4whTaFqohVcQW2qUgyJZ47vv2NQLyRojf3qUCWVtS7bvfKX1sSBDf56WrsmRfqpdKcu5V7AMP2SW4Hi22xoTgWCD",
  "key24": "2tZoPMV94UP5ipRkCRNSkt91U1pDszdnFsZRFKS5jw3oNNw8Jek3Cn91GMTEsAsRLCuF3XivbfWnCMRKXVMmwPBi",
  "key25": "TvPKtw8wScM36LZBkDXuqxCFZRgMo5Nr8QPCqb6BNYqa6fzcNMcz6eT19fS2WcH8iW5aBXbcaZqRB7jd4mcZrtw",
  "key26": "2MAJwnYEqk1XxfSRaZd2oTbS6kpN93V5gDkRVRyWVWUFRXhpHb7L6y8E7niojZiBtSSbcvagqsRjLtLe3cJ4iiqM",
  "key27": "Y9onZYYtX74iV1VibfeEurd8wNYe4z4MDf9zPWfVhWKtLbC5G3FqLMVrhJHU9oWuDi3dFnJTZn38TrzqquZ4ZmQ",
  "key28": "2meWSy6Uoe2NGnEjk2nQvFX3J5fHUFqAGxvcrLseFv7kXjMPjWMZqinpENyPYc6HQr4F7jaft3C1BxqmsE9wuzFx"
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
