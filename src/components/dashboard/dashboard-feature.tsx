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
    "279Huz45ngsrLA4hsogy2TN3kiB1vqwA8YCjkuph5AvkoFBHwyPePSr7vs62pwPKUoqSthVTpcucNfGLkHVeRAuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sFoc16LGJ5PMri6vxV811iXSsn3YXCaCjiYaWp3WU5Nmx2AJ1nPRDDHRuPWWCKyuccFQvve9piKC2zAPKPfMgb3",
  "key1": "3NLr1TssUxNSExACv9K6CYVLZzYjAUcxTtA63jLPC6AJCeNmFpD1NuezAfJgPKzWdH28Cjij8VVm2LuxrbDPjH28",
  "key2": "4kHAX1y2BJ7edsr5FCXVKA25Pjg7AF3yckHDWmWf43ciW9UXQWgrhh1Wqs7WaRHeeK9pnLtDNxLAovwB4ezPNdVQ",
  "key3": "4uS4g5m3im9yuNzsokZxtcuG7N7fpMdYCshhU1o4ecAWaEDKtvGuuZUu5DSHmmdwAYatDHzGJodwnEUXo1cZUT44",
  "key4": "4ysLXa75NCeonn5E5CTd7gqhcwdpZMvN3gXZSc45KueuKEJnQiheMTwoymhE8G9tDUxPtCMXqYvUTi9pzLrLBZg7",
  "key5": "4hyyxeVmeG6yAmjQs9vs858AC8x3DYsURhmxUwdjLCV4bk17vTw3C8hy37CPhHXa9gazg63iyiJ9wU7oE5BEHGz9",
  "key6": "5YrsAK1WsMhBnBNUvQcBgseKZZAzK4dU2gC1vrbX322HZrAKWbGHjTUrRNicwcS7Kutxo3K8ajtDVpMZF6MkdXeU",
  "key7": "3JLemMu8bRbDADujQY5XE8cbGB1UnxGmo8vubZtCG7PsJxrAZn1yjgNL3pMCBdkEQMNQDdnse1ZurfbfbVB6yWbC",
  "key8": "eKxov8Mws1gJe741Noe984xbmRkZb3dLKRVBcWaovz8Vxx2nSMKd5sSjkoyvHiw2DsYre9fPzSuSe15ZMN4ZT3c",
  "key9": "2hxbvw6MiWEHq9t4wCR5Q87y2gTMp9BzuFfLW1s7tcUuK4sU5j3D7ZGByoi1kdrp1zztYMZHJzQVTvs5Q4HqDejo",
  "key10": "3QjpxzmLXWATndnCrmY4sxwC9vB4BWaH2L2mhCuHjFEdkYiN3fxn7XivNKCygA85W1qJnEJ17niD2CXYHfUhYzpq",
  "key11": "42zC2aatGXo84vGeEW7rEgnSzzFxLdfjD4GKAGNh9HdFo9WMe7HnHSiUU6hP8ewiNxmZ7AVwKmiQ7mqVNCXiPNw9",
  "key12": "3UveC7s2p4mUoqmac8rZwQCJGsYYAzLeeTkwGDWt8VECXSesEPZDCJw6Dt7ezLYX4avb3Cx8MCKKv5HPJuKuQWhY",
  "key13": "4S7KuWxGrHU1qmiYKYvrARewvr8mw8VnXUuXGSpkU7GqXiShkXBomcJr98weTeDr7TJ9bu7cPZnwjBb3roAVKKEt",
  "key14": "24ZG7btHbQk2N1cS5Fv6DS7PRX9gmJ7txLMfJz9FaXcvfBEYKKpuTjZYoSZSoshJcs9ZmqQLqwms14jteWzkob4g",
  "key15": "2VRGoTT9Eis7QzCv9gAWsn2sUzgSFFGRJXfGFwJwxqEyspS1yBCB8WY46oGwRpJhaLzWSXLsJtMAXxNAsUFBW6og",
  "key16": "5ozanUyyEZs5wQjFtxc2dchf4LePseWoUNbkQXZUzXwJb6t2P2ycfw7ft3vhzKZa7a7C4sqW9QVVHVzeyey9wTJM",
  "key17": "LrcRyyAQik6r8qzg7kXJn2VPFpERqvfjoQDwGKeSAkEF67HRZtpPq6JZfkAG48SKYy34Ky1RxoGJ8vyTMWFiWt7",
  "key18": "4JqX9KpttvbSBuBLgGpebWn1BkrhND6qfxnMEXMContHRypyXs1DxcL4CFXbpCd7b26c6zzvi7VW5Danp1DXQ3LV",
  "key19": "2oTD7RrejUaART7WRuDm3Tk9LugY1bU4HKechrWZUeqFVTmHiW8fyxBHAssyFT567J92i6rDopPZDXsQEqyGPLbc",
  "key20": "2sUHqhau6pyZaJmVnxfve3poV1J4VT9zXbEuaWKbhpaeHSMqxCC2WsatYtXy5Ryv53kndWon3i74BGcybYqiTCc9",
  "key21": "X4opqXBH1Wpm4hnYrtxJ1ctDVpSsXJYsD2mHRpYkcmPHWKi6FN2mfzGhQzANK3gxRyB1Q4AsphmCkVDg5iTbYgM",
  "key22": "4jehDsph6t6aEUe39MHgApTKyyiGECqyREVeo6ZBxihfMronfFZPp82BkVENnSWFmZmw8rsQ6gu3CNLKL2mo9Pq4",
  "key23": "5TPD7aM1G4SAme7VVuVZUBniTFrjFsErMYkaD6fJmmYJ6PpJv2WRCUdFHyVuZNec7a1vV8oA5ye7Tm473inerxjT",
  "key24": "FZT97CsKEVqVs2yZDCmQ99gR114ySjdqWwRh8zFHZw1pwkeVhj4Qgh49pN62ksBJZokTz8tqQoUVzya6uTpBHkV",
  "key25": "KGeRjkRyvjrbSAMDdTD8qChc6SyLcAh9mCY5qQEYNbF1QvaWRnEnkXVB2mE6mFoWMVJ1KCtxmJ2qLwJ9rpy49eD",
  "key26": "3J4TuVyRzXfQMAK1v6YPpgMLzpN25x4hHY4smkg2iBipsMLGT6a6oZKcWVEgokUVfgcNq6UE2HS81Lc5TAdfeAST"
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
