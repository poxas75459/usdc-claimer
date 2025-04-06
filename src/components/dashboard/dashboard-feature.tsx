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
    "5LSmtQdcbq9v2LziiAredU4PjQDZ6b4JrQXfcthfxh49cpBiCRfmMZQybYxpH7NHESVpTrRfCMHPivjZ3qTunHSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8zCtAuotFMKuSRPvRA6wWSyBgMvaybqbJ4cvcVBXnZSotRc7or4LPpkJYge9h4ZrMnW99o3doNZngDQdp9R9kt",
  "key1": "3kPiEE5xyxm6R4Fa7bZ452f4M8jgmh71HstNAQCySGoS9ZFXd2XHmLTRD5o72fCZy23dTdnPFPLFiedyG8qL6NW1",
  "key2": "3vego9L78wTjzSRPyAhZcTiZb6FFbbjhKp9RaqfjhRgCsvKNS9JxnCP9mNBQ8JrML1UcSAvs4dfraXVtnhFpFQDA",
  "key3": "4BGVmfaWk2BdA2BLwHuM8Duj8538xteMGz2ggh86KtSL3Mukebs56rRUVtCqzxiLpd47j4prYhaz95yjkthXmEaR",
  "key4": "2ofwKwtY8joGcQMnDaYntEw2buyuyxfmXyDXcFF81URhwTaSonLfJYbVuSsnrGg2UgQrjmKS3pSvdz9CT9YPcWmo",
  "key5": "5dYVgW9YTgPTMURWEmroRNhEmyiWhMFkuRwYdDAQ5EABx8HgARPvRbMa7VArTSjv1u41LuE5AZDDHcHYYp8ibMb4",
  "key6": "4vdn2nMtaGJNLom9HTWx24KD1yz8ruTM9XRw4Dkmrpvt8CKv6xCsfx57EjjuQfANMEPZkuFktKgiQ6hgWWTHF6t8",
  "key7": "5ZG4maGoSkFrTBfQzQu3TsNhopsvQbK1GKyF2AhLif8eYagoHQsP2j2zAFb8r3DKbJMLc2q34SYiXmiSs47h6Pmj",
  "key8": "bVxPv3ukEnojsmp2W7gMRWbAGLuoJvG71XiPmLbTgbW7r7xun1ovqDCWnC2e7dN16PzJuZyA2Q6Y7FCZW4y79zF",
  "key9": "3NrjqjDoMTqTftQJe9p8rJ189VqgMTyProZMVatTxBWuvdqQkpU3mKgxfDdWz2TzsSqB3Z3YrVT7jgRkUMfdJfyj",
  "key10": "4nyhfF6kNMhKJ8gqwswriF9tpbnLx1TuavuHjbTpqW5nwxn6rvgG2tbWT4UCJkxQeXnL2XkJdpe2VvATE7XBAi2v",
  "key11": "4BNBhy2URgatYLSBARg8X9dVXCtVyb6WT2QEMZz8wLf4qcyvkBYywHdzWQJwjQukAjyvw3ga6spbhCoX33b9HnZP",
  "key12": "5pPPt62LpxhYhnrFsbfLbJWRzEqokHhL9uHuwmiNHmJ79Ghv9ZzjnWKxv2Vev5Bk1sEMUjTsxLXeTnnEsgs3ejSn",
  "key13": "3EJyU6cDCvMFgcizLBRCNjT3BLAgYvvJFuMhG8s5UYQqcZFYhaRAHGYCPJgnF1bD9dohmLgB2swka57J91RCUgYn",
  "key14": "5sv6Qovzy9ikg5qPajtJxXgLkE6vWDWettLVkJynVdeitB3Jpb4PMaFUtaLxSR3H3HmyTvuqZ8bXUt4ADBbjA4m7",
  "key15": "4LTTBFMPdWtFgZCenavcc2DX2UMWVyZpdMSFL6AMPVE58NWqQv9fXg9FJUBBJAMpNyuUBA6DXVe6kFN6Mwrgqz3W",
  "key16": "2g19EtEfvdR6dPF7J9pns7fjQwVsExdQeNXXu7ajj72hkHwKnYTduEAVJ43yFPwNUB8scLUV5kymfo858MkfHmt1",
  "key17": "47iECsDC6YFDcEDDr6uwiLyfmUivDifDkgbQcXpvyxr61asnqxBU2VAnL5m6PXP2ZdUEM5JNMK9HBX1e3faTBELx",
  "key18": "8iDLPJq4Ecvk5Phr4vTcR2o2HpsJTbYBiXdt3Ao1DJUDx2FUDkKQrb4RZWD9LivWXgTeNe5fDNjShoBUEXBJN8M",
  "key19": "5Lp8hBLQRJphMGasUm7zB5St4xi7PztDu9B3fW2wKtLW8BQKTq3S6z9MbYzFj7dE1mQXJhUCn8hBL2qpgprhAv5N",
  "key20": "RMkW6rEYvVW8MZqkcqAJU7J4zye1rkH3KndzKVt5gPCmBCKP6FMzxcbcZQqEUb2RvGsTxAWFxmFGE8KVWeaVozi",
  "key21": "5g8baEGynXoR2La5seAr6Wk2mWGpEeMswTFQA1Ghyx8NcJwv5peg6ntfNvi7ZUrWKw2eoYn5ssuwWVhJmaiNdsKh",
  "key22": "4BPHBYjBJpUYdRhVzUGSzfJyAFYzU6eJSEdtp4ThqPNw7TDKBEpB8Q9hah7CT18Rg4aAoQv8LV3hELTExaTRXuyP",
  "key23": "4fw2qwYg3nDSP4ekZFyr7Zu6WQi8ecK8RY63KA2EBBpgJKEiyUvAAkD4oMZRDDf7aRZdsenSth5MWbChm1qtQLWp",
  "key24": "AEps4GR1u8TsNeq6C44tGZCBwdWTSBDx6wEHu6KCC5E4cFQqcMyX3bQxGLEijudyqyVxivD8hmpgK9fRGNo82wJ",
  "key25": "3MGoHcsesihF5LZ6jp1bF4SNiFUt18PqSN6cM28cYqwvsuFpBAnWJutKSj3N4zsCvjHDAEL7oCpnHpQ7AKrj8bsR",
  "key26": "27Rrdk3nfsW5PeeDdPyk1nB8LhERDvM2qrfLN8CH6FxPBYMTd3tNJedvqZQR1z5V2PBwnTA6nC1nbDK4uHawnxox",
  "key27": "5SJzFva81WCJQKHLevnsFxBVjCU7hB5Hxz3QFJTWQiPB6U6KUbRbayMjYRqNbLnM6YDKyNSTEVwTxFpruKABurMm",
  "key28": "4DjKtC6bqFeHRWJwhTAbrFYYtfKTmgSeGPPJeMGkNwtZimgAUH3Qn5FMXrJEk4MZQepVPdPSXeiqxbdGRC6kGkZj",
  "key29": "5dFsqhDGqXykmeyQpcfne7E18YPQMoKFK7oZ8tq7ez9mWm2ELaM7ZD2Qwuf62BTLu3mUdgrt32PQZcDW3ygH9PWj",
  "key30": "3hXVYuph19tZYFced1KfsA796ckJ9vdGiK3gPpXzSFeXzwGq3An5aWGCKQYm8C1mGewNj86KjXx9DnK4t11xVdKt",
  "key31": "2cUtJvj8KFX8PKUCqcTNQBNvKabf78ZQcLorf5YScCj6xajcLtjhSBFAh5hNbxdogpA9qM55rKFGy1rj5irhK9XP",
  "key32": "5F7UJ4HJ3X5hetuzBoPKg3kmSNeH31hiaJdj12hupfAWa2CiwcmycdEk84LQnECFVgQe8UjE3Q8CDdhQmu6hHdWC",
  "key33": "3DdG91URK3DsFujtc6APmRmBpkb195K2N5v2QbXcQoPWsWfimUzHqLyAhJZNNqVhkciHekn1ezs5ZkuA38BLSp7D",
  "key34": "4cTzq6D7bdHVu3dJS7VAeJnNJgpmESoTTsLDn11bXDY4Hr7L1Ea9MkzFjvXJADHF1TCe2o3v3FyBrCEJm699PpfD",
  "key35": "MsxGhKfNEdp9crN2iQrqQC2afMmNTAiFT4sx7BdKSSMfNreqRXNkpBJJ7ncdtLx7An9KhN6ZFe3By4CtS2KUncw",
  "key36": "2BbZC9RvA7UYA7Jd9x5xxoAwQd3G56h5pdge6uocfdcvW2L5k28FnCtaB2z8UFqx15bdroX71PicF3nVUX6mxwG3",
  "key37": "4ytVmQDCJDrUNsZyJdbLUxnFtJjk24fsrt9woXMeAT8Kx75NkKKVTsEPkomASpxmUZ86NcCUmQ8BrkjwFuJqBugj",
  "key38": "59YLnZxu2Df1KCZPKuWJCMdhUP9KCPwAxW6Kk6NJhCoAMEvFkXv7kG1LweY3mf72HwqWN71sbtYNngU9XUB52Y5M",
  "key39": "4rSySCR5RRimtNxy47XQvQkZ7FqydLqiVigiKCueckdtzbQ6ngpxF2Syfs8UAk9f4nWq4WFaVXsACANSNkR5ePoW",
  "key40": "Ab6xzE81sWRsyHCqAgPsBYiRHVbc17oBYkSQh3vXAmXZkK44aisgjxTB79WguR8rvkw5jJLXSrs85E6T3BxBxDV",
  "key41": "2anH4HknSWtqNXxP41vW4hTMPwPNRemTraiN8enqANiUnihBtfCMGFQCL1oABSz6qVdfwiVKBQ1CsuUc7cExw9Mu",
  "key42": "4xLV4U4fqKec7vc5ranN6Xz93ApYmoX9WvVPpScwTV2GkuehWdg89CF8zhWgLo8B4oQdNC57f4jAoDcEmXk2bo16",
  "key43": "2knA9qwLWLYLjCDMnRq6YZFyqLHHn3D6CVxtntcPFWPoS2BKQZY1qewWQKDwYmXWxmKTPLwAf9H84AAD8WvXXeJF",
  "key44": "5pp2rzSSNvhJcqFQ1pygJqLE4xs75YgHvgrHdxpjgRNGjAazKU2T8Vu5hc83vUzYmcZ2c9xeoduK2EKMoyVStnmc",
  "key45": "ReSmfRKK9GnpMNsFh8dQ5TmqBtVUV5pF8A2y6H5NhST4M2dWsk7ZZhnH9obHggnVH7fr4hcXLhkfvdciSfWFGvE",
  "key46": "4WYe5y2DxrW1UN9c58nSScjeefE6zSNT5chNxfnZAPH4MwU3TSAgsPo2nF8hmiRYR1Tp4kULBw6YmeMMHnXVtHCP",
  "key47": "2kXdKNitsLaUFausLEWXGDw61rNBJWNm5Jgf8bmeF7BrHE2xwPALrvLkdK5Kf65FGrEfxZQkcUwhCck8x5tLb253",
  "key48": "45FLbxn91pbDy7accHx9KMZusGF9GYCh7D6eXiytTq7eoExg9Ef4WZax5rq1XR37DJ5G7KCrR9t1deCnEQf11t2"
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
