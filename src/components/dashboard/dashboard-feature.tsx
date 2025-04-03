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
    "5vZHXmJDGTcWkxha1J4p3msuZ8vbPZVKZYj9VUe1MWkpeUV2YdhdHgpgCX19fF5G7RwarDSD86XHAWnF6g2mSUAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PF8zpAwgoZzfgfA1ako7eZi83K11JZfhHBUCoBMpeijEubDz4fNvZyftCMccNFbJUDJLLgk6iA6sppgM2opQtaP",
  "key1": "2XDQzvAirENGwoNs5f3NNE1SUxTRoRNPmqiQKMRbXZtYVviu9gpvVYPps3tdAqSGHzZp26iswys1WGtrZUoGKvQj",
  "key2": "57cuv923EXgJTV9PGprEKh4bKgYnBLsJkZThyL6uKR2B31hjPxAyDNiU992QcyVpWZYWirYrETqzosCjgjv5qgR8",
  "key3": "4KztEJndwFDdZx6bxmZcgCeS5CB5jAg5zeSWqiyiqpnAwaVB3F3mBYzTT8QG9NDJ1yFpAkSrKGm4T4ayJJaTPPzN",
  "key4": "3bzvi8eF9rwomJiLm2GosiA2A1jshhjC8iMfUxQq4RZTg3rXvbG5RtyMoLm6cNCYYpBEX9XHbpnBd83PdB3or4xT",
  "key5": "4J6DVzzvvzMvwA41PLgkHhtwpvsF5jcZ5EZjtdYqdsWULF42Poi6tswhku7WMxoXRApJo4dTAzJd3y2r4kS19vjV",
  "key6": "3F61LwTaG8h2CHjBV6vYhjhAmfM55QabtT1DBBATBGwsYH9dpbtE9hAx2SfpDQGjE7e8qqCfvbxF8qbo4pSc3i9B",
  "key7": "24jbYyiFKwBbDRhcHYPYhYywjCFFkJoew6vUyMTMAi4BrGx7mea2jCGgPbAMPuz97j5sM8bsNxaAwCJ1Qtvr7Dkx",
  "key8": "4Abw5Y25K95hTw4vXYx5oLt7uSketfMUUD8TjKkPCNyPXDyBZJJ95EYif1sPdVXT97zdTRyXkXDKgdVmTNiEf9tD",
  "key9": "25TPK74WJDLn2mDkcYkrCf3SHzNxYWPTML2aHZvWHyghgXX4tXwZk1dQRKuAJQM1G5UsnwBpH7DzqAYJvHv34PtG",
  "key10": "3oqyKVaKM3DGAKiJj2wCW6W61ttiMcEJ3v6CHYg82uvZtq1vuPF9cW5cQaSCzw81ARyfthTCqMQsa6XpgUk1X1KC",
  "key11": "42EFGLzifusmsXvJQDpUkRqNvnMQYkLnYoNZP8kUVdu47DdNnGfBFSZDZgfFKvJbLLabYx6ybeSg6Fwg9iQqX4qU",
  "key12": "5yqDzT9FWV72kMqZzGj3pggaNxqfFPVqW3kzFprhDDt3LNj7ipkWzokVCndoczyc1C24g5MPWioVf3Uj8eCDtUUP",
  "key13": "3oPzJfvE3EVSnCTDuz5puyoEFrj22kHURmR2evf9G3pbDykhd7LfPxkf5PZ4wHCyj8g4DDqhZCBL6kJpGP5u7Hzx",
  "key14": "2zy4AojVzi2dbwSXtMoRFXhsJxZj1eT4mH5XwvQm6WBzam9UsuZ3UfpMnEBKyp5YM73M4CU2Je4uocevvGZkG6mg",
  "key15": "2nwoMSiFQvPcmaa2ERT7NYhEegq1QBXvVcz1bR4T9zp5JQMwFyMcycXmZkFv6Gn71azdbfqotJ9QfB1tJBEaKPVf",
  "key16": "M13Brbr86dboWiyfD2n5KAqyABb3EH4GvSCirsFUq1csyaT96gczRxjAScsBeNUqr8rUwAHsyeJK1qDqwAi61uN",
  "key17": "9rp1DRjJr9QBdqyZ7wmZqZ9Y999VvHYXrgHBGojHoXWYdk47wJwbWCyGELR5BvGaM3Z9Kgr6XJjTYN2qaDWgf2W",
  "key18": "4w3F9247C8D1Tq728pAoDHrd5Zi5PZjZqiwTvFtzntij1qR7TsZvY9taWfEYVyqaGUZ1t8iUYtkJ7NdHHHBBHCc3",
  "key19": "BW5knt9dWCtXQ5HWZQ9nsbNpAw5LQYsDpiSsVSKhPEcpndPrrikmt4p44Ww7rYTeCQdDxKumNvMvgPv33AYxusU",
  "key20": "3yLQhjZyP83cz2dTBYsf2mBFzeShx427G1dF2i19LMrpkErdYYqqUaUUauU8rCDod72Cj1VYSRnWXMMnxq9mqrLz",
  "key21": "5XZxfLMx8Jz6hcsNXwed6iiHVLm7AbkJR6DBtzBERLkKHirjyuYPLjKUwsFFsJTFijhnyF9wF9o2tcNqtYLsCrxF",
  "key22": "ZYgGL55GgRZFGVp3D8oj79hneGzBZRLo2bMRKWWPrH8AFUuiEpvTxrWKXPE5GG9SCEPV91nq4hFje8aPNZA6D1F",
  "key23": "3AJU8WDJqNuD2awmyuvF6PbpuCEzBed7LYrwAHwffqDNxhbaiZGXp4Xxf2WRDYUCtN7ofCGWQKraG57RiSG6AaDB",
  "key24": "666nCPBK1ZV7hAxZQc4dCq6A2gnHyJvM5uCxyUa4Htu9Hkkqm6RYoU1jRz15goFcw9drEpf5JUo8vtm4NhSbc8oY",
  "key25": "SRYDSjJHV9MvseYFtNBSMg4w8Ny9CKG3hjsPYv54cuMmfYjkcnLy2gXz7GyWjYMz6dN6nZU2cXvF1kW9ADSDZXW",
  "key26": "55HFoha2AEPErv1Te2DHPXnxJhjzox5UQ9xhdyVjKSAx4a4jpSZwoRquR7X2buKfLMtzni7ZK214ahQtKBKqvsyW",
  "key27": "2bWmQTXT5yvfjndvV6VcLo9SW3mZbg7LiKm9c2fkr7TmdwB9Z4WDoaqLmpwohMhhqxquHzXXNxg7iqaAURMNadAy",
  "key28": "47CVjkrUiXtLw182yZ7FkW4VquyvBA8DHAdyYNzB91wRoMYXtYx2R3p26Ta5RbMPxLoJtkSZ5qPcJWRQppc5Vuqu"
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
