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
    "51JRoEghKXojipZxTaEeduFfUyoCUiGNUMJ8jEaPrqxotuh7eHkK7mAiM4oJuYWtQ7QnF8JgP5WGX9qhjpi1rgmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMQaRHsCJUDXG9YPEBegFZx8TGGmKKYTPKUXAoAMekkFJenrw1N4hsQf5QsJm66RJHVMMyKP1EqJWip42LWJbSK",
  "key1": "4rHua8mRGN4MmK1dKfYbnP6yKMpCbn2Rm3HrTACAJWhwNXqcZ9nSjgFs1S2ccjwwCEdX622QGFbXQavedYuYdA2r",
  "key2": "5oY4jbCiBhnZMAK5QM9b4cbfaQ2QJXzVTw8sQ3jEEu6rajz6ERSjoZn8kDLNrpeNnjLF8jwWiVXBd5x2mnw4Yb8S",
  "key3": "4W8aHJCaA9KLaBVrqpgDkMa1wC7Bmc2y1upUQvynSc9z4ayGUA3qAMRvYh4U4ejfUcyEwxtVMmLaCDsRuLPFLqLv",
  "key4": "4VDFnYxdazpXvv98HZ6dZBTF1YsC7xF3TQ93EGruu7thgsxZm3TLEcFsCKL8EeA2ssQcMnntvdwTLzvrG1wmUZzk",
  "key5": "2uVbbLL5hGKrTXBb5Ph8pdJU8yEacpjysfEsyx1uJTK88Ke8UgnRkaEMrfsD4qBTCXBhSm942QgTV97ikm6FXB1k",
  "key6": "5DKtbpN89G7XDhCoeSCxvegRJZqV5BrHmmFKZ8d7f1F5uGTtwzktzYChZocTig6qMH6T8woRksYCgrYaR8syQ638",
  "key7": "DZZ4W3KCVaVhop5tPUiRmXUyt33GDJB1S3eWiDem4HaYx38BpyGjNVjagx3Soq5VykX9GacftdT1UbYtLn7Uv6U",
  "key8": "2oPi1nVyLV3pLQG7VfNPqPUQDNhdNL9TttdZCNJZadjPWsiqgsxmBhhaHcEQ4oLPXiMPzM9aGXfNPG7ZN6v5yEN6",
  "key9": "2GMeEdvErENLfbCrkpB2vU4MjkT6hLKvo2qUY7Kxqmohr26RxUw9zH5vyt4JJ8XQGgE5bbSwpeg3d3p963ZSvYBt",
  "key10": "5bhuUEwTCeDynzX4muyG1vkDjkru35hndyFQa2cce2XPaqA6BeDpmxKwDqM7UrLvFaZUBezkQeTj1s4kuuq77sp4",
  "key11": "46dxDU4B2an15ayqc9gshUGfoEsgJqzPAKbgZhnZu9yRJtZ2A9Yfj9NgxnVvSHHMkLWWVZF98eBm6tav3uL4t7Uv",
  "key12": "5neBJqs628xDTKBMvsDq33HvfNQyDs6rosrs1VY6Dvt5Sdhp5nsyBaaPQyL8a8q3zhkEkuPiips4KTYMLmQoDDdt",
  "key13": "4fPq3ECFTdwf75a8uGJxX3Ag6ocULwju8KhBERCKmcj8Aac9iaJccr3xCJcF1iphGyBKKRaQeDRPg8azw3g5s5KN",
  "key14": "5A8LUNXvoMVqZm4AsfMNGV6JyLmuvR5TNwCLHsofpaUg9VcWwjCpKdtRbDAgUcN99fmzDjmmk29iEw8QkYH9t9NS",
  "key15": "4QZiwDQEVqT9NrYo6gHckMf8SipLYkrfBsKAjm5mjjYD7yRfCbSqZXZFkJdZMvRZyESHbzeArjC9qSJBbR63LiUy",
  "key16": "VdyEE1GgkqrRXKgAkUXCVWpU98sjWxfscxuwR1Re8ocdoWfc764gUJ3Wj4G6ghYYTdnYME3ZousKboHDKKk11Z1",
  "key17": "2kJGiSGzFEVfmZDCzQYRjgrsidDCLqMw86EccQBYMcn81JnVwLZWdRuqpASxt44sUFVXjDvgBFZrkviykrkkaJ1x",
  "key18": "5pWn9VouD3YgzVJmZLnmTG9H6cPiYsSyMt2Eum7jagMBxHxJWKXGgVfxvaG5nX8pC5zz9bVcwymRcH48uWCeyoB1",
  "key19": "2Wmzzs2pvfZ4faMADUNgkGR689sMAZNSex5aXxUo91piBuQEXGGCfsDayxDjHhmiSkwGfrPp2UhjGvZRpZvoremB",
  "key20": "469Ss1W8YQwsAtghx6bNYwWVT82Zw1s4nRQS4tGQ4Q4cLyCGo3dycVgrbqQS9ntS3MAyTztHA7ZJmXEWnARmAHtV",
  "key21": "55q2m9g1RBV7oiqfoxux7Hy5uEwbSEv2B8w4GmnVhcDezS9ZVmnxunMfQBzRDnZsWMckT7EhYnS6X5RtJz6tnhXb",
  "key22": "4hNHvGYzDe82YE5HvmmXzCncojYEFS7v3owxiqrT97hnPA4jXAQKEwgnz3cuTzxkcFsgfzxeQuS9W7jvbdDknFY9",
  "key23": "VvLj4KsGNs4r5Zx2oJdtUZry2uHJKp74PDe1Fi8smNniwcpWApnmjskbb7V48SRRp8WZvW9GB19ERtS4jW2rACU",
  "key24": "3n8x3dQmqewwECQH6NRJoaMJ3q9Hx1Vt5YKibz7kYVn6dAZzSSNK4529enbBD9zpyBVJKH3QjQtG9PyCMh7FfXw7",
  "key25": "4SWhJRhzuN13kaMiyRMxXb4oSCNjr1huK6vGJSPc1Zzux3pHDVswQY4fR5zn8a4yDdCC1Rf1zWAmDNidZuAioadv",
  "key26": "3jQzYUF4ofgsFshs4yNoPEzXeVbthNaRJrH4N4hCSyHRP5RSzA7WtFKm3FwKTyFyf6NxTu3hfJeuz7sWA5QB3pYf",
  "key27": "2AQG7R4u3LoYWroswJJSUcCrrZKARryRhJ828ZXDcCWAyFrzjTsBi15ZWHE5sukpo7gLuTA62jknkN3czQkhe4TB",
  "key28": "29GyiFeKZak5VSBtZpEGmk1jeEuF6LoPTy9dmFKtLLzMfnWCbpw5cBUYqsCanZbYa9R3FtTTnSRfhhjY88XLhUQV",
  "key29": "xTdLSJRMmemCzVSy4mUtje87VG9GKNKHzce1FFzkDDPzfgnQ57Y1bdbF4t1u7SkigJ7dXHo9Tr5L5Cp3YtPJ4pv",
  "key30": "3qHYfAYBxKqCp4tqS1fgDHB6etjo9ehgxMYTh1WRdv4sB6BL2SLDgoaUf16mgr8EGqzhNTnvrA9gbJuVHNQ6WhZM",
  "key31": "2CnymDXKEPsNRyiM4t9SeuCsQug4YMGTca37tK9K5qUR6mN7RWS9YaTgaiZzXqLHoGvuZHxDQfpyDvJ6NAfZhvU6",
  "key32": "4MJbyghsVULVZ5nznw2oU6H9zPxxciHJcQow6VszUc7QZ1oBiUmyqRQTHUF6Tyze6YufCcGppnfD479No2FyHqKj",
  "key33": "3sAgKk1W3aUEhEgMqDiXG7AFLEEaV88FMeicd1MUv9HxYW3qohQU4L9Xdaa4j8uohXaHe7hT4wynu8QLFVCTLoHE",
  "key34": "289A9zGUWPg8N8Z7HvLDdZYaWzBdWHAP3ffrhahHVaXf4srK39sqfSEeKJ5tL3DG7jaWx3qVxmSUJGMCbh5wZMUF",
  "key35": "2PLkUpA2eischt7wepvXs6bWJn7ZggYmrMZAiyNPn3ADscfCvCtessLTLeF7Vzw33cikyD2Jz7ZaN7UzFYetHhQi",
  "key36": "GSJ6SE5rDGQNiR5FJ8WvHjrweCwveoPMqnGqucpwPpLoAbpHLV9sToatmhM6Xy72DFuSwMoHKGyxNVuFoACnxFs",
  "key37": "xJyKnFDVNYu5qkm8A2TJMqcLoyZe6XeH2eK8XNZvmnTyrJspRCFgXioHhJiXAUSnK19uszQFpkPWuyQDDk7tYD7",
  "key38": "5NqkyzrCg63QQn6G98ff5pMbLUDMmu8jMNyzt2wkMuFCjQsiBXUVg7ZdSW3sJhhuWng6KBr4icaxfhLrW9R2j3TF",
  "key39": "kHAkMfPAkET9Tv59BH1uSLVg4SPM4mn2wDqMNLVeCDYNJJAHxHSi4dQswkFgcSZ1YxpKtPLWjCgR1ohgtLHZD7Z",
  "key40": "4nZ8AzwBbxsi7t4XKeoZkwche4CuscLAAPbwwvwVi2q82MPFTcVr2WkuSTceKYSGVR7ochMf9yXBU9NotVU96aCk",
  "key41": "2ma5Xj2pXhCmjPc2xvQbBfVuQJT2D91Cb5NHpU1Fizci15oqfxpqK1T5k6EbprSPc5CBpAt6eCbKDBkmRKcCkz15",
  "key42": "DPpea5csJZFnXvztq5KAVuF9GEK1MuZ3RcQv6MRg63e3wKUfqsaM3A2woc6T5kn32XkKujt7xe2vZZyAcKRPuST",
  "key43": "28CqxcR9KkbF2YSJA8W5FPiuuNMbCjEBdjVy5ppu3dXA33Dm6hFDcihDzxYdLNMxaY2GbAb9i73gRCyfJ2asLFzP",
  "key44": "3gUDE6cSGDYayzPrV7WAvsyCPqaVHMHY4HpqRva5kY9zvP8LATrRV3Ez9iXY1YUwZRX3c6yXzD9CFmZdugJ1L4jy",
  "key45": "2L8F1NcUz6rRNkD26Hp9e4tmT6nvzYNooxahcYefkrGniYBA6LMAPr99xzdijtnLqtQ77QKt7Dz1Yk25fiprV3nj"
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
