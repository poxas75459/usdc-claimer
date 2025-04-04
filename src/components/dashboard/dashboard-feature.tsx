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
    "2BXV43WSnRry4hfV6Gr5GSvW6X7RzMMVpwwczsGmXDEX9zS8f947FDKbSSfx5hWCt1e4UUVnTRjtJewULcSZ7SP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MaQz2cYqAKEkRm1yBSkpgLCnM4AaUvSoKxhd2QxW4UMu1dXcSRj9qR2D5m5P9YkGZMSh2CWXqjNYYkiXt3jNzq8",
  "key1": "4bgkRmntnpoN3FG7XUhefwwnrLcYhxWS4Atv4tHrPk2UR6vyZeMHvV8FXkGZbQJfBGikodaEJwQ6sc8MpqLiEU1P",
  "key2": "4k5ERjbVBNhRT8kUCD3drHADw8oKWqVoYfxmhuBBwxy7PyYTtKcc8EY5cBfS5PSVn5RwojJANmxWLV2FUszCfcz9",
  "key3": "yiCkKdYd8z6nWfsNT2rEUnxausQDAu45wPiRn7Qo8k2Yw48d4W9VrxYtK6gooB3TbxGYDbNGnPi5zqz85ghTGwr",
  "key4": "3rQXDVhYeTNm11Aqq8JwWt1pnBfetrBvVx8z2o9sFzgMZRNtirDJQTTMZXGmdQgqDatwSaiyFxTiTycHVpCrvK7m",
  "key5": "ZDTrhgnzY9zMkjdS3WddhEsbFF9UT5rqKdXPhb55BitTZy5eyGbzv2viss9CfpujBzvzUdXUC68D7rAPLaWuGud",
  "key6": "5aLehFCPKKXzH7REvHN88a4xg9ZckWyEvXvorfnJtAtJkHQYMxtXoLqJBdYQ6CCnuQUaz5soieBsPsLHjdiAemb3",
  "key7": "6Q5v2jc7qsfGimFbur7bhAVvfNprwu5G848EChBj2kYJVY9BxctBd6PVJ6sUyfxH4S1eLRiBoueCyHFiaCGtufw",
  "key8": "5DznFM4zTAg1tZCpbbqoSTmA8j9J1BmZSfKTfjqiWaT4ZAA1v9R5C6VZt1uz4DwZmx64hgLfPkqwGKsRznTrykDo",
  "key9": "21JGKJRxNkR7v1LBams1Ht9NCvpPzvVr6yeFNpwwhMLfrSDmvNGoJiuuZXMnLivgVuUEv3wNpgxbHaskU3KBxfGw",
  "key10": "3vkto7q1jnZH8zVG61U24CKWk5UTUMa9FqnXifG5cUTzL2czDNpf4cPENS9P9cU4KPLs88uzmpSK7xUDMECUoTDc",
  "key11": "5T9QapBYWoJrmD1gDjdeDGiZVxDc4AQr8g3o1iTiGg5zUTAbtZYVJcUd6RYtPc861reva2ATH34xuGmMhcJoqqgk",
  "key12": "4BM72hrc4wEHkzd9YajcZqtPfoFkMGQwymtKmWMZ21kxr1jhhxcRUPQT7zqRcrDRk2piipdiSEQ32Y4xyF3i4EMQ",
  "key13": "4J5j5drGnXWfPD8g7ptw88spKn6snCUAvAuHkfwkJ9tSN6NJ4UoeLfy1eUnKNrHSR1w4Q6f4dkF4LDzaZf1XfQLq",
  "key14": "2mmAX71caEHBjqcQA3v25P2fGgbMojS211xMPiqpwJ7x7uMJBDGTt9fJXu7kgWqzhD6EKfmxadLFqG2Uwcmt7F9U",
  "key15": "3c7bkceE56QMaNP1VeDnWwA5jJKfZMKSSwuUkx1VAuK7xFtfBYBPdcLYBryw7ou93D9GXxi5LxFq42sMLA3H9FyC",
  "key16": "3icW1H3aL4fu1HdBXiuWg5nt8KZLEBXKCpGG7gtF5nZsVjR9KBuJTDdgR4eLkQFDLFBL4fY2ap4AzbmRybgjUwAX",
  "key17": "c16nc1LyNNzspXXcQZ1uziXNRLBBa3tQc9E1SgFgrdL3XrEgu73VR9X92jGmSu5bknbb8px1jjoiztPpo9ZR1GD",
  "key18": "2wX2rDvcgifSibcS1AowtCv6aCPW3Qru6G94Mg4pXFFehKh86UHz6V1C24pjgW4xFF1W792GTYaqk953A5f4CCA4",
  "key19": "5M3YawmwQA5nionk97rFREU6VUx5vvwZBQkGcevKUxzrhNC6VKCto3dbdt5s3dpGT79T5Ug1sf73Ajn4xgeXmDry",
  "key20": "nzpZCpPsFK4A3MfCwEmbgsKf6zvJx3B6xjZkDmU7cTzM1V2pYB7qJf8mMkW9gzJ7LhSySmB4KKN5P6wWamZwYUY",
  "key21": "BPVYGYuLoK4qgKzrq73YE4zP9U1LWtnmNgJ6PyD6dPFVbsxCEq9sN8qTbtJ75cikoq5TairghJG7Ru3QYuNNUdt",
  "key22": "3G8wAKjU6RknaxMKJw794imizVLRGfZPnnhfBcr6PeNu47qwZHXQrWncWCfApujj3Z9LCwrnhnVQE859xWybrPsb",
  "key23": "5S4gBr5x5qWPvcVbdUJ4Wi7DFw4imUq8ypvwmrurrZ3mN9ovrnNenXvhgNbYDmf8aQHKaJn21j5dyMqcc9q1Ad6f",
  "key24": "5Nkd1d8pK1h1PwoymgnDuFrFfUBLWoe6MVaMCi7utkHRs95FsebkMBKU2LsqXRw27xD7uaZBNGAKnKmr4XyL1nt5",
  "key25": "4a8jopuuKaVLsLojAekQjjfsdDrm6LGKH7mi6nWja39TGXqTx5RCBbEiZ8jBwk3EuGNJNVXBm6dWehyqkJDTi6qx",
  "key26": "4TaR1qEJRTLmPjKBDYDpg9WPBCAJU1UEaAHubzXSqeQSh9tbeXNqXMANsnRarAtkAE3tX6n6gTYtjkfKkmmuEziD",
  "key27": "5uMmpTN9R73uAviUTWvSFGQeAXXPv54gbDvJzQy5jiox77ip58Bi3cMF5Srs8odmi8YqpaA34KEJDB9Ywd9w9UKd",
  "key28": "hqHAtYTMn3gCg79yrhAEHuXfanTP5oyK8wtyCo8YNqLYxyP9atgrWcyj7q2hGUusPxzm7zs2vu72CFoZYhE9Vng",
  "key29": "26RHLZGLZZ6Riiyy3hU1sbuufHH1bWUnCKw7EgJrxn8ADig4huX38WMjx8NMau9M6fPS6TVBu5yVQfxFB1bcxtgu",
  "key30": "2cBGqNmx74ACxB66Phokcmxn6vsEQCW9tR6LvuUxio3hvj887eWTspbHwsYtEdPpKSpGhYUEQJAsPcHDjNwEYTfk",
  "key31": "21KNC4iMac1uBuxjKdXZnXX2mRVooJfbq5V46yytdCWFCyHDEhPvt1MQHmaTEm7YUkcQRrxUWisKvuPfzrLmAT2b",
  "key32": "5EwbxsgsY2f7bezAc8CGwZQw3iADxLh736YnGbMMY8jEnvi1QNxWDQZ1f2X5zYgPhZiqhkiizMP3yt1czZNzacJh",
  "key33": "4eLkscEpC9ogQQJAdExPvoQ2qLyKJ1nWXpYBgFsK9AJHKjRVBM3uErHF4WPPUMgFaiZgiH6CmnZZ84HdYoSpnP7a",
  "key34": "Nj9ec4hLzMaPgB2W6vZdPxzeiBmNuQMex43vEUXUkex4XBes6agKWbih2jUPuhZXz48jsbV5funDZwpHaCmWmef",
  "key35": "3ypx1LNeb1bxioWdzGgcQGbiCswpNoTB9oioXL1R2j6ZMFn64CCSqmn9tih1rn1ch4rHA2YfyDCkGXdhKwfFDPgm",
  "key36": "2cXod1n4VGsdffo9q6aoqsrLSHRTf54xCFwgjeftSR2j5A8QDb1jFZbepritoS9xiPCQ4N6kzvHYFtVREEfrDKy2",
  "key37": "TtaKCRNTBd3XnLonGsNeFCzChhaA19zGxMQsQvN4G83dDF6pyFJ81epWfvCWbTsTydhq368Mbrfwfv6KVACQEV1",
  "key38": "5RbCNL3URdBXP5obfhgitrZgP4E5wLBe8HeCZHfH5DeUXaUmEpEk75vEKnTUZH9z8D9EiYkmPTztjcWKov9gT3gi",
  "key39": "4rmgiHDv4mWk1AykycBdkFRFM1tMSPRHmmYLrWUmbSj2TTVG7jz5L8Kc4WaTe8RiNipPJmE8aXZamUdayYyf7PQZ",
  "key40": "2N9SHaX6b7ZUUiCAKT55BxSUYSV37shVcWw1P5xy8n5voYphJyJRMR58ApMhpHTNBWysjFP48X5X5wuB8MzZJjaV",
  "key41": "2DMpz4KkvzPfgMAr19QiZN8NZNS2eXRxYHQbFiCMVjyfdAb9xcahGUawdi3kwQhVWGCgVYfh4GVeveyQVhmgExPV",
  "key42": "4hdKmK3NzYRNxdsCSjx6ccVwyVBMSs81jnSVCqh662hHuJ3yXMwdjGELN6drHQQeXSP2UJA1pgxfibWBsyZjRQJj",
  "key43": "4W5FAffo77AgCyzpt43pxxuPGWiwa3gu9kKzXQSnsbTXwfaoM9fVjksmyeZ68xDtp6aQX1wnp5JkmHvTMjSp1sCH"
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
