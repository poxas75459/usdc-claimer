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
    "cUXt8mH8PnRoh4hebU1PqkcJWm27VEqYe9SPasUtfd2RB3ZbTDdRJcgJM8hkvvPcZ5TCPPWxrsKTCSEQvUrd6He"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FG7ruZa7kiDcdLNWN9tmJ9dHd59YkDuky3eebf3krvdnUC5ZGTXJitzCQpnSNZfZxV9U1aTaibjzhtiKMKL9w7U",
  "key1": "4oJmnQmRoZ7UFJYAav2suZB94quAuiqXhjcsbwtfzBeLHt2FgR7xrdrkAqWNMMP5Bv5iRSSJww3iemWmfeY6Y8Ss",
  "key2": "5LWTpeX8SCC5pWSRUd8xca7xtB1GHLPuBt3RMFuavPZykLrAMUx6CtKgiKU4aocMkGQv31JWw4gGmK5G2w9eF8sP",
  "key3": "42LYV997am2ojGaiWP9uGbXVohNxs8QqCXix5xeAB5m2rShyJS3bcJfKwuCMPhNcqzzKSn6LCAB9v6aGgD5tKSaD",
  "key4": "4kCdj6p2z3NXDX4fUZoMpPVp9KS4TX4NByoam2SqT5GqyK7oKCCaN7XKikVU3jfwTkf2USknppWy4t7b2FCLxSh5",
  "key5": "21TkxmHUt6VtmwaPUsm7VqbKegwiiDbDp8WvfTVQfsHTzUtSpgpNnSJznwgeDJ8JzbMXcUWJ9UpDa6xJbV4MDxDc",
  "key6": "47NVc4EB894sy7ZjnRY4htib9LBr39jYSCEGBpenwt3Fr1iLojyy2BaLpKQB3MCYyZTh5hWdbfQvsksWLDhNgq4J",
  "key7": "2pTi1z3Lj8viBw6x1YdJAMyhH4V1tpdGx7m1eL6bpe5HmV6gUhS3JpzPkCzU7Jq6BLCaceYjnMXPFYqnR4uXPaAL",
  "key8": "5Z1JxE9pot6FEEbinanKgSne8WAPLeCTku6DHb7RP2QyNbV8S9fkWKhoGiQXfx9jM3iWMoYFfbHdh1uVJ7MpcEsU",
  "key9": "2sfVWRNkXVfC2RRHBdzTNZf2EPXZpP2grKVjL5FVrhbLyU23QfAgVK7s98Z4HDujBYUTuztHnLtx6RtqZb3Wc4rX",
  "key10": "55wyAnPYEsjsnhDiZdMX5dx1G27kfT6eRfRUtYjAUy1CAMJ5Qbf4ZkAt52BnWEj9UdP1mi23TH9myJtbnsUsWRbh",
  "key11": "387PAjXowuZZojckPpzqqrq6GxPU3ABcki3UDMiUPPmZaDbRfuy6yseK8iq2DBctoBuA7RjMDUpW5peK4QhWaHgU",
  "key12": "234F4BYbnVTG4nH3eiT7diby8P2bzwcvz7Fe8amqskxXMZ3sBfnsJu3zArsN8kV2aWNQ3CJ2M7e2HjDKPevTbQdm",
  "key13": "5o8X6qG1jasjwJsvYbxEjvU6b47aMWnJc2nPhEp5HAiELkvhHqMnoYHsgxam3SBz4zFwH3W7rNYULtmaP13G6W7Q",
  "key14": "fG9axpjg6C1epaK3G4BfjF6zwm7su1r1DFnqZDwkRVZFq4zg99ayFdpRXUrryAXQrzKyvRJASbHt2D6mFd6rcqi",
  "key15": "2FjMZ78FchUG1dSWuQYCZJtNchyuEVTGNjHAMEhbD2it3a9TFXDsiRrncmxGRLWKDQxbReKgFaQAGLiZZppeGgwC",
  "key16": "3JdKkdgejLwuT4FZrNiQKuBYygkFprfH64z1oA6VsWwPJZSphCcvovpjbMyan69p9ELeRnrYkgVE85KBoHRUNG3y",
  "key17": "3La3E3anZdHeFHguDayEJs4v4GbAGTYKBkmppV9qDJFp1oQkWajy71jFRRAeQa5jxzu2MwgaY5RXzGAfBgCxbHYq",
  "key18": "4w358HwR6CkSX4ePguMxftgvCv8mZ59JKTzNshBwpNBwdWL8nUXWALPWEdKfvStrE6EQrnoCqSTYN18PbB1oZZDa",
  "key19": "27jMLrbGWzoeHdh2VCuEVxqPHJDDFEzRce5w19vCoaouQvLxp8G8WcMkqawek4rcrCRk8dZNRxWDdAoUvBA75QBK",
  "key20": "Ab7iCPkvAPDWmCT9H1h7CcRCXgTEvKAmdkfW9nyDHLLbYo9Gpw3brieAw6pRq4r6KLmYWZTLPrxTZwUAWkyJvkm",
  "key21": "3uqik7f7TdCVmiSe7BFhcG9k7tt75d9eGJPKUruFG1YxLXCxKVAiqYkTtpCnPEtm7NmAw82DqqQGBYrcM8oEUPjp",
  "key22": "4DCQaCG98oarKUKygffsoKz4h3pdpWAGfFNxSjsDETJt5VxeKr6vbGFo4o5Wm998GwFQsgQjvLUKbpdNaREgyiD5",
  "key23": "3UhJ8SSyYHxcoEpTBq7iFMfgwd2imbE1ENANF9ukXUkT5Buk1Y979B3GdB69iXh9ekv2utfZG4HvKggTgqytePxW",
  "key24": "254ZirTpfW9uCYptF24GCnh76uTaLAvz1LtbwMNZpgADzqKWAwrJFLgJFzYM99NLTa2gNazHJukaNLjEJEnr8fbm",
  "key25": "4hhqKDZ9pY7nhYsknfhJhEZyeynjirzfh81fYiayJsUBUoAMLiXn5igJNyzUvGGSLLRjWeVNzfAEYXYjaXPbgt4X",
  "key26": "HBvbHMqD6p2gDhuCDvv74m4sSWokTEYsFu7JASjXjSyLmt3pFXeMgchpwunDbL3XhowkdijqDYKZQqchD3YYkb4",
  "key27": "kS1rPsWkkXtQq4gFwpbb7gGHYVcPYVHSD9oYB12PZKW43z4PMyoVdEuiMUbymm8CcPTjQVPrfGgjHEBeAbSRKy6",
  "key28": "4TykcBAb7sKWyuQwjA1r2RWQrmnuhuRsNVSain7UhxQvBQh7HTYYaBpEGrQQmd7J9Qs6ev7922WqMQxbq4zteWkk",
  "key29": "3BNfpjvn3cisB6UNCQWiJ3CE4LAtUeJZHWUGGpttA6HopTjVbDfqSWmwbpF2L7UZZbQcaFGvkwpvvF42YCDH789m",
  "key30": "2qhchnZtMEzLnzKqPBCreJ1r8WUATo4C34Fs9bVzhn12kJXwae7w431YaXfk3NDkmdV1XF8Dwy5y58YuNe39K1C2",
  "key31": "kiCHNthf6JEkbkPpHstW5QeEsuGmHXZEb2pdpNskNE4FYraTCoei42Jww82ANmWWk6xa1gLMQYxzP1Hxn2rPL4s",
  "key32": "5LSPhCxPHxgf7DxQXmyDs16fmmCD83zcGAdD9c7aE41t6GDZ1p3Ko8v95SVvt9Q8LHs1AJNMNRU7X6qiXkD52Gc5",
  "key33": "4GEUL1C2pn7YrCuVzitHnV9uYqmF6jp5eY4h2S1o3xnp1reaEGQWhnyYaURVttyP5ZBSzuGbRwUhwx9Qdo7wR7Pu",
  "key34": "2f1HcwchHrL7Q8Kcxo8fFEj1QNFqwxGM7k5LoRBBT8jwxL7n1s4zQaNFxXRxG6qaaq4qxofHDtMWaYxg6yLB5usM",
  "key35": "2DiXaoGZpGLarCyFj2zDYSSbcXD4pu7sPJRByrn2XaPCNB9CfnBaVEsA2YJRDJwpgezTSMQVLkbcMxswP97BgxWm",
  "key36": "4fp6WTduhn447EB3DMZhv75ZE9xsGrZf2sWUZLmoDH5Qjagzqs3aiigwvrWNopy1nW2ZCurm5LeCMNK1beqWDzA3",
  "key37": "nP8i2Yxi2LXMHF87ALnWPGau34FC1H9Swnz3fjxHkPjT7YzLpufDDieCjrAKPgNsAqdJqCMpBMR6Lepk71taqU5",
  "key38": "3y54DuTkKu7U1BCo8c7k8dDb5YjRCBbdnjTyHYmZ4evLYoGPaEtqf6LfVuY3PjFDXVXXV8gttn5EDa9a7Ymf9ubV",
  "key39": "3Pn2rJChhk55WqoiCp6xaYwKzrdpV9qFmxWxacuuLvrufte8xZF3nPRFHeS8JfUSKTVRa1ZNkvAbWDWDqxkJakfm",
  "key40": "NXKP6Ep9c7QAUTKyNyYmk714tgfaCTbCjj6zHjNdtw6yhfTZzmb7jCr5wPw5aQy6AXZhuVcBDdh8q7pxodeUL9W",
  "key41": "5X8PuneeDrzmtSsNM2oZ2qw3LrdGmyPJhFLyi5V9wCHjq67HrvAXLxVFZsP9vgYCGnzaSrBKGpkGXtn1voWA1fRg",
  "key42": "28NTmzPvtCo34JfiXBTkVvMAU7emcN96Ye9omwPrhuTMbrN4cSnXKFRiwFTqMB7M4PZd78AJUj4NspWMt6Ws2UtZ",
  "key43": "3AjbEpRKyYYeEWCQnGHdKdp7Dy8yiSAzVvRWPrzwgXFD9Wh2peZGkydX6onszV9AE2A7E1mMi4y47yUrmKbXApY",
  "key44": "2oR729M9VSSwAfgBJGDkjR9BZspVHMJ2Xpok6zns2vE2yAaWMrq7zXfbVHCrZfRyeq5a7oWBn1VFrmhidXPNdLy9",
  "key45": "5ZQfPjxBoitNARUANjZqYuzbhaAyx9njQbk2tfFGEAuHSdsHpYXpLG5p2mSHS8sCA1qGdvPjSAzyYSRq1TaKGV1f"
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
