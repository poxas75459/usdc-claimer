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
    "CTKhkK4HgQ4Cwh8TA69ddwJRciHKCcGkppSnV7Pinvx4Uf77U9o1hdnwn9NqE6kzYYKWsn61YfYMUDbuEcB39kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jtLQQf2k53Un63JXF8Gk3N7W3KQnvuHmgAkdYKbC7Ygrd5h7ndWQd1uBx986BNCeUdMVrVavx83Riq8SSoaShPd",
  "key1": "4bu1UKRwxJBcV3wwvvDM1k1RBraZMg6YAgBdMdoxM96Qa5jpPrfsHaZD5pv5Lm99mpjo7TrTExnBtY5aKw9SvTER",
  "key2": "4rN7sWk9ZUAqkNyvRuJt2zD6aR67d3pK1qz2quwcqH33pY5XKfxSKvwmPbvtDPx7dvpfr1HNyGJX69DBKxqwDfNe",
  "key3": "Fr3rMKWRrVmpggEcxp5wrVbX5XMW8j4BHridVW9UKwo1AfiPUwMDxRymvSuDBwTirRajLMznQwHLqQWzEybFkEW",
  "key4": "4cCgBx1EGvpp7bNQYbjoefvoce6M9pzJGNFX1Dys5rJCjh9D6C2ZodEVknb8Q6PBkBPkzvzD7TuKTN7ZV2DqttAu",
  "key5": "66X7KC3NPj5aVYS2K7uSro2TVGEoiZKF2tSmArRV2pdDuDEzqpApHoVQ8FyFkHUNghEH8Buep3ovdBRN1exuMmTf",
  "key6": "36UpEETxmQLsKXDviuaRyKWhQTiEMMf7TCba7YXG52d8QLXfAQNQCNi8q8s8LZ7RbjPPrXqXWLHxS3Gsf2S9cukn",
  "key7": "549RbnU28te7FQ62xfh4mWBv7LJswZAoztBsU1LWkzgxgkXPGogGyhZgX5fCW3LUCgz9VpJTW38ufA2PYNhiVWFU",
  "key8": "owzkfED65WGD1qm5tah1NCpT39pKkYRuV9sge31aWq2J6eUPMiz8CT2AyefENRYi7hozYGvTT2j1A8ZLoybrRsZ",
  "key9": "3aNSA17jDJC2bkjVs6c33UWP2LQ1y6o4hF6TAYioxKqVCNkFnHfedWmPXVSk2yqc5YXDF46KLW7uoYwWE2BaNnkF",
  "key10": "4mZcKqFjoTdp6TzbGWuWjg5L8ABos7yVA6bhyxkKZhwJwg2qXR4UyZth4M1cNPQetq8HFQszc5JWKiKtit7wEXKL",
  "key11": "4Pqcpx2d5TBxEGrSchvuXMjKFZdEQUcYPYXUBX6vVYZd4yDiPsa5umavrHejV6c8LpPrYy225najb7THVAjxWVWR",
  "key12": "3M8U2n8vBf2AVyx6j7NeTr1wbzK3qTBgWbnkw6eR29phahsHvZcp8Rr22UXzYX5kdeEfj1JEQRDBqm5sCZkJLWnR",
  "key13": "3RF3dDgjDztKeDFHuczSnu9LMyeNem2uYpLcKhbfdWtqCHU1x2oNKbBw3XNz2Xp3uSh45kPG7J1FQ8DDkKxz6VGD",
  "key14": "5faqkbPK4cUC3gde2hRjJQJvhWG8hvAFN2Zpt9PtqyjCDKynXxDdpaP8453gc58LNe8oqrau1GjAyRBYk1ymzzV8",
  "key15": "58sHHM1NuTGKRwh6swCfNDrpQVfJKfkGwEE4jwVQLgcuaa3iPrduBHQukyaWekn1XyUxddsGPHDPZAZgc1ccyVXr",
  "key16": "2Bi5MMcuggWw7LXD9PXbB3MYeEhxDbuwcp22xCrMyCYFtFVxEcdeuieMEmn5k57GXtWFe8Zh7AVyp4CBQXzzJSV3",
  "key17": "32FDx6SNNdwFX6Ljjb9yThYCRJLoAain8N4KLW6qyqTZXEZxhBDH5FpyLvPT1Nxuzn6AkE9vBh9NB6LjnN87kjkt",
  "key18": "HPCFwPBHoBDyKWhBDShF8Bs5bWugZznrw2c5AdLAiU8aDxcpvpgoL72TgE3AvVuA3HAnBqpSFaR8K9tQD78iem7",
  "key19": "52z6WdB7X4Zt29ypBBvoHokK8dVbejYixj1vtTyi7iiome3vum4cp4LbMpiKUd6bAhzMBP8LLsSPhJJhLbkyLeEH",
  "key20": "67pDeXua3DZ51sE2LhJLgmkhXW1wVu7pZp8EiqdsVcP7365CB2c4GUfhvikNvZZd6MCj1eLwihSBnLeMtoiJ65Mn",
  "key21": "5zYugE64HQzrf3XXFmKUMDForbBBWMgD5UQvBeS9q4BJtw1sXWs5Du6CBBab223nhhDHUi9cSEyKi2bLWBwk8PJk",
  "key22": "3M91EUZvQWY8BMBScX4EpZnxbnyK11jdo6KiTKDQ4EW6jzNig6e4GgP8VCszj8m7fmMcVfLsw1uKT3X4rDBMKB59",
  "key23": "5XdrP5QQGSkJM2eA772tghs26zgbEcyVRzQRtaum4cfRKpdtMDP57kT1fYAoAdGodGe1x8VVmVoJcStUXvUTELoN",
  "key24": "1oRm1UjE8t2RvvL12aH1GCaod6JJpj7Qr2RUBj2vjZ3EByvkyjK4JsFQk6RyiqA1jkahDtdZiHkY27rEMknufQQ",
  "key25": "4FazMipzcsHtgzWGGf3UCcYof7mEu65LNt8AvxFUmF8os1YeqjUQh6BdCbe1NP3GgHN3fJQVCfHAQ8DvGdJXb8gQ",
  "key26": "3PfJig3KCdAqrFRFAioChMuK9JD5oz1vEV37Q6JXvhaEQS3HmEWL2zzUMBfjcXdnbRJ3ABxDMiL6e9q7mneAVq3r",
  "key27": "4SrFGqFfxph2n2QsvcTpEpSeTt5gJbpKPto6yZAcgyQAaYBAAhbpXLLJ4Cy8VekQmjpfducSQP4V8gEoGWmA5mJj",
  "key28": "4m2NXaVkAAMAGkGnpYJ93XzTou98KpqQqMeZGkyGJPAHaU5d5rPFRLaKLi8UKKTAL2a9jGvW6WxpEo1jiwvnVRoJ",
  "key29": "2n5nmk9HZHfNZgKjNZo2b1ZGNqjzL24dCbi4v5TCJ1pnujS3DLtSnjQo9AYBhhVgxYcVhbTpzHcBPpLzZQ5Cddc4",
  "key30": "tFybDeaeWQ54aMwP8MojUVhfCbgHctVrZJBfdw1pbxdNhzgrWNVRYoiyXT8DD6aKxMNByjjeLGE8PqzCBesFtxY",
  "key31": "3o4iGumMQ12YHsCBnCBNG8ZbsAfJVwApC1wGvSzjXTcPFFUSPHSDd5uYGqZckGSDfsAzbjN661pRVubxLpgS17WH",
  "key32": "3LDbEGEegiLWx8QeaFtyLRJV9GK1HSrFpomhhLu3DSLKVdFr5aatkrY9H3onNv7qMFMf6NtqAinM5QwSQDeeKykC",
  "key33": "Xi7sUTAzQDW9rS6Pnr1taCitUx1k3G9HbAhdRQysbkZdcDyxhWLAkGHzCEEfbAGfXgy4H9h35bnX4ckqTPcBrnP",
  "key34": "2Exwo7wN68SPhU1b8ZFxmQk5qpBrSzfACfYTWZE24ZEkmVWArcPFBeMZj1sd7o4d2qQcaR6urnzcDKfA1W6zg1rj",
  "key35": "23EsVSasvKC4Rsa5tEZ2HFB1HGfmgVPVmDKc4m3RMWGqLyEswQ1DX2qbuaRTiUJqD31QgsZ9bxMWj1bTiABU4B8H",
  "key36": "4YDDJ2xNY8FUH2Uu6NTo4RCL1HtYamkdEsjmeFV4uMC9jM1P7xiVB1yTpAKzDLc8xDaVRq5b2kBkghwY8ebayXiC",
  "key37": "3HNpKxirpcrQLN7WsxkYBRREGD92RJNsCbSMZZghTgVfNoF6ck64q8X8BcF7C6ck5dPKi2a5HzAg9s3xreAAgZ3a",
  "key38": "2qUn5snE6yLL5ep7B36sYuK9zYYvf28Pn7j5Y3E1VWuHRFJnQ69f6XE4dQTAHexxFsNgri896Zbde5JEYnrKNfFM",
  "key39": "NzqFRV6v5LCfKKbyQQ7z1dijPDggJQsVWdZiBQ1V3T3e3rvmvDwkRDawvhrpbS7fNhA2k67ZpbLQTQaWgDxW33L",
  "key40": "64NSZiMZvrgxB4GNVrnCe8xyA8oh1mzG4VRkZKLxybpq1EA8WgA9aZHTTnNxQwJiaKPhR98jXLgne2i1eR2F6KYF",
  "key41": "5bL6DuhbGBPgh2y4xQszrFCNysAWerjVD8VoTTcXhDFq1NzcDQRVRCJUd7mmNioziEveQqKxxaB67KbCfnqvKjiM",
  "key42": "5VGCHh2U3vu7MTSLaR2SKEAFreVob94aS5GRMLYsC1ogLZAZoNuTr4Cz3NVF8gnPm18xnvbYt4LNVKcEE1QzFcrG",
  "key43": "T8yfWzTJzdswVtrCvFRTwkyqED7vgfAcYiT5hZsLTHfYmw4sdgNot6swVoNcj89KjQacARnfww1Dju9uXdatcU4"
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
