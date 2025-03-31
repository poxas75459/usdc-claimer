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
    "66xbgAAerbPhqXTfW9dVNPKSHsrrPdZ3CbPX1HYLcUjC1gFGMKPucCgG9rD4TPaCZG3Ehiy8RH3GAXiZkoWv8yAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFKUr5GsuKDsQTpcHAwCfLyF55YzRAGwwQJXnkJHzVXTiigBBBN4P77z9NTecCe63JAL6HKpXj3CXKR5W818anh",
  "key1": "NbScPU8j2xaquHfNeTACgno4Wmjy9CupMSNjun9dZ33YAZ3er3HyPfivUo4f22o6MBdNi4JZZf1oGWpFWShea54",
  "key2": "2LEupqZD5vh13rx3teHLsBJcBzWU4BsFivpftDK5cC3MvtSTMCPTQZfMfvWFmUqTPpycf5eVW94A7w914s6bsEn5",
  "key3": "RA5S2yvfUgsDbJKN1215wxrMYSRricn8ZZ69XcuaDvMUHigdGmZgimPbaw8JWv9g1CXwikKLEtAtcgxArvBZREP",
  "key4": "TcA2sX9YkikSB1GY6JezqHfpMt1r3AgRebXWfJpvuCSPeZUk5J36v3SGSwWNegPAxSCBkYmxBBBHRqE7C1GxGm6",
  "key5": "45HoGq3j7CMKBX38b9cUdg6pkrwXxgmXN3tCa9ntVaUB1wrW2tsBK2Ka1Zn67sHJdA4Da3kRhRDcbPkGv5DRqets",
  "key6": "4mKriSP2xfLKiz6aw5aSX8dEXxj7GSSSRVzu1SVvQc3Bc8SxCaUsMAudxfAsoY2BqwAiynmT77qTbkNS5Xo2gJGw",
  "key7": "2TgdunF2tQf8qPYvY3okgAipX8snKDDk9QNTd8Nhhty5ibtTGmTVK12bdH2zk5eiQxGKzpESkTfB2mPTq4KcqMf6",
  "key8": "5sdNjGUMp9Ra2fUEM6KEKdbURHhNHZnUPNFdCKvVAj21XmdgRAjeqDNZK4i6SQhwSHfLLvMeNvWy7ywJ1FsXxNjQ",
  "key9": "4963nRanHU3C4Kz7usSGp6tURq8HyV4NWN7n8UZ435SmdzYaGYZQnCGoTU9AHGBtwYYZS2PsxXPkmu3hpoUsbQva",
  "key10": "F3oDrMeZSZyWxk1ynz7gsz3tnwuWrijevjLeVAgRhAGPBeaKkRjGSD2JLKDYthkjtY4NdKFhzbvgo5xs1Xu881W",
  "key11": "2q9x4qUnBEvmf4n2wXPcksv5VJeetQEK3r1H4fcFeV7jdMKQdKMwpB6buVEqVSt1XJj5CWi7nAKM436JSDvcozQK",
  "key12": "5AHcFFgc5CnCYFm9WKo6QRXhrh5QgogvAZ2Un6LmNp6eskk2rptfuvgULJ8YVGNvCFpEaWiEGDKYDjsWK4cQHGQL",
  "key13": "36DGftak3CcmXdvUPAEV6gf75NXEq4vN7AUMcprgKkPHAprVEZsCrjkohXpPhBJzGpFmDb4uWso1SpQ6sy5PvCRU",
  "key14": "3EMoZvhbqsu9zeNH2b6wembVZdAEryLizx6NasDjWvRUp8VDMJ9fQiEWsyZ3g1V1qjnJuLmdDbJvJZdiXy9N8AEY",
  "key15": "RSxerLFD48nCqKTrpxCfiKHaTjaJ7G6MrwNTiHT4QgcniVW3rkpE6MmCBBHhcfdfcKuGizCxFvR2LwsjqyF5HF7",
  "key16": "4FXKSsXkw2kEuBi6uaVcprceKfVZ5mxE8vRHjNmSKNJ6wCiBVKT9KCYxFRFXrQgeUHAeHcSq3UznB98AEJBn6KgL",
  "key17": "3ZUSiySeaDK2q7k5tTKCDsAVeDKhaohoqmkREsv5anqQQkMtfocHnVa5DfgDMkVgJ2YgJyXVM4dc5wizjCUytnqZ",
  "key18": "UWQNyYFFwCGBZ6YVynK2eDFpSvQ25ASNmwJtn7SKm1pLnbVAsQcAL1hRsbtnBJz3MPyXaoG7VbHFFeAVebsCrro",
  "key19": "2amwfyqih176EJfuSZG8vwbzQakAH9CCvohvNQwDgaipzcMtwBB2U2Ax2fdS3yqftxzESfQjKmcyjpAJw1Rd1T4c",
  "key20": "3PdtjwZ4Ee3hMSFGczgRfvyukYGJwjbGHGqTHjU69qgEMhzvPoSqcG72xC6UZB3gm4EC8uafbK5vTB6eBApNkCB9",
  "key21": "5GQigeyRtRkTqW8WmPTgMJgzuREjH3vk7cbhsri8x2tUQ4jcdNP6UmS5bHFD3mHwDuECjr77y8TixD7iR6qre47f",
  "key22": "3RmXxy8EDAWRED6QBgBuLE7zgCVquLV46TP9bvu12EZNV6xDR4f2T3pcDoMBCNuyMqBKTwBhiCgkwqnyE7g539sP",
  "key23": "4Eb7yYh1V3ZRDshenoohctLrQMBecCmt6LAcmMUNSUX2oLab1D1qCGdmcHH2tPHF8tQfubZRvRUdgGT1afuYVF19",
  "key24": "3SUXXoUW2cbGZstHgTqticH9w1vJhA85nGfuc97W2ANyB46rwXJwSETUeUqt7xwvRoiAjETzcWXAgw9JbU8n5HBU",
  "key25": "2sb8Uv65VaQis61WdjmLoB99gb5WR7iiFBCGqX29BZdvZjfYAvm3vb4rkYL9Kd9efWiWBmp5fB7CzudjWLTbGCC5",
  "key26": "4TxoRaD5WfycGYXjPs6EvoKPBWfBZ1CJi3fQ3tKGxPvRuK5P41yV7bW15WCyyZQBQTGSuKzLhGekgQ9HKadQp2oR",
  "key27": "4GgsTEZxxfVHmYeCSgJdbB4ZsVmhvKB8zrekDG2QyhqAvnG4M2X4hGmhxzdKbLorE8z7hYhE6gM4iWoEgud2h7bK",
  "key28": "32S96efQsPD6s2F8VknzCuvyxpew8qeMVW3T2KkP4gNSS7t6VshrvGan92q78LVK6f95MbmRmrVyt2JAw4j73xqr"
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
