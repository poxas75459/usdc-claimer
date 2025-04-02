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
    "527HSRncpjUJCp2NuG8pZ6sfEzz4eWYaZgkHxcNAqDQLkLrPSao7999JrX6iAjiV48dDxqSFmPvqQRAw8LbDe7Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7MKckb1YtRsLF8DQ56KFLwedKW8Bgj5xhhDDaGsAztegrAizd32mwUYfSQDvr3yxkuVWZ3fvwYYakszuJr77S21",
  "key1": "44ni3tTke1zvm5PAnhm2T7uQxxq4qYcPbm87u2zdX1Jh3kdfS7BLHYZVxKbtCKZBfqZBvwXWrSfydTBFQFeKfyBg",
  "key2": "5rDRwQ78uh19LJa6oArmTK7xyjFXMzFT8qxDFH84QgBBgSX1DZmGmK8BUVYA12eX58p6fN3h5uBiHEJHHKjeJe13",
  "key3": "2YW9CT8udKhsaspMTC6Lb5b9yvnxJnt9mpzg1xRWUSMV3b9GVjhmtnj81rxuyM4uiTGZcFgZatNArejV1Qz51iAs",
  "key4": "3zSpKY5tQynEeumL6bpu4EVZcYerJFyydS5ZWVxC1ZLjBeSNPwHAC2ssJL5991wiAjDhpd65oCKNLvShLuJRaegz",
  "key5": "2p9qjrqvC1cPBhvovpyJF1f6nTccm4FdcP5G7W2zEZtRk3iUNReAgeL1AFY9PiF4ioD4mQYG96rKrQudGTAwyNS9",
  "key6": "3NdixVZcBHFhsUNgxdAN8AQ14D8G4zdSKjK9do6yjocUybEc4sPzQowAc7iqmAQQ7nBT5HYWKRks6CzUSfEHvqqd",
  "key7": "4ovw418VYkySHS4jKZU9Z6uRqDayYdcbUxDuteVquysE9mDb1HB1b3HTq4H7XNtyQW5ffbHR1uNkAndpDnWBahxp",
  "key8": "3PAqFWNN7QNt3mZus3ejKVmkkAymL4fvFRuj2k4ser8Bw1vWJeHE2S87cP7jCu4dhvVeGT2ni5tiysKRwuWUSFqf",
  "key9": "BhCVbX8HwchPP5vpaMp2dgYcK1XaNxrcdSdS18sfNsdZXS9UTyiySV7Dg5oBrYyNGiZmK5LT38zsqv98YYLFyF4",
  "key10": "53rdCHCzr3XoxxUNaYBdc135a4dX2EWCZR1VP3y7yWe8SoFbm85Rr1akhe2GnXtFqABhRLeuPuQDZiPSmREaSH7N",
  "key11": "3gHLZotYgEWZ1yLCic7WRWEzrPfPcBApMuNdQvzRiC6pNYcmvLVtVn29iTQeWWY4YCBcBqPpHPJp6zMMogigdGdz",
  "key12": "4RU8omS9Dv5ZmkDjW6KQag8VHFVZzAtxrRbNbvVEaLNnMijHPGnvCKDb8ZBi7XyqYzwhn5473jxdY5YzPc49d6d6",
  "key13": "4vTASVbSDBvBBACFAxuTXQkQ9TttnhiV4jumRetsjxkqt3yKnfkCVKSRTfNrD4ZzTbyUYvb6m448aDfRtqtUuYZL",
  "key14": "4cDo4Wq1VAPN37diJCcHqyozEALCF1UHoJ8Sg4dzw7zPcMKtMipNxysKjENjjxa17YmVRf54BARJHXLEtaUeDFsK",
  "key15": "6e4xQHn9jZA16CnWvZwTR47bMgz6WZ9jBGY9WU71FSUBbL8hdRFH7PNVaNar93hiZoxYewgaffpy1b13kq7hZVg",
  "key16": "2uEyJtQA5sZ6eqyfPfHugXmbyrLV2YnNqRaXUvpe7cPNsuD5MkPwP59e1zKwxKjG6SCpjEY1ozh95iDupDYsGcya",
  "key17": "2xMMHw2J4Pj41JfptndWxLG2QL1MEcqPvWutLcQVFiuujWBJJnkhEWm5oqsPzwX8FQNyNUhA5ymb8un8P7tSh523",
  "key18": "3rY95hPdutoM2Upfvkq8brF3mfLdLsNgGvtLqCeQwyWrzvni5add3LQjYBB9zM2FHpYZhEKre6iRUozQvRUzjSGK",
  "key19": "u4DNm9KefcL7bAQhhDg57ggmuMafd2M3R7CK1uSG4YiTsme97DWmuTcK1xdNt4GoZzYZ5sPMC6bsQ89PiFM2MYt",
  "key20": "aXXyjtW5QrJwBe46rzmiw2RvMJArkAaGpvSJyWRjnEaVbtwHWCyZbsME9RCKokyEzb4TD1DjSAQRPM1ZY3axqp9",
  "key21": "xqvgmVrizGSQknjUvHDqeEMBxLqjztaWbSDdgVLMgmscqUQzuHkFx9g72zfgsMtpcDff8DwL3A5VJZhX9dZ1FDe",
  "key22": "5G8x3jN22V2ByRPLZuTqBgWki8amEdQ8eRmhXQdT1FDzY3QQH1c5BwrA3ty4mPgJAKchBNeor8y9fmVZjFxiBR7X",
  "key23": "5v7WNGFTUwykrabeBtjWK2iRrjzBwB6kgDnSQEM7vMzzgCxArQpQSwDdoe5YrE5Y8JMVUZQyw18jzagCkG5wHFhx",
  "key24": "2VKHcUgVkBH1bdsRy6XVrFeFX1T7dZk9jKYrkhyMzPSVWMW9FjMVPJcmWf4naV6uDnJvjosMm8synz73KEGnmMmY",
  "key25": "3W7awkkyP85sMWw1m3LizPUAR2SX4cF6WGy5P1cHLV3JatPjZ5VeE3avkMKGJ4EpU1tsGcPBqoNHa1sJjodHjnZ6",
  "key26": "2ieAjJKewT6EbgVHzzYgXVtoisdQLY7Nr2JBH4LzGrXDM3wewpKMGGNXkNw5WWxTSPviK5ckRFqFyjRg6jPTCPbi",
  "key27": "2o8LGMRY5Q7noX8rwqg1z3LdfPMvvAbbt7iHEVNfRUcXGz43X7Le3zhhqz5KcSJ3YtUnHDXgDjLoCMzsqYtmkFMN",
  "key28": "2tDN3n8NShcu2NkaEYfCE5DySxYqhAqQTMR8MiRLs25YDe9R4Ld9h2HmsRJhciQV2eXnNwpHEJjrXRZeSJDn2UnS",
  "key29": "4tSFwep8XTf6SUytEmZ4Q4XXPsjxxAX2vcyPTcWqywSExWiGXCQHPRNqCVZ8DC3RgzYckibRsiiojRQyDfi7FMrr",
  "key30": "3JhAVwHnNXNtzdZfTo7JVkuwNK99rvX8PQpDPp3d6QZEgXsucpCyebMdxuUxUCYykLX1ZoKHcqMowdNPCEtMErny",
  "key31": "2g5AgSKtQDsgZBqeFjXukJupQhgVQZuKbcgSt2EWmPyn75SrsExQ2YSJAsXscErh1v1TNtRqmwoLmMnYBtN4MzXi",
  "key32": "5RfD4Xxz8s9EjTkpBMCJixjd2RGSUPhwcSiQGRhR3YKki6c4Eh8SssA2v7of592iE2iSDkmN8UsFfcc8b2fYEL1e",
  "key33": "YQpu2AY2fX4o8XVf1cZEm2nvoWXKcLm5JNdpuvWVDYU7XHgV45FrE9eXondUHNxgYmMJoK1b4hdfefVaHpMdQPC",
  "key34": "3n32MehsvLPxehq4kZjWiEz6opSr1q2cXsn7bZkKQvbiB9DLgAQNebpVpmr4pXeFh4QcpwVgmiZgWvjuMx8BcXRk",
  "key35": "3FKiJAEZZx6di87jV5ETtj4tMiKeMPX7aNA8gSnMfqBh8S4RNWzK17vyRmpWH771T4nwZip6CjzqV4c34Ew6iwmV",
  "key36": "22ghCDxMELZgEWbbXcUpQJqozzwd1CdiFY2PBE5cMyVhHFnyZeya9rPxp2U77jkWzoJxJq3sU4avprLaUkTjne5u",
  "key37": "3JR3dF25BCvfQk9QWgggZt7xZoFbwpu2Tb2R7gmRZ4paYfEj8yrivDV4AMSVQn7u8Er7zkstbSq4neBsSMKyMzBs",
  "key38": "385acCwCUc4WFzvxjW6B6BTFcvjQvzGJKspVzf6grttX5vwzbSmTmFknYzgSv9jYmB1KWuCV9K4qnQwm4NW1xSWc",
  "key39": "3zqhDwZAYQznCVuVaeayvvi3fcewFTNBTCMPbxEDyGTyoQ1kPtgxo13FvH8N3nzHMkc57eY5DBCHZBF7BaMvSxTB",
  "key40": "4jcd1MgNxgUtaSRWm9jnrtjtypApD5FSNiWEguzqSWe1jz3fzurK7wh2k9AXQHAegSwyWiuzLtAt491xnoEAUpBr",
  "key41": "5gqnLeyXbe2npfLBR7uugi5GZ3gyB6ZXM7X2VwhwRxBfV7EMmx8ZqPNHB3atTWkkhYKzXxg8gxD6dAkUjHuWhWKa",
  "key42": "3zHcrjiwyQWiASCmBYpUUs4QVqgNNQLd8DXoNafWZxVoCfGRcUfjALC4eCFqymwFaTFMYWjuZreyo8rVkwbpwf5C",
  "key43": "3VzraDo9vhteRRmitJBvFoEXGHUJnUuCpkFfSaCNfuo5UcuyZtRnqEY591yTh7cLxWzdRT2DapFJXTo6LsQW9gbe",
  "key44": "2dm6rvH2MJHo5RSTjH41eYogMHGfnZVvfnYh4pY1X1xNVck3z1LtdTp3QVqQUcdtWxEjtBE3AkPj46KgcELHMGbB",
  "key45": "4V3v9ddFt2AFEcjTnuptU3EcW2efGLtw8Ku9mUaJMzKbTxAa9ySTs8beEyf1PF8Dr5N8LtzS8RP4J8r6Rbv2RkTu"
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
