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
    "4uk4M7MoBhH3nBnXKqUfPr9NjnczfLgPpb5sZr9HsUsaiwAhHBrZseirRQNsfSv58yHvpi49weBv8HWA6fFEvsiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6PdMQ3Cv5SdYZF8DL2CiBHqtMDUYWEsagxJTFDGDFr7fjd7QAtYTXRSjHpCc7R1dQZvJGa34qsCyd7zeC8t39W",
  "key1": "kDRNrGcws6vBxjLfuSchop5zcVozgqetgWunpcvTWoNUArUPUNmjETJ3NXZp7Nyns248e6og5MrZGcYff8oy2pW",
  "key2": "3PmVhgpfjo1enPUj3K3bHW7xrkGv9nyeuSowfW9ahCSGrxpK4uTFWtLSHbaDo3ouLgiPmwq9ts6LHYBqQiXDwKHn",
  "key3": "2RcCxHguZDVhmMsNA3K4UrEEVz4kmTYALHyReZ9DyHC2r2AV3F4QVuU6X1NFYoBZNaQCPWM1MDstjhhLLg6i2XC",
  "key4": "46hMswxKq1U6MB2rrxjCH1rzSAtx6Z4JsxAE53LPYkwVyTjG44cGTR8uEW7417RKK1FH5TB4TJu42rjYURf1AfUB",
  "key5": "5juhChbM79MwDKpCyYTDYLTxXgLL9EDVY1aMYw5dMGaZ7NdmeRR9KFsAYrxc5iNHsBmd8UVKbg2Y7q9qyHNQCwvf",
  "key6": "3X9Xb8FN4asmg8v3Fzu2AqfZ7Qo9vMF6CDTHVTjB7hMHJHyVyonoHopQH2qndrZLhBnSdcUy4hug3uPPBS6f7JKw",
  "key7": "32wQFExYVTuL5AMhHgZqFcUfu74LyY94aeqJpzGsNzDenZaRSJcYSVQdx3STtXp42uWoUgstDSrhcY54CXUgEZwE",
  "key8": "KUryNPwY2vrL5otXcHv8HoFmKPEVW6LgU9G6NpiBe1kTVMbiWXKuboxR7zHr99QSJEzaCjVHFciuT5Qt5pf39PT",
  "key9": "47J4hUHGc7bg27yocbExH2yRYEPJ1qdneqD1NFSxNDoAb1aobDAwqeL8XzjWovM3557efuFFqLuWbAtWBLMLtrLK",
  "key10": "TXHi3rqhRZqPRtEemYHum2sNEARJ9xriaxFMA7pW2VhhFjZYoiKsa1HkVtAs8QDnuDLZtroQZfJT2YxnESovTQB",
  "key11": "5ZjafAoAY1mzJyvreMCPJYmfs2JmjHmxgdYDa5ZbpYQnJDPSqFCcTvHeATiyQrgXyhyCH2YkRK6tErBUVFeMGNzc",
  "key12": "j3M6hR1L91P3SQHve28mu5WofySuYJnwPSHjBv7xtw9DdyMuhdFeBpTT7eT1BB2HfDYew1dYVCKXM97BmRVw9E3",
  "key13": "2LnT1sRNFynFJtUKBergYysML9GgT5ruCNhL8D6civx3F5UdU7r67jkW7Y5CrFtRDKRhTxiD4FRdtmS7TBfXh4er",
  "key14": "4UKPHNskG5BDf2LozjkXL7nswt8Hho3mKi5fNpDJL1A35v2Qm9ikSe6jQMMxj8e1fRqz5gNnGyWLcsqXPaFZ7cdd",
  "key15": "5bFaXX47z7UoMMcxuujxaqeykDqRcmL9KCckx7QPbbNetQ7FSGAWj4qAdipfo2xNuMHLExdozHyW6xCVbidMrGtg",
  "key16": "3vAGB9DaCp7k72T3AQd62jaLezMA24pEDREny34Dteoe2pSGJN5D7KMubWb54SjTQsVg5TZQY8yUkeKGYS9mUsTA",
  "key17": "uvpMFb7wFQQrCaXFpyGs5dCWALqhFT6C6TvxWZgdPGrb65S9kFD5WFBQkKBEaSEq1hs9cvuNwr8aWZafUaJxq1L",
  "key18": "2oddP6JtBpKzM267EbKf4miLhdAMhfyWPe3CCWFowZ2QVmgynFXQwroye3PpdeW9q6gi28puMMaaEVWkAaenTzG7",
  "key19": "3zUd2FLd9TLCofCrniz2UgLhrDfxnvr8D2aGCFKDjg49womva5aMw38Epa3aXzcZJJkZkAVdcdi66w4WdLwQMcvX",
  "key20": "4MiASaN4vJCR5x9SjvbZcqbhp2PEhQ8oAeA351xmRvTX5fJV2rbNyqWKGnTJjQuVXpSpBCE8Rc4xmCXJW5ueQvDY",
  "key21": "rGupeoaT3UJGCU2N15WZFkthb86DCiMZVZTr1nSzjPjHx1yag5vV3eiQvQ2MWGp4Hx5FyMEoDJmk42vnPUmGs5c",
  "key22": "62Qmt3T49emuHfxs3VuanxiDRgNrEbRmot13UheYVQyc6DHpPQt3PFdvUNgSUpQ7mn8SMYRavEgZ5FFtHiyWeF99",
  "key23": "3geDBUsWDNHevzTq78uV4fAmDYY6U47KWXAZDka7er85NqkuUxHSJATboy5YjPUzoHdnSswtGZZyAKxWCJVebePv",
  "key24": "3SL2NEtosTaoXN1uuLpFaypm4CzS1T6KtQHaM2rg2qmjWzhN8ApHC2oDxqExs3XcHMk3JqUyufSzpqQNj8hCurA6",
  "key25": "45FcKSyfGeP46ufJae4ztAGHqzQK2KqcdmK2tX2cgnw97Kao9ft7Dxpw1Z9mgf2d9DCcCTAk2LoaJgEqpeHzcLRd",
  "key26": "2sa983BBrpBR3HRtmfkjUFvRHwEPdK5SJj1YVx8QScxevXBMBDwtvhJwpKnGJRa6AM19Tg1wqUtfBZit4R3jWHBw",
  "key27": "2AaLWgEeXBxEeX3y8m16f848dB8n6NvU629BNPqwyzVbV4GaavGPLFGX6Q3rDMyStGWiZS7SmQ7T8WGTzu6oXNKo",
  "key28": "2vPK3pvRkyZydYgFyxuqenRy3gscPibq8amcyHePmaJqZyuFuKL9Sq3YncmvLdc4XpHotLBujNj4zQgbsiaYWM6L",
  "key29": "2yCoUkSHu1eCBRSFhWrt6VVbdCJviVQ7hLMAM6mFht96L83WfjN2utdRGFWDXozSvUDjRf3JxMQDMFfnxUhzaCQG"
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
