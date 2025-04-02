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
    "3GN2WqppzKXTaRR2HnpXygaKeB5Veb4QCZZX4BzVrL5TfPda6RyDA2gaau2nbxRGE6hioSJQeG2ZGHDFvXs6WVfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aC2V4xabZsosmoms8kFzcezbh5eoz7eJxLDU1WA4d5LVgBRoHNp47uzPGhfnt9EBjbNJnmvad8MM7CmRLyivBnA",
  "key1": "57Cxv6oasG9oGh4MMiM1vsnPWrYwJiHV7LcYu5nqUZRLuU3FTtCqaEGaYQrv1CnwQMmx3dZwg4BLCQfPmQ566u94",
  "key2": "2nA1eWfyvL94kbpgVnSBdjVeymXcPvP1Zjq6pmQASEGBLe1i5hifincPX8TssXVYur4YTJtg89qFEMqGjrBcHFHk",
  "key3": "2kNHEXMum8uudNkVtqbhEnSSCmCb9GsQiWhWPvodRMot7287n15HGC7zLN7ZDag3NDbz337GS4RbeCGhk8k7maiQ",
  "key4": "4e7KAv8cGWAwpBrj7KB8VHsPGyfKtj2SqfJ6xv6vV1gPPG7fmt4rjeaS2H35FZZNa9EjtPkv59SPjiUrmYTAP6Bh",
  "key5": "5oxPkRfJ2RLu25o7Xw6Pk5UoJkuRbuYThnEN924mpZwg8hWwyxtiWTE2MStw9GotNmH7RcaTv6XHVRX1XvW3i1de",
  "key6": "2BTngQ1KALz6hMpMbfsVWsR829sHZ72vdooQEpDv7G59CFq5biXuYZ2jPKg56GY2psjeJFtoXbnEZ4TWjD6xn7Sh",
  "key7": "4qSbWXXJ5oHKRqaR7b7dn2NUnqjtS3VryUS8Rv3bD9gttU3MxMVNHHmpTLNH8Lu2uUpSRvTZ9uJ1Uh5JVQgztBUd",
  "key8": "36gBMgnVQbLWberh3pxWvysAtkZj25ohBGBsNwKYzGty8SyTbrBQcQHjCKwtemhiQJtXu4cAw7BDYNkAeC95NTmF",
  "key9": "3vQuVZzzcwEaD4kLU4gAFVw8TWJiSgSYDGH2BrZrzP1zmvqSVu7Q3JVLc5hPLs96ZP8dm5WFwzX5abbyEokXWSZ9",
  "key10": "4bzNbJWxfT5srMB2AF9W85F3MQFGaRZRPHQqLuaLxEiLkYrZKhEYXpKMu4QE2yXEYNaQDGNGCiT3ZrJjwVpetGwL",
  "key11": "5Py1J7gQhDqCTsQ8xjdTcsGTCCyPzxhjZs4UpwBxQxy7NE1VZsTB8jQJ4kutHt6BUXyNjQT7vmknekE1s8jzFn6",
  "key12": "2t8VLB62dSiN6LoJVL19shtFjgeqFnkE6tztXbAX9dC4mSBBpEj2YTLdzWDmwKtMfMFsmew4K622czBNaCykqTzg",
  "key13": "4gmoFKrD1sxudnLiFGd64z3SHSf2xVrTo6R86orAn7R3SDE73yByowenPFtGQYgzhi63MB4RUSM4jtcZMaTLySw8",
  "key14": "3poj3DaHE3b273MVAipmBk5iTtdV66yX3YTVchnYpUn6NwHu28fzdkW3mW1WVsh8iKFXC4dYHq8jCAUsjNAJb2jN",
  "key15": "jh6G9idnVSbXkPvZe7bd2PVJR5aSGBST5W4yEuxemrvdJqC4QvGWTacemtnzTzYmuamkZnbCDJXtY97Laf7d18N",
  "key16": "28TcMNPKt2QU3EiX3g8FNgJCTufq7c4KnErZ3XMk5TFCXYZDfbt23YwRNWTzu8NzYMQnf9gGXqwZk3vqGY36fAkB",
  "key17": "5jBrvCL2TxYMFj7fErnQtZ98umCH8jk3DGTtpMr4NffNY3KAWwe1YnPjCRQPgxx7R96f3Ja8qAH4eLezhkYHRjYR",
  "key18": "5k8cpagVvqGQ1fMJgZQV8fPXRmustewAvvWrSScVxCAfZtESzPoxX8BRcpJDA3jWxa7NiVvq3duKHkzAEL4Fi7ng",
  "key19": "2Bzg1QFP4fNbx2BFpciSybDUS4K1e65jNz4EhnVu3UzoB4DKqGwJX2xHWhyA7riq4fgMKKnciaNfCXtuzcC2qYin",
  "key20": "3U9zXXAJTAFLFLJyXJB1BwhuXGXocEDmkHhvGynN4hopB2x9rQRaGa4oXyp9mr3f9rtgP7gbiMT7NpA2sDiYG1Au",
  "key21": "36kApJdW17cDWm7bRKhgHf9M2j5NANJb45qB1NQDA5Ndyqn2ZoRWVW6umrkTnHRQuqnzRMkSZXAiSvrP25C5RMJD",
  "key22": "4yLoYTLqvQRGANrsb7LkE5zKCtnCKcn91QJLoZDZyDSGpRgwNEGPJ9MQzWViqjf9E4rajGUWzzjcEjidrBUtbvti",
  "key23": "4kPiwvqWFW8nByDpdToegd2h34k3aAn1MeKj7F9LGGVd3mBJNv7G1P8CqABAwFoYS9bNJWbUY7TiyKMWcCLQjtbd",
  "key24": "4r849zT4Ez5JJYT4VJQEm7gwvt9v871UMjPDxrybZu5uU8GedgQSNpYD8hRBF5BeRLDppNxHm3U1ooHZ4BhCN2UQ",
  "key25": "2xpioyK9F1mg1qDzsQcKoE56eRaZfj9PP3UCqRCQYsebzMgTC8m9XRdHLPCE7TBtkVK14tgsoxasY42pDSc8CYbZ",
  "key26": "2T9fz7DcFuCJ2mARwBaKT3zG8MaWEMANThDpP26XNRFXzaiLk45osmGNZPj42eTKjH3HY3WPCwRXoVKxr3KwAVo2",
  "key27": "4EvDJJVQ56bJfyuVyoXg23f4TTibRKiGuhePh5FjbeMJCgH6XpicPd7auRFkeJzs3A3CubdDJMYkDpqbnBvENSR6",
  "key28": "5v1VSECQ3fGcY6GTTRZ9GadPxeKgqnxiEXMcoHTJyzvDKHNWHLdNqh8BbPVWGsHyrPSFLFhCG9Y8mjiX7yeDxXCy",
  "key29": "2NpvQhf7L579DdzAW68VY7xtwRDBN6QWVHo4UysT7Y1NLRrLv1xU2B4tkjUQep9c3BxczXRxkZpSrYEB31ecsdxV"
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
