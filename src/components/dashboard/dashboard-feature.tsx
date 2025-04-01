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
    "55v84Ky1w3c1t2pokNXqwBbbNCqfvbdkS4qsidy65u8XfmEKTcAigFyXpbRLBKe67GmMkEgKrVU9fDYDSUDdxcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUGKaZyXun4AFVbMwJ7W9U983QpMYgwXUGBKk6Xx9o3oWihGQXcC4AeUBZMwLV9BQRbdvKGedhe7ZZAqq8ywJku",
  "key1": "57Gswk9MXVwhM6ZCeqjowbYM1KzpsMonFYDx5dNZNes6aMmxCsydJsM1AyQ9m3Lc4748BKNe8Juy8LDPkakb5GVu",
  "key2": "2Rsv9x1PZbboVnkiJt9oVbUiqLgKv3jd2NgJ7M3rXqKgZWkP7g3enyvvfUqL38uFerFJxiW8dUTSbdpVetBsBXcD",
  "key3": "4UaExU757qbuVXB538zHSdyGkhF9Ng4c61MRvinVy4w4JHJUNUCkLyN6mP2TfkSCW2GRnCTLmPqE2cW4txf7kwGw",
  "key4": "2gMGyjb8NZAeXBSs9zWgttomgxvm9BigeccVyqYkTPRp3aMR7sZtwgoa9FnZLPVa65rLVCotXzVNpMJErQ7TtXDk",
  "key5": "5Jrb7if9MD3fF2BMatmsLvDPLW2W8qanN4Z3xQi48pBVJVzPtCrZ94PKrLzEKKX99iKhqr8BeiH2wiWKngst53vy",
  "key6": "5zXmew3An556ze9F73SGLuGM4P2dXRC1bd8hbzN3xjQbyJzNEKM9jrkTQqsEe2DTNBtfzA8Lutpoen9YC9zp76NN",
  "key7": "2VRGqsxiEhunSUN7jcRH6ZjbBciDi3hyvPDff5qjFVet9SDktndLKmpVJShwj68KURPMTQSZa41a6XScZEZG7ndj",
  "key8": "sJzZo4Z7jaLZVFUNdayiBf9kKmRTTpJc5ydtGaLMcRUMMYW43EmSvU7oyrGZyRLvcY1UvqW9arGiKZe2btJ9MeU",
  "key9": "4FoaexQxQnEFo1jccixJPrbr92ijw1hiFapFJbKftsiDJGdvMBiyGLkLbxkLr3bvFSghvTfEopdkUCkeuSCw8GTw",
  "key10": "4ohEctCNTFfCcoLUnJomxpwQFxkPu7LLfbayLCUasn3LTAdvkzebBgpQn13rnY9BQ6Q24siBsJh3HjNFTR2GHrBY",
  "key11": "2jbWBvaM7v5po2nguXLMFk6Azk5NwMmMkEzTbY9HdT8XbEAsG724wGfC1YqiofKt9Zi3GKLKYPhrWGiRXA9Ru2xo",
  "key12": "5WiTFsntK5Npwc1tiaiFzovQphQRsh73mtd5pLtncNK8qHT61nb5gRq4hyh8aLTcqSiFsavjj7yYtKZzK3jBvX84",
  "key13": "2AbkFLgzyUQ5WfhmCM7ZkKemQUFVXRCpJDkatbzvs2VGtdZ1SxiNteLN2kpFMnU1bha1Egg44VXrHyqEzR9JuX7w",
  "key14": "4ojMQJa6roWiuReHHwqJGamtP7RWJpocuY9RjgT2pm5b53VGVczuBR4Vq2ZU9rNG2w3axeVkogoucfjmQLgmtiKt",
  "key15": "2Y1fyVHqwJq2tusCEZ2GAGYBTPTXrSxiGvpheVjXkXUDaX1FydHrLtBoL1NXtqDb8FkAo6eWo6pjTTCJNT3jZ6VF",
  "key16": "5oKh18jsLnjrkBSx2eJiSAAHmBBAF6t9untf4sdggQ7xKy61ADwVff6fVzb2zRAdp3XBW184AHpeS5m74UwaEDBZ",
  "key17": "3afmKrW9vEXatBesyKX1yA7LkxMfKK976HWcENgH42mNCeGaXrTMsemovk3RokPfDxvhLmGNxYPHmTRUZmfqyKFM",
  "key18": "BapQrQvNxJYfePEEjiqVWBeEvbpRGG3erNc9TdbmQtzFTRmhH9T6LeKSKWMbPAgeJUr2E2NMhkX2uT4Tj5Nspej",
  "key19": "2h1NxSicSoQxRrBf9ck61oymCHFe9KUSo4MKGjWyCR5h8KAj2LEj9d4eY1FVvTeLcMkWCh84Bj7ppLJww8kGVE3Q",
  "key20": "2rR142dwJ6GYbswvSv9CL3qLp7LZKdiYNsqyGMLfzGZCYmS4xQBGf7VgZ6rgD565Un1JxWLr8RgCGEmty6Y3tAHv",
  "key21": "4Wo6ZtVSqsSMGPVoCWmdSm5vLF8a7LgT1UwBMdtg33d8KBhBrmcFBw3AgSTwQqZfF3WPkXNDcokEBtpT2xJdYHxg",
  "key22": "35LNtTyQmeaCicKjJhRsAG2tvmHKRWQLqecJKz2TSE1MJzRkWmmSkKNUqj3bdeYyypkQDL51bvtA6XzDzgFBBSsg",
  "key23": "1hCtscofXkKphyTGKpS2uWpAtottFr6L1Z1pA41UMBoX47wD1Z4RrvcTq1LqYRc3Civ6UtZMNScpzT59CqAj52X",
  "key24": "4fSGuaokSEFRTQDtY1WQdubhHr466qHuRD6YFePp5f1AfbkHZmvbQHmaBAECotytQm7XGki7NmosMp1v3ucUuuLx",
  "key25": "3532hnLXvejV1NGGKvHQBPkWYdeBPweuY6nTgLDggunmdYx5bXHewdVjZ61cGdXrVU6CnnXJTMr2dftDx125jtLg",
  "key26": "2HwaHx9C4QTyQECHLj8ik3vefvMQLsEHQED9BjkJjAbZKsKkRW3Q2VnBheJz2P7AFdCCTnrwfE5Tva8BiE7zyQjR",
  "key27": "gNbkJb4EPKrrna5qMrQRmGsBfhDrbTjURqWeeZKtKVarzrxwH67ap1DgnKWgvMpMHJyBF6PcUJ6bwqwpM4eHjef",
  "key28": "3w3uteEBo9KeNyooprpb91XNg81tAXiyHobV9F3RKtrTMyU5YHFoLLWaKt3wpmQojCE2GGnaoeBbfYaLXFZbQtCo",
  "key29": "3xKmCoqVj2DgFVEYyLKZDVZUKyxSSNMRwGStGauRSNDYatkJP1vum5Ax6d9YvhG1CeHbbGeTeTukztYefsshWoJs",
  "key30": "59icfGcJ3qHkmZXPpGKpbu87FQAdKMLBE1DXPSDsPyWh8ek4EpUrge3Z5wGMTruZKN36irj4bBYiKsYayBfNGt8C",
  "key31": "2rSjeVA88m215qMAVdrmTrRhoQDzH87mqsWg9ZwRJ1ipK222kByRa7uo2sD82XaLvFNKq2h1wnTJ4YHT6fx8LBx7",
  "key32": "xcyhjVg4yoJh6PKWyzhUTYXHMjPd89atF1RQvr5aak3jcMZxZGK18qqRqB8mpTB8iro1uUPos6CnvWPgzvAKxXt",
  "key33": "2awqs8bX2mRyVuV53YFxLiAvRgHe9e1KZ7PazmCPZjMw5TXYQwFGR5hGrLjRX7TtefVCxgZY1HK8MZPi4dnkayEA",
  "key34": "2AY2EavhMW7cmyQnw5McmiYvFTzBpok5iYkgkCojRnJYbvC9GY4UmKUDZrdFxAsDrAdAGjbDnfF1ShnSwV6BK6G1",
  "key35": "4119b56WhEL7xJFuJazMaJ5jqkobK3GHpgkpsS7J7jZrw3DJTikHYKxP8eyvaSooCVSf2Dz7XGW5n72jEm5HRfjH",
  "key36": "2QsnsXwPvwmYdS9uZZDBy3R6D9q4fMPM7xCFRfbGLdrm1bsruQ3oMw9qgUoTU4LsNfVV57Hc8aEzSQtFHpYhBGyZ",
  "key37": "4tN543KcnXJYvzdnMzK1dRWYoovP4oxbQRqFDMT5R3oD3k5kVkUfEg7LZhU7G5ACRyeewZY2MZ9V7u7fRKWC2Bbh",
  "key38": "3BkdMbH3Di9my1enLAkayLnLk8mu8Qbuz5KSjWG2QMUNgvPf2AkwroeXmSscMUy5Dfeo3is2N4aiTjj5pojMoo5N",
  "key39": "5QTs6VZBMM1H68b8ZmUac7Dj2kcqwXo2qQ4BXKBVqvumboNjYQjX5SwvyxU4Qa9QrriZmVz8jghKVLwupT4HHGAu",
  "key40": "2jtBQK8RUoNcsFon1jBKt43KJeeDLDREUHSszZFmShbGPwkdxLUQVgJ7y6RmK9rHv8vM2PtbSK2Q71btszoKsSv1",
  "key41": "3C3b4XLMBPwMWEz166GH4LVGfYJraTneAj2jrQbJAJg3mU3fgrYVkTRRH8kWqmWvLdgDWpcvqvcuwtSjMMvxGcwz",
  "key42": "3LC67iG4scdzjAkEosc5ZAV1EBsi74Yrg8S3NqrwR3xqR2ZBG7McZiUWsmRcvmqnJvmw6jaKyffGcyMnKmcX26zu",
  "key43": "3RVty4VTJVGC7bpTuAbqXWkevEAhg6vtKCEgemy1m3aSMw5Bv4dj2uM9pTcQfYLSJqAcAHPa6gSTiPS9jRbbwJgE",
  "key44": "5q4zwuwVfHQhbdop5PwJg6CFozCqL2VMYKVNXpHjKWzRYRREgMNDTCiJ9gXeksakrisv1Pw5xArpMwqk9hprysW4",
  "key45": "JFShFYYg2oQ2mLD6LmRH3jUsmANnVEThwYjpLQ6dxU42E47zwxoUisC4SZy3UHYDJN659W7NtBiQ2Tt9GrXV53k",
  "key46": "62YzJcm5144p1ezojTS4GoLhiiCbHg5KZbTzG5fHkaYczcUh5kbFwVWtFG5BVtX27MRmWqyxv8RJFXhBM3UNqyTX",
  "key47": "2FUBxHXHckNDycRqPagmUHxfmZVkp4nYarszLkY15HSQSHrkfVyzZq6fjQVyjaPsJPENJA1qwAi4mmgPa6bYsANV",
  "key48": "4ytGu8PfXoQqxZUFYUc3zQewf4SJuVibDCd59EhqScvGSdHy4NzRENVejhNjS4SxkRJerLwjjP57YrV7UJqASdYX",
  "key49": "3LkJ3SKSMeJK3uQU4pR8PVpDwd3Xmp2REdRwbJxzuMKqHdBDmHHkXeKV1NLm8k9Vn4R9SWVbogyJzx6WTTjAXgN7"
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
