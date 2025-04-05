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
    "2ByAfrHxDtUA4eSnB8Wfrg82iJPououFmWxuFrPgvvjUXNN2GZovv1RXB19J9Dy6DCUT2uG5W2uUZxc1dwDN2o3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPhK6aFAsHAsZmpNK2rfDuZDJ4XGLsqZjV52GNojXvSmRsYFzBtU9fypKUDRqjVs5F9rHmGcgeLBTgSs1KTmURP",
  "key1": "5RDw7CyfmLhipPoFYQpZgXRBPjGWBebagnjYUtGNhkbWWopvonPpg7H1Jno4tB7pynonvxqPtmf3VSZY4kKDA7C5",
  "key2": "GZxcnkW9nRg3ZkWiML1hM1qTtU4KCgReXk3VdBJ4geH3DWkWAyjmZdaSNkzzeHRq1TkqSmP3qutWmXeKyXPEiDh",
  "key3": "3HuNXRNvRKgSbMVK6194Vxuqs872eHPki8Vp7mDyt2n2qz8gv8uzKmtNSuiKkLmpY5Roo7oEqKxCP17cDqTXgH69",
  "key4": "Vx5WFnUBmVVNWJGySNoubN92mSSkEkPVELGD7eLcqaXFozF2RR9W7xwxFSoE2FpW6FZDhCZZXi4grAtsGWt6LkT",
  "key5": "C8HFK2q6adk7sscHPrkLjEUWK67R85fcoN8XzSoiXebZqxqfjwPQXqbUppYVyzJxAh1tukt55XZeMAUR5FUEfWa",
  "key6": "413HpEMtuZCjRFhQyLYLgBEkUiPN1DaD8CKNXpDtQH8swdVjkfsor48nzYAPS1nnpwfFTAE857Y8VaAfmGj1B8so",
  "key7": "QRtdDG1UMFrGSKHtjjt4RAeRD4VCet7FeAJNxiNAF2e65HqJFEbVasqfpg52bzArhhv7hHz9ufCmw5bNQQyCVtd",
  "key8": "31caXHf168ZzMzyeFkU9xwSG3PAoHvY8pGCpY9Vpt73kKtd8iFh9wBHwAr7Ri8XyWxJSk2WAfzaJu6B1y1n1jd39",
  "key9": "59WvFPHCDRX7RifB4ZAafigwghhsPveaS7HNx53tiUUFM9BxJqu3PRvuC7ZV9KZ7FGGovVb5sJuyF416ph2hWyHo",
  "key10": "2ZmrojzDk9hRCw2AsEJUiTV2f4hiZXgRrHpokYi8tVQ1vVk4gQikzUy58ZtmqPs2KjyvptWDhPFeEbhzLAujqy19",
  "key11": "5xtzGE19mbj7N9osy6kaXJvkBU4E8Fd1V11dEC5RibXJiry4uhhgJnZNt9TLmtAyHmHsRCPoUiSGS8QLcavKEkfq",
  "key12": "2W1QYFdC3GjeRr18k3Hzmj3VkMfUW4ZRnmgrMAFVvAzhWPqeEmFmL1qcY2D9sxQYVGsWr44Qm4sbacbDevcJgZhx",
  "key13": "dAYGshPABzxxcbWck3QQagS8YALnTHDFT2crfQEm5zYk5qPDX8bH3XekFaLh5v6BRk4ydz4eGj7w2GfLtwSou77",
  "key14": "1dwdDvCSjNmJ1Qjfv7Q7vhvt5MHj8BU5gAaDfyjZAgCVPEMc565qWw8RpM5sQhFQiCdws6fduw47Ce4PS9vDk9b",
  "key15": "4iVxVvGJQTeKxfuBrgjxknyQAiRuYhv1H1xVVgrzK1t9Cdo3rrgcGgD9rLdsT8eWAkwbYVPUvxre4CqgeYvaz5WZ",
  "key16": "3G74SE77TtUEPRZosMLaPBiJAuaG8hsGJsuh6Q79PEwjogkxp4oBQasc7a8Xp9v2Nf6nu6FRRCK1UPgG6nqmWHEN",
  "key17": "49VsRjndZhBmPx4pnA88HacQVbRyoPDRS2KJgMgBJMPHM61f2V61QfMRsQK3HzziapM5aHbsUD6sbf2DsX9jGHoS",
  "key18": "2iDoG4GuhnmjBcFHZpumFPGqvN2YioKYEQGHicx45XWmF7w5572Y2UsA7yb53LCw3jQ3M2i1g1fHgbe3yu2dqnD6",
  "key19": "3KHLA1RihtoxZ39ebyXj1B7gKzQm9ciLiFgGVKbMJ15uRPYK95LCKYvoMcYVv4b6obSP4QM69hd3tt39JxJ2yCzq",
  "key20": "4hKMHqp2ypMt6wqDVK2Sm7GauPzLyXpdoJ3xUQezXH8ngdy8afP1jN7nvqnJbpBcaoKDRAGvBAsRFMFprZXjRksc",
  "key21": "2r8VeLBe33sWuwTFXGZAr6avN77SQdiqDw19Ex6sSY8yZoWGAWLPAGHZ9QutfJDRhq6Bw8sTB76LQMgDww5tJz51",
  "key22": "4KChrhaiWjCvdb32fE556nv2KZRHcVAi6KtnKWPPCLSdPdgfL8336hPWekd9VejCAJtSnAhYqwN6w6LBcfYDDca3",
  "key23": "A8riZukqCJLEZYeSy1TrDrbdstedrLpq7MW7cBs4dxvvc5ACpJ1ar7JQKSjGBJLkCw3Z5iz1QikJhy4iBEZpkzu",
  "key24": "34g1R7KKwbuc5U7axJSNkBLBnqD2fSZ2n9LF7AfoERjf5uvw5heutdjeaPmegBWEfZavShn6nfcfZ1EKXihrZfxp",
  "key25": "5DnvQ4w8K5ukWQUrtYXqTESuDqykWtZBvHgqbWrVHo8ax7iuXg8QRzerxQoRoTsh3cgvKZPCqZ4esY4ZxF7tmgqn",
  "key26": "5VcPsU6bnXf7mqV9D9r7h2Aq9WVXUpCvv3FHzxRHai5tdoZadeuU8Jpw6aDRaeNWtrjbU34ksQv9vipKdfaokXcZ",
  "key27": "tLKs81QVEz1KUf3Cv2XVsAiwagNevZquzFX4hVbq3swmtxeyiu3jqqJciq9ebG9aLg93vt5g8PHjsPioaKg1XcR",
  "key28": "5PvM7zqMtAEyhzQa3RggoJaZS5DcH3VgLYC1wBYHYGgHkb2LA4HEytM1pCQ2bFvvF59rsbV3e6bYGNbjgHsre5vD",
  "key29": "5AqzJA9AkqDtLqHHQqokRbt65nPm7rkSU2eRXukViXn3JJTo37TLBVT6kfekbm5MntNJjCAEcwWnjn2pz7amWvML",
  "key30": "NqoyRtJacZ5Vn1cnqC3PyVezjrwGsbf12umeMyghdUPFdF7KxXmKgBLE21hN68DTSUNGxdo88mJxCFB6CAsdTea",
  "key31": "5ZLMgX9d4vR3UuuYBiTp9VGSKqYpDhcvDPEhPkRCnDFJyZw621S3Atkd1NY8GYJ2ChREGxQF26d6cE5XUdcUrdyD",
  "key32": "er15bZGKfhHDibYSCsA3NsLomVLgbE2yzYPh6XNu38vPjg1F5UYJxKGbNPCyCZoXEuX9CPzLr9Vr64WM4W1d6gL",
  "key33": "5KM1SXRjFebwiEMgeLytX9X7LLk8pRKKYqdH2e8BQuE5k6pk9rfiRrnM2rmqDbMazbY7h22nSMs7VndvFMXBshdm",
  "key34": "2wxhgzHj2kLYAWGSjXwBCs2n9T8PJUFNeF5kWeVD7TshvjHSaP3TAzLwKoh4yHuwKbUatCC34th3V5Q8rony1KoR",
  "key35": "4E5qYGz4PnMGkeFVRYWmmEbBvG3zMCTvy3Bx96hGpxKRCSv1BYeE7GDasCQeynXyV5dM5KK4MKociEKSCNYpk6zi",
  "key36": "3ar5tSpiyVW95mNfcJLT9FZPFohMXEA2uVFc38WA57fp5Zchr4abNWf8KVi21ggzafr66UypLaGGYghnzx5WyuUc",
  "key37": "4crcqzTXDgRdS9ATcWJUGLHDjgoXtUkRVrMaR7wLQz9wT5nDiRSzFLPiJXzFsGTHwagxW81FvrQCeH63fKfoULUT",
  "key38": "3tSjtDC7sSVd5SHaok1wimf1iQercRz6ziDAUi7FpmHpCrE5tTyiXT5p4GJYVjuyxvQpJj6KyuzSXVKreymEiYre",
  "key39": "5aTX1uXwPocHsvG17ipiCXHsRfkqioYynfY3S72W2jAfRza5kEdDG2cx7w5R3YGRBjUvyqu5DubqwrWGVYFZjKCc",
  "key40": "3uq2wwFnKqUhyjKJEgh3juKQGWBGuFU33pmKv5ueZEcQNYivkxuxFrHus9iKrsqQp3qW9EwKpoCLsBXLC8EsKfrg",
  "key41": "5MYWvZmfuLEJLGTG1kbYKUwX12i4fJvYXiCUpBcp7EyNbS2stq5dHNaJSCznVVHruzxMM8PvaZmftxQb9Zv9c2gF",
  "key42": "2KWuJkc7tcHRoiQQd8AtcZoU7izgxpLsTxEh6noBBxQwQDF7Rnzw9zoVvauU3FPxhtgoooQrj1ixZ1wxbyLQvj3Z",
  "key43": "PGxV5koAEuMmcTGxC4qVVKqLhXdeTSXggXV3CpqaRESqmaFTMeLnKR2DjVQCNgUvhQHb1dafTQZHbF7ZhLYnEDC",
  "key44": "5uFYf8hPcmqytsVCdKCQmYqtPSTitgezNcQwksFFUVEZnfkfUtPEiudwxDcJs2ENsuLvuzCXQHQj8ZjrkEg8JF6g",
  "key45": "2vY4xzDujBK4mF2LED2EKF8NvNooCEgunYQud3R1Y23ZoRqtwG6AuKbmgyt3MZ3AJeN8T6yLzmvPxQe6kof2K9hX",
  "key46": "5QYELqMrzCRV4hJyh6GeaWUTubnKNWK6byuvxCeFAGYhMDVwM6MxbL5vz1r4UmZnNrQNZuzqdf1qXd2xPL9egiEG",
  "key47": "M1h9gLscJ7rRDKf6m72nLAfBPrTzhvwQheQzJYEZfyPQCTrXmXEXy6cMEEqgnJTBZjHpfppDtMqjGQMv6okpfKb"
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
