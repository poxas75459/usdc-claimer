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
    "2X2J567gxUKXvwd7TVa7J1D4GKphH9A7DutwHwP7yk1J6saJ2z3XEiR12s2tep2AyAdYgT29mK37z4e5ZRZuDkSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P5Pbdo4wz4GFRgTbRg58jpMPadgS7gi5YVZWQKPcHqx6wz1LhUTF2Nk8a3ndGoqMAAdfPSAXFGxyeJvR83VBqmk",
  "key1": "4bA6AseLkeRF1w4ProzE9c3phQhyVWNwuPGLixPFqufU2V3cuptya7ZLYJQtPieVc2tDkPesyk8rYgvBcUN7WazW",
  "key2": "4iLT6shaMo7rPjeQSdwDFMkTUDGA3REok1fcxiskmJT23BivpRTmiHCCB8XszSTTWmfaVPL7JWmaxt5bo1KsZvYh",
  "key3": "2r8v6fG12icdmhsVo8f3pUEPm2sWZQooB3j85TRkHNhggzkS5eEcHDFTmuhmqQJbgoq64V7Eq5av7HvEB31hbx6i",
  "key4": "4Puus9zgGN1mc2UZM951iVkvzH5M44btpbjgzfSD1kXHkVH591qRDwDe7Hvtik1NXYFhX7AMWn35yn2x1X5rSGJy",
  "key5": "2MrfGGh6H96muU2jrJy9qABeVCsd4TcrswmbvaoQuN3kcS5FGHHihNqzS7bu2eszjD6KC9J8hb6vphdKahjxqpHi",
  "key6": "5xmutjXCmJWfGindwveS7L3v8YHaB3kvxrAo8ewx1iU4sKzjpDbuvDobYSCnVDhmbPysAA2Hvhr22qMSUX4fcUi3",
  "key7": "2HBaxkPVNtrBseb4apQFaXXM1NGTcDBJjv3goFdBWPeSyahkCtKuduEC3ZbYNXTU1RYwPZ5qdPSek7pjjQR2wKxs",
  "key8": "5fGgX6y6KBom9KC4zXHXWJkayXUQaNQhTo6oehm3m4x4VCse5whYKgyvQegecD8jtephRmDjfjnHhqjxd63DN1aJ",
  "key9": "5CGH2yXB6jPfekXFDtFgvjFK5e1wqYwZudKbjCLaAuuA5Gy2EPUQXXw4pbw9Ne5WSxA3i7KoZSTLxjDnUU1U5PYy",
  "key10": "4FVgKVUVrrYGJFhg6b6F1ZzuG4f1TnkhgXH8Yw4QQDq1L1H2nTUSRwf7SKx2qudAe4if1UZJhsyz2Q4xjkiLmHNd",
  "key11": "BPbRXfdyWUcZzK7HkRAHxSQTc4vpKbh2UkwbJKXej8AMWM21auq1wfDDyq7vdushUJJQwH8zNC3jsbKZiin1wqS",
  "key12": "26w6NLxhjgPuDVJHHdx3efdMXJj1JiaVmNHQBLZvGUGM6C3h8MJmfC3Fr9LJ3fB4yA4jmiic16PrpV3HK7L2VLjX",
  "key13": "45hqyVezWLcsv4uCfqhYQ8pZp3xA1JPtB9aLviF6r5X7GtxbU26upFGHJaAWVJF6pj8pC7fpS1Lvf7tQYwabs4Fy",
  "key14": "3qGBxzi5JQgXTDK6a9WuZJcsnghg6ZCtMhj2vVZa9qyAKv8JgPmLnRsmivmYQkX7Qo6g5L1GxqhWBXWmH4Fcd74m",
  "key15": "2SEY8At89sq7KtcPijFCgc8oZLMKc36Rcb5WA412UcfBiHGU5C1HyTioA6jdU489EBKuFQM9WLewp61FSh2HLFuq",
  "key16": "67RHh24evxmFiV4aFmdGK91ZQ8TdGT6qPL1sWWRfA5fR73czHrjrJZdhf9CV1XBy53c1hTCUoTiLdCJ7yMTzaSEt",
  "key17": "5ii8iqgYauAA9VTGkKkMJ1oADvdKei8GJ2vkYDe3B3HBz6MiYtTTau8Q2Jnx2YMKAWUkXUafunqvSxTH1ESKMVqQ",
  "key18": "49LH5ewL298kNs2Rxf4GdUYSJ9sYainQXPwVpDsZ8N62jpCQxS2fQDpuQjDcXBC3miBbf3JuBzpRZ6hJWZhgdq96",
  "key19": "3KaupGDt2PFha1knyqKB94VgFBfZX1Rb5QuiKEpc54Uy27zXX3tk8mQz6fj7wZb54Em4v2Cej67Un1dDW4mD8zhL",
  "key20": "rTDdnPPzuAxHDsWLwabZSeZ16EBL8FiBmpCe1MLHUaGqcZdWuaL8MSBG97XPDhMtW6zjGGq4Cjr1i6GCGTqbBwT",
  "key21": "3tMaka442Zx32KcmwLTATFNeqnmpAAbt33ejER1dTb67JdDtzSRjwaz9SYesNbnhsSu8doxGqxouDaoCaiRJCnLp",
  "key22": "5y2QxZqcnvRQGuTVBcHgmM1GpUXHwoiLFVegZtAhUkoM8mXJYBEse8XrRvuD9yov3fZbpz5ydMbS3HnGf4GeoZ5u",
  "key23": "2GY4K61RWefJRKVFqLu6cjXHWvkCXXQtfjiGw5sJzJXvGASxJuCPGgU5Zf28qdh8k36kLSDUdSDZ62b6GsckwCvb",
  "key24": "XRRGfYSMaysagh7RzSfKYnoCDY4aAjR7wXY2F7eYhG9UXsWhc3fuhg5kpnQNMwUsotrTvtXhQuMp8Qwv4B3L67L"
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
