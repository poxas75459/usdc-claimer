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
    "5Cjpz2kW2sCdzeCfEnBfD2AAa7tkgqHwi9t9FBCx1yN5RpZVz48mLXcX5HDvF6GCjAFuq6J1oajzhipuRAAQ5ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2aGrFWEANLTpMCkrwME72D5bAjGVePMUsW6kyXsQFezTM8uD6gaHz4Ego15YHfph2p7CYbuvagVhfqSwSAx9VQ",
  "key1": "5SjsncN2u52vmZa8zznEPLeMvprHjG7LHmaauL9G8vr2CEC1JYmWqgd3ztrvbbAeKEyKccT9sb3aeELmLpARS8C3",
  "key2": "2Wkv4sBKXNxJ5ZLM7589Nur2hQkm8zZbdJFoRGPKtCT6Uz6xWtSp5T7rnkej3toc5AXSpyGJ1coS2HcBBZDdpho6",
  "key3": "2kYi1Kh9x1tZWKXqFq41ch2VhNgBfFUhwyg3koHziFwDpmN3MKPpTzmh6Txfgm89FP9GoG9g449F7yd1HUegXSFG",
  "key4": "4Fr1GbxWqLHkFE8vjMEL8h8BbhULqz7zvoKPCi9X6Br2eHyXsGZAB7ipSEj15FGWbqbV2kxNm5cmhpt6zh8zKeSH",
  "key5": "5cWAfTLFtUuGyPSCxABbC1fcTSgJj31BMCvFGYKRP9pRBW1KbuuKtYz8UhTycbuRyzMSNwt7TwqB43hLkKNKJf4v",
  "key6": "4PpLub2T4pxqikpehWs2ysatnYb58kb8ionuEj9MrUwBxWgKUx1ysCT69qZmp2yJcY8XJpDYAJgudrPASDn1kWqQ",
  "key7": "2ffpTuKKWmXdZadc83X6ewaSkWhAw7boT3Vn9uZgU4xwH9jKXeN5t2p9m3mshRjGbdrDgPN2ULEffncjBRKpe4g9",
  "key8": "D1zQKNYzqdtEZzMNABCWJUViP95z7HYgaNWSsayzAbEFYBAhrQSp7L4kRCc4hB2soRaTfYRf8DKhKi7eAJjSNw6",
  "key9": "3UWSA7tzoBfr5SX4qMn7rYrHX6bjSuPE83GDoYPmfHoWzrGHd7JEhVooMxtVLv7XfAuQvWwviizR52aS35vagLe3",
  "key10": "5Feiy3DKnoQuy717hDhipLD1CFGwoFmhErbskbjVtihfR5QKDkhSpm8Pkeq88zX6BcsvqbBxJQoA24X8Fm4cNrN1",
  "key11": "5oSu5J79U4ssJcwfSDBpjryjTBzYvVqxGP2wxp6nHfxkKMKChpuXaXSARh66ajWbwzVLYqrriK6utLsH5ui5WKtC",
  "key12": "3GoXvhkEML6ZcBzphk7uWMn5PATCHZ9Gb6QMaUsrijoXAb8gaQ8BxhBWLFLpszYcpKGgRzasGAQwAc8qv7GbHRwU",
  "key13": "3X2Q7ZRYftvbyJsbQb48WgCpMufnMwgKtHzAZoiQaoN9NrEJKgqJP5c8qsoW48FvxeYWLbZPRHEicDMpxY5vgMFm",
  "key14": "3Xt5Si3qxEXinVj7ifT7aQPwSbNGRCL34yQ4ZcaebaHyRdDvs74bMhMAWSVMZKk2BhMNBB4iohgdJuHJr1XGfWtW",
  "key15": "45aRocaG5ZcovdEcaPoKnynzbC2Ws1HKcqLQnioaXnwW31hF4z4bUp6snFZvV5cJUN1toPZr2TwiZBVsse8RmJg1",
  "key16": "yKTnm4qcvMaTz7UkRFDnn5z5sV37HNrFjQJED7pVkU9mk1BL9TinxjYpVpDn6JSd91p2pNpkj9W6yq3rrF89dgu",
  "key17": "3VTL5uy7howdukL4ALRc1pLuNJKULGvj666nC5YS5Z1H25adVsg43QfN1hG9Z3SQpQE26snigGRaLHTSccph35jp",
  "key18": "4muUMNWVrDgRMmh4KSTG85hnad9mBbTPdnLh1Ar8WgeoBiDrTR4R94fYybs4ZyJLoYViY5ziPzNTG1tpnqQcQ7kL",
  "key19": "2Xi2rLHv4YgLksY6hp2sG2W9j1N1NMRpVgvSBDhjp3qfaZpAZR86a7gfxPbgDd4dGq2HvKsAqjLXNLxsfJg7Jrh6",
  "key20": "3FtEFqLmVY8V7Tv6mraH1tRh61e2YBxPhKQELCMuoYC3LMHWSsvbNqu286mBYJMQFwzdzsQD6wVkVNe3ZX3U9oca",
  "key21": "338AcY2NSLXiXgsk9DafSWMa6rcN9WVmFXQLR7dRtWbsgAEwMjDijWggBXPjZLj2anWvcUVKRZdxpSAZz8nHi3MY",
  "key22": "2zDELetHp5KaiRY34gwD47z2wQrgacveDdDqGCcpjE4DzViWftrSyrd599VAPVNMvW541NibxqY5GM1aH762tVPN",
  "key23": "5VdMUVgJgDEueCbzjd3yZc4UKVicKdUp1XZzT3A5V9oAiKnz9xLrswnDZ5iCaNEN5hfvaLwoUUrwZPcL26bsdtNB",
  "key24": "4mtmjhz2rECKsDeVitbBrMrgJQTXKr8P35M6G8TMnva7uiCApiZenW1ggmawoPKzXdn1D4xN72VX4ot9mASAKc4c",
  "key25": "5A8uMJ2k66P2x2uqh14CA1w6SWSGXi5TxQSLF46HeYZeecwdrUKbCaCY9mGBKf7pHZ1eT4tqYbZKp7vRBMuL1Dmm",
  "key26": "4hyM1rVjUhCuWUvKwarAoWRxVdLwUwPPZaSyo6aMotiHbPKywJ3HxEWcd5UKYGzUNS7sXMyYGiZtqEcY1GYn5Ke8",
  "key27": "5k6BLPZMe5FHFxpFJJKXyrp2ZAvXTB1vTYwTt7nMcoPiuBXthQiWBxJoiuf8nk618Gf3MY8u1UPAEafEyHyfhkHE",
  "key28": "2N9kqkRKhy6dWgjoSQ1HH9BSMjM2ffDok6xm5h5f4nWcX8ndbXcxPhPspNhQKNhvhWSavQcYT58Nqoou6G7JjToo",
  "key29": "5xSdCSeQqLTB6bWCgsAQLJBFDNXB2HYWhCe3jhMgAjoYwi8kM3AwwgYQxMYJWhACE8vRcXVpBJ2bQrSQgGhy7UtW",
  "key30": "3A4sAEAtJ68hihAyeNyGcogmVxuPmQsj2hVDEzAGYqkptdMDNQ7boK26gGCVebBxQ7KoSJYRA5yL4Ckp7mBP5i1u",
  "key31": "2CncC3o9u7FwCTzkp6yRXG27p5VGkx6Ur1P3raepMDef8LjhWCoHSv62EGcFJZFWJJrEnMvMDEf9a5gMEMLg7BT3",
  "key32": "43xZmgqHkSw7GEJ6As7vF1HuynkiUrjoAFMTSKuVTwFc2Xr4xjd8bUdKkDiZKFitqy4gdRK6QkaukM3eGnFqdogX",
  "key33": "4SUnuVZqtcyYe7g7V2ZrZZdQfZWGMEq48cHVSQAMYiGSMjthaQe96tGsTCjSPAqFcX9fpA3nXHSHPEg1FCBTnP6g",
  "key34": "BH1G1SorRuRUZz2yTkJUaPRyTNLBPk3eWAyZX4rNDvzXLz4yws8V3eiuPeqWDiwVvyyo95n5onzLDXdFzYWfZct",
  "key35": "w3kibetX8Etxt6ZrdEZr8GSrMGWFfAtSkcVBpFnRMHcJihhdL4wmgFVJH7Q4SDTXxuqYQ4ku4kk5PLs2qbhVVAS",
  "key36": "5tJKRAV8Tpy9ybXeG4nFmKN3PESrPuroF8PdrjekjTRSMVRhWu8YsgX2Je6uJXg8uWjg8H7BQdHAhpLxThtZoGSB",
  "key37": "4H3jadsVGcgCWWbtmWEeXju77o1XQmPgRJd4sDxFrzWD3UXPAAJxvHrML3oQMG4ZjJUhJTcaHAS4oDp5oWW4RcRY",
  "key38": "85aJ6o7C7k4h7BAJhMMNaJdNn2nmzD3ZQo7NKFvbqbxy24Z4kPux2ioENgomHsmDzziegT8EYX4Vu2EG4EEgVbG",
  "key39": "31XrZvtYba4N5SUHTCnxqfKdJ6AXtka2iFr87yR8jPFpApZ67bvXbbJFxrjbAqoA7yE9u1Xbhk5CRgTbrLNyCL5M",
  "key40": "3pZEPjTX32GRerwXHRrBbEXoQ7nxextaF6BGvmLfgi9tB9BqySG76qofFQycSm73zRgQLvBnGZE7zLXSk5mPjmR8",
  "key41": "uKe37xiRUGjZnNoJpKtCoaqSgLX67CP33np2DiVKxjuQGz38pdgvQq5k3QT3HdTm37ddanHc6UhzpMSyCczMS9k",
  "key42": "FUzkbGDauENj4dRwtdxYfrFs9PbnJ8XbGS5NqRdV4mv6qJVb5ngJTh7c5pCsPbBfbyPtg84RYzsSEBKWX7xEoPy",
  "key43": "4kqxCfuEvPgfsowmJMbzyxRvijKDiPLBRzPteTfmXHbkPMgkFCeJsSAPvhtbX7F6DcBa4iBk35BjkfJeKVvSEWGe",
  "key44": "5FjmyZu6dgFzpGQVTCnMSVwgX68KCLzZTBY1MEp9Gum6wKCpNtYN55GVYe5Gr5GJBpQ7m3Dt3MpLka8oyezBpCjV",
  "key45": "4Vd3fZ46QADNM1PpGeMrUCVndRBNRRvfdnBHPBzGHSH8NSVQZGr95bwLDb9rKBTatJZ8dFNdNPTckgXMbbCU81Wx",
  "key46": "2PAx2BWAFqKRJZXepNMozrS31oLErHMabRgN2rkKHxd3rJhAkaAuWbEAxUikLiqL8YKYLvzJEq292wgP259VqHs7"
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
