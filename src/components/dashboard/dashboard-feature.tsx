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
    "379uTS9Jqp9dhUZ1J9cawHz9iz73HFnRepdbEkAqCu1Vi6KwepwgE5mNSaEYU8vc7ja29gthVKghVXMb74fGQ5d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QURE4UPnvJVXN17bKB3Q7uA82j74G19aPCXCjLv2r2mvWUzUvRvn4XLX2vdpJfbK6N6oovZk1mA1PDoUASPXotP",
  "key1": "62FkDdzU2nLrtPx7qSTgqDYTYqN4cJHa1pd9hksuQQPrXyxk9gEggAb3wCaga2k9esDLNXoS8AgbzRiAXttuUC4X",
  "key2": "35Vm7Cp2w2rF34fkXQG1j3MrEFWU3ZTiv5cZ8jgpVesSwbcAhhX1RnjVVJ8XGS9f2XJFVt7GhLBAKjbvELsoRb3C",
  "key3": "5PpdeJZJUdJYGAn59QQaTa3XyyTZmkhtKrMskPu4V8zMoKGJwR9dvFGvtJY5wk4mNA8GqrzxJ7STtmeCzA1kMuxr",
  "key4": "TGAMgUKgEjrjRH4Fw76ypwJnsJzwqNPVZhSwKvbcTAFmEkFkfpTAfP71RmmUNmJs7skE3GNtrfyqPEMdxntKara",
  "key5": "5bfGb5AKmxXBrdemf7kqXnRmstdmxzFUMt5KxLKfWj9h729BmdZLamfJ3djB5ph1iH9jSfas5HcWchEVK1uEyF4f",
  "key6": "21PtGRqmQpg73zxyajWuXVPeZaXwuRBf8UuM6sY4DZ6E4z51FrYnnXGKAMacVmzFwxkLdswxETSQDL4wWHDviXwc",
  "key7": "tEtPdgSSsMfi9C7ok7ShckB3e3yeJZZwp7exCnHCPLRjn5YpaFEKU2pGp9iQ4nqsrnPCvRPG8dRnFi3orxnfK8u",
  "key8": "4ERQWdVR4BVm6HZJGtyLGd93BFPK4PNWrCzUpBLS59HJWjqeGj38LasX7xLAo6YmcYXuj8gRXij9eeocWARZThNJ",
  "key9": "43ehzMK91Q6xVh29Fj7WGrkESZmsDUkysbSwcz6gTRdnuB2SY21s1Y24EgVg69p6PJ4LViBvgUK97ieiDzgNTYxD",
  "key10": "3u36bckfJksZESj5qTa69CoqnDUkecfo4nW5PHX9TF8j772VPEKxJBHMMEf8f4unBCYeMyhoKjmNdFUFYqNpwG31",
  "key11": "4Nv3FHawh555beZK1JA9n6HKLqzD7adaqTDRpCXULSRTfpcUCdBfYo5FQGxfP4bcbnX6bYp2bryK9TZvKpYrLY6U",
  "key12": "2KVKb9oxNcsTnNfEUJhZ64582mcUcdQLqBC93u4vbcaPGA6FbhmbeiyLwMpKxjHWFpiCCgmTpxK7GrQUn8aNKvmF",
  "key13": "41vJxBrndoc2E71FYYFDUYRWroQuugsop16sxg3RRENn6j4pgY59QmsgaNktRrcfWwJKDPXRG4HbsRcT4nopyTkX",
  "key14": "3hPN7wDR2smsMNEjq33ypbcJW8SJkYuGX9smqP6SdFiMah23oc9kmNuDbKRNGuFEXkchnxvYL6wZFUygZBSBWi72",
  "key15": "2jrxhrbQMg3JbQWXprSxsGhcU6rgs1HCm3Ut6auDSophpLDuiojYAVMmag9RHTj5VfCpdjoxwbwD9RYD6mwpFahc",
  "key16": "2EiGT7H4KrnCKi222uczD8g4dcoRp3ytwLaA8q9GS79hj1zgEVCMU8LdQjFcZnEHWgj1ioomzDpnLQkBb3N14rAh",
  "key17": "6t88zPb7wjJyt81MtVTyfCp95iri5Cj1TMo4MvRQmyB8MLU9WbXztCBUjp5rzfZPqdvkiGWAC9Y2dCxzHNF7qwE",
  "key18": "2smrPCDea3W53tTqr2qxqA1DfP7FV7exGxJi5yMXALyKtknVH3H7Yo2mgTL38gWMgoK5YpEskXgYifpQMmtm5fM4",
  "key19": "kmDzcJCjPLF8hNBK8haTYNukwxYx9oPjJrirsvw8DNC98fxANFAGtCp4HRZaCg6gLap5cxgFUNVZiBvvRjui4Nb",
  "key20": "5jbyVPitV8d26GqDT6TRHvUMwBEfn822fTaqGNQEQyhnhZCZ3rxxtBWSprQYa7Q2VYKPQr3Gjy4kxCPZKSU3EKL2",
  "key21": "3Pmixjh6B7c9MwmfA96yNQC6GoKMZyxZuxuub1DGkRgBDVajUucR68nicAGBWsRB4Ztop3osCJbngyjvm6x2UWxZ",
  "key22": "5NSnUsrvuD2YPoePwxHSCu5AHwXgqZTP2p6YZQFAbeT6mvHEpgk5rgKCFTesDpCiwGy7U7nJ5t8Bije27RiPuoFb",
  "key23": "5mS1GYVpVUy7Kbsq781qu9RnGRvyourUKuUrtX2h1E9tKUeKySKz6cMUa6vZqBgQqRuQ86ifSkv91ctpyexKhWhe",
  "key24": "2MLG2Zc8RhFjcL5ASctgYdPsHhCoG8yDR5CSRkDqGModi7wVSTrQ5FHWfCQbFM9P8Y1qX3iiSwhZGzksLAsdQPyi",
  "key25": "3prvJUzKtGZeUiheMVNYsN22iFxRDeX8hPTHSVxNw1EXSRhoh9ryZwu1i1vqWn8R4GBzw9oCuKeCrZzfZvoKbB7m",
  "key26": "3HVBHAEKYctmYbZ1m1DKNdmdz3LMowzTJNE4oRnauBtjUDxfMRdbC3HY68hyw3v48SiVM2oFAnRZ6XJnBGL8x7E5",
  "key27": "2jFGrMvnMBAukxRSTE1xTW6Z8nuHFkAP6Qd4VQoScJyWVwwwyVT3eXR1FDRnVyQBDXhy5XofAwqmYs5oCatXXLCC",
  "key28": "5rd1TmAWew1KibBfkpNCMa4nwEzpWfovbDi6SEwPT3rEJGtmmeb365xwECUPin9gFbS7mmMFdryAb2mKhHdN3Wii"
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
