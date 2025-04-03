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
    "3fa7WhAqmLWf3ABt9UGmZfBV5eSARVuPzeunWXeYeswEMStH1niK5gzZTZ2atn1iW9f5f6FFNao9pVuSzizUJ8qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxjMtt6MgkJnrG6JU5qEQpCrKn4Kt8RdvaHXJPGByyTFDg1yfevutCvtS6LmAuDLna7QZkrgk27N5n4L9F3Kisc",
  "key1": "3tCzx9HPJrKef6JWgcks69HnDcpTaKZU1VQZpx3YGKuz4JA9ypsCrRT2TWPDWpAHb42LpKEFGhwQYVu1aoMsnZKf",
  "key2": "L6Lipts2KQsozs38VrnfG7pN7y1yewbtNLDUELty8e6fnKPkbZvHQktabu4k2qgx3kYcnSAiNHT92UYWDCShQH9",
  "key3": "2X2kBMYkbNAWxCJ5t6TkfAFhh4eSeriTgrzMyvCfWCdattMAUQcaaRXBnoZeozZFVw6xHNYZyvghhLjJwqEjuSsu",
  "key4": "5PGcRgQsmcrCx93NjT8zkLKDXmgtMXQnew8amNgJCDcnDKKjZ1URkBQTCfWCpbiddp5ba8QixVpviGAwBKNxHawL",
  "key5": "3RPcqYmhQJ2Q55Yonoj7rYKTrPb4YfqTAwexPevnDFrvBRgjGcB9QmotCyb1LEHuzXacBNjzKuCizykhYLu5YgGw",
  "key6": "2nRKNSZX7fb8UXePPbMeBTfNqBMcAKTucmaJTgz9HpdLk6xtn9igMwb5mrq57YSRpsBwaHp8dotrB7bs8258wmpA",
  "key7": "AZ62aXbf8BpH3PjTeALtrya76UPvJLFxmLZxstyu7PggEbJR148Hu1LfQzCcib5miTR9EX85bbVvJA6nGu3XVBd",
  "key8": "UUAzGRRGCQZ5CA1arqTGc2J5rwY2Defz3gBtUkdSBrTigHYyQ9Bo5xnKF8Z8hrqiMa5mH2tZyDYxSrrUk2gB9et",
  "key9": "2RKa1JK6wGM6LSThyApj3UZC7deX9cmQoShMx54M6CPjRTWsRKSycjnHk1BB6F2dqj2sTVWBdSc7yYvvuMC7TGvd",
  "key10": "576z2r3eRbBZfYdvERRfYbupcGrEp5CdekGtiKRrYgLJCJudygxhWdqVP9nqCRu4pDKBqnkG4RuCtHY8b9mVpofH",
  "key11": "2JVr2pV4tghR9KCZ4gSSUZ3kujJF95z1HrqpQxu9EwuvU2EZpitq6Ca3kbkf8DzczupZPUXcp6dC98mGn8ZZrtC9",
  "key12": "3VCp1hZb79xHvp29qbMMdnxCatZvhSeMSxDiFHh1guQuUmHVFkn8teFaGqR6JDegjx64vLP3JsdUUBH8M2zbeKSY",
  "key13": "4KzphwSoZ1otqw4P6ZpMNXmUsbUgaE74GPW8F6vymamjKgcfyZURShyZQ3hPoCV2KRzB1DdNpp8EpGAx6NYWSVEy",
  "key14": "dotw4HsFJutPV4PsrjvNNdgHNfwGXQEQvjw9jcdVAa4LhKD7aHzkQQVtMXpQiyKZjL71UKnAceoLWkNujWqQ9oV",
  "key15": "5zrYLJahGcKguuCUyBpHaY641X5h12mPCdivgz2qEUXCLPU2xHqsBNHLXpLykcSFuQ2YPzZE8dFZF62L6WV37Du8",
  "key16": "4ZcYh2fgaZGvuS3R33owDHqBZ7fedRtLxRXaSMZFkYTVZgJ8AH9RvhCq6BRTRu6pTYgK32XEFWt6H53r5SfYVszX",
  "key17": "2VGc9DQHk2iHLasNmzg3A4UgTboALfE5KSSKCadjiDuvZoFqJCwbgAtZAUgVzXjxKdtcw6BkiGruay5WZ3ZWhJzH",
  "key18": "3V7HQspuj5B86emNNGLy5fL8GxcZ5hrQy7DZdy2ByvenikuGf6Hm3rvJQwRt2Ew2UqhUyZ5fHvJEeLMvHTHvKQXg",
  "key19": "2jTsXt5qJR9UNKgqXuwWF2u5SGjLuYMmKUTDL2R1ckh5SJx8eP7fx2envuDtsoibFGXm3Afwvmob8MWgMcMjZeNe",
  "key20": "3JYaeNaxQJNbsH9otCYFUnirjaKP2fVFJ7Cx22NuHHxPxy35c9VAcLfXhx9gLaHcX1C1AwsJCEacoEoJ2PQzki9u",
  "key21": "34RHTtYEwJuxk2xZ6P1p8uncFmvTsicrnwS8AtVNrt6RKu86qDxhbBKYXE7RFmkEjYLtA6FUN7bCnRnxpPbMEpLo",
  "key22": "5tVL6CFcCNM22qFWXtx8FnC4PBrqymRa2XxUYhNw75Lb6Ni1nKmhYCHfFcjPgnaecWr6scfUnRW88viDryPX4a5k",
  "key23": "5WYQwLSvcNKy5xEQuEj5293oofna5m1rouPju6bEjJUvCUUtpxda8c5MFXtpLkJtXkneqK5c74ajkcGkQ3mWBNBy",
  "key24": "47QF2V7NMt5ffaxcz1ApDQV1BaeuC9fdGyzKrKdqtFWonmPwKjcTxmDEdgJbZCd5PF7s771g6E1fzuJduYJ4uR7k",
  "key25": "3qW6H5q4sTNpDVe6ynCM7nJMa5Ro2VGbjWuYM2RgJyJmzeyAsR6ZV8WThJAYfsS2eckceomfRTLhAweQYasVmoh6",
  "key26": "2TwJLtMoue7xh24CoDE94cUgnp4FkJJHHHgD8nAHfdcaZmRQAfbAemeBX6rRAgyYmdA5GBjjNWxJRSNRzBn3bP13",
  "key27": "PxyTncKfqqu4pj9nWsCfPKnVLCKKwW637kEJryHdFrNDL9gVtjgBJuUmBSi5B22PQNszpcUyo1qVoqJLFUQUX1i",
  "key28": "32V55f9z3wZQdzdAFw8i8BC649PUgD73qGEA4iW33HZh6fPV9ZaxmggVMUssDfDRCaLkQgEzqyMFL34muqtjW3tR",
  "key29": "3TyzxBxRqNHNzTSxby8FxBv2JnijQqUQsXAFoYKiBoJWy4A5jA3sWMsHyDF15ymEGuTN8YhqMpiRk7RRPvUqb9ME",
  "key30": "2AAyLdZ9LJ8ZgkaYMCL9r3qGLKcGbG7K1Dxxu8BKyMLPywxjubwZMxX9kdMMYkYPjMitiJWujcH3f6FxVs5kaRf4",
  "key31": "3rmjhQn3HvTdUZxQ8BSVcEHmNfocVu9FKpXmoZ5XqfqoZdLAAetAB3gZsAKgW5vMwKiRSnKpbfeoLi2tF3UV4fgW",
  "key32": "5cCzUQgwwrM736GmwdgLRYYxs9xHyNFCHW6MEbK8XdEWJkrm1oa3PPGNpFUVDPkCrsBe1gauLRb3dSNGYWi26B2Q",
  "key33": "WtEc9wUzqkWLFykzAjMvcCAnvGHYiFRhdsbnv8t9mJyjSvRxVjhmuj9YqvuESkj3PT7yQ25XSSkgVic9ofUXhBS",
  "key34": "2MGDEmoBPPsopAZYdEDJYtMvRznoWBkHJpTyGsfaCe65VAnGKEpx86oZ1qQ7cyEWjzfuVKEeUq58G12YJXsCh1U1",
  "key35": "49zLJwUrDQpMqDrUL4q98pZu6FWNMWkeeoHFTUGGuY1YwXprzgTEoQnHinxNekg4FGtFMPpFW7DoSN41YtxMGSiX",
  "key36": "HLr2sbkYDoW1hfh5rBnadNY82HovrgczJvUg6PD5xGn6x5ZUzy6EPYicaSfhfM4KaNb4ZPg93pEvrWmVT2MRr8g",
  "key37": "2RHgaNBm1NfJssddhMkumhV3hEt7NYX7nGBYa7jUDQdf4Dy8DgP9v1bwmAU14sCNcYkDpdtVms7RT6cXuuW4yFp9",
  "key38": "4wBEkxGZKa7JfRV5RTApnb8FgukKaqBrWvv8gfpBaXhYJB9U5nyHtG8cGY8bD8rxSCCNqG15vn8oFkb4UE4FHXhc",
  "key39": "4EAgiTgjnHXToQDNPK74C1s86rkRde9nkqnzU2jCNp6HX5HiAk4BE5qqPf3JPucYmEfEnqgDYXmu5uMbhkQAzyVf",
  "key40": "3NZuSqjQ13jhe8JhLSeKSw1u8tb6QrwESggNCHHDjsFQorsUaKmzV5HjEKTCZFcGExRGXSMpWUPpVkAhuzex8bP8",
  "key41": "46CAgEaYvy91bq7M6B13dZfiF62r9J6ANhxtbTZfw31Dr7rYcrPM3xaWtN6mZEB59Az52NzxoFZdiZgwu7svTYsb",
  "key42": "3rYGroWu1xuktp6GyEodCGBKM9yYvERfMD6yLHtLpM8v7vgay7774YiTRTsNYNR3F7LrKxYakqTnsm3njamFzL9y"
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
