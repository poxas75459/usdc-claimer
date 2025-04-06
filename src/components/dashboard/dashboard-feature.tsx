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
    "3c7SdqJxzrMntPLYsRB7BDdLXfDn88embx1nEqCFxwLqCS5r9xVCpAWnqfN4nJJ8fhGeYarKskVSS9B2cSDbgnPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLxa76HSgNDGPiNoHuyKEyY31UNc3j4WhoNQMUTbUj6wVnaViZFVdY293qKwcNuxBVxCfFyVMVE9LyeNPitferE",
  "key1": "4FejjPWL1gN8TPeUfSkgQUFMVkmyzfU3kBewqjmeE1n3nR4LkTU2GmqHAwaghyQV5ndnPy2iRQPYCLuvH17xwxdK",
  "key2": "26cqwi2kKh26Sf1DfDZSKJvP6ii79GNu4vNNwb7NnCyzrHAi5qNd4m7F3y4KRKGyPsH5S3yea9QwYTSwdAZ1JJsk",
  "key3": "3d2MXcgkA9JNRRA72nZ6WNVBCtNAGdmCE3Qt3uF9HgWQDjoKpBTUTXbDz3eHYJhnPmaJD98bP5pxPm7XcxzV1j8A",
  "key4": "59t6hkjKE9wB1wXBQn7uazyrhDxcvyZu1rhxm8TTbaAHBLGARSDN8dmDgGNAD2NFQEonKMQ6vTVZmMiMK8TggWi4",
  "key5": "61WHSiG8vVp3Et422G2d2JgmNNfk6M92fyJTTXvQFGYPnFXnCAUDWagy5srA3oT1LZ62TJskDqND3G5RDXiBhNuv",
  "key6": "3idebBw9cpMpvmBuDZDNgq8Wm4WNSdz7hQo65pRCoPkVVsfRQVFRmhQBsfFTnbhUsCxfcdxhGz7rWGxEMRbXgApw",
  "key7": "5xd3oGGiLDqibjnLrbdj5GJ6CtaCRtPMaA2dboA6kzVVCF9JfWymaLMrJKkRXHqG9mzKLipS4PEWZ4hm6Sy59nVR",
  "key8": "wkJVzsknz4Hn2WiMAarJSXTuxbM76uG4QfRcGUX31UGnpV2BbCqZogkoNF9LmCzMsHL1EBThw3oyeXSYUpKYtqU",
  "key9": "4nScSXuUNj7sDpzU5EVDVfaz7hqmdjw2G6zpYcaQCpfdidoXrTiuejmBsaLziherMQsWLqoqQWk2Zo4xPh83efc8",
  "key10": "5vc5rvYDph6YnFQ5XB8m5Z6LE86pFkzj1nYZ8H13Xmk2jWXKbF9sLsJ8HDtDuJ3CVcwxoBW2Rk3GqPMoeymWj2vC",
  "key11": "b42WvCB1i1AzJctgj52mG17GiAmPRmMLMHDAGuv9WqUBdASWxgXoaRjenRUjxcLNE5VpnaTQWXpuqAfoAzEJuAz",
  "key12": "5edFTHLxM7C3r9j6fUe6dddKyWPVfaDS4a3hsHJSbaoX6KC5odoXCdW66vQkrhWcMTZpnJxot2FFt8aYdTngyN7X",
  "key13": "38PkXRTvnXF4XZHUKwHQabRGagxwTJrAnhcGNggV7HLAVAb8mFtHs5tGkdePYAsCTg8QHypkBYzybsuPmaobf5Gv",
  "key14": "4FJmdFy2XN1tWa7zhzE8dCoajXbkZJt7z6DMPrWzucGJ54ii4cryzYhgDjhnXokrJTMsKkXx5knFhKFAdfid3gHi",
  "key15": "5ZRpExc3JizduaiNVdYF4hJ2ccVbsbPe3tbiXdTb4z7CGgZ91QTzHmSD2HZ5j6X7tBJffKZaVhgcw1UmB5WeKhLB",
  "key16": "3ro1R25U614pkyAzW8sxQiTX6uPcdnyz87zS576eCx8ekuwp3X6Jyyq87JEEoqgxw1CshLhbS6u3dQMSLTvYf4UK",
  "key17": "4y45LKhEpUZ27onqfUM9geANhnyCV1jp3UnMQ3uzRtHRAbeQzPuVQK5XVjbb4KDpeHyEfNfeVG55vKSxbCiSSBDG",
  "key18": "34HJdeEjEGfn1vAaRYan7WvTiUJMWRpRrD4kJZXmimJtyeBEnc6mDTm9AfV66LgEGq6kGcnbRDi9gBFDtQWkQV5Z",
  "key19": "39SsaRDVXn2eqF5jZQK5HCz8DVyath6x3mbpcMvFDpZef9f8bRj2XCdYeF7msSuhuwRWRRm3RhJkNyCdQ3WAhdd8",
  "key20": "ZqSZ51CY9dmgdqUGvUTShEVh2tYCACyrQtk5JnZruMP6y21DcgUVdY6Nro12LMpWtf5ZNogBXT8cigx5vGFjRuW",
  "key21": "E95wMLKHNcMTTkDTzJk9zYRttDCmGoUGgRKkSfN2q5PzGeoPvUMp2X1NzuK6MykUaNEcA1gLfVG6wZZ13m6ZKuB",
  "key22": "3ZTdkrk4ZQ3AT6k2U9H2CZ3vgtC2kEBK9KVuhcxHy7nNFEmboFQ1Y2TYuBd2UDSt5GpFYdQiy3zCAYs3s8WYnhVx",
  "key23": "5EhsaQEnFQbSKKexcHBazFQefX3QbAsJWZtiuSoCVN9e8ADZjZkewypqohm5DEYYLZc8Rzi9Vp4jek17Nz6X9Msr",
  "key24": "3pfcXGpdqSEZiEhaXZBCaue5jc2k6o6UFSEfNUQ7QiLe7orSpTgedAQ8KMkh4vRpuuz6YDp7giSbaGRtf7k8YLqd"
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
