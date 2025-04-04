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
    "4i8QbaMFKNHfheAqgSvJYTbUfoddTYgtiWbH94Nqb6rSZpQ6HHn86oZc3zPh9HDJiPAeNwUBRFjG5SkJw5YwqPut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKgkcRZEMSzRS5trqbH6tqoNAE8N1rvbjyDY8jKHPZjqPeKN76DsMcAYpMn6RKZ7dwhAMTheFe5ykVjFXopG333",
  "key1": "4EasEjdiixXJcH9H6pM4cyUcKTvNihV7Nfpe26LbFKmYEc9iasFrEoyFk4rV7oFbj4KEEdVk2272CNiBB6UaFPsf",
  "key2": "2nhu2sHRBEjeQ13Lfg6DzbaUrFUhWshyGBtiUL6gKnCnDAwdrYHqnzsc817rDBhSUcPUPWnDwBhCMbDeVXHofRJ4",
  "key3": "3pQoAf9MGPrfBWQi2ZCjiwiiLfrXLWJapsu8FURNxCXELvzZM4VZ5JQXpUB8eS3KHLZW1PBdyMAJoQh95GzLTMWF",
  "key4": "hRb8rdvDzPx2V4HiwBrpCNkVNANmkokoJ4tnUtvtDSQtkjqhcxnnAGg9cnUGiZ3mRRFa1PV9XJEKaRnLg9HKnjC",
  "key5": "5bBdLyPDH576JUdHiTunG9XYToyCC7Gyma1e5KW1peUhdxzoe6nNqFkjqgNnNj4eCHZz3ku3kzfJwQa2KMtJ74t1",
  "key6": "2suu51qWDSCwj6KT6c4rAEyhyXy3pBjx3vMMZYpCurM79K4u8kzWDZ3sfnUhT5AscwQX4GS6SwrpgL4pKRNPsqMk",
  "key7": "4ZYsL88pJ8YpUJdWpsokhe2yxC8fJSCrkqLD2nSVbCZNUASw3QeLbiN3qaPnPb8jQmTHHqVvC2TM2uJwLBAM75Hc",
  "key8": "3c6hGGDMCgozqv1j4fWoNfeABfJNzoqnG4yfPQsaYQWFEEQkKMAtcfiK9C7us7k8xemZcCkKvpcjTMhvPgkdJunZ",
  "key9": "FHbY5xo8MtCJBbgXuhRDd64YPNpkcy9zddvNRH9sW5jkL3BVdtbzJf2oZNfSsVt8nnpBm5T7EVnMLjeHnevAUtt",
  "key10": "4afqxbuCKTGm5zNCZyydroCVSa9LASoyiYhcHDCC9bTuiqu99VbXL5L1uyivwxpDKDR4cZG6x4hKFybToNYaGmJa",
  "key11": "6LXyxGefxBZfHUUMnUGcxVm2DBavpn9Dm9xSux24yQapRdHQiWUknqEgh3oWAuZhXPyypFh2jF6xaNLNgAPQueR",
  "key12": "C5oh7BTtqieEPQSCnQf8EnCRQcJTmjsnJLVx8ceoHXL4cgybeHcJVup3AzpLQ9HJGaSfgULo8xA9FiRkGYH1u17",
  "key13": "4bHtxmyGuVSVw3NS61ZDavoWcNQMq6KSYYBytrHiAQJdXro7Y9iWVZcoLKKYJEHuruG8YB8f72L5kZ7VG3D7Yuxv",
  "key14": "3KWiYmueqN71tfV7DWvwGETtU4aXGW4eLsfEYFVHpxYghHXMrRYiuKN9HeQwvLb2QS1gfP78jhYy3GVsKUyN8CWS",
  "key15": "39Q25ftZQWkgbpaq5ebPJ4EWVPBkJebvZZPPtUH7Q2sHfoZ5vvA3PgD5ed1jHWf6fA2iNoZ7uPLFGNptAmAn4Gyh",
  "key16": "2XoP6Rxc33H5J9hXTv1obn1HK9QHL41aDHKnUD3FsMa1HtWr8ukG59VveePYhVa6s4cPEcjaaAz9or36e6Fzy7BM",
  "key17": "5jMEeyYT7hhchKChfeh93qoAR8GDvvmXajGtQfKN3UGgu2uGWpg2NSKgqnWkhvctaBP31neZDdZH4JCGK1tjtaUK",
  "key18": "24huJjYo8rakU3uBPBtFi12pUHGSysczFTA1VBCTRbQ3KFW5yDcncpgERHCZoeajqXp77YSwbarc9UM67p1GfRJB",
  "key19": "3zhZhpp98CGWo4RwjUkT5bJFHbRsVyC6imigDM9ebzECGa8h9rzQrKCFXdBnQFqNQyx8L27LL1DhHsQ7YLobDCiZ",
  "key20": "4HQq84S9o9XGwif21eCEMpp6MZ9GrYoeJjLsMjzJRWXESkGv6HLFxGQaVwCuicxyCLnSsvv8ELRrpfGFi3RMQXcF",
  "key21": "5rG4uAQfNoYbSSKQ2yDC1NqAAHfgNGZ2BJaC6A2izomGDLepWoU5CXWNAUgvFJ38e4kDTTHvKH7KXwgTqCdu5uqi",
  "key22": "4MySM6SmqGWp6kSe6YqDdzbDN2AcaMsFBKvotqBqGNjpWVNqK6NdLQePiWywatv82JDHqf4oehGsQ3PF8AoNWifv",
  "key23": "42wXFeYj2SNTsjdQMKvSTYe1Qg94FAVyPUGGeQwNMF9TDUVAGvJHDkT9Fmd5Au5Fc7JJc5r3PqYLLY34ZJ4H24Ah",
  "key24": "4RDpdqr1GThiKXbzQfwMPv7zhfZ7SMMeM8mQxdrPfbrgNnPCK1dQvHvS6UsgTUkEfWVKvCvnyrH3NLTru9snDjht",
  "key25": "3s3x3Put3dof5fBHRd4bb82fN7vdsJFqx5y3pmfMjAd6Jw4tXqAb1fMVPKNUY9cAunakj6nQTicwKh6Rb7akcEoh",
  "key26": "5U3Z8T4kY3Wzd92Nv4srg8v39nBLQdvfTSP4HNhyYjejs2p8iWhnwcge2SW9zhd5gUkt1TVVcq1tD5KsQB8wbhs3",
  "key27": "3nC1T3GbUMvWuzCaCgrd77tUV8bGkrBuVGVLBxb3MAYarK5JBXsLSkQQryA26w2aV57SHji7wbE2qiMrZB9q324i",
  "key28": "4jMK1zwbWKveivw4nykAoxnKZZXGehdLpBguj8zDEVF1YcugWYkUiLqqvrN9F6LbqEjBtVZdNbMi6QmxCjojk9hk",
  "key29": "QcwJc1mjUgKwXX9xoyLbub1dojJPFsYQw1gMAYVNeyvAyviDb3DZDqnuXx5BBojeNj4bxD4Agw7DmeRdAhfGtgf",
  "key30": "L6WXcjG7euaSkEXXdffwsLVe8fzhCKAQ2NRTzwzK9HgznPoNQkWiG89Zj7AwQMaETDWyXR6DrMM28fVGSiJkCAq",
  "key31": "5sxzPSVGmAXBNLS6n1T5v9jZ4CDMjV7Q4BDmmboz6t4reMRP3Jw1xBnuSD6XhPn43Q67cfrLMXaHv7BjhcGFj4M",
  "key32": "yJkPc7zFW9e1eZsSikQ4t2U1sMrHN9bTgUud5oJuttY9phggBh3KDDragqacLGpnHz5NBigPvFYSt9GbZMLqNwj",
  "key33": "4Jo5J1womHYbGzgSRMXZ4CMYNvrAB2Bm9Q7uQBUZ8fhJWNSycZTUgmpUjZZX9Q9eMAWWnpGWiuyXkuGKkfZY4V51",
  "key34": "65TtcgUaoYKuaKTsKvNUVJr8dfPj2H1BgFZ9Xhcs2yahhqMxFqfzH3mphd66WFkyads4gdUnttLJZUyVRFvP4BNP",
  "key35": "4DEbhkXDLJAWPfGNmmPMw3NqCFQALyXhdu8ySYQVF86K499Sg1CtGD2eh9LJhanbiaPwxdPKeumt8cK4nVA1gAbN",
  "key36": "25Q6iyXfK7MjJQ5Vk89SmDCrsVW2cciTYpRBsqqfmp1maXdfAZf83iTkBucELvkKeB4cyU2FY8NxMbNTdC4k1CGM",
  "key37": "5ekpV3zRmGihnMTmFe4pnu9R1UYkbM6W2jJncwELX7D7GMhpkYVsknAj6rKtczKw9o1rHzuefxUVa5zBVYACCWY9",
  "key38": "4syienWyooPcV7vxZsVpApQqRyxT7zbGjBmsztTSzThfZXgShQKL64RrbsPchojB3DhyQTDfJ3R9Am5X21d7DKmP",
  "key39": "51TAzayieW3KGY4XXsXzbVskFoTQj18HfjhuhJDmVhb47f76A8eqxXcPjmuyyFAVyxtWPVPPLCLGYHBEjdWjXhef",
  "key40": "mSFb7ZxX5AM87KmevxThNi26R99AgzN8DEUBEw4YLJEGMG1P2wqSvo6TMtCiu7zp8xbg9JaZAAjqHP3NpoxanFU",
  "key41": "4xf3oyNJ3neM8wXEAijHcbBcCzjXTRUu7hHTVykTdwapDLPfyhnnsXuR5PaSMZZ4MqnLk1zaTRE8FxKQ7ZVVYHuz",
  "key42": "22QCUU76DBnKVSLDbFfy5ZTM4gMELPjzi4XqNubGxQDZSAY2bz1F6u5LXWP9ytQambkLJhQQb7mx6rEMCSZUgcy3",
  "key43": "32H2zUz2Zvvqqw9QgVFriVrC6SSmT4J9tZw115idZaM96bgd4BSNvXzd5MT91J9vdzvLXMYEGzWP9dd3LfttfjJm"
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
