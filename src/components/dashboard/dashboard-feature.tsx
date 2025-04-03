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
    "4zxEh5jhwKCoCMi3cgzBt9MVVK1jjFAcLJ7K75hhV9q6itmDx4Z8L9Twf7otqKcjp1iEFxFqtnEvrPttdCbdqViK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jE4MDWtD8A9F9FYkqZUM3jbo59VYyXBy4k2nYMkXX8R89eJs2Qq47wUj2emqNC6mV2otK4H1GfhXm129dqYdfMX",
  "key1": "4AdFB9dNpudEoRhJD2ccawdFGbfUtZygqT6xj6xEVaPZVxm5bFnm3AHVp8RJVqw7DRYuZZNMU74jXaN1PfGpEPi7",
  "key2": "5iMwrKyqvs5xmshtvHyZco5GCgVdpZAYAfjk3YP4hB6PUXAhatbdV2GGQZc1wRW3Jgc2K7ayUUfADctKVjB83G8p",
  "key3": "GatVBhtnMVTTewsw2dcnwaajWemqYn6pJxLYM4hdTUZm8u13TVEfkTGEhEum2Uk3UJfbafNHhrPnmxUs8BBPH9F",
  "key4": "4kTLeCc5sAyQX7Sb2m4tGuGayqpgLVZmGaDVUoHp2f7xtTaoD9g85wMXvGs19RBC3NYra8Psf5QPdCMCwtTEajB7",
  "key5": "VQDDR8Dnv83HH8RRnWtnkbACu4RqY4Nuf4cWAg6pjbLJDCFDTsefxMfXveRALP1NSFh5J45w5EuzaB4LjJZLbar",
  "key6": "2hotwufmBakqPnTS8hGtZ4PS1d6p3EFhbDUtnLHti4DoSMfrNAafRA7gz3x9mU34btDkWxH6MzzRqnAu46VK72TP",
  "key7": "5cVNsDPmhBtzCt3vgMi3idgBKSAVEVMgMHi31hkVyBj8brN6dnT6gvfoyeE2s3rsuzFvBXCSU3Po9tBRD3o6sTuf",
  "key8": "5cinfLyaVU6r52BTyKnpefKsRMoK6TtiGDeaF6rDMd7x9jgsqu9Cq7Nm3ACdeuo1pd7P98m7EQ8oLCqh8XVNxS6m",
  "key9": "sm8ZvTXQnzANzkf8Nwwh1tauQ5wnWUQKEjWPAp6fjRnLHz71tZNkDmwNHASZqJJqYBvng6ZT52o97XKGqwBPxsS",
  "key10": "5Xx1QmeRzVoAuw1kVnDZ77hGaYhkSbUs4PfLRFkEvR1785HkdACFAiG1jSNxfHGdnCMv7YXmYCXUKqzQY8K8EQFg",
  "key11": "5zg4f4mqnKNNs5EMcvHGcbxnqmHjxML6hqKAWkEXGNAdB8HG3i73uqQVUU15xBoVQ4ajNYNes3pYgLr71sqoz64V",
  "key12": "sze8x4oYu1vNLFQ7C2N1S2tmwtQLNGfdZu8qbx83Ki3FZw932YHpCfJFjJoBN5J2tRCjAFEpBtoPeDwnqMnZuqj",
  "key13": "2adtFKbLsmTEsEK71ttEWk1vkRibnPBZzmmwoSXZj5QSu3s2Tky3FSysdDFEKepSsrWXgmficN4znx323tx1kpeZ",
  "key14": "5pnUeiC3Bp4pMvPh4tGMmXaKp7UC1NVumXvduunKiDcH41iAknLsnzjeszm4AEdRKTY8qpax8uekk4KGK7FPP7RY",
  "key15": "2nPz6LbErbu6g8THS3MrdBSeu8gic7hSzZnS5zMcz2Lr9K3CnBLofrnDFu2BHU19XwKNkAMPXyNZxt6hFWyE66Nn",
  "key16": "4eQe9GfibSVKoA6w48hgYgtqCVynhabBwFbw2oioC8xcmAqWzDaGBihYRh2GFcCdUERF3UT4HCVouPUCiD2fBfYK",
  "key17": "5eeP2dXz1spHR8kaiKjrBFiW9MT46YA6isvbf4tF6AADBCugZVQkzmcFM1whSW46rjG7nNjJSYspcngvGnTZKztm",
  "key18": "8kro7jpsepuXTHB3oTrGx86JhEtD3gRjKsTFeZrLuSBWckMnZJjRzAapmkNqTrGD1LroL7M8dqqVGHpC1ecwZX7",
  "key19": "debsPK2yi7Kde9ErhQVcYVLYUignhU6AqdN6GprqPeS5BUyg2oJ1UCxRdWquJjAfnMXAbeq4EaZThKWhDawWLeh",
  "key20": "2yUmGJHhDeGTG3izpV1XV7ZjBuVfhnJSJDdetMSUV4GvXe9xvaZMMA8R5ow6qt8jW59m2ckB53X8SF3tEYT1duLK",
  "key21": "BgYhKAwFx3frqCXWDnvjtWd9EJywT2CbHKDEnAtXMXN6oDFHkPAQzvFkbCPcwXEW7dKGnyybu4rV3RUELMaVukn",
  "key22": "4wTaqc5QxAdofH5GCWRr2uJ2DJXoC2SxZrqtQZsMfUDcdS2w6wnw9BawT41wV35P3yHcABR3GmRYgGCrLpi5qnrU",
  "key23": "3YBUtynBvuAoTRfu1sVAH435qam3cZEeidKxLmJ95NsrtGHyNxAoFGro8A7SYtZ9JYYnq3k2fhLVTxWiDyteZRnr",
  "key24": "5PFYFNKnfPebJrBTLsu9zfNPr2vjsJpziAbPPtWtyc8QNHbEfcGBrdHmRiXSS5AuyurBiW9mHYxWLGsEMX7i95rX",
  "key25": "2X3yWghHNUGvG7t3WgX9r8A5qaed7u4Esm4YydxAqWyS4371RRMzd2PwkVgMFqRatzr3ZhN8q2C8kRntizLuuTmV",
  "key26": "i9g2K7g77D1Au4o8FJwx1ANKx6oQWUECBAfD3weKiAxwVy7h2MtWWKRfdqwLZ9ynZqEp3J435XJJvVYZRpLDRzk",
  "key27": "MDNd1UhDiTcfMFj1b5XPnMR6fMfGumQrjBQwFtQg5AwfjqRFiKDVB5aWoXDWTi5J5XNfETWggyzP72kj2Zr7bYS",
  "key28": "2h1c9BfGCPxE3jLCDG4SFxPAtajSyxSMEYVbKjV51khkqLai9bSemEuTveCzqmWMpaGKYPn9KbzWD3oARkPXU6oG",
  "key29": "3gFJN5u84NwZoVUofeYrn1HKqZBZ4q1kDRqY9RFFYWMhfvz3Ahn7eYyf3tv97LpE1m7b6goWs1DVSSRZWU9rUm4C",
  "key30": "5J79iyJSNzmEoJMGwMefs5dnp2WLVhZdmr2Bzr8dwnjAGctH5MQyigB51ngrtme49CLAHBTyUcvoHPDQQmD2s13a",
  "key31": "3f8rsFB8eA2P5Kv6GR1D7wkuZXkAYjnkLeqWkoqyYXXcWW4RTPNHban59PJYTnJJez1E4vuc4gCFA865oAK36uqY"
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
