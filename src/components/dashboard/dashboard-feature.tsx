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
    "3qQQ2hhXwkdJt5NyRxafEiRBLYseSHNms9ahgGrduuikLyib6pKrEa4jSmfBpiURYhcxbQ6SjLPZgconXUgA6cUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DruxcLcRAdoE8VcQ7vrMZB5aQVBPyV2dgZrdJWRZ74TL8rz5G3cdNNB7PoayZzLJgWxg15gZok6RDZ3Fux6Td5q",
  "key1": "2zHrKWzkC9kUY54RYMajGqyLdbav7RFBegEdgvobC6PgnxbYqbo8TV2dM2d556C2ZVLHuyPnstkzPDe2MkrtvKQC",
  "key2": "4udEtRQkVounD2shvvKrW5UbeLHbhhb5x1v4HwjpYBWo9qnHXbHKNajHMwEL9nsNgkb6EDcerEeEiJvGgrr4xb2F",
  "key3": "22x87Nwd4pzcuKAN6z9R3vzY1jwodqhMLYWkZj5LU2mLzrkbHyAUKcQNtQTreFJ4HZErXXMYrUMh59GbwDufCB9B",
  "key4": "47XNeKPCczjKV2eAKTY3JQbwfWR5SFVmHEQXoyw6SNm6hP1CwkTMiTyVo9PcaSDNd52TjtjrWuq9HgvrP1aMxfY",
  "key5": "qPfEtSYcPUsR4MAhm1DbW3VZBMjFrjHvqEiQQY14kAHmFhJZdT2ZeXmztkTL86aWa69UqBXGGrU3merJUTXTKPq",
  "key6": "4gR8bshYzb5vCUt6no5djsFvT95MuzRZFsc8iVq8Dow5JsjK1eHiYHhQLVC2hTGY5cBHvgdmwonVdvKBLsY4QRRQ",
  "key7": "Mp5zzXeT8JsyQZuDdcuaWzpBa6PPtc8fp7vEDsG48VWAe84ek1nXXG4rDdFf7Jq9j3e71Qi7QH3sxoh398AxWoL",
  "key8": "5ZGRQxFktiCEvM5aJnRuq8YNnCEu8jSLUMnxDUrcdbQ5gkKokhhoFSWUtcwbqHfufGHaEwjQkF9K5tEteBRXD46t",
  "key9": "9FdPq36NeiAJZ1ihF9x2MaErnJn386PckZLJEFfXgp2VHWofmMYzaTgostnm3KFkAdM5vn61s5kTmNFyP688HJ5",
  "key10": "73PEmy27WJDGSua5f5epspsKFFGoVJzJBHDNcUkUup8aXDMACqf6FowhRKBczoJh1odzVd3Ppmus3LsbPXb9kgm",
  "key11": "3xwLhX9nfRjczHQGpC4sxuSDi7uWWNS3W3iXHT3VACWmDMfixUqkpoktTvjKP2YG2y1q95K3rrrhNViJ7JKTFvsh",
  "key12": "5DW9YMwjvXxWFymLG9wBgRtTCRmWtn1P1yLpavD4JGXcjhiVu2DX8JuVppYq63iX4xad3t4ze17mB9f4o9PAS1XP",
  "key13": "7RgBQ7HtpdjGJW8adGuC2q77VaJPPrUbTbzVekzQenz1PbemwiFEbtb8GN2Msg2PLnz6cx8XBemASXk47mgdQPh",
  "key14": "5E5v1K4AA95JpHdeP6MrsQMwMJ6148aMUKGrCLUJD4R7dz8HjDrDjsaL2Y1Ktpy49yBZA6ZessMp4bfskLBkN3wG",
  "key15": "4muffVw6gpxsAugBBF5ZwnSfEAe6TTqaUbCDPVYz6JajNTQESGxNvGfaWRL7bPkcWQ4AUF5Vp8x55Lmcw3nXyiMr",
  "key16": "3nooNjnBK2QhV83ET2rFqZ278ZrTrpJN8GcASxUCFCcL5Jd1YJEzGj2r7RQgRH42Abi91CimiZG1JwLL1VUBgfcN",
  "key17": "2RSRLZ9MEwzYEjsmUxpFMtmJpt4oVehCLR4asZieJEVq4AnP26SaUpSScLvwTUmYjUURdwWm5hV2FNKevHYKNNpp",
  "key18": "4FVcSaFqTzRuAc6uyPjd7Lm8LgVXncQqo4QJuD6r7rn9wxswCCihCx3zMVfvTquhqPuemUHjuCeFC3j61Ypewdfq",
  "key19": "22DsXF7DRKafjY75KtX359tfjhJeZBufe9ysuf9VAkRw2HYYg9Th2CPuw4AuJfKyjcV7BLsf1EuHY9sTBDeo5wvn",
  "key20": "255jdnBfMbp7zbU45Dgr1jYYdVTzcPNmjbDMBJMMJzZS42agBdUE3mR4dG2xLz5pjxnY1PTAD5dYfL2RGVAQ1Ybk",
  "key21": "3wVj9Ny3TJE3TxwrwvLa13mKaKJQWNFN856vhGEBxeSP9Przv7ZMrzb1Zyw97n3dxstPRUHZgqdLVnzED9ji8x4N",
  "key22": "VSrpQFpnYxYoiyZ7CPNUreB44w4YWoYunhRaYjJwZiDvPwRkSAWGbSGTHFnRC61uiEsZ3mBjU36NScUH8xSohTr",
  "key23": "5yszjEsH6aVjPTSCvhq1rb3VDgSub8k2NmGZE5PEGYvjW2hASvFM2hWSszAmCfWH6XvsuNWurabpJ167busZXGFe",
  "key24": "CZF5Z7TdUdDRmKbUzZkEdwbTMZh3jyqVqmR5FwWBiJCNAXgcykxja7Qdt6p19VVqyV6WYiAMyLSf77USj19p6g3"
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
