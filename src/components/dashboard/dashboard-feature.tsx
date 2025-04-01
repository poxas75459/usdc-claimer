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
    "3JoRHo9AHGKenjhCGhRSJhTmfhRp1d89CxaQkAzvKZsc7Xa2UJGKWhC2WBY6iqTVWyro3PDCN6paneZK11gUaeWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BN3A2c7x9uuyvhNYJSn6rPxFPgiqLVVMQ1ndxsxNfyKHphTzVzq9bKvH6XECN4cau5c5X8xoTGhK1x4VyYTpT1Z",
  "key1": "5zvF5ch4c6LbL1SK17Veud6dGRjm6Z2vibmfAYRPkR3UYK5DdG1hgJyY34raE33QLZAGCYuz8zk4Ky614CVaieuR",
  "key2": "2gGz6qogqXmuEFW2pmkgGTLaH7EqLu131gWWT7TVQAptf799kEB6NRDCxep3dxNGa8aFNrRCEJE56gR7EuaESBXT",
  "key3": "wf6ctmHYrriGME17gxap55KgZVk4kpFj1RKoMa2aJjbPqAFmYBQVDn4iMzoeFoX43KPnZ3Qxd1g9R1Sdt1AnojK",
  "key4": "3B5dHryg6xieGT2MNw4Nc3UJBvNbWCJ9NJhHnJnRnQjLcgG327cPzfYU5eeHejztEfx1Ne4kKU5ZKAhLyLtnYMvP",
  "key5": "27PLB1EpRamGXfGdhW2MZUCTauY16G6JQrcVPDFVEBcvHngUCRAA5dzGzEBdQeq6ZhigLfjBsAdDCnKxRtcDMUNY",
  "key6": "3ciDApwHHjrFHdpD7a9UT1nYmQ77Y9B8ov1ykmCarxMi1V3jVNk81fNkZmk3BbN8i21CTULd18QDXyM7cNYUWLb5",
  "key7": "3DkX8gu3P5iTGs9DpG8CysW37pkSYaFhNAfNSCBexqpua8hHPykAdkK8meaNB9LcBtNqrzrri94sQE97WjmAG9sX",
  "key8": "24Cxok2Dmmo3K2vUxubsWfE7FVr1TF1cV85XiFjTJZSzYY8KPMgFDfa6CJ7XQLwcvLCyE5HmGb7zgR8x7LQW3eaQ",
  "key9": "5tEf1ASqm5CPwgy7hUtcFZhQteRU9Ko4kFVKGP7guBqWp8BrR4R5xNf2Gtdgo92UfMSMvpLaqXEeoq5owDKppHP9",
  "key10": "2T9FGWh1XjQLcbP9s4Vy9PNNSTAy3mVazhUp3DhiJ5zh11TyMAHTKKCnHdbwGtT2Kee7LVDpR8TecZW3Uk3vjzk5",
  "key11": "456h4qNEzmHDehrs966uxcBR29dVka8FtyCCbW5aJTAziFJ7PK6AiuVCtEV9MwGqPGnr7QVCQWtsfYHJ1orDbjRo",
  "key12": "3tVLkzrW2rujEvLPFZAA9k5FWePtcMNp2gRzPr8orKswuFFaDYVgUtiWVPWNvSSy5EsFFArMUJT6FaSoiqqxRFXB",
  "key13": "3EkqFhx9rNZnQaajiqx9hJgptHfhNKDZpsprznjjNS8vjRY6a54zmWxfXLvvkGfJHe2GzyvaCRBFpAvatEXnVLxU",
  "key14": "JApBTRC9KKh2PSc95T9UjhL976Zxgc1MDHhhJSZSfNKXNkPxnZKXNBetG2abAskC1QDxeHY4Myk2g699KdLor5q",
  "key15": "3LJcQYWBoPf4bJDdCqNEtg2epcLugp1J34bdPSEve8v86xv9JFe4ZQ9AMMC6G8cYVzj33Q23LYkMRMCmLgBNahNc",
  "key16": "3MnEeVd4t2TZJLN9fKeyJyrNr7J2cjAuiNGfQtdmhNwUhVdHJfnDnEokZdMhzuHJZwhPAKXpAM5F3wQM6CyfuxLT",
  "key17": "4D7GJTihiB414yMEhXnReaToUU36t8MUsNyigKN2SFThZfD3evSShMzxH3V4RHxoEAUtYNwrTke9wPf5ryjEwpeb",
  "key18": "28J7FtJdT7VkWGbKfGCzf9tVVz5Jgih5yJQxvb773GhsJEcwRMetMQkQvh6DKw122cK4PrgrmXw4iWwKBtvCYUfc",
  "key19": "nRFQcN6rUGs5Y1F2gBmD1pymHfBfByRLY2qnVaRipnBbqTXBoPTYh7M98YFyzMn1vVHP4qQPCw9YDYaJbtyyAvM",
  "key20": "o4bLF8nWytuUzGPu7qu4sFtgaX1eXiKeYiPYykBXe6u5qmYrKQ2ZmmG4oQFBwK4DDatywwsJU22gN11yjcdif7q",
  "key21": "5gdykjvsaHYWNBnAJtcgaFoKCcxbdzwWpsshtuBjR5j2bMpDvPZCQoe97dY3kHFwaadKo3LNHomPJR7ZUcohgwbK",
  "key22": "3qxpDpbrmYaxG3NdrLm4XRw93Be5P8s6baSG6hghJSepQTA8dG4am5t6Fac1s8kUiXaLNxuNJNoUyU1sayxJyCL1",
  "key23": "5ffoxyEmkDrgRtMRKiRvtx9Wm269EqddcDLvCgPibRLg8qJSQuXmMq3LUCKJZNpwvoHKaB2W2UHWuaomRBbDCdQX",
  "key24": "1UjBXkaf4V2WMED5cbBnNTB3K37czWPAh62dzwkFtpZmafeTfT7uY7GLqpfN4GJN2SGE5NHSWibFsAbLiSSdRro",
  "key25": "5bDqiVeKznhQXvwwqtFwk8HhjvyfL4wyR8MXDyJKiVu6VDNBnL6bUVj8Fyxwv58yoAXSKqQWCbxJaTbqyBj1VWcG",
  "key26": "3kTN56rfMtNdHkQhPMeZtk6Lp5Dva2SmXNDEMJX6Qo3q44dy8gyqSSmsmRZixrjAYEu8qNVkAtAYNYQBf7ABnPF9",
  "key27": "3fVmomwRtf3sbPwUwzQxgopAS9G8gTcQPPhrz6Agznitag6FxYktHR5S8mJwCbn22PSA8GzVeqvLbxccaTEQEc6Y",
  "key28": "21h1EGDpNCAsiyntD5qut8KAsYRmFsbJvc87ETZrP1cKMqccPwH5NmcwRoAZLcJiBCNrYYKVgpSwCmbi7skTtZZW",
  "key29": "5rLBMaa2XLtV2FkTTX1fR5Ys99bmjvRwgNu1Q5W3JNE6F4UKpwJkcTP358m9wHL7FxtvssaAmqZrNGD798We1eqq"
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
