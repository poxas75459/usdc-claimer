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
    "3G2UHSJAEmapv3XKdxDC1xucyrXq1YuMUQ5rsxzfm5qdtbuiwZ46RskGYqfR8NQEApqT4jNUXx8FNEdpPRoRwJEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJKacGyHSVP5uojeC94odVNbz8p5iJ1yheSZUzoY3n2kcp3Up4cg9TATu6KaCWXYQg1utGvcdzz887yon44pjkM",
  "key1": "4MZbzQuEsve24XgFXs2oq8TwekQxGR8s5Q5CZuCQgdiEkYPSv5QFQPkzvxboW1M9YhMdR5JXDLmwk8wJMzpoXouP",
  "key2": "3jQhXPfuz6hmkzmmUce9UKYLeyZYH5T9vxonqNo3H1o5skFZTE2HEgqYzoG7PmXaCoXc9yBg16EUp6RLkqXPuqEL",
  "key3": "69au7aBfanbwq6x6YEins2DUiByQ1KNaV6asfMjvDArKmKbucLJswi2RPwg8dTEMQB2PXL12o92fWWCXoRN75Cf",
  "key4": "5BxAt7HUdkUJcXBKbLD2t1jra5s4RfhGbMchaSEic4SrSE8Daayiw4dkSnkLw9ctH9Qq4mzfcDqmbggrAgXnpiUg",
  "key5": "3nGyLXU5eDvGSbE7RJBa8pNu3zZJShWMP4vqLXJqch83M5QJyPK57zCyW84ES9VEhjCDgzwQ2tJFQU735tNhDbxk",
  "key6": "3j4DAkJt9STKCBxyV37Ac6iGUowCjQzkQFabiPGNnhQLyizFKb5UJxktgbfj2DzjKBA3UFobbXRNdkHUgUAxYz5p",
  "key7": "67fP4Vh7rehQVinNdQQxz9y8GurfPqVV6E8W9Gc2pKXVRfpe2F5QgXYhUmFuUuW2prw1QZdw8cChPLkz6zwDH511",
  "key8": "Mf3kQEfTpLs7ThCAiwUSk3NL3tGQQZAUvnc2ehKNsuNDuNBUznZe1RH6m1Z1phWSqUp7yaWvuYoNWinwSwNj84g",
  "key9": "2aHZaUMaJaDmUfeCzWke8wbxfX1NzFCn18gKUDvp5ePxDYavmu8Y2FdbLehMTvyAZzR7H2cpedreVQhfVM7jRdsM",
  "key10": "29iPrw5hygFgK6MYPDqBnvoJRxPAvSxaHKdt6HJG3sou2NQ9YczSG4cnJe5Gqu7wkhVxcM3j2yvJ8Vtk3qp5qCJh",
  "key11": "35RzBnvcpgeHEbJEF8HRGijAe5vsd3VckA3ekUemq9Pbyh9oGw9VD9K6m8cRihQRJP12vTirsjZUktuEVHi7sVUi",
  "key12": "5C3nY5koYHvBxHViQdQdJdjFMM3dCQYE7vVxZghtQUmdsFtGoUAmSSvao1kXi51AqQhnNS1njFr1fj5sh5oUSxPY",
  "key13": "4qKnQzpL5si8ddevmZo4QgAVL19TMHSnUJ3KBxShuFxGJ4x2gUPu8igdKECogJbXXXYDbs5pisghsH8kutX3FCxb",
  "key14": "5J8WuaC6mFES9yoEbd9gXqzTskVqA7NPuaNKZDpbSVsUn7ghY3VmDd6MkrHnsjjTUPFVqJFoDVdMjkNLNKP5Vwjp",
  "key15": "46GhfRMrGzfBTVrwFAwqSZigWMy71TnNhGpwnPkcLYKFKGBT6aRkk1LgMckKMT9tSJQ2vSYs2BnVAhJMAKT6dSuo",
  "key16": "NbHSSceWTnvmEPjqm8FKcN17HM96sFCS6NUrBpDCqRBHCZ1FQ6PstJ78gF6wh1SjJc1haFXgqf5iUajPKY6KnLS",
  "key17": "3QesVJTZmKMueqvK77dC3fZoRa5p8hMQRUgpDdrtc66yvz3i8inG4hzPzMTHv1GXGbNQLbufxdueyynxFRn2Eups",
  "key18": "4t2ZMXPUhKgL1VffqqYhZbBLSkrUGUG6KspvXTGTf6qtmZvnFs1iddBF7ZYfWybbpCYhYJdYq9B3LKhvHvgZLMK5",
  "key19": "5DocULitvuFun9VwiurEFBxMZcj6BAHSGhVQ5vfEhQT3xDrRJtrCUo4F6x7ta1yReC7jUsTHtQ1J9ziYQ5spX48o",
  "key20": "XhipVEWJhkFSKPsm1fXzmTnqoSavfJBbvYDA4rL27mSy61uJDS3LsCiFepGjND9BAAvA1aCbG4JkJDyxayVwmWE",
  "key21": "s1eJ7yekznSxvoAshoBFB962bwCpjqv7gXFwjY1SCaB3Qo2WUgY2qGuwp9YC23C1PAFCeYf9tMiSEhEBfRxnYCE",
  "key22": "57xwLuH6iH1ba9tJGAvgxoAob4MnBgbFDYxsoo5ZiwiT13gtM5fowxUkHyBL8FV5c65sLhgZFFvYYx6cmgpLM6DX",
  "key23": "4LQZvT5cdbYtykzdrYBAPeCCx3r8RoTa77UdkB2z9CC4akNLGHcQfCuyojWLyQTpw1EKfKVN5qvg1s5ddANdEpq2",
  "key24": "4NBqjaekrA1yyxLfgaU8HGZ5PRzUzmeFSVoXzhwdtb8obKacT5p87T8ciapnFs34Zrymk6G2PKWAYitSB2M1oJsu",
  "key25": "381xmb1SVcDmGLo7eVJ1F2egjfpxoHfPzc4xehcBN1sW9Tvu16voz1Bc8BcufviUh4qDi5pt3F784Lt7ijAzYrBv",
  "key26": "5Ki5GgXkvnCqAk9DzC696Z4qxZ6xi8KWvcT15JVeJkGQtZW7ZoY5p3MoukFW66pXZxYLfAifa7UuRBrCBPJuSvvH"
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
