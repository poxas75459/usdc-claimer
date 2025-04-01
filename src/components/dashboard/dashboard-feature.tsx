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
    "4mvhonrEuBqetXSLwhDw1HYuwdRMYHo5FnJ82nhGKHXhHiHB4D84aPoea7JvsnYXPt2CvdRCzmB1XWY3DR7cw5Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vh6e9SRzf82kS5PCUBx9D1Kc2aJ5NPzwFjgiGNZrwh5e1CqMchWh3XqPAvTFqNFQvJx4JpaBSNnCadd1aD4SKxt",
  "key1": "84GJJ3zK8uXr4EwX4AuuyHS7oAMpkMAejUg7NDVKX5uYk6hVGjLCbzGXcUufp6LRaRsgaNo3bYAHz8s7JQuQv8a",
  "key2": "953D5ryVu98P7XeH3VcVZWm11YuCKnfSQwsted9S6i18GeWofrSVj9mxCrXMg6AnedJ7V7WnsKTfprBzzK5rw7S",
  "key3": "612cka8Z4LjnCgwWxDwAzPFYAshSf7pXxRQnjiknzToHVPushZnPSHtJZkFaNMJY7mPPBgzsPWGuFnFkD5kgKaMq",
  "key4": "484fhvQuyv58Z7ERFvpv3SLZkW48t8kUraAoYZHjdSNTp8ouoMvB7e1hgtcFogkvEYN4fvbbpjZiVoyTsV8hatJb",
  "key5": "2oc4NFW6WJeFgFvnsQRbGsojijgG4n9DJc4E28mF2eoBwkWabxnY22uG2H31UDEVmtPLtbAgKaJfRoK4HxHyDpUD",
  "key6": "Q8yAtvxzyhkueYEG6coMUuvs5dgzcA6RSP61SFqvssejdPGiy6rj58TPrjMY6LyQnU59iB2caSm4mCQ25pdg5ss",
  "key7": "fuUSHhSdfwM9W3dki5fHzFKC2zLV8nXZDpnBaThZBFkU28AnTXEHGADo3vFqHzd7Rtvix8C8evHNpFemfgnqyFe",
  "key8": "57jxivrL4RScouKCtbsteci6v3v6mvzzVUpMm43cfGFKGX5VFVVrFT6BR9fJrehu4aGGjyo1NhqMbiuPZyAGTWiV",
  "key9": "3wm1aVNkF36va1DhN7vS75UPPYeTdMegWi61ytmbYrTViJL9V4AfC6pgQaeAzFJ4YCKhtggPFAC5qdX2mpepwFVw",
  "key10": "4rtHLAYjKeRq5h7veQNGvh1vjaAmw4dyRanF2pKGhmFKM4BPuG4xagxJ3Gzc4C7cT1dB3HdGmLyxeHdrGUWEmVcG",
  "key11": "X6cHhMcXPwPhKYcDze8GExAun3ECbymjPxCgTo6xZY9Xpu8JftaUR6HKC8RJDQny8NGfvUhNXwAhQtutvTTpZQE",
  "key12": "5n6ZQPioZmEXKaGSdKZms9LjA63ZKh7E4vCDERuMp6h8H3kcmebKxmPWThYjn91c9YkpSQTz8yYVTWNx8wPrBus9",
  "key13": "5oTkwk4coU3dzLBn3wyeL3eoc86d6HU8Q1jLZRkKKYqVsUDp1Th9vfv4V5wGRpE5RKWX5BJD6VptEmGJUZ3vKFj5",
  "key14": "261SEMrBRjsVgScT6oN3WqHUpNVDQMhxEZ5STj7Tb9j1RBsUbcgEwnRTcATqab8dKGvzKin2ZYED4HwMQdcgE9x4",
  "key15": "3hWVXek4nUe84TZPadkBa6XSMVmq5sr2ejTB86eQv42LzsfBfTUmjdpzdydcY8jeWWtcU4CadGv7BfCytqYPHvKt",
  "key16": "CN8uarTb8GFg18qyj2vTXqSerqd8v5At3t9uimq4A87FHznbJRksvudBWhSzMJL2yhbLhJDStk5objNEsuoAg1k",
  "key17": "4Z4LLJzYpEmrEcSyBgCfHuRvKPwL819XZBgc6mHdeHjCjRc2xxWMGXE1ksFcebaRGxtnsT1TshUC4bB9ZixetJQ7",
  "key18": "2MpiqzQ63Wu7n186fQ6gMYVP8K23FbxgCXzdU8w7mpnm1P3zWMVNraFkMDmv5nZyjLHtgFSecBLm9jik3dQtsGv3",
  "key19": "2XpD6xYCxx7LTyGHaTBKMGZjFA5nEC3ihz5H7e8j2xdeyhojTHkPxjuf1ekNFF4W3xzLpu2kAFYgaPTzWMKo87ue",
  "key20": "2SvMB5Zt2BzX7P2R9R8Xojyr8PYwEmAo3j9SsPihxfwWMAVj5moxUX2dcUVzGeRokfbiXqDsPQ2Harg4z6bUFUJj",
  "key21": "39FppJwgWoNo5jEFc2SyaaEsFgunLs6xZeBPDkC5fgFK1ETX9gmCfo89PfkBnTcq3Fhjpxnxf1rLy8Z9TvQxQASF",
  "key22": "3BENniuQ8GEdJUFDYvjpEaENp59i67aTcD3axZgtVGtWmnFxnjPmdreVBfWsPE2LkBeinoeDXHV6R3SkJL7yFzsy",
  "key23": "5nM4ZxXmdD3PoZaZnMvt6MtRpQVphnASNB2zTDKuCinZpMQNAkBQLMXBugSsB4Yg2qDh6cLexecEFF6BRhLZwqCE",
  "key24": "22DWhAfBUppDhKbuVFR7sGRxJvA2HRx68Bc3tkATFQtPfNMHQooc7SdVBqgYbpd1BzDNDqfcRFHk9QEkLMqfKkhv",
  "key25": "55eFWZsYjKPv2b64YRe1fbxoUUwtVYSvsMguvpFn4KUoxv3zMRsMx1XNfwExrq9kjrDzyfUw47uXUp5AKq7TsJBe",
  "key26": "5TUHVugCzQUM8DDxU5CtXALDcG4rvkNkjoBJi3ZhjSXetAt84KnZ2q52PtiVTt1j1us6EWyRLUQRw3BcHMaDnNB1",
  "key27": "2D7J3FNLpMJ7vSahqhKAAXrptBqZVBxubK1kL2WmGVRaE9q5y58pnjoimRVVGcnaRFv1q1DjDmkFrPaEAz68xvw3",
  "key28": "d9qKY33SyHMrohSjWpg398ofaCVDqZZqtdh4zvSoj87wxAYFzjcL11Sowomm2z3b4gwvYamWsNPvCexDZ8tqste",
  "key29": "2k1U5nPfLxiGFpHC2SXYwRAcf3e3gw9tNTzMrf8UjvYovS4qC1AYyd2WmC3bvkAnAbmKEMkXNLYabGi63TGTLn3C"
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
