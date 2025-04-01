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
    "4YBbRh42qKsz7FdhyuGe4qJMNkM1xsN8dCV9YrvepFakPU1svEGSQuAFNTPquFVi7ZZWQ5ijzzRQEYH9ZAANV25Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EG1M8tNmzYaFGP8cuxaGcEWNZ4HrcU7rKWysEFUV97gPHewXHGpJxs4Wifi8zre5yXgw3goFkAKVNMPzMPvSiAA",
  "key1": "3wVSCSoj6CuEwEFsoXKSY7eWEoKr7KCTJssRqv6mn8WgpBLBodZK1VGNRTG6u6wXDgNZ4F7QX5DgwPFPWkTLg7Hu",
  "key2": "5nknZi6Hgjjpp3uVHyrK7N8JbE79EhaCEeJgLknWgfV3Ayw7AqKnStTCXpFbtSinG8pGG4uwr63d8ft1sZi5zrWN",
  "key3": "4HWq26HXZbwkYszgPMVAj8mxjqYToqc6KePhr3uViT2otDxWR7wn9TzfBMsus6gZdUcMLcbinDQKWT9PvU8sX3fc",
  "key4": "61Ya21ZztYKeeswhtWznmWd2HpM7qdr6BCZssY6uvSNu8B7sRL7y8J7YyrKcSCURkb5NJySm56NdfFgTAt4bi6AZ",
  "key5": "3Vcwk3KugHDzizm7FKzgoVyRLzMjNybGwDLM8dNz3H44p5ejpr7ts6cC7KYeFV2pHYVWfPRzdkAuUQKzLUZD7rVC",
  "key6": "1rXRxNWqH1TJp4kok45DX74MdhqgwLsEnqW6vwJ593tpi8MmNjAUDDRXptCb6Sqnataf34LH2p44VMsGKv23o4F",
  "key7": "3WYM5LvSbotLuL6HwsLaqgkMSAZN9vUkH3h92pnGbpNL98Vdhd764sRgra3hXLXjz6dbrtvobvt312SnihNP3ew3",
  "key8": "21VhiK5suzgbJdRbEP6mJ74JvdooxxpmHq8DmTT8na6G8xR5QZuML2ZcxgES16BPiW7irvUnEJa3bAFNt6nBLYjP",
  "key9": "4YyNdARTc9qj1esZ8tXmgkT1sqpm4kN4NdVmySFVoriwgnQWcXDTJAUYeq6dMLRzrBi6uJw683s5HSPhJCsJcStJ",
  "key10": "4HcFSzrT8vzR36SrjDJ3xrURJEcomsNKdtH5oWKCmo5EP4HfawR4fmtUk24RFPYEzv7m1oUKJTj13KQQqY23VgcR",
  "key11": "49LGKsLp1EsnRWLTug7K3LDSfDffswRyJoxUNVLMs4xxmBGsLfj72FjGqr8mq1xxYTgoCj4WRFt1Zmz7uG9G463f",
  "key12": "4fCATHdFs8cwWDUXoH16ZQmwsk5gTMMzTuATkZGg2o4T1yedhAm76YuSSQ56NTZm9EMLZFqcWN4ADuxUKDG33TjZ",
  "key13": "3ym8HkWWm7LX7sXdM1rVc7w6F3DeepqdvhGBSCbZ9GLxvPiKBtJjQSUcAaY6KWvn2qjoL2goozPYsgfAkkaVUR79",
  "key14": "5USu3cSunAvj7UWkLnZmy6594wbmebtUZRtUQeuvrMgx59SajTJL17fazXs7TTz41R2TcWPUiA2vAnmxDPa57XnX",
  "key15": "2A4gQR6ojABC3BiNRrcNr28ajrYat6iJDxrvuPj2TJMWkAsmAfKzgcGnBf27YFfLs6zpdK1KSawPAUPqY8d2bWX1",
  "key16": "2Q6HV4ncRFNsQt85tuAyXdAhaDgjLA72Eh4HJt21EmQ473iDMgxWiTchCPehKZHKizCVY16QSPUUVTML4PPVYeH9",
  "key17": "wmHxszN7QTsUtJUUhbab1jUjCvNaxj51Xx6LVPcFn6MqraDFbRbMu4xaNVWuwCjnb26tBv1YHFgRtzBxPJkii2q",
  "key18": "3m7zYTsByi1duUkFvcdwsmJ7hwpUVx6TZrGko7XANQjW9VCY9ocUUtE9s51N7zEA2vA67CbBikbio4diWHDULdu",
  "key19": "3Sgfg79xTwcW8h9Rj2xn8HUMjiNC8U8g327mm5GNSNHJJ63syYiW9oXpbvb9zDiB5t4y437mCgnuxgmgLySLX3kM",
  "key20": "4yy9SJQ5sa31MaDKR7MFxPYGR3sujfMEv2RFXscXAvvmPuhsFu6moHqYwXKR4XHrHterD8JJxDAuDMcCtrC1AvMU",
  "key21": "4FNRCTAvzQSioKSsWtbtCSwo5fAg7U1nVfdmmpgJY5VDAbnPBxaCadqh8ju9xtrbQhfSTReXDXQQnXnq47YTJ5uR",
  "key22": "2Z5Hoi2mcu4KL8YXvdVJcAp1dAVUiN7dGJyFsFkcJu5bDm1VuiVYJGedKp6cETUhiozbatDQSRhmUwzE6CzHXqb9",
  "key23": "YLQU2Zgvmb8c7jNSnoBwoucp3TJhfhHT3bo5qc8SARtWxEjZmtAiN62fE4vLNitJJ3fnNm4GL7JYGwLzKr7cR6z",
  "key24": "3Yfn9EjFELzF6sFtA9cpVEJRW9c1ixX4dwtm6WPtJVVeBrmidTV1b78CRwfdbfRsQ7h4bKMCjQ61inLyccGBkveg",
  "key25": "3RV9bvQspRszpaiCPSR2M2tYWhDF9rjoRtdQkCxqN8qysFMdb8ELSTHTGfWTPGEiXUcGFPJhdM5orBnmbeFhJtts",
  "key26": "5d2FeS8C13Kg3jb35kX7GWoS9SzHcqttpbGTvp9aL2pH91bXvGKpqHkSe1w5gEcNVGJqyv11e8rkhap7jJuxMciC",
  "key27": "3iiPLAmfcEViUa6a3z5X85vZ41wJxmcYow26rmTDnkEbQrxF6acYJqy7yaiG7oAFcrgi2Cunh2Jq7ymtUxTkadMu",
  "key28": "hD7vrmCB5ksWJxgh9wHSFQQidj5bWMCVeoEgPEcTDA1kZS2oTnwXRm5owHGCL5hKksY8Y1RgYQPCaHfemaj6mhK",
  "key29": "2rw7vMFSpXqrNNmkaBbqFXsu3vQQmkskD4wNUc6fLeXfTVnj6e3sh78hvHEXDf5vHrZFBMnpd97gCb1GxkdcdRdr"
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
