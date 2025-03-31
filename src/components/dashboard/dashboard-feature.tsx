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
    "351NVReXDwdVaukhcgJbMh2nERKgdTbuQxRPFFYDr9Yhd8S8hn2fPwFViQyzXWdzKG4VRadjjXb9JjeyTHSSEJhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swST1Rc4L6ChGidRCa2LZKkMBXbDU27Hxur8EzcLYGJt8hJFRPX6PfNDbbRf97hpH2V3Wsy9x2PHVE3qKWb8Uub",
  "key1": "iTWrYQii1VhCwVvvymvtCpnoVFM2eB1fok95W98uvwzT443LnMmzKByF18xHLSbctbhjFcd2tVnfjNxtq1sUx5t",
  "key2": "54BvuFJ1W7fiM1bX3HDTvXPk2cPCUHcTVChMP6iaaYCe9wb4Ff6Yn5kFEihUHM9wtMaw2ii2jV4BtzjuXANBhgzF",
  "key3": "2KpJvZ46ksaC8korVeZV9SfguFi93w5c7XEsUuqn6CpC9U1EVyt1rEiKL8x1qvo27AbVMnkNxEiGRjz8LHkWtGaf",
  "key4": "3GWTdYzdrBvq3uwGnw33DEWACuDAJwuk2EbKfjABF2F9j2BarNndah2EKFBbHYrkHRAZ6HjgtzEKne8J4SigY4mm",
  "key5": "4rB6P6CWkKnDCXgYpHGZCAGkA7P3zPebkHra3wyL57wJwXZC97tuXKCDMv3n8yfr8f2oTdGdREnrkRaTomZxZfKN",
  "key6": "5ZUJHK4Y9EYAtioN8YEfukQtRuxH2TQS1QHfWzVKtBLuNxTw8ZCtYcQ6MH8uqaLRWAx7GstP5rC5g5zgEbyWdiuJ",
  "key7": "5KaUho9iccGYPvhEEqzo7xZm2aHLsVfZJthv9auxnJxeFR7Jjj16Z2iTghoZTYXEsNeLzUmhm9N8Q6UhZA1ndMRQ",
  "key8": "33guBWtXz2ucLkc5h9RiqS3ArBDgLZbg6LiZnWDFTm1Hq3PBKzKL8GSP1ha3JQoBhekMNKYoqbpywwU6rGxGMNkp",
  "key9": "33RZNGaFkYdkmz638eeER1KHDpfd378AaJ9sKJ6z7XdEmHhdMoypUmapvANaKiZssSd4Ykj9dvuon8tT7cWrBnaQ",
  "key10": "4fNcr5JohKbFqVfZ6L2Sskyn9JctW1xR5e7UkrguqbuLXZFsBYWpNyT3wxUWZuTwFTNNyLoLS53qmgS1BVNX7UE6",
  "key11": "5FyCXDmF1bMdUHnsd7RfWfExUKfK11uMaz697AQrbZF5WhaFeaKzDnyHuurLq6jakhkEkSzv3CKjqyYwPvh8dt3U",
  "key12": "3Mdt445r9GpNy2Y8JRvR448Eu9zA7Qa1UvNYTXB1YgstFg9YvAmtSGEoYsuaRmq22qfbhcVPh969hoXTHEnNX7mH",
  "key13": "4Y7iX5L97gj47ieYuhZAvfC5C44KVgSD5c6Di5d3EnF6dHXaM7gf6BmWpWLfpQuaKykfjCC3jdUmKS9hxgQHD8wj",
  "key14": "22bUjx5btaDKDYxiQ2SB2wEVxm2nq16g85hysXCXsabj6sCd6Sw4ZqovzbtrbRke2aZkTUsixD9nvGPmUnC6vNmk",
  "key15": "2h1FhYs5rmJnJRnaFo25cn3VAeGAhykHx2rSa8CDasWiGKE7vFgkfS1G2Ps9nphFDg6GToYPfTgjydhX2WPoJHcd",
  "key16": "5qgUKE2n4caaUdBZ4LBfdYXcC4rByk8np3HeQC9KBA9PYhEkBcruoNrDQa1nzHtvnpkrdxSxFpGUJp9MvczwFDh2",
  "key17": "57oEHzPoRGG1W7rDVe4zbhFEsBxv6xPAnCRmYkKWfiVNUAnHJZoxCKZYDcRS8WeuMU2PBD56hvqQcfdSyoLR44k6",
  "key18": "4V5GFW5CaEVz6ZwjXsH5iCh6zXPJvqk1fgMiBRXomnkgvsaqLoVYLYtm2QEsuo4FGo3RSrWEGY5K2xfUr389yY1f",
  "key19": "WtDGvqvga524XLVS67gjoxKqYpzRJV6sXwLsSC5qUm36QAgjzuxyTADQrCokFtSoCkUcz5f67ATdfVnvd2TGRjR",
  "key20": "2Rw3ECPrCaGf8yDL2u5rzYef5V25g6ufqWQduosVY8cRKdwR4wCT5cUMfJYYjjiZWpsK5BdieSHXxfWf7gYz7UUn",
  "key21": "MfjZCgMDQAjrg9nZsuCyWdVH3pXhCKdm35wB5DSCYHm3GRuVqmWmhSCm8SMSFN3RNbYaWP6zhR3LQMdXAR27AGJ",
  "key22": "2ahuiaVK8wmFJbgAr1newLKyMxJF2rEtoxwKcUcmJ4mrUouV1J5ZQRrnJ4C5Uv23RXHAbh73gkqosq925qmdzu39",
  "key23": "2eH68gtCzbxHDJEAZ4SBsbxqU4Eue85T6fA8PqRMM44p1unYwaVN36kAZHP782gu26CwiiWCJWJipPdcgtdGE5SM",
  "key24": "3R7zCvWzfNgKL4ii9Uwbhu4D3NNeHYZpF82TdAJqD7Rr3zuvQoF5bRqzDaQNwVqFmbdvL4ezfVg7MaC9fGz7a1g",
  "key25": "5Z4DFAKErTZB5xS2xDHcGQk5mR4YfiHLS2QXXQnr1Wn7Q8Q7bJZsSYM4RAtn5vo6xvBAYqgzepZtFgFsc7X4nFWt",
  "key26": "2RpGbwqWxGyYARLpPKetAcge9fW5hNTjxJAX8jAtMb2L9rbqqdK77QEPdpuTUWyzH1mgYZnp2e5KBW9Zanr4fUWq",
  "key27": "tNrkBdnrKWbneKaVaSVJm5jrHm1ViJkNFZgcNuZu9dkEwACQpLwWxxd8cK83fKJt2tg9fkuSrGjRF46XD78owDr",
  "key28": "54AFkVsKKLrGCdrvayQeEBDEYNVYnyPDV9eMQhc4rkEu8XiVjnHeZqTRgNuR9e5b9VCDReH5tGo22f2W92VYbny9",
  "key29": "53qw6eecGym2e823nH6r23Tsp6rUAMtzjgsyeY28xQKHqrLc8bjqzpn8mbfbcwSLGYbbU2DZLFS7NjHVT1ciq8ou",
  "key30": "3vJSPw1wGXweh699pEsDmhdaaULHVsHa9jvid3d1pDFbMRawMu95Vez9iAFVTTf8LaaQ6KqsjAky2r8YN88TtPRr",
  "key31": "3MXcHH1JeNGZM9in1aoWDTGAyougnnCuaU3j6r4ppMMmcsok4UqnV4QhguxVn3xuE7ARuZRPBvvhk9zjBaMeh5iX"
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
