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
    "5sPKeMvCYM7Xb48VDFmWErvSxJeNEEMFEmudGSW66jVF3GA16bqZnFzK1Sjy9UwmQsQR3LAbAMUUTsjR92tmG26d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYuaQmkiQyWJThHgMACWWygxp376PVZThMdMgVUH3XfJZ3dWm8b4KD42VLD6JBWwoC2GwFLN4XNZxmRDfxEtnMg",
  "key1": "u13yRVfcGAgVCawcKbVsJjz3BNDBbU2t8M59pqXkLgi6p3vioT4pNLkS4MxTWH7BszcyjzkGZuAGy8pmqozPVvo",
  "key2": "2c5N97nZLoyBoYzoiyBKDHiwbDLdKkM3i1Be6j7pnTMWrtGodzcu84kcCJv5PDz8PCN2Kuk9YNbGXZP7xoFWVFM1",
  "key3": "3HmghZWnobjqgm7VMWBZ2WnFoYgs9sS9LGqctHvAkjS8TGUAy39cjpYNg6UUtoJaUdabkhmSEE9KTNSvYV4ayUnj",
  "key4": "5DdYzADctn99cZB7VQTww4LdRodAWzhpzzHFuBVuA6Qox4ApzdizzVgzRVbnjxmRxUbALfMRRNwFLn1RKmvWXUQF",
  "key5": "4jd6e9nQ3GBMgj99vzfgF595jQzf2ASAuGc3Bs3Ph1PnNUfamAFsu7w77zt3yPyg8HSCRiUZ3tzKypSgYkd8EMZV",
  "key6": "72if4Fi4SvdKvxTQ3b9igFRoD89zkfCkpkcYb147gMWFCsF1Bwi8DdHeQycju62VjpVsADFrN3S2jzVHXbEPgdC",
  "key7": "3FoiRWrwid7kSTiwA6xokyBY6jUNEYhuQyVJwPYccocmvxXrw1wL49wVqxrJhhE9yktGtn8PrriJ9ndqF8tapV9T",
  "key8": "4pbRoE4p1QXpigZbivW9Y28SWArBp36u2S3hqXKnBhmfYUmAo8breoM8zunzWmCWcmsT6k6BuVHy7EpbPApRadAt",
  "key9": "3WEEQ6NVVnrA7H216DPY2EWbTM2NqGTC6vmQZHsBRmcA9tkx4qZExbGGgUEtMncwwdsS7GURUBoL8oAVdZuVdZsZ",
  "key10": "4S8HwQLeGohk8oS6Ayc48eDVUYhAmj7ok7U7GnKj8fRZxRrPSzvCajQZGgWt7xnrncfjS6Bub115KAVGBMR1SfF1",
  "key11": "5w3pvzvbZekhi5uhyJc9cp5ksPhMTTqUnDY41YL1W7XXa5LBvDwBWedBfNVtjXFTSw1c3seNHf898bjsRG3xNUpw",
  "key12": "4EH9eAdco8ncPsL9m6TJxX8XY7yB6dDfTkyVRdwLVaAS56URkwGWNBY7ZgyLz6HCMQCfn1rGEsP2VeeaFoYGChBE",
  "key13": "4WEC7AA5r6kkq2fdTaNY7gd7G1xFcSU7i2oCVyC3KApkmf4MnyLHrAWW5556dhvAwrNLJ3uoWBJrzJE4vZc7bd6G",
  "key14": "3DCTgy2XiwwrA3PBLUo4gVXLs7K9SL8cFmt8s5NMUsTRUG92ShDLqPi1wDfdo8kE7BBJEsG39AtgPu6GS6wnBZyz",
  "key15": "5f52AAVc8DSnhQRriJ2hHdgy5RMqpoHfYypLNkatTZyaTtXDZneUPvAuL95uaYovYcdLq3AtyoAdaUjSywQsrhxW",
  "key16": "5rsw8TdVE9QuVZjnAmkwcjty62eedYs3x3FEABKppruS5APM1iZGzCpQSUR7KD2PqFhktTxmu4GQdR9svnvunr8W",
  "key17": "5Bdnw5tz2v7HaPRGdfXHmsK2aobiY7iKCMdQM4adBgBGEziPzSyG6HChZHs7veh1Xuz6YrKDfUGHsYPi1PGbBaHV",
  "key18": "UtBFvRvkpEbd8x5sf4pJiXiPzyHhdHzoMkG5aakC7i9i9DwJ3RRG6Ne8fdjF2kofzenRBLm6yVvJ7uYPHkjvAqe",
  "key19": "2QHjozUDLz27BSzhTQL8EcBQW7pKY45wefSmzoc2xXyFSDxPGZXDJLAQtqHxYNgqBoMoK1JpX41PmsBHzXaRScuF",
  "key20": "29LQcxbzLFw8Xo3ytPdSgc3hWz34U6FhjjpgYrDSxgvsAGkHNyZBoipiC7QjfeDiKmyR4ovXG5LSq4TfBkcx35Bj",
  "key21": "vcDeHqvHjHkTPTpd3kP4UMnHxtiaMCTHbsSeqt3kBDgoTDrcCh6YbQcRKAdx1dgjTcy2JTkMr9sHwucuCzgCfLV",
  "key22": "3bpi4w4G2B2erb3JBL7KAgihN3wMZqNiE2hxYgKPbzZD4hqj32d5RvgkZFfhzPm3chbBzf9Ai2GJWf2fUPQcGoxp",
  "key23": "23xXdjGNheZGHTP3Kjvnyb87o8xvZFqzv7HWUCPmuvx4hApGwFkBQL3XKJEuPc8uJgBDeXMgvDJXta4ddvgK1K5k",
  "key24": "5vvLLdtDANnDaMvcgNZnZUdetBqc2W8t6RMEQxaGM5ooE9RtXtTZdjHncFYWLJ4G4VjR2Tdu79upqowARhq7iYyZ",
  "key25": "QX4PBTs9eizU9pmMHkuLXZ91ZS2TcyMMAQnNqcz7e7QG8xXEJvBSm9MNqRvDyKVcdmHKopTfYjTVidMy6KoLnKS",
  "key26": "3f6KruN4tAsTSCGPEbbhBMueuYdz4789gdynic5U57gYUJ84fMRE48wW7ebP5h5wsJJz923tJfVLNY7EpaVUGU3M",
  "key27": "3bULYmF6wHapxdZUKBG9h3jKmbWhocAAGr8UNvtc5o5SkYuoNA2d7qVBnrqo7zqhm5hFu74nTEFLH1Taomng1dpm",
  "key28": "3ZqPezYQ8v9kjLLoivcJXF7Vri1N2w3YUG6Rgogmw2uk72LVTDQqGryTAheRReQenWyHy2ngUwxVMja7wPVj2ohq",
  "key29": "at4GAq13AhM1wjb2qDbS5D4UZa5rvTMajDjGrPAVy9fW5xkUYc2R1TkXL7PVGdGrhJCT7DBmHEfxC8dbxnzwN3L",
  "key30": "53vYGY7PpL4UdgYHkrrUEaLb9VXzaEd8nFRpVn9gaTwL73CxXnT1Wr1REWCip5QGyH7wMFXLQ84hdg4i4JLvh6fF",
  "key31": "42tNMFXgbcnLmu52fCBHwcrjDk5etbwjmL2bzJTK67MQZnA3n7bLRbQ2NsiYDvonH6dfWHmX1scjy3GyDERfeZna",
  "key32": "pfh5z6Adfwx7g4p7cTB5LKkdHQ1Et8QJeiZgHELbPJZbuhQxZ1N2pBvUWAom8644ecUQJ8ubACEkuU8iWQY4X3d",
  "key33": "5zNA8TCLJdebHty5RFTRBZBXwY7sUtZe6KjFwK94PQmrFDyKZio7kFaonyVF2Xv39bqaToWE2QNu3UZq5ErGdck9",
  "key34": "85cwZRgyDCJJVmEaxooTgKnrj58H41UF4WsrKj3ke1RpuXLSA1tQsJVria7pScNQLEomjFvne4V7NWicVkT1ZNw",
  "key35": "4V2JM5EqzVJ2FoDYfdVLBeMHrDkxGD7nvY1m8e1GSsme6F3A7CWPpjVjd2xUEkD1FSdg5tpmnkU7fjZiH3RxG28m",
  "key36": "4Z8E1NbjG9ohFTvpfwUX7oQtQHQ57GKG57VoGS6RmHKpainJFXSzjPkWCdnHAb77EiCyy5fLiTGte6evJBxo5TmK",
  "key37": "2frCvQkJXV6LNUeMih5evKyyM6rmSDg82qGbrnqsFryBxvgNrrTCyP8ZWvfj7AG8QVmuQKK7eQupexGAWMmAVZG7",
  "key38": "2vdxBXxY6VyigptrFKmX1UXik9k2bt5f1SS1UKvKAqhkYQW1Ta4CMNCrFEjmmmWjijd7dovMbDkmuP5VEgcLgrtU",
  "key39": "4CMM1M4iGo4JSJDfRKSCQY43UYbhahnkygfLqGc7r9VZCLstKees19dtRNGNuYPsjMvpNURxqRWjeNwCMAKCyxwH",
  "key40": "5MSnYuYXsUz4SaMabD8QH81a1emrKy373tJBYiURj9sQw49SezkXww7iGaWvWXymQuesUygKxuuoRofK2nUJtHNZ",
  "key41": "4jrpXAG3QiH1HHrk5ZZpWENY7fqCxMAjj6ftcKCvkhyFcW5yg8SJ9nCBkjVhLAvmWY7E2U8fwaK4zWhqkBRdcTj9",
  "key42": "5qtcQgU5K9rE7wpN4Q2ZWJuiZBekZCjfn41N1PQcQefbqShqcfDd64rvTifMD41dsKEb8wCEyQCc3Qrj9VGuX68p",
  "key43": "2Uxi8Lmpaph3RusZdVzvPuRGvDNXQH6mGnbD2g9AqbUkcVVsVJ2aDEerUTjgAqokddLLaTZZgxAfpPCmGNAzBPRd",
  "key44": "3drHoaQ1FyBwCvySbtZwJfE9mc1HecJJL6aBTm65sawgw8AKGTpfHdhMxmVpHMorXs1tdaaTTSYFeCeLHXMUrnaD",
  "key45": "3mxEa6ACZFF4gpFi4dxcem3T3TJFXy5jk2KWBZYBMMwik8H9KTiTNDfjodThPQiBgnDFAtZ7VBrp8Zd99dUTXri9"
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
