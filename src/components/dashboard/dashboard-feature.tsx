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
    "3qiryFwB1Lqsck2dHXNYrjpeMAEjy4qtccrGUnnPPrXjLsNKh86gPfAyN9UrebNA7MBkjG5zUJo2DxiJ4gmfjzWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJC4y4shqu48W6fbwmstiixsNRZWZBkmxDCvgaecjPZZ7n3n3gAZyb18W8nh5N9yMvgwfPXPB7PCpgTt3DVn4mb",
  "key1": "3gwu2XpN98DjMpLbn7zPximAqXXC4gWc71ek7UYotQAHKup2nMGoUe9zyDDMR4a2HRHcXWNT5vvMrdJPjuKAspjT",
  "key2": "3gHQvdCiVvbniUA3FQYdoJsoeDLZx9Mzcae6zgmXfZy4HBJ9LzmbeYhkwYYfJpha1fwgW9koXSpzSmqo3Hn31iuo",
  "key3": "4eJ9MwuQ3HyEK4RWudjXK19h6N7A2inhoAcoJBuGJ5qxh7s7brUqvWhyFvqXyecMiFidtAJ3rd5tcisBPQkBbDHD",
  "key4": "4eSyFd1fYM6CVeLzi8DC43ezr3KSfCN7WeRbVMbdU1RTqgoGaYSDn33mmv1oUz6ATLMJq9y6S9Wk1wgNs4yxcwSs",
  "key5": "3ZKgAzTCYR4gzLiAeZbg9KWwPjMcuNMzcvcMMmVFamyL2Wikx2UT1VteF2ML9MHZyX7zDqcnfi8dbGkvqYCTNJYF",
  "key6": "5TWQbex4fV2bqVKYmdwPu1QVyxG6n2eg5T3r1n5R6d8Vb1La21zto5dXQXFgL4z49bNWct5tNmr12XUGGa1HkXms",
  "key7": "4zPm6TmfzkPSYPNu7NZKhX3vVuB1K9uvYQXZQMhFRo1SH5HfCAEFHafW72DZXR7Z6ziThytGR4xM9XgnC16XbupX",
  "key8": "5QAHFybY7XcUQRtp6ZMk5TmB4BYRpefSfGkRKRSNDahQ8cM9G1wjvhibhTuSNYkNYiVXcKocAHZp6J9NnCvJcqkv",
  "key9": "2Fx7ZaNPGLHePEjJr1XarbuJWgPibDB9NRtBASoPsNZNm5VzKFtiRWYKdL22V3xCHnRaDapHGBSPavtZjod6D55j",
  "key10": "2PyJ5A9oytgueqh5Fi75G5THZ79exWAXXMQawaodF7UtQFx72FmieXPQ3t6QEtaWXVzL2TcsM9aMctcyyjP6erQn",
  "key11": "393SZPBy2EA8yWzvzcam2iuQH1z28zVpEuhcSQVjrPPRBwt4n1FLWeATLnZP1wMTJTDBJ57sduRbNUuCh9qoGjjK",
  "key12": "d6xYJMGfYDLPsJaFj4uNn4eDtP2We4MSCYJBaRMU8sh7jcTUJ8V9vNwUXcpNj95bZEkRvZSrcm8m88QSoYU24Kh",
  "key13": "4VAPtQzTxY7Khz56jybQaf1ez3jVnvEobUJJuus44K58N9pjnZdcLgcAGx6qQ6cFLpPYEinG9vZgt8m1nJnEbbJw",
  "key14": "47D7LM3qWsAaXvCpQGhbkfLu6nybLtNAKRHARf2yeFx45V41cgpScsJkZWNJfC16DwuDPGBAnyR3Q8pvsMB387GK",
  "key15": "nFCZ42j4ezYPVVarC3hdvqBq4SJbFH2PFmodbEQd8TGGyQ8o57ak3RsXHHs3gWX9Ypq4668VSkBvQyViZz1FX2C",
  "key16": "39fv3CzhUEbJysb25bwxzJxbpR3k6AMxCsgkQXBMBcEsgJde5XDciffs4qaEwE83WhDFhEwrYSbCpcj5ZZ71JHhe",
  "key17": "2fHo1gmY977cMdygNKQ2UvfUVU667tyukvmr7cn1GSVG1N4hneRqq63PTiG4gxazSVFXLdkxuxHpqMq6ncB7J5UV",
  "key18": "4rXPXowfzMhqrTAQfeiudKZ4hufgFhoeFr9ayqvYQYsiaesfyEasAGTr3m1k9F6YEz8MvyseP8NjY22q4SiS1MXE",
  "key19": "AdDWMzNdiLZZ1GMjPyYUpeE4kSibPvTqLcWuQ52cEoDLFrqdbYqgRqtQCns83ekhib9LfFwDud5ycpSSvFq5oYb",
  "key20": "444CxWPooj3G3eA4Dw4yt2c9JRtjgoboVpXygWqhsBL7xYdzFadvoLeUGZTAyKJrhhQTTuLgE6KGBuoiHSr8KM4Y",
  "key21": "CXsrFQ9D3aopuRs18pmeYhZcvnCbkiYQWjYgiVqTj93MZYEECRtQkngdsdaPJPWSXjXZX9Q9BgXRyL3TinQ833x",
  "key22": "Hamde51EJ45AkVH18aa3FX9bierQFz3JHE1xFsCoicXgd8FT6EcDYiXbwZ9DMbvd9xk1RekrorpfvxctNRbN9Gt",
  "key23": "4EeShRLYvS29EQjWL4oHhXBuczg4i8x4UvRHMQQeWszxNeYeuiT7s6nmUtg4prXg249AhysV4Xp7WZFrBoxXQpax",
  "key24": "2ZJxiyQvtvyFatS9dRigLr4HAwMuPBjjkVpQx1Rk6tk3C1VcCQPHhPWEUhghsSD5ZGChqKErV9o1wkcVA4tdbTL",
  "key25": "3Kch8WQYnhtLTUbeNrnF1MaVApsFeGkqh1Pvzfuw4ettkLndxYaZAs6FBDsMzhjwTUKH6Fw6oWCPvFnS9JxpRwpG"
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
