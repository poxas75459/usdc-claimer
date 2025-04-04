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
    "5nQWpBCgVLxsEQG7pJ2LDjuBrbErLQFL1R9E9kDWyJMJHpFimTMfzCAAKJUFiUo9yaeF5cnd72rg9EVUGH988TpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tbocKe5PwTESen9NLMVmbAvu2ef1HuwJWoggyBcrDLbcr9PAZQqzXmWhgeUUipewt5wkVYvTY5k5UR1YYXCxri",
  "key1": "3wVmFAKrhp3JKFXLSMdi62MuWB5pJcV5TtYQHceGsb7kWhyPQ6KzYbkbTAbJs8NZQC6impbrJzfQg9GLfJCQexYb",
  "key2": "3hWsNT5wDYpLHFkXo1A8FAQWXTPjEd948sdaPPpMZCRAdKEA2RizCoBDexvuNBysa89BciNw8PpnqdXkU7Un7Dix",
  "key3": "3GS4vJzXEyRoP3hduTnMMR674wdYnwaMGb757PLx7Hou9qoNcxSBrPicAcUntG4tKudZGvFNJ6XCh64HN9DFhrwE",
  "key4": "2VrCRh58HLRNxDZpTdtNpx8yaALgvF3LMSLWgi1QkiHisT9J51xHtjkAxpka5u9V3LqGNvNQ1bgk6axzhF2j8z1r",
  "key5": "4StipsKqwMAvdbDFM5WtPGJqNTm9JejVtSMJh9E1X8FpZvRtuceYZZRNN9wMoT48MhqkFgn7XmpvoArNmxorqQXU",
  "key6": "6x1izsSShnEDWJJhbqwWYC2e4owHh7tgv1iuXYAneDmtBrs4Qmd8ZAAkwkTyuJZCu5ZVb3LkWkr5zie2pTBCKFN",
  "key7": "4sMw9fganWLn6og9P1wms7uf6g5xuzGK7HZK5gnjsxGPmewoW9fsufYdUUxV1499QMG4VJm5zsG2nWe6hJaHne5L",
  "key8": "3zgihKSawwvf36t5rUAhL5rARDC22Wkj5tKeBE9iAJ5aibaxtdSzQ44Wf2vLbY9XUP8YbWaoA2B5FqycKn8p8Ek5",
  "key9": "2vGRFEBzupWg45qkS1sihMJpTrd6z46P7uiA2Fjx3fpgnNRgGjcT8MnpQjsrWtoxrtb9niR2YBXeZXucmQHeoQG5",
  "key10": "JmWfb5SgJEN5wvbaAfMCsWsqmfJvYwpevZbDpeck5a2zDXX4LKrVSEKkNLE2jkrtLT13jPQMhbaSVaYNnPe4DTz",
  "key11": "3dxnPBqseq444Gkv6rUu9qMvdjtdZsX5YhGAwVZMd3S1U2QgKL6Yw4UdHFFSV4rkuE3KEyMXozxUK2rAZn1Lgq8j",
  "key12": "2JpJ6YmXC5zmwoHZTwQ4AepasR3PMX7PUhjXMtrDz77LntpbZZWiNWzaoDHG2Q3VBZy2pLSgVvmv6fWLF22Txyss",
  "key13": "3zFNFYQnLaFQ6e6g3Evfns6b8PQ7grDyG4BBQkWn3kjN4zUoWJyJcRKvWCqt9CNMZ1h1s1mi6A6Xq41uLMGA9vD9",
  "key14": "64p2GEzdkaC9WZad6gavDWt7CiyWtrTCe9gPTBXq6tqWkvKW3cDcBmFFLcFiGXfoBATGJyTVFAjPcfiZNYZqZMMf",
  "key15": "61sDNBrw5Du8ZY3Z5yqxT8xoYEH4XXfDfDC1wQCZ9tbDn1yakyPctG5Kmd5eXJdXNJJowX7kM66NsYtUBxqe8BHW",
  "key16": "4F3tpRKPeUtDkjLxWWSKwYFToeXZJqahLReBwZyzQwdkutVGdB8PUFk5Zjf8r5JAqrqyA6ZkfjyA6LUziAC64P5N",
  "key17": "6cUnU76GSdWbrpc6GDiHzfo7xqNTXqH2HuSzc7yB6NCP7kBqaUCzqmp3DXw16yAzZoVD243JHSMvjxEp9iXQigS",
  "key18": "5UGPHkNzsR4zjBGf2vgd1VXtwrJM6pDKbwib2d9io6ZVaBX1br9JdZnmHGc9VCy3ckrFtZzVGWmYd9nYBunehbcH",
  "key19": "25YAS19KuCJNkVnaGybdbjGELpVofuj7U6Q8zVy9m35wcvt6r4nqZXXbqutjnQ1GEnHw7KaMzwqcwW6J6zQ39AkV",
  "key20": "2RoKEnsYfh7E967qEwhhdqwCLv1rx8fmGpmnfExRBMY4L3o9dyJzTVB6dFNweq9MXJ5mD3X7YDgyqcT9GQGy4wec",
  "key21": "2hmQixSboBknNDN9CFT1bqHLNqVKGbbk4e7SJdV2amVz7YTZYYB5w5C1dwZxnyDvcfAHxpjd73yQCoMwBosRPTbJ",
  "key22": "qgaieFKoSVJc4LsT3QHFYZX9aNoJkFxHiGba773KpxEkNT1uanzPAGyHyS6shALGYLUxQWK5mmc7JZTnhCtDtTh",
  "key23": "2iFjtuEnsifDHsZxKHzB7x4WkT9EQed5ohUxMFHFEyL8noq1CsXithF3SZ1UTBTEzwWDU1EA1DicH3pS34LqEAbu",
  "key24": "fpxww5rtb4rfFPibUjSw76HUNH4TyHV8mSNeq38xabLS8L6amEke1hnEg1CkDwFjY7tjF9BQxV8Zw5nW6uJ3koU",
  "key25": "4kciBgDrVc9moXVzjFQ5FhQXstzWpwEM16C2e7wKuZfSgTSNNHZKs8k3xhoQr99kBLi8NuQwYugPQYBxFi19sR9n",
  "key26": "SuQUXYVbR5QhpgBmLMsNy1rS3W2GmRrRUaRgqaGgjdUDYXa1u9bH52E4de31n1f9tDfUrVnBxgMyX9o3GCdTyc7"
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
