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
    "5ff5R3PJiEjf8ifPhvvVNp3xTE1CVNAAAm2PR3pKNemQxnPbnnuafZns4oTNacNFU6AfppJSCNCcUDCeYZsB4bb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQPnJbGwSeVEPGF48UDnCDHJStdKPLusjcdQmeg9X15xxak5ESaoMsDzGxepgg88V4LRQ9dXev3PVZedzG89uXw",
  "key1": "5mVuGZrt7pxV4YC6YeyjtksZRGHf5EQddQ98oxDeroWXGZjgWMDwutfmJn79qtNpm1QfAW159NvvuHQyDK9cxChZ",
  "key2": "3ubLijKsYXTAkaLxwZdasrTk1BeCVV8BwRi2Ep7woWkvD57cnz38WHxL4ZRJDp6C5mvcQWK1B9oeNNBE8jEovexm",
  "key3": "3DFchrKhyAPdSkVUPhmugH5V5NPVWwj49srrEeUifRkxdxN8hekWynfEofGJuJu8YaXqsUUmW9MZHxuTmmieapS5",
  "key4": "4sDXPMW8pM7TbkJcnoZYMiRkQ7TLAjHCsea5GuD3ejJxJYSa9JCUtMeNhdCXs2FiyLafCjVHMDptojJqXa7rgwnh",
  "key5": "3tUvXwUnCxmSxN3SU6ehznJz1Qusbv5sSGEboPVpAPFciBxZXjW4AoxixmkprGBuhYuoNRWLA2e1uvrSMHnpPotN",
  "key6": "45HDEFxx1N15J9yL7Gd6ZfRV9tnYKCagt3eoLp5d9jccD2keQkAESgW9rj4E1PcC89Tsunam7RREg8yiiiuMpxfg",
  "key7": "tYx4goVMFxsRkkKxZ9SRXRCEbojRsFrWAFcpKNsGWG5msjKWHGTsC1DJuhctspPzgaYXWqZGd2CeSe2zEWcb2ZD",
  "key8": "KSssjYBVSWtnimy6cQ3NKWWqRXC8YdSwEBuntx9B5XDbmRcBiZ4YPwwFPPaF2oSZaidF8hRHAesnYPLJtj6cEHJ",
  "key9": "27iWNbqFe3RBXmUsZnH7gGk17RLBpJyqujtF8bUvWRzBJTN3guB3gN3mh51qkpnAVW2ptnyRd84xZjY5QQxSNyZM",
  "key10": "3mKEb8ohA21xy3qJPBE1Adh4No9U5MJURM5HHhhS1x34nkwzM3mp4wAYohKD2cZ3rvehkXhwtg55YKpKXdpAfKnf",
  "key11": "55ddBavuCUyRPJAubnnBewg5GcAqtkbBhG1rFLzzwouToSXm71t1AHCzwrwkiUCRrRek1oQhpavxeRFSAAgf1ZPv",
  "key12": "SDsdRX6kcFsZiK3rDhV3ZQTzRg92gzXy6sS7mWpQAaKYjcCRXzUsbkzS183D8KAYajrcrAYZEqVaJCVGwe6dNTh",
  "key13": "61H8xac8dwPL543Qvoczjcj2ucLbDy1HFCmLpx6Y7pjE6qsMbS6SyX3BDKU9CkVBtuRYU6HsPMJarfRK6zatwix2",
  "key14": "2YYog6NLWkPgFViWhnNuWwHjE8edRezTXFXuftyacHmJN2iBxBCcQ1gK4hGc59MB4ijaVCLxr5WBaroDYS2HXYGb",
  "key15": "5uFN84yBnsy65rwrZQdCf1HYECsE4zSiSYm8mm4eHiNB5dVhnC5u9Tvef8GqG9YKrxY2tfzaDzgUNezUw6Vn8FWK",
  "key16": "3BHB4iiyFDGaU5sCtEHD4Kb58uBAGu6rzo3PvyomAtRofKMGSGRf26aFoRgWuJsXs95E8ysnX4LycbmwvR78KYDg",
  "key17": "2Fmk39DFgU9UEYykJBZ4hQS5H3HNUQMP3B9PtcWeXh6rD3D98dJXzAuWQuYc5cjxxoBaRuSVX73sa13EKvFBd4pJ",
  "key18": "2QvPnRk3bUvWe1jTt7enzf4Qg7JYNsnxibnjQ9yB8xogLy49Lcws7Fgv2rZeadk3YD55mjpQnoiqG1xrsQc2mU3G",
  "key19": "5X9QP6XaHcJMQLghq4U8ko8jXxUEe3TvFELZbWLWoPddS6mM2cd6jLUq5QAvdkFgKifYLwSqKLA8eHYeMJirgZNU",
  "key20": "3SCcNdZpnT6rjwoS4hAwJ9NaiR6RxHDC6TbTeCv697nDA9oiQjXxKfY6no59FoqT92tA6JcaDKqGwG4EyrNccysh",
  "key21": "hFgXKJxnZ3bMtM4WW5BpEBxS2ndWwvngu4235LTqaAwgUUfJd6r7fUTVB192uA4j26BACfnzQT6DHZd7bJzVvBe",
  "key22": "3nR3N4TUBC8DZXjPKTkPMBNSxyAykLr46jQtYV7yCzGJbgZLpgW271RPYsPGydxAK8NAPcXfkFQAEpbefodxKFec",
  "key23": "3cReaigiRyJ5MBUS6ZXVDbWoVZjmabV2oTXn27XHUigkHTn7KxktWD37tQG6D9dzEGooaLXS2iodZKxBS4EH3cJ5",
  "key24": "8JrsXY8HHWa3Rb1TVgB66bcR3TaRsgMk8kNxr81E1K7TDBVg5oVdvh7v8DeivcBfxL5rNxTNq5xGB7GywwMX437",
  "key25": "GaRwM1j5HhW1iWFBcMgGyHYWhXiYSFq6AyG6nB7Q3KuHJ9mAJaFMxapuuGdJVd8n73MT8DEiyzLEDvNSpEcmjzE",
  "key26": "59kcbCEeZGQLPbZei7SjTohVn8Rw4GmmSFNPdXz9NysfEpDjociRXWsBmA5gLjb7Ci5V5kzWxYitVVNq7j6njQiM",
  "key27": "s49aPhuFRvqAHeGxP1t9WGR3WBeg1JDDN366pdpxDVhLivyvnhZkB5fKBxLePk2bWeyGRNYKWhMyV5uFJj5ygpX",
  "key28": "3FEidYt65sKBAx8E1UwGFJUH94SAZLBQoqwCEpkERRiTry57KXic3ZbpP6u1P8hGAnxREafKmsKw8Ck5TSfUvLoU",
  "key29": "f8abJK5dFjb5bDZyWYogdo4FyQEvmF49xhK73RmSdhs57Jxce4LoZ2BFJQ7Zg3cirLXkMykcgg7ieeM9bmKL32y",
  "key30": "3d87ihxm5BBvR6snchnUCZdK4n4u5iY6m8E48fj8gb6na4cFXyWT6y7AU5DTrhcqTRSiYHdQ1jEj1yviJReWVYjA",
  "key31": "562rc2FTUFQNdtXbrk2hXQTesMZygakEDsmNUqDqpjeofhVkvorj9L9Nrhem3PoVzc6NyUJKAnAJiGb32iBWp81U",
  "key32": "5gsXKxLueo2UgmjFMSx8VRanNLXM985r49q35Mrg3CRnbirqJ4fdtonNUER8QttzhFqDis6yfGsVbphP8ubVbuAp",
  "key33": "3dZzF1XChC9yz116uNgyDTsG48Wi3WnzmdNGBoWhJPcWo6iBVeEtPShDcMLy2e1brUG3G5nZxAKxg9km6nfLAqdD"
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
