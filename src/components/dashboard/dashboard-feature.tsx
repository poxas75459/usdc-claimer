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
    "3xq8xXxecK1bHQzMFYAWqFFafmS8tNg3dibGtG2BuYi6DtE5pk6xiwfrxaoLUE4Y462Qj4DguviREREzsVxvSL3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWY474PdYUCJCXFfZJusuVbLjcyxrPdBMb4N6pewvvpZo6x9wGS3q6tusqYGVhssy5RWZaZdEYs56T9ikfLwr6A",
  "key1": "4hnKmbVKiD8XGCcQGcZnKU83tas1H3BYZQS1YQb8jhyiHUMoQo5M1kY5fLG8tv3eiyNkBFEV7qbiGUL7fy9UAefM",
  "key2": "62C9QTRHCJXjWP832k8wu6GfMzZHW3x6jKnEZrPmdmuPz897yP1BUbFX1K1FNpvnzjC8mbJrz7aLs1ixky2FM8r5",
  "key3": "2rLKCpMJam1SRDdbXoMgQXUfiERLFpBnk1MHyiVjAC9G3wibv8Uh4qzM8X3SQX24DgCgv2gtotBcwVDUeeBYmeDY",
  "key4": "4cb6NnD1pFiGY1ydUJCsoPEYdsE3WTynokxpVLEXwHaC8CcWQQeyZfWKuGN2hh7LeXssE3DZ2fNEQRqR7FpceNtF",
  "key5": "3BPSdBx34LoKcsdchSYzj1guttRo9JzNzr967wmBavMkFQMpsomRoiEoDHmRLzc3mfsvdwpEMt2PKn59sXCM74Kd",
  "key6": "5fVCKhVvDekzoGpxwaxi3DLaYhxUF5kLytaDUUcbTCgRLN4ijGxyZXhpEn3GJexdMVqb9B5uhhN14QA95qX8oRNu",
  "key7": "57UFPkjeFuzPqZo5j7XJur6RcrrFaNGJnbvwecfzDA1qRQdTu1tTheuL9S5hVdwK4bLa9W7Eo7MyV8QWBWDSiAiz",
  "key8": "5QDVWsKRdn5uEPK3Cb5ktK5TW1LuxVUJXE49rmWxCqxh1HvsLNaM595qVnukDkcLjZb4fnKjovZfRJW3BJhfybCm",
  "key9": "5Zkh5f7F3eRKuop2WEdB3TFUd2V1gx3RxjAQZGAVEFhyYpdztSruyENAgGrxws6inxAadDZSHZRGef1bR6hdGwEP",
  "key10": "vWH7HXf6amRa3ekWJdb7bA5rGHdthniwYNVGhNm8YLcKj4V3SMomSeuDDd8m7GxNmKJLRjiamsAbtiwvTVoqY6S",
  "key11": "4U8PrmnvTkXcLZ5KTQaAGibLuCwK2QFeomTd1dA7ADndxuchdc1GPhRsUYoN9cqpWkGgRLQ45484Wb8VNkQxwqD4",
  "key12": "kq48P3Zqadz3nxDQUsP5xigHPNCz3CDwjr4zqCpaMF7V6uvUAyuLT5ZJ88RnXJHDC9rL4bDhDyUus1sph1M6twP",
  "key13": "id4143Ed9faLEcBsVPwbEa2YcDqFr54HcPccCKafb87eZTnyoCnyFYsYQRCBg6n3Co7njsozNPk7WpSYYGhsXsD",
  "key14": "53VhCE1xVhY3WAQfHvYN5ZxV33pA62qqpJUkueCjQ5SaGdc9gG4kahnix36MjjatTmwwTC5W1Qaq1bmCiDaGnVqz",
  "key15": "27EGC74uMRmrCEadoSxZfNgfM2XecT8VCd8jMYsJVXYVbnvFAoNiopsuy7DzMJG6M1XbFyEagiEfdxCVXKfZVP8f",
  "key16": "5aj7tYDTfYVw3i8PzMe9MwWjoq7f3QFgHSHF1RkjN61GsVJNW8N2qJCuhgCb2P6QmPhBLZGDcHfGFrJnmfZzjLqX",
  "key17": "32HJCUgLLsnp5oPa8yqiXfLPu15jm7kgfC87zoCevmQCHMBHcwRujAWaT1H698hJphuLQA2u63jCoURtuNMBKFCm",
  "key18": "oSZgDXzxFA5JvUgt7oVK8G9uXnhMydSWYPWAY4PZ6BTZb1TaUCX1fDaxjPGymiqFu79XNEzibov2p8PoLeXcoyR",
  "key19": "fZHrpBUsdL3Z8VCKUyhdFuZdX9S8T1KSNaPt8TfBxYmeVAyFyNMYDjd2jh8oJD9ot8suitu4kJAAYSdWv5KhqzS",
  "key20": "67UZhZ6sP8U5cYtpPivA9xLBGzHeCeHFkzBWBvKaEtPKrQ3BcgARVBGR4exfqNKgqMRxYn56jpmfh686oEr6yc7A",
  "key21": "2PmQJvCF5eRJLWH8CDUbHhTCpVMLK3C45Lutov78U2s1UiR3Mvsd1ohcLin2i6Xo2wx9vPFNMyfDYNrwTiTAobhE",
  "key22": "2NUpipwGw5HLbBwPCDMYz4hwW5BfvP6cEUwitT21vJwGUPAcR1kg6p1DrcWRARbnCa7tqVGYpNhEeuggnXHAYLoM",
  "key23": "4e9nYQ7s7YY8muaTiU59QcorknqJAH7qcKGyUdAKCdKYXDYARMVhiBETzt9hqpdrpu44bvPK9XwJSCoAaG3g5Fpa",
  "key24": "5BguzJ8ZBpTjazWqs1m1dfvhKfnDpWv3fCJukND4HWVUESK2nqpHgdKhDxskNL3xfieWzAuKp8MMFEHNg2z4eUq5",
  "key25": "MRNtWToHFvNszT1JZ4Ur42R6T1u3i1gjWBjP2ZPWxkm31tidFXkKE6MwqW9eTCPcLUB1PCiKqqxiwUXqQrSavdX"
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
