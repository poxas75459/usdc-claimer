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
    "5KA46Qbqdy5YrkRGzq72Tfp9fTMD2n1kXpUQatiuFZHQpMpi6psDWC6EhAmeu2Hy7UCPCVLT7THrLXAoFVF6tHCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ndtpB9k2okP45SLJcGXH7jSwYA3udjhM7p53aKirGE5ZPK4LH6K8v27YHZ8tKH3X35hQEosTLbiMzJHrzMGoe8J",
  "key1": "2SFrToDA5f3edKPWp4nGkaLgXWhLcgMzppRCLLR49UmoqQ8pzqrVBcgBxXFwYFicpNDSSkd6TChe6zHUGq7ApEwj",
  "key2": "2nNeNKMj55zn3hSeedSUQNXmZJRsMiS7sWMAw3APMns3EfPmnuRUviu9QNi5yjngJo8Nxrsg5kp7zKKcN1pGMtUL",
  "key3": "488aiXvkQfHYxTHCR3xH4Xi8AbwEjCUpZvsHj8JjoTYyswyDM3agXyXgjvqZNgTaf4KJaqERGVWFAWLqHqEkyEur",
  "key4": "zHC6KG3YgakAoDHYkTmaD5XottTU8ddgjwGVRi7A8BDQjfxTonVwqrMW7ihDJQWUTjiDYBnAZSHeipuwNmaoPv2",
  "key5": "5WXGDHyYN4tyHHjdshLVikHw7EBh2k822fcQEAKhYkJYAMWMkW4eG9xrBPV1JwhRqr9g6zuSxhodxZudKRNLXv4D",
  "key6": "8gUA5nMYKwfLxxbNqZXWWTUoZVyZVkJbx2kUEXNcHpD8LVGhbAqgXKjF7tfBQHddh2UntV8PvKst9uiPa2YVXSR",
  "key7": "fC3uyLQNYDRqQkC5dDpJFi24epjwonxpaeRTwGGr4oTCXoWgWH9x7ccfHc53eBXSm7AVgjmL6Fy7qdgMStNo2vD",
  "key8": "53oA51L17zRKRvq9NXge9kGh5FFuDsoA6wASV9dCazHuR6ngJV9uV5s3H3ZUyoNcEn1yebBYyW2skY4qo7WYUD5B",
  "key9": "u1qyZSQDQs7s5ippVnXUUt9RbPDHPbg99pWQN6GqWiCaSWR1vL6rKKnfcuMTbK7qcATx4ZNL5sYsRm1qCdyH77P",
  "key10": "4fKex1ZH1wgZHNb5B25jTaxCxEjC9KxkU6P44e8k79eFK3mP5vN191pv3F673pqVNHupsEs1pYiGm3JTSPzq6SoP",
  "key11": "5xcSHhFXnwTRTbHwBhPUx7AeDrTXKprWXvCGgu5YBBBPB3qrCHFxGsjUfw66fgzDaWXRUz84GMNCkyFBV2s51R5R",
  "key12": "5cx7ccM2R5PNWDQ35nNrc17QVhNGQuawEFvSs41SxYjaYmnLjuqgKaNEgzhd8rmgj1RP7fmUqYdk4ub53PEAwEnQ",
  "key13": "5jXjsYbcAmYMGvk5DHNxVJuFGexYhJ5dm3Hq8nXC2grjywGgniEWdHdUFjv25KkQd8fQVdNYj8nJFVkj8Qwi8CjH",
  "key14": "3s3U7buhStyyJZ1LL4dzhkAM5KJe8umFBbpHz6si42GYMcVeEJJupYAHwPWULPvP4t596sS6WiFAPZifd6AQQgHn",
  "key15": "2ThGBoPFXbi4HsiMxa9ScxgLveqiXuhx9DWfT4TEGCdPnN78isF7RoXqyyTJMAoRG7tR1cuL8C1LTkceepJgewe5",
  "key16": "2rcVCq1ismiXtnJoymQxig6okkgKEzWngK9H9WN3ZadfHcjA56C6unpzTuTfrtjspxBgS1rxzr8BL1eD1svXBLbU",
  "key17": "5ZCNdNRWLwtvywGyL2euBBxzLBENC4mVztdzDCqC9TLcyihzNxKNWZPTKNCan7m6hUemDc1LqbG8v5EKBFss8UEk",
  "key18": "5maWZefUNHjUxS77ctERk83JHTT9aGdNLDNRnvr9sX4JbwYf4SMorx65gUWeCygMeZzWSjnxCZAgiPbo9ymfKqBo",
  "key19": "mcKbByNd1E3x5821qDZmsD9HN4x2YrRcSVRn36RjpqbJhfvCvYqfTsZojZ6gdAP4nP7vVfgx98Q4g43kcSiANQz",
  "key20": "3yQ8ExeieyyKgYn4v63GLdYE4KDbVwxoH6scHMTnhWyBQKo3fkALqZfsxZ1rUdQRuwXAxs9LBsW1aNa18vExWxCN",
  "key21": "3PwQNNnnawQ8xCEvCPyFNwqgyXuAAKTKffLfuSZgxksEC22F5qL7LGNgxDUgDFzJVUZ5ReTXxnUfb9ZDp4KsreSc",
  "key22": "4boqnLQNxDx5EbRDTikNM4qcYNnscgD2BFqZVnuKWGzW9RBbG4rW6VHhw12q4J6yZGyCMLrNHAZN8kuwonnbMV23",
  "key23": "2yeggAStxtnTomPXSQdEDveDLxpenHRoXPuhkDDcEdqz24vMQ9CRLRiA3rGZ51X6SZRwjDNxc43UheyJxatumwP3",
  "key24": "4DMYtWeX2vpVbeA2MQAtxkrfDc8i6wqesrf8QgmgcvjKWJL8a18H27TQ1XNHp3rGikxDf3cUR9JkszR9tTJYuPFT",
  "key25": "54wmTXrB2yXQvZVgUq6DgooYy681ZS8fAVFme37jhbeuFbXiocQk4YmAaqJtrS3vJTLwofKkYpo3qti2uPua4Emt",
  "key26": "5DX6hQN4AVTRxYHwLSrDWMUdYjHodf3PMduQT4uYEQjhBDJCocCndHwyA8evaJ1ADKDViD67TPPEcNowW2HNiybW",
  "key27": "4bAbJzf7wzPsqG5rccXKWYAZTnPp7VrMitMqx3FnUECWM9VCUKGaBuLyk9TUNi1KfiLhN1CK87NF46Pmpbig5swR",
  "key28": "5Lt5iuNB7sagLBcmRZodvaWDjvX9auv15jhNjJ9T6mUFKFcvxa5ubXCuweqpK1oQzJJXhJcVPRqRFHmiQZ5r96Re"
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
