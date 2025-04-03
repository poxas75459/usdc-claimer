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
    "nULWTnS2wEhxkr8voLVngKWp3APXMfmhsCpKr6nTYhe58fcpvPpw8mj7cb2cCYfaGX2vPJM1yYdCQSjiVxZorj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HdaUaJBBBSCu9dpSBi6Yw2z4bavvCc6pVLYFHd59u44XVnCjxfW9X37YfkDYj9fGzFJavSCGw2Z4t9ZPvnBU8D",
  "key1": "2rjfhXUuoSLUckCNNTgRpaqtzDtVdvtnKwohAXqCJQ3ykAUYQhzw7ksd62vjS857xtk1q5fmsSB38q5FaLGYByuY",
  "key2": "4GsVQKq9v3sNkkgsogrxadaGqi1HABDcfqweo7RGGiXgzBnzPEqVDjP9GzM8Gow1bjjgzdz8HuN3irA7k3Yae8ws",
  "key3": "4VnZvztydNy7RURwHXFE3KV2uiuNNSBtyWxrij26ZB6EsXmaSBGsz3aFuP4BWTFkbBTXnSWh7Z2RK5wXNktWeisC",
  "key4": "3mYu8Ln7KE9QSt6mDEBrf6VudbBVt35XdAgRBVGkGVBZFbyWHsV8DexBwENJfPJ8H8zwkAKho9wSbcJLAMnSEuAm",
  "key5": "4QVtoJYZg92TVYELvfRBRC5PZHP1XcmnsnYKms2BG8Yy3San4FTob5zvy8dQvuomZy5SiPZEHnV7ZxJaKkaNxys4",
  "key6": "5kw1WhkRzV2YPUfU4pxopAJ9r7NpAXX9GQGfnfNjdxTQcU93RyzA62RFB5EfVYakqC6mbo8rBWeRmQESRV3nZcqS",
  "key7": "5NSskrCC8Pbf3ueHf2imkap5K6bQyKbYDrE8w7x8Zb3FjkswNeDfUn8whYQy1uyyr7hhqnNpCiiZMYoYAPVqHNBn",
  "key8": "2LcU55hTNYv1naB1KRdBdnWcrwptiCHZi4Sq8DSnK2g5tpJNxTHcdNHkgfpErWeaU4J1jaAgruEEyNQox748z1oV",
  "key9": "57xK7AuQQee4V4jDmXk1BMALDcLxSj1aPCMYkR7vngTxEfAbyyE5GgBBeSmwqt5MGTh7FgxUnxiJsbM78HA9JeMn",
  "key10": "2YvF689JffP5aKGN93xX2wMvJj4YSuXPp7r1CgSmGbfoAfQy49Z2W5sXjyZ5BHcNtQZNqKbMfYFv85CeCSkpvZ4m",
  "key11": "3sdtKLkcRnnxYh9gafWQKmrHnvkBwUky3ZtiyxdYeM9J7zKMCzH2cc1R5eTSsfbqKQvEzKq5KWtexuCXKAJLgiTW",
  "key12": "3kKE8BWuTBrfghZQgtedy5aFzXENPcLv1xSoQooS4xi22jr7GZPyrXnQun3pNYwgKG2qwEMJNvqfLGwpWLcLKVrX",
  "key13": "2x2G49RJAwEBcgayECvSVhBfj3zXWdXV7cKwtVxS7NuanumCZWgBZa2kaPyyXqpj1wMYpFHxsurYyCKjA1jPMob6",
  "key14": "3Yzvjesi5YNQXxtuf4m4JYgRRyTg23Q3k2qdY5ckZf9D29VpS87xkeQ6ueEnq8Axoo8JGFKcysWXsCGC3fZrD6Q8",
  "key15": "54Ww1BV93sbKu5smQC2imhSrVhvKHutsoykX33C6ad4kc1zTesUmjWX19NiJzQa9qqLP1zDLCNfUc2xcCPLXsahL",
  "key16": "3qzH7eHRPZc1inqPMiibhtf7iGf6f6gFchZ1Zfcdpd733T8wgPLPHRr35rZvSyhqtQcXeCvtMjn5813LH3Sc9rrn",
  "key17": "5MDZGW2rmhKVGS27sYi7udnQ598r6PKZVMJHHuyCZ9F2EQc9UNMcVUT72okgjHDH3bv59fF7xyCQGEvmadUTMy6f",
  "key18": "3ARYeD317KvpHP19AB7Us5ENFDcJwc2gZeWNX4KqBcRcgoNzsK4YQRY832jRV9yXA3bj7g4cnsTr1krshZfdfYzV",
  "key19": "3oAhnp3WFzZdtpsF91qNP8bTiy2iE7VpQy6fSci1jWA8H4PezASkpbJJ3J1361o9X4eJNwf8CvTXPwRn1EDnXv75",
  "key20": "n9TZySJqcv6CFyajuqZ12ACfpWjKVT92K4V9TsM77FshpTaJWLBXPXAga4H2zkykK9SvJVr8dxKxJM4b8BYoCgQ",
  "key21": "46F6BzmmPcNkJiZVhtgMyvWfJPhdbQdXyiZgAXU27jqFyjDQq8KEAz48xRtdgtozQcuz3uszdVbPo7A6jCXTiNXm",
  "key22": "2oWjbjZyPruTyk6DF2vhyMVNctecySQq4SnTFzQiHRjHvkHf7kKKQ1s2TCiYp7fQtqZGvYbHBoAbzofkTnPgAFgn",
  "key23": "EThPQyAPyGtK8Ggi8EENeP44LJVYE6ksH3jfeh6zoRhLC7AJRyMZaKyPGWcf4ud4pJRoyXr91551JNeTStKmFVV",
  "key24": "MsG1E9w1nUuigx1cZAK92VK98UKF5suW49wuwR2AmhyipokhxLjcAB2BRq1v34G3g7actD38FgxBbfj9dy4eNkJ",
  "key25": "fSk9NWz6Dj3SocTZDCZZ6GTFASsFibD7GQPNhRpm3z6UHBA8Br5YkkPnv2NetzHG71AkmQkSpHKk7Hsv4npDi6A"
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
