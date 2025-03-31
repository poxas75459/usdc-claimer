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
    "PB2L4RjUZ7X8tFnv6RKUZtJnUk72oRzjmxZwm8j2uBkXQgQibHrXWGLR6WLdEWtH4knGuZ8EHFNaDMkyUFSqkxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mKmfoznguRdws9BhHc7xxk9MVLgNiFJtMRBZn7D9QmLkgkJhaKXVwH6WdwroeEZ5SyiqbnXF1yiwi3T1feskFX",
  "key1": "2uqhpyD8Sr372rJJSfDDHKurRJ7RW6Ny9EVwaMoLAURy8iQxFx7Cv7qo46dCWY16SXbP78SehpFYgYHbnBaRMib5",
  "key2": "M5Nn7LaTKvoz23KoC27rmqywEd8hnfZ9qCKHDYFo2JdiiLzQir5bgPid3DYLY9sWZ3coB7cekGnaQnAVT76Nro2",
  "key3": "4QjseikceWqkYz6kkQQ68iegYb2pCJYrXV32v4WjpgeP2duomkXUBQJbxfTXL9cNy8gC1vBhAvqwuceZp5esCpxn",
  "key4": "4qnTQRDQxtuct3i7b6SExwzssUgB1kbekqZmT5pZM4KqrXtCx4Dv7nW6WTVvGCYEJspXxk4w76zeVMDfANSXpy2B",
  "key5": "sCahKnFjqYiVQ7tdHNyPVn1Z6Tnq118epgueRGCuJSEzo6uZj1trKEVojkVt19kw5pUiizEwmivdZJFKMosjTZh",
  "key6": "2wZXXqCkKQ4Poco8km58BCCMe9ntnRRWdzJKPe4pfxZ4VVDSHr6hSNH9x4hFNzrYpZKTKQhYpXRwkSBaE9prmMcV",
  "key7": "4PdKyScL72rFf4xrP7zUBq4ipq1GGMStdkzDFTu3earQXukTHbDATqc9ksCSkgWjoFm8giR36Yq2YAQbPDzZccx9",
  "key8": "3UdZmocw7ue7VuovMnbuEA2UTjmgWAuA6mfDmY5gTtEi9dB8iwerkij4YYxHQVYyo3DgoJRLhXHuo3RcqHhMkrZj",
  "key9": "5t3czUYVyEssFp5L7ZkQG6URzjaLTHe7e2sw6PrmM21UFXPWowkqmZvyZkvL7WkFHwo9t4kC5SMgx1podWFe7pCr",
  "key10": "3UEHKmAuajKDTUqRTQpLQZDBaJoaPZdSLUi2kLbGk9fPjLDU9M5T6nrDDh4p4mzBvPZATCzjNBQeCho2Qsr7dPPW",
  "key11": "5rqrRzzad4yJaGNcBP9z25JbQuNaTGfV4JBhQrALXHXopNYZGVM3V52edUEBBg7yPpsn65CeM6hD5B8WBC7qnk5V",
  "key12": "4kkLaKmYrb34sACDxoxHci36cEGFP3mJh3uvryFp31FqwtfzbcAxLjKhDnhVzsFSCFKi9SbsC8TtUXJ6ubp9LdXc",
  "key13": "f69kbJ5EQ6HedBcSrLuxpos283AAXTxCneMJWCVhFBsk9bXXMgZApgAnatvNUnzPtiV7H3wb2AckwAgqfhj2TQH",
  "key14": "5qtuodHHWQyCtxUZkvVc7r9FJmD9bQYQWCsbvWnnKzLSzuaEtmYJHdT1qyFdaVoD4Bw3KpkS47Scdks3ddmPQfry",
  "key15": "5L3ZrTLs78bdPJAaDDCixHRDxb8zy5tife1ofTCJhQivWeGwAWisY2oUG3PPD68bjcNcqSiqttzNWsBRBHwb3jTF",
  "key16": "4YCYFLYdnPghpLFowaqEDQCYVoAmkDzM4GBoLYTsSxyPVGguJU7WRgZbK6DuHjRPhyFM8N7mFZEjSeDVF5CbSJWC",
  "key17": "3B6nL7614A7brsBUE1Wud8h3AdzTSBrgs75JR81yeQbX34yBYXPd7zzi5ufYBsdkCUqyf8nwzhxtd7MCW3nu2kxz",
  "key18": "3PsrPrFLFZMdF68SYjBVP58jrBPuHZTJ2HQkcJyrDmPwYryr7N9P58tQnLQrPLBp3B4hsXBd1n4pxXaJJGo3Wni9",
  "key19": "56GEqsBZNUnk3VZspge1AQ37frvTKt7BApEYwFViN8u8vjKJp96hh6NJjYkppeXqRdeRaVAxzDb87rn81dEK1Moz",
  "key20": "66oqZtJVEyp4sJEX86WoRLsi2fPAg2C1madCEX56XMeZHwuuMskPWRYAM9Sguvn1XtRx5Ht5qrKSWb9CYNtAe26c",
  "key21": "4zdbZYKsW6D829tDaRZiqsw6ek1ctxjLq5GK1p9bCTnQz7JkiboEemHWk1f9QKhA3MNCih2Zx5gT8uEsuaZxu9Kx",
  "key22": "24DwqKJdSwy8qmV8kW3dy3rjSB79ct5v2frExEscxN2WcGR1MAhM167GLTbFEqJVUC2fNUHDXKM18mD6j1Xu3CJF",
  "key23": "67a8KuSVwNFpcafTGGBnMkYUwWtC69B53qPnmzRykeHM4MoycXaJUDqaJfs8oGn4sqQ6cXqW43RonGDpVg34RDg",
  "key24": "kuaDjb9PLzEM2GemUMw822ZHn4U5kPzZJHVDggkgnPsTm1pciXMPcEZJ9mzZScp5qekZfUnKmND8FNcU4VPc5Ws",
  "key25": "2tsGsCsKF9tNFtRzNbN4KdXGRvJjanGkFQUA5BqbXBRMpcHkRhpgzySRPZQK5p7HdXXgQgA1fAhnxgtjYY2gyc5C"
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
