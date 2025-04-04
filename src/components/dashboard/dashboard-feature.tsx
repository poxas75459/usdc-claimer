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
    "49EHaPgrG9L6Fy8TgDpQtaWX4w71KYNMtfuFurRbY9vVgLV9e4ih8hiYxo3T4dCvs9ZeBPhY2gWHPoTcfxuRjViB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6GXNpbk3YREtL6ie6kzP5Ke8HeyYtJgpLSiL3MHhNv6i7RuCLRwx2cCb8EfyEteBwf2pvrTqGsvDwEWDwcgxLe",
  "key1": "3d2ndEcKd2eec6Hce9NzVi9Jih2zhpUwJGZZtFk1sMQdtbRTpgEAhzwDsnFT5da3X9EkNrHT2VppZdjjajcX4a1d",
  "key2": "29NoHGQ4Eczo2PweTjzHKrdkB2vvaWW94qSZFNa8ZAf5iAxG6cuZjquqqihMh1zv5uhKUhs5bsDeDu7s2voZpXK8",
  "key3": "3XbJ9JEPmaMnkcuXJUxWTfzmAHb7ZCZythb9CdGJVMqNMoa4F3pHeics8cwXRUzeXzWpD8hbP8x6K6w1qz3d5bWj",
  "key4": "5s86o6Ai2Qdss9bnMiEEtnSxrYmLdPbUoRvsdP9tKiTkTBYDy6pe6ng8PeK5jNhrcbLCUAa83kS45WSLGhQ6vwco",
  "key5": "2q817ZHuzBduaqNHX2CseK7TEDyhSBzAvFfDjvzJbnJTFZrnv3f79dkBNWyMaZUgeqyRzKCnBc4SQzULUJ4vDvx7",
  "key6": "25jY4vBsA1ppwYQxaSYLQSETbUakJpcA4EKh4dT5oCwLopot2fZVS8feJP3jMDW5Y6uznnyC3kWmxqKo1nk8q6Am",
  "key7": "2GkYMigCpzhWKxS2ZZUQw4CcaZ8UfNmiKfEDMBnqG5diDfS5VBdbRdaKAh8iokGVCmDXLQZMC3djyRfeCpsaMX5c",
  "key8": "1TY7zQwxzoChQPrZkrF3oi7Gsc6joMiqaH3ZfTWUADpNeoWurTryBMCqwY9CM6xjWQBj8MuFf4kCG5mSKsC8xgS",
  "key9": "5dVyhgBntSdhMkbbYxboLJEe4YfonBhi7sjpYGmVjn9JH8GZgpy7RbHnEmk3jCrDUu9Q743d9aDdmARoyKd28uP8",
  "key10": "4S8yDeCDDescMGnNy4SyriPhP6pMf43o5j9UaVjAtbkC5BSMeY8ANwSLSs2dEXQ8n5VSdk5LEwmjLVx4yQXF6KkU",
  "key11": "2DUbAsYSY8RDJYRY1euZXqYNNFXsu69CfyUT6hTboZrP2m7gbikhK5p6pnr6WyBd7SHvuMQXh1AD2LERoHEJ4XxR",
  "key12": "351GNce4CKXUUKACWJTF8ScZNsdNdXJuK3XApv2khJE41eJUavQxsCdX65bqRVbaQKnEKYQ2jyZ3kFGM4wpNMgoj",
  "key13": "3DYRPC6tgqh2cNrDKE9M6Pq1caJcPZXDzuU6V2ychUDf5VevMA9QeA7yPEoETZSJoesCDe2VmcbuvR4LUUmwoiby",
  "key14": "4g6P3oGv5FoDECWs9ckCxJqBhcyyZvDAoW5somLU1N3NoNSUUVsezGWbsysfRnWPWu29fwQgx4cmtc5w2EFE8qQa",
  "key15": "5yZVCemFcRqrRYAkxjkAoCRM5JKrbcbU5HGCcUiXTNcDr5yaaQqkzzMLxhsDBfqsEowkqwJauCAVpYcKBnFDHG2x",
  "key16": "3vv41B28gL7bm6ccN4dyqP8TxADfz48CehZvq3E1mqgova7aG8uPBpvT31WNUdkzMuX2aCk9kZLL7mzFY1aFd61x",
  "key17": "3t6ZJvwJeCrDLEPqxtAjyUx6UiDNPPdJ7re3yhpxS9SVq6Sh1MKnN76L2NGo1umRqrEiqJUfJfyb7zNooRMmU59j",
  "key18": "5aVJDpGjdFzmu6MULu3pJBmdkg2Gh6gfjmqx3vhb2gFVk7debF22YUEZgYrMbzTac1ULJSMZCEn4fdr1E5baqyyw",
  "key19": "5wy2YKivMcGq7RW8yXWCWmk5c55muTze3escx3ZTrcqF1UMGo6cSkkv5haM5HVjeSnL3tTmYeHsG5bf5HxkidNNx",
  "key20": "45Zdb9sCQEvzyBLXq7o8waPDByZDUF5Xe6RMtQLRbaYdvFwU6FdXwKTjtRtdqkeDRjZTtFmirWGeoPoEXFeK1NZe",
  "key21": "2d45iLqvADihsE5vDD9PRKBzTDM9D3W9kxwhDExN6QyrpRnMiiGDygd335ZrqPR9pv4ryW5VLjsXgFvMpVdozQ4J",
  "key22": "5q2f6ttKquz84CRPqAbd3fKnuJmwcdAmgw7ivDsEHeisWc447DRj5QeCQSbcyx8Cus6jZgJkt7WwKn3xSq9tyTej",
  "key23": "3zoqjLjaUupMgAQxFeEuuM34QbLR2pTK4mmapY1gycfFiqkUKn6kP8pEk68BRMUNN6Jr13zs1SHfLtCGSetTWrt1",
  "key24": "3NGj4znvQmDYyrYxatbWSpdqAbRY3bfpnkjpDYxouseqFHvSE1vQzUnmPrsfaEPxbkYa5eVEz3a2ByETxVHQgkCa",
  "key25": "2q4k1bw438z64BXkKcGotKk6tqByAB2iEjHYssA5Uc7TQUwt2vRkDAkLrg4G9Nj3Zi2CjTf6yA1fu4fCxcdDr9HL",
  "key26": "39C1qmvZw2uXrhiyxgDUh4g5XWBRpWJZwruGNPPv56kmN33VQZ2DMj7Zgo87h7L5p3bswpmTuNP3TJ8V3F3hoE6u",
  "key27": "BKmFsCZRhAMgfYXUn2RtUY5HyVeNhZB79ReqUbRWphoKQWojTNrwNbBFnbmTBGZTdfjqPauQAQu32mY3CK6Ksa3",
  "key28": "bz35NvcN2ExsmT2gffrfTtcwJDRNs41Xpk67CoWnZGL9d1XjKsUKJWdHhN2RHQPNJpsDmnjjRU6uVjyYPsQPtyH",
  "key29": "5tLVB872kMDE3FXcxxY9FpDTYVCKFoGewM4yjDgnyTvCdHCQjuCdKarmbMHWGxMD9pnBbx9i6y5tAzTzFJtBbnDe",
  "key30": "2RaFV3xjUw5U89pdxwpiSy7Mn1xZ3XkmknX3G9XGCXQ3r2V5TLynfconRS3aZafAmoqsCfUVWTYe1mEQbmvNmBqB",
  "key31": "VidfhqNUKo2SJf9pvEnbCxuaur8D5CqXiwajWw2ZFFcsXS9eBWSaF2ZxLgET2wurAXhYz9WizpinWAQ8ojQrCXe"
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
