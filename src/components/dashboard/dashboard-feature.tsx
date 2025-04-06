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
    "PucTAHTnwjCakq3ft2VP2rj7EJvWFtMYrxZXjBb33viAmU5y58PcBDo6Dkd3jvqmiQv1ojeRTEpWwvxqTUcS37N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sE6Wj9MJe8K9G4qa9hQjr88S2CTVXKHy4EQ9WBcsp5cwS2541PMqZt1RJrnRsvkFG7XytvMQpfP3izjHZ1UzXb",
  "key1": "2sDWkU51zmR2CLSdiigvzf6Vy1iUK4ymkjMcCG19kW15a6VAPjzPvNCMpcwqZTEaPWjsELm4RZ87WkSErtVmYHV8",
  "key2": "4KmC38RNNRgLjC2ko629eSMmjST274fbV3eJxUHk7h4S158Zcm8ZAGrqXw3N9mpc2qBieL51Ho4oPfkqKGKW6uhk",
  "key3": "4ffdQnXX74t5jPEG46MrGUNQJ5M1Koe1A2mNhgzFAoJgdghNXc61vgHtx8Rajr3Gr53W7y4a8ySXtqQbtRV8Hoco",
  "key4": "2WaLStYR5dF9zz1KTaARp11FvMyaWVMhAirAdxLLf4Krr8HgJrU77MjuuD8XCVe37piXZSbFgsvYPQGNWnJNXEJM",
  "key5": "5nA25WArY7hYL2t5YomjnQMCevHn1DZtomh5Sk8Cxq3mzMgcpemgL1qMuSyc1YeTDytACYCzbxGt68cf2xhErMUQ",
  "key6": "4qS9MzivxVgVUaScAQEfyGUcocUB8CxzkHDbZD9DWkuBmggt63BSWv2RkA85i36YJWkQtvKqVjqivPQwUHt96VVD",
  "key7": "9q6KGkwN635sm7rtiQdn2EyATzC1zTB6vQTT3uZeHhsCG1aQy1J5aH1SDt8scWU1FFyoeUe5UiEJSuLpTMrAqeL",
  "key8": "4fYAiSDfXDmaLRWV8gFBePR2zSq5SNqhLf8kraKV93WMrv1xmDW7DYspjkFWkS8rcughPr3GsJQxdiU9TJeHis1t",
  "key9": "CVFY4SX79Wb1xLPH8NSgczrqkL1t3wsbojZ5VbAxF4EYvemQScuzmXKi9qJDVrhRMSPa3kdzuukFdENcfBtJrAR",
  "key10": "5FMXwDBUz3zUD47KPEFxfWUSHgAt4srZKKDd7uCiPw4ezgF9QrBAc3XLd13PCiE4DjKi796jcojwj5Rg5cPAAaM2",
  "key11": "5uuyYMEby4oTKdhKdKYkyuzejNgHQ6gKJf15hX4FgrTsLySCbFNPLMM1gYKMMxw14V7duKb7zdZufnovxGPA56si",
  "key12": "2yRangEc5XRSGpKvqpb1CJw9dVrD7XF6aoDXaVFbcBjPMa1YBTKpRSuEYQng6TmQoRM7k6DZLQuiquusZVQE3JNJ",
  "key13": "5QNUCTP5vzfDRqW8MNvkwY8M8vc1uksAoNvZzP8zFr2poywH4gReAoNRwHrPMb8EowGMDVQo1UKskfdQu7EbzgJu",
  "key14": "zVL2bskUUgNWsB6z6zqdXyNGEcH9qNiHSjFe9Kz5WQJgNPLZvq7W9XKHPsAKa6LBurJFtxWJsz7X75Vm1cBxVKB",
  "key15": "55kiZSfyxNrCZWsWQS92EztFZc8kxEAxd95H3tnhTgs6o5XnCWto55QGY6XhKecgvMJJVwr41RUHzrn8fr8TZXd7",
  "key16": "345SfBJjyC2AxTrdzUMk6QKdyyFs3mn8ae52xa5meJakt7MqT9eEF7s18WfcdE1mRwKKpm27iiAHt22i7GUiiAu9",
  "key17": "jfYmE5mn1dwXBVcD1XQ7XVUpMC1YRxzsFaRXXA453ZaWeJjcHraZ4Q7vpsyoXHdV5SjhHYPGP3GmRkkGAuCqCNT",
  "key18": "2Po1ve6z5RWEYWz6xQAiRyGxxBvt4LSS3MTW87NsbXyWbxZgve5VkTGEq6qCd3hTuqLQsV33PaoW6oQ3xkcimXyT",
  "key19": "JFMWwYx1sJs828MTPZ2HmkdXcejXaZnDmdgNEd3258n76BaoGt9bgJVKjPqZVJD29fYYbg5jgfcHDK9U8QKrVo9",
  "key20": "2ghQxuy7QcDKiDw5EHGwE2ASaHpjgG3pXQ9TSeriLDBFTXdyqDSJHioMNH35SRP7sY397jk3WUUD3jwC3PjiT5un",
  "key21": "23aU4TVWMDbfMTPtojpwfSaEpC4qvywsBFtDfy1d8wXGpWJ9oahGhuptTahNDRqR89MKt7e8DrxpQH9Ek1k9KyXb",
  "key22": "5qGU7eTda5U2gSTDrebYgGaTmpTVzQSnyuBFp3vDMP5epDzAp2SsaK8NNba7SncAWjXghh7cgeNXcDWt4GajPCj3",
  "key23": "3CNQyEVj7Wvr2ugkbx4ySNtMCMtM2T4E68vBf4TKyYHKaB5fLmKu6ZMBbaDrYjZ6Xu9xEcyH47zuPHhsTfLbd6SF",
  "key24": "65goVeEQnufWEHYV9qGh34BTXH8yhtWLLsBJSGmZMvM55QbTzG2Gkhv6iJBHxQLA14WR4o8Sn4otuCbSduUyfC92",
  "key25": "2i9K3QHUJDavz3xWySkpbw5Y9tcnGdUVsuo52YKeoGKib91CN4ZMizzxEQwDbM8Lmem6QzZzP6QDaxHWVsPfmAJJ"
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
