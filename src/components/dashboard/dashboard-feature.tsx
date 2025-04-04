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
    "5JW2q5mmesSkDgsDeo7gmnfCHCVRXTUYMHXXCizrCWFK3r1hQdxkLF85MfZivY123Lvf3c5CsPwdtoDmexhdeuGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdQdCZEUrKGAjMkTV2PV92ZRXWYxkwYqxGGg5r4hwfFKuUPkc81KuXmmydbpGuWL3z4S1x5DTr8Tc3W5fMzQabt",
  "key1": "5gzWejKRxN6ZWuJsE1JLue9yQABcttB55MXSXU4AcwxrNyfeBbTaY8JcgVgDaw5qJ6YsDtaDC6WwEERRaXX9Jdx6",
  "key2": "5mFiYdRW11mxjtyAgvfkemtqvPZazbh1tuYyqjzPVShqtc3cWnpS9zGmMoHqX3Fexxvkmp6ZYyhHPqk1BszsBoDT",
  "key3": "2NqZECksMszPvwFgKSiAdKhafQe9A8noevZMwSQsJXrBJbHd2rjVm1M2WZStwbv4FDYoiGEjGE39ojqbTw22VgZQ",
  "key4": "32HPdaZs2Mdc1in1RUqsSgoN2BftDaprMou38dhjQLvr3Bn9pN2tiJCabB3NYorNpqXve3A4Tmg87prXYdW85bzd",
  "key5": "2igzwjbbYDojRKzMEuziVRVUkAN15vhzR98nfutGQExRqxbCZCRVpyepoTrDf5fY1geWUdYNverfnPvm8GT7rRR3",
  "key6": "3hBWsTRGR9UD3mq7ev28aMQX1Zjw6E6YfRn4dgn2f2WdhvtXCbUKR7EADveMc3YtjyCWuuoqKv7GJaLMbtvBSHoa",
  "key7": "3w93qzXKZV8MmsPrMhGPvNBeCvF4XAdTVXtu6isB31h1izPiKe7BU7x1yUBoEXsAT1XniqVfAPUZMB6mrtpx9zmL",
  "key8": "2HHhyZanj2DBbMHnDVLdHoa9mjT8gkDboN7aHbpyeA9d1e5T6zCsRn2MTYaQDmcrmFZaJbNMaWx8iKQpP3c39J8P",
  "key9": "4e1b5UA45Mrd4yrTFoAznCez6MY8G1wDanz7WcqPheTc5tot5FfG3hjojYj5Atodkgjgh2URLSjmPC4316H63GH9",
  "key10": "3aYhLreKXrWfqCMB2KoVM1GyPTYXty4cQ5r3XFd2AGaryimb7BnHxsWrnKg2V5UEtzhWxRCxr1uMR7cozkFF28EH",
  "key11": "BnnXatdjoxfas953J3ovu8rC8MJ5TggfBaEzYLa7ipE8h6ZdkVuaaonM6esNnEWgyUELryhqKCkm8HFmFg2HkEz",
  "key12": "35U7ABkVTLkxXKkFdafae98soMYdJMACRGbqs6ThX5aGELkvvG9UYBjAzmQigULPYodVhMzxC4gCfozeUZNBcDiD",
  "key13": "4eCWKF4rxrhWNm9z2Se1CGmpUCos5zkTuuSnz8EuW5WFX2tE535ht5Gjo3FighgR8yKrApzWw5Sn15kxMSULZbkh",
  "key14": "2y4AhZV32w5kVkHDYp9qj3dALTVHEY4GN4dtXgvrZYT3rfLZKedADj6wK1YaGj3gxwWt4FSE54wYTghzYri2TbJA",
  "key15": "3kbHajBDw3bLHTsHcaCVGUKqhJXK7ZxwGJkCnfxTHD2YRoZ3TwRgmJoqGHRV8y7cUSAqmtrxz1ZTTkPiMwnuf6cY",
  "key16": "5Vbu7kqxK1ptyKH8n8C8hRNWDkHBHBTaqmGHxM8jiQ3NzsB3gwFkbkgwDKEx4uNcafWFjtmQa9Uubx3sLvyvTrr8",
  "key17": "2Y7ra4i4Wfo48hTmwN41TN75sKiyUJjq1Z6J9v45qXNH775W7nke9wbFhdSAhYs5mzZFn5wDS3wdVSWMY8Q6Sxdr",
  "key18": "5WJYCesQjnvdSoaRK3dFfT79VgaAX5CzyeFvxt9pxohGEJ9i7e58BsrFjpf2FxCnx19J7EsL9EuYjsQCibdWHDRE",
  "key19": "3HrRAq69uzRsZCyzXQcha8AwBH1Jc1ejfxnfUqaJxyXC2kBAh1y2ti26rNqM8QDFyQzPFkfVqD6EG1KmPiDgCxKm",
  "key20": "3jtDqaGcpbByiRLfTTo1PxdcjKApzU7kVBddA1s922qkBKNAtYeCU4krYpgobSL6SabBEYwmgcGqQHtRxtPeeEf",
  "key21": "4JmEmfUh9NwDQkPFGWXhsZ1if6NraK7X6TTypjT7hrEFDdDUPYakt5PPS4z22VdgWm2rXCPXYnen9xmRyKNjQYU1",
  "key22": "3JyApsu6U32XGmeCrTtcwc38YCfZVTeMmJQSRxv6mFvqk2HArrML36e5ySX3FaZUxRar8XzoZkfEDw4Amh97od5Y",
  "key23": "3oy2VyxW1FUKVG8797gpzHqRE1t52T4Z284sB9mbpiMSDyW896LuePS1T2rhKiFVhF1Q6W3wa9u7JJkNQJj83rNX",
  "key24": "2s7PhukfSgXW2jyzGPLBux4oiu4fw8yDts43qcF7RDeJpvXeDGykiAx8puf8VVAWA7kQrC2uTCvyUeZ44sfJemds",
  "key25": "zvmXenFR73cfrCNhAmfmD2yvPuj4YNZAa4vQuktcKRbZFgabCup6TYTfzuC23Zc6jvy3CdiAQr1fttLPEdsNhwb",
  "key26": "5rGSc6RPfJLAPrSrTYVyzkghzbqVr59EwoktRfLV3S4MBQ9UKV3UkXnrhsg11CUFh3D37rYcXeL3vE2knUmxCZQz",
  "key27": "4VXuNEaGVZnzDJb8PSZ5NQhKjBRFfaFqAK6PBq27myq5v7oN6SsuJtYSSZxE8r5kJU7zPndvku2ThAJ2FgbZhBg2",
  "key28": "2DnP2FH4y1EwMXbKv4hm24NJQMa4tT37qCnQzPZtnUNUzAca2WskZmd63kx8ViF7Hu6AG7u9XnKY4fjKU9jZbmXZ"
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
