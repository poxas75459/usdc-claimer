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
    "wQ4b8tz7SUfYqMhed3DQVfKNcRvhboBaJmgX8vfEj4kQYq6N8itpc6p6mn1LehBPYJ4nMYdYGLVk4zKgvaydvLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npaFKWyozEAiERGn3bNq7pCtcZoxHJnuY4rQghiv6qRFLSZJ2wknXEVQYnDKVKrmnwM3FLsiBEQcptkwwMNHkj3",
  "key1": "51z9RcpXg9Dv8f4naSshHrTqW93Rj1XW9QxavZE2jTxy7km3bCww5WMt2ie2TmoWp65A8tdMSyYYNbzt2U9LmV3T",
  "key2": "ADnWN2oEk7akK4pr7usdQjM68bviUGdf56ssH8ByDafTFsfe6kko4EXHKWqQtvPiCZYz79p298rGLXBN3T9LLuQ",
  "key3": "3sW9BxrHy9js7ZaSM8xqfCMW19pPtWFvLumPqJsqopYA1XYhoEQBGEMYAHzRKoS6NntBc4AzABfmXKDUK1Fbdhra",
  "key4": "2Mh3Prix8pEKgU3Z7QtRLw5nfZzogC8NZYAuLSCo3o2M6qqjg4LC8WdJnHwGPRW9kaq6sPnXSUbtS7xuxZ8Fnpyu",
  "key5": "4yCVncEcT6NVz6uuLKqpFw1dCZZUVj69DVs1QEqNuku1JLWiEU7Z9hdCuLhbdma362CpvXHgVdUyKGdVGuCjuPCs",
  "key6": "3ckThzkeLdjhNWunPS2Nu3voSzmjE6r8uEoz5d5JemiE4MkCBgTuqK17u4FpZec5E2vRq61KBy8LSJ5bjsbP6Ybu",
  "key7": "393koqdDXyqjGU83Xr2fn3dYv2AYS5na7AC8vfLrEBiBq8EEt2thZW59m4y4qaQQtnUVgpFLobWZGDdZ2adaTUQY",
  "key8": "2iBba93qksuCp9zXomUx8gP7MeE5fQS3muHSLGtM8KyEiKG3TUAPuFrrxfR5tWsuJ7oXZ8nH8pA3ACdkw5kTRYzS",
  "key9": "5S8KcZcQcoC5Gt1GfSQ7hQmSJ65SwYKk5G3TTi8SvEPmoEHRW6QxgUFo2v5nTMCSD3mPb4m3TULXxDd7JHNMRxP5",
  "key10": "4f1D9LPUmvuVxRqU6ebZxfxC62rLqLRe3SD9QPLz6PzqqQmBW7EavkePG1cEcT4JmF69G5iB43CZ415yLGhYYKQr",
  "key11": "cpuoXJJfEQJDcWZhbaSmCmJ4bYZ1zsjs7MyLjJtWUarvj3XkNj8uTSVbAFGR8rBYcievgWJo7mP1HyWuQuPVY2r",
  "key12": "2sSgEBKc6Anq3Fy1ebqd4xGnrox1McDwcVpNLGNw1SgtvXbN23Dgmhe7ZJCYvyx3necM53NdHUmwQoSQ7q6CUoBK",
  "key13": "65sN1Ea2w39pGDuaeHwunFTzmUvprH5QLKFJSV4gV22RbUzF7mJScsRMMkFKFV7wzDChTYav5tpMju7JuMcjM92f",
  "key14": "38R84NQMvya5D7LbJJZRjc7w8HKDNrLfXC4HqCkz6EEHSkfERYxRjGzG93ES8dwF1RDWLznxve4Tw2byBZgpEKPt",
  "key15": "4nkmRfqoVCpJCpyYyKemZ3owNVW4WHYKZ5vd4WCoPnEezAAWKZp6k1VsDc1Zh1cefXBLKDPJdBytsrQZeSV7V2D7",
  "key16": "2uFNXzCbMAdB7Hr49E3s9D3843s1R5Ga4FLPxExa8QSFwWFoFTbgCFo41fEAgvrB3EHPQRxEYr7ef2Mk2XkNakoz",
  "key17": "5yjWm47GLXyg3PwNDHE7PzU4BaRnVQWXb1vRrntzac6Zh1eRmXqmetJJSHXFhSqhTPRC3aumVu5YMC552Wqpn61R",
  "key18": "HfDYHDv16MCmWvcmP8cxZXfBBWvZRgA2CPaSQw42DDf4fdzXx7Lo11SJ68PVa4J3pmP1eAFrGywPDZJRejzjw7k",
  "key19": "CJfDSr9ZodcSuErhdXhryrRFVJibfabKEceATSr3st5rf2AkdwUCGf98eG9f9KubhrJ7p6ii6wyC3mwGk2122Yn",
  "key20": "5LRCTTAZKrcNnZ6AYjoksykshmtMYYroH7vNi9cU7E2RJuSeKv75eS7gHg9TrWaGvjcH53hnAAvXMeTniQn3jjPR",
  "key21": "2CjExqTABtQ3Y5idmcFWvNXpYYG8y9kmAMk3BX8PV4pNHRQz7BqCmCMHmir3pQtMxhKfm2rcvFSLEF4ZmawuzgWs",
  "key22": "4iVEL7HibHkfGi1uHz9CcXPvke18KsV1Ah3SRYFA2KKQhynhnnZiKpcypddFNrcegnJsiwWSZLKrauYUwD5Zy7o",
  "key23": "3DbTjDH3zyfqCTPiPpcVmYu44ZhiNY8CKcHH14CeKNRod1g2zDVtQ2PpV18M2aWU6nyBdnKQwT4idjd9xEzjUytg",
  "key24": "5oWmKDBXADdLxXCLo2GSxwQYqkM6WfrxEvTDtY48XrCEfDGfpGCdJ72GpNDrHkqPmgT83Gp1R71tppx6UJHvjzzH",
  "key25": "2SCMSZz2FKCb5bKUqDA3TgkYLqCr7DUauKZxXLNjkCRz2kQCYCfGyPHa6P3zdeeT5NPVF9TMUogR84ayd4v4WW1E",
  "key26": "3gHv7A41YVMdk4cEL2TCTtBXJG9gM9iTZvMXsRiYCFypqRKHjYtfzZ54VGW2DqQrtXE2tdEmvVeqtf4sCS1r2E21",
  "key27": "58rkLxtqNrhZMv9Bqwa1u6nYTAUc3MBXoS1RZY7owiZ39ZenLmqbGfAFZ3cZ26X232K7R7EDRV1DaGNuW334kSHT",
  "key28": "4fVmQSD5eHpgUeoaKSJB256JFy8zWUAbGHsTWEjNLnvkMkKxP6fDXwxzqcNpfuBPtmuGduYuGKYxJfqEvZFA8ydy",
  "key29": "4s3cuQ9P6KBNqaEhqTaZuHCHFE9zy2qDzKXSSuwdxwmvWGTNi2HSZ1BPXyS9KjdZDHdxuK9zcarkE8u869wKHS2H",
  "key30": "4pLMyh7VHfiAmQ9ojy4ZsntkHiydCDz4qndt2QTm67mC1pVAkzj6ssazjWTZMiKGptUoMb6x9dKcBnLp4ZKSQVL8",
  "key31": "5kW8opH6FEGyCTCHzkXLJESukeDvgDZPzNroDAeD1rydLkUU23AAfoyG54RRep5i1atz8Z73HdbRquRfU2tLTbP9",
  "key32": "3qekrA8oPttrSqPghopfqhRqVkpmmUdkF9KZnQHjCpGjPvHUJ4Rqku3EhT4FYuWrzGvwnT9AyQZDrtDENJFZwfRc",
  "key33": "3tMUeogrcG56A9rycm2xvHSa6C6VmsPpTsBKPbPNUEVH6gahHWkHfKP14b5kdbz7SW2Xebu7RL9hiYyBBdVJPtFe",
  "key34": "4c192DmVe6aQ3sgL267jR6zLLuyGYEzVTuqhTsHWFgftiDSBuSeRBAnpNtXAKVR4mfZtq8i9J6JU7QaDeLtB3CHw",
  "key35": "26gtk1d7G4MbS2LZNXS5pKddFTidJzhBpwufESLW9fGdtdHkv2RJ6hFcQnaaiceuFD1W66MDq3ymi3TJyCYFbzBL",
  "key36": "2BjM6S8SxDoLsQmrMJo3R2ScGd7985NzTG2wq4qLU7dfTXcXQN9y7h3hZR5pTwny5Mt3niTc5EM4TT6dVbD6nhGh",
  "key37": "4AZPVAwYPJL73bmnqpuNUxxT9ESvXoYwXLSxufoWSmjXTuR3UJuDMgYVvdUv9m9GnFSfSAoTDJ1fyvoiS9JVHkMS",
  "key38": "52Gf1hz3BC2FcmzS5sSeEmnAq4J6SFFChTUE6F5B7Zzy8T1DjEMV5QJenFRW7TeADresBJW8S7k4ExM8qdghAYJy",
  "key39": "3aWFXZodJWHbqt9HeghHh7cWUBqQ1qQtbzgZVXR1CKGABZ9rgvnrJm7syB5puwj72mpHpKpcjpmfh6AJYgpmmd5S",
  "key40": "25hKDREy6AN5ik2czrPfaRVaf8vyPKCb2wyxwfDa7bDmP4Ws5j5xM3wm557ginCFxxPfZ2mxRkksrcfx8DRLzX1P",
  "key41": "5BFmg4T7TX3XYk6vieYnfiPFJmKTSwrVEN5s3ewJP5hkuKaZVWsRTpXvpRLBoj1H1iMAfELEqoBRXDn51gxP8fva",
  "key42": "4LptmzkCF2rsgsKFx4jAUgJZHvkgpcjgZgVE2oL7YscYzLkxmMB2J94djd4RvFNbu1wdcRRXHEdfvushAM8SY1LL",
  "key43": "5pBMifDpT2nxv4xqjpjEBgHJ8w8DK57vrTLqPcgBefctBbMEU4FQZmYWAjzqQYM1BzBawdUP1XL92herJmpJbZoY",
  "key44": "3k57axFXArSiALNhq9GG31h8vSbdirD2p1vqK7hMX34dKQEtRCf2vMTuWZj7AN3KgEcpW1CJh8CYZsQQcfDGUVcU",
  "key45": "4VvXDmf8Kbhtuz17CwS2mggVFzLYVwTauTH9R8QnnSPxYcG6o6sUL88ZR1QutM1Cb6aR8zQjuYW6CUCZpKLkMa4j",
  "key46": "3wkDB9BECTsgoGAXmZGJBWh96YsnLSRZKtdEMhYKkes47t4cwtKBUHBKNkA8TZbjE1LJETFrcJxffVzRzLsXBG5s",
  "key47": "4EmXRw4teeXLZZozBMW2vXuGkUNTXs7SC8gH3YCaW5rDRBa3b5TTpLvPZ1BrJyByT1CVvFkfzJcaYyxT5TiJYpbA",
  "key48": "5TRn9q2L8wTA2K9Z1khy4zFEnNwLRC5BTQGNQqnAEMk3NK3vTk2eHGMDWsRqmpcwnzkvXTfebZoWG3nBARvrNgT8",
  "key49": "414JWMJPpEJxzo7A18YUD7Sp1VMbbxCUbjNd3JYv3SWr8koJww5ai2VeG3kqhBLNxLHMGse3f99QBUxRtLFEXd3J"
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
