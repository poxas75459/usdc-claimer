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
    "3u9UXTB6qGYswzTcoDFekn48bPx8zyvh9CS3ZJDV6MHcpe2REYDNxs7yahzFjt5Ksdj7yxLQR1kZoghuFVgu7k6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N28hPUAcoLyp75YcyY9za4Dy5FuYBW5bzDV6PabxWreaRrgvNKtnEMydFqcishV2EGoXSos7zuVNUb6riyqVxGr",
  "key1": "3KWG72pSrVTnddb32AKJHCTt39GmiEykjQRmpUQ3D27eB7V6hpQLvevMzThGnoLFFBCrcFQHVU9Yi3ZBskxTBa4z",
  "key2": "3A9JkgBbrXE1VkW4hcd7oQRmJvhgif3UCQpGKMyZPozp5pAxmCjMMWsiArAwSbDFt8ELUm8cjsaRFRTM4W27edcm",
  "key3": "5fw2Rd5vxZYfNDhhAcZ7smsWxaSrjvufzWXAnRdxEjKF9Q932yU1zc88sqc9ULxsU5RjT5Jw29T3GumJVvhmuQLx",
  "key4": "hVVEVNRch52c1DJqUoxqLLbeEonFjBdwTtvz6reA8wgrLEgfvYiAU9jZ85Ubsy2gJKwFjpXrRfez6QEgDrC5g3t",
  "key5": "CQaUJYGbG7uXefBjc7Ra8fX97YeSmeAWriJzwpPyt3ySdLckBStoT4z6xP1ZFKqZg2w317gWeZ5U3nxF5SxA6zD",
  "key6": "2kXbpQw4DwZ8fA7jypr5EQRP7o7FjSnYzmYZyKG3YNpDS8YwKZ6SJx8UnQfExcspMQRYXWYVMNqFvHkQagZ8ifBr",
  "key7": "5DpV7BpsvS8BRoeCfaccnHxdbaMiqdZFt2Lr6VNZDz8CiqdEZf63ZHhBCZQArA8FkZdfNasCr7XxBE7L7DKYXuYf",
  "key8": "3HTB6Tjj1GcqpRDMnV3yuZsMX4GbpDc79qLTLzsifv25w3pYAWsFbMFVtNygPUZPj5sV1jDWQjBjYtcM6khHEeXR",
  "key9": "4CSY9ACPyuQ2tw5gZutQFoUMCzN38csSHbZ5WoLJRsb3dkCnDVKDUvGFK42jH4WYtDyV6NfrYtUPeMZFfL7tfqpZ",
  "key10": "4u7mSWWDFgVyje4ejgb8VUv15RPoDjdU171tWLZ1mDM8yxLPKJnPvtbt4WaVHB2rJkgmVP6VW2Upc223skVrm3GJ",
  "key11": "2XTTqkVcV5hMf8MGadzUMDedw8BBd4t53Nf9RnrVJaTLui2xn2miyZfqZhs2LCpuh22AuMZKcSYiH37fjag16ZXE",
  "key12": "3sv4ka2hZFiVT9D5c2dnHhuhS1vXgsVp2LZSFFzibYz2842Xh8EYok2Jrc1VEvC4cYhbF5TGz13qesTcruTwYVPe",
  "key13": "521CCuMZHwooXfhqcDrMDPYo3z4GHHruBbEFaZKxVVPKbCcygmabZThs4pwQXsjr7gCZpt6S7u68xsVY3RjvmdiS",
  "key14": "2hHtYQkUgNm9keCovA2TQjf13kWenv87EL7iJpHTXTFVnAENLfxGNW3pSFVwHUe7yKaQg4qGZLoY2tbB7atofEmY",
  "key15": "55K1EJxBWywbibvNsvGXMuhyh62vjqa88YUL2Nj8WKkQi3MvSB6D2oaRHQypvNFvLvGojtYmmb1XsTm5brnaYUvd",
  "key16": "qnrejvHSc7M8o5rECCXPK1rU4hvHoEubsQb6yTbc7Wry6qq27gePUYURxHXoFpWxwdnVxqR4eso6aBiPHzAQu2B",
  "key17": "5dX2P75pzftyYNeKMRySAEegirQHCbCratMJS6x7qE6g2nXeJC4ABZSJr37NwQKyH1qZxzj1UDEuvFBdvAQyrdfN",
  "key18": "2feZTHovEHvVYmFCrXrHazKKhv4CXp8NHSkWGQMfY12dLfNwvZB5PpQTgcuNvrnKUh3zGcH2iEANCvX95mF2NUo4",
  "key19": "5MFwnFhHzPHq4L6KdbNwAAQEnfZKWAv3C2DQLSdpHanSL1npYJFMgunZTndFGZP3nmF5tK8rFt3eWgYNAtpUuC4Q",
  "key20": "5xTccY5GyhDNkno97eN8bVfoz3DdN3LBN3NJ4JjCQN6iUemDBCu5JaPBLAL1qFEqd1o1iHMsajWgB6FuwJSDwiR8",
  "key21": "2AMteAGuj4nZDGew344HVp7kpzUZp3xXSLEvkMnANmDUzXXRT5aLnv7t39W97GfoPwpksQBz2j74DJHkBemXRRnB",
  "key22": "4xm4CM4aAJeUqEukABWEAi9bkhDEZime678R6Rxffza9zUPiP1xq2tdZHkuLkghQ2Req9XizWJSMhK8csXhraPrh",
  "key23": "2N6Gy2Qt1rVZ5cUHH7dD93awFSgsTtkEtjyozMSXtv2ts9Ae5PTTcwGai5FgGDmQ4SgYvcHRf55Ugd6P45sZNgTz",
  "key24": "4UZmgoLnjVn81Gk7LGes7qkDWetxE8wfnyqvvJWRxM2hi8FZHr6kYjNwfbHKFB3weLjM4HcnGhX33Va855RzTCaV",
  "key25": "FztXXCqo7GDew4KXmHE2vZFo27dnbegNDoQQvazS15WBDBsiArvfJykizCKXQXQnkWWM53LuKp8eUPLF52L5JVB",
  "key26": "5tXJJa5kTuQuW1FDpRbgKj5Mg1dCVbhP8nVb7scQwmCXFNneNY5ofeFvBrJT36gcWX7LuCg7SNWW1ZpM6PkVPqhq",
  "key27": "FFwbDK1pQn1a1VWyzvj14AhRQGCtLnzxYRyZeMMVnUZf7wy9MrWMRH64Hv976fQJ5zk8jFVSYbFp8n3WhK2cyX6",
  "key28": "5yQ6JXECxYm3W9fGQmAsj4cQQf4KYtBqPsrC366exAaNK4nr5Tak7emmvBVNeFv2eLAA1Uxnvwk22pakJaMKbf44",
  "key29": "5aJbo7acSepxwYf4qsVvSoiiSsHPhiz1JyHKZTgRwNgFRbAhsesDsVxjpKGGuAZSsEH25UPHeeroNBGjwgwuQ19X",
  "key30": "4uMUTzWbhGmSPEBfaaic4PP6i3BMxjG3nrnV77rptdcFsV8wJReT2rAWWs7HFgpz3ZBCpsVHnqFbjwGcfA3xn5Sk",
  "key31": "4MmUBR1XdyzJhZN9Y6copPL32tNJsiLPdCLDNT6kdNtfRYpQYAAz3wBcomMRYVP5NWtip8QTjLzHvT3ZMyHkkBoh",
  "key32": "4fPRz7Rbemi9FUD697siBZmrvXFRtkUZkrQLdQgVEe6BNwQ2648UbCstjecirmJiZqffCR5mtgFq9m5tEK7jWqiq",
  "key33": "44faKrNRH9WucG81oTzdPpwPSEVSfS3Vuurrz3berTvCdaKMmiYaNP8NXnPDMkyrrtZFECwQc27vDi9ZXyS1zKqS",
  "key34": "2PhfbLG27nbMVWYNiZiVaaGwNxNuLvMH3VQJFdQTk5iqwMfTd7DYLCuQJfvwn9eeBGFucZ6XBfnmotossZSkWDcC",
  "key35": "SS9vRNanvEnaA44UXDxDHB6ouoS8TLJiWBGHWWz2Qc4TAiJHwAjA2Q4tvYbBQpeQSJpwcMPCypguhShzAgScVNg",
  "key36": "4ewF5VTyUXb47mN8qPAsedUeQkBZ5thUU9T5h5KV5xQYUCVNa58UCezpTn61QD4qpZEhhE9kwFx59M5SbgdPWzDR",
  "key37": "33tHHwsMHtKCWBamG3HZDhdTtimkhEhtPfX8ZGhUz3EBufttHwRyxR8CojTWmhDkBaPNaNesSVUZbYgRdZ9TEGXE",
  "key38": "4vqUep8w5oQPo2VQQDKLLBwjN5fRQ6zuxebV7WtXi196u4LUQtvSBt5ep96d32NC5pPdYJvJ3f9xP7wHLbafEetF",
  "key39": "3YStLfWTU6MCXmuk9cuoHGFRSbnqr2x9rWMEiDQeu9KG9fyMYGCGfu11ScpitLEwSQJU8djHeWNMFHmwRviMTcSf",
  "key40": "r3a3Ukkn1dDeNRJhgjad1PTc1tcecWCnA8y876VU4dSJv8tJgoitkWom69k3X8HyRT9vhcjThfiQTxNqhT9C9dU",
  "key41": "3yDpXs41D8U41vkUgx1Vu9Ts1c67h73deaFhwU6eTgnK8KfhkfU1ee2CBBrTEN5gN6DC4Vg2ZSDaf4vLzZnQktUd",
  "key42": "4aLX5tnxxXyGugt6EdGKuhsfLfutXP2TktMJ4dGLzPRrENuvQxdKNq723Q7Go3bBYvntFsR64PLQVmsNQuCKDMkf",
  "key43": "4gRARqVDDwJMx9Un7fsakD1YXJmTckAKKZ9aEZzf4zfSkBcBwzX8sb1h5HugHZdd3BHf6r3GoH3irkTZN8A3ambk",
  "key44": "5G9w5S4SXKX1vTjmGgiou56NF3LJWswANb2TKPzm64xw57GvTQyYQRyZVKQQ5Q9uHtuRPKSaG97whJuvEHjsdYao",
  "key45": "23NfzFhLRTp4WGSVwXtK6tL7UmfS5fuoy1tSTRbMXGyVeeCT23H5oWr6k5JHsakL7iHMnvPZcDQqozSH8BBGTBVL",
  "key46": "48WbWpUKfqDdGaepkVdXNo6324mNn8nmViK1GzGKEo3JcGJnm4j17eqTzw3sUaiXjYuA3TabNBZbFaWbbqFfgCQU",
  "key47": "2Gg8nMg9UCWd8W9k7aMoVrVYZQxs2Bxy6PEeGzrFRvvP9edoTV9ZNcHXZ2pNLDEVRkc1GMYQcJ6pvKZyhJWJSRmc",
  "key48": "2XrYkyyWK4Jf9gAA9FVTCRe6ao5RBX3XaeHgrcURg4NMPDKRoNBVwhCtLdtfaHNEQHZzHPYG65wweWsewZEshPDu",
  "key49": "CibaCjHVstyymcuX6fe11WfDL5DU1CngssU2m1sYYE2rM8iT3zDiiSQuoKkG4Lk3ECC11Ke8hSS8pRTVNPc29aj"
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
