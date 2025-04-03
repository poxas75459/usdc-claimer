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
    "vu75XPf8a4vLzRWCaXFmopeGkK2T8hnrByJD5wgpPBNBfVLNLt29Lc1CEd3QTvumdSKYUJBVYBPeDbStjiqhFUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxCLgosHuMwpRT9aoh63nyPVP5uWy1RRkG3yRbgMwbBZTfpyww4c5Nq6DjAH7xMmpMeNJTFztM3GWk7w4ah7BeE",
  "key1": "3jD9VKfbQqs3yzJJGGV48h9nLBBby86KiAYXXg7ZugZ5G1t6bUCp6zicVpzerxxiETxaPVeRrToJFfedZjhDxrtm",
  "key2": "49u4RNSmfFRVXBpYUqznLoD7NEM8LToCW2LPZS3nGYXivFDxBhPqjKGwPy6XYNGxzzdx9ukXxP2bip2HQoFCdNuy",
  "key3": "5UNZcTcnS3VdZf5uo6JNHYSDxwoWHDK9HYUZ9x78S2oNeX6oRYAUeC7mwD9AR51AUtN6bXeSrsxnNNP29MkpCTyt",
  "key4": "LcS9buEyYkCoPZ4eXLrC5Kb3vAuNgKX11c98hSjtUMZxeu6nFuhxuH1AQFBr2HU7xFd9AZGMrTx7LUB7yGcwFe9",
  "key5": "4vPMCLt2eNdeTk7DeeTUNb83HEwUCgK5k6v4YCqSkyMCnToNXq53etbvkfhqPzMX6ipeGYCQVCV8Rvg4MgMXpriE",
  "key6": "4VMpQqSKidjZibiAYQijZgq4hXt3s1F2dA8zq27EvAFXiVh868bjoLYnGfppBTaJEYGpvRFX71dKRyN2AtikvDhm",
  "key7": "564y2ftnqvn6JjbfdJqC5zgJA5VjDFYi88UUEDGbPjmnkseQkrwKkJHKqoNHKkrFLk2cjWuea2pLBji6M2dRUQoB",
  "key8": "3oKcwrtKxZXMLpL8YwFTVC88LkPctpp2p4eRSckChrA4BbGYpK4HnRBUStQMVwPJkukeUcCuhKK5o7K1mWDksfEk",
  "key9": "2tnjXWvQrHfC7D1sUrjPrJg1FhvZkyXTEP1rwFeMVRnfxfJ2n6ia9ZuXin7mfC6Hw8oAaktSTRbPSP2Sxk5ZfMbD",
  "key10": "3iHPcfzdbyXbN4bvCFBRfAsvLgAu3uB1ABRJAcA2fQx4tEBfZbGdqCZPdEL4HjHNB8WwXuYriAYguzErXukuBvK3",
  "key11": "5b5ZKXDBHeAd85Rh8YD3Rhrzpi6pWRDXjEeHFrcLoQddf79bBdJLvciYt97G4jmHyCH6qjV8ZpyEUYYfUSov1yDu",
  "key12": "5rQYw9wdufYVjan2GK7aAAfKN7wrQvNFH7veGaSPFteab4m4gtd3sbciwnP23DA1xp2cfEYPFhtxd8c367r6Gw29",
  "key13": "5mL6KeascNBeMMoS6YMhEFohKBeHn2TWFewLjMAbziQhJ7rSVJuvPkHZMQbystRZUmfYVwAEkiu4ssoQu3iRA1gp",
  "key14": "3Y1We2inhNWdptjKDXwT9xxqDQzYaLWeVgADkJY2dVme18SHpayAEdz45KRrHrdNu6oFtH627MGfqoyoAUsqyWHi",
  "key15": "5D7sqLoWqHnXxvZH36d6T3773jBrdXSoqRtGx8GcPpAtNDQZtSTr6452vZYfQGVokKG2isutYb3xcbUpC92RSupH",
  "key16": "3xuUXyZnM6fBhbvGQLR2bR4V58koX3EUrSgShUA3CywHM1kxyixi9mPCneSFgpfiamind1SuTHLTpLmXhRfdKwWo",
  "key17": "4qe8vNV4zSGmMTBEWyFgQ5ACDUN6ebiirpd5yoMwAm9mvhsaqheXSx7q2XvRKpBoE7J8hZjvuN9MWuecXuwgeATq",
  "key18": "5yuViYPnxAnGRqg3dbeNvV2o6fDBgsjXihAom8uYP3sqDP4rGbHKx99A5cx6eGEj7HLwPKuZXyEuQtjNDC3gBfsb",
  "key19": "3otUnmpxpLFxnR6Ta4sA86t4B55mwGttVSAjSR94e8HJFGtvPBX8wnJupFEVqeiRXJRW2ZkCa7siyanx1Zz6xMuF",
  "key20": "3Zkmgi6W9DK1rqXQNYSzPZpweQYq6iAkgMc5R1VgFyniz8RbU4PqyqtAywzfV6i23UzykLjGQA7E82bQsHJYY6Pk",
  "key21": "5fZ1tjbFs3MThDUK7gHh8kfTntPxznryZVm83PdA5oSX2p2B2yzigJckD6jcSuRt5F7ZTFTrkJgJmQpiUfkfy7Yf",
  "key22": "8C5NMSBihKENu2V6unYBhwAQW2BpKdsEmFrix8c6uyX2jy1TGdUgkqciFpuBhndQDRXNh4x5LTZ1Rh7BgrNZpZA",
  "key23": "1GtwVrcyCznKrQ7kcXQHh8M4Ka1RMZLf8DLv8doGr54x5qcBEcPR7CfdQJ6WaUmFSZstaux3Q8YQpnDTcD8im24",
  "key24": "428P3DCzgFhXRBeuy3TrfU6KUviqynPkBjhYVEh1zuPiSNV4nu1hN46pBeCcUVGHfDdSnwDt3NShfYCeAa78eYJ7",
  "key25": "2qFtvGMy7utSPhhEMoM7cxYDRUk9jHaGErTyDctSDcNXyLhGp9sWnwfRHnwVfnUZhUQYRmfGFwdkNLZbNJv12jad",
  "key26": "49BdobSH8TxagZvKC1odphDWiLtH8u9cR355WkfQvCvpRbP39LfR4YFWfHui7DiSAHSetShMkpain9UAUq8dJouK",
  "key27": "4o7qtraJ6BziQS21FAveBEBjHCDQN59weaCn81xvYM5HPhnwspYzGJiRMEi3Gw7LRMkzAzEujt5Sf3dWXZwbs49a",
  "key28": "5HCEb4TeESXisMepkruPNW1Se9pBpjSu3jrDc6VVJGpSqBm8e64PgneLBQhLCfo4PQRScbunS6qFtSoZJLWQRLhp",
  "key29": "3H6KD14W5xVzL91NH8LEMNmdz1qQTwss38fy5NgqimmfA8ALMu8pA4fNihNkmAn68UvzDQRNKmUd3G2Bxt6i9Cp",
  "key30": "Zg26eHrFSeDrHFLfZkdZ24JYdNo6Ty4KFnzG6VzFkSTnuHoRrw5sSAU15hTFXCKFWMi2YYfbgupp11EU2xhfXnM",
  "key31": "3pVhMNM4NVUbqSXKMchC7kyQu7eSNS6Vu6rsPcPGKMFfjcWiNK1ZcXKbJMiG8YhitsAYWbLhsYoFf8HqHqJExhvN",
  "key32": "StagxMkhQ21zGVwxeKZzvPo2mJ3zAgWzGwCACW6PP8tYkK5wVKbbx5xhsaqXgZaowndH7qZXM4JaovLmqMUFMRE",
  "key33": "5VLW3PF3XpYCh5ZPDCdcwZDkb8pP6pEThnW7Bi5BYApAiw1F79zxF49DggNh15xirMuLdUUERCx3YmKKxDgUUGMK",
  "key34": "5n2DeanG2GsWbhjvz4oKssqgBnKw9vnaoKzFGdoQ4DGfqt6jm9ph3YnGeky6vHsVCJHcA9MyypFSDkvQ97LFcioW",
  "key35": "5rFqpUHpzpDQCV7QVkPPHMAQeFbxb1hF4KFFkzdmJiq2L6JzB9owDkmBPtU111ohwRGFtVLDgSwnQBs7uUkRVJdf",
  "key36": "4jR9u4mL5pDuDkRvstxWMiMif9Jsq4EwthUFb1xiymtgRJgkdEnUFRc5Z4PsJuBGHmN23citZ9qicvs8HUU7NjDU",
  "key37": "2FcyoXoscphvHPjPT2Lu5a1m3bMTwmvFKopdSQNxyC6oZ1apP1CVGsmhMKUPNzGPsv8Tdbmos82aWzuNp2yRKZxo",
  "key38": "5D37YDFj7S2TZKJyKwhGAg3hfRXZtG5SUj9mwr2Xi57GPQpefVEagRoyDnRRWW52SJKqWK9CvD6moRVNGBbHm6es",
  "key39": "2NfY9EjteVhrnWCPnWQcEFqd3ZQ8pi9iRCJbvHdD8AZ6xhCn8Y3PAH6Bri1m63no6ZGAr69hjp7W6AfMPGPtcGQy",
  "key40": "3fpQgyMoa3N6EVS5JqaA4eMZHUU2LzVSgjaxdvUaM59Fu5z9ZboPxKCeARP1BpM4hxDeUtxisf88pkqsNsRQGLdL",
  "key41": "5Z78pfrymbvXonnP1cL7YNfx3tE7mx9E281MoDej9Ldp6tNBie4D2jV2DK9Up5Nh3A49cwd863wXn73Svtms4Khs",
  "key42": "39UWDwBLhK3sWZy56C2eTw1pqx8N98otUxjiCa7xUB1ykkjyuPfptyresraeQJhwFdEqEuCoZnC2BWomTbYF3S12",
  "key43": "3AKvg1Fd1w1Kr4rtscptc2gHjMjCr6fmd952RrApcjkoYBecQJZQhDeZSJeCeMQvSVpASm95uFqrJ9wH8Jhov6we",
  "key44": "33EaiHQCsWsnsiq3bd5ppuE4HU2YnpkLtb9ZGnonBsHoaNMpd4DuZXUQoTHCe9X4tPvQuEGCXKUGYAFWvuG4JXVq",
  "key45": "Xo3QYAnRSdjV9WqMBnHpExLRzTBAau8SnFHJ5PgMa25QxW8ZLWApBYSHA1u9FYH2P51CacrwzpfWUQPY4ohM76C"
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
