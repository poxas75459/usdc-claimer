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
    "3h6UnZ51MbqASvatMkdBjccC7XDtze6DyPp6jj6RMbfP3mUpRJvYNFZXZJNJNWGiRTYLTkHgn753PkCRaaYcyWAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CJdt73cpa3a3GvuQBkC7CXBrgrBbHA79MvemRhP9bKXkGnNE1gy21STboUQGUkZ9S5KVrFv7qh68au8rRJ8At9",
  "key1": "25vCYJ5yJ2sq8Tn4712hZpKLXgyFSzKanFCBo6LKY571pH6hJe5S8N8uoQqAezp924tNBfdMppiS97KnZw2uHEFv",
  "key2": "29o5iJbpYxL4nrgAfnqnAUZN63X9BFcFR76VhY8zKej8zSbZDPG3pyKNTazaGUqXu3PjKZbyY1SvrDqqhYRtgVaD",
  "key3": "41qYEDzEs8QhxzSusuhKVLQMgessYnPjh2WJBbHEQ4ymrKjMTKC3gXZBz3cSoehr5nP91Px9hHCicedzQsMd4JnV",
  "key4": "3TkLRqVLpdaD5Vz8MtTPnT4XrasqPNpjrJrA3wcn1BnHNYMbHjF8Hy42d5TGnDeULV7qTQrBA21MrUmTnNVDKSoy",
  "key5": "2ZLEYMWzcW6ZexHeBFM7yKu1K1cfc7hbpHC84UJDWJQf15AzAYKsScRXroGr7B2g7oBJPXDyfsMuK6JWRFMex6rG",
  "key6": "392pwHySpBwiX31MLmAg4QXW7KwWcoPVaq6vz9Ry613cPkdTESAmeuo18q8SNqHUH7UGT9sPTFKq6NXYfaoy2UxH",
  "key7": "4Q2mhUdLZz2WRRWYR9EDWM5uN1Hyspr1ndtAViM4eGXwyFM9Z6q8JW1dW6XCH3DS3nN4ct7dLfoqyeuLmicHJmf5",
  "key8": "31dkmpHvhzdfrZjC33JxUMKBQ3EgCZpXDmaD613rCSt4FskgeHptiCLXsYFXbfs92f7GwN9PFy14g6XbfEBWpRzC",
  "key9": "5uhc6mXbHEcS8aj2FenPDC4NX8DtMttcDUWX6upyXuvP1dRbuXhnApPGyp7kzMuiwRgQHByoeXr4frEmDMzKonXc",
  "key10": "2YhKeoaQcBJNMYxyA7gYZMMvGGrLnukd9XqRrytBzh1PUECfk9qySUS1tDiwmELAthS6YRnbwPwkbrm3qtzF5eRd",
  "key11": "3zJGjmUzfh7eR9DkyqkriWG1UTbZFm1iki37pJjtgYfjpxvtT6smdAVC7RJtfQfaHaKM46CSsa6CGsgsynF9B2Vo",
  "key12": "CxiyV3rc6gm8TzFdtRAz8xYT9MnnZ47KcA8UgQXbhsVppoLgXLC7gCLkWDTm1igxk3ZkQKfQ9waeaMDUrEUvQh6",
  "key13": "66QSvF9oWcy5CnDFYFWVddGwfMf611MtNTmTT57e9Hdv3LjLMumVRWTWEcbmYkgJ5Y9Bn3YbcTWHUs4NywxmGH3D",
  "key14": "5uTbsxZdvymuLQGrjyaUoCEV5NpDxJDZ8pEGiA5vA1wVjfHprKeFXP7u43gAxG2BDU4MoT8qvnpTJBCnJFjaMTNh",
  "key15": "SXe87JvAfNEk4p15J6AeGmBvFcuuiTPFPaC7B5Gpcno6SGf9PMDP8zi585n5dy3eu7WrmZ5EgRE18WBjcxSDoSt",
  "key16": "hBrauqNibytUs5y11hFjFZ1wBDhQEMj9RTb1G3n4K1hL3jZWktj3fJt3ARh2y9Vf9EAiLcA2Cff3jYp2N7e7Cin",
  "key17": "2Hj6xmJuAMqX3AG1916bvwuszhPzumGccjj5xhAPNsAsrnASqAF73B2FMcTT9zbBqDUCMLSvdTrnwWMnyi5rZRVi",
  "key18": "5TSraTHyAtPJ3XnEcUvuSgnnE89rYc7GtvQUbdxQE3s3S4y1xqpMt5VzNWugPf6ZF1gwfCtM2vM56wS7mHtYVZoR",
  "key19": "4FmXxQtm5uspWtU6zVcgW5J5JWmFQEdG6RLpwLDo8MUZeqkLwPqp1wqFShYaEdSDffpcYNG4Rf1FRbhEQvhe58EQ",
  "key20": "4GGbHFHn5CZyQPDo9Hq4bTjT5R9mhRqik38fVuSD6eTcjCNzoEk9KMkdK7zKxwErfk3KcuXeP6zkyBuXVDtjn8s8",
  "key21": "4YZvCbXvVfE1kppXjzPiXdPBCoqCucEvWkoUkuBE3RzBmjYtQu96apS9KNyujxPSezP3MhCe4DhUaSq59r9jWsJ1",
  "key22": "3tXkbErYW2tTF3N3392duTZZfoopay6QsyE8ZnQXLA8xhKjCNbY2NUtoskvLSfcZFtyuALN6PJyVw8dNQBM9pCL8",
  "key23": "243uE59pAJzXWMw78eqWbXyV16UwZiqtchMpr3cAfExigX3GTiMejY5xeMyMx8quopkGj5zb6ZKtB6h5b4uBEG7d",
  "key24": "4HCGg7thgpgYAJp9WkbmpaVW6hYgF2FmRxeXRGN11nVxY8U9DkDmvfg6kcsHnHVg8d1kqan7eFkSrEuYKtGSyDUV",
  "key25": "5VmSDuCc1vF7nhJBZCg28H1hxDhsVKnYdC15iVMHNWgdU2ZbPiaCSopR5XwQhTyxfsoJR8V1AoWj8tBJvxCwLGCq",
  "key26": "gsGjpfrVqZ8cHMX7sPRHyRWWxUSZDxh2mwvuvmuQZibL2JULokFKdZ4yuB1CHFNitCsCEKT6cxrd1BegtL3r3Ez",
  "key27": "rei5DpFgVudHz8JCtfyJPtFH6RJg3jaHTwLiAjJ88Qm7EQzW81hYfNnTAiKFdGFK4gYa48CtvFejsptMpaKFZoR",
  "key28": "GtpQRPJ6GXt6zBfLjgr45r3JYuZR8hMg2sqBM8eq5rqQesMGgh59hbt4AsvNzaDSBaUMsskjwHThbmirNbAAawA",
  "key29": "3NP1bPQe3gowd4Etgqab6rKgpjzHYgiXEsbvRkYZ5bxbP51sZy41BkdFFkkK9rHBFiR3L5zUJ2XmEnyTnDQRQrjr",
  "key30": "23sjFrWb6QBUbdkkhNvGwdNMirWzEcs1bbZBHv74SmfMKXxZEA1YRTVPpC1ooUUSMCtLVxGebXDAPxX1opYREo6v",
  "key31": "4xBWiVvGuiHRe3sMm9PtyCvGJhedihtWU1s77cZMHzTLhSKKc6Z9oQs4xm9yLebisA1HzvDFhaZkqVkfe2kbLTue",
  "key32": "4diiVDaFw4GcvkbxsbxPzB1wk9CgMcHdULoSGrLg9ezLRFFFXNf8RNW2jMNUyeGocEzSJeaEaH8LhWY1uNvBK18T",
  "key33": "N4euSvwRk1gB9wATVKuDWFr3m217jhKR6vspkKUZr9et3MKK18z7iTcPpX6fdB6k3G521nsvi4uFtUZyRPvVbjH",
  "key34": "K1wjQUW3ZZnv86nDzw8eUsvmU1BtCqpPgFCy3Dtsz4xykB2FAdSneGHcfGVhGZJu4wrZNtBTsuBhNaibmMhLNuE",
  "key35": "2ECFV9r9AmH64Tv4J4fwaGvFRZLt2WEsCAXbbyfCbpnb4vL8HVqhP3ZjUrVfWgVWd1RopxQ6ePx52qXRvPbs2pJQ",
  "key36": "5inBhvgki4AZHTyoAJvRoYdWAAVRhjvith32dcGNfW6iG7AmhAYJMarXs5ABTwvo8umzicNbRJRip7riFC8Dsd7R",
  "key37": "43e1jRLESGgkZCgcgPt1TpvbaxYktPNNEUYntUyYPr63EEHoVVu6VFJdVFR3QCTuSRE5vUoHnXBFCRBUQPV7Te7b",
  "key38": "3fEw3Nq4U4ax4ozrhGhT675fTJJAGFwmH4F26jzfh378VVHRPqGn77iuBX54tjYExWaMtahnPWRY2bWD2QD7ig1w",
  "key39": "Zsyuq8n2roWH8yCzQqAPUXcQ7iapjSHoBFVRw8SWJAoy7QKj9ovfxGqa7RVMUb3BrSYy4rvZ8TELNf48p9otqHK",
  "key40": "5gyiofE4ygih6Dgnfj4qCpTSpunLmkN2sXLL3f7ajUgqSR4HRigeddEd3iPKTnRJjGTh5Svccn3sWdDie9gf8zw9",
  "key41": "3kSs7QTZxkpBEnTsVD4gem47DLdpzFNTDP6zzXbHuqCvMi52nTnCNgEEK9QdAufFJnjJRM7LL3yxeZgWpE5G4htJ",
  "key42": "hiTFPnsDo3qSrMWfS1TtRAJzddURvSjpHkVXAQuxvwQi8zrWhveJzPe8bdX8fgbmoZ4gFvZktbHTgH2K6ju3fnk",
  "key43": "63A3KYZEunh1sha6MGFxN2FMMqQk5v7eStSPJmvkTu6xQG632gR3GpUy3tADd6BPygxdev8pWvdjuNKnKcCP9mgS",
  "key44": "2BpA49eTyuWvRfRUWbwoZbBvnXHMyyg7ZpW5TjcUQ5kzqg3tm1VpZ5bxKaiqoDxteb8bynNc7hGpUubSh95b5vLm"
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
