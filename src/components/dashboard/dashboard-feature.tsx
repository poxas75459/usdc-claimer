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
    "CFVAbkJhZ5CVcEsaUP5hY7LYHEfEgohoV9UAsVjnrCezZfnExajxJZenTPJBgyVpQtfVcTGEJEYuJCrNiXjE4Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvK8yZKP2gJY9Jm4j331KoSkYNWDNjE2GsSqURrt1VBodZgGq7y3Ud2avRk99AmYPsFvmU6w3QBU9JjubYFZjLx",
  "key1": "3YJ8LjYpPFxWhbxk3W87zetrfgB19gDWJz8tCAPvre3YRepPh3kQqW7krkZWTUoXx48jpfpTySZgerfwAkWVf1fj",
  "key2": "3jDRWJADzaYwPXqBVFTfLJvMmZHnfuXM4QrN2gdBcXjBavKFruduUjf7tPGzBtWu6QEoixApA4QfVz3jUDweQJJA",
  "key3": "65ttm3p4kn36PWeRQ4upxo2BRbjkBofqJHUKvcRXieHFvH3dEB9NUMFvHuymYpBQ14dsLBSc5cvGiRuwMkSJ7br3",
  "key4": "4vraaPkXk7ctzzEkMhpJ7S7mvtrV7eZUcCP4rfRMPFGGHVMfyfZ1s7wEFyL8GAt4Vp4iJhYMD53LMpbRKzp7FSJw",
  "key5": "2ZsvePjqbKn95wXeYAVRaRhQh8D8oVwu4ksnMFXdnqHYwfPT1iv6zZdgsU1Nppx3ubU7WYqDxWZ4TPjgdu4cbzk6",
  "key6": "3xbz6j7No7XC6hrDNsaD4GMP3rSbQdbgg5TWVG2a8tWXE2BzHkyuoeRSxwBVBphvjfCx5FeZ9q2PxW6q2nZFhpNR",
  "key7": "5TbUAcpQ7K7qbdRkpj9uFc9QbT8D8L7uUiYg3sFwLkfjTM5Aw2YgM3P8jZdtYCVgWCH9j1VoHmcyAjCFbkemVPAM",
  "key8": "3jdKR9UV7mssMfmsZSP99omnK5VpPcJn6xbXWkC3Z1GJ6otMydMhHtk8y3ZSpnZrU8zZ7SXW1GqFLoNFngmYRjgD",
  "key9": "675A4N4mN31vjX5r4CVPNp9mi9LU7XbgE5N1Z93ZYwpxopfouTe9F36pRaenLYmEqyViKjuG1Qcn8BKBWZRaa6V",
  "key10": "4GLBD2XYH9ZCzAJ6uCQBYhHYEv498FJWMnDqEMKyyd2R2PJ9WttcAcvQsPVUWBurL6DBUN3QB1mxNVgV4UaN1Hvp",
  "key11": "3GWoXiYf94ZFNXrJxy29YAAZS4YCbGnid5yYGr7qGjkn6u3M83WPpGmkc9hvs9CSyXJnKSC7qYYWYvmcTMjPrrJr",
  "key12": "2v9DBnt4VdaDq1nHYA4jBFwikZxj7z55nnzU8prgbT4r5LJHFPtM43uTrkQ8ri2F5BDgGuXXzLeAHSn5dzCAVKoF",
  "key13": "3DX2Yzp8a7EgmQmbHmvnuC3Mm5tkd6hGXbZeKqCVHZJ1qj9rtNEapv1nxDas17MMyAA1AFrNAAFktHJnNFDP2KL4",
  "key14": "4hSJMio5UKeaPkR9GmFBTwWpURJQc5j6kRASr5wSgsZUsi4euL4yw5UzHE9R8oPNaUFmRZyymQwc3swZbCTZRYXT",
  "key15": "2WC7toZTx8nGpECHaueDtxXHeQLrCqFTRp8oRBBbAwFdJsYL6WefMVJQ9v4BNTtaX2fSw4BitGdCPtfyw6HYNyAn",
  "key16": "2jere2XjrzZn74jt3bDppKr9k5cQchMcqhQgM1fPKWV2xrx74DUwkz3B38Npu4JQBPNGZw1PvgQQweM3NHrYpXT6",
  "key17": "gK2ztsFZQvhruD22vTrjtdhTxDzWBYt55rNpxT3bhPQEmxsMf2PaVoekKDTJcKpQg98mkZiJuhe2nxF94g3MapZ",
  "key18": "5zmwZHq33cBhDbJYwaZGFMGjEDkwPdMZjADEpmsG9YU3rVFSg4fKpBydpozBa38iM2bKBLsKUYyKhZqvxV462N3k",
  "key19": "2B3qn1nT81hWQsDPRzCyDWKnX7AjQdsAAsQtgEZbcWT4K8uCe4fRvGnE1gy4PzSTjZQwSd9yWgWkWQHNjGGqB8M5",
  "key20": "5wK4PCH3635zVwieGn1RTnH9RhycG1qaDFfaEHheqVjZMBb4vXapE1SEfgpbd1yx9LVED5vM5BA6CputwqMsU8YG",
  "key21": "58nhqcy932hAmSAzk1cCScTxEXZZZ2PcsLMywwkqETjYTJPCRNJDa25Fw1Uewnn9MZWLuAiQEVQico25krxh8QNv",
  "key22": "5tfZtL5TvGd7qiZu2jozYXLeCQ3SzWDZ2GtdgXXodKfPJvAyVBWwSCZYVg68JgFwYvgKiGd67hT8KCWjYWLWm4o3",
  "key23": "3BfousCF7Fempm8SqYDpM7J35HBhTqyka2mSWT53GRFkkWtL9XEsfhPu6jt1QBTY5x711U1djjJAbrViGGUWKn8v",
  "key24": "4iDh3F1HHzbc1gYF4wt8oNntmxE5mLLXN28V63oJdKAquSC1e4BnwVs5zfQqBHEuMKxvvwyonoMJ52BWyGnnz4PR",
  "key25": "5nnv48UKoh1uskpX4pvHHQ9FqPMHGdgc5eRE8AqUSKyJApKVLFHCTMGfXQCbnuiVZcLMaNYLKLWqQ1zafRSAdhQh",
  "key26": "iq2jXx3ihdE84HfvroR8tCyMDRDkgYtDCtnVWj9kLhS1qnpAwnsPYUaSZH5ay9vTPW2ZZSbQeNKLZhrz2Ps6Dkw",
  "key27": "41aHroY8n9rQDLFvRZxmRfxmZD5beNcGggvib2reMDqLbekhWw5j1DcnqnarGYJiHGKBGyfQ7EevXbRaEyNHZj6u",
  "key28": "4PkHYhy5cqS9Nk9w9eaMxwP4r982ZwbXPZBjbx2jUKK1TvhBUfWcpqAuFh9EW69Q8iKW2PPVwSSqUVf2DoL1ocrF",
  "key29": "oCuVK5kdjHTbLFfMDPuXDP6FkwtrjmJy258D5EePAo9L97eNR3cDDr81CS8Kv5LWqNi8Rb56C16jyaimwrkCUyC",
  "key30": "z5Mmv1gVLjXwmXpwNLhRjMsFvf9cBZZZ2AzYWUXKSjQGqxeRzUGDwwbX9akX2oAzisFw5s2LezKeFmjGoS25PQa"
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
