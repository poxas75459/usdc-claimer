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
    "2yrPVKkSVeqbYuitMSfbpgKRechxRgQDyHBbSjAo7LH7nMBS9cCLoDGfEpQatn33RasqDVVQdqLvzupu2JxLTVBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZihSqJZZcxniAaPvPNSpzHpTu6Ec7dtFnSYVybvKiU4Wv29raxTdzkBaTCqfJpMsJ6e7Q8fqnNet8JSK3bbWE5",
  "key1": "2mdmi6GAQksxjPW9LGfQH1hQEAPpoBpGPABzMGFrCYxAjK92EDanvZHTUGZYcEKStjDLfjS4N53qECaCRMngWcaU",
  "key2": "5SA7W19HCy68ShrmvKBoQYUcsbzrrFTop3x8wN7RqqPMbSEbiRcr8phehkkcZLGXBCgWhLiGDaoG9GPwMn3t7cne",
  "key3": "29VmtMXGykdk3CafjYoSQq8afF7oknZ3L2G3V4RcWp1KzL3vHuuxgGBfFPwqzz3hqKbpfimrtGZYmEknjZLV8EWL",
  "key4": "56jQkqWCg18VpQvEjak4ke5VADqxZmMa6FqkzAnfLqvPcjTv2gRjW32WACjbogcgHKWyEKMfn5RH4F8LwosRckFQ",
  "key5": "2Gc1dZ1CgKheHPskBM7f97TyLT96uv98xQjeFGcfcPFZFTwdQFHJdu9GzsXnXHXjroeCbgdm28eKJyE8cV7gTaeX",
  "key6": "9xS7hxVp1hSMXj97G4eznCLQm5PmhUt2s7meMVh6jKmjRxTP5Gc2rSx7vcmq9r5XhYHtutGYn9bNg6bxjxrXyeD",
  "key7": "2q8kTAH7Sq9bV3B61uh1E6df1PjVEyTVoSoJPwSXvvmqH2RhDHxPgpcT22Te1tBDnyRvGU373wtQdgB15kYog4ba",
  "key8": "2LvP3RwSesjmJyhPpsUZGt9JBnADDY7ccEgvGDWT4PqQ6HkEv7zTuVPKab4kipn4G47QUaaVJQTcN2kPeBsXGWMw",
  "key9": "o17pJ2De3KcxQWjk17rTpigpz4fT2NVuj4Wbyu1Qo2nvZekP5cSdvQrhPP3wN9Lw6DyyERVqsyaW933cxqM1dr3",
  "key10": "2MHmDUQC5X2xyY4NztQhhsyxfAKrHMwekufbdgW7ATtYQtERRp6dzxazJnb55JEYwXFtqutX99GotpD3YSBv4Jd2",
  "key11": "4ZXKq91C679EHZpZcz8DgieHHb2XXBFCwmwTcuP7fV67ne2xk38hS89ChGHvo1EpXrQsdWYTGWRN7MoFXxhVu8BY",
  "key12": "5aSmWp7usK2eSyAhxP8dyiDFXe7Fvg7KbSq7ts2zGL65BPQrWQ4WPN8Uuptunf1eMxrVGXyzc4WoGQmLv855LrHF",
  "key13": "5iQEP8z5X1C9C7QVwNxFYVM8LhsPX9s9AF7DsHpM8ZCVxwRHTsrbp73ji2eDCG6GkoUPXnBFBA2CVz81NSgkn3SN",
  "key14": "23UfkympRwRHcFh85noxeVy5bfxK8gfkFi163BJxjG9Aer2S4onwktRpBdsBrD6pXfMyiYv9fo6cpTSTNkumxqBj",
  "key15": "5PbfJBvDo4P7zF6yMXmzVGuJRj91DVK6LhB7YgRsy7f5A2a7faH2nXihFShj2tkNS42rK2cANDZzwPNw3EhhXnap",
  "key16": "4wzKMD84kgs6uPQUCcM3rG1CE8qyqJXrcADcygRyC1JtdsmyardyRHQZ6uCoXAxswzRRRmbqKc9dr8QrsccHpVjP",
  "key17": "5v6DtXwEwWZebrdLzdGkLLxWzAtdScSs3ZK39aBtZgudcUKhFp1ycUPEFU7Uo7rKzCv2cwKuHc58U1k9w8A1vtdB",
  "key18": "61Jc4npxSLUay9e5d5NyYxL2dnYEyZoJdQJgFJCbZSrpzc21agC2PhbLCztkN52KcaMqEFwdh5TLfpA9pRHXCvQB",
  "key19": "4QTg8UhNhmBVjs7rVW3Ca7eb2WSa4n2uf7XKsUAhi57zQ5ZEjkSRzQo3kboSsTUhys1yhBSx22cXhPHSUSS27Bpu",
  "key20": "3JRXcW7RPddPKYptt9gwpVNLZz3wo5rvRUn6PGb8V8R6besoETLDyV1jYyvpz4tomUZXk6g9ujV76cpCswTwK96X",
  "key21": "4kPPgVVaFeNQ9mTpfdPPFpaZTwT1jGoGwEhSreqo2aMGgdSPjKA7BHBM5MwQghy6pwRLpon5L6bTMvJBBisGfvwQ",
  "key22": "D6NU7f2R9SkmkrammwUw6CeGyT4FMMwiAFmavmRNDz1eGxDkAfZv2yLnhgy9kWovb9Xx8ugdTnwD1UVuuL1XrSf",
  "key23": "tErFMmYrvFC3LBW6w68CnFBRi1qqNH9bcCivhizDctUrTCxgpUwBxoy75cik9UzFBbk2DGuWHEkRpaTSXZuZdG5",
  "key24": "R5W8oUgfdNSn69F12QTBXtpa5H4zYgV7mjtzM6wqJ2Q2w4fqWwvDrtxRpmLYF2k3f7obpepQ74A7ADLLsYFYf2e",
  "key25": "NqqW6qEZ9T97ZhXS845X8uUMFbY39ik2NXgRus729R3M1vFWLeRRgqmy7Mhda9Suoo4zjywLVuPGz22bPXxwhZx",
  "key26": "3PnbvLwQ5KhrENeS91ZRJ59RrBR9WS8xZz4Fpf4j2CFtsvht5951WrWyJczurMQAqknZUAnUhYj4Kk5rDBfzPsN6",
  "key27": "3zEzHPQhBmuysuEmAeQSrrNoME4huWorwA9SGYW6YjxHQoG3BNnec7w4ZHR5c7VwFn6N1XQUgv71xtRYPg8m5M2X",
  "key28": "5y5Zm52DpjGV3ZCzBpujFHEXuaoshw3fZkV1iMzWPbK7v19NxzirLzmTcr9hniBKyTy5NP8RGjQAM5jJ4oxCp3Rr",
  "key29": "5xsDCkQtn3hcaB8kce1DxnnQrNF6HsEkgErdP98jd98byQFK2LtjnLpBzmxuMtyoCoWLjzUqHoPAvmTStNhRCqJx",
  "key30": "3r1DVaT5dWaihKox6KLyd18kMy5XCdCmzVYWPoMn989scz8X33FJjZyyM8jPhe6MF21vH4wJA7KZVynrEB5FZozN",
  "key31": "3XLvPhAcH8AJQwZbKch6ex2e6yDCRhu889TCcXRcjeGDfM2Pnd7Psp2gTbTuT4Va8yD8verxHv2GvuNM1VCGwqnB"
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
