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
    "4RVDwctuFRjTsyfpzHNrDgNjHu81a9CfLSGe2UZSu571cN3ePHJyDfJKFADx5k6uMa4nnJgkucbKEZ2cdMJkCW3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34WydWe2Ld8Rd9MYA7Q8uc731KAJmXkeRTwfdK8JwJF1yT16anB4tM1WDfBsTjcxjgnk2JejDtt2nJ6QpSUyuyhS",
  "key1": "5txAfmh3GnhBAvnvLRsYd6V5EkjaDxYDqzyah9Sw1hBxSedBBAQEn2uAE6BSTo9CeE3pkTPurVSdCFRX82Nhppwk",
  "key2": "5BBYVeMPxySwBCug1qEczH2LU1q2ia4oBHxzVVP4YDYE54q7Q5it97av1rCB4j9RBykkqeTFS84JKQ2Zxer8xnpz",
  "key3": "3QCgiYopVFgLiSLhpJtJTkFrdQJXPu1Mkwu3vxprpFGCBd77HcHbPfSRjqoR3E4JigV1jwrfJnp5hUVPeMJHBptc",
  "key4": "tAumZiKo5TpQV19pYMqyfJwonYkb1jbk8hDLbJy7vo1V6ZftLNYmmVG1A5bbuzLsr2ugbJYoAjgSFE2p2amQCjA",
  "key5": "2x1gLzXuk48VafUNUMchwMQjHMqAx6V39DUKrLJDCBNU1zw6tTkCRHDwpA3TGQu1QrGSeKp19toTmRFqWNezM3cD",
  "key6": "3FERGVoBk7m5dfNtN9ezkA3Ne8EnA2U1YcSxwjscdbLHBbqM7bwoV5TnSZjZ8GBDKViYLMqnM14FxjmRmSyhynKi",
  "key7": "3Fk9S3StBPuzmqJ61Nc9X64gFX73BbzDZAr5hu59XCaAvApQBSDJiViS32sE9GukVeYJgHtk2QPZKJ3barLu7vEu",
  "key8": "CjQE2upLfPmW8eRTvja1mCEnbFLvb24Wwm2guRp4wmrmo8Shn2UNZDNNLeYXtMbA1rLri346bbtsE5hQNazPoKD",
  "key9": "R9e8Q8DCJRPubHX6iFhr6Fpdg4uZdczMi3WXuDdtuRGgogakTuqfULgSWeGtp4571GZnDymTbTLYZSAyAoFWbpJ",
  "key10": "3vScxhe1o8S61UEdy8nC943zP7H3j8h19ogUv2XLCywEHL4H9uufFWQMiJ8kH88M3LdDTdn82iJbGCJCJZC2xf2q",
  "key11": "5EkFvrH9rKjaszQALPmXcuc9ynoCU7SqhZiLvKriGtRpwABtm4sz6XyWFgGJC19QxCj3pGky1gvX1wobSj4esXKb",
  "key12": "5a44bTPCZsLctrgVPuPTmMLsp6XdcY7jwydUehHLWVXBEpnVToJua6q9o5BvDbQgRMy3RqMr3obEHqcHR69SGMYz",
  "key13": "5joXiX1ywupLCAudPjzpHX2Ke6SPE5CyC69wLjQzs7fGNxrbkUwT6zAGTmxzGhFQRvh5Dx9oPLKRGNYBZSharGyr",
  "key14": "2tjeWwGAxoAjirPzrPAuAszywD3AXgDqd6ymWW9zZuHwT4Kw5X4jt4A9HgMztQcSNMJVoKbF83CUcx9W8ZmotUbE",
  "key15": "36N8bBDD5JromsR6dhDVQyeL3NGEFGxybbshhcuu9Ht19Zpp24gjiToZDjZNTtwXS2KFg4ehYCBcs3eMK5vSpra7",
  "key16": "4UVAz2a1zyceLPVZQZY4EvEqUx1vn8ept6dZGZw8K1PkPrqtG9uFDT2jLvuyaVwPWaJr3fdPBESprLbmyoCRAh8H",
  "key17": "529rYcgdy1RhYYfyHqdZBGGmpun5DTSNNLmmQFRxyBLm9XWFNVrkHB85RD3XvYA47GswinShBMmkRXRRv6YiatGH",
  "key18": "5Lx5x6ZDyuHMaMHDMJztFoN15fyi2maFydh2bdm4dE8uHsKYNZg68kUtRCWviwpA14FviKL1zuFUZBKJpwu6jSxo",
  "key19": "4KCcMPbaPtKFxa6DkQ2TQ4ogELneSy3ZPEcpFnFt9qDuM9d1n52pgkZtQ9W7jFaqqShSNu5BGUXmj2BhufQGknUn",
  "key20": "2RMGob9ixTkko18KTGZGpbUDmqApHgB1FCKoKXoD6gPMiQUPFE8jzA3jFgGB4aA1vXMh3SECdLghYrgNRFWRYx9W",
  "key21": "2orCaH28bmohbFWARFwSPVJKX7GMRdjTWwkCHdQiV9M4wGvMUKBizYZQAx9Ux7xMyyroTPn2vQqjUNuP9RDxas5i",
  "key22": "2jZoZcinbdHGc5mkAGtSw9KPyDiRkcmXK7acRDuYVbhy3bDQ3fH4PZHHJhHg5rvLkQcVedMcQSSZMtwLpmMnPNdd",
  "key23": "2FR4B8oiGNgvdLoqrLcUNR7ZAzUk7NH5xtCYV7QsFPtV5isik2EKVrBFQ25AxuMXrN2BFMCrtZZuNtY9gbKTnzpP",
  "key24": "215vh7ed82HZpzUAi364FaqdnVx7k82W8tgNk347GQQFfy38C8HGz8VhkY8orwAtSNvREMN89iUCTFYMd5fvmJ5p",
  "key25": "qBFHAHWmwuJa4WiznEAkwcMXXLDzTHGE2Pgob2Ukykyr3nb8nWUsGydSD8eA8RMWwQGutGLjCa5RAk13gzinLmR",
  "key26": "2hryqtekeZJdENVV6qc3vHZEq76Sr7DB7HtFaFkM5GtVJj1fF8pFjHbNhXbx51hPd8qiZjYpzxxQ4rKMemrgHGSq",
  "key27": "4wEZfu4eRrG2hGa21Py9devvcnRXCZJusc3mJfk21gMi9zHkGco9V6PYQfYXQSpJZze3BwzZfwaa5iDwZgwyXYny",
  "key28": "4tLoDGCgcBaq123U2CEtzdrtnt9eJ4HukdRsZPosjbvaceTxeA1QnD7CnQqgdrzicGguFfSTU9qp1ZKQEd1ZkwA9",
  "key29": "3pVNqE8zjZJfbpJQARSFE8y9P6ZgfQHnWo4ugcLqqfpM4XgGF2hdeJLwPxq5N8A5Uofh69mvJm9prU8Qk1eRHaXH",
  "key30": "3xGi9QbZsNbrLZuKAQbYMwDqXuf9DAw4MU36DcU3f9HNu6GkV69nfLoG73iGQ46L3zqna56HotV4oF11PeDYuFUZ",
  "key31": "e7Xzx5gvahHYfub3azWUfeX93PHwJwXHRZNZA4wFKuepNPExA7ykfFUWNNV9PWjdz4kYuoCHMgMHnsZqgUcyFz5",
  "key32": "epWDEbnEeH8LYfbW85auwp3orMmsaBhzns29ktbEXZzp486eVMpY2DffjWREgudFSGsonsi6qQpAni5pnaaZR9u",
  "key33": "Ro6VqjX49EVoJzTfJU2EQn4eM471TBTTgPtg7YaxVf87iSzMc2JizW4EF7C6rkwft1e7EBcj7yaHnxDZxbQ94ox",
  "key34": "3gi9KJY2VJnX4DexSjPzU1BcgNabq1TmR3QvAub6eKoEzM9esQ6PbFuaLinY4owH2NKwc981Eq3BeV3qzVSDCgxz",
  "key35": "KHDKqGJjCyHD5XGTaTZWxtXqxkg73qxiMxzXj9dY4PW5p5aN4rbXHmmVYLV8h7bRV3i9AhQvGoFYu8eiLm82wQ8",
  "key36": "2avSishgsiSxhtT4k4B6TdXPkSsDMK6yCBUijLxCKTMavXUXsjjyXSUT9ihNzLQf9XPNmMwE4wrMZq3qPfyjRaHo",
  "key37": "3bL2BfKueEGv9nZxrSoqEUaA427dto52zCV21pAkqXTBxjjE2D7YLmUxQAimMqenm3jo1e9xGgSN1PGpGHsqXZh7",
  "key38": "5vihpxdDwWsMfE6k6JtuYcc6wuMV2HubssPFQau3oFcUossoFALw1x2ezgU4x5t2aWgRJe58Fq9FyonSwbaYY3Kn",
  "key39": "4cjKoes7Wr7AEd5c8e96fZPjNAZCcm8TThtmitXUN6HV8Rt9GxCXzhHfPCNgkhES3NdSm4G67eDciCC2L6VGsRM1",
  "key40": "QGcvzjGSJfESA1JPNFcQKK2Aqk89BPVwHpB4VyMn6gArDHxmemmFqWHpEW24aFosP48NRpe9DhqB4RKuvJPM67i",
  "key41": "4cZW7Q86BnyuZvbknaDUZiAs8K3Ta5QgqNKi79SD1wxqgi8fnNtrm4ST2v43LDCES3ZvCc4MUZgPNe8EwnFfb8jG",
  "key42": "5696SRZWk4hp1y58DcfJjM5Dm7tD8Dw5kDkPrxDztZGtRQhrRoByhws9zq5gFKLjTA5mTtRNDXZou4zzM6VgJZY9"
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
