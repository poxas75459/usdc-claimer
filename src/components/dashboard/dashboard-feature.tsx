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
    "ngvDaLLy2AWMn9MRwfmX4PqfyzCY3ZNqYwJe7Hbf52x47a9JTj5wNuugNjzxjtrkgrLt88wEURFCqGZhJCGf78C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63z6WLTDXDXxXpP5Xdw6uCMhaR4WcYHw6uTxsYsDpvpcFHfiNGufqvxgZ8s9GCdRKKJVK2f8qdy7atzdXcKbt96B",
  "key1": "3fMwCzkLNeiCs81pKwy1nFgLrhvSqCEtndKoWi1FsXmE2toY8Wcvqkkh5TDjJszoFUKv7zFYke8JozQET935gMCn",
  "key2": "4xC24Gj5VQkdCjHg4DdLiWn6DrjsBfhk4a6hikSvrujb2944p6ntRbShquMXVoj6nJX8fpmyAc2fh6Qv4qWphmAM",
  "key3": "3G42V5yBkFjij6E25Mu6vtuDuyqaRRpYM8Ett74STDAp9NBDZsAV9zgDaUc9RBbPGkVNEt8CQtrAY2hgKV6N6SPH",
  "key4": "3hUXpwuk7wapbxc6RY5MoTbhZoHDekXb4VAZBv4mBpK4TNTvmwiG56hStPciugkfWUhdTtQmUcvEYzcFYQNVN9wU",
  "key5": "5c3j9Pjjx9bYx56ryMvRht5ZC8FCKQRLKsLb7Vzn9pVDETDVVHRajpR6ZraRigUiuJNEShMMmArYKvdAkXkNHq7W",
  "key6": "45CmgXRhejpmux37rmcHLfr62eMCgZXAqL2GRshD6xRj4vPcd4GkKHQ65imH2aLiWyrTKgddci1ZCRTfyoppY3dC",
  "key7": "4DXdMqhEVHGjdxCVaQmjWj9RtTVySws8Q5VNba35oZ5suS3qk3f8uvaXL3NkEdwecYzUwA7Be992wMsNgNmQwj5R",
  "key8": "2A7XmbNz4p6EKZVAiTM5RT7X8AL1KygbV6LE54WrV5PqCmUdNtYuMxEeKaHmAWo7M8LZe2Misqq11RbN4cSNaaEz",
  "key9": "4cmDah9Dqpio55RrNMJFu2RvEkDAtcCig6bdMLXvYnMedQKC2sTR8A17XG9xSHpK4yLSiiQp1sAZRRnw595qAuPB",
  "key10": "2HJxxDF1gPC3mnY95WzqopVBL5yHtTKHNGVpk11pieyEv1BEgBerVJU7iNNjNGu7At9LT6WXKeKY51zemaWzTuV9",
  "key11": "kSH7XARMKvsajuSrySbrg9mD1pwoTQUGuuSKgXF6X9ojWvnrAvtgRGCzd49oVhsRVT9VGSxbcEza5FYyUp4Vmhi",
  "key12": "2AKeTBRhm2H6BXb6hzYkinX8qYFUnvQepk9wGhFgFFsX5W5bwfAsi6DU6ZF1KTxHk6LAVhoHjEcXJW4b5sDVn2Cv",
  "key13": "25JLHuU6b62tFN8vhqpCgfLJM3i2pURp4Cri7WQAsrAXLppMshKAkqKoaqrxQ92vV8Bs4DxLcNbGtotb3P46Y64S",
  "key14": "dye2YoJJNvFrFzssFB8ANevCPWWVfuMMtyaxANToLwhEXvANfXXWTXazN86X7rA4JthtnXit95zGkQVmgtyy79C",
  "key15": "6jbqv9PA9iC3snrYe2H4eZxRtoTmPvshXorD2wDP88z1tp8CbFTEYxZRAbyi3oxPcML5L5saUM2TgegfUjER9E4",
  "key16": "5YJFPnYYdjidobLuHaJZKpnNLLR796XS76Pj2CSuJbQ6AYwo5ohv1YsfhFrVdVPU8nHteCbaUtKdtaeAJRqwMo4K",
  "key17": "5nRh9hHwmBS3DwU67PARNTZm8G76Z2X1gBgDZZBUW8weyPfNfzmShM7kVBAvPvd6CamPXmsf46frDaqS9onukoX1",
  "key18": "2dWq63uLAA8Uzg5Hxe8oX3VUj2y9QiQZ2YSzFWDerWpoxM23UwaTg19fcxdrq8dg3mqYBawZPdwsa5aVWJ2EpE9U",
  "key19": "3LTP1PHL2VRUFNgmr4VF6tFBipHdEah7hkKPWDxWckLDcxFRouHitNa4rNTJPeHb1EDS5UUk1eLppzNTdpTJk4Vi",
  "key20": "5UiBten96Z9UNcL9g22258VUexEFcurUeygQz5kedkJVCagDUFBHGNJDqCSd5ApbTVrbpyQ4KJRhsokVLZHwwY3w",
  "key21": "8DJp5CBdZYeTaoCWUtqW56rvHTgGvsLBHovAZYYzG51HK88xCNptAz5edxMEqen9cz59T8Z3EfkcyWLVPeCpV9U",
  "key22": "3N5j3RXBXHG1AnuQbKFFzipSWrB7rZbv2GD8sb2js8sqN1qvMzjtmdsf7S3xnsznY6R4TT4Jd8QnGGh5RfUqEyLY",
  "key23": "51fX1oKdShYXDSutagLvdfqrZ2x2VjATw2Mf4EeDvKJHMUodVnZmsMmTJ8rAL3CR2uDr6nJZtownXYpsJqnPPyyq",
  "key24": "5kp8mZWiDsojt26mDecZSLVseP6b5vBp2WGx7uWqba3Mm4bizFEouMZmf7B3Y2tG35PT2tugoZDscFiSHL8iADSo",
  "key25": "4UtLo7aAffgZvTbwucCQvogDTm8qTw5JuLQDewYSWVwhjA2tufFuUTDw7ompYJT8p6dCzPBGJ5sffcrWFqHrUCEL",
  "key26": "3ATEwqFbdLFbsdGSpR2ePgFbtmKuDCGmMDvMdNDLyrW2cWgHg3eDonzpnAfTnNn34naVGb2gTDpz4fYnSJ7yWujn",
  "key27": "3cETBbhLXmNwqxFjce8fZqCZm9fh86wDmkxURztM4Hpp89jBKhMPGQG11nx3xfCHyv8Ey9Qe8jmQRT6n6bet7VXo"
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
