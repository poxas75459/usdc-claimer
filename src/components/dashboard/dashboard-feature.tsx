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
    "3AjiigfQpnpAPa7vFXRJ2VqzR4MsUDQAKRREeCCLfDF5Lam4Jq34LGHaii7VLiMtFqxMxALJnyHHWe2ZEjt6ZSeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oaXaapF3S1UqrLSNCzKEXXkH7pfV7qfNozhPwdfQMC4wn7bqFHoy4E1Nrqf4GvFVbn2ExuB2DgzmiWXnCdbn1wk",
  "key1": "33NcupwFn8AaBzduekxEy4QKUpPvWiPa5LTqEfZbUqXyPfchRZ7z5LfqJSBVTuWwSRY1Jx3MkTutHLiBT5wmrDzA",
  "key2": "3ePm4ovx4UFAyayzrPtH6gNgk8p2f1Xb1SxrEuYZq2jtqMYGgLuJnfQ14CLWEXQYhtvXiTmA9jqJhwYsiYggXaGs",
  "key3": "67ofEuj4Rma9oatHBkLTEKq96AY5ZsMmEDiKFrjYuPi6moLZfEFfEC2QmS3W1QMASAYJgBTy688d3JxfRVrRiqWh",
  "key4": "4Wh5evrgXh6UrTX5Ko9ueYNRUXUPLzY9jNufrn87TGC1AavKMZ8M4EMUBVteLK7vxrNxEhYLTFAibRv7gzfEd89v",
  "key5": "3YBRJB6gLB17bYNQyPPLr24jJvvhQyDhMg1ju64FBvDXZzrAprukcxBioA1KLmqULxxvzUsXe7EtzMTPjYGcjfD4",
  "key6": "3kBnw6nLMzbbbNy1RXY74iVAL5KzZoXqfYLP9s6xGDbpJaziDJFUGYYqt7me53S7PmERQZY8YThjQUxFQMFCstdv",
  "key7": "3jkynTce9fWEsqQZGca5jAaGAmiZjyUUPcdEJhm8RGWfadDSikXcmrYXDsSgDAEQvZ4nYiBouEbBaNdEoYB8K8U5",
  "key8": "4Q4NbyZxw4am396YcwmCgLNHsriezen2s6UC9F9n18Pb5tifQyWCskP7H8YiALhHUKBGw4X8u3iAVitGAzHAfSAT",
  "key9": "5QyPbJr1sdW9A625vFtqaD714TVMR1DjfuaBEuvNXYKTv6yCX3x648mpZoaNmkHTeJtPDixvAnSVU8iSMkhMV34q",
  "key10": "5GZH9PVmBW3R8Gx21s3vGMmSahpGBPN7G7VWhikmNkbDhnayNRjGik4HQCdd4ojEvMzGt3DBhUAXhBDcUYwQFRiJ",
  "key11": "57Nyd1ZVBpVyFSxpjR7LPDEQPsg99KM9dqyS551gVk8eeNB6qx1dMt5t3C5K3QZNZXoJDPwCmK9TVkP9292ef2zp",
  "key12": "2q1cDcwB61CM5wKtaGcx5cCNsvNs8sxbLcEyffahmGgqbRd1PBt4mQNsYZ2GS6XHmaHC1N5KVsPVrqnkvKDXbnKp",
  "key13": "5SjjptK1xkuRasBZLQburG2z3nz4yn2fRyuEdENwLBF7CmczUbKdb6FsKCvMWwF7moswRcpZpt4VypWb8wBJSYwU",
  "key14": "5Vf637HxXX9sV23hVGSsisfECygquzwFaLmcgkWnT5AKYkg7kiE5aBjW2PGn7yqKSvSJT4m7WUjRZp1nqMDDdaiy",
  "key15": "27993r6L2X1z1JtHm8Q1VdasGNT6cMtQYj2kyyni8tXGWEBe9xz8hLwC2q6UdyW1vxCbC9r3cdTeTAXt8CVZuCb6",
  "key16": "4CqHs1SkbcmBhhyujNpZcrzR7Gxzf7763ukdDVEMXxdV244Wb9to3Sh39H4JtU9r2uuHuZWkGxX9JdeBE3iPqkaj",
  "key17": "5RXj96dbWZwJgsXBfnHakSRbn3xsCqTEcb7NtxmZTCKfLe31HmohMP7zqYQCqN2gDJuHAm7VUrfodG24yTLrWWj3",
  "key18": "2EUNHAKz5TkfUXJU926vAayZX761C1HipQrRHN8jaJY56rkkForPQLVmDE2xRe8rQDh9m3eKEjgJDkji29rCthvJ",
  "key19": "51QjXRbMNxHgZafVTbeandLga8BQUWQVtbs7djMsYb4csbRi2B4Uh3pAQ9mJkqviMA2t9QrhEkwwMz2N167yhFkB",
  "key20": "2nr27Gvbc85MdV4qbFD7waifCffDYjefonZthBmZf71dXSq8sBBXY7jUJmTZrr1DZa55LQXfaVfFhVUGducfr5St",
  "key21": "4Zx3N65ALfUw4sY11JHXWgnEryvHPDF88vhLY7SAqS7aGLkS4jUUE9wDuYVRg42BiRKbJYyaRAEefjQNgHoBswuv",
  "key22": "3R8bnMta5HJXD9p8vnavbK5UrakA7t7wcqdXM4XmbCuR92hgqnQ8dmtxYLXVs5qhVWSugy1H8JCJiwexctBXX325",
  "key23": "4K8JPuxBDAAiBCUNC2Dv6Tue5Ew9N6mDKBYgrhBwPZC3NBRBohjCymRjSkFBxHyfanPD5GN6KLYnJuoJzNik4FLi",
  "key24": "2KshDTVZUye2hNjWsJC8TomTBHgALyyd8vjjTKvuCa85KBqaN2Ktbpzsf8eV59iwtDL9QGRSxWG4EdCUJjwRYp9N"
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
