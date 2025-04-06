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
    "5pFFLJxXn9HCgPmZbP9VaokCeMZS4jdCzo1MTwc5LqyZzMgpfYG5F1Goc4fCKae1DNQXAoQbbXMxn1PfTDF726ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24q9FCjCdxEUAeqQ47V2qWhYX3e4SEwV6Uu9P7Phvbkth36kahcrtrqGUHtCVqWLhSr3YqPAmupccfV7vJiCSDWX",
  "key1": "3LD5cWwb2EUvX7d7tfYaoEShRApXUrFUBq7hJioRGZyqHJufRcsefurCn9YVM9c2n4XkyrCpWA543wQ6TptF6mpT",
  "key2": "3psfYzdCcLY4eNchP9nF8QEesrn3XsRanCtKfHiCFiL9eajUv9VojsYfthaEyH7HncHV1ettxpBwGPEp3RJdf8xe",
  "key3": "2DdKoybFyp1zfAut59Wbv2DUC4pz6Bwq9M2rFMYUdDooGCf8Jw8XBHZgAmsDPuCmGdAJcrRzfM2yW1LWjnd1x3KK",
  "key4": "4psWdx94eM8AarLBvRNq9gHpGaXvoHMNLbZTMXw69zhkzr6cDDptWDA4ReyjNZravYV5ssuNJ6vCE2XTUZXZZ8DW",
  "key5": "4t8wD4Yqjx4jEBMizE5PNnRykdfR5c85ZQJTFb2X1x1pGZpomMRHrGTruGPj6d3nnBTh4YFWUBY59ruRc2wgq6nR",
  "key6": "3sx8x1Vp4CjNqj8jmCyNb1gphujra7eWjdv5HfS7SmWye1vWFcF5N22XeBoqQL1wbhaHbT2zAGwMA4Py3jkR1V9L",
  "key7": "3zwEaLYpdD9gBH7BpgToSWBGcAahH6vdcmyoizQqZvisQtxL7E7QjnuoPjnbp6dRjbvPh8ZERFLDykNhjh56aGmu",
  "key8": "21P8LQ14zNit9rFLniQWhTuAY9idF7JvWXtcU7kXfEa2mvSKQsxjXTL3xBPGx5Xp9Y2N2Pcjj997FP3dZ8ECbn6H",
  "key9": "41hUe44fV5AzgnAGC5wN5ehudpb3DRGGU3ZzRbUcmQpRvVdnKVMCxDM2Jnu8n31sXCUYvRRr7wBtZ7u4MGjJp4Mg",
  "key10": "4LJQRv35VRU5xFJK1ehrETDy5bb4y2Rfz8JR4tPfNbhLkWRy3GSzWvrn1StwCqLGjrKrqnX6syMq13iFXYwHYjpw",
  "key11": "3SxZnfJmLUnfY9AhW4dfN21aHYweDaTUz6GeoY1XXLWwwDVq2vircGkeANwJTfyRFpqWT2DdV9B5aFmAHyPSZRFn",
  "key12": "5SL3J644dCmKYYtbDGxyAjC8KyuLVA6ig66WsTTcKm8gb2TvD1tjHJGMKU4cemh5M5bSEBgYwLaMZrzPBPEVUmTp",
  "key13": "2J5suNAzVEzGZ4tFdvRYJnrj8XDYhQ82GMJAZPZZoERDhhUE4QdBvsPZN1jjPDk3wD3nEJX35KoNrMwamrLDmUfd",
  "key14": "45WdqvTh3QMzFEfU79Z2D7wWyetqUHm5px3YeUxV3bbcRKciNsrUJh83FRZiS3MMiW9CwbtkNF91fsrsmMsKjQw9",
  "key15": "66fYTq98BMZj9KGQjsmcAWcjU75r5rvmHki75QR13zrt21fnQsJXBE3WWRXq9EdjZZ5KuD1YhgD4ENvsjtoQUsxY",
  "key16": "2SkGNdhm6zaiuE82jcyKQJTGGi8YfXaedd9F3fAmYVGGmVYgvtfskvX6cbxZZZXRsY5qccRgET3aJMqXbtRdvxCj",
  "key17": "3wtbCZmAuXwjzaqwfr9xSWsCZTcfzykVPKPME5P5YihMdJtQi1Apeb3DRoPcUTy5Pp6ddHBVVm58jTxhHtoWVNWG",
  "key18": "4WXiAjTEDYHvYH7dnaUxMELb2ErLuaF8hjw8oygPKKGibrAUUCy2w82UMP3No6aN4GjQqBLfcSaBPh7GAjezGtNH",
  "key19": "2P4zqRi8e1NsrFCMNqVDz5GoKdtAyqkHU4DgWAJ8cA3PRai75e9ihsRoXcjy6EZ2mFK1yn8fJL9zmVJbX8ihavLq",
  "key20": "2tAvsvQAFMG1Me8jff7Ybfh8MuTE1tL6LgzrBYzwuNJ7j7HbK89KXgqfwDHoWANWR97FqB9DcvhnY83yXaFREG92",
  "key21": "46iDA6cgEwAHt4BSwqf3Wb2JMieXosvhXkz7ZWPkKD1gwdeVrCgvLHty1SfhjqTvy7AkgbeNcKCLSNy5ELM8GzcV",
  "key22": "2eEVZFYJuE4ZHBi1CsAFU4sRDz8pt6FPCFRpUELPHrWhG71XoXCHQNwSsSpDZjmwXiM79W59zrWZkTYX6qKMujkk",
  "key23": "2yE8wdoU7A9zqZ5ixFMiXyw6nqiuDRNChT6b57VV93RXNwkegRYVi7qYw3qXMH4uExBJ5PvafeTTqBYmaUzoZewT",
  "key24": "543bPDJ9owLxpw3F6ZJcti5ZVquAZxXUADiMvhJZ7rXEaShN2vNNwpupvD1pd434qEp7cSvLJexM47QUAD73S7SM",
  "key25": "3888kxJjXyUGZaXUiGHUWJLhpTWhnWJM8wZVVwnos6f6r8Pe6oH5cyxHgQRKdxNzTWua1TZkwbbX16jrKpcFHV3G",
  "key26": "5f1d3a38VYLSxgwzr7nQCh4avPKdRJmi7j5oTkw3kJAcTPdP3BxrwPKHAA7eyhznzwaAV15PhxBf33jpCW48hWF1",
  "key27": "3adsKNuDpJSehW2jXZSu158sm7w6CmLgTV2S2oNud5tbaV3ji4Bmu4m2cTLFdcQhdwyPXc2V8wv1K3XQEDeP4H7q",
  "key28": "3jivZi6HJjpet5P6bmqPRQ9KLRj4NsUwhf27C9vB3itEbW1qLQEWLvU7CUwpoS4iMQkTiPEkGvjbWhq6HguzZiXJ",
  "key29": "4stDLHivHUSCiRByyNoWFTZA4kKjkw9h1awavofgscJicMLFpDYyJTmYBx9U3334WgttarSNryJDoNU3PQJVzqe4",
  "key30": "4rVGKESkL98vDC3u47Q3Uj26Z7bSKxf7YFfXDrWJXxkvYHLzHHUqqQMJExpzpQYsZDButXWkErTqbZ6sSQrEFxXH",
  "key31": "4tJN1HYEUk5qQQcR3uwKZFudtJVdqdZZz5mpTghNHXUTzGzX7zg81ARvWURZGfJzVn8TAwXyPmyFyiEgbQoKPddo"
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
