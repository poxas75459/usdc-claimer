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
    "4T1uFR4Kk7riBCqW59xzHdCLePwzUJJYEoqhCR3LRW2uWNfzoL96Ps4tjm9GxiCnyt5oAdotcdxQTpm7Xg92cvGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTqqTrq6u3ZwbFist6TQHdwPnUjs985TEUGxhXZugy7toG7aNvp2gkrwGGN3NvsGXY6mRxcTqkQ3eK2RT4oFtMu",
  "key1": "47UJU1q7M8P2Yj5KM2FrYZVKRXd2Rz4sg2CyvPKnP1ffSoMXzRHFMszdoM2QqVpFyt83Wm7ymC6hcVWNSx4CuPPW",
  "key2": "ffrLxGjpBnnCYvpLVPXcaqgxJJNtJiVU42acqe6ZugrRdWxoRoM1iAL56hryGKerbYKvWXJVVg2itAcfjWb9pwF",
  "key3": "5usHeaTHy3sAEFPtxB8QbUTwcBu6GCzNPbU7FgsHR6ii8wm2ohFJtk61Gs6Qx7gT6xzoyGmzhwfC9ABoojjAg3w4",
  "key4": "4Ase9EF8VBqWNDvkBdoEhjMRuCmo9mP1y5v46AR9L56FGsEmUnwnfVwuCi3HoboVYFDt3fSjcSfDC7rkg2SyPMpQ",
  "key5": "4Z9YE2r8CkuZEcAMuM765bwdhsRdQ4QfPV7x8Nki7y56mfzXFC3m4nkvg6NnNsL5fuoXthk9Vzxa6FrkaDmtkB8b",
  "key6": "4fLZDFojiX9sHiivsKSoYtSNKqqTGktDqs558nvFCstiGYpCSZS93wc4WNfvDk82HHf4spJxFPNVBCcAJeRxwRvc",
  "key7": "44ezkxcyqXcMLPwAyxSjQgrmvUXeJ8cR6KksCgV6dexpcmYHVehPGJ9fooRRgsVM1DiAZAgcF78MhQsCthJJ8s3m",
  "key8": "4QskRoNVEvxLrUD3tx31dzvp3nyqNtKucyNuyLdeE6W55cmQyfHZXxDyhT1yAywdTthorBBLnuRveRWWHA511ueN",
  "key9": "29oqm3ei7RBMouEuvrwedHsenrhTP5CswqofumDhMzgoEJm2EC5k3i6NewBp7N61nsR8NQZpBrTJnoHxaRXzh4Yb",
  "key10": "2obW8EkmWNbiiocQwrcLgi4k31e33Pp9HQj6NKspEDgiBBZv7oBibQbqDFAiArHpg8qTRrUP4eK6aPRNVmeLEj59",
  "key11": "35FPdZMXjVQBcnEEgqU9EWf1nBzLsADzerrfZyeprapZpSTXaK3HqMZDQWm5j1csnvwsWDVJ8RSrXusWZ5dHqAVr",
  "key12": "4EC1fXz8gCHjpQ1s3yX3Kamh1picBwRKPmEYC7PZyaELBFSrihMPWbnHgRUCCk5Lys5tHiygNzQU8eZ58opB47GY",
  "key13": "4mBFT3khteG5jz5MDJGXDqLTnbG8h5pxgWK6XRurbwdh1q7MmbXMuWRfbanyg8LzRYCsRfm1zKFvaJyAgdZa1628",
  "key14": "gz9ADn8dEaUv9jsgrFyU76LH1QfCHgKz2n7J3HVDQKruyLkmKS6TZSNfM3GGW6jYWD8uZTsLnVnQujuf9upDsfK",
  "key15": "31RHLGdRQs4vmvV5HKaf18LvD3uqqD4NQN4vQRivaVibsmMSRghS9Xj6bLYghXWYPon7fwv3wAMsEfDUoRoL5guJ",
  "key16": "5rfSffg57sCGn2ENziGtHT4LYd18SYkkMjSKqNLJKdq7juQaFboJQbPGXaNBfiEgppv9r218UgZ6PoN9U463bn2k",
  "key17": "4KHBzdf1dRysRrQbZvqHgykF6DziZbJePViPGMvXQkgFcjqgQWp7GNnCKzaHexjtnzFKCt2EH3MMmPaUUWuXYx44",
  "key18": "5a6qcE3YRQSLSBJ5wzJWTAd4gupUXbEZWLDqB631LbxR1fNgpv7ZeU8ZgR2hjWtCzS6NwJBSnybWsrsVLiEQfiSr",
  "key19": "3DvyAffyNo7kPsS3waFjwx7ccNswXRR79XM37ppYcSwrXMnvwM16f6HP4uLejHffVkjPvkdPUeEffqQBw21Nf3FH",
  "key20": "4mNNRrTQNktd7JXC3La3vHp8PAoLoCZ1bxdWEhXjh6CPiJnXdbb7CPbeovhNY2HBnhQ9m9GDHS1yqMZDDedVx7t8",
  "key21": "3gxZfDTvXosvVVUrACCDiq7PC95dgQNXGV5ZD2NXvpAqNSowRpMDpEBN1x9pNwvsyz9qAreE3uZCLFCz2UcviNS7",
  "key22": "5t3iaZnc9xpuGbna32XewQ6g82kFTaL1ZaGsDZyiR9RhLxKaW82T5nj388mL2PvMn37YmvJ91hq9NZdrSA1JT6Eu",
  "key23": "2N1Awp3FDgAw4Y8a7mWALqFTG1LvZyHHgJe5XhAHsK1u9VtYxgvzAmGmJUGeEfSGZQkRccRRAhLhtZjEQHqVJti5",
  "key24": "2BDiTcRw8zGKS5LvWtcGnxaKBsBn1TqJmp1YHWxietmEqezm4Fp6LuPr3hKYVVnWfp4yhoUUwdkNV9odY1dW99Jt",
  "key25": "41wtZSG5LXUe4wbu3wc1YF9hLrTXRt5UU3UziCDV7kcb2yDdMS5TyYP9uWRfuVdXpEGUuMkYZpgteWmiVXRjwnhT",
  "key26": "2hTUpTBTNssN9Pd13EfS6Q9THCp2zQ2T1ycrE2RADzdjUB22sYzhA15o6o6yA8M8Hnvm3NerZtpXoTLzbVmUPehs"
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
