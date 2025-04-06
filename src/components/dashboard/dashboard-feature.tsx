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
    "4EnShfPrXKSasgF8VSfnFVtu5Nv1sVFnyuT1zaii6iPA2fyfrbeTKrMcjpYkg7KKNdJ91AYauqV5ytba1ZG1ugTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihdkzBAdnvQgbNKL2MvWjP7g27nKXaWmxNgYt2PKUARHCARcPje542WJanvNJPHEfyLdVZTCmNmcibT6iHZzgpH",
  "key1": "3kxeLz8pjL1X7gim3jdRBEkKqknetQyhV8dbKtCQU9kLAnxXzYvanA69gLbLPXbsgVVVmPyCcrBTaZnft61g2pyi",
  "key2": "5QgdoXuoWduemiXu8S1t9n6Yfhonn8NwfiPQtC4iQnzE5cHM3Rq9fVnc6s7tTUCeX4sL83TynjiHxtXUehY2J7ri",
  "key3": "RmC8KYoYidPVuJFfn59kDqLKL3cnzeGTAvD5BUxopJ1NdXwYxj3RuB7Vu8fid5qhvak2Hbk8R8NDsnU9Jc8xMgA",
  "key4": "5dGkMhopueBGSCYnPhpJBbiFRR4nYQGdwxzQdv7sXTmfT1JFkrjr3kXi6tSaXhX6vRB6MePKj97aVi5jkvdhLQDx",
  "key5": "J8LzKLGfGmoHt7EX2DxoTA8BYcJLrktsuJPSyLn6VKVHMUTxaZbB7kS9kuLo1GiAzKhvXUid6rTV2Ksqhk7v2ov",
  "key6": "3bR8eSRVJt6tuEtHMuLEzCNCMZ8bA4DTxbNg8kSXvJKokB1P4NmfgFHk4WoEa2zqS6VtQmaToVKwWy9cG3LbCsNP",
  "key7": "2LFdjBxCXFk1uoEH33w7rCCuM7ThaRWue72qsykMm6zwnkRsTvHUmKzGJ3vUf6EhkY484zvYJsJz8vVyrmKBqY1X",
  "key8": "4wyUHfgHByyBtDspRryKLB92Hk1hqN5P1Wb425f43V51K3K4PGMXE41SwBEMwjYuBhQ4eA3hHLxD5i2VViwScrKt",
  "key9": "3LJhntFJG8BbzC2igpaF3snbPJk8LDJQCZBubH4fw5HVxhuhL1nggHs45i6dtdj4SGm6HMx89LkBE4nXXUy997U4",
  "key10": "5uP574GSrpVUc5vqG7TPrWRqgYRDYC6Jj7QeFDJTjSSTzYqsvJF5RtfJmERYZpz5aUrB6Ztpgdavc6nfX6Tz1vi7",
  "key11": "41oQimgLHGbts4x9xTwEvy1EssP7pznKPyzqGfV168gayP4G15mV6MiGdEifTbcThdefPZx4tZuep6TWJ9L8EqHS",
  "key12": "2tiaqYst1N8NnZB7mhFQJGaaZNYfLe69UHiUW3eGYsBvzY9RNcCBLccaaoaVg4b82VWmrot83MANSYHvWgn3Mjk5",
  "key13": "2DoTEDcFq2PdJiEZ4chnkUyvtehYJaCgfkdoMV5uM4vKYUgzxasunKyQq5WCsGYeuEYmvfDTFPyD3VJ22SUeJtPg",
  "key14": "4VW3zmGEHbBExtoqgGYkhKXRkTZpmaEAwDsBR1vCL1CHTQHB25hG8kjkUwwwD7BgwodVznJHr8h9jKctU9WdwtwP",
  "key15": "4Kh96NPRx4oLad1ySEJk6JLVgcvssRei9oXZTpK9ewJ4zycY4z3S7f58w4ZvEmsk9WaWWFCq548XH3NENxtYqVVn",
  "key16": "5owVWQwgvJhNzG4WxdL8ioCqT9MwimQrYYphzGEyEfRfU6Jy6gUHUEp1Zdqf84s1nTjuA6JD6JR1jR5AkE2fLPe2",
  "key17": "64CuUq5V6RthL1QBzFvQRkUmNCGKFWe7aPDiqcbWtDKeYeZowszjpFphSYJhSK6qHovFK2jGioD9dU9Y3qVqioKp",
  "key18": "3Fmun4xkxLa64TZKqu9hMd74jjwFcWhMdh6vnDnh1MkNQmnJvDWUwXoCk9N1tNdCZGZhRYmbhj5dci7VA8cAd2MR",
  "key19": "556stEnczQEncrBkTBt1ff5Wd55qcbziJZkKfWVBmbfpnoGT8ui2BXszMN6uezbVHXXKmnC626w37qXAkVxcY57Q",
  "key20": "43M9Z78VQkLntv9dCayeqSDzt1cCUGJxCMKp3JWGqG1JChoaxRfNWEeGFQV2R9et2gRREBMNV8EFgucxGyMZVXJo",
  "key21": "3Njf6Bciidekx7vjmf5F8efvDeq2hXdeMjBgc3JCvsKbkxMFRZA97JyZ9VGT7s1i5NeYMEsxGyG8f6icakqmbdRi",
  "key22": "4JZoo9Q8po74rTJLAhekrW9R1qGqHPG1PLWNR68mJQb6sLfZy3ocgDuvGbS1uBu8nYDmagQp8rf1HKxTeDPNX2gY",
  "key23": "2iDETVGYrA9sPDrtUQdVgsaN6BaFsdGnW9ghyZ9yrMmdvCAZJEC1kHxYfgVsVS3Ri9abKtujZrd7GwSnyXWQCUCZ",
  "key24": "2rHYVs4HeVg2v3AyngT6RGTkAwmeCWPoiBj8c1hTbJJvN2wWH5YirycmvdRvBhkTXjY5LfMhFvcxWvPGeJDfub1w",
  "key25": "3k5Fd12NgEBLeKKeWYXwjW1mGwfTuPRrYTKkt927N3F7EMgXVWtMpadHYDu53cvUt4quMKGiQWSFMr5cVQGwTHqW",
  "key26": "qH7ET8TPwCSgJe6HByqarCNuRTia6tTqHTFhLeVmidmuUXPqmRNPH4kr8nX81GYUwVUdRwvte2AQbspFDeKjwuG",
  "key27": "PKkJjwKTg68c8N7tiHrQ2dbqqDWCTMskRU8Nt6sh8nFke4bB7HzViXYaHzpErG9HMwgfeMXRb8FqwK1Y1mgASU9",
  "key28": "4EpZjWfqr9yJKXQPbfJ1um4ovu7ijhS62i1UXNXqbn1Y9mh52keJ2pWUGAsqPwEnb4BVW5vV2MjxUA3EX2vKbhqi",
  "key29": "6187pwwF6oGaV5jjaoPt82ADFRqkU2wEutt4C9t4TcFuA14xMH9x2xQ2XhQ5ep7qwDd2wTDFqNdF9pEoFMWMUt8v",
  "key30": "52ULsTTVwjAqEQjcEDGmPL2y9x2nbnja22gdJeBnTtTeqCo3cTYyZBYyFCSGMuPr76rC6pNcZpek1eGt3dh4E1UQ",
  "key31": "5euwNCVXTeoEHAaNTRhbRdcHBPg2G9Ja2VgiytpimT9rhM5DWtD3hh91cPUwz13CJMBMTgB5C4HDjyamD9EWGq3b",
  "key32": "3PmpTP5z2jzDogo6Tdr1YE8tB4wPGhGqzM83HqjMrkMo9mAHLmaFw1hNfMubtiYmq59WBiG1YxuBDLfgS3n4moGB",
  "key33": "3Ymxu61yrPJ1WywRuPprJ4cQmmbX8z2Qd3z7MYEE3VuPdxSb2VCxYnkG14T5ATx52b7kdjrJzbpZfzSjZ9SpKX8G"
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
