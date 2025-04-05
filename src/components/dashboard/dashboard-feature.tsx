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
    "2djFdtFEmuZNs73DXVg9Nd5QRNgQn5jX1MpveZybbGNuRzMnG48xjZLqsEdLhSfTx383cbWg343LS6t2TtnaNSNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1J7HCunjj22rMLWR8tpKTEaUpN6fuaaM9kYNmk8cE8cfnfs6PsH79upv7oUKdb5ymhvMaAqwbWsDr1NNpUePbK",
  "key1": "4oiTh5QusE7qDvRdaXE2iTi4FLto4GJhzjpk317bEwEW4GRG1yLZDU7Ps54dWVX1CYrcmACazWkTR2UgxzTzdEMs",
  "key2": "4LjBW96jQbKr5VWNB1QWWHqGq9Y7BtNaDNuD3JaQVcCYmK2nVCeMrHmudhjpz3wM7c6ijEPi19Vz5X9ExBvajVRU",
  "key3": "7fK818bzJh84CfegbXukRLvACrwaJn3Rt31B3XFMRakEj6QKt85qMubDMXpSa6bEqDciKkHEcMbCNd5WX4hi4yq",
  "key4": "3hCv1XFm8rdqsrZmiaZX6H5gWrEuuLBnqiUhEaHqyQCgL68tgHjZxXZ3WmZcDFebo98yYiGj5Au7V8xfKx4mWnx3",
  "key5": "5fXh2Ji7ghe8K8NkZbrH56rqVcQhFZCF1TqvscZzzJ6zEeQuGVaoG6fAPCDQNj3fEsQnP6DHpKtywp4KoaQfanu8",
  "key6": "fa7rZVi2oTBVqs8Snk8YdnGtcKbo1nKvtUy1cVMj12mcjH5rx15mmyT62xx7Gm4NmukrtsarwmLXaufJDxP1Aca",
  "key7": "ARfMuoUHCUSoWV4d8SxpM3XPVjzibZbqyL9FDtZoxFtGAoW9vf6snMhiNooEn9Uj9REqxc1QHauf5F9XXVV9Tc6",
  "key8": "3Mvn8cTUaB2zyNWtFcoAaa4NvHW6D5p2CSjqgm7AKhaPXJU3P3ZTConEX3TAEvWk1FLiQHUTNn2D9EUb7bQpJ6JY",
  "key9": "3Wg8EPkKjK25TtUPUznzfDza8ft4jXhdD498pSgrbC4EbYe3CPRrvKrWFbXKi2VQR4tZLd2ztFPVHWHPeJw4uNrZ",
  "key10": "2yXAAtBmZ1jTxJ16A6xiE3MNiDH7uRvW5wfM8MxK8HVe8VgsvZfBRLRSyuLQAYNryztweRsr9dVNjQwkL8Rr8HLe",
  "key11": "5FDaavsZcK8VCk2ARmnndgYPE1DHR9ircpGcYp39zqyhi8LFmbNhoEjWCefYSy9gT3G2Lwo8ut2oU9uydhAgouwD",
  "key12": "3aVc3ezWUgHcUt4mWQZWGds3qmSdXZ35RCQaNXnso3Xty1PKEPZa5h3sM9H7CFpiocCJMcHKxL8udSa59HKtCKaR",
  "key13": "5TX6z6c29CxAdEXXiryfh39ZQjQiELfqNum9MTNaZ6z5MpSK5R9XZ3sFGr7XWw2ouLDggj1ZPoHE7HzYz7hbGM6K",
  "key14": "5tvso4KMZ98eRJ4Tf3NzeXNh2NapqUVCXgww9YR1JsKcbVNefcvHoX31fZTYpnQHFYfMXkoZzmDe4cNx7FT1p5K5",
  "key15": "2fcet64xrWVE2TVSC7eki4tyBXtnjCgeLvfqUDComZDFkzjF8R1rARYfuaTQPo8nF5HwNyc8EJnPYTn6LHY99PfX",
  "key16": "5pgqAZXMXinsKDEzZEffbMuuNwbj4uLQizceoHLrEdFmrCR4q628g19bJfk7qS4BctBsiC5nsKDLgyG5oXLpA95S",
  "key17": "XtCKoRgiM64tw2LhSLubipM5FxMR9XqY1GyvKVorMa11AEXjTmiggGMfNFzupuGEFWWAJUZ7uRpe4F1XQEkpMvZ",
  "key18": "3Zz9P4XydAd4qXMYkQqrfz8sRRPvkcctvgyvMTyhLa377KMnxdaBe3rCYFX6hDsfo2Bz8WJeSjVEzzCdgCpQnjMf",
  "key19": "2ZYPGz72MNVDKbntPp9KjHzxGNn53ZRibdYnehKUcVoKoYqtH14xDCyHyagXuXqNmQGEQsQ78gsivPvjh4WBXGb",
  "key20": "5B7DukvTDrRGzWC2QiZwUmChE3rv3a3WzUZpiLj93fX75X8pMoztixJtmw2afE4ZHNM7ivoShHJXcbjKvB1Qgfto",
  "key21": "49jWSA6qXW94sKStH3FfTfky7fXdAftoGYZUfKCQeStLdv15jedMZ2aiRjShdKfdaTNiF4wVzYivekaQtKZXDXJU",
  "key22": "NAP8NPTZcpkz7yauTTTMWL9soSJMwkRZKqRRWfCZgp8nsKrzmcBaijQVRjokqsFvhjD3ANw9Gend3NJHcVKqfsT",
  "key23": "5aTYMTUuUpGtMJKRVBSfy8ahLR2gUra47efPSgh5QTVcMyR1XQCavEMLGXgbGnDa4jzuuoE4ZRNvrWpeBpQxsBXj",
  "key24": "258x2WxYRCMG7MmD7zG5NsuTiN5v4BQD2Hn4LJFGHQRYgD7MjaEbKqVGanuvMQLFuSQutBWAAatBZVQvgBrTF9Sg",
  "key25": "3fZFs1nPkVw2UteXrnP6MMnx3RMnMF6zQBCzpnuqqMqdrhtcvXA7MuCX6zGXXRe6jabJyb2WAbHCiZPWcvibJkUS",
  "key26": "wXzGBeKSfoCChwxe64GcYyVo5MywV1tD7cxNPJWcYhunLyVWfMs9rQsbKifG4M62Y1McoGzBUM1N6QhsKNLCeGL",
  "key27": "3y6mNPhbKwTDu4wL3MYZp5oYubmDKZDiuPLc4EpitXaDepNckofoqdhgDS29h5B1NEmEChyQFhfTgcmEr6W74k8w",
  "key28": "4rKj7a3BJTSeBbXgrtNuWDahgRAHYvch7y4ujgm74WPGT4BiJ9Ajs3TBhDDbDWWUJge89HBfhLUHGu1wMrmh5stV",
  "key29": "3Zd73BtEMMB7JNdHfH2jfxjnsjx1k7qGxWk5A9JwydhWuf5bdPCzJtXjgfAr9C5DvgYYymothVp7T4JercekRrzJ",
  "key30": "5rR7VJewhkh41K1QSTHbYr3tL9GCqSi6NPnQLpnDfpEZSetimegTZA22bDgZQV8gfthFJ9wNXjzrpZdrBZFV4G7e",
  "key31": "2jcZvbVTMn5838xrfhhqZCSWUMiLxnM6Fi1fpbCwH2anc7GKjDuhy3L4U77mQ414w456pq5DA3pi1mimcdYVGjvJ",
  "key32": "3PNCsH6ccDG15KRhM9xde44m3jC3xWmSm2GDscZNRqs374UTgk8CbXA3ZjkDsLeS477hVR2SFZjrDjTUofvGimmT",
  "key33": "5WyHDxrQ25qxWA3HBPDR8o144vpWPDfnXT9BtVXwTEeCbJjiF55Gvc34zHrwNZNJbLyech1te3S8BUKRPyCZxQUK",
  "key34": "Baj9PdzcQ5p5shwvBaxMhdWJtpmjotnvZAJDUorGynqRLimMSBhBz4N31dmEKkAwk9wv5PMYWt9TW5hdB8k75fb",
  "key35": "67Rc2abZaxRKnQAvVjDARr1nL6wL6z3osfb2xnGgiSLPAitqignWseEqgSCiaySKpnyCpS3fikEJk6YETBG6ckR2",
  "key36": "4FSeeAsntoeM9yP1bzUKWef7HZ8Epk4nSNHh2Msvnfaxx4ndYbF3afkvvCkFmmzRLTFTqq2p7p6X5s9rZP4xbBqc",
  "key37": "2X7es1sq27gSc13DHuqxtsHKHYPYu37QxvNdWZac4YFm2JeR1xhtuo1pGFP3d79pd9UfRG6qbh7eNgiP3KWopbnT",
  "key38": "3u7dVBfC5wqDRcHszz1GsAbPUZTfAcMBQT7wZetxKYuHHUDCgWq7vZtak1szrMAbqPMwgtFTxXGjT7UCCH3p9R6n",
  "key39": "5oyzuVGmpi5ngRFpAEXbxcRxd2PH4UHvK33mN3jkz6hHwcFw2TtfnfxenPQexdTYCvd4LWh62q2JmFiWysGjt4T8"
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
