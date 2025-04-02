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
    "5Su7wC8FSJ2FUWsrUAzz3w819yhLUL1PsmRyrVqRMMnB9v92vvg2CDMTFG1djEwkvjo3MwjMzKLYyooeKfBoQb3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aee1eVgTw5i6m9oF1uh5BJHZjtEGarXfNdAH5gbAppcgBmDjBW3Gj5c37Lh9nq57ikGZKNaNctow8NQVWfQhEra",
  "key1": "49ANzHDatqvfGkBF9vEQCsRR6CmUxbUbYSj65bFvGU7jcXiZs6GsTcDsKe8kbDV1JEZvBbaQpit1XwQSvW2fxsxP",
  "key2": "6dnk8FDcKMe4sPWPHbwgzWVsNQjo7aQerz6A78kPSBBCt4ZWqFMSeWmm9VKo8RTH5S5ZfoEWioPQfeLWrMPyz1M",
  "key3": "5CWSAhwRXT5wKwfCu97THQoyiY8eaZ5tyqZJyH9ivBLmPQr8wxqrY5rRMNztoUsRRTfer4XsK8mYxYf99r3oemKo",
  "key4": "41HQmj5S3aKzCZjrPar7UmyLQX2NoNBTYHyFyynnVjgHp3n5jppRttnjz1PYy3uuNYHgMSKopmMiT3zmnpQo7XhJ",
  "key5": "RP7RJg5KhJeXejeNVST5Xz7mA1jKKNFmhWmDjAuA7HGVH238a6oSBBZXSGvEFNLjeczZVaiYu4mFmzHJXCBdvcf",
  "key6": "5HkDzPTj7qUkfimD9AkJ6RasgZ8S5Nqi2nGPiENoV8HfriAi48uxnUzQ2y5MgWUzK451YJNhDrzYZK1W6yNw3rU9",
  "key7": "5DHbYtgV72e8h9mTfMyQkVFMhVMZByrUxbrcnCQ9QCrn4y6z6Cc4w4tFGSWP84ZjHtFQFWqzF7C8AttdH5tbV9XL",
  "key8": "2p7heDAcGBCZt6YHMpAcjnGVX4e2nDD7zd3iAVZyxA16AWhYjPwEP2VJwUss11gQodHvo5mRqmping77XqBzHMnD",
  "key9": "3f6uSMskBgkB2RVkDLSmkBHmoGcapsEmdszwy1JU6sUQSggaujQijPk9n47pV9JvkpDN2QZTmWpusrwjSDYWk1q9",
  "key10": "5uB7q4hQRxmR6Y2B8Y6m9zU5DZTtFA2S48tuPqWCiGHHJAFYBeceECfu9UZ3aJKL14RJdax9tGxSnWaoK9phf8xz",
  "key11": "36vYgnNPBAzUw81HGaNz4PoTYqNxP8L2SX6qKuSxEmvQSh95hrnkpCqyuNdEVrn2mZ5Knx2hoAfoB4E2sa8rqucC",
  "key12": "5JQy5w2KHouTsaSKhJnKHhEbMUZf9GxbEtHrM54bMxrzHUPrb2J5uWRb6eoaW68MYLy3sjXzW5Z2bCrxuSKTfYHb",
  "key13": "5Ftzh7CrjGAQBG4zGaeKEBsSwASu15NTG59Acu19m8AnCRTAG2PphRz1ffG5CcFCBL5fhs7To7AsENr6fxnSuC2H",
  "key14": "21grx6DBz77AMPn8QdNpSXywjmvU5LFSDp6EZ5qa8vmLo2jihYQZkty7dFBLZQ2t2nMJadedzoS1tjpfpbQDWJ6y",
  "key15": "41TerRvcik87vnhUyo6VHaArJjjMrDiihDcmToVAaP743sopnnaBSq41Rje7Lg4Vytmpax8S98QsRWbd96AZqs4c",
  "key16": "5WpDwrU386zJh3GeKPsDsa11xfJTc9uY7egxboAWKuQJtyjXmCm3mBb7waW8qEhTfXSie1kiNQrNvkkLa7mjdiCv",
  "key17": "FXuCQiKrtbezBgNTZobgDX1QQG7m8a6mmJmPtAQKvBEhcLowXU1d5od3NN8tqEcUDj2rdWQnCoSXjm8QHiNjt74",
  "key18": "2L41p4JH74vypH9EuNEaMWEQ7C3ontNb5Dfwkn5wTJKCW7b3vsrX6znbaJk5hECvLcUkTZQTrTsd1fMFhh3giDkc",
  "key19": "3QKCXTABNtkjDwdjjXGLJmPdtNwz3EZRqzNaVvCWvAjTS3p9Aupy7stLzLCPKHEUG7ph1kYjVjdYMUu3c8VL3qqj",
  "key20": "4UtVQBW7weHA4MXcK5o3sq7i8Wye8ZkTCoygYRKrcM2PMq11uUbdrWadQMgJGP3vYHBuQX2jiQsP55vQREp9Z4RJ",
  "key21": "4Pqvv67cedeR4uPykoHzARTZbELqTLsxfFvDNxPUrapj7H3gBsj2yMC9Ss4QjPWye2qCEgdAreH2gbU7TMTiKzdK",
  "key22": "2ewpEUXF9dGdCLyP7hVgPvEDY9rcnkeUV8nWRkfyZ8SzRoh5CcsqUEGpci74bvgtmsg5DK6FfecB32Wjp88tF3xX",
  "key23": "5wQGTAZoFRtATMGnPhrwjnps4D5HofEYx8u2kQZiqAG79wuJvwREdpUn45ekpWXzFqmsw43DjPeZ2idgSJsXFJE9",
  "key24": "2Y6opN5ZEcr6C2Ady51DdjS6pBVRJpV6pyGFzmkFRH6m3ngqm7EPF6b448F1HcpTFfEKUpd7MM6NcKogZpXXuWuQ",
  "key25": "2fgy5RMpMhYRCWbT5P3j2ebRNYQ5zYuVHpQybp26RdjiS2KWvjoftJyHDWp8NMzjkkWUeVq7h5y2gQisivvgcFaR",
  "key26": "2pMW38ketEiDiPhfQFY3xZrwEjJ7kC2dSiWET4opffLWayvdNc5VHTj8Q4Kuz42xxyjfUrkxV5H5EmzTQmq9ffGR",
  "key27": "5qnrg114w8cMACg7Jvomuz9yww4dfy3BdJ74wawPe7X6Q8gxsChBybFiMvxtXkLJPjCMPDMZE489DGY9z6jx53au",
  "key28": "Qovk4EPtNHMJThu2sXbxhKasN65hADY8Q8Jcbpn3ZsCKJgpTnw8R5VS1BsQYAxuNNZ8FmygPwtSm1CD4uKPudpS",
  "key29": "4mHTdF6DCwWjN6fc9CiWXDdj36kbotMHzWrV1bx9457C8B4Hmwfn3cAeRNWAGzQZaewPKjQLNgwfxyGVjdkhJMFk",
  "key30": "4M4YJFsfbxGPSgTKfgCiaZxJAyRhZGvxhowgPWLDiAGNdCm5qXP4xAfvwZgPQzcHWBrtNPHG1Xq6GafP3sfWsrxx",
  "key31": "2RtkmgjN4bc9ZwLva8LVrC3YponNtkkW1ufqukcV3k7zhLPssc8BZYZZvdCUJqUUE8jqRucu6TqzHFRe4igzXRAN",
  "key32": "ozL2thkRJRo6Vk31Z9kTXX8nc1C7ds8LqEL6UrzqJ87QC5bz6m6aabJvKT2h6BmgRKG1PBXUpyWMkwitziezCHW",
  "key33": "2wwnhZo9jDBCULw7RYFmsx81DXEn2YVAcSegjUZxkodH3tguz5iLoZvqNZH3XQJT8TDxRTYW4sdxSrrF9iqChifm",
  "key34": "5kDT92hZd5iMm9ZKpByDub3izYbfBqMQqPptYsqsD6w6WLfzLV3hYzKLNnpBBAcSzgikjy9ocmiPdik2oH1RcPSo"
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
