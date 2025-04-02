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
    "25XG8Fbk4LMiG8iFoAnQ4Hp8p3orkXsXposHPYUtPFV5dQ824dX1EBfmgR2VJBANzYt9vdLNUoE98oVSAuDGCPmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDdX6Q4S5Fj17e6Vr6mdRmQf7D81FuGzk5yQ1x6Z1gUxASCzTscjvf21887R3Ysb54bbmQbj6CVCV3EojRxsczt",
  "key1": "2H7p8oSp9AyKEVfCwGbRsfSgutVMa1JVCnQWivhC6bLWFfjFP6fV2GPHnpxN1Q3A4xCBvt4Ky2fNbTgLhKq46TWy",
  "key2": "3RkeSuptbYa81mYvNzSbUp3sAS7Fo6R5XS34PyhQLfmUGfLNHF67zdATC9tJoVqPZtfvzcfhQ9waKtMSXZySmFWM",
  "key3": "3esjcMkpeGVhfAHpgxqiiJc4CPQz7KnRzKqDZi1ScvQrFCgjRK666QENyQeiEjzr977R4Ncjzgih1MZyJCN7jP9v",
  "key4": "27kwFEK4ZmkDHXoiVDdG8naJhWLgR9mT97nrbkcehAFzChWhsFU9GrwxBEksBi6XJ5ZYxJd6MRHS9ABimJ77r6WU",
  "key5": "2XeV1MtsCxQpHLYDFCdNB7oRFz2Ef57Muv2QdDPzVWK5oG9A7wKoUskP48WziQU8xf3n9iD4fH6ZgH48sGgEFncb",
  "key6": "59o8irQVdJkYX1WKXFKEKhkmhB2AjaoPiLd5299a8tmxWVGAnBXXzGP2KM8SDQS9eNcNDVRdxXUPjYPoMsKAuBEx",
  "key7": "4onE1ZzxExJKotSaQDxafyp54eEyrBnyuBsfEpScW2kfPXPxWUhwuzB5z99XoczkSsJsfDmERPaNE8oKQiZttzzf",
  "key8": "2FSg2JNKiqchiCiT1EwCdcWZoBMt6QagU1197REFZsmzGG1J6V3PFdM3DQoxG8rp77nCA1pnkQBjkU9Y3nVVeN9f",
  "key9": "2YAAejK23guL2K816cFRSKHpq1nFQxfcZPLPtnrUWukxDKUC5WBv4mrKfftrnBf7iWuqoxPkLR8VtcbEvYiURpmj",
  "key10": "27TD7UDdH3EagTkDY27jFTJYMoPZ9takv1bvUy4sfeRjz4HTuF1WDRSAbosp3MTKfFhZpX4QuYpNnQrmAgxirh7L",
  "key11": "4FeWPN4wqPn8PuwXedcJuF6X4LGbY8HPrHzwqhsYdtSwtvsUUmS4WwVQ4YoEngYdSL1unrYUDs4gpCRev2u5DDyg",
  "key12": "2j2hL4eTAyyFsrK7qDX9WgfKJMkCW64n6tMs2PUe5MrACiojQCDXzzv3LaTiDZkL7jBEwNr8CoF66fFMSwN43CGE",
  "key13": "jdhfMuAnGtuT2zDzYAwLkChbRo58fzRAbDB8oQoJrB6BXWGcZHr7oQPzB5pFNNoyYkKmP5KgjicrNCfWPKh6JiP",
  "key14": "4Wd7SDyA7ZrH2x7kHz9ojDTfByTswjK73Lonk82DJ36dQEaTBHtGBvjU57URRJKqbrR5Uqz5kCddeVZvztJHqHdN",
  "key15": "4nMD6V5mdTZbve1sqojKBhoHXGruNMw5kkE3QLg4V61Vg1EDDxXP2vtFBHtT1uFNyNSjiWMvWmRHwkZAvFjjWDtg",
  "key16": "5KFPFx3ydSJ8QZXKwdMEp3tt7sFwfrPwLDxA9ZiVsJqsjFXmHKmDPaP1Ej8DNomsBh2ysxu186rn16XB3JBC8WVr",
  "key17": "4WZpMfdTqrLLrLFG9AfgzCi9SAw1dvt2DqgwCjCJgudmQRtyC7PAHDyjF3wgsXdaBKFVeSEgTeCKjy32mH8JZYUd",
  "key18": "4kByv8pWxYwgyyxABKDWqSEWkGGCcm4v61tJpXU6u1Q76ZBBFcmZiXSbhnvBRh8TTB5iSoBnGw1veRnVTthyQ1aA",
  "key19": "4QwVqB7hauzXAVJtN2S9Lq5t16HHNX7h6mAERt3c2UUuB272BvNCsir4QZ3dcwdoroyFu2rPAsXJ6hEmAAUFCfdn",
  "key20": "4M4gmSjBpbJSKLjt18GC9MeTzvfu8hZhjokKib5a1JJ8crgMwkLhJmoab9tf3Txrbsms5N7npjiXBtRGnsVeyrzp",
  "key21": "ciiEWXf9yhmBwbLP7EnttPFgkBpSKQtAwVyHcrS4gRwqBecwxWyT6rhC8TVtyTkcsECipFWY5YyxJLrZY9KbhPi",
  "key22": "62MUQZRTu6CTNkQhGTJB7fxUFQS6h1dQ77bxYMRXzHW5fVydF1ojKG68xCFLM9Qh1ekdpx91oiFKMp8gnuACWSrr",
  "key23": "3QHKAEaH9exuakzN2iKgubmAs99as5LjPcMEcuA6bCAKWeXiH1NkdUZMBR8m2Gfc15y248vQfw6KqpBLnxMHaRME",
  "key24": "5sRF7GZt2j8RuyjgzGMdUdtqP8c9nADXnbNzXTsBmAT4uKxA1rQsvinkN4x81XnTL6g2shRLJFFGrNZn6ma4UuEf",
  "key25": "5K5msE7FFJ3sFn5LJ2z6pSGcCjdcJc4XbpajhYNs9Qkjv16BWvaXsd1Ya8HYeYcYWYbJYcxHxm5JXZw9L7RHK45R",
  "key26": "38dBUtNpL1Vm8whPM2vf7V1SBNXUWUKHNn2KofLPHvvkbDMK9BuT3waXrL8YF5ScnWWPEnXTG9V6d3xAeZHYs3DC",
  "key27": "cnocNMgyJvMDPNv2DrYTBczTaRALbUQ3CpMjxXZaXsYHC8yT8k93kQt5UkmXg2AEaqYfLWzzhZoQmN42uNxZ3Bv",
  "key28": "4FjNbHvWasSqRWVyBEsyCkjVYArTQsk6EmLdu5rbvGfvFCNGeMbt5atiqstY1Hr9TPFBoqeZtsipRgdWq1AX4pT6",
  "key29": "knVKjdGof1tcik4GFu1Q5r6va2fS98kTgruLMxc5AJw386gVMvCanupMe4EcZhsxRcAiLg8yVYnpwYPj1iu3nAu",
  "key30": "4Thcy3oD9HypHvkPLE9QPy6A5WKnDZPBBh5AhxkFbQ3SFVeYmQaaNENSmjVR8kVbuvtaAi7KCy7KhgRoHVi4Qvhp",
  "key31": "3EhdxNH9nWtmtjQaduESxHs54ZHDVomaTMzZ6VcKBH7UHx6Aopig1hxTGsHr4CnuquZtB5NGeWurD3mLNFdQ91Ji"
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
