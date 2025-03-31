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
    "3eHLtU23my9apzmCN1XPXVP25PV8cfYjhK2ujNVWVFGYvrrJWEQTf24TuWHDw6XNeKQUZSYvBxvRjvdHxzV9zQPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWH6zQqL3ZTnwio9Lykf42W51NWFLwjFpvH4TCrUrF7MfnWjibvZ2kTSqFc4n1EnE5gcuhyS9CopfupMQqvVZjJ",
  "key1": "3UaPtAi483k5ypdFdyEQgqvZDPSt8ZyXC9LgrVczXzZC5D6ALwQ8AQ4HLYPqADMDvBUU8psCxK8E5mtftbMDR8sR",
  "key2": "5rcKdwE59AmK6eBRku1vQsFeQnx5m9qGY8JFfkeQVpFh5eaVVThhi7nLkMdg2dy6mQbfF8qKToi9Cvij5uKCqNUT",
  "key3": "3ZAe2UE951FdzTGNgw3LyUVRQrdR9CVn8q7Jy2h2spx3LZzqdLvW7s7nW8Gp62WFdD2zSdHv8Rwu38KWxSDxGwKW",
  "key4": "4MgW216hcYnedYGFPyTHbn1wCmLCHdKq5oRUcmKB2oodvVQSYfy5juq27FqPcHNmdbkSZoFjgMnzjsqemBG2Yuy3",
  "key5": "555TGhW8rCW3yxqGcsaoq1f6JgV9phFc57rCiwDgZD48gVQ8n51D4ri73a5qSwJedGiQ5CQTWTNt75Qx77xhDVrH",
  "key6": "5NWaw2c7WyzDbVJeNaMpauJZsEa1TxHMeUXGqhNSgZix1qeWKaKxcbU3B67w2daLbWua3Kenq8iVLzn53oYngiMG",
  "key7": "35acXJCVLJRk2v4a9Es8Xfa4ChktTmNUE3HmaWypD81eN5uMifm4WQhndcjAndnvUhq6GHUJyk9t7cC6cEvEYix6",
  "key8": "664wjX73P4bd7yRXeS3XySucr9BNNm1cVdeW4KnrXePZ1E2478PAxwsLfG7HfKzowSmRsHjDrCSHQ8cBh9opVdwG",
  "key9": "BTVTJGSiNfjBX4TGUXLwQwoC1b14CfVxP4xSnLyFzhzpJck6HLovwgzDtdTid5zkxsSBLiV8edxBape5gENfQPK",
  "key10": "59ZQMEs5WvWLQN8hMVzhGTErW1pvmicTbyvZJJ6rufeR5LLz9acoivysmJhsECmguVrFJFQ152Zs9f2KaasYFkrE",
  "key11": "24EYNGKNiwnNwwYMcCK6SYj5ViuRMPsUBwnCQmJKtHQ9UerSrQ9knUqZxF76qbHuYGBwFdrpXLDKcuN8duqMRqoa",
  "key12": "322nXudQryGuSeHT4EGigFFPCNYng6qb1zCgLBCqZ7um3w8audNcNr71oyfQteSyux7qSJrm8DxhGjeFqEHSkx1d",
  "key13": "4nfNPfZKLMrY2nz2xv3CVeVuQMVCx1PoaGsuSzgFf9ELKVnuYFXwqq7LVKct86bAqw17cpJX5sFiMMFBN9c8dXiU",
  "key14": "5WQPqArpWfuSpb1yxKBFgnjrK6acPDZVsRX9emnTZrkk3GHieJeHA6SaPRG8SSY4WrtdttGumc8FRPqvfx2sFWq6",
  "key15": "3grYoBrVneFv11unPpc6yVniMhshCrkqLM543ZqBobGUt3Ez2rdNF5gKfBtjtxzwEN8tq86o2Vy2LHP2HNLFSwU3",
  "key16": "5cPVdqZR6fUUCa7nkqn2fRgag8ccxiUciMisb8VXwUX5VCjFJWQGtcftXPF3zDwbwm4uAvPPQ45uX2HsEeWgkMSw",
  "key17": "2YZt1YQ1rkC4PrugjZBexHqReqrb2DMb3eH5zBekDbzTkFKn8DqBMKgBQipFgSKUdnvkUx8JwXAsXE9DXjNeYLMg",
  "key18": "4eKbdBo1BpwiinyK6uakhPQEwjdJg6KGroEgKSKUWdtMiD1maKQFYu4qA5cXHzUn7zU8nUGUpu2tXraDt1TVHNWb",
  "key19": "4gmhNo6rg1hYK2JTay4eBNizpU2pvCRoMH4XsbsmgkSp4LPFe9YmLvSykWiMcxkZdmVgfLgE7v7Psh4BLnNGm9Gq",
  "key20": "8tccZEGUQoxEzU9rUj4TS4Uc8UHJvi8p4zdtFksrX6YfymGuDo47zisbWZALkQ9CfrPnqJkys8W3MQBARrzikUe",
  "key21": "5ZLX8fwWNAWkhJ9krVHVj9x5bgNmnrdvDwsNvgxyzN7ysPQJ2sLxKANR8nPdLZzmWDS98A3DexahpYtekMmimU58",
  "key22": "2w95yJa9xPk3b91Bqvk6jf1Tyd6c4XQvw26xmXHFR9or6sCaoghuMxYqwsR71GoJkk872MfC6qdyiUqNdvHWZS87",
  "key23": "3zASGGkNu99SA1WYkDd74trYT2NQ8T85hixmEBGjrmrii74hL2PcT7yHw9rhUK5fjBGnuqLq1a586sWT3hXYWEik",
  "key24": "2YMPqkj5rXCdPPt4npxc41ZqdH29fpuMZP8ozZfp4jYQyeKhZVPL9CzaopDZzgrhsQhzCxtm8YjEWSiNE6mQiSnV",
  "key25": "41ifmetcd1P27ac71DYCcmhTX8BEu16nTXJtu9F654QStfvSBdgAbL994JgLzJpaeV1aBxrB95AvxuDJBTE2GZ5m",
  "key26": "3J1es9Z48W22rtxfSmHaZqu8RyeM3k5Sakh7ooVVwE1nT5MJ9Lz9K2U16NvFbuVghx2cTLEsBXXekZJXovAC9Vio",
  "key27": "456GTvE8EcgjTbzhNf89JztqtsRC5hMjPSfH3eNkzaugTRGu5GfVpBb4944GqbERq6Vb5G8aEh2WkAL4bfDfMAV8"
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
