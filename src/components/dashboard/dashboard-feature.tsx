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
    "eai1vEWsmRDMT22hnaSU4zyt7AKwP9cqxabca4ffQiFZwURPJtfvPUarSSFwsQ3ddw5xYXxX8APPpiKNRStYyse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1rtQ9wynnZVVsz8r2tczFseWjEmF2Lz7hdS5gvFequvUfY1apGpd2aBvgDVcuxs3XmqDG7AkjfMuqMh626zoHg",
  "key1": "ct54FquSZjDZt67Wjs8g6HBtVSo7r8B2wp6GBJfi5DgebwCBc2JD7RrRBB1h5afVn6nxgVFMCEj9zyc56KNprKW",
  "key2": "4nrTgrM4ZA4Fajps3knS8dxmwqfY3x5Hbo1TjpFTz6jkdDxMpZXqDwTa1KsMgW1FXXsxrEiaMSzVRaTVJVU8ZhSe",
  "key3": "3mgs7ykgaXwLAzRfSgTebf92qbhjbgfG9KGNgmhEGozRVgtVGuTSdHASSoBY78ocf1FtZXLVv3HGMvkBUFNK9gpZ",
  "key4": "4XjQRa4fjwMJvdPK2ib2RGHUwvoBGwFB3UPiJKi47y5UP8k9ucg5eFGWv7XgSPQysvXMbzGz5TorBf7ECnQvtsye",
  "key5": "34jdgoQ4x1gZSrdLPxc2Jr9ZPq6ysg6JzasYPxSKgGWvYdUL5B743UTNBR6gKBPR97EL9NVHrvjrXu3oXnzjbJ4u",
  "key6": "3GqufwKmpHfutRznNr1Em8eJz5vrcSoSvSouSJCuAjw4ZYfcapob8Dq5Eq7A26fDqfjx7wfsBVQkQ2ig73hkbfeY",
  "key7": "5HnV8inVnTQsMbndfLxSX3NHZShCiGTx27pk3iyPmwxScUxScpKywhzDpvP9igBRepEEneUSg4ssuTd4quTFCvkx",
  "key8": "27tzyisgSvWZig5ZdSskESPxt2c6RTr51LWsXL27npVpkkqNQyzFpcJJjQB6rY4eb1d2yquYHHR6oKEUyTooDS8n",
  "key9": "66k4qHxy3w36hKNatqD8RioJSdrwG8GT74o4kZjrvBVSdYZUdh4vFbtnw3s7J5Zkt2CDD93XghgiANQNLUN8qF5T",
  "key10": "2t4obQz3QPkrbaNBV3K7bXNod8SZa34sQa9KwuAYi9awygDzyC7GEKzpfa1gEQxmmi8G316MXvRre8WRku9pQQJD",
  "key11": "Bhy4kLEUf8mDn7kjAdXu3ok1J6ecpZnZMx26WyuXGCXsm73bbtHVXcb2MgwP1jDFhE6UpMtoVD3r9rEwqzCCbDB",
  "key12": "33di7AYHfgZXQFapm3q93EBTy8qLB446vm7rgVdCQ2bCXpms9RiWUdmwgAJ9n7xyxqD3WzNt2obXngxVffrta7U",
  "key13": "F9Uv6uHNRZqGHwEhTh4upETy3vvnrHnqLD9dUBMEfLRvtC2Uvno8HogdRHfUCR2WHwMdDpQBDKtdbQ9DGZdHZZU",
  "key14": "4T1BAtxMLPWeWi3tz5nMK28NFuR581G7bjNUp8cWCCEw6KJnaVu9hr4f7gaqYhkMDvEnEKfSsmpHPe9nXw55k3or",
  "key15": "2Y1JecikHqsYkTvSp7vrSXHiAfLbGiAkDvyhH6DWhV1SNeo6TaurvR2AvqojccSoehifNnY6PspwUZPTVKBFJHVe",
  "key16": "3s5n2G13vaA9kgZBMdQCtqhdHVcQ4DxDq5Pn59YYSubg8BjTSFmh7d9iQGVSpVVChGdhFUeLcb6EacynxWSuRbF7",
  "key17": "3v65gZAfFtb135WcdtSEQWdrFcKALARhD9FZ7iJRUNyDfkgSFA8Skh4W2QRG8Ap1uNCfitM3YEBg5RkkkL17BFn",
  "key18": "63uAFTZED9Q5DmDWDSsKSwQz9uowXgysBnmsQPsW7Ra9eTpdTGDa9qP2vxK6H7oeH83rkYaj3AwF5vFhryMqaoTh",
  "key19": "JdMs9fQFJiwQCFfse4NwuYb8bjb5ChyMaxWq1nW6hhEXE3WE3DWQkmXP2BHZXya4seVdFQQEFonxZssvTQ8v2Vj",
  "key20": "4FeHoErfygCJfVJtDsk2HXk6j3SfemE5sLDU5va44XRciQvLQQ8ycG86gdp8KNDLnr1TnquivozSmgYhQNrY9G51",
  "key21": "5UiTChhgeWRfLWEDbJDu6VYkRFgaCcLu4xJ1X3nsEJPhfQgZaKW1ZZYeBWHtEC9bwEHW3P9sUcuUyp4J7njvuHCK",
  "key22": "qcCDyRKri7KQNHCGCXCtzCog31T8rHFfDm7cTxw5N18eghoGWoX8Dgem3T76bdozshx6V5Kyh1PTvbFYmmzSUY7",
  "key23": "39USngT6CR3TE78rv39eYJ3Nn812F6vw7zemZZHmoDdRa7aa1B8zUL77SX34gpQRcjubhPMqyWx3ivJpXCstzC6C",
  "key24": "3QcpQXgCrVB7oFYvKQMg6zUM18PXD6iQHGX9sSUPuvEVPEzdLxoV16vLQcDwPNKpeviaRkaFW7MpuKNjwdoLFjis",
  "key25": "3WsmF695AymdLCMXFxhcPB8T9V5SULviAEtCxNJSGfFKLTq2tcGeyxh34WH6qawoyx8KF9kjR4xy3FsnxU5YWJAR",
  "key26": "3p33e5CY4W9mbXXfSGwiLDvMfEN4EiHcPuWuyeffaKadEmAikaPaVqbwiMKKygfk3dKBWgTK1DuMzmo7h4ReypS2"
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
