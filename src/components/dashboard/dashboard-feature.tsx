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
    "3LgTwpyrerNZRBgHaHoSfpSWiE4bhNNhnYBwoG741vY7EyLR6Fc3kdKv5LPqP5LC6Z2tuMnyv8YtAvFwgFRvZTuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLfy7Y5ZmZBMDfNrXVhbnSr2xQyqEavHnBV937tJmzvh2bSHR99qWXGU2FGJj2vjjctSCqp3HRP8NJN7FFJWook",
  "key1": "5SaKEThKhL1hyC7yXwXtn3AVy7M4bbTHDo1Ho7cxmZdaLQ6DiBJiHDELktmPCga3A7aVhDQsWVT5UWAQm7pNpKU5",
  "key2": "352SvX88CXufAx6CgwqXHWwnJkMS39CaabeS4Pk14qrZmwms4UfcEg7obtcwevzicgyH6Bx9TorHyJjqoRELirar",
  "key3": "xHXPRrh9aXvEBjLDApEbxs6t99FcA1jdXyajN8CL64VdPkr4iyDSEqZRCtZ9cxpMmv6HtcGZHYGUzsSu5NSVsq1",
  "key4": "6HQDApaGizZEKAkZyy4p4isETYXsdEaj12u5LZESfSqh5yDEB1KjEdsbhESigrxyvfy7LYVCeLuncGnNo7nbYXn",
  "key5": "cp5UmRsdvLpPByuCN8ZzpK5tUdp8duYH44DWA2i8ujUU8gokD8uphvxryGGMQ1aTi4H8qo9yrmk6R54xebep5he",
  "key6": "4RZyWFZABmr2NmhqpDv5LQJj8PCmZWbkn8532PWrjZVWdBrdH8UAD7hZpVrbvfPFS6rhNNz4cf6ruNb7FdA35CZw",
  "key7": "6JbX5tFaRzvXrYUf3VuE4HAWxzFwAAAXG6VRzksyNgLdMeSW3C7o2tcUdcmkxWSfNv6Zq1E6NcgMLp3kYT31AbW",
  "key8": "2q8cTRnTVwcEnySk3R6iFfGkrPkZejMMfHzx7Wxuexrf8oUCgqqjNnsN4wCjK4TjJrSzF58ifZNLTDv7cLKVePsJ",
  "key9": "2N6Rwv3oGco26YvS6wJZpHGPaxTywjAdcw8oZ21XS1jw6kDAxYegQhYWaxdzx4Fkoe3DGv8BV5dKgqXSiV8kK5HM",
  "key10": "2ozdfxhmDa3sCka395BGoS18WesVJ3wsSwhkxoq4kkSL1kr2i43dZLEq3NLD1vFsJ4Su4p7pXWJS5wjpvV1vyag1",
  "key11": "311PntNXPnytQnord1QDZvcywbv7DcMJo4QdAZRXC5mKjep7QPsG4hFj9R3fMGS7TzvMpkrhddJSLKPmeXjyz39V",
  "key12": "9t9YQB7FGceG3nu1fHy2oCDsJ4KJjfv5oHPf4sjcyvYpM15bnp7q6xZfSr3UjS2LVF7fXfbo6VYiJC8fsLy3Y5R",
  "key13": "59ZvFPAzRfiAbxHzcuS7kUuU7KUWgVPu74PVgRasTY8N6XNYfpmLsUVN1wJxyTjrHP6pmdBDNG3vC9Ld4PRPZF8H",
  "key14": "2f7cTowDQT5GiwW6uFoQY9gMo2x4cPwbFPQse6PkBWQAQa5MbADKgGFUrmzhvcJwNrkjkxcfceK9WAZcJHroCaT8",
  "key15": "3a2JxxsEHYtrft3N5bkVHLfjWFHArzukQDySpEEQYTHFTv491vnWNgNfN8xCk6XPw3mjqRwwk1XiPcfVKmVuUAad",
  "key16": "3fyzdHqxdsuZDWtX6Xp6iqRbFXWs7jS2MbSKMAXVtXLtXL2jKBf5sbxgBSLHB4XqzNkWGoZFwJcfyVfkPkSLUp7j",
  "key17": "41TyQ7k3hLVktroExgQBgauhtw7xCGf4Q6B4FyFPBUMtdKaz71zyckQHFfJNBZFvzKMp9CHyP64oNJHUpNwiWexf",
  "key18": "32JoeFdurexFcw4phaCvC9K1L3EdhaaAhff1J84yzMZYedLRoPykxrvnuqeKypBRdcZvmEUFY9ntgU718nUqz5VM",
  "key19": "5kiq5yrVCNHoErpkAQHF2Kn9ErhBVNMCjEVD2Fxst51hfM5t4PVxQ1aTXqUvG3QvrKcVpZwyroS5j6uiKiSHhdCv",
  "key20": "4SLP7d942krXPFcpuUDH2NbYBzseQSxU8i8GfaKsCLV4DVugC3jtJN9b7RDdWV5S3dpNBaD4S7hRAoKsTBdUhqMK",
  "key21": "H931qX8YSy8jHbw3BV7XtuiGQFCHQbJtWbAC3kExm8j8KFmC12KBt54BHZbySC9YFskxWkZLTXipc6ceXPVthNs",
  "key22": "KRqx1amH1kzbq53VfwZFgztigDsE3epVjUpnWp4HAi4TGovdBHygfgehiYkJNzdpjF95LxUiR5dJckLZuDbcqCv",
  "key23": "Fe4u72JJA7fTSDyMjUZiAFMgwMrPFLtstnMfXXjboy777kKtLSYRXQdLw3rNkspSrKzeCns6fF5TQfbSBVnnbuY",
  "key24": "58NqSNxDR6BSw9P1YeLdVRhWt7YpsQXeKx1AfyEGnyK3q3EvwHKb7rbYYg8qHeF1yvf5YcrZ3FnsSdCLeNdGC46y",
  "key25": "2qyvw9rTFTsmhECCWXAG3Ke6norrUCxbptS31frdpCXjHj2k4teo6UDLu1rQKZmMyWLqeBSMghQhF2nECzXjSYs4",
  "key26": "3sqFZfMPKmBVADiRRMPq9WZe3hNFW5x1pXxSbPmMi9u4nSBTSWRBkSgPB6VycBZetNtq4Y1PwPpJvmAXQzanJeg",
  "key27": "4MWw1ZMKs49oeNAo2bDyHHNVm3YewrkRH13MAFjtnG6sR7Pdw2GVYvQKwnghu7A5zHovZWLdrw4uqmtpy5kN4V8M",
  "key28": "2AUd8PDVrWwp9TbKnFjeamRqRFrNGTVLYpaM8DxjDP1m9nKVve8wyd1KeKzx5zeikT7jo3LiZBCZsWbfXhFvTYkh",
  "key29": "4v2AaN69UZAyGGDEJAn8749WmDS46cKSGfw7DqGL4yc1KgEVMmuVqPCzrc52w1kVETEdEf9XGwNWRQi16uNgVyUB",
  "key30": "3GbAJzQAcpHhGub1R86dYqFsegMrA1Js4tHSKPC1nVTtDZawtEfqdkPCbd7rQnvTL4EgAnRWXwgpY6cxLsAMa95x",
  "key31": "37rwteQ1KTWCtvwK5pt657ETu7pzBseYU2PnH797M7yVSW5Rrr2XYJaGjmV541T6Ax1qTaFZiv5aRR19uwoUhsvh",
  "key32": "Vd2QfHNJRhJ7Z5SNAvRkj8T9bDXh3MrwAKw4jQRq8uA4SPFfYfuSy5ND6HoSqcWq9MPK9BYavUcharqSXN69NQr",
  "key33": "5VaMTfx7hSUzkfB6STR8Mtag5wDaWhhvr19LWLoRwyHtVhTh7YpHWNpc46HWX2PxQYJZCwhtDHt94TdHzK8EmRzh",
  "key34": "2T9cw3KrXegczerRE35JQXpKoAvAEB7Azac5YB5WSSYVn8X7xuZEzAas4p6Qy9N1xxdDioVJEvSNwD1iiSVu7C9A",
  "key35": "5cQN611Var3Qwgq7eimVkiZqZ3hSSNrzjCAiBtky9xTdpRA4UKfiUGH6nr9QzTqdEMGvZvyposqXLEUaQk9YJAfN",
  "key36": "5mcFkFBsTejwyLLCpvdecDhu8Mgwkh6YkZykQ9Zg5wdoWACroZXuJW29Q7WXWT5Zwa5wnQz5d8kXL1egyRAAwSu9",
  "key37": "3qSrhtRwY7pcCENGamerXGd58PmNBAcoyWgbhfzuGCVeKd9YFexopUn8DuyKWKZde29rbcV5JjQZPqoweTD6RBD7",
  "key38": "4aQuaAw3cV3QSHo8Q63X88K9UeT9nDcGnMLXqbvU26C7YcKHnfoBJ6eZ58R6i9ijNUJktzzEQ2zbuu44DbY1kn2s",
  "key39": "3PFDHyZ2PR53GcKxrk8zsxXz4TMAq1am6qK2CbZFxaFnJLeciZu2C6fDYUbjQC9EFHMCdzLgtnHRa35E1JALm2zn",
  "key40": "5fqDaCYCfLHbpAiSRTsm2wcMNasjwVcgbggbKVgjw74vEugzgHr4YzUEXDFyYXZGMRctxryAvQKsHrtFe5ZijgSV",
  "key41": "2XA9dWMnAF52bAGeZy49DSNKrvEjEdcLvY3NxxecGJe3hAbuzrYvDuipvuYSR5VqcHk44fyxmZCX5wR1pC5UwUYs",
  "key42": "ToNC57YauwWfo4HbGtB2Au71PZeYHPBWGYd82t8n61nnb6pw3sCDNEyWN8B5Ycv1RWsFtdzDo4fvxY7Zv5ivEZc",
  "key43": "3sG6udbF1115h1K7TEXBssuG68F4vpdmzVCwZkG2Qy27gMMFswxBEbE688MvCb1RJTHx1pacERt8A3rvkpWVJkBQ",
  "key44": "633pgJrjbu6ZaJ6ExufMsV5L7Qo7bM9Mjg7fKX9WzRXCNpgNjyBPyzrQeywgttzRiyNTmDkubrmq2MUcPuLkbtim"
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
