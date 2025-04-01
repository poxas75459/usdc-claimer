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
    "125oRaHcaVijFWgoeqHsjvJQxKmYkAmiNiskGzcjhwmKeoM8NcL5BK3iMMxQceNoXKyNUWEc9qDcR8CGxxVGBUBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48V9Qm3Y81LvJKtLiXFGkYePm5KFCAEShbjPLdZKiDpYt3a3FKJgKJ9aFV6DMKTUhWmMnbcUAHxagGAtfUB8Kd8Y",
  "key1": "54iBFT6DTy2zh7vNizw2F1zkvsM57YMJBiVFUKgBWSBX6pYH2LhorDyARfiCb3X7foHeD2CudeewCCdHPHMkPEtN",
  "key2": "3X3D1pNH1Ch7GvWNVDq8cMaXsrSi1vk4ueaRVq6f8hohZW8wWmFdzSFSrd5hdiCcHWLMqMhZGLPWELS4qWzvsujn",
  "key3": "2bpPE1veYqngQRsmV7woU8GYwFf4pSbDmrCi6Jcns3YeAx2gVTnfMwfGLmxntSKcTTCQk8jbv5ue835r7X89SDKm",
  "key4": "2hu6iZBZLSCkVbmKQjRitpV8w7Gjfk1C4fuSyga5h5WduynbNt6KzJjMtonzABCQ8vTYMnw73YvCm8nguTRM5YxU",
  "key5": "4uVZ6c6UDGyABkFmRWSgPH71z56NkRjNLQrnNAR72rudFbMbkav2aCkqXZWDxT1PeKd1h6FwDLPYhvDEiwcmV8jM",
  "key6": "5S7kj1izX6L9P19AS1wkNbejAwDej3XwQz77f4VLurQtzqhsFa9FXLNHr4SoF1WwffUBzn8thr3RZJtWqE4uwGS6",
  "key7": "2fohnT74fo64XU43ryXGd7xjnDKFpdNdHgMNpxUWPPUqcS7mDawWcGgSFYqeYVTdjG3hV9xDajt9357ZbdeDBhkF",
  "key8": "P35fC1iFodVVmRuqL2uUH5Xdws7osgcWQ8DUqAHhsKiY7q8FKVkxDj6qe2dGvoPz7YZY4P6LUS5sgVk9oaqFNMX",
  "key9": "61QJfV7hqw3YkGpiVJv1ZDGeE3Db4TysDXRVMp8wCshKwzrCFuyioq82dfx3B5hzUghRU5vZfjC3pKwfEiKeXKhT",
  "key10": "4Z8LMyDSGQQZkifyh8XGJa3VVTP9p1S8k49RtmBPxvVZLXxFMTkQuiWRnfpCAKQcUhEhy3qrUtS2GjqQZYPquXfb",
  "key11": "4QF6UyCJr2iXtDjypFEWA3xqeYrqVe3XF7X31aKybrBuTkQ5AwRaXFB9C3M2Hq44mvriR969hyA2MMXG4kquRQBB",
  "key12": "36MrHcTq3UtxuXtg3UaGxNkbd3GpjPEGSCWW9piHkRRcbo5fsaUPj8fwcjbpreMa48HqfoKNxjcFUJPzmZyV8wGS",
  "key13": "3pMozctj4y72sL35UW6T31hhHNLowUfbFxBFQGv8DwsqUfvSYAGd65vAZL5cAhJSGv4rjQwKy5BAH1YpYbhJRvhG",
  "key14": "5KRmB3jRyjuyzvW8rbhGQXbE12o5kQM7UPmQ5vhqcMYikXtMSaV1jBYPxMRtXKVr4JzGASnAF8J5v1Ai5sFH8ndp",
  "key15": "4QxCAApvbtA4pohsRfC3WLCXm72wNwF3MbpN6KZ2S5M8TNCN8hdt5ymXBkCRK5QA5CdRDZezxEbGYnvmAz5v6omu",
  "key16": "3piKf4wm4ybSZ4SMMoxPT1q6L9nRQ8fig395kYQf7CUo9P8dM8uAjQhRQxMxatrdMcZReZQuN5cUZ6dBqvnNspUw",
  "key17": "5W3HpqwFhzb33tKHgEuPUyWD9GkzEXM7mjnKg1fmYQuxXjktxivq4wpzUAZVj3vN84QyFDQ5HFikzppBgKYuPCGQ",
  "key18": "4Ggw9HLRSU6m7FLjSEqPuAXoVyHciQgWgjfVfvP1oh74QAyKeLSbSx1GztLRzqL6ykByBi4sqgsjjZtY1yq2PXpx",
  "key19": "461P5SpQdQqa8DWh8BZFzehkqRMpiQhxk4hyQm1eTuza7Wx5ipTdKKCS2i4DCbdDKpQhMxJWfQJHTfHAgYyQMwJM",
  "key20": "3TwMmAGY3eDuHMkbts5c5C8LZvXcpoYJU4VwvDUc1UW7EBowwpGuWwmLFttVGJEUq51n9ZGuc7ihXffPzhekcBPe",
  "key21": "5YWKs8oFHjEyz2GrZRu4s2ALvV2JhSNLFi9SWPcNNPY4FZMeNrwk7iFfkp7K9ABS7dvjYoZeGFSs33r9YT5b6vN7",
  "key22": "4hwW9zXqh4iXoz2NH8fJpCZcThDpeAVZhYoc9eeUURDWhFebpfDNot289v21LVoP3Xvhjm7y86k5f4SdUinRfTWJ",
  "key23": "558wtPCMWDSS6JdRQgmpSR1DSPeBCSnVRVbdRUJbKNwMZecZjpziYwirFhBYAd51xHQKehZxmvrkM8vXYr6XhPnh",
  "key24": "2oagMPSQAnw3Qrkk1eM5G1kLpfYPF75wfxa7U2QhMdreqk2Z4ohbGGMJWk8ytDdwHbY12N3ShJyZQcE6nvzkadPi",
  "key25": "53PfoCbSmyx6g4ZFcJwk1bSL5PqAB8cMBVMzXtfNe9YXhDmScGWQGWE72wZQ2n9Nb2a16pEsky6BmaSt6JNMB1VT",
  "key26": "5ouW2pCtbg3Uz5yghmwf7GnNjkXG9YGnwEmiw3hjp7CYekXiVYAHX16AG6Sx7Tmbixsfrc8R3yJZrAAFAu1kDsc5",
  "key27": "5o9UeTZhaHYS66EULWfFB3wZ1oKnN51PikF47WHp3jbKZEUySQXXg8CHRcfSE2m2ZkH2x2LP3S9cwp3eNr8Q1KbS",
  "key28": "5KUR4h8XCkyPYNPoqZx11sBorLHkygx2FuD2BMJc4eGz8hVycQwNRs6enf1c5cTyqsDivtZMVch5oceaHjE9Dmwh",
  "key29": "5vq1E8jpSVEs9XTuVHkWDWL3LyYxpApqsCdU1hTx9qEroRFBzcoQUMUD6xCT4n38HvPkGXxRQCC8oTRZ3R4k3rsY",
  "key30": "4i43LpQavZYV5obsiV47jBK4BFpmnGsePHipz5e57ECgyFeA2PPgP87VW3Q9w3GPHWFjkxCMzxoKHoWtmyzCCo7W"
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
