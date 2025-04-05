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
    "3S8xzto1q2TSmLdbhcYGZPrco6D9LyGRhrLu2asE7XiwM8BMLE9YDRLijk45rAKN34beGQd7JqjNKU5me2mvBAxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWvWnGjBV4nq9xxLLJDxQ45VnDsFoiHbtXc58C2ANrP4RdSX4g33p6snfzJjSCFN3nJvy3q8ZjuJ9GYnovHtCcf",
  "key1": "61KeKZM2jwqm9s3FeTRPBETvT9DNdPJEjjF3ieFg2M1hN7cZWNyRHTWWpNEkfrpf6hQDLvS1ZmgsEXJKZAFVv9yz",
  "key2": "2ibxdpzhkpA2nGogcmJch1tco8wxQguoTxD7ptuEgdu9vvUtNKTyNMxgChPN9GbJoAYAQAs6YwUhGJXuzy16bVi7",
  "key3": "4zCvJe3veCtUZbtEp4N6BNVhWR31gxcqPTxAQaPWUY8NDpCajmKGcyM79YZGfvy7qEkcb3Lfqv2D8Kv6RVQskTwZ",
  "key4": "4qqJq7NWRA2R2aRSoxfNvwGH5Tra4CDXD9Rt5LBTcBVHEtWuvNq4UCFFK2EBDkQCrKQn9ZEHHcYsnQYrEp6zvXpG",
  "key5": "3uyXU8B7YWVoM86Q8wMSD9KJwfk9yACEUCDoZNAX5HH3tc8pHcaPgfhNG7GD41iNKNaWRMDynCzJrMxEjGL5fs1y",
  "key6": "3duYuNjNdCsNx6i93Hc1CzUStL8SZs4NrqQ2YpBkmPiGRqBNMfgzcaxBGFpz6UZ4YX7HfNiT8s6wcKGXgwUxuT46",
  "key7": "4qqGNHWbofodruApFZK8YwJ3meXh1h47FpVVj57HQ3jsm6CrPp7cEXEq7RsBTZNfjipmeTSaaYz8x7z64jQwGLkR",
  "key8": "2aDXVkNGHGhMcUaeVFe6ePR6FghWemo4xU8pZFh9qKsWazoYRBY3n8VHu37xrinodmZyLm4JugvYfUWQhLke1vq9",
  "key9": "3CFzFnM4vDvUKCcB1hX5TdDMcfTpKEZvGvABLQ6AyNP6KBAiu47qN3DiewXRUPGRniGSratWpyfRPf3ViCQFWKqS",
  "key10": "3qf7ruMyt7sPzZwuyYqdTSbUoX5nLeaXGVKXp3FtcsqxXfK53pCpqqy8SjpNqEoLYYjqEcFJMzDHVBvZs6JHhAmE",
  "key11": "2x8DEZEaWKSWaB36KQivQ74Z9Qig5By4UbMgR2x9gychB4FC1XeBBBU8Ts55EKu7KcrHd99uPFL6AzqejNFCJxUi",
  "key12": "5T8gjTF8y3qRGBgqURoqYrfkW38vuSd9soeLVvYLAmep4kwgoUUtfBNa6Nt1T7yrfsfFWk4xPH5rmXVydzMDW4bi",
  "key13": "5uM57WPQCrFXjKE3LjAZsrF9ZVXVEquHeP9x8bb3SeGo78ZzFjCznopTiiTndhort5WKkH9cwsGXKhnGNgUsMyRU",
  "key14": "63u57ukzeiWHFGF4ANHcdxuvkjCfv7ioMdh1X7DGxGpriapMuEbZK5iGAMS1r6461yPmRZKSxzuNwgsTdMnhPjqj",
  "key15": "gABZ6yQS1yyMW1X9ze3jWML9QYdf4hK4wXzaZomXEJDKr6PZcRMAyPySUYER5DYLeQoSpmSzCmNu2Hiq3M2wz6u",
  "key16": "2jSJpy6ZMHCoo8jjDSH4yscQq7CpTkALsUziocZpyCXxhoRLuMpBefhswbNKueVNo5SpFDFvoxhcRQTjXUuYaTzt",
  "key17": "UHoeePkcccxNFCuK229JjzGptE8E1Gfu9fB4hw1h1ts8cv2it1sSTQJVMsv3HtcMMtQibtC7NcRVor4J3Aj7hzn",
  "key18": "52sy21xK9j8DBejnQsWXAVdKDJKiwFkmW7oR2DtabMuPW9yVhDa6jEuyu2jQgrir9VKnQ2Ru97WiVT7ZoDU7NAoc",
  "key19": "zAjcB5yn6ikRHhXn1tLBm2Bz7M2SaabP8MtXcTtZeXL1Pvq6ngY24MRNS3GXTrjFX6zkTgh1Lt2W3qunsFAvHhP",
  "key20": "3L8sNQZiTSmRfMNb38difEvJRGn5C72pRcJ9VTmBy4WWa3ERHgJvza2PdZgek7h1pYbGomfVUgzm6vhBCxDUu36M",
  "key21": "2CzA2TgTXF3ZatNMpb9dBqsi2MGgU6pFDNVqergAR6pu1nypWxRYFyxnmRBpMTgoKPko5HvqtqoyT47iU5TP1bTj",
  "key22": "5tfoREzyFGvHFykvfxsWKgprLfEkmiDxKnWaPyw6w3YPo4BHMXtLzWyRuYwL5P6Ad2ybS4aKXe2zNeJ6hKPCWKGM",
  "key23": "3UPWbTaZhquwzhdNVEB7K9WARnD2oVYu68MH2vszEvCyVeGfQj8oUxMrDkivf56Dpzag2EKhUCEmSuzMLuXa3GEU",
  "key24": "4LkcfhFEZYWFrrZHPMmq2o3qbeVbuBf2HPpM1LV1426SbzBc2Tixs9jcT9x9Y5Pm9TussdP5vaj6HQH1fzqE3mJ",
  "key25": "3hyFZFU9NjXLYksXsDDwN3TJgjZfyxSUMEXVFP8VkcZeQYP1aeRYRrHUtkqmi57R7PATp85KRDWzmzcZ242rwg4e",
  "key26": "5B7hb868trtrwKYcpzQdgUVjESyatBHCLLNPXgbdExrC4Zdpc5YYoeKYDinrWRMjZ9M9SJKbk2fAykknJ84LGbzU"
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
