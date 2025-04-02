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
    "2r6EcR7vhT9SjtoFGsCRfuAuuCxXF3SyBuQMrx3ERnrLgxWriQETPGX45kyeexr5aq8ABND4caKjownYpQWLH6RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyb5HENdT7jUfd7CjsDCzPVvPBtoKHQj66EyUp7NmbDWhYJCk3w4Z2yeNgMrq99QbTha1JQS3U2xoEeUTUBKrtb",
  "key1": "3pcVqJ5MUDoHndwa3HLdt7HgFcjt3edbGevrpsGXfabRG3rMcN1bCGaKJJC1MdNTZpNpskSQbsXYobDjV5BuGmdN",
  "key2": "5sKsc2wVAEwsKP1zddP4BySg5zGm4sPK1PFLPwRxFQVrKZp4xzBA3wXYoxptWJFXBS7ScZYmB9hXmMEoNBGkLNgA",
  "key3": "29rxVUNwicbmNrLcB84xCGyRFtVVBNBa5jBZGGSX8MJBXeeYdcuuitfyp2xeBL5gFicctvezwYm4oSPYgPGpbTra",
  "key4": "4LcqDqzsBad3q1PZoWNcpP35ksDAym36EinkndoUxcfP1CRk2KzkWch9e85tm6d7HayTZFTqiDTRPMSXhhdsk7UU",
  "key5": "biARgZ64HjLbPB9bchSmLcVM7B3uSUc3Xn77qw9qQQx66bD54ThwRCen3Zgp5T2HzxCNEeij5BfETrepY7oaXDG",
  "key6": "53M7czjPjJDTqpVdgDDMdaJkHX4WoD7u7PTU54NhXrDVRtsU7jeQtBWTqx9a7tXncmciuxfRRKrtionTgepn4TZ1",
  "key7": "5woatuGj9D9LRywrZFgvVavXFVygDg4z2vwTGNyCvVtFtUtyR7Dk8Zh6fRM3ZDAMyDpuWRoieqrDpxs4gtVagEam",
  "key8": "5U4Jx1sLrF1C1g8v8ysJiAzcwbJbrC6mvUB6CfVMzcykPddPVPHzmtAJyG1uQNsSiZi83ppbFhTgcabLfRnDBwpS",
  "key9": "4UVT5PYokBPdegt4WMVDQ7snACaAjFS27K7hmtLvcCQ82Gv3ph8AiyJbWkNhdSrG2VYLDy47Zd2pnc8jjfogKdhC",
  "key10": "dJyHDwxvS5cEc1FBRZefrnesUFB4hEK5AUAPAYP3LjoSSegps2o9cNtfz2L7NeSSmBwC5KmS9HvLGw3BWsUuZmY",
  "key11": "41TgA1Xy24abaYa5iTKtZrgq7AUudTEZhsTTYdchef4eVP3MFkUKjJPfVkXpWKm5hUCBc9izoQZjbJDGaAzUNReu",
  "key12": "5mnpCdY8C7MDdwz7w2LDp2aWqGPYeW2gYjkUhSXHDGDP7hXeQNimWVCeufqFoMUi1T7VExDyrnwdP663rs67vfKJ",
  "key13": "4prtPzeakuQTprQkW4FauzuyUxjpQAVT2G6tjpTZo6KeLmsDbP3T9TBNbUJNgc7CLStuaEutSgkbBqBHfR4dpd2w",
  "key14": "5RQJx7hcdQA1vTgujBmUEwBhbPJmxxhK4Dh2QVWqEyDw7VG3dzs8eAtopjc5hCZTRZMjwUHUP6ZP3u3xhqvYFFAp",
  "key15": "3UtU2QreBpm4E4AKfjqo1wwqVzVZgQp8H7HypQqbisJyUaGJSk9zm5ETsAVv1ptY1eMf7ja1XyskYt1AXxQyVJ4J",
  "key16": "3ZKSpJnZ8VkZEswFSr7jVcuiVdtALCqWXbqPadn995HyWX9CPJgW6vTCWRdpTmwvgXF7DKqZgwmCBxYspbifeFtP",
  "key17": "5Quc7Lscj4ttmb77i6TBx1pky2b7fP7bh59HpmRp9wvtBW8KmgCRRTfaerTUp8BHY9U4LBwRkaDmwADG5HMug1vi",
  "key18": "7sEtf8XkaUrinM4WScQFfwuVvMSsKuzZJkHFRh6Sjq7ojDB67nu6kmmqNVUMCvd5stNbkQGaYkNteVmxH4AUjDp",
  "key19": "4JYgutTKJ4SSQS8NoLLTYPgrH1tLNbfoZW9wMz1KCpsjok9MuCsfuQyZiiitQGk9fFivQxbSiE5H1kJNcmLZTRSA",
  "key20": "54P4P1HwyHkiNaAoVWn4vxuxxYHLHG3fQKgHDH7pmvemAMeXxaHnjp7uZAaSA267fQDWjzpgo1P61roBYox5SFEi",
  "key21": "5Pubx8nSQh5ZXQe5Y78NLoxyg9xCxASyRWNLmpbeyTDLojJy7NVfP1tgkmYRZEDJse7miqBY6UcCZmMjsY5rLYM6",
  "key22": "5sZM2hvu85tvsH2DrRQNtFiPRgEf9BE8Uz3UWHuUPvv5VjUfoGLXRsGVqjPwQfomtCp8MhHGy5XEo3usmgnwyGAv",
  "key23": "3BxszbVUpR2L6hkDHvXU2XUx7zsdUoXhQX7fN3f6pU91hsPWAFpeRrfAP4VGMWBBYkztQX9HScuez4rWF2cgKAsY",
  "key24": "2mcufuTwHyrJ3VhwxpYiiYxxnEe2RTAq5stG2kYvS2po2XkwfACghjC8ZZRo8Kf4FJKLM5jrogR1BkgAPb5oDbds",
  "key25": "4mYXJi2xe7MJqfaRxmydQWwvd626t8K6K8HVkFMJHjvrhGmgMdjPL5YH2CDNscadYXse1eMRo74D3yxkRRBpfBjE",
  "key26": "2am4UFz9sJ1iQHSLbstJu5NT2UtZpMZCckpV5oG9PqD7yiSNMsh46bqUU71tPavrXCNmXGRLZXnkU7EDLzdJfscJ"
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
