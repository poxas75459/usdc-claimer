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
    "EsmbDFNdfSj2GDTQqGdQPrPT3HSNefiszHZUR8BhKugnES1kg2p24s9Kx9ZhbwmvHRvVhd8XYsg1xmqQaA6K5iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWZrELMv3Jjt48KBz94SEWqGXKq4P79qt9WHWci4mPaXrHPGAEvK749MC8NndzVaKqsYwpWcUHwgb4F8vEF8VM2",
  "key1": "53FYgSJvmmJPCGpd5mfCDrbosNm1LDoSJ98afurj794iQFJAL34LE473XZiKvvwuPARLBFVJrWW5LbGVcfKFsDNE",
  "key2": "GGq2RqhVtzmKZ9pEQAiXmSDS1HtvqxboNvWqdwv13h3ce74oNnpkLR7KF9yGW6pxAaUvaUjsGbiVmoHW3Zohwqk",
  "key3": "5K7G7rXaCri6z3CxLLVuPpsCJvpVtDudi9S2dLPRRiVJhaVvsz73aqcxqpPD36z9XuKrM2tEcEUJRdRJYGQ5TzHb",
  "key4": "3MyWd7k6uhQaoVKEw2abdAA1npKjTtgxaS4T4mLNx1sN42WCU7cBA7VyjMGHQYJD3u9o66zAvJEVPzwRgj3tmeeT",
  "key5": "3xsfuYPH1eDBqBFMgKwTXs7Xo9Q5vJfdfhunjSWMpZVrFCESzifK17ZwEAemN91mhREWjW9jeVFKABnANFyzph3h",
  "key6": "2qrUu7aFZE9ugvGwYFzbaTDhsxEagsGto7DPDcp7prcSmkqe7kQ5o2qqBDqD6pNDjE6GLa6CYEP9qyFAQi1Ywe7N",
  "key7": "2sEiEqA1T1wvh1stMUGX5NdDWm3Qs8tdvooLA4U2xyr47WKYicMaPWF3jLitKTX4XaKCW6UqvWQ8pMziciMUYRqt",
  "key8": "2SuFCyT1doGza1jpdC1ofn1o1nAgfqQg9FdiFZDSqUbwQVmzUMDr5d2DMUYiKNm3iDv6rM468fvGg523WxRKWGK3",
  "key9": "NVzUEHkv2Zk1dDXEeCSZQujDTP5vfft3mH6LPywHirhVHsd8dhjxJTE81ty51Pps8277MzkrK7ppW5HE5kb9gyc",
  "key10": "4CuCY3fcv9AVwAPLH2TL6NCLaADLTq8CiWXPQ8FPk8LE6ZvEV8AJANDHguTMXLuCLL2FEMLdjTg6GxfbEPvhvynP",
  "key11": "sv77DCCWMMWvDBrKzxeJpSVrLMtdxykJz7fYkqjC1XXVqtYJZ6rETqh7j1JmVEfK8CtVbbH5nnnpQ8aeXeFXn8B",
  "key12": "LsQpg4RAC8HXKuafyHm9PptH6vsUBaMXitQcbXAZKuStQNr8rqufsr62k967sgMxNfgEuuWCQFSnycZCyRPzTP3",
  "key13": "3GxTdBCqQ73m3wEsRV94N79eT5r5wiRgWypdX27ELV6QdKtciV5KnHKBQCzMTsqvP1UC1Gp2RRaVjw9DJ3GwsPFx",
  "key14": "kQTu8mkVtd8kJz8LABpzQPKq2HVttx1H6ccTFH57PQbNzx6W4tyrABfu6sBCRDphJMMgBCw2k9QsjWdC9o6N9Tb",
  "key15": "3paTJY5TEVznAp88e8BKpksY3a6x4JdD1oQcsYKBa7tfVYLC1UR1AXJ5ufkkG9MEcyG2jENXyrhBhS22PRc168pq",
  "key16": "34DB4cVST2YSPzHc1ruptJmk2LNf9xdZ7X9xg6myQ2iAbwG8VbtWj1SANupKf1T5hDLkvKywRZHUhq2ibu5mEGrb",
  "key17": "4FEmZMHa9GVGTqfDpL4NYtU6aSEnVF33A7qDWLb7rKEruh4FG9hiB7GhEmdrC8nz3mYa7R2DhHbwmfeQivG5jSjR",
  "key18": "4cUxXumcVj5KKYtf6sG7EfBR2QmYNbk3zAmdrcDx4D8eNyoEXWB2FdNpm4ABWeeCkY7bK292ct3r1qRNw6gAz8PR",
  "key19": "kWm4W2sWkdL2GKeGTpSqFNm5NYueU3HdNMeXizeUM1GzAg3pqkpGKddCfB4NyFzbq9EK9eqDpia4h4RcmsxAPEt",
  "key20": "56knSyu79MHGjuZoBxmbMCen5byfW2FnoP2vRyKKayCdvCgLZSqw7Lf9NuJypgNvFMb31Vp1Swt9GUqgC1MGuh1P",
  "key21": "66wqy8H2hoExyL8b5AhSnagt5dKCnt2h6q7X9SeP8ZTGjNjVSyrfC7bCNTpP8oTY2Vx6rJERV9Mbq9XWJb3iKzEE",
  "key22": "RD99dwwpecTPRY6tVDVJkFXizQxtNNTPk6ABAQzXVYJD2VB2yJTcety46JTqvWgN1e5Vog6FxWEqZRDZ9DX6UT6",
  "key23": "3P94cjpyikKkdWnv5wD7iJCcq4zwUGWrc6HgdXCmPassqK432ZoxQJujeEtEtDqCEheQNzAwni1LQKj2X8BREWiw",
  "key24": "2zah1rjYxaSPxVDimnuRBP7c8KYnbbL8pjDjgxCWT1dwn1X3YUMY9uSE5qK4JMkzK2C7w1YuxUiMfQ47aJcQF76h",
  "key25": "2iirAeN9bHBPpPf9ThEt8vMND6437kpW7j311TZ1FX4C4xj2PieMppXs4fPPsTFfZwzPLFVTt68swDw4qgwMYap",
  "key26": "5RXnh39MB7wUfDsj4gdRSiUeoNNs2XCZHbsiD25ytwkCnnqhENvtPnMooZ8uM5GLKjdGbEVfWh3SeG8aH4dWJggX",
  "key27": "SvH9YSkdvYgXe7rHK9scenSGW4fN2HRqiTnaQk8hWd3dkRXCxKcziHEy2zSmtgRPLNmuu9AEMM7UVsTeLVMUoQJ",
  "key28": "3oS31mGZ8NSfa1vVj6A1kinHiPfCPGd5UB2E483sQqcLL1MmyMxw35iLzgVEgedhyhqEVKXctKaiE7rkFojBBoho",
  "key29": "2F7im7BtEefU5YcUqzwxFddaLS9LMcRnea3hQV17JR63PZ4wGjvFkk1Gjqu4TQXtHQUpNyZRwRNAD6u3aG3EHzLu",
  "key30": "4qJ2Pz467xTQvjinDvwt4Wa99yrb8KwcihznJwV8vUPe8gYNbQYtuKSvfDQiP7KWvjFaD4wkNYqgjzxCwmqC7j18"
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
