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
    "5DAJcrfH7sDzA22YGiFcsGwAh3bbrm6RfQQFM7qmRVJ3eYHN6jP2tHqbcHQ5REQHvQv2tFXCWhnezBxF65o6yKYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCHU1T34jargrkUFvSSTV7yFguB3tUw3zNW1nXADH6cLgqFJEBzipvANmMmXMaLm697RWu4Ztxm4WzeF3XznkpL",
  "key1": "4Rfos4Ay5DzME3JchxiTbdDepRkPmQFquFbysz3CjLW5CTRm3PTN7AtXBkFgAYewFXBE4o271w7NCXpF1ZGQAncG",
  "key2": "2WDahZcDUf6AHRgtU5dz9rFTUZg41A1vEM9xX4RB7cYUDonVZat1UkxmdD5Pu9kuMG4i5bvJyctbCTPGGzbxCWwF",
  "key3": "2qs5jz8eSYW3VWpY34gnRtxKktqQPd44D1qBRowTARMgQ4PtYkfoMo46ndreX8bv3H24VRqsDxoRddoZ7hzLgSoR",
  "key4": "zyetKn5q4hzdz5GAWMcMwsxUqQDQMgS31KVqzj8jnNr4FHxo1ak3ACz5LmMSF4eeCNbWV5dGK947Soeo5h3vqhy",
  "key5": "o5JLwomZKTxd6R1mjXmrHMszdxydS5uQZm6T5erKNRjo6HsLqMDeAk5j3uJGXiGiJnsHY4u9LyFbujy9Z13DEoH",
  "key6": "121zC2daFo1ALdiyVbkHD8oKmareRCv9Cnf4dbZSLBdNzDcpQk4B132To99gVcokxBuUbxLeUiH2uJMYpM9Zjw1W",
  "key7": "5zKSqEpL9f9sw4vpd3bXkapTE9PUqev4f3YhqmFN2nLAAdts11mDNjLkaj7p947gn4V3ppapcQi2GWC5cAGho15t",
  "key8": "4qjSmCwVzamfpidv8r5VrPR2TfVL8HE9u13WgNNz2cfVw7DUyXdu9pjyRFTXB2uNATm5ksbM9jEkH7BjVgY4SaZ4",
  "key9": "4jRq1Vk73DyZxVSLNNUHTaB3dsc4DhDKtcDHVH5eJ3eKVbjCr1WSaPH6bYxMpLs2hh6249PgXXbAC92C2gmhnAM8",
  "key10": "fqa9i85uQhCcJZFAiXRb7vkRutBr2EG8aLheZKrGJSLHrRPkgKaSNDBXvVDoVAuShtG3DJJDsnenEJUEtkapYcd",
  "key11": "2vVJwPbRUerBshMLm4JNyERQ23qGU7nsbubHTiARA2FbN4bsMsQkci9CZMsRNmey7WqSoBxYFCZcSekdzVv6Tj2b",
  "key12": "xArweEcEXr2q8uC2e1WF2wpXJLb4zmr4rpPY6jugL457ZjZsuyXUbGMUB74vCkD4PmFkzjMBEBQhavtDzs8haWZ",
  "key13": "2mX4tUitSR4Dwsa5qLiD2tRGWwQLmJDSkD4vvsVQqhz35v7nWCKjQNhBr1fXd1hXZBRs7NGZnFivPbQU86NnB7Wm",
  "key14": "2rwkcwAUByMRbV9dKotxvkV7uwAUXRWZ2q54dZ4brZ7umD3XWtu4whw6jLMYRs3SDnP2qyAxDB4qboUCkdfT5qp5",
  "key15": "2Ys3cPrBbX1T9nJGKiSEP5EQvG2xiZrAMJ8154q3LVDxLFaMWaG6dQ3kTme1YfYZwLagv5Yak4gGJqjnyZ7jm27H",
  "key16": "2H6HKJzD5EYcCX3siigFApUc2oeJGMGPdv98YYArvcMaT11oTyVVCb6UBZVwvMXGUCbiwSUsCXsRvHZhQqeQoFdk",
  "key17": "5JCUeE1nYuxpRkkBbkb5cxwTJNHmAuzP9VsNrLFc1zJi95ekqc17TpssLPsBMH8rfLpCYsupm2L5kBLaiPaT9Jbe",
  "key18": "2RHr23nq61peTY3LDViHPwskdf2VBakzpbqQBkfJx2bkzxrkSAFSAViv8yZYii3n1FCJYfv3AXWAEtmQTsiqjQGp",
  "key19": "4Kojkb6iJKD6cJ55FeyphUMgQQQ4rnkXpuJ3oJHhFUcMxDDpoSFyyAHK3FviHJJogJyf6Agn8Bd85VnTE6aMbj7D",
  "key20": "QFnuoS2jj3xpUXHsWS6MonjEdddcChz6XFHY4wigX7sS6JRwdkJDo9XZhjMnJP6jmbLomXVBzdC6d24qY7tg5d2",
  "key21": "4KXSW3zj1nVzXTYvN2aJKvr5XzbsZkjTLBrXfj7DzHaZM8bs7Le3YNL1775cRCg3KNwR3TS3XmzdRdEiJLghLuMg",
  "key22": "3iuwMLh24HbfFaTKvs1Cyo6Kj7QQDq6Kq1WNtpQEiWDxh2xnZSnRSFqUdQ1szX8CkG28x7BFHoeuZ7GfqRCRwpZ3",
  "key23": "3ZcrLqdk6kJipXDzrMuq6XxVFKmwjJRjGTu1j6yREuPEEdgGNzmpZqWnBzFMtiGTKQu9kM7ruTgUi3oBmdQwrhtb",
  "key24": "5GWUQ6UvR9LcJfZZEAimbeJSkSKUmTmVPEgdnnEmvAkUyQThLhNFCPqfrwSRD8ijSxHKc86aYkQ8b2E9a3m6sjcN",
  "key25": "3tmQ5v2pzUQvFoqWCvErCh3dojyNByFVraSHtGfr3AtYftwFBgi38badez9jXUZQg7e3KTZGz2WeEuZJBPfPJbKG",
  "key26": "XgeQeyHKFiV6spusJiD5t62vA3HiqkVJSB6XmHbdoP9AhSnDunuiwcbpuEwz5pFJrdP1rSPYL4u2BtAdzXzKFZS",
  "key27": "57G83eGC4YUXV2NBNnZDFDhnz4Rwmrcmg33xxBBkugDmg9YpPGyCHso7koNuAEe28r1uuYeS1fdMm79JiNBBRY7W",
  "key28": "3UesnbCzUKWCePYku9prdnZ2nqs4663oTkL1GGXkPnfqxkb1AfkiiAhiXu78x3hu7dVBhSsBFqMNpAvmPy4nGzN5",
  "key29": "5a8Jrcs72VVaNsi1x363b4dnCTddXG6VbFsZiZbx8A4yqx4AaupGc1kcrJdiCpD6QQptaYgPnH2rpyn5tx7rrCQM",
  "key30": "1fSCHRNTAkENBfAwTFViKkJGq8Ax9odxWSJp3o8nE48mgtH7F2hfFhunMyw5CHFK3Rahb68arDRJQT9FomrFhKe",
  "key31": "2ugHrjMNRF6tT4QBTbiDH7vZP8YTpSwXKDCFRWxMnNHRChfvnbfAYwbGCzpS8Lnh2PF8Y2BUkWQp5J6QrzSECWc3",
  "key32": "2yeyFz3egnyCXDUcPxc4h5XPu3DpHmHHUyGedewRnzZWLxB5MjByfkq4m4umGRyinq87X35Dmi6oFZ4qvdho2uKV",
  "key33": "5efbWDHnV9XNRWtSu3r3KCpXGdaCsMJuXaxToEDnjWoZYQhG2kvLuAW4MuXP4F7dXNnK5mRzwKYsoAxKY8Bvxwpo",
  "key34": "41R73LkXdr6BXgV4keu5KanxTjnJHp5k7btAjW8TBuo2GaZQA5kD3isZp61ZeDTCdp2kxv4cSZUyVGADXias9fRY",
  "key35": "3vea2YZJg2No4qdrMGyfryM48BKLNFuxfjYjWczQ5JrRH57RxxsjrcpxY1sJ7ztyfEUhvgiWXjN66SiHn7WeJh7F",
  "key36": "4RX4ehK1x9Ln7QHHvt8s2aTvN62bBS9GrkG1hWJ8H2Go6r7uGEv18Qj2Za9Q5GDAkjZUmNZcw86pmB6Cn8ZZZY3k",
  "key37": "42Fyn4RLXrrwQmQuUrHFVgXVdbjecmVt68pWjJzG9BuLAmkN5P5irjrizKzBDs4PPn5gyFyhsnSgv1yEs4yyW484",
  "key38": "454mYn4jAsfQrke5K6vfTWQbiiBQbM3HXtFrh6i8ACL6TEthVnMS5pmg8AZdHAzQ6YCr3eb3bECYsWY97FpZPJSp",
  "key39": "3Uq4VVfxAyZzmMbJAByWCNs3yU34JyFik4N9VcdRMguHdrNnxFz9Vdy7x8HwNLviEzkVn3dVNAo1oJaGuZqRKbkw",
  "key40": "3wq7WGKFoNEttnWsjTNpLQgzWhPFAoXN1C6V6YJ7kqUDdN5SjmR4KWsscYdSqpnq5rfF3RVffkKKNgJPAqT39hxP",
  "key41": "2eMKnbfKEsgWkkqcQ2PFGT2eJ66cdVWREpDvZaufGUjz27K49272DnMCY1v7irKsibyQNgnUD6X3iDAFTByuTbox",
  "key42": "5SVRoYsvDCYgSyXgeKFQRcqBMU7yB5sDRqceSnBGRW1KYeRRFRtzPTPWKVt31TFXY6Rsh8x5AnBWTfEGK1Uounu7",
  "key43": "5CAXR784N4x5wr1iwbH58QYLZea8yqHFqw5DrNHBctkH3gxT6xfyZ1TGDi6d915YwA3pDQjhoRVQefSkr1XMiMd3",
  "key44": "3A1H5CQdwpk8ibPtfWtNrkhJtfYjoUJXNcTqMYEy6xAcvPs1Av9EcHDLq8YpVC6irn2ZKRMp4ufeFs1WxXafovcD",
  "key45": "52vo2a6qAhQ7FxHSTCP2rokUaMWk335xGptrpccCEpFi4SgkXSEydQNtPP5jE2QM7bUkid1YSkPQh3KYYxZfVvT8"
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
