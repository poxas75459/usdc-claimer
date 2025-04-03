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
    "4oAhN9Kgek9FzgYn3shkwrBaufFziNdbNqhaojZAMurKtDoumi5CHmg6s5rxt8WioDqH9rdJ4vKGnHW7HNye6grx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCCEL72fth6pxSsqgkLdHG59ykBL6tsE22n9L7NHHfdjfRzvCUogxeG4aP3UX4ZzSeDMWbbf9wwZPkHK8XHZ9Sp",
  "key1": "2mZq9VYaAv13VEKHBHqYq1vfvWxP5ZY8w8A3nYyc3rPHWHjAhGR6L3SY4SGPCMvaGUXCJ3ztDGsay72UfygGb6qp",
  "key2": "3cRb9kg6bjGQpwJ8wkWHR2ML9MK2m8MUpLdarhAST2JyDqhpdAXbM1dTC5eTqZR9EX3JdhBaicqWdCdFaVj417UN",
  "key3": "3CwBnAMtzYrg6HZnqcAqCcxVqLKquju6EtuT4HVhSPsY4uNFZQFpEYbfgpKgCyxJdPTHjSH8qRFc6DDkkEMmRMdj",
  "key4": "2wSjigsxxva53dMHmS5VZDZPjNLc3H9Y3RYw2TX19ZsoR7FrrHEtxbQuzqcFA1AcfaByJtmFAbKMSHF5HtyG6zco",
  "key5": "Q2P1vW1f1vwKT4iaoy571v6xuYF2X8nL34QqRFw9hf1LdoMc5qgkM6bNMNYmXmckSLGbtE7jYu6zvVkdHFy2DTn",
  "key6": "4rCiCZNz88TBAsbyyshEeveBhjhEmHXLrcmbNskErvoe1ayd6UZn6Pyq194cCvweehkh6r3csN1rTy5KpJWdpKtN",
  "key7": "4DnLvQjEegaJE94hCuM4hUXB1oXxkWrrPKXBq4WFcdCJgja3xCVx4XVBMhrwdoMnhTfhiUANM82aEr7Ad6vwcV8y",
  "key8": "5fVanKcxy4HWvnwwHdrHxPLQHFQ5Yue5jH8d3GcdLo4SSSJK9g3Gcawkcqfa5hhBU6KLFk3bbPkR3rFCL5FEDtMU",
  "key9": "5B9efKyW2DUxfL5ZGd15a55a2sYufJxzrK7FUHM8aohAG5U5vMUH7YAPgsNW9DmHFnsgmpB1y7pJRim1QWypmxMa",
  "key10": "3vmbchNpY2zcDyBRmT1JqXtv3n1H8qEFnvkZfqfVwAj4ifXkVmwApenNuuWDvHo1QUVXzWHhJbMb5giBXZM5qmUy",
  "key11": "UCdSiD5DWujNadgPr5dtEZf5N6AJGRmwmA8FWctCPDEN2yssGgG4WFQwmbDyYxEAXKeuV7J45BQBrzVS3k8WRbZ",
  "key12": "56g55UqqCiL8h2rzNwhAtSQiCSG3zGxB3RvmqG1TswrYDVWa4ZYVE7A8nUF9BqsJsbafRoLaQgEktTKoXGzsm1Xb",
  "key13": "2Nf59tPwqffzaHWSLNgNCVmr3z4odtMP1GMVaucN9dJPqH3xtN3b4JqQgHRdKFq7DYzXzRv6LRGoQAmUV6pxArHj",
  "key14": "w2JGyeAfstgVgFPytA5sxMoaJ8dPHzQcApAQrpZmo77EysFqAgiHMHu8MXruV7PL2LcKnSDDZnrHsrCGxgrVaEE",
  "key15": "2fRXtViEW989X8JBokowzT2mUPq9MiEhKChtADg5cAKh2ZVR6QWTJ86NktcgatiJetLpwpdz5uLeG5nHfWQfrbGX",
  "key16": "5SRNGVXy7QTaqye17V8GUVdfSPoHfddADiQqAjZHKLUeA1oHMR4LX1LGjjavbAfKhJwMEJJKJoXBZPh9Y38HqgUy",
  "key17": "3zULhERezQECH5LPWdhpyivCMEciY7vezEb4Lex4av5BjkzsNK1C8CGyuoWamfWYKsvZjmZuBmJQQZffaroZfopu",
  "key18": "42iir3GxhgqHXNRBUR6do3jsENqFZTYDxGMhssTd1TE5CCRU1gLyZWy2N9yMWTYC2v8dKfXfzcenHt41mC9HYRjt",
  "key19": "4kYQQusEM2o49r4Bpm75DD3e8tYdbdsJJmsVMzTVLzTdjjMXPNb6KAPTYLgXBQsMF7d83W37y6CZsPbZYay5sLyE",
  "key20": "5Pjm4NXXeYNemqdZmuNaPzpV5PEqLqrsBn9TY76wDk5MfNxQJMBzCG2YhXN61ARmSj1F5yGQTwsLCmv6BuoodTDc",
  "key21": "rXZ2ePKvaEL4xWjCP3TmRd8R4mWdmaPsj1WyVX5AtPv8R9RJCbe9BH32aqvvkh2ZZoWdNfSRSj88RhasW56DTx9",
  "key22": "4BexFBFHXgqncma21ZfTqCYupvF6kXdH7ntp4wE97udCCwz3WZBN62392LeRNNLu3rZJjuAFeYJFgDjmri5ubBiK",
  "key23": "4qvXycEpkePoSwfHBJetMaejQMbFwHMgMt9PsSPRE3QigjJ7nQZc3Hc7CHe9CWUhwQqprDRhgbbAyB3frgZGDAYh",
  "key24": "3Xhc6SanNrRvK6LmkyzGyGM75K54mqoUGTAmGcWWuygs97e4Mx6npgw2qxMTWtWNetXXHUy5n6B39545EzcDBLpY",
  "key25": "3LWt76bDSytGNyxQcyTCdB47qhYrGyaT9ZyUpdMuAUpWcAfsqFgQxFi8i3gkN9Eg4HSDHTmC9zkn6YEPhbLWDbj6",
  "key26": "3QpchMcZkNjhpu7RZgSzuUfEzuHx636BdW8ceD4TcZwEB5T6zW3VupVNFLCJwyRMQA4BcyWWbT3VawELE4WHtx15",
  "key27": "3Lagi6udrHcmp2DLRsy9hVTCgPKjZgCwJzKJhP3hbxLQj11W56mGBBx3X89X9mhcXCPZ2zizQrmhf46jj5VxJsBp",
  "key28": "2NWyRTcQnnXiRxrAfXujZPfYLPTw4DoZH1oRzQY9tsFwYAoS3khcEKYYupddzLZuKeonckN83tPmW1PGeGm26p5u",
  "key29": "2vRWcu37JbRMMMPfhWHeKX8VbYaEtLHeQPyaCscqmD2i5NiJAEdff4jJQB7sPYcxuFaGBqmTtdugfKf2njmBRjb6",
  "key30": "3cBMrLohyVW7q1DR6MKywJYWsRsw5iCY5z1w4ANEoatgkHq2ahSoJ8rvqWbc5YeYtkp6LRVDiwTfyMt93J9qpEkj",
  "key31": "3ViuwWXSnKZJtaaz2xSchszSG5drt5oYZAA4MQdm4dZTYDChYfJ6as2Rh81739xRw1VT3UMaRe8PyXMaarno2GdJ",
  "key32": "25YCKuv5ntCfzzos2mySzRMQt4yupbG2XuxpdzqBxtH9hJXUmMp4rHqtGBnTa8dQBHHdptYKypFpsD7FkaokHNZt",
  "key33": "39ud82fom9HeTUTjBXJCj2TU7gZxSKymFLMLvh7Gr39iVXxGK2mPNQ6UtGa8va1Kxs2hWcSEB7fCpQbcMrWgyf9x",
  "key34": "5zotWP2JLFsgoUSatakszmizy1ZiRy6aQ4BRwmotM2YjeGL3GsD7HoJGQq1cHTWp8rz39WkT6Ut26hQR5NB18B46",
  "key35": "2dQzWtKPRL7FuDtkdiKJt46hi879HXiwGN3o9wLmLuP95fHEKQn8571VvbcY7bmPkUmageku4GgYePf3yzBK39sP",
  "key36": "4mF1ozbqZeebr6jEZEvZXnF667g9F5bVMS2bAiYvjb484ivXc9ZUxk4dUbPuYtkpeSvSnvTA7NGe8UkML9SpfLmu",
  "key37": "31uJc6aK8jhZgsbPRZvEQ6JJVXMGdmcVNiDtcNXXpP3VmEDyCD93FMbscd4uc5fqaVpASXkgP1j4tDs3iRh24Ki1",
  "key38": "29UH5fZSQBZkdTz1he4s5xjcPQoc766TQbhEBEJLuHLTwMHeZUPwxpRGHKfEpGoQiXEvRKB2R3Zqxvt4eZcJzPvD",
  "key39": "4ACssqDzu8HEMkBb2KrD3KSUgASgp7U7FrVucy9sdTTjX1NSwEoLkrwcG7QVn3o3WMXwTsQDHaEVZ3d27roSbWBa",
  "key40": "5qtRZ8npSopHCLBZMZzndMJmGroTYuz7oTFp4kEfLUj2jWVstMaR83CBSbscuBpMQrEaoia48zJJN7rtWaKA1Mrk",
  "key41": "5Xtw2jVaF1smkcYMGsm6nKzHNejLHDbw3fWsh7bDJeyM5Y4YXYpZvsXTvFi3rSmrXbyi9N6sd6m3rvDWq1aWDjbH",
  "key42": "5krreKmF1kku1TwiMqu1sVmZJGg7B8oZJie1scTHjjnmC3n3UUYVCqB89chq9rM7a3EDLzFTKM95k8ZKR8sT2knj",
  "key43": "5qQpgeXDtfNTKJFc3BBrm4fqUJV2gAqQ78VoLxBG9A9ApYNLh9PhwYooFp3HbMhPaM16rghXoudpf8CAb6tCjvQk",
  "key44": "5gszGGJjUmuXrprU2drWW2bpQbXCSLxN725WM4U89FgaLftQYb4TVS7VRc1z68n7GSk8mwa4oVDGgH5dbnZzXdvQ",
  "key45": "2EVQqkxV4UHcJuWDofpKMPrJmhsP9mfqVHomvDGG9FVQSnCRCxjYbNNTC8dShMEo8LdwHMN3tTPxCaQxiMhjeCEW",
  "key46": "5NkDHLiRPX5kpFoVM6oXhuYYn9ctKre5QWPKuBA1iKcgT67sNzfDPgpeME7F3mC1SptLYpAYEWw9CJpU58wPrFgC",
  "key47": "3tEee4UqixR2tPjYmDxb3pTFUYZyYccBKaNu5E7Emz4KadcZkEFfPr8CJ1orSELSbxGkkmHFQa9VK9Z5mRof1iet",
  "key48": "J9h6kxgH5qCB7qa7d3qq9Ccds5tUuwxUnKjCUMPjvo31NqQLt12NoxqWj5JYf3DSpJcGuY4oLu7BMMHmc3KJwr5"
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
