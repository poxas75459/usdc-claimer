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
    "5KM4GFNjXytwidEt5dScSCispzuncaZtDVcKi8rueVn6NXHfAN1dqUU3BaAGYL5Wghm5pT9RDQNx8tVXfqvzNtob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vU87JqZtjdfq3T9uaFr2eB8hTxpqWkC3XUWnAnBFB6h45XkqB5shZotgCnnXWbawnDfKTAf3neP9yWUVnXvQKhQ",
  "key1": "2tGjmaSZieXQiUh94Q3DpJr4hBRMgohcn1hgBR4AXGtNQn6y1LxvVspD9otJ9SMZpmMZmH3caZN3uYqAUiZKn3eu",
  "key2": "3g8Zyn9b2T7feoCb5UrDx9sH4c8eRDEwQBGkjRGdaBEhKqCePAvfVcgZ32CaY7YPG2VZg6inD3FuRuW4WimW4Dvm",
  "key3": "3zD99VgunkcEGVyYhzGLrmRFVWjKKpsmTLNQU1GbmDmJ39nf7KoG49jzCcszgYhFginS2LX2B75QD2y2cdh7ajt7",
  "key4": "28wGJdbZXDiuXBrqWBdz9mwvtrL9yjSa9WhBLMfq8yUJB1expTFe8emZoUVs6GTpFrVDhuQD48cWB1B23TpipvR5",
  "key5": "66gketZmaz4fNqhq9pU2URTBb4wY8NyG9AqeHnJFE7cST8CphdgtDWVAqam3os1Css76Nv2XY8cParNdeEqmTSVX",
  "key6": "3z3BuwUV9iqChUZMZDJ1SVbWuHoADWNr1mQS1Sx2uL8W4ccS2bCvirtoQnoCEuCqnT63zwSqGW5Dw9D8eToE9UnH",
  "key7": "3GQ22hzUHx3Q2yJe5UjHPqPjpu57ouLkBwscFKh8HL8LLYSXL5B9ZWb4dJLUk8EXJYGzfJpF1jYygU2dBwXkXB5v",
  "key8": "2pedWoRMkmpXEzTzM4a9A2NzgMaPTKwVdtvtzdVbTtkCJcnvLUyWyukZ1VnzkHjjeBABQShSUbWf96jM8VCDm1vF",
  "key9": "2aw326UKfvpErupWz7cksKbsJ6U5eYSKkZZ12RaDCMZfwcfTUU7a7cQriA6fHFepgamhFpnkisR8FvMg4shd9waT",
  "key10": "2BPUn4MyJ5YDRM8Uxy8MvzjaH1MJQuWkMcAkfGZvnLMFjqovrJZjZqvdis4b1uj6KPZmAjbEFLxxuBnwkCRGH5sD",
  "key11": "2Sa5krmsu9GUuVAGgGD1NTXqMXnVT1c9HEjEGCsEpPJDmNQ8kKxGnNWS81PFQs21nCyAP5aZNAVuuaZNpVRyqtcR",
  "key12": "P8ky3QhG4XqnxZPVyuBb2m8QdKqpsPnzfBaHPbP6eCBb9oeNpAS8g6pRNByrzLK7bwZ2to4dPnZ8Y6sJbqLEvWf",
  "key13": "3pCz1Lv13EeGzBAfn8PRjcs1iaXT1wMSB9LNJBPXjxYJDdYhoooGtMzGZChQybaeSyKB4em9rKjvcdJbMJNtrySo",
  "key14": "26JJJ7umoQpQhRh2JUyYvcza6jHfBkwdgZ8rEu4Vchjvw4ws1CzcCTdoopUtXKZ1Dc2UqLKDNdx7XGXCtEjseG71",
  "key15": "2G3AMDnJuN3gX2XUAi24E3VimkGyv59NVcZwpipzHSkZoWNS8PMCkn9BC6691o1RUGa1CfyiQ7iM2ZQE8LerkuRX",
  "key16": "5bvK9dcuMRJeB4cN3R9W98o9PFBDt8FnFRSabfsgD2FB1UkRprR5cob9xa2QkRTDTznGLk6JTJRAjeViXWRDzfut",
  "key17": "388hc2gahM1MHRTCjcTgmyAwVknMiUgcVYavYKZp9Hju6AjVA9cQYydz2ov7S71LJyJ3YvUEBFqBnN9iR6Krann3",
  "key18": "3zbsrTZar4X593Apwsp3tvAQt9C6DxQdZPDRgM5R1GcEGTdYqk28JPfktgGFX1tdfXnBCm6bk46e3AfHjUu8vXZU",
  "key19": "mVTNhFjrjYwPUba3YewMzmhV2h7hr1sGMSxyKgebktLi7dWPVvvrGsM8NC11Ljrr7tDQ6YL7dftQnLW988KoZsC",
  "key20": "ThNgskkzu8sLWgL5chhCAT4NJ433Si9yDxAKtap7SNWSm8mxP66Mbn5aCwm2D3QximrWnuDkxZ5sFrQaGWSzcXx",
  "key21": "5LTiTikfn1P3Qj7Zrn54NqSMhs8cDN1juJgYajLd6snFxb3FtSxD8Th2ifheZykiprGRRhheoMTH9q9hG5fD6X3L",
  "key22": "nRtVMnjDCeaNFV3ax1qfkRQcXgxYrKUg3keQyNsJM97h68BtyTCvUyncovrHL1TKubnjtG6fYUHo78j9453FaCP",
  "key23": "2fYi2uFtiDMaK1VcZYGtpg54tioGwzJNe3SLvxqY9uCkZ3o5TtqFbQqAYVZkM6MGjnmrwbnT19idoZVjMxiZbUF8",
  "key24": "4qBgXPMH7J7hnGKm5BscF6YyBqJ8BevD8S66qgCdayU6JDnHr3ARv6LXFnF4h6HJS7p9FdodMLQdi78NMrQHYD9m",
  "key25": "3FwNhwoiSL5jaS3qYgLjBbbF6he5Pz9S7TyTKhLxfdQ6Su2VNrADxPmrj97WwLbDdHwrsGpNoziESenbWJsNoXYy",
  "key26": "3h5kiHstdB67MznAatM2kWBYPdEYxsoC5hEAuTRPMsgYNqsWZ9dtskkJwfqDXMERw33DJJbNpJe9VsSaH3Lid74G",
  "key27": "2X8GvJCR3vhHNTBT4FBiz6KFjmourbSXAPiPaLjp7ULhigLLTMzVFat3qUH5k7bPUZBSeCqzwHo7aJbr8dDioG5i",
  "key28": "1ej9xMF9TKSPX4C4Cm5VJxmbdh1bBzTok2if1ghkvczjj2rtMCHpfC7qUBBaS31QD3mUecgQhr8hEjZuj7KYmKV",
  "key29": "2STYJhMx1fnF3peQ8rHjkiEemEyn51CeJhxLaKJjJ8q3HcGyo43ShEanbKDf7d6gYpZDT6cLRydarq7got4uUEak",
  "key30": "2uMYk8gH5XzTGcQxAjqAHRtzW2bUq3UL2jU4iTtay2JQrDNZHk7Q9SmkbkYP5wHnSgosaaroX5b3EFKZk2G1874A",
  "key31": "3RbiKBvzAsjz9tjmd5qrATG7PouFDowQrmApPNQsLzD9ddGNotqJjWzarChB82qxkL4ykSnttfvFKcgzfv6LjMaa",
  "key32": "2X2o4Bd1imgCn3Z5tPfgbVAYr2Po8Gm7s99QLDdr9pzAaCC48MSUBpvNiUu1W49kHMzCiKXdxn6LqZgE64yb5KSw",
  "key33": "4aoG1ceGG4RuaYQuJAQAKbUanyCE5xVwKXwDkqUye4wY9cEtp18f18xiZ9KSRQ95AU9B4jiiXRMV9EUcqdMSFGZY",
  "key34": "4bkZxayKSJursQZdHd6B2Q8TinLd3kTWFXjHjcjw1mCAtN99rBZoiobnnNk7afLJbVCSMptUznPzsnJ5jkd8M8eC",
  "key35": "2uqLprn8AVSiMqnYGkYVUbPQWCiKb9e1T1oPmqZ89QcXxpqvoG2xWVebMtX4u1K1qWx4a1sE3EywkCkTM1mMR2KK",
  "key36": "5VPCEPSjEMWbW95tmsKs6AikbtQEv7E7KHCPv54qaEZsnXuG56PT2yYQnoPCewFA8PxiFKY759VFcxMjEy61728p",
  "key37": "2PkU5EC2QVfJBGk9uNxvBc86VmP5SN2HPpsuLgQw1g1H2KQKvq4gKNy8wNs7JjYmfYjGrk7CYPSNuyitZmnCkTmm",
  "key38": "35e3wzwkFqPTZbK2RCNFuHF91HYaSPpxW7hhVGA6VY9aZZTdVBTn148NUaCyerrYhp2JTySEeBCso1M5HS8vMyVz",
  "key39": "5BX35FvJchR1LT5MhWgx2Y2wXxAPdBKJV9kjKCGb7y9tkTW3CXFocRyHf4sREV9wLWWAPrsRAU2wfrhvvo1gGPCy",
  "key40": "48HvLca5kLHJumJXfkEpCaH8TPF7yydfD8EyfzNbMTeHVuHpwBneod98ybH59ZA9X5vmKxYdsSyHBSfrQm6dayhb",
  "key41": "wuE4wsg86Eejzm87Nmge3qLZqMWifNQE3m4EwzYwykcLbw8833yRXSqUtFhKNNynSkUPV4XYQwLAubvbFQ8QT3a",
  "key42": "3cGTMVJ8QmNcRBPgwKfSRiFnUcryBZ6ATaGyEo9T8BrLmyS16gB9gnn4bKhePNwAuGm2M75iKXRHSgrbmQzmqadF",
  "key43": "ro7NLhpZb2GRWUHMdtSf6zK3coXKaRWbLmHfucR4YTWx6YFxsh2Lja8iqyUmbhw5qr99cEYG6zGvsGEe3vcRXNt",
  "key44": "4gd8CGotcNT62Q3BM5K8qgRZKcN2BzoMWk39Hf8o6kDQZRniqsJz91DV7MJ2hdHLhcRZxu2sEmERUtqMnYNGhEkj",
  "key45": "4WxWTexJvGyUgumDHDhtgMALs1S14LSgrawetbAha9rfcmvAHwoNqqQN6ETYsYuK86BEBtcvUGUjcqgns7PY4Fmx",
  "key46": "3vWzPs2TUZPmsRVeigoibxkkHWp1ZisF96BFsEvE9Wx53DzX5tf1hRecVrsCvvxdPkbiaZioFEm8NGAXkWy2WcaV",
  "key47": "3umv3YA8d5iH2522KN5tPfXqLJYZe7Z1jMHZZ6ChXaVUfQQK9f1rmhwtxzSW1Hd9H4oguZR5ehKJNVqfB6d7KxsJ",
  "key48": "2CUSadSpCC38zE1yWLDxxbnSALTm47zai2CS4aFZDHhkQJFJLU7NM5nLTd9W747sxm5RxuTgJVcRV78dVoGT1Bno",
  "key49": "3AMhLmXrxDC8CoAaYW3tUkgfy6B6KkJsRZXXSVDdAVUQxGS2gE3m3JiXey2Fdn8DcYPMdpjhKpV22ekxCSv192AP"
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
