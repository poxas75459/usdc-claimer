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
    "4WJz9SbjZEJmbFyum1GU3T2125AEDxugEGiF7VRBfLjKkpVmnpEfQLDSXvRSamKnFV2XiXi5F6g6r2RKq19s1Z3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4614R39DQiS7RGAE6xBRZmQSsx2VvNkbdMYejcE1sKxHjLxRdH8z6k6J5eD8LAnWfuh1hcnKR5Wzt68bG77tjUaf",
  "key1": "61RVkfPiScBVTB8vjyD6RhZzaY6QoW96XTDhx9esNPDUrpTtq1r4u6zKVNi8PrxXLdmtyne2N1EtT6UCpfM2itZm",
  "key2": "4yiz3qeQQDTY4YiBc42DQbnbb8uiox5UZYaPiouZsFhDJHU3F32JNAzzxyJskmZmVgTXUZnRywLafDUDmKNDSoDY",
  "key3": "5E2tr5xmUu8PzNHfF1qhnFHUpLAYQXzewrxhDnyDZ1J3cgTbNnXRnGyKbNqwwdMrA7kGcAHuu3TMvND2DKbzg6B5",
  "key4": "2B2SnpcYYLWpKbkJtdhF42TLitN5nwFt3M9VEtHahoiRZuipHXP2dX5Ww8BxRbXdhYBLKYWaEjJAfhUhJh8q7cuB",
  "key5": "5mFH6RRNsHAcbrVS3nN5ABnUJJuG6KCciQK2mVem9c4ntKKp4c4cc3sBXe279VBuRYLAx8yDrmBfKc92FxyHdrZx",
  "key6": "47QuLbKfH6CK1tmmZMDGMjbciXZaZBebZtUMz5VdiPYcLEhdjcngguqjmUi9fXby3XyJLSxEwENjFTKWv3mcw41D",
  "key7": "yh1DD5L27Kra4yb2YX3oZTk2AWKR16FPeCDNtd63Hqsy59nVKTDpftVY3weVBTLGDjennT1uJnehmfpyq27XhHB",
  "key8": "xoPdEnHS3zXaNhBhb8PVHqgqijfwnfN5hf26ZnWSVJpgNAPu3QGzogXCRq3iibqiejDiHhiLtCbEWhTYSanNcFK",
  "key9": "32cD7wCZaFm87GV83NpFZvsjSG7JHsKaDVo13BfpqocVPLZo1CSnfn6nxnVP4PA7JRTCDoduyznQMpyognmNTTMm",
  "key10": "4F7cTz1jbk6pRU7vSqiR5xD5cxccztTEjQUeyaiZC4tubAXyDNY1ZpYPDfbQMyGhJWDQ71HMSdcnSde7h8fKB3Bm",
  "key11": "4ywhoPLxpPssTTJ9GML5ZQQmU6BUc1LrEkKL5LosE67P8NTC7QqVFgHDDFG7G5KZrLQ6QweDJkj4rZToeYeK81Ut",
  "key12": "4nRs2AAr9cQDB2F3aA3VEUHUCzSLSNFDaKvx7FPRPkTLS7L94dLuZvpq5v3hKwgsxsEW4u9oGPkqHBCAAHPrXvKR",
  "key13": "5BPqZKhan51xxhbgxZHsq2vr724YwJ6zKWSGBgRhzpTHdh7o6h3XRt44fXRE2vYzMZ4ntBp9usEiBKzdYR6buTai",
  "key14": "2Bk4paBbSn4PdFrndwA71RFdmghdfwVhS6HnFqNqHJwixDN4d5RJJCaEhda34xBH9BEW7G9X99F1q11hXuDFR6BG",
  "key15": "61iFy2KpVtrPLX4BK9oVEPUpJFSp8r9YqK5ovFor2XB4zP2YcjLBtaaxG8RetAPGNinQwqgKknSmMTeg1i9wTrf",
  "key16": "3TWuDssYCKo7r8bWRHC6pegtAkNhLAHDSfnoxqeoWkU5r9VVh5TrDMuhUJ7fUASQQWYLUeBwSaFazm62tsMLMEix",
  "key17": "52GGwvex3kR2xPNxRAA3w39sAZZscGg5ukWPpUdaWszGPDgGV1oBwPUtWRNVR7ppv2YH8arpoQpBHJvkKZ5vET8h",
  "key18": "5YbdcWgvDoFt6fhmBZGRACBf1cWgZ8KEb3si25ecTXkpVNpJKFekYasF14LPGmTd5Af9SsrGk8exCHj12DNuzH2",
  "key19": "XTovB8HazhopzdrFvoaMwfbV9s1bJjp53xNRHATmb5aKCXpBfWaAXMpPLoB3y6Hn4cDeL268zazWeKLvbV7wvdv",
  "key20": "bR66PcYTJqSbLrUHCFiYVqpyv2qzU6VVoetaGDi8VMZ3dNHG3L3wxiyXP1JLxacx84gFGiao15g5WFXH87S8D1M",
  "key21": "DigjWgp4QzU89skX7baF6dq3TTybXAkV5eCc3MWVDTtpna9ZPnXQT5dAm6G4qWgoAhF7LtSg1vsWaW1xzLDJzkX",
  "key22": "38mJXXZR4gDtLQz5YLtpUSt52az1ZdZwbkqzFF5gXX7Luc74EppfNR7KJS9m3eosgw6AwZRDkQsSNWpAhyYYAgXC",
  "key23": "5WKZF1purxFGYEee8iqdQJeE4GNcoRBnCvVirWkG5kSh7UdN2XBAkYQg6bDW9TUk9qPJt3TeAzv8ygBPxQjeDVFj",
  "key24": "54uWEgixR3FkfN3Z1NFcbhEmw1vsfxTEbsW7zE9ChLX2zKD4aMyyU5Y9s5RvMbzxjznZ2cw1yQAwYxHaJZQhuusK",
  "key25": "5HmzP1Cscjxn3FGL6z88SPJ4nKpdchXs3X1ihmooUdbTRL2yMmgt9BWVxYxWg9BhpvatQDfuidA8Byyy1BSkCr2b",
  "key26": "2W4Pv6YCSL9WyqXULPV5xRxEyVmkYu1jM15TxXSWV9PrW34wadg83wYkuqKpFmSkMowZsaGc5gsG9K7m8Bao8wu3",
  "key27": "5uhpFoFkJ188sePbqzSzgr2oAAAEfg2djcgymUu9rm3cVyeWYsYs3ffg8tNvkZ7fcXoR6M4AtNXzyHk3WNwbtzzi",
  "key28": "DqaS5bSB4wDDGwJM2BS2e4R2vn7vmoJ1tFvficYf8QEHfWVSejrXYoYvwy5Ne2as9NHwUeCG84wsDqbTSXf6Zgn",
  "key29": "UjHiYgmQ5GC1MoVEmHsUn38L5uMZpqysFwgkSiCavrHpogrQ2pMjNuRoDfDjcGNFGhbvxCg9yRuFwYxTppxwgLh",
  "key30": "3TFdLuQ1SeuxGn1NeKKdwgR2jCxVpfmqVaZKaKTgoQjqvZ4znV1A6cPMUMWJQ9PEcVaAZuYDjqrVTgRv7mYxytgE",
  "key31": "5AC3uK6X49fcoMx91NGPQpQ61XMMtzJdmQDH9XhBp43seC66UaGnWYA9gTZvT5HazWbipTHVzj1FCkYGsqhvAEND",
  "key32": "2y4YMNVoAh3fFTPx7TQqpTi7hXmVoD7671vZE8k2ujc2qAsxsfKebxiTfuvrnP51m3ezwwAE4YzpQycZfN4B2YNR",
  "key33": "3TNCR9Yd9ezuKfxLjn5vrc217nB7iWWjKBzrthaCazfp47mT5eAudjNKBARwnSbc8iSaTRCCXPpM1uP6nYcvnrEd",
  "key34": "2PuC6mhfcv4hBS8SNH1RHtK8pyrfyLYJvdJCwv1D39JwFj3KFYimW8iLiZZXWYakNqEvYdymSvPyLHPjx4D6KDAV",
  "key35": "pDWWp51iR1MvNzJJQuX3HboaZxSPRCjthLaXDF6jQjwaM2jBCdzvdXAUcCH6FidesBugdeMesXsa5y8yeht73Bm",
  "key36": "4sashco4BHBG9azYw1SupUEp1tUL6Wg8wkWCZQmKBnTYaDLHYA6droK3M6JAExPy2a7CVJoq3JndbhoN42Mj4RJA",
  "key37": "3pAGXjuTiMuRTXqcSkwEppNscSvVnSzjBtgq1qVGDFATPumAAmvF25Az7Z5yVs2eqeJ9EzDftgC1jko6va2YKzo5",
  "key38": "AsXC2umkBETDB9KdZ1gyttUpqbBjo1Lcb7hTYrSEGatBQTBWfLLxpadW7X2VgqPqK3hg22W2qxfPjFTi6v9JRus",
  "key39": "5ziPBzZ313uynSx6RQjFuo7zGXAb5JTBvwKHcm11UyjyQTsXGmQCjncDU1G5TWjSyCDSuyX9m7NaBxxhDJqvAPUV",
  "key40": "5DBjesL1BSZ1KCaxx27PyKVdHBsZMfkmZhamsHNuKPSArEZTZqXZaPdrz5KumPEJm2Vqzr7wqBKiMGFLR8MjyWKS",
  "key41": "5ZBnfPMLemzE8EhiWFegTZZmaEqjGvv3FDJWBojriCpAUDYeAULuFoKi8Wpr6mTCZKrWodQxjvK5dYwPYmZkNXFv",
  "key42": "62qPwK5NG9Q66HbDLGWgortN7ZboTJEXyCU9G6nNUvNUDbTW8A14fjeevzktZcXkMYMEfLkACuq5i4dC9sR3J8CQ",
  "key43": "4zPsoz14FhWTDQXvWMRrfctPPYXa4FnTv7o8TizDnbWiT6v3Rr9hnVrki4q55xx1VQq3CPSMepgQYSVKQaGJQu6r",
  "key44": "2WzLsTC27mkfCqM1NpNcaKwMFX38sgjQozkzV5AETNxmq58dcDNcRKVD59kJhtoGeT3D8Z4N7jTFBqGz1ShqTwA5"
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
