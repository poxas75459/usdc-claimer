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
    "2Pp8tvh35Epxf3aHG1NHefAWbdWQZEfUxQXjvF8ctsw1H9otF3tXP1CwbmjAUse5ZoLZz9yQiQXZHjpVK6LYJLrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c4x5WyU8QsEh1qfwQ5jsGYJVucd7eNHuoqnaUKL3ymgW7J5SQ3JJf6QNEaJnGPkjj2Yi66qQrJYYxszgpUP7Buc",
  "key1": "48FMSNkdnm7C8uggufXqhCihTWFx1QtM4FtKG8mtHxLRRHtD5cKoPEg2wMNvR8G4Zqz1Dc6MSsqTanVdq3V5pBJc",
  "key2": "5oEoxkqVp6vxn83gcFcwVnXYBkYGX8GBRUUCYjpcK5LYmycXRECMtUgdx83qLdsVcB8zZEmeAgfuZU9ENXS1Fjii",
  "key3": "g9MP8vtg6CvLMKJWAdXzJp91SfCXBGf6zrs9uAV28EPK3v7hqgs27GmETZUemrtcsVQ1zzJosmHo4L7y1cNqLKM",
  "key4": "4kSScT5mqkNPYFLbVYH6hT53K4CnwKc1GBbLeh9LeWHzvMmndnFmdYyWne93boEst4jcUy5Ao5YKg19b8wtZ8uAk",
  "key5": "4ywU9g3e7JPBrTtejeN7SweQyS5rbxEHayMJ8Ub51pDjEwABDZJSxeAR9L9CcPC57LKvXWwzxf5viHgHKn6Q6Th4",
  "key6": "45DinmTPwV8xMCbgyg46SzEUrFPPsYKnmqQcQWSiXKAnWBX8ppeKgMuatXA2Y5MTDTpXwXDwJ4aCjmHjdTJW2dEc",
  "key7": "2mhH417kySFzVVyWgBo8Axdv5vAN9RgcoVS52YQ8jwGqEJ6qCB3xakCzmz5d2LoauYovm6vofhDp5dNHEn4gGm6H",
  "key8": "2RJrD3rnjYDoVHASRpDKnfhXh7eC6Z3GjTPbFWpeaWBR5rGF4bR8jxsTUR8j74HUbQzTq9gTk6FZSPRrS6dgMoMG",
  "key9": "4V7A6ofvi4YbmUzeenbFawYzXVtDrk9zAGdCGXstdiyYcFi3eQw4nCpCVoZQyzv5KY1cagmQxhLPSAotyeBRx7uw",
  "key10": "2mvaGnpvToiFc3FNULz23a2EVbH25yV5Tj8eQKD69Xmkh94EvVXn2fRwDWdpGUjgz6osw3g5o7mAs4frZAfH3pb8",
  "key11": "44F9vJCTiSz5tkiynP58JTXNvgj49WwU9r7t4ZgxAK2fxKmzFggHeJz9ghRCXRWKmzrx3k1LszPbANbuVNHuxxxL",
  "key12": "4ifrnowb6g2wDHQvQPhQQPvKyFwpgZhEeKke21MWtfPa4JMZe7kbLk3gChkTnuBPEu9VmznEcXVXbxjEnspJdmoB",
  "key13": "kJ6rBDUeLwjwcPJ4FyHUH53VAfik3mQVK8ucchCovkrr6v55rwJesbszNTvYKTTuz8y3Jwgr1WRwCX9qUNf9Cd1",
  "key14": "2MisfM2bepJoNTupuLeuUReSVdGhHg1dPoe1qs9H2s9x7HZDei7PyxsVZbuMZ9i4QYEHFye5LgUnzenhZUMi1efH",
  "key15": "Ajns5GMR6fWaAGide9eaBVvX3UGhbccMrZ38JLqbiJGP81o7AB1opjB2TL4jVNDMJoVmHKDkpYVb4vCrDUiyPg5",
  "key16": "5tcBas8j38ijjPhpka8B5JqRAdHXnM7S7yKPRyJAmMh5JUjD8a4goGFDmS3Xbwo19pqWK8PvhDYZ1fDnRQp8cpW1",
  "key17": "4fnNuD8QkVDqRLeNz6i6UBieXUuzBbvEYF5cCwgabXdGyydkmTYpJzaVWFmkPwQ7HpniJM3YQNs3zQC9vnYjRRyP",
  "key18": "5mUvwaHcyfyDsd99g8GHsf8r9jSuxXcXUNm94vxe6dQjeHYEaFDeo9vpXW37MQEadDyMtAjvfo6qZi1psVXySCqT",
  "key19": "2NoKtmbh9i557J2yZJ1DiJHGG9LPhbbEgxLmrcGZSvZXCNhFYUKMzvsDqj1n72AZMoC2L1SM1Lc5M1Wqt7sVRwHv",
  "key20": "2rdG9vYAmyMPuqU2FNmCdvA9mTVi99XJd1P2rKmoPA52zrfgnhYVVYycZVcvj37ayXhZ7CaQjSTvxwjaUipN8knw",
  "key21": "5fGbYC7FKk3C4h9oNrbGTpPG9hW8m75ADPWC5R5ZVZVctV7D9bNhSxNCt67NHzZRgkE5AkxM7CVSiER2S6VLSXAx",
  "key22": "5xioLFv88izBH21Lky6oVxEBLp1s1FuuvhvATsA3R7zbXPWKaWAaYYyYFTVk8R315F9vUCZuSQDoaykfSVgE3GNp",
  "key23": "2cjig9GUpe25CC9H4XDuN4cgjKZFo5taie462q4EuUzkvTpUo1LdvM5RwPGDm46gCrTdXSHhxN9f29Fc4cAcku9h",
  "key24": "3SKDyHVwj4jk74GDJbA4qDZPLqLLhddnRsnHEiZnogJpguW6G1KG73F2Y2vMgNNarDR5Ctkp4v4EHq3MZtB8kxHv",
  "key25": "66trotVy5CGoJdjx6rQicSrRwLEgqPke5p2qriMiTxkQQ9ZbCCZn9wDExXzHC9DeeMGiz7sNytDMLVZs62m5muhQ",
  "key26": "5YxsoWqeL5ZBuE7DGgbKE6VidTp2FDd9HYsxRWTwjMG9agF5iPjHYJMTow3PczWMb7mD3AWbwNuDmEvqJfzTYjLT",
  "key27": "49jAkm2BY2n6VvnbvKfRHn9Lb9VJZdegD2DPe5TD5Ceuvc5iVAp9ZXJKA9Epb9x6DB73vz31ygsiMrtCAxkRee7z",
  "key28": "3k9YrexYwXnd68vx12johSVgABPDSDHoWPKQAJ213fKmtjP1BKdSXWbJbWJ1kRVcLkDmmHnvEt32NM1dSVymP66U",
  "key29": "5yRVr4PezC6UpfZJpgB1vZVCSskocca929CG8sWjBSYrtnvTvkXwBpgSKZoRkaWnufFYGd2cbvrw6BHqcF9cCkNi",
  "key30": "3iAKertmyUtShajA9Yt9bHBFp3xtncYyZzBPCbpcrizM1eYLPkcAuiSRQDrbDE78dQVaNgBV29yBjfr3EV2mvcqS",
  "key31": "24uVdphJPwves2xD4KdUdQJoQdMeoQ5LP1saymWp3u36peqAEuJm26SwfXDbgFX3oATSF5ihANsNgeKSoreCGVH4",
  "key32": "JfeKbtWnstWCngg78pMYAPx6c27QbkiJ96uHJTyWBzjkmyLMBisikX4FW5uMuE2yALGZS2dvSNnVYQrKkwjAkJo",
  "key33": "59RRzaJZ6e87qbJgdzoBMS2Hcent7fmMPxk6WqWiVQNnLc1sPxnWCtkCzfFRTE4xRuDCmVzwb8pAkvxKsYASJupU",
  "key34": "ph9jyqPNBinWSB6Q4RpLQgtZjSNxTFbMn8Pm8rNLMGRBbfNPk3P9rmt8fELfJ36NSwHeQKxgtQQgwsAMtKHdzs7",
  "key35": "3eoPcAapkmqjBqNmtnKmJoXshPPWyi33o96pDShNtGW24oMHPEzNDBd9k7YVspptAyLTMngWCy3f79yKVDXzaZ8V",
  "key36": "5GYpGCKYNW48iwpAZbZnfMhYeP38FKrxZzXaRj5wwk3P8aAgQup2FzMjbwJ8ymvgDGVGgDPxWktfsXzXRgLKvx6H",
  "key37": "XRNpuT521iZm3kmSyAfKfNFdJC5mpZvtArVicGqq1KABhdpVJtpsgHEkV32Xr95RFdY5shUNjk39S7qjyByf3fc",
  "key38": "3hJZ7CUk83RZqPiiAJFeTgyR5G6Q4Z7v8MiBGnGUTcHzH2S8HFzYf1EYr3BMomvchpCHyBvzUupoCVfNGencrC8Z",
  "key39": "4i7DcdwdbRX6a3xyQjNHy1FNuCw5fwbZpJu1G85QqoZvE1zkdeasEADxCVTtf7Wn6kVPQALgoMXinYmaeZhYGMHg",
  "key40": "2GxN7GEUExvuX5eXD2c854DvaLQtZThsHbojciRR65mhshd29KmcGnYCNSC3WjZSDWwZgW1Dnffoaa74Sxz8qAd6",
  "key41": "8gAHpKuFnVLq3G3yhaj3hE3XFbQz8fUBgncfzSeMEQEoR9mN8nw9Gxhu2Q2PevrVzcN7N7B2U991VWNvSsSp3cW",
  "key42": "3zB21LMHKYSXVF14fxNT1d57AZKCc71wFa7XpVTADweayZFAwpp5onxwvs4DcpEqtKbfrz166oQ2CkVZmbn2pXmM",
  "key43": "3oVRRPbMUSijH9U7LWjnqXRfXjcjDZRzczrJwHGzLN4AuPxcZmsr53hc3MeinQ13g47Tf4raQRSRnAFk1x1auvXk",
  "key44": "5EB2EYB7SFHUxAhGr5CRruLpsoe2nKXoKJUAWxGwYFsbtg9jKsAUHxDck7dDSABxCJRs8i2G2nH6fNLV3oh4mLEe",
  "key45": "4AeKYMma9fjSPE9aoSas1P1kgf3yAkN7YBdoiy9654rp9u8YX3AzsVDRXLBbWPcFRsyZ6vrDduVWWNsWt6zLqFwj",
  "key46": "5eXJbXP8ag7tBkjYi6UVT3dphA8JWJ1htzRAkKupohXjp1caV8FY9wuAWGa4p7DimZ7iu8qpkJ4hzscVMwcpsxNe"
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
