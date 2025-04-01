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
    "4vrTUxVovDBo94EuV9vJ6NzCUTAEVEUZHR6TBKmvotQtCK81hC4Lw9KGWnKtLgrLRVba69KC2n21a8UJHP2qR98Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZPxnZhkCNsN3kxotHvLTyqZnh4nSN2NpwqBDUTY9Ck1VQAriWiYaGxJn8oZNvLG3VGoMuim3c7jgrFYfnR13haN",
  "key1": "4dDRHTjhvB34REfn6h2yzARAWLisFmwY9nVcfTH8ajCSnkkDYUJHD1SWKpjGqrC53Dha96Vq4GehQj1be6R26ubV",
  "key2": "fyKCAZDuDVHMizT62bYTD9ykxfeEdzvPNcLT1zWnSnSzA7TeLdYA2CibGGZa7J9rQ82jn795wMtw4s1wMQ8Pn19",
  "key3": "4aijMM6aJRcTW5y2j3mJ9NgmJJofviv2vUPbeXKFwcqmxn2hzZWa1LSNzXdunMrTfjJN7ePhbHXVG7Zt5rCsPcbp",
  "key4": "4VANpD2rBM6jn6z3myr3diUwTmzgnjeLBVjcGJLcAXDrJDrbtB8sffVGWkwPx3tP1adjK2RHQTeU95K9rBA9VVSc",
  "key5": "4tgSyFNkK2apCsHF5vybEHxqcH8apaGvKvhmCasWY48fMHCr4DibnzQZm8DqsgoAuo6LUhaJb13pVJ3YaJumGYxL",
  "key6": "2njeJroN3vLBggL7bEwj72iAjckBq83f3dbZvV8gyd1KXm4BFzNmD5ajC5VhZpmsazGD4jayD9YhnsYnJbBuXnU6",
  "key7": "3WQUiNM4xjX7R3PAoETzA83aWVpW1E3nh53SjKGNqKueK25EpvoYnfCb4Tgoqw8bqn9rrzheGcn4hu7fiTbniCS",
  "key8": "5DCsxUf9F67zSPQFsSeH73hbZGwKQPtR2LSHiUJrGP1NawU3uw2FfYbK5yApKytbvsz99vjBhQW66qZ2TcEiYeAf",
  "key9": "3VPTERuns5RogfTpyP7rfBSz6fFtamFzAuxc3sPwkcePW9F7ajQKcy8G7HVjJ6zsZYv46XNMTKFjG3Xp8Jt7HtMq",
  "key10": "2z3PjejLkBs8KEaYGpXgWaEkf56YKqRG3uw6RKV7JqLWVgoSVQgDa4yqfnTTmjT6rGJvdMzbP4cdYxDLtNmdejnc",
  "key11": "35DFQazgPVRizyLiu7KuxxUVhype1HmjyxWaNyj6u8Qs72rken5ZwsA5tbQh3RaCVpoH22WHqq4yUYHQvPjL5J2H",
  "key12": "4NqiwXfPgPyZYUAFRFAg8P3Tcur3C8JkKywvn4oZexTptEcBoeR71PdurxVCgzbU9tD5LiniUtFTMk1g9FjXau1W",
  "key13": "3aKe8ZBbAJjzZknovbuYfmFRxUWJBDeCeoUCVWdo9rN9u2Chp2eN9csA7CRGgCULHZ2izxnb1spvMkF5fP4JdXz8",
  "key14": "63TySxRQacKcoUid8kABC2Gpe7yLXWpKTUUxmqvwnSAc9kJa6YkYx2tKwd8FzopnaqfrcKs9D3ARoK5oHgT1r1Yu",
  "key15": "4FgMiMMU3notxt8os6UeSBn8Yh2Brk4HVHnamAkHj2QmRZ3B2pkSrzqoTuZFe3iTGQ5FXLyVfos3z2rU3erXTP7s",
  "key16": "4M1nSBH6T7BLApAJRpzZ1ZxeuPPbjwVJEkYxnb69M6UC4CMNwQHWfoLvWhYmHJPNYZ6ea3r86PQ2wkeu2V7j88tm",
  "key17": "9SwYKAZDqaet386KHMKze7JKR8hgayD1da91Y5FXSag8ZhjHSTnzKbMkF64rnnDz5t8mRBR9UYCo7R3M3fg1ezJ",
  "key18": "3iftNeZy7fW7X2Pg2UAJuizTjzQWMaQH6j8GXdmTVasGK8bXMzEssjLtSnZgq3iiSpn7xuhi1FsgxTBtfJv5v43r",
  "key19": "3TtUCe7knYMEhupa9fRH4tkhjTvjGTZb8ax4NrCSutMc9eqnzfbCsJcRqQuP34zcLu3tEfJhpcM2pMYzMYeC2auy",
  "key20": "Wq6vkmNoDVU4Uw3uiBJEoqXt2kJgJoyGr9zCa843mG8R76sE3R5M4FgS3gxbbup7n8z4VwUZGZU9Tp9yFnreqUM",
  "key21": "3E8Uz5EVhPigbCX3QDs2quVKXenXcc6rTguvSgFPTL3hriKZxMR2JCNhPVa6NZMXDQtJKgNerFjRjBZ6WYuX64Tu",
  "key22": "65Qt47HEMTW4CzYC3yzVEm26qwEP2vQSq3f2TTCXrwennnho6Q5aMyUE3ixh9Bkb1H7eAzPjazBiabn8ssqRcUSY",
  "key23": "2fnQHs1CRKjMLfGB6ViV4yMCznqLEzQHmoH2o7nhvRT95mdFTc7SLoq8J3ha55dKvFFnYsL2jh9DcPTNW1RqKYLp",
  "key24": "5gYYeW8DLdemZzUviJ61cfDKhFJvL15Kr6gWkDbL4pinbxDQDdSF6ojuDu8YNJ6F1c7QPb9UHoqVo7R4xRxvcQzu",
  "key25": "zi8QRZ7CDiZL5kLkMpfEBT6oiqjjC72Jd3Vx52UGeeJEBg6PvVG1rCBBMXzRXtw4UpG3JFCWgR3PpUaL6657241",
  "key26": "BdmkxqkmmxxJkWJbEZDWrdLtcD3UPJvYUvy6etC1oqD6TJvebypiZ2V8parSjYvBGsx82yznsVz7AKs6ky3TjtJ",
  "key27": "36mvh6KaF6NHoqnqQo3gEXgGiYUA3uqxL6jrqSy1Qgr98dAQxR5ZQJJc32P3uxeogkNU1fMuTC92ier7Jz2r3xce",
  "key28": "59cka82g3e2QyyLBdijLUViVDUMNrBPKLTHmZshD1Xxco5Erx6UsjohcePxYbL6voHfxE2FDdvNkSpCmnHvsQWiy",
  "key29": "4sXGWwrfb8aENwigDUgjnq4nJRGcPSixFqg9ZfR6i59ycfSRGNxwePqSTvYTnwUiyq3msKp3BJYhKmCJ8gUk7sx4",
  "key30": "zLWSKAtdx7HNgc8YPGtJawsdn27ongvbfthv58rnfnbxKTg2MVmYWTZCyL8V9GXZDLzXgQwSjy4WXQAfzmiNaEp",
  "key31": "mHHYMkns721J18ytftS2AJPk7wyHZJr3FxMNJySAB7WRYwdXTZknWz71aso4yPJVSEAyhUFv3s9i6vSKbiLWZ2n",
  "key32": "2sdPjszRyV69Mn9jyUz1bxKWZNdGStgLd9LUVdJK1m61X3Fp6WJmjaFwFfWJGa2neUSxRjHRxHu5hK7JkTvYgt1n",
  "key33": "5wvjL7uN9qDqW7kZNArXsaZJ1amKM6XxXWEZEaEjapzuzGpQww9166YYmFTg9cjBxEDfg1FVy33TEQ5iY7Z2eWQj",
  "key34": "3PtUCsKmKqcNCJPitFSFnvHNjRA6zXNJzZWMrxNEsrserUqdKXut1GdAmckrvKYMsB8DD1Fho41x9BYBD6eEucyV",
  "key35": "2BdY9wPzyK9XTeinAn8Cb6Daj8SEP5qipUdoMHY3p8LR1ASAfi7GthNvcNDpft9vzb8HZpRQWX8eVECiCDhyJtR1",
  "key36": "ENfB91ApUFALN4msfPH472hXshSsG4gTe8S4eGAAfk7L3AQ8n5YNFPd2gQ6JZFC4zMkrANUqQHdm4CjDsAfx88T",
  "key37": "2LBprcWa6Z7Xnfz3nyqgLA3RrohYp3HCYxRgZvSBAzCRXxN2A9Gkz1U9BdRvuKnqosG1wRVAzPN7CXjLq9jinybo",
  "key38": "4PF2Sz4N32eKUwEsLPpftwKLu85m6NxCkn5sbaFp3KJrfF3HyzFu3ggiyuK1gSEnVnpiwfUWtmqz9tHQGrHKTMM1"
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
