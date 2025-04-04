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
    "3eHFT1gYMusYyDou6Dwfmwp6o6t6apuSKS6L1rof86yRuVWBuMuXv5eik1LouTUV9hkfTvxdSyJ7wzhhBEHLCoFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGV3G9J1F8h3nS9QkNsjHoRFT9DhDvViUtVs1a4kzwNR3S9peKAgKSvz1ucYira6WgKS7sdkmUFUoXLxSG8i4Up",
  "key1": "4oowMyxHWUssrVrhqwe466vhXmWTetwTr42go6VtTWRSEZ69qw1HVV5jDid4Lg6qy2hzy5QGGMm6Sr3EVCpEZbaX",
  "key2": "5YdDc9pQEY1ADi7F91wHU5huzuPcNecoWitsuyKmNgN736kfQXfw5oXQLeKxYpEZsotHr9kKTjacrwqE15coJBvY",
  "key3": "5eQUH1z7FwtrtWmYWf4beqk3MP8v2DPxm1eqZJyz4SoX5pYkW4JYcaMiKztbZrhFhvEyxuuCdgaFu2FJ9a9X5EKQ",
  "key4": "4kyk22RYZ7jyohFBXB94YzdXgVuUd8hNH3WiKQNeWYgVjfB5kXe8rMLw7hKs1s5h5RigrsGpAmyNpCxaCcPWjpJT",
  "key5": "5Vj5r6R2ntLxtBhnLyhEU8qzQME6GxvEda68SFWwkmZyFLYBkff5jQu88WVCsw2crvaPKnqoUYSR1vwEnH3JEcbt",
  "key6": "3M1CRKZHaDp9VqSD4Zh4yfoWHckECa5eijoNgohMW87FDusmKVTinbzLJ9aexJyjy5Ko4AQi5voeKeNarjiLsm8",
  "key7": "33aWrbganhDcsMq9Bv5nfsev9QAZxN4L7JSNWk2wvTUUXFz8vps6b64vLpv2mKNQz7ZSxtDUFVBV3kEGrTwU1dnD",
  "key8": "4joEttBVsUDujAQ9rAi1R8A4Nt3HHPEC8nWJpw3VB6X3pBbbHo18MABd3kkMUM9dttgLQeoqKyWNmcFQj6zVZXJf",
  "key9": "Z9NVKRqQ8wSnNn7emZDDGGsnEYqnbCnSud1pJFUGpqu7ThkeE1GnSV75NY49pMMEnrEQMadYVopqxz4Pjnak1ea",
  "key10": "8XkGbeqSYZ5MtpCaDTjbMftqSoFAZXGksQ8s62rTMgoUTeACA5MG6DryjWx8rMoBr9GnM2mRs9NXjnjer9tmfMR",
  "key11": "5FtvDLj3HCVH7bJjfNnZgU1EfM6oRfhPW2RdXx2XVwPDDVKUK342bBhvM42ATdJeXVcBnBgkbHqBpptpq3aRqHf",
  "key12": "62dHMsdbt6PzXf474ymHPCRzUBMH4yw7NU2RtLuoGinaGCun9wt2kjjP6MxM6vDaqJTmUTpaHYJKnhpkQh57rQ7S",
  "key13": "4ifoQRk6PHtavW3FPJNFUQYxHG8FEqGL6X2Y3pYM5ywHReYjqnj6eb7xZjbYkrgPBjxYPh1BeqzCUJDioVBP4EpP",
  "key14": "4Cy8AbAC92cYzU33RgLYPTwHYgyJPwnDUobyCebzFiYtcGBZLK9gjem4KDa34cLZQdXhmShtm4GkCTtjxi1NGv76",
  "key15": "62489C2QX2oNQi8zkAMtLpfbydwDQ1yXgiAkG7QWtibxz4jX9Jm8uPyAUQbUZ1ePJgom1cTUc6FfuekDTVzFDVaA",
  "key16": "4HuwaP7R8KRm2KE5A6iwuxo8SseKCQnRTi1tocPS7jtED4PcZuxRWvFK7fzsGJ9pdTT1rTZbieNZtuauipdkLvCY",
  "key17": "4CQWtheiLDrgn5m8jydd4SEfrXD8C7eAHGyRZpg8gTgwqSpm4gLFszKpQFW1qqS3CLTL8c4vGFz523oDxctA9css",
  "key18": "juGCtJE5MTqugv7FDoBYZ181Pzi8nmjbSWvAQYepxBiW4GTsV787CitnWc3A8Z7UCnjQas67HDbZo9aRy7QuFHk",
  "key19": "cYkEPb2oHWfD9K1cRL2h2cPBHAgHAAwj98AUYB74KRo98hHNJsAdG95moAmcvJq52h32eiULXYkusfZHqxtGWCh",
  "key20": "gdrQmdrqTyaao7tufJ3agAh7WaeER2NxqrHWG1ZEcTGGqWMqdE5ahUFxM7o4YyPDoLzWorMjEPTMj3haLGeVDrC",
  "key21": "3t1jS5zSToLkRKtKVwaEtL3MMSSHjs7MiYtoJD9bZ2emskBVMWTkpG4WbDQQizoDtDQwVGTPpxqJt5LqeQyNFf7j",
  "key22": "iCTvx8wA7qbr1iEuNdDoS6JETWj8BYuyReevmX9k3Gm8Vb95mi7uZqS3nqYTszT5gqYwtm1zd5sUfP7vgdpyWs6",
  "key23": "8kP9igfcyKPsbyQtK6ePRPS9ycp5JoccbZiy47qTqkgYZQCsvNLx8ZhqUP9W64jFYUXUTU8VMrS9h8c9Pq3aC2J",
  "key24": "5jfK6hUR1VrvaPear8tG4njdKM8j7W7CBLo5jQMrmjmz4QKrw5QKS7cmZXCFVGtrRKe5e12CwgoL28Ed5QYwT1io",
  "key25": "5ihNFAvBGbh9qmDMCyJcdCuZXTK9Z27gQS4Rjp7V29v8yeKyZwCL4LaL69KkMGawVEemb8v7aNKGj1gxu4dz4Fss",
  "key26": "3A6P3ENARnzoNqmsk7HkN2fTBBcf4ToCWYdsatXavVG66YeprpYcfyFJtP9MR8v3bWufDBJ3eF3epY6QdeBbdPy",
  "key27": "5QHWyEA677t4Q2rZvcAnNTmUobDWpha3ofChR1Lfu5AHR75nkVwBDw2ETg9UHVWExfMfFSYD3Bh8iFzh6HAGknEF",
  "key28": "58yAPgZW9SpuLvxXAu1v5uQ5tekeC2RFXZf4bq3T6ACtkU3SbLN7TayajDfCS64TdREWLN8WjQ1QJd62pcUeEqkL",
  "key29": "2QPezBeVCojzGMCmiDAH6xV2xsMgMFtPS63tWrxoCYsHoTg45DSW58HbhVssD6uKXRYgCW57DvGmUoJGGjY17tnp",
  "key30": "4wgssTtaqkYTWcWyeEkQsZ9fVdsmghC97UJLkPJe4bLRiYTxvtEvNtd7rnug6yCb8CQSz9eRu9UazV4DExjcmLna"
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
