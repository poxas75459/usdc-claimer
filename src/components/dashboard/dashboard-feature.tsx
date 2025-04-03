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
    "64LuvU92EsCgtAHDT1sDkMpTFRqyHN9xracrnQHUr5vomzbF8zoEWQEz47bVusrDCUNxr4fJ2Q7e9puk1tHLpJip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pqnu8MiVKrWkFZVsdmxBQeF1YiyVV5gJ8PxowgXFgXHFQotkV1Sacd9JTTeydkjKBDtx7SZ6GU5zCEsyG3eU2aB",
  "key1": "eDm2FCLGrPNnYmznWrrBE3eSumYY8QybSP3Zr2QPo9pVPo125obpZyrQ9tHcmMjdsVnYCa38LPFqWHnZ1bBKXTa",
  "key2": "m174WoHUtR9a3qxBvbHGFQZjfWRZSeDatsYrXWd8RcAkWdcEWme4f59R5hnkV39YHZ9sFVSZn8pwKMrEJmEn5si",
  "key3": "ezX9EiuLpRjbv4QL2GzDWVyVdVxFZDzZPFByGMQZiYRC1oLKJoyFUTQdTV99VYWzKczaMT3VNgtf77m8kispEBe",
  "key4": "41i9ceWwTA9xQLvZEAPVVDdnregeKfhGEBozgrirJ6ma9AYBbdBpwuZ1eSe6Tn1Y2UH9SvTnuktVnSsx3GwpkCKA",
  "key5": "3CnBuuwAeG83HGBQaPae6uBX58TsK4XNYogoHGnZmp2pjfhoiHNuFFEbn1QbrezEf8RZfXA349Lam4JLorSVvzz3",
  "key6": "3Xh8mCSwypWWiramwLH1WtVrfG2f8vsNHkuHkysLoaY8GGmyqx3qmxXaQFMBTutEtbD7oN1cTi5WRDe13q7MCayA",
  "key7": "4CvHFzhCJSkTPCi89LRNwv8tZNHfKc4pW4TdPbASDDBd6nwdrTKoVscLfD2z5AaMPDm58Cek43j18wf42nituwac",
  "key8": "5Shh79nnRGnHnMaquif6MYhQCPTCdjjaNPHuseZ6gG7uoqcYhPERncjvrCXyEHifw3Cvbx7gykJwvMmjqahzRDUZ",
  "key9": "11D8msqQbC7Rad4p2xngcNWFGvN4LrwmM81wbPSMbVcq1CCDXfDy28mhkB9EadwoYbt5a4qKqrbwWnatDV6k7sJ",
  "key10": "DBXZYbyTyEMmpmpsrHQZrp4EFraGjQYLSS92Zck8a8iya6bvPb6SYfN29gKQUYQwMgaUC3nNYSqESUWaBAmzHU9",
  "key11": "2Vs9TpFktvAQCxTdCLdATDwJQ1u6ZGQFEFNijEJqPGpn4DoPWWJvgjJXZKjBwLnCLtUBqvQ6pMNyHh7vXoRmZUqa",
  "key12": "2HFVSVPmk82rEd8bdzeVt9CAeYzXPMkfyv7UTQZ9u29bZdozhuzUBQ4BgiLYe3bB4LhonDw1hN5MZxb3WRiDHCPD",
  "key13": "4UZDdBGvqxACzMQykvGSQUbn5cKabBEqTKR5vV8jQsRXAFEt8teuok1DAQcR9PtmJEjmcL5KYWQhLcn7Qmpa8CX5",
  "key14": "4PEa2x7VoVrU3KphbUsVQ2rM5xU8HjLkWMDnSVMFEMvfNjSXtzmVniT7c7gEEbWrL67JYVxcYX6gJeyFicehq9XJ",
  "key15": "4yP6hpqyEFfbFNpVgKcpXao1TV1zTTZmdjSzoysrLuD579iFVdTw19hF1W4sxQbPpoZTvFYUuZhq4dGokAFJftR2",
  "key16": "4qoYJLBs4r8kfr3sYQMpeZcMGxaY5L7VMgcVX488uQkvKGErGMRjaqyUEbYaKpjJbGiGEwKdP5zDmAgtR3yzjfvk",
  "key17": "3n5vi24whPqTZjEVGASEbsnDMkf97TtqbiKPwyPCyaXq9eTrfUhJR9EsfbAn8YoiKst6uGBhtY5fmHLeyeZfLH97",
  "key18": "37VLzPosSo81T992SZL2hz2YybCU6kFHxXPTMkneuNpeq47uY8LLsDGcddpQJuXy3Bjbyr94i5Kbtv9raLGQtBvv",
  "key19": "dWXhgexzNQr94GJFXLdcEhCPaZXrQtGoTeADhxGpx4uVXA1Jxe61aPiLu1cXLuqpSrZDcCuxvE4EKzvUcSfFy5F",
  "key20": "5i4NXk9TggFXP4LURzekW1HAvwCB9bdS5popY1XtrwgJqvDwooC7NihghhtGDVVhCc4gdTcbYTG2B4zfGeCxGuuy",
  "key21": "5HiQH2DBQK9g1YNr17qwcchX5xrfK94rBVW8SBgVSDSbKdfwqF9PeCEUGBpnSjZN9D6dRu9kZAadcHBoLmmBPEG2",
  "key22": "f3JxuEDzXRJMZ7W4g2SFFQbhwsuxssKxCgBETLYVevL7VJfvpmoJSRza4vKZ5XPt7qMXwXaTVWb9UPRdTqCeiQM",
  "key23": "3BgWn6zKExFnGGxi9ppzJyeRzwZfC5WvWaq12mfaYb7BaxZp6n6VBhTsV1yME2gfnajaKjjNyFaUnLfvA2abFjPx",
  "key24": "4vLaPdMHe7RR3BHVKn76XpiiApr1UzgVnVdqVYfCmk7pd3Xudqf4tzy2AXsxVUE763WK51fEqHJbCYXv3yf2t6PV",
  "key25": "5Km43QMidot6iyqqWJEqncYJKoB5cGuuDXrEpyuRkLJUTESK5Suk9zfZ8oRxFDxZVcizSEnPgfVqspQD7D7eeBuZ",
  "key26": "MND67QGkgiLfeaEfk6BSRj58f6htw3e5TuFQCtHcopV678Bgw4ZEoCyL91Je1SaiqHWUj7PZaBg66GQTcDy4Jgd"
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
