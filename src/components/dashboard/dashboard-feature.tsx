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
    "wcKJYLGnPQEpcYuhyYyYsDXg13bFRgBYeVNZkUVm5VzZ568S1uppS9VVKBRL4E86KDdLiD15kxphvkNrBDe4Phq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRMh8Xp3dqGnwFcLKeCzuELfj8Jh2uLhDhS8CyCio7SQU9q21yTa6nQ9yt3HCRw72Pw3fGGRh6YxVLQKxyz1xUB",
  "key1": "4kUocpsTWGzDok6ow9UnDMjAMSEanbpJy8zUZPFd7MsSToRtkh96DmWMg9AFQ5a3v6fpDaoktz1vBtqkFP78cgVT",
  "key2": "4ToSJZQ8TPZKNy7UndGxHa4YbgeseomWyjxfxNNHPyxQ2yt1NjAJVQiygynBd2idbduboUpntqTuv1m21emUaHv5",
  "key3": "3VbbouZx1Rgg7Va9DqL5kXucQFN7N4SBra2F93pmHDmvEUSQF489bH1cfxN8k8xMchVaT9AGWx26sNXDPXY9AZbb",
  "key4": "3e1srGaCGsm2qSNBus36RoDXTaUab2rDDz6RMHyQ5xRVx2jbBHSD7WJwLydFKCooMsfUCYewXBrURU1J6icKVpLt",
  "key5": "5ZQnsGbXNdGi7aHumsoav4oLDKtDjLY2zEeTqkE8opoSntuhTM42Udg3zJD3oJCh6TWsxtLcFap78UAziWUes1d5",
  "key6": "3KuVSF385tGavsxTE9qm76td5tvgfqNPY1ueZt9u7wo4P8n5R6zd1FCXcRTFN5TXuMruAcHHmue5w476uwExdr8J",
  "key7": "5sHSnBLus52iHwQTg9LBmLY5y7zxCFiRTt1h6otMRQCxonZmvp8CxWqcso2AtUDm6DxC2Ke9WpbNZa3Hxk1pMYqW",
  "key8": "5MW2wfZwQrrYpXRM59e8cv8FFF5vEXCbkohzFQBzYtTs7z3vH1dFHY9wSgLGUTtGVeMvVaHJr7YCYzJouaXAtQ1r",
  "key9": "3BGh5ugeRM8TL2hYJ6KCh3RjmscctgqNzyu8vZG9iW9wSFbHyv91Se7ezdPs9Kh6DRrSP5bxNdKhztuWE5Sd9mRP",
  "key10": "GKZNV8BvDPApraXE1vUTvYm8EFgeB9Nnty3W15G9mwzqhiQRL1wMjK7ExWcrh84yyDsGdb8yHrCwfnejT1goxjh",
  "key11": "4MGHVv39y7hhNEPx3UznzRaUimorqFQppzGfeRvvQcoq9447i2tBYuym88rQsjzUN7KyBmj1qrvpUR6QZh4k5eAH",
  "key12": "3n8dPaE1DQdZybDt2iARDbgNEGMhAK9fs3JdoR1PVBjWDezSY5yjdqv7TEABV1hZjwY9yWcRuu2hvMVQxR2oNXR9",
  "key13": "5pQJEXz847ksKMZ1PuLBuvK9dfav2ahNG7Saz9oExaVPMLY2DYbt7SmF1RFwurh8PZr7DcPwKmYTSrbb8sDwTHGR",
  "key14": "2G8qbqgztRU3PW1j6VpEssCYZEQJZjM1qGC3e7FPacrsyuThkzdCfxYKQUx63n2AH5ADoCe2GMQ9kgMREbVesX17",
  "key15": "xd4rbXvvjssfAznL5tfvGoirUCdi4pnfV9AWmNkRH4kpvdnq7YiQLJWoJynDpuLv3ZUTH9iuAX1RasgnrCef4hV",
  "key16": "51R3xPfGTU3d5EYhVR6J9AWCwQ1qCoTgUV3CrDmXHiaQvPLmX29xoNjqG9jcbG1kP3aySgtw5U2rEM7es3wVQQyU",
  "key17": "5TKuipY8KzL2ozyoPhvWwPLw5AzvrQVfazYrBJ6sW34Pih8cRQbnuGXi2Q2XKGEdaJWp3LeRXiXknxkeToAtzQNm",
  "key18": "3yMXFx8544y6KYjNZhQPgCbUZsmw1NoPcszyafzoeHTTQMTLJdWU4u3Dh5MY1xBSEa7o1NzyyTUxohQ2i7DGQKph",
  "key19": "SNXWcRxgqkTbDXk4EDfwXWTj5Y8bRtgdcSkgfb2HeM4dDpnbuSZ8RVBGNzcUNnwdZrDtkZcL355ATPEFduMzBtr",
  "key20": "3u1855uZFb6LqDy7Kbeh28N7keFxSPTKrHspAmbDxvX6wWf1fi3xk1SDixjTLGqYxC85xN6M6XdiWTrEEB79E1FT",
  "key21": "29B9JnSNdhQAqCMcQLpiJXkpr8MLKibye2L5bzdnrepGeQtckUe25PkMSDfqXt6YMtTM29gsqDmhbFjK66KdLtkD",
  "key22": "2birDv2ZBwu4jDvMESaUWtBieLpz7Ue7EWPi4kcb9mzMUE8FzhRuS2qKRtfqZHFmQeczPAaTpomQ2KGVJs3t8h9a",
  "key23": "4S1FB7jN7RUgJGrCzbJHgyor1wjjExPmXqycS7nJHfpBbVyMtXeVZMPhGLGxZmJj6LkFjrSXxptcc266xW3qmu8d",
  "key24": "3Y3fyTx44TLcc695Kr8CrXUj5n577S8PCWq2qoU5x83YK5ypkkDrxDRXJrABn9krtGBbkiHpsoZ3NdcTvCWdcLBc",
  "key25": "3xKBvB8Gyqmb6Js3r6dkJkueQ7n2YRzRj9K2iU3ZmjW11d9YLkHRgKNb2hQUhKKGP3p3GVyou8cdgTEtVdX2tHYi",
  "key26": "4rnPfJdr6rrPde8dU55o4JHGEkc1MEjrTRptNExPHY9ta4ZBLqgKW8Le3xFDJRtL1WqszGmaQsii4FUq7P8wvZQS",
  "key27": "5iMkebCAw8db9pU75K1WHjyTP422qNfQKkyfJ7GQkRQjA3x3CNcSVjMpvz4ykRxF35r8r7ka1F2QwSeieEAdEHUL",
  "key28": "31xkpjAXqxaZZUxDzegYe3uwBjyCwychPJiXovJdDiiSYu6Bdj1WycwmGkwKQeV1dkw4cWhXnAr71b6TYpKNuXWW",
  "key29": "P17yznCujfWFyduZuRe6MNE817wri3W5hkFJmBpBsLnHuidoiUjQyVjVzDAHAuFsgmX4W2QkcJa3w4uM7pBnPVN",
  "key30": "51gQAmx8kmqytArz8HvRTanpen7uH58gsgQSVFK4G1vjSBG1Sm67EiJpjsFEJFcjYDw3iPttJngozEZvfE8nug9X",
  "key31": "3V3gFUU2NArNNVRMKVLhsPRpnLYWUWYVCQefGT2BT1oDKUiVeRbJfvydadii2xSBwhCpwHmXdJGx1z1PJfpywszB"
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
