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
    "w6ayoyiY8YCK2qeHzXvvpKCDVqZByKee26eSMzUjoJQNZiZTcfqkjeVtK9NQK8axDzpwryqPFNLHsk3rPLYRDUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yFxojnhUhX8e4yS2sPp1pyct7JsycmQEUpifvVuawrHhmL1YUgCqvh63tA1bMgj29XNU1uauSasZZAHcCwqipR",
  "key1": "4Gjm93iPsU5vnmpmjw5RCSVbN1XivkBnu3V39jwLpU1Y9FyD6pXdhnKQ6A1Nrz42v1QPxfjpfmTVrPMEqut8pii3",
  "key2": "46Sto8HyniYWCSWrhG4cRgfouRxAYn2ob92i4VDsb4CdkXjGQcJUuQvXucQqqR9x6PW3Y1JRgGer2tz6kMyXb3LJ",
  "key3": "4LVhCDTpTsrFZbAHMWbmveMGXeRWSCEqxDgPTzB3RpxyEXqzm9UUxD69hVXT7iHam1BA3vuYZCeafUqoUApYac25",
  "key4": "5ARtFsahJ32kMZYegjtfYLgBEkUK44PhpBEKFxHuo6idmXcqiT2fWQmgZujMgfewJTkBQBp2eJ5WQRjWEbQQEX8p",
  "key5": "FKNGzmELmV3WHt19iHceJGE5qmemq9e2fyY8AvXFyx4tqEdAXsxBJMH1SXepoteLD1SUmMcf1iHBwfstHgYJiZE",
  "key6": "5SpqK1fxZMZeAQ39mqwYqKGxzrYLfmEwef2GANHpqqCfuwxipXXgn3xZvae3X7ZxKCUjWr5KiLAS6kUCGMz3yZVT",
  "key7": "4Ek3HcQGK61hmrprycVtc7sx7eMhDvcrFvMJysKnSmg2UZUVuiRRZiSn47hVcXzRiCtQqudUHfLwZRw52TB3f1QU",
  "key8": "4zq33giZ35hJeUFecsYChY6kaGVUY2srh4MtBUTWrKaUtVgRp2rVFN8pAiyidmpNnYZwkS9ah5kQbnpCSXK3XWzc",
  "key9": "4vMAPK15sYaJTc1k3rnQmxhvGzBbPpMP64MKaCWAfaFTZrpCikBchYY7TGttFmTgE3TVxWkayBUfBE86oRHu2Ywh",
  "key10": "2WP7At7GncSjyAnBp86JgUAGxqnMsK9N92drZ6fcNeB4so3h79XhNFJx4M4qYrHDq86YxGeJ2bovKv5AkzorT19S",
  "key11": "4rHVQPzLE1ZdDxKzwzTyiip7jsVyBBRHKZmTUL5eYkLLwk8MfDVGNFQruRor6QFYe1yi4hMWG6ayyJdy5LLffX61",
  "key12": "3cvwzWiAmFQ4UxJQfXo8mJrjeBAVskpBEG8WxAZ3w66Ebh4VRiCuTKiGxMG48U9m2xUF9pvLmyvoVxbsUNx8sj4N",
  "key13": "4GXFf7GznXpvUQTJnZYVAfscYadpdYAgooJTmxv4tM1NwfSNfdgsPC9ok8xydXgba9hA67qQAUbtGfgx4TnK7YS4",
  "key14": "4RdtdJM2BTg8VgM9TcXzWU1fv2bazAor1B8MaMu7PUiMt7B4G6AYHh7gJaMHsQt88mkPXxLq4kE6XjPYjLSZpm9E",
  "key15": "5dvxe2GBphSbDYPgxK1ZHuareyu5zCqmRVCPn3GFLrnoMZp9vxLnw2DogWdcPLGL59JGVTgR1eTgQnTyBHWCRDg8",
  "key16": "41pXtpfs7M8m3EYdd9o6u4YfPtaogQ3AdBYqxnTiXWLM5Sk2Hw3j1p8z77KsWmQuarRnLCw5QU7VQpF1ByczKBFF",
  "key17": "AUfBZQijQXD1RTnMgkMKqgfFaJLHfKXAyQXuYmb6TT7yNHRQKYdbPxH9EU2krdqd8fjf5JHSLuXsxZ9T6JJ4LBe",
  "key18": "3NzcCkz9HNYZAMYeoJyESEXLB7niPAq5FqZD2bE67xgzQh7HLvjub3oqSzq3rXkQoKcLhrhMAVWVZnBukQBQ3A2e",
  "key19": "5WXUcxLSsJJeQKSKiPAeMdgHjnJLpKHwMWZmkgv6qFgYyYYUA732XKxBYo5K1a668e1RorUb9RLWRGWwXVKiZP4U",
  "key20": "3AvzPcyBE4BsARR5uWGUdSLgU9amwNm6shP41SiwUCBguvUH4qoBNCGqsSag9SSjF9D9Se5Do8L6r1YsDkSKcJZV",
  "key21": "yZrXJYEmJ5VLsmhYwr6rDdxknprZeWuBmRzPHu7QL9Y8Mie5H8XoJUbyTo7yuAX2oT1Kgc1poR5pufEAaADJhLe",
  "key22": "YEgHVTfUeEdVK63xfmcfHtz4PRQrebkg9mRiPk4Pfm9V5ZDb1gAKNcTCDQRwSfmF5kqSsGju3NrdrSWLuSLXqGa",
  "key23": "5gd8hT47xZMK7nwtW8m3Wucxw8m2bCYVhxooLHL6ixuXh6Y86VSStZd3AXEzuaMJLQGkGKiFTXohKWpCLoNinn7R",
  "key24": "3tsJPuvqC3XLZS8Q3dUBqPB4HmEYwDEHZEyN75fJeFvjrEpNBcTRB1o1acM3rbm7cJ3ABAH3zuuf9dHYF2Rc7Hju",
  "key25": "3koeNboEwvm8Tq3LfEfWww9wfAwqXoPofrGPVNhC4kwNEmwXhF2mJ8Jbdzdqu6v8JzysCJX2HqUgkB479xvr6rq8",
  "key26": "4eAHApcv7KTNPg4EXyq7Q8KHZ9PEPVkXLsFsPAjKZUT5iyWDTarpzcatBx1ueoGFfn3zfGuDK1K5jfma5TA8R7c",
  "key27": "51nr28hhaFxBsMTfs1fexYvvSwmznme5tGRf4rau6JdHSL2VSF7ot7RpPUHGeJS5sj3e7W4HiszABUBF9wNUyfoP",
  "key28": "4dboGWojD7przUGhp7YFuXiviRivFmRWR5FixM9WusB6fLqz5moVWNMqMDeH8LtEKcZyz4vGhTwXnNQeDEN2DAKQ",
  "key29": "3kwf5TQWUhfYZgfSMpqA5AP5R3SfcN8eSUH5YfH9NesXxGcLhsf8YLMs5HX4kS9ojwoUB3ngoH8Eq1QELM7DWwvK",
  "key30": "4fyfUpkpNRTVpMsFi4c49Cc2TZBsf88a1zRwBzSkFPqBnazYebRNj9L9cToE43hv2r3JwJ34qRGqqHfeVTx9TUY6",
  "key31": "3WwjCPLv7J7FR6PVrwavm9o88J5rgc8VjMvQXvNnuBMUiTJsPEF2kBoVGdpbehz5nQGHnQS65nD1a5UVpRGtJL3s",
  "key32": "v6DjmrhFtcfa7aSHw2eSwLjy56uhrvCsm2gLpjBi9zATMCxXSwJsgqACcxGffC9rmfyoxGV2qctc3Gy8fMZ7KWG",
  "key33": "3XUzCnY3GXkG523CeVzNyqtSNbFruCqXdDZ76VoZTgTfE8ZgxseHgF5L9Dw3GQPe1S581HE1j1NTAnKETnumE7su",
  "key34": "xoJRaqLVCoNhS7ZWBgpEhZaz7jYESMuwqJxMm1yokGmzSU1h11caTuEerEABJtC3tk19fANCoQuYVcZEMupvyDc",
  "key35": "Bw44MviXGPFxgx6SHX41BEJMoPc2dpAYigsc3Yq2uthsq67XyjVYTp6p1PoWhw2jtGMiADRsfdVraNDraNaYD6T",
  "key36": "21SP8H4dHutEXz5FhksbctUMyW5EdZKStNgL3fsj8T19JKeKacLk1rn8yGznyCQsHrzQgyHJbHGPpfuMsxNQspko",
  "key37": "57bub3BGiVARsaNLGMCX4gXQoXjTYB2NEKgMaDJrZibw1pYCW66doqjY28YMwK7miTyGRPH8aSRhHUSiaoURegsJ",
  "key38": "54r8PJB18Li1Ko8M9Wqzt9vyJ6QfB3Wef7PFdKD6F2uRbL97DZ8nrvyiSXd7BEUkqrJNBbs4fZ4PMycDe4dA4jz2",
  "key39": "5eBteEQBRpB3EsTqBuNxjbVyzMjUBa25ALBDb5kexgzcfqWExgGeKJfzBr5nq5HF4kykdQqUEJHH9ZHEKJScbk3F",
  "key40": "DzSutgLpcXhLA87JyZjWC6JCfMkA6fM2WwA7TTKV72C1bdiJ9fwgRZ2XcpzamceCjcRAZkHUAj3HTF2h2KRp9vK",
  "key41": "2aDDq78x4PYbR9rrwwZXqawrqtDwGjABw4Y8DaenhPJWbH7pWn6r1S1ykDs1zdJbnXJN3UuweyLuvzqCZEz4XnzL",
  "key42": "gBMFkM7bnzTVFoikDCRqggRqewZ4MFUpcYdTixay7MWXZgNa9SCa4RNR5358V9KYpzuXkFt5ezK3BikjcLxASbg",
  "key43": "3nvSdbPrTtGMgFsRUovPEaM5pacCtjYxRvBAtNDN4RAYxwgcRyMCgsnnK9Wiu6DgnryeyLfPB1yEhzhDmjkzxf1E",
  "key44": "5xggfdDcUVA66KAqrWEiGizBgeSGoMyZr53cexFptfWj1biJ1HWQSo4WvyGkVhUMMoGrPRKTBWJnyPHSSkxsTVmB",
  "key45": "DVn9w6wu9gciKWxVgoCSkkSS9iS1MFebUsrCEQfK83v42EiGsUe71rc7tMNAC7QE6QmBb8VUxXVvr1A4agF3EWV",
  "key46": "522A9V3D22ieKzFWqUcJP9kStSPr6DUYoR8KGTyS73XD1BhQqWQ5gZdyhj9EdTQqVX2qg4vXoterhgXDDqUvw7gH",
  "key47": "2bYjfADyQwPDVJ2AyaHbbgyQDFKgAniUvhJWwE3DECjTxPg9Yps34fLtp5avXetHmVRJWwS2gxM9rpevS3RiAHPa",
  "key48": "46f7ACe8Rk78qu5D5c84ngn73hpXDp5xFB8caxaAjnf11VpyL8iDBJBiHtvQ9fErDGgYtnuWeNoK1VWgnxkxD4TY"
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
