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
    "5Vv8WL1eETXjVufzqDaiwHBcUuvCx7ZctwtCheWGdPwWJyEMbeUWeoJ2CC7GwUYKwHSJKxfRZngoZkVobecF3rYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJdnAzsFpwXjYMC3a7sHuB8mpuckJzJdsJjTHpxnj8zXoqSiiRghg6b1SmNtZfynqumgWtvsU1bsez4mnjcYjK1",
  "key1": "3Hhs9hdLT3Q2NA8EPRHhH25Nx3E25DfHnbcuFkRuyajLNPt28eYiFYwSZ6dBQGinjgfkq8sxzGXvo95ABuTcrNYu",
  "key2": "mkroafq5eucWKf3dNU8EH2SQVa7tnvV67AMkuPifeDArCov9YtwsneKUkDhzsQNYJuvRWfeHbVf2ap4VWMBRRYN",
  "key3": "2iZNFCfC6tejHrbLXDiSfcoHC3rHFHMZzFsmZAbcrmj94gqRJR9L6hriZe22q23fXQh8pAQ9AEAtfEGtk4NyNjiB",
  "key4": "4osXtEoLwbYzwye3xAoLoW1sEjgAoKzVHPihn948SuDw3YUAVbF7Njms3KWaE4vPotiUcQzDTn46euxyjJH8PiAi",
  "key5": "3Sa85D7MuZwLiA9ra6gvRN1458nTBbXMdmSFQ15TtUriJxnxN392rpRyEurCZiofFG9fbe2xW6upo8LEBx7rz3SL",
  "key6": "3c6pXLWb7fwTqiUXWy6cBFLTdz7r1U6pUoL8wxmzNJqEHP81E6nHGRtELc97fXkGWiJFFxEeBZcR9bWjfZBsjk83",
  "key7": "3M5eimYaTV3xZsqe5MuuekYB8TkK1TP81SutB1fkENyyNqusJuaBpWRQGW4h12LLDYiQQgiyFKwLNMhZ2zbN9cjA",
  "key8": "42GMFUYvsrqYtCwtGL2QmNGBrvkAHswjMLQ29vczRNfrR6XmKP9FhS41g8HRg6eSfNukaXdRPWeVepki9HsBpwvB",
  "key9": "4iKeAGCzS8q8DGUQPFMvpngbX2gnRtv4Lrab9quSjta9dQ6EmMZg3RtkNXdSjcd7mwxEttV7444ZJqnBEcgx5bJ1",
  "key10": "2waonYeXBoN2esgGh4PBTrxAQNjD2QcYTXVAgSnCk97q9M7UBGY13bog6r3wD6x1w3Vj6PWYBq6nWFs62drvedMb",
  "key11": "3VP2MspXhVRPThDG1wxn2ykh4VhbsuHqywitdnVk2aLFoyLHnQuhR31A5yjJ9zNrAswoSZtm4QaxaVQGPYs5PLtR",
  "key12": "59nhcMCGCeMu8pnyMKfAMtwhT1ceYbSLfAVPEGXTT6WRRzt82zR72SdLWBL6Y6KhMxbYJ7CiazQ6rGyiYLcdMeiJ",
  "key13": "2MaUuzL5nwwoHBKrCmkKvmFKWvEmthuS5VZmeXMm3jhYRgsQQDNm7JwFCidQvoNFeDXzR87UPghXRJJiguhKLuL1",
  "key14": "3DL6BDowQdBQ6vFVtUnxgStqNYAGjQuxVhtKQvEXDCT6QcJg1RQdeSpvnfWeX6EXSgo3eNxNoVHWV9yrjAxRyY5i",
  "key15": "xAgEajnLksShf2YgfC53uS9ivfqDoaRPL3VU26HN5ocibKpiShBq54Q15PFugELUHTJ9fkY9Psz5Nhtp499YQgX",
  "key16": "3NLjX9kt27FoMrb1Dhx6GmpZMeHM37GcRGtJ8qe1mbmmwX4Wt17RPpdp2aFu8ke4rnx3TDXY81BM4CSiynoukvGq",
  "key17": "46Xc74CUnGXrkLna4JJqJXqWCBxM4vQeurpDVytT9ENLH8Jw3p7FZZdT5p4bWvn3GHWJ1YnYAQyBiaWxemJ685Wx",
  "key18": "4b3Q7UjXeq1qNDC2cBRSfT28gn6sq3AvGfnipYiBXzHuMHba8MmvJP8zPB21UzqjjbyHb5pgoBBC8mZkUt7pz2VA",
  "key19": "EkotbJ6J9kyurzA7WpAn1Sm8Pp3dBWiEgdqrNMPeeMGi5bg18GNXuMys2XmzCvwxCjhckFm1qtquAB6KMHh41Lr",
  "key20": "36YpKXXuDksgqFKE5rNxqHMHnqiBWx1ZpXnPso5hJBNcACNUY38JFVaGrCVHi86DvbVWWBpYY4nVxzWdnatB5UVz",
  "key21": "3ScytdTzffnpH6hmNpBkAFaZ6vJEh5RbCTWXFRV8ndHdnKRfoTWPXDKnmJMcmoshA8wJ2wxC56Wmjo7B185PNS1X",
  "key22": "4a1sz9Ac6AgR2Ads1noS4SHGWZtbhfReNq9CRAfnXFA5ps2kPe6aTYuWBLgVMuU2oe9Zpo9fayzX4WEMHTdF8AF5",
  "key23": "3sHXbLSEPRcQQ1RpcDNKR5b1Wr4oyG5DFSL2NsoiWHS3QExFarwMbJrC8NjDV424zpMDUb5czMiashQ54xdSCpPr",
  "key24": "4L39X1XCKmj2PaGghwD1GgLSJFdWpWaGgrj6LFHvqFE8PVHQV69Wt6iESP6bYbMq5WqiUL4JRwxN3KNo7we5FHWB",
  "key25": "59ARNqrLpHskbtxSmkFQmmMMRDYeV69L4urNjhQ7uGf1nq7PKcbFoSEwRNo5bR7JYipHxZxe2WzVkMAQvoEjeAYx",
  "key26": "5FUtigEuRcR5syKpfWMwEGsNP15e6BRbjMZa2y9GbuzuoDY6mDtLjtmMkpaSEzazFb9x81yXQgw6AFUqdUqSqsjV",
  "key27": "3YhdPenBfTtGBTrM3xd4QaPbkHwG1ek5KPRu42bBQUpssBvcMfEiLLpeD6bA7Kb9G6GgNoxwY8MmD8tZ6ET5c9dC",
  "key28": "57tKXeoANjBE8Bom4mhm3g8mXJpg6io7ywGSf4enand8Zyxg955LKMjJ8kEMaTVgXhFyHSSyuwCwxmPckQPnv4XK",
  "key29": "NmuugBnPMBLx6eMhoiUacDrRX6ombsSePsMbMRnezuj4YVDdHYZ6L3pQtxSbnyb9SYkhisKzBFiKStvaSLa2igL",
  "key30": "5WCCx8kLbh12KtX64LLfeS7goAqAdYLBSLZvx9QDDghJxdXraHB3MdKTGUqkC5vdcbBA9rY6BfxD479WizhR16eQ",
  "key31": "3aX31RyYyVF465bVaud59MQ4CaW1ZGFgCWxwFJiKbEUXDdQiURhdSB7HA6ufKP1DdvJ1kjVgrVbwn47bTJjBP7sb",
  "key32": "3PpEWiK9k8oxv1ZnWXoiN6JbaKi3NnG3UZ2xAiuB3FvTdmMDjQdDjg5bXCXxEYhQrHgSyZnWiA7Rxtemvb88DeLs",
  "key33": "5gguiRK6BgChA6Urh4P9r9peoWpZPAFa8xDH7z92ca5mN1CzUrzTarFMx6JZf3pMzFk7KCvbyVZKdtQc2SmLBntY",
  "key34": "4CSYJh3vysT7CjAPvxgKx9uk78ghYpLmtPfFUrAwrKkWZNckUtqcau9RgwC2U9V3e8fMpgYmsG6JTa1LA6K7nexa",
  "key35": "3ACyDCuJVYLD1D2ARg5XDjEQkBQSHngHM7pWe6i9qfxMMCnCVt7VwZstAWy1wAtc79gytNjgD5WvytDRehs5dq9q",
  "key36": "3o7U4Y6tsBvxm1GGatUyLu1YAWyDQo6J4i75mSrWvYVRaYdDrFsjry5tUCjm6X25pk1QwFLH76H5onNGygPV8tbF",
  "key37": "3YmjscoDoySe4rLJR2Eza2ssfjN73Q5BvcTgL9HnEvmmu9uqmb66wvxsu21ufUEUi6H7EFNXXtaoDf5NCdTTxCpn",
  "key38": "5Fy1kAzt2HA1vkpX6v3T6md6Ne65uHTu5FgRd9niQzcHer2FVfHPDbi2c9Fmf2kJT83dT5G33BJZeAhxwVxPmf8j",
  "key39": "3nfmpv4g9onyqY3dzSqaH9qMoRUvVvrpXYUyKWxuj6whjydRiW25kJm8eQGVhisMTRmhqV4XFFJriLJyZ9PoFZSo",
  "key40": "XRAT22Hr5HCoi3xBXx5NgCV42Lo8NTMHqJPJCjTz5BtSKzwqXz7uEXEx6gz9JbPTBMmhiqVwD7gcxozvsNCNhWo",
  "key41": "tqTcp9JAT4Jz1hrqm19CKhsGTWJSzaJgdWV4xPeLLkn7JQUx6yCNzFwReT2LPbuFpNoZHEX2uwYYJxA612Fn7SB",
  "key42": "5BNnMKj25nLAJzqvHjcGczBD3E1srtiERQp4aaXNZdYQtNgmtdp1scAEr2CiQ4YXjSj4tVoDh3yjPZoGUKnAD2BB",
  "key43": "23TSP9yUTRxrEnoy86tAWX3zyoFDZBiuQjbx4evDTNM4u1dwNXfpj1UHseLcKPfj63k39HWQQ5W1BF6Giz9j5HTo"
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
