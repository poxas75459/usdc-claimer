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
    "ssbiXjvqDQMy1bfn7R4QSLgPBKz6QvmhytMYansQRuoWNBxcfehp1mea3o4JFiHpLph7tQt7PaC2daxxVKgafyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRv5EtRj6f3gK529u6sue1gWscidCeeMPwSeseu9XoYcMjv3ZLipXkQnQA35GdTQxTdGY1hCTTgNrDV87H5sHFv",
  "key1": "53Qfr9kRczn8bQsm3ADPcHYy9ok2ZvC3ttLt7etkHPH37ibNrZQPyuDZ9wf2uBxTZZVMrMkvrZpwusDa5t9JhoeB",
  "key2": "55sMaH1fsTRJEqvbtGQhytkV9wjSFsxF3sN5RpH1PTtEf6PaBz7rhwZqCJueKMxXNBWVWPsWYmchxriihuCyKowe",
  "key3": "2K4LJb3PXtLzToyLJyzbRtTqQQuQuRmRY3ErZs4fQ18ZMPWrr1REYJXUVvEwczAdNZRbZSBiqSHSGM1bb5vkx1Df",
  "key4": "4ED9dEM3dLJksjspdEDKawhSGiLfxhzuQcgFA4mZg52PR8prE4s7SWZS6eVDCwmG6S8NFTSui2Ea1mydQC7MndSg",
  "key5": "4LgV7kSsT16Q4VnbKyM6DSn5dpX4wETUm3F4EGsBBp3rFvwXiyx14gn8VcfDqqKKg6cS7SnzFJS5rkTUof5YkgWm",
  "key6": "4P67nemx64Cx2JWN8pcThWraCgcmBVASoqbFMjgSxd8kibG18yLnBZAVspKKPiazf2io8CgFEr2HdPh3mq4EijeE",
  "key7": "3r5ZUEtscMaEBEKGPt7cn2zFBiWnbjbGaUXbn4DKikULBW2q93wuNU9dPfsqFxvYZh8HqCWP2d4arHRj7SSLhaNV",
  "key8": "43ApH66CMzR5Z2HwzZFA5TbSSLcCqUicQmXieLjriEVcmZ7Z76Bwos6FSZBfKh9ELuM1GNxMeSVziPUwm2aexRFC",
  "key9": "3Cvxg2BasBy5sedgc6JTpVFPMJLG3VEcyeFcHqidLAp4QGyJQJzSnAW121d7fQJjGeDebDazNLG7B6B4KH5GMPmL",
  "key10": "5BMo6qPCx8YPgKtoGYEo2NB6RyHKTnTeUUuMCXhf1iwWrE68z6ggEJ3nfcZkUkDMYrHKGsHJ2ZxPmN82FW9fMYee",
  "key11": "G3gazUp7QwbEnwZoaesa8xrxA72vSpjF4fX79YmGUkCq45u6r6QHMcpzpPtGXowhDTDVhQmaZEEvG6qEoMsqtpk",
  "key12": "mgT9yuT58jW3BioSEGQFiNfxrEPgZbzrE5dScgfoFzhHTbBiVzv3ZpqPmJiXqu6iNRWtes2A3CVvbgp6PtN91uY",
  "key13": "5AwdxQsCkaB9Kaanwenxe5xM3WdAGCUYG2fh74RXsbMHp3ALeeAshnsKg1m9RPmYTaDzGs63uxwX9gyQxBevMRuy",
  "key14": "4LWUD937PeQAtAFkZb3mUigXtRWF5YVLc4NeJDhwBJxPnje1qu1P9NCqreu5KTmLkNriWxCYPaXgbTu5tTGExacB",
  "key15": "4AjDJnpyXiYTWMDRun6VhuMesziW9QScuxz6FCadEueA7Ss733uRSptQw5aoahyaxxr9WLbduYHfqqLBNFE4NU6c",
  "key16": "2PbfWjwnG6xWqGG6BSTsYzqWW6C2ZxiWUXrPkRiNy74oxWriPjcNzPdbroQXhdEtgoK9n9FYzyMMLTCtevdMjdSu",
  "key17": "4U5mc74b9xLPri3cKwVyZ1BRCAmikuYLUbvzSktmXr8T6jMXHtQAQT8YuYR5c3GtQVAxHvaaLYEJv2GQJzu6xksC",
  "key18": "9R9xxJD2SVFJtPhkAhxUzsWCo7HpBXZWjYpe36vm6VCas88zzp6yuezk1ryquaxCD1b3tkysFj2mGKkFqE4G8a7",
  "key19": "63BCPGyXJdQSGKeaDwTQucVHQfBXVX5CJnhLVaRWA9DjVeE9qMGWmV7326cHQmGjBpeSzPb4AWB5stBsvZ6PKWFx",
  "key20": "2PUUsE7HXzhDLhp7woUthBAuoVBEPk6H2SGDTPw5pXCvwBABdBEyk5AqTTVBsGKh1VVjZVJghQkxUcNyHziZ9bLg",
  "key21": "4CWDpMt3xm5gBeRjZVAENXqovUi2kKg6KPqjZ8d4NfV5pju8HJUV46e7dZiWY3tA9XhSaia58uK9cCRoqRcW9joN",
  "key22": "3petFajVnjfCXHDbJnwWqpwnPKjZJvrCKhFRhaMAEkKonHA6SbbMRfKzBadb4eLZpo2aebQQHEHTpALwxSckNpcs",
  "key23": "38rjqLc9ELQsy38HwvG3a3siHDTZopmwdh7DbvhKQVuFSwkEpjWrcAcpv1ed3pe4aEdif87WEPuvqLMM6sz3PoMC",
  "key24": "4A4m3V379jFVHsXL4AB6avJGeTrm7bt4x26VMypshQVASREpNsg8XVu3cHbkvGUmf7vRSa7M5yTgtsaR9uQWFhxG",
  "key25": "58imrujJ1QLmq9tUqh6rtzvkXn8aMm3ydhSdntRynYgZGx6TEHnSj1M8vGivgBRFZHC6FfS5iU9bfYud4sbeJExu",
  "key26": "2N15TAjJZ44k9Zwh4hoxvhcZf1ALuwWVKMWGoDdRiPDTzQsuStwL69upUtLMfHN7KJS4XHk1ZkZv8bMpHVXaZCS8",
  "key27": "3xnYbJxpP9JZMKekMaW3uxSiRVKYYqJLFMHLLcc1cZnCbRyJc3MtWi7ku342x3gwMYYnVD767ZPSftJ1axwNb4Mo",
  "key28": "1FGsGvhnXE8bRWMmdrbFdxxvJpy95tMMr49BL1qEj8VRqjYTw5e71CTwRwVGDMUTFSXKTYhUwxrrtnNjqzSRDZ5",
  "key29": "9VHbfep17MaYZ6QEjYwhB1BtyoCXEmTN7ttgSYsZ35JTtoC1k8hYNhqEbDcTZCxJDTUhwQYwAA1btohFJXya22h",
  "key30": "4Q9YAPdNgVwNyHgayZyyVmCnsGPqJzY3ejqHTam9aU6qF2p6yFyWYUMd4KVBQTZ6LBXDJBoRCP5jZef4QVxFiuTg",
  "key31": "227BQKmNjAX6g8Wjh6aQp2XERk5fGksXhSKEBuGVbUUHBNodCzWZFbP8cnw6ziVg2hhktjddaiRxVzV4m5AgcCUx",
  "key32": "4eNFco6u8KGaPuY9WaNXpBnZ8kAvsp7JgZYJStWXo8yr6sFnUtb8zUtEGokiM5j9kfaTBq5UqhKFAfMSPkY974wn",
  "key33": "5g8mkHTC29BxCf1R5K9UEHJxq6yR33PUmBLuwQmTRAGVDCdXF5wdb6e8WgNGgLUFhnNRy9W8HbvHGrL6b5cFANCn",
  "key34": "mMJnYBzhyjLkr3WFz2N7z2vqTUKDR4zbuCqgKoZB4YckqJyWnJf7immA8CukpzTA2MmdsYRGQ8hoLKHAiU7KPLr",
  "key35": "44AtHcqeeBDRQXxgrcQ2uPvZkyMPRfjFgscorFyHjDD1wPZSyxCrMsYsVhTiUsPkrWjZGKjCiaVtMbuSdBPoeErx",
  "key36": "27pKkKosZ33xPTgm4K92tbsCY278YbcGCMSfj12MchR2UmJLNqb1SzVVuHJiqcRy9ybEZDsz9vjxoKs29btLzW4h",
  "key37": "3dkneGkzSJnPpC2kWm56Nmr6LkpbXwtCRP1wDnePaeFnhoBtWeuZVVH9pgyY6iEmwzmUjQKxmVXHRjQCVUyFzbNM",
  "key38": "2zzT4pfrQya1uTrxkdgsxvWDGZTcEVz7Xj2E5frH3VFdrvUeHmNJma8BPSATpixmNzJQJ4ZVmUSMoyyxNgKaY74B",
  "key39": "3XqGR9HNAFJpdB3C8PCBMu6ULQHDn2wcEKEvmiPFPetMXfDm1qu1cLUFo7KWeogLX1dfEc2F6fhZw9AstM7UU9pP",
  "key40": "3HWYwBJJAqx4kVYUGYqamuo8wiHjrZcg4PtHcT3vfGqXNfn2gueA3BVZNCXF2JZYZ98WvzL4sr1DnP3vbnr158sM",
  "key41": "2yVodcek3xnh2GdATWnXm7HkAzybwLm2aWE7Nq6aoVrmWPQrMw5yjoCcfTrCcNvyVUnb8f1MYfXZUwBYtcADkbze",
  "key42": "XJRTXjGt6PBad9bDfMuW6Ag5Foh8u5jzFMYgoDWxdWewD9ot1XJumZoWcoHBtC62xVQRMiXH9rdenPPbdGJn3QL",
  "key43": "2MPzZRztGu7Ty6UNKBZ4URicZ5h98F6i1R7CPq31b4SDvk7S3Gc2jqVDgBR6qXknsmHr7dPhtJ8fqcJ8MkQUKpJF"
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
