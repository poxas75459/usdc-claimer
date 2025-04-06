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
    "nAPR2HvQGNuWSc34ZCwevxinJ3aih7n8Crj5dcvk4Q51LSDr1jMQBGWJYh5DcETFvt2aAYYXzRDrpfJMh2uPG43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mEvk9tV9Mpj9tX3u1prQb2CjWtrH68VynnJuZKmr2ni2ywr3X9XNusfeCvWSrxip7vSZpntKwhVpKQA1yroTkM",
  "key1": "3Ug5eswhjHNXLrM5yCPDTdnh7pBGdHf2s9JfgWkuHYootECRpZZRFVcU7G4Jbk6b5YRE6YMpgfqVAujFrbexA3aE",
  "key2": "5fTeaWLXWAwHNsEDvMQYrRWJaYgM5pC61uH9JGv7ZjnMrr2CUrP5caUiugGhFPsEW9Mh4gYSwfKZiYLmYERJAasF",
  "key3": "5v9FY4zYT3iXbJ3XqNfNTWTQ1jXLjGUtXXgJGivnRtC38ZCdqPqksJaikhkq5MtPuLr9fqqVeydMBJMCpwVxumxn",
  "key4": "4GvMYB2M1vFYk144aidbbJYzTb7jwNyAo29n7WkpYHKJMLLaLRGPPtezqx5RNVr4HcQscDcZkXmkrBHjY9A31ZFh",
  "key5": "5nMWSUoWbNnRWCymQMjSudN8jFQCSXkiPWerPvbPQtKy1tzjVigt9NJYTp9nLqmB1pcs5ut4eYLkjGXti5JvgUvK",
  "key6": "24AntgDmhPDsGDHEuQ2EwDtrtbBkvsRvEMuwQbA7Ey4oSa5D7b5hfqZUMPr1zf9nXF5EeYupvdszoG7wf6SYdaqk",
  "key7": "mkaXbSRGEdch8tNVFaiXEbnbBr39hyEDAWDHSqzTm24GpTCLS7ee5LRtVH6yVgvDHKCivJxgTo2nWGsoV4PQ2SZ",
  "key8": "yk4HgT5cXpfpgS4hPi6YCnBwiXoUXF3JM2WTo536iuC6TY7TiJpnFWBfiHcjdgLxmeE4DirD6VYju83ssmC8qoj",
  "key9": "2S1PvNQw58CdVF39qe9TE48AQiNBr4m15xq5s4ovB2XECmYdP3yfErn5AL1Gx2HJmHb4wR5RbsJKT9kqZv7ch9xS",
  "key10": "QSnj9K9oKXaX731R7JpR5D1hpxS5nP3HUeA72HAhMn6SrjJkv8hKhEw5CPxEzTPTTBuDeTsTSfLZHkJWAxExify",
  "key11": "5DyEFMB4tuLSNwRgrgYiwqCNNx4sdXCth1qmZme1FDnjUjgWJikD2ajadmf36WXyN9dAdpHZpXcMFuMBBUwsw923",
  "key12": "2LdSHSEAZPMCj2nrnAam1Lr3eCuCwtD6887GiaDApVWcvTkivQvW5sVw8oGSxfdT5xJdBBA5yTeee6tveST3QtDj",
  "key13": "5sbimS8R58kmMbm3ZjpwwLmGx8LahSHjVnj4WrT2Z7zykdW7kd9pGaULUVcH82s255BSL5GieSr1CgeGLvo1AGLJ",
  "key14": "5jC8KGjaJ9JUn3iNciS5BFkbnpzwZdJVxCo5B5bbUGmgBRocZxrpjUaxGnYjVacViGG1ZCruPeau9A2odXqVr7Gn",
  "key15": "49zXTLvFDW3tKxRcrH14Vpizqr1cu26FUkhbE76UEnwi6jvzxXSMwwVC9PRyJd11tLZBbowHMt7CnZ3mUyNQmwLN",
  "key16": "wFFK589mZ8Z8VRUbd82Wr6eDhjh8DH5n7ken2PALeJ9T3KuMqZAUzJf79XeyhHED6gXh3WZxLke6REEe1wVkRiv",
  "key17": "4eohhT7Wjtyqtutomtu5t5zXxCRfcQPhtXYYNJvjUwdWEZcSn7w79yJfeusAT4H4NanrLyvWoiv7xWXdxjtC9ikh",
  "key18": "3DFaQFFeoW1MxKaZ3HziRJ1FukUDdcEdrZ8G1uULSfhB9WgwGP5QujUJuQUpD4DdV36ZgoKsFJXKnM7yN8AWzGJP",
  "key19": "gQxjUq8GekMvq148Waorvz9vP7guA3JM3m7vsC9CM3ze2PFNA7go3karzG2mAQRvahD1eSoVhuf6EmhJiEZvg8y",
  "key20": "2T7cwCPU4iYP5zoR3kV3WYGhAwFJWh7rrHEJcwGdDf4MXckKTevJSMjoGqiowTg66XCNSZz5gQ5RyUw2Y5csxfBZ",
  "key21": "j6hKcCMgdWpLVhDCBubwj6Sbhf1SzfGyA6hQUbmY6aVohwZEaQg1V5GNimeSyVBEN7q5jQsP1LeyRCgdxCNQchK",
  "key22": "5ey1hqaobNzwJEPGrCQoNi3aBSYsBhhihLErGkuCvGevtPsJ8tFGXNpo1gCUsxXq4V2GquW8MvBZzQ5eiXLFBgna",
  "key23": "3KusfvL7nuKnDHqufWToPhfVnt8nwGrvCPVTQ2CcNwzdVyTueHX6Jk8MG7EtpewUwDE14KZNmU7KQBCQikCitcY6",
  "key24": "4Un8bSAxjbSTskXE9ondHwL4m5nsLFwtA7w41eqapxbqS4DAuJUoczypFsaBYPjd3csc7obd257mWLkCQonVhCJM",
  "key25": "34TXCYP2MsZaCcohcPJ1mz4t4NwwovttCsANDvgpnaT1UZw93cG2ij7qpPKyzaeGuy8jyzcVC1AnGCz7L8CsUsvt",
  "key26": "UZakAxviVUtdkRQRiEaxoHM9q7VUb44szmJ9YqNkXNYnAXbLQMwooePLjsmP2dVTCiZQWi9JMZDJ1vGJBLSbwna"
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
