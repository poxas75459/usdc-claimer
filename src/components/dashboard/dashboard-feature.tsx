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
    "3q9cJtBVbt6KpvcmuySsfgpu4k7cjx3VW6j6hzvKMX4SJ51CG58Y5pahJikR91EFZRzKbPr94jZJfrJuJNyUJKQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HDje12PK2Bc4HkcgEQMvUbve5PMC6PbcNbLu83VEvCcyiqQJhsppVQ6q6JZ8S4x6JCWBL2eDyf8dpwJBGnMmpw",
  "key1": "27wGXVbzDEz83s9kPq31vKKAEYgTQ6unx4R8U5g9xujQZJorrRxRtxGKSBm6ZKP5mB57gHwEDpKsiK3vjcMUEycx",
  "key2": "3JkkAXtovj2RXFwLdmT8PhVnFoMHb88AN56ng8L3h6DY7US9PKYW7ECqjXp22HbmkFgK1wLNGUsxPTw4ZmHWS6JF",
  "key3": "3JGYN6djLb2Kg9xokADfRj7JFXZf5zL1ogi4aRArriFABAfdtmdFSLMRX7eSJFi5kq1nK3BDLqDLEiGHfLmoQBZa",
  "key4": "4WUEraP3eUqX5w6M6vw6DERw4Q3TnYgbbYWsPj8cVihgJZq4V15FrdQsyxpsAD9cLGnEuq66V8sD4KGibCJu7HrE",
  "key5": "4k44S5U2r8kQF99RyJSmQsHHoXaCStLaADx8GnNyfxDaw3quTxxYo5iKWP9RiVNehdG7B3UsLZtyCvbMNpVEkFgS",
  "key6": "4A5ezSvsszYSKioioHLuN13cPcCopVAeo7YTWy3QTrVyFHjqLZMv99hq7vFii8N6XT6tH63ugqQti3PHtiw4u5aX",
  "key7": "cdU8B7ZHiuvttBQvYnbM8fcmSPw1YXpT4uyfnmnbhE5PAB7yX35ku7obfm4t8hiANUG2yrwr6siiJLL7r7vnitM",
  "key8": "123gYUT8TEhUBCFgu7DqPSMy5YQySuY6g6QriZgGeiqFbc36E9XKK9F9zmoKW78Hf2D99BKfYbPowU5TVLqG9TLg",
  "key9": "4GRyAD91KCYgrKbWuj9k6jXzbJtsL88id2hvC4EgiwJfPArTtSYi4kQYQkerZ4TfNpqaaEMd89so5U2koUeoEVwj",
  "key10": "4C5KkW7LL7LrUui53qKTGzwpeKWevQbx1RPkQE8mFvdvs7JoST4oLrviXz4jFpiy1WCKPw959unyTDaxcsNU7iMR",
  "key11": "4MzGuH7xWCV92vVRJWXXMz27Fq138rUqutfP5m7Cu2YXy2sKPy8S4HxoZukmXkiyCz6ho32XzaPAbkeycyKGxFB1",
  "key12": "5jpZ2HLQE5jG72fLWh5ExVcwvtUXUUCr6YDejdjpQi3NQcfMGg4Vm7cYMqTdo8V232Rcx3yGEC3SJtVKuopCdb4w",
  "key13": "2SQsAKCrqSxednPX5WVPXK35yLvYsWtVTjxBFrK2QNY4HcAQjLZiWnaBaFxPKPEFhGfkRXicDJQxxqfWCoU1AA2a",
  "key14": "5xgLEi3bcBaWCJxTtGo2WoQoGDRu1GqbLgAZDrwS8xBqfJojZqreEwQEieZ57cFMRfLwnBVnNtGPqks7bQVTZy2W",
  "key15": "41UepygnihDWgDHiqNTEpfimiQm1URgdotVXnEywR5FSrb2giHuzzBFNP7fzmAts9krbmNzCpDWcFGBDX7Cgd5b4",
  "key16": "3KrXDDm8q2SREDHddPv63W199YdcKEqsv8GuSayHjUJdJhUucPTYi7Zxy3B7KyWJ9aSskP3wsX6WZsTQnuP1cFye",
  "key17": "PaZZKqHz8zTufEjTCscf5afCUkeYWhfDMgV2TTHiy4sty9hvJgZxpVCQioqnYjECYXbgRtzyNkp7YNgswDT74Ze",
  "key18": "2XvB69otbByGGa4SS5dqxY3oMvZEZezX4VpKMAudEmhPVayJFqx7N466wg5xJLWskZ5qni6CQaE6wFnjHJPubwhX",
  "key19": "3CBozjdTKzQq4rUKSTgtCgRUfcJbbeLFrJA6EZ1EwTF13PQg5C8md6731GW78CiREgZftLkdj3YBtrM2F3D8mN4H",
  "key20": "3WKiPvKtyj5jJaJTVRcnUwWWzVHKS9nZEkiXzTMESTouwYRKU12xqQvN28Cf3L5gazdxqV214Xvs47bzYdUqy4NC",
  "key21": "24bEyGUYEiSt3GJjXj9xiZWXJy6xP9yMFHE1KtLWt2mVF1kj3JpHUfJJaYMephJnLu71izvZdbzcCdB2cnVCcCVf",
  "key22": "37EWVka76w6QVaRVqukP9MB3opVbQd5BFzQsvPp6mVci3PJmwKQV5ce482Tc72oWKZGgV7wpmVfqRTrMxBeiY3Bi",
  "key23": "3NGjvkpdhsajyCPvZEaUVJkT12AsrdqUXcuFxdhoNhr3toDbuyHJaaw43UF6juEnNug3wCjTN3fSWtEvpMnabb2m",
  "key24": "4MaDJPHfYUZF9Qn4qgPfhaWGj9PAn6qxgW75uKyx8dSiGkLASaWPzG8TkheiRQsXRn92bfz6HRoN8busVGpgFtio",
  "key25": "ESayiEj3cV8T2CSVN3MNEEdTcdSJ5kwc8W3wGn4Lq4FeJf9VkMrb39NLiiUVThJBGEF1TrHE7jdCdiSZqr94ZKt",
  "key26": "2v4ubZezVcfWpQLKSj2HFZ4pVkvQaZ4Bfs8smrsdgbrzS6YWkib1TcCPSGiXEkgYfNUb8bhXAsKxKrFTLen2H4xk",
  "key27": "5WEgvLaowoVJ8uQ775sQshcWCgKoMsFbyFU7CMB3Z4cFdLWyxxDVv5jhMQyNRZEJBhgo6k4Vt3yfRTM24MVgSxjc",
  "key28": "vo3mas28PDRmbFVyt16Gwfrn6Lu2dVRMAnC48mkaqq1MYbpgTrrm5BRCXD4B8Twc9R7NttUX8Ws1Sq8Ma1rLWKY",
  "key29": "5yqNmCGrFJNrstpH8n9tyP9uqrCbShQzyj3Uo2yTgc81ZjKs1qEp9vTSsMkJmeNyrXQFJvY5HBiMn9fiu4smE4CY",
  "key30": "2qKjBKK7LX5vPCp9GSa4L6sQk9vxxFWnzzydrLvuppaw8P15vbhu9THhAhaV6QGCx2qD867UB1h9DgHWZpV971qz",
  "key31": "wGoNBodcY58x8v9gNTKqFeyK8SvbfjctXBEXqP975mQxSmaWCGCztiM5bDs1FAByZL61r4Tc9Je8HmzHinjLWnC",
  "key32": "2nBVafFAZSNK5kVPFPtUKfYwtuvf4QNEAPboynJkVZJkPCaowi4uLD37Fvg4w1b4BzQWvPckzaBfPEopBrQJQMDi",
  "key33": "2gYpZ5N7aKBsfeJPfC5UDDU3rKciuDkvJSnH6CUcfRM1o5r7FQfZMdJNLodDuMDZ7A8qdUmEJEHaYCB5J49JjDdV",
  "key34": "2CAvoL1Gtw3VapHrDE5pKpMjsGDARm3EuoDftXcxukz4R6W2mF4JHLVuK1QQUzo5H275K9sQnNqzr6L2o91M4mNE",
  "key35": "5vC8evEoLHdBZJXRYkMnMdeqdfVWUDitrdVA6Ck6X92XwiRBYSTvhaSNP6XpNbG8s7FuZbxHa5YNBjmsj7GKS4fQ",
  "key36": "2kgBjJefNUEXcBC5wrUsU3yFC6q1jT252ak686XJFRBF1XTqqnN9BR3LThU93ExkXw4EKN5xCrc6EfV19stKYSyJ",
  "key37": "4gTW4TBpuGYMLHBH9yLKeyp7khC4zn7F47qWYfApGZifTdggd7A3NM1z6sEjxRUaZzcdMnRi35TQh8r9cfL6sThM",
  "key38": "5kyhsckpXkXRFEajEN2vBXfpJoiWLNwGgpKSYqiZ1Pp3U5W5Ar1Jdo2DAcmY5YDFi3GsgiEptWGqAcg35bMzvhe",
  "key39": "2B5sJzyYczvwWt3urby2vghsbxkW2rxCgS8TJsBiZZP5ocQwNtv6oY1Tte5chv6AjBKTkxC21TcobBw3Frt1YUMc",
  "key40": "bCA1tafF4uVGUoJ4bkMVMeAjw1VkjW8qAMXidvEdreLow7eafLN6aAA3Wnq3bvuWFvasmc49yULbLW9AVDU4MD5",
  "key41": "Q6TpcVdbUm4Y715YAHCuSakVD4wp26WLT1kne5B8czz7a5GQ7f1SDf1Hf7t99nE9QuLnguxU97FBPDARYrejLkE",
  "key42": "CLu1e9N2LsEm9qBBGZYa94187BFqptBx7gqHeAvPuBgKYv6s26ZamFbYcQwAhyftv1AJ8TVtxitBGU7f83piB8d",
  "key43": "4848USFveQVsGJHFX9ESbPQ226NQMUmSJezCS5onG8Hxa2EGDzRNYAe4KzdXAdu81cyNZD6o17i5ixYRWoFmiXi6",
  "key44": "4EUEgmKTq1uvY2zqikrorgtBYYKRiPuR9rqs2CtUs4hrbti26wUZWTKAd8FVBa2hL9ycbBHQU7ZhbLTVVQyjiuvd",
  "key45": "guoNFSycKdaDJbx2LigbVDukEqQpVXWq6ijb6oXcsHTw4VyvgjK2em1MbJHyNNFBRHFRajjCGKXMV43663HfAKq",
  "key46": "31E9G4QJ7hpt4rmS7qSjixYn79c2yoyzKicW24Waxh844dJ8BXc6RkwEib3tZim4VuNCT5rqWp98tzL4TH5ezx6S",
  "key47": "5AR1b1U6VDKu65fLPwXBmgxx3AemaL2FNbBrmLsbzuAZGiTxgr3duNSdqE5dnjBeGAyn7287WLr11nimdQuZMS3G",
  "key48": "475q7cnHMoRjG4iYmBTg5Li111tHhPrZEmtz7iV4T9joDVLESAi1aPEVve6v3b89CyUKRE7vWfUeV13zJSc6NqMc"
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
