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
    "5gL3PU3e1xDD7hPR1HawmgNCW9pcvTTXPkdWKpD7HVcJzQpuyUCj1NyWJvXy9Dne4ZVQZBRa4mmgVNYpyufAcUTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Fk65H1A5xTLitNnk2AoThXDswKP6kpu2mTuMG5aCQYVAkSx73TDEVTA5Qy8ZckhV6fr1HEE9JFPFPJBcEysHtz",
  "key1": "3Y8ZvQb93bJ6DD45ikmuXhMF5kZkxcta5oCDZPkk7T5JEyKuf9zNR4SCJFDCkDpctQ1KQGS3p5UxjaB3rrriG8Ej",
  "key2": "3Y84Gf3TwjZQtHD6nY7YAHkr6SnfrQB9qJpiFm4koQw4omFFyduW7M2W627TG4N2ue8XxtswtFCxUgV4aTMwUStW",
  "key3": "66zEx653ityMiK2Jy8K6QpTxZx1pnboSprch3fZa4GRjCJpRqVvPEdfe7Ziq6bxmaiqwddoBU2kmtov2BcHYvi5W",
  "key4": "4ayHkGpERCJPqZDm7XHmRk2m49pmGuPaP95bJR6kDwLWFpFannG4tQykbbW327qccKrrH5m7LeKoEqLU85ryPEzv",
  "key5": "24raGyoVbKTgDEC4SonxYQNiMK3B1QK1QXnq5sVzfUqxdjkChqSRe3Q6LX5BztNW3iwAY2ydhaYPhynzJbzLSUZ7",
  "key6": "4hRtzZnw4MmMvh45DG38L6Pz8qHPG3BJFbK85HCMT11Ene8WzSHJb6WSghh9qy1HK1Ver5SniLp9AzyzcHundMpF",
  "key7": "38m2pdxFJ32SS9AoZkVstF2RvdskoH5T8qi9gFUCpN9ihsuDtJCDuc515rzDvYQ4VdXiJU4xR9WQNUKgFZZgq1oJ",
  "key8": "435PzmuPFFGTcNsn4WbZw7wDgboEge7HTfCVhtJrztd2AuhVZWTZRpc7HdsH3LGFu8TZ7W6iaKDw4xSp6rqCyCBc",
  "key9": "5TPY5b3yzzdwsBUV8MVaXw2E2eKXABsMSKpjfo953s2ZNBoJcsR3A9NjQ6L4EDScjivTB71racYDkiqznpTUb4a",
  "key10": "3HCF6s9F9LZeVGgcn6vxfdTvqixnViwSLfG2Mru1QbmnvngSP7954zWZ4DP9Q3eHk57fDXKeJduZUtgGzk8MEyz",
  "key11": "vWxQiaPomfnxRXASBccqLvYxDwLGrVF793EwJSa3bnq1JkHPtWTXvDaXSfqrkaCYvyUADDwChGKtGfwk86WciRQ",
  "key12": "3sXEBLuDGKftmkbDVfZ65vQSoBfJLbncUrW4H86BxwP5oAFgy5Zggdms1qKkecXTAXovDNifNoQfsWYR1rMti4WP",
  "key13": "4twqAWBnMnzGEVxGhKiwJ5DeSGkDdkRp3VUsaRVwSJMfi6MNrcgmehcRsNiVyP767CDPgsjzdhzdR3MVxrj34ZLD",
  "key14": "4n8iWHTtAJNmxZdLNKK5KQQ5Wgc7hbxaMxGnLDHKwmY4M9p5rb5sufrgCdPHcktKEPmoRBXpZQQRCZZG4akBYV4t",
  "key15": "5sswpFMHqM2BoxTuRGdFAMmv4WHUDCeetchWYJx4sdh5fyqraU4jKqcModU1HjwXUpWhNWdWGEXK1HunEWKaPJ2G",
  "key16": "2QqWZqUWfmNkx8FV7eJX8bKmimthk1bdzHDYvLdLHWLRGaSXTgogobTNfKK99Ce46VNBEWW3JAza1Dxxb9ZjPjRg",
  "key17": "34FQHJ7FVsGUzzYFQhMn9pfbRDruL71GBJubHhTesreMas25pC5uPEQyHSQfRFC6oRMw8e2bx4K5k8TXX2h8ZQPm",
  "key18": "5nR28gFKatf6i5RfvugumgTw6sHcPVqFtBTvQuWKZ9xmXKxx77xDSUXJdVPwgCxGwshuE5a9WJfFyXK7UgCAVkEj",
  "key19": "3Jq7j2KorUz4czcDzoxbJzWzq7rYErNzw3RLvMjYzn2wKCrXSmsRR2CdAeona1R34xvU4c5ybDSaKp5n51YMU6vb",
  "key20": "5wj35UAHNLqCoXS8fYcvZv1XxRFqfeJ7CFPcZJKKyRgLdoDPCY6P3u6epgca2fBiTa18SZctXKTcNTqTeidEwMN1",
  "key21": "42bkMmx2H7cb2x1geixaVAbjFkqMmBdgBrVyAmDoF8eFXMxkP56kvTtnxVpjLNj7HocriqiabHKhtfZsQvYvHq7p",
  "key22": "3qVwDQXx5ejSsrhX3M45ZQmiAkCZaWpuw3jQFfBKcrn2CJX4Y1Dp3TPEsMcMkFfVKyMnpRHFbfKCbe7LAXjTeBeN",
  "key23": "3yYCTtvCQzudztvMRwQ8okTQvJPafizh9cpMwYFJLoJhK1kcDEnaCbEgeiDnJ68viV1YheNAwWxgXhJzqeAfvYEk",
  "key24": "35Zi8THpJDnoACGNpuKPKHe5hNHHGxy8iQApdgiecQdzmUF8GJKnhv1VMswgmP2gQAuwJ6MBE9nmvYUTcTPx8Zqx",
  "key25": "3RpajLVyGC6pe8f1R8DgQyGYjwvCjv8yxptiEz55FD9cSCy8jU7ozrhEqeodu4vhQEu8VBaR73DTVVaK1vKnLh53",
  "key26": "3SH7VRCXphpHjotFHqAGjSMWSM4aR5D65CgBrDCUVUMQ7tZiSSbko3iJZD6Kk6r9qY5pvJw1EC7LvvFNpyJug8UJ",
  "key27": "2GVAb4MLGnANw8JxAAKXXpnJYgWycx5BkaouYLX2U13t8YsqAKRDympkXhFZURXuNMsV9Bg3TsZ4vSusHEnXvfxk",
  "key28": "58pGWUzCVgLVaPdgyLkWZgNUc29nykoVPjocXiKmyM2EofPEwLAeooR8EnTBpnWVLrRX5k2nGYXbtUeA7srHtJf2",
  "key29": "4MbpW3d9XHGCuGD7z7QVP3bn1NfqKgHKqQa6huYqZeni9WGWFFPUKk8MNm3Fnm5cBBTDxuristbVjgeAodCp7H54",
  "key30": "51HH5AoMdnwrysXAoP28TSxybbp2jpJYQS92oDemQVJVfYgDzKiMuqdemaf3ESKGLLVTrYnyQ1v66Fne4bWZ97Z5",
  "key31": "65Z3QrWWmLX2SvK45oqiFFAb4ernA1S7qdvTC71BQKYpmPcjNbWCpgJ2BUuyA9HeemXh6DBg4LK6iG1Etkdf4Da"
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
