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
    "2oebzPTjmPmvUUaBUtKBxLpyzjxYLGo6JdcvW31RAEQ5bb6mZBYFb2ndzLAwbFoHLKcHdAY84czvEU45CbWoKUph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WK7b9Ngxz25KzgDi4eZDnxH9vwG4uBBPaAaxhhznvdVoVZUgGSU3ASuQezQASdMW9e9MWVZNNHo5Qi2eTZ2FrP2",
  "key1": "3xh7xqMDViW3wPtCz351mTXYunf9JxmFNexPndX8jR8qp623tovDPs14qBqoMctJnUiBJ3Lz4PN5dws3EWgM4DDm",
  "key2": "5hjfJL4zAEnBR2Vbh9urdvweqspQvXa1QVnydycEyHTsWp9YxSrjEQxsMnkfyiLdYujqQqps9HtJ2Gknm72U1KRB",
  "key3": "344yNLUmuEDcjM3usgVivptwdXLN7CARcyVyVtwZakCuVV2SoxHaU1PqHNvcRcaSCRCSo3CrWSSiX3zTZrXhHsGA",
  "key4": "2WoQNjKyc8nxETTveA4gGx6jLwbMbtbaucbmR7tETYmKL3VbU6vG26zGNt1U1tQCdjcSUu538e6NRd1NT8fmHMJH",
  "key5": "5bTV4sRdRUnoeSF26nED7T17gk7JBHDsDoV16Q6xbn416gW4pdDVJ31F365KkTnfcn2hdKnqxgbhFdnANbeyhjpo",
  "key6": "5tRCcWw7NAzwLgAySwNjy3xdED3d8PV3GZXcHnGWbKGbXw5vKxNKP93C1MssJkFu9DFnQ5E6iMLQwyt8R7x92SDw",
  "key7": "WD5L1K6KWRDWLs8vtmnLFkyYyDqccE5pYFhbvz4FBEj3G5yQ3TqyJpcfF6GgKxprfRJvqi8icoZALdA9kAde3iD",
  "key8": "4xSCi6b92FuSvgcFus6B1nNZBGhJ7MNoUhTKYYW8DAK1bm9fPBK91eVPx7KZ2ZUQQPwFmGcYn49VCiP1VfA6NHJb",
  "key9": "2Jaa9q8DNk38g938nW9kLyLki4ggzz4cd7JCmK2Cs4P9KNN6aGWMmartmDYmubh5YRzpvjpfDkcJpYxXWsgeW6kW",
  "key10": "58rRuUrYupUzjm3KpvHkYFb5nfhykqJRHGPyP9kaGMDpm66BV1niP8KUux9PRLETU5Zjma7VPCZy3KYYsrKSfnjf",
  "key11": "4V7kgF5dwyuSAskVJWjRwwmUzcDm54WMVsbA64bAHJ38F7VqJzRk9Cu68uSLHgQcwywo5YGbK8hkjMs4EsWPD6SH",
  "key12": "2gDSkphAtAGf4XxcyngxzQx1SDLBc1BvkipEhmjyov6RoCR6Em2jNRFxZU2vLPotXaUkfZDXizy8u7G3C15hhCoS",
  "key13": "2ox5y7HbP9xPUFxXNPui3RJaxQ2CpUb1akow2FDzL2W1Uv8kTA6nhYtiHaUpLWWRg8WAcgeRPkUdVuasjaXy8nq2",
  "key14": "3cCrd3JkxAS83UT9A3Q6HVA4xQCq8xVax9BN4D9kf7rW1GWToPMh6TxMUfKBGASQuze8rYpFkkni2FMFx36TXaPS",
  "key15": "2F1Wbxd8gEEbzcbQoSAZjoWF5z9gYKB9uJXYXqXZN4UtymHNGsVQrBemxhhRAKaYqMpUFng5CAZkijko1L7uj2i6",
  "key16": "2c9om1fH1sivqhZRSspCnJ45ycmdsLsCHGVPiuY8cadHh1yUd5rbjpRvK5aqJqPFUxMT7QA32Qrc5Eo7U1Yq6Do4",
  "key17": "2yYg9cTDkcHXgSXQW43Qo49SE4zADSZgT3cZyw9RYKwXh16bVxJyw7xFKPKiXgqFJsdaFzCxD2jz94yTfwmYxAXT",
  "key18": "2ieAZRXZURTtmjwCrtjvApw4zWQDaPReFp9mN3JffSnQzWQeCeKfsuyCZsgnPek9rucs2bg1xzH7FzVK3Jwrwazq",
  "key19": "3EMV4XNrxkVEWyRE2JsBSn4QvJUZxjXqHevGjphNjmBnctBYtSKayQnK2U6mK4ehdCDV3anDvwu3VzCamRtSnFP6",
  "key20": "4Fpu7BcanxqihYTvZWXcGXe8n1GwYKazwRE8j2jodKKDhvCNE5v5DJXf2dhxSRyPYHsuJ1nw7KzLQAkBxM5dTXLq",
  "key21": "2Tg9MV5rtXC2w5qqZP1RASxtDfzruxsR4cznYWdc4pBuFxodtATzkJY1Req1ucCKambyK388abjR2VfExprstx3B",
  "key22": "2kxHryhZAoG1a4SaN7yybKB3RQT342s8on1N8SWTEz2EYUDddkznoYxRc5ji6PC64VURAjQN44UziCHduVbistNY",
  "key23": "65Xmw3QHgyoxfmCFWiZjCEZ9srVN93eGAr6nL1zEFFFSMbaxVhRBKMwCREhcHoGE6DYRcHvRXaeLkcUiMnudGLMQ",
  "key24": "48VdG3eChf3UsYCA69dfZU9Cy2rsPdQ7brc8s5VtJQ1m8bLVg7dfASwGacc8A2wcPYRsnzQ6HuoowNc4fpEusWcG",
  "key25": "4WwvDiK5ihBEuCnmFbfXkDn9Wm5HwESDBt8SAMGg9xBLzWTXHFbi3hW3XQBgeDasobRea8cCRU9sQFbbLXBoLemx",
  "key26": "4VLe3JVBqUxNseXS98XT3xVWEBhCsvMDMfQadwny1zFu4qWJ3To3rJTEfdFpsXCdPFGnkSqbJRhijUGt61c98FEy",
  "key27": "5PMxjS3MsoRkpkiWbTdJdh2wKQU4Gjygo5KKqa6TtYMiKwmZSZwGKbGRWNkWMPKZ6YiW43CcvedJtKNHYihBvNno",
  "key28": "4P6X1tESofHYzpdbpyX6tJz61BphUM6RiHFdYufhGhCKCbDodPiT8rWu7cv9Re7pSVDPg4iDcBz6AqPrGcKBivTj",
  "key29": "4ocWpDZQKNwKXrAB11qn5rHbkp65j5xqZiQ6dNqML1s1qPNoeX6j1hYVWZ44Jp9iAKqAMgLcCrRLFy21C1533isz",
  "key30": "4CBNznJbNg2RWrdySjRoviuNFsQeoedzUJsyzt73u9ZdY1rVEeBeAw9zCY3BoSqQxJfNNqhLbTGHUePU4ryKbDXT",
  "key31": "4ocxzhCuFJjuhcqyg4oYCviD8Bb5o3yCMayskfFJsB8wYXWsJstTN4SbbFnbTSf3F4RNo1ofbWxJwZHP1GR6RV7a",
  "key32": "4uyErQhBNBx2FtimgaEcStjBwMMXzBDHg7MMtjGE96ubPS6tJTJhJuP4mPEVVMv1Xcm7BL6epdpKi2uiA3QMGHYz",
  "key33": "25aQRYhMHMn1Yc62aHqrE8iDXuTbsnShRsk8R7y9MsVPQDuUV86y6aHbcmru8zR5A6PPjM8kUFFo8hXtia6QkEGV"
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
