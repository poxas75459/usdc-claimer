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
    "3w6SThChVviisHe5fv7QcbL8EKnUYsCQy2R6dJVWEnyVGExpux7hENicrv8NKdGpTjsaAqB7P99qrZLLyYoAeGdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRfqFYDfR5sN42ioF5opSJ5RtfTzDVqeudBbxamq2vFpyRzyUpMhjPB4qkNcHAguQdBNKa3ipMcdBUZy9X4skyL",
  "key1": "28hpiYEcSrqVvuKcDN5ki3rVGtEcAFtfZfcAALgqjUDh6RoLecbLnyGo9i5FJKQ36YgYFQfcoHdG1fNLzooLwPju",
  "key2": "5y9GL9X8FYKUqrRVxG2Mnt6tw9b6SRcFVNc1QcgbisJWMM6igt6yA4LjUDoeXaAwdA36TAyLes9xPsF12s3Amjrd",
  "key3": "RGM9ozXc68qhC1zzA3NA3RiaPZ8u37PEBQHks9G7zPT2tqdgaGuJHC2MDfheyHtGstxZFebUmKH57eM1PnBDzWU",
  "key4": "3BNrfn3WLeZG9UKNT6WzqwtqNLsfnwNyqQ4T4AjpbdbbdbuBLmP5pMFjf7z7oK2eqSF26tN2vtJqD2JGvjusatpt",
  "key5": "34cEnC1zeriyPaVxwAfjrjV9RzKe2a9nSY4spWLzXRVEtgWmit583LQRocjPrBkhQvchA5Z8HZeS2mVTKj2sJJov",
  "key6": "4DNEGSiwwfpxUrr1s8JUsb7A89Lr42wKg9csRkTUe2HYNjakRXQKpyXtvkJJUn86GUfHirogf9sCVGkRR62A9xve",
  "key7": "5UtsAmT2nUYfm7GW2so1ZjMLAh7zTe6q7hn6rQ2HXqsw5sd6XHArTCtCLCvKivKZgRGoVHeHcRoTBQqbpjDFSdjp",
  "key8": "3EHj4ikEqqAAraoB36gNNtJxbwT2JT3ZUCjBYnnhVYmUxZBohqbJUzmetrw4E3qjeA22cpFqqFvCgvNFp9sW2k9e",
  "key9": "46xR8niWjcJfNKssveo5bH5odLow7PDJWKwg6be9g44RsByd3QsFhAXT7yFBGfjcB3Tc823P6j7u8siGEsGypL7g",
  "key10": "2ToexLnDRCL2MLpvEbT8u7CeSvg7CwBUr8PpRSyM1ZRaunHNwVqky4SErF1yWTtZ6eGj6CjhV7ebkRP2ENwuJ7Jy",
  "key11": "4QEfbZTjZ3QAaS3WwgoLUwBdNfis9mczpuRv2eJfi8tyRjPoj3FNwBYiEnhW6c8yZxBxqxNid9rzRArP6edpU5No",
  "key12": "4gHLV8TmB9QcD6Rd3ffCtrgiAuHRFtnr65d7fsu1Ef8ubCEwbypuqCCdQmPfxsMxzhm4KjciinUS6EvfKSHiz7s9",
  "key13": "2XfyebQkyq7fKwiVgHmVDxVntqj8Am8jS5p7PcubyzNTWkvWb6QSSqLkAUZekG5b24RvT2RFvKdSVVYFtAhXwg2K",
  "key14": "2JopZVbqBc2aDBsFBDvjitgQj7Lza33fDqwzqB8sSd32PtCwGWg148FkxyasvBQgkPee6ZEeBz8CrS2YieQYC89d",
  "key15": "3RhD9uYeKmLvBueL5EpGKsqxgt8RS5bzrUmad2H44XG8abPogoR12jJJH5KX72T3N5DnTVmT71NqEX8koRjjGqKX",
  "key16": "2q6MzyLc2SyTySdRXT2v4PPm8hKU9TMNEwVT2VtY59P3S9xqMxxkvfuSxSMca1jnvpED5uxRsyiXxv4KYFKMvi8F",
  "key17": "62V3dXt24tiFGRWJGr3UJGDiLvGiWrPDGvu8XPUGRZMR5tu7MPoF2f1GRa6Ubu59HHa4mBq4vPA23paSY6uSrkAH",
  "key18": "tfN5RrpSLNo9fUqR4qKFQ5wfmBhjjyB4xPJMgqaLLKJVKJYcb8qoeyvRnwSji6cJtiAK2KQS7uurJsErLa6emzB",
  "key19": "2zkYTG1hCBF88UYh8s1wShpfmW8ndTZSaXFxVQn4QCP73VnrzwVo2EdyFepRdJo2rf8AnBZKW8cChMsRqGT1yghv",
  "key20": "4qTE3FAfkkK157HksJgKKFCEanNFyMrq9Kt1hBoaysC1qthzjBeiGzre8iWCjDJC2iKcaLaZVMdyzzkECEkQEez5",
  "key21": "47brFiMZ4RM3vREUffUZtUykVqU5AfEWr5iVoHEktufR8DXmYF8oMbZpNGmNRp6RvxwkjdgsBwsz9e6ZXuQaMvXn",
  "key22": "5J7NzWP9P9Lwx6zACx6SRuUycasnrMu5GdJfaJsFg9LwSnMQxLRtGS2AeTwZhmbDcAXG2AiRMYmh8MgcEaQMiRCM",
  "key23": "3MGKr5K9VLnNFtetaSJRmg6KZKzY2RqbkYUJCLst3t9L4A5DpkpBZfNkktWn9kNXqRwAmJizQH9LoBpPLzsWzmDV",
  "key24": "fQUUmbfT3wrjb6sNQKytmvTDfarBchqYZxs9tJAZ53Hx8udWg4daLe9gEba9sJeQfS6Rn776FEhQPK7NWLqWa3Y",
  "key25": "4FSvUYzdfUmScYcXzLJ7cPiuGHGFzCeoLJWmhPrwopj5kv74gHG2sWtVps8ChsQAd9rZUtfPfPEE9EpNHqRxLQ1d",
  "key26": "47RDedxtSwaso514Ctj7nP1Nw6yzU2wsFZqHUjztTk4o5uAnvJ3MW2JqCtEic88EjtX2HqYRLhGaLoFL7kwhR5WG",
  "key27": "3hNfxaYbEEdiZdQQ5MkNefsQFLY1P8neFeAL8BFsRmfUaWAur86kSdSBd1Nu5AQxES9YmpPUQx6ugb5kxsoMifKH",
  "key28": "5aMMhG16aU7f4NskmNuHdDdDyfQFT954nyAPsPSRdxzZnTcHgDfPCGYU5Y4HLcAZPNoMyg41czq3DTn125KR21x9",
  "key29": "aJjXorpJWYNSFp92afxcXg55tayoEFUVKPEXPzqesJr6rcxN2pdNAH93sUzc6P6K2KeKVWZXCD3SJfg93GhQ8sJ",
  "key30": "521hiEiQjStoU82TrBe5ETAxzVgtKvxZDKn7EVRdrKKrnaxhkE3ehgWKVKpFNrv4FaT8RQWrNhwypGEPmZgmfBsL",
  "key31": "W42NZoV3W3yP6JMTjP4CqNuSXp8M9BBfxPeDZdcZWsqTJ4myLVFHnbHP7vJzEMpn5DFLE6H3dHYEm6SdTdbBVkB",
  "key32": "21XAhfLphswu7CHpzvmy2r6tb6E7WSac2UMKCVtcdPJnNNiLw6pjFjwTc994vZTr7PuEoPhYzTYUMDoX2gZJyHy2",
  "key33": "3MZRoyrGcWvrQWrXs7MqGqsAzjFjnRZBUqXhqG8eZjWJuhJAxiyHFv2SCMC8grcAVAqCnJa6CXdzz1YMWGabisF9",
  "key34": "3BqxaG68KTXpf4jC7RTbv67rX8wQwMATQMnJoqR5suCfxRLCusxp3J3FZfSNjyoUcD6q6bVN7HEw9PNngr56BoNn",
  "key35": "3nE7pWBtyMCE4PXnEy7drrGPrqgQmdhwHAGjTy2bncX3R1DsAQmJw2MSbPy6KRyZTasrcAV1s2MEiBXvYLRqoeRU",
  "key36": "4pRtoJmRRhETqyNzPDgbGR6n2kq95ZTxmETeyxPYb4tGpp3oXF7YDtxwQuxex5mdAxV9YvTWXicP8oCXk2eFEVgq",
  "key37": "4iYHP9xHPwMqTStu6d9mjtrYFSLgTwbULnSH33bicxvSnfdUb53YBPwbd1JBtx6AY17xpNK9qwe7UzDcVwNCpjxe",
  "key38": "4mJsQ8j1s1fCooTjWdetoyPEGECdxHN7UwDfTZ475qaVbpkvXM7q1xSjEyiuxjUmpJ7fqo5C5it4EFuzTVoL84bC",
  "key39": "fAcKgKfGzw2hUg8AKyTrHLohm7hz8ejpMWHNHJCpfWkjbGJ7wdLL1itJiwLghvio2cL5RKp4xBdatwQUMpQmYYU",
  "key40": "4YZp6fa14VVnP8ZtEj1hBvETY1XbJmB9C9mDn6g1nCxn9ExdYWdqy2qoBZAx8JFvwJMkLygqL192JJ4rh2p15zwx",
  "key41": "4M28LkDtfFxBzidFNFwouwf99wx7vMpA3JeT1fjXRQEesVsVtw37kfGi261TKxBefGLN3NCM5jtL7XfNoKdxDpn6",
  "key42": "3cScgw3H3aJdLzx4akZjxAQZZ9CitWuhK91LHCuHqPkuKiS61y7wHYVErwSYyLZ2uRSiL99dutb1hTEFdH1CWkPq"
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
