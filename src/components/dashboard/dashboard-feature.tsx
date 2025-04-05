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
    "5Pnz7KjoRiwKTPYWRjY8oH7anMBqLn7A13MJPerjvDcbM5rxRJtGdHqYz3J1EkNqKCZt5ttmj7o2ifAPS13DSrBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lu7tn8GrAEPk15QhZub2Z772vUXEfbpZaPiSyG4oK6jWyi6MnQbEMEtbPUpaMvYSAZngkw55vX3mGUCx3yZRq9e",
  "key1": "6cm319XcYNPsBycuv6GwdwiHxtFmhAy7N7sib56vUSFR9GbwnzPP3t5VVhdxdHgRHZhJpzxnDysfcdw2V2mzMrf",
  "key2": "3oDJYuuCyQirEWUe2p5vd4DHJ49uC3EjdyDxuCU22e4YoBPxsfAHaHcGRmNUWaakZKyq5AwsfvmhxHsF5FGzdE6y",
  "key3": "3iFuEBsqHZstns2cD3jRDTG5scinYnJr4QYi1AB59PUe9LeYDZfrz5fWoYx35btRTTacW8m26RkkPNAnZEqigZ2Q",
  "key4": "4mQaoXUuuGBMNuBedkZponwoYjzQo4Tgpon5Nbk4iuwwF9stdkqt72NYCGfDEgciD9K2EPGhvuUccbVR64PXugQJ",
  "key5": "5eDADN3dsXumHJPZ3QD41265gXGwXN3cA3H11KqXbX1FumpbGb4ACkF8e1swfurV7WDDTLG1R9fpyXiHuu43jKp1",
  "key6": "5PZWWp2yn7S4VRk9f9hBS8Sp5nEUb4WsNUu5uGCvy6vXZXGZuPvDWHhahEEngfoCSsfFg2zc5Apx9MoYsNTbT2gr",
  "key7": "3QnCMt6Am7BpbatqdFRcUXkeQ7s99eBENrmmMDPjgn9ifCk3wRVaayCChoK6g3D9RafdhD1YnGYsS5rm886vKY8F",
  "key8": "2NFQJVP5Mhch2JJ9GPXEoyELQQ3rQ1mTSTU5UketkV6KdPDiaxLgNAj7jX5ipS2AfFgpqpSPNaCes9R9nTY8i5yx",
  "key9": "7cHWuZc2pAWxq7oVpKxBctb35RNesZBv47MxCDQM9makKVs5NQPcQW8nNccamqgm2N3PEk3f4SRR976pjayBsV9",
  "key10": "4uhgP9tjt3xNzZ7k3hsFKRp1VL17DbbtHVvkcbTCra9Ri2UN18vKUecN9T5hUBTLwhzSQSFDXtBGpnGKC1DXMMQK",
  "key11": "YJ5uCTXSqdeFLX3UhLy7V2ZLjVXr8yTMw9Gm2wJDWNnQxWVSkg5vktLJmnE66k3WmtmdVGfZeaG91SLQVv4gD5d",
  "key12": "5C1dpr1URnDT6fLo3xKzKop2e2Bh2uMYHjzyqhH8pXMuxfKz5hE2UHU21UK7dcaZDZqEJXMnmjJCJ7ikkCF3dQb9",
  "key13": "2B64cdKSnFAvUmoUDfZqh5pzLa3PmMzPWfYkJKXSprsHK3QQw8BF2GSkeUyT58CA2WwRpPGmtYYpUxXJmmzZXk5R",
  "key14": "55K6esmuFadAhYxb8XAfo7HQE5mcXg8iorcVaoTowcVczrvLZHhBdvUUk6s5N8KKWvnebkpEJhWD6DhafRTbU22i",
  "key15": "5qkCUkgchVsx8eHHwNk37EmhTHrJFFNhH1qsfKGrUaoxXwx497JTWb8BNUaFpK8HwGZYUxpu9FkreoK3ABsWro7b",
  "key16": "2tsY8aLpmDvG1jh4SUV8LyFs9kVfesTYPD2KnQczgHZ1Ed9cTQcAmduZCrBtBPrQiNvtS9zXHcyNZfGGJ79hitD8",
  "key17": "3fpCVBjhoyexStsNE5CacGPWX22Xtg2g8GcPpqDce1JcW5NRFBDXnaND7YGCFV6YVLP8qoF8rT5Ucnms6HLQZspF",
  "key18": "4mmQfnf6Y8LykH5aqjzRfU2SD7NthMzBsK7XR5eXzYaP8q3QjSWhTJkudEEURtaL8PThuoghRBVwgPMDnzU11wkm",
  "key19": "8fprnpsTNDQ6EuR4JwA3krtedbzM6vxfbtNRX8rAAk3PyTNm3GQFvrsTn1JW5vs495nzFART4iXs7bYhr6fEA3J",
  "key20": "2Sbe1ts4Qg3b9pSr1FzqU9DyQB89da2jXAGsYrz3ia6hNL8Khxd2QmxeELkD4pcRgts97nMCFDmL9zbSMB4dgBDe",
  "key21": "5GxMgxxFEPDy711PpaUoSeTkbaUPMw2b1PXSuUGhpEZJtngGoK5hvzeagfp1sPT8QGLzw5qVmNTZRDUGBEx4ZEge",
  "key22": "4JX5ay7fSLRcBHxB3LLVxuaHkPEuJLsBaZxAU6YijnxCt5RWfGXVvfELLqYohbu15vUJoZkNagrEM23v72pWLQfH",
  "key23": "54LZPS7P4ab4AGgFzutWFbCJbHJBdhiNTYPwF95Di3xfZHZszAo2fsZcNSN6Wnicgk7u3MsQbm35MuJVRVGQKY9",
  "key24": "3rLzAVfj2rTyoaJfNBZBFhqFDDhj2W6vv5wzPGYwQYd6hNCGX9ZzxPVMxxDavRQU4aQsgFpYsB8royWW6xghC24J",
  "key25": "kLm4jf2HF3YE3VQKpz6CDZZqsmkew8Nj843ajq9G4cAJrdEQtzNwCgaaWaCBb6paTB7FodevtPcowPXvMK6FMPn",
  "key26": "3xdRu5DRYLaRWVCej7pZqXMvbNcx96keKKVesP8o9hRfn6MhUL1XiaGWKnEPeVZahe4zd8kJJHYo1ibqZw7AzBsp"
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
