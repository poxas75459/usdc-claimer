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
    "3XDAD8tRLRPgdyww587F8ze9uWNvzRFn7hU599hRSQuWLiRfm421AoahZ5R3zqMREqDq1Fqh3vAYKdGw6vWCQ4x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaTtG3sqGWFrD3RDw8Ku5U7ievrTcPyZLhTKnhCYR2YpdVdgyGtJQYjfKJ2MZYjCW7zTJS9mJQZiZdLVmgs91nN",
  "key1": "35Kxwiif6gMALFGEwkquVidhWFdxHLV2RfdoU71BLszUrvbvPSG9MUzBPnLQ3hrr9m3gSEUApYX1qH4BCZD85iT2",
  "key2": "9UuJdJe9V3nFGnaWVrcMJCQhmmK2QDH7aKa5NpTqwFSNzkupFDWgXFwsA5zjSv9gBS5RweW92SxANLokDP6nzkF",
  "key3": "3Z4mkTMzM4Yqjq1Ys6zU7eskda8dJKtmWqLK4ByewrbomPdFm6NrJHupVWk9B3GjBoMavtehstPpAM952aAm3rTS",
  "key4": "4FcciK9ic1gpSUQ7fsGQSFxX9LHz1e6vmER5Bgj7ih7u127QcBSN3xvQm2mN48sdncPXkSDczxVnyLgxRFtUDhiK",
  "key5": "2ERpUrurJTq2Hy9DAvsAHpagNZwAgSrC35d4CrYYGAufmsxAHcJSta6a4tU1gFQPUj8JDCtucKvWkmUZTadvkA5H",
  "key6": "4nFhG1sgDKMB7f19DcnW1Hq2zrNaYjXc7Pm36HecJmuaqyMonPxmJyXzBNFmCCQySokXozZwXzousgg6QVhBb3qE",
  "key7": "4KYSDyFw1LZszCiSQ9h9hgNnfLBg69YhT6NLmatEnyXzqK2mYGMqQnoZ3Nzo6bhVMPYjrCmsYtawwGKxzMZmQror",
  "key8": "5PqRFx8MGwnQBNFj4Bp5VSBfaYhyT21D4KfcbVzjzuFj7udMrqN9sgsz1Mm6wHYcFRkpvQRFNFhVCxXta2uSky74",
  "key9": "2gr1KuhJjJiTkvwUuFFMatYzxsuWXry4zY658aS637ubqxppbVnxaGYQU8ENZJ9MbfPenq3pYzmVaLe8xuaFFuAi",
  "key10": "57uGVZgDpjn6dJmZNyft8GweQ3DvTAYtVioppfzg9vawcPKseHqTfojYCGVAyTKvVXftfJ62TandHBDgYp11fcQH",
  "key11": "Csj7twBaKaQXKAXJiiqSJQseNjKRZBpgTcgNTtPhJ3cwjnJVpSF9EsfUTHJjwMzCtMVrgiuKQMhJN6yGPFEQ658",
  "key12": "44L92NNLpoMYwRDKkgRoVcbDmM3HeaVWKP4BKPe8g2oJBGNFowmPWAMe8F3Ad9jyViAEjg9phLUcM2CnsQXVhJ5M",
  "key13": "4Qaud9ohoX1snxFGL2vZHuf5Ldj2W6vezBT5gCu2awozMmuVXSsQFfH4hZiB9QBzi6GKurB4fJnn29AKmRCypY35",
  "key14": "5YytMxnUvWfc2qtiA9ef9LdSF9uLgBWQfrT9E5ya96PoiFvrYtUirW2hr37b9M7S63N4eeeuVBrdVmWaHRe8aJny",
  "key15": "2nGE221XkVy19da1iicDojZSq7fESjyigszJjWH26DeUDNEEqbSRrMvSzeaezHZ9EhWp19hUrKnTWkHobJLhMQY5",
  "key16": "2m7reRP9EHYtLUiP91Qpf7fMAXUgzBR9ecYkY5JcEgdj1mKZ5LVN41LXNiSBaL1PfKpThLP4rfKkKsiuj8KSx7gN",
  "key17": "678ksCX4Psv45JGeQqHKRXdKdVQfu19UeM8KRhAfX1yaTPFxe3dPJyETxeuNMW6v8rzGp1Eg93sWztQBmPDnbkWq",
  "key18": "5HXJxFtp8Disggc8exm8EP7nP8nhTh6fy7jnYu9pnkXo9TRSzi1kNeyY3xdvNhZBwgRsNVFH1qZSnofah4FQ6VdM",
  "key19": "3easLkWab8rrxHdyRGgKSnc6h2Ht8WeTX4XczuUFHi3qu796onpwCmX4rY5di6eaQc5odfKWTNKHoqAyPX13p2zk",
  "key20": "4owbkf7MrNr5P1BMfjWHXVX6xw9Jyf4DYK54qYXuARjjSZAHNtF367gq53A8cfiu2PuFqYpZgP9DvyRJRue6VY7i",
  "key21": "bG1YnLWQiYcis8LEW4W6Qv1SLmrXWQ5PntYaWJQZjUoccyAqJanak1wYzU1et6MENUV7BpQqsvQ6fFCbrGdPest",
  "key22": "2VWhzxm2eyqBcJXL22yw658FKGeLtixRmM7WK8xT5z2cB3Cop563T2D8eH8ZurRvYacKG9K5sa8YSpa2JDtLiRiP",
  "key23": "AQY8VTpEWGHgzhmxvoShCUeAJ7eA2ofP4oKH6pSY9jDgwa9YcvmCCSwPmUknZUi7U4F2K2VtdjZo8VwgQ6kzngW",
  "key24": "4HKzfbex4HEgZoTUuKj2rLHy6K9xkWZTwUo6TH114MHe3ARM3UnvcuVLps8nBW7nWrrNg4B1qRjMvcUyP7UBd7ez",
  "key25": "5u6BbpzNArL8ou97vaaKxJQ77f9QCyEkGvjyAYGq93CHjzfkRxfvH6bMdhcYzb8CJ5AY7vVT9etcb6Kfsu3t9Rvw",
  "key26": "5v6toSY7m8e7h9hXbmZiwWSBKUpcHacbkhcLz9qJAghCqaD8baBnDKXKV3UgkPxHfmsLpcg2Khr8S3QuBYnggfSQ",
  "key27": "2VogKBJnKFjbsUJEzYyp3FNheEEPzsTKS18PFDg9aJsUmB5hfUeXZaURRnu4QnCXsgYEXDwetLFAWicdK16RrC9j",
  "key28": "rGZSRGgz2UEJbFwfsmE666bHkaM8ncg13SwBL6cE1sx4WSdWK6EAuajsKbY1FBEDKJZtRuGLZpQaJBA9rMo8VeL",
  "key29": "eX2Lv31SK1QoaCNBZM2JEn8BUepxComHrP172oS4cHw7RiHr6SVSwEwyTkU8aAcCaQa5VDrH1iP6kWEN9779wMs",
  "key30": "4eMKV4zbYpQWzDTpMZmUh7Re245LvYexfqsPfTKmcbiZh7h5CpncLn4CDnGL8E836CB1KPwZSweG5d6tcGYWjyns",
  "key31": "4PR66UcBbcBdCWg9ooyPfN4TWXZE3Dohx4GFiCFTESvgj2CvqDBzRowLbANctzrMupx179NFeeU68tvvJZm9skTq",
  "key32": "3bWhfQ4a4KxychAAmnAfzrtZEXNA17xJP5taPuANX42TF2BdwHKmu65SGzQb1NE7r9Ggi7ru8DyZSrAdzcfZjPjo",
  "key33": "aY37abCSMUoD4jpVpveAdKrKBC836hDuVSvkpbi8veYuNzRByDzCu7aBi5WVkRMyWkWtm6npc9kJ1JWGo2tszHQ"
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
