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
    "4aqphjkPgi7pco6ZxBE2ZZ81P9do9HPHnGSGtPacV7uD3dgfwXxMi8Dj7GPZyb1wWSuKP2NCsmvCLvCqcD9S4iSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJCJqrh9rMPX8oZUfxmPBWm3q7VSGzy2aPhwKhZrh4HmZnhSBQ3e5LTvd2pEPcHsnU8g5USNMib7VAGvr4h2erJ",
  "key1": "YDSppASuYEXf5NHUSNNCQhyTsxS6vHQKGYR232qzmeqv2iQxkqkp8NArW8omjm3gMzY1VTmYR96eBh47rHBmpYH",
  "key2": "3n4vXQEpfqPYcyH73pCxm71Nq4eMV2kQNNEm3YjCctw54qPPCNmtBuYwhn5XGr26S6HgKHYZwwiXfHvt9epDzdyv",
  "key3": "2uGgimYiQLjXrMDM1KBsfBKc1PFJqwntMxd5DWKNgWsw3kfXGzPF9aQYMm69XzSViXZpvfMejUXh9Y5NGsmtYpSJ",
  "key4": "5bxahnrqvkvvP6g4Bi6QxZQEKK1X7hxNfM5JqkwPoqFFsrVnjDDSBHxJJtFbmw93Fmn6pVGaUMU6PCwnpu8LrjMw",
  "key5": "5pqXucL1e1X7E6QRtY9LQyzdyrgvkTNuXAmV7MH1b5L4LKN9vXcK2AA6vowZ8LkW6Zkp9x1siJvkxszc7nCWWRx5",
  "key6": "3cPBhh1DKiweJNAfetjdfqUWGiavKoAMpGrwWZqR3zUuvqkRbxEQpsF1fZC8d1vxeTLC1TtSEw356mnFtJ9vJwWL",
  "key7": "4zAWmHru9jsWyHV5aVET1beQYK1HCeyMAwCAVgc1TFr5odM54AisDLC5aW2qz22W7HZgWnK4QhE6G1UQ3ZoWCAQo",
  "key8": "4UofF4pTcBKGayoziZPvGhoZMXaY9kQHtdyJ7Bm9WedMGeoMbNebeKstrTR9fQvGPkEZtQmstBKrTDPyQTwV1FNB",
  "key9": "2CHqPZNZ5t75F4NgSVKVgGYyANsediwGAuhvCQx7VNeGHe7rAJqUiSAS2gFmq4y3f1mVjFFJ8m8xhhAwpbGbiS4N",
  "key10": "3CZnbGAT8acLHXSwJA7ojtCrbKnKo3bCwxgG5X7iSg9EnvgcPmWn4JJV6BCUukkbCMxigvokNkzosLX1jwqhAXA1",
  "key11": "HGTaPc6Q2DxQ7R4YGzgKKmuisZAJGNkJ1WFyXGi3AapsvuozsR7WVQ4KLj1qA43wSYCPB3H9ZCyNmbhuNi41qDs",
  "key12": "4XbP6aMwGse9LVSnwj2fez3Jy9ibMmL7iJRRF1GuiEz5uE7sE653pxtVDWXW7GkoawpxY6C7T2G5NAi6wpya4nZM",
  "key13": "D6EgkXBVouDD4GFmStmsBRguRNcNv48GPJSeng2frc1P4vcQEVT3Uj2sFS8mvzq2VrFponf9oTa9J8vXKfT1HVE",
  "key14": "5aZf3nif48uEG3jVoCAEvCQraLj6VX3uPamJiz5SWnzUaxKzgz7fYxCPcuk9GLbSumjcp1PpsmnHck4bwHmyQxEt",
  "key15": "4DVDKXyLkCazckWtFauifwrCW2cYfKMqgapd3AxT6fAXBeTKLotf19v5wCFUVFoEKg7ZBbbcQ2MuJJrewxXPnRDy",
  "key16": "26MkMKQbtUm5ms3THnfnnVHQWXyqwqT1WmXTvgweRuzyq9fZV8ZC1MbTgkT5qn5qa1tZo8YQRjhUJo3gK1u2JqNx",
  "key17": "4tGmZYGZc5vDhhkxteAHJJMbCaLRfj8LQobBD8NsLqhri6rQPfKJzKXhT2q1hgyJMBKP2Tose1twKT742i3UPv5R",
  "key18": "66YhMpH5hD3yQho265EjvxvSpC3WRqJ8NVWqB4MMHj8jReoxz98Cwk4K5z95c5jeCwTH9YTZqDgVqMoJ8zCpRVs1",
  "key19": "4mJz9hfwGvf1sqK2ic1vAsgtc3x726iC3FMJz872bGt4yJi3EaT2VzBBr7eLBPAqqMYzH2cAXWjHJz488yLnjjXQ",
  "key20": "3ZqevotuT2S7jqSwWnGGv5WJirQPPHsozXPY88aSx8TQDccuFc5UBaA6rwXTtKGEjq8QjFuk4BMxiFmooDMAA6V7",
  "key21": "2PWmNUnWtubXN1Tf6AbQH7jQGMJxeKsRuvuWL1UF9XNqsTtUmnTQHcyiaGE7ksWvNoMGoqjsLs4mdxJ73UsRiWBo",
  "key22": "3Raw3d5inHdKy3godnFNsJjB1ry11VgT9SZmRwKUKAsgv2MEeGwC8B7YPaJbiPmQudUYZvP7du5H6DRPLnhnjTYK",
  "key23": "23i2v5FPPbRmq6TPsddXNkWDA51snwEH7557pgZFo4sSzLn6Av3JrmvPfNyndQF2TdSSQv6BcNpYf6u3u1iMAnXt",
  "key24": "3dB4cP1bpQ39z73aSdL5s8YnbPhRsRSNeLDYzHgKi723KDXfoHR5PxpCV5X2EMRWGNy8ewLb1CZtMYuV1ndGuZt6",
  "key25": "22UYFD8zDz7btHB1GzT5hZNfnq2GNvJj4ye1XJWj8VsbxXSfH6zViXYBY7czKkwbZU42qpEUz2FMS5jyS8SkLo6A",
  "key26": "3ELtt4QrRaGi8edoD4y3WLKphSoXiSH33ocTB4gZ1RxrWszjcTFK5cAxZ1EhXJy273a6HxKaoNXpXaTmLYKxZ8hC",
  "key27": "4b9Nc6zVQmdZwa3RuAAoguD8ZcRZEtMTkuXnqfqir78EkFoowPd4TyRCzREw58EKNNGoNrF36vSCgAmDs1farxbh",
  "key28": "2bv5wSqdK8Zx4JebgJkXdfjCGv6Kh7DjEDxbTY8tmKLSusEMZEytbvwWdY2XKYPi4uJct6vda2Wx1UVPUcHY9Z5j",
  "key29": "2co883KeY4XwPb6f3rVwbtmTjovHT1i74fFTg4o4NtPRp68BDSNnnRJQvjzyw6Wk4pZvfBgWjwwaUKbenJzSMztK",
  "key30": "3UyLG6r4SmHoGgtgpvnQZ2CjBtiBSntz1NjRyf9s1DUD3YYyJEiDBLPLmk6Q8PmHwAxub4dMPi6LzpYQRKWavfuT",
  "key31": "3x7qnn8KQJSj39LJqyV8wsRB9Hyyj53J14UfuDCDK92YGS2TsXVYWH31B9PckgNu9ERNpa75XJxTATMBar1T9cia",
  "key32": "9dcsnM2fFZJYfAYhPfGd1uFxB1ia4AwXsxN2a1wY3NindDM2XiqUDZr2KmaGGrj7NYko3iLVJVGoozfR3HeYFeS",
  "key33": "3E6YvPGVQyzMMFrqqaz9fjHexwJio8n4LPQA6bDeWCqzrP4rejdXPQLVep9a3dQyRXDwWui72U7zTM4x8BStgbnj",
  "key34": "263MmGj3PQ3K75RJCS7mk199NmSrgVrH6HanaK8dK3t8NFQRZT1WmVZGDv7vPcdQy9HEPjMDwjnbRf7WqJt6jq8A",
  "key35": "2wpZmwm1h22rWrYZoNdX1XHc67G5C7Jw8EWMnTo6xCqafyVFwFDckg4iXeceZGekcpaYQyMAvWShCHm7fthN4Z2g",
  "key36": "5ZXUQp1or1G6MEE6QaED9oSXXUxTPXjncapk5zKzaCDu47pzSAxtbRdS64RjhiewA9crt3uv1GLxhqRBcUemDSHM",
  "key37": "4yyjdHhzzejkudDNKatL49Ne6ABimRn5xzkKkoqbwPiAw3XVJDCN5aHw3enDJcSCfwZf4acNgkp1cu1fdi3kccb2",
  "key38": "2q3323Ze6r9rm2cpqhzqng8F8kCCtp4Rm9jDzbcsCicrt3RigwbkbigDFxzigWamFNoeUbm8w9jvFHgp1ZoFWBia",
  "key39": "2rhaE9vgoXAddLe7qSJDSspD9tDYMisZQ3e6fCEPwD9u7uxAkZY7fuh6x3VC2jMct9HTmdoEjqKiN1U6UDR9v1AD",
  "key40": "URRNWVuER5pG4ks9BTuec56zGdqrkyA5hPSJVbrGMfLcyqiY325eezkwMXUZQhT23y4VL4ubYkZ2END3n1zwjdP"
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
