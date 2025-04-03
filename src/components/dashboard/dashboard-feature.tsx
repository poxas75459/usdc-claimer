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
    "4yzpewq1ALw87n7SETjtYQM88QDvrGqe9Zek3EsXUsYQy6KPmX2pi9EvuNhFrJp9Vj1YMvxSVeVCtXUysVGBs1UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wS4eo5ywiEXLg3frU5gbD3r7VVqa1QmSx3fTXVb5ven1j2guGoRR1WX2qWtYfxDqiy6m62X3rSBGr6wHEsxtntq",
  "key1": "5VBRVFZvEexakLU4XD22pEXDA2frZPLnBGHCGYPX3RzytVWXHLhvy37eaedUm5r5ypenMriqGayTtK3UgwUfhuMA",
  "key2": "537NGw5Z6CLW4H3uS2xjnrhWVMPWUfcftCh49QPpgpF2C4dzHt7dAtBdUMTi9ZGSRKU55XDThujceXKmETEdivbg",
  "key3": "3MBhq5T1ZYxDuzDWRAHwN2empayL5te51FEHPMSwWRbRKpaVRRCggn3LNEhAKZMkLNuLL99L7DvkxA7dA3wzHbfM",
  "key4": "5sQSEF9RTsZTqqVFRgrLBqnn3FpJTvHPpaZret3JzQ5GPKLqMTLT61DXbZnfZUYrrgQrd7VBNtMnjXBdM3Hqz35W",
  "key5": "5iHm3X8rKqByRFT4xbYy3kffg8xixwYzTWM4dHcfRaqoaX5BpSwEGhektRrTykqeKo7d3ZitDbkKNA8HRwZv7nLT",
  "key6": "5BxPffi8rZw6p4NX2xEAtfajwzefHz9VanYsrmcJRTnVA2fJpLeNckDt3fb1Sv1Urs5PoAZZwdusySsi9SgUG6mD",
  "key7": "sLPUkMn8cVsQYr43uJbFrbJ8zgYQRE5C2yo1chdbZqFb3zpWSgxzJEKLJGWXFdYgUw1kLHwWJGWxbwtmztjsBgY",
  "key8": "5So8Jv2jRcRJa5WoUDYgVXhpABj9JnGbEE9K94vAEH6WgYYYwqUZL9vfQWG5t8kuzMnyBxeRjV4tdzxFtKgzWeHi",
  "key9": "3mKsk9x2X8zVvyd9KCYDzEfHPpLjPTm4P2T4F22yLyDGidD9xZ5BY1xxtPXyYjqyuUNPztnmGEfgPtkthpTNNTg",
  "key10": "4pM3AYtH52YGVGwVnTLVKkoKLCxpbtKWztxUZwg8jqB1Bi9LQidVB4fH3ny2FgiZxY4bPFduJbEpmH5KuLMCygAK",
  "key11": "4FUEySuM3mpcm8RZiEA8cUBF2eLwvHWi5fhBALaSWPECr5eSoBu2H6PeBBCKpGM6Vm7bdffU4MXoFsC8CwJ9MUmW",
  "key12": "2LM5xHu9Hv24EftfLRaqF8AWx1E8aRa7f12GCf2hyfEha1YuRVsAfnapfi2MUNiQ9N5oAo3fY6b3ywjaXih4ggt8",
  "key13": "256awP7uhbV4WyBAqUknKfm6WUnvEvtgE6M646pDQjJ5W1X7w7FGq3t2BYkcJsq3suFiJzSAZhJuX9gA8j92PcB8",
  "key14": "5FbWWPEKbq7kefjDagoZDQuzJp4YPegJY3F6rhCufWJjhm5qPM4CTVKR3AQcC4RGH1zTcBrPmGKX2SaW36D95yV4",
  "key15": "39sEqvQMeQD56ZarcV2eaXbJmFHrT594aEMb91CbKqQZqExhWkPdXuJjK6eMcKMxErcCCz8BE2eY6VtXhSnSMzGu",
  "key16": "5nPfJdiPtAdmyRWPaYzccBhFigFDjUJyHRwbLwu2pxNMnQAia17MG79B3CzxZcUZcYRmHkuW1maPX3NZwaajKYk7",
  "key17": "4a82WkMckL37uKk4HRcRzSrAmUKYSpWuXD7PTxLnHUwWEwAtJ77VHMzfYv1M1P4sWWfZLaPpquBdLKJ5PEzUEDwR",
  "key18": "2tgL4sZXp2ytB8tAM446EZXHy3d9VKLL47s5KqbEqBLVdfsCuSKCjwufrgV3cLqwsTyPZwcyixBKkiLAADnhhaCU",
  "key19": "2vpsn7UBRfqJocHn7mwUN3znZvEiZvHtM5zZZDBAjubd38RM7nWjofN2Gz8L731rhgz1N5f3gEM1nb2vTJ3aRiUF",
  "key20": "4PDTM4SRkadDQkN5BqwCnqjW3bPVrjBuWss4wcuQA3HkUJ6G2kLUBFDQ1Uc8DQqXdaenNLDzBaUX3ZRgFnjuUjXW",
  "key21": "ELkjy5v4HnQswbzQsa2vfYoSW2yQNtka75KYNJfb6eLCJHBMznPbACBqjyNRT9fX4F9hLbTLn676n8TFXgjrbBQ",
  "key22": "7wE53H8e6PJVKdRmxbUDU5ziJzSLdJZJX5AXtjx13DeJWsSRkVdAawMZm9r6UQGUxH5KUzWPkSSmmgnAabX87rq",
  "key23": "51zea1Qac2jaP5TZU9K7EwmMzdaLJRo35yiPskk7etwStpvpBnwwB5RACoX38vH2i5ahRbcGRNGfrdpoqLpshVhJ",
  "key24": "j2XidsgP2BYwRzXZiopYNDT3xEdR5gjyJJMtCzUxiQn3xf8GjXTVhvt3nAZAJ6xScxN85mi8rmxKo6HpQ6BQhur",
  "key25": "2wBzDsTycfi3QksCQGkLM1X34hvxCwn3qi1cDJLMkbUDUTGPAZfDetHE6dFd7Q2jU8y2Y4vUgMSTc2TEoDfKKiST",
  "key26": "5Rvsbxe5qz6NAv7azfY4FCCuBH5HnkjyVcMWyDQrfepuLjDSgMaCr1zjtCi3F253ggihBZLoStpYCfXS3guV4cfo",
  "key27": "7p2bwrtg596YjvypwS3jJxf29ovNEsEZ6bK7z5m4m9LpCtYej1tiPkcyrwb2AFwdKMu4kGZa3B3TaWJRKs6EXkm",
  "key28": "4ZLTGZwJXsu3E2iS5WaPNahJq3bVF1xWrsrXwXHLbPsF7neMigv7zAKE6CnoepwEML1TWQvvV1LBBEda91LFz6Mf",
  "key29": "3CTtxnufqhpp6R8NV8T5TC4s3PLF2gRAxwYJjnMpfTLG55B2ufWVqf2jkq9LXbLyUnNvFLisWC8vHWxm9PjpQQRv",
  "key30": "TKCx5cjWwjmyLtPVndc3PMX7pDPd4cFMBuB9zde49iEyfcpGR7XnSz8BEcrCAjwcNTwQwZPJ7Q2ijqH9PWXZoEq",
  "key31": "4Hor5fbNCBdtv8cHgwERuSoXT7VbLkm6uawgmb7EvDMiMfnPm3A2rBQSCyXRH7QKxDNpSRdE2V9NsAjb9eX4dFu",
  "key32": "4x3VhjwpRfBx2gXQrdKFNJC2fqpJWxpf4uMaudmGCCEJdD5NVRGPeWjbDfJKhiSE8uu8Ks8bwtQyGo4c2b8xaudP",
  "key33": "3MeXgskYpdVDCj7y51Gtjf2EjYhDWxsbLMGWnpyHELxP4vusDwZBSncc53prUBaR64NuYnuXVi36Sm9Chcft8CL6",
  "key34": "27ZRxC7fzTVYnaD1adiJQBNV3yYdLk1k4PUT3yzpXGpBmXJxeY6wPqZeo33shfPqc599xB2rmJbPcrQLc8uio4qi",
  "key35": "3BpA13QytJP8sJkyHJwg9i9vc8NFxTfFftjbzJqBH16Vre2hcmXB8r39NUWMF4yJW7oHgihx7e4d4MuEn1zFjkqo",
  "key36": "wrMVLxGCjkmoMXYsjw5ke3Z3CLGmRdFECU9p8GssmfvpqWypUD1RXo1GGGrY1cH17C63VxqRqEQDWReN8MhmYTg",
  "key37": "571LKY34EA3YrNHtFPQTZHffzTVTPppQxwpjmXHjy8DTHKVneCXNbAZxw9WYmtnpasAXATGt1LaJhQmQVg3iZ1q5"
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
