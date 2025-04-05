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
    "4otpC6owEZnaqFcMh2B6Jq1YzH9HFvy1LdHeckCoktfMgnVvgBtXFdffJsrdfux3CJrC7tZUFNUsow2oFZGVps5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SyEMgYkqM2c4YcHYu67nL2Fg6mwLt947bMowd1d5bCDY7Hhe55ftfR4AyCPpMovfAWNi4h8crUXutaRbAUEcF5Q",
  "key1": "34CLLcef7GkfPZd4XFTzNQqjDevJxvCk5mkppEUxtkFRWBTAgkJKjaT1phPJESJR1rc1i4ixXXYeEiQUpeyC6Mhr",
  "key2": "5WxUSGRxjJ9PC1REpfWK7dTdHsSrkabnTDQDVVLXfi7ADYmy9CUgtVJn7kz867h43nNTgfU2H64pct62xVyaa7wV",
  "key3": "4ijC1C6CvaiGwZb5mBrahPps4aynyW7eJhoV5t3gLDKD58tEfdVzCK2x5APkPeU7xRTNyT78ojTkeKBH8LwLVTyM",
  "key4": "5HMu89zQf6msitdV5UPG92YbgfkT2NipbjBpnS2yzrXavsLjo5gEuXizGzsMUBsvUTmkTgFAFqjHsAzfp2r59hpc",
  "key5": "592bT9VBtA71Ec9BxQJZoJLdRUHTXkh4yLSrk3QefVgjpSLcuH5jk148VpauRZED92LQowMvwoZjqSU5tBb9CXXa",
  "key6": "VjHhGYbehh23PPir4CqSYiVBrdoCeCd6JH5B3ShyEyRVaYPFAhRRhZgYMtPLUn3oc2PrLEgPyT5YncNeV5qH2TE",
  "key7": "mHRR3pBSUgJpde4TKZhikQDuLdqs6VXWtJRDzgKDAKS37zoED22s64LXXC6SZjVbugobzu4wZhaSFbS2BsPTkrT",
  "key8": "2chmVAw7Jqn6xcrYDu3tX5oZGjCSaQKbZJnUaXbkj4vZ9roGLiS4ex2da7oewbSkYQXjPauUA1ZyTLnEtfvDJ6WH",
  "key9": "5zzNnek5oc82hoDBYA4R1cgbvP67kYEqQpWgyqgAp17UAiorB73oqqdRvp67WvSvBgduDucjNHj12awNQjXeZvar",
  "key10": "47QEnhkN15iVdAq41nYJUBRD3epfhMeLKG4iE16dsXJH8AGH7ZrJnsYfufXybdKdct4tBR6oTLN8g2LessPJtFPW",
  "key11": "47ZQ1QnozkrGa24pnaAenLD7NgMFq3hUg6NuQbqgBjUanXkKGzbn9QKLWCHxqAr3XhNY5ghoLFJbG3R5NhDUg992",
  "key12": "5SbWr7b7pqqdEcXkM9SxZ6JoxmuPUoWgsLg8j7PbNRovquHkcXK2VnVdcYbggRg7RxCjhgGsXdUPsU42o9oUQMQA",
  "key13": "rNn2MepPiBVUDzC4Fxom5dKgRFLymTtxKNTiseWSa46bo9pSoeWkMVDmS4EKqMrtfiv9Yub4gTEh2SUbSq1E1Bv",
  "key14": "2oLdZUC9U1TGoYBSJeqYH1yX6GpydkKp4vLeG1t5gAhjNF6tFKA5JGJqQDcq8o3rJh1yAKJkGUeDifyZmyYuETri",
  "key15": "2dwdcdPSR5TLLCajUB7F5JmryhDS2JTT9Sk3iUFxrXJxQVdScRMTX7muXRnP5PyYaGo7kyhXhYe6iv4eFXYLegSj",
  "key16": "4QYmE3Pi7MGfAb6pc6Yt1T3ezWpUkK5qN4pW9fks5BdKSkQZyizfjkjoCT4BNchu2rEL8qfYp3mNhGEwDnyeBpWg",
  "key17": "E9re6tAhLtgmk2aJ2BFng4vH3P8yzvW1Kv3gMhzxbpnLV4gTgQdvuR5qrTs4nziujM9nVLq3ST6v4QXQBHZmqQX",
  "key18": "5RhaBoj1soToys8nz3m5KnH5mT4xE9Jf77Dc8ZPhxk9v77eHniZHpz4rJANuiumh8rHKGz26hCfJ8BjYw48uBBqf",
  "key19": "Dph6SJNrpos2EB4ZZcZchGhqsVAoMvChqeMybLMqKFhGgRLAH9uLnUACGPPvg3NST7FNPvJjKpUPD1AZtxzJtnw",
  "key20": "49rDobv7PB4zFA8jasSZo7T4bHdiJHJBQdLFWKLxFCCsc5H1YbNAvkTQeoYMMrn59VyGZ7yv8eY8ijMy7BPHpmkQ",
  "key21": "2syBvJtL2UtskfhCJ4hxTbzfu5hDDFnrtutSLgoSPpiGf7kLEBxiEhwbVBMZRVGDYSduHLv1z7UmRe5b9hJb7VTK",
  "key22": "4yoznvfrkUHDvfsz3f5Mawj1YkYXDrmxg5rLHkyynPCSmnFyZjZGZz2yRvVGWQMBK9tbFiLQpmcfRLxTpphbw7QV",
  "key23": "jX32CHVGL4ihyYk38dxzray2vYqDZN1d3KXtYe1gY9JbNZKBSbkC2AxmHqQ2nET1g2woSG2XSVLQdWkkN3Bjn39",
  "key24": "yLgxerfsxaVxz8w3T3mN9uoXfhoejg511AcmFTmCxtqS5gdvV8rADP12wFYXmo315uM2PZJTtCLAkxWpT4K3Q7v",
  "key25": "4zJ3D9pyWiF8Z15TUECGManRnSnx8QBihwwJqxwwJuCQtjyQUSfvJnEXkUQvM1ufnSGRSZMmy3n1ZazqYojhpzGD",
  "key26": "2zjHq8utuh5S6B3BHh81Z8TPDvk1A7WAgxrqbSVvxzjVFwnXji69n1xX4ap1S9z6BBBvayMFWpTAB2TNSZkyd4Ac",
  "key27": "mderJU41rW1LLTowViGM2BMPVRZC5m3DqtNhLLWQsEktUBmwTH6Ld2DjqHodHmYpTMKhd2QxcoErvcDLHYBz2Cx",
  "key28": "3wks2Sp5q9eshTKCMjLteG6JwgprjsMUgAtKJdnKvohk4Avc8vPt8bsFuU1FxVQGFs6s9TeADX3Q7JpPCVxV3cMk",
  "key29": "2h9Pqbwt7K3EozdhzenLmjBkmUUWVrsxD3bne1kqbR1NrdWthx3k3FuvC4zBEudMxcY6dFesdaZNXmvS9hddQodh",
  "key30": "2D9Ecft5MhZ8rb7fZftgKPbdYtn4WP5nNzu7b91SfqCmHZciFde7JeHHUesKRVUCrxfAZjVQDFNT8LMZrTh9GEqo",
  "key31": "2eC1fyjsiRS2tyCwp3EhBb9BrSv2yTzpG2k4JgKsVuZV3cSPkUjWhU6zEWjoeJyKnaJGiJfj3Rbn9LZARmbrVhJs",
  "key32": "2HPigymzNRZe8eSxkVjzb3uSnz1otRNeenRMDgamgCjVktJPyerH14qLyHAFq9M4ztLnyvngkVS3W9G1DwYFEXy",
  "key33": "4TnH3VSQVMQp6zk2CTDQsyjoXQpRCudtUuHTRcMZ7eBtXNGGSJm9KPdV9T18YJyhXUZnU7HxHXsDcamBuritTDJ3"
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
