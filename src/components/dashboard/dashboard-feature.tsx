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
    "3CJXbKQoquu4YX3iyJzUF5yuoKGNL8E3oWoigdT34fTDPjmcHVBrj8MJgdeRvYcxV1jXJB1hpwtY3mqahXHVwbia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryc1NcSmMxVY5ypmb1258vMznNE4dGkpngR3cW7yAPoz4TiJEuUhU98mmvdGiDHCRSuDYU26ppeRWzD27rWvYpe",
  "key1": "38g42rMDTsDK8R5qHn6D8hicKTpV9hcLUt2BSsVesFECgUqJCbV7HQKUfg7TB9ZgK89rQHHVokDfyjurKEDcCJu4",
  "key2": "5nJw9L8j6mvY3gNZiNjAri6iUDxyxE1b8W2L5TBnW5vqHskSKfJKa7uGNxgXNSUox6mF1kA9xJYFhfcAfidGCEEK",
  "key3": "dsLGwH7kyGLu7DsEXnFqbdWriUtFqG2sPM2YfzeLoT4XZsxDxzsF1fZSEbNY8kaX8HCqtU544URJRB7wCM2QeZv",
  "key4": "CQQXA4StpFDUuzSgZMRSRHUsYmXqaT5XEv5md528FKDpoMBLGqT2Ak2Brym5QrV8vUTbFUL67w7fGjbjwQh2CXD",
  "key5": "3vqbzVFGazjZ1xveEgsafKuHYB3pe3gdABj3HxTJ9XFwAKuNAxnki3C4Hsd5QXK2YnTTfcr21E6tDESJjQLsGBob",
  "key6": "5xh9csNTuGMHoBn1XZCwnf9nrTvV5Vgm57M8LZXzAiuBMi8zgRLDJW5nStRFC9ZvyW57hcmyYsTk8U3QhjcsTcrG",
  "key7": "3fFtq4F6WHVuNyeL8Msa4nemib4abhfzDMzyAPSVq1GsnYmaXU2HT4UFCyGJWT4bbNvy7p862NP2N5wGZQLr8dAK",
  "key8": "28SZ8ouj4Yj6VEDLF4Y1z2Y4XQ99vRrfKGxuafzuER9wh7r7NMiw5TE5DES6FWpcJx7UYpNcmupscR1dn3oF3wwG",
  "key9": "4hEXVL9x8PUPp2BzoczH5utVKo1bQ5Fhoj33EZapaJQ2s6GAS5qM9UZNRUeGe22Gwm13wY3G2AhQ7vi2tkxvG7px",
  "key10": "3EnwLPmTxFrtwtmRYQdrEvEdLLZApWQdpCSsmYgnHf37RHCQGSJRXXyYFgwXBthWpmYfDvVRUV9NmH4TTVBkB5uz",
  "key11": "xkXtDnietAqjTm4ZvA2eFbiqb1XXAYm8u5MV6RM5yqQzatMFC5YbQM6bJ9RfUfGvapXcBrwPNcMLKY1X2H8rT7t",
  "key12": "4G9UURLaUjB7NrE3xipJWixxGJuLeZNxVwb2g7Tx2JvaNPX1pP4tmWXia9H78bHuVHAdNUXW5eGbPUUdcX5hHvmN",
  "key13": "3zTXGPnty746hDZo74c6KfXQ5QRmj9VLCPz83zAwb3Z3MsXxoR79qHtbfUbiB84kuZB187f8EDKM8QWxxMAaPyrj",
  "key14": "QwKC361mjkdjQ6tySFat9vYSvAJ2non4WXiqSDAc8WHnUURWJd298DzZcxwwBLb5fJccuZhcPVoyDm5tSDGreB8",
  "key15": "3rEtpQZNa6DM5Ta2Ms6QhNvn9bWpw4WKEM3jrwRiM8QbDukHr7hygH29G15W4wiFRrf7gYjizVhSHHzvPrYB8FZw",
  "key16": "38ReXeEKnSjTvPqJh88obZHeZSkhZcNf9FNYqrVNDcKxmS4irgqx7qzbePmHp5bBxoogiAvPstZB8szDNu9wnFpj",
  "key17": "2FDjAHNCUciXnhcWXARG3ghxN8EB6s6PUUjxrhUKN1PSzJCj94gBeE9SZnpAFVfX96fspnCXVJDQ3BWxmqAsZC7d",
  "key18": "UFw9AatUzrpPM8EEAK9wNsMX8TyhM73qNgVqLbKY5TTbyUEzUMNKiRvsJWTjknV3jY6pgG2FA7FdqbRACFTXWSw",
  "key19": "5zPaRFfNkjDUvvh5KyvDUpTk11VgAeerJAvWm2SR7g5CDeqCt6xSqEyd1sY2EaVu5Si2ZY6DZSZ8xYBYDk5swhXc",
  "key20": "NeHbKEV5UDABuYU5q7PdSDw8dfCiQTotURgqjF4JQiHziivK4MHTvJuWJpx15vUfpVvZkXgEckixBGgW6g7pojw",
  "key21": "5MMZxWFmbDMWdYD3RtgaMt5iKxh29F71ZtLhS7twwSeWPvYou4Wp9hxusm9QVEWdVV4Cea7QteG29PvWri8zQTJN",
  "key22": "3XBrxLGr8mJGL8jXiZNYgCqMxTx8ErokGFN75FTzgy7rCtZGwFP8mUEwLCPnyR9RcAbTADxVRJh4oLS8SGmLnP76",
  "key23": "4YczytemCDSEQkZ5Yn1iyJxmBJm1N7TcsLfBQh55y2iPwbd5rQzZHTMJaRyFGGLzhGYJ6f7oDGa4Myhkjia3DWDN",
  "key24": "5z5uX6utgyXeH5hHWqjuHHaiVt4gJWwndG9XgRcg1vb6iF7G1FiWeCUvRW2JuqpMvGHKCopw59BR7i8feKMTsqSo",
  "key25": "4huF1HrpMKA15UCGKF2EpMk7DecTDHczE2bXKhGa7KptnExmdbSFjUXhZqBtDpxxkBJb7FqTiTEwn88GKUaYLhQn",
  "key26": "25VsABdggGgg5da9JYiyux2frKotNpJXwCwJtcgYG9fji86in7Kb1dH5mPDahgbhDWrCSMjymsoVEHNiCeQrJJgQ"
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
