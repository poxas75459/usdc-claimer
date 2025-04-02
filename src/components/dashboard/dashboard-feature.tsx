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
    "3bxvL8gB1YrvSr87HzqqFu2cPH8vfBYxtx265Gdo5LzWN4oQNBd8cAuR34Zfhzxbp41FE51S9LjvgVxvQrbiHKPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "btQKJ94TcjYEvNsUojq4MAR5627hiq5WhSL76bh39L7LTxkuVTqMpePfwCNrdEGypZLPJm37WwhFHzyzKJhA2bu",
  "key1": "4M9Vic7x3XZE14C9Dg8Y5n4Za6FA934AouDMpxiWFnWCyKjsbDRs6kZt9FNrqMLQd6xCsnzozdaKPiHVCLyqtPW",
  "key2": "5FSZxHa4jaHsPYzBMsA9Bp6ySQNjZ9NzyCCwyGdA133ZXj9XSVAXksSyZXBRh6HhPVFepS22CH6CqsEnLJvCabX8",
  "key3": "2wCiVp2kCbQcViKMsCDFDYZvBSWmrrcsFjW9e6xWXNv8NArPeyZxNazaFYDbRH8SegEBL83N1hFbXquseLF3MYzQ",
  "key4": "3T3kuWxnybE7dcLqwiNSHQaLBMhe8wDaEUw4Jk4wcpeQ73wima9VQPYBxKbLKvCwChrifUkehtP3GqmVSZPWxwcs",
  "key5": "cSiyzvXGMPiteFoY8vaZQMQAB8p9jbvd3JJWRbBjNVpfdVy4zf5xQBv8jTsWU1DN5pYv3xHR1P81zbXNprBv9UL",
  "key6": "2gkCPMXXs79x8rcksPpKvWWoJgUGLKvNdCezvBPqpJuoc4baLHxwLCorfqQLHbGho9AixyxkikSU26v8eAjKy3vF",
  "key7": "28Na1KQUYwUNRd19JmYNv5xTzarxYnyotb2bxo4vAEvM2LDngRDdvccftssc8nk88zBKKLbYLZueNssSXqja7P5x",
  "key8": "37KJBeAG4Y7mtjYWuPWbgsCp1D5Euyk4GgVfAZfaCozKuCuZszouSKj7rvR8JVAVQet5VoqiCX7d7ZwF5zMDvCgt",
  "key9": "5n3AB1VEc5oV8tgR6qimEKkWVHeMPUPbju526eUohpwdQmMdcmAPVKheq34GU8Ce6pJ8xo6RqBiUck77qEje6s6h",
  "key10": "LFyRmrr7Ya1jLuZjEJ5Lqa3SxN8gfUtabsUCPQnD1zNmAzDudgQ17V5juxmdTEHV9igTPX9Y7FAqdQVgwxHpSsM",
  "key11": "3vhZZdFKtQnCeLNBurL7Db4xWujJq92LZ1gm9ZZGCiJGFDfqSnqYEn5tQGRDYrd2rxdLtAVzAfwU6JeebhftGUCW",
  "key12": "2856Rh18iyHctizQysCbumbmK1JpcRWDymnycLrpbf7JSYxcBpEYBcaXguBEdgQ13u3uHbZeR53xc484f5QmKsaS",
  "key13": "5r1YBzuDTsGPPUeUPwvviMtThtMz67nms3GCg8nEwCStxgDGrCnJC7zns5bKYCQcTgUgiEVwXpiJsWQtiVbtifZb",
  "key14": "5S4Z2s4VFKXftxqWaKxjftPy5sYhf4tMZoFFP5g4qf3BhwvqPMZdYHhHQAu9AkGeyhhoKjYpRhLCU7p9ocLTS2FE",
  "key15": "ZGwjGaRYS1KvUiLp65RCVTMj2nUHRnANms93HpMEhKbE46pcs5HXkEe22tYRdpQMvNPkXpkHwBfGCoMTEkkBmAj",
  "key16": "2fJfvQ8N5CPdNmFyKSF5Z5HgJen2ep1v8Ce33JtdffJ7a6FJtutEZVASPdhEoXwkTEJeN2PPa5ttcEwuZaW7yDjQ",
  "key17": "3RfiA7CmsxqKbU3vNFKTLpqk4fZB7LdGzoM5Ak1UHJun17dzQxEUfAYFt8gVdGBeeGTpWyzZSKVNiwbGTCranQ81",
  "key18": "Qht3Gju8fQt4Ah8vALzXdW2QV8ncTUft2qmamwTueVdcKMs8Kw7RnAjWWt4DwUDcYnbxTd6QhFHXePegYfSY23p",
  "key19": "5JUPsydDX87TVztPCiZnUZt6NXTip6JkdihbAMbssMYgqN1dkXckhHBfjZ5D3cntaznPWj8f6wBDCWMQp6rvzt67",
  "key20": "2hNtqrUNVAjkpQPUXiM2uoPgDhLbqFFHEb6Yr7Twn5rgnM2obwCVXKxoj9SDPLyxBja3gUmJ77ZdMqk6oU6apoft",
  "key21": "3Xj4N6Hstb11S1wU9iRFkf2mSHjik7zjh4rddVkrBN8V9HVDJG3Q4G8PtGTCiht3sUyUJnWGXbQPkuvc1qD3rozy",
  "key22": "3qmA2eTzX1njV23PLanPwLT79rthvScBeWHxaBSieurNvd3HJ1ekQTkGm9iwQESf6htE3ueSPbLCCyK8F2DPNKDg",
  "key23": "2QbZyuXinVsdTkNavv51zjwf4xbYXMQNhcg1XtNmvCPg1fLboqgU9DgpErE6BcaoUBwFbGa8783hS5mdHBArSaTG",
  "key24": "5Xzv4n7yEEwUzQUSYQUvRNrRx2K662YC39gGGVQDXmHYmvFDP4XobW5yfNtKBuNUoeEVmnmZ7Ax4NNKE6iC7QDdM",
  "key25": "4CSF1kiefkDmVMarWwZJHiLma2RCaLroV9V6XBD67YJTeST8ApHBTEJnLJWUsacijN9Bt2KxYYujmebpYyrRuako",
  "key26": "44WLcxJvSKhQpXB2Afy53b6H3cQmQnpKfPRbHVaFWG7Xeeq5voAoTAuC23KvWMnDE7aoL9L6dh2n4bTuCE2wZzke",
  "key27": "2jX1RgNX2grxRJsbx1A8SXq6PxReySnc8x4YJyGXFgsXtuxayfeJtRVRYLHhN3RqE44ej4t7D8JxXUvR9mX9gdCv",
  "key28": "XydUsGwWircGCwm9zYWZGXxG9BWqxvRUFNdZumkoL5T1ptHECT3bekvGpa8MYBGuhW9GLegnmJbUai28U1Vtt36"
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
