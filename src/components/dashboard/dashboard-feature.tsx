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
    "4gsM4zf4xDexdTAtMcCnz3wYnCjW4iFcVDzEoq83toB7THYMBQSSGqkv9aJaGfp6EnFazEUNFaAiCpnty8QyQ11U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22KGu9jf6eGzUMxknbBYwhswHMx3viCYgUCUzr66WV6kghYCCjyF3m3f5ef28JNwxmfLNxgyye4Mj6xj1sr3Fo5c",
  "key1": "4MmKYwEeS7Z8CMTG54XRHhAHEe2qkfsQYPWr6AYxtLvQJGcoQWmL5fj7W5iZQ8p7wVaoRKXGnrNdeQbTshDpo3Z1",
  "key2": "4phy6fkbSXcncQjJfnPGXxhjhwgZt77gib5xYQLTLjxwfMDzDY9GUMNK349XJWojGtN6XzMHBzoAYJhLpFVfF5j3",
  "key3": "4ssXqwnNPFyQGLfbm48R3PQJ1PXKmZ1UDkENop4sn5ipueZTDQKsj62Lrmt4oFw5w5hEeBQRH2L3W5zwRv9FkfBL",
  "key4": "3V55DCWKWtQ96NETbpUGQD7FTrwSdyjKE9wN841rXurstMYJbWSbvjEdAFmWFmKMpYhGQ5gZ9VA4sm5g7PB7aFtM",
  "key5": "29wngEtJPDZSM6oH7syXEMXqMnFd8cxhMeceKYfkPEAWPG89txhHRN7f1mYYmf1Y2sauakTxYwyemRdGbDXajdtb",
  "key6": "29eKms9xYeX7oCUjgkgvUXtHwZWGYYHCtAY9MmPrsc9mKEz7gense7WYYSZeKtYJ1Pd774ZiM7CdYxoRAhNoUgSr",
  "key7": "3KNqvDGnjqfFtuSMMepvoXUMdu6D3qWQZ5LXJZHEPZXiq7uPSAjQYCrMDjc8gcXAJrrNVqtwp21oS8bZHMY3EBpz",
  "key8": "4F2RQsTrrNsUmpcwU39A5dupGAkdDJeb7X9GqS3dwBpjZ4oKzV6FmpvSCzT7N2TQLj2XNtRH7vEhLFbrCBDvF39U",
  "key9": "m3YoC98dtJDUHk5DCtvVJ7CJQt6JJTeYrQtyazGrEekdm4PEVUnByZdwMWcyKn5V746Wpss9TWch7Q64VAxLJCW",
  "key10": "mZooHrcfe5dguk5pfaszpqJTcBdmiGFLR6qhPii5C8q6qcLM4pEvkZMZxQhgifuRCaMR8ocqXwFn5xokWKb2bX8",
  "key11": "3qv4k6T7iFXFEM6afHchopJCsLDv7PTL2WYEtw72Lku4XWNp1dXv7FdkkCCLf6nDXvKNtDysqAn42PmGsDtGNRJm",
  "key12": "KLN7V5iWbPz7Hs9ia98NHMdzsR2DXMtfX9rqF2xQz6pnV6WNeG1usUJiNCUoowgNJaAXRiAYtbAwiADv9oJu9bg",
  "key13": "5oz5p3876ZL9g8tYbdYPyzrZ8sQz9zTt2UuccMsAM9zWETpnvCzXiLwKpAhsiJM7gBHwh6mNz8m9Gn7QVjrr4Lzt",
  "key14": "5vAEdtxWkhKTVtQxsUG1T4jrEaEMuGypt9c3FF2KAGHYaFiUJGbFfcHx3AkKGTk7zLsCHWsXGW9EERMyf264z4Cz",
  "key15": "22ieLuQ2CgywosXcxhQNCz16jSi58Gvwr7QdXaBAgMUPjvDwY8GCFoiPJ5Ao2KEtSFqP7TGDhXz3Zpsp8SAJN1zk",
  "key16": "1WuSpmL25LGnyidwcr1cLDBnJxQQQzY2Zhak9GkcLZnuj4htonJgoiNNPW4z4prARcxgFLgkjY2d9nRxinfLTsP",
  "key17": "4G3DsDxXQRbRf1crzrsUJJ4bmkJV2HnaARe4L6mt6otqwfKV8aDnDLjAJyLcSRM31pMehnCcTpx9vQTkkqWVwxS4",
  "key18": "3oFyWLEPd8hmQBGpHPvWc16GFYgmhVM3D2fad4i6dCeVzcKJHu4VkqbEuFPCtPfr2VNb9Q6AFMtFgz4W7q873rnj",
  "key19": "4pFPLSdCUrv4vyczXjmGdXRb1BncyZ63w2RALbYznpkQnwbj7tTNR554d7kp2GwYBT3NakAGCkm6iMAAxys58SSn",
  "key20": "488qQvZHVS6kecn5Y6QeXvtt7o5maKbVdiGNHPmRq9eFweyjWc2DPtskPHy3mX6CBrdtfJBUe4N13j8qrjVFMK7g",
  "key21": "4VEJnroqbWV9ypo797tn2pRcWNCm8XZ45DiFdjv2HwE4DWqjxRZ1XQrs2wust2fYqRDKHK2B2WMvnUS4X717bqRe",
  "key22": "76Y3j8Ar11dALPvWo1sYcxi3T9ppsqMqLsaSHWy5TzABAfQ2SBZM4iDPvQR12iQmsYoEZs5HGdESsfYK2hH28bu",
  "key23": "5ztyWv2MrBvy1LnMCmf68T5RChjJrvQZJ7Pd1crBjni3qFS4rshwEQDGsc7a61sFhhe84yd3qzowsGPmPL8TUyUB",
  "key24": "4GTmp7GYTzKuBF1EUjA3GYcmdwBFuEB9mCfEWqnosw3Map3TbJ4iGWqi2TKTinTjbNXDvXeLyHfpqSqACHdntmMw",
  "key25": "4ZfB45M1pzGiPyBfzfuqWWGzfNaimeRYM3zgt6BdSrSv8qGy2AfqVeXqN3wSRWg6DGo2CGBSazJkrvY2LLk1AX4J"
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
