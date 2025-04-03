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
    "5RfqhFmc3iJEyMi1i8MHNnESFUNixTW864biFzGr6UBjsDG3beUSGhCVvmu1YWpLhXjSMczULPeqYZjj5FiWrK8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZzKxf1QidABddy63uPyaJS1Y8sq7Uub7YtRUwxVauykffYHceM7i2MReeuPaHzaokDmCxq4Kx64ZrVYZmC8txW",
  "key1": "kpfuWodGAr36Hqo5wbwSLfCjiLkVhHRpB2dKh8s7my1U8MV636NYJuritXw4pyk17HaETdsSRfCGeMsf9v2meWi",
  "key2": "2wrQZ9fTy9FWjp2JYB8EY7PYJrGGyTsAEzdVhKK56YPgNevXCvVz4tj6Fb8vtAQXGKgAwLP6C7ub4FuvZ9xG4j6N",
  "key3": "4iLht5HWrguP4PFpPxyjJHCggaYzpphPXJp7vSvyyJxxPFiFApzi4X7SicJ4BXt6z2uSnUpZp3CsgKFT6t8d3DEW",
  "key4": "2wYLvs31q3gqRpZ17iDebbzNfcDPYK4VKjPBHR2bAD23ExjyPdxMvR77z5sc2p4sHGdN7yT31sEn9fVXymrzY3eQ",
  "key5": "4PB8AWzqDLF3fpr4GVHqimVPD6UyGAxUDz8T3qkpY7ndSiCyApNJ1tcHRo8qrMhC4HjLw2wMhDzAKAvkFQYRQkW8",
  "key6": "2vQSG4mG3HQar6zHGGVmkCFtW7ZbpZMDGRKE4Vbz6H56dvxfXucXFq3wCatJqy736zYEN2aecKxWESiXQW9mAn9Z",
  "key7": "41PAk6ZE1tjLTs3xvU2QqhFpvqRxzbFvSUSM7Vph7j9a4mV5Ept9Coheruu8tvX1cfXq4L2aJMmhTM377fqJguxZ",
  "key8": "b3EYzfC4w4ipzDo8MzjJgejbvnPWLCm797EnXYAi1mouFRJBxbXiuGpxznPMsYrSbqhoExwFQuWCfhY1zfLijjq",
  "key9": "3C5kQxFD3U3jucVsetBctNauDWY2G4PWG1p74s5q99E3KHjzdYfozhNFyCpuH4gbH2Bc7Zq6bsAEwp9m2aqCe8Ys",
  "key10": "5aoA1bBXDwLWn97TeJeR4pE2TBCH8m5tMkX8ZkLN3a2G9Z9JV6poiKiTc2AVTkPi76FYBmbciD4cyY9r883xsCrm",
  "key11": "2Usjk93MUZShmos7GmXEo8jp4BWiQx8GNC1hQUsh6hU2cm2MhQcCKzCjRt1JkDsn5pdN6pbUsNoxXDskp7tMeMXB",
  "key12": "5og1kCMxAMQPQs2Qyf8EiJtuWSzozmzBCyoS4MBxJQR8GoAGJyLZLejfQvG8e34BoJywbtD5PWYmA4wH5Y72vSWD",
  "key13": "4LVRUZRCyF4x5yAVKwtiVLRrAzs6rd7GtoA4H9u6xwn5vN3YVYTFpAoyUSkW21bMvmzGVoJTPtHbj5tqh8x849wF",
  "key14": "tjq6nD2wMCyfjuFntxuZKqhXmz21osA6X4PM7VLep9ArbUv7Pmgu9NbeYJ2D6ZC2oennAHNPF4mUiM1UgAEJZH8",
  "key15": "5nMF6ztmHDtxNh1Mjd3QvPWZRHsxbgTXvBdXjhmbRmmAjNqcn1jZjMdzrFqgSxixoR79hGu78YASmgfma9sWBpYa",
  "key16": "3neX7CiPUQ1pbHsqLX92rm5frBd4eWkFzmVnEFd4JFMGzRsutfMuyqDj8phsSwFC9Qwc9uJehMjLttnw2fc6PuXp",
  "key17": "5zdCSzeZT3ifhDffAQVoaxTqJxtgKk8Kg3yHy5KVP2tWHXcgaaDuSa5r4X2Lh75ZvA4Az3K599TcU81PctMkAuuj",
  "key18": "2CZfUz1ZPxn1gWehYDstTXQoj6QSaAv1Hg4GWBxf8akqurcC5fdRmSjH146qcnUybpEk3rvfPVCgzTXcu3G3PUdy",
  "key19": "2iMxwsu9a73Txa1fiLEAi2oMSg7yy1ZeUKAUtKb6Mfmxiu2UgZSbZqMSCdWeRVRRi6gaP3eVhicJBeMptscn66YZ",
  "key20": "87cEj7FN3AdhU7xAi9kjvNyZou6zzAo3TfzKhhzdNiu5eTLXJh8JJRSb1PeZvpumsQSnmfjUrfZ1typ7nUEoJG7",
  "key21": "3iFCiXeFCsTuBgkt8KzaZUFG3SnbcJ5PsZBmsQacBFFA5ivhLXE79QAWfxhpPSvFKUTnAXmQTqKEbfL5GkSwii3A",
  "key22": "2pzmwiCUz29dNakryqLmdUuTUTcJR9pZwm2dEvVHyDewdJMdqUdTTVNEBgb2E95eRAv1Hud5UEnu5F3YB4WAc6wG",
  "key23": "5NxN1FWSQimTNYRVyRMqGM81Vx81zYyLt8tpDVPSza4Tje5c9jgdfr6kbXyMFZUa2L4cWiH8sTS1DgDJtje7ZEBW",
  "key24": "q9iZq8VrhDCJQEGdq5Sy2gd7zPE3BvQuCdAvrNeRp9EnyXqsjAZsR9hLUDJ6YFY6qd4pn6JqqsG95SM5tL4ppnT",
  "key25": "HmZHFsp5Qy74CtvgJNbBJDx2nUAVFCDCNvFaN6bUv1Abv25k79dntT2yo2b6Q59KycqictzbbUvBZLBTyf7zKwL",
  "key26": "nmt6kfHmz2s5gNkd8ZjVPPqAWk2Gu9ajZroyc21D2CMLcL3ktmwvTfQoubRZ42nxJy3oVosvQuXCUhut9Web1uk",
  "key27": "5N78LHZpCT1qqSBV2nzHryTsguWSiMmDg8rmZhdbxYAVHXcX5F9Y7aabZc316hwrMfyh1vvds5K5n2rQCUMNb5kW",
  "key28": "63aGPLGghdpfAoDtMbzGPwSEjvNMqXQdpZ6fgMMjUqsPeQzYELe2u9hoaXvSUBcRnchiNCTNAjVndwLCwMng1dyv",
  "key29": "5SpVhf7d4JSVAAr6ZHTHrt2d8cydbr6Kxr4EnHptZCBFeeRiHkSUWBMFe7eW41mWWgzNnvEGv6b8XriVdMS1Zqm9",
  "key30": "354Nj6dfPuiL25eLVQFGF6N2wqB9G8xyr7mZraJcNAUUjqj8rCphAFTU66sBaP1gp91BzpAZENUbaGGost1Z9yB9",
  "key31": "2LLADCKXKuQxokdxVbKAi3BY6N5jNwSW9h4CMLJsc7cjpZ6H2rz5QptZCjEZzdjTB58m7pWmEiXYzgpD2RD1qACb",
  "key32": "ff8r13Td4FKraAZjowcZzRGgG1x5XCGo3PsDHy74YWTtefUFhvgqdF8RgF1rRoxhkQAd1ayUNvds22PAnVYQrBj"
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
