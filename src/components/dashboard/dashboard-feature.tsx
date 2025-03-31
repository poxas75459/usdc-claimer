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
    "4w3gnVoBa9WdmAihaFYw1qv532NKggwupaa9w967ri7fFuB4cToThTYa6CUuz8zE3xYuF2dphEc89qUQwxDBWMnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3cZqFYW6ALoCHfWoB28r3gyvnufGej9WpLWjQGRmXBkEFrdN92btbv1kTeKcLs6GtAafMPanpSVVjfozsrPDhN",
  "key1": "3Yts3gV7jgbaoy77WkVfx8tsHscB34kPK2ixjmq627RiwQmZBtv1fq71c2Y3xhGPpioWtNEm89tU2XsqLkmNExRz",
  "key2": "2kfWnXe4J7FtiPB9Bw4VgGdkqE11R5693Zv3DyESHdfNAR7MU2TdgAzG3DqbiEShAfFrg4bKX67EWkUMYsbWetXS",
  "key3": "3RQf8YQgGYNdyrUX7XZdXdCigUXbFAhkSGTc9HDky3QWihDhSs3gRTjPYumYh6aBAEgxLMGP5KA7izjk3HWn1rjg",
  "key4": "4XbmTpA7U8YX8eqK39AwAQeM3gCh1c75pRAGgJgWVbSGAWiotrqQ9SwLn7ycWs7c5HkN8u16mYqJVbF2ZkkFmaPv",
  "key5": "2FoYNUKRPGPzpFVTQXjV834CD9kkcFrwU5iAp3buQUFc3dnB6vrrw6NAyerMdyKnbgTGfo5LKMpRfQqiq8fd5hyY",
  "key6": "nVUyZHtYbPK5TjTjJtSvojdAHnaBghuWYAJyd5uu5J1vfsV4ZHoJtfo9Pjgsx6cbCw6s6rxghxMRCNFWQWkHQZg",
  "key7": "5AS3sm42vU8UMELPe19W9gbjwAx9ctGDPvVhoGzTuyFkSKF14mGMZyZsKSVqRGCPGWztkxTHfN43Z2FRW45iWAaL",
  "key8": "2c6DX3nHkvyV6vgnyaXhM1VW7M1GGNNUKjuQXn3W5epdHm3HesmK8uCivEmVghUaWagSdVvEEHHbMTSFZiCVMQpB",
  "key9": "3ds18zuzjrWw6V4bxGPksDSqg8AVkXzTVaRav2xbkjpuNvmUCgvJYfHibqXipkVxMCtSXSDQNKW9p1L8XaAQoHau",
  "key10": "5BV37WSu8t9HaD58y6b9N1rYtj6WFDQ9Ge9Pe2m3bz3dx525SrRPhRgHP8B4a9Fj5LPr97tALjQsMSYdwg8D6e84",
  "key11": "54eD8PZAMB17hxd8eorzn3YvPt9BBxwfjPcJdgqunhQbETULeoYndu6xe6GJmeymaBAa1C7QJDkNR2uKECpvHkPj",
  "key12": "2NFrXYc2u9mkCbB5Qkr7r1s3Vvjc116mr9Sy1qp63VFinvsJPBcxVNH926bFtLktfxTbQ3RZiQG5zEd1sS9mYfmK",
  "key13": "2GmzQisSj8neXSHRnALjBhL3GWbZLfG7vQuTAxdUDqAxhFyCReAQS4pCFbnYTvm7KxtxBSC4ehSL4xoYBvUWerSa",
  "key14": "4UE46AWJYQqu49jaBwgJVLhdLadkCVjQDjVxCDkgw7Z6DsSv5LhyndALoAHFoX6anUwwCdUKBsGXQ5PkrxbAawh4",
  "key15": "2BB6Hxn9r5nWAt7gbnpwULHBW5BztgYr6qoD4CApCJif3DdsR9BA58mxNiCFPNwKWkd9T1vJ3JYtKhH2AFQ1mVqh",
  "key16": "4nCzn8Tnq8QwCkZCMqnuW4Rj8SyBHwHzgt2JhqNXhtvxadpMafNjtxLCH7j1QFmZaBNyXeeaj3XSvNsqUUchEZae",
  "key17": "3YV5YmUkwBbKaJYwUHp6SxuTa7RvXnBd7gbgcLdwBUu2DvinCiEmHADVBg5EoNjetp3ADFwGfJefB2pWwc1rym8H",
  "key18": "4BscvsUrZyB9urqdctBFxh1hRrxpYgKVUsGxVeRLTLCMQiVNcpvrT98UdWXtFQSUjgoFD1n83sCg8TWFvo7U563z",
  "key19": "4gv3FPQxjcgXY9sgF9QhS98LxK9xmA4gKvRkYX1XsACrDLaB2LYioT5S1qXCb9jypFvn5rAHC64qwMm4tAWF8YnX",
  "key20": "6131fpMdiJRn2FPKWXDkPVu9hRj3t9VqWEHDTyN3XZHKCmv7sv1jQfUu4w479fuNCEsA4CzyWMDpkrQjubE6uTew",
  "key21": "39qFc4pdQfzUDz2xtR7igJCCWtEnBLfJhCMqiksPkuqMpQ3WDX8tBj85sB3vsE7ph8uVFfu7wdmb1uMErTSk96Nf",
  "key22": "62yh49XQwbYQxwM3pLU7rvF34nvtNZyqdgbqCqQw9KV9CKFkG51dufQ8BuytgN1Bg73y9EBFGznqiJPLhkD3WG1B",
  "key23": "PRtkz9YVV1wNvszmVrWx4qHkr483bCiY9rLkqHG4wvV6X9j1AsEHyNssnxvsNYV6i9cooAMTRZ2m1hay56Z5apR",
  "key24": "3JUA7XdpU3DBwyy8uWFcMH6vqPjJUqNjCFrcjscGathEMU5KkRBmEGTTDDtahxs6sNfWkjw3qto87baRMYjuYixN",
  "key25": "3hFWCTeX4r8dCsLAsuHxACovX22rS7BQMJkd7R7pFboqfosxYqbADxPctZrZZ1L1vuDRxnsxpjqScyccfuqQ5TRr",
  "key26": "thdr9EDRsAuGsNQTrFf3HQHfcULdfAQCX1hsNvocm3EHLZTukbJ2ty3qYRXdAA3z1u6LhZPoD6Hj452wHeZZKhx",
  "key27": "5Nb9DQvxpgc4QH9MnfNjGEhBGNg85G7DLqxLhXkohDkvD7gTyRAAAUSFxu89qbG2YiN4iehdPyCxxeuTZ1GeXhXr",
  "key28": "4m3AyZ9XhwD84Pzt6Tx9cYwt3P32kZhz1F2yekEkPSYdx5xaTiEvk5Bvssb7W3BvbKhL5HmxpceVpN1Tt7di6q5P",
  "key29": "2TJ1o7kTMuXierSDpQVNZDSojBPN11JWQSEvsVJe1VzdCfzBZNHPJx4gqMJvjmucPnCM5vjorWuybh7CXmNwRcWr",
  "key30": "2Vmpwyh3TRwgzYq3CSAB2EX1LQ19LPvPLvd2fHEMWLsLyrnSpnKgTq9NzNByTsb7MeDosBvc3utWVC6YXU4eKzoo"
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
