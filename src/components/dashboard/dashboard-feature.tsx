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
    "2oW3Eq4VxngYadVmU7sr4CqPhNWeHcaLc76eTbkC6CWGfVf1e5p7Hmsf36kBBEcLQnXbw11FBLKFHucn4KDxMjyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ANxFTB8D8VUcqy7rY1dtwDxExk45ib39AwKmuBquVxFCon5jtd51C8ixyYCkN4Mx1PLB7LtMG172nSo52Mn3xFf",
  "key1": "2977q3B3LD6BmkCCQBBYwq4hk4i4iEAM5QCrsoKAkdeZMeZPxzvvUcGWqVboHL7siNmp4uPEGDAzD18zTYryW5Ek",
  "key2": "UoxkKVyx4ZStVgXCUr6vS6ScnooUq996eotteDY4wCEGm2ehQUYXmxRoTd93TTGm9dg6qKBx1WmY9vwXNC1xtiA",
  "key3": "EpthFU2wBFu5fuwYNiWEK9M3U4572bEJXYYJvRzRtqeVXrAB1dBMce8kq1oBHvx61BrKYjAXVC2xH2NAuu3gEbe",
  "key4": "qdZbA6ZphWcRXmoKD1vCsn2AUPkU866i4t5PCghU9HRibfY4afrBRBFYni8VHyumrLSZS75gn5rCfsCAtBir1qF",
  "key5": "3HvrdnGNMKcQ8U8HX1UmeCxDw1mA5Fpnwtq7YD34JHaSrpjhX118HHv5vpaNZmtBh3Sxkoz6kpRrtraukygFhFR1",
  "key6": "2UdhzX1cKVLH8MAGP5yB8H2sj76bH2c1BJKANqdvgwFm3bv5npvMpy1yMLz6mNWHMxaKWYY79mEQMDpMyoZoy2K3",
  "key7": "eMw9mTGpncY34r9Czp5K1hBWaxBU5oiZq1gMWTcyZq8CKSH3uRscdxMafrPkTsiUUKQ5qhz7wNHDvaf2CeCsR4L",
  "key8": "3uRmJQKodTLVX8TiPhv4GTkNm5Yp4h5AUDLT1XToGWigicBvHaDDsYMdrRMwBbZLRhtPTetyfyQtVjJTe9Peb4wG",
  "key9": "5sW6Hn6K1oyZGBUm5HF7cg3NnCi2L7wJYpgFk4ZqbYwGMYM6FMhP3nbcWfwMgcEtN5YjUWMsXuCeyndki5T1qUgB",
  "key10": "2qTJSvMfTwzoQhtkUoXMaZooFh6BdQ1JKqqYKYT33YgBm4vurGocJjn3gHKoLT7ryj9a1iKkjXDsYXs7bbqJSYqx",
  "key11": "Sbqmf4K9thT1qXqwrqriyAsFXVbXteZ5kefhuFnVJHLuidrRMQ5YyTcFKhey5xEsr8JmhPSD4jEXJbEUhkJtbdu",
  "key12": "4QBCLE9k54jtSyG981kbZdRe1a4sT6nWUxxZvXETGt6BaWsp9iotPEWCnG4yzhad4fnwTmFwupNTPG2MsiL9stbM",
  "key13": "4ZhDJqbkW2oQgY8aoGif7MKhyJ9QgR5Y6G1kpo4H1K9YDSXNdYFwgiiXjXuZtpSwEfS5DD1eyMCea9UR425pjAVW",
  "key14": "31JXR4SzkD2hzrAkGYesHTeYaP8RvWXyxiv3sRnmGWED7LTv1MkFisnv7mjdSgBNWUkpYEe92KKGUE47aUJyocng",
  "key15": "27QiTsdt43MDrJYjBVsNkWTEuLVH6KkyJVXk12MS82ZscK5p3yxiivkzqXjVDcFWm75Hz2cpjuNLEd54KXD9rcHu",
  "key16": "596jeYjZedGEnBjQVy7prhgMyBhcTEdnv9zAoFvq4ZAgaAWwbrhxdBo6h3KDCVXTVuKxiMfpao6SRxEan2f4NTyV",
  "key17": "3CVH2nh6VstNCm33nzLi6ZMWJXpTjkjL5hGwsjoAYt3UMYaURexKoyskfbULyNKQic43Q7VUuesygHtCDs4KfR7V",
  "key18": "5zSBPGtj4TLRUY5hAbZym1h9r1CbUPJNF7t54mxsNrSfiV2fqnvYBtBBkTniRFFXh9TCSp9JMfcikGMRagnhETA",
  "key19": "3dEFRqmw5HTh3qNgJbYcvskckv85YcmQENrDbKrY8Dcvq8LW3zsoMg7p8GQDvLR37ajXq4zs7Z3PLKxnz35da8EU",
  "key20": "iGptNchC8kem1G9ycn8byYeDundzyAH5c6oVgLRzkZpnzBCGmKfvQ4CfTUofmS4Tfgg6ZHwAvyMEgghPjanXwKV",
  "key21": "4CJv2f6YuDVYzQ5FZjbTX1huj9r3Ah5xJeQPR6omdy7YGMXa4HNifU3FfG5Ak2ork2hadpXUWHCGX7f79bV8WiQk",
  "key22": "3a8mff67z9yc9FDuez8w54q7iEVFYRwHUHmsfSPddGijsAc8y6dKKnHghS4QgoEuxV1GWLywUhmpUGj61rfQyack",
  "key23": "JsyrD3Ge7zkvXDUb21MG5HFJaEsbDTQEByeNZ7XwVh7n9WULKAoX59nyvrgDYFuq9P2eGfvq8KXKqVrdKVHpdxj",
  "key24": "2ye7rUrKySriZwuMUUHMAMQybHiXqvwsTnNTca1NiTDt1L5HpUo1dASewzW65suMj3Qif7WRxX8GnsqNFi2sa7jA",
  "key25": "2XkzUvyqMFkkT6boN6Dj5i1Y2Wp4uwhovWvu3RdznRkwcFqm6aodyuH6JArq22A1bGTbmyfr6WSTtq65s2r5i3RU",
  "key26": "3cGm9DhxWemr3zrhtC7awbj7TmDGZNz2WfXZWDv8YrTDXv1fRTZLxL2GZxGV3ZYf2GPFJGNvW2mUUkn1FHaDqqAd",
  "key27": "4cmj7bUo11Dt16XEEK9HUEUaRT7FymCUK1yhRbCkY9Kmz2cxijYVA4FRXN6iqPSpYuQwuU2iJdhxqqT8SwMGqS51",
  "key28": "35cL7gjv7Q6FMEPpF699QG5BgrqyJ6LStLPcsXdvarrwAhwi5RFdHzwESBMLsyM5S1QsheZZfrA73YaZqsm9Ybak",
  "key29": "5aQTw3ALmTot1owbibDohzuDpFHt5SCe2PqiNLnPSGx6QoM7b9exKU1aFeQ1hPU2RYAUioFou9RtggvkdxHkovEz",
  "key30": "4e4G7TLJuq52jbbgyHxpzbGEJwNYbMjsSzRxjf6d2DpkzZFjuyHbQcB7npkhf2eGXBKXyT9eXoQ8yx16YJx4hzfC"
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
