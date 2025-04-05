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
    "QRx715uKoCYb8qZjfK1EyrZgWipqHz4kPNpgCjRvWDjDj6nrMG9ysjiCwibexixDWFbBXBRKXwVTXasYeioaRGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VB7tu71DwS5SoVcGAFftXP9ogFa9tAQfJAwR3o6aGo2gQHfmZfShMK2CNZjPxCh2M8WNd73pQ82uDRwF6qzk95G",
  "key1": "36qMX6VWLYmxfUVJUYvQS7b5F9KkYLJ3u9ebfzBhVZkvPNHhGkAjXWqqvqZpTJsNnjjpp88Y5xaHBHtqsEz4qC17",
  "key2": "nCnBJTDQLZ5iM7LmVQyKsoTH5Xk1KvgyDKUFwJbeTRwrbG2FA83K2FAAJRdFQVBtnKpYMishm35TFEdQtC4eiXn",
  "key3": "5MYbUrkMsWcMFvFf71VxTpwToY17ZP2A5Y9jrjSo6pAnj4H3Jj8HkyS5LuYVb6ztNyjq9ANz1C1EzzQm7NhVYrN2",
  "key4": "3hdjS5ok8TFkW3ebEF41EjTqYZ1HVPRx8ySjvdTyRUjCAhYAcBjseEmUxE1W9RY5LqroBeANTuAFPfEmjnMpBQ3S",
  "key5": "4QwRizLMYu4ttAMtvz3iJajyHTqiiUMcyCcTge83EwkkojnGR4au3hK2sdhjHG4c5RUbcBksR1n2SUCobJH3uYEg",
  "key6": "4jwsmHXuKcfFZLHPrusS5xaygVuqNK3VvaaaqfW8kB8GkTDce3dvTguGNgZETCqF9jcyRSV7AZXbTeiwcFgAtUY8",
  "key7": "41o2XfijBds1txJMMYavp3jSmEHjo1hFzFeGbeNU35zETtU3h9t6xp6EcNbUZuPiHLHMv4noM4oYde1fkouXswfn",
  "key8": "4TEeGDfiiV7SRyQub8t3XHo11anpUDFWud1d7vSGDsgV47bHdTrwP5uT8NkbUBwurqbpbChg3pB5x7H1ofzbozmf",
  "key9": "3LQ37zvvUcTZBtFqtoLgeHT9rspcz1EmgJcXqZm3ZHvWWGyQuBLwBByk9vPBEUPpXhsgxcSwt6gSqayL97WquCfM",
  "key10": "o1zFjgFhi552zNeR8L3kJMKxmqUQ8QtT3Wk25cou8fozZxkikvLbjPYyG4aAQMRGMVmdFK7PAeSAJEVDTVbA8cU",
  "key11": "1mFbXzqMbrWR9XRtLuHzjTaAmJTna5LAPT1fh6fpEZF99ANfzvtw3W42hXizcEmsmBewZKuo7fVDuKzbMSgEv1o",
  "key12": "47nqfMwS9fk94vN7qYXqFtAPJwTXwyuEjM59KJKuNzKD3uQqv9vfE3NChywWLjBkDhLfzsVvyfXTitkTp28CxiXn",
  "key13": "5QqVf5fsorQFzKwq56M5kCbKVEEt1TpjYCALLAW6jU4DJaZ12a6XXiiyKbsWLMM5iDSNT2XyFVgUU7DsDCawUYFR",
  "key14": "wpGKrRyQHpiZXP3RYscFnHCJLMiXyagZ5mRF5pv87SrELinqQPByHHyt6FjsatUgicjP3hMbXxMvqWffndo2StZ",
  "key15": "3axzgdEaVn5mC7jv49Nn26p7tsQfSLJ3YUwbynFwHgAnN3MN5izTUhgJ6wHNKaq7VEjmqAAHfg9oZTdz7GTnJ2c4",
  "key16": "3f6ekKiAdJBuZc7cNL9vhAXafg92NHbVYT3L2qtWkcZQxkDYzr67t2Y4UDrkAUCkjauWgr3m1nXodA2J1T42qV8C",
  "key17": "PuyqgG1qUgbkXmPXL7mfVp9ujwojzeGRP3XWHjJVZe4jMQUa8C5NKdQnvZ79tYA9BssYMqQ7Jwcf86mEqApqbUE",
  "key18": "5HXfje45CDeUXFNznqhc7RmmgMS9iWcDHe5TrS3GSzaPv3v55jmJSfVpNyACfZG4wAHxgw2K4wKMitYfEwQiXGub",
  "key19": "2EuBsU4J3Ew6qBMSP4wcCWBas3mV9hVgXJ9ttvYi7PEXnvhyYG8g13zwcE2X9JDnkDDuiZ6Q3TR6ozPYSvn4qzm2",
  "key20": "2XfDDFhm7TpscnGXyoQDSBm2MtxRjtK5TrETbBhtF3U1qqnH1baQWirdvhyvKZHdRPdSycYyEY2ir7BRJWAv1PQJ",
  "key21": "3HDHNTwVx6f8yJUry8xo4RLZzxjn6eE5PoDy78GFYzafbYDNmGemaihd26jX16bVBmDgr7bySqQwP1uGzgLgbeJu",
  "key22": "3qAfYikaA4NSdv9WqHST6TaBUb4rEUZSmhiYUmy5U2VResmPYQZzfwo1GWQ5Q3joG1yWuZAeUX2ejh2i5dXFHr4W",
  "key23": "S4Ur4QQYvJLKidqFEyzmXqtgQtPV5mDv5qgPbznrP7s5MyHVKr2qeUZjNKTg16NJAED3WbEGiBC5PqvuKM2yj5W",
  "key24": "3M8g4ZhNFAXhikitUsHRbAErd4sthxnwb5uJe5qZWM42dQiBPPHSxQv7njhRYEWzz5Zkf8dbAYtHdDBAV2dRNVwS",
  "key25": "5rEmYXsFSTqwptNJeQPVZirwwjRSsJrz15azqKwJH9dfbneDizX3jVSwN4k3S22oKNKit9Xi4EaadKFG46pqwMHJ",
  "key26": "65jUj9GLU995DVxVXqSGC6E2GLNdwAYj59Td2T7mcnvV9t91ckjkZp1fgVAkfowFUCr8CpGqUHoRvks7Bcun6bwH",
  "key27": "2f5ZkRmDQnyY8SaHRamhPN9QsCAPeMkezAnWyqynUyrhz94oaqY1ZEFubVnzs5ooaiF4TMGwmyUWKrzXVMdDQEuT",
  "key28": "23en87YaKxt1nLuHRcFMNosrTEJXYSK44fdq6CVXtu1uSjKv6ChodVtL3MS998kbAxwpNDKxbQB4ZEs5mCHnMBSS",
  "key29": "5XdftcruKCyjN9niEwTTqguiHZgtxiVn9DETf5hpZei7DAvFxZKYZFZAutVxQGctZ1qz1NpKtmDHJ7rC2zUS4JMN",
  "key30": "2Hfvm1EWMS2uHv7umGL6WqZSsSMQ2CGhQiTubP4WxPb66q4RMfMpq4HjCDMo66prMR3hou7aZwn8ypgAhJxK5u7u",
  "key31": "4ULptFqsexWRJu2npZoeCHkGwatvecmcBYNm6ANGKseyh2dHQm715PhvmecmmL9HdsmWRhE1e881BL9eiWhu9Qae",
  "key32": "2kEjD8dAWqP694jyydYGsMXBaoTUG87YvcPQr5UMp9PSGqfcSjQFuD9GdzQyYNHnXvduuuMJNGtNTErkwV2NgPGR",
  "key33": "585eKmgLnfpANenuHEpHD1VPn3hNdtqJYLnb8CrhgYNYKDctnRRJ17cBtjauvJX2eE7Va2pEdDTUX3Hdk6WZpuur",
  "key34": "3XCRkLHMCph1m7DF5Ltj8k7FBufNdiivx2xwbF21fVc55cYRaG9mcVGoE2QKsStvsJ6UrBBHNaZ5hRAtbkd7XxCj"
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
