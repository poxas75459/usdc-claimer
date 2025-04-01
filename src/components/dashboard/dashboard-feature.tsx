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
    "62nkzRx1akpn6drUpkMkTQqpQecgHybHHc6vZ9CUjCHxxhskg5QNQuCCkrh9j2Us4ErcvMmVLPbBpvRKhgVG3Spg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBrisNJhwmm4Pxc3N7rXjDCG8aN324WfTggq48mY75qfeM6ukRHMkUA1D21Epcaoiw2hMWSooWoSQdKEqhyVXyL",
  "key1": "3o5nAnEHP5ZbRzG9Haw4MrbwsCsmPyJaYy4hDA51czj4SMKPcUxXgLFgQEcweWp6JynkeGkotXgHemHUgJguafED",
  "key2": "4AtFAmget82KVST9A17RDXdoYLU1U7TAFvNfX8zy4JpifX5CcZRwTGuCRDnqZpWmManiPXJxmwqM7xpT8xXSRx9e",
  "key3": "5YeDbVDy2itzdur71jMxRmVRyZaFig1qJmA9ApuqHvrBBZdZZTkkdUfPuwaqiLCsKF9L7B6tkqYZczx9szzB3aEc",
  "key4": "5c7ATsR5GGfnDd8LWkjuLq2AaFSHkNqubmefEHrHQJB4jX25GKk5yYe4D7cPwk7tefqp4YPGwmRyxHHeJ5ziV2BZ",
  "key5": "DYyHg9sATeYYaZREzUgmNc9uTwwCTRDWaiRDDCnNxP4NtQRuuzrKBcASGPvZ4soaUrhuiDGRYUnUXRAxVLiB2ZH",
  "key6": "5RfgxfdZfa9ZCYasWUsDibrDvjryyAVFJws4crH3tGTDeXXv8L7yuoBw59YAEsJ7hFtyKTBpuzuAXwy5hHHVHMTG",
  "key7": "4oHCRBcrCKjx9G5pkgtBj8cHfQs1tZsWByf2KvLBxV4Rc2GJcxrxG7HpyjVLSatvsK5o6ynmfFkJBDhQ4BTAQCbv",
  "key8": "5DHAJcCQ2RkyM7zyEVo12q1j6C9TbVK6K4EWokgyikAtAqrJk88c8p6qwPRaGvAkC999qLB8B38CvbXwKUHoR3oa",
  "key9": "4vdxEjibC3CWg9W1ahaEDaYFA1bCP7YX3H2QCxFNe8WfFGSfMAF5BFXwBn6sGfypR3FVb5pVgycXX22LnpyFtD6Q",
  "key10": "66ETWptx5irQAyjb8nFABgVnyaRwByiBDVCDozZCygaVLY7BQN7KXMBfHxVSFQf9wu4HJFMtysWv8QQj7dhwRMJ6",
  "key11": "3mSMuhHEMag5SGssfYmdockKKDYxcuwr13fUdoXEMgUtByXaodbAnHCMsLv5u7pCBszEJfLx4Nf8w7XpyDVXLRL1",
  "key12": "3F4svrC9QLHCdCUFHH2FqPCMSxrw9vMzrJZzpzeYRJ1paEf1LwUK76KjBLdCNHo4M6hkUNdaT3jdHNy4isogCZ3X",
  "key13": "vpvu7nBvENoKQvfK8BMWhqRcrRYwnktmbQa6X6TQaM5joKjrLtJneeEkLCxZNyNT1iMKNHkVU6mCRPuP4vnWfPA",
  "key14": "vQzWpaMPPD8aDrtopTZ9MXzDXWdp6g5a28352uF82L7eviNyuKJgaS5ZuFfuxt39U2K3PL6K1pitLZ2spkUftSq",
  "key15": "FDYccWUyvExiiPbuT2XukKeKm9r1c9sFL2G8v6VXhqDiPgVkRrcKYXcwyMmTaoRS5yNGfgsLJ2eADbm6eEcucUA",
  "key16": "375Ne4KafLhibE9ydrFinpiit7e35me1qhRQ3SZUss89ZRP8hxUXP1vHZUR6yGJx3348aQRcEK5GPjYgnCYfgsSV",
  "key17": "3U2gjcUEGoiqbWZiq37wWC4yupemVbmRhKjs5nhBAJY1yi8ttH71GG8b4MjYg36fUy2j3bgfNYMZwwp6a2tPpSZy",
  "key18": "5NZVguYzg21QPwypsULfm22GMbRhBmrrvcaXRpr1TBJF3QJLzRBHRtrMNhnJTaUT2544MZqjnmvg9koKrdpzHHUC",
  "key19": "3bc1QhEBtbDFKtfucuvBvo8nxGuqWgWH5sx91H6fq5wqTxs5XivNL5gWC7RC3LQggEQCKGGLnT9eNiVrAT5ziBj",
  "key20": "5vAvJvnj1Vu86BnVV83SSWzSXqdZE7q2V58hcwrrSshpBaSow33cHubX7VPH7pdrUARhuxRRcxeRwrDq7G2M5B4q",
  "key21": "1Ndcn5zV78mXeq8TinmRAN3SauhzNoiGDPSNdJfWzj4vAo53f32KBi7k5vGtKdXo5PuZNCegjctkKwpVha5ey2E",
  "key22": "4McBMLk12o4NtdYEMF5oiq55PXq8FepSZBdg8ZkLjk93DfFV9RGpCEJhYkGsKjyBcMPcr1y5PhpbDikFvGf1U2ja",
  "key23": "1rrYAK1P6FhGFNHoELYNTmze3HKvgZVxMpiUYhQLhFp6FdXb941FWiNx3y5vSXVkDoMgrsSmAKUgUssUBEiugJB",
  "key24": "2nE8fL16WhuCPwfc1Ya9hXUwFUGaSukjFPHocjndQN9n9m2s2Afdi9pzkgjSNvEZvvBLkpXpiJRYcnkUAoMBQfJH",
  "key25": "21oMAyGtnQDTXzuneFZ1iDML7cMug63xwZpfWKPb8jMVQccNMBwKPkUPbKafyM4zU93JuCtfnwYCfzFrYunRNRhX",
  "key26": "3qvmquuiGXz4ARg3r6ytTuezeexHSKULdTEDBiHBPahbxT8g6FoTeRqTAuAemmmFKgvWodbhgBFLdU3K14BtHF2o",
  "key27": "3ukJqk2uXcp6tBa8iYJ7wi1TECh8CHe9EYQG6uEHJbcQqYPcvC6B2KY23zPD3AA6ogtmgAAL5CezjbELPyxc5Djb",
  "key28": "5A5HWELLFF3mnSMhgpBSdZVK7v5M1sf6NW1FkhSA6fVYypdckYYWthnjowCKcSEobBphRUWh7zFw6o5maMPYzDaA",
  "key29": "23c9bvxvW3aVCbVoAM6J3hs7BU868uSG1wquWuF1yUAsd5t1b3PMBeo6voQDUUJfxt92bc17aMQJdUveW1N8DC4n",
  "key30": "2ExkHrKsphVU3PPa2VPAwN9gMcXV5ZDKFeteX29PkbLDU6rXqCW8ZWppVaSiuBEi7AtgcjZbZHxP12b23yKkcGQi",
  "key31": "4bFCG639SKL6e9VHYKrvcC7MF7rHQkAWMtzHoVTz6yiZ9sHhjYDRxA8rorGmK576AwgXSbEzcuw4smCnu8FhSUUi",
  "key32": "SfxVJc2sDfYGdAdZeLbgJr8sYHo5ULatowR6VHzzhnLPcHT5iu491k3prDNUGY1YLAoo66Uakf8vEyeBjPyEVPs",
  "key33": "BXAxr4x77iDH3mYaYMUULW7JiGtFT8Rkzhcjo5JqcN1nDbZAEuaxKoo45xVRP9KzD6xQP7k1LCJbBXNjugQUERG",
  "key34": "5Vmd8tUe2ZB1gfWXVv42WpWVVj2ayis9SHEwz5k8Xs6jaHr4WrqjMgj6miUkNE24EZfo33agkDJNZtvrwScSdadw",
  "key35": "AwJuaZYwacqCrBT7kLFwpV3UDotRaBZgzX36eW7PqMWYs37UpsE34SGcp18W8EVvFqguUBkzqUtDP1b6aMR7CtJ",
  "key36": "3m4eojdXav1efgzSdzFY5K8fgXN9CrMuxCX4vyMHrfCfhPmVFxuwaRUPurSKSJeeDgkM3jZYmtPPLKaYjUdztiWW",
  "key37": "2XVJVCfZ3eQn4YzajQcYrfwpp9LgMF1N26Bv9suP379CHgnUF8Kp5a8o32nBfisia7Wx2t39B4NHTqdi3tKnn4cr",
  "key38": "2zQFVhFnnNKzxW3brqtnPZnmRBm9Mhc3UvEBKQyCfxAUS9wxuCHaxdMF6sprrfLAzM7cUxL2591CqJnpxdyN8QMk",
  "key39": "4j3GoNUkhJEuvTp5N1JFjWHh1KpqEC7ZgAMTPdE7F5ztdEe8vnu2wEoghv1X6yRtPc2B9oTBeAJmP2mdVav3rjVf",
  "key40": "Sni5nzSVnEmH1gmKW12h8QLhYKTogzqgKeVc5DW8WWFQNJX448C3vAGg67TbTJ3EfPLMvXBXmvkM2x1TFFVTpK1",
  "key41": "bCDVPTMPSDP8x7mB9twE7TnHtuDeWYQ5cBMzDYP9urvChkA7v5XwDuMD4F33fXz6V8efRdfJmeeFPHngmbTo16J",
  "key42": "3jnkNdpaeyFWDQH27TAdEnc3XhBd3JpTfQiyqbBkoxvsuyfPSkWLuHioeFCNvg2S6KPAs3o2LY5dXc4siSHmuVAb",
  "key43": "5tBrSMBCfBPz2sbYTybebRPekuYSyE7wUNzcMm9WS4JAnHGqkJDFwKj6UpowhARgTjo2NNzA7bzi8sZuvJypxE1V",
  "key44": "28pjQibXDVW3Z9c5z2Ww3K1xAXEMsGqUwKmPCb1VedDTUGFbvLQwvhjmT1TqbktTgpQ2KpqawTX8xQJmgiMc9om9",
  "key45": "3a4yR8Qh63dYsEAfWydT9iYs88mBGAP8u61kDHoGbUcFR7ndmYMYsd73Yx5vTYjsBgWw8ZCXSAwSQ44HjQRpgiM3",
  "key46": "4XMyxjCCDp2nLJmuP83LyUMPUVGT7cY6TM8smoiaL8RcibtToZ586u4nrvTu8fF9KRuvaR9r2yU1vCjptj35hCsj",
  "key47": "47HBG5CJYBkZ9wNiBZMQs6suaRFZ3zyQMxCMSfjmef2hdstSrHN8LbyzZ8w4xmKRTahUHYQrKoGowqNMGKjKatEJ",
  "key48": "yUCK4bhK1C8Yo1yjeaaeDLkUaWN9R1RmfygKyqYFJhbnU6tiDuVx1ruk7DAfEuLTHgqVus5Cp6ESnT25xRwQHyu"
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
