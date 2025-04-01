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
    "36uUTGzY7qHCMJTMeKomYszaqkwhGCvGW5hwpQ4h8h6PdzDGh6vazfeE39XB3WsANNJnEKmUWi8D7JS1yqiEBWz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ew2rNiDGeMM8jE4YmNrBn18i8vtzrZVSyx1cY6fFT1u2qQBQSnTNgysmgtjbDQHC32yBhE1GyAyhYtUX6gs6w5R",
  "key1": "mnYT1A2Hs6zsiymofhRRFfjE9iih7ipGtE5CTvLu82LcjfQKWPvA8A8msuBWNXMNGLcUnQr3H87cUoysR7Qucmv",
  "key2": "Ngc941NyNTFrKvPdhqBSvKE6qQhkt8MJPkGQPcPFVA1SJjzhPT5xmTupPzojRHvz4CWHzCGoUwe7sXtunmEDpQD",
  "key3": "3Gw2UBcKMs7H9rprwi3G5q4cojTxbdPjXPfjPa5RSY2PYc7hEfbmvGKkcNrhC3iAUKCEdz2Xnvt2GMQr2iPnoBSM",
  "key4": "5PyjU7EE5RWSnUQKWLexHkPNLQC33LPnmFVp8zAeCAJXktQHGJzDt8ASEVQVi2KsMGXpHPu26YdPEu5X4GqPWQ5e",
  "key5": "8F4LWEgrHvno6Z8qFKCv4hn2iZpt87MancrAVBt5JbGdJoZPTAPcyCfSdVcKcQ55atcTE52jwBXtPMuqeneQNr7",
  "key6": "3LbshjjiAVxaEgRaBhNvnLtcRZeVBpaPhdqXzb3WobsV3BEcfKawHBgoDbW8eSjgfu6uJzzzpHg3xRHCQNMJBNNx",
  "key7": "xri4Z6vAmrtMacVgYY3FhyecthA4jTbRiPVkF6kmDDspveQx1MsKWcRCtAiPdexjofweJiVSmDrHNb7MGx2yj5a",
  "key8": "61ZG5c93HrfDAhMobvHSrGNVeZLYy1hBmSajqVRs7SeMepTd7a23MHK2gEzPALqVPzTzhsG4x7SPvXikiYWouX5i",
  "key9": "2FUHNMWMkFHQsumhmH9rYiFEbxFvJpyLDtt2CJQFoznHjFJaF7sgjvELdrtvinn6oVBAw7pVAxDW7k3CVRax4toJ",
  "key10": "5gwEz6ZLsSF3KGx4ZeyeTHvMKGqaCdBPKL5x1Qp8vMKhodEA4osvCxixS469EcoF5Eca5w7QsgCQciEYGipbTMMJ",
  "key11": "4ZTMhNK8qS7DCtL9BPWKFiCiaRHFLUVifRp6c5zRh1NwvovbPrm86JaxgmXXJM7PotK3M7f7FhNVRzw1RdEFEzfZ",
  "key12": "514BZXU6mgMwbLfnHF85krS3iW68fuLAU236GwoHd3Q1scDLmyLTHNRu4qNKGzcLd7BKmY3ZaU5iJbTEs4EA6TLH",
  "key13": "5hausC8n4zsppdD4xnTcMMd96Si7wB3idNzsm2pPZxhUMKSVUM5sixvvvN9amP7sf4bMfuAaETyJrSMtW3hGDxGc",
  "key14": "5PWMnoNsoUQ5Xu2g1HcEspxncaDXH4vaDc37C44Jy2fawoL9VHQV7G49wX1wFg9eyBmmbjHvFBe6GRWu5sSQdjD7",
  "key15": "2F51pDzb44JbdfbaUVeNTmQUHbEAEyxZ3HhaBzqBPvJULBqptAY2pSjiUg7EmQ5BMR9ZqpdaQZwvZPWFRnyCGt24",
  "key16": "3s31DS3fHsvqA885nnXXLH1tSE2rjyDoTXuLmkKwwFeFJC5MKJgwkxiR9yd8yS2vREafmNjLmVLYRd57QUbfjtrF",
  "key17": "3fYwFxxGEZvAXJH78YyEUf9zTXW5hdiWWCJLmQ4pN2QXuxagEdCNgf8ixkvSgRxjUH9ifxkvzZoghGdNsxYbRnoB",
  "key18": "3j5LTWu5EvZRBRF9bBZEmMWUxVXHi231vie2QpqzCqxeZLAVFKQqwZg6RxYkNnMcyyB88JAiMtJU49KyfbwnEri7",
  "key19": "3A5FyufsMKAv4jqW7mkm5oDSFAXq6w8LB37XNs4AMzPfNKcgXQ13ohDmedkxqUbXt6ATFX6knPAM6L8PEBgroEC9",
  "key20": "2kYL4jfFrR8M2y6sJeTEpdG2bfbsYEQqucKFnHycjPc86q3cspHLct1VLiQLqRPTFokz4ezz4SD4BmHQZkFVcE5Q",
  "key21": "4wwGV31G9hxJi75Z1JCTw22HvzpZkxLGFr7k2oNwuaSEKt8V7pCMgFAnkfGR1tHaj8w9avs1eDFKUdVKK9nwwCdc",
  "key22": "2y6XDFdcmweW38St8U8yP455WTaNzobeA1M5DAwHtnj3PyxJgoTkhZUzEbkhok855rtCjJfJ3E3obvMWftsGoa83",
  "key23": "5RoVSTg2ePB6WfajwHf6CqoXJCHjCTo6VFGoKKaG94rwPkj9eW79rzKuGMd3Dm6ND7nMRdU6LvC7ZUEgoYTGmM1D",
  "key24": "5rtnpJoxZnX31GF6xu9KfdDhnxHLiSBdqLMCU4vm1v3ygkPNGTkhneYqhc8iNBAQZ4umcVovSh9HAvFbJVBZ2U1d",
  "key25": "38Vg4k9JdQt7BMcwFpi88R6EnjxEEHBL6p2BRj5J7SgnCV8B7MSRfCvmDxEZCoQbaoiwPfz9J79nqvAfySruyYnV",
  "key26": "3qKCaaDFVjSVSM35R8SLrLDrFo2JyQgLLYxkS7imMhcNmcBJBqpeUDrsEBTNhVwGUjrNZJJouqD2DnuGo7jCd6wY",
  "key27": "42jGj8rqX52q493ycrEHX4FgfYeaKFnukWY4PpgUjzSrMJyScNFH5dCNEPkQ5c38fF66KQoCnz87mrhK74S35Hth",
  "key28": "5bJuG6J5RAVGykEHcf7jfxivHnoQnatn2Jq5boeja6wqunXodx8guYohe79uSp3j6MitBnvitzF52pEgMLMM3tQs",
  "key29": "4xHo2FAnHrHWF5rmzDXfq89XDoLCznx1qMP973wbN2Tcs6pbmScGTnsES3HJ9Rn8uVMsqT3oP7u1QLQBo766dKei",
  "key30": "4HquNvqKTWGJB7L5D4aGwsa3zEZV89Fb1R7iUT82vzq7MyMoipbzGRXtE69Y8nM2C5wHR8jP4jEXrRW9anSfeVZr",
  "key31": "5ANg8KbMjqZQMuXiM3YbYWSdPYMkA8TUR6nXnqPUGFDtVqGgBmbQN1GCHbnwseDvqQzCpCBGjYMPM2iGVPnJFe9j",
  "key32": "5WqyPdNZF7uP9drwiVQpeFdhqQDQceCtitpkWjfZFnPkPNqSdr1uA59V3JL5KZDStMnASMkMM6hVk2QBP2Mu4zRn",
  "key33": "4EHmNZT8jM2RM1gKzzCqWhrqmM4QZA4p9vBUzDys2xZvRC4vEg6jpTsp6BHuYfrctdknS1vZpixaZPYa8npkJHsf",
  "key34": "2gTnwn6gn5UpAv7j7EpJwxP3swh7HxQ7PVWUYyjdWKgL74PBqm9VnuBB5HiizP283E9uRg8hCSPXFtPJ3u3WcrSM",
  "key35": "59tBEVFyrbP7Gt2N1qMdpS6s1EtKizPwHabXymzHrDfH6oKU96jwBM6VQJyWpinYBPfCDLRzh33aYpjAUGpk5o4C",
  "key36": "31yJytr8drNs4JRajvSLzgxvFKao5DVYQVTr8RvTJ4YiLcbUz34ZZECV9guURp27u4zPQ2s8BaPCsFjbUopTUWdh",
  "key37": "3MCwgduRx1CSdpE3syNMs3Sjbe6zsgcrCSsZL6XVcVAsq4uS5UBdQAkyn9tav9hXNso9yZLyu3L9hnBk2U35H8tk",
  "key38": "2aZkXrS6aupUT2r2KyaazQSyiFEi4ovNKhrhttRgGGfondKcAUHBTepoHGYdF19y5EqizjkDUpXaaaUGrijkdNNs",
  "key39": "UYrTqqGNHHG7KUieZnWDEyvQeufyjnXSnT17d4zGTrgoTSsQYPxK7qit5pU6poPWgVbboU8N1PcKzVS5DuVECP6",
  "key40": "2dFPoNrbM1Gt4zuzT2EYjEGafa9qVTjFFxKPumiPLtXkiAsDKy68eouSF16PUaxMtwpuTdLDuXdtrw7nWPXW1RkG",
  "key41": "2p7BES4ThrGYnabdvBmHVSXdHWRqnwMmt5ky8cGmWwbqUD5hRc29Ymjh8JRTpza1CsYGEPHGuBF96wwTPBhNmZ69",
  "key42": "4jFMKs1HLWnvvG9dGKwvvEhJgqy2KEzeu21ApV4PoA886qrfi7hjevsdmKU73uFSKvTwTcfb9uzx1JYh88H7D8oL",
  "key43": "63ZmQ7rgvKSybrUGqe9TE7mzzMqteAGYmMWg675ZaBvR3kVYQ1G1aNzCvyCLy9EyvW2Ypj1phgeey2tof5Hua2E9",
  "key44": "3nx3QtKkESJGNumCjrwGLGoEoG2AJAdAi8KYaZaZr8eYFpAmmxoXngg7pf98sGPLBVtVWkzXckRbQwdX7edhQ6tq",
  "key45": "2ovqztDt8y8EHQcak7QafMv9487ov4h8Byf96sEiD2CqeP1boH5h5dbi9BKQnqJtCs6eNMFzf5rNJCrpEkpdB63G",
  "key46": "mo2VXaJ3hdTjjcG7QbrzWtfCtzeUCNNeLTQUYDc9Dg2tiu6HQDUFzBhWuh9FWUwxsxq7KAreR923bep15pEsuWA"
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
