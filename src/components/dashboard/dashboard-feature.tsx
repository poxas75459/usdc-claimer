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
    "Xd6yY5mY9j5duojzQaPHX4EUSd1cU5KnFWidSm7Lc3Ak3iGVMhAJS8jLeHfAyheWf2ojnAoWXv48cEsEeTY2UeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHiM7fgQHqZa62HLR7bFAGPN2TSfG3fy5fSt66dGtXqQyunFYT99NXvRoHJwWRAGmDCjFWxeZxsxy1YsdqAs76g",
  "key1": "3QtwirBF7ZnjRnY45ZsYyrumFAgFc6dSvnoqjC8eiFYAfadcCPBZooKZVHfDpfKyVxsvPgKAtZKqjjDxo26Fqr9V",
  "key2": "5JeHii4RcQTF5xowPBeuGUWtPzGKsf8UdWmf7f1RPqqMt1DUgxcMeMqRUDikYdEc5RkpFhymfJWeEeJYvWUBznvx",
  "key3": "3GKUakaUppiaecieBstPBhddkhTMofpuAGnQFDKHPukchkbREGhKAdCiTYaZMdY6mEFGWPbwdWMi6TCF1PUX69XW",
  "key4": "66TkRLBCx8hypvef8H4QHteE43gJYDWMJsmCGyx5J5gnEsp156xU1ByxgGbAKR4Ari6Y35dFciyydRuQzKhh7RKB",
  "key5": "2r3Rj5FaN9xMyD7gWPkwt12Zp67MDr8qM3UwZbgjwWnszHrGs2mFYd2YeBTogVJsdwB93jWoNwE41mZdn5F6wYfu",
  "key6": "2U3wHb9mncB7PBdmtRrJz7JAm2WusKreuifsJGq1oJSEiJSKS5mfFwGZxWDsHdB4u5RkB51WqAbdqibqcdJPv2Wh",
  "key7": "Bt8P2BDdUPkATqP1Z3Tt3X5ci8j3RGUHMsj85xqjLVyKe6arFeQkAknyhBWfxwpLLqGguBC1SRXt4e9wKrdjpqg",
  "key8": "4zSzUvDBSxXGBVYA8Z3vrbmXDBhWPv7JZaVnCF9htxG9gzirgUFSfeXCrTW5fmqWDLMSsLmLrCYeKv3AfDAigypV",
  "key9": "1cCiUq4jh367HHanPdLc2CvaatszcUtbS3ym9bGiB9HqPRAsQHVANRUZ9DKsVd8dJDpr34wM27GeLv6My1wgAXa",
  "key10": "5Cn1jhKNM1KkcNMvE3cvbGFSHKaWy2Qx9WobTGWDonn8LKSoGbzqVL4dRsm2q69QnZnAgSTrugQXp45ZpEHSevFq",
  "key11": "4j2jKqVEgoDCyLXUFfeFUqRAAQNVdmJAiyV6vyFoF2FAghwaTub7xkQ8eqMF9isJC2AcdpJ5jWuETZ7ZpDc4E8fU",
  "key12": "5qSahzgk4HBw8FMieVCGQiUo6yj9ro3L6o9u79J6UQSkTfx5vChPMQn2NcMVWU2kNDuszuZDoM8beLLvEwg9gKps",
  "key13": "2mBp3cSqJXTEmiqThfYpn8Tn7M9vWXcp8FHFiy78SVD2S8vSoupkB5UYrMezQ8ptEYEnWUJfa9Bwj6ZdiKpG4mJc",
  "key14": "5eAeYq4Qgg9PxEfrG11iDkfWE97mF8J4J3PWq4HzmYq42D6D8ojaWmRemUtrBuRQBEsyzBhuV6JhcZ75fAphZwVt",
  "key15": "44oL2gXdurPBGBqKiCSuJFdHAaqn2pQ9XEwaw3nNNcQGgshQhsYnvoUVxBEHmmVkYDsFmMvwFDmXBBQbQvBYWNfm",
  "key16": "44bX9VPsNfgozounWgCtkKiTHdLmMbRt6LYmo6GL4sfxd7yrsEn2oT5hg79QuedRjLm9tEHTy1rr5utnrrDrDnHQ",
  "key17": "4KWXUCrKRwNoj3vmFPjDcb1ZaNb81FnihF6LzpHQ9AKYM94nynGVzkXwFhrewtVoejLnf872a3MHVnPSU875VbsG",
  "key18": "5XYhJNse3P1GhBWA7KgsMaTrqWXaRfzffwUDwaAfKTAGbRDhD3fXGTGDfGNftHeqqXiSnk28L5TaQW76uWN7HfXR",
  "key19": "3J6msc4ZPTjS2B8qwffqCHJp82PM31j4QBfXRUN9stahUwfbWGjQwcDSnrkj5RBgvi7NMb9v4PZveCbDwS4qGsef",
  "key20": "5sbcAGkqKeE5tqfH3wkNezaTLHWnwScYxfj75QYy4NkPrswVoM5zdbQwkqCuQvbWn9zrQGXM3ibs99LQYa2umHJe",
  "key21": "31y65bdoetFx8eqNqmHh6r55vCGjPQfHbJ69qzA1jXd8Su8k7NhCoFDg5U3JMZYPP3tn8pZDfPw8rCR3MAmmmUGb",
  "key22": "3L1MqeL9VRD9qfjZ2U9pEB7ocJNPpSEFA6taK3LzDErvv2ZW8RXsTQeyBkZbQr6pGG5QEBrmfhCRYy4TDUpnRWdp",
  "key23": "3fFtmDmApAvKJVuN5oLuGG9mQqGfi6gTuKLRLtY2FPEDwNWHdp4R7ihjAmRWZVipnHkRwqD4re4zzSxEZ54gCrUJ",
  "key24": "3HxsEZzfbMRFL92xErj1GXEiaf3gVw8n18PuYAGgKCt3Ec9gTymx6CGqaGWzAQP1fXzd2TvPX5BtJMMAUyugnFrn",
  "key25": "4BM7MYLa5876i6vG34jkUwKrLspJanxKrchUtBe1qA7RffKMF89sWpWfyartnwd73AzsWJVVHEKDEJxmhc6STG21",
  "key26": "Q11aG6weUB4bWoEBBTDiKzFmdVVqVP4u6FVMrKoic4CAHr8nwVvcJuZHUgdKWEPjZ73R1huANFheqsdLAAKixTR",
  "key27": "2joVbHEiaE6xXoVSFmcuJWD9E2MBJVYBpiZnvJDu76JwfNsW89o31qLMmvq7LSgyYpx2z96ykPz3iGNR7vtZdryc",
  "key28": "3vMp5K9Jaa5bso9yrczHbA38DpC891XnMkXDj55PT3MYJEqDznUBXBcmMjWXyca7vkjKe8c168FJy9neV3m378iE",
  "key29": "YQxCkb9MZyK4siJh1DAt69ij9YVJEWddK9JpQtKU9QDM5WVV8HjipEb4ASFV8V3KM5Dzpt3MTuWDDTN6zWZQFDS"
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
