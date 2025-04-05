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
    "5xcP5d3mV2u28E3cMnCy3VKYXSnDw1LNioD7AMDEiPdJKKvoXKQhobGSUKD6BsH9XspYP5xJHmRPP85ezvTWdgaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5cN2k38G2cs2nGY8F9vgMTGjA5udKjTMqeomp3b9TkDTwxnAXC8sX1bc3b3duKrwonxHgtPLXwjWiCRwcSQd6C",
  "key1": "3JWJGMhoJLRE2LMdYeEX6HsTnJ5ZpTLWZn4t6ksXVjb8Uwh5b9hn9P3bi4Ui1TNUusPDBisCPQhseUZGfKw2qjYt",
  "key2": "VgpHV7GoToHE1Ho81bTUSXh4npVRy4aqVDFHdC3d3EAf85VmE7uDUVMbJnxv6aukWbkhnontYY9rjP6MqsNHLVn",
  "key3": "4vL7XuiXgg7N4nufHBFQbYmob6geJnPWmgcbc6fTcPka5LKBWakJqG8JGznWJUBnFQfknNyBME4qHfBG8aydzrTa",
  "key4": "3r8g8pZWd82KVzb4Nr71h4Ya6CrmEH1XdK3Tv8ztVRcx9i2b9cPd8zRn9DrVKi92eDPunThX5racVMB6svVTqe1b",
  "key5": "2WonCQbcknTeLcN6ak2Qvanr23YZbaMh1di6onpzLT8bY7s731TfRUvU7MDoCMKyMxcYT4FWiot35f6S1y2DCiHM",
  "key6": "fqVJSZKDHQybqbohfSZFxsH2SNVJqB3UXAUX9JCCSRbQGmVpHgtmSJyuZaLCKJkW4Sws3KfQhqSxy3AxpkU62YF",
  "key7": "57hC8KoFMzxqR53JpYvWuWiWVZ4fVTmA7BfhrMx6vtdBD3agknSpVpKVjpLKnYnq8WKs6NUA6hDpJiteMAUBEZbd",
  "key8": "3dZFYG2g77yvtRaLgeiZ9PwNAVmhZsWP7DARUwApVdiSHYWEP8SHVnSycHBSGmy2FcA7cbExNzK4XVkJrJF9W9LA",
  "key9": "3rffHaCBt6Upipxn4mQe6Xys9q6PoWf71uXYoPySmn7UbgayJtYjnVm9BQ7FAutypuye5Rnvctgd78pgu1k8M7mU",
  "key10": "4y7JdBPifiKW61aZx7fpHajcXeFbH91aesKQod9NJMGNF4svDvzmsmdHdLnj5xNtGEPc8Eq6au92p4XTJnxQWD88",
  "key11": "5xZc8izRD3ivHShTKajnaiS9kQWpVDNc18BUffKYCBo2rmEE3FpEPWttHJK2Tyf9vpG3fQ3uVhxq6Mk9Rt4XWUin",
  "key12": "2XR4dDWWtRo4AkiHDTM6ZjwhYj23Pn1vZdag8jT9SeFL5NyAgs4yCdCEVHSnXNgGS5tiHH2fBatFdXdjCctwKCWT",
  "key13": "53aQcewTWJWF7Yh6YYTcSgdWZZDSEgxyCryFxLdg4UJM4qvWpFtbxNR4yj362M2hkztpX9VGaZtinbF1Y1vgkBfW",
  "key14": "4Bgg48FbtSAPurRjvPiHfYoL3RAh8hcJ8hVUZSvKPP4sXhhRKjxmRaXA5GzSBEh1iFsPjP2Mj7ZaDbc2wy31poDh",
  "key15": "3Qh2MQY2rc3aRU644JXGZUarv6pjAAPjdwGFsbehaKCfW87sQapfahcxhJmqqAf3iqVqSNy6ShNcaDoWXa47V3pa",
  "key16": "2a48KvXx3QdLvGJ8w52SaqB8D6hWzjh9hTpRLDw1f1R9kC4iXzf1Ny2Q8BUQ2Y3gAuFrarTeP9eZeQmU1Xr2X9sp",
  "key17": "4LBspAmLpUJXVgTZuS9iy6peEq2qs2nQxSsCVymChy9YdWwQGMLzBPAptmzy86nnL16bdhfg99fFLqAS2ceA5GiY",
  "key18": "4V8g8ZbZnKwpTzXcSHyz52wrgdVJDFsC9sLmzoC2nkcooE5iSt9eAyK5xtRnN18irxkdtehL4EtHXZHRhr6XjXYh",
  "key19": "oPPKRzspic25WWnyTaqduZGg91BaceJZZVYXePx6Si4MHngEwmpZsr4fHYhkpwMhQQ1k84hrEB9vXexRAAsQPrg",
  "key20": "3TpFEoMMbRAU5d4BhdU4RsQRU3tWMuH3XEmrdtUbA9rrj6JiiWidh2ncX3mKpjnfxcBFJk3Fw3EqMWuSoV2UcxgN",
  "key21": "2G62pRgA8768kf3qsUeu57ZXaC7GaVVBPye22XpFjiA53F2BkLfpYXcFnyCXJgkMuK24vir98p3jxyG7xXjHNE2V",
  "key22": "3NVUiSe33b2aX9cnf3KNCE8rFJnts7DQRogUBXTusS8LWYQA2mSq3DGjg6nCLZK3vXNXbHQ6jRNxMeEJRiYnqCk8",
  "key23": "2c8ojkS7Xa8VYBD2kMGG7BDGyVj8weyBshiWWAUsWJzaV33fwxbvYfcGDBw3RbiPNCvUmYXgAaqneUav4BdA45K9",
  "key24": "PqkZ5QYkZvFzJr19qujHVQygWJupsocF9BaHPKzfzs4Rms4qWUcscecbxZmMKJUohgunVkZEN1a48tbgWnb6q5k",
  "key25": "5n8DeHshsmzwELudL5iiRrpgnSG8erZDGzVU2Qd2k1MgNuREndya2VZgsCgeCZNRFWtzUWrXezmGoW5Fr2suEECd",
  "key26": "5dxRA8fZ51or42HNqxBXtVcCQNXVkGebPUd5hWxy8nJgVNF3z1bFuWMM2vaVZ8Tutkk3MEFqmWGTCW1KsbpknhaK",
  "key27": "655aLy7ueCLhPoHJmngZejWFojVhEugpP9dQ3dQFdLiiWsGSHZdjWZgVCyP3H3rFsewMLMCNvN5LmFW9cY5448VX",
  "key28": "3hLF1q35idX2k6k3yED1EbZTgyxn1xFtwtFhVHdtoCiz7TY3ZvH91ruzyVMv8a9ULUvojErnqZzTMDkYYN9MPPi6",
  "key29": "2yJYeUUCF1MBejUgg66YHGrTzMUoNiXHPkwxZGmSSfax3KSaMSVYiEYydeXHHohjjAgda95BLzquaKY1CG5SHuJE",
  "key30": "36YWc66BYRMtQMHYm5dxs5cLHeHnXNS8fiGPfgBsLCBB2BQ5RpFhZxBeNJkRdu6D8ermUoajFGWKTRX9goaNVL5U",
  "key31": "4xKVJQcmnovDAi7wgfHAaibVjroBJqh7TpbUjJ3CuExDDeyjyFjBpTV7AP57SR3WfHaxsZP8Erb3mcmGRXCTrVbX",
  "key32": "2ARpB2GPQgpDJGymfHGSWU3tr4egViJ1UnEGiK1CcUjWh7s2E1LUodX4CjVfDHbw184bZ5wxPrVdW1vj9C1wLD1W",
  "key33": "ngHVrPe6Fo8S79roEZBFJApJojaCojnfXAwQoJPUWGtzRTSZq7nyqiJkQXatfxjHBzprsDa292ZSGQdNrABL1uf",
  "key34": "4uUKneadBR35qPumCseL9oJtyogpZKmwbZVn28DC85kLU6kigkiaHwfykXyp3JhxHX5ER1JnFDghz4L43J9FYfH7",
  "key35": "5AsuDLNj88e1bKG8z1QgiBgzwEGL5NqN8xQvnHmVcb1twrsQkv9ttoZsXHz2yLiJJqDtY66j3QsiVsXKe7fRAXwm",
  "key36": "QWfhWygLw4jeAPztf4qvvYsD8tkFAXEUBvRUr8AYCbv8Jsh8T2ghQoNbNFdcig3CtXSwZpyzykTPcAB5AtgUsXW",
  "key37": "2cDqxjiP7FGZyyLXKr5DWdBANbutMgpLfmuz8jZW9h3DZZVR4R7fZT98g4anLxLj1zYEb5tKdTvWYRm13Sfdz42N",
  "key38": "4RZHWUwmKe55h6deezz1hGAjBFtiaab3VkYxgiJDUBmaptLw11ttg8btC7c9DZC6wwX8giobLRmY2xeE8qvBEajD",
  "key39": "2gBiC9EkaYs9nYgfJAuCGYEnjXj7iEHnmQTC9HECJoLM3194pQUrtfVvKn1QJphSx3MQLZkzSVHzjTYH5FzT92fy",
  "key40": "58KQb1RZ2ZorZbvkuMBoZ8HzUcgseEx9HUQpDGhQtUtiZJ6K93hLaGQPLqvkDXCXDoqGktPLTBmVifSX394WCd8"
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
