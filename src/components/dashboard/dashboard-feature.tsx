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
    "42Qhoe5T2zY1vQrpHXHXKNjTaJCe1SWviro9iMSzvGQHZ2hKg6ie7Dnpr12WRjvaQhvWXa6EajTVrRTakwskA7q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dygudjo5bdEVaBqMyBQHzdTQZ7XubNgRLzVhWpR7yQ2BtYJB7keTBeTsD2k8Va3bosdTEcuxesJMANEvSfLFfDP",
  "key1": "eiKSAQrxqioCGhcc2L4aC2MFxuS1NevCA4H7rEUipmiA9ff4DnHTcT3B7BZWJjvZgJAawJ8Zs7E8ssaTZBuSu6c",
  "key2": "4Dc7rnwAaeP3Ds8u8t1ncCfV5jJQy1zcKNvDFMHjwdrBWboS6uNoZ5UPN6bJM8ttXFfmy2vRzLTFnDZqRqypSRzk",
  "key3": "5ZWfiLbgw4YQtbYF6fYt4GwzbAYxfAcAuT2DXKyXTPe2Ut5vuHx3n48r1Vcv9V1JcnwX1QLzhj3epkGKbWn9quNW",
  "key4": "5g9CRaS152CgGACQFuhAnnZHSM2x9nNEFggQykorp6q7UAGnmF6B5TSapz6S7tDN2HwukiSsfFUMUY8kbWprFQPN",
  "key5": "4TnyMZ1iEHXnFKmf3hPvLHbXx5xfxdncNd3chHdHESeDxfxPvP1pxEZgBQ9vti6ZazsNshtaamEiCMSsQPgbt3Y1",
  "key6": "3p74PvJLjYxaCvhJbnCzQiWS9Vy4NpZEqxgCjJwqNQsFqM7eYMpxmMt6vEHA1KjzP2Cgmyxc8BHQsPnfgFh4bj1F",
  "key7": "56yUZPXiMfg2ZttD7Z5eNbmpSM2pts3TFA7K4rHPFR2PX72iGp66YzNodrNXEWtW6rWjxxHwajp1U5HZytgd1Pm4",
  "key8": "4NYr8VMfv5J4h5okW9vYmWjCqhuzNXd4ZTAfgpMihELoJeSypPfKi6quWbZPuuqMX82sCg49c7it4qyxzsKKFMuc",
  "key9": "BjPEUSVkf3GNAjRN7c6oajPmuy4Z5yurYszZUv44M8SksiKbQKHoUrsBFiKh1ND9N2SsWbd9ZdzaHBYjUZdtim5",
  "key10": "3bK4CqCCgWWfgoCpQximnp3nWxX6nkKMH34qzX2oFdwBXn69cZto7ojnyBaynHHNuWZNBvtv1ikkHQ5G3NB88eCp",
  "key11": "4koBsS6SoDw8xgWXBBCD3EQQY6RvDSTASXjhFDCVrBQ2QkSzNtn3rQAYHLvAYgy4cj72P7GR7bzfP8WPRbtAampy",
  "key12": "3FPxnXkJecMbdLjvNCNuGDCgbjLRXbo5LYNpF8TGt7ZasjqUagLUffc9AAcUVxFZUpbyGanvTc1xyLjBCUXogzQf",
  "key13": "3xhr7M1Km26o2USVmgfernYFTCC2T2czEPYeGD6EnYV4F2N3evLnSqwTc4SGbmUVLXGjFH2njxPhqDJWyMgfc3Ke",
  "key14": "kdS6kFuiryLG1jYwGuGopufWHF3k69HMbBBhCs7hde8HsnynpeaaExsRh4vY4ZoPm1x2gyVwCwFith8XxBnVKoq",
  "key15": "49gcdidh9K4uRZvgWJLxJ2BYmh8hYoMAqBJrA6toH81gRjy5eh7zUFR6vxr1w4XZ8s7QsJWZSV9UswS7XoCRcFmF",
  "key16": "2L3L4HEybTMPaKUbzKXopmZTCZpyLUW7pa34gqvHnBvXooZCxpTGoq3cMYEcPWayLQBqTAcRKtyHKf5e9NQb2ALg",
  "key17": "4qjPES28at6Qc6JJKxcZDNhKpW5CPPxdnGxhPSAgUmL5WVUkcQ4Cq6pDnLmunM3XkJxCbbwKUFH2stHQfGYp1cSR",
  "key18": "4WPrFbVFyXQbrVJYwgH8hu1XfCCrEwrKDmmcctsBZ12Zevb7PqPtvMyDfZTJRrSRKdd7hoJfAyM38KVfse42AHde",
  "key19": "4RyQDwzLyhnfY6v4zJNpw1V5sVZgCgVqAmkQUzbwxTpnWwwweJUqHy3FTeUTGzy1zjQY1UdAazLg2s9NVe2WGrrg",
  "key20": "2MbAp4rReH2CsQZNJaeDRs2oeMLAQjkC4hZbLnCLewMa3yvQVEJAyM8MPrgdd2BdAAb4AMV4wYCn3y7w6iTdG9vK",
  "key21": "4Authz7LxYjnqxXgN1hgYgpH4GM5SHwYXLZtFGsi6HHw6acE2XxEje7WoMNtd5UnJjfvQ5ngFtHCKnziPRjSKFq7",
  "key22": "sRuBSzDJMo5mmYk3K6v93LymahbZUwHS3QMVWY3cFLoLW8r3tGuGdA2yaEHUfNEBckPbGSqvLMTfduqJ9ar9ZVx",
  "key23": "4ZEn4XeCTmE57LguzYJe8zwiJrTXg5aTD5m6opSXveVHjnNzuDBqiJTevZKnX1vyfeg86rR6CvidXxVQzkowGgk6",
  "key24": "HvfnFs2Cu3N1L7n8HwsWHWWz57FnfqxPkGo1Dq7CcyVxc7B7sFhQmeXQe76VzVjuRw7B4Uxsyvczrp5rFWSR2AZ",
  "key25": "3SXmW5VA7QvTJyLefKRHEoWyMbofWXr56eigPvdSZ4MVEtZnTjBdeDM5zfLAuRWv6YBuuY81hnzEuCHbTc8a82E8",
  "key26": "4NfhBDWgLGHJqtv2uPnKkubzCVcSb5WVujQd6rruSbQGYBhz4scdaf37xDirxFHqPJ7cok6V1Yc8TbQkTnASpZPQ",
  "key27": "42uaJqnHeCy3rhoDhkAUqc9RQJQXq8E5w5UhT2KPC9VZAERb4ug4243t3RTtjwMwgXecqjXFeDwMDdXMm6ZhppY1"
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
