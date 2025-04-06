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
    "3t9Gx1q9TVE33txK7nXoP3bERHYBWEoGJYYe4c2nHSFPhhzij322F5y1MSygFGQvfw9VYonH5JsaMKj3N6JQxVEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxpegi5PTLMM2JV3UkBXVpjfAsGzhhaht84R7nXUbtTQp33reNNF7kVtxKvfMDqqPiw6tL1skVeXXTM6n3AaeXr",
  "key1": "48usbcgsojBdJeJFjhfRygURKGUQTkvX6njh7kjjScRdbt48aZBb5djJxxwribxwXf7Ux74ZKKMac7rRVgJQf6Xd",
  "key2": "6QR4c88Wpe8kTUKa4vV6wFEuurfhbrEcZxgh6nQNjy92eL5va7fFgocHDWD3Hfq2oAW1miUdEBbaPvDazX7Jjsf",
  "key3": "4MfFZkVkgsdL57HPFjha9g3iHLWhe2Grw8SQGe1LABvS3cJVvHza7WX87HV2PXMxQncZiN2LVNFAEdwk9ur92hgi",
  "key4": "WWMHLppxEaxoEASnugVUVbzyv5pYjGEf3cf8x49T9yWwUe8GkKvWLQKrvFc8h7SyN6nfkPkEPxgJbtJgUGPdA4E",
  "key5": "5L7HZWnwqRLqcJVdgHT79KMjgYXDbSFF77kUc3d77va7Wo3Fv6eLXmfexGTs2cMHMrAg4YPzycW3uZKdx2m2KjrD",
  "key6": "SjrExdp4ZHsw96dvbNxiYV7DgnX6wBitSJqCvZNynrcxQBvRnf5Q5XQy5wvacvNJfBD2tNTCEBNDL7AUKPutStT",
  "key7": "2mWJdXLPQjbcFQHHg3LSvNhQtsaYspAgJq4VPYSuw4z5B1THAFRRk975UNCGBV37riwamzF6759g8hFVkkj4wmgX",
  "key8": "LFjoH2WuLKJt2sJ4X7ZDddaQd1EoCeTiadKH7sXMPGfXrbTFQupCaNFu9jLTKcxzHSnG7bjSyTeGwSst9sjn71D",
  "key9": "3VTTxSmVaN4MwSYZtCJwuadPU96uGY4B9Ymxff5mp3bUjyD5nuVLR1iwZDHNehBDz7i8ktLx1FoA5HxUNzkhd1fT",
  "key10": "5KMNhsrEa6dL9XHo7m5k3BmkjUQmdewv4nTw1LqgQQYYk8N7UTpdUwovR78cCZWy3n9ccY8t5YxNdQdaqpYcT8MD",
  "key11": "34B9P2iEKo3iVw4CFaG4minCBhat4aFP6FNH3KSaz3kKgroUmo62yRYeM9jTTQWZj8uA96vjBKkQWcQoby39TVWR",
  "key12": "2B67JBvt9afesCoGkVGs9KihDnk76rTvew62qtrkqQ3tSRLr9G2mE8fnrbSnqfvGY2QUANwSDv6Dc1sWyfrinKby",
  "key13": "32o4FfTcZSsBRbP4nGTzG7cNNTDGL8SFxW2rPkiPBS2STWbJYy4ntcC4ftkHsr3t9H65zpNGMV5dPx84wnenoWby",
  "key14": "a6a6fXRQarpXg9kgiSJD9Xoii99FZB6ZsY8n5b6TonwXwte167M8YZFmCJC3kko3PTyz9H1P2f6jHr2RZRsXweb",
  "key15": "tAxEnhj1XFMCxhPQ4kaWeA5NkGssR4fRSm51ACmBjMeN6oYe8pSZJzhm5JwBbX2J7SmHUsBsNeEkzPTjCAd8X2k",
  "key16": "5BqCBr7UXgY4tCkUJrZWZHR1TaYUiPngzZHpozDwGkXFphE2Lhen82u7sC9kwm8YCQceKmP552QUju9wYf8ULuwC",
  "key17": "2Jq7XCk2XumN2U5gphuLss2R78cxdRoCN2VRzFT4Dk8bgD4VLRj87m3GqN2c7KSE9oNTz2VisMeZztUdoe3y2MKE",
  "key18": "51b5LwzisSirRuRun7qAEjZ8gxGwBVWoGFq5f3s3wfeohM2aU2KpLkJtgWVhk49jffyBC222GTWSoX7rHTCir2Qg",
  "key19": "5dh79HzP9dpepWdZJ9Vg2YgRShiWWMjf1yyWFj5jrjkJymiB3q9DoeXXqe91G6hKLFdfzK4EgtnU7FpSokAWscGe",
  "key20": "4DJLG2JRtxsB96GHhusKaczd53yrYYod5f9RA6P2idJVZ1hcKvZ79utaKew5se4g5rRnwzd3Nf9k5Z9QdfLJZEdZ",
  "key21": "5QN5PeaQ7soiisPNdDLPAe1eAd7z1JPMkwsCFTqZRpD1PWhdbpqsmqULWKrqw4Ghm4Y1Ua78qtFZU9Gkj6j5TAzX",
  "key22": "47jLEw4MbVygSxcy6qoUPYMgzpe3K56FXM6q9zQQZQeUdrt3NquAkvc98jAGjap2ggqAAM4Rr5QG8KWhPJRkofM4",
  "key23": "5xJBjvh9uoxqs4ArRQ7TvWWAGfdmFfErpJMcNqC28YxVVYgk4xSd6em46y7ngUY8kFz9y64aXxEeBshekSvqiiM",
  "key24": "2irNpVuoz8SQeNftAxT1WdmKAsCZRsmaEPizsJeLXHNWSnRZAN44FZkymrrPTF6cubbSFsaZW7y2jo4SBZkC3QN2",
  "key25": "3KqR13fVSCQ6CuR8SpU1dCLC4EZRkfmg7YP6TBdJUYiXqNAxj6Txwmikvz2WBzLkcp6T1bS6CRf6tXwaAfsLZoNy",
  "key26": "4Aysy7qNdhhwMX66FgmY1J6RJpiTic5nWZNgtAG2JSczEBtboxZ1q2BEqUGeW3LgRma6bG9Swmx19AyGBEAnsUe",
  "key27": "e4RFkjvfvY4p86KNKy3MPKycPS8aWhdhWsAEheYhQhZu4gSXPo2zqFsC4iCLvSoR4nymC96AuhMKDdGC83Wr9ag",
  "key28": "4LBQSiuQEGiSV7qpjvaWAgoH5f8MHfFGathRJUtFszVVCfL6vX1LbtaJuKfQq8wLdR8Bk6e915TKQuw1baGzyYSg",
  "key29": "3qE571FHkwcHpa9t1HfZdjX2MuLHUevconM7dnCPKhneKq7sMSrRbGHwX12xaog77Nzp8r42vtaPkEUzgZ7g4UHm",
  "key30": "25ditfXmD934BTWYS4RFy5hHqTdX2E8K68jzckhS8777H2svtJT52KpxHCnPq4GtMi731mXCGKysvXymEXUTMpNY",
  "key31": "2tNkthM45P2hdtJC9fmuWFimNpXwubMNem3h8igtEwXhGJBY4Sr3C8MZYLukaL2mnQxUASKUHEpdUZzMT1eaQpYa",
  "key32": "uLgyNv1EEMSRH1mGFmRznKq2YZ1VQuwoYUkNmj47ByVVswdBp6mJeMsFVYgfL3aTiX2LTLoc69HVT7AVmjWZiot",
  "key33": "3EtN78ceLRrmqFsxzz6usjYKgpYckyuWHNsVLfvAgXdBvUGPafMb5jF1eaerGfuHPQwLTVqZFaefW9XmAT5MHbwa",
  "key34": "4zY4WvBHSpWzZP15Z7v37ny4im4EZCAJg4BC4HJACGMVR73TRWvECutgYvtQ2Ug8sQhS786jMAqEx1qDr4TbvGsb",
  "key35": "5KAUNX9HX1aA8P6fFapHKbMso6wkfa3dCKYEBmcfVPezKL5DuQQEtsqfyM8f89UvdbSRvdzuyxbw6D4DA7fFeXSM",
  "key36": "3yN7eBGb8UKhuA8m97goWiMVDkESyDBCxjvKxSHycPPpR2GkTe9aqf2pxNhvRbsNivDT72aF1e5dqPBHUGeTXQeN",
  "key37": "3RXfYKmD3UrHhUUR4W1nvpfSdbMggoRXDgxav3Ap5GmX5UvaCLJgeaCVJ15KutcYBtgyMZFn1RRh8pDRLytp1BbW",
  "key38": "57kwn49gXidsxXqxtzAor812QchLPVZJSivH1YYhAe7drZQxQH6ki1NuMsvEQbsEZ7pTK2pm1HQvUyXzmrYoJaCm",
  "key39": "kUxigJFimLu2RV1hxjABvgAewXxaKaEYE1Zbvs8UG2htw9UvtDkT2wiXQCnRzySjJ84qLc3fwD14N7zipxG3TKJ"
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
