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
    "1naJdt4BWojNMEBbqo7izkJPB4QwxcSnrsogMLaCdVKzARpRmT37CXf1EdFQEaUWoazBwi9SR96zFpSDJLWGVaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2245SVMYcxfqWrimL2MEmf6jSPwRqWDmYQ63LjgWnWF8qLWgLbTGWw5VsUpG5Yo5WCfTpwiPVvEa7nzNt5eLychM",
  "key1": "21KNwMtQZXxyHSUA6HcFDiQWBcNN5U2XjeaEog23fPGvY9hpVhUxrQEN1tUybQXBREcf8ni3jw6Y3BfNufRi7vGH",
  "key2": "2wwK246HSrA7ALpZv69WVwNF7yP9xss4DyrF13vv2BJjcp2nVWhNDVQiJ6gcaicZW8YbohbS5THLWoeRKpvjyAX",
  "key3": "4sN78wTmCbTjjS8Lwbt78bHqQEvj1Y342xsrC9ofRWSxtWh8QPbDHGybirGjNKcDw67r5SZDroJBEWU6t3Hkhohc",
  "key4": "xWzbK6tFXz7uz7CAAB77aNz7fwmLnLLuC74H17X9Akcnac19Uwh1zmaWP3dnUcP69NoNJaxPiMwsoeaA47iRLo5",
  "key5": "5zuQnWbqrE2XK3EEqzKtp6ocUGmr1NqU9upBKNBVWs6qSvRJf6PwVaQGrzrzXXzBkDQwcWmM7udt3DMXP3ji9WKj",
  "key6": "2aracJtfQT8YihmvCaxVJovWUJoVuWUCWmyvAHhaPnvjJkW8JTnbc8U6auXxxfuTdKsMABGH9MBeeLRTkdoA2amV",
  "key7": "5EHt7NCPCSKfzq33wog8vg3pDhVJmrnbCWqtmF2k1mQHW7SfrSmSwKJhcEWRy3hgcKiccdeoPoQMxE3KSSoazNad",
  "key8": "3wmQMkkBtG1L5RRaDhxpRt2FphdEMRiLP52ziZYNBtZmJQkwnbjVnJEvxSVojdw15S2Y7JamqJGggiQxXHCVHdYC",
  "key9": "617rEbxDCrUzSZVGWB9j9dVqVbGfzQqPcGyu5nx5ZLiefbJztzKraw7sNyWtViYvRBi2ZdaEhqH93V3fTxvAnciv",
  "key10": "SiUbywNdkiEJZ8BRoXUe1zFig7dMihYM5UP4FoHkpEvwPZWeJH8R3azMbRPN7nKm3pTinMuDRa5rGMNFT1LfAgL",
  "key11": "jCYtcBxYXtFcw28bGMS84Skmtgne32YAMFAeDWn59a9N78r4z6BjtxpwaeZwYQtm4REgq5zhibH7tpQy6a5qAGF",
  "key12": "4PdAGsccz8Yy1udTkWYnXYa4Aeacbcr4E5LHrsm8EBidkw4NzHTs8yuULxTyPPrwBpn4DeWrv1thEdfgp53pxkPk",
  "key13": "2HGUC5VEZugXQqpcd6A6ZG43qkCZrTkxCwm7QuYd17HFFqqEP3Mqssfbq226FBK8BmJkpWUsiV9XppHZzz4vNeW7",
  "key14": "4qx5Nk7fFSYotyE7BpxTJhmtgGZvfE8NorvkpRu5sPJsFBMe9NrrigdDucDFbW1LZLR6ajHhWdM4pX62H5sjpTrw",
  "key15": "4mr8kngpre3rcHFAVSQ7M9ZpwxANFSJkaT514HW7z6yvjpw9ye46LtX3CPffagzb4uNFjojtz61tcEwRBBaxiWvh",
  "key16": "Qfe3qRfXdswWj7Gm77CEoohJ7N2jdDgFDLLgSfX3RXbaCMRFTWs1AtAHaXVfoi1JmyUz6n8pvxKJ7K4tPD1wzrA",
  "key17": "5bAjVVveerfEex58nAeXcAav3knWDEUBc1o2myhtHNgW3a1UHqiM3Vvz7Jfa2q9RgcZ8G4JDza1hAiSGnME5tpyY",
  "key18": "5DUvUgnwqhtzb6uaR4uK6oLQrQXgNrAJUynNiE61MdvQnEqW8AcVq5MH886riviKcQH2Bbx9aBfeNgBrhR2i9kJU",
  "key19": "4oZgpFE32PPY2Eyuj5MLLbfacU1pHxS4Y6qd74QVXL3j5eNqfLF8ek7WD3sTuKjTVA5ts69F64JcqVxRsQN7A1he",
  "key20": "5VvuZ9Hv3TjqSoBeZGphNejA91nFLKm8FXC8iBxBhf2qg67G33LP85633JWvVJNzZCmrmVR25JiT4U7DbS5S5aJE",
  "key21": "3Nw5iYYoTE9v9c22SjemZtgmbYkhV62p9XTDU1eusL64WoatKDLp2t4d63ZRNXo3mHhdKUDyLvvGxmnmNvv5kQg5",
  "key22": "uuCJmPtb7SDYaQyaRmfhJvmEeQKD7rF2METUqhyNGihrdxLzpfKresRGc3PZrtzBzjGzJ85Tud5UFvP7iS27vf2",
  "key23": "MEgPhmWq1LNmUzwW16u2upAdLbZNAjR2gaSSntui2ynHJerAAGKHK1Qwrfz3rVX5s6C4NvB7tC5jS8nY3DCnrqL",
  "key24": "5UWxNF8pLnr8LCYMcLVrzbQ9ui6r18UbVFVqGcMechH7bNvCbtEvYCzWgpf98Z6k5D3QLa6VuQg1Cbd7NihFVbUu",
  "key25": "2K6HNXcUc4XQz2haj1KBsLfthotJXeN2VFPwAU9zAuL7JRx9P6m7BUrBM26JxSus26sYkZMoL9NvNJvPTVpZvJ77",
  "key26": "4VibGAbQ43Ty5q8F8Uyp8bXGqhrrwQbXVmKDLqVRxaytke6TQNtDdLAhtYApEh5gCEXYCkEiKXGBbDsqvFpqHCgc",
  "key27": "5h8HsGqEkCWq5v7Loru7rHtTFJAf7H1C2F2CNu5YNvhQr63uVUPhjsAgkGf9WKRgQiG28JhpHrzA3k4WSksdB37",
  "key28": "2GLxMYREeqWTfSzu3XddeGdZGKF8J3tvoyxGCyyd4sTxDn3K6CtuSVTMNdFkNxfaeK3VvBeuTLz7UYzsadWLcCsg",
  "key29": "TPnmeKCSXbuXEs4ConZmQfsLdNoUEstxMChJxb7ndrs43sXSA9xyoCZzfP1CEfpQVRGqfZYAKszCwXQR1BYA6LR",
  "key30": "2Ea3QiHqzBer8Wx6CH8Gj7pLZQZRp8VZF3XCG9ByDrurxFPESBcKACkVGUJeAzJx2SwFi41afdPsmhPRuAYb5gi2",
  "key31": "2yjkF8kBHf9vChFDvdSSQuiVbs84hUHmJn4gmxEFH722tfrgCvaVvidLVhcoLG5coDHi8qLjby5aNQHgoSXa1oa7",
  "key32": "2f6WgpD3ssLmTw49xNx3RhwhTPdhpD8bxswkuhBVxpn9hWxDD6qsxQM4Qc33KAhjBubnWkMtVX6hF2ZdxKbRuR38",
  "key33": "snmkoaeTkHq8s3Tqp9vpYXyymiPMBZPMsAA2mgm8w8Y4dtazhGysCaUtdWsDofh1TgCN5aKeKpQQuVQCqMgcUrX"
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
