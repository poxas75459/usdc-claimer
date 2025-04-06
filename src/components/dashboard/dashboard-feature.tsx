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
    "41Z7o2gUSW12WAmKQv5gev2EsPu1tUyuXspBG5zuRmi4bFdvzuqVTczzLXNySbvy6tBspS1nFZvrqeqkxLCaoenS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDkZqtgTiZaQfGf9m6wBDvLCD8FsBP8c6e1fRVPnPTUvzA4p2dzWK1dHFNcde2vGuWSwffsZUNj6xXPFKyLWuDj",
  "key1": "5Df5dMomi5UGUYGahGypFWyHhkvwffWYvLUXqH21wfnXw3spBseMhms1nwZgKjmtgwrecx3kj8Vx464xR847HLkQ",
  "key2": "2k7NNGrG2ZyRRcciF2g9wDns656rpG2a1KJ9FYyKecLCZtKWMu8tDoDnBSVRnuzu6cTx1uD2A4fCHtiiomr2ADsY",
  "key3": "4KbDcjjUhVz9zybMey19WKJGxbB1m4Yna1BYHQDfwBrAsgG9rjX7g8JaVY33gE9Qw8TorW8SNJPy5Q14VuS7imUH",
  "key4": "gE7MC9XmnckRS3FGx9oXuXbud2c6vMgLckZWZeHDZobkpxGj31p3nTnTJmz2FpMGbUcuBd7u1bkkenVW23xXvUw",
  "key5": "24c2HugnFUbQ1db5hYuh6xSqf6sZVdFFVzYc4XHXPxt3yeJ3LH1WJbFrm6Vb8vPesdWoKaGUjQm9ADbXLCR7ND2t",
  "key6": "2R724hfJXDK1rVoBpRSsSqWWS3KHXJ73HQg6syYKc5sPsQFhkmfKWjaENviJkLhR1bAP8s1dp3mZtA47HNEoqrT2",
  "key7": "jws9WXbDd95aCsZm4WmJXXVcFKQCC1hkgP7UgButheDhuKZTQfZpaEyAdBFFa4iMo8F2TW7iGvZioS1X645kGtP",
  "key8": "4e5YvBH7kDPS1mTwkEYeMtmjrgQUwCtuyrDqQ2YqpZt3dZq33i8aqDvzdLMcPri23XNKQx4aRpD43qejKVkoPRRd",
  "key9": "DUAGiu6UgnzhGZwRC2a9qP4rzYXZDWqAV7VeZRXXPDKU8VU3gRn1CFtWQjrfT4sRyNzazhqcNm4gEMWAqdQpSHg",
  "key10": "2JUppm9p58P6iNVbp6kT2kmjM4NcEtqxPa65MXrXd6Sj22T143Ma5nTZBzVpTVguzjamRYpu9srQt7gBU5nX8jc7",
  "key11": "3JTkdrtfXdTiQaEWsiCuGvWB8Ey57WPpn36FHc5GwbiDLStiUVWcgA8KTNw73azmdy6kzSwn7iQfAUHEVjxTvuzk",
  "key12": "2yYvw9zrPfcPgfoTF56vHDmJFjm8zVh3rajAdcYvxERFwP3AKsmMsSSr2Aho83PLqtc9h8ATDtQYExwn16oJYamQ",
  "key13": "3q4JLqY1meonY7JwXnoVKKMzrzma2T3noUwW3HNCbiV6M9sW7zn9vPhchSizztVYXZhmXdLtxhxrRfNLxHtU5mae",
  "key14": "3gGroCLWwr1dMWMik56ZbaQiCU25KKXBcZChRW7BrYcDcAxQDPGazDKhh74URuKhty86aRP9zLPX6tRGNVY5YVdR",
  "key15": "2ve1ciyn5aLMXQeaegGE4fh5EAk4uYctGUHmxkvk141c4tcJyuN3sMQNLDvkptQR6duZ274Go8X1aaYAYtAvTr6a",
  "key16": "381hs9CRyah33C4ePhoBE1D11JBVPnyvQ8CeguZ8F7U3Qg3G7Ci5m9VtbZBVeF23oYM9tXT2DjvALWsY1uMCfkpa",
  "key17": "38SZdFAz59trPTLuSMxEF4ZmJ9HRMC1sbsSZ6zRqPop5NE11yvhCqKRCE3tR7AEkFYWtDNSpPf8eqWD5HoQJz8e8",
  "key18": "35sGH9NEcKrZ57V6MUBmKvVeSYmdp7shs9LLx5xtdz1Qqm8bnJtrQttEJe8zfsJtmDFz5TeGBZHRHUybdDtYZH5e",
  "key19": "5L6VQCMd4x6h9Kf2MYYXT9TKbwAusyDU4mnWpfaVUgaMtaCJaBn3YPte3UMABaPNqKcudWwfdreoRgQDJdYotrTR",
  "key20": "2YgUAgSDoqpQDWLfV4wRAVm13QbJKEDaEZacyKgwpAS5JoWy426Ce23d8htrtzDY2bPWCYZzD1rtVyUp6Pu59d5b",
  "key21": "3oNgyT4QaxjNtmwPet6nTcM9X3zijmE3scqkernXMhqZfF9nusU9JW99LZykAnWpWSor3P4BgejYda3NukYnyYuh",
  "key22": "3bWY1ntCsVbLnD6rTfn1Tcy1HU6U2GB4UeBuncuVJ7faGXoASNyCefgCuuvLXgZk1goSrEb5UdbvMUcvb6DsH1hA",
  "key23": "2AEHvd6boh9uU6g6EqhkYAEZknnfvqGiQzvzoNbfPRtjmXPnxm1ePXZg4b5pchoqiroYS2NrUeaDNj1Hu5NxFG6Q",
  "key24": "Uky9HvMzrKBvrrtXQWSZTbH8WXSFSsXvjkyuL4FdW8c3eg45qN58xuYD48ypN4hpiDRFYQcbWsCWiFFxNeAiSJA",
  "key25": "53je62aRReWTcjT2qQAgn9dD47a3Krzd2fy7MyC6N648kysdfARHxvwmp52GAc8Ezu186SeQ1VcX5k1LAGLrwxdv",
  "key26": "4WWtwe3sHHzd3x5rhFzeW4gKn3cc93NVUQhoRVAXrzkyXwiUBreo2QvXv2Td3JAMFUhkgDVnQMkedkKUKXX5SCzq",
  "key27": "3G6rpcDgcjnfu1DMe5bSC7D5PdLzS1HjUHXyHsTvVJYE3wCHBYpsZ5KAMHniLbgUSw3j8EZzCPQbZSQf6i5ZSk2t",
  "key28": "2bNNHXbYeq2ZSmVe5vevBGw5b7KZig6BpHEw8v1H8cY1HeD3T2GcBtJcY1L9z2c8NiE6BpSx3WTFaY1oP89AU5rm",
  "key29": "66BhmHAwPpotCUBE7bXQ42auJ237stJNUF2XTFDf9gryj3uqSGLfay72669QHDpAvPVAmNHL3ZLojhnbcvoGfq1Z",
  "key30": "2iHxUpToPmJ5nwitvbTvdxYNT5ZDekqN586677zu8VyttkVSvLhZsfx8LBEQqRT3EbUbbEyoMX5Rc7U2gPn9ASi9",
  "key31": "2KAaA18ut3ohZBWjdNctNHCj2CJkuRuutLk4rg4M7N5MmYfpj6YTejhw5w622nRp68N6nEYi6QiBPKxmpUeu15tw",
  "key32": "BtvDx9ff4SYoMvUR6Er5zz1zkae15FYwfNs6qqkTdPVS2cnQP79uwG4AemzqeaTkPPCohxM2ijTuXyimgzU2DLK",
  "key33": "5ynFyiZ7MSrgP68We3zgeEN4Gco4noeNyXmATC6oJRvJhXVvUwhCYUMYRS6XXguXf2KYCzXG5pXLFRZey6kjTEuo",
  "key34": "2Rv9xLj75sSniPMPs2oKviG3SwCMd5G3p9j5fbQMFPrxcmiBD23tdEdLmJ9NwX44NTP9d1Gg9xk7cd2xFPyyRdBw",
  "key35": "3qBYKGCT6Jn5rNrR9yyEsn5ahK9oCtmxS4CtQuXmz4UZ7o1u2e8JfxTCEX74sSmL3S7xLBqchg33L7SgoCJPTs2F",
  "key36": "AhCZJYmx3tLHpLnVfr3GVHLuqAwoPbGsq3zQpqr2uambbMsEnRpzhjVKqxXvCvBwh56CZpRuP5is8RZbpHZdzxL",
  "key37": "5kaLYR1kdNMzaJeabRYQpM3zm8fcFCMrW9FZDQdPQck1y166iBDQWhf39R7ZD4itwMDTvh7hSvsmpXR1fSXhPL2B",
  "key38": "3pWqQ5WntC6jmVCuUNSbNCxH37Zm3Joz61No7t68LKydbwAknLci9ggmE6BLUfr1wWCozckEZdTzasGRiCBmL7ME",
  "key39": "4u7QyKat2KLdU8ZYMF6Nc7LEoRRKmPZ7o9TA11oyEm5xvPX8HcoUbPqh75pVP2GDbcFn2y6TENAx817P4WiXAw5z"
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
