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
    "4zwKNCM5rXCMVYtETak4HCn5P5W9BkpsL94f7Loeq1DDqxTT1o9zdMaVNT4cQyGZ8fsvACRZDvwQMEzsBtx7u7Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkM5G3tJifaAc3Yq1mvg3xfwofhrLau1jBYc9aX5sApt7vfc8j2kHA8m4L3HpQsjS6GXaBQ4QSz98AK3fYLoEkQ",
  "key1": "FtWpnwPmU4x9RhiH4EsqMMUXHmwELybTgu7xyfnA7wv2abjNap6x1F1K6ucVtwbjq54MT8Em4A5pMxnfn3wJznr",
  "key2": "4qAJydT758vQ78BmGNzwA3zfsNnu3drySZfV12LsDUVTUx81BpYMjE7DHvLpKqUS6K6C3UF7XbBARaLTJePqhCn1",
  "key3": "4BSNj99rg3Pr6iMczkpBLzyMKyZ4zz4Gm9zcd5F9fqVrYFtCmJdLq53Ei2V4xxtLDov1W2xJiafNkJwXBCjAbW6o",
  "key4": "RWitkx6EEdobmK3xon1tpPuFg5pya4Rascwr96ijmkkprRv5YRWX6FBCAwLjTsvaYcrPD1SYGeceQS4hZhrhjhM",
  "key5": "ziAeFhnUmeiKut6kXbC2ZTogFqdGqxiRhXvQbVASu7ESPRDTBHFuYrX3TeQ1Jy156UeLU2b3T54PdP5haU4wQx3",
  "key6": "HjKsvmajPcYMfiXKZ6dxymxndndd72obiTQSR6RYgjigC3PFfCaFQYAdzsywCz6bqVB3Ws2j8QfbGCYTQLima6v",
  "key7": "2WmRV4vW3Y7tJT4VjoSjR2dL3GrZHzUPMMwkMDMiqEg473JWdogjrLjENPHUVYuTVuTyWdeFXLeUj7SfNyu65g47",
  "key8": "2ovq7rhedrr3u5KogexmBE6sT4AZcXr5skmjausjuuSZrmhAxa5PXb7Rmb9vPzotrDiTXqZ95b9qejB56zqtbhTF",
  "key9": "4PfdZjhLYdoHGTt4aU3LgtszAf1FQeDUhAJyvqAaErsScWV6fEHmYBHgZZB5wxAu9cengrN3PrrBrrLvigJLT7VU",
  "key10": "2qFjWGXzDqxWg3u4e3E1VnayQA5bkdHhWvajAFGdNCnjDPaTjg7QzvXetFRGN4mjSPCY9SZidzVHC91MN32RhZFp",
  "key11": "3PXALcyjhMrPfPm9no6JGxvrZkmYncq4TWoVoMgEE7ZTyXVmzLSrz4krJTSyHWGMSQ88qawy4CJo2kw656U15SUL",
  "key12": "bCSzJ4zvwKUabbbQd9XchAXbUBFwA7Yaevcpp7KyZyKsSAPkj2GvZmXR35vRodSZgictfYinx9222iH2JTxN3R1",
  "key13": "uWFVJD1BYfm7M1kbCGgP4zPNAtaXfr6ZdYwR9FD8GC8vwxfkNrPMFKrbG8FUgn6QJ8GGrqvthtKrpBj7JA5ta8R",
  "key14": "2vTS5pqwoKGrMgwkXDmhRRdbkM2P7PJq28pWYgZ8xWPfZZYz4bTrBLSJoKBN1WFSV7UZu7RvkBYmr1qXAqQM5FPo",
  "key15": "TTqNDBXDKry2KUa715Cvb6ajUetBqSDXoGh11Ayunhrk1eAvcKLi2m9JrwCPXdBBLZ9hRzNNXgBNnm9HCqgAQPg",
  "key16": "2nrDU7f52BnWVc1nQ1sxrmtD6wjq42nYzNh1dx4c92FX9y2QDZSfYJSGx1PXkk8DKFuPZaY4z6kL541N8TMup9Bt",
  "key17": "FqD9JoQKaNjpQGJdcU4Lyf8XvnMoEtvRcoupVbi6bEfHVKVBzaMtnWbgD81zGQPFLcPWeCU7Tff5YxBH7byHPm2",
  "key18": "5Trt1rLiCbvATvfBSTdBb7LXaaf5X8xskN8TH2ai87UP38VsLTWbAo3hfCii3qALP4ywBZanLWFuGr72tDp8eSfr",
  "key19": "z38G9XCQy29QvPpXb9S7tjDcQaXvN4BwczrqixAqeNzm74euXZv574PLiB354r3nLqE5du5JaPGwBGEBMt7DUqa",
  "key20": "3KnfwshZDsvkR6n4An3SmCVqkiv3V39WNjnW6doKpfhji5N6cTeUNr9LqfkiZPJpYkfzvVZURMCb2nitRiUU3UwD",
  "key21": "3PGTDkWcvXMP8PP3oWJ54KVkXVVgsVqvqRZtYrnqZzuArm8REA7UZkJNqgfeA2xo8dJUhwrNEEozNu2i4NAc9b2v",
  "key22": "4oDEkFEeyeCnpi6ZdYgSsgR2EZLN4v3hUFK9ZxbfmbMd1vJ5JHv5kEWB6bywYYLcxFvV1LYHUKTKfNH8uBhdi7os",
  "key23": "61bX37jpHyWZF2AemAxkhzCtwffCNYGGAhAeKQHbcQVhzoRVygcvJoHfhEKbtSGuNFXWh4WAHvMyQG57Wqh74btW",
  "key24": "3ourdF9vvsXpKNpg1s9B9Vue8zaTTuJaBjCK9gSR7ZWbbTKQ71DRJunVQUu6PYEhbhmgmgR7QbNLnWiYJLPAQ76G",
  "key25": "5Zb1VUKn7moQ398W9WYaDHAxU4zhzBrTnrv19TS2unoCFi2HhaKikZNBLt6cBA5jmU6gNxVNb6g8mjxfVghSpXLG",
  "key26": "5rThYsQ16WNVi4aqbFbu7D3FZykonYUCAkU1ZNeZx5bg14JHxA9bqDxnrhGZqrtDnovs8uHQYZXfQgc6o7HcieEh",
  "key27": "2hddSzSMH53jxf2V43d6hiRcXdMiAazPpvR4ZZwtcGUHadpuTXFqKg3fjjYBz8px3KBNADt8gNUdatJFpXQt6EVW",
  "key28": "4ZwDBAwTaB1VpU2sH3TLahwur12mfG8gNSSVBShHVJg8f8kJYyDy1wsvGF2g5c76enBBLUji9f28SoAAaCZwJWjW",
  "key29": "59EkLyrbLhifN9hmuni2BfGsyssfiP5zx3yEJxcvshAeDaMgjWKC6GHwBA1iKaS4u9A8CpFfBUAbG5MZZbMs4Cdg",
  "key30": "3eykjY9aEDzTj7bXaYiavbc9kejp2G5dUXzoCuiRn1SoivUDk6R8UYNERHq6TWJyNrhVk9Wq8e4tgy5AEBEhefb8",
  "key31": "2cxKLEFkWbsnejTceJmN3SGQbVvfuMEez8QK6XhZAa2ujv2ctBTTNZh6AGrfoDsGADPv7NXtCkdZ2eqC3zKejfS2",
  "key32": "21fcGGj5f1zNRdezagAnXLCCrzdrSiC7eQq8ypvymqPzCasjc9c5VF3ep23L2dBggTkQnzftjAHYQ7XxQqXHUSJh",
  "key33": "UhtU17WXJh2o6UsEDTeLZubKeTzygjYnttKNRBuD9hnaxVh82NvGRYdqJH943WszK94HGBuPEk6XocjaVN5fyht",
  "key34": "5pNXkMzPjj221STSBMBwMrPDz4SnD74Z4pVHcoEPbALmJmm9axkXuyC95bm4nx6yaYJeWreCdUJNb3bVbdPEAV6u"
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
