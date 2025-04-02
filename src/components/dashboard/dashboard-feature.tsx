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
    "5sdh2th3uaEeNpSnT5eBDKQfpjEFawDdCDCVQZFdqxRBN7HxGijB2UAX3BDaZxtTwwCEhb69wwVLoatvR8eNQeZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzuMyAdqx7Xfwfcw4nngQoV6z6S3URN7qadvuL44tP7ajvBbDoXiNB2bc7GsyeBt3hMVq6BJsBVM9qYhPH1b7bM",
  "key1": "Ds7izsgt28UWrbZo77VVhydnD6e92AyF4nDn39Mc5Tf3GqHju6Wrs6qjAbc3P5wViM62MfyPyyzTfWQNL72KnJM",
  "key2": "3qdnDsGAW35PMNDMX5hSkF1NSCxQbgk9NKTqWCU4VLAmqtYjqdEgqc9YcAi1aPU5tqzTsQ3gfXj82eVX5da9saMJ",
  "key3": "2MNTifPCcP9MAB2kD1p36o1PAVYaZLU4aKJKLprNWgwwQKph6eZTrXyUVkSSJ3nRRiH6ZkKjneEcb15xxDLsjauC",
  "key4": "5gM3bavHJfqMPw3igNLFXqQG5oiiw2po8EY1Uop9LFpCqGM34BDKzKxXQj2aQdDgNw8RfcTCLxHxrawNx3oSCQZA",
  "key5": "3RC39EEeMopvNA9dVDkhqvnrNAuLm8CjMuxANxPm74GnUNhRQeZzV1TSB6f1acQdnCqstVVXFUJJe283wgJj2zvz",
  "key6": "4DAmXJWsZSYYPJjpsG3xEZoEp6AK9uyNdqDKVEnzuYUNzkvLx2hQR3ZRMi9LX5rhRcQwNaqiEf8WRBNukHjrjbnH",
  "key7": "2GFZAcYC3QGt2QiXpRSB8tgYcyGbMrGbkCGg5XNKqJmmZu89q7A4WB4HX231PpVCakz8eRGdmrqRzDXwvdP7fjsN",
  "key8": "4WXa7nuKtwBu2EZSwXMQfBkLXVaww4uPgPsh9roCDykjaCLKg4xSu2UXwSF64fovhCAMjMKqc7w8RKSAXh5g3AS7",
  "key9": "AAmA7kYNtGY1cortoR1n3eW4MsSSag5ZqD6hc3i56ozTvLorA8wedcBWfPjLABCgeiBLa57fGToo9puVoLwKcDo",
  "key10": "jdH8UjCmhUrPGzzr5x89Q2f4B2jgpJgpABQKjYnyKMk7WKjMev5XPCJvWAuH6BYRZkfsnxcQGhy3GdSim1wyQwH",
  "key11": "4XUiHE1QAtpxVEq3D3jghhhi9ruLhajHM2Spz6BH43PTVBCHC56rAEUdr5hgYiWEZnK9HBvfsRLSgBQ8nMrWkB6P",
  "key12": "3HEcToU5x6sgMBSEX46v2vzBZVB1xKy8brweviQwZF3CrgaUkB6Jw9GExGnJ3cPpZyKd8BsTfmQMvbjsk8yRNqxC",
  "key13": "5KZjukVpwePZtjvt5UDNrRVT96aPtAsPgwdJWCKDSw9VeBVHy2bNEn4yhZEiWEB3ahRJHgV2FCQCxiNZUgs375Hw",
  "key14": "5k9KBQQ2pB5Qmrc56NMtGSXqmjaDGHdc3EjB5BTGnajEVzswRvFr4hwLs5un68zBuDUko6GgqyP7ptxTzBiisLTb",
  "key15": "374HaZifjWkAsaxqxcCkxTmWaNfEgkjTSV8ChG2uCjYnaWMmnyb9RHUdLdFxGy4Lvky7FjAaph957mzne8i4edgU",
  "key16": "2r4oQbN6vbv5wm6TYJ6isTEBBSx1ki3HwXqbeEd7fsjPEs2hMYYSsdcKscbyWnpyN1nyoNeDGfUKTMNf43CtASn9",
  "key17": "3r37W3pNJaJY9tELuEPy1ciciQyjeRt1u5ZNCmGQSqPfPyHBoY5iYg4kCtbCr43ZgSvWAEXc7fk2kxNtuPTMUULN",
  "key18": "3qSYX7Wf5U8LTp1WhFdZAmGAVhtmtwcrDHNrsUjxW5Fn9WAhm55qkv4tmCg1chHtSDakPfnTsmjBupT396PmgeZU",
  "key19": "5WekYrzjmukfNmRjYTGkzHoEomv5uGNk3q81Xaz7FganosJ8JmdQLYYuZ8cUdLVLVZWRmhyeRokHQ5hm2NkQKgCn",
  "key20": "22WHAVaXBCBDGRGhbX51C61Xs3tY8U9w82hobPrMRWBXZ6q4P3rc7TgCfFbvFLXUY9CW1QhY2f6kee2HFJZAC2F2",
  "key21": "5baPU8kAR2AXbSiqkHZmi9bYqphVRubtfcisNE776DEHSjZqc6WQbw3sgnE61GmA5eHkatq2kYgaEoubHNiU4EEz",
  "key22": "rokDPjqZAaHWrKf8F4td4iZWc1xVecXpxnX78cdMpNTLHGgik9L5RA39MS9b9aEPQuE7TZsnyR2svoyKYA5CtNG",
  "key23": "5rSpswJyZBq8Mn6K3DTR8PrhQVBy9GqErUNVQBqrk7k2Zmfwi1KwVawWAnB919K8woKeYoSyHVdEqjGZcWmJVR4P",
  "key24": "4jDwxMuJcsWJKTES1tvRALQ7z34HX1XPEFcTNnG4qYuifArCs9TKas6JqgTacEhvghia21BDWhScb2NdRoQFpCf9",
  "key25": "3LgDhjSTVUqpaEQ1FDPFULepwUhNViG767P1q9nwEij5cc2UHtpACEsKHwD8F3geT3jCpTUpCoUZekAaA7qKWezB",
  "key26": "55SBV3PPt4Vg9h9kZJaKyNCbGjxK2Xku1h1vCW1yVBgR9pfoH8BfQkBumv1wdjHtRKufQ3ZgRaTzhqLbXEpijL4u",
  "key27": "3CRZstvf5vjGtBHqXL1ft9HVnECiEuwybx9e9ggPNYNVLjLpkspn1X1viYjQurqTb8x33Xc5pQufi99Gta3K3MTL",
  "key28": "2ER9JKZ3BZZ6GGoEvzM1fUMBjT8iMmq7SxKKqBBddfXBKy6ux4yqTAoU5QnfYWYRFcsUASshnAtRzaDBoDxLYenN",
  "key29": "44oQQjgF2fNKBUgJ1n4P5dPriUMuFNxnnDrRCECckS5Q8SRt3ttKnPnVnmRVqwfJ3rueF19StETbxpR8ZkHG4Ta1",
  "key30": "3ypU1ECvZZfCkznyXTrLX1WJGhcmWPQisTXstjCFbgYbp5jV8o7pYicY6TEhucp8i7BTnt1ggYMVrkkXGq4fDeZ",
  "key31": "GAQcvUY2T7noJ9jP5C5GHKK2fRmgwXjAR3MusDKfWVGM2f2moAUTLMiYtWUUDTv92ShuRC3rAfmNSAAfYMiXENn",
  "key32": "yFKpYN2Hsri44jKd4nTD5M6dtHE1qBadRpodAC5cvUfXuZrwaMekNY1m7qhn1TCFVH7rFBYVHJFvKRdSd1SRFt3",
  "key33": "4Kh6C31NMSu24YNA5eX2njSyrqCbt4YatzPBkUoL31MLnMsAxRJNFsLb96EHdGD1pU7rX5kzzbraXA2FPLgM1KMN",
  "key34": "266BnVXPYpRs6sUVcndqhdRMWq2JpxzwKapGPnG48cyKbgFABW6MbCRKZfMfDLj9weZ5qCJxTXLaB1Yyyk3yJrLU",
  "key35": "2AP8ALywLhMurEaPAtCMwdSq1yuePgcPNEFH7z2bCCvJErnei2k3S1cwBSJjjH8Hsac1XMG93FvcSfL5Wdg6Xhze",
  "key36": "4wYRWst6XowrnaHN3r2dPZ1j592EQfaMXvViYEsbhZgqXFuPaoND6hfPELZwNEVantzQaBCdWWQxvGVyNiYxsaB6",
  "key37": "2G3sN5SKy7GTjRWHgGAYDdS448PkMUi8g7ZTy3BmnUnMPXRUDTj18HuH8WcP85vQoYju8ccefP4b95V1QhhZowzg",
  "key38": "2wXHm9QeuYkZZMqAeQEvioiu3vNm5uU8PftkebYV3AXZiGefgCYTyJE5spENGtdPhFLzVJwm51RUJYbpMJS3CG9N",
  "key39": "498QKVk5DMCPMtAHDACwbivRHgFrdfDQQCS45n5cwekLMCsDpbcg7pQKKmw6REFbLa2f8ABzcbdkc8LZ8jfA3ZN9",
  "key40": "xF1fqWomE96tpPfn9H5wauBm8pKfhLk1buigDb74RgfdJvmm57NfSPe9zsTcUqBVVBDa7nAohUpMKZL3FneUhEj",
  "key41": "2v4n2QBYQaSXaaXewukyVWk5jU6Eg6QCb9CkjzJjBfMvmE3yjDvYdLqjJupUcs5aXQD4zKnwrZCT3bsXFs5GbRxW",
  "key42": "55bFRUu2dt4uGVhZqWyhjBnUvwsnKrv88x49n1ACuTQc6isrSPGVjD3t35yTag3zLjshugDAtQW3EQLbEVy2q4ef",
  "key43": "4peLoo34bv1DZ4x2M3V7usheHz1pPzMJWegpSejSP3B29mSqkVALNG4PCcPdTYxZSnGdZg4a5S5g63eXanJWDiuj"
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
