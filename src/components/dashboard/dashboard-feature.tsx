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
    "2WoUKqTQRALbYFtRt5tfmMQf11pvgFSA5bVfcz53EUwWnYhnWHMsJWhgdSRuGZZXjvUacGw9qjy8XjWAEQCrKU3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkjhoZi2sdmQ2qfYZTvXkdCBkV4BscdBJaS8jdaF1uEi7Aq5SryAjgSdVhZgudCKqYR5H1iwcmG4Wu2SQGzKK8r",
  "key1": "3bdFBSdTJfHBQyGfKv49Z9Msu6ttv6XNdXK42Qd7aCrANReAXayTAk41E8iqvUDxCN2mFEmqYi7DDJJdMGxMykHt",
  "key2": "5uXtTCWUgok16JVeQDuJajP1df1bhpC7EMjTmuhKDj4DXZrLRXmEhtSepLkSTTU2vz6FYdRQFboFmTZHnwkCyJWQ",
  "key3": "3FLdAdrCFuDAa97raiN2Z1vJuWnqAs3bUib4oYv58uxSuWPNdtbe9kmhJ8FrK9EPrbV7LNZQ3d3XZH1rbbtAs5VB",
  "key4": "6DqQiJVS3yafb6Q95XufgXo4rrJdj883iYDD1cqWsgzgKu35FZhtxwh2nPEGSPkVBEV8ihtJK7LNpDcQFHcy378",
  "key5": "2zYr4umCeU6UsCefUdSK5D91r3QFzNrDwWn1NKY17UeKVsamUm5KoBRkGRv3wdrKJSBRXbaBz7hmw78Ubnqc5pVS",
  "key6": "5qeJibecFj7HdmeU6t9okZSHGA8Qq1ddvRGk1RkFQrhfLL9eQX94tTx12ocfyw28r8Qbuqd91GhDeup3Vn1zK1FB",
  "key7": "3EbCJDEu9atdUwQZrEKUBRSjDxietjsa61tAB7E3LTa9WGn99dQ1k6knfDmBwZsL9rr12MYNWmvJGt9kF8n8ewyS",
  "key8": "3Mprn7E9aquTAC8EFsvLZMdP79p3G9F5t6NNCYauwDup3JkN4XcRHdXqPmfjJMoheDLrghTM3AzyJDNo29C1zQYg",
  "key9": "4QQPWNEfFiotHkzhoRNiTM1skBxjSKWZJFis6xWiJejw4HjZ7Ei7ZQNPgEJUgMRjhnL9UoQ8D5EhJM24gTRqUtJo",
  "key10": "2ZrnoaUeyi7U8cDweextwGPrXNzCQBDpduXvsu2iDTSEv6qvKh69HXRERKfZDR4Dpps6uHMpBNxkVitoD1W9Btyh",
  "key11": "3J8MMkBCd22GGXByFRDe5gWhFz4Wf9NAUYBGv7y3RQciaWymHVhJVJEvd7jaFFaURwghcSRQvq7H8ERX9dQBxmUu",
  "key12": "2X4tDfNGDa3ZLMGjXu34bRuWpn73L9vUn6bCRbjoPRUdmYVdKcYRL1tgwS8mYG39VLFYgB2HvQXmT9qnYqUJzzn8",
  "key13": "2gLCideaowNnXGug2Xpkr3zV7fPHQArU5GMbcohvjwUxtBuHUqDa2jJFnseixLZoT8hyEDPViok9wkt3VFHJnhLS",
  "key14": "9cszvDFVc47ZEuZNTyYTsVNUVzyscJtTmp9VAATEz7wysRm5Lw8KcBKJuXnRC3aR6ihywp9jFBRiSifk9dxcWK1",
  "key15": "2yo55iRFzoXNcnWTJm78TyZ42nvrsxUkw1tQJoSDZTxz6yGtJMkmW4EC3GPJ2bvQnRnJrN4pFKdGGChWwEGQ6oks",
  "key16": "5CTEKZ3EyhZ2BVYkYpYci9AKyMmNWTFXhAVJUtmPHpb5NNcj411xbUHLoZTVmVi3mfsdtyun1QMKMNXFxbeNjTYc",
  "key17": "4pmMr2Aa6hPb9xKMS6hoGLHNKA49Ko5sY3XBjKMuLjA7sGPCzDa2EwFWDcrCu7LPvbekkuy2sHjt9uZNtz9UJo8X",
  "key18": "5zPaaeyLq7qijT9WLAv6oDNqG83us336XwBgjL9hUjpYNMP3GJfcA1Dp6tf1my5r2QezkKHGY3FYCfJJ5ve2PX6a",
  "key19": "2iVJTpt1bbnAWW6wH9DETXhRyGqPcjPBSc84qrBTz8umYMgCf2wLAQ5u1vF9oCwN4TMJ1vNYWvtx5ctaCS3zPkPn",
  "key20": "3umPLFVCcGLqbNkQTanc77AHNbX7sS5qBas43gcMqkfmYHojaDy8JAquCkg56Ug9Pn7JvizzsnK4yKYtcfkxdQXV",
  "key21": "SmcBHUeLoXnVChikxrrwRUaFMT6rM6gNHMzoXSoZa7X6gz7Hkh8GdMNwVUZwPGbTqiBnijF3aTkjCZXcK1EiXuN",
  "key22": "5UBMtsX7fWkuJL33JiQSNkMwueMTa8NVdAPfCszJeo9eq4w4EzMGptrmcEVsNdVEtB5saWJgaDzNjRFiJbqMFzwb",
  "key23": "5ygUbk68rJWPPSKQAvppcS6rFB6kn7PxYFSBawx6SsyxNUMRamEAgQEawwRz6xuQCSD5CqhZpwUBYNobQfntrCEr",
  "key24": "53gPRCrZHRQKQUJvqsPUbMesb2uhDbtPj1s3MEDkwaKGx9FCyVZ8UXDxYNwSjCT1KwagbVgpkkM5nEm5LdnprG3y",
  "key25": "36GZYuLkq8fDdVmsc9MfetxindiY1w2C6HazV9yLeqZF7az8QE1UrbMGWbcGFW4xvY3rWSBUCrVJmJN5JVaVgbSG",
  "key26": "2Pps5Tu8dvHdLuKp6x4gwVbGNNeyk6mvtkppwqRyxFPr2nkzvYFXAsYUQ2PiQTvqEfzQtMPQaZa1Deg6s93EQARi",
  "key27": "413svsmJPyYqeiZrbH9EXhVwjXuK9MRh28bSDi1iHMMCuEzxYv139a6kMbbkJYuC3yRKSAuRETquye5EMfFK6wUG",
  "key28": "q7jYS4KVoScoib9gCett7syp65shnCUnquDjCHFDvQMnnbEzQuEGXfcKzswruPJaurBQet5XUWgxg6tbjz2WZCP",
  "key29": "3aLuEd7tgQVshxL4bQ1CGcMNL2ppJswsKnrK2sJTVTyW1KwQZcbWvQszk671oH94fRMSULwU65hCDPgBg4nA2ers",
  "key30": "4x3wsev5cTCWZmnBw9aZBFgzeZzFgaMtRoTfBAg6GJRvGn4cxSCikag7f8NmXBeDzbhqJfyykhjGc1Pi5zcpV6Hg",
  "key31": "5Z3fZLBFKy1EuQy65p1JMiFPop1P4CoqmbxLPB4m1Vdr56qHEfYLwimE6yvfshQYPDAhuaM2vDsVvtip6PNH6ax9",
  "key32": "4J8X82jJet6UMduefdLiGaA51Mwe1jLX3L27igY1Km6UBEMXNYqMRKTeXv4WkMXszCNWAQRmPBVhYLqo3L2AzcLv",
  "key33": "2pJg3d3Vn8tpPbWzxEo12UXb5m6Uw6SjDz2cMk17WeeL1WZaMqHRrRC2KcgDHKeicNEixtxc1nXvW4HErS6vvNbk",
  "key34": "4g49xWFrYQA5E1Lr1LbGWPQqa9n5wDjsWCstXt7sei8WMZBXX9gi7zbKRCg6DxLyA2a8rygApMx2UpFhQVHZFLTY"
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
