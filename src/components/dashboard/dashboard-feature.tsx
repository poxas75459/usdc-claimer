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
    "5MTrGBCxYFkhppsG3VwRvnjkNhPjpLwXShnYmR72QfwznGpNPvw8YMjNY5Z1JpWPC5qLPbdGyTdwbmRQsBMfojpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mni4uPEd8ACL3wbamyyD2n8uzkDAis5ReSav7Z6RHHDFuyjrvqNQCQnU4HLQZDXVshJEJNCtME6oSKx8QF3DKsW",
  "key1": "5kPNAvPYrkogwMqdg4EZsPvawDniRyCCfChz14W2U1bdDn9Ys539K4Yt7DNx5uhmY9ukGB92nkXmrx6oNYPADXKw",
  "key2": "5XyDFynWy1SfYNeeeTr49txaNpRbGM9FhzEPeVnXD1PSUnK8PEpQWE4YRADrjNiRQL2TY6zBx7LDaVzS8nzbPKBV",
  "key3": "5jpaPpR8sTyFJ8pMmzce8qYxQoNYdyQt9cmJQgafLHZrg8Hy8gyQJgm7n8cPwEmiScSwNoyiBno6N7Nw8Khd1vBk",
  "key4": "5DFP5Lyuhj513YZJycUQc8ynGuxzVVEXytLKVjJh2dSmuJk6wvux2rF3wf2XaAo7s8FDBfiuCH5xkAnBxSniXbF4",
  "key5": "5SzBrpnrpwwPZpDde93BXeRLUWXeBZj63ie15VAv3DfGp5Uqn4MBfHutfjLFzMbnsQ6j4XzYSSY3HuTMXDkb3bZV",
  "key6": "b2BiGXz1t3bQ4Tzwch2Rc3NkFvX9NZ5hyzZvJGxFcShkW1VcQdER7q6DJHotrAqxxrJHUqEXEK8qcUX2nNtAWVK",
  "key7": "4LKywKAVU5VTyJqNhLWecVPuM1apFobSL7AZQfj9Rgx8QVu6AVBruJuqaus9j39G5ZXaTxVqkdJW1aKk7Tx5n5e4",
  "key8": "4YtvZ4d7hauJsWVLL5BPJ8Pe9PXENkbUWes2BW5vxYNxm3GayhE5nqLJHaeDDyYQUNywoninGiWTPaggLUhhJ5kZ",
  "key9": "2Cbr8vfyxvEMsXnSmU292o7G41RZKj1BqvZFQu9m3Q7hXKpWNJgFWvEdcgtQnKJgfopdP9oScBK9znkrTANdDXKB",
  "key10": "2jfzMKGkZn6ZsjQX6BKMV46ZHR8Yc13fNbszHM6nH3Jp92LB6dndcXHobvMr2NKSETfL9uaQm7p63W5R6qAGvhGR",
  "key11": "2QmTbm514rnPNNfqfp3Zt7uoCSfUWF3iYCnANJ6zjSgLhLEpuP1rWM5ny7VBHC2pf3HX5LQC7VQ8HYbXtJyxg7DH",
  "key12": "UnGESYFf4iEqwXvb2RkXCaNTjDtsWL74fvSTT9EuJzxsCR9zXVFAt4TXXHm77ttyLRRiTjeYYJU4FxCrMzbYMrQ",
  "key13": "32JdL3myVENM8m142pT1htv6EtbCFBarm6mGDFRX4MfFawcgPc8Jbg7mdva6NNMTDoYzpFootntyv1kQwKhmNNhR",
  "key14": "jGZ9A5x7iZZbDS3JXPRdz5qgg8xbpgU6i2kfjViQVF9N9riHL5sodmMVvWuxEYXEgSiXhWNhvtZzGceKcftRn47",
  "key15": "3BoqayWhF15tba5Jx22NmsFkaeFNoZGJEzvWjkNz6PXDrENHcjntVkq1Rc6gKADbHXvs87xAuZyCAThYVtp85B3j",
  "key16": "2Ro8f49BB1BB5GdxBxb4CbpCrAJeLeu2cFDnJ8RWh6wWGfz9jKkoJneyyQCdm4ZNJyhnQG9RgtNWfLYfhSk8jSzB",
  "key17": "3z3R1d1TJnTYhqSGGLmg8f1wxyVRbtBTqeACCzD8VwE773oZo5VRUbZpbtwQ6pES3zijeA5v2FaYWKqWUoEzomuA",
  "key18": "563iG1yJ3QRB4YeW1FW1aSS42GuWFcNVMHnc1LL4wqiUw9fu3Az16NTigQs69Jsoq5p4ppfBuZixnPLK85bhDzNh",
  "key19": "4wNCHUncAv7UqgvrQF5oX9vt7krCxyj8neUnbboDxTSxUSQaygd8kbz2rp9C58xS4DAeQUj47zkyvfbH8B8J2tUn",
  "key20": "4aELAvZzcLDmhSrLVGW4DGaLPZ1qb448iHxvzSsCXFXtb1LYNs9DZoLFQRj6NPHFQE9jxb3vi2h1f1fYW37s8K2w",
  "key21": "4xdTw5heqfLyxnm2oastt1u27HDhcp3nqb6JmFR7egpWcNYs5C1SVFCk4ARc9xvAsJKaadFW266K5perN9APVGdY",
  "key22": "2eBo3LyMG8fUko7ydaBMDqngmw52zHt3aYBzfNMEa5kgUoKwYkZRGJg7S8E3CBuURfZGjypErryasoEmtV5MEDyn",
  "key23": "53aD3cvbi5guSFx8jgVbi9AiRiQFWHnyVecg7ctmcNUm1Bks5JBXt8ZLbiPGBCNRC6p33icT5hhdYRhBDwKSCK2h",
  "key24": "3ooDi4dat782jkYyosKqchfQWUSPXAazm4X6zSo59KZQSbsWQHtt9eLofBzZUhTtTLPWaq8A5gQkNaWJdWY7kYST",
  "key25": "3qy74x7cEbkiHzawmFgCV66ZbG3DdGjY4kZrPnWkbhzf3XUJjfB7fiGAvAT1F6ji4s1GAyBcmodxD4cHwtEmhcyX",
  "key26": "2DeTEUAVuwbJ76CPDJxJdG9HWbfK36RThDgB3ZBERgPNPiJ2Sg7LRsVqjCPSnS8GLs2jxkvcbquVXNxUtGBpqavF",
  "key27": "PW4wkgr2MhASvahyqkAfxzhtKporqRArhVSS2e3R2eJMzn8iborU94MTZ9vFRCJSKTLTTwhsqiN45ziX9FPVpdD",
  "key28": "2rQN9Gm9S8ajcEHjr3ytZHWdqvPB5pcpvK7u86bX4Z3JTnVAkewtL9hY2Uwc1NBPkAynnQ5RTmX9XrdC8Ntx1Bra",
  "key29": "SzNaNejn1TewSx86bpJaCrMqbzs2WGSTqZzRriMYv7X336oxmiFYu9qSNMAFzoFrusgVGJLV8YAKpXYjbCK4Si9",
  "key30": "4Jr7LqnDbTd1ixCCSvzitWjHyHwmkvFrTB2JHMQXchqWtZh38AWDFDyFr5XNjxFfk7FChzR28UjTBJrwwSo9U6rL",
  "key31": "3e3EEZTXZuSu94EMn4y8rUUowuWVMNyKM7XPhHnQLsnDV7fAMFqUE9sYFrwPP9PR1rohzJwWX8YQvXJugVkrKUjt",
  "key32": "3XnAjVci5E1Zy8Nmmm4wwrX17sjP7oRpcQCsUEQ8LzVf4bLoqec2Ag2YAc4jfrjE8onyhfYUnKrteUpHeFjmwiWf",
  "key33": "TpB81Cydh8f9KZPoLxvsK1qwiraas632SRLYXbriwSWptFHaMMqs5kDoNJE4htqmdmqMKEnuJeRjAXHwbJn7fkh",
  "key34": "5ZrVC6W2sPcZw41o2Bainv6BCeCcqYKZhR16qnAxXM4BVr41A72KrMRwQLaGABbSXWj2sJ3cWtdH79eYzRZGPMqN",
  "key35": "2hULBwSzrLhbun6MuoQfGPwhLEuuQA4XhvuGZ61FmN6ZQYCaEohKhXyrFPKk7JBZZvRthehd6XzwxzzKn13NrEaB",
  "key36": "5HUw2aGmP9AzkTpsh5HvS7xHowq32dzhHrZqdgytmqqAGFXRpZrx2U4CvjTaAiUMnHiedoRYmHsykJRHy8QjT8y"
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
