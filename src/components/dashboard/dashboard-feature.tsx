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
    "3TzHvbFoU3KRW2aC2k2CsuJXk5bRR7vh8SoW7WCgdWuxSBtgHhCCP7mQCxY1PG2KCpdMm1RFhRjQ3jb24SttfGAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJnrFDgog13mAuN8ouB7RxTghUcJdKpPU5rYKDrStPR6tXzFkqiTU9AWphK99Zrj74FytxdpbHPrBf62h6kp8ur",
  "key1": "2WZhZGBn13h1SCnZmQn6oWNq6UyiKQW7iWVzeJgpaSRq157pZuM1Ga2MNqAPcM7vvacWGJK8p8VxYjDGqySLWroa",
  "key2": "2bLfXVmWEBLkNSWZPRG8NbBx5aAorScT2UV6mqn1CoThMKMKyabz85Twx9PbntCLgnnpoKMiF9R3G6hafT3MSMor",
  "key3": "3RUPxDWVdBJvMckv3M2hPtpug5tiawDyKJfGMYgAXZmJZevXabRMXhCYsMFkgLcVupa8XqafPGJFtBTsRHXagCWz",
  "key4": "5QL9AGF5qvKJSzZLkKBBjuJNgKTbXPrCw1Pq11v4rNTyrmq5BUKcVmCBpZDSoDevChHdY95yDrAqXMs3Y1VBhfdj",
  "key5": "2n26h6xYe9J8QLN5fSznSX3X25SLAPgwdqTLRUEouTGeoqKEBED1u1HRYb75UMvwRpHp6aJ3FL1E92Vh2GbU22yY",
  "key6": "3acjzebU8gJLT1FxHS7WcSgZnTTyxnoGciJUtP7xiT1Mi3SzrYKmJK1yMwmNnGUdXzSxYZUVk2JvZadniRF9fPD5",
  "key7": "4hb6CZtT8mXuQPktC3grPRkWiGyU8MMyEUdSCxaxq2o67dMmXHGu2qhBFx6yQjGtmxqaCzAaWZWTmECaHAe7NuL7",
  "key8": "y9YexD1Mj4jf66G3yez7akM7RXWeFBZ7PuzULMxkDQjM4bBTH7ZxcLWCsgXETJkNDsLpocJXhWpctgRHjq2fvyN",
  "key9": "3dZQZoWNiXBLDBofap4UqxPPNb3TX3ui7vWobzuJfhffH9afW21HjwQAgy8ch5x17LgPAmiYgub3ZApKWAfryYei",
  "key10": "5rdoXVGswcWqvnh7rRS1rs3C92V3w3c7bnvCD2LDazY1LWkPHtph5iBe2ntv7TWQAWQrUs9TCqdWatBt38kPXTB6",
  "key11": "32e9ky7MAo7zdczX4upSyCAKNHSEa2utNXeACiw1T3RoahHEZYb5dxRnaUbACVNM2Jdi3CFwM7iids1po1NQUqYm",
  "key12": "3jaeXq1mVWxLg9W9GSPeJVKFCBk1NkaEjB4uGrUjxFjg91zinvDtKhz5bQtyBZ4xRGGSdeCwKY3ZiVSmrjn68hTY",
  "key13": "3SVgvsafTaodZ9Z67pxuYCo7faAN8cLBHig33UiPpyk48N1RHezpsJmt2otEuic7FqLbjgz1t4aLcTEAgv46UbER",
  "key14": "5N5XGE6vuRFgpixUUSgEQ4cK9h9gsLDcbqWiDVmEsM2VKZ9AxRipAboN3YR4JPuQWEhhyNQ7uYX3sz95WKUFLjgj",
  "key15": "4kdab8JoCfnEnwVY6iaUiF1CoxP1hnDrwNM3rssxQ3nji7MksATZ6w56TYWCtqwdSfcg7yL3pjW5sW3txWXd97Mi",
  "key16": "L9Swz6gjzWqkcjBmtQBd5qjfc2nDh3NeERenEtBBEoz9aFd5w8Q3Fu26SstfdJvea1pDaswMWYRDWk79PWERHCB",
  "key17": "3SRMXzCnZBDhWcAtug4aqZ6equjvM62a1ssdE7RYnko8Z2DSQ49qJJcqmWXPzU2mruiiQDEHdjHvkbCUmRUjQmoD",
  "key18": "3sEcbFRBgGnSe7e5mFauGqcB8Bd7MwNxqHpNbwyTG2mfPrWgU4hGLkA8uyr7bHfHfziVTerLMyQ88tsBnAYKgowr",
  "key19": "GfTospqAScXERwFGLcUAdJbXg7MfrgVJvTJCYgD1q5ATq8xhwQm9et9wbz9cUH2Db8FwMoE38ucWB1kpdEGdNx2",
  "key20": "21zdzWZFKLPKF88rGBPThxsikt761rV7HkyNJFyHyFNGeyrBX9DYdsqrB9KDCwWmf5wDxvUdrskipYWASMs1hqaz",
  "key21": "4aQMBng1WVaczEmqwZrcaXgp1xa7b8Zpf568nhT2QrjznqT5LecmZ4oQVB6X5wknygHmL7UffH93XgF1EHTFLrLV",
  "key22": "455N7scE1eaUT4ALTa4XGWRMy2cQMvAwqZCkz9bFsMETfLzGH1ZhGGqsiFRV61zwPLpPYZhpTAkRfMLdjXTJZucu",
  "key23": "ks6LLSnHeHtvL1ACPQXF6skE5jtdVWVUK5qWfsYF9wqvZj8P1VygPt2SncTGzct3vFjzuPpPegXbQXvFWZ4NChb",
  "key24": "2ncsFPBiSx1S62CUY9ALbyiVmP87YXSCaryQGUoHRtcpiMvbJmn7m5bdtiTgSAQVqUwDXyKbRD6wVqdhaX9XJfQP",
  "key25": "4agMtC9ABJnLnqzDYQMhZ6LQbggm7EMsQqkA1WonvwdRqit8LvbVpLs5hoCe3bp4zFUkaCLL148Eiu4ZefhDkgxp",
  "key26": "WocEoSwNS4YpoVorxJbwwD3pETgmuALfvSPTuduYQM1ffdvb4pTMEzkQLSuJbeTcCgfK6tRCKPBPin3fhwNF4yP",
  "key27": "3p9a954NL54tP3ei2ZnjrSM7j21vq2cdv9r9qWUurUBhZzGvyB1kTDyDKhRVuWQFQhCHCGmX9NetTdM3w53wGhXW",
  "key28": "63Jc5zCxyuKYS15oWVsk62q3tMvBWd4cstLxndZjYdUhWK2149vkWQUMy9PnLbgZMZkUxtU6pCcAeVDvGg2gjWBB",
  "key29": "eNMfNL3Hsvs5SpVmYqTxt5yMqcyqGbc5m5n3r52xGx2pRR8AkcQLdQxNh8CtDWkX3yBHxwqUEqrrbcjANvdcgAe",
  "key30": "43UZbWeEov1Jg8iSwVnZGDM2oU8isHhZYC3GFJGoYNs36jQMWG6qbm21Wh7S1PWjrCcTfyPTGqtbRvHm1e6184tp",
  "key31": "4CrNNqAXfNdRAK46icvjs4bpNCQcHFs3X99pqDFTA9fQ6RN4xqVmXFm4qQQynMKpMzUuzLTc8FTV1R83KCj83LQo",
  "key32": "2M1hDNgrGEZKAx4cHcbHhjRURs4tmiyqgDaufk2rDg1D4NJ6ibE2rdVjgbmwowqK71tDuSsVaMUnrjFaL1pUYa8Q",
  "key33": "5HLx76qgjj5VbJJd9GkdQs1y5pPF4KvLy1vZ3JVM1XXr49mDrCFYFetg2MLsqomw9DTMicU1sxfC9sYgyfGe7hMW",
  "key34": "4ZFtcE9Fq5kUKDHgKjtPkukSYVa1gy5XLg2PyUQdahwZd2FHwFBpD76mYecszappZ7B2wSC13KzmYpk1qMXtuCQV",
  "key35": "62myeFSBg37q9NFWZKtpkLTmfC88mP3TkhTUm3EhBFydZXKAf1XvuoGzSTKq7kMtt2ujajCakVdpQi2Fofj3XFiE",
  "key36": "2o5DuDwpAVUS6fKt7Up7s5e19r5JxDqJ2BMeXHDyYPFU7FuS7LGF6RYe8WR85aeMbRmjFG5dsfseER6wWt5JoFFq",
  "key37": "2NoLmqSBxW3AC3t4M6FNgshoJKzbg6yY5Fr7UmEg8V9REaHug5ZfYhZLS6eNorRyqFq9U76QkT3izo6wtQtxMdwG",
  "key38": "3Mbn6zV7azG5Fpr62bRvg2pkEncfFfEDdFcr5rk2vNHR4PdpptDqY67ak4dhMXPQa62X9hNUdGoXnTmFcXfHYxnf",
  "key39": "3LQQaEKF4yCjig4MiwCnAmR656nBhdbbK2gu8nZS9kNwXvjT98AqiGqbdnnnGW11AHzDWPJZZJ9KnC7zXG2MRY7s",
  "key40": "4jeetJaecEmZF8Co8RpSfmMnW6tsARXMKodknfUgXpe8pUgJgoqXBXuyGe7szVXxzRtyzXoLVPJ71g1syve8uRia",
  "key41": "3xDfSHikw3HY8uodtEdMuL6BCpAjEaqbuvJwfRDW7KvcxBZWwyPcJtE9L6AX1sWrhwFXGxyxcMQu89pa7MCyWAwU",
  "key42": "4vRKqixmEuebwDcDxvYDH2wrYCK3FHKts7SUnbQTM4eFM6ar81MDQdwmn5VRXPeBDUnKYpAnGiJyDpr1yVHGvDyZ"
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
