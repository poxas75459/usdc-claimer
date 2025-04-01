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
    "4yZ7oRSvSSyK5rCo2ERC7sonMNYDSpNka7aL5gS5KJQLTxop2BUZVtfkBPTGLe1zSeUYtVovryorBJ153pRFpE5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636pReojexSmuwt9voHNEFMMvmhy4xTuBAvN63nJFWFkb8m5cDnZUvyEXW2QBmpN9WhKKZicFerdUR7Ke5K986y5",
  "key1": "2kH6PvuGGBU9MFwx9gcxWoQzm8ns2QRmH1ipVNHeopAqwDBX4zprnpL7FDnRUgD5ABgCiRUTVFTbZb6vo9dbbU5b",
  "key2": "22U8SrLG7hoGiRmss6kN8sw4mDjZFwfNgMx9QyxQspee7denV19wGV9DRcuBEaY6B7y46ZPfik3jKVYPCmi6MPFp",
  "key3": "4JLkSRL8CBzbYtmWAB3quoVm5RmfKpAh6nKLgixbwkpCsCZe499mRkTozH7dZrDmEpfs6Acfj5fupoWWo7DWynga",
  "key4": "3ZqGiQGoJTD465FS5MCXdLWNGUjZxWpWJKVZe8Na6S9N7L1DxMK4FebihSorpSQPZsV3sF96QZEsLm75spGcGT6v",
  "key5": "D9jk4EUioKaUqxNoEyEU2QUBm1mLfxs8xSmfvLCGg73Jdt4RXqTQ4KPR86KwAZ5T6m1kWP5xHUNLrbavN1LK2or",
  "key6": "25SJV32CqoFdoBLMBBs8acYcjYEB7NzYhRQAbxevcZ9DBvPLEpapL9kY2f7ZWqCr9stqaKXFMb9CTHNpm67hSrnp",
  "key7": "CEPnVzNRjhcicQQJWWte4Vw3zwwtpoVybDHox5wLJuxZAvHJYfe2bfAH4iU6WJjaXh27Tjzo44JTmogXwEPW9VJ",
  "key8": "4RQ4Uq5szKc2KnfoU6D5SunwK8keWGA9TDYHzYXMRqGf32kNXbC7P55FWEruQvLcUVbTYWmuDFpfTSQ4mg1KXvQy",
  "key9": "3J3ScxyZTamDieb8LnvpBHDvwhzUG2dcHNY8cncYjoPyu398Bf2B8NVTvL6ffaxxKJKiibE8drt8fXQfC1WdSt3Z",
  "key10": "2PXKoQ6zXozVM1VFDTNgQqQcUV991zes72im7x2GeVpFUkvqvGRuCY8z7Fz2pAFtDyy5hionfffDfVBN25zTT6BH",
  "key11": "5LAb2c2GvjgkyC2HA6a59TvcBtH9MZYa6d1PeAPUhkNyrHHXzvQ6mBAwqTawqFL4FxqtYpSE2s4GN8RvD49vsykz",
  "key12": "58aJ7v7EYY25tauFfeTLQjmhny3NuT2doGCDzyVdtGeR3mMtw9DQnoFU3osgUTnegEE9jropzTegdV8mQEAyVGYn",
  "key13": "2m7NAQKJqrDTraS6CHA4YhsCeDv4wwW9kRPwj28a7ngo4GrxFoxGnVyPJKWoH3BGWZwhEZbDR7JodKiK2C1gCBrV",
  "key14": "37wxGYynsH4ygURCiQS2QMiAyXHykE37MS9AH59oM3j1ZgnrhpvWu1jK96GGhgckvwkbRaYVHuWeEGidh1vdRAGs",
  "key15": "4wFTeqxxtnkKcUVncmUB2wB41t1V25pjHehxUch1i5czPaRe3vVwZSYGiJ7oYd72jNLSJoq4LbEFxwXMXL3sTBtU",
  "key16": "5Rq1iEb6cFeaiR1mCSfqRiEDeqetKSm9481yB2RKTS1egrqABnZjQjrmqj5XN9X2En5PJBZAaTtgsfaRFMMGh1E3",
  "key17": "4ivJ1xkGA4Y8VrmwChND67vhD2smjEmrtBmpa1FdjjKwLJ7UPVSqBuirRNa1YFzsyk15yYnRxFRvXAnwXF2WAP2u",
  "key18": "3qMJutzQoSbtYZCxSdKDcprx9Koggn9MDxLGBAAZnF8b8DfJAjH2K9mPv5MovPzftAzGbBYYNFNaPFXTejCA3Xxn",
  "key19": "3tjUoJbyxv5EGgJmBqpzcGvvyeggQMRJufkWbz3Xuk6HRraCB7QwcJn77AyVS6GRevzQRBgwcsorbZdwfBWd4BJd",
  "key20": "4bNmk2rQudHUwut4HPeskkHkYG89KqYLMZSTEFz1zQ5SZVNJ6xrfHP5rpbynYuctp6WYa4sdZdEnQwb7vvqRWa3F",
  "key21": "5nAAUPuSoHksJmFiH61L4iJCNKX1A99L1GsJDdPURGGCfNBLELuruwA1SenmU2zXvcqteXccDUvj6PMfmFMp7Rkw",
  "key22": "4pVcMUHqjY5zfVkjvKK7hh4o8FTPqUDHyuprfqLx2UZCP5Gr9f7nhNsesbRGYRGRuXXj8syHauSfSFzNPX41Mofg",
  "key23": "3dcTLchpuCQwYrMN2h4EPhx7H5hN9rF1dXVcpE9wNntDppgXyKsZZ2q5HZtcYMNS7YZBputSQk9XsAKPkpccjuBr",
  "key24": "52d9ij5o2xdVHQ1baLG1CHDcEtKHkjS362ZRRTbodtwChhmTPsnoCYhyTXZ5hPeXNxfNfmPRUgYxaChjHG5XMBkX",
  "key25": "whNUArquPTpmnCzEosSvAmahPvQHECp1xH4ycPdenxecNQ16tjUn7r2tiyJrT5tBM9JPjhQx42VZtDKARwhLQoe",
  "key26": "HCEEBquKwyH2dXZx5YmoAkXwoPenzS8ANYwrES6X2YJGDaJNGZCyNTAV3q3QDmyBDL2HEApKMkMA5AJKKjuW4xt",
  "key27": "v36JZjMgCnTzPoy5RKHPioRBxnDcvtL9XVniy8MeU6eYgLzPtDvchMtmZfdhGEa3mb5jBKnvrcAGBwoQG2f12Qp",
  "key28": "52G8e7pSMt2sEgYqTwZRH8sk689VtxCVE4KYPKaeYQ4DgN6tYth6c26H5p1G41M8yj2Gh9vMAFzzxXG7RRbEyfP2",
  "key29": "2WmEUNRnPTBLd4p2eaaZqckSLFg2CBTwHvKBxz8MJm6CCDLDGcdygnjK99xbrWgoxpBocBSg36LjZuBJKvSeyzrk",
  "key30": "2uX8AjLxWicfKuNgoXAbrNrH6F6TGPq3ZqSCjimVYHrX5fcvWHu6q9YogU8Z8EAQuVFRbwiyfFVLDap57Qv4X78d",
  "key31": "5qu7dgbekGvhz4RkTfSTNmXy4koBaPQo2C7eDksr4Xr9ZZZdJLppmh4Rp1uR4VAEhpq5c8D3RgrdUoY2Ydv2mz9s",
  "key32": "4pVfKgsU4CZN49JGtHpy7kNoXgSWVjFWh3hPMzVHwseN22KYkMrSTzminSZq8zVDyxcvvAjmA1jHpAwc2oERvWXG",
  "key33": "3HRevFcAoDnG2sMz32BaoKSJGzpoa1g2vHWVEVgbFTTotNx7H4A3Cos6TYBUPCeocB4gpAAjxtntue6BGSsdpjZg",
  "key34": "3RgR61DfR86EZw3XfjRPHGCv4Y7CbczCzKzVEGbUiDMMKL7p7PwmwWTxsaToW9qVVNnFwgZP3oFq4mm9LHKsjkDZ",
  "key35": "KCBGKun5sJqVyEaGGHcje6QGHNG5YdXZsrYv7eNNDD4T1Mvvv1xkT4eDC9KaoinbihqRdzkj61biagWiqtugw23"
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
