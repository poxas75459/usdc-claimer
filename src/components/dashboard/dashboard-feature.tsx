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
    "5WiZgPZXPc9FxB4AgqXqdoM79zgVVkn9SiThk6za3qPCWXu4CAigFK8FGWNpfET8XbSPWTUzm7xYAd4cdPgUMH1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYjoFn2nSAjPDHjCbMfbtqnYnaVCw3ktzEHa91ZTgDGwXYPZnvrSVY7Bh5V9nUXq1CmWjmKbS5roVymBB1X5bAH",
  "key1": "3t9nzjhkLEDeVrhGf97LdcNqoZCD2eurYGeMTyAxT7inHcZcjP7dPe9pyW87x2Kwxbssu3sEvvxw3xRDHZqhAyTM",
  "key2": "4KVqvvg9HF2znkM2mFi4Za13zxQjxi5QgzcRTWxby2aAv2hZCFPuq9hsmewHZDjxC9LMCNU4ZSTqz1kUpksj88GE",
  "key3": "5v4LERFz52LKHZDGSYxAysVPQqoiCZZRu6e7LWsjXzgjy6i8Fgf63bdmX1HvTs9mqZyDKv6tAsNRDP7oqYdbfRHG",
  "key4": "2fnUXwJdk1RmsMgbj5aXqDx2dsBrCddnp3gMtyPjkgAGtDQeheG975NQviypbDmGxqHsCWDEcx1gEmQEFDANne5G",
  "key5": "4UBt5NXSBSFtTAMMbVCkGpL9pZxEBjHeBcFzUYQg9caxuVQy5WhLpS229q8Wpv4Gehy5pTrKaDQN4QwtB5wgFP2a",
  "key6": "bU3E4ZEx6Jpyhdj97J3qhjVN5DxtRMxzTzhCKGfWsmk9wCBdmtuQnxSB9XicoG3G17qtfiC9p6r1npiKm2GzmPC",
  "key7": "5AitkqLLGRuZYUJsMQPqjpVV4WKttPNVb2WnSY6jxFcf5TJ9JTmhou3tp76mg852pLaJtBBCCXao1VAzVmtn1JyC",
  "key8": "2YVLPGCV88CHxdmdnmFAS2xrWAFCqtf3e7mywomU1eftqidyJSPfXLu6VdFsiM1dUogySbi7inicS8zkTvZsuDom",
  "key9": "32QyjGS4dH5EKqcRZGoepmyWhx5rAiq7HKBZWu5SL2Eku8MvRoSD3uHAtUUDXKMLBCd3zsV2kcDEpDgewsJprmMr",
  "key10": "4bKEfSuSCaSDh5mTjPkxoHS2pF6tsbXXj7wMzLnpRFLESX4MQpwMR9YDuCkyQTVdUv2GR18BijmMeh7XmYwzA2Ha",
  "key11": "56nQKAn8u32HJ4TWE7NP1jJYRoAfjnCZRkMQU8xNywL5PqXzmVeHhjG2rzm8fVCxhRFnFNSQtwn4pZB1Y18nHFVZ",
  "key12": "4MN9Psx3LenEJUnYc95NV8Bh7HhoDwUTcH38exS3oWM5oNBCG65d5HabvTD3HjEmvJwbrRqNQ55nGL4AerkkGeEc",
  "key13": "5AwBnFvuBw5fJQdTXwMQz6EBSHSwQfQR7WUB1Bi6PkG9wSJKGHJcUbemZTycQCksTrvjDp1RJwHA5yX8PoCFv88J",
  "key14": "26PB9ZtNxRLWT2B2N8p9kJAiHnriHZSJ4nmCYGA43mAQFDWXapYveBK6aSjHYC2TdUfihP4Q6uXDyYrTLfFwwR5H",
  "key15": "3wZJHmad1HVVFhmumeBfs1uoGiE21Sen5mDxUMhxtsMNnyLMVeW22usi9BBdB9Tfw25yvHYZUni1QLoAejjdER4a",
  "key16": "2ZaANVo1nrhEuZioJD5fAPbP8jRKVCKDri5TZmdgWoaBuED7SVyuLyxBEFoVi3TnRENxn5SK1tXVyZfGu9ZxdDzR",
  "key17": "4voxVaoPW3G9kFzhKenFu99rFdz6y5uheFdimZ6cQoYt7nBrrgzqZNaCbNgaZXzpoiffmGRVa7s8aaFiAGr14WP1",
  "key18": "5FYNHALbsf2UajD4muNFiaRTqbbZ5ZRozK8X6G9AQ41td82z4j7p7Y3J7hmH7eBaLs4ai9VJCKxfmxnUccCF9Vga",
  "key19": "3N4YTqQe4Vbnr1Ei2bqc4dSRViU57bzBo8TN7Bhw1Z4b2AEs7h5z1sttNKZYKrvpoHpARiXJVcuZH1d1WfDo2yd4",
  "key20": "jGZ1ZipbzYCYha3CM6JKhqSUkezPtNZubGhDFBVZdpRD8XLaRQbeUrMJBBb4DkHBgKYAwyj5ycV8ZPibAbBiTdj",
  "key21": "2Ebba2MkEs2k1Q8zFpGfDWv39i7ETUsGYiY1Ht2c5GZfFBjfyqhnU1hZHZqYKTRvgDeL9Dt8ACTDoK9rnidGMQ4n",
  "key22": "3b1DmPWUbr5ahgdBwRoiifzzWwrXCQWFWmdjX6UGWUziHL7dni4AcVPnGMfFjphySEzFWdQJssZ81MkmbNf3bjUA",
  "key23": "47WyP8KEUaWuC9tQJ6G1mWnxKjYhKFP8GvbrkZfRn6yAjKJMceF8DLwb5LeEPxZ9dKLfrQkeU75sj7FArzQzM2bK",
  "key24": "2k76kNH4cQEjbBGNMc7a5gipYj1bNuW2mte1rezJXGH7uK31xTucAgyHHp9PFi2JgFEAna5EhEJid7ApXyp5YQaU",
  "key25": "2jT375fkUKM3SKwJ3oWdTgwk5ZMYUDE7RgQLmyMYT2cxjgpsCG9JeqSCYHUVTVgLyVDSrh7XWRCaLWQmKAHLWUJs",
  "key26": "2eKTKRpdkkjRVQmpGZKEp8dvXrDdkruG2nBKVWjnsApTU87DPdsxohEXkvtuDHNGV4PXxBXDHKAySiuGpyirEe9D",
  "key27": "hsYjiRMjJGjyhtbboH4A76Q9RYXHQpPB92KjSo7tBt7ekgLQycLxNXJKW1jVJBtjVWJAVQVvAFVVqv1cVXTVnVn",
  "key28": "3xW7gVrjjrKUVmvqzuVnLyXAUyJrSvhPKRqfg93W35EE7vnT8oh5xSiUZKPxRn1hBxuFVkxAYAQtfFPyRjdfMvnz",
  "key29": "7UwTivDmmLWH7YRD52urMLvWbmRu2Zjbt97Y5cMWfSHoFc915beTRhZ6tj24TJxfPZctGm8h96oYCr7qS3Ygy27",
  "key30": "3irEsPWF191ZoRCm1TA2AYyGvUQVKejbW7JwgJwHsjcQ7Tu82A468PW3e92cFfvUtgx4srjhiM1LfR2k4WAsdPRC",
  "key31": "5igov7xVE8nUKqA5T17oc79jBfG1z2wmgFXPqcuTJU5DaENKrQijSWMvBUKEcypMp6KJbDDbLnMGzqenRMNmgBEv",
  "key32": "26rbNjnGQ5bxc3uHousLBzC5iz3bRn7dXpNjU8JUjoqc82oL5uoWJro8pjmsWWwc5zx9jFudj9muPNx2Aqwag7kS",
  "key33": "5vsoxr92xhuae7m2xCzaZ9JQhRg67gFMYftwxt6wLXeMFgQuqvnxYiJtEAPmwtCxicG4jqWVopm9mgejioEjuby1",
  "key34": "PqxsoiAQpoPa8k2JJZkmCq6iuz7aMeWBghbLjukFdU2myHsJSuocLwi342pHKwbYMPPGDofcSK2qBzbFUmW6VZQ",
  "key35": "2nosLwWcWfhTHxaLwygdip1p67yyiYwFnWq7fRDwj7wTDxFCj93HnzQhAxkbVuyp21PF4WNcwTVPt59pkmF8N6iR",
  "key36": "47n5dXhgGD6ux35XqHksLp7KoPS4Nt1kJ9Y2eiwajppmsjf7iNe8Hx9SZQpk3TrJVVpwWm1qvAtrZNX13zY11jq",
  "key37": "4qE1fTbFSJdeAw1DBRMfRyzNzGoJwfo8oX3ynuHg9ppA6PuGdHEPPFbUsMxJ2rzA8bin92jNfVzPTfzdy8w6cFiT",
  "key38": "29sM51CE4QgqCcwrkoTJ8Q4PM9DvBQ4Rn9ZhmTxnbAc6hyQAca6pQK4EpAqHB1oWmpymAV6g5kZS18vZJtqKg2YT",
  "key39": "kApacDGTErbaYinr1UsHhqwGsY1tmmYkKtG3QgGZhZRCKG4S1cfEEXdqLwBMSaihAzDhU9mK6oQJ4FQqc49WGPQ"
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
