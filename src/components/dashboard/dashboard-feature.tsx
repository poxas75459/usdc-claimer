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
    "43DgFTfsg57rkBpYCQRNxaRiihaRr9uBfR3CJEELXn8Sc1fT3uGCHrnsHRHD3cxCRnuRZc2vnC9hKAyuoyuyPPRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCMFohxxDsueqZivSyRDp1qPfMMqkKUTDgB5W3hh83cJcGX4es2nK5xCi4CFAs9zCWM2uvhB2Kxc94ZohEGjCqr",
  "key1": "2Wo5dPMDQw7CmnBqdnCiRg6HQotexQHF3bkAsVZw987wkmCvnWhG6iNWR69q9ZnWodyVkkofnVaHFjN74QUBP45k",
  "key2": "4WJhHAMXRzyNr6o8EgggQmyX4ujZWYUMbZAKpZvL4XkwXrRXswcNMdrTBHg3ck4os5fa8TxzMp53LJxBo58VtpmT",
  "key3": "5JCtv9ouhj82pMEkToGM7kqef7UicfffbZRhUjQBMbsMMWb825vayubzcMcf7QXhRx8vDv152aX1w7nse2Ak5mb5",
  "key4": "38TiCDYoa78H9B2Z2EKSz4N3TpMT2R44wHbpRM5qf4dkZxzzU7dF4rrRAX4HB2BPyKWmGGJT9aD1UcoWbt979uy3",
  "key5": "62Z8m7FhESMA9J3BPUSvc1o9zoSnwPVFDzRYNEzVsue9BUQzx5P6oryxTK23sTCdNcxKdh4pFrE1GGAmPBa6GiT6",
  "key6": "2DEx5rMMdNLK8kK5JQZ2bmnXGUAyBuRQhwxDBjMN35kTKZpjdcFJ69LNmN9UH6PPu7FjJ3HaQLdMMB9Uwg41ZVf1",
  "key7": "yng5jdZkhxsEkk8W3nVCTtqm1ECfQordVbJEgk8rDsiUg6P234PKWYz5KX1j4pe72M2d4LjDywCVCQGHr6cvD9G",
  "key8": "5hnjZeCByCUs9jmyFtX2BMF23LzMD1hdafz8XXHfXB5HsCv9qd7WBTvUGL1Gy6bcyQJnVLPJAQUbC7uViw2uSUMU",
  "key9": "mMGa3UgwUzkoQUZG8tS6pAkb5ZpvPD9ruoF5H98JFNFpxBse7SV7vZi7b8s18WZmz9hQ95PjKB3rj1HG671ZfRB",
  "key10": "2g3U1ecUbgv6SnELiDrBj36ArTcodeaQNRrDHhccdv7DUETm8RWZkDerFJj7Z3Wvfax3CPeF8gvWfMvX9WUkNHGS",
  "key11": "5skgNpXtUEJqUKiRnXafJxhY9t4DUeBRNsR4kE6CsRSo8ENquLVvhMQHQ4ivJUiYfphu8aC9Fmimy14KuGRDGaRp",
  "key12": "65LGx1YhTavQHUf2S3zvKMosLkexBZ3Gcpy3NprQLiAk5YKqkxyCJJTsJE9tRrACePok65ASshxJKM1YtJErwhE8",
  "key13": "EJdwMazYMWSnFgYDj8ARNRFHdJqf3LJcruWnxfmDZvPaSXoazTGAPCt1DUCNQc92aEzQbF33nZtgR6F1gAdpfdw",
  "key14": "3aV9JqRSi973JNwBj78J2uzdyjdKgqaipEbWW5ADhMerWUXmiyXsWjCDtcxZnWAhaez8XbPUSzDpkqyaybKWSwa9",
  "key15": "4HM3PwVafRqX4KU3xMabtuSjW4xidDdXRhJ7Sx7PjBpD7iMZNArsQxAycU3iyYHoYkkrm4FSbanyQ994YWQxiYA7",
  "key16": "2vjYL3NDTR4JpEbPpCionfMcWYGYZ8aD6KBSxABaSu4PJy1dvCxjJSX2H2x5K5WvW45ESXXY7htseDd4cmGpiGBb",
  "key17": "2EHdM3VNfBx38QrNxBDFwoNkvxSmr3f9cw6YGMt1rWzA6iGyAR8RokxLXvo6GY53ajop6npxcTnLrJz8SVbvEin1",
  "key18": "5rfEhC2qnWJXbbLs5bujcmXWdKqJZg2yNV6jXw31TuhXVZJQmvvrXqhmQw7B6YL4EAuNyeuszFZvhEUTkhBSqCxB",
  "key19": "3Fw1tQPCE9Lqa4EusPfWdywoG8wED5PRjz8hpVeEqdXSCP3c7LQkazvdruu3xf8oABQ1eoYgkWgKYiN3RxaqE9nH",
  "key20": "3MM9Ujav9w9rmzB6BoQpkwzjt3JV66KbWfAhrbMssrB7NLx4ahWvcCttpxwXXCLN3bHmPSa8QYLN1Q7pNS1bndry",
  "key21": "4DUgvd3uV9mnuTdJ5DzMEhDLGEmM5pPiiW5axkB3dfugJnkiFHpjRhmFgu7VgACU3caQUYMLKMA3Pj3mgAn9P2dY",
  "key22": "4DTJwEa1pN7cKFaU57zC6YRDZyd7cRuGbePBbCvRWonFnFLYFdAK6reda1EBdybsmiwutYieJMWhs81rEA64yuwj",
  "key23": "4RCYPGivxCA9M4WVbPnvCHkwv4LRbnDcMK3YVgeq4ZqZVRbXqdz2FBuNhEcdwbySEJeHaGFXMdEHxMthTTR2Ls8P",
  "key24": "2R5rHnMWnXikPY4YitEdvMTnWRiRaWYeX2oariivpwspenGS8eEGk7ZRx2ZneBpT8E72Zan2QSn8kGEFsMbD8vFM",
  "key25": "4WAS8AX12cUjEkCxratQBoferqPfR48Cje1PCaZM4o5A2FkR8Dm1ALwZnwxMs7mhxCSH43S1Wb87KGHPy6aPxVyq",
  "key26": "2p5jz2gdyU7X6HmuGLdQnohM6YK8AKiTvAmFqmhA73XKV3MpvfHnKbtbQ3g2554EvXMRnbLcdGN4gTx71Raz5LZR",
  "key27": "33yuWX4fW2QeAvfNf8WMkpyBPmWTYcrwmdcwLzTZgdeQiJru3bmjLUZe3C45Tgk2MohkHZHxweq2FmNsAUdSkAiA",
  "key28": "5sYW2GWWhC6G9An3oMAyxUjFGyyS1ByXJzpEebXpHdFmVPDWiZRGbg3jM2ZWEkEHdKSUhUbi8f6eQZ2EYJ3Zynmu",
  "key29": "3TmuXS5BuP7xKXEhd7hTLQzz5mXEyjn78mpHairCsvxos7AtBTS7YPDrr9mHQsAdfF5YopVtkVRhFKqLBjAuh7We",
  "key30": "5XHCwDLchwhbVCdFsPrT1zFopb3RiqunWCHyaTciPv3YvySQPpNwvt6FTQtCPBiU9ERQHSLkpJ8dpmmpGZ9SZaHV",
  "key31": "mk2bKHKtHdRaDV2KZDSVNhG4dTiRMSEYKK8HX8ivFJoHmRvTfdzgSWho57VKuU93KVrshRvcLqYv5CW9J55QpHQ",
  "key32": "5Y9tmN3nBAqvkr4kWHCHWLXicaeoNECaW2a8cPYvdJiRYtDa8TcpgTKWjht3yKoud2GTtHJCqWWNE394VcW5uPqY",
  "key33": "WKRUAD8nV79N5ShsPjLZRYQ2xMiiZMH5JJ2dwiy9q7VW3ScUdYBKLBJypaq121JgDqGbU5FxrheLtqMDdCEF1iw",
  "key34": "3W7wot8KdqYyML6UB9LyZjWogmBmTjXEXkmLrzTZVPs4yApWuFbz53kNPD2YUJYtUBaCp9rHHS8vooLEosDy795b",
  "key35": "2h2M96fUhjB8F4yTMtzTV1tFtHBaE8h17nXxNnAxKapbUL1N64beDedX5nJbr7XZt4MeDHmwkHmdMkBu5osDP5je",
  "key36": "64tW6GV5XzZihA2wyAemEMA4LSq59zA5JuPRLn2xFENH322qFvt3CV7A3xip1NEPFMdmB2bzcguQ8u7hYqsrVyPv",
  "key37": "3zvo5zXnJ2BdnVL5ttDaoym77P9TVcB7PBTbv52Ty9ixFk93tDoVxzYnEDF6CUrrcBDxZCG9ewV72M9GTWgiQvon",
  "key38": "3zRhB91X9swTwE8CY8gT6To5CEAskHBc4Ljg1T8o2wRgc7JXcAn8awY3wtCHBwEw18Fq7gANHrUDoFfMDv5odMpR",
  "key39": "32xHN5sCzgf2ZEFgYt8RcWmsdo7aSYtoSN1N3G5ezb9AsKPC5f6pwQ34cSoS8NBoAJbTwBPesMLskAkvQZWy298x",
  "key40": "4CHC1NjAPD6F4eBEF6VGNX1Qqc1EfuBiovXVT5dZvHMfTYoe2hvVtx9hgqnRKaQajP5vLnWaa3Nhk17qqSLLx9v9",
  "key41": "2NdSV7tnJxkJw3XnZCy36mgxRNHSjiTFsrgAW7bfBmjbMVNxDDnqo5vk2vdqn4CpFEqos7jeJnryzyJzb9EwgCkV",
  "key42": "ARfYQMNc5VHnxtPji6t2A8LJ3Vy7CZjW5QEm961mCA8C6cSQvWTcKQu1CLC6dyasAaLzRQn3qsZrHhpLWWYSWwS",
  "key43": "TsR5HvdmvXqwjahP329vUfb7aBvUa1MdfURK8KWGos5BtJmdc7t7PV51S2RhhGAxuWzQdtJc8EBhRfzj3XfH64o",
  "key44": "48hk7JEnQTRqAkMvqHHBMZLcDsENq6g5oUn6mqVvhHR1tAXTd4ycddcyBzWkPBGrbxVUHyk5zJuVm2bK8QgC8qSN",
  "key45": "MdFvDFzpwEEzjEp4uS2cdvh4gCtanASZnJnpc62wMoPpf5dyYbzSXwA6uQtzrvwsN7MNsZnyVAThWCCARcRdjUP",
  "key46": "4tXDbHfuM6w6JtPQx8MeHcAfAuPo3t4tKkZc8i4KFt7Wofdfav5ZhkfDRR6gXazAHTS6VwcMCnP8CcyXocaQJeDB",
  "key47": "49YjqE7UDR73PZ2QRcvgYDScaSwY9xk2zNXXFj6JHqakTLeTg4xjjmFrSJ11TAUhR9V2kgagM66LJsxTsUP8GHUU"
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
