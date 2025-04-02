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
    "3mRnRXUgE9DTWzPjE2vjsVPCjrP2yyQRWZWsxMyAJQcqeqyby8m5wMs14MDK9tRB7rUyNWJREpx2fTKuDDiusyhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KT2Pmgv577Pd4NeEQPiiP5bGdtwt1ospDCscHfcJAkFXEYt7qPfbK7i29C5HnZRqrpPGppqVtKfbvqCvXB2JPe",
  "key1": "QLurVGonArxiLagR38zAe27r3ufbeapmqV9y9xrSCvtWqG1g5t7zn4FcteUpDJEXa9p6yTdYt7geKkSxdoV8T6Y",
  "key2": "44XkxYzE8nWPDyD4A3arnN9K76djHjhHD5o52KPvFPxTbbdxU4Nq6zhbx48UARe5YfFryg3hqBbmYoaJ5vm74upR",
  "key3": "2YBEBsjT5kLMaBsiEiG9u4fwFdQ7FBwsb7DMVJTW1soxrjPVZM6U1qFTJVJL28VsWzFuVW3UUsjMgS2wuG56bc9c",
  "key4": "2X195rVrCh75wrdJQmfsr7bWaawVKNbPUMxdzPiPTYPEE59XkQtPMtRJeUiZMmDFV7b6TGz33zibbrWSLdMC5MAr",
  "key5": "3G92bWFGT1U2PmrerFBPBbVgYAhr6S5TySQxxq8HrQ2BiiLaAAqAYkeduVCPtVRCR918DZDuEN3cfBfcZ3cPMfDU",
  "key6": "4FdgZMK7ZRKmq1aE1ht3F9AyeX6nfzc4NGDYFPVkALX2jVta3eB86G3dJXkUqpMseFmWcaYSatEVZe9k2C4xrPbA",
  "key7": "TCKn6GSbnp1dbtN3GYsz6Q6gfwxEmTdXB9h77JF95aTBPTxyA83eyp1A3nAYcAopAFnmBGgxVAK7fHnSsbQp8Dt",
  "key8": "5QR54ye2g29jbQFcvtm37Kwytkogp4nH1FQZuH5Ss4VjsAbpF7pxHwUqZ2N9qMjtnsbJ7Zn7ZLx365rxMd7sAr1Q",
  "key9": "4TcN4wzudYk9cYTYFjoD91snbGu1zC2DSkVWhq3qTWBxmRjcnCTms6GkzeAHSEotHgKjKY9ptnsSLadTMjZNfG3M",
  "key10": "3eXLi96p3UF4Tc8hi2ctFxQ8MQf2PaHCGByyYS7cPny6RmeUJxoqMbk42fEbmTEDR4jWxMYzLjyhuJ8DwRccSV3i",
  "key11": "rMxYDSa9dP4CEKm8au3HQp3ujk28YjfKnavSuGpM2PiGYz5pKjn39yyQDFCyWvHhLUm7i49iejRHneFfm2kYaad",
  "key12": "5XLzZnpwTGwD4GzV71Ni2y3qQrqfg2bftaWxLkPk9AkfyZi9cKW6ETfRumLKNb5AFRYWXPkjy3bWewMyd7iuCUgF",
  "key13": "3bmFTZ9Suj7Qfozx4dXFxv57qsjiScLZC4qTe99TWmzym9of4hSRcysSM48cmRkBkMdAby2KcLpiM7j3dtxajfNV",
  "key14": "3LEUNGSwaFiq31Fd3ozB2mCgrBuCgJR41YSVLRyDnu5tZaswkQ8HE6rfaVqx9YUMbvwxU27f99tMes53E3QYn8GK",
  "key15": "4D6M3SERSr4693nDxq88DAuPfn2VfMH5NJXPL5Qpz7PvkmhE1YG1C6oqTNvNdmdKn4P9SMELuCKSZedy8BeTe1sP",
  "key16": "58FUscdfsRjRjwX3NtXSJkFV8aobdNRJvpVSj63wEipbvuhuRKfgsyZRxJisYFbbHXizb5Jc4opm3p7dTQTmMtM1",
  "key17": "5aw3GoMKbVpgbPrUdrUyLwYf4NqdfrBimtkwqcchs5tycfkNfwoeHJbSeQfAUWes8XqcygQroV95qrVUkowH3Syf",
  "key18": "3RyuWYxt5KDwxkib8Hh4LeK6ZKCC963cWwqGMgm9sionwqsRAF79Bo96D1qibcKQbsaqqnf4TTPrvqw6E2RBwW1m",
  "key19": "41Eru5KwwhrDGVoVXJvHoxec93NxeaCGp71ZQUug2H8vjGfn427RLasBQkqYjasrKMQggoPJ725i9o5YCLjr8ijY",
  "key20": "5KkDbvXAHXB3vtDYYgGoGYvnBTDTcHZGQ1o72Z2CPbmXzQDGnJ2az6hkxbw1pRnRoUQxLF25X1NBbbyieEBpNjEo",
  "key21": "B8wdmKEyuTBTWxTmQzJaKFfrCbuiL2rB8rJF2a6EXqXzGDYP4KaQbcW4pVUieiFUM3iawZLua6xd1vxVdgTchND",
  "key22": "iN6Dehm9vLFyNRg3MrjZLWjpvD7TnNT9Khn4svCXy2Et7TafzFV2gknkJc3NZa9DFzT8HnqJEhjipVahhveF1S3",
  "key23": "31Vmzij47pQCzATby8SUzXceU8mvtjQNCozb28yCvDZ55NgxEmybgSZCmcKHDrkHeL7UWNyVLAohmN7xsyS3iXpY",
  "key24": "4cTCkjjMicSZVFe4VLSWz659FL2BJAR429waXnrXHPPoF7L59TeA8UPXxYavYp71yTyUTR5tdy6BispVt1hePUD",
  "key25": "2GJccN2Tx8ZFqrdrmqjdJgJcXx8gbi8kFAF6KKPniziNSgrxiG5z9pp78Po7J9uFZnhp2c1M44rFaC2m99q9DfnX",
  "key26": "3ircpzzpWGgHdkbEXRz6RiCm5rRHdfwFsrYmJQLZ11Mj1NxZoaWir34BwdRQBjkEEtCbSYKG3xRnpXdjpSNUGL6M",
  "key27": "2Re9qmu5veUH3VuX4P2NMXCYg5PJR3fS2zyVogCRzfhCXt84iQE8TT2pACWkmK6xtntC3qzQFC67ws9p53CnUj9A",
  "key28": "3igmbRS65oTvJdAFdPDocDjAPSKfN2DLA3tucY5CedWeds7QQKyRXvrFQQeB8LDaJNjYQ5bK1tdYX5nTuym6QBv9",
  "key29": "2dPmUDX877H9VH47DEsv9Qea2p7XbnZtP9ucDHV93Nie1xMFq1DDKjTfAfP6SmckfRcc4Kg3TjE9sV6AAmMLoXjG",
  "key30": "3TRnKy7S5hZEBMNdmR6cArF9oBmZA1JBEYCMrjh6UsTEeQ6ieqQKha16zqyPHqfZ5hHj1FmJKYBJwrMgSqKrBhVz",
  "key31": "6ecw8bMFToKfGhgEHgebyJqqyRPENMKeHEeyZGjVzZXW8ZW9ieKQvZb1cu3U5o1BaMM3U46JKQrvrXC3DZsJ5qp",
  "key32": "ddrdNVRu6fauZ8CHPWvJsQD1udCfRF9R1gy73wfxr7vkJaoHVB3y6y75sXdrAr7M97BzmXSAyA5ifA1Hdts9xK6",
  "key33": "2HZC2Wh36rBwtY1pzbq1aAHhuuhv2iM8U6JN174N95T4aeEK3TYY27q9oUmpMwiZgPB3f9sWDpsNtR6JnAVjFjqm",
  "key34": "2LY2YaCyU29ZbB3aHphbVY1akzD2YVLRw33JyiC1eU6sssj1QLDx8z4ZMtJJZJcSCioRjs1BWF4ytJnyHCXsBD9A",
  "key35": "65uSmRqZ8GoKEnx5RjQjNPgXrzf6Zc27zeU7Ekqpi6rfv11cZjUMsSafEAGLeCwtZkwkegVqW9bj1mZgxMC3CN1Z",
  "key36": "31STnsb9WhwwttjesGMyvBB3ccPM9r2nQkMdgJ6oNnoj8wxayyJf1w8vtvVFRC8LZ2NspcPEXrr1GqG53DiRE2Q4",
  "key37": "3HTk2wGm29gyujWrDSoJLLauhywMvXCZAxfKHk39ssLDRNkXpFwMeejueaQyMBjMertYzyHq4FSzMRdt9wcBrY4p",
  "key38": "4RtSs9WCffuQpMTc3b8U7QBdyRTawhntUWXMmRK3RzLZMVoc56KQg18woGzVs3GkK5ncEz27SHvudtXj22TjL4Um",
  "key39": "5sfLzqyquVdm9rygtUDB4fVj5rzVmHHXW5QgJNPs2DbdWLxZaWYyJJf8m24e1kpx17JtaJUCTD3U1LmJ5EBGAERv",
  "key40": "5CEMra8kKkWJUhCcQ6FunquRHaG44r5jfq7hbvLFpjJVzYHqUM3ipp8JngES1e4k8Ead6KLncLqEJY97yo7M6iPj",
  "key41": "5hFtqE4hy9nbs2fD8Y5KDJVRWbk2L4BhKTGUGEDfW6NuT8z4RJBFtLGXSNdhHNNCxqPhEPqZeEHDf2a5HxEWDiGN",
  "key42": "61yyJfEfT1qoszjJPx1vKoyS8yq8XCU9KhjSgHgym5tb7yTNTqKzpEHKThWznYjsR1jCw944pTstV85vanubcFGd",
  "key43": "iPgCqcTfN3zdMKxGsy4XeAG84SaQPuzMVrRG42mXEvUWVcieBk6QT8VFk2WxqsEERgPWEV6GS5dxo1iyX8iaNxF",
  "key44": "4ptEb7dMa9XtpRu3L5B4qWbC7q9wEyH6AcJZrp4aAHGd97rM7C3KwJJUucHR6bdG5pt9SS9Lr5nMeRuMUSVGCQZR",
  "key45": "5My3FrDuBjj7fMcrYpmD8DzJfZ1ZnCiZUgeBwqt2whBpBi6to43CQF2EY6pij4dXuQJbjrHtWb8AahRbe8Gfty98",
  "key46": "2DxnsDJcnZ9h26APUZG4QGZ9PjZ825G2HCvfHYG2n8Hx1FCKJLMyq1iiZkrACKDyCWVQrm5yXLy3yLZ5xRXerZVU",
  "key47": "xwykp1CYNDXqwnVpYwDHzRy8f5xDJVLFMhwPcAUtPKXLq9cVp8iVRQx3y65qvwQeh4A4TDaE3eESUwc3DhHYewZ",
  "key48": "27VgA89eXbLETvjnmL4xszRq89cEzdjk3x1sreFhZq7yp6dkYzsCW6yy1GWFk66odfHVhXuWM4btpBXUzdFgjb83"
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
