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
    "531ritE4Mh9uhidBX88seA756hQdDzCzT6aa9HYkTwBhdjhUfmYfeoAiYxm6grrh3H3gnfUop86cgiPH8JXpZfA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kL1hSVKNK9jEoSkurz2vVZrRx3oLD1mRoAjkr999kywfSdGSBYjeE3TU8dp73tL42rXVhVKcGDWdmCvz68zx4S7",
  "key1": "66wznJ5Ww98yLLAzPJrBX4SpRMM4Bjt63uxCJAYA8J5bcUKMTuUzra2CvCNUTYQNuVW9sMDTbvy6Fam72y4gLwmW",
  "key2": "3vwYvoGs8joKy75op6dwMaguC8kaoKqWDkn8rz6t8sUxf5RJHi3BaYgybWTLCUD7ce5yECp2xkvE3nb5FPdD5ZpH",
  "key3": "46tbUtF5jSsZ22iK44bHWGK9dcVTKzBWzbPHeKS1vG8yqnzEbqJHTLvgceS4f9fD5isADQoYoEnpLA9iyHuQPzq8",
  "key4": "3uwtnBe1yNmgezxtk2Jy8ycCeDWKU2XJ8n2rHS9P3recyU4mCGt3xsdNXwi7KKnZYici7AeBGbrcBMzy4DNWRwgD",
  "key5": "3jddu5kaRBwwaJF6R8jvHiwiPhjbMKVHWHBW7obyN3Yfo38pkm6LopvRp4FAMu1YhRgtsh8i5dSVA4G846SnRQLs",
  "key6": "2msCZNpD4Km8JfVrLL4iizVGzDGgGdvrJ9ZqyVdo3qZacxo3PmCsCpuaYHk9TTYmVy5FfoRLFAYCMpWp1pXbv7Xb",
  "key7": "4zDSoTDH2WYrEiSiupbgh6snAxKrDCWqQbDTKe2FFEbzAHzEtLL59aVQBwgSijodEJPmwBgtvKKqRUQr9XQkypJ3",
  "key8": "jWDLnUVgRjQvFezAJanGB6HZCGpQHQ6sjnPZ2iby3WzGuoYiwU9q6FdLtRZzLbsB6Avi3D47BbwhG47rUFEECZZ",
  "key9": "5ukh3vv5P25yo7vpWSQfhdhqgTDhmWW1BZnRYYgLd1nozi4vm64izD69DtCGo7s8nULvka6xXQHyZUK2HJP1LqCL",
  "key10": "4yPFrEoudqq2JCBNvsM5pBEBDDbK8dRcyfB82YavQshQfyiRLW4xeBCmVU1KJSod6N8kbe9TBF8QqxNEYR13jENs",
  "key11": "3mGCAWENbzpPJwuxbcLVoebveVWw7w4tgWk5LGqrHVXXFm29WXRaArC53YWRSSJ9BwEGtsuJQqX6kxv4HLiiktmy",
  "key12": "4uUuRcKsSB3GmfJQ8CkgNLFP5a8NskHTMVuchom4rguB3Cf5z33WgEPrYLpTWXYgCFr9ctFzEoHuvtYmYhVppPZo",
  "key13": "4ajST6Wsf3mzaKyvFyH5PCSGuBTPR2Pdo1BTThnULX8b2HftUgF8gLroM3DtWbbmW3tAkYuXKXCjDuqBhUuo9GAs",
  "key14": "KwHN14u3ycV1CPov5AYD4rCgH8A4vULFSRwBNgArQg2xARvsnzdztjUe8gSFEHkaBKCd8BmsxepKT41BY4aozUi",
  "key15": "3p2CARis4mpqVtbkmGsVMKAMpMt3DjQPdiMuVhoV15GNrCj5c8ZvDg7GuJ9YKG2XeefjUZfY1pr9AKnE3g3Kk5YN",
  "key16": "nBSdEoayoGozWtuTz4jFB6H9hKJduD8ftn5QZY5XaCQB6Hgzk7ZEP9X1n5gSLbkaq9tNzXi1UCaEGoQtvbDH4zp",
  "key17": "3Ajv3mJxq4XktQrNTcxSh7MZM5k86e8ayLmUUxYW8EGd114UNQXG2fvEHXou1pZAKnTnfj2wMZdSXm2R3LYvArBj",
  "key18": "4itMgUUqrTbhDde7C5jdBZU1s8NLV71aTxLxFPAGUJLNutU5ZzkdEDDVrpdgYgYM9NzmR4vsXVQqguDBufkqD8mg",
  "key19": "57SqypLz2RSYeG1dW9yeSuWbx7az1LP8JcpNjrNW5fowv8A8e7w3eQL5Uxna9DgRqVrbGvTe4pdb4TQasSjSbcGA",
  "key20": "4VcawQabBvfgW5rrc9naCNfNTG7bfUM7WXkDDupBzWzUVPh3THNbwMXEgF8Cp1MxpTtZCmE5EcfLXwr7yFdTHbHH",
  "key21": "5poKeq9j3tesvt4Gqo5cBXkU6TrmJvSb443GnbUEXs4SyAcmgLh2y27Ph6vUFXiFFEH7rtqRe8yz9BCV4XhEshNL",
  "key22": "3N8rkKRjmewv2KrJKnNZJ1rweBbq8Fru5WSvQiDHFbTokQ7uaWk2nKMdoskpULguGbdTAJ8YU7PQw2twxRzFUmcL",
  "key23": "4SoF1AUifvFvEeFKvmf9XYyeSmj5A1MQ6W5aeoypHA8zt1qBjvGZzSAYtBrkrRvoayB29RcT9d371W3xYuYnZEJt",
  "key24": "3Dzna1sdnpe5vNYEwusHmuJXBF2jbgQeLsYLcRpjFHfLzBerutJMnQMgNBg41XibdoLzDVjx5Vy1A4XEpG7Fs8e1",
  "key25": "2irbCjVTuJaEtuPX7Fbc3hM2UZ15HvZfHeLeyNu3Wf3URpUgxUfhzn4pWvNpwKzsjw5t24tyspecJBJAUWZTjoDg",
  "key26": "5gf4Lv7D9QqaKduoF2HdjYVHgnoXv3Cy4cdbP4ZUZq39GB589ggQzetRSzu76BNik3imYgydNQZUCwzXWJuZoNGL",
  "key27": "5pWuSEaNbV1qX39A7zjTDB7KnnwpedbuZvUy5jf6VmXxMAJGiTNVMLTqfVeE9Dz4qBiyMxNBmHUoFVkMk3qgjp8b",
  "key28": "2rHmu3qhdJ7WkKZzzw9yPS5SChmYz6oVZNv7jwaAcCdSd3y4uftwc2CDpxg6o7RBZf9MyQmTYjjVQjYA4BkvHFNJ",
  "key29": "LdvCF4R7eWdFxMANomrwrwN7HgEVyvgHKqxeYxZv153JpZHpRuAbYztBiUEH9roWRX7JABQPCGi22gjn1Jpq7oY",
  "key30": "5pWVgpBakTPLP7ZTkQQKDNzA7fTc1iSgy2hGhHoEWe227oTsgqzrWdB2JS9wk5qhF9wwK4qgRUm3ukMpQbkGytek",
  "key31": "36V3qs5zuFwLpwtxbzpb586R1SiFfYChntu4GpKfXSu3C8dkZTUGhLCRNWQkPZfwLyLpYCcZ6seE4bzgfa5rRt8t",
  "key32": "5KRsoZAxRWMq2VrM1H5bLjJ2QURzBEkafHKfS1ptCqBfPPMbtFjDroGd7ammd4dNfSUFZE7YBHGw2Fu2pU9XGZjv",
  "key33": "53w864NGTdLZL2TWWhp3HgwoFaxdVjRFLkikuEiRoy7Gbmkku7CTxEwVyUkkWBARMstBsJzPixxwmkUXPGaoX6cq",
  "key34": "2ZJo6RUpePX8CT81YMs5qtGhf8HPz5gVJCrxjzX2CodRZgjw4QCgHeQV9bPMjFETh9XxQD5EV6LsbYnCdKbuK5oF",
  "key35": "3hB98s4gEKrKvUGTAZKz9d1gHNgK6xdXK6Xk5TuwaHD4Eau6WseBeEmSpVD9qtt2rcPYwf4RGeFN3H4oJ4YN5xfT",
  "key36": "4MCVgiUDM5hd8GRPQjuZ3XpjnCJC9Tpnnjz3pThDsmFCHVnxkjARaeTYLyK7JE5kpyeai2qFEPb6uaekXBJ7uEyv",
  "key37": "4yUaH6yxayFcfSzvJ8jG23uJ4Pccx5fyYUDZos6XPVtG9npiCTFUXFcp138drUJXtRY16xt5Rrv8vKvPyjEgx4A8",
  "key38": "2NLm5TNJfy62fvccEvXG6bMTeWA3f9J3ZHxWjYoXaxmUFeoFKsnNzL6xr4pWyernj4eitZPsyEyCZvgNhEvkoF23",
  "key39": "4QUVUDGdp9qzLpPPDqSFHvSrgqPDvyX8heqEF9U6EZfWStvaSWufcRCcspXaXv11myoXx6rcm7J53zGxQVPEyNbG"
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
