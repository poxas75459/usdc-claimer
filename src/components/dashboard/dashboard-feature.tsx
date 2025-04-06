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
    "4zn6B1k8SeZJ4sbBwZKKQDNJ2ZSnTffKs1fef6BHpoNbxKG6JtQx2gy4pDsGVetVQP23Jw6twu1JuK89Za5Scp4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQpjL9wZ2guFWyVAPwU2JtayeFs7U9dAgYYjCTHQ4cJm5YHt3C4VZF6qzdGEoW2JNxExX3RoYcvjP9VgNGKeY6z",
  "key1": "5gg1RQDjzxrb8CLiJNCnevPvghTFzRGP5zPUgc3HUcEf6LvAGEgYLvojxTy2k2HQdkcv5KinRtdzabMrLv2v39s4",
  "key2": "2jqhP1uByAR7FL2uqEZTre7aWQ4kZGsj7y5m5upYoeSyf8XjqSqYvbBR8SRPcsis7GEBkescYvMM7H4hAzYf9mUe",
  "key3": "3uDBVGQ9bkxqXEorMkXR8YQ3km11VD1GFjqUBXehv9YD6mvFadbyT95eTt62G7PDLhPAjmY8gZDADGFp2yBf8yDd",
  "key4": "2oPw1UC3xowuBGyVNEHD15o9aLJ2kMNsBGJaCCVPkb6QtNuGUV4CMHnnsp4y2NcXksS1FjB6hVsiN4HfjzeXCALg",
  "key5": "5sK6hySepNNYhvvfmiyNJNyvPQnBES4wgdSEzo1z6PSXE11yFpBe94XdkNk4etijKqFQDbwppFjfFHGJN84babB1",
  "key6": "2WDsXyPUuVwFSMT73HgcFUbMLEPnKYdg2oE5CHrbT4P2WBZ921o8ZdvM3zC2StMUGfPGzPsm7acJpbyGvEJXcRZQ",
  "key7": "G2LwUYbZQE9FrGhBQVCAZZR7vCBkcxqNVaFah9PF2vzEqCw9so51nJSXLZZUEh7Ppiu5FqeP6yBbyMwka4BNdcN",
  "key8": "2aD7rRFDCKuvrxFG9xRMA3xYRSQGoiERky3y41JSmzgxZ4mEv58aaThsJbZ1DcYPH2gfTehXXH7kW5ibiekc1rzq",
  "key9": "e4NnHfH9crF1qqyZRYYj7qWpUYFerTj5oHbh3zdEYNzPXXFpWht6DhP8SaoeqKjNLSKKdYEcCgmutqWBDZcJMVh",
  "key10": "QQeBVxaLVtDawbtdyfzytWFd7UkphC4QXtFVaRYpDGzr1JXumThiN93AQDz7VbJfGspk4pX88sv43xqr4BSatGd",
  "key11": "2NYxhkEwKHnER88vt8T3pxdA5qnBPRHyiApcWSbF9hS9ATiFL82xgzEkARdWF8Ad5U9uu4bH6zzFA1PvzVuxzLbf",
  "key12": "5y4pesufNon4DPZpk2FMzNF6WW5bW3sGJi6agWHqLPq9XGUUAEbfSWw665kwj4RrbXXsJMNgwxzBm6rj8AfCerMA",
  "key13": "3cAkjuz7j78iTM8QhEqJXAD46Mpbh32SCCvcUXEpJRUxUnEjEiKqjLDLAN4Vnz1CtWfRWngoBwgSfUmLsfznMUbK",
  "key14": "2YBcbFc4p8cgRAqaKnu672w8EhArawHvwhKNTDKJ2zcEDWSBWGJGzwDYw6JUFxefsyhxXdkyhg2PwFfHSjTaSt9P",
  "key15": "2nTBa6thL3kDtmFdseXcdPXiHWB2Yj8WfnsifCwj1N7kee37K2eW4ssHMPCgz4EraRkVPmfPywkURqKrrKPMWrEw",
  "key16": "wExpcLHeDGpxiZc4LpzjgJxzwRVjxYkhSjYXa1wsEEKv78JoXdRBccJo5gHeaE1dy9be5VWMK3owUP7h2BBfUia",
  "key17": "5MNza8oXGuHqQBhCoFYP2Xmpq64Jk2n3QqKJBoNFFqEQr8uyAMvdcY6Hi4CD7tiybcM876C1Wr55zH9q4qM3fBEo",
  "key18": "56WdUan2mK91UFLeMtZUegDGQBhmFa217cQPh49AZcySVuSZasXnJkDLNRae95CygXd1fokpbQs1mt8wd1UtGjN8",
  "key19": "5bC11ig2VFrgfnBkxQ9WwHqnN4wX8s1v4czJojs6weRK8aSZoiNJWZCZdXJL5Jjv7ZMeTDm3cVYdoyqNGWPLGM7f",
  "key20": "3u16SAaBRBQSp4ymAbgWoPHqpi97PsMe9TAqiBATvE7ifCoAndTdG1NrQmFarZSTfTa2X5NC3hCLvukCX5ZP9gga",
  "key21": "D9VyuwnmUUFcxdqYza1MoAam53w9JcCbrLWYbUHet3zEXphepq4voT6sMe6uud4nPsi7EQKjSWiCQshSw9n6J2o",
  "key22": "Q1y2JcKTFtCdttTCUT5GMmjMm1XBu3anZ7cDG3ayk3uLMdqqBc8PqtySUuDzZHb4zeWQqK8jp7FjcX7SKrH718p",
  "key23": "AKSY1UmBhtwhvY8WybqbPYwdHzxgNxsxXxYbhcgDQpfg92GTbhwoJKKVSZf8Mwkwd2DJ6gaECXU2rUw3vZEj5rp",
  "key24": "2UpT9VR18gyf1SfKk5xSpognDZ3KpQuepT7KzRdAU7Ziga72Q2MDk9Pa5hYsD9FWbJp6x1AorVG2j2kjHvFbKFZU",
  "key25": "4tupmjmoYvX99rXTrAL3vVQXoVqrAggFMk58e4dKzgtMFhD86ttvykQAQrtYohXKLNVkDPX9n4tzmqkYNDkibi74",
  "key26": "3ZyXrNeqGmPHCs7odgz4mhAhdpixNmMSbrnXFrk2JhfJPk9v6ATqn8Mrh5HrZjLho8pxqZ8evNTftoMiqxqmu37j",
  "key27": "5JPnQSPofMiD2VHsKB1gccve8E5CeYYBrYfbi1CwYHtLRMZmwUfQPgwqxzQu7Ag63aaguyKEFp4ML4fwkCNvQEgP",
  "key28": "chfNysRUsXNfuD3y3UzrPVxPFE476V8ugZZ8FKNM5814eUagJCEQHbM9xfZm8yy3ZshvqtQ43sTVsJSRvfDeEaM",
  "key29": "51LkfHVttN8aePsh2WFcMExYgwpXWWoPmPBpC8LM5Q2XfGvktsF3sofVdeRxxmHn4KpDaXEsopQDbjkrHD4hmuLk",
  "key30": "64p6zEtDg9HQGpY7zpueKaptsFnmCq1pDwX8PSVCGttsBPVH4UHeKWNqYsg4StWEkpapiccfF2jze3R6iHd1hx43",
  "key31": "5RWNquURveavn3sNkKw9SbFn2UAkpB3n7CRg21ao3d5m4nGYK5X2PyRmR6D3XUMGeCMHfg3jXgD4yC4F6tKDiE5m",
  "key32": "3nkBVFQkyxHLKnFzzRW2mTV6Mm1R1B1uJmqsiMzjNg2KTLFgWxD8XazSw4DcNhdeZPLM5uAfDy6dCHaA1Di2MnnX",
  "key33": "cLaCFeHzEghoCAas4xz2wiYjmbMLjs7ACePRDNDfn3LcCAfqqVDcggSTTuZTVzYPHAFmHgZ2Hu3p7tqF7mbjiuG"
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
