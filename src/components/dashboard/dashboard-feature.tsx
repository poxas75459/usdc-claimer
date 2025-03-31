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
    "4fzBZWmA4ZKuhu3eEHAMuqpznRQKcM1FAutLpg8vf1xopvHcesuV1yX47k2Ni2gntum7aNWtAdnighMfkzTDR1pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fuea4Hoc1eip3MtZ1eo7CPHmHewpMzRyB9AZowEyGyf6Hg4ipYNjfq9fvKbCxi8WwWYd7DRdG3TD7wt7Dd8VpTN",
  "key1": "25GvPUCWFF9gcvAc5JZbDpBvfjQQS6xmY9soNn1puXepVqnJT9mwcGh21YtHhPVkaUwjYGdE6RBtVgTKr3PLXWzu",
  "key2": "4t2uLJAZ8cHvERGJGfJnvLAxXnDqmrunoP4R7sGiwnkN4jGdh2B5yEX2tY3XexGWfe5sxp3Pau1hrANcBEg3VFo7",
  "key3": "jSSa4cjfKjRbQfBZVfHierrZ9xvyxNRFhdyb9pXa15aG8Wkf6omzf3CnJUzBzkwcH45qzq1ZvsKkWsjonU8va8a",
  "key4": "5MMbRK7s9tR1nFrVCrL6ZJw63RMS9MivRYethCN3vsqmvYQDe3EojM18nckwB8v8FgU5xnPNe8Ku5F7pu8y27GB3",
  "key5": "3sVXSnQozoZMuLtB4pJTXewNY1679LS8QVeXMQzWBfUsMZtS9uMCsRj1VLAjRDEYmn4itNZVqbnKdPMYBAmSSAms",
  "key6": "3otsAULHaAFdKyxXeWWRVtc1qYvqoTRESmQdgobyg9TJgGJZuNMU6xM6CtFyQQ86U7qBHkLWtaUiBfwZBPvwfd4T",
  "key7": "51imcx65WaGHwHDJ2jQWJccyT5fVt3LgsUHuDhrWL87SE4GgpYTQNXzv92j7qXV5hHrSjvuC7K9gYCHEufS8ndJK",
  "key8": "1mTDJZpe3DWrLf6cLbkpRxhUKePjvvCc5iWVQBUbvQHvwQHMJJbkdDvcDmGTQDgrkY7vdjhNrfQjHbUzfr2rFWc",
  "key9": "hiFywpoYSiZpY5XbVvziXBWnaV8AiQMViZ3wyLUmqAtNW8Do3HdLcbEUktKcNVMjR4jvQbXK5ACT3ABSixbKecF",
  "key10": "7vycraARM7fmm88e6ZHG1Yc3ywHXPAzXMNpzHAKYU6SDa9Ug2m59NaYFW3pVXbff9GrGGSiVM6eeErZHMDAn39a",
  "key11": "JLzgGsz4aoFpXCwXdw53nKSXhU9rKGRMFf9WLBh5RsgWd8xyZRDi1FEzXXwJUpKPCKSaEyugDqZMFkrzG1C3R4L",
  "key12": "31ovf6wCPJcKPhnz4imYRLyd5YvesrP6nmabezXhQwf3GxUiAyr5hVgRcMoakCvWRTPbJjWeCKZUGjRpgQGQ5ViJ",
  "key13": "5BLxu5Pwqk1ADagwbkm7YbnCXnXBPSesFXmQiMeHSaWX9oF7UpuAJmPwNR9ycR4ydMoaMaoAo5Ms2qr5gLeAPiU5",
  "key14": "2gDYm2RYM55mPPkLCUyK3jyLTKqDR9tvPCG7JJC1WsWRZCRyEMnjWBhkWSH3Qnc575qm5nzARwZLW9uRQ946K9fA",
  "key15": "4Z2aAxEUWVZoVGcvRNAAET5SPmgVtU33jMxBUxzRTVMLW6pmoeEQjJK4zj2xVTJPV93gvMwiUGTagWHXiS2Mb1J4",
  "key16": "3AiurD2ymw7DuozMy6MpBuEVQtH1pzoAo2FxY4DRxxzFDZZ7MNFMWbMuz4HHXWQWR1XBpweVaeLQebWTbJrs51yj",
  "key17": "iP6yXPaWAe8iPHS3efhbyBYTQJ1ArtSdyHqkmsegMNxvcQ7ByrBaS3iS9FHjTdG3V93XbUfQ2NtoupJcHRSG87f",
  "key18": "4wC4RiCVvFSbREv6Nob3xRr6uG24WwB13M1Nr3b4b2NEAUmo1V6gRrtbg8N5jrWyMKzA26qvWJQnH8emYNa3rqjJ",
  "key19": "L5RNfuhVjHwMWZFhY2Cy8JDDux5XkEcaFqFTEpsD526uhsBneMUNfbTWo19GMMSQNwLRwdLWUyxVRqeLioZMB1C",
  "key20": "55EcsNrxCPF6hhrvyYkwmDJoVFwLegAQaHNYULoSUzTfrXQhc3hhKkkijJMqsragD1MUt12VPhdUwkA5h62LQLEa",
  "key21": "61A1umZfjBbgmmQQCCjrgHJVyY289FcEpiZvb2nt59Jqf4iC41gcw3i5zqMoYhTefKcrfd2EUzN1TZS7uMdhTEiw",
  "key22": "2FGuq4Yd3569hN5w9qh5ySprhmAKvEYRDhp7LvoYyR8PDGCqRnj9722KHZHdQcmctKxAT642JyopjeMQu1SogtkX",
  "key23": "2sKYiJHRJCkSHG2125XtkyFtBPZ2HyWEWL1wNMqLBnYvadRBbMeQZSotNN48Cv1QDdvWcYHWWbE5ckjVCAze78Vv",
  "key24": "4fzAwmdaSFk3tA25mLEPAY5ZHF2WX9pBHWMast5fGqMsVyehtnHXnS67Vm9xh78rFPFZPYJnxAcrbsDsaVryL555"
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
