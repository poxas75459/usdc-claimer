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
    "4yXCkuCfMrderQxiZvGcp6Vkeg2s5TgnynGSrtbhozR158EnLr7jMuUdvFxZmiZTt8dHiBkiXR2Sz7tbyGuwz7rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvYeMaZgtbV9uksYYDoVrCp5Kcy25xuqx75az2QsJbj1SL5D6ygeZ35WvQMXuDLz52p7LZKogmbGAhBsj2jei51",
  "key1": "cpwv1fxcgQWk6m1UkVUQjhTj1B3p7cJHHHUaCHKf96ipvafrtHBxfcEbuBsQr8u6LHXCB6qzbMZqGTLmgiphFUV",
  "key2": "2ZomQFGxgRUZGLKg7WGKhV9ERWdtTenunWZiwX8EdtpJfkfD8PnE8oRFQNM2aR9DMtmPeVLxw4MWfkuyZbu41XgC",
  "key3": "4Rbi8KGe4xxmVcsXJVuMjjPJ84eirvq58s91ygdhvLTTu32kMUaGHQ5yxp6BsTmN1i8af7zD9ZeKGDCHfhgfCBX3",
  "key4": "xbFcKT7n3MXRgXpMHnAsFqDyihJdytUe8KaW1wuRszSbxq56djPxJRP2GJAqAKYAwRVrDeP1J57oLED3iqv1KL6",
  "key5": "5ajJ1ebC9FUtiZocwJPStp9dXSj3rvQjempDVdqtb2E83H4btZPRAhXDRtMKhjqB95RqZQ2gPxcLvDfi1Zx9BWC6",
  "key6": "REGEtw1HfNq7ruiRmfhhes3YF4L2fiZzNdVZJsXrJYeWqXjYc1RM2sg5yVbuF6QkWbzWGMBFgTYJNUtTQqdbxXe",
  "key7": "56fban3pqm7jASJKgfz7EjTgM88zqRey8oKaP21ZXHauGNn9oSe24gtSfXfY9Y2sJQUzE3PpeBvCd74qKFhP2qSJ",
  "key8": "3s1tq7XJf4vSQz1VPhKob9Rap4QyyDiPwEnk412s4Yj3KxdkNiaVUikrkswfSFUi3EoQfauSxvZ9gxNoGG4s5j6t",
  "key9": "4Z7ggMFVg5RX7CvLCxJHFbVnUQn4MCtA5TgzmjisNMGS92cRqiok63n8qmeRpUJ1McBy7y9bHy6Hq8AsHohMmyJt",
  "key10": "FMqYYQYAnSgNPHrpyYSTPe31TkgtL2H9yaiyCWAJr3qNyLUpeNB2bUKP5bBoirPt2omw1Qqj7eNTNpPnXXeYE2r",
  "key11": "N17ni4twh6mYR3dG27nQzpt9ScMaQfTQooDY5kDL2skGfdWNX4CFpx35RUDac6UtRsmJzQ4xJVX2FW5NNeo6eNa",
  "key12": "4ewtn7tKftDA4KtKgP8Knvu1nT3ajz1F8YTfSQAVUpVwc4N67rtSVukDisBTkXQJkKiXKpA3oXjYwzfwghMobPz2",
  "key13": "3smKHR38p992fRY3yh48uLSrtzV5zdz5irMBpPwnN6ertsaNmci7MJJeUhk1iZHgQZkjXMJXnxCiTsQX2NdaG97F",
  "key14": "4Favr7QH11AwmNSFFbzKwWVJe23SbfEKWsWJx3dW9691AesDhY129jEuoP4TyiEsvmpKS5hMiwKZdV3HcXfXviaV",
  "key15": "2Q7tChCiv9yyRXLE2GUtTp8qicCnaTZvoRXwyeFeAau21PokqMeb1FjHcK1jvgiRdtKKP2J9m2SHLRLfFyAGxMSY",
  "key16": "Am5xeA9ZZ3RYvhMH2H4z8C81RdXMZFBXyWh4tCW7VgN61wqvRk1qjFggJfh7pmgJRq5h81NF6w2HQJcrr3YswXX",
  "key17": "2jzGBZyhSxZqckRdQfrVud6eJVjQwcNQ2E5VnVCjRynZTXmY5KDSvk9zkc4q5Zm5DyikzJYKsy8PbvRo7KBo5FMZ",
  "key18": "4zx4zdzUGpqwoemkDGfEJuhV6jbP24jzDN5oWoXQhJfTHzaLGvCP3ypuNEkK4sgkZ8i44efFRdaJG3h2RhBpTsqB",
  "key19": "129mCvfvnTgrXnp16qWSWGJYcmArM2X9hWXZuStNfSnKVSQESNPbuVN3iSL9PDJEgjZmzAJhsaCypES5SbZzY3u5",
  "key20": "3oLLmSeVK5XBWzvpgbn9UDnWAfoLkY3LfpWHrqzK4VgyEL25yKF5Jsz83pK4pTtXYVVjPxMnwC39MuvZZDySf1TJ",
  "key21": "5uoEnXmUnmUJbmpjm6gbbvyT3SA3M9ESTi97h4vrQr2brdAiJsKrDYmvdSiiLUNRrqpryUBxfTiYf3jo9CP9qF9K",
  "key22": "zvQPtkmeQhaqd2gFZW4kR2h9FA8qnTyVTELLpz3juiCGTq8vju6VsENjqmBq9vNsS5kJ2Qf5WeUqMHoZbBcXaHW",
  "key23": "4eWP5K46Gpv7L2uDU4r77qNc5PZLsgHs9K6Nn1qgeC3J8uWSPqrkuYj23346pKQY3mQiab8xpQweMF3VnSwvseRS",
  "key24": "2ABNK6cvDG6nDHdCGPfDW4cYWXZ4xqaghxqs1B9HopQxkaZxnHeXTesno1oLHfju5JoiJagb5ejwgTjRtcNMjN1p",
  "key25": "3GHUq9RjCm7LwauBpU7Y2oDZpHGVmPCqactxzdt5KK1gaBFgSqLJykjiKE5di1BMUy6Va3vG989vruYVHnNXZFWX",
  "key26": "Zja4p1T5qBGxxDHtvVRgwHyUxvATj6Famw4wKVhwfVrWY9ixAB5wR3pKFtUCTTFxPZRgjznHbJXHGWTWdB1hmhu",
  "key27": "Dd3kLxoFpnTiqTZ4fUFRL72pRGfJZRvPsdp2V1pZbTsBSaZmrbepz62YMzB1BVgGaa4ChBWrahSzBAf2Ai6CCEd",
  "key28": "55fvTKCE693xay9QbpqFPJKBGLH757d1MXauWDx1GK66SKPAt924Mvqfk3Wx6DFFT27EuLZMBsxrmDCAhsQvj7x3",
  "key29": "dRxnj3yB3Hp5MyX48YjvcKi5Uzkb4bBY7vWZseyA9ZGuC74DofKa6EUqmCxDv3iy4vpWLMpyTNmMvmKZBwcBWLB",
  "key30": "2DAVY18cj75QTeCaAcFcKCWT6nA9NB96aF2hTEsuQeewR1js5YmCrocdZwqj9aas6MWe93uGcaULrLKHwvTygBS3",
  "key31": "WMDSMFARoRuT46tptLd86PZunwXFAu4SVLqddY3WAkNQZ6exUYG1ZnUrfDtURRiR7WwCEoCNHvDNYSyhbTbeBBC",
  "key32": "3r6Tx6kfYm5nn2yTgG2iKa5Gjtjcpcgekpvgey3f26cKbo2nqSKta3MdvkCNmNpJKxt3NpuMkGckaCnDbH34YWFu",
  "key33": "6yAo6EFyA4oM2ctZnF8RLYMR8FmsM6H9rnuBvVP9KNbizCPVrUzL2XBseu4nkuCWq85AdZJhidYVX4sPNBCnieW",
  "key34": "4cMFmDFDiuDADbTq95La9cFxCCSAtFi7jY1j3RknZ147DjZuarYgYBZNfukPBVtPhn6Wx5Xi5qh1W3Wyz1LiTdM8",
  "key35": "2UbytpJE6FLYRGPX3QPTwf6cPWjZt7BjNEXyWUF5oWbyrU4awiXyz9StSoRwLQYKSZc9CzWkHPwp5yGVebKTPkyj",
  "key36": "3Lqv2nkSMwHtzNTzin5oDaHKvZq6j1wo4RcCLQLrQUf9cpX3kgs7pGham5R6ifzzcByXiREShzSzPVheUe6ZfQMm",
  "key37": "39ovv3g98DBzncGtqnRtK5TVCKbdY5D6hioZwmJCEqEBd4JntxA8Bb9NeSMfbvuRsVS5L3rNse3xvaZS78sbr1Mo",
  "key38": "3ybqxDgyZWtwmWHhik1fKqq17HA6hsK2x1ZeUKotynxM27UboSXp6Kv9dXuBBmyHz1uDVB6aDFz1kih2o1kuMuH9",
  "key39": "4zE7Zz9MXxKcLiSTognUZTxnMs5JnGtwtEbzSBSq4bRNVqsDUrfDLauUp8mfbMDSBuRKun5wttzD4ameqKaJstQg",
  "key40": "42JXejVVdjQeAhkRaqL6MkZBSM8F7ctswG74Q7fQTBZBEPGbNinh2fVP1raiFEQSJNW6ziomhtPF1bKetmtnwjjw",
  "key41": "4oaiXKKjbg9HKP6q3LH6ok3rrii69xv6px6SbnPkDFjZKrRbRAHiXr819C26cD3WDKYNFp1Rk4bTDiSek47LQnTj",
  "key42": "2tMdeunSedyVrz1UiuHp2t3fUteACbHfQJu8BUuCsin53gDMp75KhZdpQ4FdvAcTzK1UwmpzeocGTDRjvAu6wNVa",
  "key43": "5JC6m8LkNgRwwjB2Awp6bSebBryRRtEN3mtaUHGQ3xXay6yX75YGjq7ozy4jA1LfRJ5m7QBYZAG775mt2oRWbL9n"
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
