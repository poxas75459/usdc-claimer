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
    "He3dkgzyKRtxMD5Yegd8PyRTz5SiJHxSj8usR7HcV65ftqNiqieSEVaC7JVWtiLhwT37x2YXJXUdxRVVnjB18t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8tC47rU1HcT2EnkU9wLkxr3hYaiD8LnnTsVkMVajCAc4ReVyBQivjT4ueX2YZNUyuJv34mmk8S7J93VpmV6RmT",
  "key1": "52kWSzD4uqZsmLnsUNUh6gjmPcFyhKQ9hST7Ybz3jFfy4tj5ffSgMdzHiFG1ddeUrRCon87hgTG2bLbETVgf1G5d",
  "key2": "3ZCcw8efgwZKmG5ihWKK5R1CA5pgVAhq7RhvsAwf6QM23RWm4ctLa7EfKUFtz7DJhDVdd9iMwknif7vtycUAgL4q",
  "key3": "3bz9rn3Y6uS7g17yJt9qfDrKBzfSWpN6G5KhaDiDGMxjyC8U6FTNP7SroLTDnX1wcuMAG8bcKuKz8sgggpU5ftno",
  "key4": "3m7PBiQsYPYcJoCaBKBmqJDk1efb2bnuWUj8iDutHmGLqnwcT5JrDaYNLuZPxyicxs8zBhVtE4WXHHiUt37wCQVb",
  "key5": "3MS7KBSqxrEmpiZFYd6EPGN37UxPuNVbNmg36HcPK77Yn23r3QdnwFvnNpJ4KQPawdFuniQKCWXKmWcGQzmyNun3",
  "key6": "5U9HNVzCiPxHUYzLfakgmVp5qFP19Ve4KhN8ztuZEx4nvPCC12Y5iBMu7doMEvQkXGyEfAcvXctNXpwW9B6HPA9q",
  "key7": "5w3vZkuGR95CFjXXRi1sV7EUMtgLpQUW7ApmewusWmc3ETWi4MfC669J4JZ4s2PJzexNzts3mjV3fnAjoEfXef3V",
  "key8": "5xtfLUh4e71cndgiBiHtjUUMWW4GjGKnUdySRopqFH1QSq2o3WZ7dbar65tqUUYemMZ8sFuXkqwxhejVTxVH92VL",
  "key9": "127Xfx3vi57xoETDAHFD4X5D4ncJF7MAeQCDaeRzQUDJHcKrPG1SzAnYVBBNuKZWATPC8SySRfkxECkxZURVPawK",
  "key10": "368SytdRJFkL4cYn3GXqY4hqUN3cKc75fRyY9KTpm212yJmc6s5CjJM9UkxCdmFmPvUep8w1Zw33n4r6jnUdW7nM",
  "key11": "5bGpzAKX7AUGa7RsbyRvufi6td6ZHKtSjtpRPhQrMZejwWshbYjXzC9wB1G4kU7L6LTUVkzNosXKocAkutHFuPxj",
  "key12": "44fS6x1stiQfFBnbFhb1ZzZtXtwgeDd9XJaZQWCv1mNmZ47HBGh8Pjw9DVYoyLDUznTWTt76t18qissTwQDgn4p7",
  "key13": "5hLtm6qmzAoKjoKmyUc7hV3PZGpBSHFQEFD4FjnDo4gjRQwUfvqUWXAmsqteBnZkZRx691iJb3YEUg1CZBbKLFmK",
  "key14": "2jA8zK8KTLdMQ3G4YSaNvUX3BmJyUPwk3oYTYGxQoZiRd92uKqSZp8a4kjTMAjcvN56cHghY4r7fWQwjirpBNyiS",
  "key15": "3JRqaaSSUNLCCrWwEtY3NFPsbAKZPRoDix4b9HwBaVYJiWMK872j1Cv4kwaoGrKGbYZLnqvJCKpBvfq7PKV4VV3N",
  "key16": "5ATkTXCAB71Z2nusp3XDAv247z2TDaraUa6HaWiNwcQFPzr2zUmLJCk74tcWpFQJWqsbfuDe2mPYwXjwWYPwzEM4",
  "key17": "4Ccw6KiG6jKH9XDbXsJ3EBdNpGP1NDUnjSSg2EBLeS6PvuCDBD8GezrsNYJNxQZVMSs6hYREYsgZxQKN7ShZGef7",
  "key18": "WF5ncNvwQ9hbfTm5ugzLupBYJZuUv5QeLgJfRFjnrEh6eFgAqb1myfGHj7uKSJ8QGPAH19B5og4DqAHXfBiAsy7",
  "key19": "HipcxLdR4AHzxCHhZe5HiESsFd8EXpkjQoV87pjma2k2FT88kYmHFteaiEqj6Rdgaqi3BzqSn1rHrdrUFo1eEyJ",
  "key20": "3S6eBRL9LaXTHHdrJFtmenNr4B2Z1ZVVoxnFVgo3YErP7J7PdNcDpe8Jw351TfvS2BcszDE6PogCVSKiodnmKzaz",
  "key21": "4r18v4ATKWJupW7KJxhPyCek3bRSXAqQ2yXixU8JVWVm5qM4gqRTY6yg8LmwrqGKYzbJXNsZ6gGKmnoJWSfauyhg",
  "key22": "4fRDLaayAbP3pvYDavc9upnMXXj8uoQWU91AGVNJE7t79nMBd9zgvr2J6qwbRTzx3LWKbuEpwo2KdpxdxXXZ2ke3",
  "key23": "4G3AB1h6q4X8cp5yDM2Pe6sc5YKz7nzhwt7zeQKQ7bQRtD11M1GJarT8LoPYCPCHvCKrD2DYkHC1iYXaQPETenuM",
  "key24": "i7H7Qeu4arYJj3vVUQLreda778hVNzq4j3fE384GP46sPQokXqd1CcF1TQ46vwsnxDSanQ4hCJETHNsDE6Loyri",
  "key25": "31TGGpJxmVGNZNeQ4KoWh5c2nqor965vqBF94wPAvcPuP68fpVThvucexS7YHePFXPrAShc2WGyNXYpz4g7PW2uc",
  "key26": "36qZ1tzRYZsuaNptreRtemZ5bSnYhxdZju4F3gpzyCeUFKkn5beT4L9hwFGBXyereUyzHoSTGBdY46RDgPnA9K78",
  "key27": "4fvYjwDZTFoA2gpYCEbUpNe7DoGX1Fj29hDmEyujMj7qsuJgqpWu82QNiAnLxh23BY7DbKCGfvqk1LtWdv8VzhvZ",
  "key28": "45xLULYVCrdQL3poXTUxyMMtZwdZfrwXiq4dU3sYHx5iJLanSF7Xqw7ikfsFQ2tT5N8UWrpNdT82ECeCe62u4Zj1",
  "key29": "5rGuTjdrVfxB9MoioM7awSb3cz5DTu4HcBeYJEzTyH3gwUQkXLPcpLfhJGQPH1Pk5v5QjNpTCULvhXmyj8CgdXyD",
  "key30": "PgA6V7H7TwYZQy2hdUqTtMnnwC4pMn9y6FJMBpeWBgu9TVkiyEFjun6daoR7nQjT9JovGnon9yyyqNgNta3g97m",
  "key31": "4MeqPntQSnR3DhDUcbPEG5ceqvDaeFkatSExGDV6pje9SSQMYAh3ZfoZpAKShYVLSWioXEXu3M11BkzSYEeU84d8",
  "key32": "45mUqPEchSFeu1R3doYPFpMP8fBxwu21BQn2yW6cuHN9W542ghMW1PzAdBAE6WdHe68yzEgnFUk35tCbkMR54G4B",
  "key33": "2XyHEumDFRWxwTEcnJcHRYtCRskVWBw6gXSahuah1VZgN7MoQYpmd7HUmKV1wyeUQ4zAcr1E3p8bwsbKueUbJBko",
  "key34": "5BURRaWiqRWRwW5ZaCsvS5Z7HjNAkfmyQ78dokngSzZV71rx9iqhpQwS2Mqp9YHqV9rjr26LCTRrAhhrPcYrzt2w",
  "key35": "na5PbKsaUiWYB56TRYfXM2ziYQmcZfSJf4CLSiCtbVT1i8qYW7GMTnvkB6yJNh8mjZ63osbnuxa2oQyiybCBdbt",
  "key36": "qQiPsw34EwyXU7fqGas6vaSeRC4NASvAN2sDhHZiumuQ6qfmSSrkV2gVe1y24EcuRsJVRCik5aM5SLwi2LQDu8D",
  "key37": "4W6mnYzVJZPoaGWYDzGVcaY4gBY4JE221wGNKZ4csrKoAJahDo94L4v3c2t5ahnL9S75cfcrGs9uA9hDe2shjGar",
  "key38": "un3xKCRyrZxsPFN8dDm8K72Nq9jWKzZXM3asAVLMti7FkEqj5gu476oiosNHVMpZBTDoPcBc6GeBj8L7KKyxdFF"
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
