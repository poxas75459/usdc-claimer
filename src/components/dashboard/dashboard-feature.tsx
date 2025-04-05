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
    "52KoTZzJanK3nokUUWLKf4vGe3UvcTspumqtVvnUcxfnRYBkWqY6dtwRRpPCnVmWqYWh44DfTQ4kNgkUKhtqB3QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ouceJNscKR4ddCsouZH8C16jhpjgZX3kxFE98GGKYMH4J44dHdAzeprQKTJoP1NxZQ6y61FS8wKRg9okmHXZXuX",
  "key1": "5EpbHUbLt8S7mjB4apUvLyVRSQgK3C88V3EVmgr2nbLfDZatmYjd1pMhHtjXiGbv5iHf2JVS3VEcpi4EbWgKevv9",
  "key2": "XNxVBu8j2STTLC9sbZsEQ6FPHrAUKEbLcJvHxCH3R6EzoEkaVhLVaSCR4WDVfYwvViRweMkbZAthhnmBFDDyACd",
  "key3": "3nSG23GhWxfucgRi4MTqD3gxAYAtFFyMKf77295nHTJNAC2xHwJdutYGp5eNvMjXvqJYM3WwaEYcrQttzqxv5xRz",
  "key4": "3gVZjejVnoQc8opP4iFVc1zrjdZgu2u5ASeLUBoG6xjhYHzW8WaTtAmZWpCc2UCXVzF99BgCA4UzXCBrwaVo5wW5",
  "key5": "3Mq52fuNqEHySWZgpyPsa61qTMTfz5xcHoVvCreWMzbgz31dW1AeRRsR4uUce9m6wCDMjqssLQSav4f6eGt5yPMr",
  "key6": "3AiUB1knF678X2DnvgzZDRmhzjTHA8LC1nFWFrTzC9Es5QJKJYp9qxhsxKNJU9oXZRPBYBKCWHjRoyuWkTdXEgh5",
  "key7": "5iydYNRtPKVkv7qKjWkQbrJ9AYjTFTQe8hgkSJ9kh3bJ8vuKrj2T2Cfb5TPs9zC7mXmnwwrSVyG4FWbsvGpnR3cn",
  "key8": "45zTZJJRaXBtpswTa5e4UESF3rShZ8VfvfrtftLJGeVQ3K5iwJCexsZPFFEMBFVZXVHtQnEzmDYS9xLkr2g5fhKk",
  "key9": "3fHtfS2CevJfd9QZgaj19dFQUXJTZcNdDfYhfdBsXVffZPSvCf8DmhQHCFMqmTi7sK7EwsHRLZD98j835DwT3XcS",
  "key10": "JN69dEw9dv1cBMHw1fDKm4sGiW7PWZKiMZvvdWr6JxshGLMppoLZBUeELXcwZ1aYNUHHktKZvuv5m1bUeFvpdgg",
  "key11": "369jtmjDcHpECF7oxwjrVxYEwmqV8eNvDw5qGk8EL7nKKs64BLfyJsckMvoGPx97N8phbiJWvM7MmS8DZaVpv3w6",
  "key12": "5yM8pKaSEtPbRw2Fv5tP86rXxtnjPWvmXMdLMUTsZ16NEfsE38od2kckkbEbZKr8VWGheShTTQAbWSiBVqhbvteF",
  "key13": "2UQ4UdK49G6j1ikQMoe7HmFT5cUC6VEcPkt9UReruidy1YePxaJ7QfPcgg76bsrPhX8v72yLq17QeumZmscv75UV",
  "key14": "5J5x4KWNcUJ5QVvvjNYt1omqi9WB6pdZta3VHpEYxsk3VL9iYbtvdgyHQzznt9f3mET4sHEE4sSqwbQi35hJif55",
  "key15": "2PSUqihimhw6x19qAGydDsWsgwejhyK6ygXgv9ZvohCVNdKcdK6TqmakctAif4eHdoNu6CK33YEL4oT7zqAW4WSo",
  "key16": "3v8f7qGHhJj8ydBd4RQDWa1px6KuNiv6cvRkg9WcWmVcnYXtiDGqieXVr1r48D9gHEpGoSGKX92AyCeBJPEcuQ3T",
  "key17": "4B2qar9DHjfsh778vg8c4pqZBuJCG5gbpqro7peMaTtzbC9NiczFArV7QD7RwDcanGjoUyRfAFrCxDuALbVAXjf4",
  "key18": "3L3YuUNUxWySriFAZRcuaYzAMXBgFMMs7BbbzpXjQ4CgLvBs15bMCcgH577EYUzknoeosZ9dK7cdegyQ4GkStBQo",
  "key19": "4MGRWjG6JGBhqB4CKGtv4q9spchmxeMHJb22BgWwqRfqtcptR38fhbetpogacg7ytmi14bPHbCvswNQeonsHewbG",
  "key20": "4JNNPBi7xN7mEELMqNnPTgxpz484aNao75v7AGECpxPidCPf34ihvkKQDqg55xTRhRR3URpECuJmZRkMFAfF9o5h",
  "key21": "3tQxdxa6wMTysWbNzx53VThZHPevfWAB6ow8wjBAxFCbhxXXxKmSWKS7CaUkd2kDHE3dJidGL14cSnc2ojUVegc6",
  "key22": "4tfFrxJW5zxR82wQKH48ux1Pr1Rue2ji9ppS1VSWeRNLnTUsuEVgoY3GjBjCVJ8opNR9HwQVmaj65ujryMQny1gK",
  "key23": "4JtuxTEmeUZ8Z1ht4eqfrPRdPq6z6McAbgUkYKndNeE6Urddxqte9nTSQpQaoMsLpazjbEUFeiqnZDYxBc6n26YK",
  "key24": "2S3jjZvSUVowCVUwRD7ZwWSgnm8xDhv6KWtJW5A8auT3vKJajJqffqsjadxqfpi4SD9MZhBPi3zLhgPNPMN1Wbz6",
  "key25": "5iwB1JA4wNV1XWcHBHD7kCFuWAfJiSnhQgCdjk62EyBy9nc32fYV2Rmj6bBA6Va19B7TPLkcQCMgsjP7deDDEW2u",
  "key26": "5dESYD7mcq4PLSQjdpQB34J1yk9zpUNrYJxTrQB6LTQQSnhMq5gsvjfPnxcDcBtHn9hnx5xtqXR66LkD7TRQyZvo",
  "key27": "4i1eGAimCQR3ZSBSa5EdffxX4DeqbTzRTNE45xSrW5BCabuYNbmij2ioiFzvfgFBUSkSmEx6bP7dXjwWWbAQTHo6",
  "key28": "9RTrhSpvMujy738rxZVKpAkyoPfV1jkQYA85f4gf1nhfqzaHipNg6pzTNsLTp5khGZqiVWrmYjh3Xr9Qhjb5Xr8",
  "key29": "5kNrGrarG3vXt9bGgc4EPfNFZwuQ8iFwuxAQ4MsvVitniY67S9xJ6wtmZyQfNHGFpR6pW1VTnRuNVeUPEqRvmv4k",
  "key30": "5ak97QmHUNuhFJiJrksiZLXhtbNnyMZ1Cewg336YcYaoDNmRWdFTi1RBy6MCoHcnUtoA1ZR25ubaH9w5SVz8mN4B",
  "key31": "3fCLeVL1qDjdWJLoTGDS3RWF6xkL1NJLkmRF4MLDVJYfz7qh5mrUBnKmc7WGdJqomfEHCVG2CmZm2qFE23DtVSJj",
  "key32": "v5JhZQgsjS4HkD8tc65BEsRWH1VJkE4J3xaT16CgqmQiMFYC8TkaB3XadfGVJVKeLc4NnJ6nX9MtS9H1i12NcRb",
  "key33": "5mAYgWiKf75gaa2HranFYD2uGNNXwjUqcMY92jVVCYhqWEDkGnvXcaztoJAh3Frow2ivWsEf7CFSM7FQFEzngqTN"
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
