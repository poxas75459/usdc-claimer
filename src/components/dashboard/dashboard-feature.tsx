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
    "3U3eevMbGaedh7swBVXTv4RdvtW2C9Ah86ieP5Bn9QAc5GhRp4jHMDdKx6kKH3Q5XrGpZmBRMEjremTWveA4Nubu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46TrZZ58guCLwHRU9vkwjSkwMPe8MXQzB5H7iTSv9mquztMziKox3z6mPHM9SFL2Cs8MKhxpxTo8aZXtebdNXfwp",
  "key1": "28ccMUHSdUZ7tzrcrE2coPWZC5KQgeBS5nLPygwUt7hNrFnTNe23zMEczMZt2ybEc72B9bJsCDUhGEPDEshjLHJK",
  "key2": "iRtj7DdbdZUVPXprJGTS5npiqA2tVpQLRLP8Xsab7CCdWTnFP6mZM8GpoM852gDL8JdHEoUVZj9cUTmMAWrDvXy",
  "key3": "5qgDrMrNByDseMTMV5TRF8vX5f9VRkJqvwv4aUfUXGYuDmM8VMH2zi11PsBJ1afJe86CE3U86wcg3uqStcC3yxEs",
  "key4": "597Ju9LiwNL366TD1hvRAnXHmnqvhM1C5VVw2dQLaivSGmm9VPF3JM1EC7rUa1DUrhKRdX1XwhvkPcP3ZPhgENoy",
  "key5": "3YkZHxLbsjMi6iFVXFM5X3FfMxdmrU71ji3KchY6h9iveZZbgFhzPUBxTKnJvJqdLW6LEVMeaUpRQrpz7Ss8SHbL",
  "key6": "33gH9t9BcwKAbW9tnL3MUBcQemGCq2sbHhqWxiuwmwB3R85rLSS7hpmVrxGAVZtCizVXWbnvAhzMGkUc5k1vshhd",
  "key7": "2biH2UDe71R1TRJsPMJnCNDthcDJdYowDpUTZsWQhhEbzk1LnoJNj9UiPKzB67o5FkGdfE1iVycuJ6TQZqz8QzFq",
  "key8": "49WCgLxP7fuCYhQgGLPCA4dUCmTgKDM8SMHLqaKXn5njndR7LQb4aNSZdLXRCkjPeatu5zJ8csEHkwjDQ3P8Vzcw",
  "key9": "24fRkZTT9y9X4mQFb6jv3gEpgFd2thEWEcosgDA8NyvNQniD6H88ahoJb91KmmiYMeXBNCegxneXhYCr9EchJQq4",
  "key10": "4bScdrvLy4akpWhXSEQWgRYrKaLvrXL2usEVaiQXpyzSiYNyyvpF7zHaEGZdEqTP5PGQN4JpdwY36NMfDZk93KBN",
  "key11": "3rbWqQniTBqz2nnQat6rpvjY59Vt8QXRcRiTXesjWCBVrMBNb6GjQkb7tRwZQR2oRhCTKG7aB336PdemXQ9J1VgS",
  "key12": "3gjHkyQLuSeDEEU4YeZNgbaQCssQxfmegXDyQusgmbmBD5quYveFkG2shwfwfdH8kY4e8vCM6XfFt15oqVzNwu9j",
  "key13": "3SUUcvEEvEURTaiegh9e6fcpdn7RRPgV52qcdswimGWoxdaL8yb2Ads6DfVv3NWko6hN9i3eVHxTL5jzGYZZ7TYz",
  "key14": "D8TcdWbqnNGTXoBy9pHDN2T3nWhanWGvohPSLm51hE5CM7fNUihyaXkdyhM3LWsqRPPtSMqHnPiMV9LbsAv8Pvw",
  "key15": "4SPy599MLBYJLrwHre5n8b6MWLNpXoQu9P3MkbedtoftEUDfT5D8PYgu1Fvwdw1dctTJUxzjkhvbyP1AtueKoBqC",
  "key16": "62w2wEcts4jrJK3HLEVLtDaWdCSAXxeeVLAKfQB28qCEcWhA36aD3JqTYGBDAMViAsjKUPWZ7xaYBZCYhaXFbjDE",
  "key17": "2Ce1ZmJzuqj4Jo59p6L3oz1DeZQypGYN57MyR9wt8g33aKEzsW2BqaYTQqhbGMCJpfNxKiCsXQLcd6AiUf9krjmQ",
  "key18": "g7fGmuD8VRWNSMJFYqPb4UJDsqDNFXn49ysKwYqMhQnWVAGWskoxxu13b1ys5cUc3Prh5VisAWixu6EuamqDsJG",
  "key19": "SWSP1EMufBAhh8z8oAPVnZgzpW8ighMbai7dvS8BqPTqxjxE6ZsD85bCNHozPVXM8p5Bp1GZzDhn7yhDVhmGRpZ",
  "key20": "zot1yScd2mCLDSL4EbUhkq1thsmtQ3TQSZU3rQD8Bd1AzJzVCMMR9zDWNWBpvNAQCVUFQJRhnvR7c5YmDWoXWew",
  "key21": "51yzrB4X8qmE8rHPVM9Bj8oPs3v54m5XWTX66ATrtX6wBH6QCcAX3R8X1L9BX4SvLwBv9SKHUs1gUL5bbmddszru",
  "key22": "EPF4nZwbgwMpTr8hBm3WeDkP2L8GCPqBJHGBQwfjaHynzCTaKmbKqPeDiKojYe4rYtWAfrhnxPqESeoTmiHuuTU",
  "key23": "4N9NdFLjiMcuQQXakNQCqgfo3GdSaBgPa4G3FQj39jZm1RRshphM3wWGdCztt7VqskGeFsjT1zs3huaov1qsFcNA",
  "key24": "2MffrroaWSAdFRbxSbY32ZpaBQK3wAC1ntbwA592juXMaQiwZXqHCgBh15S47wKkecDK2zZpwEMiZqbKrp1XvaCr",
  "key25": "UVvqUcL7czrreNuXUuUDUParbrXZa1rMLQgeHq3ayg3rYU8MLMB4ZA5xBubG6V1tKPXC8EkP2CDCdJTYAftNGRK",
  "key26": "3FoCHtLi8CXSdA9FcJVSJVDHvpBidDEZDVtQHQxbScphVUyniv71ZAC6DeChNuR4rEfvLTNwJQagPQqV9amWdvcE",
  "key27": "2X6YJd1gqLDSr7FnJDmVcXirDgePj8gwyDZ4j5nN2Eai2oRmoqka3AXScyZY1TvUtXd3uKc6PLpbKmP1XuthtL9E",
  "key28": "5tQM5SJWSUStJSCqzA999oTapF1WhEMtSFA88AsU7szqf534FkUAqLhUgCU373NtYYHTD2pPpxwWUUCvhGehmTTE",
  "key29": "59oBqwTrUKRfaCDLsccgtohJt8HsiptkGbu5Vstb2mUsXf7q84ubG39Ri5gZA8pZzswwpicCW2HwpJbUJGrD5aMG",
  "key30": "5baFbFwBrkoGQs2oX416aBanAu9c3dRwXbHu34jP8DaZDaNy5BaPqzbSvQm8wjstnGf43oQMbJnAsP3ez49s6Gds",
  "key31": "PMfgCoW6c1w3RP8dCT5SgAWD4BCMTYcAC3LjWN9BdipSLq6QStPaF8T6SSgWNMzVC1yzDxztNvRQ7AvT4SWCEbu",
  "key32": "qThr5GxCVzYVCSr8w87JnQYrP7W5qgX7CAkgYQq9jWzwdiwDB6Ey6V9QrPx2jx1RaiPBMJZWrNJBFJQfLos8eoa",
  "key33": "3cKQrVzhQdSNGhikh43iYNMFo6eizeC7yinRrEMuiZpYKDJHbTne8dqtBKbX4BTbupaQGoiH2xrWp49ZCRsy3mWZ",
  "key34": "3omtpvmuwxoShyr3Feh7E8BNj9jhNC2yQnqJTL2ER6xD3QxH52tecNbVLA6HRxAxQQL86nun5Jnt4EaL9tES53m4",
  "key35": "4fSZwi9xW98fyf5iMDUp95TF6sd8KdaBsXCckjYcc9zwpk58f91MZDG6s6zYBSgpWxZCgoPubUEtEPRpsNCqoyBF",
  "key36": "5Asp2v1bVxMMj6gsnhggCfrVNfZ361gNYaHkYmF6TiQjK2uzsZBsTrb76TYve6fUbPB1kuoW7HLVStTQ3ivZUA3",
  "key37": "F5ocTZfD9e1SDVP3T4yzL4WTk7AnwbtXQxCbXv2ThHwUEArzFLi8QqB6uW1EWdPxRgqwfqJSaEATxRbZWUfQ9DF",
  "key38": "FVoL8HQqrW8qpEYun16kzT3ozWnk7QiaDTgsHbK1HPUsVTW8WcBBmHowFa1rnx3AoCkqJQpgg8oHLP134tRpDiv",
  "key39": "3GKq35GYChxfHGFZPx4ymm9pVfEuvUaNSaeXBnVeBtNzPWtZd56kMCXEG3WcGKgvaz9yCECcfVRSomg3bPnSXG1",
  "key40": "2inRWonNSks75knax3BkspHKtCRQ5WataG2aPqf2nPML2jYjxNBs1wo4AzeMUvumZEwVZkEUkUcGuTqVYjrxgJUq",
  "key41": "2idrpJ2Zq5jX9CMMAoHsRcFdLcbbfxomN3nSVyKABsisTr8qoqUdo3DdSbzzu2e9MxyBpC2oe8qcLcmCVkR9Vp7T",
  "key42": "5hv2yLfk5zwqiDfiFEkstuuyuueM1Evdc1rSDXmBge4fe6UQg5kpB15xJo68anKwebJTokPwBz2xcCFfXukmGjgd",
  "key43": "5n4XwQJEgvfcakSTgaFY6WQ7HB3YN55rmkseG99k2sRJsmhR8EiTdZw1XgaBygYmvYgtr95zA434Ttej4EorFjD9",
  "key44": "2ABgSk5E2qimZLZgzkrugdNbU9DcaPP7KuGiFJ4KrC5PYyj6NAR5oV8dmYnDo9ZZZtF1vECVJiYstcd5rXACiGtZ",
  "key45": "5Np91YCtW2yFje1m5C3EBLvms2XC58WrXh9neGyGQ8QEN8npnwyDLF4AHDqabE1nd6UcX3vcNqcYKWyLSkRQq9Dy",
  "key46": "2H2FYq4Uc23NbfFRML4U1tNn354XejCgSeiGUnR2B8QJaS7jtADc1LsE1sD3hEsjMcGr9wRnNGvf5wpgcqPamFKC",
  "key47": "WG27p7vLcZPZSCo7NbJzfBPKZHZ2BgaPnyEcySPM66UXYrkTpE39bYfhysFg2HRFWg6X8SxoA9EHh9X8WRU5hHd"
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
