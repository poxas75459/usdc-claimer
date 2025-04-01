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
    "21z3Pwa8GVoWn7NLQMdr5f2cteH4UBW9eA7HuacU9fftgXL2dFAG85bFQW2rgKYjTttw3fgtbJ5P9X7CVKrRw1sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VH7Dpu5wi96CnMWpEa4G9EZ4xTF88cTk6knt5rgYeUNPVvhss7eLHnd2Kax9a1mszHzZtuCTKdKABBjMjQLFWrP",
  "key1": "3AvBL3Fs1dHbzAmUhhuVR9WnnqyHKNpfCRtaWnHngPipb1uiAKnRT19hym8FoxyZ36EQwFD1y1PJZ3PZ8wDeFfUX",
  "key2": "65ikZcgHpGCyzdxJeJ8KjpjSpAjhjNKZWQvcnBuvwbGvYQ2C7Rv3ehWebUy18GULmUJgSuSd9robQurHrh15jJfk",
  "key3": "615oGPudhrk9DYnZTbBMCVntNTFTFbFHjE7cHvY8c38Zui5MP8U17pTbTvdTmkhgFEG4iGNWJxXyrAoJ8L5a1Gjh",
  "key4": "Ggrb4oT7F3nSRaZ6g5oyd1fhu1e8edHLLSN3cGqt1VHQPg8g4eFMCwq7omhqdvPZhsCzi6hmG3wtL1kbzgTuNj2",
  "key5": "hBkeHKxA2nJqgnf5xx2R7gTb9UFUjAHi1XpfGTEnXkgVXsmy9XUFC8TqTQjeixQmsXkdfzYDTEqK5Kfjp6GURTR",
  "key6": "36CjF8npjTAraunxNyv35TisVCwVLGb8snA63QkbUW4sABc1R4RtGUmWMT1dVpAXyACCPZocZGyM7VkrYwSAoaDa",
  "key7": "34FCjw15T1UMAKZrMRTpQ1ZVQ5sxv6iuFV5SzRoH54tCsuuBdsRKBDRMtFufv7YH6j1FZ5482Tzq69dApAwUjN7w",
  "key8": "GqQC2CwSCGto7p8PdN7QsTXw21nidwFQL91KEvNrz5pKYZhtRKoz1NyGqGpDAuwe1aKwrub2JJV7sDECUudMWY4",
  "key9": "3j2VBxwLUFtLPUkFr3rnEacVaSXJffxbYM6dEbjQcvwpBidF5ZPHFc51rCgffzaRwB87SNTipqHqgfv4Ln7BArSL",
  "key10": "49U36BV2m76QQNCtMwXuVudbq35is9vNLVHRpJawY76e6R7YqAR1qdNy1RKK5sraFdC9wkoG18CH8rCqPjofcxU",
  "key11": "4nUjyhzMfJzZtbKpnK3cH8PdM7NpDTm3aGRz7q3ydCSnBqS3bfJCibUDKBPdiArxZhUupYnZaB8XVrzp1L5Uw2nj",
  "key12": "2mVqdoBYGpR1muFEAE5kNiVJ4SZLkWRKDaFZdQBYWV95vQsdyGEndU7dVbnUYuoXmtLy8W1E5DoJYvRZtrYkGbF3",
  "key13": "5Mx2THeisEJjAGy5YsuJsHEa7hiAc1381VWZGgNF2391n6L56AAdmumcv3KnvFPur48cziw4GJ4JQ9CgXhgGWqAD",
  "key14": "4898yRb4XRFtnCAHFfYvpeDVAQDDvErfKqXe7fRv79qYK84z9DUiiXt2diBXBZGBeCLrynsmXoLxWXbfs3jr5Upd",
  "key15": "4hgjx439vXKFMi9czMKURtFws1Sh2kn8QovU4BFUwEeiaDsNpB4cfY8FyVwP7vG8K9Kf8PjihJqpQXAEXDLVgRCP",
  "key16": "2P7Ri5owBZScC2EoReCpgpPc4Sj4F3sT2rUoE4uL23zQtCE67DgsQydtFEGHVBNCZxV4wK4bqhMAkfDDqVWgDDq8",
  "key17": "2tqrzmLfJ2YMudS2pCY5Z1wTenQQKgjBirqHzFLgEoiakMaomCjEYAJiH969rnjGyhJs4CjHtezLczk3xqpKecp5",
  "key18": "5bbAwkBBpY7JTkhQhgWhsPv9BUJy6RtY3WiyRFTN7Aemh7WiKsAAPTpsTQxn63Wp1kb8tVwJsuvw8oCBcLieBSvr",
  "key19": "5dswZ7kttw1sRNExsV3xvJ6xzrhT1GYuJobSkEyT31M7czaqPkmkcDSrGPzYEtiKkmhvBhtXyqbWm7gEbTYYSneL",
  "key20": "3noy3qFhx8NFBMnWwTRMb8MkrVHc6c5bHkL3PkP1CaQoHM3iQL8gi2xcDonnZcYC69un5GKaKwmtLFYCq1orodhk",
  "key21": "4ApwtEN6kmdLqafF7jiwnReXfBc5LAuCfPe2J1fX7dmYJDZFze15JG63Rjq3BYYtbRZ9korxneHudqWELeE9WMTV",
  "key22": "qC2Tgtqkxc31w4VGLyZK6YcHBuifxmpb9KEKGxMxrNFiKJqYd59BCDMSgPrvLqci81m32wf9VfWZ7NSxPGxjN4K",
  "key23": "5AVaDbGh43CfGeXKEffmzBSmRVxhkN8Fv2uv1Y8VmSjk5vimgZ6xQWv91KoXentMkgRzFg6W9Y5MhfrwmuRX3GFz",
  "key24": "5onXdCdHCXD9di2jeNmoquYMLnP82XqZw5QrAoguo5ywPXmcwTdCcW3cSMZ68s6Dn4SoxiLpHF27tbDtzFCphet1",
  "key25": "5BYNixBA5CU4psfKqDnbyXprEDDdYWAwTf9m63fHSsLWchsdG6CWs9ebnQzb5b5qZT8aHX2iAue4cNbUz5H9ZEik",
  "key26": "5a4cX6zu4YQv1sPHibfSrD3NBJdfrFuZw1HzGgdNP3wZo1ieTfqLTDNDvS82ZUN5tPhzWco5VBdE5K17nPnMTZMx",
  "key27": "CrJm5i5aTF3CBkowHs7DFeVwiXd7DGp5EZrBWqyZ9WC4c9a1NefVBuK1EgGvAt4GTqV1Ha7mQwN7Eg7Ji4jnY56",
  "key28": "5CtHfNY3UMh9WtdRRfiNvqL1e9fMHoQStADQjS2CsNVeZSEwF9uSP6cyQgUk9u8MUULXowFfQQG9t5SsMKVuE4Zt",
  "key29": "2fLq7EnwpzXByRLAArze8MB32nxyJUX48MEpMx7KauME33CjDXfrZ7MihKVNCzBnTQgMSoEWCtkzsXBtBjMnESDt",
  "key30": "2pcE97xpLe13SPtda2TQgFsHaFghuqxahW9BEpBAXC9j5MtKGcSMZJf9EXB2uoXdoDwEvSWFaNqzb7rKVWwKFUKi",
  "key31": "AhUkErtoWzbkZviBkhMVhVR1YXSdyc68Dah6kCbBkAE6YxvpwTwFfr7TevZJMzWdPw8cqyERhoXk6ikXp1Et2nX",
  "key32": "24rDGxLKtpgvPc8u2UP4KbzNXikNsrmz1sB1Gf7cQ2ZkWB1WZHhFoVy7zsDY3Mpn632LERPVLBJMQzXZP9Xk9Cn4",
  "key33": "2F8EpjWQPgen6q1horu2tJDDsHDon74EBtxQBrarMwX2fS2Eo4egpNHFiA7teXsEqiCmS125FaErCJh1DG1HNx4Y"
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
