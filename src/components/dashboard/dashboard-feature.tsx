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
    "27ceJdTjyMTP2UWhPEte5wiBzicVZ7owVzFSXZ3uiL7ngWfpgC6RcKewU53XgRgznUQZBB7uqDK9UqSXFQCUxm6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbAmnmGESrwWtD9VUwuUH58ffS37w3hGxcjiHxCtkK56pzkRw3i4VyNj2uvb2CYLPz9fWsurzBn5N3qkddbEjn5",
  "key1": "59eFuQEXFvYMxcM69UYxfhcatX7oFpG5iscn4SaRg6Mzr9joaZuJL3Dj9teCq5EDpGvZf91Ptb5Ak3VZ7L9QnRtL",
  "key2": "Tv9y48j6rtW7tfmw4Q9Wt21xLbSxmdfeCf9ZojqkzinJfsfCMBQujBNV881n8xn9VT5aTGcAnhVp8PFAxwwKhfF",
  "key3": "4Q2bNzPZ6LZTCLdGscUsznrGSGxtX5E4R77dtVuz5yJVgvgN82Si8GzHe4kaGUKPjUYMuFHtij5e4TQ8tn4x12MK",
  "key4": "4USapV2SoMp77onnahPNXtXcFSw6KktAaCDm361RwkE6NPMebBLGjqgq1STPrSduqZmtWbkRNf6YBHCTvBFLZdnX",
  "key5": "3AwgxajY7AuzXnXqbr7NVakibko186vcvd1BQemjMsUBxdFEfDVgRXdeYCFPJ6HpuBfGoyngpiSCBvACS9zv9g5B",
  "key6": "bxNqyN3MWnwGVVSSC9cLQWdBo26q9qegRnGTEDLedCFkt59K6CAMiDpSg6AAuaVgmNCwZKriAXgbMN5k6Qetw3F",
  "key7": "5mKcrQJkfU6zUM8ap585gQh3kcSZPGBBUKbUaaoiCqcU4xEDH8Ffq9rZZbgjjvpm4pybHTViG1v3rJKZgBRuKVTn",
  "key8": "5A9RGcfzBNS85crvZ6x4S7tEYtBjvfj4xfUVjjhm897xeQRzboF99VhqyuVb5yLiajAaEX2U3RgsNMiSBPuWBgnR",
  "key9": "3ayn8eSkiJvCCDpGMHAGhn4gHfMfZGbVxaoLPHcCGHLCbRmVveEhkoULcNMVzZUKJLQEzThAMncjD9ZnW7exc9Di",
  "key10": "54zBvrqkHfCytqS2JU54furzpDmAuPhBtvkFGh3AdpTXJKT7RN7iZHZcDR45hBgBxVQoFdU7L65PbkUAanH95G8N",
  "key11": "5rfftzRmo1cdjwVA9rABWmmL2arNaU7duqcJCF7e6ZvPUMn178JfWiyqboZCY43Pk6zU6HpU9wvbeaKEzPq2sUVe",
  "key12": "Z1nFLtJNGrgCAGh2TY5KcsCCqBbeV5bmTuoVnbyRJpE71nxuitXuHBPupUSPT9RcanoSsgautmNgLFyPreUA8XR",
  "key13": "4H6LLoZexSiRCpeFkpoXpSo4Pg67mpPtXy8pPjwsX9bd3y5FuuBvkMeyUVfBz362gQ4qyZrC8eQaiSUzCctSctz7",
  "key14": "4wCSXb1fFvLcW9RrP2QET1rqgPZhUaf7iaXxPXPw5Cit9XTKGUThEBpZHoFPrQhvo8jgiqLRFmXsS38nMVQ9Wekp",
  "key15": "rbiF3WfbXRXstzknxJHhqkycV6ug97B5TYyx1Ezn8DEJVv5g1nnxjBbh3CcYhPWd79DLXdgHDuLkiD5Tz6scFBG",
  "key16": "2aMabXKyGYfpUb3ct9t2gwcV6y9DyFYofn27SuU4DAZk9y2PqXtbkP6Ux5w2KhcCWPHJGPesW1r7snG57EjfdehE",
  "key17": "2iSoddkizcAR78SM4J2md9zms9SJrSNaMJCioJNnGbW3vsbNEt9RCkgXPwdRSh2iYmcwEoPqiJsSKsikHUjqn17y",
  "key18": "3jdTTXphjqA5yxfyihE2iNAGULhs2y4Mhm2CXQVFgbp149M9HiWe87g5o48ghFMVnbWYkKbi9RWwdexVJyoVN5Fd",
  "key19": "M6DNSuCyVW9StCp1qLnTH5DdJYYvFZecKhgnoCeFDHDGsZc6rVFKPDrNNfdaJMCeA69ipYNa5mbUxsFzL9LXwN6",
  "key20": "GFDT7xW7ws5vKaKNZ1u6MQFUN1x1diioZxBM19qEnxHY3MNVzje9FuDLzJaFZ7T5KQwoh3vPnn8EC5r8VCH6xEu",
  "key21": "56Gd7sc3WV9s5kyvumyKMU2BBeTTtyPLT4czM45UV4VNXS3LpM5SnGoCLefWuhBm8DgU82fhE5SNbUSKkRuw8xRh",
  "key22": "3Zy7CPJPVxGs4ThuJwwULeb32DZHeoDRWApt75UJnetXHagKYnZ4nL2e4H1VYHD35xBQabnhnKQsQE3CMKZ6tbcN",
  "key23": "2AXcttgSwrQDsJ6fcway1ggCyziUJPDdVPTMQj9FSbmYGrrjNMPs6cfV3uweq4ZUT6nQNUjk7KFA1QaeLmiCcT3H",
  "key24": "2ghr89eQ78ZXBo6zw18eYTCd5LrD3Z6o2PDAYBQdP16jyCiHWwk4kz9HyqG73PV6iH2181JXLRhrmcGyRC465kED",
  "key25": "43AVFD4pr4Rn4FjFJ4SmEDU6oTxnWeRFRxST9bKfVLCgyQ4KvBZ689uDNL345b7tE4axqPxE8UioHQSpoBMVdTSb",
  "key26": "3XcxGqSWtvxioYyhvUuu9RBTypEVhx3byfL6nkn5xHYpvY9iB2RR9gofz5HjsKcyAcvvBvrzjDGKFsp1nTAGWt9W",
  "key27": "3AqM34ezSbVqijDHgvBCmzvjbCoHcyDpbmHVZ3Twibbh2gGyghx5BVdSdvzSSQZape31EoxPcT259mXdmNuUxn6Z",
  "key28": "3S1dpMTmjmMqU7y55W3GtYtYWhw95cwWx3ZyYN4s1B4MFLBAnyzBYmpxXhNcCi7yf2SSphxWH3Kia7B5ZaLdoqdm",
  "key29": "Xyxk1jrENtqoHGJrYBofaSkYhzx7Bmgq9dFtbLYCdazYVbwyR2yXTMeJvWLuBPR4d69gVtpeKXcNmqrRKPgwT6Y",
  "key30": "66iCNvv2XduY59CWSKcPkaBrErA6YaBViRCidvTn6YQhvUFFQmbiKYp6Gsw7LZBaau2dxLgkwpNj7tzXNdLWNCYD",
  "key31": "Dqq7cqi5a5e86pbMFdyUmjf64TVDPdk53rxv1jF3XHZgZpoS4cTnvJXmkYcPAcgb1i9L56kbYH7mTmzLkxYYQpz",
  "key32": "bCXGRV9D1QYdnsosRSGFTUG2rdWsuhqBAKk2HtEYsP4cA4v7BQCRFKxBjsDzNiiJk4xrcptEhUAgMmg2vnDHL45",
  "key33": "J7ewmzrctqh1v61D998QrDqYGktjtY6V7Xc2JU64BqYZUJs4eWunp1wmwGNvaPoYFXyoAVUZPXvPjBBonC8ieox",
  "key34": "2797yjgkTaa1XuAjKqneeSqyKnNmkGXZ9qUQed9zzjE4vL8dMNy73GUN88qp3mAYFULwimh811Vsd4sxcNw5UnFB",
  "key35": "pkHd77rnsSH7DRUSfAkQ8HsvsUeLr8JGKTixXuw4nms7ZbgkpwHqMRkzYa2R47b9PLq9CVhr5YsbAokN8vv5T2Q",
  "key36": "KmDFHBaekzDbzApjL4ymBhFbJuHfbPv1pTAx7i5UWi79uxF86DrAzKcxiTTRUU7tGnqEqbKZaobEJEPTMJ7PmAY",
  "key37": "2fsMrBGmVJpaB1vmHWctU8gCt5SGoRu7LnEVHQ573NDHtw4kJG8CM9YKu37sw2ynD6VyUW4nDo4i13vMS56RkM71",
  "key38": "67bvQUaJoSU1KuhfjzruQfFqhKH4NSEnyEz42PmYtFYnip2ugzhcTmnUo19CANYXKkENvH1BuWWk4Vaj35GmEb75",
  "key39": "4duCENCeuZ9kwScFsUojpA1xz3GbpWW96fpsK1hyUsV3BFDTU9nrAi4ZTHePjJktn6uU93mZE6rk286kZSRjMGQF",
  "key40": "4PD1wcEtsrchthzr5SFvvwPUS9i5Ta3hkb5UUSRJhdAwwCraD1w7go1AWghdzX2crVXA3xsLF14YmonDyQejsWEZ",
  "key41": "fTPe5cgKrJE2oGDf4TEZD4YYzDSRBvKMYSFSvG2wuuQPd7UyAgojCrkuhosLupL8c2CUqzXHY6w4ZZGLmiH4t3s",
  "key42": "2XnNy66broXrmGBHcxnXpDm2Q7CrdQVN9Af1EBpbe3ftSWNfcVYLcM5PvxqJ4uTxWJ2M7VZf7hHEq2Ji5gzYf7pR"
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
