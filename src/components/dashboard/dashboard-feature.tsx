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
    "48fUCCoGnbHcovovkQG9C5h74A1t3qfA8C8P5QG6NspX27tF8Kyx9qNLSCAhDnXx8gSyC5D67dZYgaUyMk4u61MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24brFRh4mgSSP4SnufGp8zEGXSzpf8Ew8QdeLEnJhUNQHHsdaTAFfch97RskzJyMggjs7htAovVAvNC7MSitG8Kt",
  "key1": "2bBSZuyE5DNyHHH7veChJ78wcbVNtBAYnPCF5WjsvHhkSHsBD7k2G5SjbrMierx9yfwQtLXgX2wzgAhUnBq1hRTD",
  "key2": "5JLjWz3quuZ3cD63bb1jE9MQxenAaHiDDhshcEJ4x2DQBdgPETVwxik658t1ChCYQvRWWEyZbRtKBAk86EUrR79z",
  "key3": "3y5DWX1L89cEtQuRzSyK3SG2EYSfCKMk9DnW9fDwTdYesX2DewYfGiVTd71wSNQc3YE9CRZn81bTAxHEzq9qsoGk",
  "key4": "4ejBvCdqutSnUb7bEgT2sUC6X5Cjpq7qvY7UViTmaYucsCfv7q3xThrbbi1Wfv62neGkLwhtPTt5rfDtZQH9np3E",
  "key5": "5npoCmggTBVaaAWWB5b2vLextDQseaJLBtbdpfsxMAa3fepBZwynY4qCi7vBPrdHdyEsrmqkg8rXtrTJ8o5rzGv3",
  "key6": "4P5tdfbkv3GsbCT6YeLKXHD2Sydj5tgRNhKzdxLaxmt7cyQ15GRwxGsCiwnrbDAjzoZ2wxH6EamND1hV2iDmZwoH",
  "key7": "3W1e1kdMyBKoctaL8hgqq8qZNXfazXXhot3Dr2U4BKLBEFGp6D259uPDmQWtHvQyq1CNt3UEhUqYN5YFpwgugjFP",
  "key8": "qP7s15yLovUzLSdsG7bZRU5KUrkukA4zbCa27wvFi9nkytvrbTKvfj1gSZwFvMwuEgYVxwUHjH8zKgg2KprZ8rx",
  "key9": "52jTtNtTRFSX7z85bnwZ5bmL8FX1na3oVmaL7v77mokaHaqX1FMG6CRUuKd8CD618nStZS1x4BgcnjXSDb56Qqxi",
  "key10": "WbLizxHdeunqhjDiPsJaqj4UNXgeKKoVFD6dEcWmpXsuevFa82FceLSepBjxLS3dTgwaFKWLxUWpsKg56JsVhV5",
  "key11": "4ipEP4VwbVsb9gSp4aGMjnXTcZNYtKEvLukvCALgZQxSvXEs52CqXDHayTKHfwQx5whP3Zuk4qSyVKFCeaCEg3mW",
  "key12": "3ygKbxNi2y1fBqyVyQmjEfWp34C8K3omhJ5AHM8zyFmrEVnvijfAUgX6JBUqWsXNVCXrxHFfR3eaZwFgY9tJWUBK",
  "key13": "ovRVsaLJKhGNcgbfdPouJnuRr9ai2HcRcUjEBC7eeDEfQczn3SUP5PwnJc45BwbNnmf6Wmt4XsXxRSaT6bQNeBk",
  "key14": "2xggNMPwWZ3Vfx31W2prjv325enUDtxCxc6Z81i8GCk7BWYvEuckcswwEUtyLPjsU7xn2H2rf9QewNZ4ZduQ1BaH",
  "key15": "3EB9LAyDTJpzMvDcXhqbzzzRgKfmCSnTiopePUQjozGPL9qVKXNfsqPnhmsvU5v9UP6yRYxGzavpoYDNxNX5adnf",
  "key16": "3AaDh8Zbe7RvNQdY3rmofkr2p7JvpA3MZkEDXGf9vdK3qScCk1LkkDEnkKLjTaah6cd4tgofH8P2YPBoJpjj2GMb",
  "key17": "5f6oaP8aJ2DSE1V1apg3CRHQjGqvMumhc395sFv5EHjwgJxhxgBu9hfRCArvjcHDUuRxhzSVzDZsseSqQHWedSy7",
  "key18": "24Zv3c6fne1HBGKK4BMxdDH67Y2Nz711gLpFkMPo9TxwANwwupZGmd65FjmCRnBvFvC4B5PnJodvgJEdwHpU8Uhu",
  "key19": "24VUJ7FayBDGLDCgjCD9Z14BQ58XwsmTPv9YSpkwGB3rWoRsFR2JqeLQGKNA7c53j2FiFVNapHi95LtnkHnog3ig",
  "key20": "5hcGrDvwMpDJN8gjk2FAYSXQRAoq4u6bJTaoZqUCiQiF8uAECf4Qq3KQ5johkLFTM6txjuaU8mY4SvBquQBHC942",
  "key21": "GLy8AY7RKeK42va2AXaeMXj6FaXexQSzyqG6B48yn7wKdovukMMy6jr2r7BMNqg4rYsohcpCgVz7ZngM8vFMNhZ",
  "key22": "4TrhkFSe6YqfgRWx5Kb4dMVNgLdsvMbsGhE1xzuN2eVogNfHp6MCnX5MW3Jn2nHDEF4truyMvm9NmhybLZWRHmUc",
  "key23": "148gdJaNUN96aN9bmoCkL2kZihX5C49UXHKZSD3RDp3DnuY2B6xCBixz2k8EDsfX59BomouwpfxcmB8HzMuK6rD",
  "key24": "5GLdrr4opydW8BSg3L7Zipr5MKoASqNU6CLBVaXV9wZX9H4iKa6mmzxpQffRJLyc7NxTqUhQh9XrG8CtL8VqiifY",
  "key25": "4PaRsnYyEhftha6tMocxDfU4AsqVTCCJiqnPNrALkZVvALhAsXEaKvN4586PGjHQFQkBhpTDKEf914bnnMNorB2F",
  "key26": "27xPzfzN9EA9Hqktxn41aLzxqH22Be8f9xVSSbGiaya37i5wyWzyWifdEF9JDnKwCrpRbXjpqR1Ekzaf8GRgYf3L",
  "key27": "5p4cXVitEBXAw7ipoHMVmg5r2j9mhyGWZsM4takrTXSm325FmxYgAiVUsnTKaJbHZbXYG4q27spEGoHuN1U4Qp18",
  "key28": "zxWBaHnV6zsM8EUaUkSWdSDrNBabK2aZskhbsxURQsp87g5H9uUWDWUjsAtrDQKUtCppgYqL2pMZtX5ZhnQtR7T",
  "key29": "4PjbaAFX9VV6ywARbgkNvsKNrNpXs8H1vAJUdx3VxCM5t411GD6kqu3byBrVNsTsYu1CRCYwhAZqrxMPyxBc6gyy",
  "key30": "2XJiippcSr16puaRSRHGutpXiqawEgjFyKYRy2euxeQkWYyBvbLtuKxvJuM1YAptYhSCztbDafNEoJwXWLGdvi2G",
  "key31": "33xFcmQQ67rkoVd97KYQbrBwEgXes1maBMk5NTfCKXpJ3sgUQn6P47N4ryKvihy8yg2nbphztwLdmdKo1EHogT9w",
  "key32": "3eBpE7gXEFK7RvfZrF4QwcSVPocXmMDE67xAVkfBuBw8svJH4iVkyh3uqcPijtVUC37QtKkXjToZadCVnhf2uWeT",
  "key33": "5FvCWSq2zLnwShNrGdHncz9usNkau6Hc21TLDjZHXP2aQN8NMe61xD4U1iZbmirPrg4PVCUbAd26S46JBxdN6jWH",
  "key34": "3pG8FXXZPkboefVJUBJVFS2bWDd15W17eXQe5yhKwZzt6wLaDB6fygrBxAjeAgYoVPfy9qS5xzf7zt9xk5itWtbU",
  "key35": "3Sjk9FYjJxxw7FGpWgX9hZLtdGExt9jBpCoqMrjf6PmcpLBco2tNUnNvr8bMbhnGUzgZFnjCpSaVLa5TY8wNAif3",
  "key36": "3qnqSePxDzAKp1XYYZyAXUGXph7FhQNtXv85fWxz3D6XuMP6NP96RyQQutyoYcFvbQXJva4GdpWcsH4jACzMSUzv",
  "key37": "4ny53w2FTLqpyJu3FHcmBVNEQF1Q7W5FRLCFqf6czSSq7X15Y6YPMxQ2omqH5BktQundzVgaHvkYkv2w71H5YYjg",
  "key38": "wUGuQnPWSqAepr8xkh8BWURqdofT79LdSpsj2XKAfH3oSLj5zmxNvjQbW4N1GHN3RFHrAqdPMrZAiWWs4dTGZ5a",
  "key39": "2w6XP5roLR88MNfAxZA323Qq2RXpvJ4p8wA1nv6wauLKWhgny86kj2KodsNKFURbGFNsCNwjUraPvBk6Ysb7nMTX"
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
