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
    "5CjsSU2qTPk1JLLiq1GJvUPVjqqkaUwmiVtcNZgvz1AqZFWWUJBFPoduBQfhryx5avEsDxe1eFWmEcjPB7jqiXL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCcm7uBGKEkSfE57pDrU9xvjwjR5TuZMfoXtRaqQdSXJzW88cfRGZvAkuyZs39tmnfJ8iUt4NEoDHnrK8rGhdsm",
  "key1": "WSKvyVC7qWu6tojWmsBZR5gtBhcVmS9eqGDKoePDbauBay4mLkXyGFH2ihG9GENazLPzby4uqnsPTG6MbS1MdDd",
  "key2": "2ouHLNF9BEgaEeFv83eP8W1YrSQRCBt1FLpzcc19YeUZ4uQRL1xpoPtqkUMREecLyYSksCb6wnPc12a4es6n4cvG",
  "key3": "c1W8kiKc4HPHqsbqQqQ4Ymfw9qi3z7PNPsPyJLt29HwEoM2y6XUyxGWBw46N1HUDssgVSGyi2kfCLqsySNyN688",
  "key4": "4A9CcyqVdoi2e1TWPYVr8uBmgppxyY1w9mbph469wCc1UWY5HWcsLBB4WpBsFJqicbtQYkW189LownUZAGFsrmhU",
  "key5": "4mNWh5YpdmCWS3DEQq991sb265JCHE46M4pSp92mVmwm7QGQoSHPgLjCd3qbt9G34BhqaLf92JeFZ77W4mY1aoDv",
  "key6": "3QjGdNy9fcFa2JuFEyJwNo6Vbjw1jESkSEMPpxvLGhGyDRsMT3KnyrfYUgqmynnNj1JAH9vRzuEFumvRrvFj8Roa",
  "key7": "3UtBepjVjnCuSAt9Bg2XnKeMF4iaN5cJg65UagmqQR742pZ6m9EuktugRnvEU2QeDzCcrt9x7TcAwgHFhAUzYYh3",
  "key8": "5CX5G1E3AjDp6Ne5sRkU92sFqkpGvPDHDH6yRpjWwDfb5TKGKESSPQWAYtVThghmB6ntF6ZXJZrqG585Q47Zyk9T",
  "key9": "3VzvYhsM6obLrLA9qwccXJbtz7MF3GboD6rGRb3h5KxhVshR48znUtP1uywAsvmjP4Bh7YoQ8ZrWAoq4EpeB2CUK",
  "key10": "JheoM13ZnkLFjJ7azFKYaU4fnkp7jg4tLoaWSkbnB56DTUPELwzhMxLh7keAn1qmjL2f6jiY2HSETajdp14sKbN",
  "key11": "3uYJuaJe5KxcisBULspy5kPVjigAZqTe547cbUkN76mES5EputLDPVQimyRnXogqihWfdYAd9Z48wtukM1fxejSd",
  "key12": "YB2qMP2ACuEqeeaDUkBdntCweYTT34Mq4CZwZKvbDhukhZxowxAzqTdrdD72nath552XhLMwYpLrYmQnJrgE5K4",
  "key13": "265gY7BSSs76jBAfWAm6NFgoBRf8PJFEzchfkz4ZEaHv17EA9t9h4ogVntXrE6SbnhP8MsbNhT18aNUhjykhojS4",
  "key14": "3uGSWshmAxLfc1CsxzMcFrZ6usyvZY1h1HHLh5gE5b4yyCjaC2YDEJkWoYPHQVpiib1G7spXHEaj9peVpp7T7WkE",
  "key15": "4JJt3bPQ7eYC81xAn5WEKKSVQTgfrPdqt83t4UdiMU9BWUjU748jed2BmqkEWVt2rpaUJpeP7tktUi2MaUSzTXfN",
  "key16": "31upo1JvwD7BqWWeorQnLEsZBSLEh5wtZ3jK8vNLjRY2wAwapDucme76F7DDt5GFjLN2tWzNvPkQ9zJnqjJg4ieZ",
  "key17": "h4N95rc3q5mBFkWqqZ5qhMR839zrLZVU9VsWzTJwGJW3WKHDFUWuHeAthXaWg3Xm5cj8Um6zyJghF4sUX8LWrTG",
  "key18": "3rf1twcndXFnt6T1mgiNkBtZbdVHf1VeyJWo7KzMUjxLqr2DRc4GCDpKV4xyyukjM6VoUofSgVpvYA4bfq1CyXJi",
  "key19": "58E1LtSJLoMJwr9WY5NdZpQDseSYHXnhbEDJKYErSsYoJ44xsoF3aFKRgwx1YLbmb6z5DrVVdaXfwp9XRxJfRDKE",
  "key20": "fM51QqUAWusd274WjfcdPeoNiKV2cGYYpPxzdDX5Kx13Np4ktQdiFbikhZ5e3CmV7Df2PHqqhyCTbAEnxuhGHhX",
  "key21": "3FMt2Zm88AG2k3QCBwdiYiYcctHZK61QZX34AyFMkLWqogrDjghp2ekGQxz1fqwHGs2bEJ1sTmFZqsJty2bUoEQ6",
  "key22": "3brkedA9H84fVfXc2rqC2ujVZHk7jQgNnX3WbqABsUVGKrg5aC1z1TLVbPD3TTdjatGohy2pTrDAfZK3GASdjYq6",
  "key23": "4TyGQsi4tXccGGxoJNAYKvTHPKRdL1MicguyiRxzsw4cKvSHg64mz1jySnAr5h59zqF8xg5hTZnY6RnDTFPjAiHY",
  "key24": "5Zkx5nGXZejukkkRGgvzWvTJX5DZHBETZQs8GqitwRcgt1DLWKQoyumihoFZAW8Yfzz2BnBaaKBzgCPbi33mk22s",
  "key25": "5QT6DKHKo8k3yMBMZ5W8Ga5FYLe9p957WLhfDp9JpNePkGAsmXQUk8Nw4PFETC9brXoru8XcVtwVuzmvRtBsvJk4",
  "key26": "2oQdCPD3NEQ2ErN6NwADWLym96iwWDeZeo3HZKpgnr2FZTnAKW4cwR1ybGicdTjP2MbMfR9d2cskac8UP39NYHnV",
  "key27": "iRVJv3DafaaAQNAoUhF3X53cNat2mprYby7kuhzSPsPFmfjGt8fgLYMmV2pPzjSC3BRHVCkvkiUnUuPLFWLV8wd",
  "key28": "PCoa1c4XuTHSv2V9EhLFKGjfAmYKp4bv7UcsxjckvwiosBhW47TzBdYdw2T3fvXPnyHLXRRZJZfYoiwmcsbiTWn",
  "key29": "4tMiwP4xLsN87jQvAx3YXi63UXmpcPseFfdPpS9i5HjS4er4SmNZepPv5LAG9KxBkN94Esi4zoydgdpSnp4YcCCJ"
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
