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
    "2BYNG2xanP5pogcFRxfQ957LvY6j9dw6v763cyExGnoNQMU3BLaNWWXXgYx568DTzAkB4W1wfDmEiD7fxKmYixaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZS5ua4w9jZLm2SsT1Wg4R2bkYBJWWrLMTeSCFc7rxzShSQjdi9eAaDxHtYHuuaRozN3aSQAGjCqDtCwxom3oiea",
  "key1": "3L5x6gXDTaiEN1VQtbbhcdK7hgYEGQ8m2Xu8Zc34ASSejEMR3HR5JeK3VfwT6PhZtVmKF92gNpBzTHpV2Dgu5Dmn",
  "key2": "4Zdz1AZW4MMqXURTrmDkXYLovvep7uTmNTwM5RqVzDxdK14fN3Jf4khSqSAnofVPkoaJqwKPWiPYHYgcxYmMxjkk",
  "key3": "5CfvbXpzjjJ5CZYSaQuGAhxCh1ojN8wzqVxNv4zmXnZM3Gk1M4YKNzLiW2Mt8hmBE3kfbXVkEUEdtvD188HZ2DpV",
  "key4": "aUYXtJRaWMdo1S2iwtEshtrUox4WYqzvcwnWriqZFhGzu7FG4a37KqqiygkzLGWrqsvHNWNGw54nbMuApELe9he",
  "key5": "62yWnHttuTJRDYvjgdf3C6NDQRb1s571a6wy5URkyUQEhuZA7M8nnTHmxEaBdm6gsQhaUfycvfYRa4bg6fi4FUdD",
  "key6": "3nEGgstmnCUiPGWhsr3xvuhqaARHnv5QEmJf7KUYRKWKiLmJ3Pg8SVyJEB2SgYufDKymorrYZxzJnsH1Y5Rx3FwL",
  "key7": "7UzMen5KCrM9mdaZQW9vduetT6Ta4xDLoZtrvYho6Y9NDAmhPbrXD1hybnXFv4VLxrrHgDWn84oSESrXMytZxBT",
  "key8": "2UE3FbrDibPWCkby9TFkv62gFzqrWxb116f3FpMK1975SdBiTMJf6B5dkdUmfrVfzC8EqPWZnnxD6E8P2FqBuX9T",
  "key9": "3jZBVoRHnLbS1QxkT6YTapMvpof5qWyBjU4Yvz9f3QQnyAE69HRbCqnCuscutTtmJ8s4gWY7rpSy9mc1JoCNBjG1",
  "key10": "3Pc122EXaQEjW8N3uVN5TgddJFdandKZotVLMqbYU61TAJMKrmgcxBCUUWrym91kwnAKGd6q2gVtHiHjRRHuPaKx",
  "key11": "4Vns8pmDZFMKUwJnWPUk2FeuqSVk6pCFvpYzfjgV2aAdaj5WRqej1XcBVGT1MLpu48FXyHGjYz6XakAmAywM3LA",
  "key12": "NiPzgbTukG9cJrSxirAt4HeRest2ne37dGcsg1ZEGRzwsTUvS3SRrRdmvPKeUaK4xfpPy27ysTyicxWkUcK3ULq",
  "key13": "4zodjJ29tWb5uL4LAb57i6QSMvfFGeq1tuHzbDLKJ2RJxkEuEY9hB5tizHU4Cf4CW1f9WcT78FZDpwCSJjzZjbd5",
  "key14": "67Q9Ph9gwpm4AevKu7BtydGx5UkETV9piM9PKNTZXZspWAdhxSCb4vhyREDwnGsGY9o1LQDTG6Xs7uZaXoxt5RX7",
  "key15": "4tQBPJEd6sg836s2C373CCeAtaWSaU48N4qK5WdamTpFQsncGwnvSPtmdeCD4MDUzNr4HLTZAwBi95gYhggYtjp8",
  "key16": "2UmryTvBYxaLqWjnh9bY35a4Pmq6RQ6nQCG1DrT6f7guazpQGx2a7AYwmBs72vL6PUWUMHoJyTmiUQ8x5sZciHBy",
  "key17": "2zf2D1kN4Gm6weSiCZLWMyScGKje6shTFCFVX2Humuop7UbmRnBHZkFRyZnQxnKhV5UZESWLju2k23TPjbXUmow4",
  "key18": "4SGGJ8ovRs94m3qf4QYcNAqshp1hb7uAJRMB2avDGJG9SpW1pEwwT5B1ujwkZXBR9jZGapwNqcFedfyt2aG1ZGSA",
  "key19": "3imq5cHDT75bFg9ytwKtE6xmGxwbrfMYn9pSB4eqcgKsQBEiBSfP5fpKRDYvEr1rAZdVesTTgTccJZFHQCdNdGxP",
  "key20": "5niH67nku71mjMAjrQ3DmZcFX4spv3hBEnAtA2rDbx7DcZMZCqUaPry61Fm3DcDDtWy8pjNr4ZA4uoz1EeccBNx4",
  "key21": "54rzRtVPJgQmodoRfp1oe6aQNs5TER8DS4jPQU9amXhuRdMm9MSNhW4RQLug3J7A2idA1hsTcvJyA6v5twWEaeYw",
  "key22": "2exx6CAWV8at5EDbvTQYmCjWgEMw8TtjCp2sbdrEvjtocPVpNTcG1LTjUJRhdrowsGoKbBXVaFiugbiqNrkcBTyV",
  "key23": "nTnK9uALax3dd5NiCvK82NGfn4EnyL8YEGWvx8nt7eDssVHpi9TDAmk81pEMng3KxPrVaDa7t5c3BypGw2SU9pK",
  "key24": "3Tr1sMGaVdvmzMe2qcYXuir5QaC1UNDmYvAGN5NBvCuJc1rWqPBbkMXaXuCkj1i4RnRd3cxUuqao2HQwoAXwWVKS",
  "key25": "2MvCQa7CgG1ySdEGB68JTJVydVkvQ8qHpu7JhsAf1tunU8RoSoiP1G9chz5CctNiG6aa9niQkRET6eohQavg2Woo",
  "key26": "32RwD5zpzSZHS9r98vU6SbybBcAWyEb9iFxGN7LKiJa15EyXxt5MqH9zVL1Lkk2CeQa925Quo4tPgspwkojPHs6X",
  "key27": "ZRyqdtZ7THuQmwMrsicx6PcpqFnWyzEtfnvdNeQ1C1E7CqbVumvQDNt4WZyv9QPZuFdDUc3rqdVB6rkgL2Xtc5v",
  "key28": "46JVp4XZt9hsHkC6JHFsDWYBTijc4gWJMJWEpcTCkEFYgmk1cGzytMqWjqzcZV4qPTF2sXuTNN86q7cERr41ZrCc",
  "key29": "2YLgkxGww3UVMY3hMxwGtYAwGsnUjCDRFyhKTC7HjVNXJC9KZxumdxXsaMrzXHNVh4dtB1WpXnmHwruTrEYZp8ci",
  "key30": "41XZsNxdQbTGgQ4kEXVkgAdMU1YSDqtLZHKcNLbuM2jRoJFrg6sp6MMQyagE2RMB47BuDJh4d1o9Gx9K3otfGA5t",
  "key31": "2byWb1nZ3HPVcSGCrXHUb9Lnxhzrk91otnHJcraVYobuV7nzMrMYpMEB25penRnFgrqKvSeGfVbmyFdsM613Mhfu",
  "key32": "3jPZq59YdvtiL7zzsCCGScjzeqxcPcjZ7AyNcC2miUc5m1BBCqXwAiwL51wTwSFJbBVP1gVK1avFFLgG7qt9hpuA",
  "key33": "2nPX7ndo5RTD3auS6XockhmNpFoNjkZcehktwobH8Umw4zE35mkT8Q7bhGBxyyReiYjijQsDXPE7xPEiiKfSLeLa",
  "key34": "37ZRXn5FSwfHEqGpBSogLNQgckcqXyxRbYybFNV3EU6PhFbk6SKQ7hq7yYR26R2c2K8UuebwrxFzLxntTgJzu8h9",
  "key35": "2HddTEmCtiTVwN2pWhnpsHnmDC325wT3SASwHipYdsAQxtCvMqv36FhUGdiPqDnWtdaiEboeij1CkE3ZEk9hHnnr",
  "key36": "5wz7obc59kbVJpdHXZGx4DvAfL73F79zx7F7etjp1LAvtsQKhMmzSPJorEjbNB64CaGzD1FQQWw2fgeLhhkuzLix",
  "key37": "65bQPYQxE1NqAPXd1qkY8yTEgTKjz49mKXDgS2SsxiF3ABFJKtYf9GAPHCJYXWHL22cnqj2ya89WwmTUaXk4VGSt",
  "key38": "25qoc6QJ5X5NqrhtFbaXWsSuDrz5sTpJQz2TCPs1RmUqXZNE8PLD4ahPuynDCqbGEAnYkBtLcMA6dSRF9y3X8zLx",
  "key39": "bTPRrgLNdqbqLrDyLCFDPWY8PJaz3PZMvxHNiEuuw3Daap79Ekpms5fstBZCW1xEbxXPE9UdPS6J29nHxPm1kMZ",
  "key40": "2Z6J5gjt3iZrEPupu24akda427h3URGv3cMoNEBkc8gyugKM7ErNLMUKiy3NjZsT23XU6GmQhoSPfoZ1Ga7ksKxd",
  "key41": "4h7vcLMRpKyqzA1rf5ciGjzcAz87ithcmkpcQVVciLCVcZa64tmuraz44G5j2jB2ot5ddNENyTSdmY1YU9CYnTcS",
  "key42": "3LX1bQLpoVyEDAe8pGwpw6Tq5wh3u3tjQyuJUJJ1BvJqavJ4MiKZTWyfRDoTTn6zsLEZ1RnWjjmu8nXoH2yRv3qt",
  "key43": "3oYQYMt9z7vopQooraTfrz5bG34vJpF9WcmVSRevhRnamWk74UsQWNvfr6bFNa4ubwrvT3h71Gyn7cJ2Cg2yjgaB",
  "key44": "3jU1cyog67yc3SJBFgnahSUgHLVFN58U3yCR3mVck1c1tra4NDuFirN1QtqtjmGiJjBUzS9AaKEJTyVh99oPsk62",
  "key45": "4NoaFxPeTMEaAC5bUe7hDQJC9z6zzZyxqYuR4vzDcapo1tKe9WT4nudiB7y5X2hiNBjGXkXZfLMyemsFQWsuPy3Q",
  "key46": "rqmzaaYCzxjbJq5f8x5ePPEya8XRwibaYe93UMfbhQeLYiEAdtvVXdGw9VidZNLv21G6C7gwfLdLphcncM4pUPz"
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
