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
    "2HnRXdKtM1FbEgYZ3uBTRKy3eVuVoDnNEfKeWasUt6pqrxtTsM7EDmSmdLghFXnokMHgMT4Wz1atGGxoGySN2mrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367bewQqjDwC1n7uUFzpe7XKb32PJDxeZGStpnmrKyzPU4mayWSZzPWfQ1E3zhB9BWkUrCAPdFXyKXLHVsfbM1G",
  "key1": "tRMKM5vwwXfKnMTdSYBbLH3QDtJPYr3CbsTjzj49Ezokkr1JPiXw5oUWWHh9VM55RAqZ953G7BwwwDwrx6T5hc2",
  "key2": "4LkPCkKVRy3MXt1BrNMHk2T559PJXH24dYuaDL9Feo54MsRagbJbf9hKFLe8PnTqxLdtUSGDM2CogGfngdTbVh7L",
  "key3": "4rzoBbwf3tz9E5zZF8GQB8hLVTEKeiaPFuPVXB12w1HbdpGHDZp2VcW8s3zs4QpASWkhNovs2xF3Sk1LZT8UbSPA",
  "key4": "Sksz5irMxhxhDzyzWq4z7PCRaZx72UrAvTvpDUML12Zrv1N5kxsUy79k1pQBq3t2PQCZDg1Mr42bNrkMybvCJ9z",
  "key5": "3SKSDRZPP2yjc4bbSaWYY9ueyzahVptXhCofwFK9bfib4AiFyLcuH89TbsJTWkRJcfjMXnC2LzSsEjQrXUjnSv3k",
  "key6": "39YBBKxBSjiKyAeAgxX3ik95qRAv8nGejMZnJcae5HVUix1vL2RvYjCXySYENSgWqzLuVsxuGDYstELk2BRH1CFU",
  "key7": "2B3XQ6tFY77X9Jrty5a39rnGsiPSiiCxJiYBKp14MYRcEZEXkHNjmvvF66gjcqwfLgjYN36YH8PZRBx1tGzpA4iS",
  "key8": "2KwqFp8aC67g1XyyRzE7njDiEtf8DUxVPoLekFLrnQDi8PxVDvepMhvCDGg5GE7QUfeYyE5nkTJ4n8wvVyXfPXdn",
  "key9": "34mhQ6WZtY3aBUx9uEA9tZK7REKvaaCHTr1G8S7RYadqwoUrGfHedf1JgCtHKtL7oPBLX983uad5emSgAo5cqfiN",
  "key10": "3dhPx9JZikMwcyeghpNA7XkPPtXdygDqb1Defeth8trWeUZ6gacpDTy9cHnbVZeNABiavSsZM8xybt6KP3y3KBPo",
  "key11": "66T65ok6g3djsCLJaPWUHQhqZrE8Ptc2CqUURrapWXAuLLb6iRNvTLqhBDzgmEaXPAWyaVCd2aJ7r5PacpdHA7q3",
  "key12": "2KLZ7dSSQLh2Hep73PqvXzepwWeNo9afcwGhPj4CCGhe9j4uTM1uAbyyvQhKJLrZdDPvYqwXjeT5duLZfuXts4Kg",
  "key13": "56wTMLz4ApxghQDb3CMG86FK8yg7eWZAkiWS4cvw9wvPfNjzvCciqxNcWxFpodPpQj7uWPj1ifR9ZfKwoYsJou9w",
  "key14": "4L8w2wpKBKZpSuWCwAcpk4yeHeTKdfFhdvUGKtWXnfWRYkEaYpGbfYR5BiGFihRcowwZbfaeR8n4QSXZewXRsnqU",
  "key15": "2D5nu1pm8YLKaAJQDCRvPgafzKcSGJqJFovwuHcgcT76eYMCFB94swJr1JTuyEGnoqhBbgT1aqjQn3FhnQDc11E3",
  "key16": "2ZxmuBvFzcQaJXhQP2XNwfnDHWfMovVz9M3G3h6uWEjV4tCK8dz85y7qq2rAccEKYBmW1qUnLEyYYewhLUFhuhtA",
  "key17": "fADumEUaEFy9QZJG98aADtdEDbAPqwpVWeeopFhYjjQy9BKsPJ5CvUMfNfCufkxKiJUdZLr6yxVWs1h2CXW3wr9",
  "key18": "3BRt4vC8C5SstHfHv1LGtvbPBQ5AWqQ429mqJxZLYoDZ7GHa7Shh6xurk3RjG4BubE7iqNaGcjM418zGZPqEkos3",
  "key19": "j81Qi7edideDVHscxfSebAYxXWCGttsGctbNumKvbbNSaxrWBrdtss2PKyc9yhnR1LCea5B4WN85aP4N7Cpw45v",
  "key20": "2eyQ8JnUPMqcPsXTKE5c8VhKPfG7M1mqpB6a1XG1jXiHurexz3Lf1986MYpjhDv5Ga7XJdtYCXyxh1QWekQxjFfn",
  "key21": "3RUWQPKWfca9nAEoGPrmgpS5LbuFo6hdDma4zJaZrVJNFL3NVxEKumJNfKdYMvK2YDCJJ4Y5TwxV4uf9M7QRzQ8y",
  "key22": "4PVxFMhe8tbQvLcyaD8icYHKsTFhL52gne8oqkTAZSTGD3jTtfRGPpUjMvkpfDMNWj3eYSNm8qode939RioqYwxM",
  "key23": "5wwR7wK8akFPb1TmwoxG98GZmSr3BQQsDomuK6EqcKgVmLvGQeX88h7RmRcAGDdJ7KGHX28RVKPhY2KzTimHMYLG",
  "key24": "DkZfCvrsT2MYkDTzBoneK7kxmapgX5Ni8mM2wPxxzYyoePr4jBdg11PqyWEbppQKwsrFVXUF97KbaDHab4YTfcq",
  "key25": "5Dv1oK7wPvP5TjXY7YSCbE5UaRNjayJ9cFfccAbiJvVChYvtZkWGZyfLyvHhVT5DzHJtAAoTULnibgpf5WVdbVfx",
  "key26": "5zKLDhbapZW4ij55BPp5mq86by1X9DbsL69BVeiaDjstBB1fSSVJWrHdVDAFCkC1QncqQqeUNgpBNZr3i6iaULNs",
  "key27": "31JXbLcoGEX9P2RQ2rPHqgVqqaHoN43NiGPpNbDH1pkkcGCvdNirdPFQeWT8SvetTsnSdn84DhdPGCUke2ngwJxp"
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
