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
    "5rvd6xDeQfC1mf6ZrWW9DXVv3UFMkHmnB4aQbbP3L387J3VgHE614pQrBjdZMfsWQJoHZhK2HoqneZAibn8QDJnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7kvmgdqd66X44tGb8ixA84VxqtfacWhwkTYpUCe8qwEMooHmaAAijyRPJ6edLpfRq3ZxpcCZ7VujkwzGLBkFpT",
  "key1": "LU3Z3RPLYzPX63SeNL5yHM99zVdy8uj6j8VscP4jtccjqLk646fTBGYRc3x1Arq7UMwrY8AXuXYcBipyy47jKA1",
  "key2": "4ynVW9VvXagknB48HSQxHhwfHPj1bCntpqbQ8Uh8nQArJrgj8vYJQppbPR48oPFFrdiCF47tCbmoUpF1mqPXuRia",
  "key3": "4iizgWhrQfvUQXMDxs9ZJhrobaxpLueHqoHcmSWURmNwMYzheJA9LzttJT97K5yvcHr7jzZx3vJJZik9Mo3qGiiy",
  "key4": "4HcNzA2ZbEodvPpFVFhPLQjS4yTfwczvQJosvkH8ifxhukt8297HgkjCxUkggWdaqjf7qyejD92UG8vRB75TbaoT",
  "key5": "M6tH2TY4uXeScPR3A37XzUxfgufHbZNaw2vX5oWaJPh1PWbUo8zU68FEkZuzXE1ygoFxM11zXqhDF9DREKRysnw",
  "key6": "4CEL4qUmyjHJ429sw5iT6buaZYMtkZPSNQsvfr8KWLVNyY1otMsZUpzB2PKtfahtX4uJ9eyXyhB8VeLjGAFX4pcx",
  "key7": "5mmS7zHUGHSbbK3tseRhfotW82nMKeKJqC8XYvrcNQUHfvP94ueYW6H1M9o98KuM9wHd3E2q2RNvobEsKNpEzxGj",
  "key8": "5M1ugfTMf4mfUCYTKo9dwaLgRq9gYz7iHvwkJcDqgasRkuSJkbjBUgjZmZcsRLfSmGjcMqCCcT3rBaja7ZLgHCzA",
  "key9": "3JaYJUygpbeLV4LanuncjsEyvdMXRa7AQQHxZxF3RyyQ8rtaxxJ8MUTxoB944FhpZFgTETBZkutnHcbD3XdhHnNr",
  "key10": "42DLgg1jUZivNZvdU7BTbuWDdGbxAfdC6cWVCVx9amQejx2x4bK1KgYdpKJ7BSwhwkc6QB2Dj1wKGHiU5AQYyfAP",
  "key11": "2qn6RXfCVZ655CXuFCZi5sayadswwHPdtYqA4kLp88o1BwvjRsawSxXjoh6e8nE3Ds3MAARzotZjAxRybiV5cfgP",
  "key12": "3uGKqJw3GcqHxafEGpE3kiSPuL5EfqH7hT6dWCm4xV2UfMMUTvafcr1G7krqPxqfMhBKnZ3chXctzVVLbjYL1SaH",
  "key13": "5rbBxg3GHWW4Yr2TRrgFBGQnke6LP1DoZrAZ7cjJbjgzm3jyLKqkX4W7gr5hsgFoARLi36jRdmVb6dZG2XCknfii",
  "key14": "zLxDma7cbPsPsCo2Dw9iWGE59L6FmdVH9pwuPxeXCzauwkcBVySquEJ19AmxrBxqZC7Gp1iY4SN9CTNbXCfjFMN",
  "key15": "2hnRQRZF2zAjkx6VmjAaD4DKXShdroZSK5GV47F9CPLixyXFo3cZkeQXnKoVaaoZRXE2d12zs2kaDRoF6iNvv78b",
  "key16": "4H3WJKHtyHcJDHfEhPTtM3iunZpGry5J4WsQ5NjShuwUP3JK3AUja484S5TxwAripLSJVXdxng1LBiWRqxMyJvCT",
  "key17": "5ATwyDRCfYGFxhQiM2E9GjMNt7JsBxxUUvNbuZLgQJvSnY46zQ9P1iXtsLb6SGaqpL4uKS8jmYMtxhdPyibDG8Ce",
  "key18": "55AHt7vqA8ZV4Bwzs68QS1HZ52ZQBHth6HJYfEV17LXvC8GYRoTQu8fVktmoB8KbU6HFRbrCeqJigdv7cynnzYws",
  "key19": "4WC4Km2VHJnqFSBYewTmADmNwHGSdhEu5E7opfwHqeLpzt268TgzG3WvivbNf1demtFLupoWu1Y5AJbrew4ristb",
  "key20": "4tYAJF4WpwRL16aaTtMS4aCUrDEXk2vXHn182DEzjbLuCEhk9UexL2ygxBgEDrjVJmVwLQLhxJqELSeqiErEHpcp",
  "key21": "dK798cGCGurPCPM6paiJSCXGBebXGQT4J1cKrgkHEn5rYmkomNqSv4BcYSsWfp4jK89FpYNfUxsfyKTvitfqui9",
  "key22": "TiBgR1zFMTuYNzWDBdVWY1Q6axxFXRMroNfZm9RUzpk1PQpGwzypsSbfK1vdPg9W3S4FNWzfPiAR2JYeR2ctV5W",
  "key23": "2QF5hAxsYJXc1EEBJt9JZH825eMGSRPd84RV5RtiSaNyn8R6ppTvwzGVbqsuuoWmPoU478ntuyM4J9oFLjeEX5UV",
  "key24": "5eGQu6fizPCgkFte4q2RLexzfikQ62Av3aT8n8qVCTVdaY2nwvN7SF9QAzYtCJzTrgpcoCTMN1gUTyQb6N8bciaD",
  "key25": "3Jj4qWuM7WNwKVaqD6bvT5FLiSWxiWNCkPEg5wiGLvBqZ5bXH3hRSJoT92x2PARBWL7FfXKnw9RZ9qfirTVH1Nsn",
  "key26": "gkXMwqXp6h4jUXS5AX5T6t1jCdPE3BdeCWWcPn4H8cpEVPruVrukYDmJSoZM2PpRXc2wAHoyGh7TrXEekJfezKs",
  "key27": "4Wh8NyKpGbh9VWeo2Ex77Ty1STfN1VpRYcV9q8tXnjASAizhB7jMxbS9qGjaxbLhZgTXz6NtzCpXmfAiTpDi5uU5",
  "key28": "2QnwAQCTNU3wX9p4fSGeyF8ypd4QtjVmu5drx8QxQkfyCBHfxLaGv2NjZNpkzx3xr5tDD4UZcTD37WEmrforvjzn",
  "key29": "3jCP6mLHsFyRpFwnxUPcMcPyhzYBMDB3AVrCA9B8e9oCH5okQKVNLtCduqc75k8oeLtqFhSVP2ZYZbZtdZBFGWgc",
  "key30": "2JfFtxEwQNNWeZsuifg8ycCPYNratT4YK5evTixNfq79o2h6yxEgABNA4ayQHv2tVry2H1bKZXvwYypoxZ2sddWf",
  "key31": "ynoQaS8E4bPfiPT1VzdzR8jQLRBkaeBAKKZD9fkvxAaCZJkDHmHA12Be4Vvzwia4AUYEJdaQst3peRPQhgDL3LW",
  "key32": "51ZsTRb9LsttAgVjMvyPtjb8AagdzR79TaF9yQQwTV3V1eRmAX1MbBuf212MDSEZfLkNcYY1RbNpWPqm1CtTqzE2",
  "key33": "p3P693xWxpQHbmddmxAPbRuYLCf7EeownyEi9bnZ51h3Dn6sHov3SbVoXDpmQmRvMPKncv3TmMkJHVkRci3NeSv",
  "key34": "3eibgxuWGwpbfusxV6Mp2YU84FadkauKaY1hiCHZUT9VDjhA7UZUnCbXdZmS12W6rkHPMpN8P193sDMUpLf7kXUM"
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
