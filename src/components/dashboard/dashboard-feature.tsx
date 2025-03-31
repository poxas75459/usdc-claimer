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
    "Z9M3tKxLqs8zD7ktiGVL3yi8NNyhAFtHgtB8kxfdKHY7fLhWNHVVkvwDisBo3WzEg5XtsEnvigSmKfrc5Rizok3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTqJPPBvK9nKaT4JYc5eKPT5RvF1CUnCSwakxhQ31ojYPhEDEwt86SGUZP8r6g5J5urMzziUAEeNjvK51pwZHxZ",
  "key1": "ECfRqjTescCHXTvUazwEoS1zqMnbLFx1or29fbFD9CJgjMZhqGyDcg4Edk9sz1yA3RLfTknut1Zp2MnzVvcBSb1",
  "key2": "J8yfjr69r7hpqepoVzXprsvu6awNHnzu2YuxM9hregYwYZ5SurVpp3yaqT8tBoTm8bG3MK4cJZowjh45tqJxYJa",
  "key3": "4Kw7nYEUzuLX1VXozFDZFMywTiJGvCSnNjR12nBbYnXZg9sUSbdBCyxSrnDbCpJhPouhhVWRHagLVPGk5kkybsbH",
  "key4": "4Jf4bVpo6PPYDrDbvuzqA623tG8Tz1UTqaqbVMt5aquBb5X1QKBJ46Cy5DmmGYmVsYKdBi1FficUXFynBbU5Yn62",
  "key5": "26GFTdDAewnariTRG14Ab898nTDfcGteAgsJSfanJ66oNmrziTRXZ97qy8EvKyQLDdSNY1XzyKfvcyng3dXmp7Q4",
  "key6": "2AZEggXg3x2aNoUpX2DqhEnm4bJxZtZSze2xNLi1GmbwdUn2CnTzx2hhYTTQoEcVAqYDWRP9spUhLG5bZvhJQpQx",
  "key7": "3BaFqvaqcxSLAhMQnZjfdoJjbwP2FDZ2stW2BdaBJaDRrKdpQtQkpf5UocRLbAHKwKJ9sQxBcEbwo4CF9FWdVMxT",
  "key8": "64LeGggW1nes2c6b8WVk4Q6psaRSy91xPmp8rcxw4pMPXiKk95oUYTkrYXSM3QnNBYpjvNo2o1xCcKrfCurYZHsf",
  "key9": "5cej7Mi7tEFh7HoBHCasxK17UHwgcXoamJkRbzsDTAjVY3rsDDsQ42Kfj5MmbmGdmX1eLz2qD2qhYfqA7Fscy66d",
  "key10": "4XASUfTj4FRGGKNxq4HkbAwtzNnwXFAnjDH2pGzfZgxHpcQMM4eVzdyomN2W5NDfvtaV3VN6LgjtwznBm2db6N9o",
  "key11": "2ZS9TftvkdYSXayfK7YzJ5yuXXw7Hr1YYfosi6A3MQWVetPuwczsqVMs9BCnBS4VdqFJgN4WrGVwSHAkuRwPW5A",
  "key12": "RFTTQb7twiVBJVcTAmAY3NtmuTHfU2P1XnjT3FjTHhVy15xFXoV7aXR58QpMK5eoeUs9Y5nC17DWACCzijfnbY1",
  "key13": "eAwhmXqpAE3UiyXyt2sPx2Kg1i5gxDY5HgYruT5SgmWHvM8LSgsVFepb2xSV5nHWyue3yPZ7RJjSHvxxc4E6jXt",
  "key14": "3FZ6Hii74dUhfx82P4PRaEVubFoEwXDi574hoDsdEopNKS2SDeNCgxyiLNnzDjkkx5FyJsiHX9koMunNiWJbGtGv",
  "key15": "4jukcDU8yr3D7yFTHRRdo8uTJAnX6PPcKupjFTY3FuAaLBxFgH8gYrot6Z86btogG3DN9YFz8tZnEKpKedFmBuJb",
  "key16": "527kdMHQjK8gCzC69x9L5hgE9Y2x6GbJKbs3LjmyyvFsBPDtVqdhh4C1KC7gccPpYwFkyFxZdQixMChpPjzMRRhj",
  "key17": "ppPBAJve7HKhNTAnnoQpowu9CzxfwziiVtvYyL9qhMKsHkYkHuJsmJqY8vEXCLeoHXa9RDnc4WtjAoq8DBjHPcw",
  "key18": "2BytzhehyUmPxWYjUgVijMPtahzNYFmdVA54ZT9Tkqdwdp8WENGUhsLFEQFMZXsgbYTYFjY1fDK4wCFy5gkxuX9X",
  "key19": "5qdd4SmzsNJMp7nR9nuFAaPSe9StfEEU8A8G8c5ucBcQPNXS36nfdMkmxanUdjdULbVhwU5EWuRVEPwGFmgS51b7",
  "key20": "4jDFbvDdFP91d4KRe1RjevL3EahBz6e2Jwjh2CP7Lhops35FFYovrYtyH9TNzgwttLwddRKasvfFSGifs6iFhyrP",
  "key21": "47DJa6eiGypgbRMH4MMHBB6frV1usBMMzHkrvD7h23tNHYpfe5S6VEtAjsE1SHMd32PVmM6mP3RDyBQDNFCdQniR",
  "key22": "4DeAq5BdjLFua6bhxxgWucmctPS3yq7urhUGbbpUi5sGDoqWT7qYhVX9sozQgH4Aqj7f5sHPqb8QQ63w1WzeXaPA",
  "key23": "4Q45BjeX5GLUVoBTnWxVkLMkbGgEB72vTqQ6utP3TwCaHDdmTzAyoeziaVih4sdBdN4AVGMbR39CXvPjEfhhshps",
  "key24": "4CS5ytNvzQJ2ngbEt6g33Tph5YoKvuZKFYhPKgfcx7nuTqekqVbVRyVpUwfH8E5xpEdGnzyB7Sc15jMK7F6duJqJ",
  "key25": "5NQkjkpBnrMDfcXfzu2LRTCaN9Y7BqdRA3ofrWT73bC4L5u6F3UYHxpBgxKHtevBPLi8SHdFbZ5ZnfvzX9ZxidHP",
  "key26": "Wfgj5YqekpL7Bqnz8j267P9YsxzR36dKBomFhXrZa8itKUYXB1beRD57xj876XHxobv2PpsXksJvghy8CFFzduC",
  "key27": "64YnLXzbL9P4FVy3Q4UJcGBRqegTSfdVbHnWTDbuP1q3RfGnMhR3EyiG61PUBWkBKNiVxKBPrRLo3wEpWMp61drW",
  "key28": "27puBbHjAHsqXSaREHtHtyquS2EoHwXQ7rXvi2BPWEyNwuyc7j4XYciwfueKvgKA5SAeiAX4Gm6rd6v8J6kQMyTm",
  "key29": "28KRAV9e7P7qZ9pwnVGtjcsmgvrcYAvpxFeFkF4KZH4gXjLe4d2DbC93Lw1YeFYgiWXqhBr5i7XsWWGXLNwn7QdT",
  "key30": "B8bKp34VTf8qwW3PipynURrE9rUqoDZwatRJvu91yzUXAcrogDQ3L9YHh3H1dFsf4x56cLUfcsHhCcGFeTxSNXz",
  "key31": "47WjoUeHUgZuoKGwZx2hqhduQuQjHEpeS46tC4fZB5tkJMV1oCQMBdKtYg1zQetP7jsKKy8Vq3ARVXFXFrj6urL3",
  "key32": "51vBnzJCYGKLQxyLUJQQRN8AhjetGZUUjUobk57dqXkRrebM3LPsBJr697ym5Ycn5vgRSW1suqP3fbVVefBpWcf6",
  "key33": "21jhTUheofjLfZkhqxyB5meSX1BJskLkDpxUpSk1YxSAWSqJjTzHkrMPkNg4n1qpFRLWPo977gNtg4mWRABZWWRs",
  "key34": "4PBAocMgzkkTenLdWYRoe3uwnYykrZjSrp1q7qBqgLwfyTQmanL4XP65Mu5bQ3k64hsCjnamNzBQVwmDqdy81oXQ",
  "key35": "3xZzf2ugZn6Y91Kx8quwvLvXdWcLGBB7uKHwJCr2wXCWtTnDpC5gD56VctShsVW5CzRrFN8vH9iHEjFR8XpaqRhD",
  "key36": "4s7wc6ZF9suTs6Jtz6Ha3bcFaKWhNmKkJsAaxdhU7ajZK3vWn3tk8u6NCH8PKMnqXiAtwt6UAWmQKNGigS7P15cD",
  "key37": "2R8yYZRh9i1nZfGkDZa5QbvCV3dadCjQhtMuL626cLV6KHm89S4hE2kA8gMoRJGDc5GaBHscuXisbkcvAMEytoMu"
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
