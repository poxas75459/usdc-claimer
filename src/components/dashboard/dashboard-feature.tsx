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
    "4Th2kTbk7rBEgWwhhMETv7j9JnKqiZEbXx6aKLX1nQf65eHavvv15VCJuNNgQdb4cJvk8sBDPJ1UzSi2psRLZHAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZCuMCJvWHs9u5YDZUh3eEkeDEbULKtTthhkqEiLvsgEBcweskApT56juTpVnKhmnukr7ALdSsqmgEY7gyw2skP",
  "key1": "3S9Ascq6RQpyUbRYVRLGDxnUbZifEggo1fRhfkjRzuaEvQgnQjSQFcpiMEghfeaL2jBpyT7AqMoL4dhcnweP55ZG",
  "key2": "5fir7vWtJ77Np7Z63YQbmK6sm8Pbd6bYDrRtBGZuMbuEW7QDp5XAxJuyckqqjGhZKz4Qyn3MfQFmBKbj5dZJG8vL",
  "key3": "os73rsCMSngyefbew1STG231j5MDHhWdN3cZ287swmHEcE3bmZsfuNxxqEoBhgegLBMUnPECUfy9pbxgTvPhHcC",
  "key4": "5WEwJnVN3sRCfKayUUqCtuSNBFMfW4C3gCUgtM5bo8ze1ZcYvph1Hr3eP3DKZGueXZmS72ErFvzHgShnwCSLDxvy",
  "key5": "4oHoT4EmpvK5TM8Sid2YN3xdDsVGFBR3BGFm4tktAfdNV1YJcVbtqbaWStg3gGcxeyYdDvqZtdVgttHDA1yAEsyb",
  "key6": "3a4FGjFALvqKdPLDz2E7PGL2DZyJPCiFb3ZhbM9zGrtfDC2XmpPBdThidom5X9hFTGdpfQVevf89gnvULVkoW8jb",
  "key7": "3rXUz7f7d9oaos2WyvnYDAqE25rYEgpgK3dbVTZZiTiBNvqBZdd4mLkdbwchquNjKQ37uYfa7DkDZ77bPaBhsuoC",
  "key8": "5DqmAPfYsUmyeQ65YSyMBAdgbBhAymc29PnYaxieo7qDsw3kY2p1tuYnTiwAEM5n5i5Lfkf7zEQbs6k9EnmEKCuZ",
  "key9": "5KwAfKaYsuEx9e5vVkPEys6ARJDU688Tstpt3hwNGUFmvkH8BkPYkR5Dji3PXtiP6vbYRKRZjiH8dbNR1NGtJL37",
  "key10": "dom5645nYmH9Dfr5iUdQrqfcPVG8sr9D8DpVkA2jS8sMVJfgbdmM4rbUojftpT39oxEe31CeShrx2uJsTZZE6CN",
  "key11": "29PoRDY9fdo4XpVVeJvzRyAHtwEiRehp6oVm1kuJ85PTBJ9JaSC1vXF3gmA2QrsrBEoYa4LcLV4KVGa1CA21yRue",
  "key12": "4zQ4mVuhDdzjyZWgo2N27tvDJebxWMm6P3h5QNJ87MnqPfwataXzfpzBD4YaJ5og1Y5ud2N4cnozAMqKk8WD6Zeg",
  "key13": "5yK4UAB9XHKMrnZgXFh6czSV3mxFEbMJwzzgKByewJ5MJhKaM8Yb7bixD5BY2da4TH7PqJCUhUjjnFnyPw16fjcu",
  "key14": "4Bp67TXbxZvo8iMyCzQpPtmgy7BxypdPEHtoFqgwZDpUZR67jVZfjFmdBx9GttZGnJGENQjH6rBtZMukMLKHG9kS",
  "key15": "3TDNqfUU2UvjFUVRpD8NbiQiTTEmTvuxHsvKGuFGej1fnN4a2Ffx2AzGzz7qmutr1ckZebESfiTVyHTYMYLGKYqX",
  "key16": "4JcNA3WzmvofxjpXk896Nth6fXfMK6wAxoDUKUcaKbPTup6KNJZch2yjSwz5cZdX212FkUCsrbd1oAaHuLEmYPuP",
  "key17": "5UnjUiPt2weqVjNYVZzwkdC8dv5P8idwVUJ6FRTZbnjmJzRTdYGByx1eGNgbeHMvAfEJCfARk7iJ76MJmD4mLSW4",
  "key18": "i9DyXVKXneihXEBayAdd31K4scPScp6LFywqSHDRAy8RShLco413gEip4sj7yEjvz7FMJHxhrXuNDNJvdjgg1k7",
  "key19": "4VXJCvoeqRaiZUn3NkWUgCRH9zhjAYWpQffiiNQxYKQywQBY7Z6hF1Y5VM5mBwVkqnv2EoY1oc32cggr3YkYX3ZP",
  "key20": "qAuz7hzaeZPN9uAywAx66fDCgZZewmHM8G9wTmxmd6cPzvb8fTbBWVZQHdX9AWwjumqRGt8Nv7qaNBZsNxvNKFW",
  "key21": "E7zwFCxMCUFJPmnskD3EEiPEJRKcHYdcDK625WckEjPg5ZLmQVMNoAeQoGzXDqb6QL6rNiABcBUBbfMcKCfYET6",
  "key22": "3TMRSZLdipcgjXTqfqYkMfq94iBXEAkjCNP6vgCmNoEXAcTJT5jEuYymNsEkazZKDdjoo1eWJws8DQ3jEKssBsUJ",
  "key23": "5vaM5mxigk1no38WKucXEKyfZfXG34dTqn48G3eWrwbPhAbuqrvLsyavHmMGrGMcDvXcauxQv2Vp5YQqXhchuCLc",
  "key24": "3HXxa5kX59BFHA14hnZEYGGHebDKh3aFxu8ByFV8pQYjCinwXADR7d4brzwXypFjA5XNYMJwcSs7oTyyiZeenK3P",
  "key25": "27WPTrjRfV25kGaxMuJF826MEZsBR84K1sCPTUsaBHnb77fRTLMxUmmKNXi78o3fTrwvhuXMydUnS2s2PVpkzVJV",
  "key26": "5g8osgPkK8rruXSwB7kJdkMREQcR9i7tcoM6FsUGY7mVPbiyhtcJtUkCy91qTNzN6qeNx61MXQpbvfLQYfmQF9pZ",
  "key27": "2UEHmdmgfyUrpKJ46Dvw1unuv9ECiGC2bBKrevKZa79DHRQJzc8xWYzVv2e4AqgKjmRAhFLhdPhdap5RYpupT8cg",
  "key28": "4H5foDsXGHsmqXQ5Ch1xgatS5Csa6Re6BqmoynZmwEPZCjCXmCJjoY3iW1dfDtE4sdYmnjyMd8obUvMWYsvGEXW5",
  "key29": "54r1sqzsGfhetPJ4KZewzzkHMPBu271NqgaMEcEABPAAKp6SKUkSAsR4EDE5xTrPwYhgwkMwhYWfDCFVq2vwDBFz",
  "key30": "2cvo8EiCUHdf7cjbc8ngZAvmaV43E5kKoMVBL473XnKjp44J2kgQapcwaR9n8TuAvzRcySn5MKPmtH4kBqfH527P"
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
