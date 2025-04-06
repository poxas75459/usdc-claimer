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
    "63XqDTdjvdWeSyDwV14MzEdEPrAdoRPTzEjbtaB2TyY8Hy3wK49jhL3ydeZMksZbfv7cYxWghuXWBMh4hnoFk6JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMtTmMuK76ZjKDLLvxwDRVojCEcsvEb1LYPUQNAEiWLoadmHCDzgvZtKTDztuRSgtXFoSp5R3Eep8wuTXgqbRky",
  "key1": "44M966wALsvMKDbf2xrkZT9rX3mxTLqZRLFsScm3vWHDaoWRcygHCD8AZRNpfVXaevbzCScHwv8cd5SzaASgmBHB",
  "key2": "5DBn8aLguUorY19fM3bmKt6KstKvrHDoToVTEn2Y8WKZc6UStDSrgC4S4Nk2AThvSqJ9QneTARUkM4PXyWgP5nSP",
  "key3": "3gaQzFTa7K9DYY7eTbrTnzWLdXKUd7LcGRu5jX84txmYuwVqmW18xJT4qL6XiZyHf1ensTrQXRx32EhXzp53mugX",
  "key4": "2WUNi476m3xu8rVYWy1qZyKhW8Zv2b88mnjSAfrRiLLnMfRTpAstJttX3woKbNp28VRNmw13nDvPBvfn1Ynzoepi",
  "key5": "3E89WpWEsbKwoPi3d9bbvqgJAwYvoZSH8wCvbE3BxMmnNuePPu4iRMHqmnhKqAyLBgveQSbPjNMy78EnZMm4nYWs",
  "key6": "5kgisvfLdR264sW1s9YJuPPsxMpQbYD2SHQWrCdQZ6N8AguL9n7BUGXApNA997XrecGqNQEop1qjRrFMPTWGF6EE",
  "key7": "s2pDE8uJiKDvWCivy2mAzVZxTbagHKpZB2zic6PEKYKKuvhVmCvEmK8gpPF2z2zVLBucaqFYjAb2qXXg7kn56Qi",
  "key8": "2A16hWWJd4gvzc3sLWG1CL7AynUUtvsU5GtVCdVRwDgnAzxsP77GqfhMqEjYhMgVCUyV9PFHKqaDW8wkEBMH1R4H",
  "key9": "MotmoA2TpUDeWLKPktx7XgATCumEpp52P7ya39KdRf1mqBB2DroR5VvdAfiY9a8TQeHJs5DAhbSrU7SeYA1JLyU",
  "key10": "2DWgsYZFfQSgegst8Z8Cf6o6NU5oJg1X8NwRb5K3irCWCNdT53uUWwK6YuRM77bNd7GhgwU1BTbR1YDD3JMdbu8m",
  "key11": "erHty5BYjNfAFPm9Jy6EbZsa2kcqvGsAwURA7tQrXEyW5hzcXThLex4jotr5rmD82jxNgLPpRH5VQ6mfwQb341c",
  "key12": "2ycBNRe1utN72fkc8NRGMdBCeXNkCxFQXE4w7PzW7V4EgKwtpgyNyAqbn4RJxvPXM3bC1bURkUBx2HNm51suncrF",
  "key13": "4UUzyGEh2ZwqFiP4TcyNHHWoejUMPCyroHrMQGNv3cF7SCTrARA8RfQZhiyRPTW5MahTNsZ8D3dbi2uJjMfVDH7t",
  "key14": "39hBSWMgXX3P4uq9qSCvc9CJKgpj5gaKipqJ4z9cTkeAK2CmRPRUjdtCK8fSEzbrRpy6h4pgLPCTkLdGyYmHazBW",
  "key15": "4YpUs6wRK6xS8nqySaK3rCR8FzCssauhGfjJMN7EewAFpnXjbLmr8ye8NJX99R1uR877XRj5N98ucvW3vDC29Vef",
  "key16": "2NFpWVbU3n2PFjcdx1dD6CBuV6qfpmJwLdWbRb2hNwY41tJimxwY4Y66ENQdZyZihgP5C6kTmyXgC93MaRFi8rvc",
  "key17": "5cwT8cGrqJJreu68LPmREg7A1FDVzifVgz72mHasBGjEhL8xmUC7cHsHsUZWqrpWYBTEaytYd2UWEjWo9Y1zikfS",
  "key18": "5U7SzWr2fuyTDkoRrJLus3TqosfC9sLFu2ZPYDnJCR98GAnvHmRdxJXDujXSyUn1SrQBfdUshBxJbVnqXYuZj5St",
  "key19": "5uAxMmkCuqaPnopBpAWMsopTemJUkNYagqohqEFF5PFzrXQRJ26HqpUWspBmrcSbv8fsdaANL9cBCWLK7JDyKpeB",
  "key20": "4Gdnf8Fuk1mTSHu6odJGPLSF1i14WUSu9zy4Ndz5RhL9ZV9vb6VZgNmT5oF6uVjLfXqC7R5aRYSdsfsepAmEVpTG",
  "key21": "5EqBPx43mSjMgiQAmLMvDghb4G7x3ZdMHJy1DAWPFwMcVV5YvSjW1YZr4zA52kCz2iQVnQsS8eYDiwckGYWAB8VU",
  "key22": "3yvgRLprNf8eJHR26JpkuUDjpNAAz5RpibX6pXQ5F1oNGmJsoMtKPcVQz1KjEVC5Rtj7XsWgUwEdTpsssEaXiLm1",
  "key23": "2WkgKtA8ogcPUJ9p2kHTg8tXndP525jpJqk5gXqN26sVULn3GTXRaiN59ERDBDrcyBKVTgv4ydMD5dYdVb7LBBha",
  "key24": "3SN5cjS6omWnc8M5UAhAegzFoXQbwTjVsDJoCJB9Lm4z9XR17FLwy35WKy7TKZSqLsVVWnEiqrw19Hyw9pdMnEET",
  "key25": "3KCynkvVuZa4DgYd5fTUQCd99X9s8LpHZABuCqN5VLMKDh36RpbhoDm61yzn2VzqVQ8FBzmJ6BCg7gBPsmSrGjeJ",
  "key26": "VpZE66P7pmcPdXPxQk32AitZzxRtPiwfnHFzCD96XmxjsG5u65qxVpaWauKtMyEbtRGiksvRVS7ERJPqcxxeQXV",
  "key27": "2cj47chR6xRBKjGz5qmoVhEmXMYPVNU8uc7rYUfc6nBtjnJZ5WNeZexwvcaaZnsYkuxUiMLgKUttDbHM4pPkBYjX",
  "key28": "18QbAneyGZRerHoQNdG5nnGhaSafAuoF5HsRXbMSjptPqEaU9yng9ZAMaaNfFdga3CjGeFBt1g6REX8Zy56uETx",
  "key29": "nEfcCFYudzmVAziBvHp31YjrqpZwsNazEFKK7J9wEMfbXny2sH5QnsGedn3U5jeKgjAUBo6ysLxG7f15GWQU5kg",
  "key30": "31FKfNzdpDgBXVj1DabR7TZpDM36cHKX11L4KvC3CHnDNCRyp767vBb2PXKuJKECoK1VrcbdGrRwBztsnSr6dQcu",
  "key31": "3GRzyNe7ttPXwzLNCCyBdcETGoJDjW478tjJNpsqpCebRUhkiwUQRig8oz23MYtqFn4vwTp5avkcxX8nTSsJV4j6",
  "key32": "2Kg7uMaMzpECykeikkm5T246ZfE8XKMg9L1ih1H46b4Ynbq7kfjaboQkGwF5XtbcjAemQjPu1K47mXRTnZQ21aeB",
  "key33": "5x6ijkK4YBwd4H7mJ8vawDMb2omXgLYrsuXyFinASJh71iVLNJauxqKn1ZQEDjXccyouENKBKZPDvyAcPxfYjWEU",
  "key34": "2kVYaHtavQn8Q6f1qrPNdmPv9eRuAYbibcuSjpNyLGUahY8XqGiTyATrEkXtVR4muvr9npDEkAmG4CwDFkivBXEW"
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
