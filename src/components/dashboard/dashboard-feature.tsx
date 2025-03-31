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
    "5vm2qQcboYWai6DvP3NtUyF6mdj3JShWpR7nPBMQ7iRc7XShaDYpHbrfQapCBnb6kbN3HWN4tArTV7vzmStuqmwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzKkB2LQyjRcdSi6Gv4iTPUWag8B49JDUZyjm1Vmmgti6TpLsZsVJ5bvXWMx9TKrVSwdQXtgqPKUJnP4A3AVeDX",
  "key1": "p1ZZbKcE8EBeRRTNVhpS38H9fyE6ccHuLGFAiYsJWRWPub9UZBdjUHy1Eor77q2fCHSLGa2Z9BPuK62YPe42LSB",
  "key2": "2CG2UspeesgCZxwBENE2Foh748DByHLyq2N5YFJimM3c2RdYMpytGPQfYiDjJMJNunhMUB3LVhoSrwSpWF9feV2r",
  "key3": "5gTNEAViaWehtvvtj56sKTD7nGdofRPZHPVs8wmE5a4FCmEiaKgWVsTrsKL3xTktJ96HbhA3WTFdAMFAL7Wr4aKL",
  "key4": "2fgVP5h1v5RvbJGzuh4zfGym1cMqAxnj72y8BEEFEihiBoGEpE7hYPvwT4hauREwqhbE8VfYGf2jFL1rKSZfAuuc",
  "key5": "3KKMra7tkA1FNeV1ZDusDpj83sLLJTpDa7DCEWrDXmkR4WZfMeuKG2LBFJmdY96u672HW4NSHHATayGbYtSD5mYm",
  "key6": "62KU5e7LaMNNYLvDff9ygx3fqKsxVzL5qvUK9hRvCLDaVNGfTrgxnqnYB43moQNYswFqFUU6Gje4XbhiuC5xZ1sK",
  "key7": "3XxLN5wFYVAqxLabeRSGfqcogXUfeKWka9c6FVFZRwa9WrnyoRX5C31rAYx9izkgYSv1aWCW7eVXAGj2Q36cPGWC",
  "key8": "5W7Lbf4nZXUoGNnY53VyUoFDz9hxA9NFfEcRem2PpHdy3TzBh4uDyVdf4CkMLPyajhXKarmmggyc4WUCXSHDGoB3",
  "key9": "5iih3tvwrBfD6VECdq8XY8ThFKtyHcMpHnfkfBmm3BbKH6NHpwXV6c4XHEeEanyzNDKDCiTR6pr41kXsUtJbcdzJ",
  "key10": "55aYmwcS1pbKSGsaedQPvyMPDbSzbHx1D4ghXHVpLFCxXRLbEUCAuWMxo2cU38MfkywvggniEAKNvQtTBnpPhf6G",
  "key11": "3n2JjrvT6netHrVjM8Uwye1wzHj1dFei7dd2At4U8cZ4qrkN5ovAdje6SXZowF7YVNkQj4DJJALHbpxJxaFtheJy",
  "key12": "3XLv5XH43W7ivS5BnAjDDadywkBeYs2ZTGhE15GrYwh4kEKLiCzE32uA7Ueid5fqSxoMSMRia1xWwVkbFtvg1EwW",
  "key13": "3Zhu35KQ3FK8YN51vW6UiXKBWsiNHcDumfFJYXEk1ZHhYFrYdTKiGWSZ6LuN1DXQiLJ3GRXEzGjGhU3XE4KrjJ9c",
  "key14": "Rui6B9ArLL5167nkJMmpok3LwhjgsQosrwAXgxtAkHAcUMek8q4MfaodWZM5sau8dfKuBCKWHpDqLo75YzEPrNa",
  "key15": "2hLzKKHHuJLSScW1Z9QrS9A1n5q4kii3odHkAn21T1pcKxq1zDhtQHkf4AWqSWdrVeGKyZwrzrvwpxM2d6dfEEMW",
  "key16": "2xzTe9MSczwWG2Bn7mhr3gXboobfm7pCjaH8QZgQn5EEwnjzTQbkFu1nnqFLSZZDt1tTiPDoohuKq7iXZeeTV4eT",
  "key17": "2uVeoojK5sLVM8P8toPyRKqCjze6f5HFvXH1RKr68PGJeBFRYB1cz8EqhcGUQamayG9QESb6xtiYhKR7LybYnuy",
  "key18": "3LfKYEEabPbCAXhr7hLncDvRCiRdND4K7tUNF7EQsZCRRinwpmaFCmeXE4ZxgUa5wM2zj6o6NEdWFcDfNTVPUuh5",
  "key19": "2Ly2kf6RJPNTjupmNKQ3FQESTd5RFDxa3vLqtMc5e5ScNipkMG9jDEomKUttM9DaSaoFQGdV9e1MqqNA4vWJyp9Z",
  "key20": "2mQVRMvZYkAnkovKCEqUAXrAGmVzsRd24LyWDazEjY5f9wDux1zDuob7WmKY453idBh4pNjsqEAfW66Na63UUjWu",
  "key21": "4kEBF3yu8W7xAMNfTSPyAxZAGzgP4bjD6cLDd5eUMLhrn8U4gwcKSwhQxJ7UVYWMiGeV2EenxviG6tnvEybvF4L9",
  "key22": "4ZE11uhpojkUtVSyCmzUGEuQd53nAJq7kB6hxEfAfkCi4SFvKQFzU6HRqRFGG6Bg3ywWMcEh61Mq4AVWdWWPu2mE",
  "key23": "41do7LfTyVU1MBjUrv2t6vAztdQVUtaC3ikWcNHbD8fjSHxqsjqMfQh1tBbk2YEd9EhmgF5sYqzUeFfHBWxKVtkA",
  "key24": "3sftispirdToosRqZ28rSCU37PGMeREKTghaY9UT5WVLyJquoLJFerR6YFPZBqPLRquZMuLYdtidVnRWBLztKARF",
  "key25": "2uRfYm2hFfrhGciaCRtNZLUKhoMa1kjzPJ3AJYEUgmdX2xp5Q27JggodPrsqZQCyAH8TG3BW3iGrRZyEBg4iBnJ6",
  "key26": "5EJQ6XewhJXbbyYxWuUkuBg4RN3WQPcQnkh5v9zY8jTPmy3Pb8WJG8X7Rws7ybaUKbzvndUjHtxRTRz2aEFYvv66",
  "key27": "RiYcJcRPKNdsBcvivbFRURwd5vAVNDbrYwZhz3VquMQ2PDbVoPGGrnXt2K2krJWHj9roo49x8BEapUUivywbMnu",
  "key28": "4ivwk6RCfJZB1gGrzCEomnrTkfW3dU45BwR58RpV6UD1Sm1kV1Z3pRLS6FQeY6HJpX1vt7pxARYWruCLSPRLfRAc",
  "key29": "4HckjqViuEi37Zh4R2P1Q5bi1H6Xw6LF5vunw4z8u9yJh6BRhbopRxfqDUPLxKYJJ28C1MiRJMemPNoXE9M8UKxb",
  "key30": "po8fYUUYMVzJS8aNrF5wpf7nkveLjhbuiXG6xKrY8rtyZ624b4BQxHmoSqPT52umu98E47kahMcqgfSGc3s4GH5",
  "key31": "3mzVCqKXAtRZXBAesJWCVppbUdAkwVdrx9gM7uWNSp5UmMqP1roTtYkLAXNnuKjYaJpBXC6jrPT7E821iJW6afve",
  "key32": "3Dbeg9jPF9D5xFbqLioxJFJNc1h2VChy1SFeSDhPDgui18EH2FFULVrsu6hs3wBciWJSXDRZqc1G38Z8Hcbr7koS",
  "key33": "5Afh7rsGirhXANED486P91c1TPvAnG3c4RYBNvxpKK5vqpnjwA7Qk1wBWitCRgdkyipSQMuENvPrdPXJ19xGERf8",
  "key34": "3iDSeJYm6agfkDBppqLaAuYBFFVLi2b4YA6ZvpeL26axD8VgAY5q4Jk2cFZBPZREKwcpHhrAf9M6xdoSNhNk736n",
  "key35": "2nujvWFc6RSjheDmEzDX2m1mRdTEgSbtHqJGiQ7xR4Gv9yNEFstRdq5sLt8GDPPxFDKNWJGCQpFfqJWVApQuQUNY",
  "key36": "4V5SX1hJxEoGuUHs6zoJ7ZghZBxMKJe59rF1PPkTY8grNK7FDjchXbFi9m3DT2C3XqPh2tbtaBqnfcmbQQFvrBmP",
  "key37": "3stiSoHk8NVWfPafVwf4Ken8qGzoCbJe8WSXaK8foWeQzfXZFETNm5d4B8pzRvKx57Ra2XUM18gUWrduYZEh4dKz",
  "key38": "6pKiGQYoY9yhfCWGm52jiCZ75qvaY6AUD1sqUPV6LGv8VUYuS16i1buazm2eH2ru8ycDL3zEng8bfukCevZ1Wvs",
  "key39": "3qxdisJY5Xw4CQVRJZ8vxSbGu66YfaAs6JYq983HUaWZBr7zfecsrSQAZ69PiyZK7Dsp3okZ5qH7i7jGPEPDKPsE",
  "key40": "AS579VfXs24e6bfdPrwHbuo43vdGG6eU5DsAcdfjLm8MH9F6Jta1j98PQBnvTUzq9GiRooXtGdNtapFarjkSRQS"
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
