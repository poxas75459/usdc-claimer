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
    "3s26jZDFb69q4CAfXbJ3xw64nbbXxzD7DtRGM1yCNQHXWDgwgPZq5NjdV2gpEZpfv94QjfqpoeoDc1BhuRuX81ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBvJgq6SwMHR8piBEo7bpNCkRTuBVXF7fdK2ViG8GimuXaAq1TEcEHzR4BPRihTVznqG6W6dRKWYNiW5zC5zQd7",
  "key1": "mpNLT4HpnhS5TKmvuyhxbT5Upgg3o5fNoyBwBQ81rjPErzRt9PXR9Du9CAxe9NcApeEqvGQ5jZjxVr1GjmVCMsd",
  "key2": "5EJmR4aSJcYsugQ8FMoFaJey4wkFxfbthJS9ZZzd54v4uiNGNu4T9WGFPN8dADYH3Z5XMDQqNLdPSwLNKVWzT9FF",
  "key3": "4qUCRuFMUPKjMZS8xuvfaxtfTMdcoLGVCPDjzo2iBHcHajwiJAUQzj7rg2pnRMhmoFNkywpmreVd34XEpdECpyp4",
  "key4": "5ZJ9rv7HtjJRh8edwKBQBBCVKTBfL8pDSsDYGKrYjtsqo7jxU25GEPMtiUkvXHYt7ZqjKxB3heYz7fn7rbv6no1a",
  "key5": "5rd9AhMaiB8m599Fu6o8rHHNxYv8fUaPArKnA1ScXygiGh9WWTzc6Ry1rJzma8A76mkjNczmC1SuGRnRibbnVmKH",
  "key6": "4GSVC9bMUqHhhcqeKrgwmUwaumXumzMeXucazLPApRv5s4TSL4R9Y1uAyMXoMPxefUykwaNbDTLZJndKtuHPzqj3",
  "key7": "3TUhZXa3btRRFw679u5b5XbYb1oTexGteppDiR8dVjy9p38N3oeitC7m3sE2cSDqcdhtnoEesN7zSuoVSnHwfmeH",
  "key8": "pYEc7AuRPaDEbJmsqMxCca4MLf5xbxjh4GGzzA79VBqRxDJwMRnoaz8BxR4LriqvX8ctog9wA1HSqUtqAR12M5y",
  "key9": "5p2dPwYXCLRxhpqRMb1dSJHHgqZemYpF9JUNhaBJAnLv4ohhZQUuyuUrGkL9pUUog9xqd72cx9kic2Vy3BbciTyu",
  "key10": "3zqVxVPdbt9S5oWkvdsvn52HmHWSpgNHSTXAWnZteXPy7GUVrZn1BtSVe9dbz5S9NcUn2eiKgYxUdPLY2G7zxbL3",
  "key11": "2UfaBkuh1BVEEbEUGcbDju1LdfpDrifqDtf6hfzuSY5safG348nFodRBk2Tor1auFQnczb5DnqkTQyXQzGv3MFFP",
  "key12": "5M9cCQPgtN9YMQc8yVK1AHPYfHtxeA27hToa43oo9rLxt1zUqYvg7RfZC9QoF4wfvA7ERDfgQiES4jFNnJGpt3Uu",
  "key13": "2fYqYifSCEMcMnwiazBZcphwJ1nTZ9A1qM232Lu3udd6UBSM4iVhLG61yBnCGBzhLCE1cSSB8KrqEe5K7JoNxJ2z",
  "key14": "4PgqJynpfx9dWJ4DFLj9Hk4rNqabF2KuxYU3Bb3LLVGHG8f7Bq9EPVumAFr5YneWDLbiJBYzK5Gt1XWLRfgWkc6B",
  "key15": "54rm9QPfHVYgLQ7W8ShMEExLW1mG2xTCEaWq5R7ek8VgBA7vrtCw7kwMKRB8mKFJHgEoQKqqau6WwgqpUVusp4ok",
  "key16": "4zL6sH9Ra2JUpb46o7T6zokQbRFrLXcW4Qgh9kwQhpFnaFD8inWsjgNw82krQovq5M6P2mfB2p9XwVs4d2aJ6htV",
  "key17": "5HGKxA55ABTAEkuxobHnSmahRogJva2Nf85WX7bCNQ9TGFH5cFeq5CCFYZTcYWtWK3mdSadKSG15aQhkREieKruJ",
  "key18": "633ZVmfMwUYSVdN3LD5eQekcbBZob6sYXRQcsvMC4zPgzganrsHhvi37UpXrFXHkZuJdq1hoUoWcSRhKT72Lhh7R",
  "key19": "2Csrdd1FWrwnDauNKLCxC34Uz5ofLifumNnjFSsQpBkF5ydfYyxhGWN6ChDsMsJKLcZk742yk7S1p83AE2VsECF2",
  "key20": "5zrEBuGCN3UZH19zjbmBoiCVFiWFUu7nUXfuTnC8JBKguN4JNTftUEx6gqnD5M3QBpJLc9VvF7K5LXwSnWKSEVQx",
  "key21": "3rk239Le9yM7gokdQfdeKzRndAeEe5boXpqGvo3FkuhGWh893G2FpENY8jcHX3JfDLyVo6D7udE37GScHrWoYqRh",
  "key22": "aMLZP5yAip9m3PEWjWoX9QibeJqGparPjfk35ScdFRfwxLxUYb8jedDqGFtah3s9yLBHbs2WLYNL4QzWmaoYRqN",
  "key23": "5pvKcd2redYg3aL3bZDEb2X9D5Dnbz2u6HG1QvxHao8HCjLVgVwwXvqwDSuBobATWcodbZ7QgtrUcsW6jocgen6q",
  "key24": "2ofYXJpEWYkh9BMDjcc9peyLA97h5xUgdpn8WJAKgyPsuuJQopa7Zytat6tAHyPdGraxyaTaFguSZAcy2n2Vjhx",
  "key25": "625XGGwD6gmLRD7nPkGrPFkcABXYYJMvaekfqb6CYyV2HWSQ72PK88yL3hYKsrQGhjr2YAQwj3ESRmd4EugxRKTG",
  "key26": "3JYNmVQToVCwzdufdpmT4afQw64JBptsvbMR1cBmqEcRi9eFNTrSuTPV1iQGvFmpAkxiafqb3r6iQv2PAjK5nSXu",
  "key27": "4RW7CHHc7Vch4g7Qun7YZkQpf6yUUdn5usfteqPcGQmuAA2c7eM7VCY8DQV9HYtJwiC5fKJsZZbZmZsvHqLtUzB3",
  "key28": "5qm5UtgLimNCEtxneVsRgfjycVuw4MnYfotyfhLuBxmheh7yENATNyRFz3uGWkYU2WKXQGcj7fLm94UizJA6Hqy5",
  "key29": "53YnzKdHe8EhdrhzibjDjY3ywzamkWGtq1j8PqPd83G3SuQTpGvCmCsFqyuVuzNC2s5zAnf5hZwtQcQDjwEa8PgJ"
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
