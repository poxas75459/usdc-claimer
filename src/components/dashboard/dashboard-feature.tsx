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
    "2x67qWBmiquD4s9yg5gqta6BNx5Xs6VXVkCunAa58f76UgALopqQQs2yB8L9bthRJ9XeHV8K9bcMaqD6RueN4Hcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8bzKhoTRRbQ52yk7dBDvHNFfBjMeobfbaLpdNavefwx3Qnou6HduG8MU5znkBjNok9JCaRTq5QqPtJ9SAUvZKa",
  "key1": "415XyahGmaxSVJ8Q5wALypp7QgQKhLAcQ1DhcfxnJRocPnEGjqL2VyyvzhDzofgA8tbvHRr9wE3Wz4oq4f3KePjE",
  "key2": "5k566e3CVaNLk4MN5733Gvx7SfMwug41ZtCFbdH3QYXmNQPmoUiYPAvLox8wTySVuRwmYnHhMauYfye9M65cppFL",
  "key3": "5AbbybWbK5KeBPtND6PSTZ5BVhgB11XkKSx2KXggnmz4ySSmLi46LfSoRoL4rxkqnoXZ69dZ8FBou1TGW6sXN2Nk",
  "key4": "3sKFbf4BFnFK5Vw4xswKw6kAi4bVAjP7aRrXR53SEVhXcvksE8eXLbapReEWyMctK6CFekxeTjhAPvbaswJ94gjd",
  "key5": "4VHeHdJKq1CG4Ey2dZu1AJCtCNTDqTPdTALZZgrnotYr2JCrtsjueDhYePbK4FCAV95QpbxJjJ1FzVkYuYQJtZbK",
  "key6": "3y3Bi5cBSD41yLkm4wbNLpksMCBZ1eZJxEMRBAU62ztRqxR6ZqrbhzA21ouu5TwowvP5LoCodP8E386NYid5Qpjj",
  "key7": "5zLckt3cYwPsYbtMYB1PdE6kwx8jhZr9yCzB2T6aBRPoQu2Vk8DxATZ8fWjdP33PGiSS68fZjTqNzpxungzHHeWE",
  "key8": "apVteyAjtJ1APp8tQcDWTMgWZHmHNQowVcNK1iS6dojGhDoJabfZ3x58abYDHYG97KUUAcULLpqbaDvBdGpXgkG",
  "key9": "GDUUbfattbgssDCKJcVn4AGDYyYQwgmsin4DqXFWue8sXwBxepGq9W6tTFKN3yfh29DCQ3HeHLGpgAphncQka1Z",
  "key10": "5w75TZeMWqg1ECMqQA1Cn2YrPeUuYPGVDKPCpnyKq3o6zWxkLwow39nmAGXychvJ71drQ7pDM3eS6dNAv8qE4FU1",
  "key11": "2GwfmEsKpU6T6J3qdNtLVyhwSZS15pykoZbVd8AoDmGMFFMYyu2UpHy2ASsqr6kE6MsVpFXaHo8HDEZtYMDzrdxo",
  "key12": "xkL8aVt7dJPKRy45hsmbvMDwCFL99dd66WQCoXNjmUuo6J1xRYmN3YFMZthZrcZBzXiTny3XK13LFu7HQQNmK6w",
  "key13": "4iu5mu7H9PfUeuTWoRmUqCm7ryYtowYkmkSj1QfHPSspMK7RBSQ6gaKbmZtmiBCfkBygJdqxtoNwQsfss1rtGx3u",
  "key14": "4WE8t64k7BotDnnyvzgbVBeQXPh7ohySnULiwo14pzh9p1a5MDdAQ77MVmVoB8schDH5qrxMFHFnYz2ZaayatQKs",
  "key15": "6572uzfyr7kWiaptu65aNJhHzhAPkfcwxXzep67bUtZyYTApoeWJBiURz5GCQzdadckXavqcux3HzYorb46xzGDx",
  "key16": "4AgTja2NtsddnNLWUnE6qeHbi63tfBTj9YdWskbsMx1B4JhrkxpQbEDhfnUH27k3frxwY5MCU5fxNnXHFLLYZ9hD",
  "key17": "3YXuWgMmS8GDxbT2i7AAhQnyXNjXNZ9dypnRcCYnZ2s9P3GkJU2n76eujpGYkfnwyaij8BTSfVugD5sxEvSvV7mL",
  "key18": "2uxmmZu5SsUrVGj8zf5uHhGA21UfuxMwYT1RsTndYy8ezXD4su4BAPPVjKeMR62bzH3C7cW3a93NMT7Bs5uD52Vh",
  "key19": "2VWTNo1sewztMK6owiCwcAhybtYpZbETtSJXoATLHrqMCqoqopa86juNiV6crDNeYfGSFNG8er8JGD3asGGUMB49",
  "key20": "45zWcgNHgpS192chqqcz5S8YwMCR8GrGceVCSvnHrUGV7TduaLLRz9hA7cCQ1jHxX3A4LEtS1xMXqkSHjtmUfp7C",
  "key21": "4nRCp9x9CkFdkiXfft6d7CDW7FiMjxg437NMZrtTGbSAUAzcwv11wBzvRYLbELwUfyDSJB5dgvjNjkV8xN3zc1bS",
  "key22": "2WciqKmm6V9Ew1wPNrL7CsGDpAmyV2o5yFjqJZznwLAbvMLozS6nj9twyroUjmgoPdnDFMZBuU6ymis7WuhH5R2t",
  "key23": "5dpXRjjFFiYpLujD9u8sUToi6Rdw37nKgq8CQ5LShCUcLCJEF8LwuY2ajJbYdoSzWsiAK7kNBJCVkCp5uzkXViu6",
  "key24": "4oP4kiHaQEgPFXJFtRFDkLvNEPtmCBze9CxEV96NLVd5tbrYmohTi7fcJhScWHX9we7QdFpVefhZDsts1KZ7aUCT",
  "key25": "5TsEdLTuGBeqJgvbCBVg6k8uWvGDA9KyuZzcja1h8eMcx37Ds65QbJEFaVR5yinX12i5S1s3hVq7K4puoY5WdR5J",
  "key26": "4R7tEqKxFuuPtrniXa8HwBSJRozAsEyaeNBgHRPy2iwz4nNU7XQ6adEwH9XKH7WfgufsKBoi9yFPUoDpAVVNGRPp",
  "key27": "2yz8hzAf74zH5uttK1F1rZVRN8ap9LvjY8hHBPGxbKQkrhKrHQ5aXss5J89FquYukeRuekJeCHDVbaeewiuVWsMN",
  "key28": "2vQrXHJLDA2prjWhM4yNr8gU9zpCi1yqHhH75tBNABAhoofCjapb1LxVBptT1aPDj1QL3vZswKwqRCRA124DPfwo",
  "key29": "jXNjxLM2vxcKGLWkXbYWoqLygQrMbw3DDwRapGWs3c2dXXB8qNZksjMCJJuU8ZHpJiWwebiTrHJbQsxA1MyCm67",
  "key30": "RVhhuuyzvyQibu69G6NT1d1Jfz8hwhEJZeVwVrFLheJCDiXp5HgWT28EnAU7qm7Z1FYBDMrRNtU7ULF1RWhXMKa",
  "key31": "2eXT8zf4JtA29p7j4EsSi7Z9TRbiUG34orpEbbcGaupGA9qXFDgfJB7afzeeeqVMaXeCCpJEUgbLBFHgnPsMcE9Q",
  "key32": "21EPaViqhFe3nR1B9JxTYazqhUEwV4h6kRBN4pTG2FX9REAeZXNvRLoT4bRAhb4MXJsJqgJs5CKYNS4hd775XjjC",
  "key33": "qrZUxYrUHp7NPBaYUdjCuWzmA8GE5mzASa2yGUT7gFwqgseh4XXGR8btz38z8Jt7YxDSYjySgifet2ifsWZizDe",
  "key34": "2TLCmEjmZm5rHGTBHTy5Nf8unLRYS4JZJXcZdZRiv8Z37KvVjCE9VgenJbk6RVBwDEZmFzBjUV15rshad1UbEM6j",
  "key35": "YGG9e1fontp6sw5fQeWmBHcGPRvBCfEeLBsSUuuDa3GDMWtCtejuh6Jzg6kVmTx2kTno3p1J2KYiDC7eau3FA8R",
  "key36": "3ZQAtRFGTbsaQhpzPYHRiCeY2JtN6Unm2WukLqL59jq6oeaQ6FYnsuGJGqWkSt3yHqF2eEFsxxUNAWwo8aTvMdSw",
  "key37": "SCYdbx6fgKXi5qQNnNZKGaq3srYvc6M5mL9n6M2wxgHF1GU7rPCuHMnSXSbrQDLY2YUhrz8iqDt9hPJfyeXDt7H",
  "key38": "3YYJCuXPTnbEYhVEWymTAxDZTN4gPdjNiDnyNUaKTabUCs5NCbARtNVe8X6uGWA1fy7x1nK2LUbc74sUeiS81Gig",
  "key39": "4dYHLxcQixkTHWH64YDciFQzTtzBpgbm3pax9cVPM5Uj1y7CcEyRh1ZuMmXffb5yuVvk8942VdUh3DrAp7EShZjY",
  "key40": "znp4rAMKc3QoogzHrgT5fhB5p2tAnbUGhzC8mmEXzg6MCS7DTVNEWjXjBUycQ51c9EQASTh5Ca5fWeNbX4S6wxq",
  "key41": "3v1EGmp6FEHy3vy5A4CZaFgZcM2Nva6CqYQPAJMXyKU98WrkvzuUNumkzX6dPaHXQF6nRLT2dRWp5YhNWCgDSQjA",
  "key42": "w5UkNc3Kp8eDa6V6YunfubzBuwZVvytcKGQt1LpZ9epUc492EqsQjyr9csdTXeUEVZq5tZCqdz184izQLXhHM32"
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
