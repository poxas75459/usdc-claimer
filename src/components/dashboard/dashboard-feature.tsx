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
    "5EAMKjo13gphkvT3kuZdfBHBG3YVmqAatxCFit57jphVmWbMLeeHe3XVHUgjapeLCjV12iNRdTg4QtpNi83jKq3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRuwDCPQTVcSwiUkTEunVvbRwz5LDpK6nkQMZdYMWgCfxVNvd7Fc1ZSL9jgsEoF3w9tatA6b5Kk7hZCc6vLr8zV",
  "key1": "25JVmtUCRDcyNLstTCCQmDUYATxsVXy82k5k7rzwb2C6CtArgfm2Ap3Hicfdg6iQBy8AVf6eDETVea8d5if9xAAk",
  "key2": "5NMudsvHiXGbzPH2g9Ey6fD4Uq4rZMjSbRftkXYfhDuksssVqtsXaNqujN17fMnwtPKRw8S9Sh4dhdEDfT4PPGa5",
  "key3": "2aBGSYKmmoY2f3bfxhWbkRvGTU8HEP1uU9BWExVhwPtQRe6SA8SMpELHp5FBSVPSHrao8BTG2tVu1AcrGaaKCPxA",
  "key4": "jNqmqhUfWPnrrFp7x7PxxTb5AUhjTEMMzUyrWogCyNb5HTiCtRU97G8VLVBbzTHHxkw4akLtTCCfNYoBUbqwgCr",
  "key5": "3WiD171gbKEq5jRS3Z1yJ8sQGffKxYwBQtVdyjNZqs3xkiggkguPN2Sz7raaAGTMthd8w9ocwg8Z91ELuEtcz4Yk",
  "key6": "2x7DwozSsFqtEoeAMN5stPUtMqeYQG5szJAm8gWYMh5i9Zia2ybjN6wPiY1na6PMG8adXnxH6XadjNUK2PeQpfzF",
  "key7": "4qnDJRafHv4gMU15sdPUqgEpc4SWCxNcRBaVkCADPzzHbZjxPG2P1YvJhawd6e1Zv7BfTWEEX4ybKWZvBdS3SnyM",
  "key8": "58c3CYfF4eB75Bk32vkvEGxi2FB5hnUw1fbjtzXLjxbB2ukpnMx2ymbPJPB9E8cWxqAgjyUsNg3B3hAFvMTJoVo9",
  "key9": "5HVg5XZfuXMGXvMnNi8SgY4WeaZ8NrFLoKCqidU5LaM7mjdNCmiNwen5FHhsnLqgqUg9ARepk9kd68Bn6YJTCeRL",
  "key10": "2TuJTNvKMn21dTmy7uhTWMgAVBmLW5eJbjowS7ELFHV41PrE1deP5LYQUvaD2GnLY9B3JGGfQ1zbtivoXaAQg5mE",
  "key11": "5mne8R2Y9Ze2Eev79jpnc2ZUSZDXcoZKMYEybe5n2UyCToszB2MkwVUN5vNBtAZjwBPbGucjFGAFUTLxdCEHaKS7",
  "key12": "5X3c4qpQXoRFtgDPESMi8f25TcDqFhuEURHym7Je6fPVGDmgWAP2ztjPeFFqZfPiS8fhrXAC3d16t8QACYv8KXj6",
  "key13": "2sp7PX81tCcwT8Xo4hv554RpSvdpdt3sPAm4uAhyibGyF2vtjB5QHVoLcNk5AK54NWL3ZHd8W6sKoRZ87r4EaEEJ",
  "key14": "3S2VbswDwWUePTHMqzkvqZFF52KhAJ7Cs7HkZuK59yRypKtaa9sLS5PHvZFBLUaYTCvBuLkojTKoGfS2kgopJrXc",
  "key15": "uKPeUNA1PhRjiyXBtFPBmsARQbCraRHVQA9BzHoiTU5NnE9eCxSz5QgJtCMDMtWSSVLxo4b98zyH37r6j2GPrPq",
  "key16": "21DH8jLmrpQNrSCJjE2Dbs2ihDcMLvDfWWcx3bfMickuAE7B247PcADEttxSdGtbfYkYERiBtA25cwWVUh18iVjp",
  "key17": "gQd5FEL5N6UYaFa6pLPPnP4jJ6KhMWsovUhmECbMAXJqA5UURj7ZcskV6ZMmyuGNy8LmMwcy6H2io8gkXeYffVe",
  "key18": "4CHdZ2eZs1Un9bNaigH9EBWbABGVcdM6BpPMC5fALKZYXAHAcCusCteYuaSjZUw65SgKYSKEYLUd7VreBz1ejW57",
  "key19": "2Z4LDAGKV7dgVRdJ1pzPBywQb8CwSfBpugoKd1TdqrqyGVd7yKoL1uQpiSSZADNj2HYStEMojRa67viTv8VTvsUU",
  "key20": "5T9oLpzX6uouCnQwJ2CzQShyHuPphUzskpddydcwNYmVC2GghCLv93uF2koNpHc4CJi5ioR8qR7diPdBj5v7wD1E",
  "key21": "3endfgzj1Nc9MMhd2GWCN9ETWfZZ9MFJr35uy155s6iT82bS1TTpESYupyecUi6JuuBMg5gwy8txa2jfPRca66X",
  "key22": "64cT4SskW3jg1NBJrcDQTjpxKT8ThDMdJdjpriFW93qeZk9Mk8CxMuKt8nRRjrNKToWCozWD64o5s7hwcyiNm9Rn",
  "key23": "21kwpTrqgJ2hw4Ygw5am9rz96Ussb4J4DdyEq8PnYoi8iAaAEKWNkhe4vFWz5mNYHyQFzYaCnJuC24e1J3cfH9yC",
  "key24": "3s7J9ySRLXuKHEP7cGLpScXFY8Nf5kWeRxA2Trsn2BnrvqCoab5aprpQo9sEjHrfKbHfAUY2EaW1BuNLExYexBsV",
  "key25": "5yFecttSQFviww94GfNXEBXd87svGTfuzpTkv2GXabh7iRAiPm6vnyCE643tCU4D6t5yfoohviySzQHJmQyj5fE8",
  "key26": "5cwJ895j7Tvf5kF3WufxL8gYCReEm74hngvcn8qGhEfGBhMTWsGYbXVssDs9fXJg4773YhQwsnaXyPVwRcGgc34z",
  "key27": "5AcAMYmzuWbrDpQTDR7U16Zr5PKRe7QzBGq31vTN8nSnAPfUEQtvKr5XPGCorzbAVd42F2mowntuqoumv3tw3fiT",
  "key28": "28JYoAdt7TCQ6Exskiva4mXcjcRpcKci7QGBHZPuZjmLBjTjLeY9Nx2nnjzcqHNmddSd5adjtGuofjLtrqYNFgmZ",
  "key29": "4zTBxD8gauYsKVmAaTkxjDJWw9UyuFUwvvxCH7XDRnsdhXrEL8UF6SedsmXN7Xatywh8n51MssvqB8asFnnuXfY6",
  "key30": "HnnhrNKtQn4yt3A5PYgjp7JZT2HfPoUqy6LYtREQ77FgENZXHm3R12uqhW3w7NAWUt9hButG5ETgqZ4paauvLNh",
  "key31": "64QFA6yymG4pWKnyU1BAvdtVUWXRv32yThwC6owKdX226L5JdDooYZ7qPtfr38iGVSrrVpynV45LNUykJbWLz5b6",
  "key32": "32G37dnHNnnLjnCVcGAhhcGMv9GsGg2ewEz5iEw2KU8fZaHmxkA1kxmpc9Tsivk3juSshTytMpJN32ae4FSz8WgF",
  "key33": "5y4oq5vqGYXHdxsepNV91gFDP9CBvHCgbfZetmSaxbKYF87xnwoYiUpfaAm4X91sNbEfWcySPnjRMevJbc6kvr1E",
  "key34": "5MxWiGNrXZBPfmhCTxYbso9sJDbChp2HkmYFywcW3gJc5dE97rM37U3vXPyTVV1Q514E1CYqTDsnwYUq9cXwuzNd",
  "key35": "4eWCJNV7g2RPBj4ZbFKYQZrxHokVtdj79z2DkycpwhFKVkebFB6jBzg3LhQ3RfkbXbwuMbikxNgQviz2nuz2LL1P",
  "key36": "4M22hXuKdK7q7efg2BSwodWazJUrZZbfoGsyBq6XmYu65FYfpPK52siEtEX3RSCBaQcw8zprXjtNkDj5Kk3Ymrh5",
  "key37": "wgpzJRdHxgzKwFM9tEaMSQ6ePtnZ7ToAYyrH3FM2cVkGDm6hLRqU8b44rgBVqLFTny5xEaJ5Ri27GgdyFDu24Xn",
  "key38": "3MnB1dEDVm1CYux17qeBtydp2b2Ho754Rr2jeoMKdMH7DayyMakabdSJCDh1c5NHgf3WuofjT6X18CsfBQzJ4x8d",
  "key39": "4hhsf2XLZQUS1Z1psX6xui3n8bn7dD8FMDKp6L74dkBDTfQtNsC5JocQcWW2bnHG2c3EW72CYDfMJnU1z9c8Brbd",
  "key40": "3z81fzWHgSzysnJRMeFX2VP2BjVsVqcC81JC6G9MMTSGpkqDbgVhz13Au7J2PQWDoS2jvRZZg4FaLZXV27LQK2i8",
  "key41": "3oPgJQxHG321CzqEjkKpMstkRQpNP8XyHxzhT1R3biXwnYWn15AurrqmuFSbeoAQMGR4c94YtqPRAQNGNLLRfjnd",
  "key42": "UVqLJSnwastWapQ3aPwUHTXRidzL5jvJfrn7Cz1rQdVKAJP6fvnp5BGrorpz58BVaRfccpktN6yepHbSELHV1Cx",
  "key43": "4C6inv6gDW5cFzqFS3bFyZrHvvLcGzo5iswDGvccEp3CNd3nF3fNTpg8VKN8BD2356QdYwhPyWrT1LNuzMSJA2Qk",
  "key44": "5rdU98U51aXcF3a8scducC2zeWTbagQmqDHENgxa92yr19BxvaNEoTCYWtZdVHTHULMAKczYqbtYcE34xYpEacy5",
  "key45": "M7G1TDQu7Mr6t4Yb1Gi9YtKSgZLYDacUFQ8q247NdbXSkcex25y4ERMCJM7zTUvDi6y2qmbLRzmiHRYvkzhNdxf",
  "key46": "5btspNwb43a11PMnfqXsrzVHYFbuGWoeWxx5aAFfwZGd78PosEJBMGcJsgKmXUx3hD2rSGvxFfdeLyR3ZdfZUe7U",
  "key47": "56aMtbKsGXoCkeZXejAbjZRHrwr7JTtPUb1M7xVrdQtVQ7NwpAtz733W2rdR7DwbBn9VmTXN5Arw7T9j7uPvbBB1",
  "key48": "56re7vDmcUFyb3SgEjuXm2BY2Gu1RE9vKTikwdT57Tzvm52aY5N5vUWw1TbHKzMupAdQ1Nx1fBxKpNq5jJwU9vR9"
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
