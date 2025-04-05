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
    "63AtTK7PgsnHp7jzKZKnSjidGSJVceoFjDoZcbgWB5cEAxMZs8bsUBtEFP34Va7RLss68eB75pLUk9eR3xxMUJjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwfXojsRGP2SCtsoAw2oyJZnrwfxQu268wR8V8PJRRL2FKz9PHGuWn4fNXAKKbFT3ktCs2rpPoziM1rZ9naUoCn",
  "key1": "4gUg3MGBkJDqCVsLgaCcZdzBs4RjSHwMuBzp8PosvYRTpSdoRwA8HfqujTjzHmW1KNzgowA8mY6ofsaxtifqjRZR",
  "key2": "2LzUF8uP3cNbA6msSFKCGgEa5nGRETSTsUUogDpHJvcnHfjUPs6yZFptjwhJk7rZDJwYu3MrJs62Xf3kmco8oym7",
  "key3": "21FgYy4KvQUCob5EAgkUrvrV4prxNr3zc5BhpUqgrsG46pBFvTJ3N5D6EPe2DXnKbr59EvcV1HmMfjJ54iQG9Mdy",
  "key4": "5Zc4pcHfe4ZQup9sbwmpSWfiQeudL937iibcoYNTd1Z1z4LMLTE3XznaFyCUnVaMBWjzyMnQABsyVekChujFF8rg",
  "key5": "4MQHbBCDFgDHejx32Wp34bkurmYNwpfSQtXUQAUb4JchLC7YSwWeLsMKn1BZe8jd1i4zym9A65vDrZ4ue3df8HLh",
  "key6": "e2MBiEaDKJyb8mQjvBrinqFrK4q3Aji4rFoQSar7neW6R8WnDQa1dsECKEXxGkW64ZRx2aHWecDLLtos9YZFMAq",
  "key7": "n8HMBpMx8j3dvVWzc8iSGCCgPByFitkCSynuxTGNXpoQdV5k3aZSpNjv3fyaRMH2eE775Qq8K2stAVGJVeP1zTB",
  "key8": "bG22taWvjBVV4vPWfBJwP53uXYzMuhqBMo1qWhXYEEjY7aBDGuR6pbZsTXR99hbkAxFmCJr4znJDKsyA73P7GPr",
  "key9": "23XfUW6Pk9F4e6wxGpsfHU1TeuVEEdLQigfcBEPLG5tKvxQ4sunmCb1FM2Adb1ygFFjL78TCYXSRuixPrxA8anWt",
  "key10": "54q8dKnDi2GMKmyt7i1JdEVfbmWibX6h5xfsTnrfq9ECnjXyJ3MkNhtYuMTP7Nmo66ea3BJZn6M3HmkEWQCU5SV2",
  "key11": "rtdRPrnZSxvKke7T6J1hCi3gsmxJ4ykUHX1jUBGKg1w4BThv8YM32eLwbjPwi8zQzwsdc7LLtYG69wwAcGixAqz",
  "key12": "2XPZ5aDSmfM4NeRrMTw6qz3fFuf6WwBVfyBWBNCjU6Bnw92sxMMmw3ZnGxQZv7ELBx3Pcm1Dvk771zEGG4eyy1VQ",
  "key13": "2uGAusYVW8xf74ewATqK8Mx3yrs3ZKJqivijDAHWCzVP3wY123Vx9ARvU1Ccmko5uJbsbS44faXDbcTi5b5okWkk",
  "key14": "Y1sJaAoaR7NQmNMYi6bMUf35AmBTB3cMUn8iQ11vb3R8Cv237Bv5MwmWCfybfXAoZ7fhkKjPZ43PptvoynNw1Ts",
  "key15": "444TwK8KULPwXTNekrWyS996BQCAfdmzGPee1u13xjfCLH1b6bNcAaivcSZqJFFgZe133SYpTPwaHtDmZMtojk4R",
  "key16": "2zmqVU4RrxR4jEtAGENPgYCJ2n4EGLmBaVLCgitAKSrPJkVW3S7wtZKHsBSDrLJvYtFwxXdmkC5YuCib8pvMjr1r",
  "key17": "4AiZZ5kVAxo4kVddVcfNtjmiuTDBRLunMobYkRTyJQKDzfA1BTRYJxAY7DHUX68UPfH32Qagixxq19SY57z9v9g3",
  "key18": "3sXUX6yHZNFgcqTMabLMB7n5TiesudowwGDjrfXM99zEuPzETHzFCy2R2CDAAYD3zk9U8zwj972tTuAW5fQnNF7o",
  "key19": "aTtmqxuserd4pdzEEjqxse9Q2vaYAnkHwsqpS7KXue9v42Mw4cu4bYcjU1b3avhAvfVuNja67Ja7w1uuna4CYey",
  "key20": "3pRYgPg3Lq6MLfjFETETY53w3EDjPvrpP4L55qQcAhj5wUzQysyqCCQ7Kn65fz4HbHuBCCMa2sGnbNZwi8uEddPq",
  "key21": "5QuHx992SxMQgSorVEkYtBzXpfUophqjTztjNj5Zm2sqiTB3ApfrXjcFr5Snqoox6GmNRjR59ng2GqrThxbQc5bq",
  "key22": "2wfU4M45ciNaEkFa2EuigM5k9wuz4wceZBerw748bfsijLPcRVTJJiu5J7NqVhDNdMp74PyEpD2MH5b8mKXwJozQ",
  "key23": "3Pu9VVZRMUhGzuZHCvqk8cMVZvQcYssxwtDHY7JWrjU59v1H3o3Rwtc1geMfWXbQKxxTVdznChQFZ16iETq8yLLy",
  "key24": "5uHpjjNbb4isBec7yWqwRFNwjyJp9RvSpnr1QmgvSXaavjXVCkrxvdDAPTaCdQBeNRY7ocTupUzRpXydWbkMrof4",
  "key25": "65s6xmpUgyiRW8RJCJk7taMregrmAugZ51xJf1urpkNozSLM4sor6zrXaxwnWMBiV9X2yqsFBcQxVCM5Mtz5BhtL",
  "key26": "5JKzXCUZ8TphYxQh5J7SDViSvcQX1keNtwesyBLFU715r1dQ1HTjvSjfRpUPPDgAmJ65a18DrUVxGN5nY9euGpp2",
  "key27": "65SSXJkD3vZcbyrwQ1s2DSD55g2ybGULgiUJ7c9RaaBhC6qzq6D6hSvdpkXYktysnDz31XRETTFnx5mpuJrWHGex",
  "key28": "4uKdpaL9rY2k9iu3yQKwKD3MRJu8YbG1D8Gxb4968ot78TdgfanFGMe93euiGqRKq4Q8gcwNmZfqL5sHuY5V8f9J"
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
