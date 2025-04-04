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
    "3SXqgn4KJwbotHoa18o2qpNgs9vNHGYmicwMQg4EMhzmvcmhbWwZcA86r7ueo4fX8Y1nmAH3vCa97Zw3CMtFH9Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gu2ubJi1YjYKkak9WNLZSj7fBbFm3E7GoDjkuH9bJ32aad9xwjzQzZkdVKQHGSdf1aLjYHh5eBWSZsEscPop9z7",
  "key1": "5k7bfzZwTfTdRa3DoGL21MXBPD6BDdx9P68tQwvmsE3fSskVUmJWv96fJLZckX1fF8YWY8dHxBvUeeFnwa2BKGKJ",
  "key2": "4kbWTpG2xPMRj1pD6Cxufph9AqBkMhXBx4CBrAVb2VCarMneqSGj1CUrgr4fKvFjgsNxvU5KZ2gjPVz3YrifhJBn",
  "key3": "3JeT4JoF7ZAi3yCmG9nAkNZPvAMGQBhCBwTyL91dKZzVmBom72fVVvTmdGSFq2x6ZsJvSamwDRfoWBP5VnY9Ymoi",
  "key4": "yuDpdbfetA3Uqv4zY1r22oqNg6re1YL4P3VrybYWF6NcdgGkrkSgYczUgh7Qd2CuArc2DgqDWFNQdReHdCrLwoZ",
  "key5": "3HRxCWPMoeAowtE64wCYHviZCjAZUetX28WX6r4Q8Jg2YgEEgXGGKcv7ZohVgFV5q1Tm6A2gY2zvtVbmyasfFnm4",
  "key6": "4HSek31UuXpcuW7HJBM9Td7KSNhHqEZ1r9bHNvHgKo6EbFJQYnekFMLYkewiMUrmzxmhThaDr4fQNbgwAC6QnVCs",
  "key7": "4LCd818HpAURUCcm1Bm9Xz9iiXRaqbf12ZV4dUG3hmAkfMr98UCQ2ULNqiFptrYnKqZ7FooPADjEZdC8UXFJojvV",
  "key8": "27LoBUJbrFKPjz1d1cZhhhxApYHHQf2fgSnwBPkBvPV7VD3LdpbkUZ9RcMY51aBRdC3nDnyox5UugtWPYtQoNGJz",
  "key9": "mTjjQRUaWW7N2ZZPLT2nsPk1awSSsRdsWWqKmv3Lbp5gnB3GMecr4DHJaHTPk2Qm9tEpkFz3yrb4Asdvaj6AAyG",
  "key10": "ekVEmFoHydffiZNpX7kDZD7QgYhF8kH7ECXm5tDBXQn8EnC8FemmwKLqpFUAkctuK15U453KKZdxwRCFVSzToeQ",
  "key11": "8Rop1jvcbXqnxeu7F97AHNr6D5GR3eyhE9og1quAEuuiSW4TdfTSss7vLrgBu5XgQitdPZeJ28LU71nq7p5T5pw",
  "key12": "5xyHEwNNN8p8UhfWuNrxykHZCL7JMhrowhDBBwaHsXtcoZGviVyzKVEoL4JveqFjWrgYZuV3YPVYFTrtkMfot9t7",
  "key13": "53rtP56skkKhUi5AZg2YgNutPKjqTuC8YAn7vxUGso4soEns7pna6LXWQDxZ9SHbaaWLrq6mLF4GLzvQ9BhANzbE",
  "key14": "5nJaSuf2HeowMCTaS5CU5fP1aHnhNddNKS29YLTySD7JtyWDNJFGeKbNhTaNxk3nqDE3t3dLLXjg4qc4jEPVsiWN",
  "key15": "WnPBiBn5TB29rS2PHLGuvCL4zDPzrDAph2J4S7dLccKmKnrib3PFT3sg7cqryDRHT2J19R9a7y8dyU2WFGWGruy",
  "key16": "4VyXwc6Lf8PzzVwCR1mATYqrGbb4qbfUnuWaP2aE3EeBcMajD7ShntzgzX6m274NJa5BN4xnx4sEAgace2pqbMTa",
  "key17": "22wpUhfvs3GNeyjcrxoHqTHSAJEuDNPMFohTLyWVThGuiDhJbG2umeCPLt2nheD6DUHZZy65LU6TtEouB3GqC2qq",
  "key18": "3GWiKd9Lzxotgx1g7EoiMfiFdcYty9Sn4cysoy5gjHjBQ3X5SQr7iLxt4QHbNBecMFtKXgua6eN5gJL59urJg41Q",
  "key19": "4G9xYGEUXomDexptzXLcese6xYc3cyfsRqwfWogJidA62QBcJuJD7HYTNz3gpNkCSYK4ZhGHMtxDt7pDqztsoiPK",
  "key20": "3m4UyyFDPVPF4pQyUskiu4Hab3HrScozsVjDtojAK652g2iVwGuMErmDL5FBMQAuBz6ZXo44Z4cujNNvuXn3ttHy",
  "key21": "2HeWQpAdU62LhLKv2rJGUnXwm8XJTmBY7py3gQKHcUTEBimHQ28kdpzAPQwgJHiuRGErXW5cJssAzFBba7kb2GZY",
  "key22": "3mGCi2iQvtXRCnAxbVLAoDpwggzgcHiEa8PMoKHpXHKzCtXeMCWrFKneihCJhTKHQTkDeCJuRuPJEp4ZZLC5V2xA",
  "key23": "61VtiX5p9LQUGGbV3WKzsmxAQkRj7zrSdVoZvU2NawadaTfAtURtnukhnWG7PzrAvTyouweU9vkvFjBewoSR9gGy",
  "key24": "UoxyRcN9PJAT4LnBmz4MH1CCsZtdwfZu6pMxkw6LhD9z3edmJBaS9qHWeQRkdV8tYVY319D3CFe1KUinZeDPM7W",
  "key25": "47efJkWYUdyWw2EEPyCrSvEMdUGBfXJnCs1dAswHgQrB7oWbxQs725waGnuZe6Di5wYZyKsdquVBagbp1fP8UWen",
  "key26": "3bJ3LNFd9VzX5FxfhR5FAhkdWBTuqaPYu4Rdg3ytjN4DEX1EauVraGSHEsaRRcbUHfbyRKX7QQfFE1q86Kc2kZRP",
  "key27": "5piGCzHqWNL8Ra7k5SofGp8yKH1LCKjHxZGnLGzg8UvZJSkbvGcXT5Kn1uX1rmuRtvFnBi4KQYKXsuy15Dp2wFor",
  "key28": "tzrqCZrWpYCw3ewfLdfVR8c2VSn4EhViyUt4pjTnrEDM3ACbckTyaL29uX8GnnCmmTwwnqLeko3AADttHE2fR66",
  "key29": "5hRZtAMedms3r4SrAjjhZr5duf5VsnG2xj7fX1KfruZt96hDNHLkHjsr4i1E9mBqsijWxQAtHo4BbZaUE7Z412Kn",
  "key30": "4E9Nrix3CBVPZpbvqmtkD4AsQAFuVkZFnjdWvjNscqNVR1NqYJV3DaVEnvNGKBSDFAv3AVzmB5aLGfsWhjt8hVUV",
  "key31": "FEy1QuwSYrZjYB6rgyppGHexiGvhAqBH8J4yeS6tiJAQPHXLFQDxJGBBnLqTZ6T3Pwn27e3FvH3k35aiSQn8f86",
  "key32": "2eLZysHF2k91kJoiFQbWmq4fxxPK7uFqDKU8u6z6ziQCF5YotRicexEG2BRiYmGLhAGHNAcYXEASfYiUNy1xHFzh",
  "key33": "4EFpoUbvyq1Beg3iGa9pea393tytXXpLX77sU174bxupGwyNrucD7NY5VMgVLCrDevcayWfzuvUkQPQWLdYYNxnt",
  "key34": "3uJSTuEhkhMd3dHHs83KDVKq281oABd1GAW2VbKfEG62Ut5wXLC7pxgAcSp1rrDX9h2dbjQduRPEabmfZpX4ELGw",
  "key35": "5f4DenzawNgSKuJs2PP6d4YBxVnfVjhmyVs3aN8mV35eViZrAotaxWqMtMkpoXUqnUN7uREdfy8fryvWL73peceH",
  "key36": "4oEaGUsCcuFprssdVPJugScJB467uYeTwg9MVQ21arAjHPGibsnms3PHqsg2etarLTmVgTzJVwhuurLeDp9sZ9UH",
  "key37": "2HTvCdGpkvhWfJtsnUqNEVomCHGwssrAdBxizqFmewu7vUnLnVXRhNEp3EgMwRiZ1SfLZD7UJ6isrmjmib5Eycm5",
  "key38": "eh5C3GXVSviEYQTUrqSR8bB5NnGsSkNH7mMbRX5JSNiScsABn2NM1niSVgWUYLWfe6EVmRrdRVLaWrstTTZNaez",
  "key39": "HQuPXo3G9ksspFDMEaMyAhkYZXPRk5Wkhu89ovT9ZVvxtRwdPnhwosrn7EB6jWJSw82WN9uufpn8Vu3pmovUbJS",
  "key40": "5CtcDsJRxGF9x7Fp3NZDqhtp3iA4G8fGZP1sZ8pR6gTJsVfwetQyZCYbjUuvJL6WfetZ3bZg1uJmPx5kuoUPYDRn",
  "key41": "3FMsHCe5ve6zdpx9Mh2pvUiPufc2R4sk3M2JcmwaCA5LYaufhRKK6Wh6i6fstsWQLLqHYbhd4zDMYVSGD7EtHRgD",
  "key42": "4BA8aaJQ5enx2rTnra6HuNoBJHtEjdwr1SqKuRgKRFq63t67Xogqs8wrx7gD3bBFeUasDdHtFKyHtQuuvJRdjRiw",
  "key43": "4zDiADHmHDUBqy1SE37SNnd4cz9iJzthqTpp6ucjKgQJJfW7MioCf1Wrb2QYgXsS4zHb68QYNWGHVtX73e4gctNK",
  "key44": "55en9EbSUY4gDghqWGvGShVDoipQySLrStWG6osH3ooeLgDo1yPd3yakfnt21xGk2M7NxyZf8i1wDhZP9RBp5jdX",
  "key45": "4LsGWCP2EYRPVjoZX5fcpyg3fbTe2hAJeJYNTVcZppX2LLdVNHFwdMAYvFywYGeTMMsyCVQprYykPnQjjhedsZJa",
  "key46": "WQrKeaufXApHF3FpAoA2G5qQY58Ubq62URNcF5hSNeRpMs8w8xc1y8yNza121PNgBNMaWqz9UcRjufk16XNyjtr",
  "key47": "jkxW16uo1Kjrqx5mVLrMGNSfU8k5BLBRz5zbHGUegF7By7ERqvv8gQUagwwPoEfJo2d2Jz5WoBMdhHQZ35nDX1i",
  "key48": "3UnLEZeJuT8yKS3Hy7NqAjHgAo2tGb9Z4ojEurmjBWQJ6SiZUiyVDKduLTKPPPnYXABGWwHguSs8Ld8P7ajiB48N"
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
