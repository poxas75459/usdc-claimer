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
    "5PATk7ZGkFYEcQ2cAHtWrSLmg74ZeE9tskBCVW52kvXyH3ar7thBBSTxH2zGgfKmeeSE54Pv1Eftg8p4AjrhV4xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgkNZ2rvt4XboNmHoWhYwY3Y42yCYvVhAz26DP8DjaMv1J1WCN24qRQacVybgZ69HWYWS38XeJXDtWSKnUwLDtZ",
  "key1": "3PDBtTfqiXwkdUt4taRqhH8sFe1u3PNzMcF9FwpEQxJL11hKxkexEpkQQ3NDGPeBTN9Cb4Feaip4zarF3vNazBd9",
  "key2": "3UdUD5AGM9nJqiDENtRQzXAVsCPntWDfNShnJDCRebprSLmoCUZ66C4MucqjB3hrPQ3JJN3BgtjPi9HNjpWnrqVh",
  "key3": "3kdWjgHNXPNAQbF85aGHbEpPG2eVRWi8os1baMch2iphkJGDTxy37xb2X78TfvdwAkHejWiHLNrcSQ5RMMagicvj",
  "key4": "5VGm3aA7D7gCh7x5y8p3q6EdVigmR35G8VXLAQVF3jKFavFqmW1XZkiDRDZxhfPgrN4Kp8ANLzHDcUGUL1exgjap",
  "key5": "pbZH5EZkLpQiyjUXu8isycTMDJkLURK7kfuTErgStD4mrB1HVUjFTDoBcviJmBea8kHiCJgYTsHbBsi6jPbFqnH",
  "key6": "48LLHaL5ABxp22MZ8CDaxu8Rp5PFVq3KRnmFXW7cQDXFUSPEewwJYfhiy6HsT5ay4qYRYHWkGPosKaQZhJv1fsf4",
  "key7": "3hKT5UtmEtfdQZk1K19KZXfaKC56WDLzRpAzjGRemhQTubzbPDa9MTrC5AhpSwGACLNF3zdWjsSrykzpVstUXvm7",
  "key8": "3qTkMyZKdYyYvxqNvAJY36uiL79aZL2DxoNG7SKQ4PhqqFrAVJahFLomtJFzSnfghnFMsLEkLPCDH7JdgjKeTtwk",
  "key9": "fPhpGmY5R8STQYTr2WaVNQtVNAiWgDMnYFWeLiAYtsc91Gt5bBGrJkFCAh5ZZn23eXndQDA4yxUAWJxDTtwSqSr",
  "key10": "3DxmpM5tWfuCvPEebrwnZ63bBAvMSvPfVEzMqBJWQGksD46oLJrpC1y21pq8syviUCQ6vALccxskVpAgXNex7sKq",
  "key11": "SjjhuztoVCByWz9RpxdASNL9XyLEYE7BCBN5se6UcUfCsi9yCd59WqKSsaLjyj3RHfVThv8gUYBB65N35wyEmH5",
  "key12": "5rdE9HsjhuDK9bPw9cPY6ejLJKNuER53MAZWCL1ib8Qo4YQCq56YmFjEXP9pspNd4H7kg2XBzNo6ytwNA6rw6LNG",
  "key13": "57EnwLtGiYpKs5ZZw1nC5L6eGhiY93qDMAZdeYdtsHzLRTBPPKoo5Zqs9uE2kf6GAyxQqoV2MPMXAaYuXL16Rcpq",
  "key14": "4opk9KVWTvRtzfW1rnsKaXmJuLk21t1mu69Wr9rT22syiR9FnJgvQ96hK6NNMNxecsQGM4YVe6z2iYwTS2JbM6cw",
  "key15": "2xtNwMC4FhNP8XW8XBJPX11CVNWZxnjDh5igjDQCX2FaqhsqLYs1hk8238Fq5QcYdqhEg9fR3JzLZEUzqxoKd34f",
  "key16": "3EMwiu6BzrEDued1DN6oRzNzXZMprVVCJNNgT3HAh8DRanWSS5hXSNpGLsbsEisJ54UGSRtZwcACdgWi6SXtACig",
  "key17": "nao5qGcHgknK7XuLx8398oNcQfLCYHfaSWY6bK6xKv69LrhMxNAwNsqsBjBwcZSzPDgNzssWpf96WYSA62RwM8Y",
  "key18": "5K5aUigEbXtcyHueoTU1yyPbaJwGkaRJrMgvZ2V2Z36yvo7wMHhhd1iz5FAj16VprXbxkyn5KN9MySj82cYLHPXQ",
  "key19": "3fbiqKVNhojcQEFxhGMbwFS69enoKApjUY9BE7Y7tDT63wSzPAs8ipYYcmK38XfR9oiDpJaG4kdicC9oyBkjZz7M",
  "key20": "33hZDwxiMhyP9A3wTYYi13PHCM87UunWEPiC5WpFaey2tjs3mcUShgoAZJr3CkTYmDGTRc21bERuZ6JLU3ovfNAS",
  "key21": "zrqqN4oUSFQjcCdtMtNTKxyHYG268PWAXUGyRifgKengjv2vm5EEMSsQhJzdnL6ip2cUkQpt86KfnQF84pFcYZh",
  "key22": "4hCD7jXgvHCcSua8istTBJ64fWZtr4puQNidMrBKaAxYJ6eRc8B7C8ZBWvJ94vQSoSgdTZZcJDKpJC1ykvrvq6er",
  "key23": "37suseWBgkWbN24oE6c8j7dQ4znXUog9eBc18fBopmksyWcLeid1msNu4yUo56dmWsuaFqhfoWY3m1icnKeTb5XG",
  "key24": "3r6B6CwKeZDnVpxJtv759VFAdTYtVJkuD5TzK65TwKGpfy1NkKmHJ1747xWaZsud9LZGn7XJaWkUh2vpfMRGVEzY",
  "key25": "vgVHNyGHSMDuWZUNCCuG8iNWJ5ebr2ffszmY25dQCA3k5P6rrzPLLyhWyPD92hspm7NRecTAtkTA9M3iWssrVGF",
  "key26": "GYHwvx4zomkdB7RZRabuuL4KJw4g1VkevrRtNTdvKSJezjppDCTVY2yLhyFSAeJHRNsacHLHFgyDWqwqtWL1u57",
  "key27": "3MuAdZsDb2X7u2KYtSiarPLZmJuytaqitFY8UXj39mczpU78pcL3TM4iBtY3e92rBJAAwWHJoPWTYzzaUuL2SzJx",
  "key28": "4wnweMiYMaMNzgHc64Vr9vX3ATKFfXt8czxdYEnYPRFUM9XtcDPRuRR7jCFkyk2KrCiD8gjkPiB2AW7r1fMnHJFX",
  "key29": "4vYcukjBtME9WfoqnsGx3tUhjQPkxyT3Ew6dGsT7Y34tq9y95fMmS9z8UtGwRNCcjsN7hVh1Dycnkax2M2tQT9TA",
  "key30": "2a42PBjwQLTDmXBD7WYt8Z7Tfti1cz95rCnXATHdBoUStJPvjvuqpFxZrReGvx8mrzSfjZ8Z1snreVy4zfBTY2QZ",
  "key31": "3NyMUrwyZtW1dHMWQLFuZpQceHkwDV3RMfN7ML7WQZ3gas61aZNMfxPCeHf8eRjPYkab6zzvf7frwtSMnNiGKNTp",
  "key32": "2ovX7KkYpJZV6rs6CXpJae6yS7DD8tMKRLeAk5nV3qipR3LjgYbmHTWNeex3ma9gQC9uTy7uFi9mziSPsbcyz4xJ",
  "key33": "4xkpy4piDxewrhH3U1nRCtz2tAVXMw4J5QpxcEkyJFPxupgY4HWY33qK6EArECQQoDdQ3kaMyD9AT7pFpL97sAnx",
  "key34": "3ZRPP6sTDLsMLS5c3G5su4EaCo1FNFuGgbYvTdenmD4Mdqtbn78Rvba2j69FW6kvFz3Y52uLYGNZZtVeybPEJJBR",
  "key35": "2QkS98Q3NVBfe2FcHGqmCGkxYg1RjY35fNcj4hs7hw8Q7juiZcQWog6223vuL559aPLRXESnHwoPCuVehBxD24id"
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
