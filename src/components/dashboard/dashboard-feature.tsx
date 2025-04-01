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
    "3yZcLjLvitAPZ3twEhhUX13edYkvxrtUMTGB99cbrXQrnnFghUuFU88jMBVHdChySQg1W45jWvXCT78Xu7Q6WQae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xoordp4pUiAaEirf7MqgqP6ZaXAMJtRSLXM64CkuUPhiZ9kUZKZzC1EZphq13jt33Wz9WztX3qb9UpCpGdVpCK6",
  "key1": "ozuS32K9jjtGD8h66xtHQCn31E42RAz2ieRFqKwaQixRmLEJ8iArTQMwRqfWs44qnWWjWBjnoTMpmXYs8KHfBAQ",
  "key2": "gCLMQPeLygRKMUSV4qQeCS2PMGiGNG8TV2ZWFKkVAP5g6LwkdcS6pKQXTV79jfYkGo7mZ8kK3NZ5crG9gbvfKL3",
  "key3": "2Vm3hKdMbYeeZJgZLMXD1jEMyNFpcXa9PRAesnEFQxjpQEketAHtJMNwXUQUNnbRgL99gejwotU2WJseniem75g8",
  "key4": "5QUL1gxZ9YPHt8YHy4WWDHtDXEuxhagUUCSWaDmtt1KCNdrVxPG99VRbH569G4KWuTg1H98w7x6eaiDHYNKsbn4H",
  "key5": "62pSrYujAZ4WDimqY2Wo2GoNQVnZ2T7pArgL3S2TEo8yeieg8DApqbBYtX8BUtcH2jsQNmvJNZvnjDKimgLFJmpY",
  "key6": "2ammHKxmBiRtPGFfY7BstnH3riCiiS81uMND2mNfbDKRaUhuZ3ABnH5USmfEoWvqqK4swsieaxdpxetkm3fJERj9",
  "key7": "2uGu8ezJ8Pe99q7ZNByMkb6hRJsxBxGQWXVG5JFYBaG7gZDZXeysdg2wLeRii8aKShrgxEXpExdzvSQ7fdrWYTnt",
  "key8": "rE1yjxGiqYUvEkokEJF3X4YNHfyc4mx9TcgRru7YrWZ7LgPTxXfvAF82uQM7qwjM9JtmQgd7LERR24VjfticYgj",
  "key9": "2knVBSkmvGkJqkz3iZD8AW2wE2Vvk6bw8zQZjTE1WC9G1b6HsSApfjtmVE6oxkhvKX7qrAyB6L5W6Qru6DFh5S5Q",
  "key10": "5gnLyeTLje1P4oh6aN1iDbArTEj214yzQYPqiV2o5voghevTMDhiX9hVawF4crhhARkDyCp89jynpC8D5xNHpvrZ",
  "key11": "3uRSgQk7GodvmYSzkqwQ6xGQQFGuuAG38mDuhz45UPPEPFPHomhQD9R4CHxqkh89qxAaGtNzq2i8X4FfxQ4UKW1A",
  "key12": "2oXZrsudfgQCxdavyyhSVyPVw1MRd8YrWBsXTZcqBmeo9bJui3rMZbNzdscttjuaUWucEHjt4HNMeQAwiR1amxTA",
  "key13": "z72q23j5ywdpVeD2jc2wQXsurNgWSUnVaP9aZi4JT1S1GuNiE25L6dvynyWWPwTiZ3ds9iN8WUpi83FSYrNs4sW",
  "key14": "XQMpPq1FKdv6aYotKkcBkKA1GHvJvRheZrj4AfWMnns3b7oNTWbZc6TJ884bBrL1ZWemrmcE3RS5tuezSbjn5FD",
  "key15": "D6L5HUNjS4vr9CFe8hKoKJEfPyYitqE2GUcLYbmTHGsfxSgN6U22mU1u74NpZiddwdboA7LXeE4rUuWhmDzUg37",
  "key16": "2gSkAkXJcJXonPCQAS1vMvW4ut7G1LjDF4AotWNZaA1CQPwY37zoSZs6hfskNiTeMYdXhj4Ssff8G3X4hCb9B9gb",
  "key17": "3zXkXFdEbrwm9qpSNAYsV2VmSaPXkvh2UVY4Ecpr1t2X9L9XYfMo8DY5mrAiKRvG5D3sJ4v8XYQsKokqocMPvP6w",
  "key18": "48KSSHdWbh2HSYkuUXDwJicqEP9ihsJLFeufCZrKq9hcBqo2UdizcuBTc61YfJe1LXXDYpCQw6q32Va29BFjMGfx",
  "key19": "SrfQkdXUwJxbbkqcLNv9qwTx6PDb5mwgf4iGFksaBYeBWVVN5JUJSsJJjv1xUm5qNhonAmLHpt7qn9VEAo7HCFA",
  "key20": "4ENvpoqxrEEjgvDpThjQK6itz7wFXVJ8DBKUZiKhZDZNutu4LqTQK19Gm72ua2TRDWvX4CzFnDwkPEHQc1qTiVae",
  "key21": "2UzQMEGpdVAupcEBjpBvXXPF3AVfSC1TSFiWbbWVT3f4rKJVCBL2rnCgr8yrbU2vcAMMxP1tLotLuCfy6eXhtoKy",
  "key22": "26qwu43jWPX7nE7rkaQsaePezuYYrsQmbTexXEvxdw5GksquaGSyg4JbK2Kbdx1dA3YEZ8w9wHdyyNJDp6uFX71h",
  "key23": "4czGZZFdLVAK3uckuvwiBMg8zfebj4TpudYDfgqkhjkthXP6v3p68y3dn1CgnXyJyUNRwdUEMT54JZp9tihmzr5Y",
  "key24": "52PhJowYwyeozAnb26ycrntbwsN7fCBG4dKfczqNYWRgA2pDhgnhTXhGVezYGbvWMgWLY68im3StT56eZkvwuuGe",
  "key25": "2bH6oDPD457YKkVTbTD2oVbHUb2zPcFmFxwMcJu9kf8rQ81DhrCqnzFkBPpnRJZ3jEuzY7uoNQpVv2H13BsWkjef",
  "key26": "38hYKLfQVpuPWRt4EbYg4o8QHyj4c6wRY4sYWgT2isyxiTmiL86o91AS12ACZChzfLbfxRFLA132WuKnTjXkkrcY",
  "key27": "3Z9CLRfXPiFCRN7YUqe6bgp4mbjJr5C76pWgC3QXtwqj1ts2zKmyGA178knSs7cFM6tYRPFEJ74nNcw7q5P6vgL1",
  "key28": "23qaQ1Zr3ikYKn2LUCQvKixHDMKAVcoXuzKaqHJEGne7or3PjK9NqiQH5tuRVRUxVmSJfuRELHAwTaNLJivb1TVE",
  "key29": "5jze4PZnPanWuU1wmd4GViTKZmsU6m2iSudwPispXEVDhZGrAHCVrS1QVd3vmuDEGouuKLA6EB6kjvnatTUanh7E",
  "key30": "UZzmuphRoZoTe1wtbgLzm86vijyBRGMorzMAgVKDAnPkWNaMrbkYGK2zcBdUGjXhJKDqhjarVMBzRNdwtp7mRLD",
  "key31": "5gi6KeDGrQx36ahpLH2QJ7KrXXPuTwBGqos8wU86FNLXBYawUZEaMKeuUJ3BpsTgRp8V5foNfu68aNSNeHjtSif5",
  "key32": "XMi6MM8BU35A1pEfkQubANNTpuEPpd3Ao8SHyPVjjLPBCVEqyc6vtES2So1HHvPVjcVr5LnbaTSiKCcaHgX5KGD",
  "key33": "2ePoAXDAxPu71xWchuD2GUTivKKLjChBdbvaoSW8rQdPFaF6eCfTnfdFw17trVYDQtpYiERceMR5AZ3w5NJVZ2YC",
  "key34": "boF5X2JMKZcd3XwF6567BMwKzw5oWo2dPVF3XxKinLHSjW5btRhVN3dCWNfkHzUVTL1fSxoUWr9ib8dm8AbAfJR",
  "key35": "HBu12w27rRzJer7vvhnmD8EJktnJNeVdioMYEjznkxHNg7Q4rSz9SqBBx3pZGqH4r5ecX9hgZtY5qu6PTmcJJ1J",
  "key36": "JHsnThaJ7hSrZM37VUPAESVJaDvU2gxXtJWCj8fauiMRBkFmBDRcBzV9CcSCFP2Tt6XnRqH3vS2HKDwLv5LK1Mn",
  "key37": "mpnCLfj6Uy28MZ4ACtvH4CeSMzQoiAuZBgkWZfDLDkL9KPFT6tKJS28SMA9w1h5HrPLrQTewipNVdLVgzv5KAGa",
  "key38": "63pKUYV7boZQKAQCCLSpyQzR5aqaYv4oTKeBx6j2QJmX6RnYybhNKoXZurjDMESQZdaSvi5QNeYz9n1zmJCgyyyt",
  "key39": "DD62QL2g2CETBMLHTH9yQ6HDCFv8tGAJ4uM5Gt8BWksvfXwQviu3gQZN4vcuZKQsmcpRVTNnVZBkw1XSNWc4sHA",
  "key40": "58wddosACNTkGpbJLpP8tudhJ32B2Dnz97KNZeG8njvPv7f97x6C1vPK72i6GuaMjofnyi7892KRFqLDUhMM4BAY",
  "key41": "4UFM7Db9hcnsjKet7tXXccvcPvHtQ7MTRnjm5jwLKykP9ZudPqkeTMA3RvRGWmsPk8XQNh9hoAbSYDM8eKVQJ3bK",
  "key42": "5yTMXRVHkRZin3d5asfQr7u7ecz2TBn46y66PrxT97ch3LDi3u13tgxy8D4ZpR6RhkLWuvgFYMj1Vk886u78pTQN",
  "key43": "5ddrChy1SAMXVFN2y2sevD6vBGCPuKgSyQsJ4VRYhWKD7hziahRrhBdjUp1HiwLXcpSs49KvwtKqcGyxjmeJa3tJ",
  "key44": "3wjySa3yaKWVikfex8gj53ftVfjHwYo5wUx9u8tgVLvrgVxVkmT1WAmnm5hB7oZiCqcKcRPJXN7nysafSrCaoKAf",
  "key45": "4Ev9bBn2GtJhzsBZYDFzKoiDgHhoNaSXXS4is4LEPD5j5MWd897E3Ko1N7RfUx3GKAaSANMj66Zc1zjsCL6G5XGd",
  "key46": "57JZN2qshY9uMyTfGHfQrQLG6ofprFyEBjhBWdTCMENthfirTxhdwSwfaCt57kSaMgzZPKnFcTdTJRW27dwGR19m",
  "key47": "2urYnted4kveA2Ju33PNpsweCifi4q9PWZCNBRRM74MDN5EjZC523GNbGb4pfSymT1cqJitaKRcySRovRoiLnjXg",
  "key48": "dnoKmmSVWkt2vfuTaBtn73TaiUrNymu9UwPrcwHq8WjjUAFH5gmSRhBbFYaeVgBSiXFySXumhjHkjBSFe3esMUL"
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
