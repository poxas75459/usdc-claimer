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
    "4s7jJAiTP2Fn42j5SehTWuPPJZj7VRXLjFcnQjWQfjE1iqnSvu9sZXrKtfZSz7jNTXmTCumBzXALeTLjGNceCs5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nR873JfFGPbKSdkUymU3UfT4E6YQg7PXRGvbfkcbHkSQE7goKCNsomgJkkcfkyjP13TJB5FCV9f62XUtBTfKnW5",
  "key1": "gmLdRHyMnPXz9oFw4gFujBeJQdGNBBezCt5ZmBRkRB6wYeerLSUiELU1Npv9oMyojvWSvMEW58i6RbXufjpzRUg",
  "key2": "4QLNyETAFmdXQn4RJgoUMs4ZQwdaowxRiCZwNSLvaYXnkHbowyUzhqke26rRx7nhh8onK6XiVzVqwbXWS3miquSX",
  "key3": "5faUSmdBqyaLVttWh68ycyfbdXVBXAY3sMUGRC6NqV2kqqT3FeLN9zwsd1ETxzDAaizc4apGw9E4k2vSoCCRftGn",
  "key4": "wxfAeoXuH8XKgpRWJjrUk8KxADTBEUqoZG5tmRtPn298336ZjZHmGq7Lm4gV8HBLHdBuqELTqk8mC4dKnsNg5Mz",
  "key5": "D7DsJhjQnCSmJ5WQMdY94x77NSAW8rRRsSV5zR8kCXwMqE9SGBZJuEn9xmgxMehshE8sno2bswwPpsqvBtH4c8T",
  "key6": "4RCZohqhR5mM5vwyCvRsS7Ta7G7SnMHvTZ7jFqKo3CLuH4PP8fKS2W9Hgyc67kGH1X7cbfT1VtSnArzwVWQCuQgp",
  "key7": "5WokGMpzPYABYmrhgSes6uERTNj6s7JSo2SecukAsisNYha2ehjXbzWB63oFzdMvcz6HYduPeZhjWPyDiwAAdK8M",
  "key8": "4jVMM9pGtBxq4ubsRBC8E5AVLRz42aWHx5voBwiDyn8vLEaXE2Nw7ADBfmYhqpeh8SXMXe6TfJ9FHUpcJsZn2obz",
  "key9": "3hHU2gHU997v5fADLRuo2JZbzJmxdzcaMoLxRg8XorcxH9cAVNkE75oGDoEMAhk8pZ6iM22CdK7P1E549RAUmu5S",
  "key10": "3Az9ABwXXa8Y469AnqaHnj8Bbt2VG5d5GUEgjXM8o25ZW3pDKg3c7nEKMFpwagVqcz5bZc7kMGiXJopBNKjoxQzr",
  "key11": "2DUgYuL8uMFYAo4hcwdyutB9GgycdPeiMbSq8oxDWcvks4qJLvoBaa9vMGqFddc27hRKSDtgYkxPiSvua9w5vGgq",
  "key12": "5boHuZuJFTUs5HGxDyjgaxDNfU7p8PtyMsuW9F5687fmK4J4trrR774SqKYYgCzy2Qg1hTUSnyxiZkJhJKGxtbiL",
  "key13": "5MGPfCjCQ9aSwTrWwKdM4iwT6mSq2ZNE2sHYCsFJeVWzTJTkeREQoWgzPhwNknP9WGZreSyXzWWW4Y23oARGJGjt",
  "key14": "B3ZYvrgdwKsNtegdCM6Zk6imNakb42jWqePspd91tPtgAc4ix7D9JoST7fcWfoVRny4n6HkQ8QS43BHb7ZnxtNB",
  "key15": "2hz5UUpzPL8vRqMnGA4rCuPeLPyuM3WoM2rk2VcRJhMLP7gqUbyZ8fVPJUuAwEAPHrGzcspe1pgz3djoBinDnn9t",
  "key16": "67PpWyQ9HpKHhjQVRY3FYpm6UeFq1CGvhPmxruGt3QhLbfVPhucWzBPCf8Y2FKje9N9Td8gvZGHuaYJon2XJZsBN",
  "key17": "3rTvk5mWpgKDTAqASjF5o8UuAzfp5eMAdE8thmqhuuZ1RxgstT3Rs4kXMAEGyicktrLmeM9cj4PQ4VdBatKzVq8k",
  "key18": "67oQ75Wk43WexUExwkapPMK4KJDoUszga8RaUUUF2F24uPUdNrTrBWz5hr5KognQ6MakQnVkVCpj5DRdEeQiWQVR",
  "key19": "5TAKStMnZLNYnrJ6af8bd4EpHNQNEMow7P9z44afRsC3VALD7wy6VG7THmwLujUmunSts64jeuj1WQ8x66tknYiK",
  "key20": "4krZ4L3yDmdhY51VRAfzd24msiYa1TdAV9rqftWAXWnAvLCEmntT9iUbqEeyPetVVGb1iYGJJRRYX128wWgbf6S7",
  "key21": "2v2sWFx9erhUKCLS3jySwChjjcLPg6zF7jYCYv3mXZGDhKztZwhwZS4VZQfJzrPRLLUsm8fAMJj8ZtZ1YqZjoAZM",
  "key22": "67Y7zoaUiiZuNdcfEiBGnVPWHoXe7CtyvJPVnme3p9H8gNaYWrUYzBwJTyqFHqtLaS2uDsue1QPGtBfrRtgGDXcx",
  "key23": "3i2zizfqUzyaMYjFWB63gZ8zLD7JFhr3CngwnQFoLXoMTzGRaX8ZgBJTGxwEvN1zUCBFBH6S4mrhLPdwTm4txfhV",
  "key24": "2VZvwMwQ2M78HGrkM1kYHYeWia7sBzSDmSKJRATtw6fk2SUFex5nMaEQHcZwAPbbuwv5NpCTVw5g2TruwiY18MbB",
  "key25": "Zae33uS5EBDcNmuVd9rEoyvjrKZmD46wem4EQ13hxJKE3uNSHH2maCFpzhsYXWehnUZnYaKJPZjhsoBNzUcU376",
  "key26": "5CneeV1aSD9sZ1gavm8bg2S4dMDSJzmg7cW5tZW36DDyxpsBSumTbjNX1beGiLqup4HjsWhURh7UAeWsHwA1wN2g"
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
