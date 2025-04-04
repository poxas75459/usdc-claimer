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
    "5aRCeL4BCeF4K23eoMvSYEazPwKvGmFe9KnLsEgahK6bucoy5ARKv22m9VBRss5A8aLVBA9fZcaJKHuFWVkYNqJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56rVpHcUqp6kRZaAiSEP3wBCNWU1VdYaVqV9Tbr3RRtpwGzDQVaQn8cxXTKGjhCt4Tzddk16hnNcogSAwhiiVRhx",
  "key1": "4SeHZuHJW7UecaEi8eCC6uNFoWsyqDWro6mWJE5DE9VBMPC9YTVCpG9yrErQyGfQFG2d32C97hu3oXV8xn5GjcGq",
  "key2": "25wEWJY5BhZVEXGcWw89uFcTNKsMdcYYc8yEXJasxFQJmc1rDuABA3HnUWnqzdy9ZVgrENEG2kA3oMVfBXrYKTM7",
  "key3": "5Q7EWx5UMRzJN4gh6UErvu5ooLj6nDYq7Zw2UuQbmvGjqgTYBBuK6XriACsXuEeQCVnhRbsFLn6c8TqoFpZU7EVH",
  "key4": "2ogtuYxt1WSmwiiyeVQtb1vmAeJFz9qbGaAnYTSM6urSfDPqXQoUAoYPTaj6Eeksv4kDcaj1GpN8ZApRdvh16ZBB",
  "key5": "4J5vhGR1ieZeHVkHTddzC1VesgHAkxKVhPLuoAb8KND1krPtUy1t7LNRRx4r7v64ft8HbCEWoq68S69ARRPhpae5",
  "key6": "dFJW4R6e3cuwuDG3aftnbZsg7owymvd5RkyrSy7uQZTKwFPLn8E1Cvo8vVVCcfudu8U3itJuYZMQ8sxz6qPpCfo",
  "key7": "2YBaSisL55ryMMjrp81nFP57CTRa2zM7rsz4H4Cf7tnzmd8iqNf91FFHFcmMAEGzgtJ7LR99Vj1XkXzt2eyjREcc",
  "key8": "4QZqKHxrvAvxVa6VeRr3Y3hsST87seKqqZCXrTy63faAFs3Y13hFHRFWpx2DHTY9rcEFwDmoeFDWSomvx9g1Bp7X",
  "key9": "4g9NfNTxFhebNMbc5cERRKie35qtEFkvZKTosmbiFCS1Fr8VxWSGm1TqZjDutjnSeyWTZVs46LHpD7FXe7DFaUtW",
  "key10": "27sDPpBdNdiEv6uyZ8TwrrjCpZxbCWKwp8LQUgsUaQom3u6v4F5C9DnNJj8iEgyroDGvfbYqZv1Zs2SS4LBpMpE2",
  "key11": "2J4nWz78kQGSnHWoA2sPgSFLeezf9vnVx2yCJjFbbpjM9zJFK3cgMsUS3iSm5oiFRFuqC6fuPH14bvY59ABWvBg2",
  "key12": "2ka3DDaPkteVjQc6BRUDorQjmjYhpk7GDfGA3Sz9wGzn387Ex1MpYERxjhHuBAAewhRK1ZB7XL3VYtmu2Q4gda3A",
  "key13": "3ArjCEy2rfp5ddHAULLczf8rxeB1wWbLcK46qggLWXBB7be54kWpNhH9SQNBjduMbcNrRMZG6jkTv7WsQpGmyJUM",
  "key14": "4Qwse2PuQSWzdLGHM5WNXSJjAGpbX6iqikdvRpsyQb7Ei3VpuR7eGqg8yJc6jomoiWDReWQGsUBZieq7SMWCnPnH",
  "key15": "63MX5hXQiRcUcW88P1wMbB7efnW9JRqJY4HtCqAgW5HG4TaJXJMQEHyhMtjmr7LbXV1ctrrcxhfe1U7pxuMYfCBA",
  "key16": "64LEgqDaVUo86a9LXeCGsRauyeeBVBD6XRpbcfqdTRLVmTWo27D8NXv1vRDv1iyLKvZH27Mm942ARBuzXxLBKCW3",
  "key17": "fnh9Faw7XuyuLMsAjB1T1ST5ZweFgUtk8DhfhBq92VdAXNT7jJi73S9PqxHLtFQMC29s5fuywkQRJstuMzDBLu3",
  "key18": "2uwhoHgheirARupWBV5vxpsDxBrEFdqR6BpFJGhcaBePqxErnUMrcQbPrueETRd1EoiwgqqNcAXxLpoDe7vnscR6",
  "key19": "2awZZs4zqaeqAjmo1ABB42oJiSUtuaoHhhjbAXrUJhZL1LH1qSr924ZwFtucXaR5chQWe5mt3o3KuYZK54uEQoE",
  "key20": "58DUeyAWCo8SVtHYg3pMak9QvLKxnwJgdzC9YHFcLGN4C6M3ZdWQS8RbbK3EaJ7djfLgfhMQrFzsoyjbRiR2XSrd",
  "key21": "5f34LM5dgNJJ9h4tiqCSsK1zSE2CyzJkDHCWLeF9npWmmfhrKErQT3j5o8YytCtGCtYKfmox2VMq8mET9wkoKyVm",
  "key22": "3FVpDRh73sHwJVWS8FktMMdVLR5Lcq4GHhTyBiXuV7znfqTLvih5occDjxqyVYekgww7ZKnDN2J5wV2h33fRgry9",
  "key23": "5BWcNCtPwDDpwp8itAgtA5TXeVvWQF4ALu234JuL5byzSLyHwfFDR9XRPZNNRky3kdHoCnevHCimzrgxZn9dM7N2",
  "key24": "2yLZAcbtpcu8hsPb9e5ERgxw7RvTxVqJ1jhK1Kt4iS4fYxWeGDQuXnABNk9xGo3AuBzZxcQy8dg6Ex8egXdKMXYg",
  "key25": "4wtLy5LVfV27LQZMP4q6b8yppdJf4wNmNWhj9gZ6jNjwoF475owmvKYR2BbPeKToaLRtNKTJvXVWsNyiMJT4PNfW",
  "key26": "4GE1duV3U98Npj9qKWDimMRvuobB9s4pER6d9XBA9S5Pi5JYaPVCUrQP5HaP5PC6rxb5rWwRy21RyzHwuVgw5FGH",
  "key27": "5o75KvEn4iUc12rPVPoRzc7vA8hYJM5EvYwm7qyVoksct8g82zfuZpkU8mae4SW8XqgAwNbnvQHrUTTbKTDRRJMD",
  "key28": "4BfrUe2Ax5EEH4poPt7eZu5gdcMzmQHj4B6p52XsaztyqhQ63racHJbCX39bHDVxx3KSa8zZmtzkCC6VYkLZhZf6",
  "key29": "ndRankBYPBNQiPXa9aCfgpuuoNBknEuN1afAcaSTyr4cTwyuNWnx3n4S2V9J21pTimsr6QvhCE8MpmiZGqBpNNF",
  "key30": "125VmyV1EeSv9hvL14u2UkHZ9yWXJkH5ZaCMKf1khPioPSgWLDzumyrpKYg6cubp1PvrWPvBEhg8ZqGggugLpdSH",
  "key31": "2Qd3KF7vCoFsfaKRFZbPhsCYm5ntqZR8z8vLMMmpHmRLvSc94EX4RmRp6isY7CVKy5J7adhHJymLY8qqcV56tTh2",
  "key32": "2gXBMmZDWueUvA6Np5h6NFhUm4F9gCuwSicAAVCVuoG3zuPAWDPLhmC4Liap25atyK1SBgCPre3ZnuswdFPktcXU"
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
