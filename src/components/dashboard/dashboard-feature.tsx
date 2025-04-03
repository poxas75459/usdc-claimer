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
    "3hy54wjMcJk8y9Seh2cSSB2pk2e8FDVGNAicKkY4WMs1j83oX1vfsFj5YHKXcPgW4JhZ3oiDdARCanJwfTprJd6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AVvaFGwbMq4Hu2F3FeLyV2hKJCzCAUuNyWLw4EyNwH4kaGxGpVFi5GVwg9rNsgKcVvTPrRbAc5gwqyKSHnx3nc",
  "key1": "3e5ERY5Ri1urWSkhgCqk56KNJPt6Xz1PzYD5SzSufMok77BZ3tNNDauS3opjPdMv7XbrHtfzdbYjzLGcjNm5GhPg",
  "key2": "3Jqfpe6yirdqnCpuFyReniVbd9QXfPc2BRcrPFXPHknzR3iU4Bwujjz3WyQBxVELsUQqDMRj4N2ZAKADsiZ4Sn8c",
  "key3": "5f5btZ7Gek4MGhagToMxazdQUzzbGheCoiZMJdWYrJy9gMzVMq9DuNR2ujqTt71uPvtb3GhxVguqwZoJwcb515U9",
  "key4": "2ePwpSetd4iUWmVebWPW9xoJVQSs3gggpyyddAsRBQxRqMFoDrV5ogeTYLJrvMpqDjhcHvaLnAYpouqHwrERdPA2",
  "key5": "5dxJXM15E5TGX16RkjaoN5SbsKtXk1VRMppNMeU5pcRxUBFFWE2hFxKDi1nFnBj7JnvGUGjeJ5Vr4TKvt3wpdBQi",
  "key6": "2ELWq7z6CxiufCenAiPuscrxMq1GfTu7uhu6iStynYL2iU1jKhKYJV6KDtsnzAi8P58Hgvhp9Z8VKdB75sNXpSfn",
  "key7": "2SG7hmhwzs9is7UxmVcKHUb7onMvcZZ3nFuZsRtW5w6mZWzhEUDMA1UJgiBgjNm5w95ULJFqheqK9yiD9gWkshgo",
  "key8": "3osifXfnpPqKmcZb9YRSAKvUfC2ksB5zx7LjuLWVF4SF1NhbrAUxNTVZ4H3Y2H4EApEXr9RKG9Wgk5LSX3MePzwz",
  "key9": "jd5co6cC1pmjKLGoJGffxq9jE72yraVHZ9RBWW7btmMGWRXRmcuFQCt9sBTnS8cEGDRtVwKWtiN3LaUCsvBohra",
  "key10": "3fJRrbN2edoGXyi6NHfZuRmmS5kpNNCsnXPH66r3uc2N2i9oquDZLQn5q47KxEWVgQjNDbAuqDZigEtLQaoit8wC",
  "key11": "88cSvryAqyrW6QYkpBVzziPnMmGDUKJXcbFJZ6seghMSJUErhCwibN4118wXV9BTpz9GyUpxgyknsPewn9XCiaP",
  "key12": "5L21dkmyWchzKsnXvPLxs4rZy2XXXXeC8H8m5pnQ3EXiBs2tREXHeedQkgeUdtmy57VdQVVyXuu9YqBTT5ZFLFjX",
  "key13": "2zAbHDo2JbBWh9vv99PUin78qnypdu3KG1FW4dx4JXJ4iYSmeD2QABHDpHrrHsv9r3bk5sRorvmrcn25NhqKLhMu",
  "key14": "N8CGR8uQx3ZCd9yKSDqvoAywPRiBHqVfKwy5M5JANxUe8JkRQm71rLSL7H6F2fHyLLamhW9ZjPVWADR9EzNYRx8",
  "key15": "4M5jVX4bwoTR6CeY3vhPYPTDXxrkU7qPgaJnE41qac9bi4qyvJZAm6kdvCKw2yPAqLvmXzuKRNbZimwVKeL3PizN",
  "key16": "52WjyACUpXLKXSsKQXLux2GM4ZaaNhsevvv8SsgGfeDVYy6cC5n9wEbFLiKMkCjFnUgvzTRuQsGwgw93buhzwtPd",
  "key17": "57atRjWP6XkcnGC5S9UBi7ZeZREHcY2HUxUTbUgto29BWkFFgsA4Z9w4yiLCoTsqToyGVZr6f8FWwajiHnYpCN7F",
  "key18": "3WetFzhL4mLEoA8G1nEQHxoKkQyqBioR74cB77SzS2NRqHFmRT6LuiaDP473VFd8HbqHjz6qyGMM8TFPpMhZxNT",
  "key19": "2SPe8vXmUkYKqath4DtBjihVuJnL7YCxsvw6KHU5RDQBhbKc7xqZdt3y9ucHeELz8TwJpiH6ABN7ivTxgpw41RJs",
  "key20": "4qLoVUNhLtsejGxriHixpFdHbyoPLqHQ7q4a8SXV4Y9KsK4MEKmjhZQeUQ93gb6xukoU6scEWJ5448Hs6Ub67J7e",
  "key21": "2qi5bUXuPuyhr5oWidBYYp5jWHEiqMtBBbP2wnAFMRTyfpAKU2ZXk9wovaj5HVsH1j73BbbpPn2EPqCzZYPXs2qK",
  "key22": "4x38gSn9YijHdfZX249CPEiphvjBZdoWWFyNpfozhh439ZRkj6388hZjK8x8G7XCsGvfjmAsnvvCcsSqL5ZDkhMJ",
  "key23": "2rSV51RpVGueNkrdGTnWtCqqtkwRi6Dwu9hSHsd37ZXMrjg2XnqquXnRSNP9LnhPSBPMf4bLSHzGTGX1t1MBiJnn",
  "key24": "33nWuW7sniRk5RjNJxGSX7apftruHbSt9dJwvezVgvCutCmvku9iZuNapoLz6rCgdUHtkGhcWT4Gp8izRkvxut5V",
  "key25": "2DsSMynxwz9Hk8c33aXV8FvdB6K9VAg6a6ygpcGv2DnUCsEMFvUrGKiRmnh2eStiAY1aqL1KADbQf35LV75ag9Yb",
  "key26": "4R68bhdxPogBAq56FV34zuY5tZfKrs1rmcsoKKHB4JJbtZSy4FmhR57Ki396yUUdWS8Ygz8Sc4zip6TVn6iwiANE",
  "key27": "5oMpMvmwMETNArYUk97dfQ2MGPsZxHPVTARro2unyhpDxxjbS98HyPqbW7NGJFPBPxFabD5z3nso2e7PbSzgqi59",
  "key28": "4RNQNd8DAg88VAKkqHJ1SJexsxtHGbkiTvm2QvKpnwQrJQR5Haczi3cPfr7EbaoY9YDtDWBZsaXQC8s5NANGzZWU",
  "key29": "4PiWr9c7UcJzkEpqkT2EPik9sh35rjhmYm8MSQ5ymsD3GSQJFkgTjZrY42JMydSAAZMMB4CQ4t6zxFbCR9SYY1L2"
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
