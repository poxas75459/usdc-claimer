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
    "41XoKKDYgAL4q6HUSHzEAzF6Bu5kXS9K683CNp24dFLbYPqfwNqED5fnxrXieJCBE5GG4Zrp631Y2TFhWpnfSyAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xz6Lp1bcxFg6RcRTSpDq2wVusZDV9AJUCQXN25jSmVXBckQGayZnYtD3aQ5ZVK4D64kaB4ofZ1L4fZH4LNNyHsG",
  "key1": "4qfqZ2Q8UcDSqijjZsMAygVPukTp6ZxqNGhMPrc2nVM9bPP5WYHHd7zbhvrmMh3KeX8vLzCZyVcudX8RVoNTgTJM",
  "key2": "m2KvYHYiMrzSf5sj5PnYPmU13vzRageg8b3PQex94CMqJRu84rEiPxtUS6hNNDKNWrj3LkHaCiDxqymZcVQZPbw",
  "key3": "36hXTFoK7TMVEngSCsv6Af7M2wW2Mkns1oKJ9dZWe5dmhcgpeESxCRPksJktj6znbyyBvM9MKPHepHkWSHx5DaTQ",
  "key4": "4UEkB95R9P4sFYcB4R79GGXTSs6nzJp3oACoCmca4SAVfTQwWhEJNYDncJXVdWbPHLwcMWjVNAj1NQXBxonPQiB4",
  "key5": "ZksnUZ6J7yMjjQDw5LCnC8iCyrzRh2tWtwP5qf6UoAWuUvsT11bseuSz7MbXB7fEw6XDSNpFcHb2QPC2rTA7Yfd",
  "key6": "5Gu8YgjR6N8NKG395d1Enr7AxzSLYWGPR3s6UgzUFZywnb1tToUL5mW5YH5DKN2L6hpLMgDDjH8XWBbbSFxorLxM",
  "key7": "4ZLUqHwjGCJmjT89zqjakEbaQBCqqAy49UWc9xvH78k2Lgedfr1Vt9iiADimZdZrdVEPLYvPJWaxhNG6iRR7AKKi",
  "key8": "3KxXQvLthzNM4JnnCjmSQNFZtn9JjacgHpcFMCsHzeNGMJ2DZ3CF3cW85SjyyNbfHrD4DT4bRewaNnKHMmUX8v7W",
  "key9": "4HpLtT62hSkBpDLqbnQ45P1uFX4jfutagmftaSbcpLHNuuvmfTEq5YYCs5XU5wL2g36WeiWSv8FsRAyvZxcEHf9T",
  "key10": "4apUP8hyXdKA9zFFMVWAgUodb1WypshSDCuWph5nCaVXtjsgw7F2EbXgWd6D8TiHkC9MEq4TLJr5ywfB1eDCnNkk",
  "key11": "4eQRqHwq8a5ad6j9sFEyMvk1pzGBWeCmFDCcZG8r4yk6w19jhe3JucHcxNhkzKW8fiN8tvq5qYuYqRsDE9NGfPqL",
  "key12": "3fWXxzAcmiRVpVaKvFmT279ZPcqcLRdXz33r8VR1Cr6FZpk1GQMLGKBMvhfunzEBm8z4reZH8yHo7UNnRWAch1Uo",
  "key13": "jgemmTvNQvxBwqToBxYMCr6qj3EJJk2rnX5LSVDcZJaMNCdDrzKCE35W2V1SvtheCyhis1r1ftTaJmRfVGWjxJr",
  "key14": "5nxER7CrZoCYcRPwjHNG5G8WsHi6aTsHxP4Jsvi3yJ9RaJcPuBiRbqWe4mqFVgHqDvWemSzSdQq1SJKhu3gEWTwY",
  "key15": "4zGw9cuWepofgh5kTHQSKygnzAqdYE3NSqeaFmmjm24TgyUm3hcCvg2k3yuZpDDMQ7UpDT5gQyxPgnPySxw7Z85c",
  "key16": "4DGosVCcSSZAe1sBpkmopToLbmQ7UdFTeMWXLggpKvDno1fHJpFTP3vLp7QZgJ4LnrnXUnH3DsiQ2uqdJq6hzBzP",
  "key17": "67U7Chu4tRMZbfZLymi2sS3QeWG14hk4PKq7eLx5HmhUmny7CCu4czn6359SwuVTVfcGmjUJ5C6QfU3ua1vxUf87",
  "key18": "3sRXiDjgQDfqoujsMJBp9anY7Pm3WxARrshGCrYKsR9xeMMiDgNFKL8LMBHgV4BkdbKXpLyA5DQW82PsEhwznMNX",
  "key19": "5TP42KTBbwkHxnxmcMkV4N8fnSPhRaYVXfyMGVPeNRonTVqBtfeLLMntogDdevHnqhbWiuBiYBFJ5S17vHgkwrnJ",
  "key20": "4iyxgoCBFv77mnnbggeKaXrhFSvGUebDrPcwshqEMPL9FxXGzkJAzq8mVDfhJaDTZUhrjzMNbvDGxo3DV5U6kyvd",
  "key21": "2vxcnxkvGAdvZF4cvhUtgUjgrcbLAAkiKmeEXGqyQGevTggJ35JqiRDd4k8Z5H1JFdHkDMNznGzV9ZWG7CQUJj61",
  "key22": "3Tie7ci5XnCrVWQ9WkJfZP4DyhwDvKdGLKDWUnMLZCgga4MbdFNHiPxP4evEa2weNXcyZJoRTLveLKect1mUjHdo",
  "key23": "2Cwqp7WyjdhkwcF6oRL2tU5GnZEa1qiLdcFthrz4THXcdDLbUWHV9vLmRpFmBNcsHCpnYuv683brSPaDsUqHxdwY",
  "key24": "4TVdHvxvQmeTbmG67pKw2Ec19R8ER3ezxYQDaFT5mp2qX5JH36eCBoHAmBR54HWZn8Y3wssod2SC1aNiVZ4SnYyx",
  "key25": "3XHHC2oFN6Q2fA3nwDYywYMTpbZG8TLbNzv6V6L2J7vQViBjU3GsSHLipwR2pT8qskFRd2EZccTVibYThHMTz8cS",
  "key26": "NW2uiZKvVN3LkTHaE24gH5BfjCu734DLZPRwNp5StkpTkycLaSTvkMqtN4KBKgZoNEfVJQLuzLqsoVkB7Ucf6wE",
  "key27": "2atXVULe9iPVB7FRskX7NvDySH3pqmMP8xMeNofScXUifm3xLKtxgRHwH1bqUvVtUM9145pw5HAewvucieN3VFUX",
  "key28": "CGFMyUnnFA9Ez4eLTvdW8k7CcBFMDa7L1y7zD9habQeRZJWA5cTejKh2TQD9YsZ5D6p3EJNzYgYB6yRorXPgegN",
  "key29": "788KPWY8KsvkZC1bK6TLimmSe2tEsqSFCz6RAHoJQu4XpPDYYxBr3Ja4iiqYuvovQN6jtqY3nEFAkD1qmyLHpEF",
  "key30": "3kZrqZC8BaHJkWK8gGSbgnUVnbySiGAW1MtTw6CLsP24jPDWybofy2FALWQotUbWHyFwGpFkPDaox5ehnqCdJuq5",
  "key31": "DmQ3Ag7LWkqfqiJGy9bZUuCodaHhWFsHSj12McVmDqHgRJR8HkRgvNDonNfewX7bGBtdpVUShHpF5FxqN6yUd6P",
  "key32": "2BAxqMzQyExzdXNTVXj5HQfeosvjjn8hc1crHdWZqp4s21mjGkixz6wqD1ddQdDpB5rznhxyzmicUNASduDTbuW4",
  "key33": "5zrmCbpPa4DdnrFnrnHWNqLQFEQjekRRV5WuV6DAzV7g4arSRAspcistbVemFoizqhZSf7iQq7rMYwQa7CSVXYqb",
  "key34": "3tyXZZneTxXy35E3ULDsWG244Jr2aEGY6hAYfwD12vqJudQV3myqo9KoRLr6khbt3zZZAxswNyBXE4jYMu11NNq5",
  "key35": "3XHq9BzYruhZkEtGnvB4VFDCSTN3gwVM5TNxqWbG2U1zBg2aTBje24t4dvZTFjWzxRpU7xtufuw5R8Xk1rD8jKVs",
  "key36": "2SZuZruvK7zNv9nUs2bX1Zx3oZTAHtnhCe46Be8QxEQqQsmftXzmBZv8cNfUAcwbytjadxzaEhfbMEyYoUrp2Uk2",
  "key37": "3Dc2JrNxgHcpGjovQcPPpuvEXgDZHqjPMjaP6VcQPQziNn2dDiCzYkErMRRsvQsH37cYYF74RMHdkmG19QGJTWvF"
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
