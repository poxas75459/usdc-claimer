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
    "5n5Hdw8CxpufBjKq6vA998kRoTaime9h8HXof9rvzdkFf9XRv5vXbHhxjEfzmkikxaqPe3xDz2XQJ5HzatcASbGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmD8P8JAnfDfGT2VbJZatVwvJiuhEQksPg1ro4p2M9GYtBfNftnUBuedUDXfzLFATvp9acJREbayFutJdqeuSpk",
  "key1": "4nWwzGDL8QHBnJQhx3KfJGDnmM8gM3e5bstmhwBSPGPSvt6xFv9LcVL6x3jVNWMzU5eweBnj13nZdYtNPbwpjw9H",
  "key2": "PPEBRrK4wSTME4bERr2cEiaE2x7R2hQFLZSbg8x79HBs77AAUiZxSiUnJ24W5EyhZjcooKk12AQtiadRyRT5rEe",
  "key3": "5MAfYeaFv9dhUPQJ5gUZHdnWs3VZrzJCgCv1bzUKNJHYEXAxwFkqqw18Ks1hWLRotgXQgzG1MVtnVMkG6nHGfpaB",
  "key4": "caksLvRQNx3PiJwDBzjMp3iFaL6W3aTgURusycYY2zo81vzhH9Uc9pdhh5n3wHnt4jDbrEmWSFLHhKSSAX123tf",
  "key5": "5WxBGqyxyNknLjFJkSkv97VSiuzpD9325xkm4wp1qSJjwzSUqUTSsZAqdiMkG4xW4gXw6Mc9qLNr2phrpwPpatot",
  "key6": "3yepzyZCy988qkgfqzQineMEnaUSePPEzW3RN92g2AWGydSEZ98zmTRyUy11mrJctTJhFgmSGVfzVv4qUY6gMmvb",
  "key7": "2p7NDzL4xVRujHf6y5xV9To9W8Sp5VvixJxhug1LBdjmox5BsYN19pmsxe1wZCqxeCHKtYUXwQjnk4cgxDUcsfTF",
  "key8": "3mz7bY27rxshVnQRu47EdathareuswCSrf6yuoU7fZaiFZsbTcWcoWVdNyEbfU9Av4h4J3imZ4sF8c56sgjrtZ3k",
  "key9": "5maDZbezPWP1hWi77KeF6bFxU9Qc6HNs5kJLsCcyz3WuXZw3Yi83jQ778T6k4iuyJuxQXCGp4hkasiSgynVS62Tm",
  "key10": "3WVvrNqAg63DCUn6QyYug6CCyXvKdwo9hHbqibMd9zoTcqtfQqXV4wxyry427uyYqHjfdPNU85gpvyxkLFRm9g3W",
  "key11": "2gtkGiSmhgu71fcEmo2vjfERMeJtzbCfkwCtUVQk2squhErpGSN2N87LgaNNc9mWhKUqy4h2vq2aKkaM1hh9np4Z",
  "key12": "4rCawCqg9QoLZuZ78JRGziarnaGMiXYEj9dxs9NBJQNogEScJz4eCFaxs2eFoLAdorZeqxWb4FyYSVRKv9URrH6o",
  "key13": "5ymiBh6JQa7ffxSMDdCXyut149AZbArZM1mjhMF8SoFVUfrG8mucwLv6eQBxMVKzT3GTNnbUQoNKZbqfuyvp19rV",
  "key14": "5CmpnPuy2znLb4LdiEohQtKo6HTx8dhfNmF7eraaRMEEGtCdzM7Um2xSZtiPS1kT73SJXstnDJfLTw9riEYDZsBo",
  "key15": "3tuFAUucpS5GLL88B24s9p2hc87wDG5JQrFovvCzTqrANBBEMVDA5p8rzaWG9qTiuW6xz1ucr4A1ZiCfqhGEzA1z",
  "key16": "2PDMJvJzdGbxrfHpR4q8mPBXo3KFt3G3phWnsyRXnEutRBgWiKB6yKVXPeniVuj2HR3ccmchPnxV8v62zFJ8UHZa",
  "key17": "3ykbCiGxmvn84jkFU6ZVzme9qryKRpSyR6LusPgSjSnKnNi5sZJVWXju1YEPRwdj2p2U6UJyRFG4tZdgXVZALd4W",
  "key18": "n37khjcX8SbsnWac6n6zzeh93EmwjM2U2yjCbPwETTeRXLeXqkzrBtm2LCsSR6gb8kHKCJ7FNoQmAgRwWM4847b",
  "key19": "3ZMydh1VgHaenLjcJroPpfdiYpyVGFCZDra5x9jPTUCWN9RNen8PV6icAEk43SeM4no4QeoiXRRUiS38jC6q3ZWY",
  "key20": "5Xu18UF1RvGgX8SVUzuvzZs2v3vj4CmZSsoUv7YWNu1GpEhY4MAzoqLVGAE7JzKJoC1mA9ob3FWJqVhHBbMYWdec",
  "key21": "3DxFPR1X2ca5oDmouDiPK4icCN2PVt4guN9rFt3f3jTwqg8rH5a92UXZ1Gb8cEWExNNY2F3mSmzhTeUD3EbPx7UC",
  "key22": "6newqadB46YJ85K78Cn331E9RkiVfBCHrJrJqavgEHqRZxHVbNsDjicPPdZA1U48TwhkHRka6XxzzrDTSSzVtEj",
  "key23": "64nAVUg81nwNCEnSvoeQBTG8nGtJU6Rp2dMnrwEwAsq5DmQx4WftsXEGxSwk6Cg2tH4A7bTUrpJf7BKbjPLQEstB",
  "key24": "2cK8RojHyEfpBvNn6HGShrpvmRRH8fCGvm9zJfXrcemQvBhuVsuYvLk5vFs2otGsFkU9bTbBJQArmdGXhr6gBDju",
  "key25": "38dBkVYwBAw8XT1VUnaxCKGkgVXNBo1tT2JSm36jakXeTfr4KRAceJLxzM98xFBPvLMprm1KkzvNGjsQ5swDNKnS",
  "key26": "CSWhAcJsvYwqPBiJHEkFwc5jVLMkteAoNi13s2b4LdkcrKc3jUrGeN2nCozikB36VGn57Z6Zu7xtKuJ6tLDx4sd"
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
