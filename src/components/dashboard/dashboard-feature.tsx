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
    "4anFkgMb4tLi5Apsq143pWVHxpDgrT345CnEcFQrJrgaQvj7c1RccGhHELikS2r18SqCu1G4nR6svmrEDZuTRxzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6MTFmU54tfiJDvpiyfRM1uUCvcDLXM1EzoUYnZqWKigUoxcyBmb24xJ5ySvt3TDjNiTScPDUmkXdfgD3wwLfiv",
  "key1": "5sF5VrpSh4DjgkXsnDXvyG5rSWyDjgNmGLRRNXkeLurDjZL3JFXjVd999e96ZhSQY4TQkPt27vQaZGYf4yMJXY7",
  "key2": "66NReMKoGFshnR7xMtHA1kcwG7vpq25AeXGg9btNzvRCLbc3W8VzYrs3qVNYmF4fy1BesFkP4NeUYnAQ6T2Zv8XG",
  "key3": "33ZDCuKvWMJW74WTeZiAeWHvg9qS9XV88hNwNKrn99aw3BMhDZ7cNwKduweQvysTRhTzdbkKSxtu3DZkEfASBp7e",
  "key4": "4AgMHEjFp1exMKAPZDsUL56QhbHfPc1izvBcLgFyADWWXDkvqyTmeMh4kHuPDTiLBuyRGzXkbmBk1UqR6yFejhnZ",
  "key5": "4FMDWLUy1ncaMn1x9b7HNC1sgZKBxZRJmVSugUxuHtz57qu4St6hQSK6fgrzGheHnGkY1tpMrucUmbcbKuTxs9Lc",
  "key6": "5F6RDuUn5v5Nxti749NhQ7sgxWxWTMduVkHqtjocGgwvaq1yVNthw8NNZQRvfwEWVtMDLZnbSHGXf1Xbkn9JKDju",
  "key7": "5x4dSikkqPtxVugDj2d6UYNGRCsLFpUVyyeW8KokbiaEYAj7XDap6Eqx8GxwcacKopNU1JwaJqwzxWy2MkvgpKU7",
  "key8": "xv2Wid8dk3KaCyhcJbSZpLhdrTjR69Tuzm5LNhtCEThSt8TaFkteeWVSVpsghXjdJfsp9a9cEHANo41zaPDVHH7",
  "key9": "4NodASPdXnUVecC1DfTVVGR2yJstHCjASik22HQMVJpiX2Z1tV1TjkQxGjGF2sUSfgoTsY1cj5gWEBQvEeuSshCF",
  "key10": "e98XyD25GZBWmcXSDadUYTdm92Jpv7kZARvYvxFsrK3Zt6sXgL47KcgWWwk4sGxBjirAd9E5LNtSdeCm3dTmktT",
  "key11": "FArvsWT3hsGzvBBbpVZiDYDq1JayVRjBBEErjCjQ1Yqid1hCRRk4QgWAGsqvV1XjysLW6GyDJGQR3z9F4wZJswH",
  "key12": "5jtZzLbkUDRM4fhbRQz6F7Rz9LZZPj8TMu9darjnVib8xGrwJ2qaF6nw4DMuRtfpzdiap21AqFZkZsPcEy1JA7y3",
  "key13": "2fbap5uAj4YxAGmdGg3iBUmwrhTr3i7MgL8nxv8WKKbH41PaqwZNF6RpMWveafwf3ijYWsr1YtByG5eieS1Rk3T2",
  "key14": "4N8VpgkqZPtFc1SvQKCTPaF2XGX37GmrK5oGcbipnHPGmfym3uFxmuKsJFC7N1z1GTRTTdCx9Cafgm4Li6jjNSBj",
  "key15": "4qyF3tcxK1xSCFY5RHZr9YQKbS3L15A1eeBQVxqaQjL1JMhFC8GVTzEc1pG4YRmo3dcp9GUmv2RsSWPdJfVQjuEf",
  "key16": "tLtG8Ho7qK7N7XQQNmHeaEzpSAWWKTHLeDu1jmpzfUR1phMbW6wLmuHuEUcLUYNffYjyMy7AivYXJreyBbnSXqM",
  "key17": "wGULuFY83chx5an2RrMAAdtWNZWxMLZbTkM2tcJVmnnzjb92LuZ2qweKG4DxjNoTG2HsMJWup3PCDDEd49FRwmQ",
  "key18": "qv7MS4bB8VqDsoNqGkwkWcFFW92xSh3sojeCUqXWXsKkyTzWHeizsF3NSikET3fXiDf9nWTKc886hjfGy3zQmG7",
  "key19": "3J1LmxUPHdC2YCYYAuRjad2Ha7ti6tuMwSpZqAD7FFYAtQPinW9rbTcG1nD65Z1u8JMPKnAbiEpJ8qSrbG1kw5V7",
  "key20": "GJgHF56QxfLyLhtkTUUL58mcTcN8WsgB93y5JuSFEUDQzu1vjVZmHzC4A8tuchsnjZCnhmmLwWsEGmnrXh22vTK",
  "key21": "nXRtF9VXBN4QJfBkbtAkyQzp5dQSZseaAr2KtXMcadc9VaQSHUC47JJYcu56tBxwDWstGkmLDs82PADAPw14HEN",
  "key22": "2jeYyqTpsgRKk9Pk2xwkgX8phJVEcstG5fjb3rp9zk3HK9CdDHhKKCuVE6SJUSHuRR9wT8hjpH93mwes5nQSjfWu",
  "key23": "4cWTCKytBDHHnNrLUcCFz84KBcoB6uhRJ9m9TsJk7qgHzcaNVQgDyitp5akHiBL6RVq1hgdC3aSeMVKgQSJAYTME",
  "key24": "45k7SAXowHcYqcT2EG3BNvwk6n7AJfsbihSyhdkYppHvJU9wwrfjjXxacQCjrEVzTSHdyUzSCzk9kKXRMwgfGtoh",
  "key25": "jGUx9RRs6GZHz67XqrR1KLjmVVwSYjAa6ngqJRQwSAVuqNkjPDHZfqAEDgXPCZVLw12TWNvWLevjPd5uLpgbCSn",
  "key26": "4qN77eRJeKiPPeag26AZGwr9gPems9w22EgGxkrCsveAJfjRYiSiinCq5Ekv6k8BsJMiZEqeUa2862gFFujaG4hH",
  "key27": "3Gi2X1rRj4rxQoRRfrFe6JoRpqnAA7X3SqtJkih8efNooyjUCf2tVc2shsH8JJ7CZpN7qjw1jAwX3BGfrbKfkBFz",
  "key28": "byHGJNzY88Gza2MWnxp8HDMxiDgjpnVxabHgf6wBfrj1z4e6qBCuaHHZNoxgYmHa2ftb6pSaMgcQhYeFUmBP8hC",
  "key29": "536LKX799NUSRTj9cT5oR9qo9gZXXDVT6hRrJUYSC5iauTar1YQ2v6mJoX89pfeQidLwN2UejDCQLDHat5FV8teh"
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
