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
    "41BqYvcBxuzrEoL56CM2bU18wbwmSfHvZj74PL89K3voK8vxGDBJDjhqoJBuujRYfgZu2k1tfiKFaUbtv7npZnGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyWLktSbVsqFC7pLvUBJaLpAcerE1skTR7zb7kPPi5B1ps22pbHd1nT3rLmtCEpwTCLswAjASxH4rWMr3D22qXZ",
  "key1": "3LbUfAQ2CCkmhN1FemuTRkwuqjESa1y83KjK89NbdZ8h1S7URgY3AQ9oPmBqbNomF1FFKYeBPnxhwJza4MPgPFqH",
  "key2": "443b4vduQdvrVz2YnF17aqPgPUuYjbpGsKmhNQZQxocr2WRLkJ6U6ZRneVqYfwQC2d5WVm1LD8NDZLu1jPQddHsa",
  "key3": "4j1ACzUJenYoA6Jgtqtsyami4DrBGF9Lcs1NY2DUM7ytrYdCrmYSoJD4uNjmAndtL14why8Tr4xdMiqcPuf6xgCC",
  "key4": "2gf3F8W2vapcLLTrNx2NGbPWm82NrrDe8grH4a797Li3RyeEzMJSEXqqcrzUKe6MvrgQgLmQ9BAyGXCegfHYma3R",
  "key5": "5Md1DDg4WhpLaW4EZSwGXX8YwNLTAEWx1oAwddf1RWL3Ad3kiX8DAomzQna1hgqxBYgUcuLqPaUHmpZQ2mLrny2b",
  "key6": "2ZHARNcFPhuSrKJykNu5AgukVJ7XV1LVxeaAdf1zbXXBeZzXLFWp6sk28ZWRyxFDYcvFoJMR5C5DAfeqj7XVc3ho",
  "key7": "NbeECc9CA6zo2TkAX1EFRKaACjdn1pyJ2oxzDfTTN79EdNah1C8nssLGETu16K9rrFPDiVqje3Kv4dAVuv6KhYk",
  "key8": "By7dZZReaLRd1EEZfir1iU5J9N4DBx5H2jUex1wQaJhLqJ1Abw9cx4Tfqc3eDw5ngLwTqC7nTaoxpBU815ioRix",
  "key9": "SHTjTHdwKFSNc8R1SJjJb3Uj4iR3J7Sm6LtrXXTpn7bptJA9x9j6BRyqfjuCe1HF6aE6qjNcs4GQj1Z8sRV3BiB",
  "key10": "3wPbHgw62q4gcnqJpLd7D6L68r9rUZbpcL3XkcPv8Ue7UGKBNRgWEn6DXZk5rxVbdP1dQ4B3J7r2FYnWsTuCgbg5",
  "key11": "tjg8nvS4nGX1fcn5DJSGwqfGFdjL3xGz7ZKKMm81LaPoD16LTgVwKKbJPm1KSCeATjveqzR3BDMdbSnYxQFWWg5",
  "key12": "5bAcVRTTKDFNzbTD4VuJNRm6qr5fsLLbkqaZBxwvvqVX42s2AZ6G5b2Ly8cgbvx12jpd9ymvjPhzi5Cq49zCSFhs",
  "key13": "4chZKjkzTFFLWpQXdFX518b4RFWpsvbqGKwa1XqxdTi5c82UuB9v17ra2uFvZMgfkUEfDottEmPC1FCAQg2uyMUV",
  "key14": "3bEtSycWg6aYx2WQz6kqqxqsu3b4ABSKoEFo4tCYp1E6pik9nKHz6nfVTK5i1gaTYFoLA92jtKZHrmDHozxXwWYx",
  "key15": "uhdVi3R2qpPkyYtLYGvtq1cKJDyaYRrCPhiMu78uEQmdMS2nxHgGH3Bm6iRpN2LCHJytfEwqKmwf4juCtMY1aGx",
  "key16": "2yHjiWpeGqsKfuaefcptHPXAi7ZKB32sz6wXzLSw9j9DQxV8vX4vrz7Bqy7Lp8YDw3n2LkVke61GV1F3cWvPQqZJ",
  "key17": "3tgp5KAmx6VW5iEn2uaTBL8pYn6xRPTCa5J7ZNoWAoACycgYazPJayjtPeTLDBGwDEY7hdPvsCFrAqKn7ETP7nxc",
  "key18": "at6G5sTLksZkvX6ft1YFVpJApjSaFzneVJAQiBgUkwoa7zn2Uyuatr23PCUFoH293tt7Z8QrgorA2xRqd996KNo",
  "key19": "2cWpHzMstX8hXSoryJJYzWBcpbew6VcFJMCbTTUH5cZkQEu8dTRvpje7T8XuvYJrKZ5hfkEnSd7bW8bsJ5WkBGpm",
  "key20": "3pbzsAyijWq5T3feRHbHLKtvo8d9WwevCHMjKpyTQ2zNRZygw1p4MPuZxCbdi5WcSjAwYsNK1aeA9Kbt37r1pnSm",
  "key21": "5WnrFhUdFjoNCACvHKbuRTGtHei19ZnhQ2yDwWLpFu5pQ1tQpSuYSz5cekpVLyJ7FN7eEpmMcRdF3jKUfgWgZGub",
  "key22": "488jnM5WjL3zvBLqWr5aJYPFcnZ5FPaUydjQKT9bH3bCju2B8EuCCuroAkojnfgrySf6RihhvWpdtaX41F26sgJ4",
  "key23": "2jjeNSEj4drM6rEJBWkTrAmRYmiGDomG3NMYeFR6KxV3wCYmAq1yB4AZLBTRgXhDJaijgGPMhWxju4GaWJE84K9W",
  "key24": "5pFUaijU7wnhtc8DcYkqpLPS7MY65BJtGWrbAfnHVuL1s5GDH8KeWGsKrF2CiiFTGkKMRDK3WkShipc2PRWkjspC",
  "key25": "3dCwZVu3PBixaJmUrFer6bzynfwRWZ5w2nspUk4CXPiGmNeJXsHNwTg3ngbQ2PhPTmggVEZhrchwNqxkD8G2Xp21",
  "key26": "4zZw3uwkZXxLrko3tsEEL3At5girFLxUQYnQeeWNcnVAQUEgtfUGrdrphV2NvAVPQAgSS7rBA9BpcrXRbdvsGbVt",
  "key27": "59c9dXZQLixcnAKFcAnW77QTNGLJWTAjJrzHYoRmAnVcZuduLL5yEpBiEyDg6r7Q4fsa8fzgttFnqXSzSNTFGVuV",
  "key28": "4PTc8aCNP2ZeFoJLAXoQnoLDZa1HYKddFtUACsX8j9EizZNsxCuoLsYhcm88SqXany6aSvMc5FcXkYdhsFSpxGjQ",
  "key29": "3Jc59kcTTjT85yySzpBVkGVA8KSUDU6MRXGEaMiQFj3br1z6b2MKdYDthx4UojPGCCpZ36pVfBrHxtE8tEDyxCcf",
  "key30": "3mJ8Vm5tSoc1kw5cFuYHKDnThe7KfEKasZZdJeX5dege685jmivxoziKdQogattwSYq9K8JptkmcbCBsX6aRVo5d",
  "key31": "zUTxFcMXmci46xGXhQygskchVGLnr8e9kes9S1d8X5X5An9uzw6RDnKf9xBtWtnHsGpFUZUfDL8SREV2bjZJjYD",
  "key32": "n7JDe8qgTZHmWjPz7f9yjF3EU6g24P5ZCx5skKFKi8e7uXiG9gudGK9ukjgM7UkEVENo5mBzPJfBtUbsQkeBsg9",
  "key33": "4tdUw5uNn8gXbjbVmRpY1nZdLJjW25kcMh4SPd9dZcYmWhYH9MNSjJ3i8eZVwNFD5junxWQsorya6GREGzBXTauQ",
  "key34": "Ndt8DEAq3tf59v2QcRMsJSihjJFj87zCKTo5wHD36xc5cAguQoXN8MBs9uZPvtVMQMWCQY724ZrvbS3j6Z1N2Vs",
  "key35": "5bDRoKFmeGYWgXdmMjVpNfeYTunmvGkUhQ38StEAVSCu5mY2NYQvHB6pKJ4Siud276fHCydYFECGo4B2QX9LpJQh",
  "key36": "2hqs2EfteVd8iDV3SHA3GqDjCgn99bADjYxLJBtanHQqqV1TUrBG2WFCSxaugh1Vm399vMVWaTVmkVyGrHUpDdpi"
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
