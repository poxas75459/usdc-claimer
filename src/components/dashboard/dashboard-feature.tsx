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
    "3NPMgMrH6EsEm21x9vPJcX3dqsQYPZbQbJK3dWi2uerwNmSuy59HqoHgSGCmr5FhFYdu49Cywi8BMHioLdAxJr3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfBc4CvEbdVCuKQ5pxE7ujkivQyeJTvJT52ppSiXTezrMu86dPz4Sqo5ECf3kyTFs5jFbtCHUMVMnLkgbm54Xn6",
  "key1": "5DwBiabyKL8nefmLu2DuvvvZEigwrLDhqpui4dKvvAXasMQRPHpdHxBY5ae7VM1GFnxxnKjLYaXZAJDAV3nPjT73",
  "key2": "5nhoXUeNzZEuKh3eiiPeUhypRj4mzqtyakZMdLsRcQtiwG1yNAJGaRgo6Q2o8XWLHYRvN2xMMYQtUG2hAZKxbwVD",
  "key3": "4beJ4imnmgjZsN3N65LnHpouwCYWE4daQ4izSfRnTAgReeicqQNZFeY981JsDznM4iiZsYjWtSWsZp6q5ubRJ4NV",
  "key4": "65WapUeBNQ6Tm4L3cJU9tzTxwcoJDbeq6Nsnu635rE3kDDHw7hqa7d4o2qR4uvRUnrq9Cn44afS1WiKQ4T2PBQm5",
  "key5": "r4gBxhYLErs3dftYF4Vo6td1QJqZTLwxSWXioVpwkrb6se9P7xZsWMsTKaR8dF4NPJAXSXsyzmGhrCPVFmS73iP",
  "key6": "5b8we8ueAgrH4FoJ2vgncBTwHrAEzvZu4zKmybR5ruDNpPTae8JtcciqzEMAYpN97s66Q8sXNkibtKJp2nk5buo7",
  "key7": "16FGGRga2rpMSmVQyAf4EQQZ79eoXZjdAqKNKDWHJf8cWkPw8tJi932jqQz48qXk15PrD26jVERbnuR3b5inaNr",
  "key8": "2HtZHzad5wQnNeDZbFBEEeZrKncCgGuc52F47gQ4craVX5kk4US3EaFPjxB8hJfWWUNWv3HYnKi4eNNtTXZ1d39N",
  "key9": "4yjzysZ56Twoed6Kdwpugic8hmGMzohEAFadPpWjxRnmHWhs3LBsbUTq7JYXrPCwAAdTpZiJ9BUJbSoN46qqqWBk",
  "key10": "5TZiry99guKArVzCNweqPEhJjcYZXiLCEpUJ5k3nErJPsASSZB6qJ9EbngLftq171W5tyJkNdN1Vm7r3FZCt9UAZ",
  "key11": "zLccit95j6ToQrRLmjd7bZZpbNy35waEY2S6Q9tJgYPD8P5Suv2qz9Pc3Ri12vGHidYqimhxMJZePyHeyj19MWs",
  "key12": "22F6BqCEsLupmtKBPzT1GuqXfJswFGbBREB13j3eU1946ja4QaLupAAL7BBS9UWTMmPcuCbevJDSvGHLvnx1FCWG",
  "key13": "23dTC2TTRsqX7PJfGfrHe8zrtJCCchzQ5jKmRsCXqGwYra8ndN3Crdn4Je4L8M4ts1VBfaVopuq71VU7tzJromqF",
  "key14": "3SNKW3UjZiZvErchPErJuMiy7CPi7r6hZeZMyFwnTxHpidJmTHtKrw1PzKrGkbVdGBNbuFMi51JQzafVEUe1E3mT",
  "key15": "575PnUP19uR8HmSh4H6e3TLTJi1toU9wQ8GgwWZvpMF4BonbNLiLU8f27x5kzqzNohRTVwj2tmKjzUvsW8Bf3edv",
  "key16": "3vpwMsmRChUXZbmqWtA2sxXhosEsNJAuHGVLR8g5qYVmt1Kd8TtJKq35dae5o5KRbrQXknuFSSHxpKXu65HTcf1J",
  "key17": "5oq2wAzfL8pZg3oxiDwbCzFs1CRukudZ7L3rxz6Mhy6GTdMqhtBCsppn6v6mtSkQuwgG1cvhGN9MycsEppzixgTo",
  "key18": "3EsY4uYkQqv6Riwn9dboVMfr1HmY9iz7t6C5EBtp6dsuAwBPhy33CnwvYJpYs2igkMzgQcoUZiS6qyVMHEp7Rb4s",
  "key19": "49c9LZfa3Tdg5XX4jMLAaT8T33iaoJseVSaZKPxmSGtnvtjFwFZqdqw3fkF8eePfbARn3MKUkmrMcnRYD9SaoxzL",
  "key20": "4T97R6um86p8ZNvabZfB6zDRmvWVEjTcTEgfLdgiGzrZm4hYYPPtYedrvjyFJXTNggeWtt1667HQySjm69dxpq8A",
  "key21": "2JJ3FWruSbuTk8SQdSa8NxDfLG3KehLxEnrizVcCE1bWspFSkXpwBAGuteZ3xFvRc9s7hSCiEuSBHUVPpRqQwgCb",
  "key22": "SupEQGRpXh5pH4ThVyzdApURGgaGHWrUfv7ecgwGw8NhTDuvz3biuGLYxotd7Q3jzdyLd824E5wyKnbpknQhHHh",
  "key23": "qr3yW4Uj5wzyE4nnESo8CWSnWJryggqEDVijj7vUMkN8a6ko5ZZ5r1mvup4mEGfvnWxK3MYAqtLgQ3oZceBpCv7",
  "key24": "3JwkCKfjexLYyMhYPoYgs9EcsBx6nVVrqBpwycJRMj1VZdRmNcHevjCq99wttzWLyr1vs4BMk2wpNGE6Aj8dZjX1",
  "key25": "4ZV2HKMUcGuke7a4WFPZH6vDDvtjtxQSWbLNTQburgKDso7JK5AEiNALr8ZwFDkoyDiUjUBznwfLNfXnAZZemSVo",
  "key26": "4gh33YKDSCPYsPGGFEQSWgFZqG9ReSQ7kAi4i6FZuBaCibEacDzYiHCWfzvF3ekqzvxoexC9vyvCNsMf74YmBDSZ",
  "key27": "4Q1MpDehJCYqA2SoXYXsCwYiSqYP3qmKfLrDPe8yoMq2PiN6M3jEZQ5fqPXTjiRFCzC54Mr1QKhwHHFpGSam23RN",
  "key28": "35zLuKHnHcATJf4KyX4xunutLGwDNAwtaPHDFfKhnxrG34YJXxKKqJTFg4gt8Yt8YYnsaLfj7o84ZPRuZFg9zAM8",
  "key29": "TTZBqXRD5omaBNcuJpawBsSdensudE77gV97Y4S3MsG1G7qZYkgrKcJkaLCU7DSCmKDzbRe4onyQVZE3YyWubZx",
  "key30": "4JDKMykTRv1naVqDdrZXRfhEaHZgBSp5qF3L26ixHLwhLpitfpm2RzdbwH9UEGnYNrS148LjVEKiGnz3sZDtA4Sw",
  "key31": "5YVnrRRcAn8vfAtpixDzpvv5TWNYAzDE2GHtpriQqaFNTvhUPhisFt1r6DreV1QaoWvXTQb9fcektvmJgoa5Xma3"
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
