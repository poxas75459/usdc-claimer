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
    "3GJ2Mbcu1qvfb56xYUDGLK6Asa6QZfDTie1m9a6aDRbKbUjJDVTXKsQnUWiERyT4f534SpBy3rGDoESmKe3zTLEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U82BfVXMXwZJKCrWWrMYy3zcSroiVExXWshMgr7xBKSu4xHTPuPf3YP7T2inNuAp1yhatfwMd9n4W3Gbi4ANgDR",
  "key1": "2o9oXmhJq94ADhxdCHbkBKCocPeLR3FsCtxfvQE5NiGRukzdWbL3jZ3cdMohKQp7fe1QafHgAp4Ub6MpKV8BgyPW",
  "key2": "3UwaPGB6dXrY86XZABoziXsBY1HFBii9aBp5y6yXeErAS6jjy1yzPmKv4ncZghCUgayWXSXhCUAtTr1znGtQ9xVQ",
  "key3": "5YkKd1oqp7DvNjFaadM6nLAgTWn3XVikEEtE8Y55znaXFeoBESmx5w5ML4ZtnnT9x9uxJZM2Kes6dC34hhwmLgP6",
  "key4": "5Z49gDBhX71cKvCFm4FgNzwm4mnWdTc2HA62yu2p74FrPMuRvyneofg6xEyD7rWjLDjbpuoHMoivHBGHstnNJUxE",
  "key5": "65t8Ks442YboYh9cK7QuMEwFprdRQu8Mry55wd7hmShGhdrbbibtEtE39RJJBB3psPdzFCipyG5gMcNLEczVrB41",
  "key6": "N7t33UeVsaMDwY8QsfH5Tcq414XZPGnhAwueESMqxVGRKzTJLeCBnMvzBY6udB5rfPoYo9zwHw4SVh9XSspHyRs",
  "key7": "vNx4opWFURcKDmaPfaBbeNiVJvxZGJRZy9z9xJP6fJ9o7Q8cLJPmPr2s3EnqRDrzgdHu2fKa1AukGE8u5KydKTy",
  "key8": "33BwThG49ao3KULo1pM6JGgz1hef1N6ixxrjd5VsRfaeFkU4GH4MoFj6pzauztqxdhvqgcvPTx4F9wpA93Cr7SQW",
  "key9": "4G3pjMcQ7XjPauRuP79GLUmp9ZMz9dXiBG8w7PFAzQuPKXnp6fVJzdCnmhhxw1MEN5DpBa9WE8XTiKyn6ze8hXPL",
  "key10": "8hqwkzZEquAjt9bArRvPEWK28AxbG6MpPjMzvvgt16J6KcRg8XuPk9NAqHL7YazNAKaansHieamBGjTAYkdvWxv",
  "key11": "5ZmKAEpRAoS1Sr6NfYftqJoEnWdfGvVzJzqhRYN8JJL6Z786b6bDAoX2CPAysjsyDQaHze6PFRyMMTGxp3FaoxNo",
  "key12": "3rtbcs2Ph1EEargJuexJfec2q4DkfmWQTswuuMsjzD3DbaSmWfkxYxVMnSzqMaZyFgNYrJm6E1uaSpFp3stz8hnF",
  "key13": "3h6RjLc5tePYT3oBw9BJ3tFJoaR6CUETLF8BobecVC4nPayzTAukcCSTaHc2PQxMQbnfzcEhZCPeYD8UJbKJsnz5",
  "key14": "4YMkQ5P8QVvaRknAKthiCpd73v33HzkHXaBAbzG38mQ5b4wVduXYydG84pwRtfG9qoGRZzAvqtzdPyF53Ke2ygmu",
  "key15": "3LFKaGZymao4ZapGGJVN76uNb4tRy2tDGyoCM1Hv5ivb51DaZUoyxsJU1vjNmZsZTqSJbmeWh2XR9jeVsNipoc7X",
  "key16": "4Au6AJXAcamAuy2Ug7qxwdZGhr8WMPXwxQGUiUQbiBwWtrr3x8mJhzefGcnfVs7r8KUoEwMZkFGyEM9mdAtcXW4v",
  "key17": "Qw7dxYoqTTZAZ9khJzi9FaKJiTru6xs5RztsuU4FQADS8tKkWDtkgaYt6RXnZnqedamKxPjWxYDuvAcqVgeGs2z",
  "key18": "2nnti3J3Zz4TLArPkkL4e9zDZCJpEFto7dADp9FSv8EjHLzpeF1ri54shmqJ3r6CjVFMGuGRG7TQkXD3eCqd9a7m",
  "key19": "658gkZRfcvVXygSkxZrKHmfXE7hKmZErqxjahCM2PaRCYVyDyzUTHnbX1A1Vw8hPHk4srKWNcaRFrQUAAQr4YZtD",
  "key20": "vcKyyyVvRGLnNirpjqrnE5dx812tCJSmZJ2ZVELqKAVn66gXQKtBVwSf2YmuEN6coJ3VY5yDLahFLJDVN87M7rD",
  "key21": "35TjiNVd1VWn3jFGKnJfFY99upffB6BZHnVV33bog8qMB5pzpWpw5sMrLJyUd8N3tpufmzzJRSRUJjeqtzNitvzz",
  "key22": "2uSS9QdiABD2FjtvX5GHF7UbeB8EyrEpue9y1giJ9e916uk5Bhgnk2NEgefuF5sNoGm3r6hgrmcMPECtU8yvQmDg",
  "key23": "3K4xYQX4YzRHrUBmneVriFq1MJCg1tiz2vsmvepgVofLz1wS2MSFk27EEanaR7j9nRbgLNY318iW4Fd4hw9i3nPo",
  "key24": "34D8qkBqs6fQyU8suA6DoG8y1xPvUfGD1X6cmTMYjw15bgZ2UquArS2TDAkEwXtsfu9Qxe8HKesq9VGAMbr1Zee2",
  "key25": "2SQComQoUvqi1795yZrhG2DktWje916a6RLUSqqdoE1KJDb4SMVZRZ2Fsg9641ZiWmp6PpgNidpsZ7XX99wbLkko",
  "key26": "66fuEY5tQonhUVGMNhGkkMN5pDYQs3ip6pvHwnEz7Bka5cvuf4CruMXXpHF83iU2AJsvuS8CsScaasmFYAYcCuPH",
  "key27": "64e1JpDHZ14NjXC1Md6AbsPfEmsZQiK9uwWCqJu8FHUqZmBL7b6E86Jt41zLCz1kVhFeF4fPEot1KtTFh3vAQTSg",
  "key28": "66a45ftsdYAAxwF39tzyD3UaXoPLCceehXNup1anT3VzETPYd9dt6HvE6xMRancUhWmY24TifQSGz9wotKbEFEux",
  "key29": "4XvuiXiujmQ5Biq2y1Eu4qQkrMAWpR6kp4cUZD4mj96Fr37Y1JuQoKscAGLymRfpskzaABEvVNuUtdX17hdRZGKR",
  "key30": "dVwgPMVF35FeHdvxoRrWq6Y8YXrtA5kvZ5G6VjvZqVNEhr8Wehk1FcYNtyLorvceiPhaWJ4FmDBvb91yHJLR8CE",
  "key31": "cvpv6YMMwyQvjxav4fnEw5hNUvkZ8fByErq97XtmkzvQMMd5tU4XjmUuoo3YzvZ7qj7uMm4jo283oHeMjUVSkAu",
  "key32": "5zBU5VDQ6wydE7seinnYWiQsAEcti9VCidwkbXs5Y6nQNr9Euc3vfecNnmxY1w2VizeP3RFGTP6K8AFg3o2p4mQp",
  "key33": "4aEuisLAQ3t695GkgGrfzHDGeSjSMknsVz9Vn9U6DRhw4payR8MVhFrox7af4kcyZb4qKPH3SoHgDYZCUPu41Gis",
  "key34": "4VJ9UquarErwwdbhn22TEjh6TDq9cZYoEhG4W3wTZ86GyEy4cpU32xDNpA8h54z4VUZmacZ7Tk1p7ET9NTNggGEB",
  "key35": "3nwvXnqrwy6rZ7XYSa5srvVj5yAqXHfVmT9as2wjwRJTKfeBJTi1TJnYAnsSjtpXw65yu8Ru626PSQaZP1tMqRHS",
  "key36": "2q84EPrQvmTBSSbz9sY4CSAzTobAnKkocuTAeo2krRS1hXkNeufRFSHhA5U1jrcy2LJdPCcNccn9C7pPNVYwifWu",
  "key37": "rZBu99HVs6PKaaeEoWoafzwkFtjJhGfbmhRT14oC2VGUSMqREmczURm4mSPSpxw8aXpdfp7PwbaE7DDRCd8UEnt",
  "key38": "3tW3wCT2SZz1FZ36KJ1JkRyUAdoJnNAtahuCVQmDeQfmxLLnuWtDkZWxVdBj1uMsCaGoSxf5yLWQpqX9TdEHLcU2",
  "key39": "3atvrt5D3XYLkV6n88F7adeSJcMeB2qmxZ14cFpFBBvABSL5iDQDg1RM4ee9t1T9K2GegeV9fgyN1zE46xWzL4rb",
  "key40": "571En74xeaWbsDjiHyqN4RCX85pyktowBmpH9LpLbGeVr8wUfstfkUKP4FAuiR9kycCLrrJa166KG2kHG89CYYQC",
  "key41": "TK72QaUY1r72oj3NPN37X1mMqdQRdrUYJoQqm7khyFZnYbfZtZqko2sBPKhcuKiNGYRMa6R7znHd4xeVHe3b73i",
  "key42": "3pyNBgeH1gxAkqLXJCbG4Ag3DLK9ojRwa9CB5ffVHRfvJp6YHUtEEsezvdJqFuFSCzMmYN7ynLdxSMFMXxDokTo5",
  "key43": "N1U15cnmBV85L2dndo3sezCLympZ4VNNqqNwimDYzbsNZR6zbpe2qTJ9BeeL5afAi5UEBayZ71gvA4ZnEQv9iyA",
  "key44": "46pm6XpJ5EUyfnG3kaJYtRN2Wxfbhrof1a3ezoqwA75w7izcsnDaaVzmifwB5T2vK4b93XFmjKkx6bVRdbw7DkHH",
  "key45": "ebgCimZRF4mpgfStR3E9GUgsxUXbG7AAuzfN9tNgeie8btW6uyDVu7iKKrTmkGTmAhTWB3Pq4biiAnFC2PLAx5U",
  "key46": "rshEQcNcHNmfNHeNFAfK62S2aUtpj3JfFWCciyRUP7yUVmEP2yqAHcECX7oiwFy8kGz4NyPQTFAXBR8M9XeGN2J"
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
