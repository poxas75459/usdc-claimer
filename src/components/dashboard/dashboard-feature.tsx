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
    "45KFRBfs4f2tEUds4XKRanytURqMYXjrbsrF2LUYh8TWttQWBGqnFskcRdUFdM8PiXL5cisxkaLP3utT1JV7euSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZD4qJ9HsQUL9MrzH7fHtp5pWZYRnUYPgYnza9Cd734eYNnqELi4LZXo44YmNwaF1iRpScaK8ZnDhcX13A67tFV",
  "key1": "5gVrPFRUvKc47nb9ifQwjL5JQYJX9TNed8NqUoGNpCHtCPF5PBmjPS2tagPnAUwPXWRigBWAPMvL2JU4P7avdu2P",
  "key2": "62HBuXaEkmGTjX3Zp5YsjSfy5Rp7CpQUkz1hBhW1KDtyWtpAgEBVjZbVcNXBSEBtuz31fH1vnFkah5z7HzokGV9D",
  "key3": "tZx2euTp5f9NSqP98MWpCdx6pchjo2XX3iK6vKiTC9AUksR9uqkRjsWMcwY8Nh56odmMcGUdZBMyhmrSJ7J9FGE",
  "key4": "359PwEK4CXAKRXNP1w3BY2aB85tV21e3SRKi5RobhLWtf7mGqxGao9s8jzneCcBctBZr4tLHLbzHL2Sunymasncd",
  "key5": "3KPkLX8Li6vDfKdGNSWa5hwE2vAesK6zx8UenVJfaySnfEG9nkRFsgJNWcwMGvMJbuAEhiMw597gHL6sZ5dzp4kn",
  "key6": "5Lu7wSYNriH2pqR7ZztReu4uXt1ZYywWXMAvqNx2AQJ2BHhmvsxjbKfzBUS2wJTrs58sdaUpy1SrGDeZBejqzXy5",
  "key7": "5xgQUYuXZeQ4vM1WiMAr7embop1AWKPAVmAFGhGriFVbAqwrotSNLmMFYf3jTvE8fzwVkRh75WXncSvVYrpbLtNr",
  "key8": "2zTCJfb2S9DEQynA38Tsf7t6Y5G3HLtD224rT8FJwb2cAtcHHwkb3494vpxmzZ37moZ8FxzcxhiXLnLU5VMrXqCu",
  "key9": "3GUkdS22dmXqeaRAjrPZxn1vRQUgTCLeCNb66Geip3MYLc77WMb5zdoD6JHyN9vuG7cpEV4xNWfKf8CPbQHFi89r",
  "key10": "3h7hfr4JgSAvrFTfQfwmxZAGKyeMmRK7MCUxtvGi8Nf6RDqrb38jGLFiLoWDozdmyUH36VeAtjThE58DZrgC1HdC",
  "key11": "22cpLERbFHUidsSGawSTz27wCrMToPWad6B38fNcXxuqnzLcst5wCdJ1HrhsgAaJWLtzQu1r1JCNZYqgxLdh3Qcr",
  "key12": "37W7kZcTiUxy5Hm1rU2S9GyU9cS11qf88VFiHQEUt9e2sHjwZgNDNchCdmNLcApoWhkfZWLQUAAqqdHUTBmDjcAn",
  "key13": "nLprCoKW6K9VtACwPV1EmCPKX2c1BL2H7sphZzfSe4sW1QgNdJWcmtPqkpUHARtJpD29Yd4SvsvLiNcA2qouMdy",
  "key14": "5gr6Y4GD51RXyZ9pCY3vykun4mucZ4Fmugm1Fxr4PXnFHLGAibKsdqStLUzY9bNspE5SgzPrzAbQtYG4nLzhWfQs",
  "key15": "4BQs8TSUYW9hKqGiwbtE4ok3HGqc1xP7CzXTzKjeDWutEGeeh3U1d8kLkuMGRijwV2SunsnVBTR4e1dzYjLBQoBr",
  "key16": "2EUsXQanbrHtx8LYdSpNkaaj1pZabWnvnqXvW2mvvtpijQi7HHF3dQ5igrSJvyXR1znP9EbejVZwtrPGWuLbXPJq",
  "key17": "46JLq1VcKzDqyoohDrho5WdgVpSza416gkuuScr8aQBdLWphZkaUX2BS5E442URfh8uGaH2vZeoUx8mBeC28Cb8e",
  "key18": "5jArMEq4kYP35oCTJvR4AxSheRJVyiuGuEE7LDF7qXBYbu3Sdx6W5wsZc6ibftH21hnAL9FiJck1exkosA4Hyc2q",
  "key19": "25xipaLURqWqXWXiyseZSemTR4r4mWoQsvqdLS5CuNihmKaJJR2T8G4mhoFkXxSTmxSiZNu13Ei2yiaJgQuGzDAC",
  "key20": "56RCozrSE2Xa7gnDPmHPP1qS2ZRJvmMRFXQXxwjZBcmxfi5jBuGSyuGSpxvtik2uzfG6sjpPMFTCtYQFvwcX2WvU",
  "key21": "2zQc64tCJwSQdfQYhXtXksekC3cmoiPpqCRUuHrLZTnk7yzUUqx8xsom15QGbdZ7JkjHKmm1fhT52iQ9n3GZrnzk",
  "key22": "zna2p2BmtT9UEsjdBaKNZESDbhokMg6ffq7vtfnzdBazBa4DVwGQeqFAqPrvErwpXxiz8iCc3k2pFwnP1KD1ZiC",
  "key23": "5pq9cczutCfDFCjv8eD9A61oLgfj2yKtTW6UN6x3Xx7NTxtwvwTmNtdXy3fxBDGrNfktP6PcpdXbLcEispdgXqsK",
  "key24": "3NpqTMNXGzFK6NggGRYgZJZXJbDcYz5UikwsivQFKLZJfy27fHF3D7T15bi72ozefvy8oTG5Qm2985Z95GRqaLVn",
  "key25": "44McquvXNx7Km3YbLQNFR1im2gWC6at6Bvh8h6KC6qwviYp88oHWwqsRgg2rUR4PGhhP9z51BwjCciZjy7rqdbxj",
  "key26": "xF48mCzQsMzkmXajmK2KBuohNxiMuoi9GEBnxJeEFCmQQYrv7ypzn3kX5QnyNjfg3JakJpcohHNE2oPo9w8HaWT",
  "key27": "43Hww1Gje2hohB9GHtgdYSpRPkWX62meoPrf9y9uqHUMKaVHM9fa3KqtVuJERURyd5sGT44PmW1YDUvE1pAWaGC7",
  "key28": "3CwShuKbHFNcRZEDxUXqo9h2V4tEx4tNQeq2pSXLqX8auqGnBSekdCmj6ygoN7Hu4F7L85Niy7BHBwpiVXF6X5jc",
  "key29": "yEk14HJFyuLXufUVQ8BWRd5YcqtQESEEcF1gRkLWJhQe2AMqNh5JFfzuD4Rtr2kJaRJ5wMmWxcooFVxMi4aXyys",
  "key30": "4ncQx3ZJrhXmaNY97MeBxD2H7L2dsVNc5XnxmxELfp4j4F1jizmkVYqomBzCs1Srq2WA93Dy23pb4pgYVgiprJUs",
  "key31": "3pvZbBSfw6DANiym8bq1XB8WU8ra5zkWzityfJk1KGvy76zwUSH5kKqXQkKe7YzWMvjTBbe1GpRKEYnryu2ei8Af",
  "key32": "61nj6J1WwbMwgJ89SyfSFFBMZFdRi7HFPpN38SHSsEQVNaEWG9M1zvWcVM8wwfJRGtERG4XP8aE7SeT1iY7f6VhL",
  "key33": "5KgDzADBWJozCBT91DN9gNYN3H7w1MJYABCRG9zyLYE2zZQf6SRiHfZNdS8DBRwA1SUfQQiJDC9Zy7hLj25aPxdr",
  "key34": "5xXrhuEzXkWyPbsEvAE4csrL1WUU6Ax2zVSy5rwcUMSodtn6XzQzgpwKPSikJWQw1swmQeXYPa9ZWamQjm99vZeh",
  "key35": "2HEZPDKtqZ2Kms2uvx3BXrjVHf5kZ5URqzGy4XpXyjDqmLGBfL67UBCYNAy3MaXF1NxY4quLWUYUaRemmrQrwPP9",
  "key36": "2VsgdXLknE6ynE3xEnsL5EZJB3a49M1wVL6KawMDz5Eay97igrq6gvDrVGRTwRmKhJCx1oi6qva2h1T5d8HcmqBo",
  "key37": "3gcKE2xiPyLCHUvsjKBFZn8D8fse1bkWCmSDnXLj4JVkGuDNy9ajZEdACQJwYCGj41mm6uYSns6rSvptnsxg5MPs",
  "key38": "3cNvrV9Mex3kJcuFRsqJ7DUr5KDAVfHRHPwBTLLiqSZPha9wPq3cQTqPFKezFBfSzFT7asYbBsyGMWhwXyRgUAyR",
  "key39": "AyAChptKutWe7hmfTNFDdbCSzps2ndfqzW8YfFc6u7Pjmj6iRWFMFEKmiy3z78jgXMc7mTgGPipbiqvgqZxhL8o",
  "key40": "3LzKsz3DuHsB7ayCZ1u4b7nnBNAt1EPeK66yf4FPqbk6tjSBrkFm5LesJtVnEpNQ4Dihi7oU9Xz7fv9TYnfSyH7a",
  "key41": "C1FEnGwhJYdVa6dXeaXB4qCLjuyPkpbymFZt1xup8RdS2zvtU6eqdUzwfu2fkJTSyqopvdxZZ5Mp46YkoZM98yS",
  "key42": "3GTFofnn5GJiBtto49MfpN73S87ZQ1HpfTmocHUhbWecodCUhaXB3GTwANaSd6GWLxL9PLvzHtgoAtW3yqjgHZiK",
  "key43": "2ZyGqLBWFTnH7m3L14dGRgVehkYyBT1G6s3kdXV5zrct7Kd3RjnCZpgGxfwVWscz84mgMFZM78hhkELj5vGVyYL3"
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
