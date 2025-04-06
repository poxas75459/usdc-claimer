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
    "4WkzF1yz5RgrMwrGRsYY4FRntnhaeH89jfTWLipZsuUWonNDXy9m7tdkTnkuo6pP79mMyXoNhaZzNwqZ6F7jSrmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iz45ybbBh6vAT6EPY8RhJF8VUi5htsLymTK3yZ9V6VE24NZuRNC71CTK3E7Q5uWmJdntE7TZKP548JKMwaJ9kQ8",
  "key1": "2BDj4JqfHCavEiq4wuGut1H9NtTZqTnu3f99o9J999ppQKo1mMaroCKzLdajPy11QbLPRaiXgjbu32TjbdUYkKD2",
  "key2": "nvn457ZNGgoo2vDis1KcoWUFMWdMphqCEHPE5E1oR9fQeFQ3o5DxXSZMhKqC1SGwpgm9peoacobEiN8n5yQBaHd",
  "key3": "2eeMvAH5WU5rdyXCWJ9XZ5Xi7BgRbbbjgAKtY2ie91zUTsL5KufDAkDCYJz7JSNBmDX3Je57fQJqQy2oy1CeSgx8",
  "key4": "2tzB5aYKw1GPnU5brNTuCNg641e4HL5NBhdef9XrbcCPqxTYHMD2Eh66EadeXcpcnvuQ9FU61vyMr2ExEtDjRjAU",
  "key5": "64uyCReRLbQ9ieMNnYoKRCuzvWAAGSx9rukoBE7jyirCEXNravuiTqEb2Cocv8zHYKt6YStgz3JQdq2M29pV9QMx",
  "key6": "3hbCXgic1xTdcVrDMiwM9VPZkzTs8gGvKD1v89uuUtGozRqnkU49QJ5PjFd9oyoLWQESFGzqCiGndoPxVL49rsAv",
  "key7": "5TmHohSvjvPrZjD2H7pKH59yDyw9KbtzaWUP5HqjxTCKQDUH7o3i4GbL8GoYVPAMAHzUopftDscPgGRifV9DdCHP",
  "key8": "3uQGBG3jfRcFizYghjStPTL1sZAKovXz5gupWgibjvkmDTsqzd6s1qbpXZ62Qjea4BZx4kkizH9y29yzR88sQizB",
  "key9": "3b5k1CGnQmrKtno8L1FfFE9wEk7P5Q9h5WEBxLu9YrmmJHgNku2aDnwzUVAPEA9CqXuDtFCRvNzFqno98sxPZcVy",
  "key10": "gfhu6zSn1jgiciQtrYJBscAxmeLt247aDzDQwwh9PvzacnAwDkWFseutksXjMyvVTeL1Mn5vPCfYazpR7QvnKFs",
  "key11": "MKXTUdULgpTZNVeSLRaPAe7XxmdGhSbr5tQVmuBgJzyMuruWJbSBbESyXcb4f53tZXY1BhUCCqdJahawSzzieRM",
  "key12": "3EFGXJcSt81k256pcm16474sXu4B3ofw1twW7hG7VKTJTz5uEJsAwqiGWdGcMRQiZSSCVV4ipwKdrBvYnrtRGP2J",
  "key13": "JveWyeUoZTxAhU63ZUB9Fnoc5fnccX1mV6mTFUb9ZQ9rRGTdnwJJ76aLcAMR84uu5mrtYnAS9bagLqtR1yKBqXH",
  "key14": "23iVZN4WkwJAWEWbyF8n6D6KHZWc5LKmiHNvWHv32a6kDr766nnR3yJNf8R3nTs7VDSkTk5Nb54AKAbsdkJG7pFp",
  "key15": "dm31myVgXq3yJx1ThJuSPRj5P12q5FV3YG5N2dZfx7HVcP2ia3Q2XuYKBGqYM7ZFWPitdak15K84ev1MxefDpRZ",
  "key16": "617jWFfdzBD8bU5HjN8dZqnG3HYfxAmhUkgsBTgCeSHY2puEkXMnMg82tc4kGm8v5YbfH7HRfc66Bp5xgm8gtgxp",
  "key17": "3Go6zfy8KtFzJHMk5cJujg64DShQSARYH7HMvnyzEFvSp9u4K3RyNh3HEmEkUoJrR6zgoq3MzKZor9geyUgZcz6g",
  "key18": "5ZT1YZLRLWaCj2vyrdMSPjdLBnt5a4UvoZnDJ7aCm2ftgmUC387a5M9pHNWXugVhGvcAKtLkkWrQqXydYartmvRp",
  "key19": "8u7k7DLVVBbFr8RxrXRXKhozdDcJeSb2Tb2bRCypri8Ebmf7jTgtXqbSZL5uQyLzzs1wzbPvY4omHERCsWmTXLr",
  "key20": "38p5qzoBDxCv4DZPB8LaMGweRhMXXPgkzE7bEoSpvbxBHWNNE6pikhQZLz8wwCpdLQD6b5moi3bwjF5MqgLsPhXW",
  "key21": "3qrY7gHXCtYiaYmxKd1oBMeMFCpBkpEiPbNgrkgLsST5GokFiFwxdYgLenBEM6aU7PNTycD8TK7EWwZZZsbEzini",
  "key22": "5GnVnGofWCyasmfDjrD8kFPNN49vrqZe5AeiELHjf1foGHtck5EzdgZGxDJ5UTfrgbH4LyiZLq6DPdAruVq82rxB",
  "key23": "3U4S94wKQtpR31ScVBVw94DvQTn7NC2bGGY6gCd6ayZUu6oTfN274ky4akb9mtPUqJBDaC3gLEzXw7q9rAQL9Jc9",
  "key24": "4uUzRnDxt2xEegp6Tkd5pGzMHs2iW7mYDnMSZVLtMNPeXu2i4UBKCsTHxQ1w1yUXB41WT6vDncWiA16nnMyJ7mh6",
  "key25": "2UG9HWjZbgz85cpKav6ouGV5vDwnBi1qjLJwN2Vc46zZPJ6wrHyRGDnAUyaEABQC9pxGEr7tCFStvEcJmzAmDfvj",
  "key26": "wXbZWeUcRJwHs5RMMP2inbKf19fbeTH5oUjasJEHzRXXDewsuv1zH56sJ5JJT1bDNrszG5LPETngFkFWMbW8RmS",
  "key27": "5Q4kb9HCgDbaf3KJjXaHG5PvfbrMrHVJygdfnUkMtjbNv4GivNAaf7o2oHmtE3x13wTCrQKt1P5WF7hQcAmHEsUX",
  "key28": "3wYjYV6ZHgUSEc92q3UsBqx3ZLm43SZZekaayEnGV2KBwxiex3FXCvQd9CzuvxXpRjycggQ6stqyD5hVxf11QqLM"
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
