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
    "5ie8uEYSCvcp7LRDnuvFU4f3gRnNpXNLAYUZ366CZZUXXGrTShoa7Njx1YGQom4kLEujRExwUcEYCXZBmNEimBZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgHxTHtvsk6SbzRystE9zzhGBFRdcvavkxZYjGZxEZL4kuph7wp6NgRPeRXYKUL6swTBpUfFymvnmpw94gYCx81",
  "key1": "uo83rv2xvbdwqYrhMt3VHamAwopNEozQVxWjzAXEDgrCKEFkhKZ8x4kExe8Pv1N6v5pLZb8ZHo9UCyMeYSL6sWz",
  "key2": "5ALQ4f9nwApU4Ni74qCtPxe7bdEermhVZEjthcUuudvT4uovFEi1rtCZV11qdJVNa4SY8pfcfs3stUay4QRF482a",
  "key3": "3cDXnE4jKx7Qn1z93tUiyDSmp47Papnfpj8cVs2Axm3tza7RZETydn1VvKNDcuSVpBmieXsnkGimVhSoyDpbZyDN",
  "key4": "3P21RBiLHbik5MKJfLqt3Eztpwfv86GHQeqMYxr52xEWWfgRSfVw5adnDioDTcPGE1ofTjwNxAG9fDghSBGACdtr",
  "key5": "3iRtZ6CACrqFqrUvzyEKKKYAktsqm4gLahQRTpUYA1fyTAEUh5vYS3FLWrEzBvd5YFokE31zxuhRg6RPY5aqbHns",
  "key6": "4PRyMq8dXwgSar3a5ayE1G9K78HPjiHdf8zBUcJnHxNWMUJ6px955atMkQQ2kUqBeGxJTne3aMs9Eq8heYWv8dcm",
  "key7": "5D5M6y8A6YAnYEcpjhY6WZcHm9Vg5Mao4EV9bPka8uQQf6jfHESDXB4PatAUgxWtCa3MVbDbx6v1TvFQ3crQym6R",
  "key8": "q8CnmtdroZs7p6EfUEsNBDPtSgkBEgKuFu5j27iaLWiAwozS8p6N8RSP7NEC7Pd8miwQZZvjMij4y62t4Gn2bJ8",
  "key9": "51jY3PZGRcEM3viPCTMVKrZ9egeQERqYPrKpCPRr15V5spXs7CDiaATj3MPPbNMdsT7WszUXfQ2WmbKpweJtq86x",
  "key10": "4vCqtA2iSygZ6QYDS3EVX6DYJP9bSV4WedRRpNF3YeXjrkDMHB7rWRJ2cB38L11TM7jY9BH8najHf819Ac5fC6B",
  "key11": "nkLNQcKj2XQX51oTpSetApPCo8xrn9i64d4Vw3bfiD3qNNjYpXG292PSVQvGAr8Gm6JsRQXmXaeXvics6bfXZHR",
  "key12": "2BoZyhrRmcmDgtYFQLvBSEpx5HeBuNYun5iAaThPvftmRcB5Hthdr6kNJTZqm8F4TEHjdgdPvKZrPtKMZLGPFhRW",
  "key13": "HJMfZYEfQrNabEvwnWyEvx8whJ31q4fKDEjB48b2MB3gTRV4o6zeH9mXMzoAPohwPgMjwbrQPvDVB9fGtWP7NMy",
  "key14": "VCgfKFRhQG1mtXjYriFDF4BRcjmg3JXNYTX3Q8uQUhxgUpnHT347QdSrnwjCpZzp5JKUAwsgtPbFuQZPPFLDUGV",
  "key15": "2w3RAkApWSurmDhVSNwJDF2naf8zNUcr9kNASvcmfjPHYc1Z2rFivJba86ouXafKhivheihSSGMVi9sHbaTf1anB",
  "key16": "YLU5oA9dxfpWE2CAp7ax3tJy8kGVkJfjqq61QzHRJBY3fUwCfmXAWGDE7SrdFwRZpzdqp8P5QHwDnv3h8x3jJMg",
  "key17": "27VPgTGVKxscMNTvKWDsC5xGPGGPCQyBZH8Aw7teieUt3bQ6jkaXK9z3Bpq1wEjhPAnpBydJCHLvmcw69vrzvqPR",
  "key18": "4uahGY1Bcd2nNyu128xEhrLv3xRnA7M7n8UpHuXXu66xUw5bG1A88pGzzMMFSH6QR8pLjcdjVq6VrjPYMrPVBtnW",
  "key19": "2N87cDj64AYUopTWZeSaSuea7A1kxQaPnKU2TWqBstH3ugwdxCAYAnzwX4VMP5sUfysryEDa2UTBb2B9h18rUyrY",
  "key20": "5fxgHKWm9JVqsJHp3hTCWMrLiMkejDRHMo945jnPf4TQMo1jqnM5HPzCooCKak83itsPfgGKBkjGcadY1sUCepiV",
  "key21": "5gnZw9NHEjRrKJ9hPcvWbCj6oBzxdsoddp4t8MTEoinH779p7JZiJXSDCAhMZ6G1e2RFxTWF9x3GixytNztCS1gZ",
  "key22": "373eL5s98sLzWtVAdzohWotYnRdQG68HwLn8VFdj55AoGtFrEVtLQ26Rkg2Mkss6UZjDx7vtxpqjD6bdmdzZ5CrX",
  "key23": "2PVyQQnfDbqPBY6nVaAu4PjG82WGVEp794wqybfRGTBJBaaDtUQdHxvBe4UUbS844rNtsFjZddU5AXo8zTt1uWR",
  "key24": "4SR28faQYaswyx6QA3T68kEpCS6YbeZtbeLKXB2iZyEgrDomZ35PXGMFtVxFAeAZVrqmJrXZX7XCaDaVAjwstgDR",
  "key25": "SZ6o2VqtJJZ8oLFLLhBY9b5UJQxG5dBXiU4upsK2BM28grUbEqRQGtp1JUXgAs3CH9CYkY6Dg9eCAg3BP31GzPm",
  "key26": "5HHJ8yffqQRkLXzvGLXFLrusEkX9jeyLD8ogVtSt28RhEC4roUCupduwmuk78jmgwnYYabCoQmwqDeXEuvu1gYtR",
  "key27": "4inK3VipXKM1K7rLZnvdfAEm7dcXSZmMhNCV4WRPvrbukEZGcwxRHJTqXA19Ewqpq6gaUUKEPKGiGR8b6fL4W1Lc"
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
