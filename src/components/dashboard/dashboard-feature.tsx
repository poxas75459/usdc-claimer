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
    "2D7C9FUeWFYuGfCfFg6PeZmmQ9cLqkZSyLSatutDJ1xUF2qVsiGADBX88tExotzsuH1eRrZxH44JmJMoFxBxy8gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNrEHLzGoBH7s39YAZ4V4ZTJbUh4YSKshoGw3GXjZKiMBr5pA9RdxQQesQAR3Tzbq49bxepPuWrw2oyoE8tqE86",
  "key1": "4Z2ze7XHuxKkrmmKGTJT1z7UFe5PiHkQF13vgKkuesFaK96CXMRP14NkLCS76WVdH6PfpS6gbmC43nC8ySuXkiKt",
  "key2": "2Zz9pgkQUaxFQSgMngSKN8Ec1sQJgLnGFpmeEwyfJSKiELY88fBB4viQQ9q6hUkbbgBakKU5mMx2MAzgqfrGzuD1",
  "key3": "4DYsS79ifSLLYJkhUGkRDBqbpopXZRaGRGtufgcEUwe5WhCkgwhhX1HaQYgnYuoiMFwf6p2Yo7AsgQBEkfxYjwYk",
  "key4": "3xqc7L8EGRiYtzMNp5MQW2WgF4CC6Ky9HZNdJngm1RgREEr1fQeSpX72iHN7Su8Tf2mtHfgK5XbMC6ZaPQjxMtMG",
  "key5": "3djw2cLpic81AVPYQtX3ScWyNpuGj4GSyNjJWdjvfSwmem1WGCh1ppBy3udK8KnRExAfdnmC75EpYTmtxhogU1sC",
  "key6": "26UpiHvUNQkCAh4iu5RQgL2aW5rdUpCziaAsTVq9n7jMGdtXBRkJreLPAEPy3H5JSsQDs9dZZ6ZfPpgisQsq7Eni",
  "key7": "5zVmaP6kRhiKCCGUU9jDqa1V4QTHqkeZWqgCS895DyixgbpyyDdxFSZEkc7nvp2h7yWoimW6LwgKjSuoxpton7Kg",
  "key8": "46QPxRdDE4Kx5vpP9ZaBDZUwwQQjv6fVp7oKLCoVsRraDY1kHjZxSryEwF1VmivdsqjNEbh7h9Ahcpkui9Z5XGgD",
  "key9": "5GVRULnx3sD9srDBaHhoz2hhKXypTPSoWoWZJxWbtRVJAaSymdVs1VDg8ryHr2RDVfL9vtoyseMbbRkmprQxpKbG",
  "key10": "3DbMvTLSsZtuT2tS85UJP6Pa5EmBxkdHfYYS2GcWxRNrckpJAvGhv1CNkig6gCHVwQCCbMR2hAoQxW2QsJGcVeju",
  "key11": "3oXK6mwmgW4cCNqHYHgCc1kJHD8DZp6F3HNr22MWBaK5NwSVWA6prGjxhWpDpQU8XEMLK826vUqgAFgJNZ2QTNXL",
  "key12": "5WjxschwxyyXM4sjDmyymy5AZEnessyfm7xxhEbgzoy9wPL7DiCfkhK9F23VLtM1PwoK5nEQjKQBXAjK6k7ivLmH",
  "key13": "ajvBvhAJd9q4of9hn16oprUPULZhgKwDmMvNVwUf5Bp7apjKE4N23uf3wTHtF2PQaMoy9VL2cqPsKc2yhkELLik",
  "key14": "2jEmJrJHbZ6VRJKMTfvL9ug6avY9G6VhMLPM5vhvK1vVD8twzhb9cbnoA8AqQCYuq5aoKoscuXSuokZAvYTNNXdC",
  "key15": "66HNgaMsXvWpNZ22R586waaNoJ12U7oPzVYq9HfkQH9bAw81MoxnLFN4AoozaHh6xVbXz1UAcLkNaWHr6y7si6hs",
  "key16": "4gYfn6vQ1AognGqBXmuiwu5qsSG9pvZMRy5rh3KLqUJFmyXD6kV7DiVCVzeLeAk9jUAcrNVsGvDAXRG3fi3V3Bic",
  "key17": "62N3kw1vrL5rKjVgG11YvzR8TAnj1p4UKxe8goRFaF6v2k3yoTKS9xAjZFnvwtVmVvUFskfStK8BDVN9cu9uvoJz",
  "key18": "aLhcg4em1Si43nG5fDK1P9YH5wMC9TC4Ru8cSy5pzmFZjTRVBEACQ4conNeByQ1uF2oNqbZcY1FZfVqJg2qDgaj",
  "key19": "2uuWtsJF7C7oLyrwjo618oUy9zcYWmVqCwqdtv55WHR8fPtZRwzJ2nizKN8oJjjsCqwmD7LGnmZrbc7v1xSdPYvp",
  "key20": "28ou2AtJuHEYx7vXHcwDutr6oheteeRwibVfbiFHu9YKePMkKAxAGajzmH3kbL4vNDh6WameSqVXLrF2PRp9HQBi",
  "key21": "4qCtGrSJv2jPtSPubD8iXY33Z5YxbtTV8V4FaaEDXgF2rdU24kmy3rPNcW6PqLWrCvsA7h5Rjmd9a1yxJMZtYwdq",
  "key22": "4HTMtHLZwAJsEqz1Siar2tRA7JRGyFjvbku7N1KVK4SMeGsAHpaZn7cRxNsbxFA5WNyLwoWAKTfc7HBt3a6haaNB",
  "key23": "2xMDw3xGGVt94iWDjRwoGmJVpxYivTM9jR37ywFMSAM51SKV3Uqor8PR1efF346XzyshZxSznEDiaPXHvwkPvBsm",
  "key24": "2fP5bCPDBfQzb2xScs4vp7e2rnsFwiKAG8jBarKzjQQpL3u1cNUAYYyj3tGQMDKjfCoj7936ubmCMimbtGu2wwYv",
  "key25": "JbnmcPzytPfFXcqFgkdTS2curZmkGVB61dw9DVxUVUvSE5j59eVi8gScNv794hcqv7J3pM6GreKh4RpEsnSzjq9",
  "key26": "5nP8XwcuL8AmEvwvuhDCruuf7RxS3RGPPhep4bYvh74W2oUXLjP5PqTJ3Pv7Dc9CddT3QnDPQimB2JSGcEycjyRH"
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
