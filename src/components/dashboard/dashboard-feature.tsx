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
    "41CHg2sgiCCeFSuz2oGCMELuHog94Y3gGwgX7xp4PFDszdDeY5hKp7YVPpjWPLJ1yGjvp2KkXidZuYbYjVNf2rub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uN3QUVqWjqjirCb4g1ZkAag9RdBWY9rFJocu36UVeKbuVCkrVis2ZyZNeoDo7nJCUfso2hGxnDoYCREwvXYftT4",
  "key1": "4nJeY9cYy67dBmdmAo4G9CuS6tj5Qbf7hsoYmbuvvXowdZmxHQYRDsJeWWmBLhR3wXRTGDgYq793AXQNPNxRgzQi",
  "key2": "3rrUgRfmsFHmLQF3E5B76FPB5voYANXkUx67hFYmAL39RQ2opZNrDuYK3w8sei7hMQzAaZCXNYT96f5eJvQ3WPfe",
  "key3": "2wg3cKcUv1xCrpfBiaqt2Bz9NwzvmwTV66uPD8C1wDsSxauVxB4iNXgN7NMtp2Vr5LtwbqhxdTfniy63JUPAGGHE",
  "key4": "33jiRtAeDLfaEVP5aVNr3ZQz2ZkzNpAcYKvQNPmPNtETkpTKXDisnxoYf3AAfBrpiiZHD8T8xKkXbGKJ2zhoYgfU",
  "key5": "5M9n4wB1kybfammzZZQaD1daXKKeP3DQwUm1gHvG7dgo5SSz4PNYv8TJPuFHzyH4eNsrwMk7Xe77Dh7Z25WXUGGR",
  "key6": "3XaBmF9qAHHGKbVDfPEHs783z1zAwf6S45Kv5PGqXMdb7iefmMYHuQwBa3yfdAK5Xmq3ydgp4FqEhT2PjFahVn13",
  "key7": "5jpH9xkVsYrYPsG45gHmiSDCo1hEXaubGKwsx4PqBA5iVYMfKiTzKVo8mQ25FM1usR1iqcSWXTcd3dusjuvqPr25",
  "key8": "3LoT36oRP9QjBn4bWNkysJuVJfndpCfxs45o7DbTBneVNF62TD5T5cAbM4kjny6NWFsUKppMYoXbvfx17RLsS35q",
  "key9": "5hU7KSiwerpunD3BX2niev3k7ULaXgRbD2poRrCsNYu424butp7cWEhKx7i4RxbojmUk9pJhfX9mYANWLe2z6crF",
  "key10": "3dRynZCMcH8mjiTbKMY7MZPTNnr9hzkuMjYd9q95BVZUmkgA1Sbqzt9N3CT5DoauhtAbTjd1E4Y147FFA7RZUWKV",
  "key11": "44RbnRwRDaAyc7zR3eJbCt6NpPUup59sBSCgzao4XUcmqH5BL3W7sjsqTkqEcpPVv3eG2u8KJBw7MQpuKEHaNx1M",
  "key12": "77rXfGoAphropr6VLf8gJTVt4aGdFreDkLiZwShPDRpAFv5fA5BGwwRzfHzZLkvVN5v6ddpC8gjK3oVAjofkpXm",
  "key13": "3CSpXCoHUkvYXw2ywAbbLTZZhSSnYjw7P66EBsnaWiXmGVPvBc98yGp32eXS6hm4qyEU83HQJc8usPzotUirETdV",
  "key14": "3T4Fv14f7tccT3NyjeMLPBk5NdbTLcaxjLXJSW2uGyqnMja5a9HW5sisAxiXXDcmmsJ1xS7tqpoS7Zo7eVC75t3r",
  "key15": "3wfX2KUMaYVboy88uQoctcXGaoTd3DhEWBmXhKyoPWWumDWSXXJYzK9RKYGeHnQ9uHahNAqjC5LPqyJBXmZmBGCW",
  "key16": "5wotsxV3d1e2aKVgmA9VgjFdscHTL1FMLfJfrVxZYGUWvqUYVS4YAbsuKChNnwXB81xabn24dnyccR8KZhZifsYh",
  "key17": "21Tyki5HSm6Lny2q2d2woHiLsaJhXGYDrbkFU8Uc2BxhrQQjemFjAa2uRFthXYm2E7oQAmyxzJFE2BBjx3z9aaip",
  "key18": "3Y6rKh11hZTTMt6FXQd37Brs6YX84UoAQF1d8NRbeJNPnvH6JqmeXQHM7uucmJvi14wdSNubXFevwGUxRMDvUokb",
  "key19": "x6VpMnjiQgGzyqfhgp5QKW9ohc5tFkW2anaYxrJmdZkQ43CyutgjofrrL54fVk8bgoibpe7bkD5WJnYVnJUKH4X",
  "key20": "2KLmGsGUXucXCFo6ZK238G4XdwhvCopXE7SLQdE5mdvuDVGiSYbcpZv8kt2dut7V8ahP9gjHibsN4pvZVsbT5tQh",
  "key21": "65HzW1cMjFHGiAKVQ5bh7BEFkBrHXgRXSoPg6K5sVosWM7cWg94sKX37xfd1qvV16FkurKbD6QuR4Vp9kJv4dR5F",
  "key22": "t5a8LN1zCs46z3iHwZBiu796qG6fPc4hc8KZ5FhsvzLboiRcQv5ZLesA4ez1Q39x3czmD7Y3t2yj4EJJJM2xLEf",
  "key23": "42oYzKXaSFjixtGy3yd4kag8RLV8kXFbTGgojeuXQrL5CMUut1ZdZcTdLh9QPFjeKDUk3Leygjz3DuRQMfsANTfG",
  "key24": "31pxF7XsMdgG7wjeePqJx7hf6FbaKJK9xTPGTSFFHgjMN4gvvAvFCeoyDVjHcoXc2iWKCibxY5RB1VYQW25X87hR",
  "key25": "yCNfrmGmKFrRCm9jgEJHe95vUFWpvoQLg2mF636FbACA167bP8uwQsKaNZzXc5DtVxQxndfeEQZ1beHCtBcrMoX",
  "key26": "5LqhNsqsURqE27bo2kuNuKJ5M5bjNZbcUieDup4sFfESzGPdCGJyVoY4671S4JTE6TpvBMK35deVz2gdnq4WKn5G",
  "key27": "4bXCdStdy76zk4WvEm5KHPkhjV2YT68WGgUt5z7m2SxEeHR4Lp7No8PWw47sqnFN74Y6VH7pPtdoKD8eUeDE4Bwf",
  "key28": "4CAkg6xHHfP7Ev2X14rHRq9WD3LbbEjKHGj1LrYxEK8p1WLToHSS24gogDtvPqDQWke7GHT1nrSbL8ooHMgJah3L",
  "key29": "2ioyJRMUaNM182gC7pLsD8JqyYECYqk8wxE3MDf9yhuLf8btkj5wqxvQXQFcbCzn77UiimmFGtmGk77QY2NXhbWe",
  "key30": "49Lt5Jjgq2WnshtjnKAL23fDYAU2eesX5CGxZrMRToiSWtgMxPMx5SjkAxyFRQYmn3gJ9tU1d1VzF8dTyku7QUnc",
  "key31": "3Jj7mYMTj4wVx1RGE1L9BobcYqWEViMiKMDSoWCnLn1TFvfTpxxwT5cuacpHVDNXAi3CMWwBx71zKNtufePRmkAp",
  "key32": "5hGXasWWuhGYoBCQLJ4nG2qjV6gQNc6vyxj6M4GgsMfE4M8YbHsB1DbqKHYqxm1wwEgtJRRjDPBk8EWz6cxPyskM"
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
