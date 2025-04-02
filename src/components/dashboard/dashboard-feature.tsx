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
    "AppsXkXu618yMKtNPLEyQcy3nHkcpbymez65Tt4RbtdckyN3V9Yjjg7pzXFAspLukqPHeDMGC3QwKxszBhymymo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FLeVtqSV5AVafjRMRBH2gzygNCS3KcZae4hiRswRRv2Ym5uaAnMTf8TumpTSaRaySb8ZKpm35X1p6QkWU1aSUY7",
  "key1": "AXF5BZiG2i9pyz6FiiBjfUaTsfnzUM735sQnraK2t6XHtFJGBP8nxoDDhPggfCZGnJjGkB5wn24bv9NSgB5gPiy",
  "key2": "hpZqTiMJhj5JNsao51x8ybFMdJkefqgpVzAs2JpZJLVCMK1Tmwq4Hh1yKsHV8FR7BLFBkVqJXi8vin1oL4G7zxY",
  "key3": "3m6Van34kPQDpHm1aNG6rL1nyJVDC4wTimaKhcissYAZqynMHRx52o2NE1PHreGDPDksV14SBLxpUr67kykv1hvU",
  "key4": "DCRZnBPeE1xV851WkjypjfkJJGmNSWNfG7ur22v4JxUJMGANrq3hrAxExBvxfZz6r3FJNTMbnQWhfYsakJ8x1tk",
  "key5": "5g7VHKSPpuz4xGiPHvxyDtQZqohjXHNuCyof376fB99acryr5MzJpKqqXLAX8gNXCUvNLLNXGKU1NbfNonexvFRq",
  "key6": "5X9k33nvQZrSHGjYtsJqemK9VapJZ1RCxP7cZynbCpbh1segfmvZtVdwLcueQhsBLWJQt569J5yuL2ZvZZeJhXVU",
  "key7": "4aMQuD3xexsG7uxJBhGVGyPAxk4BDdmn69Vr3Hzo9u1KGzZYNPJTXC5mUZrSUu26pcN11mkHAgzLRbDXeAURCcn8",
  "key8": "48Q1PzitXADRvviAqWCExwmzRJAbDUBccb7pMcwRKEWkqaL6Cz9576HvMbrL2XPXNoMLLqbxEfJEhnHQBcfLKK4E",
  "key9": "66v8X3dN3YxWZFxE2gz7EajGephq2Spy65WdA98y5wZ98WFeYdCJgVWqsKZ71qqhB5VdLxuk5Gq3HMTSXU3wpwiQ",
  "key10": "4Rb4zebW7n3LkAEcGonhaFP7qUnH7wmLAavL3FoJTeoUxSUkDAXENzp9XdXusywhMk1NrYBvAMynbHvVLHg8iodp",
  "key11": "aVmfDn3LYE49xeGH4g2CDz41wUbCia4qHwdfA2nf9QeiKSz5sN18fTwvfKQmxr5DtnbPAZasxzD9AmoWxCQrnS9",
  "key12": "4GwU4BhCq5iEhQSSZUPm5DiVagvdmEQLSbRtfs7gR9ojfG4xkPws27GNbQtkohTNzCov4Fynz1GgXgq4muDKkqyc",
  "key13": "4u7sQ779wZNyBJG5d7hVCnTXCLCxcqqrsGdZQYKd1vSTjJCkuxSfmAPNVGHKZSEZ6QpBEeNXmvNETmErVy3cUj8x",
  "key14": "5CK7EMH5P4xRkwJoCpQqCwSUwdw64RVhX3BqMB9yGJhzkDMsqMDr8mU8f6syRXuNR3rcrMQFpzVZhJdnSfrB1ZEa",
  "key15": "5yu4a5Rukcrtp19N8ewLf3ysSCrb4SY2BK1HhsDBhFK1tRG3UhL7dpBZ2ii4UDbuXje4jvfPzhbt5u3dK9wUTMZd",
  "key16": "2rGAJe1WfX42KFWpj2BVahjPS3ALTGgXeCrhyVw56DXojBsYoKrcEdF6GHr4A1mhZeAqTCPkTcLE9EpRGXHZ7R6y",
  "key17": "3hAYR13EiSuKpt7TgJUAKYuon8E7mMTJsURkAUthProrQjYR4nFLjzn9zf7JnRmUTYodTBAoyn1e9JePUZgpxAd1",
  "key18": "5vbXw1Vu7xuHJ4V3WizDH1pYba8TZ6v6U11JDWKmyJwdfNJJ9ovaa5vzNsWL858VMF5ME1DFeDzvXzz5QpxP5PET",
  "key19": "YdJtan5NW1fNvyHFLoB4EsyvwEThpTycdtX4nE46deyyKBopjemTuCgwU87AT923m5L5LAb3HUte7pJpp8t87FP",
  "key20": "3PSp1aeCfTEmb2L3b18gfF5YvjzxeTiLqxX28U6shVEPphT9sHB4gjgibFgRuPj3ASnL2tUkf4W2XdDcuAegoZkv",
  "key21": "271U4UB3bh1m9sV4dUGNnNFU8dFfYMw4hdVnGKigsX3xEJntze5yWz4wHgUag8Y1qbwN63FjFEfoBYkmAzCMR78h",
  "key22": "3pC1divjvfsDtTZsZjy5ftfoUeoUx4phgZ6K5pqaBnjSH4Y5F7ZtEpArEjkFTP6kwXeqhryZMuTAprL9QKWgN8bT",
  "key23": "3dvo8L9ZZBaQS8ysiGPHYvkAxzvs5QFBc5potzPo6J8mz8Xdcm55e9xDk6jjzktN6XKw761h5p1pRwsUPv3oHcZ4",
  "key24": "3puH2MfMkYo3BULKrKjmmcb1uNLSUU7dg6VfR6R3PembMDY4eGHoiAYurNjtuf8TR4QufvNy2EyifoNrivaAsRGn",
  "key25": "4VaZozmivPLbAswA2e713gwjjRwm6GpXcUpyVEzJSHXu7A4hqSoingggVqC5tNXornNgF5WhsLkBGokUMfNPhi4o",
  "key26": "2JzF9JPzCyDVrQKYPZ4Ej8GZr5BifsZ31wfbscCDxubuM7oFSwkZhWzgBv8aex67gHcXKgpkcjMeCVUpAdS8CMkR",
  "key27": "4dqfNJuedpDRDF16myR6SgFu967JiSryr7pS6UwrKRZoaEyDHjXLw95TxTk4xaYAR5vkdjKgA7y7fJzV4okxmHB6",
  "key28": "Am1DPPC3wR2NMLmfYzaJUSjYXBZBRVf6eUosHzZMvZCYNqj2GDD8E1SP3wF6YyXn2Dqidvsm1PyY6kVcqmQ83Gz",
  "key29": "5foz53Ss2SRFr7xQFK7TX7EhmzCGamM8wFfhV9AdhcooAkn8Fxofwe1VnATHC5L1MeG63ZbffyK2Q9nPqSjamNt6",
  "key30": "58BJcFZ9yFMm6PcWwUikTv3jHvWgM6ntZkuKaYGNCqktXgTvbVzUeewd9hYCqGGzNXLmiDuZqvgWeb2Em3fRBJgt",
  "key31": "2Y5vHAf4pcorpCtnjLh8HvaerPnAaxcVKn82B9J7TjTgvEMgfwGAkeZzYDQzyKWcDM1rLaQ3AyTmKyN5wgGQAKzc",
  "key32": "2kQMbterpeqpkU8xp77HA951ZTqKpJcPb3whUAKhaxkwwuUM4Bi8RXDdP4WyysK6U3o3h4P5yW8tH4hSsnwbyRSv",
  "key33": "25DnhNeH15pzAzQTGrfZ6iEc9yMucPfZ9Jme8tUuTtWQeNutheyDZ2KTCMWAQL9u7CXFNGFa1EUUNKk3RxNf9UNd",
  "key34": "33LeDe9ye4NnkEdKQrXPaaJazRu98FA2uHtzR3w5pjCZbNWqBX9n2TnhWBs3wU695Ew3tKuouLAyfLKAZ44LfHcb",
  "key35": "2oL6oekne3AmV5TLikfeBtxhAauH1RJLYqVrSRD1bvtr8TbWJFq2MknLhiicyLsMi89KfMswezFcXxCsPf27U2wK"
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
