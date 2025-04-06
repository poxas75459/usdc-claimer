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
    "5TZCtekjAcdWTkCme47g5JXdJFhQtZodPojmmQSuTfYfiLGPeyUMbg3kYMJ3qqPEKPnL3wH4i1MLDJE7bc1F3Suu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdrQmH9oEj8LjqB8pDWfPqNiD6JbBfv1dinyre4b2HZW9HLt1ed7AWwMzKN9ZDhAGsPWLh25K2pG3fMoM1DfsnY",
  "key1": "3hLxrNfmTKYW1AmRESq5nwqrQ8yDAeuLJZUDugPujZCfTdHUeGcsBJvLK6e1oBi5vvA4zoyLYUPZGBtS7YshmoJH",
  "key2": "d1K4JqaAJXCM4mafLiFi6Ss7M4CeDfvPruJnN8j1CvisKj4nkthJ2cjxFAkpKnsugPpUryknT3tyXvqCLnCvjYD",
  "key3": "2EMCymfv5hCq7oFXf1665k4Gp2iSqjs2ayoKRVbFsnnKoATA82LVCG9N4duUFCaGa6ebshgXCsoJUpREguhzESYu",
  "key4": "5sji74MpnEkRZ7jMG1WHJWeBmCDZ4H7KGh4FwfdSm3BsUX8w57avMx7nQxELUcuRNyj3zYMD8cD5ZXKrrTiTubwt",
  "key5": "54skJg3WhxWgXygzJxk6AaMosQyzvU6AxzrtTbAiEKrLz5HwXpwUUydsrzczrF4T25Hifviv89ngaf9N7pDGpDDH",
  "key6": "2Ns65P72rVDnNK67DAztvBW4dUAFQ5cjg3RSCbq8LngBx6NZHqMeVCsxKrwX7rZTBDEi8qvEhxrxATYCWwMCHyPa",
  "key7": "JZQjCupRDAPkgeobS6BkUKrx4LHjFcwwKpemEvcqEFjNwFVCovyTBteUfNVTTCTJMfDy8avHVAiZMRjmpaQ2kqH",
  "key8": "2Lf83ARWuofpmR6kVj8pkQmdAMgUFtYtFW7x6SaPaQsFRaG2yk4RjbVBVwFkG1f33ydjxX7uBtRMgw9qc88jr7L2",
  "key9": "5tzSb1zRhP324nT6icPJuyR9wzKrPqGBQNkP25rRhJq3ztLtkYZQNs3wpB3UXZwLRZzrNZtYU2NDPKLmepTXy8Mh",
  "key10": "2dDZZzdQE9HSTUYNWKNCKy7uEPFfxqiKLNyrUCWQ4wCoo7RwU8wFDCgeAPuFXkNV5QUJusG2cehLXhfQBZUJLmPZ",
  "key11": "QCnYdMCGoycqVrRHfQ6eDs71aVd6USMgcDFGkKczpsU3GCVGCKzZCFHsWsQ83FN4QmTpioExDFcWEKWFgwWwuC1",
  "key12": "5b1RK6JfboVxGxTAPgT8DACf4YBNZR3WxbGsYshbwbvbNZ4nwQgPujriZJAe3hwAVkYgWbW3iRmcCd8sNjLhw9di",
  "key13": "4pzq7z9X7TpaCA7kQ15N4bi7cbZ5MB2Cad5gj4nU6dZnqfvDSswP6ZYs8BKf2a3WWdwcQMU3jvPLP82dwBxd8wsk",
  "key14": "5YEgqcAzfQXfY7L6SXaTBovPaViDQAvDCV4qpPbfeauTa3hx9nt7Qwzxt5ohc9WdW9bYhReZasPPLbBrLcC8vvCt",
  "key15": "3bqv2zhZvRNA2MpiaiCaRS3LT8BSFjMypvP7uFnVBM9bnp4iV6m6ppsoAm2KDHgvofXwdVSzXn22THrpYiGQ7x9k",
  "key16": "4gnowBYkv9jDZZDygDMGCNjpDGSVfmVivpGXneKi5yuLddbdWTvJRwWBS4UeaKu19QAEVEE7xjHrokohmmVK4Mzd",
  "key17": "3RJDEpjwF9PqCrFUQku9ktCuCBDinUfpQNjPScY5kY97yZudxUC7piLRPiuG8emTjw4y7JEty4HKeDA1ar4aXXBq",
  "key18": "5UWSjyy6dPfaPKqvswSaMSAbFeTnYDPNTAeWjuwDPdqzy7tTz53bXL1yUUFDTtmKpqCATWq7t5NmckeB3CsDbaYW",
  "key19": "2kHaoeY8EcF9DNKZnyevXtUDuwsbbX61A3sr5QeNvaTkUvpiCGkxoXxfQ1pYieYi78XLXjqigJQUJ6rYEGibvb5i",
  "key20": "2vwEKzgkYKd4968nGXaxDvM4EmnZbZPLihJvquLKccMjCTzJUiaGubKno6BAZq427x2fm4TpM82xPCygiBWihr6X",
  "key21": "266zf1uA4PSE5WPVrHB7C9FBpqNv6iuowfqrPWsdhaa4ATbhaW1LxfxSxamJbysMHuDVY9wiYfebqYKmEGELPWdg",
  "key22": "5nBSvc3yqifrCGCfVzXvTuCKF1i4pwF55WLhoM3Bc1CYQpgtZLkwxC1Jsu7uJpTKZ3RHpZEHs4wp82fum6xR8N9Y",
  "key23": "2vFrKsCkiXwag2m6g5y4jV65fkXwcPS9nftDLgqbsxVJZJ9wUCXwcP6zBPRw7Gk5PjhwwsZXRhEoLNUd9kKTsLqY",
  "key24": "3EEBLQ1CaRdmvsnz3AnRoFhFdCyGHnEMTELqdj11LyVnw9GV1Fss29skLGjm7k7aXqPjG1B2drkDgXiLDYBCoZqz",
  "key25": "5JZaDnCKN53K1ndrbe9LkpS2xYi1bKbQR6zzeqPSV5fYTyby1GxeevrYBi2DHJK1eD5EXAYMoHusus1fgDrM6NgE",
  "key26": "4bCZFzqg52a2Jb58e4Z75P2ni8gQ9kYUmTQcdL3f3QH4ihJ3y68rDdUZy2mwp39ggQLue9uX4kPW37YSTGkZMwQY",
  "key27": "ALrQCtpq8wuc7eRSkkCJnXm4LPXnW8NdmDcjaaAphWPywbkQyENvJVgqsa31bbCgzaN588D9csAb9s7Uu8thuMv",
  "key28": "5uWAphihVQihsnuuuLHBoJK1JweA4NGJErtbdoNN3jaHTJhekRHR4jPWPwgaU3FJRtJRExfTLAqBoREvyC8ZnWJT",
  "key29": "4wLqmPRspFj2YXrwdwuchwVM2rwHi6cFNq9m5icZ8kmHrMXkBP5XrtEcuurr6nYL9LzBhg8sk8SBDAQDDiR6fPdH",
  "key30": "aBVKHFX2vawzz8jNRThizveCj8cCjKhwnPNBHmrtHs5fJX5oPdWH6xZbbCqeyNacqPaYadyGEpAWqtjWU8T6Hx4",
  "key31": "26tsTwe2X5XRc6XLrVkBwfycjj1B9cQ6GVT3Cr5K3jGU8jDDViv5GctsjpQPoVzBkc5ABqHY8QuuDqeFvY8Ttj4t"
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
