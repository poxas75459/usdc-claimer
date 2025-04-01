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
    "48RTfwvU6Zet7A2CkDtmnYMwvxP3YNNVoy1fP1TygGQHKgFaY5fTxVYmBXzwsy9jDZv5gqJ46VzpvMqAsS2mQ1Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PcxuyMdknDmSxgVC6q1TMkGuL8aCj4ajFwqL9u97zbFAVpdxAgNhjBdSHAadw6nRUVWXRQpjKEvTuMwzbD1XAG3",
  "key1": "aws239ZDS64NF5uuGQFpKxv2f7713Z31twmejTyMpdjG6fUriibgx4eRFyoH88tiCSmwqf3CT3ScRuTHS35wgTR",
  "key2": "32ymw5e3LXM5EpcN4F8B9oodD2RPi6dxxfwveC2eYVMYMoUCUXbPbbXaxpTBSeUDWQfkjUjFWzjPPTJcyoWg2iJE",
  "key3": "GFyxuXjx4FWHQH9ZEC7Y5bocGKwRB9JGFrB6kdg1fJhT2UACtqEVvMaNdqy3iCTbTJhkRvoLZVMAf6KNgfPDJ7B",
  "key4": "hkFhNftgCEaudj9rYPDDNZCL6ii7mhX3HsqzoDc24YR3N5d8aB6ywTopJYyVgUfyHJM4SwTjFQoLiN3xPeQytUT",
  "key5": "5vsX8zxktstS6XpFHw4hv5DncpnapsLHWWyt9Abu5mdXNCDHcGUzTuuyYSSWB6dQHUjrR2ioi9uePgWBgLQAfR6x",
  "key6": "5MhA2QK2EpUbhp7gT7UiPk9u5wK2yiZ9u28AisuQ3rwLwe7Sgo4ysAxxH2QRpaDa6BJAoe4iZPixfz8QGNHX9cCm",
  "key7": "5TXzvr5UJJrTMdzUmuT4t48xjJA9459BQG5uVZ6AGppbs3SGx4jMp5DoocRnwKuTZNbyGLjmb2GdXzy6rdcrLC6X",
  "key8": "38ZUdncs7STyWoCEG2uP6Bvs9EjRee22LHxUPu3wLbVxXmEwh4wzXXSGUc9nLuWnkV4kTrqc84oUv51xSGshU1Ej",
  "key9": "3phGMLiw6vdd1RRRC1YniSR6pnFTeMoJZqaUBU7a3kpM1S3BW4Aw7sgkoRjUCgSswGTBkcyjLWgMy8NjurC9X1pJ",
  "key10": "5bSyqWQHstSkRYDaFtpRYbcVvY3E2wLknAhkMqmTbRUYgE9EkQSCNXc87n7tiqWMsQLMzXbVSW7fxCMe7iKqcoW6",
  "key11": "3ekuqXYYbJXsY9CH2qWZD9q5sbf6GYMzRTWxxTWVeL3EeTHnJEyJGkFK69So7Db52D9LHy2RyqjzfpL1cS9JgSNb",
  "key12": "MJt6unzoMbQ9Ug47zHowLtp7YH6zPbyyFAhhhnTWpU5keESvykdFQ6W5rSFBgXyZwSxrjvZkZ8EgdURDdPC7YcF",
  "key13": "4H21MHFzYax2Ub6EofMRx8NFg4jcJMDXkRGj9PfD6FZSFVyqETU9JAACEsikX7EhLUXU1p3ga3Sc8QtN5eUvFNJU",
  "key14": "4p4Qfjj7hQULwqg5dXd1KDHzeFqLG5TgmwmtJDLUguEjr5mxXvRkpU2r4rtqa6H4DSMYm5otBt5Qb4XRiNn8Zx2h",
  "key15": "5HSmepczw2VMR3i8PiH5gJMof3yqD1Pcfy6ru4bsx3jFbk23kf3KyHHZ5DQCU85QLwaoU6seveqWgHm4rU5iKY8e",
  "key16": "3XrwLCnRompK6KwiHZVj9ph8zHALCZ9aH7SFDmu21GF56gGk6srT3rf4iraZPtV8j2MpdfWJorCbgEAfDpXPpVVZ",
  "key17": "5WgFJGKKtQdiBVqzB4h3PmK8LYYFwokmKRYvFZ7dpF16mi3oS9xvKHXu5eBT69kDDZkCaEYaGQLZzmcVf75eD1sm",
  "key18": "4uQLPDBsxRudRvmGUnJn4r9WK9kGqrF78obch7Lf3Z92ogn1rSVHbrpfMqd1a6x4A2A8HJEzfLWvKnBPrcWZdt7J",
  "key19": "3RvxeNLQVnL1XbYj9jZx6BX4v2dws8UvxhyUYchQFTjMoiEDxRXtTBUc8ksiADjkTkm8NKjZuo426H9oM9Cd5Sg5",
  "key20": "32h23KihTeotggupa9NGWXZ65FYh3aMQFhdTkQFJn6QJ34p76xrLq3gLU7dGkRgZKS6MWmw2F63DTK9AFRXBqMrb",
  "key21": "2WHuJURJabf1TzgCZfsw5ey7MDg3po9swfDe5mKwZxcHkQLpHB3BqzA7ahFUSjFCkHAVXLgJauhijxEkZxEpLKwZ",
  "key22": "2oKWwLed6bp7MXu2Q2FacYZqNdHaVjzUw2RpHrFSgB5DFUerMYK2ecQ3pNbXx61m87K6RqbiNzgWsuhZKcUuEbrk",
  "key23": "c1uB6XjiRP77jABMj6BwFHisfWrdAyGpentWmfo59TtUjauRXpPjHEzqgVJdXjshEKSXYMsyA5LuBF15yW6icJb",
  "key24": "5ktYahWsXKX6ja1UbxUzJTvNZckyDSmxYL7nUANy6ZSSQucRR9FDJCpzYQEaJ22Wd31pmYQjwNYYsw1tAwtfeP9X",
  "key25": "5skt3PN9dGZuEs1YB1af49vmRVrXFAtZRM19TzULEDqNrJC3pcEPqjo9V4Q6j9gLPMDNsv5x76ntmEJDENmcchcq",
  "key26": "5JYAH4sfAzcbrM1147wkDY5XwmfEvxZAaHCir1cFzZpcaJyNgrLim1CthNdjGHFvGibcBpRpmeEUQAS6rdKSuA5N",
  "key27": "6MoZThYrEqHL5Wb9Wxp92UaXNr2i4pjB28pBeGWHL9ERZ2aZojPsz8h43d4eCb5Gkjq9Dmt5naQL3Dxteid3H3v",
  "key28": "4uB9VSx4BD3whn38u5r8atwHKuoMBeqPsFLzRXVVrrR6rcqrp2jHkzPnnCBLErJwo4ZssPJUUJD3aB4bcgPDWBMq",
  "key29": "5j6W2zFzfLcLhDAHDbdCd98p4ewyfxMY3roKd9NcSWqZt4c6T7TtRPumMep8W9Ad68Kr8EugBG86xhR4G8av5Qyi",
  "key30": "VWAnUUFwaJ1gX67372SVcN7z9LhkWkkwi2sVSXd6ZMTBC6UYPWgGrYbGfF3zb4uQaiqybBZcX74PFrqpsZeQyDD"
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
