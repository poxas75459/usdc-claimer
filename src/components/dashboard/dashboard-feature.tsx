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
    "JMCVdB2K235Qjog5VE3tG5Epd5nCrnHPsFU3u45wT1nwyvyV5MoTbgN3FmZu2TimVAEHtcEHFQcbSPXGegC13UZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkBxEWKwxjnvHpx9yDBpskyjunNp4GwYJsqYJtjpn6JhTQH2fZ839JwBCYbgYvgJMPbrj7zFGBTmKfUrWujyZ1w",
  "key1": "3N2bUTDLQdF2P3nHZ1SvBG4Um4HtPCKUTeUpjtiwVDmdFzMe9toFCxc77mQ3eWMmpZun1b3g3hYqvbq82WtmER4d",
  "key2": "5qJngUS9ezuqiSrWj8GRR8nLLD9RuZ6DSFWUyuCMYLCK5X318RRgNa71fuAduxr5GYt7dxnU4xwDqoLmB8mu6Vc9",
  "key3": "3T5ZQtNHYdkmziF6Fa1E72qaWGTVmcswqbD6UE2ygeNNPnzt5AtCtmQULLdpViajP1rTDq61bhKdb7ybubytCPfA",
  "key4": "3aCViZiN5aeUgkcb6ZvvVYtc8MG1ddWX3oAqHWUNaELJaGoy261VqMK9DZda5EX2zdiBHrf2Sfoz1q5Vtts26cJK",
  "key5": "BMVgbSjvzFtWbtuygW4btW8eWVgEUrnencqDVe6xPXueuiyuNnNtYZZs66sBzZhXgcbcf9kuAeLomEMr2CKH432",
  "key6": "3e1ezd9vVQpyueaG7DrZCjTTwADt9Ew99pzXRdADfE5RmxEjq1GU5WEAEnmj3jzXmthdnW27KDx2YVsPkQWse4y1",
  "key7": "4PrUcSiavs2YkGf3975znP553jFp878iXUWq9eZR9XbxD6duy44snrz8N7gZs73XLDFk1fbFFQuuaYVKxEtxcKhG",
  "key8": "2ESYSJ67PJkqc1yTGRfXvdbvcNsgMgnD2SLq99JoY5WDa13vLnb4bJmym7ZhymoxS6BVa4HprngwcUzEY1BHHpbm",
  "key9": "5ViHHjJMmuEnKFd5z5ia3PCzgf9S4CAuYLYzh2SEUzm2Jv5VJhygZtrqNUXoUuhKG4cAiu2TinGZNXqRLsCbJmvj",
  "key10": "vpNiM2TbMK3p53F7NR666fiXmzAcvtCGy4DuzvMcKwgcydx2Jch1QM5s4gPdTkfedjZFtt4tcMPGyys5KgVLdKc",
  "key11": "5ohXTLCexAUNQwGApbF7DmYQsghT8MxN3axdvNCihN33TxR73N5McTh1sn8nZQBha4NBZuCb5EU9kNUzx6jThLjC",
  "key12": "65dLxVVxubYzX3A6re6rWKpRVqUs2iHA5BwV8g5VssgeZYa5dZEY6xcirnGvh2tQTDe8YbyxHGBS2BddCf2jJM8c",
  "key13": "Gf4gCrfU3Pq85VDkGzp8Pj8UdqoH7Ez3nCPAXNQPt1LLCfmkKmv2sicp34EQbMWUYWHCnZTtdp3JptVAqkN5n6W",
  "key14": "4sqC9yGfoWmNy6gETeJVFreFQ4rY2phMKZ1Ez5c7GpRLqL7sbJ1Wcc1KCH2e8zhdu9iiyLEXGRB6QAuU95ZmWsm9",
  "key15": "4BMfGnMyasvLuPN7JPZ5LkprXbWkaL85xUn9jFY8jzw1vBXP2qRbpFV34LEAZfdBeAD7G9Nga4coPfy7t3VH7EqZ",
  "key16": "63tg1Ag9UXLtiJTwkQAyY5HtvAesn6kaZ6WuK5obXQmwtqRmUUS8oaQmTPGzFiZaC7FM9ncwM5im3Zb9LPHW1A85",
  "key17": "3e1EYAatU5qLurwSBucdEM1uxB8nvefLjSu8ofKsmDK2VzbikZRAKqwh8w5sa1ENGhCfVHdaW3GgpV1sARRRKcPz",
  "key18": "5qV1EX2GWLCEHnjppXawzWcoPWYNbuFWoN8dtWR5jaG9LmJYHLqxGupRnRNQ7YzrtnSAYPWZdwUKVpKAikSHNan7",
  "key19": "2iNNnuUmgmQAyQpqjCcJj4gnqZPbV3g2mGdnp8rQP5qLSxPRGgDUtJTuC7A6eZewabuCfJHXkAHgP28Kvrj7wkfN",
  "key20": "5JRkPySEpuJ2Jp3nk6kRNHKFBwRnJHurtGrth3oxiJYVQV6UgVkVZJiQEE3z6vY48FrbLB21aifsD44a3FDsPfai",
  "key21": "aiXT5MEP6GJEWAR92xC7YVfbE49L7iUYJ5JHYgLeGeozgcZa4Hgpyt4RH47BDePia3e1k74ZjixmUT6WAyvuMjU",
  "key22": "TWniZMXm1VgSG3cG4nK6q1NzVb4ko32WRrgAgM8JXtAygQRHgVcjQnVXxiAYm9jjWrTSwEM6MSWXhh2aUnjW1iL",
  "key23": "F6C3y8Yhk4qEZvqTx5X28y6X8uUqRTKbmZkxaoee6ragzyBzPHGdYm7f3UX1A1b2BP4TMRE4jDLJG4KrDQFCje5",
  "key24": "2MperNUyyMv2o8RkdwiXYd2a4zPuciSpArWC5QzSLbNgtwhnAcFzsL6Ev7tZyKr1TLAKcBvUyURmoQ7sPtExpy6J"
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
