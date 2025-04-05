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
    "paTYequ7CZpx825Ea9J3ny8eFfkLbRroqJrmdPcV5gNZAkiRnztj9zS7EgEULbZisgDjNAZzHwRUiYfRx7bR3YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CFaGW5j8ycxYkkwN251icozUQCw2Sv9aAymzrAmYcUpvxvMFdLBve5XUV6hsPQkjZ9aFuuhBTh1oEjra8n6dx42",
  "key1": "3h5dEkzGwQanpZyPJZrrz7qe4pqpJyRgfMb4GUdZi4USMdipwhkVn4P9vfz9rRMK6tAcSw7XaYctctyXbxV2yqkS",
  "key2": "s3xJfHYy2KBGjfSnN2Pvh45r6YWYtKtjk2472eo2jabBwp1mJotM7gPMMSFKSYThkEfFfQPrS4dMUhxvmcaguKL",
  "key3": "5KHhMMALqQ6xuwuQrrFUk1RrtG5vuC97pzn8dhsPuQKvyZP59KJTVBmFPxTPPyCPqqtz3ykerCLJsMEtYCJBRtqV",
  "key4": "24tqHco4J8gP6N3y4EhpLSAgWfCdn1ww3PVoerHUmLen1U5voB8u8iHxz7FXBV2j9iU6YGaDD4banZ2TYxdQWS25",
  "key5": "2dckpZvcHkVaCt2KEpuyQ5juyHDwrMVe3KMy2UNSe9tdkYC6P14ykwpGHzhDQcqeUiN5n9Eb9PHXK1jk1PXbgFRG",
  "key6": "3oLCdJcB4FU4h85APaUw7ZVakYdKt6mfY4wPP5EknvTfsr9ByNvTAKD4Zm3dE1ZYHRonnhhQptCmAiMfup7uQxpJ",
  "key7": "2EkcppEjKm7Y9hA5pGE5n7o9dFMwPRt2S9BPKMdwpF3rxbJ4ZjGLHUmoYawjhVEtue4f2yvbideo6wHBJ4dMssQu",
  "key8": "52m6eAPUXz4hwtNzmwneE9VxcthEjH5NKb9Cspuavd5oixBCftDXW4LwJFY6y5cZZvQWTH3GAhsz7A2ASy5tMKCY",
  "key9": "4w3DGfVzBppb3sPsvkNRSDM56juaR32HVfUF5T2m6PLfNG9bDMKUKepwmn4bQ6DG2zritFH8xkxFGSHoWYbAdKbo",
  "key10": "62mGb9txrFpBcWQHnp4t7qr1xEChV5QFmtR2xNXCpTYK4sb7aHYPA7RMRv4aE2hztTBQBM1VbMDAgWc2pW5iBYx4",
  "key11": "22ob9KXYXex8KyR7rRLAbBknEAcn6i4CAHikX9FnpkmTzGAAfDdzNVdPew2zVu4jpUzpScSErZ4a87t9CEWwCq6w",
  "key12": "4qpQaeJb9C7yyr3D3BREhQmZodfgVy9P8kQAJRfxAVrdRMMnXFEowZPjyP5dd4EFsyLrRxQbg89WvRQBfZy1Hsz3",
  "key13": "16771ULtdhb82TkzB92TgDBq9aTYy9acQTbs7bwhUkGzJxTN5ryHPUCwu7gHUUx4Eqk9aGJLJFQ8g4hQ79hX627",
  "key14": "3ceyCVZPKyEypdVpjS1dBuDvbw7HUDNZKYSDo6r7QpD44HDFuKE8kvktRGA2EVTnjExjfr6C8NLAZTuv9GSJ5rr3",
  "key15": "jJwyFjHT2WhRTyPz88AporEULVFdnip1Y2M8gjpZ6id9pjGCStrBfRVDGmewp1Lms83Z3GLAc42TrWKHWDCtfme",
  "key16": "5Bn4RWx29hsQVhWR9uRqvtLeTuPdsuuMi1imjtHgsusFYsMDQ6jf6TUZdWETcNne8AEhpNxCAavnre5eX9K1xXZG",
  "key17": "48rJnKtEcAwoRT8yiDMpR9tPmTTNqY2n5vyFmx71reWMAndZcHeRCLCZiRpkCCYhBPNjokhjs3enXo51kfTkttT6",
  "key18": "2sXgThER2Uh6RWHfR19QmrRCmNDEHLrUNWGeoT4VK1P5o5DoFqqHxx6G6tYyWCrocWgGVzMiJtimR1thSFDWYtVj",
  "key19": "4qpTpftuaSgrkVDwSFP3wQedX5PrEPUWS1gKGid8U5P4cDQMEuHK8KGZdwJRWRjDgt9nsWHAPhjSef1FeGMySGn1",
  "key20": "2w2TiYZxMZfSx71zpH7KUezc276nRJSHUA9HcVL65jLoopPUpgP9cEYc1Qr74yFHqWiTV35LAEdd5KLtzdi2ef8L",
  "key21": "4YogVtqcXz5oA9sMx9qxhRdjcgFzydjwjVnPGBpsRqHP3uy8rDarCn7KgHCjmRRG3Q6pGAVYCqDvTuNTYs5UMRZw",
  "key22": "NVCUqMcHHAy94R6oBbGQhCw9sFecnm263cgGyhFKXBbz9G6Mr2WrffrAbC2nrtQocTwNBsGA5beoXJT6DCQzHnN",
  "key23": "59L67zyye6GjfDKqAUyKamywaHaCFPwyrkjvgVCRNHSkkizk3NzX3vMM1thzWhFBUFcjSskNiR5SgHftS94T8aqA",
  "key24": "2S9KsH5V3k1vSbmc7e5fLXnzLKpfUBv65huAsCdszKbVSb5J9HC9UD5xxME98BMHKyf95smVSBtGQT29AyeCKMMP",
  "key25": "3LdzJ6RzTyQ3tJZGqxoqBcB6vb5wXfZZ85iL44A8unhTc1fEBzTXB2zC2wmZXvNMg8NZLDQgHVHYPB7KiopZEsQA",
  "key26": "27oxR2XZnk1CMCjqNGRXSYZbKfhKK96psvdH1nmMwzfdTG5yKGvAvRwZt8tKqmi7da57sjiJcuS5SLEhgN8YF4Dy",
  "key27": "4J8fzaAPXHcfNYFg3Yc95f5yUZ7wZGN8khMfQ9j3D5xi7eVkxqrLH1ZV1hjkYuw9ypNmV7adfzdXkVX3U5uLbB4t",
  "key28": "4Fa5ufK2KfX6dDCX9M8NKBgaA2aCKRvfbKTb4WdD8XWMGy2pzefb9aWk3PrXauvDYAoepQ2hoCJLFCVYwjBdnYtN",
  "key29": "2qiYp5NUTWpxbPfU7YJeGNizTgU78ZWCByPSibvE7ipLDTGGohao7AvwsZfHCFcgqwachuL21ZR9a5irXNNP2geb",
  "key30": "5XQEqgpfeoCFNomYmeqgfg1NUzGwvrba1izEHuS1bU3NAXGLy91CRGXmgwstsxeNbpR74LbjgmqnsCBjKKTxQecV",
  "key31": "2re4kCpiYz7qsqBGzJKNHzETfeMTqxejM2dWXMjeUftFLEiLb4rwFgbs2VNj89kZyoMFZF5U91eHeZ3sMrxRVy7D",
  "key32": "63y2ViQwMpYRx8vRtV9kXkgXysfonu2pJyCyZpsPYKeZ1a4C6NfAm54ygFFGzuUZ6owEKS6VLP8hgZYokTzffpu4"
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
