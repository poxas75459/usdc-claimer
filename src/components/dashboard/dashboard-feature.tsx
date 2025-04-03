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
    "2bXwKh4nsmoJS2PPDmCpPrWFgvjpppwRjwaQYEqsJu1PCj9tn9ygXUJUARh9zGMfZevfgYJcuZCpRVdM1C4133XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1x7QKK7kwsWJM46ZZLmFLUzFJboovPn8eFzzziUtDtM7oaCWFVkQPYaTioV7No93Vsc4gYimKiERdNVbQcDtiq",
  "key1": "4xPx61Kr7EbVvvURizKvrrDqNhuzBQ5DEc8auZAgfLW6QjM5Z5zS8UJdKqQTHqfNm7vpSD5bFA376wSyGdpE4vba",
  "key2": "3MQiZydS3fJty8KV8SoKpSGLswGoVamAjh5iejnifzjS79gQzXnt2Mcvh9Dbd54Na6Pc9fC967u4713ntvBTPZyU",
  "key3": "4QQcZHcEfVjCSHmaU4FEGse9bDkfMnYcKbQPZjzF3NzauRRn9WLGSQjqHP9rJRohHx9JoJWfgZeTvCxNjbgpEJ4N",
  "key4": "SfLQYtAZTbpVpTB91Kc4sSECsKr2fHbpr15UJhUfFR9RJLwcxSfFeNw19qXDH8WRzDxH183uz6fQAKaLM47daJU",
  "key5": "AKnK4TF1ygu3yEJERNyu1FcChTrt1jdMnypXZvBgwwKrZ7JZeV4AkRSfewVAgubADNtYvUcfodYyNTf8DGuEk16",
  "key6": "5KffZokXShMeNWbrJGiXchNi4b5VLeZkdDhXAtHaW3VsayezmwpxoRneAMAeqiUvjd2n68UBRn8ZTh9TPBB5SxCi",
  "key7": "62EFtgov7jbjZ94uXvNDyfbRqbq8MB9Cwwb4Dnw1bphbXWLQneBzghsvcDoFXasmqQ3RPDKDFLLE9ekbuyb1E1eT",
  "key8": "1UDFyPjCNaEKWtnMRSKfWe6MxjsdFNodrJqNiVQtKYAmpZmY8g5FVzBQx2Ljp5UpmNsz7d2bGNZAW5BBY835oGv",
  "key9": "64UW32ACwAtFMnuC7XWgNX31RK3NTcE4TTMiAbReBwgzTimhi5i7RztkmghxBTcpefNyqCEEB29YZ8XDGmw7HoFu",
  "key10": "3vwh7TUARLiriDbv57khYH4xfgzgRUVG8JxeRTrEkfqiutQqJrzjSgENyeHN81r42mXQEGGw2nvnAW7xuyLmXdcc",
  "key11": "3HgGYyvz5E9ZJFNxFmdNFkoufWPMAgW3Gh886ERwnHbzr7uTZxPRWX5XhqjjN5ToJ4qWTfB2FkKuAaf1649soDTQ",
  "key12": "4fwTqqYa8oRAphZjANcAAiEuVZFkmmpZtLZcxWMEVxeeFjzXLGsTpddW9QQiZc9mfqzNCwcL1uTe33nrVwxJnnAQ",
  "key13": "34oNYmoJcLMXVFFTeGsXj1ZEewXFjpbn577Xu1xf2ZpTGkhXfSq1sKr1ykeiLQ2f5WTgJYs921JF2bGPEtumDTFa",
  "key14": "5M6NacEPrBSeWqxWqw3WaXXdPwaocHiAdw5s2MvshBoPGzeAxj5oJrmfeHVDosdsamgFnCRWsYkZf66ZWyfEkud5",
  "key15": "2TvErovgtxcd7swVxDyTju7NXXvjhP5SmrAX4ijRMswJiQ2sp3vcaybXjY3VscnzqfbTiYikbiQGWmWRhsBB4Jb9",
  "key16": "wcRD5a8rjkRJC5eBRcvVvbTuorkNswAcfPW7R2qXPdHDRd9RVRKpa9EkpH3tt5AJz39cN5gstu55QAVh3fr9kXN",
  "key17": "4vLPzKtDNV14NJG5B9RVKpyxAdKTuvmB3sP3eDyWhoGWrrjH95DBpWnVJ4a1Ch9MJAcxK8AnVsNmVnGTXRzmwQN",
  "key18": "64Tax4NeBPSN3UWiJZ8Z6tCgU9ayUFrszBStvmToC2PZwKAWYmAJ5jzxA1BcHdcy9LPrjaqcpxjMRraZNwNMYgy",
  "key19": "27pTvGqtK1YN25WtARhsbhpAxqCrSfViA8vbQv2acZ8i12xhbsgrrkTYeSLDyQucvM3QvbzXDGwHqTDwkMwhJyQN",
  "key20": "2NonkQtLM8H88yfvcZCm8d7FHvg37ATSGQXymCbLVAhW2DG84w519xMUKjxyD2jaZe9xxcmekjT6JaraYgxqmAiS",
  "key21": "66XFWgfQPT6jJEsNXSQXd8RUZkydLB8Lr3HRPeYm31KTHMo1EwJfdpZgLLpK9gMGvSxU7uM4Tn9gkewHHFpURtRt",
  "key22": "58dghY27YNR3aD9qBRZkkfV9FbpxbFouV9yG4FRax189dZuURvMLYC4Vp1drBewaszCempq3TUovcKQ3d2115NpC",
  "key23": "3hp9gU5Ln9VZ2DnjBvB8yLPLyxj77aaNccZogzKgjZ4CEfw7psiBkLJmCvuGo5tFesZxTYqqpMt3QxkAQ1g3VRto",
  "key24": "2jkUiBmAE2adGQ8bh17VagLi9PMSUphXa3gam6Lcy6Nn617X46jZHKvxp7fxrGHeqvEpFrpbXD2dYh4LMr6y8vP5",
  "key25": "48LGX1SEXnox9BpVoMcRzzuvQY11KWxfD5UHEzD5Za3d2D8JHYG7bSsmuwe8D6mQMrnS8orogPRmQBd7x6nRgW31",
  "key26": "3SJEcU6mQKNNyK9QL9qR3rQV2W1Ht4aHa6WtN2jdKvuqJ7zTLg9JQCwVJr2qDMnryAvVppR8tWs4FuvHzVPHW1fV",
  "key27": "2YyQD7Xis7x8BD429BToa8hSKMmpGTThXaZFY7z15eNXmR5cfbkcYhQf67j2qe3Ts248kA2HHyLmHj2apzDwPK2k",
  "key28": "3SPoi2RRBHDwYaYg9453Ym6zSrSDeikvBTXtsTGbTwJcYF643DiKBiMPdxwd8UYKeePnAXyNZGvPPAqRST9fP1fF",
  "key29": "Eax1sCbJ83JrqpBpHnPKzgyGcvNkby9VkeiQqrfsz3d6AK69rRNxTFPov8Q5syGd6BkciuAKXZ91akLVTrseHmy"
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
