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
    "Z8n3ivbY3cocFCgJHULyUm7Udumt4cffJx2Z4yC15sG852iVmStYdDx4Gby97keDCmD4FU8hEDcvqq8rSaKBXj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtKWEnk1DQ6VnZsVtQbrUYL9mLxChmuN9YL5JF27zdjwUadXQFHf2FNY3Vg32TxFMq7PGdUMmLEsiW9EsxGqpSe",
  "key1": "6vvbd7GF5Zj9Smxd4eFD4t7b17jyHnzKNazqd1EL9GndkNPUTu2bzzmkQmtqMMi7idsQ82mDenBsNjkmf1dUE2R",
  "key2": "4GUD74aypDeZFQdcjqyVvPdmLqp5NE1wvYCZz3yoKER8d4SwVmLFguYq68UZ2utiD6AHekzrxH8B8f6kTLJa6t5q",
  "key3": "4kLsa1EV6LzqRbbr6UYfwEKP5uFhiZevmb9bhvc4f1K6ctiJeZXfH8bEaruxHu2hQfdpzyuXVA64dr32RVg125gi",
  "key4": "3XBL68j4MprRVhcvdi1WEtiYnVEEcz1fofnSAidE14xo2mQn2ixmF2cxWCJM6kuP7tWMwXBX84sc1JprRQ5MK47n",
  "key5": "3XVn2KK6ddo5Wfke5rAo5Bc92qJZ3JikLq8Dvg8ciVZztHpPxkU9Zdisok3zikV3fA9jC6fUFn1wUNZbCsjfJJdv",
  "key6": "2FVCsT7UWSTyXBLrn8NKzvFGp55GoMngdi8gZ2GocH4ombQ1rYLcKZ8udNdznz7e4Wvv89dXsgLpjxAHv6azurfb",
  "key7": "3gdNeQtYVRFo9u2K9KrWBZ7VS17z35tzXvyH4vXaysCdn86SGTcunLDSBnm4QMh7aDgrANeuYLazispaM1Rj8Cw6",
  "key8": "4P1UDNBcivQLKSxV4u3d8XD9erEju2TCAC6iBxj4fFwbzJvuqyhbgCrVuv8UyHaaCHg5bREeDuMtAFmWStvyw29D",
  "key9": "4ZFVeDgKBQqsfCthWq1Y8CcuxZJHXba3pKWkSXsr8vBh5gSETnVrxnUv2feZMpCqPgCDXnU6w5YsZYLDTU1TZhvn",
  "key10": "623bkxszGMKiSrTDfYZw4Atvx9wDn5yMRHaZ5baPXec141w6KVq8cAWjLY82WUSHvHAHAz7p7mX1h9mUPrvRWB2P",
  "key11": "4u4KzNcwMewJndWUFZbHvSjRtHoJFpnehjjhR1hPCnud8vUQPXBg65WQCV66MeFkFG2zHw9P7Yqav5XT74HGTccz",
  "key12": "2MaYWCKhojkCgqQ3vcY2ijuSzL9vHTWLjRHxvuRooYkWhaPYaBaxfcfWaqz5WiW3pp8PqWF7HWTNNcr3wGZ4jshp",
  "key13": "Ycje3Nrm5hrpMhUPMuXaLWUjoXvC1uE1ff7MMhtncXEoycCxZhxczxgcyQE2XbmedFVM7YBPK3F5tr19Y4ewjMY",
  "key14": "2qzjEFRm9Ta3rdCYLb27tJX1EfBxpsPK92vF21bj7u5ZwjU6Ge75a5qwZmeeV4zpbwMkHSLxPbPJ4qJUATtSMfXx",
  "key15": "2KBmNt5UtQy4ijumWtzXFGr8GpufVaMn3kufYwCtnChyApHnjXJ8vo3wKDnRUnAkFzbGp4dB4K44XP37Ec1Yae8P",
  "key16": "4HmTdnbmFToBVwmeJmBbHZovX22xBQ7iP3iRspVHAza1iUCBJ4Xf1PTD8QNJkTZH9jh5fuM5YyXqgXw9cKV2ZNHn",
  "key17": "3BhdhAL3iXtSa228rUZGAn5z2Zm2JR7TPVcMwLod3DBw67txJG67P1UDNop5sPxDr99TGD2qS3uGgQwGtEymDXAA",
  "key18": "2AxxmaHCYoNrPy6a3RmiPqUSq4mt7HcFQhWyyPhQmx2rjuTC6ztMCkwgu8a1mgF2RiFdtDegnWPwNYSo32qxzk58",
  "key19": "BASESCpSUsqfD83rW7Ngcs3dq91TV9xDMvJK7C3DqfLth4PPxWNCBX4yJuQExRuLeVC1kKrcXJjPEpX6aJSqHEC",
  "key20": "kWrNKhaVySztb7yhtJSchyKJtNLSAYHyiDFAPQ7mRxcEQysfofWVDa5fzU2eVCSR1gsyM16LAqskhet7RNg6Ecq",
  "key21": "2z7kpS2BUPN7YYErNobJVB6vnPj1VjLCETsTaBUkPW1YDADQ8adhNc1xwYjbDr4qdDK33vPghrMdXqLLLN2Q7Nxg",
  "key22": "4Q2iqiBKD24jomApHxmLfyRPV4j6VJ5UtbdoqPNPzUFxicr2mciUBaiSe8TzVRoStvyhc5oxmJ7xdcmgxKsP13qW",
  "key23": "3X7AkxeVCRX7P4aaBC1A1WUzxZHEp7WxumVgwhy8xqMhxtzA16GgsrUjWgZmnJN4zVXXYvjmPRcjNdH3cuHkLmjN",
  "key24": "46rELfadmREUu3Z3z8XXLg4sTQrHhUisVXjmrvzP9iT1XCgKz4BU5nuUCmPYQfFgHfaN6Z7FFQRcnw7Ns8Hp7SUa",
  "key25": "279f2Mfn6mehtKnSS5kFUjxMmNTBDZMRxTx5WRQbT7hvqLKnFWHr5u3dNaFph82PuzxhdmZJ7ubQyGxDPDaNbjZ6",
  "key26": "3PQamrYB3QLxvcEi82zcy3esjGAqXL9G2m5Ug8E3bafUrAHNVteNpb5L7Nnr9vkonvqrP6aEfL29ucYuAtCimEKe",
  "key27": "2VMF4mbsRB4McoRWpHJ7NC3mQQfUoyJJ5D4FiWSjdkLgGqZ89RgtFCVEKPAeoqTk9KQK6XJkydGJ7NCPcdwy9Ma2",
  "key28": "4XnmwfiVifLppRM8fnyTinTZMbzYj7zXe1jAVSWvvqD1ASrGqaCckqVGGiJsH7ALPC25xc5bGAdwvKKndXhfzxFq",
  "key29": "3cLpSUWDpvhLFuh7GarLARzmSrJXi9bMmwfpVSEp89zNhsyq32bB2eBh54WKwHJMr21RcYB927jBp52qSaBR5g39",
  "key30": "2yNXV8QkFk1F7gpnqPsn8t5X1xHrA82dhJAvm6DXVhM4B4ijMBPW4k4AdmrLtbpYJf34bZcdoKxCyJGUjk3TvtVU",
  "key31": "57rN4BdyZCTKxNW4Sn6xZg63oUoBVrJjPSoNEsbpTPEATaygEdKHNnTijAj5hPbz4pz9vamWRkGQ8w1H9yk2TrP2",
  "key32": "5WrC41yF259hSn5X99ixk51PDpe1Sihnf1mGvErrgvpKPs5SVe8uT1qb7Wf15oRFjTFJsLzJkhXX5Hx2K7tTBwd5",
  "key33": "5fPAHuksqVaRmUSwDsuQA6kf7ciDLuKBVvQcZJZzHgQ5zRHk6oLCRbWR3FegWFchfTTDNNxF6UjW6RfF2EACGvuK",
  "key34": "GYRQEH6bLDU5g6Pc7ZEHPYoGKzG9T4fhYPEV43FtPScR4Gz5yAcXRdAy2i7mT8jVmMX41BWhRDrGuDXvEnnJ4wn",
  "key35": "3pdGEWBJa5Gu1r2xbpGwouFQPPgRWnp9VqQAefc7owyVHZ74oWDqogH8qnKioeaNjQPbgkFnN536iuweobRse2hb"
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
