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
    "x7eR5EcaQyff3UfETB7bH8emKK8ArFNH8anf5Q1vpV5Qa7qa9C8pg4gm43ZqmMGCiSM8Pk8JUKHTMgL7aYTNWp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SsEhAJnJvqZh8Bxghb86hSWMNdgWgPU3FoUPjUNfhrKec5Hsrp2tDcdFoFbjZsgS3SLgJX8fdKgHHxUVUHAnFwy",
  "key1": "eTEyMMg8GcgEK5dDEXt9bCKZUszy5fezeBtuCd9MjLAkrNV4Tp3bfVCscjcqZR6oxpWADnxtVL1hfZ2TFaasovU",
  "key2": "3cUzGMDBitkqcedC3YStbWM1rstEVgNBexWiK9VPdET7Skm7F4fK88wo3XRuzJ7SR5JXBHuya7vCuuCJDtTgJhsh",
  "key3": "2eAb6tS1Kds9NYENaBN8k7gQs65dQuG94ziYHpnp95BtdhmvNhxSqeVhUDjmta6Z5NtHvnSQETcciadbvFfePBtK",
  "key4": "5Cg4KiSH92W3naZcAMSutgvviAALYZ3ArhNkcQdna8PyiY5SBpsoi7R7ZRb6VEUhDpQPm1GsaEMePPoZySdv1LK6",
  "key5": "4ELX4yPshhL3YXyhqftdLZ8pQeM93Wqi9Y4ahyK9qcmiwXuoh7VSb4UYrama4vJhcgjNi6AxBg1tb7avh7zfBih4",
  "key6": "TuYV2k9TGtnPCyu3MGnmVDKQq6KqVnvEFFp9h49Z1CU82jdpBsa5JWY2KMaHxZTp2pPawv23DvGiC9eRFT7Vpzy",
  "key7": "mhbsX7e5Ef1KhcjdzBds42uTcp2eqDxkQbzDkM2Cuhm1jes7mvq5Jo8Hgz5M5BGRNmEpBqxaYgDr2GdnFmDdejT",
  "key8": "4QU5NjjACDcxUkDjFbLGDHTfu7csTYrvAAkp3MKuuR5Gnvnrpo9pbrVTwiD9W2bySLVUCZzPogtdwe49yfRPRzj1",
  "key9": "2tCXBYoFcpUuQE5PTgvy2Vjn3khVhX4NeNFYtRoA5Bi9VkConh199EMmREgA25Lv3Sf348VCnG7YYMJqUzpfXnZk",
  "key10": "3AHXfHEwLt3FSQtxRbFcDtoipTfMokRWExJeWmj8iBju4XvLPGqZ8PdU6FkG3LYQPZGKHqLtLAzWPir7GLutP95p",
  "key11": "14ZMQp3isXdxNr3qGacHGbwCGVkUpKRBc7d4rmLTVpiqxS9BUMGXMXHdrsyXV8UGMvJmVn1uK4jFSApH2Zqy8oE",
  "key12": "5LUTU5NNiWq7ex5meGEB1KwDHuak83V1byZ8DT7UPVjM4AE8ViGQ6oh5UMug7W7nm7AxjPuepGdofyU9NMJRRKwa",
  "key13": "dYFDZmo7d7TBMiV12ajDdMbHg8r1HBJhHh2TpLBvEhzxikwciVw4oDTFS2rWFC1im4AtCtAodQURmLxNjKhczv6",
  "key14": "3o82bhrAi1JAbWrJdY3LFNLkDN4R5FZUWtnN6sYsBiMCmyw9Nje8qXpoRoXVN6JuWhLmbKeegKumFH9GrpyFu8Mi",
  "key15": "3MQ9vdVVWMethzWYsFctB2zCGbsRjfQhySELVCfPoKjTw8CwQ3VSjnU6e4wqPC1BPcKxpK5ozeftFb1ewVMqY1pU",
  "key16": "3Mg464i2Vh49BL9hWdsDRu31f1HnDt9img2A1825o612KSq3EMRy9fg8SvseM6zuL2qvtnbmCCKe2Adm8uTo4JA4",
  "key17": "5zcUAbPMvwq4FTaA6mNyw3zBrWeq2yM51V95BaERThTVbKP17Jo95T81yjrba8kd43v3HWjp9NJoBdY1XCxQrzRH",
  "key18": "4SzRHEKydDp2f3NXCz6ZLBshDqhpnXHmL5jXsS7w4NPdCE7tELrXKrXwjoFos98d7mZJZ8MJvxMNbCag2igcgX2E",
  "key19": "xNWKx17Gr1uHzrtwD8ye2E5svEJt93jSfBZVhM6apGG95HgL6oxwoV9HofHYDaxQBhuywBjWN3N213EgRqQQgPr",
  "key20": "23fFZ32fwt9Fx3oHyQYFCaVhhE74zNExbMeL3RWh2DmXvUsN1N5kbdd1vgSJN9EyJAsuwqJE4gG8aVUhQ8sDX5L7",
  "key21": "533bMFPMVLfvW41MYobrkT4rWHrQ7zJAJjno8wNe6CSbJVyvmXrjoCpifBfsuT2kKtZwAY3YkpRAdyRBaPe7rtKk",
  "key22": "4SeDXMu9pk5Jdfa5BaLoS9JFqogPPG51Un2wewFZt62cjbvYVgw25KrRizoDPN9LPirCRs5aZEAxsiW8cfKpocGm",
  "key23": "SYxGjVQGmWZztoGCdPnPvvjWv5KHEow34jQd6bqRHKV2fQPyD4HmFiiEuFui9PDqHyLFnM7bUUzC9bXs3BJTPBD",
  "key24": "58gL27aMVC6BiKSqQg6fQoGZ1MmN6PzfWSK1ZBUrgSATYTJi6rUQLmBVxL4qWBPoGxTxzPpXHFZtJborxt4SM6rr",
  "key25": "d4uAaiKnteHp3TaQbpdKCtBrTXPgsPbet2YWpAqKFKtKYDW3fwbnfxS4kjEGB1T5THWCGRb8owpzn5RuiaD9XtZ",
  "key26": "2d8REJspRvsUCWGAJ4EeLkKmoQiQwWGsfEgZCiWqrRfEbSWnCtPAPFYAVG4PtguXrV63Dp7igTYvfXU8gKXp2uHc",
  "key27": "4GRNRChENWbhdnRFHCt9CEYeaih86SB9hoa1N42XdAQwq1paMHqeHeoZ7t2mHBSZBbE4xVQRKXaRFsA2df7kvktC",
  "key28": "BgYaX6ymQgKMUgagapYrFkutBG7hJdMuaBACdeBrd7Ue6TxJbgnvJVneNXEm1S1KqstEaUJVow1Vt3coomZbHQQ",
  "key29": "3RDN4PCLifksJeQxXA7Pzx7he9K4CqrhoVwzRyt7FGd85woNRHAJQNdXVkABH1Dq5jgF26WJffp1X3o2f3ZwdbaZ",
  "key30": "4DwVEnAzt2DfczQedN2jH9Srs31DAnd6Vg1wbSpe5xe1JLAdZy4YGYtRZ33LpykQgjt6GCDvu37ba111LxkYg2gT",
  "key31": "3syXLAFwxqEJPpNtTBQ7PxN8mkY41tXSQzXrfSyDuAmkRSmQnfFWZj2XRq7H2JYUvinoQHNPQR1EkPoj9HiEVoKc",
  "key32": "QmnC8RqDoDZYW9g3jo5Vub84qaor5LkMD9EC3ZZ279nQNd4XMSJGv55QvmhNtmEvsoLdL4sf4ec17MXZ38sEG9Q",
  "key33": "38AFLXcf6baaCpM8XYTuzggtRoAZoHZseRRz5YLiDTvkrLpGajpj3kiAtSUZFs4NvHzERv24MqnXrDCXpQybhcSk",
  "key34": "35WrcDD9x3gD2mKJA8pDhqUWwKPq84aqFh1rtWNHtkLx8hX7AxNVK7zGbU6zCk2TjdkcET6k47KWwhVcSrDZNq9a"
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
