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
    "Ke4VBBx1PJRww3riULDzpzUzPhmFEEwmMeX9nq6JSVjWrGpcwFm9KgzR4ZJABn4f6VMRomeAseEX9M4jRzcAMGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqiXPdPZfCu3f6hYoprGfyf9cTuVetQ3Kfw7DYGWCuTtaoUMk8nA7YeV1bK4p3Zn3TbeYUs8gko7QkcrCfk6MFY",
  "key1": "agyDY4HEgo1LxS5hmaHpJtFh34Rd4LrKWKNZMsELipp4GPZvNK2iHn4cK5FpnxZdAT4x1u1XU9m4b4F24aVGjxy",
  "key2": "xfY43vEYJdeXVo6dSPSFuXZrx9Zf7Pusg4Nk1CCFYGy7BRq4izfNP6jxe2yRLdXEUbXNVwRmtGV3SzHTLLNMbDK",
  "key3": "2Kwu6kEUte32tU4W3hoNqs4LL9PhxGvFsBKtMcVTew7eqJs8fVtMAYjgt2q7FjAQe8vfnHsQHvhpdbbkxanoHuv7",
  "key4": "5BUWapsU415iVxhSr5kdE1ZopuE9ne4hhDDFoPf5euoPii4uVLuKafGiwozLqEpjJCRRh6nVww8ZcXGGDNErSQuJ",
  "key5": "3VRED2ThgeAAirpJYCe7997pZ4GVEJNgJ4P47kjgjVbTJVCeaBwh7h3F9mRPxmvnNvz23uXuQeJnHBRNJxVHNSfA",
  "key6": "2vRKFyjgmLMmoLvbyS4CJR9obJGWJ1TuYPXGzqSwbWHb9psdxis1GqaULXPuU3cZeUp7Usg5JSM7GUHd6rwUAdH7",
  "key7": "2torR5nM9W8FVqQCRgGkCS7RUjF2VQRXJenGEkR5mEKe1EQwtH8f7QzQp8t4vMFi1d2wAgXffnTKx7sNqHZQk1Yq",
  "key8": "35P5WVK2r8NRwSjACfstWLTR82KavRyckkdRqQCebfVryqbJM3s1m2uc8yzJ64PurNrJP2dpSocXXjwKJJqiSPGJ",
  "key9": "4Paypjowk6zJY8qaBBNYkEAFiYhQckW9J1kYKu5kMSyujavy9VHcPpPeVKAfK7F2aJrG6ZQvKtpExyq9TSangZUn",
  "key10": "3VSR3pZnvbNW9H43vGBQFQfkKAkwYf6dAQyKQQF5tw7AhrDsVh7aiMzmkdxtLGvsm5AtQjW2YWUnwZ9TQFy6Va1v",
  "key11": "4BKW58QHVZBwTZR2Y7RASN6pYkwyKbBccmZCdMivmUrLHqANcBF7BsRuqceymuaykhhgkJuWiuARjdtNAHVWcewm",
  "key12": "2EbF79hJVtm9yY154hBkSQqxKiFyS4FajfaWqAL9Zox8JJZb98ksMGtaQQsbebaR44KL4rZxLKmXbzd6csV6cTAJ",
  "key13": "4td2EvWqubdLKgtJERWthq5ENfj4SiSroU4JYWvk38MwKTtf7zfFgmUbPSgUSCedQ1nzqtP8HsAsjzP4X4tTh7WM",
  "key14": "3PjW3mJJ9mcr7K91UPzKxRcoHR8NWC9Cqb7FY4QR9yu4KSfbzAqG319HdEycwhxsdByAF1FwSc6wU72x54zaDEG7",
  "key15": "4jmHBfNvFA5oA4BP7JqDrnvrd69zYM19MZM2QFh4kfEkzZ8TCUiUDFeHs6ZuNnWsud6H8Uye9D7oMdMBiHwNXPE5",
  "key16": "3sfvRu8PG15aQqCE8qa9ckMoQxE72CwWReNnc6AWAzSHZhEJxZ32d1eV8mKKSrWki2ouMg6c6GcFMDT8qLFTMoZD",
  "key17": "5fee2uPKHFXzZMiuDmgcJXATrNJuES6Zta529JYcje16uNR9gUDubCTz1cp4VpWnQpJyKTsVHJH7ArU5pGiXHJL4",
  "key18": "2V8DVYLeNW5NuZptkfBQnDkuHCErWm9v4PWDswEJMSAPNcZYqAGUkvLMoZxyo1ogN8VxbAZ9nKodXyRPyJfZBz5g",
  "key19": "21hy4VXbi6vQPDA8gsLbBqaw3GxjWWKKD6C3GeAfDcrryY1qkeSpc54V8saLY18kGHXrZRmUZvxXnpP3f9aYqn1q",
  "key20": "4z1qSK4MCqueiwRomT5x1UovX8ef9RxLqqrPVNUrvS8HZEeVmDGiGdYQdiA1ddSy28jhcYVhQAQD4CfA3EayfTjV",
  "key21": "4T1EK7MMonZ8zifEpxknbU9JTgdPvkgyYkc3T5d7XuBtkjC8TwibeH8kmfnhnAJSfZXbsGPvg48J5U78c13RGZtM",
  "key22": "pt7veMn498jrm1AyMVRRPVg6gCmUA6t1MnnnuUubxvv3wbRQG2Vq2G6HFV96XdWzSE9vntBN9W3LsLeENZyTXC4",
  "key23": "28ju4aAkHmrZzU6QxAMFv74RNYgsLo9zMp5LUWYSEo1uBkk5mSCL6f3uYcycV4j38s2YhsY8kKCFcRAJxibS9kbB",
  "key24": "4gLaD9VyU14tjMhjFju1YGQe83frkKoh3HdznpSBYfaMc3LZFwZM9BYUGnMKFMJdzKfjSL25BWiHY9rCTu4w2bt",
  "key25": "5VddfnfYjNn9oPQWZXaCffdSYuSCWyZqoiFdjYjYunpL3gjhXVk7aVP3s2v6nLBSTHWp58J9T39uEQD66gQNn8Si",
  "key26": "3RRyB2J85sWkW6adYsYTEwHMC5YAe8dyqx66nqcrzazSJRfQ8EyodXtPa1afVJAUDYGS8wrqErdrSHhEUSeqZaMd",
  "key27": "4ScVU4ZvHzQPGgxhhLZSypLHW6k1Ew5qMpBaLP2jiCXcwReiZkwUnyaEowbzR9jARRoqDX2xVMJQiNRbj4sXB26z",
  "key28": "2h1FhdQwPndeQHsFkgFE4RosEoxymhcKUhptovrBXkLcgbbWGybeyjS3ocpVpAuQbGiT8KtXYCkEQGfQwWbUMFcH",
  "key29": "2jvapyzrRHBtzUgtTky3LfyU3LtZit9L8DFWSdX2sZePEAb3Ga4zonL1rrNvhku6cz33R41uK8yBKHAcKEEqpR4m",
  "key30": "NN76G5uL1PchxEk9JoGqo5Mw64NoY7zxj4JW9S9qVuJhgTvav2vb48yUh4KyDYfEDWF2hU7NTY4At2SCwRar4qw",
  "key31": "4wfw5DReD3131pjq4Ty3Fi7i6cHhtpMTDoEUePdfzouwzJyT4BqtudhTQNkChDCduRoTvW9GFUSXopqaFFpXxUzQ",
  "key32": "5DtEPpiL2XUBphvb1VENgkWtcqRKxGc3TSdyEiDuZGvkT6PbYLQmyMGgJ2tuVVr3gtC7xdUXrrgtgv6E1SpQGQLt",
  "key33": "5L4ZDWV1zEwXTWqEM7YY1Xapge1778xdDQMDwBaJugq2z1vZZidQdJD1MdM2yr1KZv6Z7VBfbJqsHVagKb2rTPRM",
  "key34": "5hN2B37icDPMgN615mwabAuDwxxEuWyTGSLPFTV7piHUrTPMBsXmcoi2QuaWJMMrnEXfBRo3YtSJ7TstQLg2KW29",
  "key35": "CHsXjnsQCXb2vfxuCqv6ynBuKe73Mcxv45oU5KhNx57My7yvMJqomm2i9CEspUcfA3JgqHf8gcDmeuKM3ubZVt3",
  "key36": "2c424bo4MfJiXDMHtS2zs1B8tH9G9uDYESkxpbNbrLibRa7bEp1THwuZkKyfNybAMuvuYWyLjoZF1uGi9b5uuUJb"
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
