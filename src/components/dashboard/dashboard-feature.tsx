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
    "vRDBfNXNhF9mRHr9zXXURGFbFPBhNSxn4HT1DSYM1oC7K9qpKdgkq81WBRtAtUvJTQeDu9TdfCxxftZLfQbULxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8x7t73F46PpFnm6Fbb4sasEKrTNqQjggyMxQX9dZzvEi3ioePKDViBoS2cpT7tDiJ1U5hrmRgXVQX7ZsQc8Hp1",
  "key1": "4jaR7Qvv38qo4ZvPNPEgWi9hSB8mRBAwCY15p8oBBFY13Dz4qcVLafiihS4EVw5qahQDjY9MGGL7mBE5dZseepLS",
  "key2": "59oEvV2gKAPcbxcbfJykPrDgaBMw1qE6cUirAf3em8dM75nLJ3rGmh7MMzpi9dcD1Mr1b1GuB6Sq4bHxdqBCdbFF",
  "key3": "NUXDYdDRAEZuCLaVAfdbDPLGa7UHQA6jMVyQHdZRc8KYQs6traE1McpKAxb7Lx3EngRBchmgrvuNJXZPeV81xxg",
  "key4": "5iraFEcPr2SFWqMAppNzKhUssuXyHTXF6iXRTvH3iCZb1dcEeajcTgdTysptDaS6f8afJhoiQgULgN5RCe99UC8C",
  "key5": "222MCHWSVDmghXQQDJDZV49R2EdimLmZHo24SuAz7znxCk5dj7sYdcFHR3nwXDAFwCZmBNrsyMqemB2U82LuSB2s",
  "key6": "2UkGpXrBbXJ22NE4ec5Sw5oS2mT36KLmshDuXzdTz5AnCZM3sE5BxNMFJqoBL2EacFgEZ1iPnpPh3xFr1WnkfRKk",
  "key7": "3w7t3woWRL2fqpz2BJ8de4uBcWC9iX3Dd1EKv6hjZAJPVFhWYjShsacoJdBoHbj1CLwtqGhbqx2hKK3fJsYAfQd7",
  "key8": "3nMqUSki9ETGUJ2HZCxZ7u3dN4wcvofSfMXeQrep67fz3cFrFQDSAPUmTBqSq6PcbXFkLkL5twwwJMdEHHpvFvF5",
  "key9": "5UvjjFX41FHfsfESeT5dKvKK9uSfGrjr7LR5do4zC6uLdCtdwCLGmowrSJi8HBeSt2ECdiC15psgpM61i6KTV3DH",
  "key10": "5BU5cXbLk7XzZnXuPfLWmHvdNoDAKJ6C4fVKLUxL9Jw7QmpR8nmDWPtypvmMXVrWsJasUcK3mtdAaS7F4JUQ8D8Z",
  "key11": "3rVLcE2u1tsoey3e6C1iSa2QiJ8zK7VasBdMY9txy25JJcAZJ1j11EnpNGygx4yYQVFJ4rJbp4D5bHtRzC8YRZ2W",
  "key12": "5dv4FmkPU7zB6HdtrFEfyRWMCEFB644XA2YLkK26ML3ZQqqW6UWaVQhh4E9gJabYqxmrR2XTPFsjdPByDTvGz5EP",
  "key13": "376no5uqZigaaZueSFhrpfMUh6uba88zCzEPTg8ydicBRcJw7MGTCCQXk6dbch7EmYuVAsmm1yekAGAihC34xCTS",
  "key14": "2pab83VTQLcHvxJN7JEWwXEgU3wss2PvYd9gujVx8QtR6yZoEERChHrtouQkvVwoC21Kuve5mxoLaAcLHqjKecXW",
  "key15": "4592kDynVxJWXhawqWY8JhZPenYZ2vVfhSze4dv7Kq5dDjuNoXTzpfR125aDwLJAUhBb6n3AiX57vRRdJzGiqGXo",
  "key16": "4UN2RPnHxaDRmKEYfwxNLGvDN69seqSACgjSohubWkjL3hVbsFPb6MaxphJKx16T9vP8M7iQmM6m7VUrfV5HUTPk",
  "key17": "3Yn7kPY37676hKLzH2L9LAYGGD6kD5Lf3ighYHxvzShx7CvNKpDQz5o8nGeiPN8qPr2zjL1R41DstcibLMv7ovoP",
  "key18": "qBzQvLysZNakVnWoRTRjLK7QDdkVWvJL1BtRxbng9ojaCF7tZ5UK9cSvjkwD8w78jGS8spm6U4ZU5ZkM8qL3PbS",
  "key19": "39aKkFsu2sswTx8cTuatTtkuomGSEdyQBR5nP1Z2MfyZXSRRNQPv2WpospfRzwjVVNZkZbFbdwCbw9kJ6W2LNMGy",
  "key20": "4LdJ55PN61LAjeiBKGYVrTgSjymaRTdg4EayW57eFWYM5bzYRwYx3QDrNatY9meR87PqTre4dtqhKcpvizU1gGvz",
  "key21": "3kNUNZ3mXbUh8mPBcimmMQZxvGX44EfgaLEPo84TJCtAXSncBVkGnYpQR3EMgsFY3weigoCWvW6qyoWAp8x1BPsx",
  "key22": "3mrzh5hJ3rJH5HDT7SYGF6ayZuXFcDhx7egoBzZLAwkS7VF2ufe56JUn2uyea4ksbMWWMPDqFmesAmZXbRaRNZ5j",
  "key23": "2vrUZhdNesGvUKs9pVk5d54U5uAiM5CpB2nLAud9ggfuLaJchRUunnBNTBE6uwAESMLFUfVvikr7wcfJ4mJAb46e",
  "key24": "5JZhbJ2ypWQhFeUiA1hL1rg4Xq8RaGsQgmfJiLV8mfmfrLuH4bUMwqvSkJcpMjyr7fN7vMneH6g2PmvBeNe3R7z4",
  "key25": "61ukaQ7bZVDSn5SvGUVDHFH9RALv9u7a1sz2f5eKUMEuhwAyGfuzmMoXVoc1tPHLAXfTJXdJMmuBFGLtiBXAj8ee",
  "key26": "3RHmhRXBcboB5J9e2dhAb4McUskpupaiihRafxa5eyuyAHjsWWRscWJAqaHvHrEFSjCprykoESGhfnNvhovtRSZ",
  "key27": "2QabSwc222SsPDTw9QoY9jDVYtQpN6sK6HPUckVbtEA4vd4FqKfVBX3JtyqWE9VuLuLxrriTkWUqYNiKbQLVjMGj",
  "key28": "3FTBv8UKPYHM1YKKXNJVwY2v5zegZeWBv5vkR9Ke4n8Wwq1YfMP4o9h5exJ5eB8QnNz7tm8vRWXYxvyeeYYekCqj",
  "key29": "H59aPNJM9NiLSVSCQkBt4beLkm9Qr227CSWzudGvW23TxCV3XKh1GY2DzZafMkN1SDk4avGD6wq6te5jC946iAR",
  "key30": "4tgMxFjkmxWENdGdzhmGaxMVaVUiWHteAFK6ckfrdKeoHzvRbN1UY1QTQ3hMJ19VDWcQD2uxhoHTUU3TodXP6kuF",
  "key31": "3xY48fif5BPeY7ks8Bh9ezYrEPTj9FQhAz29CZpga6SF2Y2nzWNB34fCWj6MTxmLciRJic18cU3ZKYdaL2T549Pd",
  "key32": "3NmRQTveRRWjfGaonDZMazhd8zYisAXAhQm8bwCPK573YDkSyHPa5RMLFrYXcWyXhUR9YJVDc6y6bBCuJk77a8XH",
  "key33": "4uAbV9a465nFb4L6qgxWXokBnyS9MuTht2RBZcnuiN3eF8nRJfGwYfHNFzqVATq7myvNEmJnjJAReuRDpEkkpXNM",
  "key34": "7LcRH5zhka2gUpK9AW3iC4Jhu8idrbQbBLhj4yXBVRSroqL3MrKFw82Ei6zqyYeoMVFLWTwnFyAK5BqPk5zUsiU",
  "key35": "51ryeBrhVVt9JXQgNKyK9KZu1KE7wk28rW65MJ3HmUzapfnVy5XHwVoecmHRPC91qgZmpuSdSVLK4MBVjgCoEUpw"
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
