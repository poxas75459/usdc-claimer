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
    "czCeTKstvkK3GPb5xkCrzEVAmWQJam5SPuLvtKyd3xcqYGjeCh7DPoBuDdVjdgbBwmAeWS459XncY3hGWH5fCFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPZgEj1tkQBSpLixttEF7kNb7vS2P7iJibyVTdtMxZP4KJY9YDXDMvX1tvrnCS3FqitBBSCQTKEtTroVupAvFek",
  "key1": "5NMCXq3LVieZi4xSq4vtZddC4C5koCQGMWQMZM7KyMXC1pSJqAPVgxoPDoKc4oYxPCcSithgS6dXDajfCAXdFCxF",
  "key2": "31mQC6UjPdoYJrfejg2iTSVK8sUTopm8bPNDRN28raAz6XWJwmMcrXBZWhucntCGZmTmZED9diJSGPJKsRMxK3Dx",
  "key3": "4dWeN34cVhJtjUuNwxNxJXUwTgoDtUajnRESK73VGNNCpWoTXAHXugCFhCKNznGp7iEdsBREMZciLLqEzugNF3Tv",
  "key4": "5hG5Gx2gXxHNEYoF3zbSAqaMKppP46R7e96gKZceqfJ98KhXS7gwdM2ByNMbEFB1hSH4aFegXwH2xk5ovWX6ao5j",
  "key5": "29us3HCsCHZ72wkFfGFbJgPXQF8SwPqj8N74wDjMiGqTNtcoNo5UYjjzeXS7tHdo6fMRM7wmLVtm3Zc9ukCcDUWg",
  "key6": "4TQTk4dSUvAwYvFcZ5V7SiA5aDWroZQjmQ1oSzutyUzwtePhfvNpSoMtrgh6tf6UUmKBaMzJF2L8rzcFLC5oaJiw",
  "key7": "2pJ5EG1ha1uENtrrWKyqe6JBzVEczDjZEJYp7gXLScxXKgAvVUzKw6zzadp1dXb3cfLoBGgVpaJ2nFe71mKzwAFH",
  "key8": "3ATemU6pkf7eCPmAU3UmFpJ9XZjQ4Jxqij6MQYgMeS2HaTGS2UQ51dQa5RuPXEgTDphoEXUFL9Wus3MCHBxNJNKP",
  "key9": "5Hctt9jm7UXwvkGojaVvoTN6g8c149Jnj1VfAMjRCtT4KvGr6QSk2G9a892v65BFwNtUVoNBPBMA4pC9QRfMTexR",
  "key10": "25HY5tNVyitTiGXgPdeCEYbTJstHuYcgLPAnWZ18ww3Ck9dvyhzkymfRSTjxx6etTqhPgPz7Uij29m6muoiGBH6d",
  "key11": "62k5J1zgKYWTUnyB7PTTpz3HhntEcHWCf9XVUh98ddY6sYSPU9nzYF1zGCuGDXkaoTKucaSu3WaCRJW9jh4D6Mci",
  "key12": "4Ma9hpgyzn7MARjnwmbDHT1aLQww4sQTHza2YfQRRHykR3dqmfwSZErY6QZqFCS2UUqxan6uC2K7dhgq7TrcYYeY",
  "key13": "2xdgZzXe9EUvNe5MHNL6QdAvReKy1MshA9nFFSBAUehZ8NhyMEhxXkP12NGGhZwXG9B4v4fpEu7C6jNtfJfiSdJY",
  "key14": "4f2VL5b2TQL7imHzxnHVnqeL1qkgipe8Ln6MNVYzX6SsCpD5BCmgdbXeTQCRw4XHe1YjwCHxWXJkmS2PQ42mqrfZ",
  "key15": "2diYnKnQKBC8p2aRXf6zcTJtw6hMNiBG98YvVwLRCkmurWAeLMXD6XMJkFAp51GgKrfi8EVszsdnQxi3HFShAdrq",
  "key16": "EJdNff7ViJtVMUhqnGbLP7R16VXo59rybLw4yXGUUEb9mKxxH2Lzd4vc2PWbcwh2yTk6x4zUXtTbDXemBoXNVhz",
  "key17": "3norMpkL1QXif2FmTa6cnEfNz2BZj87uniYDiKQqu7rJWQAti5JD7KWDNQHwcRwLbxQ1VsbbdU46n6UfUNdBRRHH",
  "key18": "4FUStaYRk5mpjMzUcie6w7hNb9xm6sMHF3gvxVwSGMybRHDQfT6kZEW8DVCgoa2DjFfPaV4FtgCkz3amF3CzoffU",
  "key19": "Wjh3ZfqwUFcorVNUNJATpB1QddEP1Pj2WiCWNaFCZYofv6cxkAVP5mPLHf1P9yuKnAjE3WwibdZER3uCmm4k6TZ",
  "key20": "44UKHNAy9GgaApJoyRef7Bsqc26R1hKhfDyGrVZ7YU3vBX6i8RfEhbn7moKxvaNAyhavTAZwLX8iEVmqaBMJSWPb",
  "key21": "31CjwoBpuv5QMRwvhT3TXsT7c7htp8SzpcVzHx7oxCrcewAP2VQwyareSQ5qLctXfJDCrVGkWyKDsFJ37PMFWpah",
  "key22": "24x8S2cKoQ6fQ4VjvwQA85V5oDGU5rvYttKBhumm2fuq56jsJWReWm4gM66NGesfcpeZPgHnsF5nH3XwKZM7ywSi",
  "key23": "2zw4adTF5br6YeGVbwiXP1mLJCtKmzAsVFGfGMK5kb4pVgzXdaPVPyn1pdCAfp7Whp4HVV65216U1xWroMUCpSWY",
  "key24": "4oMykg7nS5YuFinmofs3p8bJYTd5LhVUZop422peevB6xAY3qiPx4YTYE2m4QvSwYkQBNRSJbKSDknGwWkSasDLZ",
  "key25": "2CnuFDpbb6qWtrXUyu3ybHjAN52D5PR2XvBNqEjv4zAiG7YV6HGeV6djWj8ebYacT6R4dc7paWggtFP5KcwTsFb2",
  "key26": "5zZ1GukVUUEdKmpotyKwusLrNMWho5pHYkWtjMHQQWMWPR8quuYJH6JkhPDjX4LKXU9oU8SP7SiFbmYMy7Gpw2e4",
  "key27": "4pNwXiwR4LLFtfYaPZxQq2yUCkQECTWmbS6LS2mnhbkmvaWaJErjtaVdoMwDT84twt3JPVpE12RfYuKeExDeDUjA",
  "key28": "3yXh4HUgnEntfjqZnnqJb3UEh7fDKGmJrzDSau2FSTEL4VKY9RiSkXhGfx68BDnZPXHuyZy6w7zA1jpkDDqmzoyB",
  "key29": "2qVZGcYEjo5KbLj8h4k2i4Vf8qEuLvLMR79F27pwVhT2tcPyrsZub28cP2yHfKoSQWbHyD3Fu8EZDgKQKJMe7Jtk"
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
